/* clock.js — الوقت والساعة: move the two hands, read the time in digits and in words. */
(function () {
  var HN = ['الثانيةَ عشرة', 'الواحدة', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', 'السابعة', 'الثامنة', 'التاسعة', 'العاشرة', 'الحاديةَ عشرة'];
  function words(L, h, m) {
    var nx = (h % 12) + 1, en = L.lang === 'en';
    if (en) {
      if (m === 0) return h + " o'clock"; if (m === 15) return 'quarter past ' + h; if (m === 30) return 'half past ' + h;
      if (m === 45) return 'quarter to ' + nx; return m < 30 ? m + ' past ' + h : (60 - m) + ' to ' + nx;
    }
    var H = HN[h % 12], X = HN[nx % 12];
    if (m === 0) return 'الساعة ' + H + ' تمامًا'; if (m === 5) return H + ' وخمسُ دقائق'; if (m === 10) return H + ' وعشرُ دقائق';
    if (m === 15) return H + ' والرُّبع'; if (m === 20) return H + ' والثُّلث'; if (m === 25) return H + ' وخمسٌ وعشرون دقيقة';
    if (m === 30) return H + ' والنِّصف'; if (m === 35) return H + ' وخمسٌ وثلاثون دقيقة'; if (m === 40) return X + ' إلّا الثُّلث';
    if (m === 45) return X + ' إلّا الرُّبع'; if (m === 50) return X + ' إلّا عشرَ دقائق'; return X + ' إلّا خمسَ دقائق';
  }
  Lab.start({
    id: 'clock', view: [360, 290],
    title: { ar: 'الوقت والساعة', en: 'Time and the clock' },
    sub: { ar: 'حرِّك العقربين واقرأ الوقت.', en: 'Move the two hands and read the time.' },
    ayah: { text: '﴿وَٱلْعَصْرِ ۝ إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ﴾', ref: { ar: '[العصر: ١–٢]', en: '[Al-Asr: 1–2]' }, mean: 'By time, indeed mankind is in loss…',
      wonder: { ar: 'أقسم الله تعالى بالوقت لأنّه أغلى ما نملك: الدقيقة التي تمضي لا تعود. فلنملأ وقتنا بالخير!', en: 'Allah swore by time because it is the most precious thing we have: a minute that passes never returns. Let us fill our time with good!' } },
    build: function (L) {
      var S = L.S, svg = L.svg, s = { h: 12, m: 0, hide: false }, cx = 180, cy = 142, R = 108, i;
      S('rect', { width: 360, height: 290, fill: '#12324F' }, svg);
      S('circle', { cx: cx, cy: cy, r: R + 10, fill: '#B98A45' }, svg); S('circle', { cx: cx, cy: cy, r: R, fill: '#FFF8EA' }, svg);
      for (i = 0; i < 60; i++) { var a = i * 6 * Math.PI / 180, big = i % 5 === 0, r1 = R - (big ? 12 : 6);
        S('line', { x1: cx + Math.sin(a) * r1, y1: cy - Math.cos(a) * r1, x2: cx + Math.sin(a) * (R - 2), y2: cy - Math.cos(a) * (R - 2), stroke: big ? '#3A2A00' : '#B9A57A', 'stroke-width': big ? 3 : 1.2 }, svg); }
      for (i = 1; i <= 12; i++) { var b = i * 30 * Math.PI / 180; L.text(cx + Math.sin(b) * (R - 26), cy - Math.cos(b) * (R - 26) + 6, L.N(i), { 'font-size': 17, fill: '#3A2A00', 'font-weight': 900 }); }
      var hh = S('line', { x1: cx, y1: cy, x2: cx, y2: cy - 56, stroke: '#1F4E8C', 'stroke-width': 8, 'stroke-linecap': 'round' }, svg);
      var mh = S('line', { x1: cx, y1: cy, x2: cx, y2: cy - 86, stroke: '#C0562B', 'stroke-width': 5, 'stroke-linecap': 'round' }, svg);
      S('circle', { cx: cx, cy: cy, r: 7, fill: '#3A2A00' }, svg);
      L.text(62, 280, { ar: '● عقرب الساعات', en: '● hour hand' }, { 'font-size': 10.5, fill: '#8FC2F5' }); L.text(292, 280, { ar: '● عقرب الدقائق', en: '● minute hand' }, { 'font-size': 10.5, fill: '#FFB08A' });
      var cH = L.slider({ key: 'h', label: { ar: '🕐 الساعة', en: '🕐 Hour' }, min: 1, max: 12, step: 1, val: 12, on: function (v) { s.h = v; } });
      var cM = L.slider({ key: 'm', label: { ar: '⏱ الدقائق', en: '⏱ Minutes' }, min: 0, max: 55, step: 5, val: 0, on: function (v) { s.m = v; } });
      var oD = L.out({ ar: 'بالأرقام', en: 'In digits' }), oW = L.out({ ar: 'بالكلمات', en: 'In words' });
      s.set = function (h, m, hide) { cH.set(h); cM.set(m); s.hide = !!hide; L.poke(); };
      s.reset = function () { s.set(12, 0, s.hide); };
      s.tick = function () {};
      s.draw = function () {
        var am = s.m * 6, ah = (s.h % 12) * 30 + s.m * 0.5;
        mh.setAttribute('transform', 'rotate(' + am + ' ' + cx + ' ' + cy + ')'); hh.setAttribute('transform', 'rotate(' + ah + ' ' + cx + ' ' + cy + ')');
        var q = L.lang === 'ar' ? '؟' : '?';
        oD(s.hide ? q : L.N(s.h) + ':' + (s.m < 10 ? L.N(0) : '') + L.N(s.m)); oW(s.hide ? q : words(L, s.h, s.m));
      };
      return s;
    },
    guided: [
      { hi: 'h', pre: function (s) { s.set(12, 0); }, t: { ar: 'العقرب القصير الأزرق يدلّ على الساعة. حرِّك مؤشّر «الساعة» حتى يشير إلى ٣.', en: 'The short blue hand shows the hour. Move the "Hour" slider until it points to 3.' },
        ok: function (s) { return s.h === 3 && s.m === 0; }, a: { ar: 'الساعة الثالثة تمامًا: القصير على ٣ والطويل على ١٢.', en: "Three o'clock: the short hand on 3 and the long hand on 12." } },
      { hi: 'm', t: { ar: 'العقرب الطويل يعدّ الدقائق. اجعل الدقائق ٣٠.', en: 'The long hand counts the minutes. Set the minutes to 30.' },
        ok: function (s) { return s.h === 3 && s.m === 30; }, a: { ar: 'الثالثة والنصف. الطويل نزل إلى ٦ لأنّه قطع نصف الدائرة، والقصير تحرّك إلى ما بين ٣ و٤.', en: 'Half past three. The long hand went down to 6 — half the circle — and the short hand moved between 3 and 4.' } },
      { t: { ar: 'اصنع «السادسة والربع».', en: 'Make "quarter past six".' },
        ok: function (s) { return s.h === 6 && s.m === 15; }, a: { ar: 'الربع = ١٥ دقيقة، والطويل على ٣.', en: 'A quarter = 15 minutes, and the long hand is on 3.' } },
      { t: { ar: 'اصنع «العاشرة إلّا الربع». تذكّر: معناها قبل العاشرة بربع ساعة.', en: 'Make "quarter to ten". Remember: it means a quarter of an hour before ten.' },
        ok: function (s) { return s.h === 9 && s.m === 45; }, a: { ar: 'أحسنت: ٩:٤٥. بقي ربع ساعة لتصير العاشرة.', en: 'Well done: 9:45. A quarter of an hour is left until ten.' } },
      { t: { ar: 'في الساعة ٦٠ دقيقة. اجعل الوقت ٧:٥٥ — كم دقيقةً بقيت لتصير الثامنة؟', en: 'An hour has 60 minutes. Set the time to 7:55 — how many minutes are left until eight?' },
        ok: function (s) { return s.h === 7 && s.m === 55; }, a: { ar: 'بقيت خمس دقائق: الثامنة إلّا خمس دقائق.', en: 'Five minutes are left: five to eight.' } }
    ],
    challenge: [
      { pre: function (s) { s.set(4, 30, true); }, q: { ar: 'انظر إلى الساعة: كم الوقت؟', en: 'Look at the clock: what time is it?' }, ans: 1, opts: [{ ar: '٦:٢٠', en: '6:20' }, { ar: '٤:٣٠', en: '4:30' }, { ar: '٥:٣٠', en: '5:30' }], why: { ar: 'القصير بين ٤ و٥، والطويل على ٦: الرابعة والنصف.', en: 'The short hand is between 4 and 5 and the long hand is on 6: half past four.' } },
      { pre: function (s) { s.set(12, 0); }, q: { ar: 'اضبط الساعة على ٧:٣٠ ثم اضغط «تحقَّق».', en: 'Set the clock to 7:30, then press "Check".' }, ok: function (s) { return s.h === 7 && s.m === 30; }, hint: { ar: 'القصير نحو ٧، والدقائق ٣٠.', en: 'Hour 7, minutes 30.' }, a: { ar: 'السابعة والنصف.', en: 'Half past seven.' } },
      { pre: function (s) { s.set(2, 45, true); }, q: { ar: 'كم الوقت؟', en: 'What time is it?' }, ans: 0, opts: [{ ar: 'الثالثة إلّا الربع', en: 'quarter to three' }, { ar: 'الثانية والربع', en: 'quarter past two' }, { ar: 'التاسعة والنصف', en: 'half past nine' }], why: { ar: 'الطويل على ٩ = ٤٥ دقيقة: بقي ربع ساعة للثالثة.', en: 'The long hand on 9 = 45 minutes: a quarter of an hour before three.' } },
      { pre: function (s) { s.set(12, 0); }, q: { ar: 'اضبط الساعة على «الخامسة والثلث» ثم اضغط «تحقَّق».', en: 'Set the clock to 5:20, then press "Check".' }, ok: function (s) { return s.h === 5 && s.m === 20; }, hint: { ar: 'الثلث = ٢٠ دقيقة.', en: 'A third of an hour = 20 minutes.' }, a: { ar: '٥:٢٠ — الخامسة والثلث.', en: '5:20.' } },
      { pre: function (s) { s.set(8, 0, true); }, q: { ar: 'كم دقيقةً في الساعة الواحدة؟', en: 'How many minutes are in one hour?' }, ans: 2, opts: [{ ar: '٢٤', en: '24' }, { ar: '١٠٠', en: '100' }, { ar: '٦٠', en: '60' }], why: { ar: 'الساعة ٦٠ دقيقة، واليوم ٢٤ ساعة.', en: 'An hour has 60 minutes and a day has 24 hours.' } }
    ]
  });
})();
