// data/chapters/nasir.js — Leaders · عبد الرحمن الناصر (full chapter; Story tab uses data/stories/nasir.js)
// Sources: البداية والنهاية · نفح الطيب · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nasir = {
  id:'nasir', era:'heroes', icon:'crown',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'عبد الرحمن الناصر', en:'Abdurrahman an-Nasir' },
  tag:{ ar:'خليفةُ قرطبةَ الزاهية', en:'Caliph of flourishing Cordoba' },
  accent:'#1E6A7A', accent2:'#3E8A9A',
  greeting:{ ar:'أهلاً يا بطل! عبد الرحمن الناصرُ رحمه الله بلغتِ الأندلسُ في عهدِه أوجَ مجدِها وحضارتِها، وصارتْ قرطبةُ من أعظمِ مدنِ العالم. تعالَ نتعلّمْ من حكمتِه وحُسنِ إدارتِه.',
    en:'Hello, hero! Abdurrahman an-Nasir, in whose era Andalusia reached the peak of its glory and civilization, and Cordoba became one of the greatest cities in the world. Come, let\'s learn from his wisdom and good governance.' },

  knowledge:{
    didYouKnow:{ ar:'في عهدِ الناصرِ صارتْ قرطبةُ تُضاءُ شوارعُها ليلاً وفيها مكتباتٌ ضخمةٌ وجامعاتٌ، في وقتٍ كانت فيه أوروبا تعيشُ في ظلام!',
      en:'In an-Nasir\u2019s era Cordoba\u2019s streets were lit at night, with huge libraries and universities, at a time when Europe lived in darkness!' },
    who:{ ar:'هو <b>عبد الرحمن الناصرُ لدينِ الله</b>، من أعظمِ حكّامِ <b>الأندلس</b>. تولّى الحكمَ والبلادُ مضطربةٌ مفكّكة، فوحّدها بحكمتِه وقوّتِه، وأعادَ إليها الأمنَ والاستقرار. بلغتِ الأندلسُ في عهدِه <b>أوجَ قوّتِها وحضارتِها</b>، وصارتْ <b>قرطبةُ</b> عاصمتُه من أعظمِ مدنِ العالم: شوارعُها مضاءةٌ، ومكتباتُها ضخمة، وجامعاتُها تجذبُ طلّابَ العلمِ من كلِّ مكان. اهتمَّ بـ<b>العلمِ والعمرانِ والعدل</b>، فبنى مدينةَ <b>الزهراء</b> الرائعة. حكمَ نحوَ خمسينَ سنةً كانت من أزهى عصورِ الأندلس.',
      en:'He is <b>Abdurrahman an-Nasir li-Din Allah</b>, among the greatest rulers of <b>Andalusia</b>. He took rule while the land was in turmoil and fragmented, and he united it with his wisdom and strength, restoring security and stability. In his era Andalusia reached <b>the peak of its power and civilization</b>, and his capital <b>Cordoba</b> became one of the greatest cities in the world: its streets lit, its libraries vast, its universities drawing students of knowledge from everywhere. He cared for <b>knowledge, building, and justice</b>, constructing the magnificent city of <b>az-Zahra</b>. He ruled about fifty years, among the most brilliant eras of Andalusia.' },
    facts:[
      { ar:'من أعظمِ حكّامِ الأندلسِ وأطولِهم حكماً.', en:'Among the greatest and longest-reigning rulers of Andalusia.' },
      { ar:'وحّدَ الأندلسَ المضطربةَ وأعادَ الأمن.', en:'He united turbulent Andalusia and restored security.' },
      { ar:'بلغتِ الحضارةُ في عهدِه أوجَها في قرطبة.', en:'Civilization peaked in Cordoba in his era.' },
      { ar:'بنى مدينةَ الزهراءِ الرائعة.', en:'He built the magnificent city of az-Zahra.' },
      { ar:'اهتمَّ بالعلمِ والعمرانِ والعدل.', en:'He cared for knowledge, building, and justice.' },
    ],
    timeline:[
      { when:{ar:'الحكم',en:'Rule'}, what:{ar:'تولّى والبلادُ مضطربةٌ مفكّكة.',en:'He took power while the land was in turmoil.'} },
      { when:{ar:'التوحيد',en:'Unification'}, what:{ar:'وحّدَ الأندلسَ وأعادَ الأمن.',en:'He united Andalusia and restored security.'} },
      { when:{ar:'الازدهار',en:'Flourishing'}, what:{ar:'بلغتِ الحضارةُ أوجَها في قرطبة.',en:'Civilization peaked in Cordoba.'} },
      { when:{ar:'الزهراء',en:'Az-Zahra'}, what:{ar:'بنى مدينةَ الزهراءِ الرائعة.',en:'He built the magnificent city of az-Zahra.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'حكمَ نحوَ خمسينَ سنةً من أزهى العصور.',en:'He ruled about fifty of the most brilliant years.'} },
    ],
    ayah:{ ar:'﴿ وَأَصْلِحْ وَلَا تَتَّبِعْ سَبِيلَ الْمُفْسِدِينَ ﴾', ref:{ ar:'الأعراف ١٤٢', en:'Al-A\u2019raf 142' } },
  },

  story:[
    { title:{ ar:'خليفةُ قرطبةَ الزاهية', en:'Caliph of Flourishing Cordoba' },
      pages:[
        { scene:'madinah', text:{ ar:'كان <b>عبد الرحمن الناصر</b> من أعظمِ حكّامِ الأندلس. وحّدَ البلادَ المضطربةَ وأعادَ الأمن، فبلغتِ الحضارةُ في عهدِه أوجَها، وصارتْ قرطبةُ من أعظمِ مدنِ العالمِ علماً وعمراناً. بنى مدينةَ الزهراءِ واهتمَّ بالعلمِ والعدل.',
          en:'<b>Abdurrahman an-Nasir</b> was among the greatest rulers of Andalusia. He united the turbulent land and restored security, so civilization peaked in his era, and Cordoba became one of the world\u2019s greatest cities in knowledge and building. He built the city of az-Zahra and cared for knowledge and justice.' } } ] }
  ],

  traits:[
    { ar:'الحكمة', en:'Wisdom' }, { ar:'حُسنُ الإدارة', en:'Good governance' },
    { ar:'العناية بالعلم', en:'Care for knowledge' }, { ar:'العدل', en:'Justice' },
  ],
  lessons:[
    { icon:'🤝', color:'#1E6A7A', title:{ar:'وحِّدِ الصفَّ بالحكمة',en:'Unite the ranks with wisdom'},
      body:{ar:'وحّدَ الناصرُ الأندلسَ المتفرّقةَ بحكمتِه. الوحدةُ قوّةٌ، والحكيمُ يجمعُ القلوبَ لا يُفرِّقُها.',en:'An-Nasir united fragmented Andalusia with his wisdom. Unity is strength, and the wise unite hearts rather than divide them.'},
      apply:{ar:'أسعى لجمعِ الكلمةِ ونبذِ الخلاف.',en:'I work to unite people and reject discord.'} },
    { icon:'📚', color:'#3E8A9A', title:{ar:'ارعَ العلمَ والحضارة',en:'Nurture knowledge and civilization'},
      body:{ar:'جعلَ الناصرُ قرطبةَ منارةً للعلمِ بمكتباتِها وجامعاتِها. رعايةُ العلمِ ترفعُ الأمم.',en:'An-Nasir made Cordoba a beacon of knowledge with its libraries and universities. Nurturing knowledge raises nations.'},
      apply:{ar:'أُقدِّرُ العلمَ وأُشجِّعُ على طلبِه.',en:'I value knowledge and encourage seeking it.'} },
    { icon:'🏛️', color:'#155A6A', title:{ar:'ابنِ وأعمرْ',en:'Build and develop'},
      body:{ar:'بنى الناصرُ مدينةَ الزهراءِ ومنشآتٍ عظيمة. القائدُ الصالحُ يبني ويُعمِّرُ لينفعَ الناس.',en:'An-Nasir built the city of az-Zahra and great structures. A good leader builds and develops to benefit people.'},
      apply:{ar:'أبني وأُصلِحُ ما حولي بما أستطيع.',en:'I build and improve around me as I can.'} },
    { icon:'⚖️', color:'#1E6A7A', title:{ar:'اعدلْ وأصلِحْ',en:'Be just and reform'},
      body:{ar:'أعادَ الناصرُ الأمنَ والعدلَ بعدَ الفوضى. العدلُ يجلبُ الاستقرارَ والازدهار.',en:'An-Nasir restored security and justice after chaos. Justice brings stability and prosperity.'},
      apply:{ar:'أعدلُ وأُصلِحُ ما أقدرُ عليه.',en:'I am just and reform what I am able to.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَأَصْلِحْ وَلَا تَتَّبِعْ سَبِيلَ الْمُفْسِدِينَ ﴾', ref:{ ar:'الأعراف ١٤٢', en:'Al-A\u2019raf 142' } },
    dua:{ ar:'اللّهُمَّ ارزقني الحكمةَ والعدلَ وحُسنَ الإصلاح', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أسعى لجمعِ الكلمةِ ونبذِ الخلاف.', en:'I work to unite people and reject discord.' },
        { ar:'أُقدِّرُ العلمَ وأرعى كلَّ نافع.', en:'I value knowledge and nurture all that benefits.' },
        { ar:'أبني وأعدلُ وأُصلِحُ ما حولي.', en:'I build, am just, and reform around me.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما عاصمةُ الناصرِ التي ازدهرتْ في عهدِه؟',en:'What was an-Nasir\u2019s capital that flourished in his era?'},
          options:[{ar:'قرطبة',en:'Cordoba'},{ar:'بغداد',en:'Baghdad'},{ar:'دمشق',en:'Damascus'}], answer:0 },
        { q:{ar:'ماذا فعلَ الناصرُ بالأندلسِ المضطربة؟',en:'What did an-Nasir do with turbulent Andalusia?'},
          options:[{ar:'وحّدها وأعادَ الأمنَ والازدهار',en:'He united it and restored security and prosperity'},{ar:'تركها',en:'He abandoned it'},{ar:'دمّرها',en:'He destroyed it'}], answer:0 },
        { q:{ar:'أيَّ مدينةٍ رائعةٍ بنى الناصر؟',en:'What magnificent city did an-Nasir build?'},
          options:[{ar:'مدينةَ الزهراء',en:'The city of az-Zahra'},{ar:'البصرة',en:'Basra'},{ar:'الكوفة',en:'Kufa'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'بلغتِ الأندلسُ أوجَ حضارتِها في عهدِ الناصر.',en:'Andalusia peaked in civilization in an-Nasir\u2019s era.'}, t:true },
        { statement:{ar:'وحّدَ الأندلسَ وأعادَ إليها الأمن.',en:'He united Andalusia and restored its security.'}, t:true },
        { statement:{ar:'أهملَ العلمَ والعمران.',en:'He neglected knowledge and building.'}, t:false },
        { statement:{ar:'بنى مدينةَ الزهراءِ الرائعة.',en:'He built the magnificent city of az-Zahra.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'قرطبة',en:'Cordoba'}, b:{ar:'عاصمتُه الزاهية',en:'His flourishing capital'} },
        { a:{ar:'الزهراء',en:'Az-Zahra'}, b:{ar:'مدينةٌ بناها',en:'A city he built'} },
        { a:{ar:'التوحيد',en:'Unification'}, b:{ar:'جمعَ به الأندلس',en:'By it he united Andalusia'} },
        { a:{ar:'العلم',en:'Knowledge'}, b:{ar:'رعاه فازدهرتِ الحضارة',en:'He nurtured it; civilization flourished'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحكمةِ والحضارة', en:'Medal of Wisdom & Civilization' },
    stickers:[
      { icon:'crown', color:'#1E6A7A', title:{ar:'خليفةُ قرطبة',en:'Caliph of Cordoba'} },
      { icon:'mosque',color:'#3E8A9A', title:{ar:'باني الزهراء',en:'Builder of az-Zahra'} },
      { icon:'book',  color:'#155A6A', title:{ar:'راعي العلم',en:'Patron of Knowledge'} },
      { icon:'star',  color:'#1E6A7A', title:{ar:'موحّدُ الأندلس',en:'Unifier of Andalusia'} },
    ],
    moral:{ ar:'عبد الرحمن الناصرُ قدوةٌ في الحكمةِ والعدلِ ورعايةِ العلمِ — وحّدَ بلادَه وجعلها منارةً للحضارة.',
      en:'Abdurrahman an-Nasir is a model of wisdom, justice, and nurturing knowledge — he united his land and made it a beacon of civilization.' },
    reflect:[
      { ar:'وحّدَ الناصرُ بلادَه بعدَ الفُرقة. كيف تجمعُ بين الناسِ وتنبذُ الخلاف؟', en:'An-Nasir united his land after division. How do you bring people together and reject discord?' },
      { ar:'جعلَ قرطبةَ منارةً للعلم. كيف تُسهِمُ في نشرِ العلمِ من حولِك؟', en:'He made Cordoba a beacon of knowledge. How do you contribute to spreading knowledge around you?' },
    ],
  },
};
