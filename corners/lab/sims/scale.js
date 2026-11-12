/* scale.js — الوزن والميزان: put an object on one pan and weights on the other until the beam is level. */
(function () {
  var ITEMS = [
    { v: 'apple', ic: '🍎', g: 150, ar: 'تفّاحة', en: 'an apple' },
    { v: 'book', ic: '📘', g: 400, ar: 'كتاب', en: 'a book' },
    { v: 'rice', ic: '🍚', g: 1000, ar: 'كيس أرز', en: 'a bag of rice' },
    { v: 'melon', ic: '🍉', g: 2000, ar: 'بطّيخة', en: 'a watermelon' },
    { v: 'pen', ic: '✏️', g: 20, ar: 'قلم', en: 'a pencil' }
  ];
  var WTS = [1000, 500, 100, 50, 10];
  function fmt(L, g) { if (g >= 1000 && g % 100 === 0) return L.N(g / 1000) + (L.lang === 'en' ? ' kg' : ' كغ'); return L.N(g) + (L.lang === 'en' ? ' g' : ' غ'); }
  Lab.start({
    id: 'scale', view: [360, 290],
    title: { ar: 'الوزن والميزان', en: 'Weight and the scale' },
    sub: { ar: 'ضع الأثقال حتى تتوازن الكفّتان.', en: 'Add weights until the two pans balance.' },
    ayah: { text: '﴿وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ﴾', ref: { ar: '[الرحمن: ٩]', en: '[Ar-Rahman: 9]' }, mean: 'And establish weight in justice and do not make the balance deficient.',
      wonder: { ar: 'الميزان العادل أمانة: المسلم يَزِن بالحقّ، فلا يزيد لنفسه ولا يَنقص من حقّ غيره.', en: 'A fair scale is a trust: a Muslim weighs truthfully — never taking more for himself and never giving others less than their right.' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { it: 'apple', w: 0, n: 0, hide: false, tilt: 0 }, cx = 180, py = 96;
      S('rect', { width: 360, height: 290, fill: '#12324F' }, svg);
      S('rect', { x: cx - 6, y: py, width: 12, height: 150, fill: '#8A5A2B' }, svg); S('path', { d: 'M' + (cx - 60) + ' 258 h120 l-14 -14 h-92 Z', fill: '#B67A3C' }, svg);
      var beam = L.g(); S('rect', { x: cx - 118, y: py - 5, width: 236, height: 10, rx: 5, fill: '#D9B25C' }, beam); S('circle', { cx: cx, cy: py, r: 9, fill: '#8A5A2B' }, svg);
      function pan(x) { var g = L.g(); S('line', { x1: x, y1: 0, x2: x - 36, y2: 76, stroke: '#D9CFB6', 'stroke-width': 2 }, g); S('line', { x1: x, y1: 0, x2: x + 36, y2: 76, stroke: '#D9CFB6', 'stroke-width': 2 }, g);
        S('path', { d: 'M' + (x - 46) + ' 76 h92 q-6 22 -46 22 q-40 0 -46 -22 Z', fill: '#E8B530', stroke: '#8A6A1A', 'stroke-width': 2 }, g); return g; }
      var pl = pan(cx - 108), pr = pan(cx + 108);
      var tl = L.text(cx - 108, 70, '🍎', { 'font-size': 34 }, pl), tr = L.text(cx + 108, 66, '', { 'font-size': 12, fill: '#FFE27A', 'font-weight': 900 }, pr), tw = L.text(cx + 108, 50, '', { 'font-size': 22 }, pr);
      function item() { return ITEMS.filter(function (i) { return i.v === s.it; })[0]; }
      var cI = L.choice({ key: 'it', val: 'apple', opts: ITEMS.map(function (i) { return { v: i.v, label: i.ic }; }), on: function (v) { s.it = v; s.w = 0; s.n = 0; } });
      var row = L.row();
      WTS.forEach(function (g) { L.button({ key: 'w' + g, into: row, label: { ar: '+ ' + fmt({ N: L.N, lang: 'ar' }, g), en: '+ ' + fmt({ N: L.N, lang: 'en' }, g) }, on: function () { s.w += g; s.n++; } }); });
      L.button({ key: 'clear', label: { ar: '↩ أفرِغ كفّة الأثقال', en: '↩ Empty the weights pan' }, on: function () { s.w = 0; s.n = 0; } });
      var oW = L.out({ ar: 'الأثقال', en: 'Weights' }), oS = L.out({ ar: 'الميزان', en: 'The scale' }), oI = L.out({ ar: 'وزن الشيء', en: "The object's weight" });
      s.set = function (it, w, hide) { cI.set(it); s.w = w || 0; s.n = w ? 1 : 0; s.hide = !!hide; L.poke(); };
      s.reset = function () { s.w = 0; s.n = 0; L.poke(); };
      s.bal = function () { return s.w === item().g; };
      s.tick = function () {};
      s.draw = function () {
        var it = item(), d = it.g - s.w, target = d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(14, 4 + Math.abs(d) / 60);
        s.tilt += (target - s.tilt) * 0.2; if (Math.abs(target - s.tilt) < 0.05) s.tilt = target; else L.poke();
        var a = s.tilt, rad = a * Math.PI / 180, dy = Math.sin(rad) * 108;
        beam.setAttribute('transform', 'rotate(' + a + ' ' + cx + ' ' + py + ')');
        pl.setAttribute('transform', 'translate(0 ' + (py - dy) + ')'); pr.setAttribute('transform', 'translate(0 ' + (py + dy) + ')');
        tl.textContent = it.ic; tw.textContent = s.w ? '⚖️' : ''; tr.textContent = s.w ? fmt(L, s.w) : '';
        oW(fmt(L, s.w));
        oS(d === 0 ? { ar: '✅ متوازن', en: '✅ Balanced' } : d > 0 ? { ar: it.ar + ' أثقل — زِد الأثقال', en: 'The object is heavier — add weights' } : { ar: 'الأثقال أكثر — أفرِغ وأعِد', en: 'Too many weights — empty and retry' });
        oI(d === 0 && !s.hide ? fmt(L, it.g) : (L.lang === 'ar' ? '؟' : '?'));
      };
      return s;
    },
    guided: [
      { hi: 'w100', pre: function (s) { s.set('apple', 0); }, t: { ar: 'التفّاحة أنزلت كفّتها لأنّ الكفّة الأخرى فارغة. اضغط «+ ١٠٠ غ» لتضع ثِقلًا في الكفّة الأخرى.', en: 'The apple pulls its pan down. Press "+ 100 g" to put a weight on the other pan.' },
        ok: function (s) { return s.w >= 100; }, a: { ar: 'ما زالت التفّاحة أثقل من ١٠٠ غرام.', en: 'The apple is still heavier than 100 grams.' } },
      { hi: 'w50', t: { ar: 'أضِف «+ ٥٠ غ» وراقب العارضة.', en: 'Add "+ 50 g" and watch the beam.' },
        ok: function (s) { return s.bal(); }, a: { ar: 'توازنت الكفّتان! إذن وزن التفّاحة ١٥٠ غرامًا.', en: 'The pans are level! So the apple weighs 150 grams.' } },
      { hi: 'it', t: { ar: 'اختر كيس الأرز 🍚 ووازِنه.', en: 'Choose the bag of rice 🍚 and balance it.' },
        ok: function (s) { return s.it === 'rice' && s.bal(); }, a: { ar: 'كيلوغرامٌ واحد = ١٠٠٠ غرام. يمكن وزنه بثِقل ١ كغ، أو بثِقلين من ٥٠٠ غ.', en: 'One kilogram = 1000 grams. You can use one 1 kg weight, or two 500 g weights.' } },
      { t: { ar: 'وازِن الكتاب 📘.', en: 'Balance the book 📘.' },
        ok: function (s) { return s.it === 'book' && s.bal(); }, a: { ar: 'الكتاب ٤٠٠ غرام: أربعة أثقال من ١٠٠ غ.', en: 'The book is 400 grams: four 100 g weights.' } },
      { t: { ar: 'أخفُّ الأشياء هنا هو القلم ✏️. وازِنه.', en: 'The lightest thing here is the pencil ✏️. Balance it.' },
        ok: function (s) { return s.it === 'pen' && s.bal(); }, a: { ar: '٢٠ غرامًا فقط! الميزان الدقيق يُظهر حتى الفرق الصغير — وهكذا يكون العدل.', en: 'Only 20 grams! A precise scale shows even a small difference — that is what fairness looks like.' } }
    ],
    challenge: [
      { pre: function (s) { s.set('rice', 0, true); }, q: { ar: 'كم غرامًا في الكيلوغرام الواحد؟', en: 'How many grams are in one kilogram?' }, ans: 2, opts: [{ ar: '١٠', en: '10' }, { ar: '١٠٠', en: '100' }, { ar: '١٠٠٠', en: '1000' }], why: { ar: '١ كغ = ١٠٠٠ غ.', en: '1 kg = 1000 g.' } },
      { pre: function (s) { s.set('melon', 0, true); }, q: { ar: 'وازِن البطّيخة 🍉 ثم اضغط «تحقَّق».', en: 'Balance the watermelon 🍉, then press "Check".' }, ok: function (s) { return s.it === 'melon' && s.bal(); }, hint: { ar: 'جرِّب أثقال الكيلوغرام.', en: 'Try the kilogram weights.' }, a: { ar: 'البطّيخة ٢ كغ = ٢٠٠٠ غ.', en: 'The watermelon is 2 kg = 2000 g.' } },
      { pre: function (s) { s.set('apple', 0, true); }, q: { ar: 'أيّهما أثقل: كتابٌ وزنه ٤٠٠ غ أم تفّاحةٌ وزنها ١٥٠ غ؟', en: 'Which is heavier: a 400 g book or a 150 g apple?' }, ans: 0, opts: [{ ar: 'الكتاب', en: 'The book' }, { ar: 'التفّاحة', en: 'The apple' }, { ar: 'متساويان', en: 'They are equal' }], why: { ar: '٤٠٠ أكبر من ١٥٠.', en: '400 is more than 150.' } },
      { pre: function (s) { s.set('book', 0, true); }, q: { ar: 'وازِن الكتاب 📘 ثم اضغط «تحقَّق».', en: 'Balance the book 📘, then press "Check".' }, ok: function (s) { return s.it === 'book' && s.bal(); }, hint: { ar: 'زِد ١٠٠ غ في كلّ مرّة.', en: 'Add 100 g at a time.' }, a: { ar: '٤٠٠ غرام.', en: '400 grams.' } },
      { pre: function (s) { s.set('rice', 0, true); }, q: { ar: 'بائعٌ ينقص الميزان قليلًا ليربح أكثر. هذا…', en: 'A seller makes the scale show a little less to earn more. This is…' }, ans: 1, opts: [{ ar: 'ذكاءٌ في التجارة', en: 'Clever trading' }, { ar: 'غِشٌّ لا يرضاه الله', en: 'Cheating that Allah does not accept' }, { ar: 'أمرٌ عاديّ', en: 'Normal' }], why: { ar: 'المسلم يُوفي الميزان ولا يغشّ.', en: 'A Muslim gives full measure and never cheats.' } }
    ]
  });
})();
