// data/chapters/sulayman.js — Era I · Sulayman عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.sulayman = {
  id: 'sulayman', era: 'prophets', icon: 'crown',
  name: { ar: 'سُليمانُ عليه السلام', en: 'Sulayman' },
  tag:  { ar: 'المَلِكُ الذي كلّمَ الطيرَ والنمل', en: 'The king who spoke to birds and ants' },
  accent: '#A6792E', accent2: '#D4A53A',
  greeting: { ar: 'أهلاً يا بطل! سُليمانُ عليه السلام كان مَلِكاً عجيباً: يفهمُ لغةَ الطيرِ والنمل، وتطيعه الريحُ والجِنّ! لكنّ أجملَ ما فيه أنّه كان شاكراً متواضعاً. تعالَ نكتشفْ مُلكَه العظيم.', en: "Hello, hero! Sulayman was an amazing king: he understood the language of birds and ants, and the wind and jinn obeyed him! But the best thing about him was that he was grateful and humble. Come, let's discover his great kingdom." },

  knowledge: {
    didYouKnow: { ar: 'سُليمانُ عليه السلام فهمَ كلامَ نملةٍ صغيرةٍ تُحذِّرُ بناتِها، فتبسّمَ وشكرَ الله!', en: 'Sulayman understood the speech of a tiny ant warning her companions, and he smiled and thanked Allah!' },
    who: {
      ar: 'سُليمانُ عليه السلام نبيٌّ ومَلِكٌ، وهو ابنُ النبيِّ <b>داوُد</b>. أعطاه اللهُ مُلكاً عظيماً لم يُعطَه أحدٌ بعدَه: <b>يفهمُ لغةَ الطيرِ والحيوان</b>، وتجري الريحُ بأمرِه، ويعملُ له الجِنُّ ما يشاء. ومع كلِّ هذا المُلكِ كان <b>شاكراً متواضعاً</b> يحكمُ بالعدلِ ويدعو إلى الله.',
      en: "Sulayman was a prophet and king, son of the prophet <b>Dawud</b>. Allah gave him a kingdom unlike any after him: he <b>understood the language of birds and animals</b>, the wind ran at his command, and the jinn worked for him as he wished. Yet with all this power he was <b>grateful and humble</b>, ruling with justice and calling people to Allah.",
    },
    facts: [
      { ar: 'ورِثَ النبوّةَ والمُلكَ مِن أبيه داوُد.', en: 'He inherited prophethood and kingship from his father Dawud.' },
      { ar: 'علّمه اللهُ منطقَ الطيرِ ولغةَ الحيوان.', en: 'Allah taught him the speech of birds and animals.' },
      { ar: 'سخّرَ اللهُ له الريحَ والجِنَّ تعملُ بأمرِه.', en: 'Allah made the wind and the jinn serve at his command.' },
      { ar: 'دعا مَلِكةَ سبأ لِترُكَ عبادةِ الشمسِ وعبادةِ الله.', en: 'He called the Queen of Sheba to leave sun-worship and worship Allah.' },
    ],
    timeline: [
      { when:{ar:'الميراث',en:'Inheritance'}, what:{ar:'ورِثَ المُلكَ والنبوّةَ مِن داوُد.',en:'He inherited kingship & prophethood from Dawud.'} },
      { when:{ar:'العطاء',en:'The Gifts'}, what:{ar:'فهمَ الطيرَ وسُخِّرتْ له الريحُ والجِنّ.',en:'He understood birds; wind & jinn served him.'} },
      { when:{ar:'النملة',en:'The Ant'}, what:{ar:'سمعَ نملةً فتبسّمَ وشكرَ الله.',en:'He heard an ant, smiled and thanked Allah.'} },
      { when:{ar:'الهُدهُد',en:'The Hoopoe'}, what:{ar:'أخبره الهُدهُدُ عن مَلِكةِ سبأ.',en:'The hoopoe told him about the Queen of Sheba.'} },
      { when:{ar:'سبأ',en:'Sheba'}, what:{ar:'دعا المَلِكةَ لِعبادةِ اللهِ فآمنتْ.',en:'He called the Queen to worship Allah; she believed.'} },
      { when:{ar:'الشُّكر',en:'Gratitude'}, what:{ar:'شكرَ اللهَ على مُلكِه ولم يتكبّر.',en:'He thanked Allah for his kingdom, never arrogant.'} },
    ],
    ayah: { ar: '﴿ وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ ﴾', ref: { ar: 'النمل ١٦', en: 'An-Naml 16' } },
  },

  story: [
    { scene:'throne', text:{ ar:'ورِثَ سُليمانُ عليه السلام النبوّةَ والمُلكَ مِن أبيه داوُد. ودعا ربَّه أن يَهَبَه مُلكاً لا ينبغي لأحدٍ مِن بعدِه، فاستجابَ اللهُ له. لكنّه لم يطلبِ المُلكَ لِيتكبّر، بل لِيخدمَ به دينَ اللهِ والناس.',
      en:'Sulayman inherited prophethood and kingship from his father Dawud. He asked his Lord to grant him a kingdom no one after him would have, and Allah answered him. But he did not seek power to be arrogant — he sought it to serve Allah\'s religion and people.' } },
    { scene:'wind', text:{ ar:'أعطاه اللهُ عطايا عجيبة: <b>سخّرَ له الريحَ</b> تحملُه حيثُ يشاءُ في يومٍ واحد، وجعلَ <b>الجِنَّ</b> تعملُ له ما يريدُ مِن بناءٍ وصناعة، و<b>علّمه لغةَ الطيرِ والحيوان</b>. وجمعَ جنودَه مِن الإنسِ والجِنِّ والطيرِ في نظامٍ بديع.',
      en:'Allah gave him wondrous gifts: He <b>made the wind serve him</b>, carrying him wherever he wished in a single day; He made the <b>jinn</b> work for him in building and crafts; and He <b>taught him the language of birds and animals</b>. He gathered his troops of humans, jinn and birds in a magnificent order.' } },
    { scene:'ant', text:{ ar:'وذاتَ يومٍ مرَّ جيشُ سُليمانَ على <b>وادي النمل</b>. فقالتْ نملةٌ صغيرةٌ تُحذِّرُ صُويحباتِها: «يا أيُّها النملُ ادخلوا مساكنَكم لا يَحطِمنَّكم سُليمانُ وجنودُه وهم لا يشعرون!». فسمعها سُليمانُ <b>فتبسّمَ ضاحكاً</b> وشكرَ اللهَ على نعمةِ فهمِ لغتِها، ودعا أن يُوفِّقَه للشُّكر.',
      en:'One day Sulayman\'s army passed by the <b>Valley of the Ants</b>. A tiny ant warned her companions: "O ants, enter your homes so Sulayman and his soldiers do not crush you without noticing!" Sulayman heard her, <b>smiled with delight</b>, thanked Allah for the gift of understanding her speech, and prayed to be guided to gratitude.' },
      choice:{ q:{ar:'ماذا فعلَ سُليمانُ حين سمعَ النملةَ رغمَ كلِّ مُلكِه؟',en:'What did Sulayman do when he heard the ant, despite all his power?'},
        opts:[
          { t:{ar:'تبسّمَ وشكرَ اللهَ ولم يتكبّر',en:'He smiled and thanked Allah, never arrogant'}, c:true, exp:{ar:'نعم! المؤمنُ القويُّ يبقى متواضعاً شاكراً، ويرحمُ حتى أصغرَ المخلوقات.',en:'Yes! The strong believer stays humble and grateful, and shows mercy even to the smallest creatures.'} },
          { t:{ar:'غضِبَ مِن النملة',en:'He got angry at the ant'}, c:false, exp:{ar:'لا، بل تبسّمَ ورحمَ النملَ وأمرَ بالحَذَر.',en:'No — he smiled, had mercy on the ants, and took care.'} },
          { t:{ar:'تكبّرَ بِمُلكِه',en:'He grew proud of his power'}, c:false, exp:{ar:'لا، بل شكرَ اللهَ وتواضعَ له.',en:'No — he thanked Allah and was humble before Him.'} },
        ] } },
    { scene:'birds', text:{ ar:'تفقّدَ سُليمانُ طيورَه فلم يجدِ <b>الهُدهُد</b>. فلمّا جاءَ، أخبره بخبرٍ عظيم: «وجدتُ في أرضِ <b>سبأ</b> مَلِكةً وقومَها <b>يسجدونَ للشمسِ</b> مِن دونِ الله!». فأرسلَ سُليمانُ مع الهُدهُدِ رسالةً يدعو فيها المَلِكةَ إلى عبادةِ اللهِ وحدَه.',
      en:'Sulayman inspected his birds and did not find the <b>hoopoe</b>. When it came, it brought great news: "I found in the land of <b>Sheba</b> a queen and her people <b>bowing to the sun</b> instead of Allah!" So Sulayman sent a letter with the hoopoe, calling the queen to worship Allah alone.' } },
    { scene:'throne', text:{ ar:'أرادتِ المَلِكةُ أن تختبرَ سُليمان، فأرسلتْ إليه هدايا، لكنّه ردَّها وقال: ما عندَ اللهِ خيرٌ. ثم أحضرَ <b>عرشَها</b> في طَرفةِ عينٍ بإذنِ الله! فلمّا جاءتْ ورأتْ مُلكَ سُليمانَ العظيم، عرفتْ أنّ هذا ليس مُلكَ بشرٍ عاديّ، <b>فآمنتْ بالله</b> وقالت: «ربِّ إنّي ظلمتُ نفسي وأسلمتُ مع سُليمانَ لله ربِّ العالمين».',
      en:'The queen wished to test Sulayman, so she sent him gifts, but he returned them, saying: what Allah has is better. Then he had her <b>throne</b> brought in the blink of an eye, by Allah\'s leave! When she came and saw Sulayman\'s great kingdom, she knew this was no ordinary man\'s power, and <b>she believed in Allah</b>, saying: "My Lord, I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds."' } },
  ],

  traits: [
    { ar:'الشُّكر', en:'Gratitude' }, { ar:'التواضع', en:'Humility' },
    { ar:'الحِكمة', en:'Wisdom' }, { ar:'الرحمةُ بالخلق', en:'Mercy to creatures' },
  ],
  lessons: [
    { icon:'🙏', color:'#A6792E', title:{ar:'اشكُرْ على النِّعَم',en:'Be grateful for blessings'},
      body:{ar:'كلّما زادتْ نِعَمُ سُليمانَ زادَ شُكرُه، ولم يتكبّر. كلُّ نعمةٍ عندك هي مِن اللهِ تستحقُّ الشُّكر.',en:'The more blessings Sulayman had, the more he thanked Allah and the more humble he stayed. Every blessing you have is from Allah and deserves thanks.'},
      apply:{ar:'أقولُ «الحمدُ لله» على كلِّ نعمةٍ صغيرةٍ وكبيرة.',en:'I say "All praise to Allah" for every blessing, small and large.'} },
    { icon:'🐜', color:'#5DA236', title:{ar:'ارحمِ المخلوقات',en:'Be merciful to creatures'},
      body:{ar:'رحمَ سُليمانُ نملةً صغيرةً وأمرَ بالحَذَرِ عليها. الرحمةُ بالضعيفِ والصغيرِ مِن أخلاقِ الأبطال.',en:'Sulayman had mercy on a tiny ant and took care for it. Mercy to the weak and small is the character of heroes.'},
      apply:{ar:'أرفُقُ بالحيواناتِ والصغارِ ولا أؤذي مخلوقاً.',en:'I am gentle with animals and little ones and harm no creature.'} },
    { icon:'👑', color:'#E67E22', title:{ar:'القوّةُ للخير',en:'Use strength for good'},
      body:{ar:'استخدمَ سُليمانُ مُلكَه العظيمَ لِنشرِ التوحيدِ والعدل، لا لِلظُّلمِ والكِبر. القوّةُ أمانةٌ تُستعمَلُ في الخير.',en:'Sulayman used his great power to spread belief in Allah and justice — not oppression and pride. Power is a trust, used for good.'},
      apply:{ar:'إذا قَوِيتُ أو نجحتُ، أستعملُ ذلك لِمساعدةِ غيري.',en:'If I become strong or succeed, I use it to help others.'} },
    { icon:'🤲', color:'#8E44AD', title:{ar:'ادعُ اللهَ بِهِمّةٍ عالية',en:'Ask Allah for great things'},
      body:{ar:'دعا سُليمانُ ربَّه أن يَهَبَه مُلكاً عظيماً فأعطاه. اطلبْ مِن اللهِ الخيرَ الكبيرَ، فخزائنُه لا تنفد.',en:'Sulayman asked his Lord for a great kingdom and was granted it. Ask Allah for great good — His treasures never run out.'},
      apply:{ar:'أدعو اللهَ بِأحلامي الكبيرةِ وأثِقُ بكرمِه.',en:'I pray to Allah for my big dreams and trust in His generosity.'} },
  ],

  memorize: {
    hadith:{ ar:'«إنَّ اللهَ لا ينظرُ إلى صُوَرِكم وأموالِكم، ولكن ينظرُ إلى قلوبِكم وأعمالِكم»', en:"\"Allah does not look at your forms or your wealth, but He looks at your hearts and your deeds.\"", ref:{ ar:'[رواه مسلم ٢٥٦٤]', en:'[Sahih Muslim 2564]' } },
    ayah: { ar: '﴿ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ ﴾', ref:{ ar:'النمل ١٩', en:'An-Naml 19' } },
    dua:  { ar: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ', ref:{ ar:'النمل ١٩', en:'An-Naml 19' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أشكرُ اللهَ على نِعَمِه ولا أتكبّر.', en:'I will thank Allah for His blessings and never be arrogant.' },
        { ar:'أرحمُ كلَّ مخلوقٍ حتى أصغرَه.', en:'I will be merciful to every creature, even the smallest.' },
        { ar:'أستعملُ قوّتي وما أملِكُ في الخير.', en:'I will use my strength and what I own for good.' },
        { ar:'أدعو اللهَ بِهِمّةٍ عاليةٍ وثقةٍ بكرمِه.', en:'I will pray to Allah with high ambition, trusting His generosity.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا علّمَ اللهُ سُليمانَ أن يفهم؟',en:'What did Allah teach Sulayman to understand?'},
          options:[{ar:'لغةَ الطيرِ والحيوان',en:'The language of birds and animals'},{ar:'لغةَ النجوم',en:'The language of stars'},{ar:'كلَّ اللغات',en:'All human languages'}], answer:0 },
        { q:{ar:'ماذا فعلَ حين سمعَ النملة؟',en:'What did he do when he heard the ant?'},
          options:[{ar:'تبسّمَ وشكرَ الله',en:'He smiled and thanked Allah'},{ar:'غضِب',en:'He got angry'},{ar:'لم يسمعها',en:'He didn\'t hear her'}], answer:0 },
        { q:{ar:'مَن أخبرَ سُليمانَ عن مَلِكةِ سبأ؟',en:'Who told Sulayman about the Queen of Sheba?'},
          options:[{ar:'الهُدهُد',en:'The hoopoe'},{ar:'النملة',en:'The ant'},{ar:'الريح',en:'The wind'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبْ قصةَ سُليمان',en:'Put Sulayman\'s story in order'},
      items:[
        {ar:'ورِثَ المُلكَ مِن أبيه داوُد',en:'He inherited kingship from his father Dawud'},
        {ar:'سُخِّرتْ له الريحُ والجِنُّ والطير',en:'Wind, jinn and birds were made to serve him'},
        {ar:'سمعَ النملةَ فتبسّمَ وشكرَ الله',en:'He heard the ant, smiled and thanked Allah'},
        {ar:'أخبره الهُدهُدُ عن سبأ',en:'The hoopoe told him about Sheba'},
        {ar:'دعا المَلِكةَ فآمنتْ بالله',en:'He called the queen and she believed in Allah'},
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'كان سُليمانُ نبيّاً ومَلِكاً.',en:'Sulayman was a prophet and a king.'}, t:true },
        { statement:{ar:'تكبّرَ سُليمانُ بِمُلكِه ونسِيَ الله.',en:'Sulayman grew arrogant and forgot Allah.'}, t:false },
        { statement:{ar:'فهمَ سُليمانُ كلامَ النملة.',en:'Sulayman understood the ant\'s speech.'}, t:true },
        { statement:{ar:'آمنتْ مَلِكةُ سبأ بالله مع سُليمان.',en:'The Queen of Sheba believed in Allah with Sulayman.'}, t:true },
      ] },
  ],

  treasures: {
    medal: { ar:'وِسامُ المُلكِ الشاكر', en:'Medal of the Grateful King' },
    stickers:[
      { icon:'crown', color:'#A6792E', title:{ar:'مُلكٌ عظيم',en:'A Great Kingdom'} },
      { icon:'wind',  color:'#5A9BCA', title:{ar:'ريحٌ مُطيعة',en:'The Obedient Wind'} },
      { icon:'star',  color:'#F4D03F', title:{ar:'هُدهُدُ الخبر',en:'The Hoopoe Messenger'} },
      { icon:'heart', color:'#5DA236', title:{ar:'قلبٌ شاكرٌ رحيم',en:'A Grateful, Merciful Heart'} },
    ],
    moral: { ar:'أعظمُ القوّةِ أن تبقى متواضعاً شاكراً، تستعملُ ما أعطاك اللهُ في طاعتِه ونفعِ خلقِه.', en:'The greatest strength is to stay humble and grateful, using what Allah gave you to obey Him and help His creatures.' },
    reflect:[
      {ar:'سُليمانُ شكرَ اللهَ على كلِّ نعمة. عُدَّ ثلاثَ نِعَمٍ أنعمَ اللهُ بها عليك اليوم.',en:'Sulayman thanked Allah for every blessing. Count three blessings Allah gave you today.'},
      {ar:'رحمَ سُليمانُ نملةً صغيرة. كيف يمكنُك أن تكونَ رحيماً مع حيوانٍ أو شخصٍ ضعيفٍ اليوم؟',en:'Sulayman had mercy on a tiny ant. How can you be merciful to an animal or a weak person today?'},
    ],
  },
};
