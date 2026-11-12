/* معسكر القادة — المحتوى (ثنائي اللغة). كل نص: [عربي, English] */
(function () {
  'use strict';
  var C = window.CAMP = window.CAMP || {};

  /* ── واجهة ── */
  C.I18N = {
    appName: ['معسكر القادة', "Leaders' Camp"],
    tagline: ['نربّي قادة يحبّون الله ويخدمون الأمة', 'Raising leaders who love Allah and serve the Ummah'],
    who: ['من القائد اليوم؟', 'Who is leading today?'],
    parent: ['الوالدان', 'Parents'],
    tv: ['شاشة البيت', 'Home screen'],
    home: ['المقرّ', 'HQ'], missions: ['مهامي', 'Missions'], plan: ['خطتي', 'My plan'],
    goals: ['أهدافي', 'Goals'], rewards: ['الخزينة', 'Treasury'], radio: ['الإذاعة', 'Radio'],
    library: ['المكتبة', 'Library'], shura: ['الشورى', 'Council'], banner: ['رايتنا', 'Our banner'],
    today: ['اليوم', 'Today'], stars: ['نجمة', 'stars'], balance: ['رصيدي', 'My balance'],
    lifetime: ['مجموع نجومي', 'Lifetime stars'], rank: ['رتبتي', 'My rank'], nextRank: ['إلى الرتبة التالية', 'To next rank'],
    nextPrayer: ['الصلاة القادمة', 'Next prayer'], after: ['بعد', 'in'],
    done: ['أنجزت', 'Done'], pending: ['بانتظار الاعتماد', 'Awaiting approval'], approved: ['معتمدة', 'Approved'],
    undo: ['تراجع', 'Undo'], approve: ['اعتماد', 'Approve'], reject: ['رفض', 'Reject'], approveAll: ['اعتماد الكل', 'Approve all'],
    weekKhuluq: ['خُلق الأسبوع', 'Value of the week'], password: ['كلمة السر', 'Password'], childSays: ['ويكمل القائد', 'The leader completes'],
    week: ['الأسبوع', 'Week'], of: ['من', 'of'], month: ['الشهر', 'Month'],
    myGoal: ['هدفي هذا الأسبوع', 'My goal this week'], tonight: ['قصة أو نشاط الليلة', "Tonight's story or activity"],
    weekDays: ['برنامج الأسبوع', 'This week'], schedule: ['جدولي الأسبوعي', 'My weekly schedule'],
    passport: ['جواز المواهب', 'Talent passport'], myGoals: ['أهدافي الخاصة', 'My own goals'], addGoal: ['أضف هدفًا', 'Add a goal'],
    goalPh: ['مثلًا: أحفظ سورة الملك', 'e.g. memorise Surat al-Mulk'],
    ranks: ['سُلّم الرتب', 'Rank ladder'], unlocks: ['امتياز ومسؤولية', 'Privilege & duty'], model: ['قدوتك', 'Role model'],
    request: ['اطلب', 'Request'], requested: ['طلبتَها', 'Requested'], notEnough: ['نجومك لا تكفي بعد', 'Not enough stars yet'],
    bank: ['حصّالتي وصدقتي', 'My bank & charity'], convert: ['حوّل نجومًا إلى مال', 'Convert stars to money'],
    saved: ['في حصّالتي', 'In my bank'], sadaqa: ['صدقتي', 'My charity'], sadaqaNote: ['جزء من كل تحويل يذهب للصدقة، وأنت تختار أين', 'A share of every conversion goes to charity, and you choose where'],
    quran: ['القرآن', 'Quran'], adhkar: ['الأذكار', 'Adhkar'], stories: ['القصص', 'Stories'], recorder: ['استوديو القائد', "Leader's studio"],
    reciter: ['القارئ', 'Reciter'], repeat: ['تكرار الآية', 'Repeat each ayah'], play: ['تشغيل', 'Play'], stop: ['إيقاف', 'Stop'],
    listen: ['استمع', 'Listen'], meaning: ['المعنى', 'Meaning'], count: ['العدد', 'Count'], source: ['المصدر', 'Source'],
    record: ['سجّل', 'Record'], recStop: ['أوقف التسجيل', 'Stop recording'], recHint: ['تسجيلاتك تُحفظ في حساب الأسرة وتظهر على كل الأجهزة', 'Your recordings are saved to the family account and appear on every device'],
    recHintLocal: ['التسجيلات على هذا الجهاز فقط — سجّل الدخول لتظهر على كل الأجهزة', 'Recordings are on this device only — sign in to see them everywhere'],
    recCloud: ['على كل الأجهزة', 'On all devices'], recLocal: ['على هذا الجهاز فقط', 'This device only'], recUp: ['جارٍ الرفع…', 'Uploading…'], recErr: ['تعذّر الرفع', 'Upload failed'],
    recType: ['نوع التسجيل', 'Type'], tilawa: ['تلاوة', 'Recitation'], adhan: ['أذان', 'Adhan'], khutba: ['خطبة', 'Speech'], story: ['حكاية', 'Story'],
    del: ['حذف', 'Delete'], download: ['تنزيل', 'Download'], open: ['افتح', 'Open'], print: ['اطبع', 'Print'],
    proposals: ['صندوق الاقتراحات', 'Suggestion box'], propose: ['اقترح', 'Propose'], proposePh: ['اقتراحي للأسرة…', 'My suggestion for the family…'],
    agenda: ['جدول مجلس الجمعة', 'Friday council agenda'], parliament: ['البرلمان الشهري', 'Monthly parliament'],
    constitution: ['دستور بيتنا', 'Our family constitution'], vision: ['رؤيتنا', 'Our vision'],
    approvals: ['بانتظار اعتمادكم', 'Awaiting your approval'], noPending: ['لا شيء بانتظار الاعتماد', 'Nothing awaiting approval'],
    requests: ['طلبات الجوائز', 'Reward requests'], settings: ['الإعدادات', 'Settings'], kids: ['القادة', 'The leaders'],
    name: ['الاسم', 'Name'], age: ['العمر', 'Age'], avatar: ['الرمز', 'Avatar'], tier: ['المستوى', 'Tier'],
    tierBig: ['كبير (٨+)', 'Older (8+)'], tierMid: ['أوسط (٤–٧)', 'Middle (4–7)'], tierSmall: ['صغير (أقل من ٤)', 'Little (under 4)'],
    addKid: ['أضف قائدًا', 'Add a leader'], save: ['حفظ', 'Save'], cancel: ['إلغاء', 'Cancel'],
    pin: ['رمز الوالدين', 'Parent PIN'], pinEnter: ['أدخل رمز الوالدين', 'Enter the parent PIN'], pinSet: ['اختر رمزًا من ٤ أرقام', 'Choose a 4-digit PIN'], pinWrong: ['رمز خاطئ', 'Wrong PIN'],
    city: ['المدينة (لمواقيت الصلاة)', 'City (for prayer times)'], useGps: ['استعمل موقعي', 'Use my location'], method: ['طريقة الحساب', 'Calculation method'],
    asrHanafi: ['العصر على المذهب الحنفي', 'Hanafi Asr'], timesNote: ['المواقيت تقريبية بالحساب الفلكي؛ اتبعوا تقويم مسجدكم واضبطوا الفرق بالدقائق إن لزم', 'Times are calculated and approximate; follow your mosque and adjust the minute offsets if needed'],
    offsets: ['تعديل بالدقائق', 'Minute offsets'], startDate: ['بداية البرنامج (أول سبت)', 'Programme start (first Saturday)'],
    starValue: ['قيمة النجمة بالبنس', 'Pence per star'], sadaqaPct: ['نسبة الصدقة ٪', 'Charity share %'], causes: ['جهات الصدقة (سطر لكل جهة)', 'Charity causes (one per line)'],
    sync: ['المزامنة بين الأجهزة', 'Sync across devices'], signIn: ['دخول', 'Sign in'], signUp: ['حساب جديد', 'Create account'], signOut: ['خروج', 'Sign out'],
    email: ['البريد', 'Email'], pass: ['كلمة المرور', 'Password'],
    syncOn: ['المزامنة تعمل', 'Sync is on'], syncOff: ['هذا الجهاز يعمل محليًا — سجّل الدخول لتتزامن الأجهزة', 'This device is local only — sign in to sync devices'],
    syncErr: ['تعذّرت المزامنة: تأكد من نشر قواعد Firestore (انظر الإعدادات)', 'Sync failed: check that the Firestore rules are deployed (see Settings)'],
    give: ['منح نجوم', 'Give stars'], take: ['خصم نجوم', 'Remove stars'], reason: ['السبب', 'Reason'],
    history: ['السجل', 'History'], empty: ['لا شيء بعد', 'Nothing yet'], lang: ['English', 'العربية'],
    familyName: ['اسم الأسرة', 'Family name'], motto: ['شعار الأسرة', 'Family motto'],
    welcome: ['أهلًا بكم في معسكر القادة', "Welcome to Leaders' Camp"], setup1: ['لنجهّز المعسكر في دقيقة', "Let's set up the camp in a minute"],
    start: ['ابدأ', 'Start'], back: ['رجوع', 'Back'], parentsOnly: ['للوالدين فقط', 'Parents only'],
    streak: ['أيام متتالية', 'day streak'], todayStars: ['نجوم اليوم', "Today's stars"], allDone: ['أحسنت يا قائد! أنهيت مهام اليوم', 'Well done, leader! All missions complete'],
    parentLogs: ['يسجّلها الوالدان', 'Logged by parents'], reset: ['مسح كل بيانات المعسكر على هذا الجهاز', 'Erase all camp data on this device'],
    install: ['للشاشة الكبيرة افتح', 'For the big screen open'], minutes: ['د', 'min'], hours: ['س', 'h'],
    discussed: ['نوقش', 'Discussed'], accepted: ['قُبل', 'Accepted'], newP: ['جديد', 'New'],
    granted: ['مُنحت', 'Granted'], level: ['المستوى', 'Level'], setLevel: ['يعتمد الوالدان المستوى', 'Parents confirm the level'],
    days: [['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']],
    prayers: { fajr: ['الفجر', 'Fajr'], sunrise: ['الشروق', 'Sunrise'], dhuhr: ['الظهر', 'Dhuhr'], asr: ['العصر', 'Asr'], maghrib: ['المغرب', 'Maghrib'], isha: ['العشاء', 'Isha'] }
  };

  /* ── فترات اليوم ── */
  C.BLOCKS = [
    { id: 'fajr', icon: '🌌', n: ['قبل الفجر والفجر', 'Before dawn & Fajr'] },
    { id: 'morning', icon: '☀️', n: ['الصباح', 'Morning'] },
    { id: 'day', icon: '🌤️', n: ['النهار', 'Daytime'] },
    { id: 'asr', icon: '🌇', n: ['بعد العصر', 'After Asr'] },
    { id: 'night', icon: '🌙', n: ['المغرب والليل', 'Evening & night'] },
    { id: 'heart', icon: '💚', n: ['أخلاق القائد', "A leader's character"] }
  ];

  /* ── المهام اليومية لكل مستوى. days: أيام الأسبوع (0=الأحد) ── */
  var ALL = [0, 1, 2, 3, 4, 5, 6];
  function m(id, b, s, ar, en, o) { o = o || {}; return { id: id, b: b, s: s, n: [ar, en], days: o.days || ALL, why: o.why }; }
  C.MISSIONS = {
    big: [
      m('wake', 'fajr', 2, 'استيقظت بدعاء الاستيقاظ وتوضأت', 'Woke with the waking dua and made wudu'),
      m('fajr', 'fajr', 5, 'صلاة الفجر في وقتها', 'Fajr on time', { why: ['«من صلى البردين دخل الجنة»', '"Whoever prays the two cool prayers enters Paradise"'] }),
      m('sabah', 'morning', 3, 'أذكار الصباح', 'Morning adhkar'),
      m('routine', 'morning', 2, 'روتين النظافة وحدي', 'Hygiene routine on my own'),
      m('dhuhr', 'day', 3, 'صلاة الظهر', 'Dhuhr prayer'),
      m('study', 'day', 2, 'نويت بدراستي نفع أمتي واجتهدت', 'Studied with the intention to benefit my Ummah'),
      m('asr', 'asr', 3, 'صلاة العصر', 'Asr prayer'),
      m('hw', 'asr', 2, 'الواجب قبل اللعب', 'Homework before play'),
      m('quran', 'asr', 5, 'ورد القرآن (حفظ ومراجعة)', 'Quran portion (memorise & revise)'),
      m('talent', 'asr', 3, 'تدريب الموهبة (رياضة أو خط أو إلقاء)', 'Talent practice (sport, calligraphy or speech)'),
      m('sheikh', 'night', 5, 'حلقة الشيخ', "The shaykh's lesson", { days: [0, 2] }),
      m('masaa', 'asr', 3, 'أذكار المساء', 'Evening adhkar'),
      m('maghrib', 'night', 3, 'صلاة المغرب', 'Maghrib prayer'),
      m('isha', 'night', 3, 'صلاة العشاء والوتر', 'Isha prayer and Witr'),
      m('after', 'night', 2, 'أذكار بعد الصلوات', 'Adhkar after the prayers'),
      m('kahf', 'day', 4, 'سورة الكهف وسنن الجمعة', 'Surat al-Kahf and the Friday sunnahs', { days: [5] }),
      m('speech', 'night', 4, 'كلمتي في مجلس الأسرة', 'My speech at the family council', { days: [5] }),
      m('sleep', 'night', 2, 'أذكار النوم والنوم في موعدي', 'Bedtime adhkar and sleeping on time'),
      m('mum', 'heart', 3, 'خدمة لأمي وكلام كريم معها', 'Served my mother and spoke to her kindly'),
      m('ithar', 'heart', 3, 'آثرت أخي أو علّمته شيئًا', 'Put my brother first or taught him something'),
      m('calm', 'heart', 3, 'ملكت نفسي عند الغضب', 'Controlled myself when angry')
    ],
    mid: [
      m('wudu', 'morning', 2, 'توضأت وحدي', 'Made wudu by myself'),
      m('teeth', 'morning', 2, 'غسلت يدي وأسناني', 'Washed my hands and teeth'),
      m('quran', 'day', 3, 'ردّدت سورتي (١٠ دقائق)', 'Repeated my surah (10 minutes)'),
      m('move', 'asr', 2, 'لعبت ورياضتي اليوم', 'Played and did my sport today'),
      m('adhan', 'night', 3, 'أذّنت للمغرب في البيت', 'Called the adhan for Maghrib at home'),
      m('maghrib', 'night', 3, 'صليت المغرب مع أبي', 'Prayed Maghrib with Dad'),
      m('isha', 'night', 3, 'صليت العشاء مع أبي', 'Prayed Isha with Dad'),
      m('story', 'night', 2, 'أعدت حكاية الليلة بكلماتي', "Retold tonight's story in my words"),
      m('sleep', 'night', 2, '«باسمك اللهم أموت وأحيا» ونمت في موعدي', 'Said the sleep dua and slept on time'),
      m('tongue', 'heart', 4, 'لساني طيب اليوم (بلا كلمة سيئة)', 'Kind tongue today (no bad word)'),
      m('hands', 'heart', 4, 'يدي للمساعدة (بلا دفع ولا ضرب)', 'Helping hands (no pushing or hitting)'),
      m('sorry', 'heart', 3, 'اعتذرت عندما أخطأت', 'Said sorry when I was wrong'),
      m('mashallah', 'heart', 2, 'قلت «ما شاء الله» لأخي', 'Said "Masha Allah" for my brother')
    ],
    small: [
      m('bismillah', 'morning', 1, 'قال «بسم الله»', 'Said "Bismillah"'),
      m('pray', 'day', 1, 'قلّد الصلاة', 'Imitated the prayer'),
      m('surah', 'day', 1, 'ردّد سورة أو ذكرًا', 'Repeated a surah or dhikr'),
      m('toys', 'night', 1, 'وضع ألعابه في الصندوق', 'Put his toys in the box')
    ]
  };

  /* ── الرتب: مجموع النجوم المعتمدة ── */
  C.RANKS = [
    { at: 0, icon: '🌱', n: ['مستجد', 'Recruit'], model: ['كل قائد بدأ صغيرًا', 'Every leader started small'], unlock: ['يتعلّم نظام المعسكر', 'Learns the camp routine'] },
    { at: 150, icon: '🐾', n: ['شبل', 'Cub'], model: ['أنس بن مالك: خدم النبي ﷺ عشر سنين', 'Anas ibn Malik: served the Prophet ﷺ for ten years'], unlock: ['يختار قصة ليلة في الأسبوع', 'Chooses one bedtime story a week'] },
    { at: 500, icon: '🧭', n: ['كشّاف', 'Scout'], model: ['ابن عباس: يطلب العلم على أبواب الصحابة', 'Ibn Abbas: sought knowledge at the companions’ doors'], unlock: ['يختار مغامرة السبت مرة في الشهر', 'Chooses the Saturday adventure once a month'] },
    { at: 1200, icon: '🐎', n: ['فارس', 'Knight'], model: ['علي بن أبي طالب: شجاعة وعلم', 'Ali ibn Abi Talib: courage and knowledge'], unlock: ['يقود أذكار الأسرة ويؤذّن', 'Leads the family adhkar and calls the adhan'] },
    { at: 2500, icon: '🚩', n: ['رائد', 'Pioneer'], model: ['مصعب بن عمير: أول سفير في الإسلام', 'Mus‘ab ibn ‘Umayr: the first envoy of Islam'], unlock: ['يقود مشروعًا للأسرة أو صدقة', 'Leads a family or charity project'] },
    { at: 5000, icon: '🦁', n: ['قائد', 'Leader'], model: ['أسامة بن زيد: قاد الجيش شابًّا', 'Usamah ibn Zayd: led the army as a youth'], unlock: ['يرأس مجلس الأسرة', 'Chairs the family council'] },
    { at: 9000, icon: '👑', n: ['قائد القادة', 'Commander'], model: ['محمد الفاتح: علم وقرآن وهمّة', 'Muhammad al-Fatih: knowledge, Quran and resolve'], unlock: ['يدرّب القادة الصغار', 'Trains the younger leaders'] }
  ];

  /* ── خزينة الجوائز ── */
  function r(id, cat, cost, icon, ar, en) { return { id: id, cat: cat, cost: cost, icon: icon, n: [ar, en] }; }
  C.REWARD_CATS = { exp: ['تجارب ونزهات', 'Experiences'], priv: ['امتيازات', 'Privileges'], gift: ['هدايا هادفة', 'Meaningful gifts'] };
  C.REWARDS = [
    r('p_play', 'priv', 40, '🎮', '٢٠ دقيقة لعب إضافية', '20 extra minutes of play'),
    r('p_late', 'priv', 60, '🌙', 'سهرة نصف ساعة ليلة الإجازة', 'Stay up 30 minutes on a weekend night'),
    r('p_dinner', 'priv', 60, '🍽️', 'أختار عشاء الأسرة', 'I choose the family dinner'),
    r('p_story', 'priv', 30, '📚', 'أختار قصة الليلة', "I choose tonight's story"),
    r('p_imam', 'priv', 80, '🕌', 'أؤمّ الأسرة في صلاة', 'I lead the family in a prayer'),
    r('e_match', 'exp', 120, '⚽', 'مباراة خاصة مع أبي', 'A special match with Dad'),
    r('e_date', 'exp', 250, '🧃', 'موعد خاص مع أبي أو أمي', 'A one-to-one outing with Dad or Mum'),
    r('e_swim', 'exp', 200, '🏊', 'يوم سباحة', 'A swimming day'),
    r('e_trip', 'exp', 400, '🎡', 'نزهة للأسرة أنا أختارها', 'A family outing that I choose'),
    r('e_rest', 'exp', 300, '🍕', 'عشاء في مطعم أختاره', 'Dinner at a restaurant I choose'),
    r('g_book', 'gift', 250, '📖', 'كتاب أو قصة أختارها', 'A book or story I choose'),
    r('g_art', 'gift', 350, '🎨', 'أدوات رسم أو خط', 'Drawing or calligraphy tools'),
    r('g_ball', 'gift', 450, '🥅', 'أدوات رياضية', 'Sports equipment'),
    r('g_mushaf', 'gift', 600, '🕋', 'مصحف أو سجادة باسمي', 'A mushaf or prayer mat with my name')
  ];

  /* ── جواز المواهب (من برنامج «أبطال في الدين والرياضة») ── */
  C.LEVELS = [['🥉', ['برونزي', 'Bronze']], ['🥈', ['فضي', 'Silver']], ['🥇', ['ذهبي', 'Gold']], ['🏆', ['بطل', 'Champion']]];
  function t(id, icon, ar, en, lv) { return { id: id, icon: icon, n: [ar, en], lv: lv }; }
  C.PASSPORT = {
    big: [
      t('hifz', '📖', 'حافظ القرآن المهندس', 'The Quran engineer', [['جزء عمّ متقن بالتجويد', 'Juz ‘Amma mastered with tajwid'], ['+ جزء تبارك', '+ Juz Tabarak'], ['+ جزء قد سمع', '+ Juz Qad Sami‘a'], ['٤ أجزاء ومسابقة حفظ', '4 juz and a memorisation contest']]),
      t('speech', '🗣️', 'الخطابة', 'Public speaking', [['كلمة دقيقة كل جمعة', 'A one-minute talk every Friday'], ['٣ دقائق بلا ورقة', '3 minutes without notes'], ['أمام الأقارب أو الفصل', 'In front of relatives or class'], ['مسابقة أو مناسبة', 'A contest or an event']]),
      t('khat', '✒️', 'الخط والزخرفة', 'Calligraphy & patterns', [['الحروف بخط النسخ', 'Letters in Naskh script'], ['آية بخط جميل', 'An ayah in fine script'], ['زخرفة هندسية بآية', 'A geometric pattern with an ayah'], ['معرض لوحاتي', 'An exhibition of my work']]),
      t('football', '⚽', 'كرة القدم', 'Football', [['٨ أسابيع التزام ومهارات أساسية', '8 weeks of commitment and basic skills'], ['فريق + شهر بلا سب ولا غضب', 'A team + a month with no swearing or anger'], ['دوري + الصلاة في وقتها', 'League play + prayers on time'], ['اللاعب الخلوق أو القائد', 'Fair-play award or captain']]),
      t('swim', '🏊', 'السباحة', 'Swimming', [['الطفو و١٠ أمتار', 'Floating and 10 metres'], ['٢٥ مترًا', '25 metres'], ['٥٠ مترًا بطريقتين', '50 metres in two strokes'], ['١٠٠ متر ومهارات إنقاذ', '100 metres and rescue skills']])
    ],
    mid: [
      t('adhan', '📢', 'المؤذن الصغير', 'The little muezzin', [['حفظ ألفاظ الأذان', 'Knows the words of the adhan'], ['يؤذن للمغرب كل يوم', 'Calls Maghrib every day'], ['يعرف معنى كل كلمة', 'Knows the meaning of every phrase'], ['يؤذن أمام الأقارب', 'Calls it in front of relatives']]),
      t('surahs', '📖', 'قصار السور', 'Short surahs', [['الفاتحة و٣ سور', 'Al-Fatihah and 3 surahs'], ['١٠ سور', '10 surahs'], ['٢٠ سورة', '20 surahs'], ['نصف جزء عمّ', 'Half of Juz ‘Amma']]),
      t('teller', '📚', 'الحكواتي الصغير', 'The little storyteller', [['يعيد قصة نبي', 'Retells a prophet’s story'], ['يحكي ٥ قصص', 'Tells 5 stories'], ['يمثّلها بالدمى', 'Acts one with puppets'], ['يحكي في مسرح المواهب', 'Tells one at the talent show']]),
      t('martial', '🥋', 'الفنون القتالية وأحزمة الأخلاق', 'Martial arts & character belts', [['يحضر ويحترم المدرب', 'Attends and respects the coach'], ['حزام الحِلم: أسبوع بلا دفع', 'Forbearance belt: a week without pushing'], ['حزام الاعتذار', 'Apology belt'], ['القوي الأمين: يحمي الصغير', 'Strong & trustworthy: protects the little one']]),
      t('swim', '🏊', 'السباحة', 'Swimming', [['يدخل الماء بلا خوف', 'Enters the water without fear'], ['يطفو بلوح', 'Floats with a board'], ['يطفو وحده', 'Floats alone'], ['٥ أمتار وحده', '5 metres alone']])
    ],
    small: []
  };

  /* ── الجدول الأسبوعي لكل مستوى ── */
  C.SCHEDULE = {
    big: [
      [['تحضير درس الشيخ', 'Prepare for the shaykh'], ['حلقة الشيخ ٨–٩', "Shaykh's lesson 8–9"]],
      [['تمرين الكرة', 'Football training'], ['حفظ جديد', 'New memorisation']],
      [['تحضير درس الشيخ', 'Prepare for the shaykh'], ['حلقة الشيخ ٨–٩', "Shaykh's lesson 8–9"]],
      [['تمرين الكرة', 'Football training'], ['حفظ جديد', 'New memorisation']],
      [['خط وزخرفة', 'Calligraphy'], ['تحضير كلمة الجمعة', 'Prepare the Friday talk']],
      [['الجمعة والكهف', 'Jumu‘ah and al-Kahf'], ['كلمتي في مجلس الأسرة', 'My talk at the council']],
      [['مباراة مع أبي وسباحة', 'Match with Dad and swimming'], ['خط وزخرفة + مراجعة', 'Calligraphy + revision']]
    ],
    mid: [
      [['تلقين سورة', 'Surah repetition'], ['لعب حركي', 'Active play']],
      [['قصة الليلة أعيدها', "Retell tonight's story"], ['جري وقفز', 'Running and jumping']],
      [['تلقين سورة', 'Surah repetition'], ['حصة النادي', 'Club session']],
      [['تدريب الأذان', 'Adhan practice'], ['لعب مع أبي', 'Play with Dad']],
      [['مراجعة السور', 'Revise my surahs'], ['حصة النادي', 'Club session']],
      [['أؤذن أمام الأسرة', 'Call the adhan for the family'], ['دراجة مع الأسرة', 'Family bike ride']],
      [['أؤذن للظهر', 'Call the Dhuhr adhan'], ['سباحة وجري', 'Swimming and running']]
    ],
    small: []
  };

  /* ── الدستور والرؤية ── */
  C.CONSTITUTION = [
    ['🕌', ['الصلاة أولًا', 'Prayer comes first'], ['إذا أذّن المؤذن نترك كل شيء ونصلي', 'When the adhan is called we leave everything and pray']],
    ['👑', ['أمي وأبي تاج على رؤوسنا', 'Mum and Dad are our crown'], ['نكلمهما بصوت هادئ وكلمات طيبة', 'We speak to them gently and kindly']],
    ['🗣️', ['لساني لا يقول إلا خيرًا', 'My tongue says only good'], ['لا سبّ ولا شتم ولا سخرية', 'No swearing, insults or mockery']],
    ['🤲', ['يدي للمساعدة لا للأذى', 'My hands help, never harm'], ['الغضب نحلّه بالكلام', 'We solve anger with words']],
    ['🤝', ['نحب لإخواننا ما نحب لأنفسنا', 'We love for our brothers what we love for ourselves'], ['نتشارك ونتناوب ونفرح لبعض', 'We share, take turns and are glad for each other']],
    ['✨', ['النظافة من الإيمان', 'Cleanliness is part of faith'], ['أسناني ويدي وملابسي وغرفتي', 'My teeth, hands, clothes and room']],
    ['🎮', ['الواجب أولًا ثم اللعب', 'Duty first, then play'], ['الشاشة مكافأة نكسبها', 'Screen time is a reward we earn']],
    ['🙏', ['القوي يعتذر', 'The strong one apologises'], ['إذا أخطأت أعتذر وأُصلح', 'If I am wrong I say sorry and put it right']]
  ];
  C.VISION = [
    ['🕋', ['عقيدة راسخة', 'Firm faith']], ['🌙', ['عبادة محبوبة', 'Worship we love']], ['📖', ['صاحب قرآن', 'A companion of the Quran']],
    ['💚', ['قلب سليم', 'A sound heart']], ['🏘️', ['أدب مع الناس', 'Good manners']], ['🏰', ['شخصية بطل', "A hero's character"]],
    ['🏊', ['جسد قوي', 'A strong body']], ['🔭', ['عقل مبدع', 'A creative mind']], ['🕌', ['همّ الأمة', 'Care for the Ummah']]
  ];
  C.AGENDA = [
    [['الافتتاح: آية ودعاء', 'Opening: an ayah and a dua'], 2], [['كلمات الشكر: كل فرد يشكر كل فرد', 'Thanks: everyone thanks everyone'], 5],
    [['نجوم الأسبوع ووسام أكثر من تحسّن', "The week's stars and the most-improved medal"], 5], [['مشكلة نحلها معًا بالتصويت', 'One problem solved together by vote'], 8],
    [['قيمة الأسبوع القادم وكلمة السر', "Next week's value and password"], 3], [['اختيار مغامرة السبت', 'Choosing the Saturday adventure'], 2]
  ];
  C.PARLIAMENT = [
    ['🧔', ['الأب: رئيس البرلمان', 'Dad: Speaker']], ['🧕', ['الأم: وزيرة الشؤون الأسرية', 'Mum: Minister for family affairs']],
    ['📝', ['الكبير: الأمين العام يكتب المحضر', 'Eldest: Secretary-general, keeps the minutes']], ['🏅', ['الأوسط: وزير الأخلاق يمنح جائزة الخُلق', 'Middle: Minister of character, gives the award']],
    ['👏', ['الصغير: ضيف الشرف', 'Youngest: guest of honour']]
  ];

  /* ── المكتبة والتنزيلات (روابط نسبية من مجلد camp) ── */
  C.LIBRARY = [
    { icon: '📗', n: ['ما لا يسع الطفل المسلم جهله', 'What every Muslim child must know'], d: ['كتاب الأسئلة والأجوبة في ١٠ أركان (١٠٨ صفحات)', 'Q&A book across 10 corners (108 pages)'], href: '../ما لا يسع الطفل المسلم جهله.html' },
    { icon: '🌙', n: ['يومي وليلتي مع الله', 'My day and night with Allah'], d: ['شرح الأذكار والصلاة كلمة كلمة (٩٣ صفحة)', 'Adhkar and prayer explained word by word (93 pages)'], href: '../يومي وليلتي مع الله.html' },
    { icon: '🏆', n: ['أبطال في الدين والرياضة', 'Champions in faith and sport'], d: ['برنامج المواهب وجواز المواهب', 'The talent programme and passport'], href: '../أبطال في الدين والرياضة.html' },
    { icon: '🧒', n: ['بطاقات «ماذا أفعل عندما…؟»', '“What do I do when…?” cards'], d: ['٢٤ بطاقة للطباعة والقص', '24 cards to print and cut'], href: '../منهج الأسرة - خطة تربية الأبناء.html#sh-kids-1', parent: true },
    { icon: '⭐', n: ['بطاقات النجوم والروتين', 'Star charts and routines'], d: ['مطبوعات A4 للتعليق', 'A4 printables for the wall'], href: '../منهج الأسرة - خطة تربية الأبناء.html#printables', parent: true },
    { icon: '🎲', n: ['ركن الأنشطة والألعاب', 'Activities and games'], d: ['نحو ١٠٠ لعبة تعليمية', 'About 100 learning games'], href: '../corners/activities/dashboard.html' },
    { icon: '📥', n: ['تنزيلات الموقع', 'Site downloads'], d: ['كتب الأنشطة والتلوين', 'Activity and colouring books'], href: '../corners/shared/downloads.html' },
    { icon: '🧭', n: ['منهج الأسرة الكامل', 'The full family curriculum'], d: ['الخطة اليومية والأسبوعية وعلاج المشكلات', 'Daily and weekly plans and problem guides'], href: '../منهج الأسرة - خطة تربية الأبناء.html', parent: true }
  ];
  C.STORIES = [
    { icon: '🌟', n: ['مكتبة الصغار', "Little ones' library"], d: ['قصص الأنبياء والصحابة والسيرة بصوت القارئ', 'Prophets, companions and seerah, read aloud'], href: '../corners/stories/little.html' },
    { icon: '📚', n: ['مكتبة الأبطال القرّاء', "Hero readers' library"], d: ['قصص الأنبياء كاملة للكبار', 'Full prophet stories for older readers'], href: '../corners/stories/big.html' },
    { icon: '🏰', n: ['حصن الأبطال', "Heroes' fortress"], d: ['الصحابة والقادة ومعارك الإسلام', 'Companions, leaders and great battles'], href: '../corners/heroes-fortress/fortress.html' },
    { icon: '🗡️', n: ['رحلة صلاح الدين', 'The Salahuddin journey'], d: ['قصة مسلسلة من ١٠٠ حلقة', 'A serial story in 100 episodes'], href: '../رحلة صلاح الدين الأيوبي.html' },
    { icon: '🕋', n: ['قصص القرآن', 'Stories of the Quran'], d: ['أصحاب الكهف ولقمان وذو القرنين…', 'People of the Cave, Luqman, Dhul-Qarnayn…'], href: '../corners/little-district/pages/quran-stories.html' }
  ];
  C.RECITERS = [
    ['Husary_Muallim_128kbps', ['الحصري (المصحف المعلّم)', 'Al-Husary (teaching)']], ['Husary_128kbps', ['الحصري (مرتل)', 'Al-Husary (murattal)']],
    ['Minshawy_Murattal_128kbps', ['المنشاوي (مرتل)', 'Al-Minshawi (murattal)']], ['Alafasy_128kbps', ['العفاسي', 'Al-Afasy']]
  ];
  C.CITIES = [
    ['London', 51.5074, -0.1278], ['Birmingham', 52.4862, -1.8904], ['Manchester', 53.4808, -2.2426], ['Leeds', 53.8008, -1.5491], ['Bradford', 53.795, -1.759],
    ['Leicester', 52.6369, -1.1398], ['Sheffield', 53.3811, -1.4701], ['Liverpool', 53.4084, -2.9916], ['Glasgow', 55.8642, -4.2518], ['Cardiff', 51.4816, -3.1791],
    ['Luton', 51.8787, -0.42], ['Cairo', 30.0444, 31.2357], ['Makkah', 21.4225, 39.8262]
  ];
  C.AVATARS = ['🦁', '🐯', '🦅', '🐎', '🦊', '🐬', '🌟', '🚀', '⚽', '🏹', '🧭', '🌙', '🐣', '🐻', '🦉', '🐪'];

  /* ترجمة مختصرة للأسابيع: [العنوان, الخُلق, هدف الكبير, هدف الأوسط, هدف الصغير] */
  C.WEEKS_EN = [
    ['Launching the new home', 'Consistency and order', 'Morning routine alone + every prayer with one reminder', 'Learn the order of wudu', 'A little prayer mat to copy on'],
    ['The prayer corner', 'Love of prayer', 'Maghrib and Isha in congregation with Dad + call the adhan', 'Maghrib with Dad on his own mat', 'Says "Allahu akbar" at the adhan'],
    ['Purity and Fajr', 'Purity', 'Fajr with Dad + careful wudu', 'Full wudu on his own', 'Washes hands before eating'],
    ['Settle and celebrate', 'Gratitude', 'The five prayers on time without arguing', 'Maghrib and Isha + wudu alone', '"Alhamdulillah" after eating'],
    ['The place of our mother', 'Honouring parents', '"Yes, Mum" first, then discuss politely + a daily service', 'Kisses Mum and Dad’s hands each morning', '"Thank you, Mama"'],
    ['Stories of the dutiful', 'Dutifulness', 'No raised voice at Mum all week', 'One helping job for Mum every day', 'Fetches what Mum asks for'],
    ['My kind tongue', 'Guarding the tongue', 'No mocking his brothers', 'The "kind words jar" + "I am upset" instead of bad words', '"As-salamu alaykum" and "Jazak Allahu khayran"'],
    ['Respect and manners', 'Respect', 'Starts memorising Luqman’s advice (17–19)', '"Please" and "thank you" + no interrupting', 'Kisses his parents’ hands'],
    ['Naming feelings', 'Forbearance', 'Says his anger number on the feelings scale', 'The "red light" game 3 minutes a day', 'Points to the happy/sad picture'],
    ['What do I do when angry?', 'Self-control', 'Uses the four prophetic steps for anger', '"Hands behind my back" when angry', 'His brothers calm down in front of him'],
    ['The strong one apologises', 'Apology', 'Forgives his brother; we praise his quick apology', 'Says sorry with a word, a drawing or a hug', '"Sorry" with a hug'],
    ['Forgiveness', 'Pardon', 'A week with no long outburst', 'Zero pushing = the Forbearing Hero medal', 'Plays calmly with his brother'],
    ['Yusuf and his brothers', 'Brotherhood', '"Big brother mission": teach his brother something daily', 'Says "Masha Allah" when his brother succeeds', 'Learns to say "here you are"'],
    ['The two sons of Adam', 'A clean heart', 'Puts his brother first in one thing every day', 'His own achievement board', 'Gives his brother a toy'],
    ['Putting others first', 'Selflessness', '10 recorded acts of putting others first', 'Shares his toy with the little one', 'Hands his brother water'],
    ['Giving', 'Generosity', 'Gives his brother something he made', 'Shares the sweets fairly', 'Offers sweets to guests'],
    ['The sunnahs of fitrah', 'Cleanliness', 'Shower, nails and tidy room without reminders', '"Cleanliness hero" picture checklist', 'Puts toys in the box'],
    ['Guardian of time', 'High resolve', 'Plans his day on paper and reviews it', 'A timer for homework, then play', 'Puts his shoes away'],
    ['Companion of the Quran', 'Love of the Quran', '"Hafiz challenge": a chart of ayat memorised', 'One new short surah', 'Repeats "Qul huwa Allahu ahad"'],
    ['This world and the next', 'Contentment', 'The "finger in the sea" experiment, explained to his brother', '"Alhamdulillah" for what he has', '"Alhamdulillah"'],
    ['A character that does not melt', 'Self-confidence', 'Role-plays peer pressure and says "no" with confidence', 'Says "no" to anyone who asks him to do wrong', '"I am a Muslim", proudly'],
    ['Courage', 'Courage for the truth', 'A weekly courage mission (speaks to the shaykh alone)', 'Welcomes guests by himself', 'Greets guests'],
    ['Speaking and advising', 'Enjoining good gently', 'A two-minute talk at the council about a companion', '"Ambassador of advice": gently and privately', 'Copies the adhan'],
    ['My dream for the Ummah', 'Care for the Ummah', '"My mission in life", written and drawn', 'Draws "what I will make for the Muslims"', '"Allahu akbar", proudly']
  ];
  C.MONTHS_EN = ['Month of love and order', 'Month of my mother and my kind tongue', 'Month of forbearance', 'Month of brotherhood and selflessness', 'Month of resolve and cleanliness', 'Month of the leader'];
  C.THEMES = [['📖 يوم القرآن', '📖 Quran day'], ['🌙 يوم الحبيب ﷺ', '🌙 Day of the Beloved ﷺ'], ['💚 يوم القلب', '💚 Heart day'], ['🏰 يوم الأبطال', '🏰 Heroes day'], ['👑 يوم أمي', "👑 Mum's day"], ['🕌 الجمعة والمجلس', '🕌 Friday & council'], ['🏊 المغامرة والمشروع', '🏊 Adventure & project']];
})();
