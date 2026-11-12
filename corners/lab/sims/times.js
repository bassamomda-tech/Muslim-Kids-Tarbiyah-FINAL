/* times.js — جدول الضرب بالمصفوفات: rows × columns of dots; the product is the number of dots. */
(function () {
  Lab.start({
    id: 'times', view: [360, 290],
    title: { ar: 'جدول الضرب بالمصفوفات', en: 'Times tables with arrays' },
    sub: { ar: 'ابنِ صفوفًا وأعمدة، وشاهد الناتج.', en: 'Build rows and columns and see the product.' },
    ayah: { text: '﴿وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا﴾', ref: { ar: '[الجنّ: ٢٨]', en: '[Al-Jinn: 28]' }, mean: 'And He has counted everything in number.',
      wonder: { ar: 'نحن نعدّ النقاط صفًّا صفًّا… والله تعالى أحصى كلَّ شيءٍ عددًا: كلَّ نجمةٍ وكلَّ ورقةٍ وكلَّ قطرة مطر!', en: 'We count dots row by row… and Allah has counted everything in number: every star, every leaf and every drop of rain!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { r: 1, c: 1, flips: 0, hide: false }, root, key = '';
      var COL = ['#FF9B7A', '#FFD23F', '#8BE0AC', '#7FD4FF', '#C9A6FF'];
      S('rect', { width: 360, height: 290, fill: '#12324F' }, svg); root = L.g();
      function build() {
        while (root.firstChild) root.removeChild(root.firstChild);
        var r = s.r, c = s.c, cell = Math.min(34, Math.floor(232 / Math.max(r, c, 5))), x0 = 180 - c * cell / 2 - 8, y0 = 150 - r * cell / 2 + 6, i, j;
        S('rect', { x: x0 - 6, y: y0 - 6, width: c * cell + 12, height: r * cell + 12, rx: 12, fill: 'rgba(255,255,255,.06)', stroke: 'rgba(232,181,48,.5)', 'stroke-width': 1.5 }, root);
        for (i = 0; i < r; i++) { for (j = 0; j < c; j++) S('circle', { cx: x0 + j * cell + cell / 2, cy: y0 + i * cell + cell / 2, r: cell * .38, fill: COL[i % 5], stroke: '#fff', 'stroke-width': 1 }, root);
          if (!s.hide) L.text(x0 + c * cell + 24, y0 + i * cell + cell / 2 + 4, L.N((i + 1) * c), { 'font-size': 11.5, fill: i === r - 1 ? '#FFE27A' : '#BFD6EA' }, root); }
        L.text(x0 + c * cell / 2, y0 - 12, { ar: L.N(c) + ' في كلِّ صفّ', en: c + ' in each row' }, { 'font-size': 11.5, fill: '#FFE27A' }, root);
        L.text(x0 - 22, y0 + r * cell / 2 + 4, L.N(r), { 'font-size': 15, fill: '#FFE27A' }, root); L.text(x0 - 22, y0 + r * cell / 2 + 18, { ar: 'صفوف', en: 'rows' }, { 'font-size': 9.5, fill: '#FFE27A' }, root);
      }
      var cR = L.slider({ key: 'r', label: { ar: '↕ عدد الصفوف', en: '↕ Number of rows' }, min: 1, max: 10, step: 1, val: 1, on: function (v) { s.r = v; } });
      var cC = L.slider({ key: 'c', label: { ar: '↔ النقاط في كلِّ صفّ', en: '↔ Dots in each row' }, min: 1, max: 10, step: 1, val: 1, on: function (v) { s.c = v; } });
      L.button({ key: 'flip', label: { ar: '🔄 اقلب المصفوفة', en: '🔄 Flip the array' }, on: function () { var r = s.r, c = s.c; cR.set(c); cC.set(r); s.flips++; } });
      var oE = L.out({ ar: 'الضرب', en: 'Multiplication' }), oA = L.out({ ar: 'جمعٌ متكرِّر', en: 'Repeated addition' });
      s.set = function (r, c, hide) { cR.set(r); cC.set(c); s.hide = !!hide; s.flips = 0; L.poke(); };
      s.reset = function () { s.set(1, 1, s.hide); };
      s.tick = function () {};
      s.draw = function () {
        var k = s.r + '|' + s.c + '|' + s.hide; if (k !== key) { key = k; build(); }
        var p = s.hide ? '؟' : L.N(s.r * s.c), add = []; for (var i = 0; i < Math.min(s.r, 5); i++) add.push(L.N(s.c)); if (s.r > 5) add.push('…');
        oE(L.N(s.r) + ' × ' + L.N(s.c) + ' = ' + (s.hide ? (L.lang === 'ar' ? '؟' : '?') : L.N(s.r * s.c))); oA(add.join(' + '));
      };
      return s;
    },
    guided: [
      { hi: 'r', pre: function (s) { s.set(1, 1); }, t: { ar: 'هذه نقطةٌ واحدة. حرِّك مؤشّر «عدد الصفوف» لتصنع ثلاثة صفوف.', en: 'Here is one dot. Move the "Number of rows" slider to make three rows.' },
        ok: function (s) { return s.r === 3; }, a: { ar: 'ثلاثةُ صفوف، في كلِّ صفٍّ نقطةٌ واحدة.', en: 'Three rows, with one dot in each row.' } },
      { hi: 'c', t: { ar: 'الآن اجعل في كلِّ صفٍّ أربع نقاط.', en: 'Now put four dots in each row.' },
        ok: function (s) { return s.r === 3 && s.c === 4; }, a: { ar: 'ثلاثة صفوف في كلٍّ منها أربعة: ٤ + ٤ + ٤ = ١٢. الضربُ جمعٌ متكرِّر سريع: ٣ × ٤ = ١٢.', en: 'Three rows of four: 4 + 4 + 4 = 12. Multiplying is fast repeated adding: 3 × 4 = 12.' } },
      { hi: 'flip', t: { ar: 'اضغط «اقلب المصفوفة» وانظر: هل تغيَّر عددُ النقاط؟', en: 'Press "Flip the array" and look: did the number of dots change?' },
        ok: function (s) { return s.flips >= 1; }, a: { ar: 'صارت ٤ × ٣ وما زال الناتج ١٢! في الضرب لا يهمّ الترتيب.', en: 'It became 4 × 3 and the answer is still 12! In multiplication the order does not matter.' } },
      { t: { ar: 'اصنع مربَّعًا: خمسة صفوف، في كلِّ صفٍّ خمس نقاط.', en: 'Make a square: five rows with five dots in each.' },
        ok: function (s) { return s.r === 5 && s.c === 5; }, a: { ar: '٥ × ٥ = ٢٥. حين يتساوى عددُ الصفوف والأعمدة نحصل على مربَّع.', en: '5 × 5 = 25. When rows and columns are equal we get a square.' } },
      { t: { ar: 'تحدٍّ صغير: اصنع مصفوفةً فيها عشرون نقطةً بالضبط.', en: 'A little puzzle: make an array with exactly twenty dots.' },
        ok: function (s) { return s.r * s.c === 20; }, a: { ar: 'عشرون! يمكن صنعُها بأكثر من طريقة: ٤ × ٥، ٥ × ٤، ٢ × ١٠، ١٠ × ٢.', en: 'Twenty! There is more than one way: 4 × 5, 5 × 4, 2 × 10, 10 × 2.' } }
    ],
    challenge: [
      { pre: function (s) { s.set(6, 7, true); }, q: { ar: 'عُدَّ بذكاء: كم نقطةً في ٦ صفوف من ٧؟', en: 'Count cleverly: how many dots in 6 rows of 7?' }, ans: 1, opts: [{ ar: '٣٦', en: '36' }, { ar: '٤٢', en: '42' }, { ar: '٤٨', en: '48' }], why: { ar: '٦ × ٧ = ٤٢.', en: '6 × 7 = 42.' } },
      { pre: function (s) { s.set(1, 4); }, q: { ar: 'في كلِّ صفٍّ ٤ نقاط. كم صفًّا نحتاج ليصير الناتج ٢٤؟ ابنِها ثم اضغط «تحقَّق».', en: 'Each row has 4 dots. How many rows make 24? Build it, then press "Check".' }, ok: function (s) { return s.c === 4 && s.r === 6; }, hint: { ar: 'أبقِ ٤ في كلِّ صفّ، وزِد الصفوف حتى ترى ٢٤.', en: 'Keep 4 in each row and add rows until you see 24.' }, a: { ar: '٦ × ٤ = ٢٤.', en: '6 × 4 = 24.' } },
      { pre: function (s) { s.set(7, 1); }, q: { ar: 'عندنا ٧ صفوف. كم نقطةً في كلِّ صفٍّ ليصير الناتج ٣٥؟ ابنِها ثم اضغط «تحقَّق».', en: 'We have 7 rows. How many dots in each row make 35? Build it, then press "Check".' }, ok: function (s) { return s.r === 7 && s.c === 5; }, hint: { ar: 'أبقِ ٧ صفوف، وزِد النقاط في كلِّ صفّ.', en: 'Keep 7 rows and add dots to each row.' }, a: { ar: '٧ × ٥ = ٣٥.', en: '7 × 5 = 35.' } },
      { pre: function (s) { s.set(8, 3, true); }, q: { ar: '٨ × ٣ يساوي نفسَ ناتج…', en: '8 × 3 gives the same answer as…' }, ans: 0, opts: [{ ar: '٣ × ٨', en: '3 × 8' }, { ar: '٨ + ٣', en: '8 + 3' }, { ar: '٨ × ٨', en: '8 × 8' }], why: { ar: 'في الضرب لا يهمّ الترتيب.', en: 'In multiplication the order does not matter.' } },
      { pre: function (s) { s.set(1, 1); }, q: { ar: 'ابنِ مصفوفةً من ٣ صفوف ناتجُها ١٨، ثم اضغط «تحقَّق».', en: 'Build an array with 3 rows and a product of 18, then press "Check".' }, ok: function (s) { return s.r === 3 && s.c === 6; }, hint: { ar: 'ثلاثة صفوف… كم في كلِّ صفّ؟', en: 'Three rows… how many in each?' }, a: { ar: '٣ × ٦ = ١٨.', en: '3 × 6 = 18.' } }
    ]
  });
})();
