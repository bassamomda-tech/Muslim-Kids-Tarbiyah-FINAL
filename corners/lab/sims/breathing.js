/* breathing.js — التنفّس: pull the diaphragm down → the lungs get bigger → air (O₂) comes in;
   let it go up → the lungs get smaller → air with CO₂ goes out. */
(function () {
  var pct = function (v) { return { ar: Lab.N(Math.round(v)) + '٪', en: Math.round(v) + '%' }; };
  Lab.start({
    id: 'breathing', view: [360, 320], bar: { step: false },
    title: { ar: 'التنفُّس', en: 'Breathing' },
    sub: { ar: 'حرِّك الحجاب الحاجز واملأ الرئتين بالهواء.', en: 'Move the diaphragm and fill the lungs with air.' },
    ayah: { text: '﴿لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ﴾', ref: { ar: '[التين: ٤]', en: '[At-Tin: 4]' }, mean: 'We have certainly created man in the best form.',
      wonder: { ar: 'أنت تتنفَّس آلاف المرّات كلَّ يوم دون أن تعدَّها أو تتعب… كلُّ نَفَسٍ نعمةٌ من الله تستحقّ: الحمد لله!', en: 'You breathe thousands of times every day without counting or getting tired… every breath is a gift from Allah that deserves: Alhamdulillah!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { v: 0, vis: 0, auto: false, ph: 0, breaths: 0, top: false, parts: [], seen: 0 };
      S('rect', { width: 360, height: 320, fill: '#12324F' }, svg);
      S('path', { d: 'M150,0 h60 v34 c52,8 86,30 86,70 v216 h-232 v-216 c0,-40 34,-62 86,-70Z', fill: '#F1D3B5', stroke: '#D9B38C', 'stroke-width': 2 }, svg);
      S('path', { d: 'M180,0 V112 M180,112 Q160,118 148,134 M180,112 Q200,118 212,134', fill: 'none', stroke: '#BFE3F7', 'stroke-width': 13, 'stroke-linecap': 'round' }, svg);
      for (var i = 0; i < 6; i++) S('path', { d: 'M173,' + (12 + i * 16) + ' h14', stroke: '#8FC3E0', 'stroke-width': 2 }, svg);
      var lungL = S('path', { d: 'M-8,-62 C-40,-56 -60,-10 -58,40 C-56,62 -20,64 -4,50 C4,20 4,-30 -8,-62Z', fill: '#F2A7B8', stroke: '#D97F96', 'stroke-width': 2 }, svg);
      var lungR = S('path', { d: 'M8,-62 C40,-56 60,-10 58,40 C56,62 20,64 4,50 C-4,20 -4,-30 8,-62Z', fill: '#F2A7B8', stroke: '#D97F96', 'stroke-width': 2 }, svg);
      var dia = S('path', { fill: '#C96A5A', stroke: '#9C4A3D', 'stroke-width': 2 }, svg);
      var pg = L.g(), pool = []; for (i = 0; i < 16; i++) { var g = L.g({ opacity: 0 }, pg); S('circle', { r: 8.5 }, g); L.text(0, 3.2, '', { 'font-size': 8, fill: '#fff' }, g); pool.push(g); }
      var handle = L.g(); S('circle', { r: 22, fill: '#E8B530', stroke: '#fff', 'stroke-width': 3 }, handle); L.text(0, 6, '↕', { 'font-size': 20, fill: '#10243d' }, handle);
      var lDia = L.text(300, 0, { ar: 'الحجاب الحاجز', en: 'Diaphragm' }, { 'font-size': 11, stroke: '#12324F', 'stroke-width': 3, 'paint-order': 'stroke' });
      L.text(64, 150, { ar: 'رئة', en: 'Lung' }, { 'font-size': 11, stroke: '#12324F', 'stroke-width': 3, 'paint-order': 'stroke' }); L.text(292, 20, { ar: 'القصبة الهوائيّة', en: 'Windpipe' }, { 'font-size': 11, 'text-anchor': 'middle', stroke: '#12324F', 'stroke-width': 3, 'paint-order': 'stroke' });
      var msg = L.text(74, 20, '', { 'font-size': 11.5, fill: '#FFE27A', stroke: '#12324F', 'stroke-width': 4, 'paint-order': 'stroke' });
      function setV(v) { s.v = L.clamp(v, 0, 1); }
      L.drag(handle, { move: function (pt) { if (s.auto) return; setV((pt.y - 232) / 46); L.ctl.dia.input.value = Math.round(s.v * 100); L.ctl.dia.input.dispatchEvent(new Event('input')); } });
      handle.setAttribute('tabindex', '0'); handle.setAttribute('aria-label', L.T({ ar: 'الحجاب الحاجز: اسحبه إلى أسفل وأعلى', en: 'Diaphragm: drag it down and up' }));
      handle.addEventListener('keydown', function (e) { var d = e.key === 'ArrowDown' ? 10 : e.key === 'ArrowUp' ? -10 : 0; if (d) { e.preventDefault(); L.ctl.dia.set(L.clamp(Math.round(s.v * 100) + d, 0, 100)); L.poke(); } });
      var oV = L.out({ ar: '🫁 الهواء في الرئتين', en: '🫁 Air in the lungs' }), oN = L.out({ ar: '🔢 أنفاس كاملة', en: '🔢 Full breaths' });
      L.slider({ key: 'dia', label: { ar: '↕ الحجاب الحاجز (اسحبه إلى أسفل)', en: '↕ Diaphragm (pull it down)' }, min: 0, max: 100, step: 5, val: 0, fmt: function (v) { return v >= 60 ? { ar: 'شهيق ⬇', en: 'Breathing in ⬇' } : v <= 40 ? { ar: 'زفير ⬆', en: 'Breathing out ⬆' } : { ar: '…', en: '…' }; }, on: function (v) { if (!s.auto) setV(v / 100); } });
      L.toggle({ key: 'auto', label: { ar: '🔁 تنفُّس تلقائي', en: '🔁 Breathe by itself' }, labelOn: { ar: '🔁 يتنفَّس وحده', en: '🔁 Breathing by itself' }, val: false, on: function (v) { s.auto = v; s.ph = Math.asin(L.clamp(s.v * 2 - 1, -1, 1)); } });
      s.reset = function () { s.v = s.vis = 0; s.breaths = 0; s.top = false; s.parts = []; L.ctl.auto.set(false); L.ctl.dia.set(0); L.poke(); };
      s.tick = function (dt) {
        if (s.auto) { s.ph += dt * 2.1; s.v = (Math.sin(s.ph) + 1) / 2; L.ctl.dia.input.value = Math.round(s.v * 100); }
        s.vis += (s.v - s.vis) * Math.min(1, dt * 9);
        if (s.v >= .85) s.top = true; if (s.top && s.v <= .15) { s.top = false; s.breaths++; }
        var want = Math.round(s.v * 12), have = 0, i, p; s.parts.forEach(function (p) { if (p.st !== 2) have++; });
        if (have < want && s.parts.length < 16) { var sd = Math.random() < .5 ? -1 : 1; s.parts.push({ st: 0, t: 0, age: -Math.random() * 3, tx: 180 + sd * (40 + Math.random() * 44), ty: 110 + Math.random() * 78 }); }
        else if (have > want) { for (i = 0; i < s.parts.length; i++) if (s.parts[i].st === 1) { s.parts[i].st = 2; s.parts[i].used = true; break; } }
        for (i = s.parts.length - 1; i >= 0; i--) { p = s.parts[i];
          if (p.st === 0) { p.t += dt * 1.5; if (p.t >= 1) { p.t = 1; p.st = 1; } } else if (p.st === 1) { p.age += dt; if (p.age > 1.1) p.used = true; } else { p.t -= dt * 1.5; if (p.t <= 0) s.parts.splice(i, 1); } }
      };
      s.draw = function () {
        var v = s.vis, k = .8 + .26 * v, y = 232 + 46 * v, top = y - 44 + 34 * v;
        lungL.setAttribute('transform', 'translate(' + (172 - 4 * v) + ',150) scale(' + k + ')'); lungR.setAttribute('transform', 'translate(' + (188 + 4 * v) + ',150) scale(' + k + ')');
        dia.setAttribute('d', 'M66,' + (y + 14) + ' Q180,' + (2 * top - y - 14) + ' 294,' + (y + 14) + ' v10 Q180,' + (2 * top - y + 2) + ' 66,' + (y + 24) + 'Z');
        var hy = (y + 14 + top) / 2 + 2; handle.setAttribute('transform', 'translate(180,' + hy + ')'); L.set(lDia, { y: Math.min(y + 44, 313), x: v > .6 ? 110 : 180 });
        for (var i = 0; i < 16; i++) { var p = s.parts[i], q = pool[i]; if (!p) { q.setAttribute('opacity', 0); continue; }
          var x, yy; if (p.t < .5) { x = 180; yy = L.lerp(-10, 112, p.t * 2); } else { x = L.lerp(180, p.tx, (p.t - .5) * 2); yy = L.lerp(112, p.ty, (p.t - .5) * 2); }
          L.set(q, { opacity: 1, transform: 'translate(' + x + ',' + yy + ')' }); q.firstChild.setAttribute('fill', p.used ? '#6B7280' : '#1E9BD7'); q.lastChild.textContent = p.used ? 'CO₂' : 'O₂'; }
        var d = s.v - s.seen; s.seen = s.v; if (d > .002) msg.textContent = L.T({ ar: 'شهيق: الهواء يدخل', en: 'Breathing in: air comes in' }); else if (d < -.002) msg.textContent = L.T({ ar: 'زفير: الهواء يخرج', en: 'Breathing out: air goes out' });
        oV(pct(v * 100)); oN(L.N(s.breaths));
      };
      return s;
    },
    guided: [
      { hi: 'dia', pre: function (s) { s.reset(); }, t: { ar: 'اسحب الزرَّ الذهبيّ (الحجاب الحاجز) إلى أسفل، أو حرِّك المؤشّر حتى آخره.', en: 'Drag the golden button (the diaphragm) down, or move the slider all the way.' },
        ok: function (s) { return s.v >= .9; }, a: { ar: 'الحجابُ الحاجز عضلةٌ تحت الرئتين. حين تنزل تتّسع الرئتان فيندفع الهواء إلى الداخل ومعه الأكسجين (O₂). هذا هو الشهيق.', en: 'The diaphragm is a muscle under the lungs. When it moves down the lungs get bigger and air rushes in, bringing oxygen (O₂). This is breathing in.' } },
      { hi: 'dia', t: { ar: 'الآن أعِده إلى أعلى.', en: 'Now let it go back up.' },
        ok: function (s) { return s.v <= .1; }, a: { ar: 'حين ترتخي العضلة وتصعد تصغر الرئتان فيخرج الهواء ومعه ثاني أكسيد الكربون (CO₂) الذي لا يحتاجه الجسم. هذا هو الزفير.', en: 'When the muscle relaxes and moves up, the lungs get smaller and air goes out, carrying carbon dioxide (CO₂) that the body does not need. This is breathing out.' } },
      { pre: function (s) { s.breaths = 0; s.top = false; }, t: { ar: 'خُذ ثلاثة أنفاسٍ كاملة: أسفل ثم أعلى، ثلاث مرّات.', en: 'Take three full breaths: down then up, three times.' },
        ok: function (s) { return s.breaths >= 3; }, a: { ar: 'في الرئتين ينتقل الأكسجين إلى الدم، ويخرج من الدم ثاني أكسيد الكربون. لاحِظ كيف تغيَّر لون الكرات!', en: 'In the lungs oxygen passes into the blood, and carbon dioxide leaves the blood. Notice how the balls changed colour!' } },
      { hi: 'auto', t: { ar: 'اضغط «تنفُّس تلقائي» وراقِب.', en: 'Press "Breathe by itself" and watch.' },
        ok: function (s) { return s.auto; }, a: { ar: 'دماغُك ينظِّم تنفُّسك دون أن تفكِّر: نحو عشرين نَفَسًا في الدقيقة، حتى وأنت نائم.', en: 'Your brain controls your breathing without you thinking: about twenty breaths a minute, even while you sleep.' } }
    ],
    challenge: [
      { pre: function (s) { s.reset(); }, q: { ar: 'املأ الرئتين بالهواء تمامًا، ثم اضغط «تحقَّق».', en: 'Fill the lungs completely with air, then press "Check".' }, ok: function (s) { return s.v >= .95; }, hint: { ar: 'أين يجب أن يكون الحجاب الحاجز لتتّسع الرئتان؟', en: 'Where should the diaphragm be to make the lungs bigger?' }, a: { ar: 'شهيقٌ عميق! الحجاب الحاجز نزل فاتّسعت الرئتان.', en: 'A deep breath in! The diaphragm went down and the lungs got bigger.' } },
      { q: { ar: 'أيَّ غازٍ يأخذه جسمُنا من الهواء؟', en: 'Which gas does our body take from the air?' }, ans: 1, opts: [{ ar: 'ثاني أكسيد الكربون', en: 'Carbon dioxide' }, { ar: 'الأكسجين', en: 'Oxygen' }, { ar: 'الدخان', en: 'Smoke' }], why: { ar: 'نأخذ الأكسجين ونُخرج ثاني أكسيد الكربون.', en: 'We take in oxygen and give out carbon dioxide.' } },
      { q: { ar: 'ماذا يفعل الحجاب الحاجز عند الشهيق؟', en: 'What does the diaphragm do when we breathe in?' }, ans: 0, opts: [{ ar: 'ينزل إلى أسفل', en: 'It moves down' }, { ar: 'يصعد إلى أعلى', en: 'It moves up' }, { ar: 'لا يتحرّك', en: 'It does not move' }], why: { ar: 'ينزل فتتّسع الرئتان.', en: 'It moves down and the lungs get bigger.' } },
      { pre: function (s, L) { L.ctl.auto.set(false); L.ctl.dia.set(100); }, q: { ar: 'الرئتان ممتلئتان. أخرِج الهواء كلَّه (زفير)، ثم اضغط «تحقَّق».', en: 'The lungs are full. Push all the air out (breathe out), then press "Check".' }, ok: function (s) { return s.v <= .05; }, a: { ar: 'زفيرٌ كامل! خرج ثاني أكسيد الكربون.', en: 'A full breath out! The carbon dioxide has gone.' } }
    ]
  });
})();
