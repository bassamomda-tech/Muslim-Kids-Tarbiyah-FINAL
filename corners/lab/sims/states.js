/* states.js — حالات المادّة: one beaker of water particles. The temperature slider decides how they move:
   below 0° they sit in ordered places and only shake (ice), 0–100° they slide past each other (water),
   above 100° they fly apart and fill the whole jar (steam). */
(function () {
  var NAME = [{ ar: '🧊 صلب (جليد)', en: '🧊 Solid (ice)' }, { ar: '💧 سائل (ماء)', en: '💧 Liquid (water)' }, { ar: '♨️ غاز (بخار)', en: '♨️ Gas (steam)' }];
  var deg = function (v) { return { ar: Lab.N(Math.round(v)) + '°م', en: Math.round(v) + '°C' }; };
  Lab.start({
    id: 'states', view: [360, 300], bar: { step: true },
    title: { ar: 'حالات المادّة', en: 'States of matter' },
    sub: { ar: 'سخِّن وبرِّد، وراقِب جُسيمات الماء.', en: 'Heat and cool, and watch the water particles.' },
    ayah: { text: '﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾', ref: { ar: '[الأنبياء: ٣٠]', en: '[Al-Anbiya: 30]' }, mean: 'And We made every living thing from water.',
      wonder: { ar: 'ماءٌ واحد: يجمد جليدًا، ويجري ماءً، ويطير بخارًا… وبه جعل الله الحياة في كلّ حيّ. فسبحان الله!', en: 'One water: it freezes into ice, flows as liquid and flies as steam… and with it Allah gave life to every living thing. SubhanAllah!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, N = 30, X0 = 96, X1 = 264, Y0 = 46, Y1 = 250, s = { target: -20, T: -20, ps: [], st: 0 };
      S('rect', { width: 360, height: 300, fill: '#12324F' }, svg);
      var glow = S('rect', { x: X0 - 8, y: Y1 + 12, width: X1 - X0 + 16, height: 16, rx: 8, fill: '#3F7FD9' }, svg), glowT = L.text(180, 286, '', { 'font-size': 12 });
      S('rect', { x: X0 - 8, y: Y0 - 8, width: X1 - X0 + 16, height: Y1 - Y0 + 16, rx: 14, fill: 'rgba(255,255,255,.07)', stroke: '#BFE3F7', 'stroke-width': 3 }, svg);
      S('rect', { x: X0 - 14, y: Y0 - 16, width: X1 - X0 + 28, height: 10, rx: 5, fill: '#8B5A2B' }, svg);
      var els = []; for (var i = 0; i < N; i++) { var c = i % 6, r = Math.floor(i / 6), hx = 180 + (c - 2.5) * 22 + (r % 2 ? 5 : -5), hy = Y1 - 12 - r * 20; s.ps.push({ x: hx, y: hy, vx: 0, vy: 0, hx: hx, hy: hy }); els.push(S('circle', { r: 8, stroke: '#fff', 'stroke-width': 1 }, svg)); }
      /* thermometer */
      S('rect', { x: 318, y: 40, width: 14, height: 200, rx: 7, fill: '#fff', opacity: .9 }, svg); var merc = S('rect', { x: 321, width: 8, rx: 4, fill: '#E0364F' }, svg); S('circle', { cx: 325, cy: 246, r: 13, fill: '#E0364F', stroke: '#fff', 'stroke-width': 2 }, svg);
      function ty(t) { return 232 - (t + 20) / 140 * 186; }
      [[0, '0'], [100, '100']].forEach(function (m) { S('path', { d: 'M306,' + ty(m[0]) + ' h12', stroke: '#fff', 'stroke-width': 2 }, svg); L.text(294, ty(m[0]) + 4, L.N(m[1]) + '°', { 'font-size': 11 }); });
      var stT = L.text(180, 24, '', { 'font-size': 15, fill: '#FFE27A' }), note = L.text(46, 150, '', { 'font-size': 11 });
      var oT = L.out({ ar: '🌡️ الحرارة', en: '🌡️ Temperature' }), oS = L.out({ ar: 'الحالة', en: 'State' }), oM = L.out({ ar: 'حركة الجُسيمات', en: 'Particle motion' });
      L.slider({ key: 'temp', label: { ar: '🌡️ الحرارة', en: '🌡️ Temperature' }, min: -20, max: 120, step: 5, val: -20, fmt: deg, on: function (v) { s.target = v; } });
      s.setT = function (t) { L.ctl.temp.set(t); s.T = t; };
      s.reset = function () { s.setT(-20); s.ps.forEach(function (p) { p.x = p.hx; p.y = p.hy; p.vx = p.vy = 0; }); L.poke(); };
      s.tick = function (dt) {
        var d = s.target - s.T; s.T += L.clamp(d, -22 * dt, 22 * dt);
        var T = s.T, st = T < 0 ? 0 : T < 100 ? 1 : 2, sp = st === 0 ? 10 + (T + 20) * 1.2 : st === 1 ? 34 + T * .55 : 150 + (T - 100) * 3, i, j, p, q; s.st = st;
        for (i = 0; i < N; i++) { p = s.ps[i];
          p.vx += (Math.random() - .5) * sp * 14 * dt; p.vy += (Math.random() - .5) * sp * 14 * dt;
          if (st === 0) { p.vx += (p.hx - p.x) * 60 * dt; p.vy += (p.hy - p.y) * 60 * dt; p.vx *= .86; p.vy *= .86; }
          else if (st === 1) { p.vy += 260 * dt; p.vx *= .97; p.vy *= .97; }
          var v = Math.hypot(p.vx, p.vy); if (v > sp) { p.vx *= sp / v; p.vy *= sp / v; } }
        if (st > 0) for (i = 0; i < N; i++) for (j = i + 1; j < N; j++) { p = s.ps[i]; q = s.ps[j]; var dx = q.x - p.x, dy = q.y - p.y, dd = dx * dx + dy * dy; if (dd < 289 && dd > .01) { var r = Math.sqrt(dd), f = (17 - r) / r * .5; p.x -= dx * f; p.y -= dy * f; q.x += dx * f; q.y += dy * f; if (st === 2) { var t = p.vx; p.vx = q.vx; q.vx = t; t = p.vy; p.vy = q.vy; q.vy = t; } } }
        for (i = 0; i < N; i++) { p = s.ps[i]; p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.x < X0 + 8) { p.x = X0 + 8; p.vx = Math.abs(p.vx); } if (p.x > X1 - 8) { p.x = X1 - 8; p.vx = -Math.abs(p.vx); }
          if (p.y < Y0 + 8) { p.y = Y0 + 8; p.vy = Math.abs(p.vy); } if (p.y > Y1 - 8) { p.y = Y1 - 8; p.vy = -Math.abs(p.vy) * (st === 1 ? .3 : 1); } }
      };
      s.draw = function () {
        var T = s.T, st = T < 0 ? 0 : T < 100 ? 1 : 2, col = st === 0 ? '#BFE9FF' : st === 1 ? '#2F8FE0' : '#E7F0F7';
        for (var i = 0; i < N; i++) L.set(els[i], { cx: s.ps[i].x, cy: s.ps[i].y, fill: col, opacity: st === 2 ? .85 : 1 });
        var y = ty(T); L.set(merc, { y: y, height: 240 - y });
        var heat = s.target > T + 1 ? 1 : s.target < T - 1 ? -1 : 0; glow.setAttribute('fill', heat > 0 ? '#F2762E' : heat < 0 ? '#5CB8FF' : '#3A5674');
        glowT.textContent = L.T(heat > 0 ? { ar: '🔥 تسخين', en: '🔥 Heating' } : heat < 0 ? { ar: '❄️ تبريد', en: '❄️ Cooling' } : '');
        stT.textContent = L.T(NAME[st]);
        note.textContent = L.T(Math.abs(T) < 4 ? { ar: 'انصهار / تجمُّد', en: 'Melting / freezing' } : Math.abs(T - 100) < 4 ? { ar: 'غليان / تكاثُف', en: 'Boiling / condensing' } : '');
        oT(deg(T)); oS(NAME[st]); oM([{ ar: 'تهتزّ في مكانها', en: 'Shaking in place' }, { ar: 'تنزلق وتتدحرج', en: 'Sliding around' }, { ar: 'تطير بسرعة', en: 'Flying fast' }][st]);
      };
      return s;
    },
    guided: [
      { hi: 'temp', pre: function (s) { s.reset(); }, t: { ar: 'هذا جليد: جُسيماتُه مرتَّبة وتهتزّ في أماكنها. ارفع الحرارة فوق الصفر.', en: 'This is ice: its particles are in neat places and only shake. Raise the temperature above zero.' },
        ok: function (s) { return s.T > 8; }, a: { ar: 'انصهر الجليد! صارت الجُسيمات حرّةً تنزلق فوق بعضها، فصار الماء سائلًا يأخذ شكل الإناء.', en: 'The ice melted! The particles are free to slide over each other, so the water is a liquid that takes the shape of its jar.' } },
      { hi: 'temp', t: { ar: 'واصِل التسخين حتى مئة درجة أو أكثر.', en: 'Keep heating to one hundred degrees or more.' },
        ok: function (s) { return s.T >= 102; }, a: { ar: 'غلى الماء وصار بخارًا! الجُسيمات الآن سريعةٌ جدًّا ومتباعدة، تملأ الإناء كلَّه.', en: 'The water boiled into steam! The particles are now very fast and far apart, filling the whole jar.' } },
      { hi: 'temp', t: { ar: 'الآن برِّد: أنزِل الحرارة إلى ما بين الصفر والمئة.', en: 'Now cool it: bring the temperature down between zero and one hundred.' },
        ok: function (s) { return s.T < 92 && s.T > 0 && s.target < 100; }, a: { ar: 'تكاثَف البخار وعاد ماءً سائلًا — كما يحدث على غطاء القِدر، وفي السحاب.', en: 'The steam condensed back into liquid water — just as it does on a pot lid, and in clouds.' } },
      { hi: 'temp', t: { ar: 'أنزِل الحرارة تحت الصفر.', en: 'Bring the temperature below zero.' },
        ok: function (s) { return s.T < -6; }, a: { ar: 'تجمَّد الماء! الجُسيماتُ نفسُها لم تتغيّر ولم ينقص عددها؛ الذي تغيَّر هو حركتُها وترتيبُها فقط.', en: 'The water froze! The particles themselves did not change and none were lost; only their motion and arrangement changed.' } }
    ],
    challenge: [
      { pre: function (s) { s.reset(); }, q: { ar: 'حوِّل الجليد إلى ماءٍ سائل (لا بخار!)، ثم اضغط «تحقَّق».', en: 'Turn the ice into liquid water (not steam!), then press "Check".' }, ok: function (s) { return s.st === 1 && s.target >= 0 && s.target < 100; }, hint: { ar: 'الماء سائلٌ بين الصفر والمئة.', en: 'Water is liquid between zero and one hundred.' }, a: { ar: 'صحيح: بين ٠° و١٠٠° يكون الماء سائلًا.', en: 'Right: between 0° and 100° water is liquid.' } },
      { q: { ar: 'في أيّ حالةٍ تتحرّك الجُسيمات أسرع؟', en: 'In which state do the particles move fastest?' }, ans: 2, opts: [{ ar: 'الصلب', en: 'Solid' }, { ar: 'السائل', en: 'Liquid' }, { ar: 'الغاز', en: 'Gas' }], why: { ar: 'في الغاز تطير الجُسيمات بسرعةٍ كبيرة.', en: 'In a gas the particles fly very fast.' } },
      { q: { ar: 'اصنع بخارًا، ثم اضغط «تحقَّق».', en: 'Make steam, then press "Check".' }, ok: function (s) { return s.st === 2; }, hint: { ar: 'يغلي الماء عند مئة درجة — انتظر حتى ترتفع الحرارة.', en: 'Water boils at one hundred degrees — wait for the temperature to rise.' }, a: { ar: 'بخار! الجُسيمات ملأت الإناء كلَّه.', en: 'Steam! The particles fill the whole jar.' } },
      { q: { ar: 'عند أيّ درجةٍ يتجمّد الماء؟', en: 'At what temperature does water freeze?' }, ans: 0, opts: [{ ar: 'صفر', en: 'Zero' }, { ar: 'خمسين', en: 'Fifty' }, { ar: 'مئة', en: 'One hundred' }], why: { ar: 'يتجمّد الماء عند الصفر المئويّ.', en: 'Water freezes at zero degrees Celsius.' } },
      { q: { ar: 'حين يتجمّد الماء، ماذا يحدث لجُسيماته؟', en: 'When water freezes, what happens to its particles?' }, ans: 1, opts: [{ ar: 'تختفي', en: 'They disappear' }, { ar: 'تبقى كلُّها وتنتظم في أماكنها', en: 'They all stay and line up in place' }, { ar: 'تتحوّل إلى جُسيماتٍ أخرى', en: 'They turn into other particles' }], why: { ar: 'المادّة لا تختفي؛ تتغيّر حالتُها فقط.', en: 'Matter does not disappear; only its state changes.' } }
    ]
  });
})();
