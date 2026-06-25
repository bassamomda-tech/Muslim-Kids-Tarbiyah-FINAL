// data/chapters/wala_bara.js — ركن القلب السليم · الحبُّ في الله
// المحطة الثالثة: الولاءُ والبراء (محبّةُ المؤمنين، والبراءةُ من الشرك، مع العدلِ والإحسانِ للجميع)
// منهج أهل السنّة: الولاءُ للهِ وللمؤمنين، والبراءةُ من الكفرِ والشرك (لا ظلمَ ولا أذى) —
// مع برِّ غيرِ المسلمِ المسالمِ والإقساطِ إليه (الممتحنة ٨)، وبرِّ الأمِّ ولو كانت مشركة.
// Sources: القرآن (الممتحنة · التوبة) · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب.
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.wala_bara = {
  id: 'wala_bara', era: 'heart', kind: 'lesson', icon: 'shield',
  name: { ar: 'الولاءُ والبراء', en: 'Loyalty & Disavowal' },
  tag:  { ar: 'أُحبُّ للهِ وأَعدِلُ وأُحسِنُ للجميع', en: 'Love for Allah; be just & kind to all' },
  accent: '#5A7BB8', accent2: '#7E9BD0',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  knowledgeTitle: { ar: 'الولاءُ والبراء', en: 'Loyalty & Disavowal' },
  storyTitle: { ar: 'حكاياتُ الولاءِ والبراء', en: 'Tales of Loyalty & Disavowal' },
  greeting: {
    ar: 'مرحباً يا صغيري! 🛡️ قلبُ المؤمنِ يُحبُّ اللهَ وأولياءَه، ويتبرّأُ من الشركِ والباطل — ومع ذلك يَعدِلُ ويُحسِنُ إلى كلِّ الناس. تعالَ نفهمْ هذا الميزانَ الجميل.',
    en: 'Welcome, little one! 🛡️ A believer’s heart loves Allah and His friends, and disavows shirk and falsehood — yet is just and kind to all people. Come, let’s understand this beautiful balance.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'الولاءُ والبراءُ ميزانٌ جميل: <b>أُحبُّ اللهَ والمؤمنين (ولاء)، وأتبرّأُ من الشركِ وعبادةِ غيرِ الله (براء)</b> — لكنّ هذا <b>لا يعني أذيّةَ أحد</b>! بل أمرَنا اللهُ أن <b>نَبَرَّ ونَعدِلَ</b> مع كلِّ من لم يُحاربْنا، حتى لو كان من غيرِ المسلمين.',
      en: 'Loyalty and disavowal is a beautiful balance: <b>I love Allah and the believers (loyalty), and disavow shirk and worship of other than Allah (disavowal)</b> — but this <b>never means harming anyone</b>! Rather, Allah commanded us to <b>be kind and just</b> to everyone who does not fight us, even non-Muslims.',
    },
    who: {
      ar: '«الولاءُ» محبّةُ اللهِ ورسولِه والمؤمنين، ونُصرتُهم. و«البراءُ» البُعدُ عن <b>الشركِ والكفرِ وعبادةِ غيرِ الله</b>، وعدمُ محبّةِ الباطلِ ولا اتّخاذِ أعداءِ الدينِ أولياءَ نتَّبِعُهم. ولا نُقدِّمُ من حاربَ الدينَ على المؤمنينَ ولو كانوا أهلَنا في النَّصرة. <b>لكنَّ هذا قلبٌ وعقيدةٌ، لا سوءَ خُلُق</b>: فاللهُ يأمرُنا بالعدلِ والإحسانِ إلى المسالمين، وببرِّ الوالدينِ ولو كانا غيرَ مسلمَين، وحُسنِ الجوارِ والصدقِ مع الجميع. فنحنُ نُبغِضُ الشركَ والظلم، لا نَظلِمُ الناس.',
      en: '"Loyalty" is love of Allah, His Messenger, and the believers, and supporting them. "Disavowal" is distance from <b>shirk, disbelief, and worship of other than Allah</b>, not loving falsehood nor taking the enemies of the faith as guides we follow. We don’t prefer those who fight the religion over the believers in support, even if they’re our relatives. <b>But this is a matter of the heart and creed, not bad manners</b>: Allah commands justice and kindness to peaceful people, honoring even non-Muslim parents, good neighborliness, and honesty with all. We dislike shirk and injustice — we do not wrong people.',
    },
    facts: [
      { ar: 'الولاء: محبّةُ اللهِ والمؤمنين ونُصرتُهم.', en: 'Loyalty: loving Allah and the believers and supporting them.' },
      { ar: 'البراء: البُعدُ عن الشركِ وعبادةِ غيرِ الله.', en: 'Disavowal: distance from shirk and worship of other than Allah.' },
      { ar: 'لا نُقدِّمُ أعداءَ الدينِ على المؤمنينَ ولو كانوا أهلَنا.', en: 'We don’t prefer the faith’s enemies over believers, even relatives.' },
      { ar: 'نَعدِلُ ونُحسِنُ إلى كلِّ من لم يُحاربْنا.', en: 'We are just and kind to everyone who does not fight us.' },
      { ar: 'نَبَرُّ الوالدينِ ولو كانا غيرَ مسلمَين.', en: 'We honor our parents even if they are non-Muslim.' },
    ],
    ayah: { ar: '﴿ لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ … أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ﴾', ref: { ar: 'الممتحنة ٨', en: 'Al-Mumtahanah 8' } },
  },
  storyIntro: {
    ar: 'تعالَ نفهمِ الميزانَ الجميل 🛡️ — براءةُ إبراهيمَ من الباطل، وبِرُّ أسماءَ بأمِّها!',
    en: 'Come, let’s understand the beautiful balance 🛡️ — Ibrahim’s disavowal of falsehood, and Asma’s kindness to her mother!',
  },
  story: [
    { scene: 'idols', tag: { ar: 'البراءُ من الباطل', en: 'Disavowal of falsehood' },
      title: { ar: 'إبراهيمُ وقومُه', en: 'Ibrahim and his people' },
      text: { ar: 'قال إبراهيمُ عليه السلام لقومِه الذين يعبدونَ الأصنام: <b>«إنّا بُرَآءُ منكم وممّا تعبدونَ من دونِ الله»</b>. تبرّأَ من <b>عبادةِ الأصنامِ والشرك</b>، لا من حُبِّ الخيرِ للناس — فقد ظلَّ يدعوهم إلى اللهِ برِفق! نتبرّأُ من <b>الباطلِ</b>، ونرجو الهدايةَ لكلِّ أحد.', en: 'Ibrahim (peace be upon him) said to his idol-worshipping people: <b>"We disavow you and what you worship besides Allah."</b> He disavowed <b>idol-worship and shirk</b>, not wishing good for people — for he kept calling them to Allah gently! We disavow <b>falsehood</b>, while hoping for guidance for everyone.' } },
    { scene: 'madinah', tag: { ar: 'الإيمانُ أوّلاً', en: 'Faith comes first' },
      title: { ar: 'نُحبُّ في اللهِ أوّلاً', en: 'We love for Allah first' },
      text: { ar: 'بعضُ الصحابةِ تركوا بلادَهم وأهلَهم لأجلِ إيمانِهم. علّمَنا اللهُ ألّا نتّخِذَ من <b>اختارَ الكفرَ والعداءَ للدينِ</b> وليّاً نتّبِعُه ونُقدِّمُه على المؤمنين، <b>ولو كان أباً أو أخاً</b>. فولاؤنا في الدينِ للهِ وأوليائِه. لكنّ هذا في <b>القلبِ والنُّصرة</b>، أمّا المعاملةُ فبالحُسنى.', en: 'Some Companions left their homes and families for their faith. Allah taught us not to take whoever <b>chose disbelief and hostility to the religion</b> as a guide we follow and prefer over the believers, <b>even a father or brother</b>. Our loyalty in religion is to Allah and His friends. But this is in the <b>heart and support</b>; as for treatment, it is with kindness.' } },
    { scene: 'cradle', tag: { ar: 'العدلُ والإحسان', en: 'Justice & kindness' },
      title: { ar: 'أسماءُ وأمُّها', en: 'Asma and her mother' },
      text: { ar: 'جاءت أسماءُ بنتُ أبي بكرٍ إلى النبيِّ ﷺ تسأل: أمّي <b>ليست مسلمةً</b> وجاءتني، أفأَصِلُها؟ فقال ﷺ: <b>«نعم، صِلي أمَّك»</b>! فبِرُّ الأمِّ والإحسانُ إليها واجبٌ ولو لم تكن مسلمة. هكذا الإسلام: عقيدةٌ ثابتة، وقلبٌ رحيمٌ يَبَرُّ ويَعدِل.', en: 'Asma bint Abi Bakr came to the Prophet ﷺ asking: my mother is <b>not a Muslim</b> and she came to me; shall I keep ties with her? He ﷺ said: <b>"Yes, keep good ties with your mother"</b>! Honoring and being kind to one’s mother is a duty even if she is not Muslim. That is Islam: a firm creed, and a merciful heart that is kind and just.' } },
    { scene: 'mosque', tag: { ar: 'الميزانُ الجميل', en: 'The beautiful balance' },
      title: { ar: 'قلبٌ ثابتٌ وخُلُقٌ جميل', en: 'A firm heart and beautiful character' },
      text: { ar: 'فالمؤمنُ يُحبُّ <b>اللهَ والمؤمنين</b>، ويتبرّأُ من <b>الشركِ والظلم</b>، لكنّه <b>صادقٌ مع الجميع، عادلٌ، رحيمٌ، حسنُ الجوار</b>، لا يَكذِبُ ولا يَظلِمُ ولا يُؤذي أحداً. أحبَّ الحقَّ، وادعُ إليه بالحِكمةِ والكلمةِ الطيّبة، وعامِلِ الناسَ بأجملِ خُلُق. هذا هو ميزانُ الولاءِ والبراءِ الصحيح.', en: 'So the believer loves <b>Allah and the believers</b>, and disavows <b>shirk and injustice</b>, yet is <b>honest with everyone, just, merciful, a good neighbor</b>, never lying, wronging, or harming anyone. Love the truth, call to it with wisdom and kind words, and treat people with the finest character. This is the correct balance of loyalty and disavowal.' } },
  ],
  storyChoice: {
    q: { ar: 'كيف نُطبِّقُ الولاءَ والبراءَ بالميزانِ الصحيح؟', en: 'How do we apply loyalty and disavowal with the correct balance?' },
    opts: [
      { t: { ar: 'أُحبُّ اللهَ والمؤمنين، وأتبرّأُ من الشرك، وأَعدِلُ وأُحسِنُ لكلِّ الناس', en: 'I love Allah and believers, disavow shirk, and am just & kind to all people' }, c: true,
        exp: { ar: 'نعم! هذا منهجُ الإسلام: عقيدةٌ ثابتةٌ وقلبٌ رحيمٌ يَبَرُّ ويَعدِل.', en: 'Yes! This is Islam’s way: a firm creed and a merciful heart that is kind and just.' } },
      { t: { ar: 'أُؤذي غيرَ المسلمينَ وأظلِمُهم', en: 'I harm and wrong non-Muslims' }, c: false,
        exp: { ar: 'لا! اللهُ نهى عن الظلم وأمرَ بالعدلِ والإحسانِ للمسالمين.', en: 'No! Allah forbade injustice and commanded justice and kindness to peaceful people.' } },
      { t: { ar: 'أُقدِّمُ من حاربَ الدينَ على المؤمنينَ في الولاء', en: 'I prefer the faith’s enemies over believers in loyalty' }, c: false,
        exp: { ar: 'لا، فولاؤنا في الدينِ للهِ وأوليائِه — مع حُسنِ الخُلُقِ للجميع.', en: 'No — our loyalty in religion is to Allah and His friends — with good character to all.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ لَّا يَنْهَاكُمُ اللَّهُ … أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ ﴾', ref: { ar: 'الممتحنة ٨', en: 'Al-Mumtahanah 8' } },
    hadiths: [
      { ar: '«أوثَقُ عُرى الإيمانِ: الموالاةُ في اللهِ، والمعاداةُ في اللهِ، والحبُّ في اللهِ، والبُغضُ في الله»', ref: { ar: 'رواه الطبراني', en: 'At-Tabarani' } },
      { ar: 'قال ﷺ لأسماءَ في أمِّها المشركة: «نعم، صِلي أمَّكِ»', ref: { ar: 'متفق عليه', en: 'Bukhari & Muslim' } },
    ],
    dua:  { ar: 'اللّهُمَّ ثبِّتْ قلبي على دينِك، وارزُقني حُبَّ أوليائِك، وحُسنَ الخُلُقِ مع خلقِك', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ الولاءِ والبراء', en: 'The Loyalty & Disavowal Pledge' },
      lines: [
        { ar: 'أُحبُّ اللهَ والمؤمنينَ وأنصُرُهم.', en: 'I love Allah and the believers and support them.' },
        { ar: 'أتبرّأُ من الشركِ وعبادةِ غيرِ الله.', en: 'I disavow shirk and worship of other than Allah.' },
        { ar: 'أَعدِلُ وأُحسِنُ وأَصدُقُ مع كلِّ الناس.', en: 'I am just, kind, and honest with all people.' },
        { ar: 'أَبَرُّ والديَّ وأُحسِنُ لجاري مهما كان.', en: 'I honor my parents and am kind to my neighbor, whoever they are.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ممّ نتبرّأُ في «البراء»؟', en: 'What do we disavow in "disavowal"?' },
          options: [ { ar: 'من الشركِ وعبادةِ غيرِ الله', en: 'From shirk and worship of other than Allah' }, { ar: 'من كلِّ الناس', en: 'From all people' }, { ar: 'من العدل', en: 'From justice' } ], answer: 0 },
        { q: { ar: 'ماذا قال النبيُّ ﷺ لأسماءَ في أمِّها غيرِ المسلمة؟', en: 'What did the Prophet ﷺ tell Asma about her non-Muslim mother?' },
          options: [ { ar: '«نعم، صِلي أمَّك»', en: '"Yes, keep good ties with your mother"' }, { ar: '«اهجُريها»', en: '"Abandon her"' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
        { q: { ar: 'كيف نُعامِلُ من لم يُحاربْنا من غيرِ المسلمين؟', en: 'How do we treat non-Muslims who don’t fight us?' },
          options: [ { ar: 'بالبِرِّ والعدلِ والإحسان', en: 'With kindness, justice, and good treatment' }, { ar: 'بالظلمِ والأذى', en: 'With injustice and harm' }, { ar: 'لا نُكلِّمُهم', en: 'We don’t speak to them' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'الولاء', en: 'Loyalty' }, b: { ar: 'محبّةُ اللهِ والمؤمنين', en: 'Love of Allah and the believers' } },
        { a: { ar: 'البراء', en: 'Disavowal' }, b: { ar: 'من الشركِ والباطل', en: 'From shirk and falsehood' } },
        { a: { ar: 'إبراهيم', en: 'Ibrahim' }, b: { ar: 'تبرّأَ من عبادةِ الأصنام', en: 'Disavowed idol-worship' } },
        { a: { ar: 'أسماءُ وأمُّها', en: 'Asma and her mother' }, b: { ar: 'البِرُّ ولو كانت مشركة', en: 'Kindness even to a non-Muslim mother' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'نُحبُّ اللهَ والمؤمنينَ ونتبرّأُ من الشرك.', en: 'We love Allah and the believers and disavow shirk.' }, t: true },
        { statement: { ar: 'البراءُ يعني أن نَظلِمَ غيرَ المسلمينَ ونُؤذيهم.', en: 'Disavowal means wronging and harming non-Muslims.' }, t: false },
        { statement: { ar: 'نَبَرُّ الأمَّ ولو كانت غيرَ مسلمة.', en: 'We honor our mother even if she is non-Muslim.' }, t: true },
        { statement: { ar: 'نُقدِّمُ أعداءَ الدينِ على المؤمنينَ في الولاء.', en: 'We prefer the faith’s enemies over believers in loyalty.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ الميزان', en: 'Medal of Balance' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ الولاءَ والبراءَ بميزانِه الجميل اخلِطْ هذه في يومِك 🪄', en: 'To live loyalty & disavowal in its beautiful balance, mix these into your day 🪄' },
      steps: [
        { icon: '💚', ar: 'أُحبُّ اللهَ والمؤمنينَ وأفرحُ بصُحبتِهم.', en: 'I love Allah and the believers and rejoice in their company.' },
        { icon: '🛡️', ar: 'أتمسّكُ بديني وأتبرّأُ من الشركِ والباطل.', en: 'I hold to my faith and disavow shirk and falsehood.' },
        { icon: '⚖️', ar: 'أَعدِلُ وأَصدُقُ ولا أظلِمُ أحداً أبداً.', en: 'I am just and honest and never wrong anyone.' },
        { icon: '🤝', ar: 'أُحسِنُ لجاري وأبَرُّ والديَّ مهما كانوا.', en: 'I am kind to my neighbor and honor my parents, whoever they are.' },
      ],
      result: { ar: 'قلبٌ ثابتٌ على الحقِّ، وخُلُقٌ جميلٌ مع كلِّ الناس — يُحبُّه اللهُ ويُحبُّه الخلق! 🛡️', en: 'A heart firm upon truth, with beautiful character to all people — loved by Allah and by people! 🛡️' },
    },
    stickers: [
      { icon: 'shield', color: '#5A7BB8', title: { ar: 'دِرعُ الثبات', en: 'Shield of Firmness' } },
      { icon: 'heart',  color: '#7494CE', title: { ar: 'حُبٌّ في الله', en: 'Love for Allah' } },
      { icon: 'star',   color: '#4A6BA8', title: { ar: 'نجمةُ العدل', en: 'Star of Justice' } },
      { icon: 'dove',   color: '#5270AE', title: { ar: 'حُسنُ الخُلُق', en: 'Beautiful Character' } },
    ],
    moral: { ar: 'عرفنا أنّ الولاءَ والبراءَ ميزانٌ جميل: نُحبُّ اللهَ والمؤمنينَ، ونتبرّأُ من الشركِ والباطل، ولا نُقدِّمُ أعداءَ الدينِ على المؤمنينَ ولو كانوا أهلَنا — ومع ذلك نَعدِلُ ونُحسِنُ ونَصدُقُ مع كلِّ الناس، ونَبَرُّ والدينا ولو كانا غيرَ مسلمَين. عقيدةٌ ثابتةٌ وخُلُقٌ جميل.', en: 'We learned that loyalty and disavowal is a beautiful balance: we love Allah and the believers, disavow shirk and falsehood, and don’t prefer the faith’s enemies over the believers even if they’re our relatives — yet we are just, kind, and honest with all people, and honor our parents even if non-Muslim. A firm creed and beautiful character.' },
    reflect: [
      { ar: 'كيف تَجمعُ بين حُبِّك لدينِك وحُسنِ معاملتِك لكلِّ الناس؟', en: 'How do you combine love for your faith with good treatment of all people?' },
      { ar: 'بماذا تُحسِنُ إلى جارٍ أو زميلٍ يُخالِفُك في الدين؟', en: 'How can you be kind to a neighbor or classmate of a different faith?' },
    ],
  },
};
