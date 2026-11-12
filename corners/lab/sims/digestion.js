/* digestion.js — رحلة لقمة الطعام: the child drags a bite along the food path
   mouth → oesophagus → stomach → small intestine → blood. Organs are simple friendly shapes (no face). */
(function () {
  var PLACE = [{ ar: 'الفم', en: 'Mouth' }, { ar: 'المريء', en: 'Oesophagus' }, { ar: 'المعدة', en: 'Stomach' }, { ar: 'الأمعاء الدقيقة', en: 'Small intestine' }, { ar: 'وصل الغذاء إلى الدم', en: 'Food reached the blood' }];
  Lab.start({
    id: 'digestion', view: [360, 330],
    title: { ar: 'رحلة لقمة الطعام', en: 'The journey of a bite' },
    sub: { ar: 'اسحب اللقمة وساعِدها في كلّ محطّة.', en: 'Drag the bite and help it at every stop.' },
    ayah: { text: '﴿فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ﴾', ref: { ar: '[عبس: ٢٤]', en: '[Abasa: 24]' }, mean: 'Then let man look at his food.',
      wonder: { ar: 'لقمةٌ صغيرة تمرّ في مصنعٍ عجيب داخل جسمك، فتصير طاقةً تلعب بها وتتعلَّم… فقُل بعد طعامك: الحمد لله!', en: 'A small bite passes through an amazing factory inside your body and becomes energy to play and learn… so after eating say: Alhamdulillah!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { p: 0, chew: 0, churn: 0, nut: 0, sent: false, sentT: 0 };
      S('rect', { width: 360, height: 330, fill: '#12324F' }, svg);
      /* simple body outline: head (no features), neck, torso */
      S('path', { d: 'M180,8 c26,0 42,20 42,44 c0,18 -9,31 -20,38 v14 c38,6 62,26 62,58 v168 h-168 v-168 c0,-32 24,-52 62,-58 v-14 c-11,-7 -20,-20 -20,-38 c0,-24 16,-44 42,-44Z', fill: '#F1D3B5', stroke: '#D9B38C', 'stroke-width': 2 }, svg);
      /* mouth cavity */
      S('rect', { x: 157, y: 49, width: 48, height: 25, rx: 11, fill: '#C7647A' }, svg);
      var teethT = S('path', { d: 'M163,49 h36 v5 h-6 v-3 h-4 v3 h-6 v-3 h-4 v3 h-6 v-3 h-4 v3 h-6Z', fill: '#fff' }, svg), teethB = S('path', { d: 'M163,74 h36 v-5 h-6 v3 h-4 v-3 h-6 v3 h-4 v-3 h-6 v3 h-4 v-3 h-6Z', fill: '#fff' }, svg);
      /* food path (centre line) */
      var D = 'M181,61 L181,150 C181,172 150,168 146,186 C142,204 170,214 196,206 L226,214 C240,232 120,222 124,240 C128,256 236,246 236,262 C236,278 124,268 124,284 C124,298 200,294 228,296';
      S('path', { d: 'M181,76 L181,150', fill: 'none', stroke: '#E79AA5', 'stroke-width': 17, 'stroke-linecap': 'round' }, svg);   // oesophagus
      S('path', { d: 'M178,146 C208,140 222,168 214,196 C206,220 160,224 142,204 C128,188 150,160 178,146Z', fill: '#EE8C7A', stroke: '#C96A5A', 'stroke-width': 2 }, svg);   // stomach
      var juice = S('path', { d: 'M150,192 C165,186 196,186 212,192 C204,216 162,220 146,202Z', fill: '#F6D365', opacity: 0 }, svg);
      S('path', { d: 'M214,208 L226,214 C240,232 120,222 124,240 C128,256 236,246 236,262 C236,278 124,268 124,284 C124,298 200,294 228,296', fill: 'none', stroke: '#F3A9B8', 'stroke-width': 17, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, svg);   // small intestine
      S('path', { d: 'M228,296 h26', fill: 'none', stroke: '#C98F6B', 'stroke-width': 17, 'stroke-linecap': 'round', opacity: .8 }, svg);
      /* blood vessel beside the intestine, up to the heart */
      var vessel = S('path', { d: 'M100,292 C92,250 96,210 108,170 C112,150 124,134 138,128', fill: 'none', stroke: '#D7263D', 'stroke-width': 6, 'stroke-linecap': 'round' }, svg);
      var heart = S('path', { d: 'M140,118 c-7,-10 -22,-3 -16,9 c3,6 10,10 16,15 c6,-5 13,-9 16,-15 c6,-12 -9,-19 -16,-9Z', fill: '#D7263D' }, svg), glow = S('circle', { cx: 180, cy: 190, r: 150, fill: '#FFD23F', opacity: 0 }, svg);
      var lab = L.g(); function tag(x, y, t, anchor, fs) { L.text(x, y, t, { 'font-size': fs || 11.5, fill: '#fff', 'text-anchor': anchor || 'middle', stroke: '#12324F', 'stroke-width': 3, 'paint-order': 'stroke' }, lab); }
      tag(262, 66, PLACE[0]); tag(234, 122, PLACE[1]); tag(250, 172, PLACE[2]); tag(312, 252, PLACE[3]); tag(52, 232, { ar: 'الدم', en: 'Blood' }); tag(310, 300, { ar: 'الأمعاء الغليظة ⬅', en: '➡ large intestine' }, null, 10.5);
      var track = S('path', { d: D, fill: 'none', stroke: 'none' }, svg), LEN = track.getTotalLength(), P_ST = 0, P_END = LEN;
      for (var i = 0; i <= LEN; i += 2) { var q = track.getPointAtLength(i); if (q.y >= 190 && !P_ST) P_ST = i; }
      var nuts = []; for (i = 0; i < 6; i++) nuts.push({ at: P_ST + 60 + (LEN - P_ST - 80) * i / 5, e: S('circle', { r: 5, fill: '#FFD23F', stroke: '#B8860B', 'stroke-width': 1.2, opacity: 0 }, svg), t: 0, x: 0, y: 0 });
      var bite = L.g(), halo = S('circle', { r: 21, fill: '#FFD23F', opacity: .28 }, bite), bits = []; for (i = 0; i < 5; i++) bits.push(S('circle', { r: 6 }, bite));
      var VLEN = vessel.getTotalLength();
      function gate() { return s.chew < 3 ? 0 : s.churn < 3 ? P_ST : P_END; }
      L.drag(bite, { move: function (pt) {
        var best = s.p, bd = 1e9, lim = gate(); for (var l = Math.max(0, s.p - 30); l <= Math.min(lim, s.p + 46); l += 2) { var q = track.getPointAtLength(l), d = (q.x - pt.x) * (q.x - pt.x) + (q.y - pt.y) * (q.y - pt.y); if (d < bd) { bd = d; best = l; } }
        if (best > s.p) s.p = best;
        if (s.p >= lim - 1 && lim < P_END && bd > 900) L.say(lim === 0 ? { ar: 'امضغ اللقمة أوّلًا! 🦷', en: 'Chew the bite first! 🦷' } : { ar: 'اخلطها في المعدة أوّلًا! 🌀', en: 'Mix it in the stomach first! 🌀' });
      } });
      bite.setAttribute('tabindex', '0'); bite.setAttribute('aria-label', L.T({ ar: 'اللقمة: اسحبها أو استعمل السهم لأسفل', en: 'The bite: drag it, or use the down arrow' }));
      bite.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); s.p = Math.min(gate(), s.p + 14); L.poke(); } });
      var row = L.row(), chewT = 0, churnT = 0;
      var bChew = L.button({ key: 'chew', into: row, label: { ar: '🦷 امضغ', en: '🦷 Chew' }, on: function () { if (s.p < 4 && s.chew < 3) { s.chew++; chewT = 1; if (s.chew === 3) L.say({ ar: 'صارت اللقمة ليّنة — اسحبها إلى أسفل', en: 'The bite is soft now — drag it down' }); } } });
      var bChurn = L.button({ key: 'churn', into: row, label: { ar: '🌀 اخلط في المعدة', en: '🌀 Mix in the stomach' }, on: function () { if (s.p >= P_ST - 1 && s.churn < 3) { s.churn++; churnT = 1; } } });
      var bSend = L.button({ key: 'send', label: { ar: '❤️ وزِّع الغذاء على الجسم', en: '❤️ Send the food round the body' }, on: function () { if (s.nut >= 6) s.sent = true; } });
      var oPl = L.out({ ar: '📍 أين اللقمة؟', en: '📍 Where is the bite?' }), oNu = L.out({ ar: '✨ غذاء وصل الدم', en: '✨ Food in the blood' });
      s.P_ST = P_ST; s.P_END = P_END; s.pos = function (l) { var q = track.getPointAtLength(l); return [q.x, q.y]; };
      s.reset = function () { s.p = 0; s.chew = s.churn = s.nut = 0; s.sent = false; s.sentT = 0; nuts.forEach(function (n) { n.t = 0; }); L.poke(); };
      s.place = function () { return s.p < 12 ? 0 : s.p < P_ST - 1 ? 1 : s.p < P_ST + 26 ? 2 : (s.p >= P_END - 2 && s.nut >= 6) ? 4 : 3; };
      s.tick = function (dt) {
        chewT = Math.max(0, chewT - dt * 3); churnT = Math.max(0, churnT - dt * 1.6);
        s.nut = 0; nuts.forEach(function (n) { if (s.p >= n.at && n.t < 1) n.t = Math.min(1, n.t + dt * 1.1); if (n.t >= 1) s.nut++; });
        if (s.sent && s.sentT < 1) s.sentT = Math.min(1, s.sentT + dt * .5);
      };
      s.draw = function () {
        var q = track.getPointAtLength(s.p), st = s.churn >= 3 ? 2 : s.chew >= 3 ? 1 : 0, shrink = st === 2 ? 1 - .55 * L.clamp((s.p - P_ST) / (P_END - P_ST), 0, 1) : 1;
        var wob = Math.sin(churnT * 12) * 5 * churnT;
        bite.setAttribute('transform', 'translate(' + (q.x + wob) + ',' + q.y + ')');
        var sp = (st === 0 ? 2.2 + s.chew * 1.6 : 6.5) * shrink, col = st === 2 ? '#E8A33D' : '#B5651D';
        bits.forEach(function (b, i) { var a = i * 1.257; L.set(b, { cx: i ? Math.cos(a) * sp : 0, cy: i ? Math.sin(a) * sp : 0, r: (st === 0 ? 8.5 - s.chew * 1.1 : 5.2) * shrink, fill: col, stroke: st === 2 ? 'none' : '#7A3F10', 'stroke-width': 1 }); });
        halo.setAttribute('opacity', s.p >= P_END - 2 ? 0 : .3);
        teethT.setAttribute('transform', 'translate(0,' + chewT * 4 + ')'); teethB.setAttribute('transform', 'translate(0,' + -chewT * 4 + ')');
        juice.setAttribute('opacity', s.p >= P_ST - 20 ? .35 + .2 * s.churn : 0);
        nuts.forEach(function (n, i) {
          if (!n.t) { n.e.setAttribute('opacity', 0); return; } var a = track.getPointAtLength(n.at), vl = VLEN * (.05 + i * .08), b = vessel.getPointAtLength(vl), x = L.lerp(a.x, b.x, n.t), y = L.lerp(a.y, b.y, n.t);
          if (s.sent) { var c = vessel.getPointAtLength(L.lerp(vl, VLEN, s.sentT)); x = c.x; y = c.y; }
          L.set(n.e, { cx: x, cy: y, opacity: s.sentT >= 1 ? 0 : 1 });
        });
        glow.setAttribute('opacity', s.sentT * .22); heart.setAttribute('transform', s.sent && s.sentT < 1 ? 'translate(140,126) scale(' + (1 + .12 * Math.sin(s.sentT * 25)) + ') translate(-140,-126)' : '');
        bChew.el.disabled = !(s.p < 4 && s.chew < 3); bChurn.el.disabled = !(s.p >= P_ST - 1 && s.churn < 3); bSend.el.disabled = !(s.nut >= 6 && !s.sent);
        oPl(PLACE[s.place()]); oNu(L.N(s.nut) + ' / ' + L.N(6));
      };
      return s;
    },
    guided: [
      { hi: 'chew', pre: function (s) { s.reset(); }, t: { ar: 'اللقمةُ في الفم. اضغط «امضغ» ثلاث مرّات.', en: 'The bite is in the mouth. Press "Chew" three times.' },
        ok: function (s) { return s.chew >= 3; }, a: { ar: 'الأسنانُ تقطِّع الطعام قطعًا صغيرة، واللعابُ يليِّنه ويبدأ هضمَه. لذلك نمضغ جيّدًا ولا نستعجل.', en: 'Teeth cut the food into small pieces, and saliva softens it and starts digesting it. That is why we chew well and do not rush.' } },
      { t: { ar: 'اسحب اللقمة (الدائرة المضيئة) إلى أسفل عبر المريء حتى تصل المعدة.', en: 'Drag the bite (the glowing circle) down through the oesophagus until it reaches the stomach.' },
        ok: function (s) { return s.p >= s.P_ST - 1; }, a: { ar: 'المريءُ أنبوبٌ عضلاتُه تدفع الطعام نحو المعدة — حتى لو كنتَ مستلقيًا!', en: 'The oesophagus is a tube whose muscles push food to the stomach — even if you are lying down!' } },
      { hi: 'churn', t: { ar: 'اضغط «اخلط في المعدة» ثلاث مرّات.', en: 'Press "Mix in the stomach" three times.' },
        ok: function (s) { return s.churn >= 3; }, a: { ar: 'المعدةُ تعصر الطعام وتخلطه بعصارتها حتى يصير سائلًا كالحساء.', en: 'The stomach squeezes the food and mixes it with its juices until it becomes liquid like soup.' } },
      { t: { ar: 'اسحب الطعام عبر الأمعاء الدقيقة الملتوية حتى نهايتها، وراقِب الحبّات الذهبيّة.', en: 'Drag the food through the winding small intestine to its end, and watch the golden dots.' },
        ok: function (s) { return s.p >= s.P_END - 2 && s.nut >= 6; }, a: { ar: 'جدارُ الأمعاء الدقيقة يمتصّ الغذاء المفيد (الحبّات الذهبيّة) إلى الدم. وما لا يحتاجه الجسم يكمل طريقه إلى الأمعاء الغليظة.', en: 'The wall of the small intestine absorbs the useful food (the golden dots) into the blood. What the body does not need moves on to the large intestine.' } },
      { hi: 'send', t: { ar: 'اضغط «وزِّع الغذاء على الجسم».', en: 'Press "Send the food round the body".' },
        ok: function (s) { return s.sentT >= 1; }, a: { ar: 'القلبُ يضخّ الدم فيحمل الغذاء إلى كلّ جزءٍ من جسمك: طاقةٌ للّعب والتعلُّم والنموّ!', en: 'The heart pumps the blood, which carries the food to every part of your body: energy to play, learn and grow!' } }
    ],
    challenge: [
      { q: { ar: 'أين يبدأ هضمُ الطعام؟', en: 'Where does digestion begin?' }, ans: 2, opts: [{ ar: 'في المعدة', en: 'In the stomach' }, { ar: 'في الأمعاء', en: 'In the intestine' }, { ar: 'في الفم', en: 'In the mouth' }], why: { ar: 'يبدأ في الفم: بالأسنان واللعاب.', en: 'It begins in the mouth: with teeth and saliva.' } },
      { auto: true, pre: function (s) { s.reset(); }, q: { ar: 'أوصِل هذه اللقمة إلى المعدة.', en: 'Get this bite to the stomach.' }, ok: function (s) { return s.p >= s.P_ST - 1; }, a: { ar: 'أحسنت! مضغتَها أوّلًا ثم نزلتْ في المريء.', en: 'Well done! You chewed it first, then it went down the oesophagus.' } },
      { q: { ar: 'أيُّ عضوٍ يمتصّ الغذاء إلى الدم؟', en: 'Which organ absorbs food into the blood?' }, ans: 0, opts: [{ ar: 'الأمعاء الدقيقة', en: 'The small intestine' }, { ar: 'المريء', en: 'The oesophagus' }, { ar: 'الفم', en: 'The mouth' }], why: { ar: 'الأمعاء الدقيقة طويلة جدًّا لتمتصّ أكبر قدرٍ من الغذاء.', en: 'The small intestine is very long so it can absorb as much food as possible.' } },
      { auto: true, q: { ar: 'أكمِل الرحلة: أوصِل الغذاء كلَّه إلى الدم.', en: 'Finish the journey: get all the food into the blood.' }, ok: function (s) { return s.nut >= 6; }, a: { ar: 'ممتاز! ستُّ حبّاتٍ من الغذاء صارت في الدم.', en: 'Excellent! Six bits of food are now in the blood.' } },
      { q: { ar: 'لماذا نمضغ الطعام جيّدًا؟', en: 'Why do we chew food well?' }, ans: 1, opts: [{ ar: 'ليصير لونُه أجمل', en: 'To make its colour nicer' }, { ar: 'ليسهُل هضمُه على المعدة', en: 'To make it easier for the stomach to digest' }, { ar: 'لا فائدة من المضغ', en: 'Chewing is no use' }], why: { ar: 'القطع الصغيرة الليّنة أسهل هضمًا.', en: 'Small, soft pieces are easier to digest.' } }
    ]
  });
})();
