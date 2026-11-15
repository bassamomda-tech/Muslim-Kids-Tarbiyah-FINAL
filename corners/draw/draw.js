/* «مرسمي» — My Art Studio.
   🖍️ Colour: the 80 colouring-book pages (an ayah or a hadith + a line scene from the site's own illustrator,
      no people, no faces) coloured ON SCREEN — pick a colour, tap a shape to fill it; undo; start again.
   ✏️ Draw: a free drawing board — brush sizes, colours, rubber, undo, clear.
   🖼️ My drawings: saved work, per child, kept in this browser's IndexedDB (pictures are too big for the family cloud backup);
      open, download, print, delete. The number of drawings shows in the bag (draw_count) and saving gives ⭐ once a day. */
(function () {
  'use strict';
  var root = document.getElementById('dw'); if (!root) return;
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  var lang = 'ar'; try { lang = (LS && LS.getItem('bunyanLang') || 'ar').indexOf('en') === 0 ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'ar' ? a : e; }
  function N(n) { return lang === 'ar' ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(id) { return document.getElementById(id); }
  function child() { try { return (window.MK && MK.activeId && MK.activeId()) || 'main'; } catch (e) { return 'main'; } }
  var AC = null;
  function snd(k) { try { var o = LS && JSON.parse(LS.getItem('mk:a11y') || 'null'); if (o && o.sfx === 'off') return; AC = AC || new (window.AudioContext || window.webkitAudioContext)(); var t = AC.currentTime, seq = k === 'fill' ? [[700, .07], [1050, .09]] : k === 'save' ? [[523, .1], [659, .1], [784, .16]] : [[440, .05]]; seq.forEach(function (s) { var g = AC.createGain(), os = AC.createOscillator(); os.frequency.value = s[0]; os.type = 'sine'; g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + s[1]); os.connect(g); g.connect(AC.destination); os.start(t); os.stop(t + s[1]); t += s[1] * .8; }); } catch (e) {} }

  var COLORS = ['#E5574A', '#F0963C', '#F5CC5A', '#FFF1A8', '#3BB36D', '#1F7A44', '#8FD3FF', '#2F6FD6', '#1F3A5F', '#C77DFF', '#F49AC1', '#A0522D', '#E3B23C', '#9AA3AD', '#2B2118', '#FFFFFF'];
  var S = { tab: 'color', book: 'ayat', idx: 0, color: '#3BB36D', size: 8, rub: false };
  try { var sv = JSON.parse(LS.getItem('draw_ui') || 'null'); if (sv) { S.book = sv.book || 'ayat'; S.idx = sv.idx || 0; S.color = sv.color || S.color; } } catch (e) {}
  function keep() { try { LS.setItem('draw_ui', JSON.stringify({ book: S.book, idx: S.idx, color: S.color })); } catch (e) {} }

  /* ── IndexedDB gallery ── */
  var DBP = null;
  function db() {
    if (DBP) return DBP;
    DBP = new Promise(function (ok, no) {
      if (!window.indexedDB) return no(new Error('noidb'));
      var rq = indexedDB.open('mk-draw', 1);
      rq.onupgradeneeded = function () { var d = rq.result; if (!d.objectStoreNames.contains('art')) d.createObjectStore('art', { keyPath: 'id' }); };
      rq.onsuccess = function () { ok(rq.result); }; rq.onerror = function () { no(rq.error); };
    });
    return DBP;
  }
  function all() { return db().then(function (d) { return new Promise(function (ok) { var r = d.transaction('art', 'readonly').objectStore('art').getAll(); r.onsuccess = function () { var c = child(); ok((r.result || []).filter(function (x) { return x.child === c; }).sort(function (a, b) { return b.at - a.at; })); }; r.onerror = function () { ok([]); }; }); }).catch(function () { return []; }); }
  function put(item) { return db().then(function (d) { return new Promise(function (ok, no) { var tx = d.transaction('art', 'readwrite'); tx.objectStore('art').put(item); tx.oncomplete = ok; tx.onerror = function () { no(tx.error); }; }); }); }
  function del(id) { return db().then(function (d) { return new Promise(function (ok) { var tx = d.transaction('art', 'readwrite'); tx.objectStore('art').delete(id); tx.oncomplete = ok; tx.onerror = ok; }); }); }
  function recount() { return all().then(function (L) { try { LS.setItem('draw_count', String(L.length)); } catch (e) {} if (L.length > 60) return Promise.all(L.slice(60).map(function (x) { return del(x.id); })).then(function () { return L.slice(0, 60); }); return L; }); }
  function save(dataUrl, kind, title) {
    var item = { id: 'a' + Date.now().toString(36), child: child(), at: Date.now(), kind: kind, title: title || '', img: dataUrl };
    return put(item).then(recount).then(function () {
      var got = 0; try { if (window.MKJourney && MKJourney.earn) got = MKJourney.earn('draw', kind, 2, { daily: true }); } catch (e) {}
      snd('save'); return got;
    });
  }

  /* ── shell ── */
  function shell(inner) {
    root.innerHTML = '<section class="dw-hero"><div style="font-size:2.4rem">🎨</div><h1>' + T('مرسمي', 'My Art Studio') + '</h1><p>' + T('لوّن صفحاتٍ فيها آيةٌ أو حديث، أو ارسم ما تحبّ، واحفظ أعمالك في «رسوماتي».', 'Colour pages with an ayah or a hadith, or draw what you like, and keep your work in "My drawings".') + '</p></section>' +
      '<div class="dw-tabs" role="group">' + [['color', '🖍️', 'لوّن', 'Colour'], ['draw', '✏️', 'ارسم', 'Draw'], ['gal', '🖼️', 'رسوماتي', 'My drawings']].map(function (t) { return '<button type="button" class="dw-tab" data-t="' + t[0] + '" aria-pressed="' + (S.tab === t[0]) + '">' + t[1] + ' ' + T(t[2], t[3]) + '</button>'; }).join('') + '</div>' + inner;
    [].forEach.call(root.querySelectorAll('[data-t]'), function (b) { b.onclick = function () { S.tab = b.dataset.t; go(); }; });
  }
  function palette(withRubber) {
    return '<div class="dw-pal" role="group" aria-label="' + T('الألوان', 'Colours') + '">' + COLORS.map(function (c) { return '<button type="button" style="--c:' + c + '" data-c="' + c + '" aria-pressed="' + (!S.rub && S.color === c) + '" aria-label="' + c + '"></button>'; }).join('') + (withRubber ? '<button type="button" class="rub" data-rub="1" aria-pressed="' + S.rub + '" aria-label="' + T('ممحاة', 'Rubber') + '">🧽</button>' : '') + '</div>';
  }
  function bindPal() {
    [].forEach.call(root.querySelectorAll('.dw-pal [data-c]'), function (b) { b.onclick = function () { S.color = b.dataset.c; S.rub = false; keep(); paintPal(); snd(); }; });
    var r = root.querySelector('.dw-pal [data-rub]'); if (r) r.onclick = function () { S.rub = !S.rub; paintPal(); };
  }
  function paintPal() { [].forEach.call(root.querySelectorAll('.dw-pal button'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.rub ? S.rub : (!S.rub && b.dataset.c === S.color))); }); }

  /* ════════ 🖍️ colouring ════════ */
  var fills = {};   /* page id → {index: colour} while the page is open */
  function colour() {
    var D = window.MK_DAY || {}, list = D[S.book] || []; if (S.idx >= list.length) S.idx = 0;
    var o = list[S.idx]; if (!o) { shell('<p class="dw-empty">' + T('لا صفحات.', 'No pages.') + '</p>'); return; }
    shell('<div class="dw-pick"><select id="dwBook">' + [['ayat', '📖 آيات', '📖 Ayat'], ['hadith', '🕌 أحاديث', '🕌 Hadith']].map(function (b) { return '<option value="' + b[0] + '"' + (S.book === b[0] ? ' selected' : '') + '>' + T(b[1], b[2]) + '</option>'; }).join('') + '</select>' +
      '<button type="button" class="dw-btn" id="dwPrev" aria-label="' + T('السابقة', 'Previous') + '">' + T('→', '←') + '</button><b>' + N(S.idx + 1) + ' / ' + N(list.length) + '</b><button type="button" class="dw-btn" id="dwNext" aria-label="' + T('التالية', 'Next') + '">' + T('←', '→') + '</button></div>' +
      '<div class="dw-sheet"><div class="dw-pic" id="dwPic">⏳</div><div class="dw-tx">' + esc(o.ar) + '</div><div class="dw-src">' + esc((o.ref || o.src || {})[lang] || (o.ref || o.src || {}).ar || '') + '</div></div>' +
      palette(false) + '<p class="dw-msg" id="dwMsg">' + T('👆 اختر لونًا ثم اضغط على أيّ جزءٍ من الرسم لتلوّنه', '👆 Pick a colour, then tap any part of the picture to colour it') + '</p>' +
      '<div class="dw-row"><button type="button" class="dw-btn" id="dwUndo">↩️ ' + T('تراجع', 'Undo') + '</button><button type="button" class="dw-btn" id="dwReset">🔄 ' + T('من جديد', 'Start again') + '</button><button type="button" class="dw-btn main" id="dwSave">💾 ' + T('احفظ في رسوماتي', 'Save to my drawings') + '</button><button type="button" class="dw-btn" id="dwPrint">🖨️ ' + T('اطبع', 'Print') + '</button></div>');
    bindPal();
    var key = S.book + ':' + o.id, F = fills[key] = fills[key] || {}, undo = [];
    $('dwBook').onchange = function () { S.book = this.value; S.idx = 0; keep(); go(); };
    $('dwPrev').onclick = function () { S.idx = (S.idx - 1 + list.length) % list.length; keep(); go(); };
    $('dwNext').onclick = function () { S.idx = (S.idx + 1) % list.length; keep(); go(); };
    function paint() { var els = $('dwPic').querySelectorAll('[data-fill]'); [].forEach.call(els, function (e, i) { e.setAttribute('fill', F[i] || '#fff'); }); }
    window.MKStoryPic.get({ id: 'col-' + o.id, kind: 'color', W: 720, era: 'old', title: '', emoji: '', text: (o.kid ? o.kid.ar + ' ' : '') + o.ar + ' ' + (o.en || '') }, function (svg) {
      var box = $('dwPic'); if (!box) return;
      if (!svg) { box.textContent = T('تعذّر رسم الصفحة.', 'The page could not be drawn.'); return; }
      box.innerHTML = svg; var g = box.querySelector('svg'); g.setAttribute('preserveAspectRatio', 'xMidYMid meet'); g.setAttribute('role', 'img'); g.setAttribute('aria-label', T('رسمٌ للتلوين', 'A picture to colour'));
      var n = 0; [].forEach.call(g.querySelectorAll('path,rect,circle,ellipse,polygon'), function (e) {
        if (e.closest('clipPath')) return; var f = (e.getAttribute('fill') || '').toLowerCase();
        if (f === '#fff' || f === '#ffffff' || f === 'white') { e.setAttribute('data-fill', n++); }
      });
      paint();
      g.addEventListener('click', function (ev) {
        var t = ev.target.closest && ev.target.closest('[data-fill]'); if (!t) return;
        var i = +t.getAttribute('data-fill'); undo.push([i, F[i] || '#fff']); F[i] = S.color; t.setAttribute('fill', S.color); snd('fill');
      });
    });
    $('dwUndo').onclick = function () { var u = undo.pop(); if (!u) return; F[u[0]] = u[1]; paint(); };
    $('dwReset').onclick = function () { if (!confirm(T('نبدأ تلوين هذه الصفحة من جديد؟', 'Start colouring this page again?'))) return; for (var k in F) delete F[k]; undo = []; paint(); };
    $('dwPrint').onclick = function () { window.print(); };
    $('dwSave').onclick = function () {
      var g = $('dwPic').querySelector('svg'); if (!g) return; var btn = this; btn.disabled = true;
      svgToJpeg(g, 1200, function (url) {
        if (!url) { btn.disabled = false; $('dwMsg').textContent = T('تعذّر الحفظ.', 'Could not save.'); return; }
        save(url, 'color', o.ar.slice(0, 60)).then(function (got) { btn.disabled = false; $('dwMsg').textContent = '✅ ' + T('حُفظت في رسوماتي!', 'Saved to my drawings!') + (got ? ' +' + N(got) + ' ⭐' : ''); }, function () { btn.disabled = false; $('dwMsg').textContent = T('تعذّر الحفظ على هذا الجهاز.', 'Could not save on this device.'); });
      });
    };
  }
  function svgToJpeg(svgEl, W, cb) {
    try {
      var vb = (svgEl.getAttribute('viewBox') || '0 0 720 300').split(/\s+/).map(Number), H = Math.round(W * vb[3] / vb[2]);
      var clone = svgEl.cloneNode(true); clone.setAttribute('width', W); clone.setAttribute('height', H); clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      var src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(clone));
      var img = new Image(); img.onload = function () { var c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); x.drawImage(img, 0, 0, W, H); try { cb(c.toDataURL('image/jpeg', 0.86)); } catch (e) { cb(null); } };
      img.onerror = function () { cb(null); }; img.src = src;
    } catch (e) { cb(null); }
  }

  /* ════════ ✏️ free drawing ════════ */
  var strokes = [];
  function draw() {
    shell('<div class="dw-sheet"><div class="dw-canvas-wrap" id="dwWrap"><canvas id="dwCv" aria-label="' + T('لوحة الرسم', 'Drawing board') + '"></canvas></div></div>' + palette(true) +
      '<div class="dw-row"><div class="dw-sizes" role="group" aria-label="' + T('حجم الفرشاة', 'Brush size') + '">' + [4, 8, 16, 28].map(function (s) { return '<button type="button" data-s="' + s + '" aria-pressed="' + (S.size === s) + '" aria-label="' + s + '"><i style="width:' + Math.min(30, s) + 'px;height:' + Math.min(30, s) + 'px"></i></button>'; }).join('') + '</div></div>' +
      '<div class="dw-row"><button type="button" class="dw-btn" id="dwUndo">↩️ ' + T('تراجع', 'Undo') + '</button><button type="button" class="dw-btn" id="dwClear">🗑️ ' + T('امسح اللوحة', 'Clear') + '</button><button type="button" class="dw-btn main" id="dwSave">💾 ' + T('احفظ في رسوماتي', 'Save to my drawings') + '</button></div><p class="dw-msg" id="dwMsg"></p>');
    bindPal();
    var cv = $('dwCv'), wrap = $('dwWrap'), x = cv.getContext('2d'), cur = null;
    function size() { var r = wrap.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d); redraw(); }
    function line(s, ctx, w, h) {
      ctx.strokeStyle = s.e ? '#fff' : s.c; ctx.lineWidth = s.s * (w / 800); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); s.p.forEach(function (p, i) { var px = p[0] * w, py = p[1] * h; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
      if (s.p.length === 1) ctx.lineTo(s.p[0][0] * w + 0.1, s.p[0][1] * h); ctx.stroke();
    }
    function redraw(ctx, w, h) { ctx = ctx || x; w = w || cv.width; h = h || cv.height; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); strokes.forEach(function (s) { line(s, ctx, w, h); }); }
    function pt(e) { var r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; }
    cv.addEventListener('pointerdown', function (e) { e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (q) {} cur = { c: S.color, s: S.size, e: S.rub, p: [pt(e)] }; strokes.push(cur); redraw(); });
    cv.addEventListener('pointermove', function (e) { if (!cur) return; cur.p.push(pt(e)); line({ c: cur.c, s: cur.s, e: cur.e, p: cur.p.slice(-2) }, x, cv.width, cv.height); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (n) { cv.addEventListener(n, function () { cur = null; }); });
    [].forEach.call(root.querySelectorAll('[data-s]'), function (b) { b.onclick = function () { S.size = +b.dataset.s; [].forEach.call(root.querySelectorAll('[data-s]'), function (q) { q.setAttribute('aria-pressed', String(q === b)); }); }; });
    $('dwUndo').onclick = function () { strokes.pop(); redraw(); };
    $('dwClear').onclick = function () { if (strokes.length && !confirm(T('نمسح اللوحة كلّها؟', 'Clear the whole board?'))) return; strokes = []; redraw(); };
    $('dwSave').onclick = function () {
      if (!strokes.length) { $('dwMsg').textContent = T('ارسم شيئًا أوّلًا 🙂', 'Draw something first 🙂'); return; }
      var c = document.createElement('canvas'); c.width = 1200; c.height = 900; redraw(c.getContext('2d'), 1200, 900);
      var btn = this; btn.disabled = true;
      save(c.toDataURL('image/jpeg', 0.86), 'draw', T('رسمٌ حرّ', 'Free drawing')).then(function (got) { btn.disabled = false; $('dwMsg').textContent = '✅ ' + T('حُفظت في رسوماتي!', 'Saved to my drawings!') + (got ? ' +' + N(got) + ' ⭐' : ''); }, function () { btn.disabled = false; $('dwMsg').textContent = T('تعذّر الحفظ على هذا الجهاز.', 'Could not save on this device.'); });
    };
    size(); window.addEventListener('resize', size);
  }

  /* ════════ 🖼️ my drawings ════════ */
  function gallery() {
    shell('<div id="dwGal" class="dw-gal">⏳</div><p class="dw-src" style="margin-top:.8rem">' + T('الرسومات محفوظة على هذا الجهاز لكلّ طفلٍ وحده (حتى ٦٠ رسمة).', 'Drawings are kept on this device, separately for each child (up to 60).') + '</p>');
    all().then(function (L) {
      var el = $('dwGal'); if (!el) return;
      if (!L.length) { el.outerHTML = '<p class="dw-empty">🎨 ' + T('لا رسومات بعد — لوّن صفحةً أو ارسم شيئًا جميلًا واحفظه!', 'No drawings yet — colour a page or draw something lovely and save it!') + '</p>'; return; }
      el.innerHTML = L.map(function (a) { return '<figure data-id="' + esc(a.id) + '" tabindex="0" role="button"><img src="' + a.img + '" alt="' + esc(a.title || T('رسمة', 'A drawing')) + '"><figcaption>' + (a.kind === 'color' ? '🖍️ ' : '✏️ ') + esc(new Date(a.at).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'short' })) + '</figcaption></figure>'; }).join('');
      [].forEach.call(el.querySelectorAll('figure'), function (f) { var open = function () { view(L.filter(function (a) { return a.id === f.dataset.id; })[0]); }; f.onclick = open; f.onkeydown = function (e) { if (e.key === 'Enter') open(); }; });
    });
  }
  function view(a) {
    if (!a) return;
    var d = document.createElement('div'); d.className = 'dw-view'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true');
    d.innerHTML = '<div class="c"><img src="' + a.img + '" alt=""><div class="dw-row"><a class="dw-btn main" download="my-drawing.jpg" href="' + a.img + '">⬇️ ' + T('نزّلها', 'Download') + '</a><button type="button" class="dw-btn" data-a="print">🖨️ ' + T('اطبعها', 'Print') + '</button><button type="button" class="dw-btn" data-a="del">🗑️ ' + T('احذفها', 'Delete') + '</button><button type="button" class="dw-btn" data-a="x">✕ ' + T('إغلاق', 'Close') + '</button></div></div>';
    document.body.appendChild(d);
    var close = function () { d.remove(); };
    d.addEventListener('click', function (e) { if (e.target === d) close(); });
    d.querySelector('[data-a="x"]').onclick = close;
    d.querySelector('[data-a="print"]').onclick = function () { var w = window.open('', '_blank'); if (!w) return; w.document.write('<!DOCTYPE html><html><head><title>' + T('رسمتي', 'My drawing') + '</title><style>@page{margin:10mm}body{margin:0;text-align:center}img{max-width:100%;max-height:95vh}</style></head><body><img src="' + a.img + '"><script>setTimeout(function(){print()},400)<\/script></body></html>'); w.document.close(); };
    d.querySelector('[data-a="del"]').onclick = function () { if (!confirm(T('نحذف هذه الرسمة؟', 'Delete this drawing?'))) return; del(a.id).then(recount).then(function () { close(); gallery(); }); };
  }

  function go() { if (S.tab === 'draw') draw(); else if (S.tab === 'gal') gallery(); else colour(); }
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'ar'; try { LS && LS.setItem('bunyanLang', lang); } catch (e) {}
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    [].forEach.call(document.querySelectorAll('.lng-ar'), function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lng-en'), function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    if (S.tab === 'draw') { var keepStrokes = strokes; draw(); strokes = keepStrokes; } else go();
  }
  [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.onclick = function () { setLang(b.getAttribute('data-lang')); }; });
  window.setLang = setLang;
  setLang(lang);
  recount();
  window.__dw = { S: S, go: go, all: all, strokes: function () { return strokes; } };
})();
