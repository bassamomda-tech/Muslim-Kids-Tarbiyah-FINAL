/* ═══════════════════════════════════════════════════════════════
   بيت الإحسان  ·  House of Ihsan
   ───────────────────────────────────────────────────────────────
   
   Teaching Excellence (Ihsan) to Muslim Children
   
   CORE CONCEPT:
   الإحسان أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك
   "Ihsan is to worship Allah as if you see Him; 
    if you don't see Him, He surely sees you."
   
   STRUCTURE:
   - ROOM 1: Knowledge (definitions, forms, verses, hadiths)
   - ROOM 2: Stories (4 complete authentic narratives)
   - ROOM 3: Memorize (verses, hadiths, pledge)
   - ROOM 4: Activities (6 types × 3 levels = 180 points)
   - ROOM 5: Treasures (6 colorful achievement stickers)
   
   SOURCES (All stories verified from approved Islamic sources):
   1. Hadith Jibril - Sahih Muslim via islamweb.net
   2. Woman & Dog - Bukhari & Muslim via islamweb.net
   3. Camel Complaint - Abu Dawud via islamweb.net
   4. Bird & Chicks - Abu Dawud via quranpedia.net/dorar.net
   
   EDUCATIONAL GOALS:
   - Teach awareness of Allah's watchfulness
   - Develop excellence in worship and character
   - Cultivate mercy toward all creatures
   - Build habit of perfecting every task
   
   TARGET: Ages 8-12
   LANGUAGE: Bilingual Arabic/English
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.ihsan = {

  tagline: {
    ar: 'أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه',
    en: 'To worship Allah as if you see Him',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ الإحسانَ أَعلى دَرَجَاتِ الدِّين؟', en:'Did you know Ihsan is the highest level of faith?' },
      sub:   { ar:'«الإحسانُ أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه، فَإن لم تَكُن تَراهُ فَإنَّهُ يَراك» ﷺ', en:'"Ihsan is to worship Allah as if you see Him; if you cannot see Him, He surely sees you" — the Prophet ﷺ' },
    },
    definition: {
      linguistic: {
        ar: 'الإحسانُ مِن «حَسَنَ» — أي جَعَلَ الشَّيءَ حَسَناً جَميلاً. لأنَّ المُحسِنَ يُتقِنُ عَمَلَهُ ويُجَمِّلُهُ بِكُلِّ ما يَستَطيع!',
        en: 'From "hasuna" — to make beautiful. The muhsin perfects and beautifies every act with excellence.',
      },
      terminology: {
        ar: 'هو <b>إتقانُ العَمَلِ ومُراقَبَةُ اللهِ فيه حتى يَكونَ في أَحسَنِ صُورَة</b> — في العِبادَةِ والمُعامَلَة.',
        en: 'Excellence in action through awareness of Allah — in worship and dealings — making each act the most beautiful it can be.',
      },
      simile: {
        ar: 'الإحسانُ كَالنَّحلَة: لا تَصنَعُ إلّا أَطيَبَ العَسَل، ولا تُؤذي إلّا مَن آذاها، وتَعمَلُ بِإتقانٍ كَأنَّ أَحَداً يُراقِبُها!',
        en: 'Ihsan is like a bee: making only the finest honey, harming only when harmed, working with excellence as if someone were watching!',
      },
    },
    forms: [
      { icon:'🤲', color:'#E65100', title:{ar:'الإحسانُ في العِبادَة', en:'Ihsan in worship'},      body:{ar:'أَن تَعبُدَ اللهَ بِإتقانٍ كَأَنَّكَ تَراه.',           en:'Worship with excellence as if you see Allah.'} },
      { icon:'🤝', color:'#D84315', title:{ar:'الإحسانُ إلى الناس',en:'Ihsan to people'},       body:{ar:'أَن تُحسِنَ إلى النّاسِ بالقَولِ والفِعل.', en:'Show kindness in word and deed.'} },
      { icon:'🌿', color:'#BF360C', title:{ar:'الإحسانُ إلى الحَيَوان',en:'Ihsan to animals'},   body:{ar:'الرَّحمَةُ بِكُلِّ كائنٍ حَيّ.',                 en:'Mercy to every living creature.'} },
      { icon:'💎', color:'#F4511E', title:{ar:'الإحسانُ في العَمَل', en:'Ihsan in work'},        body:{ar:'إتقانُ كُلِّ عَمَلٍ صَغيرٍ أو كَبير.',         en:'Perfecting every task, small or large.'} },
      { icon:'💬', color:'#FF5722', title:{ar:'الإحسانُ في الكَلام', en:'Ihsan in speech'},      body:{ar:'اختِيارُ أَطيَبِ الكَلامِ وأَحسَنِه.',          en:'Choosing the kindest, finest words.'} },
      { icon:'🌟', color:'#FF6F00', title:{ar:'الإحسانُ إلى النَّفس',en:'Ihsan to oneself'},     body:{ar:'تَزكِيَةُ النَّفسِ وتَطهيرُها مِن الرَّذائل.',   en:'Purifying the soul from vice.'} },
    ],
    ranking: [
      { color:'#E65100', title:{ar:'إحسانُ المُراقَبَة',  en:'Ihsan of awareness'},     body:{ar:'أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه',                en:'Worshipping as if you see Him'} },
      { color:'#F4511E', title:{ar:'إحسانُ الخَشيَة',     en:'Ihsan of reverent fear'}, body:{ar:'أَن تَستَحضِرَ أنَّهُ يَراك',                      en:'Knowing He sees you'} },
      { color:'#FF5722', title:{ar:'إحسانُ الإتقان',      en:'Ihsan of perfection'},    body:{ar:'إجادَةُ العَمَلِ في كُلِّ شَيء',                  en:'Excellence in every deed'} },
      { color:'#FF6F00', title:{ar:'إحسانُ الخُلُق',       en:'Ihsan of character'},     body:{ar:'الرَّحمَةُ والبِرُّ والتَّواضُع',                  en:'Mercy, goodness, and humility'} },
    ],
    verses: [
      { text: { ar:'﴿ إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ ﴾',
                en:'"Allah commands justice, ihsan, and kindness to relatives."' },
        ref: { ar:'[سورة النحل: ٩٠]', en:'[Surah An-Nahl: 90]' } },
      { text: { ar:'﴿ وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ ﴾',
                en:'"Do good — Allah loves those who do ihsan."' },
        ref: { ar:'[سورة البقرة: ١٩٥]', en:'[Surah Al-Baqarah: 195]' } },
      { text: { ar:'﴿ هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴾',
                en:'"Is the reward for ihsan anything but ihsan?"' },
        ref: { ar:'[سورة الرحمن: ٦٠]', en:'[Surah Ar-Rahman: 60]' } },
    ],
    hadiths: [
      { text: { ar:'«إنَّ اللهَ كَتَبَ الإحسانَ على كُلِّ شَيءٍ، فَإذا قَتَلتُم فَأَحسِنوا القِتلَة، وإذا ذَبَحتُم فَأَحسِنوا الذَّبحَ»',
                en:'"Allah has prescribed ihsan in all things. If you kill, do it well; if you slaughter, do it well."' },
        source: { ar:'[رواه مسلم]', en:'[Muslim]' } },
      { text: { ar:'«في كُلِّ كَبِدٍ رَطبَةٍ أَجرٌ»',
                en:'"For every living creature there is reward."' },
        source: { ar:'[رواه البخاري ومسلم]', en:'[Bukhari & Muslim]' } },
    ],
    benefits: [
      { ar:'🌸 مَحَبَّةُ اللهِ — «إنَّ اللهَ يُحِبُّ المُحسِنين»',  en:'🌸 Allah\u2019s love — "Allah loves those who do ihsan"' },
      { ar:'💛 البَرَكَةُ في الرِّزقِ والوَقت',                    en:'💛 Blessings in provision and time' },
      { ar:'🤝 مَحَبَّةُ النّاسِ واحتِرامُهم',                      en:'🤝 People\u2019s love and respect' },
      { ar:'🛡️ السَّعادَةُ والطُّمَأنينَة',                        en:'🛡️ Happiness and tranquility' },
      { ar:'🌟 قُربٌ مِن دَرَجَةِ النُّبُوَّة',                   en:'🌟 Nearness to the rank of prophets' },
      { ar:'✨ قَبولُ الأَعمالِ عِندَ الله',                      en:'✨ Acceptance of deeds with Allah' },
    ],
    obstacles: [
      { ar:'الاستِعجالُ والتَّسَرُّع',    en:'Haste and rushing' },
      { ar:'الكَسَلُ والإهمال',          en:'Laziness and negligence' },
      { ar:'الغَفلَةُ عن مُراقَبَةِ الله',en:'Heedlessness of Allah\u2019s watchfulness' },
      { ar:'حُبُّ المَدحِ والظُّهور',     en:'Love of praise and showing off' },
      { ar:'ضَعفُ النِّيَّةِ والإخلاص',   en:'Weak intention and sincerity' },
    ],
    acquireMeans: [
      { ar:'استَحضِرْ أنَّ اللهَ يَراكَ في كُلِّ لَحظة',     en:'Remember Allah sees you at every moment' },
      { ar:'اجعَلْ كُلَّ عَمَلٍ عِبادَةً — صَغيراً أو كَبيراً',en:'Make every act worship — small or great' },
      { ar:'تَعَلَّمِ الإتقانَ مِمَّن أَتقَنوا',              en:'Learn excellence from those who mastered it' },
      { ar:'اسأَلْ نَفسَكَ: لو رآني اللهُ الآن، هل أَرضى؟', en:'Ask yourself: if Allah saw me now, would I be pleased?' },
      { ar:'اقرَأ سِيَرَ المُحسِنينَ واقتَدِ بِهِم',          en:'Read biographies of those who excelled and follow them' },
    ],
  },

  /* ───── ROOM 2: Stories — paginated, interactive ─────
     Sources: 
     Story 1 → hadith Jibril (Sahih Muslim) from islamweb.net
     Story 2 → dog & woman (Bukhari & Muslim) from islamweb.net  
     Story 3 → Prophet's mercy to camel (Sahih) from islamweb.net
     Story 4 → Prophet's mercy to bird from quranpedia.net / dorar.net */
  stories: [
    /* STORY 1 */
    {
      icon:'👼', scene:'madinah', character:'🧔',
      title: { ar:'المَلَكُ الذي عَلَّمَ النّاسَ دينَهُم', en:'The angel who taught people their faith' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'كانَ النَّبيُّ ﷺ جالِساً مع أَصحابِهِ يَوماً في المَسجِد. الجَميعُ يَستَمِعونَ ويَتَعَلَّمون. فَجأَةً دَخَلَ رَجُلٌ غَريب!<br><br><b>لَم يَرَهُ أَحَدٌ مِن قَبل!</b> ثِيابُهُ بَيضاءُ ناصِعَة، شَعرُهُ أَسوَدُ لامِع، لا يَظهَرُ عَليهِ أَثَرُ السَّفَر. مَشى بِثَباتٍ حتى جَلَسَ أَمامَ النَّبيِّ ﷺ مُباشَرَة، ووَضَعَ رُكبَتَيهِ على رُكبَتَي النَّبيّ، ويَدَيهِ على فَخِذَيه!',
                 en:'The Prophet ﷺ sat with companions in the mosque, teaching. Suddenly — a stranger entered!<br><br><b>No one had seen him before!</b> Brilliant white clothes, jet-black hair, no sign of travel. He walked straight to the Prophet ﷺ, sat knee-to-knee, placed his hands on the Prophet\u2019s thighs!' } },
        { scene:'madinah', character:'😲',
          text:{ ar:'الصَّحابَةُ نَظَروا بِدَهشَة! مَن هذا الجَريءُ الذي يَجلِسُ هكذا أَمامَ رَسولِ الله؟!<br><br>لَكِنَّ الرَّجُلَ لم يَهتَمّ. نَظَرَ إلى النَّبيِّ ﷺ مُباشَرَةً وقالَ بِصَوتٍ واضِح: <b>«يا مُحَمَّد، أَخبِرني عَنِ الإسلام!»</b><br><br>لم يَقُل «يا رَسولَ الله» — قالَ «يا مُحَمَّد»! وكَأَنَّهُ يُمتَحِنُهُ!',
                 en:'The companions stared in amazement! Who dares sit like this before the Messenger?!<br><br>But the man didn\u2019t care. He looked straight at the Prophet ﷺ: <b>"O Muhammad, tell me about Islam!"</b><br><br>Not "O Messenger" — just "O Muhammad"! As if testing him!' } },
        { scene:'madinah', character:'🌙',
          text:{ ar:'أَجابَ النَّبيُّ ﷺ بِهُدوءٍ وصَبر، يُعَلِّمُهُ أَركانَ الإسلام. ثُمَّ سَأَلَ الرَّجُلُ: <b>«أَخبِرني عَنِ الإيمان!»</b><br><br>فَأَخبَرَهُ النَّبيُّ ﷺ. ثُمَّ سَأَلَ الرَّجُلُ السُّؤالَ الثّالِث: <b>«فَأَخبِرني عَنِ الإحسان!»</b>',
                 en:'The Prophet ﷺ answered calmly, teaching him Islam\u2019s pillars. Then the man asked: <b>"Tell me about iman!"</b><br><br>The Prophet ﷺ told him. Then came the third question: <b>"Tell me about ihsan!"</b>' },
          choice:{ q:{ar:'ماذا قالَ النَّبيُّ ﷺ عَنِ الإحسان؟',en:'What did the Prophet ﷺ say about ihsan?'},
            opts:[
              { t:{ar:'أَن تُحسِنَ إلى النّاسِ فَقَط.',en:'To be kind to people only.'},c:false,exp:{ar:'لا — الإحسانُ أَوسَعُ مِن ذلك!',en:'No — ihsan is far broader!'} },
              { t:{ar:'أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه.',en:'To worship Allah as if you see Him.'},c:true,exp:{ar:'صحيح! هذه أَعلى دَرَجَةٍ في الدِّين.',en:'Correct! The highest degree of faith.'} },
              { t:{ar:'أَن تُصَلّيَ خَمسَ مَرّاتٍ فَقَط.',en:'To pray five times only.'},c:false,exp:{ar:'هذا مِنَ الإسلام — لَكِنَّ الإحسانَ أَعمَق!',en:'That\u2019s Islam — ihsan goes deeper!'} },
            ] } },
        { scene:'madinah', character:'😌',
          text:{ ar:'قالَ النَّبيُّ ﷺ بِصَوتٍ هادِئٍ مُؤَثِّر: <b>«الإحسانُ أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه، فَإن لم تَكُن تَراهُ فَإنَّهُ يَراك!»</b><br><br>قالَ الرَّجُلُ: «صَدَقتَ!» ثُمَّ سَأَلَ عَن السّاعَةِ وعَلاماتِها. وفي كُلِّ مَرَّةٍ يَقولُ: «صَدَقت!»<br><br>عَجيب! يَسأَلُ ثُمَّ يُصَدِّق! مَن هذا الرَّجُل؟',
                 en:'The Prophet ﷺ said with gentle power: <b>"Ihsan is to worship Allah as if you see Him; if you don\u2019t see Him, He surely sees you!"</b><br><br>The man said: "You spoke truth!" Then asked about the Hour and its signs. Each time: "You spoke truth!"<br><br>Strange! He asks, then confirms! Who is this man?' } },
        { scene:'garden', character:'✨',
          text:{ ar:'ثُمَّ قامَ الرَّجُلُ وانصَرَف. اختَفى!<br><br>جَلَسَ الصَّحابَةُ مُذهولين. قالَ النَّبيُّ ﷺ: <b>«رُدّوا عَلَيَّ الرَّجُل!»</b> رَكَضوا خَلفَهُ — لَكِنَّهُم لم يَجِدوا أَحَداً! اختَفى كَأَنَّهُ لم يَكُن!<br><br>فَقالَ النَّبيُّ ﷺ مُبتَسِماً: <b>«هذا جِبريلُ — جاءَكُم يُعَلِّمُكُم دينَكُم!»</b>',
                 en:'Then the man stood and left. Vanished!<br><br>The companions sat stunned. The Prophet ﷺ said: <b>"Bring him back!"</b> They ran after him — but found no one! Gone as if he\u2019d never been!<br><br>The Prophet ﷺ smiled: <b>"That was Jibril — he came to teach you your religion!"</b>' } },
        { scene:'night', character:'🌟',
          text:{ ar:'فَهِمَ الصَّحابَةُ الدَّرسَ العَظيم: <b>الدِّينُ ثَلاثُ دَرَجات — الإسلامُ ثُمَّ الإيمانُ ثُمَّ الإحسان.</b><br><br>والإحسانُ هو القِمَّة! أَن تَعيشَ كَأَنَّ اللهَ يَراكَ في كُلِّ لَحظة. تَعبُدُهُ بِحُبٍّ وشَوق، كَأَنَّكَ تَراهُ أَمامَك!<br><br>هذا هو الإحسان — وهذا ما عَلَّمَهُم جِبريلُ عَليهِ السَّلام!',
                 en:'The companions understood the great lesson: <b>Faith has three levels — Islam, iman, then ihsan.</b><br><br>Ihsan is the peak! To live as if Allah sees you every moment. Worship Him with love and longing, as if you see Him!<br><br>This is ihsan — what Jibril taught them that day!' } },
      ],
      quiz: [
        { q:{ar:'مَن السّائلُ الذي جاءَ يَسأَلُ النَّبيَّ ﷺ؟', en:'Who was the questioner?'},
          opts:[
            { t:{ar:'رَجُلٌ مِنَ الصَّحابة', en:'A companion'}, c:false },
            { t:{ar:'المَلَكُ جِبريل', en:'Angel Jibril'}, c:true },
            { t:{ar:'رَجُلٌ مِن بَني إسرائيل', en:'A man from Bani Israel'}, c:false }
          ] },
        { q:{ar:'ما هو الإحسان كَما عَلَّمَهُ النَّبيُّ ﷺ؟', en:'What is ihsan as taught by the Prophet ﷺ?'},
          opts:[
            { t:{ar:'أَن تُحسِنَ إلى النّاسِ فَقَط', en:'To be kind to people only'}, c:false },
            { t:{ar:'أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه', en:'To worship Allah as if you see Him'}, c:true },
            { t:{ar:'أَن تُصَلّيَ في المَسجِد', en:'To pray in the mosque'}, c:false }
          ] },
        { q:{ar:'لماذا جاءَ جِبريلُ بِهَيئَةِ رَجُل؟', en:'Why did Jibril come as a man?'},
          opts:[
            { t:{ar:'لِيَختَفيَ عَنِ الصَّحابة', en:'To hide from the companions'}, c:false },
            { t:{ar:'لِيُعَلِّمَ النّاسَ دينَهُم', en:'To teach people their faith'}, c:true },
            { t:{ar:'لِيَختَبِرَ النَّبيَّ ﷺ', en:'To test the Prophet ﷺ'}, c:false }
          ] },
      ],
      moral: { ar:'الإحسانُ قِمَّةُ الدِّين — أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه، فَإن لم تَكُن تَراهُ فَإنَّهُ يَراك!',
               en:'Ihsan is faith\u2019s peak — worship Allah as if you see Him; if not, He surely sees you!' },
      badge: { icon:'👼', title:{ar:'شاهِدُ حَديثِ جِبريل', en:'Witness of Jibril\u2019s Hadith'} },
      reflect: [
        {ar:'كَيفَ تَتَخَيَّلُ أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه؟', en:'How do you imagine worshipping as if you see Allah?'},
        {ar:'ما الفَرقُ بَينَ أَن «تَراهُ» وبَينَ أَن «يَراك»؟', en:'What\u2019s the difference between "seeing Him" and "He sees you"?'},
      ],
      didYouKnow: [
        {ar:'هذا الحَديثُ رَواهُ مُسلِمٌ عَن عُمَرَ بنِ الخَطّابِ رَضِيَ اللهُ عَنه — islamweb.net', 
         en:'Muslim narrated this hadith from Umar ibn al-Khattab — islamweb.net'},
        {ar:'سُمِّيَ «حَديثَ جِبريل» لأنَّ المَلَكَ جاءَ بِهَيئَةِ رَجُلٍ لِيُعَلِّمَ الأُمَّة', 
         en:'Called "Jibril\u2019s Hadith" because the angel came as a man to teach the ummah'},
      ],
    },

    /* STORY 2 */
    {
      icon:'🐕', scene:'desert', character:'👩',
      title: { ar:'المَرأَةُ التي دَخَلَتِ الجَنَّةَ بِكَلب!', en:'The woman who entered Paradise for a dog!' },
      pages: [
        { scene:'desert', character:'👩',
          text:{ ar:'في زَمَنِ بَني إسرائيل، كانَت هُناكَ امرأَةٌ فاجِرَة. كانَت تَعيشُ حَياةَ المَعاصي والذُّنوب.<br><br>في يَومٍ شَديدِ الحَرّ، خَرَجَت في الصَّحراء. الشَّمسُ تَحرِق، والعَطَشُ شَديد. وَجَدَت بِئراً فَنَزَلَت وشَرِبَت مِنها حتى ارتَوَت.',
                 en:'In the time of Bani Israel lived a sinful woman — a life of wrongdoing.<br><br>One scorching day she went into the desert. The sun blazed, thirst intense. She found a well, descended, drank until satisfied.' } },
        { scene:'desert', character:'🐕',
          text:{ ar:'عِندَما خَرَجَت مِنَ البِئر، رَأَت مَنظَراً مُؤَثِّراً!<br><br><b>كَلبٌ مِسكينٌ يَطوفُ حَولَ البِئر، لِسانُهُ يَتَدَلّى مِن شِدَّةِ العَطَش، يَلهَثُ ويَأكُلُ التُّرابَ مِن فَرطِ الظَّمَأ!</b><br><br>يُريدُ أَن يَنزِلَ إلى البِئر لَكِنَّهُ لا يَستَطيع. حاوَلَ مِراراً — لَكِنَّ البِئرَ عَميقَة!',
                 en:'As she climbed out, she saw a moving sight!<br><br><b>A poor dog circling the well, tongue hanging from thirst, panting, eating dirt from desperate need!</b><br><br>He wanted to reach the well but couldn\u2019t. He tried again and again — too deep!' } },
        { scene:'desert', character:'💭',
          text:{ ar:'نَظَرَتِ المَرأَةُ إلى الكَلب. شَيءٌ تَحَرَّكَ في قَلبِها!<br><br>«هذا الكَلبُ المِسكينُ… سَيَموتُ مِنَ العَطَش! لَقَد كانَ عَطَشي شَديداً — وعَطَشُهُ أَشَدّ!»<br><br>لم تَكُن صالِحَةً في حَياتِها — لَكِنَّ الرَّحمَةَ مازالَت في قَلبِها.',
                 en:'She looked at the dog. Something stirred in her heart!<br><br>"This poor creature… will die of thirst! My thirst was terrible — his is worse!"<br><br>She wasn\u2019t righteous in life — but mercy remained in her heart.' },
          choice:{ q:{ar:'ماذا فَعَلَتِ المَرأَة؟',en:'What did the woman do?'},
            opts:[
              { t:{ar:'تَرَكَتِ الكَلبَ ومَشَت.',en:'Left the dog and walked away.'},c:false,exp:{ar:'لا — قَلبُها رَحِمَهُ!',en:'No — her heart had mercy!'} },
              { t:{ar:'نَزَلَت وسَقَتِ الكَلبَ بِخُفِّها.',en:'Descended and gave the dog water in her shoe.'},c:true,exp:{ar:'نَعَم! هذا ما فَعَلَت — ورَحِمَها الله!',en:'Yes! That\u2019s what she did — and Allah had mercy on her!'} },
              { t:{ar:'نادَت أَحَداً لِيُساعِد.',en:'Called someone to help.'},c:false,exp:{ar:'لا أَحَدَ في الصَّحراء — فَعَلَتهُ بِنَفسِها!',en:'No one in the desert — she did it herself!'} },
            ] } },
        { scene:'desert', character:'😊',
          text:{ ar:'نَزَعَتِ المَرأَةُ خُفَّها — حِذاءَها الجِلدِيّ. نَزَلَت إلى البِئرِ مَرَّةً أُخرى بِصُعوبَة.<br><br>مَلَأَتِ الخُفَّ ماءً، ثُمَّ أَمسَكَتهُ بِفَمِها وصَعِدَت! كانَت رِحلَةً شاقَّة — لَكِنَّها لم تَستَسلِم.<br><br>وَضَعَتِ الخُفَّ أَمامَ الكَلب. شَرِبَ الكَلبُ حتى ارتَوى!',
                 en:'She took off her shoe — her leather sock. She descended again with difficulty.<br><br>Filled the shoe with water, held it in her mouth, climbed back up! A hard journey — but she didn\u2019t give up.<br><br>She placed it before the dog. The dog drank until satisfied!' } },
        { scene:'garden', character:'✨',
          text:{ ar:'اللهُ تَعالى نَظَرَ إلى قَلبِها — رَأى الرَّحمَةَ التي تَحَرَّكَت فيه!<br><br><b>فَشَكَرَ اللهُ لَها فِعلَها — وغَفَرَ لَها ذُنوبَها — وأَدخَلَها الجَنَّة!</b><br><br>قالَ النَّبيُّ ﷺ: «في كُلِّ كَبِدٍ رَطبَةٍ أَجرٌ!» — أي في الإحسانِ إلى كُلِّ حَيٍّ ثَواب!',
                 en:'Allah looked into her heart — saw the mercy that stirred within!<br><br><b>So Allah thanked her for her deed — forgave all her sins — and admitted her to Paradise!</b><br><br>The Prophet ﷺ said: "For every living creature there is reward!" — meaning ihsan to every living being has reward!' } },
        { scene:'night', character:'🌟',
          text:{ ar:'تَخَيَّل! امرأَةٌ عاصِيَة — دَخَلَتِ الجَنَّةَ بِسَبَبِ كَلب!<br><br>لَيسَ لأنَّها صامَت أو صَلَّت — بل لأنَّ قَلبَها رَحِمَ مَخلوقاً ضَعيفاً عَطشان.<br><br><b>هذا هو الإحسان! أَن تَرحَمَ كُلَّ حَيّ — حَتى الحَيَوانات!</b>',
                 en:'Imagine! A sinful woman — entered Paradise because of a dog!<br><br>Not because she fasted or prayed — but because her heart had mercy on a weak, thirsty creature.<br><br><b>This is ihsan! To show mercy to every living being — even animals!</b>' } },
      ],
      quiz: [
        { q:{ar:'لماذا دَخَلَتِ المَرأَةُ الجَنَّة؟', en:'Why did the woman enter Paradise?'},
          opts:[
            { t:{ar:'لأنَّها كانَت صالِحَة', en:'Because she was righteous'}, c:false },
            { t:{ar:'لأنَّها رَحِمَت كَلباً عَطشان', en:'Because she had mercy on a thirsty dog'}, c:true },
            { t:{ar:'لأنَّها صامَت رَمَضان', en:'Because she fasted Ramadan'}, c:false }
          ] },
        { q:{ar:'كَيفَ سَقَتِ المَرأَةُ الكَلب؟', en:'How did she give the dog water?'},
          opts:[
            { t:{ar:'في دَلوٍ كَبير', en:'In a big bucket'}, c:false },
            { t:{ar:'في خُفِّها الجِلدِيّ', en:'In her leather shoe'}, c:true },
            { t:{ar:'طَلَبَت مِن شَخصٍ آخَر', en:'Asked someone else'}, c:false }
          ] },
        { q:{ar:'ما هي الفائدَةُ مِن هذه القِصَّة؟', en:'What\u2019s the lesson from this story?'},
          opts:[
            { t:{ar:'الإحسانُ إلى الحَيَوانِ لَهُ أَجرٌ عَظيم', en:'Kindness to animals has great reward'}, c:true },
            { t:{ar:'الكِلابُ أَهَمُّ مِنَ النّاس', en:'Dogs are more important than people'}, c:false },
            { t:{ar:'يَجِبُ تَربِيَةُ الكِلاب', en:'We must raise dogs'}, c:false }
          ] },
      ],
      moral: { ar:'الإحسانُ إلى كُلِّ مَخلوقٍ حَيّ — حتى الحَيَوانات — يُمكِنُ أَن يُدخِلَكَ الجَنَّة!',
               en:'Kindness to every living creature — even animals — can grant you Paradise!' },
      badge: { icon:'🐕', title:{ar:'راحِمُ المَخلوقات', en:'Merciful to Creatures'} },
      reflect: [
        {ar:'كَيفَ يُمكِنُكَ أَن تُحسِنَ إلى الحَيَواناتِ في حَياتِك؟', en:'How can you show kindness to animals in your life?'},
        {ar:'لماذا غَفَرَ اللهُ لِهذه المَرأَةِ رَغمَ ذُنوبِها؟', en:'Why did Allah forgive this woman despite her sins?'},
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخاريُّ ومُسلِمٌ عَن أَبي هُرَيرَةَ رَضِيَ اللهُ عَنه — islamweb.net', 
         en:'Narrated by Bukhari & Muslim from Abu Hurayrah — islamweb.net'},
        {ar:'قالَ ابنُ تَيمِيَّة: غُفِرَ لَها لِما حَصَلَ في قَلبِها مِن حُسنِ النِّيَّةِ والرَّحمَة', 
         en:'Ibn Taymiyyah said: she was forgiven for the good intention and mercy in her heart'},
      ],
    },

    /* STORY 3 */
    {
      icon:'🐪', scene:'garden', character:'🌙',
      title: { ar:'الجَمَلُ الذي شَكا إلى النَّبيّ ﷺ', en:'The camel who complained to the Prophet ﷺ' },
      pages: [
        { scene:'garden', character:'🧔',
          text:{ ar:'دَخَلَ النَّبيُّ ﷺ يَوماً بُستانَ أَحَدِ الأَنصار. كانَ في البُستانِ جَمَلٌ كَبير.<br><br>فَلَمّا رَأى الجَمَلُ النَّبيَّ ﷺ حَدَثَ شَيءٌ غَريب! <b>حَنَّ الجَمَلُ حَنيناً شَديداً، وذَرَفَت عَيناهُ دُموعاً!</b>',
                 en:'One day the Prophet ﷺ entered a companion\u2019s garden. In it was a large camel.<br><br>When the camel saw the Prophet ﷺ, something strange happened! <b>The camel moaned deeply and tears flowed from his eyes!</b>' } },
        { scene:'garden', character:'🐪',
          text:{ ar:'تَعَجَّبَ الصَّحابَةُ! جَمَلٌ يَبكي؟!<br><br>اقتَرَبَ النَّبيُّ ﷺ مِنَ الجَمَل بِرِفقٍ ولُطف. <b>مَسَحَ عَلى رَأسِهِ ومَسَحَ دُموعَهُ بِيَدِهِ الشَّريفة.</b><br><br>سَكَنَ الجَمَلُ وهَدَأَ. شَعَرَ بِالأَمانِ والرَّحمَة!',
                 en:'The companions were amazed! A camel crying?!<br><br>The Prophet ﷺ approached gently. <b>He stroked the camel\u2019s head and wiped his tears with his blessed hand.</b><br><br>The camel calmed and settled. He felt safe and cared for!' } },
        { scene:'garden', character:'🤔',
          text:{ ar:'ثُمَّ التَفَتَ النَّبيُّ ﷺ إلى صاحِبِ الجَمَل وقالَ لَهُ بِحَزمٍ ولُطف: <b>«أَلا تَتَّقي اللهَ في هذه البَهيمَةِ التي مَلَّكَكَ اللهُ إيّاها؟»</b><br><br>«إنَّهُ شَكا إلَيَّ أَنَّكَ تُجيعُهُ وتُتعِبُه!»',
                 en:'Then the Prophet ﷺ turned to the camel\u2019s owner and said firmly yet kindly: <b>"Will you not fear Allah regarding this animal He entrusted to you?"</b><br><br>"He complained to me that you starve him and overwork him!"' },
          choice:{ q:{ar:'كَيفَ عَرَفَ النَّبيُّ ﷺ أَنَّ الجَمَلَ يَشكو؟',en:'How did the Prophet ﷺ know the camel was complaining?'},
            opts:[
              { t:{ar:'الجَمَلُ تَكَلَّمَ بِاللُّغَةِ العَرَبِيَّة.',en:'The camel spoke Arabic.'},c:false,exp:{ar:'لا — اللهُ أَلهَمَهُ فَهمَ حالِ الجَمَل!',en:'No — Allah inspired him to understand the camel\u2019s state!'} },
              { t:{ar:'اللهُ أَلهَمَهُ وأَعلَمَهُ.',en:'Allah inspired and informed him.'},c:true,exp:{ar:'صحيح! هذه مِن مُعجِزاتِ النُّبُوَّة.',en:'Right! One of prophethood\u2019s miracles.'} },
              { t:{ar:'الصَّحابَةُ أَخبَروه.',en:'The companions told him.'},c:false,exp:{ar:'لا — الصَّحابَةُ لم يَعرِفوا!',en:'No — the companions didn\u2019t know!'} },
            ] } },
        { scene:'madinah', character:'😔',
          text:{ ar:'خَجِلَ صاحِبُ الجَمَل! لم يَكُن يَعلَمُ أَنَّ الجَمَلَ يَتَأَلَّم.<br><br>قالَ: «يا رَسولَ الله، أَستَغفِرُ اللهَ! لَن أُجيعَهُ بَعدَ اليَوم، ولَن أُتعِبَهُ!»<br><br>وَعَدَ أَن يُحسِنَ إلى جَمَلِهِ ويَرحَمَه.',
                 en:'The owner felt ashamed! He didn\u2019t know the camel was suffering.<br><br>He said: "O Messenger, I seek Allah\u2019s forgiveness! I won\u2019t starve him again, nor overwork him!"<br><br>He promised to treat his camel with kindness and mercy.' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'ابتَسَمَ النَّبيُّ ﷺ. هذا ما أَرادَه — أَن يَتَعَلَّمَ الرَّجُلُ دَرسَ الرَّحمَة!<br><br><b>الحَيَواناتُ لا تَستَطيعُ الكَلام — لَكِنَّها تَشعُرُ بِالأَلَمِ والجوع!</b><br><br>مَن يَملِكُ حَيَواناً فَهو مَسؤولٌ عَنهُ أَمامَ الله — يُطعِمُهُ، يَسقيهِ، يَرحَمُه!',
                 en:'The Prophet ﷺ smiled. This is what he wanted — for the man to learn the lesson of mercy!<br><br><b>Animals can\u2019t speak — but they feel pain and hunger!</b><br><br>Whoever owns an animal is responsible before Allah — feed it, give it water, show it mercy!' } },
        { scene:'night', character:'💎',
          text:{ ar:'الدَّرسُ العَظيم: <b>الإحسانُ إلى الحَيَوانِ جُزءٌ مِنَ الدِّين!</b><br><br>اللهُ كَتَبَ الإحسانَ على كُلِّ شَيء — حتى الحَيَوانات. فَلا نُؤذيها، ولا نُجيعُها، ولا نُحَمِّلُها فَوقَ طاقَتِها.<br><br>هكذا عَلَّمَنا النَّبيُّ ﷺ — رَحمَةً لِلعالَمين!',
                 en:'The great lesson: <b>Kindness to animals is part of faith!</b><br><br>Allah prescribed ihsan in all things — even animals. Don\u2019t harm them, starve them, or burden them beyond capacity.<br><br>Thus the Prophet ﷺ taught us — mercy to all worlds!' } },
      ],
      quiz: [
        { q:{ar:'لماذا بَكى الجَمَل؟', en:'Why did the camel cry?'},
          opts:[
            { t:{ar:'لأنَّهُ كانَ جائعاً ومُتعَباً', en:'Because he was hungry and exhausted'}, c:true },
            { t:{ar:'لأنَّهُ خائفٌ مِنَ النَّبيّ', en:'Because he feared the Prophet'}, c:false },
            { t:{ar:'لأنَّهُ مَريض', en:'Because he was sick'}, c:false }
          ] },
        { q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ لِلجَمَل؟', en:'What did the Prophet ﷺ do for the camel?'},
          opts:[
            { t:{ar:'مَسَحَ دُموعَهُ وطَمأَنَه', en:'Wiped his tears and comforted him'}, c:true },
            { t:{ar:'اشتَراهُ مِن صاحِبِه', en:'Bought him from the owner'}, c:false },
            { t:{ar:'أَطعَمَهُ بِيَدِه', en:'Fed him by hand'}, c:false }
          ] },
        { q:{ar:'ما الدَّرسُ المُستَفاد؟', en:'What\u2019s the lesson?'},
          opts:[
            { t:{ar:'الحَيَواناتُ لا تَشعُر', en:'Animals don\u2019t feel'}, c:false },
            { t:{ar:'يَجِبُ الإحسانُ إلى كُلِّ حَيّ', en:'We must be kind to all living beings'}, c:true },
            { t:{ar:'الجِمالُ تَستَطيعُ الكَلام', en:'Camels can speak'}, c:false }
          ] },
      ],
      moral: { ar:'اللهُ كَتَبَ الإحسانَ على كُلِّ شَيء — حتى الحَيَوانات. فَارحَمها ولا تُؤذِها!',
               en:'Allah prescribed ihsan in all things — even animals. Show them mercy, don\u2019t harm them!' },
      badge: { icon:'🐪', title:{ar:'حامي الضُّعَفاء', en:'Protector of the Weak'} },
      reflect: [
        {ar:'كَيفَ تَشعُرُ الحَيَواناتُ وهي لا تَستَطيعُ الكَلام؟', en:'How do animals feel when they can\u2019t speak?'},
        {ar:'ما هي مَسؤولِيَّتُكَ تُجاهَ أَيِّ حَيَوانٍ تَملِكُه؟', en:'What\u2019s your responsibility toward any animal you own?'},
      ],
      didYouKnow: [
        {ar:'رَواهُ أَبو داود في السُّنَن عَن عَبدِ اللهِ بنِ جَعفَر — islamweb.net', 
         en:'Narrated by Abu Dawud from Abdullah ibn Ja\u2019far — islamweb.net'},
        {ar:'قالَ النَّبيُّ ﷺ: «إنَّ اللهَ كَتَبَ الإحسانَ على كُلِّ شَيء» — رَواهُ مُسلِم', 
         en:'The Prophet ﷺ said: "Allah prescribed ihsan in all things" — Muslim'},
      ],
    },

    /* STORY 4 */
    {
      icon:'🐦', scene:'desert', character:'🧔',
      title: { ar:'الطَّائرُ الذي فَجَعوهُ بِوَلَدِه', en:'The bird whose chicks they took' },
      pages: [
        { scene:'desert', character:'🧔',
          text:{ ar:'كانَ النَّبيُّ ﷺ يَسيرُ مع أَصحابِهِ في الصَّحراء. المَنظَرُ جَميل، والأَجواءُ هادِئَة.<br><br>فَجأَةً رَأَوا طائرَ قُبَّرَةٍ صَغيرَة على الأَرض — ومَعَها فَرخانِ صَغيرانِ جَميلان!',
                 en:'The Prophet ﷺ walked with companions through the desert. Beautiful scenery, peaceful atmosphere.<br><br>Suddenly they saw a small lark bird on the ground — with two beautiful baby chicks!' } },
        { scene:'desert', character:'🐦',
          text:{ ar:'أَحَدُ الصَّحابَةِ رَأى الفَرخَينِ الصَّغيرَين. نَظَرَ إلَيهِما — كانا لَطيفَينِ جِدّاً!<br><br>فَأَخَذَهُما بِيَدِهِ بِدونِ تَفكير. أَرادَ أَن يَلعَبَ مَعَهُما قَليلاً!<br><br>لَكِنَّهُ لم يَنتَبِه لِأُمِّهِما…',
                 en:'One companion saw the tiny chicks. He looked at them — so cute!<br><br>He picked them up without thinking. He wanted to play with them a bit!<br><br>But he didn\u2019t notice their mother…' } },
        { scene:'desert', character:'😱',
          text:{ ar:'الطَّائرَةُ الأُمُّ رَأَت مُصيبَتَها! وَلَداها في يَدِ رَجُل!<br><br><b>طارَت بِسُرعَةٍ نَحوَ النَّبيِّ ﷺ! تُرَفرِفُ بِجَناحَيها بِفَزَع، تُحَلِّقُ حَولَهُ، تَصرُخُ بِصَوتِها!</b><br><br>كَأَنَّها تَقول: «أَينَ وَلَدايَ؟! أَينَ فَرخايَ؟!»',
                 en:'The mother bird saw her disaster! Her babies in a man\u2019s hand!<br><br><b>She flew swiftly toward the Prophet ﷺ! Flapping wings in panic, circling him, crying out!</b><br><br>As if saying: "Where are my chicks?! Where are my babies?!"' },
          choice:{ q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ عِندَما رَأى الطَّائرَةَ المَفزوعَة؟',en:'What did the Prophet ﷺ do when he saw the panicked bird?'},
            opts:[
              { t:{ar:'تَجاهَلَها ومَشى.',en:'Ignored her and walked on.'},c:false,exp:{ar:'لا — قَلبُهُ ﷺ رَحيم!',en:'No — his heart ﷺ was merciful!'} },
              { t:{ar:'سَأَلَ: مَن فَجَعَ هذه بِوَلَدِها؟',en:'Asked: Who distressed this bird by taking her chicks?'},c:true,exp:{ar:'نَعَم! رَحِمَ الطَّائرَةَ وأَمَرَ بِإرجاعِ الفَرخَين!',en:'Yes! He had mercy and ordered the chicks returned!'} },
              { t:{ar:'أَمَرَ بِطَردِ الطَّائر.',en:'Ordered the bird driven away.'},c:false,exp:{ar:'مُستَحيل! النَّبيُّ ﷺ رَحمَةٌ لِلعالَمين!',en:'Impossible! The Prophet ﷺ was mercy to all worlds!'} },
            ] } },
        { scene:'desert', character:'🌙',
          text:{ ar:'نَظَرَ النَّبيُّ ﷺ إلى أَصحابِهِ وقالَ بِصَوتٍ حازِم: <b>«مَن فَجَعَ هذه بِوَلَدِها؟! رُدّوا وَلَدَها إلَيها!»</b><br><br>فَهِمَ الصَّحابيُّ الخَطَأ! أَسرَعَ ووَضَعَ الفَرخَينِ في مَكانِهِما.',
                 en:'The Prophet ﷺ looked at his companions and said firmly: <b>"Who distressed this bird by taking her chicks?! Return her babies to her!"</b><br><br>The companion understood his mistake! He hurried and placed the chicks back.' } },
        { scene:'garden', character:'😊',
          text:{ ar:'رَجَعَتِ الطَّائرَةُ الأُمُّ إلى فَرخَيها بِسُرعَة! ضَمَّتهُما تَحتَ جَناحَيها.<br><br>هَدَأَت وسَكَنَت. عادَتِ الطُّمَأنينَةُ إلى قَلبِها!<br><br>ابتَسَمَ النَّبيُّ ﷺ. هكذا يَكونُ الإحسان — رَحمَةٌ حتى مع أَصغَرِ المَخلوقات!',
                 en:'The mother bird rushed back to her chicks! She gathered them under her wings.<br><br>She calmed and settled. Peace returned to her heart!<br><br>The Prophet ﷺ smiled. This is ihsan — mercy even to the smallest creatures!' } },
        { scene:'night', character:'🌟',
          text:{ ar:'الدَّرسُ الثَّمين: <b>حتى الطُّيورُ لَها مَشاعِر! تَخافُ على أَولادِها وتَحزَنُ لِفِراقِهِم!</b><br><br>الإحسانُ أَن نَرحَمَ كُلَّ مَخلوق — لا نُؤذي طائراً، ولا نُفَرِّقُ بَينَ الأُمِّ ووَلَدِها، ولا نُخيفُ مَخلوقاً ضَعيفاً.<br><br>هذا ديننا — دينُ الرَّحمَةِ والإحسان!',
                 en:'The precious lesson: <b>Even birds have feelings! They fear for their young and grieve separation!</b><br><br>Ihsan means showing mercy to every creature — don\u2019t harm a bird, don\u2019t separate mother from child, don\u2019t frighten the weak.<br><br>This is our faith — a faith of mercy and ihsan!' } },
      ],
      quiz: [
        { q:{ar:'لماذا أَخَذَ الصَّحابيُّ الفَرخَين؟', en:'Why did the companion take the chicks?'},
          opts:[
            { t:{ar:'لِيَلعَبَ مَعَهُما', en:'To play with them'}, c:true },
            { t:{ar:'لِيُطعِمَهُما', en:'To feed them'}, c:false },
            { t:{ar:'لِيُعالِجَهُما', en:'To treat them'}, c:false }
          ] },
        { q:{ar:'كَيفَ عَبَّرَتِ الطَّائرَةُ الأُمُّ عَن خَوفِها؟', en:'How did the mother bird express her fear?'},
          opts:[
            { t:{ar:'طارَت بِفَزَعٍ حَولَ النَّبيّ', en:'Flew in panic around the Prophet'}, c:true },
            { t:{ar:'هَرَبَت بَعيداً', en:'Fled far away'}, c:false },
            { t:{ar:'هاجَمَتِ الصَّحابيّ', en:'Attacked the companion'}, c:false }
          ] },
        { q:{ar:'ماذا أَمَرَ النَّبيُّ ﷺ؟', en:'What did the Prophet ﷺ order?'},
          opts:[
            { t:{ar:'إرجاعَ الفَرخَينِ لِأُمِّهِما', en:'Return the chicks to their mother'}, c:true },
            { t:{ar:'تَربِيَةَ الفَرخَين', en:'Raise the chicks'}, c:false },
            { t:{ar:'طَردَ الطَّائرَة', en:'Drive the bird away'}, c:false }
          ] },
      ],
      moral: { ar:'الإحسانُ يَشمَلُ كُلَّ مَخلوق — حتى الطُّيورَ الصَّغيرَة وفِراخَها. لا تُؤذِها ولا تُخيفها!',
               en:'Ihsan encompasses every creature — even small birds and their chicks. Don\u2019t harm or frighten them!' },
      badge: { icon:'🐦', title:{ar:'حارِسُ الأَعشاش', en:'Guardian of Nests'} },
      reflect: [
        {ar:'هل تَشعُرُ الطُّيورُ بِالخَوفِ والحُزن؟', en:'Do birds feel fear and sadness?'},
        {ar:'كَيفَ يُمكِنُكَ أَن تَرحَمَ الطُّيورَ في بَيتِك أو حَديقَتِك؟', en:'How can you show mercy to birds in your home or garden?'},
      ],
      didYouKnow: [
        {ar:'رَواهُ أَبو داود في السُّنَن — quranpedia.net / dorar.net', 
         en:'Narrated by Abu Dawud — quranpedia.net / dorar.net'},
        {ar:'كانَ النَّبيُّ ﷺ يَنهى عَن إيذاءِ الحَيَواناتِ حتى في الصَّيد', 
         en:'The Prophet ﷺ forbade harming animals even in hunting'},
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text:{ar:'﴿ إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ ﴾', en:'"Allah commands justice and ihsan."'}, 
        ref:{ar:'[سورة النحل: ٩٠]', en:'[Surah An-Nahl: 90]'} },
      { text:{ar:'﴿ وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ ﴾', en:'"Do good — Allah loves those who do ihsan."'}, 
        ref:{ar:'[سورة البقرة: ١٩٥]', en:'[Surah Al-Baqarah: 195]'} },
      { text:{ar:'﴿ هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴾', en:'"Is the reward for ihsan anything but ihsan?"'}, 
        ref:{ar:'[سورة الرحمن: ٦٠]', en:'[Surah Ar-Rahman: 60]'} },
      { text:{ar:'﴿ وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ ﴾', en:'"Seek the Hereafter through what Allah gave you, don\u2019t forget your worldly share, and do ihsan as Allah did ihsan to you."'}, 
        ref:{ar:'[سورة القصص: ٧٧]', en:'[Surah Al-Qasas: 77]'} },
    ],
    hadiths: [
      { text:{ar:'«الإحسانُ أَن تَعبُدَ اللهَ كَأَنَّكَ تَراهُ، فَإن لم تَكُن تَراهُ فَإنَّهُ يَراك»', 
              en:'"Ihsan is to worship Allah as if you see Him; if you don\u2019t see Him, He surely sees you."'}, 
        ref:{ar:'[رواه مسلم]', en:'[Muslim]'} },
      { text:{ar:'«إنَّ اللهَ كَتَبَ الإحسانَ على كُلِّ شَيء»', 
              en:'"Allah has prescribed ihsan in all things."'}, 
        ref:{ar:'[رواه مسلم]', en:'[Muslim]'} },
      { text:{ar:'«في كُلِّ كَبِدٍ رَطبَةٍ أَجرٌ»', 
              en:'"For every living creature there is reward."'}, 
        ref:{ar:'[رواه البخاري ومسلم]', en:'[Bukhari & Muslim]'} },
    ],
    pledge: {
      title: {ar:'عَهدُ المُحسِن', en:'The Muhsin\u2019s Pledge'},
      lines: [
        {ar:'أَعبُدُ اللهَ بِإتقانٍ كَأَنّي أَراه', en:'I worship Allah with excellence as if I see Him'},
        {ar:'أُحسِنُ إلى كُلِّ مَخلوقٍ — إنسانٍ وحَيَوان', en:'I show kindness to every creature — human and animal'},
        {ar:'أُتقِنُ عَمَلي وأُجَمِّلُهُ بِكُلِّ ما أَستَطيع', en:'I perfect my work and beautify it with all I can'},
        {ar:'أَستَحضِرُ مُراقَبَةَ اللهِ في كُلِّ لَحظة', en:'I remember Allah\u2019s watchfulness at every moment'},
      ],
      dua: {ar:'اللَّهُمَّ اجعَلني مِنَ المُحسِنينَ الذينَ تُحِبُّهُم، واكتُبني في عِبادِكَ الصّالِحين', 
            en:'O Allah, make me among those who excel and whom You love, and record me among Your righteous servants'},
    },
  },

  /* ───── ROOM 4: Activities (6 types × 3 levels = 18 games, 180 points) ───── */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOWLEDGE (fill/TF/MCQ) */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'المَعرِفَة', en:'Knowledge' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: {ar:['المُراقَبَة','الرَّحمَة','الإتقان','المُحسِنين','كَأَنَّكَ تَراه','الخَشيَة','البَركَة'],
                       en:['awareness','mercy','perfection','those who excel','as if you see Him','reverent fear','blessings']},
            items: [
              {prefix:{ar:'الإحسانُ أَن تَعبُدَ اللهَ',en:'Ihsan is to worship Allah'}, 
               answer:{ar:'كَأَنَّكَ تَراه',en:'as if you see Him'}, 
               suffix:{ar:'',en:''}},
              {prefix:{ar:'اللهُ يُحِبُّ',en:'Allah loves'}, 
               answer:{ar:'المُحسِنين',en:'those who excel'}, 
               suffix:{ar:'',en:''}},
              {prefix:{ar:'مِن أَركانِ الإحسان',en:'Among ihsan\u2019s pillars is'}, 
               answer:{ar:'المُراقَبَة',en:'awareness'}, 
               suffix:{ar:'لله في كُلِّ عَمَل',en:'of Allah in every act'}},
              {prefix:{ar:'الإحسانُ إلى الحَيَوانِ يَدُلُّ على',en:'Kindness to animals shows'}, 
               answer:{ar:'الرَّحمَة',en:'mercy'}, 
               suffix:{ar:'',en:''}},
              {prefix:{ar:'مِن صُوَرِ الإحسان',en:'Among ihsan\u2019s forms is'}, 
               answer:{ar:'الإتقان',en:'perfection'}, 
               suffix:{ar:'في كُلِّ عَمَل',en:'in every deed'}},
              {prefix:{ar:'الإحسانُ يَجلِبُ',en:'Ihsan brings'}, 
               answer:{ar:'البَركَة',en:'blessings'}, 
               suffix:{ar:'في الحَياة',en:'in life'}},
              {prefix:{ar:'استِحضارُ أنَّ اللهَ يَراكَ هو',en:'Remembering Allah sees you is'}, 
               answer:{ar:'الخَشيَة',en:'reverent fear'}, 
               suffix:{ar:'',en:''}},
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              {q:{ar:'الإحسانُ أَعلى دَرَجاتِ الدِّين',en:'Ihsan is the highest level of faith'}, t:true},
              {q:{ar:'الإحسانُ في العِبادَةِ فَقَط',en:'Ihsan is only in worship'}, t:false},
              {q:{ar:'اللهُ كَتَبَ الإحسانَ على كُلِّ شَيء',en:'Allah prescribed ihsan in all things'}, t:true},
              {q:{ar:'لا يَجِبُ الإحسانُ إلى الحَيَوان',en:'Kindness to animals is not required'}, t:false},
              {q:{ar:'جَزاءُ الإحسانِ الإحسان',en:'The reward for ihsan is ihsan'}, t:true},
              {q:{ar:'الإحسانُ يَحتاجُ إلى مُراقَبَةِ الله',en:'Ihsan requires awareness of Allah'}, t:true},
              {q:{ar:'يَكفي الإحسانُ في القَولِ فَقَط',en:'Ihsan in speech alone is sufficient'}, t:false},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'ما تَعريفُ الإحسان؟',en:'What is ihsan?'},
                opts:[
                  {t:{ar:'أَن تَعبُدَ اللهَ كَأَنَّكَ تَراه',en:'To worship Allah as if you see Him'},c:true},
                  {t:{ar:'الصَّلاةُ في المَسجِد',en:'Praying in the mosque'},c:false},
                  {t:{ar:'الصَّدَقَةُ فَقَط',en:'Charity only'},c:false}
                ]},
              {q:{ar:'مَن الذي عَلَّمَ النَّبيَّ ﷺ عَنِ الإحسان؟',en:'Who taught the Prophet ﷺ about ihsan?'},
                opts:[
                  {t:{ar:'جِبريل عَليهِ السَّلام',en:'Jibril peace be upon him'},c:true},
                  {t:{ar:'أَبو بَكر',en:'Abu Bakr'},c:false},
                  {t:{ar:'عُمَر بن الخَطّاب',en:'Umar ibn al-Khattab'},c:false}
                ]},
              {q:{ar:'ماذا يَشمَلُ الإحسان؟',en:'What does ihsan include?'},
                opts:[
                  {t:{ar:'العِبادَةَ فَقَط',en:'Worship only'},c:false},
                  {t:{ar:'المُعامَلاتِ فَقَط',en:'Dealings only'},c:false},
                  {t:{ar:'العِبادَةَ والمُعامَلاتِ والإتقان',en:'Worship, dealings, and perfection'},c:true}
                ]},
              {q:{ar:'ما ثَوابُ الإحسانِ إلى الحَيَوان؟',en:'What\u2019s the reward for kindness to animals?'},
                opts:[
                  {t:{ar:'لا ثَوابَ فيه',en:'No reward'},c:false},
                  {t:{ar:'في كُلِّ كَبِدٍ رَطبَةٍ أَجرٌ',en:'For every living creature there is reward'},c:true},
                  {t:{ar:'ثَوابٌ صَغير',en:'Small reward'},c:false}
                ]},
              {q:{ar:'كَيفَ نَكتَسِبُ الإحسان؟',en:'How do we acquire ihsan?'},
                opts:[
                  {t:{ar:'بِاستِحضارِ أنَّ اللهَ يَرانا',en:'By remembering Allah sees us'},c:true},
                  {t:{ar:'بِالاستِعجالِ في العَمَل',en:'By rushing in work'},c:false},
                  {t:{ar:'بِالإهمالِ والكَسَل',en:'By negligence and laziness'},c:false}
                ]},
            ]
          },
        ]
      },

      /* 2. FLIP MATCH */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ ar:'التَّطابُق', en:'Match' },
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              {a:{ar:'الإحسان',en:'Ihsan'}, b:{ar:'إتقانُ العَمَل',en:'Excellence in action'}},
              {a:{ar:'المُراقَبَة',en:'Awareness'}, b:{ar:'استِحضارُ أنَّ اللهَ يَرى',en:'Knowing Allah sees'}},
              {a:{ar:'الرَّحمَة',en:'Mercy'}, b:{ar:'الإحسانُ إلى المَخلوقات',en:'Kindness to creatures'}},
              {a:{ar:'الإتقان',en:'Perfection'}, b:{ar:'إجادَةُ العَمَل',en:'Doing work well'}},
              {a:{ar:'الخَشيَة',en:'Reverent fear'}, b:{ar:'استِشعارُ عَظَمَةِ الله',en:'Sensing Allah\u2019s greatness'}},
              {a:{ar:'البِرّ',en:'Righteousness'}, b:{ar:'فِعلُ الخَير',en:'Doing good'}},
            ]
          },
          { kind:'match', points:30,
            left: [
              {id:1, t:{ar:'جِبريلُ عَلَّمَ النّاس',en:'Jibril taught people'}},
              {id:2, t:{ar:'المَرأَةُ سَقَتِ الكَلب',en:'The woman gave the dog water'}},
              {id:3, t:{ar:'الجَمَلُ شَكا',en:'The camel complained'}},
              {id:4, t:{ar:'الطَّائرُ فَزِعَت',en:'The bird panicked'}},
            ],
            right: [
              {id:3, t:{ar:'مِن جوعٍ وتَعَب',en:'from hunger and exhaustion'}},
              {id:1, t:{ar:'دَرَجاتِ الدِّين',en:'levels of faith'}},
              {id:4, t:{ar:'لأَخذِ فَرخَيها',en:'because her chicks were taken'}},
              {id:2, t:{ar:'فَغُفِرَ لَها',en:'so she was forgiven'}},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'مَن دَخَلَتِ الجَنَّةَ بِكَلب؟',en:'Who entered Paradise for a dog?'},
                opts:[
                  {t:{ar:'امرأَةٌ رَحِمَت كَلباً عَطشان',en:'A woman who had mercy on a thirsty dog'},c:true},
                  {t:{ar:'رَجُلٌ رَبّى كَلباً',en:'A man who raised a dog'},c:false},
                  {t:{ar:'طِفلٌ أَطعَمَ كَلباً',en:'A child who fed a dog'},c:false}
                ]},
              {q:{ar:'لماذا بَكى الجَمَل؟',en:'Why did the camel cry?'},
                opts:[
                  {t:{ar:'كانَ مَريضاً',en:'He was sick'},c:false},
                  {t:{ar:'كانَ جائعاً ومُتعَباً',en:'He was hungry and exhausted'},c:true},
                  {t:{ar:'كانَ خائفاً',en:'He was afraid'},c:false}
                ]},
              {q:{ar:'ما الدَّرسُ مِن قِصَّةِ الطَّائر؟',en:'What\u2019s the lesson from the bird story?'},
                opts:[
                  {t:{ar:'لا تُفَرِّق بَينَ الأُمِّ ووَلَدِها',en:'Don\u2019t separate mother from child'},c:true},
                  {t:{ar:'الطُّيورُ لا تَشعُر',en:'Birds don\u2019t feel'},c:false},
                  {t:{ar:'خُذِ الطُّيورَ لِلَّعِب',en:'Take birds to play'},c:false}
                ]},
            ]
          },
        ]
      },

      /* 3. SORT (good/bad behaviors) */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ ar:'التَّرتيب', en:'Sort' },
        levels: [
          { kind:'sort', points:30,
            items: [
              {t:{ar:'أُتقِنُ عَمَلي كَأَنَّ اللهَ يَرى',en:'I perfect my work as if Allah sees'}, good:true},
              {t:{ar:'أُهمِلُ الصَّلاةَ لِلَّعِب',en:'I neglect prayer for play'}, good:false},
              {t:{ar:'أَرحَمُ القِطَّةَ الجائعَة',en:'I show mercy to a hungry cat'}, good:true},
              {t:{ar:'أُؤذي الطُّيورَ وأَكسِرُ أَعشاشَها',en:'I harm birds and break their nests'}, good:false},
              {t:{ar:'أُحسِنُ الكَلامَ مع الجَميع',en:'I speak kindly to everyone'}, good:true},
              {t:{ar:'أَكذِبُ لِأَتَجَنَّبَ المَشاكِل',en:'I lie to avoid problems'}, good:false},
            ]
          },
          { kind:'sort', points:30,
            items: [
              {t:{ar:'أُساعِدُ أُمّي بِإخلاص',en:'I help my mother sincerely'}, good:true},
              {t:{ar:'أَستَعجِلُ في صَلاتي',en:'I rush through my prayer'}, good:false},
              {t:{ar:'أُطعِمُ العَصافيرَ في الحَديقَة',en:'I feed birds in the garden'}, good:true},
              {t:{ar:'أَضرِبُ الكَلبَ بِلا سَبَب',en:'I hit a dog without reason'}, good:false},
              {t:{ar:'أَستَحضِرُ أنَّ اللهَ يَراني',en:'I remember Allah sees me'}, good:true},
            ]
          },
          { kind:'sort', points:30,
            items: [
              {t:{ar:'أُحسِنُ إلى جيراني',en:'I treat my neighbors well'}, good:true},
              {t:{ar:'أَغُشُّ في الامتِحان',en:'I cheat on exams'}, good:false},
              {t:{ar:'أُجَمِّلُ عَمَلي بِالإتقان',en:'I beautify my work with excellence'}, good:true},
              {t:{ar:'أَتَكَبَّرُ على أَصدِقائي',en:'I act arrogantly with friends'}, good:false},
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'الشِّفرَة', en:'Cipher' },
        levels: [
          { kind:'cipher', points:30,
            key: {
              ar: {'🌸':'ح','💧':'س','⭐':'ن','🌙':'ا','🔥':'إ','🌿':'ت','💎':'ق','🍃':'م','🌺':'ل'},
              en: {'🌸':'i','💧':'h','⭐':'s','🌙':'a','🔥':'n','🌿':'e','💎':'x','🍃':'c','🌺':'l'}
            },
            puzzles: [
              {symbols:{ar:'🔥 🌸 💧 🌙 ⭐',en:'🌸 💧 ⭐ 🌙 🔥'}, answer:{ar:'إحسان',en:'ihsan'}},
              {symbols:{ar:'🌿 🌙 🌸',en:'💎 🌿 💧'}, answer:{ar:'تاح',en:'xeh'}},
              {symbols:{ar:'🌺 💎 🌸',en:'🌸 🌸 🔥'}, answer:{ar:'لقح',en:'iin'}},
              {symbols:{ar:'🌙 💧 ⭐',en:'🍃 🌙 🌺 🍃'}, answer:{ar:'اسن',en:'calc'}},
            ]
          },
          { kind:'cipher', points:30,
            key: {
              ar: {'مُحسِن':'1','رَحمَة':'2','إتقان':'3','مُراقَبَة':'4'},
              en: {'m':1,'e':2,'r':3,'c':4,'y':5}
            },
            puzzles: [
              {symbols:{ar:'1-2-3',en:'1-2-3-4-5'}, answer:{ar:'مُحسِن-رَحمَة-إتقان',en:'mercy'}},
              {symbols:{ar:'2-1',en:'3-2-4'}, answer:{ar:'رَحمَة-مُحسِن',en:'rec'}},
              {symbols:{ar:'3-2',en:'1-1'}, answer:{ar:'إتقان-رَحمَة',en:'mm'}},
              {symbols:{ar:'4-1',en:'5-2-3'}, answer:{ar:'مُراقَبَة-مُحسِن',en:'yer'}},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'الإحسانُ يَعني:',en:'Ihsan means:'},
                opts:[
                  {t:{ar:'إتقانُ العَمَلِ ومُراقَبَةُ الله',en:'Excellence in action and awareness of Allah'},c:true},
                  {t:{ar:'الصَّلاةُ فَقَط',en:'Prayer only'},c:false},
                  {t:{ar:'الصِّيامُ فَقَط',en:'Fasting only'},c:false}
                ]},
              {q:{ar:'مَن يُحِبُّ اللهُ؟',en:'Who does Allah love?'},
                opts:[
                  {t:{ar:'المُحسِنين',en:'Those who excel'},c:true},
                  {t:{ar:'المُهمِلين',en:'The negligent'},c:false},
                  {t:{ar:'الكُسالى',en:'The lazy'},c:false}
                ]},
            ]
          },
        ]
      },

      /* 5. SCENARIOS */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ ar:'مَواقِف', en:'Scenarios' },
        levels: [
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'رَأَيتَ قِطَّةً جائعَةً في الشّارِع. ماذا تَفعَل؟',en:'You see a hungry cat in the street. What do you do?'},
                opts:[
                  {t:{ar:'أُطعِمُها',en:'I feed it'},c:true},
                  {t:{ar:'أَتَجاهَلُها',en:'I ignore it'},c:false},
                  {t:{ar:'أُخيفُها',en:'I scare it'},c:false}
                ]},
              {q:{ar:'طَلَبَ مِنكَ المُعَلِّمُ رَسمَ لَوحَة. كَيفَ تَفعَل؟',en:'The teacher asks you to draw. How do you do it?'},
                opts:[
                  {t:{ar:'بِسُرعَةٍ لِأَنتَهي',en:'Quickly to finish'},c:false},
                  {t:{ar:'بِإتقانٍ وجَمال',en:'With excellence and beauty'},c:true},
                  {t:{ar:'أَنسَخُ مِن صَديقي',en:'I copy from my friend'},c:false}
                ]},
              {q:{ar:'أَنتَ تَكتُبُ واجِبَك. كَيفَ تَكتُب؟',en:'You\u2019re writing your homework. How do you write?'},
                opts:[
                  {t:{ar:'بِخَطٍّ جَميلٍ ومُرَتَّب',en:'With beautiful neat handwriting'},c:true},
                  {t:{ar:'بِسُرعَةٍ وإهمال',en:'Quickly and carelessly'},c:false},
                  {t:{ar:'أَكتُبُ نِصفَهُ فَقَط',en:'I write only half'},c:false}
                ]},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'أَنتَ تُصَلّي في غُرفَتِك وَحدَك. كَيفَ تُصَلّي؟',en:'You\u2019re praying alone in your room. How do you pray?'},
                opts:[
                  {t:{ar:'بِسُرعَةٍ لِأَنَّ لا أَحَدَ يَرى',en:'Quickly because no one sees'},c:false},
                  {t:{ar:'بِإتقانٍ كَأَنَّ اللهَ يَراني',en:'With excellence as if Allah sees me'},c:true},
                  {t:{ar:'بِإهمالٍ لأنّي وَحيد',en:'Carelessly because I\u2019m alone'},c:false}
                ]},
              {q:{ar:'وَجَدتَ عُصفوراً صَغيراً سَقَطَ مِن عُشِّه. ماذا تَفعَل؟',en:'You find a small bird that fell from its nest. What do you do?'},
                opts:[
                  {t:{ar:'أُعيدُهُ إلى عُشِّهِ بِلُطف',en:'I gently return it to its nest'},c:true},
                  {t:{ar:'أَتَرُكُهُ يَموت',en:'I leave it to die'},c:false},
                  {t:{ar:'آخُذُهُ لِلَّعِب',en:'I take it to play'},c:false}
                ]},
              {q:{ar:'رَأَيتَ كَلباً عَطشاناً في يَومٍ حارّ. ماذا تَفعَل؟',en:'You see a thirsty dog on a hot day. What do you do?'},
                opts:[
                  {t:{ar:'أُقَدِّمُ لَهُ ماءً',en:'I give it water'},c:true},
                  {t:{ar:'أَرمي عَليهِ حِجارَة',en:'I throw stones at it'},c:false},
                  {t:{ar:'أَهرُبُ مِنه',en:'I run away'},c:false}
                ]},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              {q:{ar:'صَديقُكَ يَكذِبُ على أَهلِهِ. ماذا تَفعَل؟',en:'Your friend lies to his parents. What do you do?'},
                opts:[
                  {t:{ar:'أُساعِدُهُ في الكَذِب',en:'I help him lie'},c:false},
                  {t:{ar:'أَنصَحُهُ بِالصِّدق',en:'I advise him to be truthful'},c:true},
                  {t:{ar:'أَتَجاهَلُ الأَمر',en:'I ignore it'},c:false}
                ]},
              {q:{ar:'أَنتَ تُساعِدُ أُمَّكَ في البَيت. كَيفَ تُساعِد؟',en:'You\u2019re helping your mother at home. How do you help?'},
                opts:[
                  {t:{ar:'بِحُبٍّ وإتقان',en:'With love and excellence'},c:true},
                  {t:{ar:'بِتَذَمُّرٍ وكَراهِيَة',en:'With complaining and dislike'},c:false},
                  {t:{ar:'أَفعَلُ نِصفَ العَمَل',en:'I do half the work'},c:false}
                ]},
            ]
          },
        ]
      },

      /* 6. MAZE */
      { id:'maze', icon:'🧩', kind:'maze', title:{ ar:'الأَلغاز', en:'Puzzles' },
        levels: [
          { kind:'maze', points:30, sizes:[5,7,9] },
          { kind:'maze', points:30, sizes:[7,9,11] },
          { kind:'maze', points:30, sizes:[9,11,13] },
        ]
      },
    ],
  },

  /* ───── ROOM 5: Treasures — colorful stickers ───── */
  treasures: [
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ الإتقان',      en:'Medal of Excellence' } },
    { icon:'🌳', color:'#1ABC9C', title:{ar:'شَجَرَةُ الرَّحمَة',    en:'Tree of Mercy' } },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ المُحسِنين',   en:'Star of Those Who Excel' } },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ المُراقَبَة',    en:'Shield of Awareness' } },
    { icon:'📜', color:'#E67E22', title:{ar:'وَثيقَةُ العَهد',     en:'Pledge Scroll' } },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ القُلوب',     en:'Key to Hearts' } },
  ],

  /* ───── HOUSE ICON (used on certificate seal) ───── */
  icon: '🌸',

  /* ───── MAGIC MIX — practical daily recipe ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الإحسانَ كُلَّ يوم؟', en:'How do you live ihsan every day?' },
  formulaEq: { ar:'مُراقَبَة + إتقان + رَحمَة = مُحسِن 🏆', en:'Awareness + Excellence + Mercy = Muhsin 🏆' },
  magicMix: [
    { icon:'👁️', title:{ar:'اجعَلِ اللهَ شاهِدَك',en:'Let Allah be your witness'},
      body:{ar:'قَبلَ كُلِّ عَمَلٍ قُل: "اللهُ يَراني" — سَيَكونُ أَحسَن.',en:'Before every act say: "Allah sees me" — it will be better.'} },
    { icon:'💎', title:{ar:'أَتقِن كُلَّ شَيء',en:'Perfect everything'},
      body:{ar:'حتى لو كانَ صَغيراً — الصَّلاةُ، الواجِب، تَرتيبُ الغُرفَة.',en:'Even if small — prayer, homework, tidying your room.'} },
    { icon:'🤲', title:{ar:'ارحَمِ المَخلوقات',en:'Show mercy to creatures'},
      body:{ar:'أَطعِمِ العَصافير، لا تُؤذِ القِطَط، ارحَمِ الضُّعَفاء.',en:'Feed birds, don\u2019t harm cats, show mercy to the weak.'} },
    { icon:'😊', title:{ar:'أَحسِن كَلامَك',en:'Beautify your speech'},
      body:{ar:'اختَرْ أَطيَبَ الكَلامِ وأَلطَفَه — حتى لو كُنتَ غاضِباً.',en:'Choose the kindest, gentlest words — even when angry.'} },
    { icon:'🌟', title:{ar:'استَحضِرِ النِّيَّة',en:'Bring forth intention'},
      body:{ar:'اسأَل نَفسَك: "لماذا أَفعَلُ هذا؟ هل لله؟"',en:'Ask yourself: "Why am I doing this? Is it for Allah?"'} },
    { icon:'🏆', title:{ar:'تَذَكَّرِ الجائزَة',en:'Remember the prize'},
      body:{ar:'«إنَّ اللهَ يُحِبُّ المُحسِنين» — مَحَبَّةُ اللهِ هي الهَدَف!',en:'"Allah loves those who excel" — Allah\u2019s love is the goal!'} },
    { icon:'🌿', title:{ar:'راجِعْ نَفسَكَ كُلَّ يَوم',en:'Review yourself daily'},
      body:{ar:'قَبلَ النَّومِ اسأَل: هل أَتقَنتُ اليَوم؟ هل أَحسَنتُ؟',en:'Before sleep ask: did I excel today? Did I do well?'} },
  ],

  /* ───── CERTIFICATE TEXT ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الإحسان', en:'Awarded to those who completed the House of Ihsan' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>الإحسانَ في العِبادَةِ والمُعامَلَةِ والإتقان</b> — اقتِداءً بِالنَّبيِّ ﷺ الذي عَلَّمَنا أَن نَعبُدَ اللهَ كَأَنَّنا نَراه، وتَأَسِّياً بِالمَرأَةِ التي رَحِمَت كَلباً فَدَخَلَتِ الجَنَّة.',
                 en:'For mastering <b>ihsan in worship, dealings, and excellence</b> — following the Prophet ﷺ who taught us to worship as if we see Allah, and the woman who showed mercy to a dog and entered Paradise.' },
  },

};
