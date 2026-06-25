// data/chapters/ala_hadrami.js — Heroes · العلاءُ بنُ الحضرمي (full chapter; Story tab uses data/stories/ala_hadrami.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ala_hadrami = {
  id:'ala_hadrami', era:'heroes', icon:'dove',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'العلاءُ بنُ الحضرمي', en:'Al-Ala\u2019 ibn al-Hadrami' },
  tag:{ ar:'مجابُ الدعوة', en:'Whose prayers were answered' },
  accent:'#2E7C8C', accent2:'#4E9CAC',
  greeting:{ ar:'أهلاً يا بطل! العلاءُ بنُ الحضرميِّ رضي الله عنه واليٌ صالحٌ مجابُ الدعوة، دعا اللهَ ثلاثَ دعواتٍ فاستجابَ له، حتى مشى الجيشُ على ماءِ البحر! تعالَ نتعلّمْ من صدقِه مع الله.',
    en:'Hello, hero! Al-Ala\u2019 ibn al-Hadrami, a righteous governor whose prayers were answered — he prayed three prayers and Allah responded, until the army walked over the sea-water! Come, let\'s learn from his sincerity with Allah.' },

  knowledge:{
    didYouKnow:{ ar:'دعا العلاءُ ثلاثَ دعواتٍ فاستُجِبَتْ كلُّها: ماءٌ في الصحراء، وعبورُ الجيشِ فوقَ البحر، وأن لا يُرى جسدُه بعدَ موتِه!',
      en:'Al-Ala\u2019 made three supplications, all answered: water in the desert, the army crossing over the sea, and that his body not be seen after death!' },
    who:{ ar:'هو <b>العلاءُ بنُ الحضرمي</b>، صحابيٌّ جليلٌ وواليٌ صالح. أرسله النبيُّ ﷺ والياً على <b>البحرين</b>، وأقرّه أبو بكرٍ وعمرُ بعدَه. كان <b>مجابَ الدعوة</b> لصدقِه وإخلاصِه مع الله. في إحدى الغزواتِ نفدَ الماءُ عن الجيشِ في الصحراء، فدعا اللهَ فنبعَ الماء. ولمّا حالَ خليجٌ من البحرِ بينه وبين العدوّ، دعا اللهَ <b>فعبرَ الجيشُ فوقَ الماءِ كأنّه أرضٌ صلبة</b>! ودعا أن لا يُرى جسدُه بعدَ موتِه فاستُجيبَ له. قدوةٌ في الصدقِ مع الله.',
      en:'He is <b>al-Ala\u2019 ibn al-Hadrami</b>, a noble companion and righteous governor. The Prophet ﷺ sent him as governor of <b>Bahrain</b>, and Abu Bakr and Umar kept him after. He was <b>one whose prayers were answered</b>, for his sincerity and devotion to Allah. On one expedition the army ran out of water in the desert, so he prayed to Allah and water gushed forth. When a gulf of the sea stood between him and the enemy, he prayed to Allah and <b>the army crossed over the water as if it were solid ground</b>! He prayed that his body not be seen after death, and it was granted. A model of sincerity with Allah.' },
    facts:[
      { ar:'واليٌ صالحٌ على البحرينِ زمنَ النبيِّ ﷺ والشيخين.', en:'A righteous governor of Bahrain under the Prophet ﷺ and the two caliphs.' },
      { ar:'كان مجابَ الدعوةِ لصدقِه مع الله.', en:'His prayers were answered, for his sincerity with Allah.' },
      { ar:'دعا فنبعَ الماءُ للجيشِ في الصحراء.', en:'He prayed and water gushed for the army in the desert.' },
      { ar:'عبرَ جيشُه فوقَ البحرِ بدعائِه.', en:'His army crossed over the sea by his prayer.' },
      { ar:'دعا أن لا يُرى جسدُه بعدَ موتِه فاستُجيب.', en:'He prayed his body not be seen after death — granted.' },
    ],
    timeline:[
      { when:{ar:'الولاية',en:'Governorship'}, what:{ar:'أرسله النبيُّ ﷺ والياً على البحرين.',en:'The Prophet ﷺ sent him as governor of Bahrain.'} },
      { when:{ar:'الصدق',en:'Sincerity'}, what:{ar:'كان مجابَ الدعوةِ لإخلاصِه.',en:'His prayers were answered for his sincerity.'} },
      { when:{ar:'الماء',en:'The Water'}, what:{ar:'دعا فنبعَ الماءُ للجيش.',en:'He prayed and water gushed for the army.'} },
      { when:{ar:'البحر',en:'The Sea'}, what:{ar:'عبرَ الجيشُ فوقَ الماءِ بدعائِه.',en:'The army crossed over the water by his prayer.'} },
      { when:{ar:'الدعوةُ الثالثة',en:'Third Prayer'}, what:{ar:'استُجيبَ أن لا يُرى جسدُه.',en:'It was granted his body not be seen.'} },
    ],
    ayah:{ ar:'﴿ وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ﴾', ref:{ ar:'غافر ٦٠', en:'Ghafir 60' } },
  },

  story:[
    { title:{ ar:'مجابُ الدعوة', en:'Whose Prayers Were Answered' },
      pages:[
        { scene:'desert', text:{ ar:'كان <b>العلاءُ بنُ الحضرمي</b> والياً صالحاً مجابَ الدعوةِ لصدقِه مع الله. دعا فنبعَ الماءُ للجيشِ في الصحراء، وعبرَ جيشُه فوقَ البحرِ بدعائِه، ودعا أن لا يُرى جسدُه بعدَ موتِه فاستُجيبَ له. صدقَ اللهَ فأعطاه.',
          en:'<b>Al-Ala\u2019 ibn al-Hadrami</b> was a righteous governor whose prayers were answered for his sincerity with Allah. He prayed and water gushed for the army in the desert; his army crossed over the sea by his prayer; and he prayed that his body not be seen after death, and it was granted. He was true to Allah, so Allah gave to him.' } } ] }
  ],

  traits:[
    { ar:'الصدقُ مع الله', en:'Sincerity with Allah' }, { ar:'الدعاء', en:'Supplication' },
    { ar:'حُسنُ الولاية', en:'Just governance' }, { ar:'التوكّل', en:'Reliance on Allah' },
  ],
  lessons:[
    { icon:'🤲', color:'#2E7C8C', title:{ar:'ادعُ اللهَ بصدق',en:'Pray to Allah sincerely'},
      body:{ar:'استُجيبَ دعاءُ العلاءِ لصدقِه مع الله. الدعاءُ الصادقُ سلاحُ المؤمنِ ومفتاحُ الفرج.',en:'Al-Ala\u2019\u2019s prayers were answered for his sincerity. Sincere supplication is the believer\u2019s weapon and a key to relief.'},
      apply:{ar:'أدعو اللهَ بقلبٍ صادقٍ وأثقُ بإجابتِه.',en:'I pray to Allah with a sincere heart, trusting He answers.'} },
    { icon:'💧', color:'#4E9CAC', title:{ar:'توكّلْ على الله',en:'Rely on Allah'},
      body:{ar:'حين نفدَ الماءُ توكّلَ العلاءُ على اللهِ ودعا، فأنبعَ له الماء. التوكّلُ يفتحُ أبوابَ المعونة.',en:'When water ran out, al-Ala\u2019 relied on Allah and prayed, and water gushed for him. Reliance opens doors of aid.'},
      apply:{ar:'أعملُ بأسبابي ثمّ أتوكّلُ على الله.',en:'I take my means, then rely on Allah.'} },
    { icon:'⚖️', color:'#226A78', title:{ar:'كنْ عادلاً أميناً',en:'Be just and trustworthy'},
      body:{ar:'كان العلاءُ والياً صالحاً عادلاً فأقرّه الخلفاء. القائدُ الصالحُ يخدمُ الناسَ بعدل.',en:'Al-Ala\u2019 was a righteous, just governor, so the caliphs kept him. A good leader serves people with justice.'},
      apply:{ar:'إذا تولّيتُ أمراً أدّيتُه بعدلٍ وأمانة.',en:'If I am given a charge, I fulfill it justly and faithfully.'} },
    { icon:'🌊', color:'#2E7C8C', title:{ar:'لا شيءَ يُعجِزُ الله',en:'Nothing is beyond Allah'},
      body:{ar:'عبرَ الجيشُ فوقَ البحرِ بدعاءِ العلاء. مَن صدقَ مع اللهِ رأى عجائبَ قدرتِه.',en:'The army crossed over the sea by al-Ala\u2019\u2019s prayer. Whoever is true with Allah witnesses the wonders of His power.'},
      apply:{ar:'أثقُ بقدرةِ اللهِ ولا أيأسُ أبداً.',en:'I trust Allah\u2019s power and never despair.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ﴾', ref:{ ar:'غافر ٦٠', en:'Ghafir 60' } },
    dua:{ ar:'اللّهُمَّ اجعلني مجابَ الدعوةِ صادقاً معك متوكّلاً عليك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أدعو اللهَ بصدقٍ وأثقُ بإجابتِه.', en:'I pray to Allah sincerely, trusting His answer.' },
        { ar:'أعملُ بأسبابي ثمّ أتوكّلُ عليه.', en:'I take my means, then rely on Him.' },
        { ar:'أكونُ عادلاً أميناً فيما أتولّاه.', en:'I am just and trustworthy in what I take charge of.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ صفةٍ اشتهرَ العلاءُ بنُ الحضرمي؟',en:'What was al-Ala\u2019 ibn al-Hadrami known for?'},
          options:[{ar:'أنّه مجابُ الدعوة',en:'His prayers were answered'},{ar:'كثرةِ المال',en:'Great wealth'},{ar:'الشعر',en:'Poetry'}], answer:0 },
        { q:{ar:'ماذا حدثَ حين نفدَ الماءُ عن جيشِه؟',en:'What happened when his army ran out of water?'},
          options:[{ar:'دعا فنبعَ الماء',en:'He prayed and water gushed'},{ar:'رجعوا',en:'They turned back'},{ar:'استسلموا',en:'They surrendered'}], answer:0 },
        { q:{ar:'كيف عبرَ جيشُه الخليج؟',en:'How did his army cross the gulf?'},
          options:[{ar:'مشَوا فوقَ الماءِ بدعائِه',en:'They walked over the water by his prayer'},{ar:'بالسفن',en:'By ships'},{ar:'بالطائرة',en:'By plane'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'العلاءُ كان والياً صالحاً مجابَ الدعوة.',en:'Al-Ala\u2019 was a righteous governor whose prayers were answered.'}, t:true },
        { statement:{ar:'عبرَ جيشُه فوقَ البحرِ بدعائِه.',en:'His army crossed over the sea by his prayer.'}, t:true },
        { statement:{ar:'كان ظالماً خائناً في ولايتِه.',en:'He was unjust and treacherous in his rule.'}, t:false },
        { statement:{ar:'الدعاءُ الصادقُ سلاحُ المؤمن.',en:'Sincere supplication is the believer\u2019s weapon.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'البحرين',en:'Bahrain'}, b:{ar:'كان والياً عليها',en:'He was governor of it'} },
        { a:{ar:'الماء',en:'Water'}, b:{ar:'نبعَ بدعائِه في الصحراء',en:'Gushed by his prayer in the desert'} },
        { a:{ar:'البحر',en:'The sea'}, b:{ar:'عبرَه الجيشُ فوقَ الماء',en:'The army crossed over its water'} },
        { a:{ar:'الدعاء',en:'Supplication'}, b:{ar:'كان مجابَه',en:'His was answered'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الدعاءِ المستجاب', en:'Medal of the Answered Prayer' },
    stickers:[
      { icon:'dove',  color:'#2E7C8C', title:{ar:'مجابُ الدعوة',en:'Answered in Prayer'} },
      { icon:'light', color:'#4E9CAC', title:{ar:'نبعُ الماء',en:'The Gushing Water'} },
      { icon:'compass',color:'#226A78', title:{ar:'عبورُ البحر',en:'Crossing the Sea'} },
      { icon:'star',  color:'#2E7C8C', title:{ar:'الواليُ العادل',en:'The Just Governor'} },
    ],
    moral:{ ar:'العلاءُ قدوةٌ في الصدقِ مع اللهِ والتوكّلِ عليه — مَن صدقَ ربَّه استجابَ له وأراه عجائبَ قدرتِه.',
      en:'Al-Ala\u2019 is a model of sincerity with Allah and reliance upon Him — whoever is true to his Lord, He answers him and shows him the wonders of His power.' },
    reflect:[
      { ar:'استُجيبَ دعاءُ العلاءِ لصدقِه. كيف تدعو اللهَ بقلبٍ صادق؟', en:'Al-Ala\u2019\u2019s prayers were answered for his sincerity. How do you pray to Allah with a sincere heart?' },
      { ar:'توكّلَ على اللهِ فأعانَه. هل تتوكّلُ على اللهِ بعدَ أن تأخذَ بالأسباب؟', en:'He relied on Allah, who aided him. Do you rely on Allah after taking your means?' },
    ],
  },
};
