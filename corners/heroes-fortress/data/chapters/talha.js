// data/chapters/talha.js — Heroes · طلحةُ بنُ عبيد الله (full chapter; Story tab uses data/stories/talha.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.talha = {
  id:'talha', era:'heroes', icon:'sword',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'طلحةُ بنُ عبيد الله', en:'Talha ibn Ubaydillah' },
  tag:{ ar:'طلحةُ الخيرِ والجود', en:'Talha of goodness & generosity' },
  accent:'#B23A48', accent2:'#CE5A67',
  greeting:{ ar:'أهلاً يا بطل! طلحةُ بنُ عبيد الله رضي الله عنه أحدُ العشرةِ المبشّرينَ بالجنّة، حمى النبيَّ ﷺ بجسدِه يومَ أُحُد، وكان كريماً سخيّاً حتى لُقِّبَ «طلحةَ الخير». تعالَ نتعلّمْ من شجاعتِه وجودِه.',
    en:'Hello, hero! Talha ibn Ubaydillah, one of the Ten Promised Paradise, shielded the Prophet ﷺ with his body at Uhud and was so generous he was called "Talha of goodness." Come, let\'s learn from his courage and generosity.' },

  knowledge:{
    didYouKnow:{ ar:'يومَ أُحُدٍ وقى طلحةُ النبيَّ ﷺ بيدِه حتى شُلَّت، فقال النبيُّ ﷺ: «أوجبَ طلحة» — أي وجبتْ له الجنّة.',
      en:'At Uhud, Talha shielded the Prophet ﷺ with his hand until it was paralyzed, so the Prophet ﷺ said: "Talha has earned it" — meaning Paradise became due for him.' },
    who:{ ar:'هو <b>طلحةُ بنُ عبيد الله</b> التيميُّ القُرشي، أحدُ <b>العشرةِ المبشّرينَ بالجنّة</b>، ومن <b>السابقينَ الأوّلين</b> الذين أسلموا على يدِ أبي بكرٍ الصدّيق. كان تاجراً غنيّاً <b>كريماً سخيّاً</b> حتى لُقِّبَ «طلحةَ الخير» و«طلحةَ الجود». يومَ أُحُدٍ ثبتَ مع النبيِّ ﷺ ووقاه بجسدِه ويدِه، فأصابه أكثرُ من سبعينَ جرحاً وشُلَّتْ يدُه. سمّاه النبيُّ ﷺ يومَئذٍ «الشهيدَ الحيَّ يمشي على الأرض».',
      en:'He is <b>Talha ibn Ubaydillah</b> of the Taym clan of Quraysh, one of the <b>Ten Promised Paradise</b>, and among the <b>earliest believers</b> who embraced Islam through Abu Bakr as-Siddiq. He was a wealthy, <b>generous</b> merchant — so giving he was called "Talha of goodness" and "Talha of bounty." At Uhud he stood firm with the Prophet ﷺ and shielded him with his body and hand, taking over seventy wounds, and his hand was paralyzed. The Prophet ﷺ called him that day "a living martyr walking the earth."' },
    facts:[
      { ar:'أحدُ العشرةِ المبشّرينَ بالجنّة.', en:'One of the Ten Promised Paradise.' },
      { ar:'من السابقينَ الأوّلين، أسلمَ على يدِ أبي بكر.', en:'Among the earliest believers; embraced Islam via Abu Bakr.' },
      { ar:'وقى النبيَّ ﷺ بيدِه يومَ أُحُدٍ حتى شُلَّت.', en:'Shielded the Prophet ﷺ with his hand at Uhud until it was paralyzed.' },
      { ar:'لُقِّبَ «طلحةَ الخير» و«طلحةَ الجود» لكرمِه.', en:'Called "Talha of goodness" and "of bounty" for his generosity.' },
      { ar:'دعا له النبيُّ ﷺ بأنّه «أوجبَ» الجنّة.', en:'The Prophet ﷺ declared that he had "earned" Paradise.' },
    ],
    timeline:[
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ من الأوائلِ على يدِ أبي بكر.',en:'Embraced Islam early, through Abu Bakr.'} },
      { when:{ar:'الجود',en:'Generosity'}, what:{ar:'تاجرٌ غنيٌّ ينفقُ مالَه فلُقِّبَ طلحةَ الخير.',en:'A wealthy merchant who gave freely — called Talha of goodness.'} },
      { when:{ar:'أُحُد',en:'Uhud'}, what:{ar:'وقى النبيَّ ﷺ بجسدِه فأصابه سبعونَ جرحاً.',en:'Shielded the Prophet ﷺ, taking seventy wounds.'} },
      { when:{ar:'البشارة',en:'Glad Tidings'}, what:{ar:'سمّاه النبيُّ ﷺ الشهيدَ الحيَّ وأوجبَ له الجنّة.',en:'The Prophet ﷺ named him the living martyr.'} },
      { when:{ar:'العشرة',en:'The Ten'}, what:{ar:'من العشرةِ المبشّرينَ بالجنّة.',en:'Among the Ten Promised Paradise.'} },
    ],
    ayah:{ ar:'﴿ مِّنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ﴾', ref:{ ar:'الأحزاب ٢٣', en:'Al-Ahzab 23' } },
  },

  story:[
    { title:{ ar:'طلحةُ الخير', en:'Talha of Goodness' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>طلحةُ</b> من العشرةِ المبشّرينَ بالجنّة، تاجراً كريماً سخيّاً. يومَ أُحُدٍ وقى النبيَّ ﷺ بجسدِه ويدِه حتى شُلَّت، فدعا له النبيُّ ﷺ وأوجبَ له الجنّة.',
          en:'<b>Talha</b> was one of the Ten Promised Paradise, a generous merchant. At Uhud he shielded the Prophet ﷺ with his body and hand until it was paralyzed, so the Prophet ﷺ prayed for him and declared Paradise due for him.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'الجود', en:'Generosity' },
    { ar:'الفداء', en:'Sacrifice' }, { ar:'الثبات', en:'Steadfastness' },
  ],
  lessons:[
    { icon:'🛡️', color:'#B23A48', title:{ar:'الفداءُ في نصرةِ الحق',en:'Sacrifice in supporting truth'},
      body:{ar:'وقى طلحةُ النبيَّ ﷺ بيدِه حتى شُلَّت. البطلُ يفدي مَن يحبُّ ويحمي الحقَّ ولو غلا الثمن.',en:'Talha shielded the Prophet ﷺ with his hand until it was paralyzed. A hero sacrifices for whom he loves and protects truth whatever the cost.'},
      apply:{ar:'أدافعُ عن الحقِّ وأحمي مَن يحتاجُني.',en:'I defend the truth and protect those who need me.'} },
    { icon:'🎁', color:'#CE5A67', title:{ar:'الجودُ والكرم',en:'Bounty and generosity'},
      body:{ar:'لُقِّبَ طلحةُ الخيرِ لكثرةِ عطائِه. الكريمُ يُنفِقُ مالَه في الخيرِ ولا يبخلُ على المحتاجين.',en:'Talha was called "of goodness" for his abundant giving. The generous spend their wealth in good and never withhold from the needy.'},
      apply:{ar:'أُشارِكُ ما عندي وأُعطي المحتاجين.',en:'I share what I have and give to those in need.'} },
    { icon:'💪', color:'#922A38', title:{ar:'الثباتُ وقتَ الشدّة',en:'Steadfastness in hardship'},
      body:{ar:'ثبتَ طلحةُ يومَ أُحُدٍ حين فرَّ كثيرون. الثباتُ عندَ الشدائدِ علامةُ الإيمانِ الصادق.',en:'Talha stood firm at Uhud when many fled. Steadfastness in hardship is a sign of sincere faith.'},
      apply:{ar:'أثبُتُ على الخيرِ ولو صعُبَ الأمر.',en:'I stay firm on good even when it is hard.'} },
    { icon:'❤️', color:'#B23A48', title:{ar:'حبُّ النبيِّ ﷺ',en:'Love of the Prophet ﷺ'},
      body:{ar:'قدّمَ طلحةُ نفسَه فداءً للنبيِّ ﷺ من شدّةِ حبِّه. حبُّ النبيِّ ﷺ يظهرُ في العملِ والتضحية.',en:'Talha offered himself for the Prophet ﷺ out of deep love. Love of the Prophet ﷺ shows in action and sacrifice.'},
      apply:{ar:'أُحِبُّ النبيَّ ﷺ وأتّبعُ سنّتَه.',en:'I love the Prophet ﷺ and follow his way.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ﴾', ref:{ ar:'الأحزاب ٢٣', en:'Al-Ahzab 23' } },
    dua:{ ar:'اللّهُمَّ اجعلني جواداً كريماً ثابتاً على الحق', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أفدي الحقَّ وأحمي مَن يحتاجُني.', en:'I sacrifice for truth and protect the needy.' },
        { ar:'أكونُ جواداً كريماً في الخير.', en:'I am generous and giving in good.' },
        { ar:'أثبُتُ ولا أفرُّ وقتَ الشدّة.', en:'I stand firm and do not flee in hardship.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بِمَ اشتهرَ طلحةُ يومَ أُحُد؟',en:'What was Talha known for at Uhud?'},
          options:[{ar:'وقى النبيَّ ﷺ بجسدِه حتى شُلَّتْ يدُه',en:'Shielded the Prophet ﷺ until his hand was paralyzed'},{ar:'قادَ الجيش',en:'Led the army'},{ar:'أذّنَ للصلاة',en:'Called the adhan'}], answer:0 },
        { q:{ar:'بأيِّ لقبٍ عُرِفَ طلحةُ لكرمِه؟',en:'What title did Talha earn for his generosity?'},
          options:[{ar:'طلحةُ الخير',en:'Talha of goodness'},{ar:'الفاروق',en:'al-Faruq'},{ar:'ذو النورين',en:'the Possessor of Two Lights'}], answer:0 },
        { q:{ar:'من أيِّ الصحابةِ كان طلحة؟',en:'Among which companions was Talha?'},
          options:[{ar:'العشرةِ المبشّرينَ بالجنّة',en:'The Ten Promised Paradise'},{ar:'التابعين',en:'The successors'},{ar:'الأنصارِ فقط',en:'Only the Ansar'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'طلحةُ أحدُ العشرةِ المبشّرينَ بالجنّة.',en:'Talha is one of the Ten Promised Paradise.'}, t:true },
        { statement:{ar:'فرَّ طلحةُ وتركَ النبيَّ ﷺ يومَ أُحُد.',en:'Talha fled and left the Prophet ﷺ at Uhud.'}, t:false },
        { statement:{ar:'لُقِّبَ طلحةُ بطلحةِ الخيرِ لجودِه.',en:'Talha was called "Talha of goodness" for his bounty.'}, t:true },
        { statement:{ar:'كان طلحةُ بخيلاً جباناً.',en:'Talha was stingy and cowardly.'}, t:false },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'طلحةُ الخير',en:'Talha of goodness'}, b:{ar:'لقبُه لكرمِه',en:'His title for generosity'} },
        { a:{ar:'أُحُد',en:'Uhud'}, b:{ar:'وقى النبيَّ ﷺ بيدِه',en:'Shielded the Prophet ﷺ with his hand'} },
        { a:{ar:'العشرة',en:'The Ten'}, b:{ar:'المبشّرونَ بالجنّة',en:'Promised Paradise'} },
        { a:{ar:'أوجبَ طلحة',en:'"Talha earned it"'}, b:{ar:'وجبتْ له الجنّة',en:'Paradise became due for him'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفداء', en:'Medal of Sacrifice' },
    stickers:[
      { icon:'shield', color:'#B23A48', title:{ar:'دِرعُ النبيِّ ﷺ',en:"The Prophet's ﷺ Shield"} },
      { icon:'heart',  color:'#CE5A67', title:{ar:'طلحةُ الخير',en:'Talha of Goodness'} },
      { icon:'star',   color:'#922A38', title:{ar:'من العشرة',en:'Of the Ten'} },
      { icon:'gem',    color:'#B23A48', title:{ar:'الجوادُ الكريم',en:'The Generous Giver'} },
    ],
    moral:{ ar:'طلحةُ قدوةٌ في الفداءِ والجودِ والثبات — حمى النبيَّ ﷺ بنفسِه وبذلَ مالَه في الخير.',
      en:'Talha is a model of sacrifice, generosity, and steadfastness — he protected the Prophet ﷺ with himself and gave his wealth for good.' },
    reflect:[
      { ar:'وقى طلحةُ النبيَّ ﷺ بيدِه. كيف تُضحّي من أجلِ مَن تحبُّ وتحمي الحقَّ؟', en:'Talha shielded the Prophet ﷺ with his hand. How do you sacrifice for whom you love and protect the truth?' },
      { ar:'كان جواداً كريماً. هل تُشارِكُ ما عندَك مع المحتاجين؟', en:'He was generous. Do you share what you have with the needy?' },
    ],
  },
};
