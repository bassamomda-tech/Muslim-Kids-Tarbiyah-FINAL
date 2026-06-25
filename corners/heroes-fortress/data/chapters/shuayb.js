// data/chapters/shuayb.js — Era I · Shuayb عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.shuayb = {
  id: 'shuayb', era: 'prophets', icon: 'compass',
  name: { ar: 'شُعَيبٌ عليه السلام', en: 'Shuayb' },
  tag:  { ar: 'خطيبُ الأنبياءِ ونبيُّ الأمانة', en: 'The orator of honest trade' },
  accent: '#B5793A', accent2: '#D49A5A',
  greeting: { ar: 'أهلاً يا بطل! شُعَيبٌ عليه السلام أُرسِلَ إلى قومٍ كانوا يَغُشّونَ في البيعِ والشراء، فعلَّمهم الأمانةَ والصِّدق. وكان جميلَ الكلامِ حتى لُقِّبَ «خطيبَ الأنبياء». تعالَ نعرفْ قصتَه.', en: "Hello, hero! Shuayb was sent to people who cheated in buying and selling, and he taught them honesty and truthfulness. He spoke so beautifully he was called 'the orator of the prophets.' Come, let's learn his story." },

  knowledge: {
    didYouKnow: { ar: 'شُعَيبٌ عليه السلام يُلقَّبُ «خطيبَ الأنبياء» لِجمالِ كلامِه وحُسنِ دعوتِه.', en: "Shuayb is called 'the orator of the prophets' for the beauty of his speech and his fine way of calling people." },
    who: {
      ar: 'شُعَيبٌ عليه السلام نبيٌّ أرسله اللهُ إلى أهلِ <b>مَدْيَن</b>. كانوا يعبدونَ غيرَ اللهِ، والأسوأُ أنّهم كانوا <b>يَغُشّونَ في الكيلِ والميزان</b>: يأخذونَ كاملاً ويُعطونَ الناسَ ناقصاً. فدعاهم شُعَيبٌ إلى عبادةِ اللهِ وحدَه وإلى <b>الأمانةِ في البيعِ والشراء</b>، لكنّهم كذّبوه، فأنجى اللهُ المؤمنينَ وأهلكَ الظالمين.',
      en: "Shuayb was a prophet Allah sent to the people of <b>Madyan</b>. They worshipped other than Allah, and worse, they <b>cheated in weights and measures</b>: taking full measure for themselves and giving people less. Shuayb called them to worship Allah alone and to <b>honesty in trade</b>, but they denied him — so Allah saved the believers and destroyed the wrongdoers.",
    },
    facts: [
      { ar: 'أُرسِلَ إلى أهلِ مَدْيَن وأصحابِ الأيكة.', en: 'He was sent to the people of Madyan and the Companions of the Thicket.' },
      { ar: 'كان قومُه يَغُشّونَ في الوزنِ والكيل.', en: 'His people cheated in weighing and measuring.' },
      { ar: 'دعاهم لِعبادةِ اللهِ وإيفاءِ الكيلِ والميزان.', en: 'He called them to worship Allah and give full measure.' },
      { ar: 'نجّى اللهُ شُعَيباً والمؤمنينَ وأهلكَ الظالمين.', en: 'Allah saved Shuayb and the believers and destroyed the wrongdoers.' },
    ],
    timeline: [
      { when:{ar:'الغِشّ',en:'The Cheating'}, what:{ar:'كان قومُه يَنقُصونَ الكيلَ والوزن.',en:'His people short-changed measure and weight.'} },
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعاهم لِعبادةِ اللهِ والأمانة.',en:'He called them to worship Allah and honesty.'} },
      { when:{ar:'التكذيب',en:'Denial'}, what:{ar:'سخروا منه وهدّدوه.',en:'They mocked and threatened him.'} },
      { when:{ar:'الصبر',en:'Patience'}, what:{ar:'صبرَ ودعا اللهَ أن يحكمَ بالحقّ.',en:'He was patient and asked Allah to judge with truth.'} },
      { when:{ar:'النجاة',en:'The Rescue'}, what:{ar:'نجّى اللهُ المؤمنينَ وأهلكَ الظالمين.',en:'Allah saved the believers, destroyed the wrongdoers.'} },
    ],
    ayah: { ar: '﴿ وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ ﴾', ref: { ar: 'هود ٨٥', en: 'Hud 85' } },
  },

  story: [
    { scene:'idols', text:{ ar:'أرسلَ اللهُ شُعَيباً عليه السلام إلى أهلِ <b>مَدْيَن</b>. كانوا قوماً أغنياءَ تُجّاراً، لكنّهم تركوا عبادةَ اللهِ وعبدوا غيرَه، وكانوا يُسيئونَ معاملةَ الناس.',
      en:'Allah sent Shuayb to the people of <b>Madyan</b>. They were a wealthy, trading people, but they left the worship of Allah and worshipped others, and they treated people badly.' } },
    { scene:'scales', text:{ ar:'كانتْ مشكلتُهم الكبرى أنّهم <b>يَغُشّونَ في الكيلِ والميزان</b>: إذا اشتروا أخذوا أكثرَ مِن حقِّهم، وإذا باعوا أعطوا الناسَ أقلَّ مِن حقِّهم! فكانوا يسرقونَ مِن الناسِ بطريقةٍ خفيّة. فقال لهم شُعَيبٌ بِلُطف: <b>«أوفوا الكيلَ والميزانَ بالقِسط»</b>، واعبدوا اللهَ وحدَه.',
      en:'Their biggest problem was that they <b>cheated in weights and measures</b>: when they bought, they took more than their right; when they sold, they gave people less than their right! They were secretly stealing from people. So Shuayb gently told them: <b>"Give full measure and weight with justice,"</b> and worship Allah alone.' },
      choice:{ q:{ar:'لماذا أمرهم شُعَيبٌ بإيفاءِ الكيلِ والميزان؟',en:'Why did Shuayb order them to give full measure and weight?'},
        opts:[
          { t:{ar:'لأنّ الغِشَّ ظُلمٌ وسرقةٌ لحقوقِ الناس',en:'Because cheating is wrong and steals people\'s rights'}, c:true, exp:{ar:'نعم! الأمانةُ في البيعِ والشراءِ مِن الدِّين. والغِشُّ حرامٌ ولو كان قليلاً.',en:'Yes! Honesty in trade is part of faith. Cheating is forbidden, even a little.'} },
          { t:{ar:'لِيكسبوا مالاً أكثر',en:'So they could earn more money'}, c:false, exp:{ar:'لا، بل ليتركوا الغِشَّ ويُعطوا الناسَ حقوقَهم كاملة.',en:'No — so they would stop cheating and give people their full rights.'} },
          { t:{ar:'لأنّ الميزانَ كان مكسوراً',en:'Because the scale was broken'}, c:false, exp:{ar:'لا، بل لأنّهم كانوا يَغُشّونَ عمداً.',en:'No — because they cheated on purpose.'} },
        ] } },
    { scene:'call', text:{ ar:'كان شُعَيبٌ <b>جميلَ الكلام</b>، حكيماً في دعوتِه، يُذكِّرُهم بِنِعَمِ اللهِ ويدعوهم بالحُسنى. قال لهم: «إنّي أراكم بِخير، وأخافُ عليكم عذابَ يومٍ عظيم». لم يطلبْ منهم أجراً، بل أرادَ إصلاحَهم فقط. لكنّ الأغنياءَ المتكبِّرينَ سخِروا منه وهدّدوه.',
      en:'Shuayb was <b>beautifully spoken</b>, wise in his call, reminding them of Allah\'s blessings and inviting them kindly. He told them: "I see you in good, and I fear for you the punishment of a great day." He asked for no reward — he only wanted to set them right. But the arrogant rich ones mocked and threatened him.' } },
    { scene:'flood', text:{ ar:'صبرَ شُعَيبٌ طويلاً، لكنّهم أصرّوا على الكُفرِ والغِشِّ والظُّلم. فدعا ربَّه أن يحكمَ بينه وبينهم بالحقّ. فأنجى اللهُ شُعَيباً والمؤمنينَ معه، وأرسلَ على الظالمينَ <b>عذاباً شديداً</b> فأهلكهم، جزاءً لِظُلمِهم وغِشِّهم. وبقيتْ قصتُهم عبرةً: مَن غشَّ الناسَ خسِرَ في الدنيا والآخرة.',
      en:'Shuayb was patient for long, but they insisted on disbelief, cheating and wrongdoing. So he asked his Lord to judge between him and them with truth. Allah saved Shuayb and the believers with him, and sent upon the wrongdoers <b>a severe punishment</b> that destroyed them — a recompense for their injustice and cheating. Their story remains a lesson: whoever cheats people loses in this world and the next.' } },
  ],

  traits: [
    { ar:'الأمانة', en:'Honesty' }, { ar:'حُسنُ الكلام', en:'Beautiful speech' },
    { ar:'الصبر', en:'Patience' }, { ar:'الإصلاح', en:'Setting things right' },
  ],
  lessons: [
    { icon:'⚖️', color:'#B5793A', title:{ar:'كُنْ أميناً في المعاملة',en:'Be honest in dealings'},
      body:{ar:'دعا شُعَيبٌ قومَه أن لا يَغُشّوا في البيعِ والشراء. الأمانةُ في المالِ والمعاملةِ مِن صميمِ الدِّين.',en:'Shuayb called his people not to cheat in trade. Honesty in money and dealings is at the very heart of faith.'},
      apply:{ar:'لا أغُشُّ ولا آخذُ ما ليس لي، وأُعطي كلَّ ذي حقٍّ حقَّه.',en:'I don\'t cheat or take what isn\'t mine, and I give everyone their right.'} },
    { icon:'🗣️', color:'#2980B9', title:{ar:'تكلّمْ بالكلمةِ الطيّبة',en:'Speak with good words'},
      body:{ar:'كان شُعَيبٌ خطيباً جميلَ الكلام، يدعو بالحُسنى. الكلمةُ الطيّبةُ تفتحُ القلوبَ وتُقرِّبُ الناس.',en:'Shuayb was an orator of beautiful speech who called kindly. A good word opens hearts and brings people closer.'},
      apply:{ar:'أختارُ كلماتي بِلُطفٍ حين أنصحُ أو أتكلّم.',en:'I choose my words kindly when I advise or speak.'} },
    { icon:'🛠️', color:'#E67E22', title:{ar:'أصلِحْ ولا تُفسِد',en:'Build, don\'t corrupt'},
      body:{ar:'أرادَ شُعَيبٌ إصلاحَ قومِه لا أذاهم. قال: «إن أُريدُ إلا الإصلاحَ ما استطعت». البطلُ يُصلِحُ ما حولَه.',en:'Shuayb wanted to reform his people, not harm them. He said: "I only intend reform as much as I am able." A hero improves what is around them.'},
      apply:{ar:'أسعى لإصلاحِ ما أراه خطأً بِلُطفٍ وحِكمة.',en:'I try to fix what I see wrong, with kindness and wisdom.'} },
    { icon:'🤝', color:'#1ABC9C', title:{ar:'الحقوقُ أمانة',en:'Rights are a trust'},
      body:{ar:'الغِشُّ في الميزانِ سرقةٌ خفيّة. اللهُ يرى ما يخفى، فلنُعطِ الناسَ حقوقَهم كاملةً نقيّة.',en:'Cheating the scale is hidden theft. Allah sees what is concealed, so let us give people their rights, full and pure.'},
      apply:{ar:'أُعيدُ ما أستعيرُه كاملاً وأحفظُ حقوقَ غيري.',en:'I return what I borrow in full and protect others\' rights.'} },
  ],

  memorize: {
    hadith:{ ar:'«البيِّعانِ بالخيارِ ما لم يتفرَّقا، فإن صدَقا وبيَّنا بُورِكَ لهما في بيعهما»', en:"\"The two parties in a sale have a choice until they part; if they are truthful and clear, their sale is blessed.\"", ref:{ ar:'[رواه البخاري ٢٠٧٩، ومسلم ١٥٣٢]', en:'[Bukhari 2079 & Muslim 1532]' } },
    ayah: { ar: '﴿ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ ﴾', ref:{ ar:'هود ٨٥', en:'Hud 85' } },
    dua:  { ar: 'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ', ref:{ ar:'الأعراف ٨٩', en:'Al-A\'raf 89' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أكونُ أميناً ولا أغُشُّ أحداً أبداً.', en:'I will be honest and never cheat anyone.' },
        { ar:'أُعطي كلَّ ذي حقٍّ حقَّه كاملاً.', en:'I will give everyone their right in full.' },
        { ar:'أتكلّمُ بالكلمةِ الطيّبةِ وأنصحُ بِلُطف.', en:'I will speak good words and advise with kindness.' },
        { ar:'أسعى لإصلاحِ ما حولي لا لإفسادِه.', en:'I will work to improve what is around me, not corrupt it.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'إلى مَن أُرسِلَ شُعَيبٌ عليه السلام؟',en:'To whom was Shuayb sent?'},
          options:[{ar:'أهلِ مَدْيَن',en:'The people of Madyan'},{ar:'أهلِ مصر',en:'The people of Egypt'},{ar:'قومِ نوح',en:'The people of Nuh'}], answer:0 },
        { q:{ar:'ما الذنبُ الكبيرُ الذي كان يفعلُه قومُه؟',en:'What big wrong were his people doing?'},
          options:[{ar:'الغِشُّ في الكيلِ والميزان',en:'Cheating in measure and weight'},{ar:'النومُ كثيراً',en:'Sleeping a lot'},{ar:'السفرُ دائماً',en:'Always travelling'}], answer:0 },
        { q:{ar:'بأيِّ لقبٍ عُرِفَ شُعَيبٌ؟',en:'By what title was Shuayb known?'},
          options:[{ar:'خطيبُ الأنبياء',en:'The orator of the prophets'},{ar:'مَلِكُ الأنبياء',en:'The king of the prophets'},{ar:'طبيبُ الأنبياء',en:'The doctor of the prophets'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'دعا شُعَيبٌ قومَه إلى الأمانةِ في البيعِ والشراء.',en:'Shuayb called his people to honesty in trade.'}, t:true },
        { statement:{ar:'كان شُعَيبٌ يَغُشُّ الناسَ مثلَهم.',en:'Shuayb cheated people like they did.'}, t:false },
        { statement:{ar:'لُقِّبَ شُعَيبٌ بخطيبِ الأنبياء.',en:'Shuayb was called the orator of the prophets.'}, t:true },
        { statement:{ar:'نجّى اللهُ شُعَيباً والمؤمنينَ معه.',en:'Allah saved Shuayb and the believers with him.'}, t:true },
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'أُرسِلتُ إلى أهلِ مَدْيَن.',en:'I was sent to the people of Madyan.'},
        {ar:'دعوتُ قومي لِتركِ الغِشِّ في الميزان.',en:'I called my people to stop cheating in the scale.'},
        {ar:'كنتُ جميلَ الكلامِ في دعوتي.',en:'I was beautifully spoken in my call.'},
        {ar:'يُلقِّبونني خطيبَ الأنبياء.',en:'They call me the orator of the prophets.'},
      ],
      options:[{ar:'هود',en:'Hud'},{ar:'شُعَيب',en:'Shuayb'},{ar:'صالح',en:'Salih'}], answer:1 },
  ],

  treasures: {
    medal: { ar:'وِسامُ الأمانة', en:'Medal of Honesty' },
    stickers:[
      { icon:'compass', color:'#B5793A', title:{ar:'ميزانُ العدل',en:'The Scale of Justice'} },
      { icon:'heart',   color:'#8E44AD', title:{ar:'قلبٌ أمين',en:'An Honest Heart'} },
      { icon:'light',   color:'#F4D03F', title:{ar:'كلمةٌ طيّبة',en:'A Good Word'} },
      { icon:'globe',   color:'#1ABC9C', title:{ar:'يدٌ تُصلِح',en:'A Hand that Builds'} },
    ],
    moral: { ar:'الأمانةُ في المالِ والكلامِ نورٌ يرفعُ صاحبَه، والغِشُّ ظُلمةٌ تُسقِطُه.', en:'Honesty in money and speech is a light that raises a person; cheating is a darkness that brings them down.' },
    reflect:[
      {ar:'شُعَيبٌ علَّمَ قومَه الأمانة. متى آخرُ مرّةٍ كنتَ فيها أميناً رغمَ أنّه كان سهلاً أن تغُشّ؟',en:'Shuayb taught his people honesty. When were you last honest even though it was easy to cheat?'},
      {ar:'كان شُعَيبٌ جميلَ الكلام. كيف يمكنُك أن تنصحَ صديقاً بِلُطفٍ بدلَ القسوة؟',en:'Shuayb spoke beautifully. How can you advise a friend kindly instead of harshly?'},
    ],
  },
};
