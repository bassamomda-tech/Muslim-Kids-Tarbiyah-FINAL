/* ═══════════════════════════════════════════════════════════════
   بيت الوفاء  ·  House of Loyalty
   slug: loyalty | id: 14 | color: #0D47A1 | art: cottage
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.loyalty = {

  tagline: {
    ar: 'الوَفاءُ عَهدٌ لا يَنكُثُهُ إلّا ذو نِفاق',
    en: 'Loyalty is a covenant that only the faithless break',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هَل تَعلَمُ أنَّ الوَفاءَ مِن الإيمان؟', en:'Did you know that loyalty is part of faith?' },
      sub:   { ar:'قالَ النَّبيُّ ﷺ: «إنَّ حُسنَ العَهدِ مِن الإيمان» — فمَن لا وَفاءَ لَهُ لا دِينَ لَه!', en:'"Indeed keeping one\'s promises well is part of faith" — the Prophet ﷺ said. Whoever has no loyalty has no true religion!' },
    },
    definition: {
      linguistic: {
        ar: 'الوَفاءُ مِن «وَفى يَفي» — أَي أَتَمَّ الشَّيءَ وأَكمَلَه. وهو مِن الوُفورِ والكَمال، لأنَّ الوَفِيَّ يُتِمُّ ما قَطَعَهُ على نَفسِه دونَ نُقصان.',
        en: 'From the root meaning "to fulfil completely." The loyal person brings every commitment to full completion — nothing left undone.',
      },
      terminology: {
        ar: 'هو <b>الثَّباتُ على العَهدِ والوَعدِ</b> وعَدَمُ الخِيانَةِ أو الغَدر، سَواءٌ مَعَ اللهِ أَو مَعَ النّاسِ أو مَعَ النَّفس.',
        en: 'Standing firm on every promise and covenant — never betraying or deceiving — whether with Allah, with people, or with oneself.',
      },
      simile: {
        ar: 'الوَفاءُ كالجَذرِ الرّاسِخ في الأَرض: الشَّجَرَةُ تَهتَزُّ لَكِنَّ جَذرَها لا يَتَزَعزَع. كَذلِكَ الوَفِيُّ — تَعصِفُ بِه الأَحوالُ لَكِنَّهُ لا يَتَخلَّى عَمَّن أَعطاهُ كَلِمَته.',
        en: 'Loyalty is like a deep root — the tree may sway in the storm, but the root holds firm. The loyal person may face hard winds, yet never abandons those they gave their word to.',
      },
    },
    forms: [
      { icon:'🤲', color:'#0D47A1', title:{ar:'الوَفاءُ للهِ', en:'Loyalty to Allah'},
        body:{ar:'الثَّباتُ على الإسلامِ وعَدَمُ نَقضِ عَهدِ الفِطرَة. أَن تَبقى على ما عاهَدتَ اللهَ عَليهِ يَومَ «أَلَستُ بِرَبِّكُم».',en:'Remaining firm on Islam and not breaking the covenant of one\'s nature. To remain true to the pledge made to Allah on the Day of "Am I not your Lord?"'} },
      { icon:'💍', color:'#1565C0', title:{ar:'الوَفاءُ في الزَّواج', en:'Loyalty in marriage'},
        body:{ar:'الوَفاءُ لِلزَّوجِ أو الزَّوجَةِ في الحَياةِ وبَعدَ المَوت. كَما كانَ النَّبيُّ ﷺ يَذكُرُ خَديجَةَ بَعدَ وَفاتِها بِكُلِّ خَير.',en:'Being faithful to one\'s spouse in life and after death. Just as the Prophet ﷺ always remembered Khadijah with the deepest love even after her passing.'} },
      { icon:'🤝', color:'#1976D2', title:{ar:'الوَفاءُ بِالعُهود', en:'Honouring covenants'},
        body:{ar:'الالتِزامُ بِالمَواثيقِ والعُقودِ مَعَ الأَفراد والجَماعات. كَوَفاءِ النَّبيِّ ﷺ بِشُروطِ صُلحِ الحُدَيبِيَة حتّى في أَحلَكِ الظُّروف.',en:'Holding to agreements with individuals and communities. Like the Prophet\'s ﷺ faithful observance of the Hudaybiyah treaty terms even in the most difficult circumstances.'} },
      { icon:'👨‍👩‍👧', color:'#2196F3', title:{ar:'الوَفاءُ لِلوالِدَين', en:'Loyalty to parents'},
        body:{ar:'شُكرُهُما وبِرُّهُما حيَّيَن وبَعدَ وَفاتِهِما بِالدُّعاءِ وصِلَةِ أَرحامِهِما وصَديقاتِهِما. الوَلَدُ الوَفِيُّ لا يَنسى فَضلَ أَبَوَيه.',en:'Thanking and honouring parents in life and after death through prayer, maintaining their bonds, and caring for their friends. The loyal child never forgets the blessing of parents.'} },
      { icon:'🌿', color:'#42A5F5', title:{ar:'الوَفاءُ لِلأَصدِقاء', en:'Loyalty to friends'},
        body:{ar:'نُصرَةُ الصَّديقِ في السَّرّاءِ والضَّرّاءِ وعَدَمُ خِذلانِه. الصَّديقُ الوَفِيُّ يَقِفُ مَعَكَ حينَ يَتَخلَّى الجَميع.',en:'Standing by one\'s friend in ease and hardship and never abandoning them. The loyal friend stands with you when everyone else walks away.'} },
      { icon:'🏡', color:'#64B5F6', title:{ar:'الوَفاءُ لِلوَطَن والجيران', en:'Loyalty to community and neighbours'},
        body:{ar:'حِفظُ حُقوقِ الجارِ ونُصرَةُ المُجتَمَع. الوَفِيُّ لا يَخذُلُ مَن أَعطاهُ أَمانَه واطمَأنَّ إليه.',en:'Protecting the neighbour\'s rights and supporting the community. The loyal person never lets down those who trusted them and felt secure with them.'} },
    ],
    ranking: [
      { color:'#0D47A1', title:{ar:'الوَفاءُ للهِ وحدَه', en:'Loyalty to Allah alone'},
        body:{ar:'أَعلى دَرَجاتِ الوَفاء: الثَّباتُ على دِينِ اللهِ مَهما كانَت الفِتَن. مَن وَفى للهِ كفاهُ اللهُ في كُلِّ شَيء.',en:'The highest rank of loyalty: standing firm on Allah\'s religion no matter the trials. Whoever is faithful to Allah, Allah will be sufficient for them in all things.'} },
      { color:'#1565C0', title:{ar:'الوَفاءُ بِالعُهودِ الرَّسمِيَّة', en:'Honouring formal covenants'},
        body:{ar:'الالتِزامُ بِالمَواثيقِ والاتِّفاقيّاتِ ولَو كانَت مُكلِفَة. النَّبيُّ ﷺ رَدَّ أَبا جَندَل إلى أَبيهِ وَفاءً بِالشَّرط.',en:'Abiding by treaties and agreements even when costly. The Prophet ﷺ returned Abu Jandal to his father in fulfilment of the covenant terms.'} },
      { color:'#1976D2', title:{ar:'الوَفاءُ لِذَوي الفَضل', en:'Loyalty to those who did you good'},
        body:{ar:'شُكرُ مَن أَحسَنَ إلَيكَ وذِكرُه بِالخَير. قالَ النَّبيُّ ﷺ: «إنَّ حُسنَ العَهدِ مِن الإيمان».',en:'Thanking those who were good to you and remembering them well. The Prophet ﷺ said: "Keeping one\'s commitments well is part of faith."'} },
      { color:'#42A5F5', title:{ar:'الوَفاءُ لِلأَصحاب', en:'Loyalty to companions'},
        body:{ar:'نُصرَةُ الأَصحابِ ووَفاءُ عُهودِ الصَّداقَة. الوَفِيُّ لا يُخذِلُ صَديقَهُ عند الشِّدَّة.',en:'Supporting companions and honouring the bonds of friendship. The loyal person never abandons their friend in hardship.'} },
    ],
    verses: [
      { text: { ar:'﴿ وَأَوْفُوا بِعَهْدِ اللَّهِ إِذَا عَاهَدتُّمْ وَلَا تَنقُضُوا الْأَيْمَانَ بَعْدَ تَوْكِيدِهَا وَقَدْ جَعَلْتُمُ اللَّهَ عَلَيْكُمْ كَفِيلًا ﴾',
                en:'"Fulfil Allah\'s covenant when you make a covenant, and do not break your oaths after confirming them — you have made Allah your guarantor."' },
        ref: { ar:'[سورة النحل: ٩١]', en:'[Surah An-Nahl: 91]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ﴾',
                en:'"O you who believe — fulfil all contracts."' },
        ref: { ar:'[سورة المائدة: ١]', en:'[Surah Al-Ma\'idah: 1]' } },
      { text: { ar:'﴿ وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ﴾',
                en:'"And those who are faithful to their trusts and covenants."' },
        ref: { ar:'[سورة المؤمنون: ٨]', en:'[Surah Al-Mu\'minun: 8]' } },
    ],
    hadiths: [
      { text: { ar:'«آيَةُ المُنافِقِ ثَلاث: إذا حَدَّثَ كَذَب، وإذا وَعَدَ أَخلَف، وإذا اؤتُمِنَ خان»',
                en:'"The sign of the hypocrite is three: when he speaks, he lies; when he promises, he breaks it; and when entrusted, he betrays."' },
        source: { ar:'[رواه البخاري — حديث ٣٣]', en:'[Sahih Bukhari — 33]' } },
      { text: { ar:'«إنَّ حُسنَ العَهدِ مِن الإيمان»',
                en:'"Indeed keeping one\'s commitments well is part of faith."' },
        source: { ar:'[رواه الحاكم وصحَّحه، وذَكَرَهُ في سير أعلام النبلاء — ج٢]', en:'[Al-Hakim, authenticated; cited in Siyar A\'lam al-Nubala — vol. 2]' } },
    ],
    benefits: [
      { ar:'🌟 يَرفَعُ اللهُ صاحِبَهُ في الدُّنيا والآخِرَة', en:'🌟 Allah elevates the loyal person in this life and the next' },
      { ar:'🤝 يَبنى الثِّقَةَ بَينَ النّاسِ ويُوَطِّدُ العَلاقات', en:'🤝 It builds trust between people and strengthens relationships' },
      { ar:'🏡 يُحَصِّنُ الأُسرَةَ والمُجتَمَعَ مِن الفُرقَة', en:'🏡 It fortifies the family and community against division' },
      { ar:'💎 يَجعَلُ صاحِبَهُ مَحبوباً مَوثوقاً به', en:'💎 It makes its owner beloved and trusted by all' },
      { ar:'🌿 يُحقِّقُ الأَمانَ والاطمِئنانَ في القُلوب', en:'🌿 It brings peace and security to hearts' },
    ],
    obstacles: [
      { ar:'حُبُّ النَّفسِ والمَصلَحَةِ الشَّخصيَّة', en:'Self-love and personal interest' },
      { ar:'ضَعفُ الإيمانِ وغِيابُ الرَّقابَةِ الإلَهيَّة', en:'Weak faith and forgetting Allah\'s watchfulness' },
      { ar:'الخَوفُ مِن التَّكلِفَةِ والخَسارَة', en:'Fear of cost and loss' },
      { ar:'صُحبَةُ الغادِرينَ والمُنافِقين', en:'Keeping company with betrayers and hypocrites' },
    ],
    acquireMeans: [
      { ar:'تَذَكَّر دائِماً أنَّ اللهَ يَراكَ ولا يَخفى عليهِ شَيء', en:'Always remember that Allah sees you and nothing is hidden from Him' },
      { ar:'احرِص على الوَفاءِ في الصِّغار تَتَعَوَّدُ على الكِبار', en:'Be faithful in small matters so loyalty becomes your habit in great ones' },
      { ar:'اصحَب الأَوفياءَ وتَعَلَّم مِن سِيَرِهِم', en:'Befriend loyal people and learn from their examples' },
      { ar:'اقرَأ سِيرَةَ النَّبيِّ ﷺ وتَأَمَّل وَفاءَهُ مَعَ خَديجَةَ والصَّحابَة', en:'Read the Prophet\'s ﷺ biography and reflect on his faithfulness with Khadijah and the Companions' },
    ],
  },

  /* ───── ROOM 2: Stories ───── */
  stories: [

    /* ──────────────────────────────────────────
       STORY 1 — وَفاءُ النَّبيِّ ﷺ لِخَديجَةَ رضي الله عنها
       Source: صحيح البخاري — حديث ٣٨١٨ + islamweb.net/ar/article/177427
       ────────────────────────────────────────── */
    {
      icon:'💎', scene:'madinah', character:'🧔',
      title: { ar:'الحُبُّ الَّذي لا يَموت: وَفاءُ النَّبيِّ ﷺ لِخَديجَة', en:'The love that never dies: The Prophet\'s ﷺ loyalty to Khadijah' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'كانَت الشَّمسُ تَغرُبُ على المَدينَةِ المُنَوَّرَة، والنَّبيُّ ﷺ جالِسٌ في بَيتِه، قَد أَمَسَكَ في يَدِهِ قِطعَةً مِن لَحمٍ طَرِيّ. نَظَرَ إليها طَويلاً، ثُمَّ رَفَعَ رَأسَهُ بِعَينَينِ تَمَلَّأ دَفئاً وذِكرى.<br><br>قالَ بِصَوتٍ مُشبَعٍ بِالحَنين: <b>«هذِهِ مِن صَديقاتِ خَديجَة...»</b> ثُمَّ أَمَرَ أن تُقَطَّعَ اللَّحمَةُ وتُرسَلَ إلى كُلِّ صَديقَةٍ لَها. كانَت خَديجَةُ قَد ماتَت مِن سِنين، لَكِنَّ النَّبيَّ ﷺ لم يَنسَ — لم يَنسَ وَلو يَوماً!',
                 en:'The sun was setting over Madinah as the Prophet ﷺ sat in his home, holding a piece of fresh meat in his hands. He gazed at it for a long moment, then lifted his eyes — warm and full of memory.<br><br>He said in a voice rich with longing: <b>"This belongs to Khadijah\'s friends..."</b> Then he gave instructions to cut the meat and send portions to each of her companions. Khadijah had died years before — yet the Prophet ﷺ had not forgotten. Not even for a single day!' } },
        { scene:'garden', character:'💍',
          text:{ ar:'كانَت عائِشَةُ رضي الله عنها تَرقُبُ هذا المَشهَدَ كُلَّ مَرَّة، وفي قَلبِها جَمرَةٌ صَغيرَة مِن الغَيرَة. فَذاتَ يَومٍ لم تَستَطِع أَن تَتَمالَك نَفسَها، فَقالَت بِصَوتٍ فيهِ شَيءٌ مِن العَتاب: <b>«يا رَسولَ الله! كَأَنَّهُ لم يَكُن في الدُّنيا امرَأَةٌ إلّا خَديجَة!»</b><br><br>صَمَتَ النَّبيُّ ﷺ لَحظَة، ثُمَّ نَظَرَ إليها نَظرَةً كُلُّها هُدوءٌ وعُمق. وفي عَينَيهِ شَيءٌ يُشبِهُ الابتِسامَة الحَزينَة.',
                 en:'Aisha رضي الله عنها would watch this scene every time, and in her heart a small ember of jealousy flickered. One day she could no longer hold back, and said with a slight edge of reproach: <b>"O Messenger of Allah! It is as if there were no woman in all the world but Khadijah!"</b><br><br>The Prophet ﷺ was silent for a moment, then looked at her with a gaze of complete calm and depth. In his eyes was something like a gentle, wistful smile.' } },
        { scene:'madinah', character:'🧔',
          text:{ ar:'ثُمَّ تَكَلَّمَ ﷺ بِكَلِماتٍ وَزنَت ذَهَباً: <b>«إنَّها كانَت... وكانَت... وكانَ لي مِنها وَلَد».</b><br><br>لم يُفَصِّل، لأنَّ مَقامَ خَديجَةَ فَوقَ التَّفصيل. كانَت هي الَّتي آمَنَت بِه أَوَّلَ النّاس، وهي الَّتي واسَتهُ في أَشَدِّ لَحظاتِه رُعباً، وهي الَّتي قالَت له في غارِ حِراء: <b>«كَلّا واللهِ لا يُخزيكَ اللهُ أَبداً، إنَّكَ لَتَصِلُ الرَّحِم، وتَحمِلُ الكَلَّ، وتَكسِبُ المَعدوم...»</b><br><br>كانَت جَبَلَهُ الَّذي اتَّكَأ عَلَيه، فَكَيفَ يَنساها؟',
                 en:'Then he ﷺ spoke words that were worth their weight in gold: <b>"She was... and she was... and I had children from her."</b><br><br>He did not elaborate, for Khadijah\'s rank was beyond elaboration. She was the first to believe in him, she comforted him in his most terrifying moment, and she was the one who said to him at Cave Hira: <b>"Never! By Allah, Allah will never disgrace you — you maintain family ties, you bear the burden of the helpless, you earn for the destitute..."</b><br><br>She was the mountain he leaned on. How could he ever forget her?' },
          choice:{ q:{ar:'لماذا كانَ النَّبيُّ ﷺ يَذكُرُ خَديجَةَ دائِماً بَعدَ وَفاتِها؟',en:'Why did the Prophet ﷺ always remember Khadijah after her death?'},
            opts:[
              { t:{ar:'لأنَّهُ لم يَكُن يُحِبُّ زَوجاتِه الأُخريات.', en:'Because he did not love his other wives.'},c:false,
                exp:{ar:'لا — النَّبيُّ ﷺ كانَ وَفِيّاً لِجَميعِ نِسائِه. لَكِنَّ ذِكرَ خَديجَةَ كانَ وَفاءً لِمَن آمَنَت بِه أَوَّلاً وضَحَّت كَثيراً!',en:'No — the Prophet ﷺ was loyal to all his wives. But remembering Khadijah was faithfulness to the one who first believed in him and sacrificed the most!'} },
              { t:{ar:'وَفاءً لَها لِعَظيمِ فَضلِها وسَبقِها في الإسلام.', en:'Out of loyalty for her tremendous virtue and her early embrace of Islam.'},c:true,
                exp:{ar:'نَعَم! الوَفِيُّ لا يَنسى مَن أَحسَنَ إليه — وخَديجَةُ كانَت أَوَّلَ المُؤمِنين!',en:'Yes! The loyal person never forgets those who were good to them — and Khadijah was the first believer!'} },
              { t:{ar:'لأنَّهُ كانَ حَزيناً دائِماً.', en:'Because he was always sad.'},c:false,
                exp:{ar:'لا — الوَفاءُ لَيسَ حُزناً، بَل هو حُبٌّ وامتِنانٌ وتَقدير.',en:'No — loyalty is not sadness, it is love, gratitude, and appreciation.'} },
            ] } },
        { scene:'madinah', character:'👵',
          text:{ ar:'وفي يَومٍ مِن تِلكَ الأيَّام، طُرِقَ بابُ النَّبيِّ ﷺ بِرِفق. كانَت امرَأَةٌ عَجوزٌ مُتَجَعِّدَةُ الوَجهِ ضَعيفَةُ الخُطى — تَمشي بِبُطءٍ وعَلى وَجهِها جَمالُ السِّنينَ الطّويلَة. كانَت مِن قَديماتِ صَديقاتِ خَديجَة، تَزورُها في أيّامِ العِزِّ الأَوَّلِ حينَ كانَ الإسلامُ يَنبُع مِن بيتِهَا.<br><br>وَقَفَت على العَتَبَةِ تَنتَظِر، لا تَدري إن كانَ يَتَذَكَّرُها أَحَد. فَفُتِحَ البابُ، ورَأَت وَجهَ النَّبيِّ ﷺ يُشرِقُ كَالقَمرِ لَيلَةَ اكتِمالِه — ابتِسامَةٌ واسِعَة وعَيانٌ تَقولانِ دونَ كَلام: «مَرحَباً بِك، لَم أَنسَك!» أَقبَلَ عليها بِاهتِمامٍ مَليءٍ بِالوَفاء، سَأَلَها عَن أَحوالِها وعن صِحَّتِها وعن مَن تَرَكَت خَلفَها مِن أَهل.',
                 en:'One day there was a gentle knock at the Prophet\'s ﷺ door. An old woman with a lined face and slow steps stood there — walking carefully, the beauty of long years on her face. She was one of Khadijah\'s oldest friends, who used to visit her in the early days of honour when Islam was flowing from her home.<br><br>She stood on the doorstep and waited, not knowing if anyone still remembered her. The door opened, and she saw the Prophet\'s ﷺ face shining like a full moon — a broad smile and bright eyes saying without words: "Welcome, I have not forgotten you!" He came toward her with attention full of loyalty, asking about her wellbeing and health and those she had left at home.' } },
        { scene:'garden', character:'🧔',
          text:{ ar:'لَمّا خَرَجَت المَرأَةُ العَجوزُ، التَفَتَت عائِشَةُ رضي الله عنها مُستَغرِبَة: <b>«يا رَسولَ الله، تُقبِلُ على هذِهِ العَجوزِ هذا الإقبال؟!»</b><br><br>نَظَرَ إليها النَّبيُّ ﷺ وقالَ بِصَوتٍ دافِئ مَلِيءٍ بِالحَنان: <b>«إنَّها كانَت تَأتينا زَمانَ خَديجَة، وإنَّ حُسنَ العَهدِ مِن الإيمان.»</b><br><br>سَمِعَت عائِشَةُ هذِهِ الجُمَلَة الصَّغيرَة، فَكَانَت تَعيشُ في قَلبِها أَعواماً طَويلَة. الوَفِيُّ لا يَنسى مَن فَعَلَ مَعَهُ الخَير — ولَو مَضَت السِّنون!',
                 en:'When the old woman left, Aisha رضي الله عنها turned in wonder: <b>"O Messenger of Allah, you receive this old woman with such attention?!"</b><br><br>The Prophet ﷺ looked at her and said in a warm, tender voice: <b>"She used to visit us in Khadijah\'s time, and keeping one\'s commitments well is part of faith."</b><br><br>Aisha heard those few words, and they lived in her heart for long years after. The loyal person never forgets those who did them good — even after years have passed!' } },
        { scene:'madinah', character:'💎',
          text:{ ar:'تِلكَ هي دَرسُ الوَفاء مِن سَيِّدِ الأَوفياء. لم يَكُن وَفاؤُهُ ﷺ مَجَرَّدَ كَلِمات — بَل كانَ ذَبائِح تُرسَل، وأَبواباً تُفتَح، وأَعيُناً تُشرِقُ عند رُؤيَةِ كُلِّ مَن ذَكَّرَهُ بِها.<br><br><b>الوَفاءُ لَيسَ قَوِيٌّ لأنَّهُ لا يَبكي — بل هو قَوِيٌّ لأنَّهُ لا يَنسى وَلا يَخذُل!</b> فَهَل أَنتَ وَفِيٌّ لِمَن أَحسَنَ إلَيك؟',
                 en:'That is the lesson of loyalty from the master of the loyal. His ﷺ faithfulness was not mere words — it was gifts sent, doors opened wide, and eyes that shone at the sight of anyone who reminded him of her.<br><br><b>Loyalty is not strong because it does not weep — it is strong because it never forgets and never abandons!</b> Are you loyal to those who have been good to you?' } },
      ],
      quiz: [
        { q:{ar:'ماذا كانَ النَّبيُّ ﷺ يَفعَلُ بِاللَّحمِ تَذَكُّراً لِخَديجَة؟', en:'What did the Prophet ﷺ do with meat in memory of Khadijah?'},
          opts:[
            { t:{ar:'يَأكُلُهُ وَحدَه', en:'He ate it alone'}, c:false },
            { t:{ar:'يُرسِلُهُ إلى صَديقاتِها', en:'He sent it to her friends'}, c:true },
            { t:{ar:'يُلقيه بَعيداً', en:'He threw it away'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ النَّبيُّ ﷺ لَمّا رَأَت عائِشَةُ رضي الله عنها المَرأَةَ العَجوز؟', en:'What did the Prophet ﷺ say when Aisha رضي الله عنها questioned his welcome of the old woman?'},
          opts:[
            { t:{ar:'«لا تَسأَلي»', en:'"Do not ask"'}, c:false },
            { t:{ar:'«إنَّ حُسنَ العَهدِ مِن الإيمان»', en:'"Keeping one\'s commitments is part of faith"'}, c:true },
            { t:{ar:'«دَعيها تَذهَب»', en:'"Let her go"'}, c:false },
          ] },
        { q:{ar:'لِماذا غارَت عائِشَةُ رضي الله عنها مِن خَديجَة وهي لم تَرَها؟', en:'Why was Aisha رضي الله عنها jealous of Khadijah despite never meeting her?'},
          opts:[
            { t:{ar:'لِكَثرَةِ مالِها', en:'Because of her wealth'}, c:false },
            { t:{ar:'لِكَثرَةِ ذِكرِ النَّبيِّ ﷺ إيّاها', en:'Because the Prophet ﷺ so often remembered her'}, c:true },
            { t:{ar:'لِجَمالِها الَّذي سَمِعَت عنه', en:'Because of her beauty she heard about'}, c:false },
          ] },
      ],
      moral:      { ar:'الوَفِيُّ لا يَنسى مَن أَحسَنَ إليه — ولَو فَصَلَت بَينَهُما السِّنون والمَسافات.', en:'The loyal person never forgets those who were good to them — even if years and distances separate them.' },
      badge:      { icon:'💍', title:{ar:'وِسامُ الوَفاءِ الأَبَدِيّ', en:'Badge of Eternal Loyalty'} },
      reflect:    [
        {ar:'مَن أَحسَنَ إلَيكَ في حَياتِكَ ولا تَزالُ تَتَذَكَّرُه بِخَير؟', en:'Who has been good to you in your life and you still remember them fondly?'},
        {ar:'كَيفَ تُعبِّرُ عَن وَفائِكَ لِأَصدِقائِكَ وعائِلَتِكَ في حَياتِكَ اليَومِيَّة؟', en:'How do you express your loyalty to your friends and family in your daily life?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخاري — حَديث ٣٨١٨ ومُسلِم — حَديث ٢٤٣٥: «ما غِرتُ على أَحَدٍ مِن نِساءِ النَّبيِّ ﷺ ما غِرتُ على خَديجَة». المَصدَر: إسلام ويب — مَقالة ١٧٧٤٢٧', en:'Narrated by Bukhari — 3818 and Muslim — 2435: "I was never jealous of any of the Prophet\'s ﷺ wives as I was of Khadijah." Source: islamweb.net/ar/article/177427'},
        {ar:'قَولُهُ ﷺ «إنَّ حُسنَ العَهدِ مِن الإيمان» رَواهُ الحاكِمُ وذَكَرَهُ الذَّهَبِيُّ في سِيَرِ أَعلامِ النُّبَلاء في تَرجَمَةِ السَّيِّدَة عائِشَة — ج٢', en:'"Keeping one\'s commitments well is part of faith" — narrated by al-Hakim and cited by al-Dhahabi in Siyar A\'lam al-Nubala in the biography of Lady Aisha — vol. 2'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 2 — وَفاءُ النَّبيِّ ﷺ في صُلحِ الحُدَيبِيَة
       Source: صحيح البخاري + islamweb.net/ar/article/158201
       ────────────────────────────────────────── */
    {
      icon:'📜', scene:'desert', character:'🧔',
      title: { ar:'كَلِمَتُهُ مِثلُ الجَبَل: وَفاءُ النَّبيِّ ﷺ في الحُدَيبِيَة', en:'His word stood like a mountain: The Prophet\'s ﷺ faithfulness at Hudaybiyah' },
      pages: [
        { scene:'desert', character:'🧔',
          text:{ ar:'في عامِ السَّادِسِ مِن الهِجرَة، سارَ النَّبيُّ ﷺ مَعَ أَلفٍ وأَربَعِمِئَةٍ مِن الصَّحابَةِ نَحوَ مَكَّة — لا لِلحَرب، بَل لِلعُمرَة والطَّواف. كانَت القُلوبُ تَخفُقُ اشتِياقاً للبَيتِ الحَرام بَعدَ سِتِّ سِنينَ مِن الفِراق.<br><br>لَكِنَّ قُرَيشاً أَغلَقَت الطَّريق. أَرسَلوا رُسُلَهُم، وجاءَهُم النَّبيُّ ﷺ لِيُفاوِضَ بِالكَلِمَة لا بِالسَّيف. كانَت الرِّياحُ الجافَّةُ تَحمِلُ رائِحَةَ الرَّمالِ الحارَّة، والتَّوتُّرُ يَملَأُ الهَواء.',
                 en:'In the sixth year after the Hijrah, the Prophet ﷺ marched with fourteen hundred Companions toward Makkah — not for war, but for Umrah and the circling of the House. Hearts pounded with longing for the Sacred House after six years of separation.<br><br>But Quraysh blocked the road. They sent their delegates, and the Prophet ﷺ came to negotiate with words, not swords. Hot desert winds carried the scent of warm sand, and tension filled the air.' } },
        { scene:'desert', character:'📜',
          text:{ ar:'جاءَ سُهَيلُ بنُ عَمرٍو يَمشي بِخُطُواتٍ واثِقَة، وفي عَينَيهِ صَلابَةُ المُفاوِض المُحنَّك. وبَدَأَت المُفاوَضات، وبَدَأَت الشُّروطُ تُمليها قُرَيش شَرطاً بَعدَ شَرط.<br><br>كانَ مِن الشُّروطِ المُحرِجَة: <b>«مَن جاءَكَ مِنّا مُسلِماً رَدَدتَهُ إلَينا!»</b> ضاقَت صُدورُ الصَّحابَة. عُمَرُ رضي الله عنه لم يَتَمالَك نَفسَه: <b>«يا نَبيَّ الله! أَنَحنُ لَسنا على الحَقّ؟!»</b><br><br>قالَ النَّبيُّ ﷺ بِهُدوءٍ عَميق: <b>«بَلى. لَكِنَّنا وَقَّعنا العَهدَ — ولا نَغدِر.»</b>',
                 en:'Suhayl ibn \'Amr walked forward with the steady stride of a seasoned negotiator, and in his eyes was the hardness of an experienced bargainer. The negotiations began, and Quraysh dictated condition after condition.<br><br>Among the humiliating conditions: <b>"Any Muslim who comes to you from us — you must return him to us!"</b> The Companions\' chests tightened with anguish. Umar رضي الله عنه could not hold back: <b>"O Prophet of Allah! Are we not upon the truth?!"</b><br><br>The Prophet ﷺ said with deep calm: <b>"Indeed. But we have signed the covenant — and we do not betray."</b>' } },
        { scene:'desert', character:'😓',
          text:{ ar:'وفَجأَةً، جاءَ صَوتٌ يَشُقُّ الهَواء — رَجُلٌ يَجرِي بِأَغلالٍ في يَدَيه، يَكادُ يَسقُطُ مِن التَّعَب. كانَ أَبو جَندَل بنُ سُهَيل — ابنُ المُفاوِضِ نَفسِه! كانَ قَد أَسلَمَ وهَرَبَ مِن عَذابِ أَبيهِ، يَرجو أن تَحمِيَهُ جُيوشُ الإسلام.<br><br>صاحَ بِصَوتٍ كَسير: <b>«يا مَعشَرَ المُسلِمين! أَأُرَدُّ إلى المُشرِكين يَفتِنوني في ديني؟!»</b> اهتَزَّت القُلوب. تَقاطَرَت الدُّموع. كانَ المَشهَدُ أَلَماً لا يُطاق.',
                 en:'Suddenly a voice split the air — a man running in chains, nearly collapsing from exhaustion. It was Abu Jandal ibn Suhayl — the son of the very negotiator himself! He had embraced Islam and fled his father\'s torture, hoping the armies of Islam would shield him.<br><br>He cried out with a broken voice: <b>"O Muslims! Am I to be returned to the polytheists to be tortured away from my religion?!"</b> Hearts trembled. Tears streamed. The scene was an unbearable pain.' },
          choice:{ q:{ar:'ماذا قَرَّرَ النَّبيُّ ﷺ بِشَأنِ أَبي جَندَل؟',en:'What did the Prophet ﷺ decide regarding Abu Jandal?'},
            opts:[
              { t:{ar:'أَخفاهُ في المَعسكَر حتّى يَنتَهيَ الاجتِماع.', en:'He hid him in the camp until the meeting ended.'},c:false,
                exp:{ar:'لا — النَّبيُّ ﷺ كانَ أَصدَقَ مِن أَن يَفعَلَ ذلِكَ. الوَفاءُ بِالعَهدِ لا يُجيزُ الحِيَل.',en:'No — the Prophet ﷺ was too truthful to do that. Honouring a covenant does not permit tricks.'} },
              { t:{ar:'رَدَّهُ لِأَبيهِ وَفاءً بِشَرطِ الصُّلح.', en:'He returned him to his father in fulfilment of the treaty condition.'},c:true,
                exp:{ar:'نَعَم — وكانَ ذلِكَ مِن أَصعَبِ القَراراتِ لَكِنَّهُ الوَفاء! وقالَ لَهُ: «اصبِر، فإنَّ اللهَ جاعِلٌ لَكَ فَرَجاً».',en:'Yes — and it was one of the hardest decisions, but it was loyalty! He said to him: "Be patient — Allah will make a way out for you."'} },
              { t:{ar:'طَرَدَ سُهَيلاً وأَبطَلَ الاتِّفاق.', en:'He expelled Suhayl and cancelled the agreement.'},c:false,
                exp:{ar:'لا — النَّبيُّ ﷺ أَتَمَّ الاتِّفاقَ وَفاءً بِعَهدِه ووَثِقَ بِوَعدِ الله.',en:'No — the Prophet ﷺ completed the agreement loyal to his word, trusting Allah\'s promise.'} },
            ] } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'قالَ النَّبيُّ ﷺ لأَبي جَندَل بِصَوتٍ فيهِ دَمعٌ مَكتوم: <b>«يا أَبا جَندَل، اصبِر واحتَسِب، فإنَّ اللهَ جاعِلٌ لَكَ ولِمَن مَعَكَ فَرَجاً ومَخرَجاً!»</b><br><br>كانَت القُلوبُ تَنزُّ أَلَماً. لَكِنَّ النَّبيَّ ﷺ كانَ يَرى ما لا يَرَون. كانَ يَعلَمُ أنَّ الوَفاءَ بِالعَهدِ — حتّى في أَشَدِّ اللَّحظاتِ إيلاماً — هو الطَّريقُ إلى نَصرٍ أَعظَم.',
                 en:'The Prophet ﷺ said to Abu Jandal in a voice holding back a secret tear: <b>"O Abu Jandal — be patient and seek reward from Allah. For Allah will make a way out for you and those with you!"</b><br><br>Hearts dripped with pain. But the Prophet ﷺ could see what they could not see. He knew that faithfulness to the covenant — even in the most agonising moment — was the road to a far greater victory.' } },
        { scene:'garden', character:'🏆',
          text:{ ar:'وصَدَقَ اللهُ ورَسوله. بَعدَ سَنَتَين مِن صُلحِ الحُدَيبِيَة، فَتَحَ المُسلِمونَ مَكَّةَ فَتحاً مُبيناً! كانَ صُلحُ الحُدَيبِيَةِ الَّذي بَدا هَزيمَةً هو في الحَقيقَةِ أَعظَمُ انتِصار.<br><br>قالَ اللهُ تَعالى: ﴿ إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ﴾ — وكانَت بِدايَتُهُ ذلِكَ العَهدَ الَّذي أَبى النَّبيُّ ﷺ أَن يَنقُضَه.<br><br><b>الوَفاءُ بِالعَهدِ ولَو كانَ مُرّاً — هو طَريقُ النَّصرِ القادِم!</b>',
                 en:'And Allah and His Messenger spoke truth. Two years after the Treaty of Hudaybiyah, the Muslims conquered Makkah in a clear and glorious victory! The Treaty of Hudaybiyah — which had seemed like a defeat — was in reality the greatest triumph.<br><br>Allah said: ﴿ "Indeed We have given you a manifest victory" ﴾ — and it began with that covenant the Prophet ﷺ refused to break.<br><br><b>Fulfilling your promise even when it is bitter — that is the road to the coming victory!</b>' } },
        { scene:'madinah', character:'🌿',
          text:{ ar:'أَبو جَندَلٍ رضي الله عنه — لَم يُتَركُ لِيَهلِك. صَبَرَ كَما أَوصاهُ النَّبيُّ ﷺ، وأَنزَلَ اللهُ آيَةً أَعفَت النِّساءَ المُؤمِناتِ مِن شَرطِ الرَّدّ، وتَوالَت الأَحداثُ حتّى كانَ الفَتحُ الأَكبَر. وعاشَ أَبو جَندَلٍ حُرّاً عَزيزاً في الإسلام.<br><br>والدَّرسُ الَّذي يَعيشُ في الأَجيال — أن الصَّحابِيَّ الجَليلَ سَهلَ بنَ حُنَيفٍ رضي الله عنه قالَ يَومَ صِفِّين حينَ كانَ النّاسُ يَتَجادَلون في قَراراتِ قادَتِهِم: <b>«اتَّهِموا رَأيَكُم! واللهِ لَقَد رَأَيتُنا يَومَ الحُدَيبِيَة ولَو أَنّي أَستَطيعُ أن أَرُدَّ أَمرَ رَسولِ اللهِ ﷺ لَرَدَدتُه — ولَكِنَّ اللهَ سُبحانَه أَعلَمُ بِالعَواقِب!»</b><br><br><b>الوَفاءُ بِالعَهدِ حَتّى حينَ تَبكي القُلوب — هو طَريقُ الحِكمَةِ والنَّصرِ القادِم!</b>',
                 en:'Abu Jandal رضي الله عنه — was not left to perish. He was patient as the Prophet ﷺ had counselled, Allah revealed a verse exempting believing women from the return condition, events unfolded, and the great conquest came. Abu Jandal lived free and honoured in Islam.<br><br>And the lesson that lives through generations — that the noble Companion Sahl ibn Hunayf رضي الله عنه said on the Day of Siffin when people were debating their leaders\' decisions: <b>"Question your own judgement! By Allah, I saw us on the day of Hudaybiyah — and if I could have rejected the Messenger\'s ﷺ command I would have. But Allah knows the outcomes better than us!"</b><br><br><b>Honouring your pledge even when hearts weep — that is the path of wisdom and of the coming victory!</b>' } },
      ],
      quiz: [
        { q:{ar:'مَن كانَ سُهَيلُ بنُ عَمرو في صُلحِ الحُدَيبِيَة؟', en:'Who was Suhayl ibn \'Amr in the Hudaybiyah treaty?'},
          opts:[
            { t:{ar:'مُفاوِضٌ مِن قِبَلِ قُرَيش', en:'A negotiator on behalf of Quraysh'}, c:true },
            { t:{ar:'صَحابِيٌّ كَبير', en:'A senior Companion'}, c:false },
            { t:{ar:'وَالِدُ النَّبيِّ ﷺ', en:'The Prophet\'s ﷺ father'}, c:false },
          ] },
        { q:{ar:'لِماذا كانَ صُلحُ الحُدَيبِيَةِ «فَتحاً مُبيناً» رَغمَ قَسوَةِ شُروطِه؟', en:'Why was the Treaty of Hudaybiyah a "manifest victory" despite its harsh conditions?'},
          opts:[
            { t:{ar:'لأنَّ المُسلِمينَ انتَصَروا في المَعرَكَة', en:'Because the Muslims won the battle'}, c:false },
            { t:{ar:'لأنَّ الوَفاءَ بِهِ فَتَحَ الطَّريقَ لِفَتحِ مَكَّة', en:'Because fulfilling it opened the road to the conquest of Makkah'}, c:true },
            { t:{ar:'لأنَّ قُرَيشاً أَعطَت المُسلِمينَ المال', en:'Because Quraysh gave the Muslims money'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ النَّبيُّ ﷺ لأَبي جَندَل حينَ رَدَّهُ لِأَبيه؟', en:'What did the Prophet ﷺ say to Abu Jandal when he returned him to his father?'},
          opts:[
            { t:{ar:'«اهرُب إلى مَكان آخَر»', en:'"Flee to another place"'}, c:false },
            { t:{ar:'«اصبِر واحتَسِب، فإنَّ اللهَ جاعِلٌ لَكَ فَرَجاً»', en:'"Be patient — Allah will make a way out for you"'}, c:true },
            { t:{ar:'«لا أَستَطيعُ مُساعَدَتَك»', en:'"I cannot help you"'}, c:false },
          ] },
      ],
      moral:      { ar:'الوَفاءُ بِالعَهدِ ولَو كانَ ثَمَنُهُ غالِياً — هو بَذرَةُ النَّصرِ القادِم.', en:'Honouring your pledge even when the price is high — that is the seed of the coming victory.' },
      badge:      { icon:'📜', title:{ar:'وِسامُ العَهدِ الثّابِت', en:'Badge of the Steadfast Covenant'} },
      reflect:    [
        {ar:'هَل سَبَقَ وأَعطَيتَ وَعداً ثُمَّ وَجَدتَ أنَّهُ صَعبٌ؟ كَيفَ تَصَرَّفتَ؟', en:'Have you ever made a promise you found hard to keep? What did you do?'},
        {ar:'كَيفَ يُمكِنُ أن يَكونَ «الخَسارَة اليَوم» سَبَباً لِـ«نَصرٍ غَدٍ» إذا أَنتَ وَفيتَ بِعَهدِك؟', en:'How can "losing today" become the reason for "winning tomorrow" when you keep your promise?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخاري في كِتابِ الشُّروط — قِصَّةُ صُلحِ الحُدَيبِيَة كامِلَة. المَصدَر: إسلام ويب — مَقالة ١٥٨٢٠١ «صُلحُ الحُدَيبِيَة دُروسٌ وعِبَر»', en:'Narrated by Bukhari in the Book of Conditions — the full story of the Treaty of Hudaybiyah. Source: islamweb.net/ar/article/158201'},
        {ar:'أَنزَلَ اللهُ سورَةَ الفَتح مُباشَرَةً بَعدَ الصُّلح، وسَمَّى اللهُ ذلِكَ الصُّلحَ الَّذي رَأى فيهِ بَعضُهُم هَزيمَةً: «فَتحاً مُبيناً» [سورة الفتح: ١]', en:'Allah revealed Surah Al-Fath immediately after the treaty, calling what some thought a defeat a "manifest victory" [Surah Al-Fath: 1]'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 3 — وَفاءُ أَبي عُبَيدَةَ لِأَهلِ حِمص
       Source: islamweb.net (الكامل في التاريخ) + سير أعلام النبلاء — الذهبي ج١
       ────────────────────────────────────────── */
    {
      icon:'🏛️', scene:'madinah', character:'⚔️',
      title: { ar:'الجُندِيُّ الَّذي رَدَّ الذَّهَب: وَفاءُ أَبي عُبَيدَةَ لِأَهلِ حِمص', en:'The soldier who returned the gold: Abu \'Ubaydah\'s loyalty to the people of Homs' },
      pages: [
        { scene:'madinah', character:'⚔️',
          text:{ ar:'امتَدَّت مَدينَةُ حِمصَ الشّامِيَّةِ أَمامَ الجُيوشِ الإسلامِيَّة كَلَوحَةٍ مِن الحِجارَةِ الذَّهَبيَّة — أَسوارُها العاليَةُ تَعكِسُ ضَوءَ الشَّمسِ الرّاحِلَة، وأَزِقَّتُها تَعِجُّ بِالتُّجّارِ والحِرَفيِّين. فَتَحَها أَبو عُبَيدَةَ بنُ الجَرّاحِ رضي الله عنه — الَّذي وَصَفَهُ النَّبيُّ ﷺ بِأَنَّهُ «أَمينُ هذِهِ الأُمَّة» — وعَقَدَ مَعَ أَهلِها العَهدَ الواضِح: يَدفَعونَ الجِزيَةَ، والمُسلِمونَ يَحمونَهُم مِن كُلِّ عَدُوٍّ يَطرَأُ.<br><br>كانَ أَبو عُبَيدَةَ رَجُلاً نَحيفَ الجِسمِ واسِعَ الرُّوح، وَجهُهُ مَنحوتٌ بِالزُّهدِ والسَّكينَة، وعَيناهُ هادِئَتانِ كَنُجومِ اللَّيلِ تَحتَ سَماءِ الصَّحراء. حِينَ يَتَكَلَّمُ يَشعُرُ مَن يَسمَعُهُ أنَّ كُلَّ كَلِمَةٍ يَنطِقُها مَحفورَةٌ في حَجَر — لا تَزولُ ولا تَتَغَيَّر.',
                 en:'The Syrian city of Homs spread before the Muslim armies like a painting of golden stone — its high walls reflecting the fading sun, its lanes bustling with merchants and craftsmen. Abu \'Ubaydah ibn al-Jarrah رضي الله عنه — described by the Prophet ﷺ as "the trustee of this nation" — had conquered it and made a clear covenant with its people: they pay the jizyah, and the Muslims protect them from every threat that comes.<br><br>Abu \'Ubaydah was a man of lean body but vast spirit, his face carved by asceticism and tranquillity, his eyes as calm as desert stars under a night sky. When he spoke, every listener felt that each word he uttered was chiselled in stone — never fading, never changing.' } },
        { scene:'desert', character:'😰',
          text:{ ar:'لَكِن فَجَأَةً، جاءَت أَخبارٌ مُرعِبَة: هِرقلُ قَيصَرُ الرُّومِ يَجمَعُ جَيشاً ضَخماً لا يُوصَف — عَشَراتُ الآلاف مِن المُقاتِلين يَتَقَدَّمونَ نَحوَ الشّام!<br><br>اجتَمَعَ القادَةُ في خَيمَةِ القِيادَة، والكُلُّ يَعرِفُ أنَّ الصُّمودَ في حِمص أَمامَ هذا الجَيشِ الهائِلِ يَكادُ يَكونَ مُستَحيلاً. تَكَلَّمَ شُرَحبيلُ بنُ حَسَنَة: <b>«يا أَبا عُبَيدَة! رَأيي الانسِحابُ مِن حِمص — نَتَجَمَّعُ على أَطرافِ الجَزيرَة ونُقاتِلُهُم مِن هُناك.»</b>',
                 en:'But suddenly terrible news arrived: Heraclius, Emperor of Rome, was assembling an indescribable army — tens of thousands of soldiers advancing toward the Levant!<br><br>The commanders gathered in the command tent, and all knew that holding Homs against this colossal army was nearly impossible. Shurabbil ibn Hasanah spoke: <b>"O Abu \'Ubaydah! My opinion is to withdraw from Homs — let us gather at the edge of Arabia and fight them from there."</b>' } },
        { scene:'mosque', character:'💰',
          text:{ ar:'كانَ القَرارُ ثَقيلاً على أَبي عُبَيدَة. لَكِنَّهُ وافَقَ. ثُمَّ جاءَ السُّؤالُ الَّذي يُميِّزُ الوَفِيَّ مِن غَيرِه: <b>«ماذا نَفعَلُ بِأَموالِ الجِزيَةِ الَّتي أَخَذنا مِن أَهلِ حِمص؟»</b><br><br>لم يَتَرَدَّد أَبو عُبَيدَة طَرفَةَ عَين. أَمَرَ حَبيبَ بنَ مَسلَمَة — عامِلَهُ على الخَراج — بِصَوتٍ لا يَقبَلُ النِّقاش: <b>«رُدَّ على القَومِ الَّذينَ كُنّا صالَحناهُم مِن أَهلِ حِمص كُلَّ ما كُنّا أَخَذنا مِنهُم!»</b>',
                 en:'The decision weighed heavily on Abu \'Ubaydah. But he agreed. Then came the question that separates the loyal from others: <b>"What do we do with the jizyah money we took from the people of Homs?"</b><br><br>Abu \'Ubaydah did not hesitate for an instant. He ordered Habib ibn Maslamah — his tax official — in a voice that left no room for debate: <b>"Return to the people of Homs with whom we made our treaty every single thing we took from them!"</b>' },
          choice:{ q:{ar:'لِماذا أَمَرَ أَبو عُبَيدَةَ بِرَدِّ الأَموال لِأَهلِ حِمص؟',en:'Why did Abu \'Ubaydah order the money returned to the people of Homs?'},
            opts:[
              { t:{ar:'لأنَّهُ كانَ يَخافُ مِنهُم.', en:'Because he was afraid of them.'},c:false,
                exp:{ar:'لا — أَبو عُبَيدَةَ لم يَخَف مِن البَشَر. بَل خافَ مِن اللهِ أن يَأخُذَ أَموالاً دونَ أن يُوَفِّيَ ما أَخَذَها لأَجلِه!',en:'No — Abu \'Ubaydah did not fear people. He feared Allah — he would not take money without delivering what it was taken for!'} },
              { t:{ar:'لأنَّ مَن لا يَستَطيعُ الوَفاءَ بِالحِماية لا يَحِلُّ لَهُ أَخذُ المال.', en:'Because one who cannot fulfil the protection has no right to take the money.'},c:true,
                exp:{ar:'نَعَم! الوَفاءُ الحَقيقيُّ هو أن تُعطيَ مَن أَخَذتَ مِنهُ حَقَّهُ كامِلاً حينَ لا تَستَطيعُ الوَفاءَ بِوَعدِك.',en:'Yes! True loyalty is giving back what you took when you cannot fulfil your promise.'} },
              { t:{ar:'لأنَّ الأَموالَ كانَت قَليلَة جِدّاً ولا تُجدي.', en:'Because the money was very little and not worth much.'},c:false,
                exp:{ar:'لا — القَضيَّةُ لَيسَت مِقدارَ المال بَل مَبدَأُ الوَفاء.',en:'No — the issue is not the amount of money, it is the principle of loyalty.'} },
            ] } },
        { scene:'madinah', character:'😮',
          text:{ ar:'جاءَ رِجالُ حِمصَ يَتَساءَلون، وهُم يَرَون جُنوداً يَضَعونَ صَناديقَ الأَموالِ على عَتَباتِ بُيوتِهِم: <b>«لِماذا تَرُدُّون أَموالَنا؟!»</b><br><br>قالَ أَحَدُ الجُندِ بِعِزَّةٍ وهُدوء: <b>«إنّا أَخَذنا هذِهِ الأَموالَ بِشَرطِ أن نَحمِيَكُم. وقَد صارَ في أَيدينا ما لا نَستَطيعُ مَعَهُ حِمايَتَكُم. فلا يَحِلُّ لَنا أن نَأخُذَ ما لَم نُوَفِّ شَرطَه!»</b><br><br>وَقَفَ أَهلُ حِمصَ مَذهولين. أَينَ هذا في تاريخِ البَشَرِيَّة؟!',
                 en:'The men of Homs came asking questions, watching soldiers place money chests on their doorsteps: <b>"Why are you returning our money?!"</b><br><br>One of the soldiers replied with dignity and calm: <b>"We took this money on the condition of protecting you. And now things have changed such that we cannot protect you. It is not lawful for us to keep what we did not fulfil our obligation for!"</b><br><br>The people of Homs stood astounded. Where in all of human history was such a thing found?!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'بَكى كَثيرٌ مِن أَهلِ حِمص. رَجُلٌ عَجوزٌ ذو لِحيَةٍ بَيضاءَ يَهتَزُّ مِن البُكاء، وامرَأَةٌ تُمسِكُ كيسَ الأَموالِ المَرتَجَعِ بِيَدَينِ مُرتَجِفَتَين لا تُصَدِّقُ ما تَرى. جَلَسَ كِبارُ المَدينَةِ في السّاحَةِ الكُبرى وقالوا كَلِماتٍ حَفِظَها التّاريخُ أَبَداً: <b>«واللهِ لَيُفضِّلَنَّ وِلايَتُكُم على ما كُنّا فيهِ مِن حُكمِ الرُّومِ والفُرس — لَقَد ظَلَمونا وأَخَذوا أَموالَنا وانسَحَبوا! أَمّا أَنتُم فَرَدَدتُم ما أَخَذتُم وأَحسَنتُم!»</b><br><br>دَخَلَت بُذورُ الوَفاءِ في تِلكَ القُلوبِ. ومَن يَزرَعِ الوَفاءَ يَحصُدُ القُلوب. الوَفاءُ يَفتَحُ القُلوبَ قَبلَ أن تَفتَحَ الجُيوشُ الأَبواب!',
                 en:'Many of the people of Homs wept. An old man with a white beard shook with sobbing, and a woman held the returned money bag in trembling hands, unable to believe what she saw. The city\'s elders gathered in the great square and spoke words history preserved forever: <b>"By Allah, your rule is better than anything we knew under the Romans or Persians — they wronged us, took our money, and withdrew! But you returned what you had taken and treated us with excellence!"</b><br><br>Seeds of loyalty entered those hearts. Whoever plants loyalty reaps hearts. Loyalty opens hearts before armies can open gates!' } },
        { scene:'madinah', character:'🏛️',
          text:{ ar:'وعادَ أَبو عُبَيدَةَ رضي الله عنه بَعدَ مَعرَكَةِ اليَرموكِ الكُبرى — أَعظَمِ انتِصاراتِ الإسلامِ في الشّام — وأَعادَ فَتحَ حِمص للمَرَّةِ الثّانيَة. هذِهِ المَرَّةَ كانَ الناسُ يَنتَظِرونَهُ عندَ البَوّابَة، وكانَت الأَبوابُ مَفتوحَةً قَبلَ أن يَطرُقَها أَحَد. كانَت الأَبوابُ فُتِحَت في القُلوبِ مِنذُ أَن ردَّ الجُنودُ أَموالَ الجِزيَة!<br><br><b>الوَفاءُ يَصنَعُ مِنكَ مَعقِلاً لا يَهدِمُهُ جَيشٌ ولا يَزيلُهُ زَمان. حِينَ تَخسَرُ المالَ لِأَجلِ العَهدِ تَكسَبُ ما هو أَثمَنُ مِن المال — قُلوبَ البَشَر ورِضا الرَّحمَن!</b>',
                 en:'Abu \'Ubaydah رضي الله عنه returned after the great Battle of Yarmouk — the greatest Muslim triumph in the Levant — and re-conquered Homs for the second time. This time the people were waiting for him at the gate, and the doors were open before anyone knocked. The gates had been opened in hearts ever since the soldiers returned the jizyah money!<br><br><b>Loyalty builds a fortress no army can demolish and no time can erase. When you lose money for the sake of your covenant you gain what is more precious than money — the hearts of people and the pleasure of the Most Merciful!</b>' } },
      ],
      quiz: [
        { q:{ar:'لِماذا اضطُرَّ أَبو عُبَيدَةَ لِلانسِحابِ مِن حِمص؟', en:'Why was Abu \'Ubaydah forced to withdraw from Homs?'},
          opts:[
            { t:{ar:'لأنَّ أَهلَها خانوا المُسلِمين', en:'Because its people betrayed the Muslims'}, c:false },
            { t:{ar:'لِمُواجَهَةِ جَيشٍ رُومانِيٍّ ضَخمٍ قادِم', en:'To face a massive Roman army that was approaching'}, c:true },
            { t:{ar:'لأنَّ الطَّعامَ نَفِدَ', en:'Because the food ran out'}, c:false },
          ] },
        { q:{ar:'ماذا فَعَلَ أَبو عُبَيدَةَ بِأَموالِ الجِزيَةِ حينَ انسَحَبَ؟', en:'What did Abu \'Ubaydah do with the jizyah money when he withdrew?'},
          opts:[
            { t:{ar:'أَخَذَها مَعَهُ لِيُموِّلَ الجَيش', en:'He took it with him to fund the army'}, c:false },
            { t:{ar:'رَدَّها كامِلَةً لِأَهلِها', en:'He returned all of it to its owners'}, c:true },
            { t:{ar:'وَزَّعَها على المُحتاجين', en:'He distributed it to those in need'}, c:false },
          ] },
        { q:{ar:'ما أَثَرُ وَفاءِ أَبي عُبَيدَةَ في قُلوبِ أَهلِ حِمص؟', en:'What effect did Abu \'Ubaydah\'s loyalty have on the hearts of the people of Homs?'},
          opts:[
            { t:{ar:'فَرِحوا وبَعضُهُم دَخَلَ الإسلام', en:'They rejoiced and some entered Islam'}, c:true },
            { t:{ar:'غَضِبوا وساعَدوا الرُّومان', en:'They became angry and helped the Romans'}, c:false },
            { t:{ar:'لم يُبالوا بِالأَمر', en:'They were indifferent to the matter'}, c:false },
          ] },
      ],
      moral:      { ar:'الوَفاءُ بِالعَهدِ — حتّى حينَ يَكلِّفُكَ المال والمَوقِف — هو مَا يَفتَحُ القُلوبَ وَيُغيِّرُ التاريخ.', en:'Honouring your covenant — even when it costs you wealth and advantage — is what opens hearts and changes history.' },
      badge:      { icon:'🏛️', title:{ar:'وِسامُ الوَفاءِ لِمَن لا يَعرِفُك', en:'Badge of Loyalty to Those Who Don\'t Know You'} },
      reflect:    [
        {ar:'هَل تَعرِفُ شَخصاً وَفى بِوَعدِهِ حتّى حينَ كانَ ذلِكَ صَعباً عَليه؟ كَيفَ شَعَرتَ تِجاهَه؟', en:'Do you know someone who kept their promise even when it was hard for them? How did you feel toward them?'},
        {ar:'إذا أَعطَيتَ صَديقَكَ وَعداً ثُمَّ عَلِمتَ أنَّهُ سَيُكَلِّفُكَ الكَثير — ماذا ستَفعَل؟', en:'If you gave your friend a promise and then found out it would cost you a great deal — what would you do?'}
      ],
      didYouKnow: [
        {ar:'ذَكَرَت هذِهِ الوَاقِعَةَ كُتُبُ التّاريخِ الإسلامي، وأَوردَها ابنُ الأَثير في الكامِلِ في التّاريخ، كما أَشارَ إليها الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء في تَرجَمَةِ أَبي عُبَيدَةَ — ج١', en:'This incident is recorded in Islamic historical works, cited by Ibn al-Athir in al-Kamil fi al-Tarikh, and referenced by al-Dhahabi in Siyar A\'lam al-Nubala in the biography of Abu \'Ubaydah — vol. 1'},
        {ar:'أَبو عُبَيدَةَ بنُ الجَرّاح رضي الله عنه وَصَفَهُ النَّبيُّ ﷺ بِأنَّهُ «أَمينُ هذِهِ الأُمَّة» — وكانَ وَفاؤُهُ هو جَوهَرَ أَمانَتِه. المَصدَر: إسلام ويب — مَكتَبَة', en:'Abu \'Ubaydah ibn al-Jarrah رضي الله عنه was described by the Prophet ﷺ as "the trustee of this nation" — and his loyalty was the very essence of that trust. Source: islamweb.net library'},
      ],
    },

    /* ──────────────────────────────────────────
       STORY 4 — وَفاءُ النَّبيِّ ﷺ لِجِذعِ النَّخلَة
       Source: رواه البخاري (حديث ٩١٨) + islamweb.net/ar/article/177427
       ────────────────────────────────────────── */
    {
      icon:'🌴', scene:'mosque', character:'🧔',
      title: { ar:'بُكاءُ الجِذع: حينَ وَفى النَّبيُّ ﷺ حتّى لِشَجَرَة!', en:'The weeping trunk: When the Prophet ﷺ was loyal even to a tree!' },
      pages: [
        { scene:'mosque', character:'🧔',
          text:{ ar:'كانَ مَسجِدُ النَّبيِّ ﷺ في المَدينَةِ المُنَوَّرَة مَكاناً بَسيطاً تَسكُنُهُ البَرَكَة — جُدرانٌ مِن الطِّينِ الأَسمَر وسَقفٌ مِن جَريدِ النَّخلِ الجافّ، والأَرضُ تَنبَعِثُ مِنها رائِحَةُ التُّرابِ المَمزوجِ بِعَرَقِ الإيمان. كانَت أَشِعَّةُ الفَجرِ تَتَسَلَّلُ مِن بَينِ السِّعفِ لِتَرسُمَ خُطوطاً مِن نور.<br><br>وفي وَسَطِ ذلِكَ الفَضاءِ المُبارَكِ كانَ يَقومُ جِذعُ نَخلَةٍ قَديمَة — صَلبٌ بَنِيٌّ مُتَشَقِّقُ القِشرَة مِن طولِ العُمر — يَتَّكِئُ عَلَيهِ النَّبيُّ ﷺ كُلَّ جُمُعَةٍ حينَ يَقِفُ لِيُعَلِّمَ النّاسَ دِينَهُم. كانَ الصَّحابَةُ يَجلِسونَ حَولَه في صُفوفٍ مُنتَظِمَة، وُجوهُهُم تَعلوها نَضرَةُ السَّامِعِ لِأَعظَمِ كَلامٍ في التّاريخ.',
                 en:'The Prophet\'s ﷺ mosque in Madinah was a simple place full of blessing — walls of dark mud and a roof of dry palm fronds, the ground breathing the scent of earth mingled with the sweat of faith. The rays of dawn would filter through the fronds, drawing lines of light across the floor.<br><br>And in the centre of that blessed space stood the trunk of an ancient palm — firm, brown, its bark cracked with age — against which the Prophet ﷺ would lean every Friday when he stood to teach the people their religion. The Companions would sit around it in neat rows, their faces bright with the glow of those who hear the greatest speech in history.' } },
        { scene:'mosque', character:'🌴',
          text:{ ar:'وفي يَومٍ مِن تِلكَ الأيّام المُضيئَة، وَقَفَ أَحَدُ الأَنصارِ الكِرامِ وفي عَينَيهِ بَريقٌ مِن الفِكرَةِ النَّيِّرَة: <b>«يا رَسولَ الله! أَلا نَصنَعُ لَكَ مِنبَراً تَقومُ عَلَيهِ حينَ تَخطُب؟ حتّى يَراكَ مَن في أَطرافِ المَسجِدِ ويَسمَعوا صَوتَكَ الشَّريف!»</b><br><br>ابتَسَمَ النَّبيُّ ﷺ وقَبِل. جاءَ النَّجّارُ وصَنَعَ المِنبَرَ بِيَدَيهِ بِإِتقانٍ وإِخلاص — ثَلاثُ دَرَجاتٍ مِن خَشَبِ الأَثَلِ العَطِر، نَظيفٌ مُتينٌ يَفوحُ مِنهُ أَرَجُ الخَشَبِ الطّازَج. وحِينَ جاءَ يَومُ الجُمُعَة، صَعِدَ النَّبيُّ ﷺ تِلكَ الدَّرَجاتِ الثَّلاثَ لِأَوَّلِ مَرَّة، وبَدَأَ يَتَكَلَّمُ. لَكِنَّ شَيئاً لَم يَكُن في الحِسبان كانَ عَلى وَشكِ الحُدوث.',
                 en:'One day during those luminous times, one of the noble Ansar stood up, a glimmer of bright inspiration in his eyes: <b>"O Messenger of Allah! Shall we build a pulpit for you to stand on when you preach? So that those at the far edges of the mosque can see you and hear your noble voice!"</b><br><br>The Prophet ﷺ smiled and accepted. A carpenter came and built the pulpit with his own hands, with skill and sincerity — three steps of fragrant tamarisk wood, clean and sturdy, breathing the scent of fresh timber. When Friday came, the Prophet ﷺ ascended those three steps for the first time and began to speak. But something unforeseen was about to happen.' } },
        { scene:'mosque', character:'😢',
          text:{ ar:'ثُمَّ حَدَثَ شَيءٌ لم يَتَوَقَّعهُ أَحَد. بَعدَ أَن انتَهى النَّبيُّ ﷺ مِن الخُطبَة، ارتَفَعَ مِن مَكانِ الجِذعِ صَوتٌ غَريب — صَوتٌ يُشبِهُ بُكاءَ الإنسانِ الَّذي يَتَألَّم!<br><br>وَقَفَ الصَّحابَةُ مَذهولين. ما هذا الصَّوت؟ التَفَتوا فَرَأوا الجِذعَ القَديمَ — الجِذعَ الَّذي تَرَكَهُ النَّبيُّ ﷺ الآن لِيَصعَدَ المِنبَرَ — يَنِئُّ ويَحِنُّ كَحَنينِ النّاقَةِ على وَلَدِها!',
                 en:'Then something happened that no one expected. After the Prophet ﷺ finished his sermon, from the place of the trunk there rose a strange sound — a sound like the weeping of a person in pain!<br><br>The Companions stood astonished. What was this sound? They turned and saw the old trunk — the trunk the Prophet ﷺ had just left to ascend the new pulpit — groaning and longing like a she-camel mourning her calf!' },
          choice:{ q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ حينَ سَمِعَ بُكاءَ الجِذع؟',en:'What did the Prophet ﷺ do when he heard the weeping of the trunk?'},
            opts:[
              { t:{ar:'تَجاهَلَ الصَّوتَ واستَمَرَّ في خُطبَتِه.', en:'He ignored the sound and continued his sermon.'},c:false,
                exp:{ar:'لا — النَّبيُّ ﷺ كانَ رَحيماً وَفِيّاً حتّى مَعَ الجَماداتِ الَّتي خَدَمَتهُ!',en:'No — the Prophet ﷺ was compassionate and loyal even toward inanimate things that had served him!'} },
              { t:{ar:'نَزَلَ وذَهَبَ إلى الجِذعِ وضَمَّهُ وسَكَّتَه.', en:'He descended, went to the trunk, embraced it and comforted it.'},c:true,
                exp:{ar:'نَعَم! هكَذا الوَفاء — لا يَنسى مَن خَدَمَهُ ولَو كانَ جَذعَ نَخلَة!',en:'Yes! Such is loyalty — never forgetting those who served you, even if it is a palm trunk!'} },
              { t:{ar:'طَلَبَ مِن الصَّحابَةِ قَطعَهُ وتَحريقَه.', en:'He asked the Companions to cut it and burn it.'},c:false,
                exp:{ar:'لا — بَل فَعَلَ العَكسَ تَماماً! الوَفِيُّ يَحتَرِمُ كُلَّ مَن أَسدى إليهِ مَعروفاً.',en:'No — he did the exact opposite! The loyal person honours everyone who did them good.'} },
            ] } },
        { scene:'mosque', character:'🤲',
          text:{ ar:'نَزَلَ النَّبيُّ ﷺ مِن المِنبَرِ الجَديد بِهُدوء. مَشى نَحوَ الجِذعِ القَديم. وَضَعَ يَدَيهِ الكَريمَتَين عَلَيه — كَما يَضَعُ الأَبُ يَدَهُ على رَأسِ ابنِهِ الحَزين.<br><br>وتَكَلَّمَ ﷺ بِصَوتٍ مُشبَعٍ بِالرَّحمَة، كَأَنَّهُ يُخاطِبُ كائِناً حَيّاً يَسمَع: <b>«اسكُن! إن شِئتَ غَرَستُكَ في رَوضَةٍ مِن رِياضِ الجَنَّةِ فَشَرِبتَ مِن أَنهارِها، وإن شِئتَ زَرَعتُكَ في مَكانِكَ!»</b>',
                 en:'The Prophet ﷺ descended calmly from the new pulpit. He walked toward the old trunk. He placed his noble hands upon it — as a father places his hand on the head of his sad child.<br><br>He spoke ﷺ in a voice filled with compassion, as if addressing a living being who could hear: <b>"Be still! If you wish, I will plant you in a garden of Paradise so you may drink from its rivers — and if you wish, I will replant you in your place!"</b>' } },
        { scene:'garden', character:'🌴',
          text:{ ar:'سَكَتَ الجِذع. تَوَقَّفَ أَنينُهُ فَجأَةً كَأنَّ صاحِبَهُ الحَبيبَ أَخَذَ بِيَدِه ومَسَحَ آلامَه. وخَيَّمَ على المَسجِدِ صَمتٌ مَهيبٌ عَميقٌ — صَمتٌ مَليءٌ بِالمَعنى، ثَقيلٌ بِالدُّموع. كانَت دُموعُ الصَّحابَةِ تَسيلُ في صَمت، والقُلوبُ تَنبِضُ بِدَهشَةٍ لَم تَعهَدها مِن قَبل.<br><br>قالَ ابنُ عَبّاسٍ رضي الله عنهما لَمّا سَمِعَ الحَديث: <b>«وكانَ الجِذعُ قَد حَنَّ حَنينَ الناقَةِ على وَلَدِها أو الصَّبِيِّ على أُمِّه — فأَتاهُ النَّبيُّ ﷺ فَوَضَعَ يَدَهُ عليهِ فَسَكَن.»</b> وقالَ عبدُ اللهِ بنُ عُمَر رضي الله عنهما: <b>«فاختارَ الجِذعُ أن يُغرَسَ في رَوضَةٍ مِن رِياضِ الجَنَّة فَتَنعَمُ أَبَداً بِما لا عَينٌ رَأَت ولا أُذُنٌ سَمِعَت!»</b>',
                 en:'The trunk fell silent. Its groaning stopped suddenly, as if its beloved had taken it by the hand and wiped away its pain. A profound, awe-filled silence descended over the mosque — a silence full of meaning, heavy with tears. The Companions\' tears fell silently, and hearts pulsed with a wonder they had never known before.<br><br>Ibn \'Abbas رضي الله عنهما said when he heard the narration: <b>"The trunk had longed with the longing of a she-camel for her calf, or a child for its mother — then the Prophet ﷺ came and placed his hand on it and it fell still."</b> And \'Abdullah ibn \'Umar رضي الله عنهما said: <b>"And the trunk chose to be planted in a garden of Paradise, to enjoy forever what no eye has seen and no ear has heard!"</b>' } },
        { scene:'mosque', character:'🌟',
          text:{ ar:'تِلكَ هي رِسالَةُ الجِذعِ لِلأَجيال. جَذعٌ خَشَبِيٌّ صامِتٌ — لا يَنطِقُ ولا يَملِكُ عَقلاً — بَكى حينَ تَرَكَهُ مَن أَلِفَهُ. فَما بالُنا نَحنُ بَني البَشَر الَّذينَ نَعقِلُ ونَشعُر؟! هَل نُوَفِّي بِعُهودِنا مَعَ مَن أَحبَبناهُم وأَحسَنوا إلَينا؟<br><br>يَقولُ الشُّيوخُ الكِبارُ حينَ يَروون هذِهِ القِصَّة وتَدمَعُ أَعيُنُهُم: <b>«الجِذعُ عَلَّمَنا الوَفاء! لَو وَفَّيتَ لِكُلِّ مَن أَعطاكَ يَوماً مِن أيّامِه وجُهداً مِن جُهدِه — لَفازَ بِكَ مَن يَصحَبُك!»</b><br><br><b>الوَفِيُّ الحَقيقيُّ لا يَنسى مَن أَعطاهُ — حتّى حينَ تَأتيهِ البَدائِلُ الأَجمَل والأَفضَل. كَلِمَتُهُ باقِيَةٌ كَجِذرِ الشَّجَرَةِ — ثابِتَةٌ لا تَتَزَعزَعُ أَمامَ الرِّياحِ والعَواصِف!</b>',
                 en:'That is the trunk\'s message for all generations. A wooden trunk — silent, without a mind — wept when the one it had grown close to left it. Then what of us, the children of Adam who think and feel?! Do we honour our bonds with those we loved and who were good to us?<br><br>The great elders say when they narrate this story, their eyes brimming with tears: <b>"The trunk taught us loyalty! If you were faithful to everyone who ever gave you a day of their time and an effort from their strength — whoever accompanies you would win a treasure in you!"</b><br><br><b>The truly loyal person never forgets those who gave to them — even when finer and better alternatives arrive. Their word remains like the root of a tree — firm and unshakeable before all winds and storms!</b>' } },
      ],
      quiz: [
        { q:{ar:'عَلامَ كانَ يَتَّكِئُ النَّبيُّ ﷺ حينَ يَخطُب قَبلَ بِناءِ المِنبَر؟', en:'What did the Prophet ﷺ lean on when preaching before the pulpit was built?'},
          opts:[
            { t:{ar:'عَمودٌ مِن حَجَر', en:'A stone pillar'}, c:false },
            { t:{ar:'جِذعُ نَخلَة', en:'A palm trunk'}, c:true },
            { t:{ar:'جِدارُ المَسجِد', en:'The mosque wall'}, c:false },
          ] },
        { q:{ar:'ماذا سَمِعَ الصَّحابَةُ بَعدَ صُعودِ النَّبيِّ ﷺ المِنبَرَ؟', en:'What did the Companions hear after the Prophet ﷺ ascended the new pulpit?'},
          opts:[
            { t:{ar:'صَوتَ رِياحٍ شَديدَة', en:'The sound of strong winds'}, c:false },
            { t:{ar:'أَنينَ الجِذعِ وبُكاءَهُ', en:'The groaning and weeping of the trunk'}, c:true },
            { t:{ar:'صَوتَ أَذان', en:'The sound of the call to prayer'}, c:false },
          ] },
        { q:{ar:'ماذا اختارَ الجِذعُ حينَ خَيَّرَهُ النَّبيُّ ﷺ؟', en:'What did the trunk choose when the Prophet ﷺ gave it the choice?'},
          opts:[
            { t:{ar:'البَقاءَ في مَكانِهِ في المَسجِد', en:'To stay in its place in the mosque'}, c:false },
            { t:{ar:'الغَرسَ في رَوضَةٍ مِن رِياضِ الجَنَّة', en:'To be planted in a garden of Paradise'}, c:true },
            { t:{ar:'أَن يُصنَعَ مِنهُ بابٌ لِلمَسجِد', en:'To be made into a mosque door'}, c:false },
          ] },
      ],
      moral:      { ar:'الوَفاءُ الحَقيقيُّ لا يَنسى مَن خَدَمَهُ — حتّى حينَ يَجِدُ ما هو أَفضَل. والكَريمُ يَحفَظُ الجَميلَ لِكُلِّ مَن أَسداهُ إليه.', en:'True loyalty never forgets those who served you — even when something better comes along. The generous person treasures the favour of all who did them good.' },
      badge:      { icon:'🌴', title:{ar:'وِسامُ الوَفاءِ لِمَن خَدَمَك', en:'Badge of Loyalty to Those Who Served You'} },
      reflect:    [
        {ar:'فَكِّر في شَيءٍ أو شَخصٍ ساعَدَكَ ثُمَّ تَرَكتَهُ حينَ لم تَعُد تَحتاجُه. كَيفَ تَشعُرُ الآن؟', en:'Think of something or someone who helped you and then you left behind when you no longer needed them. How do you feel now?'},
        {ar:'ما الَّذي تَستَطيعُ أن تَفعَلَهُ اليَومَ وَفاءً لِشَخصٍ أَحسَنَ إلَيكَ مِن قَبل؟', en:'What can you do today as an act of loyalty toward someone who was good to you before?'}
      ],
      didYouKnow: [
        {ar:'رَواهُ البُخاري — حَديث ٩١٨ في كِتابِ الجُمُعَة: بُكاءُ الجِذعِ حينَ صَعِدَ النَّبيُّ ﷺ المِنبَر. المَصدَر: إسلام ويب — مَقالة ١٧٧٤٢٧', en:'Narrated by Bukhari — hadith 918 in the Book of Friday Prayer: The weeping of the trunk when the Prophet ﷺ ascended the pulpit. Source: islamweb.net/ar/article/177427'},
        {ar:'قالَ عُلَماءُ الإسلام: في هذِهِ القِصَّةِ دَليلٌ على أنَّ الوَفاءَ صِفَةٌ تَمتَدُّ لِتَشمَلَ الجَمادات! «وإنَّ حُسنَ العَهدِ مِن الإيمان» — رَواهُ الحاكِمُ وصَحَّحَه', en:'Islamic scholars said: In this story is evidence that loyalty extends even to inanimate things! "And keeping one\'s commitments well is part of faith" — narrated by al-Hakim, authenticated'},
      ],
    },

  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text:{ar:'﴿ وَأَوْفُوا بِعَهْدِ اللَّهِ إِذَا عَاهَدتُّمْ وَلَا تَنقُضُوا الْأَيْمَانَ بَعْدَ تَوْكِيدِهَا ﴾', en:'"Fulfil Allah\'s covenant when you make a covenant, and do not break your oaths after confirming them."'}, ref:{ar:'[سورة النحل: ٩١]', en:'[Surah An-Nahl: 91]'} },
      { text:{ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ﴾', en:'"O you who believe — fulfil all contracts."'}, ref:{ar:'[سورة المائدة: ١]', en:'[Surah Al-Ma\'idah: 1]'} },
      { text:{ar:'﴿ وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ﴾', en:'"And those who are faithful to their trusts and covenants."'}, ref:{ar:'[سورة المؤمنون: ٨]', en:'[Surah Al-Mu\'minun: 8]'} },
    ],
    hadiths: [
      { text:{ar:'«آيَةُ المُنافِقِ ثَلاث: إذا حَدَّثَ كَذَب، وإذا وَعَدَ أَخلَف، وإذا اؤتُمِنَ خان»', en:'"The sign of the hypocrite is three: when he speaks, he lies; when he promises, he breaks it; and when entrusted, he betrays."'}, ref:{ar:'[رواه البخاري — حديث ٣٣]', en:'[Sahih Bukhari — 33]'} },
      { text:{ar:'«إنَّ حُسنَ العَهدِ مِن الإيمان»', en:'"Indeed keeping one\'s commitments well is part of faith."'}, ref:{ar:'[رواه الحاكم وصحَّحه]', en:'[Al-Hakim, authenticated]'} },
    ],
    pledge: {
      title: {ar:'عَهدُ الوَفاء', en:'The Pledge of Loyalty'},
      lines: [
        {ar:'أُعاهِدُ اللهَ أن أَفيَ بِكُلِّ وَعدٍ أُعطيه', en:'I pledge to Allah to keep every promise I give'},
        {ar:'أَتَذَكَّرُ مَن أَحسَنَ إلَيَّ ولا أَنساهُ أَبَداً', en:'I will remember those who were good to me and never forget them'},
        {ar:'أَقِفُ مَعَ صَديقي في الشِّدَّةِ كَما أَقِفُ مَعَهُ في السَّرّاء', en:'I will stand with my friend in hardship as I stand with him in ease'},
        {ar:'أَكونُ أَميناً فيما اؤتُمِنتُ عَلَيهِ مِن سِرٍّ أو مَسؤوليَّة', en:'I will be trustworthy in whatever secret or responsibility I am entrusted with'},
      ],
      dua: {ar:'اللَّهُمَّ اجعَلني مِن عِبادِكَ الأَوفياء، وثَبِّت قَلبي على عَهدِكَ وعَهدِ النّاس، يا أَرحَمَ الرّاحِمين!', en:'O Allah, make me among Your faithful servants, and keep my heart firm upon Your covenant and the covenants of people, O Most Merciful!'},
    },
  },

  /* ───── ROOM 4: Activities ───── */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اختَبِر مَعلوماتَك', en:'Test your knowledge' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank:{ ar:['الوَفاء','العَهد','الإيمان','الأَمانَة','الجِذع'], en:['loyalty','covenant','faith','trust','trunk'] },
            items: [
              { prefix:{ar:'«إنَّ حُسنَ',en:'"Keeping one\'s'}, answer:{ar:'العَهد',en:'covenant'}, suffix:{ar:'مِن الإيمان»',en:'well is part of faith"'} },
              { prefix:{ar:'النَّبيُّ ﷺ اتَّكَأ على',en:'The Prophet ﷺ leaned on the palm'}, answer:{ar:'الجِذع',en:'trunk'}, suffix:{ar:'لِسَنَواتٍ طَويلَة',en:'for many long years'} },
              { prefix:{ar:'',en:''}, answer:{ar:'الوَفاء',en:'loyalty'}, suffix:{ar:'صِفَةٌ كَريمَةٌ مِن صِفاتِ المُؤمِنين',en:'is a noble quality of the believers'} },
              { prefix:{ar:'أَبو عُبَيدَةَ رَدَّ الجِزيَةَ لأنَّ',en:'Abu \'Ubaydah returned the jizyah because'}, answer:{ar:'الأَمانَة',en:'trust'}, suffix:{ar:'تَقتَضي ذلِك',en:'required it'} },
              { prefix:{ar:'المُنافِقُ إذا وَعَدَ',en:'The hypocrite when he promises'}, answer:{ar:'الإيمان',en:'faith'}, suffix:{ar:'يَفتَقِرُ إلى',en:'lacks'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الوَفاءُ بِالعَهدِ مِن عَلاماتِ الإيمان.', en:'Faithfulness to covenants is a sign of belief.'}, t:true },
              { q:{ar:'النَّبيُّ ﷺ نَسِيَ خَديجَةَ بَعدَ وَفاتِها.', en:'The Prophet ﷺ forgot Khadijah after her death.'}, t:false },
              { q:{ar:'أَبو عُبَيدَةَ أَخَذَ أَموالَ الجِزيَةِ وانسَحَبَ دونَ أن يَرُدَّها.', en:'Abu \'Ubaydah took the jizyah money and withdrew without returning it.'}, t:false },
              { q:{ar:'نَقضُ الوَعدِ مِن عَلاماتِ النِّفاق.', en:'Breaking a promise is a sign of hypocrisy.'}, t:true },
              { q:{ar:'الوَفاءُ يَشمَلُ اللهَ والنّاسَ والأَصدِقاءَ والوالِدَين.', en:'Loyalty includes Allah, people, friends, and parents.'}, t:true },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن قالَ «إنَّ حُسنَ العَهدِ مِن الإيمان»؟', en:'Who said "Keeping one\'s commitments well is part of faith"?'},
                opts:[
                  { t:{ar:'عُمَرُ بنُ الخَطّاب رضي الله عنه', en:'\'Umar ibn al-Khattab رضي الله عنه'}, c:false },
                  { t:{ar:'النَّبيُّ مُحَمَّدٌ ﷺ', en:'The Prophet Muhammad ﷺ'}, c:true },
                  { t:{ar:'أَبو عُبَيدَةَ بنُ الجَرّاح رضي الله عنه', en:'Abu \'Ubaydah ibn al-Jarrah رضي الله عنه'}, c:false },
                ] },
              { q:{ar:'ماذا اختارَ جِذعُ النَّخلَةِ حينَ خَيَّرَهُ النَّبيُّ ﷺ؟', en:'What did the palm trunk choose when the Prophet ﷺ gave it the choice?'},
                opts:[
                  { t:{ar:'البَقاءَ في المَسجِد', en:'To remain in the mosque'}, c:false },
                  { t:{ar:'الغَرسَ في رَوضَةٍ مِن رِياضِ الجَنَّة', en:'To be planted in a garden of Paradise'}, c:true },
                  { t:{ar:'أَن يُحرَق', en:'To be burned'}, c:false },
                ] },
              { q:{ar:'لِماذا رَدَّ أَبو عُبَيدَةَ الجِزيَةَ لأَهلِ حِمص؟', en:'Why did Abu \'Ubaydah return the jizyah to the people of Homs?'},
                opts:[
                  { t:{ar:'لِأَنَّهُم أَسلَموا', en:'Because they became Muslim'}, c:false },
                  { t:{ar:'لِأَنَّهُ غَيرُ قادِرٍ على حِمايَتِهِم', en:'Because he was unable to protect them'}, c:true },
                  { t:{ar:'لِأَنَّ المالَ كانَ كَثيراً', en:'Because there was too much money'}, c:false },
                ] },
            ]
          },
        ]
      },

      /* 2. FLIP */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ ar:'جوِّل وطابِق', en:'Flip and match' },
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              { a:{ar:'وَفاءُ النَّبيِّ ﷺ لِخَديجَة',en:'Prophet\'s ﷺ loyalty to Khadijah'}, b:{ar:'أَرسَلَ اللَّحمَ لِصَديقاتِها',en:'Sent meat to her friends'} },
              { a:{ar:'صُلحُ الحُدَيبِيَة',en:'The Hudaybiyah treaty'}, b:{ar:'فَتحٌ مُبينٌ بَعدَ عامَين',en:'A manifest victory two years later'} },
              { a:{ar:'أَبو عُبَيدَةَ وأَهلُ حِمص',en:'Abu \'Ubaydah and the people of Homs'}, b:{ar:'رَدَّ الجِزيَةَ حينَ لم يَستَطِع الحِماية',en:'Returned jizyah when unable to protect'} },
              { a:{ar:'بُكاءُ الجِذع',en:'The weeping of the trunk'}, b:{ar:'النَّبيُّ ﷺ ضَمَّهُ وخَيَّرَهُ',en:'The Prophet ﷺ embraced it and gave it a choice'} },
            ]
          },
          { kind:'match', points:30,
            left:  [
              {id:1, t:{ar:'وَفاءُ النَّبيِّ ﷺ لِخَديجَة', en:'Prophet\'s ﷺ loyalty to Khadijah'}},
              {id:2, t:{ar:'صُلحُ الحُدَيبِيَة', en:'Treaty of Hudaybiyah'}},
              {id:3, t:{ar:'أَبو عُبَيدَةَ وحِمص', en:'Abu \'Ubaydah and Homs'}},
              {id:4, t:{ar:'جِذعُ النَّخلَة', en:'The palm trunk'}},
            ],
            right: [
              {id:3, t:{ar:'رَدَّ أَموالَ الجِزيَةِ وَفاءً', en:'Returned jizyah money in loyalty'}},
              {id:1, t:{ar:'ذَكَرَها بِالخَيرِ حتّى بَعدَ وَفاتِها', en:'Remembered her fondly even after her death'}},
              {id:4, t:{ar:'بَكى حينَ تَرَكَهُ النَّبيُّ ﷺ', en:'Wept when the Prophet ﷺ left it'}},
              {id:2, t:{ar:'وَفاءٌ بِالعَهدِ أَدَّى لِفَتحِ مَكَّة', en:'Keeping the covenant led to the conquest of Makkah'}},
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَا الدَّرسُ المُشتَرَكُ بَينَ قِصَصِ الوَفاء الأَربَع؟', en:'What is the shared lesson across all four loyalty stories?'},
                opts:[
                  { t:{ar:'الوَفاءُ صَعبٌ ولا يُمكِنُ الوَفاءُ به', en:'Loyalty is hard and impossible to keep'}, c:false },
                  { t:{ar:'الوَفاءُ حتّى في الصِّغارِ يَبني ثِقَةً عَظيمَة', en:'Loyalty even in small things builds great trust'}, c:true },
                  { t:{ar:'الوَفاءُ لِلأَقرِباءِ فَقَط', en:'Loyalty is only for relatives'}, c:false },
                ] },
              { q:{ar:'مَن وَصَفَهُ النَّبيُّ ﷺ بِأنَّهُ «أَمينُ هذِهِ الأُمَّة»؟', en:'Who did the Prophet ﷺ describe as "the trustee of this nation"?'},
                opts:[
                  { t:{ar:'أَبو بَكرٍ الصِّدّيق رضي الله عنه', en:'Abu Bakr al-Siddiq رضي الله عنه'}, c:false },
                  { t:{ar:'أَبو عُبَيدَةَ بنُ الجَرّاح رضي الله عنه', en:'Abu \'Ubaydah ibn al-Jarrah رضي الله عنه'}, c:true },
                  { t:{ar:'عُثمانُ بنُ عَفّان رضي الله عنه', en:'\'Uthman ibn \'Affan رضي الله عنه'}, c:false },
                ] },
            ]
          },
        ]
      },

      /* 3. SORT */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ ar:'صَنِّف الأَفعال', en:'Sort the actions' },
        levels: [
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الوَفاءُ بِالوَعدِ مَعَ صَديقِك', en:'Keeping your promise with your friend'}, good:true },
              { t:{ar:'إخلافُ الوَعدِ بِعُذرٍ واهٍ', en:'Breaking a promise with a weak excuse'}, good:false },
              { t:{ar:'ذِكرُ مَن أَحسَنَ إليكَ بِالخَير', en:'Remembering those who were good to you fondly'}, good:true },
              { t:{ar:'نِسيانُ صَديقِكَ حينَ لا تَحتاجُ إليه', en:'Forgetting your friend when you no longer need him'}, good:false },
              { t:{ar:'الوَفاءُ بِشُروطِ الاتِّفاقِ مَهما كانَ صَعباً', en:'Fulfilling agreement terms however hard they are'}, good:true },
              { t:{ar:'الغَدرُ والخِيانَةُ حينَ تَتَغَيَّرُ مَصالِحُك', en:'Betrayal and treachery when your interests change'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'إرسالُ هَدِيَّةٍ لِصَديقٍ قَديمٍ نَسيتَهُ', en:'Sending a gift to an old friend you forgot'}, good:true },
              { t:{ar:'الخِيانَةُ بِكَشفِ سِرِّ أَمانَة', en:'Betrayal by revealing a secret you were entrusted with'}, good:false },
              { t:{ar:'الثَّباتُ على العَهدِ في الضِّيق', en:'Steadiness on your covenant in hardship'}, good:true },
              { t:{ar:'التَّبرُّؤُ مِن الصَّديقِ حينَ يَمرُّ بِأَزمَة', en:'Abandoning a friend during their crisis'}, good:false },
              { t:{ar:'شُكرُ مَن علَّمَكَ ولَو مَضَت السِّنون', en:'Thanking those who taught you even after years'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الوَفاءُ لِلجار وحِفظُ حُقوقِه', en:'Being loyal to your neighbour and protecting their rights'}, good:true },
              { t:{ar:'الغَدرُ بِمَن وَثِقَ بِك', en:'Betraying those who trusted you'}, good:false },
              { t:{ar:'إتمامُ المَهمَّةِ بَعدَ الاتِّفاقِ عَلَيها', en:'Completing a task after agreeing to it'}, good:true },
              { t:{ar:'التَّراجُعُ عَن الوَعدِ خَوفاً مِن التَّكلِفَة', en:'Backing out of a promise out of fear of the cost'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          { kind:'cipher', points:30,
            key: { ar:{
              '🤝':'و', '💎':'ف', '🌟':'ا', '📜':'ء', '🌿':'ع', '💍':'ه', '🏛️':'د', '🌴':'ق', '🤲':'ب'
            }, en:{
              '🤝':'l', '💎':'o', '🌟':'y', '📜':'a', '🌿':'l', '💍':'t', '🏛️':'h', '🌴':'e', '🤲':'p'
            } },
            puzzles: [
              { symbols:{ar:'🤝💎🌟📜', en:'🤝💎🤝🤝🌟💍🤝'}, answer:{ar:'وفاء', en:'loyalty'} },
              { symbols:{ar:'🌿💍🏛️', en:'🤲🤝🌴🏛️🌟💍'}, answer:{ar:'عهد', en:'pledge'} },
              { symbols:{ar:'🌴🌟🌴📜🤲', en:'💎💍🌟💍'}, answer:{ar:'قافاتب', en:'oath'} },
            ]
          },
          { kind:'cipher', points:30,
            key: { ar:{
              'و':'1', 'ف':'2', 'ا':'3', 'ء':'4', 'ع':'5', 'ه':'6', 'د':'7', 'ق':'8', 'ب':'9'
            }, en:{
              'l':'1', 'o':'2', 'y':'3', 'a':'4', 'l':'5', 't':'6', 'h':'7', 'e':'8', 'p':'9'
            } },
            puzzles: [
              { symbols:{ar:'1-2-3-4', en:'1-2-3-1-4-6-3'}, answer:{ar:'وفاء', en:'loyalty'} },
              { symbols:{ar:'5-6-7', en:'9-1-8-7-5-8'}, answer:{ar:'عهد', en:'pledge'} },
              { symbols:{ar:'8-1-2-3', en:'6-7-8-8-4-6'}, answer:{ar:'قوفا', en:'truth'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما أَوَّلُ مَراتِبِ الوَفاء؟', en:'What is the first rank of loyalty?'},
                opts:[
                  { t:{ar:'الوَفاءُ لِلأَصدِقاء', en:'Loyalty to friends'}, c:false },
                  { t:{ar:'الوَفاءُ للهِ وحدَه', en:'Loyalty to Allah alone'}, c:true },
                  { t:{ar:'الوَفاءُ لِلوَطَن', en:'Loyalty to the homeland'}, c:false },
                ] },
              { q:{ar:'مَتى يَبدو الوَفاءُ في أَجمَلِ صُوَرِه؟', en:'When does loyalty show its most beautiful form?'},
                opts:[
                  { t:{ar:'حينَ يَكونُ سَهلاً ومَريحاً', en:'When it is easy and comfortable'}, c:false },
                  { t:{ar:'حينَ يَكونُ صَعباً ومُكلِفاً', en:'When it is difficult and costly'}, c:true },
                  { t:{ar:'حينَ يَمدَحُكَ النّاسُ عَلَيه', en:'When people praise you for it'}, c:false },
                ] },
            ]
          },
        ]
      },

      /* 5. SCENARIOS */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ ar:'مَواقِف الحَياة', en:'Life scenarios' },
        levels: [
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'وَعَدتَ صَديقَكَ بِأن تُساعِدَهُ في مَشروعِه يَومَ السَّبت. جاءَ يَومُ السَّبتِ وجاءَتكَ دَعوَةٌ مُثيرَةٌ لِلخُروجِ مَعَ أَصدِقاءَ آخَرين. ماذا تَفعَل؟', en:'You promised your friend you\'d help with his project on Saturday. Saturday came and an exciting invitation arrived to go out with other friends. What do you do?'},
                opts:[
                  { t:{ar:'أَذهَبُ مَعَ الأَصدِقاءِ الآخَرين وأَعتَذِرُ بِحُجَّة.', en:'I go with the other friends and apologise with an excuse.'},c:false },
                  { t:{ar:'أَفي بِوَعدي لِصَديقي وأَرفُضُ الدَّعوَةَ الأُخرى بِأَدَب.', en:'I keep my promise to my friend and politely decline the other invitation.'},c:true },
                  { t:{ar:'لا أَردُّ على أَيٍّ منهُم.', en:'I don\'t reply to either of them.'},c:false },
                ] },
              { q:{ar:'أَخبَرَكَ صَديقُكَ بِسِرٍّ خاصّ جِدّاً وطَلَبَ مِنكَ عَدَمَ الإفصاحِ عنه. قالَ لَكَ أَحَدُ الأَصدِقاءِ: «هَيّا أَخبِرني ما سِرُّه؟» ماذا تَقول؟', en:'Your friend told you a very personal secret and asked you not to reveal it. Another friend said: "Come on, tell me his secret!" What do you say?'},
                opts:[
                  { t:{ar:'أُخبِرُهُ بِالسِّرِّ لأنَّهُ صَديقٌ أَيضاً.', en:'I tell him the secret because he is also a friend.'},c:false },
                  { t:{ar:'أَقولُ: «هذا سِرٌّ أُؤتُمِنتُ عَلَيه ولن أُخبِرَك».', en:'I say: "This is a secret I was entrusted with and I will not tell you."'},c:true },
                  { t:{ar:'أَقولُ: «لا أَعلَم» حتّى لا أَتَصادَم مَعَه.', en:'I say "I don\'t know" to avoid a conflict.'},c:false },
                ] },
              { q:{ar:'وَعَدتَ والِدَتَكَ أن تُساعِدَها في تَرتيبِ البَيتِ بَعدَ المَدرَسَة. رَجَعتَ تَعِباً جِدّاً. ماذا تَفعَل؟', en:'You promised your mother you\'d help tidy the house after school. You came home very tired. What do you do?'},
                opts:[
                  { t:{ar:'أَقولُ لَها: «سَأُساعِدُكَ غَداً» وأَذهَبُ لِلنَّوم.', en:'I tell her "I\'ll help you tomorrow" and go to sleep.'},c:false },
                  { t:{ar:'أَفي بِوَعدي رَغمَ التَّعَبِ وأُساعِدُها.', en:'I keep my promise despite tiredness and help her.'},c:true },
                  { t:{ar:'أَتَجاهَلُ الأَمرَ كَأَنَّني نَسيت.', en:'I ignore it as if I forgot.'},c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'اشتَرى مِنكَ زَميلُكَ لُعبَةً واتَّفَقتُما على سِعرٍ مُعَيَّن. بَعدَ يَومَين قالَ لَكَ صَديقٌ: «يُمكِنُكَ بَيعُها بِسِعرٍ أَعلى لِشَخصٍ آخَر!» ماذا تَفعَل؟', en:'Your classmate bought a toy from you and you both agreed on a price. Two days later a friend said "You could sell it for more to someone else!" What do you do?'},
                opts:[
                  { t:{ar:'أُخبِرُ الزَّميلَ بِالسِّعرِ الأَعلى ليَدفَعَ أَكثَر.', en:'I tell my classmate about the higher price so he pays more.'}, c:false },
                  { t:{ar:'أَفي بِالاتِّفاقِ الأَوَّلِ لأنَّ الكَلِمَةَ عَهد.', en:'I honour the first agreement because a word is a covenant.'}, c:true },
                  { t:{ar:'أُلغي الصَّفقَةَ وأَبيعُها بِسِعرٍ أَعلى.', en:'I cancel the deal and sell it for more.'}, c:false },
                ] },
              { q:{ar:'صَديقُكَ القَديمُ انتَقَلَ لِمَدرَسَةٍ أُخرى ولا تَراهُ كَثيراً. وَجَدتَ مَجموعَةَ أَصدِقاءَ جُدُد. ماذا تَفعَل تِجاهَ صَديقِكَ القَديم؟', en:'Your old friend moved to another school and you rarely see them. You found a new group of friends. What do you do toward your old friend?'},
                opts:[
                  { t:{ar:'أَنسى أَمرَهُ كُلِّيّاً.', en:'I forget about him completely.'}, c:false },
                  { t:{ar:'أُحافِظُ على التَّواصُلِ مَعَهُ وأَتَذَكَّرُهُ.', en:'I maintain contact with him and remember him.'}, c:true },
                  { t:{ar:'أَستَبدِلُهُ بِصَديقٍ جَديدٍ بَعدَ أَسبوع.', en:'I replace him with a new friend after a week.'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مُعَلِّمٌ قَديمٌ أَحسَنَ إلَيكَ كَثيراً. الآنَ هو في مَرَض. ماذا يَفعَلُ الوَفِيّ؟', en:'A former teacher was very good to you. Now he is ill. What does the loyal person do?'},
                opts:[
                  { t:{ar:'يَقولُ: «هو لَيسَ مُعَلِّمي بَعد الآن»', en:'Says "He is no longer my teacher"'}, c:false },
                  { t:{ar:'يَزورُهُ ويَسأَلُ عَن حالِه', en:'Visits him and asks about his health'}, c:true },
                  { t:{ar:'يَنتَظِرُ حتّى يَطلُبَ مِنهُ المُعَلِّمُ ذلِك', en:'Waits until the teacher asks for it'}, c:false },
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
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ الوَفِيّ الأَكبَر',     en:'Badge of the Great Loyal One'} },
    { icon:'💎', color:'#1ABC9C', title:{ar:'جَوهَرَةُ العَهد',              en:'Jewel of the Covenant'} },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ الأَوفِياء',            en:'Star of the Loyal'} },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ الأَمانَة',              en:'Shield of Trustworthiness'} },
    { icon:'📜', color:'#E67E22', title:{ar:'طَومارُ الوَفاء',               en:'Scroll of Loyalty'} },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ القُلوب',              en:'Key to Hearts'} },
  ],

  /* ───── HOUSE ICON ───── */
  icon: '💎',

  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الوَفاءَ كُلَّ يَوم؟', en:'How do you live loyalty every day?' },
  formulaEq: { ar:'وَعد + ثَبات + ذاكِرَة = وَفاء 🏆', en:'Promise + Steadfastness + Memory = Loyalty 🏆' },
  magicMix: [
    { icon:'✅', title:{ar:'أَفِ بِوَعدِكَ دائِماً',en:'Always keep your promise'},
      body:{ar:'إذا قُلتَ «سَأَفعَل» — أَتِمَّها. الكَلِمَةُ عَهدٌ تَسأَلُ اللهُ عنه.',en:'If you said "I will" — see it through. A word is a covenant Allah will ask you about.'} },
    { icon:'📞', title:{ar:'تَواصَل مَعَ مَن أَحبَبتَهُم قَديماً',en:'Stay in touch with those you once loved'},
      body:{ar:'أَرسِل رِسالَةً لِصَديقٍ لم تَرَهُ مُنذُ فَترَة — الوَفِيُّ لا يَنسى.',en:'Send a message to a friend you haven\'t seen in a while — the loyal person doesn\'t forget.'} },
    { icon:'🙏', title:{ar:'اشكُر مَن علَّمَكَ أو ساعَدَك',en:'Thank those who taught you or helped you'},
      body:{ar:'مُعَلِّمُكَ القَديم، جارُكَ الَّذي أَعانَكَ — اذكُرهُم بِالخَير ولَو بِكَلِمَة.',en:'Your former teacher, your neighbour who helped you — remember them kindly even with a word.'} },
    { icon:'🤐', title:{ar:'احفَظ سِرَّ مَن ائتَمَنَك',en:'Guard the secret of those who trusted you'},
      body:{ar:'حينَ يُعطيكَ أَحَدٌ سِرَّهُ، ضَعهُ في قَلبِكَ كَالكَنز — لا تُفشِه أَبداً!',en:'When someone gives you their secret, place it in your heart like a treasure — never reveal it!'} },
    { icon:'🌹', title:{ar:'تَذَكَّر فَضلَ والِدَيكَ',en:'Remember the favour of your parents'},
      body:{ar:'كُلَّ يَومٍ قُل: «اللَّهُمَّ اغفِر لِوالِدَيَّ» — وَفاءٌ يَرفَعُ دَرَجاتَكَ.',en:'Every day say "O Allah, forgive my parents" — a loyalty that raises your ranks.'} },
    { icon:'⚖️', title:{ar:'أَتِمَّ ما بَدَأتَه',en:'Complete what you started'},
      body:{ar:'لا تَتَركِ المَهمَّةَ في مُنتَصَفِها — أَكمِلها وَفاءً لِمَن اعتَمَدَ عَلَيك.',en:'Don\'t leave the task halfway — complete it in loyalty to those who counted on you.'} },
  ],

  /* ───── CERTIFICATE ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الوَفاء', en:'Awarded to those who completed the House of Loyalty' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>خُلُقَ الوَفاءِ والثَّباتِ على العَهد</b> — اقتِداءً بِالنَّبيِّ ﷺ في وَفائِهِ لِخَديجَةَ الكُبرى، ووَفائِهِ في صُلحِ الحُدَيبِيَة، وأَبي عُبَيدَةَ بنِ الجَرّاح الَّذي رَدَّ الأَموالَ لِمَن عاهَدَهُم رضي الله عنهم أجمعين.',
                 en:'For mastering <b>the virtue of loyalty and steadfastness in keeping covenants</b> — following the Prophet ﷺ in his faithfulness to Khadijah al-Kubra, his faithfulness at Hudaybiyah, and Abu \'Ubaydah ibn al-Jarrah who returned money to those he had covenanted with رضي الله عنهم all.' },
  },

};
