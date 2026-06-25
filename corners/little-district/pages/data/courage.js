/* ═══════════════════════════════════════════════════════════════
   بيت الشجاعة  ·  House of Courage
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.courage = {

  tagline: {
    ar: 'الشجاعةُ ثَباتُ القَلبِ عند النَّوازِل',
    en: 'Courage is firmness of heart when trials descend',
  },

  /* ───── ROOM 1: Knowledge ───── */
  /*
     This room contains the foundational knowledge about courage:
     - Definitions (linguistic, terminology, simile)
     - Forms of courage (6 types)
     - Ranking of courage levels
     - Quranic verses and Hadiths
     - Benefits, obstacles, and means to acquire courage
  */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ الشُّجاعَةَ الحَقيقيَّةَ في القَلب؟', en:'Did you know true courage is in the heart?' },
      sub:   { ar:'«المُؤمِنُ القَوِيُّ خَيرٌ وأَحَبُّ إلى اللهِ مِن المُؤمِنِ الضَّعيف، وفي كُلٍّ خَير. احرِص على ما يَنفَعُكَ، واستَعِن بِاللهِ ولا تَعجَز» — قالَهُ النَّبيُّ ﷺ', en:'"The strong believer is better and more beloved to Allah than the weak believer — though in each there is good. Be keen on what benefits you, seek Allah\u2019s help, and don\u2019t give up" — the Prophet ﷺ said' },
    },
    definition: {
      linguistic: {
        ar: 'الشَّجاعةُ مِن الجُرأَة. وأَصلُها «قُوَّةُ القَلب» — لأنَّ الشُّجاعَ قَلبُهُ ثابِتٌ لا يَهتَزُّ عند الخَطَر!',
        en: 'From boldness. Its root means "strength of heart" — a brave heart stands firm in danger.',
      },
      terminology: {
        ar: 'هي <b>ثَباتُ القَلبِ عِندَ النَّوازِل</b> والإقدامُ على فِعلِ ما يُرضي اللهَ دونَ خَوفٍ مِن مَخلوق.',
        en: 'Firmness of heart when trials descend — advancing toward what pleases Allah without fear of creation.',
      },
      simile: {
        ar: 'الشَّجاعةُ كالجَبَل: لا تَهُزُّهُ الرِّياحُ ولا تُزَعزِعُهُ العَواصِف! وكالشَّمسِ الَّتي تُشرِقُ في الظَّلام، فَتُنيرُ الطَّريقَ لِلسّائِرين. الشُّجاعُ يَقِفُ ثابِتاً كالجَبَل، ويُضيءُ كالشَّمسِ لِمَن حَوله.',
        en: 'Courage is like a mountain: winds don\u2019t shake it, storms don\u2019t move it! And like the sun that shines in darkness, illuminating the path for travelers. The brave stand firm like mountains and shine like suns for those around them.',
      },
    },
    forms: [
      { icon:'⚔️', color:'#C0392B', title:{ar:'شَجاعةُ الجِهاد',  en:'Courage in jihad'},     body:{ar:'القِتالُ في سَبيلِ اللهِ دِفاعاً عن الحَقّ والمُستَضعَفين. هذه أَعلى دَرَجاتِ الشَّجاعَة — أن تُضَحّي بِنَفسِكَ لِوَجهِ الله.',           en:'Fighting for Allah\u2019s cause in defense of truth and the oppressed. This is the highest degree of courage — sacrificing yourself for Allah\u2019s sake.'} },
      { icon:'🗣️', color:'#D35400', title:{ar:'شَجاعةُ الصِّدع بالحَقّ',en:'Speaking truth'},    body:{ar:'قَولُ كَلِمةِ الحَقِّ عِندَ السُّلطان ولو كانَ جائِراً. «أَفضَلُ الجِهادِ كَلِمَةُ حَقٍّ عِندَ سُلطانٍ جائِر» كما قالَ النَّبيُّ ﷺ.',   en:'Speaking truth before power even if unjust. "The best jihad is a word of truth before an unjust ruler" as the Prophet ﷺ said.'} },
      { icon:'🛡️', color:'#27AE60', title:{ar:'شَجاعةُ الثَّبات',en:'Steadfastness'},   body:{ar:'الصَّبرُ وعَدَمُ الفِرارِ عِندَ الشِّدَّة والبَلاء. الثَّباتُ على الحَقِّ مَهما كانَت التَّضحيات والأَلَم.', en:'Patience and refusing to flee hardship and trials. Standing firm on truth whatever the sacrifices and pain.'} },
      { icon:'💪', color:'#2980B9', title:{ar:'شَجاعةُ البَدَن',   en:'Physical courage'},   body:{ar:'قُوَّةُ الجَسَدِ في خِدمَةِ الدِّين ونُصرَةِ المَظلومين. التَّدريبُ البَدَنيُّ لِيَكونَ المُؤمِنُ قَوِيّاً قادِراً على الدِّفاع.',   en:'Bodily strength serving religion and supporting the wronged. Physical training so the believer is strong and able to defend.'} },
      { icon:'❤️', color:'#8E44AD', title:{ar:'شَجاعةُ القَلب',   en:'Heart\u2019s courage'},     body:{ar:'التَّوَكُّلُ على اللهِ وعَدَمُ الخَوفِ مِن غَيره. القَلبُ المُطمَئِنُّ الَّذي يَثِقُ بِاللهِ في كُلِّ حال.',   en:'Trusting Allah alone — fearing none but Him. The peaceful heart that trusts Allah in all circumstances.'} },
      { icon:'🌟', color:'#F39C12', title:{ar:'شَجاعةُ النَّفس',   en:'Soul\u2019s courage'},     body:{ar:'مُحاسَبَةُ النَّفسِ ومُجاهَدَةُ الهَوى والشَّهَوات. الشَّجاعَةُ في مُخالَفَةِ ما تُحِبُّهُ النَّفسُ لِرِضا الله.',             en:'Holding yourself to account and resisting desire and lusts. Courage to oppose what the self loves for Allah\u2019s pleasure.'} },
    ],
    ranking: [
      { color:'#C0392B', title:{ar:'شَجاعةُ الإيمان',  en:'Courage of faith'},  body:{ar:'الثَّباتُ على الحَقِّ مَهما كانَ الثَّمَن — حتى لَو كانَ القَتل. هذهِ أَعلى مَراتِبِ الشَّجاعَة.',     en:'Standing firm on truth whatever the price — even if it means death. This is the highest rank of courage.'} },
      { color:'#27AE60', title:{ar:'شَجاعةُ الجِهاد', en:'Courage in jihad'}, body:{ar:'القِتالُ في سَبيلِ اللهِ والدِّفاعُ عن المُستَضعَفين والمَظلومين. بَذلُ النَّفسِ لِنُصرَةِ دِينِ الله.',         en:'Fighting for Allah and defending the oppressed and wronged. Sacrificing yourself to support Allah\u2019s religion.'} },
      { color:'#2980B9', title:{ar:'شَجاعةُ الأَمرِ بالمَعروف',en:'Courage to enjoin good'},  body:{ar:'قَولُ كَلِمةِ الحَقِّ دونَ خَوفٍ مِن أَحَد. الصِّدعُ بِالحَقِّ ولَو كَرِهَهُ النّاس.',    en:'Speaking truth without fear of anyone. Proclaiming truth even if people hate it.'} },
      { color:'#8E44AD', title:{ar:'شَجاعةُ مُخالَفَةِ الهَوى',  en:'Courage against desire'},      body:{ar:'مُقاوَمَةُ النَّفسِ والشَّهَواتِ لِوَجهِ الله. مُخالَفَةُ ما تُحِبُّهُ النَّفسُ لِرِضا الرَّحمن.', en:'Resisting self and desires for Allah\u2019s sake. Opposing what the self loves for the Merciful\u2019s pleasure.'} },
    ],
    verses: [
      { text: { ar:'﴿ فَقَاتِلْ فِي سَبِيلِ اللَّهِ لَا تُكَلَّفُ إِلَّا نَفْسَكَ ۚ وَحَرِّضِ الْمُؤْمِنِينَ ﴾',
                en:'"So fight in the way of Allah — you are not responsible except for yourself. And encourage the believers."' },
        ref: { ar:'[سورة النساء: ٨٤]', en:'[Surah An-Nisa: 84]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا وَاذْكُرُوا اللَّهَ كَثِيرًا ﴾',
                en:'"O you who believe — when you meet an enemy force, stand firm and remember Allah much."' },
        ref: { ar:'[سورة الأنفال: ٤٥]', en:'[Surah Al-Anfal: 45]' } },
      { text: { ar:'﴿ وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ ﴾',
                en:'"Do not lose heart or grieve — you are superior if you are true believers."' },
        ref: { ar:'[سورة آل عمران: ١٣٩]', en:'[Surah Aal-\u2018Imran: 139]' } },
      { text: { ar:'﴿ إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ ۖ وَإِن يَخْذُلْكُمْ فَمَن ذَا الَّذِي يَنصُرُكُم مِّن بَعْدِهِ ﴾',
                en:'"If Allah helps you — none can overcome you. But if He forsakes you — who is there that can help you after Him?"' },
        ref: { ar:'[سورة آل عمران: ١٦٠]', en:'[Surah Aal-\u2018Imran: 160]' } },
    ],
    hadiths: [
      { text: { ar:'«المُؤمِنُ القَوِيُّ خَيرٌ وأَحَبُّ إلى اللهِ مِنَ المُؤمِنِ الضَّعيف، وفي كُلٍّ خَير»',
                en:'"The strong believer is better and more beloved to Allah than the weak believer — though in each there is good."' },
        source: { ar:'[رواه مسلم — حديث ٢٦٦٤]', en:'[Sahih Muslim — 2664]' } },
      { text: { ar:'«أَفضَلُ الجِهادِ كَلِمَةُ حَقٍّ عِندَ سُلطانٍ جائِر»',
                en:'"The best jihad is a word of truth before an unjust ruler."' },
        source: { ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]' } },
    ],
    benefits: [
      { ar:'🦁 يَرفَعُ اللهُ بِها المُؤمِنَ في الدُّنيا والآخِرة',  en:'🦁 Allah elevates the believer in this world and the next' },
      { ar:'🛡️ حِمايَةُ الدِّينِ والعِرضِ والمُستَضعَفين', en:'🛡️ Protection of faith, honor, and the oppressed' },
      { ar:'⚔️ نَصرُ الحَقِّ وكَسرُ شَوكَةِ الباطِل',   en:'⚔️ Victory for truth and breaking falsehood\u2019s spine' },
      { ar:'💪 قُوَّةُ الشَّخصيَّةِ وثِقَةُ النَّفس',         en:'💪 Strong character and self-confidence' },
      { ar:'🌟 القُدوَةُ الحَسَنَةُ لِلأَجيالِ', en:'🌟 A fine example for generations' },
      { ar:'🔥 تَفريجُ الكُرُباتِ وإِزالَةُ الصُّعوبات', en:'🔥 Relief from hardships and removal of difficulties' },
      { ar:'🏆 نَيلُ الدَّرَجاتِ العُلى عند الله', en:'🏆 Attaining the highest ranks with Allah' },
    ],
    obstacles: [
      { ar:'الخَوفُ مِن الخَلق',     en:'Fear of creation' },
      { ar:'حُبُّ الدُّنيا والرَّاحة',     en:'Love of comfort and ease' },
      { ar:'ضَعفُ الإيمان',      en:'Weak faith' },
      { ar:'الجُبنُ والتَّردُّد',           en:'Cowardice and hesitation' },
      { ar:'الخَوفُ مِن الفَقر',           en:'Fear of poverty' },
      { ar:'حُبُّ المَدحِ والثَّناء',           en:'Love of praise and commendation' },
    ],
    acquireMeans: [
      { ar:'تَقوِيَةُ الإيمانِ بِذِكرِ اللهِ والعِبادَة', en:'Strengthen faith through remembrance and worship' },
      { ar:'تَذَكُّرُ الأُجورِ العَظيمَةِ لِلشُّجعان',                  en:'Remember the great rewards for the brave' },
      { ar:'الاقتِداءُ بِالنَّبيِّ ﷺ والصَّحابَةِ الكِرام', en:'Follow the Prophet ﷺ and the noble Companions' },
      { ar:'التَّدريبُ على الصَّبرِ ومُواجَهَةِ الصِّعاب', en:'Train in patience and facing hardship' },
      { ar:'قِراءَةُ سِيَرِ الشُّجعانِ والتَّأَمُّلُ فيها', en:'Read biographies of the brave and reflect on them' },
      { ar:'الدُّعاءُ بِأَن يَرزُقَكَ اللهُ الشَّجاعَة', en:'Pray that Allah grants you courage' },
    ],
  },

  /* ───── ROOM 2: Stories — paginated, interactive ─────
     Sources: IslamWeb (https://islamweb.net/ar/) for Prophet's stories, 
     Sahih al-Bukhari & Muslim for authentic narrations.
     
     EXACTLY 4 STORIES covering:
     1. Prophet Muhammad ﷺ during migration
     2. Ali رضي الله عنه at Khaybar
     3. Az-Zubayr رضي الله عنه at Babylon fort
     4. Young az-Zubayr رضي الله عنه defending the Prophet ﷺ
  */
  stories: [
    /* ──────────────────────────────────────────
       STORY 1 — النَّبيُّ ﷺ في لَيلَةِ الهِجرَة
       Migration Night: Prophet Muhammad's ﷺ courage
       Source: Sahih Bukhari & Muslim + islamweb.net
       ────────────────────────────────────────── */
    {
      icon:'🌙', scene:'night', character:'🧔',
      title: { ar:'لَيلَةُ الهِجرَة: شَجاعَةُ النَّبيِّ ﷺ', en:'Migration night: The Prophet\u2019s ﷺ courage' },
      pages: [
        { scene:'night', character:'🧔',
          text:{ ar:'في لَيلَةٍ مُظلِمة، حاصَرَ خَمسونَ رَجُلاً مِن قُرَيش بَيتَ النَّبيِّ ﷺ — جاؤوا بِسُيوفِهِم لِيَقتُلوه! كانوا يَنتَظِرونَ أن يَخرُجَ لِصَلاةِ الفَجر، ثُمَّ يَنقَضّونَ عليه.<br><br>لَكِنَّ اللهَ أَخبَرَ نَبيَّهُ بِمَكيدَتِهِم، فَقَرَّرَ الهِجرَةَ في تِلكَ اللَّيلَةِ بِالذَّات! <b>لم يَخَف ولم يَتَردَّد — بل نامَ بِهُدوءٍ وهو يَعلَمُ أنَّ القَتَلَةَ يُحيطونَ بِبَيتِه!</b>',
                 en:'On a dark night, fifty men from Quraysh surrounded the Prophet\u2019s ﷺ house — swords drawn to kill him! They waited for him to emerge for Fajr, then strike.<br><br>But Allah informed His Prophet ﷺ of their plot, so he decided to migrate that very night! <b>He didn\u2019t fear or hesitate — he slept peacefully knowing killers encircled his home!</b>' } },
        { scene:'madinah', character:'😇',
          text:{ ar:'وَضَعَ النَّبيُّ ﷺ عَلِيّاً رضي الله عنه في فِراشِهِ لِيَنامَ مَكانَه، وقالَ له بِثِقَة: <b>«نَم مَكاني — لن يَصِلَ إلَيكَ ضَرَرٌ بِإذنِ الله!»</b><br><br>ثُمَّ خَرَجَ مِن بَيتِهِ في مُنتَصَفِ اللَّيل، مُحاطاً بِخَمسينَ سَيف! كَيفَ خَرَج؟ مَشى بَينَهُم بِشَجاعَةٍ وثِقَةٍ بِالله، وحَثا التُّرابَ على وُجوهِهِم، فَأَعمى اللهُ أَبصارَهُم!',
                 en:'The Prophet ﷺ put \u2018Ali رضي الله عنه in his bed, saying confidently: <b>"Sleep in my place — no harm will reach you by Allah\u2019s will!"</b><br><br>Then he walked out mid-night, surrounded by fifty swords! How did he escape? He walked between them with courage and trust in Allah, throwing dust on their faces — and Allah blinded their sight!' } },
        { scene:'desert', character:'🧔',
          text:{ ar:'وَصَلَ النَّبيُّ ﷺ وأَبو بَكر رضي الله عنه إلى غارِ ثَور، واختَبَآ فيه ثَلاثَةَ أيّام. وَصَلَت قُرَيش إلى بابِ الغار — كانوا على بُعدِ خُطُوات!<br><br>قالَ أَبو بَكر رضي الله عنه خائِفاً: «يا رَسولَ الله، لَو نَظَرَ أَحَدُهُم تَحتَ قَدَمَيه لَرَآنا!»',
                 en:'The Prophet ﷺ and Abu Bakr رضي الله عنه reached the cave of Thawr and hid for three days. Quraysh reached the cave entrance — just steps away!<br><br>Abu Bakr رضي الله عنه said fearfully: "O Messenger of Allah, if one of them looked down, he\u2019d see us!"' },
          choice:{ q:{ar:'كَيفَ رَدَّ النَّبيُّ ﷺ على أبي بَكر؟',en:'How did the Prophet ﷺ respond?'},
            opts:[
              { t:{ar:'قالَ: نَعَم، نَحنُ في خَطَر!',en:'He said: Yes, we\u2019re in danger!'},c:false,exp:{ar:'لا — كانَ قَلبُ النَّبيِّ ﷺ مُطمَئِنّاً بِاللهِ دائِماً!',en:'No — the Prophet\u2019s ﷺ heart was always at peace with Allah!'} },
              { t:{ar:'قالَ: لا تَحزَن، إنَّ اللهَ مَعَنا.',en:'He said: Don\u2019t grieve — Allah is with us.'},c:true,exp:{ar:'نَعَم! هذهِ هي الشَّجاعَةُ الحَقيقيَّة — الثِّقَةُ بِاللهِ تَعالى!',en:'Yes! This is true courage — trust in Allah!'} },
              { t:{ar:'هَرَبا مِن مَدخَلٍ آخَر.',en:'They fled through another entrance.'},c:false,exp:{ar:'لا مَدخَلَ آخَر — لَكِنَّ اللهَ حَماهُما!',en:'No other entrance — but Allah protected them!'} },
            ] } },
        { scene:'garden', character:'🌟',
          text:{ ar:'قالَ النَّبيُّ ﷺ بِصَوتٍ هادِئ مُطمَئِنّ: <b>«لا تَحزَن، إنَّ اللهَ مَعَنا!»</b> ﴿ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ﴾<br><br>ونَسَجَت العَنكَبوتُ بَيتَها على بابِ الغار، فَقالَت قُرَيش: «لَو دَخَلَ أَحَدٌ هُنا لَتَهَدَّمَ نَسيجُ العَنكَبوت!» وانصَرَفوا!<br><br>جُندٌ صَغيرٌ — عَنكَبوتٌ وحَمامَةٌ — حَمَوا خَيرَ البَشَر بِأَمرِ الله!',
                 en:'The Prophet ﷺ said calmly, reassuringly: <b>"Don\u2019t grieve — Allah is with us!"</b> ﴿ "When he said to his companion: Do not grieve — indeed Allah is with us" ﴾<br><br>A spider wove her web over the cave entrance. Quraysh said: "If anyone entered here, the web would be torn!" They left!<br><br>A tiny army — a spider and a dove — protected the best of mankind by Allah\u2019s command!' } },
        { scene:'madinah', character:'🎯',
          text:{ ar:'وَصَلَ النَّبيُّ ﷺ وصاحِبُهُ إلى المَدينَةِ سالِمَين، وانتَصَرَ الإسلامُ بِفَضلِ اللهِ ثُمَّ بِشَجاعَةِ النَّبيِّ ﷺ وثِقَتِهِ التَّامَّةِ بِرَبِّه.<br><br><b>الشَّجاعَةُ الحَقيقيَّةُ ليسَت غِيابَ الخَوف — بل هي التَّوَكُّلُ على اللهِ والثَّباتُ على الحَقِّ مَهما كانَ الخَطَر!</b>',
                 en:'The Prophet ﷺ and his companion reached Madinah safely, and Islam was victorious by Allah\u2019s grace, then by the Prophet\u2019s ﷺ courage and complete trust in his Lord.<br><br><b>True courage isn\u2019t absence of fear — it\u2019s trusting Allah and standing firm on truth no matter the danger!</b>' } },
      ],
      quiz: [
        { q:{ar:'كَم رَجُلاً حاصَروا بَيتَ النَّبيِّ ﷺ؟', en:'How many men surrounded the Prophet\u2019s ﷺ house?'},
          opts:[
            { t:{ar:'عَشَرة', en:'Ten'}, c:false },
            { t:{ar:'خَمسون', en:'Fifty'}, c:true },
            { t:{ar:'مِئَة', en:'A hundred'}, c:false },
          ] },
        { q:{ar:'مَن نامَ في فِراشِ النَّبيِّ ﷺ؟', en:'Who slept in the Prophet\u2019s ﷺ bed?'},
          opts:[
            { t:{ar:'أَبو بَكر رضي الله عنه', en:'Abu Bakr رضي الله عنه'}, c:false },
            { t:{ar:'عَلِيّ رضي الله عنه', en:'\u2018Ali رضي الله عنه'}, c:true },
            { t:{ar:'عُمَر رضي الله عنه', en:'\u2018Umar رضي الله عنه'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ النَّبيُّ ﷺ لأبي بَكر في الغار؟', en:'What did the Prophet ﷺ say to Abu Bakr in the cave?'},
          opts:[
            { t:{ar:'لا تَحزَن، إنَّ اللهَ مَعَنا', en:'Don\u2019t grieve — Allah is with us'}, c:true },
            { t:{ar:'اهرُب بِسُرعَة', en:'Flee quickly'}, c:false },
            { t:{ar:'دَعنا نُقاتِل', en:'Let\u2019s fight'}, c:false },
          ] },
      ],
      moral:      { ar:'الشَّجاعَةُ الحَقيقيَّةُ هي التَّوَكُّلُ على اللهِ والثَّباتُ على الحَقِّ مَهما كانَ الخَطَر.', en:'True courage is trusting Allah and standing firm on truth no matter the danger.' },
      badge:      { icon:'🌙', title:{ar:'وِسامُ الثَّباتِ في الشِّدَّة', en:'Medal of Steadfastness in Hardship'} },
      reflect:    [ 
        {ar:'كَيفَ يُمكِنُني أن أَثِقَ بِاللهِ عِندَما أَواجِهُ صُعوبَةً؟', en:'How can I trust Allah when I face difficulty?'},
        {ar:'ما هي المَخاوِفُ الَّتي تَمنَعُني مِن فِعلِ الحَقّ؟', en:'What fears prevent me from doing what\u2019s right?'}
      ],
      didYouKnow: [ 
        {ar:'رَواهُ البُخاري ومُسلِم — قِصَّةُ الهِجرَة في الصَّحيحَين. المَصدَر: islamweb.net/ar/article/213667', en:'Narrated by Bukhari & Muslim — the migration story in the Sahihayn. Source: islamweb.net'},
        {ar:'﴿ إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ ﴾ [التوبة: ٤٠]', en:'"If you do not aid him — Allah has already aided him when the disbelievers drove him out, second of two, when they were in the cave" [At-Tawbah: 40]'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 2 — عَلِيٌّ وفَتحُ خَيبَر
       Conquest of Khaybar: Ali's رضي الله عنه courage
       Source: Sahih Muslim + dorar.net + islamway.net
       ────────────────────────────────────────── */
    {
      icon:'⚔️', scene:'desert', character:'🦁',
      title: { ar:'فَتحُ خَيبَر: شَجاعَةُ عَلِيّ رضي الله عنه', en:'Conquest of Khaybar: \u2018Ali\u2019s رضي الله عنه courage' },
      pages: [
        { scene:'desert', character:'🦁',
          text:{ ar:'كانَت خَيبَرُ مَدينَةً حَصينَة، فيها أَقوى حُصونِ اليَهودِ في الجَزيرَةِ العَرَبيَّة. حاصَرَها المُسلِمونَ أيّاماً طَويلة، ولَم يَستَطيعوا فَتحَها.<br><br>قالَ النَّبيُّ ﷺ: <b>«لَأُعطِيَنَّ الرَّايَةَ غَداً رَجُلاً يُحِبُّ اللهَ ورَسولَهُ، ويُحِبُّهُ اللهُ ورَسولُه، يَفتَحُ اللهُ على يَدَيه!»</b>',
                 en:'Khaybar was a fortified city with the strongest Jewish forts in Arabia. Muslims besieged it for days, unable to conquer it.<br><br>The Prophet ﷺ said: <b>"Tomorrow I will give the banner to a man who loves Allah and His Messenger, and Allah and His Messenger love him — Allah will grant victory through his hands!"</b>' } },
        { scene:'madinah', character:'🌙',
          text:{ ar:'باتَ الصَّحابَةُ يَتَساءَلون: مَن هذا الرَّجُل؟ كُلُّهُم يَتَمَنَّى أن يَكونَ هو! وفي الصَّباح دَعا النَّبيُّ ﷺ عَلِيّاً رضي الله عنه — وكانَ أَرمَد العَينَين مِن الوَجَع.<br><br>تَفَلَ النَّبيُّ ﷺ في عَينَيه، <b>فَبَرَأَ فَوراً كَأَنَّهُ لم يَكُن بِهِ وَجَع!</b> وأَعطاهُ الرَّايَة.',
                 en:'The Companions spent the night wondering: Who is this man? Each hoped it would be him! In the morning the Prophet ﷺ called \u2018Ali رضي الله عنه — whose eyes were inflamed and painful.<br><br>The Prophet ﷺ put saliva on his eyes, <b>and he was instantly healed as if there had been no pain!</b> And he gave him the banner.' } },
        { scene:'desert', character:'⚔️',
          text:{ ar:'خَرَجَ مِن حُصونِ خَيبَر بَطَلُهُم المَشهور: مَرحَب — كانَ فارِساً ضَخماً شَديدَ البَأس، يَهابُهُ الجَميع!<br><br>صاحَ مَرحَب: <b>«قَد عَلِمَت خَيبَرُ أَنّي مَرحَب! شاكي السِّلاحِ بَطَلٌ مُجَرَّب!»</b><br><br>فَخَرَجَ له عَلِيٌّ رضي الله عنه وهو يَقول: <b>«أَنا الَّذي سَمَّتني أُمّي حَيدَرَه! كَلَيثِ غاباتٍ كَريهِ المَنظَرَه!»</b>',
                 en:'From Khaybar\u2019s forts emerged their famous champion: Marhab — a giant warrior of fearsome might whom all feared!<br><br>Marhab roared: <b>"Khaybar knows I am Marhab! Armed warrior, seasoned in battle!"</b><br><br>\u2018Ali رضي الله عنه stepped forward saying: <b>"I am he whom my mother named Haydarah! Like a forest lion — fierce to behold!"</b>' },
          choice:{ q:{ar:'ماذا فَعَلَ عَلِيٌّ رضي الله عنه في المُبارَزة؟',en:'What did \u2018Ali رضي الله عنه do in the duel?'},
            opts:[
              { t:{ar:'هَرَبَ مِن مَرحَب.',en:'He fled from Marhab.'},c:false,exp:{ar:'لا — عَلِيٌّ لا يَفِرُّ مِن عَدُوِّ الله!',en:'No — \u2018Ali never flees Allah\u2019s enemy!'} },
              { t:{ar:'قَتَلَ مَرحَباً بِضَربَةٍ واحِدة.',en:'He killed Marhab with one strike.'},c:true,exp:{ar:'نَعَم! بِقُوَّةِ الإيمانِ والشَّجاعَة!',en:'Yes! With the power of faith and courage!'} },
              { t:{ar:'طَلَبَ المُساعَدَة.',en:'He asked for help.'},c:false,exp:{ar:'لا — واجَهَهُ بِشَجاعَة!',en:'No — he faced him with courage!'} },
            ] } },
        { scene:'desert', character:'🎯',
          text:{ ar:'تَبارَزا، فَضَرَبَ عَلِيٌّ رضي الله عنه ضَربَةً قَوِيَّةً شَقَّت دِرعَ مَرحَب ورَأسَه، <b>فَسَقَطَ البَطَلُ الجَبّارُ قَتيلاً!</b><br><br>وكَبَّرَ المُسلِمونَ فَرَحاً، ودَبَّ الرُّعبُ في قُلوبِ اليَهود. وانكَسَرَ بابُ الحِصن، فَحَمَلَهُ عَلِيٌّ رضي الله عنه بِيَدِهِ وجَعَلَهُ جِسراً لِلمُسلِمين!',
                 en:'They dueled, and \u2018Ali رضي الله عنه struck a mighty blow that split Marhab\u2019s shield and head — <b>the mighty champion fell dead!</b><br><br>Muslims cried "Allahu Akbar" in joy, and terror struck the Jews\u2019 hearts. The fortress gate broke, so \u2018Ali رضي الله عنه carried it with his hand and made it a bridge for the Muslims!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'فُتِحَت خَيبَرُ على يَدَي عَلِيّ رضي الله عنه، وتَحَقَّقَت بُشرى النَّبيِّ ﷺ. وقالَ الصَّحابَةُ: <b>جَرَّبوا بَعدَ ذلك حَملَ البابِ فَلَم يَستَطِعهُ أَربَعونَ رَجُلاً!</b><br><br>الشَّجاعَةُ ليسَت قُوَّةَ العَضَلاتِ فَقَط — بل قُوَّةُ القَلبِ والإيمانِ بِالله!',
                 en:'Khaybar was conquered through \u2018Ali\u2019s رضي الله عنه hands, and the Prophet\u2019s ﷺ glad tidings came true. The Companions said: <b>They tried lifting the gate afterward — forty men couldn\u2019t lift it!</b><br><br>Courage isn\u2019t just muscle strength — it\u2019s heart strength and faith in Allah!' } },
      ],
      quiz: [
        { q:{ar:'لِمَن أَعطى النَّبيُّ ﷺ الرَّايَةَ في خَيبَر؟', en:'To whom did the Prophet ﷺ give the banner at Khaybar?'},
          opts:[
            { t:{ar:'عُمَر رضي الله عنه', en:'\u2018Umar رضي الله عنه'}, c:false },
            { t:{ar:'عَلِيّ رضي الله عنه', en:'\u2018Ali رضي الله عنه'}, c:true },
            { t:{ar:'خالِد رضي الله عنه', en:'Khalid رضي الله عنه'}, c:false },
          ] },
        { q:{ar:'مَن كانَ بَطَلُ اليَهودِ في خَيبَر؟', en:'Who was the Jewish champion at Khaybar?'},
          opts:[
            { t:{ar:'مَرحَب', en:'Marhab'}, c:true },
            { t:{ar:'عَمرو بن عَبد وُدّ', en:'\u2018Amr ibn \u2018Abd Wudd'}, c:false },
            { t:{ar:'أُبَيّ بن خَلَف', en:'Ubayy ibn Khalaf'}, c:false },
          ] },
        { q:{ar:'ماذا فَعَلَ عَلِيٌّ رضي الله عنه بِبابِ الحِصن؟', en:'What did \u2018Ali رضي الله عنه do with the fortress gate?'},
          opts:[
            { t:{ar:'حَرَقَهُ', en:'Burned it'}, c:false },
            { t:{ar:'حَمَلَهُ وجَعَلَهُ جِسراً', en:'Carried it and made it a bridge'}, c:true },
            { t:{ar:'تَرَكَهُ مُغلَقاً', en:'Left it closed'}, c:false },
          ] },
      ],
      moral:      { ar:'الشَّجاعَةُ الحَقيقيَّةُ تَأتي مِن قُوَّةِ القَلبِ والإيمانِ بِالله، لا مِن قُوَّةِ الجَسَدِ فَقَط.', en:'True courage comes from heart strength and faith in Allah, not just bodily strength.' },
      badge:      { icon:'⚔️', title:{ar:'وِسامُ البَطَلِ الشُّجاع', en:'Medal of the Brave Champion'} },
      reflect:    [ 
        {ar:'مَتى أَحتاجُ إلى الشَّجاعَةِ في حَياتي اليَوميَّة؟', en:'When do I need courage in my daily life?'},
        {ar:'كَيفَ أُقَوّي قَلبي بِالإيمان؟', en:'How can I strengthen my heart with faith?'}
      ],
      didYouKnow: [ 
        {ar:'رَواهُ مُسلِم في صَحيحِه — حَديثُ فَتحِ خَيبَر. المَصدَر: dorar.net وislamway.net/article/81321', en:'Narrated by Muslim in his Sahih — hadith of Khaybar\'s conquest. Source: dorar.net & islamway.net'},
        {ar:'قالَ النَّبيُّ ﷺ: «لَأُعطِيَنَّ الرَّايَةَ غَداً رَجُلاً يُحِبُّ اللهَ ورَسولَهُ ويُحِبُّهُ اللهُ ورَسولُه» — صَحيحُ مُسلِم', en:'The Prophet ﷺ said: "Tomorrow I will give the banner to a man who loves Allah and His Messenger, and Allah and His Messenger love him" — Sahih Muslim'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 3 — الزُّبَير وفَتحُ حِصنِ بابِليون
       Az-Zubayr: Courage that conquers forts
       Source: kalemtayeb.com (historical biographies)
       ────────────────────────────────────────── */
    {
      icon:'🦅', scene:'desert', character:'🗡️',
      title: { ar:'الزُّبَير: شَجاعَةٌ تَفتَحُ الحُصون', en:'Az-Zubayr: Courage that conquers forts' },
      pages: [
        { scene:'desert', character:'🗡️',
          text:{ ar:'الزُّبَيرُ بنُ العَوّام رضي الله عنه — حَوارِيُّ رَسولِ اللهِ ﷺ وابنُ عَمَّتِه. كانَ مِن أَشجَعِ الصَّحابَة، حَضَرَ كُلَّ الغَزَواتِ مع النَّبيِّ ﷺ.<br><br>وحينَ فُتِحَت مِصر، حاصَرَ المُسلِمونَ حِصنَ <b>بابِليون</b> — أَقوى حُصونِ الرّومِ في مِصر. طالَ الحِصارُ سَبعَةَ أَشهُر!',
                 en:'Az-Zubayr ibn al-\u2018Awwam رضي الله عنه — the Prophet\u2019s ﷺ disciple and cousin. He was among the bravest Companions, present at every battle with the Prophet ﷺ.<br><br>When Egypt was conquered, Muslims besieged the fort of <b>Babylon</b> — the Romans\u2019 strongest fort in Egypt. The siege lasted seven months!' } },
        { scene:'night', character:'🤔',
          text:{ ar:'قالَ بَعضُ المُسلِمين لِلزُّبَير: «الطّاعونُ في المَدينَة — ارجِعْ يا زُبَير!»<br><br>فَقالَ الزُّبَيرُ بِشَجاعَة: <b>«إنَّما جِئنا لِلطَّعنِ والطّاعون! لا أَرجِعُ حتّى يُفتَحَ الحِصن!»</b><br><br>وأَبطَأَ الفَتح، فَوَقَفَ الزُّبَيرُ وقالَ بِصَوتٍ عالٍ: «إنّي أَهَبُ نَفسي للهِ — أَرجو أن يَفتَحَ اللهُ بِذلك على المُسلِمين!»',
                 en:'Some Muslims said to az-Zubayr: "There\u2019s plague in the city — go back, Zubayr!"<br><br>Az-Zubayr said courageously: <b>"We came for stabbing and plague! I won\u2019t return until the fort opens!"</b><br><br>Victory delayed, so az-Zubayr stood and declared loudly: "I give myself to Allah — hoping He opens victory for Muslims through this!"' } },
        { scene:'desert', character:'🦅',
          text:{ ar:'وَضَعَ الزُّبَيرُ سُلَّماً طَويلاً على جِدارِ الحِصنِ العالي، ثُمَّ بَدَأَ التَّسَلُّق وحدَه — بِسَيفِهِ في يَدِه!<br><br>كانَ الحِصنُ عالِياً جِدّاً، والجُنودُ الرّومُ يَرمونَهُ بِالسِّهامِ والحِجارَة، لَكِنَّهُ لم يَتَوَقَّف!',
                 en:'Az-Zubayr placed a long ladder on the fort\u2019s high wall, then began climbing alone — sword in hand!<br><br>The fort was very high, Roman soldiers showered him with arrows and stones, but he didn\u2019t stop!' },
          choice:{ q:{ar:'ماذا فَعَلَ الزُّبَيرُ عِندَما وَصَلَ إلى قِمَّةِ الحِصن؟',en:'What did az-Zubayr do when he reached the fort\u2019s top?'},
            opts:[
              { t:{ar:'نَزَلَ مُسرِعاً.',en:'He climbed down quickly.'},c:false,exp:{ar:'لا — هو جاءَ لِيَفتَحَ الحِصن!',en:'No — he came to open the fort!'} },
              { t:{ar:'كَبَّرَ بِصَوتٍ عالٍ.',en:'He cried "Allahu Akbar" loudly.'},c:true,exp:{ar:'نَعَم! وسَمِعَهُ المُسلِمونَ فَكَبَّروا مَعَه!',en:'Yes! Muslims heard him and cried "Allahu Akbar" with him!'} },
              { t:{ar:'اختَبَأَ في الحِصن.',en:'He hid inside the fort.'},c:false,exp:{ar:'لا — الزُّبَيرُ لا يَختَبِئ!',en:'No — az-Zubayr doesn\u2019t hide!'} },
            ] } },
        { scene:'madinah', character:'🎯',
          text:{ ar:'وَصَلَ الزُّبَيرُ إلى قِمَّةِ الحِصنِ وهو يُكَبِّر: <b>«اللهُ أَكبَر! اللهُ أَكبَر!»</b><br><br>سَمِعَهُ المُسلِمونَ فَكَبَّروا جَميعاً، وظَنَّ الرّومُ أنَّ المُسلِمينَ دَخَلوا الحِصنَ مِن كُلِّ جانِب، فَهَرَبوا مَذعورين!<br><br>وفُتِحَ حِصنُ بابِليون بِشَجاعَةِ رَجُلٍ واحِد — الزُّبَيرُ بنُ العَوّام رضي الله عنه!',
                 en:'Az-Zubayr reached the fort\u2019s top crying: <b>"Allahu Akbar! Allahu Akbar!"</b><br><br>Muslims heard and all cried "Allahu Akbar", and the Romans thought Muslims had entered from every side, so they fled terrified!<br><br>The fort of Babylon opened through the courage of one man — az-Zubayr ibn al-\u2018Awwam رضي الله عنه!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'قالَ عَمرو بنُ العاص رضي الله عنه — قائِدُ جَيشِ المُسلِمين —: <b>«لَولا شَجاعَةُ الزُّبَير لَما فُتِحَت مِصر!»</b><br><br>الشَّجاعَةُ ليسَت التَّهَوُّرَ — بل هي التَّضحيَةُ بِالنَّفسِ في سَبيلِ اللهِ مع حُسنِ التَّوَكُّل!',
                 en:'\u2018Amr ibn al-\u2018As رضي الله عنه — commander of the Muslim army — said: <b>"Without az-Zubayr\u2019s courage, Egypt wouldn\u2019t have been conquered!"</b><br><br>Courage isn\u2019t recklessness — it\u2019s sacrificing yourself for Allah\u2019s cause with good reliance!' } },
      ],
      quiz: [
        { q:{ar:'كَم شَهراً حاصَرَ المُسلِمونَ حِصنَ بابِليون؟', en:'How many months did Muslims besiege Babylon fort?'},
          opts:[
            { t:{ar:'ثَلاثَة', en:'Three'}, c:false },
            { t:{ar:'سَبعَة', en:'Seven'}, c:true },
            { t:{ar:'عَشَرة', en:'Ten'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ الزُّبَيرُ عِندَما طالَ الحِصار؟', en:'What did az-Zubayr say when the siege prolonged?'},
          opts:[
            { t:{ar:'أَرجِعُ إلى المَدينَة', en:'I\u2019m returning to Madinah'}, c:false },
            { t:{ar:'أَهَبُ نَفسي للهِ', en:'I give myself to Allah'}, c:true },
            { t:{ar:'نَنتَظِرُ المَدَد', en:'We wait for reinforcements'}, c:false },
          ] },
        { q:{ar:'لِماذا هَرَبَ الرّومُ مِن الحِصن؟', en:'Why did the Romans flee the fort?'},
          opts:[
            { t:{ar:'رَأَوا جَيشاً كَبيراً', en:'They saw a large army'}, c:false },
            { t:{ar:'سَمِعوا تَكبيرَ المُسلِمينَ وظَنّوهُم دَخَلوا', en:'They heard Muslims\u2019 "Allahu Akbar" and thought they entered'}, c:true },
            { t:{ar:'نَفِدَ طَعامُهُم', en:'Their food ran out'}, c:false },
          ] },
      ],
      moral:      { ar:'الشَّجاعَةُ الحَقيقيَّةُ هي التَّضحيَةُ بِالنَّفسِ في سَبيلِ اللهِ مع حُسنِ التَّوَكُّل عليه.', en:'True courage is sacrificing yourself for Allah\u2019s cause with good reliance on Him.' },
      badge:      { icon:'🦅', title:{ar:'وِسامُ المُضَحّي الشُّجاع', en:'Medal of the Brave Sacrificer'} },
      reflect:    [ 
        {ar:'هل أَستَطيعُ أن أُقَدِّمَ شَيئاً صَعباً مِن أَجلِ اللهِ؟', en:'Can I offer something difficult for Allah\u2019s sake?'},
        {ar:'ما الفَرقُ بَينَ الشَّجاعَةِ والتَّهَوُّر؟', en:'What\u2019s the difference between courage and recklessness?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ فَتحِ حِصنِ بابِليون مَشهورَةٌ في كُتُبِ السِّيَر. المَصدَر: kalemtayeb.com/safahat/item/36531', en:'The story of Babylon fort\'s conquest is famous in biography books. Source: kalemtayeb.com'},
        {ar:'قالَ عَمرو بنُ العاص: «لَولا شَجاعَةُ الزُّبَير لَما فُتِحَت مِصر!» — السِّيَرُ والتَّراجِم', en:'\u2018Amr ibn al-\u2018As said: "Without az-Zubayr\u2019s courage, Egypt wouldn\u2019t have been conquered!" — Biographies'}
      ],
    },

    /* ──────────────────────────────────────────
       STORY 4 — الزُّبَير الغُلام الشُّجاع
       Az-Zubayr: The brave boy at age 12
       Source: Wikipedia (verified historical account)
       ────────────────────────────────────────── */
    {
      icon:'🗡️', scene:'madinah', character:'👦',
      title: { ar:'الزُّبَير: الغُلامُ الشُّجاع', en:'Az-Zubayr: The brave boy' },
      pages: [
        { scene:'madinah', character:'👦',
          text:{ ar:'الزُّبَيرُ بنُ العَوّام رضي الله عنه — كانَ صَبِيّاً صَغيراً لَم يَتَجاوَزِ اثنَتَي عَشرَةَ سَنَة. أَسلَمَ وهو في هذا السِّنِّ الصَّغير، وكانَ قَلبُهُ مُمتَلِئاً بِحُبِّ اللهِ ورَسولِه ﷺ.<br><br>وذاتَ يَومٍ انتَشَرَت شائِعَةٌ في مَكَّة: <b>«النَّبيُّ ﷺ أُخِذَ بِأَعلى مَكَّة!»</b>',
                 en:'Az-Zubayr ibn al-\u2018Awwam رضي الله عنه — was a young boy not yet twelve. He embraced Islam at this tender age, his heart filled with love for Allah and His Messenger ﷺ.<br><br>One day a rumor spread in Makkah: <b>"The Prophet ﷺ has been captured at the heights of Makkah!"</b>' } },
        { scene:'madinah', character:'😰',
          text:{ ar:'سَمِعَ الزُّبَيرُ الخَبَر، فَاحمَرَّ وَجهُهُ غَضَباً! لم يَسألْ أَحَداً، ولم يَنتَظِر — خَرَجَ مُسرِعاً مِن بَيتِه <b>وبِيَدِهِ سَيفٌ كَبير!</b><br><br>كانَ الزُّبَيرُ طِفلاً صَغيراً، والسَّيفُ أَكبَرُ مِنه! لَكِنَّ قَلبَهُ كانَ أَكبَرَ مِن كُلِّ شَيء!',
                 en:'Az-Zubayr heard the news — his face reddened with anger! He didn\u2019t ask anyone, didn\u2019t wait — he rushed from his house <b>with a large sword in his hand!</b><br><br>Az-Zubayr was a small child, the sword bigger than him! But his heart was bigger than everything!' } },
        { scene:'desert', character:'🗡️',
          text:{ ar:'مَشى الزُّبَيرُ في شَوارِعِ مَكَّة وهو يَحمِلُ السَّيف، والنّاسُ يَنظُرونَ إليه في دَهشَة!<br><br>قالَ بَعضُهُم: «انظُروا! غُلامٌ صَغيرٌ بِيَدِهِ سَيف!» وقالَ آخَرون: «إلى أَينَ يا زُبَير؟ ماذا تُريد؟»<br><br>لَكِنَّ الزُّبَيرَ لم يَتَوَقَّف — كانَ يَبحَثُ عن النَّبيِّ ﷺ!',
                 en:'Az-Zubayr walked through Makkah\u2019s streets carrying the sword, people staring in amazement!<br><br>Some said: "Look! A small boy with a sword!" Others said: "Where to, Zubayr? What do you want?"<br><br>But az-Zubayr didn\u2019t stop — he was searching for the Prophet ﷺ!' },
          choice:{ q:{ar:'ماذا كانَ الزُّبَيرُ يُريدُ أن يَفعَلَ بِالسَّيف؟',en:'What did az-Zubayr want to do with the sword?'},
            opts:[
              { t:{ar:'يُريدُ أن يَلعَبَ بِه.',en:'He wanted to play with it.'},c:false,exp:{ar:'لا — الزُّبَيرُ جادٌّ في الدِّفاعِ عن النَّبيّ!',en:'No — az-Zubayr was serious about defending the Prophet!'} },
              { t:{ar:'يُريدُ أن يُدافِعَ عن النَّبيِّ ﷺ.',en:'He wanted to defend the Prophet ﷺ.'},c:true,exp:{ar:'نَعَم! كانَ مُستَعِدّاً لِلقِتالِ رَغمَ صِغَرِ سِنِّه!',en:'Yes! He was ready to fight despite his young age!'} },
              { t:{ar:'يُريدُ أن يُخيفَ النّاس.',en:'He wanted to scare people.'},c:false,exp:{ar:'لا — كانَ هَدَفُهُ نُصرَةَ النَّبيّ!',en:'No — his goal was supporting the Prophet!'} },
            ] } },
        { scene:'madinah', character:'🌙',
          text:{ ar:'وَصَلَ الزُّبَيرُ إلى النَّبيِّ ﷺ — فَوَجَدَهُ سالِماً لم يُصِبهُ أَذى! كانَت الشّائِعَةُ كاذِبَة.<br><br>نَظَرَ النَّبيُّ ﷺ إلى الزُّبَيرِ الصَّغيرِ وهو يَحمِلُ السَّيف، <b>فَابتَسَمَ وقالَ له بِحَنان: «ما لَك يا زُبَير؟»</b><br><br>قالَ الزُّبَير: «سَمِعتُ أنَّكَ أُخِذت، فَجِئتُ أُقاتِلُ مَن أَخَذَك!»',
                 en:'Az-Zubayr reached the Prophet ﷺ — he found him safe, unharmed! The rumor was false.<br><br>The Prophet ﷺ looked at little az-Zubayr holding the sword, <b>smiled and said kindly: "What\u2019s the matter, Zubayr?"</b><br><br>Az-Zubayr said: "I heard you were captured, so I came to fight whoever took you!"' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'دَعا له النَّبيُّ ﷺ بِالخَير، ومَسَحَ على رَأسِه، ودَعا لَهُ ولِأَبيه بِالبَرَكَة.<br><br>كَبِرَ الزُّبَيرُ ليَكونَ مِن أَشجَعِ الصَّحابَة، وأَحَدَ العَشَرَةِ المُبَشَّرينَ بِالجَنَّة!<br><br><b>الشَّجاعَةُ لا تَحتاجُ إلى سِنٍّ كَبير — بل تَحتاجُ إلى قَلبٍ كَبير!</b>',
                 en:'The Prophet ﷺ prayed for his good, patted his head, and prayed for blessings on him and his father.<br><br>Az-Zubayr grew to be among the bravest Companions, and one of the ten promised Paradise!<br><br><b>Courage doesn\u2019t need old age — it needs a great heart!</b>' } },
      ],
      quiz: [
        { q:{ar:'كَم كانَ عُمرُ الزُّبَيرِ حينَ سَمِعَ الشّائِعَة؟', en:'How old was az-Zubayr when he heard the rumor?'},
          opts:[
            { t:{ar:'ثَماني سَنَوات', en:'Eight years'}, c:false },
            { t:{ar:'اثنَتا عَشرَةَ سَنَة', en:'Twelve years'}, c:true },
            { t:{ar:'عِشرونَ سَنَة', en:'Twenty years'}, c:false },
          ] },
        { q:{ar:'ماذا حَمَلَ الزُّبَيرُ في يَدِه؟', en:'What did az-Zubayr carry in his hand?'},
          opts:[
            { t:{ar:'عَصا', en:'A staff'}, c:false },
            { t:{ar:'سَيفاً', en:'A sword'}, c:true },
            { t:{ar:'رُمحاً', en:'A spear'}, c:false },
          ] },
        { q:{ar:'لِماذا خَرَجَ الزُّبَيرُ بِالسَّيف؟', en:'Why did az-Zubayr go out with the sword?'},
          opts:[
            { t:{ar:'لِلَّعِب', en:'To play'}, c:false },
            { t:{ar:'لِلدِّفاعِ عن النَّبيِّ ﷺ', en:'To defend the Prophet ﷺ'}, c:true },
            { t:{ar:'لِبَيعِه', en:'To sell it'}, c:false },
          ] },
      ],
      moral:      { ar:'الشَّجاعَةُ لا تَحتاجُ إلى سِنٍّ كَبير — بل تَحتاجُ إلى قَلبٍ كَبيرٍ مُمتَلِئٍ بِالإيمان.', en:'Courage doesn\u2019t need old age — it needs a great heart filled with faith.' },
      badge:      { icon:'🗡️', title:{ar:'وِسامُ القَلبِ الكَبير', en:'Medal of the Great Heart'} },
      reflect:    [ 
        {ar:'هل يُمكِنُ لِلصَّغيرِ أن يَكونَ شُجاعاً؟', en:'Can the young be brave?'},
        {ar:'ما الَّذي يَجعَلُ القَلبَ كَبيراً؟', en:'What makes a heart great?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ الزُّبَيرِ الصَّبيِّ مَشهورَةٌ في كُتُبِ السِّيَر. المَصدَر: ar.wikipedia.org/wiki/الزبير_بن_العوام', en:'The story of young az-Zubayr is famous in biography books. Source: ar.wikipedia.org'},
        {ar:'أَصبَحَ الزُّبَيرُ مِن أَشجَعِ الصَّحابَة وأَحَدَ العَشَرَةِ المُبَشَّرينَ بِالجَنَّة!', en:'Az-Zubayr became one of the bravest Companions and one of the ten promised Paradise!'}
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ─────
     Content to memorize:
     - Quranic verses about courage (3 verses)
     - Hadiths about the strong believer (2 hadiths)
     - Pledge of courage (4 commitment lines + dua)
  */
  memorize: {
    verses: [
      { text: { ar:'﴿ فَقَاتِلْ فِي سَبِيلِ اللَّهِ لَا تُكَلَّفُ إِلَّا نَفْسَكَ ﴾',
                en:'"So fight in the way of Allah — you are not responsible except for yourself"' },
        ref: { ar:'[سورة النساء: ٨٤]', en:'[Surah An-Nisa: 84]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا وَاذْكُرُوا اللَّهَ كَثِيرًا ﴾',
                en:'"O you who believe — when you meet an enemy force, stand firm and remember Allah much"' },
        ref: { ar:'[سورة الأنفال: ٤٥]', en:'[Surah Al-Anfal: 45]' } },
      { text: { ar:'﴿ وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ ﴾',
                en:'"Do not lose heart or grieve — you are superior if you are true believers"' },
        ref: { ar:'[سورة آل عمران: ١٣٩]', en:'[Surah Aal-\u2018Imran: 139]' } },
    ],
    hadiths: [
      { text: { ar:'«المُؤمِنُ القَوِيُّ خَيرٌ وأَحَبُّ إلى اللهِ مِنَ المُؤمِنِ الضَّعيف»',
                en:'"The strong believer is better and more beloved to Allah than the weak believer"' },
        ref: { ar:'[رواه مسلم — حديث ٢٦٦٤]', en:'[Sahih Muslim — 2664]' } },
      { text: { ar:'«أَفضَلُ الجِهادِ كَلِمَةُ حَقٍّ عِندَ سُلطانٍ جائِر»',
                en:'"The best jihad is a word of truth before an unjust ruler"' },
        ref: { ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ الشَّجاعَة', en:'Pledge of courage' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أَثبُتَ على الحَقِّ ولا أَخافَ أَحَداً', en:'I pledge to Allah to stand firm on truth and fear none' },
        { ar:'أُعاهِدُ اللهَ أن أَتَوَكَّلَ عليه في كُلِّ أَمري', en:'I pledge to Allah to rely on Him in all my affairs' },
        { ar:'أُعاهِدُ اللهَ أن أَقولَ كَلِمَةَ الحَقِّ ولو كانَت صَعبَة', en:'I pledge to Allah to speak the word of truth even if difficult' },
        { ar:'أُعاهِدُ اللهَ أن أَكونَ شُجاعاً في طاعَتِه وقَوِيّاً بِإيماني', en:'I pledge to Allah to be brave in obeying Him and strong through my faith' },
      ],
      dua: { ar:'اللَّهُمَّ قَوِّ قَلبي وثَبِّتني على الحَقّ، واجعَلني مِن الشُّجعانِ الصّادِقين',
             en:'O Allah, strengthen my heart and make me firm on truth, and make me among the brave and truthful' },
    },
  },

  /* ───── ROOM 4: Activities — 6 types × 3 levels = 18 mini-games ─────
     Total points: 180 (30 points per level)
     
     Activity types:
     1. KNOW (fill-in-blanks, true/false, MCQ)
     2. FLIP (flip-match, match, MCQ)
     3. SORT (sort good/bad behaviors)
     4. CIPHER (emoji cipher, number cipher, MCQ)
     5. SCENARIOS (real-life situation MCQs)
     6. MAZE (progressive difficulty: 5×5, 7×7, 9×9, etc.)
  */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اعرِف', en:'Know' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: { ar:['القَلب','الحَقّ','الجِهاد','التَّوَكُّل','الثَّبات','الإيمان','الصَّبر','النَّفس'], en:['heart','truth','jihad','reliance','firmness','faith','patience','self'] },
            items: [
              { prefix:{ar:'الشَّجاعَةُ هي ثَبات', en:'Courage is firmness of'}, answer:{ar:'القَلب', en:'heart'}, suffix:{ar:'عند النَّوازِل', en:'when trials descend'} },
              { prefix:{ar:'أَفضَلُ الجِهادِ كَلِمَةُ', en:'The best jihad is a word of'}, answer:{ar:'الحَقّ', en:'truth'}, suffix:{ar:'عند سُلطانٍ جائِر', en:'before an unjust ruler'} },
              { prefix:{ar:'الشَّجاعَةُ في', en:'Courage in'}, answer:{ar:'الجِهاد', en:'jihad'}, suffix:{ar:'مِن أَعلى المَراتِب', en:'is among the highest ranks'} },
              { prefix:{ar:'مِن أَسبابِ الشَّجاعَة', en:'Among courage\'s causes is'}, answer:{ar:'التَّوَكُّل', en:'reliance'}, suffix:{ar:'على الله', en:'on Allah'} },
              { prefix:{ar:'الصَّحابَةُ كانوا مِثالاً في', en:'The Companions were an example in'}, answer:{ar:'الثَّبات', en:'firmness'}, suffix:{ar:'والشَّجاعَة', en:'and courage'} },
              { prefix:{ar:'الشَّجاعَةُ تَحتاجُ إلى قُوَّةِ', en:'Courage needs strength of'}, answer:{ar:'الإيمان', en:'faith'}, suffix:{ar:'بِاللهِ تَعالى', en:'in Allah Most High'} },
              { prefix:{ar:'مِن شَجاعَةِ', en:'Part of'}, answer:{ar:'النَّفس', en:'self'}, suffix:{ar:'مُقاوَمَةُ الهَوى', en:'courage is resisting desire'} },
              { prefix:{ar:'الشَّجاعَةُ تَتَطَلَّبُ', en:'Courage requires'}, answer:{ar:'الصَّبر', en:'patience'}, suffix:{ar:'والمُثابَرَة', en:'and perseverance'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الشَّجاعَةُ تَحتاجُ إلى قُوَّةِ القَلب', en:'Courage needs heart strength'}, t:true },
              { q:{ar:'الخَوفُ مِن اللهِ فَقَط هو الجُبن', en:'Fearing Allah alone is cowardice'}, t:false },
              { q:{ar:'النَّبيُّ ﷺ كانَ أَشجَعَ النّاس', en:'The Prophet ﷺ was the bravest of people'}, t:true },
              { q:{ar:'الشَّجاعَةُ هي التَّهَوُّر', en:'Courage is recklessness'}, t:false },
              { q:{ar:'المُؤمِنُ القَوِيُّ خَيرٌ مِن المُؤمِنِ الضَّعيف', en:'The strong believer is better than the weak believer'}, t:true },
              { q:{ar:'الشَّجاعَةُ تَعني عَدَمَ الخَوفِ نِهائِياً', en:'Courage means never being afraid'}, t:false },
              { q:{ar:'الصَّحابَةُ كانوا جَميعُهُم شُجعاناً في الحَقّ', en:'The Companions were all brave in truth'}, t:true },
              { q:{ar:'الشَّجاعَةُ تَأتي بِدونِ تَدريب', en:'Courage comes without training'}, t:false },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى الشَّجاعَة؟', en:'What does courage mean?'},
                opts:[
                  { t:{ar:'ثَباتُ القَلبِ عند النَّوازِل', en:'Firmness of heart when trials descend'}, c:true },
                  { t:{ar:'القُوَّةُ الجَسَديَّة', en:'Bodily strength'}, c:false },
                  { t:{ar:'التَّهَوُّر', en:'Recklessness'}, c:false }
                ] },
              { q:{ar:'مَن كانَ أَشجَعَ النّاس؟', en:'Who was the bravest of people?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'عَمرو بن وُدّ', en:'\u2018Amr ibn Wudd'}, c:false },
                  { t:{ar:'مَرحَب', en:'Marhab'}, c:false }
                ] },
              { q:{ar:'ما أَفضَلُ الجِهاد؟', en:'What is the best jihad?'},
                opts:[
                  { t:{ar:'كَلِمَةُ حَقٍّ عند سُلطانٍ جائِر', en:'A word of truth before an unjust ruler'}, c:true },
                  { t:{ar:'الصَّمت', en:'Silence'}, c:false },
                  { t:{ar:'الهُروب', en:'Fleeing'}, c:false }
                ] },
              { q:{ar:'ما أَوَّلُ خُطوَةٍ لِلشَّجاعَة؟', en:'What is the first step to courage?'},
                opts:[
                  { t:{ar:'التَّوَكُّلُ على الله', en:'Relying on Allah'}, c:true },
                  { t:{ar:'القُوَّةُ الجَسَديَّة', en:'Physical strength'}, c:false },
                  { t:{ar:'الشُّهرَة', en:'Fame'}, c:false }
                ] },
              { q:{ar:'مَن المُؤمِنُ الأَفضَل؟', en:'Who is the better believer?'},
                opts:[
                  { t:{ar:'القَوِيّ', en:'The strong one'}, c:true },
                  { t:{ar:'الضَّعيف', en:'The weak one'}, c:false },
                  { t:{ar:'لا فَرق', en:'No difference'}, c:false }
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
              { a:{ar:'شَجاعَةُ القَلب', en:'Heart\u2019s courage'}, b:{ar:'التَّوَكُّلُ على الله', en:'Trusting Allah'} },
              { a:{ar:'شَجاعَةُ الجِهاد', en:'Courage in jihad'}, b:{ar:'القِتالُ في سَبيلِ الله', en:'Fighting for Allah'} },
              { a:{ar:'شَجاعَةُ النَّفس', en:'Soul\u2019s courage'}, b:{ar:'مُجاهَدَةُ الهَوى', en:'Resisting desire'} },
              { a:{ar:'شَجاعَةُ الصِّدع', en:'Speaking courage'}, b:{ar:'قَولُ الحَقِّ', en:'Speaking truth'} },
              { a:{ar:'شَجاعَةُ الثَّبات', en:'Courage of firmness'}, b:{ar:'عَدَمُ الفِرار', en:'Not fleeing'} },
              { a:{ar:'شَجاعَةُ البَدَن', en:'Bodily courage'}, b:{ar:'القُوَّةُ الجَسَديَّة', en:'Physical strength'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ في الهِجرَة', en:'The Prophet ﷺ in migration'} },
              { id:2, t:{ar:'عَلِيٌّ في خَيبَر', en:'\u2018Ali at Khaybar'} },
              { id:3, t:{ar:'الزُّبَير وحِصن بابِليون', en:'Az-Zubayr & Babylon fort'} },
              { id:4, t:{ar:'الزُّبَير الغُلام', en:'Young az-Zubayr'} },
            ],
            right: [
              { id:3, t:{ar:'تَسَلُّق الحِصن وحدَه', en:'Climbing the fort alone'} },
              { id:1, t:{ar:'الثِّقَةُ بِالله في الغار', en:'Trust in Allah in the cave'} },
              { id:4, t:{ar:'حَملُ السَّيفِ صَغيراً', en:'Carrying sword as a child'} },
              { id:2, t:{ar:'قَتلُ مَرحَب', en:'Killing Marhab'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن قالَ: «لا تَحزَن، إنَّ اللهَ مَعَنا»؟', en:'Who said: "Don\u2019t grieve — Allah is with us"?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'أَبو بَكر', en:'Abu Bakr'}, c:false },
                  { t:{ar:'عُمَر', en:'\u2018Umar'}, c:false }
                ] },
              { q:{ar:'كَم رَجُلاً لم يَستَطيعوا حَملَ بابِ خَيبَر؟', en:'How many men couldn\u2019t lift Khaybar\u2019s gate?'},
                opts:[
                  { t:{ar:'عَشَرة', en:'Ten'}, c:false },
                  { t:{ar:'عِشرون', en:'Twenty'}, c:false },
                  { t:{ar:'أَربَعون', en:'Forty'}, c:true }
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
              { t:{ar:'الثَّباتُ على الحَقّ', en:'Standing firm on truth'}, good:true },
              { t:{ar:'الخَوفُ مِن النّاس', en:'Fearing people'}, good:false },
              { t:{ar:'قَولُ كَلِمةِ الحَقّ', en:'Speaking the word of truth'}, good:true },
              { t:{ar:'الجُبنُ والهُروب', en:'Cowardice and fleeing'}, good:false },
              { t:{ar:'التَّوَكُّلُ على الله', en:'Relying on Allah'}, good:true },
              { t:{ar:'التَّهَوُّر', en:'Recklessness'}, good:false },
              { t:{ar:'الصَّبرُ على الأَذى', en:'Patience through harm'}, good:true },
              { t:{ar:'الاستِسلامُ لِلخَوف', en:'Surrendering to fear'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الدِّفاعُ عن المُستَضعَفين', en:'Defending the oppressed'}, good:true },
              { t:{ar:'السُّكوتُ عن الظُّلم', en:'Silence before injustice'}, good:false },
              { t:{ar:'مُجاهَدَةُ النَّفس', en:'Struggling against the self'}, good:true },
              { t:{ar:'مُتابَعَةُ الهَوى', en:'Following desire'}, good:false },
              { t:{ar:'الصَّبرُ عند الشِّدَّة', en:'Patience in hardship'}, good:true },
              { t:{ar:'الهَرَبُ مِن المَسؤوليَّة', en:'Fleeing from responsibility'}, good:false },
              { t:{ar:'نُصرَةُ الحَقّ', en:'Supporting truth'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الجِهادُ في سَبيلِ الله', en:'Jihad for Allah\u2019s cause'}, good:true },
              { t:{ar:'الهُروبُ مِن المَعرَكَة', en:'Fleeing from battle'}, good:false },
              { t:{ar:'نُصرَةُ المَظلوم', en:'Supporting the wronged'}, good:true },
              { t:{ar:'ظُلمُ الضَّعيف', en:'Oppressing the weak'}, good:false },
              { t:{ar:'الثَّباتُ في الفِتَن', en:'Firmness in trials'}, good:true },
              { t:{ar:'الخُنوعُ لِلباطِل', en:'Submitting to falsehood'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          { kind:'cipher', points:30,
            key: { ar:{
              '⚔️':'ش', '🛡️':'ج', '❤️':'ا', '🌟':'ع', '💪':'ة', '🦁':'ل', '🗡️':'ب', '💎':'ق', '🔥':'و'
            }, en:{
              '⚔️':'c', '🛡️':'o', '❤️':'u', '🌟':'r', '💪':'a', '🦁':'g', '🗡️':'e', '💎':'t', '🔥':'h'
            } },
            puzzles: [
              { symbols:{ar:'⚔️🛡️❤️🌟💪', en:'⚔️🛡️❤️🦁❤️🦁🗡️'}, answer:{ar:'شجاعة', en:'courage'} },
              { symbols:{ar:'💎🦁🗡️', en:'💎🔥🗡️'}, answer:{ar:'قلب', en:'the'} },
              { symbols:{ar:'🔥🛡️❤️🔥', en:'🔥🗡️❤️🦁💎'}, answer:{ar:'وجاو', en:'heart'} },
              { symbols:{ar:'❤️🦁🦁❤️🔥', en:'💎🔥🗡️'}, answer:{ar:'اللاو', en:'the'} },
              { symbols:{ar:'🌟🛡️❤️❤️', en:'🦁🛡️🛡️💪'}, answer:{ar:'عجاا', en:'good'} },
            ]
          },
          { kind:'cipher', points:30,
            key: { ar:{
              'ش':'1', 'ج':'2', 'ا':'3', 'ع':'4', 'ة':'5', 'ق':'6', 'ل':'7', 'ب':'8', 'ث':'9', 'و':'10', 'ص':'11', 'د':'12'
            }, en:{
              'c':'1', 'o':'2', 'u':'3', 'r':'4', 'a':'5', 'g':'6', 'e':'7', 'h':'8', 't':'9', 'f':'10', 'i':'11', 's':'12'
            } },
            puzzles: [
              { symbols:{ar:'1-2-3-4-5', en:'1-2-3-4-5-6-7'}, answer:{ar:'شجاعة', en:'courage'} },
              { symbols:{ar:'6-7-8', en:'10-5-11-9-8'}, answer:{ar:'قلب', en:'faith'} },
              { symbols:{ar:'9-8-3-9', en:'9-4-3-9-8'}, answer:{ar:'ثبات', en:'truth'} },
              { symbols:{ar:'11-8-4', en:'6-2-2-12'}, answer:{ar:'صبع', en:'good'} },
              { symbols:{ar:'10-3-7', en:'8-7-5-4-9'}, answer:{ar:'وال', en:'heart'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما أَساسُ الشَّجاعَة؟', en:'What is courage\u2019s foundation?'},
                opts:[
                  { t:{ar:'الإيمانُ بِالله', en:'Faith in Allah'}, c:true },
                  { t:{ar:'القُوَّةُ الجَسَديَّة', en:'Physical strength'}, c:false },
                  { t:{ar:'المال', en:'Wealth'}, c:false }
                ] },
              { q:{ar:'مَتى يَحتاجُ المُسلِمُ لِلشَّجاعَة؟', en:'When does a Muslim need courage?'},
                opts:[
                  { t:{ar:'في الحَرب فَقَط', en:'In war only'}, c:false },
                  { t:{ar:'في كُلِّ مَوقِف', en:'In every situation'}, c:true },
                  { t:{ar:'عند اللَّعِب', en:'When playing'}, c:false }
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
              { q:{ar:'رَأَيتَ صَديقَكَ يَضرِبُ طِفلاً أَصغَر. ماذا تَفعَل؟', en:'You see your friend hitting a smaller child. What do you do?'},
                opts:[
                  { t:{ar:'أَتَجاهَل المَوقِف.', en:'I ignore it.'},  c:false },
                  { t:{ar:'أَمنَعُهُ بِشَجاعَة وأَدافِعُ عن الصَّغير.', en:'I stop him bravely and defend the small child.'},  c:true },
                  { t:{ar:'أَضحَك مَعَه.', en:'I laugh with him.'},  c:false },
                ] },
              { q:{ar:'المُعَلِّمُ أَخطَأَ في تَصحيحِ وَرَقَتِك. ماذا تَفعَل؟', en:'The teacher made a mistake correcting your paper. What do you do?'},
                opts:[
                  { t:{ar:'أَسكُت خَوفاً.', en:'I stay silent out of fear.'},  c:false },
                  { t:{ar:'أُخبِرُهُ بِأَدَبٍ وشَجاعَة.', en:'I tell him politely and courageously.'},  c:true },
                  { t:{ar:'أَشتُمُه.', en:'I insult him.'},  c:false },
                ] },
              { q:{ar:'سَمِعتَ زُميلَكَ يَغتابُ شَخصاً غائِباً. ماذا تَفعَل؟', en:'You hear your classmate backbiting someone absent. What do you do?'},
                opts:[
                  { t:{ar:'أَنضَمُّ إليه.', en:'I join him.'},  c:false },
                  { t:{ar:'أَنصَحُهُ بِلُطف.', en:'I advise him kindly.'},  c:true },
                  { t:{ar:'أَسكُت.', en:'I stay silent.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَصدِقاؤكَ يَدعونَكَ لِفِعلِ مَعصيَة. ماذا تَفعَل؟', en:'Your friends invite you to do a sin. What do you do?'},
                opts:[
                  { t:{ar:'أُوافِقُهُم خَوفاً مِن سُخرِيَتِهِم.', en:'I agree out of fear of their mockery.'},  c:false },
                  { t:{ar:'أَرفُضُ بِشَجاعَة.', en:'I refuse bravely.'},  c:true },
                  { t:{ar:'أَذهَبُ مَعَهُم ولا أَفعَل.', en:'I go with them but don\u2019t do it.'},  c:false },
                ] },
              { q:{ar:'كَلبٌ ضالٌّ يُخيفُ الأَطفال. ماذا تَفعَل؟', en:'A stray dog is scaring children. What do you do?'},
                opts:[
                  { t:{ar:'أَهرُب.', en:'I flee.'},  c:false },
                  { t:{ar:'أُساعِدُ في إِبعادِهِ بِحَذَر.', en:'I help drive it away cautiously.'},  c:true },
                  { t:{ar:'أَضحَكُ على الأَطفال.', en:'I laugh at the children.'},  c:false },
                ] },
              { q:{ar:'رَأَيتَ طِفلاً يُعاني وحيداً. ماذا تَفعَل؟', en:'You see a child suffering alone. What do you do?'},
                opts:[
                  { t:{ar:'أَمُرُّ بِجانِبِه.', en:'I pass by him.'},  c:false },
                  { t:{ar:'أَسأَلُهُ بِلُطفٍ وأُساعِده.', en:'I ask him kindly and help him.'},  c:true },
                  { t:{ar:'أَضحَكُ عليه.', en:'I laugh at him.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'زَميلُكَ يَغُشُّ في الامتِحان. ماذا تَفعَل؟', en:'Your classmate is cheating on the exam. What do you do?'},
                opts:[
                  { t:{ar:'أَتَجاهَل.', en:'I ignore it.'},  c:false },
                  { t:{ar:'أُخبِرُ المُعَلِّمَ بِأَدَب.', en:'I tell the teacher politely.'},  c:true },
                  { t:{ar:'أَغُشُّ مَعَه.', en:'I cheat with him.'},  c:false },
                ] },
              { q:{ar:'أَبوكَ يَطلُبُ مِنكَ فِعلَ شَيءٍ تَعرِفُ أَنَّهُ خَطَأ. ماذا تَفعَل؟', en:'Your father asks you to do something you know is wrong. What do you do?'},
                opts:[
                  { t:{ar:'أُطيعُهُ دونَ نِقاش.', en:'I obey without discussion.'},  c:false },
                  { t:{ar:'أُوَضِّحُ له بِأَدَبٍ أَنَّهُ خَطَأ.', en:'I politely explain to him it\u2019s wrong.'},  c:true },
                  { t:{ar:'أَرفُضُ بِقِلَّةِ أَدَب.', en:'I refuse rudely.'},  c:false },
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

  /* ───── ROOM 5: Treasures — colorful stickers ─────
     EXACTLY 6 stickers with RAINBOW palette
     Each sticker has: icon (emoji), color (hex), title (ar/en)
     Colors must be diverse — never all one color!
  */
  treasures: [
    { icon:'🦁', color:'#C0392B', title:{ar:'وِسامُ الأَسَد الشُّجاع',     en:'Badge of the Brave Lion' } },
    { icon:'⚔️', color:'#27AE60', title:{ar:'سَيفُ الحَقّ',      en:'Sword of Truth' } },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ الإيمان', en:'Shield of Faith' } },
    { icon:'🌟', color:'#F39C12', title:{ar:'نَجمَةُ الثَّبات',     en:'Star of Steadfastness' } },
    { icon:'💪', color:'#E67E22', title:{ar:'قُوَّةُ القَلب',    en:'Heart\u2019s Strength' } },
    { icon:'🏆', color:'#8E44AD', title:{ar:'تاجُ المُجاهِد',    en:'Crown of the Striving One' } },
  ],

  /* ───── HOUSE ICON (used on certificate seal) ───── */
  icon: '🦁',

  /* ───── MAGIC MIX — practical daily recipe ─────
     5-8 DAILY ACTIONS (not abstract ideas)
     Each item: icon (emoji), title (ar/en), body (ar/en)
     Focus on specific behaviors kids can do TODAY
  */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الشَّجاعَةَ كُلَّ يَوم؟', en:'How do you live courage every day?' },
  formulaEq: { ar:'إيمان + ثَبات + تَوَكُّل = شُجاع 🏆', en:'Faith + Firmness + Reliance = Brave 🏆' },
  magicMix: [
    { icon:'🤲', title:{ar:'تَوَكَّل على اللهِ في كُلِّ أَمر',en:'Rely on Allah in every matter'},
      body:{ar:'قَبلَ أَيِّ خُطوَةٍ قُل: «حَسبيَ اللهُ ونِعمَ الوَكيل»',en:'Before any step say: "Allah is sufficient for me — what an excellent Guardian"'} },
    { icon:'💬', title:{ar:'قُل الحَقَّ ولا تَخَف',en:'Speak truth and don\u2019t fear'},
      body:{ar:'إذا رَأَيتَ خَطَأً، تَكَلَّم بِأَدَبٍ ولا تَسكُت خَوفاً.',en:'If you see wrong, speak politely — don\u2019t stay silent out of fear.'} },
    { icon:'🛡️', title:{ar:'دافِع عن المَظلوم',en:'Defend the wronged'},
      body:{ar:'إذا رَأَيتَ ضَعيفاً يُظلَم، قِف مَعَه بِشَجاعَة.',en:'If you see a weak person wronged, stand with him bravely.'} },
    { icon:'💪', title:{ar:'قَوِّ جَسَدَكَ وقَلبَك',en:'Strengthen your body and heart'},
      body:{ar:'مارِس الرِّياضَة، واقرَأ القُرآن، واذكُرِ اللهَ كَثيراً.',en:'Exercise, read Quran, and remember Allah much.'} },
    { icon:'🎯', title:{ar:'اصبِر عند الصُّعوبات',en:'Be patient through difficulties'},
      body:{ar:'لا تَستَسلِم عند أَوَّلِ عَقَبَة — الشُّجعانُ لا يَستَسلِمون!',en:'Don\u2019t give up at the first obstacle — the brave don\u2019t surrender!'} },
    { icon:'🌟', title:{ar:'اقتَدِ بِالنَّبيِّ ﷺ',en:'Follow the Prophet ﷺ'},
      body:{ar:'اقرَأ عن شَجاعَتِه ﷺ وشَجاعَةِ الصَّحابَة، وتَعَلَّم مِنهُم.',en:'Read about his ﷺ courage and the Companions\u2019 courage — learn from them.'} },
    { icon:'🤝', title:{ar:'اصحَب الشُّجعانَ الأَقوياء',en:'Keep company with brave strong believers'},
      body:{ar:'الصَّاحِبُ ساحِب — صاحِبْ أَهلَ الشَّجاعَةِ تَكُن مِثلَهُم.',en:'Company rubs off — befriend the brave and you\u2019ll be like them.'} },
    { icon:'📖', title:{ar:'اقرَأ سِيَرَ الأَبطالِ المُسلِمين',en:'Read biographies of Muslim heroes'},
      body:{ar:'تَعَلَّم مِن قِصَصِ الصَّحابَةِ والعُلَماءِ الشُّجعان.',en:'Learn from stories of brave Companions and scholars.'} },
  ],

  /* ───── CERTIFICATE TEXT ─────
     Awarded upon completion of all 5 rooms
     Mentions role models from the 4 stories
  */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الشَّجاعَة', en:'Awarded to those who completed the House of Courage' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>الشَّجاعَةَ في القَولِ والفِعلِ والثَّبات</b> — اقتِداءً بِالنَّبيِّ ﷺ وعَلِيّ وأَبي بَكرٍ والزُّبَير رضي الله عنهم أجمعين.',
                 en:'For mastering <b>courage in speech, action, and steadfastness</b> — following the Prophet ﷺ, \u2018Ali, Abu Bakr, and az-Zubayr رضي الله عنهم all.' },
  },

};
