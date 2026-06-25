// data/chapters/alim.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// العليم (الذي يعلمُ السرَّ وما هو أخفى)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب · الموسوعة القرآنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.alim = {
  id: 'alim', era: 'heart', kind: 'name', icon: 'light',
  name: { ar: 'العليم', en: 'The All-Knowing' },
  tag:  { ar: 'يَعلمُ السرَّ وما هو أخفى', en: 'He knows the secret and what is more hidden' },
  accent: '#7A4DA8', accent2: '#9A72CF',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! ✨ هل تعلمُ أنّ اللهَ يعلمُ كلَّ شيء — حتى ما يدورُ في قلبِك الآن؟ تعالَ نتعرّفْ على «العليم» فنُراقبَه ونُحبَّه.',
    en: 'Welcome, little one! ✨ Did you know Allah knows everything — even what is in your heart right now? Come, let’s meet "Al-‘Alim", be watchful, and love Him.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'اللهُ يعلمُ كلَّ <b>ورقةٍ تسقطُ</b> من شجرة، وكلَّ <b>نملةٍ تمشي في الظلام</b>، وعددَ النجوم، وما تُخفيه القلوب! قال تعالى: <b>﴿وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ﴾</b>.',
      en: 'Allah knows every <b>leaf that falls</b> from a tree, every <b>ant walking in the dark</b>, the number of stars, and what hearts conceal! He said: <b>"With Him are the keys of the unseen; none knows them but He."</b>',
    },
    who: {
      ar: '«العليمُ» واسعُ العلم، يعلمُ <b>كلَّ شيء</b>: الماضيَ والحاضرَ والمستقبل، ما نراه وما لا نراه، ما نقولُه <b>وما نُخفيه في قلوبِنا</b>. لا يَخفى عليه شيءٌ في الأرضِ ولا في السماء. علمُه بلا حدود، ونحنُ لا نعلمُ إلا ما علّمَنا اللهُ إيّاه. فمن عرفَ أنّ اللهَ يراه ويعلمُ سرَّه <b>استحى أن يَعصيَه</b> وأخلصَ له.',
      en: '"Al-‘Alim" is vast in knowledge; He knows <b>everything</b>: past, present, and future, what we see and don’t see, what we say <b>and what we hide in our hearts</b>. Nothing in earth or heaven is hidden from Him. His knowledge is limitless, and we know only what He taught us. Whoever knows Allah sees him and knows his secret <b>feels shy to disobey Him</b> and is sincere to Him.',
    },
    facts: [
      { ar: 'اللهُ يعلمُ السرَّ والعلانية، والماضيَ والمستقبل.', en: 'Allah knows the hidden and the open, the past and the future.' },
      { ar: 'عندَه مفاتحُ الغيبِ لا يعلمُها إلا هو.', en: 'With Him are the keys of the unseen, known to none but Him.' },
      { ar: 'يعلمُ ما في قلبِك من نيّةٍ وشعور.', en: 'He knows the intentions and feelings in your heart.' },
      { ar: 'نحنُ لا نعلمُ إلا ما علّمَنا الله.', en: 'We know only what Allah has taught us.' },
      { ar: 'مَن أيقنَ أنّ اللهَ يعلمُ، استحى أن يُذنب.', en: 'Whoever is certain Allah knows feels shy to sin.' },
    ],
    ayah: { ar: '﴿ إِنَّ اللَّهَ عَلِيمٌ بِذَاتِ الصُّدُورِ ﴾', ref: { ar: 'لقمان ٢٣', en: 'Luqman 23' } },
  },
  storyIntro: {
    ar: 'تعالَ نكتشفْ كيف يعلمُ اللهُ كلَّ شيء ✨ — في السماءِ والظلامِ والقلوبِ والبحار!',
    en: 'Come, let’s discover how Allah knows everything ✨ — in the sky, the dark, hearts, and the seas!',
  },
  story: [
    { scene: 'night', tag: { ar: 'في السماء', en: 'In the sky' },
      title: { ar: 'يعلمُ عددَ النجوم', en: 'He knows the number of stars' },
      text: { ar: 'انظُرْ إلى <b>النجومِ</b> في الليل — مَن يقدرُ على عدِّها؟ اللهُ يعلمُ عددَها وأسماءَها ومواضعَها كلَّها، ويعلمُ كلَّ ذرّةٍ في الكونِ الواسع. سبحانَ <b>العليم</b>!', en: 'Look at the <b>stars</b> at night — who can count them? Allah knows their number, names, and places, and knows every atom in the vast universe. Glory to <b>Al-‘Alim</b>!' } },
    { scene: 'cave', tag: { ar: 'في الخفاء', en: 'In the hidden' },
      title: { ar: 'يعلمُ ما في الظلام', en: 'He knows what is in the dark' },
      text: { ar: 'النملةُ السوداءُ تمشي على صخرةٍ <b>سوداءَ</b> في ليلةٍ <b>مظلمة</b> — واللهُ يراها ويعلمُ خطواتِها! ويعلمُ الجنينَ في بطنِ أمِّه. لا يخفى عليه شيءٌ مهما صَغُرَ أو خَفِيَ.', en: 'A black ant walks on a <b>black rock</b> on a <b>dark night</b> — and Allah sees it and knows its steps! He knows the baby in its mother’s womb. Nothing is hidden from Him, however small or concealed.' } },
    { scene: 'pen', tag: { ar: 'في العلم', en: 'In knowledge' },
      title: { ar: 'علّمَ الإنسانَ بالقلم', en: 'He taught the human with the pen' },
      text: { ar: 'أوّلُ ما أُنزِلَ: <b>«اقرأْ»</b>! اللهُ هو الذي <b>علّمَ الإنسانَ</b> ما لم يَعلم، علّمَه القراءةَ والكتابةَ بالقلم. كلُّ ما نتعلّمُه هو هديّةٌ من العليم، فلنطلبْ منه العلمَ النافع.', en: 'The first revelation was <b>"Read!"</b> Allah is the One who <b>taught the human</b> what he did not know — reading and writing with the pen. All we learn is a gift from Al-‘Alim, so let’s ask Him for beneficial knowledge.' } },
    { scene: 'mihrab', tag: { ar: 'في القلوب', en: 'In the hearts' },
      title: { ar: 'يعلمُ ما تُخفي القلوب', en: 'He knows what hearts hide' },
      text: { ar: 'دعا زكريا عليه السلام ربَّه <b>سِرّاً</b> ونداءً خفيّاً، فسمعَ اللهُ وعلمَ ما في قلبِه فوهبَه يحيى. اللهُ يعلمُ نيّتَك وشعورَك قبلَ أن تنطق. فأخلِصْ قلبَك له.', en: 'Zakariyya called his Lord <b>secretly</b>, a hidden call, and Allah heard and knew what was in his heart and granted him Yahya. Allah knows your intention and feeling before you speak. So make your heart sincere to Him.' } },
  ],
  storyChoice: {
    q: { ar: 'إذا كان اللهُ يعلمُ كلَّ شيء، فكيف نتصرّف؟', en: 'If Allah knows everything, how should we act?' },
    opts: [
      { t: { ar: 'نُراقبُه فلا نكذبُ ولا نُؤذي حتى في الخفاء', en: 'We are watchful — no lying or harm, even in secret' }, c: true,
        exp: { ar: 'نعم! العليمُ يراك ويعلمُ سرَّك، فأحسِنْ في السرِّ كما في العلن.', en: 'Yes! Al-‘Alim sees you and knows your secret, so do good in private as in public.' } },
      { t: { ar: 'نُخطئُ ما دامَ لا يرانا الناس', en: 'We misbehave as long as people don’t see' }, c: false,
        exp: { ar: 'لا، فاللهُ يراك دائماً ويعلمُ كلَّ شيء، فاستحِ منه.', en: 'No — Allah always sees you and knows everything, so feel shy before Him.' } },
      { t: { ar: 'نُخفي نيّاتِنا عن الله', en: 'We hide our intentions from Allah' }, c: false,
        exp: { ar: 'لا يمكن! اللهُ عليمٌ بذاتِ الصدور، يعلمُ ما في القلوب.', en: 'Impossible! Allah knows what is in the hearts.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ إِنَّ اللَّهَ عَلِيمٌ بِذَاتِ الصُّدُورِ ﴾', ref: { ar: 'لقمان ٢٣', en: 'Luqman 23' } },
    dua:  { ar: 'اللّهُمَّ يا عليمُ علّمني ما يَنفعني وانفعني بما علّمتني', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ المراقبة', en: 'The Watchfulness Pledge' },
      lines: [
        { ar: 'أعلمُ أنّ اللهَ يراني ويعلمُ سرّي.', en: 'I know that Allah sees me and knows my secret.' },
        { ar: 'لا أكذبُ ولا أغُشُّ حتى لو لم يرَني أحد.', en: 'I don’t lie or cheat even if no one sees me.' },
        { ar: 'أطلبُ من اللهِ العلمَ النافعَ وأجتهدُ فيه.', en: 'I ask Allah for beneficial knowledge and work for it.' },
        { ar: 'أُخلِصُ نيّتي لله، فهو يعلمُ ما في قلبي.', en: 'I make my intention sincere to Allah, for He knows my heart.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ماذا يعلمُ اللهُ «العليم»؟', en: 'What does Allah "Al-‘Alim" know?' },
          options: [ { ar: 'كلَّ شيءٍ سرِّه وعلانيته', en: 'Everything, hidden and open' }, { ar: 'ما نراه فقط', en: 'Only what we see' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
        { q: { ar: 'مَن علّمَ الإنسانَ ما لم يَعلم؟', en: 'Who taught the human what he did not know?' },
          options: [ { ar: 'اللهُ بالقلم', en: 'Allah, with the pen' }, { ar: 'لا أحد', en: 'No one' }, { ar: 'الإنسانُ نفسُه', en: 'The human himself' } ], answer: 0 },
        { q: { ar: 'إذا علِمتَ أنّ اللهَ يراك فماذا تفعل؟', en: 'If you know Allah sees you, what do you do?' },
          options: [ { ar: 'أُحسِنُ في السرِّ والعلن', en: 'I do good in private and public' }, { ar: 'أُخطئُ سرّاً', en: 'I misbehave secretly' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'النجوم', en: 'The stars' }, b: { ar: 'يعلمُ عددَها', en: 'He knows their number' } },
        { a: { ar: 'النملةُ في الظلام', en: 'The ant in the dark' }, b: { ar: 'يعلمُ خطواتِها', en: 'He knows its steps' } },
        { a: { ar: 'قلبُك', en: 'Your heart' }, b: { ar: 'يعلمُ ما تُخفي', en: 'He knows what it hides' } },
        { a: { ar: 'القلم', en: 'The pen' }, b: { ar: 'علّمَ به الإنسان', en: 'He taught with it' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'اللهُ يعلمُ ما في القلوب.', en: 'Allah knows what is in the hearts.' }, t: true },
        { statement: { ar: 'يمكنُ أن نُخفيَ شيئاً عن الله.', en: 'We can hide something from Allah.' }, t: false },
        { statement: { ar: 'كلُّ علمٍ نتعلّمُه هديّةٌ من الله.', en: 'Every knowledge we learn is a gift from Allah.' }, t: true },
        { statement: { ar: 'اللهُ يعلمُ الماضيَ فقط لا المستقبل.', en: 'Allah knows only the past, not the future.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ العلم', en: 'Medal of Knowledge' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «العليم» اخلِطْ هذه في يومِك 🪄', en: 'To live the name "Al-‘Alim", mix these into your day 🪄' },
      steps: [
        { icon: '👀', ar: 'أتذكّرُ أنّ اللهَ يراني فأُحسِنُ حتى في الخفاء.', en: 'I remember Allah sees me, so I do good even in secret.' },
        { icon: '🤥', ar: 'لا أكذبُ ولا أغُشُّ، فاللهُ يعلمُ الحقيقة.', en: 'I don’t lie or cheat, for Allah knows the truth.' },
        { icon: '📚', ar: 'أتعلّمُ كلَّ يومٍ شيئاً نافعاً وأطلبُه من الله.', en: 'I learn something useful each day and ask Allah for it.' },
        { icon: '💗', ar: 'أُخلِصُ نيّتي، فالعليمُ يعلمُ ما في قلبي.', en: 'I make my intention sincere — Al-‘Alim knows my heart.' },
      ],
      result: { ar: 'قلبٌ يُراقبُ اللهَ في السرِّ والعلن، وعقلٌ يحبُّ العلمَ النافع! 💜', en: 'A heart watchful of Allah in private and public, and a mind that loves beneficial knowledge! 💜' },
    },
    stickers: [
      { icon: 'light',   color: '#7A4DA8', title: { ar: 'نورُ العلم', en: 'Light of Knowledge' } },
      { icon: 'pen',     color: '#8E5FBE', title: { ar: 'قلمُ التعلّم', en: 'Pen of Learning' } },
      { icon: 'star',    color: '#6A3F98', title: { ar: 'نجمةُ المعرفة', en: 'Star of Knowing' } },
      { icon: 'gem',     color: '#5E3A86', title: { ar: 'جوهرةُ الإخلاص', en: 'Gem of Sincerity' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «العليمَ» يعلمُ كلَّ شيءٍ حتى أسرارَ القلوب، فمن أحبَّه راقبَه في السرِّ والعلن، وطلبَ منه العلمَ، وأخلصَ له نيّتَه.', en: 'We learned that Allah "Al-‘Alim" knows everything, even the secrets of hearts — whoever loves Him is watchful in private and public, asks Him for knowledge, and is sincere to Him.' },
    reflect: [
      { ar: 'اللهُ يعلمُ سرَّك — هل في قلبِك ما تحبُّ أن تُصلحَه؟', en: 'Allah knows your secret — is there something in your heart you’d like to fix?' },
      { ar: 'ما العلمُ النافعُ الذي تحبُّ أن تتعلّمَه؟', en: 'What beneficial knowledge would you love to learn?' },
    ],
  },
};
