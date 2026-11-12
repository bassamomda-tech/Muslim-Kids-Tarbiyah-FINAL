/* atoms.js — الذرّات والروابط: three scenes.
   salt:  drag sodium's outer electron to chlorine → Na⁺‎ and Cl⁻‎ attract → table salt (ionic bond).
   h2:    bring two hydrogen atoms together → they share their two electrons (covalent bond).
   water: drag two hydrogen atoms to an oxygen atom → H₂O. */
(function () {
  var SC = [{ v: 'salt', label: { ar: '🧂 ملح', en: '🧂 Salt' } }, { v: 'h2', label: { ar: '🎈 هيدروجين', en: '🎈 Hydrogen' } }, { v: 'water', label: { ar: '💧 ماء', en: '💧 Water' } }];
  Lab.start({
    id: 'atoms', view: [360, 280],
    title: { ar: 'الذرّات والروابط', en: 'Atoms & bonds' },
    sub: { ar: 'انقل الإلكترونات واصنع ملحًا وماءً.', en: 'Move electrons and make salt and water.' },
    ayah: { text: '﴿إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ﴾', ref: { ar: '[القمر: ٤٩]', en: '[Al-Qamar: 49]' }, mean: 'Indeed, We have created everything in precise measure.',
      wonder: { ar: 'كلُّ ما حولك — الماء والملح والهواء وجسمك — مبنيٌّ من ذرّاتٍ صغيرةٍ جدًّا لا تراها العين، مرتَّبةٍ بمقدارٍ دقيق… فسبحان الخالق!', en: 'Everything around you — water, salt, air and your own body — is built from atoms far too small to see, arranged in exact measure… Glory be to the Creator!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { scene: 'salt', moved: false, ex: 0, ey: 0, drag: false, dist: 170, bonded: false, hd: 190, hb: false, at: [false, false], hp: [[70, 70], [290, 70]] };
      S('rect', { width: 360, height: 280, fill: '#0F2742' }, svg);
      var root = L.g(), cap = L.text(180, 266, '', { 'font-size': 13.5, fill: '#FFE27A' }), dyn = [];
      function ring(g, r) { return S('circle', { r: r, fill: 'none', stroke: 'rgba(255,255,255,.35)', 'stroke-width': 1.2, 'stroke-dasharray': '3 3' }, g); }
      function els(g, r, n, a0, col) { var out = []; for (var i = 0; i < n; i++) { var a = a0 + i * 2 * Math.PI / n; out.push(S('circle', { cx: Math.cos(a) * r, cy: Math.sin(a) * r, r: 4.2, fill: col || '#7FD4FF', stroke: '#fff', 'stroke-width': .8 }, g)); } return out; }
      function nucleus(g, r, col, t) { S('circle', { r: r + 1, fill: col, stroke: '#fff', 'stroke-width': 1.5 }, g); return L.text(0, 4, t, { 'font-size': 11, direction: 'ltr', style: 'unicode-bidi:bidi-override' }, g); }
      var E = {};
      function build() {
        while (root.firstChild) root.removeChild(root.firstChild); E = {}; var g, i;
        if (s.scene === 'salt') {
          E.na = L.g(null, root); ring(E.na, 20); ring(E.na, 36); E.naR = ring(E.na, 54); els(E.na, 20, 2, 0); els(E.na, 36, 8, .39); E.naT = nucleus(E.na, 13, '#8E6BD9', 'Na');
          E.cl = L.g(null, root); ring(E.cl, 20); ring(E.cl, 36); ring(E.cl, 54); els(E.cl, 20, 2, 0); els(E.cl, 36, 8, .39); els(E.cl, 54, 7, Math.PI + 2 * Math.PI / 8); E.clT = nucleus(E.cl, 13, '#2E9E5B', 'Cl');
          E.gap = S('circle', { r: 7, fill: 'none', stroke: '#FFD23F', 'stroke-width': 1.5, 'stroke-dasharray': '2 2' }, root);
          E.arrL = L.text(0, 0, '➡', { 'font-size': 20, fill: '#FFD23F' }, root); E.arrR = L.text(0, 0, '⬅', { 'font-size': 20, fill: '#FFD23F' }, root);
          E.naL = L.text(0, 0, '', { 'font-size': 12 }, root); E.clL = L.text(0, 0, '', { 'font-size': 12 }, root);
          E.e = L.g(null, root); S('circle', { r: 20, fill: 'rgba(255,210,63,.25)' }, E.e); S('circle', { r: 7, fill: '#FFD23F', stroke: '#fff', 'stroke-width': 1.5 }, E.e); L.text(0, 3.5, '−', { 'font-size': 11, fill: '#10243d' }, E.e);
          L.drag(E.e, { start: function () { if (!s.moved) s.drag = true; }, move: function (p) { if (s.drag) { s.ex = L.clamp(p.x, 8, 352); s.ey = L.clamp(p.y, 8, 250); } },
            end: function () { if (!s.drag) return; s.drag = false; var cx = 180 + s.dist / 2, d = Math.hypot(s.ex - cx, s.ey - 128); if (d < 74) { s.moved = true; L.say({ ar: 'انتقل الإلكترون إلى الكلور!', en: 'The electron moved to chlorine!' }); } else L.say({ ar: 'ضَعه على المدار الخارجيّ لذرّة الكلور', en: 'Put it on the outer shell of the chlorine atom' }); } });
          E.e.setAttribute('tabindex', '0'); E.e.setAttribute('aria-label', L.T({ ar: 'الإلكترون الخارجيّ للصوديوم: اسحبه إلى الكلور (أو اضغط Enter)', en: 'Sodium\'s outer electron: drag it to chlorine (or press Enter)' }));
          E.e.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && !s.moved) { e.preventDefault(); s.moved = true; L.poke(); } });
        } else if (s.scene === 'h2') {
          E.h = [0, 1].map(function (k) { g = L.g(null, root); ring(g, 30); nucleus(g, 12, '#E0675A', 'H'); return g; });
          E.he = [0, 1].map(function () { return S('circle', { r: 5.5, fill: '#FFD23F', stroke: '#fff', 'stroke-width': 1 }, root); });
          E.bond = S('ellipse', { cx: 180, cy: 128, rx: 20, ry: 30, fill: 'rgba(255,210,63,.22)', stroke: '#FFD23F', 'stroke-width': 1.5, opacity: 0 }, root);
          S('circle', { r: 34, fill: 'transparent' }, E.h[1]);
          L.drag(E.h[1], { move: function (p) { L.ctl.dist.set(Math.round(L.clamp((p.x - 180) * 2, 56, 220) / 4) * 4); } });
        } else {
          E.o = L.g({ transform: 'translate(180,128)' }, root); ring(E.o, 22); ring(E.o, 44); els(E.o, 22, 2, 0); [-2.38, -2.12, -1.02, -.76, .53, Math.PI - .53].forEach(function (a) { els(E.o, 44, 1, a); }); nucleus(E.o, 14, '#D7263D', 'O');
          E.slot = [[-1, 0], [1, 0]].map(function (k) { return S('circle', { cx: 180 + k[0] * 54, cy: 171, r: 26, fill: 'none', stroke: '#FFD23F', 'stroke-width': 1.5, 'stroke-dasharray': '4 4' }, root); });
          E.wh = [0, 1].map(function (k) { g = L.g(null, root); S('circle', { r: 34, fill: 'transparent' }, g); ring(g, 24); nucleus(g, 11, '#E0675A', 'H'); S('circle', { cx: 0, cy: -24, r: 5, fill: '#FFD23F', stroke: '#fff', 'stroke-width': 1 }, g);
            L.drag(g, { move: function (p) { if (!s.at[k]) s.hp[k] = [L.clamp(p.x, 26, 334), L.clamp(p.y, 26, 240)]; }, end: function () { if (s.at[k]) return; var ok = false; [126, 234].forEach(function (x, j) { if (Math.hypot(s.hp[k][0] - x, s.hp[k][1] - 171) < 42 && !(s.at[1 - k] && s.slotOf[1 - k] === j)) { s.at[k] = true; s.slotOf[k] = j; ok = true; } }); if (!ok) L.say({ ar: 'قرِّبها من إحدى الدائرتين المنقَّطتين', en: 'Bring it to one of the dotted circles' }); } });
            g.setAttribute('tabindex', '0'); g.setAttribute('aria-label', L.T({ ar: 'ذرّة هيدروجين: اسحبها إلى الأكسجين (أو اضغط Enter)', en: 'Hydrogen atom: drag it to the oxygen (or press Enter)' }));
            g.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && !s.at[k]) { e.preventDefault(); s.at[k] = true; s.slotOf[k] = s.at[1 - k] ? 1 - s.slotOf[1 - k] : k; L.poke(); } }); return g; });
        }
      }
      var cScene = L.choice({ key: 'scene', opts: SC, val: 'salt', on: function (v) { s.scene = v; s.reset(true); } });
      var cDist = L.slider({ key: 'dist', label: { ar: '↔ المسافة بين الذرّتين', en: '↔ Distance between the atoms' }, min: 56, max: 220, step: 4, val: 170, fmt: function (v) { return v <= 112 ? { ar: 'قريبتان', en: 'Close' } : v >= 180 ? { ar: 'بعيدتان', en: 'Far' } : { ar: 'متوسّطة', en: 'Medium' }; }, on: function (v) { if (s.scene === 'salt') s.dist = Math.max(112, v); else s.hd = v; } });
      var oA = L.out({ ar: 'الذرّة الأولى', en: 'First atom' }), oB = L.out({ ar: 'الذرّة الثانية', en: 'Second atom' }), oR = L.out({ ar: 'الناتج', en: 'Result' });
      s.slotOf = [0, 1];
      s.reset = function (keep) { s.moved = false; s.drag = false; s.bonded = false; s.hb = false; s.at = [false, false]; s.hp = [[62, 62], [298, 62]]; s.slotOf = [0, 1]; s.dist = 170; s.hd = 190; build(); cDist.row.hidden = s.scene === 'water'; cDist.input.value = s.scene === 'h2' ? 190 : 170; cDist.input.dispatchEvent(new Event('input')); L.poke(); };
      s.go = function (sc) { s.scene = sc; cScene.set(sc); };
      s.tick = function () {};
      s.draw = function () {
        if (s.scene === 'salt') {
          var ax = 180 - s.dist / 2, bx = 180 + s.dist / 2; s.bonded = s.moved && s.dist <= 114;
          E.na.setAttribute('transform', 'translate(' + ax + ',128)'); E.cl.setAttribute('transform', 'translate(' + bx + ',128)');
          E.naR.setAttribute('opacity', s.moved ? .25 : 1);
          var gx = bx + Math.cos(Math.PI) * 54, gy = 128; L.set(E.gap, { cx: gx, cy: gy, opacity: s.moved ? 0 : 1 });
          if (!s.drag) { if (s.moved) { s.ex = gx; s.ey = gy; } else { s.ex = ax + 54; s.ey = 128; } }
          E.e.setAttribute('transform', 'translate(' + s.ex + ',' + s.ey + ')'); E.e.firstChild.setAttribute('opacity', s.moved ? 0 : 1);
          E.naT.textContent = s.moved ? 'Na⁺‎' : 'Na'; E.clT.textContent = s.moved ? 'Cl⁻‎' : 'Cl';
          L.set(E.naL, { x: ax, y: 58 }); L.set(E.clL, { x: bx, y: 58 });
          E.naL.textContent = L.T(s.moved ? { ar: 'صوديوم موجب +', en: 'Sodium, positive +' } : { ar: 'صوديوم', en: 'Sodium' }); E.clL.textContent = L.T(s.moved ? { ar: 'كلور سالب −', en: 'Chlorine, negative −' } : { ar: 'كلور', en: 'Chlorine' });
          var pull = s.moved && !s.bonded ? 1 : 0; L.set(E.arrL, { x: ax + 30, y: 214, opacity: pull }); L.set(E.arrR, { x: bx - 30, y: 214, opacity: pull });
          cap.textContent = L.T(s.bonded ? { ar: '🧂 ملح الطعام NaCl — رابطة أيونيّة', en: '🧂 Table salt NaCl — an ionic bond' } : s.moved ? { ar: 'الموجب والسالب يتجاذبان!', en: 'Positive and negative attract!' } : { ar: 'اسحب الإلكترون الذهبيّ إلى الدائرة المنقَّطة', en: 'Drag the golden electron to the dotted circle' });
          oA(s.moved ? { ar: 'Na⁺‎ فقد إلكترونًا', en: 'Na⁺‎ lost 1 electron' } : { ar: 'Na: ١١ إلكترونًا', en: 'Na: 11 electrons' }); oB(s.moved ? { ar: 'Cl⁻‎ كسب إلكترونًا', en: 'Cl⁻‎ gained 1 electron' } : { ar: 'Cl: ١٧ إلكترونًا', en: 'Cl: 17 electrons' }); oR(s.bonded ? { ar: 'ملح 🧂', en: 'Salt 🧂' } : '–');
        } else if (s.scene === 'h2') {
          var d = s.hd, x1 = 180 - d / 2, x2 = 180 + d / 2; s.hb = d <= 64;
          E.h[0].setAttribute('transform', 'translate(' + x1 + ',128)'); E.h[1].setAttribute('transform', 'translate(' + x2 + ',128)');
          var t = L.clamp((150 - d) / 86, 0, 1); L.set(E.he[0], { cx: L.lerp(x1 - 30, 180, t), cy: L.lerp(128, 116, t) }); L.set(E.he[1], { cx: L.lerp(x2 + 30, 180, t), cy: L.lerp(128, 140, t) });
          E.bond.setAttribute('opacity', s.hb ? 1 : 0);
          cap.textContent = L.T(s.hb ? { ar: '🎈 جزيء هيدروجين H₂ — رابطة تساهميّة', en: '🎈 A hydrogen molecule H₂ — a covalent bond' } : { ar: 'قرِّب الذرّتين: اسحب الذرّة أو حرِّك المؤشّر', en: 'Bring the atoms together: drag one or use the slider' });
          oA({ ar: 'H: إلكترون واحد', en: 'H: 1 electron' }); oB({ ar: 'H: إلكترون واحد', en: 'H: 1 electron' }); oR(s.hb ? { ar: 'H₂ تتشاركان', en: 'H₂ sharing' } : '–');
        } else {
          var n = 0; [0, 1].forEach(function (k) { var p = s.hp[k]; if (s.at[k]) { p = [s.slotOf[k] ? 234 : 126, 171]; n++; } E.wh[k].setAttribute('transform', 'translate(' + p[0] + ',' + p[1] + ')' + (s.at[k] ? ' rotate(' + (s.slotOf[k] ? -52 : 52) + ')' : '')); });
          E.slot.forEach(function (e, j) { e.setAttribute('opacity', (s.at[0] && s.slotOf[0] === j) || (s.at[1] && s.slotOf[1] === j) ? 0 : 1); });
          s.w = n === 2;
          cap.textContent = L.T(n === 2 ? { ar: '💧 جزيء ماء H₂O !', en: '💧 A water molecule, H₂O!' } : { ar: 'اسحب ذرّتَي الهيدروجين إلى الأكسجين', en: 'Drag both hydrogen atoms to the oxygen' });
          oA({ ar: 'O: أكسجين', en: 'O: oxygen' }); oB({ ar: 'H مرتبطة: ' + L.N(n), en: 'H attached: ' + n }); oR(n === 2 ? { ar: 'ماء 💧', en: 'Water 💧' } : '–');
        }
      };
      s.reset(); return s;
    },
    guided: [
      { pre: function (s) { s.go('salt'); s.reset(); }, t: { ar: 'في ذرّة الصوديوم (Na) إلكترونٌ وحيد في مداره الخارجيّ. اسحب هذا الإلكترون الذهبيّ إلى ذرّة الكلور (Cl).', en: 'The sodium atom (Na) has one lonely electron in its outer shell. Drag that golden electron to the chlorine atom (Cl).' },
        ok: function (s) { return s.moved; }, a: { ar: 'الصوديوم فقدَ إلكترونًا سالبًا فصار موجبًا (Na⁺‎)، والكلور كسبه فصار سالبًا (Cl⁻‎). الذرّةُ المشحونة تسمّى «أيونًا».', en: 'Sodium lost a negative electron and became positive (Na⁺‎); chlorine gained it and became negative (Cl⁻‎). A charged atom is called an "ion".' } },
      { hi: 'dist', t: { ar: 'قرِّب الأيونين بمؤشّر «المسافة» حتى يلتصقا.', en: 'Bring the two ions together with the "Distance" slider until they stick.' },
        ok: function (s) { return s.bonded; }, a: { ar: 'الموجبُ والسالبُ يتجاذبان كالمغناطيس! هذه «رابطة أيونيّة»، وبها يتكوّن ملح الطعام الذي نأكله.', en: 'Positive and negative attract like magnets! This is an "ionic bond", and it makes the table salt we eat.' } },
      { hi: 'dist', pre: function (s) { s.go('h2'); s.reset(); }, t: { ar: 'هاتان ذرّتا هيدروجين (H)، لكلٍّ منهما إلكترونٌ واحد. قرِّبهما حتى تلتقيا.', en: 'These are two hydrogen atoms (H), each with one electron. Bring them together until they meet.' },
        ok: function (s) { return s.hb; }, a: { ar: 'كلُّ ذرّةٍ تحتاج إلكترونين، فلم تأخذ إحداهما من الأخرى… بل تشاركتا! هذه «رابطة تساهميّة»، والناتج جزيء H₂.', en: 'Each atom wants two electrons, so neither took from the other… they shared! This is a "covalent bond", and the result is an H₂ molecule.' } },
      { pre: function (s) { s.go('water'); s.reset(); }, t: { ar: 'اسحب ذرّتَي الهيدروجين إلى الدائرتين المنقَّطتين عند ذرّة الأكسجين (O).', en: 'Drag the two hydrogen atoms to the dotted circles at the oxygen atom (O).' },
        ok: function (s) { return s.w; }, a: { ar: 'صنعتَ جزيءَ ماء H₂O: ذرّةُ أكسجين تتشارك الإلكترونات مع ذرّتَي هيدروجين. في قطرة الماء الواحدة عددٌ هائل من هذه الجزيئات!', en: 'You made a water molecule, H₂O: one oxygen atom sharing electrons with two hydrogen atoms. A single drop of water holds a huge number of these molecules!' } }
    ],
    challenge: [
      { pre: function (s) { s.go('salt'); s.reset(); }, q: { ar: 'إذا أعطت ذرّةُ الصوديوم إلكترونًا لغيرها، فماذا تصير؟', en: 'If a sodium atom gives an electron away, what does it become?' }, ans: 0, opts: [{ ar: 'موجبة (+)', en: 'Positive (+)' }, { ar: 'سالبة (−)', en: 'Negative (−)' }, { ar: 'لا تتغيّر', en: 'It does not change' }], why: { ar: 'فقدت شحنةً سالبة فصارت موجبة.', en: 'It lost a negative charge, so it became positive.' } },
      { auto: true, pre: function (s) { s.go('salt'); s.reset(); }, q: { ar: 'اصنع ملحَ الطعام من الصوديوم والكلور.', en: 'Make table salt from sodium and chlorine.' }, ok: function (s) { return s.scene === 'salt' && s.bonded; }, a: { ar: 'أحسنت! نقلتَ الإلكترون ثم قرَّبتَ الأيونين.', en: 'Well done! You moved the electron, then brought the ions together.' } },
      { q: { ar: 'كم ذرّةَ هيدروجين في جزيء الماء H₂O؟', en: 'How many hydrogen atoms are in a water molecule, H₂O?' }, ans: 1, opts: [{ ar: 'واحدة', en: 'One' }, { ar: 'اثنتان', en: 'Two' }, { ar: 'ثلاث', en: 'Three' }], why: { ar: 'الرقم ٢ الصغير بعد H يعني ذرّتين.', en: 'The small 2 after H means two atoms.' } },
      { auto: true, pre: function (s) { s.go('water'); s.reset(); }, q: { ar: 'اصنع جزيءَ ماء.', en: 'Make a water molecule.' }, ok: function (s) { return s.scene === 'water' && s.w; }, a: { ar: 'جزيءُ ماءٍ كامل!', en: 'A complete water molecule!' } },
      { q: { ar: 'في جزيء الهيدروجين H₂، ماذا تفعل الذرّتان بإلكترونَيهما؟', en: 'In a hydrogen molecule, H₂, what do the two atoms do with their electrons?' }, ans: 2, opts: [{ ar: 'تأخذهما ذرّةٌ واحدة', en: 'One atom takes both' }, { ar: 'ترميانهما بعيدًا', en: 'They throw them away' }, { ar: 'تتشاركان فيهما', en: 'They share them' }], why: { ar: 'المشاركة تصنع الرابطة التساهميّة.', en: 'Sharing makes the covalent bond.' } }
    ]
  });
})();
