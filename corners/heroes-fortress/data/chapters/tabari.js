// data/chapters/tabari.js — Scholars · الإمام الطبري (full chapter; Story tab uses data/stories/tabari.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.tabari = {
  id:'tabari', era:'heroes', icon:'pen',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ الطبري', en:'At-Tabari' },
  tag:{ ar:'إمامُ المفسّرينَ والمؤرّخين', en:'Imam of exegetes and historians' },
  accent:'#4A4A7A', accent2:'#6A6A9A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ الطبريُّ رحمه الله عالمٌ موسوعيٌّ عظيم، ألّفَ أشهرَ تفسيرٍ للقرآنِ وأعظمَ كتابٍ في التاريخ، وكان مثالاً في الجدِّ واستثمارِ الوقت. تعالَ نتعلّمْ من علمِه وهمّتِه.',
    en:'Hello, hero! Imam at-Tabari, a great encyclopedic scholar who authored the most famous commentary on the Quran and the greatest book of history, a model of diligence and using time well. Come, let\'s learn from his knowledge and high resolve.' },

  knowledge:{
    didYouKnow:{ ar:'كان الطبريُّ يكتبُ كلَّ يومٍ صفحاتٍ كثيرةً طوالَ حياتِه، حتى قيلَ إنّ ما كتبه لو قُسِّمَ على أيّامِ عمرِه لكان نصيبُ كلِّ يومٍ صفحاتٍ كثيرة!',
      en:'At-Tabari wrote many pages every day throughout his life — it was said that if what he wrote were divided over the days of his life, each day\u2019s share would be many pages!' },
    who:{ ar:'هو <b>محمدُ بنُ جريرٍ الطبري</b>، عالمٌ موسوعيٌّ من أعظمِ علماءِ الإسلام، إمامٌ في <b>التفسيرِ والتاريخِ والفقهِ والقراءات</b>. رحلَ في طلبِ العلمِ بلداناً كثيرة. ألّفَ أشهرَ تفسيرٍ للقرآنِ الكريم <b>«جامعَ البيان»</b> (تفسيرَ الطبري)، الذي يرجعُ إليه العلماءُ إلى اليوم. وألّفَ أعظمَ كتابٍ في تاريخِ الأمم <b>«تاريخَ الطبري»</b>. كان <b>مجتهداً مثابراً</b> يستثمرُ كلَّ لحظةٍ من وقتِه في العلمِ والكتابة، عابداً ورِعاً زاهداً. خلّفَ علماً عظيماً ينتفعُ به المسلمونَ قروناً، فكان مثالاً للهمّةِ العاليةِ في طلبِ العلمِ ونشرِه.',
      en:'He is <b>Muhammad ibn Jarir at-Tabari</b>, an encyclopedic scholar among the greatest scholars of Islam, an imam in <b>exegesis, history, jurisprudence, and Quranic recitations</b>. He traveled to many lands seeking knowledge. He authored the most famous commentary on the Quran, <b>"Jami\u2019 al-Bayan"</b> (Tafsir at-Tabari), which scholars refer to to this day. He authored the greatest book on the history of nations, <b>"Tarikh at-Tabari."</b> He was <b>diligent and persistent</b>, investing every moment of his time in knowledge and writing, a devout, scrupulous, ascetic worshipper. He left behind great knowledge that Muslims benefit from for centuries, a model of high resolve in seeking and spreading knowledge.' },
    facts:[
      { ar:'عالمٌ موسوعيٌّ إمامٌ في التفسيرِ والتاريخ.', en:'An encyclopedic scholar, an imam in exegesis and history.' },
      { ar:'ألّفَ أشهرَ تفسيرٍ للقرآنِ «جامعَ البيان».', en:'He authored the most famous Quran commentary, "Jami\u2019 al-Bayan."' },
      { ar:'ألّفَ أعظمَ كتابٍ في التاريخِ «تاريخَ الطبري».', en:'He authored the greatest history book, "Tarikh at-Tabari."' },
      { ar:'كان يستثمرُ كلَّ لحظةٍ من وقتِه في العلم.', en:'He invested every moment of his time in knowledge.' },
      { ar:'عابدٌ ورِعٌ زاهدٌ عالي الهمّة.', en:'A devout, scrupulous, ascetic man of high resolve.' },
    ],
    timeline:[
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ في طلبِ العلمِ بلداناً كثيرة.',en:'He traveled to many lands seeking knowledge.'} },
      { when:{ar:'التفسير',en:'Exegesis'}, what:{ar:'ألّفَ أشهرَ تفسيرٍ للقرآن.',en:'He authored the most famous Quran commentary.'} },
      { when:{ar:'التاريخ',en:'History'}, what:{ar:'ألّفَ أعظمَ كتابٍ في تاريخِ الأمم.',en:'He authored the greatest book on the history of nations.'} },
      { when:{ar:'الجدّ',en:'Diligence'}, what:{ar:'استثمرَ كلَّ وقتِه في العلمِ والكتابة.',en:'He invested all his time in knowledge and writing.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'خلّفَ علماً ينتفعُ به الناسُ قروناً.',en:'He left knowledge people benefit from for centuries.'} },
    ],
    ayah:{ ar:'﴿ وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ﴾', ref:{ ar:'العصر ١-٢', en:'Al-Asr 1-2' } },
  },

  story:[
    { title:{ ar:'إمامُ المفسّرينَ والمؤرّخين', en:'Imam of Exegetes and Historians' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ الطبري</b> عالماً موسوعيّاً عظيماً، إماماً في التفسيرِ والتاريخ. ألّفَ أشهرَ تفسيرٍ للقرآنِ وأعظمَ كتابٍ في التاريخ. كان يستثمرُ كلَّ لحظةٍ من وقتِه في العلمِ والكتابة، عابداً ورِعاً، فخلّفَ علماً ينتفعُ به المسلمونَ قروناً.',
          en:'<b>Imam at-Tabari</b> was a great encyclopedic scholar, an imam in exegesis and history. He authored the most famous Quran commentary and the greatest history book. He invested every moment of his time in knowledge and writing, a devout and scrupulous man, leaving behind knowledge Muslims benefit from for centuries.' } } ] }
  ],

  traits:[
    { ar:'الهمّةُ العالية', en:'High resolve' }, { ar:'استثمارُ الوقت', en:'Using time well' },
    { ar:'سعةُ العلم', en:'Breadth of knowledge' }, { ar:'الورع', en:'Scrupulousness' },
  ],
  lessons:[
    { icon:'⏰', color:'#4A4A7A', title:{ar:'استثمرْ وقتَك',en:'Invest your time'},
      body:{ar:'كان الطبريُّ يستثمرُ كلَّ لحظةٍ في العلمِ والكتابة. الوقتُ كنزٌ من ضيّعه ضيّعَ عمرَه.',en:'At-Tabari invested every moment in knowledge and writing. Time is a treasure; whoever wastes it wastes his life.'},
      apply:{ar:'أستغلُّ وقتي فيما ينفعُني ولا أُضيّعُه.',en:'I use my time for what benefits me and don\u2019t waste it.'} },
    { icon:'🎯', color:'#6A6A9A', title:{ar:'علِّ همّتَك',en:'Raise your resolve high'},
      body:{ar:'ألّفَ الطبريُّ كتباً عظيمةً نفعتِ الأمّةَ قروناً بهمّتِه العالية. الهمّةُ العاليةُ تصنعُ العظائم.',en:'At-Tabari authored great books that benefited the nation for centuries through his high resolve. High resolve achieves great things.'},
      apply:{ar:'أرفعُ همّتي وأطمحُ للإنجازِ النافع.',en:'I raise my resolve and aspire to beneficial achievement.'} },
    { icon:'📚', color:'#3A3A6A', title:{ar:'توسّعْ في العلمِ النافع',en:'Broaden in beneficial knowledge'},
      body:{ar:'كان الطبريُّ إماماً في علومٍ كثيرة. التوسّعُ في العلمِ النافعِ يزيدُ نفعَ صاحبِه.',en:'At-Tabari was an imam in many sciences. Broadening in beneficial knowledge increases one\u2019s benefit.'},
      apply:{ar:'أتعلّمُ من العلومِ النافعةِ ما أستطيع.',en:'I learn what I can of beneficial sciences.'} },
    { icon:'🤲', color:'#4A4A7A', title:{ar:'اجمعْ العلمَ مع العبادة',en:'Combine knowledge with worship'},
      body:{ar:'كان الطبريُّ عابداً ورِعاً زاهداً مع علمِه الواسع. العلمُ مع التقوى نورٌ على نور.',en:'At-Tabari was a devout, scrupulous, ascetic man alongside his vast knowledge. Knowledge with piety is light upon light.'},
      apply:{ar:'أجمعُ بين تعلّمي وعبادتي وتقواي.',en:'I combine my learning, worship, and piety.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ﴾', ref:{ ar:'العصر ١-٢', en:'Al-Asr 1-2' } },
    dua:{ ar:'اللّهُمَّ بارِكْ لي في وقتي وارزقني العلمَ النافعَ والهمّةَ العالية', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أستغلُّ وقتي فيما ينفعُ ولا أُضيّعُه.', en:'I use my time for what benefits and don\u2019t waste it.' },
        { ar:'أرفعُ همّتي وأطمحُ للإنجازِ النافع.', en:'I raise my resolve and aspire to beneficial achievement.' },
        { ar:'أجمعُ بين العلمِ والعبادةِ والتقوى.', en:'I combine knowledge, worship, and piety.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بِمَ اشتهرَ الإمامُ الطبري؟',en:'What was Imam at-Tabari famous for?'},
          options:[{ar:'التفسيرِ والتاريخ',en:'Exegesis and history'},{ar:'التجارة',en:'Trade'},{ar:'الفروسية',en:'Horsemanship'}], answer:0 },
        { q:{ar:'ما أشهرُ كتبِ الطبري في القرآن؟',en:'What is at-Tabari\u2019s most famous book on the Quran?'},
          options:[{ar:'تفسيرُ الطبري (جامعُ البيان)',en:'Tafsir at-Tabari (Jami\u2019 al-Bayan)'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'بِمَ تميّزَ الطبريُّ في حياتِه؟',en:'What distinguished at-Tabari in his life?'},
          options:[{ar:'استثمارِ كلِّ وقتِه في العلم',en:'Investing all his time in knowledge'},{ar:'إضاعةِ الوقت',en:'Wasting time'},{ar:'الكسل',en:'Laziness'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'الطبريُّ ألّفَ أشهرَ تفسيرٍ للقرآن.',en:'At-Tabari authored the most famous Quran commentary.'}, t:true },
        { statement:{ar:'كان يستثمرُ كلَّ وقتِه في العلمِ والكتابة.',en:'He invested all his time in knowledge and writing.'}, t:true },
        { statement:{ar:'كان يُضيّعُ وقتَه ولا يكتبُ شيئاً.',en:'He wasted his time and wrote nothing.'}, t:false },
        { statement:{ar:'كان عالماً موسوعيّاً في علومٍ كثيرة.',en:'He was an encyclopedic scholar in many sciences.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'تفسيرُ الطبري',en:'Tafsir at-Tabari'}, b:{ar:'أشهرُ تفسيرٍ للقرآن',en:'Most famous Quran commentary'} },
        { a:{ar:'تاريخُ الطبري',en:'Tarikh at-Tabari'}, b:{ar:'أعظمُ كتابٍ في التاريخ',en:'Greatest history book'} },
        { a:{ar:'الوقت',en:'Time'}, b:{ar:'استثمره في العلم',en:'He invested it in knowledge'} },
        { a:{ar:'الهمّةُ العالية',en:'High resolve'}, b:{ar:'صنعتْ علمَه العظيم',en:'It built his great knowledge'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ والهمّة', en:'Medal of Knowledge & Resolve' },
    stickers:[
      { icon:'pen',   color:'#4A4A7A', title:{ar:'إمامُ المفسّرين',en:'Imam of Exegetes'} },
      { icon:'book',  color:'#6A6A9A', title:{ar:'إمامُ المؤرّخين',en:'Imam of Historians'} },
      { icon:'light', color:'#3A3A6A', title:{ar:'مستثمرُ الوقت',en:'Investor of Time'} },
      { icon:'star',  color:'#4A4A7A', title:{ar:'العالمُ الموسوعي',en:'The Encyclopedic Scholar'} },
    ],
    moral:{ ar:'الإمامُ الطبريُّ قدوةٌ في الهمّةِ العاليةِ واستثمارِ الوقتِ وسعةِ العلم — خلّفَ علماً عظيماً ينفعُ الأمّةَ قروناً.',
      en:'Imam at-Tabari is a model of high resolve, using time well, and breadth of knowledge — he left great knowledge that benefits the nation for centuries.' },
    reflect:[
      { ar:'استثمرَ الطبريُّ كلَّ لحظةٍ في العلم. كيف تستغلُّ وقتَك فيما ينفع؟', en:'At-Tabari invested every moment in knowledge. How do you use your time for what benefits?' },
      { ar:'خلّفَ علماً ينفعُ الأجيال. ما الأثرُ النافعُ الذي تطمحُ أن تتركَه؟', en:'He left knowledge benefiting generations. What beneficial mark do you aspire to leave?' },
    ],
  },
};
