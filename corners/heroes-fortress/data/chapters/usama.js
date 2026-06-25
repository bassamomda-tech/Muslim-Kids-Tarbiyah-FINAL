// data/chapters/usama.js — Heroes · أسامةُ بنُ زيد (full chapter; Story tab uses data/stories/usama.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.usama = {
  id:'usama', era:'heroes', icon:'shield',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أسامةُ بنُ زيد', en:'Usama ibn Zayd' },
  tag:{ ar:'الحِبُّ ابنُ الحِبِّ والقائدُ الشاب', en:'The beloved son of the beloved; the young commander' },
  accent:'#2E7D9B', accent2:'#4C9DBB',
  greeting:{ ar:'أهلاً يا بطل! أسامةُ بنُ زيدٍ رضي الله عنه الحِبُّ ابنُ الحِبِّ، أحبَّه النبيُّ ﷺ حبّاً عظيماً، وأمّره على جيشٍ كبيرٍ وهو شابٌّ صغير. تعالَ نتعلّمْ من مكانتِه وصدقِه.',
    en:'Hello, hero! Usama ibn Zayd, the beloved son of the beloved, whom the Prophet ﷺ loved dearly and appointed over a great army while still a young man. Come, let\'s learn from his standing and his honesty.' },

  knowledge:{
    didYouKnow:{ ar:'أمّر النبيُّ ﷺ أسامةَ على جيشٍ كبيرٍ فيه كبارُ الصحابةِ وهو ابنُ نحوِ ثمانيَ عشرةَ سنة — ثقةً بقدرتِه.',
      en:'The Prophet ﷺ appointed Usama over a great army that included senior companions, while he was around eighteen — trusting his ability.' },
    who:{ ar:'هو <b>أسامةُ بنُ زيدِ بنِ حارثة</b>، ابنُ حِبِّ رسولِ الله ﷺ. أحبَّه النبيُّ ﷺ حبّاً شديداً كما أحبَّ أباه، فكان يُسمّى <b>«الحِبَّ ابنَ الحِبِّ»</b>. نشأَ في بيتِ النبوّةِ محبوباً. ولّاه النبيُّ ﷺ قيادةَ <b>جيشٍ كبيرٍ لغزوِ الروم</b> وهو شابٌّ صغير، وفيه كبارُ المهاجرينَ والأنصار. مرِضَ النبيُّ ﷺ قبلَ خروجِ الجيش، فأنفذه أبو بكرٍ بعدَ وفاتِه ﷺ. عُرِفَ أسامةُ بالصدقِ والورعِ بعدَ موقفٍ علّمه إيّاه النبيُّ ﷺ.',
      en:'He is <b>Usama ibn Zayd ibn Haritha</b>, son of the Prophet\'s ﷺ beloved. The Prophet ﷺ loved him dearly as he loved his father, so he was called <b>"the beloved son of the beloved."</b> He grew up in the household of prophethood, much loved. The Prophet ﷺ appointed him to command a <b>great army to fight the Romans</b> while still young, including senior Muhajirun and Ansar. The Prophet ﷺ fell ill before the army set out, so Abu Bakr dispatched it after his ﷺ passing. Usama was known for honesty and scrupulousness after a lesson the Prophet ﷺ taught him.' },
    facts:[
      { ar:'الحِبُّ ابنُ الحِبِّ — أحبَّه النبيُّ ﷺ وأباه.', en:'The beloved son of the beloved — loved by the Prophet ﷺ as his father was.' },
      { ar:'أمّره النبيُّ ﷺ على جيشٍ كبيرٍ وهو شاب.', en:'The Prophet ﷺ made him commander of a great army while young.' },
      { ar:'في جيشِه كبارُ المهاجرينَ والأنصار.', en:'His army included senior Muhajirun and Ansar.' },
      { ar:'علّمه النبيُّ ﷺ ألّا يحكمَ على القلوب.', en:'The Prophet ﷺ taught him not to judge what is in hearts.' },
      { ar:'أنفذ أبو بكرٍ جيشَه بعدَ وفاةِ النبيِّ ﷺ.', en:'Abu Bakr dispatched his army after the Prophet\'s ﷺ passing.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ في بيتِ النبوّةِ محبوباً.',en:'He grew up beloved in the household of prophethood.'} },
      { when:{ar:'المحبّة',en:'The Love'}, what:{ar:'أحبَّه النبيُّ ﷺ كما أحبَّ أباه.',en:'The Prophet ﷺ loved him as he loved his father.'} },
      { when:{ar:'الدرس',en:'The Lesson'}, what:{ar:'علّمه النبيُّ ﷺ ألّا يحكمَ على النيّات.',en:'The Prophet ﷺ taught him not to judge intentions.'} },
      { when:{ar:'القيادة',en:'Command'}, what:{ar:'أمّره النبيُّ ﷺ على جيشِ الرومِ شابّاً.',en:'The Prophet ﷺ made him commander of the Roman expedition.'} },
      { when:{ar:'الإنفاذ',en:'Dispatch'}, what:{ar:'أنفذ أبو بكرٍ جيشَه بعدَ النبيِّ ﷺ.',en:'Abu Bakr sent out his army after the Prophet ﷺ.'} },
    ],
    ayah:{ ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا ضَرَبْتُمْ فِي سَبِيلِ اللَّهِ فَتَبَيَّنُوا ﴾', ref:{ ar:'النساء ٩٤', en:'An-Nisa 94' } },
  },

  story:[
    { title:{ ar:'الحِبُّ ابنُ الحِبِّ', en:'The Beloved Son of the Beloved' },
      pages:[
        { scene:'madinah', text:{ ar:'كان <b>أسامةُ بنُ زيد</b> الحِبَّ ابنَ الحِبِّ، أحبَّه النبيُّ ﷺ حبّاً عظيماً. أمّره على جيشٍ كبيرٍ وهو شابٌّ صغير، وعلّمه ألّا يحكمَ على ما في القلوب. كان قدوةً في الصدقِ والورع.',
          en:'<b>Usama ibn Zayd</b> was the beloved son of the beloved, whom the Prophet ﷺ loved greatly. He appointed him over a great army while still young, and taught him not to judge what is in hearts. He was a model of honesty and scrupulousness.' } } ] }
  ],

  traits:[
    { ar:'الصدق', en:'Honesty' }, { ar:'الورع', en:'Scrupulousness' },
    { ar:'القيادة', en:'Leadership' }, { ar:'التواضع', en:'Humility' },
  ],
  lessons:[
    { icon:'💙', color:'#2E7D9B', title:{ar:'القيمةُ بالكفاءةِ لا بالسن',en:'Worth is by ability, not age'},
      body:{ar:'أمّر النبيُّ ﷺ أسامةَ شابّاً صغيراً لأنّه كفءٌ أمين. الشابُّ الكفءُ يستحقُّ الثقة.',en:'The Prophet ﷺ made young Usama a commander because he was capable and trustworthy. A capable youth deserves trust.'},
      apply:{ar:'أُتقِنُ عملي لأكونَ أهلاً للثقة.',en:'I do my work well to be worthy of trust.'} },
    { icon:'🫧', color:'#4C9DBB', title:{ar:'لا تحكمْ على القلوب',en:'Don\'t judge what is in hearts'},
      body:{ar:'علّمه النبيُّ ﷺ ألّا يحكمَ على نيّةِ من قال «لا إله إلّا الله». الظاهرُ لنا والقلوبُ لله.',en:'The Prophet ﷺ taught him not to judge the intention of one who said "There is no god but Allah." The outward is ours to see; hearts belong to Allah.'},
      apply:{ar:'أُحسِنُ الظنَّ ولا أحكمُ على نوايا الناس.',en:'I think well of others and don\'t judge their intentions.'} },
    { icon:'🤝', color:'#246585', title:{ar:'تواضعْ مع المكانة',en:'Be humble despite your rank'},
      body:{ar:'مع حبِّ النبيِّ ﷺ له ومكانتِه بقيَ أسامةُ متواضعاً مطيعاً. المكانةُ لا تُنسيك التواضع.',en:'Despite the Prophet\'s ﷺ love and his high standing, Usama stayed humble and obedient. Status should not make you forget humility.'},
      apply:{ar:'أبقى متواضعاً مهما عَلَتْ مكانتي.',en:'I stay humble no matter how high my standing.'} },
    { icon:'🛡️', color:'#2E7D9B', title:{ar:'تحمّلِ المسؤولية',en:'Carry responsibility'},
      body:{ar:'قادَ أسامةُ جيشاً عظيماً وأدّى المهمّةَ بأمانة. البطلُ يتحمّلُ ما يُوكَلُ إليه بجدّ.',en:'Usama led a great army and fulfilled the mission faithfully. A hero carries what is entrusted to him with diligence.'},
      apply:{ar:'أتحمّلُ مسؤوليّتي وأؤدّيها بأمانة.',en:'I carry my responsibility and fulfill it faithfully.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا ضَرَبْتُمْ فِي سَبِيلِ اللَّهِ فَتَبَيَّنُوا ﴾', ref:{ ar:'النساء ٩٤', en:'An-Nisa 94' } },
    dua:{ ar:'اللّهُمَّ ارزقني صدقاً وورعاً وأمانةً في كلِّ ما تُوكِلُه إليّ', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُتقِنُ عملي لأكونَ أهلاً للثقة.', en:'I do my work well to be worthy of trust.' },
        { ar:'أُحسِنُ الظنَّ ولا أحكمُ على القلوب.', en:'I think well and do not judge hearts.' },
        { ar:'أتحمّلُ مسؤوليّتي بتواضعٍ وأمانة.', en:'I carry my responsibility with humility and trust.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ أسامة؟',en:'What was Usama known as?'},
          options:[{ar:'الحِبُّ ابنُ الحِبِّ',en:'The beloved son of the beloved'},{ar:'سيفُ الله',en:'The sword of Allah'},{ar:'أمينُ الأمّة',en:'The trustee of the nation'}], answer:0 },
        { q:{ar:'على ماذا أمّره النبيُّ ﷺ وهو شاب؟',en:'What did the Prophet ﷺ put young Usama in charge of?'},
          options:[{ar:'قيادةِ جيشٍ كبير',en:'Command of a great army'},{ar:'بيتِ المال',en:'The treasury'},{ar:'السوق',en:'The market'}], answer:0 },
        { q:{ar:'بِمَ علّمه النبيُّ ﷺ بعدَ أن قتلَ من قال «لا إله إلّا الله»؟',en:'What did the Prophet ﷺ teach him after he killed a man who said the shahada?'},
          options:[{ar:'ألّا يحكمَ على ما في القلوب',en:'Not to judge what is in hearts'},{ar:'أن يقاتلَ أكثر',en:'To fight more'},{ar:'أن يطلبَ المال',en:'To seek wealth'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أسامةُ هو الحِبُّ ابنُ الحِبِّ.',en:'Usama is the beloved son of the beloved.'}, t:true },
        { statement:{ar:'أمّره النبيُّ ﷺ على جيشٍ وهو شاب.',en:'The Prophet ﷺ made him a commander while young.'}, t:true },
        { statement:{ar:'علّمه النبيُّ ﷺ أن يحكمَ على نيّاتِ الناس.',en:'The Prophet ﷺ taught him to judge people\'s intentions.'}, t:false },
        { statement:{ar:'أنفذ أبو بكرٍ جيشَه بعدَ النبيِّ ﷺ.',en:'Abu Bakr dispatched his army after the Prophet ﷺ.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الحِبُّ ابنُ الحِبِّ',en:'Beloved son of the beloved'}, b:{ar:'لقبُ أسامة',en:'Usama\'s title'} },
        { a:{ar:'جيشُ أسامة',en:'Usama\'s army'}, b:{ar:'أنفذه أبو بكر',en:'Abu Bakr dispatched it'} },
        { a:{ar:'القلوب',en:'Hearts'}, b:{ar:'لله لا نحكمُ عليها',en:'For Allah; we don\'t judge them'} },
        { a:{ar:'القيادة',en:'Command'}, b:{ar:'بالكفاءةِ لا بالسن',en:'By ability, not age'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الثقةِ والورع', en:'Medal of Trust & Scruple' },
    stickers:[
      { icon:'heart',  color:'#2E7D9B', title:{ar:'الحِبُّ ابنُ الحِبِّ',en:'Beloved Son of the Beloved'} },
      { icon:'shield', color:'#4C9DBB', title:{ar:'القائدُ الشاب',en:'The Young Commander'} },
      { icon:'light',  color:'#246585', title:{ar:'القلوبُ لله',en:'Hearts Belong to Allah'} },
      { icon:'star',   color:'#2E7D9B', title:{ar:'الأمينُ المتواضع',en:'The Humble & Trustworthy'} },
    ],
    moral:{ ar:'أسامةُ قدوةٌ في الصدقِ والورعِ والمسؤولية — أهّلته كفاءتُه للقيادةِ وهو شاب.',
      en:'Usama is a model of honesty, scrupulousness, and responsibility — his ability qualified him to lead while young.' },
    reflect:[
      { ar:'أمّره النبيُّ ﷺ شابّاً لكفاءتِه. كيف تُثبِتُ أنّك أهلٌ للثقة؟', en:'The Prophet ﷺ made him a young commander for his ability. How do you prove you are worthy of trust?' },
      { ar:'علّمه ألّا يحكمَ على القلوب. هل تُحسِنُ الظنَّ بالناس؟', en:'He was taught not to judge hearts. Do you think well of people?' },
    ],
  },
};
