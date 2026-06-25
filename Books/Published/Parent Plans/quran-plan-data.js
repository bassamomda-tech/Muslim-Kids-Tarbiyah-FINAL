/* ════════════════════════════════════════════════════════════════
   quran-plan-data.js — content for «خطة حفظ القرآن · Memorization Plan».
   Order: Juz 'Amma first, then backward (Naba → Baqarah).
   5 timescales (1–5 yrs) · classic 3-tier revision · worked tables.
   Page math assumes the 604-page Madani mushaf (≈20 pages / juz,
   15 lines / page) and ~5–6 study days a week with breaks.
   window.QPLAN = { method, plans, juzOrder, juzAmma, ... }
   ════════════════════════════════════════════════════════════════ */
(function () {
  var Q = {};

  /* ── the 3-tier method ── */
  Q.method = {
    intro:{ar:'الحفظُ الراسخُ ثلاثُ طبقاتٍ تُؤدَّى كلَّ يوم: قِسمٌ جديدٌ صغير، ومراجعةٌ قريبةٌ لما حُفِظ حديثًا، ومراجعةٌ بعيدةٌ تدور على كلِّ المحفوظ. من حفظ بلا مراجعةٍ كمن يجمع الماءَ في غربال.',
      en:'Solid memorization is three daily layers: a small new portion, a near-review of what was recently learned, and a far-review that rotates over everything memorized. Memorizing without review is like gathering water in a sieve.'},
    tiers:[
      { ic:'🌱', c:'#1A9B7B', name:{ar:'الجديد',en:'New (Al-Jadīd)'},
        d:{ar:'مقطعُ اليوم الجديد. كرّره ٢٠ مرّة بالنظر، ثم ٢٠ مرّة من الحفظ، واعرضه صباح الغد قبل أيِّ جديد.',en:'Today\u2019s new portion. Repeat it ~20\u00d7 looking, then ~20\u00d7 from memory, and recite it the next morning before anything new.'} },
      { ic:'🔄', c:'#C9A227', name:{ar:'المراجعة القريبة',en:'Near review (Al-Qarība)'},
        d:{ar:'آخرُ ما حُفِظ (تقريبًا الأسبوع الأخير أو الجزء الحالي). تُراجَع كاملةً كلَّ يوم حتى ترسخ.',en:'The most recent memorization (about the last week, or the current juz). Reviewed in full every day until it sets.'} },
      { ic:'🏔️', c:'#2980B9', name:{ar:'المراجعة البعيدة',en:'Far review (Al-Baʿīda)'},
        d:{ar:'كلُّ المحفوظ القديم، يدور بمعدّل صفحةٍ أو جزءٍ في اليوم، فتمرُّ على كلِّ ما حفظتَ كلَّ أسبوعين إلى شهر.',en:'All older memorization, rotating at about a page or a juz a day, so you pass over everything every two weeks to a month.'} }
    ],
    steps:[
      {ar:'اختر مصحفًا واحدًا ثابتًا (مصحف الحفظ) ولا تغيّره — الذاكرة بصريّة.',en:'Pick one fixed mushaf (your \u201chifdh copy\u201d) and never change it \u2014 memory is visual.'},
      {ar:'ثبّت وقتًا يوميًّا واحدًا — بعد الفجر أفضلُه — لا يتغيّر.',en:'Fix one daily time \u2014 after Fajr is best \u2014 that never changes.'},
      {ar:'صحِّح النطقَ أولًا: اسمع المقطع من قارئٍ متقن قبل أن تحفظه.',en:'Fix pronunciation first: hear the portion from a skilled reciter before memorizing it.'},
      {ar:'اربط الحفظَ بالعرض: لا يُعتمد محفوظٌ حتى يُعرض على مُستمِع.',en:'Tie memorizing to reciting: nothing counts as memorized until recited to a listener.'},
      {ar:'يومُ الجمعة للمراجعة فقط — لا جديد، بل تثبيتٌ واختبار.',en:'Friday is review only \u2014 no new portion, just consolidation & testing.'}
    ]
  };

  /* ── the 5 timescales ── */
  Q.plans = [
    { years:1, ic:'🔥', c:'#C0392B', label:{ar:'سنةٌ واحدة',en:'1 year'},
      daily:{ar:'≈ صفحتان (~٣٠ سطرًا)',en:'\u2248 2 pages (~30 lines)'},
      days:{ar:'٦ أيّام / أسبوع',en:'6 days / week'},
      perJuz:{ar:'≈ ٩ أيّام للجزء',en:'\u2248 9 days per juz'},
      amma:{ar:'جزء عمّ في ~٩ أيّام',en:'Juz \u2019Amma in ~9 days'},
      age:{ar:'للكبار والمتفرّغين (١١+)',en:'For older / dedicated (11+)'},
      note:{ar:'وتيرةُ دور التحفيظ المكثّفة — تحتاج تفرّغًا ومراجعةً صارمة.',en:'An intensive ḥalaqah pace \u2014 needs free time and strict review.'} },
    { years:2, ic:'⚡', c:'#D4860B', label:{ar:'سنتان',en:'2 years'},
      daily:{ar:'≈ صفحة وربع (~١٨ سطرًا)',en:'\u2248 1\u00bc pages (~18 lines)'},
      days:{ar:'٦ أيّام / أسبوع',en:'6 days / week'},
      perJuz:{ar:'≈ أسبوعان للجزء',en:'\u2248 2 weeks per juz'},
      amma:{ar:'جزء عمّ في ~أسبوعين',en:'Juz \u2019Amma in ~2 weeks'},
      age:{ar:'للمنتظمين (٩–١٢)',en:'For steady learners (9\u201312)'},
      note:{ar:'توازنٌ قويٌّ بين السرعة والإتقان لطالبٍ ملتزم.',en:'A strong balance of speed and mastery for a committed student.'} },
    { years:3, ic:'🌟', c:'#1A9B7B', label:{ar:'ثلاث سنوات',en:'3 years'},
      daily:{ar:'≈ ثلثا صفحة (~١١ سطرًا)',en:'\u2248 \u2154 page (~11 lines)'},
      days:{ar:'٦ أيّام / أسبوع',en:'6 days / week'},
      perJuz:{ar:'≈ ٣ أسابيع ونصف للجزء',en:'\u2248 3\u00bd weeks per juz'},
      amma:{ar:'جزء عمّ في ~٣–٤ أسابيع',en:'Juz \u2019Amma in ~3\u20134 weeks'},
      age:{ar:'الخيارُ المتوازن (٨–١١)',en:'The balanced choice (8\u201311)'},
      note:{ar:'الأكثرُ واقعيّةً مع المدرسة — حفظٌ متينٌ بلا إرهاق.',en:'Most realistic alongside school \u2014 solid hifdh without burnout.'} },
    { years:4, ic:'🌿', c:'#2E86DE', label:{ar:'أربع سنوات',en:'4 years'},
      daily:{ar:'≈ نصف صفحة (~٨ أسطر)',en:'\u2248 \u00bd page (~8 lines)'},
      days:{ar:'٥–٦ أيّام / أسبوع',en:'5\u20136 days / week'},
      perJuz:{ar:'≈ ٥ أسابيع للجزء',en:'\u2248 5 weeks per juz'},
      amma:{ar:'جزء عمّ في ~٥ أسابيع',en:'Juz \u2019Amma in ~5 weeks'},
      age:{ar:'للصغار المنتظمين (٧–١٠)',en:'For steady young ones (7\u201310)'},
      note:{ar:'حملٌ يوميٌّ خفيف، مساحةٌ أكبر للمراجعة والإتقان.',en:'A light daily load, more room for review and mastery.'} },
    { years:5, ic:'🍃', c:'#8E44AD', label:{ar:'خمس سنوات',en:'5 years'},
      daily:{ar:'≈ نصف صفحة هادئة (~٥–٨ أسطر)',en:'\u2248 a gentle \u00bd page (~5\u20138 lines)'},
      days:{ar:'٥ أيّام / أسبوع',en:'5 days / week'},
      perJuz:{ar:'≈ ٦ أسابيع للجزء',en:'\u2248 6 weeks per juz'},
      amma:{ar:'جزء عمّ في ~٦ أسابيع',en:'Juz \u2019Amma in ~6 weeks'},
      age:{ar:'لأصغر الحفّاظ (٥–٨)',en:'For the youngest (5\u20138)'},
      note:{ar:'أرفقُ الخطط بالطفل الصغير: قليلٌ ثابتٌ يبني حبًّا لا نفورًا.',en:'The gentlest plan: a small steady amount that builds love, not aversion.'} }
  ];
  Q.paceNote = {ar:'الأرقامُ تقريبيّة لمصحف ٦٠٤ صفحات (≈٢٠ صفحة للجزء)، وتفترض ٥–٦ أيّام حفظٍ أسبوعيًّا مع راحةٍ في رمضان والسفر، وأيّامِ المراجعة محسوبةٌ ضمنها. السرعةُ تختلف بحسب الطفل — والإتقانُ أهمُّ من السرعة.',
    en:'Figures are approximate for the 604-page Madani mushaf (\u224820 pages/juz), assuming 5\u20136 study days a week with breaks for Ramadan & travel, and review days included. Pace varies by child \u2014 mastery matters more than speed.'};

  /* ── memorization order: Juz 30 → 1 (start surah of each juz) ── */
  function J(ord, juz, sa, se, pages, nm){ return {ord:ord, juz:juz, sa:sa, se:se, pages:pages, nm:nm||null}; }
  Q.juzOrder = [
    J(1,30,'سورة النبأ','An-Naba\u2019',23,{ar:'جزء عمّ',en:'Juz \u2019Amma'}),
    J(2,29,'سورة الملك','Al-Mulk',21,{ar:'جزء تبارك',en:'Juz Tabārak'}),
    J(3,28,'سورة المجادلة','Al-Mujādila',18,{ar:'جزء قد سمع',en:'Juz Qad Samiʿa'}),
    J(4,27,'سورة الذاريات','Adh-Dhāriyāt',20),
    J(5,26,'سورة الأحقاف','Al-Ahqāf',20),
    J(6,25,'سورة فصّلت','Fussilat',20),
    J(7,24,'سورة الزُّمَر','Az-Zumar',20),
    J(8,23,'سورة يس','Yā-Sīn',20),
    J(9,22,'سورة الأحزاب','Al-Ahzāb',20),
    J(10,21,'سورة العنكبوت','Al-ʿAnkabūt',20),
    J(11,20,'سورة النمل','An-Naml',20),
    J(12,19,'سورة الفرقان','Al-Furqān',20),
    J(13,18,'سورة المؤمنون','Al-Mu\u2019minūn',20),
    J(14,17,'سورة الإسراء','Al-Isrā\u2019',20),
    J(15,16,'سورة الكهف','Al-Kahf',20),
    J(16,15,'سورة الحِجر','Al-Hijr',20),
    J(17,14,'سورة يوسف','Yūsuf',20),
    J(18,13,'سورة الرعد','Ar-Raʿd',20),
    J(19,12,'سورة هود','Hūd',20),
    J(20,11,'سورة التوبة','At-Tawbah',20),
    J(21,10,'سورة الأنفال','Al-Anfāl',20),
    J(22,9,'سورة الأعراف','Al-Aʿrāf',20),
    J(23,8,'سورة الأنعام','Al-Anʿām',20),
    J(24,7,'سورة المائدة','Al-Mā\u2019idah',20),
    J(25,6,'سورة النساء','An-Nisā\u2019',20),
    J(26,5,'سورة النساء','An-Nisā\u2019',20),
    J(27,4,'سورة آل عمران','Āl ʿImrān',20),
    J(28,3,'سورة البقرة','Al-Baqarah',20),
    J(29,2,'سورة البقرة','Al-Baqarah',20),
    J(30,1,'سورة الفاتحة','Al-Fātihah',21,{ar:'الفاتحة والبقرة',en:'Fātihah & Baqarah'})
  ];

  /* ── Juz 'Amma surahs (the first goal) ── */
  function S(n, ar, en){ return {n:n, ar:ar, en:en}; }
  Q.juzAmma = [
    S(78,'النبأ','An-Naba\u2019'), S(79,'النازعات','An-Nāziʿāt'), S(80,'عبس','ʿAbasa'),
    S(81,'التكوير','At-Takwīr'), S(82,'الانفطار','Al-Infitār'), S(83,'المطفّفين','Al-Mutaffifīn'),
    S(84,'الانشقاق','Al-Inshiqāq'), S(85,'البروج','Al-Burūj'), S(86,'الطارق','At-Tāriq'),
    S(87,'الأعلى','Al-Aʿlā'), S(88,'الغاشية','Al-Ghāshiyah'), S(89,'الفجر','Al-Fajr'),
    S(90,'البلد','Al-Balad'), S(91,'الشمس','Ash-Shams'), S(92,'الليل','Al-Layl'),
    S(93,'الضحى','Ad-Duhā'), S(94,'الشرح','Ash-Sharh'), S(95,'التين','At-Tīn'),
    S(96,'العلق','Al-ʿAlaq'), S(97,'القدر','Al-Qadr'), S(98,'البيّنة','Al-Bayyinah'),
    S(99,'الزلزلة','Az-Zalzalah'), S(100,'العاديات','Al-ʿĀdiyāt'), S(101,'القارعة','Al-Qāriʿah'),
    S(102,'التكاثر','At-Takāthur'), S(103,'العصر','Al-ʿAsr'), S(104,'الهُمَزة','Al-Humazah'),
    S(105,'الفيل','Al-Fīl'), S(106,'قريش','Quraysh'), S(107,'الماعون','Al-Māʿūn'),
    S(108,'الكوثر','Al-Kawthar'), S(109,'الكافرون','Al-Kāfirūn'), S(110,'النصر','An-Nasr'),
    S(111,'المسد','Al-Masad'), S(112,'الإخلاص','Al-Ikhlās'), S(113,'الفلق','Al-Falaq'),
    S(114,'الناس','An-Nās')
  ];

  /* ── a worked weekly schedule (example, 3-year pace) ── */
  Q.weekly = {
    head:{ar:['اليوم','🌱 الجديد','🔄 المراجعة القريبة','🏔️ المراجعة البعيدة'],
          en:['Day','🌱 New','🔄 Near review','🏔️ Far review']},
    rows:[
      {d:{ar:'السبت',en:'Sat'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'مقطعُ الأمس',en:'Yesterday\u2019s portion'},{ar:'جزءٌ قديم (١)',en:'Old juz (1)'}]},
      {d:{ar:'الأحد',en:'Sun'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'مقطعا السبت والأمس',en:'Sat + yesterday'},{ar:'جزءٌ قديم (٢)',en:'Old juz (2)'}]},
      {d:{ar:'الإثنين',en:'Mon'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'مقاطعُ الأسبوع',en:'This week so far'},{ar:'جزءٌ قديم (٣)',en:'Old juz (3)'}]},
      {d:{ar:'الثلاثاء',en:'Tue'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'مقاطعُ الأسبوع',en:'This week so far'},{ar:'جزءٌ قديم (٤)',en:'Old juz (4)'}]},
      {d:{ar:'الأربعاء',en:'Wed'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'مقاطعُ الأسبوع',en:'This week so far'},{ar:'جزءٌ قديم (٥)',en:'Old juz (5)'}]},
      {d:{ar:'الخميس',en:'Thu'}, c:[{ar:'مقطعٌ جديد',en:'New portion'},{ar:'الأسبوع كاملًا',en:'The full week'},{ar:'جزءٌ قديم (٦)',en:'Old juz (6)'}]},
      {d:{ar:'الجمعة',en:'Fri'}, c:[{ar:'— راحة —',en:'\u2014 rest \u2014'},{ar:'اختبارُ حفظ الأسبوع',en:'Test the week\u2019s memorization'},{ar:'سردُ أكبر قدرٍ ممكن',en:'Recite as much as possible'}]}
    ]
  };

  /* ── du'a, etiquette, tips ── */
  Q.dua = {
    ar:'اللّهُمَّ ارحَمْني بترك المعاصي أبدًا ما أبقَيتَني، وارزُقْني حُسنَ النظرِ فيما يُرضيك عنّي، اللّهُمَّ ذا الجلالِ والإكرام... اجعلِ القرآنَ العظيمَ ربيعَ قلبي ونورَ صدري وجِلاءَ حُزني.',
    en:'O Allah, make the Mighty Qur\u2019an the spring of my heart, the light of my chest, and the remover of my sorrow. (Part of a well-known du\u2019a; teach the child a short du\u2019a before each session.)',
    tip:{ar:'علّم طفلك أن يقول قبل الحفظ: «ربِّ اشرَحْ لي صدري ويسِّرْ لي أمري»، وبعده: «الحمدُ لله».',en:'Teach the child to say before memorizing: \u201cMy Lord, expand my chest and ease my task,\u201d and after: \u201cAll praise is for Allah.\u201d'}
  };
  Q.etiquette = [
    {ic:'🤲', t:{ar:'الإخلاص',en:'Sincerity'}, d:{ar:'احفظ لله لا للمباهاة. النيّةُ الصالحة تُبارك الحفظ.',en:'Memorize for Allah, not to show off. A pure intention blesses the hifdh.'}},
    {ic:'🧼', t:{ar:'الطهارة والأدب',en:'Purity & manners'}, d:{ar:'احفظ على طهارةٍ، في مكانٍ نظيفٍ هادئ، مستقبلًا القبلة إن تيسّر.',en:'Memorize in wudu, in a clean quiet spot, facing the qiblah if you can.'}},
    {ic:'🔊', t:{ar:'الجهرُ والترتيل',en:'Aloud & measured'}, d:{ar:'اقرأ بصوتٍ مسموعٍ مرتّل؛ الجهرُ يثبّت، والترتيلُ يصحّح.',en:'Recite aloud and measured; voicing fixes it, tarteel corrects it.'}},
    {ic:'📿', t:{ar:'العمل بالقرآن',en:'Living the Qur\u2019an'}, d:{ar:'اربط كلَّ مقطعٍ بمعناه وخُلُقه؛ القرآنُ يُحفَظ ليُعاش.',en:'Tie each portion to its meaning & character; the Qur\u2019an is memorized to be lived.'}}
  ];
  Q.tips = [
    {ar:'<b>القليلُ الراسخ</b> خيرٌ من الكثير المتفلّت: لا تزِد المقطعَ حتى يُتقَن السابق.',en:'<b>A little, firmly set</b> beats a lot that slips away: don\u2019t add a new portion until the last is mastered.'},
    {ar:'<b>المراجعةُ ثلثا الوقت</b>: اجعل ثلثَ الجلسة للجديد وثلثيها للمراجعة.',en:'<b>Review is two-thirds</b> of the work: give a third of the session to new, two-thirds to review.'},
    {ar:'<b>السمعُ قبل الحفظ</b>: شغّل المقطعَ لطفلك مرّاتٍ حتى يألفه قبل أن يحفظه.',en:'<b>Listen before memorizing</b>: play the portion for the child several times until it\u2019s familiar.'},
    {ar:'<b>اعرض دائمًا</b>: لا حفظَ بلا عرضٍ على مُستمِع — الأبُ، الأمُّ، أو المعلّم.',en:'<b>Always recite to someone</b>: no hifdh without reciting to a listener \u2014 a parent or teacher.'},
    {ar:'<b>ثبّت الوقت والمكان</b>: نفسُ الزاوية ونفسُ الوقت كلَّ يوم يصنعان العادة.',en:'<b>Fix the time & place</b>: the same corner and same time daily build the habit.'},
    {ar:'<b>احتفِ بالإنجاز</b>: اطبع شهادةَ الحفظ عند كلِّ جزء، وامنح نقاطَ السلوك في الموقع.',en:'<b>Celebrate milestones</b>: print a hifdh certificate at each juz and award behaviour points on the site.'}
  ];

  window.QPLAN = Q;
})();
