// data/chapters/abudawud.js — Scholars · الإمام أبو داود (full chapter; Story tab uses data/stories/abudawud.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.abudawud = {
  id:'abudawud', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ أبو داود', en:'Abu Dawud' },
  tag:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
  accent:'#5A4A1A', accent2:'#7A6A3A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ أبو داودَ رحمه الله من أئمّةِ الحديث، جمعَ أحاديثَ الأحكامِ في كتابِ «السنن»، وعُرِفَ بحرصِه على ما ينفعُ المسلمينَ في دينِهم. تعالَ نتعلّمْ من علمِه وحُسنِ اختيارِه.',
    en:'Hello, hero! Imam Abu Dawud, one of the imams of hadith, who gathered the hadiths of legal rulings in "the Sunan," known for his care for what benefits Muslims in their religion. Come, let\'s learn from his knowledge and fine selection.' },

  knowledge:{
    didYouKnow:{ ar:'جمعَ أبو داودَ في «سننِه» الأحاديثَ التي يحتاجُها المسلمونَ في أحكامِ دينِهم، وانتقاها من نحوِ خمسِ مئةِ ألفِ حديثٍ يحفظُها!',
      en:'Abu Dawud gathered in his "Sunan" the hadiths Muslims need for the rulings of their religion, selecting them from about five hundred thousand hadiths he memorized!' },
    who:{ ar:'هو <b>سليمانُ بنُ الأشعثِ السِّجِستاني</b>، المعروفُ بـ<b>أبي داود</b>، أحدُ أئمّةِ الحديثِ الكبار، وصاحبُ كتابِ <b>«السنن»</b> الذي هو أحدُ <b>الكتبِ الستّة</b>. رحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرة، وحفظَ مئاتِ الآلافِ من الأحاديث. تميّزَ كتابُه بأنّه جمعَ فيه خصوصاً <b>أحاديثَ الأحكام</b> — أي الأحاديثَ التي يحتاجُها المسلمُ ليعرفَ كيف يُصلّي ويصومُ ويتعاملُ في حياتِه. كان <b>عالماً عابداً ورِعاً</b>، حريصاً على نفعِ الناسِ بما يحتاجونه من دينِهم. قضى حياتَه في خدمةِ سنّةِ النبيِّ ﷺ وتقريبِها للناس.',
      en:'He is <b>Sulayman ibn al-Ash\u2019ath as-Sijistani</b>, known as <b>Abu Dawud</b>, one of the great imams of hadith and author of the book <b>"the Sunan,"</b> one of the <b>six books</b>. He traveled to many lands seeking hadith and memorized hundreds of thousands of hadiths. His book was distinguished in that he gathered in it especially the <b>hadiths of legal rulings</b> — the hadiths a Muslim needs to know how to pray, fast, and conduct his life. He was a <b>devout, scrupulous scholar</b>, keen to benefit people with what they need of their religion. He spent his life serving the Prophet\u2019s ﷺ Sunnah and bringing it closer to people.' },
    facts:[
      { ar:'أحدُ أئمّةِ الحديثِ وصاحبُ «السنن».', en:'One of the imams of hadith and author of "the Sunan."' },
      { ar:'كتابُه أحدُ الكتبِ الستّةِ المعتمدة.', en:'His book is one of the six accepted books.' },
      { ar:'جمعَ خصوصاً أحاديثَ الأحكامِ التي يحتاجُها المسلم.', en:'He gathered especially the hadiths of rulings that a Muslim needs.' },
      { ar:'انتقى سننَه من مئاتِ الآلافِ من الأحاديث.', en:'He selected his Sunan from hundreds of thousands of hadiths.' },
      { ar:'عالمٌ عابدٌ ورِعٌ حريصٌ على نفعِ الناس.', en:'A devout, scrupulous scholar keen to benefit people.' },
    ],
    timeline:[
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ في طلبِ الحديثِ بلداناً كثيرة.',en:'He traveled to many lands seeking hadith.'} },
      { when:{ar:'الحفظ',en:'Memorization'}, what:{ar:'حفظَ مئاتِ الآلافِ من الأحاديث.',en:'He memorized hundreds of thousands of hadiths.'} },
      { when:{ar:'الانتقاء',en:'Selection'}, what:{ar:'انتقى أحاديثَ الأحكامِ بعناية.',en:'He carefully selected the hadiths of rulings.'} },
      { when:{ar:'السنن',en:'The Sunan'}, what:{ar:'ألّفَ «السنن» أحدَ الكتبِ الستّة.',en:'He authored "the Sunan," one of the six books.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'صارَ كتابُه مرجعاً في أحكامِ الدين.',en:'His book became a reference in the rulings of the religion.'} },
    ],
    ayah:{ ar:'﴿ فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ ﴾', ref:{ ar:'النحل ٤٣', en:'An-Nahl 43' } },
  },

  story:[
    { title:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ أبو داود</b> من أئمّةِ الحديثِ الكبار، صاحبَ كتابِ «السنن» أحدِ الكتبِ الستّة. جمعَ فيه أحاديثَ الأحكامِ التي يحتاجُها المسلمُ في دينِه، وانتقاها من مئاتِ الآلافِ بعناية. كان عالماً عابداً ورِعاً حريصاً على نفعِ الناس.',
          en:'<b>Imam Abu Dawud</b> was one of the great imams of hadith, author of "the Sunan," one of the six books. In it he gathered the hadiths of rulings a Muslim needs for his religion, carefully selecting them from hundreds of thousands. He was a devout, scrupulous scholar keen to benefit people.' } } ] }
  ],

  traits:[
    { ar:'العلم', en:'Knowledge' }, { ar:'حُسنُ الاختيار', en:'Fine selection' },
    { ar:'الورع', en:'Scrupulousness' }, { ar:'نفعُ الناس', en:'Benefiting people' },
  ],
  lessons:[
    { icon:'🎯', color:'#5A4A1A', title:{ar:'اختَرِ النافعَ من العلم',en:'Select what is beneficial in knowledge'},
      body:{ar:'انتقى أبو داودَ أحاديثَ الأحكامِ التي يحتاجُها الناس. اختيارُ النافعِ من العلمِ حكمة.',en:'Abu Dawud selected the hadiths of rulings people need. Choosing what is beneficial in knowledge is wisdom.'},
      apply:{ar:'أركّزُ على تعلّمِ ما ينفعُني في حياتي.',en:'I focus on learning what benefits me in my life.'} },
    { icon:'🤝', color:'#7A6A3A', title:{ar:'اعملْ لنفعِ الناس',en:'Work to benefit people'},
      body:{ar:'حرصَ أبو داودَ على جمعِ ما ينفعُ المسلمينَ في دينِهم. خيرُ العملِ ما نفعَ الناس.',en:'Abu Dawud was keen to gather what benefits Muslims in their religion. The best work is what benefits people.'},
      apply:{ar:'أسعى أن يكونَ عملي نافعاً لغيري.',en:'I strive for my work to benefit others.'} },
    { icon:'🔍', color:'#4A3A0A', title:{ar:'تثبّتْ وانتقِ بعناية',en:'Verify and select carefully'},
      body:{ar:'انتقى أبو داودَ سننَه من مئاتِ الآلافِ بعنايةٍ ودقّة. الانتقاءُ الدقيقُ يرفعُ جودةَ العمل.',en:'Abu Dawud selected his Sunan from hundreds of thousands carefully and precisely. Careful selection raises the quality of work.'},
      apply:{ar:'أنتقي بعنايةٍ ما أتعلّمُه وأنقلُه.',en:'I carefully select what I learn and transmit.'} },
    { icon:'🌿', color:'#5A4A1A', title:{ar:'اجمعْ العلمَ مع العبادة',en:'Combine knowledge with worship'},
      body:{ar:'كان أبو داودَ عابداً ورِعاً مع علمِه الواسع. العلمُ مع التقوى نورٌ ينفعُ صاحبَه والناس.',en:'Abu Dawud was a devout, scrupulous worshipper alongside his vast knowledge. Knowledge with piety is a light benefiting its owner and people.'},
      apply:{ar:'أجمعُ بين تعلّمي وتقواي.',en:'I combine my learning with my piety.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ ﴾', ref:{ ar:'النحل ٤٣', en:'An-Nahl 43' } },
    dua:{ ar:'اللّهُمَّ علّمني ما ينفعُني وانفعني بما علّمتني', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أركّزُ على تعلّمِ ما ينفعُني.', en:'I focus on learning what benefits me.' },
        { ar:'أسعى أن يكونَ عملي نافعاً لغيري.', en:'I strive for my work to benefit others.' },
        { ar:'أنتقي بعنايةٍ وأجمعُ العلمَ مع التقوى.', en:'I select carefully and combine knowledge with piety.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما الكتابُ الذي ألّفه أبو داود؟',en:'What book did Abu Dawud author?'},
          options:[{ar:'السنن',en:'The Sunan'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'أيَّ نوعٍ من الأحاديثِ جمعَ خصوصاً؟',en:'What kind of hadiths did he gather especially?'},
          options:[{ar:'أحاديثَ الأحكامِ التي يحتاجُها المسلم',en:'The hadiths of rulings a Muslim needs'},{ar:'أحاديثَ ضعيفة',en:'Weak hadiths'},{ar:'قصصاً',en:'Stories'}], answer:0 },
        { q:{ar:'بأيِّ صفةٍ عُرِفَ أبو داود؟',en:'What was Abu Dawud known for?'},
          options:[{ar:'العلمِ والورعِ ونفعِ الناس',en:'Knowledge, scrupulousness, and benefiting people'},{ar:'حبِّ المال',en:'Love of wealth'},{ar:'الكسل',en:'Laziness'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أبو داودَ صاحبُ كتابِ «السنن».',en:'Abu Dawud was the author of "the Sunan."'}, t:true },
        { statement:{ar:'جمعَ أحاديثَ الأحكامِ التي ينفعُ الناسَ معرفتُها.',en:'He gathered the hadiths of rulings people benefit from knowing.'}, t:true },
        { statement:{ar:'كان يجمعُ كلَّ حديثٍ بلا انتقاء.',en:'He gathered every hadith without selection.'}, t:false },
        { statement:{ar:'كان عالماً عابداً ورِعاً.',en:'He was a devout, scrupulous scholar.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'السنن',en:'The Sunan'}, b:{ar:'كتابُه في الحديث',en:'His book of hadith'} },
        { a:{ar:'أحاديثُ الأحكام',en:'Hadiths of rulings'}, b:{ar:'ما جمعه خصوصاً',en:'What he gathered especially'} },
        { a:{ar:'الكتبُ الستّة',en:'The six books'}, b:{ar:'كتابُه أحدُها',en:'His book is one of them'} },
        { a:{ar:'نفعُ الناس',en:'Benefiting people'}, b:{ar:'هدفُه من جمعِه',en:'His goal in compiling'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ النافع', en:'Medal of Beneficial Knowledge' },
    stickers:[
      { icon:'book',  color:'#5A4A1A', title:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
      { icon:'gem',   color:'#7A6A3A', title:{ar:'جامعُ الأحكام',en:'Compiler of Rulings'} },
      { icon:'mosque',color:'#4A3A0A', title:{ar:'العالمُ العابد',en:'The Devout Scholar'} },
      { icon:'star',  color:'#5A4A1A', title:{ar:'الحريصُ على النفع',en:'Keen to Benefit'} },
    ],
    moral:{ ar:'الإمامُ أبو داودَ قدوةٌ في العلمِ وحُسنِ الاختيارِ ونفعِ الناس — جمعَ ما يحتاجُه المسلمُ في دينِه بعنايةٍ وإخلاص.',
      en:'Imam Abu Dawud is a model of knowledge, fine selection, and benefiting people — he gathered what a Muslim needs for his religion with care and sincerity.' },
    reflect:[
      { ar:'انتقى أبو داودَ ما ينفعُ الناسَ في دينِهم. كيف تختارُ العلمَ النافعَ في حياتِك؟', en:'Abu Dawud selected what benefits people in their religion. How do you choose beneficial knowledge in your life?' },
      { ar:'عملَ ليُسهِّلَ على الناسِ دينَهم. كيف تجعلُ عملَك نافعاً لغيرِك؟', en:'He worked to make their religion easier for people. How do you make your work beneficial to others?' },
    ],
  },
};
