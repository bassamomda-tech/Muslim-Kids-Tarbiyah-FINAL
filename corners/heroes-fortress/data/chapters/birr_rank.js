// data/chapters/birr_rank.js — ركن القلب السليم · برُّ الوالدين
// المحطة الأولى: مكانةُ بِرِّ الوالدين (أهميتُه ومنزلتُه في الإسلام)
// Sources: القرآن الكريم · صحيح البخاري ومسلم والترمذي · الدرر السنية · الكلم الطيب · الموسوعة القرآنية
// kind:'lesson' → storytelling treatment (حكايات بوضعَيها + كلماتٌ من نور + ميدانُ الأبطال).
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.birr_rank = {
  id: 'birr_rank', era: 'heart', kind: 'lesson', icon: 'crown',
  name: { ar: 'مكانةُ بِرِّ الوالدين', en: 'The Rank of Honoring Parents' },
  tag:  { ar: 'بعدَ عبادةِ اللهِ مباشرةً', en: 'Right after the worship of Allah' },
  accent: '#B0822E', accent2: '#D2A850',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  knowledgeTitle: { ar: 'لماذا نَبَرُّ والدينا؟', en: 'Why Do We Honor Our Parents?' },
  storyTitle: { ar: 'حكاياتُ البِرّ', en: 'Tales of Honoring' },
  greeting: {
    ar: 'مرحباً يا صغيري الحبيب! 🌷 هل تعلمُ أنّ إرضاءَ والديك من أحبِّ الأعمالِ إلى الله؟ تعالَ نكتشفْ معاً عظمةَ بِرِّ الوالدين.',
    en: 'Welcome, dear little one! 🌷 Did you know that pleasing your parents is among the most beloved deeds to Allah? Come, let’s discover together the greatness of honoring parents.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'سُئلَ النبيُّ ﷺ: أيُّ العملِ أحبُّ إلى الله؟ قال: <b>«الصلاةُ على وقتِها»</b>. قيل: ثمّ أيّ؟ قال: <b>«ثمّ برُّ الوالدين»</b> — قبلَ الجهادِ في سبيلِ الله! فمكانةُ البِرِّ عظيمةٌ جدّاً عندَ الله.',
      en: 'The Prophet ﷺ was asked: which deed is most beloved to Allah? He said: <b>"Prayer at its time."</b> Then which? He said: <b>"Then honoring one’s parents"</b> — before even striving in Allah’s cause! The rank of honoring parents is immense with Allah.',
    },
    who: {
      ar: 'برُّ الوالدين معناه <b>الإحسانُ إليهما</b>: طاعتُهما في المعروف، وخدمتُهما، وخفضُ الصوتِ معهما، والدعاءُ لهما، وإدخالُ السرورِ عليهما. وقد قرنَ اللهُ <b>عبادتَه ببرِّ الوالدين</b> في القرآن: ﴿وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا﴾. ورضا اللهِ <b>في رضا الوالدين</b>، والبِرُّ بابٌ من أوسعِ أبوابِ الجنّة. وحقُّ الأمِّ أعظم — أوصى بها النبيُّ ﷺ ثلاثاً قبلَ الأب.',
      en: 'Honoring parents means <b>being good to them</b>: obeying them in good, serving them, lowering your voice with them, praying for them, and bringing them joy. Allah paired <b>His worship with honoring parents</b> in the Qur’an: "Your Lord has decreed that you worship none but Him, and be good to parents." Allah’s pleasure is <b>in the parents’ pleasure</b>, and honoring them is one of the widest gates of Paradise. The mother’s right is greatest — the Prophet ﷺ named her three times before the father.',
    },
    facts: [
      { ar: 'برُّ الوالدين بعدَ عبادةِ اللهِ مباشرةً في القرآن.', en: 'Honoring parents comes right after worshiping Allah in the Qur’an.' },
      { ar: 'رضا اللهِ في رضا الوالدين، وسخطُه في سخطِهما.', en: 'Allah’s pleasure is in the parents’ pleasure, His anger in theirs.' },
      { ar: 'حقُّ الأمِّ ثلاثةُ أضعافِ حقِّ الأب.', en: 'The mother’s right is three times the father’s.' },
      { ar: 'دعوةُ الوالدِ لولدِه مستجابةٌ بإذنِ الله.', en: 'A parent’s du‘a for their child is answered, by Allah’s will.' },
      { ar: 'البِرُّ بابٌ من أوسعِ أبوابِ الجنّة.', en: 'Honoring parents is one of the widest gates of Paradise.' },
    ],
    ayah: { ar: '﴿ وَبِالْوَالِدَيْنِ إِحْسَانًا ﴾', ref: { ar: 'الإسراء ٢٣', en: 'Al-Isra 23' } },
  },
  storyIntro: {
    ar: 'تعالَ نرى كيف يَرفعُ البِرُّ صاحبَه 🌷 — في الجهادِ والغارِ ودعاءِ الأمّهات!',
    en: 'Come, let’s see how honoring parents raises a person 🌷 — in striving, the cave, and mothers’ prayers!',
  },
  story: [
    { scene: 'madinah', tag: { ar: 'البِرُّ جهاد', en: 'Honoring is striving' },
      title: { ar: 'ففيهما فجاهِد', en: '"Then strive in caring for them"' },
      text: { ar: 'جاءَ شابٌّ إلى النبيِّ ﷺ يَستأذِنُه في الجهاد، فقال له: <b>«أحيٌّ والداك؟»</b> قال: نعم. قال: <b>«ففيهما فجاهِد»</b>! أي: خدمتُك لوالديك ورعايتُك لهما <b>كالجهادِ في سبيلِ الله</b>. فما أعظمَ أجرَ البِرّ!', en: 'A young man came to the Prophet ﷺ asking permission to go to battle. He said: <b>"Are your parents alive?"</b> He said: yes. He said: <b>"Then strive in caring for them"</b>! Meaning: serving and caring for your parents is <b>like striving in Allah’s cause</b>. How great is the reward of honoring them!' } },
    { scene: 'cave', tag: { ar: 'البِرُّ يُنجي', en: 'Honoring saves' },
      title: { ar: 'الصخرةُ وأصحابُ الغار', en: 'The boulder and the cave companions' },
      text: { ar: 'انطبقَتْ صخرةٌ على ثلاثةٍ في غار. فدعا كلٌّ بأفضلِ عملٍ له. قال أحدُهم: كنتُ أُؤخِّرُ نومي لأسقِيَ <b>والديَّ الكبيرينِ</b> اللبنَ قبلَ أهلي وولدي، وبقيتُ أنتظرُ حتى استيقظا! فبهذا البِرّ <b>انفرجَتِ الصخرةُ قليلاً</b> ونجَوا. البِرُّ يَفتحُ أبوابَ الفرَج.', en: 'A boulder sealed three men in a cave. Each prayed by his best deed. One said: I used to delay my own sleep to give my <b>elderly parents</b> milk before my family and children, and I waited until they woke! By this honoring, <b>the boulder shifted a little</b> and they were saved. Honoring parents opens doors of relief.' } },
    { scene: 'cradle', tag: { ar: 'حقُّ الأمّ', en: 'The mother’s right' },
      title: { ar: 'أمُّك ثمّ أمُّك ثمّ أمُّك', en: '"Your mother, then your mother, then your mother"' },
      text: { ar: 'سألَ رجلٌ النبيَّ ﷺ: مَن أحقُّ الناسِ بحُسنِ صحبتي؟ قال: <b>«أمُّك»</b>. قال: ثمّ مَن؟ قال: <b>«أمُّك»</b>. قال: ثمّ مَن؟ قال: <b>«أمُّك»</b>. قال: ثمّ مَن؟ قال: <b>«أبوك»</b>. حَمَلَتْك أمُّك وتعِبَتْ لأجلِك، فاجعلْها أوّلَ من تَبَرّ.', en: 'A man asked the Prophet ﷺ: who is most deserving of my good company? He said: <b>"Your mother."</b> Then who? <b>"Your mother."</b> Then who? <b>"Your mother."</b> Then who? <b>"Your father."</b> Your mother carried you and tired for you, so make her the first you honor.' } },
    { scene: 'mihrab', tag: { ar: 'دعوةٌ مستجابة', en: 'An answered prayer' },
      title: { ar: 'دعوةُ الوالدِ لا تُرَدّ', en: 'A parent’s prayer is not refused' },
      text: { ar: 'أخبرَ النبيُّ ﷺ أنّ <b>دعوةَ الوالدِ لولدِه مستجابة</b>. فإذا أرضيتَ والديك دعوا لك بالخير، ففتحَ اللهُ لك أبوابَ التوفيق. وإذا أحزنتَهما فدعاؤهما عليك مخيف. فاحرِصْ على دعائِهما لك، وقُلْ لهما دائماً ما يُسعِدُهما.', en: 'The Prophet ﷺ taught that <b>a parent’s du‘a for their child is answered</b>. If you please your parents, they pray good for you, and Allah opens doors of success. If you grieve them, their prayer against you is frightening. So seek their prayers for you, and always say what makes them happy.' } },
  ],
  storyChoice: {
    q: { ar: 'كيف تَنالُ هذه المكانةَ العظيمةَ للبِرّ؟', en: 'How do you attain this great rank of honoring parents?' },
    opts: [
      { t: { ar: 'أُطيعُهما في المعروفِ وأخدِمُهما وأُدخِلُ السرورَ عليهما', en: 'I obey them in good, serve them, and bring them joy' }, c: true,
        exp: { ar: 'نعم! البِرُّ طاعةٌ وخدمةٌ وكلامٌ طيّبٌ ودعاء. ورضاهما رضا الله.', en: 'Yes! Honoring is obedience, service, kind words, and du‘a. Their pleasure is Allah’s pleasure.' } },
      { t: { ar: 'أفعلُ ما أُريدُ ولا أُبالي بهما', en: 'I do as I please and ignore them' }, c: false,
        exp: { ar: 'لا، فهذا من العقوق. البِرُّ بابُ الجنّة، فلا تُضيِّعْه.', en: 'No — that is disobedience. Honoring is a gate of Paradise; don’t lose it.' } },
      { t: { ar: 'أُطيعُهما فقط أمامَ الناس', en: 'I obey them only in front of people' }, c: false,
        exp: { ar: 'لا، بل أبَرُّهما في السرِّ والعلن ابتغاءَ رضا الله.', en: 'No — I honor them in private and public, seeking Allah’s pleasure.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ﴾', ref: { ar: 'الإسراء ٢٣', en: 'Al-Isra 23' } },
    hadiths: [
      { ar: '«رِضَا الرَّبِّ في رِضَا الوالِدِ، وسَخَطُ الرَّبِّ في سَخَطِ الوالِدِ»', ref: { ar: 'رواه الترمذي', en: 'At-Tirmidhi' } },
      { ar: '«الوالِدُ أوسَطُ أبوابِ الجنّةِ، فإنْ شِئتَ فأَضِعْ ذلكَ البابَ أو احفَظْه»', ref: { ar: 'رواه الترمذي', en: 'At-Tirmidhi' } },
    ],
    dua:  { ar: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', ref: { ar: 'الإسراء ٢٤', en: 'Al-Isra 24' } },
    pledge: {
      title: { ar: 'عهدُ البِرّ', en: 'The Honoring Pledge' },
      lines: [
        { ar: 'أُطيعُ والديَّ في كلِّ معروفٍ بحُبٍّ ورضا.', en: 'I obey my parents in all good, with love and contentment.' },
        { ar: 'أُكلِّمُهما بلُطفٍ وأخفِضُ صوتي معهما.', en: 'I speak to them gently and lower my voice with them.' },
        { ar: 'أدعو لهما كلَّ يوم: «ربِّ ارحمهما».', en: 'I pray for them daily: "My Lord, have mercy on them."' },
        { ar: 'أُدخِلُ السرورَ على قلبِهما وأُساعِدُهما.', en: 'I bring joy to their hearts and help them.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'أيُّ عملٍ ذكرَه النبيُّ ﷺ بعدَ الصلاةِ على وقتِها؟', en: 'Which deed did the Prophet ﷺ name after prayer on time?' },
          options: [ { ar: 'برُّ الوالدين', en: 'Honoring one’s parents' }, { ar: 'اللعب', en: 'Playing' }, { ar: 'النوم', en: 'Sleeping' } ], answer: 0 },
        { q: { ar: 'مَن أحقُّ الناسِ بحُسنِ الصحبة؟', en: 'Who is most deserving of good company?' },
          options: [ { ar: 'الأمُّ ثمّ الأمُّ ثمّ الأمُّ ثمّ الأب', en: 'The mother, mother, mother, then father' }, { ar: 'الأصدقاء', en: 'Friends' }, { ar: 'الجيران', en: 'Neighbors' } ], answer: 0 },
        { q: { ar: 'أين رضا الله؟', en: 'Where is Allah’s pleasure?' },
          options: [ { ar: 'في رضا الوالدين', en: 'In the parents’ pleasure' }, { ar: 'في المال', en: 'In money' }, { ar: 'في اللعب', en: 'In play' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'برُّ الوالدين', en: 'Honoring parents' }, b: { ar: 'بابٌ من أبوابِ الجنّة', en: 'A gate of Paradise' } },
        { a: { ar: 'رضا الوالدين', en: 'Parents’ pleasure' }, b: { ar: 'فيه رضا الله', en: 'In it is Allah’s pleasure' } },
        { a: { ar: 'الأمّ', en: 'The mother' }, b: { ar: 'حقُّها ثلاثةُ أضعاف', en: 'Her right is three times' } },
        { a: { ar: 'دعوةُ الوالد', en: 'A parent’s du‘a' }, b: { ar: 'مستجابة', en: 'Is answered' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'برُّ الوالدين بعدَ عبادةِ اللهِ مباشرةً.', en: 'Honoring parents comes right after worshiping Allah.' }, t: true },
        { statement: { ar: 'الجهادُ أحبُّ إلى اللهِ من برِّ الوالدين دائماً.', en: 'Battle is always more beloved to Allah than honoring parents.' }, t: false },
        { statement: { ar: 'دعوةُ الوالدِ لولدِه مستجابة.', en: 'A parent’s du‘a for their child is answered.' }, t: true },
        { statement: { ar: 'حقُّ الأبِ أعظمُ من حقِّ الأمّ.', en: 'The father’s right is greater than the mother’s.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ البِرّ', en: 'Medal of Honoring' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ بِرَّ والديك اخلِطْ هذه في يومِك 🪄', en: 'To live honoring your parents, mix these into your day 🪄' },
      steps: [
        { icon: '🙋', ar: 'أُطيعُهما بسرعةٍ إذا طلبا منّي شيئاً طيّباً.', en: 'I obey quickly when they ask me for something good.' },
        { icon: '🗣️', ar: 'أُكلِّمُهما بلُطفٍ ولا أرفعُ صوتي أبداً.', en: 'I speak to them gently and never raise my voice.' },
        { icon: '🤲', ar: 'أدعو لهما: «ربِّ ارحمهما كما ربّياني صغيراً».', en: 'I pray: "My Lord, have mercy on them as they raised me."' },
        { icon: '🌷', ar: 'أُدخِلُ السرورَ على قلبِهما بمساعدةٍ أو هديّةٍ أو قُبلة.', en: 'I bring them joy with help, a gift, or a kiss.' },
      ],
      result: { ar: 'قلبٌ بارٌّ يُحبُّه اللهُ ويُحبُّه والداه، وتُفتَحُ له أبوابُ الجنّة! 🌷', en: 'A dutiful heart loved by Allah and by its parents — the gates of Paradise opened for it! 🌷' },
    },
    stickers: [
      { icon: 'crown', color: '#B0822E', title: { ar: 'تاجُ البِرّ', en: 'Crown of Honoring' } },
      { icon: 'heart', color: '#C68A3A', title: { ar: 'قلبٌ بارّ', en: 'A Dutiful Heart' } },
      { icon: 'star',  color: '#9A7026', title: { ar: 'نجمةُ الرضا', en: 'Star of Pleasure' } },
      { icon: 'leaf',  color: '#A87E2C', title: { ar: 'بابُ الجنّة', en: 'Gate of Paradise' } },
    ],
    moral: { ar: 'عرفنا أنّ بِرَّ الوالدينِ من أعظمِ الأعمالِ عندَ الله، بعدَ عبادتِه مباشرةً، ورضاهما رضا الله، والبِرُّ بابٌ إلى الجنّة. فمن أحبَّ اللهَ بَرَّ والديه.', en: 'We learned that honoring parents is among the greatest deeds with Allah, right after worshiping Him; their pleasure is Allah’s pleasure, and honoring them is a gate to Paradise. Whoever loves Allah honors their parents.' },
    reflect: [
      { ar: 'ما العملُ الذي ستفعلُه اليومَ لتُسعِدَ والديك؟', en: 'What will you do today to make your parents happy?' },
      { ar: 'متى آخرُ مرّةٍ دعوتَ لوالديك؟ ادعُ لهما الآن.', en: 'When did you last pray for your parents? Pray for them now.' },
    ],
  },
};
