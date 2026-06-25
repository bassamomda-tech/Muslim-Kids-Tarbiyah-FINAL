// data/chapters/baybars.js — Leaders · الظاهر بيبرس (full chapter; Story tab uses data/stories/baybars.js)
// Sources: البداية والنهاية · إسلام ويب · الدرر السنية · كتب التاريخ
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.baybars = {
  id:'baybars', era:'heroes', icon:'sword',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الظاهرُ بيبرس', en:'Az-Zahir Baybars' },
  tag:{ ar:'أسدُ المماليك', en:'Lion of the Mamluks' },
  accent:'#3A4A6A', accent2:'#5A6A8A',
  greeting:{ ar:'أهلاً يا بطل! الظاهرُ بيبرس رحمه الله سلطانٌ قويٌّ من المماليك، قاتلَ المغولَ والصليبيين، وقوّى الدولةَ وأقامَ العدل. تعالَ نتعلّمْ من قوّتِه وعزمِه وحُسنِ إدارتِه.',
    en:'Hello, hero! Az-Zahir Baybars, a powerful Mamluk sultan who fought the Mongols and Crusaders, strengthened the state, and established justice. Come, let\'s learn from his strength, resolve, and good governance.' },

  knowledge:{
    didYouKnow:{ ar:'كان بيبرس مملوكاً اشتُريَ صغيراً، ثمّ صارَ بعزمِه وشجاعتِه سلطاناً عظيماً قاتلَ المغولَ والصليبيينَ وانتصرَ عليهم!',
      en:'Baybars was a Mamluk bought as a youth, then through his resolve and courage became a great sultan who fought the Mongols and Crusaders and triumphed over them!' },
    who:{ ar:'هو <b>الظاهرُ بيبرس</b>، من أعظمِ سلاطينِ <b>المماليك</b> في مصرَ والشام. بدأَ حياتَه مملوكاً، لكنّه برزَ بشجاعتِه وذكائِه حتى صارَ سلطاناً. كان له دورٌ بطوليٌّ في معركةِ <b>عينِ جالوت</b> ضدَّ المغول. ولمّا تولّى الحكم، <b>قوّى الدولةَ وجيشَها</b>، وواصلَ جهادَ المغولِ والصليبيين، فحرّرَ كثيراً من المدنِ والحصون. اهتمَّ بـ<b>العدلِ والعمران</b>، فبنى المساجدَ والمدارسَ والقناطرَ والطرق، ونظّمَ البريدَ السريعَ بين المدن. كان <b>قويّاً مهيباً عادلاً</b>، رفعَ شأنَ دولتِه وحمى المسلمينَ من أعدائِهم.',
      en:'He is <b>az-Zahir Baybars</b>, one of the greatest sultans of the <b>Mamluks</b> in Egypt and Sham. He began life as a Mamluk, but stood out through his courage and intelligence until he became sultan. He played a heroic role at the Battle of <b>Ayn Jalut</b> against the Mongols. When he took rule, he <b>strengthened the state and its army</b>, and continued the struggle against the Mongols and Crusaders, liberating many cities and fortresses. He cared for <b>justice and building</b>, constructing mosques, schools, aqueducts, and roads, and organizing a fast postal service between cities. He was <b>powerful, awe-inspiring, and just</b>, raising his state\u2019s standing and protecting the Muslims from their enemies.' },
    facts:[
      { ar:'من أعظمِ سلاطينِ المماليكِ في مصرَ والشام.', en:'One of the greatest Mamluk sultans in Egypt and Sham.' },
      { ar:'بدأَ مملوكاً وصارَ سلطاناً بعزمِه وشجاعتِه.', en:'He began a Mamluk and became sultan by resolve and courage.' },
      { ar:'كان له دورٌ بطوليٌّ في عينِ جالوتَ ضدَّ المغول.', en:'He played a heroic role at Ayn Jalut against the Mongols.' },
      { ar:'قوّى الدولةَ وجاهدَ المغولَ والصليبيين.', en:'He strengthened the state and fought the Mongols and Crusaders.' },
      { ar:'اهتمَّ بالعدلِ والعمرانِ ونظّمَ البريد.', en:'He cared for justice and building and organized the postal service.' },
    ],
    timeline:[
      { when:{ar:'البداية',en:'The Start'}, what:{ar:'بدأَ حياتَه مملوكاً صغيراً.',en:'He began life as a young Mamluk.'} },
      { when:{ar:'عينُ جالوت',en:'Ayn Jalut'}, what:{ar:'كان له دورٌ بطوليٌّ ضدَّ المغول.',en:'He played a heroic role against the Mongols.'} },
      { when:{ar:'السلطنة',en:'The Sultanate'}, what:{ar:'تولّى الحكمَ وقوّى الدولة.',en:'He took rule and strengthened the state.'} },
      { when:{ar:'الجهاد',en:'The Struggle'}, what:{ar:'واصلَ جهادَ المغولِ والصليبيين.',en:'He continued the struggle against Mongols and Crusaders.'} },
      { when:{ar:'العمران',en:'Building'}, what:{ar:'بنى المساجدَ والمدارسَ ونظّمَ البريد.',en:'He built mosques, schools, and organized the post.'} },
    ],
    ayah:{ ar:'﴿ وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ ﴾', ref:{ ar:'الأنفال ٦٠', en:'Al-Anfal 60' } },
  },

  story:[
    { title:{ ar:'أسدُ المماليك', en:'Lion of the Mamluks' },
      pages:[
        { scene:'throne', text:{ ar:'كان <b>الظاهرُ بيبرس</b> سلطاناً قويّاً بدأَ حياتَه مملوكاً ثمّ صارَ من أعظمِ القادة. قاتلَ المغولَ في عينِ جالوتَ والصليبيين، وقوّى الدولةَ وجيشَها، واهتمَّ بالعدلِ والعمران، فحمى المسلمينَ ورفعَ شأنَ دولتِهم.',
          en:'<b>Az-Zahir Baybars</b> was a powerful sultan who began life as a Mamluk then became one of the greatest leaders. He fought the Mongols at Ayn Jalut and the Crusaders, strengthened the state and its army, and cared for justice and building, protecting the Muslims and raising their state\u2019s standing.' } } ] }
  ],

  traits:[
    { ar:'القوّة', en:'Strength' }, { ar:'العزيمة', en:'Resolve' },
    { ar:'العدل', en:'Justice' }, { ar:'حُسنُ الإدارة', en:'Good governance' },
  ],
  lessons:[
    { icon:'💪', color:'#3A4A6A', title:{ar:'ابدأْ صغيراً وارتقِ بعزمِك',en:'Start small and rise by resolve'},
      body:{ar:'بدأَ بيبرس مملوكاً وصارَ سلطاناً بعزمِه. لا تُحقِّرْ بدايتَك، فالعزيمةُ ترفعُ صاحبَها.',en:'Baybars began a Mamluk and became sultan by his resolve. Do not belittle your start; resolve elevates a person.'},
      apply:{ar:'أجتهدُ من حيثُ أنا ولا أحتقرُ بدايتي.',en:'I strive from where I am and never belittle my start.'} },
    { icon:'🛡️', color:'#5A6A8A', title:{ar:'أعِدَّ القوّةَ لحمايةِ الخير',en:'Prepare strength to protect good'},
      body:{ar:'قوّى بيبرس الدولةَ والجيشَ ليحميَ المسلمين. الاستعدادُ بالقوّةِ يردعُ الأعداء.',en:'Baybars strengthened the state and army to protect the Muslims. Preparing strength deters enemies.'},
      apply:{ar:'أستعدُّ وأقوّي نفسي لأحميَ ما أحب.',en:'I prepare and strengthen myself to protect what I love.'} },
    { icon:'🏗️', color:'#2A3A5A', title:{ar:'اجمعِ القوّةَ مع العمران',en:'Join strength with building'},
      body:{ar:'لم يكتفِ بيبرس بالحربِ بل بنى المدارسَ والطرقَ والقناطر. القائدُ الحقُّ يحمي ويبني.',en:'Baybars did not stop at war but built schools, roads, and aqueducts. A true leader protects and builds.'},
      apply:{ar:'أبني وأُعمِّرُ إلى جانبِ حمايةِ ما حولي.',en:'I build and develop alongside protecting what is around me.'} },
    { icon:'⚖️', color:'#3A4A6A', title:{ar:'اعدلْ ونظّمْ أمورَك',en:'Be just and organize your affairs'},
      body:{ar:'أقامَ بيبرس العدلَ ونظّمَ البريدَ وشؤونَ الدولة. التنظيمُ والعدلُ يقوّيانِ كلَّ عمل.',en:'Baybars established justice and organized the post and state affairs. Order and justice strengthen every endeavor.'},
      apply:{ar:'أُنظِّمُ أموري وأعدلُ فيما أتولّاه.',en:'I organize my affairs and am just in what I oversee.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ ﴾', ref:{ ar:'الأنفال ٦٠', en:'Al-Anfal 60' } },
    dua:{ ar:'اللّهُمَّ ارزقني القوّةَ في الحقِّ والعدلَ وحُسنَ التدبير', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أجتهدُ من حيثُ أنا ولا أحتقرُ بدايتي.', en:'I strive from where I am and never belittle my start.' },
        { ar:'أستعدُّ بالقوّةِ لأحميَ الخير.', en:'I prepare with strength to protect good.' },
        { ar:'أبني وأعدلُ وأُنظِّمُ أموري.', en:'I build, am just, and organize my affairs.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من أيِّ طبقةٍ بدأَ بيبرس حياتَه؟',en:'From what class did Baybars begin his life?'},
          options:[{ar:'كان مملوكاً',en:'He was a Mamluk'},{ar:'ملكاً وُلِدَ',en:'A born king'},{ar:'تاجراً',en:'A merchant'}], answer:0 },
        { q:{ar:'أيَّ أعداءٍ قاتلَ بيبرس؟',en:'Which enemies did Baybars fight?'},
          options:[{ar:'المغولَ والصليبيين',en:'The Mongols and Crusaders'},{ar:'المسلمينَ',en:'The Muslims'},{ar:'لا أحد',en:'No one'}], answer:0 },
        { q:{ar:'بماذا اهتمَّ بيبرس غيرَ الحرب؟',en:'What did Baybars care for besides war?'},
          options:[{ar:'العدلِ والعمرانِ وتنظيمِ البريد',en:'Justice, building, and organizing the post'},{ar:'اللهوِ فقط',en:'Amusement only'},{ar:'لا شيء',en:'Nothing'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'بيبرس بدأَ مملوكاً وصارَ سلطاناً.',en:'Baybars began a Mamluk and became sultan.'}, t:true },
        { statement:{ar:'قاتلَ المغولَ والصليبيينَ وقوّى الدولة.',en:'He fought the Mongols and Crusaders and strengthened the state.'}, t:true },
        { statement:{ar:'أهملَ العدلَ والعمران.',en:'He neglected justice and building.'}, t:false },
        { statement:{ar:'نظّمَ البريدَ السريعَ بين المدن.',en:'He organized a fast postal service between cities.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'المماليك',en:'The Mamluks'}, b:{ar:'صارَ من أعظمِ سلاطينِهم',en:'He became one of their greatest sultans'} },
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'}, b:{ar:'كان له دورٌ بطوليٌّ فيها',en:'He had a heroic role in it'} },
        { a:{ar:'البريد',en:'The post'}, b:{ar:'نظّمه بين المدن',en:'He organized it between cities'} },
        { a:{ar:'العمران',en:'Building'}, b:{ar:'بنى المساجدَ والمدارس',en:'He built mosques and schools'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ القوّةِ والعدل', en:'Medal of Strength & Justice' },
    stickers:[
      { icon:'sword', color:'#3A4A6A', title:{ar:'أسدُ المماليك',en:'Lion of the Mamluks'} },
      { icon:'shield',color:'#5A6A8A', title:{ar:'حامي المسلمين',en:'Protector of the Muslims'} },
      { icon:'mosque',color:'#2A3A5A', title:{ar:'باني العمران',en:'Builder of Civilization'} },
      { icon:'star',  color:'#3A4A6A', title:{ar:'السلطانُ العادل',en:'The Just Sultan'} },
    ],
    moral:{ ar:'الظاهرُ بيبرس قدوةٌ في العزيمةِ والقوّةِ والعدل — ارتقى من مملوكٍ إلى سلطانٍ عظيمٍ حمى أمّتَه وبناها.',
      en:'Az-Zahir Baybars is a model of resolve, strength, and justice — he rose from a Mamluk to a great sultan who protected and built his nation.' },
    reflect:[
      { ar:'ارتقى بيبرس من بدايةٍ متواضعةٍ بعزمِه. كيف تجتهدُ لتتقدّمَ من حيثُ أنت؟', en:'Baybars rose from a humble start by his resolve. How do you strive to advance from where you are?' },
      { ar:'جمعَ بين القوّةِ والبناءِ والعدل. كيف توازِنُ بين حمايةِ ما تحبُّ وبنائِه؟', en:'He combined strength, building, and justice. How do you balance protecting what you love with building it?' },
    ],
  },
};
