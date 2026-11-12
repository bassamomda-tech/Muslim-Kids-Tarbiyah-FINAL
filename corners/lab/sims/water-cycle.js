/* water-cycle.js — دورة الماء والمطر: sun heat → evaporation → cloud → wind → rain on the mountain → river → sea.
   The water is never lost: sea + air + cloud + river always add up to the same 100 drops. */
(function () {
  var pct = function (v) { return { ar: Lab.N(Math.round(v)) + '٪', en: Math.round(v) + '%' }; };
  Lab.start({
    id: 'water-cycle', view: [360, 280], bar: { step: true },
    title: { ar: 'دورة الماء والمطر', en: 'The water cycle & rain' },
    sub: { ar: 'تحكَّم بالشمس والرياح، وتابع رحلة الماء.', en: 'Control the sun and the wind, and follow the water\'s journey.' },
    ayah: { text: '﴿اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَيَبْسُطُهُ فِي السَّمَاءِ كَيْفَ يَشَاءُ﴾', ref: { ar: '[الروم: ٤٨]', en: '[Ar-Rum: 48]' },
      mean: 'It is Allah who sends the winds, and they stir up clouds, and He spreads them in the sky however He wills.',
      wonder: { ar: 'سبحان الله! الماءُ الذي تشربه اليوم سافر من البحر إلى السماء ثم عاد مطرًا — رحمةً من الله يسوقها إلينا.', en: 'SubhanAllah! The water you drink today travelled from the sea up to the sky and came back as rain — a mercy Allah sends to us.' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { heat: 0, wind: 0, sea: 100, cloud: 0, river: 0, cx: 85, vap: [], rain: [], rained: 0, back: 0, raining: false, acc: 0, racc: 0, dash: 0 };
      var defs = S('defs', null, svg);
      var sky = S('linearGradient', { id: 'wcSky', x1: 0, y1: 0, x2: 0, y2: 1 }, defs); S('stop', { offset: 0, 'stop-color': '#5DB4EA' }, sky); S('stop', { offset: 1, 'stop-color': '#D6F1FF' }, sky);
      S('rect', { width: 360, height: 280, fill: 'url(#wcSky)' }, svg);
      var rays = L.g({ opacity: 0 }); for (var i = 0; i < 10; i++) { var a = i * Math.PI / 5; S('line', { x1: 50 + Math.cos(a) * 30, y1: 46 + Math.sin(a) * 30, x2: 50 + Math.cos(a) * 44, y2: 46 + Math.sin(a) * 44, stroke: '#FFD23F', 'stroke-width': 4, 'stroke-linecap': 'round' }, rays); }
      var sun = S('circle', { cx: 50, cy: 46, r: 20, fill: '#FFD23F', stroke: '#FFB000', 'stroke-width': 2 }, svg);
      S('path', { d: 'M196,232 L286,96 L360,182 L360,232Z', fill: '#8A7B6B' }, svg);
      S('path', { d: 'M286,96 L268,123 L279,119 L287,128 L296,118 L306,119Z', fill: '#fff' }, svg);
      S('path', { d: 'M150,236 L196,224 L360,214 L360,280 L150,280Z', fill: '#5FAE57' }, svg);
      S('path', { d: 'M278,138 C264,168 250,186 228,200 S182,222 158,232', fill: 'none', stroke: '#6E5F50', 'stroke-width': 6, 'stroke-linecap': 'round', opacity: .5 }, svg);
      var river = S('path', { d: 'M278,138 C264,168 250,186 228,200 S182,222 158,232', fill: 'none', stroke: '#2F8FE0', 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-dasharray': '9 5', opacity: 0 }, svg);
      S('path', { d: 'M0,226 Q20,221 40,226 T80,226 T120,226 T165,228 L165,280 L0,280Z', fill: '#1F78C8' }, svg);
      S('path', { d: 'M0,244 Q20,239 40,244 T80,244 T120,244 T160,244', fill: 'none', stroke: '#7CC4F5', 'stroke-width': 2, opacity: .6 }, svg);
      L.text(78, 266, { ar: 'البحر', en: 'Sea' }, { 'font-size': 13, fill: '#DDF1FF' });
      L.text(300, 262, { ar: 'اليابسة', en: 'Land' }, { 'font-size': 13, fill: '#F4FFE9' });
      var vapG = L.g(), rainG = L.g(), vp = [], rp = [];
      for (i = 0; i < 40; i++) { vp.push(S('circle', { r: 3, fill: '#fff', opacity: 0 }, vapG)); rp.push(S('line', { stroke: '#1F78C8', 'stroke-width': 2.5, 'stroke-linecap': 'round', opacity: 0 }, rainG)); }
      var windG = L.g({ opacity: 0 }); for (i = 0; i < 3; i++) S('path', { d: 'M' + (110 + i * 12) + ',' + (30 + i * 13) + ' h46 m-9,-6 l9,6 l-9,6', fill: 'none', stroke: '#fff', 'stroke-width': 2.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, windG);
      var cloud = L.g({ opacity: 0 }), cparts = [[-20, 4, 18, 13], [0, -6, 22, 17], [22, 3, 19, 13], [2, 9, 30, 11]].map(function (p) { return S('ellipse', { cx: p[0], cy: p[1], rx: p[2], ry: p[3], fill: '#fff' }, cloud); });
      function lab(x, y, t) { var g = L.g({ opacity: 0 }); var tx = L.text(x, y, t, { 'font-size': 12.5, fill: '#0B2A47', stroke: '#fff', 'stroke-width': 3, 'paint-order': 'stroke' }, g); return g; }
      var lEv = lab(78, 170, { ar: '⬆ تبخُّر', en: '⬆ Evaporation' }), lCo = lab(0, 0, { ar: 'تكاثُف', en: 'Condensation' }), lRa = lab(0, 0, { ar: 'هُطول ⬇', en: 'Rain ⬇' }), lRi = lab(228, 240, { ar: '⬅ جريان', en: '⬅ Run-off' });
      var oSea = L.out({ ar: '🌊 في البحر', en: '🌊 In the sea' }), oAir = L.out({ ar: '☁️ في الجوّ', en: '☁️ In the air' }), oLand = L.out({ ar: '🏞️ في النهر', en: '🏞️ In the river' });
      L.slider({ key: 'heat', label: { ar: '☀️ حرارة الشمس', en: '☀️ Sun\'s heat' }, min: 0, max: 100, step: 5, val: 0, fmt: pct, on: function (v) { s.heat = v; } });
      L.slider({ key: 'wind', label: { ar: '💨 قوّة الرياح', en: '💨 Wind strength' }, min: 0, max: 100, step: 5, val: 0, fmt: pct, on: function (v) { s.wind = v; } });
      function ground(x) { return x < 160 ? 227 : x < 196 ? 226 : x <= 286 ? Math.max(100, 232 - (x - 196) * 136 / 90) : 96 + (x - 286) * 86 / 74; }
      s.reset = function () { s.sea = 100; s.cloud = 0; s.river = 0; s.cx = 85; s.vap = []; s.rain = []; s.rained = 0; s.back = 0; s.raining = false; s.acc = s.racc = 0; L.poke(); };
      s.setHW = function (h, w) { L.ctl.heat.set(h); L.ctl.wind.set(w); };
      s.tick = function (dt) {
        var i, p, k = .55 + s.cloud / 100 * .75;
        if (s.sea > 15) s.acc += s.heat / 100 * 5 * dt;
        while (s.acc >= 1) { s.acc -= 1; if (s.vap.length < 40) { s.vap.push({ x: 15 + Math.random() * 125, y: 222, t: Math.random() * 6 }); s.sea -= 1; } }
        for (i = s.vap.length - 1; i >= 0; i--) {
          p = s.vap[i]; p.t += dt * 3;
          if (p.y > 105) { p.y -= 30 * dt; p.x += Math.sin(p.t) * 9 * dt; }
          else { var dx = s.cx - p.x; p.x += (dx > 0 ? 1 : -1) * Math.min(Math.abs(dx), 80 * dt); p.y += (64 - p.y) * 2.2 * dt; if (Math.abs(dx) < 24 * k && p.y < 84) { s.vap.splice(i, 1); s.cloud += 1; } }
        }
        s.cx = Math.min(292, s.cx + s.wind / 100 * 36 * dt);
        if ((s.cx > 200 && s.cloud >= 22) || s.cloud >= 100) s.raining = true;
        if (s.raining) {
          s.racc += 9 * dt;
          while (s.racc >= 1 && s.cloud >= 1) { s.racc -= 1; s.cloud -= 1; s.rain.push({ x: s.cx + (Math.random() * 44 - 22) * k, y: 78 }); }
          if (s.cloud < 1) { s.raining = false; s.racc = 0; if (s.cx > 200) s.cx = 85; }
        }
        for (i = s.rain.length - 1; i >= 0; i--) { p = s.rain[i]; p.y += 150 * dt; if (p.y >= ground(p.x)) { s.rain.splice(i, 1); if (p.x < 160) s.sea += 1; else { s.river += 1; s.rained += 1; } } }
        if (s.river > 0) { var f = Math.min(s.river, 3 * dt); s.river -= f; s.sea += f; s.back += f; s.dash -= 40 * dt; }
      };
      s.draw = function () {
        var i, p, k = .55 + s.cloud / 100 * .75, h = s.heat / 100;
        L.set(sun, { r: 16 + h * 8, fill: L.mix('#FFE680', '#FFB300', h) }); rays.setAttribute('opacity', h);
        windG.setAttribute('opacity', s.wind / 100);
        for (i = 0; i < 40; i++) {
          p = s.vap[i]; if (p) L.set(vp[i], { cx: p.x, cy: p.y, opacity: .8 }); else vp[i].setAttribute('opacity', 0);
          p = s.rain[i]; if (p) L.set(rp[i], { x1: p.x, y1: p.y, x2: p.x - 1.5, y2: p.y + 7, opacity: 1 }); else rp[i].setAttribute('opacity', 0);
        }
        L.set(cloud, { transform: 'translate(' + s.cx + ',64) scale(' + k + ')', opacity: L.clamp(s.cloud / 5, 0, 1) });
        var col = L.mix('#FFFFFF', '#5F6E82', s.cloud / 90); cparts.forEach(function (e) { e.setAttribute('fill', col); });
        L.set(river, { opacity: L.clamp(s.river / 4, 0, 1), 'stroke-width': 3 + Math.min(4, s.river / 4), 'stroke-dashoffset': s.dash });
        lEv.setAttribute('opacity', s.vap.length > 2 ? 1 : 0);
        L.set(lCo, { opacity: s.cloud > 8 && !s.raining ? 1 : 0, transform: 'translate(' + L.clamp(s.cx, 50, 300) + ',' + (64 - 24 * k - 6) + ')' });
        L.set(lRa, { opacity: s.rain.length > 2 ? 1 : 0, transform: 'translate(' + L.clamp(s.cx - 52, 40, 250) + ',128)' });
        lRi.setAttribute('opacity', s.river > 1 ? 1 : 0);
        oSea(pct(s.sea)); oAir(pct(s.cloud + s.vap.length + s.rain.length)); oLand(pct(s.river));
      };
      return s;
    },
    guided: [
      { hi: 'heat', pre: function (s) { s.reset(); s.setHW(0, 0); },
        t: { ar: 'ارفع مؤشّر «حرارة الشمس» حتى تشتدّ الحرارة فوق البحر.', en: 'Slide "Sun\'s heat" up until the sun is shining strongly on the sea.' },
        ok: function (s) { return s.heat >= 60; },
        a: { ar: 'حرارةُ الشمس تحوِّل ماء البحر إلى بخارٍ خفيف لا نكاد نراه، فيصعد إلى أعلى. هذا هو التبخُّر.', en: 'The sun\'s heat turns sea water into light vapour we can hardly see, and it rises up. This is evaporation.' } },
      { t: { ar: 'راقِب البخار وهو يصعد، وانتظر حتى يكبر السحاب.', en: 'Watch the vapour rise, and wait until the cloud grows.' },
        ok: function (s) { return s.cloud >= 35; },
        a: { ar: 'في الأعلى الجوُّ بارد، فيتجمَّع البخار قطراتٍ صغيرةً جدًّا تصنع السحاب. هذا هو التكاثُف.', en: 'High up the air is cold, so the vapour gathers into tiny droplets that make a cloud. This is condensation.' } },
      { hi: 'wind', t: { ar: 'حرِّك مؤشّر «قوّة الرياح» لتسوق السحابَ نحو الجبل.', en: 'Slide "Wind strength" to push the cloud towards the mountain.' },
        ok: function (s) { return s.cx > 200 || s.rained > 0; },
        a: { ar: 'الرياحُ تحمل السحاب من فوق البحر إلى اليابسة البعيدة.', en: 'The wind carries the cloud from over the sea to faraway land.' } },
      { t: { ar: 'راقِب السحابَ الثقيل فوق الجبل… ماذا ينزل منه؟', en: 'Watch the heavy cloud over the mountain… what falls from it?' },
        ok: function (s) { return s.rained >= 12; },
        a: { ar: 'عند الجبل يبرد السحابُ أكثر، فتكبر القطرات وتثقل وتنزل مطرًا. هذا هو الهُطول.', en: 'Near the mountain the cloud gets even colder; the droplets grow heavy and fall as rain.' } },
      { t: { ar: 'تابِع ماءَ المطر على الجبل: إلى أين يجري؟', en: 'Follow the rain water on the mountain: where does it flow?' },
        ok: function (s) { return s.back >= 8; },
        a: { ar: 'يجري الماءُ في النهر عائدًا إلى البحر، ثم تبدأ الرحلة من جديد. هذه هي دورة الماء!', en: 'The water runs down the river back to the sea, and the journey starts again. That is the water cycle!' } }
    ],
    challenge: [
      { auto: true, pre: function (s) { s.reset(); s.setHW(0, 0); }, q: { ar: 'السماءُ صافية والأرضُ عطشى. أنزِل المطرَ على الجبل!', en: 'The sky is clear and the land is thirsty. Make it rain on the mountain!' },
        ok: function (s) { return s.rained >= 10; }, a: { ar: 'رائع! سخَّنتَ البحر فتكوَّن السحاب، ثم ساقته الرياح فأمطر.', en: 'Great! You heated the sea, a cloud formed, the wind pushed it and it rained.' } },
      { q: { ar: 'ما الذي يحوِّل ماءَ البحر إلى بخار؟', en: 'What turns sea water into vapour?' }, ans: 1,
        opts: [{ ar: 'الرياح', en: 'The wind' }, { ar: 'حرارة الشمس', en: 'The sun\'s heat' }, { ar: 'الجبل', en: 'The mountain' }], why: { ar: 'نعم، حرارة الشمس تبخِّر الماء.', en: 'Yes, the sun\'s heat evaporates the water.' } },
      { pre: function (s) { s.setHW(80, 0); }, q: { ar: 'التبخُّر الآن قويّ. أوقِفه تمامًا ثم اضغط «تحقَّق».', en: 'Evaporation is strong now. Stop it completely, then press "Check".' },
        ok: function (s) { return s.heat === 0; }, hint: { ar: 'ما الذي يسبِّب التبخُّر؟ أنقِصه إلى الصفر.', en: 'What causes evaporation? Bring it down to zero.' }, a: { ar: 'صحيح: بلا حرارةٍ لا يتبخَّر الماء.', en: 'Right: with no heat, the water does not evaporate.' } },
      { q: { ar: 'ممَّ يتكوَّن السحاب؟', en: 'What is a cloud made of?' }, ans: 0,
        opts: [{ ar: 'قطراتِ ماءٍ صغيرةٍ جدًّا', en: 'Very tiny drops of water' }, { ar: 'قطنٍ أبيض', en: 'White cotton' }, { ar: 'دخان', en: 'Smoke' }], why: { ar: 'السحاب قطراتُ ماءٍ صغيرة جدًّا تجمَّعت من البخار.', en: 'A cloud is very tiny water droplets gathered from vapour.' } },
      { q: { ar: 'أين يذهب ماءُ المطر الذي نزل على الجبل؟', en: 'Where does the rain that fell on the mountain go?' }, ans: 2,
        opts: [{ ar: 'يختفي إلى الأبد', en: 'It disappears forever' }, { ar: 'يصعد إلى الشمس', en: 'It goes up to the sun' }, { ar: 'يجري في الأنهار عائدًا إلى البحر', en: 'It runs in rivers back to the sea' }], why: { ar: 'الماء لا يضيع؛ يعود إلى البحر لتبدأ الدورة من جديد.', en: 'Water is not lost; it returns to the sea and the cycle begins again.' } }
    ]
  });
})();
