/* ════════════════════════════════════════════════════════════════
   mk-home.js — one tap back to the home page from ANY page.
   A small 🏠 button (above the «Aa» display-settings button) that goes
   straight to the site's home page — no need to go back page by page.
   Loaded on every page by mk-a11y.js (which every page already loads).
   Not shown on the home page itself or on print pages.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkHome) return; window.__mkHome = true;
  var p = location.pathname, i = p.indexOf('/corners/');
  if (i < 0) return;                                          // the home page (or outside the site)
  if (/print|Printable|certificate-preview|admin-report/i.test(p)) return;
  var rest = p.slice(i + 1).split('/'); rest.pop();
  var HOME = new Array(rest.length + 1).join('../') + 'index.html';
  function lang() { try { return localStorage.getItem('bunyanLang') || 'ar'; } catch (e) { return 'ar'; } }

  function build() {
    if (document.getElementById('mkHomeBtn') || !document.body) return;
    var en = lang() === 'en', a = document.createElement('a');
    a.id = 'mkHomeBtn';
    a.href = HOME + (en ? '?lang=en' : '');
    a.setAttribute('aria-label', en ? 'Home page' : 'الصفحة الرئيسية');
    a.title = en ? 'Home page' : 'الصفحة الرئيسية';
    a.innerHTML = '<span aria-hidden="true">🏠</span>';
    var s = document.createElement('style'); s.id = 'mk-home-css';
    s.textContent =
      '#mkHomeBtn{position:fixed;bottom:148px;left:14px;z-index:2147482990;width:52px;height:52px;border-radius:50%;border:2px solid #fff;' +
      'background:#D4A017;display:grid;place-items:center;text-decoration:none;font-size:1.45rem;line-height:1;box-shadow:0 6px 18px rgba(0,0,0,.3)}' +
      '#mkHomeBtn:hover{filter:brightness(1.06)}' +
      '#mkHomeBtn:focus-visible{outline:3px solid #0F4C45;outline-offset:2px}' +
      '@media print{#mkHomeBtn{display:none!important}}';
    document.head.appendChild(s);
    document.body.appendChild(a);
    window.addEventListener('storage', function (e) {
      if (e.key !== 'bunyanLang') return;
      var en2 = lang() === 'en'; a.href = HOME + (en2 ? '?lang=en' : ''); a.title = en2 ? 'Home page' : 'الصفحة الرئيسية'; a.setAttribute('aria-label', a.title);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
