/* heart.js — القلب والدورة الدموية: tap the heart to make it beat; blood flows heart → lungs → heart → body → heart.
   Blue = blood that has given away its oxygen (drawn blue only to tell it apart), red = blood full of oxygen. */
(function () {
  var EX = [{ ar: '🛋️ راحة', en: '🛋️ Resting' }, { ar: '🚶 مشي', en: '🚶 Walking' }, { ar: '🏃 جري', en: '🏃 Running' }], BPM = [80, 115, 160];
  Lab.start({
    id: 'heart', view: [360, 330], bar: { step: false },
    title: { ar: 'القلب والدورة الدموية', en: 'The heart & blood circulation' },
    sub: { ar: 'اضغط على القلب ليَنبض، وتابِع رحلة الدم.', en: 'Tap the heart to make it beat, and follow the blood.' },
    ayah: { text: '﴿وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ﴾', ref: { ar: '[الذاريات: ٢١]', en: '[Adh-Dhariyat: 21]' }, mean: 'And in yourselves — do you not see?',
      wonder: { ar: 'قلبُك بحجم قبضة يدك، ينبض نحو مئة ألف نبضةٍ كلَّ يوم دون أن تأمره ودون أن يرتاح… فسبحان مَن خلقه وسوّاه!', en: 'Your heart is the size of your fist and beats about a hundred thousand times every day, without you telling it and without a rest… Glory be to the One who made it!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { beats: 0, v: 0, off: 0, auto: false, ex: 0, bt: 0, timer: 0, taps: [], bpm: 0 };
      S('rect', { width: 360, height: 330, fill: '#12324F' }, svg);
      var D = 'M166,172 C118,158 76,124 108,82 C128,54 232,54 252,82 C284,124 242,158 194,172 C262,198 304,250 252,284 C222,304 138,304 108,284 C56,250 98,198 166,172Z';
      /* lungs + body behind the vessels */
      S('ellipse', { cx: 128, cy: 72, rx: 46, ry: 36, fill: '#F2A7B8', stroke: '#D97F96', 'stroke-width': 2 }, svg); S('ellipse', { cx: 232, cy: 72, rx: 46, ry: 36, fill: '#F2A7B8', stroke: '#D97F96', 'stroke-width': 2 }, svg);
      S('rect', { x: 96, y: 262, width: 168, height: 44, rx: 20, fill: '#F1D3B5', stroke: '#D9B38C', 'stroke-width': 2 }, svg);
      L.text(180, 17, { ar: 'الرئتان: هنا يأخذ الدمُ الأكسجين', en: 'Lungs: blood picks up oxygen here' }, { 'font-size': 11.5 });
      L.text(180, 324, { ar: 'الجسم: هنا يعطي الدمُ الأكسجين', en: 'Body: blood gives its oxygen here' }, { 'font-size': 11.5 });
      S('path', { d: D, fill: 'none', stroke: '#0B2238', 'stroke-width': 17 }, svg);
      var track = S('path', { d: D, fill: 'none', stroke: '#2A4A6B', 'stroke-width': 13 }, svg), LEN = track.getTotalLength(), l1 = 0, l2 = 0, b1 = 1e9, b2 = 1e9;
      for (var i = 0; i < LEN; i += 2) { var q = track.getPointAtLength(i), d1 = Math.abs(q.x - 180) + Math.abs(q.y - 60), d2 = Math.abs(q.x - 180) + Math.abs(q.y - 300); if (d1 < b1) { b1 = d1; l1 = i; } if (d2 < b2) { b2 = d2; l2 = i; } }
      var dots = []; for (i = 0; i < 26; i++) dots.push(S('circle', { r: 5.2, stroke: '#fff', 'stroke-width': .8 }, svg));
      /* the heart: two halves */
      var hg = L.g({ transform: 'translate(180,172)' }), hs = L.g(null, hg);
      S('path', { d: 'M0,-14 C-12,-36 -48,-22 -38,6 C-32,24 -12,34 0,46Z', fill: '#3F7FD9', stroke: '#fff', 'stroke-width': 2 }, hs);
      S('path', { d: 'M0,-14 C12,-36 48,-22 38,6 C32,24 12,34 0,46Z', fill: '#E0364F', stroke: '#fff', 'stroke-width': 2 }, hs);
      var hit = S('circle', { r: 44, cy: 6, fill: 'transparent' }, hg);
      L.text(180, 181, { ar: 'القلب', en: 'Heart' }, { 'font-size': 13, stroke: '#3A1020', 'stroke-width': 3, 'paint-order': 'stroke' });
      L.text(46, 176, { ar: 'إلى الرئتين ⬆', en: 'To the lungs ⬆' }, { 'font-size': 10, fill: '#9CC4FF' }); L.text(316, 176, { ar: '⬇ من الرئتين', en: '⬇ From the lungs' }, { 'font-size': 10, fill: '#FF9DAA' });
      function beat(manual) { s.beats++; s.v += 105; s.bt = 1; if (manual) { var t = performance.now(); s.taps.push(t); if (s.taps.length > 4) s.taps.shift(); } }
      L.tap(hit, function () { if (!s.auto) beat(true); else L.say({ ar: 'القلب ينبض وحده الآن', en: 'The heart is beating by itself now' }); }, { ar: 'القلب: اضغط ليَنبض', en: 'The heart: tap to make it beat' });
      var oB = L.out({ ar: '💓 عدد النبضات', en: '💓 Beats' }), oR = L.out({ ar: '⏱️ نبضة في الدقيقة', en: '⏱️ Beats per minute' });
      var row = L.row();
      L.button({ key: 'beat', into: row, label: { ar: '💓 نبضة', en: '💓 Beat' }, on: function () { if (!s.auto) beat(true); } });
      L.toggle({ key: 'auto', into: row, label: { ar: '🔁 نبض تلقائي', en: '🔁 Beat by itself' }, labelOn: { ar: '🔁 ينبض وحده', en: '🔁 Beating by itself' }, val: false, on: function (v) { s.auto = v; s.timer = 0; s.taps = []; } });
      L.slider({ key: 'ex', label: { ar: 'ماذا يفعل الجسم؟', en: 'What is the body doing?' }, min: 0, max: 2, step: 1, val: 0, fmt: function (v) { return EX[v]; }, on: function (v) { s.ex = v; } });
      s.reset = function () { s.beats = 0; s.v = 0; s.off = 0; s.taps = []; L.ctl.auto.set(false); L.ctl.ex.set(0); L.poke(); };
      s.tick = function (dt) {
        if (s.auto) { s.timer -= dt; if (s.timer <= 0) { s.timer += 60 / BPM[s.ex]; beat(false); } }
        s.v *= Math.exp(-3.2 * dt); s.off = (s.off + s.v * dt * (s.auto ? .6 + s.ex * .35 : 1)) % LEN; s.bt = Math.max(0, s.bt - dt * 4);
        if (s.auto) s.bpm = BPM[s.ex]; else if (s.taps.length >= 2 && performance.now() - s.taps[s.taps.length - 1] < 3000) s.bpm = Math.round(60000 * (s.taps.length - 1) / (s.taps[s.taps.length - 1] - s.taps[0])); else s.bpm = 0;
      };
      s.draw = function () {
        for (var i = 0; i < 26; i++) { var l = (s.off + i * LEN / 26) % LEN, q = track.getPointAtLength(l), red = l >= l1 && l < l2; L.set(dots[i], { cx: q.x, cy: q.y, fill: red ? '#F0475F' : '#4A90E8' }); }
        hs.setAttribute('transform', 'scale(' + (1 + .13 * s.bt) + ')');
        oB(L.N(s.beats)); oR(s.bpm ? L.N(Math.min(s.bpm, 220)) : '–');
      };
      return s;
    },
    guided: [
      { pre: function (s) { s.reset(); }, t: { ar: 'اضغط على القلب في وسط الصورة ليَنبض نبضةً واحدة.', en: 'Tap the heart in the middle of the picture to make it beat once.' },
        ok: function (s) { return s.beats >= 1; }, a: { ar: 'مع كلّ نبضةٍ ينقبض القلب فيدفع الدم في الأوعية. القلبُ مضخّةٌ من عضلٍ قويّ.', en: 'With each beat the heart squeezes and pushes blood through the vessels. The heart is a pump made of strong muscle.' } },
      { t: { ar: 'اضغط ستَّ نبضاتٍ أخرى، وتابِع نقطةً زرقاء وهي تصعد إلى الرئتين.', en: 'Tap six more beats, and follow a blue dot as it goes up to the lungs.' },
        ok: function (s) { return s.beats >= 7; }, a: { ar: 'الجانبُ الأيمن من القلب يرسل الدم إلى الرئتين ليأخذ الأكسجين فيصير أحمر زاهيًا. (نرسمه أزرق للتمييز فقط؛ دمُك أحمر دائمًا.)', en: 'The right side of the heart sends blood to the lungs to pick up oxygen, and it becomes bright red. (We only draw it blue to tell it apart; your blood is always red.)' } },
      { t: { ar: 'واصِل الضغط ستَّ نبضات، وتابِع نقطةً حمراء وهي تنزل إلى الجسم.', en: 'Keep tapping six more beats, and follow a red dot as it goes down to the body.' },
        ok: function (s) { return s.beats >= 13; }, a: { ar: 'الجانبُ الأيسر يضخّ الدم الغنيَّ بالأكسجين إلى الجسم كلِّه. يأخذ الجسمُ الأكسجين، ثم يعود الدم إلى القلب ليبدأ من جديد.', en: 'The left side pumps the oxygen-rich blood to the whole body. The body takes the oxygen, then the blood returns to the heart to start again.' } },
      { hi: 'auto', t: { ar: 'تعبتَ من الضغط؟ اضغط «نبض تلقائي».', en: 'Tired of tapping? Press "Beat by itself".' },
        ok: function (s) { return s.auto; }, a: { ar: 'قلبُك الحقيقيّ ينبض وحده ليلًا ونهارًا — حتى وأنت نائم — دون أن تفكِّر فيه.', en: 'Your real heart beats by itself day and night — even when you sleep — without you thinking about it.' } },
      { hi: 'ex', t: { ar: 'حرِّك المؤشّر إلى «جري» وراقِب القلب.', en: 'Move the slider to "Running" and watch the heart.' },
        ok: function (s) { return s.ex === 2; }, a: { ar: 'عند الجري تحتاج عضلاتُك أكسجينًا أكثر، فيُسرع القلب ليوصله إليها. ضع يدك على صدرك بعد الجري وتحسَّس!', en: 'When you run your muscles need more oxygen, so the heart speeds up to deliver it. Put your hand on your chest after running and feel it!' } }
    ],
    challenge: [
      { auto: true, pre: function (s) { s.reset(); }, q: { ar: 'اجعل القلب ينبض عشر نبضاتٍ بيدك.', en: 'Make the heart beat ten times by hand.' }, ok: function (s) { return s.beats >= 10 && !s.auto; }, a: { ar: 'عشر نبضات! تخيَّل أنّ قلبك يفعل هذا بلا توقّف.', en: 'Ten beats! Imagine — your heart does this without stopping.' } },
      { q: { ar: 'إلى أين يرسل القلبُ الدمَ الأزرق (قليلَ الأكسجين)؟', en: 'Where does the heart send the blue blood (low in oxygen)?' }, ans: 0, opts: [{ ar: 'إلى الرئتين', en: 'To the lungs' }, { ar: 'إلى القدمين', en: 'To the feet' }, { ar: 'إلى المعدة', en: 'To the stomach' }], why: { ar: 'إلى الرئتين ليأخذ الأكسجين.', en: 'To the lungs, to pick up oxygen.' } },
      { pre: function (s) { s.reset(); }, q: { ar: 'اجعل القلب ينبض وحده بأسرع ما يمكن، ثم اضغط «تحقَّق».', en: 'Make the heart beat by itself as fast as it can, then press "Check".' }, ok: function (s) { return s.auto && s.ex === 2; }, hint: { ar: 'شغِّل النبض التلقائي، ثم اختر ما يجعل القلب أسرع.', en: 'Turn on "Beat by itself", then choose what makes the heart fastest.' }, a: { ar: 'صحيح: القلب أسرع ما يكون عند الجري.', en: 'Right: the heart is fastest when running.' } },
      { q: { ar: 'ماذا يأخذ الدمُ من الرئتين؟', en: 'What does the blood pick up in the lungs?' }, ans: 2, opts: [{ ar: 'الطعام', en: 'Food' }, { ar: 'الماء', en: 'Water' }, { ar: 'الأكسجين', en: 'Oxygen' }], why: { ar: 'الأكسجين الذي نتنفَّسه.', en: 'The oxygen we breathe in.' } }
    ]
  });
})();
