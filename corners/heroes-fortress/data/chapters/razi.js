// data/chapters/razi.js — Scientists · أبو بكر الرازي (full chapter; Story tab uses data/stories/razi.js)
// Sources: عيون الأنباء · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.razi = {
  id:'razi', era:'heroes', icon:'leaf',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'أبو بكرٍ الرازي', en:'Ar-Razi' },
  tag:{ ar:'رائدُ الطبِّ والكيمياء', en:'Pioneer of medicine & chemistry' },
  accent:'#7A3A2A', accent2:'#9A5A4A',
  greeting:{ ar:'أهلاً يا بطل! أبو بكرٍ الرازيُّ رحمه الله طبيبٌ عظيمٌ ورائدٌ في الكيمياء، اشتهرَ بدقّةِ ملاحظتِه ورحمتِه بالمرضى، واختارَ موقعَ المستشفى بطريقةٍ علميّةٍ عبقرية. تعالَ نتعلّمْ من علمِه ورحمتِه.',
    en:'Hello, hero! Abu Bakr ar-Razi, a great physician and pioneer in chemistry, famed for his precise observation and mercy toward patients, who chose a hospital\u2019s location by a brilliant scientific method. Come, let\'s learn from his knowledge and mercy.' },

  knowledge:{
    didYouKnow:{ ar:'حين أرادوا بناءَ مستشفى في بغداد، علّقَ الرازيُّ قِطَعاً من اللحمِ في أحياءِ المدينة، واختارَ المكانَ الذي تأخّرَ فيه فسادُ اللحمِ — لأنّه الأنقى هواءً والأصحُّ للمرضى!',
      en:'When they wanted to build a hospital in Baghdad, ar-Razi hung pieces of meat in the city\u2019s districts and chose the place where the meat spoiled slowest — because it had the cleanest air and was healthiest for patients!' },
    who:{ ar:'هو <b>أبو بكرٍ محمدُ بنُ زكريا الرازي</b>، من أعظمِ أطبّاءِ الإسلامِ ورائدٌ في <b>الطبِّ والكيمياء</b>. كان <b>دقيقَ الملاحظةِ رحيماً بالمرضى</b>، يكتبُ حالةَ كلِّ مريضٍ ويتابعُها. أوّلُ من <b>فرّقَ بين مرضَي الجُدَريِّ والحصبة</b> ووصفهما وصفاً دقيقاً. وكان رائداً في الكيمياءِ، أجرى تجاربَ كثيرةً واكتشفَ موادَّ جديدة. اشتهرَ بأنّه حين أرادوا بناءَ مستشفى ببغداد، <b>اختارَ موقعَه بطريقةٍ علميّةٍ عبقريّة</b> (بمراقبةِ فسادِ اللحمِ ليعرفَ أنقى الأماكنِ هواءً). كان كريماً يُعالِجُ الفقراءَ بلا مقابل، مثالاً للعالمِ الرحيمِ الذي يجمعُ بين العلمِ والرحمة.',
      en:'He is <b>Abu Bakr Muhammad ibn Zakariya ar-Razi</b>, among the greatest physicians of Islam and a pioneer in <b>medicine and chemistry</b>. He was <b>precise in observation and merciful toward patients</b>, recording each patient\u2019s condition and following it. He was the first to <b>distinguish between smallpox and measles</b> and describe them precisely. He was a pioneer in chemistry, conducting many experiments and discovering new substances. He is famous for choosing a hospital\u2019s site in Baghdad by a <b>brilliant scientific method</b> (observing the spoilage of meat to find the place with the cleanest air). He was generous, treating the poor for free — a model of the merciful scholar who combines knowledge and mercy.' },
    facts:[
      { ar:'من أعظمِ أطبّاءِ الإسلامِ ورائدٌ في الكيمياء.', en:'Among the greatest physicians of Islam and a pioneer in chemistry.' },
      { ar:'أوّلُ من فرّقَ بين الجُدَريِّ والحصبة.', en:'The first to distinguish between smallpox and measles.' },
      { ar:'دقيقُ الملاحظةِ يكتبُ حالةَ كلِّ مريض.', en:'Precise in observation, recording each patient\u2019s condition.' },
      { ar:'اختارَ موقعَ المستشفى بطريقةٍ علميّةٍ عبقرية.', en:'He chose the hospital\u2019s site by a brilliant scientific method.' },
      { ar:'كريمٌ رحيمٌ يُعالِجُ الفقراءَ بلا مقابل.', en:'Generous and merciful, treating the poor for free.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'أحبَّ العلمَ وبرعَ في الطبِّ والكيمياء.',en:'He loved knowledge and excelled in medicine and chemistry.'} },
      { when:{ar:'الملاحظة',en:'Observation'}, what:{ar:'كان يكتبُ حالةَ كلِّ مريضٍ بدقّة.',en:'He recorded each patient\u2019s condition precisely.'} },
      { when:{ar:'الاكتشاف',en:'Discovery'}, what:{ar:'فرّقَ بين الجُدَريِّ والحصبة.',en:'He distinguished between smallpox and measles.'} },
      { when:{ar:'المستشفى',en:'The Hospital'}, what:{ar:'اختارَ موقعَه بطريقةٍ علميّة.',en:'He chose its site by a scientific method.'} },
      { when:{ar:'الرحمة',en:'Mercy'}, what:{ar:'عالجَ الفقراءَ بكرمٍ ورحمة.',en:'He treated the poor with generosity and mercy.'} },
    ],
    ayah:{ ar:'﴿ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ﴾', ref:{ ar:'المائدة ٣٢', en:'Al-Ma\u2019ida 32' } },
  },

  story:[
    { title:{ ar:'رائدُ الطبِّ والكيمياء', en:'Pioneer of Medicine & Chemistry' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>أبو بكرٍ الرازي</b> من أعظمِ أطبّاءِ الإسلامِ ورائداً في الكيمياء. كان دقيقَ الملاحظةِ رحيماً بالمرضى، أوّلَ من فرّقَ بين الجُدَريِّ والحصبة. اختارَ موقعَ المستشفى بطريقةٍ علميّةٍ عبقريّة، وعالجَ الفقراءَ بلا مقابل.',
          en:'<b>Abu Bakr ar-Razi</b> was among the greatest physicians of Islam and a pioneer in chemistry. He was precise in observation and merciful to patients, the first to distinguish smallpox from measles. He chose a hospital\u2019s site by a brilliant scientific method and treated the poor for free.' } } ] }
  ],

  traits:[
    { ar:'الملاحظةُ الدقيقة', en:'Precise observation' }, { ar:'الرحمة', en:'Mercy' },
    { ar:'الإبداعُ العلمي', en:'Scientific innovation' }, { ar:'الكرم', en:'Generosity' },
  ],
  lessons:[
    { icon:'🔬', color:'#7A3A2A', title:{ar:'لاحظْ بدقّةٍ وسجّلْ',en:'Observe precisely and record'},
      body:{ar:'كان الرازيُّ يلاحظُ كلَّ تفاصيلِ المريضِ ويكتبُها. الملاحظةُ الدقيقةُ أساسُ العلمِ الصحيح.',en:'Ar-Razi observed every detail of the patient and recorded it. Precise observation is the basis of correct science.'},
      apply:{ar:'ألاحظُ بدقّةٍ وأنتبهُ للتفاصيل.',en:'I observe precisely and pay attention to details.'} },
    { icon:'💚', color:'#9A5A4A', title:{ar:'ارحمِ المرضى والضعفاء',en:'Show mercy to the sick and weak'},
      body:{ar:'كان الرازيُّ رحيماً يُعالِجُ الفقراءَ بلا مقابل. الرحمةُ بالناسِ من أجملِ صفاتِ العالم.',en:'Ar-Razi was merciful, treating the poor for free. Mercy toward people is among the most beautiful traits of a scholar.'},
      apply:{ar:'أرحمُ الضعفاءَ وأُساعِدُ المحتاجين.',en:'I show mercy to the weak and help the needy.'} },
    { icon:'💡', color:'#5A2A1A', title:{ar:'حُلَّ المشكلاتِ بذكاء',en:'Solve problems cleverly'},
      body:{ar:'اختارَ الرازيُّ موقعَ المستشفى بطريقةٍ علميّةٍ مبتكرة. التفكيرُ الذكيُّ يجدُ حلولاً عبقريّة.',en:'Ar-Razi chose the hospital\u2019s site by an innovative scientific method. Clever thinking finds brilliant solutions.'},
      apply:{ar:'أُفكِّرُ بذكاءٍ لأجدَ أفضلَ الحلول.',en:'I think cleverly to find the best solutions.'} },
    { icon:'🤲', color:'#7A3A2A', title:{ar:'إحياءُ النفسِ عملٌ عظيم',en:'Saving a life is a great deed'},
      body:{ar:'كرّسَ الرازيُّ حياتَه لشفاءِ الناس. ومن أحيا نفساً فكأنّما أحيا الناسَ جميعاً. خدمةُ المرضى عبادة.',en:'Ar-Razi devoted his life to healing people. Whoever saves a life, it is as if he saved all people. Serving the sick is worship.'},
      apply:{ar:'أُساعِدُ في إنقاذِ ونفعِ من حولي.',en:'I help to save and benefit those around me.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ﴾', ref:{ ar:'المائدة ٣٢', en:'Al-Ma\u2019ida 32' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ والرحمةَ بخلقِك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'ألاحظُ بدقّةٍ وأنتبهُ للتفاصيل.', en:'I observe precisely and pay attention to details.' },
        { ar:'أرحمُ الضعفاءَ وأُساعِدُ المحتاجين.', en:'I show mercy to the weak and help the needy.' },
        { ar:'أُفكِّرُ بذكاءٍ لأجدَ أفضلَ الحلول.', en:'I think cleverly to find the best solutions.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ علمَين اشتهرَ الرازي؟',en:'What two sciences was ar-Razi famous for?'},
          options:[{ar:'الطبِّ والكيمياء',en:'Medicine and chemistry'},{ar:'الشعرِ والنحو',en:'Poetry and grammar'},{ar:'التجارة',en:'Trade'}], answer:0 },
        { q:{ar:'كيف اختارَ الرازيُّ موقعَ المستشفى؟',en:'How did ar-Razi choose the hospital\u2019s site?'},
          options:[{ar:'بمراقبةِ فسادِ اللحمِ ليجدَ أنقى الهواء',en:'By observing meat spoilage to find the cleanest air'},{ar:'عشوائيّاً',en:'Randomly'},{ar:'بالقرعة',en:'By lottery'}], answer:0 },
        { q:{ar:'بِمَ عُرِفَ الرازيُّ مع المرضى الفقراء؟',en:'How was ar-Razi known with poor patients?'},
          options:[{ar:'يُعالِجُهم بلا مقابلٍ رحمةً بهم',en:'He treated them for free, out of mercy'},{ar:'يرفضُهم',en:'He refused them'},{ar:'يأخذُ مالاً كثيراً',en:'He took much money'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'الرازيُّ من أعظمِ أطبّاءِ الإسلام.',en:'Ar-Razi was among the greatest physicians of Islam.'}, t:true },
        { statement:{ar:'أوّلُ من فرّقَ بين الجُدَريِّ والحصبة.',en:'He was the first to distinguish smallpox from measles.'}, t:true },
        { statement:{ar:'كان قاسياً يرفضُ علاجَ الفقراء.',en:'He was harsh and refused to treat the poor.'}, t:false },
        { statement:{ar:'اختارَ موقعَ المستشفى بطريقةٍ علميّة.',en:'He chose the hospital\u2019s site by a scientific method.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الجُدَريُّ والحصبة',en:'Smallpox & measles'}, b:{ar:'أوّلُ من فرّقَ بينهما',en:'First to distinguish them'} },
        { a:{ar:'المستشفى',en:'The hospital'}, b:{ar:'اختارَ موقعَه علميّاً',en:'He chose its site scientifically'} },
        { a:{ar:'الفقراء',en:'The poor'}, b:{ar:'عالجهم بلا مقابل',en:'He treated them for free'} },
        { a:{ar:'الكيمياء',en:'Chemistry'}, b:{ar:'كان رائداً فيها',en:'He was a pioneer in it'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الطبِّ والرحمة', en:'Medal of Medicine & Mercy' },
    stickers:[
      { icon:'leaf',  color:'#7A3A2A', title:{ar:'رائدُ الطب',en:'Pioneer of Medicine'} },
      { icon:'gem',   color:'#9A5A4A', title:{ar:'رائدُ الكيمياء',en:'Pioneer of Chemistry'} },
      { icon:'heart', color:'#5A2A1A', title:{ar:'الطبيبُ الرحيم',en:'The Merciful Physician'} },
      { icon:'light', color:'#7A3A2A', title:{ar:'الملاحظُ الدقيق',en:'The Precise Observer'} },
    ],
    moral:{ ar:'أبو بكرٍ الرازيُّ قدوةٌ في الملاحظةِ الدقيقةِ والرحمةِ والإبداعِ العلمي — جمعَ بين العلمِ ورحمةِ المرضى ونفعِهم.',
      en:'Abu Bakr ar-Razi is a model of precise observation, mercy, and scientific innovation — he combined knowledge with mercy toward patients and benefiting them.' },
    reflect:[
      { ar:'كان الرازيُّ يلاحظُ بدقّةٍ ويُسجّل. كيف تنتبهُ للتفاصيلِ فيما تتعلّمُه؟', en:'Ar-Razi observed precisely and recorded. How do you pay attention to details in what you learn?' },
      { ar:'عالجَ الفقراءَ برحمةٍ بلا مقابل. كيف تُساعِدُ المحتاجينَ من حولِك؟', en:'He treated the poor with mercy for free. How do you help the needy around you?' },
    ],
  },
};
