// data/chapters/yusuf.js — Era I · Yusuf عليه السلام  (faithful to Surah Yusuf & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.yusuf = {
  id: 'yusuf', era: 'prophets', icon: 'star',
  name: { ar: 'يُوسُفُ عليه السلام', en: 'Yusuf' },
  tag:  { ar: 'صاحبُ الرؤيا وعزيزُ مصر', en: 'The dreamer who became Egypt\'s minister' },
  accent: '#C99A2E', accent2: '#E6C25A',
  greeting: { ar: 'أهلاً يا بطل! قصةُ يوسفَ عليه السلام سمّاها اللهُ «أحسنَ القصص». فيها حلمٌ جميل، وإخوةٌ غاروا، وصبرٌ طويل، ونهايةٌ سعيدةٌ بالعفوِ والرحمة. تعالَ نعِشْها معاً.', en: "Hello, hero! Allah called the story of Yusuf 'the most beautiful of stories.' It has a lovely dream, jealous brothers, long patience — and a happy ending full of forgiveness and mercy. Come, let's live it together." },

  knowledge: {
    didYouKnow: { ar: 'سورةُ يوسفَ هي السورةُ الوحيدةُ في القرآنِ التي تحكي قصةَ نبيٍّ كاملةً مِن أوّلِها إلى آخرها.', en: 'Surah Yusuf is the only chapter in the Quran that tells one prophet\'s whole story from beginning to end.' },
    who: {
      ar: 'يوسفُ عليه السلام هو ابنُ يعقوبَ بنِ إسحاقَ بنِ إبراهيمَ — نبيٌّ مِن بيتِ النبوّة. آتاه اللهُ الجمالَ و<b>تأويلَ الأحلام</b> والحِكمة. صبرَ على ظُلمِ إخوتِه وعلى الغُربةِ والسِّجن، فرفعه اللهُ حتى صارَ <b>عزيزَ مصر</b> يُطعِمُ الناسَ في سنواتِ الجوع. ثم عفا عن إخوتِه عفواً جميلاً.',
      en: "Yusuf was the son of Yaqub, son of Ishaq, son of Ibrahim — a prophet from a household of prophets. Allah gave him beauty, <b>the gift of interpreting dreams</b>, and wisdom. He was patient through his brothers' wrong, through being far from home, and through prison — so Allah raised him until he became <b>the minister of Egypt</b>, feeding people in years of hunger. Then he forgave his brothers beautifully.",
    },
    facts: [
      { ar: 'رأى في صِغَرِه حُلماً: أحدَ عشرَ كوكباً والشمسَ والقمرَ تسجدُ له.', en: 'As a boy he dreamed of eleven stars, the sun and the moon bowing to him.' },
      { ar: 'ألقاه إخوتُه في البئرِ حَسَداً، فباعوه، فصارَ في مصر.', en: 'His brothers threw him in a well out of envy and he was sold, ending up in Egypt.' },
      { ar: 'علَّمه اللهُ تأويلَ الأحلام، فأنقذَ مصرَ مِن المجاعة.', en: 'Allah taught him to interpret dreams, so he saved Egypt from famine.' },
      { ar: 'عفا عن إخوتِه وقال: «لا تثريبَ عليكم اليوم».', en: 'He forgave his brothers, saying: "No blame upon you today."' },
    ],
    timeline: [
      { when:{ar:'الرؤيا',en:'The Dream'}, what:{ar:'رأى الكواكبَ والشمسَ والقمرَ تسجد.',en:'He saw stars, sun and moon bow to him.'} },
      { when:{ar:'الجُبّ',en:'The Well'}, what:{ar:'ألقاه إخوتُه في البئرِ ثم بِيع.',en:'His brothers cast him in a well; he was sold.'} },
      { when:{ar:'بيتُ العزيز',en:'The Aziz\'s House'}, what:{ar:'عاشَ كريماً وعصمه اللهُ مِن الحرام.',en:'He lived honoured and Allah kept him from sin.'} },
      { when:{ar:'السِّجن',en:'Prison'}, what:{ar:'سُجِنَ ظُلماً وفسَّرَ أحلامَ الناس.',en:'He was wrongly jailed and interpreted dreams.'} },
      { when:{ar:'عزيزُ مصر',en:'Minister'}, what:{ar:'فسَّرَ حُلمَ الملكِ فجعله على الخزائن.',en:'He read the king\'s dream and was put over the stores.'} },
      { when:{ar:'اللقاء',en:'Reunion'}, what:{ar:'عفا عن إخوتِه وتحقّقتِ الرؤيا.',en:'He forgave his brothers and the dream came true.'} },
    ],
    ayah: { ar: '﴿ نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ ﴾', ref: { ar: 'يوسف ٣', en: 'Yusuf 3' } },
  },

  story: [
    { title:{ar:'الرؤيا',en:'The Dream'}, pages:[
      { scene:'cosmos', text:{ ar:'كان يوسفُ غلاماً صغيراً يعيشُ مع أبيه النبيِّ <b>يعقوبَ</b> عليه السلام، وله أحدَ عشرَ أخاً. رأى يوسفُ ذاتَ ليلةٍ رؤيا عجيبة: <b>أحدَ عشرَ كوكباً والشمسَ والقمرَ</b> يسجدونَ له! فأسرعَ يحكيها لأبيه.',
        en:'Yusuf was a young boy living with his father, the Prophet <b>Yaqub</b>, and he had eleven brothers. One night Yusuf saw a wondrous dream: <b>eleven stars, the sun and the moon</b> bowing down to him! He hurried to tell his father.' } },
      { scene:'cosmos', text:{ ar:'فرِحَ يعقوبُ وعرفَ أنّ لابنِه شأناً عظيماً، لكنّه قال له بحِكمة: «يا بُنيَّ <b>لا تَقصُصْ رؤياكَ على إخوتِك</b> فيَحسُدوك؛ إنّ الشيطانَ للإنسانِ عدوٌّ مبين». فحفظَ يوسفُ سِرَّه كما أمرَه أبوه.',
        en:'Yaqub was glad and knew his son had a great future, but he wisely told him: "My son, <b>do not tell your dream to your brothers</b>, or they will envy you; Shaytan is a clear enemy to people." So Yusuf kept his secret, as his father told him.' } },
    ]},
    { title:{ar:'في الجُبّ',en:'Into the Well'}, pages:[
      { scene:'idols', text:{ ar:'كان الإخوةُ يَغارونَ مِن حُبِّ أبيهم ليوسفَ وأخيه الصغير. اجتمعوا وقالوا: «يوسفُ أحبُّ إلى أبينا مِنّا!» فدبّروا خطّةً سيّئة: يأخذونه بعيداً بحُجّةِ اللعبِ ثم يتخلّصونَ منه.',
        en:'The brothers were jealous of their father\'s love for Yusuf and his little brother. They gathered and said: "Yusuf is dearer to our father than we are!" So they planned something wicked: to take him far away, pretending to play, then get rid of him.' },
        choice:{ q:{ar:'ما الذي جعلَ الإخوةَ يُخطئونَ هذا الخطأ الكبير؟',en:'What made the brothers do this terrible wrong?'},
          opts:[
            { t:{ar:'الحَسَدُ والغَيرة',en:'Envy and jealousy'}, c:true, exp:{ar:'نعم! الحَسَدُ مرضٌ خطير يدفعُ صاحبَه لِظُلمِ مَن يُحبُّه اللهُ. فلنفرحْ بالخيرِ لإخوتنا.',en:'Yes! Envy is a dangerous illness that pushes a person to wrong those Allah loves. Let us be happy for the good others receive.'} },
            { t:{ar:'لأنّ يوسفَ آذاهم',en:'Because Yusuf hurt them'}, c:false, exp:{ar:'لا، لم يُؤذِهم يوسفُ أبداً، بل كان أخاً طيّباً.',en:'No — Yusuf never hurt them; he was a kind brother.'} },
            { t:{ar:'لأنّهم كانوا جائعين',en:'Because they were hungry'}, c:false, exp:{ar:'لا، بل كان الحَسَدُ هو السبب.',en:'No — it was envy that drove them.'} },
          ] } },
      { scene:'well', text:{ ar:'أخذوه ووضعوه في قاعِ <b>بئرٍ</b> مُظلمة، ثم رجعوا إلى أبيهم يبكونَ كذباً وقالوا: «أكلَه الذئب!» وجاؤوا بقميصِه عليه دمٌ كاذب. حزِنَ يعقوبُ حُزناً شديداً، لكنّه قال: «فصبرٌ جميل». أمّا يوسفُ فمرَّتْ <b>قافلة</b>، فأنزلوا دلوَهم فأخرجوه وباعوه، فسارَ إلى مصر. وكان اللهُ معه يحفظُه.',
        en:'They took him and lowered him into the bottom of a dark <b>well</b>, then went back to their father, weeping falsely: "A wolf ate him!" and brought his shirt with fake blood. Yaqub grieved deeply but said: "Beautiful patience." As for Yusuf, a <b>caravan</b> passed, dropped their bucket, pulled him out and sold him — and he was taken to Egypt. And Allah was with him, protecting him.' } },
    ]},
    { title:{ar:'في بيتِ العزيز',en:'In the Aziz\'s House'}, pages:[
      { scene:'throne', text:{ ar:'اشتراه <b>عزيزُ مصر</b> (وزيرُ الملك) وأكرمه وقال لأهلِه: «أكرِموا مثواه». كبِرَ يوسفُ وصارَ شابّاً جميلاً أميناً، وآتاه اللهُ عِلماً وحِكمة. كان يعملُ بأمانةٍ ويُحبُّه كلُّ مَن حولَه.',
        en:'The <b>Aziz of Egypt</b> (the king\'s minister) bought him, honoured him, and told his household: "Treat him well." Yusuf grew into a handsome, trustworthy young man, and Allah gave him knowledge and wisdom. He worked honestly and everyone around him loved him.' } },
      { scene:'throne', text:{ ar:'يوماً ما دعتْه امرأةُ العزيزِ إلى ذنبٍ حرام، لكنّ يوسفَ خافَ اللهَ وقال: <b>«معاذَ الله!»</b> وهربَ نحوَ الباب. ظهرتْ براءتُه، لكنّه فضّلَ أن يدخلَ السِّجنَ على أن يعصيَ ربَّه، وقال: «ربِّ السِّجنُ أحبُّ إليَّ مِمّا يَدعونني إليه».',
        en:'One day the Aziz\'s wife called him to a forbidden sin, but Yusuf feared Allah and said: <b>"I seek refuge in Allah!"</b> and ran for the door. His innocence became clear, yet he chose to enter prison rather than disobey his Lord, saying: "My Lord, prison is dearer to me than what they call me to."' } },
    ]},
    { title:{ar:'في السِّجن',en:'In Prison'}, pages:[
      { scene:'dwellings', text:{ ar:'دخلَ يوسفُ السِّجنَ مظلوماً، لكنّه لم ييأس. دعا رفيقَيه في السِّجنِ إلى عبادةِ اللهِ وحدَه. وكان كلٌّ منهما قد رأى حُلماً، فطلبا مِن يوسفَ أن يُفسِّرَه — فقد عرفوا صِدقَه وعِلمَه.',
        en:'Yusuf entered prison wronged, but he did not despair. He invited his two prison companions to worship Allah alone. Each of them had seen a dream and asked Yusuf to interpret it — for they knew his honesty and knowledge.' } },
      { scene:'dwellings', text:{ ar:'فسَّرَ يوسفُ حُلمَيهما بإذنِ الله: أحدُهما سيخرجُ ويسقي الملكَ الشراب، والآخرُ سيُحكَمُ عليه. وقال للأوّل: «اذكُرني عند ربِّك». لكنّه نسِيَ، فبقيَ يوسفُ في السِّجنِ سنواتٍ صابراً محتسِباً.',
        en:'Yusuf interpreted their dreams by Allah\'s leave: one would be freed and serve the king his drink, the other would be punished. He told the first: "Mention me to your master." But the man forgot, so Yusuf stayed in prison for years — patient and content with Allah\'s decree.' } },
    ]},
    { title:{ar:'عزيزُ مصر',en:'Minister of Egypt'}, pages:[
      { scene:'grain', text:{ ar:'رأى مَلِكُ مصرَ رؤيا أفزعتْه: <b>سبعُ بقراتٍ سِمان</b> يأكلهنّ سبعٌ عِجاف، وسبعُ سُنبلاتٍ خُضرٍ وأُخرى يابسات. لم يعرفْ أحدٌ تفسيرَها. عندها تذكّرَ الساقي يوسفَ، فأرسلوا إليه يسألونه.',
        en:'The king of Egypt saw a frightening dream: <b>seven fat cows</b> eaten by seven lean ones, and seven green ears of grain and seven dry. No one could explain it. Then the cupbearer remembered Yusuf, and they sent to ask him.' },
        choice:{ q:{ar:'لماذا طلبَ يوسفُ أن تظهرَ براءتُه قبلَ أن يخرجَ مِن السِّجن؟',en:'Why did Yusuf ask for his innocence to be proven before leaving prison?'},
          opts:[
            { t:{ar:'ليخرجَ نظيفَ السُّمعةِ بالحقّ',en:'To leave with a clear, honest name'}, c:true, exp:{ar:'نعم! الأمانةُ والسُّمعةُ الطيّبةُ غالية. أرادَ أن يُعرَفَ أنّه بريءٌ بالحقِّ لا بالواسطة.',en:'Yes! Trust and a good name are precious. He wanted to be known as innocent by the truth.'} },
            { t:{ar:'لأنّه أحبَّ السِّجن',en:'Because he loved prison'}, c:false, exp:{ar:'لا، بل أرادَ الخروجَ بالحقِّ وبراءةٍ واضحة.',en:'No — he wanted to leave with the truth and a clear name.'} },
            { t:{ar:'لِيأخذَ مالاً',en:'To get money'}, c:false, exp:{ar:'لا، بل كان همُّه الحقَّ والأمانة.',en:'No — his concern was truth and honesty.'} },
          ] } },
      { scene:'throne', text:{ ar:'فسَّرَ يوسفُ الرؤيا: «ستأتي <b>سبعُ سنواتٍ خَير</b>، فازرعوا وادّخِروا، ثم <b>سبعُ سنواتٍ جَدْب</b> تأكلونَ مِمّا خزّنتم». أُعجِبَ الملكُ بعِلمِه وأمانتِه، فأخرجه مكرَّماً وجعله على <b>خزائنِ مصر</b>. فأحسنَ تدبيرَ الطعامِ وأنقذَ البلادَ مِن الجوع.',
        en:'Yusuf interpreted it: "There will come <b>seven good years</b> — so plant and store — then <b>seven hard years</b> in which you will eat from what you saved." The king admired his knowledge and honesty, freed him with honour and placed him over <b>Egypt\'s storehouses</b>. He managed the food wisely and saved the land from hunger.' } },
    ]},
    { title:{ar:'اللقاء',en:'The Reunion'}, pages:[
      { scene:'grain', text:{ ar:'جاءتِ السنواتُ الصعبةُ، وأصابَ الجوعُ كلَّ البلاد. جاءَ إخوةُ يوسفَ مِن أرضِهم البعيدةِ يطلبونَ الطعام، فعرفهم يوسفُ ولم يعرفوه! لم ينتقمْ منهم، بل أكرمهم، وطلبَ أن يأتوه بأخيهم الصغير، ودبّرَ بِلُطفٍ ليُبقيَه عنده.',
        en:'The hard years came and hunger struck all the lands. Yusuf\'s brothers travelled from their distant home to ask for food. Yusuf recognised them, but they did not recognise him! He did not take revenge — he honoured them, asked them to bring their youngest brother, and gently arranged to keep him close.' } },
      { scene:'rescue', text:{ ar:'وأخيراً كشفَ يوسفُ نفسَه وقال: <b>«أنا يوسفُ وهذا أخي»</b>. خجِلَ الإخوةُ، لكنّه قال بِقلبٍ كبير: <b>«لا تثريبَ عليكم اليوم، يغفرُ اللهُ لكم»</b>. ثم أرسلَ قميصَه فألقَوه على وجهِ أبيه يعقوبَ فعادَ إليه بَصَرُه! وجاءتِ العائلةُ كلُّها إلى مصر، ورفعَ يوسفُ أبويه على العرش، وسجدوا له شُكراً لله — <b>فتحقّقتِ الرؤيا</b> بعدَ سنواتٍ طويلةٍ مِن الصبر.',
        en:'At last Yusuf revealed himself: <b>"I am Yusuf, and this is my brother."</b> The brothers were ashamed, but he said with a great heart: <b>"No blame upon you today; may Allah forgive you."</b> Then he sent his shirt; they cast it over his father Yaqub\'s face and his sight returned! The whole family came to Egypt, Yusuf raised his parents to the throne, and they bowed in thanks to Allah — <b>and the dream came true</b> after long years of patience.' } },
    ]},
  ],

  traits: [
    { ar:'الصبر', en:'Patience' }, { ar:'العفو', en:'Forgiveness' },
    { ar:'الأمانة', en:'Trustworthiness' }, { ar:'العِفّة', en:'Purity' },
  ],
  lessons: [
    { icon:'🤲', color:'#C99A2E', title:{ar:'اصبِرْ على الابتلاء',en:'Be patient through trials'},
      body:{ar:'مرَّ يوسفُ بالبئرِ والبيعِ والسِّجن، لكنّه صبرَ ووثِقَ بالله، فجعلَ اللهُ بعدَ الضيقِ فَرَجاً عظيماً.',en:'Yusuf passed through the well, being sold, and prison — but he was patient and trusted Allah, who turned his hardship into great relief.'},
      apply:{ar:'إذا أصابني شيءٌ صعب، أصبِرُ وأثِقُ أنّ بعدَ العُسرِ يُسراً.',en:'When something hard hits me, I am patient and trust that ease follows hardship.'} },
    { icon:'💛', color:'#E67E22', title:{ar:'اعفُ عمَّن ظلمك',en:'Forgive those who wrong you'},
      body:{ar:'لمّا قدرَ يوسفُ على إخوتِه عفا عنهم وقال: «لا تثريبَ عليكم اليوم». العفوُ عند المقدرةِ خُلُقُ الأنبياء.',en:'When Yusuf had power over his brothers, he forgave them: "No blame upon you today." Forgiving when you are able is the character of prophets.'},
      apply:{ar:'إذا أخطأ أحدٌ في حقّي وقدرتُ عليه، أعفو وأسامح.',en:'When someone wrongs me and I am able, I forgive and let go.'} },
    { icon:'🛡️', color:'#2980B9', title:{ar:'اهرُبْ مِن الحرام',en:'Run from sin'},
      body:{ar:'حين دُعِيَ يوسفُ للحرامِ قال «معاذَ الله» وهربَ خوفاً مِن ربِّه. الخوفُ مِن اللهِ يحمينا مِن الزَّلل.',en:'When called to sin, Yusuf said "I seek refuge in Allah" and ran, fearing his Lord. Fearing Allah protects us from slipping.'},
      apply:{ar:'إذا رأيتُ شيئاً حراماً ابتعدتُ عنه فوراً وقلتُ «معاذ الله».',en:'If I see something forbidden, I move away at once and say "I seek refuge in Allah."'} },
    { icon:'🌟', color:'#8E44AD', title:{ar:'تدبيرُ اللهِ خيرٌ كلُّه',en:'Allah\'s plan is all good'},
      body:{ar:'ما خطّطَ الإخوةُ لِشرٍّ إلا جعله اللهُ خيراً، فصارَ يوسفُ عزيزاً يُطعِمُهم. خطّةُ اللهِ أحكمُ مِن كلِّ خطّة.',en:'What the brothers planned as harm, Allah turned to good — Yusuf became a minister feeding them. Allah\'s plan is wiser than every plan.'},
      apply:{ar:'أثِقُ أنّ اللهَ يختارُ لي الأفضلَ حتى لو لم أفهمْ الآن.',en:'I trust Allah chooses what is best for me, even if I don\'t understand now.'} },
    { icon:'⚖️', color:'#1ABC9C', title:{ar:'كُنْ أميناً',en:'Be trustworthy'},
      body:{ar:'ائتمنه العزيزُ ثم الملك، لأنّه كان أميناً صادقاً. الأمانةُ تفتحُ أبوابَ الثقةِ والمناصب.',en:'The Aziz, then the king, trusted him because he was honest and faithful. Trustworthiness opens doors of trust and responsibility.'},
      apply:{ar:'أحفظُ أماناتِ الناسِ وأُتقِنُ عملي بصِدق.',en:'I guard what people entrust to me and do my work honestly.'} },
  ],

  memorize: {
    hadith:{ ar:'«وما زادَ اللهُ عبدًا بعفوٍ إلا عِزًّا»', en:"\"Allah only increases a servant in honor for his forgiveness.\"", ref:{ ar:'[رواه مسلم ٢٥٨٨]', en:'[Sahih Muslim 2588]' } },
    ayah: { ar: '﴿ إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ ﴾', ref:{ ar:'يوسف ٩٠', en:'Yusuf 90' } },
    dua:  { ar: 'رَبِّ ... أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ', ref:{ ar:'يوسف ١٠١', en:'Yusuf 101' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أصبِرُ على الصعابِ وأثِقُ بتدبيرِ الله.', en:'I will be patient through hardship and trust Allah\'s plan.' },
        { ar:'أعفو عمَّن أخطأ في حقّي كما عفا يوسف.', en:'I will forgive those who wrong me, as Yusuf did.' },
        { ar:'أبتعدُ عن الحرامِ خوفاً مِن الله.', en:'I will stay away from sin out of fear of Allah.' },
        { ar:'لا أحسُدُ أحداً، بل أفرحُ بالخيرِ للناس.', en:'I will envy no one, and be glad for the good others receive.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا رأى يوسفُ في حُلمِه؟',en:'What did Yusuf see in his dream?'},
          options:[{ar:'كواكبَ والشمسَ والقمرَ تسجدُ له',en:'Stars, sun and moon bowing to him'},{ar:'بحراً كبيراً',en:'A great sea'},{ar:'جبلاً عالياً',en:'A high mountain'}], answer:0 },
        { q:{ar:'ماذا قال يوسفُ لإخوتِه عندما قدرَ عليهم؟',en:'What did Yusuf say to his brothers when he had power over them?'},
          options:[{ar:'لا تثريبَ عليكم اليوم',en:'No blame upon you today'},{ar:'سأنتقمُ منكم',en:'I will take revenge'},{ar:'اذهبوا بعيداً',en:'Go far away'}], answer:0 },
        { q:{ar:'بأيِّ شيءٍ كرّمه اللهُ فأنقذَ مصر؟',en:'With what gift did Allah let him save Egypt?'},
          options:[{ar:'تأويلِ الأحلام',en:'Interpreting dreams'},{ar:'القوّةِ في القتال',en:'Strength in battle'},{ar:'الطيرانِ',en:'Flying'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبْ رحلةَ يوسف',en:'Put Yusuf\'s journey in order'},
      items:[
        {ar:'رأى الرؤيا وأخبرَ أباه',en:'He saw the dream and told his father'},
        {ar:'ألقاه إخوتُه في البئر',en:'His brothers cast him in the well'},
        {ar:'عاشَ في بيتِ العزيزِ بمصر',en:'He lived in the Aziz\'s house in Egypt'},
        {ar:'دخلَ السِّجنَ وفسَّرَ الأحلام',en:'He entered prison and interpreted dreams'},
        {ar:'صارَ عزيزَ مصرَ على الخزائن',en:'He became Egypt\'s minister over the stores'},
        {ar:'عفا عن إخوتِه وتحقّقتِ الرؤيا',en:'He forgave his brothers and the dream came true'},
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'انتقمَ يوسفُ مِن إخوتِه أشدَّ انتقام.',en:'Yusuf took harsh revenge on his brothers.'}, t:false },
        { statement:{ar:'علَّمه اللهُ تأويلَ الأحلام.',en:'Allah taught him to interpret dreams.'}, t:true },
        { statement:{ar:'حين دُعِيَ للحرامِ قال «معاذَ الله» وهرب.',en:'When called to sin he said "I seek refuge in Allah" and ran.'}, t:true },
        { statement:{ar:'عادَ بَصَرُ يعقوبَ حين أُلقِيَ قميصُ يوسفَ على وجهِه.',en:'Yaqub\'s sight returned when Yusuf\'s shirt touched his face.'}, t:true },
      ] },
  ],

  treasures: {
    medal: { ar:'وِسامُ الصبرِ والعفو', en:'Medal of Patience & Forgiveness' },
    stickers:[
      { icon:'star',  color:'#C99A2E', title:{ar:'نجمُ الرؤيا',en:'Star of the Dream'} },
      { icon:'gem',   color:'#2980B9', title:{ar:'كنزُ الأمانة',en:'Treasure of Trust'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'قلبٌ يعفو',en:'A Forgiving Heart'} },
      { icon:'crown', color:'#E67E22', title:{ar:'عزيزُ مصر',en:'Minister of Egypt'} },
    ],
    moral: { ar:'الصبرُ الجميلُ والعفوُ عند المقدرةِ يرفعانِ صاحبَهما، وتدبيرُ اللهِ خيرٌ كلُّه.', en:'Beautiful patience and forgiving when you can both raise a person — and Allah\'s plan is all good.' },
    reflect:[
      {ar:'يوسفُ عفا عمَّن ظلمه كثيراً. هل تستطيعُ أن تسامحَ مَن أغضبك اليوم؟',en:'Yusuf forgave those who wronged him deeply. Can you forgive someone who upset you today?'},
      {ar:'صبرَ يوسفُ سنواتٍ طويلة. ما الشيءُ الصعبُ الذي تحتاجُ أن تصبِرَ عليه الآن؟',en:'Yusuf was patient for long years. What hard thing do you need patience for right now?'},
    ],
  },
};
