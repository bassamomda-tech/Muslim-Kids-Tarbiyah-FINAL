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
  var user = null, lastSaved = '', adopted = false;

  function jget(k, d) { try { var v = LS.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }

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
                pin: LS.getItem('mk:parentPin') || '', lang: LS.getItem('bunyanLang') || '' };
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
    if (!user) return Promise.resolve(false);
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

  /* merge the cloud copy into this device: re-add missing children (with
     their full progress). Local data always wins for children that already
     exist here — the device copy is the freshest. */
  function adoptCloud(data) {
    var sys = data.sys || {}, buckets = data.buckets || {};
    var local = jget('mk:profiles', []);
    var freshDevice = local.length === 0;
    var byId = {}; local.forEach(function (p) { if (p) byId[p.id] = 1; });
    var added = false;
    (sys.profiles || []).forEach(function (p) {
      if (!p || !p.id || byId[p.id]) return;
      local.push(p); byId[p.id] = 1; added = true;
      try { LS.setItem('mk:data:' + p.id, JSON.stringify(buckets[p.id] || {})); } catch (e) {}
    });
    if (added) { try { LS.setItem('mk:profiles', JSON.stringify(local)); } catch (e) {} }
    if (freshDevice && local.length) {
      if (sys.locks && !LS.getItem('mk:locks')) { try { LS.setItem('mk:locks', JSON.stringify(sys.locks)); } catch (e) {} }
      if (sys.pin && !LS.getItem('mk:parentPin')) { try { LS.setItem('mk:parentPin', sys.pin); } catch (e) {} }
      var act = (sys.active && byId[sys.active]) ? sys.active : local[0].id;
      restoreActive(act);
    }
    if (added) { try { window.dispatchEvent(new CustomEvent('mk-cloud-restored')); } catch (e) {} }
    return added;
  }

  auth.onAuthStateChanged(function (u) {
    user = u || null;
    if (!user) return;
    db.collection('progress').doc(user.uid).get().then(function (snap) {
      if (!adopted && snap.exists) {
        var doc = snap.data();
        if (doc && doc.data && doc.data.kind === 'mk-family-v1') { adopted = true; adoptCloud(doc.data); }
      }
      saveNow();
    }).catch(function () {});
  });

  setInterval(function () { saveNow(); }, 60000);
  window.addEventListener('pagehide', function () { saveNow(); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') saveNow(); });

  window.MKCloud = { saveNow: saveNow, isOn: function () { return !!user; } };
})();
