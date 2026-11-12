/* day-night.js — الليل والنهار وأطوار القمر. Two scenes, both seen from above the North Pole with the Sun on the left:
   day:  the child spins the Earth; a city on its edge goes through noon, sunset, midnight, sunrise.
   moon: the child drags the Moon round the Earth; the inset shows the phase we would see from Earth. */
(function () {
  var PH = [{ ar: 'مُحاق', en: 'New moon' }, { ar: 'هلال', en: 'Crescent' }, { ar: 'تربيع أوّل', en: 'First quarter' }, { ar: 'أحدب', en: 'Gibbous' }, { ar: 'بدر', en: 'Full moon' }, { ar: 'أحدب', en: 'Gibbous' }, { ar: 'تربيع أخير', en: 'Last quarter' }, { ar: 'هلال آخِر الشهر', en: 'Waning crescent' }];
  function part(h) { return h >= 4.5 && h < 6.5 ? { ar: '🌅 فجر وشروق', en: '🌅 Dawn' } : h >= 6.5 && h < 11 ? { ar: '🌤️ صباح', en: '🌤️ Morning' } : h >= 11 && h < 13.5 ? { ar: '☀️ ظُهر', en: '☀️ Midday' } : h >= 13.5 && h < 17 ? { ar: '🌤️ عصر', en: '🌤️ Afternoon' } : h >= 17 && h < 19 ? { ar: '🌇 غروب', en: '🌇 Sunset' } : { ar: '🌙 ليل', en: '🌙 Night' }; }
  Lab.start({
    id: 'day-night', view: [360, 290],
    title: { ar: 'الليل والنهار وأطوار القمر', en: 'Day, night & the Moon\'s phases' },
    sub: { ar: 'أدِر الأرض، وحرِّك القمر حولها.', en: 'Spin the Earth, and move the Moon around it.' },
    ayah: { text: '﴿وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ﴾', ref: { ar: '[يس: ٣٩]', en: '[Ya-Sin: 39]' }, mean: 'And the moon — We have set phases for it, until it returns like an old, curved date-stalk.',
      wonder: { ar: 'شمسٌ وأرضٌ وقمر، كلٌّ يجري في مساره بدقّةٍ عجيبة، فنعرف بها الأيّام والشهور ومواقيت الصلاة ورمضان والعيد… سبحان الله!', en: 'Sun, Earth and Moon — each runs on its path with amazing precision, and by them we know the days, the months, the prayer times, Ramadan and Eid… SubhanAllah!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { scene: 'day', hour: 6, phi: 90, turned: 0 }, i;
      S('rect', { width: 360, height: 290, fill: '#081526' }, svg);
      [[30, 250], [80, 30], [140, 270], [210, 22], [250, 262], [300, 60], [340, 200], [120, 60], [330, 130], [60, 120]].forEach(function (p) { S('circle', { cx: p[0], cy: p[1], r: 1.2, fill: '#fff', opacity: .7 }, svg); });
      var sunG = L.g(); for (i = 0; i < 7; i++) S('path', { d: 'M16,' + (55 + i * 30) + ' H86', stroke: '#FFE27A', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: .45, 'stroke-dasharray': '10 7' }, sunG);
      S('circle', { cx: -34, cy: 145, r: 70, fill: '#FFD23F', stroke: '#FFB000', 'stroke-width': 3 }, sunG); L.text(20, 150, { ar: 'الشمس', en: 'Sun' }, { 'font-size': 12, fill: '#6B4A00', transform: 'rotate(-90 20 150)' }, sunG);
      var root = L.g(), E = {};
      function earth(g, r) { S('circle', { r: r, fill: '#2B7FD9' }, g); S('path', { d: 'M' + -r * .5 + ',' + -r * .3 + ' q' + r * .3 + ',' + -r * .3 + ' ' + r * .5 + ',' + -r * .1 + ' q' + r * .1 + ',' + r * .3 + ' ' + -r * .2 + ',' + r * .4 + ' q' + -r * .3 + ',' + r * .1 + ' ' + -r * .3 + ',' + -r * .3 + 'Z M' + r * .1 + ',' + r * .3 + ' q' + r * .3 + ',' + -r * .1 + ' ' + r * .4 + ',' + r * .2 + ' q' + -r * .2 + ',' + r * .3 + ' ' + -r * .4 + ',' + -r * .2 + 'Z', fill: '#4CB36B' }, g); }
      function build() {
        while (root.firstChild) root.removeChild(root.firstChild); E = {};
        if (s.scene === 'day') {
          var cx = 200, cy = 150, R = 78;
          E.spin = L.g({}, root); earth(E.spin, R);
          E.pin = L.g(null, E.spin); S('path', { d: 'M' + (-R - 15) + ',-9 h15 v18 h-15Z M' + (-R - 23) + ',-5 h8 v10 h-8Z', fill: '#FFF', stroke: '#10243d', 'stroke-width': 1.2 }, E.pin); S('circle', { cx: -R - 23, cy: 0, r: 4, fill: '#E8B530' }, E.pin);
          S('path', { d: 'M' + cx + ',' + (cy - R) + ' A' + R + ',' + R + ' 0 0 1 ' + cx + ',' + (cy + R) + 'Z', fill: '#040B18', opacity: .72, 'pointer-events': 'none' }, root);
          S('circle', { cx: cx, cy: cy, r: R, fill: 'none', stroke: '#BFE3F7', 'stroke-width': 1.5 }, root);
          L.text(cx - R / 2, cy + R + 16, { ar: 'نهار', en: 'Day' }, { 'font-size': 12, fill: '#FFE27A' }, root); L.text(cx + R / 2, cy + R + 16, { ar: 'ليل', en: 'Night' }, { 'font-size': 12, fill: '#9CC4FF' }, root);
          S('path', { d: 'M' + (cx + 20) + ',' + (cy - R - 24) + ' a' + (R + 22) + ',' + (R + 22) + ' 0 0 0 -52,10 m0,0 l11,-1 m-11,1 l5,-10', fill: 'none', stroke: '#fff', 'stroke-width': 2, 'stroke-linecap': 'round', opacity: .8 }, root);
          E.sky = L.g({ transform: 'translate(292,10)' }, root); E.skyBg = S('rect', { width: 60, height: 60, rx: 9, stroke: '#E8B530', 'stroke-width': 1.5 }, E.sky); E.skySun = S('circle', { r: 8, fill: '#FFD23F' }, E.sky); E.skyStars = L.text(30, 26, '✦ ✦', { 'font-size': 11 }, E.sky); S('path', { d: 'M1,46 h58 v6 a8,8 0 0 1 -8,8 h-42 a8,8 0 0 1 -8,-8Z', fill: '#2E7D4F' }, E.sky); S('path', { d: 'M22,46 v-10 a8,8 0 0 1 16,0 v10Z M42,46 v-20 h4 v20Z', fill: '#F4EBD0' }, E.sky);
          L.text(322, 84, { ar: 'سماء المدينة', en: 'City sky' }, { 'font-size': 10 }, root);
          var grab = S('circle', { cx: cx, cy: cy, r: R + 22, fill: 'transparent' }, root), a0 = 0, h0 = 0;
          L.drag(grab, { start: function (p) { a0 = Math.atan2(p.y - cy, p.x - cx); h0 = s.hour; }, move: function (p) { var a = Math.atan2(p.y - cy, p.x - cx), d = a - a0; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; var nh = ((h0 - d * 12 / Math.PI) % 24 + 24) % 24; a0 = a; h0 = nh; L.ctl.hour.set(Math.round(nh * 2) / 2); s.hour = nh; } });
          E.cx = cx; E.cy = cy;
        } else {
          var ex = 196, ey = 150, RO = 92;
          S('circle', { cx: ex, cy: ey, r: RO, fill: 'none', stroke: 'rgba(255,255,255,.35)', 'stroke-width': 1.2, 'stroke-dasharray': '4 5' }, root);
          var eg = L.g({ transform: 'translate(' + ex + ',' + ey + ')' }, root); earth(eg, 26); S('path', { d: 'M0,-26 A26,26 0 0 1 0,26Z', fill: '#040B18', opacity: .7 }, eg); L.text(ex, ey + 42, { ar: 'الأرض', en: 'Earth' }, { 'font-size': 11 }, root);
          E.moon = L.g(null, root); S('circle', { r: 30, fill: 'transparent' }, E.moon); S('circle', { r: 14, fill: '#3A4250' }, E.moon); S('path', { d: 'M0,-14 A14,14 0 0 0 0,14Z', fill: '#F4F1E4' }, E.moon); S('circle', { r: 14, fill: 'none', stroke: '#E8B530', 'stroke-width': 2 }, E.moon);
          L.drag(E.moon, { move: function (p) { var a = Math.atan2(p.y - ey, -(p.x - ex)) * 180 / Math.PI; a = (Math.round(a / 3) * 3 + 360) % 360; L.ctl.phi.set(a); } });
          E.moon.setAttribute('tabindex', '0'); E.moon.setAttribute('aria-label', L.T({ ar: 'القمر: اسحبه حول الأرض', en: 'The Moon: drag it around the Earth' }));
          E.moon.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 6 : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -6 : 0; if (d) { e.preventDefault(); L.ctl.phi.set((s.phi + d + 360) % 360); L.poke(); } });
          E.inset = L.g({ transform: 'translate(310,46)' }, root); S('rect', { x: -38, y: -38, width: 76, height: 76, rx: 10, fill: '#040B18', stroke: '#E8B530', 'stroke-width': 1.5 }, E.inset); S('circle', { r: 26, fill: '#2A313D' }, E.inset); E.lit = S('path', { fill: '#F4F1E4' }, E.inset);
          L.text(310, 98, { ar: 'كما نراه من الأرض', en: 'Seen from Earth' }, { 'font-size': 10 }, root);
          E.ex = ex; E.ey = ey; E.RO = RO;
        }
      }
      var cScene = L.choice({ key: 'scene', opts: [{ v: 'day', label: { ar: '🌍 الليل والنهار', en: '🌍 Day & night' } }, { v: 'moon', label: { ar: '🌙 أطوار القمر', en: '🌙 Moon phases' } }], val: 'day', on: function (v) { s.scene = v; show(); } });
      var cH = L.slider({ key: 'hour', label: { ar: '🌍 دوران الأرض (الساعة في المدينة)', en: '🌍 Earth\'s spin (time in the city)' }, min: 0, max: 24, step: .5, val: 6, fmt: function (v) { var h = Math.floor(v) % 24, m = v % 1 ? '30' : '00'; return L.N(h) + ':' + L.N(m); }, on: function (v) { s.turned += Math.abs(v - s.hour) > 12 ? 0 : Math.abs(v - s.hour); s.hour = v % 24; } });
      var cP = L.slider({ key: 'phi', label: { ar: '🌙 مكان القمر في مداره', en: '🌙 The Moon\'s place on its orbit' }, min: 0, max: 357, step: 3, val: 90, fmt: function (v) { return { ar: 'اليوم ' + L.N(Math.floor(v / 360 * 29.5) + 1) + ' من الشهر', en: 'Day ' + (Math.floor(v / 360 * 29.5) + 1) + ' of the month' }; }, on: function (v) { s.phi = v; } });
      var o1 = L.out(''), o2 = L.out('');
      function show() { build(); o1.label(s.scene === 'day' ? { ar: '🕐 الساعة في المدينة', en: '🕐 Time in the city' } : { ar: '🌙 طور القمر', en: '🌙 Moon phase' }); o2.label(s.scene === 'day' ? { ar: 'الوقت', en: 'Part of the day' } : { ar: 'ما نراه مضيئًا', en: 'How much we see lit' }); cH.row.hidden = s.scene !== 'day'; cP.row.hidden = s.scene !== 'moon'; L.poke(); }
      s.go = function (sc) { cScene.set(sc); };
      s.reset = function () { cH.set(6); cP.set(90); s.turned = 0; show(); };
      s.phase = function () { var p = s.phi; return p < 8 || p > 352 ? 0 : p < 80 ? 1 : p <= 100 ? 2 : p < 170 ? 3 : p <= 190 ? 4 : p < 260 ? 5 : p <= 280 ? 6 : 7; };
      s.tick = function () {};
      s.draw = function () {
        if (s.scene === 'day') {
          var h = s.hour, ang = -(h - 12) * 15;       /* the Earth turns anticlockwise seen from above the north */
          E.spin.setAttribute('transform', 'translate(' + E.cx + ',' + E.cy + ') rotate(' + ang + ')');
          var up = Math.cos((h - 12) * Math.PI / 12), day = L.clamp(up * 3 + .5, 0, 1);
          E.skyBg.setAttribute('fill', Math.abs(up) < .18 ? L.mix('#F08A4B', '#7EC8F2', L.clamp(up * 4 + .5, 0, 1)) : L.mix('#0B1B3A', '#7EC8F2', day));
          L.set(E.skySun, { cx: 30 + (h - 12) * 4.2, cy: 44 - up * 30, opacity: up > -.12 ? 1 : 0 }); E.skyStars.setAttribute('opacity', up < -.1 ? 1 : 0);
          o1({ ar: L.N(Math.floor(h) % 24) + ':' + L.N(h % 1 ? '30' : '00'), en: (Math.floor(h) % 24) + ':' + (h % 1 ? '30' : '00') }); o2(part(h));
        } else {
          var p = s.phi * Math.PI / 180, mx = E.ex - E.RO * Math.cos(p), my = E.ey + E.RO * Math.sin(p);
          E.moon.setAttribute('transform', 'translate(' + mx + ',' + my + ')');
          var w = s.phi <= 180, q = (w ? s.phi : 360 - s.phi) * Math.PI / 180, rx = Math.abs(Math.cos(q)) * 26, R = 26;
          E.lit.setAttribute('d', s.phi < 4 || s.phi > 356 ? '' : 'M0,' + -R + ' A' + R + ',' + R + ' 0 0 1 0,' + R + ' A' + rx.toFixed(2) + ',' + R + ' 0 0 ' + (q < Math.PI / 2 ? 0 : 1) + ' 0,' + -R + 'Z');
          E.lit.setAttribute('transform', w ? '' : 'scale(-1,1)');
          o1(PH[s.phase()]); o2({ ar: L.N(Math.round((1 - Math.cos(p)) / 2 * 100)) + '٪', en: Math.round((1 - Math.cos(p)) / 2 * 100) + '%' });
        }
      };
      show(); return s;
    },
    guided: [
      { hi: 'hour', pre: function (s) { s.go('day'); s.reset(); }, t: { ar: 'هذه الأرض من فوق، والبيتُ الأبيض مدينتُنا. أدِر الأرض (اسحبها أو حرِّك المؤشّر) حتى تواجه المدينةُ الشمس.', en: 'This is the Earth from above, and the white house is our city. Spin the Earth (drag it or use the slider) until the city faces the Sun.' },
        ok: function (s) { return s.hour >= 11.5 && s.hour <= 12.5; }, a: { ar: 'المدينةُ الآن في وسط الجهة المضيئة: إنّه الظُّهر، والشمسُ في أعلى السماء.', en: 'The city is now in the middle of the lit side: it is midday, and the Sun is high in the sky.' } },
      { hi: 'hour', t: { ar: 'واصِل تدوير الأرض حتى تدخل المدينةُ في الجهة المظلمة.', en: 'Keep spinning the Earth until the city moves into the dark side.' },
        ok: function (s) { return s.hour >= 20 || s.hour <= 3; }, a: { ar: 'حلَّ الليل! الشمسُ لم تنطفئ ولم تذهب؛ أرضُنا هي التي دارت. تدور الأرضُ حول نفسها دورةً كلَّ ٢٤ ساعة.', en: 'Night has come! The Sun did not switch off or go away; our Earth turned. The Earth spins round once every 24 hours.' } },
      { hi: 'phi', pre: function (s) { s.go('moon'); s.reset(); }, t: { ar: 'الآن القمر! اسحبه حول الأرض حتى ترى في المربَّع قمرًا كاملًا (بدرًا).', en: 'Now the Moon! Drag it round the Earth until the box shows a full moon.' },
        ok: function (s) { return s.phase() === 4; }, a: { ar: 'القمرُ لا يضيء بنفسه؛ هو يعكس ضوء الشمس. نصفُه مضيءٌ دائمًا، ونحن نرى من هذا النصف جزءًا يتغيّر بحسب مكان القمر.', en: 'The Moon has no light of its own; it reflects sunlight. Half of it is always lit, and how much of that half we see depends on where the Moon is.' } },
      { hi: 'phi', t: { ar: 'اسحب القمر حتى يصير هلالًا رفيعًا في أوّل الشهر.', en: 'Drag the Moon until it is a thin crescent at the start of the month.' },
        ok: function (s) { return s.phi >= 12 && s.phi <= 54; }, a: { ar: 'هذا هلالُ أوّل الشهر الهجريّ: به يبدأ رمضان، وبه يأتي العيد!', en: 'This is the crescent that begins the Hijri month: Ramadan begins with it, and Eid comes with it!' } },
      { hi: 'phi', t: { ar: 'أكمِل الدورة: ضَع القمر بين الأرض والشمس تمامًا.', en: 'Finish the trip: put the Moon exactly between the Earth and the Sun.' },
        ok: function (s) { return s.phase() === 0; }, a: { ar: 'هذا المُحاق: وجهُ القمر المضيء بعيدٌ عنّا فلا نراه. يُتِمّ القمرُ دورتَه في نحو ٢٩ يومًا ونصف — وهذا هو الشهر الهجريّ.', en: 'This is the new moon: the lit face is turned away so we cannot see it. The Moon completes its trip in about 29½ days — and that is the Hijri month.' } }
    ],
    challenge: [
      { pre: function (s) { s.go('day'); s.reset(); }, q: { ar: 'اجعل الوقت في المدينة منتصف الليل، ثم اضغط «تحقَّق».', en: 'Make it midnight in the city, then press "Check".' }, ok: function (s) { return s.scene === 'day' && (s.hour >= 23 || s.hour <= 1); }, hint: { ar: 'منتصف الليل حين تكون المدينة في أبعد نقطةٍ عن الشمس.', en: 'It is midnight when the city is at the point farthest from the Sun.' }, a: { ar: 'منتصف الليل: المدينةُ في وسط الجهة المظلمة.', en: 'Midnight: the city is in the middle of the dark side.' } },
      { q: { ar: 'لماذا يأتي الليلُ بعد النهار؟', en: 'Why does night come after day?' }, ans: 1, opts: [{ ar: 'لأنّ الشمس تنطفئ', en: 'Because the Sun switches off' }, { ar: 'لأنّ الأرض تدور حول نفسها', en: 'Because the Earth spins' }, { ar: 'لأنّ القمر يغطّي الشمس', en: 'Because the Moon covers the Sun' }], why: { ar: 'الأرض تدور فيتعاقب الليل والنهار.', en: 'The Earth spins, so day and night follow each other.' } },
      { pre: function (s) { s.go('moon'); s.reset(); }, q: { ar: 'ضَع القمر حيث نراه بدرًا، ثم اضغط «تحقَّق».', en: 'Put the Moon where we see it full, then press "Check".' }, ok: function (s) { return s.scene === 'moon' && s.phase() === 4; }, hint: { ar: 'نرى البدر حين تكون الأرض بين الشمس والقمر.', en: 'We see a full moon when the Earth is between the Sun and the Moon.' }, a: { ar: 'بدرٌ كامل! الأرضُ بين الشمس والقمر.', en: 'A full moon! The Earth is between the Sun and the Moon.' } },
      { q: { ar: 'من أين يأتي ضوءُ القمر؟', en: 'Where does the Moon\'s light come from?' }, ans: 0, opts: [{ ar: 'يعكس ضوءَ الشمس', en: 'It reflects the Sun\'s light' }, { ar: 'من نارٍ في داخله', en: 'From a fire inside it' }, { ar: 'من الأرض', en: 'From the Earth' }], why: { ar: 'القمر كالمرآة لضوء الشمس.', en: 'The Moon is like a mirror for sunlight.' } },
      { q: { ar: 'اصنع «التربيع الأوّل»: نصفُ قرص القمر مضيء، ثم اضغط «تحقَّق».', en: 'Make the "first quarter": half of the Moon\'s disc lit, then press "Check".' }, ok: function (s) { return s.scene === 'moon' && s.phase() === 2; }, hint: { ar: 'هو رُبع الطريق بعد المُحاق.', en: 'It is a quarter of the way round after the new moon.' }, a: { ar: 'تربيعٌ أوّل: مضى نحو أسبوعٍ من الشهر.', en: 'First quarter: about a week of the month has passed.' } }
    ]
  });
})();
