// data/chapters/ilyas.js — Era I · Ilyas عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ilyas = {
  id: 'ilyas', era: 'prophets', icon: 'mount',
  name: { ar: 'إلياسُ عليه السلام', en: 'Ilyas' },
  tag:  { ar: 'الداعي ضدَّ عبادةِ الأصنام', en: 'The one who stood against idols' },
  accent: '#A65A3A', accent2: '#C67A5A',
  greeting: { ar: 'أهلاً يا بطل! إلياسُ عليه السلام وقفَ وحدَه أمامَ قومٍ يعبدونَ صنماً اسمُه «بعل»، ودعاهم بِشجاعةٍ إلى عبادةِ اللهِ الخالق. تعالَ نتعلّمَ الثباتَ على الحقّ.', en: "Hello, hero! Ilyas stood alone before people who worshipped an idol called 'Baal,' and bravely called them to worship Allah the Creator. Come, let's learn to stand firm on the truth." },

  knowledge: {
    didYouKnow: { ar: 'دعا إلياسُ قومَه بِسؤالٍ بليغ: «أتدعونَ بعلاً وتتركونَ أحسنَ الخالقين؟»', en: "Ilyas called his people with a powerful question: 'Do you call on Baal and leave the Best of Creators?'" },
    who: {
      ar: 'إلياسُ عليه السلام نبيٌّ كريمٌ مِن أنبياءِ بني إسرائيل، مِن نسلِ هارونَ أخي موسى. أُرسِلَ إلى قومٍ تركوا اللهَ وعبدوا صنماً كبيراً اسمُه <b>«بعل»</b>. دعاهم إلى عبادةِ اللهِ وحدَه وتركِ الأصنام، وذكّرهم أنّ اللهَ هو <b>أحسنُ الخالقين</b> وربُّهم وربُّ آبائهم الأوّلين.',
      en: "Ilyas was a noble prophet of the Children of Israel, from the line of Harun, Musa's brother. He was sent to a people who left Allah and worshipped a great idol named <b>'Baal.'</b> He called them to worship Allah alone and abandon idols, reminding them that Allah is the <b>Best of Creators</b> — their Lord and the Lord of their forefathers.",
    },
    facts: [
      { ar: 'نبيٌّ مِن نسلِ هارونَ عليه السلام.', en: "A prophet from the line of Harun." },
      { ar: 'أُرسِلَ إلى قومٍ يعبدونَ صنماً اسمُه بعل.', en: "He was sent to people who worshipped an idol named Baal." },
      { ar: 'دعاهم بِشجاعةٍ لِعبادةِ اللهِ وحدَه.', en: "He bravely called them to worship Allah alone." },
      { ar: 'أثنى اللهُ عليه: «سلامٌ على إل ياسين».', en: "Allah praised him: 'Peace be upon Ilyas.'" },
    ],
    timeline: [
      { when:{ar:'القوم',en:'The People'}, what:{ar:'تركوا اللهَ وعبدوا صنمَ «بعل».',en:'They left Allah and worshipped the idol Baal.'} },
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعاهم لِعبادةِ اللهِ وحدَه.',en:'He called them to worship Allah alone.'} },
      { when:{ar:'الحُجّة',en:'The Argument'}, what:{ar:'ذكّرهم أنّ اللهَ أحسنُ الخالقين.',en:'He reminded them Allah is the Best of Creators.'} },
      { when:{ar:'التكذيب',en:'Denial'}, what:{ar:'كذّبه أكثرُهم إلا قليلاً.',en:'Most denied him, except a few.'} },
      { when:{ar:'الثناء',en:'Praise'}, what:{ar:'أثنى اللهُ عليه في القرآن.',en:'Allah praised him in the Quran.'} },
    ],
    ayah: { ar: '﴿ وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ ﴾', ref: { ar: 'الصافات ١٢٣', en: 'As-Saffat 123' } },
  },

  story: [
    { scene:'idols', text:{ ar:'أرسلَ اللهُ نبيَّه إلياسَ إلى قومٍ مِن بني إسرائيل. كانوا قد تركوا عبادةَ اللهِ الخالقِ وصنعوا صنماً كبيراً اسمُه <b>«بعل»</b> يعبدونه ويُعظِّمونه مِن دونِ الله! نسوا ربَّهم الذي خلقهم ورزقهم.',
      en:'Allah sent His prophet Ilyas to a people of the Children of Israel. They had abandoned the worship of Allah the Creator and made a great idol named <b>"Baal"</b> which they worshipped and glorified instead of Allah! They forgot their Lord who created and provided for them.' } },
    { scene:'call', text:{ ar:'وقفَ إلياسُ بِشجاعةٍ ودعاهم: «ألا تتّقونَ الله؟». ثم سألهم سؤالاً يُوقِظُ العقول: <b>﴿ أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ ﴾</b> — كيف تدعونَ حجراً لا ينفعُ ولا يضرّ، وتتركونَ اللهَ الذي خلقكم وخلقَ آباءَكم الأوّلين؟',
      en:'Ilyas stood bravely and called them: "Will you not fear Allah?" Then he asked a question to awaken their minds: <b>"Do you call upon Baal and leave the Best of Creators?"</b> — How can you call on a stone that brings no benefit or harm, and leave Allah who created you and your forefathers before you?' },
      choice:{ q:{ar:'ما الخطأُ الكبيرُ الذي وقعَ فيه قومُ إلياس؟',en:'What was the big mistake of Ilyas\'s people?'},
        opts:[
          { t:{ar:'عبدوا صنماً وتركوا اللهَ الخالق',en:'They worshipped an idol and left Allah the Creator'}, c:true, exp:{ar:'نعم! الأصنامُ حجارةٌ لا تنفعُ ولا تضرّ. العبادةُ لله وحدَه خالقِ كلِّ شيء.',en:'Yes! Idols are stones that bring no good or harm. Worship is for Allah alone, the Creator of everything.'} },
          { t:{ar:'كانوا فقراء',en:'They were poor'}, c:false, exp:{ar:'لا، بل المشكلةُ أنّهم عبدوا غيرَ الله.',en:'No — the problem was they worshipped other than Allah.'} },
          { t:{ar:'لم يبنوا بيوتاً',en:'They didn\'t build houses'}, c:false, exp:{ar:'لا، بل تركوا عبادةَ اللهِ الخالق.',en:'No — they abandoned worshipping Allah the Creator.'} },
        ] } },
    { scene:'peaks', text:{ ar:'صبرَ إلياسُ على دعوتِهم زمناً طويلاً، يُذكِّرُهم بِنِعَمِ اللهِ ويُحذِّرُهم مِن عذابِه. لكنّ أكثرهم تكبّروا وكذّبوه وأصرّوا على عبادةِ بعل. لم يستسلمْ إلياسُ ولم يخفْ مِن كثرتِهم، بل ثبتَ على الحقِّ وحدَه.',
      en:'Ilyas was patient in calling them for a long time, reminding them of Allah\'s blessings and warning them of His punishment. But most of them were arrogant, denied him, and clung to worshipping Baal. Ilyas did not give up nor fear their great numbers — he stood firm on the truth, alone.' } },
    { scene:'ascend', text:{ ar:'آمنَ بإلياسَ قليلٌ مِن الناس، وبقيَ الأكثرونَ على كُفرِهم. لكنّ إلياسَ نالَ المنزلةَ العظيمةَ عند ربِّه، فأثنى اللهُ عليه في القرآنِ وقال: <b>﴿ سَلَامٌ عَلَىٰ إِلْ يَاسِينَ ﴾</b>. وتعلّمنا منه أنّ الحقَّ لا يُقاسُ بكثرةِ مَن يتبعُه، وأنّ الثباتَ على التوحيدِ شرفٌ ولو وقفتَ وحدَك.',
      en:'A few people believed in Ilyas, while most stayed in their disbelief. But Ilyas attained a great rank with his Lord, and Allah praised him in the Quran, saying: <b>"Peace be upon Ilyas."</b> We learn from him that the truth is not measured by how many follow it, and that standing firm on worshipping Allah alone is an honour — even if you stand alone.' } },
  ],

  traits: [
    { ar:'الشجاعة', en:'Courage' }, { ar:'الثباتُ على الحقّ', en:'Standing firm' },
    { ar:'الصبر', en:'Patience' }, { ar:'الغَيرةُ على التوحيد', en:'Zeal for true worship' },
  ],
  lessons: [
    { icon:'☝️', color:'#A65A3A', title:{ar:'اعبدِ اللهَ وحدَه',en:'Worship Allah alone'},
      body:{ar:'دعا إلياسُ قومَه لِتركِ الأصنامِ وعبادةِ اللهِ الخالق. لا يستحقُّ العبادةَ إلا اللهُ خالقُ كلِّ شيء.',en:'Ilyas called his people to leave idols and worship Allah the Creator. None deserves worship except Allah, Creator of all.'},
      apply:{ar:'أُخلِصُ عبادتي لله ولا أُعظِّمُ شيئاً معه.',en:'I make my worship sincere for Allah and glorify nothing alongside Him.'} },
    { icon:'🦁', color:'#E67E22', title:{ar:'اثبُتْ ولو كنتَ وحدَك',en:'Stand firm, even alone'},
      body:{ar:'وقفَ إلياسُ وحدَه أمامَ قومٍ كثيرين ولم يخف. الحقُّ حقٌّ ولو قلَّ أتباعُه، فلا تتبعِ الباطلَ لأنّ الناسَ يفعلونه.',en:'Ilyas stood alone before a great many and did not fear. Truth is truth even if few follow it — don\'t follow falsehood just because people do.'},
      apply:{ar:'أفعلُ الصوابَ ولو خالفني الجميع.',en:'I do what is right, even if everyone disagrees with me.'} },
    { icon:'🗣️', color:'#2980B9', title:{ar:'ادعُ إلى الخيرِ بِحِكمة',en:'Call to good with wisdom'},
      body:{ar:'سألَ إلياسُ قومَه سؤالاً يُوقِظُ عقولَهم. الكلمةُ الحكيمةُ قد تُحرِّكُ القلوبَ الغافلة.',en:'Ilyas asked his people a question to awaken their minds. A wise word can move heedless hearts.'},
      apply:{ar:'أدعو غيري للخيرِ بِأسلوبٍ يُحبِّبُه إليهم.',en:'I invite others to good in a way they will warm to.'} },
    { icon:'⏳', color:'#8E44AD', title:{ar:'اصبِرْ على الدعوة',en:'Be patient in calling to good'},
      body:{ar:'صبرَ إلياسُ زمناً طويلاً رغمَ التكذيب. الداعي إلى الخيرِ يصبِرُ ويترُكُ الهدايةَ لله.',en:'Ilyas was patient for a long time despite rejection. One who calls to good is patient and leaves guidance to Allah.'},
      apply:{ar:'أصبِرُ إذا لم يستجبْ غيري ولا أيأس.',en:'I stay patient if others don\'t respond, and I don\'t despair.'} },
  ],

  memorize: {
    hadith:{ ar:'«حقُّ اللهِ على العبادِ أن يعبدوه ولا يُشركوا به شيئًا»', en:"\"The right of Allah upon His servants is that they worship Him and associate nothing with Him.\"", ref:{ ar:'[رواه البخاري ٢٨٥٦، ومسلم ٣٠]', en:'[Bukhari 2856 & Muslim 30]' } },
    ayah: { ar: '﴿ أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ ﴾', ref:{ ar:'الصافات ١٢٥', en:'As-Saffat 125' } },
    dua:  { ar: 'اللَّهُ رَبُّنَا وَرَبُّ آبَائِنَا الْأَوَّلِينَ', ref:{ ar:'مِن قولِ إلياس', en:'From the words of Ilyas' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أعبدُ اللهَ وحدَه ولا أُعظِّمُ سواه.', en:'I will worship Allah alone and glorify none but Him.' },
        { ar:'أثبُتُ على الحقِّ ولو وقفتُ وحدي.', en:'I will stand firm on the truth, even if I stand alone.' },
        { ar:'أدعو إلى الخيرِ بِكلمةٍ حكيمة.', en:'I will call to good with a wise word.' },
        { ar:'أصبِرُ على الدعوةِ ولا أيأس.', en:'I will be patient in calling to good and never despair.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما اسمُ الصنمِ الذي عبده قومُ إلياس؟',en:'What was the name of the idol Ilyas\'s people worshipped?'},
          options:[{ar:'بعل',en:'Baal'},{ar:'هُبَل',en:'Hubal'},{ar:'اللات',en:'Al-Lat'}], answer:0 },
        { q:{ar:'إلى ماذا دعا إلياسُ قومَه؟',en:'To what did Ilyas call his people?'},
          options:[{ar:'عبادةِ اللهِ وحدَه',en:'Worshipping Allah alone'},{ar:'بناءِ القصور',en:'Building palaces'},{ar:'جمعِ المال',en:'Gathering wealth'}], answer:0 },
        { q:{ar:'بِمَ وصفَ إلياسُ اللهَ لِقومِه؟',en:'How did Ilyas describe Allah to his people?'},
          options:[{ar:'أحسنُ الخالقين',en:'The Best of Creators'},{ar:'أقربُ مكان',en:'The nearest place'},{ar:'أكبرُ ملك',en:'The biggest king'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'دعا إلياسُ قومَه لِتركِ عبادةِ الأصنام.',en:'Ilyas called his people to leave idol worship.'}, t:true },
        { statement:{ar:'خافَ إلياسُ مِن كثرةِ قومِه فسكت.',en:'Ilyas feared his people\'s numbers and stayed silent.'}, t:false },
        { statement:{ar:'أثنى اللهُ على إلياسَ في القرآن.',en:'Allah praised Ilyas in the Quran.'}, t:true },
        { statement:{ar:'الحقُّ يُقاسُ بكثرةِ أتباعِه فقط.',en:'Truth is measured only by how many follow it.'}, t:false },
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'أُرسِلتُ إلى قومٍ يعبدونَ صنماً اسمُه بعل.',en:'I was sent to people worshipping an idol named Baal.'},
        {ar:'سألتُهم: أتدعونَ بعلاً وتتركونَ أحسنَ الخالقين؟',en:'I asked them: do you call Baal and leave the Best of Creators?'},
        {ar:'ثبتُّ على الحقِّ ولو وحدي.',en:'I stood firm on the truth, even alone.'},
        {ar:'أنا مِن نسلِ هارونَ عليه السلام.',en:'I am from the line of Harun.'},
      ],
      options:[{ar:'إلياس',en:'Ilyas'},{ar:'هود',en:'Hud'},{ar:'يونس',en:'Yunus'}], answer:0 },
  ],

  treasures: {
    medal: { ar:'وِسامُ الثباتِ على الحقّ', en:'Medal of Standing Firm on Truth' },
    stickers:[
      { icon:'mount', color:'#A65A3A', title:{ar:'ثباتُ الجبل',en:'Firm as a Mountain'} },
      { icon:'light', color:'#F4D03F', title:{ar:'نورُ التوحيد',en:'Light of True Worship'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'قلبٌ شُجاع',en:'A Brave Heart'} },
      { icon:'star',  color:'#E67E22', title:{ar:'سلامٌ عليه',en:'Peace Be Upon Him'} },
    ],
    moral: { ar:'الحقُّ لا يُقاسُ بكثرةِ الناس، والبطلُ مَن يثبتُ على عبادةِ اللهِ ولو وقفَ وحدَه.', en:'Truth is not measured by crowds; a hero stands firm on worshipping Allah, even if they stand alone.' },
    reflect:[
      {ar:'إلياسُ ثبتَ وحدَه على الحقّ. هل واجهتَ موقفاً فعلتَ فيه الصوابَ رغمَ مخالفةِ غيرك؟',en:'Ilyas stood firm on the truth alone. Have you faced a time you did right even though others disagreed?'},
      {ar:'دعا إلياسُ بِسؤالٍ حكيم. ما الكلمةُ الجميلةُ التي يمكنُك أن تُذكِّرَ بها صديقاً بالخير؟',en:'Ilyas called with a wise question. What kind word could you use to remind a friend of good?'},
    ],
  },
};
