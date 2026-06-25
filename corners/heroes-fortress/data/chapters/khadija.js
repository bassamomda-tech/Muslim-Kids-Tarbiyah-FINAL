// data/chapters/khadija.js — Heroes · خديجةُ بنتُ خويلد (full chapter; Story tab uses data/stories/khadija.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · صحيح البخاري ومسلم
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.khadija = {
  id:'khadija', era:'heroes', icon:'heart',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'خديجةُ بنتُ خويلد', en:'Khadija bint Khuwaylid' },
  tag:{ ar:'أمُّ المؤمنينَ وأوّلُ من آمن', en:'Mother of the Believers, the first to believe' },
  accent:'#A23E6E', accent2:'#C25E8E',
  greeting:{ ar:'أهلاً يا بطل! خديجةُ بنتُ خويلدٍ رضي الله عنها أوّلُ من آمنَ بالنبيِّ ﷺ من الناسِ جميعاً، وزوجتُه الوفيّةُ التي ساندتْه في أصعبِ الأوقات. تعالَ نتعلّمْ من إيمانِها ووفائِها.',
    en:'Hello, hero! Khadija bint Khuwaylid, the very first of all people to believe in the Prophet ﷺ, and his loyal wife who stood by him in the hardest times. Come, let\'s learn from her faith and loyalty.' },

  knowledge:{
    didYouKnow:{ ar:'بشّرَ جبريلُ النبيَّ ﷺ أن يُبلِغَ خديجةَ سلامَ ربِّها، وأنّ لها بيتاً في الجنّةِ من قصبٍ لا نصبَ فيه ولا تعب.',
      en:'Jibril told the Prophet ﷺ to convey to Khadija greetings of peace from her Lord, and that she had a house in Paradise of reeds, with no toil or fatigue in it.' },
    who:{ ar:'هي <b>خديجةُ بنتُ خويلد</b>، <b>أوّلُ من آمنَ</b> بالنبيِّ ﷺ من الرجالِ والنساء، وأمُّ المؤمنين. كانت سيّدةً <b>شريفةً عاقلةً تاجرةً</b> ذاتَ مالٍ ومكانة، تزوّجها النبيُّ ﷺ فكانت نِعمَ الزوجة. لمّا نزلَ الوحيُ أوّلَ مرّةٍ وعادَ النبيُّ ﷺ خائفاً، <b>ثبّتته وآمنتْ به فوراً</b> وقالت: «واللهِ لا يُخزيك اللهُ أبداً». بذلتْ مالَها كلَّه في نصرةِ الإسلام، وصبرتْ معه في حصارِ الشِّعب. أحبَّها النبيُّ ﷺ حبّاً عظيماً وبقيَ يذكرُها بالخيرِ بعدَ وفاتِها.',
      en:'She is <b>Khadija bint Khuwaylid</b>, <b>the first to believe</b> in the Prophet ﷺ among men and women, and a Mother of the Believers. She was a <b>noble, wise merchant</b> of wealth and standing; the Prophet ﷺ married her and she was the best of wives. When revelation first came and the Prophet ﷺ returned afraid, <b>she steadied him and believed in him at once</b>, saying: "By Allah, Allah will never disgrace you." She gave all her wealth to support Islam and endured with him the boycott in the valley. The Prophet ﷺ loved her greatly and kept mentioning her with good after her death.' },
    facts:[
      { ar:'أوّلُ من آمنَ بالنبيِّ ﷺ من الناسِ كلِّهم.', en:'The very first of all people to believe in the Prophet ﷺ.' },
      { ar:'ثبّتتِ النبيَّ ﷺ حين نزلَ عليه الوحيُ أوّلَ مرّة.', en:'She steadied the Prophet ﷺ when revelation first came.' },
      { ar:'بذلتْ مالَها كلَّه في نصرةِ الإسلام.', en:'She gave all her wealth to support Islam.' },
      { ar:'بشّرها اللهُ ببيتٍ في الجنّةِ وسلامٍ من ربِّها.', en:'Allah gave her glad tidings of a house in Paradise and peace from her Lord.' },
      { ar:'أحبَّها النبيُّ ﷺ وبقيَ يذكرُها بالخير.', en:'The Prophet ﷺ loved her and kept remembering her with good.' },
    ],
    timeline:[
      { when:{ar:'قبلَ البعثة',en:'Before the Message'}, what:{ar:'سيّدةٌ شريفةٌ تاجرةٌ تزوّجها النبيُّ ﷺ.',en:'A noble merchant whom the Prophet ﷺ married.'} },
      { when:{ar:'أوّلُ الوحي',en:'First Revelation'}, what:{ar:'ثبّتتِ النبيَّ ﷺ وآمنتْ به فوراً.',en:'She steadied the Prophet ﷺ and believed at once.'} },
      { when:{ar:'النصرة',en:'Support'}, what:{ar:'بذلتْ مالَها في سبيلِ الإسلام.',en:'She gave her wealth for Islam.'} },
      { when:{ar:'الحصار',en:'The Boycott'}, what:{ar:'صبرتْ معه في حصارِ الشِّعب.',en:'She endured with him the boycott in the valley.'} },
      { when:{ar:'البشارة',en:'Glad Tidings'}, what:{ar:'بشّرها اللهُ ببيتٍ في الجنّة.',en:'Allah gave her tidings of a house in Paradise.'} },
    ],
    ayah:{ ar:'﴿ وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ ﴾', ref:{ ar:'البقرة ٨٢', en:'Al-Baqara 82' } },
  },

  story:[
    { title:{ ar:'أوّلُ من آمن', en:'The First to Believe' },
      pages:[
        { scene:'kaaba', text:{ ar:'كانت <b>خديجةُ بنتُ خويلد</b> أوّلَ من آمنَ بالنبيِّ ﷺ من الناسِ جميعاً. ثبّتته حين نزلَ الوحيُ أوّلَ مرّة، وبذلتْ مالَها في نصرةِ الإسلام، وصبرتْ معه في الشدائد. بشّرها اللهُ ببيتٍ في الجنّةِ وأحبَّها النبيُّ ﷺ حبّاً عظيماً.',
          en:'<b>Khadija bint Khuwaylid</b> was the very first of all people to believe in the Prophet ﷺ. She steadied him when revelation first came, gave her wealth to support Islam, and endured hardships with him. Allah gave her tidings of a house in Paradise, and the Prophet ﷺ loved her greatly.' } } ] }
  ],

  traits:[
    { ar:'الإيمان', en:'Faith' }, { ar:'الوفاء', en:'Loyalty' },
    { ar:'الجود', en:'Generosity' }, { ar:'الثبات', en:'Steadfastness' },
  ],
  lessons:[
    { icon:'⭐', color:'#A23E6E', title:{ar:'سابِقْ إلى الإيمان',en:'Race to faith'},
      body:{ar:'كانت خديجةُ أوّلَ من آمن. السبقُ إلى الخيرِ والإيمانِ شرفٌ عظيم.',en:'Khadija was the first to believe. Being first to faith and good is a great honor.'},
      apply:{ar:'أُبادِرُ إلى الإيمانِ والعملِ الصالح.',en:'I hasten to faith and good deeds.'} },
    { icon:'🤝', color:'#C25E8E', title:{ar:'ساندْ من تحب',en:'Support those you love'},
      body:{ar:'ثبّتتْ خديجةُ النبيَّ ﷺ في أصعبِ لحظاتِه. الكلمةُ الطيّبةُ والدعمُ يُخفّفان الشدائد.',en:'Khadija steadied the Prophet ﷺ in his hardest moments. A kind word and support ease hardships.'},
      apply:{ar:'أُساندُ أهلي وأصحابي وقتَ الحاجة.',en:'I support my family and friends in times of need.'} },
    { icon:'🎁', color:'#822E56', title:{ar:'أنفِقْ في الخير',en:'Spend on good'},
      body:{ar:'بذلتْ خديجةُ مالَها كلَّه لنصرةِ الإسلام. الكريمُ يُنفِقُ ما يملكُ في سبيلِ الله.',en:'Khadija gave all her wealth to support Islam. The generous spend what they have for Allah\u2019s sake.'},
      apply:{ar:'أُشارِكُ ما عندي في وجوهِ الخير.',en:'I share what I have in ways of good.'} },
    { icon:'💪', color:'#A23E6E', title:{ar:'اصبِرْ في الشدّة',en:'Be patient in hardship'},
      body:{ar:'صبرتْ خديجةُ في حصارِ الشِّعبِ على الجوعِ والمشقّة. الصبرُ مع الحقِّ بابٌ للجنّة.',en:'Khadija endured hunger and hardship in the boycott. Patience with the truth is a door to Paradise.'},
      apply:{ar:'أصبِرُ على الصعابِ في طريقِ الخير.',en:'I am patient through difficulties on the path of good.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ هُمْ فِيهَا خَالِدُونَ ﴾', ref:{ ar:'البقرة ٨٢', en:'Al-Baqara 82' } },
    dua:{ ar:'اللّهُمَّ ارزقني إيماناً ثابتاً ووفاءً وجوداً في سبيلِك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُبادِرُ إلى الإيمانِ والخير.', en:'I hasten to faith and good.' },
        { ar:'أُساندُ من أُحِبُّ وقتَ الشدّة.', en:'I support those I love in hard times.' },
        { ar:'أُنفِقُ مما أملكُ في سبيلِ الله.', en:'I spend from what I have for Allah\u2019s sake.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من أوّلُ من آمنَ بالنبيِّ ﷺ من الناس؟',en:'Who was the first of all people to believe in the Prophet ﷺ?'},
          options:[{ar:'خديجةُ بنتُ خويلد',en:'Khadija bint Khuwaylid'},{ar:'أبو جهل',en:'Abu Jahl'},{ar:'أبو لهب',en:'Abu Lahab'}], answer:0 },
        { q:{ar:'ماذا فعلتْ خديجةُ حين نزلَ الوحيُ أوّلَ مرّة؟',en:'What did Khadija do when revelation first came?'},
          options:[{ar:'ثبّتتِ النبيَّ ﷺ وآمنتْ به',en:'She steadied the Prophet ﷺ and believed in him'},{ar:'خافتْ وتركتْه',en:'She panicked and left him'},{ar:'كذّبتْه',en:'She disbelieved him'}], answer:0 },
        { q:{ar:'بِمَ بشّرها اللهُ تعالى؟',en:'What glad tidings did Allah give her?'},
          options:[{ar:'بيتٌ في الجنّةِ وسلامٌ من ربِّها',en:'A house in Paradise and peace from her Lord'},{ar:'مالٌ كثير',en:'Much wealth'},{ar:'مُلكٌ في الدنيا',en:'A kingdom in this world'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'خديجةُ أوّلُ من آمنَ بالنبيِّ ﷺ.',en:'Khadija was the first to believe in the Prophet ﷺ.'}, t:true },
        { statement:{ar:'بذلتْ مالَها في نصرةِ الإسلام.',en:'She gave her wealth to support Islam.'}, t:true },
        { statement:{ar:'تركتِ النبيَّ ﷺ وقتَ الشدّة.',en:'She abandoned the Prophet ﷺ in hard times.'}, t:false },
        { statement:{ar:'بشّرها اللهُ ببيتٍ في الجنّة.',en:'Allah gave her tidings of a house in Paradise.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أوّلُ من آمن',en:'First to believe'}, b:{ar:'مكانةُ خديجة',en:'Khadija\u2019s rank'} },
        { a:{ar:'أوّلُ الوحي',en:'First revelation'}, b:{ar:'ثبّتتِ النبيَّ ﷺ',en:'She steadied the Prophet ﷺ'} },
        { a:{ar:'مالُها',en:'Her wealth'}, b:{ar:'بذلتْه للإسلام',en:'She gave it for Islam'} },
        { a:{ar:'بيتٌ في الجنّة',en:'A house in Paradise'}, b:{ar:'بشارةٌ من الله',en:'Tidings from Allah'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الإيمانِ والوفاء', en:'Medal of Faith & Loyalty' },
    stickers:[
      { icon:'heart', color:'#A23E6E', title:{ar:'أوّلُ من آمن',en:'First to Believe'} },
      { icon:'crescent',color:'#C25E8E', title:{ar:'بيتٌ في الجنّة',en:'A House in Paradise'} },
      { icon:'gem',   color:'#822E56', title:{ar:'الزوجةُ الوفيّة',en:'The Loyal Wife'} },
      { icon:'star',  color:'#A23E6E', title:{ar:'الجوادُ الكريمة',en:'The Generous One'} },
    ],
    moral:{ ar:'خديجةُ قدوةٌ في الإيمانِ والوفاءِ والجودِ والثبات — أوّلُ من آمنَ وأعظمُ من ساند.',
      en:'Khadija is a model of faith, loyalty, generosity, and steadfastness — the first to believe and the greatest supporter.' },
    reflect:[
      { ar:'آمنتْ خديجةُ وثبّتتِ النبيَّ ﷺ. كيف تُساندُ من حولَك في الخير؟', en:'Khadija believed and steadied the Prophet ﷺ. How do you support those around you in good?' },
      { ar:'بذلتْ مالَها لله. هل تُشارِكُ ما تملكُه في وجوهِ الخير؟', en:'She gave her wealth for Allah. Do you share what you own in ways of good?' },
    ],
  },
};
