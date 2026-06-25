// data/chapters/salih.js — Era I · Salih عليه السلام  (قوم ثمود والناقة)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.salih = {
  id: 'salih', era: 'prophets', icon: 'camel',
  name: { ar: 'صالِحٌ عليه السلام', en: 'Salih' },
  tag:  { ar: 'نبيُّ ثمودَ وناقةِ الله', en: 'The Prophet of Thamud & the she-camel' },
  accent: '#C2691A', accent2: '#E08A38',
  greeting: { ar: 'مرحباً يا بطل! صالحٌ عليه السلام أُرسِلَ إلى قومِ ثمود، وجاءهم بمعجزةٍ عجيبة: ناقةٌ خرجتْ مِن صخرة! تعالَ نتعلّمُ الرحمةَ بالمخلوقات.', en: 'Hello, hero! Salih was sent to the people of Thamud with an amazing miracle: a she-camel that came out of a rock! Come, let\'s learn mercy to all creatures.' },

  knowledge: {
    didYouKnow: { ar: 'كان قومُ ثمودَ ينحتونَ بيوتَهم داخلَ الجبالِ الصخريّة بمهارةٍ عجيبة!', en: 'The people of Thamud skillfully carved their homes inside rocky mountains!' },
    who: {
      ar: 'صالحٌ عليه السلام نبيٌّ مِن قومِ <b>ثمود</b>، وكانوا أقوياءَ ماهرينَ ينحتونَ البيوتَ في الجبال. عبدوا الأصنام، فدعاهم صالحٌ إلى اللهِ وحدَه. طلبوا معجزة، فأخرجَ اللهُ لهم <b>ناقةً عظيمة</b> مِن صخرةٍ آية. فلمّا عقروها (قتلوها) ظُلماً، أهلكهمُ الله.',
      en: 'Salih was a prophet from the people of <b>Thamud</b>, who were strong and skilled, carving homes into mountains. They worshipped idols, so Salih called them to Allah alone. They demanded a miracle, so Allah brought forth a <b>great she-camel</b> from a rock as a sign. When they wrongfully killed her, Allah destroyed them.',
    },
    facts: [
      { ar: 'نحتَ قومُ ثمودَ بيوتَهم في الجبالِ الصخرية.', en: 'Thamud carved their homes into rocky mountains.' },
      { ar: 'طلبوا معجزة، فأخرجَ اللهُ ناقةً مِن صخرة.', en: 'They asked for a miracle, so Allah brought a camel from a rock.' },
      { ar: 'كانتِ الناقةُ تشربُ يوماً وهم يوماً، ونُهوا عن أذاها.', en: 'The camel drank one day and they the next; they were told not to harm her.' },
      { ar: 'عقروا الناقةَ ظُلماً، فأهلكهمُ اللهُ بصيحةٍ عظيمة.', en: 'They wrongfully killed her, so Allah destroyed them with a mighty blast.' },
    ],
    timeline: [
      { when:{ar:'ثمود',en:'Thamud'}, what:{ar:'قومٌ ماهرونَ نحتوا بيوتَهم في الصخر.',en:'Skilled people who carved homes in stone.'} },
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعاهم صالحٌ إلى عبادةِ اللهِ وحدَه.',en:'Salih called them to worship Allah alone.'} },
      { when:{ar:'الناقة',en:'The Camel'}, what:{ar:'أخرجَ اللهُ ناقةً مِن صخرةٍ آيةً لهم.',en:'Allah brought a camel from a rock as a sign.'} },
      { when:{ar:'العَقر',en:'The Killing'}, what:{ar:'عقرها الأشرارُ ظُلماً وتكبّراً.',en:'The wicked ones killed her out of pride.'} },
      { when:{ar:'الصيحة',en:'The Blast'}, what:{ar:'جاءتِ الصيحةُ، ونجا صالحٌ والمؤمنون.',en:'The blast came; Salih and the believers were saved.'} },
    ],
    ayah: { ar: '﴿ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً ﴾', ref:{ ar:'الأعراف ٧٣', en:"Al-A'raf 73" } },
  },

  story: [
    { scene:'dwellings', text:{ ar:'كانَ قَوْمُ <b>ثَمود</b> أَقْوِياءَ ماهِرين، يَنْحِتونَ بُيوتَهُمُ الجَميلَةَ في الجِبالِ الصَّخْرِيَّةِ بِمَهارَةٍ عَجيبَة، ولَهُمْ جَنّاتٌ وعُيونٌ وزُروع. أَعْطاهُمُ اللهُ خَيْراتٍ كَثيرَة، لكِنَّهُمْ عَبَدوا أَصْناماً ونَسَوْا رَبَّهُمْ.',
      en:'The people of <b>Thamud</b> were strong and skilled, carving their beautiful homes into rocky mountains with amazing skill, with gardens, springs and crops. Allah gave them many blessings, but they worshipped idols and forgot their Lord.' } },
    { scene:'call', text:{ ar:'أَرْسَلَ اللهُ إِلَيْهِمْ أَخاهُمْ <b>صالِحاً</b>، وكانَ مَحْبوباً فيهِمْ قَبْلَ الدَّعْوَة، يَدْعوهُمْ: «يا قَوْمِ اعْبُدوا اللهَ وَحْدَهُ، ما لَكُمْ مِنْ إِلهٍ غَيْرُه». فقالوا: إِنْ كُنْتَ صادِقاً فَأْتِنا بِآيَةٍ عَجيبَةٍ نَراها بِأَعْيُنِنا!',
      en:'Allah sent them their brother <b>Salih</b>, who had been beloved among them before his call, saying: "O my people, worship Allah alone; you have no god but Him." They said: If you are truthful, bring us an amazing sign we can see with our own eyes!' } },
    { scene:'camel', text:{ ar:'فَدَعا صالِحٌ رَبَّهُ، فَأَخْرَجَ اللهُ لَهُمْ <b>ناقَةً عَظيمَةً مِنَ الصَّخْرَة</b> أَمامَ أَعْيُنِهِمْ — مُعْجِزَةً واضِحَة! وقالَ صالِح: هذِهِ ناقَةُ الله، اتْرُكوها تَأْكُلُ في أَرْضِ الله، لَها يَوْمٌ تَشْرَبُ فيهِ ولَكُمْ يَوْم، ولا تَمَسّوها بِسوء.',
      en:'So Salih called upon his Lord, and Allah brought out for them a <b>great she-camel from the rock</b> before their very eyes — a clear miracle! Salih said: This is Allah\'s camel; let her graze in Allah\'s land. She has a day to drink and you have a day — and do not touch her with harm.' },
      choice:{ q:{ar:'كَيْفَ كانَ يَجِبُ أَنْ يُعامِلوا ناقَةَ الله؟',en:'How should they have treated Allah\'s camel?'},
        opts:[
          { t:{ar:'يَحْمونَها ويَرْفُقونَ بِها',en:'Protect her and be gentle with her'}, c:true, exp:{ar:'نعم! كانَتْ آيَةً مِنَ الله، والرِّفْقُ بِالحَيَوانِ مِنَ الإيمان. مَنْ رَحِمَ المَخْلوقاتِ رَحِمَهُ الله.',en:'Yes! She was a sign from Allah, and kindness to animals is part of faith. Whoever shows mercy to creatures, Allah shows mercy to them.'} },
          { t:{ar:'يَطْرُدونَها بَعيداً',en:'Chase her far away'}, c:false, exp:{ar:'لا، فَقَدْ أُمِروا بِحِمايَتِها وعَدَمِ أَذاها.',en:'No — they were ordered to protect her and not harm her.'} },
          { t:{ar:'يَمْنَعونَها مِنَ الماء',en:'Stop her from drinking'}, c:false, exp:{ar:'لا، فَقَدْ جَعَلَ اللهُ لَها يَوْماً تَشْرَبُ فيهِ.',en:'No — Allah gave her a day to drink.'} },
        ] } },
    { scene:'camel', text:{ ar:'عاشَتِ النّاقَةُ بَيْنَهُمْ زَماناً، تَشْرَبُ يَوْمَها وتُعْطيهِمْ لَبَناً كَثيراً يَكْفي الجَميع. كانَتْ نِعْمَةً ورَحْمَة. لكِنَّ المُتَكَبِّرينَ كَرِهوا أَنْ يُشارِكوها الماء، وكَرِهوا أَنْ يُؤْمَروا، فَبَدَأَ الحَسَدُ يَكْبُرُ في قُلوبِهِمْ.',
      en:'The camel lived among them for a time, drinking on her day and giving them abundant milk enough for all. She was a blessing and a mercy. But the arrogant ones hated sharing the water with her, and hated being commanded — and envy began to grow in their hearts.' } },
    { scene:'camel', text:{ ar:'فاتَّفَقَ تِسْعَةٌ مِنْ أَشْقى القَوْمِ على قَتْلِها. وخَرَجَ أَشْقاهُمْ فَعَقَرَ النّاقَةَ ظُلْماً وعُدْواناً، وتَبِعَهُ الباقون. فَهَرَبَ وَلَدُها الصَّغيرُ إلى الجَبَلِ يَصيحُ حُزْناً، ولَمْ يَسْتَمِعوا لِتَحْذيرِ صالِح.',
      en:'So nine of the wickedest people agreed to kill her. The worst of them went out and cruelly hamstrung the camel, and the rest followed him. Her young calf fled to the mountain crying in sorrow, and they would not listen to Salih\'s warning.' } },
    { scene:'wind', text:{ ar:'قالَ صالِح: تَمَتَّعوا في بُيوتِكُمْ ثَلاثَةَ أَيّامٍ فَقَط! وجَعَلَ اللهُ لَهُمْ عَلامَة: في اليَوْمِ الأَوَّلِ تَصْفَرُّ وُجوهُهُمْ، وفي الثّاني تَحْمَرُّ، وفي الثّالِثِ تَسْوَدّ. بَلْ تَجَرَّأَ بَعْضُهُمْ على قَتْلِ صالِحٍ نَفْسِهِ، لكِنَّ اللهَ حَماهُ مِنْهُمْ.',
      en:'Salih said: Enjoy your homes for just three days! And Allah made a sign for them: on the first day their faces would turn yellow, on the second red, and on the third black. Some even dared to plot the killing of Salih himself, but Allah protected him from them.' } },
    { scene:'wind', text:{ ar:'وفي اليَوْمِ الثّالِثِ جاءَتْهُمْ <b>صَيْحَةٌ عَظيمَة</b> ورَجْفَةٌ شَديدَة، فَلَمْ تَنْفَعْهُمْ بُيوتُهُمُ القَوِيَّةُ في الجِبال، وأَصْبَحوا هامِدينَ في دِيارِهِمْ. ونَجّى اللهُ صالِحاً والمُؤْمِنينَ مَعَهُ بِرَحْمَتِهِ.',
      en:'On the third day a <b>mighty blast</b> and a violent quake came upon them. Their strong mountain homes did not help them, and they lay still and lifeless in their dwellings. And Allah saved Salih and the believers with him by His mercy.' } },
  ],

  traits: [
    { ar:'الرحمة', en:'Mercy' }, { ar:'العدل', en:'Justice' },
    { ar:'الحكمة', en:'Wisdom' }, { ar:'الثبات', en:'Steadfastness' },
  ],
  lessons: [
    { icon:'🐪', color:'#C2691A', title:{ar:'ارحمِ الحيوان',en:'Be merciful to animals'},
      body:{ar:'كانتِ الناقةُ آيةً مِن الله، فلمّا عقروها ظُلماً جاءهمُ العذاب. الرِّفقُ بالحيوانِ مِن الإيمان.',en:'The she-camel was a sign from Allah; when they wrongfully killed her, the punishment came. Kindness to animals is part of faith.'},
      apply:{ar:'أرفُقُ بالحيواناتِ وأُطعمُها ولا أؤذيها.',en:'I am gentle to animals, feed them, and never harm them.'} },
    { icon:'🌿', color:'#1ABC9C', title:{ar:'احفظْ ما خلقَ الله',en:'Protect Allah\'s creation'},
      body:{ar:'أمرَ صالحٌ قومَه أن يتركوا الناقةَ تأكلُ في أرضِ الله. كلُّ ما خلقه اللهُ أمانةٌ نحفظُها.',en:'Salih ordered his people to let the camel graze in Allah\'s land. All that Allah created is a trust we protect.'},
      apply:{ar:'أحافظُ على النباتِ والماءِ والحيوانِ مِن حولي.',en:'I take care of the plants, water and animals around me.'} },
    { icon:'🚫', color:'#7D5A50', title:{ar:'لا تتبعِ الأشرار',en:'Don\'t follow wrongdoers'},
      body:{ar:'أقدمَ أشقى القومِ على قتلِ الناقة، وتبِعه الباقون فهلكوا جميعاً. لا تتبعِ الجماعةَ في الخطأ.',en:'The worst of the people killed the camel and the rest followed him, so all perished. Never follow the crowd into wrong.'},
      apply:{ar:'لا أُشاركُ أصدقائي في فعلٍ خاطئٍ مهما أصرّوا.',en:'I won\'t join my friends in doing wrong, however much they insist.'} },
    { icon:'⏰', color:'#E08A38', title:{ar:'بادِرْ بالتوبة',en:'Hurry to repent'},
      body:{ar:'أمهلهمُ اللهُ ثلاثةَ أيّامٍ ليتوبوا فلم يفعلوا. لا تُؤجِّلِ التوبةَ والإصلاح؛ فالفرصةُ قد تَفوت.',en:'Allah gave them three days to repent, but they did not. Do not delay repentance and making amends; the chance may pass.'},
      apply:{ar:'إذا أخطأتُ أُصلِحُ خطئي بسرعةٍ ولا أقول «لاحقاً».',en:'When I do wrong, I fix it quickly and don\'t say "later."'} },
    { icon:'🗣️', color:'#8E44AD', title:{ar:'انصحْ بالحكمة',en:'Advise with wisdom'},
      body:{ar:'دعا صالحٌ قومَه بكلامٍ واضحٍ لطيفٍ وحذّرهم برِفق. النصيحةُ الحسنةُ بابُها اللِّينُ والحكمة.',en:'Salih called his people with clear, gentle words and warned them kindly. Good advice begins with softness and wisdom.'},
      apply:{ar:'أنصحُ غيري بكلامٍ طيّبٍ يجعلُه يستمعُ لي.',en:'I advise others with good words that make them want to listen.'} },
  ],

  memorize: {
    hadith:{ ar:'«في كلِّ ذاتِ كبدٍ رطبةٍ أجر» — في الرحمةِ بالحيوان', en:"\"In every living creature there is a reward\" — for showing mercy to animals.", ref:{ ar:'[رواه البخاري ٢٣٦٣، ومسلم ٢٢٤٤]', en:'[Bukhari 2363 & Muslim 2244]' } },
    ayah:{ ar:'﴿ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً ۖ فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ ﴾', ref:{ ar:'الأعراف ٧٣', en:"Al-A'raf 73" } },
    dua: { ar:'وَاسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ', ref:{ ar:'هود ٦١', en:'Hud 61' } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أرفُقُ بالحيواناتِ ولا أُؤذيها.', en:'I will be gentle to animals and never harm them.' },
        { ar:'أحمي كلَّ ما خلقه اللهُ مِن أذى.', en:"I will protect all that Allah created from harm." },
        { ar:'لا أتبعُ الأشرارَ في فعلِ السوء.', en:'I will not follow wrongdoers into doing bad.' },
        { ar:'أشكرُ اللهَ على نِعَمِه وأطيعُه.', en:'I will thank Allah for His blessings and obey Him.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'إلى أيِّ قومٍ أُرسِلَ صالحٌ عليه السلام؟',en:'To which people was Salih sent?'},
          options:[{ar:'قومِ ثمود',en:'The people of Thamud'},{ar:'قومِ عاد',en:'The people of ʿĀd'},{ar:'بني إسرائيل',en:'The Children of Israel'}], answer:0 },
        { q:{ar:'ما المعجزةُ التي جاءَ بها صالح؟',en:'What miracle did Salih bring?'},
          options:[{ar:'ناقةٌ مِن صخرة',en:'A she-camel from a rock'},{ar:'عصاً تتحوّلُ ثعباناً',en:'A staff that turns to a snake'},{ar:'سفينةٌ كبيرة',en:'A great ark'}], answer:0 },
        { q:{ar:'ماذا فعلَ الأشرارُ بالناقة؟',en:'What did the wicked ones do to the camel?'},
          options:[{ar:'عقروها ظُلماً',en:'They wrongfully killed her'},{ar:'أطعموها',en:'They fed her'},{ar:'ركبوها',en:'They rode her'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبِ قصةَ صالح',en:'Put Salih\'s story in order'},
      items:[
        {ar:'عبدَ قومُ ثمودَ الأصنام',en:'Thamud worshipped idols'},
        {ar:'دعاهم صالحٌ إلى الله',en:'Salih called them to Allah'},
        {ar:'طلبوا معجزةً فجاءتِ الناقة',en:'They asked for a miracle; the camel came'},
        {ar:'عقروا الناقةَ ظُلماً',en:'They wrongfully killed the camel'},
        {ar:'أهلكهمُ اللهُ ونجا صالح',en:'Allah destroyed them and saved Salih'},
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'أُرسِلتُ إلى قومِ ثمود.',en:'I was sent to the people of Thamud.'},
        {ar:'كان قومي ينحتونَ بيوتَهم في الجبال.',en:'My people carved their homes in mountains.'},
        {ar:'جاءتْ على يديَّ ناقةٌ مِن صخرةٍ معجزة.',en:'A miraculous camel came from a rock through me.'},
        {ar:'عقرَ قومي الناقةَ فأهلكهمُ الله.',en:'My people killed the camel, so Allah destroyed them.'},
      ],
      options:[{ar:'صالح',en:'Salih'},{ar:'هود',en:'Hud'},{ar:'نوح',en:'Nuh'}], answer:0 },
  ],

  treasures: {
    medal:{ ar:'وِسامُ الرَّحمة', en:'Medal of Mercy' },
    stickers:[
      { icon:'camel',    color:'#C2691A', title:{ar:'ناقةُ الله',en:"Allah's Camel"} },
      { icon:'mountain', color:'#8D6E63', title:{ar:'بيوتُ الصخر',en:'Homes of Stone'} },
      { icon:'heart',    color:'#E06898', title:{ar:'قلبٌ رحيم',en:'A Merciful Heart'} },
      { icon:'star',     color:'#F4D03F', title:{ar:'نجمُ النجاة',en:'Star of Rescue'} },
    ],
    moral:{ ar:'مَن رحِمَ المخلوقاتِ رحِمه الله؛ والبطلُ لا يتبعُ الأشرارَ في الأذى.', en:'Whoever shows mercy to creatures, Allah shows mercy to them — and a hero never follows wrongdoers into harm.' },
    reflect:[
      { ar:'كيف تعاملُ الحيواناتِ والمخلوقاتِ مِن حولك؟ هل تستطيعُ أن ترفُقَ بها أكثر؟', en:'How do you treat the animals and creatures around you? Can you be even gentler with them?' },
      { ar:'هل دفعك أصدقاؤك يوماً لِفعلِ شيءٍ خاطئ؟ ماذا ستفعلُ في المرّةِ القادمة؟', en:'Have friends ever pushed you to do something wrong? What will you do next time?' },
    ],
  },
};
