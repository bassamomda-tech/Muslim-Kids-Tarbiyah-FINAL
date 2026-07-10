/* ════════════════════════════════════════════════════════════════
   mk-system.js — Shared platform layer (offline, localStorage only)
   ----------------------------------------------------------------
   • Child profiles (multi-child on one device) with REAL per-child
     progress isolation via snapshot/restore of all non-system keys.
   • Parent PIN gate.
   • Per-corner lock/unlock (PIN-protected by the parent).
   • Canonical corner list shared by every feature.
   No dependencies. Safe to load on any page. Window global: MK.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS = window.localStorage;
  var K = {
    profiles: 'mk:profiles',
    active:   'mk:active',
    pin:      'mk:parentPin',
    locks:    'mk:locks',
    data:     'mk:data:',      // + profileId  → that child's progress bucket
    lang:     'bunyanLang',    // shared UI pref (NOT per child)
  };

  /* keys that belong to the SYSTEM (shared), never snapshotted as child progress */
  function isSystemKey(k) {
    return k === K.lang || k.indexOf('mk:') === 0;
  }

  function jget(key, fallback) {
    try { var v = LS.getItem(key); return v == null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  }
  function jset(key, val) { try { LS.setItem(key, JSON.stringify(val)); } catch (e) {} }

  function uid() { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* ═══════════════ THE ONE CORNER LIST · EDIT HERE ONLY ═══════════════
     This is the single source of truth for every corner menu in the whole
     project. Add / remove / rename / reorder / change an icon HERE and it
     updates on EVERY corner automatically — never edit menus page-by-page.
     base = path from project ROOT; each page resolves it relatively.        */
  var CORNERS = [
    { id:'aqeeda',  icon:'🕋', color:'#C0392B', name:{ar:'منارة العقيدة',     en:'Faith Minaret'},        base:'corners/faith-minaret/aqeeda.html' },
    { id:'ibada',   icon:'🌙', color:'#117A8B', name:{ar:'واحة العبادة',      en:'Worship Oasis'},        base:'corners/little-district/pages/ibada.html' },
    { id:'quran',   icon:'📖', color:'#1A9B7B', name:{ar:'بستان القرآن والسنة', en:'Quran & Sunnah Garden'}, base:'corners/little-district/pages/quran.html' },
    { id:'social',  icon:'🏘️', color:'#D4A017', name:{ar:'حيّنا الصغير',      en:'Our Little District'},   base:'corners/little-district/pages/social.html' },
    { id:'heart',   icon:'💚', color:'#6C3483', name:{ar:'ركن القلب السليم',  en:'Pure Heart Corner'},     base:'corners/heroes-fortress/heart.html' },
    { id:'history', icon:'🏰', color:'#E67E22', name:{ar:'حصن الأبطال',       en:"Heroes' Fortress"},      base:'corners/heroes-fortress/fortress.html' },
    { id:'sport',   icon:'🏊', color:'#27AE60', name:{ar:'النادي الرياضي',    en:'Sports Club'},           base:'corners/little-district/pages/sport.html' },
    { id:'academy', icon:'🔭', color:'#2980B9', name:{ar:'أكاديمية المبدعين', en:"Innovators' Academy"},   base:'corners/heroes-fortress/academy.html' },
    { id:'quds',    icon:'🕌', color:'#2E8B57', name:{ar:'ركن القدس والأمة',  en:'Al-Quds & Ummah'},       base:'corners/little-district/pages/quds.html' },
    { id:'hifz',    icon:'🌱', color:'#1F7A4D', name:{ar:'حُفّاظ القرآن',      en:'Quran Huffaz'},          base:'corners/quran-hifz/index.html' },
  ];

  /* ─────────── profiles ─────────── */
  function profiles() { return jget(K.profiles, []); }
  function activeId() { return LS.getItem(K.active) || null; }
  function activeProfile() { var id = activeId(); return profiles().filter(function (p) { return p.id === id; })[0] || null; }

  /* snapshot every non-system key into the given profile's bucket */
  function snapshotInto(id) {
    if (!id) return;
    var bucket = {};
    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (!isSystemKey(k)) bucket[k] = LS.getItem(k);
    }
    jset(K.data + id, bucket);
  }
  /* wipe all non-system keys, then write the profile's bucket back into the live store */
  function restoreFrom(id) {
    var doomed = [];
    for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (!isSystemKey(k)) doomed.push(k); }
    doomed.forEach(function (k) { LS.removeItem(k); });
    var bucket = jget(K.data + id, {});
    Object.keys(bucket).forEach(function (k) { try { LS.setItem(k, bucket[k]); } catch (e) {} });
  }

  function addProfile(name, avatar, color) {
    var list = profiles();
    var p = { id: uid(), name: (name || '').trim() || (window.MK && MK.lang() === 'en' ? 'Child' : 'طفل'),
              avatar: avatar || '🧒', color: color || '#D4A017', createdAt: Date.now() };
    list.push(p); jset(K.profiles, list);
    return p;
  }

  /* switch active child: persist current child's progress, load the target's */
  function setActive(id) {
    var cur = activeId();
    if (cur === id) return;
    if (cur) snapshotInto(cur);          // save outgoing child
    restoreFrom(id);                     // load incoming child (empty bucket → fresh start)
    LS.setItem(K.active, id);
  }

  function removeProfile(id) {
    var list = profiles().filter(function (p) { return p.id !== id; });
    jset(K.profiles, list);
    LS.removeItem(K.data + id);
    if (activeId() === id) {
      LS.removeItem(K.active);
      // also clear live progress so the next child starts clean
      var doomed = [];
      for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (!isSystemKey(k)) doomed.push(k); }
      doomed.forEach(function (k) { LS.removeItem(k); });
    }
  }
  function renameProfile(id, name) {
    var list = profiles();
    list.forEach(function (p) { if (p.id === id) p.name = (name || '').trim() || p.name; });
    jset(K.profiles, list);
  }

  /* ─────────── parent PIN ─────────── */
  function hasPin() { return !!LS.getItem(K.pin); }
  function setPin(pin) { if (pin) LS.setItem(K.pin, String(pin)); else LS.removeItem(K.pin); }
  function checkPin(pin) { return hasPin() ? String(pin) === LS.getItem(K.pin) : true; }

  /* ─────────── corner locks ─────────── */
  function locks() { return jget(K.locks, {}); }
  function isLocked(cornerId) { return !!locks()[cornerId]; }
  function setLock(cornerId, locked) {
    var L = locks();
    if (locked) L[cornerId] = true; else delete L[cornerId];
    jset(K.locks, L);
  }

  /* ─────────── lang helper ─────────── */
  function lang() { return LS.getItem(K.lang) || 'ar'; }

  /* ─────────── nav helpers (single source of truth for every corner menu) ─────────
     EVERY corner page builds its menu from CORNERS above — edit that array ONCE
     (add / rename / reorder / re-icon a corner) and all corners update together.
     rootPrefix() returns the ../ path from the current page up to the project root,
     so cornerNav() hands back links that work from any folder depth. */
  function rootPrefix() {
    var p = location.pathname, i = p.indexOf('/corners/');
    if (i < 0) return '';
    var rest = p.slice(i + 1).split('/'); rest.pop();
    return new Array(rest.length + 1).join('../');
  }
  function cornerNav() {
    var R = rootPrefix();
    return CORNERS.map(function (c) {
      return { id: c.id, icon: c.icon, color: c.color,
               nameAr: c.name.ar, nameEn: c.name.en, name: c.name,
               url: R + c.base };
    });
  }
  /* page-relative link to any project-root path (e.g. the Parents or Home page) */
  function rel(rootPath) { return rootPrefix() + String(rootPath).replace(/^\//, ''); }

  /* ═══ Cloud read-aloud bridge ═══
     After deploying the TTS Cloud Function, paste its URL here (ONE place).
     Leave '' to use the free built-in browser voices everywhere. */
  var TTS_ENDPOINT = 'https://narrate-ltyvjxcneq-uc.a.run.app';   // live cloud voice (Google TTS)
  if (TTS_ENDPOINT && !window.MK_TTS_ENDPOINT) {
    window.MK_TTS_ENDPOINT = TTS_ENDPOINT;
    var s = document.createElement('script');
    s.src = rootPrefix() + 'corners/shared/mk-tts-cloud.js';
    s.defer = true; document.head.appendChild(s);
  }

  /* ═══ Narrator gender per corner ═══
     Corners whose guide/storyteller is a BOY use a male voice (same
     natural Arabic quality). All others stay female (default).
     Edit MALE_CORNERS to taste — values are corner ids from CORNERS above. */
  var MALE_CORNERS = ['history', 'sport'];
  if (!window.MK_NARRATOR_GENDER) {
    try {
      var path = location.pathname.toLowerCase();
      var hit = CORNERS.filter(function (c) {
        var file = c.base.split('/').pop().replace('.html', '').toLowerCase();
        return path.indexOf('/' + file + '.html') >= 0 || path.indexOf('/' + file + '/') >= 0
            || path.indexOf(c.base.toLowerCase()) >= 0;
      })[0];
      if (hit && MALE_CORNERS.indexOf(hit.id) >= 0) window.MK_NARRATOR_GENDER = 'male';
    } catch (e) {}
  }

  window.MK = {
    CORNERS: CORNERS,
    cornerNav: cornerNav, rootPrefix: rootPrefix, rel: rel,
    corner: function (id) { return CORNERS.filter(function (c) { return c.id === id; })[0]; },
    profiles: profiles, activeId: activeId, activeProfile: activeProfile,
    addProfile: addProfile, setActive: setActive, removeProfile: removeProfile, renameProfile: renameProfile,
    snapshotActive: function () { snapshotInto(activeId()); },
    hasPin: hasPin, setPin: setPin, checkPin: checkPin,
    locks: locks, isLocked: isLocked, setLock: setLock,
    lang: lang,
  };
})();
