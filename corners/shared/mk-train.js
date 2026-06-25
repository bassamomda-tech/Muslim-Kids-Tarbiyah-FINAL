/* ════════════════════════════════════════════════════════════════
   mk-train.js — "قطار الحياة" (Train of Life) inter-journey nav.
   At the bottom of any journey page it shows a friendly train that
   carries the child to the NEXT journey in the same corner (order
   from MK_JOURNEYS). Lights up once the current journey is complete;
   on the last journey of a corner it celebrates and points back to
   the corner hub. Loads after mk-journeys.js (and after quiz-engine
   so it can sit below the test + certificate).
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkTrain) return; window.__mkTrain = true;
  function lang() { return (window.MK && MK.lang && MK.lang()) || localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return lang() === 'ar'; }
  function tx(a, e) { return ar() ? a : e; }
  function base(p) { return String(p).split('/').pop(); }            // filename(+query)
  /* convert a project-root-relative target (e.g. corners/little-district/pages/ibada.html)
     into a path relative to the CURRENT document, so cross-folder corner links work */
  function rel(target) {
    var p = location.pathname, i = p.indexOf('/corners/');
    if (i < 0) return base(target);
    var rest = p.slice(i + 1).split('/'); rest.pop();   // drop filename → [corners, <folder>, …]
    return new Array(rest.length + 1).join('../') + target;
  }

  function curIdentity() {
    var file = base(location.pathname.split('?')[0]);
    var q = new URLSearchParams(location.search).get('j');
    return { file: file, q: q };
  }
  function journeyMatches(j, id) {
    var jp = base(j.page), jq = null;
    var qi = jp.indexOf('?j=');
    if (qi > -1) { jq = jp.slice(qi + 3); jp = jp.slice(0, qi); }
    if (jp !== id.file) return false;
    if (jq) return jq === id.q;
    return true;
  }

  function find() {
    if (!window.MK_JOURNEYS) return null;
    var id = curIdentity();
    var cur = MK_JOURNEYS.filter(function (j) { return journeyMatches(j, id); })[0];
    if (!cur) return null;
    var sameCorner = MK_JOURNEYS.filter(function (j) { return j.corner === cur.corner; });
    var idx = sameCorner.indexOf(cur);
    var next = idx > -1 ? sameCorner[idx + 1] : null;
    return { cur: cur, next: next, corner: cur.corner, idx: idx, count: sameCorner.length };
  }

  function complete(j) {
    if (!window.MK_J) return false;
    return j.total > 0 && MK_J.completedOf(j) >= j.total;
  }

  var NODE;
  function findAnchor() {
    var map = document.getElementById('map') || document.querySelector('.era-wrap') || document.getElementById('stations') || document.querySelector('.wrap') || document.querySelector('.garden') || document.querySelector('.courtyard') || document.querySelector('.masjid');
    if (!map) {
      // generic fallback: first sizable content section after the header,
      // skipping readers / overlays / print areas / bag / toast / confetti.
      var skip = /reader|overlay|toast|confetti|print|mkbag|mk-bag|mktrain/i;
      var kids = document.body.children;
      for (var i = 0; i < kids.length; i++) {
        var el = kids[i], tag = el.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'HEADER' || tag === 'FOOTER') continue;
        if (skip.test(el.className || '') || skip.test(el.id || '')) continue;
        map = el; break;
      }
    }
    if (!map) return null;
    return document.querySelector('.dtests') || document.getElementById('mkqCertCta') || document.querySelector('.mkq-banner') || document.querySelector('.sec-testbtn') || document.querySelector('.hd-testbtn') || document.getElementById('mkNextPart') || map;
  }

  function mount(info) {
    var anchor = findAnchor();
    if (!anchor) return;
    NODE = document.createElement('div');
    NODE.id = 'mkTrain';
    NODE.className = 'mk-train';
    anchor.parentNode.insertBefore(NODE, anchor.nextSibling);
    paint(info);
  }

  /* Render ONLY a "next corner" car on a page that isn't a registered journey
     (e.g. heart.html, era.html?era=battles). Triggered by setting
     window.MK_TRAIN_NEXT_CORNER = '<cornerId>' before this script's boot. */
  function mountNextCorner(cornerId) {
    if (document.getElementById('mkTrain')) return;        // a real train already showed
    var nextC = nextCorner(cornerId);
    if (!nextC) return;                                    // no corner after this one
    var anchor = findAnchor();
    if (!anchor) return;
    css();
    var A = ar(), cn = A ? nextC.name.ar : nextC.name.en;
    var N = document.createElement('div');
    N.id = 'mkTrain';
    N.className = 'mk-train';
    N.innerHTML =
      '<div class="mk-train-rail"></div>' +
      '<a class="mk-train-car nextcorner" href="' + rel(nextC.base) + '">' +
        '<span class="mk-loco">\uD83D\uDE82<span class="mk-smoke">\uD83D\uDCA8</span></span>' +
        '<span class="mk-train-tx">' +
          '<span class="mk-train-k">' + tx('\uD83C\uDF8A \u0623\u062A\u0645\u0645\u062A\u064E \u0647\u0630\u0627 \u0627\u0644\u0631\u0643\u0646! \u0627\u0646\u062A\u0642\u0650\u0644 \u0628\u0627\u0644\u0642\u0637\u0627\u0631 \u0625\u0644\u0649', '\uD83C\uDF8A Corner complete! Ride on to') + '</span>' +
          '<b class="mk-train-nm">' + (nextC.icon || '\uD83C\uDFDB\uFE0F') + ' ' + tx('\u0627\u0644\u0631\u0643\u0646 \u0627\u0644\u062A\u0627\u0644\u064A: ', 'Next corner: ') + cn + '</b>' +
        '</span>' +
        '<span class="mk-train-go">' + tx('\u0627\u0646\u0637\u0644\u0650\u0642 \u2190', 'Go \u2192') + '</span>' +
      '</a>';
    anchor.parentNode.insertBefore(N, anchor.nextSibling);
    document.querySelectorAll('.lang button, #btnAr, #btnEn').forEach(function (b) {
      b.addEventListener('click', function () {
        setTimeout(function () { var ex = document.getElementById('mkTrain'); if (ex) ex.remove(); mountNextCorner(cornerId); }, 60);
      });
    });
  }

  function hubHref(cornerId) {
    var c = window.MK && MK.corner && MK.corner(cornerId);
    return c ? rel(c.base) : null;
  }
  function nextCorner(cornerId) {
    if (!(window.MK && MK.CORNERS)) return null;
    var arr = MK.CORNERS, i = -1;
    for (var k = 0; k < arr.length; k++) if (arr[k].id === cornerId) { i = k; break; }
    return (i > -1 && arr[i + 1]) ? arr[i + 1] : null;
  }

  function paint(info) {
    if (!NODE) return;
    var A = ar(), done = complete(info.cur);
    if (info.next) {
      var nm = A ? info.next.name.ar : info.next.name.en;
      var href = rel(info.next.page);
      NODE.classList.toggle('ready', done);
      NODE.innerHTML =
        '<div class="mk-train-rail"></div>' +
        '<a class="mk-train-car" href="' + href + '">' +
          '<span class="mk-loco">🚂<span class="mk-smoke">💨</span></span>' +
          '<span class="mk-train-tx">' +
            '<span class="mk-train-k">' + (done ? tx('🎉 أتممتَ هذه الرحلة! اركب قطارَ الحياة', '🎉 Journey complete! Hop on the Train of Life') : tx('🚉 قطارُ الحياة — المحطّةُ التالية', '🚉 Train of Life — next station')) + '</span>' +
            '<b class="mk-train-nm">' + (info.next.icon || '🚩') + ' ' + nm + '</b>' +
          '</span>' +
          '<span class="mk-train-go">' + tx('اركب ←', 'Ride →') + '</span>' +
        '</a>';
    } else {
      var nextC = nextCorner(info.corner);
      NODE.classList.add('ready');
      if (nextC) {
        var cn = A ? nextC.name.ar : nextC.name.en;
        NODE.innerHTML =
          '<div class="mk-train-rail"></div>' +
          '<a class="mk-train-car nextcorner" href="' + rel(nextC.base) + '">' +
            '<span class="mk-loco">🚂<span class="mk-smoke">💨</span></span>' +
            '<span class="mk-train-tx">' +
              '<span class="mk-train-k">' + tx('🎊 أتممتَ هذا الركن! انتقِل بالقطار إلى', '🎊 Corner complete! Ride on to') + '</span>' +
              '<b class="mk-train-nm">' + (nextC.icon || '🏛️') + ' ' + tx('الركن التالي: ', 'Next corner: ') + cn + '</b>' +
            '</span>' +
            '<span class="mk-train-go">' + tx('انطلِق ←', 'Go →') + '</span>' +
          '</a>';
      } else {
        var hub = hubHref(info.corner);
        NODE.innerHTML =
          '<div class="mk-train-rail"></div>' +
          '<a class="mk-train-car last" href="' + (hub || '#') + '">' +
            '<span class="mk-loco">🚂<span class="mk-smoke">💨</span></span>' +
            '<span class="mk-train-tx">' +
              '<span class="mk-train-k">' + tx('🏁 آخِرُ محطّةٍ في رحلةِ المدينة', '🏁 The very last station') + '</span>' +
              '<b class="mk-train-nm">' + tx('أتممتَ كلَّ الأركان — ما شاء الله!', 'You finished every corner — mashaAllah!') + '</b>' +
            '</span>' +
            '<span class="mk-train-go">' + tx('الرُّجوع ←', 'Back →') + '</span>' +
          '</a>';
      }
    }
  }

  function css() {
    if (document.getElementById('mk-train-css')) return;
    var s = document.createElement('style'); s.id = 'mk-train-css';
    s.textContent =
      '.mk-train{position:relative;max-width:580px;width:calc(100% - 2rem);margin:1.2rem auto 2rem;font-family:"Tajawal","Nunito",sans-serif}' +
      '.mk-train-rail{position:absolute;left:0;right:0;bottom:6px;height:6px;border-radius:4px;background:repeating-linear-gradient(90deg,rgba(232,181,48,.55) 0 14px,transparent 14px 26px);opacity:.7}' +
      '.mk-train-car{position:relative;display:flex;align-items:center;gap:.9rem;padding:1rem 1.2rem 1.3rem;border-radius:1.3rem 1.3rem 1.5rem 1.5rem;text-decoration:none;color:inherit;border:1.5px solid rgba(232,181,48,.5);background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.04));box-shadow:0 10px 26px rgba(0,0,0,.3);transition:transform .18s}' +
      '.mk-train-car:hover{transform:translateY(-2px)}' +
      '.mk-train-car:hover .mk-loco{animation:mkChug .5s ease-in-out infinite}' +
      '.mk-loco{position:relative;font-size:2.2rem;flex:0 0 auto;animation:mkChug 1.6s ease-in-out infinite}' +
      '.mk-smoke{position:absolute;top:-.5rem;inset-inline-start:1.4rem;font-size:.9rem;opacity:.0;animation:mkSmoke 1.6s ease-in-out infinite}' +
      '.mk-train-tx{flex:1;display:flex;flex-direction:column;line-height:1.5;min-width:0}' +
      '.mk-train-k{font-size:.8rem;opacity:.85}' +
      '.mk-train-nm{font-size:1.12rem;color:#F5CC5A;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.mk-train-go{flex:0 0 auto;background:#2980B9;color:#fff;border-radius:2rem;padding:.55rem 1.1rem;font-weight:800;font-size:.92rem;white-space:nowrap}' +
      '.mk-train.ready .mk-train-car{border-color:#2ecc71;box-shadow:0 0 0 2px rgba(46,204,113,.35),0 12px 30px rgba(0,0,0,.3)}' +
      '.mk-train.ready .mk-train-go{background:#1F8A5B}' +
      '.mk-train.ready .mk-loco{animation:mkChug .7s ease-in-out infinite}' +
      '.mk-train-car.last .mk-train-go{background:#8E7CC3}' +
      '.mk-train-car.nextcorner .mk-train-go{background:#C2410C}' +
      '@keyframes mkChug{0%,100%{transform:translateX(0) translateY(0)}25%{transform:translateX(2px) translateY(-1px)}75%{transform:translateX(-2px) translateY(-1px)}}' +
      '@keyframes mkSmoke{0%{opacity:0;transform:translateY(0) scale(.7)}30%{opacity:.8}100%{opacity:0;transform:translateY(-10px) scale(1.2)}}' +
      '@media(prefers-reduced-motion:reduce){.mk-loco,.mk-smoke{animation:none!important}}';
    document.head.appendChild(s);
  }

  function boot() {
    var info = find();
    if (!info) {
      // Not a registered journey page — but a page may still ask for a
      // "next corner" car (heart.html, era.html?era=battles).
      if (window.MK_TRAIN_NEXT_CORNER) mountNextCorner(window.MK_TRAIN_NEXT_CORNER);
      return;
    }
    css(); mount(info);
    document.querySelectorAll('.lang button, #btnAr, #btnEn').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { paint(info); }, 50); });
    });
    var map = document.getElementById('map');
    if (map) new MutationObserver(function () { paint(info); }).observe(map, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
