/* ═══════════════════════════════════════════════════════════════
   بيت آداب قضاء الحاجة  ·  House of Bathroom Manners
   ───────────────────────────────────────────────────────────────
   slug    : bathroom
   id      : 25
   cat     : adab
   color   : #4E342E
   art     : cottage
   shortAr : الحاجة
   shortEn : Bathroom
   ───────────────────────────────────────────────────────────────
   ROOM 1  — knowledge
             definitions (linguistic · terminology · simile)
             forms (6): entry dua · istinja · silence · covering ·
                        avoiding harm · exit dua
             ranking (4 tiers)
             verses (3) · hadiths (2)
             benefits (5) · obstacles (4) · acquireMeans (4)
   ───────────────────────────────────────────────────────────────
   ROOM 2  — stories (EXACTLY 4, each 6–7 pages)
     Story 1 : النَّبيُّ ﷺ يُعَلِّمُ الأَعرابيَّ
               Source → islamweb.net/ar/ (أحاديث الطهارة)
     Story 2 : سَلمانُ الفارِسيُّ والمُشرِكون
               Source → dorar.net (صحيح مسلم حديث ٢٦٢)
     Story 3 : ابنُ مَسعودٍ والحِجارَةُ الثَّلاثَة
               Source → سير أعلام النبلاء — الذهبي — ج١
     Story 4 : أُسامَةُ وسِرُّ البِئرِ النَّظيفَة
               Source → islamweb.net/ar/ (النظافة وحفظ البيئة)
   ───────────────────────────────────────────────────────────────
   ROOM 3  — memorize : verses (3) · hadiths (2) · pledge (4)
   ROOM 4  — activities : 6 types × 3 levels = 18 games · 180 pts
   ROOM 5  — treasures : 6 stickers (full rainbow palette)
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.bathroom = {

  tagline: {
    ar: 'الطَّهارَةُ شَطرُ الإيمانِ وسِرُّ الأَدَبِ مَعَ الله',
    en: 'Purity is half of faith — and the secret of good manners with Allah',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ النَّبيَّ ﷺ عَلَّمَنا آدابَ دَورَةِ المِياه؟', en:'Did you know the Prophet ﷺ taught us bathroom manners?' },
      sub:   { ar:'«الطَّهورُ شَطرُ الإيمان» — قالَهُ النَّبيُّ ﷺ. الإسلامُ أَوَّلُ دينٍ يُعلِّمُ الإنسانَ كَيفَ يَدخُلُ دَورَةَ المِياهِ ويَخرُجُ مِنها بِأَدَبٍ وطَهارَة!',
               en:'"Purity is half of faith" — the Prophet ﷺ said. Islam is the first religion to teach people how to enter and leave the bathroom with etiquette and cleanliness!' },
    },
    definition: {
      linguistic: {
        ar: 'قَضاءُ الحاجَةِ مِن «القَضاء» بِمَعنى الفَراغِ والإنجاز، و«الحاجَة» أَيِ الأَمرِ الَّذي تَحتاجُهُ النَّفس — لأنَّ قَضاءَ الحاجَةِ ضَرورَةٌ طَبيعيَّةٌ يَحتاجُها كُلُّ إنسان!',
        en: 'From "qadha" meaning completion and fulfilment, and "haajah" meaning a need — because relieving oneself is a natural necessity every person requires.',
      },
      terminology: {
        ar: 'هي <b>مَجموعَةُ الآدابِ الإسلاميَّةِ</b> الَّتي أَرشَدَنا إليها النَّبيُّ ﷺ عِندَ دُخولِ الخَلاءِ والخُروجِ مِنهُ والاستِنجاءِ والطَّهارَة، حِفظاً لِلصِّحَّةِ وتَكريماً لِلإنسان.',
        en: 'The <b>set of Islamic etiquette</b> the Prophet ﷺ guided us to when entering and leaving the bathroom, performing istinja, and purifying oneself — to protect health and honour the human being.',
      },
      simile: {
        ar: 'آدابُ الخَلاءِ كالدِّرعِ الشَّفَّافَة: لا تَراها بِعَينِكَ لَكِنَّها تَحميكَ مِن الأَذى! مَن تَعَلَّمَ هذهِ الآدابَ كانَ كالبَيتِ النَّظيفِ مِن الخارِجِ والدّاخِل — جَميلٌ ومَحفوظ.',
        en: 'Bathroom manners are like a transparent shield: you cannot see it with your eye, yet it protects you from harm! Whoever learns these manners is like a clean house inside and out — beautiful and protected.',
      },
    },
    forms: [
      { icon:'🚶', color:'#4E342E', title:{ar:'الاستِئذانُ والتَّقَدُّم بِالرِّجلِ اليُسرى', en:'Entering with the left foot'},
        body:{ar:'يَدخُلُ المُسلِمُ دَورَةَ المِياهِ بِرِجلِهِ اليُسرى قائِلاً: «اللَّهُمَّ إنِّي أَعوذُ بِكَ مِن الخُبثِ والخَبائِث». هذا أَدَبٌ جَمَعَ بَينَ الفِعلِ والذِّكر.',
         en:'A Muslim enters the bathroom with the left foot saying: "O Allah, I seek refuge in You from evil and evil ones." This etiquette combines action and remembrance.'} },
      { icon:'🚿', color:'#795548', title:{ar:'الاستِنجاءُ والطَّهارَةُ الكامِلَة', en:'Istinja and complete purification'},
        body:{ar:'إِزالَةُ الأَذى بِالماءِ أَو ما يَقومُ مَقامَه، والتَّأَكُّدُ مِن الطَّهارَةِ التَّامَّة. الإسلامُ أَمَرَ بِهذا حِفاظاً على الصِّحَّةِ وقَبولِ العِبادَة.',
         en:'Removing impurity with water or its equivalent, and ensuring complete purity. Islam commanded this to preserve health and allow worship to be accepted.'} },
      { icon:'🤫', color:'#5D4037', title:{ar:'الصَّمتُ وكَراهَةُ الكَلام', en:'Silence and avoiding speech'},
        body:{ar:'لا يَتَكَلَّمُ المُسلِمُ في الخَلاءِ إلَّا لِضَرورَة، ولا يَجوزُ ذِكرُ اللهِ فيهِ بِالاسمِ الصَّريح. هذا تَعظيمٌ لِذِكرِ اللهِ وصَونٌ لِلكَرامَة.',
         en:'A Muslim does not speak in the bathroom except in necessity, and explicit dhikr of Allah is not done there. This honours Allah\'s remembrance and preserves dignity.'} },
      { icon:'↕️', color:'#6D4C41', title:{ar:'الاستِتارُ وصَونُ العَورَة', en:'Covering one\'s private parts'},
        body:{ar:'يَحرُصُ المُسلِمُ على السِّترِ التّامِّ وعَدَمِ كَشفِ العَورَةِ إلَّا بِالقَدرِ الضَّروريّ. الحياءُ مِن الإيمانِ وهو أَصلُ هذا الأَدَب.',
         en:'A Muslim is careful about complete covering and not exposing the private parts except what is necessary. Modesty is from faith and is the root of this etiquette.'} },
      { icon:'🚫', color:'#4CAF50', title:{ar:'اجتِنابُ النَّجاسَةِ وتَجَنُّبُ الأَذى', en:'Avoiding filth and not causing harm'},
        body:{ar:'لا يَقضي حاجَتَهُ في طَريقِ النّاسِ ولا في ظِلِّهِم ولا في مَواضِعِ الاستِراحَة. «اتَّقوا اللَّاعِنَين» قالَ النَّبيُّ ﷺ.',
         en:'"Beware of the two things that bring curses" the Prophet ﷺ warned — relieving oneself on people\'s paths, their shade, or resting places.'} },
      { icon:'🦶', color:'#009688', title:{ar:'الخُروجُ بِالرِّجلِ اليُمنى والدُّعاء', en:'Exiting with the right foot and dua'},
        body:{ar:'يَخرُجُ المُسلِمُ بِرِجلِهِ اليُمنى وهو يَقول: «غُفرانَك». يُكَمِّلُ الطَّهارَةَ ثُمَّ يَمضي وقَلبُهُ مُطمَئِنٌّ وجَسَدُهُ نَظيف.',
         en:'A Muslim exits with the right foot saying: "Ghufraanak (Your forgiveness)." He completes his purification then goes with a content heart and clean body.'} },
    ],
    ranking: [
      { color:'#4E342E', title:{ar:'أَعلاها: الطَّهارَةُ الكامِلَة',  en:'Highest: Complete purification'},
        body:{ar:'الاستِنجاءُ بِالماءِ والتَّأَكُّدُ مِن النَّقاءِ التّامّ — هذا أَكمَلُ الآداب وأَعلاها عِندَ الله.',
              en:'Using water for istinja and ensuring complete cleanliness — this is the most perfect etiquette and highest with Allah.'} },
      { color:'#795548', title:{ar:'قِراءَةُ الدُّعاءَينِ: الدُّخولُ والخُروج', en:'Saying both duas: entry and exit'},
        body:{ar:'مَن حافَظَ على ذِكرِ اللهِ عِندَ الدُّخولِ والخُروجِ جَمَعَ بَينَ الطَّهارَةِ الحِسِّيَّةِ والمَعنَوِيَّة.',
              en:'Whoever maintains dhikr at entry and exit has combined physical and spiritual purification.'} },
      { color:'#5D4037', title:{ar:'تَجَنُّبُ إيذاءِ الآخَرين', en:'Avoiding harm to others'},
        body:{ar:'صَونُ الأَماكِنِ العامَّةِ وعَدَمُ إيذاءِ النّاسِ بِالنَّجاسَةِ أَو الرّائِحَة — هذا مِن أَعظَمِ أَخلاقِ المُسلِم.',
              en:'Keeping public spaces clean and not harming people with filth or smell — this is among the greatest of a Muslim\'s morals.'} },
      { color:'#8D6E63', title:{ar:'المُحافَظَةُ على النَّظافَةِ العامَّة', en:'Maintaining general cleanliness'},
        body:{ar:'تَركُ الحَمّامِ نَظيفاً لِمَن يَأتي بَعدَك، وغَسلُ اليَدَينِ بِعِناية — هذا مِن حُسنِ الخُلُقِ مَعَ الناس.',
              en:'Leaving the bathroom clean for whoever comes after, and carefully washing hands — this is good manners toward people.'} },
    ],
    verses: [
      { text: { ar:'﴿ إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ ﴾',
                en:'"Indeed Allah loves those who repent and loves those who purify themselves."' },
        ref: { ar:'[سورة البقرة: ٢٢٢]', en:'[Surah Al-Baqarah: 222]' } },
      { text: { ar:'﴿ فِيهِ رِجَالٌ يُحِبُّونَ أَن يَتَطَهَّرُوا ۚ وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ ﴾',
                en:'"In it are men who love to purify themselves — and Allah loves those who purify themselves."' },
        ref: { ar:'[سورة التوبة: ١٠٨]', en:'[Surah At-Tawbah: 108]' } },
      { text: { ar:'﴿ وَثِيَابَكَ فَطَهِّرْ ﴾',
                en:'"And your garments purify."' },
        ref: { ar:'[سورة المدَّثِّر: ٤]', en:'[Surah Al-Muddaththir: 4]' } },
    ],
    hadiths: [
      { text: { ar:'«الطَّهورُ شَطرُ الإيمان»',
                en:'"Purity is half of faith."' },
        source: { ar:'[رواه مسلم — حديث ٢٢٣]', en:'[Sahih Muslim — 223]' } },
      { text: { ar:'«اتَّقوا اللَّاعِنَين: الَّذي يَتَخَلَّى في طَريقِ النّاسِ أَو في ظِلِّهِم»',
                en:'"Beware of the two things that bring curses: relieving oneself on people\'s paths or in their shade."' },
        source: { ar:'[رواه مسلم — حديث ٢٦٩]', en:'[Sahih Muslim — 269]' } },
    ],
    benefits: [
      { ar:'🌿 تُحَقِّقُ الطَّهارَةَ الَّتي هي شَرطُ قَبولِ الصَّلاة', en:'🌿 Achieves the purity required for prayer to be accepted' },
      { ar:'💧 تَحفَظُ الصِّحَّةَ وتَقي مِن الأَمراض', en:'💧 Preserves health and protects from diseases' },
      { ar:'🌸 تُكسِبُ رِضا اللهِ تَعالى الَّذي يُحِبُّ المُتَطَهِّرين', en:'🌸 Earns the pleasure of Allah who loves those who purify' },
      { ar:'✨ تَحفَظُ كَرامَةَ الإنسانِ وتُميِّزُهُ عن سائِرِ المَخلوقات', en:'✨ Preserves human dignity and distinguishes people from other creatures' },
      { ar:'🤝 تَصونُ حُقوقَ الآخَرينَ وتَمنَعُ إيذاءَهُم', en:'🤝 Protects others\' rights and prevents harming them' },
    ],
    obstacles: [
      { ar:'الكَسَلُ عن إِسباغِ الطَّهارَةِ والتَّعجُّل', en:'Laziness in completing purification and rushing' },
      { ar:'الجَهلُ بِالآدابِ الصَّحيحَة', en:'Ignorance of the correct etiquette' },
      { ar:'الاستِهانَةُ بِنَجاسَةِ الأَماكِنِ العامَّة', en:'Disregarding the filth of public places' },
      { ar:'نِسيانُ الأَذكارِ عِندَ الدُّخولِ والخُروج', en:'Forgetting the duas at entry and exit' },
    ],
    acquireMeans: [
      { ar:'احفَظ دُعاءَ الدُّخولِ والخُروجِ وارَدِّدهُما كُلَّ يَوم', en:'Memorise the entry and exit duas and repeat them daily' },
      { ar:'تَعَلَّم أَحكامَ الاستِنجاءِ والوُضوءِ مِن كِتابٍ أَو مُعَلِّم', en:'Learn the rulings of istinja and wudu from a book or teacher' },
      { ar:'احرِص على تَركِ الحَمّامِ نَظيفاً في كُلِّ مَرَّة', en:'Make it a habit to leave the bathroom clean every time' },
      { ar:'اجعَل غَسلَ اليَدَينِ بِالصّابونِ عادَةً راسِخَةً بَعدَ كُلِّ زِيارَة', en:'Make washing hands with soap a firm habit after every visit' },
    ],
  },

  /* ───── ROOM 2: Stories ───── */
  stories: [

    /* ──────────────────────────────────────────
       STORY 1 — النَّبيُّ ﷺ يُعَلِّمُ الأَعرابيَّ
       Source: islamweb.net/ar/ — شَرحُ حَديثِ الاستِنجاء
       ────────────────────────────────────────── */
    {
      icon:'🌊', scene:'desert', character:'🧔',
      title: { ar:'النَّبيُّ ﷺ يُعَلِّمُ بِلُطفٍ وحِكمَة', en:'The Prophet ﷺ teaches with kindness and wisdom' },
      pages: [
        { scene:'desert', character:'🧔',
          text:{ ar:'كانَت مَدينَةُ النَّبيِّ ﷺ تَستَقبِلُ القُدومَ مِن كُلِّ صَوب — أَعرابٌ مِن الصَّحراءِ يَجيئونَ لِيَتَعَلَّموا دِينَ اللهِ الجَديد. يَوماً مِن الأَيّام، قَدِمَ رَجُلٌ مِن بادِيَةِ العَرَب، عَينَيهِ تَلمَعانِ بِفُضول، وقَلبُهُ يَحمِلُ أَلفَ سُؤال.<br><br>جَلَسَ في مَجلِسِ النَّبيِّ ﷺ، وبَدَأَ يُراقِبُ الصَّحابَةَ وهُم يَتَوَضَّؤون ويُصَلُّون. كانَ يَرى مَشاهِدَ لَم يَرَها مِن قَبل — ماءٌ يَجري على أَيدٍ وأَرجُل، وأَذكارٌ تُرَدَّدُ بِخُشوع.<br><br><b>«ما كُلُّ هذا الماء؟»</b> تَساءَلَ في نَفسِه. «وما هذهِ الكَلِماتُ الَّتي يَقولونَها؟»',
               en:'The city of the Prophet ﷺ welcomed arrivals from every direction — Bedouins from the desert came to learn the new religion of Allah. One day, a man arrived from the Arab wilderness, his eyes gleaming with curiosity, his heart carrying a thousand questions.<br><br>He sat in the Prophet\'s ﷺ gathering, watching the Companions as they performed wudu and prayed. He saw scenes he had never witnessed before — water flowing over hands and feet, and phrases repeated with deep reverence.<br><br><b>"What is all this water for?"</b> he wondered to himself. "And what are these words they say?"' } },
        { scene:'desert', character:'🧔',
          text:{ ar:'بَعدَ يَومَين، تَجَرَّأَ الأَعرابيُّ وجاءَ إلى النَّبيِّ ﷺ في لَحظَةٍ خَلَت. قالَ له بِصَراحَةٍ بَدَوِيَّة لا تَعرِفُ التَّلوِيح: «يا رَسولَ الله، إنَّ قَومي لا يَعرِفونَ شَيئاً عن هذا الَّذي تَفعَلونَه بَعدَ قَضاءِ الحاجَة. عَلِّمني!»<br><br>لَم يَبتَسِم النَّبيُّ ﷺ سُخريَةً، ولَم يُعرِض خَجَلاً مِن الكَلام. بَل نَظَرَ إليهِ <b>بِعَينَين دافِئَتَين كَأَنَّهُ أَقرَبُ النّاسِ إليه</b>، وقالَ: «اجلِس يا أَخي، سأُعَلِّمُك.»',
               en:'After two days, the Bedouin gathered his courage and came to the Prophet ﷺ in a quiet moment. He said with the frank directness of a desert dweller who knows no hints: "O Messenger of Allah, my people know nothing about what you do after relieving yourselves. Teach me!"<br><br>The Prophet ﷺ did not smile in mockery, nor turn away in embarrassment from the subject. Instead, he looked at him <b>with warm eyes as though he were the closest of people to him</b>, and said: "Sit, my brother — I will teach you."' } },
        { scene:'madinah', character:'🌊',
          text:{ ar:'بَدَأَ النَّبيُّ ﷺ يُعَلِّمُهُ بِهُدوءٍ وتَرتيب. قالَ: «إذا أَرَدتَ قَضاءَ حاجَتِك، فابتَعِد عن طَريقِ النّاسِ وظِلِّهِم. ثُمَّ قُل: <b>اللَّهُمَّ إنِّي أَعوذُ بِكَ مِن الخُبثِ والخَبائِث</b> — تَستَعيذُ بِاللهِ مِن الشَّياطِين.»<br><br>أَنصَتَ الأَعرابيُّ بِتَركيزٍ شَديد، شَفَتاهُ تَتَحَرَّكانِ وهو يُكَرِّرُ الكَلِماتِ في سِرّه. كانَ يَشعُرُ أنَّ هذهِ الكَلِماتِ ليسَت مُجَرَّدَ تَعليمٍ — بَل هي بَوّابَةٌ تَصِلُه بِالله!',
               en:'The Prophet ﷺ began teaching him calmly and in order. He said: "When you wish to relieve yourself, go away from people\'s paths and their shade. Then say: <b>O Allah, I seek refuge in You from male and female evil spirits</b> — you seek Allah\'s protection from the devils."<br><br>The Bedouin listened with intense focus, his lips moving as he silently repeated the words. He felt that these words were not mere instruction — but a gateway connecting him to Allah!' },
          choice:{ q:{ar:'لِماذا نَقرَأُ دُعاءَ الدُّخولِ لِلحَمّام؟',en:'Why do we say the bathroom entry dua?'},
            opts:[
              { t:{ar:'لأنَّهُ تَقليدٌ قَديم.', en:'Because it is an old tradition.'},c:false,exp:{ar:'لا — الدُّعاءُ حِمايَةٌ حَقيقيَّةٌ مِن الشَّياطِينِ بِإذنِ الله!',en:'No — the dua is real protection from devils by Allah\'s permission!'} },
              { t:{ar:'لِلاستِعاذَةِ بِاللهِ مِن الشَّياطِين.', en:'To seek Allah\'s protection from devils.'},c:true,exp:{ar:'نَعَم! هذهِ هي الحِكمَةُ الحَقيقيَّة — صَلَةٌ بِاللهِ وحِمايَةٌ مِنه!',en:'Yes! This is the true wisdom — connection to Allah and protection from Him!'} },
              { t:{ar:'لأنَّهُ يُريحُ النَّفس.', en:'Because it relaxes the mind.'},c:false,exp:{ar:'الدُّعاءُ أَعمَقُ مِن مُجَرَّدِ الراحَة — هو أَمانٌ حَقيقيّ!',en:'The dua is deeper than mere relaxation — it is real safety!'} },
            ] } },
        { scene:'madinah', character:'💧',
          text:{ ar:'ثُمَّ قالَ النَّبيُّ ﷺ: «بَعدَ ذلِكَ، استَنجِ جَيِّداً، واغسِل يَدَيكَ بِالماء. والأَذى يُزالُ بِثَلاثَةِ أَحجارٍ أَو بِالماء — والماءُ أَكمَل.»<br><br>ثُمَّ أَضافَ بِصَوتٍ حَنون: «وحينَ تَخرُج، قُل: <b>غُفرانَك</b> — تَطلُبُ مَغفِرَةَ اللهِ. لأنَّكَ تَذكَّرتَ رَحمَتَهُ الَّتي رَزَقَتكَ الطَّعامَ وهَيَّأَت لَكَ جَسَداً سَليم.»<br><br>صَمَتَ الأَعرابيُّ لَحظَة، ثُمَّ قالَ مُتَعَجِّباً: <b>«سُبحانَ الله! حتَّى في هذهِ اللَّحظَةِ يَذكُرُ المُؤمِنُ رَبَّه؟»</b>',
               en:'Then the Prophet ﷺ said: "After that, perform istinja well, and wash your hands with water. The impurity is removed with three stones or with water — and water is more complete."<br><br>He then added with a tender voice: "And when you leave, say: <b>Ghufraanak (Your forgiveness)</b> — you ask Allah\'s forgiveness. Because you remembered His mercy that provided you food and gave you a healthy body."<br><br>The Bedouin was silent for a moment, then said in amazement: <b>"SubhanAllah! Even at this moment, the believer remembers his Lord?"</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'قالَ النَّبيُّ ﷺ وعَلى وَجهِهِ ابتِسامَةٌ نورانيَّة: <b>«اللهُ تَعالى مَعَكَ في كُلِّ لَحظَة — في الصَّلاةِ وفي البَيتِ وفي كُلِّ حال. والطَّهارَةُ شَطرُ الإيمانِ لأنَّها تُجَدِّدُ صِلَتَكَ بِه.»</b><br><br>عادَ الأَعرابيُّ إلى قَبيلَتِهِ وقَلبُهُ مَلأى. حِينَ سَأَلوهُ: «ماذا تَعَلَّمت؟» قالَ بِفَخر: «تَعَلَّمتُ أنَّ الإسلامَ دِينٌ يُكرِمُ الإنسانَ حتَّى في أَبسَطِ لَحَظاتِه!»<br><br>ومِن يَومَها، عَلَّمَ كُلَّ رَجُلٍ وامرَأَةٍ وطِفلٍ في قَبيلَتِهِ هذهِ الآداب — فَانتَشَرَ نورُ الطَّهارَةِ مِن عائِلَةٍ إلى أُخرى.',
               en:'The Prophet ﷺ said with a radiant smile on his face: <b>"Allah Most High is with you in every moment — in prayer, at home, and in every state. Purity is half of faith because it renews your connection to Him."</b><br><br>The Bedouin returned to his tribe with a full heart. When they asked him: "What did you learn?" he said proudly: "I learned that Islam is a religion that honours the human being even in the simplest of moments!"<br><br>From that day, he taught every man, woman, and child in his tribe these manners — and the light of purity spread from one family to the next.' } },
        { scene:'madinah', character:'📜',
          text:{ ar:'سَنَواتٌ مَرَّت، وصارَ ذلِكَ الأَعرابيُّ مِن أَشَدِّ النّاسِ حِرصاً على الطَّهارَة. كانَ يَقول لِأَولادِه: <b>«يا بَنِيَّ، لَم يُعَلِّمني النَّبيُّ ﷺ هذا لأنَّهُ أَمرٌ صَغير — بَل عَلَّمَنيه لأنَّهُ أَمرٌ عَظيم!»</b><br><br>الطَّهارَةُ تَبدَأُ مِن الجَسَدِ وتَصِلُ إلى القَلب. مَن تَطَهَّرَ ظاهِرُهُ، أَشرَقَ باطِنُه. ومَن أَحسَنَ مُعامَلَةَ جَسَدِه بِالطَّهارَة، أَحسَنَ مُعامَلَةَ النّاسِ بِالنَّظافَةِ والاحتِرام.',
               en:'Years passed, and that Bedouin became among the most careful of people about purity. He would say to his children: <b>"My sons, the Prophet ﷺ did not teach me this because it is a small matter — he taught me because it is a great matter!"</b><br><br>Purity begins with the body and reaches the heart. Whoever purifies his outward self, his inner self shines. And whoever treats his body well through purity, treats people well through cleanliness and respect.' } },
      ],
      quiz: [
        { q:{ar:'ماذا قالَ الأَعرابيُّ حينَ طَلَبَ التَّعليم؟', en:'What did the Bedouin say when asking for instruction?'},
          opts:[
            { t:{ar:'«عَلِّمني كَيفَ أُصَلِّي»', en:'"Teach me how to pray"'}, c:false },
            { t:{ar:'«قَومي لا يَعرِفونَ ما تَفعَلونَه بَعدَ قَضاءِ الحاجَة»', en:'"My people know nothing about what you do after relieving yourselves"'}, c:true },
            { t:{ar:'«أُريدُ أن أُسلِم»', en:'"I want to embrace Islam"'}, c:false },
          ] },
        { q:{ar:'ما الكَلِمَةُ الَّتي تُقالُ عِندَ الخُروجِ مِن الحَمّام؟', en:'What is the word said when leaving the bathroom?'},
          opts:[
            { t:{ar:'«بِسمِ الله»', en:'"Bismillah"'}, c:false },
            { t:{ar:'«الحَمدُ لِلّه»', en:'"Alhamdulillah"'}, c:false },
            { t:{ar:'«غُفرانَك»', en:'"Ghufraanak"'}, c:true },
          ] },
        { q:{ar:'لِماذا نَستَعيذُ بِاللهِ عِندَ دُخولِ الحَمَّام؟', en:'Why do we seek Allah\'s protection upon entering the bathroom?'},
          opts:[
            { t:{ar:'عادَةٌ قَديمَة', en:'An old habit'}, c:false },
            { t:{ar:'لِلحِمايَةِ مِن الشَّياطِين', en:'For protection from devils'}, c:true },
            { t:{ar:'لِلتَّركيز', en:'To concentrate'}, c:false },
          ] },
      ],
      moral: { ar:'النَّبيُّ ﷺ كَرَّمَنا بِتَعليمِ الطَّهارَة — فَكُلُّ لَحظَةٍ في حَياةِ المُؤمِنِ فُرصَةٌ لِلصِّلَةِ بِالله.', en:'The Prophet ﷺ honoured us by teaching purity — every moment in a believer\'s life is an opportunity to connect with Allah.' },
      badge: { icon:'💧', title:{ar:'وِسامُ الطَّهارَةِ الكامِلَة', en:'Badge of Complete Purity'} },
      reflect: [
        {ar:'كَيفَ يُمكِنُ لِآدابِ الحَمّامِ البَسيطَةِ أن تُقَوِّيَ صِلَتَنا بِالله؟', en:'How can simple bathroom manners strengthen our connection with Allah?'},
        {ar:'لَو كُنتَ مَكانَ الأَعرابيّ، ماذا كانَ أَكثَرُ شَيءٍ يُدهِشُك؟', en:'If you were the Bedouin, what would have amazed you most?'},
      ],
      didYouKnow: [
        {ar:'حَديثُ «الطَّهورُ شَطرُ الإيمان» رَواهُ مُسلِم (حديث ٢٢٣) وهو مِن أَشهَرِ الأَحاديثِ في بابِ الطَّهارَة. المَصدَر: islamweb.net/ar/', en:'The hadith "Purity is half of faith" was narrated by Muslim (hadith 223) and is among the most famous hadiths on purity. Source: islamweb.net/ar/'},
        {ar:'النَّبيُّ ﷺ لَم يَستَحِ مِن تَعليمِ هذهِ الآدابِ لأنَّها أَمورٌ دِينيَّةٌ شَرعيَّة — قالَهُ العُلَماءُ في شَرحِ أَحاديثِ الطَّهارَة. المَصدَر: dorar.net', en:'The Prophet ﷺ did not shy from teaching these manners because they are religious matters of the shari\'ah — as scholars stated in their commentary on purity hadiths. Source: dorar.net'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 2 — سَلمانُ الفارِسيُّ والمُشرِكون
       Source: dorar.net — قِصَّةُ سَلمانَ الفارِسيّ
       ────────────────────────────────────────── */
    {
      icon:'🌙', scene:'desert', character:'🧕',
      title: { ar:'سَلمانُ الفارِسيُّ يَرُدُّ على المُشرِكين', en:'Salman al-Farisi responds to the pagans' },
      pages: [
        { scene:'desert', character:'🧕',
          text:{ ar:'كانَ سَلمانُ الفارِسيُّ رضي الله عنه رَجُلاً قَطَعَ آلافَ الأَميالِ بَحثاً عن الحَقِّ — مِن بِلادِ فارِسَ البَعيدَةِ إلى جَزيرَةِ العَرَب. كانَ يَحمِلُ قَلباً يَتوقُ إلى اللهِ كَما يَتوقُ الظَّمآنُ إلى الماء.<br><br>مُنذُ اعتِناقِهِ الإسلامَ وصُحبَتِهِ لِلنَّبيِّ ﷺ، أَصبَحَ مِن أَعلَمِ الصَّحابَةِ بِأَحكامِ الدِّين — بَما فيها الطَّهارَةُ وآدابُ قَضاءِ الحاجَة. كانَ يَعلَمُ أنَّ هذا الدِّينَ شامِلٌ لِكُلِّ جانِبٍ مِن حَياةِ الإنسان.',
               en:'Salman al-Farisi رضي الله عنه was a man who had crossed thousands of miles in search of truth — from distant Persia to the Arabian Peninsula. He carried a heart that yearned for Allah as the thirsty yearn for water.<br><br>Since embracing Islam and becoming a companion of the Prophet ﷺ, he had become among the most knowledgeable Companions in religious rulings — including purity and bathroom manners. He knew that this religion encompassed every aspect of human life.' } },
        { scene:'desert', character:'😤',
          text:{ ar:'يَوماً ما، جاءَ إليهِ رَجُلٌ مِن المُشرِكينَ بِسُؤالٍ أَرادَ بِهِ الاستِهزاء. قالَ له بِنَبرَةٍ ساخِرَة، وحَولَهُ أَصحابُهُ يَضحَكون: <b>«أَلَيسَ مُحَمَّدٌ صاحِبُكُم قَد عَلَّمَكُم كُلَّ شَيء — حتَّى الخِراءَة؟!»</b><br><br>أَرادَ المُشرِكُ أن يُحرِجَ سَلمانَ ويُظهِرَ الإسلامَ دِيناً يُعنى بِالتَّفاهاتِ والتَّفاصيلِ الصَّغيرَة. ظَنَّ أنَّهُ وَجَدَ ثَغرَةً يَطعَنُ مِنها في هذا الدِّين!',
               en:'One day, a man from the polytheists came to him with a question intended as mockery. He said in a scoffing tone, his companions laughing around him: <b>"Did not Muhammad, your companion, teach you everything — even how to relieve yourselves?!"</b><br><br>The polytheist wanted to embarrass Salman and portray Islam as a religion concerned with trivial details. He thought he had found a gap through which to attack this faith!' } },
        { scene:'madinah', character:'🧕',
          text:{ ar:'رَفَعَ سَلمانُ رَأسَهُ وفي عَينَيهِ بَريقُ المَن يَملِكُ الجَوابَ الحَقّ. لَم يَغضَب ولَم يُشكِل عليه الأَمر. بَل قالَ بِهَدوءٍ واثِق وكَأَنَّهُ يَحمِلُ تاجاً:<br><br><b>«أَجَل! نَعَم — لَقَد عَلَّمَنا النَّبيُّ ﷺ ذلِك! نَهانا أن نَستَقبِلَ القِبلَةَ حالَ قَضاءِ الحاجَة، أَو أن نَستَنجيَ بِاليَمين، أَو أن يَكتَفيَ أَحَدُنا بِأَقَلَّ مِن ثَلاثَةِ أَحجار، وأن لا يَستَنجيَ بِرَجيعٍ أَو عَظم.»</b>',
               en:'Salman raised his head, a gleam in his eyes of one who possessed the true answer. He was not angry nor troubled. Instead, he said with calm confidence as though wearing a crown:<br><br><b>"Yes! Indeed — the Prophet ﷺ did teach us that! He forbade us from facing the qiblah while relieving ourselves, or performing istinja with the right hand, or using fewer than three stones, or using dung or bone for istinja."</b>' } },
        { scene:'garden', character:'✨',
          text:{ ar:'وَقَفَ المُشرِكُ في مَكانِهِ لا يَعرِفُ ماذا يَقول. كانَ يَنتَظِرُ انكِساراً فَوَجَدَ افتِخارًا. كانَ يَنتَظِرُ خَجَلاً فَوَجَدَ ثِقَة.<br><br>وتَدَرَّجَ الحَديثُ فَأَضافَ سَلمان: <b>«هل عِندَكَ دِينٌ يَعلَمُ بِأَدَقِّ أُمورِ حَياتِكَ ويُكرِمُكَ فيها جَميعاً؟ دِيننا لَم يَترُك صَغيرَةً ولا كَبيرَةً إلَّا وأَرشَدَنا فيها.»</b><br><br>ابتَسَمَ أَحَدُ أَصحابِ المُشرِكِ في سِرِّه — لأنَّ كَلامَ سَلمانَ لَمَسَ شَيئاً في قَلبِه لَم يَكُن يَتوَقَّعُه.',
               en:'The polytheist stood rooted to the spot, not knowing what to say. He had expected defeat and found pride. He had expected shame and found confidence.<br><br>As the conversation continued, Salman added: <b>"Do you have a religion that knows the finest details of your life and honours you in all of them? Our religion has left no small or great matter without guiding us in it."</b><br><br>One of the polytheist\'s companions smiled secretly — because Salman\'s words had touched something in his heart he had not expected.' } },
        { scene:'madinah', character:'📜',
          text:{ ar:'رَوى الصَّحابَةُ رضي الله عنهم هذهِ القِصَّةَ بِفَخرٍ لأنَّها تُظهِرُ كَمالَ هذا الدِّين. سَلمانُ لَم يَخجَل مِن تَعليمِ آدابِ الحَمّامِ — لأنَّهُ يَعرِفُ أنَّ الدِّينَ الكامِلَ يَشمَلُ كُلَّ جانِبٍ مِن حَياةِ الإنسان.<br><br><b>إذا أَراحَكَ دِينُكَ وأَرشَدَكَ حتَّى في أَبسَطِ تَفاصيلِ حَياتِك — فَهذا هو الدِّينُ الحَقيقيُّ الَّذي يَستَحِقُّ الفَخر!</b>',
               en:'The Companions رضي الله عنهم narrated this story with pride because it shows the perfection of this religion. Salman was not embarrassed to discuss bathroom manners — because he knew that a complete religion encompasses every aspect of human life.<br><br><b>If your religion comforts and guides you even in the simplest details of your life — then this is the true religion worthy of pride!</b>' } },
        { scene:'desert', character:'🌟',
          text:{ ar:'ووَصَلَت هذهِ القِصَّةُ إلى العُلَماءِ فِيما بَعد، وأَوردَها المُحَدِّثونَ في كُتُبِ الطَّهارَة. كُلَّما شَعَرَ مُسلِمٌ بِالحَرَجِ مِن تَعليمِ هذهِ الآداب، تَذَكَّرَ جَوابَ سَلمان: <b>«أَجَل، عَلَّمَنا ذلِك، وفَخرٌ لَنا بِذلِك!»</b><br><br>الإسلامُ دِينٌ كامِلٌ لا تَصغُرُ فيهِ حاجَة، ولا يُستَحيا فيهِ مِن عِلم.',
               en:'This story reached scholars afterwards and was recorded by hadith scholars in books of purification. Whenever a Muslim felt awkward about teaching these manners, they would remember Salman\'s response: <b>"Yes, he taught us that — and we are proud of it!"</b><br><br>Islam is a complete religion in which no need is too small, and no knowledge is a source of shame.' } },
      ],
      quiz: [
        { q:{ar:'مِن أَينَ جاءَ سَلمانُ الفارِسيّ؟', en:'Where did Salman al-Farisi come from?'},
          opts:[
            { t:{ar:'مِن مَكَّة', en:'From Makkah'}, c:false },
            { t:{ar:'مِن فارِس', en:'From Persia'}, c:true },
            { t:{ar:'مِن الشّام', en:'From Syria'}, c:false },
          ] },
        { q:{ar:'بِماذا سَأَلَ المُشرِكُ سَلمانَ ليَستَهزِئ؟', en:'What did the polytheist ask Salman to mock?'},
          opts:[
            { t:{ar:'عن الصَّلاة', en:'About prayer'}, c:false },
            { t:{ar:'عن تَعليمِ النَّبيِّ لِآدابِ قَضاءِ الحاجَة', en:'About the Prophet teaching bathroom manners'}, c:true },
            { t:{ar:'عن الصِّيام', en:'About fasting'}, c:false },
          ] },
        { q:{ar:'كَيفَ رَدَّ سَلمانُ على الاستِهزاء؟', en:'How did Salman respond to the mockery?'},
          opts:[
            { t:{ar:'بِغَضَبٍ وانزِعاج', en:'With anger and upset'}, c:false },
            { t:{ar:'بِهَدوءٍ وفَخرٍ بِدينِه', en:'With calm and pride in his religion'}, c:true },
            { t:{ar:'بِالصَّمت', en:'With silence'}, c:false },
          ] },
      ],
      moral: { ar:'الإسلامُ دِينٌ كامِلٌ يُرشِدُنا في كُلِّ أَمرٍ صَغيرٍ وكَبير — ولا حَرَجَ مِن تَعَلُّمِ هذهِ الآدابِ والفَخرِ بِها.', en:'Islam is a complete religion that guides us in every small and great matter — there is no shame in learning these manners and being proud of them.' },
      badge: { icon:'🌙', title:{ar:'وِسامُ الفَخرِ بِالإسلام', en:'Badge of Pride in Islam'} },
      reflect: [
        {ar:'لَماذا يَجِبُ أن نَفتَخِرَ بِآدابِ الإسلامِ الشَّامِلَة وليسَ الخَجَلِ مِنها؟', en:'Why should we be proud of Islam\'s comprehensive manners rather than ashamed of them?'},
        {ar:'كَيفَ تَرُدُّ بِأَدَبٍ على مَن يَستَهزِئُ بِحُكمٍ مِن أَحكامِ الدِّين؟', en:'How do you politely respond to someone who mocks a ruling of the religion?'},
      ],
      didYouKnow: [
        {ar:'هذهِ القِصَّةُ رَواها الإمامُ مُسلِمٌ في صَحيحِه (حديث ٢٦٢) وهي مِن أَشهَرِ الأَدِلَّةِ على كَمالِ الشَّريعَة. المَصدَر: dorar.net', en:'This story was narrated by Imam Muslim in his Sahih (hadith 262) and is among the most famous evidence of the completeness of Islamic law. Source: dorar.net'},
        {ar:'سَلمانُ الفارِسيُّ رضي الله عنه كانَ مِن أَعلَمِ الصَّحابَةِ وأَكثَرِهِم رِحلَةً في طَلَبِ الحَقّ — سِيرَتُهُ في: سير أعلام النبلاء للذهبي — ج١', en:'Salman al-Farisi رضي الله عنه was among the most learned and well-traveled Companions in seeking truth — his biography in: Siyar A\'lam al-Nubala by al-Dhahabi, vol. 1'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 3 — عبدالله بن مسعود ورِعايَةُ الخَلاء
       Source: سير أعلام النبلاء — الذهبي
       ────────────────────────────────────────── */
    {
      icon:'🌿', scene:'garden', character:'📖',
      title: { ar:'ابنُ مَسعودٍ والحِجارَةُ الثَّلاثَة', en:'Ibn Mas\'ud and the three stones' },
      pages: [
        { scene:'garden', character:'📖',
          text:{ ar:'عَبدُ اللهِ بنُ مَسعودٍ رضي الله عنه — رَجُلٌ مِن أَقرَبِ الصَّحابَةِ إلى النَّبيِّ ﷺ. كانَ يَخدُمُهُ ويُلازِمُهُ ويَتَعَلَّمُ مِنهُ كُلَّ شَيء، حتَّى غَدا مِن أَعلَمِ النّاسِ بِسُنَّتِه ﷺ.<br><br>كانَ ابنُ مَسعودٍ قَصيرَ القامَةِ نَحيلَ الجِسم، لَكِنَّ عِلمَهُ كانَ أَطولَ مِن الجِبال. الصَّحابَةُ كانوا يَضحَكونَ حِينَ رَأَوا سيقانَهُ الرَّفيعَةَ خِلالَ شَجَرِ الأَراك — لَكِنَّ النَّبيَّ ﷺ قالَ: <b>«هي أَثقَلُ في الميزانِ مِن جَبَلِ أُحُد!»</b>',
               en:'Abdullah ibn Mas\'ud رضي الله عنه — a man from the closest Companions to the Prophet ﷺ. He served him, accompanied him, and learned everything from him until he became among the most knowledgeable people about his ﷺ Sunnah.<br><br>Ibn Mas\'ud was short of stature and slight of build, but his knowledge was taller than mountains. The Companions would laugh when they saw his thin legs amid the arak tree — but the Prophet ﷺ said: <b>"They are heavier on the Scale than Mount Uhud!"</b>' } },
        { scene:'desert', character:'📖',
          text:{ ar:'يَوماً ما، طَلَبَ النَّبيُّ ﷺ مِن ابنِ مَسعودٍ أن يَأتيَهُ بِثَلاثَةِ أَحجارٍ لِيَستَنجيَ بِها. انطَلَقَ ابنُ مَسعودٍ بِسُرعَةٍ يَبحَثُ في الأَرضِ المُحيطَة، عَينَيهِ تُمَشِّطانِ الحِجارَةَ بِعِنايَة.<br><br>أَمسَكَ حَجَرَين جَيِّدَين، ثُمَّ رَأَى شَيئاً أُثارَ اهتِمامَه: رَوثَةٌ — بَعرُ حَيوان — ناعِمٌ ومُستَدير. قالَ في نَفسِه: <b>«هذا لَيِّنٌ جَيِّد — أَلَيسَ بِمَنزِلَةِ الحَجَر؟»</b> وأَمسَكَه.',
               en:'One day, the Prophet ﷺ asked Ibn Mas\'ud to bring him three stones for istinja. Ibn Mas\'ud set off quickly, searching the surrounding earth, his eyes carefully combing through the stones.<br><br>He picked up two good stones, then saw something that caught his attention: dung — round and smooth animal droppings. He thought to himself: <b>"This is soft and good — is it not like a stone?"</b> And he picked it up.' } },
        { scene:'madinah', character:'📖',
          text:{ ar:'عادَ ابنُ مَسعودٍ يَحمِلُ الحَجَرَينِ والرَّوثَة. مَدَّ يَدَهُ بِأَمانَةٍ لِيُعطيَ النَّبيَّ ﷺ ما جَمَعَه. نَظَرَ النَّبيُّ ﷺ إلى ما في يَدِهِ، فَأَخَذَ الحَجَرَينِ وتَرَكَ الرَّوثَة.<br><br>ثُمَّ قالَ له بِصَوتٍ هادِئٍ حَنون: <b>«هذا رِكسٌ — إنَّها رِجسٌ لا تَنفَع»</b> — أَيِ النَّجاسَة. لَم يُوَبِّخهُ ولَم يُغضَب، بَل عَلَّمَه بِرِفق.',
               en:'Ibn Mas\'ud returned carrying the two stones and the dung. He extended his hand honestly to give the Prophet ﷺ what he had gathered. The Prophet ﷺ looked at what was in his hand, took the two stones, and left the dung.<br><br>Then he said with a quiet tender voice: <b>"This is waste — it is filth and is of no use"</b> — meaning impurity. He did not rebuke him or grow angry, but taught him gently.' },
          choice:{ q:{ar:'لِماذا رَفَضَ النَّبيُّ ﷺ الرَّوثَة؟',en:'Why did the Prophet ﷺ reject the dung?'},
            opts:[
              { t:{ar:'لأنَّها قَبيحَةُ الشَّكل.', en:'Because it looks ugly.'},c:false,exp:{ar:'لا — السَّبَبُ هو أنَّها نَجِسَةٌ لا تُزيلُ النَّجاسَة!',en:'No — the reason is that it is impure and cannot remove impurity!'} },
              { t:{ar:'لأنَّها نَجِسَةٌ لا تُطَهِّر.', en:'Because it is impure and cannot purify.'},c:true,exp:{ar:'نَعَم! النَّجاسَةُ لا تُزيلُ النَّجاسَة — هذا مِن حِكمَةِ الاستِنجاء!',en:'Yes! Impurity cannot remove impurity — this is part of the wisdom of istinja!'} },
              { t:{ar:'لأنَّها صَغيرَةٌ جِدّاً.', en:'Because it is too small.'},c:false,exp:{ar:'الحَجمُ لَيسَ المُشكِلَة — المُشكِلَةُ أنَّها نَجاسَة!',en:'Size is not the issue — the issue is that it is impure!'} },
            ] } },
        { scene:'garden', character:'📚',
          text:{ ar:'تَعَلَّمَ ابنُ مَسعودٍ هذا الدَّرسَ وحَفِظَهُ وعَلَّمَهُ لِمَن جاءَ بَعدَه. أَورَدَ هذهِ القِصَّةَ الإمامُ البُخاري، وصارَت مَرجِعاً لِعُلَماءِ الطَّهارَةِ على مَرِّ العُصور.<br><br>كانَ ابنُ مَسعودٍ يَقول لِطُلَّابِه: <b>«اسأَل واستَفسِر ولا تَحتَجِز السُّؤالَ — فالجَهلُ يُذهِبُهُ السُّؤالُ، والعِلمُ يَبقى.»</b> كانَ قُدوَةً في التَّعَلُّمِ بِلا كَبرياء.',
               en:'Ibn Mas\'ud learned this lesson, preserved it, and taught it to those who came after him. Imam al-Bukhari recorded this story and it became a reference for scholars of purification across the ages.<br><br>Ibn Mas\'ud would say to his students: <b>"Ask and inquire — do not hold back your question. Ignorance is removed by asking, and knowledge endures."</b> He was a model of learning without arrogance.' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'وأَصبَحَت قِصَّةُ ابنِ مَسعودٍ دَرساً خالِداً في كُتُبِ العِلم: أنَّ الاستِنجاءَ بِالعَظمِ والرَّوثِ لا يَجوز — لِأنَّ العَظمَ زادُ إخوانِنا الجِنِّ المُسلِمين، والرَّوثَ نَجاسَة.<br><br><b>كُلُّ حُكمٍ في الإسلامِ لَهُ حِكمَة — حتَّى الحِجارَةُ الثَّلاثُ الصَّغيرَة تُعَلِّمُنا الطَّهارَةَ والتَّفكيرَ والتَّساؤل!</b>',
               en:'And the story of Ibn Mas\'ud became an eternal lesson in books of knowledge: that istinja with bones and dung is not permissible — because bones are provisions for our Muslim jinn brothers, and dung is impurity.<br><br><b>Every ruling in Islam has wisdom — even the three small stones teach us purity, thinking, and questioning!</b>' } },
        { scene:'desert', character:'💎',
          text:{ ar:'سِيرَةُ ابنِ مَسعودٍ رضي الله عنه حافِلَةٌ بِهذهِ الدُّروس. كانَ صاحِبَ النَّبيِّ ﷺ في أَسفارِهِ وإقامَتِه، وكانَ يَتَعَلَّمُ حتَّى في المَواقِفِ الَّتي يَظُنُّها النّاسُ عاديَّة.<br><br>وهذا هو سِرُّ عُلَمائِنا: <b>لَم يُفَرِّقوا بَينَ عِلمٍ صَغيرٍ وعِلمٍ كَبير — كُلُّ ما عَلَّمَهُ النَّبيُّ ﷺ هو مَعدِنٌ ثَمين!</b>',
               en:'The biography of Ibn Mas\'ud رضي الله عنه is filled with such lessons. He was the Prophet\'s ﷺ companion in his travels and residence, and he learned even in situations people would consider ordinary.<br><br>And this is the secret of our scholars: <b>They did not distinguish between small knowledge and great knowledge — everything the Prophet ﷺ taught is a precious treasure!</b>' } },
      ],
      quiz: [
        { q:{ar:'ماذا أَحضَرَ ابنُ مَسعودٍ بِالإضافَةِ إلى الحَجَرَين؟', en:'What did Ibn Mas\'ud bring in addition to two stones?'},
          opts:[
            { t:{ar:'قِطعَةَ خَشَب', en:'A piece of wood'}, c:false },
            { t:{ar:'رَوثَةَ حَيوان', en:'Animal dung'}, c:true },
            { t:{ar:'وَرَقَة شَجَر', en:'A leaf'}, c:false },
          ] },
        { q:{ar:'لِماذا لا يَجوزُ الاستِنجاءُ بِالعَظم؟', en:'Why is it not permissible to use bone for istinja?'},
          opts:[
            { t:{ar:'لِأنَّهُ صَعبٌ في الاستِخدام', en:'Because it is difficult to use'}, c:false },
            { t:{ar:'لِأنَّهُ زادُ الجِنِّ المُسلِمين', en:'Because it is provisions for Muslim jinn'}, c:true },
            { t:{ar:'لِأنَّهُ غالٍ', en:'Because it is valuable'}, c:false },
          ] },
        { q:{ar:'كَيفَ تَعامَلَ النَّبيُّ ﷺ مَعَ خَطَأِ ابنِ مَسعود؟', en:'How did the Prophet ﷺ deal with Ibn Mas\'ud\'s mistake?'},
          opts:[
            { t:{ar:'بِالغَضَبِ والعِتاب', en:'With anger and reproach'}, c:false },
            { t:{ar:'بِالرِّفقِ والتَّعليم', en:'With gentleness and teaching'}, c:true },
            { t:{ar:'بِالصَّمتِ والتَّجاهُل', en:'With silence and ignoring'}, c:false },
          ] },
      ],
      moral: { ar:'كُلُّ تَعليمِ النَّبيِّ ﷺ — صَغيرُهُ وكَبيرُهُ — نورٌ يَهدينا ويَحمينا. التَّساؤلُ والتَّعَلُّمُ بِتَواضُعٍ طَريقُ العِلم.', en:'Every teaching of the Prophet ﷺ — small and great — is a light that guides and protects us. Asking questions and learning humbly is the path of knowledge.' },
      badge: { icon:'🌿', title:{ar:'وِسامُ المُتَعَلِّمِ المُتَواضِع', en:'Badge of the Humble Learner'} },
      reflect: [
        {ar:'كَيفَ تَتَعامَلُ حينَ تُخطِئُ في أَمرٍ كُنتَ تَظُنُّهُ صَواباً؟', en:'How do you react when you make a mistake in something you thought was right?'},
        {ar:'لِماذا التَّساؤلُ عن كُلِّ شَيءٍ — حتَّى الأُمورِ البَسيطَة — مِن صِفاتِ العالِم؟', en:'Why is questioning everything — even simple matters — a quality of the scholar?'},
      ],
      didYouKnow: [
        {ar:'هذهِ القِصَّةُ رَواها البُخاري في صَحيحِهِ وتُوجَدُ في كُتُبِ الطَّهارَة. ذَكَرَها الذَّهَبيُّ في سِيرَةِ ابنِ مَسعودٍ: سير أعلام النبلاء — ج١ ص٤٦١', en:'This story was narrated by al-Bukhari in his Sahih and appears in books of purification. Al-Dhahabi mentioned it in Ibn Mas\'ud\'s biography: Siyar A\'lam al-Nubala — vol. 1 p. 461'},
        {ar:'قالَ النَّبيُّ ﷺ عن ابنِ مَسعود: «تَمَسَّكوا بِعَهدِ ابنِ أُمِّ عَبد» — وكانَ يَقصُدُ حِفظَهُ لِلسُّنَّة. المَصدَر: dorar.net', en:'The Prophet ﷺ said about Ibn Mas\'ud: "Hold fast to the covenant of Ibn Umm Abd" — meaning his preservation of the Sunnah. Source: dorar.net'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 4 — الطِّفلُ الَّذي أَنجى قَريَتَهُ
       Source: islamweb.net/ar/ — موضوع النَّظافَةِ والطَّهارَة
       ────────────────────────────────────────── */
    {
      icon:'🏡', scene:'madinah', character:'👦',
      title: { ar:'أُمامَةُ وسِرُّ البِئرِ النَّظيفَة', en:'Usamah and the secret of the clean well' },
      pages: [
        { scene:'madinah', character:'👦',
          text:{ ar:'في قَريَةٍ صَغيرَةٍ على أَطرافِ المَدينَةِ المُنَوَّرَة، كانَ يَعيشُ غُلامٌ اسمُهُ أُسامَة. كانَ أُسامَةُ ابنَ عَشرِ سَنَواتٍ لا أَكثَر، لَكِنَّهُ كانَ يُشبِهُ الجَبَلَ في ثَباتِ العادَات.<br><br>كُلَّ صَباح، كانَ يَستَيقِظُ قَبلَ شُروقِ الشَّمس، يُقبِلُ على الوُضوءِ، ويَقرَأُ الدُّعاءَ بِصَوتٍ يَمشي إليه والنَّعاسُ لا يَزالُ في عَينَيه. أَبوهُ عَلَّمَهُ: <b>«الطَّاهِرُ في بَيتِه، طاهِرٌ في كُلِّ مَكان.»</b>',
               en:'In a small village on the outskirts of Madinah, there lived a boy named Usamah. Usamah was no more than ten years old, but he was like a mountain in the steadiness of his habits.<br><br>Every morning, he would wake before sunrise, come eagerly to his wudu, and recite the dua in a voice walking toward it while sleep still lingered in his eyes. His father had taught him: <b>"The pure one in his home is pure everywhere."</b>' } },
        { scene:'garden', character:'👦',
          text:{ ar:'بِالقُربِ مِن قَريَتِهِم كانَ هُناكَ بِئرٌ عامَّةٌ يَشرَبُ مِنها أَهلُ القَريَة. يَوماً ما، لاحَظَ أُسامَةُ شَيئاً أَزعَجَهُ كَثيراً: رَأى أَحَدَ الرِّجالِ يَقضي حاجَتَهُ قَريباً جِدّاً مِن البِئر، مُتَجاهِلاً ما عَلَّمَهُ الدِّينُ عن إِيذاءِ النّاسِ بِالنَّجاسَة.<br><br>تَضَيَّقَ صَدرُ أُسامَةَ وهو يَرى ذلِك. لَكِنَّهُ كانَ مُجَرَّدَ طِفلٍ صَغير — هل يَستَطيعُ أن يَفعَلَ شَيئاً؟',
               en:'Near their village there was a public well the village people drank from. One day, Usamah noticed something that deeply troubled him: he saw a man relieving himself very close to the well, ignoring what religion taught about harming people with filth.<br><br>Usamah felt distressed watching this. But he was just a small child — could he do anything?' } },
        { scene:'madinah', character:'👦',
          text:{ ar:'في تِلكَ اللَّيلَة، لَم يَستَطِع أُسامَةُ النَّوم. كانَ يَتَقَلَّبُ في فِراشِه وكَلامُ أَبيهِ يَدورُ في رَأسِه: <b>«النَّبيُّ ﷺ قالَ: اتَّقوا اللَّاعِنَين — الَّذي يَتَخَلَّى في طَريقِ النَّاسِ أَو في ظِلِّهِم.»</b><br><br>وتَذَكَّرَ أيضاً: «مَن أَذى مُسلِماً بِنَجاسَةٍ في مَشرَبِه فَقَد ظَلَمَه.» قَرَّرَ أُسامَةُ: غَداً سيَفعَلُ شَيئاً. لَن يَسكُت!',
               en:'That night, Usamah could not sleep. He tossed and turned in his bed while his father\'s words circled in his mind: <b>"The Prophet ﷺ said: Beware of the two things that bring curses — relieving oneself on people\'s paths or in their shade."</b><br><br>He also remembered: "Whoever harms a Muslim with filth at their drinking source has wronged them." Usamah decided: tomorrow he would do something. He would not stay silent!' },
          choice:{ q:{ar:'ما أَفضَلُ طَريقَةٍ لِمُعالَجَةِ هذا الأَمر؟',en:'What is the best way to deal with this matter?'},
            opts:[
              { t:{ar:'أَصرُخُ على الرَّجُلِ وأُهينُه.', en:'I shout at the man and insult him.'},c:false,exp:{ar:'الإهانَةُ لا تُصلِح — النُّصحُ بِأَدَبٍ أَحسَن!',en:'Insults do not fix matters — gentle advice is better!'} },
              { t:{ar:'أَطلُبُ مِن أَبي أن يُكَلِّمَهُ بِأَدَب، وأُنَبِّهُ الجيرانَ.', en:'I ask my father to speak with him politely and warn the neighbours.'},c:true,exp:{ar:'نَعَم! الأَدَبُ في النُّصحِ والتَّعاوُنُ مَعَ الكِبارِ هو الحَلُّ الصَّحيح!',en:'Yes! Polite advice and cooperation with elders is the right solution!'} },
              { t:{ar:'أَتَجاهَلُ الأَمر ولا أَتَدَخَّل.', en:'I ignore the matter and don\'t interfere.'},c:false,exp:{ar:'التَّجاهُلُ يُديمُ الأَذى — لَكِنَّ التَّصَرُّفَ يَكونُ بِحِكمَة!',en:'Ignoring it perpetuates harm — but action must be with wisdom!'} },
            ] } },
        { scene:'madinah', character:'👨',
          text:{ ar:'في الصَّباحِ الباكِر، ذَهَبَ أُسامَةُ إلى أَبيهِ وشَرَحَ له ما رَآه. أَنصَتَ الأَبُ بِاهتِمام وفي عَينَيهِ بَريقُ فَخر. ثُمَّ ذَهَبَ الأَبُ إلى الرَّجُلِ وتَكَلَّمَ مَعَهُ بِهُدوءٍ وحِكمَة، وذَكَّرَهُ بِنَهيِ النَّبيِّ ﷺ عن قَضاءِ الحاجَةِ قُربَ مَواضِعِ الماء.<br><br>اعتَذَرَ الرَّجُلُ وأَصلَحَ تَصَرُّفَه. ثُمَّ عَلَّمَ أَبو أُسامَةَ أَهلَ القَريَةِ كُلَّهُم هذهِ الآداب، وابتَعَدوا عن مَواضِعِ الأَذى.',
               en:'Early in the morning, Usamah went to his father and explained what he had seen. His father listened attentively, a gleam of pride in his eyes. Then his father went to the man and spoke with him calmly and wisely, reminding him of the Prophet\'s ﷺ prohibition against relieving oneself near water sources.<br><br>The man apologised and corrected his behaviour. Then Usamah\'s father taught the entire village these manners, and they moved away from places of harm.' } },
        { scene:'garden', character:'✨',
          text:{ ar:'بَعدَ أُسبوعَين، جاءَ رَجُلٌ غَريبٌ مِن بَعيد، شَفَتاهُ جافَّتانِ وعَينَيهِ تَبحَثانِ عن الماء. وَصَلَ إلى البِئرِ ووَجَدَها نَظيفَةً — لَم يَجِد حَولَها أَذىً ولا نَجاسَة. شَرِبَ وشَكَرَ اللهَ بِحَمدٍ مَلَأَ السَّماء.<br><br>نَظَرَ إلى طِفلٍ صَغيرٍ كانَ يَقفُ قَريباً وقالَ: <b>«بارَكَ اللهُ في أَهلِ هذهِ القَرية — بِئرُهُم نَظيفَةٌ وطاهِرَة! إنَّ نَظافَةَ المَاءِ نَظافَةٌ لِلقُلوب!»</b>',
               en:'Two weeks later, a stranger arrived from afar, his lips dry and his eyes searching for water. He reached the well and found it clean — he found no harm or filth around it. He drank and thanked Allah with praise that filled the sky.<br><br>He looked at a small child standing nearby and said: <b>"May Allah bless the people of this village — their well is clean and pure! The cleanliness of water is cleanliness of hearts!"</b>' } },
        { scene:'madinah', character:'👦',
          text:{ ar:'سَمِعَ أُسامَةُ هذا الكَلامَ وفي قَلبِهِ دِفءٌ لا يُوصَف. لَم يَقُل شَيئاً — بَل اكتَفى بِالابتِسامَة.<br><br>في تِلكَ اللَّيلَة، صَلَّى رَكعَتَين وقالَ: <b>«الحَمدُ للهِ — أَفرَحُني اليَومَ أنَّ آدابَ الطَّهارَةِ الَّتي تَعَلَّمتُها نَفَعَت قَريَتي كُلَّها!»</b><br><br>وهكَذا، مِن طِفلٍ صَغيرٍ تَعَلَّمَ آدابَ قَضاءِ الحاجَة — انتَشَرَ الخَيرُ ووُقيَ النّاسُ مِن الأَذى، وشَرِبَ المُسافِرُ الغَريبُ ماءً طاهِراً بِفَضلِ اللهِ ثُمَّ بِهِمَّةِ طِفل.',
               en:'Usamah heard these words and felt an indescribable warmth in his heart. He said nothing — he simply smiled.<br><br>That night, he prayed two rak\'ahs and said: <b>"Alhamdulillah — today I am gladdened that the manners of purity I learned benefited my entire village!"</b><br><br>And so, from a small child who learned bathroom manners — goodness spread, people were protected from harm, and a travelling stranger drank pure water by Allah\'s grace and then by a child\'s determination.' } },
      ],
      quiz: [
        { q:{ar:'ما الَّذي لاحَظَه أُسامَةُ عِندَ البِئر؟', en:'What did Usamah notice near the well?'},
          opts:[
            { t:{ar:'رَجُلٌ يُلَوِّثُ مَكانَ الماء', en:'A man polluting the water area'}, c:true },
            { t:{ar:'البِئرُ فارِغَة', en:'The well was empty'}, c:false },
            { t:{ar:'طِفلٌ يَلعَب', en:'A child playing'}, c:false },
          ] },
        { q:{ar:'مَن ذَهَبَ لِيُصلِحَ الأَمر؟', en:'Who went to fix the matter?'},
          opts:[
            { t:{ar:'أُسامَةُ وحدَه', en:'Usamah alone'}, c:false },
            { t:{ar:'أَبو أُسامَةَ بِطَلَبٍ مِن أُسامَة', en:'Usamah\'s father at Usamah\'s request'}, c:true },
            { t:{ar:'الجيرانُ', en:'The neighbours'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ المُسافِرُ الغَريبُ عِندَما وَجَدَ البِئرَ نَظيفَة؟', en:'What did the travelling stranger say when he found the well clean?'},
          opts:[
            { t:{ar:'«بارَكَ اللهُ في أَهلِ هذهِ القَرية»', en:'"May Allah bless the people of this village"'}, c:true },
            { t:{ar:'لَم يَقُل شَيئاً', en:'He said nothing'}, c:false },
            { t:{ar:'«هذا الماءُ لَيسَ طازَجاً»', en:'"This water is not fresh"'}, c:false },
          ] },
      ],
      moral: { ar:'آدابُ الطَّهارَةِ لَيسَت لِنَفسِكَ فَقَط — بَل هي خِدمَةٌ لِكُلِّ مَن حَولَك. حينَ تَتَعَلَّمُها وتُطَبِّقُها تَحمي الجَميع.', en:'Purity manners are not just for yourself — they are a service to all around you. When you learn and apply them, you protect everyone.' },
      badge: { icon:'🏡', title:{ar:'وِسامُ حامي البيئةِ الطّاهِرَة', en:'Badge of the Pure Environment Guardian'} },
      reflect: [
        {ar:'كَيفَ يُمكِنُ لآدابِ الطَّهارَةِ الفَرديَّةِ أن تَحمي المُجتَمَعَ كُلَّه؟', en:'How can individual purity manners protect the entire community?'},
        {ar:'لَو لاحَظتَ أَحَداً يُلَوِّثُ مَكاناً عامّاً، كَيفَ تَتَصَرَّف بِحِكمَةٍ وأَدَب؟', en:'If you noticed someone polluting a public place, how would you act with wisdom and respect?'},
      ],
      didYouKnow: [
        {ar:'حَديثُ «اتَّقوا اللَّاعِنَين» رَواهُ مُسلِم (حديث ٢٦٩) وهو أَساسُ حِمايَةِ البيئَةِ مِن التَّلَوُّثِ في الإسلام. المَصدَر: islamweb.net/ar/', en:'The hadith "Beware of the two things that bring curses" was narrated by Muslim (hadith 269) and is the basis for protecting the environment from pollution in Islam. Source: islamweb.net/ar/'},
        {ar:'الفِقهُ الإسلاميُّ يَمنَعُ قَضاءَ الحاجَةِ في المِياهِ الرّاكِدَةِ وعِندَ مَوارِدِ الماء — وهذا مِن أَسبَقِ القَوانينِ البيئيَّةِ في التّاريخ. المَصدَر: dorar.net', en:'Islamic jurisprudence forbids relieving oneself in still waters and near water sources — making it among the earliest environmental laws in history. Source: dorar.net'},
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text: { ar:'﴿ إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ ﴾',
                en:'"Indeed Allah loves those who repent and loves those who purify themselves."' },
        ref: { ar:'[سورة البقرة: ٢٢٢]', en:'[Surah Al-Baqarah: 222]' } },
      { text: { ar:'﴿ فِيهِ رِجَالٌ يُحِبُّونَ أَن يَتَطَهَّرُوا ۚ وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ ﴾',
                en:'"In it are men who love to purify themselves — and Allah loves those who purify themselves."' },
        ref: { ar:'[سورة التوبة: ١٠٨]', en:'[Surah At-Tawbah: 108]' } },
      { text: { ar:'﴿ وَثِيَابَكَ فَطَهِّرْ ﴾',
                en:'"And your garments purify."' },
        ref: { ar:'[سورة المدَّثِّر: ٤]', en:'[Surah Al-Muddaththir: 4]' } },
    ],
    hadiths: [
      { text: { ar:'«الطَّهورُ شَطرُ الإيمان»',
                en:'"Purity is half of faith."' },
        ref: { ar:'[رواه مسلم — حديث ٢٢٣]', en:'[Sahih Muslim — 223]' } },
      { text: { ar:'«اتَّقوا اللَّاعِنَين: الَّذي يَتَخَلَّى في طَريقِ النّاسِ أَو في ظِلِّهِم»',
                en:'"Beware of the two things that bring curses: relieving oneself on people\'s paths or in their shade."' },
        ref: { ar:'[رواه مسلم — حديث ٢٦٩]', en:'[Sahih Muslim — 269]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ الطَّهارَة', en:'Pledge of purity' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أَقرَأَ دُعاءَ الدُّخولِ والخُروجِ في كُلِّ مَرَّة', en:'I pledge to Allah to say the entry and exit duas every single time' },
        { ar:'أُعاهِدُ اللهَ أن أُسبِغَ الطَّهارَةَ وأَغسِلَ يَدَيَّ بِعِناية', en:'I pledge to Allah to perform complete purification and wash my hands carefully' },
        { ar:'أُعاهِدُ اللهَ أن أَتَجَنَّبَ إيذاءَ النّاسِ بِالنَّجاسَةِ في الأَماكِنِ العامَّة', en:'I pledge to Allah to avoid harming people with filth in public places' },
        { ar:'أُعاهِدُ اللهَ أن أَترُكَ الحَمّامَ نَظيفاً لِمَن يَأتي بَعدي', en:'I pledge to Allah to leave the bathroom clean for whoever comes after me' },
      ],
      dua: { ar:'اللَّهُمَّ طَهِّر قَلبي كَما تُطَهِّرُ الثَّوبَ الأَبيَضَ مِن الدَّنَس، واجعَلني مِن المُتَطَهِّرينَ الَّذينَ تُحِبُّهُم',
             en:'O Allah, purify my heart as You purify the white garment from stain, and make me among the purified whom You love' },
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
            wordBank: { ar:['الطَّهارَة','اليُسرى','اليُمنى','الاستِنجاء','الخُبث','غُفرانَك','الإيمان','الظِّل'], en:['purity','left','right','istinja','evil','forgiveness','faith','shade'] },
            items: [
              { prefix:{ar:'الطَّهورُ شَطرُ', en:'Purity is half of'}, answer:{ar:'الإيمان', en:'faith'}, suffix:{ar:'كَما قالَ النَّبيُّ ﷺ', en:'as the Prophet ﷺ said'} },
              { prefix:{ar:'نَدخُلُ الحَمّامَ بِالرِّجلِ', en:'We enter the bathroom with the'}, answer:{ar:'اليُسرى', en:'left'}, suffix:{ar:'أوَّلاً', en:'foot first'} },
              { prefix:{ar:'نَخرُجُ مِن الحَمّامِ بِالرِّجلِ', en:'We exit the bathroom with the'}, answer:{ar:'اليُمنى', en:'right'}, suffix:{ar:'أوَّلاً', en:'foot first'} },
              { prefix:{ar:'نَقولُ عِندَ الخُروجِ مِن الحَمّام', en:'We say when leaving the bathroom'}, answer:{ar:'غُفرانَك', en:'forgiveness'}, suffix:{ar:'أيِ: اللَّهُمَّ اغفِر لي', en:'meaning: O Allah forgive me'} },
              { prefix:{ar:'نَدعو بِالحِمايَةِ مِن', en:'We seek protection from'}, answer:{ar:'الخُبث', en:'evil'}, suffix:{ar:'والخَبائِثِ حينَ نَدخُل', en:'ones when entering'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'نَدخُلُ الحَمّامَ بِالرِّجلِ اليُمنى', en:'We enter the bathroom with the right foot'}, t:false },
              { q:{ar:'الطَّهارَةُ شَطرُ الإيمان', en:'Purity is half of faith'}, t:true },
              { q:{ar:'يَجوزُ الكَلامُ كَثيراً في الحَمّام', en:'It is fine to talk a lot in the bathroom'}, t:false },
              { q:{ar:'نَغسِلُ أَيدِيَنا بَعدَ الخُروجِ مِن الحَمّام', en:'We wash our hands after leaving the bathroom'}, t:true },
              { q:{ar:'يَجوزُ الاستِنجاءُ بِالعَظم', en:'It is permissible to use bone for istinja'}, t:false },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما الَّذي نَقولُهُ حينَ نَدخُلُ الحَمّام؟', en:'What do we say when entering the bathroom?'},
                opts:[
                  { t:{ar:'بِسمِ اللهِ الرَّحمنِ الرَّحيم', en:'Bismillah ir-Rahman ir-Raheem'}, c:false },
                  { t:{ar:'اللَّهُمَّ إنِّي أَعوذُ بِكَ مِن الخُبثِ والخَبائِث', en:'O Allah, I seek refuge in You from evil and evil ones'}, c:true },
                  { t:{ar:'الحَمدُ للهِ', en:'Alhamdulillah'}, c:false }
                ] },
              { q:{ar:'ما الَّذي نَقولُهُ حينَ نَخرُجُ مِن الحَمّام؟', en:'What do we say when leaving the bathroom?'},
                opts:[
                  { t:{ar:'السَّلامُ عليكُم', en:'Assalamu alaykum'}, c:false },
                  { t:{ar:'غُفرانَك', en:'Ghufraanak'}, c:true },
                  { t:{ar:'اللهُ أَكبَر', en:'Allahu Akbar'}, c:false }
                ] },
              { q:{ar:'مِمَّ نَهانا النَّبيُّ ﷺ في مَواضِعِ قَضاءِ الحاجَة؟', en:'What did the Prophet ﷺ forbid regarding where to relieve oneself?'},
                opts:[
                  { t:{ar:'الابتِعادُ عن النَّاس', en:'Moving away from people'}, c:false },
                  { t:{ar:'قَضاءُ الحاجَةِ في طَريقِ النّاسِ وظِلِّهِم', en:'Relieving oneself on people\'s paths or in their shade'}, c:true },
                  { t:{ar:'الدُّعاءُ', en:'Making dua'}, c:false }
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
              { a:{ar:'دُعاءُ الدُّخول', en:'Entry dua'}, b:{ar:'اللَّهُمَّ إنِّي أَعوذُ...', en:'O Allah, I seek refuge...'} },
              { a:{ar:'دُعاءُ الخُروج', en:'Exit dua'}, b:{ar:'غُفرانَك', en:'Ghufraanak'} },
              { a:{ar:'الطَّهارَة', en:'Purity'}, b:{ar:'شَطرُ الإيمان', en:'Half of faith'} },
              { a:{ar:'اليُسرى', en:'Left foot'}, b:{ar:'عِندَ الدُّخول', en:'When entering'} },
              { a:{ar:'اليُمنى', en:'Right foot'}, b:{ar:'عِندَ الخُروج', en:'When exiting'} },
              { a:{ar:'اللَّاعِنان', en:'Two curses'}, b:{ar:'الأَذى في طَريقِ النّاس', en:'Harm on people\'s paths'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ والأَعرابيّ', en:'The Prophet ﷺ and the Bedouin'} },
              { id:2, t:{ar:'سَلمانُ الفارِسيّ', en:'Salman al-Farisi'} },
              { id:3, t:{ar:'ابنُ مَسعودٍ والحِجارَة', en:'Ibn Mas\'ud and the stones'} },
              { id:4, t:{ar:'أُسامَةُ والبِئر', en:'Usamah and the well'} },
            ],
            right: [
              { id:3, t:{ar:'تَعَلَّمَ أنَّ الرَّوثَةَ لا تَجزي', en:'Learned that dung does not suffice'} },
              { id:1, t:{ar:'عَلَّمَهُ آدابَ الطَّهارَةِ بِرِفق', en:'Was taught purity manners gently'} },
              { id:4, t:{ar:'أَنقَذَ بِئرَ قَريَتِه', en:'Saved his village\'s well'} },
              { id:2, t:{ar:'رَدَّ على المُستَهزِئينَ بِفَخر', en:'Responded to mockers with pride'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن عَلَّمَ الأَعرابيَّ آدابَ قَضاءِ الحاجَة؟', en:'Who taught the Bedouin bathroom manners?'},
                opts:[
                  { t:{ar:'سَلمانُ الفارِسيّ', en:'Salman al-Farisi'}, c:false },
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'ابنُ مَسعود', en:'Ibn Mas\'ud'}, c:false }
                ] },
              { q:{ar:'لِماذا رَفَضَ النَّبيُّ ﷺ الرَّوثَةَ مِن ابنِ مَسعود؟', en:'Why did the Prophet ﷺ refuse the dung from Ibn Mas\'ud?'},
                opts:[
                  { t:{ar:'لأنَّها صَغيرَة', en:'Because it was small'}, c:false },
                  { t:{ar:'لأنَّها نَجاسَة', en:'Because it is impure'}, c:true },
                  { t:{ar:'لأنَّها ثَقيلَة', en:'Because it was heavy'}, c:false }
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
              { t:{ar:'قِراءَةُ دُعاءِ الدُّخولِ للحَمّام', en:'Saying the bathroom entry dua'}, good:true },
              { t:{ar:'الكَلامُ الكَثيرُ في الحَمّام', en:'Talking a lot in the bathroom'}, good:false },
              { t:{ar:'غَسلُ اليَدَينِ بَعدَ الخُروج', en:'Washing hands after leaving'}, good:true },
              { t:{ar:'قَضاءُ الحاجَةِ في مَواضِعِ ظِلِّ النّاس', en:'Relieving oneself in people\'s shade'}, good:false },
              { t:{ar:'تَركُ الحَمّامِ نَظيفاً', en:'Leaving the bathroom clean'}, good:true },
              { t:{ar:'الاستِنجاءُ بِالعَظم', en:'Using bone for istinja'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الدُّخولُ بِالرِّجلِ اليُسرى', en:'Entering with the left foot'}, good:true },
              { t:{ar:'الخُروجُ بِالرِّجلِ اليُسرى', en:'Exiting with the left foot'}, good:false },
              { t:{ar:'الاستِعاذَةُ مِن الخُبثِ', en:'Seeking refuge from evil ones'}, good:true },
              { t:{ar:'التَّلَوُّثُ قُربَ بِئرِ الماء', en:'Polluting near the water well'}, good:false },
              { t:{ar:'قَولُ غُفرانَكَ عِندَ الخُروج', en:'Saying Ghufraanak when leaving'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'إِسباغُ الطَّهارَةِ بِالماء', en:'Completing purification with water'}, good:true },
              { t:{ar:'الإهمالُ في الطَّهارَة', en:'Being careless about purification'}, good:false },
              { t:{ar:'إِخبارُ الكِبارِ عِندَ رُؤيَةِ الأَذى العامّ', en:'Informing elders when seeing public harm'}, good:true },
              { t:{ar:'التَّجاهُلُ حينَ يُلَوِّثُ أَحَدٌ البيئَة', en:'Ignoring when someone pollutes the environment'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER
         ─────────────────────────────────────────────────────────────
         KEY VERIFICATION (level 1 — emoji → Arabic letter):
           💧=ط  🌿=ه  ⭐=ا  🌸=ر  🕌=ة  🌙=ن  💎=ظ  🤲=ف  🌊=ا (same as ⭐, used for second ا)
         Puzzle 1: 💧🌿⭐🌸🕌  → ط+ه+ا+ر+ة = "طَهارَة"  ✓
         Puzzle 2: 🌙💧🌿⭐🌸🕌  → ن+ط+ه+ا+ر+ة = "نَطهارَة" — instead use:
           💎🌿⭐🌸🕌  → ظ+ه+ا+ر+ة = "ظَهارَة" — not ideal; use single known word:
         Final verified approach:
           Key ar: 💧=ن  🌿=ظ  ⭐=ا  🌸=ف  🕌=ة  🌙=ح  💎=ج  🤲=ا  🌊=س
           Puzzle 1: 🌙💎⭐🤲🕌 → ح+ج+ا+ا+ة = not clean.
         SIMPLEST VERIFIED KEY:
           💧=ط  🌿=ه  ⭐=ا  🌸=ر  🕌=ة  🌙=ن  💎=ف  🤲=ع  🌊=و
           "طَهارَة"  = 💧🌿⭐🌸🕌   (ط-ه-ا-ر-ة) ✓
           "نَظافَة"  = 🌙⭐🌸⭐🕌  — ن+ا+ر+ا+ة ≠  not clean; use:
           "طاهِر"   = 💧⭐🌿⭐🌸  (ط-ا-ه-ا-ر) ✓  [purity → pure one]
           "نَفع"    = 🌙💎🌿🌊  (ن-ف-ه-و) — no
         FINAL CLEAN KEY (verified):
           💧=ط  🌿=ه  ⭐=ا  🌸=ر  🕌=ة  🌙=ن  💎=ف  🤲=ع  🌊=و
           word 1: طَهارَة  → 💧🌿⭐🌸🕌  ✓
           word 2: طاهِر   → 💧⭐🌿⭐🌸  ✓  (ط-ا-ه-ا-ر)
           word 3: نَظافَة  — ظ not in key; use "نور" = not in key; use "وَفاء" = 🌊💎⭐🌊 ✗
           word 3 use "ماء" — م not in key; simplest: "هَواء" = 🌿🌊⭐🌊 ✗
           KEEP IT SIMPLE — 3 short words using only: ط(💧) ه(🌿) ا(⭐) ر(🌸) ة(🕌) ن(🌙) ف(💎) ع(🤲) و(🌊)
           word 3: "وَرَه" — not a word; "فَهِم" — م missing; "هَنَ" — not real;
           "نَفع" = 🌙💎🌊 — but 🌊=و ≠ ع;  عين = 🤲 not و
           "نَفع" = ن+ف+ع = 🌙+💎+🤲  ✓  (meaning: benefit)
         ─────────────────────────────────────────────────────────────
         KEY VERIFICATION (level 2 — Arabic letter → number):
           ط=1  ه=2  ا=3  ر=4  ة=5  ن=6  ف=7  ع=8
           "طَهارَة" = 1-2-3-4-5  ✓
           "طاهِر"  = 1-3-2-3-4  ✓
           "نَفع"   = 6-7-8       ✓
         ─────────────────────────────────────────────────────────────
         KEY VERIFICATION (level 1 English — emoji → English letter):
           💧=p  🌿=u  ⭐=r  🌸=e  🕌=s  🌙=n  💎=f  🤲=a  🌊=t
           "pure"   = 💧🌿⭐🌸   (p-u-r-e) ✓
           "pures"  = 💧🌿⭐🌸🕌 (p-u-r-e-s) — not ideal
           "ran"    = ⭐🤲🌙     (r-a-n) ✓
           "fun"    = 💎🌿🌙     (f-u-n) ✓
         ─────────────────────────────────────────────────────────────  */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          /* Level 1 — Emoji cipher
             AR key:  💧=ط  🌿=ه  ⭐=ا  🌸=ر  🕌=ة  🌙=ن  💎=ف  🤲=ع
             EN key:  💧=p  🌿=u  ⭐=r  🌸=e  🕌=s  🌙=n  💎=f  🤲=a
             Verified:
               AR puzzle 1: 💧🌿⭐🌸🕌 = ط+ه+ا+ر+ة = طهارة ✓
               AR puzzle 2: 💧⭐🌿⭐🌸 = ط+ا+ه+ا+ر = طاهر ✓
               AR puzzle 3: 🌙💎🌿🌊 — 🌊 not in key; use 🌙💎🤲 = ن+ف+ع = نفع ✓
               EN puzzle 1: 💧🌿⭐🌸 = p+u+r+e = pure ✓
               EN puzzle 2: 💎🌿🌙  = f+u+n  = fun ✓
               EN puzzle 3: ⭐🤲🌙  = r+a+n  = ran ✓  */
          { kind:'cipher', points:30,
            key: {
              ar:{ '💧':'ط', '🌿':'ه', '⭐':'ا', '🌸':'ر', '🕌':'ة', '🌙':'ن', '💎':'ف', '🤲':'ع' },
              en:{ '💧':'p', '🌿':'u', '⭐':'r', '🌸':'e', '🕌':'s', '🌙':'n', '💎':'f', '🤲':'a' }
            },
            puzzles: [
              { symbols:{ar:'💧🌿⭐🌸🕌', en:'💧🌿⭐🌸'}, answer:{ar:'طهارة', en:'pure'} },
              { symbols:{ar:'💧⭐🌿⭐🌸', en:'💎🌿🌙'},   answer:{ar:'طاهر',  en:'fun'} },
              { symbols:{ar:'🌙💎🤲',     en:'⭐🤲🌙'},   answer:{ar:'نفع',   en:'ran'} },
            ]
          },
          /* Level 2 — Number cipher
             AR key:  ط=1  ه=2  ا=3  ر=4  ة=5  ن=6  ف=7  ع=8
             EN key:  p=1  u=2  r=3  e=4  s=5  n=6  f=7  a=8
             Verified:
               AR puzzle 1: 1-2-3-4-5 = ط+ه+ا+ر+ة = طهارة ✓
               AR puzzle 2: 1-3-2-3-4 = ط+ا+ه+ا+ر = طاهر ✓
               AR puzzle 3: 6-7-8     = ن+ف+ع     = نفع   ✓
               EN puzzle 1: 1-2-3-4   = p+u+r+e   = pure  ✓
               EN puzzle 2: 7-2-6     = f+u+n     = fun   ✓
               EN puzzle 3: 3-8-6     = r+a+n     = ran   ✓  */
          { kind:'cipher', points:30,
            key: {
              ar:{ 'ط':'1', 'ه':'2', 'ا':'3', 'ر':'4', 'ة':'5', 'ن':'6', 'ف':'7', 'ع':'8' },
              en:{ 'p':'1', 'u':'2', 'r':'3', 'e':'4', 's':'5', 'n':'6', 'f':'7', 'a':'8' }
            },
            puzzles: [
              { symbols:{ar:'1-2-3-4-5', en:'1-2-3-4'}, answer:{ar:'طهارة', en:'pure'} },
              { symbols:{ar:'1-3-2-3-4', en:'7-2-6'},   answer:{ar:'طاهر',  en:'fun'} },
              { symbols:{ar:'6-7-8',     en:'3-8-6'},   answer:{ar:'نفع',   en:'ran'} },
            ]
          },
          /* Level 3 — concept MCQs */
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى كَلِمَةِ «الطَّهارَة»؟', en:'What does "tahara" (purity) mean?'},
                opts:[
                  { t:{ar:'النَّظافَةُ الكامِلَةُ مِن الحَدَثِ والنَّجَس', en:'Complete cleanliness from ritual impurity and filth'}, c:true },
                  { t:{ar:'الحَيَوانُ الأَليف', en:'The pet animal'}, c:false },
                  { t:{ar:'الزَّهرَةُ الجَميلَة', en:'The beautiful flower'}, c:false }
                ] },
              { q:{ar:'الطَّهارَةُ شَطرُ — ماذا؟', en:'Purity is half of — what?'},
                opts:[
                  { t:{ar:'الإيمان', en:'Faith'}, c:true },
                  { t:{ar:'الصَّلاةِ فَقَط', en:'Prayer only'}, c:false },
                  { t:{ar:'الصِّيام', en:'Fasting'}, c:false }
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
              { q:{ar:'نَسيتَ قِراءَةَ دُعاءِ الدُّخولِ ودَخَلتَ الحَمّام. ماذا تَفعَل؟', en:'You forgot to say the entry dua and entered the bathroom. What do you do?'},
                opts:[
                  { t:{ar:'لا أَتذَكَّرُهُ بَعدَها أَبَداً.', en:'I never remember it afterwards.'},  c:false },
                  { t:{ar:'أَذكُرُهُ الآنَ وأَحرِصُ في المَرَّةِ القادِمَة.', en:'I remember it now and am more careful next time.'},  c:true },
                  { t:{ar:'لا يُهِمّ.', en:'It doesn\'t matter.'},  c:false },
                ] },
              { q:{ar:'رَأَيتَ أَحَداً يَترُكُ الحَمّامَ قَذِراً في المَدرَسَة. ماذا تَفعَل؟', en:'You saw someone leaving the bathroom dirty at school. What do you do?'},
                opts:[
                  { t:{ar:'أَتَجاهَل وأَمشي.', en:'I ignore it and walk away.'},  c:false },
                  { t:{ar:'أُنَبِّهُهُ بِلُطفٍ أو أُخبِرُ المَسؤول.', en:'I remind him gently or inform the responsible person.'},  c:true },
                  { t:{ar:'أَترُكُهُ أَقذَر.', en:'I make it even dirtier.'},  c:false },
                ] },
              { q:{ar:'أَنتَ في نُزهَةٍ وتَحتاجُ لِقَضاءِ الحاجَة. أَينَ تَذهَب؟', en:'You are on a trip and need to relieve yourself. Where do you go?'},
                opts:[
                  { t:{ar:'أَيَّ مَكانٍ قَريب.', en:'Any nearby place.'},  c:false },
                  { t:{ar:'أَبتَعِدُ عن طُرُقِ النّاسِ وظِلِّهِم وأَحفَظُ البيئَة.', en:'I move away from people\'s paths and shade and protect the environment.'},  c:true },
                  { t:{ar:'بِجانِبِ مَصدَرِ ماء.', en:'Next to a water source.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'زَميلُكَ يَسخَرُ مِن آدابِ الاستِنجاء. ماذا تَقول؟', en:'Your classmate mocks the manners of istinja. What do you say?'},
                opts:[
                  { t:{ar:'أَسخَرُ مَعَه.', en:'I mock with him.'},  c:false },
                  { t:{ar:'أُوَضِّحُ له بِهُدوءٍ أنَّ هذا تَعليمُ النَّبيِّ ﷺ ونَحنُ فَخورونَ بِه.', en:'I explain to him calmly that this is the Prophet\'s ﷺ teaching and we are proud of it.'},  c:true },
                  { t:{ar:'أَسكُتُ خَجَلاً.', en:'I stay silent from shame.'},  c:false },
                ] },
              { q:{ar:'وَصَلتَ للحَمّامِ ولا تَذكُرُ دُعاءَ الدُّخول. ماذا تَفعَل؟', en:'You reached the bathroom and don\'t remember the entry dua. What do you do?'},
                opts:[
                  { t:{ar:'أَدخُلُ بِلا دُعاء.', en:'I enter without a dua.'},  c:false },
                  { t:{ar:'أَسأَلُ أَهلي أو أَبحَثُ حتَّى أَتَعَلَّمَه.', en:'I ask my family or search until I learn it.'},  c:true },
                  { t:{ar:'لَيسَ مُهِمّاً.', en:'It\'s not important.'},  c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'صَديقُكَ لم يَغسِل يَدَيهِ بَعدَ الخُروجِ مِن الحَمّام ويُريدُ أن يَأكُلَ. ماذا تَفعَل؟', en:'Your friend didn\'t wash his hands after the bathroom and wants to eat. What do you do?'},
                opts:[
                  { t:{ar:'لا أَقول شَيئاً.', en:'I say nothing.'},  c:false },
                  { t:{ar:'أُذَكِّرُهُ بِلُطفٍ بِغَسلِ يَدَيه.', en:'I kindly remind him to wash his hands.'},  c:true },
                  { t:{ar:'أَضحَكُ عليه.', en:'I laugh at him.'},  c:false },
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
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ الطّاهِرِ الكامِل',    en:'Badge of Complete Purity' } },
    { icon:'🌿', color:'#1ABC9C', title:{ar:'نَجمَةُ البيئَةِ النَّظيفَة', en:'Star of the Clean Environment' } },
    { icon:'🌟', color:'#F4D03F', title:{ar:'تاجُ التَّعَلُّمِ بِلا حَرَج',  en:'Crown of Learning Without Shame' } },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ حِمايَةِ النَّاس',       en:'Shield of Protecting Others' } },
    { icon:'📜', color:'#E67E22', title:{ar:'صَحيفَةُ الآدابِ الإسلاميَّة', en:'Scroll of Islamic Manners' } },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ الطَّهارَةِ الكامِلَة',  en:'Key of Complete Purification' } },
  ],

  /* ───── HOUSE ICON ───── */
  icon: '💧',

  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ آدابَ الطَّهارَةِ كُلَّ يَوم؟', en:'How do you live purity manners every day?' },
  formulaEq: { ar:'دُعاء + طَهارَة + نَظافَة = مُؤمِنٌ طاهِر 🏆', en:'Dua + Purity + Cleanliness = Pure Believer 🏆' },
  magicMix: [
    { icon:'🤲', title:{ar:'قُل دُعاءَ الدُّخولِ قَبلَ كُلِّ زِيارَة', en:'Say the entry dua before every visit'},
      body:{ar:'«اللَّهُمَّ إنِّي أَعوذُ بِكَ مِن الخُبثِ والخَبائِث» — قُلها في كُلِّ مَرَّة دونَ استِثناء!',en:'"O Allah, I seek refuge in You from evil and evil ones" — say it every single time without exception!'} },
    { icon:'🦶', title:{ar:'ادخُل بِاليُسرى واخرُج بِاليُمنى', en:'Enter with the left and exit with the right'},
      body:{ar:'هذهِ السُّنَّةُ الصَّغيرَةُ تَجعَلُ كُلَّ يَومِكَ مُبارَكاً — تَذَكَّرها كُلَّما وَقَفتَ أَمامَ الباب.',en:'This small Sunnah blesses your entire day — remember it every time you stand before the door.'} },
    { icon:'💧', title:{ar:'أَسبِغِ الطَّهارَةَ بِالماءِ جَيِّداً', en:'Perform thorough purification with water'},
      body:{ar:'لا تَتَعَجَّل — خُذ وَقتَكَ في الاستِنجاءِ الكامِل. الطَّهارَةُ الكامِلَةُ شَرطُ قَبولِ الصَّلاة.',en:'Don\'t rush — take your time for complete purification. Complete purity is a condition for prayer being accepted.'} },
    { icon:'🧼', title:{ar:'اغسِل يَدَيكَ بِالصّابونِ دائِماً', en:'Always wash hands with soap'},
      body:{ar:'غَسلُ اليَدَينِ بَعدَ الحَمّامِ يَحمي صِحَّتَكَ وصِحَّةَ مَن تُلامِسُهُم — هذا مِن الإحسانِ إلى النّاس.',en:'Washing hands after the bathroom protects your health and that of those you touch — this is a form of kindness to people.'} },
    { icon:'🌿', title:{ar:'اترُك الحَمّامَ نَظيفاً لِمَن بَعدَك', en:'Leave the bathroom clean for whoever comes after'},
      body:{ar:'فَكِّر في الشَّخصِ الَّذي سَيَأتي بَعدَك — أَلا تُريدُ أن يَجِدَ مَكاناً نَظيفاً؟ هذا مِن حُسنِ الخُلُق.',en:'Think of the person coming after you — don\'t you want them to find a clean place? This is part of good character.'} },
    { icon:'🌙', title:{ar:'قُل «غُفرانَك» بَعدَ كُلِّ خُروج', en:'Say "Ghufraanak" after every exit'},
      body:{ar:'كَلِمَةٌ صَغيرَةٌ تَفتَحُ أَبوابَ المَغفِرَة — الله تَعالى يُحِبُّ مَن يَستَغفِرُهُ حتَّى في هذهِ اللَّحظَة.',en:'A small word that opens the doors of forgiveness — Allah Most High loves those who seek His forgiveness even at this moment.'} },
  ],

  /* ───── CERTIFICATE TEXT ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ آداب قَضاءِ الحاجَة', en:'Awarded to those who completed the House of Bathroom Manners' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>آدابَ الطَّهارَةِ الإسلاميَّةِ الكامِلَة</b> — اقتِداءً بِالنَّبيِّ ﷺ الَّذي عَلَّمَ الأَعرابيَّ بِرِفق، وسَلمانَ الفارِسيِّ الَّذي افتَخَرَ بِدِينِه، وابنِ مَسعودٍ الَّذي تَعَلَّمَ بِتَواضُع رضي الله عنهم أجمعين.',
                 en:'For mastering <b>complete Islamic purity manners</b> — following the Prophet ﷺ who taught the Bedouin with gentleness, Salman al-Farisi who was proud of his religion, and Ibn Mas\'ud who learned with humility رضي الله عنهم all.' },
  },

};
