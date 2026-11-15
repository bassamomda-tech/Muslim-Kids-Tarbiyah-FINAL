/* mk-league-promo.js — announces «مسابقة الأسبوع» ONCE to every signed-in family account.
   • Shown on the home page after the parent's account is signed in (Firebase auth, loaded by mk-system.js / mk-cloud.js).
   • "Once" is remembered on this device (mk:leaguePromo:<uid>) AND on the account (users/{uid}.leaguePromoSeen, merge-write,
     owner-only by the existing rules) — so a second device does not show it again either.
   • Never shown to signed-out visitors, never twice, and never on top of another dialog. */
(function () {
  'use strict';
  if (window.__mkLeaguePromo) return; window.__mkLeaguePromo = true;
  var LS = null; try { LS = window.localStorage; } catch (e) { return; }
  function ar() { try { return (LS.getItem('bunyanLang') || 'ar').indexOf('en') !== 0; } catch (e) { return true; } }
  function T(a, e) { return ar() ? a : e; }
  function root() { try { return (window.MK && MK.rootPrefix) ? MK.rootPrefix() : ''; } catch (e) { return ''; } }
  var tries = 0;
  function wait() {
    if (window.firebase && firebase.apps && firebase.apps.length && firebase.auth) return hook();
    if (window.firebase && window.firebaseConfig && firebase.initializeApp && !firebase.apps.length) { try { firebase.initializeApp(window.firebaseConfig); return hook(); } catch (e) {} }
    if (++tries < 40) setTimeout(wait, 500);
  }
  /* pages like the home page do not load Firebase: load it in the background only when this browser has a saved
     sign-in (Firebase keeps it in the IndexedDB database «firebaseLocalStorageDb») — visitors who never signed in load nothing extra */
  function load(srcs, done) { var i = 0; (function next() { if (i >= srcs.length) return done(); var s = document.createElement('script'); s.src = srcs[i++]; s.onload = next; s.onerror = function () {}; document.head.appendChild(s); })(); }
  function boot() {
    if (window.firebase || document.querySelector('script[src*="firebase-app-compat"]')) return wait();
    if (!window.indexedDB || !indexedDB.databases) return;
    indexedDB.databases().then(function (list) {
      if (!list.some(function (d) { return d && d.name === 'firebaseLocalStorageDb'; })) return;
      var rq = indexedDB.open('firebaseLocalStorageDb');
      rq.onsuccess = function () {
        var db = rq.result, has = false;
        try {
          if (!db.objectStoreNames.contains('firebaseLocalStorage')) { db.close(); return; }
          var cur = db.transaction('firebaseLocalStorage', 'readonly').objectStore('firebaseLocalStorage').openCursor();
          cur.onsuccess = function () { var c = cur.result; if (c) { if (String(c.key).indexOf('firebase:authUser') === 0) has = true; c.continue(); } else { db.close(); if (has) go(); } };
        } catch (e) { db.close(); }
      };
    }, function () {});
    function go() {
      var V = 'https://www.gstatic.com/firebasejs/10.12.5/';
      load([V + 'firebase-app-compat.js', V + 'firebase-auth-compat.js', V + 'firebase-firestore-compat.js', root() + 'corners/shared/firebase-config.js'], wait);
    }
  }
  if (document.readyState === 'complete') setTimeout(boot, 1500); else window.addEventListener('load', function () { setTimeout(boot, 1500); });
  function hook() {
    var auth; try { auth = firebase.auth(); } catch (e) { return; }
    var done = false;
    auth.onAuthStateChanged(function (u) {
      if (!u || done) return;
      var k = 'mk:leaguePromo:' + u.uid;
      if (LS.getItem(k)) return;
      done = true;
      var db = null; try { db = firebase.firestore(); } catch (e) {}
      if (!db) return show(u, k, null);
      db.collection('users').doc(u.uid).get().then(function (s) {
        if (s.exists && s.data() && s.data().leaguePromoSeen) { try { LS.setItem(k, '1'); } catch (e) {} return; }
        show(u, k, db);
      }, function () { show(u, k, null); });
    });
  }
  function remember(u, k, db) {
    try { LS.setItem(k, '1'); } catch (e) {}
    if (db) try { db.collection('users').doc(u.uid).set({ leaguePromoSeen: true }, { merge: true }).catch(function () {}); } catch (e) {}
  }
  function show(u, k, db) {
    var busy = [].some.call(document.querySelectorAll('.mklp, [role="dialog"], [aria-modal="true"]'), function (e) { var r = e.getBoundingClientRect(), cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0'; });
    if (busy && (show.n = (show.n || 0) + 1) < 40) { setTimeout(function () { show(u, k, db); }, 1500); return; }
    var css = document.createElement('style');
    css.textContent = '.mklp{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;background:rgba(8,30,54,.55);animation:mklpIn .3s}' +
      '.mklp .c{position:relative;max-width:420px;width:100%;background:linear-gradient(160deg,#FFF8E6,#fff 55%);border-radius:26px;padding:22px 20px 18px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3);font-family:Tajawal,Nunito,sans-serif;color:#1D2B44;border:3px solid #E8B530}' +
      '.mklp .m{font-size:3.4rem;line-height:1;animation:mklpPop .7s cubic-bezier(.3,1.6,.5,1)}' +
      '.mklp h2{margin:.4rem 0 .2rem;font-size:1.5rem}.mklp p{margin:.3rem 0;font-weight:700;line-height:1.7;color:#3E4D66}' +
      '.mklp ul{text-align:start;margin:.6rem auto;padding-inline-start:1.2rem;max-width:320px;font-weight:700;line-height:1.9}' +
      '.mklp .r{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-top:.8rem}' +
      '.mklp a,.mklp button{min-height:48px;padding:0 1.2rem;border-radius:999px;font:900 1rem Tajawal,Nunito,sans-serif;cursor:pointer;display:inline-flex;align-items:center;text-decoration:none}' +
      '.mklp a{background:linear-gradient(135deg,#3BB36D,#1F7A44);color:#fff;border:none}.mklp button{background:#fff;color:#1D2B44;border:1.5px solid #E2D6B5}' +
      '.mklp .x{position:absolute;top:8px;inset-inline-end:10px;min-height:36px;width:36px;padding:0;justify-content:center;border:none;background:transparent;font-size:1.2rem}' +
      '@keyframes mklpIn{from{opacity:0}}@keyframes mklpPop{from{transform:scale(.2) rotate(-25deg)}}html.calm .mklp,html.calm .mklp .m{animation:none}';
    document.head.appendChild(css);
    var d = document.createElement('div'); d.className = 'mklp'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-labelledby', 'mklpT');
    d.dir = ar() ? 'rtl' : 'ltr';
    d.innerHTML = '<div class="c"><button type="button" class="x" aria-label="' + T('إغلاق', 'Close') + '">✕</button><div class="m">🏅</div>' +
      '<h2 id="mklpT">' + T('جديد: مسابقة الأسبوع!', 'New: the Weekly Contest!') + '</h2>' +
      '<p>' + T('نتسابق في الخير مع أطفال الموقع كلّهم 🌟', 'Race in goodness with all the site\'s children 🌟') + '</p>' +
      '<ul><li>' + T('كلّ جمعة عشرة أسئلة جديدة', 'Ten new questions every Friday') + '</li><li>' + T('لوحة شرف لأفضل خمسين', 'A leaderboard of the top fifty') + '</li><li>' + T('شهادة تميّز للعشرة الأوائل', 'A certificate for the top ten') + '</li><li>' + T('اسمٌ مستعار يختاره الوالدان — بلا أسماء حقيقيّة', 'A nickname chosen by parents — no real names') + '</li></ul>' +
      '<div class="r"><a href="' + root() + 'corners/league/index.html" id="mklpGo">🏁 ' + T('شارك الآن', 'Join now') + '</a><button type="button" id="mklpLater">' + T('لاحقًا', 'Later') + '</button></div></div>';
    document.body.appendChild(d);
    remember(u, k, db);   /* shown once — remembered as soon as it appears */
    function close() { d.remove(); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') close(); }
    d.querySelector('.x').onclick = close; d.querySelector('#mklpLater').onclick = close;
    d.addEventListener('click', function (e) { if (e.target === d) close(); });
    document.addEventListener('keydown', esc);
    try { d.querySelector('#mklpGo').focus(); } catch (e) {}
  }
})();
