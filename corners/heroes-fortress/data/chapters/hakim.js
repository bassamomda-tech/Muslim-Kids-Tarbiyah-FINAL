// data/chapters/hakim.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// الحكيم (يضعُ كلَّ شيءٍ في موضعِه بحكمة، وله الحكمةُ في خلقِه وأمرِه وقدَرِه)
// Sources: القرآن الكريم (الكهف · قصة موسى والخضر) · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.hakim = {
  id: 'hakim', era: 'heart', kind: 'name', icon: 'compass',
  name: { ar: 'الحكيم', en: 'The All-Wise' },
  tag:  { ar: 'يضعُ كلَّ شيءٍ في موضعِه', en: 'He places everything in its rightful place' },
  accent: '#3E7E8E', accent2: '#62A4B2',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! 🧭 هل تساءلتَ يوماً: لماذا خلقَ اللهُ الأشياءَ هكذا؟ كلُّ شيءٍ بحكمةٍ بالغة! تعالَ نتعرّفْ على «الحكيم».',
    en: 'Welcome, little one! 🧭 Have you ever wondered: why did Allah make things this way? Everything is by profound wisdom! Come, let’s meet "Al-Hakim".',
  },
  knowledge: {
    didYouKnow: {
      ar: 'كلُّ شيءٍ خلقَه اللهُ له <b>حكمةٌ وفائدة</b>، حتى البَعوضةُ الصغيرة! جعلَ الليلَ للراحةِ والنهارَ للعمل، والعينَ في موضعِها والقلبَ في موضعِه. ما خلقَ اللهُ شيئاً عبثاً، فهو <b>الحكيم</b> الذي يضعُ كلَّ شيءٍ في مكانِه الصحيح.',
      en: 'Everything Allah created has a <b>wisdom and purpose</b>, even the tiny mosquito! He made night for rest and day for work, the eye in its place and the heart in its place. Allah created nothing in vain, for He is <b>Al-Hakim</b>, who places everything in its right place.',
    },
    who: {
      ar: '«الحكيمُ» كاملُ الحكمة، يضعُ <b>كلَّ شيءٍ في موضعِه الصحيح</b>. له الحكمةُ في <b>خلقِه</b> (فكلُّ مخلوقٍ متقَنٌ لفائدة)، وفي <b>أمرِه</b> (فكلُّ ما أمرَ به أو نهى عنه فيه خيرٌ لنا)، وفي <b>قدَرِه</b> (فما يحدثُ لنا — حتى ما نكرهُه — وراءَه حكمةٌ قد لا نعرفُها). وأحكامُه كلُّها عدلٌ وحكمة. ومن عرفَ أنّ اللهَ حكيمٌ <b>رَضِيَ واطمأنَّ</b>، وأطاعَ أوامرَه واثقاً أنّ فيها الخير.',
      en: '"Al-Hakim" is perfect in wisdom; He places <b>everything in its right place</b>. He has wisdom in His <b>creation</b> (every creature is perfectly made for a purpose), in His <b>commands</b> (all He orders or forbids holds good for us), and in His <b>decree</b> (what happens to us — even what we dislike — has a wisdom we may not know). All His rulings are justice and wisdom. Whoever knows Allah is Al-Hakim <b>is content and at peace</b>, and obeys His commands, sure they hold good.',
    },
    facts: [
      { ar: 'اللهُ ما خلقَ شيئاً عبثاً، فلكلِّ شيءٍ حكمة.', en: 'Allah created nothing in vain; everything has a wisdom.' },
      { ar: 'لكلِّ أمرٍ ونهيٍ في الدِّينِ حكمةٌ تنفعُنا.', en: 'Every command and prohibition in religion holds a wisdom that benefits us.' },
      { ar: 'قد يحدثُ ما نكرهُ، ووراءَه حكمةٌ خفيّة.', en: 'Something we dislike may happen, with a hidden wisdom behind it.' },
      { ar: 'أحكامُ اللهِ كلُّها عدلٌ وحكمةٌ ورحمة.', en: 'Allah’s rulings are all justice, wisdom, and mercy.' },
      { ar: 'مَن عرفَ حكمةَ اللهِ رَضِيَ وأطاعَ واطمأنّ.', en: 'Whoever knows Allah’s wisdom is content, obedient, and at peace.' },
    ],
    ayah: { ar: '﴿ وَاللَّهُ عَلِيمٌ حَكِيمٌ ﴾', ref: { ar: 'النساء ٢٦', en: 'An-Nisa 26' } },
  },
  storyIntro: {
    ar: 'تعالَ نكتشفْ حكمةَ اللهِ 🧭 — في الكونِ، وفي قصّةِ موسى والخَضِرِ العجيبة!',
    en: 'Come, let’s discover Allah’s wisdom 🧭 — in the cosmos, and in the amazing story of Musa and Al-Khidr!',
  },
  story: [
    { scene: 'cosmos', tag: { ar: 'في الكون', en: 'In the cosmos' },
      title: { ar: 'كلُّ شيءٍ بنظامٍ بديع', en: 'Everything in perfect order' },
      text: { ar: 'الشمسُ تُشرِقُ في وقتِها، والقمرُ يَكبُرُ ويَصغُرُ بحساب، والفصولُ تأتي بالترتيب. لو اختلَّ شيءٌ صغيرٌ لفسدَ كلُّ شيء! هذا النظامُ البديعُ يدلُّ على <b>الحكيمِ</b> الذي وضعَ كلَّ شيءٍ في موضعِه بحكمةٍ بالغة.', en: 'The sun rises on time, the moon waxes and wanes by precise measure, and the seasons come in order. If one small thing failed, everything would spoil! This perfect order points to <b>Al-Hakim</b>, who placed everything in its place with profound wisdom.' } },
    { scene: 'boat', tag: { ar: 'حكمةٌ خفيّة', en: 'A hidden wisdom' },
      title: { ar: 'موسى والخَضِرُ والسفينة', en: 'Musa, Al-Khidr, and the boat' },
      text: { ar: 'سافرَ موسى مع العبدِ الصالحِ الخَضِر. فلمّا ركبا سفينةَ قومٍ طيّبين، <b>خَرَقَ الخَضِرُ السفينةَ</b>! تعجّبَ موسى: كيف يُتلِفُها؟! لكنّ الحكمةَ كانت خفيّة: كان وراءَهم مَلِكٌ يأخذُ كلَّ سفينةٍ سليمة، فبالعيبِ الصغيرِ <b>سَلِمَتْ لأصحابِها</b>! ما بدا شرّاً كان خيراً بحكمةِ الله.', en: 'Musa traveled with the righteous servant Al-Khidr. When they boarded the boat of some good people, <b>Al-Khidr made a hole in it</b>! Musa was astonished: how could he damage it?! But the wisdom was hidden: a king ahead seized every sound boat, so by the small flaw <b>it was saved for its owners</b>! What seemed bad was good, by Allah’s wisdom.' } },
    { scene: 'dwellings', tag: { ar: 'حكمةٌ تُكرِم', en: 'A wisdom that honors' },
      title: { ar: 'الجدارُ وكنزُ اليتيمين', en: 'The wall and the orphans’ treasure' },
      text: { ar: 'ثم مرّا بقريةٍ بخيلةٍ لم تُطعِمْهما، فوجدا <b>جداراً يكادُ يسقط</b>، فأصلحَه الخَضِرُ بلا أجر! تعجّبَ موسى. فكانت الحكمة: تحتَ الجدارِ <b>كنزٌ ليتيمين صغيرين</b>، لو سقطَ لضاعَ كنزُهما! فحفظَه اللهُ لهما برحمتِه وحكمتِه. اللهُ يُدبِّرُ بحكمةٍ لا نراها.', en: 'Then they passed a stingy town that wouldn’t feed them, and found <b>a wall about to fall</b>, which Al-Khidr repaired without pay! Musa wondered. The wisdom: beneath the wall was <b>a treasure for two young orphans</b>; had it fallen, their treasure would be lost! So Allah preserved it for them by His mercy and wisdom. Allah arranges with a wisdom we don’t see.' } },
    { scene: 'garden', tag: { ar: 'في حياتنا', en: 'In our life' },
      title: { ar: 'ثِقْ بحكمةِ الله', en: 'Trust Allah’s wisdom' },
      text: { ar: 'أحياناً يأمرُنا اللهُ بأمرٍ أو يحدثُ لنا ما لا نَفهمُ حكمتَه — كما لم يَفهمْ موسى أوّلاً. لكنّ اللهَ <b>حكيمٌ</b>، كلُّ أمرِه خير، وكلُّ قدَرِه لحكمة. فأطِعْ أوامرَه واثقاً، وارضَ بقضائِه، وقُلْ: ربّي حكيمٌ يَعلمُ ما لا أعلم. تطمئنّ.', en: 'Sometimes Allah commands us, or something happens to us, whose wisdom we don’t understand — as Musa didn’t at first. But Allah is <b>Al-Hakim</b>; all His commands are good, and all His decree is for a wisdom. So obey His commands with trust, accept His decree, and say: my Lord is Wise; He knows what I don’t. And you’ll be at peace.' } },
  ],
  storyChoice: {
    q: { ar: 'إذا حدثَ لك أمرٌ لا تَفهمُ حكمتَه، بماذا تُفكّر؟', en: 'If something happens whose wisdom you don’t understand, what do you think?' },
    opts: [
      { t: { ar: 'ربّي حكيمٌ، لهذا حكمةٌ قد لا أعرفُها', en: 'My Lord is Wise; there is a wisdom in this I may not know' }, c: true,
        exp: { ar: 'نعم! كقصّةِ السفينةِ والجدار، ما بدا صعباً كان فيه خير. ثِقْ بالحكيم.', en: 'Yes! Like the boat and the wall, what seemed hard held good. Trust Al-Hakim.' } },
      { t: { ar: 'أَغضبُ وأعترِضُ على قدَرِ الله', en: 'I get angry and object to Allah’s decree' }, c: false,
        exp: { ar: 'لا، فاللهُ حكيمٌ، كلُّ قدَرِه لحكمة. ارضَ واطمئنّ.', en: 'No — Allah is Wise; all His decree is for a wisdom. Be content and at peace.' } },
      { t: { ar: 'أظنُّ أنّ لا فائدةَ من أوامرِ الدِّين', en: 'I think the religion’s commands have no purpose' }, c: false,
        exp: { ar: 'لا، فلكلِّ أمرٍ ونهيٍ حكمةٌ تنفعُنا، وإن لم نعرِفْها كلَّها.', en: 'No — every command and prohibition holds a wisdom that benefits us, even if we don’t know it all.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ وَاللَّهُ عَلِيمٌ حَكِيمٌ ﴾', ref: { ar: 'النساء ٢٦', en: 'An-Nisa 26' } },
    dua:  { ar: 'اللّهُمَّ يا حكيمُ ألهِمْني رُشدي، ورَضِّني بقضائِك، وعلِّمْني الحكمة', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ الحكمة', en: 'The Wisdom Pledge' },
      lines: [
        { ar: 'أُطيعُ أوامرَ اللهِ واثقاً أنّ فيها الخير.', en: 'I obey Allah’s commands, sure they hold good.' },
        { ar: 'أرضى بقضاءِ اللهِ وأقولُ: ربّي حكيم.', en: 'I accept Allah’s decree and say: my Lord is Wise.' },
        { ar: 'أتأمّلُ في حكمةِ اللهِ في خلقِه حولي.', en: 'I ponder Allah’s wisdom in His creation around me.' },
        { ar: 'أتروّى وأُفكِّرُ قبلَ أن أتصرّفَ بحكمة.', en: 'I pause and think wisely before I act.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ماذا يعني «الحكيم»؟', en: 'What does "Al-Hakim" mean?' },
          options: [ { ar: 'يضعُ كلَّ شيءٍ في موضعِه بحكمة', en: 'He places everything in its right place with wisdom' }, { ar: 'يفعلُ عبثاً', en: 'He acts in vain' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
        { q: { ar: 'لماذا خَرَقَ الخَضِرُ السفينة؟', en: 'Why did Al-Khidr make a hole in the boat?' },
          options: [ { ar: 'لِيَحفظَها من مَلِكٍ يأخذُ السليمة', en: 'To save it from a king who seized sound boats' }, { ar: 'ليُغرِقَ الناس', en: 'To drown the people' }, { ar: 'بلا سبب', en: 'For no reason' } ], answer: 0 },
        { q: { ar: 'ماذا كان تحتَ الجدار؟', en: 'What was beneath the wall?' },
          options: [ { ar: 'كنزٌ ليتيمين صغيرين', en: 'A treasure for two young orphans' }, { ar: 'لا شيء', en: 'Nothing' }, { ar: 'ماء', en: 'Water' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'الكون', en: 'The cosmos' }, b: { ar: 'نظامٌ بديعٌ بحكمة', en: 'Perfect order by wisdom' } },
        { a: { ar: 'خَرْقُ السفينة', en: 'Holing the boat' }, b: { ar: 'حفِظَها لأصحابِها', en: 'Saved it for its owners' } },
        { a: { ar: 'إصلاحُ الجدار', en: 'Repairing the wall' }, b: { ar: 'حفِظَ كنزَ اليتيمين', en: 'Preserved the orphans’ treasure' } },
        { a: { ar: 'ما نكرهُ أحياناً', en: 'What we sometimes dislike' }, b: { ar: 'وراءَه حكمةٌ خفيّة', en: 'Has a hidden wisdom' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'اللهُ ما خلقَ شيئاً عبثاً.', en: 'Allah created nothing in vain.' }, t: true },
        { statement: { ar: 'أوامرُ الدِّينِ بلا فائدةٍ ولا حكمة.', en: 'The religion’s commands have no benefit or wisdom.' }, t: false },
        { statement: { ar: 'قد يكونُ وراءَ ما نكرهُ حكمةٌ وخير.', en: 'Behind what we dislike there may be wisdom and good.' }, t: true },
        { statement: { ar: 'نعترِضُ على قدَرِ اللهِ إذا لم نَفهمْه.', en: 'We object to Allah’s decree if we don’t understand it.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ الحكمة', en: 'Medal of Wisdom' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الحكيم» اخلِطْ هذه في يومِك 🪄', en: 'To live the name "Al-Hakim", mix these into your day 🪄' },
      steps: [
        { icon: '✅', ar: 'أُطيعُ أوامرَ اللهِ واثقاً أنّ فيها الخير.', en: 'I obey Allah’s commands, sure they hold good.' },
        { icon: '😌', ar: 'أرضى بما يُقدِّرُه اللهُ وأقول: ربّي حكيم.', en: 'I accept what Allah decrees and say: my Lord is Wise.' },
        { icon: '🔭', ar: 'أتأمّلُ حكمةَ اللهِ في خلقٍ واحدٍ كلَّ يوم.', en: 'I ponder Allah’s wisdom in one creature each day.' },
        { icon: '🧭', ar: 'أتروّى وأُفكِّرُ بحكمةٍ قبلَ أن أتصرّف.', en: 'I pause and think wisely before I act.' },
      ],
      result: { ar: 'قلبٌ مطمئنٌّ راضٍ، يثقُ بحكمةِ اللهِ ويُطيعُ أوامرَه بحبّ! 🧭', en: 'A calm, content heart that trusts Allah’s wisdom and obeys His commands with love! 🧭' },
    },
    stickers: [
      { icon: 'compass', color: '#3E7E8E', title: { ar: 'بوصلةُ الحكمة', en: 'Compass of Wisdom' } },
      { icon: 'star',    color: '#52A0B0', title: { ar: 'نجمةُ الرضا', en: 'Star of Contentment' } },
      { icon: 'gem',     color: '#2E6E7E', title: { ar: 'جوهرةُ التدبّر', en: 'Gem of Reflection' } },
      { icon: 'light',   color: '#357888', title: { ar: 'نورُ البصيرة', en: 'Light of Insight' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «الحكيمَ» يضعُ كلَّ شيءٍ في موضعِه، وله الحكمةُ في خلقِه وأمرِه وقدَرِه، فمن أحبَّه أطاعَ أوامرَه واثقاً، ورَضِيَ بقضائِه، وتأمّلَ حكمتَه في الكون.', en: 'We learned that Allah "Al-Hakim" places everything in its place, with wisdom in His creation, commands, and decree — whoever loves Him obeys His commands with trust, accepts His decree, and ponders His wisdom in the cosmos.' },
    reflect: [
      { ar: 'هل مرَّ بك أمرٌ كرهتَه ثم ظهرَتْ لك حكمتُه لاحقاً؟', en: 'Did something you disliked later reveal its wisdom to you?' },
      { ar: 'ما المخلوقُ الذي تأمّلتَ حكمةَ اللهِ في خلقِه اليوم؟', en: 'Which creature’s wisdom of creation did you ponder today?' },
    ],
  },
};
