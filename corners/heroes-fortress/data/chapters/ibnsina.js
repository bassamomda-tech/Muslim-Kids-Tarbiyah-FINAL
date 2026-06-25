// data/chapters/ibnsina.js — Scientists · ابن سينا (full chapter; Story tab uses data/stories/ibnsina.js)
// Sources: عيون الأنباء · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibnsina = {
  id:'ibnsina', era:'heroes', icon:'leaf',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'ابنُ سينا', en:'Ibn Sina' },
  tag:{ ar:'أميرُ الأطبّاء', en:'Prince of physicians' },
  accent:'#1E7A4A', accent2:'#3E9A6A',
  greeting:{ ar:'أهلاً يا بطل! ابنُ سينا رحمه الله أميرُ الأطبّاء، حفظَ القرآنَ صغيراً وصارَ طبيباً عظيماً، وكتابُه «القانون» دُرِّسَ في جامعاتِ العالمِ قروناً. تعالَ نتعلّمْ من ذكائِه واجتهادِه.',
    en:'Hello, hero! Ibn Sina, the prince of physicians, who memorized the Quran young and became a great doctor; his book "the Canon" was taught in the world\u2019s universities for centuries. Come, let\'s learn from his brilliance and diligence.' },

  knowledge:{
    didYouKnow:{ ar:'حفظَ ابنُ سينا القرآنَ الكريمَ وعمرُه عشرُ سنين، وصارَ طبيباً ماهراً وهو شابٌّ صغير، وكتابُه «القانون في الطب» دُرِّسَ في أوروبا أكثرَ من ستِّ مئةِ سنة!',
      en:'Ibn Sina memorized the Quran at age ten, became a skilled physician while a young man, and his book "the Canon of Medicine" was taught in Europe for over six hundred years!' },
    who:{ ar:'هو <b>الحسينُ بنُ عبدِ الله بنِ سينا</b>، عالمٌ مسلمٌ عبقريٌّ، يُلقَّبُ بـ<b>«أميرِ الأطبّاء»</b>. كان نادرَ الذكاءِ منذ صِغَرِه، <b>حفظَ القرآنَ الكريمَ وعمرُه عشرُ سنين</b>، ثمّ تعلّمَ الطبَّ والفلسفةَ والرياضياتِ حتى برعَ فيها وهو شابٌّ صغير. صارَ <b>طبيباً ماهراً</b> يُداوي الناسَ ويُعلِّمُ الطب. ألّفَ كتابَه العظيمَ <b>«القانونَ في الطب»</b>، وهو موسوعةٌ طبيّةٌ ظلّتْ تُدرَّسُ في جامعاتِ أوروبا والشرقِ أكثرَ من <b>ستِّ مئةِ سنة</b>! كان عالماً موسوعيّاً مجتهداً، نفعَ البشريّةَ بعلمِه في الطبِّ والعلوم. مثالٌ للنبوغِ المبكّرِ والعلمِ النافع.',
      en:'He is <b>al-Husayn ibn Abdullah ibn Sina</b>, a brilliant Muslim scholar titled <b>"the prince of physicians."</b> He was of rare intelligence from his youth, <b>memorizing the Quran at age ten</b>, then learning medicine, philosophy, and mathematics until he excelled in them while a young man. He became a <b>skilled physician</b> who treated people and taught medicine. He authored his great book <b>"the Canon of Medicine,"</b> a medical encyclopedia that continued to be taught in the universities of Europe and the East for over <b>six hundred years</b>! He was a diligent, encyclopedic scholar who benefited humanity with his knowledge in medicine and the sciences. A model of early genius and beneficial knowledge.' },
    facts:[
      { ar:'عالمٌ مسلمٌ يُلقَّبُ بأميرِ الأطبّاء.', en:'A Muslim scholar titled "the prince of physicians."' },
      { ar:'حفظَ القرآنَ وعمرُه عشرُ سنين.', en:'He memorized the Quran at age ten.' },
      { ar:'برعَ في الطبِّ وهو شابٌّ صغير.', en:'He excelled in medicine while a young man.' },
      { ar:'ألّفَ «القانونَ في الطب» الموسوعةَ الطبيّة.', en:'He authored "the Canon of Medicine," the medical encyclopedia.' },
      { ar:'دُرِّسَ كتابُه في أوروبا أكثرَ من ستِّ مئةِ سنة.', en:'His book was taught in Europe for over six hundred years.' },
    ],
    timeline:[
      { when:{ar:'الطفولة',en:'Childhood'}, what:{ar:'حفظَ القرآنَ وعمرُه عشرُ سنين بذكائِه.',en:'He memorized the Quran at ten with his brilliance.'} },
      { when:{ar:'طلبُ العلم',en:'Seeking Knowledge'}, what:{ar:'تعلّمَ الطبَّ والفلسفةَ والرياضياتِ صغيراً.',en:'He learned medicine, philosophy, and mathematics young.'} },
      { when:{ar:'الطب',en:'Medicine'}, what:{ar:'صارَ طبيباً ماهراً يُداوي ويُعلِّم.',en:'He became a skilled physician who treated and taught.'} },
      { when:{ar:'القانون',en:'The Canon'}, what:{ar:'ألّفَ «القانونَ في الطب».',en:'He authored "the Canon of Medicine."'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'دُرِّسَ كتابُه قروناً في العالم.',en:'His book was taught for centuries around the world.'} },
    ],
    ayah:{ ar:'﴿ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ ﴾', ref:{ ar:'الشعراء ٨٠', en:'Ash-Shu\u2019ara 80' } },
  },

  story:[
    { title:{ ar:'أميرُ الأطبّاء', en:'Prince of Physicians' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>ابنُ سينا</b> عالماً مسلماً عبقريّاً يُلقَّبُ بأميرِ الأطبّاء. حفظَ القرآنَ وعمرُه عشرُ سنين، وبرعَ في الطبِّ شابّاً صغيراً. ألّفَ «القانونَ في الطب» الذي دُرِّسَ في جامعاتِ العالمِ أكثرَ من ستِّ مئةِ سنة، فنفعَ البشريّةَ بعلمِه.',
          en:'<b>Ibn Sina</b> was a brilliant Muslim scholar titled "the prince of physicians." He memorized the Quran at age ten and excelled in medicine while a young man. He authored "the Canon of Medicine," taught in the world\u2019s universities for over six hundred years, benefiting humanity with his knowledge.' } } ] }
  ],

  traits:[
    { ar:'الذكاء', en:'Brilliance' }, { ar:'النبوغُ المبكّر', en:'Early genius' },
    { ar:'الاجتهاد', en:'Diligence' }, { ar:'نفعُ الناس', en:'Benefiting people' },
  ],
  lessons:[
    { icon:'📖', color:'#1E7A4A', title:{ar:'ابدأْ بالقرآنِ والعلمِ صغيراً',en:'Begin with the Quran and knowledge young'},
      body:{ar:'حفظَ ابنُ سينا القرآنَ وعمرُه عشرُ سنين ثمّ تعلّمَ العلوم. البدايةُ المبكّرةُ بالقرآنِ بركة.',en:'Ibn Sina memorized the Quran at ten then learned the sciences. An early start with the Quran is a blessing.'},
      apply:{ar:'أحفظُ القرآنَ وأطلبُ العلمَ من صِغَري.',en:'I memorize the Quran and seek knowledge from a young age.'} },
    { icon:'🩺', color:'#3E9A6A', title:{ar:'تعلّمْ ما ينفعُ الناس',en:'Learn what benefits people'},
      body:{ar:'تعلّمَ ابنُ سينا الطبَّ ليُداويَ المرضى وينفعَهم. مداواةُ الناسِ ونفعُهم عملٌ عظيم.',en:'Ibn Sina learned medicine to treat the sick and benefit them. Treating and benefiting people is a great deed.'},
      apply:{ar:'أتعلّمُ ما أنفعُ به نفسي والناس.',en:'I learn what I can use to benefit myself and people.'} },
    { icon:'🎯', color:'#156A3A', title:{ar:'اجتهدْ ولا تُضِعْ وقتَك',en:'Strive and don\u2019t waste your time'},
      body:{ar:'أفنى ابنُ سينا وقتَه في التعلّمِ والبحثِ فبرعَ صغيراً. الاجتهادُ المبكّرُ يصنعُ العظماء.',en:'Ibn Sina spent his time learning and researching, excelling young. Early diligence makes great people.'},
      apply:{ar:'أجتهدُ في تعلّمي ولا أُضيّعُ وقتي.',en:'I strive in my learning and don\u2019t waste my time.'} },
    { icon:'🤲', color:'#1E7A4A', title:{ar:'اعلمْ أنّ الشفاءَ من الله',en:'Know that healing is from Allah'},
      body:{ar:'الطبيبُ يُداوي والأخذُ بالأسبابِ مطلوب، لكنّ الشفاءَ بيدِ اللهِ وحدَه. نأخذُ بالدواءِ ونتوكّلُ على الله.',en:'A doctor treats and taking the means is required, but healing is in Allah\u2019s hands alone. We take the medicine and rely on Allah.'},
      apply:{ar:'آخذُ بالأسبابِ وأعلمُ أنّ الشفاءَ من الله.',en:'I take the means, knowing healing is from Allah.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ ﴾', ref:{ ar:'الشعراء ٨٠', en:'Ash-Shu\u2019ara 80' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ في صِغَري وبارِكْ لي فيه', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أحفظُ القرآنَ وأطلبُ العلمَ من صِغَري.', en:'I memorize the Quran and seek knowledge young.' },
        { ar:'أتعلّمُ ما أنفعُ به نفسي والناس.', en:'I learn what benefits myself and people.' },
        { ar:'أجتهدُ وأعلمُ أنّ الشفاءَ من الله.', en:'I strive, knowing healing is from Allah.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ ابنُ سينا؟',en:'What was Ibn Sina known as?'},
          options:[{ar:'أميرُ الأطبّاء',en:'Prince of physicians'},{ar:'أبو الجبر',en:'Father of algebra'},{ar:'أبو الكيمياء',en:'Father of chemistry'}], answer:0 },
        { q:{ar:'متى حفظَ ابنُ سينا القرآن؟',en:'When did Ibn Sina memorize the Quran?'},
          options:[{ar:'وعمرُه عشرُ سنين',en:'At age ten'},{ar:'شيخاً كبيراً',en:'As an old man'},{ar:'لم يحفظْه',en:'He never did'}], answer:0 },
        { q:{ar:'ما كتابُ ابنِ سينا المشهورُ في الطب؟',en:'What is Ibn Sina\u2019s famous book in medicine?'},
          options:[{ar:'القانونُ في الطب',en:'The Canon of Medicine'},{ar:'الجبر',en:'Algebra'},{ar:'المناظر',en:'Al-Manazir'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'ابنُ سينا يُلقَّبُ بأميرِ الأطبّاء.',en:'Ibn Sina is titled "the prince of physicians."'}, t:true },
        { statement:{ar:'حفظَ القرآنَ وهو صغيرٌ في العاشرة.',en:'He memorized the Quran while young, at ten.'}, t:true },
        { statement:{ar:'لم يكنْ يعرفُ الطبَّ شيئاً.',en:'He knew nothing of medicine.'}, t:false },
        { statement:{ar:'دُرِّسَ كتابُه «القانون» قروناً في العالم.',en:'His book "the Canon" was taught for centuries worldwide.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أميرُ الأطبّاء',en:'Prince of physicians'}, b:{ar:'لقبُ ابنِ سينا',en:'Ibn Sina\u2019s title'} },
        { a:{ar:'القانونُ في الطب',en:'The Canon of Medicine'}, b:{ar:'كتابُه المشهور',en:'His famous book'} },
        { a:{ar:'العاشرة',en:'Age ten'}, b:{ar:'حفظَ فيها القرآن',en:'He memorized the Quran then'} },
        { a:{ar:'الطب',en:'Medicine'}, b:{ar:'برعَ فيه شابّاً',en:'He excelled in it as a youth'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الطبِّ والنبوغ', en:'Medal of Medicine & Genius' },
    stickers:[
      { icon:'leaf',  color:'#1E7A4A', title:{ar:'أميرُ الأطبّاء',en:'Prince of Physicians'} },
      { icon:'book',  color:'#3E9A6A', title:{ar:'صاحبُ القانون',en:'Author of the Canon'} },
      { icon:'light', color:'#156A3A', title:{ar:'النابغةُ الصغير',en:'The Young Prodigy'} },
      { icon:'star',  color:'#1E7A4A', title:{ar:'حافظُ القرآنِ صغيراً',en:'Memorized the Quran Young'} },
    ],
    moral:{ ar:'ابنُ سينا قدوةٌ في النبوغِ المبكّرِ والاجتهادِ ونفعِ الناس — بدأَ بالقرآنِ صغيراً فبارَكَ اللهُ في علمِه ونفعِه للبشرية.',
      en:'Ibn Sina is a model of early genius, diligence, and benefiting people — he began with the Quran young, so Allah blessed his knowledge and benefit to humanity.' },
    reflect:[
      { ar:'حفظَ ابنُ سينا القرآنَ وتعلّمَ العلومَ صغيراً. كيف تستغلُّ صِغَرَك في التعلّم؟', en:'Ibn Sina memorized the Quran and learned sciences young. How do you use your youth in learning?' },
      { ar:'تعلّمَ الطبَّ لينفعَ المرضى. ما العلمُ الذي تتعلّمُه لتنفعَ به الناس؟', en:'He learned medicine to benefit the sick. What knowledge do you learn to benefit people?' },
    ],
  },
};
