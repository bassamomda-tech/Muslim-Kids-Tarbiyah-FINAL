/* ════════════════════════════════════════════════════════════════
   mk-station-lite.js — lighter journey stations for ages 5–9.
   Auto-loaded by mk-tts.js and by the rihla-engine.js journey engines.
   Works on any journey reader (#reader / #rBody / .block).
   1) «🔊 استمِع للمحطة كاملة» — reads the title, then every text block
      in order (ONE speechSynthesis utterance per block, waits for onend).
      Stops when the reader closes, the station changes, or another
      read-aloud button starts.
   2) Folds long text: a block with > 2 paragraphs (or > ~350 chars)
      shows the first 2 and a «اقرأ المزيد ▾» toggle. Never folds Quran
      verses, quizzes, activities, answers or interactive widgets.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkStationLite) return; window.__mkStationLite = true;
  var synth = window.speechSynthesis;

  function L() { try { return localStorage.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function tx(a, e) { return L() === 'ar' ? a : e; }
  function clean(t) {
    t = String(t || '');
    try { t = t.replace(/[\u{1F000}-\u{1FFFF}\u{2190}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu, ''); } catch (e) {}
    return t.replace(/\s+/g, ' ').trim();
  }

  /* ───────── styles ───────── */
  function css() {
    if (document.getElementById('mk-sl-css')) return;
    var s = document.createElement('style'); s.id = 'mk-sl-css';
    s.textContent =
      '.mk-sl-bar{position:relative;z-index:2;display:flex;justify-content:center;margin:.9rem auto 0;max-width:100%}' +
      '.mk-sl-all{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:48px;min-width:44px;max-width:100%;padding:.55rem 1.3rem;' +
      'border-radius:999px;border:2px solid rgba(232,181,48,.75);background:linear-gradient(160deg,rgba(232,181,48,.28),rgba(232,181,48,.12));' +
      'color:#FCE7A8;font:inherit;font-weight:900;font-size:1.02rem;line-height:1.25;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.28);' +
      '-webkit-tap-highlight-color:transparent;transition:transform .15s,background .2s}' +
      '.mk-sl-all:hover{transform:translateY(-1px)}' +
      '.mk-sl-all:focus-visible,.mk-sl-more:focus-visible{outline:3px solid #F5CC5A;outline-offset:3px}' +
      '.mk-sl-all.playing{background:linear-gradient(160deg,#E8B530,#caa01f);color:#10243a;border-color:#F5CC5A}' +
      '.mk-sl-all .mk-sl-eq{display:none;gap:2px;align-items:flex-end;height:14px}' +
      '.mk-sl-all.playing .mk-sl-eq{display:inline-flex}' +
      '.mk-sl-eq i{display:block;width:3px;height:6px;background:currentColor;border-radius:2px;animation:mkSlEq .9s ease-in-out infinite}' +
      '.mk-sl-eq i:nth-child(2){animation-delay:.2s}.mk-sl-eq i:nth-child(3){animation-delay:.4s}' +
      '@keyframes mkSlEq{0%,100%{height:4px}50%{height:14px}}' +
      '@media (prefers-reduced-motion:reduce){.mk-sl-eq i{animation:none;height:10px}}' +
      '.mk-sl-reading{outline:3px solid rgba(232,181,48,.85);outline-offset:3px;border-radius:14px;transition:outline-color .2s}' +
      '.mk-sl-hide{display:none!important}' +
      '.mk-sl-clamp{max-height:9.6em;overflow:hidden;-webkit-mask-image:linear-gradient(#000 60%,transparent);mask-image:linear-gradient(#000 60%,transparent)}' +
      '.mk-sl-more{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:.35rem;min-height:44px;min-width:44px;margin:.35rem 0 .2rem;padding:.4rem 1.1rem;' +
      'border-radius:999px;border:1.5px solid rgba(255,255,255,.28);background:rgba(255,255,255,.08);color:#F5CC5A;font:inherit;font-weight:800;font-size:.92rem;cursor:pointer}' +
      '.mk-sl-more:hover{background:rgba(255,255,255,.14)}';
    (document.head || document.documentElement).appendChild(s);
  }

  /* ───────── what counts as interactive / never-fold ───────── */
  var NOFOLD_BLOCK = /quiz|answer|activity|stgame|game|match|machine|journal|myth|wahy|ayah|verse|quran|dua|hadith/i;
  var NOFOLD_ANC = '.ayah,.ayah-ref,.verse,.quran,.dua-text,.quiz,.answer,.answers,.activity,.mk-quiz,.st-game,.hajj-game,.match-cols,.cm-stage,.flip,.journal,form';
  var INTERACTIVE = 'button,input,textarea,select,a[href],[onclick],[contenteditable],[role=button],details,audio,video,iframe';

  function eligibleP(p) {
    if (p.closest(NOFOLD_ANC)) return false;
    if (p.querySelector(INTERACTIVE + ',.ayah')) return false;
    var t = p.textContent || '';
    if (/[﴿﴾]/.test(t)) return false;
    return clean(t).length > 0;
  }
  function moreLabel(open) { return open ? tx('اقرأ أقلّ ▴', 'Show less ▴') : tx('اقرأ المزيد ▾', 'Read more ▾'); }

  function foldBlock(block) {
    if (block.getAttribute('data-mk-sl-fold')) return;
    block.setAttribute('data-mk-sl-fold', '1');
    if (NOFOLD_BLOCK.test(block.className || '')) return;
    var ps = [].filter.call(block.querySelectorAll('p'), eligibleP);
    if (!ps.length) return;
    var units = [];
    ps.forEach(function (p) {
      var lines = [].filter.call(p.children, function (c) { return c.classList && c.classList.contains('st-line'); });
      if (lines.length > 1) lines.forEach(function (s) { units.push(s); }); else units.push(p);
    });
    var total = 0; units.forEach(function (u) { total += clean(u.textContent).length; });
    var hide = [], clampEl = null;
    if (units.length > 2) hide = units.slice(2);
    else if (total > 350) clampEl = ps[ps.length - 1];
    if (!hide.length && !clampEl) return;

    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'mk-sl-more';
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = moreLabel(false);
    function set(open) {
      hide.forEach(function (u) { u.classList.toggle('mk-sl-hide', !open); });
      if (clampEl) clampEl.classList.toggle('mk-sl-clamp', !open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = moreLabel(open);
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(btn.getAttribute('aria-expanded') !== 'true'); });
    var last = hide.length ? hide[hide.length - 1] : clampEl;
    var anchor = last.tagName === 'P' ? last : (last.closest('p') || last);
    // inside a row layout (e.g. avatar + text) put the toggle under the whole row
    while (anchor.parentElement && anchor.parentElement !== block &&
           /flex|grid/.test(getComputedStyle(anchor.parentElement).display) &&
           !/column/.test(getComputedStyle(anchor.parentElement).flexDirection)) anchor = anchor.parentElement;
    anchor.insertAdjacentElement('afterend', btn);
    set(false);
  }

  /* ───────── listen to the whole station ───────── */
  var SKIP_READ = 'button,textarea,input,select,script,style,.mk-listen,.mk-sl-bar,.mk-sl-more,.flip-back,.flip-hint,.cm-stage,.match-cols,.match-done,.st-game,.hajj-game,.saved,.ring,.bi,[aria-hidden=true]';
  function textOf(el) {
    var c = el.cloneNode(true);
    [].forEach.call(c.querySelectorAll(SKIP_READ), function (x) { x.remove(); });
    [].forEach.call(c.querySelectorAll(L() === 'ar' ? '.name-en' : '.name-ar'), function (x) { x.remove(); });   // one language per utterance
    // keep line breaks between paragraphs / lines as sentence pauses
    [].forEach.call(c.querySelectorAll('p,div,li,h3,h2,.st-line,br'), function (x) { x.appendChild(document.createTextNode(' ')); });
    return clean(c.textContent);
  }
  function collect(rb) {
    var items = [];
    var hero = rb.querySelector('.s-hero');
    var h2 = rb.querySelector('.s-hero h2') || rb.querySelector('h2');
    var title = h2 ? textOf(h2) : '';
    var sim = hero && hero.querySelector('.hero-simile');
    if (sim) title = (title ? title + '. ' : '') + textOf(sim);
    if (title) items.push({ el: hero || h2, text: title });
    [].forEach.call(rb.querySelectorAll('.block'), function (b) {
      if (b.parentElement && b.parentElement.closest('.block')) return;   // nested
      var h = b.querySelector('h3');
      var head = h ? textOf(h) : '';
      var body = textOf(b);
      if (head && body.indexOf(head) === 0) body = body.slice(head.length).trim();
      if (body.replace(/[\s.،,:«»"'!?؟…-]/g, '').length < 3) return;          // e.g. journal / game-only blocks
      items.push({ el: b, text: (head ? head + '. ' : '') + body });
    });
    return items;
  }

  var sess = null, seq = 0, selfCall = false, allBtn = null;
  function label(on) {
    return on ? ('⏹ ' + tx('إيقاف الاستماع', 'Stop listening'))
              : ('🔊 ' + tx('استمِع للمحطة كاملة', 'Listen to the whole station'));
  }
  function paint() {
    if (!allBtn) return;
    var on = !!sess;
    allBtn.classList.toggle('playing', on);
    allBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    allBtn.querySelector('.mk-sl-tx').textContent = label(on);
  }
  function unmark() { [].forEach.call(document.querySelectorAll('.mk-sl-reading'), function (x) { x.classList.remove('mk-sl-reading'); }); }
  function endSession(cancel) {
    var had = !!sess; sess = null; unmark(); paint();
    if (had && cancel && synth) { selfCall = true; try { synth.cancel(); } catch (e) {} selfCall = false; }
  }
  /* observe (never replace) other read-aloud calls so the sequence ends
     cleanly when a per-block 🔊 button or any other feature takes over */
  function hook() {
    if (!synth) return;
    if (!synth.cancel.__mkSL) {
      var oc = synth.cancel;
      var wc = function () { if (!selfCall && sess) endSession(false); return oc.apply(synth, arguments); };
      wc.__mkSL = true; synth.cancel = wc;
    }
    if (!synth.speak.__mkSL) {
      var os = synth.speak;
      var ws = function (u) { if (!selfCall && sess && u !== sess.u) endSession(false); return os.apply(synth, arguments); };
      ws.__mkSL = true; synth.speak = ws;
    }
  }
  function say(s) {
    if (sess !== s) return;
    if (s.i >= s.items.length) { endSession(false); return; }
    var it = s.items[s.i++], txt = it.text;
    unmark(); if (it.el && it.el.classList) {
      it.el.classList.add('mk-sl-reading');
      try { var r = it.el.getBoundingClientRect(); if (r.top < 0 || r.top > (window.innerHeight || 800) * .7) it.el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    }
    var lang = L();
    var u = new SpeechSynthesisUtterance(window.MKVoice && MKVoice.fixText ? MKVoice.fixText(txt) : txt);
    u.lang = lang === 'ar' ? 'ar-SA' : 'en-US'; u.rate = .95;
    try { if (window.MKVoice && MKVoice.applyGender) MKVoice.applyGender(u, txt, lang, window.MK_VOICE_GENDER); } catch (e) {}
    s.u = u; var fired = false;
    u.onend = function () { if (fired) return; fired = true; if (sess === s) setTimeout(function () { say(s); }, 350); };
    u.onerror = function (e) {
      if (fired) return; fired = true;
      if (sess !== s) return;
      var er = e && e.error;
      if (er === 'interrupted' || er === 'canceled') endSession(false); else setTimeout(function () { say(s); }, 350);
    };
    selfCall = true; try { synth.speak(u); } catch (e) { selfCall = false; endSession(false); return; } selfCall = false;
  }
  function start() {
    var rb = document.getElementById('rBody'); if (!rb || !synth) return;
    // stop a per-block 🔊 that is playing, through its own button
    [].forEach.call(rb.querySelectorAll('.mk-listen'), function (b) { if (/⏸/.test(b.textContent)) { try { b.click(); } catch (e) {} } });
    hook();
    endSession(true);
    var items = collect(rb); if (!items.length) return;
    selfCall = true; try { synth.cancel(); } catch (e) {} selfCall = false;
    sess = { id: ++seq, items: items, i: 0 }; paint();
    say(sess);
  }
  function addAll(rb) {
    if (!synth || rb.querySelector('.mk-sl-all')) return;
    var host = rb.querySelector('.s-hero');
    var bar = document.createElement('div'); bar.className = 'mk-sl-bar';
    var b = document.createElement('button'); b.type = 'button'; b.className = 'mk-sl-all';
    b.innerHTML = '<span class="mk-sl-eq" aria-hidden="true"><i></i><i></i><i></i></span><span class="mk-sl-tx"></span>';
    b.addEventListener('click', function (e) { e.stopPropagation(); if (sess) endSession(true); else start(); });
    bar.appendChild(b);
    if (host) host.appendChild(bar);              // inside the hero: no childList change on #rBody
    else rb.insertBefore(bar, rb.firstChild);
    allBtn = b; paint();
  }

  function enhance() {
    var rb = document.getElementById('rBody'); if (!rb || !rb.querySelector('.block')) return;
    css();
    addAll(rb);
    [].forEach.call(rb.querySelectorAll('.block'), foldBlock);
  }
  function boot() {
    var rb = document.getElementById('rBody'); if (!rb) return;
    new MutationObserver(function () { endSession(true); allBtn = null; setTimeout(enhance, 40); }).observe(rb, { childList: true });
    var rd = document.getElementById('reader');
    if (rd) new MutationObserver(function () { if (!rd.classList.contains('open') && sess) endSession(true); })
      .observe(rd, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('pagehide', function () { if (sess) endSession(true); });
    document.addEventListener('visibilitychange', function () { if (document.hidden && sess) endSession(true); });
    enhance();
  }
  window.MKStationLite = { stop: function () { endSession(true); }, playing: function () { return !!sess; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
