// data/chapters/qutuz.js — Leaders · سيفُ الدينِ قطز (full chapter; Story tab uses data/stories/qutuz.js)
// Sources: البداية والنهاية · إسلام ويب · الدرر السنية · كتب التاريخ
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.qutuz = {
  id:'qutuz', era:'heroes', icon:'sword',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'سيفُ الدينِ قطز', en:'Sayfuddin Qutuz' },
  tag:{ ar:'بطلُ عينِ جالوت', en:'Hero of Ayn Jalut' },
  accent:'#5A3A1A', accent2:'#7A5A3A',
  greeting:{ ar:'أهلاً يا بطل! سيفُ الدينِ قطز رحمه الله بطلٌ أوقفَ زحفَ المغولِ الذي اجتاحَ العالم، وانتصرَ عليهم في معركةِ عينِ جالوتَ التاريخية. تعالَ نتعلّمْ من شجاعتِه وتضحيتِه.',
    en:'Hello, hero! Sayfuddin Qutuz, a hero who halted the Mongol advance that swept the world, defeating them at the historic Battle of Ayn Jalut. Come, let\'s learn from his courage and sacrifice.' },

  knowledge:{
    didYouKnow:{ ar:'كان المغولُ قد دمّروا بغدادَ وأرعبوا العالم، حتى قيلَ إنّهم لا يُهزَمون — فهزمهم قطز في عينِ جالوتَ سنةَ ٦٥٨هـ أوّلَ هزيمةٍ كبرى لهم!',
      en:'The Mongols had destroyed Baghdad and terrified the world — it was said they could not be defeated. But Qutuz defeated them at Ayn Jalut in 658 AH, their first great defeat!' },
    who:{ ar:'هو <b>سيفُ الدينِ قطز</b>، سلطانُ مصرَ من المماليك. جاءَ في زمنٍ عصيب: كان <b>المغولُ (التتار)</b> قد اجتاحوا العالمَ الإسلامي، ودمّروا <b>بغدادَ</b> وقتلوا أهلَها، وزحفوا نحوَ الشامِ ومصر، وأرعبوا الناسَ حتى ظنّوا أنّهم لا يُهزَمون. فوقفَ قطز بشجاعةٍ نادرة، ووحّدَ المسلمينَ وأعدَّ جيشاً، والتقى المغولَ في معركةِ <b>عينِ جالوت</b> سنةَ ٦٥٨هـ، فحقّقَ اللهُ على يدِه <b>أوّلَ هزيمةٍ كبرى للمغول</b> وأنقذَ العالمَ الإسلاميَّ من الدمار. كان مخلصاً شجاعاً، قال كلمتَه الشهيرة: «وا إسلاماه!». استُشهِدَ بعدَ النصرِ بقليل.',
      en:'He is <b>Sayfuddin Qutuz</b>, the Mamluk sultan of Egypt. He came in a dire time: the <b>Mongols (Tatars)</b> had swept the Muslim world, destroyed <b>Baghdad</b> and killed its people, advanced toward Sham and Egypt, and terrified people until they thought the Mongols could not be defeated. Qutuz stood with rare courage, united the Muslims, prepared an army, and met the Mongols at the Battle of <b>Ayn Jalut</b> in 658 AH, where Allah granted at his hands <b>the Mongols\u2019 first great defeat</b> and saved the Muslim world from destruction. He was sincere and brave, crying his famous words: "Wa Islamah!" (O Islam!). He was martyred shortly after the victory.' },
    facts:[
      { ar:'سلطانٌ مملوكيٌّ أوقفَ زحفَ المغول.', en:'A Mamluk sultan who halted the Mongol advance.' },
      { ar:'انتصرَ في عينِ جالوتَ سنةَ ٦٥٨هـ.', en:'He triumphed at Ayn Jalut in 658 AH.' },
      { ar:'حقّقَ أوّلَ هزيمةٍ كبرى للمغولِ في التاريخ.', en:'He inflicted the Mongols\u2019 first great defeat in history.' },
      { ar:'وحّدَ المسلمينَ وأنقذَ العالمَ الإسلاميَّ من الدمار.', en:'He united Muslims and saved the Muslim world from destruction.' },
      { ar:'قال كلمتَه الشهيرة: «وا إسلاماه!».', en:'He cried his famous words: "Wa Islamah!"' },
    ],
    timeline:[
      { when:{ar:'الخطر',en:'The Danger'}, what:{ar:'اجتاحَ المغولُ العالمَ ودمّروا بغداد.',en:'The Mongols swept the world and destroyed Baghdad.'} },
      { when:{ar:'القيادة',en:'Leadership'}, what:{ar:'تولّى قطز ووحّدَ المسلمينَ وأعدَّ جيشاً.',en:'Qutuz took power, united Muslims, and prepared an army.'} },
      { when:{ar:'عينُ جالوت',en:'Ayn Jalut'}, what:{ar:'التقى المغولَ في عينِ جالوت.',en:'He met the Mongols at Ayn Jalut.'} },
      { when:{ar:'النصر',en:'The Victory'}, what:{ar:'هزمهم أوّلَ هزيمةٍ كبرى لهم.',en:'He defeated them — their first great defeat.'} },
      { when:{ar:'الشهادة',en:'Martyrdom'}, what:{ar:'استُشهِدَ بعدَ النصرِ بقليل.',en:'He was martyred shortly after the victory.'} },
    ],
    ayah:{ ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ ﴾', ref:{ ar:'محمد ٧', en:'Muhammad 7' } },
  },

  story:[
    { title:{ ar:'بطلُ عينِ جالوت', en:'Hero of Ayn Jalut' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>سيفُ الدينِ قطز</b> سلطاناً شجاعاً جاءَ في زمنٍ اجتاحَ فيه المغولُ العالمَ ودمّروا بغداد. وقفَ قطز بشجاعةٍ ووحّدَ المسلمينَ، والتقى المغولَ في عينِ جالوتَ فهزمهم أوّلَ هزيمةٍ كبرى لهم، وأنقذَ العالمَ الإسلاميَّ من الدمار.',
          en:'<b>Sayfuddin Qutuz</b> was a brave sultan who came at a time when the Mongols swept the world and destroyed Baghdad. Qutuz stood with courage, united the Muslims, and met the Mongols at Ayn Jalut, defeating them — their first great defeat — and saving the Muslim world from destruction.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'التضحية', en:'Sacrifice' },
    { ar:'الإخلاص', en:'Sincerity' }, { ar:'العزيمة', en:'Resolve' },
  ],
  lessons:[
    { icon:'🦁', color:'#5A3A1A', title:{ar:'لا تخفِ القوّةَ الظاهرة',en:'Don\u2019t fear apparent power'},
      body:{ar:'وقفَ قطز للمغولِ الذين ظنَّ الناسُ أنّهم لا يُهزَمون. مَن توكّلَ على اللهِ لم يخفْ أحداً.',en:'Qutuz stood against the Mongols whom people thought invincible. Whoever relies on Allah fears no one.'},
      apply:{ar:'لا أخافُ التحدّياتِ الكبيرةَ وأتوكّلُ على الله.',en:'I do not fear big challenges and rely on Allah.'} },
    { icon:'🤝', color:'#7A5A3A', title:{ar:'وحِّدِ الصفَّ في الأزمات',en:'Unite ranks in crises'},
      body:{ar:'وحّدَ قطز المسلمينَ في وجهِ الخطرِ فانتصروا. الوحدةُ وقتَ الأزمةِ قوّةٌ تصنعُ النصر.',en:'Qutuz united the Muslims against the danger, so they won. Unity in crisis is a strength that brings victory.'},
      apply:{ar:'أتعاونُ مع غيري وقتَ الشدائد.',en:'I cooperate with others in times of hardship.'} },
    { icon:'❤️', color:'#4A2A0A', title:{ar:'ضحِّ من أجلِ الحق',en:'Sacrifice for the truth'},
      body:{ar:'قدّمَ قطز نفسَه وقالَ «وا إسلاماه» وضحّى حتى النصر. البطلُ يفدي ما يؤمنُ به.',en:'Qutuz offered himself, cried "Wa Islamah," and sacrificed until victory. A hero sacrifices for what he believes in.'},
      apply:{ar:'أُضحّي وأبذلُ جهدي لأجلِ الخير.',en:'I sacrifice and give my effort for the sake of good.'} },
    { icon:'🤲', color:'#5A3A1A', title:{ar:'انصرِ اللهَ ينصرْك',en:'Support Allah; He supports you'},
      body:{ar:'نصرَ قطز دينَ اللهِ فنصره اللهُ على عدوٍّ أقوى. مَن نصرَ الحقَّ أعانه الله.',en:'Qutuz supported Allah\u2019s religion, so Allah gave him victory over a stronger foe. Whoever supports the truth, Allah aids him.'},
      apply:{ar:'أنصرُ الحقَّ وأثقُ بنصرِ الله.',en:'I support the truth and trust in Allah\u2019s help.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ ﴾', ref:{ ar:'محمد ٧', en:'Muhammad 7' } },
    dua:{ ar:'اللّهُمَّ انصرنا على من عادانا واجعلنا من جندِك المخلصين', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'لا أخافُ التحدّياتِ وأتوكّلُ على الله.', en:'I don\u2019t fear challenges and rely on Allah.' },
        { ar:'أتعاونُ مع غيري وقتَ الشدائد.', en:'I cooperate with others in hardship.' },
        { ar:'أنصرُ الحقَّ وأُضحّي لأجلِه.', en:'I support the truth and sacrifice for it.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من هزمَ المغولَ في عينِ جالوت؟',en:'Who defeated the Mongols at Ayn Jalut?'},
          options:[{ar:'سيفُ الدينِ قطز',en:'Sayfuddin Qutuz'},{ar:'صلاحُ الدين',en:'Salahuddin'},{ar:'طارق',en:'Tariq'}], answer:0 },
        { q:{ar:'ماذا فعلَ المغولُ قبلَ عينِ جالوت؟',en:'What had the Mongols done before Ayn Jalut?'},
          options:[{ar:'دمّروا بغدادَ واجتاحوا العالم',en:'Destroyed Baghdad and swept the world'},{ar:'استسلموا',en:'Surrendered'},{ar:'أسلموا',en:'Embraced Islam'}], answer:0 },
        { q:{ar:'بأيِّ كلمةٍ اشتهرَ قطز في المعركة؟',en:'What famous words did Qutuz cry in the battle?'},
          options:[{ar:'وا إسلاماه!',en:'Wa Islamah! (O Islam!)'},{ar:'استسلموا',en:'Surrender!'},{ar:'اهربوا',en:'Flee!'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'قطز أوقفَ زحفَ المغولِ في عينِ جالوت.',en:'Qutuz halted the Mongol advance at Ayn Jalut.'}, t:true },
        { statement:{ar:'كانتْ أوّلَ هزيمةٍ كبرى للمغول.',en:'It was the Mongols\u2019 first great defeat.'}, t:true },
        { statement:{ar:'استسلمَ قطز للمغولِ خوفاً.',en:'Qutuz surrendered to the Mongols out of fear.'}, t:false },
        { statement:{ar:'وحّدَ المسلمينَ وأنقذَ العالمَ الإسلامي.',en:'He united the Muslims and saved the Muslim world.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'عينُ جالوت',en:'Ayn Jalut'}, b:{ar:'معركةُ هزيمةِ المغول',en:'Battle of the Mongols\u2019 defeat'} },
        { a:{ar:'المغول',en:'The Mongols'}, b:{ar:'دمّروا بغداد',en:'They destroyed Baghdad'} },
        { a:{ar:'وا إسلاماه',en:'Wa Islamah'}, b:{ar:'كلمةُ قطزَ الشهيرة',en:'Qutuz\u2019s famous cry'} },
        { a:{ar:'النصر',en:'The victory'}, b:{ar:'أنقذَ العالمَ الإسلامي',en:'It saved the Muslim world'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الشجاعةِ والإنقاذ', en:'Medal of Courage & Rescue' },
    stickers:[
      { icon:'sword', color:'#5A3A1A', title:{ar:'بطلُ عينِ جالوت',en:'Hero of Ayn Jalut'} },
      { icon:'shield',color:'#7A5A3A', title:{ar:'قاهرُ المغول',en:'Vanquisher of the Mongols'} },
      { icon:'star',  color:'#4A2A0A', title:{ar:'وا إسلاماه',en:'Wa Islamah'} },
      { icon:'crescent',color:'#5A3A1A', title:{ar:'منقذُ الأمّة',en:'Savior of the Nation'} },
    ],
    moral:{ ar:'سيفُ الدينِ قطز قدوةٌ في الشجاعةِ والتضحيةِ والإخلاص — وقفَ لأقوى عدوٍّ وأنقذَ الأمّةَ بنصرِ الله.',
      en:'Sayfuddin Qutuz is a model of courage, sacrifice, and sincerity — he stood against the mightiest foe and saved the nation by Allah\u2019s help.' },
    reflect:[
      { ar:'وقفَ قطز لعدوٍّ ظنَّ الناسُ أنّه لا يُهزَم. كيف تواجهُ التحدّياتِ الكبيرةَ بثقة؟', en:'Qutuz stood against a foe people thought invincible. How do you face big challenges with confidence?' },
      { ar:'وحّدَ المسلمينَ وقتَ الخطر. كيف تتعاونُ مع غيرِك في الأزمات؟', en:'He united the Muslims in danger. How do you cooperate with others in crises?' },
    ],
  },
};
