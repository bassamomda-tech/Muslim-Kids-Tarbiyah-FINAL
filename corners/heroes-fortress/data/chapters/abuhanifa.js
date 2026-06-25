// data/chapters/abuhanifa.js — Scholars · أبو حنيفة (full chapter; Story tab uses data/stories/abuhanifa.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.abuhanifa = {
  id:'abuhanifa', era:'heroes', icon:'gem',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أبو حنيفةَ النعمان', en:'Abu Hanifa' },
  tag:{ ar:'الإمامُ الأعظم', en:'The Great Imam' },
  accent:'#6A4A8A', accent2:'#8A6AAA',
  greeting:{ ar:'أهلاً يا بطل! أبو حنيفةَ النعمانُ رحمه الله إمامٌ عظيمٌ في الفقه، عُرِفَ بذكائِه العجيبِ وورعِه وكرمِه، وهو أوّلُ الأئمّةِ الأربعة. تعالَ نتعلّمْ من علمِه وأمانتِه.',
    en:'Hello, hero! Abu Hanifa, a great imam of jurisprudence, known for his amazing intelligence, piety, and generosity — the first of the four imams. Come, let\'s learn from his knowledge and trustworthiness.' },

  knowledge:{
    didYouKnow:{ ar:'كان أبو حنيفةَ تاجراً أميناً وعالماً ذكيّاً، يتصدّقُ بأرباحِه على الفقراءِ وطلّابِ العلم، ويُصلّي الليلَ ويُكثِرُ من قراءةِ القرآن.',
      en:'Abu Hanifa was an honest merchant and brilliant scholar who gave his profits in charity to the poor and students, prayed at night, and recited much Quran.' },
    who:{ ar:'هو <b>النعمانُ بنُ ثابت</b>، المعروفُ بـ<b>أبي حنيفة</b>، أوّلُ الأئمّةِ الأربعةِ وصاحبُ <b>المذهبِ الحنفي</b>. كان <b>تاجراً أميناً</b> وعالماً عظيمَ الذكاء، اشتهرَ بقوّةِ فهمِه وحُسنِ استنباطِه للأحكام. جمعَ حولَه طلّابَ العلمِ وأسّسَ مدرسةً فقهيّةً عظيمة. كان <b>ورعاً تقيّاً كريماً</b>، يتصدّقُ بمالِه على الفقراءِ وطلّابِ العلم، ويُكثِرُ من الصلاةِ وقراءةِ القرآنِ بالليل. ابتُلِيَ فرفضَ أن يتولّى القضاءَ خوفاً من الظلم، فسُجِنَ وصبرَ. مذهبُه اليومَ يتبعُه ملايينُ المسلمينَ حولَ العالم.',
      en:'He is <b>an-Nu\u2019man ibn Thabit</b>, known as <b>Abu Hanifa</b>, the first of the four imams and founder of the <b>Hanafi school</b>. He was an <b>honest merchant</b> and a scholar of great intelligence, famed for the strength of his understanding and excellence in deriving rulings. He gathered students around him and founded a great school of jurisprudence. He was <b>pious, God-fearing, and generous</b>, giving his wealth in charity to the poor and students, and praying and reciting much Quran at night. When tested, he refused to take the post of judge for fear of injustice, so he was imprisoned and was patient. His school today is followed by millions of Muslims around the world.' },
    facts:[
      { ar:'أوّلُ الأئمّةِ الأربعةِ وصاحبُ المذهبِ الحنفي.', en:'The first of the four imams and founder of the Hanafi school.' },
      { ar:'تاجرٌ أمينٌ وعالمٌ عظيمُ الذكاء.', en:'An honest merchant and a scholar of great intelligence.' },
      { ar:'ورعٌ كريمٌ يتصدّقُ على الفقراءِ وطلّابِ العلم.', en:'Pious and generous, giving charity to the poor and students.' },
      { ar:'رفضَ القضاءَ خوفاً من الظلمِ فسُجِنَ وصبر.', en:'He refused to be a judge for fear of injustice, was jailed, and was patient.' },
      { ar:'يتبعُ مذهبَه ملايينُ المسلمينَ اليوم.', en:'Millions of Muslims follow his school today.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ تاجراً أميناً محبّاً للعلم.',en:'He grew up an honest merchant who loved knowledge.'} },
      { when:{ar:'طلبُ العلم',en:'Seeking Knowledge'}, what:{ar:'تعلّمَ الفقهَ حتى برزَ بذكائِه.',en:'He studied jurisprudence until he excelled by his intelligence.'} },
      { when:{ar:'المدرسة',en:'The School'}, what:{ar:'أسّسَ مدرسةً فقهيّةً عظيمة.',en:'He founded a great school of jurisprudence.'} },
      { when:{ar:'الورع',en:'Piety'}, what:{ar:'رفضَ القضاءَ خوفاً من الظلم.',en:'He refused judgeship for fear of injustice.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'بقيَ مذهبُه ينفعُ المسلمينَ قروناً.',en:'His school kept benefiting Muslims for centuries.'} },
    ],
    ayah:{ ar:'﴿ إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ ﴾', ref:{ ar:'فاطر ٢٨', en:'Fatir 28' } },
  },

  story:[
    { title:{ ar:'الإمامُ الأعظم', en:'The Great Imam' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>أبو حنيفةَ النعمان</b> أوّلَ الأئمّةِ الأربعة، تاجراً أميناً وعالماً عظيمَ الذكاء. أسّسَ مدرسةً فقهيّةً عظيمة، وكان ورعاً كريماً يتصدّقُ على الفقراء. رفضَ القضاءَ خوفاً من الظلمِ فصبرَ على السجن، وبقيَ مذهبُه ينفعُ ملايينَ المسلمين.',
          en:'<b>Abu Hanifa</b> was the first of the four imams, an honest merchant and a scholar of great intelligence. He founded a great school of jurisprudence and was pious and generous, giving charity to the poor. He refused judgeship for fear of injustice and patiently endured prison, and his school keeps benefiting millions of Muslims.' } } ] }
  ],

  traits:[
    { ar:'العلم', en:'Knowledge' }, { ar:'الذكاء', en:'Intelligence' },
    { ar:'الورع', en:'Piety' }, { ar:'الكرم', en:'Generosity' },
  ],
  lessons:[
    { icon:'🧠', color:'#6A4A8A', title:{ar:'استخدمْ عقلَك في الخير',en:'Use your mind for good'},
      body:{ar:'وهبَ اللهُ أبا حنيفةَ ذكاءً عظيماً فاستخدمه في فهمِ الدينِ وخدمتِه. العقلُ نعمةٌ تُوظَّفُ في الخير.',en:'Allah gave Abu Hanifa great intelligence, which he used to understand and serve the religion. The mind is a blessing to use for good.'},
      apply:{ar:'أستخدمُ عقلي في التعلّمِ ونفعِ الناس.',en:'I use my mind to learn and benefit people.'} },
    { icon:'🤲', color:'#8A6AAA', title:{ar:'كنْ أميناً وكريماً',en:'Be honest and generous'},
      body:{ar:'كان أبو حنيفةَ تاجراً أميناً يتصدّقُ بمالِه على الفقراء. الأمانةُ والكرمُ يرفعانِ صاحبَهما.',en:'Abu Hanifa was an honest merchant who gave his wealth to the poor. Honesty and generosity elevate a person.'},
      apply:{ar:'أكونُ أميناً وأُشارِكُ مالي مع المحتاجين.',en:'I am honest and share my money with the needy.'} },
    { icon:'🛡️', color:'#5A3A7A', title:{ar:'اخشَ اللهَ وابتعدْ عن الظلم',en:'Fear Allah and avoid injustice'},
      body:{ar:'رفضَ أبو حنيفةَ القضاءَ خوفاً من أن يظلمَ أحداً، وصبرَ على السجن. الورعُ يمنعُ من الحرام.',en:'Abu Hanifa refused judgeship fearing he might wrong someone, and endured prison. Piety holds one back from the forbidden.'},
      apply:{ar:'أتجنّبُ الظلمَ وأخافُ اللهَ في أفعالي.',en:'I avoid injustice and fear Allah in my actions.'} },
    { icon:'🌙', color:'#6A4A8A', title:{ar:'أحيِ ليلَك بالعبادة',en:'Revive your night with worship'},
      body:{ar:'كان أبو حنيفةَ يُكثِرُ الصلاةَ وقراءةَ القرآنِ بالليل. العبادةُ تُنوِّرُ القلبَ وتُقوّي الإيمان.',en:'Abu Hanifa prayed and recited much Quran at night. Worship lights the heart and strengthens faith.'},
      apply:{ar:'أُخصِّصُ وقتاً للعبادةِ وقراءةِ القرآن.',en:'I set aside time for worship and reciting Quran.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ ﴾', ref:{ ar:'فاطر ٢٨', en:'Fatir 28' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ والأمانةَ والورعَ والكرم', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أستخدمُ عقلي في التعلّمِ ونفعِ الناس.', en:'I use my mind to learn and benefit people.' },
        { ar:'أكونُ أميناً كريماً مع الجميع.', en:'I am honest and generous with everyone.' },
        { ar:'أخشى اللهَ وأبتعدُ عن الظلم.', en:'I fear Allah and stay away from injustice.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ أبو حنيفة؟',en:'What was Abu Hanifa known as?'},
          options:[{ar:'الإمامُ الأعظم',en:'The Great Imam'},{ar:'الفاتح',en:'The Conqueror'},{ar:'الفاروق',en:'al-Faruq'}], answer:0 },
        { q:{ar:'ما عملُ أبي حنيفةَ إلى جانبِ العلم؟',en:'What was Abu Hanifa\u2019s work besides knowledge?'},
          options:[{ar:'تاجرٌ أمين',en:'An honest merchant'},{ar:'جنديٌّ',en:'A soldier'},{ar:'فلاحٌ',en:'A farmer'}], answer:0 },
        { q:{ar:'لماذا رفضَ أبو حنيفةَ القضاء؟',en:'Why did Abu Hanifa refuse to be a judge?'},
          options:[{ar:'خوفاً من أن يظلمَ أحداً',en:'For fear of wronging someone'},{ar:'كسلاً',en:'Out of laziness'},{ar:'لا يعرفُ الفقه',en:'He didn\u2019t know jurisprudence'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أبو حنيفةَ أوّلُ الأئمّةِ الأربعة.',en:'Abu Hanifa was the first of the four imams.'}, t:true },
        { statement:{ar:'كان تاجراً أميناً كريماً.',en:'He was an honest, generous merchant.'}, t:true },
        { statement:{ar:'قبِلَ القضاءَ ليظلمَ الناس.',en:'He accepted judgeship to wrong people.'}, t:false },
        { statement:{ar:'يتبعُ مذهبَه ملايينُ المسلمينَ اليوم.',en:'Millions of Muslims follow his school today.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الإمامُ الأعظم',en:'The Great Imam'}, b:{ar:'لقبُ أبي حنيفة',en:'Abu Hanifa\u2019s title'} },
        { a:{ar:'المذهبُ الحنفي',en:'The Hanafi school'}, b:{ar:'مذهبُه الفقهي',en:'His school of jurisprudence'} },
        { a:{ar:'التجارة',en:'Trade'}, b:{ar:'عملُه مع العلم',en:'His work alongside knowledge'} },
        { a:{ar:'الورع',en:'Piety'}, b:{ar:'رفضَ به القضاء',en:'For it he refused judgeship'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفقهِ والورع', en:'Medal of Jurisprudence & Piety' },
    stickers:[
      { icon:'gem',   color:'#6A4A8A', title:{ar:'الإمامُ الأعظم',en:'The Great Imam'} },
      { icon:'book',  color:'#8A6AAA', title:{ar:'إمامُ الفقه',en:'Imam of Jurisprudence'} },
      { icon:'mosque',color:'#5A3A7A', title:{ar:'العابدُ الورِع',en:'The Devout & Pious'} },
      { icon:'star',  color:'#6A4A8A', title:{ar:'التاجرُ الأمين',en:'The Honest Merchant'} },
    ],
    moral:{ ar:'أبو حنيفةَ قدوةٌ في العلمِ والذكاءِ والورعِ والكرم — استخدمَ عقلَه في خدمةِ الدينِ ونفعِ الناس.',
      en:'Abu Hanifa is a model of knowledge, intelligence, piety, and generosity — he used his mind to serve the religion and benefit people.' },
    reflect:[
      { ar:'استخدمَ أبو حنيفةَ ذكاءه في خدمةِ الدين. كيف تستخدمُ مواهبَك في الخير؟', en:'Abu Hanifa used his intelligence to serve the religion. How do you use your talents for good?' },
      { ar:'رفضَ الظلمَ وصبرَ على السجن. هل تثبُتُ على الحقِّ ولو كلّفك ذلك؟', en:'He refused injustice and endured prison. Do you hold to the truth even if it costs you?' },
    ],
  },
};
