// data/activities.js — Era-wide "Challenge Hall".
// 10 ACTIVITIES, and EACH activity can be played at 3 LEVELS
//   (beginner مبتدئ · intermediate متوسط · advanced متقدم) → 30 challenges total.
// Every level reuses a chapter mini-game: quiz · order · match · trueFalse · whoAmI.
// Idea bank: the Muslim-kids dashboards (recognition → recall → mastery).
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.prophets = {
  era: 'prophets',
  title: { ar: 'ساحةُ التحدّي', en: 'Challenge Hall' },
  sub:   { ar: '١٢ نشاطاً — كلٌّ على ٣ مستويات (٣٦ تحدّياً)', en: '12 activities — each at 3 levels (36 challenges)' },
  medal: { ar: 'بطلُ التاريخ', en: 'History Champion' },
  list: [

  /* ── 1 · Signs & symbols ───────────────────────────────────────────── */
  { id:'signs', icon:'🔗', title:{ ar:'الأنبياءُ وعلاماتُهم', en:'Prophets & their signs' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'نُوح ﻿عليه السلام',en:'Nuh'},     b:{ar:'السفينة 🚢',en:'The Ark 🚢'} },
        { a:{ar:'يُونُس عليه السلام',en:'Yunus'},   b:{ar:'الحوت 🐋',en:'The Whale 🐋'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'العصا 🪄',en:'The Staff 🪄'} },
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'النار 🔥',en:'The Fire 🔥'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'صالِح عليه السلام',en:'Salih'},   b:{ar:'الناقة 🐪',en:'The She-camel 🐪'} },
        { a:{ar:'سُليمان عليه السلام',en:'Sulayman'},b:{ar:'الهدهد والطير 🐦',en:'Hoopoe & birds 🐦'} },
        { a:{ar:'يُوسُف عليه السلام',en:'Yusuf'},   b:{ar:'الرؤيا والقميص 👕',en:'The dream & the shirt 👕'} },
        { a:{ar:'زكريّا عليه السلام',en:'Zakariyya'},b:{ar:'المِحراب 🕌',en:'The sanctuary 🕌'} },
        { a:{ar:'أيُّوب عليه السلام',en:'Ayyub'},   b:{ar:'الصبرُ على البلاء 🌿',en:'Patience in trial 🌿'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'دَاوُد عليه السلام',en:'Dawud'},   b:{ar:'إلانةُ الحديد والدروع 🛡️',en:'Softened iron & armor 🛡️'} },
        { a:{ar:'سُليمان عليه السلام',en:'Sulayman'},b:{ar:'تسخيرُ الريح 🌬️',en:'The harnessed wind 🌬️'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'اليدُ البيضاء ✋',en:'The radiant hand ✋'} },
        { a:{ar:'عِيسى عليه السلام',en:'Isa'},      b:{ar:'الكلامُ في المهد 👶',en:'Speech in the cradle 👶'} },
        { a:{ar:'إبراهيم وإسماعيل',en:'Ibrahim & Ismail'}, b:{ar:'بناءُ الكعبة 🕋',en:'Building the Kaaba 🕋'} },
        { a:{ar:'يُونُس عليه السلام',en:'Yunus'},   b:{ar:'بطنُ الحوت 🐋',en:'Inside the whale 🐋'} },
      ]},
    } },

  /* ── 2 · Who am I? ─────────────────────────────────────────────────── */
  { id:'whoami', icon:'🕵️', title:{ ar:'مَن أنا؟', en:'Who am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'بنيتُ سفينةً بأمرِ الله.',en:'I built a ship by Allah’s command.'},
                {ar:'جاء طوفانٌ عظيمٌ وكذّبني قومي.',en:'A great flood came and my people denied me.'},
                {ar:'نجا معي المؤمنون والحيوانات.',en:'The believers and the animals were saved with me.'},
                {ar:'أنا أبو البشرِ بعدَ الطوفان.',en:'I am the father of mankind after the flood.'} ],
        options:[{ar:'نُوح',en:'Nuh'},{ar:'آدَم',en:'Adam'},{ar:'هُود',en:'Hud'},{ar:'لُوط',en:'Lut'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'كنتُ نبيّاً ومَلِكاً عظيماً.',en:'I was a prophet and a mighty king.'},
                {ar:'علّمني الله منطقَ الطير.',en:'Allah taught me the speech of birds.'},
                {ar:'حملَ إليّ الهدهدُ خبرَ مملكةِ سبأ.',en:'The hoopoe brought me news of Sheba.'},
                {ar:'سمعتُ كلامَ النملةِ في الوادي.',en:'I heard the ant speak in the valley.'} ],
        options:[{ar:'سُليمان',en:'Sulayman'},{ar:'دَاوُد',en:'Dawud'},{ar:'يُوسُف',en:'Yusuf'},{ar:'مُوسى',en:'Musa'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'ابتلاني الله بمرضٍ طويلٍ في جسدي.',en:'Allah tested me with a long illness.'},
                {ar:'فقدتُ مالي وولدي ولم أيأسْ.',en:'I lost wealth and children, yet never despaired.'},
                {ar:'ضُربَ بي المثلُ في الصبرِ الجميل.',en:'I became the very example of beautiful patience.'},
                {ar:'فردّ الله عليّ صحّتي وأهلي.',en:'Then Allah restored my health and family.'} ],
        options:[{ar:'أيُّوب',en:'Ayyub'},{ar:'يَعقوب',en:'Yaqub'},{ar:'إدريس',en:'Idris'},{ar:'ذو الكِفل',en:'Dhul-Kifl'}], answer:0 },
    } },

  /* ── 3 · True or False ─────────────────────────────────────────────── */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'آدمُ عليه السلام أوّلُ إنسانٍ خلقَه الله.',en:'Adam was the first human Allah created.'}, t:true },
        { statement:{ar:'بنى نوحٌ عليه السلام السفينةَ ونجا من الطوفان.',en:'Nuh built the ark and survived the flood.'}, t:true },
        { statement:{ar:'شقّ موسى البحرَ بيدِه دونَ عصا.',en:'Musa split the sea with his bare hand, not the staff.'}, t:false },
        { statement:{ar:'دعا يونسُ عليه السلام ربَّه في بطنِ الحوت.',en:'Yunus called upon his Lord inside the whale.'}, t:true },
        { statement:{ar:'كان يوسفُ عليه السلام أخا يعقوب.',en:'Yusuf was the brother of Yaqub.'}, t:false },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'ناقةُ اللهِ كانت معجزةَ صالحٍ عليه السلام.',en:'The she-camel was the miracle of Salih.'}, t:true },
        { statement:{ar:'رفعَ إبراهيمُ وإسماعيلُ قواعدَ الكعبة.',en:'Ibrahim and Ismail raised the foundations of the Kaaba.'}, t:true },
        { statement:{ar:'كان داوُدُ عليه السلام نبيّاً ومَلِكاً.',en:'Dawud was a prophet and a king.'}, t:true },
        { statement:{ar:'تكلّم عيسى عليه السلام وهو طفلٌ في المهد.',en:'Isa spoke as a baby in the cradle.'}, t:true },
        { statement:{ar:'كان هارونُ عليه السلام ابنَ موسى.',en:'Harun was the son of Musa.'}, t:false },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'أُرسِلَ شعيبٌ عليه السلام إلى أهلِ مَدْين.',en:'Shuayb was sent to the people of Madyan.'}, t:true },
        { statement:{ar:'صار يوسفُ عليه السلام عزيزاً على خزائنِ مصر.',en:'Yusuf became a trusted minister over Egypt’s stores.'}, t:true },
        { statement:{ar:'كان سُليمانُ عليه السلام أبا داوُد.',en:'Sulayman was the father of Dawud.'}, t:false },
        { statement:{ar:'كفلَ زكريّا عليه السلام مريمَ ابنةَ عمران.',en:'Zakariyya was the guardian of Maryam.'}, t:true },
        { statement:{ar:'أُرسِلَ هودٌ عليه السلام إلى قومِ ثمود.',en:'Hud was sent to the people of Thamud.'}, t:false },
      ]},
    } },

  /* ── 4 · Chronological order ───────────────────────────────────────── */
  { id:'order', icon:'🔢', title:{ ar:'الترتيبُ الزمنيّ', en:'Chronological order' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'آدَم عليه السلام',en:'Adam'},{ar:'نُوح عليه السلام',en:'Nuh'},
        {ar:'إبراهيم عليه السلام',en:'Ibrahim'},{ar:'مُوسى عليه السلام',en:'Musa'} ]},
      intermediate:{ type:'order', items:[
        {ar:'آدَم عليه السلام',en:'Adam'},{ar:'نُوح عليه السلام',en:'Nuh'},
        {ar:'إبراهيم عليه السلام',en:'Ibrahim'},{ar:'مُوسى عليه السلام',en:'Musa'},{ar:'عِيسى عليه السلام',en:'Isa'} ]},
      advanced:{ type:'order', items:[
        {ar:'نُوح عليه السلام',en:'Nuh'},{ar:'إبراهيم عليه السلام',en:'Ibrahim'},{ar:'يُوسُف عليه السلام',en:'Yusuf'},
        {ar:'مُوسى عليه السلام',en:'Musa'},{ar:'دَاوُد عليه السلام',en:'Dawud'},{ar:'سُليمان عليه السلام',en:'Sulayman'},{ar:'عِيسى عليه السلام',en:'Isa'} ]},
    } },

  /* ── 5 · Prophets & their peoples ──────────────────────────────────── */
  { id:'peoples', icon:'👥', title:{ ar:'الأنبياءُ وأقوامُهم', en:'Prophets & their peoples' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'هُود عليه السلام',en:'Hud'},   b:{ar:'قومُ عاد',en:'The people of Aad'} },
        { a:{ar:'صالِح عليه السلام',en:'Salih'},b:{ar:'قومُ ثمود',en:'The people of Thamud'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},b:{ar:'أهلُ مَدْين',en:'The people of Madyan'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'هُود عليه السلام',en:'Hud'},   b:{ar:'قومُ عاد',en:'The people of Aad'} },
        { a:{ar:'صالِح عليه السلام',en:'Salih'},b:{ar:'قومُ ثمود',en:'The people of Thamud'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},b:{ar:'أهلُ مَدْين',en:'The people of Madyan'} },
        { a:{ar:'لُوط عليه السلام',en:'Lut'},   b:{ar:'قومُ سَدوم',en:'The people of Sodom'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'هُود عليه السلام',en:'Hud'},   b:{ar:'قومُ عاد',en:'The people of Aad'} },
        { a:{ar:'صالِح عليه السلام',en:'Salih'},b:{ar:'قومُ ثمود',en:'The people of Thamud'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},b:{ar:'أهلُ مَدْين',en:'The people of Madyan'} },
        { a:{ar:'يُونُس عليه السلام',en:'Yunus'},b:{ar:'أهلُ نِينَوى',en:'The people of Nineveh'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'}, b:{ar:'بنو إسرائيل',en:'The Children of Israil'} },
      ]},
    } },

  /* ── 6 · Miracles quiz ─────────────────────────────────────────────── */
  { id:'miracles', icon:'✨', title:{ ar:'اختبارُ المعجزات', en:'Miracles quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'مَن جعل الله النارَ عليه برداً وسلاماً؟',en:'For whom did Allah make the fire cool and safe?'},
          options:[{ar:'إبراهيم',en:'Ibrahim'},{ar:'مُوسى',en:'Musa'},{ar:'نُوح',en:'Nuh'}], answer:0 },
        { q:{ar:'أيُّ نبيٍّ شقّ البحرَ بعصاه؟',en:'Which prophet split the sea with his staff?'},
          options:[{ar:'مُوسى',en:'Musa'},{ar:'هارون',en:'Harun'},{ar:'يُوسُف',en:'Yusuf'}], answer:0 },
        { q:{ar:'مَن دعا ربَّه في بطنِ الحوت؟',en:'Who prayed inside the whale?'},
          options:[{ar:'يُونُس',en:'Yunus'},{ar:'نُوح',en:'Nuh'},{ar:'أيُّوب',en:'Ayyub'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'ناقةُ اللهِ المعجزةُ كانت لأيِّ نبي؟',en:'The miracle she-camel was a sign for which prophet?'},
          options:[{ar:'صالِح',en:'Salih'},{ar:'هُود',en:'Hud'},{ar:'شُعَيب',en:'Shuayb'},{ar:'إلياس',en:'Ilyas'}], answer:0 },
        { q:{ar:'مَن علّمه اللهُ صنعةَ الدروعِ وألانَ له الحديد؟',en:'Whom did Allah teach to make armor, softening iron?'},
          options:[{ar:'دَاوُد',en:'Dawud'},{ar:'سُليمان',en:'Sulayman'},{ar:'هارون',en:'Harun'},{ar:'ذو الكِفل',en:'Dhul-Kifl'}], answer:0 },
        { q:{ar:'أيُّ نبيٍّ كلّم الناسَ وهو طفلٌ في المهد؟',en:'Which prophet spoke to people as a baby?'},
          options:[{ar:'عِيسى',en:'Isa'},{ar:'يَحيى',en:'Yahya'},{ar:'إسماعيل',en:'Ismail'},{ar:'إدريس',en:'Idris'}], answer:0 },
        { q:{ar:'مَن سخّر الله له الريحَ تجري بأمرِه؟',en:'For whom did Allah subject the wind?'},
          options:[{ar:'سُليمان',en:'Sulayman'},{ar:'دَاوُد',en:'Dawud'},{ar:'هُود',en:'Hud'},{ar:'مُوسى',en:'Musa'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'بإذنِ الله كان عيسى يُحيي المَوتى ويُبرئُ ماذا؟',en:'By Allah’s leave, Isa healed the blind and whom else?'},
          options:[{ar:'الأبرصَ',en:'The leper'},{ar:'الأصمَّ فقط',en:'Only the deaf'},{ar:'لا أحد',en:'No one'}], answer:0 },
        { q:{ar:'تسبّحُ الجبالُ والطيرُ مع أيِّ نبي؟',en:'Mountains and birds glorify Allah with which prophet?'},
          options:[{ar:'دَاوُد',en:'Dawud'},{ar:'سُليمان',en:'Sulayman'},{ar:'إلياس',en:'Ilyas'}], answer:0 },
        { q:{ar:'اليدُ البيضاءُ والعصا معجزتانِ لأيِّ نبي؟',en:'The radiant hand and the staff were signs of which prophet?'},
          options:[{ar:'مُوسى',en:'Musa'},{ar:'هارون',en:'Harun'},{ar:'صالِح',en:'Salih'}], answer:0 },
        { q:{ar:'مَن أحياه الله بعدَ مئةِ عامٍ آيةً للناس؟ (نبيٌّ بحسبِ قول)',en:'Whose she-camel’s land of Thamud was called…?'},
          options:[{ar:'الحِجر',en:'Al-Hijr'},{ar:'الأحقاف',en:'Al-Ahqaf'},{ar:'مَدْين',en:'Madyan'}], answer:0 },
        { q:{ar:'دعا زكريّا ربَّه فوُهبَ له غلامٌ، فمن هو؟',en:'Zakariyya prayed for a son — who was granted?'},
          options:[{ar:'يَحيى',en:'Yahya'},{ar:'عِيسى',en:'Isa'},{ar:'إسحاق',en:'Ishaq'}], answer:0 },
      ]},
    } },

  /* ── 7 · Prophets & their places ───────────────────────────────────── */
  { id:'places', icon:'📍', title:{ ar:'الأنبياءُ وأماكنُهم', en:'Prophets & their places' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'مكّة',en:'Makkah'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'مصر',en:'Egypt'} },
        { a:{ar:'نُوح عليه السلام',en:'Nuh'},       b:{ar:'بلادُ الرافدين',en:'Mesopotamia'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'مكّة',en:'Makkah'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'مصر ← سيناء',en:'Egypt → Sinai'} },
        { a:{ar:'يُونُس عليه السلام',en:'Yunus'},   b:{ar:'نِينَوى',en:'Nineveh'} },
        { a:{ar:'عِيسى عليه السلام',en:'Isa'},      b:{ar:'فلسطين',en:'Palestine'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'هُود عليه السلام',en:'Hud'},   b:{ar:'الأحقاف',en:'Al-Ahqaf'} },
        { a:{ar:'صالِح عليه السلام',en:'Salih'},b:{ar:'الحِجر',en:'Al-Hijr'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},b:{ar:'مَدْين',en:'Madyan'} },
        { a:{ar:'دَاوُد عليه السلام',en:'Dawud'},b:{ar:'بيتُ المقدِس',en:'Jerusalem'} },
        { a:{ar:'يُوسُف عليه السلام',en:'Yusuf'},b:{ar:'مصر',en:'Egypt'} },
      ]},
    } },

  /* ── 8 · Lineage & kin ─────────────────────────────────────────────── */
  { id:'lineage', icon:'🌳', title:{ ar:'النسبُ والقرابة', en:'Lineage & kin' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'يُوسُف عليه السلام',en:'Yusuf'},   b:{ar:'ابنُ يعقوب',en:'Son of Yaqub'} },
        { a:{ar:'هارون عليه السلام',en:'Harun'},   b:{ar:'أخو موسى',en:'Brother of Musa'} },
        { a:{ar:'سُليمان عليه السلام',en:'Sulayman'},b:{ar:'ابنُ داوُد',en:'Son of Dawud'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'إسماعيل وإسحاق',en:'Ismail & Ishaq'},b:{ar:'ابنا إبراهيم',en:'Sons of Ibrahim'} },
        { a:{ar:'يُوسُف عليه السلام',en:'Yusuf'},   b:{ar:'ابنُ يعقوب',en:'Son of Yaqub'} },
        { a:{ar:'يَحيى عليه السلام',en:'Yahya'},    b:{ar:'ابنُ زكريّا',en:'Son of Zakariyya'} },
        { a:{ar:'سُليمان عليه السلام',en:'Sulayman'},b:{ar:'ابنُ داوُد',en:'Son of Dawud'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'إسحاق عليه السلام',en:'Ishaq'},   b:{ar:'ابنُ إبراهيم',en:'Son of Ibrahim'} },
        { a:{ar:'يَعقوب عليه السلام',en:'Yaqub'},  b:{ar:'ابنُ إسحاق',en:'Son of Ishaq'} },
        { a:{ar:'يُوسُف عليه السلام',en:'Yusuf'},   b:{ar:'ابنُ يعقوب',en:'Son of Yaqub'} },
        { a:{ar:'يَحيى عليه السلام',en:'Yahya'},    b:{ar:'ابنُ زكريّا',en:'Son of Zakariyya'} },
        { a:{ar:'سُليمان عليه السلام',en:'Sulayman'},b:{ar:'ابنُ داوُد',en:'Son of Dawud'} },
      ]},
    } },

  /* ── 9 · Stories quiz ──────────────────────────────────────────────── */
  { id:'stories', icon:'📜', title:{ ar:'اختبارُ القصص', en:'Stories quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'مَن بنى السفينةَ ونجا من الطوفان؟',en:'Who built the ark and survived the flood?'},
          options:[{ar:'نُوح',en:'Nuh'},{ar:'هُود',en:'Hud'},{ar:'لُوط',en:'Lut'}], answer:0 },
        { q:{ar:'أيُّ نبيٍّ ألقاه إخوتُه في البئر؟',en:'Which prophet was thrown into the well?'},
          options:[{ar:'يُوسُف',en:'Yusuf'},{ar:'يَعقوب',en:'Yaqub'},{ar:'يَحيى',en:'Yahya'}], answer:0 },
        { q:{ar:'أوّلُ إنسانٍ خلقَه الله هو؟',en:'The first human Allah created is?'},
          options:[{ar:'آدَم',en:'Adam'},{ar:'إدريس',en:'Idris'},{ar:'نُوح',en:'Nuh'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'أيُّ نبيٍّ عُرف بالصبرِ الجميلِ على فِراقِ ابنِه؟',en:'Who is known for beautiful patience over losing his son?'},
          options:[{ar:'يَعقوب',en:'Yaqub'},{ar:'إسحاق',en:'Ishaq'},{ar:'أيُّوب',en:'Ayyub'}], answer:0 },
        { q:{ar:'النبيُّ الذي علّم قومَه إيفاءَ الكيلِ والصدقَ في البيع؟',en:'Who taught his people honest scales?'},
          options:[{ar:'شُعَيب',en:'Shuayb'},{ar:'لُوط',en:'Lut'},{ar:'هُود',en:'Hud'}], answer:0 },
        { q:{ar:'مَن أوّلُ الرسلِ إلى أهلِ الأرض؟',en:'Who was the first messenger sent to the people of the earth?'},
          options:[{ar:'نُوح',en:'Nuh'},{ar:'آدَم',en:'Adam'},{ar:'إبراهيم',en:'Ibrahim'}], answer:0 },
        { q:{ar:'مَن كان أوّلَ مَن خطّ بالقلم؟',en:'Who was the first to write with the pen?'},
          options:[{ar:'إدريس',en:'Idris'},{ar:'آدَم',en:'Adam'},{ar:'يُوسُف',en:'Yusuf'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'في أيِّ أرضٍ وُلد عيسى عليه السلام؟',en:'In which land was Isa born?'},
          options:[{ar:'بيتُ لحم · فلسطين',en:'Bethlehem · Palestine'},{ar:'مكّة',en:'Makkah'},{ar:'مصر',en:'Egypt'}], answer:0 },
        { q:{ar:'مَن كفلَ مريمَ ودعا ربَّه في المِحراب؟',en:'Who was Maryam’s guardian and prayed in the sanctuary?'},
          options:[{ar:'زكريّا',en:'Zakariyya'},{ar:'يَحيى',en:'Yahya'},{ar:'عِيسى',en:'Isa'}], answer:0 },
        { q:{ar:'ابنُ أخي إبراهيمَ الذي نجا بالإيمان؟',en:'Ibrahim’s nephew who was saved by faith?'},
          options:[{ar:'لُوط',en:'Lut'},{ar:'إسحاق',en:'Ishaq'},{ar:'شُعَيب',en:'Shuayb'}], answer:0 },
        { q:{ar:'النبيُّ الذي حملَ اسمَ «اليَسَع» وكان خليفةً لإلياس؟',en:'The prophet named Al-Yasa, successor of Ilyas?'},
          options:[{ar:'اليَسَع',en:'Al-Yasa'},{ar:'ذو الكِفل',en:'Dhul-Kifl'},{ar:'إلياس',en:'Ilyas'}], answer:0 },
        { q:{ar:'إلى أيِّ قومٍ أُرسِلَ يونسُ عليه السلام؟',en:'To which people was Yunus sent?'},
          options:[{ar:'أهلُ نِينَوى',en:'The people of Nineveh'},{ar:'قومُ عاد',en:'Aad'},{ar:'أهلُ مَدْين',en:'Madyan'}], answer:0 },
      ]},
    } },

  /* ── 10 · Titles & traits ──────────────────────────────────────────── */
  { id:'titles', icon:'🏷️', title:{ ar:'الألقابُ والصفات', en:'Titles & traits' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'خليلُ الله',en:'Friend of Allah'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'كليمُ الله',en:'Spoken to by Allah'} },
        { a:{ar:'آدَم عليه السلام',en:'Adam'},      b:{ar:'أبو البشر',en:'Father of mankind'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'خليلُ الله',en:'Friend of Allah'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'كليمُ الله',en:'Spoken to by Allah'} },
        { a:{ar:'أيُّوب عليه السلام',en:'Ayyub'},   b:{ar:'أصبرُ الناس',en:'Most patient'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},  b:{ar:'خطيبُ الأنبياء',en:'Orator of the prophets'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'إبراهيم عليه السلام',en:'Ibrahim'},b:{ar:'خليلُ الله',en:'Friend of Allah'} },
        { a:{ar:'مُوسى عليه السلام',en:'Musa'},     b:{ar:'كليمُ الله',en:'Spoken to by Allah'} },
        { a:{ar:'أيُّوب عليه السلام',en:'Ayyub'},   b:{ar:'أصبرُ الناس',en:'Most patient'} },
        { a:{ar:'شُعَيب عليه السلام',en:'Shuayb'},  b:{ar:'خطيبُ الأنبياء',en:'Orator of the prophets'} },
        { a:{ar:'إدريس عليه السلام',en:'Idris'},    b:{ar:'أوّلُ من خطّ بالقلم',en:'First to write with the pen'} },
      ]},
    } },

  /* ── 11 · Memory flip cards ────────────────────────────────────────── */
  { id:'flip', icon:'🃏', title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'نُوح',en:'Nuh'},     b:{ar:'🚢',en:'🚢'} },
        { a:{ar:'مُوسى',en:'Musa'},   b:{ar:'🪄',en:'🪄'} },
        { a:{ar:'يُونُس',en:'Yunus'}, b:{ar:'🐋',en:'🐋'} },
        { a:{ar:'إبراهيم',en:'Ibrahim'},b:{ar:'🔥',en:'🔥'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'نُوح',en:'Nuh'},     b:{ar:'🚢',en:'🚢'} },
        { a:{ar:'مُوسى',en:'Musa'},   b:{ar:'🪄',en:'🪄'} },
        { a:{ar:'يُونُس',en:'Yunus'}, b:{ar:'🐋',en:'🐋'} },
        { a:{ar:'إبراهيم',en:'Ibrahim'},b:{ar:'🔥',en:'🔥'} },
        { a:{ar:'صالِح',en:'Salih'},  b:{ar:'🐪',en:'🐪'} },
        { a:{ar:'سُليمان',en:'Sulayman'},b:{ar:'🐦',en:'🐦'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'نُوح',en:'Nuh'},     b:{ar:'🚢',en:'🚢'} },
        { a:{ar:'مُوسى',en:'Musa'},   b:{ar:'🪄',en:'🪄'} },
        { a:{ar:'يُونُس',en:'Yunus'}, b:{ar:'🐋',en:'🐋'} },
        { a:{ar:'إبراهيم',en:'Ibrahim'},b:{ar:'🔥',en:'🔥'} },
        { a:{ar:'صالِح',en:'Salih'},  b:{ar:'🐪',en:'🐪'} },
        { a:{ar:'سُليمان',en:'Sulayman'},b:{ar:'🐦',en:'🐦'} },
        { a:{ar:'دَاوُد',en:'Dawud'}, b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'إبراهيم وإسماعيل',en:'Ibrahim & Ismail'},b:{ar:'🕋',en:'🕋'} },
      ]},
    } },

  /* ── 12 · Journey maze ─────────────────────────────────────────────── */
  { id:'maze', icon:'🧭', title:{ ar:'متاهةُ الرحلة', en:'Journey maze' },
    levels:{
      beginner:{ type:'maze', size:6, goal:'🕋',
        start:{ar:'العراق',en:'Iraq'}, dest:{ar:'مكّة',en:'Makkah'},
        hook:{ar:'أوصِلْ إبراهيمَ عليه السلام إلى مكّة',en:'Lead Ibrahim to Makkah'} },
      intermediate:{ type:'maze', size:8, goal:'⛰️',
        start:{ar:'مصر',en:'Egypt'}, dest:{ar:'سيناء',en:'Sinai'},
        hook:{ar:'أوصِلْ موسى عليه السلام إلى الطُّور',en:'Lead Musa to Mount Sinai'} },
      advanced:{ type:'maze', size:10, goal:'🏛️',
        start:{ar:'كنعان',en:'Canaan'}, dest:{ar:'مصر',en:'Egypt'},
        hook:{ar:'أوصِلْ يوسف عليه السلام إلى مصر',en:'Lead Yusuf to Egypt'} },
    } },

  ],
};
