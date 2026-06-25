// data/chapters/nusayba.js — Heroes · نسيبةُ بنتُ كعب (أمُّ عمارة) (full chapter; Story tab uses data/stories/nusayba.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nusayba = {
  id:'nusayba', era:'heroes', icon:'shield',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'نسيبةُ بنتُ كعب', en:'Nusayba bint Ka\u2019b' },
  tag:{ ar:'المجاهدةُ التي دافعتْ عن النبيِّ ﷺ', en:'The warrior who defended the Prophet ﷺ' },
  accent:'#8A3A3A', accent2:'#AA5A5A',
  greeting:{ ar:'أهلاً يا بطل! نسيبةُ بنتُ كعبٍ (أمُّ عمارة) رضي الله عنها امرأةٌ شجاعةٌ دافعتْ عن النبيِّ ﷺ بنفسِها يومَ أُحُدٍ حين فرَّ كثيرون. تعالَ نتعلّمْ من شجاعتِها وفدائِها.',
    en:'Hello, hero! Nusayba bint Ka\u2019b (Umm Ammara), a brave woman who defended the Prophet ﷺ with her own body at Uhud when many fled. Come, let\'s learn from her courage and sacrifice.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ يومَ أُحُد: «ما التفتُّ يميناً ولا شمالاً إلّا وأنا أراها تُقاتِلُ دوني» — يعني نسيبةَ بنتَ كعب.',
      en:'On the day of Uhud the Prophet ﷺ said: "I did not turn right or left but I saw her fighting in my defense" — meaning Nusayba bint Ka\u2019b.' },
    who:{ ar:'هي <b>نسيبةُ بنتُ كعب</b> الأنصاريّة، المعروفةُ بـ<b>أمِّ عمارة</b>. شهِدتْ <b>بيعةَ العقبة</b>، وخرجتْ يومَ <b>أُحُد</b> تسقي الجرحى وتداوي المصابين. فلمّا اشتدّ القتالُ وانكشفَ المسلمونَ عن النبيِّ ﷺ، <b>ثبتتْ نسيبةُ تُدافِعُ عنه بالسيفِ والقوس</b> حتى أصابها أكثرُ من اثنَي عشرَ جرحاً! حمتِ النبيَّ ﷺ بجسدِها، فأثنى عليها وعلى مكانتِها. شاركتْ بعدَ ذلك في عدّةِ مشاهدَ ومعاركَ منها <b>اليمامةُ</b> ضدَّ مسيلمةَ الكذّاب، فكانت من أشجعِ نساءِ الإسلام.',
      en:'She is <b>Nusayba bint Ka\u2019b</b> al-Ansariyya, known as <b>Umm Ammara</b>. She witnessed the <b>Pledge of Aqaba</b>, and went out on the day of <b>Uhud</b> giving water to the wounded and tending the injured. When the fighting intensified and the Muslims were drawn away from the Prophet ﷺ, <b>Nusayba stood firm defending him with sword and bow</b> until she took more than twelve wounds! She shielded the Prophet ﷺ with her body, and he praised her and her standing. She later took part in several battles, including <b>Yamama</b> against Musaylima the liar, becoming one of the bravest women of Islam.' },
    facts:[
      { ar:'دافعتْ عن النبيِّ ﷺ بنفسِها يومَ أُحُد.', en:'She defended the Prophet ﷺ with her own body at Uhud.' },
      { ar:'أصابها أكثرُ من اثنَي عشرَ جرحاً وهي تحميه.', en:'She took over twelve wounds while protecting him.' },
      { ar:'شهِدتْ بيعةَ العقبةِ وعدّةَ مشاهد.', en:'She witnessed the Pledge of Aqaba and several battles.' },
      { ar:'أثنى عليها النبيُّ ﷺ وذكرَ مكانتَها.', en:'The Prophet ﷺ praised her and her standing.' },
      { ar:'قاتلتْ في اليمامةِ ضدَّ مسيلمةَ الكذّاب.', en:'She fought at Yamama against Musaylima the liar.' },
    ],
    timeline:[
      { when:{ar:'العقبة',en:'Aqaba'}, what:{ar:'شهِدتْ بيعةَ العقبةِ من النساء.',en:'She witnessed the Pledge of Aqaba among the women.'} },
      { when:{ar:'أُحُد',en:'Uhud'}, what:{ar:'دافعتْ عن النبيِّ ﷺ وجُرِحتْ كثيراً.',en:'She defended the Prophet ﷺ and was badly wounded.'} },
      { when:{ar:'الثناء',en:'The Praise'}, what:{ar:'أثنى النبيُّ ﷺ على ثباتِها.',en:'The Prophet ﷺ praised her steadfastness.'} },
      { when:{ar:'المشاهد',en:'The Battles'}, what:{ar:'شاركتْ في عدّةِ غزواتٍ بعدها.',en:'She took part in several later battles.'} },
      { when:{ar:'اليمامة',en:'Yamama'}, what:{ar:'قاتلتْ ضدَّ مسيلمةَ الكذّاب.',en:'She fought against Musaylima the liar.'} },
    ],
    ayah:{ ar:'﴿ إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ ... أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا ﴾', ref:{ ar:'الأحزاب ٣٥', en:'Al-Ahzab 35' } },
  },

  story:[
    { title:{ ar:'المجاهدةُ المدافعة', en:'The Defending Warrior' },
      pages:[
        { scene:'peaks', text:{ ar:'كانت <b>نسيبةُ بنتُ كعب (أمُّ عمارة)</b> امرأةً شجاعة. خرجتْ يومَ أُحُدٍ تسقي الجرحى، فلمّا انكشفَ المسلمونَ عن النبيِّ ﷺ ثبتتْ تُدافِعُ عنه بالسيفِ والقوسِ حتى أصابها أكثرُ من اثنَي عشرَ جرحاً. أثنى عليها النبيُّ ﷺ، وقاتلتْ في اليمامةِ بعدها.',
          en:'<b>Nusayba bint Ka\u2019b (Umm Ammara)</b> was a brave woman. She went out at Uhud giving water to the wounded; when the Muslims were drawn away from the Prophet ﷺ she stood firm defending him with sword and bow until she took over twelve wounds. The Prophet ﷺ praised her, and she later fought at Yamama.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'الفداء', en:'Sacrifice' },
    { ar:'الثبات', en:'Steadfastness' }, { ar:'النصرة', en:'Devotion' },
  ],
  lessons:[
    { icon:'🛡️', color:'#8A3A3A', title:{ar:'دافعْ عن الحق',en:'Defend the truth'},
      body:{ar:'دافعتْ نسيبةُ عن النبيِّ ﷺ بنفسِها وهي امرأة. الدفاعُ عن الحقِّ شرفٌ للرجالِ والنساء.',en:'Nusayba defended the Prophet ﷺ with her own body, though a woman. Defending the truth is an honor for men and women.'},
      apply:{ar:'أدافعُ عن الحقِّ وعمّن يحتاجُني.',en:'I defend the truth and those who need me.'} },
    { icon:'💪', color:'#AA5A5A', title:{ar:'اثبُتْ حين يفرُّ غيرُك',en:'Stand firm when others flee'},
      body:{ar:'ثبتتْ نسيبةُ يومَ أُحُدٍ حين فرَّ كثيرون. الثباتُ وقتَ الشدّةِ علامةُ البطولة.',en:'Nusayba stood firm at Uhud when many fled. Steadfastness in hardship is a mark of heroism.'},
      apply:{ar:'أثبُتُ على الخيرِ ولو تخلّى غيري.',en:'I stand firm on good even if others give up.'} },
    { icon:'🤲', color:'#6A2A2A', title:{ar:'اخدمْ وأعِنِ المحتاج',en:'Serve and aid the needy'},
      body:{ar:'خرجتْ نسيبةُ تسقي الجرحى وتداويهم. خدمةُ المحتاجينَ عملٌ عظيمٌ عند الله.',en:'Nusayba went out to give water to and treat the wounded. Serving the needy is a great deed before Allah.'},
      apply:{ar:'أُساعدُ المرضى والمحتاجينَ بما أستطيع.',en:'I help the sick and needy with what I can.'} },
    { icon:'❤️', color:'#8A3A3A', title:{ar:'الفداءُ في المحبّة',en:'Sacrifice out of love'},
      body:{ar:'قدّمتْ نسيبةُ جسدَها فداءً للنبيِّ ﷺ من حبِّها له. الحبُّ الصادقُ يظهرُ في التضحية.',en:'Nusayba offered her body for the Prophet ﷺ out of love. True love shows in sacrifice.'},
      apply:{ar:'أُضحّي من أجلِ من أُحِبُّ ومن أجلِ الخير.',en:'I sacrifice for those I love and for what is good.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ ... أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا ﴾', ref:{ ar:'الأحزاب ٣٥', en:'Al-Ahzab 35' } },
    dua:{ ar:'اللّهُمَّ ارزقني شجاعةً في الحقِّ وثباتاً وفداءً في سبيلِك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أدافعُ عن الحقِّ وعمّن يحتاجُني.', en:'I defend the truth and those who need me.' },
        { ar:'أثبُتُ على الخيرِ ولو فرَّ غيري.', en:'I stand firm on good even if others flee.' },
        { ar:'أخدمُ المحتاجينَ وأُضحّي في المحبّة.', en:'I serve the needy and sacrifice out of love.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من دافعتْ عن النبيِّ ﷺ بنفسِها يومَ أُحُد؟',en:'Who defended the Prophet ﷺ with her own body at Uhud?'},
          options:[{ar:'نسيبةُ بنتُ كعب (أمُّ عمارة)',en:'Nusayba bint Ka\u2019b (Umm Ammara)'},{ar:'خديجة',en:'Khadija'},{ar:'سميّة',en:'Sumayya'}], answer:0 },
        { q:{ar:'لماذا خرجتْ نسيبةُ أوّلاً يومَ أُحُد؟',en:'Why did Nusayba first go out at Uhud?'},
          options:[{ar:'لتسقيَ الجرحى وتداويَهم',en:'To give water to and treat the wounded'},{ar:'للتجارة',en:'For trade'},{ar:'للنزهة',en:'For an outing'}], answer:0 },
        { q:{ar:'بماذا وصفها النبيُّ ﷺ يومَ أُحُد؟',en:'How did the Prophet ﷺ describe her at Uhud?'},
          options:[{ar:'رآها تُقاتِلُ دونه يميناً وشمالاً',en:'He saw her fighting in his defense right and left'},{ar:'أنّها فرّت',en:'That she fled'},{ar:'أنّها اختبأت',en:'That she hid'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'دافعتْ نسيبةُ عن النبيِّ ﷺ يومَ أُحُد.',en:'Nusayba defended the Prophet ﷺ at Uhud.'}, t:true },
        { statement:{ar:'أصابها جروحٌ كثيرةٌ وهي تحميه.',en:'She took many wounds while protecting him.'}, t:true },
        { statement:{ar:'فرّتْ نسيبةُ وتركتِ النبيَّ ﷺ.',en:'Nusayba fled and abandoned the Prophet ﷺ.'}, t:false },
        { statement:{ar:'قاتلتْ في اليمامةِ ضدَّ مسيلمة.',en:'She fought at Yamama against Musaylima.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أمُّ عمارة',en:'Umm Ammara'}, b:{ar:'كنيةُ نسيبة',en:'Nusayba\u2019s nickname'} },
        { a:{ar:'أُحُد',en:'Uhud'}, b:{ar:'دافعتْ فيها عن النبيِّ ﷺ',en:'She defended the Prophet ﷺ there'} },
        { a:{ar:'العقبة',en:'Aqaba'}, b:{ar:'شهِدتْ بيعتَها',en:'She witnessed its pledge'} },
        { a:{ar:'اليمامة',en:'Yamama'}, b:{ar:'قاتلتْ فيها ضدَّ مسيلمة',en:'She fought there against Musaylima'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الشجاعةِ والفداء', en:'Medal of Courage & Sacrifice' },
    stickers:[
      { icon:'shield', color:'#8A3A3A', title:{ar:'مدافعةُ أُحُد',en:'Defender of Uhud'} },
      { icon:'heart',  color:'#AA5A5A', title:{ar:'الفداءُ بالنفس',en:'Sacrifice of Self'} },
      { icon:'sword',  color:'#6A2A2A', title:{ar:'المجاهدةُ الثابتة',en:'The Steadfast Warrior'} },
      { icon:'star',   color:'#8A3A3A', title:{ar:'ثناءُ النبيِّ ﷺ',en:'The Prophet\u2019s ﷺ Praise'} },
    ],
    moral:{ ar:'نسيبةُ قدوةٌ في الشجاعةِ والفداءِ والثبات — دافعتْ عن النبيِّ ﷺ بنفسِها حين فرَّ غيرُها.',
      en:'Nusayba is a model of courage, sacrifice, and steadfastness — she defended the Prophet ﷺ with her own body when others fled.' },
    reflect:[
      { ar:'ثبتتْ نسيبةُ ودافعتْ عن النبيِّ ﷺ. هل تثبُتُ على الحقِّ وقتَ الشدّة؟', en:'Nusayba stood firm and defended the Prophet ﷺ. Do you stand firm on the truth in hardship?' },
      { ar:'خرجتْ تخدمُ الجرحى وتُضحّي. كيف تُساعدُ المحتاجينَ وتُضحّي للخير؟', en:'She went out to serve the wounded and sacrifice. How do you help the needy and sacrifice for good?' },
    ],
  },
};
