// data/stories/birth.js — Seerah · المَولِدُ المبارك (rich immersive story)
// Sources: الرحيق المختوم · ابن هشام: السيرة النبوية · ابن كثير: البداية والنهاية · سورة الفيل
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.birth = [
  {
    icon: '🐘', scene: 'desert', character: '🐘', endCharacter: '🌟',
    title: { ar: 'عامُ الفيل ومولِدُ النورِ ﷺ', en: 'The Year of the Elephant & the Birth of Light ﷺ' },
    pages: [
      { scene: 'desert', character: '👑',
        text: {
          ar: 'قَبلَ أن يُولَدَ النبيُّ ﷺ بِقَليل، حَدَثَ في بِلادِ العَرَبِ أمرٌ عَجيبٌ لم يَرَ النّاسُ مِثلَه!<br><br>في أرضِ اليَمَنِ البَعيدة، كانَ هُناكَ مَلِكٌ جَبّارٌ اسمُه <b>أَبرَهة</b>. بَنى كَنيسةً ضَخمةً جَميلة، وأرادَ أن يَصرِفَ النّاسَ عن بَيتِ اللهِ الحَرام — <b>الكَعبةِ المُشرَّفة</b> في مَكّة — إلى كَنيسَتِه. فلمّا لم يَأتِهِ أحَد، غَضِبَ غَضَباً شَديداً، وأقسَمَ أن يَهدِمَ الكَعبةَ حَجَراً حَجَراً!',
          en: 'A little before the Prophet ﷺ was born, something astonishing happened in the land of the Arabs — something no one had ever seen!<br><br>In far-off Yemen there was a tyrant king named <b>Abrahah</b>. He built a huge, beautiful church and wanted to turn people away from the Sacred House of Allah — <b>the honored Kaʿbah</b> in Makkah — toward his church. When no one came, he grew furious and swore he would tear the Kaʿbah down, stone by stone!',
        } },
      { scene: 'desert', character: '🐘',
        text: {
          ar: 'جَمَعَ أبرهةُ جَيشاً عَظيماً، وفي مُقدِّمَتِه فيلٌ ضَخمٌ اسمُه <b>مَحمود</b>، لم تَرَ العَرَبُ مِثلَه مِن قَبل! زَحَفَ الجَيشُ نَحوَ مَكّة، والأرضُ تَرتَجُّ تَحتَ أقدامِه.<br><br>خافَ أهلُ مَكّة، فلا طاقةَ لهم بِهذا الجَيشِ الجَبّار. خَرَجوا إلى الجِبال، وتَرَكوا الكَعبةَ لِرَبِّها. أمّا <b>عبدُ المُطَّلِب</b> جَدُّ النبيِّ ﷺ، فوَقَفَ شامِخاً وقال كَلِمَتَهُ المَشهورة: «إنَّ لِلبَيتِ رَبّاً يَحميه!»',
          en: 'Abrahah gathered a mighty army, and at its front marched a giant elephant named <b>Mahmud</b> — the Arabs had never seen its like! The army crept toward Makkah, the earth trembling beneath its feet.<br><br>The people of Makkah were afraid; they had no power against this enormous army. They went up into the mountains and left the Kaʿbah to its Lord. But <b>ʿAbd al-Muttalib</b>, the grandfather of the Prophet ﷺ, stood tall and spoke his famous words: "Truly the House has a Lord who will protect it!"',
        } },
      { scene: 'desert', character: '🐘',
        text: {
          ar: 'وحينَ اقتَرَبَ الجَيشُ مِن الكَعبة، حَدَثَ العَجَب! بَرَكَ الفيلُ الضَّخمُ على الأرض، ورَفَضَ أن يَتَقَدَّمَ خُطوةً واحدةً نَحوَ البَيتِ الحَرام. ضَرَبوه، وزَجَروه، ودَفَعوه — لكنَّه ما تَحَرَّك! وإذا وَجَّهوهُ إلى أيِّ جِهةٍ أُخرى هَرْوَلَ مُسرِعاً، فإذا وَجَّهوهُ نَحوَ مَكّةَ بَرَك!<br><br>هل تَظُنُّ أنَّ فيلاً يَعرِفُ حُرمةَ بَيتِ الله؟ نَعَم — اللهُ الَّذي خَلَقَه أمَرَه، فأطاع!',
          en: 'And when the army drew near the Kaʿbah, the wonder happened! The huge elephant knelt down on the ground and refused to take a single step toward the Sacred House. They struck it, scolded it, shoved it — but it would not move! Turn it toward any other direction and it would trot off quickly; turn it toward Makkah and it knelt again!<br><br>Do you think an elephant knows the sanctity of Allah\u2019s House? Yes — the Allah who created it commanded it, and it obeyed!',
        },
        choice: {
          q: { ar: 'لماذا تَوَقَّفَ الفيلُ ورَفَضَ دُخولَ مَكّة؟', en: 'Why did the elephant stop and refuse to enter Makkah?' },
          opts: [
            { t: { ar: 'لأنّه كانَ مُتعَباً مِن المَسير', en: 'Because it was tired from the march' }, c: false,
              exp: { ar: 'لا — لو كانَ تَعِباً ما هَرْوَلَ إلى الجِهاتِ الأُخرى! إنّه أمرُ اللهِ.', en: 'No — if it were tired it wouldn\u2019t trot to other directions! It was Allah\u2019s command.' } },
            { t: { ar: 'لأنَّ اللهَ أمَرَهُ بِحمايةِ بَيتِه', en: 'Because Allah commanded it to protect His House' }, c: true,
              exp: { ar: 'نَعَم! اللهُ يَحمي بَيتَهُ بِجُنودٍ لا يَعلَمُها إلّا هو.', en: 'Yes! Allah protects His House with soldiers known only to Him.' } },
            { t: { ar: 'لأنَّ أبرهةَ غَيَّرَ رَأيَه', en: 'Because Abrahah changed his mind' }, c: false,
              exp: { ar: 'لا — أبرهةُ أصَرَّ، لكنَّ اللهَ هو الَّذي مَنَع.', en: 'No — Abrahah insisted, but it was Allah who stopped them.' } },
          ],
        } },
      { scene: 'desert', character: '🕊️',
        text: {
          ar: 'ثُمَّ أرسَلَ اللهُ جُنوداً مِن السَّماء! جاءَت أسرابٌ مِن <b>الطَّيرِ الأبابيل</b>، تَحمِلُ كُلُّ طائرةٍ ثَلاثةَ أحجارٍ صَغيرةٍ مِن طينٍ مَشويّ. رَمَتِ الطُّيورُ الجَيشَ بِالحِجارة، فلم تُصِبْ حَجَرةٌ أحَداً إلّا أهلَكَتْه!<br><br>وهَكذا صارَ الجَيشُ الجَبّارُ <b>﴿كَعَصْفٍ مَأكُول﴾</b> — كأوراقِ الزَّرعِ المُحَطَّمةِ الَّتي أكَلَتها الدَّوابّ. حَمى اللهُ بَيتَهُ، وعادَ أبرهةُ خائباً مَهزوماً. وسَمَّى العَرَبُ ذلكَ العامَ: <b>عامَ الفيل</b>.',
          en: 'Then Allah sent down soldiers from the sky! Flocks of <b>birds (the Ababil)</b> came, each carrying three small stones of baked clay. The birds pelted the army with the stones, and no stone struck anyone without destroying him!<br><br>So the mighty army became <b>"like chewed-up straw"</b> — like crushed crop leaves eaten by cattle. Allah protected His House, and Abrahah returned defeated and humiliated. The Arabs named that year: <b>the Year of the Elephant</b>.',
        } },
      { scene: 'night', character: '🌙',
        text: {
          ar: 'وفي ذلكَ العامِ المُبارَك — عامِ الفيل — وُلِدَ النورُ! في صَباحِ يَومِ الاثنين، مِن شَهرِ رَبيعٍ الأوَّل، في مَكّةَ المُكَرَّمة، وُلِدَ الطِّفلُ الَّذي سَيُغَيِّرُ الدُّنيا كُلَّها: <b>مُحَمَّدُ بنُ عبدِ الله ﷺ</b>.<br><br>كانَ أبوهُ عبدُ اللهِ قد تُوُفِّيَ قَبلَ مَولِدِه، فوُلِدَ يَتيماً. أمّا أُمُّهُ فهيَ <b>آمنةُ بنتُ وَهب</b>. استَبشَرَ جَدُّه عبدُ المُطَّلِبِ فَرَحاً عَظيماً، وحَمَلَهُ إلى الكَعبة، ودَعا اللهَ وشَكَرَه، وسَمّاهُ <b>مُحَمَّداً</b> — وهوَ اسمٌ غَريبٌ لم يَكُنْ مَألوفاً عِندَ العَرَب — لِيُحمَدَ في السَّماءِ والأرض!',
          en: 'And in that blessed year — the Year of the Elephant — the Light was born! On the morning of a Monday, in the month of Rabiʿ al-Awwal, in honored Makkah, the child who would change the whole world was born: <b>Muhammad ibn ʿAbdullah ﷺ</b>.<br><br>His father ʿAbdullah had passed away before his birth, so he was born an orphan. His mother was <b>Aminah bint Wahb</b>. His grandfather ʿAbd al-Muttalib rejoiced greatly, carried him to the Kaʿbah, praised and thanked Allah, and named him <b>Muhammad</b> — a name unfamiliar among the Arabs — so that he would be praised in the heavens and the earth!',
        } },
      { scene: 'garden', character: '🌟',
        text: {
          ar: 'لقد أرادَ اللهُ أن يُولَدَ نَبيُّهُ ﷺ في عامٍ شَهِدَ فيهِ النّاسُ مُعجزةً عَظيمة — لِيَعرِفوا أنَّ هذا المَولودَ لَيسَ كَغَيرِه، وأنَّ اللهَ الَّذي حَمى بَيتَهُ مِن الفيل، سَيَحفَظُ هذا الطِّفلَ لِيَحمِلَ النورَ إلى العالَمين.<br><br>وُلِدَ ﷺ يَتيماً فَقيراً في الظّاهِر، لكنَّهُ كانَ أغنى النّاسِ بِرِعايةِ اللهِ له. فاللهُ لا يَترُكُ مَن يُحِبُّه. وكما حَفِظَ بَيتَهُ، حَفِظَ نَبيَّه ﷺ. ونَحنُ نَفرَحُ بِمَولِدِه بِأن نُحِبَّه، ونَتَّبِعَ سُنَّتَه، ونُكثِرَ مِن الصَّلاةِ عليه ﷺ.',
          en: 'Allah willed that His Prophet ﷺ be born in a year in which people witnessed a great miracle — so they would know this newborn was unlike any other, and that the Allah who protected His House from the elephant would protect this child to carry the Light to all the worlds.<br><br>He ﷺ was born an orphan, outwardly poor — yet he was the richest of people in Allah\u2019s care. For Allah never abandons the one He loves. As He protected His House, He protected His Prophet ﷺ. And we rejoice at his birth by loving him, following his Sunnah, and sending abundant blessings upon him ﷺ.',
        } },
    ],
    quiz: [
      { q: { ar: 'بِماذا سُمِّيَ العامُ الَّذي وُلِدَ فيهِ النبيُّ ﷺ؟', en: 'What was the year of the Prophet\u2019s ﷺ birth called?' },
        opts: [
          { t: { ar: 'عامُ الفيل', en: 'The Year of the Elephant' }, c: true },
          { t: { ar: 'عامُ الحُزن', en: 'The Year of Sorrow' }, c: false },
          { t: { ar: 'عامُ الفتح', en: 'The Year of Conquest' }, c: false },
        ] },
      { q: { ar: 'كيفَ حَمى اللهُ الكَعبةَ مِن جَيشِ أبرهة؟', en: 'How did Allah protect the Kaʿbah from Abrahah\u2019s army?' },
        opts: [
          { t: { ar: 'بِجَيشٍ مِن أهلِ مَكّة', en: 'With an army from Makkah' }, c: false },
          { t: { ar: 'بِالطَّيرِ الأبابيلِ وحِجارةٍ مِن السَّماء', en: 'With flocks of birds and stones from the sky' }, c: true },
          { t: { ar: 'بِريحٍ شَديدة', en: 'With a violent wind' }, c: false },
        ] },
      { q: { ar: 'مَن سَمّى النبيَّ ﷺ «مُحَمَّداً»؟', en: 'Who named the Prophet ﷺ "Muhammad"?' },
        opts: [
          { t: { ar: 'أبوهُ عبدُ الله', en: 'His father ʿAbdullah' }, c: false },
          { t: { ar: 'جَدُّهُ عبدُ المُطَّلِب', en: 'His grandfather ʿAbd al-Muttalib' }, c: true },
          { t: { ar: 'عَمُّهُ أبو طالب', en: 'His uncle Abu Talib' }, c: false },
        ] },
    ],
    moral: { ar: 'اللهُ يَحمي أولياءَه كما حَمى بَيتَه — ووُلِدَ النبيُّ ﷺ في عامِ مُعجزةٍ لِيَعرِفَ النّاسُ عَظَمةَ شَأنِه.', en: 'Allah protects those He loves as He protected His House — and the Prophet ﷺ was born in a year of miracle so people would know his great status.' },
    badge: { icon: '🌟', title: { ar: 'مُحِبُّ النبيِّ ﷺ', en: 'Lover of the Prophet ﷺ' } },
    reflect: [
      { ar: 'كيفَ نُعَبِّرُ عن حُبِّنا للنبيِّ ﷺ في حَياتِنا؟', en: 'How can we show our love for the Prophet ﷺ in our lives?' },
      { ar: 'ماذا تَعَلَّمتَ مِن وُقوفِ عبدِ المُطَّلِبِ وثِقَتِهِ بِاللهِ؟', en: 'What did you learn from ʿAbd al-Muttalib\u2019s stand and his trust in Allah?' },
      { ar: 'لماذا يُحِبُّ اللهُ أن نُكثِرَ مِن الصَّلاةِ على نَبيِّه ﷺ؟', en: 'Why does Allah love that we send abundant blessings on His Prophet ﷺ?' },
    ],
    didYouKnow: [
      { ar: 'قِصّةُ أصحابِ الفيلِ ذَكَرَها اللهُ في القرآنِ في سورةٍ كاملةٍ اسمُها «سورة الفيل». — المصدر: القرآن الكريم', en: 'The story of the People of the Elephant is told by Allah in a whole surah called "Surat al-Fil." — Source: the Holy Quran' },
      { ar: 'وُلِدَ النبيُّ ﷺ يومَ الاثنين، ولِذلكَ كانَ يَصومُ الاثنينَ شُكراً لله. — رواه مسلم ١١٦٢', en: 'The Prophet ﷺ was born on a Monday, and so he fasted Mondays in gratitude to Allah. — Muslim 1162' },
      { ar: 'اسمُ «مُحَمَّد» مَعناهُ: كَثيرُ الحَمدِ والثَّناء. — المصدر: الرحيق المختوم', en: 'The name "Muhammad" means: the one praised again and again. — Source: Ar-Raheeq Al-Makhtum' },
    ],
  },
];
