// data/chapters/amribnas.js — Heroes · عمرُو بنُ العاص (full chapter; Story tab uses data/stories/amribnas.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.amribnas = {
  id:'amribnas', era:'heroes', icon:'compass',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'عمرُو بنُ العاص', en:'Amr ibn al-As' },
  tag:{ ar:'القائدُ الداهيةُ فاتحُ مصر', en:'The shrewd commander, conqueror of Egypt' },
  accent:'#A86E32', accent2:'#C68E54',
  greeting:{ ar:'أهلاً يا بطل! عمرُو بنُ العاصِ رضي الله عنه من دُهاةِ العربِ وقادتِهم، أسلمَ فحسُنَ إسلامُه، وفتحَ مصرَ ونشرَ فيها الإسلام. تعالَ نتعلّمْ من ذكائِه وحُسنِ تدبيرِه.',
    en:'Hello, hero! Amr ibn al-As, one of the shrewdest and ablest of the Arabs, who embraced Islam and excelled in it, conquered Egypt and spread Islam there. Come, let\'s learn from his cleverness and good planning.' },

  knowledge:{
    didYouKnow:{ ar:'عدَّ النبيُّ ﷺ عمرَو بنَ العاصِ من المؤمنينَ الصالحين، وأمّره على جيشٍ فيه أبو بكرٍ وعمر، ثقةً بحُسنِ قيادتِه.',
      en:'The Prophet ﷺ counted Amr ibn al-As among the righteous believers, and made him commander of an army that included Abu Bakr and Umar, trusting his fine leadership.' },
    who:{ ar:'هو <b>عمرُو بنُ العاص</b> السهميُّ القُرشي، من <b>دُهاةِ العربِ</b> وأذكيائِهم. أسلمَ قبلَ فتحِ مكّةَ مع خالدِ بنِ الوليد، فحسُنَ إسلامُه. كان <b>قائداً محنّكاً</b> وسياسيّاً بارعاً، أمّره النبيُّ ﷺ على غزوةِ <b>ذاتِ السلاسل</b> وفيها كبارُ الصحابة. وفي عهدِ عمرَ بنِ الخطّاب <b>فتحَ مصرَ</b> وأسّسَ مدينةَ الفُسطاطِ وبنى أوّلَ مسجدٍ فيها، فدخلَ أهلُها في الإسلام. عُرِفَ بالحكمةِ وحُسنِ التدبيرِ وسرعةِ البديهة.',
      en:'He is <b>Amr ibn al-As</b> of the Sahm clan of Quraysh, one of the <b>shrewdest and cleverest of the Arabs</b>. He embraced Islam before the conquest of Makkah, alongside Khalid ibn al-Walid, and excelled in it. He was a <b>seasoned commander</b> and skilled statesman; the Prophet ﷺ made him commander of the <b>Dhat as-Salasil</b> expedition, which included senior companions. In Umar ibn al-Khattab\u2019s era he <b>conquered Egypt</b>, founded the city of Fustat, and built its first mosque, so its people entered Islam. He was known for wisdom, sound planning, and quick wit.' },
    facts:[
      { ar:'من دُهاةِ العربِ وأذكيائِهم.', en:'One of the shrewdest and cleverest of the Arabs.' },
      { ar:'أسلمَ قبلَ فتحِ مكّةَ مع خالدِ بنِ الوليد.', en:'Embraced Islam before Makkah\u2019s conquest, with Khalid ibn al-Walid.' },
      { ar:'أمّره النبيُّ ﷺ على ذاتِ السلاسلِ وفيها كبارُ الصحابة.', en:'The Prophet ﷺ made him commander at Dhat as-Salasil, over senior companions.' },
      { ar:'فتحَ مصرَ وأسّسَ الفُسطاطَ ونشرَ الإسلام.', en:'He conquered Egypt, founded Fustat, and spread Islam.' },
      { ar:'عُرِفَ بالحكمةِ وحُسنِ التدبيرِ وسرعةِ البديهة.', en:'Known for wisdom, sound planning, and quick wit.' },
    ],
    timeline:[
      { when:{ar:'الذكاء',en:'His Wit'}, what:{ar:'كان من دُهاةِ العربِ قبلَ الإسلام.',en:'He was among the shrewdest Arabs before Islam.'} },
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ قبلَ الفتحِ فحسُنَ إسلامُه.',en:'He embraced Islam before the conquest and excelled.'} },
      { when:{ar:'القيادة',en:'Command'}, what:{ar:'أمّره النبيُّ ﷺ على ذاتِ السلاسل.',en:'The Prophet ﷺ made him commander at Dhat as-Salasil.'} },
      { when:{ar:'فتحُ مصر',en:'Egypt'}, what:{ar:'فتحَ مصرَ ونشرَ فيها الإسلام.',en:'He conquered Egypt and spread Islam there.'} },
      { when:{ar:'الفُسطاط',en:'Fustat'}, what:{ar:'أسّسَ الفُسطاطَ وبنى أوّلَ مسجد.',en:'He founded Fustat and built its first mosque.'} },
    ],
    ayah:{ ar:'﴿ وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ ﴾', ref:{ ar:'الأنفال ٦٠', en:'Al-Anfal 60' } },
  },

  story:[
    { title:{ ar:'القائدُ الداهية', en:'The Shrewd Commander' },
      pages:[
        { scene:'desert', text:{ ar:'كان <b>عمرُو بنُ العاص</b> من دُهاةِ العربِ وأذكيائِهم، أسلمَ فحسُنَ إسلامُه، وأمّره النبيُّ ﷺ على الجيش. فتحَ مصرَ وأسّسَ الفُسطاطَ ونشرَ الإسلام، وعُرِفَ بالحكمةِ وحُسنِ التدبير.',
          en:'<b>Amr ibn al-As</b> was among the shrewdest and cleverest of the Arabs; he embraced Islam and excelled, and the Prophet ﷺ made him a commander. He conquered Egypt, founded Fustat, and spread Islam, known for wisdom and sound planning.' } } ] }
  ],

  traits:[
    { ar:'الذكاء', en:'Cleverness' }, { ar:'القيادة', en:'Leadership' },
    { ar:'حُسنُ التدبير', en:'Good planning' }, { ar:'الشجاعة', en:'Courage' },
  ],
  lessons:[
    { icon:'🧠', color:'#A86E32', title:{ar:'استخدمْ عقلَك في الخير',en:'Use your mind for good'},
      body:{ar:'وظّفَ عمرٌو ذكاءَه ودهاءَه في خدمةِ الإسلام. العقلُ نعمةٌ تُستعمَلُ فيما ينفع.',en:'Amr used his cleverness and shrewdness to serve Islam. The mind is a blessing to use for what benefits.'},
      apply:{ar:'أُفكِّرُ وأُخطِّطُ قبلَ أن أعمل.',en:'I think and plan before I act.'} },
    { icon:'🤝', color:'#C68E54', title:{ar:'التغييرُ للأفضلِ ممكن',en:'Change for the better is possible'},
      body:{ar:'كان عمرٌو يُعادي الإسلام، فلمّا عرفَ الحقَّ أسلمَ وصار من قادتِه. لا تيأسْ من إصلاحِ نفسِك.',en:'Amr once opposed Islam, but when he knew the truth he embraced it and became one of its leaders. Never despair of bettering yourself.'},
      apply:{ar:'أُصلِحُ نفسي وأرجعُ للحقِّ متى عرفتُه.',en:'I improve myself and return to the truth when I know it.'} },
    { icon:'🏛️', color:'#8A5824', title:{ar:'اعمرِ الأرضَ بالخير',en:'Build up the land with good'},
      body:{ar:'بنى عمرٌو مدينةَ الفُسطاطِ وأوّلَ مسجدٍ في مصر. البطلُ يبني ويعمرُ لا يهدمُ ويُفسِد.',en:'Amr built the city of Fustat and Egypt\u2019s first mosque. A hero builds and develops, he does not destroy and corrupt.'},
      apply:{ar:'أبني وأُصلِحُ وأنفعُ من حولي.',en:'I build, improve, and benefit those around me.'} },
    { icon:'⚖️', color:'#A86E32', title:{ar:'القائدُ يتحمّلُ ويتواضع',en:'A leader bears burdens and stays humble'},
      body:{ar:'قادَ عمرٌو الجيوشَ وتحمّلَ المسؤوليةَ بحكمة. القائدُ الصالحُ يخدمُ الناسَ لا يستعلي عليهم.',en:'Amr led armies and carried responsibility with wisdom. A good leader serves people rather than lording over them.'},
      apply:{ar:'إذا قُدتُ فريقاً خدمتُهم بعدلٍ وتواضع.',en:'If I lead a team I serve them with justice and humility.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ ﴾', ref:{ ar:'الأنفال ٦٠', en:'Al-Anfal 60' } },
    dua:{ ar:'اللّهُمَّ ارزقني عقلاً راجحاً وحكمةً وحُسنَ تدبير', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُفكِّرُ وأُخطِّطُ وأستخدمُ عقلي في الخير.', en:'I think, plan, and use my mind for good.' },
        { ar:'أُصلِحُ نفسي وأرجعُ للحقِّ متى عرفتُه.', en:'I better myself and return to the truth when I know it.' },
        { ar:'أبني وأُعمِّرُ وأنفعُ الناس.', en:'I build, develop, and benefit people.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ بلدٍ ارتبطَ اسمُ عمرِو بنِ العاصِ في الفتوح؟',en:'Which land is Amr ibn al-As associated with conquering?'},
          options:[{ar:'مصر',en:'Egypt'},{ar:'فارس',en:'Persia'},{ar:'الأندلس',en:'Andalusia'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ عمرٌو من الصفات؟',en:'What trait was Amr famed for?'},
          options:[{ar:'الذكاءِ وحُسنِ التدبير',en:'Cleverness and good planning'},{ar:'البخل',en:'Stinginess'},{ar:'الكسل',en:'Laziness'}], answer:0 },
        { q:{ar:'ماذا أسّسَ عمرٌو في مصر؟',en:'What did Amr found in Egypt?'},
          options:[{ar:'مدينةَ الفُسطاطِ وأوّلَ مسجد',en:'The city of Fustat and the first mosque'},{ar:'سوقاً فقط',en:'Only a market'},{ar:'قصراً',en:'A palace'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'عمرُو بنُ العاصِ من دُهاةِ العربِ وقادتِهم.',en:'Amr ibn al-As was among the shrewdest Arabs and their leaders.'}, t:true },
        { statement:{ar:'فتحَ مصرَ ونشرَ فيها الإسلام.',en:'He conquered Egypt and spread Islam there.'}, t:true },
        { statement:{ar:'بقيَ عدوّاً للإسلامِ ولم يُسلمْ أبداً.',en:'He remained an enemy of Islam and never embraced it.'}, t:false },
        { statement:{ar:'أمّره النبيُّ ﷺ على جيشٍ فيه كبارُ الصحابة.',en:'The Prophet ﷺ made him commander over senior companions.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'مصر',en:'Egypt'}, b:{ar:'فتحها عمرٌو',en:'Amr conquered it'} },
        { a:{ar:'الفُسطاط',en:'Fustat'}, b:{ar:'مدينةٌ أسّسَها',en:'A city he founded'} },
        { a:{ar:'ذاتُ السلاسل',en:'Dhat as-Salasil'}, b:{ar:'أمّره النبيُّ ﷺ عليها',en:'The Prophet ﷺ made him its commander'} },
        { a:{ar:'الدهاء',en:'Shrewdness'}, b:{ar:'من صفاتِه المشهورة',en:'A famed trait of his'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحكمةِ والفتح', en:'Medal of Wisdom & Conquest' },
    stickers:[
      { icon:'compass', color:'#A86E32', title:{ar:'فاتحُ مصر',en:'Conqueror of Egypt'} },
      { icon:'mosque',  color:'#C68E54', title:{ar:'باني الفُسطاط',en:'Builder of Fustat'} },
      { icon:'light',   color:'#8A5824', title:{ar:'القائدُ الداهية',en:'The Shrewd Commander'} },
      { icon:'star',    color:'#A86E32', title:{ar:'حُسنُ التدبير',en:'Sound Planning'} },
    ],
    moral:{ ar:'عمرٌو قدوةٌ في الذكاءِ وحُسنِ التدبيرِ والقيادة — جعلَ عقلَه وقوّتَه في خدمةِ الإسلام.',
      en:'Amr is a model of cleverness, sound planning, and leadership — he put his mind and strength in the service of Islam.' },
    reflect:[
      { ar:'وظّفَ عمرٌو ذكاءَه في الخير. كيف تستخدمُ عقلَك فيما ينفع؟', en:'Amr used his cleverness for good. How do you use your mind for what benefits?' },
      { ar:'تغيّرَ من عدوٍّ إلى قائدٍ للإسلام. هل تُصلِحُ نفسَك متى عرفتَ الحق؟', en:'He changed from an enemy to a leader of Islam. Do you better yourself when you know the truth?' },
    ],
  },
};
