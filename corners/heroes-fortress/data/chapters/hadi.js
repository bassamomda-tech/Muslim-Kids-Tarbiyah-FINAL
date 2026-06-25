// data/chapters/hadi.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// الهادي النور (يَهدي عبادَه إلى الحقِّ وينوّرُ قلوبَهم)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · الدرر السنية · الكلم الطيب · الموسوعة القرآنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.hadi = {
  id: 'hadi', era: 'heart', kind: 'name', icon: 'light',
  name: { ar: 'الهادي النور', en: 'The Guide, the Light' },
  tag:  { ar: 'يَهديك إلى النور', en: 'He guides you to the light' },
  accent: '#C79A2C', accent2: '#E3BC50',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! 🌟 هل تعلمُ أنّ اللهَ هو الذي يَهدي القلوبَ إلى الحقِّ ويَملؤُها نوراً؟ إنّه «الهادي النور». تعالَ نتعرّفْ عليه ونطلُبْ منه الهداية.',
    en: 'Welcome, little one! 🌟 Did you know Allah is the One who guides hearts to truth and fills them with light? He is "Al-Hadi An-Nur". Come, let’s know Him and ask Him for guidance.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'أعظمُ نعمةٍ ليست المالَ ولا اللعب، بل <b>الهداية إلى الإسلام</b>! واللهُ هو <b>«نورُ السماواتِ والأرض»</b>، يَهدي بنورِه من يشاء. ونحنُ نطلبُ الهدايةَ <b>سبعَ عشرةَ مرّةً</b> كلَّ يومٍ في الصلاة: «اهدِنا الصراطَ المستقيم».',
      en: 'The greatest blessing is not money or play, but <b>guidance to Islam</b>! Allah is <b>"the Light of the heavens and the earth,"</b> guiding by His light whom He wills. And we ask for guidance <b>seventeen times</b> every day in prayer: "Guide us to the straight path."',
    },
    who: {
      ar: '«الهادي» يَدُلُّ عبادَه على الحقِّ و<b>يَهدي قلوبَهم</b> إلى الإيمانِ والخير، و«النورُ» يُنوّرُ السماواتِ والأرض، ويَملأُ القلوبَ المؤمنةَ نوراً وطمأنينة. الهدايةُ بيدِ اللهِ وحدَه، فلا يَهدي القلوبَ سواه. ومن أرادَ الهدى <b>طلبَها من اللهِ</b>، وأخذَ بأسبابِها: القرآنِ والصلاةِ والصُّحبةِ الطيّبة. ومن اهتدى <b>دلَّ غيرَه على الخير</b>.',
      en: '"Al-Hadi" shows His servants the truth and <b>guides their hearts</b> to faith and goodness, and "An-Nur" lights the heavens and earth, filling believing hearts with light and peace. Guidance is in Allah’s hand alone — none guides hearts but Him. Whoever wants guidance <b>asks Allah for it</b> and takes its means: the Qur’an, prayer, and good company. And whoever is guided <b>guides others to good</b>.',
    },
    facts: [
      { ar: 'الهدايةُ أعظمُ نعمةٍ، وهي بيدِ اللهِ وحدَه.', en: 'Guidance is the greatest blessing, in Allah’s hand alone.' },
      { ar: 'اللهُ نورُ السماواتِ والأرض.', en: 'Allah is the Light of the heavens and the earth.' },
      { ar: 'نطلبُ الهدايةَ كلَّ يومٍ: «اهدِنا الصراطَ المستقيم».', en: 'We ask for guidance daily: "Guide us to the straight path."' },
      { ar: 'أسبابُ الهداية: القرآن، الصلاة، الصُّحبةُ الطيّبة.', en: 'Means of guidance: the Qur’an, prayer, good company.' },
      { ar: 'مَن اهتدى دلَّ غيرَه على الخير.', en: 'Whoever is guided guides others to good.' },
    ],
    ayah: { ar: '﴿ اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ﴾', ref: { ar: 'النور ٣٥', en: 'An-Nur 35' } },
  },
  storyIntro: {
    ar: 'تعالَ نكتشفْ نورَ هدايةِ اللهِ 🌟 — كيف يَهدي الحائرَ ويُنوّرُ القلوب!',
    en: 'Come, let’s discover the light of Allah’s guidance 🌟 — how He guides the lost and lights up hearts!',
  },
  story: [
    { scene: 'cosmos', tag: { ar: 'في طلبِ الحق', en: 'In seeking truth' },
      title: { ar: 'إبراهيمُ يبحثُ عن ربِّه', en: 'Ibrahim searching for his Lord' },
      text: { ar: 'نظرَ إبراهيمُ إلى <b>النجمِ ثم القمرِ ثم الشمس</b>، وكلٌّ منها يَغيب، فقال: لا أُحبُّ الآفلين! فهداه اللهُ إلى أنّ الربَّ هو خالقُ هذا كلِّه. <b>طلبَ الحقَّ فهداه الله</b>. مَن بحثَ عن الهدى بصدقٍ هداه النور.', en: 'Ibrahim looked at the <b>star, then the moon, then the sun</b>, each one setting, and said: I love not those that set! So Allah guided him to know the Lord is the Creator of them all. <b>He sought truth and Allah guided him</b>. Whoever sincerely seeks guidance, An-Nur guides him.' } },
    { scene: 'night', tag: { ar: 'كالنجومِ تَهدي', en: 'Like stars that guide' },
      title: { ar: 'نجومٌ تَهدي في الظلام', en: 'Stars that guide in the dark' },
      text: { ar: 'جعلَ اللهُ <b>النجومَ</b> يَهتدي بها المسافرُ في ظلامِ البرِّ والبحر. وكذلك جعلَ <b>القرآنَ والعلمَ نوراً</b> يَهتدي به القلبُ في الحياة. كلّما اقتربتَ من القرآن، زادَ نورُ قلبِك واهتديت. اطلُبْ نورَ الله.', en: 'Allah made the <b>stars</b> for the traveler to find his way in the darkness of land and sea. Likewise He made the <b>Qur’an and knowledge a light</b> by which the heart finds its way in life. The closer you draw to the Qur’an, the more your heart’s light grows. Seek Allah’s light.' } },
    { scene: 'cave', tag: { ar: 'هدايةُ القلوب', en: 'Guiding hearts' },
      title: { ar: 'عمرُ من العداوةِ إلى النور', en: 'Umar: from enmity to light' },
      text: { ar: 'كان عمرُ شديداً على المسلمين، لكنّه سمعَ آياتٍ من القرآن فلانَ قلبُه، <b>فهداه اللهُ</b> وصارَ من أعظمِ الصحابة! الهدايةُ بيدِ اللهِ يُنوّرُ بها أيَّ قلب. فلا تَيأسْ من هدايةِ أحد، وادعُ اللهَ له.', en: 'Umar was harsh toward the Muslims, but he heard verses of the Qur’an and his heart softened, <b>so Allah guided him</b> and he became one of the greatest Companions! Guidance is in Allah’s hand; He lights up any heart with it. So never despair of anyone’s guidance — call Allah for them.' } },
    { scene: 'mosque', tag: { ar: 'نطلبُ الهدى', en: 'We ask for guidance' },
      title: { ar: '«اهدِنا الصراطَ المستقيم»', en: '"Guide us to the straight path"' },
      text: { ar: 'في كلِّ ركعةٍ نقولُ: <b>«اهدِنا الصراطَ المستقيم»</b>. نطلبُ من اللهِ أن يَدُلَّنا على الحقِّ ويُثبِّتَنا عليه. الهدايةُ نعمةٌ نَطلبُها كلَّ يوم. ومن اهتدى <b>أخذَ بيدِ غيرِه</b> إلى النور. كُنْ سبباً في هدايةِ من حولك.', en: 'In every unit of prayer we say: <b>"Guide us to the straight path."</b> We ask Allah to show us the truth and keep us firm on it. Guidance is a blessing we ask for daily. And whoever is guided <b>takes others by the hand</b> to the light. Be a means of guidance for those around you.' } },
  ],
  storyChoice: {
    q: { ar: 'كيف نَنالُ هدايةَ اللهِ ونورَه؟', en: 'How do we gain Allah’s guidance and light?' },
    opts: [
      { t: { ar: 'نَطلبُها من اللهِ ونَقرأُ القرآنَ ونُصلّي', en: 'We ask Allah, read the Qur’an, and pray' }, c: true,
        exp: { ar: 'نعم! «اهدِنا الصراطَ المستقيم». اطلُبِ الهدى وخُذْ بأسبابِها.', en: 'Yes! "Guide us to the straight path." Ask for guidance and take its means.' } },
      { t: { ar: 'نَنتظرُ بلا طلبٍ ولا عمل', en: 'We wait without asking or doing' }, c: false,
        exp: { ar: 'لا، فالهدى يُطلَبُ من اللهِ ويُؤخَذُ بأسبابِه: القرآنِ والصلاة.', en: 'No — guidance is asked of Allah and sought by its means: Qur’an and prayer.' } },
      { t: { ar: 'نَتبعُ كلَّ ما نراه بلا تفكير', en: 'We follow everything we see without thought' }, c: false,
        exp: { ar: 'لا، بل نتّبعُ هدى اللهِ ونطلبُ منه أن يَدُلَّنا على الحق.', en: 'No — we follow Allah’s guidance and ask Him to show us the truth.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ﴾', ref: { ar: 'النور ٣٥', en: 'An-Nur 35' } },
    dua:  { ar: 'اللّهُمَّ يا هادي اهدِني وسدِّدني، واجعلني هادياً مهديّاً', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ الهداية', en: 'The Guidance Pledge' },
      lines: [
        { ar: 'أطلبُ الهدايةَ من اللهِ كلَّ يومٍ في صلاتي.', en: 'I ask Allah for guidance every day in my prayer.' },
        { ar: 'أقرأُ القرآنَ فيَزدادُ نورُ قلبي.', en: 'I read the Qur’an, and my heart’s light grows.' },
        { ar: 'أُصاحِبُ الطيّبينَ الذين يَدُلّونني على الخير.', en: 'I keep good company who guide me to good.' },
        { ar: 'أَدُلُّ أصدقائي على الخيرِ وأدعو لهم بالهدى.', en: 'I guide my friends to good and pray for their guidance.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'مَن يَهدي القلوبَ إلى الحق؟', en: 'Who guides hearts to the truth?' },
          options: [ { ar: 'اللهُ الهادي وحدَه', en: 'Allah, Al-Hadi, alone' }, { ar: 'الناسُ وحدَهم', en: 'People alone' }, { ar: 'لا أحد', en: 'No one' } ], answer: 0 },
        { q: { ar: 'ماذا نطلبُ في كلِّ ركعة؟', en: 'What do we ask in every unit of prayer?' },
          options: [ { ar: '«اهدِنا الصراطَ المستقيم»', en: '"Guide us to the straight path"' }, { ar: 'المال', en: 'Money' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
        { q: { ar: 'ما أسبابُ الهداية؟', en: 'What are the means of guidance?' },
          options: [ { ar: 'القرآنُ والصلاةُ والصُّحبةُ الطيّبة', en: 'Qur’an, prayer, and good company' }, { ar: 'اللعبُ فقط', en: 'Only play' }, { ar: 'لا شيء', en: 'Nothing' } ], answer: 0 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'إبراهيم', en: 'Ibrahim' }, b: { ar: 'طلبَ الحقَّ فهداه الله', en: 'Sought truth and was guided' } },
        { a: { ar: 'النجوم', en: 'The stars' }, b: { ar: 'يَهتدي بها المسافر', en: 'Guide the traveler' } },
        { a: { ar: 'عمر', en: 'Umar' }, b: { ar: 'هداه اللهُ بالقرآن', en: 'Allah guided him by the Qur’an' } },
        { a: { ar: '«اهدِنا»', en: '"Guide us"' }, b: { ar: 'نطلبُها في الصلاة', en: 'We ask it in prayer' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'الهدايةُ بيدِ اللهِ وحدَه.', en: 'Guidance is in Allah’s hand alone.' }, t: true },
        { statement: { ar: 'الهدايةُ أقلُّ نعمةٍ من المال.', en: 'Guidance is a lesser blessing than money.' }, t: false },
        { statement: { ar: 'القرآنُ نورٌ يَهدي القلب.', en: 'The Qur’an is a light that guides the heart.' }, t: true },
        { statement: { ar: 'لا فائدةَ من طلبِ الهداية.', en: 'There is no benefit in asking for guidance.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ الهداية', en: 'Medal of Guidance' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الهادي» اخلِطْ هذه في يومِك 🪄', en: 'To live the name "Al-Hadi", mix these into your day 🪄' },
      steps: [
        { icon: '🤲', ar: 'أطلبُ الهدايةَ من اللهِ في صلاتي ودعائي.', en: 'I ask Allah for guidance in my prayer and du‘a.' },
        { icon: '📖', ar: 'أقرأُ القرآنَ ولو آيةً كلَّ يومٍ فيَنوّرُ قلبي.', en: 'I read the Qur’an, even a verse daily, lighting my heart.' },
        { icon: '👬', ar: 'أُصاحِبُ الطيّبينَ وأبتعدُ عن رفقةِ السوء.', en: 'I keep good company and avoid bad company.' },
        { icon: '🌟', ar: 'أَدُلُّ أصدقائي على الخيرِ وأدعو لهم بالهدى.', en: 'I guide my friends to good and pray for their guidance.' },
      ],
      result: { ar: 'قلبٌ منوَّرٌ بالهدى، يَمشي على الحقِّ ويَدُلُّ غيرَه على النور! 🌟', en: 'A heart lit with guidance, walking on truth and guiding others to the light! 🌟' },
    },
    stickers: [
      { icon: 'light',    color: '#C79A2C', title: { ar: 'نورُ الهداية', en: 'Light of Guidance' } },
      { icon: 'star',     color: '#DDB048', title: { ar: 'نجمةُ الطريق', en: 'Star of the Path' } },
      { icon: 'crescent', color: '#B0851F', title: { ar: 'هلالُ النور', en: 'Crescent of Light' } },
      { icon: 'heart',    color: '#BE9028', title: { ar: 'قلبٌ مهتدٍ', en: 'A Guided Heart' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «الهادي النورَ» يَهدي القلوبَ ويُنوّرُها، والهدايةُ بيدِه وحدَه، فمن أحبَّه طلبَ منه الهدى وأخذَ بأسبابِها، ودلَّ غيرَه على الخير.', en: 'We learned that Allah "Al-Hadi An-Nur" guides hearts and lights them, and guidance is in His hand alone — whoever loves Him asks Him for guidance, takes its means, and guides others to good.' },
    reflect: [
      { ar: 'ما الذي يَزيدُ نورَ قلبِك وقُربَك من الله؟', en: 'What increases your heart’s light and nearness to Allah?' },
      { ar: 'مَن تُحبُّ أن تَدعوَ اللهَ أن يَهديَه؟', en: 'Whom would you love to ask Allah to guide?' },
    ],
  },
};
