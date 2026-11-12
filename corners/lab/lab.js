/* ════════════════════════════════════════════════════════════════
   lab.js — «مختبر الاكتشاف» / Discovery Lab: the shared engine.
   Every experiment (sims/<id>.js) calls  Lab.start({...})  and gets the SAME frame:
     title · three tabs (موجَّه Guided / استكشاف Explore / تحدٍّ Challenge) · the stage (inline SVG) ·
     read-outs · the step card with 🔊 · controls · play/step/reset/speed bar · the «تفكَّر» card.
   Stars: Guided done = 2, Challenge done = 3  →  MKJourney.earn('lab', '<id>:guided|challenge', n).
   Motion: one requestAnimationFrame loop, stopped when the tab is hidden. In calm / focus mode
   (html.calm, html.a11y-focus) nothing moves unless the child has just touched something.
   No network calls here. Window global: Lab.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var LS = window.localStorage, lang = 'ar', NS = 'http://www.w3.org/2000/svg';
  try { lang = LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) {}

  /* every experiment, in hub order (s = subject) */
  var SUBJECTS = [
    { id: 'body',   ic: '🫀', ar: 'جسم الإنسان', en: 'Human body' },
    { id: 'plants', ic: '🌱', ar: 'النبات', en: 'Plants' },
    { id: 'water',  ic: '💧', ar: 'الماء والطقس', en: 'Water & weather' },
    { id: 'matter', ic: '⚛️', ar: 'المادّة والكيمياء', en: 'Matter & chemistry' },
    { id: 'space',  ic: '🌙', ar: 'الفضاء', en: 'Space' },
    { id: 'maths',  ic: '🔢', ar: 'الرياضيات', en: 'Maths' }
  ];
  var LIST = [
    { id: 'digestion', s: 'body', ic: '🍞', c: '#B5651D', t: { ar: 'رحلة لقمة الطعام', en: 'The journey of a bite' }, d: { ar: 'اسحب اللقمة من الفم إلى الدم', en: 'Drag a bite from the mouth to the blood' } },
    { id: 'heart', s: 'body', ic: '🫀', c: '#B83A4B', t: { ar: 'القلب والدورة الدموية', en: 'The heart & blood circulation' }, d: { ar: 'اجعل القلب ينبض وتابع الدم', en: 'Make the heart beat and follow the blood' } },
    { id: 'breathing', s: 'body', ic: '🫁', c: '#C2607A', t: { ar: 'التنفّس', en: 'Breathing' }, d: { ar: 'حرّك الحجاب الحاجز واملأ الرئتين', en: 'Move the diaphragm and fill the lungs' } },
    { id: 'plant', s: 'plants', ic: '🌱', c: '#2E8B57', t: { ar: 'كيف يصنع النبات غذاءه؟', en: 'How plants make their food' }, d: { ar: 'أعطِ النبتة ضوءًا وماءً وهواءً', en: 'Give the plant light, water and air' } },
    { id: 'water-cycle', s: 'water', ic: '🌧️', c: '#2E6DA4', t: { ar: 'دورة الماء والمطر', en: 'The water cycle & rain' }, d: { ar: 'تحكّم بالشمس والرياح واصنع المطر', en: 'Control the sun and wind and make rain' } },
    { id: 'atoms', s: 'matter', ic: '⚛️', c: '#6C4AB6', t: { ar: 'الذرّات والروابط', en: 'Atoms & bonds' }, d: { ar: 'انقل إلكترونًا واصنع الملح والماء', en: 'Move an electron; make salt and water' } },
    { id: 'states', s: 'matter', ic: '🧊', c: '#117A8B', t: { ar: 'حالات المادّة', en: 'States of matter' }, d: { ar: 'سخِّن وبرِّد: جليد، ماء، بخار', en: 'Heat and cool: ice, water, steam' } },
    { id: 'day-night', s: 'space', ic: '🌍', c: '#1F4E8C', t: { ar: 'الليل والنهار وأطوار القمر', en: 'Day, night & the Moon\'s phases' }, d: { ar: 'أدِر الأرض وحرّك القمر حولها', en: 'Spin the Earth and move the Moon around it' } },
    { id: 'fractions', s: 'maths', ic: '🍕', c: '#C0562B', t: { ar: 'الكسور', en: 'Fractions' }, d: { ar: 'قطِّع وظلِّل وقارِن واجمع', en: 'Cut, shade, compare and add' } },
    { id: 'times', s: 'maths', ic: '🧮', c: '#B8860B', t: { ar: 'جدول الضرب بالمصفوفات', en: 'Times tables with arrays' }, d: { ar: 'ابنِ صفوفًا وأعمدة وشاهد الناتج', en: 'Build rows and columns; see the product' } }
  ];

  function T(o) { if (o == null) return ''; if (typeof o !== 'object') return String(o); return lang === 'en' ? (o.en != null ? o.en : o.ar) : o.ar; }
  function N(n) { var s = String(n); return lang === 'ar' ? s.replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }).replace('.', '٫') : s; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function set(e, at) { for (var k in at) { if (k === 'text') e.textContent = at[k]; else e.setAttribute(k, at[k]); } return e; }
  function S(tag, at, parent) { var e = document.createElementNS(NS, tag); if (at) set(e, at); if (parent) parent.appendChild(e); return e; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function mix(c1, c2, t) {   // '#rrggbb' → rgb()
    function p(c) { return [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16)]; }
    var a = p(c1), b = p(c2); t = clamp(t, 0, 1);
    return 'rgb(' + Math.round(lerp(a[0], b[0], t)) + ',' + Math.round(lerp(a[1], b[1], t)) + ',' + Math.round(lerp(a[2], b[2], t)) + ')';
  }
  function calm() { var c = document.documentElement.classList; return c.contains('calm') || c.contains('a11y-focus'); }
  function J() { return window.MKJourney || null; }
  function earnedStars(id, mode) { try { var e = J() && J().earned('lab', id + ':' + mode); return e ? e.stars : 0; } catch (x) { return 0; } }

  /* read aloud: the site's cloud voice when it is there, else the browser's own voice */
  function speak(text) {
    text = String(text || '').replace(/[\u{1F000}-\u{1FFFF}☀-➿️]/gu, ' ');
    function fb() { try { var u = new SpeechSynthesisUtterance(text); u.lang = lang === 'ar' ? 'ar-SA' : 'en-US'; u.rate = .9; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} }
    try { if (window.MKTTS && MKTTS.speak) { var p = MKTTS.speak(text, lang); if (p && p.catch) p.catch(fb); return; } } catch (e) {}
    fb();
  }
  function applyLang() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lng-ar').forEach(function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    document.querySelectorAll('.lng-en').forEach(function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === lang); });
  }
  function wireLang(render) {
    function go(l) { lang = l === 'en' ? 'en' : 'ar'; try { LS.setItem('bunyanLang', lang); } catch (e) {} applyLang(); render(); }
    document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { go(b.dataset.lang); }; });
    window.setLang = go;
  }
  function tafakkur(a) {
    return '<div class="tfk"><h3>🌿 ' + T({ ar: 'تفكَّر', en: 'Reflect' }) + '</h3>' +
      '<p class="ay" lang="ar">' + esc(a.text) + '<span class="ref">' + esc(T(a.ref)) + '</span></p>' +
      (lang === 'en' && a.mean ? '<p class="mean">' + esc(a.mean) + '</p>' : '') +
      '<p class="won">' + esc(T(a.wonder)) + '</p></div>';
  }

  /* ═══════════════ one experiment ═══════════════ */
  function start(def) {
    var host = document.getElementById('lab'), meta = LIST.filter(function (x) { return x.id === def.id; })[0] || {};
    var W = (def.view && def.view[0]) || 360, H = (def.view && def.view[1]) || 280;
    var mode = earnedStars(def.id, 'guided') ? 'explore' : 'guided';
    var raf = 0, last = 0, cur = null;   // cur = the live build (dropped on every re-render)
    try { var q = /[?&]mode=(guided|explore|challenge)/.exec(location.search); if (q) mode = q[1]; } catch (e) {}

    function render() {
      cancelAnimationFrame(raf); raf = 0;
      var B = cur = { playing: !calm(), speed: 1, dirty: true, poked: -1e9, idx: 0, done: false, fin: false, ctl: {}, flags: {} };
      var hasBar = !!def.bar, items = mode === 'guided' ? def.guided : mode === 'challenge' ? (typeof def.challenge === 'function' ? def.challenge() : def.challenge) : null;
      if (!hasBar) B.playing = true;
      document.title = T(def.title) + ' | ' + T({ ar: 'مختبر الاكتشاف', en: 'Discovery Lab' });
      host.innerHTML = '';
      var head = h('div', 'lab-head', '<span class="ic">' + (def.icon || meta.ic || '🧪') + '</span><div class="tx"><h1>' + esc(T(def.title)) + '</h1><p>' + esc(T(def.sub || meta.d)) + '</p></div>');
      var tabs = h('div', 'lab-tabs'); tabs.setAttribute('role', 'tablist');
      [['guided', '🧭', { ar: 'موجَّه', en: 'Guided' }], ['explore', '🔍', { ar: 'استكشاف', en: 'Explore' }], ['challenge', '🎯', { ar: 'تحدٍّ', en: 'Challenge' }]].forEach(function (m) {
        var st = m[0] === 'explore' ? 0 : earnedStars(def.id, m[0]);
        var b = h('button', '', m[1] + ' <span>' + T(m[2]) + '</span>' + (st ? ' <span class="got">⭐' + N(st) + '</span>' : ''));
        b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(mode === m[0])); b.dataset.mode = m[0];
        b.onclick = function () { if (mode !== m[0]) { mode = m[0]; render(); } };
        tabs.appendChild(b);
      });
      var grid = h('div', 'lab-grid'), colA = h('div', 'lab-col a'), colB = h('div', 'lab-col b');
      var stage = h('div', 'lab-stage'), svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': T(def.title) }, stage), toast = h('div', 'lab-toast');
      toast.setAttribute('aria-live', 'polite'); stage.appendChild(toast);
      var outs = h('div', 'lab-outs'), card = h('div', 'lab-card'), ctl = h('div', 'lab-ctl'), bar = h('div', 'lab-bar'), tfk = h('div');
      colA.appendChild(stage); colA.appendChild(outs);
      if (items) colB.appendChild(card);
      colB.appendChild(ctl); colB.appendChild(bar); colB.appendChild(tfk);
      grid.appendChild(colA); grid.appendChild(colB);
      host.appendChild(head); host.appendChild(tabs); host.appendChild(grid);

      function poke() { B.dirty = true; B.poked = performance.now(); }
      function pt(ev) { var r = svg.getBoundingClientRect(); return { x: (ev.clientX - r.left) / r.width * W, y: (ev.clientY - r.top) / r.height * H }; }
      var toastT = 0;
      function say(o) { toast.textContent = T(o); toast.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { toast.classList.remove('on'); }, 2600); }

      /* ── what an experiment builds with ── */
      var L = {
        svg: svg, W: W, H: H, mode: mode, lang: lang, T: T, N: N, S: S, set: set, clamp: clamp, lerp: lerp, mix: mix, poke: poke, say: say, flags: B.flags, ctl: B.ctl,
        calm: calm,
        g: function (at, parent) { return S('g', at || {}, parent || svg); },
        text: function (x, y, str, at, parent) { var t = S('text', { x: x, y: y, 'text-anchor': 'middle', fill: '#fff', 'font-size': 12 }, parent || svg); if (at) set(t, at); t.textContent = T(str); return t; },
        out: function (label) { var o = h('div', 'o', '<span>' + esc(T(label)) + '</span><b>–</b>'); outs.appendChild(o); var b = o.lastChild, prev = null, f = function (v) { v = T(v); if (v !== prev) { prev = v; b.textContent = v; } }; f.label = function (t) { o.firstChild.textContent = T(t); }; f.el = o; return f; },
        slider: function (o) {
          var row = h('label', 'ctl'), lb = h('div', 'lb', '<span>' + esc(T(o.label)) + '</span>'), out = h('output'), inp = h('input');
          inp.type = 'range'; inp.min = o.min; inp.max = o.max; inp.step = o.step || 1; inp.value = o.val; inp.setAttribute('aria-label', T(o.label)); inp.dataset.key = o.key;
          function show() { out.textContent = o.fmt ? T(o.fmt(+inp.value)) : N(+inp.value); }
          inp.addEventListener('input', function () { show(); poke(); o.on && o.on(+inp.value); });
          lb.appendChild(out); row.appendChild(lb); row.appendChild(inp); (o.into || ctl).appendChild(row); show();
          var c = { row: row, input: inp, get: function () { return +inp.value; }, set: function (v) { inp.value = v; show(); o.on && o.on(+inp.value); B.dirty = true; } };
          B.ctl[o.key] = c; return c;
        },
        row: function () { var r = h('div', 'ctl-row'); ctl.appendChild(r); return r; },
        button: function (o) {
          var b = h('button', 'btn', esc(T(o.label))); b.type = 'button'; b.dataset.key = o.key || '';
          b.onclick = function () { poke(); o.on && o.on(); };
          (o.into || L.row()).appendChild(b);
          var c = { row: b, el: b, label: function (t) { b.textContent = T(t); } }; if (o.key) B.ctl[o.key] = c; return c;
        },
        toggle: function (o) {
          var v = !!o.val, b = h('button', 'btn'); b.type = 'button'; b.dataset.key = o.key || '';
          function show() { b.classList.toggle('on', v); b.setAttribute('aria-pressed', String(v)); b.textContent = T(v && o.labelOn ? o.labelOn : o.label); }
          b.onclick = function () { v = !v; show(); poke(); o.on && o.on(v); };
          (o.into || L.row()).appendChild(b); show();
          var c = { row: b, el: b, get: function () { return v; }, set: function (x) { v = !!x; show(); o.on && o.on(v); B.dirty = true; } }; if (o.key) B.ctl[o.key] = c; return c;
        },
        choice: function (o) {
          var seg = h('div', 'seg'), v = o.val, btns = [];
          function show() { btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.v === String(v))); }); }
          o.opts.forEach(function (op) {
            var b = h('button', '', esc(T(op.label))); b.type = 'button'; b.dataset.v = op.v; b.dataset.key = (o.key || '') + ':' + op.v;
            b.onclick = function () { if (String(v) === String(op.v)) return; v = op.v; show(); poke(); o.on && o.on(v); }; seg.appendChild(b); btns.push(b);
          });
          (o.into || ctl).appendChild(seg); show();
          var c = { row: seg, get: function () { return v; }, set: function (x) { v = x; show(); o.on && o.on(v); B.dirty = true; } }; if (o.key) B.ctl[o.key] = c; return c;
        },
        /* drag an SVG element: handlers get {x,y} in viewBox units */
        drag: function (el, hd) {
          var on = false; el.style.touchAction = 'none'; el.style.cursor = 'grab'; el.setAttribute('data-drag', '1');
          el.addEventListener('pointerdown', function (e) { e.preventDefault(); on = true; try { el.setPointerCapture(e.pointerId); } catch (x) {} poke(); hd.start && hd.start(pt(e)); });
          el.addEventListener('pointermove', function (e) { if (!on) return; poke(); hd.move && hd.move(pt(e)); });
          function up(e) { if (!on) return; on = false; poke(); hd.end && hd.end(pt(e)); }
          el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
          return el;
        },
        tap: function (el, fn, label) {
          el.setAttribute('data-tap', '1'); el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button'); if (label) el.setAttribute('aria-label', T(label));
          el.addEventListener('click', function (e) { poke(); fn(pt(e)); });
          el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poke(); fn({ x: 0, y: 0 }); } });
          return el;
        },
        hi: function (key) { Object.keys(B.ctl).forEach(function (k) { var r = B.ctl[k].row; r.classList.toggle('hi', k === key); if (r.classList.contains('btn')) r.classList.toggle('gold', k === key); }); }
      };
      var sim = def.build(L) || {};
      B.sim = sim; B.L = L; B.def = def; B.items = items;

      /* ── play bar ── */
      var bPlay = null;
      function showPlay() { if (!bPlay) return; bPlay.innerHTML = B.playing ? '⏸ ' + T({ ar: 'توقّف', en: 'Pause' }) : '▶ ' + T({ ar: 'تشغيل', en: 'Play' }); bPlay.setAttribute('aria-pressed', String(B.playing)); bPlay.classList.toggle('hi', !B.playing && !!items && !B.done && !B.fin); }
      function restartItem() { if (sim.reset) sim.reset(); if (items && !B.fin) enter(B.idx); poke(); }
      if (hasBar) {
        bPlay = h('button', 'main'); bPlay.type = 'button'; bPlay.dataset.key = 'play';
        bPlay.onclick = function () { B.playing = !B.playing; poke(); showPlay(); };
        bar.appendChild(bPlay);
        if (def.bar.step !== false) {
          var bStep = h('button', '', '⏭ ' + T({ ar: 'خطوة', en: 'Step' })); bStep.type = 'button'; bStep.dataset.key = 'step';
          bStep.onclick = function () { B.playing = false; showPlay(); for (var i = 0; i < 10; i++) sim.tick && sim.tick(.04); poke(); };
          bar.appendChild(bStep);
        }
        var bSpeed = h('button'); bSpeed.type = 'button'; bSpeed.dataset.key = 'speed';
        var showSpeed = function () { bSpeed.textContent = '⏩ ×' + N(B.speed); bSpeed.setAttribute('aria-label', T({ ar: 'السرعة', en: 'Speed' }) + ' ×' + B.speed); };
        bSpeed.onclick = function () { B.speed = B.speed === 1 ? 2 : B.speed === 2 ? 0.5 : 1; showSpeed(); poke(); };
        showSpeed(); bar.appendChild(bSpeed);
      }
      var bReset = h('button', '', '↺ ' + T({ ar: 'من جديد', en: 'Reset' })); bReset.type = 'button'; bReset.dataset.key = 'reset';
      bReset.onclick = restartItem; bar.appendChild(bReset);
      showPlay();

      /* ── the step / question card ── */
      function dots() { var s = ''; for (var i = 0; i < items.length; i++) s += '<i class="' + (i < B.idx ? 'done' : i === B.idx ? 'cur' : '') + '"></i>'; return s; }
      function enter(i) {
        B.idx = i; B.done = false; var it = items[i]; L.hi(null);
        if (it.pre) it.pre(sim, L);
        if (it.hi) L.hi(it.hi);
        var text = T(mode === 'guided' ? it.t : it.q);
        card.innerHTML = '<div class="st-top"><span class="st-n">' + (mode === 'guided' ? T({ ar: 'الخطوة', en: 'Step' }) : T({ ar: 'السؤال', en: 'Question' })) + ' ' + N(i + 1) + ' / ' + N(items.length) + '</span><div class="st-dots">' + dots() + '</div>' +
          '<button class="st-say" type="button" aria-label="' + T({ ar: 'اقرأ لي', en: 'Read aloud' }) + '">🔊</button></div><p class="st-t">' + esc(text) + '</p><div class="opts"></div><p class="st-after" hidden></p><div class="st-row"></div>';
        var after = card.querySelector('.st-after'), row = card.querySelector('.st-row'), opts = card.querySelector('.opts');
        card.querySelector('.st-say').onclick = function () { speak(text + (after.hidden ? '' : '. ' + after.textContent)); };
        var next = h('button', 'btn gold wide'); next.type = 'button'; next.dataset.key = 'next'; next.disabled = true;
        next.innerHTML = (i === items.length - 1 ? T({ ar: 'أنهِ', en: 'Finish' }) + ' 🎉' : T({ ar: 'التالي', en: 'Next' }) + (lang === 'ar' ? ' ←' : ' →'));
        next.onclick = function () { if (i === items.length - 1) finish(); else enter(i + 1); poke(); };
        B.complete = function (msg) {
          if (B.done) return; B.done = true; next.disabled = false; L.hi(null);
          after.className = 'st-after'; after.hidden = false; after.textContent = '✅ ' + T(msg || it.a || it.why || { ar: 'أحسنت!', en: 'Well done!' });
          showPlay();
        };
        function retry(msg) { after.className = 'st-after no'; after.hidden = false; after.textContent = '🌱 ' + T(msg || it.hint || { ar: 'ليس بعد… انظر جيّدًا وجرِّب مرّة أخرى.', en: 'Not yet… look closely and try again.' }); }
        if (it.opts) {
          it.opts.forEach(function (op, k) {
            var b = h('button', '', esc(T(op))); b.type = 'button'; b.dataset.opt = k;
            b.onclick = function () {
              if (B.done) return;
              if (k === it.ans) { b.classList.add('ok'); B.complete(); }
              else { b.classList.add('no'); b.disabled = true; retry({ ar: 'قريب! فكِّر وجرِّب إجابةً أخرى.', en: 'Close! Think and try another answer.' }); }
            };
            opts.appendChild(b);
          });
        } else if (mode === 'challenge' && !it.auto) {
          var chk = h('button', 'btn wide', '✔ ' + T({ ar: 'تحقَّق', en: 'Check' })); chk.type = 'button'; chk.dataset.key = 'check';
          chk.onclick = function () { if (B.done) return; if (it.ok(sim)) { chk.hidden = true; B.complete(); } else retry(); };
          row.appendChild(chk);
        }
        row.appendChild(next);
        B.poll = (it.ok && (mode === 'guided' || it.auto)) ? it.ok : null;
        showPlay(); B.dirty = true;
      }
      function finish() {
        B.fin = true; B.poll = null; L.hi(null);
        var want = mode === 'guided' ? 2 : 3, got = 0;
        try { if (J()) got = J().earn('lab', def.id + ':' + mode, want); } catch (e) {}
        var other = mode === 'guided' ? 'challenge' : 'explore';
        card.className = 'lab-card fin';
        card.innerHTML = '<div class="big">🎉</div><h2>' + T(mode === 'guided' ? { ar: 'أتممتَ التجربة!', en: 'You finished the experiment!' } : { ar: 'نجحتَ في التحدّي!', en: 'You passed the challenge!' }) + '</h2>' +
          '<p class="stars" data-got="' + got + '">' + (got ? '⭐ +' + N(got) + ' ' + T({ ar: 'نجومٌ جديدة في رحلتك', en: 'new stars on your journey' }) : '⭐ ' + T({ ar: 'نجومُك محفوظة من قبل — ما شاء الله!', en: 'Your stars are already saved — well done!' })) + '</p>' +
          tafakkur(def.ayah) + '<div class="st-row"></div>';
        var row = card.querySelector('.st-row');
        [[other, other === 'challenge' ? { ar: '🎯 جرِّب التحدّي', en: '🎯 Try the challenge' } : { ar: '🔍 استكشف بحرّية', en: '🔍 Explore freely' }, 'btn gold wide']].forEach(function (x) {
          var b = h('button', x[2], T(x[1])); b.type = 'button'; b.dataset.key = 'go-' + x[0]; b.onclick = function () { mode = x[0]; render(); }; row.appendChild(b);
        });
        var a = h('a', 'btn wide', '🧪 ' + T({ ar: 'تجارب أخرى', en: 'More experiments' })); a.href = 'index.html'; row.appendChild(a);
        tabs.querySelectorAll('button').forEach(function (b) { var st = b.dataset.mode === 'explore' ? 0 : earnedStars(def.id, b.dataset.mode); if (st && !b.querySelector('.got')) b.insertAdjacentHTML('beforeend', ' <span class="got">⭐' + N(st) + '</span>'); });
        showPlay();
        try { card.scrollIntoView({ block: 'nearest', behavior: calm() ? 'auto' : 'smooth' }); } catch (e) {}
      }
      if (items) enter(0); else tfk.innerHTML = tafakkur(def.ayah);

      /* ── the loop ── */
      function frame(ts) {
        if (cur !== B) return;
        raf = requestAnimationFrame(frame);
        var dt = Math.min(.05, (ts - last) / 1000 || 0); last = ts;
        var awake = !calm() || ts - B.poked < 9000;          // calm mode: only what the child has just triggered
        if (B.playing && awake) { if (sim.tick) sim.tick(dt * B.speed); B.dirty = true; }
        else if (hasBar && B.playing && !awake) { B.playing = false; showPlay(); }
        if (B.dirty) {
          B.dirty = false; if (sim.draw) sim.draw();
          if (B.poll && !B.done && B.poll(sim)) B.complete();
        }
      }
      B.run = function () { if (raf || document.hidden) return; last = performance.now(); raf = requestAnimationFrame(frame); };
      B.run(); Lab.cur = B;
    }
    /* a hidden tab runs nothing; coming back re-enters the loop of the live build */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; try { speechSynthesis.cancel(); } catch (e) {} }
      else if (cur) { cur.dirty = true; cur.run(); }
    });
    applyLang(); wireLang(render); render();
  }

  /* ═══════════════ the hub ═══════════════ */
  function hub() {
    var host = document.getElementById('lab');
    function render() {
      document.title = T({ ar: 'مختبر الاكتشاف', en: 'Discovery Lab' });
      var total = 0, htm = '';
      SUBJECTS.forEach(function (s) {
        var items = LIST.filter(function (x) { return x.s === s.id; }); if (!items.length) return;
        htm += '<h2 class="hub-sec">' + s.ic + ' ' + esc(T(s)) + '</h2><div class="hub-grid">';
        items.forEach(function (x) {
          var g = earnedStars(x.id, 'guided'), c = earnedStars(x.id, 'challenge'), n = g + c, st = ''; total += n;
          for (var i = 0; i < 5; i++) st += i < n ? '⭐' : '<i>⭐</i>';
          htm += '<a class="hub-card" href="' + x.id + '.html" data-id="' + x.id + '" data-stars="' + n + '" style="--c:' + x.c + '55"><span class="ic">' + x.ic + '</span><span class="tx"><b>' + esc(T(x.t)) + '</b><small>' + esc(T(x.d)) + '</small>' +
            '<span class="sts" aria-label="' + N(n) + ' / ' + N(5) + '">' + st + '</span></span></a>';
        });
        htm += '</div>';
      });
      host.innerHTML = '<div class="hub-hero"><h1>🧪 ' + T({ ar: 'مختبر الاكتشاف', en: 'Discovery Lab' }) + '</h1><p>' +
        T({ ar: 'هنا لا نقرأ العلم فقط… بل نجرّبه بأيدينا! اختر تجربة، حرِّك واسحب وغيِّر، وشاهد ماذا يحدث.', en: 'Here we don\'t just read science… we try it with our own hands! Pick an experiment, drag, slide and change things, and see what happens.' }) +
        '</p><div class="hub-total" data-total="' + total + '">⭐ ' + T({ ar: 'نجوم المختبر:', en: 'Lab stars:' }) + ' ' + N(total) + ' / ' + N(LIST.length * 5) + '</div></div>' + htm;
    }
    applyLang(); wireLang(render); render();
    window.addEventListener('pageshow', function (e) { if (e.persisted) render(); });
  }

  window.Lab = { start: start, hub: hub, LIST: LIST, SUBJECTS: SUBJECTS, T: T, N: N, cur: null };
})();
