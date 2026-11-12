/* ════════════════════════════════════════════════════════════════
   mk-topbar.js — ONE top bar for every corner page.
   [🏠 المدينة] [‹ one level up]   icon · page name / corner   [🎒 points] [عربي|EN]
   • Loaded by mk-a11y.js (which every corner page gets via mk-system.js or nav-fix.js).
   • Takes over the page's own top bar: its back link becomes "one level up" (same
     destination as before), its language buttons are still the ones that switch the
     language (we click them), and any extra controls in it (levels, reset…) stay visible
     in a slim row under the new bar.
   • A page can opt out with  window.MK_TOPBAR = false  or tune it with
     window.MK_TOPBAR = { title:{ar,en}, up:{href,ar,en}, corner:'aqeeda' }.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkTopbar || window.MK_TOPBAR === false) return; window.__mkTopbar = true;
  var P = decodeURIComponent(location.pathname);
  var at = P.indexOf('/corners/'); if (at < 0) return;                     // home page keeps its own header
  if (/\/shared\/(login|account|admin-report)\.html$|print|\/Books\//i.test(P)) return;

  var CFG = window.MK_TOPBAR && typeof window.MK_TOPBAR === 'object' ? window.MK_TOPBAR : {};
  var ROOT = new Array(P.slice(at + 1).split('/').length).join('../');     // page → project root
  var OLD = ['body > div.header', 'header.hdr', 'header.tr-top', 'header.topbar', 'body > div.topbar', 'header.hd-hdr',
             'header.header', 'header.q-hdr', 'header.qs-hdr', 'header.app-hdr', 'nav.activity-nav'];
  var CORNERS = {
    aqeeda: ['🕋', '#C0392B', 'منارة العقيدة', 'Faith Minaret'], ibada: ['🌙', '#117A8B', 'واحة العبادة', 'Worship Oasis'],
    quran: ['📖', '#1A9B7B', 'بستان القرآن', 'Quran Garden'], sunnah: ['📜', '#6C4BD8', 'حُفّاظ السنة', 'Sunnah Keepers'],
    social: ['🏘️', '#D4A017', 'حيّنا الصغير', 'Our Little District'], heart: ['💚', '#6C3483', 'ركن القلب السليم', 'Pure Heart Corner'],
    history: ['🏰', '#E67E22', 'حصن الأبطال', "Heroes' Fortress"], sport: ['🏊', '#27AE60', 'النادي الرياضي', 'Sports Club'],
    academy: ['🔭', '#2980B9', 'أكاديمية المبدعين', "Innovators' Academy"], quds: ['🕌', '#2E8B57', 'ركن القدس والأمة', 'Al-Quds & Ummah'],
    stories: ['📚', '#C1663A', 'مكتبة القصص', 'Stories Library'], planet: ['🪐', '#7A3FB0', 'كوكب الإبداع', 'Planet of Creativity'],
    skills: ['🛠️', '#7A3FB0', 'صانع المهارات', 'Skills Maker'], competitions: ['🏆', '#7A3FB0', 'ساحة المسابقات', 'Competitions Arena'],
    anos: ['🧩', '#C9A961', 'أنشطة أنوس', "Anos' Activities"], news: ['📰', '#D4A017', 'نشرة الأسبوع', 'Weekly Bulletin'],
    parents: ['🏡', '#D4A017', 'ركن الأهل', "Parents' Corner"], family: ['🏡', '#D4A017', 'تربية الطفل المسلم', "Muslim Kids' Tarbiyah"]
  };
  function cornerId() {
    if (CFG.corner) return CFG.corner;
    var r = [[/faith-minaret\/|pages\/aqeeda|treasures\/(shubuhat|ubudiyah)/, 'aqeeda'], [/quds-ummah\/|pages\/quds/, 'quds'],
      [/pages\/ibada|treasures\/(adhkar|eids)/, 'ibada'], [/pages\/quran|quran-hifz\//, 'quran'],
      [/treasures\/(sunnah|hadith-stories|hadith-cards|prophet-moments)|pages\/hadith/, 'sunnah'], [/pages\/social|pages\/hasanat/, 'social'],
      [/heroes-fortress\/heart|pages\/heart|treasures\/names-cards/, 'heart'],
      [/heroes-fortress\/(academy|manara|lugha|mubdi)|pages\/academy/, 'academy'], [/heroes-fortress\/|pages\/history|treasures\/(landmarks|tours)/, 'history'],
      [/pages\/sport/, 'sport'], [/\/stories\//, 'stories'], [/\/skills\/|\/workshop\//, 'skills'], [/\/competitions\//, 'competitions'],
      [/activities\/activities\/|activities\/dashboard/, 'anos'], [/activities\/play/, 'planet'], [/\/news\//, 'news'],
      [/pages\/parents|treasures\/parents-kit|Activity Prompt/, 'parents']];
    for (var i = 0; i < r.length; i++) if (r[i][0].test(P)) return r[i][1];
    return window.MK_CORNER || 'family';
  }
  function lang() { var l = localStorage.getItem('bunyanLang') || document.documentElement.lang || 'ar'; return String(l).indexOf('en') === 0 ? 'en' : 'ar'; }
  function arTxt(s) { return /[؀-ۿ]/.test(s); }
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var CID = cornerId(), C = CORNERS[CID] || CORNERS.family;
  var col = C[1];
  var old = null, back = null, langBtns = [], keepOld = false, TITLE0 = document.title;

  /* the page's own name: "رحلة اليقين | Journey of Certainty" → {ar, en} */
  function pageName() {
    if (CFG.title) return CFG.title;
    var crumb = document.querySelector('.activity-crumb .cur');
    if (crumb) { var ct = crumb.textContent.trim(); return { ar: ct, en: ct }; }   // Anos activities translate their own crumb
    var parts = String(TITLE0).split(/\s+[|·—–-]\s+/).map(function (s) { return s.trim(); }).filter(Boolean);
    var generic = /^(تربية الطفل المسلم|ركن القصص|حِصن الأبطال|Muslim Kids)/;
    var a = parts.filter(function (s) { return arTxt(s) && !generic.test(s); })[0] || parts[0] || C[2];
    var e = parts.filter(function (s) { return !arTxt(s); })[0] || a;
    return { ar: a, en: e };
  }
  function findOld() {
    for (var i = 0; i < OLD.length; i++) { var e = document.querySelector(OLD[i]); if (e && e.getBoundingClientRect().top < 80) return e; }
    return null;
  }
  function isLangCtl(e) { return /^\s*(EN|عربي|ع|AR)\s*$/i.test(e.textContent) || e.hasAttribute('data-lang') || /setLang|lang/i.test(e.getAttribute('onclick') || ''); }
  function isRoot(href) { try { var u = new URL(href, location.href); return /\/index\.html$|\/$/.test(u.pathname) && !/\/corners\//.test(u.pathname); } catch (e) { return false; } }

  function take() {
    old = findOld();
    if (!old) return;
    var links = [].slice.call(old.querySelectorAll('a[href]')).filter(function (a) { return a.getAttribute('href') !== '#' && !isLangCtl(a); });
    back = links[0] || null;
    langBtns = [].slice.call(old.querySelectorAll('button, a')).filter(isLangCtl);
    // anything else interactive in the old bar (levels, points, reset, filters…) stays usable
    // a 🎒 / bag link in the old bar is replaced by the bar's own 🎒
    [].forEach.call(old.querySelectorAll('a[href*="bag.html"], #bagBtn, .bag-btn'), function (e) { if (e !== back) e.classList.add('mktb-gone'); });
    var extras = [].slice.call(old.querySelectorAll('a, button, select, input')).filter(function (e) { return e !== back && langBtns.indexOf(e) < 0 && !e.classList.contains('mktb-gone') && !(back && back.contains(e)) && !langBtns.some(function (l) { return l.contains(e); }); });
    keepOld = extras.some(function (e) { var r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
    if (keepOld) {
      if (back) back.classList.add('mktb-gone');
      langBtns.forEach(function (b) { (b.closest('.lang, .lang-switch, .lang-toggle, .hd-lang, .q-lang, .tr-lang') || b).classList.add('mktb-gone'); });
      old.classList.add('mktb-under');
    } else old.classList.add('mktb-hidden');
  }
  /* the label of the old back link in the current language (works although the old bar is hidden) */
  function backLabel() {
    if (CFG.up) return lang() === 'en' ? CFG.up.en : CFG.up.ar;
    if (!back) return '';
    var want = lang(), spans = back.querySelectorAll('.lng-ar, .lng-en, [data-lang-ar], [data-ar]');
    var a = back.querySelector('.lng-ar, .ar-only, .ar'), e = back.querySelector('.lng-en, .en-only, .en');
    var t = (want === 'en' ? (e && e.textContent) : (a && a.textContent)) || back.textContent;
    t = t.replace(/[←→↩︎️↪⬅➡›‹]|️/g, '').replace(/\s+/g, ' ').trim();
    if (!e && !a) {   // "المنارةMinaret": keep the part in the current language
      var m = t.match(/^([؀-ۿ\s«»ـ]+)([A-Za-z].*)$/); if (m) t = want === 'en' ? m[2] : m[1];
    }
    // short labels: «الرجوع للوحة الأنشطة» → «الأنشطة», "Back to the Academy" → "Academy"
    t = t.replace(/^(الرجوع|العودة|عودة|ارجع)\s+(إلى\s+|الى\s+|ل(?=ل))?/, '').replace(/^(للوحة|لوحة)\s+/, '').replace(/^back\s+to\s+(the\s+)?/i, '').trim();
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function upHref() { return CFG.up ? CFG.up.href : (back ? back.getAttribute('href') : ''); }

  function points() { try { return window.MKBagCollect ? window.MKBagCollect().points : null; } catch (e) { return null; } }

  function css() {
    if (document.getElementById('mktb-css')) return;
    var s = document.createElement('style'); s.id = 'mktb-css';
    s.textContent =
      '.mktb-hidden{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;opacity:0!important;pointer-events:none!important;top:0!important}' +
      '.mktb-gone{display:none!important}' +
      '.mktb-under{top:var(--mktb-h,62px)!important}' +
      'body.mktb-on #mkBag,body.mktb-on #mkHomeBtn{display:none!important}' +   /* the bar has 🎒 and 🏠 now */
      '#mktb{position:sticky;top:0;z-index:3500;display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;min-height:62px;box-sizing:border-box;' +
        'background:#0A2540;border-bottom:3px solid var(--mktb-c);box-shadow:0 6px 18px rgba(0,0,0,.22);font-family:"Tajawal","Nunito",system-ui,sans-serif;color:#FEF5DC;line-height:1.2}' +
      '#mktb *{box-sizing:border-box}' +
      '#mktb a,#mktb button{font-family:inherit;-webkit-tap-highlight-color:transparent}' +
      '.mktb-btn{display:inline-flex;align-items:center;gap:.35rem;min-height:44px;min-width:44px;justify-content:center;padding:0 .85rem;border-radius:999px;border:1.5px solid rgba(255,255,255,.2);' +
        'background:rgba(255,255,255,.07);color:#FEF5DC!important;font-weight:800;font-size:.92rem;text-decoration:none!important;white-space:nowrap;cursor:pointer;flex:0 0 auto}' +
      '.mktb-btn:hover{background:rgba(255,255,255,.14)}' +
      '.mktb-btn .ic{font-size:1.15rem;line-height:1}' +
      '.mktb-up{border-color:var(--mktb-c)}' +
      '.mktb-mid{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:.45rem;text-align:center}' +
      '.mktb-mid .ic{font-size:1.55rem;flex:0 0 auto}' +
      '.mktb-mid .tt{min-width:0}' +
      '.mktb-mid b{display:block;font-size:1.05rem;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      /* phones: a long title wraps onto 2 short lines instead of being cut to «الأطلس…» */
      /* big enough for small fingers (≥44px): the buttons the corners share, wherever they sit on the page */
      '.feature-btn,.mkq-btn,.mkq-b-btn,.open-btn,.tr-chip,.tr-tab,.cb-tab,.back,.tb-back,.q-brand,.back-city,.icon-btn,.switch,.hub-sunnah,.cty-chip{min-height:44px!important;box-sizing:border-box}' +
      'a.feature-btn,a.back,a.tb-back,a.q-brand,a.back-city,a.switch,a.cb-tab{display:inline-flex!important;align-items:center;justify-content:center}' +
      '.lang-switch .lang-btn,.lang>button,.q-lang>button{min-height:40px!important;min-width:44px}' +
      '.sidebar-close,#bpClose{position:relative}' +
      '.sidebar-close::after,.guide-x::after,#bpClose::after{content:"";position:absolute;inset:-12px}' +   /* small ✕ with a big invisible touch area */
      '.icon-btn{min-width:44px!important}' +
      '.mktb-mid small{display:block;font-size:.74rem;opacity:.75;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.mktb-bag{background:linear-gradient(135deg,#F5CC5A,#D4A017);color:#1A1205!important;border:none}' +
      /* small phones: the «back to the corner» button keeps only its arrow (the corner's name is already
         written under the title), so the page title has room and is never cut to «الأطلس…» */
      '@media(max-width:480px){#mktb .mktb-up .tx{display:none!important}.mktb-up{min-width:44px;padding:0 .5rem!important}.mktb-up .ic{font-size:1.4rem}' +
        '.mktb-mid b{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.15;font-size:.92rem}}' +
      '.mktb-lang{display:inline-flex;border-radius:999px;overflow:hidden;border:1.5px solid rgba(255,255,255,.25);flex:0 0 auto}' +
      '.mktb-lang button{min-height:40px;min-width:44px;padding:0 .55rem;border:none;background:transparent;color:#FEF5DC;font-weight:900;font-size:.84rem;cursor:pointer}' +
      '.mktb-lang button.on{background:var(--mktb-c);color:#fff}' +
      '.mktb-lang[hidden]{display:none!important}' +
      '@media(max-width:600px){#mktb{gap:.3rem;padding:.4rem .45rem;min-height:58px}#mktb .tx{display:none}#mktb .mktb-up .tx{display:inline-block;max-width:5.2em;overflow:hidden;text-overflow:ellipsis;font-size:.8rem}.mktb-up{gap:.2rem}.mktb-btn{padding:0 .6rem}.mktb-mid .ic{font-size:1.3rem}.mktb-mid b{font-size:.92rem}.mktb-mid small{font-size:.68rem}.mktb-lang button{min-width:38px;padding:0 .4rem}}' +
      '@media print{#mktb{display:none!important}}';
    (document.head || document.documentElement).appendChild(s);
  }

  /* some pages rebuild their own top bar (e.g. on a language switch): follow the new one */
  function refresh() { if (!old || !document.contains(old) || (back && !document.contains(back))) take(); }
  function hasLang() { return langBtns.length || typeof window.setLang === 'function' || document.querySelector('[data-lang]'); }
  function render() {
    refresh();
    var bar = document.getElementById('mktb');
    var L = lang(), A = L === 'ar', name = pageName(), nm = A ? name.ar : name.en, cn = A ? C[2] : C[3];
    var up = upHref(), showUp = up && !isRoot(up), pts = points();
    bar.dir = A ? 'rtl' : 'ltr';
    bar.innerHTML =
      '<a class="mktb-btn" href="' + ROOT + 'index.html" aria-label="' + (A ? 'المدينة' : 'City') + '"><span class="ic">🏠</span><span class="tx">' + (A ? 'المدينة' : 'City') + '</span></a>' +
      (showUp ? '<a class="mktb-btn mktb-up" href="' + esc(up) + '" aria-label="' + esc(backLabel() || (A ? 'رجوع' : 'Back')) + '" title="' + esc(backLabel() || (A ? 'رجوع' : 'Back')) + '"><span class="ic">' + (A ? '›' : '‹') + '</span><span class="tx">' + esc(backLabel() || (A ? 'رجوع' : 'Back')) + '</span></a>' : '') +
      '<div class="mktb-mid"><span class="ic" aria-hidden="true">' + C[0] + '</span><span class="tt"><b>' + esc(nm) + '</b>' + (nm !== cn ? '<small>' + esc(cn) + '</small>' : '') + '</span></div>' +
      '<a class="mktb-btn mktb-bag" href="' + ROOT + 'corners/shared/bag.html" aria-label="' + (A ? 'حقيبتي' : 'My bag') + '"><span class="ic">🎒</span>' + (pts != null ? '<span>' + pts + '</span>' : '<span class="tx">' + (A ? 'حقيبتي' : 'Bag') + '</span>') + '</a>' +
      (hasLang() ? '' : '<!--no-lang-->') + '<span class="mktb-lang"' + (hasLang() ? '' : ' hidden') + ' role="group" aria-label="Language"><button type="button" data-l="ar" class="' + (A ? 'on' : '') + '">عربي</button><button type="button" data-l="en" class="' + (!A ? 'on' : '') + '">EN</button></span>';
    [].forEach.call(bar.querySelectorAll('.mktb-lang button'), function (b) { b.onclick = function () { setLangTo(b.getAttribute('data-l')); }; });
    document.documentElement.style.setProperty('--mktb-h', bar.offsetHeight + 'px');
  }
  /* switch language with the page's own mechanism, so everything on the page follows */
  function setLangTo(l) {
    if (l === lang()) return;
    var hit = langBtns.filter(function (b) { var t = b.textContent.trim(), d = b.getAttribute('data-lang') || ''; return d === l || (l === 'en' ? /^EN$/i.test(t) : /^(عربي|ع|AR)$/i.test(t)); })[0];
    if (!hit) hit = [].slice.call(document.querySelectorAll('[data-lang="' + l + '"], #btn' + (l === 'en' ? 'En' : 'Ar')))[0];
    if (hit) hit.click();
    else if (typeof window.setLang === 'function') window.setLang(l);
    else { try { localStorage.setItem('bunyanLang', l); } catch (e) {} location.reload(); return; }
    try { localStorage.setItem('bunyanLang', l); } catch (e) {}
    setTimeout(render, 60); setTimeout(render, 400);
  }

  function boot() {
    if (document.getElementById('mktb') || !document.body) return;
    css(); take();
    var bar = document.createElement('div'); bar.id = 'mktb';
    bar.style.setProperty('--mktb-c', col);
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.classList.add('mktb-on');
    render();
    // keep in step when the page switches language by itself, and when points change
    new MutationObserver(function () { setTimeout(render, 30); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
    window.addEventListener('focus', render);
    window.addEventListener('storage', function (e) { if (e.key === 'bunyanLang') render(); });
    setTimeout(render, 900);   // bag points are ready a little later
    setInterval(function () { if (old && !document.contains(old)) render(); }, 1000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

/* ── Island stations: a station counts as DONE when the child really spends time in it ──────────────
   «عالم الجزر» (islands.html) writes  sessionStorage['mk:station'] = {k, n}  when a station is opened.
   Here, on whatever page the child lands, we count ACTIVE seconds (tab visible + a touch, scroll, key
   or playing audio in the last 30 s). After 60 active seconds — or at once when the page itself reports
   a finished experiment/game/wird ('mk-earn') — the station is written to localStorage['station_log']
   and a small card offers the way back to the islands. The islands page turns the log into stars. */
(function () {
  if (window.__mkStation) return; window.__mkStation = 1;
  if (/\/islands\.html/.test(location.pathname)) return;
  var SS, LS; try { SS = sessionStorage; LS = localStorage; } catch (e) { return; }
  function flag() { try { return JSON.parse(SS.getItem('mk:station') || 'null'); } catch (e) { return null; } }
  var f = flag(); if (!f || !f.k) return;
  if (f.d && location.pathname.indexOf(f.d) !== 0) return;   // only pages of the station's own corner count
  var NEED = 60, acc = +f.s || 0, last = Date.now(), done = false;
  function touch() { last = Date.now(); }
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, touch, { passive: true, capture: true }); });
  function playing() { var m = document.querySelectorAll('audio,video'); for (var i = 0; i < m.length; i++) if (!m[i].paused && !m[i].ended) return true; try { if (window.speechSynthesis && speechSynthesis.speaking) return true; } catch (e) {} return false; }
  function day() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function finish() {
    if (done) return; done = true; clearInterval(iv);
    try { var L = JSON.parse(LS.getItem('station_log') || '{}') || {}; L[f.k] = day(); LS.setItem('station_log', JSON.stringify(L)); SS.removeItem('mk:station'); } catch (e) {}
    card();
  }
  function card() {
    var en = false; try { en = LS.getItem('bunyanLang') === 'en'; } catch (e) {}
    var me = document.querySelector('script[src*="mk-topbar.js"]'), base = me ? me.src.replace(/mk-topbar\.js.*$/, '') : '';
    var d = document.createElement('div'); d.setAttribute('role', 'status'); d.dir = en ? 'ltr' : 'rtl';
    d.style.cssText = 'position:fixed;z-index:99990;inset-inline:12px;bottom:14px;max-width:440px;margin:0 auto;background:#0B3A5E;color:#FEF5DC;border:2px solid #F5CC5A;border-radius:18px;padding:12px 14px;display:flex;align-items:center;gap:10px;font:800 15px Tajawal,Nunito,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.4)';
    d.innerHTML = '<span style="font-size:28px">⭐</span><span style="flex:1;line-height:1.5">' + (en ? 'Well done! This station is finished.' : 'أحسنت! أتممتَ هذه المحطّة.') + '</span>' +
      '<a href="' + base + 'islands.html" style="background:#F5CC5A;color:#1A1205;border-radius:999px;padding:0 14px;min-height:44px;display:inline-flex;align-items:center;text-decoration:none;font-weight:900;white-space:nowrap">🏝️ ' + (en ? 'Islands' : 'الجزر') + '</a>' +
      '<button type="button" aria-label="' + (en ? 'Close' : 'إغلاق') + '" style="width:44px;height:44px;border-radius:50%;border:none;background:rgba(255,255,255,.14);color:#FEF5DC;font-size:16px;font-weight:900;cursor:pointer">✕</button>';
    d.querySelector('button').onclick = function () { d.remove(); };
    (document.body || document.documentElement).appendChild(d);
  }
  var iv = setInterval(function () {
    if (document.hidden) return;
    if (Date.now() - last < 30000 || playing()) { acc++; if (acc % 5 === 0) { try { var g = flag(); if (g && g.k === f.k) { g.s = acc; SS.setItem('mk:station', JSON.stringify(g)); } } catch (e) {} } }
    if (acc >= NEED) finish();
  }, 1000);
  window.addEventListener('mk-earn', function () { finish(); });
  window.addEventListener('pagehide', function () { if (done) return; try { var g = flag(); if (g && g.k === f.k) { g.s = acc; SS.setItem('mk:station', JSON.stringify(g)); } } catch (e) {} });
})();

/* ── Game sounds on phones ─────────────────────────────────────────────────────────────────────────
   The games make their sounds with Web Audio. On iPhone that audio (1) starts "suspended" until it is
   resumed inside a tap, and (2) is silenced by the silent switch. Here every AudioContext the page
   creates is resumed as soon as the child taps, and the page asks to play as media (like a video),
   so the sounds work in silent mode too. Each game keeps its own mute button; the «Aa» panel can
   still turn sound effects off. */
(function () {
  if (window.__mkAudioFix) return; window.__mkAudioFix = 1;
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
  var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  var all = [];
  function wake() { for (var i = 0; i < all.length; i++) { try { if (all[i].state !== 'running' && all[i].state !== 'closed') all[i].resume(); } catch (e) {} } }
  try {
    var MK = function (o) { var c = o ? new AC(o) : new AC(); all.push(c); try { if (c.state !== 'running') c.resume(); } catch (e) {} return c; };
    MK.prototype = AC.prototype;
    window.AudioContext = MK; if (window.webkitAudioContext) window.webkitAudioContext = MK;
  } catch (e) {}
  ['pointerdown', 'touchend', 'click', 'keydown'].forEach(function (ev) { window.addEventListener(ev, wake, { capture: true, passive: true }); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) wake(); });
})();
