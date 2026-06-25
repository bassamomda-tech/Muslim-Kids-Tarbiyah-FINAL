// data/chapters/qaqa.js — Heroes · القعقاعُ بنُ عمرو (full chapter; Story tab uses data/stories/qaqa.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية · تاريخ الطبري
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.qaqa = {
  id:'qaqa', era:'heroes', icon:'sword',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'القعقاعُ بنُ عمرو', en:'Al-Qa\u2019qa\u2019 ibn Amr' },
  tag:{ ar:'الفارسُ الذي يعدلُ ألفَ رجل', en:'The knight worth a thousand men' },
  accent:'#9B3340', accent2:'#BB5360',
  greeting:{ ar:'أهلاً يا بطل! القعقاعُ بنُ عمرٍو التميميُّ رضي الله عنه فارسٌ شجاعٌ قال عنه أبو بكر: صوتُ القعقاعِ في الجيشِ خيرٌ من ألفِ رجل! تعالَ نتعلّمْ من شجاعتِه وحُسنِ تدبيرِه.',
    en:'Hello, hero! Al-Qa\u2019qa\u2019 ibn Amr at-Tamimi, a brave knight of whom Abu Bakr said: the voice of al-Qa\u2019qa\u2019 in the army is better than a thousand men! Come, let\'s learn from his courage and clever planning.' },

  knowledge:{
    didYouKnow:{ ar:'قال أبو بكرٍ الصدّيقُ رضي الله عنه: «لا يُهزَمُ جيشٌ فيهم مثلُ هذا» — يعني القعقاعَ بنَ عمرو، وقال: صوتُه في الجيشِ خيرٌ من ألفِ رجل.',
      en:'Abu Bakr as-Siddiq said: "An army that has the like of this man in it will not be defeated" — meaning al-Qa\u2019qa\u2019 ibn Amr, and said: his voice in the army is better than a thousand men.' },
    who:{ ar:'هو <b>القعقاعُ بنُ عمرو</b> التميمي، فارسٌ <b>شجاعٌ مِقدامٌ</b> وقائدٌ بارع. أثنى عليه أبو بكرٍ الصدّيقُ ثناءً عظيماً وقال: <b>«صوتُ القعقاعِ في الجيشِ خيرٌ من ألفِ رجل»</b>. شارك في حروبِ الرِّدّةِ ثمّ في <b>فتوحِ العراقِ والشام</b> مع خالدِ بنِ الوليد، وكان له أثرٌ عظيمٌ في معاركِ <b>اليرموكِ والقادسيّة</b>. عُرِفَ بالشجاعةِ النادرةِ وحُسنِ التدبيرِ ورفعِ معنويّاتِ الجيش، وكان إذا اشتدّ القتالُ ظهرَ بطولتُه فثبّتَ الناس.',
      en:'He is <b>al-Qa\u2019qa\u2019 ibn Amr</b> at-Tamimi, a <b>brave and daring knight</b> and skilled commander. Abu Bakr as-Siddiq praised him greatly, saying: <b>"The voice of al-Qa\u2019qa\u2019 in the army is better than a thousand men."</b> He took part in the Ridda wars, then in the <b>conquests of Iraq and Sham</b> with Khalid ibn al-Walid, and played a great role in the battles of <b>Yarmouk and Qadisiyya</b>. He was known for rare courage, clever planning, and lifting the army\u2019s morale; when the fighting intensified his heroism would appear and steady the people.' },
    facts:[
      { ar:'فارسٌ شجاعٌ قال أبو بكر: صوتُه خيرٌ من ألفِ رجل.', en:'A brave knight; Abu Bakr said his voice was worth a thousand men.' },
      { ar:'شارك في حروبِ الرِّدّةِ والفتوحِ الكبرى.', en:'He fought in the Ridda wars and the great conquests.' },
      { ar:'كان له أثرٌ عظيمٌ في اليرموكِ والقادسيّة.', en:'He had a great impact at Yarmouk and Qadisiyya.' },
      { ar:'عُرِفَ بحُسنِ التدبيرِ ورفعِ معنويّاتِ الجيش.', en:'Known for clever planning and lifting army morale.' },
      { ar:'قاتلَ مع خالدِ بنِ الوليدِ في العراقِ والشام.', en:'He fought with Khalid ibn al-Walid in Iraq and Sham.' },
    ],
    timeline:[
      { when:{ar:'الرِّدّة',en:'The Ridda'}, what:{ar:'شارك في حروبِ الرِّدّةِ بشجاعة.',en:'He fought bravely in the Ridda wars.'} },
      { when:{ar:'الثناء',en:'The Praise'}, what:{ar:'قال أبو بكر: صوتُه خيرٌ من ألف.',en:'Abu Bakr said: his voice was worth a thousand.'} },
      { when:{ar:'العراق',en:'Iraq'}, what:{ar:'قاتلَ مع خالدٍ في فتوحِ العراق.',en:'He fought with Khalid in the conquest of Iraq.'} },
      { when:{ar:'اليرموك',en:'Yarmouk'}, what:{ar:'كان له أثرٌ في النصرِ على الروم.',en:'He had a role in the victory over the Romans.'} },
      { when:{ar:'القادسيّة',en:'Qadisiyya'}, what:{ar:'ثبّتَ الجيشَ في أصعبِ المواقف.',en:'He steadied the army in the hardest moments.'} },
    ],
    ayah:{ ar:'﴿ كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٤٩', en:'Al-Baqara 249' } },
  },

  story:[
    { title:{ ar:'الفارسُ الذي يعدلُ ألفاً', en:'The Knight Worth a Thousand' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>القعقاعُ بنُ عمرو</b> فارساً شجاعاً قال عنه أبو بكر: «صوتُه في الجيشِ خيرٌ من ألفِ رجل». شارك في الفتوحِ الكبرى، وكان له أثرٌ عظيمٌ في اليرموكِ والقادسيّة، يثبّتُ الجيشَ ويرفعُ معنويّاتِه.',
          en:'<b>Al-Qa\u2019qa\u2019 ibn Amr</b> was a brave knight of whom Abu Bakr said: "His voice in the army is better than a thousand men." He fought in the great conquests, with a great impact at Yarmouk and Qadisiyya, steadying the army and lifting its morale.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'الثبات', en:'Steadfastness' },
    { ar:'حُسنُ التدبير', en:'Clever planning' }, { ar:'رفعُ الهمّة', en:'Inspiring others' },
  ],
  lessons:[
    { icon:'🦁', color:'#9B3340', title:{ar:'كنْ شجاعاً في الحق',en:'Be brave in the right'},
      body:{ar:'كانت شجاعةُ القعقاعِ تعدلُ ألفَ رجل. الشجاعةُ في الحقِّ تصنعُ فرقاً عظيماً.',en:'Al-Qa\u2019qa\u2019\u2019s courage was worth a thousand men. Courage in the right makes a great difference.'},
      apply:{ar:'أكونُ شجاعاً في قولِ الحقِّ وفعلِه.',en:'I am brave in speaking and doing what is right.'} },
    { icon:'📣', color:'#BB5360', title:{ar:'ارفعْ همّةَ من حولِك',en:'Lift the spirits of those around you'},
      body:{ar:'كان صوتُ القعقاعِ يثبّتُ الجيشَ ويشجّعُه. الكلمةُ الطيّبةُ ترفعُ همّةَ الفريق.',en:'Al-Qa\u2019qa\u2019\u2019s voice steadied and encouraged the army. A good word lifts a team\u2019s spirit.'},
      apply:{ar:'أُشجّعُ أصحابي وأرفعُ معنويّاتِهم.',en:'I encourage my friends and lift their morale.'} },
    { icon:'🧭', color:'#7B2330', title:{ar:'دبِّرْ بحكمة',en:'Plan with wisdom'},
      body:{ar:'جمعَ القعقاعُ بين الشجاعةِ وحُسنِ التدبير. القوّةُ مع العقلِ تصنعُ النصر.',en:'Al-Qa\u2019qa\u2019 combined courage with clever planning. Strength with intellect brings victory.'},
      apply:{ar:'أُفكِّرُ وأُخطِّطُ قبلَ أن أُقدِم.',en:'I think and plan before I act.'} },
    { icon:'💪', color:'#9B3340', title:{ar:'اثبُتْ وقتَ الشدّة',en:'Stand firm in hardship'},
      body:{ar:'ظهرتْ بطولةُ القعقاعِ حين اشتدّ القتال. البطلُ يثبتُ حين يضعفُ غيرُه.',en:'Al-Qa\u2019qa\u2019\u2019s heroism showed when fighting grew fierce. A hero stands firm when others weaken.'},
      apply:{ar:'أثبُتُ على الحقِّ في الأوقاتِ الصعبة.',en:'I stand firm on the truth in hard times.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٤٩', en:'Al-Baqara 249' } },
    dua:{ ar:'اللّهُمَّ ارزقني شجاعةً وثباتاً وحُسنَ تدبيرٍ في الخير', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أكونُ شجاعاً في الحقِّ ثابتاً عليه.', en:'I am brave in the right and steadfast on it.' },
        { ar:'أرفعُ همّةَ من حولي بالكلمةِ الطيّبة.', en:'I lift the spirits of those around me with good words.' },
        { ar:'أُدبِّرُ بحكمةٍ وأثبُتُ وقتَ الشدّة.', en:'I plan with wisdom and stand firm in hardship.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا قال أبو بكرٍ عن القعقاع؟',en:'What did Abu Bakr say about al-Qa\u2019qa\u2019?'},
          options:[{ar:'صوتُه في الجيشِ خيرٌ من ألفِ رجل',en:'His voice in the army is better than a thousand men'},{ar:'إنّه ضعيف',en:'He is weak'},{ar:'إنّه جبان',en:'He is a coward'}], answer:0 },
        { q:{ar:'في أيِّ المعاركِ الكبرى كان للقعقاعِ أثر؟',en:'In which great battles did al-Qa\u2019qa\u2019 have an impact?'},
          options:[{ar:'اليرموكِ والقادسيّة',en:'Yarmouk and Qadisiyya'},{ar:'بدرٍ فقط',en:'Only Badr'},{ar:'لم يشهدْ معركة',en:'He never fought'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ القعقاعُ من الصفات؟',en:'What trait was al-Qa\u2019qa\u2019 famed for?'},
          options:[{ar:'الشجاعةِ ورفعِ همّةِ الجيش',en:'Courage and lifting army morale'},{ar:'البخل',en:'Stinginess'},{ar:'الكسل',en:'Laziness'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'قال أبو بكر: صوتُ القعقاعِ خيرٌ من ألفِ رجل.',en:'Abu Bakr said al-Qa\u2019qa\u2019\u2019s voice was worth a thousand men.'}, t:true },
        { statement:{ar:'شارك في فتوحِ العراقِ والشام.',en:'He fought in the conquests of Iraq and Sham.'}, t:true },
        { statement:{ar:'كان القعقاعُ جباناً يفرُّ من القتال.',en:'Al-Qa\u2019qa\u2019 was a coward who fled battle.'}, t:false },
        { statement:{ar:'كان يثبّتُ الجيشَ ويرفعُ معنويّاتِه.',en:'He steadied the army and lifted its morale.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'خيرٌ من ألفِ رجل',en:'Better than a thousand men'}, b:{ar:'قولُ أبي بكرٍ فيه',en:'Abu Bakr\u2019s words about him'} },
        { a:{ar:'القادسيّة',en:'Qadisiyya'}, b:{ar:'معركةٌ أبلى فيها',en:'A battle where he excelled'} },
        { a:{ar:'خالدُ بنُ الوليد',en:'Khalid ibn al-Walid'}, b:{ar:'قاتلَ معه في الفتوح',en:'He fought with him in the conquests'} },
        { a:{ar:'رفعُ الهمّة',en:'Lifting morale'}, b:{ar:'من صفاتِه',en:'One of his traits'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الشجاعةِ والثبات', en:'Medal of Courage & Steadfastness' },
    stickers:[
      { icon:'sword',  color:'#9B3340', title:{ar:'فارسُ الألف',en:'Knight of a Thousand'} },
      { icon:'shield', color:'#BB5360', title:{ar:'ثابتٌ في الشدّة',en:'Firm in Hardship'} },
      { icon:'star',   color:'#7B2330', title:{ar:'رافعُ الهمّة',en:'Lifter of Spirits'} },
      { icon:'light',  color:'#9B3340', title:{ar:'حُسنُ التدبير',en:'Clever Planning'} },
    ],
    moral:{ ar:'القعقاعُ قدوةٌ في الشجاعةِ والثباتِ ورفعِ الهمّةِ — فردٌ واحدٌ قد يكونُ خيراً من ألف.',
      en:'Al-Qa\u2019qa\u2019 is a model of courage, steadfastness, and inspiring others — one person can be worth a thousand.' },
    reflect:[
      { ar:'كان صوتُ القعقاعِ يرفعُ همّةَ الجيش. كيف تُشجّعُ من حولَك؟', en:'Al-Qa\u2019qa\u2019\u2019s voice lifted the army\u2019s spirit. How do you encourage those around you?' },
      { ar:'ظهرتْ بطولتُه وقتَ الشدّة. هل تثبُتُ حين تصعُبُ الأمور؟', en:'His heroism showed in hardship. Do you stand firm when things get hard?' },
    ],
  },
};
