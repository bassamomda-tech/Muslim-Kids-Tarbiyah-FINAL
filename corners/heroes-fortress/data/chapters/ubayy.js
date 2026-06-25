// data/chapters/ubayy.js — Heroes · أُبَيُّ بنُ كعب (full chapter; Story tab uses data/stories/ubayy.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ubayy = {
  id:'ubayy', era:'heroes', icon:'book',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أُبَيُّ بنُ كعب', en:'Ubayy ibn Ka\u2019b' },
  tag:{ ar:'سيّدُ القُرّاء', en:'Master of the reciters' },
  accent:'#2C6E63', accent2:'#4C8E83',
  greeting:{ ar:'أهلاً يا بطل! أُبَيُّ بنُ كعبٍ رضي الله عنه سيّدُ القُرّاء، أحبَّ النبيُّ ﷺ أن يقرأَ عليه القرآن، وأقرأَ الناسَ كتابَ الله. تعالَ نتعلّمْ من حبِّه للقرآنِ وعلمِه.',
    en:'Hello, hero! Ubayy ibn Ka\u2019b, the master of reciters, whom the Prophet ﷺ asked to recite the Quran to him, and who taught people the Book of Allah. Come, let\'s learn from his love of the Quran and his knowledge.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ لأُبَيٍّ: «إنّ اللهَ أمرني أن أقرأَ عليك القرآن» فبكى أُبَيٌّ فرحاً — أن يذكرَه اللهُ باسمِه في السماء!',
      en:'The Prophet ﷺ said to Ubayy: "Allah has commanded me to recite the Quran to you," and Ubayy wept with joy — that Allah mentioned him by name in the heavens!' },
    who:{ ar:'هو <b>أُبَيُّ بنُ كعب</b> الأنصاريُّ الخزرجي، <b>سيّدُ القُرّاء</b>. كان من <b>كُتّابِ الوحي</b> ومن أحفظِ الصحابةِ لكتابِ الله وأعلمِهم بقراءتِه. شهِدَ بيعةَ العقبةِ وبدراً والمشاهدَ كلَّها. قال عنه النبيُّ ﷺ: <b>«أقرؤُكم أُبَيٌّ»</b>، وأمره اللهُ أن يقرأَ عليه. كان عالماً زاهداً، يخشى الله ويبكي عند تلاوةِ القرآن. أخذَ عنه كبارُ الصحابةِ والتابعينَ القراءةَ والعلم، فكان من أئمّةِ القرآنِ في الأمّة.',
      en:'He is <b>Ubayy ibn Ka\u2019b</b> al-Ansari al-Khazraji, <b>master of the reciters</b>. He was one of the <b>scribes of revelation</b> and among the companions who most memorized the Book of Allah and knew its recitation best. He witnessed the Pledge of Aqaba, Badr, and all the battles. The Prophet ﷺ said of him: <b>"The best reciter among you is Ubayy,"</b> and Allah commanded the Prophet ﷺ to recite to him. He was a scholar and ascetic, fearing Allah and weeping at the recitation of the Quran. Senior companions and successors took recitation and knowledge from him, so he became one of the imams of the Quran in the nation.' },
    facts:[
      { ar:'سيّدُ القُرّاءِ وأقرأُ الصحابة.', en:'Master of the reciters and best reciter of the companions.' },
      { ar:'من كُتّابِ وحيِ النبيِّ ﷺ.', en:'One of the scribes of the Prophet\u2019s ﷺ revelation.' },
      { ar:'أمرَ اللهُ النبيَّ ﷺ أن يقرأَ عليه القرآن.', en:'Allah commanded the Prophet ﷺ to recite the Quran to him.' },
      { ar:'قال النبيُّ ﷺ: «أقرؤُكم أُبَيٌّ».', en:'The Prophet ﷺ said: "The best reciter among you is Ubayy."' },
      { ar:'أخذَ عنه كبارُ الصحابةِ والتابعينَ القراءة.', en:'Senior companions and successors took recitation from him.' },
    ],
    timeline:[
      { when:{ar:'العقبة',en:'Aqaba'}, what:{ar:'شهِدَ بيعةَ العقبةِ من الأنصار.',en:'He witnessed the Pledge of Aqaba among the Ansar.'} },
      { when:{ar:'الوحي',en:'Revelation'}, what:{ar:'صار من كُتّابِ الوحي.',en:'He became a scribe of revelation.'} },
      { when:{ar:'القراءة',en:'Recitation'}, what:{ar:'قال النبيُّ ﷺ: أقرؤُكم أُبَيٌّ.',en:'The Prophet ﷺ said: the best reciter is Ubayy.'} },
      { when:{ar:'التكريم',en:'The Honor'}, what:{ar:'أمرَ اللهُ النبيَّ ﷺ أن يقرأَ عليه.',en:'Allah commanded the Prophet ﷺ to recite to him.'} },
      { when:{ar:'التعليم',en:'Teaching'}, what:{ar:'أقرأَ الناسَ وعلّمهم كتابَ الله.',en:'He taught people recitation and the Book of Allah.'} },
    ],
    ayah:{ ar:'﴿ لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ ﴾', ref:{ ar:'البيّنة ١', en:'Al-Bayyina 1' } },
  },

  story:[
    { title:{ ar:'سيّدُ القُرّاء', en:'Master of the Reciters' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>أُبَيُّ بنُ كعب</b> سيّدَ القُرّاءِ وأقرأَ الصحابةِ لكتابِ الله، ومن كُتّابِ الوحي. أمرَ اللهُ النبيَّ ﷺ أن يقرأَ عليه القرآن، وقال النبيُّ ﷺ: «أقرؤُكم أُبَيٌّ». أقرأَ الناسَ وعلّمهم القرآنَ بحبٍّ وخشوع.',
          en:'<b>Ubayy ibn Ka\u2019b</b> was the master of reciters and the best of the companions in reciting the Book of Allah, and a scribe of revelation. Allah commanded the Prophet ﷺ to recite the Quran to him, and the Prophet ﷺ said: "The best reciter among you is Ubayy." He taught people the Quran with love and humility.' } } ] }
  ],

  traits:[
    { ar:'حبُّ القرآن', en:'Love of the Quran' }, { ar:'العلم', en:'Knowledge' },
    { ar:'الخشوع', en:'Humility before Allah' }, { ar:'التعليم', en:'Teaching' },
  ],
  lessons:[
    { icon:'📖', color:'#2C6E63', title:{ar:'أحبِبِ القرآنَ وأتقِنْه',en:'Love the Quran and master it'},
      body:{ar:'صار أُبَيٌّ سيّدَ القُرّاءِ بحبِّه للقرآنِ وإتقانِه. مَن أحبَّ كتابَ اللهِ رفعه الله.',en:'Ubayy became master of reciters through his love and mastery of the Quran. Whoever loves Allah\u2019s Book, Allah elevates him.'},
      apply:{ar:'أقرأُ القرآنَ بحبٍّ وأُتقِنُ تلاوتَه.',en:'I read the Quran with love and perfect my recitation.'} },
    { icon:'😢', color:'#4C8E83', title:{ar:'اخشعْ عند كلامِ الله',en:'Be moved by Allah\u2019s words'},
      body:{ar:'كان أُبَيٌّ يبكي عند تلاوةِ القرآنِ من خشيةِ الله. القلبُ الحيُّ يتأثّرُ بكلامِ ربِّه.',en:'Ubayy wept at the recitation of the Quran out of awe of Allah. A living heart is moved by its Lord\u2019s words.'},
      apply:{ar:'أتدبّرُ القرآنَ وأخشعُ عند سماعِه.',en:'I ponder the Quran and humble myself when I hear it.'} },
    { icon:'🎓', color:'#1F584F', title:{ar:'علّمْ ما تعلّمت',en:'Teach what you learn'},
      body:{ar:'أقرأَ أُبَيٌّ الناسَ وعلّمهم القرآن. خيرُكم من تعلّمَ القرآنَ وعلّمه.',en:'Ubayy taught people the Quran. The best of you is the one who learns the Quran and teaches it.'},
      apply:{ar:'أُشارِكُ ما أتعلّمُه مع غيري.',en:'I share what I learn with others.'} },
    { icon:'🌟', color:'#2C6E63', title:{ar:'تواضعْ مع فضلِك',en:'Stay humble despite your merit'},
      body:{ar:'مع مكانتِه العظيمةِ بقيَ أُبَيٌّ زاهداً متواضعاً. الفضلُ الحقُّ يزيدُ صاحبَه تواضعاً.',en:'Despite his great standing Ubayy remained ascetic and humble. True merit only increases one in humility.'},
      apply:{ar:'أبقى متواضعاً مهما زادَ علمي.',en:'I stay humble no matter how much my knowledge grows.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾', ref:{ ar:'المزّمّل ٤', en:'Al-Muzzammil 4' } },
    dua:{ ar:'اللّهُمَّ اجعلِ القرآنَ ربيعَ قلبي ونورَ صدري', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُحِبُّ القرآنَ وأُتقِنُ تلاوتَه.', en:'I love the Quran and perfect my recitation.' },
        { ar:'أخشعُ وأتدبّرُ عند كلامِ الله.', en:'I humble myself and reflect on Allah\u2019s words.' },
        { ar:'أتعلّمُ القرآنَ وأُعلِّمُه غيري.', en:'I learn the Quran and teach it to others.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ أُبَيُّ بنُ كعب؟',en:'What was Ubayy ibn Ka\u2019b known as?'},
          options:[{ar:'سيّدُ القُرّاء',en:'Master of the reciters'},{ar:'سيفُ الله',en:'The sword of Allah'},{ar:'أمينُ الأمّة',en:'Trustee of the nation'}], answer:0 },
        { q:{ar:'ماذا قال النبيُّ ﷺ عن قراءةِ أُبَيّ؟',en:'What did the Prophet ﷺ say about Ubayy\u2019s recitation?'},
          options:[{ar:'أقرؤُكم أُبَيٌّ',en:'The best reciter among you is Ubayy'},{ar:'لا يُحسِنُ القراءة',en:'He recites poorly'},{ar:'لا يحفظُ شيئاً',en:'He memorizes nothing'}], answer:0 },
        { q:{ar:'بِمَ شرّفَ اللهُ أُبَيّاً؟',en:'How did Allah honor Ubayy?'},
          options:[{ar:'أمرَ النبيَّ ﷺ أن يقرأَ عليه القرآن',en:'He commanded the Prophet ﷺ to recite the Quran to him'},{ar:'أعطاه مالاً',en:'He gave him wealth'},{ar:'جعله ملكاً',en:'He made him a king'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أُبَيٌّ سيّدُ القُرّاءِ ومن كُتّابِ الوحي.',en:'Ubayy was master of reciters and a scribe of revelation.'}, t:true },
        { statement:{ar:'أمرَ اللهُ النبيَّ ﷺ أن يقرأَ عليه القرآن.',en:'Allah commanded the Prophet ﷺ to recite the Quran to him.'}, t:true },
        { statement:{ar:'كان أُبَيٌّ يكرهُ القرآنَ ولا يحفظُه.',en:'Ubayy hated the Quran and did not memorize it.'}, t:false },
        { statement:{ar:'علّمَ الناسَ القرآنَ وأقرأَهم.',en:'He taught and instructed people in the Quran.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'سيّدُ القُرّاء',en:'Master of reciters'}, b:{ar:'لقبُ أُبَيّ',en:'Ubayy\u2019s title'} },
        { a:{ar:'أقرؤُكم أُبَيٌّ',en:'"Best reciter is Ubayy"'}, b:{ar:'قولُ النبيِّ ﷺ',en:'The Prophet\u2019s ﷺ words'} },
        { a:{ar:'الوحي',en:'Revelation'}, b:{ar:'كان من كُتّابِه',en:'He was among its scribes'} },
        { a:{ar:'الخشوع',en:'Humility'}, b:{ar:'يبكي عند التلاوة',en:'He wept at recitation'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ القرآنِ والقراءة', en:'Medal of the Quran & Recitation' },
    stickers:[
      { icon:'book',  color:'#2C6E63', title:{ar:'سيّدُ القُرّاء',en:'Master of Reciters'} },
      { icon:'light', color:'#4C8E83', title:{ar:'أقرؤُكم أُبَيّ',en:'The Best Reciter'} },
      { icon:'pen',   color:'#1F584F', title:{ar:'كاتبُ الوحي',en:'Scribe of Revelation'} },
      { icon:'heart', color:'#2C6E63', title:{ar:'الخاشعُ المتدبّر',en:'The Humble Reflector'} },
    ],
    moral:{ ar:'أُبَيٌّ قدوةٌ في حبِّ القرآنِ وإتقانِه وتعليمِه والخشوعِ عند كلامِ الله.',
      en:'Ubayy is a model of loving the Quran, mastering and teaching it, and humbling oneself before Allah\u2019s words.' },
    reflect:[
      { ar:'صار أُبَيٌّ سيّدَ القُرّاءِ بحبِّه للقرآن. كم تُحِبُّ القرآنَ وتحرصُ على تلاوتِه؟', en:'Ubayy became master of reciters through love of the Quran. How much do you love it and care to recite it?' },
      { ar:'علّمَ الناسَ ما تعلّمَ. هل تُشارِكُ علمَك مع غيرِك؟', en:'He taught people what he learned. Do you share your knowledge with others?' },
    ],
  },
};
