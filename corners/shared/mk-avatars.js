/* ════════════════════════════════════════════════════════════════
   mk-avatars.js — modest character faces for the whole site.
   Emoji like 👧 👩‍⚕️ show uncovered hair / pigtails on most phones, so the
   site's own characters are drawn here instead: boys with a kufi, girls and
   women in hijab, men with a beard and kufi. Small inline SVG, no images.

   • MKAvatar.svg(kind, {c, size, acc})  kind: boy | girl | man | woman | grandpa
       c = hijab / kufi colour, acc = 'doctor' | 'scientist' | 'engineer'
   • MKAvatar.fromEmoji(emoji, seed)    → svg for a known character emoji (or null)
   • Auto: every person emoji on the page (character spots, cards, stories,
     menus…) is swapped for these faces, also after a page re-renders —
     except inside form fields and Quran text. Add class "no-ava" to opt out.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.MKAvatar) return;
  var SKIN = '#F1C7A0', SKIN_D = '#E2AE84', CHEEK = '#F3A59B', EYE = '#3A2A22';
  var HIJAB = ['#2E8B57', '#7A3FB0', '#C0392B', '#2980B9', '#D4A017', '#117A8B', '#C1663A', '#6C3483', '#1F6F8B', '#8E5A2B'];

  function face(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + SKIN + '"/>' +
      '<circle cx="' + (cx - r * .38) + '" cy="' + (cy - r * .02) + '" r="' + (r * .1) + '" fill="' + EYE + '"/>' +
      '<circle cx="' + (cx + r * .38) + '" cy="' + (cy - r * .02) + '" r="' + (r * .1) + '" fill="' + EYE + '"/>' +
      '<circle cx="' + (cx - r * .6) + '" cy="' + (cy + r * .3) + '" r="' + (r * .16) + '" fill="' + CHEEK + '" opacity=".55"/>' +
      '<circle cx="' + (cx + r * .6) + '" cy="' + (cy + r * .3) + '" r="' + (r * .16) + '" fill="' + CHEEK + '" opacity=".55"/>' +
      '<path d="M' + (cx - r * .3) + ' ' + (cy + r * .38) + ' Q' + cx + ' ' + (cy + r * .62) + ' ' + (cx + r * .3) + ' ' + (cy + r * .38) + '" stroke="' + EYE + '" stroke-width="' + (r * .1) + '" fill="none" stroke-linecap="round"/>';
  }
  function kufi(cx, cy, r, col) {          // a rounded cap sitting on the head
    return '<path d="M' + (cx - r * 1.0) + ' ' + (cy - r * .28) + ' Q' + (cx - r * .95) + ' ' + (cy - r * 1.25) + ' ' + cx + ' ' + (cy - r * 1.28) + ' Q' + (cx + r * .95) + ' ' + (cy - r * 1.25) + ' ' + (cx + r * 1.0) + ' ' + (cy - r * .28) + ' Z" fill="' + col + '" stroke="#00000022" stroke-width="1"/>' +
      '<path d="M' + (cx - r * .95) + ' ' + (cy - r * .48) + ' H' + (cx + r * .95) + '" stroke="#00000018" stroke-width="' + (r * .1) + '"/>' +
      '<path d="M' + (cx - r * .7) + ' ' + (cy - r * .82) + ' H' + (cx + r * .7) + '" stroke="#00000012" stroke-width="' + (r * .07) + '" stroke-dasharray="2 2"/>';
  }
  function hijab(cx, cy, r, col, long) {   // covers hair, ears and neck; face shows
    var b = long ? 1.95 : 1.7;
    return '<path d="M' + (cx - r * 1.32) + ' ' + (cy + r * b) + ' Q' + (cx - r * 1.5) + ' ' + (cy - r * 1.45) + ' ' + cx + ' ' + (cy - r * 1.45) + ' Q' + (cx + r * 1.5) + ' ' + (cy - r * 1.45) + ' ' + (cx + r * 1.32) + ' ' + (cy + r * b) + ' Z" fill="' + col + '"/>' +
      '<ellipse cx="' + cx + '" cy="' + (cy + r * .05) + '" rx="' + (r * 1.02) + '" ry="' + (r * 1.12) + '" fill="#ffffff" opacity=".9"/>';
  }
  var ACC = {
    doctor: function (cx, cy, r) { return '<path d="M' + (cx - r * .9) + ' ' + (cy + r * 1.55) + ' Q' + cx + ' ' + (cy + r * 2.25) + ' ' + (cx + r * .9) + ' ' + (cy + r * 1.55) + '" stroke="#5A6B7A" stroke-width="' + (r * .14) + '" fill="none"/><circle cx="' + (cx + r * .25) + '" cy="' + (cy + r * 1.98) + '" r="' + (r * .2) + '" fill="#C8D3DC" stroke="#5A6B7A" stroke-width="' + (r * .08) + '"/>'; },
    scientist: function (cx, cy, r) { return '<rect x="' + (cx - r * .78) + '" y="' + (cy - r * .32) + '" width="' + (r * .62) + '" height="' + (r * .46) + '" rx="' + (r * .16) + '" fill="#BFE6FF" fill-opacity=".55" stroke="#3B6C8E" stroke-width="' + (r * .08) + '"/><rect x="' + (cx + r * .16) + '" y="' + (cy - r * .32) + '" width="' + (r * .62) + '" height="' + (r * .46) + '" rx="' + (r * .16) + '" fill="#BFE6FF" fill-opacity=".55" stroke="#3B6C8E" stroke-width="' + (r * .08) + '"/>'; },
    engineer: function (cx, cy, r) { return '<path d="M' + (cx - r * 1.25) + ' ' + (cy - r * .78) + ' Q' + cx + ' ' + (cy - r * 2.0) + ' ' + (cx + r * 1.25) + ' ' + (cy - r * .78) + ' Z" fill="#F4C430" stroke="#B8901A" stroke-width="' + (r * .07) + '"/><rect x="' + (cx - r * 1.45) + '" y="' + (cy - r * .86) + '" width="' + (r * 2.9) + '" height="' + (r * .2) + '" rx="' + (r * .1) + '" fill="#E0B020"/>'; }
  };

  function svg(kind, o) {
    o = o || {};
    var size = o.size || '1em', col = o.c || '#2E8B57', body = '';
    var cx = 32, cy = 34, r = 15;
    if (kind === 'girl' || kind === 'woman') {
      var adult = kind === 'woman';
      body += hijab(cx, cy, adult ? 16 : 15, col, adult) + face(cx, cy + 1, adult ? 13.5 : 13);
    } else if (kind === 'man' || kind === 'grandpa') {
      var beard = kind === 'grandpa' ? '#E9E9E9' : '#4A3426';
      body += '<rect x="22" y="47" width="20" height="14" rx="6" fill="' + (o.shirt || '#ECE6DA') + '"/>' +
        '<circle cx="' + (cx - r) + '" cy="' + cy + '" r="3.2" fill="' + SKIN_D + '"/><circle cx="' + (cx + r) + '" cy="' + cy + '" r="3.2" fill="' + SKIN_D + '"/>' + face(cx, cy, r) +
        '<path d="M' + (cx - r * .98) + ' ' + (cy + r * .05) + ' Q' + (cx - r * .9) + ' ' + (cy + r * 1.45) + ' ' + cx + ' ' + (cy + r * 1.5) + ' Q' + (cx + r * .9) + ' ' + (cy + r * 1.45) + ' ' + (cx + r * .98) + ' ' + (cy + r * .05) + ' Q' + (cx + r * .6) + ' ' + (cy + r * .62) + ' ' + cx + ' ' + (cy + r * .66) + ' Q' + (cx - r * .6) + ' ' + (cy + r * .62) + ' ' + (cx - r * .98) + ' ' + (cy + r * .05) + ' Z" fill="' + beard + '"/>' +
        '<path d="M' + (cx - r * .3) + ' ' + (cy + r * .5) + ' Q' + cx + ' ' + (cy + r * .66) + ' ' + (cx + r * .3) + ' ' + (cy + r * .5) + '" stroke="' + EYE + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>' +
        kufi(cx, cy, r, o.c || '#FFFFFF');
    } else {   // boy
      body += '<rect x="23" y="47" width="18" height="13" rx="6" fill="' + (o.shirt || '#ECE6DA') + '"/>' +
        '<circle cx="' + (cx - r) + '" cy="' + cy + '" r="3" fill="' + SKIN_D + '"/><circle cx="' + (cx + r) + '" cy="' + cy + '" r="3" fill="' + SKIN_D + '"/>' +
        '<path d="M' + (cx - r) + ' ' + (cy - 2) + ' Q' + cx + ' ' + (cy - r - 3) + ' ' + (cx + r) + ' ' + (cy - 2) + '" fill="#3B2A20"/>' + face(cx, cy, r) + kufi(cx, cy, r, o.c || '#FFFFFF');
    }
    if (o.acc && ACC[o.acc]) body += ACC[o.acc](cx, cy + 1, 13.5);
    return '<svg class="mk-ava" viewBox="8 8 48 50" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false" style="vertical-align:-.15em;display:inline-block">' + body + '</svg>';
  }

  /* emoji → character (variation selectors / skin tones ignored) */
  var MAP = {
    '👦': ['boy'], '🧒': ['boy'], '🧑': ['boy'], '👶': ['boy'],
    '👧': ['girl'],
    '🧕': ['woman'], '👩': ['woman'], '👩‍🏫': ['woman'], '👩‍⚕️': ['woman', 'doctor'], '👩‍🔬': ['woman', 'scientist'], '👷‍♀️': ['woman', 'engineer'], '👩‍🌾': ['woman'],
    '🧔': ['man'], '🧔‍♂️': ['man'], '👨': ['man'], '🧑‍🏫': ['man'], '👨‍🏫': ['man'], '👨‍⚕️': ['man', 'doctor'], '👨‍🔬': ['man', 'scientist'], '👷': ['man', 'engineer'], '👷‍♂️': ['man', 'engineer'], '👨‍🌾': ['man'],
    '👴': ['grandpa'], '👵': ['woman'], '🧓': ['grandpa'], '🧑‍🦳': ['grandpa'], '👨‍🦳': ['grandpa'], '👩‍🦳': ['woman'],
    '🤱': ['woman'], '🤰': ['woman'], '👩‍💼': ['woman'], '👩‍🍳': ['woman'], '👩‍🎓': ['woman'], '🙋‍♀️': ['woman'], '💁‍♀️': ['woman'], '🙆‍♀️': ['woman'],
    '🧑‍💼': ['man'], '👨‍💼': ['man'], '🧑‍🍳': ['man'], '👨‍🍳': ['man'], '🧑‍🔬': ['man', 'scientist'], '🧑‍⚕️': ['man', 'doctor'], '🧑‍🌾': ['man'], '🧑‍🔧': ['man', 'engineer'], '👨‍🔧': ['man', 'engineer'],
    '🧑‍🎓': ['boy'], '👨‍🎓': ['boy'], '🙋‍♂️': ['boy'], '🙋': ['boy']
  };
  function norm(e) { return String(e).replace(/[\u{1F3FB}-\u{1F3FF}\uFE0F]/gu, ''); }   // skin tones & variation selector don't matter
  var M2 = {}; Object.keys(MAP).forEach(function (k) { M2[norm(k)] = MAP[k]; });
  var KEYS = Object.keys(MAP).concat(Object.keys(M2)).sort(function (a, b) { return b.length - a.length; });
  var RX = new RegExp('(' + KEYS.map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')[\\u{1F3FB}-\\u{1F3FF}\\uFE0F]*', 'gu');
  function hash(s) { var h = 0; s = String(s || ''); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function fromEmoji(e, seed, size) {
    var m = M2[norm(e)]; if (!m) return null;
    var c = (m[0] === 'girl' || m[0] === 'woman') ? HIJAB[hash(seed || e) % HIJAB.length] : null;
    return svg(m[0], { c: c, acc: m[1], size: size });
  }

  /* where the site shows its characters (text inside these is swapped) */
  var SPOTS = ['.char-face', '.b-char-emoji', '.host-avatar', '#mCharAvi', '.m-char-avi', '.b-char-mini', '.special-corners .b-chars', '.tr-guide .who', '.g-guide .who', '.mj-guide .who', '.guide .who', '.sk-line .who', '.sk-pl-hd small', '.mkbag-avi', '#bagAvi', '.sk-door .ic', '#mCharName', '.b-icon', '.sb-icon', '#aviPick .opt', '.pavi', '#ccAvi', '.mkcs-guide', '.who', '#mkv-toggle button'].join(',');
  function swapText(el, seed) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = w.nextNode())) { RX.lastIndex = 0; if (RX.test(n.nodeValue)) nodes.push(n); }
    nodes.forEach(function (t) {
      var span = document.createElement('span'), s = t.nodeValue;
      span.innerHTML = s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; })
        .replace(RX, function (m) { return fromEmoji(m, seed || (t.parentNode && t.parentNode.textContent) || m) || m; });
      span.style.display = 'contents';
      t.parentNode.replaceChild(span, t);
    });
  }
  /* everywhere else on the page too: any person emoji in normal text becomes a modest face
     (not inside form fields, code, or Quran text) */
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, OPTION: 1, NOSCRIPT: 1, TITLE: 1, svg: 1, SVG: 1, CODE: 1, PRE: 1 };
  function skippable(el) {
    for (var e = el; e && e.nodeType === 1; e = e.parentNode) {
      if (SKIP_TAGS[e.tagName] || e.isContentEditable || (e.classList && (e.classList.contains('mk-ava') || e.classList.contains('no-ava')))) return true;
      var c = typeof e.className === 'string' ? e.className : '';
      if (/quran|ayah|mushaf|verse/i.test(c)) return true;
    }
    return false;
  }
  function swapAll(root) {
    if (!root || !document.body) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = w.nextNode())) { RX.lastIndex = 0; if (RX.test(n.nodeValue) && n.parentNode && !skippable(n.parentNode)) nodes.push(n); }
    nodes.forEach(function (t) {
      var span = document.createElement('span'), s = t.nodeValue, seed = (t.parentNode && t.parentNode.textContent) || s;
      span.innerHTML = s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; })
        .replace(RX, function (m) { return fromEmoji(m, seed) || m; });
      span.style.display = 'contents';
      if (t.parentNode) t.parentNode.replaceChild(span, t);
    });
  }
  function run(root) {
    try {
      (root || document).querySelectorAll(SPOTS).forEach(function (el) {
        if (el.querySelector('.mk-ava')) return;
        var seed = (el.closest('[id^="card-"],.char-pin,.sk-line,.tr-guide') || el).textContent;
        swapText(el, seed);
      });
      swapAll(root && root.nodeType === 1 ? root : document.body);
    } catch (e) {}
  }
  var pending = false;
  function soon() { if (pending) return; pending = true; requestAnimationFrame(function () { pending = false; run(); }); }
  function start() { run(); try { new MutationObserver(soon).observe(document.body, { childList: true, subtree: true }); } catch (e) {} }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  window.MKAvatar = { svg: svg, fromEmoji: fromEmoji, run: run };
})();
