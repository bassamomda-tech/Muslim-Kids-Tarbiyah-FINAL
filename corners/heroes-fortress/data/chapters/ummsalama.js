// data/chapters/ummsalama.js — Heroes · أمُّ سلمة (full chapter; Story tab uses data/stories/ummsalama.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · صحيح البخاري ومسلم
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ummsalama = {
  id:'ummsalama', era:'heroes', icon:'heart',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أمُّ سلمة', en:'Umm Salama' },
  tag:{ ar:'أمُّ المؤمنينَ الحكيمة', en:'The wise Mother of the Believers' },
  accent:'#9A5A2E', accent2:'#BA7A4E',
  greeting:{ ar:'أهلاً يا بطل! أمُّ سلمةَ رضي الله عنها أمُّ المؤمنينَ الحكيمة، صاحبةُ الرأيِ السديدِ الذي أنقذَ المسلمينَ يومَ الحديبية، والصابرةُ على الهجرةِ والفراق. تعالَ نتعلّمْ من حكمتِها وصبرِها.',
    en:'Hello, hero! Umm Salama, the wise Mother of the Believers, whose sound counsel saved the Muslims at Hudaybiyya, and who was patient through migration and separation. Come, let\'s learn from her wisdom and patience.' },

  knowledge:{
    didYouKnow:{ ar:'بمشورةِ أمِّ سلمةَ الحكيمةِ يومَ الحديبيةِ تجاوزَ المسلمونَ أزمةً كبيرة، حين أشارتْ على النبيِّ ﷺ برأيٍ سديدٍ فعملَ الناسُ به.',
      en:'By Umm Salama\u2019s wise counsel at Hudaybiyya, the Muslims overcame a great crisis, when she advised the Prophet ﷺ with sound judgment and the people followed it.' },
    who:{ ar:'هي <b>هندُ بنتُ أبي أميّة</b>، المعروفةُ بـ<b>أمِّ سلمة</b>، أمُّ المؤمنين. كانت من <b>السابقاتِ إلى الإسلام</b>، هاجرتْ هي وزوجُها أبو سلمةَ إلى الحبشةِ ثمّ إلى المدينة، وذاقتْ مرارةَ <b>التفريقِ عن زوجِها وولدِها</b> ثمّ جمعها اللهُ بهم. لمّا استُشهِدَ زوجُها تزوّجها النبيُّ ﷺ. عُرِفتْ بـ<b>العقلِ والحكمةِ ورجاحةِ الرأي</b>، وكان رأيُها يومَ <b>الحديبية</b> سبباً في حلِّ أزمةٍ كبيرة. روتِ الحديثَ وعلّمتْ، وعاشتْ طويلاً معلّمةً للأمّة.',
      en:'She is <b>Hind bint Abi Umayya</b>, known as <b>Umm Salama</b>, a Mother of the Believers. She was among the <b>early believers</b>; she and her husband Abu Salama emigrated to Abyssinia, then to Madinah, and tasted the bitterness of <b>separation from her husband and child</b> before Allah reunited them. When her husband was martyred, the Prophet ﷺ married her. She was known for <b>intellect, wisdom, and sound judgment</b>, and her counsel on the day of <b>Hudaybiyya</b> was the cause of resolving a great crisis. She narrated hadith, taught, and lived long as a teacher of the nation.' },
    facts:[
      { ar:'أمُّ المؤمنينَ ومن السابقاتِ إلى الإسلام.', en:'A Mother of the Believers and among the early Muslims.' },
      { ar:'هاجرتْ إلى الحبشةِ ثمّ المدينةِ وصبرتْ على الفراق.', en:'She emigrated to Abyssinia then Madinah and endured separation.' },
      { ar:'رأيُها الحكيمُ حلَّ أزمةَ الحديبية.', en:'Her wise counsel resolved the crisis at Hudaybiyya.' },
      { ar:'عُرِفتْ بالعقلِ ورجاحةِ الرأيِ والحكمة.', en:'Known for intellect, sound judgment, and wisdom.' },
      { ar:'روتِ الحديثَ وعلّمتِ الأمّةَ سنينَ طويلة.', en:'She narrated hadith and taught the nation for long years.' },
    ],
    timeline:[
      { when:{ar:'الإسلام',en:'Her Islam'}, what:{ar:'من السابقاتِ إلى الإسلامِ مع زوجِها.',en:'Among the early Muslims with her husband.'} },
      { when:{ar:'الهجرة',en:'Migration'}, what:{ar:'هاجرتْ للحبشةِ ثمّ المدينةِ وصبرتْ.',en:'She emigrated to Abyssinia then Madinah, patiently.'} },
      { when:{ar:'الفراق',en:'Separation'}, what:{ar:'فُرِّقَتْ عن زوجِها وولدِها ثمّ جُمِعوا.',en:'She was separated from husband and child, then reunited.'} },
      { when:{ar:'الزواج',en:'Marriage'}, what:{ar:'تزوّجها النبيُّ ﷺ بعدَ استشهادِ زوجِها.',en:'The Prophet ﷺ married her after her husband\u2019s martyrdom.'} },
      { when:{ar:'الحكمة',en:'Wisdom'}, what:{ar:'حلَّ رأيُها أزمةَ الحديبية.',en:'Her counsel resolved the Hudaybiyya crisis.'} },
    ],
    ayah:{ ar:'﴿ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ ﴾', ref:{ ar:'الشورى ٣٨', en:'Ash-Shura 38' } },
  },

  story:[
    { title:{ ar:'أمُّ المؤمنينَ الحكيمة', en:'The Wise Mother of the Believers' },
      pages:[
        { scene:'madinah', text:{ ar:'كانت <b>أمُّ سلمة</b> أمَّ المؤمنينَ الحكيمة، من السابقاتِ إلى الإسلام. هاجرتْ وصبرتْ على الفراق، وكان رأيُها الحكيمُ يومَ الحديبيةِ سبباً في حلِّ أزمةٍ كبيرة. روتِ الحديثَ وعلّمتِ الأمّةَ بعقلِها ورجاحةِ رأيِها.',
          en:'<b>Umm Salama</b> was the wise Mother of the Believers, among the early Muslims. She emigrated and was patient through separation, and her wise counsel on the day of Hudaybiyya resolved a great crisis. She narrated hadith and taught the nation with her intellect and sound judgment.' } } ] }
  ],

  traits:[
    { ar:'الحكمة', en:'Wisdom' }, { ar:'الصبر', en:'Patience' },
    { ar:'رجاحةُ الرأي', en:'Sound judgment' }, { ar:'العلم', en:'Knowledge' },
  ],
  lessons:[
    { icon:'💡', color:'#9A5A2E', title:{ar:'الرأيُ الحكيمُ نعمة',en:'Wise counsel is a blessing'},
      body:{ar:'حلَّ رأيُ أمِّ سلمةَ أزمةً كبيرةً يومَ الحديبية. الكلمةُ الحكيمةُ قد تُنقِذُ موقفاً صعباً.',en:'Umm Salama\u2019s counsel resolved a great crisis at Hudaybiyya. A wise word can rescue a hard situation.'},
      apply:{ar:'أُفكِّرُ بحكمةٍ قبلَ أن أتكلّمَ أو أُشير.',en:'I think wisely before I speak or advise.'} },
    { icon:'🤲', color:'#BA7A4E', title:{ar:'الدعاءُ عند المصيبة',en:'Supplication in calamity'},
      body:{ar:'حين تُوفِّيَ زوجُها دعتْ بدعاءِ النبيِّ ﷺ، فعوّضها اللهُ خيراً منه. الدعاءُ بابُ الفرج.',en:'When her husband died she made the Prophet\u2019s ﷺ supplication, and Allah replaced him with better. Supplication is a door to relief.'},
      apply:{ar:'ألجأُ إلى اللهِ بالدعاءِ عند الشدّة.',en:'I turn to Allah in supplication during hardship.'} },
    { icon:'💪', color:'#7A4520', title:{ar:'اصبِرْ على الفراق',en:'Be patient through separation'},
      body:{ar:'صبرتْ أمُّ سلمةَ على الفراقِ والهجرةِ والمشقّة. الصبرُ يعقبُه فرجٌ وعِوَضٌ من الله.',en:'Umm Salama endured separation, migration, and hardship. Patience is followed by relief and recompense from Allah.'},
      apply:{ar:'أصبِرُ على ما يصعبُ وأرجو ثوابَ الله.',en:'I endure what is hard, hoping for Allah\u2019s reward.'} },
    { icon:'📚', color:'#9A5A2E', title:{ar:'العلمُ والتعليم',en:'Knowledge and teaching'},
      body:{ar:'روتْ أمُّ سلمةَ الحديثَ وعلّمتِ الأمّة. حفظُ العلمِ ونشرُه خيرٌ يبقى أثرُه.',en:'Umm Salama narrated hadith and taught the nation. Preserving and spreading knowledge is a good whose effect endures.'},
      apply:{ar:'أتعلّمُ وأُعلِّمُ ما ينفعُ الناس.',en:'I learn and teach what benefits people.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ ﴾', ref:{ ar:'الشورى ٣٨', en:'Ash-Shura 38' } },
    dua:{ ar:'اللّهُمَّ أجِرني في مصيبتي واخلُفْ لي خيراً منها', ref:{ ar:'من دعاءِ النبيِّ ﷺ', en:'From the Prophet\u2019s ﷺ du\u2019a' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُفكِّرُ بحكمةٍ قبلَ أن أُشيرَ أو أتكلّم.', en:'I think wisely before I advise or speak.' },
        { ar:'ألجأُ إلى اللهِ بالدعاءِ عند الشدّة.', en:'I turn to Allah in du\u2019a during hardship.' },
        { ar:'أصبِرُ وأتعلّمُ وأُعلِّمُ ما ينفع.', en:'I am patient, and I learn and teach what benefits.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ صفةٍ اشتهرتْ أمُّ سلمة؟',en:'What was Umm Salama known for?'},
          options:[{ar:'الحكمةِ ورجاحةِ الرأي',en:'Wisdom and sound judgment'},{ar:'التجارة',en:'Trade'},{ar:'الفروسية',en:'Horsemanship'}], answer:0 },
        { q:{ar:'في أيِّ موقفٍ أنقذَ رأيُها المسلمين؟',en:'In what situation did her counsel save the Muslims?'},
          options:[{ar:'يومَ الحديبية',en:'On the day of Hudaybiyya'},{ar:'يومَ بدر',en:'On the day of Badr'},{ar:'في السوق',en:'In the market'}], answer:0 },
        { q:{ar:'ماذا فعلتْ حين تُوفِّيَ زوجُها أبو سلمة؟',en:'What did she do when her husband Abu Salama died?'},
          options:[{ar:'دعتْ بدعاءِ النبيِّ ﷺ فعوّضها اللهُ خيراً',en:'She made the Prophet\u2019s ﷺ du\u2019a, and Allah gave her better'},{ar:'يئستْ',en:'She despaired'},{ar:'تركتِ الإسلام',en:'She left Islam'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أمُّ سلمةَ أمُّ المؤمنينَ الحكيمة.',en:'Umm Salama was the wise Mother of the Believers.'}, t:true },
        { statement:{ar:'رأيُها الحكيمُ حلَّ أزمةَ الحديبية.',en:'Her wise counsel resolved the Hudaybiyya crisis.'}, t:true },
        { statement:{ar:'كانت قليلةَ العقلِ سيّئةَ الرأي.',en:'She was foolish and of poor judgment.'}, t:false },
        { statement:{ar:'روتِ الحديثَ وعلّمتِ الأمّة.',en:'She narrated hadith and taught the nation.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الحديبية',en:'Hudaybiyya'}, b:{ar:'حلَّ رأيُها أزمتَها',en:'Her counsel resolved its crisis'} },
        { a:{ar:'أبو سلمة',en:'Abu Salama'}, b:{ar:'زوجُها الأوّل',en:'Her first husband'} },
        { a:{ar:'الحكمة',en:'Wisdom'}, b:{ar:'من أبرزِ صفاتِها',en:'Among her foremost traits'} },
        { a:{ar:'الدعاء',en:'Supplication'}, b:{ar:'عوّضها اللهُ به خيراً',en:'By it Allah gave her better'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحكمةِ والصبر', en:'Medal of Wisdom & Patience' },
    stickers:[
      { icon:'light', color:'#9A5A2E', title:{ar:'رجاحةُ الرأي',en:'Sound Judgment'} },
      { icon:'heart', color:'#BA7A4E', title:{ar:'الصابرةُ المحتسبة',en:'The Patient & Hopeful'} },
      { icon:'book',  color:'#7A4520', title:{ar:'راويةُ الحديث',en:'Narrator of Hadith'} },
      { icon:'star',  color:'#9A5A2E', title:{ar:'مستشارةُ الحديبية',en:'Counselor of Hudaybiyya'} },
    ],
    moral:{ ar:'أمُّ سلمةَ قدوةٌ في الحكمةِ والصبرِ ورجاحةِ الرأي — كلمةٌ حكيمةٌ قد تحلُّ أزمةً كبيرة.',
      en:'Umm Salama is a model of wisdom, patience, and sound judgment — a wise word can resolve a great crisis.' },
    reflect:[
      { ar:'حلَّ رأيُ أمِّ سلمةَ أزمةً كبيرة. كيف تُفكِّرُ بحكمةٍ قبلَ أن تتصرّف؟', en:'Umm Salama\u2019s counsel resolved a great crisis. How do you think wisely before acting?' },
      { ar:'صبرتْ ودعتْ عند المصيبة فعوّضها الله. هل تلجأُ إلى اللهِ عند الشدّة؟', en:'She was patient and prayed in calamity, and Allah recompensed her. Do you turn to Allah in hardship?' },
    ],
  },
};
