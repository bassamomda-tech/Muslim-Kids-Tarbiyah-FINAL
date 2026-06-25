// data/chapters/ibnqasim.js — Leaders · محمدُ بنُ القاسم (full chapter; Story tab uses data/stories/ibnqasim.js)
// Sources: البداية والنهاية · فتوح البلدان · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibnqasim = {
  id:'ibnqasim', era:'heroes', icon:'compass',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'محمدُ بنُ القاسم', en:'Muhammad ibn al-Qasim' },
  tag:{ ar:'فاتحُ السند', en:'Conqueror of Sindh' },
  accent:'#2A5A7A', accent2:'#4A7A9A',
  greeting:{ ar:'أهلاً يا بطل! محمدُ بنُ القاسمِ رحمه الله قائدٌ شابٌّ فتحَ بلادَ السندِ (باكستانَ والهند) ونشرَ فيها الإسلامَ بالعدلِ والرحمة. تعالَ نتعلّمْ من شجاعتِه وعدلِه.',
    en:'Hello, hero! Muhammad ibn al-Qasim, a young commander who conquered the land of Sindh (Pakistan and India) and spread Islam there with justice and mercy. Come, let\'s learn from his courage and justice.' },

  knowledge:{
    didYouKnow:{ ar:'فتحَ محمدُ بنُ القاسمِ بلادَ السندِ وهو شابٌّ في نحوِ السابعةَ عشرةَ من عمرِه، وعاملَ أهلَها بالعدلِ فأحبّوه ودخلوا في الإسلام!',
      en:'Muhammad ibn al-Qasim conquered the land of Sindh while a youth of about seventeen, and treated its people with justice, so they loved him and entered Islam!' },
    who:{ ar:'هو <b>محمدُ بنُ القاسم</b> الثقفي، قائدٌ شابٌّ موهوبٌ أرسله الحجّاجُ على رأسِ جيشٍ لفتحِ <b>بلادِ السند</b> (باكستانَ وغربِ الهند). فتحها وهو في <b>نحوِ السابعةَ عشرة</b>! لم يكنِ الفتحُ بالقوّةِ فقط، بل بـ<b>العدلِ والرحمةِ وحُسنِ المعاملة</b>: أمّنَ الناسَ على دينِهم وأموالِهم، وأقامَ العدلَ بينهم، ومنعَ الظلم. فأحبَّه أهلُ السندِ ودخلَ كثيرٌ منهم في الإسلامِ طوعاً، حتى إنّهم حزِنوا حين عُزِل. كان مثالاً للقائدِ الشابِّ الذي يفتحُ القلوبَ قبلَ البلاد.',
      en:'He is <b>Muhammad ibn al-Qasim</b> ath-Thaqafi, a gifted young commander sent by al-Hajjaj at the head of an army to conquer the <b>land of Sindh</b> (Pakistan and western India). He conquered it while about <b>seventeen years old</b>! The conquest was not by force alone, but through <b>justice, mercy, and good treatment</b>: he secured people in their faith and property, established justice among them, and prevented oppression. So the people of Sindh loved him and many entered Islam willingly — so much that they grieved when he was removed. He was a model of the young leader who conquers hearts before lands.' },
    facts:[
      { ar:'قائدٌ شابٌّ فتحَ بلادَ السندِ وعمرُه نحوَ ١٧.', en:'A young commander who conquered Sindh at about age 17.' },
      { ar:'فتحَ القلوبَ بالعدلِ والرحمةِ لا بالقوّةِ فقط.', en:'He won hearts through justice and mercy, not force alone.' },
      { ar:'أمّنَ الناسَ على دينِهم وأموالِهم.', en:'He secured the people in their faith and property.' },
      { ar:'دخلَ كثيرٌ من أهلِ السندِ في الإسلامِ طوعاً.', en:'Many people of Sindh entered Islam willingly.' },
      { ar:'حزِنَ أهلُ السندِ حين عُزِلَ لحبِّهم له.', en:'The people of Sindh grieved when he was removed, for their love of him.' },
    ],
    timeline:[
      { when:{ar:'الشباب',en:'Youth'}, what:{ar:'قائدٌ موهوبٌ شابٌّ صغيرُ السن.',en:'A gifted young commander, small in age.'} },
      { when:{ar:'الفتح',en:'The Conquest'}, what:{ar:'فتحَ بلادَ السندِ وهو في نحوِ السابعةَ عشرة.',en:'He conquered Sindh at about seventeen.'} },
      { when:{ar:'العدل',en:'Justice'}, what:{ar:'أقامَ العدلَ وأمّنَ الناس.',en:'He established justice and secured the people.'} },
      { when:{ar:'المحبّة',en:'The Love'}, what:{ar:'أحبَّه أهلُ السندِ وأسلمَ كثيرٌ منهم.',en:'The people of Sindh loved him; many embraced Islam.'} },
      { when:{ar:'العزل',en:'The Removal'}, what:{ar:'عُزِلَ فحزِنَ عليه أهلُ السند.',en:'He was removed and the people of Sindh grieved.'} },
    ],
    ayah:{ ar:'﴿ وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ ﴾', ref:{ ar:'النساء ٥٨', en:'An-Nisa 58' } },
  },

  story:[
    { title:{ ar:'فاتحُ السند', en:'Conqueror of Sindh' },
      pages:[
        { scene:'desert', text:{ ar:'كان <b>محمدُ بنُ القاسم</b> قائداً شابّاً موهوباً، فتحَ بلادَ السندِ وهو في نحوِ السابعةَ عشرة. لم يفتحْها بالقوّةِ فقط، بل بالعدلِ والرحمةِ وحُسنِ المعاملة، فأمّنَ الناسَ وأحبّوه ودخلَ كثيرٌ منهم في الإسلامِ طوعاً.',
          en:'<b>Muhammad ibn al-Qasim</b> was a gifted young commander who conquered the land of Sindh at about seventeen. He conquered it not by force alone but through justice, mercy, and good treatment, securing the people so they loved him and many entered Islam willingly.' } } ] }
  ],

  traits:[
    { ar:'العدل', en:'Justice' }, { ar:'الرحمة', en:'Mercy' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'حُسنُ القيادة', en:'Good leadership' },
  ],
  lessons:[
    { icon:'❤️', color:'#2A5A7A', title:{ar:'افتحِ القلوبَ بالرحمة',en:'Win hearts with mercy'},
      body:{ar:'فتحَ ابنُ القاسمِ قلوبَ أهلِ السندِ بالعدلِ والرحمةِ فأحبّوه. المعاملةُ الحسنةُ تكسبُ القلوب.',en:'Ibn al-Qasim won the hearts of Sindh\u2019s people through justice and mercy, so they loved him. Good treatment wins hearts.'},
      apply:{ar:'أُعامِلُ الناسَ بالرفقِ والرحمة.',en:'I treat people with gentleness and mercy.'} },
    { icon:'⚖️', color:'#4A7A9A', title:{ar:'اعدلْ مع الجميع',en:'Be just with everyone'},
      body:{ar:'أقامَ ابنُ القاسمِ العدلَ بين الناسِ ومنعَ الظلم. العدلُ يجلبُ الأمنَ والمحبّة.',en:'Ibn al-Qasim established justice among people and prevented oppression. Justice brings security and love.'},
      apply:{ar:'أعدلُ مع من حولي ولا أظلمُ أحداً.',en:'I am just with those around me and wrong no one.'} },
    { icon:'🌟', color:'#1A4A6A', title:{ar:'الصِّغَرُ لا يمنعُ العظمة',en:'Youth is no barrier to greatness'},
      body:{ar:'فتحَ ابنُ القاسمِ بلاداً عظيمةً وهو شابٌّ صغير. العمرُ الصغيرُ لا يمنعُ الإنجازَ مع الكفاءة.',en:'Ibn al-Qasim conquered great lands while a young man. A young age is no barrier to achievement with competence.'},
      apply:{ar:'أسعى للإنجازِ ولا أنتظرُ حتى أكبر.',en:'I strive to achieve and don\u2019t wait until I grow older.'} },
    { icon:'🤲', color:'#2A5A7A', title:{ar:'أمِّنِ الناسَ على حقوقِهم',en:'Secure people\u2019s rights'},
      body:{ar:'أمّنَ ابنُ القاسمِ الناسَ على دينِهم وأموالِهم. حفظُ حقوقِ الناسِ من العدلِ والإحسان.',en:'Ibn al-Qasim secured people in their faith and property. Protecting people\u2019s rights is part of justice and excellence.'},
      apply:{ar:'أحترمُ حقوقَ الآخرينَ وأحفظُها.',en:'I respect and protect others\u2019 rights.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ ﴾', ref:{ ar:'النساء ٥٨', en:'An-Nisa 58' } },
    dua:{ ar:'اللّهُمَّ ارزقني العدلَ والرحمةَ وحُسنَ معاملةِ الناس', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أفتحُ القلوبَ بالرفقِ والرحمة.', en:'I win hearts with gentleness and mercy.' },
        { ar:'أعدلُ مع الجميعِ ولا أظلم.', en:'I am just with everyone and wrong no one.' },
        { ar:'أسعى للإنجازِ مهما كان عمري.', en:'I strive to achieve whatever my age.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'أيَّ بلادٍ فتحَ محمدُ بنُ القاسم؟',en:'Which land did Muhammad ibn al-Qasim conquer?'},
          options:[{ar:'بلادَ السند',en:'The land of Sindh'},{ar:'الأندلس',en:'Andalusia'},{ar:'القسطنطينية',en:'Constantinople'}], answer:0 },
        { q:{ar:'كم كان عمرُه حين فتحَ السند؟',en:'How old was he when he conquered Sindh?'},
          options:[{ar:'نحوَ السابعةَ عشرة',en:'About seventeen'},{ar:'ستّون',en:'Sixty'},{ar:'أربعون',en:'Forty'}], answer:0 },
        { q:{ar:'بِمَ فتحَ قلوبَ أهلِ السند؟',en:'By what did he win the hearts of Sindh\u2019s people?'},
          options:[{ar:'العدلِ والرحمةِ وحُسنِ المعاملة',en:'Justice, mercy, and good treatment'},{ar:'الظلمِ والقهر',en:'Oppression and force'},{ar:'المالِ فقط',en:'Money alone'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'فتحَ محمدُ بنُ القاسمِ السندَ شابّاً صغيراً.',en:'Muhammad ibn al-Qasim conquered Sindh while a young man.'}, t:true },
        { statement:{ar:'عاملَ أهلَ السندِ بالعدلِ والرحمة.',en:'He treated Sindh\u2019s people with justice and mercy.'}, t:true },
        { statement:{ar:'ظلمَ الناسَ فكرهوه.',en:'He oppressed the people, so they hated him.'}, t:false },
        { statement:{ar:'دخلَ كثيرٌ من أهلِ السندِ في الإسلامِ طوعاً.',en:'Many people of Sindh entered Islam willingly.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'السند',en:'Sindh'}, b:{ar:'فتحها ابنُ القاسم',en:'Ibn al-Qasim conquered it'} },
        { a:{ar:'العدلُ والرحمة',en:'Justice and mercy'}, b:{ar:'بهما فتحَ القلوب',en:'By them he won hearts'} },
        { a:{ar:'السابعةَ عشرة',en:'Seventeen'}, b:{ar:'عمرُه عند الفتح',en:'His age at the conquest'} },
        { a:{ar:'أهلُ السند',en:'Sindh\u2019s people'}, b:{ar:'أحبّوه وأسلموا',en:'They loved him and embraced Islam'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العدلِ والرحمة', en:'Medal of Justice & Mercy' },
    stickers:[
      { icon:'compass',color:'#2A5A7A', title:{ar:'فاتحُ السند',en:'Conqueror of Sindh'} },
      { icon:'heart', color:'#4A7A9A', title:{ar:'فاتحُ القلوب',en:'Conqueror of Hearts'} },
      { icon:'gem',   color:'#1A4A6A', title:{ar:'القائدُ الشاب',en:'The Young Commander'} },
      { icon:'star',  color:'#2A5A7A', title:{ar:'العادلُ الرحيم',en:'The Just & Merciful'} },
    ],
    moral:{ ar:'محمدُ بنُ القاسمِ قدوةٌ في العدلِ والرحمةِ وحُسنِ القيادة — فتحَ القلوبَ قبلَ البلادِ وهو شابٌّ صغير.',
      en:'Muhammad ibn al-Qasim is a model of justice, mercy, and good leadership — he conquered hearts before lands while a young man.' },
    reflect:[
      { ar:'فتحَ ابنُ القاسمِ القلوبَ بالرحمةِ والعدل. كيف تكسبُ محبّةَ الناسِ بحُسنِ معاملتِك؟', en:'Ibn al-Qasim won hearts with mercy and justice. How do you earn people\u2019s love through good treatment?' },
      { ar:'أنجزَ العظائمَ وهو شاب. ما الذي تستطيعُ إنجازَه الآنَ دون انتظار؟', en:'He achieved great things while young. What can you achieve now without waiting?' },
    ],
  },
};
