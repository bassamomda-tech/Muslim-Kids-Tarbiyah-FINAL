// data/chapters/nizam.js — Leaders · نظامُ الملك (full chapter; Story tab uses data/stories/nizam.js)
// Sources: البداية والنهاية · سير أعلام النبلاء · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nizam = {
  id:'nizam', era:'heroes', icon:'book',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'نظامُ الملك', en:'Nizam al-Mulk' },
  tag:{ ar:'الوزيرُ باني المدارس', en:'The vizier who built schools' },
  accent:'#4A5A2A', accent2:'#6A7A4A',
  greeting:{ ar:'أهلاً يا بطل! نظامُ الملكِ رحمه الله وزيرٌ حكيمٌ عادل، أدارَ دولةً عظيمةً وبنى المدارسَ النظاميّةَ التي خرّجتْ كبارَ العلماء. تعالَ نتعلّمْ من حكمتِه وعنايتِه بالعلم.',
    en:'Hello, hero! Nizam al-Mulk, a wise and just vizier who governed a great state and built the Nizamiyya schools that produced great scholars. Come, let\'s learn from his wisdom and care for knowledge.' },

  knowledge:{
    didYouKnow:{ ar:'بنى نظامُ الملكِ المدارسَ «النظاميّة» في بغدادَ ونيسابورَ وغيرِها، وكانت من أعظمِ جامعاتِ العالمِ في زمانِها ودرّسَ فيها كبارُ العلماء!',
      en:'Nizam al-Mulk built the "Nizamiyya" schools in Baghdad, Nishapur, and elsewhere — among the greatest universities in the world of their time, where great scholars taught!' },
    who:{ ar:'هو <b>نظامُ الملك</b>، وزيرُ الدولةِ السلجوقيّةِ العظيم، أحدُ أحكمِ الوزراءِ في التاريخِ الإسلامي. أدارَ دولةً واسعةً بحكمةٍ وعدلٍ نحوَ ثلاثينَ سنة، فعمَّ الأمنُ والرخاء. كان <b>محبّاً للعلمِ والعلماء</b> أشدَّ الحب، فأنشأَ المدارسَ <b>«النظاميّة»</b> في بغدادَ ونيسابورَ وغيرِهما، وجعلها مجّانيّةً للطلّاب، يُنفِقُ عليهم ويُكرِمُ أساتذتَهم. صارتْ هذه المدارسُ <b>منائرَ للعلم</b> خرّجتْ كبارَ العلماءِ، ودرّسَ فيها أمثالُ الإمامِ الغزالي. كان عادلاً تقيّاً متواضعاً، يُحِبُّ الصالحينَ ويُقرِّبُهم. مثالٌ للقائدِ الإداريِّ الذي يبني الأمّةَ بالعلم.',
      en:'He is <b>Nizam al-Mulk</b>, the great vizier of the Seljuk state, one of the wisest viziers in Islamic history. He governed a vast state with wisdom and justice for about thirty years, so security and prosperity spread. He <b>loved knowledge and scholars</b> most dearly, founding the <b>"Nizamiyya"</b> schools in Baghdad, Nishapur, and elsewhere, making them free for students — funding them and honoring their teachers. These schools became <b>beacons of knowledge</b> that produced great scholars, where the likes of Imam al-Ghazali taught. He was just, pious, and humble, loving the righteous and drawing them near. A model of the administrative leader who builds the nation through knowledge.' },
    facts:[
      { ar:'وزيرُ الدولةِ السلجوقيّةِ الحكيمُ العادل.', en:'The wise, just vizier of the Seljuk state.' },
      { ar:'أدارَ دولةً واسعةً نحوَ ثلاثينَ سنةً بعدل.', en:'He governed a vast state for about thirty years justly.' },
      { ar:'بنى المدارسَ النظاميّةَ مجّانيّةً للطلّاب.', en:'He built the Nizamiyya schools, free for students.' },
      { ar:'خرّجتْ مدارسُه كبارَ العلماءِ كالغزالي.', en:'His schools produced great scholars like al-Ghazali.' },
      { ar:'كان عادلاً تقيّاً متواضعاً يُحِبُّ العلماء.', en:'He was just, pious, humble, and loved scholars.' },
    ],
    timeline:[
      { when:{ar:'الوزارة',en:'The Vizierate'}, what:{ar:'صارَ وزيرَ الدولةِ السلجوقية.',en:'He became vizier of the Seljuk state.'} },
      { when:{ar:'الإدارة',en:'Governance'}, what:{ar:'أدارَ الدولةَ بحكمةٍ وعدلٍ ثلاثينَ سنة.',en:'He governed with wisdom and justice for thirty years.'} },
      { when:{ar:'النظامية',en:'The Nizamiyya'}, what:{ar:'بنى المدارسَ النظاميّةَ للعلم.',en:'He built the Nizamiyya schools for knowledge.'} },
      { when:{ar:'العلماء',en:'The Scholars'}, what:{ar:'أكرمَ العلماءَ ودرّسَ فيها كبارُهم.',en:'He honored scholars; the great ones taught there.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'خرّجتْ مدارسُه أجيالاً من العلماء.',en:'His schools produced generations of scholars.'} },
    ],
    ayah:{ ar:'﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾', ref:{ ar:'المجادلة ١١', en:'Al-Mujadila 11' } },
  },

  story:[
    { title:{ ar:'الوزيرُ باني المدارس', en:'The Vizier Who Built Schools' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>نظامُ الملك</b> وزيراً حكيماً عادلاً، أدارَ الدولةَ السلجوقيّةَ نحوَ ثلاثينَ سنةً بعدلٍ ورخاء. أحبَّ العلمَ فبنى المدارسَ النظاميّةَ مجّانيّةً للطلّاب، فصارتْ منائرَ للعلمِ خرّجتْ كبارَ العلماءِ كالغزالي.',
          en:'<b>Nizam al-Mulk</b> was a wise, just vizier who governed the Seljuk state for about thirty years with justice and prosperity. He loved knowledge, so he built the Nizamiyya schools free for students, which became beacons of knowledge that produced great scholars like al-Ghazali.' } } ] }
  ],

  traits:[
    { ar:'الحكمة', en:'Wisdom' }, { ar:'العدل', en:'Justice' },
    { ar:'العناية بالعلم', en:'Care for knowledge' }, { ar:'التواضع', en:'Humility' },
  ],
  lessons:[
    { icon:'🏫', color:'#4A5A2A', title:{ar:'ابنِ العلمَ للأجيال',en:'Build knowledge for generations'},
      body:{ar:'بنى نظامُ الملكِ المدارسَ فخرّجتْ علماءَ نفعوا الأمّةَ قروناً. بناءُ العلمِ أبقى الأعمال.',en:'Nizam al-Mulk built schools that produced scholars who benefited the nation for centuries. Building knowledge is the most lasting of deeds.'},
      apply:{ar:'أُسهِمُ في نشرِ العلمِ ودعمِ التعلّم.',en:'I contribute to spreading knowledge and supporting learning.'} },
    { icon:'🎓', color:'#6A7A4A', title:{ar:'أكرمِ العلماءَ والطلّاب',en:'Honor scholars and students'},
      body:{ar:'أكرمَ نظامُ الملكِ العلماءَ وأنفقَ على الطلّاب. تكريمُ أهلِ العلمِ يرفعُ الأمّة.',en:'Nizam al-Mulk honored scholars and funded students. Honoring people of knowledge raises the nation.'},
      apply:{ar:'أُقدِّرُ معلّميَّ وأحترمُ أهلَ العلم.',en:'I value my teachers and respect people of knowledge.'} },
    { icon:'⚖️', color:'#3A4A1A', title:{ar:'اعدلْ في إدارتِك',en:'Be just in your governance'},
      body:{ar:'أدارَ نظامُ الملكِ الدولةَ بالعدلِ فعمَّ الرخاء. العدلُ أساسُ الإدارةِ الناجحة.',en:'Nizam al-Mulk governed the state with justice, so prosperity spread. Justice is the basis of successful governance.'},
      apply:{ar:'أعدلُ وأُحسِنُ تدبيرَ ما أتولّاه.',en:'I am just and manage well what I oversee.'} },
    { icon:'🌿', color:'#4A5A2A', title:{ar:'تواضعْ مع المكانة',en:'Be humble despite status'},
      body:{ar:'كان نظامُ الملكِ متواضعاً يُحِبُّ الصالحينَ رغمَ علوِّ منصبِه. التواضعُ زينةُ الكبار.',en:'Nizam al-Mulk was humble, loving the righteous despite his high office. Humility is the adornment of the great.'},
      apply:{ar:'أتواضعُ مهما علا شأني.',en:'I stay humble however high my standing.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾', ref:{ ar:'المجادلة ١١', en:'Al-Mujadila 11' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ والعدلَ والتواضع', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُسهِمُ في نشرِ العلمِ ودعمِ التعلّم.', en:'I contribute to spreading knowledge and supporting learning.' },
        { ar:'أُقدِّرُ معلّميَّ وأهلَ العلم.', en:'I value my teachers and people of knowledge.' },
        { ar:'أعدلُ وأتواضعُ مهما علا شأني.', en:'I am just and humble however high my standing.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما المدارسُ التي بناها نظامُ الملك؟',en:'What schools did Nizam al-Mulk build?'},
          options:[{ar:'المدارسَ النظامية',en:'The Nizamiyya schools'},{ar:'بيتَ الحكمة',en:'The House of Wisdom'},{ar:'لا شيء',en:'Nothing'}], answer:0 },
        { q:{ar:'لمن جعلَ المدارسَ النظامية؟',en:'For whom did he make the Nizamiyya schools?'},
          options:[{ar:'مجّانيّةً للطلّاب',en:'Free for students'},{ar:'للأغنياءِ فقط',en:'For the rich only'},{ar:'لنفسِه',en:'For himself'}], answer:0 },
        { q:{ar:'بأيِّ صفةٍ أدارَ الدولة؟',en:'How did he govern the state?'},
          options:[{ar:'بالحكمةِ والعدل',en:'With wisdom and justice'},{ar:'بالظلم',en:'With injustice'},{ar:'بالفوضى',en:'With chaos'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'نظامُ الملكِ بنى المدارسَ النظامية.',en:'Nizam al-Mulk built the Nizamiyya schools.'}, t:true },
        { statement:{ar:'أدارَ الدولةَ بالحكمةِ والعدل.',en:'He governed the state with wisdom and justice.'}, t:true },
        { statement:{ar:'كان يكرهُ العلمَ والعلماء.',en:'He hated knowledge and scholars.'}, t:false },
        { statement:{ar:'خرّجتْ مدارسُه كبارَ العلماء.',en:'His schools produced great scholars.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'النظامية',en:'The Nizamiyya'}, b:{ar:'مدارسُه الشهيرة',en:'His famous schools'} },
        { a:{ar:'الغزالي',en:'Al-Ghazali'}, b:{ar:'درّسَ في مدارسِه',en:'Taught in his schools'} },
        { a:{ar:'العدل',en:'Justice'}, b:{ar:'أساسُ إدارتِه',en:'The basis of his governance'} },
        { a:{ar:'العلم',en:'Knowledge'}, b:{ar:'أحبَّه وبنى له المدارس',en:'He loved it and built schools for it'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ والحكمة', en:'Medal of Knowledge & Wisdom' },
    stickers:[
      { icon:'book',  color:'#4A5A2A', title:{ar:'باني النظامية',en:'Builder of the Nizamiyya'} },
      { icon:'gem',   color:'#6A7A4A', title:{ar:'الوزيرُ الحكيم',en:'The Wise Vizier'} },
      { icon:'light', color:'#3A4A1A', title:{ar:'راعي العلماء',en:'Patron of Scholars'} },
      { icon:'star',  color:'#4A5A2A', title:{ar:'العادلُ المتواضع',en:'The Just & Humble'} },
    ],
    moral:{ ar:'نظامُ الملكِ قدوةٌ في الحكمةِ والعدلِ ورعايةِ العلم — بنى مدارسَ نفعتِ الأمّةَ قروناً بعدَه.',
      en:'Nizam al-Mulk is a model of wisdom, justice, and nurturing knowledge — he built schools that benefited the nation for centuries after him.' },
    reflect:[
      { ar:'بنى نظامُ الملكِ مدارسَ نفعتِ الأجيال. كيف تُسهِمُ في نشرِ العلمِ من حولِك؟', en:'Nizam al-Mulk built schools that benefited generations. How do you contribute to spreading knowledge around you?' },
      { ar:'أكرمَ العلماءَ والطلّاب. كيف تُقدِّرُ معلّميك وتحترمُ أهلَ العلم؟', en:'He honored scholars and students. How do you value your teachers and respect people of knowledge?' },
    ],
  },
};
