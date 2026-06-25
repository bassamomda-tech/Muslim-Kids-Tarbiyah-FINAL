// data/chapters/albani.js — Scholars · الشيخ الألباني (full chapter; Story tab uses data/stories/albani.js)
// Sources: حياة الألباني · إسلام ويب · الدرر السنية · كتب التراجم المعاصرة
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.albani = {
  id:'albani', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الشيخُ الألباني', en:'Al-Albani' },
  tag:{ ar:'محدّثُ العصر', en:'Hadith scholar of the age' },
  accent:'#3A6A3A', accent2:'#5A8A5A',
  greeting:{ ar:'أهلاً يا بطل! الشيخُ الألبانيُّ رحمه الله محدّثُ العصر، بدأَ مُصلِّحاً للساعاتِ ثمّ صارَ من أعظمِ علماءِ الحديثِ بالاجتهادِ والمكتبة. تعالَ نتعلّمْ من حبِّه للعلمِ ومثابرتِه.',
    en:'Hello, hero! Shaykh al-Albani, the hadith scholar of the age, who began as a watch-repairman then became one of the greatest scholars of hadith through diligence and the library. Come, let\'s learn from his love of knowledge and perseverance.' },

  knowledge:{
    didYouKnow:{ ar:'بدأَ الألبانيُّ حياتَه يعملُ في إصلاحِ الساعات، لكنّ حبَّه للحديثِ جعله يقضي ساعاتٍ طويلةً في المكتبةِ حتى صارَ من أعظمِ علماءِ الحديثِ في العصرِ الحديث!',
      en:'Al-Albani began life working in watch repair, but his love of hadith made him spend long hours in the library until he became one of the greatest hadith scholars of the modern age!' },
    who:{ ar:'هو <b>محمدُ ناصرُ الدينِ الألباني</b>، من أشهرِ علماءِ الحديثِ في <b>العصرِ الحديث</b>، لُقِّبَ بـ<b>«محدّثِ العصر»</b>. بدأَ حياتَه يعملُ مع والدِه في <b>إصلاحِ الساعات</b>، وكان فقيراً لا يملكُ مالاً كثيراً. لكنّه أحبَّ <b>علمَ الحديث</b> حبّاً عظيماً، فأخذَ يقضي ساعاتٍ طويلةً في <b>المكتبةِ الظاهرية</b> بدمشق، يقرأُ ويبحثُ وينسخُ الكتبَ بيدِه. بمثابرتِه وجدِّه صارَ <b>عالماً كبيراً في الحديث</b>، وقضى عمرَه في <b>تمييزِ الأحاديثِ الصحيحةِ من الضعيفة</b> وخدمةِ سنّةِ النبيِّ ﷺ. ألّفَ كتباً كثيرةً نافعة، وكان مثالاً للعصاميِّ الذي يصنعُ نفسَه بالعلمِ والاجتهاد.',
      en:'He is <b>Muhammad Nasiruddin al-Albani</b>, among the most famous hadith scholars of the <b>modern age</b>, titled <b>"the hadith scholar of the age."</b> He began life working with his father in <b>watch repair</b>, and was poor without much money. But he loved the <b>science of hadith</b> greatly, so he spent long hours in the <b>az-Zahiriyya Library</b> in Damascus, reading, researching, and copying books by hand. Through his perseverance and diligence he became a <b>great scholar of hadith</b>, and spent his life <b>distinguishing authentic hadiths from weak ones</b> and serving the Prophet\u2019s ﷺ Sunnah. He authored many beneficial books and was a model of the self-made man who builds himself through knowledge and diligence.' },
    facts:[
      { ar:'من أشهرِ علماءِ الحديثِ في العصرِ الحديث.', en:'Among the most famous hadith scholars of the modern age.' },
      { ar:'بدأَ حياتَه يعملُ في إصلاحِ الساعات.', en:'He began life working in watch repair.' },
      { ar:'قضى ساعاتٍ طويلةً في المكتبةِ يطلبُ العلم.', en:'He spent long hours in the library seeking knowledge.' },
      { ar:'تخصّصَ في تمييزِ الصحيحِ من الضعيفِ من الأحاديث.', en:'He specialized in distinguishing authentic from weak hadiths.' },
      { ar:'عصاميٌّ صنعَ نفسَه بالعلمِ والمثابرة.', en:'A self-made man who built himself through knowledge and perseverance.' },
    ],
    timeline:[
      { when:{ar:'البداية',en:'The Start'}, what:{ar:'عملَ مع والدِه في إصلاحِ الساعات.',en:'He worked with his father in watch repair.'} },
      { when:{ar:'حبُّ الحديث',en:'Love of Hadith'}, what:{ar:'أحبَّ علمَ الحديثِ فلازمَ المكتبة.',en:'He loved hadith, so he frequented the library.'} },
      { when:{ar:'المثابرة',en:'Perseverance'}, what:{ar:'قضى ساعاتٍ طويلةً يقرأُ وينسخُ بيدِه.',en:'He spent long hours reading and copying by hand.'} },
      { when:{ar:'العلم',en:'Knowledge'}, what:{ar:'صارَ من أعظمِ علماءِ الحديثِ في عصرِه.',en:'He became one of the greatest hadith scholars of his age.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'خدمَ السنّةَ وألّفَ كتباً كثيرةً نافعة.',en:'He served the Sunnah and authored many beneficial books.'} },
    ],
    ayah:{ ar:'﴿ وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ﴾', ref:{ ar:'العنكبوت ٦٩', en:'Al-Ankabut 69' } },
  },

  story:[
    { title:{ ar:'محدّثُ العصر', en:'Hadith Scholar of the Age' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الشيخُ الألباني</b> من أشهرِ علماءِ الحديثِ في العصرِ الحديث. بدأَ حياتَه يعملُ في إصلاحِ الساعات، لكنّ حبَّه للحديثِ جعله يقضي ساعاتٍ طويلةً في المكتبة، حتى صارَ عالماً كبيراً يُميِّزُ الصحيحَ من الضعيف. كان عصاميّاً صنعَ نفسَه بالعلمِ والمثابرة.',
          en:'<b>Shaykh al-Albani</b> was among the most famous hadith scholars of the modern age. He began life working in watch repair, but his love of hadith made him spend long hours in the library, until he became a great scholar who distinguished authentic from weak hadith. He was a self-made man who built himself through knowledge and perseverance.' } } ] }
  ],

  traits:[
    { ar:'حبُّ العلم', en:'Love of knowledge' }, { ar:'المثابرة', en:'Perseverance' },
    { ar:'الدقّة', en:'Precision' }, { ar:'العصاميّة', en:'Self-reliance' },
  ],
  lessons:[
    { icon:'📚', color:'#3A6A3A', title:{ar:'أحبَّ العلمَ واطلبْه بشغف',en:'Love knowledge and seek it with passion'},
      body:{ar:'أحبَّ الألبانيُّ الحديثَ فقضى ساعاتٍ طويلةً في المكتبة. حبُّ العلمِ يصنعُ العلماء.',en:'Al-Albani loved hadith and spent long hours in the library. Love of knowledge makes scholars.'},
      apply:{ar:'أُحِبُّ العلمَ وأطلبُه بشغفٍ ومثابرة.',en:'I love knowledge and seek it with passion and perseverance.'} },
    { icon:'💪', color:'#5A8A5A', title:{ar:'الظروفُ لا تمنعُ النجاح',en:'Circumstances don\u2019t prevent success'},
      body:{ar:'كان الألبانيُّ فقيراً يعملُ في الساعاتِ فصارَ عالماً كبيراً. العزيمةُ تتغلّبُ على الظروف.',en:'Al-Albani was poor, working in watches, and became a great scholar. Resolve overcomes circumstances.'},
      apply:{ar:'لا أجعلُ ظروفي عذراً وأجتهدُ دائماً.',en:'I do not make my circumstances an excuse and always strive.'} },
    { icon:'🔍', color:'#2A5A2A', title:{ar:'تثبّتْ ودقّقْ',en:'Verify and be precise'},
      body:{ar:'أفنى الألبانيُّ عمرَه في تمييزِ الصحيحِ من الضعيف. التثبّتُ يحفظُ العلمَ من الخطأ.',en:'Al-Albani spent his life distinguishing authentic from weak. Verification protects knowledge from error.'},
      apply:{ar:'أتأكّدُ من صحّةِ ما أتعلّمُه وأنقلُه.',en:'I verify the soundness of what I learn and transmit.'} },
    { icon:'⏰', color:'#3A6A3A', title:{ar:'استثمرْ وقتَك في النافع',en:'Invest your time in the beneficial'},
      body:{ar:'قضى الألبانيُّ ساعاتٍ طويلةً في القراءةِ والبحثِ بدلَ اللهو. الوقتُ المستثمَرُ يصنعُ العظماء.',en:'Al-Albani spent long hours reading and researching instead of amusement. Invested time makes great people.'},
      apply:{ar:'أستثمرُ وقتي في القراءةِ والتعلّم.',en:'I invest my time in reading and learning.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ﴾', ref:{ ar:'العنكبوت ٦٩', en:'Al-Ankabut 69' } },
    dua:{ ar:'اللّهُمَّ ارزقني حبَّ العلمِ والمثابرةَ والإخلاصَ في طلبِه', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُحِبُّ العلمَ وأطلبُه بشغفٍ ومثابرة.', en:'I love knowledge and seek it with passion and perseverance.' },
        { ar:'لا أجعلُ ظروفي عذراً وأجتهدُ دائماً.', en:'I don\u2019t make my circumstances an excuse and always strive.' },
        { ar:'أستثمرُ وقتي في القراءةِ والتعلّمِ والتثبّت.', en:'I invest my time in reading, learning, and verifying.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ الشيخُ الألباني؟',en:'What was Shaykh al-Albani known as?'},
          options:[{ar:'محدّثُ العصر',en:'Hadith scholar of the age'},{ar:'الفاتح',en:'The Conqueror'},{ar:'أميرُ المؤمنين',en:'Commander of the Faithful'}], answer:0 },
        { q:{ar:'ما العملُ الذي بدأَ به الألبانيُّ حياتَه؟',en:'What work did al-Albani begin his life with?'},
          options:[{ar:'إصلاحُ الساعات',en:'Watch repair'},{ar:'التجارة',en:'Trade'},{ar:'الزراعة',en:'Farming'}], answer:0 },
        { q:{ar:'بِمَ صارَ الألبانيُّ عالماً كبيراً؟',en:'How did al-Albani become a great scholar?'},
          options:[{ar:'بحبِّ العلمِ والمثابرةِ في المكتبة',en:'Through love of knowledge and perseverance in the library'},{ar:'بالمالِ',en:'Through wealth'},{ar:'بالحظِّ',en:'By luck'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'الألبانيُّ من أشهرِ علماءِ الحديثِ في العصرِ الحديث.',en:'Al-Albani was among the most famous hadith scholars of the modern age.'}, t:true },
        { statement:{ar:'بدأَ فقيراً يعملُ في الساعاتِ ثمّ صارَ عالماً.',en:'He began poor working in watches, then became a scholar.'}, t:true },
        { statement:{ar:'كان غنيّاً ولم يجتهدْ في طلبِ العلم.',en:'He was rich and did not strive to seek knowledge.'}, t:false },
        { statement:{ar:'تخصّصَ في تمييزِ الصحيحِ من الضعيف.',en:'He specialized in distinguishing authentic from weak.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'محدّثُ العصر',en:'Hadith scholar of the age'}, b:{ar:'لقبُ الألباني',en:'Al-Albani\u2019s title'} },
        { a:{ar:'الساعات',en:'Watches'}, b:{ar:'عملُه في البداية',en:'His work at the start'} },
        { a:{ar:'المكتبة',en:'The library'}, b:{ar:'قضى فيها ساعاتٍ طويلة',en:'He spent long hours in it'} },
        { a:{ar:'الحديث',en:'Hadith'}, b:{ar:'تخصّصَ في تمييزِ صحيحِه',en:'He specialized in distinguishing its authentic'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ المثابرةِ في العلم', en:'Medal of Perseverance in Knowledge' },
    stickers:[
      { icon:'book',  color:'#3A6A3A', title:{ar:'محدّثُ العصر',en:'Hadith Scholar of the Age'} },
      { icon:'light', color:'#5A8A5A', title:{ar:'العصاميُّ المثابر',en:'The Persevering Self-Made'} },
      { icon:'gem',   color:'#2A5A2A', title:{ar:'الدقيقُ المتحرّي',en:'The Precise & Careful'} },
      { icon:'star',  color:'#3A6A3A', title:{ar:'خادمُ السنّة',en:'Servant of the Sunnah'} },
    ],
    moral:{ ar:'الشيخُ الألبانيُّ قدوةٌ في حبِّ العلمِ والمثابرةِ والعصاميّة — بدأَ بسيطاً فصنعَ نفسَه بالعلمِ حتى صارَ محدّثَ العصر.',
      en:'Shaykh al-Albani is a model of love of knowledge, perseverance, and self-reliance — he began humbly and built himself through knowledge until he became the hadith scholar of the age.' },
    reflect:[
      { ar:'صارَ الألبانيُّ عالماً بحبِّه للعلمِ ومثابرتِه. كيف تجتهدُ في طلبِ ما تحب؟', en:'Al-Albani became a scholar through love of knowledge and perseverance. How do you strive to seek what you love?' },
      { ar:'لم تمنعْه ظروفُه المتواضعةُ من النجاح. كيف تتغلّبُ على ظروفِك الصعبة؟', en:'His humble circumstances did not prevent his success. How do you overcome your hard circumstances?' },
    ],
  },
};
