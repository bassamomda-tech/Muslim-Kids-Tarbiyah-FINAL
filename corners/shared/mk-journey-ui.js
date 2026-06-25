/* ════════════════════════════════════════════════════════════════
   mk-journey-ui.js — Faith Minaret two-part journey enhancements.
   Loaded AFTER the journey engine (…-app.js) and BEFORE quiz-engine.js.
   Reads page config from window.MK_JUI = { part, prefix, total, next }.
   • Clearer "الجزء الأول / الثاني" labels on the chapter-bar tabs.
   • Part 1: after the map, a "go to Part 2" guide that lights up when
     Part 1 is complete.
   • Part 2: tells quiz-engine the test sits below the stations.
   (The floating bag is now the global mk-bag.js; the certificate CTA
    is injected universally by quiz-engine.js.)
   ════════════════════════════════════════════════════════════════ */
(function () {
  var CFG = window.MK_JUI || {};
  function L() { return localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return L() === 'ar'; }
  function tx(a, e) { return ar() ? a : e; }
  function $(s) { return document.querySelector(s); }

  if (CFG.part === 2) window.MK_TEST_AFTER_MAP = true;

  /* ───────── 1 · clearer part labels on the chapter bar ───────── */
  function labelParts() {
    document.querySelectorAll('.chapter-bar .cb-tab').forEach(function (tb, i) {
      if (tb.querySelector('.cb-part')) return;
      var lab = document.createElement('span');
      lab.className = 'cb-part'; lab.setAttribute('data-i', i);
      tb.insertBefore(lab, tb.firstChild);
    });
    paintPartLabels();
  }
  function paintPartLabels() {
    document.querySelectorAll('.chapter-bar .cb-part').forEach(function (el) {
      var i = +el.getAttribute('data-i');
      el.textContent = i === 0 ? tx('الجزء الأول', 'Part 1') : tx('الجزء الثاني', 'Part 2');
    });
  }

  /* ───────── 2 · Part 1 → Part 2 guide (after the map) ───────── */
  function buildNextGuide() {
    if (CFG.part !== 1 || !CFG.next) return;
    var map = $('#map'); if (!map || document.getElementById('mkNextPart')) return;
    var box = document.createElement('a');
    box.id = 'mkNextPart'; box.className = 'mk-next'; box.href = CFG.next.href;
    box.innerHTML =
      '<div class="mk-next-ic">' + (CFG.next.icon || '🔭') + '</div>' +
      '<div class="mk-next-tx"><b class="mk-next-t"></b><span class="mk-next-s"></span></div>' +
      '<span class="mk-next-go"></span>';
    map.parentNode.insertBefore(box, map.nextSibling);
    paintNext(); refreshNext();
  }
  function paintNext() {
    var b = document.getElementById('mkNextPart'); if (!b || !CFG.next) return;
    b.querySelector('.mk-next-t').textContent = tx('الجزء الثاني: ', 'Part 2: ') + (ar() ? CFG.next.ar : CFG.next.en);
    b.querySelector('.mk-next-go').textContent = tx('ادخل ←', 'Enter →');
  }
  function partDone() {
    var total = CFG.total || document.querySelectorAll('#map .node:not(.locked)').length || 0;
    var dn = 0;
    try { dn = (JSON.parse(localStorage.getItem(CFG.prefix + 'Done') || '[]') || []).length; } catch (e) {}
    return { done: dn, total: total, complete: total > 0 && dn >= total };
  }
  function refreshNext() {
    var b = document.getElementById('mkNextPart'); if (!b) return;
    var p = partDone(), sub = b.querySelector('.mk-next-s');
    if (p.complete) {
      b.classList.add('ready');
      sub.textContent = tx('🎉 أكملتَ الجزء الأول! تابِع رحلتك هنا', '🎉 You finished Part 1! Continue your journey here');
    } else {
      b.classList.remove('ready');
      sub.textContent = tx('تابِع بقيّةَ الرحلة — أو ادخُل الآن', 'Continue the journey — or enter now') +
        (p.total ? (' · ' + p.done + '/' + p.total) : '');
    }
  }

  /* ───────── styles ───────── */
  function injectCSS() {
    if (document.getElementById('mk-jui-css')) return;
    var s = document.createElement('style'); s.id = 'mk-jui-css';
    s.textContent =
      /* the old top collections row → moved to the global bag + cert CTA */
      '.collections{display:none!important}' +
      '.cb-part{display:block;font-size:.62rem;font-weight:800;opacity:.7;letter-spacing:.04em;margin-bottom:1px}' +
      '.chapter-bar .cb-tab{flex-direction:column;align-items:flex-start;line-height:1.25}' +
      '.chapter-bar .cb-tab.active .cb-part{opacity:1;color:inherit}' +
      '.mk-next{display:flex;align-items:center;gap:.9rem;max-width:560px;margin:1.2rem auto;padding:1rem 1.2rem;border-radius:1.3rem;cursor:pointer;text-decoration:none;font-family:"Tajawal","Nunito",sans-serif;border:1.5px solid rgba(232,181,48,.5);background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.04));color:inherit;width:calc(100% - 2rem);box-sizing:border-box}' +
      '.mk-next .mk-next-ic{font-size:2.1rem;flex:0 0 auto}' +
      '.mk-next-tx{flex:1;display:flex;flex-direction:column;line-height:1.5}' +
      '.mk-next-t{font-size:1.1rem;color:#F5CC5A;font-weight:900}' +
      '.mk-next-s{font-size:.82rem;opacity:.85}' +
      '.mk-next-go{flex:0 0 auto;background:#2980B9;color:#fff;border-radius:2rem;padding:.55rem 1.1rem;font-weight:800;font-size:.9rem;white-space:nowrap}' +
      '.mk-next.ready{border-color:#2ecc71;box-shadow:0 0 0 2px rgba(46,204,113,.35),0 12px 30px rgba(0,0,0,.3);animation:mkNextPulse 2s ease-in-out infinite}' +
      '@keyframes mkNextPulse{0%,100%{box-shadow:0 0 0 2px rgba(46,204,113,.3),0 12px 30px rgba(0,0,0,.3)}50%{box-shadow:0 0 0 5px rgba(46,204,113,.18),0 12px 30px rgba(0,0,0,.3)}}';
    document.head.appendChild(s);
  }

  function boot() {
    injectCSS(); labelParts();
    document.querySelectorAll('.lang button, #btnAr, #btnEn').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { paintPartLabels(); }, 40); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
