/* shop.js — البيع والشراء: fill the basket, add up the price, pay, and work out the change. */
(function () {
  var GOODS = [
    { v: 'bread', ic: '🍞', p: 2, ar: 'خبز', en: 'bread' },
    { v: 'dates', ic: '🌴', p: 3, ar: 'تمر', en: 'dates' },
    { v: 'milk', ic: '🥛', p: 4, ar: 'حليب', en: 'milk' },
    { v: 'apple', ic: '🍎', p: 5, ar: 'تفّاح', en: 'apples' },
    { v: 'honey', ic: '🍯', p: 7, ar: 'عسل', en: 'honey' }
  ];
  Lab.start({
    id: 'shop', view: [360, 290],
    title: { ar: 'البيع والشراء', en: 'Buying and selling' },
    sub: { ar: 'املأ السلّة، اجمع الثمن، ثم احسب الباقي.', en: 'Fill the basket, add up the price, then work out the change.' },
    ayah: { text: '﴿وَيْلٌ لِّلْمُطَفِّفِينَ﴾', ref: { ar: '[المطفّفين: ١]', en: '[Al-Mutaffifin: 1]' }, mean: 'Woe to those who give less than due.',
      wonder: { ar: 'المطفِّف هو من يأخذ حقَّه كاملًا ويَنقص حقَّ غيره. والتاجر المسلم صادقٌ أمين: يُعطي الباقي كاملًا ولا يُخفي عيب بضاعته.', en: 'Those who "give less than due" take their own right in full but give others less. A Muslim trader is honest and trustworthy: he returns the full change and never hides a fault in his goods.' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { b: {}, pay: 0, taps: 0, hide: false }, cells = {};
      S('rect', { width: 360, height: 290, fill: '#12324F' }, svg);
      S('rect', { x: 14, y: 18, width: 332, height: 128, rx: 12, fill: '#8A5A2B' }, svg); S('rect', { x: 22, y: 26, width: 316, height: 112, rx: 8, fill: '#FFF3D6' }, svg);
      L.text(180, 14, { ar: 'رفّ الدكّان — اضغط لتضع في السلّة', en: 'The shop shelf — tap to add to the basket' }, { 'font-size': 10.5, fill: '#FFE27A' });
      GOODS.forEach(function (g, i) {
        var x = 26 + i * 62, grp = L.g();
        var bg = S('rect', { x: x, y: 32, width: 56, height: 100, rx: 10, fill: '#fff', stroke: '#C9B88A', 'stroke-width': 2 }, grp);
        L.text(x + 28, 78, g.ic, { 'font-size': 30 }, grp);
        L.text(x + 28, 104, g, { 'font-size': 11, fill: '#3A2A00', 'font-weight': 900 }, grp);
        L.text(x + 28, 122, { ar: g.p === 2 ? 'درهمان' : L.N(g.p) + ' دراهم', en: g.p + ' dirhams' }, { 'font-size': 10, fill: '#1F7A44', 'font-weight': 900 }, grp);
        cells[g.v] = bg;
        L.tap(grp, function () { s.b[g.v] = !s.b[g.v]; s.taps++; }, { ar: g.ar + ' ' + g.p + ' دراهم', en: g.en + ' ' + g.p + ' dirhams' });
      });
      S('path', { d: 'M60 176 h240 l-22 86 h-196 Z', fill: '#C79A62', stroke: '#6B4423', 'stroke-width': 3 }, svg);
      S('path', { d: 'M96 176 q84 -46 168 0', fill: 'none', stroke: '#6B4423', 'stroke-width': 4 }, svg);
      var inB = L.text(180, 232, '', { 'font-size': 30 }), emp = L.text(180, 226, { ar: 'السلّة فارغة', en: 'The basket is empty' }, { 'font-size': 12, fill: '#3A2A00' });
      var cP = L.slider({ key: 'pay', label: { ar: '🪙 المبلغ الذي أدفعه (دراهم)', en: '🪙 The money I pay (dirhams)' }, min: 0, max: 30, step: 1, val: 0, on: function (v) { s.pay = v; } });
      L.button({ key: 'clear', label: { ar: '↩ أفرِغ السلّة', en: '↩ Empty the basket' }, on: function () { s.b = {}; } });
      var oT = L.out({ ar: 'ثمن ما في السلّة', en: 'Price of the basket' }), oP = L.out({ ar: 'دفعتُ', en: 'I paid' }), oC = L.out({ ar: 'الباقي لي', en: 'My change' });
      s.total = function () { return GOODS.reduce(function (n, g) { return n + (s.b[g.v] ? g.p : 0); }, 0); };
      s.has = function () { var a = [].slice.call(arguments); return GOODS.every(function (g) { return !!s.b[g.v] === (a.indexOf(g.v) >= 0); }); };
      s.set = function (list, pay, hide) { s.b = {}; (list || []).forEach(function (v) { s.b[v] = true; }); cP.set(pay || 0); s.hide = !!hide; L.poke(); };
      s.reset = function () { s.set([], 0, s.hide); };
      s.tick = function () {};
      s.draw = function () {
        var tot = s.total(), q = L.lang === 'ar' ? '؟' : '?', ic = '';
        GOODS.forEach(function (g) { cells[g.v].setAttribute('fill', s.b[g.v] ? '#DFF5E6' : '#fff'); cells[g.v].setAttribute('stroke', s.b[g.v] ? '#1F7A44' : '#C9B88A'); if (s.b[g.v]) ic += g.ic; });
        inB.textContent = ic; emp.textContent = ic ? '' : L.T({ ar: 'السلّة فارغة', en: 'The basket is empty' });
        oT(s.hide ? q : L.N(tot)); oP(L.N(s.pay));
        oC(s.hide ? q : s.pay < tot ? { ar: 'المبلغ لا يكفي — ينقص ' + L.N(tot - s.pay), en: 'Not enough — ' + (tot - s.pay) + ' short' } : L.N(s.pay - tot));
      };
      return s;
    },
    guided: [
      { pre: function (s) { s.set([], 0); }, t: { ar: 'أنت المشتري. اضغط على الخبز 🍞 لتضعه في السلّة.', en: 'You are the buyer. Tap the bread 🍞 to put it in the basket.' },
        ok: function (s) { return s.has('bread'); }, a: { ar: 'ثمن الخبز درهمان.', en: 'The bread costs 2 dirhams.' } },
      { t: { ar: 'أضِف الحليب 🥛 أيضًا. كم صار الثمن؟', en: 'Add the milk 🥛 too. What is the price now?' },
        ok: function (s) { return s.has('bread', 'milk'); }, a: { ar: '٢ + ٤ = ٦ دراهم. نجمع أثمان كلِّ ما في السلّة.', en: '2 + 4 = 6 dirhams. We add the prices of everything in the basket.' } },
      { hi: 'pay', t: { ar: 'معك ورقة ١٠ دراهم. حرِّك مؤشّر «المبلغ الذي أدفعه» إلى ١٠.', en: 'You have a 10-dirham note. Move "The money I pay" to 10.' },
        ok: function (s) { return s.has('bread', 'milk') && s.pay === 10; }, a: { ar: '١٠ − ٦ = ٤. الباقي ٤ دراهم يُعيدها البائع الأمين كاملةً.', en: '10 − 6 = 4. The honest seller gives back all 4 dirhams of change.' } },
      { t: { ar: 'الآن ادفع الثمن بالضبط: اجعل الباقي صفرًا.', en: 'Now pay the exact price: make the change zero.' },
        ok: function (s) { return s.total() > 0 && s.pay === s.total(); }, a: { ar: 'دفعتَ الثمن تمامًا، فلا باقي.', en: 'You paid the exact price, so there is no change.' } },
      { t: { ar: 'معك ١٠ دراهم فقط. املأ السلّة بما ثمنه ١٠ دراهم بالضبط.', en: 'You have only 10 dirhams. Fill the basket with things that cost exactly 10.' },
        ok: function (s) { return s.total() === 10; }, a: { ar: 'أحسنت! قبل الشراء نحسب: هل يكفي ما معي؟ ولا نُسرف.', en: 'Well done! Before buying we work out: do I have enough? And we do not waste.' } }
    ],
    challenge: [
      { pre: function (s) { s.set(['dates', 'apple'], 0, true); }, q: { ar: 'في السلّة تمرٌ (٣) وتفّاحٌ (٥). كم الثمن؟', en: 'The basket has dates (3) and apples (5). What is the price?' }, ans: 1, opts: [{ ar: '٧', en: '7' }, { ar: '٨', en: '8' }, { ar: '١٥', en: '15' }], why: { ar: '٣ + ٥ = ٨.', en: '3 + 5 = 8.' } },
      { pre: function (s) { s.set(['honey'], 10, true); }, q: { ar: 'اشتريتَ عسلًا بـ٧ دراهم ودفعتَ ١٠. كم الباقي؟', en: 'You bought honey for 7 dirhams and paid 10. What is the change?' }, ans: 0, opts: [{ ar: '٣', en: '3' }, { ar: '٧', en: '7' }, { ar: '١٧', en: '17' }], why: { ar: '١٠ − ٧ = ٣.', en: '10 − 7 = 3.' } },
      { pre: function (s) { s.set([], 0); }, q: { ar: 'ضع في السلّة ما ثمنه ٩ دراهم بالضبط، ثم اضغط «تحقَّق».', en: 'Put things worth exactly 9 dirhams in the basket, then press "Check".' }, ok: function (s) { return s.total() === 9; }, hint: { ar: 'جرِّب: حليب وتفّاح، أو خبز وعسل.', en: 'Try: milk and apples, or bread and honey.' }, a: { ar: '٤ + ٥ = ٩، أو ٢ + ٧ = ٩.', en: '4 + 5 = 9, or 2 + 7 = 9.' } },
      { pre: function (s) { s.set(['bread', 'dates', 'milk'], 0); }, q: { ar: 'في السلّة خبز وتمر وحليب. ادفع مبلغًا يكون الباقي منه درهمًا واحدًا، ثم «تحقَّق».', en: 'The basket has bread, dates and milk. Pay an amount that leaves exactly 1 dirham of change, then "Check".' }, ok: function (s) { return s.has('bread', 'dates', 'milk') && s.pay === 10; }, hint: { ar: 'الثمن ٩. ما المبلغ الذي يزيد عليه واحدًا؟', en: 'The price is 9. Which amount is one more?' }, a: { ar: 'تدفع ١٠ فيعود لك درهم.', en: 'You pay 10 and get 1 back.' } },
      { pre: function (s) { s.set(['milk'], 5, true); }, q: { ar: 'أعطاك البائع باقيًا أكثر من حقّك بالخطأ. ماذا تفعل؟', en: 'The seller gave you too much change by mistake. What do you do?' }, ans: 2, opts: [{ ar: 'أسكت وآخذه', en: 'Keep quiet and take it' }, { ar: 'أشتري به حلوى', en: 'Buy sweets with it' }, { ar: 'أُعيد الزيادة إليه', en: 'Give the extra back' }], why: { ar: 'الأمانة: لا نأخذ ما ليس لنا.', en: 'Honesty: we do not take what is not ours.' } }
    ]
  });
})();
