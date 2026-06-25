// data/chapters/mehmed.js — Leaders · محمدٌ الفاتح (full chapter; Story tab uses data/stories/mehmed.js)
// Sources: البداية والنهاية · إسلام ويب · الدرر السنية · كتب التاريخ العثماني
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.mehmed = {
  id:'mehmed', era:'heroes', icon:'crown',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'محمدٌ الفاتح', en:'Mehmed the Conqueror' },
  tag:{ ar:'فاتحُ القسطنطينية', en:'Conqueror of Constantinople' },
  accent:'#1E6E5A', accent2:'#3E8E7A',
  greeting:{ ar:'أهلاً يا بطل! محمدٌ الفاتحُ رحمه الله سلطانٌ عثمانيٌّ شابٌّ فتحَ القسطنطينيةَ وحقّقَ بشارةَ النبيِّ ﷺ بعدَ ثمانِ مئةِ سنة! تعالَ نتعلّمْ من عزيمتِه وإيمانِه.',
    en:'Hello, hero! Mehmed the Conqueror, a young Ottoman sultan who conquered Constantinople and fulfilled the Prophet\u2019s ﷺ glad tiding after eight hundred years! Come, let\'s learn from his resolve and faith.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ: «لتُفتَحنَّ القسطنطينيةُ، فلنِعمَ الأميرُ أميرُها، ولنِعمَ الجيشُ ذلك الجيش» — فكان محمدٌ الفاتحُ ذلك الأمير!',
      en:'The Prophet ﷺ said: "Constantinople will surely be conquered; what an excellent commander its commander, and what an excellent army that army" — and Mehmed the Conqueror was that commander!' },
    who:{ ar:'هو <b>محمدُ بنُ مراد</b>، السلطانُ العثمانيُّ السابع، المعروفُ بـ<b>محمدٍ الفاتح</b>. تولّى الحكمَ شابّاً، وكان <b>عالماً يُتقِنُ عدّةَ لغاتٍ</b> ومحبّاً للعلمِ والعلماء. حقّقَ حلمَ المسلمينَ منذ ثمانِ مئةِ سنةٍ بـ<b>فتحِ القسطنطينية</b> (إسطنبول) سنةَ ٨٥٧هـ وهو في الثالثةِ والعشرين! استعدَّ بإعدادٍ عظيمٍ، وصنعَ مدافعَ ضخمة، ونقلَ سفنَه فوقَ الجبالِ بحيلةٍ عبقرية. كان <b>قويَّ العزيمةِ عظيمَ الإيمان</b>، فحقّقَ بشارةَ النبيِّ ﷺ ودخلَ التاريخَ فاتحاً عظيماً.',
      en:'He is <b>Mehmed son of Murad</b>, the seventh Ottoman sultan, known as <b>Mehmed the Conqueror</b>. He took rule young and was a <b>scholar fluent in several languages</b> who loved knowledge and scholars. He fulfilled the Muslims\u2019 dream of eight hundred years by <b>conquering Constantinople</b> (Istanbul) in 857 AH at the age of twenty-three! He prepared magnificently, built huge cannons, and moved his ships over the mountains by a brilliant stratagem. He was <b>of strong resolve and great faith</b>, fulfilling the Prophet\u2019s ﷺ glad tiding and entering history as a great conqueror.' },
    facts:[
      { ar:'سلطانٌ عثمانيٌّ فتحَ القسطنطينيةَ وعمرُه ٢٣.', en:'An Ottoman sultan who conquered Constantinople at age 23.' },
      { ar:'حقّقَ بشارةَ النبيِّ ﷺ بفتحِها.', en:'He fulfilled the Prophet\u2019s ﷺ glad tiding of its conquest.' },
      { ar:'عالمٌ يُتقِنُ عدّةَ لغاتٍ ويُحِبُّ العلم.', en:'A scholar fluent in several languages who loved knowledge.' },
      { ar:'نقلَ سفنَه فوقَ الجبالِ بحيلةٍ عبقرية.', en:'He moved his ships over the mountains by a brilliant stratagem.' },
      { ar:'قويُّ العزيمةِ عظيمُ الإيمانِ والاستعداد.', en:'Of strong resolve, great faith, and preparation.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ عالماً يُتقِنُ اللغاتِ محبّاً للعلم.',en:'He grew up a scholar fluent in languages, loving knowledge.'} },
      { when:{ar:'الحكم',en:'Rule'}, what:{ar:'تولّى السلطنةَ شابّاً صغيراً.',en:'He took the sultanate at a young age.'} },
      { when:{ar:'الاستعداد',en:'Preparation'}, what:{ar:'أعدَّ جيشاً عظيماً ومدافعَ ضخمة.',en:'He prepared a great army and huge cannons.'} },
      { when:{ar:'الحيلة',en:'The Stratagem'}, what:{ar:'نقلَ السفنَ فوقَ الجبالِ ليلاً.',en:'He moved the ships over the mountains by night.'} },
      { when:{ar:'الفتح',en:'The Conquest'}, what:{ar:'فتحَ القسطنطينيةَ فحقّقَ البشارة.',en:'He conquered Constantinople, fulfilling the tiding.'} },
    ],
    ayah:{ ar:'﴿ وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ ﴾', ref:{ ar:'الروم ٤٧', en:'Ar-Rum 47' } },
  },

  story:[
    { title:{ ar:'فاتحُ القسطنطينية', en:'Conqueror of Constantinople' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>محمدٌ الفاتح</b> سلطاناً عثمانيّاً شابّاً عالماً قويَّ العزيمة. حقّقَ بشارةَ النبيِّ ﷺ بفتحِ القسطنطينيةَ وعمرُه ٢٣ سنة، بعدَ استعدادٍ عظيمٍ وحيلةٍ عبقريّةٍ بنقلِ السفنِ فوقَ الجبال. دخلَ التاريخَ فاتحاً عظيماً.',
          en:'<b>Mehmed the Conqueror</b> was a young, scholarly Ottoman sultan of strong resolve. He fulfilled the Prophet\u2019s ﷺ glad tiding by conquering Constantinople at age 23, after magnificent preparation and a brilliant stratagem of moving ships over the mountains. He entered history as a great conqueror.' } } ] }
  ],

  traits:[
    { ar:'العزيمة', en:'Resolve' }, { ar:'الإيمان', en:'Faith' },
    { ar:'العلم', en:'Knowledge' }, { ar:'الإبداع', en:'Ingenuity' },
  ],
  lessons:[
    { icon:'🎯', color:'#1E6E5A', title:{ar:'علِّ همّتَك',en:'Raise your ambition high'},
      body:{ar:'حلمَ محمدٌ الفاتحُ بفتحِ القسطنطينيةِ منذ صِغَرِه فحقّقه. الهمّةُ العاليةُ تصنعُ الإنجازاتِ العظيمة.',en:'Mehmed dreamed of conquering Constantinople from his youth and achieved it. High ambition builds great achievements.'},
      apply:{ar:'أرفعُ همّتي وأسعى للأهدافِ العظيمة.',en:'I raise my ambition and pursue great goals.'} },
    { icon:'🛠️', color:'#3E8E7A', title:{ar:'استعدَّ وأبدِعْ',en:'Prepare and innovate'},
      body:{ar:'أعدَّ الفاتحُ جيشَه ونقلَ سفنَه فوقَ الجبالِ بحيلةٍ عبقرية. النجاحُ يحتاجُ إعداداً وإبداعاً.',en:'The Conqueror prepared his army and moved his ships over the mountains by a brilliant stratagem. Success needs preparation and innovation.'},
      apply:{ar:'أستعدُّ جيّداً وأُفكِّرُ بطرقٍ مبتكرة.',en:'I prepare well and think of creative ways.'} },
    { icon:'📖', color:'#155E4A', title:{ar:'اجمعْ بين العلمِ والعمل',en:'Combine knowledge and action'},
      body:{ar:'كان الفاتحُ عالماً يُتقِنُ اللغاتِ وقائداً مجاهداً. العلمُ مع العملِ يصنعُ القائدَ العظيم.',en:'The Conqueror was a scholar fluent in languages and a campaigning leader. Knowledge with action makes a great leader.'},
      apply:{ar:'أتعلّمُ وأعملُ بما أتعلّم.',en:'I learn and act on what I learn.'} },
    { icon:'🤲', color:'#1E6E5A', title:{ar:'ثِقْ بنصرِ الله',en:'Trust in Allah\u2019s help'},
      body:{ar:'وثِقَ الفاتحُ ببشارةِ النبيِّ ﷺ ونصرِ الله، فتحقّقَ ما وعدَ به. مَن أخلصَ وعملَ نصرَه الله.',en:'The Conqueror trusted the Prophet\u2019s ﷺ tiding and Allah\u2019s help, so what was promised came true. Whoever is sincere and acts, Allah supports him.'},
      apply:{ar:'أعملُ بجدٍّ وأثقُ بنصرِ الله.',en:'I work hard and trust in Allah\u2019s help.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ ﴾', ref:{ ar:'الروم ٤٧', en:'Ar-Rum 47' } },
    dua:{ ar:'اللّهُمَّ ارزقني همّةً عاليةً وعزيمةً صادقةً ونصراً منك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أرفعُ همّتي وأسعى للأهدافِ العظيمة.', en:'I raise my ambition and pursue great goals.' },
        { ar:'أستعدُّ جيّداً وأُفكِّرُ بإبداع.', en:'I prepare well and think creatively.' },
        { ar:'أعملُ بجدٍّ وأثقُ بنصرِ الله.', en:'I work hard and trust in Allah\u2019s help.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا فتحَ محمدٌ الفاتح؟',en:'What did Mehmed the Conqueror conquer?'},
          options:[{ar:'القسطنطينية',en:'Constantinople'},{ar:'الأندلس',en:'Andalusia'},{ar:'مصر',en:'Egypt'}], answer:0 },
        { q:{ar:'بشارةُ مَن حقّقها بفتحِها؟',en:'Whose glad tiding did he fulfill by conquering it?'},
          options:[{ar:'النبيِّ ﷺ',en:'The Prophet ﷺ'},{ar:'الملوك',en:'The kings'},{ar:'الفلاسفة',en:'The philosophers'}], answer:0 },
        { q:{ar:'بأيِّ حيلةٍ عبقريّةٍ فاجأَ أعداءه؟',en:'By what brilliant stratagem did he surprise his enemies?'},
          options:[{ar:'نقلَ السفنَ فوقَ الجبال',en:'He moved ships over the mountains'},{ar:'حفرَ نفقاً',en:'He dug a tunnel'},{ar:'انتظرَ سنوات',en:'He waited years'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'محمدٌ الفاتحُ فتحَ القسطنطينيةَ شابّاً.',en:'Mehmed conquered Constantinople while young.'}, t:true },
        { statement:{ar:'حقّقَ بشارةَ النبيِّ ﷺ.',en:'He fulfilled the Prophet\u2019s ﷺ glad tiding.'}, t:true },
        { statement:{ar:'كان جاهلاً يكرهُ العلم.',en:'He was ignorant and hated knowledge.'}, t:false },
        { statement:{ar:'نقلَ سفنَه فوقَ الجبالِ بحيلة.',en:'He moved his ships over the mountains by a stratagem.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'القسطنطينية',en:'Constantinople'}, b:{ar:'فتحها الفاتح',en:'The Conqueror took it'} },
        { a:{ar:'بشارةُ النبيِّ ﷺ',en:'The Prophet\u2019s ﷺ tiding'}, b:{ar:'حقّقها بالفتح',en:'He fulfilled it by the conquest'} },
        { a:{ar:'السفن',en:'The ships'}, b:{ar:'نقلها فوقَ الجبال',en:'He moved them over the mountains'} },
        { a:{ar:'العلم',en:'Knowledge'}, b:{ar:'كان عالماً يُتقِنُ اللغات',en:'He was a scholar fluent in languages'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفتحِ والعزيمة', en:'Medal of Conquest & Resolve' },
    stickers:[
      { icon:'crown', color:'#1E6E5A', title:{ar:'فاتحُ القسطنطينية',en:'Conqueror of Constantinople'} },
      { icon:'compass',color:'#3E8E7A', title:{ar:'السفنُ فوقَ الجبال',en:'Ships Over Mountains'} },
      { icon:'book',  color:'#155E4A', title:{ar:'القائدُ العالم',en:'The Scholar-Commander'} },
      { icon:'star',  color:'#1E6E5A', title:{ar:'محقّقُ البشارة',en:'Fulfiller of the Tiding'} },
    ],
    moral:{ ar:'محمدٌ الفاتحُ قدوةٌ في العزيمةِ والإيمانِ والعلمِ والإبداع — حقّقَ حلماً عمرُه ثمانِ مئةِ سنة بالهمّةِ والعمل.',
      en:'Mehmed the Conqueror is a model of resolve, faith, knowledge, and ingenuity — he fulfilled an eight-hundred-year-old dream through ambition and action.' },
    reflect:[
      { ar:'حقّقَ الفاتحُ حلماً عظيماً بالعزيمةِ والاستعداد. ما الهدفُ الكبيرُ الذي تسعى إليه؟', en:'The Conqueror achieved a great dream through resolve and preparation. What big goal are you pursuing?' },
      { ar:'جمعَ بين العلمِ والعمل. كيف تستعدُّ جيّداً لتحقيقِ أهدافِك؟', en:'He combined knowledge and action. How do you prepare well to achieve your goals?' },
    ],
  },
};
