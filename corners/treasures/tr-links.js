/* tr-links.js — the cards & stories that LIVE in this corner (each page has one home corner).
   Shown as one calm row at the end of the corner page.
   Usage: <script defer src="…/treasures/tr-links.js" data-links="tours,landmarks"></script>
   It appends one calm row of links at the end of the page (no popups, no motion). */
(function () {
  var cs = document.currentScript; if (!cs) return;
  var keys = (cs.getAttribute('data-links') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var base = cs.src.replace(/tr-links\.js.*$/, '');
  var PAGES = {
    'hadith-cards':    ['🃏', 'بطاقات الأربعين', 'Forty Hadith Cards'],
    'hadith-stories':  ['📖', 'قصص السنة', 'Sunnah Stories'],
    'sunnah':          ['🕌', 'حُفّاظ السنة', 'Sunnah Keepers'],
    'prophet-moments': ['🌙', 'مواقف النبي ﷺ', 'Moments of the Prophet ﷺ'],
    'names-cards':     ['✨', 'أسماء الله الحسنى', 'Names of Allah'],
    'shubuhat':        ['🛡️', 'أسئلة صعبة وأجوبة مطمئنة', 'Hard Questions, Calm Answers'],
    'ubudiyah':        ['🤲', 'العبودية وتعظيم الله', 'Servanthood & Glorifying Allah'],
    'adhkar':          ['📿', 'معاني الأذكار والأدعية', 'Meanings of Adhkar & Duas'],
    'eids':            ['🎉', 'الأعياد في العبادات', 'Eids in Worship'],
    'landmarks':       ['🕋', 'المعالم والخرائط', 'Landmarks & Maps'],
    'tours':           ['🧭', 'جولات افتراضية', 'Virtual Tours'],
    'parents-kit':     ['🎒', 'حقيبة الأهل المجانية', 'Free Parents Kit'],
    'index':           ['🗂️', 'فهرس البطاقات والقصص للطباعة', 'Printable cards & stories index']
  };
  function mount() {
    var ar = (localStorage.getItem('bunyanLang') || 'ar') !== 'en';
    var box = document.createElement('nav');
    box.setAttribute('aria-label', ar ? 'بطاقات وقصص هذا الركن' : 'Cards & stories in this corner');
    box.style.cssText = 'max-width:900px;margin:2rem auto 2.5rem;padding:1rem;border-radius:20px;border:1.5px dashed rgba(212,160,23,.5);background:rgba(255,255,255,.06);text-align:center;font-family:Tajawal,Nunito,sans-serif;position:relative;z-index:2';
    box.innerHTML = '<div style="font-weight:900;margin-bottom:.6rem;color:#E8B530">📚 ' + (ar ? 'بطاقات وقصص في هذا الركن' : 'Cards & stories in this corner') + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center">' + keys.filter(function (k) { return PAGES[k]; }).map(function (k) {
        var p = PAGES[k];
        return '<a href="' + base + k + '.html" style="display:inline-flex;align-items:center;gap:.35rem;padding:.55rem 1rem;border-radius:999px;background:#1A9B7B;color:#fff;text-decoration:none;font-weight:800;font-size:.92rem">' + p[0] + ' ' + (ar ? p[1] : p[2]) + '</a>';
      }).join('') + '</div>';
    document.body.appendChild(box);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
