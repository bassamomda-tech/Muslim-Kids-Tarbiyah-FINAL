/* battles-data.js — «خُطَط القادة» / The Commanders' Plans
   Five battles as guided map lessons (ages 7–12). History, wisdom and values only.
   Rules kept here: no people are drawn (blocks, banners, tents, arrows and labels only),
   no Quran/hadith text is quoted, disputed numbers are given as "about" or left out.
   Each map is an original schematic SVG (not to scale). A map part with data-s="n" shows from
   stage n on; data-u="m" hides it after stage m. Stages: 0 start · 1–3 after each decision. */
(function () {
  'use strict';

  /* ── tiny SVG helpers ── */
  function g(s, u, inner) { return '<g class="st" data-s="' + s + '"' + (u == null ? '' : ' data-u="' + u + '"') + '>' + inner + '</g>'; }
  function T(x, y, ar, en, c, extra) { return '<text class="lb' + (c ? ' ' + c : '') + '" x="' + x + '" y="' + y + '" data-ar="' + ar + '" data-en="' + en + '"' + (extra ? ' ' + extra : '') + '></text>'; }
  function flag(x, y, side) { return '<path class="fl ' + side + '" d="M' + x + ',' + y + ' v-12 l10,3.5 l-10,3.5"/>'; }
  /* a side's block (centre x,y) with a banner; label under it (or above when up=true) */
  function blk(x, y, w, h, side, ar, en, up) {
    return '<rect class="bk ' + side + '" x="' + (x - w / 2) + '" y="' + (y - h / 2) + '" width="' + w + '" height="' + h + '" rx="3"/>' +
      flag(x + w / 2 - 5, y - h / 2, side.split(' ')[0]) +
      (ar ? T(x, up ? y - h / 2 - 15 : y + h / 2 + 13, ar, en, 's-' + side.split(' ')[0]) : '');
  }
  function arw(d, side, dashed) { return '<path class="arw ' + side + (dashed ? ' dsh' : '') + '" d="' + d + '"' + (dashed ? '' : ' pathLength="1"') + ' marker-end="url(#ah-' + side + ')"/>'; }
  function hill(x, y, w, h) { return '<path class="hl" d="M' + (x - w / 2) + ',' + y + ' Q' + x + ',' + (y - 2 * h) + ' ' + (x + w / 2) + ',' + y + ' Z"/>'; }
  function well(x, y) { return '<circle class="wl" cx="' + x + '" cy="' + y + '" r="4.5"/>'; }
  function tent(x, y, side) { return '<path class="tn ' + side + '" d="M' + (x - 6) + ',' + y + ' l6,-10 l6,10 z"/>'; }
  function boat(x, y, side) { return '<path class="bo ' + side + '" d="M' + (x - 7) + ',' + y + ' h14 l-3,5 h-8 z M' + x + ',' + (y - 1) + ' v-9 l6,8 z"/>'; }
  function house(x, y) { return '<rect class="hs" x="' + x + '" y="' + y + '" width="9" height="8" rx="1"/>'; }
  var SAND = '<rect class="snd" x="0" y="0" width="360" height="250"/>';

  /* ══════════ 1 · BADR ══════════ */
  var mapBadr = SAND +
    '<path class="sea" d="M0,0 H30 Q44,60 28,125 Q16,190 36,250 H0 Z"/>' +
    T(15, 125, 'البحر الأحمر', 'Red Sea', 'wt sm', 'transform="rotate(-90 15 125)"') +
    '<path class="rt" d="M58,0 Q76,70 56,130 Q42,190 62,250"/>' +
    T(104, 20, 'طريق القافلة', 'Caravan route', 'sm dim') +
    hill(110, 105, 70, 20) + hill(292, 214, 80, 20) +
    well(176, 130) + well(194, 140) + well(160, 142) +
    T(176, 162, 'آبار بدر', 'Wells of Badr', 'wtr') +
    T(310, 14, 'إلى المدينة ↑', '↑ To Madinah', 'sm dim') +
    T(310, 244, 'إلى مكّة ↓', '↓ To Makkah', 'sm dim') +
    g(0, 1, blk(250, 44, 58, 16, 'm', 'جيش المسلمين', 'Muslim army')) +
    g(0, 1, blk(190, 214, 70, 16, 'e', 'جيش قريش', 'Quraysh army')) +
    g(1, 1, arw('M240,72 Q226,96 204,116', 'm') + arw('M190,203 Q187,192 185,180', 'e')) +
    g(2, null, blk(200, 110, 58, 16, 'm', 'جيش المسلمين', 'Muslim army', true) +
      '<rect class="bsn" x="204" y="124" width="22" height="10" rx="2"/>' + T(248, 134, 'الحوض', 'Basin', 'sm wtr')) +
    g(2, 2, blk(180, 198, 70, 16, 'e', 'جيش قريش', 'Quraysh army')) +
    g(3, null, arw('M186,186 Q204,214 222,240', 'e') + T(118, 206, 'قريش تعود إلى مكّة', 'Quraysh return to Makkah', 's-e sm') +
      arw('M232,100 Q262,66 292,28', 'm') + T(286, 152, 'العودة إلى المدينة', 'Back to Madinah', 's-m sm') +
      T(286, 166, 'والأسرى يعلّمون القراءة', 'captives teach reading', 's-m sm'));

  /* ══════════ 2 · AL-KHANDAQ ══════════ */
  var hs = '';
  [[150, 172], [164, 176], [178, 171], [192, 177], [206, 172], [157, 186], [171, 188], [186, 186], [200, 188]].forEach(function (p) { hs += house(p[0], p[1]); });
  var mapKhandaq = SAND +
    '<path class="hr" d="M0,72 Q50,82 62,130 Q70,190 40,250 H0 Z"/>' + T(28, 172, 'الحَرّة', 'Lava rock', 'wt sm') +
    '<path class="hr" d="M360,72 Q310,82 298,130 Q290,190 320,250 H360 Z"/>' + T(332, 172, 'الحَرّة', 'Lava rock', 'wt sm') +
    '<ellipse class="gr" cx="180" cy="234" rx="96" ry="15"/>' + T(180, 238, 'بساتين ومنازل', 'Orchards and houses', 'wt sm') +
    hill(180, 152, 64, 12) + T(180, 165, 'جبل سَلْع', 'Mount Sal‘', 'sm dim') +
    hs + T(180, 211, 'المدينة', 'Madinah', 'big') +
    g(0, 0, '<path class="opn" d="M70,108 Q180,44 290,108"/>' + T(180, 66, 'جهة الشَّمال مفتوحة', 'The north side is open', 's-e') +
      arw('M104,6 L126,40', 'e') + arw('M256,6 L234,40', 'e') + T(180, 18, 'الأحزاب قادمون', 'The Confederates approach', 's-e sm')) +
    g(1, null, '<path class="tr drw" pathLength="1" d="M70,108 Q180,44 290,108"/>' + T(180, 66, 'الخندق', 'The Trench', 'big')) +
    g(1, 1, T(180, 20, 'الأحزاب في الطريق', 'The Confederates are on the way', 's-e sm')) +
    g(2, null, blk(180, 104, 60, 14, 'm', 'معسكر المسلمين', 'Muslim camp') +
      '<rect class="bk m" x="96" y="96" width="8" height="8" rx="2"/><rect class="bk m" x="130" y="84" width="8" height="8" rx="2"/>' +
      '<rect class="bk m" x="222" y="84" width="8" height="8" rx="2"/><rect class="bk m" x="256" y="96" width="8" height="8" rx="2"/>') +
    g(2, 2, blk(112, 26, 58, 14, 'e', 'قريش', 'Quraysh') + blk(248, 26, 58, 14, 'e', 'غَطَفان', 'Ghatafan') +
      tent(166, 32, 'e') + tent(180, 24, 'e') + tent(194, 32, 'e')) +
    g(3, null, '<path class="wnd" d="M96,30 q14,-9 28,0 t28,0 t28,0 t28,0 t28,0"/><path class="wnd" d="M110,42 q14,-9 28,0 t28,0 t28,0 t28,0"/>' +
      arw('M92,40 L66,10', 'e') + arw('M268,40 L294,10', 'e') + T(180, 14, 'ريحٌ شديدة… ورحيل الأحزاب', 'A strong wind — the Confederates leave', 's-e sm'));

  /* ══════════ 3 · HATTIN → AL-QUDS ══════════ */
  var mapHattin = SAND +
    /* scene A: the land between Saffuriya and Lake Tiberias (stages 0–2) */
    g(0, 2, '<path class="sea" d="M322,36 Q302,122 326,208 H360 V36 Z"/>' +
      T(343, 122, 'بحيرة طبريّة', 'Lake Tiberias', 'wt sm', 'transform="rotate(-90 343 122)"') +
      '<rect class="twn" x="292" y="114" width="17" height="17" rx="2"/>' + T(298, 109, 'طبريّة', 'Tiberias', 'sm') +
      well(26, 98) + well(40, 90) + T(52, 78, 'ينابيع صفّورية', 'Saffuriya springs', 'wtr sm') +
      '<circle class="dot" cx="120" cy="140" r="1.6"/><circle class="dot" cx="150" cy="128" r="1.6"/><circle class="dot" cx="100" cy="158" r="1.6"/><circle class="dot" cx="170" cy="150" r="1.6"/><circle class="dot" cx="135" cy="166" r="1.6"/>' +
      T(112, 190, 'هضبةٌ جافّة بلا ماء', 'Dry plateau, no water', 'sm dim') +
      hill(204, 96, 36, 11) + hill(238, 96, 36, 11) + T(204, 68, 'قرنا حطّين', 'Horns of Hattin', 'sm') +
      well(262, 50) + T(300, 44, 'عين حطّين', 'Hattin spring', 'wtr sm')) +
    g(0, 1, blk(52, 120, 64, 16, 'e', 'جيش الصليبيّين', 'Crusader army')) +
    g(0, 1, blk(240, 206, 66, 16, 'm', 'جيش صلاح الدين', 'Salah al-Din’s army')) +
    g(1, 1, arw('M262,194 Q262,150 287,128', 'm') + T(222, 168, 'حصار طبريّة', 'Siege of Tiberias', 's-m sm') +
      arw('M88,118 Q140,104 186,108', 'e') + T(136, 96, 'مسيرٌ في الحرّ بلا ماء', 'A hot march, no water', 's-e sm')) +
    g(2, 2, blk(221, 106, 50, 13, 'e', 'الصليبيّون عطاشى', 'The thirsty Crusaders') +
      blk(282, 88, 36, 12, 'm') + blk(262, 66, 30, 11, 'm') + blk(160, 108, 34, 12, 'm') +
      blk(226, 160, 62, 14, 'm', 'جيش صلاح الدين يحيط بهم', 'Salah al-Din’s army around them') +
      T(264, 24, 'الماءُ في يد المسلمين', 'The water is held by the Muslims', 's-m sm')) +
    /* scene B: al-Quds entered in peace (stage 3) */
    g(3, null, T(180, 26, 'القدس · 27 رجب 583 هـ', 'Al-Quds · 27 Rajab 583 AH', 'big') +
      '<rect class="wal" x="96" y="66" width="168" height="122" rx="4"/>' +
      '<rect class="gate" x="88" y="118" width="16" height="22"/><rect class="gate" x="168" y="180" width="24" height="16"/>' +
      '<rect class="msq" x="150" y="122" width="60" height="26" rx="2"/><path class="dm" d="M164,122 a16,16 0 0 1 32,0 z"/>' +
      T(180, 165, 'المسجد الأقصى', 'Al-Aqsa Mosque', 'sm') + flag(250, 66, 'm') +
      T(180, 90, 'أمانٌ لأهل المدينة', 'Safety for the people', 's-m sm') +
      blk(50, 128, 58, 16, 'm', 'جيش المسلمين', 'Muslim army') + arw('M82,128 L112,128', 'm') +
      arw('M180,198 Q186,224 236,226', 'n') + T(292, 230, 'خروجٌ آمن', 'Safe departure', 'sm dim'));

  /* ══════════ 4 · AYN JALUT ══════════ */
  var mapJalut = SAND + '<ellipse class="vl" cx="195" cy="128" rx="160" ry="74"/>' +
    hill(110, 250, 190, 24) + hill(270, 250, 170, 20) + T(190, 243, 'تلال', 'Hills', 'wt sm') +
    hill(78, 60, 120, 22) + hill(172, 44, 90, 16) +
    '<circle class="tre" cx="52" cy="46" r="6"/><circle class="tre" cx="76" cy="38" r="6"/><circle class="tre" cx="102" cy="46" r="6"/><circle class="tre" cx="150" cy="34" r="5"/><circle class="tre" cx="186" cy="34" r="5"/>' +
    '<path class="strm" d="M204,134 q18,10 38,4 t40,8"/>' + well(200, 132) + T(214, 160, 'عين جالوت', 'Ayn Jalut', 'wtr') +
    g(0, 2, blk(306, 100, 60, 18, 'e', 'جيش المغول', 'Mongol army') + tent(290, 82, 'e') + tent(306, 80, 'e') + tent(322, 82, 'e')) +
    g(0, 0, arw('M8,176 L50,158', 'm') + T(82, 192, 'جيش قُطُز قادمٌ من مصر', 'Qutuz’s army, from Egypt', 's-m sm')) +
    g(1, 1, blk(74, 142, 60, 16, 'm', 'جيش المماليك', 'Mamluk army') + arw('M8,176 L40,156', 'm')) +
    g(2, 2, blk(176, 106, 46, 14, 'm', 'مقدّمة بيبرس', 'Baybars’ vanguard', true) +
      '<rect class="bk m hid" x="52" y="76" width="56" height="14" rx="3"/><rect class="bk m hid" x="62" y="196" width="56" height="14" rx="3"/>' +
      T(82, 70, 'القوّة الرئيسة مختبئة', 'Main force, hidden', 's-m sm') +
      arw('M150,112 L118,126', 'm', true) + arw('M272,102 L208,106', 'e')) +
    g(3, null, blk(206, 108, 52, 15, 'e') + T(270, 127, 'المغول', 'The Mongols', 's-e') + blk(146, 116, 38, 13, 'm') +
      blk(80, 83, 56, 14, 'm') + blk(90, 203, 56, 14, 'm') +
      arw('M110,86 Q160,68 200,94', 'm') + arw('M120,198 Q168,172 200,124', 'm') +
      arw('M236,104 Q290,92 350,66', 'e') + T(298, 60, 'تراجُع المغول', 'The Mongols withdraw', 's-e sm'));

  /* ══════════ 5 · CONSTANTINOPLE ══════════ */
  var mapConst = '<rect class="sea" x="0" y="0" width="360" height="250"/>' +
    '<path class="lnd" d="M0,0 H255 L265,45 L255,85 L205,82 L160,84 L130,92 L165,104 L215,106 L262,112 L270,128 L250,150 L190,165 L120,180 L0,190 Z"/>' +
    '<path class="lnd" d="M310,0 H360 V250 H335 L320,170 L302,120 L306,60 Z"/>' +
    '<path class="cty" d="M128,95 L165,104 L215,106 L262,112 L270,128 L250,150 L190,165 L122,178 Z"/>' +
    '<path class="wl2" d="M128,94 L122,180"/>' +
    T(196, 140, 'القسطنطينيّة', 'Constantinople', 'big') +
    T(232, 72, 'غَلَطة', 'Galata', 'sm dim') +
    T(214, 98, 'القرن الذهبيّ', 'Golden Horn', 'wt xs') +
    T(286, 190, 'البوسفور', 'Bosphorus', 'wt sm', 'transform="rotate(-90 286 190)"') +
    T(232, 216, 'بحر مَرمَرة', 'Sea of Marmara', 'wt sm') +
    T(338, 150, 'آسيا', 'Asia', 'sm dim') +
    T(100, 102, 'الأسوار', 'Land walls', 'sm') +
    g(0, null, '<path class="chn" d="M256,87 L263,111"/>' + T(290, 104, 'السلسلة', 'The chain', 'wt sm')) +
    g(1, null, '<path class="frt" d="M250,26 v-13 h4 v4 h4 v-4 h4 v4 h4 v-4 h4 v13 z"/>' + T(196, 14, 'قلعة روملي حصار', 'Rumeli Hisarı fortress', 'sm') +
      blk(58, 128, 64, 16, 'm', 'معسكر العثمانيّين', 'Ottoman camp') + tent(30, 114, 'm') + tent(46, 112, 'm') +
      '<circle class="cn" cx="104" cy="122" r="4"/><circle class="cn" cx="104" cy="136" r="4"/>' + T(92, 164, 'المدافع', 'Cannons', 'sm') +
      boat(284, 66, 'm') + boat(291, 88, 'm') + T(336, 84, 'الأسطول', 'The fleet', 'sm')) +
    g(2, null, arw('M276,58 Q244,26 204,42 Q168,56 173,84', 'm') + T(140, 44, 'السفن تُجَرّ على اليابسة', 'Ships hauled over land', 's-m sm') +
      boat(158, 96, 'm') + boat(182, 97, 'm')) +
    g(3, null, arw('M110,122 L124,124', 'm') + arw('M110,136 L123,138', 'm') + arw('M184,103 L186,117', 'm') +
      flag(236, 132, 'm') + T(196, 156, '29 مايو 1453 م', '29 May 1453 CE', 'sm'));

  /* ══════════ the lessons ══════════ */
  window.BATTLES = [
    {
      id: 'badr', icon: '💧', c: '#2E9E5B',
      title: { ar: 'غزوة بدر', en: 'The Battle of Badr' },
      date: { ar: '17 رمضان 2 هـ · 624 م', en: '17 Ramadan 2 AH · 624 CE' },
      teaser: { ar: 'الشورى، والماء، والرحمة بالأسرى', en: 'Consultation, water, and mercy to captives' },
      sides: { m: { ar: 'المسلمون', en: 'The Muslims' }, e: { ar: 'قريش', en: 'Quraysh' } },
      map: mapBadr,
      caps: [
        { ar: 'جيش المسلمين قادمٌ من جهة المدينة، وجيش قريش من جهة مكّة، وبينهما آبار بدر.', en: 'The Muslim army comes from the direction of Madinah and the Quraysh army from Makkah, with the wells of Badr between them.' },
        { ar: 'بعد الشورى: الجيشان يتقدّمان نحو آبار بدر.', en: 'After the consultation: both armies move towards the wells of Badr.' },
        { ar: 'المسلمون عند أقرب بئرٍ من قريش، وقد بنَوا حوضًا للماء.', en: 'The Muslims are at the well nearest to Quraysh and have built a basin for water.' },
        { ar: 'بعد المعركة: قريش تعود إلى مكّة، والمسلمون يعودون إلى المدينة ومعهم الأسرى.', en: 'After the battle: Quraysh return to Makkah, and the Muslims go back to Madinah with the captives.' }
      ],
      bg: {
        ar: 'عاش المسلمون في مكّة سنواتٍ من الأذى، حتى تركوا بيوتَهم وأموالَهم وهاجروا إلى المدينة. في السنة الثانية للهجرة مرّت قافلةٌ تجاريّةٌ لقريش عائدةً من الشام، فخرج النبيّ ﷺ مع ثلاثمئةٍ وبضعةَ عشرَ من أصحابه لاعتراضها. غيّرت القافلةُ طريقَها نحو الساحل ونجَت، لكنّ قريشًا خرجت من مكّة بجيشٍ يقارب الألف. وهكذا التقى الجمعان عند آبار بدر، ولم يكن المسلمون قد خرجوا لملاقاة جيش.',
        en: 'For years the Muslims in Makkah were harmed, until they left their homes and their wealth and migrated to Madinah. In the second year after the Hijrah a Quraysh trade caravan was returning from al-Sham, and the Prophet ﷺ set out with a little over three hundred of his companions to intercept it. The caravan changed its route towards the coast and got away, but Quraysh marched out of Makkah with an army of about a thousand. So the two sides met at the wells of Badr, although the Muslims had not set out to face an army.'
      },
      decisions: [
        {
          q: { ar: 'نجَت القافلة، وجاء الخبر بأنّ جيشًا كبيرًا لقريش يقترب. المسلمون قلّة، ولم يستعدّوا لمعركة. ما القرار الأحكم؟', en: 'The caravan has escaped, and news comes that a large Quraysh army is near. The Muslims are few and did not prepare for a battle. What is the wisest decision?' },
          opts: [
            { t: { ar: 'اتّخاذ القرار فورًا دون سؤال أحد', en: 'Decide at once without asking anyone' }, fb: { ar: 'القرار السريع قد يبدو قويًّا، لكنّ الجيش كلَّه سيحمل نتيجته. الأحكم أن يُسمَع رأيُ الناس أوّلًا.', en: 'A quick decision can look strong, but the whole army will carry its result. It is wiser to hear people’s views first.' } },
            { ok: 1, t: { ar: 'جمعُ الأصحاب واستشارتُهم قبل القرار', en: 'Gather the companions and consult them first' }, fb: { ar: 'نعم! الشورى تجمع القلوب وتُظهر أفضل الآراء.', en: 'Yes! Consultation brings hearts together and brings out the best ideas.' } },
            { t: { ar: 'العودة إلى المدينة دون شرح السبب', en: 'Go back to Madinah without explaining why' }, fb: { ar: 'الحذر مفهوم، لكنّ القرار الكبير يحتاج إلى مشاورةٍ ووضوح حتى يثق الجميع به.', en: 'Being careful makes sense, but a big decision needs consultation and clarity so that everyone trusts it.' } }
          ],
          actual: {
            ar: 'استشار النبيّ ﷺ أصحابَه. تكلّم المهاجرون فأحسنوا، ومنهم المِقداد بن عمرو رضي الله عنه. ثم أراد ﷺ أن يسمع رأيَ الأنصار، فقام سعد بن مُعاذ رضي الله عنه وأكّد أنّهم معه حيثما سار. فسُرّ النبيّ ﷺ بذلك، وتقدّم الجيش نحو بدر وكلمتُه واحدة.',
            en: 'The Prophet ﷺ consulted his companions. The Muhajirun spoke well, among them al-Miqdad ibn ‘Amr (may Allah be pleased with him). Then he ﷺ wished to hear from the Ansar, so Sa‘d ibn Mu‘adh (may Allah be pleased with him) stood and assured him that they were with him wherever he went. The Prophet ﷺ was pleased, and the army moved towards Badr united.'
          }
        },
        {
          q: { ar: 'وصل المسلمون قرب آبار بدر ونزلوا عند أوّل ماء. في الصحراء الماءُ أثمنُ شيء. أين أفضلُ مكانٍ للمعسكر؟', en: 'The Muslims reach the wells of Badr and stop at the first water. In the desert, water is the most precious thing. Where is the best place to camp?' },
          opts: [
            { t: { ar: 'البقاء في المكان الأوّل؛ فالجيش متعَب', en: 'Stay at the first spot; the army is tired' }, fb: { ar: 'الراحة مهمّة، لكنّ المكان الأفضل يستحقّ خطواتٍ إضافيّة.', en: 'Rest matters, but a better position is worth a few more steps.' } },
            { ok: 1, t: { ar: 'التقدّم إلى أقرب بئرٍ من قريش وبناء حوضٍ للماء', en: 'Move to the well nearest Quraysh and build a water basin' }, fb: { ar: 'تمامًا! مَن يملك الماء في الصحراء يملك قوّةً كبيرة.', en: 'Exactly! Whoever holds the water in the desert holds great strength.' } },
            { t: { ar: 'الابتعاد عن الآبار كلِّها', en: 'Move away from all the wells' }, fb: { ar: 'الجيش بلا ماءٍ يضعُف سريعًا في حرّ الصحراء.', en: 'An army without water grows weak quickly in the desert heat.' } }
          ],
          actual: {
            ar: 'روى أهلُ السيرة أنّ الحُباب بن المُنذِر رضي الله عنه سأل النبيّ ﷺ: هل هذا المكان بوحيٍ من الله، أم هو رأيٌ وتدبير؟ فلمّا علم أنّه رأيٌ وتدبير أشار بالتقدّم إلى أقرب ماءٍ من القوم وبناء حوضٍ عليه. فقبِل النبيّ ﷺ مشورتَه وانتقل الجيش. وقضى النبيّ ﷺ ليلتَه يدعو ربَّه.',
            en: 'The scholars of Seerah narrate that al-Hubab ibn al-Mundhir (may Allah be pleased with him) asked the Prophet ﷺ whether this place was chosen by revelation from Allah or was a matter of opinion and planning. When he learned it was opinion and planning, he advised moving to the water nearest the other side and building a basin there. The Prophet ﷺ accepted his advice and the army moved. The Prophet ﷺ spent the night calling upon his Lord.'
          }
        },
        {
          q: { ar: 'انتهت المعركة بنصرٍ من الله للمسلمين، ووقع في أيديهم نحو سبعين أسيرًا من قريش، وفيهم مَن آذاهم في مكّة. كيف يُعامَل الأسرى؟', en: 'The battle ends with a victory from Allah for the Muslims, and about seventy men of Quraysh are taken captive — some of whom had harmed them in Makkah. How should the captives be treated?' },
          opts: [
            { t: { ar: 'بقسوةٍ، كما آذَوا المسلمين من قبل', en: 'Harshly, as they had harmed the Muslims' }, fb: { ar: 'الغضب مفهوم، لكنّ المسلم لا يردّ الأذى بالظلم. الأسير أمانة.', en: 'The anger is understandable, but a Muslim does not answer harm with injustice. A captive is a trust.' } },
            { ok: 1, t: { ar: 'بالإحسان، مع قبول الفِداء منهم', en: 'Kindly, and accept a ransom from them' }, fb: { ar: 'نعم! الرحمة عند القدرة من أجمل الأخلاق.', en: 'Yes! Mercy when you have the upper hand is among the finest of manners.' } },
            { t: { ar: 'يُترَكون دون طعامٍ ولا اهتمام', en: 'Leave them without food or care' }, fb: { ar: 'إهمالُ الأسير أذًى له أيضًا، والإحسان إليه واجب.', en: 'Neglecting a captive harms him too; treating him well is a duty.' } }
          ],
          actual: {
            ar: 'أوصى النبيّ ﷺ بالأسرى خيرًا، فكان بعضُ الصحابة يقدّمون لهم أفضلَ طعامهم. وقُبِل الفِداء ممّن يملك المال، ومَن كان يعرف القراءة والكتابة ولا مال له جُعل فِداؤه أن يعلّم عشرةً من أبناء المدينة. فصار العلمُ طريقًا إلى الحرّيّة.',
            en: 'The Prophet ﷺ told his companions to treat the captives well, and some companions gave them the best of their own food. A ransom was accepted from those who had wealth, and those who could read and write but had no wealth were freed in return for teaching ten children of Madinah. So knowledge became a path to freedom.'
          }
        }
      ],
      lessons: [
        { i: '🤝', t: { ar: 'الشورى', en: 'Consultation (shura)' }, d: { ar: 'استشار النبيّ ﷺ أصحابَه وأخذ بالرأي النافع.', en: 'The Prophet ﷺ consulted his companions and took the useful advice.' } },
        { i: '🧭', t: { ar: 'التوكّل مع الأخذ بالأسباب', en: 'Trust in Allah while taking the means' }, d: { ar: 'اختيارُ أفضل مكانٍ والاستعداد، ثم الدعاء والاعتماد على الله.', en: 'Choosing the best position and preparing — then making du‘a and relying on Allah.' } },
        { i: '🕊️', t: { ar: 'الرحمة بالأسرى وقيمة العلم', en: 'Mercy to captives and the worth of knowledge' }, d: { ar: 'أُحسِن إلى الأسرى، وكان تعليمُ القراءة فِداءً.', en: 'The captives were treated well, and teaching reading served as a ransom.' } }
      ],
      sources: { ar: 'سيرة ابن هشام · البداية والنهاية لابن كثير · الرحيق المختوم للمباركفوري', en: 'Sirat Ibn Hisham · Al-Bidayah wa’l-Nihayah by Ibn Kathir · Al-Raheeq al-Makhtum by al-Mubarakfuri' },
      quiz: [
        { q: { ar: 'في أيّ سنةٍ كانت غزوة بدر؟', en: 'In which year was the Battle of Badr?' }, o: [{ ar: 'السنة الثانية للهجرة', en: 'The 2nd year after the Hijrah' }, { ar: 'السنة الخامسة للهجرة', en: 'The 5th year after the Hijrah' }, { ar: 'السنة العاشرة للهجرة', en: 'The 10th year after the Hijrah' }], a: 0 },
        { q: { ar: 'مَن أشار بالانتقال إلى أقرب بئر؟', en: 'Who advised moving to the nearest well?' }, o: [{ ar: 'سلمان الفارسيّ رضي الله عنه', en: 'Salman al-Farisi (may Allah be pleased with him)' }, { ar: 'الحُباب بن المُنذِر رضي الله عنه', en: 'Al-Hubab ibn al-Mundhir (may Allah be pleased with him)' }, { ar: 'سعد بن مُعاذ رضي الله عنه', en: 'Sa‘d ibn Mu‘adh (may Allah be pleased with him)' }], a: 1 },
        { q: { ar: 'بماذا افتدى بعضُ الأسرى أنفسَهم؟', en: 'How did some captives earn their freedom?' }, o: [{ ar: 'بحفر بئرٍ جديدة', en: 'By digging a new well' }, { ar: 'ببناء سورٍ للمدينة', en: 'By building a wall for the city' }, { ar: 'بتعليم عشرةٍ من أبناء المدينة القراءة والكتابة', en: 'By teaching ten children of Madinah to read and write' }], a: 2 }
      ]
    },

    {
      id: 'khandaq', icon: '⛏️', c: '#C98A2B',
      title: { ar: 'غزوة الخندق', en: 'The Battle of the Trench' },
      date: { ar: 'شوّال 5 هـ · 627 م', en: 'Shawwal 5 AH · 627 CE' },
      teaser: { ar: 'فكرةٌ جديدة تحمي المدينة', en: 'A new idea that protected the city' },
      sides: { m: { ar: 'المسلمون', en: 'The Muslims' }, e: { ar: 'الأحزاب', en: 'The Confederates' } },
      map: mapKhandaq,
      caps: [
        { ar: 'المدينة محميّةٌ بالحَرّة من الشرق والغرب وبالبساتين من الجنوب، وجهةُ الشَّمال مفتوحة.', en: 'Madinah is protected by lava rock to the east and west and by orchards to the south; the north side is open.' },
        { ar: 'الخندق يُحفَر في جهة الشَّمال بين الحَرّتين.', en: 'The trench is dug on the north side, between the two lava fields.' },
        { ar: 'الأحزاب خلف الخندق لا يستطيعون عبوره، والمسلمون يحرسونه وظهورُهم إلى جبل سَلْع.', en: 'The Confederates are stuck behind the trench; the Muslims guard it with Mount Sal‘ behind them.' },
        { ar: 'ريحٌ شديدةٌ باردة، والأحزاب يرحلون.', en: 'A strong, cold wind — and the Confederates leave.' }
      ],
      bg: {
        ar: 'في السنة الخامسة للهجرة اجتمعت قريشٌ وغَطَفان وقبائلُ أخرى لمهاجمة المدينة والقضاء على المسلمين فيها، ولذلك سُمّوا «الأحزاب». بلغ عددُهم نحو عشرة آلاف، والمسلمون نحو ثلاثة آلاف. كانت المدينة محميّةً من الشرق والغرب بأرضٍ بركانيّةٍ وعرة تُسمّى «الحَرّة»، ومن الجنوب ببساتينَ ومنازلَ متلاصقة. أمّا جهةُ الشَّمال فكانت مفتوحة.',
        en: 'In the fifth year after the Hijrah, Quraysh, Ghatafan and other tribes joined together to attack Madinah and put an end to the Muslims there, which is why they were called “the Confederates” (al-Ahzab). They numbered about ten thousand, and the Muslims about three thousand. Madinah was protected on the east and west by rough volcanic ground called the harrah, and on the south by orchards and closely built houses. But the north side was open.'
      },
      decisions: [
        {
          q: { ar: 'جيشٌ كبير في الطريق، وجهةُ الشَّمال مفتوحة. كيف تُحمى المدينة؟', en: 'A large army is on its way and the north side is open. How can the city be protected?' },
          opts: [
            { t: { ar: 'الخروج لملاقاتهم في أرضٍ مكشوفة', en: 'Go out and meet them on open ground' }, fb: { ar: 'فيها شجاعة، لكنّ العدد الكبير له الغلبة في الأرض المفتوحة. الأحكم أن تُستعمَل الأرض لصالحك.', en: 'That is brave, but large numbers have the advantage on open ground. It is wiser to make the land work for you.' } },
            { t: { ar: 'البقاء في البيوت وانتظار ما يحدث', en: 'Stay in the houses and wait' }, fb: { ar: 'الانتظار بلا خطّةٍ يترك الجهة المفتوحة دون حماية.', en: 'Waiting without a plan leaves the open side unprotected.' } },
            { ok: 1, t: { ar: 'حفرُ خندقٍ عريضٍ في الجهة المفتوحة', en: 'Dig a wide trench across the open side' }, fb: { ar: 'فكرةٌ ذكيّة! الخندق يمنع الخيل من العبور.', en: 'A clever idea! A trench stops horses from crossing.' } }
          ],
          actual: {
            ar: 'استشار النبيّ ﷺ أصحابَه، فأشار سلمان الفارسيّ رضي الله عنه بحفر خندق، وهي طريقةٌ عرفها في بلاد فارس ولم تكن العربُ تعرفها. فأخذ النبيّ ﷺ بالرأي، وحُفر الخندق في جهة الشَّمال بين الحَرّتين.',
            en: 'The Prophet ﷺ consulted his companions, and Salman al-Farisi (may Allah be pleased with him) suggested digging a trench — a method he knew from Persia that the Arabs had not used. The Prophet ﷺ took the advice, and the trench was dug on the north side between the two lava fields.'
          }
        },
        {
          q: { ar: 'الحفرُ شاقّ، والجوّ بارد، والطعام قليل، والوقت ضيّق. ما دورُ القائد أثناء العمل؟', en: 'The digging is hard, the weather is cold, food is short and time is tight. What is the leader’s part in the work?' },
          opts: [
            { ok: 1, t: { ar: 'يعمل بيده مع الناس ويقسّم العمل بينهم', en: 'Work with his own hands and share out the work' }, fb: { ar: 'نعم! حين يشارك القائدُ يهون التعب على الجميع.', en: 'Yes! When the leader joins in, the hard work feels lighter for everyone.' } },
            { t: { ar: 'يراقب من بعيدٍ ويُصدر الأوامر', en: 'Watch from a distance and give orders' }, fb: { ar: 'التنظيم مهمّ، لكنّ الناس يعملون بهمّةٍ أكبر حين يرون قائدَهم بينهم.', en: 'Organising matters, but people work with more heart when they see their leader among them.' } },
            { t: { ar: 'يطلب الإسراع ويعاتب المتعَبين', en: 'Demand speed and scold the tired' }, fb: { ar: 'التعبُ مع الجوع ليس تقصيرًا. الرفقُ والتشجيع يُنجزان أكثر من العتاب.', en: 'Being tired and hungry is not laziness. Gentleness and encouragement achieve more than scolding.' } }
          ],
          actual: {
            ar: 'حفر النبيّ ﷺ بيده مع أصحابه وحمل التراب معهم، وقُسّم العمل بين المجموعات. وكانوا يردّدون الأناشيد ليخفّ عنهم التعب، وصبروا على الجوع والبرد حتى اكتمل الخندق قبل وصول الأحزاب.',
            en: 'The Prophet ﷺ dug with his own hands alongside his companions and carried the earth with them, and the work was shared out among groups. They chanted verses of poetry together to lighten the work, and bore the hunger and cold patiently until the trench was finished before the Confederates arrived.'
          }
        },
        {
          q: { ar: 'وصل الأحزاب ففاجأهم الخندق، فحاصروا المدينة قرابةَ شهر. اشتدّ البرد والجوع والخوف. ما العمل؟', en: 'The Confederates arrive and are surprised by the trench, so they besiege the city for nearly a month. Cold, hunger and fear grow. What should be done?' },
          opts: [
            { t: { ar: 'عبور الخندق والهجوم عليهم', en: 'Cross the trench and attack them' }, fb: { ar: 'الخندق هو الذي يحمي المدينة؛ تركُه يُضيّع أهمَّ سببٍ أُعِدّ.', en: 'The trench is what protects the city; leaving it would throw away the best means that had been prepared.' } },
            { ok: 1, t: { ar: 'الثبات وحراسة الخندق ليلًا ونهارًا مع الدعاء', en: 'Stand firm, guard the trench day and night, and make du‘a' }, fb: { ar: 'نعم! الصبر مع الدعاء والعمل طريقُ الفرَج.', en: 'Yes! Patience, together with du‘a and effort, is the way to relief.' } },
            { t: { ar: 'الاستسلام لإنهاء الحصار', en: 'Give up to end the siege' }, fb: { ar: 'الشدّة لا تدوم، والصبر عليها خيرٌ من ضياع المدينة وأهلها.', en: 'Hardship does not last, and bearing it is better than losing the city and its people.' } }
          ],
          actual: {
            ar: 'ثبت المسلمون يحرسون الخندق، ولم يقع إلا قتالٌ قليل. ودعا النبيّ ﷺ ربَّه، فأرسل الله ريحًا شديدةً باردة قلبت خيامَ الأحزاب وأطفأت نيرانَهم، فرحلوا عائدين وانتهى الحصار.',
            en: 'The Muslims stood firm guarding the trench, and there was only a little fighting. The Prophet ﷺ called upon his Lord, and Allah sent a strong, cold wind that overturned the Confederates’ tents and put out their fires. They packed up and went home, and the siege ended.'
          }
        }
      ],
      lessons: [
        { i: '💡', t: { ar: 'الشورى وقبول الفكرة النافعة', en: 'Consultation and welcoming a good idea' }, d: { ar: 'الفكرة الجيّدة تُقبَل ممّن جاء بها، ولو كانت جديدة.', en: 'A good idea is welcomed from whoever brings it, even if it is new.' } },
        { i: '🧱', t: { ar: 'القائد يشارك في العمل', en: 'A leader shares the work' }, d: { ar: 'حفر النبيّ ﷺ مع أصحابه بيده.', en: 'The Prophet ﷺ dug with his own hands beside his companions.' } },
        { i: '⏳', t: { ar: 'الصبر والثبات مع الدعاء', en: 'Patience and firmness with du‘a' }, d: { ar: 'صبروا قرابةَ شهرٍ حتى جاء الفرَج من الله.', en: 'They were patient for nearly a month until relief came from Allah.' } }
      ],
      sources: { ar: 'سيرة ابن هشام · البداية والنهاية لابن كثير · الرحيق المختوم للمباركفوري', en: 'Sirat Ibn Hisham · Al-Bidayah wa’l-Nihayah by Ibn Kathir · Al-Raheeq al-Makhtum by al-Mubarakfuri' },
      quiz: [
        { q: { ar: 'مَن أشار بحفر الخندق؟', en: 'Who suggested digging the trench?' }, o: [{ ar: 'سلمان الفارسيّ رضي الله عنه', en: 'Salman al-Farisi (may Allah be pleased with him)' }, { ar: 'الحُباب بن المُنذِر رضي الله عنه', en: 'Al-Hubab ibn al-Mundhir (may Allah be pleased with him)' }, { ar: 'المِقداد بن عمرو رضي الله عنه', en: 'Al-Miqdad ibn ‘Amr (may Allah be pleased with him)' }], a: 0 },
        { q: { ar: 'في أيّ جهةٍ من المدينة حُفر الخندق؟', en: 'On which side of Madinah was the trench dug?' }, o: [{ ar: 'الجنوب', en: 'The south' }, { ar: 'الشَّمال', en: 'The north' }, { ar: 'حول المدينة كلِّها', en: 'All the way around the city' }], a: 1 },
        { q: { ar: 'كيف انتهى الحصار؟', en: 'How did the siege end?' }, o: [{ ar: 'بمعركةٍ كبيرة في السهل', en: 'With a great battle on the plain' }, { ar: 'بردم الخندق', en: 'By filling in the trench' }, { ar: 'بريحٍ شديدةٍ باردة فرحل الأحزاب', en: 'A strong, cold wind came and the Confederates left' }], a: 2 }
      ]
    },

    {
      id: 'hattin', icon: '🕌', c: '#D4A017',
      title: { ar: 'حطّين وفتح القدس', en: 'Hattin and the Opening of al-Quds' },
      date: { ar: '583 هـ · 1187 م', en: '583 AH · 1187 CE' },
      teaser: { ar: 'صلاح الدين: الماء أوّلًا، ثم الرحمة', en: 'Salah al-Din: water first, then mercy' },
      sides: { m: { ar: 'جيش صلاح الدين', en: 'Salah al-Din’s army' }, e: { ar: 'الصليبيّون', en: 'The Crusaders' } },
      map: mapHattin,
      caps: [
        { ar: 'جيش الصليبيّين عند ينابيع صفّورية، وجيش صلاح الدين قرب بحيرة طبريّة، وبينهما هضبةٌ جافّة.', en: 'The Crusader army is at the springs of Saffuriya, Salah al-Din’s army is near Lake Tiberias, and a dry plateau lies between them.' },
        { ar: 'صلاح الدين يحاصر طبريّة، والصليبيّون يتركون الماء ويسيرون في الحرّ.', en: 'Salah al-Din besieges Tiberias; the Crusaders leave their water and march in the heat.' },
        { ar: 'الصليبيّون عند قرنَي حطّين بلا ماء، وجيش صلاح الدين بينهم وبين البحيرة والينابيع.', en: 'The Crusaders are at the Horns of Hattin without water; Salah al-Din’s army stands between them and the lake and springs.' },
        { ar: 'القدس: دخولٌ بالصلح، وأمانٌ لأهلها، وخروجٌ آمن لمن أراد.', en: 'Al-Quds: entered by agreement, with safety for its people and a safe departure for those who wished to leave.' }
      ],
      bg: {
        ar: 'دخل الصليبيّون القدسَ سنة 492 هـ (1099 م)، وبقيت في أيديهم قرابةَ تسعين سنة. عمل السلطان صلاح الدين الأيّوبيّ سنواتٍ طويلةً على توحيد مصر والشام، وكانت بينه وبين الصليبيّين هُدنة. لكنّ أحد أمرائهم، صاحبَ حصن الكَرَك، نقض العهدَ واعتدى على قافلةٍ آمنة. فجمع صلاح الدين جيوشَه وسار في صيف سنة 583 هـ (1187 م)، وهدفُه البعيد: القدس.',
        en: 'The Crusaders took al-Quds in 492 AH (1099 CE) and held it for nearly ninety years. Sultan Salah al-Din al-Ayyubi worked for many years to unite Egypt and al-Sham, and there was a truce between him and the Crusaders. But one of their lords, the ruler of the castle of al-Karak, broke the agreement and attacked a peaceful caravan. So Salah al-Din gathered his armies and set out in the summer of 583 AH (1187 CE). His distant goal: al-Quds.'
      },
      decisions: [
        {
          q: { ar: 'جيش الصليبيّين مجتمعٌ في صفّورية حيث الينابيع والمراعي، وموقعُهم قويّ. والصيف شديدُ الحرّ. كيف يكون التحرّك؟', en: 'The Crusader army is gathered at Saffuriya, with springs and pasture, in a strong position. The summer is fiercely hot. What is the best move?' },
          opts: [
            { t: { ar: 'مهاجمة معسكرهم مباشرةً', en: 'Attack their camp directly' }, fb: { ar: 'الهجوم على جيشٍ مرتاحٍ عند مائه مخاطرةٌ كبيرة.', en: 'Attacking a rested army beside its water is a big risk.' } },
            { ok: 1, t: { ar: 'محاصرة طبريّة لاستدراجهم بعيدًا عن الماء', en: 'Besiege Tiberias to draw them away from the water' }, fb: { ar: 'خطّةٌ حكيمة! بها يختار القائدُ مكانَ اللقاء وزمانَه.', en: 'A wise plan! It lets the commander choose the place and time of the meeting.' } },
            { t: { ar: 'الانتظار أسابيعَ حتى يتحرّكوا', en: 'Wait for weeks until they move' }, fb: { ar: 'الصبر حسَن، لكنّ الجيش الكبير يصعب إبقاؤه مجتمعًا مدّةً طويلة دون عمل.', en: 'Patience is good, but a large army is hard to keep together for long with nothing to do.' } }
          ],
          actual: {
            ar: 'حاصر صلاح الدين مدينةَ طبريّة القريبة. اختلف قادةُ الصليبيّين، ثم قرّروا السير لنجدتها. فتركوا ينابيع صفّورية وساروا نهارًا كاملًا في هضبةٍ جافّة تحت شمس الصيف، ودروعُهم ثقيلة وماؤهم قليل.',
            en: 'Salah al-Din besieged the nearby town of Tiberias. The Crusader leaders disagreed, then decided to march to its aid. They left the springs of Saffuriya and marched a whole day across a dry plateau under the summer sun, in heavy armour and with little water.'
          }
        },
        {
          q: { ar: 'الجيش المقابل يسير عطشانَ متعَبًا ويريد الوصول إلى الماء. ما أهمُّ شيءٍ ينبغي التحكّم فيه؟', en: 'The other army is marching, thirsty and tired, and wants to reach water. What is the most important thing to control?' },
          opts: [
            { t: { ar: 'أعلى تلٍّ في المنطقة', en: 'The highest hill in the area' }, fb: { ar: 'المرتفعات مفيدة، لكنّ التلّ بلا ماءٍ لا ينفع صاحبَه في هذا الحرّ.', en: 'High ground is useful, but a hill without water is little help in such heat.' } },
            { t: { ar: 'طريق العودة إلى دمشق', en: 'The road back to Damascus' }, fb: { ar: 'تأمينُ طريق العودة حذرٌ جيّد، لكنّ الذي يحسم الأمرَ اليوم هو الماء.', en: 'Securing the way back is sensible, but today the thing that decides the matter is water.' } },
            { ok: 1, t: { ar: 'الماء: الطريق إلى البحيرة والينابيع', en: 'The water: the way to the lake and the springs' }, fb: { ar: 'إصابةٌ في الهدف! في صيف هذه الأرض الماءُ هو المفتاح.', en: 'Right on target! In this land’s summer, water is the key.' } }
          ],
          actual: {
            ar: 'وضع صلاح الدين جيشَه بين الصليبيّين وبحيرة طبريّة، وأمسك بالينابيع القريبة، فباتوا ليلتَهم بلا ماء. وفي الصباح، يومَ السبت 25 ربيع الآخر 583 هـ (4 يوليو 1187 م)، كانت المعركة عند تلَّي «قرنَي حطّين»، فانتصر المسلمون وأُسر ملكُ الصليبيّين. ولمّا جيء به عطشانَ قدّم له صلاح الدين ماءً باردًا.',
            en: 'Salah al-Din placed his army between the Crusaders and Lake Tiberias and held the nearby springs, so they spent the night without water. In the morning — Saturday 25 Rabi‘ al-Akhir 583 AH (4 July 1187 CE) — the battle took place at the twin hills called the Horns of Hattin. The Muslims were victorious and the Crusader king was taken captive. When he was brought in thirsty, Salah al-Din gave him cold water to drink.'
          }
        },
        {
          q: { ar: 'بعد حطّين فتح صلاح الدين مدنَ الساحل، ثم وصل إلى القدس وحاصرها أيّامًا. طلب أهلُها الأمان. والمسلمون يذكرون أنّ كثيرًا من أهل القدس قُتلوا حين دخلها الصليبيّون من قبل. ما القرار؟', en: 'After Hattin, Salah al-Din opened the coastal towns, then reached al-Quds and besieged it for some days. Its people asked for safety. The Muslims remembered that many of the people of al-Quds had been killed when the Crusaders took it long before. What is the decision?' },
          opts: [
            { t: { ar: 'دخولها بالقوّة ومعاملة أهلها بالمِثل', en: 'Take it by force and treat its people the same way' }, fb: { ar: 'تذكُّر الظلم مؤلم، لكنّ الظلم لا يُقابَل بظلم. العدل والرحمة أعلى من الانتقام.', en: 'Remembering an injustice hurts, but injustice is not answered with injustice. Justice and mercy stand higher than revenge.' } },
            { ok: 1, t: { ar: 'قبول الصلح ومنح أهلها الأمان', en: 'Accept the agreement and grant its people safety' }, fb: { ar: 'نعم! هكذا تُحفَظ الأرواح، وتُصان حرمةُ المدينة المباركة.', en: 'Yes! That is how lives are protected and the blessed city is honoured.' } },
            { t: { ar: 'رفع الحصار والعودة', en: 'Lift the siege and go back' }, fb: { ar: 'الهدف الذي عُمل له سنواتٍ صار قريبًا، والصلح يحقّقه دون أذًى لأحد.', en: 'The goal worked towards for years is now near, and an agreement achieves it without harming anyone.' } }
          ],
          actual: {
            ar: 'قبِل صلاح الدين الصلح، ودخل المسلمون القدسَ يومَ الجمعة 27 رجب 583 هـ (2 أكتوبر 1187 م) دون انتقام. خرج مَن أراد الخروج آمنًا مقابل فِديةٍ معلومة، وأُمهلوا أربعين يومًا، وأعفى صلاح الدين وأخوه العادل كثيرًا من الفقراء الذين لم يجدوا ما يدفعونه. وتُركت كنيسة القيامة قائمة. ثم نُظّف المسجد الأقصى، ووُضع فيه المنبر الذي كان نور الدين محمود قد أمر بصنعه من قبل، وأُقيمت فيه صلاة الجمعة.',
            en: 'Salah al-Din accepted the agreement, and the Muslims entered al-Quds on Friday 27 Rajab 583 AH (2 October 1187 CE) without revenge. Those who wished to leave went out safely for a set ransom and were given forty days, and Salah al-Din and his brother al-‘Adil released many of the poor who could not pay. The Church of the Holy Sepulchre was left standing. Then al-Aqsa Mosque was cleaned, the minbar that Nur al-Din Mahmud had ordered to be made years earlier was placed in it, and the Friday prayer was held there.'
          }
        }
      ],
      lessons: [
        { i: '🗺️', t: { ar: 'التخطيط ومعرفة الأرض', en: 'Planning and knowing the land' }, d: { ar: 'عرف صلاح الدين قيمةَ الماء في الصيف فبنى خطّتَه عليه.', en: 'Salah al-Din knew the worth of water in summer and built his plan on it.' } },
        { i: '📜', t: { ar: 'الوفاء بالعهد', en: 'Keeping promises' }, d: { ar: 'نقضُ العهد كان سببَ الحرب، وصلاح الدين وفى بالأمان الذي أعطاه.', en: 'A broken agreement started the war, and Salah al-Din kept the promise of safety he gave.' } },
        { i: '🕊️', t: { ar: 'الرحمة عند القدرة', en: 'Mercy when you have the power' }, d: { ar: 'دخل القدسَ بلا انتقام، وأعفى الفقراء من الفِدية.', en: 'He entered al-Quds without revenge and released the poor from the ransom.' } }
      ],
      sources: { ar: 'الكامل في التاريخ لابن الأثير · النوادر السلطانيّة لابن شدّاد · البداية والنهاية لابن كثير', en: 'Al-Kamil fi’l-Tarikh by Ibn al-Athir · Al-Nawadir al-Sultaniyyah by Ibn Shaddad · Al-Bidayah wa’l-Nihayah by Ibn Kathir' },
      quiz: [
        { q: { ar: 'ما الذي تحكّم فيه صلاح الدين في حطّين؟', en: 'What did Salah al-Din control at Hattin?' }, o: [{ ar: 'الجسور', en: 'The bridges' }, { ar: 'الماء', en: 'The water' }, { ar: 'السفن', en: 'The ships' }], a: 1 },
        { q: { ar: 'كيف دخل المسلمون القدس؟', en: 'How did the Muslims enter al-Quds?' }, o: [{ ar: 'بالصلح، مع الأمان لأهلها', en: 'By agreement, with safety for its people' }, { ar: 'بهدم أسوارها كلِّها', en: 'By tearing down all its walls' }, { ar: 'بعد حصارٍ دام سنوات', en: 'After a siege that lasted years' }], a: 0 },
        { q: { ar: 'في أيّ سنةٍ كان ذلك؟', en: 'In which year did this happen?' }, o: [{ ar: '658 هـ', en: '658 AH' }, { ar: '857 هـ', en: '857 AH' }, { ar: '583 هـ', en: '583 AH' }], a: 2 }
      ]
    },

    {
      id: 'aynjalut', icon: '⛰️', c: '#3A8FB7',
      title: { ar: 'عين جالوت', en: 'Ayn Jalut' },
      date: { ar: '25 رمضان 658 هـ · 1260 م', en: '25 Ramadan 658 AH · 1260 CE' },
      teaser: { ar: 'قُطُز وبيبرس: كمينٌ بين التلال', en: 'Qutuz and Baybars: an ambush among the hills' },
      sides: { m: { ar: 'المماليك', en: 'The Mamluks' }, e: { ar: 'المغول', en: 'The Mongols' } },
      map: mapJalut,
      caps: [
        { ar: 'المغول قرب عين جالوت، وجيش قُطُز قادمٌ من مصر.', en: 'The Mongols are near Ayn Jalut, and Qutuz’s army is coming from Egypt.' },
        { ar: 'جيش المماليك يصل إلى السهل.', en: 'The Mamluk army reaches the plain.' },
        { ar: 'مقدّمة بيبرس تتراجع لتستدرج المغول، والقوّة الرئيسة مختبئةٌ بين التلال.', en: 'Baybars’ vanguard pulls back to draw the Mongols in, while the main force is hidden among the hills.' },
        { ar: 'القوّة الرئيسة تخرج من بين التلال، والمغول يتراجعون.', en: 'The main force comes out from the hills, and the Mongols withdraw.' }
      ],
      bg: {
        ar: 'في سنة 656 هـ (1258 م) اجتاح المغولُ بغدادَ ودمّروها، ثم دخلوا حلب ودمشق سنة 658 هـ. وأرسل قائدُهم هولاكو رسالةَ تهديدٍ إلى مصر يطلب الاستسلام. ثم عاد هولاكو شرقًا بمعظم جيشه، وترك قائدَه كَتْبُغا في الشام. وكان يحكم مصرَ السلطانُ المملوكيّ سيف الدين قُطُز، ولم يبقَ بين المغول ومصرَ إلا القليل.',
        en: 'In 656 AH (1258 CE) the Mongols overran Baghdad and destroyed it, then entered Aleppo and Damascus in 658 AH. Their leader Hulagu sent a threatening letter to Egypt demanding surrender. Then Hulagu went back east with most of his army, leaving his commander Kitbuqa in al-Sham. Egypt was ruled by the Mamluk sultan Sayf al-Din Qutuz, and little now stood between the Mongols and Egypt.'
      },
      decisions: [
        {
          q: { ar: 'وصلت رسالة التهديد. جيشٌ يخافه الناسُ في كلّ مكان يطلب الاستسلام. ما القرار؟', en: 'The threatening letter arrives. An army that people fear everywhere demands surrender. What is the decision?' },
          opts: [
            { t: { ar: 'الاستسلام طلبًا للسلامة', en: 'Surrender, hoping to stay safe' }, fb: { ar: 'الخوف شعورٌ طبيعيّ، لكنّ الاستسلام كان يعني ضياعَ البلاد وأهلِها.', en: 'Fear is a natural feeling, but surrender would have meant losing the land and its people.' } },
            { t: { ar: 'انتظارهم داخل مصر', en: 'Wait for them inside Egypt' }, fb: { ar: 'الدفاع من الداخل ممكن، لكنّه يجعل الحربَ في أرضك وبين أهلك.', en: 'Defending from inside is possible, but it brings the war onto your own land and among your own people.' } },
            { ok: 1, t: { ar: 'مشاورة الأمراء، ثم الخروج لملاقاتهم في الشام', en: 'Consult the commanders, then go out to meet them in al-Sham' }, fb: { ar: 'نعم! شورى أوّلًا، ثم عزمٌ وحركة.', en: 'Yes! Consultation first, then resolve and action.' } }
          ],
          actual: {
            ar: 'جمع قُطُز الأمراءَ وشاورهم، ثم قرّر ألّا ينتظر حتى يصل المغول إلى مصر. فخرج بالجيش في صيف سنة 658 هـ، وسار عبر غزّة ثم على ساحل فلسطين، وجعل الأمير بيبرس على مقدّمة الجيش.',
            en: 'Qutuz gathered the commanders and consulted them, then decided not to wait for the Mongols to reach Egypt. He set out with the army in the summer of 658 AH, marching through Gaza and then along the coast of Palestine, and he put the commander Baybars at the head of the vanguard.'
          }
        },
        {
          q: { ar: 'التقى الجيشان قرب عين جالوت، في سهلٍ تحيط به تلال. فرسانُ المغول سريعون جدًّا. كيف يُرتَّب الجيش؟', en: 'The two armies meet near Ayn Jalut, on a plain surrounded by hills. The Mongol riders are very fast. How should the army be arranged?' },
          opts: [
            { ok: 1, t: { ar: 'إخفاء القوّة الرئيسة بين التلال، وإرسال مقدّمةٍ تستدرجهم', en: 'Hide the main force in the hills and send a vanguard to draw them in' }, fb: { ar: 'خطّةٌ ذكيّة! الأرضُ نفسُها تصير جزءًا من الجيش.', en: 'A clever plan! The land itself becomes part of the army.' } },
            { t: { ar: 'وضع الجيش كلِّه صفًّا واحدًا مكشوفًا', en: 'Line up the whole army in the open' }, fb: { ar: 'هكذا يرى الطرفُ الآخر كلَّ قوّتك ويستعدّ لها.', en: 'That way the other side sees all your strength and prepares for it.' } },
            { t: { ar: 'التحرّك ليلًا في أرضٍ غير معروفة', en: 'Move by night across unknown ground' }, fb: { ar: 'المفاجأة مفيدة، لكنّ التحرّك في أرضٍ لا تعرفها قد يُضيّع جيشَك أنت.', en: 'Surprise is useful, but moving over ground you do not know can scatter your own army.' } }
          ],
          actual: {
            ar: 'أخفى قُطُز معظمَ جيشه بين التلال والأشجار، وتقدّم بيبرس بالمقدّمة فاشتبك مع المغول ثم تراجع أمامهم. ظنّ المغول أنّه كلُّ الجيش فاندفعوا خلفه إلى داخل السهل، وعندها خرجت القوّة الرئيسة وأحاطت بهم.',
            en: 'Qutuz hid most of his army among the hills and trees. Baybars went forward with the vanguard, engaged the Mongols and then pulled back before them. The Mongols thought this was the whole army and rushed after it into the plain — and then the main force came out and surrounded them.'
          }
        },
        {
          q: { ar: 'في وسط المعركة ضغط المغول بقوّةٍ على أحد جناحَي الجيش فاضطرب وكاد يتراجع. الجميعُ ينظر إلى القائد. ما العمل؟', en: 'In the middle of the battle the Mongols press hard on one wing of the army; it wavers and almost falls back. Everyone looks to the leader. What should be done?' },
          opts: [
            { t: { ar: 'الأمر بالانسحاب الكامل', en: 'Order a full retreat' }, fb: { ar: 'الانسحاب في هذه اللحظة قد يحوّل الاضطراب إلى هزيمة. الثبات يُعيد الثقة.', en: 'Retreating at that moment could turn a wobble into a defeat. Standing firm brings confidence back.' } },
            { t: { ar: 'المراقبة من بعيدٍ وانتظار ما يحدث', en: 'Watch from afar and wait' }, fb: { ar: 'في لحظة الخوف يحتاج الناسُ أن يرَوا قائدَهم قريبًا منهم.', en: 'In a moment of fear, people need to see their leader close to them.' } },
            { ok: 1, t: { ar: 'الثبات، وتقدُّم القائد بنفسه ليشجّع الجيش', en: 'Stand firm and go forward in person to rally the army' }, fb: { ar: 'نعم! شجاعةُ القائد تنتقل إلى مَن حوله.', en: 'Yes! A leader’s courage spreads to those around him.' } }
          ],
          actual: {
            ar: 'ألقى قُطُز خوذتَه ونادى بأعلى صوته: «وا إسلاماه!»، وتقدّم بنفسه، فثبت الجنودُ وعادوا إلى أماكنهم. وانتهى ذلك اليوم، الجمعة 25 رمضان 658 هـ (3 سبتمبر 1260 م)، بنصرٍ للمسلمين، وتراجع المغول عن بلاد الشام.',
            en: 'Qutuz threw off his helmet and cried out at the top of his voice, “Wa Islamah!” — a call to stand up for Islam — and went forward himself. The soldiers held firm and returned to their places. That day, Friday 25 Ramadan 658 AH (3 September 1260 CE), ended in victory for the Muslims, and the Mongols withdrew from al-Sham.'
          }
        }
      ],
      lessons: [
        { i: '🤝', t: { ar: 'الشورى ثم العزم', en: 'Consult, then be resolute' }, d: { ar: 'شاور قُطُز الأمراءَ ثم مضى في قراره دون تردّد.', en: 'Qutuz consulted his commanders, then carried out the decision without wavering.' } },
        { i: '🗺️', t: { ar: 'التخطيط ومعرفة الأرض', en: 'Planning and knowing the land' }, d: { ar: 'استُعملت التلال لإخفاء القوّة الرئيسة.', en: 'The hills were used to hide the main force.' } },
        { i: '🌟', t: { ar: 'الثبات والتوكّل على الله', en: 'Firmness and trust in Allah' }, d: { ar: 'ثبت القائدُ في أصعب لحظة فثبت الجميع.', en: 'The leader stood firm at the hardest moment, and so did everyone.' } }
      ],
      sources: { ar: 'البداية والنهاية لابن كثير · السلوك لمعرفة دول الملوك للمقريزيّ · النجوم الزاهرة لابن تغري بردي', en: 'Al-Bidayah wa’l-Nihayah by Ibn Kathir · Al-Suluk by al-Maqrizi · Al-Nujum al-Zahirah by Ibn Taghribirdi' },
      quiz: [
        { q: { ar: 'مَن قاد جيشَ المسلمين في عين جالوت؟', en: 'Who led the Muslim army at Ayn Jalut?' }, o: [{ ar: 'السلطان قُطُز', en: 'Sultan Qutuz' }, { ar: 'السلطان صلاح الدين', en: 'Sultan Salah al-Din' }, { ar: 'السلطان محمّد الفاتح', en: 'Sultan Muhammad al-Fatih' }], a: 0 },
        { q: { ar: 'مَن قاد مقدّمةَ الجيش؟', en: 'Who led the vanguard?' }, o: [{ ar: 'كَتْبُغا', en: 'Kitbuqa' }, { ar: 'بيبرس', en: 'Baybars' }, { ar: 'نور الدين محمود', en: 'Nur al-Din Mahmud' }], a: 1 },
        { q: { ar: 'أين اختبأت القوّة الرئيسة؟', en: 'Where was the main force hidden?' }, o: [{ ar: 'داخل قلعة', en: 'Inside a castle' }, { ar: 'على السفن', en: 'On ships' }, { ar: 'بين التلال', en: 'Among the hills' }], a: 2 }
      ]
    },

    {
      id: 'constantinople', icon: '⛵', c: '#7E5BD0',
      title: { ar: 'فتح القسطنطينيّة', en: 'The Opening of Constantinople' },
      date: { ar: '857 هـ · 1453 م', en: '857 AH · 1453 CE' },
      teaser: { ar: 'محمّد الفاتح: سفنٌ تسير على اليابسة', en: 'Muhammad al-Fatih: ships that crossed the land' },
      sides: { m: { ar: 'العثمانيّون', en: 'The Ottomans' }, e: { ar: 'المدينة وأسوارها', en: 'The city and its walls' } },
      map: mapConst,
      caps: [
        { ar: 'القسطنطينيّة: بحرٌ من ثلاث جهات، وأسوارٌ من جهة البرّ، وسلسلةٌ تُغلق القرن الذهبيّ.', en: 'Constantinople: sea on three sides, great walls on the land side, and a chain closing the Golden Horn.' },
        { ar: 'قلعةٌ على البوسفور، ومدافعُ أمام الأسوار، وأسطولٌ في المضيق.', en: 'A fortress on the Bosphorus, cannons facing the walls, and a fleet in the strait.' },
        { ar: 'السفن تُجَرّ على اليابسة خلف غَلَطة وتنزل في القرن الذهبيّ.', en: 'The ships are hauled over land behind Galata and lowered into the Golden Horn.' },
        { ar: 'فتح المدينة في 20 جمادى الأولى 857 هـ.', en: 'The city is opened on 20 Jumada al-Ula 857 AH.' }
      ],
      bg: {
        ar: 'كانت القسطنطينيّة عاصمةَ الدولة البيزنطيّة، ومن أحصن مدن العالم: يحيط بها البحرُ من ثلاث جهات، وتحميها من البرّ أسوارٌ عظيمة. حاول المسلمون فتحَها مرّاتٍ منذ زمن الصحابة، وعند أسوارها دُفن الصحابيّ أبو أيّوب الأنصاريّ رضي الله عنه. ولمّا تولّى السلطان العثمانيّ محمّد الثاني الحكمَ وهو شابٌّ في نحو التاسعة عشرة جعل فتحَها هدفَه، وكانت المدينة تفصل بين أراضي دولته في آسيا وأوروبّا.',
        en: 'Constantinople was the capital of the Byzantine state and one of the best-defended cities in the world: the sea surrounded it on three sides, and mighty walls protected it on the land side. Muslims had tried to open it several times since the days of the Companions, and the Companion Abu Ayyub al-Ansari (may Allah be pleased with him) was buried near its walls. When the Ottoman sultan Muhammad II came to rule as a young man of about nineteen, he made opening it his goal; the city stood between his lands in Asia and in Europe.'
      },
      decisions: [
        {
          q: { ar: 'الأسوار عظيمة، والمدينة تصلها المساعدةُ من البحر. كيف يكون الاستعداد؟', en: 'The walls are mighty, and help reaches the city by sea. How should one prepare?' },
          opts: [
            { t: { ar: 'الهجوم فورًا بما هو موجود', en: 'Attack at once with what is at hand' }, fb: { ar: 'الحماس جميل، لكنّ هذه الأسوار صمدت قرونًا؛ لا بدّ من إعدادٍ يناسبها.', en: 'Enthusiasm is good, but these walls had stood for centuries; they call for fitting preparation.' } },
            { ok: 1, t: { ar: 'إعدادٌ طويل: قلعةٌ تتحكّم في المضيق، ومدافعُ كبيرة', en: 'Long preparation: a fortress to control the strait, and great cannons' }, fb: { ar: 'نعم! الهدف الكبير يحتاج إعدادًا كبيرًا.', en: 'Yes! A big goal needs big preparation.' } },
            { t: { ar: 'تركُ الفكرة لأنّها صعبة', en: 'Give up the idea because it is hard' }, fb: { ar: 'كثيرٌ من الأمور الكبيرة يبدو مستحيلًا حتى يُعَدَّ له جيّدًا.', en: 'Many great things look impossible until they are well prepared for.' } }
          ],
          actual: {
            ar: 'بنى السلطان سنة 856 هـ (1452 م) قلعةَ «روملي حصار» على مضيق البوسفور، مقابلَ قلعةٍ أقدمَ على الضفّة الأخرى، فصار يتحكّم في السفن العابرة. وأمر بصنع مدافعَ كبيرة، وجهّز أسطولًا. ثم بدأ الحصار في ربيع سنة 857 هـ (أبريل 1453 م).',
            en: 'In 856 AH (1452 CE) the sultan built the fortress of Rumeli Hisarı on the Bosphorus strait, opposite an older fortress on the other shore, so that he controlled the ships passing through. He ordered great cannons to be made and prepared a fleet. Then the siege began in the spring of 857 AH (April 1453 CE).'
          }
        },
        {
          q: { ar: 'أغلق المدافعون مدخلَ خليج «القرن الذهبيّ» بسلسلةٍ حديديّةٍ ضخمة، فلم تستطع السفن الدخول. ما الحلّ؟', en: 'The defenders have closed the mouth of the Golden Horn inlet with a huge iron chain, so the ships cannot get in. What is the solution?' },
          opts: [
            { t: { ar: 'محاولة كسر السلسلة مرّةً بعد مرّة', en: 'Keep trying to break the chain' }, fb: { ar: 'المثابرة جيّدة، لكنّ تكرار الطريقة نفسِها لا يكفي إن لم تنجح؛ أحيانًا يكون الحلُّ في طريقٍ آخر.', en: 'Perseverance is good, but repeating the same method is not enough if it does not work; sometimes the answer is another way round.' } },
            { t: { ar: 'الاستغناء عن الأسطول', en: 'Do without the fleet' }, fb: { ar: 'الأسطول سببٌ مهمّ أُعِدّ بتعب؛ الأفضل البحثُ عن طريقةٍ لاستعماله.', en: 'The fleet is an important means that took effort to prepare; better to look for a way to use it.' } },
            { ok: 1, t: { ar: 'نقل السفن على اليابسة إلى ما وراء السلسلة', en: 'Carry the ships over land to the far side of the chain' }, fb: { ar: 'فكرةٌ مبتكَرة! حين يُغلَق طريقٌ يُبحَث عن غيره.', en: 'An inventive idea! When one way is closed, look for another.' } }
          ],
          actual: {
            ar: 'أمر السلطان بتمهيد طريقٍ على اليابسة خلف حيّ غَلَطة، ووُضعت عليه ألواحٌ خشبيّةٌ مدهونة بالزيت والشحم. وفي ليلةٍ واحدة جُرَّت عليها نحو سبعين سفينةً من البوسفور إلى داخل القرن الذهبيّ. وفي الصباح فوجئ المدافعون بالسفن خلف السلسلة.',
            en: 'The sultan ordered a track to be prepared over the land behind the district of Galata, and wooden boards greased with oil and fat were laid along it. In a single night about seventy ships were hauled over it from the Bosphorus into the Golden Horn. In the morning the defenders were astonished to find the ships behind the chain.'
          }
        },
        {
          q: { ar: 'مضت أسابيعُ والأسوار ما زالت صامدة. تعب الجيش، وبعضُ المستشارين يقترح رفعَ الحصار. ما العمل؟', en: 'Weeks pass and the walls still stand. The army is tired, and some advisers suggest lifting the siege. What should be done?' },
          opts: [
            { ok: 1, t: { ar: 'مشاورة القادة والعلماء، ثم المواصلة بعزم', en: 'Consult the commanders and scholars, then press on with resolve' }, fb: { ar: 'نعم! الشورى تُنير الطريق، والمثابرة تُكمله.', en: 'Yes! Consultation lights the way, and perseverance completes it.' } },
            { t: { ar: 'رفع الحصار فورًا', en: 'Lift the siege at once' }, fb: { ar: 'التعب مفهوم، لكنّ تركَ العمل قبيل تمامه يُضيّع كلَّ ما بُذل.', en: 'Being tired is understandable, but leaving a task just before it is done wastes all the effort given.' } },
            { t: { ar: 'المواصلة دون سماع أيّ رأي', en: 'Carry on without listening to anyone' }, fb: { ar: 'العزم جميل، لكنّ سماعَ الآراء، حتى المخالفة، يكشف ما قد يغيب عن القائد.', en: 'Resolve is good, but hearing opinions — even opposing ones — shows a leader what he might have missed.' } }
          ],
          actual: {
            ar: 'عقد السلطان مجلسًا للمشورة. رأى بعضُهم رفعَ الحصار، وشجّع آخرون على المواصلة، ومنهم شيخُه آق شمس الدين. فقرّر السلطان المواصلة. وفي يوم الثلاثاء 20 جمادى الأولى 857 هـ (29 مايو 1453 م) فُتحت المدينة بعد حصارٍ دام نحو ثلاثةٍ وخمسين يومًا. وبعد الفتح أعاد السلطانُ النظامَ إلى المدينة، وأمّن أهلَها على أنفسهم وعبادتهم، وعُرف منذ ذلك اليوم بلقب «الفاتح».',
            en: 'The sultan held a council. Some advised lifting the siege, while others — among them his teacher Shaykh Aq Shams al-Din — encouraged him to continue. The sultan decided to press on. On Tuesday 20 Jumada al-Ula 857 AH (29 May 1453 CE) the city was opened after a siege of about fifty-three days. After the opening the sultan restored order in the city and gave its people safety for themselves and their worship, and from that day he was known as “al-Fatih”, the Opener.'
          }
        }
      ],
      lessons: [
        { i: '🛠️', t: { ar: 'الإعداد والأخذ بالأسباب', en: 'Preparation and taking the means' }, d: { ar: 'قلعةٌ ومدافعُ وأسطول: إعدادٌ طويل قبل البدء.', en: 'A fortress, cannons and a fleet: long preparation before starting.' } },
        { i: '💡', t: { ar: 'الابتكار وعدم اليأس', en: 'Inventiveness and never despairing' }, d: { ar: 'حين أُغلق البحر سارت السفن على اليابسة.', en: 'When the sea was closed, the ships crossed the land.' } },
        { i: '🤝', t: { ar: 'الشورى والمثابرة', en: 'Consultation and perseverance' }, d: { ar: 'استمع السلطان للآراء ثم واصل حتى تمّ العمل.', en: 'The sultan listened to the opinions, then kept going until the task was done.' } }
      ],
      sources: { ar: 'تاريخ الدولة العليّة العثمانيّة لمحمّد فريد بك · تاريخ أبي الفتح لطورسون بك · الشقائق النعمانيّة لطاشكبري زاده', en: 'Tarikh al-Dawlah al-‘Aliyyah al-‘Uthmaniyyah by Muhammad Farid Bey · Tarih-i Ebü’l-Feth by Tursun Bey · Al-Shaqa’iq al-Nu‘maniyyah by Taşköprüzade' },
      quiz: [
        { q: { ar: 'كيف دخلت السفنُ القرنَ الذهبيّ؟', en: 'How did the ships get into the Golden Horn?' }, o: [{ ar: 'بكسر السلسلة', en: 'By breaking the chain' }, { ar: 'جُرَّت على اليابسة', en: 'They were hauled over land' }, { ar: 'عبر نفقٍ تحت الماء', en: 'Through a tunnel under the water' }], a: 1 },
        { q: { ar: 'ما الذي أغلق مدخلَ القرن الذهبيّ؟', en: 'What closed the mouth of the Golden Horn?' }, o: [{ ar: 'سلسلةٌ حديديّةٌ ضخمة', en: 'A huge iron chain' }, { ar: 'جسرٌ حجريّ', en: 'A stone bridge' }, { ar: 'سورٌ من الخشب', en: 'A wooden wall' }], a: 0 },
        { q: { ar: 'بأيّ لقبٍ عُرف السلطان محمّد الثاني بعد ذلك؟', en: 'By what title was Sultan Muhammad II known afterwards?' }, o: [{ ar: 'الناصر', en: 'Al-Nasir' }, { ar: 'المظفَّر', en: 'Al-Muzaffar' }, { ar: 'الفاتح', en: 'Al-Fatih' }], a: 2 }
      ]
    }
  ];
})();
