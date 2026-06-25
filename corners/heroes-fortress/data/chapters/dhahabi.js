// data/chapters/dhahabi.js — Scholars · الإمام الذهبي (full chapter; Story tab uses data/stories/dhahabi.js)
// Sources: الدرر الكامنة · إسلام ويب · الدرر السنية · كتب التراجم
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.dhahabi = {
  id:'dhahabi', era:'heroes', icon:'pen',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ الذهبي', en:'Adh-Dhahabi' },
  tag:{ ar:'مؤرّخُ الإسلام', en:'Historian of Islam' },
  accent:'#7A5A1A', accent2:'#9A7A3A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ الذهبيُّ رحمه الله مؤرّخُ الإسلامِ الكبير، حفظَ لنا سيرَ آلافِ العلماءِ والأبطال، وكان حافظاً دقيقاً ناقداً. تعالَ نتعلّمْ من علمِه وحفظِه للتراث.',
    en:'Hello, hero! Imam adh-Dhahabi, the great historian of Islam, who preserved for us the biographies of thousands of scholars and heroes, a precise, critical memorizer. Come, let\'s learn from his knowledge and preservation of heritage.' },

  knowledge:{
    didYouKnow:{ ar:'ألّفَ الذهبيُّ كتابَ «سير أعلام النبلاء» الذي يضمُّ سيرَ آلافِ العلماءِ والصحابةِ والأبطال — كأنّه موسوعةٌ تحفظُ ذاكرةَ الأمّة!',
      en:'Adh-Dhahabi authored "Siyar A\u2019lam an-Nubala\u2019," containing the biographies of thousands of scholars, companions, and heroes — like an encyclopedia preserving the nation\u2019s memory!' },
    who:{ ar:'هو <b>محمدُ بنُ أحمدَ الذهبي</b>، الحافظُ المؤرّخُ الكبير، لُقِّبَ بـ<b>«مؤرّخِ الإسلام»</b>. كان <b>حافظاً واسعَ العلمِ دقيقاً ناقداً</b>، يعرفُ أحوالَ الرواةِ والعلماءِ معرفةً عجيبة. أفنى عمرَه في جمعِ <b>سيرِ أعلامِ الأمّةِ وتراجمِهم</b>، فألّفَ كتبَه العظيمةَ ومنها <b>«سير أعلام النبلاء»</b> و<b>«تاريخ الإسلام»</b>، التي حفظتْ لنا قصصَ آلافِ العلماءِ والصحابةِ والأبطالِ والمحدّثين. لولا الذهبيُّ وأمثالُه لضاعَ كثيرٌ من تاريخِ أبطالِ الإسلام! كان عالماً ورِعاً منصفاً في أحكامِه، فكان مثالاً للعالمِ الذي يحفظُ ذاكرةَ أمّتِه.',
      en:'He is <b>Muhammad ibn Ahmad adh-Dhahabi</b>, the great hadith-memorizer and historian, titled <b>"Historian of Islam."</b> He was a <b>memorizer of vast knowledge, precise and critical</b>, who knew the conditions of narrators and scholars amazingly well. He spent his life gathering the <b>biographies of the nation\u2019s notables</b>, authoring his great books including <b>"Siyar A\u2019lam an-Nubala\u2019"</b> and <b>"Tarikh al-Islam,"</b> which preserved for us the stories of thousands of scholars, companions, heroes, and hadith scholars. Were it not for adh-Dhahabi and his like, much of the history of Islam\u2019s heroes would have been lost! He was a scrupulous, fair scholar in his judgments, a model of the scholar who preserves his nation\u2019s memory.' },
    facts:[
      { ar:'الحافظُ المؤرّخُ الكبيرُ ومؤرّخُ الإسلام.', en:'The great memorizer-historian, "Historian of Islam."' },
      { ar:'ألّفَ «سير أعلام النبلاء» و«تاريخ الإسلام».', en:'He authored "Siyar A\u2019lam an-Nubala\u2019" and "Tarikh al-Islam."' },
      { ar:'حفظَ سيرَ آلافِ العلماءِ والصحابةِ والأبطال.', en:'He preserved the biographies of thousands of scholars, companions, and heroes.' },
      { ar:'كان دقيقاً ناقداً يعرفُ أحوالَ الرواة.', en:'He was precise and critical, knowing the narrators\u2019 conditions.' },
      { ar:'حفظَ ذاكرةَ الأمّةِ من الضياع.', en:'He preserved the nation\u2019s memory from being lost.' },
    ],
    timeline:[
      { when:{ar:'طلبُ العلم',en:'Seeking Knowledge'}, what:{ar:'طلبَ العلمَ ورحلَ وحفظَ الكثير.',en:'He sought knowledge, traveled, and memorized much.'} },
      { when:{ar:'الحفظ',en:'Memorization'}, what:{ar:'صارَ حافظاً يعرفُ أحوالَ الرواة.',en:'He became a memorizer knowing narrators\u2019 conditions.'} },
      { when:{ar:'التأليف',en:'Authorship'}, what:{ar:'ألّفَ كتبَ التراجمِ والتاريخِ العظيمة.',en:'He authored great books of biography and history.'} },
      { when:{ar:'السير',en:'The Siyar'}, what:{ar:'جمعَ سيرَ آلافِ الأعلام.',en:'He gathered the biographies of thousands of notables.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'حفظَ ذاكرةَ الأمّةِ للأجيال.',en:'He preserved the nation\u2019s memory for generations.'} },
    ],
    ayah:{ ar:'﴿ لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ ﴾', ref:{ ar:'يوسف ١١١', en:'Yusuf 111' } },
  },

  story:[
    { title:{ ar:'مؤرّخُ الإسلام', en:'Historian of Islam' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ الذهبي</b> الحافظَ المؤرّخَ الكبير، لُقِّبَ بمؤرّخِ الإسلام. أفنى عمرَه في جمعِ سيرِ آلافِ العلماءِ والصحابةِ والأبطال، وألّفَ «سير أعلام النبلاء» و«تاريخ الإسلام». كان دقيقاً منصفاً، فحفظَ ذاكرةَ الأمّةِ من الضياع.',
          en:'<b>Imam adh-Dhahabi</b> was the great memorizer-historian, titled "Historian of Islam." He spent his life gathering the biographies of thousands of scholars, companions, and heroes, authoring "Siyar A\u2019lam an-Nubala\u2019" and "Tarikh al-Islam." He was precise and fair, preserving the nation\u2019s memory from being lost.' } } ] }
  ],

  traits:[
    { ar:'الحفظ', en:'Memorization' }, { ar:'الدقّة', en:'Precision' },
    { ar:'الإنصاف', en:'Fairness' }, { ar:'حفظُ التراث', en:'Preserving heritage' },
  ],
  lessons:[
    { icon:'📚', color:'#7A5A1A', title:{ar:'احفظْ تاريخَ أمّتِك',en:'Preserve your nation\u2019s history'},
      body:{ar:'حفظَ الذهبيُّ سيرَ آلافِ الأبطالِ والعلماءِ من الضياع. حفظُ التاريخِ يربطُ الأجيالَ بأمجادِها.',en:'Adh-Dhahabi preserved the biographies of thousands of heroes and scholars from being lost. Preserving history connects generations to their glories.'},
      apply:{ar:'أتعلّمُ تاريخَ أبطالِ أمّتي وأعتزُّ بهم.',en:'I learn the history of my nation\u2019s heroes and take pride in them.'} },
    { icon:'⚖️', color:'#9A7A3A', title:{ar:'كنْ منصفاً في حكمِك',en:'Be fair in your judgment'},
      body:{ar:'كان الذهبيُّ منصفاً في حكمِه على الناس، يذكرُ الحسناتِ والأخطاءَ بعدل. الإنصافُ خُلُقُ العلماء.',en:'Adh-Dhahabi was fair in his judgment of people, mentioning good points and errors justly. Fairness is the character of scholars.'},
      apply:{ar:'أكونُ منصفاً ولا أظلمُ أحداً في حكمي.',en:'I am fair and wrong no one in my judgment.'} },
    { icon:'🔍', color:'#5A4A0A', title:{ar:'تثبّتْ ودقّقْ',en:'Verify and be precise'},
      body:{ar:'كان الذهبيُّ دقيقاً يتحقّقُ من الأخبارِ قبلَ كتابتِها. الدقّةُ تحفظُ التاريخَ من الكذب.',en:'Adh-Dhahabi was precise, verifying reports before recording them. Precision protects history from falsehood.'},
      apply:{ar:'أتأكّدُ من صحّةِ ما أنقلُه عن الناس.',en:'I verify the accuracy of what I transmit about people.'} },
    { icon:'🌟', color:'#7A5A1A', title:{ar:'تعلّمْ من سيرِ العظماء',en:'Learn from the lives of the great'},
      body:{ar:'جمعَ الذهبيُّ سيرَ العظماءِ لنتعلّمَ منهم. في سيرِ الصالحينَ قدوةٌ ودروس.',en:'Adh-Dhahabi gathered the lives of the great so we could learn from them. In the lives of the righteous are role models and lessons.'},
      apply:{ar:'أقتدي بسيرِ الأبطالِ والعلماءِ الصالحين.',en:'I follow the example of the lives of righteous heroes and scholars.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ ﴾', ref:{ ar:'يوسف ١١١', en:'Yusuf 111' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ والإنصافَ والاقتداءَ بالصالحين', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتعلّمُ تاريخَ أبطالِ أمّتي وأعتزُّ بهم.', en:'I learn my nation\u2019s heroes\u2019 history and take pride in them.' },
        { ar:'أكونُ منصفاً ولا أظلمُ أحداً.', en:'I am fair and wrong no one.' },
        { ar:'أقتدي بسيرِ الصالحينَ وأتثبّتُ في النقل.', en:'I follow the righteous and verify what I transmit.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ الإمامُ الذهبي؟',en:'What was Imam adh-Dhahabi known as?'},
          options:[{ar:'مؤرّخُ الإسلام',en:'Historian of Islam'},{ar:'الفاتح',en:'The Conqueror'},{ar:'الإمامُ الأعظم',en:'The Great Imam'}], answer:0 },
        { q:{ar:'ما أشهرُ كتبِ الذهبيِّ في التراجم؟',en:'What is adh-Dhahabi\u2019s most famous biography book?'},
          options:[{ar:'سير أعلام النبلاء',en:'Siyar A\u2019lam an-Nubala\u2019'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'ماذا حفظَ لنا الذهبيُّ بكتبِه؟',en:'What did adh-Dhahabi preserve for us with his books?'},
          options:[{ar:'سيرَ آلافِ العلماءِ والأبطال',en:'The biographies of thousands of scholars and heroes'},{ar:'لا شيء',en:'Nothing'},{ar:'قصصاً خياليّة',en:'Fictional stories'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'الذهبيُّ مؤرّخُ الإسلامِ الكبير.',en:'Adh-Dhahabi was the great Historian of Islam.'}, t:true },
        { statement:{ar:'حفظَ سيرَ آلافِ العلماءِ والأبطال.',en:'He preserved the biographies of thousands of scholars and heroes.'}, t:true },
        { statement:{ar:'كان يكذبُ في كتابةِ التاريخ.',en:'He lied in recording history.'}, t:false },
        { statement:{ar:'كان دقيقاً منصفاً في أحكامِه.',en:'He was precise and fair in his judgments.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'مؤرّخُ الإسلام',en:'Historian of Islam'}, b:{ar:'لقبُ الذهبي',en:'Adh-Dhahabi\u2019s title'} },
        { a:{ar:'سير أعلام النبلاء',en:'Siyar A\u2019lam an-Nubala\u2019'}, b:{ar:'كتابُه في التراجم',en:'His book of biographies'} },
        { a:{ar:'الإنصاف',en:'Fairness'}, b:{ar:'في حكمِه على الناس',en:'In his judgment of people'} },
        { a:{ar:'التراث',en:'Heritage'}, b:{ar:'حفظه من الضياع',en:'He preserved it from being lost'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ حفظِ التراث', en:'Medal of Preserving Heritage' },
    stickers:[
      { icon:'pen',   color:'#7A5A1A', title:{ar:'مؤرّخُ الإسلام',en:'Historian of Islam'} },
      { icon:'book',  color:'#9A7A3A', title:{ar:'صاحبُ السير',en:'Author of the Siyar'} },
      { icon:'light', color:'#5A4A0A', title:{ar:'الحافظُ الدقيق',en:'The Precise Memorizer'} },
      { icon:'star',  color:'#7A5A1A', title:{ar:'المنصفُ في حكمِه',en:'Fair in Judgment'} },
    ],
    moral:{ ar:'الإمامُ الذهبيُّ قدوةٌ في الحفظِ والدقّةِ والإنصاف — حفظَ ذاكرةَ الأمّةِ وسيرَ أبطالِها لتبقى قدوةً للأجيال.',
      en:'Imam adh-Dhahabi is a model of memory, precision, and fairness — he preserved the nation\u2019s memory and the lives of its heroes to remain examples for generations.' },
    reflect:[
      { ar:'حفظَ الذهبيُّ سيرَ الأبطالِ لنتعلّمَ منها. ما البطلُ الذي تتمنّى أن تقتديَ به؟', en:'Adh-Dhahabi preserved the heroes\u2019 lives so we could learn from them. Which hero do you wish to follow?' },
      { ar:'كان منصفاً في حكمِه على الناس. هل تكونُ منصفاً ولا تظلمُ أحداً؟', en:'He was fair in judging people. Are you fair and do you wrong no one?' },
    ],
  },
};
