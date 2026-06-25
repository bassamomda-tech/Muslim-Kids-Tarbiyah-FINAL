// data/chapters/birr_stories.js — ركن القلب السليم · برُّ الوالدين
// المحطة الثانية: قصصُ البارّين (أويس · حامِلُ أمِّه · جُرَيج)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب · الموسوعة القرآنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.birr_stories = {
  id: 'birr_stories', era: 'heart', kind: 'lesson', icon: 'star',
  name: { ar: 'قصصُ البارّين', en: 'Stories of the Dutiful' },
  tag:  { ar: 'أبطالٌ أحبَّهم اللهُ ببِرِّهم', en: 'Heroes Allah loved for honoring their parents' },
  accent: '#3F7CA0', accent2: '#62A0C2',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  knowledgeTitle: { ar: 'أبطالُ البِرّ', en: 'Heroes of Honoring' },
  storyTitle: { ar: 'قصصٌ مضيئة', en: 'Shining Stories' },
  greeting: {
    ar: 'مرحباً يا صغيري! ⭐ تعالَ نسمعْ قصصَ أبطالٍ حقيقيين أحبَّهم اللهُ ورفعَهم لأنّهم بَرّوا والديهم. قصصٌ ستُحبُّها كثيراً!',
    en: 'Welcome, little one! ⭐ Come, let’s hear stories of real heroes whom Allah loved and raised because they honored their parents. Stories you’ll love!',
  },
  knowledge: {
    didYouKnow: {
      ar: 'كان <b>أويسٌ القَرَنيُّ</b> رجلاً لا يَعرفُه الناس، لكنّه عظيمٌ في السماء! لماذا؟ لأنّه <b>بَرَّ أمَّه</b> برّاً عظيماً. حتى إنّ النبيَّ ﷺ أوصى عمرَ أن يطلبَ منه أن يدعوَ له! البِرُّ يَرفعُ صاحبَه عندَ الله.',
      en: 'Uways al-Qarani was a man unknown to people, but great in the heavens! Why? Because he <b>honored his mother</b> greatly. The Prophet ﷺ even told ‘Umar to ask Uways to pray for him! Honoring parents raises a person with Allah.',
    },
    who: {
      ar: 'في هذه المحطّةِ نَسمعُ قصصاً حقيقيّةً عن أناسٍ <b>أحبَّهم اللهُ ببِرِّهم</b> بآبائِهم وأمّهاتِهم. نتعلّمُ منهم كيف يكونُ البِرُّ عملاً، لا مجرّدَ كلام: خدمةٌ، وصبرٌ، ولينٌ، وتقديمُ الوالدينِ على النفس. هذه القصصُ من <b>السنّةِ الصحيحة</b>، فهي قدوةٌ لنا نقتدي بها ونُحبُّها.',
      en: 'In this station we hear true stories of people <b>Allah loved for honoring</b> their fathers and mothers. We learn from them how honoring is action, not just words: service, patience, gentleness, and putting parents before oneself. These stories are from the <b>authentic Sunnah</b>, examples for us to follow and love.',
    },
    facts: [
      { ar: 'أويسٌ القَرَنيُّ: بَرَّ أمَّه فصارَ عظيماً في السماء.', en: 'Uways al-Qarani honored his mother and became great in the heavens.' },
      { ar: 'لا نستطيعُ أن نَردَّ جميلَ أمِّهاتِنا مهما فعلنا.', en: 'We can never fully repay our mothers, whatever we do.' },
      { ar: 'إجابةُ نداءِ الأمِّ مقدَّمةٌ ولو كنتَ في نافلة.', en: 'Answering a mother’s call comes first, even during a voluntary prayer.' },
      { ar: 'القدوةُ الصالحةُ تُعلِّمُنا البِرَّ بالفعلِ لا بالقول.', en: 'Good role models teach us honoring by action, not words.' },
      { ar: 'البِرُّ يَرفعُ صاحبَه عندَ اللهِ وإن جَهِلَه الناس.', en: 'Honoring raises a person with Allah even if people don’t know him.' },
    ],
    ayah: { ar: '﴿ وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا ﴾', ref: { ar: 'العنكبوت ٨', en: 'Al-‘Ankabut 8' } },
  },
  storyIntro: {
    ar: 'تعالَ نعيشْ مع ثلاثةِ أبطالٍ ⭐ — أويسٍ، وحامِلِ أمِّه، وجُرَيج!',
    en: 'Come, let’s live with three heroes ⭐ — Uways, the one who carried his mother, and Jurayj!',
  },
  story: [
    { scene: 'desert', tag: { ar: 'بطلٌ في السماء', en: 'A hero in the heavens' },
      title: { ar: 'أويسٌ القَرَنيّ', en: 'Uways al-Qarani' },
      text: { ar: 'كان أويسٌ يعيشُ في اليمنِ يَخدِمُ <b>أمَّه المريضة</b> ولا يُفارِقُها، فلم يستطعْ أن يأتيَ ليرى النبيَّ ﷺ بِرّاً بها. فأخبرَ النبيُّ ﷺ عنه وقال لعمرَ: إنْ لقيتَه <b>فاطلُبْ منه أن يَستغفرَ لك</b>! رجلٌ بسيطٌ، لكنّ بِرَّه بأمِّه رفعَه حتى تَمنّى عمرُ دعاءَه.', en: 'Uways lived in Yemen serving his <b>sick mother</b>, never leaving her, so he couldn’t come to see the Prophet ﷺ — out of honoring her. The Prophet ﷺ told of him and said to ‘Umar: if you meet him, <b>ask him to seek forgiveness for you</b>! A simple man, yet honoring his mother raised him so high that ‘Umar wished for his prayer.' } },
    { scene: 'kaaba', tag: { ar: 'هل وفّيتُها؟', en: 'Have I repaid her?' },
      title: { ar: 'حامِلُ أمِّه في الطواف', en: 'Carrying his mother in tawaf' },
      text: { ar: 'حملَ رجلٌ <b>أمَّه على ظهرِه</b> يطوفُ بها حولَ الكعبة، ثم سألَ ابنَ عمرَ: هل وفّيتُ حقَّها؟ فقال: <b>«لا، ولا بطَلْقةٍ واحدة»</b> — أي لا تُساوي ولا لحظةً واحدةً من ألمِها وهي تَلِدُك! مهما فعلنا لأمّهاتِنا، يبقى فضلُهنّ علينا أعظم.', en: 'A man carried his <b>mother on his back</b>, circling the Kaaba with her, then asked Ibn ‘Umar: have I repaid her right? He said: <b>"No, not even for one labor pain"</b> — it doesn’t equal even one moment of her pain giving birth to you! Whatever we do for our mothers, their favor upon us remains greater.' } },
    { scene: 'mihrab', tag: { ar: 'أجِبْ أمَّك', en: 'Answer your mother' },
      title: { ar: 'جُرَيجٌ ونداءُ أمِّه', en: 'Jurayj and his mother’s call' },
      text: { ar: 'كان جُرَيجٌ عابداً في صَومعتِه يُصلّي، فنادَتْه <b>أمُّه</b>، فاختارَ أن يُكمِلَ صلاتَه ولم يُجِبْها، ثلاثَ مرّات! فحَزِنَتْ. ثم ابتُلِيَ جُرَيجٌ بتُهمةٍ ظالمة، فأنطقَ اللهُ رضيعاً برّأه! العبرة: <b>إجابةُ الأمِّ مقدَّمةٌ</b> حتى على صلاةِ النافلة. أجِبْ أمَّك بسرعةٍ ولِين.', en: 'Jurayj was a worshipper praying in his hermitage, when his <b>mother</b> called him; he chose to finish his prayer and didn’t answer her — three times! She was saddened. Then Jurayj was tested with a false accusation, and Allah made an infant speak to clear him! The lesson: <b>answering your mother comes first</b>, even over a voluntary prayer. Answer your mother quickly and gently.' } },
    { scene: 'garden', tag: { ar: 'كُنْ بطلاً', en: 'Be a hero' },
      title: { ar: 'دورُك أنت', en: 'Your turn' },
      text: { ar: 'هؤلاء أبطالٌ بَرّوا والديهم فأحبَّهم الله. وأنتَ تستطيعُ أن تكونَ بطلاً مثلَهم! بأشياءَ بسيطة: <b>تُجيبُ أمَّك بسرعة</b>، وتُساعِدُ أباك، وتَخدِمُهما إذا كَبِرا، وتدعو لهما. ابدأْ اليومَ بعملٍ واحد، فلكلِّ بطلٍ بدايةٌ صغيرة.', en: 'These are heroes who honored their parents, so Allah loved them. And you can be a hero like them! With simple things: <b>answering your mother quickly</b>, helping your father, serving them when they grow old, and praying for them. Start today with one deed — every hero has a small beginning.' } },
  ],
  storyChoice: {
    q: { ar: 'إذا نادَتْك أمُّك وأنتَ تلعبُ أو تُصلّي نافلة، ماذا تفعل؟', en: 'If your mother calls you while playing or praying voluntarily, what do you do?' },
    opts: [
      { t: { ar: 'أُجيبُها بسرعةٍ ولُطفٍ كما علّمَتْنا قصّةُ جُرَيج', en: 'I answer quickly and gently, as Jurayj’s story taught us' }, c: true,
        exp: { ar: 'نعم! إجابةُ الأمِّ مقدَّمةٌ ولو على النافلة. أجِبْها بحبٍّ وابتسامة.', en: 'Yes! Answering your mother comes first, even over voluntary prayer. Answer with love and a smile.' } },
      { t: { ar: 'أتجاهلُها حتى أُنهي لعبي', en: 'I ignore her until I finish playing' }, c: false,
        exp: { ar: 'لا، فإهمالُ ندائِها يُحزِنُها. أبطالُ البِرِّ يُجيبون بسرعة.', en: 'No — ignoring her call saddens her. Heroes of honoring answer quickly.' } },
      { t: { ar: 'أرفعُ صوتي وأقولُ: انتظري!', en: 'I raise my voice: "Wait!"' }, c: false,
        exp: { ar: 'لا، بل أُجيبُ بصوتٍ لطيفٍ وأذهبُ إليها بسرعة.', en: 'No — I answer in a gentle voice and go to her quickly.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا ﴾', ref: { ar: 'العنكبوت ٨', en: 'Al-‘Ankabut 8' } },
    hadiths: [
      { ar: '«يأتي عليكم أُوَيسُ بنُ عامرٍ … كان بَرّاً بأمِّه … فمُرُوهُ فلْيَستغفِرْ لكم»', ref: { ar: 'رواه مسلم', en: 'Muslim' } },
    ],
    dua:  { ar: 'رَبِّ اجعَلني بارّاً بوالديَّ، واجعَلْ بِرّي بهما سبباً لرضاك', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ البطل', en: 'The Hero’s Pledge' },
      lines: [
        { ar: 'أُجيبُ أمّي وأبي بسرعةٍ ولُطف.', en: 'I answer my mother and father quickly and gently.' },
        { ar: 'أخدِمُ والديَّ وأُقدِّمُهما على لعبي.', en: 'I serve my parents and put them before my play.' },
        { ar: 'أتذكّرُ تعبَ أمّي وأشكرُها عليه.', en: 'I remember my mother’s hardship and thank her for it.' },
        { ar: 'أقتدي بأبطالِ البِرِّ في كلِّ يوم.', en: 'I follow the heroes of honoring every day.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'لماذا صارَ أويسٌ عظيماً في السماء؟', en: 'Why did Uways become great in the heavens?' },
          options: [ { ar: 'لأنّه بَرَّ أمَّه', en: 'Because he honored his mother' }, { ar: 'لأنّه غنيّ', en: 'Because he was rich' }, { ar: 'لأنّه قويّ', en: 'Because he was strong' } ], answer: 0 },
        { q: { ar: 'هل يَردُّ الإنسانُ جميلَ أمِّه كاملاً؟', en: 'Can a person fully repay their mother?' },
          options: [ { ar: 'لا، ولو بطَلْقةٍ واحدة', en: 'No, not even for one labor pain' }, { ar: 'نعم بسهولة', en: 'Yes, easily' }, { ar: 'لا أحدَ يعلم', en: 'No one knows' } ], answer: 0 },
        { q: { ar: 'ماذا تعلّمْنا من قصّةِ جُرَيج؟', en: 'What did we learn from Jurayj’s story?' },
          options: [ { ar: 'إجابةُ الأمِّ مقدَّمةٌ ولو على النافلة', en: 'Answering the mother comes first, even over voluntary prayer' }, { ar: 'لا نُجيبُ الأمّ', en: 'We don’t answer the mother' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلِ البطلَ بقصّته', en: 'Match each hero to his story' },
      pairs: [
        { a: { ar: 'أويس', en: 'Uways' }, b: { ar: 'خدمَ أمَّه المريضة', en: 'Served his sick mother' } },
        { a: { ar: 'حامِلُ أمِّه', en: 'The one who carried his mother' }, b: { ar: 'طافَ بها حولَ الكعبة', en: 'Circled the Kaaba with her' } },
        { a: { ar: 'جُرَيج', en: 'Jurayj' }, b: { ar: 'تعلّمَ إجابةَ الأمّ', en: 'Learned to answer his mother' } },
        { a: { ar: 'أنت', en: 'You' }, b: { ar: 'بطلُ البِرِّ القادم', en: 'The next hero of honoring' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'بِرُّ الأمِّ رفعَ أويساً عندَ الله.', en: 'Honoring his mother raised Uways with Allah.' }, t: true },
        { statement: { ar: 'نستطيعُ أن نَردَّ جميلَ أمِّهاتِنا بسهولة.', en: 'We can easily repay our mothers.' }, t: false },
        { statement: { ar: 'نُجيبُ نداءَ الأمِّ بسرعةٍ ولِين.', en: 'We answer a mother’s call quickly and gently.' }, t: true },
        { statement: { ar: 'البطولةُ في القوّةِ فقط لا في البِرّ.', en: 'Heroism is only in strength, not in honoring parents.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ البطل البارّ', en: 'Medal of the Dutiful Hero' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتكونَ بطلاً بارّاً مثلَهم اخلِطْ هذه في يومِك 🪄', en: 'To be a dutiful hero like them, mix these into your day 🪄' },
      steps: [
        { icon: '🏃', ar: 'أُجيبُ أمّي وأبي فورَ ندائِهما بابتسامة.', en: 'I answer my mother and father at once, with a smile.' },
        { icon: '💪', ar: 'أخدِمُهما وأُساعِدُهما في البيتِ بلا تذمّر.', en: 'I serve and help them at home without complaining.' },
        { icon: '💗', ar: 'أتذكّرُ تعبَ أمّي وأقولُ لها: أُحبُّك وأشكرُك.', en: 'I remember my mother’s hardship and say: I love and thank you.' },
        { icon: '⭐', ar: 'أقتدي ببطلٍ بارٍّ كلَّ أسبوعٍ في عملٍ جديد.', en: 'I follow a dutiful hero each week with a new deed.' },
      ],
      result: { ar: 'بطلٌ بارٌّ يُحبُّه اللهُ ويَفخرُ به والداه، تَرتفعُ منزلتُه في السماء! ⭐', en: 'A dutiful hero loved by Allah, the pride of his parents, raised in rank in the heavens! ⭐' },
    },
    stickers: [
      { icon: 'star',  color: '#3F7CA0', title: { ar: 'نجمةُ البطل', en: 'Star of the Hero' } },
      { icon: 'heart', color: '#5296BA', title: { ar: 'قلبٌ بارّ', en: 'A Dutiful Heart' } },
      { icon: 'crown', color: '#356C8E', title: { ar: 'قدوةٌ صالحة', en: 'A Good Example' } },
      { icon: 'gem',   color: '#2E627E', title: { ar: 'جوهرةُ الوفاء', en: 'Gem of Loyalty' } },
    ],
    moral: { ar: 'عرفنا أنّ أبطالاً حقيقيين أحبَّهم اللهُ ورفعَهم لأنّهم بَرّوا والديهم: أويسٌ خدمَ أمَّه، وحامِلُ أمِّه عرفَ فضلَها، وجُرَيجٌ علّمَنا إجابةَ الأمّ. فلنقتدِ بهم ونكُنْ أبطالَ بِرٍّ.', en: 'We learned of real heroes Allah loved and raised for honoring their parents: Uways served his mother, the one who carried his mother knew her worth, and Jurayj taught us to answer our mothers. Let’s follow them and be heroes of honoring.' },
    reflect: [
      { ar: 'أيُّ بطلٍ من القصصِ أعجبَك أكثر؟ ولماذا؟', en: 'Which hero from the stories did you like most? Why?' },
      { ar: 'ما العملُ البطوليُّ الذي ستفعلُه لأمِّك اليوم؟', en: 'What heroic deed will you do for your mother today?' },
    ],
  },
};
