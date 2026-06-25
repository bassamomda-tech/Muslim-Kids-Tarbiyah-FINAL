// data/chapters/whoami.js — Seerah · من هو محمدٌ رسولُ الله ﷺ
// Sources: الرحيق المختوم · الدرر السنية · إسلام ويب · الكلمة الطيبة
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.whoami = {
  id: 'whoami', era: 'seerah', icon: 'light',
  name: { ar: 'مَن هو محمدٌ رسولُ الله ﷺ', en: 'Who is Muhammad ﷺ' },
  tag:  { ar: 'خاتمُ النبيين ورحمةٌ للعالمين', en: 'Seal of the Prophets, a mercy to the worlds' },
  accent: '#2E9E6B', accent2: '#46C088',
  greeting: { ar: 'مرحباً يا بطل! تعالَ نتعرّفْ على أحبِّ الخلقِ إلى الله: نبيِّنا محمدٍ ﷺ — مَن هو، ومِن أين، ولماذا أرسله اللهُ إلينا.', en: "Welcome, hero! Let's get to know the most beloved of creation to Allah: our Prophet Muhammad ﷺ — who he is, where he came from, and why Allah sent him to us." },

  knowledge: {
    didYouKnow: { ar: 'اسمُه «محمد» ﷺ، ومعناه: الذي يُحمَدُ ويُثنى عليه كثيراً. وله أسماءٌ أُخرى مثل: أحمد، والماحي، والحاشر.', en: 'His name "Muhammad" ﷺ means "the one who is much praised." He has other names too, such as Ahmad, Al-Mahi, and Al-Hashir.' },
    who: {
      ar: 'هو <b>محمدُ بنُ عبدِ الله بنِ عبدِ المطّلب</b>، مِن قبيلةِ قُريش، مِن نسلِ نبيِّ اللهِ <b>إسماعيلَ بنِ إبراهيم</b> عليهما السلام. وُلد في <b>مكّة</b> عامَ الفيل. ماتَ أبوه قبلَ مولدِه، وماتت أمُّه آمنةُ وهو صغير، فنشأ يتيماً رعاه اللهُ ثم جدُّه ثم عمُّه. أرسله اللهُ <b>رحمةً للعالمين</b> وخاتماً للأنبياء، لا نبيَّ بعدَه.',
      en: 'He is <b>Muhammad ibn Abdullah ibn Abd al-Muttalib</b>, of the tribe of Quraysh, from the line of Allah\'s prophet <b>Ismail son of Ibrahim</b>. He was born in <b>Makkah</b> in the Year of the Elephant. His father died before his birth and his mother Aminah died when he was young, so he grew up an orphan cared for by Allah, then his grandfather, then his uncle. Allah sent him as <b>a mercy to the worlds</b> and the final prophet — none after him.',
    },
    facts: [
      { ar: 'نسبُه ينتهي إلى إسماعيلَ بنِ إبراهيم عليهما السلام.', en: 'His lineage goes back to Ismail son of Ibrahim.' },
      { ar: 'وُلد في مكّةَ عامَ الفيل (نحو ٥٧١م).', en: 'He was born in Makkah in the Year of the Elephant (~571 CE).' },
      { ar: 'نشأ يتيماً، فلقّبه قومُه بـ«الصادقِ الأمين».', en: 'He grew up an orphan, and his people called him "the truthful, the trustworthy."' },
      { ar: 'بُعث نبيّاً في سنِّ الأربعين في غارِ حِراء.', en: 'He was sent as a prophet at the age of forty, in the Cave of Hira.' },
      { ar: 'هو خاتمُ الأنبياء، أُرسل للناسِ كافّةً لا لقومٍ واحد.', en: 'He is the last of the prophets, sent to all people, not to one nation.' },
    ],
    timeline: [
      { when:{ar:'المولد',en:'Birth'}, what:{ar:'وُلد بمكّةَ في عامِ الفيلِ يتيمَ الأب.',en:'Born in Makkah in the Year of the Elephant, his father already gone.'} },
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'رعاه جدُّه عبدُ المطّلب ثم عمُّه أبو طالب.',en:'Raised by his grandfather, then his uncle Abu Talib.'} },
      { when:{ar:'الأمين',en:'Al-Amin'}, what:{ar:'عُرف بالصدقِ والأمانةِ قبلَ النبوّة.',en:'Known for truth and trust before prophethood.'} },
      { when:{ar:'البعثة',en:'The Mission'}, what:{ar:'نزل عليه الوحيُ في الأربعينَ بغارِ حِراء.',en:'Revelation came to him at forty in Cave Hira.'} },
      { when:{ar:'الرسالة',en:'The Message'}, what:{ar:'دعا الناسَ إلى عبادةِ اللهِ وحدَه، رحمةً للعالمين.',en:'He called all people to worship Allah alone — a mercy to the worlds.'} },
    ],
    ayah: { ar: '﴿ وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ ﴾', ref:{ ar:'الأنبياء ١٠٧', en:"Al-Anbiya 107" } },
  },

  story: [
    { scene:'kaaba', text:{ ar:'في مَكّةَ المُكَرَّمَة، عِنْدَ بَيْتِ اللهِ الحَرام، عاشَتْ قَبيلَةُ <b>قُرَيْش</b>. وكانَتْ أَشْرَفَ بُيوتِها بَيْتَ بَني هاشِم. ومِنْ هذا البَيْتِ الكَريمِ كانَ نَسَبُ نَبِيِّنا ﷺ، الَّذي يَمْتَدُّ إلى إِسْماعيلَ بْنِ إِبْراهيمَ عَلَيْهِما السَّلام — أَطْهَرُ نَسَبٍ وأَكْرَمُه.',
      en:'In honored Makkah, by the Sacred House of Allah, lived the tribe of <b>Quraysh</b>. Its noblest house was Bani Hashim. From this noble house came the lineage of our Prophet ﷺ, reaching back to Ismail son of Ibrahim — the purest and most honorable lineage.' } },
    { scene:'elephant', text:{ ar:'وفي <b>عامِ الفيل</b> — وهو العامُ الَّذي أرادَ فيه أبرهةُ هَدْمَ الكعبةِ بجيشِه وفِيَلتِه فأهلكه اللهُ — وُلِدَ النورُ ﷺ. لكِنَّ أباهُ <b>عبدَ الله</b> كانَ قد ماتَ قبلَ مولدِه، فوُلِدَ يَتيماً. فرِحَ به جدُّه عبدُ المطّلبِ فرحاً عظيماً.',
      en:'In the <b>Year of the Elephant</b> — the year Abraha tried to destroy the Kaaba with his army and elephants, and Allah destroyed him — the light ﷺ was born. But his father <b>Abdullah</b> had already died, so he was born an orphan. His grandfather Abd al-Muttalib rejoiced greatly at him.' } },
    { scene:'madinah', text:{ ar:'وحينَ بلغَ السادسةَ ماتَتْ أمُّه <b>آمنةُ بنتُ وهب</b>، ثم ماتَ جدُّه. فكَفَلَه عمُّه <b>أبو طالب</b> وأحبَّه حُبّاً شديداً. هكذا نشأ ﷺ يَتيماً، لكِنَّ اللهَ تولّى رِعايتَه وحِفظَه: ﴿ أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ ﴾.',
      en:'When he reached six, his mother <b>Aminah bint Wahb</b> died, then his grandfather. So his uncle <b>Abu Talib</b> took him in and loved him dearly. Thus he ﷺ grew up an orphan, but Allah Himself took charge of his care and protection: "Did He not find you an orphan and give shelter?"' } },
    { scene:'scales', text:{ ar:'كبِرَ ﷺ صادقاً أميناً، لا يَكذِبُ ولا يَخون، حتى لقّبَه أهلُ مكّةَ كلُّهم بـ<b>«الصادقِ الأمين»</b>. كانوا يَضَعونَ عندَه أماناتِهم وهم مُطمئنّون، وما عُرف عنه إلا الصدقُ والوفاءُ وحُسنُ الخُلُق.',
      en:'He ﷺ grew up truthful and trustworthy, never lying or betraying, until all the people of Makkah called him <b>"the truthful, the trustworthy."</b> They would leave their valuables with him in full trust, and he was known for nothing but honesty, loyalty, and noble character.' },
      choice:{ q:{ar:'لماذا لقّبَ أهلُ مكّةَ النبيَّ ﷺ بـ«الأمين» قبلَ أن يُبعَث؟',en:'Why did the people of Makkah call the Prophet ﷺ "the Trustworthy" even before his mission?'},
        opts:[
          { t:{ar:'لِصِدقِه وأمانتِه وحُسنِ خُلُقِه',en:'For his truthfulness, trust, and noble character'}, c:true, exp:{ar:'نعم! كانَ خُلُقُه عظيماً قبلَ النبوّةِ وبعدَها، فأحبَّه الناسُ ووثِقوا به.',en:'Yes! His character was magnificent before and after prophethood, so people loved and trusted him.'} },
          { t:{ar:'لأنّه كانَ غنيّاً',en:'Because he was wealthy'}, c:false, exp:{ar:'لا، بل لأنّه كانَ صادقاً أميناً، والمالُ ليس مقياسَ الكرامة.',en:'No — it was for his honesty and trust; wealth is not the measure of honor.'} },
          { t:{ar:'لأنّه كانَ مَلِكاً',en:'Because he was a king'}, c:false, exp:{ar:'لا، لم يكنْ مَلِكاً، بل راعياً ثم تاجراً أميناً.',en:'No — he was not a king, but a shepherd and then an honest merchant.'} },
        ] } },
    { scene:'light', text:{ ar:'فلمّا بلغَ <b>الأربعين</b>، نزلَ عليه الوحيُ في غارِ حِراء، واختاره اللهُ نبيّاً ورسولاً. أرسله رحمةً للعالمين، يدعو الناسَ جميعاً — العربَ والعجم، في كلِّ زمانٍ ومكان — إلى عبادةِ اللهِ وحدَه. وهو <b>خاتمُ الأنبياء</b>، لا نبيَّ بعدَه ﷺ.',
      en:'When he reached <b>forty</b>, revelation descended upon him in Cave Hira, and Allah chose him as a prophet and messenger. He was sent as a mercy to the worlds, calling all people — Arab and non-Arab, in every time and place — to worship Allah alone. He is <b>the Seal of the Prophets</b>, with none after him ﷺ.' } },
  ],

  traits: [
    { ar:'الصدق', en:'Truthfulness' }, { ar:'الأمانة', en:'Trustworthiness' },
    { ar:'الرحمة', en:'Mercy' }, { ar:'حُسنُ الخُلُق', en:'Noble character' },
  ],
  lessons: [
    { icon:'🌿', color:'#2E9E6B', title:{ar:'النبيُّ ﷺ رحمةٌ لنا',en:'The Prophet ﷺ is a mercy for us'},
      body:{ar:'أرسله اللهُ رحمةً للعالمين، يهدينا إلى الخيرِ ويُحذّرنا من الشر، حُبّاً لنا ورحمةً بنا.',en:'Allah sent him as a mercy to the worlds, guiding us to good and warning us from harm, out of love and mercy for us.'},
      apply:{ar:'أُحبُّ النبيَّ ﷺ وأُكثِرُ من الصلاةِ عليه.',en:'I love the Prophet ﷺ and send blessings upon him often.'} },
    { icon:'🤝', color:'#46C088', title:{ar:'كنْ صادقاً أميناً',en:'Be truthful and trustworthy'},
      body:{ar:'عُرف ﷺ بالصدقِ والأمانةِ قبلَ النبوّة، فأحبَّه الناسُ ووثِقوا به.',en:'He ﷺ was known for truth and trust before prophethood, so people loved and trusted him.'},
      apply:{ar:'أصدُقُ في كلامي وأحفظُ أماناتِ الناس.',en:'I tell the truth and guard what people entrust to me.'} },
    { icon:'🕋', color:'#C2870A', title:{ar:'نَسَبٌ كريمٌ وخُلُقٌ أكرم',en:'Noble lineage, nobler character'},
      body:{ar:'كانَ نسبُه ﷺ أشرفَ الأنساب، لكنّ الذي رفعَه هو خُلُقُه وطاعتُه لله، لا نسبُه وحدَه.',en:'His lineage ﷺ was the noblest, but what raised him was his character and obedience to Allah, not lineage alone.'},
      apply:{ar:'أعتزُّ بأصلي، وأجتهدُ أن يكونَ خُلُقي أجمل.',en:'I value my roots, and strive to make my character even more beautiful.'} },
    { icon:'🏷️', color:'#1F8A5B', title:{ar:'خاتمُ الأنبياء',en:'The Seal of the Prophets'},
      body:{ar:'محمدٌ ﷺ آخِرُ الأنبياءِ، لا نبيَّ بعدَه، ورسالتُه للناسِ كافّةً إلى يومِ القيامة.',en:'Muhammad ﷺ is the last of the prophets, none after him, and his message is for all people until the Last Day.'},
      apply:{ar:'أتمسّكُ بسُنّتِه، فهي طريقُ النجاة.',en:'I hold to his Sunnah — it is the path of success.'} },
  ,
    {"icon":"💚","color":"#1F8A5B","title":{"ar":"اقتدِ بالرحمة","en":"Follow his mercy"},"body":{"ar":"أرسلَه اللهُ رحمةً للعالمين. نقتدي به في رحمتِه بالناسِ كلِّهم.","en":"Allah sent him as a mercy to the worlds. We follow him in his mercy to all people."},"apply":{"ar":"أكونُ رحيماً بالناسِ اقتداءً به ﷺ.","en":"I am merciful to people, following him ﷺ."}}
  ],

  memorize: {
    ayah:{ ar:'﴿ وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ ﴾', ref:{ ar:'الأنبياء ١٠٧', en:"Al-Anbiya 107" } },
    hadith:{ ar:"«أنا سيِّدُ وَلَدِ آدمَ يومَ القيامةِ ولا فخر»", ref:{ ar:"[رواه مسلم ٢٢٧٨]", en:"[Muslim 2278]" } },
    dua: { ar:'اللّهُمَّ صَلِّ وسَلِّمْ على نَبِيِّنا مُحمَّد', ref:{ ar:'الصلاةُ على النبي ﷺ', en:"Blessings upon the Prophet ﷺ" } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُحبُّ النبيَّ محمداً ﷺ وأُكثِرُ من الصلاةِ عليه.', en:'I love the Prophet Muhammad ﷺ and send blessings upon him often.' },
        { ar:'أكونُ صادقاً أميناً كما كانَ ﷺ.', en:'I will be truthful and trustworthy as he ﷺ was.' },
        { ar:'أتعلّمُ سيرتَه لأقتديَ به.', en:'I will learn his life story to follow his example.' },
      ,
      {"ar":"أقتدي بنبيّي ﷺ في رحمتِه.","en":"I follow my Prophet ﷺ in his mercy."}
    ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'إلى أيِّ نبيٍّ يَنتهي نسبُ النبيِّ ﷺ؟',en:"To which prophet does the Prophet's ﷺ lineage trace?"},
          options:[{ar:'إسماعيلُ بنُ إبراهيم',en:'Ismail son of Ibrahim'},{ar:'موسى',en:'Musa'},{ar:'آدم مباشرةً',en:'Adam directly'}], answer:0 },
        { q:{ar:'في أيِّ عامٍ وُلد النبيُّ ﷺ؟',en:'In which year was the Prophet ﷺ born?'},
          options:[{ar:'عامُ الفيل',en:'The Year of the Elephant'},{ar:'عامُ الحُزن',en:'The Year of Sorrow'},{ar:'عامُ الفتح',en:'The Year of Conquest'}], answer:0 },
        { q:{ar:'بِمَ لقّبه أهلُ مكّةَ قبلَ النبوّة؟',en:'What did Makkah call him before his mission?'},
          options:[{ar:'الصادقُ الأمين',en:'The truthful, trustworthy'},{ar:'المَلِك',en:'The king'},{ar:'الغنيّ',en:'The rich'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبْ مراحلَ حياتِه ﷺ',en:'Order the stages of his life ﷺ'},
      items:[
        {ar:'وُلد بمكّةَ يتيماً',en:'Born in Makkah, an orphan'},
        {ar:'رعاه جدُّه ثم عمُّه',en:'Raised by his grandfather, then uncle'},
        {ar:'لُقِّب بالصادقِ الأمين',en:'Called the truthful, trustworthy'},
        {ar:'نزل عليه الوحيُ في الأربعين',en:'Revelation came at forty'},
        {ar:'دعا الناسَ رحمةً للعالمين',en:'He called all people — a mercy to the worlds'},
      ] },
    { type:'match', title:{ar:'وصِّلْ كلَّ اسمٍ بصاحبِه',en:'Match each name to its person'},
      pairs:[
        { a:{ar:'عبدُ الله',en:'Abdullah'}, b:{ar:'أبوه ﷺ',en:'His father ﷺ'} },
        { a:{ar:'آمنةُ بنتُ وهب',en:'Aminah bint Wahb'}, b:{ar:'أمُّه ﷺ',en:'His mother ﷺ'} },
        { a:{ar:'عبدُ المطّلب',en:'Abd al-Muttalib'}, b:{ar:'جدُّه ﷺ',en:'His grandfather ﷺ'} },
        { a:{ar:'أبو طالب',en:'Abu Talib'}, b:{ar:'عمُّه الذي كفله',en:'The uncle who raised him'} },
      ] },
  ],

  treasures: {
    medal:{ ar:'وِسامُ المعرفة', en:'Medal of Knowing Him ﷺ' },
    stickers:[
      { icon:'light',    color:'#2E9E6B', title:{ar:'نورُ الهداية',en:'Light of Guidance'} },
      { icon:'kaaba',    color:'#C2870A', title:{ar:'بيتُ مكّة',en:'House of Makkah'} },
      { icon:'gem',      color:'#46C088', title:{ar:'الصادقُ الأمين',en:'The Trustworthy'} },
      { icon:'crescent', color:'#1F8A5B', title:{ar:'خاتمُ النبيين',en:'Seal of Prophets'} },
    ],
    moral:{ ar:'محمدٌ ﷺ رحمةُ اللهِ المُهداةُ للعالمين، فمعرفتُه وحُبُّه واتّباعُه طريقُ السعادة.', en:'Muhammad ﷺ is Allah\'s mercy gifted to the worlds — knowing, loving, and following him is the path to happiness.' },
    reflect:[
      { ar:'النبيُّ ﷺ نشأ يتيماً ورعاه الله. كيف تكونُ رحيماً مع اليتيمِ ومَن فقدَ أهلَه؟', en:'The Prophet ﷺ grew up an orphan, cared for by Allah. How can you be kind to orphans and those who lost their family?' },
      { ar:'لُقِّب ﷺ بالأمين. ما الأمانةُ التي يَأتمنُك الناسُ عليها وتحفظُها؟', en:'He ﷺ was called "the trustworthy." What trust do people give you that you keep safe?' },
    ],
  },
};
