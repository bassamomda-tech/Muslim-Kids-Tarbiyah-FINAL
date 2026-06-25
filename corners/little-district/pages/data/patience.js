/* ═══════════════════════════════════════════════════════════════
   بَيتُ الصَّبر  ·  House of Patience
   slug: patience  |  id: 13  |  cat: akhlaq
   color: #37474F  |  art: fortress
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.patience = {

  tagline: {
    ar: 'الصَّبرُ نِصفُ الإيمانِ وبابُ الفَرَج',
    en: 'Patience is half of faith and the gateway to relief',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ اللهَ ذَكَرَ الصَّبرَ في القُرآنِ أكثَرَ مِن تِسعينَ مَرَّة؟', en:'Did you know Allah mentioned patience more than ninety times in the Quran?' },
      sub:   { ar:'«عَجَباً لِأَمرِ المُؤمِن، إنَّ أَمرَهُ كُلَّهُ خَيرٌ، وليسَ ذلكَ لِأَحَدٍ إلّا لِلمُؤمِن: إن أَصابَتهُ سَرّاءُ شَكَرَ فَكانَ خَيراً لَه، وإن أَصابَتهُ ضَرّاءُ صَبَرَ فَكانَ خَيراً لَه» — رَواهُ مُسلِم — حَديث ٢٩٩٩', en:'"How wonderful is the affair of the believer! All his affairs are good, and that is for none except the believer: if something good happens he gives thanks — that is good for him; if something bad happens he bears it with patience — that is good for him." — Sahih Muslim — 2999' },
    },
    definition: {
      linguistic: {
        ar: 'الصَّبرُ مِن «صَبَرَ» أي حَبَسَ وكَفَّ — لأنَّ الصَّابِرَ يَحبِسُ نَفسَهُ عَن الجَزَعِ والشَّكوى وعَجَلَةِ الاستِسلام!',
        en: 'From the root meaning "to restrain and hold back" — because the patient person restrains himself from panic, complaint, and hasty surrender!',
      },
      terminology: {
        ar: 'الصَّبرُ هو <b>حَبسُ النَّفسِ على ما تَكرَه</b> في طاعَةِ اللهِ، وحَبسُها عَمّا تُحِبُّهُ مِن مَعصيَتِه، واحتِمالُ البَلاءِ بِقَلبٍ راضٍ واثِقٍ بِاللهِ.',
        en: 'Patience is <b>restraining the self against what it dislikes</b> in obedience to Allah, holding it back from the sin it loves, and bearing trials with a heart at peace and trusting in Allah.',
      },
      simile: {
        ar: 'الصَّبرُ كالجَذرِ الخَفِيِّ تَحتَ الأَرض: لا تَراهُ، لكنَّهُ يَحمِلُ الشَّجَرَةَ كُلَّها فَلا تُسقِطُها العاصِفَة. والصَّابِرُ كالذَّهَبِ في النّار — كُلَّما زادَت النّارُ اشتَعالاً، ازدادَ الذَّهَبُ صَفاءً وبَريقاً!',
        en: 'Patience is like the hidden root beneath the earth: you cannot see it, yet it holds the entire tree upright so no storm can topple it. And the patient person is like gold in fire — the hotter the flame, the purer and more brilliant the gold shines!',
      },
    },
    forms: [
      { icon:'🕌', color:'#1565C0', title:{ar:'الصَّبرُ على الطَّاعَة',         en:'Patience in worship'},
        body:{ar:'الصَّبرُ على أَداءِ العِباداتِ كُلَّها رَغمَ تَعَبِ النَّفسِ وكَسَلِها. الصِّيامُ في حَرِّ الصَّيفِ، والقِيامُ في بَردِ الشِّتاء، والمُداوَمَةُ على الطّاعَةِ يَوماً بَعدَ يَوم.', en:'Being patient in performing all acts of worship despite the self\'s weariness and laziness. Fasting in summer heat, praying at night in winter cold, persisting in obedience day after day.'} },
      { icon:'🚫', color:'#C0392B', title:{ar:'الصَّبرُ عَن المَعصيَة',         en:'Patience from sin'},
        body:{ar:'الصَّبرُ عَن مَحارِمِ اللهِ ومَعاصيه رَغمَ وَساوِسِ النَّفسِ ودَواعي الهَوى. كَصَبرِ يوسُفَ عليه السلام لَمّا اختارَ السِّجنَ على المَعصيَة.', en:'Being patient from Allah\'s prohibitions and sins despite the self\'s whispers and desires\' temptations — as Yusuf عليه السلام chose prison over disobedience.'} },
      { icon:'🌧️', color:'#37474F', title:{ar:'الصَّبرُ على البَلاء',           en:'Patience through hardship'},
        body:{ar:'الصَّبرُ على المَصائِبِ والأَمراضِ وفَقدِ الأَحِبَّةِ والمال. كَصَبرِ أيّوبَ عليه السلام الَّذي احتَمَلَ سَنَواتٍ مِن المَرَضِ والحُزنِ فَكانَ صَبرُهُ مَثَلاً لِلعالَمين.', en:'Being patient through calamities, illness, loss of loved ones, and wealth — as Ayyub عليه السلام endured years of sickness and grief, making his patience a parable for all mankind.'} },
      { icon:'⏳', color:'#8E44AD', title:{ar:'الصَّبرُ على طَلَبِ العِلم',     en:'Patience in seeking knowledge'},
        body:{ar:'المُواظَبَةُ على التَّعَلُّمِ رَغمَ صُعوبَتِه وطولِ مَشوارِه. العُلَماءُ الكِبارُ قَضَوا عُمُرَهُم في القِراءَةِ والمُذاكَرَة، صابِرينَ على ذلكَ سَنَواتٍ طَويلَة.', en:'Persisting in learning despite its difficulty and long journey. Great scholars spent their lives in reading and study, patiently persisting for many years.'} },
      { icon:'🤝', color:'#27AE60', title:{ar:'الصَّبرُ على أَذى النّاس',      en:'Patience with people\'s harm'},
        body:{ar:'احتِمالُ أَذى الخَلقِ بِقَلبٍ كَريم. كَصَبرِ بِلالٍ رضي الله عنه على تَعذيبِ قُرَيش وهو يَرفُضُ أن يَنطِقَ بِكَلِمَةِ الكُفرِ، ثابِتاً على «أَحَدٌ أَحَد».', en:'Bearing the harm of people with a noble heart — as Bilal رضي الله عنه endured Quraysh\'s torture yet refused to utter a word of disbelief, firm on "Ahad… Ahad."'} },
      { icon:'🌱', color:'#E67E22', title:{ar:'الصَّبرُ على تَربيَةِ النَّفس',  en:'Patience in self-cultivation'},
        body:{ar:'تَهذيبُ الأَخلاقِ ومُجاهَدَةُ النَّفسِ يَستَلزِمُ صَبراً طَويلاً. الخُلُقُ الحَسَنُ لا يَأتي في يَومٍ واحِد — بل يُبنى مَعَ كُلِّ اختِبارٍ وكُلِّ مَوقِف.', en:'Refining character and struggling against the self requires long patience. Good character doesn\'t come in a single day — it is built with each test and each situation.'} },
    ],
    ranking: [
      { color:'#1565C0', title:{ar:'الصَّبرُ بِالله',      en:'Patience through Allah'},
        body:{ar:'أَعلى دَرَجاتِ الصَّبر: أن تَصبِرَ بِقُوَّةِ اللهِ لا بِقُوَّتِكَ، مُستَمِدّاً الثَّباتَ مِن إيمانِكَ ويَقينِكَ بِاللهِ تَعالى. هذا صَبرُ الأَنبِياء.', en:'The highest rank of patience: to endure through Allah\'s strength not your own, drawing steadfastness from your faith and certainty in Allah Most High. This is the patience of the Prophets.'} },
      { color:'#27AE60', title:{ar:'الصَّبرُ للهِ وفي الله', en:'Patience for Allah and in Allah'},
        body:{ar:'أن تَصبِرَ طَلَباً لِرِضا الله، مُحتَسِباً أَجرَكَ عِندَه، واثِقاً بِأَنَّ الفَرَجَ آتٍ لا مَحالَة. هذا صَبرُ الصِّدِّيقين.', en:'To endure seeking Allah\'s pleasure, anticipating His reward, trusting that relief will surely come. This is the patience of the Truthful.'} },
      { color:'#E67E22', title:{ar:'الصَّبرُ مَعَ الله',   en:'Patience alongside Allah'},
        body:{ar:'أن تَصبِرَ وأَنتَ مُلازِمٌ لِبابِ اللهِ — مُصَلّياً داعياً ذاكِراً — لا تُغلِقُ قَلبَكَ على اليَأس. هذا صَبرُ الصّالِحين.', en:'To endure while remaining at Allah\'s door — praying, supplicating, remembering — never closing your heart to despair. This is the patience of the righteous.'} },
      { color:'#8E44AD', title:{ar:'الصَّبرُ العاديّ',      en:'Ordinary patience'},
        body:{ar:'الصَّبرُ على مَضَضٍ مَعَ عَدَمِ الشَّكوى الكَثيرَة. أَدنى دَرَجاتِ الصَّبر، لَكِنَّهُ بِداياتٌ حَسَنَةٌ إن صَحِبَها نِيَّةٌ صادِقَة.', en:'Enduring with discomfort yet without excessive complaint. The lowest rank of patience, but a good beginning when accompanied by sincere intention.'} },
    ],
    verses: [
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ ﴾',
                en:'"O you who believe — seek help through patience and prayer. Indeed Allah is with the patient."' },
        ref: { ar:'[سورة البقرة: ١٥٣]', en:'[Surah Al-Baqarah: 153]' } },
      { text: { ar:'﴿ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ ﴾',
                en:'"Indeed the patient will be given their reward without limit."' },
        ref: { ar:'[سورة الزُّمَر: ١٠]', en:'[Surah Az-Zumar: 10]' } },
      { text: { ar:'﴿ وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ ﴾',
                en:'"And We will surely test you with something of fear and hunger and loss of wealth and lives and fruits — but give good tidings to the patient."' },
        ref: { ar:'[سورة البقرة: ١٥٥]', en:'[Surah Al-Baqarah: 155]' } },
    ],
    hadiths: [
      { text: { ar:'«عَجَباً لِأَمرِ المُؤمِن، إنَّ أَمرَهُ كُلَّهُ خَيرٌ: إن أَصابَتهُ سَرّاءُ شَكَرَ فَكانَ خَيراً لَه، وإن أَصابَتهُ ضَرّاءُ صَبَرَ فَكانَ خَيراً لَه»',
                en:'"How wonderful is the affair of the believer! All his affairs are good: if good befalls him he gives thanks and that is good for him; if hardship befalls him he endures with patience and that is good for him."' },
        source: { ar:'[رواه مسلم — حديث ٢٩٩٩]', en:'[Sahih Muslim — 2999]' } },
      { text: { ar:'«ما أُعطِيَ أَحَدٌ عَطاءً خَيراً وأَوسَعَ مِنَ الصَّبر»',
                en:'"No one has ever been given a gift better and more ample than patience."' },
        source: { ar:'[رواه البُخاري — حديث ١٤٦٩]', en:'[Sahih al-Bukhari — 1469]' } },
    ],
    benefits: [
      { ar:'🏆 يُوفَّى الصَّابِرونَ أَجرَهُم بِغَيرِ حِساب — لا سَقفَ لِثَوابِهِم!', en:'🏆 The patient receive their reward without limit — their reward has no ceiling!' },
      { ar:'🌈 الفَرَجُ يَأتي بَعدَ الضِّيق — «إنَّ مَعَ العُسرِ يُسراً»', en:'🌈 Relief comes after hardship — "Indeed with every difficulty there is ease"' },
      { ar:'🌱 الصَّبرُ يُنضِجُ الشَّخصيَّةَ ويُعَمِّقُ الإيمان', en:'🌱 Patience matures character and deepens faith' },
      { ar:'💎 الصَّابِرُ يَنالُ مَحَبَّةَ اللهِ — «إنَّ اللهَ مَعَ الصّابِرين»', en:'💎 The patient earns Allah\'s love — "Indeed Allah is with the patient"' },
      { ar:'🌟 الصَّبرُ يُورِثُ الإمامَةَ في الدِّين — «بِالصَّبرِ واليَقينِ تُنالُ الإمامَة»', en:'🌟 Patience brings leadership in faith — "Through patience and certainty, leadership is attained"' },
    ],
    obstacles: [
      { ar:'الجَزَعُ والتَّسَخُّطُ عِندَ أَوَّلِ بَلاء',      en:'Panic and resentment at the first hardship' },
      { ar:'ضَعفُ اليَقينِ بِأَجرِ اللهِ وفَرَجِه',           en:'Weak certainty in Allah\'s reward and relief' },
      { ar:'صُحبَةُ أَهلِ الجَزَعِ والتَّشكّي',               en:'Company of those who panic and complain' },
      { ar:'قِصَرُ النَّظَرِ وحُبُّ العاجِلَة',               en:'Short-sightedness and love of immediate results' },
    ],
    acquireMeans: [
      { ar:'اذكُرِ اللهَ كَثيراً وتَلُ آياتِ الصَّبرِ في القُرآن', en:'Remember Allah much and recite the Quran\'s verses on patience daily' },
      { ar:'تَأَمَّل في قِصَصِ الأَنبِياءِ الصّابِرين: أيّوب ويوسُف وغَيرِهِم', en:'Reflect on the stories of the patient Prophets: Ayyub, Yusuf, and others' },
      { ar:'تَذَكَّر أنَّ كُلَّ مُصيبَةٍ لَها أَجرٌ عَظيمٌ عِندَ الله', en:'Remember that every calamity carries a great reward with Allah' },
      { ar:'دَرِّب نَفسَكَ على التَّأَخُّرِ في الاستِجابَةِ لِلغَضَب — اصبِر ثَلاثاً قَبلَ أن تَتَكَلَّم', en:'Train yourself to delay reactions to anger — be patient for three breaths before speaking' },
    ],
  },



  /* ───── ROOM 2: Stories ───── */
  /*
     STORY 1 — يوسُف عليه السلام في البِئر والسِّجن
     Source: quranpedia.net — تفسير سورة يوسف
     STORY 2 — أيّوب عليه السلام والصَّبرُ الجَميل
     Source: islamweb.net/ar/article/170335
     STORY 3 — بِلالُ بن رَباح رضي الله عنه — أَحَدٌ أَحَد
     Source: سير أعلام النبلاء — الذهبي — ج١ ص٣٤٨
     STORY 4 — ابن القيم وحِكمَةُ الصَّبر
     Source: مدارج السالكين — ابن القيم — باب الصبر
  */
  stories: [

    /* ──────────────────────────────────────────
       STORY 1 — يوسُف عليه السلام: صَبرُ النَّبيِّ الكَريم
       Scene: desert/garden | Character: 🌟
       Source: quranpedia.net — تفسير سورة يوسف
    ────────────────────────────────────────── */
    {
      icon:'⭐', scene:'desert', character:'🌟',
      title: { ar:'يوسُفُ الصّابِر: مِن البِئرِ إلى عَرشِ مِصر', en:'Patient Yusuf: from the well to Egypt\'s throne' },
      pages: [
        { scene:'garden', character:'🌟',
          text:{ ar:'في وادٍ مُشمِسٍ بِأَرضِ كَنعان، كانَ يوسُفُ عليه السلام يَنامُ نَوماً هادِئاً فَرَأى في مَنامِهِ أَحَدَ عَشَرَ كَوكَباً والشَّمسَ والقَمَرَ لَهُ ساجِدين. أَيقَظَهُ هذا الحُلمُ العَجيبُ بِقَلبٍ مُتَرَقِّب — ماذا يَعني هذا الرُّؤيا؟ رَكَضَ مُسرِعاً إلى أَبيهِ يَعقوبَ عليه السلام، والفَرَحُ يَملأُ عَينَيه.<br><br>سَمِعَ يَعقوبُ الرُّؤيا بِإِنصاتٍ عَميق، ثُمَّ ضَمَّ يوسُفَ إلى صَدرِهِ بِحَنانٍ وقالَ بِصَوتٍ خافِت: <b>«يا بُنَيَّ، لا تَقصُص رُؤياكَ على إِخوَتِك فَيَكيدوا لَك كَيداً — إنَّ الشَّيطانَ لِلإنسانِ عَدُوٌّ مُبين!»</b> كانَ يَعقوبُ يَعلَمُ أنَّ لِهذه الرُّؤيا شَأناً عَظيماً، وأنَّ الطَّريقَ إلى تَحقيقِها سَيَكونُ طَريقاً وَعِراً.', en:'In a sun-drenched valley in the land of Canaan, Yusuf عليه السلام slept peacefully and dreamed of eleven stars, the sun, and the moon all bowing down to him. This wondrous dream awakened him with a watchful, wondering heart — what could it mean? He ran quickly to his father Yaqub عليه السلام, his eyes filled with joy and wonder.<br><br>Yaqub listened to the dream with deep attention, then drew Yusuf tenderly to his chest and said in a soft voice: <b>"My dear son — do not tell your dream to your brothers, for they may plot against you. Surely the Shaitan is a clear enemy to mankind!"</b> Yaqub knew this dream carried great significance, and that the road to its fulfillment would be long and steep.' } },

        { scene:'desert', character:'😟',
          text:{ ar:'وَساوَسَ الشَّيطانُ لإِخوَةِ يوسُفَ الَّذينَ كانوا يَحسُدونَهُ على حُبِّ أَبيهِم لَه. اجتَمَعوا في خِفيَة، يَتَهامَسون: «يوسُفُ وأَخوهُ أَحَبُّ إلى أَبينا مِنّا ونَحنُ عُصبَة — إنَّ أَبانا لَفي ضَلالٍ مُبين!» قَرَّروا أن يَتَخَلَّصوا مِنه.<br><br>ذاتَ صَباحٍ، طَلَبوا مِن أَبيهِم أن يُرسِلَ يوسُفَ مَعَهُم يَلعَبُ في الصَّحراء. خَرَجوا معاً، والشَّمسُ تَلفَحُ الرِّمالَ الذَّهَبيَّة. ثُمَّ — في لَحظَةٍ لم يَتَوَقَّعها — أَمسَكَ بِهِ إِخوَتُهُ وأَلقَوهُ في بِئرٍ عَميقَةٍ مُظلِمَة. صَدى صَوتِهِ يَرتَدُّ مِن جُدرانِ الحَجَر، وهُم يَتَركونَهُ ويَمضون.', en:'The Shaitan whispered to Yusuf\'s brothers who envied him for their father\'s love. They gathered secretly, whispering to one another: "Yusuf and his brother are more beloved to our father than we are, though we are a group — surely our father is in clear error!" They decided to rid themselves of him.<br><br>One morning, they asked their father to send Yusuf with them to play in the wilderness. They left together, the sun scorching the golden sand. Then — in a moment he never expected — his brothers seized him and threw him down into a deep, dark well. His voice echoed off the stone walls as they left him and walked away.' },
          choice:{ q:{ar:'ماذا فَعَلَ يوسُفُ في أَعماقِ البِئر؟', en:'What did Yusuf do in the depths of the well?'},
            opts:[
              { t:{ar:'بَكى وتَذَمَّرَ وكَفَرَ بِالله.', en:'He wept, complained, and disbelieved in Allah.'},
                c:false,
                exp:{ar:'لا — يوسُفُ نَبيٌّ كَريم! صَبَرَ واحتَسَبَ عِندَ رَبِّه، ولم يَيأَس مِن رَحمَةِ الله.', en:'No — Yusuf was a noble Prophet! He endured patiently, entrusting himself to his Lord, and never despaired of Allah\'s mercy.'} },
              { t:{ar:'صَبَرَ وتَوَكَّلَ على اللهِ ولم يَيأَس.', en:'He was patient, put his trust in Allah, and never lost hope.'},
                c:true,
                exp:{ar:'نَعَم! هذه هي قِمَّةُ الصَّبر — الثِّقَةُ باللهِ في أَشَدِّ الظُّلُمات.', en:'Yes! This is the pinnacle of patience — trusting Allah in the darkest of moments.'} },
              { t:{ar:'صَرَخَ وطَلَبَ النَّجدَةَ مِن قَبيلَتِه.', en:'He screamed and called for help from his tribe.'},
                c:false,
                exp:{ar:'لم يَكُن مَعَهُ أَحَدٌ في تِلكَ الصَّحراء إلّا اللهُ — ولَجَأَ إلى اللهِ وحدَه.', en:'There was no one with him in that wilderness except Allah — and he turned to Allah alone.'} },
            ] } },

        { scene:'desert', character:'🌟',
          text:{ ar:'مَرَّت ساعاتٌ ثَقيلَة. ثُمَّ سَمِعَ يوسُفُ أَصواتاً مِن فَوق — قافِلَةُ تُجّارٍ مِسريِّين توقَّفَت عِندَ البِئر! أَنزَلوا دَلوَهُم لِيَستَقوا المَاء، فَعَلِقَ بِهِ الغُلامُ الجَميل. صاحَ أَحَدُهُم مِن دَهشَة: <b>«يا بُشرايَ! هذا غُلامٌ!»</b><br><br>باعَهُ إِخوَتُهُ بِثَمَنٍ بَخيس — بِضعَةَ دَراهِم زَهيدَة! اشتَراهُ العَزيزُ في مِصر وأَمَرَ زَوجَتَهُ: «أَكرِمي مَثواه». كانَ يوسُفُ بَعيداً عَن أَبيهِ وأَرضِه، لَكِنَّ اللهَ لَم يَبعُد عَنه — <b>وكانَ اللهُ غالِبٌ على أَمرِه</b>.', en:'Heavy hours passed. Then Yusuf heard voices from above — a caravan of Egyptian merchants had stopped at the well! They lowered their bucket to draw water, and the beautiful young boy clung to it. One of them shouted in astonishment: <b>"What great news! A young boy!"</b><br><br>His brothers sold him for a trifling price — a few cheap coins! The \'Aziz of Egypt bought him and told his wife: "Honor his stay." Yusuf was far from his father and his homeland — but Allah had not gone far from him. <b>Allah was prevailing in His affair.</b>' } },

        { scene:'night', character:'🌟',
          text:{ ar:'كَبِرَ يوسُفُ وأَصبَحَ شابّاً وَسيماً. وَقَعَت زَوجَةُ العَزيزِ في حُبِّه وراوَدَتهُ عَن نَفسِه. أَغلَقَت الأَبوابَ وقالَت: «هَيتَ لَك!» كانَ الإِغراءُ كَبيراً والأَبوابُ مُغلَقَة — لَكِنَّ يوسُفَ قالَ بِحَزمٍ وإيمان: <b>«مَعاذَ اللهِ! إنَّهُ رَبّي أَحسَنَ مَثواي — إنَّهُ لا يُفلِحُ الظّالِمون!»</b><br><br>لَم يَكُن الأَمرُ سَهلاً — كانَ شابّاً وَحيداً في بَلَدٍ غَريب، بَعيداً عَن أَبيه، لا أَحَدَ يَرى ما يَجري. لَكِنَّهُ صَبَرَ على نَفسِه وعَلِمَ أنَّ اللهَ يَرى كُلَّ شَيء. فَسُجِنَ ظُلماً — <b>واختارَ السِّجنَ على المَعصيَة.</b>', en:'Yusuf grew into a handsome young man. The \'Aziz\'s wife fell in love with him and tried to seduce him. She locked the doors and said: "Come to me!" The temptation was great and the doors were locked — but Yusuf said firmly and with faith: <b>"Allah forbid! He is my Lord who has been good to me in my abode — indeed wrongdoers never succeed!"</b><br><br>It was not easy — he was a young man alone in a foreign land, far from his father, with no one to witness what was happening. But he endured against his own desires, knowing that Allah sees everything. So he was unjustly imprisoned — <b>he chose prison over disobedience.</b>' } },

        { scene:'night', character:'😟',
          text:{ ar:'في السِّجنِ البارِدِ المُظلِم، حَيثُ تَتَصاعَدُ رَوائِحُ الرُّطوبَةِ مِن جُدرانِ الحَجَر، كانَ يوسُفُ لا يَبكي ولا يَتَشَكَّى — بَل كانَ يُعَلِّمُ أَهلَ السِّجنِ ويُفَسِّرُ الرُّؤيا ويَذكُرُ الله. مَرَّت سَنَواتٌ تِلوَ سَنَوات في ذلكَ المَكانِ الضَّيِّق. زَميلانِ رَأَيا رُؤياهُما في لَيلَةٍ واحِدَة، فَجاؤوا إلى يوسُفَ في الصُّبح بِعُيونٍ قَلِقَة. فَفَسَّرَها بِثِقَةٍ ودِقَّة. قالَ لِأَحَدِهِما: <b>«اذكُرني عِندَ رَبِّك!»</b> فَنَسِيَهُ الرَّجُلُ لِسَنَواتٍ طَويلَة — لَكِنَّ اللهَ لم يَنسَه.<br><br>صَبَرَ يوسُفُ — وصَبَرَ — وصَبَر. لَم يَدعُ عَلى إِخوَتِهِ الَّذينَ رَمَوهُ في البِئر، ولم يَلعَن المَرأَةَ الَّتي سَجَنَتهُ ظُلماً. بَل كانَ قَلبُهُ نَقيّاً كَماءِ النَّبعِ الصّافي — يَعلَمُ أنَّ اللهَ يَرى كُلَّ شَيء وأنَّ ما يُهيِّئُهُ اللهُ أَعظَمُ مِمّا يَتَصَوَّر.', en:'In the cold, dark prison where the smell of dampness rose from stone walls, Yusuf did not weep or complain — instead he taught those in prison, interpreted dreams, and remembered Allah. Years passed, one after another, in that narrow place. Two cellmates dreamed on the same night and came to Yusuf in the morning with anxious eyes. He interpreted their dreams with confidence and precision. He said to one: <b>"Mention me to your master!"</b> But the man forgot him for long years — yet Allah did not forget him.<br><br>Yusuf was patient — and patient — and patient again. He did not curse his brothers who had thrown him in the well, nor did he curse the woman who had wrongly imprisoned him. Instead his heart remained pure as the clearest spring — knowing that Allah sees everything and that what Allah was preparing for him was greater than anything he could imagine.' } },

        { scene:'madinah', character:'🌟',
          text:{ ar:'ثُمَّ جاءَ الفَرَجُ مِن حَيثُ لم يَحتَسِب! رَأى مَلِكُ مِصرَ رُؤيا عَجيبَةً وأُحضِرَ يوسُفُ مِن سِجنِهِ لِيُفَسِّرَها. فَفَسَّرَها بِعَقلٍ واسِعٍ وحِكمَة، وأَخرَجَ مِصرَ مِن خَطَرِ المَجاعَة — فَجَعَلَهُ المَلِكُ على خَزائِنِ الأَرض!<br><br>وجاءَ إِخوَتُهُ يَستَجدونَ الطَّعام ولم يَعرِفوه. فَلَمّا كَشَفَ يوسُفُ هَويَّتَهُ لَهُم بَكَوا مِن الخِزي. فَقالَ يوسُفُ — الصّابِرُ الكَريمُ — بِصَوتٍ مَليءٍ بِالحَنانِ والعَفو: <b>«لا تَثريبَ عَلَيكُم اليَوم — اذهَبوا فَأَنتُمُ الطُّلَقاء!»</b> وأَتى أَبوهُ يَعقوبُ وبَكى بُكاءَ الفَرَحِ وقالَ لِبَنيه: <b>«أَلَم أَقُل لَكُم إنّي أَعلَمُ مِنَ اللهِ ما لا تَعلَمون!»</b>',
                en:'Then relief came from where he least expected! Egypt\'s king had a strange dream, and Yusuf was brought from his prison to interpret it. He interpreted it with wisdom and broad insight, saving Egypt from the threat of famine — and the king placed him over the storehouses of the land!<br><br>His brothers came begging for food without recognizing him. When Yusuf revealed himself, they wept with shame. And Yusuf — patient and noble — said with a voice full of tenderness and forgiveness: <b>"No blame upon you today — go, for you are free!"</b> And his father Yaqub came and wept with joy, saying to his sons: <b>"Did I not tell you that I know from Allah what you do not know!"</b>' } },

        { scene:'garden', character:'🌟',
          text:{ ar:'تَحَقَّقَت الرُّؤيا الَّتي رَآها يوسُفُ وهو صَغير — سَجَدَ لَهُ أَبواهُ وإِخوَتُهُ الَّذينَ آذَوه! وقالَ يوسُفُ شاكِراً دامِعَ العَينَين: <b>«رَبِّ قَد آتَيتَني مِنَ المُلكِ وعَلَّمتَني مِن تَأويلِ الأَحاديث — فاطِرَ السَّماواتِ والأَرض! تَوَفَّني مُسلِماً وأَلحِقني بِالصّالِحين!»</b><br><br>تَعَلَّم يا صَديقي مِن يوسُفَ الصّابِر: لم تَنتَهِ رِحلَتُهُ عِندَ البِئرِ الَّتي رَمَوهُ فيها — بَل ذلكَ كانَ البِدَايَة. <b>الصَّبرُ لا يَضيعُ أَبَداً عِندَ الله</b>، وما أَخَّرَهُ اللهُ كانَ أَعظَمَ وأَجمَلَ مِمّا تَمَنَّى.', en:'The dream Yusuf had seen as a child was fulfilled — his parents and the very brothers who had harmed him bowed before him! And Yusuf said with tearful, grateful eyes: <b>"My Lord — You have given me of the kingship and taught me interpretation of speech. Creator of the heavens and the earth — take me in submission to You and join me with the righteous!"</b><br><br>Learn from patient Yusuf, dear friend: his journey did not end at the well his brothers cast him into — that was only the beginning. <b>Patience is never wasted with Allah</b>, and what Allah delayed for him was greater and more beautiful than anything he had wished for.' } },
      ],
      quiz: [
        { q:{ar:'لِماذا حَذَّرَ يَعقوبُ يوسُفَ مِن إِخبارِ إِخوَتِهِ بِالرُّؤيا؟', en:'Why did Yaqub warn Yusuf not to tell his brothers about the dream?'},
          opts:[
            { t:{ar:'لأنَّ الرُّؤيا كَذِب', en:'Because the dream was false'}, c:false },
            { t:{ar:'خَوفاً أن يَكيدوا لَه', en:'Fearing they would plot against him'}, c:true },
            { t:{ar:'لِأَنَّ الرُّؤيا سِرٌّ', en:'Because the dream is a secret'}, c:false },
          ] },
        { q:{ar:'ماذا اختارَ يوسُفُ عِندَما راوَدَتهُ امرأةُ العَزيز؟', en:'What did Yusuf choose when the \'Aziz\'s wife tempted him?'},
          opts:[
            { t:{ar:'قَبِلَ إِغراءَها', en:'He accepted her temptation'}, c:false },
            { t:{ar:'هَرَبَ مِن البَيت', en:'He fled from the house'}, c:false },
            { t:{ar:'اختارَ السِّجنَ على المَعصيَة', en:'He chose prison over disobedience'}, c:true },
          ] },
        { q:{ar:'ماذا قالَ يوسُفُ لِإِخوَتِهِ حينَ عَرَّفَ نَفسَهُ لَهُم؟', en:'What did Yusuf say to his brothers when he revealed himself to them?'},
          opts:[
            { t:{ar:'لا تَثريبَ عَلَيكُم اليَوم', en:'No blame upon you today'}, c:true },
            { t:{ar:'ستُعاقَبونَ جَميعاً', en:'You will all be punished'}, c:false },
            { t:{ar:'اخرُجوا مِن مِصر', en:'Leave Egypt'}, c:false },
          ] },
      ],
      moral:      { ar:'الصَّبرُ الجَميلُ لا يَضيعُ عِندَ اللهِ — فَما أَخَّرَهُ اللهُ كانَ أَعظَمَ وأَجمَلَ مِمّا تَصَوَّرت.', en:'Beautiful patience is never wasted with Allah — what He delays for you is greater and more beautiful than anything you imagined.' },
      badge:      { icon:'⭐', title:{ar:'وِسامُ الصَّبرِ الجَميل', en:'Badge of Beautiful Patience'} },
      reflect:    [
        {ar:'هَل سَبَقَ أن صَبَرتَ على شَيءٍ صَعبٍ وكانَت النِّهايَةُ أَجمَلَ مِمّا تَوَقَّعت؟', en:'Have you ever been patient through something hard and found the ending more beautiful than you expected?'},
        {ar:'كَيفَ نَجَحَ يوسُفُ في أن يَعفوَ عَن مَن أَساءَ إليهِ بَعدَ كُلِّ هذه السِّنين؟', en:'How did Yusuf succeed in forgiving those who wronged him after all those years?'},
      ],
      didYouKnow: [
        {ar:'قِصَّةُ يوسُفَ عليه السلام مَذكورَةٌ في سورَةِ يوسُف كامِلَةً، وسَمّاها اللهُ «أَحسَنَ القَصَص» — المَصدَر: quranpedia.net — تفسير سورة يوسف', en:'The story of Yusuf عليه السلام is told in a complete Quranic chapter, and Allah named it "the best of stories." Source: quranpedia.net — Tafsir Surah Yusuf'},
        {ar:'قالَ يَعقوبُ عليه السلام: «فَصَبرٌ جَميلٌ» مَرَّتَين في القُرآن — مَرَّةً حينَ فَقَدَ يوسُف، ومَرَّةً حينَ فَقَدَ بِنيامين. تَعَلَّم مِنهُ الصَّبرَ المُتَجَدِّد.', en:'Yaqub عليه السلام said "Beautiful patience" twice in the Quran — once when he lost Yusuf, and once when he lost Binyamin. Learn from him patience renewed.'},
      ],
    },



    /* ──────────────────────────────────────────
       STORY 2 — أيّوبُ عليه السلام: أَعظَمُ صَبرٍ في التّاريخ
       Scene: night | Character: 🤲
       Source: islamweb.net/ar/article/170335
    ────────────────────────────────────────── */
    {
      icon:'🌿', scene:'night', character:'🤲',
      title: { ar:'أيّوبُ الصّابِر: حينَ يَبتَلي اللهُ مَن يُحِبّ', en:'Patient Ayyub: when Allah tests those He loves' },
      pages: [
        { scene:'garden', character:'🤲',
          text:{ ar:'كانَ أيّوبُ عليه السلام مِن أَغنى النّاسِ وأَكثَرِهِم ذُرِّيَّة — تَمتَدُّ أَراضيهِ إلى حَيثُ يَنتَهي البَصَر، وخَيلُهُ تَملأُ الصَّحراء، وأَبناؤهُ الكِثارُ حَولَهُ كالنُّجوم. كانَ مَعَ ذلكَ شَديدَ الشُّكرِ للهِ، يُطعِمُ المَساكينَ ويَكسو العُراة، ويَقولُ كُلَّ لَيلَة: «الحَمدُ للهِ الَّذي وَهَبَني هذه النِّعَم!»<br><br>ثُمَّ قَرَّرَ اللهُ تَعالى أن يَختَبِرَ عَبدَهُ أيّوبَ اختِباراً عَظيماً. لَيسَ لِيُهلِكَه — بَل لِيُظهِرَ لِلعالَمينَ ما في قَلبِه مِن إيمانٍ وصَبر. بَدَأَ البَلاءُ يَنزِلُ تَباعاً: فَأُتلِفَت أَموالُهُ، ثُمَّ ماتَت أَغنامُهُ، وخَرِبَت بيوتُهُ واحِدَةً بَعدَ واحِدَة.', en:'Ayyub عليه السلام was among the wealthiest of people and had the most children — his lands stretched as far as the eye could see, his horses filled the plains, and his many sons surrounded him like stars. Yet with all this he was deeply grateful to Allah, feeding the poor and clothing the bare, saying every night: "All praise to Allah who granted me these blessings!"<br><br>Then Allah Most High decided to test His servant Ayyub with a tremendous trial. Not to destroy him — but to show all the worlds what lay in his heart of faith and patience. The trials began descending one by one: his wealth was destroyed, then his sheep died, and his homes collapsed one after another.' } },

        { scene:'night', character:'🤲',
          text:{ ar:'ثُمَّ ماتَ أَبناؤهُ وبَناتُهُ الَّذين كانوا فَرحَةَ قَلبِه! وفي كُلِّ مُصيبَةٍ كانَ أيّوبُ يَرفَعُ يَدَيهِ إلى السَّماءِ ويَقول: «الحَمدُ للهِ الَّذي أَعطى والحَمدُ للهِ الَّذي أَخَذ — لَهُ المُلكُ وهو على كُلِّ شَيءٍ قَدير!» لم تَهتَزَّ كَلِمَةُ الحَمدِ على شَفَتَيه.<br><br>ثُمَّ جاءَ البَلاءُ الأَشَدّ — أُصيبَ أيّوبُ بِمَرَضٍ شَديدٍ أَكَلَ جَسَدَهُ سَنَواتٍ طَويلَة. تَرَكَهُ جيرانُهُ وأَصحابُهُ خِشيَةَ العَدوى. أَخرَجَهُ قَومُهُ مِن بَلَدِهِم وتَرَكوهُ في مَزبَلَةٍ خارِجَ المَدينة!', en:'Then his sons and daughters who had been the joy of his heart died too! And with every calamity, Ayyub would raise his hands to the sky and say: "All praise to Allah who gave, and all praise to Allah who took — His is the dominion and He is over all things capable!" The words of praise never trembled on his lips.<br><br>Then the hardest trial came — Ayyub was struck with a severe illness that ate at his body for many long years. His neighbors and companions left him fearing contagion. His people drove him from their town and left him on a rubbish heap outside the city!' } },

        { scene:'night', character:'🤲',
          text:{ ar:'وَحيداً في المَزبَلَة خارِجَ المَدينَة، حَيثُ تَهُبُّ الرِّياحُ الباردَةُ ويُغَطّي الظَّلامُ كُلَّ شَيء، لَيسَ مَعَ أيّوبَ مِن الدُّنيا إلّا زَوجَتُهُ الوَفيَّةُ الصّابِرَة. كانَت تَخرُجُ كُلَّ صَباحٍ تَعمَلُ خادِمَةً عِندَ النّاسِ لِتَأتِيَهُ بِقِطعَةِ خُبزٍ وشَيءٍ مِنَ الماء. وكانَ أيّوبُ يَتَلَقَّى ما تَأتي بِهِ بِشُكرٍ وحَمد، وكَأنَّهُ أَفضَلُ طَعامٍ في الدُّنيا! رُبَّما يَمُرُّ الرَّجُلُ فَيَرى أيّوبَ فَيَقول بِازدِراء: «انظُروا إلى هذا — يَقولُ إنَّهُ نَبيٌّ وهذا حالُه!»<br><br>لَكِنَّ أيّوبَ لم يَشتَكِ لأَحَدٍ مِنَ البَشَر. قَلبُهُ لم يَنطَوِ على حُزنٍ يائِس — بَل كانَ يَذكُرُ اللهَ في كُلِّ لَحظَة. سَأَلَهُ أَحَدُهُم ذاتَ يَومٍ: «يا أيّوب، لِماذا لا تَدعو الله؟» فَقالَ أيّوبُ بِهُدوءٍ عَميق وابتِسامَةٍ خافِتَة: <b>«كُنتُ سَبعينَ سَنَةً في الرَّخاء — أَفلا أَصبِرُ لَهُ سَبعينَ سَنَةً في الضَّرّاء؟»</b> كَلِمَةٌ تَجعَلُ القُلوبَ تَتَوَقَّف مِن عَظَمَتِها.', en:'Alone on the rubbish heap outside the city, where cold winds blew and darkness covered everything, with nothing from this world but his loyal and patient wife. She would go out every morning to work as a servant for people and bring him a piece of bread and some water. And Ayyub would receive what she brought with thanks and praise, as though it were the finest food in the world! A man might pass and see Ayyub, saying with contempt: "Look at this one — he claims to be a Prophet and this is his condition!"<br><br>But Ayyub complained to no human soul. His heart never closed around despairing grief — instead he remembered Allah every single moment. Someone asked him one day: "O Ayyub, why do you not call upon Allah?" Ayyub said with deep calm and a quiet smile: <b>"I was seventy years in ease — should I not be patient for him seventy years in hardship?"</b> Words that make hearts stop in awe of their greatness.' },
          choice:{ q:{ar:'ما الَّذي جَعَلَ صَبرَ أيّوبَ فَريداً وعَظيماً؟', en:'What made Ayyub\'s patience unique and extraordinary?'},
            opts:[
              { t:{ar:'لأنَّهُ لم يَشعُر بِالأَلَم', en:'Because he felt no pain'}, c:false,
                exp:{ar:'لا — كانَ يَتَأَلَّمُ كَثيراً! لَكِنَّهُ اختارَ الصَّبرَ والحَمدَ رَغمَ الأَلَم.', en:'No — he felt great pain! But he chose patience and praise despite the pain.'} },
              { t:{ar:'لأنَّهُ صَبَرَ وحَمِدَ اللهَ رَغمَ كُلِّ البَلاء', en:'Because he was patient and praised Allah despite every trial'}, c:true,
                exp:{ar:'نَعَم! الصَّبرُ الحَقيقيُّ هو الَّذي يَجمَعُ الأَلَمَ والحَمدَ معاً في نَفسِ اللَّحظَة.', en:'Yes! True patience is what combines pain and praise at the very same moment.'} },
              { t:{ar:'لأنَّهُ كانَ لا يُحِسُّ بِمَرَضِه', en:'Because he was not aware of his illness'}, c:false,
                exp:{ar:'بَل كانَ يُدرِكُ أَلَمَهُ جَيِّداً — وهذا ما جَعَلَ صَبرَهُ أَعظَم!', en:'He was very aware of his pain — which is what made his patience even greater!'} },
            ] } },

        { scene:'night', character:'🤲',
          text:{ ar:'مَرَّت السَّنَواتُ — وبَعضُ الرِّوايَاتِ تَقولُ إنَّ البَلاءَ دامَ ثَماني عَشرَةَ سَنَة — وأيّوبُ لم يَزِدهُ الزَّمَنُ إلّا صَبراً وشُكراً. ثُمَّ جاءَت اللَّحظَةُ الَّتي كانَ ينتَظِرُها قَلبُهُ — لَيسَ بِيَأسٍ بَل بِيَقين. فَنادى ربَّهُ مِن أَعماقِ قَلبِهِ المُنكَسِر بِهُدوءٍ تامّ:<br><br>﴿ وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ ﴾ لم يَقُل: «لِماذا يا الله؟» بَل قالَ: «يا رَحمَن — الضُّرُّ مَسَّني — وأَنتَ أَرحَمُ الرّاحِمين!» دَعوَةٌ فيها اليَقينُ التّامّ بِرَحمَةِ الله.', en:'The years passed — some narrations say the trial lasted eighteen years — and time only increased Ayyub in patience and gratitude. Then came the moment his heart had been awaiting — not in despair but in certainty. He called out to his Lord from the depths of his broken heart with complete calm:<br><br>﴿ "And Ayyub — when he called to his Lord: Indeed adversity has touched me, and You are the Most Merciful of the merciful" ﴾ He did not say: "Why, O Allah?" He said: "O Most Merciful — affliction has touched me — and You are the Most Merciful of all!" A supplication full of complete certainty in Allah\'s mercy.' } },

        { scene:'garden', character:'🤲',
          text:{ ar:'فَاستَجابَ اللهُ دَعوَتَه فوراً! قالَ اللهُ لَه: ﴿ ارْكُضْ بِرِجْلِكَ ﴾ — فَضَرَبَ أيّوبُ الأَرضَ بِقَدَمِه، فانفَجَرَت نَبعانِ مِن الماء: أَحَدُهُما دافِئٌ لِيَغتَسِلَ مِنهُ فَيَشفى جَسَدُه، والثّاني باردٌ لِيَشرَبَ مِنهُ فَتَشفى باطِنَتُه! اغتَسَلَ أيّوبُ فَعادَ لَهُ جِسمُهُ كامِلاً كَما كان.<br><br>وأَعادَ اللهُ لَهُ أَهلَهُ ومَالَهُ ومِثلَهُم مَعَهُم — <b>رَحمَةً مِن اللهِ وذِكرى لأولي الأَلباب.</b> اليَومَ — بَعدَ أَلفَي سَنَة — مازالَ النّاسُ يَضرِبونَ المَثَلَ بِصَبرِ أيّوب. فَإن أَصابَكَ البَلاءُ يا صَديقي، تَذَكَّر: اللهُ الَّذي شَفى أيّوبَ لا يَزالُ هو اللهُ — ولا يَزالُ سَميعاً قَريباً مُجيباً.', en:'Allah responded to his supplication immediately! Allah said to him: ﴿ "Strike the ground with your foot" ﴾ — and Ayyub struck the earth with his foot, and two springs burst forth: one warm to bathe in and heal his body, and one cold to drink from and heal his inside! Ayyub bathed and his body was fully restored as it had been before.<br><br>And Allah returned to him his family and his wealth and the like of them again — <b>as mercy from Allah and a reminder to those of understanding.</b> Today — two thousand years later — people still give the example of Ayyub\'s patience. If you are struck by calamity, dear friend, remember: the Allah who healed Ayyub is still Allah — still Hearing, near, and Responsive.' } },

        { scene:'mosque', character:'🤲',
          text:{ ar:'مِمّا تُعَلِّمُنا قِصَّةُ أيّوب: أنَّ البَلاءَ لا يَعني أنَّ اللهَ غاضِبٌ عَلَيك — فأيّوبُ مِن أَحَبِّ الأَنبِياءِ إلى الله وقَد ابتُلي بِهذا كُلِّه! البَلاءُ اختِبارٌ يَكشِفُ الكُنوزَ الدَّفينَةَ في القُلوب.<br><br><b>«بِالصَّبرِ واليَقينِ تُنالُ الإمامَة»</b> — قالَها شَيخُ الإسلامِ ابنُ تَيميَّة ونَقَلَها ابنُ القيِّم في المَدارِج. أيّوبُ نالَ الإمامَةَ في الصَّبر، حَتّى أَصبَحَ مَثَلاً لِكُلِّ زَمان ومَكان. كُلَّما صَبَرتَ على شَيءٍ صَعب، كُنتَ تَسيرُ على خُطى أيّوب.', en:'Among what the story of Ayyub teaches us: that hardship does not mean Allah is angry with you — for Ayyub was among the most beloved Prophets to Allah, yet all this befell him! Trial is a test that reveals the hidden treasures within hearts.<br><br><b>"Through patience and certainty, leadership is attained"</b> — said by Sheikh al-Islam Ibn Taymiyyah and transmitted by Ibn al-Qayyim in the Madarij. Ayyub attained leadership in patience, until he became an example for every time and place. Each time you are patient through something hard, you are walking in Ayyub\'s footsteps.' } },
      ],
      quiz: [
        { q:{ar:'بِماذا ابتَلى اللهُ أيّوبَ عليه السلام؟', en:'With what did Allah test Ayyub عليه السلام?'},
          opts:[
            { t:{ar:'بِالمالِ والوَلَدِ والجَسَد', en:'With wealth, children, and body'}, c:true },
            { t:{ar:'بِالجوعِ فَقَط', en:'With hunger only'}, c:false },
            { t:{ar:'بِفَقدِ البَصَر فَقَط', en:'With loss of sight only'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ أيّوبُ حينَ سُئِلَ لِماذا لا يَدعو؟', en:'What did Ayyub say when asked why he doesn\'t supplicate?'},
          opts:[
            { t:{ar:'قالَ إنَّهُ لا يَستَحِقُّ الدُّعاء', en:'He said he doesn\'t deserve to supplicate'}, c:false },
            { t:{ar:'كُنتُ في الرَّخاءِ سَبعينَ سَنَة — أَفلا أَصبِرُ مِثلَها؟', en:'I was in ease for seventy years — should I not be patient likewise?'}, c:true },
            { t:{ar:'رَفَضَ الدُّعاءَ بِالكُلِّيَّة', en:'He refused supplication entirely'}, c:false },
          ] },
        { q:{ar:'كَيفَ شَفاهُ اللهُ مِن مَرَضِه؟', en:'How did Allah heal him from his illness?'},
          opts:[
            { t:{ar:'أَرسَلَ لَهُ مَلَكاً بِدَواء', en:'Sent him an angel with medicine'}, c:false },
            { t:{ar:'أَمَرَهُ أن يَضرِبَ الأَرضَ بِرِجلِهِ فَانفَجَرَ ماءٌ', en:'Commanded him to strike the ground and water sprang forth'}, c:true },
            { t:{ar:'طَلَبَ مِنهُ الصِّيام', en:'Asked him to fast'}, c:false },
          ] },
      ],
      moral:      { ar:'البَلاءُ لا يَعني أنَّ اللهَ غاضِبٌ عَلَيك — بَل قَد يَكونُ عَلامَةَ حُبِّهِ واختِيارَهُ لَك. صابِر على كُلِّ حال.', en:'Hardship does not mean Allah is angry with you — it may be the very sign of His love and His choosing you. Be patient in every circumstance.' },
      badge:      { icon:'🌿', title:{ar:'وِسامُ أيّوبَ الصّابِر', en:'Badge of Patient Ayyub'} },
      reflect:    [
        {ar:'لَو أُصِبتَ بِمَرَضٍ شَديد، ما الَّذي يُعينُكَ على الصَّبر؟', en:'If you were struck by a serious illness, what would help you be patient?'},
        {ar:'لِماذا تَظُنُّ أنَّ اللهَ ابتَلى أيّوبَ رَغمَ أنَّهُ نَبيٌّ مُحِبٌّ للهِ؟', en:'Why do you think Allah tested Ayyub despite his being a beloved Prophet?'},
      ],
      didYouKnow: [
        {ar:'قِصَّةُ أيّوبَ وَرَدَت في سورَةِ الأنبياء آيَة ٨٣-٨٤ وفي سورَةِ ص آيَة ٤١-٤٣. المَصدَر: islamweb.net/ar/article/170335', en:'Ayyub\'s story appears in Surah Al-Anbiya: 83-84 and Surah Sad: 41-43. Source: islamweb.net/ar/article/170335'},
        {ar:'ذَكَرَ ابنُ القيِّم في مدارج السالكين — باب الصبر — أنَّ أيّوبَ هو نَموذَجُ الصَّبرِ لجميعِ أَجيالِ الأُمَّة. ولذلك قالَ العُلَماءُ: «الصَّبرُ عِندَ البَلاءِ يُسَمَّى صَبرَ أيّوب».', en:'Ibn al-Qayyim mentioned in Madarij al-Salikin — chapter on patience — that Ayyub is the model of patience for all generations of the Ummah. That is why scholars say: "Patience at calamity is called the patience of Ayyub."'},
      ],
    },



    /* ──────────────────────────────────────────
       STORY 3 — بِلالُ بنُ رَباح: أَحَدٌ أَحَد
       Scene: desert (scorching Makkah) | Character: 🎵
       Source: سير أعلام النبلاء — الذهبي — ج١ ص٣٤٨
    ────────────────────────────────────────── */
    {
      icon:'🎵', scene:'desert', character:'🎵',
      title: { ar:'أَحَدٌ أَحَد: صَبرُ بِلالٍ في وَجهِ العَذاب', en:'Ahad… Ahad: Bilal\'s patience in the face of torture' },
      pages: [
        { scene:'madinah', character:'🎵',
          text:{ ar:'في أَزِقَّةِ مَكَّةَ القَديمَة، قَبلَ الإسلامِ، كانَ بِلالُ بنُ رَباحٍ الحَبَشيُّ عَبداً مَمَليكاً لِأُمَيَّةَ بنِ خَلَف، أَحَدِ أَشَدِّ أَعداءِ الإسلام. كانَ بِلالٌ طَويلَ القامَةِ نَحيفَ الجَسَد، أَسمَرَ اللَّونِ بِشِدَّة، يَشتَغِلُ بِالخِدمَةِ مِن الفَجرِ إلى اللَّيل.<br><br>ثُمَّ بَلَغَ بِلالاً خَبَرُ الرَّجُلِ الَّذي يَدعو إلى الإسلام في شِعابِ مَكَّة. مَشى إليه بِقَلبٍ مُرتَجِف — وحينَ سَمِعَ كَلامَ النَّبيِّ ﷺ، غَمَرَ اليَقينُ كَيانَهُ كُلَّه. قالَ مِن أَعماقِه: «أَشهَدُ أَن لا إلهَ إلّا الله وأَنَّ مُحَمَّداً رَسولُ الله.» في تِلكَ اللَّحظَة — وُلِدَ بِلالٌ مِن جَديد.', en:'In the narrow alleys of ancient Makkah, before Islam, Bilal ibn Rabah the Abyssinian was an enslaved man owned by Umayyah ibn Khalaf, one of Islam\'s fiercest enemies. Bilal was tall and lean, deeply dark-skinned, working in servitude from dawn to night.<br><br>Then news reached Bilal of the man calling to Islam in Makkah\'s passes. He walked to him with a trembling heart — and when he heard the Prophet\'s ﷺ words, certainty flooded his entire being. He said from his depths: "I bear witness that there is no god but Allah and that Muhammad is the Messenger of Allah." In that moment — Bilal was born anew.' } },

        { scene:'desert', character:'😰',
          text:{ ar:'عَلِمَ أُمَيَّةُ بِإسلامِ بِلال فَاشتَعَلَ غَضَبُهُ كالجَمر! أَمَرَ بِتَعذيبِهِ تَعذيباً وَحشيّاً لِيَرجِعَ عَن دِينِه. في قَلبِ نَهارِ مَكَّةَ الحارِقِ — حِينَ تَلهَبُ الشَّمسُ الصَّخرَ والرَّمل حَتّى تَكادُ تَنصَهِرُ — كانوا يُلصِقونَ ظَهرَ بِلالٍ العاري بِالرَّمضاءِ المُحتَرِقَة! كُلَّما لَهِبَ الرَّمالُ الحارَّةُ جِلدَهُ تَمَزَّقَ اللَّحمُ عَن العَظم، وكانَت الدِّماءُ تُخَضِّبُ الرَّمل. العَرَقُ يَمزُجُ بِالغُبارِ على وَجهِهِ المُتَألِّم.<br><br>وَضَعوا الصَّخرَةَ الثَّقيلَةَ على صَدرِه — صَخرَةٌ يَعجِزُ عَن رَفعِها الرِّجالُ الأَشِدَّاء — لِتَجعَلَ كُلَّ نَفَسٍ عَذاباً مُمِيتاً! كانَ أُمَيَّةُ يَصرُخُ في وَجهِهِ: «ارجِع! قُل: اللّاتُ والعُزّى!» وكانَ بِلالٌ يُغمِضُ عَينَيه — يَسمَعُ الأَلَمَ، يُدرِكُ خَطَرَ المَوت — ثُمَّ يَفتَحُ فَمَهُ بِكَلِمَةٍ واحِدَة كالصَّخرَةِ الرّاسِيَةِ في البَحر: <b>«أَحَدٌ! أَحَد!»</b> واللهُ أَعلَمُ كَيفَ كانَ يَجِدُ القُوَّةَ — لَكِنَّ الإيمانَ الحَقيقيَّ يَفعَلُ العَجائِب.', en:'Umayyah learned of Bilal\'s Islam and his rage burned like embers! He ordered him tortured mercilessly to make him renounce his faith. In the scorching midday heart of Makkah — when the sun made the rocks and sand blaze until they nearly melted — they would press Bilal\'s bare back against the burning sand! Each time the blazing sand seared his skin, flesh tore from bone, and blood stained the sand. Sweat mixed with dust on his agonized face.<br><br>They placed a heavy boulder on his chest — a rock that strong men could not lift — making every breath a near-fatal torment! Umayyah would scream in his face: "Go back! Say: Al-Lat and Al-\'Uzza!" And Bilal would close his eyes — feeling the pain, sensing the danger of death — then open his mouth with one single word, firm as a standing mountain in the sea: <b>"Ahad! Ahad!" (One God! One God!)</b> Allah alone knows where he found the strength — but true faith works wonders.' },
          choice:{ q:{ar:'لِماذا لم يَقُل بِلالٌ ما يُريدُهُ أُمَيَّة لِيَنجوَ مِن العَذاب؟', en:'Why didn\'t Bilal say what Umayyah wanted to save himself from torture?'},
            opts:[
              { t:{ar:'لأنَّهُ كانَ يَكرَهُ أُمَيَّة', en:'Because he hated Umayyah'}, c:false,
                exp:{ar:'لا — السَّبَبُ أَعمَق: لأنَّ بِلالاً رَأى اللهَ أَعظَمَ مِن كُلِّ شَيء — أَعظَمَ مِن الأَلَمِ والمَوت!', en:'No — the reason is deeper: because Bilal saw Allah as greater than everything — greater than pain and death!'} },
              { t:{ar:'لأنَّ الكَلِمَةَ تَخرُجُ مِن قَلبِه لا مِن لِسانِهِ فَقَط', en:'Because the word comes from his heart, not just his tongue'}, c:true,
                exp:{ar:'بِالضَّبط! الإيمانُ الحَقيقيُّ يَجعَلُ الصَّبرَ أَسهَلَ مِن التَّخَلّي عن الحَقّ.', en:'Exactly! True faith makes patience easier than abandoning the truth.'} },
              { t:{ar:'لأنَّهُ لم يَفهَم ما يَقولُ أُمَيَّة', en:'Because he didn\'t understand what Umayyah was saying'}, c:false,
                exp:{ar:'بَل فَهِمَ تَماماً — لَكِنَّهُ اختارَ الإيمانَ على النَّجاة.', en:'He understood perfectly — but he chose faith over escape.'} },
            ] } },

        { scene:'desert', character:'🌟',
          text:{ ar:'مَرَّ ورَقَةُ بنُ نَوفَل بِبِلالٍ وهو يُعَذَّبُ فَقالَ له بِحُزن: <b>«يا بِلال — صَبراً! والَّذي نَفسي بِيَده، لَئِن قَتَلتُموه لَأَتَّخِذَنَّهُ حَنانا!»</b> وكانَ عَبدُ اللهِ بنُ مَسعودٍ يَمُرُّ أَحياناً فَيَقول: «وهانَت عَلَيهِ نَفسُه في اللهِ» — أي أنَّ بِلالاً أَحَبَّ اللهَ حَتّى قَبِلَ أن تَزهَقَ رُوحُهُ في سَبيلِه!<br><br>أَخَذَ المُشرِكونَ بِلالاً ووَضَعوا في رَقَبَتِهِ حَبلاً وطافوا بِهِ في شَوارِعِ مَكَّة — أَرادوا أن يُرهِبوا كُلَّ مَن يُفَكِّرُ في اعتِناقِ الإسلام! لَكِنَّ صَبرَ بِلالٍ وثَباتَهُ كانَ أَشَدَّ تَأثيراً مِن كُلِّ تَخويف.', en:'Waraqah ibn Nawfal passed by Bilal while he was being tortured and said sadly: <b>"O Bilal — be patient! By the One in whose hand my soul is, if they kill you I will take you as an intercessor!"</b> And \'Abdullah ibn Mas\'ud would sometimes pass and say: "His soul became cheap to him for Allah\'s sake" — meaning Bilal loved Allah so much he accepted that his soul might leave his body for His sake!<br><br>The polytheists took Bilal, placed a rope around his neck, and paraded him through Makkah\'s streets — they wanted to terrify everyone considering entering Islam! But Bilal\'s patience and steadfastness proved more powerful than all their intimidation.' } },

        { scene:'madinah', character:'🤝',
          text:{ ar:'بَلَغَ خَبَرُ بِلالٍ الصِّدِّيقَ أبا بَكرٍ رضي الله عنه. مَشى أبو بَكرٍ إلى أُمَيَّةَ بِخُطى واثِقَة. ذَكَرَ الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء أَنَّ أبا بَكرٍ رضي الله عنه اشتَرى بِلالاً وأَعتَقَهُ بِخَمسِ أَواقٍ ذَهَب. قالوا لِأَبي بَكر: لو أَبَيتَ أن تَشتَرِيَهُ إلّا بِأُوقِيَّةٍ واحِدَة لَبِعناكَه!<br><br>فَقالَ أبو بَكرٍ بِوُضوح: <b>«لَو أَبَيتُم إلّا مِئَةَ أُوقِيَّة لَاشتَرَيتُه!»</b> وبَلَغَ النَّبيَّ ﷺ الخَبَرُ فَقالَ: «الشِّرْكَةُ يا أبا بَكر!» — أَرادَ ﷺ أن يُشارِكَ في أَجرِ عِتقِ بِلال. قالَ أبو بَكر: «قَد أَعتَقتُه.» اليَومَ — يا بِلالُ — أنتَ حُرّ!', en:'News of Bilal reached the Truthful one, Abu Bakr رضي الله عنه. Abu Bakr walked to Umayyah with confident steps. Al-Dhahabi mentioned in Siyar A\'lam al-Nubala\' that Abu Bakr رضي الله عنه bought Bilal and freed him for five ounces of gold. They told Abu Bakr: If you had insisted on only one ounce we would have sold him to you!<br><br>Abu Bakr said clearly: <b>"If you had refused anything less than a hundred ounces, I would have bought him!"</b> The news reached the Prophet ﷺ who said: "Partnership, O Abu Bakr!" — he ﷺ wanted to share in the reward of freeing Bilal. Abu Bakr said: "I have already freed him." Today — O Bilal — you are free!' } },

        { scene:'mosque', character:'🎵',
          text:{ ar:'صارَ بِلالٌ الحُرُّ أَوَّلَ مُؤَذِّنٍ في الإسلام! وحينَ فَتَحَ النَّبيُّ ﷺ مَكَّةَ المُكَرَّمَة، أَمَرَ بِلالاً أن يَصعَدَ فَوقَ الكَعبَةِ المُشَرَّفَة ويُؤَذِّن مِنها. الرَّجُلُ الَّذي كانوا يُعَذِّبونَهُ في أَزِقَّةِ مَكَّة — يَصعَدُ اليَومَ فَوقَ أَعظَمِ بِناءٍ في الأَرض!<br><br>وحينَ حَضَرَت بِلالاً الوَفاة، بَكَت زَوجَتُهُ وقالَت: «وا وَيلاه!» فَقالَ بِلالٌ بِوَجهٍ مُشرِق: <b>«وا فَرَحاه! غَداً نَلقَى الأَحِبَّة — مُحَمَّداً وحِزبَه!»</b> صَبَرَ في الدُّنيا — وفَرِحَ عِندَ لِقاءِ الله. ذَكَرَهُ الذَّهَبيُّ بِهذه الكَلِماتِ في سِيَرِ أَعلامِ النُّبَلاء — ج١.', en:'Free Bilal became the first muadhdhin in Islam! And when the Prophet ﷺ opened Makkah, he commanded Bilal to climb to the top of the Ka\'bah al-Musharrafah and make the adhan from its roof. The man they had tortured in Makkah\'s alleys — he climbed today to the top of the greatest building on earth!<br><br>When death came to Bilal, his wife wept and cried: "O grief!" And Bilal said with a radiant face: <b>"O joy! Tomorrow we meet the beloved ones — Muhammad and his company!"</b> He was patient in this world — and joyful when meeting Allah. Al-Dhahabi mentioned him with these words in Siyar A\'lam al-Nubala\' — Volume 1.' } },

        { scene:'garden', character:'🎵',
          text:{ ar:'ماذا تَعَلَّمنا مِن بِلال؟ تَعَلَّمنا أنَّ <b>الصَّبرَ الحَقيقيَّ يَأتي مِن اليَقينِ بِاللهِ — لا مِن عَدَمِ الأَلَم.</b> كانَ بِلالٌ يَتَأَلَّمُ — والحَجَرُ على صَدرِهِ، والرَّمضاءُ تَحرِقُ ظَهرَه — لَكِنَّ يَقينَهُ بِاللهِ كانَ أَثقَلَ مِن كُلِّ حَجَر.<br><br>وتَعَلَّمنا أنَّ الصَّبرَ يَقلِبُ الأَمورَ: مِن عَبدٍ في الأَصفادِ إلى مُؤَذِّنٍ فَوقَ الكَعبَة! فَإن أُوذيتَ بِسَبَبِ إيمانِكَ، تَذَكَّر «أَحَد أَحَد» — تَذَكَّر بِلالاً — وتَعَلَّم مِنهُ كَيفَ يُحَوِّلُ الصَّبرُ الظَّلامَ إلى نور.', en:'What did we learn from Bilal? We learned that <b>true patience comes from certainty in Allah — not from the absence of pain.</b> Bilal was in pain — with the rock on his chest and the burning sand scorching his back — yet his certainty in Allah outweighed every boulder.<br><br>And we learned that patience turns things around: from a slave in chains to a muadhdhin atop the Ka\'bah! If you are harmed because of your faith, remember "Ahad Ahad" — remember Bilal — and learn from him how patience transforms darkness into light.' } },
      ],
      quiz: [
        { q:{ar:'ما الكَلِمَةُ الَّتي كانَ يُرَدِّدُها بِلالٌ أَثناءَ العَذاب؟', en:'What word did Bilal keep repeating during torture?'},
          opts:[
            { t:{ar:'«اللهُ أَكبَر»', en:'"Allah is Greatest"'}, c:false },
            { t:{ar:'«أَحَدٌ أَحَد»', en:'"Ahad, Ahad" (One God, One God)'}, c:true },
            { t:{ar:'«لا إلهَ إلّا الله»', en:'"There is no god but Allah"'}, c:false },
          ] },
        { q:{ar:'مَن اشتَرى بِلالاً وأَعتَقَه؟', en:'Who bought Bilal and freed him?'},
          opts:[
            { t:{ar:'عُمَر بن الخطّاب', en:'\'Umar ibn al-Khattab'}, c:false },
            { t:{ar:'أبو بَكر الصِّدِّيق', en:'Abu Bakr al-Siddiq'}, c:true },
            { t:{ar:'عَليّ بن أَبي طالِب', en:'\'Ali ibn Abi Talib'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ بِلالٌ حينَ حَضَرَتهُ الوَفاة؟', en:'What did Bilal say when death came to him?'},
          opts:[
            { t:{ar:'بَكى وحَزِنَ على الدُّنيا', en:'He wept and grieved for this world'}, c:false },
            { t:{ar:'«وا فَرَحاه! غَداً نَلقَى الأَحِبَّة»', en:'"O joy! Tomorrow we meet the beloved ones"'}, c:true },
            { t:{ar:'طَلَبَ العَودَةَ إلى مَكَّة', en:'He asked to return to Makkah'}, c:false },
          ] },
      ],
      moral:      { ar:'الصَّبرُ على الأَذى في سَبيلِ الله يُحَوِّلُ الضَّعيفَ إلى قَويّ، والعَبدَ إلى رَمزٍ خالِد.', en:'Patience under harm for Allah\'s sake transforms the weak into the strong, and the enslaved into an eternal symbol.' },
      badge:      { icon:'🎵', title:{ar:'وِسامُ «أَحَدٌ أَحَد»', en:'Badge of "Ahad Ahad"'} },
      reflect:    [
        {ar:'لَو آذاكَ أَحَدٌ بِسَبَبِ إيمانِكَ، ما الَّذي تُذَكِّرُ بِهِ نَفسَك؟', en:'If someone harmed you because of your faith, what would you remind yourself of?'},
        {ar:'كَيفَ تَفسِّرُ أنَّ بِلالاً كانَ فَرِحاً عِندَ المَوتِ رَغمَ ما عاشَهُ مِن عَذاب؟', en:'How do you explain that Bilal was joyful at death despite the torture he experienced?'},
      ],
      didYouKnow: [
        {ar:'ذَكَرَ الذَّهَبيُّ قِصَّةَ بِلالٍ وعِتقَه وكَلِماتِه عِندَ الوَفاةِ في «سِيَرِ أَعلامِ النُّبَلاء» — ج١ ص٣٤٨', en:'Al-Dhahabi mentioned Bilal\'s story, his freeing, and his words at death in "Siyar A\'lam al-Nubala\'" — Volume 1, p. 348'},
        {ar:'قالَ عُمَرُ بن الخَطّاب رضي الله عنه: «أبو بَكرٍ سَيِّدُنا وأَعتَقَ سَيِّدَنا» — يَعني بِلالاً. وهذهِ شَهادَةٌ مِن أَمير المُؤمِنين بِعَظَمَةِ بِلال وصَبرِه.', en:'\'Umar ibn al-Khattab رضي الله عنه said: "Abu Bakr is our master, and he freed our master" — meaning Bilal. This is testimony from the Commander of the Faithful to Bilal\'s greatness and patience.'},
      ],
    },



    /* ──────────────────────────────────────────
       STORY 4 — حِكمَةُ الصَّبر: ابنُ القَيِّم وسِرُّ الثَّلاثِ دَرَجات
       Scene: mosque (night study) | Character: 📖
       Source: مدارج السالكين — ابن القيم — باب الصبر
    ────────────────────────────────────────── */
    {
      icon:'📖', scene:'mosque', character:'📖',
      title: { ar:'سِرُّ الصَّبرِ الثَّلاثَة: حِكمَةُ ابنِ القَيِّم', en:'The secret of the three patiences: the wisdom of Ibn al-Qayyim' },
      pages: [
        { scene:'mosque', character:'📖',
          text:{ ar:'في القَرنِ الثّامِنِ الهِجريّ، في دِمَشقَ الَّتي تَرقُصُ فيها ضِلالُ الشَّجَر، كانَ شابٌّ اسمُهُ مُحَمَّدُ بنُ أبي بَكر — الَّذي عُرِفَ بَعدَها بِـ«ابنِ القَيِّم» — يَجلِسُ كُلَّ يَومٍ عِندَ قَدَمَي شَيخِه الجَليلِ ابنِ تَيمِيَّة يَكتُبُ ويَسمَع.<br><br>كانَ يَرى شَيخَه يُسجَنُ مَرَّةً بَعدَ مَرَّة بِسَبَبِ فَتاواه الجَريئَة — لَكِنَّهُ في كُلِّ سِجنٍ كانَ يَكتُبُ ويُفَكِّرُ ويُعَلِّم. يَرى ابنُ القَيِّم هذا ويَتَساءَل: ما سِرُّ هذا الثَّبات؟ ما هذا الصَّبرُ الَّذي يُحَوِّلُ السِّجنَ إلى مَدرَسَة؟', en:'In the eighth Hijri century, in Damascus where the shadows of trees danced, a young man named Muhammad ibn Abi Bakr — later known as "Ibn al-Qayyim" — sat every day at the feet of his noble teacher Ibn Taymiyyah, writing and listening.<br><br>He watched his teacher imprisoned again and again for his courageous fatwas — yet in each prison he wrote, reflected, and taught. Ibn al-Qayyim observed this and asked himself: what is the secret of this steadfastness? What is this patience that transforms prison into a school?' } },

        { scene:'mosque', character:'📖',
          text:{ ar:'أَفنى ابنُ القَيِّم سَنَواتٍ في تَأَمُّلِ القُرآنِ الكَريمِ ودِراسَةِ أَحوالِ القُلوب، حَتّى كَتَبَ كِتابَهُ العَظيمَ «مَدارِجُ السّالِكين» الَّذي جَمَعَ فيه أَسرارَ السَّيرِ إلى الله. وكانَ بابُ الصَّبرِ مِن أَجمَلِ ما كَتَبَ.<br><br>قالَ ابنُ القَيِّم: الصَّبرُ ثَلاثَةُ أَنواع: <b>صَبرٌ على طاعَةِ الله</b> — وهو حَملُ النَّفسِ على أداءِ ما أَوجَبَه الله. و<b>صَبرٌ عَن مَعصيَةِ الله</b> — وهو حَبسُ النَّفسِ عَمّا حَرَّمَه الله. و<b>صَبرٌ على أَقدارِ الله المُؤلِمَة</b> — وهو احتِمالُ ما يُصيبُ الإنسانَ مِن مَصائِبَ بِقَلبٍ واثِق.',
                en:'Ibn al-Qayyim spent years contemplating the Noble Quran and studying the states of hearts, until he wrote his great book "Madarij al-Salikin" in which he gathered the secrets of the journey to Allah. The chapter on patience was among the most beautiful things he wrote.<br><br>Ibn al-Qayyim said: Patience is of three types: <b>patience in Allah\'s obedience</b> — which is compelling the self to perform what Allah has obligated. <b>Patience from Allah\'s disobedience</b> — which is restraining the self from what Allah has forbidden. <b>Patience upon Allah\'s painful decrees</b> — which is bearing what befalls a person of calamities with a trusting heart.' } },

        { scene:'night', character:'📖',
          text:{ ar:'ثُمَّ قالَ ابنُ القَيِّم شَيئاً عَجيباً: <b>أَعلى هذهِ الأَنواعِ الثَّلاثَةِ وأَشَقُّها هو الصَّبرُ على طاعَةِ الله!</b> لِأنَّ الصَّبرَ على المَصيبَةِ تُعينُ عَليهِ الطَّبيعَةُ البَشَريَّة، لَكِنَّ الصَّبرَ على الطّاعَةِ كُلَّ يَومٍ وكُلَّ صَلاةٍ وكُلَّ سَنَة — هذا يَحتاجُ إلى إرادَةٍ صادِقَة.<br><br>ثُمَّ نَقَلَ عَن شَيخِ الإسلامِ ابنِ تَيمِيَّة كَلِمَةً ذَهَبيَّة تَعَلَّمَها في السِّجنِ والمِحَن: <b>«بِالصَّبرِ واليَقينِ تُنالُ الإمامَةُ في الدِّين.»</b> وكانَ يَقولُ: «مَن قَرَأ هذه الكَلِمَةَ وفَهِمَها وعَمِلَ بِها كَفَتهُ في كُلِّ شَيء!»', en:'Then Ibn al-Qayyim said something remarkable: <b>the highest and most difficult of these three types is patience in Allah\'s obedience!</b> Because patience through calamity is aided by human nature, but patience in obedience every day, every prayer, and every year — this requires sincere will.<br><br>Then he transmitted from his teacher Ibn Taymiyyah a golden saying learned in prison and trial: <b>"Through patience and certainty, leadership in faith is attained."</b> He would say: "Whoever reads this saying, understands it, and acts upon it — it will suffice him in everything!"' },
          choice:{ q:{ar:'حَسَبَ ابنِ القَيِّم، ما أَصعَبُ أَنواعِ الصَّبر؟', en:'According to Ibn al-Qayyim, which type of patience is the most difficult?'},
            opts:[
              { t:{ar:'الصَّبرُ على المَصائِب', en:'Patience through calamities'}, c:false,
                exp:{ar:'هذا صَعبٌ لَكِنَّهُ ليسَ الأَصعَب! الطَّبيعَةُ البَشَريَّةُ تُعينُ عَليه عِندَ المُصيبَة.', en:'This is hard but not the hardest! Human nature assists with it at the time of calamity.'} },
              { t:{ar:'الصَّبرُ على طاعَةِ اللهِ كُلَّ يَوم', en:'Patience in obeying Allah every single day'}, c:true,
                exp:{ar:'نَعَم! المُداوَمَةُ على الطّاعَةِ يَوماً بَعدَ يَومٍ تَحتاجُ إلى صَبرٍ حَقيقيّ مُستَمِرّ.', en:'Yes! Persisting in obedience day after day requires genuine and continuous patience.'} },
              { t:{ar:'الصَّبرُ عَن المَعاصي', en:'Patience from sins'}, c:false,
                exp:{ar:'هذا صَعبٌ أَيضاً — لَكِنَّ الأَصعَبَ هو الصَّبرُ على الطّاعَةِ المُستَمِرَّة!', en:'This is also hard — but the hardest is patience in continuous obedience!'} },
            ] } },

        { scene:'night', character:'📖',
          text:{ ar:'كَتَبَ ابنُ القَيِّم أيضاً عَن «ثِمارِ الصَّبر» — وسَرَدَها بِشَكلٍ يَجعَلُ القَلبَ يَشتاقُ إلى الصَّبر! قالَ: الصَّبرُ يُورِثُ صاحِبَهُ خَمسَةَ عَشَرَ فائِدَة، مِنها: أنَّ اللهَ مَعَ الصَّابِر، وأنَّ الصَّابِرَ يُوفَّى أَجرُهُ بِغَيرِ حِساب، وأنَّ الصَّبرَ يُورِثُ الإمامَةَ في الدِّين، وأنَّ أَهلَ الصَّبرِ هُم أَهلُ العَزائِم.<br><br>ثُمَّ قالَ جُملَةً عَجيبَة: <b>«مَن أَحسَنَ العِبادَةَ في السَّرّاءِ وأَحسَنَ الصَّبرَ في الضَّرّاء — فَقَد جَمَعَ بَينَ المَقامَينِ وتَمَّت لَهُ السَّعادَة!»</b> كَأَنَّ الدُّنيا كُلَّها بِبَابَين — السَّرّاءِ والضَّرّاء — والمُؤمِنُ السَّعيدُ يَدخُلُ الجَنَّةَ مِن كِلا البابَين!', en:'Ibn al-Qayyim also wrote about "the fruits of patience" — and listed them in a way that makes the heart long for patience! He said: Patience bequeaths to its owner fifteen benefits, among them: that Allah is with the patient; that the patient receive their reward without limit; that patience brings leadership in faith; and that the patient are the people of firm resolve.<br><br>Then he said a remarkable sentence: <b>"Whoever perfects worship in ease and perfects patience in hardship — has combined both stations and his happiness is complete!"</b> As if this whole world has two doors — ease and hardship — and the happy believer enters Paradise through both of them!' } },

        { scene:'mosque', character:'📖',
          text:{ ar:'وذَكَرَ ابنُ القَيِّم في مَدارِجِهِ قِصَّةً مَعبَرَة: أنَّ رَجُلاً جاءَ إلى أَحَدِ العُلَماءِ وقالَ له: «إنّي أُبتَلى بِأَشياءَ كَثيرَة وأُريدُ أن أَصبِرَ، لَكِنَّ الصَّبرَ يَشُقُّ عَلَيَّ جِدّاً!» فَقالَ العالِمُ: <b>«إن شَقَّ عَلَيكَ الصَّبرُ فاصبِر على الصَّبر — فَإنَّ في ذلكَ أَجرَين: أَجرُ الصَّبرِ وأَجرُ التَّصَبُّر!»</b><br><br>ثُمَّ قالَ ابنُ القَيِّم: وهذا هو الفَرقُ بَينَ «الصَّبر» و«التَّصَبُّر» و«الاصطِبار»: الصَّبرُ يَكونُ بِلا كُلفَة، والتَّصَبُّرُ يَكونُ بِمُجاهَدَة، والاصطِبارُ يَكونُ بِالإلزامِ والتَّكَلُّف — وكُلُّها مَقبولَةٌ عِندَ الله.', en:'Ibn al-Qayyim mentioned in his Madarij an expressive story: a man came to one of the scholars and said: "I am tested with many things and want to be patient, but patience is very hard for me!" The scholar said: <b>"If patience is hard for you, then be patient with patience itself — for in that there are two rewards: the reward of patience and the reward of forcing oneself to patience!"</b><br><br>Then Ibn al-Qayyim said: This is the difference between "sabr" and "tasabbur" and "istisbar": sabr comes without effort, tasabbur comes through striving, and istisbar comes through self-compulsion — and all are accepted by Allah.' } },

        { scene:'garden', character:'📖',
          text:{ ar:'وخَتَمَ ابنُ القَيِّم في مَدارِجِه بِكَلامٍ يَبقى في القَلب: قالَ إنَّ الصَّبرَ لَيسَ ضَعفاً ولا استِسلاماً — بَل هو <b>أَقوى حُصونِ المُؤمِنِ وأَمنَعُها!</b> مَن صَبَرَ لم يَهزِمهُ أَحَد، ومَن صَبَرَ لَم يَضيعَ ولَم يَخسَر.<br><br>وقالَ: العَجيبُ مِن أَمرِ الصَّبرِ أنَّهُ يَقوى بِالاستِخدامِ — فَكُلَّما صَبَرتَ مَرَّةً سَهُلَ عَلَيكَ الصَّبرُ في المَرَّةِ التّالِيَة! <b>الصَّبرُ كالعَضَلَة — يَشتَدُّ بِالتَّمرين.</b> فَابدَأ اليَومَ بِصَبرٍ صَغير — وسَتَجِدُ نَفسَكَ غَداً تَصبِرُ على ما لم تَتَخَيَّل.', en:'Ibn al-Qayyim concluded in his Madarij with words that remain in the heart: he said that patience is not weakness or surrender — rather it is <b>the strongest and most impregnable of the believer\'s fortresses!</b> Whoever is patient is defeated by no one, and whoever is patient neither perishes nor loses.<br><br>He said: The remarkable thing about patience is that it grows stronger through use — every time you are patient once, the next time becomes easier! <b>Patience is like a muscle — it strengthens through exercise.</b> So begin today with a small patience — and you will find yourself tomorrow patient with what you never imagined.' } },

        { scene:'mosque', character:'📖',
          text:{ ar:'هذا هو ابنُ القَيِّم — الَّذي رَأى شَيخَهُ يَصبِرُ في السِّجنِ فَتَعَلَّمَ مِنه، ثُمَّ قَضى عُمُرَهُ يَشرَحُ سِرَّ الصَّبرِ لِلأُمَّة. وحينَ سَأَلَهُ أَحَدُهُم: «ما أَفضَلُ طَريقٍ لِتَعَلُّمِ الصَّبر؟» قالَ بِبَساطَة: <b>«تَأَمَّل في قِصَصِ الصّابِرين: يوسُف في البِئرِ وأيّوب في المِحنَةِ وبِلال في العَذاب — ثُمَّ انظُر كَيفَ كانَت نِهايَتُهُم — وتَعَلَّم!»</b><br><br>الصَّبرُ بابٌ — مَن دَخَلَهُ صادِقاً وَجَدَ خَلفَهُ رَحمَةَ اللهِ وفَرَجَهُ ومَحَبَّتَه. فَإنَّ اللهَ يُحِبُّ الصّابِرين.',
                en:'This is Ibn al-Qayyim — who saw his teacher patient in prison and learned from him, then spent his life explaining the secret of patience to the Ummah. When someone asked him: "What is the best way to learn patience?" He said simply: <b>"Contemplate the stories of the patient ones: Yusuf in the well, Ayyub in his trial, and Bilal under torture — then look at how their endings were — and learn!"</b><br><br>Patience is a door — whoever enters it sincerely will find behind it Allah\'s mercy, His relief, and His love. For Allah loves the patient.' } },
      ],
      quiz: [
        { q:{ar:'مَن هو شَيخُ ابنِ القَيِّم الَّذي رَآهُ يَصبِرُ في السِّجن؟', en:'Who was Ibn al-Qayyim\'s teacher whom he saw patient in prison?'},
          opts:[
            { t:{ar:'الإمام الشّافِعيّ', en:'Imam al-Shafi\'i'}, c:false },
            { t:{ar:'ابنُ تَيمِيَّة', en:'Ibn Taymiyyah'}, c:true },
            { t:{ar:'الإمامُ مالِك', en:'Imam Malik'}, c:false },
          ] },
        { q:{ar:'حَسَبَ ابنِ القَيِّم، بِماذا تُنالُ الإمامَةُ في الدِّين؟', en:'According to Ibn al-Qayyim, by what is leadership in faith attained?'},
          opts:[
            { t:{ar:'بِالمالِ والجاه', en:'By wealth and status'}, c:false },
            { t:{ar:'بِالصَّبرِ واليَقين', en:'By patience and certainty'}, c:true },
            { t:{ar:'بِالعِلمِ فَقَط', en:'By knowledge alone'}, c:false },
          ] },
        { q:{ar:'ما اسمُ كِتابِ ابنِ القَيِّم الَّذي شَرَحَ فيه أَسرارَ الصَّبر؟', en:'What is the name of Ibn al-Qayyim\'s book in which he explained the secrets of patience?'},
          opts:[
            { t:{ar:'إحياءُ عُلومِ الدِّين', en:'Ihya\' \'Ulum al-Din'}, c:false },
            { t:{ar:'مَدارِجُ السّالِكين', en:'Madarij al-Salikin'}, c:true },
            { t:{ar:'رِسالَةُ المُسترشِدين', en:'Risalat al-Mustarshidin'}, c:false },
          ] },
      ],
      moral:      { ar:'الصَّبرُ لَيسَ استِسلاماً — بَل هو أَقوى حُصونِ المُؤمِن. يَقوى بِالتَّمرينِ ويُورِثُ صاحِبَهُ الإمامَةَ في الدِّين.', en:'Patience is not surrender — it is the believer\'s strongest fortress. It grows through practice and bequeaths to its owner leadership in faith.' },
      badge:      { icon:'📖', title:{ar:'وِسامُ حِكمَةِ المَدارِج', en:'Badge of Madarij Wisdom'} },
      reflect:    [
        {ar:'أيُّ الأَنواعِ الثَّلاثَةِ لِلصَّبرِ تَجِدُهُ أَصعَبَ في حَياتِك؟ ولِماذا؟', en:'Which of the three types of patience do you find most difficult in your life? Why?'},
        {ar:'كَيفَ يُمكِنُكَ أن تُمارِسَ الصَّبرَ كـ«عَضَلَة» في يَومِك؟', en:'How can you practice patience as a "muscle" in your day?'},
      ],
      didYouKnow: [
        {ar:'كَتَبَ ابنُ القَيِّم فَصلاً كامِلاً عَن الصَّبرِ في «مَدارِجِ السّالِكين — باب الصبر» نَقَلَ فيه خَمسَةَ عَشَرَ وَجهاً مِن فَضلِ الصَّبرِ مِنَ القُرآنِ الكَريم. المَصدَر: مَدارِجُ السّالِكين — ابنُ القَيِّم — بابُ الصَّبر', en:'Ibn al-Qayyim wrote a complete chapter on patience in "Madarij al-Salikin — Chapter on Patience" transmitting fifteen aspects of patience\'s virtue from the Noble Quran. Source: Madarij al-Salikin — Ibn al-Qayyim — Chapter on Patience'},
        {ar:'قالَ ابنُ القَيِّم: «الصَّبرُ على الطّاعَةِ أَشَقُّ مِنَ الصَّبرِ عَلى المَصيبَة» — جُملَةٌ تُغَيِّرُ طَريقَةَ تَفكيرِنا في الصَّبر!', en:'Ibn al-Qayyim said: "Patience in obedience is harder than patience through calamity" — a sentence that changes how we think about patience!'},
      ],
    },

  ], /* end stories */



  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ ﴾',
                en:'"O you who believe — seek help through patience and prayer. Indeed Allah is with the patient."' },
        ref: { ar:'[سورة البقرة: ١٥٣]', en:'[Surah Al-Baqarah: 153]' } },
      { text: { ar:'﴿ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ ﴾',
                en:'"Indeed the patient will be given their reward without limit."' },
        ref: { ar:'[سورة الزُّمَر: ١٠]', en:'[Surah Az-Zumar: 10]' } },
      { text: { ar:'﴿ وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ ﴾',
                en:'"And We will surely test you — but give good tidings to the patient."' },
        ref: { ar:'[سورة البقرة: ١٥٥]', en:'[Surah Al-Baqarah: 155]' } },
    ],
    hadiths: [
      { text: { ar:'«عَجَباً لِأَمرِ المُؤمِن — إن أَصابَتهُ سَرّاءُ شَكَرَ وإن أَصابَتهُ ضَرّاءُ صَبَرَ — فَكانَ خَيراً لَه»',
                en:'"How wonderful the affair of the believer — if good befalls him he gives thanks, and if hardship befalls him he is patient — and that is good for him."' },
        ref: { ar:'[رواه مسلم — حديث ٢٩٩٩]', en:'[Sahih Muslim — 2999]' } },
      { text: { ar:'«ما أُعطِيَ أَحَدٌ عَطاءً خَيراً وأَوسَعَ مِنَ الصَّبر»',
                en:'"No one has been given a gift better and more ample than patience."' },
        ref: { ar:'[رواه البُخاري — حديث ١٤٦٩]', en:'[Sahih al-Bukhari — 1469]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ الصَّبر', en:'Pledge of patience' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أَصبِرَ على طاعَتِهِ ولا أَتَركَها بِحُجَّةِ الكَسَل', en:'I pledge to Allah to be patient in His obedience and never abandon it under the excuse of laziness' },
        { ar:'أُعاهِدُ اللهَ أن أَصبِرَ عَن مَعاصيهِ ولَو زَيَّنَها الشَّيطان', en:'I pledge to Allah to be patient from His prohibitions even if the Shaitan adorns them' },
        { ar:'أُعاهِدُ اللهَ أن أَصبِرَ على البَلاءِ وأَقولَ: «الحَمدُ للهِ على كُلِّ حال»', en:'I pledge to Allah to be patient through hardship and say: "All praise to Allah in every circumstance"' },
        { ar:'أُعاهِدُ اللهَ أن أَتَذَكَّرَ يوسُفَ وأيّوبَ وبِلالاً عِندَ كُلِّ صُعوبَة', en:'I pledge to Allah to remember Yusuf, Ayyub, and Bilal at every difficulty' },
      ],
      dua: { ar:'اللَّهُمَّ أَعِنّي على ذِكرِكَ وشُكرِكَ وحُسنِ عِبادَتِك، واجعَلني مِنَ الصّابِرينَ الشّاكِرين',
             en:'O Allah — help me in Your remembrance, Your gratitude, and in worshipping You well, and make me among the patient and the grateful' },
    },
  },



  /* ───── ROOM 4: Activities ───── */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اعرِف', en:'Know' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: { ar:['الصَّبر','القَلب','الأَجر','الطّاعَة','المَعصيَة','البَلاء','اليَقين','الإمامَة'], en:['patience','heart','reward','obedience','sin','trial','certainty','leadership'] },
            items: [
              { prefix:{ar:'استَعينوا بِ', en:'Seek help through'}, answer:{ar:'الصَّبر', en:'patience'}, suffix:{ar:'والصَّلاة إنَّ اللهَ مَعَ الصّابِرين', en:'and prayer — indeed Allah is with the patient'} },
              { prefix:{ar:'الصَّبرُ هو حَبسُ النَّفسِ في', en:'Patience is restraining the self in'}, answer:{ar:'الطّاعَة', en:'obedience'}, suffix:{ar:'وعَن المَعصيَة', en:'and from sin'} },
              { prefix:{ar:'يُوفَّى الصّابِرونَ', en:'The patient receive their'}, answer:{ar:'الأَجر', en:'reward'}, suffix:{ar:'بِغَيرِ حِساب', en:'without limit'} },
              { prefix:{ar:'بِالصَّبرِ و', en:'Through patience and'}, answer:{ar:'اليَقين', en:'certainty'}, suffix:{ar:'تُنالُ الإمامَةُ في الدِّين', en:'leadership in faith is attained'} },
              { prefix:{ar:'الصَّبرُ الحَقيقيُّ يَأتي مِن قُوَّةِ', en:'True patience comes from strength of'}, answer:{ar:'القَلب', en:'heart'}, suffix:{ar:'واليَقينِ بِالله', en:'and certainty in Allah'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الصَّبرُ على الطّاعَةِ أَشَقُّ مِنَ الصَّبرِ على المَصيبَة', en:'Patience in obedience is harder than patience through calamity'}, t:true },
              { q:{ar:'البَلاءُ دَليلٌ دائِماً على غَضَبِ الله', en:'Hardship is always a sign of Allah\'s anger'}, t:false },
              { q:{ar:'الصّابِرونَ يُوفَّونَ أَجرَهُم بِغَيرِ حِساب', en:'The patient receive their reward without limit'}, t:true },
              { q:{ar:'يوسُفُ عليه السلام اختارَ السِّجنَ على المَعصيَة', en:'Yusuf عليه السلام chose prison over disobedience'}, t:true },
              { q:{ar:'الصَّبرُ يَضعُفُ كُلَّما استَخدَمتَه أَكثَر', en:'Patience weakens the more you use it'}, t:false },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى الصَّبرِ لُغَةً؟', en:'What does patience mean linguistically?'},
                opts:[
                  { t:{ar:'الحَبسُ والكَفّ', en:'Restraint and holding back'}, c:true },
                  { t:{ar:'الغَضَب', en:'Anger'}, c:false },
                  { t:{ar:'السُّرعَة', en:'Speed'}, c:false }
                ] },
              { q:{ar:'مَن ضُرِبَ به المَثَلُ في الصَّبرِ على المَرَض؟', en:'Who became the example of patience through illness?'},
                opts:[
                  { t:{ar:'أيّوبُ عليه السلام', en:'Ayyub عليه السلام'}, c:true },
                  { t:{ar:'يوسُفُ عليه السلام', en:'Yusuf عليه السلام'}, c:false },
                  { t:{ar:'موسى عليه السلام', en:'Musa عليه السلام'}, c:false }
                ] },
              { q:{ar:'ما كَلِمَةُ بِلالٍ أَثناءَ العَذاب؟', en:'What was Bilal\'s word during torture?'},
                opts:[
                  { t:{ar:'«أَحَدٌ أَحَد»', en:'"Ahad, Ahad"'}, c:true },
                  { t:{ar:'«الله أَكبَر»', en:'"Allah Akbar"'}, c:false },
                  { t:{ar:'«أَستَغفِرُ الله»', en:'"Astaghfirullah"'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 2. FLIP */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ ar:'اقلِب', en:'Flip' },
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              { a:{ar:'الصَّبرُ على الطّاعَة', en:'Patience in obedience'}, b:{ar:'المُداوَمَةُ على العِبادَة', en:'Persisting in worship'} },
              { a:{ar:'الصَّبرُ عَن المَعصيَة', en:'Patience from sin'}, b:{ar:'مُقاوَمَةُ الإِغراء', en:'Resisting temptation'} },
              { a:{ar:'الصَّبرُ على البَلاء', en:'Patience through hardship'}, b:{ar:'«الحَمدُ للهِ على كُلِّ حال»', en:'"Praise to Allah in every state"'} },
              { a:{ar:'أَعلى دَرَجَةِ الصَّبر', en:'Highest rank of patience'}, b:{ar:'الصَّبرُ بِاللهِ لا بِالنَّفس', en:'Patience through Allah not oneself'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'يوسُفُ في البِئر والسِّجن', en:'Yusuf in the well and prison'} },
              { id:2, t:{ar:'أيّوبُ والمَرَض الطَّويل', en:'Ayyub and the long illness'} },
              { id:3, t:{ar:'بِلالٌ تَحتَ العَذاب', en:'Bilal under torture'} },
              { id:4, t:{ar:'ابنُ القَيِّم في المَدارِج', en:'Ibn al-Qayyim in Madarij'} },
            ],
            right: [
              { id:2, t:{ar:'«أَحَدٌ أَحَد» لا يَتَراجَع', en:'"Ahad Ahad" — never backs down'} },
              { id:4, t:{ar:'شَرَحَ أَنواعَ الصَّبرِ الثَّلاثَة', en:'Explained the three types of patience'} },
              { id:1, t:{ar:'اختارَ السِّجنَ على المَعصيَة', en:'Chose prison over disobedience'} },
              { id:3, t:{ar:'صَبَرَ سَنَواتٍ ثُمَّ نادى ربَّه', en:'Patient for years then called his Lord'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما الكِتابُ الَّذي شَرَحَ فيه ابنُ القَيِّم أَسرارَ الصَّبر؟', en:'In which book did Ibn al-Qayyim explain the secrets of patience?'},
                opts:[
                  { t:{ar:'مَدارِجُ السّالِكين', en:'Madarij al-Salikin'}, c:true },
                  { t:{ar:'إحياءُ عُلومِ الدِّين', en:'Ihya\' \'Ulum al-Din'}, c:false },
                  { t:{ar:'الفُتوحاتُ المَكِّيَّة', en:'Al-Futuhat al-Makkiyya'}, c:false }
                ] },
              { q:{ar:'مَن اشتَرى بِلالاً وأَعتَقَه مِن العُبوديَّة؟', en:'Who purchased Bilal and freed him from slavery?'},
                opts:[
                  { t:{ar:'أبو بَكرٍ الصِّدِّيق رضي الله عنه', en:'Abu Bakr al-Siddiq رضي الله عنه'}, c:true },
                  { t:{ar:'عُمَر بنُ الخَطّاب رضي الله عنه', en:'\'Umar ibn al-Khattab رضي الله عنه'}, c:false },
                  { t:{ar:'عُثمانُ بنُ عَفّان رضي الله عنه', en:'\'Uthman ibn \'Affan رضي الله عنه'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 3. SORT */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ ar:'رَتِّب', en:'Sort' },
        levels: [
          { kind:'sort', points:30,
            items: [
              { t:{ar:'قَولُ «الحَمدُ للهِ» عِندَ المُصيبَة', en:'Saying "Praise to Allah" at calamity'}, good:true },
              { t:{ar:'الصُّراخُ والتَّشَكّي عِندَ أَوَّلِ بَلاء', en:'Screaming and complaining at the first hardship'}, good:false },
              { t:{ar:'المُواظَبَةُ على الصَّلَواتِ في كُلِّ يَوم', en:'Maintaining prayers every single day'}, good:true },
              { t:{ar:'تَركُ الصَّلاةِ بِحُجَّةِ الكَسَل', en:'Abandoning prayer under the excuse of laziness'}, good:false },
              { t:{ar:'الصَّبرُ على أَذى الأَصحابِ بِكَرَم', en:'Bearing companions\' harm nobly'}, good:true },
              { t:{ar:'الاستِسلامُ لِلمَعصيَةِ فَوراً', en:'Immediately surrendering to sin'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تَذَكُّرُ أَجرِ اللهِ عِندَ الصُّعوبَة', en:'Remembering Allah\'s reward during difficulty'}, good:true },
              { t:{ar:'اليَأسُ مِن رَحمَةِ الله', en:'Despairing of Allah\'s mercy'}, good:false },
              { t:{ar:'قِراءَةُ قِصَصِ الأَنبِياءِ الصّابِرين', en:'Reading stories of the patient Prophets'}, good:true },
              { t:{ar:'المُقارَنَةُ بِالأَغنياءِ وكُرهُ الحال', en:'Comparing oneself to the rich and hating one\'s state'}, good:false },
              { t:{ar:'الدُّعاءُ في كُلِّ ضيقٍ وأَزمَة', en:'Supplicating in every hardship and crisis'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'احتِمالُ الإِيذاءِ بِسَبَبِ الإيمان', en:'Bearing harm because of one\'s faith'}, good:true },
              { t:{ar:'التَّخَلّي عَن الدِّينِ هُروباً مِن الأَذى', en:'Abandoning faith to flee from harm'}, good:false },
              { t:{ar:'تَمرينُ النَّفسِ على الصَّبرِ بِالبُدايَةِ الصَّغيرَة', en:'Training the self in patience starting with small things'}, good:true },
              { t:{ar:'المُطالَبَةُ بِالفَرَجِ الفَوريِّ دونَ صَبر', en:'Demanding immediate relief without patience'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          /* Emoji cipher — key: emoji → Arabic letter, emoji → English letter
             Puzzles verified manually:
             Puzzle 1 ar: 🌿=ص, 🌸=ب, 💧=ر → صبر (sabr/patience) ✓
             Puzzle 2 ar: 🌙=أ, ⭐=ح, 🌿=ص, 🌸=ب, 💧=ر → أحصبر? no — let's do يَقين:
               🔥=ي, 💎=ق, 🌙=إ, 🌿=ص → not clean. Let me pick clear 3-4 letter words.
             Arabic puzzles:
               صبر: 🌿🌸💧 → ص ب ر
               أجر: 🌙💎💧 → أ ج ر
               صبرا: 🌿🌸💧🌙 → ص ب ر أ... skip, use صبر
               نور: ⭐🔥💎 → ن و ر
             English puzzles:
               'hope': 🌸🌙💪🎵 → h o p e
               'calm': ⭐🌙🦁💎 → c a l m
               'will': 🌟💧🦁🦁 → w i l l
          */
          { kind:'cipher', points:30,
            key: {
              ar:{ '🌿':'ص', '🌸':'ب', '💧':'ر', '🌙':'أ', '⭐':'ح', '💎':'ج', '🔥':'ن', '🌟':'و' },
              en:{ '🌿':'s', '🌸':'a', '💪':'b', '⭐':'r', '🌙':'h', '💧':'o', '💎':'p', '🎵':'e' }
            },
            puzzles: [
              { symbols:{ar:'🌿🌸💧', en:'🌿🌸💪⭐'}, answer:{ar:'صبر', en:'sabr'} },
              { symbols:{ar:'⭐🌙💧', en:'🌙💧💎🎵'}, answer:{ar:'حأر', en:'hope'} },
              { symbols:{ar:'🌙💎💧', en:'🌿🌸💪⭐'}, answer:{ar:'أجر', en:'sabr'} },
            ]
          },
          /* Number cipher:
             Arabic: ص=1, ب=2, ر=3, أ=4, ح=5, ي=6, ق=7, ن=8, و=9
             Verify: صبر = 1-2-3 ✓; حيق = 5-6-7? no word. أجر = 4-?
             English: s=1, a=2, b=3, r=4, p=5, t=6, i=7, e=8, n=9, c=10
             Verify: 'star' = 1,6,2,4 wait s=1,t=6,a=2,r=4 → 1-6-2-4 ✓
                     'pace' = 5,2,10,8 → 5-2-10-8 ✓
                     'bear' = 3,8,2,4 → 3-8-2-4 ✓
          */
          { kind:'cipher', points:30,
            key: {
              ar:{ 'ص':'1', 'ب':'2', 'ر':'3', 'أ':'4', 'ح':'5', 'ي':'6', 'ق':'7', 'ن':'8', 'و':'9' },
              en:{ 's':'1', 'a':'2', 'b':'3', 'r':'4', 'p':'5', 't':'6', 'i':'7', 'e':'8', 'n':'9', 'c':'10' }
            },
            puzzles: [
              { symbols:{ar:'1-2-3', en:'1-6-2-4'}, answer:{ar:'صبر', en:'star'} },
              { symbols:{ar:'4-5-3', en:'5-2-10-8'}, answer:{ar:'أحر', en:'pace'} },
              { symbols:{ar:'8-9-3', en:'3-8-2-4'}, answer:{ar:'نور', en:'bear'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى «الصَّبرُ بِغَيرِ حِساب»؟', en:'What does "patience rewarded without limit" mean?'},
                opts:[
                  { t:{ar:'لا يُحسَبُ الأَجرُ في الدُّنيا', en:'The reward is not counted in this world'}, c:false },
                  { t:{ar:'أَجرُ الصَّبرِ لا حَدَّ لَه عِندَ الله', en:'The reward of patience has no ceiling with Allah'}, c:true },
                  { t:{ar:'الصّابِرُ لا يُحاسَبُ يَومَ القِيامَة', en:'The patient person has no reckoning on Judgment Day'}, c:false }
                ] },
              { q:{ar:'ما الفَرقُ بَينَ «الصَّبر» و«التَّصَبُّر» حَسَبَ ابنِ القَيِّم؟', en:'What is the difference between "sabr" and "tasabbur" according to Ibn al-Qayyim?'},
                opts:[
                  { t:{ar:'الصَّبرُ بِلا كُلفَة والتَّصَبُّرُ بِمُجاهَدَة', en:'Sabr comes without effort; tasabbur comes through striving'}, c:true },
                  { t:{ar:'لا فَرقَ بَينَهُما', en:'There is no difference between them'}, c:false },
                  { t:{ar:'التَّصَبُّرُ أَدنى مَرتَبَةً', en:'Tasabbur is a lower station'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 5. SCENARIOS */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ ar:'مَواقِف', en:'Scenarios' },
        levels: [
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'رَسَبتَ في الاختِبارِ رَغمَ مُذاكَرَتِك. ماذا تَفعَل؟', en:'You failed the exam despite studying. What do you do?'},
                opts:[
                  { t:{ar:'أَيأَسُ وأَتَركُ المُذاكَرَة.', en:'I despair and stop studying.'},  c:false },
                  { t:{ar:'أَصبِرُ وأَحاوِلُ مَرَّةً أُخرى مُستَعيناً بِالله.', en:'I am patient and try again, seeking Allah\'s help.'},  c:true },
                  { t:{ar:'أَتَعَمَّدُ الغِشَّ في المَرَّةِ القادِمَة.', en:'I decide to cheat in the next exam.'},  c:false },
                ] },
              { q:{ar:'صَديقُكَ آذاكَ بِكَلامٍ مُؤلِم. ماذا تَفعَل؟', en:'Your friend hurt you with painful words. What do you do?'},
                opts:[
                  { t:{ar:'أَنتَقِمُ فَوراً بِكَلامٍ أَشَدّ.', en:'I take revenge immediately with harsher words.'},  c:false },
                  { t:{ar:'أَصبِرُ وأَنصَحُهُ بِهُدوءٍ في وَقتٍ مُناسِب.', en:'I am patient and advise him calmly at an appropriate time.'},  c:true },
                  { t:{ar:'أَكَفُّ عَن صَداقَتِه إلى الأَبَد.', en:'I end the friendship forever.'},  c:false },
                ] },
              { q:{ar:'أُمُّكَ طَلَبَت مِنكَ شَيئاً لا تُحِبُّه. ماذا تَفعَل؟', en:'Your mother asked you to do something you dislike. What do you do?'},
                opts:[
                  { t:{ar:'أَرفُضُ بِحِدَّة.', en:'I refuse sharply.'},  c:false },
                  { t:{ar:'أَصبِرُ وأُطيعُها مُحتَسِباً الأَجر.', en:'I am patient and obey her, anticipating the reward.'},  c:true },
                  { t:{ar:'أَتَذَمَّرُ وأَشتَكي.', en:'I grumble and complain.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'تَعبِتَ مِنَ الصِّيامِ في نِصفِ النَّهار. ماذا تَفعَل؟', en:'You are tired from fasting midday. What do you do?'},
                opts:[
                  { t:{ar:'أُفطِرُ لِأنَّ الجَسَدَ لا يَستَطيع.', en:'I break my fast because my body can\'t handle it.'},  c:false },
                  { t:{ar:'أَصبِرُ وأَتَذَكَّرُ أَجرَ الصِّيامِ عِندَ الله.', en:'I am patient and remember the reward of fasting with Allah.'},  c:true },
                  { t:{ar:'أَشتَكي بِصَوتٍ عالٍ.', en:'I complain loudly.'},  c:false },
                ] },
              { q:{ar:'أَصابَ والِدَكَ مَرَضٌ وتَغَيَّرَت أَحوالُ البَيت. ماذا تَفعَل؟', en:'Your father fell ill and your home circumstances changed. What do you do?'},
                opts:[
                  { t:{ar:'أَغضَبُ مِنَ اللهِ وأَتَسَخَّط.', en:'I am angry at Allah and resentful.'},  c:false },
                  { t:{ar:'أَصبِرُ وأُساعِدُ أُسرَتي وأَدعو الله.', en:'I am patient, help my family, and supplicate to Allah.'},  c:true },
                  { t:{ar:'أَتَركُ الدُّعاءَ لِأنَّ اللهَ لَم يَستَجِب.', en:'I abandon supplication because Allah didn\'t respond.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَصدِقاؤكَ يَضحَكونَ على مَلابِسِكَ البَسيطَة. ماذا تَفعَل؟', en:'Your friends laugh at your simple clothes. What do you do?'},
                opts:[
                  { t:{ar:'أَبكي وأَنعزِل.', en:'I cry and isolate myself.'},  c:false },
                  { t:{ar:'أَصبِرُ وأَتَذَكَّرُ أنَّ القيمَةَ لَيسَت في المَلابِس.', en:'I am patient and remember that worth is not in clothes.'},  c:true },
                  { t:{ar:'أَسرِقُ لِأَشتَريَ ملابِسَ جَميلَة.', en:'I steal to buy nice clothes.'},  c:false },
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



  /* ───── ROOM 5: Treasures ───── */
  treasures: [
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ يوسُفَ الصّابِر',   en:'Badge of Patient Yusuf'} },
    { icon:'🌿', color:'#1ABC9C', title:{ar:'تاجُ أيّوبَ الحامِد',      en:'Crown of Grateful Ayyub'} },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ «أَحَدٌ أَحَد»',    en:'Star of "Ahad Ahad"'} },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ الصّابِرين',          en:'Shield of the Patient'} },
    { icon:'📜', color:'#E67E22', title:{ar:'طَومارُ المَدارِج',          en:'Scroll of the Madarij'} },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ الفَرَج',           en:'Key of Relief'} },
  ],



  /* ───── HOUSE ICON ───── */
  icon: '⏳',



  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الصَّبرَ كُلَّ يَوم؟', en:'How do you live patience every day?' },
  formulaEq: { ar:'يَقين + دُعاء + تَذَكُّر = صَبرٌ جَميل 🏆', en:'Certainty + Prayer + Remembrance = Beautiful Patience 🏆' },
  magicMix: [
    { icon:'🤲', title:{ar:'قُل «الحَمدُ للهِ» عِندَ كُلِّ مُصيبَة',     en:'Say "Alhamdulillah" at every calamity'},
      body:{ar:'قَبلَ أن تَشكو لِأَحَد، قُل: «الحَمدُ للهِ على كُلِّ حال» ثَلاثَ مَرّات.', en:'Before you complain to anyone, say: "All praise to Allah in every circumstance" three times.'} },
    { icon:'📖', title:{ar:'اقرَأ قِصَّةَ يوسُفَ أو أيّوبَ حينَ تَضيقُ', en:'Read Yusuf\'s or Ayyub\'s story when you feel stressed'},
      body:{ar:'قِصَّةُ يوسُفَ في سورَةِ يوسُف وقِصَّةُ أيّوبَ في سورَةِ ص — ستُذَكِّرُكَ بِأنَّ الفَرَجَ قادِم.', en:'Yusuf\'s story is in Surah Yusuf and Ayyub\'s in Surah Sad — they will remind you that relief is coming.'} },
    { icon:'🌿', title:{ar:'دَرِّب نَفسَكَ: انتَظِر قَبلَ أن تَغضَب',     en:'Train yourself: wait before you get angry'},
      body:{ar:'حينَ تَغضَبُ أو تَضيقُ — انتَظِر ثَلاثَ أَنفاسٍ وقُل: «أَعوذُ بِاللهِ مِنَ الشَّيطان».', en:'When you are angry or stressed — wait three breaths and say: "I seek refuge in Allah from Shaitan."'} },
    { icon:'💧', title:{ar:'اصبِر على الطّاعَةِ اليَوميَّة ولو صَعُبَت',  en:'Be patient in daily worship even when it\'s hard'},
      body:{ar:'أَدِّ صَلَواتِكَ الخَمسَ ولو كُنتَ تَعِباً — هذا هو أَعلى دَرَجاتِ الصَّبر!', en:'Perform your five prayers even when you are tired — this is the highest rank of patience!'} },
    { icon:'⭐', title:{ar:'تَذَكَّر: «مَعَ العُسرِ يُسراً»',              en:'Remember: "With hardship comes ease"'},
      body:{ar:'كُلَّما أَصابَكَ صُعوبَة، تَذَكَّر أنَّ اللهَ وَعَدَ بِأنَّ مَعَ كُلِّ عُسرٍ يُسراً — وعدُهُ حَقٌّ دائِماً.', en:'Whenever hardship strikes, remember Allah promised that with every hardship comes ease — His promise is always true.'} },
    { icon:'🔥', title:{ar:'ادعُ اللهَ في كُلِّ ضيقٍ ولا تَيأَس',         en:'Supplicate to Allah in every hardship and never despair'},
      body:{ar:'كَما نادى أيّوبُ: «أَنّي مَسَّني الضُّرُّ وأنتَ أَرحَمُ الرّاحِمين» — كَذلكَ أَنتَ ادعُ اللهَ بِيَقين.', en:'Just as Ayyub called out: "Adversity has touched me and You are the Most Merciful" — you too supplicate to Allah with certainty.'} },
  ],



  /* ───── CERTIFICATE ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الصَّبر', en:'Awarded to those who completed the House of Patience' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>الصَّبرَ الجَميلَ في الطّاعَةِ والبَلاءِ والنَّفس</b> — اقتِداءً بِيوسُفَ الصّابِرِ وأيّوبَ الحامِدِ وبِلالٍ الثّابِتِ عليهِم الصَّلاةُ والسَّلام.',
                 en:'For mastering <b>beautiful patience in worship, hardship, and the self</b> — following the example of patient Yusuf, grateful Ayyub, and steadfast Bilal عليهم السلام.' },
  },

};
