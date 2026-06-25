// data/seerah.js — Era II · The Seerah Journey (life of Prophet Muhammad ﷺ)
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.seerah = {
  id: 'seerah', order: 2, icon: 'gate',
  title: { ar: 'رِحلةُ السِّيرة', en: 'The Seerah Journey' },
  sub:   { ar: 'حياةُ النبيِّ محمدٍ ﷺ', en: 'The life of Prophet Muhammad ﷺ' },
  tier:  { ar: 'البوّابةُ والأسوار', en: 'The Gate & Walls' },
  blurb: { ar: 'عِشْ سيرةَ النبيِّ ﷺ خطوةً بخطوة، من المولدِ إلى الوداع.',
           en: 'Live the life of the Prophet ﷺ step by step, from birth to farewell.' },
  accent: '#1F8A5B', accent2: '#0E6B43',
  nodes: [
    // ── The chronological journey (Makkah → Madinah → farewell) ──
    { id:'birth',      icon:'star',     name:{ar:'المَولِدُ المبارك',en:'The Blessed Birth'}, hon:'', hook:{ar:'عامُ الفيل — وُلد النورُ ﷺ',en:'The Year of the Elephant'} },
    { id:'childhood',  icon:'leaf',     name:{ar:'الطفولة',en:'Childhood'},        hon:'', hook:{ar:'يتيمٌ رعاه الله',en:'An orphan cared for by Allah'} },
    { id:'alameen',    icon:'gem',      name:{ar:'الصادقُ الأمين',en:'Al-Amīn'},   hon:'', hook:{ar:'لقّبته مكةُ بالأمين',en:'Makkah called him "the trustworthy"'} },
    { id:'cave',       icon:'mountain', name:{ar:'غارُ حِراء',en:'Cave of Hira'},  hon:'', hook:{ar:'اقرأ! أوّلُ الوحي',en:'"Read!" — the first revelation'} },
    { id:'revelation', icon:'light',    name:{ar:'بدءُ الوحي',en:'First Revelation'},hon:'', hook:{ar:'جبريلُ ينزلُ بالقرآن',en:'Jibril brings the Quran'} },
    { id:'dawah',      icon:'whisper',  name:{ar:'الدعوةُ السرّية',en:'The Secret Call'},hon:'', hook:{ar:'ثلاثُ سنواتٍ من الصبر',en:'Three years of patience'} },
    { id:'public',     icon:'mount',    name:{ar:'الجهرُ بالدعوة',en:'The Open Call'},hon:'', hook:{ar:'على جبلِ الصفا',en:'Upon Mount Safa'} },
    { id:'habasha',    icon:'globe',    name:{ar:'الهِجرتانِ إلى الحَبشة',en:'Migrations to Abyssinia'},hon:'', hook:{ar:'النجاشيُّ المَلِكُ العادل',en:'An-Najashi, the just king'} },
    { id:'boycott',    icon:'shield',   name:{ar:'الحِصارُ والمقاطعة',en:'The Boycott'},hon:'', hook:{ar:'صبرُ بني هاشم',en:'The patience of Bani Hashim'} },
    { id:'amalhuzn',   icon:'heart',    name:{ar:'عامُ الحُزن',en:'The Year of Sorrow'},hon:'', hook:{ar:'وفاةُ خديجةَ وأبي طالب',en:'Loss of Khadijah & Abu Talib'} },
    { id:'israa',      icon:'crescent', name:{ar:'الإسراءُ والمعراج',en:'Al-Israa & Miraj'},hon:'', hook:{ar:'رحلةُ السماءِ العظيمة',en:'The great night journey'} },
    { id:'aqaba',      icon:'compass',  name:{ar:'بيعتا العَقَبة',en:'The Two Pledges of Aqaba'},hon:'', hook:{ar:'أنصارُ المدينةِ يُبايعون',en:'The people of Madinah pledge'} },
    { id:'hijrah',     icon:'camel',    name:{ar:'الهِجرة',en:'The Hijrah'},       hon:'', hook:{ar:'من مكةَ إلى المدينة',en:'From Makkah to Madinah'} },
    { id:'masjid',     icon:'kaaba',    name:{ar:'المسجدُ النبوي',en:"The Prophet's Masjid"},hon:'', hook:{ar:'بناءُ أوّلِ مسجد',en:'Building the first masjid'} },
    { id:'badr',       icon:'sword',    name:{ar:'غزوةُ بدر',en:'Battle of Badr'}, hon:'', hook:{ar:'نصرٌ من الله',en:'A victory from Allah'} },
    { id:'uhud',       icon:'mountain', name:{ar:'غزوةُ أُحُد',en:'Battle of Uhud'},hon:'', hook:{ar:'درسُ الثباتِ والطاعة',en:'A lesson in steadfastness'} },
    { id:'ahzab',      icon:'storm',    name:{ar:'غزوةُ الأحزاب',en:'Battle of the Confederates'},hon:'', hook:{ar:'الخندقُ والريحُ العظيمة',en:'The trench and the great wind'} },
    { id:'ridwan',     icon:'leaf',     name:{ar:'بيعةُ الرِّضوان',en:'The Pledge of Ridwan'},hon:'', hook:{ar:'بيعةٌ تحتَ الشجرة',en:'A pledge beneath the tree'} },
    { id:'hudaybiyah', icon:'dove',     name:{ar:'صلحُ الحُديبية',en:'Treaty of Hudaybiyyah'},hon:'', hook:{ar:'الفتحُ المُبين',en:'The clear victory'} },
    { id:'fath',       icon:'kaaba',    name:{ar:'فتحُ مكة',en:'Conquest of Makkah'},hon:'', hook:{ar:'العودةُ المظفّرة',en:'The triumphant return'} },
    { id:'farewell',   icon:'crescent', name:{ar:'حجةُ الوداع',en:'Farewell Sermon'},hon:'', hook:{ar:'الوصيةُ الأخيرة ﷺ',en:'The final advice ﷺ'} },
  ],

  // ── The "getting to know the Prophet ﷺ" aspects (who he is · his distinctions ·
  //    shamāʾil · signs of prophethood · his character with people/creation/his Lord ·
  //    the Luminous Poem) were MOVED to the Pure Heart corner → data/heart.js
  //    ("حبّ الرسول ﷺ"). The Seerah page is now purely the chronological journey.
};

