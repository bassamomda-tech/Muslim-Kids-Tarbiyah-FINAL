/* fractions.js — الكسور: cut a pie into equal pieces and tap pieces to take them; compare two loaves; add two fractions. */
(function () {
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  Lab.start({
    id: 'fractions', view: [360, 290],
    title: { ar: 'الكسور', en: 'Fractions' },
    sub: { ar: 'قطِّع وظلِّل، ثم قارِن واجمع.', en: 'Cut and shade, then compare and add.' },
    ayah: { text: '﴿وَكُلُّ شَيْءٍ عِندَهُ بِمِقْدَارٍ﴾', ref: { ar: '[الرعد: ٨]', en: '[Ar-Ra\'d: 8]' }, mean: 'And everything with Him is in due measure.',
      wonder: { ar: 'بالكسور نقسم الطعام بالعدل ونقيس الأشياء بدقّة… وكلُّ شيءٍ في خلق الله موزونٌ بمقدار لا يزيد ولا ينقص.', en: 'With fractions we share food fairly and measure things exactly… and everything in Allah\'s creation is balanced in measure, no more and no less.' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { scene: 'make', d: 4, dB: 4, A: [], B: [], hideV: false }, root, key = '';
      S('rect', { width: 360, height: 290, fill: '#12324F' }, svg); root = L.g();
      function cnt(a, d) { var n = 0; for (var i = 0; i < d; i++) if (a[i]) n++; return n; }
      function frac(x, y, n, d, size, col) { var g = L.g(null, root); size = size || 24; L.text(x, y - 5, L.N(n), { 'font-size': size, fill: col || '#fff' }, g); S('path', { d: 'M' + (x - size * .62) + ',' + (y + 2) + ' h' + size * 1.24, stroke: col || '#fff', 'stroke-width': 2.5, 'stroke-linecap': 'round' }, g); L.text(x, y + size * .95 + 2, L.N(d), { 'font-size': size, fill: col || '#fff' }, g); return g; }
      function bar(x, y, w, hh, d, arr, col, name, fixed) {
        for (var i = 0; i < d; i++) (function (i) {
          var r = S('rect', { x: x + i * w / d, y: y, width: w / d, height: hh, fill: arr[i] ? col : '#F3E3C3', stroke: '#8A5A2B', 'stroke-width': 1.6 }, root);
          if (!fixed) L.tap(r, function () { toggle(arr, i); }, { ar: 'قطعة ' + L.N(i + 1) + ' من الرغيف ' + name, en: 'Piece ' + (i + 1) + ' of loaf ' + name });
        })(i);
        S('rect', { x: x, y: y, width: w, height: hh, rx: 5, fill: 'none', stroke: '#8A5A2B', 'stroke-width': 3, 'pointer-events': 'none' }, root);
        if (name) L.text(x - 14, y + hh / 2 + 5, name, { 'font-size': 14, fill: '#FFE27A' }, root);
      }
      function toggle(arr, i) {
        if (s.scene === 'add' && !arr[i] && s.nA + s.nB >= s.d) { L.say({ ar: 'امتلأ الرغيف كلُّه!', en: 'The whole loaf is full!' }); return; }
        arr[i] = !arr[i]; L.poke();
      }
      function build() {
        while (root.firstChild) root.removeChild(root.firstChild);
        var d = s.d, nA = s.nA, nB = s.nB, i, g;
        if (s.scene === 'make') {
          var cx = 124, cy = 146, R = 104;
          S('circle', { cx: cx, cy: cy, r: R + 7, fill: '#C98A45' }, root);
          for (i = 0; i < d; i++) (function (i) {
            var a0 = -Math.PI / 2 + i * 2 * Math.PI / d, a1 = a0 + 2 * Math.PI / d, e;
            if (d === 1) e = S('circle', { cx: cx, cy: cy, r: R }, root); else e = S('path', { d: 'M' + cx + ',' + cy + ' L' + (cx + R * Math.cos(a0)) + ',' + (cy + R * Math.sin(a0)) + ' A' + R + ',' + R + ' 0 ' + (d === 2 ? 0 : 0) + ' 1 ' + (cx + R * Math.cos(a1)) + ',' + (cy + R * Math.sin(a1)) + 'Z' }, root);
            L.set(e, { fill: s.A[i] ? '#E4572E' : '#F6D58A', stroke: '#8A5A2B', 'stroke-width': 2 });
            L.tap(e, function () { toggle(s.A, i); }, { ar: 'قطعة ' + L.N(i + 1), en: 'Slice ' + (i + 1) });
          })(i);
          frac(296, 96, nA, d, 40, '#FFE27A');
          L.text(296, 176, { ar: 'أخذتَ', en: 'taken' }, { 'font-size': 12, fill: '#FFE27A' }, root).setAttribute('y', 58);
          L.text(296, 188, { ar: 'من القطع كلِّها', en: 'of all the pieces' }, { 'font-size': 11 }, root).setAttribute('y', 160);
          var gg = gcd(nA, d); if (nA > 0 && gg > 1) { L.text(296, 200, '=', { 'font-size': 20 }, root); frac(296, 232, nA / gg, d / gg, 24); }
          else if (nA === d) L.text(296, 214, { ar: 'فطيرة كاملة', en: 'a whole pie' }, { 'font-size': 12 }, root);
          L.text(124, 280, { ar: 'اضغط على القطع لتأخذها', en: 'Tap slices to take them' }, { 'font-size': 11.5, fill: '#BFD6EA' }, root);
        } else if (s.scene === 'compare') {
          bar(34, 40, 240, 54, d, s.A, '#E4572E', L.T({ ar: 'أ', en: 'A' })); frac(318, 62, nA, d, 22, '#FF9B7A');
          bar(34, 176, 240, 54, s.dB, s.B, '#3BB36D', L.T({ ar: 'ب', en: 'B' })); frac(318, 198, nB, s.dB, 22, '#8BE0AC');
          var c = nA * s.dB - nB * d, v = c > 0 ? { ar: 'أ أكبر من ب', en: 'A is bigger than B' } : c < 0 ? { ar: 'ب أكبر من أ', en: 'B is bigger than A' } : { ar: 'أ و ب متساويان ✓', en: 'A and B are equal ✓' };
          if (!s.hideV) { S('rect', { x: 74, y: 118, width: 160, height: 34, rx: 17, fill: c === 0 ? '#2E7D4F' : '#1B4368', stroke: '#E8B530', 'stroke-width': 1.5 }, root); L.text(154, 141, v, { 'font-size': 14 }, root); }
          if (c !== 0 || s.hideV) { var wA = 240 * nA / d, wB = 240 * nB / s.dB; S('path', { d: 'M' + (34 + wA) + ',98 v10 M' + (34 + wB) + ',172 v-10', stroke: '#FFE27A', 'stroke-width': 2, 'stroke-dasharray': '3 3' }, root); }
        } else {
          bar(34, 22, 240, 42, d, s.A, '#E4572E', L.T({ ar: 'أ', en: 'A' })); frac(318, 36, nA, d, 19, '#FF9B7A');
          L.text(154, 90, '+', { 'font-size': 26, fill: '#FFE27A' }, root);
          bar(34, 100, 240, 42, d, s.B, '#3BB36D', L.T({ ar: 'ب', en: 'B' })); frac(318, 114, nB, d, 19, '#8BE0AC');
          L.text(154, 172, '=', { 'font-size': 26, fill: '#FFE27A' }, root);
          var R2 = []; for (i = 0; i < d; i++) R2[i] = i < nA + nB;
          for (i = 0; i < d; i++) S('rect', { x: 34 + i * 240 / d, y: 186, width: 240 / d, height: 50, fill: i < nA ? '#E4572E' : i < nA + nB ? '#3BB36D' : '#F3E3C3', stroke: '#8A5A2B', 'stroke-width': 1.6 }, root);
          S('rect', { x: 34, y: 186, width: 240, height: 50, rx: 5, fill: 'none', stroke: '#E8B530', 'stroke-width': 3 }, root); frac(318, 204, nA + nB, d, 22, '#FFE27A');
          L.text(154, 264, { ar: 'نجمع البسطَين، والمقامُ يبقى كما هو', en: 'Add the top numbers; the bottom number stays' }, { 'font-size': 11, fill: '#BFD6EA' }, root);
        }
      }
      var cS = L.choice({ key: 'scene', opts: [{ v: 'make', label: { ar: '🍕 اصنع كسرًا', en: '🍕 Make' } }, { v: 'compare', label: { ar: '⚖️ قارِن', en: '⚖️ Compare' } }, { v: 'add', label: { ar: '➕ اجمع', en: '➕ Add' } }], val: 'make', on: function (v) { s.scene = v; vis(); } });
      var cA = L.slider({ key: 'd', label: { ar: '🔪 عدد القطع المتساوية', en: '🔪 Number of equal pieces' }, min: 1, max: 12, step: 1, val: 4, on: function (v) { if (v !== s.d) { s.d = v; s.A = []; if (s.scene === 'add') s.B = []; } } });
      var cB = L.slider({ key: 'dB', label: { ar: '🔪 عدد قطع الرغيف ب', en: '🔪 Pieces in loaf B' }, min: 1, max: 12, step: 1, val: 4, on: function (v) { if (v !== s.dB) { s.dB = v; s.B = []; } } });
      var oA = L.out({ ar: 'الكسر', en: 'Fraction' }), oC = L.out({ ar: 'البسط (فوق)', en: 'Numerator (top)' }), oB = L.out({ ar: 'المقام (تحت)', en: 'Denominator (bottom)' });
      function vis() { cB.row.hidden = s.scene !== 'compare'; if (s.scene === 'add') s.B = s.B.slice(0, s.d); L.poke(); }
      s.set = function (sc, d, nA, dB, nB) { cS.set(sc); cA.set(d); s.d = d; s.A = []; for (var i = 0; i < nA; i++) s.A[i] = true; if (dB) { cB.set(dB); s.dB = dB; } s.B = []; for (i = 0; i < (nB || 0); i++) s.B[i] = true; vis(); };
      s.reset = function () { s.A = []; s.B = []; L.poke(); };
      s.tick = function () {};
      s.draw = function () {
        s.nA = cnt(s.A, s.d); s.nB = cnt(s.B, s.scene === 'add' ? s.d : s.dB);
        var k = [s.scene, s.d, s.dB, s.nA, s.nB, s.A.join(), s.B.join(), s.hideV].join('|'); if (k !== key) { key = k; build(); }
        var n = s.scene === 'add' ? s.nA + s.nB : s.nA;
        oA({ ar: L.N(n) + ' من ' + L.N(s.d), en: n + ' out of ' + s.d }); oB(L.N(s.d)); oC(L.N(n));
      };
      vis(); return s;
    },
    guided: [
      { hi: 'd', pre: function (s) { s.hideV = false; s.set('make', 1, 0); }, t: { ar: 'هذه فطيرةٌ كاملة. حرِّك المؤشّر لتقطِّعها إلى أربع قطعٍ متساوية.', en: 'This is a whole pie. Move the slider to cut it into four equal slices.' },
        ok: function (s) { return s.scene === 'make' && s.d === 4; }, a: { ar: 'أربعُ قطعٍ متساوية. العددُ السفليّ في الكسر يسمّى «المقام»: هو عدد القطع كلِّها.', en: 'Four equal slices. The bottom number of a fraction is the "denominator": how many pieces there are in all.' } },
      { t: { ar: 'اضغط على قطعةٍ واحدة من الفطيرة لتأخذها.', en: 'Tap one slice of the pie to take it.' },
        ok: function (s) { return s.d === 4 && s.nA === 1; }, a: { ar: 'أخذتَ قطعةً من أربع: هذا «رُبع». العددُ العلويّ يسمّى «البسط»: هو ما أخذتَه.', en: 'You took one slice out of four: that is "one quarter". The top number is the "numerator": how many you took.' } },
      { t: { ar: 'خُذ قطعةً ثانية.', en: 'Take a second slice.' },
        ok: function (s) { return s.d === 4 && s.nA === 2; }, a: { ar: 'قطعتان من أربع هما نصفُ الفطيرة تمامًا! «رُبعان» و«نصف» كسران متساويان.', en: 'Two slices out of four is exactly half the pie! "Two quarters" and "one half" are equal fractions.' } },
      { pre: function (s) { s.set('compare', 2, 1, 4, 0); }, t: { ar: 'رغيفان متساويان: «أ» مظلَّلٌ نصفُه. اضغط على قطع الرغيف «ب» حتى يتساوى المظلَّلان.', en: 'Two equal loaves: half of "A" is shaded. Tap pieces of loaf "B" until the shaded parts are equal.' },
        ok: function (s) { return s.scene === 'compare' && s.nA > 0 && s.nA * s.dB === s.nB * s.d; }, a: { ar: 'الكسران متساويان وإن اختلف شكلُهما. كلّما قطَّعنا قطعًا أكثر صارت القطعةُ أصغر.', en: 'The two fractions are equal even though they look different. The more pieces we cut, the smaller each piece is.' } },
      { pre: function (s) { s.set('add', 5, 1, 5, 0); }, t: { ar: 'نجمع الآن! في «أ» خُمسٌ واحد. ظلِّل خُمسَين في «ب» وانظر إلى الناتج.', en: 'Now let us add! "A" has one fifth. Shade two fifths in "B" and look at the answer.' },
        ok: function (s) { return s.scene === 'add' && s.d === 5 && s.nA === 1 && s.nB === 2; }, a: { ar: 'خُمسٌ وخُمسان يساويان ثلاثةَ أخماس. جمعنا البسطَين، وبقي المقامُ خمسةً كما هو.', en: 'One fifth plus two fifths equals three fifths. We added the top numbers, and the bottom number stayed five.' } }
    ],
    challenge: [
      { pre: function (s) { s.hideV = true; s.set('make', 1, 0); }, q: { ar: 'اصنع «ثلاثة أرباع» الفطيرة، ثم اضغط «تحقَّق».', en: 'Make "three quarters" of the pie, then press "Check".' }, ok: function (s) { return s.scene === 'make' && s.nA * 4 === s.d * 3; }, hint: { ar: 'قطِّعها أربع قطع، وخُذ ثلاثًا.', en: 'Cut it into four slices and take three.' }, a: { ar: 'ثلاثةُ أرباع! أحسنت.', en: 'Three quarters! Well done.' } },
      { pre: function (s) { s.set('compare', 2, 1, 3, 1); }, q: { ar: 'انظر إلى الرغيفين: أيُّهما أكبر، النصفُ أم الثُّلث؟', en: 'Look at the two loaves: which is bigger, one half or one third?' }, ans: 0, opts: [{ ar: 'النصف', en: 'One half' }, { ar: 'الثُّلث', en: 'One third' }, { ar: 'متساويان', en: 'They are equal' }], why: { ar: 'النصف أكبر: قسمنا على اثنين فقط، فالقطعةُ أكبر.', en: 'The half is bigger: we only cut into two, so each piece is larger.' } },
      { pre: function (s) { s.set('compare', 3, 2, 6, 0); }, q: { ar: 'ظلِّل من «ب» ما يساوي المظلَّل في «أ» (ثُلثين)، ثم اضغط «تحقَّق».', en: 'Shade as much of "B" as is shaded in "A" (two thirds), then press "Check".' }, ok: function (s) { return s.scene === 'compare' && s.nA * s.dB === s.nB * s.d && s.nA > 0; }, hint: { ar: 'اجعل طولَ المظلَّل في الرغيفين واحدًا.', en: 'Make the shaded length the same in both loaves.' }, a: { ar: 'ثُلثان يساويان أربعةَ أسداس.', en: 'Two thirds equals four sixths.' } },
      { pre: function (s) { s.set('add', 6, 2, 6, 0); }, q: { ar: 'في «أ» سُدسان. ظلِّل في «ب» حتى يصير الناتج خمسةَ أسداس، ثم اضغط «تحقَّق».', en: '"A" has two sixths. Shade "B" until the answer is five sixths, then press "Check".' }, ok: function (s) { return s.scene === 'add' && s.d === 6 && s.nA + s.nB === 5; }, hint: { ar: 'كم سُدسًا ينقص لنصل إلى خمسة؟', en: 'How many sixths are missing to reach five?' }, a: { ar: 'سُدسان + ثلاثة أسداس = خمسة أسداس.', en: 'Two sixths + three sixths = five sixths.' } }
    ]
  });
})();
