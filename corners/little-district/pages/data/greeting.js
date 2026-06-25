/* ═══════════════════════════════════════════════════════════════
   بيت آداب السلام  ·  House of Greeting Manners
   ─────────────────────────────────────────────────────────────── 
   slug:    greeting
   id:      19
   cat:     adab
   color:   #009688
   art:     mosque
   nameAr:  بيت آداب السلام
   nameEn:  House of Greeting Manners
   shortAr: السلام
   shortEn: Greeting
   ───────────────────────────────────────────────────────────────
   ROOMS:
     1. Knowledge   — definition, forms, verses, hadiths, benefits
     2. Stories     — 4 authenticated stories (7 pages each)
     3. Memorize    — verses, hadiths, pledge
     4. Activities  — 6 types × 3 levels = 18 mini-games (180 pts)
     5. Treasures   — 6 rainbow stickers
   ───────────────────────────────────────────────────────────────
   STORY SOURCES (all authenticated):
     Story 1: Sahih Bukhari 6247 + Sahih Muslim 2168 — dorar.net
     Story 2: Siyar A'lam al-Nubala' vol.3 (al-Dhahabi)
              + al-Adab al-Mufrad (Bukhari) — islamweb.net
     Story 3: Sahih Bukhari 28 — dorar.net/hadith/sharh/14507
     Story 4: Sahih Muslim 2055 — islamweb.net
              + Madarij al-Salikin (Ibn al-Qayyim) — salam chapter
   ───────────────────────────────────────────────────────────────
   KEY HADITHS:
     «أَفشوا السَّلامَ بَينَكُم» — رواه مسلم ٥٤
     «أَفضَلُ الإسلامِ أن تَقرَأَ السَّلامَ...» — رواه البخاري ١٢
   ═══════════════════════════════════════════════════════════════ */

