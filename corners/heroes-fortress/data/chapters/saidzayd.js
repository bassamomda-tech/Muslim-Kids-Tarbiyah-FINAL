// data/chapters/saidzayd.js — Heroes · سعيدُ بنُ زيد (full chapter; Story tab uses data/stories/saidzayd.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.saidzayd = {
  id:'saidzayd', era:'heroes', icon:'leaf',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'سعيدُ بنُ زيد', en:'Sa\u2019id ibn Zayd' },
  tag:{ ar:'من السابقينَ المستجابِ دعوتُه', en:'An early believer whose prayers were answered' },
  accent:'#A8742A', accent2:'#C5944A',
  greeting:{ ar:'أهلاً يا بطل! سعيدُ بنُ زيدٍ رضي الله عنه أحدُ العشرةِ المبشّرينَ بالجنّة، ومن السابقينَ الأوّلين، وفي بيتِه لانَ قلبُ عمرَ للإسلام. تعالَ نتعلّمْ من إيمانِه وصدقِه.',
    en:'Hello, hero! Sa\u2019id ibn Zayd, one of the Ten Promised Paradise, among the earliest believers — and in his home Umar\'s heart was softened to Islam. Come, let\'s learn from his faith and truthfulness.' },

  knowledge:{
    didYouKnow:{ ar:'في بيتِ سعيدِ بنِ زيدٍ وزوجتِه فاطمةَ (أختِ عمر) سمِعَ عمرُ بنُ الخطّابِ القرآنَ أوّلَ مرّة، فكان ذلك بدايةَ إسلامِه.',
      en:'In the home of Sa\u2019id ibn Zayd and his wife Fatima (Umar\'s sister), Umar ibn al-Khattab heard the Quran for the first time — and that was the start of his Islam.' },
    who:{ ar:'هو <b>سعيدُ بنُ زيدِ بنِ عمرِو بنِ نُفَيل</b> العَدَويُّ القُرشي، أحدُ <b>العشرةِ المبشّرينَ بالجنّة</b>، ومن <b>السابقينَ الأوّلين</b>. أبوه <b>زيدُ بنُ عمرو</b> كان موحِّداً يرفضُ عبادةَ الأصنامِ قبلَ الإسلام. تزوّجَ سعيدٌ <b>فاطمةَ بنتَ الخطّاب</b> أختَ عمر، وفي بيتِهما لانَ قلبُ عمرَ للإسلام. شهِدَ المشاهدَ كلَّها إلّا بدراً، وكان <b>مستجابَ الدعوة</b> صادقاً تقيّاً.',
      en:'He is <b>Sa\u2019id ibn Zayd ibn Amr ibn Nufayl</b> of the Adi clan of Quraysh, one of the <b>Ten Promised Paradise</b>, and among the <b>earliest believers</b>. His father <b>Zayd ibn Amr</b> rejected idol worship and worshipped Allah alone before Islam came. Sa\u2019id married <b>Fatima bint al-Khattab</b>, Umar\'s sister, and in their home Umar\'s heart was softened to Islam. He fought in all the battles except Badr, and was <b>one whose prayers were answered</b>, truthful and pious.' },
    facts:[
      { ar:'أحدُ العشرةِ المبشّرينَ بالجنّة.', en:'One of the Ten Promised Paradise.' },
      { ar:'من السابقينَ الأوّلين إلى الإسلام.', en:'Among the very earliest to embrace Islam.' },
      { ar:'أبوه زيدٌ كان موحِّداً يرفضُ الأصنامَ قبلَ البعثة.', en:'His father Zayd rejected idols and worshipped Allah before the message.' },
      { ar:'في بيتِه أسلمَ عمرُ بنُ الخطّاب.', en:'In his home Umar ibn al-Khattab embraced Islam.' },
      { ar:'كان مستجابَ الدعوةِ صادقاً تقيّاً.', en:'His prayers were answered; he was truthful and pious.' },
    ],
    timeline:[
      { when:{ar:'أبوه',en:'His Father'}, what:{ar:'زيدٌ موحِّدٌ يرفضُ الأصنامَ قبلَ الإسلام.',en:'Zayd worshipped Allah alone, rejecting idols.'} },
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ من السابقينَ الأوّلين.',en:'Among the very first to believe.'} },
      { when:{ar:'إسلامُ عمر',en:"Umar's Islam"}, what:{ar:'في بيتِه سمِعَ عمرُ القرآنَ فأسلم.',en:'In his home Umar heard the Quran and believed.'} },
      { when:{ar:'الجهاد',en:'The Struggle'}, what:{ar:'شهِدَ المشاهدَ كلَّها إلّا بدراً.',en:'Fought in all battles except Badr.'} },
      { when:{ar:'الدعوة',en:'His Prayers'}, what:{ar:'كان مستجابَ الدعوةِ من العشرة.',en:'His prayers were answered; one of the Ten.'} },
    ],
    ayah:{ ar:'﴿ إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا ﴾', ref:{ ar:'فصلت ٣٠', en:'Fussilat 30' } },
  },

  story:[
    { title:{ ar:'البيتُ الذي أضاءَ قلبَ عمر', en:'The Home That Lit Umar\'s Heart' },
      pages:[
        { scene:'madinah', text:{ ar:'كان <b>سعيدُ بنُ زيد</b> من العشرةِ المبشّرينَ بالجنّة، ومن السابقينَ الأوّلين. تزوّجَ فاطمةَ أختَ عمر، وفي بيتِهما سمِعَ عمرُ القرآنَ فلانَ قلبُه وأسلم. كان سعيدٌ صادقاً تقيّاً مستجابَ الدعوة.',
          en:'<b>Sa\u2019id ibn Zayd</b> was one of the Ten Promised Paradise and among the earliest believers. He married Umar\'s sister Fatima, and in their home Umar heard the Quran, his heart softened, and he embraced Islam. Sa\u2019id was truthful, pious, and his prayers were answered.' } } ] }
  ],

  traits:[
    { ar:'الإيمانُ المبكّر', en:'Early faith' }, { ar:'الصدق', en:'Truthfulness' },
    { ar:'الثبات', en:'Steadfastness' }, { ar:'التقوى', en:'Piety' },
  ],
  lessons:[
    { icon:'📖', color:'#A8742A', title:{ar:'القرآنُ يُلِينُ القلوب',en:'The Quran softens hearts'},
      body:{ar:'في بيتِ سعيدٍ سمِعَ عمرُ القرآنَ فتحوّلَ من عدوٍّ إلى مؤمن. كلامُ اللهِ يُغيّرُ أقسى القلوب.',en:'In Sa\u2019id\'s home Umar heard the Quran and turned from an enemy into a believer. Allah\'s words change the hardest hearts.'},
      apply:{ar:'أقرأُ القرآنَ وأتدبّرُ معانيَه.',en:'I read the Quran and reflect on its meanings.'} },
    { icon:'🌱', color:'#C5944A', title:{ar:'السبقُ إلى الخير',en:'Racing to the good'},
      body:{ar:'كان سعيدٌ من السابقينَ الأوّلين للإسلام. البطلُ يبادرُ إلى الخيرِ ولا ينتظرُ غيرَه.',en:'Sa\u2019id was among the first to Islam. A hero races to good and does not wait for others.'},
      apply:{ar:'أُسارِعُ إلى كلِّ عملٍ صالح.',en:'I hasten to every good deed.'} },
    { icon:'💯', color:'#8C5E20', title:{ar:'الصدقُ يحفظُك',en:'Truthfulness protects you'},
      body:{ar:'حين اتُّهِمَ سعيدٌ ظُلماً دعا ربَّه فاستجابَ له، لأنّه كان صادقاً. الصادقُ ينصرُه الله.',en:'When Sa\u2019id was wrongly accused he called his Lord and was answered, because he was truthful. Allah supports the honest.'},
      apply:{ar:'أقولُ الصدقَ وأثقُ أنّ اللهَ ينصرُ المظلوم.',en:'I tell the truth and trust Allah supports the wronged.'} },
    { icon:'🤲', color:'#A8742A', title:{ar:'اللجوءُ إلى الله',en:'Turning to Allah'},
      body:{ar:'لمّا ظُلِمَ سعيدٌ لم ينتقمْ بنفسِه بل لجأَ إلى الله بالدعاء. المؤمنُ يرفعُ أمرَه إلى ربِّه.',en:'When wronged, Sa\u2019id did not avenge himself but turned to Allah in supplication. The believer raises his affair to his Lord.'},
      apply:{ar:'إذا ظُلِمتُ ألجأُ إلى اللهِ بالدعاء.',en:'When wronged, I turn to Allah in du\'a.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا ﴾', ref:{ ar:'فصلت ٣٠', en:'Fussilat 30' } },
    dua:{ ar:'اللّهُمَّ ثبِّتني على الحقِّ واجعلني من السابقينَ إلى الخير', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُحِبُّ القرآنَ وأتدبّرُ آياتِه.', en:'I love the Quran and ponder its verses.' },
        { ar:'أُسارِعُ إلى الخيرِ ولا أتأخّر.', en:'I race to good and do not delay.' },
        { ar:'أصدُقُ وألجأُ إلى اللهِ إن ظُلِمت.', en:'I am truthful and turn to Allah if wronged.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'في بيتِ مَن سمِعَ عمرُ القرآنَ فأسلم؟',en:'In whose home did Umar hear the Quran and embrace Islam?'},
          options:[{ar:'سعيدِ بنِ زيدٍ وزوجتِه فاطمة',en:'Sa\u2019id ibn Zayd and his wife Fatima'},{ar:'أبي جهل',en:'Abu Jahl'},{ar:'أبي لهب',en:'Abu Lahab'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ أبوه زيدُ بنُ عمرو؟',en:'What was his father Zayd ibn Amr known for?'},
          options:[{ar:'رفضِ الأصنامِ وعبادةِ اللهِ وحدَه',en:'Rejecting idols and worshipping Allah alone'},{ar:'التجارة',en:'Trade'},{ar:'الشعر',en:'Poetry'}], answer:0 },
        { q:{ar:'من أيِّ الصحابةِ كان سعيد؟',en:'Among which companions was Sa\u2019id?'},
          options:[{ar:'العشرةِ المبشّرينَ بالجنّة',en:'The Ten Promised Paradise'},{ar:'التابعين',en:'The successors'},{ar:'المنافقين',en:'The hypocrites'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'سعيدُ بنُ زيدٍ أحدُ العشرةِ المبشّرينَ بالجنّة.',en:'Sa\u2019id ibn Zayd is one of the Ten Promised Paradise.'}, t:true },
        { statement:{ar:'في بيتِه أسلمَ عمرُ بنُ الخطّاب.',en:'In his home Umar embraced Islam.'}, t:true },
        { statement:{ar:'كان سعيدٌ من آخرِ من أسلم.',en:'Sa\u2019id was among the last to embrace Islam.'}, t:false },
        { statement:{ar:'كان سعيدٌ مستجابَ الدعوة.',en:'Sa\u2019id\'s prayers were answered.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'فاطمة',en:'Fatima'}, b:{ar:'زوجتُه أختُ عمر',en:'His wife, Umar\'s sister'} },
        { a:{ar:'زيدُ بنُ عمرو',en:'Zayd ibn Amr'}, b:{ar:'أبوه الموحِّد',en:'His monotheist father'} },
        { a:{ar:'القرآن',en:'The Quran'}, b:{ar:'لانَ به قلبُ عمر',en:'Softened Umar\'s heart'} },
        { a:{ar:'العشرة',en:'The Ten'}, b:{ar:'المبشّرونَ بالجنّة',en:'Promised Paradise'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ السبقِ والصدق', en:'Medal of Precedence & Truth' },
    stickers:[
      { icon:'book',  color:'#A8742A', title:{ar:'صفحةُ القرآن',en:'The Page of Quran'} },
      { icon:'leaf',  color:'#C5944A', title:{ar:'من السابقين',en:'Of the Early Ones'} },
      { icon:'star',  color:'#8C5E20', title:{ar:'من العشرة',en:'Of the Ten'} },
      { icon:'light', color:'#A8742A', title:{ar:'مستجابُ الدعوة',en:'Answered in Prayer'} },
    ],
    moral:{ ar:'سعيدٌ قدوةٌ في السبقِ إلى الإيمانِ والصدقِ والثبات — وبيتُه كان سبباً في هدايةِ عمر.',
      en:'Sa\u2019id is a model of racing to faith, truthfulness, and steadfastness — his home was a cause of Umar\'s guidance.' },
    reflect:[
      { ar:'لانَ قلبُ عمرَ حين سمِعَ القرآن. متى لمستْ آيةٌ قلبَك؟', en:'Umar\'s heart softened when he heard the Quran. When has a verse touched your heart?' },
      { ar:'كان سعيدٌ صادقاً فنصرَه الله. هل تثقُ أنّ اللهَ ينصرُ الصادقين؟', en:'Sa\u2019id was truthful, so Allah supported him. Do you trust that Allah supports the honest?' },
    ],
  },
};
