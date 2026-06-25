// data/chapters/hud.js — Era I · Hud عليه السلام  (قوم عاد)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.hud = {
  id: 'hud', era: 'prophets', icon: 'wind',
  name: { ar: 'هُودٌ عليه السلام', en: 'Hud' },
  tag:  { ar: 'نبيُّ قومِ عاد', en: 'The Prophet of the people of ʿĀd' },
  accent: '#8D6E63', accent2: '#A98274',
  greeting: { ar: 'أهلاً يا بطل! هودٌ عليه السلام أُرسِلَ إلى قومٍ أقوياءَ جدّاً اسمُهم «عاد». تعالَ نرى كيفَ أنّ القوّةَ بلا تواضعٍ لا تنفعُ صاحبَها.', en: 'Hello, hero! Hud was sent to a very strong people called ʿĀd. Come, let\'s see how strength without humility does not help a person.' },

  knowledge: {
    didYouKnow: { ar: 'كان قومُ عادٍ مِن أقوى وأطولِ الناسِ، وبنوا أبنيةً عاليةً عظيمة — لكنَّ قوّتَهم لم تنفعْهم.', en: 'The people of ʿĀd were among the tallest and strongest of people and built great towering buildings — yet their strength did not help them.' },
    who: {
      ar: 'هودٌ عليه السلام نبيٌّ مِن قومِ <b>عاد</b>، أرسله اللهُ إليهم وكانوا أقوياءَ أصحابَ حضارةٍ وبُنيان. لكنّهم <b>تكبّروا</b> بقوّتِهم وعبدوا الأصنام. دعاهمُ هودٌ إلى عبادةِ اللهِ وحدَه وشُكرِ نِعَمِه، فاستكبروا وكذّبوه.',
      en: 'Hud was a prophet from the people of <b>ʿĀd</b>. Allah sent him to them; they were strong, with great buildings and civilization. But they grew <b>arrogant</b> with their power and worshipped idols. Hud called them to worship Allah alone and thank Him, but they were proud and denied him.',
    },
    facts: [
      { ar: 'كان قومُ عادٍ أقوياءَ طوالاً، بنوا «إرَمَ ذاتَ العِماد».', en: 'ʿĀd were tall and strong; they built "Iram of the pillars".' },
      { ar: 'تكبّروا وقالوا: «مَن أشدُّ منّا قوّة؟».', en: 'They were arrogant and said: "Who is stronger than us?"' },
      { ar: 'دعاهم هودٌ إلى اللهِ فكذّبوه واستهزؤوا.', en: 'Hud called them to Allah, but they denied and mocked him.' },
      { ar: 'أرسلَ اللهُ عليهم ريحاً عظيمةً باردةً فأهلكتهم.', en: 'Allah sent upon them a great cold wind that destroyed them.' },
    ],
    timeline: [
      { when:{ar:'قوّةٌ وبُنيان',en:'Power & Buildings'}, what:{ar:'كان قومُ عادٍ أقوى الناسِ وبنوا أعظمَ المباني.',en:'ʿĀd were the strongest people and built the greatest buildings.'} },
      { when:{ar:'الكِبر',en:'Pride'}, what:{ar:'تكبّروا بقوّتِهم وعبدوا الأصنام.',en:'They grew proud of their power and worshipped idols.'} },
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعاهم هودٌ إلى عبادةِ اللهِ وحدَه.',en:'Hud called them to worship Allah alone.'} },
      { when:{ar:'التكذيب',en:'Denial'}, what:{ar:'كذّبوه وتحدَّوْه أن يأتيَهم العذاب.',en:'They denied him and dared the punishment to come.'} },
      { when:{ar:'الريح',en:'The Wind'}, what:{ar:'جاءتِ الريحُ العاتيةُ، ونجا هودٌ والمؤمنون.',en:'The fierce wind came; Hud and the believers were saved.'} },
    ],
    ayah: { ar: '﴿ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ﴾', ref:{ ar:'الأعراف ٦٥', en:"Al-A'raf 65" } },
  },

  story: [
    { scene:'dwellings', text:{ ar:'كانَ قَوْمُ <b>عاد</b> أَقْوى النّاسِ وأَطْوَلَهُمْ، بَنَوْا بُيوتاً وقُصوراً عاليَةً عَجيبَةً لَمْ يُبْنَ مِثْلُها. أَعْطاهُمُ اللهُ قُوَّةً عَظيمَةً وخَيْراتٍ كَثيرَةً مِنَ الزَّرْعِ والماء، لكِنَّهُمْ نَسَوْا مَنْ وَهَبَهُمْ كُلَّ ذلِك، وعَبَدوا أَصْناماً مِنْ حَجَر.',
      en:'The people of <b>ʿĀd</b> were the strongest and tallest of people; they built tall, amazing houses and palaces such as had never been built. Allah gave them great strength and abundant blessings of crops and water — but they forgot Who gave it all, and worshipped idols of stone.' } },
    { scene:'wind', text:{ ar:'أَرْسَلَ اللهُ إِلَيْهِمْ أَخاهُمْ <b>هوداً</b>، وكانَ مِنْ أَشْرَفِهِمْ، يَدْعوهُمْ بِرِفْق: «يا قَوْمِ اعْبُدوا اللهَ وَحْدَهُ، فهُوَ الَّذي أَعْطاكُمُ القُوَّةَ والمالَ والأَوْلاد، فاشْكُروهُ ولا تَكْفُروا نِعَمَهُ». لكِنَّهُمُ اسْتَكْبَروا ولَمْ يَسْمَعوا.',
      en:'Allah sent them their brother <b>Hud</b>, one of the noblest among them, calling them gently: "O my people, worship Allah alone — He gave you strength, wealth and children — so thank Him and do not deny His blessings." But they were arrogant and would not listen.' } },
    { scene:'dwellings', text:{ ar:'قالوا بِكِبْرٍ وغُرور: «مَنْ أَشَدُّ مِنّا قُوَّة؟!» وظَنّوا أَنَّ قُوَّتَهُمُ العَظيمَةَ تَحْميهِمْ مِنْ كُلِّ شَيء. فَنَسوا أَنَّ اللهَ الَّذي خَلَقَهُمْ أَقْوى مِنْ كُلِّ قَوِيّ.',
      en:'They said in pride and arrogance: "Who is stronger than us?!" and thought their great strength would protect them from everything. They forgot that Allah, who created them, is mightier than every mighty one.' },
      choice:{ q:{ar:'ما الَّذي جَعَلَ قَوْمَ عادٍ يُكَذِّبونَ هوداً؟',en:'What made the people of ʿĀd deny Hud?'},
        opts:[
          { t:{ar:'الكِبْرُ والاغْتِرارُ بِقُوَّتِهِمْ',en:'Pride and being deceived by their strength'}, c:true, exp:{ar:'نعم! القُوَّةُ نِعْمَة، لكِنَّ الكِبْرَ جَعَلَهُمْ يَنْسَوْنَ اللهَ ويَظُنّونَ أَنَّهُمْ لا يُهْزَمون.',en:'Yes! Strength is a blessing, but pride made them forget Allah and think they could never be defeated.'} },
          { t:{ar:'لِأَنَّهُمْ كانوا ضُعَفاء',en:'Because they were weak'}, c:false, exp:{ar:'لا، بَلْ كانوا أَقْوِياءَ جِدّاً، وهذا ما أَغَرَّهُمْ.',en:'No — they were very strong, and that is what deceived them.'} },
          { t:{ar:'لِأَنَّهُمْ لَمْ يَسْمَعوا هوداً',en:'Because they never heard Hud'}, c:false, exp:{ar:'لا، بَلْ سَمِعوهُ ودَعاهُمْ لكِنَّهُمُ اسْتَكْبَروا.',en:'No — they heard him and his call, but were too proud.'} },
        ] } },
    { scene:'wind', text:{ ar:'آمَنَ بِهودٍ قَليلٌ مِنْ قَوْمِه. أَمّا الكُبَراءُ فَسَخِروا مِنْهُ وقالوا: «ما أَنْتَ إِلّا بَشَرٌ مِثْلُنا! لَعَلَّ بَعْضَ آلِهَتِنا أَصابَتْكَ بِسوء». فَأَجابَهُمْ هودٌ بِثَباتٍ: تِلْكَ الأَصْنامُ لا تَنْفَعُ ولا تَضُرّ، وأَنا أَتَوَكَّلُ على اللهِ رَبّي ورَبِّكُمْ.',
      en:'A few of his people believed in Hud. But the chiefs mocked him, saying: "You are only a man like us! Perhaps one of our gods has struck you with harm." Hud answered firmly: Those idols can neither help nor harm; I place my trust in Allah, my Lord and yours.' } },
    { scene:'wind', text:{ ar:'حَذَّرَهُمْ هودٌ مِنْ عَذابِ الله، فقالوا مُتَحَدِّين: «ائْتِنا بِما تَعِدُنا إِنْ كُنْتَ صادِقاً!». فَتَوَكَّلَ هودٌ على اللهِ وقال: <b>﴿ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ﴾</b>؛ هُوَ يَكْفيني وحْدَهُ.',
      en:'Hud warned them of Allah\'s punishment, and they challenged: "Bring us what you promise, if you are truthful!" Hud trusted in Allah and said: <b>"My success is only through Allah"</b> — He alone is enough for me.' } },
    { scene:'wind', text:{ ar:'وكانوا قَدْ مَنَعَ اللهُ عَنْهُمُ المَطَرَ زَماناً. فَلَمّا رَأَوْا سَحابَةً كَبيرَةً قادِمَةً نَحْوَ أَوْدِيَتِهِمْ فَرِحوا وقالوا: «هذا غَيْثٌ يُمْطِرُنا!». فقالَ هودٌ: بَلْ هُوَ ما اسْتَعْجَلْتُمْ بِهِ، <b>ريحٌ فيها عَذابٌ أَليم</b>.',
      en:'Now Allah had withheld rain from them for a long time. When they saw a great cloud coming toward their valleys, they rejoiced and said: "This is rain that will water us!" But Hud said: No — it is what you hastened: <b>a wind carrying a painful punishment</b>.' } },
    { scene:'wind', text:{ ar:'فَأَرْسَلَ اللهُ عَلَيْهِمْ <b>ريحاً باردَةً عاتِيَة</b> سَبْعَ لَيالٍ وثَمانِيَةَ أَيّامٍ مُتَتابِعَة، فَلَمْ تَنْفَعْهُمْ قُوَّتُهُمْ ولا بُيوتُهُمُ العاليَة. ونَجّى اللهُ هوداً والمُؤْمِنينَ مَعَهُ بِرَحْمَتِهِ، وبَقِيَتْ قِصَّتُهُمْ عِبْرَةً لِكُلِّ مُتَكَبِّر.',
      en:'So Allah sent upon them a <b>fierce, cold wind</b> for seven nights and eight days in succession. Neither their strength nor their tall houses helped them. And Allah saved Hud and the believers with him by His mercy, leaving their story as a lesson for every arrogant person.' } },
  ],

  traits: [
    { ar:'التواضع', en:'Humility' }, { ar:'الشُّكر', en:'Gratitude' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'الثبات', en:'Steadfastness' },
  ],
  lessons: [
    { icon:'🙏', color:'#8D6E63', title:{ar:'اشكُرْ نِعَمَك',en:'Thank Allah for blessings'},
      body:{ar:'نسيَ قومُ عادٍ مَن أعطاهمُ القوّةَ والخيرات، فهلكوا. الشُّكرُ يحفظُ النِّعمةَ ويزيدُها.',en:'The people of ʿĀd forgot Who gave them strength and blessings, so they perished. Gratitude protects a blessing and increases it.'},
      apply:{ar:'أشكرُ اللهَ كلَّ يومٍ على جسدي وأهلي ونِعَمي.',en:'I thank Allah each day for my body, my family and my blessings.'} },
    { icon:'🤲', color:'#A98274', title:{ar:'تواضعْ ولا تتكبّر',en:'Be humble, never arrogant'},
      body:{ar:'دمَّرَ الكِبرُ قومَ عادٍ رغمَ قوّتِهم. المتكبّرُ يسقُط، والمتواضعُ يرفعه الله.',en:'Pride destroyed ʿĀd despite their power. The arrogant fall, and the humble are raised by Allah.'},
      apply:{ar:'لا أفتخرُ على أحدٍ بقوّتي أو بما أملك.',en:'I never boast over anyone about my strength or what I own.'} },
    { icon:'💪', color:'#E67E22', title:{ar:'القوّةُ أمانة',en:'Strength is a trust'},
      body:{ar:'أعطى اللهُ عاداً قوّةً عظيمة، فاستخدموها في الكِبرِ بدلَ الخير. قوّتُك أمانةٌ تُستخدمُ في الطاعة.',en:'Allah gave ʿĀd great strength, but they used it for pride instead of good. Your strength is a trust to be used in obedience.'},
      apply:{ar:'أستخدمُ قوّتي ومواهبي في مساعدةِ الناسِ لا أذاهم.',en:'I use my strength and talents to help people, not to harm them.'} },
    { icon:'🦁', color:'#5B8A72', title:{ar:'قُلِ الحقَّ بشجاعة',en:'Speak truth bravely'},
      body:{ar:'وقفَ هودٌ وحدَه أمامَ قومٍ أقوياءَ يدعوهم إلى الحقّ، ولم يَخفْ. الشجاعةُ أن تقولَ الحقَّ ولو كنتَ قليلاً.',en:'Hud stood alone before a mighty people, calling them to the truth without fear. Courage is to speak the truth even when you are few.'},
      apply:{ar:'أقولُ الحقَّ بأدبٍ ولو أمامَ مَن هو أقوى منّي.',en:'I speak the truth politely, even before someone stronger than me.'} },
    { icon:'⚠️', color:'#C0392B', title:{ar:'لا يَغُرُّك ما تملك',en:'Don\'t be deceived by what you own'},
      body:{ar:'لم تنفعْ عاداً قوّتُهم ولا بيوتُهم العالية يومَ العذاب. العِزَّةُ بطاعةِ اللهِ لا بالمالِ والبُنيان.',en:'Neither their strength nor tall buildings helped ʿĀd on the day of punishment. True honour is in obeying Allah, not in wealth and buildings.'},
      apply:{ar:'أعتمدُ على اللهِ لا على الأشياءِ التي أملكها.',en:'I rely on Allah, not on the things I own.'} },
  ],

  memorize: {
    hadith:{ ar:'«لا يدخلُ الجنّةَ مَن كان في قلبِه مثقالُ ذرّةٍ من كِبر»', en:"\"No one with an atom’s weight of arrogance in his heart will enter Paradise.\"", ref:{ ar:'[رواه مسلم ٩١]', en:'[Sahih Muslim 91]' } },
    ayah:{ ar:'﴿ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ﴾', ref:{ ar:'الأعراف ٦٥', en:"Al-A'raf 65" } },
    dua: { ar:'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ', ref:{ ar:'هود ٨٨', en:'Hud 88' } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أشكرُ اللهَ على قوّتي ونِعَمي.', en:'I will thank Allah for my strength and blessings.' },
        { ar:'أكونُ متواضعاً ولا أتكبّرُ على أحد.', en:'I will be humble and never arrogant to anyone.' },
        { ar:'أستخدمُ قوّتي في الخيرِ ومساعدةِ الناس.', en:'I will use my strength for good and to help people.' },
        { ar:'أتذكّرُ دائماً أنّ اللهَ أقوى مِن كلِّ شيء.', en:'I will always remember that Allah is stronger than everything.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'إلى أيِّ قومٍ أُرسِلَ هودٌ عليه السلام؟',en:'To which people was Hud sent?'},
          options:[{ar:'قومِ عاد',en:'The people of ʿĀd'},{ar:'قومِ ثمود',en:'The people of Thamud'},{ar:'أهلِ مصر',en:'The people of Egypt'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ قومُ عاد؟',en:'What were the people of ʿĀd known for?'},
          options:[{ar:'القوّةِ والبُنيان',en:'Strength and great buildings'},{ar:'التجارة',en:'Trade'},{ar:'الزراعة',en:'Farming'}], answer:0 },
        { q:{ar:'بِمَ أهلكهمُ الله؟',en:'How did Allah destroy them?'},
          options:[{ar:'بريحٍ عاتية',en:'With a fierce wind'},{ar:'بطوفان',en:'With a flood'},{ar:'بزلزال',en:'With an earthquake'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'كان قومُ عادٍ أقوياءَ لكنّهم تكبّروا.',en:'ʿĀd were strong but became arrogant.'}, t:true },
        { statement:{ar:'نفعتْ قومَ عادٍ قوّتُهم يومَ العذاب.',en:'ʿĀd\'s strength helped them on the day of punishment.'}, t:false },
        { statement:{ar:'أهلكَ اللهُ قومَ عادٍ بريحٍ باردةٍ شديدة.',en:'Allah destroyed ʿĀd with a fierce cold wind.'}, t:true },
        { statement:{ar:'نجا هودٌ والمؤمنونَ معه.',en:'Hud and the believers with him were saved.'}, t:true },
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'أُرسِلتُ إلى قومٍ أقوياءَ جدّاً.',en:'I was sent to a very strong people.'},
        {ar:'كان قومي يبنونَ أعلى المباني ويتكبّرون.',en:'My people built the tallest buildings and were arrogant.'},
        {ar:'دعوتُهم لِشُكرِ اللهِ على قوّتِهم.',en:'I called them to thank Allah for their strength.'},
        {ar:'أهلكهمُ اللهُ بريحٍ عاتيةٍ ونجّاني.',en:'Allah destroyed them with a fierce wind and saved me.'},
      ],
      options:[{ar:'هود',en:'Hud'},{ar:'آدم',en:'Adam'},{ar:'إدريس',en:'Idris'}], answer:0 },
  ],

  treasures: {
    medal:{ ar:'وِسامُ التواضع', en:'Medal of Humility' },
    stickers:[
      { icon:'wind',   color:'#8D6E63', title:{ar:'ريحُ العِبرة',en:'Wind of the Lesson'} },
      { icon:'shield', color:'#2980B9', title:{ar:'قوّةٌ بِشُكر',en:'Strength with Gratitude'} },
      { icon:'heart',  color:'#8E44AD', title:{ar:'قلبٌ متواضع',en:'A Humble Heart'} },
      { icon:'star',   color:'#F4D03F', title:{ar:'نجمُ النجاة',en:'Star of Rescue'} },
    ],
    moral:{ ar:'القوّةُ نعمةٌ مِن الله؛ البطلُ الحقيقيُّ يشكرُ ويتواضع، ولا يتكبّر.', en:'Strength is a gift from Allah; the true hero thanks Him and stays humble, never arrogant.' },
    reflect:[
      { ar:'أعطاكَ اللهُ قوّةً أو موهبة. كيف تستخدمُها لِمساعدةِ الناسِ بتواضع؟', en:'Allah gave you a strength or talent. How can you use it humbly to help people?' },
      { ar:'تكبّرَ قومُ عادٍ بقوّتِهم. متى تشعرُ بالفخر، وكيف تبقى شاكراً متواضعاً؟', en:'ʿĀd were proud of their strength. When do you feel proud, and how can you stay thankful and humble?' },
    ],
  },
};
