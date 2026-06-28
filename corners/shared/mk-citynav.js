/* mk-citynav.js — floating "city map" navigator for shared/section pages.
   Lets the user jump between corners & sections without returning to the city
   each time. Reuses MK.CORNERS; resolves correct relative paths from any depth.
   Load on any non-city page:  <script src="…/shared/mk-citynav.js"></script> */
(function () {
  if (window.__mkCityNav) return; window.__mkCityNav = true;

  function lang() { return (window.MK && MK.lang && MK.lang()) || localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return lang() === 'ar'; }

  /* path prefix from THIS document up to project root */
  function rootPrefix() {
    var p = location.pathname, i = p.indexOf('/corners/');
    if (i < 0) return '';
    var rest = p.slice(i + 1).split('/'); rest.pop();           // [corners, …folders]
    return new Array(rest.length + 1).join('../');               // ../ per folder depth
  }
  var ROOT = rootPrefix();

  var SECTIONS = [
    { icon: '🏙️', ar: 'المدينة الرئيسية', en: 'City Home', href: 'index.html' },
    { icon: '📥', ar: 'ركن التنزيلات', en: 'Downloads', href: 'corners/shared/downloads.html' },
    { icon: '🛍️', ar: 'متجر الدعم', en: 'Support Store', href: 'corners/shared/store.html' },
    { icon: '👥', ar: 'مجتمع العائلات', en: 'Community', href: 'corners/shared/community.html' },
    { icon: '🤝', ar: 'ادعَمْنا', en: 'Support Us', href: 'corners/shared/support.html' },
    { icon: '👨‍👩‍👧', ar: 'ركن الأهل', en: 'Parents', href: 'corners/little-district/pages/parents.html' },
  ];

  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'mkCityNav';
    wrap.innerHTML =
      '<button id="mkcnBtn" class="mkcn-btn" aria-label="map"><span class="mkcn-ic">🗺️</span></button>' +
      '<div id="mkcnPanel" class="mkcn-panel"><div class="mkcn-head"></div><div class="mkcn-sec" id="mkcnCorners"></div>' +
      '<div class="mkcn-divider"></div><div class="mkcn-sec" id="mkcnSections"></div></div>';
    document.body.appendChild(wrap);
    document.getElementById('mkcnBtn').onclick = function (e) { e.stopPropagation(); toggle(); };
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) close(); });
    paint();
  }
  function toggle() { var p = document.getElementById('mkcnPanel'); if (p.classList.contains('open')) close(); else open(); }
  function open() { paint(); document.getElementById('mkcnPanel').classList.add('open'); }
  function close() { var p = document.getElementById('mkcnPanel'); if (p) p.classList.remove('open'); }

  function row(icon, label, href, badge) {
    return '<a class="mkcn-row"' + (badge ? ' data-community-badge' : '') + ' href="' + href + '?lang=' + lang() + '"><span class="mkcn-r-ic">' + icon + '</span><span class="mkcn-r-t">' + label + '</span></a>';
  }
  function paint() {
    var A = ar();
    document.querySelector('#mkCityNav .mkcn-head').textContent = A ? '🧭 تنقّل سريع' : '🧭 Quick travel';
    var corners = (window.MK && MK.CORNERS) ? MK.CORNERS : [];
    document.getElementById('mkcnCorners').innerHTML =
      '<div class="mkcn-lbl">' + (A ? 'الأركان' : 'Corners') + '</div>' +
      corners.map(function (c) { return row(c.icon, A ? c.name.ar : c.name.en, ROOT + c.base); }).join('');
    document.getElementById('mkcnSections').innerHTML =
      '<div class="mkcn-lbl">' + (A ? 'الأقسام' : 'Sections') + '</div>' +
      SECTIONS.map(function (s) { return row(s.icon, A ? s.ar : s.en, ROOT + s.href, s.href.indexOf('community.html') >= 0); }).join('');
    if (window.MKNotify) window.MKNotify.refresh();
  }

  function css() {
    var s = document.createElement('style'); s.id = 'mkcn-css';
    s.textContent =
      '#mkCityNav{position:fixed;inset-inline-start:14px;bottom:18px;z-index:2147482000;font-family:"Tajawal","Nunito",sans-serif;direction:' + (ar() ? 'rtl' : 'ltr') + '}' +
      '.mkcn-btn{width:52px;height:52px;border-radius:50%;border:none;background:linear-gradient(140deg,#2980B9,#1c5f8c);color:#fff;cursor:pointer;box-shadow:0 10px 26px rgba(0,0,0,.45);display:grid;place-items:center}' +
      '.mkcn-btn:hover{filter:brightness(1.08)}.mkcn-ic{font-size:1.5rem}' +
      '.mkcn-panel{position:absolute;inset-inline-start:0;bottom:calc(100% + 10px);width:250px;max-height:72vh;overflow-y:auto;background:#0e2c49;border:1.5px solid rgba(41,128,185,.5);border-radius:1.1rem;padding:.7rem;box-shadow:0 22px 54px rgba(0,0,0,.6);display:none}' +
      '.mkcn-panel.open{display:block;animation:mkcnIn .16s ease}' +
      '@keyframes mkcnIn{from{opacity:0;transform:translateY(8px)}to{opacity:1}}' +
      '.mkcn-head{font-weight:900;color:#9fd0ff;font-size:.98rem;padding:.2rem .3rem .5rem}' +
      '.mkcn-lbl{font-size:.72rem;font-weight:800;color:rgba(255,255,255,.5);padding:.3rem .3rem .25rem}' +
      '.mkcn-divider{height:1px;background:rgba(255,255,255,.1);margin:.4rem 0}' +
      '.mkcn-row{display:flex;align-items:center;gap:.6rem;padding:.5rem .55rem;border-radius:.7rem;text-decoration:none;color:#EAF1FB;font-weight:700;font-size:.88rem}' +
      '.mkcn-row:hover{background:rgba(41,128,185,.18)}' +
      '.mkcn-r-ic{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.07);font-size:1rem;flex:0 0 auto}' +
      '.mkcn-r-t{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}';
    document.head.appendChild(s);
  }

  function boot() { css(); build();
    (function () { if (window.MKNotify) return; var s = document.createElement('script'); s.src = ROOT + 'corners/shared/mk-notify.js'; document.head.appendChild(s); })();
    document.querySelectorAll('.lang button,[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(paint, 50); }); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
