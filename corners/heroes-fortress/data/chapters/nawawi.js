// data/chapters/nawawi.js — Scholars · الإمام النووي (full chapter; Story tab uses data/stories/nawawi.js)
// Sources: سير أعلام النبلاء · تذكرة الحفاظ · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nawawi = {
  id:'nawawi', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ النووي', en:'An-Nawawi' },
  tag:{ ar:'صاحبُ الأربعينَ والرياض', en:'Author of the Forty & the Gardens' },
  accent:'#2A6A6A', accent2:'#4A8A8A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ النوويُّ رحمه الله عالمٌ مباركٌ زاهد، ألّفَ كتبَ «الأربعينَ النووية» و«رياضِ الصالحين» التي يحفظُها المسلمونَ في كلِّ مكان. تعالَ نتعلّمْ من علمِه وزهدِه وبركةِ وقتِه.',
    en:'Hello, hero! Imam an-Nawawi, a blessed, ascetic scholar who authored "the Forty Hadiths of an-Nawawi" and "Riyad as-Salihin" that Muslims everywhere memorize. Come, let\'s learn from his knowledge, asceticism, and the blessing of his time.' },

  knowledge:{
    didYouKnow:{ ar:'عاشَ النوويُّ نحوَ خمسٍ وأربعينَ سنةً فقط، لكنّه ألّفَ كتباً عظيمةً ينتفعُ بها المسلمونَ إلى اليوم — بركةٌ في العمرِ والوقت!',
      en:'An-Nawawi lived only about forty-five years, yet authored great books Muslims benefit from to this day — a blessing in lifespan and time!' },
    who:{ ar:'هو <b>يحيى بنُ شرفٍ النووي</b>، عالمٌ مباركٌ من علماءِ الشام، إمامٌ في <b>الحديثِ والفقه</b>. عُرِفَ بـ<b>الزهدِ الشديدِ والورعِ</b>، فكان يعيشُ ببساطةٍ ويُفني وقتَه في العلمِ والعبادة. عاشَ عمراً قصيراً (نحوَ ٤٥ سنة) لكنّ اللهَ <b>بارَكَ في وقتِه وعلمِه</b>، فألّفَ كتباً عظيمةً ما زالتْ تُدرَّسُ وتُحفَظُ إلى اليوم، ومنها <b>«الأربعونَ النووية»</b> (أربعونَ حديثاً جامعاً) و<b>«رياضُ الصالحين»</b> و<b>«شرحُ صحيحِ مسلم»</b>. كان <b>شجاعاً في قولِ الحق</b> أمامَ الحكّام، آمراً بالمعروفِ ناهياً عن المنكر. مثالٌ لبركةِ الوقتِ مع الزهدِ والإخلاص.',
      en:'He is <b>Yahya ibn Sharaf an-Nawawi</b>, a blessed scholar of Sham, an imam in <b>hadith and jurisprudence</b>. He was known for <b>intense asceticism and scrupulousness</b>, living simply and spending his time in knowledge and worship. He lived a short life (about 45 years), but Allah <b>blessed his time and knowledge</b>, so he authored great books still studied and memorized today, including <b>"the Forty Hadiths of an-Nawawi"</b> (forty comprehensive hadiths), <b>"Riyad as-Salihin,"</b> and <b>"the Commentary on Sahih Muslim."</b> He was <b>courageous in speaking the truth</b> before rulers, enjoining good and forbidding evil. A model of the blessing of time with asceticism and sincerity.' },
    facts:[
      { ar:'عالمٌ مباركٌ إمامٌ في الحديثِ والفقه.', en:'A blessed scholar, an imam in hadith and jurisprudence.' },
      { ar:'ألّفَ «الأربعينَ النووية» و«رياضَ الصالحين».', en:'He authored "the Forty Hadiths" and "Riyad as-Salihin."' },
      { ar:'عاشَ قصيراً لكنّ اللهَ بارَكَ في وقتِه وعلمِه.', en:'He lived a short life, but Allah blessed his time and knowledge.' },
      { ar:'كان زاهداً ورِعاً يعيشُ ببساطة.', en:'He was ascetic and scrupulous, living simply.' },
      { ar:'شجاعٌ في قولِ الحقِّ أمامَ الحكّام.', en:'Courageous in speaking the truth before rulers.' },
    ],
    timeline:[
      { when:{ar:'طلبُ العلم',en:'Seeking Knowledge'}, what:{ar:'رحلَ للشامِ وطلبَ العلمَ بجدٍّ عظيم.',en:'He traveled to Sham and sought knowledge with great diligence.'} },
      { when:{ar:'الزهد',en:'Asceticism'}, what:{ar:'عاشَ زاهداً ببساطةٍ يُفني وقتَه في العلم.',en:'He lived ascetic and simply, spending his time in knowledge.'} },
      { when:{ar:'التأليف',en:'Authorship'}, what:{ar:'ألّفَ كتباً عظيمةً نافعةً في عمرٍ قصير.',en:'He authored great, beneficial books in a short life.'} },
      { when:{ar:'الشجاعة',en:'Courage'}, what:{ar:'قالَ الحقَّ أمامَ الحكّامِ بشجاعة.',en:'He spoke the truth before rulers with courage.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'بقيتْ كتبُه تُحفَظُ وتُدرَّسُ إلى اليوم.',en:'His books are still memorized and studied today.'} },
    ],
    ayah:{ ar:'﴿ وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ ﴾', ref:{ ar:'البقرة ١٩٧', en:'Al-Baqara 197' } },
  },

  story:[
    { title:{ ar:'صاحبُ الأربعينَ والرياض', en:'Author of the Forty & the Gardens' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ النووي</b> عالماً مباركاً زاهداً، إماماً في الحديثِ والفقه. عاشَ عمراً قصيراً لكنّ اللهَ بارَكَ في وقتِه، فألّفَ «الأربعينَ النووية» و«رياضَ الصالحين» وغيرَها. كان ورِعاً شجاعاً في قولِ الحق، وبقيتْ كتبُه تنفعُ المسلمينَ إلى اليوم.',
          en:'<b>Imam an-Nawawi</b> was a blessed, ascetic scholar, an imam in hadith and jurisprudence. He lived a short life, but Allah blessed his time, so he authored "the Forty Hadiths," "Riyad as-Salihin," and others. He was scrupulous and courageous in speaking the truth, and his books keep benefiting Muslims to this day.' } } ] }
  ],

  traits:[
    { ar:'الزهد', en:'Asceticism' }, { ar:'بركةُ الوقت', en:'Blessing of time' },
    { ar:'الإخلاص', en:'Sincerity' }, { ar:'الشجاعة', en:'Courage' },
  ],
  lessons:[
    { icon:'⏳', color:'#2A6A6A', title:{ar:'بارِكْ في وقتِك بالعمل',en:'Bless your time with work'},
      body:{ar:'عاشَ النوويُّ قصيراً لكنّه ملأَ وقتَه بالعلمِ فبارَكَ اللهُ فيه. البركةُ في استثمارِ الوقت.',en:'An-Nawawi lived a short life but filled his time with knowledge, so Allah blessed it. Blessing lies in investing time.'},
      apply:{ar:'أملأُ وقتي بالنافعِ لأنالَ البركة.',en:'I fill my time with what is beneficial to gain blessing.'} },
    { icon:'🌿', color:'#4A8A8A', title:{ar:'ازهدْ في الدنيا',en:'Be detached from the world'},
      body:{ar:'عاشَ النوويُّ زاهداً ببساطةٍ مُقبِلاً على العلمِ والعبادة. الزهدُ يُحرِّرُ القلبَ للخير.',en:'An-Nawawi lived ascetic and simply, devoted to knowledge and worship. Asceticism frees the heart for good.'},
      apply:{ar:'أقنعُ بالبسيطِ وأُقبِلُ على ما ينفعُني.',en:'I am content with the simple and devote myself to what benefits me.'} },
    { icon:'🦁', color:'#1A5A5A', title:{ar:'قلِ الحقَّ بشجاعة',en:'Speak the truth with courage'},
      body:{ar:'قالَ النوويُّ الحقَّ أمامَ الحكّامِ بلا خوف. الأمرُ بالمعروفِ شجاعةٌ وأمانة.',en:'An-Nawawi spoke the truth before rulers without fear. Enjoining good is courage and a trust.'},
      apply:{ar:'أقولُ الحقَّ بأدبٍ ولا أخافُ إلّا الله.',en:'I speak the truth courteously and fear none but Allah.'} },
    { icon:'✍️', color:'#2A6A6A', title:{ar:'اترکْ أثراً نافعاً',en:'Leave a beneficial mark'},
      body:{ar:'تركَ النوويُّ كتباً ينتفعُ بها الناسُ بعدَه قروناً. العملُ النافعُ صدقةٌ جارية.',en:'An-Nawawi left books people benefit from for centuries after him. Beneficial work is an ongoing charity.'},
      apply:{ar:'أسعى أن أترکَ أثراً ينفعُ غيري.',en:'I strive to leave a mark that benefits others.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ ﴾', ref:{ ar:'البقرة ١٩٧', en:'Al-Baqara 197' } },
    dua:{ ar:'اللّهُمَّ بارِكْ لي في وقتي وعمري واجعلني من العاملينَ النافعين', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أملأُ وقتي بالنافعِ لأنالَ البركة.', en:'I fill my time with what is beneficial to gain blessing.' },
        { ar:'أزهدُ في الدنيا وأُقبِلُ على الخير.', en:'I am detached from the world and devote myself to good.' },
        { ar:'أقولُ الحقَّ وأترکُ أثراً نافعاً.', en:'I speak the truth and leave a beneficial mark.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما أشهرُ كتبِ النووي؟',en:'What are an-Nawawi\u2019s most famous books?'},
          options:[{ar:'الأربعونَ النووية ورياضُ الصالحين',en:'The Forty Hadiths and Riyad as-Salihin'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'كم عاشَ النوويُّ تقريباً؟',en:'About how long did an-Nawawi live?'},
          options:[{ar:'نحوَ ٤٥ سنة',en:'About 45 years'},{ar:'١٠٠ سنة',en:'100 years'},{ar:'١٠ سنوات',en:'10 years'}], answer:0 },
        { q:{ar:'بأيِّ صفةٍ عُرِفَ النووي؟',en:'What was an-Nawawi known for?'},
          options:[{ar:'الزهدِ والورعِ وبركةِ الوقت',en:'Asceticism, scrupulousness, and blessing of time'},{ar:'حبِّ المال',en:'Love of wealth'},{ar:'الكسل',en:'Laziness'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'النوويُّ ألّفَ «رياضَ الصالحين».',en:'An-Nawawi authored "Riyad as-Salihin."'}, t:true },
        { statement:{ar:'بارَكَ اللهُ في وقتِه رغمَ قصرِ عمرِه.',en:'Allah blessed his time despite his short life.'}, t:true },
        { statement:{ar:'كان محبّاً للدنيا مُسرِفاً.',en:'He loved the world and was extravagant.'}, t:false },
        { statement:{ar:'كان شجاعاً في قولِ الحقِّ أمامَ الحكّام.',en:'He was courageous in speaking the truth before rulers.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الأربعونَ النووية',en:'The Forty Hadiths'}, b:{ar:'من كتبِه المشهورة',en:'Among his famous books'} },
        { a:{ar:'رياضُ الصالحين',en:'Riyad as-Salihin'}, b:{ar:'كتابٌ يحفظُه المسلمون',en:'A book Muslims memorize'} },
        { a:{ar:'الزهد',en:'Asceticism'}, b:{ar:'صفتُه المعروفة',en:'His well-known trait'} },
        { a:{ar:'بركةُ الوقت',en:'Blessing of time'}, b:{ar:'ألّفَ الكثيرَ في عمرٍ قصير',en:'He authored much in a short life'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الزهدِ والبركة', en:'Medal of Asceticism & Blessing' },
    stickers:[
      { icon:'book',  color:'#2A6A6A', title:{ar:'صاحبُ الرياض',en:'Author of the Gardens'} },
      { icon:'gem',   color:'#4A8A8A', title:{ar:'الزاهدُ الورِع',en:'The Ascetic & Scrupulous'} },
      { icon:'light', color:'#1A5A5A', title:{ar:'المباركُ في وقتِه',en:'Blessed in His Time'} },
      { icon:'star',  color:'#2A6A6A', title:{ar:'الشجاعُ في الحق',en:'Courageous in Truth'} },
    ],
    moral:{ ar:'الإمامُ النوويُّ قدوةٌ في الزهدِ وبركةِ الوقتِ والإخلاص — عاشَ قصيراً فبارَكَ اللهُ في عمرِه وعلمِه ونفعِه.',
      en:'Imam an-Nawawi is a model of asceticism, the blessing of time, and sincerity — he lived a short life, so Allah blessed his lifespan, knowledge, and benefit.' },
    reflect:[
      { ar:'بارَكَ اللهُ في وقتِ النووي. كيف تملأُ وقتَك بما ينفعُ لتنالَ البركة؟', en:'Allah blessed an-Nawawi\u2019s time. How do you fill your time with what benefits to gain blessing?' },
      { ar:'تركَ كتباً تنفعُ الناسَ بعدَه. ما الأثرُ النافعُ الذي تطمحُ أن تتركَه؟', en:'He left books benefiting people after him. What beneficial mark do you aspire to leave?' },
    ],
  },
};
