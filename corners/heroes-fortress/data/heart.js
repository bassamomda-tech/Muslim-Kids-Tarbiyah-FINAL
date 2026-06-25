// data/heart.js — ركن القلب السليم (The Pure Heart Corner)
// A STANDALONE corner of the city (تربية الطفل المسلم) — NOT a History-Corner era.
// Intentionally absent from HISN.order, so it never shows as a gateway in the
// Heroes' Fortress hub. Reached through its own page: heart.html.
// Split into four sections; only "حبّ الرسول ﷺ" is populated for now (the 8
// "getting to know the Prophet ﷺ" stations, moved here from the Seerah page).
// The other three are "coming soon". The era data loads everywhere so heart.html
// (and chapter back-links) can render it.
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.heart = {
  id: 'heart', icon: 'sound_heart', standalone: true,
  kicker: { ar: 'ركنُ القلبِ السليم', en: 'The Pure Heart Corner' },
  title:  { ar: 'ركنُ القلبِ السليم', en: 'The Pure Heart Corner' },
  sub:    { ar: 'البناءُ العاطفيُّ والنفسيّ — قلبٌ يَعمُرُه حبُّ الله ورسولِه', en: 'Emotional & spiritual growth — a heart filled with love of Allah & His Messenger' },
  tier:   { ar: 'القلبُ السليم', en: 'The Sound Heart' },
  blurb:  { ar: 'املأْ قلبَك بحبِّ اللهِ ورسولِه ﷺ وبرِّ والديك والحبِّ في الله.',
            en: 'Fill your heart with love of Allah, His Messenger ﷺ, honoring parents & love for Allah\u2019s sake.' },
  back:   { ar: 'المدينة', en: 'City' },
  accent: '#A06CC4', accent2: '#6C3483',

  categories: [
    /* ─────────── 1 · LOVE OF ALLAH (حبُّ الله) — the Beautiful Names series ───────────
       نعرفُ اللهَ بأسمائه الحسنى فنزدادُ له حبّاً. كلُّ اسمٍ محطّةٌ مبسّطةٌ للأطفال:
       معرفةٌ · قصّةٌ من آثارِ الاسم في الكونِ وحياتِنا · حفظُ آيةٍ ودعاء · نشاط.
       يُبنى اسمٌ تلوَ الآخر؛ المبنيُّ مفتوحٌ، والبقيّةُ «قريباً». */
    { id:'love_allah', icon:'crescent',
      title:{ ar:'حبُّ الله', en:'Love of Allah' },
      sub:{ ar:'تعرّفْ إلى ربِّك بأسمائه الحسنى — فبمعرفتِه تُحبُّه', en:'Know your Lord by His Beautiful Names — to know Him is to love Him' },
      heroes:[
        { id:'rahman',     icon:'heart',    name:{ar:'الرحمنُ الرحيم',en:'Ar-Rahman Ar-Rahim'}, hook:{ar:'رحمتُه وسِعَتْ كلَّ شيء',en:'His mercy embraces everything'} },
        { id:'khaliq',     icon:'gem',      name:{ar:'الخالقُ البارئُ المصوِّر',en:'The Creator & Fashioner'}, hook:{ar:'خلقَ كلَّ شيءٍ فأبدعَه',en:'He created all things, perfectly'} },
        { id:'razzaq',     icon:'leaf',     name:{ar:'الرزّاق',en:'The Provider'}, hook:{ar:'يَرزقُ كلَّ حيٍّ ولا يَنسى أحداً',en:'He provides for every living thing'} },
        { id:'alim',       icon:'light',    name:{ar:'العليم',en:'The All-Knowing'}, hook:{ar:'يعلمُ السرَّ وما هو أخفى',en:'He knows the secret & the hidden'} },
        { id:'qadir',      icon:'mountain', name:{ar:'القدير',en:'The All-Powerful'}, hook:{ar:'على كلِّ شيءٍ قدير',en:'Powerful over all things'} },
        { id:'sami_basir', icon:'whisper',  name:{ar:'السميعُ البصير',en:'The All-Hearing, All-Seeing'}, hook:{ar:'يسمعُ ويرى كلَّ شيء',en:'He hears & sees everything'} },
        { id:'wahhab',     icon:'crown',    name:{ar:'الوهّابُ الكريم',en:'The Bestower, the Generous'}, hook:{ar:'يُعطي بلا حساب',en:'He gives without measure'} },
        { id:'ghafur',     icon:'dove',     name:{ar:'الغفورُ التوّاب',en:'The Forgiving, Acceptor of Repentance'}, hook:{ar:'يغفرُ ويفرحُ بتوبتِك',en:'He forgives & rejoices at your return'} },
        { id:'afuww',      icon:'leaf',     name:{ar:'العفوّ',en:'The Pardoner'}, hook:{ar:'يمحو الخطأَ كأنّه لم يكن',en:'He erases the mistake as if it never was'} },
        { id:'wadud',      icon:'heart',    name:{ar:'الودود',en:'The Most Loving'}, hook:{ar:'يحبُّك ويحبُّ الصالحين',en:'He loves you & loves the righteous'} },
        { id:'halim',      icon:'mount',    name:{ar:'الحليمُ الصبور',en:'The Forbearing, the Patient'}, hook:{ar:'لا يُعاجِلُ بالعقوبة',en:'He is not hasty to punish'} },
        { id:'latif',      icon:'star',     name:{ar:'اللطيف',en:'The Subtly Kind'}, hook:{ar:'لطفُه بك في الخفاء',en:'His kindness reaches you unseen'} },
        { id:'hafiz',      icon:'shield',   name:{ar:'الحفيظ',en:'The Protector'}, hook:{ar:'يحفظُك ويرعاك',en:'He guards & watches over you'} },
        { id:'salam',      icon:'crescent', name:{ar:'السلامُ المؤمن',en:'The Source of Peace & Security'}, hook:{ar:'منه الأمانُ والطمأنينة',en:'From Him come safety & calm'} },
        { id:'shakur',     icon:'gem',      name:{ar:'الشكور',en:'The Most Appreciative'}, hook:{ar:'يشكرُ القليلَ ويضاعِفُه',en:'He rewards the little, multiplied'} },
        { id:'mujib',      icon:'whisper',  name:{ar:'المجيبُ القريب',en:'The Responsive, the Near'}, hook:{ar:'يستجيبُ دعاءَك',en:'He answers your call'} },
        { id:'azim',       icon:'mountain', name:{ar:'العظيمُ الكبير',en:'The Magnificent, the Most Great'}, hook:{ar:'عظمتُه فوقَ كلِّ شيء',en:'His greatness is above all'} },
        { id:'hadi',       icon:'light',    name:{ar:'الهادي النور',en:'The Guide, the Light'}, hook:{ar:'يهديك إلى النور',en:'He guides you to the light'} },
        { id:'hakim',      icon:'compass',  name:{ar:'الحكيم',en:'The All-Wise'}, hook:{ar:'يضعُ كلَّ شيءٍ في موضعِه بحكمة',en:'He places everything in its rightful place'} },
      ] },

    /* ─────────── 2 · LOVE OF THE PROPHET ﷺ (حبُّ الرسول) — the 8 stations ─────────── */
    { id:'love_prophet', icon:'sound_heart',
      title:{ ar:'حبُّ الرسولِ ﷺ', en:'Love of the Prophet ﷺ' },
      sub:{ ar:'تعرّفْ إليه ﷺ في ثماني محطّات — تُحِبَّه فتتّبِعَه', en:'Get to know him ﷺ in eight stations — love him & follow him' },
      heroes:[
        { id:'whoami',      icon:'light',    name:{ar:'مَن هو محمدٌ رسولُ الله ﷺ',en:'Who is Muhammad ﷺ'}, hook:{ar:'نَسَبُه وصفتُه ومكانتُه',en:'His lineage, traits & rank'} },
        { id:'khasais',     icon:'crown',    name:{ar:'خصائصُ النبيِّ ﷺ',en:'The Prophet\u2019s ﷺ Distinctions'}, hook:{ar:'ما خصَّه اللهُ به',en:'What Allah singled him out with'} },
        { id:'shamail',     icon:'light',    name:{ar:'الشمائلُ المحمدية',en:'His ﷺ Noble Features'}, hook:{ar:'صفتُه ﷺ كأنّك تراه',en:'His appearance, as if you see him'} },
        { id:'dalail',      icon:'star',     name:{ar:'دلائلُ نبوّتِه ﷺ',en:'Signs of His ﷺ Prophethood'}, hook:{ar:'معجزاتُه وعلاماتُ صدقِه',en:'His miracles & signs of truth'} },
        { id:'khuluq_nas',  icon:'heart',    name:{ar:'خُلُقُه ﷺ مع الناس',en:'His ﷺ Character with People'}, hook:{ar:'رحمةٌ ورفقٌ وكرم',en:'Mercy, gentleness & generosity'} },
        { id:'khuluq_khalq',icon:'leaf',     name:{ar:'خُلُقُه ﷺ مع الخلق',en:'His ﷺ Character with Creation'}, hook:{ar:'رفقٌ بالحيوانِ والبيئة',en:'Kindness to animals & nature'} },
        { id:'khuluq_rabb', icon:'crescent', name:{ar:'خُلُقُه ﷺ مع ربِّه',en:'His ﷺ Character with His Lord'}, hook:{ar:'عبادةٌ وشكرٌ وتوكّل',en:'Worship, gratitude & trust'} },
        { id:'manzuma',     icon:'crescent', name:{ar:'المنظومة المنيرة',en:'The Luminous Seerah Poem'}, hook:{ar:'اسمعْ وردِّدْ سيرتَه ﷺ نَظماً',en:'Listen & repeat his life ﷺ in verse'} },
      ] },

    /* ─────────── 3 · HONORING PARENTS (برُّ الوالدين) — storytelling lessons ───────────
       أسلوبٌ قصصيٌّ جميل: مكانةُ البِرّ · قصصُ البارّين · التحذيرُ من العقوق.
       كلُّ محطّةٍ درسٌ (kind:'lesson') يستخدمُ غرفةَ الحكايات بوضعَيْها. */
    { id:'birr_walidayn', icon:'heart',
      title:{ ar:'برُّ الوالدين', en:'Honoring Parents' },
      sub:{ ar:'بابٌ إلى الجنّة — رضا الربّ في رضا الوالد', en:'A gate to Paradise — the Lord’s pleasure is in the parent’s pleasure' },
      heroes:[
        { id:'birr_rank',    icon:'crown',  name:{ar:'مكانةُ بِرّ الوالدين',en:'The Rank of Honoring Parents'}, hook:{ar:'بعدَ عبادةِ الله مباشرةً',en:'Right after worship of Allah'} },
        { id:'birr_stories', icon:'star',   name:{ar:'قصصُ البارّين',en:'Stories of the Dutiful'}, hook:{ar:'أويسٌ وجُريجٌ وحامِلُ أمّه',en:'Uways, Jurayj & the one who carried his mother'} },
        { id:'birr_uquq',    icon:'shield', name:{ar:'احذرْ عقوقَ الوالدين',en:'Beware Disobeying Parents'}, hook:{ar:'أشكالُ العقوق وعقوبتُه',en:'The forms of ‘uquq & its punishment'} },
      ] },

    /* ─────────── 4 · LOVE FOR ALLAH'S SAKE (الحبُّ في الله) — storytelling lessons ───────────
       حبُّ المسلم للمسلم · الصاحبُ الصالح · الولاءُ والبراء (مع العدل والإحسان). */
    { id:'love_for_allah', icon:'heart',
      title:{ ar:'الحبُّ في الله', en:'Love for Allah\u2019s Sake' },
      sub:{ ar:'أوثقُ عُرى الإيمانِ الحبُّ في الله', en:'The firmest handhold of faith is love for Allah\u2019s sake' },
      heroes:[
        { id:'hubb_fillah', icon:'heart',  name:{ar:'الحبُّ في الله',en:'Love for Allah\u2019s Sake'}, hook:{ar:'أخوّةٌ تُظِلُّك تحت عرشِ الرحمن',en:'A brotherhood that shades you under Allah\u2019s Throne'} },
        { id:'sahib_salih', icon:'star',   name:{ar:'الصاحبُ الصالح',en:'The Righteous Companion'}, hook:{ar:'المرءُ على دينِ خليلِه',en:'You follow the way of your closest friend'} },
        { id:'wala_bara',   icon:'shield', name:{ar:'الولاءُ والبراء',en:'Loyalty & Disavowal'}, hook:{ar:'أحبُّ لله، وأعدِلُ وأُحسِنُ للجميع',en:'Love for Allah; be just & kind to all'} },
        { id:'silat_rahim', icon:'heart',   name:{ar:'صِلةُ الرَّحِم',en:'Keeping the Ties of Kinship'}, hook:{ar:'مَن وصلَ رحمَه وصلَه الرحمن',en:'Whoever keeps kinship, Allah keeps him'} },
      ] },

    /* ─────────── 5 · SOUNDNESS OF THE HEART (سلامةُ القلب) — storytelling lessons ───────────
       القلبُ المطمئنُّ (الإيمانُ بالقضاءِ والقدرِ وحكمةِ اللهِ والصبرُ عند البلاء) ·
       والقلبُ الصافي (الخالي من الحسدِ وأمراضِ القلوبِ — قصصُ من دخلَ الجنّةَ بصفاءِ قلبه). */
    { id:'salamat_qalb', icon:'gem',
      title:{ ar:'سلامةُ القلب', en:'A Sound Heart' },
      sub:{ ar:'﴿إلّا مَن أتى اللهَ بقلبٍ سليم﴾ — قلبٌ مطمئنٌّ صافٍ', en:'"…except one who comes to Allah with a sound heart" — tranquil & pure' },
      heroes:[
        { id:'qalb_mutmainn', icon:'dove', name:{ar:'القلبُ المطمئنّ',en:'The Tranquil Heart'}, hook:{ar:'يَرضى بالقضاءِ ويَصبِرُ على البلاء',en:'Content with the decree, patient in trials'} },
        { id:'qalb_safi',     icon:'gem',  name:{ar:'القلبُ الصافي',en:'The Pure Heart'}, hook:{ar:'لا يَحسُدُ ولا يَحقِدُ — فدخلَ الجنّة',en:'No envy, no grudge — so it entered Paradise'} },
        { id:'amrad_qulub',   icon:'shield', name:{ar:'احذرْ أمراضَ القلوب',en:'Beware the Diseases of the Hearts'}, hook:{ar:'الفتنُ تُنكَتُ في القلبِ نُكتةً نُكتة',en:'Trials mark the heart, spot by spot'} },
      ] },
  ],
};

// Flatten the populated stations into `nodes` for the progress engine + certificate.
// IMPORTANT: the corner certificate (below) is the “Love of the Prophet ﷺ” award, so
// `nodes` is scoped to THAT section only — the new “Love of Allah” (Names) stations
// track their own per-station medals/XP and will get their own certificate once the
// series is complete, without re-locking the Prophet certificate already in progress.
HISN.eras.heart.nodes = (HISN.eras.heart.categories.find(c=>c.id==='love_prophet')||{heroes:[]}).heroes.slice();

/* ───── CERTIFICATE — unlocked when every populated station is complete ───── */
HISN.eras.heart.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ حبِّ الرسولِ ﷺ',
    en: 'Awarded to those who completed the Love of the Prophet ﷺ journey',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها <b>نبيَّنا محمداً ﷺ</b> — نَسَبَه وشمائلَه وأخلاقَه ودلائلَ نبوّتِه — فامتلأَ قلبُه <b>حُبّاً واتّباعاً</b> له ﷺ.',
    en: 'For knowing <b>our Prophet Muhammad ﷺ</b> — his lineage, features, character & signs of prophethood — so the heart was filled with <b>love and following</b> of him ﷺ.',
  },
};