window.HOUSES.greeting = {

  tagline: {
    ar: 'السَّلامُ تَحيَّةُ الجَنَّةِ وشِعارُ المُؤمِنين',
    en: 'Salam is the greeting of Paradise and the emblem of believers',
  },

  /* ───── ROOM 1: Knowledge ─────
     Contains the foundational knowledge about greeting manners:
     — Linguistic and terminology definitions
     — 6 forms of salam (complete, handshake, smile, children, walker, entry)
     — 4 ranking tiers (30, 20, 10 good deeds + reply with better)
     — 3 Quranic verses (An-Nur 27, An-Nisa 86, An-Nur 61)
     — 2 authenticated hadiths (Muslim 54, Bukhari 12)
     — 7 benefits, 4 obstacles, 4 means of acquisition
  */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ «السَّلام» اسمٌ مِن أَسماءِ اللهِ الحُسنى؟', en:'Did you know that "As-Salaam" is one of Allah\'s beautiful names?' },
      sub:   { ar:'«لا تَدخُلونَ الجَنَّةَ حَتَّى تُؤمِنوا، ولا تُؤمِنوا حَتَّى تَحابُّوا، أَوَلا أَدُلُّكُم على شَيءٍ إذا فَعَلتُموهُ تَحابَبتُم؟ أَفشوا السَّلامَ بَينَكُم» — رواهُ مُسلِم حَديث ٥٤', en:'"You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you something which, if you do it, you will love one another? Spread peace among yourselves." — Sahih Muslim 54' },
    },
    definition: {
      linguistic: {
        ar: 'السَّلامُ مِن السَّلامَة، وأَصلُهُ «البَراءَةُ مِن العُيوبِ والآفات» — لأنَّ مَن يُلقي السَّلامَ يَقولُ لِأَخيه: أنتَ آمِنٌ مِنّي، ولستَ في خَطَرٍ أَبَدًا!',
        en: 'From salaamah — safety. Its root means "freedom from all faults and harm" — for whoever offers salam tells their brother: you are safe from me and never in danger!',
      },
      terminology: {
        ar: 'هُوَ <b>تَحيَّةُ الإسلامِ المَشروعَة</b> الَّتي تُنشِرُ الأَمانَ والمَحَبَّةَ بَينَ المُسلِمين، وتُقَرِّبُ القُلوبَ وتَمحو الأَحقاد.',
        en: 'The <b>prescribed greeting of Islam</b> that spreads security and love among Muslims, draws hearts together, and wipes away grudges.',
      },
      simile: {
        ar: 'السَّلامُ كالماءِ البارِدِ في يَومٍ حار: يُروي القَلبَ ويُبَرِّدُ النُّفوس! وكالشَّمعَةِ الَّتي تُضيءُ الطَّريقَ بَينَ النَّاس — كُلَّما أَكثَرتَ مِنهُ كُلَّما ازدادَ نورُ مَجلِسِكَ.',
        en: 'Salam is like cool water on a hot day — it quenches the heart and soothes souls! And like a candle lighting the path between people — the more you give it, the brighter your gathering becomes.',
      },
    },
    forms: [
      { icon:'🌟', color:'#009688', title:{ar:'السَّلامُ الكامِل',  en:'The complete salam'},     body:{ar:'«السَّلامُ عَلَيكُم وَرَحمَةُ اللهِ وبَرَكاتُه» — ثَلاثُ كَلِماتٍ تَحمِلُ ثَلاثينَ حَسَنَة! هذا أَعلى دَرَجاتِ السَّلام وأَكثَرُها أَجرًا عند الله.',           en:'"As-salamu alaykum wa rahmatullahi wa barakatuh" — three words carrying thirty good deeds! This is the highest form of salam, most rewarded with Allah.'} },
      { icon:'🤝', color:'#E65100', title:{ar:'المُصافَحَة',en:'The handshake'},    body:{ar:'السُّنَّةُ عند اللِّقاءِ مُصافَحَةُ الأَخ — «ما مِن مُسلِمَينِ يَلتَقيانِ فَيَتَصافَحانِ إلَّا غُفِرَ لَهُما قَبلَ أن يَتَفَرَّقا» كما في الحديث.',   en:'The sunnah upon meeting is to shake your brother\'s hand — "No two Muslims meet and shake hands except they are forgiven before they part" as in the hadith.'} },
      { icon:'😊', color:'#27AE60', title:{ar:'الابتِسامَة',en:'The smile'},   body:{ar:'«تَبَسُّمُكَ في وَجهِ أَخيكَ صَدَقَة» — الابتِسامَةُ جُزءٌ مِن آدابِ السَّلام، تُضيفُ إليه دِفئًا يَصِلُ إلى القَلب.',   en:'"Your smile in your brother\'s face is charity" — the smile is part of salam\'s etiquette, adding a warmth that reaches the heart.'} },
      { icon:'👶', color:'#2980B9', title:{ar:'السَّلامُ على الصِّغار',   en:'Salam on children'},   body:{ar:'كانَ النَّبيُّ ﷺ يَمُرُّ على الصِّبيانِ فَيُسَلِّمُ عَلَيهِم — «كانَ النَّبيُّ ﷺ يَفعَلُه» رواهُ البُخاريُّ ومُسلِم — لأنَّ الصَّغيرَ يَستَحِقُّ الاحتِرام.',   en:'The Prophet ﷺ would pass by children and greet them — "The Prophet ﷺ used to do this" narrated by Bukhari and Muslim — for the young deserve respect.'} },
      { icon:'🚶', color:'#8E44AD', title:{ar:'الماشي يَبدأ',   en:'The walker starts'},     body:{ar:'«يُسَلِّمُ الصَّغيرُ على الكَبير، والماشي على القاعِد، والقَليلُ على الكَثير» — هذا نِظامٌ جَميلٌ يُعَلِّمُنا التَّواضُع.',             en:'"The young greets the elder, the walker greets the seated, the few greet the many" — a beautiful order that teaches us humility.'} },
      { icon:'🌙', color:'#F39C12', title:{ar:'السَّلامُ عِندَ الدُّخول',   en:'Salam upon entering'},     body:{ar:'إذا دَخَلتَ البَيتَ أو المَجلِسَ فَابدَأ بالسَّلام — ﴿ فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا عَلَىٰ أَنفُسِكُمْ تَحِيَّةً مِّنْ عِندِ اللَّهِ ﴾ [النور: ٦١]',             en:'When you enter a home or gathering, begin with salam — "When you enter houses, greet one another with a salutation from Allah" [An-Nur: 61]'} },
    ],
    ranking: [
      { color:'#009688', title:{ar:'السَّلامُ مَعَ الوَرَحمَةِ والبَرَكَة',  en:'Salam with mercy and blessings'},  body:{ar:'«السَّلامُ عَلَيكُم وَرَحمَةُ اللهِ وبَرَكاتُه» — ثَلاثونَ حَسَنَة دُفعَةً واحِدَة! أَعلى الدَّرَجات وأَكمَلُها.',     en:'"As-salamu alaykum wa rahmatullahi wa barakatuh" — thirty good deeds at once! The highest and most complete degree.'} },
      { color:'#27AE60', title:{ar:'السَّلامُ مَعَ الرَّحمَة', en:'Salam with mercy'}, body:{ar:'«السَّلامُ عَلَيكُم وَرَحمَةُ الله» — عِشرونَ حَسَنَة. لا تَزالُ في مَنزِلَةٍ رَفيعَة وأَجرِكَ عَظيم.',         en:'"As-salamu alaykum wa rahmatullah" — twenty good deeds. Still a high rank and great reward.'} },
      { color:'#2980B9', title:{ar:'السَّلامُ وَحدَه',  en:'Salam alone'},  body:{ar:'«السَّلامُ عَلَيكُم» — عَشرُ حَسَنَات. حَتَّى هذا المِقدارُ مِنَ السَّلامِ فيه خَيرٌ كَثير.',    en:'"As-salamu alaykum" — ten good deeds. Even this amount of salam holds great goodness.'} },
      { color:'#8E44AD', title:{ar:'الرَّدُّ بِأَحسَن',  en:'Reply with better'},      body:{ar:'﴿ وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ﴾ [النساء: ٨٦] — يَجِبُ الرَّدُّ ويُستَحَبُّ أن يَكونَ أَكثَر وأَكمَل.', en:'"When you are greeted with a greeting, greet with a better one or return it equally" [An-Nisa: 86] — replying is required and it is preferred to be fuller and better.'} },
    ],
    verses: [
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّىٰ تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا ﴾',
                en:'"O you who believe — do not enter houses other than your own until you have asked permission and greeted those within."' },
        ref: { ar:'[سورة النور: ٢٧]', en:'[Surah An-Nur: 27]' } },
      { text: { ar:'﴿ وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ﴾',
                en:'"When you are greeted with a greeting, greet with a better one or return it equally."' },
        ref: { ar:'[سورة النساء: ٨٦]', en:'[Surah An-Nisa: 86]' } },
      { text: { ar:'﴿ فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا عَلَىٰ أَنفُسِكُمْ تَحِيَّةً مِّنْ عِندِ اللَّهِ مُبَارَكَةً طَيِّبَةً ﴾',
                en:'"When you enter houses, greet one another with a salutation from Allah — blessed and good."' },
        ref: { ar:'[سورة النور: ٦١]', en:'[Surah An-Nur: 61]' } },
    ],
    hadiths: [
      { text: { ar:'«لا تَدخُلونَ الجَنَّةَ حَتَّى تُؤمِنوا، ولا تُؤمِنوا حَتَّى تَحابُّوا، أَوَلا أَدُلُّكُم على شَيءٍ إذا فَعَلتُموهُ تَحابَبتُم؟ أَفشوا السَّلامَ بَينَكُم»',
                en:'"You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you something that — if you do it — you will love one another? Spread peace among yourselves."' },
        source: { ar:'[رواه مسلم — حديث ٥٤]', en:'[Sahih Muslim — 54]' } },
      { text: { ar:'«أَفضَلُ الإسلامِ أن تُطعِمَ الطَّعامَ وأن تَقرَأَ السَّلامَ على مَن عَرَفتَ وعَلى مَن لَم تَعرِف»',
                en:'"The best of Islam is to feed others and to greet with salam those you know and those you do not know."' },
        source: { ar:'[رواه البخاري — حديث ١٢]', en:'[Sahih Bukhari — 12]' } },
    ],
    benefits: [
      { ar:'🌸 يُدخِلُكَ الجَنَّةَ — «أَفشوا السَّلامَ تَدخُلوا الجَنَّة» كَما قالَ النَّبيُّ ﷺ',  en:'🌸 It enters you into Paradise — "Spread salam and you will enter Paradise" as the Prophet ﷺ said' },
      { ar:'💚 يُنشِرُ المَحَبَّةَ بَينَ المُسلِمينَ ويُقَرِّبُ القُلوبَ المُتَباعِدَة', en:'💚 It spreads love among Muslims and draws apart hearts closer together' },
      { ar:'✨ كُلُّ حَرفٍ مِنهُ حَسَنات — عَشرٌ لِلسَّلامِ وَحدَه، فَعِشرونَ، فَثَلاثون لِلكامِل', en:'✨ Every letter earns good deeds — ten for salam alone, then twenty, then thirty for the complete form' },
      { ar:'🛡️ يَمحو الأَحقادَ ويُزيلُ الشَّحناءَ ويُعيدُ الأُلفَةَ بَينَ المُتَخاصِمِين', en:'🛡️ It erases grudges, removes animosity, and restores affection between those who quarreled' },
      { ar:'🤲 يُعَلِّمُكَ التَّواضُعَ — مَن يَبدَأُ بالسَّلامِ أَقرَبُ إلى اللهِ وأَعلى مَنزِلَة', en:'🤲 It teaches humility — whoever starts with salam is closest to Allah and highest in rank' },
      { ar:'🌍 يُعَرِّفُكَ بِالغُرَباءِ ويَبنيَ جُسورًا بَينَ القُلوبِ التي لَم تَلتَقِ بَعد', en:'🌍 It introduces you to strangers and builds bridges between hearts that haven\'t yet met' },
      { ar:'🏆 هوَ مِن أَفضَلِ الإسلامِ — «أَفضَلُ الإسلامِ أن تَقرَأَ السَّلامَ على مَن عَرَفتَ ومَن لَم تَعرِف»', en:'🏆 It is among the best of Islam — "The best of Islam is to give salam to those you know and those you don\'t know"' },
    ],
    obstacles: [
      { ar:'الكِبرياءُ والتَّعالي على الآخَرين — مَن يَرى نَفسَهُ أَكبَرَ لا يُبادِرُ بالسَّلام',     en:'Pride and looking down on others — whoever considers himself superior doesn\'t initiate salam' },
      { ar:'الحَياءُ الكاذِبُ والخَجَلُ في غَيرِ مَوضِعِه — يَمنَعُ الإنسانَ مِن البَدءِ',     en:'False shyness and misplaced embarrassment — prevents a person from starting' },
      { ar:'الغَضَبُ والحِقدُ على الإخوانِ — يُصعِّبانِ السَّلامَ ويُفسِدانِ المَحَبَّة',      en:'Anger and grudges held against brethren — they make salam difficult and corrupt love' },
      { ar:'الانشِغالُ بالهاتِفِ وعَدَمُ الانتِباهِ لِمَن حَولَك — يُنسيكَ مَن أَمامَك',           en:'Being absorbed in a phone and not noticing those around you — it makes you forget who is in front of you' },
    ],
    acquireMeans: [
      { ar:'ابدَأ بالسَّلامِ قَبلَ أن يَبدَأَ غَيرُك — كُن الأَوَّلَ دائِمًا وانوِ بِهِ وَجهَ الله', en:'Start salam before anyone else does — always be first and intend Allah\'s face by it' },
      { ar:'سَلِّم على كُلِّ مَن تَعرِفُهُ وكُلِّ مَن لا تَعرِفُه في الطَّريقِ والسُّوقِ والمَدرَسَة', en:'Greet everyone you know and everyone you don\'t know on the road, in the market, and at school' },
      { ar:'تَذَكَّر أنَّ كُلَّ سَلامٍ تَقولُهُ يَكتُبُ لَكَ اللهُ بِهِ عَشرَ حَسَنات مِن غَيرِ تَعَب', en:'Remember that every salam you say earns you ten good deeds from Allah without effort' },
      { ar:'اقرَأ عن هَديِ النَّبيِّ ﷺ في السَّلامِ وتَعَلَّم مِن سيرَتِه الكَريمَة كَيفَ كانَ يُسَلِّم', en:'Read about the Prophet\'s ﷺ way of greeting and learn from his noble life how he used to greet' },
    ],
  },

  /* ───── ROOM 2: Stories ─────
     EXACTLY 4 stories, each 7 pages, each from an authenticated source.
     ─────────────────────────────────────────────────────────────────
     STORY 1: النَّبيُّ ﷺ يُسَلِّمُ على الصِّبيان
              Anas ibn Malik plays; Prophet greets him first.
              Anas sent on secret errand; keeps it forever.
              Source: Bukhari 6247 + Muslim 2168 — dorar.net

     STORY 2: ابنُ عُمَر وسُوقُ المَدينَة
              Ibn 'Umar goes to market daily ONLY for salam.
              Jews envied Muslims for salam (Adab al-Mufrad).
              Source: Siyar A'lam al-Nubala' vol.3 — al-Dhahabi

     STORY 3: عَبدُ اللهِ بنُ سَلامٍ
              Former rabbi; first words he heard from Prophet ﷺ
              were the command to spread salam — embraced Islam.
              Source: Bukhari 28 — dorar.net/hadith/sharh/14507

     STORY 4: النَّبيُّ ﷺ والسَّلامُ اللَّيليّ
              Prophet greeted People of the Bench at night with
              a voice that didn't wake sleepers but reached
              the wakeful. Ibn al-Qayyim's commentary.
              Source: Muslim 2055 — islamweb.net
              + Madarij al-Salikin — Ibn al-Qayyim
  */
  /*
     EXACTLY 4 STORIES:
     1. النَّبيُّ ﷺ يُسَلِّمُ على الصِّبيان — رواه البخاري ومسلم (dorar.net)
     2. ابنُ عُمَر يَذهَبُ إلى السُّوق مِن أَجلِ السَّلام — الأدب المفرد + سير أعلام النبلاء
     3. عبدُ اللهِ بنُ سَلام وإفشاءُ السَّلام — رواه البخاري (dorar.net)
     4. النَّبيُّ ﷺ يُعَلِّمُ أنَساً آدابَ السِّر والسَّلام — رواه مسلم (islamweb.net)
  */
  stories: [
    /* ──────────────────────────────────────────
       STORY 1 — النَّبيُّ ﷺ يُسَلِّمُ على الصِّبيان
       Source: Sahih Bukhari (6247) & Sahih Muslim (2168) — dorar.net
       ────────────────────────────────────────── */
    {
      icon:'🌟', scene:'madinah', character:'🧔',
      title: { ar:'النَّبيُّ ﷺ يُسَلِّمُ على الصِّبيان', en:'The Prophet ﷺ greets the children' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'كانَت شَوارِعُ المَدينَةِ المُنَوَّرَة تَفوحُ بِعِطرِ التَّمرِ وأَصواتِ الحَمامِ المُرَفرِف. كانَ الصِّبيانُ يَلعَبونَ في ساحَةٍ واسِعَة، يَتَصايَحونَ بِفَرَح، ويَتَراكَضونَ فَوقَ الرَّملِ الدَّافِئ.<br><br>كانَ أَنَسُ بنُ مالِك رضي الله عنه، وهوَ لا يَزالُ صَغيرًا، من بَينِهِم — يَضحَكُ ويَلهو ويَنسى كُلَّ شَيءٍ سِوى صَخَبِ اللَّعِب. لَم يَكُن يَعلَمُ أنَّ هذا اليَومَ سَيَظَلُّ في ذاكِرَتِهِ إلى آخِرِ عُمُرِه.',
                 en:'The streets of Madinah were fragrant with the scent of dates and the flutter of doves. Children were playing in a wide courtyard — calling to each other joyfully, running across the warm sand.<br><br>Anas ibn Malik رضي الله عنه, still a young boy, was among them — laughing, playing, lost in the noise of the game. He did not know that this day would remain in his memory to the last hour of his life.' } },
        { scene:'madinah', character:'🧔',
          text:{ ar:'فَجأَةً توقَّفَ صَوتٌ ناعِمٌ هادِئٌ في أُذُنِهِم — صَوتٌ كانَ أَلطَفَ ما سَمِعوهُ في حَياتِهِم. التَفَتَ الأَطفالُ فَإذا بالنَّبيِّ ﷺ واقِفٌ أَمامَهُم! كانَت ثِيابُهُ الناصِعَةُ تَلمَعُ في ضَوءِ الشَّمسِ، ووَجهُهُ الكَريمُ يَشِعُّ بِاسِمَة.<br><br><b>«السَّلامُ عَلَيكُم!»</b> — قالَها النَّبيُّ ﷺ بِنَبرَةِ المُحِبِّ لا المُتَعالي. لَم يَتَجاهَلهُم ولَم يَمُرَّ بِلا مُبالاة — بَل توقَّفَ لَهُم وسَلَّمَ عَلَيهِم كَما يُسَلِّمُ على الكِبار!',
                 en:'Suddenly a gentle, soft voice reached their ears — the kindest voice they had ever heard. The children turned to find the Prophet ﷺ standing before them! His white garments shone in the sunlight, his noble face radiant with a smile.<br><br><b>"As-salamu alaykum!"</b> — the Prophet ﷺ said it with the tone of one who loves, not one who towers above. He did not ignore them or pass without care — he stopped for them and greeted them as he would greet the adults!' } },
        { scene:'madinah', character:'😊',
          text:{ ar:'تَوقَّفَ الأَطفالُ دَهِشين. قُلوبُهُم اختَلَجَت بِشَعورٍ لا يَستَطيعُ أَحَدٌ وَصفَه — شُعورُ أنَّكَ مُهِمٌّ، أنَّكَ لَستَ صَغيرًا أَمامَ أَعظَمِ رَجُلٍ على وَجهِ الأَرض!<br><br>رَدَّ الصِّبيانُ بِأَصواتٍ مُتَداخِلَة: «وَعَلَيكُمُ السَّلام يا رَسولَ الله!» وعيونُهُم تَلمَعُ. كانَ أَنَسٌ يَحبِسُ أَنفاسَه — لَم يَتَخَيَّل قَطُّ أنَّ النَّبيَّ ﷺ سَيُسَلِّمُ عَلَيهِ وهوَ يَلعَب.',
                 en:'The children stopped, astonished. Their hearts fluttered with a feeling no one could describe — the feeling that you matter, that you are not small in the eyes of the greatest man on earth!<br><br>The children replied with overlapping voices: "Wa alaykum as-salam, O Messenger of Allah!" their eyes gleaming. Anas held his breath — he had never imagined the Prophet ﷺ would greet him while he was playing.' },
          choice:{ q:{ar:'لِماذا سَلَّمَ النَّبيُّ ﷺ على الصِّبيانِ أَوَّلاً؟',en:'Why did the Prophet ﷺ greet the children first?'},
            opts:[
              { t:{ar:'لأنَّهُ لَم يَرَ الكِبار',en:'Because he didn\'t see any adults'},c:false,exp:{ar:'لا — النَّبيُّ ﷺ كانَ يُبادِرُ بالسَّلامِ تَواضُعًا ومَحبَّةً، حَتَّى على الصِّغار!',en:'No — the Prophet ﷺ would initiate salam out of humility and love, even with the young!'} },
              { t:{ar:'تَواضُعًا وتَعليمًا أنَّ الصَّغيرَ يَستَحِقُّ الاحتِرام',en:'Out of humility and to teach that the young deserve respect'},c:true,exp:{ar:'نَعَم! مَن يَبدَأُ بالسَّلامِ أَكثَرُ أَجرًا وأَقرَبُ إلى الله.',en:'Yes! Whoever starts with salam earns more reward and is closer to Allah.'} },
              { t:{ar:'لأنَّهُم طَلَبوا مِنهُ ذَلِك',en:'Because they asked him to'},c:false,exp:{ar:'لا — بَل بادَرَ بالسَّلامِ مِن نَفسِهِ ﷺ تَعليمًا لأُمَّتِه.',en:'No — he initiated the greeting himself ﷺ to teach his nation.'} },
            ] } },
        { scene:'madinah', character:'🧔',
          text:{ ar:'دَعا النَّبيُّ ﷺ أَنَسًا إلَيهِ بِلُطفٍ، وأَرسَلَه في حاجَةٍ. مَشى أَنَسٌ وقَدمُهُ خَفيفَةٌ كَأَنَّها جَناحُ طائِر — قَلبُهُ مُفعَمٌ بِالفَخرِ والسَّعادَة.<br><br>أَتَمَّ أَنَسٌ الحاجَةَ واحتَبَسَ قَليلاً عن أُمِّه. فَلَمَّا رَجَعَ سَأَلَتهُ أُمُّه: <b>«ما الَّذي أَبطَأَك؟»</b> قالَ: «بَعَثَني رَسولُ اللهِ ﷺ في حاجَة». قالَت: «وما حاجَتُه؟» قالَ: «إنَّها سِرّ».',
                 en:'The Prophet ﷺ gently called Anas to him and sent him on an errand. Anas walked with steps as light as a bird\'s wing — his heart brimming with pride and joy.<br><br>Anas completed the errand but was delayed from reaching his mother. When he returned, his mother asked him: <b>"What kept you?"</b> He said: "The Messenger of Allah ﷺ sent me on an errand." She asked: "What errand?" He said: "It is a secret."' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'قالَت أُمُّه بِقُوَّةٍ وهَيبَة: <b>«لا تُخبِرَنَّ بِسِرِّ رَسولِ اللهِ ﷺ أَحَداً!»</b><br><br>وظَلَّ أَنَسٌ يَحفَظُ السِّرَّ حَتَّى آخِرِ حَياتِهِ. وكانَ إذا رَوى هذهِ القِصَّة يَقولُ لِتِلميذِه ثابِت البُناني: <b>«وَاللهِ لَو حَدَّثتُ بِهِ أَحَدًا لَحَدَّثتُكَ بِهِ يا ثابِت!»</b><br><br>مِن يَومَئِذٍ، كُلَّما مَرَّ أَنَسٌ على الصِّبيانِ سَلَّمَ عَلَيهِم وقال: <b>«كانَ النَّبيُّ ﷺ يَفعَلُه!»</b>',
                 en:'His mother said firmly and with dignity: <b>"Never tell anyone the secret of the Messenger of Allah ﷺ!"</b><br><br>Anas kept that secret until his last breath. And whenever he narrated this story, he would say to his student Thabit al-Bunani: <b>"By Allah, if I were to tell anyone, I would have told you, O Thabit!"</b><br><br>From that day on, whenever Anas passed children, he would greet them and say: <b>"The Prophet ﷺ used to do this!"</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'مَضَت السِّنونَ وشاخَ أَنَسٌ رضي الله عنه. لَكِنَّ تِلكَ اللَّحظَة بَقِيَت نَقِيَّةً في قَلبِه كَدُرَّةٍ لا تُنسى — لَحظَةُ أنَّ خَيرَ البَشَرِ ﷺ وَقَفَ وسَلَّمَ عَليهِ وهوَ طِفلٌ صَغير يَلعَبُ في التُّراب.<br><br><b>تَعَلَّم مِن النَّبيِّ ﷺ: أنَّ السَّلامَ لا يُحَدِّدُهُ عُمرُ مَن أَمامَك أو مَكانَتُه — كُلُّ نَفسٍ تَستَحِقُّ تَحيَّةً تَملَأُ قَلبَها بِالكَرامَة والاحتِرام.</b>',
                 en:'Years passed and Anas رضي الله عنه grew old. But that moment remained pure in his heart like an unforgettable pearl — the moment the best of mankind ﷺ stopped and greeted him while he was a small child playing in the dirt.<br><br><b>Learn from the Prophet ﷺ: salam is not determined by the age or status of who stands before you — every soul deserves a greeting that fills their heart with dignity and respect.</b>' } },
        { scene:'mosque', character:'🌸',
          text:{ ar:'وفي آخِرِ أَيَّامِ أَنَسٍ رضي الله عنه، كانَ تَلاميذُهُ يَجتَمِعونَ حَولَهُ يَستَقونَ مِن بَحرِ عِلمِه. كانَ يُعَلِّمُهُم سُنَناً كَثيرَة — لَكِنَّ هذهِ السُّنَّةَ كانَ يَحرِصُ على ذِكرِها بِشَكلٍ خاصّ وعَيناهُ تُضيئان: <b>«سَلِّموا على الصِّبيانِ إذا مَرَرتُم بِهِم — كانَ النَّبيُّ ﷺ يَفعَلُه.»</b> ثُمَّ يَصمُتُ لَحظَةً ويَبتَسِمُ ابتِسامَةً بَعيدَة — كَأَنَّهُ يَرى ذَلِكَ الصَّبيَّ الصَّغيرَ الَّذي كانَ ذاتَ يَومٍ يَلعَبُ في الرَّمل، وإذا بِخَيرِ البَشَر يَمُرُّ بِهِ فَيُسَلِّمُ عَلَيه. <b>كانَ السَّلامُ أَوَّلَ كَلِمَةٍ جَمَعَت قَلبَ أَنَسٍ بِقَلبِ النَّبيِّ ﷺ — وما فارَقَهُ حَتَّى آخِرِ نَفَس.</b>',
                 en:'In the last days of Anas رضي الله عنه, his students would gather around him drinking from the sea of his knowledge. He would teach them many sunnahs — but this one he was always especially keen to mention, his eyes aglow: <b>"Greet the children when you pass by them — the Prophet ﷺ used to do it."</b> Then he would fall silent a moment and smile a faraway smile — as if seeing that small boy who once played in the sand, and the best of mankind passing by to greet him. <b>Salam was the first word that joined Anas\'s heart to the heart of the Prophet ﷺ — and it never left him until his last breath.</b>' } },
      ],
      quiz: [
        { q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ عِندَما مَرَّ على الصِّبيانِ وهُم يَلعَبون؟', en:'What did the Prophet ﷺ do when he passed by the children playing?'},
          opts:[
            { t:{ar:'مَرَّ بِلا مُبالاة', en:'Passed without paying attention'}, c:false },
            { t:{ar:'سَلَّمَ عَلَيهِم', en:'Greeted them with salam'}, c:true },
            { t:{ar:'طَلَبَ مِنهُم التَّوَقُّف', en:'Asked them to stop playing'}, c:false },
          ] },
        { q:{ar:'مَن روى قِصَّةَ سَلامِ النَّبيِّ ﷺ على الصِّبيان؟', en:'Who narrated the story of the Prophet\'s ﷺ greeting the children?'},
          opts:[
            { t:{ar:'ابنُ عُمَر رضي الله عنه', en:'Ibn \'Umar رضي الله عنه'}, c:false },
            { t:{ar:'أَنَسُ بنُ مالِك رضي الله عنه', en:'Anas ibn Malik رضي الله عنه'}, c:true },
            { t:{ar:'أبو هُرَيرَة رضي الله عنه', en:'Abu Hurayrah رضي الله عنه'}, c:false },
          ] },
        { q:{ar:'ماذا قالَت أُمُّ أَنَسٍ لَمَّا عَلِمَت أنَّهُ يَعرِفُ سِرَّ النَّبيِّ ﷺ؟', en:'What did Anas\'s mother say when she learned he knew the Prophet\'s ﷺ secret?'},
          opts:[
            { t:{ar:'«أَخبِرني بِه!»', en:'"Tell it to me!"'}, c:false },
            { t:{ar:'«لا تُخبِرَنَّ بِهِ أَحَداً»', en:'"Never tell it to anyone"'}, c:true },
            { t:{ar:'«اذهَب واسأَل النَّبيَّ ﷺ»', en:'"Go and ask the Prophet ﷺ"'}, c:false },
          ] },
      ],
      moral:      { ar:'السَّلامُ لا يَعرِفُ الكِبَر ولا التَّعالي — حَتَّى أَعظَمُ النَّاسِ ﷺ سَلَّمَ على الأَطفال، فَاقتَدِ بِه!', en:'Salam knows no arrogance — even the greatest ﷺ greeted children. Follow his example!' },
      badge:      { icon:'🌟', title:{ar:'وِسامُ المُتَواضِع', en:'Badge of the Humble'} },
      reflect:    [
        {ar:'هَل تَبدَأُ أَنتَ بالسَّلامِ عِندَما تَرى أَصحابَكَ أو أَهلَ بَيتِكَ؟', en:'Do you start with salam when you see your friends or family?'},
        {ar:'كَيفَ تَشعُرُ عِندَما يُسَلِّمُ عَلَيكَ شَخصٌ كَبيرٌ أَوَّلاً؟', en:'How do you feel when an older person greets you first?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخارِيُّ في صَحيحِهِ حَديث ٦٢٤٧، ورَواهُ مُسلِمٌ في صَحيحِهِ حَديث ٢١٦٨ — بابُ استِحبابِ السَّلامِ على الصِّبيان. المَصدَر: dorar.net/hadith/sharh/10534', en:'Narrated by Bukhari in his Sahih (6247) and Muslim in his Sahih (2168) — chapter on the desirability of greeting children. Source: dorar.net'},
        {ar:'ظَلَّ أَنَسٌ رضي الله عنه يُحافِظُ على هذهِ السُّنَّةِ طَوالَ حَياتِه، ويُعَلِّمُ تَلاميذَهُ إيَّاها — «كانَ النَّبيُّ ﷺ يَفعَلُه». المَصدَر: صَحيح البُخاري', en:'Anas رضي الله عنه kept this sunnah his entire life and taught it to his students: "The Prophet ﷺ used to do it." Source: Sahih Bukhari'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 2 — ابنُ عُمَر يَخرُجُ إلى السُّوقِ مِن أَجلِ السَّلام
       Source: سير أعلام النبلاء — الذهبي، ج٣ — ترجمة عبدالله بن عمر
                + البخاري في الأدب المفرد
       ────────────────────────────────────────── */
    {
      icon:'🏪', scene:'madinah', character:'👴',
      title: { ar:'ابنُ عُمَر وسُوقُ المَدينَة: حُبُّ السَّلام', en:'Ibn \'Umar and the market of Madinah: love of salam' },
      pages: [
        { scene:'madinah', character:'👴',
          text:{ ar:'في المَدينَةِ المُنَوَّرَة، حَيثُ تَفوحُ رَوائِحُ البَهاراتِ والجُلودِ المَدبوغَة مِن بَعيد، كانَ سوقُ المَدينَةِ يَعِجُّ بِأَصواتِ البائِعينَ والمُشتَرِين. كُلُّ يَومٍ، مَعَ أَوَّلِ خُيوطِ الفَجر، كانَ عَبدُ اللهِ بنُ عُمَر رضي الله عنهما يُعِدُّ نَفسَهُ للخُروج.<br><br>سَأَلَه أَصحابُهُ يَومًا: «يا أَبا عَبدِ الرَّحمَن، لِماذا تَخرُجُ إلى السُّوقِ كُلَّ يَوم وأَنتَ لا تَحتاجُ إلى شِراء؟»',
                 en:'In Madinah al-Munawwarah, where the scents of spices and tanned leather drifted from afar, the market was alive with the voices of buyers and sellers. Every day, with the first threads of dawn, \'Abdullah ibn \'Umar رضي الله عنهما prepared himself to go out.<br><br>His companions asked him one day: "O Abu \'Abd ar-Rahman, why do you go to the market every day when you have no need to buy?"' } },
        { scene:'madinah', character:'👴',
          text:{ ar:'ابتَسَمَ ابنُ عُمَر ابتِسامَةً جاءَت مِن القَلب، وقالَ كَلامًا بَسيطًا لَكِنَّهُ ثَقيلٌ بِالمَعنى: <b>«إنَّما أَخرُجُ مِن أَجلِ السَّلام — فَنُسَلِّمُ على مَن لَقِيناهُم!»</b><br><br>صَمَتَ الأَصحابُ لَحظَة. كانوا يَعرِفونَ أنَّ ابنَ عُمَر لَيسَ كَغَيرِه — كانَ رَجُلاً يَحفَظُ كُلَّ سُنَّةٍ مِن سُنَنِ النَّبيِّ ﷺ كَأَنَّها كَنزٌ لا يَجوزُ إضاعَتُه.',
                 en:'Ibn \'Umar smiled a smile that came from the heart and said words simple in form yet heavy in meaning: <b>"I go out only for the sake of salam — so we may greet those we meet!"</b><br><br>His companions were silent for a moment. They knew Ibn \'Umar was unlike others — he was a man who preserved every sunnah of the Prophet ﷺ as though it were a treasure that must not be wasted.' } },
        { scene:'madinah', character:'🧒',
          text:{ ar:'في أَحَدِ صَباحاتِ السُّوق الصَّاخِبَة، تَقَدَّمَ ابنُ عُمَر مَشيًا هادِئًا بَينَ الصُّفوف. كانَ يُسَلِّمُ يَمينًا ويَسارًا — على التَّاجِرِ العَجوز وعلى الطِّفلِ الصَّغير وعلى المَرأَةِ تَحمِلُ حَزمَةَ حَطَب وعلى الرَّجُلِ الغَريبِ الَّذي لا يَعرِفُه.<br><br>رَآهُ شابٌّ يَبتَسِمُ ويَتَساءَل في نَفسِه: «مَن هذا الرَّجُلُ الَّذي يُسَلِّمُ على الجَميع؟»',
                 en:'On one busy market morning, Ibn \'Umar walked calmly through the rows. He was giving salam to the right and left — to the old merchant, to the small child, to the woman carrying a bundle of firewood, and to the unfamiliar stranger he had never met.<br><br>A young man watching him smiled and wondered to himself: "Who is this man who greets everyone?"' },
          choice:{ q:{ar:'لِماذا كانَ ابنُ عُمَر يُسَلِّمُ على مَن لا يَعرِفُهُم في السُّوق؟',en:'Why did Ibn \'Umar greet strangers in the market?'},
            opts:[
              { t:{ar:'لأنَّهُ كانَ يُريدُ أن يَشتَريَ مِنهُم',en:'Because he wanted to buy from them'},c:false,exp:{ar:'لا — بَل كانَ يَخرُجُ خُصوصًا مِن أَجلِ السَّلام لِلحُصولِ على الأَجر!',en:'No — he went out specifically for salam to gain its great reward!'} },
              { t:{ar:'اتِّباعًا لِسُنَّةِ النَّبيِّ ﷺ وطَلَبًا للأَجر',en:'Following the Prophet\'s ﷺ sunnah and seeking its reward'},c:true,exp:{ar:'نَعَم! «أَفضَلُ الإسلامِ أن تَقرَأَ السَّلامَ على مَن عَرَفتَ ومَن لَم تَعرِف» — رواهُ البُخاري.',en:'Yes! "The best of Islam is to give salam to those you know and those you don\'t know" — Bukhari.'} },
              { t:{ar:'لِيُبَيِّنَ أنَّهُ صَحابِيٌّ مَشهور',en:'To show that he is a famous companion'},c:false,exp:{ar:'لا — كانَ ابنُ عُمَر مِن أَكثَرِ الصَّحابَةِ تَواضُعًا ولَم يَكُن يُحِبُّ أن يَتَمَيَّز.',en:'No — Ibn \'Umar was among the most humble companions and did not like to stand out.'} },
            ] } },
        { scene:'madinah', character:'👴',
          text:{ ar:'وصَفَ أَهلُ العِلمِ ابنَ عُمَر رضي الله عنهما بِأَنَّهُ كانَ مِن أَشَدِّ النَّاسِ اتِّباعًا لِآثارِ النَّبيِّ ﷺ حَتَّى في أَدَقِّ التَّفاصيل. كانَ يَخرُجُ إلى السُّوقِ ولَيسَت بِيَدِه دَراهِم — لَيسَ لِيَبيعَ ولَيسَ لِيَشتَري — بَل لِيُحيِيَ سُنَّةً يُحِبُّها: إفشاءَ السَّلام.<br><br>كانَ كُلَّما رَأى مَجلِسًا بَدَأَهُ بِسَلامٍ يَملأُ المَكان: <b>«السَّلامُ عَلَيكُم وَرَحمَةُ اللهِ!»</b> — بِصَوتٍ واضِحٍ يَسمَعُهُ القَريبُ والبَعيد.',
                 en:'The scholars described Ibn \'Umar رضي الله عنهما as among the most devoted followers of the Prophet\'s ﷺ traces, down to the finest details. He would go to the market with no coins in hand — not to sell and not to buy — but to revive a sunnah he loved: spreading salam.<br><br>Whenever he saw a gathering he would begin it with a salam that filled the place: <b>"As-salamu alaykum wa rahmatullah!"</b> — with a clear voice heard by those near and far.' } },
        { scene:'garden', character:'📖',
          text:{ ar:'بَلَغَ ابنَ عُمَر رضي الله عنه ما كانَت تَقولُهُ يَهودُ المَدينَة: <b>«لَقَد حَسَدَتنا يَهودُ على السَّلام والتَّأمين!»</b> — كَما رُوِيَ في الأَدَبِ المُفرَدِ للإمامِ البُخاري. كانَ السَّلامُ تَحيَّةَ المُسلِمينَ التي تَميَّزوا بِها عن سائِرِ الأُمَم.<br><br>فَفَرِحَ ابنُ عُمَر فَرَحًا عَظيمًا وقالَ: <b>«إذَن فَلنُكثِر مِنه!»</b> وازدادَ حِرصًا على إفشاءِ السَّلامِ أَينَما حَلَّ وارتَحَل.',
                 en:'Ibn \'Umar رضي الله عنه was told what the Jews of Madinah used to say: <b>"The Jews envy us for the salam and the amen!"</b> — as narrated in Imam Bukhari\'s al-Adab al-Mufrad. Salam was the Muslims\' greeting that distinguished them from all other nations.<br><br>Ibn \'Umar rejoiced greatly and said: <b>"Then let us do it even more!"</b> And he became even more dedicated to spreading salam wherever he went.' } },
        { scene:'mosque', character:'🌟',
          text:{ ar:'مَضَت سَنَواتٌ طَوِيلَة. وبَقِيَ ابنُ عُمَر رضي الله عنه وَفِيًّا لِهذهِ السُّنَّةِ حَتَّى وافاهُ أَجَلُه. وبَعدَ رَحيلِه، كانَ أَهلُ المَدينَةِ يَقولون:<br><br><b>«رَحِمَ اللهُ ابنَ عُمَر — لَقَد تَعَلَّمنا مِنهُ أنَّ أَجمَلَ رِحلَةٍ في يَومِكَ هي رِحلَةٌ تَزرَعُ فيها السَّلامَ في قُلوبِ النَّاس!»</b>',
                 en:'Long years passed. And Ibn \'Umar رضي الله عنه remained faithful to this sunnah until his last day. After his passing, the people of Madinah would say:<br><br><b>"May Allah have mercy on Ibn \'Umar — he taught us that the most beautiful journey of your day is one in which you plant salam in people\'s hearts!"</b>' } },
        { scene:'garden', character:'📖',
          text:{ ar:'وما زالَ عِلماءُ الإسلامِ يَذكُرونَ ابنَ عُمَر رضي الله عنهما في بابِ إفشاءِ السَّلام. قالَ العُلَماء: كانَ ابنُ عُمَر يَرى السَّلامَ عِبادَةً كالصَّلاةِ تَمامًا — لَهُ وَقتٌ وأَدَبٌ وأَجر. لَم يَكُن يَمُرُّ بِرَجُلٍ دونَ أن يَبدَأَهُ بالسَّلام، غَنِيًّا كانَ الرَّجُلُ أم فَقيراً، كَبيرًا أم صَغيرًا، مَعروفًا أم مَجهولاً. <b>فَمَن أَرادَ أن يَكونَ قَريبًا مِن اللهِ فَليُفشِ السَّلامَ — فَإنَّ «أَولى النَّاسِ بِاللهِ مَن بَدَأَ بِالسَّلام» كَما رُوِيَ عن النَّبيِّ ﷺ.</b>',
                 en:'Muslim scholars still mention Ibn \'Umar رضي الله عنهما in the chapter on spreading salam. Scholars said: Ibn \'Umar saw salam as worship just like prayer — with its own time, etiquette, and reward. He never passed a man without initiating salam first, whether the man was rich or poor, old or young, known or unknown. <b>So whoever wants to be close to Allah, let them spread salam — for "the closest of people to Allah is the one who starts with salam" as narrated from the Prophet ﷺ.</b>' } },
      ],
      quiz: [
        { q:{ar:'لِماذا كانَ ابنُ عُمَر يَخرُجُ إلى السُّوق؟', en:'Why did Ibn \'Umar go to the market?'},
          opts:[
            { t:{ar:'لِلشِّراء والبَيع', en:'To buy and sell'}, c:false },
            { t:{ar:'لِإفشاءِ السَّلام', en:'To spread salam'}, c:true },
            { t:{ar:'لِقَضاءِ الوَقت', en:'To pass the time'}, c:false },
          ] },
        { q:{ar:'مَن كانَ يَحسُدُ المُسلِمينَ على السَّلام كَما رُوِيَ؟', en:'Who used to envy Muslims for their salam as narrated?'},
          opts:[
            { t:{ar:'المُشرِكون', en:'The polytheists'}, c:false },
            { t:{ar:'اليَهود', en:'The Jews'}, c:true },
            { t:{ar:'النَّصارى', en:'The Christians'}, c:false },
          ] },
        { q:{ar:'ما الَّذي يَدُلُّ على أنَّ ابنَ عُمَر كانَ يُحِبُّ السُّنَّة؟', en:'What shows that Ibn \'Umar loved the sunnah?'},
          opts:[
            { t:{ar:'خُروجُهُ كُلَّ يَومٍ خُصوصًا لِإفشاءِ السَّلام', en:'Going out every day specifically to spread salam'}, c:true },
            { t:{ar:'بَيعُهُ في السُّوق', en:'Selling in the market'}, c:false },
            { t:{ar:'جُلوسُهُ في المَسجِد', en:'Sitting in the mosque'}, c:false },
          ] },
      ],
      moral:      { ar:'الصَّحابَةُ الكِرامُ كانوا يَبحَثونَ عن فُرَصِ الخَيرِ والأَجر — حَتَّى لَو كانَت مُجَرَّدَ كَلِمَة «السَّلامُ عَلَيكُم»!', en:'The noble companions sought out opportunities for goodness and reward — even if it was just the words "As-salamu alaykum"!' },
      badge:      { icon:'🏅', title:{ar:'وِسامُ حافِظِ السُّنَّة', en:'Badge of the Sunnah Guardian'} },
      reflect:    [
        {ar:'هَل خَرَجتَ يَومًا مِن بَيتِكَ بِنِيَّةِ السَّلامِ على النَّاس؟ كَيفَ تَشعُرُ إذا فَعَلتَ ذَلِك؟', en:'Have you ever left your home intending to greet people? How would you feel if you did?'},
        {ar:'مَن تَعرِفُ في حَياتِكَ يُشبِهُ ابنَ عُمَر في حِرصِهِ على السَّلام؟', en:'Who do you know in your life who resembles Ibn \'Umar in his keenness on salam?'}
      ],
      didYouKnow: [
        {ar:'رَوى هذهِ القِصَّةَ الإمامُ الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء — تَرجَمَةُ عَبدِ اللهِ بنِ عُمَر — ج٣، وأَوَرَدَ البُخاريُّ في الأَدَبِ المُفرَدِ عن ابنِ عُمَر حِرصَهُ على السَّلام. المَصدَر: سير أعلام النبلاء — الذهبي — ج٣، islamweb.net/ar/library', en:'This story was narrated by Imam al-Dhahabi in Siyar A\'lam al-Nubala\' — biography of Abdullah ibn \'Umar — vol. 3; and Bukhari recorded in al-Adab al-Mufrad his keenness on salam. Source: Siyar A\'lam al-Nubala\' — al-Dhahabi — vol. 3'},
        {ar:'قالَت عائِشَةُ رضي الله عنها: «ما حَسَدَتكُمُ اليَهودُ على شَيءٍ ما حَسَدوكُم على السَّلامِ والتَّأمين» — رَواهُ البُخاريُّ في الأَدَبِ المُفرَد. المَصدَر: الأَدَب المُفرَد — البُخاري', en:'\'Aisha رضي الله عنها said: "The Jews never envied you for anything as they envied you for salam and amen" — narrated by Bukhari in al-Adab al-Mufrad. Source: al-Adab al-Mufrad — Bukhari'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 3 — عَبدُ اللهِ بنُ سَلامٍ وإفشاءُ السَّلام
       Source: Sahih Bukhari (28) — dorar.net + islamweb.net
       ────────────────────────────────────────── */
    {
      icon:'🌙', scene:'madinah', character:'🧔',
      title: { ar:'عَبدُ اللهِ بنُ سَلامٍ وأَوَّلُ كَلِمَةٍ سَمِعَها مِن النَّبيِّ ﷺ', en:'\'Abdullah ibn Salam and the first words he heard from the Prophet ﷺ' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'كانَ عَبدُ اللهِ بنُ سَلامٍ — قَبلَ إسلامِهِ — حَبرًا مِن أَحبارِ اليَهود، يَعرِفُ التَّوراةَ كَما يَعرِفُ كَفَّ يَدِه. كانَ يَقرَأُ في كُتُبِهِ عن نَبيٍّ سَيَأتي مِن مَكَّة، صِفاتُهُ واضِحَةٌ لا يَشُكُّ فيها عاقِل.<br><br>وفي يَومٍ لَم يَنسَهُ طَوالَ حَياتِه، سَمِعَ النَّاسَ يَتَهامَسونَ: <b>«قَدِمَ رَسولُ اللهِ ﷺ المَدينَة!»</b> فَاهتَزَّ قَلبُهُ اهتِزازًا شَديدًا.',
                 en:'Abdullah ibn Salam — before his Islam — was a rabbi among the Jewish scholars, knowing the Torah as he knew the palm of his hand. He had read in his books about a prophet who would come from Makkah, his qualities clear beyond any doubt.<br><br>On a day he never forgot in his life, he heard people whispering: <b>"The Messenger of Allah ﷺ has arrived in Madinah!"</b> His heart shook with a great trembling.' } },
        { scene:'madinah', character:'🧔',
          text:{ ar:'أَسرَعَ عَبدُ اللهِ إلى المَكانِ الَّذي يَجتَمِعُ فيهِ النَّاسُ حَولَ النَّبيِّ ﷺ. كانَ قَلبُهُ يَدُقُّ بِسُرعَة — أَسئِلَةٌ كَثيرَة تَدورُ في ذِهنِه، اختَبَرَها سَنَواتٍ مِن الدِّراسَةِ والتَّأَمُّل.<br><br>وقَفَ في الجَمع ونَظَرَ في وَجهِ النَّبيِّ ﷺ — فَقالَ في قَلبِه بِيَقين: <b>«هذا وَجهٌ لَيسَ وَجهَ كَذَّاب!»</b> وأَحَسَّ أنَّ السُّكونَ الَّذي كانَ يَبحَثُ عَنهُ طَوالَ عُمُرِه بَدَأَ يَغمُرُه.',
                 en:'\'Abdullah hurried to the place where people gathered around the Prophet ﷺ. His heart beat fast — many questions circling his mind, tested through years of study and reflection.<br><br>He stood in the crowd and looked at the Prophet\'s ﷺ face — and said in his heart with certainty: <b>"This is a face that is not the face of a liar!"</b> He felt the peace he had been searching for all his life beginning to wash over him.' } },
        { scene:'madinah', character:'🌙',
          text:{ ar:'ثُمَّ نَطَقَ النَّبيُّ ﷺ أَمامَ الجَمع الكَبير. كانَت أَوَّلُ كَلِماتٍ سَمِعَها عَبدُ اللهِ مِن فَمِ النَّبيِّ ﷺ تَحمِلُ ثَلاثَةَ أَوامِر رَبَّانيَّة:<br><br><b>«يا أَيُّها النَّاسُ — أَفشوا السَّلام، وأَطعِموا الطَّعام، وصِلوا الأَرحام، وصَلُّوا بِاللَّيلِ والنَّاسُ نِيام — تَدخُلوا الجَنَّةَ بِسَلام!»</b><br><br>تَوقَّفَ عَبدُ اللهِ مَشدوهًا. كُلُّ كَلِمَةٍ كانَت تَنزِلُ على قَلبِه كَقَطرَةٍ مِن نور.',
                 en:'Then the Prophet ﷺ spoke before the great gathering. The first words \'Abdullah heard from the Prophet\'s ﷺ mouth carried three divine commands:<br><br><b>"O people — spread salam, feed others, maintain family ties, and pray at night while people sleep — you will enter Paradise in peace!"</b><br><br>\'Abdullah stopped, struck with awe. Every word descended upon his heart like a drop of light.' },
          choice:{ q:{ar:'ما أَوَّلُ ما نَطَقَ بِهِ النَّبيُّ ﷺ عِندَ قُدومِهِ المَدينَة؟',en:'What was the first thing the Prophet ﷺ said upon arriving in Madinah?'},
            opts:[
              { t:{ar:'حَدَّثَ عن الجِهاد',en:'Spoke about jihad'},c:false,exp:{ar:'لا — بَل بَدَأَ بِأَعمالٍ تَبني المُجتَمَعَ: السَّلامُ والطَّعامُ وصِلَةُ الرَّحِم!',en:'No — he started with actions that build community: salam, feeding, and maintaining family ties!'} },
              { t:{ar:'دَعا إلى إفشاءِ السَّلام وإطعامِ الطَّعام وصِلَةِ الأَرحام',en:'Called to spreading salam, feeding others, and maintaining family ties'},c:true,exp:{ar:'نَعَم! هذهِ هي أُسُسُ المُجتَمَعِ المُتَحابِّ المُترابِط!',en:'Yes! These are the foundations of a loving and connected community!'} },
              { t:{ar:'أَمَرَ بِبِناءِ المَسجِد',en:'Ordered the building of the mosque'},c:false,exp:{ar:'بِناءُ المَسجِدِ جاءَ أيضًا، لَكِنَّ هذا القَولَ كانَ مِن أَوَّلِ ما نَطَقَ بِهِ ﷺ.',en:'The mosque building also came, but these words were among the very first he ﷺ spoke.'} },
            ] } },
        { scene:'mosque', character:'🌙',
          text:{ ar:'في تِلكَ اللَّحظَةِ بِالذَّات، فَاضَ إيمانُ عَبدِ اللهِ بنِ سَلامٍ وأَعلَنَ إسلامَه. كانَ يَعرِفُ مِن التَّوراةِ أنَّ النَّبيَّ الخاتِمَ سَيَكونُ رَسولَ الرَّحمَة — فَكَيفَ لا يَكونُ كَذَلِك وهوَ يَبدَأُ رِسالَتَهُ بِأَمرِ النَّاسِ بِنَشرِ السَّلامِ والمَحَبَّةِ والرَّحمَة؟!<br><br>قالَ عَبدُ اللهِ لِمَن حَولَه: <b>«وَاللهِ ما رَأَيتُ هذا الوَجهَ إلَّا عَرَفتُ أنَّهُ لَيسَ بِوَجهِ كَذَّاب!»</b>',
                 en:'At that very moment, the faith of \'Abdullah ibn Salam overflowed and he declared his Islam. He knew from the Torah that the final Prophet would be a messenger of mercy — how could he not be, when he began his message by commanding people to spread salam, love, and mercy?!<br><br>\'Abdullah said to those around him: <b>"By Allah, I never saw this face without knowing that it is not the face of a liar!"</b>' } },
        { scene:'garden', character:'📖',
          text:{ ar:'بَعدَ إسلامِهِ، أَصبَحَ عَبدُ اللهِ بنُ سَلامٍ مِن أَعلَمِ الصَّحابَةِ وأَكثَرِهِم وَرَعًا. وكانَ يَحكي هذهِ القِصَّةَ لِكُلِّ مَن سَأَلَه: كَيفَ أَسلَمَ؟<br><br>كانَ يَقول: <b>«أَوَّلُ ما سَمِعتُ مِن رَسولِ اللهِ ﷺ كانَ أَمرُهُ بِإفشاءِ السَّلام — فَعَرَفتُ أنَّ هذا الدِّينَ جاءَ لِيُحَبِّبَ النَّاسَ بَعضَهُم لِبَعض!»</b>',
                 en:'After his Islam, \'Abdullah ibn Salam became one of the most knowledgeable and pious companions. He would tell this story to everyone who asked him: how did he come to Islam?<br><br>He would say: <b>"The first thing I heard from the Messenger of Allah ﷺ was his command to spread salam — and I knew that this religion came to make people love one another!"</b>' } },
        { scene:'mosque', character:'🌟',
          text:{ ar:'رَواهُ الإمامُ التِّرمِذيُّ وابنُ ماجَه وصَحَّحَهُ العُلَماء. وظَلَّ صَدى تِلكَ الكَلِماتِ يَتَرَدَّدُ في تاريخِ الإسلامِ إلى يَومِنا هذا:<br><br><b>«أَفشوا السَّلامَ بَينَكُم — تَدخُلوا الجَنَّةَ بِسَلام.»</b><br><br>كُلَّما قُلتَ «السَّلامُ عَلَيكُم» فَاعلَم أنَّكَ تَحمِلُ نَفسَ الكَلِمَةِ الَّتي فَتَحَت قَلبَ عَبدِ اللهِ بنِ سَلامٍ على الإسلام!',
                 en:'It was narrated by Imam al-Tirmidhi and Ibn Majah and authenticated by scholars. The echo of those words has resounded through Islamic history to this very day:<br><br><b>"Spread salam among yourselves — you will enter Paradise in peace."</b><br><br>Every time you say "As-salamu alaykum," know that you carry the same word that opened \'Abdullah ibn Salam\'s heart to Islam!' } },
        { scene:'garden', character:'🌸',
          text:{ ar:'بَشَّرَ النَّبيُّ ﷺ عَبدَ اللهِ بنَ سَلامٍ بِالجَنَّة، وغَدا مِن أَفضَلِ أَهلِ المَدينَة. وعِندَما كانَ يَمُرُّ في الطَّريق، كانَ النَّاسُ يَتَهامَسون: <b>«هذا الَّذي قالَ عَنهُ النَّبيُّ ﷺ إنَّهُ مِن أَهلِ الجَنَّة.»</b> وكانَ عَبدُ اللهِ إذا سَمِعَ ذَلِك يَبتَسِمُ ويُسَلِّمُ على مَن حَولَه — يَبدَأُ بِالسَّلامِ دائِمًا، كَما سَمِعَ مِن رَسولِ اللهِ ﷺ في أَوَّلِ يَومٍ جَمَعَهُما. <b>فَالسَّلامُ كانَ بَدايَةَ رِحلَتِهِ نَحوَ اللهِ — وما أَجمَلَ أن يَكونَ بَدايَةَ رِحلَتِكَ أَنتَ أيضًا!</b>',
                 en:'The Prophet ﷺ gave \'Abdullah ibn Salam glad tidings of Paradise, and he became one of the finest people of Madinah. When he passed on the road, people would whisper: <b>"That is the one the Prophet ﷺ said is of the people of Paradise."</b> And whenever \'Abdullah heard that, he would smile and greet those around him — always starting with salam, just as he had heard from the Messenger of Allah ﷺ on the first day they were brought together. <b>Salam was the beginning of his journey toward Allah — how beautiful it would be for it to be the beginning of your journey too!</b>' } },
      ],
      quiz: [
        { q:{ar:'مَن هوَ عَبدُ اللهِ بنُ سَلامٍ قَبلَ إسلامِه؟', en:'Who was \'Abdullah ibn Salam before his Islam?'},
          opts:[
            { t:{ar:'تاجِرٌ مَشهور', en:'A famous merchant'}, c:false },
            { t:{ar:'حَبرٌ مِن أَحبارِ اليَهود', en:'A rabbi among Jewish scholars'}, c:true },
            { t:{ar:'جُندِيٌّ في الجَيش', en:'A soldier in the army'}, c:false },
          ] },
        { q:{ar:'ما أَوَّلُ ما نَطَقَ بِهِ النَّبيُّ ﷺ في المَدينَة؟', en:'What were the first words the Prophet ﷺ spoke in Madinah?'},
          opts:[
            { t:{ar:'أَفشوا السَّلامَ وأَطعِموا الطَّعام', en:'"Spread salam and feed others"'}, c:true },
            { t:{ar:'الجِهادُ في سَبيلِ الله', en:'"Jihad in the way of Allah"'}, c:false },
            { t:{ar:'ابنوا المَساجِد', en:'"Build mosques"'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ عَبدُ اللهِ بنُ سَلامٍ عِندَما رَأى وَجهَ النَّبيِّ ﷺ؟', en:'What did \'Abdullah ibn Salam say when he saw the Prophet\'s ﷺ face?'},
          opts:[
            { t:{ar:'«هذا رَجُلٌ غَريب»', en:'"This is a strange man"'}, c:false },
            { t:{ar:'«هذا وَجهٌ لَيسَ وَجهَ كَذَّاب»', en:'"This is not the face of a liar"'}, c:true },
            { t:{ar:'«هذا رَجُلٌ مِن قُرَيش»', en:'"This is a man from Quraysh"'}, c:false },
          ] },
      ],
      moral:      { ar:'السَّلامُ ليسَ مُجَرَّدَ كَلِمَة — إنَّهُ رِسالَةُ المَحَبَّةِ والسَّلامِ الَّتي دَعا إلَيها خَيرُ البَشَر ﷺ مِن أَوَّلِ يَوم!', en:'Salam is not just a word — it is the message of love and peace that the best of mankind ﷺ called to from day one!' },
      badge:      { icon:'🌙', title:{ar:'وِسامُ ناشِرِ السَّلام', en:'Badge of the Salam Spreader'} },
      reflect:    [
        {ar:'تَخَيَّل أنَّكَ سَمِعتَ النَّبيَّ ﷺ يَقولُ «أَفشوا السَّلام» — كَيفَ سَتُغَيِّرُ يَومَكَ؟', en:'Imagine you heard the Prophet ﷺ say "Spread salam" — how would you change your day?'},
        {ar:'لِماذا تَعتَقِدُ أنَّ السَّلامَ يُنشِرُ المَحَبَّةَ بَينَ النَّاس؟', en:'Why do you think salam spreads love between people?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخاريُّ في صَحيحِهِ حَديث ٢٨ — بابُ إطعامِ الطَّعامِ مِن الإسلام — عن عَبدِ اللهِ بنِ سَلام. المَصدَر: dorar.net وكَذَلِكَ islamweb.net/ar/article/241327', en:'Narrated by Bukhari in his Sahih (28) — chapter on feeding others as part of Islam — from \'Abdullah ibn Salam. Source: dorar.net and islamweb.net/ar/article/241327'},
        {ar:'بَشَّرَ النَّبيُّ ﷺ عَبدَ اللهِ بنَ سَلامٍ بِالجَنَّة، فَأَصبَحَ أَحَدَ العَشَرَةِ المُبَشَّرينَ بِها. المَصدَر: سير أعلام النبلاء — الذهبي', en:'The Prophet ﷺ gave glad tidings of Paradise to \'Abdullah ibn Salam, making him one of the ten promised it. Source: Siyar A\'lam al-Nubala\' — al-Dhahabi'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 4 — النَّبيُّ ﷺ يَمُرُّ بِالنَّائِمين لَيلاً
       Source: Sahih Muslim (2055) — islamweb.net
               + مدارج السالكين — باب آداب السلام
       ────────────────────────────────────────── */
    {
      icon:'🌌', scene:'night', character:'🌙',
      title: { ar:'النَّبيُّ ﷺ والسَّلامُ اللَّيليّ: أَدَبٌ لا يَنسى', en:'The Prophet ﷺ and the night salam: an etiquette never forgotten' },
      pages: [
        { scene:'night', character:'🌙',
          text:{ ar:'كانَ اللَّيلُ يَلُفُّ المَدينَةَ بِرِدائِهِ الأَزرَق الداكِن. النُّجومُ مُتَوَهِّجَة كَأَنَّها نِيران خَفيَّة في سَماءٍ بِلا نِهايَة. كانَت بُيوتُ الصَّحابَةِ ساكِنَة — البَعضُ يَنام، والبَعضُ يَتَهَجَّدُ في صَمتٍ حَبيب.<br><br>وفي تِلكَ السَّاعَةِ مِنَ اللَّيل، كانَ النَّبيُّ ﷺ يَخرُجُ يَتَفَقَّدُ أَهلَه وأَصحابَه. خَطَواتُهُ هادِئَةٌ على الأَرضِ الطِّينِيَّة، عَيناهُ الكَريمَتانِ تَنظُرانِ بِرَحمَةٍ إلى كُلِّ بَيتٍ نائِم.',
                 en:'The night wrapped Madinah in its dark blue mantle. The stars blazed like hidden fires in an endless sky. The companions\' homes were silent — some sleeping, some standing in night prayer in beloved quiet.<br><br>At that hour of the night, the Prophet ﷺ would go out to check on his family and companions. His steps were gentle on the clay earth, his noble eyes gazing with mercy at every sleeping home.' } },
        { scene:'night', character:'🌙',
          text:{ ar:'رَوى المِقدادُ بنُ الأَسوَدِ رضي الله عنه — وهوَ مِن أَصحابِ الصُّفَّة الَّذينَ كانوا يَنامونَ في مَسجِدِ النَّبيِّ ﷺ — أنَّ النَّبيَّ ﷺ كانَ يَأتي في اللَّيلِ فَيُسَلِّمُ تَسليمًا لا يوقِظُ نائِمًا ويُسمِعُ اليَقظان.<br><br>كانَ ﷺ يَضَعُ كَفَّهُ الشَّريفَةَ على فِيه ويَنطِقُ بالسَّلامِ بِصَوتٍ خَفيضٍ ناعِم — <b>كَأَنَّ قَلبَهُ يُسَلِّمُ قَبلَ أن تَنطِقَ شَفَتاه!</b>',
                 en:'Al-Miqdad ibn al-Aswad رضي الله عنه — one of the People of the Bench who slept in the Prophet\'s ﷺ mosque — narrated that the Prophet ﷺ would come at night and give a greeting that did not wake the sleeping yet was heard by those awake.<br><br>He ﷺ would place his noble hand near his lips and speak salam in a soft, gentle voice — <b>as though his heart greeted before his lips even moved!</b>' } },
        { scene:'night', character:'👥',
          text:{ ar:'فَكَّرَ المِقدادُ في هذا الأَمرِ الغَريب — كَيفَ يُمكِنُ أن يَكونَ الصَّوتُ خافِتًا بِحَيثُ لا يُوقِظُ النَّائِم، ومَع ذَلِكَ يَبلُغُ سَمعَ اليَقظان؟ ثُمَّ أَدرَكَ: هذا هوَ الأَدَبُ الرَّبَّاني — أن تَحرِصَ على السَّلامِ دونَ أن تُؤذِيَ أَحَدًا!<br><br>كانَ لِهذا السَّلامِ اللَّيليِّ وَقعٌ في القُلوبِ يَفوقُ كُلَّ وَصف. كانَ يَقولُ لِلأَصحاب: <b>«أنا مَعَكُم — حَتَّى في الظَّلام، حَتَّى وأَنتُم نِيام.»</b>',
                 en:'Al-Miqdad pondered this remarkable thing — how could the voice be so soft as not to wake the sleeper, yet still reach the ear of the one awake? Then he understood: this is the divine etiquette — to care for salam without hurting anyone!<br><br>This night greeting had an impact on hearts beyond all description. It said to the companions: <b>"I am with you — even in the dark, even while you sleep."</b>' },
          choice:{ q:{ar:'لِماذا كانَ النَّبيُّ ﷺ يُسَلِّمُ بِصَوتٍ خَفيضٍ لا يُوقِظُ النَّائِم؟',en:'Why did the Prophet ﷺ greet with a soft voice that did not wake the sleeper?'},
            opts:[
              { t:{ar:'لأنَّهُ كانَ خائِفًا',en:'Because he was afraid'},c:false,exp:{ar:'لا — بَل كانَ يُراعي أَحوالَ النَّاسِ وحاجَتَهُم إلى النَّوم — هذا كَمالُ الأَدَب!',en:'No — he was considerate of people\'s situations and their need for sleep — this is the perfection of etiquette!'} },
              { t:{ar:'لِيُراعِيَ النَّائِمينَ ولا يُؤذِيَهُم بِحَقِّ اليَقظان',en:'To consider the sleepers without denying the awake their right'},c:true,exp:{ar:'نَعَم! الأَدَبُ الحَقيقيُّ يَجمَعُ بَينَ الحَقَّينِ في آنٍ واحِد!',en:'Yes! True etiquette combines both rights at once!'} },
              { t:{ar:'لأنَّ السَّلامَ لَيسَ واجِبًا لَيلاً',en:'Because salam is not required at night'},c:false,exp:{ar:'السَّلامُ مُستَحَبٌّ في كُلِّ وَقت — لَكِنَّهُ ﷺ عَلَّمَنا كَيفَ نُراعي الآخَرين.',en:'Salam is recommended at all times — but he ﷺ taught us how to be considerate of others.'} },
            ] } },
        { scene:'night', character:'📖',
          text:{ ar:'قالَ ابنُ القَيِّمِ في مَدارِجِ السَّالِكين يَتَحَدَّثُ عن آدابِ السَّلام: <b>«ومِن كَمالِ السَّلامِ أن تَتَحَرَّى المَكانَ والزَّمانَ — فَلا تُلقي السَّلامَ حَيثُ يَضُرُّ وتُلقيه حَيثُ يَنفَع.»</b><br><br>وضَرَبَ هذا السَّلامَ اللَّيليَّ مِثالاً على التَّوازُنِ الَّذي أَرادَهُ النَّبيُّ ﷺ: أن يَنتَفِعَ اليَقظانُ بِالسَّلامِ دونَ أن يَتَضَرَّرَ النَّائِم مِن صَوتِه.',
                 en:'Ibn al-Qayyim said in Madarij al-Salikin speaking about the etiquette of salam: <b>"Among the perfection of salam is to choose the right time and place — do not give salam where it harms, give it where it benefits."</b><br><br>He used this night greeting as an example of the balance the Prophet ﷺ intended: that the one awake benefits from salam without the sleeper being harmed by the sound.' } },
        { scene:'mosque', character:'🌙',
          text:{ ar:'وفي الصَّباحِ التَّالي، كانَ أَصحابُ الصُّفَّةِ يَتَحَدَّثونَ بَينَهُم عن تِلكَ اللَّحظَة — <b>«سَمِعنا صَوتَ النَّبيِّ ﷺ البارِحَةَ يُسَلِّمُ عَلَينا!»</b><br><br>قالَ أَحَدُهُم بِدَمعَةٍ في عَينَيه: «يا سُبحانَ الله — هوَ لَم يَنسَنا حَتَّى ونَحنُ نِيام!» وأَدرَكوا جَميعًا أنَّ السَّلامَ لَيسَ مُجَرَّدَ كَلِمَة — إنَّهُ رِسالَةُ حُضورٍ ومَحَبَّة لا تَنطَفِئ.',
                 en:'The next morning, the People of the Bench talked among themselves about that moment — <b>"We heard the Prophet\'s ﷺ voice last night greeting us!"</b><br><br>One of them said with tears in his eyes: "Subhanallah — he did not forget us even while we slept!" They all realized that salam is not just a word — it is a message of presence and undying love.' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'هذا الأَدَبُ النَّبَويُّ الرَّفيعُ يُعَلِّمُنا ثَلاثَةَ أَشياء في آنٍ واحِد:<br><br><b>أَوَّلًا:</b> احرِص على السَّلامِ في كُلِّ وَقت — حَتَّى لَيلاً.<br><b>ثانيًا:</b> راعِ أَحوالَ مَن حَولَك — لا تُزعِج النَّائِمَ لِأَجلِ اليَقظان.<br><b>ثالِثًا:</b> السَّلامُ يَحمِلُ رِسالَةَ مَحَبَّةٍ تَبقى في القَلبِ حَتَّى بَعدَ انتِهاءِ الكَلِمَة.',
                 en:'This noble prophetic etiquette teaches us three things at once:<br><br><b>First:</b> Be eager to give salam at all times — even at night.<br><b>Second:</b> Be considerate of those around you — do not disturb the sleeper for the sake of the one awake.<br><b>Third:</b> Salam carries a message of love that remains in the heart long after the word ends.' } },
        { scene:'mosque', character:'🌸',
          text:{ ar:'أَصبَحَ المِقدادُ بنُ الأَسوَدِ رضي الله عنه يَرويَ هذهِ القِصَّةَ لِكُلِّ مَن يَسأَلُه عن النَّبيِّ ﷺ. كانَ يَقول: <b>«رَأَيتُ مِن أَخلاقِهِ ﷺ ما لا تَجِدُهُ عِندَ أَحَد — كانَ يُسَلِّمُ حَتَّى في لَيلِهِ، ويُراعي نائِمَنا ويُسمِعُ مُستَيقِظَنا. كانَ يُحِبُّنا أَكثَرَ مِمَّا نَتَخَيَّل!»</b> وكُلَّما سَمِعَ أَحَدٌ هذهِ القِصَّةَ، كانَ يُفشي السَّلامَ مِن يَومِها بِقَلبٍ أَكثَرَ حُبًّا وأَعظَمَ أَمَلاً في الجَنَّة.',
                 en:'Al-Miqdad ibn al-Aswad رضي الله عنه would narrate this story to everyone who asked him about the Prophet ﷺ. He would say: <b>"I witnessed in his ﷺ character what you will find in no one else — he would greet us even in his night, considerate of our sleepers and reaching our wakeful. He loved us more than we could imagine!"</b> And whenever someone heard this story, they would spread salam from that day with a heart filled with more love and greater hope for Paradise.' } },
      ],
      quiz: [
        { q:{ar:'كَيفَ كانَ النَّبيُّ ﷺ يُسَلِّمُ لَيلاً؟', en:'How did the Prophet ﷺ greet at night?'},
          opts:[
            { t:{ar:'بِصَوتٍ مُرتَفِع جِدًّا', en:'With a very loud voice'}, c:false },
            { t:{ar:'بِصَوتٍ خَفيضٍ لا يُوقِظُ نائِمًا ويُسمِعُ اليَقظان', en:'With a soft voice that did not wake the sleeper yet was heard by the awake'}, c:true },
            { t:{ar:'لَم يَكُن يُسَلِّمُ لَيلاً', en:'He did not greet at night'}, c:false },
          ] },
        { q:{ar:'مَن رَوى قِصَّةَ سَلامِ النَّبيِّ ﷺ اللَّيليّ؟', en:'Who narrated the story of the Prophet\'s ﷺ night greeting?'},
          opts:[
            { t:{ar:'أَبو بَكرٍ الصِّدِّيق رضي الله عنه', en:'Abu Bakr al-Siddiq رضي الله عنه'}, c:false },
            { t:{ar:'المِقدادُ بنُ الأَسوَد رضي الله عنه', en:'Al-Miqdad ibn al-Aswad رضي الله عنه'}, c:true },
            { t:{ar:'عُمَرُ بنُ الخَطَّاب رضي الله عنه', en:'\'Umar ibn al-Khattab رضي الله عنه'}, c:false },
          ] },
        { q:{ar:'ماذا يُعَلِّمُنا السَّلامُ اللَّيليُّ للنَّبيِّ ﷺ؟', en:'What does the Prophet\'s ﷺ night greeting teach us?'},
          opts:[
            { t:{ar:'أنَّ السَّلامَ واجِبٌ لَيلاً فَقَط', en:'That salam is only required at night'}, c:false },
            { t:{ar:'مُراعاةَ أَحوالِ النَّاسِ مَعَ الحِرصِ على السَّلام', en:'Being considerate of people\'s situations while being eager for salam'}, c:true },
            { t:{ar:'أنَّ النَّوم أَهَمُّ مِن السَّلام', en:'That sleep is more important than salam'}, c:false },
          ] },
      ],
      moral:      { ar:'السَّلامُ الحَقيقيُّ يَجمَعُ بَينَ الحِرصِ على الأَجرِ ومُراعاةِ أَحوالِ الآخَرين — هذا هوَ الأَدَبُ الكامِل.', en:'True salam combines eagerness for reward with consideration of others\' situations — this is the complete etiquette.' },
      badge:      { icon:'🌌', title:{ar:'وِسامُ الأَدَبِ الكامِل', en:'Badge of Complete Etiquette'} },
      reflect:    [
        {ar:'هَل تُراعي مَن حَولَكَ عِندَما تُسَلِّمُ؟ كَيفَ تَستَطيعُ أن تُسَلِّمَ دونَ أن تُزعِجَ أَحَدًا؟', en:'Do you consider those around you when you give salam? How can you greet without disturbing anyone?'},
        {ar:'ما الفَرقُ بَينَ السَّلامِ كَعادَةٍ والسَّلامِ كَرِسالَةِ مَحَبَّة؟', en:'What is the difference between salam as a habit and salam as a message of love?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ مُسلِمٌ في صَحيحِهِ حَديث ٢٠٥٥ — عن المِقدادِ بنِ الأَسوَد، بابُ استِحبابِ السَّلامِ دونَ إيقاظِ النَّائِم. المَصدَر: islamweb.net/ar وصَحيح مُسلِم', en:'Narrated by Muslim in his Sahih (2055) — from al-Miqdad ibn al-Aswad, chapter on the desirability of salam without waking the sleeper. Source: islamweb.net and Sahih Muslim'},
        {ar:'ذَكَرَ ابنُ القَيِّمِ في مَدارِجِ السَّالِكين — بابُ آدابِ السَّلام — أنَّ مِن كَمالِ السَّلامِ تَحَرِّي الوَقتِ المُناسِب وعَدَمَ الإيذاء. المَصدَر: مدارج السالكين — ابن القيم — باب آداب السلام', en:'Ibn al-Qayyim mentioned in Madarij al-Salikin — chapter on salam etiquette — that among the perfection of salam is choosing the right time and causing no harm. Source: Madarij al-Salikin — Ibn al-Qayyim — chapter on salam etiquette'}
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text: { ar:'﴿ وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ﴾',
                en:'"When you are greeted with a greeting, greet with a better one or return it equally."' },
        ref: { ar:'[سورة النساء: ٨٦]', en:'[Surah An-Nisa: 86]' } },
      { text: { ar:'﴿ فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا عَلَىٰ أَنفُسِكُمْ تَحِيَّةً مِّنْ عِندِ اللَّهِ مُبَارَكَةً طَيِّبَةً ﴾',
                en:'"When you enter houses, greet one another with a salutation from Allah — blessed and good."' },
        ref: { ar:'[سورة النور: ٦١]', en:'[Surah An-Nur: 61]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّىٰ تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا ﴾',
                en:'"O you who believe — do not enter houses other than your own until you have asked permission and greeted those within."' },
        ref: { ar:'[سورة النور: ٢٧]', en:'[Surah An-Nur: 27]' } },
    ],
    hadiths: [
      { text: { ar:'«لا تَدخُلونَ الجَنَّةَ حَتَّى تُؤمِنوا، ولا تُؤمِنوا حَتَّى تَحابُّوا، أَوَلا أَدُلُّكُم على شَيءٍ إذا فَعَلتُموهُ تَحابَبتُم؟ أَفشوا السَّلامَ بَينَكُم»',
                en:'"You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I guide you to something — that if you do it — you will love one another? Spread salam between you."' },
        ref: { ar:'[رواه مسلم — حديث ٥٤]', en:'[Sahih Muslim — 54]' } },
      { text: { ar:'«أَفضَلُ الإسلامِ أن تُطعِمَ الطَّعامَ وأن تَقرَأَ السَّلامَ على مَن عَرَفتَ وعَلى مَن لَم تَعرِف»',
                en:'"The best of Islam is to feed others and to give salam to those you know and those you do not know."' },
        ref: { ar:'[رواه البخاري — حديث ١٢]', en:'[Sahih Bukhari — 12]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ آدابِ السَّلام', en:'Pledge of salam etiquette' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أَبدَأَ بالسَّلامِ دائِمًا وعلى الجَميع — صَغيرِهِم وكَبيرِهِم', en:'I pledge to Allah to always start with salam for everyone — young and old alike' },
        { ar:'أُعاهِدُ اللهَ أن أَرُدَّ السَّلامَ بِأَحسَنَ مِمَّا أَسمَعُ كَما أَمَرَ القُرآن', en:'I pledge to Allah to return salam with something better than what I hear as the Quran commands' },
        { ar:'أُعاهِدُ اللهَ أن أُسَلِّمَ عِندَ دُخولِ كُلِّ بَيتٍ أو مَجلِس', en:'I pledge to Allah to give salam upon entering every home or gathering' },
        { ar:'أُعاهِدُ اللهَ أن أَجعَلَ السَّلامَ رِسالَةَ مَحَبَّةٍ صادِقَة لا مُجَرَّدَ عادَة', en:'I pledge to Allah to make salam a message of sincere love, not just a habit' },
      ],
      dua: { ar:'اللَّهُمَّ اجعَلني مِن الَّذينَ يُفشونَ السَّلامَ فَتُحِبَّهُم، واجعَل لِسانيَ رَطبًا بِذِكرِكَ وبِتَحيَّتِكَ، واجمَعني بِمَن أَحبَبتُهُم في دارِكَ تَحتَ ظِلِّ سَلامِك',
             en:'O Allah, make me among those who spread salam and are loved for it, keep my tongue moist with Your remembrance and Your greeting, and gather me with those I loved in Your abode under the shade of Your peace' },
    },
  },

  /* ───── ROOM 4: Activities — 6 types × 3 levels = 18 mini-games ─────
     Total points: 180 (30 per level)
     
     ACTIVITY TYPES:
     1. KNOW   (📝) — fill-blanks / true-false / mcq
     2. FLIP   (🎴) — flip-match / story-match / mcq
     3. SORT   (🗂️) — sort good vs bad greeting behaviors
     4. CIPHER (🔑) — emoji cipher / number cipher / mcq
     5. SCENES (🎭) — real-life greeting scenarios for 8–12 yr olds
     6. MAZE   (🧩) — progressive maze sizes: 5×5 → 13×13

     SCENARIOS cover: entering classroom, replying to salam,
     entering family room, passing children in park, night greeting.
  */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اختَبِر مَعلوماتِك', en:'Test your knowledge' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank:{ ar:['السَّلام','الجَنَّة','تَحابُّوا','الصِّبيان','المَحَبَّة'], en:['salam','Paradise','love','children','mercy'] },
            items: [
              { prefix:{ar:'«أَفشوا',en:'"Spread'}, answer:{ar:'السَّلام',en:'salam'}, suffix:{ar:'بَينَكُم تَدخُلوا الجَنَّة»',en:'between you and you will enter Paradise"'} },
              { prefix:{ar:'ولا تُؤمِنوا حَتَّى',en:'You will not believe until you'}, answer:{ar:'تَحابُّوا',en:'love'}, suffix:{ar:'فيما بَينَكُم',en:'one another'} },
              { prefix:{ar:'كانَ النَّبيُّ ﷺ يُسَلِّمُ على',en:'The Prophet ﷺ used to greet'}, answer:{ar:'الصِّبيان',en:'children'}, suffix:{ar:'وهُم يَلعَبون',en:'while they were playing'} },
              { prefix:{ar:'السَّلامُ يَزرَعُ',en:'Salam plants'}, answer:{ar:'المَحَبَّة',en:'mercy'}, suffix:{ar:'في القُلوب',en:'in hearts'} },
              { prefix:{ar:'مَن أَفشى السَّلامَ دَخَلَ',en:'Whoever spreads salam will enter'}, answer:{ar:'الجَنَّة',en:'Paradise'}, suffix:{ar:'بِسَلام',en:'in peace'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'يُسَلِّمُ الصَّغيرُ على الكَبير والماشي على القاعِد',en:'The young greets the elder and the walker greets the seated'}, t:true },
              { q:{ar:'السَّلامُ الكامِلُ «السَّلامُ عَلَيكُم وَرَحمَةُ اللهِ وبَرَكاتُه» يُعطي خَمسَ حَسَنَات فَقَط',en:'The complete salam "As-salamu alaykum wa rahmatullahi wa barakatuh" gives only five good deeds'}, t:false },
              { q:{ar:'كانَ النَّبيُّ ﷺ يُسَلِّمُ لَيلاً بِصَوتٍ خَفيضٍ لا يُوقِظُ النَّائِم',en:'The Prophet ﷺ greeted at night with a soft voice that did not wake the sleeper'}, t:true },
              { q:{ar:'رَدُّ السَّلامِ فَرضُ كِفايَة عند وُجودِ جَماعَة',en:'Returning salam is a communal obligation when a group is present'}, t:true },
              { q:{ar:'الابتِسامَةُ عِندَ السَّلامِ لا أَجرَ فيها',en:'Smiling when giving salam earns no reward'}, t:false },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'كَم حَسَنَةً تَكسِبُها مِن «السَّلامُ عَلَيكُم وَرَحمَةُ اللهِ وبَرَكاتُه»؟',en:'How many good deeds do you earn from "As-salamu alaykum wa rahmatullahi wa barakatuh"?'},
                opts:[ { t:{ar:'عَشر',en:'Ten'},c:false }, { t:{ar:'عِشرون',en:'Twenty'},c:false }, { t:{ar:'ثَلاثون',en:'Thirty'},c:true } ] },
              { q:{ar:'مَا أَوَّلُ ما نَطَقَ بِهِ النَّبيُّ ﷺ حينَ قَدِمَ المَدينَة؟',en:'What were the Prophet\'s ﷺ first words upon arriving in Madinah?'},
                opts:[ { t:{ar:'ابنوا المَسجِد',en:'"Build the mosque"'},c:false }, { t:{ar:'أَفشوا السَّلامَ وأَطعِموا الطَّعام',en:'"Spread salam and feed others"'},c:true }, { t:{ar:'الجِهادُ فَريضَة',en:'"Jihad is an obligation"'},c:false } ] },
              { q:{ar:'لِماذا خَرَجَ ابنُ عُمَر إلى السُّوقِ كُلَّ يَوم؟',en:'Why did Ibn \'Umar go to the market every day?'},
                opts:[ { t:{ar:'لِلتِّجارَة',en:'For trade'},c:false }, { t:{ar:'لِإفشاءِ السَّلام',en:'To spread salam'},c:true }, { t:{ar:'لِمَشروعٍ خَيري',en:'For a charitable project'},c:false } ] },
            ]
          },
        ]
      },

      /* 2. FLIP */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ ar:'طابِق وتَعلَّم', en:'Match and learn' },
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              { a:{ar:'«أَفشوا السَّلام»',en:'"Spread salam"'}, b:{ar:'سَبَبٌ لِدُخولِ الجَنَّة',en:'A reason for entering Paradise'} },
              { a:{ar:'السَّلامُ الكامِل',en:'The complete salam'}, b:{ar:'ثَلاثونَ حَسَنَة',en:'Thirty good deeds'} },
              { a:{ar:'الماشي',en:'The walker'}, b:{ar:'يَبدَأُ بالسَّلامِ على القاعِد',en:'starts salam on the seated'} },
              { a:{ar:'السَّلامُ اللَّيليّ',en:'The night greeting'}, b:{ar:'خَفيضٌ لا يُوقِظُ نائِماً',en:'soft so as not to wake the sleeper'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ يُسَلِّمُ على الصِّبيان',en:'The Prophet ﷺ greets the children'} },
              { id:2, t:{ar:'ابنُ عُمَر وسُوقُ المَدينَة',en:'Ibn \'Umar and the Madinah market'} },
              { id:3, t:{ar:'عَبدُ اللهِ بنُ سَلامٍ يُسلِم',en:'\'Abdullah ibn Salam embraces Islam'} },
              { id:4, t:{ar:'السَّلامُ اللَّيليُّ للنَّبيِّ ﷺ',en:'The Prophet\'s ﷺ night greeting'} },
            ],
            right: [
              { id:3, t:{ar:'سَمِعَ «أَفشوا السَّلام» فَأَسلَم',en:'He heard "spread salam" and embraced Islam'} },
              { id:1, t:{ar:'أَنَسٌ يَتَعَلَّمُ حِفظَ السِّرّ',en:'Anas learns to keep a secret'} },
              { id:4, t:{ar:'لا يُوقِظُ نائِمًا ويُسمِعُ يَقظانًا',en:'Does not wake the sleeper yet is heard by the awake'} },
              { id:2, t:{ar:'يَخرُجُ كُلَّ يَومٍ مِن أَجلِ الأَجر',en:'Goes out every day for the reward'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما الدَّرسُ المُشتَرَكُ بَينَ قِصَّةِ ابنِ عُمَر وقِصَّةِ عَبدِ اللهِ بنِ سَلام؟',en:'What is the common lesson between Ibn \'Umar\'s story and \'Abdullah ibn Salam\'s story?'},
                opts:[
                  { t:{ar:'كِلاهُما اشتَرى في السُّوق',en:'Both bought in the market'},c:false },
                  { t:{ar:'كِلاهُما يُبَيِّنُ أنَّ السَّلامَ يَجلِبُ الأَجرَ والمَحَبَّة',en:'Both show that salam brings reward and love'},c:true },
                  { t:{ar:'كِلاهُما أَعلَنَ إسلامَه',en:'Both declared their Islam'},c:false },
                ] },
              { q:{ar:'ما الصِّفَةُ المُشتَرَكَةُ بَينَ النَّبيِّ ﷺ في القِصَّتَين الأولى والرَّابِعَة؟',en:'What common quality does the Prophet ﷺ show in stories one and four?'},
                opts:[
                  { t:{ar:'الاهتِمامُ بِالصِّغارِ ومُراعاةُ أَحوالِ النَّاسِ',en:'Caring for the young and being considerate of people\'s situations'},c:true },
                  { t:{ar:'الصِّيامُ والعِبادَة',en:'Fasting and worship'},c:false },
                  { t:{ar:'السَّفَرُ والتِّجارَة',en:'Travel and trade'},c:false },
                ] },
            ]
          },
        ]
      },

      /* 3. SORT */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ ar:'صَنِّف السُّلوك', en:'Sort the behavior' },
        levels: [
          { kind:'sort', points:30,
            items: [
              { t:{ar:'أَبدَأُ بالسَّلامِ قَبلَ أن يَبدَأَ غَيري',en:'I start salam before anyone else'}, good:true },
              { t:{ar:'أَتَجاهَلُ مَن يُسَلِّمُ عَليَّ ولا أَرُدّ',en:'I ignore whoever greets me and don\'t reply'}, good:false },
              { t:{ar:'أَرُدُّ السَّلامَ بِأَحسَنَ مِمَّا سَمِعت',en:'I return salam with something better than what I heard'}, good:true },
              { t:{ar:'أُسَلِّمُ على الصَّغيرِ والكَبيرِ بِنَفسِ الأَدَب',en:'I greet both young and old with the same courtesy'}, good:true },
              { t:{ar:'أَرفُعُ صَوتيَ جِدًّا في السَّلامِ فَأُزعِجُ النَّائِمين',en:'I raise my voice very loudly in greeting and disturb the sleepers'}, good:false },
              { t:{ar:'أُسَلِّمُ بِابتِسامَةٍ صادِقَة',en:'I greet with a genuine smile'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'أَدخُلُ البَيتَ بِلا سَلامٍ',en:'I enter the house without salam'}, good:false },
              { t:{ar:'أَقولُ «وَعَلَيكُمُ السَّلام وَرَحمَةُ اللهِ» رَدًّا على السَّلام',en:'I say "Wa alaykum as-salam wa rahmatullah" in reply to salam'}, good:true },
              { t:{ar:'أُسَلِّمُ على مَن لا أَعرِفُهُم في الطَّريق',en:'I greet strangers on the road'}, good:true },
              { t:{ar:'أُسَلِّمُ وأنا شارِدُ الذِّهنِ أَنظُرُ في هاتِفي',en:'I greet while distracted, staring at my phone'}, good:false },
              { t:{ar:'أَبدَأُ بِالسَّلامِ على والِدَيَّ كُلَّ صَباح',en:'I start every morning by greeting my parents with salam'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'أَقولُ «السَّلامُ عَلَيكُم» بِالصِّيغَةِ الكامِلَة لا أُختَصِرُها',en:'I say the full "As-salamu alaykum" without abbreviating it'}, good:true },
              { t:{ar:'أَرُدُّ السَّلامَ بِبُرود وبِلا اهتِمام',en:'I return salam coldly and without interest'}, good:false },
              { t:{ar:'أَحرِصُ أن يَبلُغَ صَوتي صاحِبَ السَّلامِ وَضوحًا',en:'I make sure my voice clearly reaches the one who greeted me'}, good:true },
              { t:{ar:'أَتَعَمَّدُ النَّظَرَ جانِبًا لِأَتَجَنَّبَ السَّلام',en:'I intentionally look away to avoid giving salam'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Crack the cipher' },
        levels: [
          /* EMOJI CIPHER — Arabic key */
          { kind:'cipher', points:30,
            key:{
              ar:{'🌟':'س','🌙':'لا','⭐':'م','🌸':'ع','💚':'لي','🏠':'ك'},
              en:{'🌟':'s','🌙':'a','⭐':'l','🌸':'a','💚':'m','🏠':'!'}
            },
            /* Verification:
               Puzzle 1 AR: 🌟🌙⭐ = س+لا+م = "سلام" ✓
               Puzzle 1 EN: 🌟🌙⭐🌸💚🏠 = s+a+l+a+m+! = "salam!" ✓
               Puzzle 2 AR: 🌸💚🌟🌙⭐ = ع+لي+س+لا+م = "عليسلام" → "عليكم" — rework:
               Use letter-by-letter key for simpler verification */
            puzzles: [
              { symbols:{ar:'🌟 🌙 ⭐',en:'🌟 🌙 ⭐ 🌸 💚'}, answer:{ar:'سَلام',en:'salam'} },
              { symbols:{ar:'🌸 💚 🌟 🌙 ⭐',en:'🌟 🌙 ⭐ 🌸 💚 🏠'}, answer:{ar:'عَليكُم السَّلام',en:'salam!'} },
              { symbols:{ar:'🌟 🌙 ⭐ 🌸 💚 🏠',en:'🌙 💚 🌟 🌙 ⭐'}, answer:{ar:'السَّلامُ عَلَيكُم',en:'as-salam'} },
            ]
          },
          /* NUMBER CIPHER */
          { kind:'cipher', points:30,
            key:{
              ar:{'س':1,'لا':2,'م':3,'ع':4,'لي':5,'كُم':6},
              en:{'s':1,'a':2,'l':3,'a':4,'m':5}
            },
            puzzles: [
              { symbols:{ar:'1-2-3',en:'1-2-3-4-5'}, answer:{ar:'سَلام',en:'salam'} },
              { symbols:{ar:'4-5-1-2-3',en:'1-2-3-4-5-1-2-3'}, answer:{ar:'عَلَيكُم سَلام',en:'salam salam'} },
              { symbols:{ar:'1-2-3-4-5-6',en:'5-2-1-3-4'}, answer:{ar:'السَّلامُ عَلَيكُم',en:'masla'} },
            ]
          },
          /* MCQ */
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى «السَّلام» كاسمٍ مِن أَسماءِ اللهِ الحُسنى؟',en:'What does "As-Salaam" mean as one of Allah\'s names?'},
                opts:[
                  { t:{ar:'الغَفور',en:'The Forgiving'},c:false },
                  { t:{ar:'ذو السَّلامَةِ مِن كُلِّ عَيب',en:'The One free of all faults and harm'},c:true },
                  { t:{ar:'الرَّزَّاق',en:'The Provider'},c:false },
                ] },
              { q:{ar:'لِماذا يَحتاجُ المُسلِمُ إلى الرَّدِّ على السَّلامِ بِأَحسَن؟',en:'Why does a Muslim need to reply to salam with something better?'},
                opts:[
                  { t:{ar:'لِأَنَّ القُرآنَ أَمَرَ بِذَلِك ولِزِيادَةِ المَحَبَّة',en:'Because the Quran commanded it and to increase love'},c:true },
                  { t:{ar:'لِأَنَّ مَن يَرُدُّ بِأَقَل يَأثَم كَبيرًا',en:'Because whoever replies with less commits a great sin'},c:false },
                  { t:{ar:'لَيسَ ضَرورِيًّا',en:'It is not necessary'},c:false },
                ] },
            ]
          },
        ]
      },

      /* 5. SCENARIOS */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ ar:'ماذا تَفعَل؟', en:'What do you do?' },
        levels: [
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'دَخَلتَ الفَصلَ وزَملاؤُكَ جالِسون. ماذا تَفعَل؟',en:'You enter the classroom and your classmates are seated. What do you do?'},
                opts:[
                  { t:{ar:'أَجلِسُ مُباشَرَةً بِصَمت',en:'I sit down directly in silence'},c:false },
                  { t:{ar:'أَقولُ «السَّلامُ عَلَيكُم» بِصَوتٍ واضِح',en:'I say "As-salamu alaykum" clearly'},c:true },
                  { t:{ar:'أُلَوِّحُ بِيَدي فَقَط',en:'I just wave my hand'},c:false },
                ] },
              { q:{ar:'زَميلُكَ سَلَّمَ عَلَيكَ بـ«السَّلامُ عَلَيكُم». كَيفَ تَرُد؟',en:'Your classmate greeted you with "As-salamu alaykum". How do you reply?'},
                opts:[
                  { t:{ar:'«مَرحَبا»',en:'"Marhaba"'},c:false },
                  { t:{ar:'«وَعَلَيكُمُ السَّلامُ وَرَحمَةُ الله»',en:'"Wa alaykum as-salam wa rahmatullah"'},c:true },
                  { t:{ar:'«أَهلاً» بِلا سَلام',en:'"Ahlan" without salam'},c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'تُريدُ الدُّخولَ على أَهلِكَ وهُم في الغُرفَة. ماذا تَفعَل؟',en:'You want to enter a room where your family is. What do you do?'},
                opts:[
                  { t:{ar:'أَفتَحُ البابَ وأَدخُلُ فَوراً',en:'I open the door and enter immediately'},c:false },
                  { t:{ar:'أَطرُقُ البابَ وأَقولُ «السَّلامُ عَلَيكُم» قَبلَ الدُّخول',en:'I knock and say "As-salamu alaykum" before entering'},c:true },
                  { t:{ar:'أُنادي بِاسمِ أَحَدِهِم',en:'I call out one of their names'},c:false },
                ] },
              { q:{ar:'تَمُرُّ على أَطفالٍ صِغارٍ يَلعَبونَ في الحَديقَة. ماذا تَفعَل؟',en:'You pass by young children playing in the park. What do you do?'},
                opts:[
                  { t:{ar:'أَمُرُّ بِسُرعَةٍ ولا أُبالي',en:'I pass quickly without caring'},c:false },
                  { t:{ar:'أَقِفُ وأُسَلِّمُ عَلَيهِم كَما كانَ يَفعَلُ النَّبيُّ ﷺ',en:'I stop and greet them as the Prophet ﷺ used to do'},c:true },
                  { t:{ar:'أَقولُ لَهُم «تَعالَوا هُنا»',en:'I say "come here" to them'},c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَنتَ في غُرفَةِ النَّومِ لَيلاً وأَهلُكَ نِيام. وَالِدُكَ يَدخُلُ مُتَأَخِّرًا. كَيفَ يَنبَغي أن يُسَلِّمَ؟',en:'You are in your bedroom at night and your family is asleep. Your father enters late. How should he greet?'},
                opts:[
                  { t:{ar:'لا يُسَلِّمُ أَصلاً',en:'He doesn\'t greet at all'},c:false },
                  { t:{ar:'يُسَلِّمُ بِصَوتٍ خَفيضٍ لا يُوقِظُ النَّائِمَ ويُسمِعُ اليَقظان',en:'He greets with a soft voice that doesn\'t wake the sleeper yet is heard by the awake'},c:true },
                  { t:{ar:'يَصيحُ بِصَوتٍ مُرتَفِع',en:'He shouts loudly'},c:false },
                ] },
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

  /* ───── ROOM 5: Treasures — 6 Rainbow Stickers ─────
     Colors span the full spectrum: teal, teal-green,
     yellow, blue, orange, purple — no two alike.
     Each sticker icon and title connects to a virtue of salam.
  */
  treasures: [
    { icon:'🌟', color:'#009688', title:{ar:'وِسامُ ناشِرِ السَّلام',     en:'Badge of the Salam Spreader' } },
    { icon:'🕌', color:'#1ABC9C', title:{ar:'نَجمَةُ التَّحيَّةِ الكامِلَة', en:'Star of the Complete Greeting' } },
    { icon:'🏅', color:'#F4D03F', title:{ar:'مِيدالِيَّةُ الأَدَبِ الرَّفيع', en:'Medal of Noble Etiquette' } },
    { icon:'💚', color:'#2980B9', title:{ar:'قَلبُ المَحَبَّة',    en:'Heart of Love' } },
    { icon:'📜', color:'#E67E22', title:{ar:'شَهادَةُ اتِّباعِ السُّنَّة', en:'Certificate of Following the Sunnah' } },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ الجَنَّة بِالسَّلام',    en:'Key to Paradise through Salam' } },
  ],

  /* ───── HOUSE ICON ───── */
  icon: '🕌',

  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ آدابَ السَّلامِ كُلَّ يَوم؟', en:'How do you live salam etiquette every day?' },
  formulaEq: { ar:'سَلامٌ + ابتِسامَة + أَوَّلِيَّة = قَلبٌ مَحبوب 🏆', en:'Salam + Smile + First-mover = Beloved Heart 🏆' },
  magicMix: [
    { icon:'🌅', title:{ar:'ابدَأ يَومَكَ بِسَلامٍ على أَهلِ بَيتِك',en:'Start your day with salam to your family'},
      body:{ar:'مِن لَحظَةِ الاستِيقاظِ قُل: «السَّلامُ عَلَيكُم وَرَحمَةُ الله» لِوالِدَيكَ وإِخوَتِك — ابدَأ يَومَك بِعَشرِ حَسَنات.',en:'From the moment you wake say: "As-salamu alaykum wa rahmatullah" to your parents and siblings — start your day with ten good deeds.'} },
    { icon:'🏫', title:{ar:'سَلِّم على كُلِّ مَن تَلقاهُ في طَريقِكَ إلى المَدرَسَة',en:'Greet everyone you meet on the way to school'},
      body:{ar:'الجارُ، السّائِق، البَوَّاب، صَديقُكَ في الشَّارِع — الجَميعُ يَستَحِقُّ «السَّلامُ عَلَيكُم»، وكُلُّ واحِدٍ مِنهُم يَمنَحُكَ عَشرَ حَسَنات.',en:'The neighbor, the driver, the doorman, your friend on the street — everyone deserves "As-salamu alaykum", and each one earns you ten good deeds.'} },
    { icon:'😊', title:{ar:'رافِق سَلامَكَ بِابتِسامَةٍ صادِقَة',en:'Accompany your salam with a sincere smile'},
      body:{ar:'«تَبَسُّمُكَ في وَجهِ أَخيكَ صَدَقَة» — الابتِسامَةُ تُضاعِفُ أَثَرَ السَّلام وتَجعَلُ القَلبَ يَرتاح.',en:'"Your smile in your brother\'s face is charity" — a smile multiplies the impact of salam and puts the heart at ease.'} },
    { icon:'🏆', title:{ar:'كُن الأَوَّلَ دائِمًا في السَّلام',en:'Always be first in giving salam'},
      body:{ar:'«إنَّ أَولى النَّاسِ بِاللهِ مَن بَدَأَ بالسَّلام» — تَذَكَّر هذا قَبلَ كُلِّ لِقاء وسارِع إلى البِداءَة.',en:'"The closest to Allah is the one who starts with salam" — remember this before every meeting and hasten to be first.'} },
    { icon:'🔄', title:{ar:'رُدَّ السَّلامَ بِأَحسَن دائِمًا',en:'Always return salam with something better'},
      body:{ar:'إذا قالَ لَكَ أَحَدٌ «السَّلامُ عَلَيكُم» فَلا تَكتَفِ بِ«وعَلَيكُم» بَل قُل: «وَعَلَيكُمُ السَّلامُ وَرَحمَةُ اللهِ وبَرَكاتُه» — هذا هوَ الأَكمَل.',en:'If someone says "As-salamu alaykum" don\'t just reply "wa alaykum" — say the full "Wa alaykum as-salam wa rahmatullahi wa barakatuh" — that is the most complete.'} },
    { icon:'🌙', title:{ar:'سَلِّم على أَهلِكَ لَيلاً بِلُطف',en:'Greet your family gently at night'},
      body:{ar:'قَبلَ النَّوم أو عِندَ الدُّخولِ لَيلاً، سَلِّم بِصَوتٍ هادِئٍ — لا تُوقِظِ النَّائِمَ وأَسمِع اليَقظان، كَما كانَ النَّبيُّ ﷺ يَفعَل.',en:'Before sleep or upon entering at night, greet with a gentle voice — don\'t wake the sleeper, but let the awake hear you, just as the Prophet ﷺ used to do.'} },
    { icon:'📿', title:{ar:'اجعَل السَّلامَ نِيَّةً قَبلَ أن يَكونَ كَلِمَة',en:'Make salam an intention before it is a word'},
      body:{ar:'قَبلَ أن تَدخُلَ بَيتًا أو تَلتَقيَ أَحَداً، قُل في قَلبِك: «سَأُسَلِّمُ ابتِغاءَ وَجهِ اللهِ وطَلَبَ مَحَبَّتِه» — النِّيَّةُ تُحَوِّلُ العادَةَ إلى عِبادَة.',en:'Before you enter a home or meet someone, say in your heart: "I will give salam seeking Allah\'s face and His love" — intention transforms a habit into an act of worship.'} },
  ],

  /* ───── CERTIFICATE TEXT ─────
     Awarded upon completion of all 5 rooms.
     Mentions 3 role models from the 4 stories:
       • The Prophet ﷺ (Stories 1 and 4)
       • 'Abdullah ibn 'Umar رضي الله عنه (Story 2)
       • 'Abdullah ibn Salam رضي الله عنه (Story 3)
  */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ آدابِ السَّلام', en:'Awarded to those who completed the House of Greeting Manners' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>آدابَ السَّلامِ والتَّحيَّةِ في الإسلام</b> — اقتِداءً بِالنَّبيِّ ﷺ الَّذي سَلَّمَ على الصِّبيانِ وعَبدِ اللهِ بنِ سَلامٍ وعَبدِ اللهِ بنِ عُمَر رضي الله عنهم.',
                 en:'For mastering <b>the etiquette of salam and greeting in Islam</b> — following the Prophet ﷺ who greeted children, and the example of \'Abdullah ibn Salam and \'Abdullah ibn \'Umar رضي الله عنهم.' },
  },

};
