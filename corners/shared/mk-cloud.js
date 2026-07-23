/* ════════════════════════════════════════════════════════════════
   mk-cloud.js — Family cloud backup of children + progress.
   Fixes: "logging out loses my kids" and "progress not saved".

   What it does (on any page that loads the Firebase compat SDK +
   firebase-config.js + mk-system.js):
   • When the parent is signed in, the WHOLE family state — child
     profiles, the active child, corner locks, parent PIN and every
     child's progress bucket (mk:data:*) — is saved to Firestore at
     progress/{uid} (owner-only per firestore.rules).
   • On sign-in (same device after logout, a new device, or after the
     browser cleared storage) the cloud copy is restored: missing
     children are re-added with all their progress.
   • Saves automatically: right after restore, every 60s when something
     changed, when the tab is hidden/closed, and via MKCloud.saveNow()
     (called by the logout button before signing out).
   Safe everywhere: if Firebase or the config is missing it does nothing.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__mkCloud) return; window.__mkCloud = true;
  if (!window.firebase || !window.firebaseConfig) return;
  try { if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(window.firebaseConfig); } catch (e) { return; }
  var auth, db;
  try { auth = firebase.auth(); db = firebase.firestore(); } catch (e) { return; }
  if (!auth || !db) return;

  var LS = window.localStorage;
  var user = null, lastSaved = '', adopted = false, ready = false, reloading = false;

  function jget(k, d) { try { var v = LS.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }

  /* Is this a LIVE per-child progress key (as opposed to a system/device/account
     key)? Mirrors MK.isSystemKey: everything under mk:* is system EXCEPT
     mk:cornerCard, which is child data. Account/community/device keys are skipped. */
  function isChildKey(k) {
    if (!k || skipKey(k)) return false;
    if (k === 'mk:cornerCard') return true;
    if (k === 'bunyanLang' || k.indexOf('mk:') === 0) return false;
    return true;
  }
  /* does the live store currently hold ANY progress for the active child? */
  function liveHasProgress() {
    for (var i = 0; i < LS.length; i++) { if (isChildKey(LS.key(i))) return true; }
    return false;
  }
  /* write a saved bucket's keys back into the live store (no wipe) */
  function hydrateLive(bucket) {
    if (!bucket) return;
    Object.keys(bucket).forEach(function (k) { try { LS.setItem(k, bucket[k]); } catch (e) {} });
  }

  /* device/session-only keys — never sent to the cloud */
  function skipKey(k) {
    return !k || k.indexOf('firebase:') === 0 || k.indexOf('mkauth:') === 0 || k.indexOf('mkcomm:') === 0 ||
           k.indexOf('mkcloud:') === 0 || k === 'mk:bagPos' || k.indexOf('mk:lastSeenPushed') === 0 || k.indexOf('__') === 0;
  }

  /* full family snapshot: system state + every child's progress bucket */
  function buildData() {
    try { if (window.MK && MK.snapshotActive) MK.snapshotActive(); } catch (e) {}   // flush live keys into the active child's bucket
    var profiles = jget('mk:profiles', []);
    var sys = { profiles: profiles, active: LS.getItem('mk:active') || '', locks: jget('mk:locks', {}),
                pin: LS.getItem('mk:parentPin') || '', lang: LS.getItem('bunyanLang') || '',
                bps: LS.getItem('mk:bps') || '',     // behaviour points (shared, keyed by child) — back these up too
                dataAt: jget('mk:dataAt', {}) };     // per-child save timestamps — lets the newest device win
    var buckets = {};
    profiles.forEach(function (p) {
      if (!p || !p.id) return;
      var b = jget('mk:data:' + p.id, {}), c = {};
      Object.keys(b).forEach(function (k) { var v = b[k]; if (!skipKey(k) && v != null && String(v).length <= 60000) c[k] = v; });
      buckets[p.id] = c;
    });
    var data = { kind: 'mk-family-v1', sys: sys, buckets: buckets };
    /* Firestore doc limit ≈1MB — drop the largest entries until it fits */
    var s = JSON.stringify(data);
    if (s.length > 900000) {
      var entries = [];
      Object.keys(buckets).forEach(function (pid) { Object.keys(buckets[pid]).forEach(function (k) { entries.push([pid, k, String(buckets[pid][k]).length]); }); });
      entries.sort(function (a, b) { return b[2] - a[2]; });
      for (var i = 0; i < entries.length && s.length > 900000; i++) { delete buckets[entries[i][0]][entries[i][1]]; s = JSON.stringify(data); }
    }
    return data;
  }

  function saveNow() {
    /* Never write to the cloud until we've fetched & merged the cloud copy for
       this session. Otherwise an early timer / tab-hide / navigation would
       overwrite the good backup with this device's not-yet-restored (empty)
       state — which is exactly what made progress "reload as zero". */
    if (!user || !ready || reloading) return Promise.resolve(false);
    var data;
    try { data = buildData(); } catch (e) { return Promise.resolve(false); }
    var s = JSON.stringify(data);
    if (s === lastSaved) return Promise.resolve(true);            // nothing changed
    return db.collection('progress').doc(user.uid).set({ at: Date.now(), data: data })
      .then(function () { lastSaved = s; return true; })
      .catch(function () { return false; });
  }

  /* hydrate the active child's bucket into live localStorage keys */
  function restoreActive(id) {
    try {
      if (window.MK && MK.setActive) { LS.removeItem('mk:active'); MK.setActive(id); return; }
    } catch (e) {}
    var b = jget('mk:data:' + id, {});
    Object.keys(b).forEach(function (k) { try { LS.setItem(k, b[k]); } catch (e) {} });
    try { LS.setItem('mk:active', id); } catch (e) {}
  }

  /* clear the live store of the active child's progress keys (system/device/account keys kept) */
  function clearLiveChild() {
    var doomed = [];
    for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (isChildKey(k)) doomed.push(k); }
    doomed.forEach(function (k) { try { LS.removeItem(k); } catch (e) {} });
  }

  /* merge the cloud copy into this device. Children missing here are re-added.
     For children that already exist, whichever copy is NEWER wins (per-child
     timestamp) — that's what makes progress follow the child across devices.
     If the active child's copy changes, the live keys are rehydrated and the
     page refreshed so every corner reflects it. */
  function adoptCloud(data) {
    var sys = data.sys || {}, buckets = data.buckets || {};
    var cloudAt = sys.dataAt || {};
    var localAt = jget('mk:dataAt', {});
    var local = jget('mk:profiles', []);
    var freshDevice = local.length === 0;
    var byId = {}; local.forEach(function (p) { if (p) byId[p.id] = 1; });
    var active = LS.getItem('mk:active');
    var changed = false, activeChanged = false;

    (sys.profiles || []).forEach(function (p) {
      if (!p || !p.id) return;
      var cloudB = buckets[p.id];
      var cloudTs = cloudAt[p.id] || 0;
      if (!byId[p.id]) {
        // new child for this device — bring them in with their progress
        local.push(p); byId[p.id] = 1; changed = true;
        try { LS.setItem('mk:data:' + p.id, JSON.stringify(cloudB || {})); } catch (e) {}
        localAt[p.id] = cloudTs;
      } else {
        // already here — take the cloud copy only if it is strictly newer
        var localTs = localAt[p.id] || 0;
        var hasCloud = cloudB && Object.keys(cloudB).length;
        if (hasCloud && cloudTs > localTs) {
          try { LS.setItem('mk:data:' + p.id, JSON.stringify(cloudB)); } catch (e) {}
          localAt[p.id] = cloudTs; changed = true;
          if (p.id === active) activeChanged = true;
        }
      }
    });
    if (changed) {
      try { LS.setItem('mk:profiles', JSON.stringify(local)); } catch (e) {}
      try { LS.setItem('mk:dataAt', JSON.stringify(localAt)); } catch (e) {}
    }

    /* shared system values: adopt only when this device doesn't already have them */
    if (sys.locks && !LS.getItem('mk:locks'))     { try { LS.setItem('mk:locks', JSON.stringify(sys.locks)); } catch (e) {} }
    if (sys.pin && !LS.getItem('mk:parentPin'))   { try { LS.setItem('mk:parentPin', sys.pin); } catch (e) {} }
    if (sys.bps && !LS.getItem('mk:bps'))         { try { LS.setItem('mk:bps', sys.bps); } catch (e) {} }
    if (sys.lang && !LS.getItem('bunyanLang'))    { try { LS.setItem('bunyanLang', sys.lang); } catch (e) {} }

    if (freshDevice && local.length) {
      // brand-new / cleared device: load the cloud's active child
      var act = (sys.active && byId[sys.active]) ? sys.active : local[0].id;
      restoreActive(act);
      try { window.dispatchEvent(new CustomEvent('mk-cloud-restored')); } catch (e) {}
      return;
    }

    // existing device: refresh live keys when the active child's saved copy
    // just changed (newer cloud copy), OR when live progress is simply empty
    // but we now hold a bucket for them (recovers a wiped device).
    if (active && (activeChanged || !liveHasProgress())) {
      var b = jget('mk:data:' + active, {});
      if (b && Object.keys(b).length) {
        clearLiveChild(); hydrateLive(b);
        reloading = true;
        try { window.dispatchEvent(new CustomEvent('mk-cloud-restored')); } catch (e) {}
        setTimeout(function () { location.reload(); }, 60);
        return;
      }
    }
    if (changed) { try { window.dispatchEvent(new CustomEvent('mk-cloud-restored')); } catch (e) {} }
  }

  auth.onAuthStateChanged(function (u) {
    if (!u) { user = null; ready = false; adopted = false; return; }   // signed out: block saves until a fresh sign-in re-adopts
    user = u;
    db.collection('progress').doc(user.uid).get().then(function (snap) {
      try {
        if (!adopted && snap.exists) {
          var doc = snap.data();
          if (doc && doc.data && doc.data.kind === 'mk-family-v1') { adopted = true; adoptCloud(doc.data); }
        }
      } catch (e) {}
      if (reloading) return;          // a refresh is about to happen — don't save the interim state
      ready = true;
      saveNow();
    }).catch(function () { ready = true; });
  });

  setInterval(function () { saveNow(); }, 60000);
  window.addEventListener('pagehide', function () { saveNow(); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') saveNow(); });

  window.MKCloud = { saveNow: saveNow, isOn: function () { return !!user; } };
})();
