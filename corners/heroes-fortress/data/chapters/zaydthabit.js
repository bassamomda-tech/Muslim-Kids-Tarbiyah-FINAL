// data/chapters/zaydthabit.js — Heroes · زيدُ بنُ ثابت (full chapter; Story tab uses data/stories/zaydthabit.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.zaydthabit = {
  id:'zaydthabit', era:'heroes', icon:'pen',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'زيدُ بنُ ثابت', en:'Zayd ibn Thabit' },
  tag:{ ar:'كاتبُ الوحيِ وجامعُ القرآن', en:'Scribe of revelation, compiler of the Quran' },
  accent:'#1F6E78', accent2:'#3D8C96',
  greeting:{ ar:'أهلاً يا بطل! زيدُ بنُ ثابتٍ رضي الله عنه كاتبُ وحيِ النبيِّ ﷺ، الذي جمعَ القرآنَ في مصحفٍ واحد. كان شابّاً ذكيّاً يُحِبُّ العلم. تعالَ نتعلّمْ من علمِه وأمانتِه.',
    en:'Hello, hero! Zayd ibn Thabit, scribe of the Prophet\u2019s ﷺ revelation, who gathered the Quran into a single book. He was a clever young man who loved knowledge. Come, let\'s learn from his knowledge and trust.' },

  knowledge:{
    didYouKnow:{ ar:'كلّفه أبو بكرٍ بجمعِ القرآنِ بعدَ وفاةِ النبيِّ ﷺ، ثمّ كتبَ المصاحفَ في عهدِ عثمان — فحُفِظَ القرآنُ بأمانتِه.',
      en:'Abu Bakr charged him with gathering the Quran after the Prophet\u2019s ﷺ death, then he wrote the master copies in Uthman\u2019s era — so the Quran was preserved by his faithfulness.' },
    who:{ ar:'هو <b>زيدُ بنُ ثابت</b> الأنصاريُّ الخزرجي. أرادَ أن يخرجَ مع النبيِّ ﷺ في بدرٍ وهو صغيرٌ فرُدَّ لِصِغَرِه، فعوّضَ ذلك بالعلم. كان <b>ذكيّاً سريعَ الحفظِ</b>، فأمره النبيُّ ﷺ أن يتعلّمَ كتابةَ اليهود فتعلّمها في نحوِ نصفِ شهر! صار من <b>كُتّابِ الوحي</b> وأبرزَهم. وبعدَ وفاةِ النبيِّ ﷺ <b>جمعَ القرآنَ</b> بأمرِ أبي بكر، ثمّ نسخَ المصاحفَ في عهدِ عثمان. كان إمامَ الناسِ في <b>الفرائضِ (المواريث)</b> والقراءة.',
      en:'He is <b>Zayd ibn Thabit</b> al-Ansari al-Khazraji. He wished to join the Prophet ﷺ at Badr while still young but was turned back for his youth, so he made up for it with knowledge. He was <b>clever and quick to memorize</b>, so the Prophet ﷺ ordered him to learn the writing of the Jews, which he mastered in about half a month! He became one of the foremost <b>scribes of revelation</b>. After the Prophet\u2019s ﷺ death he <b>gathered the Quran</b> by Abu Bakr\u2019s command, then copied the master texts in Uthman\u2019s era. He was the leading authority in <b>inheritance law (fara\u2019id)</b> and recitation.' },
    facts:[
      { ar:'من أبرزِ كُتّابِ وحيِ النبيِّ ﷺ.', en:'Among the foremost scribes of the Prophet\u2019s ﷺ revelation.' },
      { ar:'تعلّمَ كتابةَ اليهودِ في نحوِ نصفِ شهر.', en:'He learned the writing of the Jews in about half a month.' },
      { ar:'جمعَ القرآنَ في مصحفٍ بأمرِ أبي بكر.', en:'He gathered the Quran into a book by Abu Bakr\u2019s command.' },
      { ar:'نسخَ المصاحفَ الموحّدةَ في عهدِ عثمان.', en:'He copied the unified master texts in Uthman\u2019s era.' },
      { ar:'كان أعلمَ الصحابةِ بالفرائضِ (المواريث).', en:'He was the most learned companion in inheritance law.' },
    ],
    timeline:[
      { when:{ar:'الصِّغَر',en:'His Youth'}, what:{ar:'رُدَّ عن بدرٍ لِصِغَرِه فأقبلَ على العلم.',en:'Turned back from Badr for his youth, he turned to knowledge.'} },
      { when:{ar:'اللغة',en:'Languages'}, what:{ar:'تعلّمَ كتابةَ اليهودِ بسرعةٍ بأمرِ النبيِّ ﷺ.',en:'He swiftly learned the Jews\u2019 writing at the Prophet\u2019s ﷺ command.'} },
      { when:{ar:'الوحي',en:'Revelation'}, what:{ar:'صار من كُتّابِ الوحيِ المقرّبين.',en:'He became a trusted scribe of revelation.'} },
      { when:{ar:'الجمع',en:'The Gathering'}, what:{ar:'جمعَ القرآنَ بأمرِ أبي بكر.',en:'He gathered the Quran by Abu Bakr\u2019s command.'} },
      { when:{ar:'المصاحف',en:'The Copies'}, what:{ar:'نسخَ المصاحفَ الموحّدةَ زمنَ عثمان.',en:'He copied the unified texts in Uthman\u2019s time.'} },
    ],
    ayah:{ ar:'﴿ إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ ﴾', ref:{ ar:'الحجر ٩', en:'Al-Hijr 9' } },
  },

  story:[
    { title:{ ar:'كاتبُ الوحيِ وجامعُ القرآن', en:'Scribe of Revelation, Compiler of the Quran' },
      pages:[
        { scene:'pen', text:{ ar:'كان <b>زيدُ بنُ ثابت</b> شابّاً ذكيّاً يُحِبُّ العلم، صار من كُتّابِ وحيِ النبيِّ ﷺ. تعلّمَ كتابةَ اليهودِ بسرعة، وجمعَ القرآنَ في مصحفٍ بأمرِ أبي بكر، ونسخَ المصاحفَ زمنَ عثمان، وكان أعلمَ الناسِ بالمواريث.',
          en:'<b>Zayd ibn Thabit</b> was a clever young man who loved knowledge and became a scribe of the Prophet\u2019s ﷺ revelation. He quickly learned the Jews\u2019 writing, gathered the Quran into a book by Abu Bakr\u2019s command, copied the master texts in Uthman\u2019s time, and was the most learned in inheritance.' } } ] }
  ],

  traits:[
    { ar:'العلم', en:'Knowledge' }, { ar:'الذكاء', en:'Cleverness' },
    { ar:'الأمانة', en:'Trustworthiness' }, { ar:'الإتقان', en:'Precision' },
  ],
  lessons:[
    { icon:'✍️', color:'#1F6E78', title:{ar:'اطلبِ العلمَ مهما صَغُرت',en:'Seek knowledge however young'},
      body:{ar:'رُدَّ زيدٌ عن القتالِ لِصِغَرِه فخدمَ الإسلامَ بالعلمِ والكتابة. لكلِّ موهبةٍ بابٌ للخير.',en:'Zayd was turned from fighting for his youth, so he served Islam with knowledge and writing. Every talent has a door to good.'},
      apply:{ar:'أخدمُ الخيرَ بما أُحسِنُه من علمٍ ومهارة.',en:'I serve good with the knowledge and skills I have.'} },
    { icon:'🌍', color:'#3D8C96', title:{ar:'تعلّمْ لغاتٍ ومهاراتٍ نافعة',en:'Learn useful languages & skills'},
      body:{ar:'تعلّمَ زيدٌ كتابةَ اليهودِ بسرعةٍ ليخدمَ النبيَّ ﷺ. تعلُّمُ المهاراتِ النافعةِ يرفعُ قدرَك.',en:'Zayd quickly learned the Jews\u2019 writing to serve the Prophet ﷺ. Learning useful skills raises your worth.'},
      apply:{ar:'أتعلّمُ مهاراتٍ نافعةً تنفعُ الناس.',en:'I learn useful skills that benefit people.'} },
    { icon:'📖', color:'#175860', title:{ar:'احفظِ الأمانةَ بإتقان',en:'Guard a trust with precision'},
      body:{ar:'حفظَ زيدٌ القرآنَ بجمعِه بدقّةٍ بالغة. الأمانةُ العظيمةُ تحتاجُ إتقاناً وحذراً.',en:'Zayd preserved the Quran by gathering it with utmost precision. A great trust needs care and exactness.'},
      apply:{ar:'أُتقِنُ عملي وأحرصُ على الدقّةِ فيه.',en:'I do my work with care and precision.'} },
    { icon:'⚖️', color:'#1F6E78', title:{ar:'تخصّصْ وأتقِنْ علمَك',en:'Specialize and master your field'},
      body:{ar:'صار زيدٌ أعلمَ الناسِ بالمواريث. التميّزُ في علمٍ نافعٍ خدمةٌ للأمّة.',en:'Zayd became the most learned in inheritance. Excelling in a useful field serves the whole community.'},
      apply:{ar:'أُتقِنُ مجالاً أنفعُ به نفسي وغيري.',en:'I master a field to benefit myself and others.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ ﴾', ref:{ ar:'الحجر ٩', en:'Al-Hijr 9' } },
    dua:{ ar:'رَّبِّ زِدْنِي عِلْمًا وارزقني الإتقانَ والأمانة', ref:{ ar:'طه ١١٤', en:'Ta-Ha 114' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أطلبُ العلمَ وأخدمُ به الخير.', en:'I seek knowledge and serve good with it.' },
        { ar:'أتعلّمُ المهاراتِ النافعةَ بجدّ.', en:'I diligently learn useful skills.' },
        { ar:'أُتقِنُ عملي وأحفظُ الأمانة.', en:'I master my work and guard every trust.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ عملٍ عظيمٍ كُلِّفَ زيدٌ بعدَ النبيِّ ﷺ؟',en:'What great task was Zayd charged with after the Prophet ﷺ?'},
          options:[{ar:'جمعُ القرآنِ في مصحف',en:'Gathering the Quran into a book'},{ar:'قيادةُ جيش',en:'Leading an army'},{ar:'بناءُ المسجد',en:'Building the mosque'}], answer:0 },
        { q:{ar:'ماذا تعلّمَ زيدٌ بأمرِ النبيِّ ﷺ؟',en:'What did Zayd learn at the Prophet\u2019s ﷺ command?'},
          options:[{ar:'كتابةَ اليهود',en:'The writing of the Jews'},{ar:'ركوبَ الخيل',en:'Horse-riding'},{ar:'التجارة',en:'Trade'}], answer:0 },
        { q:{ar:'بأيِّ علمٍ كان زيدٌ أعلمَ الصحابة؟',en:'In what knowledge was Zayd the most learned?'},
          options:[{ar:'الفرائضِ (المواريث)',en:'Inheritance law (fara\u2019id)'},{ar:'الطب',en:'Medicine'},{ar:'الفلك',en:'Astronomy'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'زيدُ بنُ ثابتٍ من كُتّابِ الوحي.',en:'Zayd ibn Thabit was a scribe of revelation.'}, t:true },
        { statement:{ar:'جمعَ القرآنَ في مصحفٍ بأمرِ أبي بكر.',en:'He gathered the Quran into a book by Abu Bakr\u2019s order.'}, t:true },
        { statement:{ar:'كان يكرهُ العلمَ والكتابة.',en:'He hated knowledge and writing.'}, t:false },
        { statement:{ar:'كان أعلمَ الصحابةِ بالمواريث.',en:'He was the most learned companion in inheritance.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'كاتبُ الوحي',en:'Scribe of revelation'}, b:{ar:'لقبُ زيد',en:'Zayd\u2019s title'} },
        { a:{ar:'أبو بكر',en:'Abu Bakr'}, b:{ar:'أمره بجمعِ القرآن',en:'Ordered him to gather the Quran'} },
        { a:{ar:'عثمان',en:'Uthman'}, b:{ar:'نسخَ له المصاحف',en:'He copied the master texts for him'} },
        { a:{ar:'الفرائض',en:'Inheritance'}, b:{ar:'كان أعلمَ الناسِ بها',en:'He was the most learned in it'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ والقلم', en:'Medal of Knowledge & the Pen' },
    stickers:[
      { icon:'pen',   color:'#1F6E78', title:{ar:'كاتبُ الوحي',en:'Scribe of Revelation'} },
      { icon:'book',  color:'#3D8C96', title:{ar:'جامعُ القرآن',en:'Compiler of the Quran'} },
      { icon:'light', color:'#175860', title:{ar:'سريعُ التعلّم',en:'The Swift Learner'} },
      { icon:'gem',   color:'#1F6E78', title:{ar:'عالمُ الفرائض',en:'Master of Inheritance'} },
    ],
    moral:{ ar:'زيدٌ قدوةٌ في العلمِ والذكاءِ والأمانةِ والإتقان — حفظَ اللهُ به كتابَه المجيد.',
      en:'Zayd is a model of knowledge, cleverness, trust, and precision — by him Allah preserved His glorious Book.' },
    reflect:[
      { ar:'خدمَ زيدٌ الإسلامَ بعلمِه وقلمِه. كيف تخدمُ الخيرَ بموهبتِك؟', en:'Zayd served Islam with his knowledge and pen. How do you serve good with your talent?' },
      { ar:'تعلّمَ مهاراتٍ نافعةً بسرعة. ما المهارةُ التي تحبُّ أن تُتقِنَها؟', en:'He quickly learned useful skills. What skill would you love to master?' },
    ],
  },
};
