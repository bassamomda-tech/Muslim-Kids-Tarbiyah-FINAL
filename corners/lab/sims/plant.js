/* plant.js — كيف يصنع النبات غذاءه: light + water + air (CO₂) → sugar + oxygen. The plant grows from a seed,
   and wilts when something it needs is missing. */
(function () {
  var pct = function (v) { return { ar: Lab.N(Math.round(v)) + '٪', en: Math.round(v) + '%' }; };
  var STAGES = [{ ar: 'بذرة', en: 'Seed' }, { ar: 'بادرة', en: 'Sprout' }, { ar: 'نبتة صغيرة', en: 'Young plant' }, { ar: 'نبتة كبيرة', en: 'Big plant' }, { ar: 'نبتة مُزهرة 🌸', en: 'Flowering plant 🌸' }];
  Lab.start({
    id: 'plant', view: [360, 290], bar: { step: false },
    title: { ar: 'كيف يصنع النبات غذاءه؟', en: 'How plants make their food' },
    sub: { ar: 'أعطِ النبتة ما تحتاجه وراقبها تكبر.', en: 'Give the plant what it needs and watch it grow.' },
    ayah: { text: '﴿وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ﴾', ref: { ar: '[لقمان: ١٠]', en: '[Luqman: 10]' },
      mean: 'And We sent down water from the sky and made every noble kind of plant grow in it.',
      wonder: { ar: 'سبحان مَن جعل ورقةً خضراء صغيرة تصنع من الضوء والماء والهواء غذاءً لها، وأكسجينًا نتنفَّسه نحن!', en: 'Glory be to the One who made a little green leaf turn light, water and air into food for itself — and oxygen for us to breathe!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { light: 0, water: 0, air: false, g: 0, h: 1, sugar: 0, P: 0, dark: 0, parts: [], acc: 0 };
      S('rect', { width: 360, height: 290, fill: '#BFE6FB' }, svg);
      var shade = S('rect', { width: 360, height: 290, fill: '#12223F', opacity: .6 }, svg);
      var sunG = L.g(), rays = L.g(null, sunG);
      for (var i = 0; i < 5; i++) S('path', { d: 'M62,62 L' + (140 + i * 24) + ',' + (226 - i * 26), stroke: '#FFE27A', 'stroke-width': 9, 'stroke-linecap': 'round', opacity: .35 }, rays);
      S('circle', { cx: 46, cy: 46, r: 24, fill: '#FFD23F', stroke: '#FFB000', 'stroke-width': 2 }, sunG);
      /* window (air) */
      var win = L.g({ transform: 'translate(292,36)' }); S('rect', { x: -2, y: -2, width: 60, height: 74, rx: 5, fill: '#8B5A2B' }, win);
      var pane = S('rect', { x: 3, y: 3, width: 50, height: 64, rx: 2, fill: '#DDF3FF' }, win), winTx = L.text(27, 88, '', { 'font-size': 11.5, fill: '#0B2A47' }, win);
      var breeze = L.g({ opacity: 0 }, win); for (i = 0; i < 3; i++) S('path', { d: 'M-8,' + (16 + i * 18) + ' h-34 m7,-5 l-7,5 l7,5', fill: 'none', stroke: '#fff', 'stroke-width': 2.5, 'stroke-linecap': 'round' }, breeze);
      S('path', { d: 'M0,236 H360 V290 H0Z', fill: '#7A5230' }, svg);
      var wet = S('path', { d: 'M0,236 H360 V290 H0Z', fill: '#3E2A18', opacity: 0 }, svg);
      S('path', { d: 'M0,236 H360', stroke: '#5FAE57', 'stroke-width': 6 }, svg);
      var roots = S('path', { fill: 'none', stroke: '#E8D9B5', 'stroke-width': 2.5, 'stroke-linecap': 'round' }, svg);
      var seed = S('ellipse', { cx: 180, cy: 252, rx: 9, ry: 6, fill: '#5A3A1C', stroke: '#2E1C0C', 'stroke-width': 1.5 }, svg);
      var plant = L.g(), stem = S('path', { fill: 'none', 'stroke-width': 6, 'stroke-linecap': 'round' }, plant), leaves = [], flower = L.g({ opacity: 0 }, plant);
      for (i = 0; i < 6; i++) leaves.push(S('path', { d: 'M0,0 C12,-16 34,-16 46,0 C34,12 12,12 0,0Z', opacity: 0 }, plant));
      for (i = 0; i < 6; i++) S('ellipse', { cx: Math.cos(i * 1.047) * 11, cy: Math.sin(i * 1.047) * 11, rx: 8, ry: 6, fill: '#F27BA8', transform: 'rotate(' + i * 60 + ' ' + Math.cos(i * 1.047) * 11 + ' ' + Math.sin(i * 1.047) * 11 + ')' }, flower);
      S('circle', { r: 7, fill: '#FFD23F' }, flower);
      var pg = L.g(), pool = []; for (i = 0; i < 26; i++) { var g = L.g({ opacity: 0 }, pg); S('circle', { r: 8 }, g); L.text(0, 3.5, '', { 'font-size': 8.5, fill: '#fff' }, g); pool.push(g); }
      var canG = L.g({ opacity: 0 }); L.text(0, 0, '💧💧💧', { 'font-size': 18 }, canG);
      var KIND = { co2: ['#6B7280', 'CO₂'], o2: ['#1E9BD7', 'O₂'], h2o: ['#2563EB', 'H₂O'], sug: ['#D4880A', '🍬'] };
      var oSt = L.out({ ar: '🌱 المرحلة', en: '🌱 Stage' }), oSug = L.out({ ar: '🍬 سكّر صُنع', en: '🍬 Sugar made' }), oH = L.out({ ar: '💚 صحّة النبتة', en: '💚 Plant health' });
      L.slider({ key: 'light', label: { ar: '☀️ الضوء', en: '☀️ Light' }, min: 0, max: 100, step: 5, val: 0, fmt: pct, on: function (v) { s.light = v; } });
      var row = L.row(), canT = 0;
      L.button({ key: 'water', into: row, label: { ar: '💧 اسقِ النبتة', en: '💧 Water the plant' }, on: function () { s.water = Math.min(100, s.water + 34); canT = 1; } });
      L.toggle({ key: 'air', into: row, label: { ar: '🪟 افتح النافذة', en: '🪟 Open the window' }, labelOn: { ar: '🌬️ الهواء يدخل', en: '🌬️ Air is coming in' }, val: false, on: function (v) { s.air = v; } });
      var oW = L.out({ ar: '💧 ماء التربة', en: '💧 Soil water' });
      function top() { return 236 - 172 * Math.max(0, (s.g - .1) / .9); }
      function spawn(kind) { if (s.parts.length >= 26) return; var ty = top() + 20 + Math.random() * 30, side = Math.random() < .5 ? -1 : 1, p = { k: kind, t: 0 };
        if (kind === 'co2') { p.x0 = 300; p.y0 = 60 + Math.random() * 40; p.x1 = 180 + side * 20; p.y1 = ty; }
        else if (kind === 'o2') { p.x0 = 180 + side * 24; p.y0 = ty; p.x1 = 180 + side * (70 + Math.random() * 60); p.y1 = -12; }
        else if (kind === 'h2o') { p.x0 = 180; p.y0 = 262; p.x1 = 180; p.y1 = ty; }
        else { p.x0 = 180 + side * 22; p.y0 = ty; p.x1 = 180; p.y1 = 246; }
        s.parts.push(p); }
      s.reset = function () { s.g = 0; s.h = 1; s.sugar = 0; s.parts = []; s.dark = 0; s.water = 0; L.ctl.light.set(0); L.ctl.air.set(false); L.poke(); };
      s.tick = function (dt) {
        s.water = Math.max(0, s.water - 2.2 * dt); canT = Math.max(0, canT - dt * 1.4);
        var w = Math.min(1, s.water / 25), l = s.light / 100, a = s.air ? 1 : 0;
        if (s.g < .12) { s.P = 0; if (w > .2) s.g += .03 * dt; }            // a seed only needs water (and warmth) to wake up
        else {
          s.P = Math.min(l, w, a);
          s.g = Math.min(1, s.g + s.P * .034 * dt); s.sugar += s.P * 1.2 * dt;
          s.h = L.clamp(s.h + (s.P > .25 ? .16 : w < .1 ? -.05 : -.03) * dt, 0.12, 1);
          s.acc += s.P * 2.6 * dt; while (s.acc >= 1) { s.acc -= 1; spawn(['co2', 'h2o', 'o2', 'sug'][Math.floor(Math.random() * 4)]); }
        }
        s.dark = (s.g >= .12 && s.light <= 10) ? s.dark + dt : 0;
        for (var i = s.parts.length - 1; i >= 0; i--) { s.parts[i].t += dt * .55; if (s.parts[i].t >= 1) s.parts.splice(i, 1); }
      };
      s.draw = function () {
        var l = s.light / 100, i, ty = top(), hh = s.h, green = L.mix('#B9A04A', '#2E9E4F', hh), droop = (1 - hh) * 55;
        shade.setAttribute('opacity', .62 * (1 - l)); rays.setAttribute('opacity', l); sunG.setAttribute('opacity', .25 + .75 * l);
        wet.setAttribute('opacity', Math.min(.75, s.water / 100)); canG.setAttribute('opacity', canT); canG.setAttribute('transform', 'translate(180,' + (228 - canT * 26) + ')');
        pane.setAttribute('fill', s.air ? '#8FD3F4' : '#DDF3FF'); breeze.setAttribute('opacity', s.air ? 1 : 0); winTx.textContent = L.T(s.air ? { ar: 'مفتوحة', en: 'Open' } : { ar: 'مغلقة', en: 'Closed' });
        seed.setAttribute('opacity', s.g < .3 ? 1 : .35);
        var rl = Math.min(1, s.g * 1.6) * 30; roots.setAttribute('d', s.g > .04 ? 'M180,256 q-3,' + rl * .5 + ' -' + rl * .5 + ',' + rl + ' M180,256 q3,' + rl * .5 + ' ' + rl * .6 + ',' + rl * .9 + ' M180,256 v' + rl : '');
        if (s.g > .1) { var bend = (1 - hh) * 26; stem.setAttribute('d', 'M180,238 Q' + (180 + bend * .4) + ',' + (238 + ty) / 2 + ' ' + (180 + bend) + ',' + (ty + bend * .5)); stem.setAttribute('stroke', green); } else stem.setAttribute('d', '');
        var n = Math.floor(L.clamp((s.g - .12) / .13, 0, 6));
        for (i = 0; i < 6; i++) { var e = leaves[i]; if (i >= n) { e.setAttribute('opacity', 0); continue; }
          var f = (i + 1) / 7, y = 238 - (238 - ty) * (.18 + f * .78), sd = i % 2 ? 1 : -1, sc = .7 + .6 * Math.min(1, (s.g - .12 - i * .13) / .2), x = 180 + (1 - hh) * 26 * f * f;
          L.set(e, { opacity: 1, fill: green, stroke: L.mix('#8A7A30', '#1F7A3A', hh), 'stroke-width': 1.2, transform: 'translate(' + x + ',' + y + ') scale(' + sd * sc + ',' + sc + ') rotate(' + (-22 + droop) + ')' }); }
        L.set(flower, { opacity: s.g > .9 ? 1 : 0, transform: 'translate(' + (180 + (1 - hh) * 26) + ',' + (ty - 4 + (1 - hh) * 13) + ') scale(' + L.clamp((s.g - .9) / .1, .2, 1) + ')' });
        for (i = 0; i < 26; i++) { var p = s.parts[i], q = pool[i]; if (!p) { q.setAttribute('opacity', 0); continue; }
          var k = KIND[p.k]; L.set(q, { opacity: Math.min(1, p.t * 6, (1 - p.t) * 6), transform: 'translate(' + L.lerp(p.x0, p.x1, p.t) + ',' + L.lerp(p.y0, p.y1, p.t) + ')' });
          q.firstChild.setAttribute('fill', k[0]); q.firstChild.setAttribute('r', p.k === 'sug' ? 0 : 9); q.lastChild.textContent = k[1]; q.lastChild.setAttribute('font-size', p.k === 'sug' ? 13 : 8.5); }
        oSt(STAGES[s.g < .12 ? 0 : s.g < .3 ? 1 : s.g < .6 ? 2 : s.g < .9 ? 3 : 4]); oSug(L.N(Math.floor(s.sugar))); oH(pct(s.g < .12 ? 100 : hh * 100)); oW(pct(s.water));
      };
      return s;
    },
    guided: [
      { hi: 'water', pre: function (s) { s.reset(); }, t: { ar: 'في التربة بذرةٌ نائمة. اضغط «اسقِ النبتة» لتوقظها.', en: 'A sleeping seed is in the soil. Press "Water the plant" to wake it up.' },
        ok: function (s) { return s.g >= .12; }, a: { ar: 'الماءُ أيقظ البذرة: خرج منها جذرٌ صغير إلى أسفل وساقٌ إلى أعلى. هذا هو الإنبات.', en: 'Water woke the seed: a little root went down and a shoot came up. This is germination.' } },
      { hi: 'light', t: { ar: 'النبتة تحتاج الضوء. ارفع مؤشّر «الضوء».', en: 'The plant needs light. Slide "Light" up.' },
        ok: function (s) { return s.light >= 60; }, a: { ar: 'الأوراقُ الخضراء تلتقط ضوء الشمس كأنّها ألواحٌ شمسيّة صغيرة.', en: 'Green leaves catch sunlight like tiny solar panels.' } },
      { hi: 'air', t: { ar: 'وتحتاج الهواء أيضًا. اضغط «افتح النافذة».', en: 'It needs air too. Press "Open the window".' },
        ok: function (s) { return s.air; }, a: { ar: 'الآن اجتمع الضوء والماء وغاز ثاني أكسيد الكربون (CO₂) من الهواء: فتصنع الورقة سكّرًا هو غذاؤها، وتُخرج الأكسجين (O₂). هذا هو البناء الضوئي.', en: 'Now light, water and carbon dioxide (CO₂) from the air are together: the leaf makes sugar — its food — and gives out oxygen (O₂). This is photosynthesis.' } },
      { t: { ar: 'اعتنِ بنبتتك حتى تكبر — وإذا جفَّت التربة فاسقِها!', en: 'Look after your plant until it grows big — and water it when the soil dries!' },
        ok: function (s) { return s.g >= .6; }, a: { ar: 'ما شاء الله! بالسكّر الذي صنعته بنَت النبتة ساقًا أطول وأوراقًا جديدة.', en: 'Masha\'Allah! With the sugar it made, the plant built a taller stem and new leaves.' } },
      { hi: 'light', t: { ar: 'جرِّب الآن: أنزِل «الضوء» إلى الصفر وراقب ماذا يحدث.', en: 'Now try this: bring "Light" down to zero and watch what happens.' },
        ok: function (s) { return s.dark > 3; }, a: { ar: 'بلا ضوءٍ يتوقّف صنعُ الغذاء فتذبل النبتة شيئًا فشيئًا. أعِد إليها الضوء لتنتعش!', en: 'Without light the food-making stops and the plant slowly wilts. Give the light back and it will recover!' } }
    ],
    challenge: [
      { q: { ar: 'ما الأشياء الثلاثة التي تحتاجها الورقة لتصنع غذاءها؟', en: 'Which three things does a leaf need to make its food?' }, ans: 1,
        opts: [{ ar: 'ظلام وملح وتراب', en: 'Darkness, salt and soil' }, { ar: 'ضوء وماء وهواء (CO₂)', en: 'Light, water and air (CO₂)' }, { ar: 'سكّر وأكسجين وحرارة', en: 'Sugar, oxygen and heat' }], why: { ar: 'نعم: ضوء + ماء + ثاني أكسيد الكربون ← سكّر + أكسجين.', en: 'Yes: light + water + carbon dioxide → sugar + oxygen.' } },
      { auto: true, pre: function (s) { s.reset(); s.g = .5; s.h = .15; s.sugar = 0; }, q: { ar: 'هذه النبتة ذابلة! أعطِها كلَّ ما تحتاجه حتى تعود خضراء قويّة.', en: 'This plant is wilting! Give it everything it needs until it is green and strong again.' },
        ok: function (s) { return s.h >= .85 && s.P > .2; }, a: { ar: 'أنقذتَها! ضوءٌ وماءٌ وهواء — فعادت تصنع غذاءها.', en: 'You saved it! Light, water and air — and it is making food again.' } },
      { q: { ar: 'ما الغاز الذي تُخرجه النبتة ونتنفَّسه نحن؟', en: 'Which gas does the plant give out that we breathe?' }, ans: 0,
        opts: [{ ar: 'الأكسجين', en: 'Oxygen' }, { ar: 'ثاني أكسيد الكربون', en: 'Carbon dioxide' }, { ar: 'بخار الماء فقط', en: 'Only water vapour' }], why: { ar: 'النبات يعطينا الأكسجين — فلنحافظ على الأشجار!', en: 'Plants give us oxygen — so let us look after trees!' } },
      { auto: true, pre: function (s) { s.reset(); s.g = .72; s.h = .9; }, q: { ar: 'اجعل هذه النبتة تُزهر!', en: 'Make this plant flower!' },
        ok: function (s) { return s.g >= .95; }, a: { ar: 'أزهرت! من الزهرة تأتي الثمار والبذور الجديدة.', en: 'It flowered! From the flower come fruit and new seeds.' } }
    ]
  });
})();
