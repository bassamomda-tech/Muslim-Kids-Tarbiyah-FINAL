// data/chapters/rahman.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// المحطة الأولى: الرحمنُ الرحيم (نعرفُ اللهَ بأسمائِه فنزدادُ له حُبّاً)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب · الموسوعة القرآنية
// Adab: لا تجسيدَ لله سبحانه — مشاهدُ رمزية من الكونِ والمخلوقاتِ تدلُّ على أثرِ الاسم.
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.rahman = {
  id: 'rahman', era: 'heart', kind: 'name', icon: 'heart',
  name: { ar: 'الرحمنُ الرحيم', en: 'Ar-Rahman Ar-Rahim' },
  tag:  { ar: 'رحمتُه وسِعَت كلَّ شيء', en: 'His mercy embraces all things' },
  accent: '#2F9E6E', accent2: '#5BC79A',
  // اللمسة الأخفّ المناسبة للأصغر سنّاً: معرفة · آثارُ الاسم (قصة) · حفظ · نشاط · كنوز
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري الحبيب! 🌿 هل تعلمُ أنّ اللهَ يُحبُّك ويَرحمُك أكثرَ من كلِّ أحد؟ تعالَ نتعرّفْ على اسمِه الجميلِ «الرحمنُ الرحيم» فنُحبَّه أكثر.',
    en: 'Welcome, dear little one! 🌿 Did you know Allah loves and shows you mercy more than anyone? Come, let’s get to know His beautiful name "Ar-Rahman Ar-Rahim" and love Him even more.',
  },

  knowledge: {
    didYouKnow: {
      ar: 'جعلَ اللهُ الرحمةَ مئةَ جزء، وأنزلَ إلى الأرضِ جزءاً واحداً فقط — به <b>تَعطِفُ الأمُّ على طفلِها، وتَرحمُ الحيواناتُ صغارَها</b> — وادّخرَ <b>تسعةً وتسعينَ جزءاً</b> ليرحمَ بها عبادَه يومَ القيامة!',
      en: 'Allah made mercy into a hundred parts and sent only <b>one part</b> down to earth — by it <b>a mother loves her child and animals are tender to their young</b> — and He kept <b>ninety-nine parts</b> to show His servants on the Day of Judgement!',
    },
    who: {
      ar: '«الرَّحْمَنُ» و«الرَّحِيمُ» اسمانِ كريمانِ من أسماءِ اللهِ الحُسنى، مأخوذانِ من <b>الرَّحْمَة</b>. «الرَّحْمَنُ» واسِعُ الرحمةِ بكلِّ المخلوقات، و«الرَّحِيمُ» رحيمٌ بالمؤمنينَ رحمةً خاصّة. ونقولُهما كلَّ يومٍ في <b>«بسمِ اللهِ الرحمنِ الرحيم»</b>. رحمةُ اللهِ وسِعَت كلَّ شيء، وهو <b>أرحمُ بنا من أمَّهاتِنا</b>.',
      en: '"Ar-Rahman" and "Ar-Rahim" are two beautiful names of Allah, both from the word <b>mercy</b>. "Ar-Rahman" is vast in mercy to all creation, and "Ar-Rahim" is especially merciful to the believers. We say them every day in <b>"In the name of Allah, Ar-Rahman Ar-Rahim."</b> Allah’s mercy embraces everything — He is <b>more merciful to us than our own mothers</b>.',
    },
    facts: [
      { ar: '«الرَّحْمَنُ» اسمٌ لا يُسمَّى به إلا اللهُ وحدَه.', en: '"Ar-Rahman" is a name no one may be called but Allah alone.' },
      { ar: 'نبدأُ كلَّ عملٍ طيّبٍ بـ«بسمِ اللهِ الرحمنِ الرحيم».', en: 'We begin every good deed with "In the name of Allah, Ar-Rahman Ar-Rahim."' },
      { ar: 'رحمةُ اللهِ سبَقَت غضبَه، وهو يُحبُّ التوّابين.', en: 'Allah’s mercy precedes His anger, and He loves those who turn back to Him.' },
      { ar: 'مِن رحمتِه: الشمسُ والمطرُ والطعامُ والأمُّ والأصدقاء.', en: 'From His mercy: the sun, rain, food, mothers, and friends.' },
      { ar: '«الرَّاحِمُونَ يَرحَمُهمُ الرَّحْمَن» — مَن رَحِمَ النّاسَ رَحِمَهُ الله.', en: '"The merciful are shown mercy by Ar-Rahman" — whoever shows mercy is shown mercy.' },
    ],
    ayah: { ar: '﴿ وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ﴾', ref: { ar: 'الأعراف ١٥٦', en: 'Al-Aʿraf 156' } },
  },

  storyIntro: {
    ar: 'انظُرْ حولَك! 🌟 رحمةُ اللهِ في كلِّ مكان — في السماءِ والمطرِ والبحرِ وقلبِ أمِّك. تعالَ نكتشفُ آثارَ اسمِه «الرحمن» معاً.',
    en: 'Look around! 🌟 Allah’s mercy is everywhere — in the sky, the rain, the sea, and your mother’s heart. Come, let’s discover the signs of His name "Ar-Rahman" together.',
  },
  story: [
    { scene: 'cosmos', tag: { ar: 'في الكون', en: 'In the cosmos' },
      title: { ar: 'رحمةٌ تملأُ الكون', en: 'Mercy fills the universe' },
      text: { ar: 'خلقَ اللهُ <b>الشمسَ</b> تُدفِئُنا، و<b>الهواءَ</b> نتنفّسُه، و<b>الليلَ</b> ننامُ فيه ونرتاح. كلُّ شيءٍ حولَنا هديّةٌ من <b>الرحمنِ</b> الذي يَرعى خلقَه ولا يَنساهم لحظة.', en: 'Allah made the <b>sun</b> to warm us, the <b>air</b> to breathe, and the <b>night</b> to rest in. Everything around us is a gift from <b>Ar-Rahman</b>, who cares for His creation and never forgets them for a moment.' } },
    { scene: 'rain', tag: { ar: 'في المطر', en: 'In the rain' },
      title: { ar: 'المطرُ رحمة', en: 'Rain is a mercy' },
      text: { ar: 'يُرسلُ اللهُ <b>المطرَ</b> فتشربُ الأرضُ العطشى، ويخرجُ <b>الزرعُ والثمرُ</b>، ويفرحُ الناسُ والطيرُ والحيوان. سمّى اللهُ المطرَ <b>رحمةً</b> لأنّه يُحيي الأرضَ بعدَ موتِها.', en: 'Allah sends down the <b>rain</b>, so the thirsty earth drinks, <b>plants and fruit</b> grow, and people, birds, and animals rejoice. Allah called rain a <b>mercy</b> because it brings the earth to life again.' } },
    { scene: 'cradle', tag: { ar: 'في حياتنا', en: 'In our life' },
      title: { ar: 'أرحمُ من الأمّ', en: 'More merciful than a mother' },
      text: { ar: 'رأى النبيُّ ﷺ أُمّاً تبحثُ عن طفلِها، فلمّا وجدَتْه ضمَّتْه إلى صدرِها بحنان. فقال ﷺ: <b>«للهُ أرحمُ بعبادِه من هذه بولدِها»</b>. فما أعظمَ رحمةَ اللهِ بنا!', en: 'The Prophet ﷺ saw a mother searching for her child; when she found him she hugged him tenderly. He ﷺ said: <b>"Allah is more merciful to His servants than this mother is to her child."</b> How great is Allah’s mercy to us!' } },
    { scene: 'fish', tag: { ar: 'في قصص الأنبياء', en: 'In the prophets’ stories' },
      title: { ar: 'رحمةٌ تُنجي', en: 'A mercy that rescues' },
      text: { ar: 'كان يونسُ عليه السلام في <b>ظُلماتِ</b> بطنِ الحوتِ والبحر، فنادى ربَّه: «لا إلهَ إلا أنتَ سُبحانَكَ إنّي كنتُ من الظالمين». فرَحِمَه <b>الرحمنُ</b> وأنجاه. رحمةُ اللهِ تَسَعُ كلَّ مَن دعاه.', en: 'Yunus (peace be upon him) was in the <b>darkness</b> of the whale and the sea, so he called his Lord: "There is no god but You; glory be to You; I have wronged myself." So <b>Ar-Rahman</b> had mercy and saved him. Allah’s mercy reaches everyone who calls on Him.' } },
    { scene: 'spring', tag: { ar: 'في أفعالنا', en: 'In our deeds' },
      title: { ar: 'نَرحَمُ فيَرحَمُنا', en: 'We show mercy, so He shows us mercy' },
      text: { ar: 'مرَّ رجلٌ بكلبٍ <b>عطشانَ</b> يلهثُ، فنزلَ بئراً وملأَ خُفَّه ماءً وسقاه. فشكرَ اللهُ له و<b>غفرَ له</b>. مَن رَحِمَ الخلقَ — حتى الحيوان — رَحِمَه <b>الرحمن</b>.', en: 'A man passed a <b>thirsty</b> dog panting, so he went down a well, filled his shoe with water, and gave it to drink. Allah thanked him and <b>forgave him</b>. Whoever shows mercy to creation — even an animal — Ar-Rahman shows mercy to him.' } },
  ],
  storyChoice: {
    q: { ar: 'كيف نَشكُرُ اللهَ الرحمنَ على رحمتِه الواسعة؟', en: 'How do we thank Allah, Ar-Rahman, for His vast mercy?' },
    opts: [
      { t: { ar: 'نَرحمُ الناسَ والحيوانَ ونَحمدُ الله', en: 'We show mercy to people and animals, and praise Allah' }, c: true,
        exp: { ar: 'نعم! «الرَّاحمونَ يرحمُهمُ الرحمن». كُنْ رحيماً تَنَلْ رحمةَ الله.', en: 'Yes! "The merciful are shown mercy by Ar-Rahman." Be merciful and you will receive Allah’s mercy.' } },
      { t: { ar: 'نَنسى نِعَمَه ولا نَشكُره', en: 'We forget His blessings and do not thank Him' }, c: false,
        exp: { ar: 'لا، بل نَحمدُ اللهَ دائماً على رحمتِه ونِعَمِه الكثيرة.', en: 'No — we always praise Allah for His mercy and His many blessings.' } },
      { t: { ar: 'نُؤذي الصغارَ والحيوان', en: 'We hurt little ones and animals' }, c: false,
        exp: { ar: 'لا، فاللهُ يُحبُّ الرُّحماء، وأذيّةُ الخلقِ تُغضبُه سبحانه.', en: 'No — Allah loves the merciful, and harming creation angers Him.' } },
    ],
  },

  memorize: {
    ayah: { ar: '﴿ وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ﴾', ref: { ar: 'الأعراف ١٥٦', en: 'Al-Aʿraf 156' } },
    dua:  { ar: 'اللّهُمَّ ارْحَمْني برَحْمَتِكَ الواسِعَةِ يا أَرْحَمَ الرَّاحِمِين', ref: { ar: 'من الدعاء المأثور', en: 'A prophetic supplication' } },
    pledge: {
      title: { ar: 'عهدُ الرحمة', en: 'The Mercy Pledge' },
      lines: [
        { ar: 'أبدأُ كلَّ عملٍ بـ«بسمِ اللهِ الرحمنِ الرحيم».', en: 'I begin every deed with "In the name of Allah, Ar-Rahman Ar-Rahim."' },
        { ar: 'أرحمُ إخوتي وأصدقائي والصغار.', en: 'I show mercy to my siblings, my friends, and little ones.' },
        { ar: 'أرفُقُ بالحيوانِ ولا أُؤذيه.', en: 'I am gentle with animals and never harm them.' },
        { ar: 'أطلبُ رحمةَ اللهِ بالدعاءِ كلَّ يوم.', en: 'I ask for Allah’s mercy in du‘a every day.' },
      ],
    },
  },

  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ماذا يعني اسمُ اللهِ «الرحمن»؟', en: 'What does Allah’s name "Ar-Rahman" mean?' },
          options: [ { ar: 'واسِعُ الرحمةِ بكلِّ المخلوقات', en: 'Vast in mercy to all creation' }, { ar: 'أنّه يَغضبُ دائماً', en: 'That He is always angry' }, { ar: 'لا أحدَ يعلم', en: 'No one knows' } ], answer: 0 },
        { q: { ar: 'بماذا نبدأُ أعمالَنا الطيّبة؟', en: 'How do we begin our good deeds?' },
          options: [ { ar: '«بسمِ اللهِ الرحمنِ الرحيم»', en: '"In the name of Allah, Ar-Rahman Ar-Rahim"' }, { ar: 'بالصُّراخ', en: 'By shouting' }, { ar: 'بلا شيء', en: 'With nothing' } ], answer: 0 },
        { q: { ar: 'أكمِلْ: «الرَّاحمونَ يَرحمُهمُ ...»', en: 'Complete: "The merciful are shown mercy by ..."' },
          options: [ { ar: 'الرَّحمن', en: 'Ar-Rahman' }, { ar: 'الناسُ فقط', en: 'Only people' }, { ar: 'لا أحد', en: 'No one' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ كلَّ شيءٍ بمعناه', en: 'Match each to its meaning' },
      pairs: [
        { a: { ar: 'الرحمن', en: 'Ar-Rahman' }, b: { ar: 'رحمةٌ لكلِّ الخلق', en: 'Mercy for all creation' } },
        { a: { ar: 'المطر', en: 'Rain' }, b: { ar: 'رحمةٌ تُحيي الأرض', en: 'A mercy that revives the earth' } },
        { a: { ar: 'الأمّ', en: 'A mother' }, b: { ar: 'من رحمةِ اللهِ بنا', en: 'From Allah’s mercy to us' } },
        { a: { ar: 'الدعاء', en: 'Du‘a' }, b: { ar: 'نَطلبُ به الرحمة', en: 'How we ask for mercy' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'رحمةُ اللهِ وسِعَت كلَّ شيء.', en: 'Allah’s mercy embraces everything.' }, t: true },
        { statement: { ar: 'يجوزُ أن نُسمّيَ غيرَ اللهِ بـ«الرحمن».', en: 'It is allowed to call someone other than Allah "Ar-Rahman."' }, t: false },
        { statement: { ar: 'مَن رَحِمَ الناسَ رَحِمَهُ الله.', en: 'Whoever shows mercy to people, Allah shows mercy to him.' }, t: true },
        { statement: { ar: 'اللهُ لا يُحبُّ الذينَ يَتوبونَ إليه.', en: 'Allah does not love those who turn back to Him.' }, t: false },
      ] },
  ],

  treasures: {
    medal: { ar: 'وِسامُ الرحمة', en: 'Medal of Mercy' },
    // الخلطةُ السحرية — كيف نُطبّقُ اسمَ «الرحمن» عمليّاً في حياتِنا كلَّ يوم
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الرحمن» اخلِطْ هذه المقاديرَ في يومِك… وانظُرْ ماذا يحدث! 🪄', en: 'To live the name "Ar-Rahman", mix these into your day… and watch what happens! 🪄' },
      steps: [
        { icon: '🤝', ar: 'مقدارٌ من الرحمةِ بإخوتي وأصدقائي، ولُطفٌ مع الصغار.', en: 'A scoop of mercy to my siblings and friends, and gentleness with little ones.' },
        { icon: '🐦', ar: 'رفقٌ بالحيوان: أُطعِمُه وأسقيه ولا أُؤذيه.', en: 'Kindness to animals: I feed them, give them water, and never hurt them.' },
        { icon: '🕊️', ar: 'رشّةُ مسامحةٍ لمن أخطأَ في حقّي، كما يعفو اللهُ عنّي.', en: 'A sprinkle of forgiveness for whoever wrongs me, as Allah pardons me.' },
        { icon: '🌸', ar: 'أبدأُ كلَّ عملٍ بـ«بسمِ اللهِ الرحمنِ الرحيم».', en: 'I begin every deed with "In the name of Allah, Ar-Rahman Ar-Rahim."' },
        { icon: '🤲', ar: 'دعاءٌ كلَّ يوم: «يا رَحمنُ ارحَمني برحمتِك».', en: 'A daily du‘a: "O Ar-Rahman, have mercy on me by Your mercy."' },
      ],
      result: { ar: 'قلبٌ رحيمٌ يُحبُّه اللهُ ويرحمُه، فينتشرُ الخيرُ من حولِك! 💚', en: 'A merciful heart that Allah loves and shows mercy to — and goodness spreads all around you! 💚' },
    },
    stickers: [
      { icon: 'heart', color: '#2F9E6E', title: { ar: 'قلبٌ رحيم', en: 'A Merciful Heart' } },
      { icon: 'dove',  color: '#3FA98A', title: { ar: 'رفيقُ الحيوان', en: 'Friend of Animals' } },
      { icon: 'leaf',  color: '#5BA85F', title: { ar: 'بَذرةُ الخير', en: 'Seed of Good' } },
      { icon: 'star',  color: '#2E8C66', title: { ar: 'نجمةُ الرحمة', en: 'Star of Mercy' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «الرحمنَ الرحيم» رحمتُه وسِعَت كلَّ شيء، فمن أحبَّه رَحِمَ خلقَه وطلبَ رحمتَه، وبدأَ كلَّ أمرٍ باسمِه.', en: 'We learned that Allah "Ar-Rahman Ar-Rahim" has mercy that embraces all things — whoever loves Him shows mercy to His creation, seeks His mercy, and begins every matter in His name.' },
    reflect: [
      { ar: 'اذكُرْ ثلاثَ نِعَمٍ من رحمةِ اللهِ عليك اليوم.', en: 'Name three blessings from Allah’s mercy upon you today.' },
      { ar: 'كيف تكونُ رحيماً مع أخيكَ الصغيرِ أو مع حيوانٍ تراه؟', en: 'How can you be merciful to your little sibling or to an animal you see?' },
    ],
  },
};
