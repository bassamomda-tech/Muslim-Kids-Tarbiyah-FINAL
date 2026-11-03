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

  var DEF = { size: 0, font: 'std', space: 'n', contrast: 'std', noise: 'std' };
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
    'html.a11y-quiet body{background-image:none}';

  function apply() {
    var o = read(), h = document.documentElement, c = h.classList;
    c.toggle('a11y-t1', o.size === 1); c.toggle('a11y-t2', o.size === 2);
    c.toggle('a11y-read', o.font === 'read'); c.toggle('a11y-roomy', o.space === 'roomy');
    c.toggle('a11y-hc', o.contrast === 'high'); c.toggle('a11y-quiet', o.noise === 'calm');
    c.toggle('calm', calm());
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
    { k: 'noise', h: ['الزخارف والخلفيات', 'Visual noise'], o: [['std', 'عادية', 'Standard'], ['calm', 'أهدأ', 'Calmer']] }
  ];
  function val(k) { return k === 'motion' ? (calm() ? 'calm' : 'std') : read()[k]; }
  function paint(panel) {
    var dir = lang() === 'en' ? 'ltr' : 'rtl';
    panel.setAttribute('dir', dir);
    panel.innerHTML = '<div class="mka-hd"><b>' + T('إعدادات العرض', 'Display settings') + '</b><button class="mka-x" aria-label="' + T('إغلاق', 'Close') + '">✕</button></div>' +
      '<p class="mka-sub">' + T('تُطبَّق على الموقع كلّه وتُحفَظ على هذا الجهاز.', 'Applies across the whole site and is remembered on this device.') + '</p>' +
      ROWS.map(function (r) {
        var cur = val(r.k);
        return '<div class="mka-row"><div class="mka-lb">' + T(r.h[0], r.h[1]) + '</div><div class="mka-opts" role="radiogroup" aria-label="' + T(r.h[0], r.h[1]) + '">' +
          r.o.map(function (x) { var on = String(x[0]) === String(cur); return '<button role="radio" aria-checked="' + on + '" class="mka-o' + (on ? ' on' : '') + '" data-k="' + r.k + '" data-v="' + x[0] + '">' + T(x[1], x[2]) + '</button>'; }).join('') +
          '</div></div>';
      }).join('') +
      '<div class="mka-ft"><button class="mka-reset">' + T('إعادة الضبط', 'Reset all') + '</button></div>';
    panel.querySelector('.mka-x').onclick = close;
    panel.querySelector('.mka-reset').onclick = function () { write(DEF); setCalm(false); apply(); paint(panel); };
    panel.querySelectorAll('.mka-o').forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.k, v = b.dataset.v;
        if (k === 'motion') setCalm(v === 'calm');
        else { var o = read(); o[k] = k === 'size' ? +v : v; write(o); }
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
  window.MKA11y = { apply: apply, open: function () { build(); toggle(); } };
})();
