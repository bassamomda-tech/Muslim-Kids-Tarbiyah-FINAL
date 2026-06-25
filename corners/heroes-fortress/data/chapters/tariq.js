// data/chapters/tariq.js — Leaders · طارقُ بنُ زياد (full chapter; Story tab uses data/stories/tariq.js)
// Sources: البداية والنهاية · نفح الطيب · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.tariq = {
  id:'tariq', era:'heroes', icon:'sword',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'طارقُ بنُ زياد', en:'Tariq ibn Ziyad' },
  tag:{ ar:'فاتحُ الأندلس', en:'Conqueror of Andalusia' },
  accent:'#8A4A2A', accent2:'#AA6A4A',
  greeting:{ ar:'أهلاً يا بطل! طارقُ بنُ زيادٍ رحمه الله قائدٌ شجاعٌ فتحَ الأندلس، وألقى خطبتَه الشهيرةَ التي ألهبتْ حماسَ جنودِه. تعالَ نتعلّمْ من شجاعتِه وعزيمتِه.',
    en:'Hello, hero! Tariq ibn Ziyad, a brave commander who conquered Andalusia and delivered his famous speech that ignited his soldiers\u2019 zeal. Come, let\'s learn from his courage and resolve.' },

  knowledge:{
    didYouKnow:{ ar:'يُنسَبُ إلى طارقِ بنِ زيادٍ جبلُ طارق (جبل طارق) الذي عبرَ منه إلى الأندلس، ولا يزالُ يحملُ اسمَه إلى اليوم!',
      en:'The Rock of Gibraltar (Jabal Tariq) — from which he crossed into Andalusia — is named after Tariq ibn Ziyad, and still bears his name today!' },
    who:{ ar:'هو <b>طارقُ بنُ زياد</b>، قائدٌ من البربرِ المسلمين، فتحَ <b>الأندلس</b> (إسبانيا والبرتغال) سنةَ ٩٢هـ بأمرِ القائدِ موسى بنِ نُصير. عبرَ البحرَ بجيشٍ صغيرٍ (نحوَ سبعةِ آلاف) لمواجهةِ جيشِ القوطِ الضخمِ (نحوَ مئةِ ألف)! لمّا نزلَ بجنودِه، يُروى أنّه <b>أحرقَ السفنَ</b> أو رمى بها وراءه ليقطعَ طريقَ التراجع، ثمّ ألقى <b>خطبتَه الشهيرة</b>: «أيّها الناسُ، أين المفرّ؟ البحرُ من ورائِكم والعدوُّ أمامَكم!». فانتصرَ المسلمونَ في معركةِ <b>وادي لكّة</b>، وفُتِحتِ الأندلسُ التي بقيتْ منارةً للإسلامِ والحضارةِ قروناً.',
      en:'He is <b>Tariq ibn Ziyad</b>, a commander of the Muslim Berbers, who conquered <b>Andalusia</b> (Spain and Portugal) in 92 AH by order of the commander Musa ibn Nusayr. He crossed the sea with a small army (about seven thousand) to face the vast Visigoth army (about a hundred thousand)! When he landed with his soldiers, it is reported he <b>burned the ships</b> (or cast them behind) to cut off the path of retreat, then delivered his <b>famous speech</b>: "O people, where is the escape? The sea is behind you and the enemy before you!" The Muslims won at the Battle of <b>Guadalete</b>, and Andalusia was opened, remaining a beacon of Islam and civilization for centuries.' },
    facts:[
      { ar:'قائدٌ بربريٌّ مسلمٌ فتحَ الأندلس.', en:'A Muslim Berber commander who conquered Andalusia.' },
      { ar:'عبرَ بجيشٍ صغيرٍ لمواجهةِ جيشٍ ضخم.', en:'He crossed with a small army to face a vast one.' },
      { ar:'أحرقَ السفنَ ليقطعَ طريقَ التراجع.', en:'He burned the ships to cut off retreat.' },
      { ar:'ألقى خطبتَه الشهيرةَ التي ألهبتِ الحماس.', en:'He gave his famous speech that ignited zeal.' },
      { ar:'جبلُ طارقٍ سُمِّيَ باسمِه إلى اليوم.', en:'The Rock of Gibraltar is named after him to this day.' },
    ],
    timeline:[
      { when:{ar:'العبور',en:'The Crossing'}, what:{ar:'عبرَ البحرَ إلى الأندلسِ بجيشٍ صغير.',en:'He crossed the sea to Andalusia with a small army.'} },
      { when:{ar:'الإصرار',en:'Resolve'}, what:{ar:'أحرقَ السفنَ ليقطعَ التراجع.',en:'He burned the ships to cut off retreat.'} },
      { when:{ar:'الخطبة',en:'The Speech'}, what:{ar:'ألقى خطبتَه التي ألهبتِ الحماس.',en:'He gave his speech that ignited zeal.'} },
      { when:{ar:'المعركة',en:'The Battle'}, what:{ar:'انتصرَ في وادي لكّةَ على القوط.',en:'He won at Guadalete over the Visigoths.'} },
      { when:{ar:'الفتح',en:'The Conquest'}, what:{ar:'فُتِحتِ الأندلسُ منارةً للإسلام.',en:'Andalusia was opened as a beacon of Islam.'} },
    ],
    ayah:{ ar:'﴿ كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٤٩', en:'Al-Baqara 249' } },
  },

  story:[
    { title:{ ar:'فاتحُ الأندلس', en:'Conqueror of Andalusia' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>طارقُ بنُ زياد</b> قائداً شجاعاً فتحَ الأندلسَ بجيشٍ صغيرٍ أمامَ جيشٍ ضخم. أحرقَ السفنَ ليقطعَ التراجع، وألقى خطبتَه الشهيرةَ التي ألهبتِ الحماس، فانتصرَ المسلمونَ وفُتِحتِ الأندلس. وجبلُ طارقٍ يحملُ اسمَه إلى اليوم.',
          en:'<b>Tariq ibn Ziyad</b> was a brave commander who conquered Andalusia with a small army against a vast one. He burned the ships to cut off retreat, gave his famous speech that ignited zeal, and the Muslims won and Andalusia was opened. The Rock of Gibraltar bears his name to this day.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'العزيمة', en:'Resolve' },
    { ar:'القيادة', en:'Leadership' }, { ar:'التوكّل', en:'Reliance on Allah' },
  ],
  lessons:[
    { icon:'🔥', color:'#8A4A2A', title:{ar:'لا تتراجعْ عن الحق',en:'Do not retreat from the truth'},
      body:{ar:'أحرقَ طارقٌ السفنَ ليقطعَ طريقَ التراجع. حين تعزمُ على الخيرِ امضِ ولا تتردّد.',en:'Tariq burned the ships to cut off retreat. When you resolve on good, proceed without hesitation.'},
      apply:{ar:'إذا عزمتُ على الخيرِ مضيتُ بلا تردّد.',en:'When I resolve on good, I proceed without hesitation.'} },
    { icon:'📣', color:'#AA6A4A', title:{ar:'الكلمةُ تُلهِبُ الهمم',en:'A word ignites resolve'},
      body:{ar:'ألهبَ طارقٌ حماسَ جنودِه بخطبةٍ قويّة. الكلمةُ الصادقةُ تُحرِّكُ القلوبَ وترفعُ الهمم.',en:'Tariq ignited his soldiers\u2019 zeal with a powerful speech. A sincere word moves hearts and raises resolve.'},
      apply:{ar:'أُشجّعُ من حولي بالكلمةِ الطيّبةِ القويّة.',en:'I encourage those around me with good, strong words.'} },
    { icon:'🤲', color:'#6A3A1A', title:{ar:'توكّلْ على الله',en:'Rely on Allah'},
      body:{ar:'واجهَ طارقٌ جيشاً أضعافَ جيشِه متوكّلاً على الله، فنصره. كم من فئةٍ قليلةٍ غلبتْ كثيرةً بإذنِ الله.',en:'Tariq faced an army many times his own, relying on Allah, and was given victory. How many a small group overcame a large one by Allah\u2019s leave.'},
      apply:{ar:'أعملُ بأسبابي وأتوكّلُ على الله.',en:'I take my means and rely on Allah.'} },
    { icon:'🦁', color:'#8A4A2A', title:{ar:'الشجاعةُ في الإقدام',en:'Courage in advancing'},
      body:{ar:'أقدمَ طارقٌ بشجاعةٍ رغمَ قلّةِ جيشِه. البطلُ يُقدِمُ على الصعابِ بثقةٍ وعزيمة.',en:'Tariq advanced bravely despite his small army. A hero faces difficulties with confidence and resolve.'},
      apply:{ar:'أُقدِمُ على التحدّياتِ بشجاعةٍ وثقة.',en:'I face challenges with courage and confidence.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٤٩', en:'Al-Baqara 249' } },
    dua:{ ar:'اللّهُمَّ ارزقني الشجاعةَ والعزيمةَ والتوكّلَ عليك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'إذا عزمتُ على الخيرِ مضيتُ بلا تردّد.', en:'When I resolve on good, I proceed without hesitation.' },
        { ar:'أُشجّعُ من حولي بالكلمةِ القويّة.', en:'I encourage those around me with strong words.' },
        { ar:'أعملُ بأسبابي وأتوكّلُ على الله.', en:'I take my means and rely on Allah.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا فتحَ طارقُ بنُ زياد؟',en:'What did Tariq ibn Ziyad conquer?'},
          options:[{ar:'الأندلس',en:'Andalusia'},{ar:'القسطنطينية',en:'Constantinople'},{ar:'مصر',en:'Egypt'}], answer:0 },
        { q:{ar:'لماذا أحرقَ طارقٌ السفن؟',en:'Why did Tariq burn the ships?'},
          options:[{ar:'ليقطعَ طريقَ التراجع',en:'To cut off the path of retreat'},{ar:'بالخطأ',en:'By mistake'},{ar:'ليبردَ بها',en:'To stay warm'}], answer:0 },
        { q:{ar:'ما الذي سُمِّيَ باسمِ طارقٍ إلى اليوم؟',en:'What is named after Tariq to this day?'},
          options:[{ar:'جبلُ طارق',en:'The Rock of Gibraltar'},{ar:'نهرُ النيل',en:'The Nile'},{ar:'جبلُ أُحُد',en:'Mount Uhud'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'طارقُ بنُ زيادٍ فتحَ الأندلس.',en:'Tariq ibn Ziyad conquered Andalusia.'}, t:true },
        { statement:{ar:'واجهَ جيشاً أكبرَ من جيشِه بكثير.',en:'He faced an army far larger than his own.'}, t:true },
        { statement:{ar:'فرَّ طارقٌ من المعركة.',en:'Tariq fled the battle.'}, t:false },
        { statement:{ar:'جبلُ طارقٍ يحملُ اسمَه إلى اليوم.',en:'The Rock of Gibraltar bears his name to this day.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الأندلس',en:'Andalusia'}, b:{ar:'فتحها طارق',en:'Tariq conquered it'} },
        { a:{ar:'السفن',en:'The ships'}, b:{ar:'أحرقها ليقطعَ التراجع',en:'He burned them to cut off retreat'} },
        { a:{ar:'وادي لكّة',en:'Guadalete'}, b:{ar:'معركةُ النصر',en:'The battle of victory'} },
        { a:{ar:'جبلُ طارق',en:'Gibraltar'}, b:{ar:'سُمِّيَ باسمِه',en:'Named after him'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفتحِ والعزيمة', en:'Medal of Conquest & Resolve' },
    stickers:[
      { icon:'sword', color:'#8A4A2A', title:{ar:'فاتحُ الأندلس',en:'Conqueror of Andalusia'} },
      { icon:'compass',color:'#AA6A4A', title:{ar:'جبلُ طارق',en:'The Rock of Tariq'} },
      { icon:'light', color:'#6A3A1A', title:{ar:'الخطبةُ المُلهِبة',en:'The Igniting Speech'} },
      { icon:'star',  color:'#8A4A2A', title:{ar:'فئةٌ قليلةٌ غلبتْ كثيرة',en:'A Few Overcame Many'} },
    ],
    moral:{ ar:'طارقٌ قدوةٌ في الشجاعةِ والعزيمةِ والتوكّل — فتحَ الأندلسَ بجيشٍ قليلٍ متوكّلاً على الله.',
      en:'Tariq is a model of courage, resolve, and reliance — he conquered Andalusia with a small army, relying on Allah.' },
    reflect:[
      { ar:'أحرقَ طارقٌ سفنَه ليمضيَ بلا تراجع. كيف تعزمُ على هدفِك بلا تردّد؟', en:'Tariq burned his ships to proceed without retreat. How do you resolve on your goal without hesitation?' },
      { ar:'واجهَ جيشاً أكبرَ متوكّلاً على الله. كيف تواجهُ التحدّياتِ الكبيرةَ بثقة؟', en:'He faced a larger army relying on Allah. How do you face big challenges with confidence?' },
    ],
  },
};
