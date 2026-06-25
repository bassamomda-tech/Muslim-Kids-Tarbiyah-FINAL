// data/chapters/abudarda.js — Heroes · أبو الدرداء (full chapter; Story tab uses data/stories/abudarda.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.abudarda = {
  id:'abudarda', era:'heroes', icon:'book',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أبو الدرداء', en:'Abu ad-Darda\u2019' },
  tag:{ ar:'حكيمُ هذه الأمّة', en:'The sage of this nation' },
  accent:'#6A4C93', accent2:'#8A6CB3',
  greeting:{ ar:'أهلاً يا بطل! أبو الدرداءِ رضي الله عنه حكيمُ هذه الأمّة، تركَ التجارةَ وأقبلَ على العلمِ والعبادة، وعلّمنا الحكمةَ والتوازنَ في الحياة. تعالَ نتعلّمْ من حكمتِه.',
    en:'Hello, hero! Abu ad-Darda\u2019, the sage of this nation, who left trade for knowledge and worship, and taught us wisdom and balance in life. Come, let\'s learn from his wisdom.' },

  knowledge:{
    didYouKnow:{ ar:'كان أبو الدرداءِ تاجراً، فلمّا أسلمَ تركَ تجارتَه وقال: ما أُحِبُّ أن يكونَ لي دكّاني على بابِ المسجدِ لا تفوتُني صلاةٌ — بل أُحِبُّ العلمَ والعبادة.',
      en:'Abu ad-Darda\u2019 was a merchant; when he embraced Islam he left his trade, saying he would rather not let business distract him from prayer — he loved knowledge and worship more.' },
    who:{ ar:'هو <b>عُوَيمرُ بنُ مالك</b> الأنصاريُّ الخزرجي، <b>حكيمُ هذه الأمّة</b>. كان تاجراً ناجحاً قبلَ الإسلام، فلمّا أسلمَ <b>تركَ التجارةَ وأقبلَ على العلمِ والعبادة</b>. اشتهرَ بالحكمةِ وعمقِ الفهمِ والكلماتِ النافعة، فصارَ يُضرَبُ به المثلُ في الحكمة. آخى النبيُّ ﷺ بينه وبين <b>سلمانَ الفارسي</b>. ولّاه عمرُ القضاءَ والتعليمَ في <b>دمشق</b>، فكان معلِّمَ أهلِ الشام. جمعَ بين العلمِ والعملِ والزهد.',
      en:'He is <b>Uwaymir ibn Malik</b> al-Ansari al-Khazraji, <b>the sage of this nation</b>. He was a successful merchant before Islam, and when he believed he <b>left trade and turned to knowledge and worship</b>. He was famed for wisdom, depth of understanding, and beneficial sayings, becoming a byword for wisdom. The Prophet ﷺ made him a brother to <b>Salman al-Farisi</b>. Umar appointed him to judgeship and teaching in <b>Damascus</b>, where he was the teacher of the people of Sham. He combined knowledge, action, and detachment.' },
    facts:[
      { ar:'حكيمُ هذه الأمّةِ وعالمُها.', en:'The sage and scholar of this nation.' },
      { ar:'تركَ التجارةَ وأقبلَ على العلمِ والعبادة.', en:'Left trade and devoted himself to knowledge and worship.' },
      { ar:'آخى النبيُّ ﷺ بينه وبين سلمانَ الفارسي.', en:'The Prophet ﷺ made him a brother to Salman al-Farisi.' },
      { ar:'كان معلِّمَ أهلِ الشامِ وقاضيَ دمشق.', en:'He taught the people of Sham and was judge of Damascus.' },
      { ar:'اشتهرَ بكلماتِه الحكيمةِ في العلمِ والأخلاق.', en:'Famed for wise words on knowledge and character.' },
    ],
    timeline:[
      { when:{ar:'قبلَ الإسلام',en:'Before Islam'}, what:{ar:'كان تاجراً ناجحاً.',en:'He was a successful merchant.'} },
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'تركَ التجارةَ وأقبلَ على العبادةِ والعلم.',en:'He left trade for worship and knowledge.'} },
      { when:{ar:'الأخوّة',en:'Brotherhood'}, what:{ar:'آخى النبيُّ ﷺ بينه وبين سلمان.',en:'The Prophet ﷺ paired him with Salman.'} },
      { when:{ar:'الحكمة',en:'Wisdom'}, what:{ar:'صار حكيمَ الأمّةِ بكلماتِه النافعة.',en:'He became the nation\'s sage through his words.'} },
      { when:{ar:'دمشق',en:'Damascus'}, what:{ar:'علّمَ أهلَ الشامِ وقضى بينهم.',en:'He taught and judged among the people of Sham.'} },
    ],
    ayah:{ ar:'﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾', ref:{ ar:'المجادلة ١١', en:'Al-Mujadila 11' } },
  },

  story:[
    { title:{ ar:'حكيمُ الأمّة', en:'The Sage of the Nation' },
      pages:[
        { scene:'mosque', text:{ ar:'كان <b>أبو الدرداء</b> تاجراً، فلمّا أسلمَ تركَ التجارةَ وأقبلَ على العلمِ والعبادة، فصارَ حكيمَ هذه الأمّةِ ومعلِّمَ أهلِ الشام. علّمنا الحكمةَ والتوازنَ بين العبادةِ وحقوقِ النفسِ والأهل.',
          en:'<b>Abu ad-Darda\u2019</b> was a merchant; when he embraced Islam he left trade for knowledge and worship, becoming the sage of this nation and teacher of Sham. He taught us wisdom and balance between worship and the rights of one\'s body and family.' } } ] }
  ],

  traits:[
    { ar:'الحكمة', en:'Wisdom' }, { ar:'العلم', en:'Knowledge' },
    { ar:'الزهد', en:'Detachment' }, { ar:'التوازن', en:'Balance' },
  ],
  lessons:[
    { icon:'📚', color:'#6A4C93', title:{ar:'العلمُ خيرٌ من المال',en:'Knowledge is better than wealth'},
      body:{ar:'تركَ أبو الدرداءِ التجارةَ ليطلبَ العلم. العلمُ يبقى ويرفعُ صاحبَه، والمالُ يفنى.',en:'Abu ad-Darda\u2019 left trade to seek knowledge. Knowledge endures and elevates its owner, while wealth fades.'},
      apply:{ar:'أحرصُ على العلمِ النافعِ كلَّ يوم.',en:'I keep seeking useful knowledge every day.'} },
    { icon:'⚖️', color:'#8A6CB3', title:{ar:'وازِنْ في حياتِك',en:'Keep balance in your life'},
      body:{ar:'علّمَ أبو الدرداءِ أنّ لربِّك حقّاً ولبدنِك حقّاً ولأهلِك حقّاً. أعطِ كلَّ ذي حقٍّ حقَّه.',en:'Abu ad-Darda\u2019 taught that your Lord has a right, your body has a right, and your family has a right. Give each its due.'},
      apply:{ar:'أوازِنُ بين عبادتي وراحتي وأهلي.',en:'I balance worship, rest, and family.'} },
    { icon:'💡', color:'#523878', title:{ar:'تكلّمْ بالحكمة',en:'Speak with wisdom'},
      body:{ar:'كانت كلماتُ أبي الدرداءِ حكمةً ينتفعُ بها الناس. اجعلْ كلامَك نافعاً أو اصمت.',en:'Abu ad-Darda\u2019\'s words were wisdom people benefited from. Make your speech beneficial, or stay silent.'},
      apply:{ar:'أتكلّمُ بما ينفعُ وأتجنّبُ اللغو.',en:'I speak what benefits and avoid idle talk.'} },
    { icon:'🌙', color:'#6A4C93', title:{ar:'اعملْ بما تعلم',en:'Act on what you learn'},
      body:{ar:'لم يكتفِ أبو الدرداءِ بالعلمِ بل عمِلَ به وعبدَ ربَّه. العلمُ بلا عملٍ كشجرةٍ بلا ثمر.',en:'Abu ad-Darda\u2019 did not stop at knowledge but acted on it and worshipped his Lord. Knowledge without action is a tree without fruit.'},
      apply:{ar:'أُطبِّقُ ما أتعلّمُه في حياتي.',en:'I apply what I learn in my life.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾', ref:{ ar:'المجادلة ١١', en:'Al-Mujadila 11' } },
    dua:{ ar:'اللّهُمَّ ارزقني علماً نافعاً وحكمةً وعملاً صالحاً', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أطلبُ العلمَ النافعَ وأُقدِّمُه على الدنيا.', en:'I seek useful knowledge and put it before worldly things.' },
        { ar:'أوازِنُ بين حقِّ ربّي ونفسي وأهلي.', en:'I balance the rights of my Lord, myself, and my family.' },
        { ar:'أتكلّمُ بالحكمةِ وأعملُ بما أتعلّم.', en:'I speak with wisdom and act on what I learn.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ أبو الدرداء؟',en:'What title was Abu ad-Darda\u2019 known by?'},
          options:[{ar:'حكيمُ هذه الأمّة',en:'The sage of this nation'},{ar:'سيفُ الله',en:'The sword of Allah'},{ar:'أمينُ الأمّة',en:'The trustee of the nation'}], answer:0 },
        { q:{ar:'ماذا تركَ أبو الدرداءِ بعدَ إسلامِه؟',en:'What did Abu ad-Darda\u2019 leave after his Islam?'},
          options:[{ar:'التجارةَ ليطلبَ العلمَ والعبادة',en:'Trade, to seek knowledge and worship'},{ar:'بيتَه',en:'His house'},{ar:'قبيلتَه',en:'His tribe'}], answer:0 },
        { q:{ar:'من آخى النبيُّ ﷺ بينه وبين أبي الدرداء؟',en:'Whom did the Prophet ﷺ pair with Abu ad-Darda\u2019?'},
          options:[{ar:'سلمانَ الفارسي',en:'Salman al-Farisi'},{ar:'بلالاً',en:'Bilal'},{ar:'خالداً',en:'Khalid'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أبو الدرداءِ حكيمُ هذه الأمّة.',en:'Abu ad-Darda\u2019 was the sage of this nation.'}, t:true },
        { statement:{ar:'تركَ التجارةَ وأقبلَ على العلمِ والعبادة.',en:'He left trade for knowledge and worship.'}, t:true },
        { statement:{ar:'كان جاهلاً يكرهُ العلم.',en:'He was ignorant and hated knowledge.'}, t:false },
        { statement:{ar:'علّمَ أهلَ الشامِ وقضى في دمشق.',en:'He taught Sham and judged in Damascus.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'حكيمُ الأمّة',en:'Sage of the nation'}, b:{ar:'لقبُ أبي الدرداء',en:'Abu ad-Darda\u2019\'s title'} },
        { a:{ar:'سلمان',en:'Salman'}, b:{ar:'أخوه في الإسلام',en:'His brother in Islam'} },
        { a:{ar:'دمشق',en:'Damascus'}, b:{ar:'علّمَ وقضى فيها',en:'He taught and judged there'} },
        { a:{ar:'العلم',en:'Knowledge'}, b:{ar:'آثرَه على التجارة',en:'He chose it over trade'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحكمةِ والعلم', en:'Medal of Wisdom & Knowledge' },
    stickers:[
      { icon:'book',  color:'#6A4C93', title:{ar:'حكيمُ الأمّة',en:'Sage of the Nation'} },
      { icon:'light', color:'#8A6CB3', title:{ar:'كلمةُ حكمة',en:'A Word of Wisdom'} },
      { icon:'crescent',color:'#523878', title:{ar:'العابدُ العالم',en:'The Devout Scholar'} },
      { icon:'gem',   color:'#6A4C93', title:{ar:'التوازنُ في الحياة',en:'Balance in Life'} },
    ],
    moral:{ ar:'أبو الدرداءِ قدوةٌ في طلبِ العلمِ والحكمةِ والتوازن — آثرَ ما يبقى على ما يفنى.',
      en:'Abu ad-Darda\u2019 is a model of seeking knowledge, wisdom, and balance — he chose the lasting over the fleeting.' },
    reflect:[
      { ar:'آثرَ أبو الدرداءِ العلمَ على المال. ما الذي تُقدِّمُه على متاعِ الدنيا؟', en:'Abu ad-Darda\u2019 chose knowledge over wealth. What do you put before worldly comforts?' },
      { ar:'علّمَ التوازنَ في الحياة. هل تُعطي كلَّ ذي حقٍّ حقَّه؟', en:'He taught balance in life. Do you give each thing its due right?' },
    ],
  },
};
