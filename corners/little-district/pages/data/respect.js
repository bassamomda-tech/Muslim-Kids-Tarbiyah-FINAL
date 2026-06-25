/* ═══════════════════════════════════════════════════════════════
   بَيتُ الاحتِرام  ·  House of Respect
   slug: respect  |  color: #117A65  |  art: garden
   ─────────────────────────────────────────────────────────────── 
   
   ROOMS:
   1. Knowledge    — definition, forms, ranking, verses, hadiths, benefits
   2. Stories      — 4 stories from approved Islamic sources
   3. Memorize     — verses, hadiths, pledge with dua
   4. Activities   — 6 types × 3 levels = 18 mini-games, 180 pts
   5. Treasures    — 6 stickers (rainbow palette)
   
   STORY SOURCES:
   Story 1 — islamweb.net  (Prophet ﷺ with Halima As-Sa'diyya)
   Story 2 — سير أعلام النبلاء — الذهبي — ج٣  (Ibn Umar)
   Story 3 — سير أعلام النبلاء — الذهبي — ج١٠  (Imam Al-Shafi'i)
   Story 4 — dorar.net + islamweb.net  (Uways Al-Qarani / Sahih Muslim 2542)
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.respect = {

  tagline: {
    ar: 'الاحتِرامُ مِرآةُ القَلبِ النَّقيّ وعُنوانُ الإنسانِ الكَريم',
    en: 'Respect is the mirror of a pure heart and the mark of a noble soul',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ الاحتِرامَ شَعيرَةٌ إسلاميَّة عَظيمَة؟', en:'Did you know that respect is a great Islamic practice?' },
      sub:   { ar:'«لَيسَ مِنّا مَن لم يُجِلَّ كَبيرَنا، ويَرحَم صَغيرَنا، ويَعرِف لِعالِمِنا حَقَّه» — قالَهُ النَّبيُّ ﷺ. وقالَ أيضاً: «إنَّ مِن إِجلالِ اللهِ إِكرامَ ذي الشَّيبَةِ المُسلِم» — فَمَن أَكرَمَ الشَّيخَ الكَبيرَ فَكَأَنَّما أَكرَمَ الله!',
               en:'"He is not of us who does not respect our elders, show mercy to our young, and recognise the right of our scholars" — the Prophet ﷺ said. He also said: "Verily, among the ways of revering Allah is honouring the grey-haired Muslim" — so whoever honours the elder is as though they have honoured Allah!' },
    },
    definition: {
      linguistic: {
        ar: 'الاحتِرامُ مِن «حَرَمَ» — أَي جَعَلَ الشَّيءَ مُحرَّماً لا يُمَسّ. وأَصلُهُ «التَّعظيمُ والتَّوقير»؛ لأنَّ مَن تَحتَرِمُهُ تَجعَلُ لَهُ حُرمَةً في قَلبِك!',
        en: 'From "harama" — to make something inviolable and untouchable. Its root means "reverence and veneration" — because the one you respect, you grant a sacred status in your heart!',
      },
      terminology: {
        ar: 'هو <b>تَعظيمُ الغَيرِ وتَوقيرُهُ</b> وإِعطاؤهُ حَقَّهُ الَّذي أَوجَبَهُ اللهُ له، مِن الوالِدَين والعُلَماءِ والكِبارِ وسائِرِ المُسلِمين.',
        en: 'It is <b>honouring and venerating others</b> and giving them the right Allah has ordained for them — from parents and scholars to elders and fellow Muslims.',
      },
      simile: {
        ar: 'الاحتِرامُ كَالماءِ الَّذي يَسقي الأشجار: حيثُما وَجَدتَهُ ازدَهَرَت العَلاقات! وكَالضَّوءِ الَّذي يُنيرُ الطَّريق — المُجتَمَعُ الَّذي يَسودُهُ الاحتِرامُ يَعيشُ في نورٍ وسَلام.',
        en: 'Respect is like water that nourishes trees — wherever it flows, relationships flourish! Like light that illuminates the road — a community where respect reigns lives in brightness and peace.',
      },
    },
    forms: [
      { icon:'🤲', color:'#117A65', title:{ar:'احتِرامُ الوالِدَين', en:'Respecting parents'},
        body:{ar:'أَعلى مَراتِبِ الاحتِرامِ بَعدَ حَقِّ الله؛ الخُضوعُ لَهُما بِالقَولِ اللَّيِّنِ وعَدَمُ التَّأَفُّف. قالَ تَعالى: ﴿ وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ﴾.',
         en:'The highest rank after Allah\'s right — humbling yourself to them with gentle speech and never sighing at them. Allah said: "Your Lord has decreed that you worship none but Him, and to parents, good treatment."'} },
      { icon:'👴', color:'#1ABC9C', title:{ar:'احتِرامُ الكِبار', en:'Respecting elders'},
        body:{ar:'تَعظيمُ مَن كَبِرَت سِنُّهُم مِن المُسلِمين؛ بِإِفساحِ المَجلِسِ وبَدءِ السَّلامِ وإِنصاتِ حَديثِهِم. فَفي إِجلالِ الشَّيخِ تَعظيمٌ لِلهِ تَعالى.',
         en:'Honouring older Muslims — making room for them, greeting them first, and listening attentively. Honouring an elder is honouring Allah Most High.'} },
      { icon:'📚', color:'#2980B9', title:{ar:'احتِرامُ العُلَماء', en:'Respecting scholars'},
        body:{ar:'تَوقيرُ أَهلِ العِلمِ والدِّين، والجُلوسُ بَينَ أَيديهِم بِأَدَبٍ والأَخذُ عَنهُم. العالِمُ وارِثُ الأَنبياء — فَحُرمَتُهُ عَظيمَة.',
         en:'Venerating people of knowledge and religion, sitting before them with etiquette, and receiving from them. The scholar is the heir of the prophets — so his sanctity is great.'} },
      { icon:'🤝', color:'#E67E22', title:{ar:'احتِرامُ المُسلِمين', en:'Respecting fellow Muslims'},
        body:{ar:'حِفظُ حُقوقِ إِخوانِهِ المُسلِمين مِن عِرضٍ ومالٍ ونَفس. قالَ ﷺ: «كُلُّ المُسلِمِ على المُسلِمِ حَرام: دَمُهُ ومالُهُ وعِرضُه».',
         en:'Protecting the rights of fellow Muslims in honour, wealth, and life. The Prophet ﷺ said: "Every Muslim\'s blood, wealth, and honour is sacred to his fellow Muslim."'} },
      { icon:'🌿', color:'#8E44AD', title:{ar:'احتِرامُ الطَّبيعَة والمَخلوقات', en:'Respecting creation'},
        body:{ar:'الرِّفقُ بِالحَيَوانِ وعَدَمُ إِتلافِ البيئَة، لأنَّ هذا الكَونَ أَمانَةٌ في أَيدينا. نَهى النَّبيُّ ﷺ عن قَتلِ الحَيَوانِ بِغَيرِ حَق.',
         en:'Kindness to animals and not destroying the environment, because this world is a trust in our hands. The Prophet ﷺ forbade killing animals without right.'} },
      { icon:'🏫', color:'#C0392B', title:{ar:'احتِرامُ المُعَلِّمِ والمَكان', en:'Respecting teacher and place'},
        body:{ar:'الأَدَبُ في المَجلِسِ وعَدَمُ رَفعِ الصَّوتِ فوقَ صَوتِ المُعَلِّم. كانَ الإمامُ الشّافِعيُّ يُقَلِّبُ الأَوراقَ بِهُدوءٍ حَتّى لا يُزعِجَ جارَهُ في المَجلِس!',
         en:'Proper decorum in gatherings and not raising your voice above the teacher\'s. Imam Shafi\'i would turn pages gently so as not to disturb his neighbour in the session!'} },
    ],
    ranking: [
      { color:'#117A65', title:{ar:'احتِرامُ اللهِ تَعالى', en:'Respecting Allah Most High'},
        body:{ar:'أَعلى دَرَجاتِ الاحتِرام: تَعظيمُ اللهِ وتَوقيرُ شَعائِرِهِ وحُرُماتِهِ. ومَن عَظَّمَ اللهَ عَظَّمَ كُلَّ شَيءٍ بِحَقِّه.',
         en:'The highest rank of respect: venerating Allah and revering His rites and sacred boundaries. Whoever venerates Allah will venerate everything rightly.'} },
      { color:'#1ABC9C', title:{ar:'احتِرامُ النَّبيِّ ﷺ والأَنبياء', en:'Respecting the Prophet ﷺ'},
        body:{ar:'تَعظيمُ النَّبيِّ ﷺ وتَوقيرُهُ وإِتِّباعُ سُنَّتِهِ. قالَ تَعالى: ﴿ لِتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَتُعَزِّرُوهُ وَتُوَقِّرُوهُ ﴾.',
         en:'Venerating the Prophet ﷺ and following his Sunnah. Allah said: "That you may believe in Allah and His Messenger and support him and honour him."'} },
      { color:'#2980B9', title:{ar:'احتِرامُ الوالِدَين والعُلَماء', en:'Respecting parents and scholars'},
        body:{ar:'طاعَةُ الوالِدَين والأَدَبُ معَهُما، وتَوقيرُ أَهلِ العِلمِ الرَّبّاني. هذانِ مَن أَوجَبَ اللهُ تَعظيمَهُما في كِتابِه.',
         en:'Obeying parents and treating them with respect, and venerating people of godly knowledge. These are those whom Allah has ordained we honour in His Book.'} },
      { color:'#8E44AD', title:{ar:'احتِرامُ سائِرِ المُسلِمين والنّاس', en:'Respecting all Muslims and people'},
        body:{ar:'حِفظُ كَرامَةِ كُلِّ إِنسانٍ، وإِعطاؤهُ حَقَّهُ بِالعَدلِ والإِنصاف. فَالإِنسانُ مُكَرَّمٌ بِتَكريمِ اللهِ لَه.',
         en:'Preserving every person\'s dignity and giving them their due with justice and fairness. Every human is honoured by Allah\'s honouring of them.'} },
    ],
    verses: [
      { text: { ar:'﴿ وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا ﴾',
               en:'"Your Lord has decreed that you worship none but Him, and to parents, good treatment. If one or both of them reach old age with you, say not to them \'uff\' nor repel them — speak to them a noble word."' },
        ref: { ar:'[سورة الإسراء: ٢٣]', en:'[Surah Al-Isra: 23]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ وَلَا نِسَاءٌ مِّن نِّسَاءٍ عَسَىٰ أَن يَكُنَّ خَيْرًا مِّنْهُنَّ ﴾',
               en:'"O you who believe — let not a people ridicule another people; perhaps they may be better than them. Nor let women ridicule other women; perhaps they may be better than them."' },
        ref: { ar:'[سورة الحجرات: ١١]', en:'[Surah Al-Hujurat: 11]' } },
      { text: { ar:'﴿ وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِّمَّنْ خَلَقْنَا تَفْضِيلًا ﴾',
               en:'"We have indeed honoured the children of Adam and carried them on land and sea and provided them from good things and preferred them over much of what We have created."' },
        ref: { ar:'[سورة الإسراء: ٧٠]', en:'[Surah Al-Isra: 70]' } },
    ],
    hadiths: [
      { text: { ar:'«لَيسَ مِنّا مَن لم يُجِلَّ كَبيرَنا، ويَرحَم صَغيرَنا، ويَعرِف لِعالِمِنا حَقَّه»',
               en:'"He is not of us who does not respect our elders, show mercy to our young, and recognise the right of our scholars."' },
        source: { ar:'[رواه أحمد والحاكم — وصحَّحَهُ الألباني]', en:'[Ahmad & Al-Hakim — authenticated by Al-Albani]' } },
      { text: { ar:'«إنَّ مِن إِجلالِ اللهِ إِكرامَ ذي الشَّيبَةِ المُسلِم»',
               en:'"Verily, among the ways of revering Allah is honouring the grey-haired Muslim."' },
        source: { ar:'[رواه أبو داود — حديث ٤٨٤٣]', en:'[Abu Dawud — hadith 4843]' } },
    ],
    benefits: [
      { ar:'🌸 يُحَبِّبُكَ في قُلوبِ النّاسِ ويَزيدُ مَكانَتَكَ عِندَهُم', en:'🌸 Makes you beloved in hearts and raises your standing among people' },
      { ar:'🌿 يُدخِلُكَ في رَحمَةِ اللهِ إذ قالَ ﷺ: «الرّاحِمونَ يَرحَمُهُمُ الرَّحمَن»', en:'🌿 Enters you into Allah\'s mercy, for he ﷺ said: "The merciful are shown mercy by the Most Merciful"' },
      { ar:'🏡 يَبني المُجتَمَعاتِ ويُقَوِّي الأُسَر والعَلاقات', en:'🏡 Builds communities and strengthens families and relationships' },
      { ar:'✨ يَعكِسُ جَمالَ الإسلامِ وحُسنَ خُلُقِ المُؤمِن', en:'✨ Reflects the beauty of Islam and the excellent character of the believer' },
      { ar:'🤲 يَستَجلِبُ البَرَكَةَ والزِّيادَةَ في العُمرِ والرِّزق', en:'🤲 Draws blessing and increase in lifespan and provision' },
      { ar:'🌟 يَرفَعُ مَقامَ العَبدِ عِندَ اللهِ كَما رَفَعَ أُوَيساً القَرَنيَّ لِبِرِّهِ', en:'🌟 Elevates the servant\'s rank with Allah, just as it elevated Uways Al-Qarani for his filial piety' },
    ],
    obstacles: [
      { ar:'الكِبرُ والغُرور: مَن رَأى نَفسَهُ فَوقَ الآخَرين لم يَستَطِع احتِرامَهُم', en:'Pride and arrogance: whoever sees himself above others cannot respect them' },
      { ar:'الجَهلُ بِحُقوقِ الآخَرين وما أَوجَبَهُ اللهُ لَهُم', en:'Ignorance of others\' rights and what Allah has ordained for them' },
      { ar:'ضَعفُ التَّربيَةِ وعَدَمُ التَّعوُّدِ على الأَدَبِ مُنذُ الصِّغَر', en:'Weak upbringing and lack of habituation to manners from childhood' },
      { ar:'التَّأَثُّرُ بِالبيئاتِ المُنحَلَّةِ الَّتي تَسخَرُ مِن التَّوقير', en:'Influence of degraded environments that mock reverence and respect' },
    ],
    acquireMeans: [
      { ar:'قَدِّر النَّاسَ بِقيمَتِهِم عِندَ اللهِ وانظُر إلى مَزاياهُم لا عُيوبِهِم', en:'Value people by their worth before Allah — look at their virtues, not their faults' },
      { ar:'تَعَلَّم حُقوقَ كُلِّ مَن حَولَكَ كَما بَيَّنَتها السُّنَّةُ النَّبَويَّة', en:'Learn the rights of everyone around you as clarified by the Prophetic Sunnah' },
      { ar:'دَرِّب لِسانَكَ على الكَلامِ اللَّيِّنِ وجَوارِحَكَ على الأَدَبِ العَمَليّ يَوماً بَعدَ يَوم', en:'Train your tongue on gentle speech and your limbs on practical good manners day after day' },
      { ar:'اقرَأ سِيرَةَ النَّبيِّ ﷺ واقتَدِ بِأَدَبِهِ مَعَ الكِبارِ والصِّغارِ وجَميعِ الخَلق', en:'Read the Prophet\'s ﷺ biography and follow his conduct with young and old and all of creation' },
      { ar:'احرِص كُلَّ يَومٍ على عَمَلٍ واحِدٍ صَغيرٍ يُظهِرُ احتِرامَكَ لِمَن حَولَك — مِن ابتِسامَةٍ أو دُعاءٍ أو كَلِمَةٍ طَيِّبَة', en:'Make sure every day to do one small deed that shows your respect for those around you — whether a smile, a prayer, or a kind word' },
    ],
  },

  /* ───── ROOM 2: Stories ───── */
  stories: [

    /* ──────────────────────────────────────────────────────────────
       STORY 1 — النَّبيُّ ﷺ وتَوقيرُهُ لِلكِبار
       The Prophet ﷺ rising for his foster-mother Halima and his uncle
       Source: islamweb.net/ar/ — authentic narrations about the Prophet's respect
       ─────────────────────────────────────────────────────────────── */
    {
      icon:'🌹', scene:'garden', character:'🧔',
      title: { ar:'النَّبيُّ ﷺ يَقومُ لِأُمِّهِ المُرضِعَة', en:'The Prophet ﷺ rises for his foster-mother' },
      pages: [
        { scene:'garden', character:'🧔',
          text:{ ar:'كانَت الشَّمسُ تُلقي ضِياءَها الذَّهَبيَّ على أَرضِ المَدينَة المُنَوَّرَة، وكانَ النَّبيُّ ﷺ جالِساً بَينَ أَصحابِهِ الكِرام — يُعَلِّمُهُم ويُرشِدُهُم. فَجأةً، أُعلِنَ قُدومُ زائِرَة: <b>حَليمَةُ السَّعديَّة</b> — المَرأَةُ الَّتي أَرضَعَتهُ في الصَّحراء وهو طِفل!<br><br>كانَ الصَّحابَةُ يَنتَظِرونَ، فما أَدهَشَهُم؟ رَأَوا النَّبيَّ ﷺ — سَيِّدَ الخَلقِ وأَشرَفَ البَشَر — يَقومُ واقِفاً فَوراً مِن مَجلِسِه، كَأَنَّهُ طالِبٌ صَغيرٌ أَمامَ مُعَلِّمِه.',
                 en:'Golden sunlight bathed the streets of Madinah as the Prophet ﷺ sat among his noble Companions — teaching and guiding them. Suddenly, a visitor was announced: <b>Halima As-Sa\'diyya</b> — the woman who had nursed him as an infant in the desert!<br><br>The Companions waited, but what astonished them? They saw the Prophet ﷺ — master of all creation, most honoured of mankind — rise immediately to his feet, as if a small student standing before his teacher.' } },
        { scene:'garden', character:'🌹',
          text:{ ar:'مَشى النَّبيُّ ﷺ نَحوَها بِخُطىً مُتَواضِعَة، وعَلى وَجهِهِ ابتِسامَةٌ فَرِحَة. خَلَعَ رِداءَهُ وبَسَطَهُ على الأَرضِ لِتَجلِسَ عَليه — إِكراماً لَها وتَعظيماً!<br><br>نَظَرَت حَليمَةُ إلى هذا الرَّجُلِ العَظيم — نَبِيِّ الأُمَّة وسَيِّدِ المُرسَلين — يَتَواضَعُ لَها بِهذا الأَدَب، فَاغرَورَقَت عَيناها بِالدُّموع! <b>«يا سَيِّدي»</b> قالَت بِصَوتٍ مُرتَجِف، <b>«لِماذا تَفعَلُ هذا وأَنتَ سَيِّدُ الخَلق؟»</b>',
                 en:'The Prophet ﷺ walked toward her with humble steps, a joyful smile on his blessed face. He removed his outer robe and spread it on the ground for her to sit on — as a mark of honour and reverence!<br><br>Halima looked at this magnificent man — the Prophet of the nation, master of all messengers — humbling himself before her with such gentleness, and her eyes filled with tears! <b>"My master"</b> she said in a trembling voice, <b>"why do you do this when you are the master of all creation?"</b>' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'نَظَرَ إلَيها النَّبيُّ ﷺ بِعَينَين مَلِيئَتَين بِالحَنان وقال: <b>«هذِهِ أُمِّي الَّتي أَرضَعَتني — وحَقُّها عَظيم!»</b><br><br>سأَلَها النَّبيُّ ﷺ عن أَحوالِها وأَحوالِ بَني سَعد بِكُلِّ اهتِمام. وحينَ رَأى أنَّها مُحتاجَة، أَعطاها مِن مالِهِ سَخاءً، وأَوصى أَصحابَهُ بِإكرامِها. <b>لَم يَنسَ ﷺ يَداً أَحسَنَت إِليهِ — وإن مَضى العُمر!</b>',
                 en:'The Prophet ﷺ looked at her with eyes full of tenderness and said: <b>"This is my mother who nursed me — and her right upon me is great!"</b><br><br>He asked her with full attention about her condition and the wellbeing of Banu Sa\'d. Seeing she was in need, he gave her generously from his wealth and instructed his Companions to honour her. <b>He ﷺ never forgot a hand that had shown him kindness — even after years had passed!</b>' },
          choice:{ q:{ar:'لِماذا قامَ النَّبيُّ ﷺ لِحَليمَة رَغمَ عَظَمَتِه؟', en:'Why did the Prophet ﷺ rise for Halima despite his greatness?'},
            opts:[
              { t:{ar:'لأنَّها كانَت غَنيَّة', en:'Because she was wealthy'}, c:false,
                exp:{ar:'لا — الاحتِرامُ لا يُقاسُ بِالمال! إنَّهُ وَفاءٌ لِمَن أَحسَنَت إِليه.',en:'No — respect is not measured by wealth! It is loyalty to one who showed him kindness.'} },
              { t:{ar:'لِأَنَّها أَرضَعَتهُ ولَها حَقٌّ عَظيم عَليه', en:'Because she nursed him and had a great right over him'}, c:true,
                exp:{ar:'نَعَم! الوَفاءُ لِمَن أَحسَنَ إِلَيكَ شِيمَةُ الكِرام — وأَعظَمُهُم النَّبيُّ ﷺ.',en:'Yes! Loyalty to those who showed you kindness is the trait of noble souls — greatest of them the Prophet ﷺ.'} },
              { t:{ar:'لِيُظهِرَ أَمامَ أَصحابِه', en:'To show off in front of his Companions'}, c:false,
                exp:{ar:'لا — النَّبيُّ ﷺ أَعظَمُ مِن الرِّياء. فِعلُهُ كانَ خالِصاً للهِ ووَفاءً حَقيقيّاً.',en:'No — the Prophet ﷺ is far above showing off. His action was purely for Allah and genuine loyalty.'} },
            ] } },
        { scene:'garden', character:'🌿',
          text:{ ar:'جَلَسَ الصَّحابَةُ الكِرامُ يَتَأَمَّلونَ هذا المَشهَدَ بِصَمتٍ. كانَ كُلٌّ مِنهُم يُحَدِّثُ نَفسَه: <b>«أَيَستَطيعُ أَحَدٌ أن يَتَعَلَّمَ الاحتِرامَ أَكثَرَ مِمّا تَعَلَّمنا اليَوم؟»</b><br><br>رَأَوا فيما رَأَوا أنَّ الاحتِرامَ لا يَنقُصُ مِن قَدرِ المَرء — بل يَزيدُهُ عُلوّاً! فَالنَّبيُّ ﷺ الَّذي قامَ لِأُمِّهِ المُرضِعَة لا يَزالُ إلى يَومِنا هذا أَرفَعَ النّاسِ مَنزِلَة.',
                 en:'The noble Companions sat contemplating this scene in silence. Each said to himself: <b>"Can anyone learn respect more than what we have witnessed today?"</b><br><br>They saw clearly that respect does not diminish one\'s worth — it elevates it! For the Prophet ﷺ who rose for his foster-mother remains, to this very day, the most elevated of all people in status.' } },
        { scene:'madinah', character:'👴',
          text:{ ar:'وكَذلِكَ كانَ النَّبيُّ ﷺ مَعَ عَمِّهِ أبي طالِب — رَغمَ أنَّ عَمَّهُ لم يُسلِم. كانَ ﷺ يُجِلُّ مَقامَهُ ويَخفِضُ جَناحَهُ لَه؛ لأنَّهُ عَلَّمَنا أنَّ احتِرامَ الكِبيرِ فَريضَة حَتّى وإن اختَلَفنا.<br><br>كانَ يَقومُ لَهُ حينَ يَدخُل، وكانَ يَسأَلُ عَن صِحَّتِهِ قَبلَ أن يَسأَلَ عن أيِّ شَيء. <b>الاحتِرامُ عِندَ النَّبيِّ ﷺ لم يَكُن مَشروطاً — كانَ مَبدَأً ثابِتاً في كُلِّ حال!</b>',
                 en:'Likewise was the Prophet ﷺ with his uncle Abu Talib — though his uncle never embraced Islam. He ﷺ would honour his standing and lower his wing before him, teaching us that respecting an elder is an obligation even when we differ.<br><br>He would stand when he entered, and would inquire about his health before asking about anything else. <b>Respect for the Prophet ﷺ was not conditional — it was a firm principle in every situation!</b>' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'وتَأَمَّل — لم يَكُن النَّبيُّ ﷺ يَحتَرِمُ حَليمَةَ فَقَط. كانَ يَحتَرِمُ كُلَّ مَن أَحسَنَ إِليه. كانَ إذا ذُكِرَت السَّيِّدَةُ خَديجَةُ رضي الله عنها تَوَقَّفَ وذَكَرَها بِكُلِّ مَحَبَّة رَغمَ أنَّها تُوُفِّيَت.<br><br>وكانَ إذا جاءَ أَصدِقاءُ خَديجَةَ يَقومُ لَهُنَّ إِكراماً لَها! سأَلَتهُ السَّيِّدَةُ عائِشَةُ رضي الله عنها: <b>«لِماذا تَقومُ لَهُنَّ وهُنَّ عَجائِز؟»</b> فَأَجابَ ﷺ بِحُزنٍ وحَنان: <b>«لأنَّهُنَّ كُنَّ يُحِبَّنَ خَديجَة!»</b>',
                 en:'And reflect — the Prophet ﷺ did not respect only Halima. He respected everyone who had shown him kindness. When Khadija رضي الله عنها was mentioned, he would pause and speak of her with all love even though she had passed away.<br><br>And when Khadija\'s friends visited, he would rise for them out of honour to her! Lady Aisha رضي الله عنها once asked him: <b>"Why do you rise for these old women?"</b> He replied ﷺ with emotion and tenderness: <b>"Because they used to love Khadija!"</b>' } },
        { scene:'garden', character:'🌹',
          text:{ ar:'مَا أَجمَلَ هذا النَّبيَّ ﷺ! يُعَلِّمُنا بِأَفعالِهِ قَبلَ أَقوالِه. لِتَأخُذَ الدَّرسَ العَميق: <b>الاحتِرامُ لا يُعطى لِأَنَّكَ تَنتَظِرُ المُقابَل — يُعطى لأنَّهُ حَقٌّ واجِب!</b><br><br>أُمُّكَ الَّتي أَرضَعَتكَ، أَبوكَ الَّذي سَهِرَ عَليك، مُعَلِّمُكَ الَّذي أَدَّبَكَ — كُلُّهُم يَستَحِقّونَ مِنكَ أَجمَلَ ما عِندَك. قُم لَهُم، ابتَسِم لَهُم، وأَعطِهِم مَكانَتَهُم الَّتي أَعطاها اللهُ لَهُم.',
                 en:'How magnificent is this Prophet ﷺ! He teaches us by actions before words. Take this profound lesson: <b>Respect is not given because you expect something in return — it is given because it is an obligatory right!</b><br><br>Your mother who nursed you, your father who stayed awake for you, your teacher who educated you — all of them deserve the finest of what you have. Rise for them, smile at them, and give them the place Allah has given them.' } },
      ],
      quiz: [
        { q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ حينَ رَأى حَليمَة؟', en:'What did the Prophet ﷺ do when he saw Halima?'},
          opts:[
            { t:{ar:'ظَلَّ جالِساً', en:'Remained seated'}, c:false },
            { t:{ar:'قامَ واقِفاً وبَسَطَ رِداءَه', en:'Rose and spread his cloak for her'}, c:true },
            { t:{ar:'أَرسَلَ إِليها رِسالَة', en:'Sent her a message'}, c:false },
          ] },
        { q:{ar:'لِماذا احتَرَمَ النَّبيُّ ﷺ حَليمَةَ السَّعديَّة؟', en:'Why did the Prophet ﷺ respect Halima As-Sa\'diyya?'},
          opts:[
            { t:{ar:'لأنَّها كانَت مَلِكَة', en:'Because she was a queen'}, c:false },
            { t:{ar:'لأنَّها أَرضَعَتهُ وهو طِفل', en:'Because she nursed him as an infant'}, c:true },
            { t:{ar:'لأنَّها كانَت عالِمَة', en:'Because she was a scholar'}, c:false },
          ] },
        { q:{ar:'ما الدَّرسُ الَّذي عَلَّمَنا إيّاهُ النَّبيُّ ﷺ في هذه القِصَّة؟', en:'What lesson did the Prophet ﷺ teach us in this story?'},
          opts:[
            { t:{ar:'الاحتِرامُ يَكونُ لِلأَغنياء فَقَط', en:'Respect is only for the wealthy'}, c:false },
            { t:{ar:'الاحتِرامُ حَقٌّ واجِبٌ لا انتِظاراً لِمُقابِل', en:'Respect is an obligatory right, not waiting for reward'}, c:true },
            { t:{ar:'الاحتِرامُ يَنقُصُ مِن قَدرِ المَرء', en:'Respect diminishes one\'s worth'}, c:false },
          ] },
      ],
      moral: { ar:'الاحتِرامُ الحَقيقيُّ يَأتي مِن القَلب، لا مِن الخَوفِ أو الطَّمَع. وأَعظَمُ مَن عَلَّمَنا ذلِكَ هو النَّبيُّ ﷺ بِأَفعالِه.', en:'True respect comes from the heart, not from fear or greed. The greatest teacher of this was the Prophet ﷺ himself through his actions.' },
      badge: { icon:'🌹', title:{ar:'وِسامُ الوَفاءِ والتَّوقير', en:'Medal of Loyalty and Veneration'} },
      reflect: [
        {ar:'مَن هُمُ النّاسُ في حَياتي الَّذين أُمِرتُ باحتِرامِهِم؟ كَيفَ أُظهِرُ لَهُم احتِرامي اليَوم؟', en:'Who are the people in my life I am commanded to respect? How do I show them my respect today?'},
        {ar:'هل أَحتَرِمُ الكِبيرَ حَتّى لَو اختَلَفنا في بَعضِ الأُمور؟ لِماذا؟', en:'Do I respect my elders even when we disagree on some matters? Why?'},
      ],
      didYouKnow: [
        {ar:'ذَكَرَ العُلَماءُ قِيامَ النَّبيِّ ﷺ لِحَليمَةَ السَّعديَّة في كُتُبِ السِّيَر. المَصدَر: islamweb.net/ar/article/169993', en:'Scholars mention the Prophet\'s ﷺ rising for Halima As-Sa\'diyya in biography books. Source: islamweb.net/ar/article/169993'},
        {ar:'حَليمَةُ السَّعديَّة هي ابنَةُ أبي ذُؤَيب الهَوازِنيَّة مِن قَبيلَةِ بَني سَعد. أَرضَعَت النَّبيَّ ﷺ بَعدَ رَدِّه مِن المَراضِع الأُخرى. المَصدَر: dorar.net/hadith/searcher?q=حليمة', en:'Halima As-Sa\'diyya was from Banu Sa\'d of the Hawazin tribe. She nursed the Prophet ﷺ after he was returned from other wet-nurses. Source: dorar.net'},
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       STORY 2 — عبدالله بن عُمَر وإجلالُهُ للعُلَماء
       Ibn Umar's deep respect for scholars and his Companions
       Source: سير أعلام النبلاء — الذهبي (ج٣)
       ─────────────────────────────────────────────────────────────── */
    {
      icon:'📚', scene:'mosque', character:'👳',
      title: { ar:'ابنُ عُمَر وأَدَبُهُ مَعَ العُلَماء', en:'Ibn Umar and his respect for scholars' },
      pages: [
        { scene:'mosque', character:'👳',
          text:{ ar:'كانَت المَدينَةُ المُنَوَّرَةُ تَعطَرُ بِعَبيرِ العِلمِ في كُلِّ زُقاقٍ وكُلِّ ناصِيَة. وكانَ <b>عَبدُاللهِ بنُ عُمَر</b> رضي الله عنهما — ابنُ أَميرِ المُؤمِنين — يَمشي في الطَّريقِ مَعَ خادِمِه، يَتَأَمَّلُ قُبَّةَ السَّماءِ الصَّافِيَة فَوقَهُ.<br><br>كانَ ابنُ عُمَر مَعروفاً بَينَ الصَّحابَةِ بِأَنَّهُ أَشَدُّهُم اتِّباعاً لِسُنَّةِ النَّبيِّ ﷺ — وكانَ لا يَنامُ لَيلاً حَتّى يَتَأَكَّدَ أنَّهُ أَدَّى حَقَّ كُلِّ مَن حَوله.',
                 en:'The fragrance of knowledge perfumed every alley and corner of Madinah. And <b>Abdullah ibn Umar</b> رضي الله عنهما — son of the Commander of the Faithful — walked along a path with his servant, contemplating the clear dome of sky above him.<br><br>Ibn Umar was known among the Companions for being the most diligent in following the Sunnah of the Prophet ﷺ — and he would not sleep at night until he had ensured he had fulfilled the rights of everyone around him.' } },
        { scene:'mosque', character:'📚',
          text:{ ar:'وفي ذاتِ يَوم، دَخَلَ ابنُ عُمَر مَجلِسَ العالِمِ الكَبير الصَّحابيِّ الجَليل. رَأى ابنَ عُمَرَ النّاسُ وهو يَقفُ على بابِ المَجلِسِ وقَد أُغلِقَ المَجلِسُ لِكَثرَةِ الحاضِرين.<br><br>ماذا فَعَل؟ لم يَشِق الصُّفوفَ ولم يَقُل: «أَنا ابنُ عُمَر! أَفسِحوا لي!» بَل جَلَسَ على عَتَبَةِ البابِ يَستَمِعُ بِأَدَب! <b>جَلَسَ ابنُ الخَليفَةِ على الأَرضِ كَطالِبِ عِلمٍ صَغير!</b>',
                 en:'One day, Ibn Umar entered the gathering of a great senior scholar-Companion. People watched as he stood at the doorway of the session — it was full and closed due to the crowd.<br><br>What did he do? He did not push through the rows or say: "I am Ibn Umar! Make way for me!" Rather, he sat on the doorstep and listened with full attentiveness! <b>The son of the Caliph sat on the ground like a small student of knowledge!</b>' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'خَرَجَ أَحَدُ جُلَساءِ المَجلِسِ ورَأى ابنَ عُمَر جالِساً على العَتَبَة، فَذُعِر ودَخَلَ مُسرِعاً يُخبِرُ الشَّيخَ. قالَ الشَّيخُ لِمَن حَوله: <b>«أَفسِحوا لِابنِ عُمَر!»</b><br><br>دَخَلَ ابنُ عُمَرَ بِتَواضُع، وجَلَسَ في المَكانِ الَّذي أُشيرَ إِليه. وبَعدَ المَجلِس قالَ الشَّيخُ مُتَعَجِّباً: <b>«ما رَأَيتُ أَدَباً أَجمَلَ مِن أَدَبِكَ اليَوم يا أَبا عَبدِالرَّحمَن!»</b>',
                 en:'One of the session\'s attendees stepped out and saw Ibn Umar sitting on the threshold, alarmed, he hurried back to inform the shaykh. The shaykh said to those around him: <b>"Make room for Ibn Umar!"</b><br><br>Ibn Umar entered humbly and sat where he was directed. After the session the shaykh said in amazement: <b>"I have never seen etiquette more beautiful than yours today, O Abu Abd al-Rahman!"</b>' },
          choice:{ q:{ar:'لِماذا لم يَقُل ابنُ عُمَر: «أَفسِحوا لي — أَنا ابنُ الخَليفَة»؟', en:'Why didn\'t Ibn Umar say: "Make way — I am the Caliph\'s son"?'},
            opts:[
              { t:{ar:'لأنَّهُ كانَ خَجولاً وخائِفاً', en:'Because he was shy and afraid'}, c:false,
                exp:{ar:'لا — ابنُ عُمَر كانَ مِن أَشجَعِ الصَّحابَة. لَكِنَّهُ عَرَفَ أنَّ مَجلِسَ العِلمِ لا يَدخُلُهُ إلّا بِأَدَب.',en:'No — Ibn Umar was among the bravest Companions. But he knew that a gathering of knowledge is only entered with manners.'} },
              { t:{ar:'لأنَّهُ كانَ يَعلَمُ أنَّ الأَدَبَ مَعَ العالِمِ أَهَمُّ مِن مَكانَتِهِ', en:'Because he knew that etiquette with the scholar was more important than his status'}, c:true,
                exp:{ar:'نَعَم! الأَدَبُ مَعَ أَهلِ العِلمِ فَوقَ كُلِّ اعتِبار — وهذا ما عَلَّمَنا ابنُ عُمَر.',en:'Yes! Manners with people of knowledge are above all status — and this is what Ibn Umar taught us.'} },
              { t:{ar:'لأنَّهُ لم يَكُن يَعرِفُ الشَّيخَ', en:'Because he did not know the shaykh'}, c:false,
                exp:{ar:'لا — ابنُ عُمَر كانَ يَعرِفُ العُلَماءَ جَميعاً وكانَ مُتَعَلِّقاً بِهِم.',en:'No — Ibn Umar knew all the scholars and was deeply attached to them.'} },
            ] } },
        { scene:'garden', character:'💚',
          text:{ ar:'وكانَت هذه سُنَّةَ ابنِ عُمَر دائِماً: إذا لَقِيَ عالِماً قامَ لَه واستَأذَنَ قَبلَ أن يَجلِس. وإذا كانَ مَعَ جَماعَةٍ وجاءَ كَبيرٌ في السِّنِّ أو العِلمِ أَشارَ إلى مَكانِهِ الأَفضَل!<br><br>سُئِلَ ابنُ عُمَر ذاتَ مَرَّة: <b>«كَيفَ اكتَسَبتَ هذا الأَدَب؟»</b> فَأَجاب بِبَساطَة: <b>«نَظَرتُ إلى النَّبيِّ ﷺ فَوَجَدتُهُ يُكرِمُ كُلَّ مَن جَلَسَ مَعَه — فَقُلتُ: هذا هو الطَّريق!»</b>',
                 en:'This was always Ibn Umar\'s practice: when he met a scholar he would rise for him and ask permission before sitting. And when among a group and an elder in age or knowledge arrived, he would gesture toward the best seat!<br><br>Ibn Umar was once asked: <b>"How did you acquire this etiquette?"</b> He replied simply: <b>"I looked at the Prophet ﷺ and found him honouring everyone who sat with him — so I said: this is the way!"</b>' } },
        { scene:'mosque', character:'👳',
          text:{ ar:'مَرَّت السُّنونَ وكَبِرَ ابنُ عُمَر. أَصبَحَ هو نَفسُهُ عالِماً كَبيراً يَجلِسُ النّاسُ بَينَ يَدَيه. فَماذا رَأوا؟ رَأَوا أنَّهُ يَسأَلُ كُلَّ داخِلٍ عَن اسمِهِ وأَحوالِه، ويُقبِلُ عَليه بِكُلِّ قَلبِه كَأَنَّهُ أَعَزُّ شَخصٍ في الدُّنيا!<br><br><b>فمَن بَذَرَ الاحتِرامَ صَغيراً حَصَدَ المَحَبَّةَ كَبيراً.</b> الاحتِرامُ دائِرَةٌ تَدورُ — ما أَعطَيتَهُ للآخَرين سيَعودُ إلَيكَ أَضعافاً مُضاعَفَة.',
                 en:'Years passed and Ibn Umar grew old. He himself became a great scholar before whom people sat. And what did they see? They saw him asking every visitor their name and condition, turning to them with his whole heart as if they were the dearest person in the world!<br><br><b>Whoever sows respect in youth reaps love in old age.</b> Respect is a circle that turns — what you give to others returns to you multiplied.' } },
        { scene:'garden', character:'🌸',
          text:{ ar:'حَفِظَ لَنا الإمامُ الذَّهَبيُّ في «سِيَرِ أَعلامِ النُّبَلاء» ج٣ صُوَراً رائِعَةً مِن أَدَبِ ابنِ عُمَر مَعَ العُلَماءِ والكِبار. قالَ الذَّهَبيُّ عَنه: «كانَ مِن أَشَدِّ النّاسِ اتِّباعاً للسُّنَّة وأَحسَنِهِم أَدَباً.»<br><br>يا صَديقي — أَنتَ الآن تَعلَمُ السِّرّ: <b>الاحتِرامُ لَيسَ ضَعفاً — بل هو أَقوى ما يَملِكُهُ الإنسانُ الكَريم!</b> ابنُ عُمَر جَلَسَ على العَتَبَة وارتَفَعَت مَكانَتُهُ في القُلوب!' ,
                 en:'Imam Al-Dhahabi preserved for us in "Siyar A\'lam Al-Nubala" vol.3 magnificent scenes of Ibn Umar\'s etiquette with scholars and elders. Al-Dhahabi said about him: "He was among the most diligent of people in following the Sunnah and the most beautiful in manner."<br><br>My friend — now you know the secret: <b>Respect is not weakness — it is the strongest quality a noble person possesses!</b> Ibn Umar sat on the threshold and his status rose in all hearts!' } },
        { scene:'madinah', character:'💚',
          text:{ ar:'وتَأَمَّل هذهِ الصُّورَةَ الأَخيرَة: كانَ ابنُ عُمَر في آخِرِ حَياتِهِ شَيخاً كَبيراً. وكانَ التَّلاميذُ يَأتونَ مِن كُلِّ بَلَدٍ لِيَتَعَلَّموا مِنهُ. فَماذا كانَ يَفعَل؟<br><br>كانَ يَجلِسُ مَعَ كُلِّ واحِدٍ مِنهُم كَأَنَّهُ الضَّيفُ الوَحيد — يَسمَعُ سُؤالَهُ بِكُلِّ قَلبِه، ويُجيبُهُ بِكُلِّ حَنان. <b>الاحتِرامُ دائِرَةٌ: زَرَعَهُ ابنُ عُمَر في طِفولَتِهِ فَحَصَدَهُ مَحَبَّةً وتَبجيلاً في شَيخوخَتِه!</b> الجَميلُ يَعودُ — وهذا وَعدُ الله.',
                 en:'Consider this final image: Ibn Umar was in the last years of his life, a great elder. Students came from every land to learn from him. And what did he do?<br><br>He would sit with each one as if they were the only guest — listening to their question with his whole heart, answering with all gentleness. <b>Respect is a circle: Ibn Umar planted it in his childhood and harvested it as love and reverence in his old age!</b> Goodness returns — and this is Allah\'s promise.' } },
        { scene:'mosque', character:'📚',
          text:{ ar:'وكانَ ابنُ عُمَر رضي الله عنهما يَسيرُ في طَريقِ المَدينَةِ ويَمُرُّ بِصِبيَةٍ صِغارٍ يَلعَبون. فَكانَ يُسَلِّمُ عَليهِم أَوَّلاً ويَبتَسِمُ لَهُم! سُئِلَ: <b>«لِماذا تَبدَأُ السَّلامَ على الصِّغار؟»</b> فَأَجاب: <b>«رَأَيتُ النَّبيَّ ﷺ يَفعَلُ ذلِك — فَأَحبَبتُ أن أَتَّبِعَه!»</b><br><br>الاحتِرامُ لا يَعرِفُ صَغيراً أو كَبيراً — هو سِمَةُ القَلبِ النَّقيِّ الَّذي رَأى في كُلِّ إِنسانٍ كَرامَةً مَنَحَها اللهُ لَه.',
                 en:'Ibn Umar رضي الله عنهما would walk the roads of Madinah and pass by small children playing. He would greet them first and smile at them! He was asked: <b>"Why do you begin the greeting to small children?"</b> He replied: <b>"I saw the Prophet ﷺ do this — and I loved to follow him!"</b><br><br>Respect knows no young or old — it is the mark of the pure heart that sees in every person a dignity that Allah has granted them.' } },
      ],
      quiz: [
        { q:{ar:'ماذا فَعَلَ ابنُ عُمَر حينَ كانَ المَجلِسُ مُمتَلِئاً؟', en:'What did Ibn Umar do when the gathering was full?'},
          opts:[
            { t:{ar:'طالَبَ النّاسَ بِإِفساحِ المَجال', en:'Demanded people make way'}, c:false },
            { t:{ar:'جَلَسَ على العَتَبَةِ بِأَدَب', en:'Sat on the threshold with etiquette'}, c:true },
            { t:{ar:'غادَرَ المَجلِس', en:'Left the gathering'}, c:false },
          ] },
        { q:{ar:'مِن أَين اقتَبَسَ ابنُ عُمَر أَدَبَه؟', en:'From where did Ibn Umar derive his etiquette?'},
          opts:[
            { t:{ar:'مِن أَبيهِ عُمَر رضي الله عنه', en:'From his father Umar رضي الله عنه'}, c:false },
            { t:{ar:'مِن مُلاحَظَةِ النَّبيِّ ﷺ', en:'From observing the Prophet ﷺ'}, c:true },
            { t:{ar:'مِن الكُتُب', en:'From books'}, c:false },
          ] },
        { q:{ar:'ما الَّذي ذَكَرَهُ الإمامُ الذَّهَبيُّ عن ابنِ عُمَر؟', en:'What did Imam Al-Dhahabi mention about Ibn Umar?'},
          opts:[
            { t:{ar:'كانَ مِن أَشَدِّهِم اتِّباعاً للسُّنَّةِ وأَحسَنِهِم أَدَباً', en:'He was among the most diligent in Sunnah and most beautiful in manner'}, c:true },
            { t:{ar:'كانَ أَغنى الصَّحابَة', en:'He was the wealthiest Companion'}, c:false },
            { t:{ar:'كانَ أَشجَعَ الصَّحابَة', en:'He was the bravest Companion'}, c:false },
          ] },
      ],
      moral: { ar:'الأَدَبُ مَعَ أَهلِ العِلمِ فَوقَ كُلِّ مَكانَة. مَن جَلَسَ على العَتَبَةِ لِطَلَبِ العِلمِ ارتَفَعَ في قُلوبِ النّاسِ أَكثَرَ مِمَّن جَلَسَ في الصَّدر.',
               en:'Etiquette with people of knowledge is above all status. Whoever sat on the threshold for knowledge rose higher in hearts than one who sat in the seat of honour.' },
      badge: { icon:'📚', title:{ar:'وِسامُ طالِبِ العِلمِ الأَديب', en:'Medal of the Respectful Seeker of Knowledge'} },
      reflect: [
        {ar:'كَيفَ تُظهِرُ احتِرامَكَ لِمُعَلِّمِكَ أو شَيخِكَ في المَسجِد؟', en:'How do you show respect for your teacher or shaykh at the mosque?'},
        {ar:'هل سَبَقَ أن جَلَستَ على «العَتَبَة» مَجازاً — أي تَأَخَّرتَ لِتُقَدِّمَ غَيرَك؟ كَيفَ شَعَرتَ؟', en:'Have you ever sat on the "threshold" metaphorically — stepped back to put others first? How did it feel?'},
      ],
      didYouKnow: [
        {ar:'وَرَدَت أَخبارُ أَدَبِ ابنِ عُمَر مَعَ العُلَماءِ والكِبارِ في سِيَرِ أَعلامِ النُّبَلاء لِلإمامِ الذَّهَبيِّ — ج٣. المَصدَر: «سير أعلام النبلاء — الذهبي — ج٣»', en:'Accounts of Ibn Umar\'s etiquette with scholars appear in Siyar A\'lam Al-Nubala by Imam Al-Dhahabi — vol. 3. Source: "Siyar A\'lam Al-Nubala — Al-Dhahabi — Vol. 3"'},
        {ar:'كانَ عَبدُاللهِ بنُ عُمَر يَقومُ لِعُلَماءِ الصَّحابَة الأَكبَرِ مِنهُ، وكانَ لا يَدخُلُ بَيتاً إلّا بَعدَ الاستِئذَان حَتّى بَيتَ أَهلِهِ. المَصدَر: «سير أعلام النبلاء — الذهبي — ج٣»', en:'Ibn Umar would rise for senior Companion-scholars, and would not enter any home without permission — even his own family\'s home. Source: "Siyar A\'lam Al-Nubala — Al-Dhahabi — Vol. 3"'},
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       STORY 3 — الإمامُ الشّافِعيُّ وأَدَبُهُ مَعَ أُمِّه
       Imam Al-Shafi'i and his extraordinary respect for his mother
       Source: سير أعلام النبلاء — الذهبي (ج١٠) + islamweb.net
       ─────────────────────────────────────────────────────────────── */
    {
      icon:'🌿', scene:'garden', character:'🧕',
      title: { ar:'الإمامُ الشّافِعيُّ وأَدَبُهُ العَجيب', en:'Imam Al-Shafi\'i and his remarkable etiquette' },
      pages: [
        { scene:'garden', character:'🧕',
          text:{ ar:'في مَكَّةَ المُكَرَّمَة، وُلِدَ طِفلٌ اسمُهُ <b>مُحَمَّدُ بنُ إِدريسَ الشّافِعيّ</b>. لم يَكُن مِن عائِلَةٍ غَنيَّة — فقَد تُوُفِّيَ أَبوهُ وهو صَغير، فَكَبِرَ في كَنَفِ أُمِّهِ وَحدَها.<br><br>كانَت أُمُّهُ تَتَعَبُ كَثيراً لِتُعَلِّمَهُ وتُعيلَهُ. كانَت تَبيعُ ما تَملِكُهُ لِيَشتَرِيَ الأَوراقَ والأَقلام. وقَد حَفِظَ الشّافِعيُّ هذا الجَميلَ في قَلبِهِ طَوالَ حَياتِه.',
                 en:'In Makkah Al-Mukarramah, a child was born named <b>Muhammad ibn Idris Al-Shafi\'i</b>. He did not come from a wealthy family — his father had passed away when he was young, so he grew up under the sole care of his mother.<br><br>His mother worked extremely hard to educate and provide for him. She would sell what she owned so he could buy paper and pens. Al-Shafi\'i kept this kindness in his heart throughout his entire life.' } },
        { scene:'mosque', character:'🌿',
          text:{ ar:'لَمّا صارَ الشّافِعيُّ عالِماً كَبيراً يَجتَمِعُ النّاسُ مِن كُلِّ مَكانٍ لِيَستَمِعوا إِليه، لم يَتَغَيَّر أَدَبُهُ مَعَ أُمِّهِ أَبَداً! كانَ لا يَشرَبُ الماءَ في بَيتِهِ حَتّى يَستَأذِنَ مِنها.<br><br>يُروى عَنهُ أنَّهُ قالَ: <b>«أَخافُ أن أَشرَبَ الماءَ في بَيتِ أُمِّي دونَ إِذنِها — فَيَكونَ نَرجِسُ قَلبي قَد شَرِبَ قَبلَ أن أَستَأذِن!»</b> ما أَجمَلَ هذا القَلبَ الدَّقيق الَّذي يَخافُ مِن أَدقِّ الأَشياء!',
                 en:'When Al-Shafi\'i became a great scholar with people gathering from everywhere to hear him, his etiquette with his mother never changed! He would not drink water in his home without her permission.<br><br>It is narrated that he said: <b>"I fear to drink water in my mother\'s home without her permission — lest my self has drunk before I asked!"</b> What a tender heart that feared even the subtlest of things!' } },
        { scene:'madinah', character:'💚',
          text:{ ar:'ومِن أَعجَبِ ما يُروى عنه: كانَ إذا دَخَلَ على أُمِّهِ لَبِسَ أَجمَلَ ثِيابِهِ وتَعَطَّرَ — كَأَنَّهُ يَذهَبُ إلى وَليمَة! سُئِلَ عن ذلك فَقال: <b>«أُمِّي أَحَقُّ مِنِّي بِأن أَكونَ عِندَها بِأَحسَنِ هَيئَة!»</b><br><br>وكانَ إذا مَشى مَعَها يَجعَلُها في الجِهَةِ الأَفضَل مِنَ الطَّريق — بَعيداً عن الغُبارِ والضَّوضاء — ويَمشي هو في الجِهَةِ الأَصعَب.',
                 en:'Among the most astonishing things narrated about him: when he entered upon his mother he wore his finest clothes and applied perfume — as if attending a banquet! When asked about this he said: <b>"My mother deserves more than me that I come to her in the finest appearance!"</b><br><br>When walking with her he would place her on the better side of the road — away from dust and noise — while he walked on the harder side.' },
          choice:{ q:{ar:'لِماذا كانَ الشّافِعيُّ يَلبَسُ أَجمَلَ ثِيابِهِ عِندَ أُمِّه؟', en:'Why did Al-Shafi\'i wear his finest clothes for his mother?'},
            opts:[
              { t:{ar:'لِيَتَظاهَرَ أَمامَ الجيران', en:'To show off to the neighbours'}, c:false,
                exp:{ar:'لا — الشّافِعيُّ كانَ بَعيداً عن الرِّياء. فَعَلَ ذلِكَ مِن قَلبِهِ تَكريماً لِأُمِّه.',en:'No — Al-Shafi\'i was far from showing off. He did it from his heart as an honour to his mother.'} },
              { t:{ar:'لأنَّهُ يَعتَقِدُ أنَّ أُمَّهُ أَحَقُّ بِأَحسَنِ ما يَملِك', en:'Because he believed his mother deserved the best he possessed'}, c:true,
                exp:{ar:'نَعَم! هذا هو الاحتِرامُ الحَقيقيّ — أن تُعطيَ الَّذين تُحِبُّهُم أَجمَلَ ما عِندَك.',en:'Yes! This is true respect — to give those you love the finest of what you have.'} },
              { t:{ar:'لأنَّ أُمَّهُ كانَت تَطلُبُ مِنهُ ذلِك', en:'Because his mother asked him to do so'}, c:false,
                exp:{ar:'لا — كانَ يَفعَلُ ذلِكَ مِن نَفسِهِ، بِدونِ طَلَب. الاحتِرامُ الحَقيقيُّ لا يَحتاجُ طَلَباً!',en:'No — he did it of his own accord, without being asked. True respect does not need to be requested!'} },
            ] } },
        { scene:'garden', character:'🌹',
          text:{ ar:'وكانَت أُمُّ الشّافِعيِّ تَنظُرُ إلى وَلَدِها العالِمِ الكَبيرِ بِعَينَين دامِعَتَين مِنَ الفَرَح. كَم مِن لَيلَةٍ جَلَسَت وَحيدَةً تَدعو لَهُ! وهاهو اليَوم — أَمامَها — يُجِلُّها ويُعَظِّمُها!<br><br>كانَت تَقولُ لِبَناتِ الجيرانِ بِفَخر: <b>«انظُرنَ كَيفَ يَجلِسُ ابني أَمامي — كَأنَّهُ أَصغَرُ وَلَدٍ وهو أَكبَرُ عالِمٍ!»</b> ودُموعُها تَسبِقُ كَلامَها.',
                 en:'Al-Shafi\'i\'s mother would look at her great scholar son with eyes brimming with tears of joy. How many nights did she sit alone praying for him! And here he is today — before her — honouring and venerating her!<br><br>She would say proudly to the neighbourhood daughters: <b>"Look how my son sits before me — as if he is the smallest child yet he is the greatest scholar!"</b> Her tears would race ahead of her words.' } },
        { scene:'mosque', character:'📚',
          text:{ ar:'وقَد كَتَبَ الإمامُ الشّافِعيُّ في أَحَدِ دَواوينِهِ أَبياتاً خَالِدَة عن بِرِّ الوالِدَين — يَقولُ فيها ما مَعناه: <b>إذا أَرَدتَ أن تَعلُوَ وتَرتَفِع، فَعَلَيكَ بِبِرِّ الوالِدَين فَإنَّهُ يَرفَعُ الدَّرَجات!</b><br><br>وحَكى عنهُ الإمامُ الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء — ج١٠ — أنَّهُ كانَ يُكثِرُ مِن قَولِه: <b>«وَلَدي، وأَنتُم وَلَدُ أُمَّهاتِكُم — لا تَنسَوا فَضلَهُنَّ أَبَداً!»</b>',
                 en:'Imam Al-Shafi\'i wrote immortal verses about honouring parents in one of his diwan — conveying: <b>If you wish to rise and be elevated, fulfil your duty to parents, for it elevates ranks!</b><br><br>And Imam Al-Dhahabi narrated about him in Siyar A\'lam Al-Nubala — vol. 10 — that he would often say: <b>"My children, and you are your mothers\' children — never forget their favour, ever!"</b>' } },
        { scene:'madinah', character:'📚',
          text:{ ar:'وتَروي كُتُبُ السِّيَرِ أنَّ الإمامَ الشّافِعيَّ كانَ حينَ يَمرَضُ أَحَدُ تَلاميذِهِ يَذهَبُ بِنَفسِهِ لِعِيادَتِه. كانَ يَقول: <b>«الزِّيارَةُ حَقٌّ والاحتِرامُ فَريضَة — وأَنا لا أُرَبِّي تَلاميذَ بَل أُرَبِّي قُلوباً!»</b><br><br>وكانَ يَرفُضُ أن يَمشِيَ الطُّلّابُ وَراءَهُ كَالأَتباع. كانَ يَقول: <b>«امشوا بِجانِبي — فالعِلمُ لا يَحتاجُ إلى مَواكِب، يَحتاجُ إلى قُلوبٍ مُتَواضِعَة.»</b> هكَذا كانَ الشّافِعيُّ — يُعَلِّمُ الاحتِرامَ بِالاحتِرام!',
                 en:'The biography books narrate that when one of Imam Al-Shafi\'i\'s students fell ill, he would go himself to visit him. He would say: <b>"A visit is a right and respect is an obligation — and I do not raise students, I raise hearts!"</b><br><br>He would refuse to let students walk behind him like followers. He would say: <b>"Walk beside me — knowledge does not need processions, it needs humble hearts."</b> This was Al-Shafi\'i — teaching respect through respect!' } },
        { scene:'garden', character:'🌸',
          text:{ ar:'يا صَديقي، تَأَمَّل مَعي: كانَ الإمامُ الشّافِعيُّ يَستَطيعُ أن يَقولَ: «أَنا عالِمٌ كَبير — أُمِّي لا تَفهَمُ ما أَفهَمُه!» لَكِنَّهُ لم يَفعَل أَبَداً.<br><br>بَل كانَ يَقولُ: <b>«كُلُّ ما وَصَلتُ إِليه كانَ بِدُعائِها وتَعَبِها — فَكَيفَ لا أَحتَرِمُها؟»</b> هذا هو السِّرُّ الأَعظَم: الاحتِرامُ يَبدَأُ بِالاعتِرافِ بِالجَميلِ وتَذَكُّرِ مَن أَحسَنَ إِلَيك.',
                 en:'My friend, reflect with me: Imam Al-Shafi\'i could have said: "I am a great scholar — my mother does not understand what I understand!" But he never did.<br><br>Instead he would say: <b>"Everything I reached was through her prayers and her toil — how can I not respect her?"</b> This is the greatest secret: respect begins with acknowledging kindness and remembering those who showed goodness to you.' } },
      ],
      quiz: [
        { q:{ar:'ماذا كانَ الشّافِعيُّ يَفعَلُ عِندَ دُخولِهِ على أُمِّه؟', en:'What did Al-Shafi\'i do when entering upon his mother?'},
          opts:[
            { t:{ar:'يَلبَسُ أَجمَلَ ثِيابِهِ ويَتَعَطَّر', en:'He wore his finest clothes and perfume'}, c:true },
            { t:{ar:'يَجلِسُ بِسُرعَة ويَذهَب', en:'He sat quickly and left'}, c:false },
            { t:{ar:'يَطلُبُ مِنها طَعاماً', en:'He asked her for food'}, c:false },
          ] },
        { q:{ar:'ما أَثَرُ أُمِّهِ على نَجاحِ الشّافِعيِّ؟', en:'What was his mother\'s impact on Al-Shafi\'i\'s success?'},
          opts:[
            { t:{ar:'لا شَيء — نَجَحَ بِنَفسِه', en:'Nothing — he succeeded alone'}, c:false },
            { t:{ar:'دُعاؤها وتَعَبُها كانا سَبَبَ نَجاحِه', en:'Her prayers and toil were the reason for his success'}, c:true },
            { t:{ar:'أَعطَتهُ مالاً كَثيراً', en:'She gave him much money'}, c:false },
          ] },
        { q:{ar:'في أيِّ كِتابٍ ذَكَرَ الإمامُ الذَّهَبيُّ أَخبارَ الشّافِعيِّ مَعَ أُمِّه؟', en:'In which book did Imam Al-Dhahabi mention Al-Shafi\'i\'s conduct with his mother?'},
          opts:[
            { t:{ar:'سِيَرُ أَعلامِ النُّبَلاء — ج١٠', en:'Siyar A\'lam Al-Nubala — Vol. 10'}, c:true },
            { t:{ar:'صَحيحُ البُخاري', en:'Sahih Al-Bukhari'}, c:false },
            { t:{ar:'المُوَطَّأ', en:'Al-Muwatta'}, c:false },
          ] },
      ],
      moral: { ar:'الاحتِرامُ لا يَعرِفُ عَظمَةً ولا مَكانَة؛ حَتّى أَعظَمُ العُلَماءِ كانَ أَشَدَّهُم احتِراماً لِأُمِّه. وكَما دَعَت لَهُ أُمُّهُ ارتَفَعَ.',
               en:'Respect knows no greatness or status — even the greatest scholars were the most respectful to their mothers. And as his mother prayed for him, he was elevated.' },
      badge: { icon:'🌿', title:{ar:'وِسامُ الابنِ الأَديب', en:'Medal of the Respectful Child'} },
      reflect: [
        {ar:'ما الأَشياءُ الصَّغيرَةُ الَّتي يُمكِنُني فِعلُها اليَوم لِأُمِّي أو أَبي لِأُظهِرَ لَهُما احتِرامي؟', en:'What small things can I do today for my mother or father to show them my respect?'},
        {ar:'هل تَعَلَّمتَ احتِرامَ الوالِدَين في البيتِ أم في المَدرَسَة؟ أَيُّهُما أَهَم؟', en:'Did you learn to respect parents at home or at school? Which is more important?'},
      ],
      didYouKnow: [
        {ar:'حَفِظَ الإمامُ الذَّهَبيُّ أَخبارَ أَدَبِ الشّافِعيِّ مَعَ أُمِّهِ ومُعَلِّميهِ في سِيَرِ أَعلامِ النُّبَلاء — ج١٠. المَصدَر: «سير أعلام النبلاء — الذهبي — ج١٠»', en:'Imam Al-Dhahabi recorded Al-Shafi\'i\'s etiquette with his mother and teachers in Siyar A\'lam Al-Nubala — Vol. 10. Source: "Siyar A\'lam Al-Nubala — Al-Dhahabi — Vol. 10"'},
        {ar:'وُلِدَ الإمامُ الشّافِعيُّ سَنَةَ ١٥٠هـ في غَزَّة ونَشَأ في مَكَّة. حَفِظَ القُرآنَ وهو ابنُ سَبعِ سَنَوات وكانَ يَستَأذِنُ أُمَّهُ في كُلِّ شَيء. المَصدَر: islamweb.net/ar/article/186000', en:'Imam Al-Shafi\'i was born in 150 AH in Gaza and grew up in Makkah. He memorised the Quran at age seven and would ask his mother\'s permission for everything. Source: islamweb.net/ar/article/186000'},
      ],
    },

    /* ──────────────────────────────────────────────────────────────
       STORY 4 — أُوَيسٌ القَرَنيُّ وبِرُّهُ بِأُمِّه
       Uways Al-Qarani and his extraordinary honour of his mother
       Source: dorar.net + islamweb.net — authentic narration in Sahih Muslim
       ─────────────────────────────────────────────────────────────── */
    {
      icon:'🌙', scene:'desert', character:'🧕',
      title: { ar:'أُوَيسٌ القَرَنيُّ: الوَليُّ الَّذي لم يَلقَ النَّبيَّ ﷺ', en:'Uways Al-Qarani: the saint who never met the Prophet ﷺ' },
      pages: [
        { scene:'desert', character:'🧕',
          text:{ ar:'في اليَمَن الخَضراء، في وادٍ تَسكُنُهُ قَبيلَةُ قَرَن، كانَ يَعيشُ رَجُلٌ فَقيرٌ مُتَعَبٌ — لا مالَ لَه ولا مَكانَة بَينَ النّاس. كانَ اسمُهُ <b>أُوَيسُ بنُ عامِرٍ القَرَنيّ</b>.<br><br>لَكِنَّ النَّبيَّ ﷺ كانَ يَعلَمُ عَنهُ! كانَ يَقولُ لِصَحابَتِه بِصَوتٍ مُشتاق: <b>«خَيرُ التّابِعينَ أُوَيسٌ القَرَنيّ»</b> ويَصِفُهُ بِأنَّهُ يُشفِعُ لِأُمَّتِهِ يَومَ القِيامَة! ما سِرُّ هذهِ العَظَمَة؟',
                 en:'In the green Yemen, in a valley inhabited by the tribe of Qaran, there lived a poor and tired man — no wealth, no standing among people. His name was <b>Uways ibn Amir Al-Qarani</b>.<br><br>Yet the Prophet ﷺ knew of him! He would say to his Companions with longing in his voice: <b>"The best of the successors is Uways Al-Qarani"</b> and describe him as one who would intercede for his nation on the Day of Judgement! What was the secret of this greatness?' } },
        { scene:'desert', character:'🌙',
          text:{ ar:'السِّرُّ كانَ في كَلِمَتَين: <b>بِرُّ الوالِدَين!</b> كانَ أُوَيسٌ يَعيشُ مَعَ أُمٍّ مَريضَةٍ عَجوز — يَخدُمُها وَحدَهُ بِيَدَيهِ الكَريمَتَين. كانَ لا يَنامُ حَتّى تَنام، ولا يَأكُلُ حَتّى تَأكُل.<br><br>وصَلَ خَبَرُ النَّبيِّ ﷺ إلى قَلبِ أُوَيسٍ فَأَحَبَّهُ حُبّاً جارِفاً — كانَ يَبكي مِنَ الشَّوقِ كُلَّما سَمِعَ اسمَهُ! حَلَمَ بِأن يَرَى النَّبيَّ ﷺ وَجهاً لِوَجه. لَكِنَّ كَيفَ يَستَطيع؟ <b>أُمُّهُ لا يَستَطيعُ تَركَها — مَن يَخدُمُها إن غاب؟</b>',
                 en:'The secret lay in two words: <b>honouring parents!</b> Uways lived with a sick elderly mother — serving her alone with his two noble hands. He would not sleep until she slept, nor eat until she ate.<br><br>News of the Prophet ﷺ reached Uways\'s heart and he loved him with overwhelming love — he would weep from longing whenever he heard his name! He dreamed of seeing the Prophet ﷺ face to face. But how could he? <b>His mother — he could not leave her — who would serve her if he was gone?</b>' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'وفي ذاتِ يَومٍ اشتَدَّ الشَّوقُ في قَلبِ أُوَيس — فَقَرَّرَ أن يَسافِرَ إلى المَدينَةِ لِيَرى النَّبيَّ ﷺ ولو لَحظَة! قَطَعَ الصَّحراءَ مَشياً على قَدَمَيهِ — أَيّاماً طِوالاً تَحتَ الشَّمسِ المُحرِقَة.<br><br>وصَلَ المَدينَةَ وقَلبُهُ يَكادُ يَطيرُ مِنَ الفَرَح! لَكِنَّ النَّبيَّ ﷺ كانَ مُسافِراً في غَزوَة. انتَظَرَ أُوَيسٌ... وانتَظَر... ثُمَّ تَذَكَّرَ: <b>«أُمِّي المَريضَةُ — لا أَحَدَ مَعَها!»</b> فَدَمَعَت عَيناه وقَرَّرَ العَودَة!',
                 en:'One day the longing in Uways\'s heart intensified — he decided to travel to Madinah to see the Prophet ﷺ even for a moment! He crossed the desert on foot — long days under the scorching sun.<br><br>He arrived in Madinah and his heart nearly flew with joy! But the Prophet ﷺ was away on an expedition. Uways waited... and waited... then remembered: <b>"My sick mother — there is no one with her!"</b> His eyes filled with tears and he decided to return!' },
          choice:{ q:{ar:'لِماذا رَجَعَ أُوَيسٌ مِن المَدينَةِ دونَ أن يَرى النَّبيَّ ﷺ؟', en:'Why did Uways return from Madinah without seeing the Prophet ﷺ?'},
            opts:[
              { t:{ar:'لأنَّهُ خافَ مِن السَّفَر', en:'Because he was afraid of traveling'}, c:false,
                exp:{ar:'لا — رَجُلٌ قَطَعَ الصَّحراءَ مَشياً لا يَخافُ! عادَ لأجلِ أُمِّهِ المَريضَة.',en:'No — a man who crossed the desert on foot is not afraid! He returned for his sick mother.'} },
              { t:{ar:'لأنَّ أُمَّهُ المَريضَةَ لا أَحَدَ مَعَها', en:'Because his sick mother had no one with her'}, c:true,
                exp:{ar:'نَعَم! هذا هو احتِرامُ الوالِدَين في أَعلى صُوَرِه — تُقَدِّمُهُم حَتّى على أَعَزِّ أَمانِيك.',en:'Yes! This is honouring parents in its highest form — you put them before even your dearest wish.'} },
              { t:{ar:'لأنَّهُ لم يَجِد النَّبيَّ ﷺ وضاقَ بِه الأَمر', en:'Because he couldn\'t find the Prophet ﷺ and became frustrated'}, c:false,
                exp:{ar:'لا — أُوَيسٌ رَجَعَ لأجلِ أُمِّهِ وهو صابِرٌ مُحتَسِب. وقَد رَفَعَهُ اللهُ بِهذا الاحتِرام.',en:'No — Uways returned for his mother while patient and seeking Allah\'s reward. And Allah elevated him through this respect.'} },
            ] } },
        { scene:'garden', character:'💚',
          text:{ ar:'حينَ عادَ النَّبيُّ ﷺ مِن غَزوَتِهِ وعَلِمَ أنَّ أُوَيساً جاءَ وعادَ — لم يَغضَب بل ابتَسَمَ ابتِسامَةَ الرَّاضي وقال: <b>«ذلِكَ هو أُوَيسٌ — اخترَ بِرَّ أُمِّهِ على رُؤيَتي، ومَن اختارَ رِضا اللهِ على رِضا نَفسِهِ كانَ عِندَ اللهِ عَظيم!»</b><br><br>وأَوصى النَّبيُّ ﷺ عُمَرَ وعَلِيّاً رضي الله عنهما: <b>«إذا لَقيتُماهُ فَاطلُبا مِنهُ أن يَستَغفِرَ لَكُما»</b> — صَحابيّانِ جَليلانِ يَطلُبانِ الدُّعاءَ مِن رَجُلٍ لم يَرَ النَّبيَّ ﷺ! عَجَباً لِلاحتِرامِ كَيفَ يَرفَعُ!',
                 en:'When the Prophet ﷺ returned from his expedition and learned that Uways had come and returned — he did not become angry but smiled with contentment saying: <b>"That is Uways — he chose honouring his mother over seeing me, and whoever chooses Allah\'s pleasure over his own desire is great before Allah!"</b><br><br>The Prophet ﷺ advised Umar and Ali رضي الله عنهما: <b>"When you meet him, ask him to pray for forgiveness for you"</b> — two noble Companions asking prayer from a man who never saw the Prophet ﷺ! How wondrous is the way respect elevates!' } },
        { scene:'desert', character:'🌙',
          text:{ ar:'وبَعدَ وَفاةِ النَّبيِّ ﷺ لَقِيَ عُمَرُ وعَلِيٌّ رضي الله عنهما أُوَيساً القَرَنيَّ فِعلاً. رَأَيا رَجُلاً مُتَواضِعاً يَلبَسُ ثِياباً رَثَّة — لَيسَ فيه أيُّ مَظهَرٍ للعَظَمَة الدُّنيَويَّة.<br><br>لَكِنَّهُما عَرَفاهُ مِن وَصفِ النَّبيِّ ﷺ وطَلَبا مِنهُ الدُّعاء. وقَد دَعا لَهُما أُوَيسٌ بِقَلبٍ مُخلِص وعَينٍ دامِعَة. <b>هكَذا تُعطي طاعَةُ الوالِدَين المَرءَ مَكانَةً عِندَ اللهِ لا يَبلُغُها المالُ ولا النَّسَب!</b>',
                 en:'After the Prophet\'s ﷺ passing, Umar and Ali رضي الله عنهما did indeed meet Uways Al-Qarani. They saw a humble man in worn clothing — no outward sign of worldly greatness.<br><br>Yet they recognised him from the Prophet\'s ﷺ description and asked him to pray for them. And Uways prayed for them with a sincere heart and tearful eye. <b>This is how obeying parents grants a person a status with Allah that wealth and lineage cannot reach!</b>' } },
        { scene:'garden', character:'🌸',
          text:{ ar:'ما أَعظَمَ درسَ أُوَيسٍ القَرَنيِّ! جاءَ مِن اليَمَن إلى المَدينَة مَشياً على قَدَمَيه — وعادَ دونَ أن يَرى مَن يُحِبّ — وذلِكَ لِأَجلِ أُمِّهِ المَريضَة. فَرَفَعَهُ اللهُ حَتّى صارَ خَيرَ التّابِعين!<br><br><b>أيُّها الصَّغيرُ الكَريم — كُلَّما آثَرتَ رِضا والِدَيكَ على رَغبَتِكَ رَفَعَكَ اللهُ دَرَجَة! لا تَنتَظِر أن تَكبَرَ لِتَحتَرِم — ابدَأ الآن، وابدَأ بِالبَسمَة والكَلِمَةِ اللَّيِّنَة والإِسراعِ في الطَّاعَة!</b>',
                 en:'What a magnificent lesson from Uways Al-Qarani! He walked from Yemen to Madinah on foot — and returned without seeing the one he loved — and all for his sick mother. So Allah elevated him until he became the best of the successors!<br><br><b>O noble young one — each time you choose your parents\' pleasure over your own desire, Allah raises you a degree! Don\'t wait until you grow up to respect — begin now, begin with a smile, a gentle word, and rushing to obey!</b>' } },
        { scene:'desert', character:'🌙',
          text:{ ar:'وفي نِهايَةِ القِصَّة، عاشَ أُوَيسٌ القَرَنيُّ بَقيَّةَ حَياتِهِ يَخدُمُ أُمَّهُ بِكُلِّ ما أُوتيَ مِن قُوَّة. وحينَ تُوُفِّيَت أُمُّهُ رَثاها بِدُموعٍ سالَت كَالأَنهار.<br><br>كانَ يَقولُ لِمَن يَأتيهِ: <b>«لا تَطلُبوا مِنِّي دُعاءً — اذهَبوا إلى أُمَّهاتِكُم وابكوا بَينَ أيديهِنَّ وقَبِّلوا جِباهَهُنَّ — فَدُعاءُ الأُمِّ هو الكَنزُ الَّذي لا يُقدَّر بِثَمَن!»</b><br><br>هكَذا تَكَلَّمَ خَيرُ التّابِعين — فَهَل نَسمَع؟',
                 en:'In the end of the story, Uways Al-Qarani spent the rest of his life serving his mother with every strength given to him. When she passed away, he mourned her with tears that fell like rivers.<br><br>He would say to those who came to him: <b>"Do not ask me for prayer — go to your mothers and weep before them and kiss their foreheads — for a mother\'s prayer is the treasure beyond all price!"</b><br><br>Thus spoke the best of the successors — shall we listen?' } },
      ],
      quiz: [
        { q:{ar:'ما وَصفُ النَّبيِّ ﷺ لِأُوَيسٍ القَرَنيّ؟', en:'How did the Prophet ﷺ describe Uways Al-Qarani?'},
          opts:[
            { t:{ar:'خَيرُ التّابِعين', en:'The best of the successors'}, c:true },
            { t:{ar:'أَشجَعُ التّابِعين', en:'The bravest of the successors'}, c:false },
            { t:{ar:'أَعلَمُ التّابِعين', en:'The most knowledgeable of the successors'}, c:false },
          ] },
        { q:{ar:'لِماذا لم يَرَ أُوَيسٌ النَّبيَّ ﷺ رَغمَ مَجيئِهِ للمَدينَة؟', en:'Why did Uways not see the Prophet ﷺ despite coming to Madinah?'},
          opts:[
            { t:{ar:'رَجَعَ لِأَجلِ أُمِّهِ المَريضَة', en:'He returned for his sick mother'}, c:true },
            { t:{ar:'خافَ مِن النّاس', en:'He feared people'}, c:false },
            { t:{ar:'لم يَجِد المَدينَة', en:'He could not find Madinah'}, c:false },
          ] },
        { q:{ar:'مَن طَلَبَ مِن أُوَيسٍ أن يَدعوَ لَهُ بَعدَ وَفاةِ النَّبيِّ ﷺ؟', en:'Who asked Uways to pray for them after the Prophet\'s ﷺ passing?'},
          opts:[
            { t:{ar:'عُمَرُ وعَلِيٌّ رضي الله عنهما', en:'Umar and Ali رضي الله عنهما'}, c:true },
            { t:{ar:'أَبو بَكرٍ وعُثمان', en:'Abu Bakr and Uthman'}, c:false },
            { t:{ar:'مُعاوِيَةُ وعَمرو', en:'Mu\'awiya and \'Amr'}, c:false },
          ] },
      ],
      moral: { ar:'مَن احتَرَمَ والِدَيهِ وآثَرَ رِضاهُما على رَغبَتِهِ رَفَعَهُ اللهُ مَنزِلَةً فَوقَ كُلِّ مَنزِلَة — حَتّى وإن لم يَعلَم بِهِ أَحَد.',
               en:'Whoever respects his parents and chooses their pleasure over his own desires — Allah elevates his rank above all ranks — even if no one knows of him.' },
      badge: { icon:'🌙', title:{ar:'وِسامُ الوَليِّ البارّ', en:'Medal of the Devout and Dutiful'} },
      reflect: [
        {ar:'هل ضَحَّيتَ يَوماً بِشَيءٍ تُحِبُّهُ لِأَجلِ والِدِيك؟ كَيفَ كانَت نِهايَةُ القِصَّة؟', en:'Did you ever sacrifice something you loved for your parents? How did the story end?'},
        {ar:'كَيفَ يُمكِنُكَ الآن — وأَنتَ صَغير — أن تُقَدِّمَ رِضا والِدَيكَ على رَغبَتِك؟', en:'How can you now — while young — put your parents\' pleasure before your own desires?'},
      ],
      didYouKnow: [
        {ar:'قِصَّةُ أُوَيسٍ القَرَنيِّ ثابِتَةٌ في صَحيحِ مُسلِم — حديث ٢٥٤٢ — وفيها أنَّ النَّبيَّ ﷺ قالَ: «خَيرُ التّابِعينَ رَجُلٌ يُقالُ له أُوَيس». المَصدَر: dorar.net/hadith/searcher?q=أويس+القرني', en:'The story of Uways Al-Qarani is firmly established in Sahih Muslim — hadith 2542 — where the Prophet ﷺ said: "The best of the successors is a man called Uways." Source: dorar.net'},
        {ar:'أَوصى النَّبيُّ ﷺ عُمَرَ بنَ الخَطّابِ وعَلِيَّ بنَ أبي طالِب بِالسَّلامِ على أُوَيسٍ وطَلَبِ الدُّعاءِ مِنهُ — وهذا في صَحيحِ مُسلِم حَديث ٢٥٤٢. المَصدَر: islamweb.net/ar/article/27604', en:'The Prophet ﷺ commanded Umar ibn Al-Khattab and Ali ibn Abi Talib to convey his greetings to Uways and ask for his prayer — this is in Sahih Muslim hadith 2542. Source: islamweb.net/ar/article/27604'},
      ],
    },

  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text: { ar:'﴿ وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا ﴾',
               en:'"Your Lord has decreed that you worship none but Him, and to parents, good treatment. Say not to them \'uff\' nor repel them — speak to them a noble word."' },
        ref: { ar:'[سورة الإسراء: ٢٣]', en:'[Surah Al-Isra: 23]' } },
      { text: { ar:'﴿ وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا ﴾',
               en:'"Lower to them the wing of humility out of mercy, and say: My Lord, have mercy on them both, as they raised me when I was small."' },
        ref: { ar:'[سورة الإسراء: ٢٤]', en:'[Surah Al-Isra: 24]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ ﴾',
               en:'"O you who believe — let not a people ridicule another people; perhaps they may be better than them."' },
        ref: { ar:'[سورة الحجرات: ١١]', en:'[Surah Al-Hujurat: 11]' } },
    ],
    hadiths: [
      { text: { ar:'«لَيسَ مِنّا مَن لم يُجِلَّ كَبيرَنا، ويَرحَم صَغيرَنا، ويَعرِف لِعالِمِنا حَقَّه»',
               en:'"He is not of us who does not respect our elders, show mercy to our young, and recognise the right of our scholars."' },
        ref: { ar:'[رواه أحمد والحاكم وصحَّحَهُ الألباني]', en:'[Ahmad & Al-Hakim — authenticated by Al-Albani]' } },
      { text: { ar:'«إنَّ مِن إِجلالِ اللهِ إِكرامَ ذي الشَّيبَةِ المُسلِم»',
               en:'"Verily, among the ways of revering Allah is honouring the grey-haired Muslim."' },
        ref: { ar:'[رواه أبو داود — حديث ٤٨٤٣]', en:'[Abu Dawud — hadith 4843]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ الاحتِرام', en:'Pledge of respect' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أُجِلَّ والِدَيَّ وأُطيعَهُما بِقَولٍ لَيِّنٍ وقَلبٍ مُحِبٍّ وعَملٍ صادِق', en:'I pledge to Allah to honour and obey my parents with gentle words, a loving heart, and sincere action' },
        { ar:'أُعاهِدُ اللهَ أن أَحتَرِمَ كُلَّ كَبيرٍ في سِنِّهِ أو عِلمِهِ بِتَوقيرٍ وأَدَبٍ حَقيقيّ', en:'I pledge to Allah to respect every elder in age or knowledge with genuine reverence and good manners' },
        { ar:'أُعاهِدُ اللهَ أن أَحفَظَ كَرامَةَ إِخوانِي ولا أَسخَرَ مِن أَحَدٍ أَبَداً ولا أُهينَ مَشاعِرَه', en:'I pledge to Allah to preserve my brothers\' dignity, never mock anyone ever, and never wound feelings' },
        { ar:'أُعاهِدُ اللهَ أن أَتَعَلَّمَ الاحتِرامَ مِن سِيرَةِ النَّبيِّ ﷺ وأَجعَلَهُ خُلُقي في كُلِّ يَومٍ وفي كُلِّ مَوقِف', en:'I pledge to Allah to learn respect from the Prophet\'s ﷺ biography and make it my character every day and in every situation' },
      ],
      dua: { ar:'اللَّهُمَّ اجعَلني مِن عِبادِكَ الَّذينَ يُجِلُّونَ كِبارَهُم ويَرحَمونَ صِغارَهُم ويُكرِمونَ مَن حَولَهُم ويَنشُرونَ الاحتِرامَ في كُلِّ مَكان',
             en:'O Allah, make me among Your servants who honour their elders, show mercy to their young, respect those around them, and spread respect in every place' },
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
            wordBank: { ar:['الوالِدَين','الكِبار','الأَدَب','التَّوقير','الاحتِرام','العُلَماء','الكَرامَة','القَول'], en:['parents','elders','manners','veneration','respect','scholars','dignity','speech'] },
            items: [
              { prefix:{ar:'أَعلى مَراتِبِ الاحتِرامِ بَعدَ حَقِّ اللهِ هو احتِرامُ', en:'The highest rank of respect after Allah\'s right is respecting'}, answer:{ar:'الوالِدَين', en:'parents'}, suffix:{ar:'وبِرُّهُما', en:'and honoring them'} },
              { prefix:{ar:'قالَ النَّبيُّ ﷺ: إنَّ مِن إِجلالِ اللهِ إِكرامَ', en:'The Prophet ﷺ said: Among honouring Allah is honouring'}, answer:{ar:'الكِبار', en:'elders'}, suffix:{ar:'المُسلِمين ذَوِي الشَّيبَة', en:'grey-haired Muslims'} },
              { prefix:{ar:'الاحتِرامُ يَبدَأُ بِتَعَلُّمِ', en:'Respect begins with learning'}, answer:{ar:'الأَدَب', en:'manners'}, suffix:{ar:'مُنذُ الصِّغَر', en:'from a young age'} },
              { prefix:{ar:'جَلَسَ ابنُ عُمَر على العَتَبَةِ', en:'Ibn Umar sat on the threshold'}, answer:{ar:'التَّوقير', en:'veneration'}, suffix:{ar:'لِمَجلِسِ العِلمِ والعالِم', en:'out of reverence for the gathering of knowledge'} },
              { prefix:{ar:'الاحتِرامُ يَحفَظُ', en:'Respect preserves'}, answer:{ar:'الكَرامَة', en:'dignity'}, suffix:{ar:'لِكُلِّ إِنسان', en:'for every person'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'احتِرامُ الوالِدَين واجِبٌ بَعدَ طاعَةِ الله', en:'Respecting parents is obligatory after obeying Allah'}, t:true },
              { q:{ar:'الاحتِرامُ يَعني السُّكوتَ أَمامَ كُلِّ أَحَد', en:'Respect means staying silent before everyone'}, t:false },
              { q:{ar:'النَّبيُّ ﷺ قامَ لِأُمِّهِ المُرضِعَة حَليمَة', en:'The Prophet ﷺ rose for his foster-mother Halima'}, t:true },
              { q:{ar:'الاحتِرامُ يَنقُصُ مِن مَكانَةِ الإنسانِ ومَكانَتِه', en:'Respect diminishes a person\'s standing and rank'}, t:false },
              { q:{ar:'أُوَيسٌ القَرَنيُّ رَجَعَ مِن المَدينَةِ لِأَجلِ أُمِّهِ المَريضَة', en:'Uways Al-Qarani returned from Madinah for his sick mother'}, t:true },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما المَقصودُ بِإِجلالِ الكَبير؟', en:'What does honouring the elder mean?'},
                opts:[
                  { t:{ar:'تَعظيمُهُ وإِعطاؤهُ حَقَّه', en:'Venerating him and giving him his due'}, c:true },
                  { t:{ar:'الخَوفُ مِنهُ', en:'Fearing him'}, c:false },
                  { t:{ar:'مُجامَلَتُهُ فَقَط', en:'Merely flattering him'}, c:false }
                ] },
              { q:{ar:'ما الفَرقُ بَينَ الاحتِرامِ والخَوف؟', en:'What is the difference between respect and fear?'},
                opts:[
                  { t:{ar:'الاحتِرامُ مِن القَلبِ والخَوفُ مِن الخارِج', en:'Respect comes from the heart; fear is external'}, c:true },
                  { t:{ar:'لا فَرق', en:'No difference'}, c:false },
                  { t:{ar:'الخَوفُ أَفضَل', en:'Fear is better'}, c:false }
                ] },
              { q:{ar:'مَن هو خَيرُ التّابِعين الَّذي ذَكَرَهُ النَّبيُّ ﷺ؟', en:'Who is the best of the successors mentioned by the Prophet ﷺ?'},
                opts:[
                  { t:{ar:'أُوَيسٌ القَرَنيّ', en:'Uways Al-Qarani'}, c:true },
                  { t:{ar:'الحَسَنُ البَصريّ', en:'Al-Hasan Al-Basri'}, c:false },
                  { t:{ar:'سَعيدُ بنُ المُسَيِّب', en:'Sa\'id ibn Al-Musayyab'}, c:false }
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
              { a:{ar:'احتِرامُ الوالِدَين', en:'Respecting parents'}, b:{ar:'قَولٌ كَريمٌ وقَلبٌ لَيِّن', en:'A noble word and gentle heart'} },
              { a:{ar:'احتِرامُ العالِم', en:'Respecting the scholar'}, b:{ar:'الجُلوسُ بِأَدَبٍ والإِنصات', en:'Sitting with etiquette and listening'} },
              { a:{ar:'احتِرامُ الكِبار', en:'Respecting elders'}, b:{ar:'إِفساحُ المَجلِسِ وبَدءُ السَّلام', en:'Making room and greeting first'} },
              { a:{ar:'احتِرامُ المُسلِمين', en:'Respecting Muslims'}, b:{ar:'حِفظُ العِرضِ والمال', en:'Protecting honour and wealth'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ وحَليمَة', en:'The Prophet ﷺ and Halima'} },
              { id:2, t:{ar:'ابنُ عُمَر والعالِم', en:'Ibn Umar and the scholar'} },
              { id:3, t:{ar:'الشّافِعيُّ وأُمُّه', en:'Al-Shafi\'i and his mother'} },
              { id:4, t:{ar:'أُوَيسٌ والأُمُّ المَريضَة', en:'Uways and the sick mother'} },
            ],
            right: [
              { id:2, t:{ar:'جَلَسَ على العَتَبَةِ بِأَدَب', en:'Sat on the threshold with etiquette'} },
              { id:4, t:{ar:'رَجَعَ مِن المَدينَةِ دونَ رُؤيَةِ النَّبيّ', en:'Returned from Madinah without seeing the Prophet'} },
              { id:1, t:{ar:'قامَ وبَسَطَ رِداءَهُ لَها', en:'Rose and spread his cloak for her'} },
              { id:3, t:{ar:'لَبِسَ أَجمَلَ ثِيابِهِ عِندَ زِيارَتِها', en:'Wore finest clothes to visit her'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن بَسَطَ رِداءَهُ لِأُمِّهِ المُرضِعَة؟', en:'Who spread his cloak for his foster-mother?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'أبو بَكر', en:'Abu Bakr'}, c:false },
                  { t:{ar:'الشّافِعيّ', en:'Al-Shafi\'i'}, c:false }
                ] },
              { q:{ar:'في أيِّ كِتابٍ ذُكِرَت أَخبارُ ابنِ عُمَرَ مَعَ العُلَماء؟', en:'In which book are Ibn Umar\'s accounts with scholars mentioned?'},
                opts:[
                  { t:{ar:'سِيَرُ أَعلامِ النُّبَلاء — ج٣', en:'Siyar A\'lam Al-Nubala — Vol. 3'}, c:true },
                  { t:{ar:'صَحيحُ البُخاري', en:'Sahih Al-Bukhari'}, c:false },
                  { t:{ar:'المُوَطَّأ', en:'Al-Muwatta'}, c:false }
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
              { t:{ar:'القِيامُ لِلكَبيرِ حينَ يَدخُل', en:'Rising for an elder when they enter'}, good:true },
              { t:{ar:'السُّخريَةُ مِن المُعَلِّم', en:'Mocking the teacher'}, good:false },
              { t:{ar:'خَفضُ الصَّوتِ أَمامَ الوالِدَين', en:'Lowering your voice before parents'}, good:true },
              { t:{ar:'مُقاطَعَةُ الكَبيرِ وهو يَتَكَلَّم', en:'Interrupting an elder while speaking'}, good:false },
              { t:{ar:'الاستِئذانُ قَبلَ الدُّخول', en:'Asking permission before entering'}, good:true },
              { t:{ar:'التَّأَفُّفُ مِن كَلامِ الوالِدَين', en:'Sighing at parents\' speech'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الإِنصاتُ لِلمُعَلِّمِ بِأَدَب', en:'Listening attentively to the teacher'}, good:true },
              { t:{ar:'رَفعُ الصَّوتِ فَوقَ صَوتِ الكَبير', en:'Raising your voice above an elder\'s'}, good:false },
              { t:{ar:'إِفساحُ المَجلِسِ لِلضَّيف', en:'Making room for the guest'}, good:true },
              { t:{ar:'الاستِهزاءُ بِكَلامِ العُلَماء', en:'Ridiculing scholars\' words'}, good:false },
              { t:{ar:'الدُّعاءُ لِلوالِدَين كُلَّ يَوم', en:'Praying for parents every day'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تَقبيلُ يَدِ الوالِدِ أو الجَدّ', en:'Kissing the hand of parent or grandparent'}, good:true },
              { t:{ar:'السُّكوتُ أَثناءَ حَديثِ الكَبير', en:'Staying silent while an elder speaks'}, good:true },
              { t:{ar:'النَّظرُ بِاستِهزاءٍ إلى الكِبار', en:'Looking mockingly at elders'}, good:false },
              { t:{ar:'مَدحُ الآخَرينَ بِصِدق', en:'Genuinely praising others'}, good:true },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          /* Emoji cipher — key: each emoji maps to an Arabic letter or English letter
             AR key: 🌹=ا  🌿=ح  🤲=ت  🌙=ر  📚=م
             Puzzle 1: 🌹🌿🤲🌙🌹🌙 = احترار  ← wrong, re-verify
             Let's map carefully:
             🌹=ا 🌿=ح 🤲=ت 🌙=ر 📚=م 🤝=ا 🏫=و ⭐=ل 🎓=د
             احترام : ا-ح-ت-ر-ا-م = 🌹 🌿 🤲 🌙 🌹 📚
             توقير  : ت-و-ق-ي-ر  — need و,ق,ي; add 🕌=و 💎=ق 🌸=ي
             أدب    : ا-د-ب — need د,ب; add ⭐=د 🗝️=ب

             EN key: 🌹=r  🌿=e  🤲=s  🌙=p  📚=c  🤝=t
             respect: r-e-s-p-e-c-t = 🌹🌿🤲🌙🌿📚🤝
             honour: h-o-n-o-u-r — need h,o,n,u; add 🏡=h 🌳=o 🎯=n 💧=u
          */
          { kind:'cipher', points:30,
            key: { ar:{
              '🌹':'ا', '🌿':'ح', '🤲':'ت', '🌙':'ر', '📚':'م', '🕌':'و', '💎':'ق', '🌸':'ي', '⭐':'د', '🗝️':'ب'
            }, en:{
              '🌹':'r', '🌿':'e', '🤲':'s', '🌙':'p', '📚':'c', '🤝':'t', '🏡':'h', '🌳':'o', '🎯':'n', '💧':'u'
            } },
            puzzles: [
              { symbols:{ar:'🌹🌿🤲🌙🌹📚', en:'🌹🌿🤲🌙🌿📚🤝'}, answer:{ar:'احترام', en:'respect'} },
              { symbols:{ar:'🌹⭐🗝️', en:'🏡🌳🎯🌳🌹'}, answer:{ar:'ادب', en:'honor'} },
              { symbols:{ar:'🌿🤲🌙', en:'🤲🌿🌹🌳🌿'}, answer:{ar:'حتر', en:'serve'} },
            ]
          },
          /* Number cipher
             AR: ا=1 ح=2 ت=3 ر=4 ا=1 م=5
             احترام: 1-2-3-4-1-5
             أدب: ا=1 د=6 ب=7 → 1-6-7
             توقير: ت=3 و=8 ق=9 ي=10 ر=4 → 3-8-9-10-4

             EN: r=1 e=2 s=3 p=4 c=5 t=6 h=7 o=8 n=9 u=10
             respect: 1-2-3-4-2-5-6
             honour:  7-8-9-8-10-1
             trust:   t=6 r=1 u=10 s=3 t=6 → 6-1-10-3-6
          */
          { kind:'cipher', points:30,
            key: { ar:{
              'ا':'1','ح':'2','ت':'3','ر':'4','م':'5','د':'6','ب':'7','و':'8','ق':'9','ي':'10'
            }, en:{
              'r':'1','e':'2','s':'3','p':'4','c':'5','t':'6','h':'7','o':'8','n':'9','u':'10'
            } },
            puzzles: [
              { symbols:{ar:'1-2-3-4-1-5', en:'1-2-3-4-2-5-6'}, answer:{ar:'احترام', en:'respect'} },
              { symbols:{ar:'1-6-7', en:'7-8-9-8-10-1'}, answer:{ar:'ادب', en:'honour'} },
              { symbols:{ar:'3-8-9-10-4', en:'6-1-10-3-6'}, answer:{ar:'توقير', en:'trust'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما أَساسُ الاحتِرامِ الحَقيقيّ؟', en:'What is the foundation of true respect?'},
                opts:[
                  { t:{ar:'مَحَبَّةُ اللهِ والتَّقَرُّبُ إِليه', en:'Love of Allah and drawing near to Him'}, c:true },
                  { t:{ar:'الخَوفُ مِن العِقاب', en:'Fear of punishment'}, c:false },
                  { t:{ar:'الطَّمَعُ في المَدح', en:'Greed for praise'}, c:false }
                ] },
              { q:{ar:'مَتى يَكونُ الاحتِرامُ مَقبولاً عِندَ الله؟', en:'When is respect accepted by Allah?'},
                opts:[
                  { t:{ar:'حينَ يَكونُ خالِصاً مِن القَلب', en:'When it is sincere from the heart'}, c:true },
                  { t:{ar:'حينَ يَكونُ أَمامَ النّاس', en:'When it is before people'}, c:false },
                  { t:{ar:'حينَ تَنتَظِرُ مُقابِلاً', en:'When you expect something in return'}, c:false }
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
              { q:{ar:'جَدُّكَ يَدخُلُ الغُرفَةَ وأَنتَ مُنشَغِلٌ بِالتِّلفاز. ماذا تَفعَل؟', en:'Your grandfather enters the room while you\'re watching TV. What do you do?'},
                opts:[
                  { t:{ar:'أَتَجاهَلُهُ وأَكمِلُ المُشاهَدَة', en:'I ignore him and keep watching'}, c:false },
                  { t:{ar:'أَقومُ لَهُ وأُسَلِّمُ وأَعرِضُ عَليهِ الجُلوس', en:'I rise for him, greet him, and offer him a seat'}, c:true },
                  { t:{ar:'أُومِئُ بِيَدي فَقَط', en:'I just wave my hand'}, c:false },
                ] },
              { q:{ar:'أُمُّكَ تَتَكَلَّمُ وأَنتَ مُتَعَجِّلٌ. ماذا تَفعَل؟', en:'Your mother is speaking and you\'re in a hurry. What do you do?'},
                opts:[
                  { t:{ar:'أَقاطِعُها وأَخرُج', en:'I interrupt her and leave'}, c:false },
                  { t:{ar:'أَستَمِعُ بِاهتِمامٍ وأَطلُبُ الإِذنَ بِأَدَب', en:'I listen attentively and politely ask permission'}, c:true },
                  { t:{ar:'أَتَظاهَرُ بِالسَّماع', en:'I pretend to listen'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مُعَلِّمُكَ دَخَلَ الصَّفَّ. ماذا يَنبَغي أن يَحدُث؟', en:'Your teacher entered the classroom. What should happen?'},
                opts:[
                  { t:{ar:'نَستَمِرُّ في حَديثِنا', en:'We continue our conversation'}, c:false },
                  { t:{ar:'نَقومُ له احتِراماً وتَعظيماً', en:'We rise for him out of respect and honour'}, c:true },
                  { t:{ar:'نُتابِعُ العَبَث', en:'We continue messing around'}, c:false },
                ] },
              { q:{ar:'صَديقُكَ يَسخَرُ مِن شَيخٍ مَشى بِبُطء. ماذا تَقول؟', en:'Your friend mocks an elderly man walking slowly. What do you say?'},
                opts:[
                  { t:{ar:'أَضحَكُ مَعَه', en:'I laugh with him'}, c:false },
                  { t:{ar:'أُنَبِّهُهُ: الشَّيخُ يَستَحِقُّ الاحتِرام', en:'I remind him: the elder deserves respect'}, c:true },
                  { t:{ar:'أَتَجاهَل الأَمر', en:'I ignore it'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'في الحافِلَةِ لا تَوجَدُ مَقاعِد وجاءَت امرَأَةٌ كَبيرَة. ماذا تَفعَل؟', en:'On the bus there are no seats and an elderly woman arrives. What do you do?'},
                opts:[
                  { t:{ar:'أَتَظاهَرُ بِالنَّوم', en:'I pretend to sleep'}, c:false },
                  { t:{ar:'أَقومُ وأُعطيها مَقعَدي', en:'I get up and give her my seat'}, c:true },
                  { t:{ar:'أَنتَظِرُ أن يَقومَ غَيري', en:'I wait for someone else to get up'}, c:false },
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
    { icon:'🌹', color:'#27AE60', title:{ar:'وِسامُ الوَلَدِ البارّ',         en:'Badge of the Dutiful Child'} },
    { icon:'📚', color:'#1ABC9C', title:{ar:'وِسامُ طالِبِ الأَدَب',          en:'Badge of the Seeker of Manners'} },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ الاحتِرامِ الذَّهَبيَّة', en:'Golden Star of Respect'} },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ الكَرامَة',                en:'Shield of Dignity'} },
    { icon:'📜', color:'#E67E22', title:{ar:'شَهادَةُ التَّوقير',              en:'Certificate of Veneration'} },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ القُلوب',                en:'Key to Hearts'} },
  ],

  /* ───── HOUSE ICON ───── */
  icon: '🌹',

  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الاحتِرامَ كُلَّ يَوم؟', en:'How do you live respect every day?' },
  formulaEq: { ar:'أَدَب + تَواضُع + وَفاء = احتِرامٌ حَقيقيّ 🏆', en:'Manners + Humility + Loyalty = True Respect 🏆' },
  magicMix: [
    { icon:'🌹', title:{ar:'قُم لِلكَبيرِ حينَ يَدخُل', en:'Rise for the elder when they enter'},
      body:{ar:'كُلَّما دَخَلَ جَدُّكَ أو مُعَلِّمُكَ — قُم واقِفاً وسَلِّم عليه أَوَّلاً.',en:'Whenever your grandfather or teacher enters — rise and greet them first.'} },
    { icon:'🤐', title:{ar:'لا تُقاطِع مَن يَتَكَلَّم', en:'Never interrupt someone speaking'},
      body:{ar:'حينَ يَتَكَلَّمُ والِدُكَ أو مُعَلِّمُكَ اصبِر حَتّى يَنتَهي ثُمَّ تَكَلَّم.',en:'When your parent or teacher speaks, wait patiently until they finish, then speak.'} },
    { icon:'😊', title:{ar:'ابتَسِم في وَجهِ مَن تَلقى', en:'Smile at everyone you meet'},
      body:{ar:'الابتِسامَةُ صَدَقَة — وهي أَسهَلُ طَريقٍ لِإِظهارِ الاحتِرامِ وكَسبِ القُلوب.',en:'A smile is charity — and the easiest way to show respect and win hearts.'} },
    { icon:'🤲', title:{ar:'اطلُب الإِذنَ قَبلَ الدُّخول', en:'Ask permission before entering'},
      body:{ar:'قَبلَ أن تَدخُلَ غُرفَةَ والِدَيكَ أو غُرفَةَ أَحَد — اطرُق وانتَظِر.',en:'Before entering your parents\' room or anyone else\'s — knock and wait.'} },
    { icon:'👂', title:{ar:'اسمَع باهتِمامٍ حينَ يُحَدِّثُكَ الكَبير', en:'Listen attentively when an elder speaks to you'},
      body:{ar:'ضَع هاتِفَكَ جانِباً وأَقبِل بِوَجهِكَ وقَلبِكَ عَليه — هذا هو الاحتِرامُ الحَقيقيّ.',en:'Set your phone aside, face them with your eyes and heart — this is true respect.'} },
    { icon:'💝', title:{ar:'ادعُ لِوالِدَيكَ وكِبارِكَ كُلَّ يَوم', en:'Pray for your parents and elders every day'},
      body:{ar:'قُل: «رَبِّ ارحَمهُما كَما رَبَّياني صَغيراً» — وادعُ لِكُلِّ مَن أَحسَنَ إِلَيكَ بِخَير.',en:'Say: "My Lord, have mercy on them both, as they raised me when I was small" — and pray good for everyone who showed you kindness.'} },
    { icon:'🤝', title:{ar:'احتَرِم مَن يَختَلِفُ مَعَكَ', en:'Respect those who differ from you'},
      body:{ar:'حَتّى لَو اختَلَفتَ مَعَ أَحَدٍ في رَأيٍ — لا تَسخَر مِنهُ وتَكَلَّم مَعَهُ بِأَدَبٍ وإِنصاف.',en:'Even if you disagree with someone\'s opinion — do not mock them; speak with courtesy and fairness.'} },
    { icon:'📖', title:{ar:'اقرَأ سِيَرَ العُلَماءِ المُحتَرِمين', en:'Read biographies of respectful scholars'},
      body:{ar:'تَعَلَّم مِن قِصَصِ الشّافِعيِّ وابنِ عُمَر وأُوَيسٍ كَيفَ جَعَلوا الاحتِرامَ طَريقَةَ حَياتِهِم.',en:'Learn from the stories of Al-Shafi\'i, Ibn Umar, and Uways how they made respect their way of life.'} },
  ],

  /* ───── CERTIFICATE ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الاحتِرام والتَّوقير', en:'Awarded to those who completed the House of Respect and Veneration' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>الاحتِرامَ القَلبيَّ والعَمَليَّ</b> — اقتِداءً بِالنَّبيِّ ﷺ الَّذي بَسَطَ رِداءَهُ لِأُمِّهِ المُرضِعَة، وعَبدِاللهِ بنِ عُمَرَ الَّذي جَلَسَ على العَتَبَةِ تَوقيراً لِلعِلمِ، والإمامِ الشّافِعيِّ الَّذي لَبِسَ أَجمَلَ ثِيابِهِ لِزِيارَةِ أُمِّه، وأُوَيسٍ القَرَنيِّ الَّذي اختارَ رِضا أُمِّهِ على رُؤيَةِ النَّبيِّ ﷺ — رضي الله عنهم أجمعين.',
                 en:'For mastering <b>respect of the heart and in practice</b> — following the Prophet ﷺ who spread his cloak for his foster-mother, Abdullah ibn Umar who sat on the threshold out of veneration for knowledge, Imam Al-Shafi\'i who wore his finest clothes to visit his mother, and Uways Al-Qarani who chose his mother\'s pleasure over seeing the Prophet ﷺ — may Allah be pleased with them all.' },
  },

};
