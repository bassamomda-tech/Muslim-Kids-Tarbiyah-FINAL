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
    dataAt:   'mk:dataAt',     // {profileId: timestamp} → when each bucket was last saved (cross-device newer-wins)
    lang:     'bunyanLang',    // shared UI pref (NOT per child)
  };

  /* keys that belong to the SYSTEM (shared), never snapshotted as child progress.
     EXCEPTION: mk:cornerCard is the bag's per-corner score snapshot — it is CHILD
     data, so it must follow the child through snapshot/restore (otherwise one
     child's bag shows another child's progress). */
  function isSystemKey(k) {
    if (k === 'mk:cornerCard') return false;
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
    { id:'quran',   icon:'📖', color:'#1A9B7B', name:{ar:'بستان القرآن', en:'Quran Garden'}, base:'corners/little-district/pages/quran.html' },   // حُفّاظ القرآن is a gate inside this garden
    { id:'sunnah',  icon:'📜', color:'#6C4BD8', name:{ar:'حُفّاظ السنة', en:'Sunnah Keepers'}, base:'corners/treasures/sunnah.html' },
    { id:'social',  icon:'🏘️', color:'#D4A017', name:{ar:'حيّنا الصغير',      en:'Our Little District'},   base:'corners/little-district/pages/social.html' },
    { id:'heart',   icon:'💚', color:'#6C3483', name:{ar:'ركن القلب السليم',  en:'Pure Heart Corner'},     base:'corners/heroes-fortress/heart.html' },
    { id:'history', icon:'🏰', color:'#E67E22', name:{ar:'حصن الأبطال',       en:"Heroes' Fortress"},      base:'corners/heroes-fortress/fortress.html' },
    { id:'sport',   icon:'🏊', color:'#27AE60', name:{ar:'النادي الرياضي',    en:'Sports Club'},           base:'corners/little-district/pages/sport.html' },
    { id:'academy', icon:'🔭', color:'#2980B9', name:{ar:'أكاديمية المبدعين', en:"Innovators' Academy"},   base:'corners/heroes-fortress/academy.html' },
    { id:'quds',    icon:'🕌', color:'#2E8B57', name:{ar:'ركن القدس والأمة',  en:'Al-Quds & Ummah'},       base:'corners/little-district/pages/quds.html' },
    { id:'stories-little', icon:'📚', color:'#C1663A', name:{ar:'مكتبة القصص للصغار', en:'Little Stories Library'}, base:'corners/stories/little.html' },
    { id:'competitions', icon:'🏆', color:'#7A3FB0', name:{ar:'ساحة المسابقات', en:'Competitions Arena'}, base:'corners/competitions/competitions.html' },
    { id:'skills', icon:'🛠️', color:'#7A3FB0', name:{ar:'صانع المهارات', en:'Skills Maker'}, base:'corners/skills/index.html' },
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
    var at = jget(K.dataAt, {}); at[id] = Date.now(); jset(K.dataAt, at);   // stamp so the newest device wins on sync
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

  /* ─────────── ⭐ stars from every learning place (one list for the bag & bag page) ───────────
     Each page keeps its own progress key; this only READS them. They are ordinary
     child keys, so they follow the child (snapshot) and go to the cloud (mk-cloud). */
  var STAR_PLACES = [
    /* j:true = already counted as journey stations (10 points each) — never double-count */
    { id:'surahs', j:true, ic:'📖', n:{ar:'سور القرآن (قرأتُها وتدبّرتُها)',en:'Surahs read & reflected on'}, h:'corners/little-district/pages/quran-surahs.html', c:'#1A9B7B', t:38,
      get:function(){ var n=0; for (var i=0;i<LS.length;i++){ var k=LS.key(i); if (k && k.indexOf('qg:done:')===0 && LS.getItem(k)==='1') n++; } return n; } },
    { id:'hifz', ic:'🌱', n:{ar:'حُفّاظ القرآن — نجوم الحفظ',en:'Quran Huffaz — memorizing stars'}, h:'corners/quran-hifz/index.html', c:'#1FAE8C', t:0,
      get:function(){ return parseInt(LS.getItem('qg_stars'),10)||0; } },
    { id:'forty', j:true, ic:'🕌', n:{ar:'الأربعون النووية',en:'The Forty Hadith'}, h:'corners/little-district/pages/hadith.html', c:'#1A9B7B', t:42,
      get:function(){ var n=0; for (var i=1;i<=42;i++) if (LS.getItem('hd:done:h'+(i<10?'0':'')+i)==='1') n++; return n; } },
    { tr:'hadith-cards', h:'corners/little-district/pages/hadith.html', ic:'🃏', n:{ar:'بطاقات الأربعين',en:'Forty Hadith Cards'}, c:'#2E8B57', t:42 },
    { tr:'hadith-stories', j:true, ic:'📖', n:{ar:'قصص السنة',en:'Sunnah Stories'}, c:'#C1663A', t:100 },
    { tr:'prophet-moments', j:true, ic:'🌙', n:{ar:'مواقف النبي ﷺ',en:'Moments of the Prophet ﷺ'}, c:'#2C5F8A', t:18 },
    { tr:'names-cards',     ic:'✨', n:{ar:'أسماء الله الحسنى',en:'Names of Allah'}, c:'#6C3483', t:35 },
    { tr:'ubudiyah',        ic:'🤲', n:{ar:'العبودية وتعظيم الله',en:'Servanthood & Glorifying Allah'}, c:'#117A8B', t:10 },
    { tr:'shubuhat',        ic:'🛡️', n:{ar:'أسئلة صعبة وأجوبة مطمئنة',en:'Hard Questions, Calm Answers'}, c:'#2C5F8A', t:21 },
    { tr:'adhkar',          ic:'📿', n:{ar:'معاني الأذكار والأدعية',en:'Meanings of Adhkar & Duas'}, c:'#1F7A4D', t:34 },
    { tr:'eids',            ic:'🎉', n:{ar:'الأعياد في العبادات',en:'Eids in Worship'}, c:'#D4A017', t:10 },
    { tr:'landmarks',       ic:'🕋', n:{ar:'المعالم والخرائط',en:'Landmarks & Maps'}, c:'#2980B9', t:18 },
    { tr:'tours',           ic:'🧭', n:{ar:'جولات افتراضية',en:'Virtual Tours'}, c:'#E67E22', t:5 }
  ];
  /* → [{id, icon, name, color, href, done, total}] ; total 0 = open-ended (Hifz stars) */
  function stars() {
    var R = rootPrefix();
    return STAR_PLACES.map(function (p) {
      var n = 0;
      try { n = p.tr ? (jget('tr:' + p.tr, []) || []).length : p.get(); } catch (e) {}
      if (p.t) n = Math.min(n, p.t);
      return { id: p.id || p.tr, icon: p.ic, name: p.n, color: p.c, href: R + (p.h || 'corners/treasures/' + p.tr + '.html'), done: n, total: p.t, journey: !!p.j };
    });
  }

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
    stars: stars,
    hasPin: hasPin, setPin: setPin, checkPin: checkPin,
    locks: locks, isLocked: isLocked, setLock: setLock,
    lang: lang,
  };

  /* ═══ Calm mode (🍃) — one shared switch for the whole site ═══
     Set from any «كنوز المعرفة» page (key mk:calm, shared across children).
     When on, every corner that loads mk-system.js drops all animation and
     transitions, so nothing moves unless the child taps it. */
  (function calmMode() {
    try {
      if (localStorage.getItem('mk:calm') !== 'true') return;
      document.documentElement.classList.add('calm');
      if (document.getElementById('mk-calm-style')) return;
      var st = document.createElement('style'); st.id = 'mk-calm-style';
      st.textContent = 'html.calm *,html.calm *::before,html.calm *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}';
      (document.head || document.documentElement).appendChild(st);
    } catch (e) {}
  })();

  /* ═══ «أكمِل من حيث توقّفت» — remember the child's last learning page ═══
     Saved under mk_last (NOT an mk: key on purpose: it is the child's own data,
     so it follows the child on switch and goes to the cloud backup).
     Utility pages (login, bag, library, downloads…) are not remembered. */
  (function rememberLast() {
    try {
      var p = location.pathname, i = p.indexOf('/corners/'); if (i < 0) return;
      var rel = p.slice(i + 1);
      if (/^corners\/(shared|news)\//.test(rel) || /print|Printable|admin|certificate/i.test(rel)) return;   // utility & news pages are not «where you stopped»
      function save() {
        try {
          var t = (document.title || '').split(/\s[|·—]\s/)[0].trim();
          var cid = window.MK_CORNER;
          var h = document.getElementById('chName') || (document.body.classList.contains('reading') && document.getElementById('rNm'));   // a Fortress station / an open surah: its own name
          if (h && (h.innerText || h.textContent).trim()) t = (h.innerText || h.textContent).trim().split('\n')[0];
          var PAGE = { 'corners/quran-hifz/index.html': ['quran', 'حُفّاظ القرآن', 'Quran Huffaz'], 'corners/little-district/pages/hadith.html': ['sunnah'],
                       'corners/little-district/pages/quran-surahs.html': ['quran'], 'corners/little-district/pages/quran-stories.html': ['quran'], 'corners/little-district/pages/quran-companions.html': ['quran'],
                       'corners/little-district/pages/ibada-journeys.html': ['ibada'] }[rel.split(/[?#]/)[0]];
          if (PAGE && PAGE[1]) t = localStorage.getItem('bunyanLang') === 'en' ? PAGE[2] : PAGE[1];
          if (PAGE) cid = PAGE[0];
          if (!t) return;
          var P = window.TR_PAGE, ic = (P && P.icon) || '', c = null, cname = null;
          CORNERS.forEach(function (x) { if (!c && (x.base === rel || (cid && x.id === cid))) c = x; });
          if (!c) {                                                          // only when ONE corner lives in this folder
            var dir = rel.replace(/[^/]+$/, ''), same = CORNERS.filter(function (x) { return x.base.replace(/[^/]+$/, '') === dir; });
            if (same.length === 1) c = same[0];
          }
          if (P && P.back && P.back.label && P.back.label.ar !== 'المدينة' && !(c && c.base === rel)) cname = P.back.label;   // card/story pages name the corner they live in (not «the city»)
          if (rel.indexOf('corners/heroes-fortress/chapter.html') === 0 || rel.indexOf('corners/heroes-fortress/era.html') === 0) c = c || CORNERS.filter(function (x) { return x.id === 'history'; })[0];
          var q = location.search.replace(/([?&])lang=[^&]*&?/, '$1').replace(/[?&]$/, '');
          LS.setItem('mk_last', JSON.stringify({ href: rel + q + location.hash, title: t, icon: ic || (c ? c.icon : '📖'), corner: cname || (c ? c.name : null), at: Date.now() }));
        } catch (e) {}
      }
      if (document.readyState === 'complete') setTimeout(save, 400); else window.addEventListener('load', function () { setTimeout(save, 400); });
      window.addEventListener('hashchange', save);
    } catch (e) {}
  })();

  /* ═══ Modest character faces (mk-avatars.js): boys with a kufi, girls & women in hijab ═══ */
  (function loadAvatars() {
    try {
      if (window.MKAvatar || document.querySelector('script[src*="mk-avatars.js"]')) return;
      var s = document.createElement('script'); s.src = rootPrefix() + 'corners/shared/mk-avatars.js'; s.async = true; s.onerror = function () {};
      (document.head || document.documentElement).appendChild(s);
    } catch (e) {}
  })();

  /* ═══ Display settings panel (mk-a11y.js) — every page that loads mk-system ═══ */
  (function loadA11y() {
    try {
      if (window.__mkA11y || document.querySelector('script[src*="mk-a11y.js"]')) return;
      var s = document.createElement('script'); s.src = rootPrefix() + 'corners/shared/mk-a11y.js'; s.async = true; s.onerror = function () {};
      (document.head || document.documentElement).appendChild(s);
    } catch (e) {}
  })();

  /* ═══ Cloud backup — turned on for EVERY page automatically ═══
     mk-system.js loads on every corner/journey page, but the family cloud
     backup (mk-cloud.js) was only wired into a few pages, so progress earned
     inside a corner was never uploaded until the child happened to return to
     the home page. Here we lazy-load the Firebase SDK + config + mk-cloud on
     any page that doesn't already include them, so backup runs everywhere.
     Guarded so pages that already load these scripts are untouched. */
  (function loadCloud() {
    try {
      if (window.__mkCloud) return;                                   // already active
      if (document.querySelector('script[src*="mk-cloud.js"]')) return; // page loads it itself
      var R = rootPrefix() + 'corners/shared/';
      var srcs = [
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js',
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js',
        R + 'firebase-config.js',
        R + 'mk-cloud.js'
      ];
      srcs.forEach(function (src) {
        var s = document.createElement('script');
        s.src = src; s.async = false;        // async=false → run in insertion order
        s.onerror = function () {};          // offline / blocked: fail silently
        document.head.appendChild(s);
      });
    } catch (e) {}
  })();
})();
