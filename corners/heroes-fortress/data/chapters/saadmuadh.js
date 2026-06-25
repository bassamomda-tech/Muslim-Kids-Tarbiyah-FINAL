// data/chapters/saadmuadh.js — Heroes · سعدُ بنُ معاذ (full chapter; Story tab uses data/stories/saadmuadh.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.saadmuadh = {
  id:'saadmuadh', era:'heroes', icon:'shield',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'سعدُ بنُ معاذ', en:'Sa\u2019d ibn Mu\u2019adh' },
  tag:{ ar:'سيّدُ الأنصارِ الذي اهتزّ لموتِه العرش', en:'Chief of the Ansar; the Throne shook at his death' },
  accent:'#3A5BA8', accent2:'#5A7BC8',
  greeting:{ ar:'أهلاً يا بطل! سعدُ بنُ معاذٍ رضي الله عنه سيّدُ الأوسِ من الأنصار، أسلمَ فأسلمَ قومُه كلُّهم في يوم، واهتزّ عرشُ الرحمنِ لموتِه. تعالَ نتعلّمْ من إيمانِه القويِّ ونصرتِه.',
    en:'Hello, hero! Sa\u2019d ibn Mu\u2019adh, chief of the Aws of the Ansar — when he embraced Islam his whole tribe followed in a single day, and the Throne of the Most Merciful shook at his death. Come, let\'s learn from his powerful faith and devotion.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ عند موتِ سعد: «اهتزّ عرشُ الرحمنِ لموتِ سعدِ بنِ معاذ» — وشهِدَ جنازتَه سبعونَ ألفَ مَلَك.',
      en:'At Sa\u2019d\'s death the Prophet ﷺ said: "The Throne of the Most Merciful shook at the death of Sa\u2019d ibn Mu\u2019adh" — and seventy thousand angels attended his funeral.' },
    who:{ ar:'هو <b>سعدُ بنُ معاذ</b> الأوسيُّ الأنصاري، <b>سيّدُ الأوس</b>. أسلمَ على يدِ مصعبِ بنِ عُميرٍ في المدينة، فلمّا أسلمَ قال لقومِه بني عبدِ الأشهل: كلامُ رجالِكم ونسائِكم عليَّ حرامٌ حتى تؤمنوا — <b>فأسلموا جميعاً في يومٍ واحد</b>! كان قويَّ الإيمانِ شديدَ النصرةِ للنبيِّ ﷺ. ثبتَ يومَ بدرٍ، وجُرِحَ يومَ الخندق، وحكمَ في <b>بني قُريظة</b> بحكمِ الله. لمّا ماتَ من جُرحِه اهتزّ لموتِه عرشُ الرحمن.',
      en:'He is <b>Sa\u2019d ibn Mu\u2019adh</b> of the Aws of the Ansar, <b>chief of the Aws</b>. He embraced Islam through Mus\u2019ab ibn Umayr in Madinah, and told his tribe Banu Abd al-Ashhal: speaking to your men and women is forbidden to me until you believe — <b>so they all embraced Islam in a single day</b>! He was strong in faith and fierce in support of the Prophet ﷺ. He stood firm at Badr, was wounded at the Trench, and judged the case of <b>Banu Qurayza</b> by Allah\'s ruling. When he died of his wound, the Throne of the Most Merciful shook.' },
    facts:[
      { ar:'سيّدُ الأوسِ من الأنصار.', en:'Chief of the Aws of the Ansar.' },
      { ar:'أسلمَ قومُه كلُّهم في يومٍ واحدٍ بإسلامِه.', en:'His entire tribe embraced Islam in one day through him.' },
      { ar:'ثبتَ يومَ بدرٍ ونصرَ النبيَّ ﷺ بكلمتِه المشهورة.', en:'He stood firm at Badr with his famous words of support.' },
      { ar:'حكمَ في بني قُريظةَ بحكمِ الله من فوقِ سبعِ سماوات.', en:'He judged Banu Qurayza by the ruling of Allah from above the seven heavens.' },
      { ar:'اهتزّ عرشُ الرحمنِ لموتِه وشيّعه سبعونَ ألفَ مَلَك.', en:'The Throne shook at his death; 70,000 angels attended his funeral.' },
    ],
    timeline:[
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ على يدِ مصعبٍ فأسلمَ قومُه.',en:'He embraced Islam via Mus\u2019ab; his tribe followed.'} },
      { when:{ar:'بدر',en:'Badr'}, what:{ar:'ثبتَ ونصرَ النبيَّ ﷺ بكلمتِه.',en:'He stood firm and pledged his support.'} },
      { when:{ar:'الخندق',en:'The Trench'}, what:{ar:'جُرِحَ في ذراعِه دفاعاً عن المدينة.',en:'He was wounded in the arm defending Madinah.'} },
      { when:{ar:'قُريظة',en:'Qurayza'}, what:{ar:'حكمَ فيهم بحكمِ اللهِ العادل.',en:'He judged them by Allah\'s just ruling.'} },
      { when:{ar:'الوفاة',en:'His Passing'}, what:{ar:'ماتَ من جُرحِه فاهتزّ العرشُ لموتِه.',en:'He died of his wound; the Throne shook for him.'} },
    ],
    ayah:{ ar:'﴿ مِّنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ﴾', ref:{ ar:'الأحزاب ٢٣', en:'Al-Ahzab 23' } },
  },

  story:[
    { title:{ ar:'سيّدٌ اهتزّ لموتِه العرش', en:'A Chief for Whom the Throne Shook' },
      pages:[
        { scene:'ascend', text:{ ar:'كان <b>سعدُ بنُ معاذ</b> سيّدَ الأوس، أسلمَ فأسلمَ قومُه في يوم. ثبتَ يومَ بدرٍ ونصرَ النبيَّ ﷺ، وجُرِحَ يومَ الخندق. فلمّا ماتَ من جُرحِه قال النبيُّ ﷺ: «اهتزّ عرشُ الرحمنِ لموتِ سعد».',
          en:'<b>Sa\u2019d ibn Mu\u2019adh</b> was chief of the Aws; when he believed, his tribe believed in a day. He stood firm at Badr supporting the Prophet ﷺ, and was wounded at the Trench. When he died of his wound the Prophet ﷺ said: "The Throne of the Most Merciful shook at the death of Sa\u2019d."' } } ] }
  ],

  traits:[
    { ar:'الإيمانُ القوي', en:'Strong faith' }, { ar:'النصرة', en:'Devotion' },
    { ar:'العدل', en:'Justice' }, { ar:'القيادة', en:'Leadership' },
  ],
  lessons:[
    { icon:'🤝', color:'#3A5BA8', title:{ar:'كنْ سبباً في هدايةِ غيرِك',en:'Be a cause of others\' guidance'},
      body:{ar:'بإسلامِ سعدٍ أسلمَ قومُه كلُّهم. القائدُ الصالحُ يقودُ الناسَ إلى الخير.',en:'Through Sa\u2019d\'s Islam his whole tribe believed. A good leader guides people to good.'},
      apply:{ar:'أدعو أهلي وأصحابي إلى الخيرِ بقدوتي.',en:'I invite my family and friends to good by my example.'} },
    { icon:'🛡️', color:'#5A7BC8', title:{ar:'انصرِ الحقَّ بكلِّ قوّتِك',en:'Support truth with all your strength'},
      body:{ar:'قدّمَ سعدٌ نفسَه وقومَه لنصرةِ النبيِّ ﷺ يومَ بدر. البطلُ يبذلُ ما يملكُ للحق.',en:'Sa\u2019d offered himself and his tribe to support the Prophet ﷺ at Badr. A hero gives all he has for the truth.'},
      apply:{ar:'أنصرُ الحقَّ ولو كلّفني ذلك جهداً.',en:'I support truth even when it costs me effort.'} },
    { icon:'⚖️', color:'#2E4888', title:{ar:'احكمْ بالعدل',en:'Judge with justice'},
      body:{ar:'حكمَ سعدٌ في بني قُريظةَ بحكمِ اللهِ لا بهواه. العدلُ أساسُ القرارِ الصحيح.',en:'Sa\u2019d judged Banu Qurayza by Allah\'s ruling, not his desire. Justice is the basis of right decisions.'},
      apply:{ar:'أحكمُ بين الناسِ بالحقِّ والعدل.',en:'I judge between people with truth and justice.'} },
    { icon:'💙', color:'#3A5BA8', title:{ar:'أخلِصْ لله',en:'Be sincere to Allah'},
      body:{ar:'أخلصَ سعدٌ في إيمانِه ونصرتِه فأكرمه اللهُ بأعظمِ تكريم. الإخلاصُ يرفعُ مكانتَك.',en:'Sa\u2019d was sincere in faith and devotion, so Allah honored him greatly. Sincerity raises your rank.'},
      apply:{ar:'أعملُ الخيرَ مخلِصاً لوجهِ الله.',en:'I do good sincerely for Allah\'s pleasure.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ﴾', ref:{ ar:'الأحزاب ٢٣', en:'Al-Ahzab 23' } },
    dua:{ ar:'اللّهُمَّ ارزقني إيماناً قويّاً ونصرةً للحقِّ وإخلاصاً لك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أكونُ سبباً في هدايةِ من حولي.', en:'I am a cause of guidance for those around me.' },
        { ar:'أنصرُ الحقَّ بكلِّ ما أملك.', en:'I support truth with all I have.' },
        { ar:'أحكمُ وأتعاملُ بالعدلِ والإخلاص.', en:'I act with justice and sincerity.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا قال النبيُّ ﷺ عندَ موتِ سعد؟',en:'What did the Prophet ﷺ say at Sa\u2019d\'s death?'},
          options:[{ar:'اهتزّ عرشُ الرحمنِ لموتِه',en:'The Throne of the Most Merciful shook'},{ar:'لا شيء',en:'Nothing'},{ar:'كان تاجراً',en:'He was a merchant'}], answer:0 },
        { q:{ar:'ماذا حدثَ حين أسلمَ سعد؟',en:'What happened when Sa\u2019d embraced Islam?'},
          options:[{ar:'أسلمَ قومُه كلُّهم في يوم',en:'His whole tribe believed in a day'},{ar:'تركه قومُه',en:'His tribe left him'},{ar:'هاجرَ وحدَه',en:'He emigrated alone'}], answer:0 },
        { q:{ar:'بِمَ حكمَ سعدٌ في بني قُريظة؟',en:'By what did Sa\u2019d judge Banu Qurayza?'},
          options:[{ar:'بحكمِ الله',en:'By the ruling of Allah'},{ar:'بهواه',en:'By his desire'},{ar:'بالصدفة',en:'By chance'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'سعدٌ سيّدُ الأوسِ من الأنصار.',en:'Sa\u2019d was chief of the Aws of the Ansar.'}, t:true },
        { statement:{ar:'اهتزّ عرشُ الرحمنِ لموتِه.',en:'The Throne shook at his death.'}, t:true },
        { statement:{ar:'تخلّفَ سعدٌ عن نصرةِ النبيِّ ﷺ.',en:'Sa\u2019d failed to support the Prophet ﷺ.'}, t:false },
        { statement:{ar:'حكمَ في بني قُريظةَ بحكمِ الله.',en:'He judged Banu Qurayza by Allah\'s ruling.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'سيّدُ الأوس',en:'Chief of the Aws'}, b:{ar:'لقبُ سعد',en:'Sa\u2019d\'s rank'} },
        { a:{ar:'العرش',en:'The Throne'}, b:{ar:'اهتزّ لموتِه',en:'Shook at his death'} },
        { a:{ar:'٧٠٬٠٠٠ مَلَك',en:'70,000 angels'}, b:{ar:'شيّعوا جنازتَه',en:'Attended his funeral'} },
        { a:{ar:'قُريظة',en:'Qurayza'}, b:{ar:'حكمَ فيهم بالعدل',en:'He judged them justly'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ سيّدِ الأنصار', en:'Medal of the Chief of the Ansar' },
    stickers:[
      { icon:'shield', color:'#3A5BA8', title:{ar:'سيّدُ الأوس',en:'Chief of the Aws'} },
      { icon:'star',   color:'#5A7BC8', title:{ar:'اهتزّ له العرش',en:'The Throne Shook'} },
      { icon:'crescent',color:'#2E4888', title:{ar:'٧٠ ألفَ مَلَك',en:'70,000 Angels'} },
      { icon:'gem',    color:'#3A5BA8', title:{ar:'الحاكمُ العادل',en:'The Just Judge'} },
    ],
    moral:{ ar:'سعدٌ قدوةٌ في الإيمانِ القويِّ والنصرةِ والعدلِ والإخلاص — أكرمه اللهُ بأن اهتزّ عرشُه لموتِه.',
      en:'Sa\u2019d is a model of strong faith, devotion, justice, and sincerity — Allah honored him so that His Throne shook at his death.' },
    reflect:[
      { ar:'بإسلامِ سعدٍ اهتدى قومُه. كيف تكونُ سبباً في خيرِ من حولِك؟', en:'Through Sa\u2019d\'s Islam his people were guided. How can you be a cause of good for those around you?' },
      { ar:'حكمَ سعدٌ بالعدل. هل تكونُ عادلاً حتى لو كان الأمرُ صعباً؟', en:'Sa\u2019d judged justly. Are you fair even when it is hard?' },
    ],
  },
};
