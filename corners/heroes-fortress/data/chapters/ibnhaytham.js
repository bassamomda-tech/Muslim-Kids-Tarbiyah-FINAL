// data/chapters/ibnhaytham.js — Scientists · ابن الهيثم (full chapter; Story tab uses data/stories/ibnhaytham.js)
// Sources: عيون الأنباء · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibnhaytham = {
  id:'ibnhaytham', era:'heroes', icon:'light',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'ابنُ الهيثم', en:'Ibn al-Haytham' },
  tag:{ ar:'أبو علمِ البصريات', en:'Father of optics' },
  accent:'#2A6A7A', accent2:'#4A8A9A',
  greeting:{ ar:'أهلاً يا بطل! ابنُ الهيثمِ رحمه الله أبو علمِ البصريات، أوّلُ من شرحَ كيف نرى بالعين، وأسّسَ المنهجَ التجريبيَّ في العلم. تعالَ نتعلّمْ من ذكائِه وصبرِه على البحث.',
    en:'Hello, hero! Ibn al-Haytham, the father of optics, the first to explain how we see with the eye, and founder of the experimental method in science. Come, let\'s learn from his brilliance and patience in research.' },

  knowledge:{
    didYouKnow:{ ar:'ابنُ الهيثمِ أوّلُ من أثبتَ أنّنا نرى الأشياءَ لأنّ الضوءَ ينعكسُ منها إلى أعينِنا، وكان من أوائلِ من استخدموا التجربةَ والملاحظةَ لإثباتِ الحقائق!',
      en:'Ibn al-Haytham was the first to prove that we see things because light reflects from them into our eyes, and among the first to use experiment and observation to prove facts!' },
    who:{ ar:'هو <b>الحسنُ بنُ الهيثم</b>، عالمٌ مسلمٌ عظيمٌ من <b>البصرة</b>، يُلقَّبُ بـ<b>«أبي علمِ البصريات»</b>. كان عبقريّاً في <b>الرياضياتِ والفيزياءِ والفلك</b>. أعظمُ إنجازاتِه أنّه شرحَ <b>كيف تُبصِرُ العينُ</b>: فأثبتَ أنّنا نرى الأشياءَ لأنّ الضوءَ ينعكسُ منها إلى أعينِنا (لا أنّ العينَ تُرسِلُ شعاعاً كما ظنَّ القدماء). ألّفَ كتابَه العظيمَ <b>«المناظر»</b> في علمِ الضوءِ والرؤية. والأهمُّ أنّه كان من <b>مؤسّسي المنهجِ التجريبي</b>: لا يُصدِّقُ الفكرةَ حتى يختبرَها بالتجربةِ والملاحظة. هذا المنهجُ هو أساسُ العلمِ الحديثِ كلِّه! كان صابراً مثابراً، نفعَ البشريّةَ باكتشافاتِه.',
      en:'He is <b>al-Hasan ibn al-Haytham</b>, a great Muslim scientist from <b>Basra</b>, titled <b>"the father of optics."</b> He was a genius in <b>mathematics, physics, and astronomy</b>. His greatest achievement was explaining <b>how the eye sees</b>: he proved that we see things because light reflects from them into our eyes (not that the eye sends out a ray, as the ancients thought). He authored his great book <b>"Kitab al-Manazir" (Book of Optics)</b> on the science of light and vision. Most importantly, he was among the <b>founders of the experimental method</b>: he would not believe an idea until he tested it by experiment and observation. This method is the basis of all modern science! He was patient and persevering, benefiting humanity with his discoveries.' },
    facts:[
      { ar:'عالمٌ مسلمٌ يُلقَّبُ بأبي علمِ البصريات.', en:'A Muslim scientist titled "the father of optics."' },
      { ar:'شرحَ كيف تُبصِرُ العينُ بانعكاسِ الضوء.', en:'He explained how the eye sees by the reflection of light.' },
      { ar:'ألّفَ كتابَ «المناظر» في علمِ الضوء.', en:'He authored "Kitab al-Manazir" on the science of light.' },
      { ar:'من مؤسّسي المنهجِ التجريبيِّ في العلم.', en:'Among the founders of the experimental method in science.' },
      { ar:'كان عبقريّاً في الرياضياتِ والفيزياءِ والفلك.', en:'He was a genius in mathematics, physics, and astronomy.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ في البصرةِ محبّاً للعلمِ والرياضيات.',en:'He grew up in Basra, loving knowledge and mathematics.'} },
      { when:{ar:'البحث',en:'Research'}, what:{ar:'بحثَ في الضوءِ والرؤيةِ بالتجربة.',en:'He researched light and vision by experiment.'} },
      { when:{ar:'الاكتشاف',en:'Discovery'}, what:{ar:'أثبتَ أنّنا نرى بانعكاسِ الضوءِ للعين.',en:'He proved we see by light reflecting into the eye.'} },
      { when:{ar:'المناظر',en:'Al-Manazir'}, what:{ar:'ألّفَ كتابَ «المناظر» العظيم.',en:'He authored the great "Kitab al-Manazir."'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'أسّسَ المنهجَ التجريبيَّ أساسَ العلمِ الحديث.',en:'He founded the experimental method, the basis of modern science.'} },
    ],
    ayah:{ ar:'﴿ أَفَلَا يَنظُرُونَ ۛ ﴾ ﴿ وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ ﴾', ref:{ ar:'الذاريات ٢١', en:'Adh-Dhariyat 21' } },
  },

  story:[
    { title:{ ar:'أبو علمِ البصريات', en:'Father of Optics' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>ابنُ الهيثم</b> عالماً مسلماً عبقريّاً، يُلقَّبُ بأبي علمِ البصريات. شرحَ كيف تُبصِرُ العينُ بانعكاسِ الضوء، وألّفَ كتابَ «المناظر»، وكان من مؤسّسي المنهجِ التجريبيِّ الذي لا يُصدِّقُ فكرةً حتى يختبرَها — وهو أساسُ العلمِ الحديث.',
          en:'<b>Ibn al-Haytham</b> was a brilliant Muslim scientist titled "the father of optics." He explained how the eye sees by the reflection of light, authored "Kitab al-Manazir," and was among the founders of the experimental method that doesn\u2019t believe an idea until it is tested — the basis of modern science.' } } ] }
  ],

  traits:[
    { ar:'الذكاء', en:'Brilliance' }, { ar:'التجربةُ والملاحظة', en:'Experiment & observation' },
    { ar:'الصبر', en:'Patience' }, { ar:'حبُّ المعرفة', en:'Love of knowledge' },
  ],
  lessons:[
    { icon:'🔬', color:'#2A6A7A', title:{ar:'تأكّدْ بالتجربةِ والدليل',en:'Verify by experiment and evidence'},
      body:{ar:'كان ابنُ الهيثمِ لا يُصدِّقُ فكرةً حتى يختبرَها. التثبّتُ بالدليلِ يحمي من الخطأ والوهم.',en:'Ibn al-Haytham would not believe an idea until he tested it. Verifying with evidence protects from error and illusion.'},
      apply:{ar:'أتأكّدُ من الأمورِ بالدليلِ لا بالظنّ.',en:'I verify things with evidence, not assumption.'} },
    { icon:'👁️', color:'#4A8A9A', title:{ar:'تأمّلْ في خلقِ الله',en:'Reflect on Allah\u2019s creation'},
      body:{ar:'تأمّلَ ابنُ الهيثمِ في العينِ والضوءِ فاكتشفَ عجائبَ خلقِ الله. التأمّلُ في الكونِ عبادةٌ وعلم.',en:'Ibn al-Haytham reflected on the eye and light, discovering the wonders of Allah\u2019s creation. Reflecting on the universe is worship and knowledge.'},
      apply:{ar:'أتأمّلُ في خلقِ اللهِ وأتعلّمُ منه.',en:'I reflect on Allah\u2019s creation and learn from it.'} },
    { icon:'⏳', color:'#1A5A6A', title:{ar:'اصبِرْ على البحث',en:'Be patient in research'},
      body:{ar:'بذلَ ابنُ الهيثمِ سنواتٍ في البحثِ والتجربةِ بصبر. الاكتشافاتُ العظيمةُ تحتاجُ صبراً طويلاً.',en:'Ibn al-Haytham spent years researching and experimenting patiently. Great discoveries need long patience.'},
      apply:{ar:'أصبِرُ وأُثابِرُ حتى أصلَ للحقيقة.',en:'I am patient and persevere until I reach the truth.'} },
    { icon:'🌍', color:'#2A6A7A', title:{ar:'انفعِ البشريّةَ بعلمِك',en:'Benefit humanity with your knowledge'},
      body:{ar:'نفعَ ابنُ الهيثمِ البشريّةَ كلَّها باكتشافاتِه التي بُنِيَ عليها العلمُ الحديث. العلمُ النافعُ خيرٌ للجميع.',en:'Ibn al-Haytham benefited all humanity with discoveries on which modern science was built. Beneficial knowledge is good for everyone.'},
      apply:{ar:'أتعلّمُ لأنفعَ نفسي والناسَ من حولي.',en:'I learn to benefit myself and the people around me.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ ﴾', ref:{ ar:'الذاريات ٢١', en:'Adh-Dhariyat 21' } },
    dua:{ ar:'اللّهُمَّ علّمني ما ينفعُني وأرني الحقَّ حقّاً وارزقني اتّباعَه', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتأكّدُ من الأمورِ بالدليلِ لا بالظنّ.', en:'I verify things with evidence, not assumption.' },
        { ar:'أتأمّلُ في خلقِ اللهِ وأتعلّمُ منه.', en:'I reflect on Allah\u2019s creation and learn from it.' },
        { ar:'أصبِرُ على البحثِ وأنفعُ الناسَ بعلمي.', en:'I am patient in research and benefit people with my knowledge.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ ابنُ الهيثم؟',en:'What was Ibn al-Haytham known as?'},
          options:[{ar:'أبو علمِ البصريات',en:'Father of optics'},{ar:'أبو الكيمياء',en:'Father of chemistry'},{ar:'أبو الجبر',en:'Father of algebra'}], answer:0 },
        { q:{ar:'ماذا شرحَ ابنُ الهيثمِ عن العين؟',en:'What did Ibn al-Haytham explain about the eye?'},
          options:[{ar:'أنّنا نرى بانعكاسِ الضوءِ إلى أعينِنا',en:'That we see by light reflecting into our eyes'},{ar:'أنّ العينَ تُرسِلُ شعاعاً',en:'That the eye sends out a ray'},{ar:'أنّ العينَ لا ترى',en:'That the eye doesn\u2019t see'}], answer:0 },
        { q:{ar:'بأيِّ منهجٍ اشتهرَ ابنُ الهيثم؟',en:'What method was Ibn al-Haytham famous for?'},
          options:[{ar:'المنهجِ التجريبيِّ (التجربةِ والملاحظة)',en:'The experimental method (experiment & observation)'},{ar:'التخمينِ',en:'Guessing'},{ar:'التقليدِ',en:'Imitation'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'ابنُ الهيثمِ أبو علمِ البصريات.',en:'Ibn al-Haytham was the father of optics.'}, t:true },
        { statement:{ar:'أثبتَ أنّنا نرى بانعكاسِ الضوءِ للعين.',en:'He proved we see by light reflecting into the eye.'}, t:true },
        { statement:{ar:'كان يُصدِّقُ كلَّ فكرةٍ بلا تجربة.',en:'He believed every idea without experiment.'}, t:false },
        { statement:{ar:'من مؤسّسي المنهجِ التجريبيِّ في العلم.',en:'He was among the founders of the experimental method.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'المناظر',en:'Al-Manazir'}, b:{ar:'كتابُه في علمِ الضوء',en:'His book on the science of light'} },
        { a:{ar:'العين',en:'The eye'}, b:{ar:'شرحَ كيف تُبصِر',en:'He explained how it sees'} },
        { a:{ar:'المنهجُ التجريبي',en:'The experimental method'}, b:{ar:'من مؤسّسيه',en:'One of its founders'} },
        { a:{ar:'الضوء',en:'Light'}, b:{ar:'ينعكسُ من الأشياءِ للعين',en:'Reflects from things into the eye'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ والاكتشاف', en:'Medal of Knowledge & Discovery' },
    stickers:[
      { icon:'light', color:'#2A6A7A', title:{ar:'أبو البصريات',en:'Father of Optics'} },
      { icon:'compass',color:'#4A8A9A', title:{ar:'صاحبُ المنهجِ التجريبي',en:'Founder of the Experimental Method'} },
      { icon:'book',  color:'#1A5A6A', title:{ar:'صاحبُ المناظر',en:'Author of al-Manazir'} },
      { icon:'star',  color:'#2A6A7A', title:{ar:'العبقريُّ الصبور',en:'The Patient Genius'} },
    ],
    moral:{ ar:'ابنُ الهيثمِ قدوةٌ في التفكيرِ العلميِّ والتثبّتِ بالدليلِ والصبرِ على البحث — أنارَ للبشريّةِ طريقَ العلمِ الحديث.',
      en:'Ibn al-Haytham is a model of scientific thinking, verifying with evidence, and patience in research — he lit for humanity the path of modern science.' },
    reflect:[
      { ar:'كان ابنُ الهيثمِ يتأكّدُ بالتجربةِ قبلَ أن يُصدِّق. كيف تتثبّتُ من الأمورِ بالدليل؟', en:'Ibn al-Haytham verified by experiment before believing. How do you verify things with evidence?' },
      { ar:'تأمّلَ في خلقِ اللهِ فاكتشفَ عجائبَه. ماذا اكتشفتَ حين تأمّلتَ في الكونِ من حولِك؟', en:'He reflected on Allah\u2019s creation and discovered its wonders. What have you discovered reflecting on the universe around you?' },
    ],
  },
};
