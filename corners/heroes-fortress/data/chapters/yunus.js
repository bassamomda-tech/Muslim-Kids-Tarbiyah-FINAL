// data/chapters/yunus.js — Era I · Yunus عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.yunus = {
  id: 'yunus', era: 'prophets', icon: 'whale',
  name: { ar: 'يُونُسُ عليه السلام', en: 'Yunus' },
  tag:  { ar: 'صاحبُ الحوتِ وذو النون', en: 'The one in the belly of the fish' },
  accent: '#2A7FAE', accent2: '#42A0C8',
  greeting: { ar: 'مرحباً يا بطل! يونسُ عليه السلام دعا في ظُلماتِ بطنِ الحوتِ دعاءً ما دعا به مكروبٌ إلا فرّجَ اللهُ عنه. تعالَ نتعلّمْ سِرَّ هذا الدعاءِ العجيب.', en: "Hello, hero! Yunus prayed in the darkness inside the great fish — a prayer no troubled person ever makes without Allah relieving them. Come, let's learn the secret of this amazing prayer." },

  knowledge: {
    didYouKnow: { ar: 'دعاءُ يونسَ في بطنِ الحوتِ يُسمّى «دعاءَ ذي النون»، وهو مِن أعظمِ أدعيةِ الفَرَج.', en: "Yunus's prayer in the fish is called 'the prayer of Dhun-Nun' — one of the greatest prayers for relief." },
    who: {
      ar: 'يونسُ عليه السلام (ويُسمّى <b>ذا النون</b>) نبيٌّ أرسله اللهُ إلى أهلِ <b>نِينَوى</b> يدعوهم لِعبادةِ اللهِ. لمّا لم يؤمنوا خرجَ غاضباً قبلَ أن يأذنَ له ربُّه، فابتلعه <b>الحوت</b>. فدعا اللهَ في الظُّلماتِ فنجّاه. ثم آمنَ قومُه جميعاً، فكانوا القريةَ الوحيدةَ التي آمنتْ كلُّها فنفعها إيمانُها.',
      en: "Yunus (also called <b>Dhun-Nun</b>) was a prophet Allah sent to the people of <b>Nineveh</b> to call them to worship Allah. When they did not believe, he left in anger before his Lord permitted him, so the <b>great fish</b> swallowed him. He prayed to Allah in the darkness and was saved. Then his people all believed — the only town whose faith, all together, benefited them.",
    },
    facts: [
      { ar: 'أُرسِلَ إلى قومٍ كثيرين في نِينَوى.', en: 'He was sent to the many people of Nineveh.' },
      { ar: 'خرجَ غاضباً، فركبَ سفينةً، فالتقمه الحوت.', en: 'He left angry, boarded a ship, and the fish swallowed him.' },
      { ar: 'دعا في ثلاثِ ظُلمات: الليلِ والبحرِ وبطنِ الحوت.', en: 'He prayed in three darknesses: the night, the sea, and the fish\'s belly.' },
      { ar: 'نجّاه اللهُ وآمنَ قومُه كلُّهم بعدَ رجوعِه.', en: 'Allah saved him, and all his people believed after his return.' },
    ],
    timeline: [
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعا أهلَ نِينَوى لِعبادةِ الله.',en:'He called Nineveh to worship Allah.'} },
      { when:{ar:'الغضب',en:'The Anger'}, what:{ar:'خرجَ غاضباً قبلَ إذنِ ربِّه.',en:'He left in anger before his Lord\'s leave.'} },
      { when:{ar:'الحوت',en:'The Fish'}, what:{ar:'ركبَ السفينةَ فالتقمه الحوت.',en:'He boarded a ship; the fish swallowed him.'} },
      { when:{ar:'الدعاء',en:'The Prayer'}, what:{ar:'نادى في الظُّلمات فاستجابَ الله.',en:'He called in the darkness; Allah answered.'} },
      { when:{ar:'النجاة',en:'The Rescue'}, what:{ar:'نبذه الحوتُ وأنبتَ اللهُ عليه شجرة.',en:'The fish cast him out; Allah grew a plant over him.'} },
      { when:{ar:'الإيمان',en:'They Believe'}, what:{ar:'رجعَ فآمنَ قومُه جميعاً.',en:'He returned and all his people believed.'} },
    ],
    ayah: { ar: '﴿ فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ ﴾', ref: { ar: 'الأنبياء ٨٧', en: 'Al-Anbiya 87' } },
  },

  story: [
    { scene:'call', text:{ ar:'أرسلَ اللهُ يونسَ عليه السلام إلى أهلِ مدينةِ <b>نِينَوى</b>، وكانوا كثيرين يعبدونَ الأصنام. دعاهم بِصبرٍ إلى عبادةِ اللهِ وحدَه، لكنّهم أصرّوا على الكُفرِ ولم يستمعوا إليه.',
      en:'Allah sent Yunus to the people of the city of <b>Nineveh</b>, a great many who worshipped idols. He patiently called them to worship Allah alone, but they insisted on disbelief and would not listen to him.' } },
    { scene:'idols', text:{ ar:'حزِنَ يونسُ وغضِبَ مِن قومِه، فخرجَ مِن بينهم غاضباً <b>قبلَ أن يأذنَ له ربُّه</b>. ظنَّ أنّ اللهَ لن يُضيّقَ عليه، لكنّ النبيَّ ينبغي أن يصبِرَ وينتظرَ أمرَ ربِّه.',
      en:'Yunus felt sad and angry with his people, so he left them in anger <b>before his Lord gave him leave</b>. He thought Allah would not make things hard for him — but a prophet should be patient and wait for his Lord\'s command.' },
      choice:{ q:{ar:'ما الدرسُ مِن خروجِ يونسَ غاضباً قبلَ إذنِ الله؟',en:'What do we learn from Yunus leaving in anger before Allah\'s leave?'},
        opts:[
          { t:{ar:'نصبِرُ وننتظرُ أمرَ الله',en:'We stay patient and wait for Allah\'s command'}, c:true, exp:{ar:'نعم! الصبرُ على الناسِ وانتظارُ أمرِ اللهِ خيرٌ مِن الغضبِ والاستعجال.',en:'Yes! Patience with people and waiting for Allah\'s command is better than anger and haste.'} },
          { t:{ar:'نغضبُ ونترُكُ كلَّ شيء',en:'We get angry and abandon everything'}, c:false, exp:{ar:'لا، فالغضبُ والاستعجالُ سببُ ما حدثَ ليونس.',en:'No — anger and haste are what led to what happened to Yunus.'} },
          { t:{ar:'لا نُكمِلُ عملَنا',en:'We don\'t finish our work'}, c:false, exp:{ar:'لا، بل نُكمِلُ بِصبرٍ وثقةٍ بالله.',en:'No — we finish with patience and trust in Allah.'} },
        ] } },
    { scene:'ark', text:{ ar:'ركبَ يونسُ <b>سفينةً</b> في البحر، فهاجتِ الأمواجُ وكادتِ السفينةُ تغرقُ مِن ثِقَلِها. فاقترعَ الركّابُ لِيُخفِّفوا الحِمل، فوقعتِ القُرعةُ على يونس ثلاثَ مرّات. فألقى نفسَه في البحرِ تسليماً لأمرِ الله.',
      en:'Yunus boarded a <b>ship</b> at sea, and the waves grew wild and the ship nearly sank from its load. The passengers drew lots to lighten it, and the lot fell on Yunus three times. So he cast himself into the sea, submitting to Allah\'s command.' } },
    { scene:'fish', text:{ ar:'أرسلَ اللهُ <b>حوتاً عظيماً</b> فابتلعه دونَ أن يؤذيه. وجدَ يونسُ نفسَه في ظُلماتٍ ثلاث: ظُلمةِ الليل، وظُلمةِ البحر، وظُلمةِ بطنِ الحوت. فعرفَ خطأه، ولجأ إلى ربِّه بِقلبٍ خاشع.',
      en:'Allah sent a <b>great fish</b> that swallowed him without harming him. Yunus found himself in three darknesses: the dark of night, the dark of the sea, and the dark of the fish\'s belly. He realised his mistake and turned to his Lord with a humble heart.' } },
    { scene:'fish', text:{ ar:'نادى يونسُ بِدعائِه الجميل: <b>﴿ لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ ﴾</b>. اعترفَ بخطئِه وسبّحَ ربَّه، فسمعَ اللهُ دعاءه وأمرَ الحوتَ أن يُلقيَه على الشاطئ.',
      en:'Yunus called with his beautiful prayer: <b>"There is no god but You; glory be to You; indeed I was among the wrongdoers."</b> He admitted his mistake and glorified his Lord, so Allah heard his prayer and commanded the fish to cast him onto the shore.' } },
    { scene:'tree', text:{ ar:'خرجَ يونسُ ضعيفاً مريضاً، فأنبتَ اللهُ عليه <b>شجرةً مِن يَقطين</b> تُظلِّلُه وتُطعِمُه حتى قَوِيَ. ثم رجعَ إلى قومِه، فوجدهم قد <b>آمنوا جميعاً</b> وتابوا إلى الله، فرفعَ اللهُ عنهم العذابَ ومتّعهم. وكانوا القريةَ الوحيدةَ التي نفعها إيمانُها كلَّها.',
      en:'Yunus came out weak and ill, so Allah grew over him a <b>gourd plant</b> to shade and feed him until he was strong. Then he returned to his people and found they had <b>all believed</b> and turned back to Allah, so Allah lifted the punishment from them and let them enjoy life. They were the only town whose faith, all together, benefited them.' } },
  ],

  traits: [
    { ar:'الرجوعُ إلى الله', en:'Turning back to Allah' }, { ar:'التسبيح', en:'Glorifying Allah' },
    { ar:'الاعترافُ بالخطأ', en:'Owning mistakes' }, { ar:'الأمل', en:'Hope' },
  ],
  lessons: [
    { icon:'🤲', color:'#2A7FAE', title:{ar:'ادعُ في الشِّدّة',en:'Call on Allah in hardship'},
      body:{ar:'في أحلكِ الظُّلماتِ دعا يونسُ ربَّه فنجّاه. ما مِن كَربٍ إلا ويُفرِّجُه الدعاءُ والتوكّلُ على الله.',en:'In the darkest darkness Yunus called his Lord and was saved. No distress comes that prayer and trust in Allah cannot relieve.'},
      apply:{ar:'إذا ضِقتُ بشيءٍ دعوتُ اللهَ بدعاءِ يونسَ بِيقين.',en:'When something troubles me, I call Allah with Yunus\'s prayer, certain He hears.'} },
    { icon:'🙏', color:'#8E44AD', title:{ar:'اعترفْ بخطئِك',en:'Admit your mistake'},
      body:{ar:'قال يونسُ: «إنّي كنتُ مِن الظالمين»، فلم يَلُمْ أحداً غيرَ نفسِه. الاعترافُ بابُ المغفرة.',en:'Yunus said: "I was among the wrongdoers," blaming no one but himself. Admitting fault is a door to forgiveness.'},
      apply:{ar:'لا أُبرِّرُ خطئي، بل أعترفُ وأستغفر.',en:'I don\'t make excuses for my mistake — I admit it and seek forgiveness.'} },
    { icon:'⏳', color:'#E67E22', title:{ar:'اصبِرْ على الناس',en:'Be patient with people'},
      body:{ar:'استعجلَ يونسُ على قومِه فخرجَ غاضباً. الداعي إلى الخيرِ يصبِرُ ولا يَيأسُ مِن هدايةِ الناس.',en:'Yunus hurried with his people and left in anger. One who calls to good must be patient and not despair of people\'s guidance.'},
      apply:{ar:'أصبِرُ على مَن لا يستمعُ لي وأدعو له بالخير.',en:'I am patient with those who don\'t listen, and I wish them good.'} },
    { icon:'🌿', color:'#5DA236', title:{ar:'رحمةُ اللهِ واسعة',en:'Allah\'s mercy is vast'},
      body:{ar:'تابَ قومُ يونسَ فرحمهم اللهُ ورفعَ عنهم العذاب. بابُ التوبةِ مفتوحٌ ما لم يأتِ الأجل.',en:'Yunus\'s people repented, so Allah had mercy and lifted the punishment. The door of repentance is open as long as life remains.'},
      apply:{ar:'لا أيأسُ مِن رحمةِ الله، وأتوبُ كلّما أخطأت.',en:'I never despair of Allah\'s mercy, and I repent whenever I err.'} },
  ],

  memorize: {
    hadith:{ ar:'«لن يُدخِلَ أحدًا منكم عملُه الجنّة، ولا أنا، إلا أن يتغمَّدَني اللهُ برحمةٍ منه»', en:"\"None of you will be admitted to Paradise by his deeds alone — not even me — unless Allah envelops me in His mercy.\"", ref:{ ar:'[رواه البخاري ٦٤٦٣، ومسلم ٢٨١٦]', en:'[Bukhari 6463 & Muslim 2816]' } },
    ayah: { ar: '﴿ لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ ﴾', ref:{ ar:'الأنبياء ٨٧', en:'Al-Anbiya 87' } },
    dua:  { ar: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', ref:{ ar:'دعاءُ ذي النون', en:'The prayer of Dhun-Nun' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أدعو اللهَ في كلِّ شِدّةٍ ولا أيأس.', en:'I will call on Allah in every hardship and never despair.' },
        { ar:'أعترفُ بخطئي ولا ألومُ غيري.', en:'I will admit my mistake and not blame others.' },
        { ar:'أصبِرُ على الناسِ ولا أستعجل.', en:'I will be patient with people and not be hasty.' },
        { ar:'أُسبِّحُ اللهَ وأُكثِرُ مِن ذِكرِه.', en:'I will glorify Allah and remember Him often.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا التقمَ يونسَ في البحر؟',en:'What swallowed Yunus in the sea?'},
          options:[{ar:'حوتٌ عظيم',en:'A great fish'},{ar:'سفينة',en:'A ship'},{ar:'موجة',en:'A wave'}], answer:0 },
        { q:{ar:'بماذا دعا يونسُ في الظُّلمات؟',en:'What did Yunus pray in the darkness?'},
          options:[{ar:'لا إله إلا أنت سبحانك إني كنت من الظالمين',en:'There is no god but You... I was among the wrongdoers'},{ar:'طلبَ مالاً',en:'He asked for wealth'},{ar:'طلبَ مُلكاً',en:'He asked for a kingdom'}], answer:0 },
        { q:{ar:'ماذا حدثَ لقومِ يونسَ في النهاية؟',en:'What happened to Yunus\'s people in the end?'},
          options:[{ar:'آمنوا جميعاً فنجّاهم الله',en:'They all believed and Allah saved them'},{ar:'بقوا على الكُفر',en:'They stayed in disbelief'},{ar:'هربوا',en:'They ran away'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبْ قصةَ يونس',en:'Put Yunus\'s story in order'},
      items:[
        {ar:'دعا قومَه فلم يؤمنوا',en:'He called his people but they did not believe'},
        {ar:'خرجَ غاضباً وركبَ السفينة',en:'He left angry and boarded the ship'},
        {ar:'التقمه الحوتُ في البحر',en:'The fish swallowed him in the sea'},
        {ar:'دعا في الظُّلمات فنجّاه الله',en:'He prayed in the darkness and Allah saved him'},
        {ar:'رجعَ فآمنَ قومُه جميعاً',en:'He returned and all his people believed'},
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'دعا يونسُ في ثلاثِ ظُلمات.',en:'Yunus prayed in three darknesses.'}, t:true },
        { statement:{ar:'آذاه الحوتُ وأكله.',en:'The fish hurt and ate him.'}, t:false },
        { statement:{ar:'أنبتَ اللهُ عليه شجرةً تُظلِّله.',en:'Allah grew a plant to shade him.'}, t:true },
        { statement:{ar:'آمنَ قومُ يونسَ كلُّهم.',en:'All of Yunus\'s people believed.'}, t:true },
      ] },
  ],

  treasures: {
    medal: { ar:'وِسامُ دعاءِ الفَرَج', en:'Medal of the Prayer of Relief' },
    stickers:[
      { icon:'whale', color:'#2A7FAE', title:{ar:'حوتُ النجاة',en:'The Fish of Rescue'} },
      { icon:'star',  color:'#F4D03F', title:{ar:'نورٌ في الظُّلمة',en:'Light in the Dark'} },
      { icon:'leaf',  color:'#5DA236', title:{ar:'شجرةُ اليَقطين',en:'The Gourd Plant'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'قلبٌ يرجعُ لله',en:'A Heart that Returns'} },
    ],
    moral: { ar:'مهما اشتدّتِ الظُّلمات، فإنّ دعاءَ القلبِ الصادقِ يفتحُ أبوابَ النجاة.', en:'However deep the darkness, a sincere heart\'s prayer opens the doors of rescue.' },
    reflect:[
      {ar:'يونسُ نادى ربَّه في أصعبِ لحظة. ما الدعاءُ الذي تُحبُّ أن تدعوَ به اللهَ اليوم؟',en:'Yunus called his Lord in the hardest moment. What prayer would you love to make to Allah today?'},
      {ar:'اعترفَ يونسُ بخطئِه فوراً. هل هناك خطأٌ تريدُ أن تعتذرَ عنه وتُصلِحه؟',en:'Yunus admitted his mistake at once. Is there a mistake you\'d like to own and fix?'},
    ],
  },
};
