// data/chapters/biruni.js — Scientists · البيروني (full chapter; Story tab uses data/stories/biruni.js)
// Sources: إسلام ويب · موسوعات تاريخ العلوم · الآثار الباقية · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.biruni = {
  id:'biruni', era:'heroes', icon:'globe',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'البيروني', en:'Al-Biruni' },
  tag:{ ar:'عالمُ الفلكِ والجغرافيا', en:'Scholar of astronomy & geography' },
  accent:'#2A4A7A', accent2:'#4A6A9A',
  greeting:{ ar:'أهلاً يا بطل! البيرونيُّ رحمه الله عالمٌ موسوعيٌّ عظيم، قاسَ محيطَ الأرضِ بدقّةٍ مذهلة، وأتقنَ لغاتٍ كثيرةً ليتعلّمَ من كلِّ الأمم. تعالَ نتعلّمْ من فضولِه العلميِّ ودقّتِه.',
    en:'Hello, hero! Al-Biruni, a great encyclopedic scholar who measured the earth\u2019s circumference with astonishing precision and mastered many languages to learn from all nations. Come, let\'s learn from his scientific curiosity and precision.' },

  knowledge:{
    didYouKnow:{ ar:'حسبَ البيرونيُّ محيطَ الأرضِ بطريقةٍ عبقريّةٍ من فوقِ جبل، فجاءَ حسابُه قريباً جدّاً من القيمةِ الحقيقيّةِ التي نعرفُها اليوم بالأجهزةِ الحديثة!',
      en:'Al-Biruni calculated the earth\u2019s circumference by a brilliant method from atop a mountain, and his result came astonishingly close to the true value we know today with modern instruments!' },
    who:{ ar:'هو <b>أبو الريحانِ البيروني</b>، عالمٌ موسوعيٌّ مسلمٌ عظيم، برعَ في <b>الفلكِ والجغرافيا والرياضياتِ والتاريخ</b>. كان <b>فضوليّاً محبّاً للمعرفة</b>، يبحثُ ويسألُ ويُجرِّبُ في كلِّ شيء. من أعظمِ إنجازاتِه أنّه <b>قاسَ محيطَ الأرضِ</b> بطريقةٍ رياضيّةٍ عبقريّةٍ من فوقِ جبل، فجاءَ حسابُه قريباً جدّاً من الحقيقة! وكان مهتمّاً بـ<b>معرفةِ الأممِ الأخرى</b>، فتعلّمَ لغاتٍ كثيرةً منها السنسكريتيّة، ورحلَ إلى الهندِ ودرسَ علومَها وعاداتِها بإنصافٍ ودقّة، وألّفَ عنها كتاباً عظيماً. كان مثالاً للعالمِ الفضوليِّ الدقيقِ المنصفِ الذي يحترمُ العلمَ أينما كان.',
      en:'He is <b>Abu ar-Rayhan al-Biruni</b>, a great encyclopedic Muslim scholar who excelled in <b>astronomy, geography, mathematics, and history</b>. He was <b>curious and a lover of knowledge</b>, researching, asking, and experimenting in everything. Among his greatest achievements: he <b>measured the earth\u2019s circumference</b> by a brilliant mathematical method from atop a mountain, and his result came astonishingly close to the truth! He was interested in <b>knowing other nations</b>, so he learned many languages including Sanskrit, traveled to India, studied its sciences and customs with fairness and precision, and authored a great book about it. He was a model of the curious, precise, fair scholar who respects knowledge wherever it is.' },
    facts:[
      { ar:'عالمٌ موسوعيٌّ في الفلكِ والجغرافيا والرياضيات.', en:'An encyclopedic scholar in astronomy, geography, and mathematics.' },
      { ar:'قاسَ محيطَ الأرضِ بدقّةٍ مذهلةٍ من فوقِ جبل.', en:'He measured the earth\u2019s circumference with astonishing precision from a mountain.' },
      { ar:'تعلّمَ لغاتٍ كثيرةً ليتعلّمَ من كلِّ الأمم.', en:'He learned many languages to learn from all nations.' },
      { ar:'رحلَ إلى الهندِ ودرسَ علومَها بإنصاف.', en:'He traveled to India and studied its sciences fairly.' },
      { ar:'كان فضوليّاً دقيقاً منصفاً محبّاً للمعرفة.', en:'He was curious, precise, fair, and a lover of knowledge.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ فضوليّاً محبّاً للمعرفةِ والبحث.',en:'He grew up curious and loving knowledge and research.'} },
      { when:{ar:'الفلك',en:'Astronomy'}, what:{ar:'برعَ في الفلكِ والرياضياتِ والجغرافيا.',en:'He excelled in astronomy, mathematics, and geography.'} },
      { when:{ar:'قياسُ الأرض',en:'Measuring the Earth'}, what:{ar:'قاسَ محيطَ الأرضِ بطريقةٍ عبقرية.',en:'He measured the earth\u2019s circumference by a brilliant method.'} },
      { when:{ar:'الهند',en:'India'}, what:{ar:'تعلّمَ السنسكريتيّةَ ودرسَ علومَ الهند.',en:'He learned Sanskrit and studied India\u2019s sciences.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'تركَ علماً عظيماً في الفلكِ والجغرافيا.',en:'He left great knowledge in astronomy and geography.'} },
    ],
    ayah:{ ar:'﴿ سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ ﴾', ref:{ ar:'فصّلت ٥٣', en:'Fussilat 53' } },
  },

  story:[
    { title:{ ar:'عالمُ الفلكِ والجغرافيا', en:'Scholar of Astronomy & Geography' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>البيروني</b> عالماً موسوعيّاً مسلماً عظيماً في الفلكِ والجغرافيا والرياضيات. قاسَ محيطَ الأرضِ بدقّةٍ مذهلةٍ من فوقِ جبل، وتعلّمَ لغاتٍ كثيرةً ورحلَ إلى الهندِ ليدرسَ علومَها بإنصاف. كان فضوليّاً دقيقاً محبّاً للمعرفة.',
          en:'<b>Al-Biruni</b> was a great encyclopedic Muslim scholar in astronomy, geography, and mathematics. He measured the earth\u2019s circumference with astonishing precision from a mountain, learned many languages, and traveled to India to study its sciences fairly. He was curious, precise, and a lover of knowledge.' } } ] }
  ],

  traits:[
    { ar:'الفضولُ العلمي', en:'Scientific curiosity' }, { ar:'الدقّة', en:'Precision' },
    { ar:'الإنصاف', en:'Fairness' }, { ar:'حبُّ المعرفة', en:'Love of knowledge' },
  ],
  lessons:[
    { icon:'🌍', color:'#2A4A7A', title:{ar:'تأمّلْ في الكونِ وآياتِ الله',en:'Reflect on the universe and Allah\u2019s signs'},
      body:{ar:'تأمّلَ البيرونيُّ في الأرضِ والنجومِ فاكتشفَ عجائبَ خلقِ الله. التأمّلُ في الكونِ علمٌ وعبادة.',en:'Al-Biruni reflected on the earth and stars, discovering the wonders of Allah\u2019s creation. Reflecting on the universe is knowledge and worship.'},
      apply:{ar:'أتأمّلُ في خلقِ اللهِ في السماءِ والأرض.',en:'I reflect on Allah\u2019s creation in the heavens and earth.'} },
    { icon:'❓', color:'#4A6A9A', title:{ar:'كنْ فضوليّاً واسألْ دائماً',en:'Be curious and always ask'},
      body:{ar:'كان البيرونيُّ يسألُ عن كلِّ شيءٍ ويبحثُ عن إجاباتٍ دقيقة. الفضولُ العلميُّ مفتاحُ الاكتشاف.',en:'Al-Biruni asked about everything and sought precise answers. Scientific curiosity is the key to discovery.'},
      apply:{ar:'أسألُ وأبحثُ لأفهمَ ما حولي.',en:'I ask and research to understand what is around me.'} },
    { icon:'⚖️', color:'#1A3A6A', title:{ar:'كنْ منصفاً مع كلِّ الناس',en:'Be fair with all people'},
      body:{ar:'درسَ البيرونيُّ علومَ الهندِ وعاداتِهم بإنصافٍ دونَ تحيّز. الإنصافُ خُلُقُ العالمِ الحق.',en:'Al-Biruni studied India\u2019s sciences and customs fairly without bias. Fairness is the character of a true scholar.'},
      apply:{ar:'أكونُ منصفاً وأحترمُ الناسَ مهما اختلفوا.',en:'I am fair and respect people however they differ.'} },
    { icon:'🗣️', color:'#2A4A7A', title:{ar:'تعلّمْ لغاتٍ لتتعلّمَ أكثر',en:'Learn languages to learn more'},
      body:{ar:'تعلّمَ البيرونيُّ لغاتٍ كثيرةً ليأخذَ العلمَ من مصادرِه. تعلّمُ اللغاتِ يفتحُ أبوابَ المعرفة.',en:'Al-Biruni learned many languages to take knowledge from its sources. Learning languages opens doors of knowledge.'},
      apply:{ar:'أتعلّمُ ما ينفعُني للوصولِ إلى العلم.',en:'I learn what helps me reach knowledge.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ ﴾', ref:{ ar:'فصّلت ٥٣', en:'Fussilat 53' } },
    dua:{ ar:'اللّهُمَّ أرني عجائبَ خلقِك وزِدني علماً وفهماً', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتأمّلُ في خلقِ اللهِ وآياتِه.', en:'I reflect on Allah\u2019s creation and signs.' },
        { ar:'أكونُ فضوليّاً أسألُ وأبحثُ بدقّة.', en:'I am curious, asking and researching precisely.' },
        { ar:'أكونُ منصفاً وأحترمُ كلَّ الناس.', en:'I am fair and respect all people.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ علومٍ اشتهرَ البيروني؟',en:'What sciences was al-Biruni famous for?'},
          options:[{ar:'الفلكِ والجغرافيا والرياضيات',en:'Astronomy, geography, and mathematics'},{ar:'الشعرِ فقط',en:'Poetry only'},{ar:'التجارة',en:'Trade'}], answer:0 },
        { q:{ar:'ماذا قاسَ البيرونيُّ بدقّةٍ مذهلة؟',en:'What did al-Biruni measure with astonishing precision?'},
          options:[{ar:'محيطَ الأرض',en:'The earth\u2019s circumference'},{ar:'عددَ النجوم',en:'The number of stars'},{ar:'عمرَ الأرض',en:'The earth\u2019s age'}], answer:0 },
        { q:{ar:'لماذا تعلّمَ البيرونيُّ لغاتٍ كثيرة؟',en:'Why did al-Biruni learn many languages?'},
          options:[{ar:'ليتعلّمَ من علومِ كلِّ الأمم',en:'To learn from the sciences of all nations'},{ar:'للتجارة',en:'For trade'},{ar:'للتسلية',en:'For fun'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'البيرونيُّ قاسَ محيطَ الأرضِ بدقّة.',en:'Al-Biruni measured the earth\u2019s circumference precisely.'}, t:true },
        { statement:{ar:'تعلّمَ لغاتٍ كثيرةً ودرسَ علومَ الهند.',en:'He learned many languages and studied India\u2019s sciences.'}, t:true },
        { statement:{ar:'كان متحيّزاً لا يحترمُ علمَ غيرِه.',en:'He was biased and did not respect others\u2019 knowledge.'}, t:false },
        { statement:{ar:'كان فضوليّاً محبّاً للمعرفة.',en:'He was curious and a lover of knowledge.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'محيطُ الأرض',en:'Earth\u2019s circumference'}, b:{ar:'قاسه بدقّة',en:'He measured it precisely'} },
        { a:{ar:'الهند',en:'India'}, b:{ar:'رحلَ ودرسَ علومَها',en:'He traveled and studied its sciences'} },
        { a:{ar:'اللغات',en:'Languages'}, b:{ar:'تعلّمها ليتعلّمَ أكثر',en:'He learned them to learn more'} },
        { a:{ar:'الفلك',en:'Astronomy'}, b:{ar:'من علومِه',en:'Among his sciences'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفلكِ والمعرفة', en:'Medal of Astronomy & Knowledge' },
    stickers:[
      { icon:'globe', color:'#2A4A7A', title:{ar:'عالمُ الجغرافيا',en:'Scholar of Geography'} },
      { icon:'compass',color:'#4A6A9A', title:{ar:'قائسُ الأرض',en:'Measurer of the Earth'} },
      { icon:'light', color:'#1A3A6A', title:{ar:'الفضوليُّ الدقيق',en:'The Precise & Curious'} },
      { icon:'star',  color:'#2A4A7A', title:{ar:'المنصفُ المحبُّ للمعرفة',en:'Fair Lover of Knowledge'} },
    ],
    moral:{ ar:'البيرونيُّ قدوةٌ في الفضولِ العلميِّ والدقّةِ والإنصاف — تأمّلَ في خلقِ اللهِ ودرسَ علومَ الأممِ بعقلٍ منفتحٍ منصف.',
      en:'Al-Biruni is a model of scientific curiosity, precision, and fairness — he reflected on Allah\u2019s creation and studied the nations\u2019 sciences with an open, fair mind.' },
    reflect:[
      { ar:'تأمّلَ البيرونيُّ في الأرضِ والنجومِ فاكتشفَ آياتِ الله. ماذا تتأمّلُ في الكونِ من حولِك؟', en:'Al-Biruni reflected on the earth and stars, discovering Allah\u2019s signs. What do you reflect on in the universe around you?' },
      { ar:'كان منصفاً يحترمُ علمَ الآخرين. كيف تكونُ منصفاً ومنفتحاً على المعرفة؟', en:'He was fair, respecting others\u2019 knowledge. How are you fair and open to knowledge?' },
    ],
  },
};
