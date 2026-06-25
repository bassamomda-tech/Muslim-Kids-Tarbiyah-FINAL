// data/activities-battles.js — Challenge Hall for the BATTLES era (المعارك الخالدة).
// 8 activities × 3 levels = 24 challenges. Grounded in well-known Islamic history.
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.battles = {
  era: 'battles',
  title: { ar: 'ساحةُ المعارك', en: 'Battles Challenge Hall' },
  sub:   { ar: '٨ أنشطة — كلٌّ على ٣ مستويات (٢٤ تحدّياً)', en: '8 activities — each at 3 levels (24 challenges)' },
  medal: { ar: 'قائدُ المعارك', en: 'Battle Commander' },
  list: [

  /* 1 · Chronological order */
  { id:'order', icon:'🔢', title:{ ar:'الترتيبُ الزمنيّ', en:'Chronological order' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'بدر',en:'Badr'},{ar:'اليرموك',en:'Yarmouk'},{ar:'حطّين',en:'Hattin'},{ar:'فتحُ القسطنطينية',en:'Fall of Constantinople'} ]},
      intermediate:{ type:'order', items:[
        {ar:'بدر',en:'Badr'},{ar:'اليرموك',en:'Yarmouk'},{ar:'القادسية',en:'Qadisiyyah'},
        {ar:'عينُ جالوت',en:'Ayn Jalut'},{ar:'فتحُ القسطنطينية',en:'Constantinople'} ]},
      advanced:{ type:'order', items:[
        {ar:'بدر',en:'Badr'},{ar:'اليرموك',en:'Yarmouk'},{ar:'القادسية',en:'Qadisiyyah'},{ar:'نهاوند',en:'Nahawand'},
        {ar:'ملاذكرد',en:'Manzikert'},{ar:'حطّين',en:'Hattin'},{ar:'عينُ جالوت',en:'Ayn Jalut'},{ar:'فتحُ القسطنطينية',en:'Constantinople'} ]},
    } },

  /* 2 · Battle & commander */
  { id:'commanders', icon:'🛡️', title:{ ar:'المعركةُ وقائدُها', en:'Battle & commander' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'بدر',en:'Badr'},     b:{ar:'النبيُّ محمد ﷺ',en:'The Prophet ﷺ'} },
        { a:{ar:'اليرموك',en:'Yarmouk'}, b:{ar:'خالد بن الوليد',en:'Khalid ibn al-Walid'} },
        { a:{ar:'حطّين',en:'Hattin'}, b:{ar:'صلاحُ الدين',en:'Salah ad-Din'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'اليرموك',en:'Yarmouk'},   b:{ar:'خالد بن الوليد',en:'Khalid'} },
        { a:{ar:'القادسية',en:'Qadisiyyah'},b:{ar:'سعد بن أبي وقّاص',en:'Saad ibn Abi Waqqas'} },
        { a:{ar:'حطّين',en:'Hattin'},      b:{ar:'صلاحُ الدين الأيوبي',en:'Salah ad-Din'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'سيفُ الدين قُطُز',en:'Sayf ad-Din Qutuz'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'القادسية',en:'Qadisiyyah'}, b:{ar:'سعد بن أبي وقّاص',en:'Saad ibn Abi Waqqas'} },
        { a:{ar:'فتحُ القسطنطينية',en:'Constantinople'}, b:{ar:'محمد الفاتح',en:'Mehmed the Conqueror'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'}, b:{ar:'قُطُز وبيبرس',en:'Qutuz & Baybars'} },
        { a:{ar:'فتحُ الأندلس',en:'Conquest of Andalus'}, b:{ar:'طارق بن زياد',en:'Tariq ibn Ziyad'} },
        { a:{ar:'ملاذكرد',en:'Manzikert'}, b:{ar:'ألب أرسلان',en:'Alp Arslan'} },
      ]},
    } },

  /* 3 · Battle & foe */
  { id:'foes', icon:'⚔️', title:{ ar:'المعركةُ وعدوُّها', en:'Battle & foe' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'اليرموك',en:'Yarmouk'},   b:{ar:'الرومُ (البيزنطيون)',en:'The Byzantines'} },
        { a:{ar:'القادسية',en:'Qadisiyyah'},b:{ar:'الفُرس',en:'The Persians'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'المغول (التتار)',en:'The Mongols'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'حطّين',en:'Hattin'},       b:{ar:'الصليبيون',en:'The Crusaders'} },
        { a:{ar:'القادسية',en:'Qadisiyyah'}, b:{ar:'الفُرس',en:'The Persians'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'المغول',en:'The Mongols'} },
        { a:{ar:'فتحُ القسطنطينية',en:'Constantinople'}, b:{ar:'البيزنطيون',en:'The Byzantines'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'اليرموك',en:'Yarmouk'},    b:{ar:'الرومُ البيزنطيون',en:'The Byzantines'} },
        { a:{ar:'نهاوند',en:'Nahawand'},    b:{ar:'الفُرسُ الساسانيون',en:'The Sasanian Persians'} },
        { a:{ar:'حطّين',en:'Hattin'},       b:{ar:'الصليبيون',en:'The Crusaders'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'المغول',en:'The Mongols'} },
        { a:{ar:'ملاذكرد',en:'Manzikert'},  b:{ar:'البيزنطيون',en:'The Byzantines'} },
      ]},
    } },

  /* 4 · Quiz */
  { id:'facts', icon:'❓', title:{ ar:'اختبارُ المعارك', en:'Battles quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'في أيِّ معركةٍ هزمَ المسلمونَ المغولَ وأوقفوا زحفَهم؟',en:'In which battle did Muslims stop the Mongols?'},
          options:[{ar:'عينُ جالوت',en:'Ayn Jalut'},{ar:'بدر',en:'Badr'},{ar:'حطّين',en:'Hattin'}], answer:0 },
        { q:{ar:'مَن حرّر بيتَ المقدسِ في معركةِ حطّين؟',en:'Who liberated Jerusalem at Hattin?'},
          options:[{ar:'صلاحُ الدين',en:'Salah ad-Din'},{ar:'قُطُز',en:'Qutuz'},{ar:'خالد',en:'Khalid'}], answer:0 },
        { q:{ar:'مَن فتحَ القسطنطينية؟',en:'Who conquered Constantinople?'},
          options:[{ar:'محمد الفاتح',en:'Mehmed the Conqueror'},{ar:'طارق',en:'Tariq'},{ar:'ألب أرسلان',en:'Alp Arslan'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'مَن قاد المسلمينَ في اليرموكِ ضدَّ الروم؟',en:'Who led the Muslims at Yarmouk?'},
          options:[{ar:'خالد بن الوليد',en:'Khalid ibn al-Walid'},{ar:'سعد',en:'Saad'},{ar:'عمرو',en:'Amr'}], answer:0 },
        { q:{ar:'القادسيةُ كانت ضدَّ أيِّ دولة؟',en:'Qadisiyyah was against which empire?'},
          options:[{ar:'الفُرس',en:'The Persians'},{ar:'الروم',en:'The Romans'},{ar:'المغول',en:'The Mongols'}], answer:0 },
        { q:{ar:'مَن فتحَ الأندلسَ وعبرَ المضيق؟',en:'Who conquered Andalus crossing the strait?'},
          options:[{ar:'طارق بن زياد',en:'Tariq ibn Ziyad'},{ar:'موسى بن نصير',en:'Musa ibn Nusayr'},{ar:'عقبة',en:'Uqba'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'في أيِّ معركةٍ فتحَ السلاجقةُ بابَ الأناضولِ للمسلمين؟',en:'Which battle opened Anatolia to Muslims?'},
          options:[{ar:'ملاذكرد',en:'Manzikert'},{ar:'نهاوند',en:'Nahawand'},{ar:'بلاط الشهداء',en:'Tours'}], answer:0 },
        { q:{ar:'سُمّيت نهاوندُ بـ«فتحِ الفتوح» لأنها حسمتِ الحربَ ضدّ مَن؟',en:'Nahawand decided the war against whom?'},
          options:[{ar:'الفُرس',en:'The Persians'},{ar:'الروم',en:'The Romans'},{ar:'القوط',en:'The Goths'}], answer:0 },
        { q:{ar:'مَن القائدُ المملوكيُّ الذي انتصرَ في عينِ جالوت؟',en:'Which Mamluk sultan won at Ayn Jalut?'},
          options:[{ar:'قُطُز',en:'Qutuz'},{ar:'بيبرس فقط',en:'Baybars alone'},{ar:'صلاحُ الدين',en:'Salah ad-Din'}], answer:0 },
      ]},
    } },

  /* 5 · True or False */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'بدرٌ أوّلُ انتصارٍ كبيرٍ للمسلمين.',en:'Badr was the Muslims’ first major victory.'}, t:true },
        { statement:{ar:'في عينِ جالوتَ انتصرَ المغولُ على المسلمين.',en:'At Ayn Jalut the Mongols defeated the Muslims.'}, t:false },
        { statement:{ar:'حرّر صلاحُ الدينِ القدسَ بعد حطّين.',en:'Salah ad-Din freed Jerusalem after Hattin.'}, t:true },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'فتحَ المسلمونَ بلادَ فارسَ بعد القادسيةِ ونهاوند.',en:'Persia fell after Qadisiyyah and Nahawand.'}, t:true },
        { statement:{ar:'قاد خالدُ بنُ الوليدِ معركةَ اليرموك.',en:'Khalid led Yarmouk.'}, t:true },
        { statement:{ar:'فتحَ طارقُ بنُ زيادٍ القسطنطينية.',en:'Tariq ibn Ziyad conquered Constantinople.'}, t:false },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'فتحَ محمدٌ الفاتحُ القسطنطينيةَ سنةَ ٨٥٧هـ.',en:'Mehmed conquered Constantinople in 857 AH.'}, t:true },
        { statement:{ar:'كانت ملاذكردُ بينَ السلاجقةِ والفُرس.',en:'Manzikert was between Seljuks and Persians.'}, t:false },
        { statement:{ar:'نهاوندُ لُقّبت بفتحِ الفتوح.',en:'Nahawand was called the “Victory of Victories”.'}, t:true },
      ]},
    } },

  /* 6 · Who am I? */
  { id:'whoami', icon:'🕵️', title:{ ar:'مَن أنا؟', en:'Who am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'لقّبني النبيُّ ﷺ بسيفِ اللهِ المسلول.',en:'The Prophet ﷺ called me the Drawn Sword of Allah.'},
                {ar:'قُدتُ المسلمينَ في اليرموك.',en:'I led the Muslims at Yarmouk.'},
                {ar:'لم أُهزَمْ في معركةٍ قطّ.',en:'I was never defeated in battle.'},
                {ar:'أنا خالدُ بنُ الوليد.',en:'I am Khalid ibn al-Walid.'} ],
        options:[{ar:'خالد بن الوليد',en:'Khalid'},{ar:'سعد',en:'Saad'},{ar:'عمرو بن العاص',en:'Amr'},{ar:'المثنى',en:'Al-Muthanna'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'وحّدتُ المسلمينَ ضدَّ الصليبيين.',en:'I united Muslims against the Crusaders.'},
                {ar:'انتصرتُ في حطّين.',en:'I triumphed at Hattin.'},
                {ar:'حرّرتُ بيتَ المقدس.',en:'I liberated Jerusalem.'},
                {ar:'أنا صلاحُ الدينِ الأيوبي.',en:'I am Salah ad-Din al-Ayyubi.'} ],
        options:[{ar:'صلاحُ الدين',en:'Salah ad-Din'},{ar:'نورُ الدين',en:'Nur ad-Din'},{ar:'قُطُز',en:'Qutuz'},{ar:'بيبرس',en:'Baybars'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'كنتُ سلطاناً شابّاً طموحاً.',en:'I was a young, ambitious sultan.'},
                {ar:'حقّقتُ بشارةَ النبيِّ ﷺ بفتحِ مدينةٍ عظيمة.',en:'I fulfilled the Prophet’s ﷺ glad tiding of a great city.'},
                {ar:'نقلتُ سفني فوقَ اليابسة.',en:'I carried my ships over land.'},
                {ar:'أنا محمدٌ الفاتح.',en:'I am Mehmed the Conqueror.'} ],
        options:[{ar:'محمد الفاتح',en:'Mehmed'},{ar:'سليمان القانوني',en:'Suleiman'},{ar:'ألب أرسلان',en:'Alp Arslan'},{ar:'أورخان',en:'Orhan'}], answer:0 },
    } },

  /* 7 · Memory flip (battle ↔ symbol) */
  { id:'flip', icon:'🃏', title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'بدر',en:'Badr'},   b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'حطّين',en:'Hattin'},b:{ar:'🕌',en:'🕌'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'🐎',en:'🐎'} },
        { a:{ar:'القسطنطينية',en:'Constantinople'},b:{ar:'🏰',en:'🏰'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'بدر',en:'Badr'},   b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'اليرموك',en:'Yarmouk'},b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'القادسية',en:'Qadisiyyah'},b:{ar:'🏹',en:'🏹'} },
        { a:{ar:'حطّين',en:'Hattin'},b:{ar:'🕌',en:'🕌'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'🐎',en:'🐎'} },
        { a:{ar:'القسطنطينية',en:'Constantinople'},b:{ar:'🏰',en:'🏰'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'بدر',en:'Badr'},   b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'اليرموك',en:'Yarmouk'},b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'القادسية',en:'Qadisiyyah'},b:{ar:'🏹',en:'🏹'} },
        { a:{ar:'نهاوند',en:'Nahawand'},b:{ar:'🗝️',en:'🗝️'} },
        { a:{ar:'حطّين',en:'Hattin'},b:{ar:'🕌',en:'🕌'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'},b:{ar:'🐎',en:'🐎'} },
        { a:{ar:'ملاذكرد',en:'Manzikert'},b:{ar:'🏔️',en:'🏔️'} },
        { a:{ar:'القسطنطينية',en:'Constantinople'},b:{ar:'🏰',en:'🏰'} },
      ]},
    } },

  /* 8 · Maze */
  { id:'maze', icon:'🧭', title:{ ar:'متاهةُ الفتح', en:'Conquest maze' },
    levels:{
      beginner:{ type:'maze', size:6, goal:'🕌', start:{ar:'دمشق',en:'Damascus'}, dest:{ar:'بيتُ المقدس',en:'Jerusalem'},
        hook:{ar:'قُدِ الجيشَ لتحريرِ بيتِ المقدس',en:'Lead the army to free Jerusalem'} },
      intermediate:{ type:'maze', size:8, goal:'🏰', start:{ar:'أدرنة',en:'Edirne'}, dest:{ar:'القسطنطينية',en:'Constantinople'},
        hook:{ar:'تقدّمْ نحوَ أسوارِ القسطنطينية',en:'Advance to the walls of Constantinople'} },
      advanced:{ type:'maze', size:10, goal:'🕌', start:{ar:'القاهرة',en:'Cairo'}, dest:{ar:'عينُ جالوت',en:'Ayn Jalut'},
        hook:{ar:'سِرْ بجيشِ المماليكِ لِلقاءِ المغول',en:'March the Mamluk army to meet the Mongols'} },
    } },

  ],
};
