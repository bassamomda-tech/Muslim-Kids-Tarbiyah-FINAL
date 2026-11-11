/* ════════════════════════════════════════════════════════════════
   mk-a11y.js — «إعدادات العرض» (display settings) for the whole site.
   One small ⚙️ button opens a panel: text size · typeface · line spacing ·
   contrast · motion · visual noise. Saved on this device (mk:a11y — a
   system key, shared by every child on the device, never sent anywhere).
   "Motion: reduced" IS the site's calm mode (mk:calm), so the 🍃 button on
   the card/story pages and this panel stay in sync.
   Loaded on every page by mk-system.js and nav-fix.js (guarded, runs once).
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkA11y) return; window.__mkA11y = true;
  var KEY = 'mk:a11y', LS;
  try { LS = window.localStorage; } catch (e) { return; }

  var DEF = { size: 0, font: 'std', space: 'n', contrast: 'std', noise: 'std', focus: 'off', ruler: 'off', brk: 0, sfx: 'on' };
  function read() { var o = {}; try { o = JSON.parse(LS.getItem(KEY) || '{}') || {}; } catch (e) {} for (var k in DEF) if (o[k] == null) o[k] = DEF[k]; return o; }
  function write(o) { try { LS.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function calm() { try { return LS.getItem('mk:calm') === 'true'; } catch (e) { return false; } }
  function setCalm(on) { try { LS.setItem('mk:calm', on ? 'true' : 'false'); } catch (e) {} }
  function lang() { try { return LS.getItem('bunyanLang') || 'ar'; } catch (e) { return 'ar'; } }
  function T(a, e) { return lang() === 'en' ? e : a; }

  /* ── what each setting does (CSS only; no page is rewritten) ── */
  var NOT_QURAN = ':not([class*="quran"]):not([class*="ayah"]):not([class*="mushaf"]):not([class*="verse"]):not(.matn):not(.ar-name)';
  var CSS =
    'html.a11y-t1 body{zoom:1.12}html.a11y-t2 body{zoom:1.25}' +
    'html.a11y-read body,html.a11y-read body *' + NOT_QURAN + '{font-family:Tahoma,"Segoe UI",Arial,sans-serif!important;letter-spacing:.01em;word-spacing:.06em}' +
    'html.a11y-roomy :is(p,li,blockquote,dd,td,figcaption,label,small,.tr-prose,.speech){line-height:1.95!important}' +
    'html.a11y-roomy body{word-spacing:.08em}' +
    'html.a11y-hc{filter:contrast(1.22)}html.a11y-hc *{text-shadow:none!important}' +
    'html.calm *,html.calm *::before,html.calm *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' +
    /* calmer = hide purely decorative layers (moving stars, verse ticker, character parade, flowers) */
    'html.a11y-quiet :is(#starsBg,.stars-bg,.moon-glow,.verse-ticker,#charsParade,div#stars.stars,.g-flowers,#confetti){display:none!important}' +
    'html.a11y-quiet body{background-image:none}' +
    /* 🎯 focus mode (ADHD-friendly): nothing moves or blinks, decorations and side extras step back,
       the guide's speech bubble stays folded, and the thing being worked on is clearly outlined */
    'html.a11y-focus *,html.a11y-focus *::before,html.a11y-focus *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' +
    'html.a11y-focus :is(#starsBg,.stars-bg,.moon-glow,.verse-ticker,#charsParade,div#stars.stars,.g-flowers,.bg-decor,#particles,.particles,.chars-parade){display:none!important}' +
    'html.a11y-focus body{background-image:none}' +
    'html.a11y-focus #guide .guide-bubble{display:none!important}' +
    'html.a11y-focus :is(aside,.side-panel,.sidebar){opacity:.5;transition:none}' +
    'html.a11y-focus :is(aside,.side-panel,.sidebar):is(:hover,:focus-within){opacity:1}' +
    'html.a11y-focus :is(a,button,[role=button],input,select,textarea):focus-visible{outline:4px solid #F5CC5A!important;outline-offset:3px!important}' +
    /* reading ruler: a bright band follows the finger / mouse, the rest of the page dims */
    '#mkRuler{position:fixed;inset:0;pointer-events:none;z-index:2147482900;display:none}' +
    'html.a11y-ruler #mkRuler{display:block}' +
    '#mkRuler i{position:absolute;left:0;right:0;background:rgba(10,20,35,.45)}' +
    '#mkRuler b{position:absolute;left:0;right:0;border-top:2px solid rgba(245,204,90,.9);border-bottom:2px solid rgba(245,204,90,.9)}' +
    /* time-to-a-break bar along the bottom of the screen */
    '#mkBrkBar{position:fixed;left:0;bottom:0;height:5px;z-index:2147482901;background:linear-gradient(90deg,#3BB36D,#F5CC5A);pointer-events:none;width:0}' +
    '#mkBrk{position:fixed;inset:0;z-index:2147483600;background:rgba(6,18,32,.78);display:none;align-items:center;justify-content:center;padding:16px;font-family:Tajawal,Nunito,Arial,sans-serif}' +
    '#mkBrk.open{display:flex}' +
    '#mkBrk .card{width:min(420px,100%);background:#FFF8EA;color:#2A2118;border-radius:24px;padding:22px 20px;text-align:center;box-shadow:0 30px 70px rgba(0,0,0,.5)}' +
    '#mkBrk .ic{font-size:64px;line-height:1}' +
    '#mkBrk b{display:block;font-size:22px;margin:8px 0 4px;color:#7A4A12}' +
    '#mkBrk p{font-size:18px;line-height:1.7;font-weight:700;margin:6px 0 12px}' +
    '#mkBrk .ring{width:96px;height:96px;margin:6px auto 12px;border-radius:50%;display:grid;place-items:center;font-size:28px;font-weight:900;color:#1F5A33;background:conic-gradient(#3BB36D calc(var(--p,0)*1%),#E4F4E9 0)}' +
    '#mkBrk .ring span{width:76px;height:76px;border-radius:50%;background:#FFF8EA;display:grid;place-items:center}' +
    '#mkBrk button{min-height:52px;padding:0 22px;border:none;border-radius:999px;font:900 17px Tajawal,Nunito,Arial,sans-serif;cursor:pointer;margin:4px;background:#EFE4CF;color:#5a4a22}' +
    '#mkBrk button.go{background:linear-gradient(135deg,#3BB36D,#1F7A44);color:#fff}';

  function apply() {
    var o = read(), h = document.documentElement, c = h.classList;
    c.toggle('a11y-t1', o.size === 1); c.toggle('a11y-t2', o.size === 2);
    c.toggle('a11y-read', o.font === 'read'); c.toggle('a11y-roomy', o.space === 'roomy');
    c.toggle('a11y-hc', o.contrast === 'high'); c.toggle('a11y-quiet', o.noise === 'calm');
    c.toggle('calm', calm());
    c.toggle('a11y-focus', o.focus === 'on'); c.toggle('a11y-ruler', o.ruler === 'on');
    try { if (window.AudioBus && AudioBus.setMuted) AudioBus.setMuted(o.sfx === 'off'); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('mk-a11y-applied', { detail: o })); } catch (e) {}
  }
  function style() {
    if (document.getElementById('mk-a11y-css')) return;
    var s = document.createElement('style'); s.id = 'mk-a11y-css'; s.textContent = CSS + UI_CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ── the panel (same layout as the reference: label + 2–3 big choices per row) ── */
  var ROWS = [
    { k: 'size', h: ['حجم الخط', 'Text size'], o: [[0, 'عادي', 'Normal'], [1, 'أكبر', 'Larger'], [2, 'الأكبر', 'Largest']] },
    { k: 'font', h: ['نوع الخط', 'Typeface'], o: [['std', 'عادي', 'Standard'], ['read', 'سهل القراءة', 'Readable']] },
    { k: 'space', h: ['تباعد الأسطر', 'Line spacing'], o: [['n', 'عادي', 'Normal'], ['roomy', 'واسع', 'Roomy']] },
    { k: 'contrast', h: ['التباين', 'Contrast'], o: [['std', 'عادي', 'Standard'], ['high', 'أعلى', 'Higher']] },
    { k: 'motion', h: ['الحركة', 'Motion'], o: [['std', 'عادية', 'Standard'], ['calm', 'أقلّ 🍃', 'Reduced 🍃']] },
    { k: 'noise', h: ['الزخارف والخلفيات', 'Visual noise'], o: [['std', 'عادية', 'Standard'], ['calm', 'أهدأ', 'Calmer']] },
    { sec: ['🎯 التركيز والانتباه', '🎯 Focus & attention'], sub: ['خياراتٌ تساعد مَن يتشتّت انتباهه بسرعة (مثل ADHD).', 'Options for children whose attention wanders quickly (e.g. ADHD).'] },
    { k: 'focus', h: ['وضع التركيز', 'Focus mode'], o: [['off', 'لا', 'Off'], ['on', 'نعم 🎯', 'On 🎯']] },
    { k: 'ruler', h: ['مسطرة القراءة', 'Reading ruler'], o: [['off', 'لا', 'Off'], ['on', 'نعم 📏', 'On 📏']] },
    { k: 'brk', h: ['استراحة حركة كلّ…', 'A movement break every…'], o: [[0, 'لا', 'Off'], [10, '١٠ د', '10 min'], [15, '١٥ د', '15 min'], [20, '٢٠ د', '20 min']] },
    { k: 'sfx', h: ['أصوات المؤثرات في الألعاب', 'Sound effects in games'], o: [['on', 'تعمل', 'On'], ['off', 'صامتة 🔇', 'Off 🔇']] }
  ];
  var FOCUS_SET = { focus: 'on', noise: 'calm', space: 'roomy', brk: 15 };   // the one-tap «شغّل خيارات التركيز»
  function val(k) { return k === 'motion' ? (calm() ? 'calm' : 'std') : read()[k]; }
  function paint(panel) {
    var dir = lang() === 'en' ? 'ltr' : 'rtl';
    panel.setAttribute('dir', dir);
    panel.innerHTML = '<div class="mka-hd"><b>' + T('إعدادات العرض', 'Display settings') + '</b><button class="mka-x" aria-label="' + T('إغلاق', 'Close') + '">✕</button></div>' +
      '<p class="mka-sub">' + T('تُطبَّق على الموقع كلّه وتُحفَظ على هذا الجهاز.', 'Applies across the whole site and is remembered on this device.') + '</p>' +
      ROWS.map(function (r) {
        if (r.sec) return '<div class="mka-sec"><b>' + T(r.sec[0], r.sec[1]) + '</b><span>' + T(r.sub[0], r.sub[1]) + '</span>' +
          '<button class="mka-preset" type="button">' + T('✨ شغّل خيارات التركيز كلّها', '✨ Turn on all focus options') + '</button></div>';
        var cur = val(r.k);
        return '<div class="mka-row"><div class="mka-lb">' + T(r.h[0], r.h[1]) + '</div><div class="mka-opts" role="radiogroup" aria-label="' + T(r.h[0], r.h[1]) + '">' +
          r.o.map(function (x) { var on = String(x[0]) === String(cur); return '<button role="radio" aria-checked="' + on + '" class="mka-o' + (on ? ' on' : '') + '" data-k="' + r.k + '" data-v="' + x[0] + '">' + T(x[1], x[2]) + '</button>'; }).join('') +
          '</div></div>';
      }).join('') +
      '<div class="mka-ft"><button class="mka-reset">' + T('إعادة الضبط', 'Reset all') + '</button></div>';
    panel.querySelector('.mka-x').onclick = close;
    panel.querySelector('.mka-reset').onclick = function () { write(DEF); setCalm(false); apply(); paint(panel); };
    var pr = panel.querySelector('.mka-preset');
    if (pr) pr.onclick = function () { var o = read(); for (var k in FOCUS_SET) o[k] = FOCUS_SET[k]; write(o); setCalm(true); apply(); paint(panel); try { window.dispatchEvent(new CustomEvent('mk-a11y-change')); } catch (e) {} };
    panel.querySelectorAll('.mka-o').forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.k, v = b.dataset.v;
        if (k === 'motion') setCalm(v === 'calm');
        else { var o = read(); o[k] = (k === 'size' || k === 'brk') ? +v : v; write(o); }
        apply(); paint(panel);
        try { window.dispatchEvent(new CustomEvent('mk-a11y-change')); } catch (e) {}
      };
    });
  }
  function close() { var p = document.getElementById('mkA11yPanel'); if (p) p.classList.remove('open'); var b = document.getElementById('mkA11yBtn'); if (b) b.setAttribute('aria-expanded', 'false'); }
  function toggle() {
    var p = document.getElementById('mkA11yPanel'), b = document.getElementById('mkA11yBtn');
    if (p.classList.contains('open')) return close();
    paint(p); p.classList.add('open'); b.setAttribute('aria-expanded', 'true');
    var f = p.querySelector('.mka-o.on'); if (f) try { f.focus({ preventScroll: true }); } catch (e) {}
  }
  function build() {
    if (document.getElementById('mkA11yBtn')) return;
    var b = document.createElement('button');
    b.id = 'mkA11yBtn'; b.type = 'button'; b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', 'mkA11yPanel');
    b.setAttribute('aria-label', T('إعدادات العرض', 'Display settings')); b.title = T('إعدادات العرض', 'Display settings');
    b.innerHTML = '<span aria-hidden="true">Aa</span>';
    var p = document.createElement('div'); p.id = 'mkA11yPanel'; p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', T('إعدادات العرض', 'Display settings'));
    document.body.appendChild(b); document.body.appendChild(p);
    b.onclick = function (e) { e.stopPropagation(); toggle(); };
    p.onclick = function (e) { e.stopPropagation(); };
    document.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  var UI_CSS =
    '#mkA11yBtn{position:fixed;bottom:86px;left:14px;z-index:2147482990;width:52px;height:52px;border-radius:50%;border:2px solid #fff;background:#0F4C45;color:#fff;font:900 1.15rem/1 Tajawal,Nunito,Arial,sans-serif;box-shadow:0 6px 18px rgba(0,0,0,.3);cursor:pointer}' +
    '#mkA11yBtn:focus-visible{outline:3px solid #F5CC5A;outline-offset:2px}' +
    '#mkA11yPanel{position:fixed;bottom:148px;left:12px;z-index:2147482991;width:min(400px,calc(100vw - 24px));max-height:calc(100vh - 170px);overflow:auto;background:#FBF8F1;color:#1F2A2A;border:1.5px solid #E2DACB;border-radius:20px;padding:16px 18px;box-shadow:0 18px 48px rgba(0,0,0,.28);font-family:Tajawal,Nunito,Arial,sans-serif;display:none}' +
    '#mkA11yPanel.open{display:block}' +
    '#mkA11yPanel .mka-hd{display:flex;align-items:center;justify-content:space-between;gap:8px}#mkA11yPanel .mka-hd b{font-size:1.15rem}' +
    '#mkA11yPanel .mka-x{background:#EFE9DC;border:0;border-radius:50%;width:32px;height:32px;font-weight:900;cursor:pointer;color:#1F2A2A}' +
    '#mkA11yPanel .mka-sub{margin:4px 0 10px;color:#5F6B66;font-size:.9rem;line-height:1.5}' +
    '#mkA11yPanel .mka-lb{font-size:.78rem;font-weight:800;letter-spacing:.04em;color:#5F6B66;margin:12px 0 6px}' +
    '#mkA11yPanel .mka-opts{display:flex;gap:8px}' +
    '#mkA11yPanel .mka-o{flex:1;min-height:46px;border-radius:12px;border:1.5px solid #E2DACB;background:#fff;color:#1F2A2A;font:800 .95rem Tajawal,Nunito,Arial,sans-serif;cursor:pointer}' +
    '#mkA11yPanel .mka-o.on{background:#0F4C45;border-color:#0F4C45;color:#fff}' +
    '#mkA11yPanel .mka-o:focus-visible{outline:3px solid #F5CC5A;outline-offset:2px}' +
    '#mkA11yPanel .mka-ft{border-top:1px solid #E2DACB;margin-top:14px;padding-top:10px;text-align:end}' +
    '#mkA11yPanel .mka-sec{margin:16px 0 2px;padding:12px;border-radius:14px;background:#EAF4EF;border:1.5px solid #CFE6DA}' +
    '#mkA11yPanel .mka-sec b{display:block;font-size:1.02rem;color:#0F4C45}' +
    '#mkA11yPanel .mka-sec span{display:block;font-size:.85rem;color:#4F6460;line-height:1.5;margin:2px 0 8px}' +
    '#mkA11yPanel .mka-preset{width:100%;min-height:46px;border-radius:12px;border:none;background:#0F4C45;color:#fff;font:900 .95rem Tajawal,Nunito,Arial,sans-serif;cursor:pointer}' +
    '#mkA11yPanel .mka-reset{background:none;border:0;color:#B4532A;font:800 .92rem Tajawal,Nunito,Arial,sans-serif;text-decoration:underline;cursor:pointer}' +
    '';

  style(); apply();
  window.addEventListener('storage', function (e) { if (e.key === KEY || e.key === 'mk:calm') apply(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  /* the 🏠 home button rides along: every page that has «Aa» also gets one tap back to the home page */
  try {
    if (!window.__mkHome && !document.querySelector('script[src*="mk-home.js"]')) {
      var me = document.querySelector('script[src*="mk-a11y.js"]'), hs = document.createElement('script');
      hs.src = me ? me.src.replace(/mk-a11y\.js.*$/, 'mk-home.js') : 'corners/shared/mk-home.js'; hs.async = true; hs.onerror = function () {};
      (document.head || document.documentElement).appendChild(hs);
    }
  } catch (e) {}
  /* the shared read-aloud bridge (natural voice + Quran verses in Sheikh Al-Husary's recitation)
     on pages that don't load mk-system.js — waits a moment so mk-system can load it first */
  setTimeout(function () {
    try {
      if (window.MKTTS || document.querySelector('script[src*="mk-tts-cloud.js"]')) return;
      var me = document.querySelector('script[src*="mk-a11y.js"]'), ts = document.createElement('script');
      ts.src = me ? me.src.replace(/mk-a11y\.js.*$/, 'mk-tts-cloud.js') : 'corners/shared/mk-tts-cloud.js'; ts.async = true; ts.onerror = function () {};
      (document.head || document.documentElement).appendChild(ts);
    } catch (e) {}
  }, 400);
  window.MKA11y = { apply: apply, open: function () { build(); toggle(); } };
})();

/* same as in mk-system.js (guarded, runs once): pages that load only mk-a11y.js get it too */
(function () {
  /* ═══ Floating buttons (🎒 bag, 🏠 home, Aa, 🗺️ map, voice switch) step aside while a story, quiz,
     certificate or any other full-screen window is open, so they never cover an answer or a page ═══ */
  (function () {
    if (window.__mkDockHide) return; window.__mkDockHide = true;
    var DOCK = '#mkBag,#mkA11yBtn,#mkHomeBtn,#mkCityNav,#mkv-toggle,#mkDockBtn';
    function ensureCss() {
      if (document.getElementById('mk-dock-css') || !document.head) return;
      var st = document.createElement('style'); st.id = 'mk-dock-css';
      st.textContent = 'body.mk-overlay #mkBag,body.mk-overlay #mkA11yBtn,body.mk-overlay #mkHomeBtn,body.mk-overlay #mkCityNav,body.mk-overlay #mkv-toggle,body.mk-overlay #mkDockBtn{opacity:0!important;pointer-events:none!important;transition:opacity .15s}';
      document.head.appendChild(st);
    }
    function overlayOpen() {
      var W = innerWidth, H = innerHeight, list = document.querySelectorAll('.open,[open],.show,.active,.is-open');
      for (var i = 0; i < list.length; i++) {
        var e = list[i]; if (e.closest(DOCK)) continue;
        var cs = getComputedStyle(e); if (cs.position !== 'fixed' || cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
        var r = e.getBoundingClientRect(); if (r.width >= W * 0.6 && r.height >= H * 0.6) return true;   // a big fixed layer = a window is open
      }
      return false;
    }
    var queued = false;
    function check() { queued = false; if (!document.body) return; ensureCss(); document.body.classList.toggle('mk-overlay', overlayOpen()); }
    function soon() { if (!queued) { queued = true; setTimeout(check, 250); } }   // at most 4 checks a second, even on busy game pages
    function start() { check(); new MutationObserver(soon).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class', 'open'], childList: true }); }
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  })();

})();

/* the shared top bar (mk-topbar.js) — pages normally include it themselves; this is the safety net */
(function () {
  if (window.__mkTopbar || document.querySelector('script[src*="mk-topbar.js"]')) return;
  var me = document.querySelector('script[src*="mk-a11y.js"]'), s = document.createElement('script');
  s.src = me ? me.src.replace(/mk-a11y\.js.*$/, 'mk-topbar.js') : 'mk-topbar.js'; s.async = true; s.onerror = function () {};
  (document.head || document.documentElement).appendChild(s);
})();

/* ═══ Calm screens (Phase 4) ═══
   1. ONE helper button instead of 3–4 floating ones: «🧰» opens Aa (display), 🗺️ (quick travel)
      and the reading-voice switch together; closed, the screen keeps only that one button.
   2. Gentle motion: decorative animations that loop for ever (twinkles, bobbing, glows) play for a
      few seconds, then rest in their first pose. Taps still animate; calm mode still stops all.
   3. The page guide's speech bubble folds away after a few seconds (tap the guide to read it again). */
(function () {
  if (window.__mkCalmScreens) return; window.__mkCalmScreens = true;
  var LS = window.localStorage;
  function lang() { try { return LS.getItem('bunyanLang') || 'ar'; } catch (e) { return 'ar'; } }
  function T(a, e) { return lang() === 'en' ? e : a; }

  /* 1 ── the helper button */
  var ITEMS = [['#mkA11yBtn', '#mkA11yBtn', 'حجم الخط والعرض', 'Text & display'],
               ['#mkCityNav', '#mkcnBtn', 'تنقّل سريع', 'Quick travel'],
               ['#mkv-toggle', '#mkv-toggle', 'صوت القراءة', 'Reading voice'],
               ['.float-map-btn', '.float-map-btn', 'خريطة المدينة', 'City map']];   // a page's own map button (parents, ibada…)
  function css() {
    if (document.getElementById('mk-dock2-css')) return;
    var s = document.createElement('style'); s.id = 'mk-dock2-css';
    s.textContent =
      '#mkDockBtn{position:fixed;bottom:18px;left:14px;z-index:2147482995;width:56px;height:56px;border-radius:50%;border:2px solid #fff;background:#0F4C45;color:#fff;font-size:1.55rem;line-height:1;box-shadow:0 6px 18px rgba(0,0,0,.3);cursor:pointer;display:grid;place-items:center;padding:0}' +
      '#mkDockBtn:focus-visible{outline:3px solid #F5CC5A;outline-offset:2px}' +
      'body.mk-dock #mkDockBtn[aria-expanded="true"]{background:#F5CC5A;color:#0F4C45}' +
      /* closed: the tools wait out of sight */
      'body.mk-dock:not(.mk-dock-open) #mkA11yBtn,body.mk-dock:not(.mk-dock-open) #mkcnBtn,body.mk-dock:not(.mk-dock-open) #mkv-toggle{display:none!important}' +
      'body.mk-dock:not(.mk-dock-open) .float-map-btn,body.mk-dock.mk-has-cn .float-map-btn{display:none!important}' +
      'body.mk-dock .float-map-btn{position:fixed!important;bottom:88px!important;left:16px!important;right:auto!important}' +
      /* open: a short column above the helper button, each with its name */
      'body.mk-dock #mkCityNav{bottom:88px!important;left:16px!important}' +
      'body.mk-dock #mkA11yBtn{bottom:156px!important;left:16px!important}' +
      'body.mk-dock #mkA11yPanel{bottom:88px!important}' +
      'body.mk-dock #mkv-toggle{bottom:224px!important;left:16px!important;right:auto!important;inset-inline-start:auto!important}' +
      'body.mk-dock-open [data-mkdl]::after{content:attr(data-mkdl);position:absolute;left:calc(100% + 8px);top:50%;transform:translateY(-50%);white-space:nowrap;background:#fff;color:#0F4C45;font:800 .85rem/1 Tajawal,Nunito,Arial,sans-serif;padding:.45rem .7rem;border-radius:999px;box-shadow:0 3px 10px rgba(0,0,0,.2);pointer-events:none}' +
      'body.mk-dock-open #mkcnBtn{position:relative}' +
      '@media print{#mkDockBtn{display:none!important}}';
    document.head.appendChild(s);
  }
  function present() { return ITEMS.filter(function (x) { var w = document.querySelector(x[0]); return w && getComputedStyle(w).display !== 'none'; }); }
  function setOpen(on) {
    document.body.classList.toggle('mk-dock-open', on);
    var b = document.getElementById('mkDockBtn'); if (b) { b.setAttribute('aria-expanded', on ? 'true' : 'false'); b.textContent = on ? '✕' : '🧰'; }
    if (on) ITEMS.forEach(function (x) { var el = document.querySelector(x[1]); if (el) el.setAttribute('data-mkdl', T(x[2], x[3])); });
  }
  function build() {
    if (document.getElementById('mkDockBtn') || !document.body) return true;
    var have = present(); if (have.length < 2) return false;   // one tool alone stays as it is
    css();
    var b = document.createElement('button'); b.id = 'mkDockBtn'; b.type = 'button';
    b.setAttribute('aria-label', T('أدواتي: حجم الخط، التنقّل، الصوت', 'My tools: text size, travel, voice')); b.title = b.getAttribute('aria-label');
    document.body.appendChild(b); document.body.classList.add('mk-dock'); if (document.getElementById('mkCityNav')) document.body.classList.add('mk-has-cn'); setOpen(false);
    b.onclick = function (e) { e.stopPropagation(); var on = !document.body.classList.contains('mk-dock-open'); setOpen(on);
      if (!on) { try { var p = document.getElementById('mkA11yPanel'); if (p) p.classList.remove('open'); var c = document.getElementById('mkcnPanel'); if (c) c.classList.remove('open'); } catch (er) {} } };
    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('mk-dock-open')) return;
      if (e.target.closest('#mkDockBtn,#mkA11yBtn,#mkA11yPanel,#mkCityNav,#mkv-toggle')) return;
      if (e.target.closest('.float-map-btn')) { setTimeout(function () { setOpen(false); }, 0); return; }   // its drawer covers the screen
      setOpen(false);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    return true;
  }
  var tries = 0;
  (function wait() { if (build() || ++tries > 12) return; setTimeout(wait, 500); })();   // the tools arrive from different scripts

  /* 2 ── gentle motion */
  var REST_AFTER = 6000;
  function keep(a) {   // loaders and progress keep turning
    var n = (a.animationName || '').toLowerCase(), el = a.effect && a.effect.target;
    if (/load|spinner|progress|busy/.test(n)) return true;
    return !!(el && el.closest && el.closest('[aria-busy="true"],.loading,.loader,.spinner,[role="progressbar"],#mkDockBtn'));
  }
  /* games move things with looping animations: never on activity / game / quiz pages, and only
     decorations that were already looping when the page opened (a game started by a tap starts later) */
  var NO_REST = window.MK_KEEP_MOTION || /\/activities\/activities\/|\/competitions\/|\/quiz|\/workshop\/|game/i.test(location.pathname);
  function rest() {
    if (NO_REST || !document.getAnimations || document.visibilityState !== 'visible') return;
    document.getAnimations().forEach(function (a) {
      try {
        if (a.playState !== 'running' || !(a instanceof CSSAnimation)) return;
        var tm = a.effect.getComputedTiming ? a.effect.getComputedTiming() : a.effect.getTiming();
        if (tm.iterations !== Infinity || keep(a)) return;
        if ((a.currentTime || 0) < REST_AFTER || a.startTime == null || a.startTime > 4000) return;
        a.currentTime = 0; a.pause();   // back to its first pose, still
      } catch (e) {}
    });
  }
  setInterval(rest, 2000);

  /* 3 ── the guide's bubble folds away (pages with #guide.guide, e.g. Heroes Fortress) */
  function guide() {
    var g = document.querySelector('#guide.guide'); if (!g) return;
    var av = g.querySelector('.guide-avatar');
    if (av && !av.__mkTuck) { av.__mkTuck = true; av.style.cursor = 'pointer'; av.setAttribute('role', 'button'); av.setAttribute('tabindex', '0');
      av.setAttribute('aria-label', T('اسمع المرشد', 'Show the guide'));
      var f = function () { g.classList.toggle('tuck'); }; av.addEventListener('click', f); av.addEventListener('keydown', function (e) { if (e.key === 'Enter') f(); }); }
    setTimeout(function () { if (!g.matches(':hover')) g.classList.add('tuck'); }, 7000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', guide); else guide();
})();

/* ═══ 🎯 Focus & attention helpers (settings live in mk:a11y, chosen in the «Aa» panel) ═══
   • reading ruler: a bright band follows the finger or mouse; the rest of the page dims
   • movement break: after N minutes of real use (counted across pages), a friendly 60-second
     movement / breathing break with a countdown ring; a thin bar shows the time left until it */
(function () {
  if (window.__mkFocusHelp) return; window.__mkFocusHelp = true;
  var LS = window.localStorage;
  function opts() { try { return JSON.parse(LS.getItem('mk:a11y') || '{}') || {}; } catch (e) { return {}; } }
  function lang() { try { return LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function T(a, e) { return lang() === 'en' ? e : a; }
  function ready(f) { if (document.body) f(); else document.addEventListener('DOMContentLoaded', f); }

  /* ── reading ruler ── */
  var ruler = null, band = 0;
  function rulerBuild() {
    if (ruler || !document.body) return;
    ruler = document.createElement('div'); ruler.id = 'mkRuler'; ruler.setAttribute('aria-hidden', 'true');
    ruler.innerHTML = '<i class="t"></i><b></b><i class="d"></i>'; document.body.appendChild(ruler); place(innerHeight * 0.4);
  }
  function place(y) {
    if (!ruler) return; band = Math.max(44, Math.round((parseFloat(getComputedStyle(document.body).fontSize) || 16) * 3.2));
    var top = Math.max(0, y - band / 2), t = ruler.children[0], m = ruler.children[1], d = ruler.children[2];
    t.style.top = '0'; t.style.height = top + 'px'; m.style.top = top + 'px'; m.style.height = band + 'px'; d.style.top = (top + band) + 'px'; d.style.bottom = '0';
  }
  function track(e) { if (opts().ruler !== 'on') return; var p = e.touches ? e.touches[0] : e; if (p) { rulerBuild(); place(p.clientY); } }
  document.addEventListener('pointermove', track, { passive: true });
  document.addEventListener('touchmove', track, { passive: true });
  document.addEventListener('pointerdown', track, { passive: true });

  /* ── movement breaks ── */
  var MOVES = [
    ['🙆', 'مُدّ يديك نحو السماء', 'Stretch your hands up to the sky', 'ارفع يديك عاليًا ٥ مرات، وقل في كلّ مرة: سبحان الله', 'Raise your hands high 5 times and say "SubhanAllah" each time'],
    ['🦘', 'قفزاتٌ صغيرة', 'Little jumps', 'اقفز ١٠ قفزات صغيرة في مكانك، ثم قف ساكنًا وتنفّس', 'Do 10 little jumps on the spot, then stand still and breathe'],
    ['🌬️', 'تنفّسٌ هادئ', 'Calm breathing', 'خذ نفسًا عميقًا من أنفك… واحد، اثنان، ثلاثة… ثم أخرجه ببطء. كرّر ٣ مرات', 'Breathe in slowly through your nose… one, two, three… then out slowly. Do it 3 times'],
    ['💧', 'اشرب ماءً', 'Drink some water', 'اشرب كوبًا من الماء جالسًا، وقل: بسم الله… الحمد لله', 'Drink a glass of water sitting down, and say "Bismillah… Alhamdulillah"'],
    ['🚶', 'امشِ قليلًا', 'Walk a little', 'امشِ في الغرفة ١٠ خطوات، وابحث عن ٣ أشياء لونها أخضر', 'Walk 10 steps around the room and find 3 things that are green'],
    ['🤸', 'المسْ أصابع قدميك', 'Touch your toes', 'انحنِ برفق والمس أصابع قدميك، ثم قف. كرّر ٥ مرات', 'Bend gently and touch your toes, then stand up. Do it 5 times'],
    ['👀', 'أرِح عينيك', 'Rest your eyes', 'انظر بعيدًا من النافذة إلى شيءٍ بعيد، وعُدَّ إلى عشرين', 'Look far away out of the window at something distant and count to twenty']
  ];
  var KEY = 'mk:brkTime', last = Date.now(), bar = null, box = null, open = false;
  ['pointerdown', 'keydown', 'touchstart', 'scroll', 'wheel'].forEach(function (t) { document.addEventListener(t, function () { last = Date.now(); }, { passive: true, capture: true }); });
  function used() { var v = parseInt(LS.getItem(KEY) || '0', 10); return isNaN(v) ? 0 : v; }
  function setUsed(v) { try { LS.setItem(KEY, String(v)); } catch (e) {} }
  function paintBar(mins) {
    if (!mins) { if (bar) bar.style.display = 'none'; return; }
    if (!bar) { bar = document.createElement('div'); bar.id = 'mkBrkBar'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar); }
    bar.style.display = ''; bar.style.width = Math.min(100, used() / (mins * 60) * 100) + '%';
  }
  function busy() { return document.body.classList.contains('mk-overlay') || document.querySelector('#win-modal.open,.modal-backdrop.open'); }
  function showBreak() {
    if (open) return; open = true;
    var m = MOVES[Math.floor(Math.random() * MOVES.length)], ar = lang() === 'ar', secs = 60, p = 0;
    if (!box) { box = document.createElement('div'); box.id = 'mkBrk'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); document.body.appendChild(box); }
    box.setAttribute('dir', ar ? 'rtl' : 'ltr');
    box.innerHTML = '<div class="card"><div class="ic">' + m[0] + '</div><b>' + T('وقتُ استراحة الحركة! ', 'Movement break time! ') + '</b><b style="font-size:19px;color:#1F5A33">' + (ar ? m[1] : m[2]) + '</b><p>' + (ar ? m[3] : m[4]) + '</p>' +
      '<div class="ring" style="--p:0"><span id="mkBrkS">' + (ar ? '٦٠' : '60') + '</span></div>' +
      '<button class="go" id="mkBrkDone" disabled style="opacity:.5">' + T('✅ عُدتُ نشيطًا!', '✅ I am back, full of energy!') + '</button><button id="mkBrkLater">' + T('بعد قليل', 'A bit later') + '</button></div>';
    box.classList.add('open');
    var ring = box.querySelector('.ring'), sEl = box.querySelector('#mkBrkS'), done = box.querySelector('#mkBrkDone');
    var iv = setInterval(function () {
      secs--; p = Math.round((60 - secs) / 60 * 100); ring.style.setProperty('--p', p);
      sEl.textContent = ar ? String(Math.max(0, secs)).replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }) : Math.max(0, secs);
      if (secs <= 45) { done.disabled = false; done.style.opacity = '1'; }   // a short break still counts
      if (secs <= 0) clearInterval(iv);
    }, 1000);
    function finish(reset) { clearInterval(iv); box.classList.remove('open'); open = false; setUsed(reset ? 0 : Math.max(0, used() - 3 * 60)); paintBar(+opts().brk || 0); }
    done.onclick = function () { finish(true); };
    box.querySelector('#mkBrkLater').onclick = function () { finish(false); };   // again in 3 minutes
  }
  setInterval(function () {
    var mins = +opts().brk || 0; if (!document.body) return;
    paintBar(mins); if (!mins || open) return;
    if (document.visibilityState !== 'visible' || Date.now() - last > 90000) return;   // only real, active time counts
    var u = used() + 5; setUsed(u);
    if (u >= mins * 60 && !busy()) showBreak();
  }, 5000);
  ready(function () { paintBar(+opts().brk || 0); if (opts().ruler === 'on') rulerBuild(); });
  window.addEventListener('mk-a11y-applied', function (e) { try { paintBar(+(e.detail && e.detail.brk) || 0); if (e.detail && e.detail.ruler === 'on') rulerBuild(); } catch (er) {} });
  window.MKFocus = { showBreak: showBreak, used: used };
})();

/* ═══ 👨‍👩‍👧 Parent gate: a link that leaves the site (Wikipedia, maps, social media, WhatsApp…) first asks a
   grown-up a small question. Pages for parents can set window.MK_NO_GATE = true. ═══ */
(function () {
  if (window.__mkGate) return; window.__mkGate = true;
  var HOME = /(^|\.)tarbiyahkids\.uk$/i;
  function lang() { try { return localStorage.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function T(a, e) { return lang() === 'en' ? e : a; }
  function N(n) { return lang() === 'ar' ? String(n).replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }) : String(n); }
  function outside(a) {
    var h = a.getAttribute('href') || ''; if (!/^(https?:)?\/\//i.test(h) && !/^(mailto|tel|whatsapp|sms):/i.test(h)) return false;
    if (/^(mailto|tel|whatsapp|sms):/i.test(h)) return true;
    try { var u = new URL(h, location.href); return u.host !== location.host && !HOME.test(u.hostname); } catch (e) { return false; }
  }
  var box = null;
  function css() {
    if (document.getElementById('mk-gate-css')) return;
    var s = document.createElement('style'); s.id = 'mk-gate-css';
    s.textContent = '#mkGate{position:fixed;inset:0;z-index:2147483640;background:rgba(6,18,32,.8);display:flex;align-items:center;justify-content:center;padding:16px;font-family:Tajawal,Nunito,Arial,sans-serif}' +
      '#mkGate .c{width:min(400px,100%);background:#FFF8EA;color:#2A2118;border-radius:22px;padding:20px;text-align:center;box-shadow:0 30px 70px rgba(0,0,0,.5)}' +
      '#mkGate .ic{font-size:48px}#mkGate b{display:block;font-size:20px;color:#7A4A12;margin:6px 0}#mkGate p{margin:4px 0 12px;font-weight:700;line-height:1.6}' +
      '#mkGate .q{font-size:28px;font-weight:900;margin:8px 0}#mkGate input{width:120px;min-height:52px;font:900 24px Tajawal,Nunito,Arial,sans-serif;text-align:center;border:2px solid #E2D3B0;border-radius:14px;background:#fff;color:#2A2118;color-scheme:light}' +
      '#mkGate .er{color:#B4532A;font-weight:800;min-height:1.4em}#mkGate button{min-height:50px;padding:0 20px;border:none;border-radius:999px;font:900 16px Tajawal,Nunito,Arial,sans-serif;cursor:pointer;margin:4px}' +
      '#mkGate .go{background:linear-gradient(135deg,#3BB36D,#1F7A44);color:#fff}#mkGate .no{background:#EFE4CF;color:#5a4a22}';
    document.head.appendChild(s);
  }
  function gate(href, target) {
    css(); if (box) box.remove();
    var a = 6 + Math.floor(Math.random() * 4), b = 6 + Math.floor(Math.random() * 4), ar = lang() === 'ar';
    box = document.createElement('div'); box.id = 'mkGate'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.dir = ar ? 'rtl' : 'ltr';
    box.innerHTML = '<div class="c"><div class="ic">🔐</div><b>' + T('هذا الرابط يخرج من الموقع', 'This link leaves the website') + '</b>' +
      '<p>' + T('اطلب من أحد والديك أن يجيب عن هذا السؤال:', 'Ask a parent to answer this question:') + '</p>' +
      '<div class="q" dir="ltr">' + N(a) + ' × ' + N(b) + ' = ?</div><input id="mkGateIn" inputmode="numeric" autocomplete="off" aria-label="' + T('الجواب', 'Answer') + '"><div class="er" id="mkGateEr"></div>' +
      '<button class="go" id="mkGateGo">' + T('متابعة', 'Continue') + '</button><button class="no" id="mkGateNo">' + T('رجوع', 'Go back') + '</button></div>';
    document.body.appendChild(box);
    var inp = box.querySelector('#mkGateIn'); setTimeout(function () { try { inp.focus(); } catch (e) {} }, 50);
    function close() { if (box) { box.remove(); box = null; } }
    function go() {
      var v = parseInt(String(inp.value).replace(/[٠-٩]/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(c); }), 10);
      if (v === a * b) { close(); if (target === '_self') location.href = href; else window.open(href, '_blank', 'noopener'); }
      else { box.querySelector('#mkGateEr').textContent = T('ليست الإجابة الصحيحة', 'That is not the right answer'); inp.value = ''; }
    }
    box.querySelector('#mkGateGo').onclick = go; box.querySelector('#mkGateNo').onclick = close;
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); if (e.key === 'Escape') close(); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
  }
  document.addEventListener('click', function (e) {
    if (window.MK_NO_GATE || e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || !outside(a)) return;
    e.preventDefault(); e.stopPropagation();
    gate(a.href, a.target === '_blank' ? '_blank' : '_self');
  }, true);
  window.MKGate = { open: gate };
})();
