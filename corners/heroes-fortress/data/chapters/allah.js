// data/chapters/allah.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// اللهُ · الإله (المألوهُ المعبودُ بحقّ، الذي تألهُه القلوبُ محبّةً وتعظيماً، وإليه تُضافُ سائرُ الأسماء)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · الدرر السنية · إسلام ويب (معاني الأسماء)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.allah = {
  id: 'allah', era: 'heart', kind: 'name', icon: 'crescent',
  name: { ar: 'اللهُ الإله', en: 'Allah, the One God' },
  tag:  { ar: 'المعبودُ بحقٍّ وحدَه', en: 'The only One truly worthy of worship' },
  accent: '#B8860B', accent2: '#E0B341',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! 🌙 ما أوّلُ اسمٍ تعلّمتَه عن ربِّك؟ إنّه <b>«الله»</b>! أعظمُ الأسماءِ وأجملُها، تقولُه في «بسم الله» و«الحمد لله». تعالَ نتعرّفْ على معناه فيزدادَ قلبُك <b>حبّاً له</b>.',
    en: 'Welcome, little one! 🌙 What is the first name you learned for your Lord? It is <b>"Allah"</b>! The greatest and most beautiful name — you say it in "Bismillah" and "Alhamdulillah". Come, let’s learn its meaning so your heart grows in <b>love for Him</b>.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'اسمُ <b>«الله»</b> لا يُسمّى به أحدٌ غيرُه أبداً! وكلُّ الأسماءِ الحسنى تُضافُ إليه، فنقول: «الرحمنُ» من أسماءِ الله، ولا نقول: «اللهُ» من أسماءِ الرحمن. قال تعالى: <b>﴿إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي﴾</b>.',
      en: 'No one else is ever named <b>"Allah"</b>! All the Beautiful Names are linked to it, so we say: "Ar-Rahman is one of Allah’s names", but never "Allah is one of Ar-Rahman’s names". He said: <b>"Indeed, I am Allah; there is no god but Me, so worship Me."</b>',
    },
    who: {
      ar: '«اللهُ» معناه: <b>الإلهُ المألوه</b>، أي المعبودُ بحقّ، الذي تَألَهُه القلوبُ: تُحبُّه وتُعظّمُه وتَخضعُ له وتَشتاقُ إليه. و«الإلهُ» هو المستحقُّ وحدَه للعبادة، فلا نَسجدُ ولا ندعو ولا نَذبحُ ولا نَحلِفُ إلا له. هذا الاسمُ يجمعُ <b>كلَّ صفاتِ الكمال</b>، وكلُّ الأسماءِ الحسنى تابعةٌ له. ومعنى «لا إلهَ إلا الله»: <b>لا معبودَ بحقٍّ إلا الله</b>. فمن عرفَ اللهَ أحبَّه أكثرَ من كلِّ شيء.',
      en: '"Allah" means <b>the God who is worshipped</b> — the One truly worthy of worship, whom hearts adore: they love Him, revere Him, humble themselves before Him and long for Him. "Al-Ilah" is the One who alone deserves worship, so we bow, pray, sacrifice and swear only to Him. This name gathers <b>every quality of perfection</b>, and all the Beautiful Names follow it. "La ilaha illallah" means <b>none is truly worshipped except Allah</b>. Whoever knows Allah loves Him more than anything.',
    },
    facts: [
      { ar: 'اسمُ «الله» لا يُسمّى به أحدٌ غيرُه سبحانه.', en: 'No one besides Him is ever named "Allah".' },
      { ar: '«الإله» معناه المعبودُ الذي تُحبُّه القلوبُ وتُعظّمُه.', en: '"Al-Ilah" means the One worshipped, whom hearts love and revere.' },
      { ar: 'كلُّ الأسماءِ الحسنى تُضافُ إلى اسمِ «الله».', en: 'All the Beautiful Names are attributed to the name "Allah".' },
      { ar: '«لا إلهَ إلا الله» أعظمُ كلمة: لا معبودَ بحقٍّ إلا الله.', en: '"La ilaha illallah" is the greatest word: none truly worshipped but Allah.' },
      { ar: 'كلُّ عبادةٍ — صلاةٍ ودعاءٍ وذِكر — تكونُ لله وحدَه.', en: 'Every worship — prayer, du‘a, remembrance — is for Allah alone.' },
    ],
    ayah: { ar: '﴿ إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي ﴾', ref: { ar: 'طه ١٤', en: 'Ta-Ha 14' } },
  },
  storyIntro: {
    ar: 'تعالَ نرى كيف عرفَ الأنبياءُ والصالحون «الله» فأحبّوه وعبدوه وحدَه 🌙',
    en: 'Come, let’s see how prophets and righteous people knew "Allah", loved Him, and worshipped Him alone 🌙',
  },
  story: [
    { scene: 'idols', tag: { ar: 'في قصص الأنبياء', en: 'In the prophets’ stories' },
      title: { ar: 'إبراهيمُ والأصنامُ الصامتة', en: 'Ibrahim and the silent idols' },
      text: { ar: 'رأى إبراهيمُ قومَه يَعبدون <b>أصناماً</b> من حجرٍ لا تَسمعُ ولا تَنفع. فكسّرها وتركَ كبيرَها، ثم قال لهم: اسألوه! فعرفوا أنّها لا تَنطِق. علّمهم إبراهيمُ أنّ <b>الإلهَ الحقَّ</b> هو اللهُ الذي خلقَهم ويُطعمُهم ويَشفيهم. فالمعبودُ بحقٍّ هو اللهُ وحدَه.', en: 'Ibrahim saw his people worshipping <b>idols</b> of stone that could not hear or help. He broke them, leaving the biggest, then told them: ask it! They knew it could not speak. Ibrahim taught them that the <b>true God</b> is Allah, who created them, feeds them and heals them. The only One truly worshipped is Allah.' } },
    { scene: 'call', tag: { ar: 'في السيرة', en: 'In the Seerah' },
      title: { ar: 'قولوا: لا إلهَ إلا اللهُ تُفلحوا', en: 'Say: La ilaha illallah and succeed' },
      text: { ar: 'كان النبيُّ ﷺ يمشي بين الناسِ في مكّةَ والأسواق، يدعوهم بلطفٍ إلى كلمةٍ واحدة: <b>«لا إلهَ إلا الله»</b>. صبرَ على الأذى سنواتٍ طويلة، لأنّه يُحبُّ لهم الخير. فدخلَ الناسُ في دينِ اللهِ أفواجاً، وصارت هذه الكلمةُ <b>مفتاحَ الجنّة</b>.', en: 'The Prophet ﷺ walked among people in Makkah and its markets, gently inviting them to one word: <b>"La ilaha illallah"</b>. He bore harm patiently for many years, because he wanted good for them. People entered Allah’s religion in crowds, and this word became <b>the key to Paradise</b>.' } },
    { scene: 'mosque', tag: { ar: 'في حياتنا', en: 'In our life' },
      title: { ar: '«اللهُ أكبر» خمسَ مرّاتٍ كلَّ يوم', en: '"Allahu Akbar" five times a day' },
      text: { ar: 'يَسمعُ يوسفُ الأذانَ فيترُكُ لعبتَه ويقول: «<b>اللهُ أكبر</b>» — أكبرُ من اللعبِ ومن كلِّ شيء! ثم يتوضّأُ ويقفُ للصلاة. هكذا يُخبرُ قلبُه أنّ اللهَ هو <b>أحبُّ إليه</b> من كلِّ ما حولَه. والصلاةُ أجملُ لقاءٍ مع الله.', en: 'Yusuf hears the adhan, puts down his toy and says: "<b>Allahu Akbar</b>" — greater than play and greater than everything! Then he makes wudu and stands to pray. This is how his heart says Allah is <b>dearer to him</b> than all around him. Prayer is the most beautiful meeting with Allah.' } },
    { scene: 'cosmos', tag: { ar: 'في الكون', en: 'In the universe' },
      title: { ar: 'كلُّ شيءٍ يَدُلُّ عليه', en: 'Everything points to Him' },
      text: { ar: 'نظرت سارةُ إلى السماءِ ليلاً: نجومٌ لا تُحصى، وقمرٌ يُضيء. فسألت أمَّها: مَن صنعَ هذا كلَّه؟ قالت الأم: <b>اللهُ</b> يا حبيبتي، خالقُ كلِّ شيء. فقالت سارة: إذن هو وحدَه مَن أدعوه وأُحبُّه! فرحت الأمُّ وعلّمتها أن تقول: <b>«سبحانَ الله»</b>.', en: 'Sara looked at the night sky: countless stars and a shining moon. She asked her mother: who made all this? Her mother said: <b>Allah</b>, my dear, the Creator of everything. Sara said: then He alone is the One I call on and love! Her mother was happy and taught her to say: <b>"SubhanAllah"</b>.' } },
  ],
  storyChoice: {
    q: { ar: 'خِفتَ في الليلِ وأنت وحدَك، مَن تدعو؟', en: 'You feel scared at night alone — whom do you call on?' },
    opts: [
      { t: { ar: 'تميمةً أو خيطاً أُعلّقُه', en: 'A charm or string I hang up' }, c: false,
        exp: { ar: 'لا، فالتمائمُ لا تَنفعُ ولا تَضُرّ. اللهُ وحدَه هو الحافظ.', en: 'No — charms neither help nor harm. Allah alone protects.' } },
      { t: { ar: 'اللهَ وحدَه، فأقولُ: «يا الله» وأقرأُ أذكاري', en: 'Allah alone — I say "Ya Allah" and read my adhkar' }, c: true,
        exp: { ar: 'أحسنت! اللهُ هو الإلهُ الذي نَدعوه وحدَه، وهو أقربُ إليك من كلِّ أحد.', en: 'Well done! Allah is the God we call on alone, and He is nearer to you than anyone.' } },
      { t: { ar: 'لا أدعو أحداً', en: 'I don’t call on anyone' }, c: false,
        exp: { ar: 'بل ادعُ اللهَ، فهو يُحبُّ أن تدعوَه ويُجيبُك.', en: 'Rather, call on Allah — He loves to be called on and answers you.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ ﴾', ref: { ar: 'البقرة ١٦٣', en: 'Al-Baqarah 163' } },
    dua:  { ar: 'لا إلهَ إلا اللهُ وحدَه لا شريكَ له، له المُلكُ وله الحمدُ، وهو على كلِّ شيءٍ قدير', ref: { ar: 'رواه البخاري ومسلم', en: 'Bukhari & Muslim' } },
    pledge: {
      title: { ar: 'عهدُ التوحيد', en: 'The Tawhid Pledge' },
      lines: [
        { ar: 'أقولُ «لا إلهَ إلا الله» عشرَ مرّاتٍ اليوم وأتفكّرُ في معناها.', en: 'I say "La ilaha illallah" ten times today and think about its meaning.' },
        { ar: 'أدعو اللهَ وحدَه في كلِّ حاجةٍ صغيرةٍ أو كبيرة.', en: 'I call on Allah alone for every need, small or big.' },
        { ar: 'أُسرِعُ إلى الصلاةِ عندَ سماعِ «اللهُ أكبر».', en: 'I hurry to prayer when I hear "Allahu Akbar".' },
        { ar: 'أبدأُ طعامي ولعبي ودراستي بـ«بسم الله».', en: 'I begin my food, play and study with "Bismillah".' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ما معنى «الإله»؟', en: 'What does "Al-Ilah" mean?' },
          options: [ { ar: 'صنمٌ من حجر', en: 'A stone idol' }, { ar: 'المعبودُ بحقٍّ الذي تُحبُّه القلوب', en: 'The One truly worshipped, whom hearts love' }, { ar: 'ملكٌ من ملوكِ الأرض', en: 'An earthly king' } ], answer: 1 },
        { q: { ar: 'ما معنى «لا إلهَ إلا الله»؟', en: 'What does "La ilaha illallah" mean?' },
          options: [ { ar: 'لا معبودَ بحقٍّ إلا الله', en: 'None is truly worshipped except Allah' }, { ar: 'اللهُ واحدٌ من آلهةٍ كثيرة', en: 'Allah is one of many gods' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
        { q: { ar: 'ماذا فعلَ إبراهيمُ بالأصنام؟', en: 'What did Ibrahim do with the idols?' },
          options: [ { ar: 'عبدَها مع قومِه', en: 'Worshipped them with his people' }, { ar: 'زيّنها', en: 'Decorated them' }, { ar: 'كسّرها ليُبيّنَ أنّها لا تَنفع', en: 'Broke them to show they cannot help' } ], answer: 2 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'الله', en: 'Allah' }, b: { ar: 'اسمٌ لا يُسمّى به غيرُه', en: 'A name no one else bears' } },
        { a: { ar: 'الإله', en: 'Al-Ilah' }, b: { ar: 'المستحقُّ وحدَه للعبادة', en: 'The One who alone deserves worship' } },
        { a: { ar: 'إبراهيم', en: 'Ibrahim' }, b: { ar: 'كسّرَ الأصنام', en: 'Broke the idols' } },
        { a: { ar: 'لا إلهَ إلا الله', en: 'La ilaha illallah' }, b: { ar: 'مفتاحُ الجنّة', en: 'The key to Paradise' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'كلُّ الأسماءِ الحسنى تُضافُ إلى اسمِ «الله».', en: 'All the Beautiful Names are attributed to "Allah".' }, t: true },
        { statement: { ar: 'يجوزُ أن ندعوَ صنماً مع الله.', en: 'We may call on an idol alongside Allah.' }, t: false },
        { statement: { ar: 'نَحلِفُ بالله وحدَه، لا بغيرِه.', en: 'We swear by Allah alone, not by anything else.' }, t: true },
        { statement: { ar: 'يُسمّى بعضُ الناسِ باسمِ «الله».', en: 'Some people are named "Allah".' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ التوحيد', en: 'Medal of Tawhid' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الله» اخلِطْ هذه في يومِك ✨', en: 'To live the name "Allah", mix these into your day ✨' },
      steps: [
        { icon: '☝️', ar: 'أقولُ «لا إلهَ إلا الله» وأنا أفهمُ معناها.', en: 'I say "La ilaha illallah" understanding its meaning.' },
        { icon: '🕌', ar: 'أُصلّي في وقتِها لأنّ اللهَ أحبُّ إليّ من كلِّ شيء.', en: 'I pray on time because Allah is dearer to me than anything.' },
        { icon: '🤲', ar: 'أدعو اللهَ وحدَه وأطلبُ منه كلَّ حاجاتي.', en: 'I call on Allah alone and ask Him for all my needs.' },
        { icon: '🍽️', ar: 'أبدأُ كلَّ عملٍ بـ«بسم الله» وأختمُه بـ«الحمد لله».', en: 'I start every task with "Bismillah" and end with "Alhamdulillah".' },
      ],
      result: { ar: 'قلبٌ مُوحِّدٌ يُحبُّ اللهَ ويعبدُه وحدَه، فيعيشُ سعيداً مطمئناً! 🌙', en: 'A heart of Tawhid that loves Allah and worships Him alone, living happy and at peace! 🌙' },
    },
    stickers: [
      { icon: 'crescent', color: '#B8860B', title: { ar: 'هلالُ التوحيد', en: 'Crescent of Tawhid' } },
      { icon: 'mosque',   color: '#C99A1E', title: { ar: 'اللهُ أكبر', en: 'Allahu Akbar' } },
      { icon: 'heart',    color: '#9A7009', title: { ar: 'أحبُّ اللهَ أكثر', en: 'I Love Allah Most' } },
      { icon: 'star',     color: '#D4A82E', title: { ar: 'لا إلهَ إلا الله', en: 'La ilaha illallah' } },
    ],
    moral: { ar: 'عرفنا أنّ «اللهَ» هو الإلهُ الحقُّ المعبودُ وحدَه، أعظمُ الأسماءِ وإليه تُضافُ كلُّها، فمن أحبَّه وحّدَه وعبدَه ودعاه وحدَه، وقدّمَ محبّتَه على كلِّ شيء.', en: 'We learned that "Allah" is the true God, worshipped alone — the greatest name, to which all others belong. Whoever loves Him worships and calls on Him alone, and puts His love above everything.' },
    reflect: [
      { ar: 'ما الأشياءُ التي تبدؤها اليومَ بـ«بسم الله»؟', en: 'Which things will you begin with "Bismillah" today?' },
      { ar: 'كيف تُخبرُ صديقَك بمعنى «لا إلهَ إلا الله» بكلماتِك؟', en: 'How would you tell a friend the meaning of "La ilaha illallah" in your own words?' },
    ],
  },
};
