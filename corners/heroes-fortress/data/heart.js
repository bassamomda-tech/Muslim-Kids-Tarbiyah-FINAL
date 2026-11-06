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
        { id:'allah', icon:'crescent', name:{ar:'اللهُ الإله',en:'Allah, the One God'}, hook:{ar:'المعبودُ بحقٍّ وحدَه',en:'The only One truly worthy of worship'} },
        { id:'wahid', icon:'star', name:{ar:'الواحدُ الأحدُ الصمدُ الوِتر',en:'The One, the Unique, the Self-Sufficient Master, the Single'}, hook:{ar:'واحدٌ لا شريكَ له، وإليه نَقصِدُ في كلِّ حاجة',en:'One without partner — we turn to Him in every need'} },
        { id:'rahman',     icon:'heart',    name:{ar:'الرحمنُ الرحيم',en:'Ar-Rahman Ar-Rahim'}, hook:{ar:'رحمتُه وسِعَتْ كلَّ شيء',en:'His mercy embraces everything'} },
        { id:'khaliq',     icon:'gem',      name:{ar:'الخالقُ الخلّاقُ البارئُ المصوّر',en:'The Creator & Fashioner'}, hook:{ar:'خلقَ كلَّ شيءٍ فأبدعَه',en:'He created all things, perfectly'} },
        { id:'razzaq',     icon:'leaf',     name:{ar:'الرزّاق',en:'The Provider'}, hook:{ar:'يَرزقُ كلَّ حيٍّ ولا يَنسى أحداً',en:'He provides for every living thing'} },
        { id:'alim',       icon:'light',    name:{ar:'العليمُ العالِم',en:'The All-Knowing'}, hook:{ar:'يعلمُ السرَّ وما هو أخفى',en:'He knows the secret & the hidden'} },
        { id:'qadir',      icon:'mountain', name:{ar:'القديرُ القادرُ المقتدر',en:'The All-Powerful, the Able'}, hook:{ar:'على كلِّ شيءٍ قدير',en:'Powerful over all things'} },
        { id:'sami_basir', icon:'whisper',  name:{ar:'السميعُ البصير',en:'The All-Hearing, All-Seeing'}, hook:{ar:'يسمعُ ويرى كلَّ شيء',en:'He hears & sees everything'} },
        { id:'wahhab',     icon:'crown',    name:{ar:'الوهّابُ الكريمُ الأكرم',en:'The Bestower, the Most Generous'}, hook:{ar:'يُعطي بلا حساب',en:'He gives without measure'} },
        { id:'ghafur',     icon:'dove',     name:{ar:'الغفورُ الغفّارُ التوّاب',en:'The Forgiving, Acceptor of Repentance'}, hook:{ar:'يغفرُ ويفرحُ بتوبتِك',en:'He forgives & rejoices at your return'} },
        { id:'afuww',      icon:'leaf',     name:{ar:'العفوّ',en:'The Pardoner'}, hook:{ar:'يمحو الخطأَ كأنّه لم يكن',en:'He erases the mistake as if it never was'} },
        { id:'wadud',      icon:'heart',    name:{ar:'الودود',en:'The Most Loving'}, hook:{ar:'يحبُّك ويحبُّ الصالحين',en:'He loves you & loves the righteous'} },
        { id:'halim',      icon:'mount',    name:{ar:'الحليمُ الصبور',en:'The Forbearing, the Patient'}, hook:{ar:'لا يُعاجِلُ بالعقوبة',en:'He is not hasty to punish'} },
        { id:'latif',      icon:'star',     name:{ar:'اللطيف',en:'The Subtly Kind'}, hook:{ar:'لطفُه بك في الخفاء',en:'His kindness reaches you unseen'} },
        { id:'hafiz',      icon:'shield',   name:{ar:'الحفيظُ الحافظ',en:'The Protector, the Guardian'}, hook:{ar:'يحفظُك ويرعاك',en:'He guards & watches over you'} },
        { id:'salam',      icon:'crescent', name:{ar:'السلامُ المؤمن',en:'The Source of Peace & Security'}, hook:{ar:'منه الأمانُ والطمأنينة',en:'From Him come safety & calm'} },
        { id:'shakur',     icon:'gem',      name:{ar:'الشكورُ الشاكر',en:'The Most Appreciative, the Thankful'}, hook:{ar:'يشكرُ القليلَ ويضاعِفُه',en:'He rewards the little, multiplied'} },
        { id:'mujib',      icon:'whisper',  name:{ar:'المجيبُ القريب',en:'The Responsive, the Near'}, hook:{ar:'يستجيبُ دعاءَك',en:'He answers your call'} },
        { id:'azim',       icon:'mountain', name:{ar:'العظيمُ الكبير',en:'The Magnificent, the Most Great'}, hook:{ar:'عظمتُه فوقَ كلِّ شيء',en:'His greatness is above all'} },
        { id:'hadi',       icon:'light',    name:{ar:'الهادي النور',en:'The Guide, the Light'}, hook:{ar:'يهديك إلى النور',en:'He guides you to the light'} },
        { id:'hakim',      icon:'compass',  name:{ar:'الحكيم',en:'The All-Wise'}, hook:{ar:'يضعُ كلَّ شيءٍ في موضعِه بحكمة',en:'He places everything in its rightful place'} },
        { id:'hayy', icon:'light', name:{ar:'الحيُّ القيّوم',en:'The Ever-Living, the Sustainer of All'}, hook:{ar:'حيٌّ لا يموت، يقومُ بأمرِ كلِّ شيء',en:'Living, never dying — He sustains everything'} },
        { id:'al_malik', icon:'crown', name:{ar:'الملِكُ المليك',en:'The King, the Sovereign'}, hook:{ar:'له المُلكُ كلُّه، وكلُّ شيءٍ عبدٌ له',en:'All dominion is His; everything serves Him'} },
        { id:'quddus', icon:'dove', name:{ar:'القدّوسُ السُّبّوح',en:'The Most Holy, the Most Glorified'}, hook:{ar:'الكاملُ المُنزَّهُ عن كلِّ عيب',en:'Perfect, free of every flaw'} },
        { id:'aziz', icon:'mountain', name:{ar:'العزيزُ القويُّ المتين',en:'The Almighty, the All-Strong, the Firm'}, hook:{ar:'لا يُغلَبُ ولا يَعجِز، ومنه العزّة',en:'Never overcome, never weak — all honor comes from Him'} },
        { id:'jabbar', icon:'mountain', name:{ar:'الجبّارُ المتكبِّر',en:'The Compeller, The Supremely Great'}, hook:{ar:'يَجبُرُ قلبَك ويَعلو فوقَ كلِّ شيء',en:'He mends your heart and is above all things'} },
        { id:'qahhar', icon:'storm', name:{ar:'القهّارُ القاهر',en:'The Ever-Prevailing, The Subduer'}, hook:{ar:'لا يَغلِبُه شيءٌ أبداً',en:'Nothing can ever overpower Him'} },
        { id:'aliy', icon:'mount', name:{ar:'العليُّ الأعلى المتعالي',en:'The Most High, The Highest, The Exalted'}, hook:{ar:'فوقَ كلِّ شيءٍ ولا شيءَ فوقَه',en:'Above all things, with nothing above Him'} },
        { id:'awwal', icon:'compass', name:{ar:'الأوّلُ الآخِرُ الظاهرُ الباطن',en:'The First, The Last, The Most High, The Most Near'}, hook:{ar:'منه بدأنا وإليه نعود',en:'From Him we began, and to Him we return'} },
        { id:'raqib', icon:'whisper', name:{ar:'الرقيبُ الشهيدُ المهيمن',en:'The Watchful, The Witness, The Guardian'}, hook:{ar:'معك في الخَلوةِ والجَلوة',en:'With you alone and with others'} },
        { id:'khabir', icon:'globe', name:{ar:'الخبيرُ المحيط',en:'The All-Aware, The All-Encompassing'}, hook:{ar:'يعلمُ ما في داخلِ كلِّ شيء',en:'He knows what is inside everything'} },
        { id:'ghaniy', icon:'gem', name:{ar:'الغنيّ',en:'The Self-Sufficient, the Rich'}, hook:{ar:'غنيٌّ عنّا ونحنُ الفقراءُ إليه',en:'He needs no one, and we all need Him'} },
        { id:'hamid', icon:'star', name:{ar:'الحميدُ المجيد',en:'The Praiseworthy, the Glorious'}, hook:{ar:'له الحمدُ كلُّه والمجدُ كلُّه',en:'All praise and all glory are His'} },
        { id:'barr', icon:'heart', name:{ar:'البَرُّ الرؤوف',en:'The Source of Goodness, the Most Tender'}, hook:{ar:'إحسانُه لا ينقطعُ ورأفتُه تُخفِّفُ عنّا',en:'His goodness never stops, His tenderness eases us'} },
        { id:'haqq', icon:'book', name:{ar:'الحقُّ المبين',en:'The Truth, the Clear'}, hook:{ar:'هو الحقُّ وقولُه الحقُّ ويُبيِّنُ لنا الطريق',en:'He is the Truth, His word is truth, and He shows us the way'} },
        { id:'wakil', icon:'shield', name:{ar:'الوكيلُ الحسيب',en:'The Trustee, the All-Sufficient Reckoner'}, hook:{ar:'حسبي اللهُ ونِعمَ الوكيل',en:'Allah is enough for me, the best Trustee'} },
        { id:'wali', icon:'shield', name:{ar:'الوليُّ المولى النصير',en:'The Protecting Friend, the Master, the Helper'}, hook:{ar:'نِعمَ المولى ونِعمَ النصير',en:'The best Master and the best Helper'} },
        { id:'fattah', icon:'light', name:{ar:'الفتّاح',en:'The Opener'}, hook:{ar:'يَفتحُ لك الأبوابَ المُغلَقة',en:'He opens the doors that are shut'} },
        { id:'muqit', icon:'leaf', name:{ar:'المُقيت',en:'The Nourisher'}, hook:{ar:'يُوصِلُ القُوتَ إلى كلِّ مخلوق',en:'He brings nourishment to every creature'} },
        { id:'wasi', icon:'globe', name:{ar:'الواسع',en:'The All-Encompassing'}, hook:{ar:'رحمتُه وعطاؤه بلا حدود',en:'His mercy and giving have no limits'} },
        { id:'hafiy', icon:'heart', name:{ar:'الحفيّ',en:'The Ever-Caring'}, hook:{ar:'يُكرِمُك ويَعتني بك أعظمَ عناية',en:'He honors you and cares for you deeply'} },
        { id:'warith', icon:'crescent', name:{ar:'الوارث',en:'The Inheritor'}, hook:{ar:'يَبقى بعدَ كلِّ شيء',en:'He remains after everything'} },
        { id:'rabb', icon:'crown', name:{ar:'الربُّ السيّد',en:'The Lord, The Master'}, hook:{ar:'ربُّك الذي ربّاك، وسيّدُك الذي تُطيعُه',en:'Your Lord who nurtured you, your Master whom you obey'} },
        { id:'jamil', icon:'gem', name:{ar:'الجميلُ الطيّب',en:'The Beautiful, The Pure'}, hook:{ar:'جميلٌ يحبُّ الجمال، طيّبٌ يحبُّ الطيّب',en:'Beautiful, He loves beauty; Pure, He loves the pure'} },
        { id:'jawad', icon:'gem', name:{ar:'الجوادُ المُعطي',en:'The Most Generous, The Giver'}, hook:{ar:'عطاؤه لا ينقطع',en:'His giving never stops'} },
        { id:'mannan', icon:'heart', name:{ar:'المنّانُ المحسِن',en:'The Bestower of Favors, The Doer of Good'}, hook:{ar:'فضلُه سابقٌ وإحسانُه دائم',en:'His favor comes first, His goodness never ends'} },
        { id:'hakam', icon:'compass', name:{ar:'الحَكَم',en:'The Judge'}, hook:{ar:'حُكمُه عدلٌ وخيرٌ كلُّه',en:'His judgment is all justice and good'} },
        { id:'hayiy', icon:'dove', name:{ar:'الحَيِيّ',en:'The Modest, The Concealing'}, hook:{ar:'لا يَرُدُّ يديك صِفرًا، ويسترُ عيبَك',en:'He won’t return your hands empty, and He covers your faults'} },
        { id:'rafiq', icon:'leaf', name:{ar:'الرفيق',en:'The Gentle'}, hook:{ar:'رفيقٌ يُحبُّ الرِّفق',en:'Gentle, and He loves gentleness'} },
        { id:'shafi', icon:'heart', name:{ar:'الشافي',en:'The Healer'}, hook:{ar:'لا شفاءَ إلا شفاؤه',en:'There is no cure but His cure'} },
        { id:'qabid', icon:'apple', name:{ar:'القابضُ الباسط',en:'The Withholder, The Expander'}, hook:{ar:'يُعطي ويُمسِكُ بحكمة',en:'He gives and holds back with wisdom'} },
        { id:'muqaddim', icon:'compass', name:{ar:'المقدِّمُ المؤخِّر',en:'The Expediter, The Delayer'}, hook:{ar:'كلُّ شيءٍ في وقتِه ومكانِه',en:'Everything in its right time and place'} },
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