/* ── Timeline view metadata ──────────────────────────────────────────────
   The Seerah page can switch between the Map and a chronological Timeline,
   mirroring the Age of the Prophets. Stations are grouped into the standard
   scholarly phases of the Prophet's ﷺ life (Rahiq al-Makhtum ordering).
   Hijri (هـ) and Gregorian (م) dates after the Hijrah are well-established;
   earlier dates carry a "~" because they are approximate. */
HISN.eras.seerah.bands = [
  { id:'before',   label:{ar:'قبلَ البِعثة',          en:'Before Prophethood'} },
  { id:'call',     label:{ar:'بدءُ الوحيِ والدعوة',   en:'The Call Begins'} },
  { id:'trials',   label:{ar:'سنواتُ الابتلاء',       en:'Years of Trial'} },
  { id:'hijrah',   label:{ar:'الهجرةُ وبناءُ المدينة', en:'Hijrah & Building Madinah'} },
  { id:'battles',  label:{ar:'عهدُ الغزوات',          en:'The Age of Battles'} },
  { id:'victory',  label:{ar:'نحوَ الفتحِ والوداع',    en:'Conquest & Farewell'} },
];
HISN.eras.seerah.timelineNote = {
  ar:'تواريخُ ما قبلَ الهجرةِ تقديريّة — والأهمُّ ترتيبُ الأحداثِ ودروسُها.',
  en:'Dates before the Hijrah are approximate — what matters most is the order of events and their lessons.'
};
(function(tl){ HISN.eras.seerah.nodes.forEach(n=>Object.assign(n, tl[n.id]||{})); })({
  birth:      { band:'before',  when:{ar:'عامُ الفيل · ٥٧١م',en:'Year of the Elephant · 571 CE'}, place:{ar:'مكّة المكرّمة',en:'Makkah'},
                line:{ar:'ابنُ عبدِ اللهِ وآمنةَ بنتِ وهب',en:'Son of Abdullah & Aminah bint Wahb'} },
  childhood:  { band:'before',  when:{ar:'الطفولة · ٥٧١–٥٨٣م',en:'Childhood · 571–583 CE'}, place:{ar:'مكّة وباديةُ بني سعد',en:'Makkah & the Bani Sa\u2019d desert'},
                line:{ar:'كفله جدُّه ثم عمُّه أبو طالب',en:'Raised by his grandfather, then uncle Abu Talib'} },
  alameen:    { band:'before',  when:{ar:'الشبابُ قبلَ البعثة · نحو ٥٩٥م',en:'Youth, before prophethood · ~595 CE'}, place:{ar:'مكّة المكرّمة',en:'Makkah'},
                line:{ar:'زواجُه من خديجةَ رضي الله عنها',en:'His marriage to Khadijah'} },
  cave:       { band:'call',    when:{ar:'سنُّ الأربعين · ٦١٠م',en:'Age 40 · 610 CE'}, place:{ar:'غارُ حِراء · مكّة',en:'Cave of Hira, Makkah'},
                line:{ar:'نزولُ جبريلَ عليه السلام',en:'Jibril descends'} },
  revelation: { band:'call',    when:{ar:'بدءُ الوحي · ٦١٠م',en:'Revelation begins · 610 CE'}, place:{ar:'مكّة المكرّمة',en:'Makkah'},
                line:{ar:'أوّلُ ما نزل: ﴿اقرأ﴾',en:'The first words: "Read!"'} },
  dawah:      { band:'call',    when:{ar:'أوّلُ ٣ سنوات · ٦١٠–٦١٣م',en:'First 3 years · 610–613 CE'}, place:{ar:'مكّة (سِرّاً)',en:'Makkah (in secret)'},
                line:{ar:'أوّلُ المؤمنين: خديجةُ وعليٌّ وأبو بكر',en:'First believers: Khadijah, Ali & Abu Bakr'} },
  public:     { band:'call',    when:{ar:'السنةُ الرابعة · نحو ٦١٣م',en:'Year 4 · ~613 CE'}, place:{ar:'جبلُ الصفا · مكّة',en:'Mount Safa, Makkah'},
                line:{ar:'صعدَ الصفا فنادى قريشاً',en:'He climbed Safa and called Quraysh'} },
  habasha:    { band:'call',    when:{ar:'السنةُ الخامسة · نحو ٦١٥م',en:'Year 5 · ~615 CE'}, place:{ar:'الحبشة',en:'Abyssinia'},
                line:{ar:'النجاشيُّ يحمي المسلمين',en:'An-Najashi shelters the Muslims'} },
  boycott:    { band:'trials',  when:{ar:'السنوات ٧–١٠ · ٦١٦–٦١٩م',en:'Years 7–10 · 616–619 CE'}, place:{ar:'شِعبُ أبي طالب · مكّة',en:'Abu Talib\u2019s valley, Makkah'},
                line:{ar:'مقاطعةُ بني هاشمٍ ثلاثَ سنين',en:'A three-year boycott of Bani Hashim'} },
  amalhuzn:   { band:'trials',  when:{ar:'السنةُ العاشرة · نحو ٦١٩م',en:'Year 10 · ~619 CE'}, place:{ar:'مكّة المكرّمة',en:'Makkah'},
                line:{ar:'أشدُّ أعوامِ مكّةَ حُزناً',en:'Makkah\u2019s hardest, saddest year'} },
  israa:      { band:'trials',  when:{ar:'قبلَ الهجرة · نحو ٦٢٠م',en:'Before the Hijrah · ~620 CE'}, place:{ar:'مكّة ← الأقصى ← السماوات',en:'Makkah → Al-Aqsa → the heavens'},
                line:{ar:'فُرِضتِ الصلواتُ الخمس',en:'The five daily prayers were ordained'} },
  aqaba:      { band:'trials',  when:{ar:'السنتان ١٢–١٣ · ٦٢١–٦٢٢م',en:'~621–622 CE'}, place:{ar:'العقبة · مِنى',en:'Al-Aqabah, Mina'},
                line:{ar:'أنصارُ المدينةِ يُبايعون النبيَّ ﷺ',en:'Madinah\u2019s helpers pledge to the Prophet ﷺ'} },
  hijrah:     { band:'hijrah',  when:{ar:'السنةُ ١ للهجرة · ٦٢٢م',en:'Year 1 AH · 622 CE'}, place:{ar:'مكّة ← المدينة',en:'Makkah → Madinah'},
                line:{ar:'أبو بكرٍ الصدّيقُ رفيقُ الغار',en:'Abu Bakr, companion of the cave'} },
  masjid:     { band:'hijrah',  when:{ar:'السنةُ ١هـ · ٦٢٢م',en:'1 AH · 622 CE'}, place:{ar:'المدينة المنوّرة',en:'Madinah'},
                line:{ar:'المؤاخاةُ بين المهاجرينَ والأنصار',en:'Brotherhood of the Muhajirun & Ansar'} },
  badr:       { band:'battles', when:{ar:'السنةُ ٢هـ · ٦٢٤م',en:'2 AH · 624 CE'}, place:{ar:'بدرٌ قربَ المدينة',en:'Badr, near Madinah'},
                line:{ar:'٣١٣ مؤمناً ينتصرونَ بإذنِ الله',en:'313 believers triumph by Allah\u2019s leave'} },
  uhud:       { band:'battles', when:{ar:'السنةُ ٣هـ · ٦٢٥م',en:'3 AH · 625 CE'}, place:{ar:'جبلُ أُحُد · المدينة',en:'Mount Uhud, Madinah'},
                line:{ar:'درسٌ في طاعةِ القائد',en:'A lesson in obeying the leader'} },
  ahzab:      { band:'battles', when:{ar:'السنةُ ٥هـ · ٦٢٧م',en:'5 AH · 627 CE'}, place:{ar:'المدينة (الخندق)',en:'Madinah (the Trench)'},
                line:{ar:'حفرُ الخندقِ بمشورةِ سلمان',en:'Digging the trench, by Salman\u2019s counsel'} },
  ridwan:     { band:'battles', when:{ar:'السنةُ ٦هـ · ٦٢٨م',en:'6 AH · 628 CE'}, place:{ar:'الحُديبية',en:'Al-Hudaybiyyah'},
                line:{ar:'بيعةٌ تحتَ الشجرةِ على الثبات',en:'A pledge of steadfastness beneath the tree'} },
  hudaybiyah: { band:'victory', when:{ar:'السنةُ ٦هـ · ٦٢٨م',en:'6 AH · 628 CE'}, place:{ar:'الحُديبيةُ قربَ مكّة',en:'Al-Hudaybiyyah, near Makkah'},
                line:{ar:'صلحٌ صارَ فتحاً مبيناً',en:'A treaty that became a clear victory'} },
  fath:       { band:'victory', when:{ar:'السنةُ ٨هـ · ٦٣٠م',en:'8 AH · 630 CE'}, place:{ar:'مكّة المكرّمة',en:'Makkah'},
                line:{ar:'دخلَها متواضعاً عافِياً صافحاً',en:'He entered humble, forgiving everyone'} },
  farewell:   { band:'victory', when:{ar:'السنةُ ١٠هـ · ٦٣٢م',en:'10 AH · 632 CE'}, place:{ar:'عرفة · مكّة',en:'Arafah, Makkah'},
                line:{ar:'خطبةُ الوداعِ أمامَ مئةِ ألف',en:'The Farewell Sermon before 100,000'} },
});

/* ───── CERTIFICATE — unlocked when every Seerah station is complete ───── */
HISN.eras.seerah.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ سيرةِ النبيِّ محمدٍ ﷺ',
    en: 'Awarded to those who completed the Seerah of Prophet Muhammad ﷺ',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها سيرةَ النبيِّ ﷺ <b>مِنَ المَولِدِ إلى الوَداع</b> — صِدقَه قبلَ البِعثة، وصبرَه في مكّة، وحكمتَه في المدينة، ورحمتَه يومَ الفتح ﷺ.',
    en: 'For knowing the life of the Prophet ﷺ <b>from his birth to the farewell</b> — his honesty before prophethood, patience in Makkah, wisdom in Madinah, and mercy on the Day of the Conquest ﷺ.',
  },
};
