/* ═══════════════════════════════════════════════════════════════
   QUDS & UMMAH CORNER — bilingual content
   Core idea: الأمة جسدٌ واحد، قضيّتها واحدة، وأقدسها المسجد الأقصى.
   Sources: إسلام ويب · قصة الإسلام · الأزهر الشريف · طريق الإسلام
   ─────────────────────────────────────────────────────────────── */

window.QUDS_DATA = {

  /* ─── HERO / CORE CONCEPT ─── */
  hero: {
    eyebrow: { ar: 'ركن القدس والأمة', en: 'Al-Quds & Ummah Corner' },
    title:   { ar: 'الأُمَّةُ جَسَدٌ واحِد', en: 'The Ummah Is One Body' },
    lead: {
      ar: 'المُسلِمونَ في كُلِّ مَكانٍ أُمَّةٌ واحِدَة، يَفرَحونَ مَعاً ويَحزَنونَ مَعاً. وإذا تَألَّمَ مُسلِمٌ في أيِّ بَلَد، تَألَّمَ لَهُ إخوانُهُ في كُلِّ مَكان. وأغلى قَضايا أُمَّتِنا وأقدَسُها: المَسجِدُ الأقصى.',
      en: 'Muslims everywhere are one single nation — they rejoice together and they grieve together. When one Muslim hurts anywhere on earth, their brothers and sisters everywhere feel it. And the dearest, holiest cause of our Ummah is Al-Aqsa Mosque.'
    },
    hadith: {
      ar: '«مَثَلُ المُؤمِنينَ في تَوادِّهِم وتَراحُمِهِم وتَعاطُفِهِم مَثَلُ الجَسَدِ، إذا اشتَكى مِنهُ عُضوٌ تَداعى لَهُ سائِرُ الجَسَدِ بِالسَّهَرِ والحُمّى»',
      en: '“The likeness of the believers in their mutual love, mercy and compassion is that of one body: when one limb aches, the whole body responds with sleeplessness and fever.”'
    },
    hadithRef: { ar: 'رواه البُخاري ومُسلم', en: 'Bukhari & Muslim' }
  },

  /* ─── THREE PARTS (sub-nav) ─── */
  parts: [
    { id:'causes', icon:'🌍', color:'#2E8B57',
      title:{ ar:'قَضايا الأُمَّة', en:'Causes of the Ummah' },
      sub:{ ar:'أُمَّةٌ واحِدَة، قَضِيَّةٌ واحِدَة', en:'One nation, one cause' } },
    { id:'unity', icon:'🤝', color:'#D4A017',
      title:{ ar:'قِصَصُ الوَحدَة', en:'Stories of Unity' },
      sub:{ ar:'مِن فَجرِ الإسلامِ إلى اليَوم', en:'From the dawn of Islam to today' } },
    { id:'aqsa', icon:'🕌', color:'#1A6EA8',
      title:{ ar:'قِصَصُ الأقصى', en:'Stories of Al-Aqsa' },
      sub:{ ar:'مِن بِنائِهِ إلى يَومِنا هذا', en:'From its building until now' } },
  ],

  /* ════════════════════ PART 1 — CAUSES OF THE UMMAH ════════════════════ */
  causes: {
    intro: {
      ar: 'أُمَّتُنا واحِدَة، وقَضاياها واحِدَة. كُلَّما رَأَيتَ مُسلِماً في حاجَة، فهو أخوكَ. هذِهِ بَعضُ قَضايا أُمَّتِنا التي نَحمِلُها في قُلوبِنا، وعَلى رَأسِها بَيتُ المَقدِس.',
      en: 'Our Ummah is one, and its causes are one. Whenever you see a Muslim in need, that is your brother or sister. These are some of the causes our Ummah carries in its heart — and at the very top of them: Jerusalem.'
    },
    /* Featured cause = Al-Aqsa */
    featured: {
      icon:'🕌',
      title:{ ar:'المَسجِدُ الأقصى — القَضِيَّةُ الأُولى', en:'Al-Aqsa — The First Cause' },
      body:{
        ar:'المَسجِدُ الأقصى أُولى القِبلَتَين، وثالِثُ الحَرَمَين الشَّريفَين، وأرضُ الإسراءِ والمِعراج. حُبُّهُ والدِّفاعُ عَن قُدسِيَّتِهِ أمانَةٌ في عُنُقِ كُلِّ مُسلِم، صَغيراً كانَ أو كَبيراً. نَتَعَلَّمُ عَنهُ، ونَدعو لَهُ، ونَحمِلُ قِصَّتَهُ في قُلوبِنا.',
        en:'Al-Aqsa is the first of the two qiblas, the third of the three holiest mosques, and the land of the Night Journey and Ascension. Loving it and defending its sanctity is a trust upon every Muslim — young or old. We learn about it, we pray for it, and we carry its story in our hearts.'
      },
      verse:{ ar:'﴿ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ ﴾', en:'“Glory to the One who took His servant by night from the Sacred Mosque to the Farthest Mosque, whose surroundings We have blessed.”' },
      verseRef:{ ar:'الإسراء: 1', en:'Al-Isra: 1' }
    },
    /* Other causes */
    list: [
      { icon:'🤲', color:'#C0392B',
        title:{ ar:'نُصرَةُ المَظلوم', en:'Helping the Oppressed' },
        body:{ ar:'حَيثُما كانَ مُسلِمٌ مَظلوم، فإنَّ الأُمَّةَ كُلَّها تَقِفُ مَعَهُ بِالدُّعاءِ والعَونِ ونَشرِ قَضِيَّتِهِ. قال ﷺ: «انصُر أخاكَ ظالِماً أو مَظلوماً».', en:'Wherever a Muslim is wronged, the whole Ummah stands with them — through prayer, support, and spreading their cause. The Prophet ﷺ said: “Help your brother, whether oppressor or oppressed.”' },
        src:{ ar:'إسلام ويب', en:'IslamWeb' } },
      { icon:'🍲', color:'#E67E22',
        title:{ ar:'إطعامُ الجائِع', en:'Feeding the Hungry' },
        body:{ ar:'مِن إخوانِنا مَن يَنامُ جائِعاً بِسَبَبِ الحُروبِ والفَقر. الأُمَّةُ الواحِدَةُ لا تَشبَعُ وأخوها جائِع. صَدَقَتُكَ الصَّغيرَةُ قَد تُطعِمُ طِفلاً مِثلَك.', en:'Some of our brothers and sisters sleep hungry because of war and poverty. One Ummah cannot be full while its brother is hungry. Your small charity may feed a child just like you.' },
        src:{ ar:'طريق الإسلام', en:'Tareeq Al-Islam' } },
      { icon:'📚', color:'#2980B9',
        title:{ ar:'العِلمُ ونَهضَةُ الأُمَّة', en:'Knowledge & Revival' },
        body:{ ar:'تَنهَضُ الأُمَّةُ بِالعِلمِ والإتقان. كُلُّ طِفلٍ يَتَعَلَّمُ ويُتقِنُ عَمَلَهُ هو لَبِنَةٌ في بِناءِ أُمَّتِهِ. «طَلَبُ العِلمِ فَريضَةٌ عَلى كُلِّ مُسلِم».', en:'The Ummah rises through knowledge and excellence. Every child who learns and masters their work is a brick in the building of their nation. “Seeking knowledge is an obligation upon every Muslim.”' },
        src:{ ar:'الأزهر الشريف', en:'Al-Azhar' } },
      { icon:'💧', color:'#1ABC9C',
        title:{ ar:'إغاثَةُ المَنكوبين', en:'Relief in Disasters' },
        body:{ ar:'عِندَ الزَّلازِلِ والفَيَضاناتِ والكَوارِث، تُسارِعُ الأُمَّةُ لِنَجدَةِ إخوانِها. يَدٌ واحِدَةٌ تُمسِكُ بِيَدِ المَنكوب، فلا يَشعُرُ أنَّهُ وَحدَهُ أبَداً.', en:'In earthquakes, floods, and disasters, the Ummah rushes to rescue its own. One hand reaches for the stricken, so they never feel alone.' },
        src:{ ar:'قصة الإسلام', en:'Qissat Al-Islam' } },
      { icon:'🤝', color:'#8E44AD',
        title:{ ar:'الوَحدَةُ ونَبذُ الفُرقَة', en:'Unity, Not Division' },
        body:{ ar:'قُوَّةُ الأُمَّةِ في اجتِماعِها. قال تَعالى: ﴿ واعتَصِموا بِحَبلِ اللَّهِ جَميعاً ولا تَفَرَّقوا ﴾. نَتَعاوَنُ ولا نَتَخاصَم، ونَحفَظُ مَحَبَّةَ بَعضِنا.', en:'The strength of the Ummah is in coming together. Allah says: “Hold firmly to the rope of Allah, all together, and do not be divided.” We cooperate, never quarrel, and guard our love for one another.' },
        src:{ ar:'إسلام ويب', en:'IslamWeb' } },
      { icon:'🌙', color:'#117A65',
        title:{ ar:'إخوانُنا حَولَ العالَم', en:'Our Family Worldwide' },
        body:{ ar:'في كُلِّ قارَّةٍ إخوانٌ لَنا يُصَلّونَ كَما نُصَلّي ويُحِبّونَ ما نُحِبّ. نَدعو لَهُم، ونَفرَحُ لِفَرَحِهِم، ونَشعُرُ أنَّنا أُسرَةٌ واحِدَةٌ كَبيرَة.', en:'On every continent we have brothers and sisters who pray as we pray and love what we love. We pray for them, rejoice in their joy, and feel we are one big family.' },
        src:{ ar:'طريق الإسلام', en:'Tareeq Al-Islam' } },
    ]
  },

  /* ════════════════════ PART 2 — UNITY STORIES ════════════════════ */
  unity: {
    intro: {
      ar: 'مُنذُ فَجرِ الإسلامِ والأُمَّةُ تَتَعَلَّمُ أن تَكونَ يَداً واحِدَة. هذِهِ مَحَطّاتٌ مُضيئَةٌ عَلَّمَتنا مَعنى الأُخُوَّةِ الحَقيقِيَّة.',
      en: 'From the dawn of Islam, the Ummah has been learning to be one hand. These shining moments taught us the true meaning of brotherhood.'
    },
    stories: [
      { era:{ ar:'السَّنَةُ 1 هـ', en:'Year 1 AH' }, icon:'🤝', color:'#27AE60',
        title:{ ar:'المُؤاخاةُ بَينَ المُهاجِرينَ والأنصار', en:'The Brotherhood of Migrants & Helpers' },
        teaser:{ ar:'الأنصارُ قاسَموا إخوانَهُم كُلَّ شَيءٍ يَملِكونَه!', en:'The Helpers shared everything they owned with their brothers!' },
        pages:[
          { ar:'لَمّا هاجَرَ المُسلِمونَ مِن مَكَّةَ إلى المَدينَة، تَرَكوا بُيوتَهُم وأموالَهُم كُلَّها خَلفَهُم، وجاؤوا بِلا شَيء. فماذا فَعَلَ أهلُ المَدينَة؟', en:'When the Muslims migrated from Makkah to Madinah, they left their homes and all their wealth behind, arriving with nothing. So what did the people of Madinah do?' },
          { ar:'آخى النَّبِيُّ ﷺ بَينَ كُلِّ مُهاجِرٍ وأخٍ مِنَ الأنصار. فأخَذَ كُلُّ أنصارِيٍّ أخاهُ المُهاجِرَ إلى بَيتِهِ وقال: <b>هذا بَيتي بَيتُك، ومالي مالُك!</b>', en:'The Prophet ﷺ paired every migrant with a brother from the Helpers. Each Helper took his migrant brother home and said: <b>“My house is your house, and my wealth is your wealth!”</b>' },
          { ar:'بَل عَرَضَ بَعضُهُم أن يُقاسِمَ أخاهُ نِصفَ بَيتِهِ ومالِهِ. لكِنَّ المُهاجِرينَ كانوا كِراماً، فقالوا: <b>دُلَّنا عَلى السّوقِ نَعمَلُ ونَكسِبُ بِأيدينا.</b> أُخُوَّةٌ تُعطي، وعِزَّةٌ لا تَأخُذُ إلّا ما تَستَحِق.', en:'Some even offered to split their home and wealth in half. But the migrants were noble and said: <b>“Just show us the marketplace so we can work and earn with our own hands.”</b> Brotherhood that gives, and dignity that takes only what it earns.' },
        ],
        moral:{ ar:'الأُخُوَّةُ الحَقيقِيَّةُ تُشارِكُ، والكَريمُ يُعطي ولا يُحِبُّ أن يَكونَ عالَةً عَلى أحَد.', en:'True brotherhood shares, and the noble give without wishing to be a burden on anyone.' },
        src:{ ar:'سيرة ابن هشام · إسلام ويب', en:'Ibn Hisham · IslamWeb' } },

      { era:{ ar:'السَّنَةُ 1 هـ', en:'Year 1 AH' }, icon:'📜', color:'#2980B9',
        title:{ ar:'صَحيفَةُ المَدينَة', en:'The Charter of Madinah' },
        teaser:{ ar:'أوَّلُ وَثيقَةٍ تَجعَلُ النّاسَ أُمَّةً واحِدَة.', en:'The first document making people one nation.' },
        pages:[
          { ar:'حينَ وَصَلَ النَّبِيُّ ﷺ إلى المَدينَة، كانَ فيها قَبائِلُ كَثيرَةٌ مُختَلِفَة. فأرادَ أن يَجعَلَهُم صَفّاً واحِداً يَعيشونَ بِسَلام.', en:'When the Prophet ﷺ reached Madinah, it held many different tribes. He wanted to make them one row, living in peace.' },
          { ar:'فكَتَبَ <b>صَحيفَةَ المَدينَة</b>: وَثيقَةً تُنَظِّمُ حَياةَ الجَميع، وتُقَرِّرُ أنَّ المُؤمِنينَ <b>أُمَّةٌ واحِدَةٌ مِن دونِ النّاس</b>، يَتَناصَرونَ ويَتَعاوَنونَ ويَحمونَ مَدينَتَهُم مَعاً.', en:'He wrote the <b>Charter of Madinah</b>: a document organizing everyone’s life, declaring the believers to be <b>one single nation</b> who support, cooperate, and protect their city together.' },
          { ar:'كانَت أوَّلَ دُستورٍ مَكتوبٍ في الإسلام، وعَلَّمَتِ الأُمَّةَ أنَّ الوَحدَةَ تُبنى بِالعَهدِ والكَلِمَةِ والوَفاء.', en:'It was the first written constitution in Islam, teaching the Ummah that unity is built on covenant, word, and faithfulness.' },
        ],
        moral:{ ar:'الوَحدَةُ تَحتاجُ إلى عَهدٍ نَلتَزِمُ بِهِ، وكَلِمَةٍ نَفي بِها.', en:'Unity needs a covenant we commit to and a word we keep.' },
        src:{ ar:'قصة الإسلام', en:'Qissat Al-Islam' } },

      { era:{ ar:'السَّنَةُ 5 هـ', en:'Year 5 AH' }, icon:'⛏️', color:'#E67E22',
        title:{ ar:'حَفرُ الخَندَقِ صَفّاً واحِداً', en:'Digging the Trench, Side by Side' },
        teaser:{ ar:'النَّبِيُّ ﷺ يَحفِرُ مَعَ أصحابِهِ ويَحمِلُ التُّراب.', en:'The Prophet ﷺ digs alongside his Companions, carrying the dirt.' },
        pages:[
          { ar:'تَجَمَّعَتِ الجُيوشُ الكَثيرَةُ لِتُهاجِمَ المَدينَة. فأشارَ سَلمانُ الفارِسِيُّ بِفِكرَةٍ جَديدَة: <b>نَحفِرُ خَندَقاً كَبيراً يَحمي المَدينَة!</b>', en:'Great armies gathered to attack Madinah. Salman the Persian suggested a new idea: <b>“Let us dig a huge trench to protect the city!”</b>' },
          { ar:'فنَزَلَ الجَميعُ يَحفِرونَ مَعاً في البَردِ والجوع. ولَم يَجلِسِ النَّبِيُّ ﷺ جانِباً، بَل حَفَرَ بِيَدِهِ وحَمَلَ التُّرابَ عَلى ظَهرِهِ <b>كَواحِدٍ مِنهُم</b>، حَتّى اغبَرَّ بَطنُهُ الشَّريف.', en:'Everyone went down to dig together in cold and hunger. The Prophet ﷺ did not sit aside — he dug with his own hands and carried the dirt on his back <b>like one of them</b>, until his noble body was covered in dust.' },
          { ar:'وكانوا يُنشِدونَ مَعاً ويَرفَعونَ هِمَّةَ بَعضِهِم. الزَّعيمُ الذي يَعمَلُ مَعَ قَومِهِ يَصنَعُ أُمَّةً لا تُهزَم.', en:'They chanted together and lifted one another’s spirits. A leader who works alongside his people builds a nation that cannot be defeated.' },
        ],
        moral:{ ar:'القائِدُ الحَقُّ يَعمَلُ مَعَ النّاسِ لا فَوقَهُم، والعَمَلُ الجَماعِيُّ يَصنَعُ المُعجِزات.', en:'A true leader works with people, not above them — and teamwork makes miracles.' },
        src:{ ar:'صحيح البخاري · إسلام ويب', en:'Sahih Al-Bukhari · IslamWeb' } },

      { era:{ ar:'السَّنَةُ 18 هـ', en:'Year 18 AH' }, icon:'🍞', color:'#D4AC0D',
        title:{ ar:'عامُ الرَّمادَة — عُمَرُ يَجوعُ مَعَ النّاس', en:'The Year of Ashes — Umar Goes Hungry With His People' },
        teaser:{ ar:'أميرُ المُؤمِنينَ يَرفُضُ أن يَشبَعَ والنّاسُ جِياع.', en:'The leader refuses to eat his fill while the people starve.' },
        pages:[
          { ar:'أصابَ النّاسَ قَحطٌ شَديدٌ وجوعٌ في زَمَنِ الخَليفَةِ عُمَرَ بنِ الخَطّاب، حَتّى صارَتِ الأرضُ سَوداءَ كَالرَّماد، فسُمِّيَ <b>عامَ الرَّمادَة</b>.', en:'A severe drought and famine struck during the time of Caliph Umar ibn al-Khattab, until the land turned black like ashes — so it was called <b>the Year of Ashes</b>.' },
          { ar:'فماذا فَعَلَ عُمَر؟ امتَنَعَ عَنِ السَّمنِ واللَّبَنِ، وأكَلَ الخُبزَ والزَّيتَ فَقَط، وقال: <b>كَيفَ يَهُمُّني أمرُ الرَّعِيَّةِ إن لَم يَمَسَّني ما مَسَّهُم؟</b> حَتّى تَغَيَّرَ لَونُ بَطنِهِ مِنَ الجوع.', en:'What did Umar do? He gave up butter and milk, eating only bread and oil, and said: <b>“How can I care about my people if I am not touched by what touches them?”</b> Until his stomach changed color from hunger.' },
          { ar:'وكَتَبَ إلى الأمصارِ يَطلُبُ الطَّعام، فجاءَتِ القَوافِلُ مِن مِصرَ والشّامِ تُغيثُ المَدينَة. أُمَّةٌ واحِدَةٌ يُنجِدُ بَعضُها بَعضاً.', en:'He wrote to the provinces asking for food, and caravans came from Egypt and Syria to rescue Madinah. One Ummah, where each part rescues the other.' },
        ],
        moral:{ ar:'القائِدُ يَشعُرُ بِجوعِ شَعبِهِ، والأُمَّةُ الواحِدَةُ يُغيثُ بَعضُها بَعضاً.', en:'A leader feels his people’s hunger, and one Ummah rescues its own.' },
        src:{ ar:'تاريخ الطبري · إسلام ويب', en:'Tarikh Al-Tabari · IslamWeb' } },

      { era:{ ar:'السَّنَةُ 583 هـ', en:'Year 583 AH' }, icon:'🛡️', color:'#1A6EA8',
        title:{ ar:'صَلاحُ الدّينِ يَجمَعُ الكَلِمَة', en:'Salahuddin Unites the Word' },
        teaser:{ ar:'وَحَّدَ القُلوبَ قَبلَ أن يُحَرِّرَ القُدس.', en:'He united hearts before he liberated Jerusalem.' },
        pages:[
          { ar:'كانَتِ القُدسُ أسيرَةً سِنينَ طَويلَة، والمُسلِمونَ مُتَفَرِّقونَ دُوَيلاتٍ صَغيرَةً مُتَخاصِمَة. فعَلِمَ صَلاحُ الدّينِ أنَّ التَّحريرَ يَبدَأُ مِنَ القُلوب.', en:'Jerusalem had been captive for long years, and the Muslims were scattered into small, quarreling states. Salahuddin knew that liberation begins in the hearts.' },
          { ar:'فجَمَعَ الكَلِمَةَ، ووَحَّدَ الصُّفوف، وذَكَّرَ النّاسَ أنَّهُم <b>أُمَّةٌ واحِدَة</b> لها قِبلَةٌ أولى تَنتَظِرُ التَّحرير. وبَعدَما اجتَمَعَتِ الأُمَّة، التَقى بِالأعداءِ في <b>مَعرَكَةِ حِطّين</b>.', en:'He united the word, joined the ranks, and reminded the people they were <b>one nation</b> with a first qibla awaiting liberation. Once the Ummah united, he met the enemy at the <b>Battle of Hittin</b>.' },
          { ar:'وبِفَضلِ اللَّهِ ثُمَّ بِالوَحدَة، عادَتِ القُدسُ إلى أهلِها، وارتَفَعَ الأذانُ في المَسجِدِ الأقصى بَعدَ غِياب. الوَحدَةُ هي مِفتاحُ النَّصر.', en:'By Allah’s grace and then through unity, Jerusalem returned to its people, and the call to prayer rose again in Al-Aqsa after its absence. Unity is the key to victory.' },
        ],
        moral:{ ar:'النَّصرُ يَبدَأُ مِنَ الوَحدَة؛ فاجمَعِ القُلوبَ تَفتَحِ الأبواب.', en:'Victory begins with unity; unite the hearts and the gates will open.' },
        src:{ ar:'قصة الإسلام', en:'Qissat Al-Islam' } },

      { era:{ ar:'اليَوم', en:'Today' }, icon:'🌟', color:'#117A65',
        title:{ ar:'كَيفَ نَكونُ أُمَّةً واحِدَةً اليَوم؟', en:'How Are We One Ummah Today?' },
        teaser:{ ar:'الوَحدَةُ تَبدَأُ مِنكَ أنتَ، الآن.', en:'Unity begins with you, right now.' },
        pages:[
          { ar:'لَستَ صَغيراً عَلى أن تَكونَ جُزءاً مِن أُمَّتِك! الوَحدَةُ لا تَحتاجُ جَيشاً، بَل تَحتاجُ قَلباً يُحِبُّ إخوانَهُ في كُلِّ مَكان.', en:'You are not too young to be part of your Ummah! Unity needs no army — it needs a heart that loves its brothers and sisters everywhere.' },
          { ar:'<b>تَدعو</b> لإخوانِكَ في صَلاتِك، <b>وتَتَصَدَّقُ</b> ولَو بِالقَليل، <b>وتَتَعَلَّمُ</b> عَن قَضايا أُمَّتِك، <b>وتَحفَظُ</b> أخاكَ بِكَلِمَةٍ طَيِّبَةٍ ولا تَخاصِمُه.', en:'You <b>pray</b> for your brothers in your prayer, you <b>give</b> even a little, you <b>learn</b> about your Ummah’s causes, and you <b>protect</b> your brother with a kind word and never quarrel with him.' },
          { ar:'كُلُّ طِفلٍ يَفعَلُ هذا هو لَبِنَةٌ في جِدارِ الأُمَّةِ المَرصوص. ﴿ كَأَنَّهُم بُنيانٌ مَرصوص ﴾.', en:'Every child who does this is a brick in the solid wall of the Ummah. “…as though they are a single structure firmly cemented.”' },
        ],
        moral:{ ar:'وَحدَةُ الأُمَّةِ تَبدَأُ بِدُعاءٍ صادِقٍ وقَلبٍ مُحِبٍّ وكَلِمَةٍ طَيِّبَة.', en:'The unity of the Ummah begins with a sincere prayer, a loving heart, and a kind word.' },
        src:{ ar:'الأزهر الشريف', en:'Al-Azhar' } },
    ]
  },

  /* ════════════════════ PART 3 — AL-AQSA STORIES ════════════════════ */
  aqsa: {
    intro: {
      ar: 'لِلمَسجِدِ الأقصى قِصَّةٌ طَويلَةٌ عَريقَة، تَبدَأُ مِن أوَّلِ الأرضِ وتَستَمِرُّ إلى يَومِنا هذا. تَعالَ نَعيشُها مَحَطَّةً مَحَطَّة.',
      en: 'Al-Aqsa has a long and ancient story, beginning from the earliest days of the earth and continuing to our day. Come, let us live it station by station.'
    },
    stations: [
      { era:{ ar:'بَدءُ التّاريخ', en:'The Beginning' }, icon:'🏛️', color:'#9B8A68',
        title:{ ar:'ثاني مَسجِدٍ في الأرض', en:'The Second Mosque on Earth' },
        teaser:{ ar:'بُنِيَ بَعدَ الكَعبَةِ بِأربَعينَ سَنَة.', en:'Built forty years after the Kaaba.' },
        pages:[
          { ar:'سَألَ أبو ذَرٍّ النَّبِيَّ ﷺ: <b>يا رَسولَ اللَّه، أيُّ مَسجِدٍ وُضِعَ في الأرضِ أوَّل؟</b> قال: «المَسجِدُ الحَرام». قال: ثُمَّ أيّ؟ قال: «المَسجِدُ الأقصى».', en:'Abu Dharr asked the Prophet ﷺ: <b>“O Messenger of Allah, which mosque was built on earth first?”</b> He said: “The Sacred Mosque.” He asked: “Then which?” He said: “Al-Aqsa Mosque.”' },
          { ar:'قال أبو ذَرٍّ: كَم بَينَهُما؟ قال ﷺ: <b>«أربَعونَ سَنَة»</b>. فالأقصى مَسجِدٌ قَديمٌ جِدّاً، عَرَفَهُ الأنبياءُ وصَلّوا فيهِ مُنذُ آلافِ السِّنين.', en:'Abu Dharr asked: “How long between them?” He ﷺ said: <b>“Forty years.”</b> So Al-Aqsa is a very ancient mosque, known to the prophets who prayed in it for thousands of years.' },
        ],
        verse:{ ar:'«المَسجِدُ الحَرامُ، ثُمَّ المَسجِدُ الأقصى، بَينَهُما أربَعونَ سَنَة»', en:'“The Sacred Mosque, then Al-Aqsa Mosque — forty years between them.”' },
        verseRef:{ ar:'متفق عليه', en:'Bukhari & Muslim' },
        src:{ ar:'صحيح البخاري · إسلام ويب', en:'Sahih Al-Bukhari · IslamWeb' } },

      { era:{ ar:'فَجرُ الإسلام', en:'Dawn of Islam' }, icon:'🧭', color:'#2E8B57',
        title:{ ar:'أُولى القِبلَتَين', en:'The First of the Two Qiblas' },
        teaser:{ ar:'صَلّى المُسلِمونَ نَحوَهُ قَبلَ الكَعبَة.', en:'Muslims prayed toward it before the Kaaba.' },
        pages:[
          { ar:'في بِدايَةِ الإسلام، كانَ المُسلِمونَ يَتَوَجَّهونَ في صَلاتِهِم نَحوَ المَسجِدِ الأقصى. لِذلِكَ نُسَمّيهِ <b>أُولى القِبلَتَين</b>.', en:'In the early days of Islam, Muslims faced Al-Aqsa in their prayers. That is why we call it <b>the first of the two qiblas</b>.' },
          { ar:'ظَلّوا يُصَلّونَ نَحوَهُ نَحوَ سِتَّةَ عَشَرَ شَهراً، ثُمَّ أمَرَ اللَّهُ بِالتَّوَجُّهِ إلى الكَعبَة. ومَعَ ذلِكَ بَقِيَ الأقصى غالِياً في قُلوبِ المُسلِمينَ إلى الأبَد.', en:'They prayed toward it for about sixteen months, then Allah commanded them to face the Kaaba. Yet Al-Aqsa remained forever precious in the hearts of Muslims.' },
        ],
        verse:{ ar:'﴿ قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ﴾', en:'“We see the turning of your face toward heaven; so We will surely turn you to a qibla that will please you.”' },
        verseRef:{ ar:'البقرة: 144', en:'Al-Baqarah: 144' },
        src:{ ar:'الأزهر الشريف', en:'Al-Azhar' } },

      { era:{ ar:'قَبلَ الهِجرَة', en:'Before the Hijrah' }, icon:'🌙', color:'#5C6BC0',
        title:{ ar:'رِحلَةُ الإسراءِ والمِعراج', en:'The Night Journey & Ascension' },
        teaser:{ ar:'النَّبِيُّ ﷺ يَؤُمُّ الأنبياءَ كُلَّهُم في الأقصى.', en:'The Prophet ﷺ leads all the prophets in prayer at Al-Aqsa.' },
        pages:[
          { ar:'في لَيلَةٍ عَجيبَة، أسرى اللَّهُ بِنَبِيِّهِ ﷺ مِنَ المَسجِدِ الحَرامِ في مَكَّةَ إلى المَسجِدِ الأقصى في القُدس، عَلى دابَّةٍ سَريعَةٍ اسمُها <b>البُراق</b>.', en:'On a wondrous night, Allah took His Prophet ﷺ from the Sacred Mosque in Makkah to Al-Aqsa in Jerusalem, upon a swift steed called <b>al-Buraq</b>.' },
          { ar:'وفي الأقصى حَدَثَ شَيءٌ عَظيم: اجتَمَعَ الأنبياءُ كُلُّهُم — آدَمُ ونوحٌ وإبراهيمُ وموسى وعيسى وغَيرُهُم — <b>وصَلّى بِهِمُ النَّبِيُّ ﷺ إماماً</b>.', en:'At Al-Aqsa something magnificent happened: all the prophets gathered — Adam, Nuh, Ibrahim, Musa, Isa, and others — <b>and the Prophet ﷺ led them all in prayer as imam</b>.' },
          { ar:'ثُمَّ عُرِجَ بِهِ مِنَ الأقصى إلى السَّماوات. فالأقصى هو <b>بَوّابَةُ السَّماءِ</b> ونُقطَةُ انطِلاقِ المِعراج. أرضٌ بارَكَها اللَّهُ وما حَولَها.', en:'Then he was raised from Al-Aqsa to the heavens. So Al-Aqsa is the <b>gateway to the sky</b> and the launching point of the Ascension. A land Allah blessed, and all around it.' },
        ],
        verse:{ ar:'﴿ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى ﴾', en:'“Glory to the One who took His servant by night from the Sacred Mosque to the Farthest Mosque.”' },
        verseRef:{ ar:'الإسراء: 1', en:'Al-Isra: 1' },
        src:{ ar:'قصة الإسلام', en:'Qissat Al-Islam' } },

      { era:{ ar:'السَّنَةُ 15 هـ', en:'Year 15 AH' }, icon:'🔑', color:'#D4A017',
        title:{ ar:'عُمَرُ يَفتَحُ القُدسَ بِالرَّحمَة', en:'Umar Opens Jerusalem with Mercy' },
        teaser:{ ar:'الخَليفَةُ يَمشي وخادِمُهُ يَركَب!', en:'The Caliph walks while his servant rides!' },
        pages:[
          { ar:'فَتَحَ المُسلِمونَ القُدسَ في زَمَنِ عُمَرَ بنِ الخَطّاب، فطَلَبَ أهلُها أن يَتَسَلَّمَ المَدينَةَ الخَليفَةُ بِنَفسِه. فجاءَ عُمَرُ مِنَ المَدينَةِ مُتَواضِعاً.', en:'The Muslims opened Jerusalem in the time of Umar ibn al-Khattab. Its people asked that the Caliph himself receive the city, so Umar came from Madinah in humility.' },
          { ar:'كانَ مَعَهُ خادِمٌ واحِدٌ وناقَةٌ واحِدَة، فكانا يَتَناوَبانِ الرُّكوب. وحينَ دَخَلَ القُدسَ كانَ <b>دَورُ الخادِمِ أن يَركَب، وعُمَرُ يَقودُ النّاقَةَ ماشِياً</b>! فتَعَجَّبَ النّاسُ مِن تَواضُعِ هذا الفاتِح.', en:'He had one servant and one camel, taking turns to ride. When he entered Jerusalem, it was <b>the servant’s turn to ride, while Umar led the camel on foot</b>! The people marveled at the humility of this conqueror.' },
          { ar:'وكَتَبَ لأهلِ القُدسِ <b>العُهدَةَ العُمَرِيَّة</b>: عَهداً يَحفَظُ أرواحَهُم وكَنائِسَهُم وأموالَهُم. فدَخَلَ الإسلامُ القُدسَ بِالأمانِ والعَدلِ لا بِالظُّلم.', en:'He wrote the people of Jerusalem <b>the Umari Covenant</b>: a pledge protecting their lives, churches, and property. Islam entered Jerusalem with safety and justice, not oppression.' },
        ],
        moral:{ ar:'الفاتِحُ الحَقُّ مُتَواضِعٌ عادِل، يَفتَحُ القُلوبَ قَبلَ المُدُن.', en:'A true conqueror is humble and just — he opens hearts before cities.' },
        src:{ ar:'تاريخ الطبري · إسلام ويب', en:'Tarikh Al-Tabari · IslamWeb' } },

      { era:{ ar:'السَّنَةُ 583 هـ', en:'Year 583 AH' }, icon:'🕌', color:'#1A6EA8',
        title:{ ar:'صَلاحُ الدّينِ يُحَرِّرُ الأقصى', en:'Salahuddin Liberates Al-Aqsa' },
        teaser:{ ar:'عادَ الأذانُ بَعدَ غِيابٍ طَويل.', en:'The call to prayer returned after a long silence.' },
        pages:[
          { ar:'بَقِيَتِ القُدسُ أسيرَةً نَحوَ ثَمانينَ سَنَة، لا يُرفَعُ فيها الأذان. حَزِنَتِ الأُمَّةُ كُلُّها، حَتّى قامَ بَطَلٌ اسمُهُ <b>صَلاحُ الدّينِ الأيّوبي</b>.', en:'Jerusalem remained captive for about eighty years, with no call to prayer raised in it. The whole Ummah grieved, until a hero arose named <b>Salahuddin al-Ayyubi</b>.' },
          { ar:'جَمَعَ صَلاحُ الدّينِ الأُمَّةَ، وجاهَدَ بِصَبرٍ وإيمان، حَتّى انتَصَرَ في <b>مَعرَكَةِ حِطّين</b>، ثُمَّ دَخَلَ القُدسَ مُكَبِّراً.', en:'Salahuddin united the Ummah and struggled with patience and faith, until he triumphed at the <b>Battle of Hittin</b>, then entered Jerusalem proclaiming Allah’s greatness.' },
          { ar:'فأُعيدَ تَطهيرُ المَسجِدِ الأقصى، وارتَفَعَ فيهِ الأذانُ مِن جَديد، وعادَتِ الصَّلاةُ في أُولى القِبلَتَين. فَرِحَتِ الأُمَّةُ كُلُّها فَرَحاً عَظيماً.', en:'Al-Aqsa was purified once more, the call to prayer rose again within it, and prayer returned to the first qibla. The whole Ummah rejoiced with great joy.' },
        ],
        moral:{ ar:'مَهما طالَ اللَّيل، فإنَّ الإيمانَ والوَحدَةَ والصَّبرَ تُعيدُ الفَجر.', en:'However long the night, faith, unity, and patience bring back the dawn.' },
        src:{ ar:'قصة الإسلام', en:'Qissat Al-Islam' } },

      { era:{ ar:'اليَوم', en:'Today' }, icon:'❤️', color:'#C0392B',
        title:{ ar:'الأقصى أمانَةٌ في أعناقِنا', en:'Al-Aqsa: A Trust on Our Shoulders' },
        teaser:{ ar:'ماذا أفعَلُ أنا لأجلِ الأقصى؟', en:'What can I do for Al-Aqsa?' },
        pages:[
          { ar:'ما زالَ المَسجِدُ الأقصى غالِياً عَلى قُلوبِ المُسلِمين، يَنتَظِرُ مِن أطفالِ الأُمَّةِ أن يَعرِفوهُ ويُحِبّوهُ ويَحمِلوا قِصَّتَهُ إلى العالَم.', en:'Al-Aqsa remains precious to the hearts of Muslims, awaiting the children of the Ummah to know it, love it, and carry its story to the world.' },
          { ar:'ماذا تَفعَلُ أنت؟ <b>تَتَعَلَّمُ</b> عَنهُ كَما فَعَلتَ الآن، <b>وتَدعو</b> لَهُ في سُجودِك، <b>وتُخبِرُ</b> أصدِقاءَكَ بِقِصَّتِهِ، <b>وتُصَلّي</b> وتَعمَلُ الخَيرَ لِتَكونَ مِن أهلِهِ الصّالِحين.', en:'What do you do? You <b>learn</b> about it as you just did, you <b>pray</b> for it in your prostration, you <b>tell</b> your friends its story, and you <b>pray and do good</b> to be among its righteous people.' },
          { ar:'يَكفي أن يَبقى الأقصى حَيّاً في قَلبِك. فالأرضُ التي يُحِبُّها أطفالُها لا تُنسى أبَداً.', en:'It is enough that Al-Aqsa stays alive in your heart. A land loved by its children is never forgotten.' },
        ],
        moral:{ ar:'حُبُّ الأقصى أمانَة؛ نَحفَظُهُ بِالعِلمِ والدُّعاءِ والعَمَلِ الصّالِح.', en:'Loving Al-Aqsa is a trust; we keep it with knowledge, prayer, and good deeds.' },
        src:{ ar:'طريق الإسلام', en:'Tareeq Al-Islam' } },
    ]
  },

  /* ─── CLOSING PLEDGE + DUA ─── */
  pledge: {
    title:{ ar:'مِيثاقُ ابنِ الأُمَّة', en:'The Pledge of an Ummah Child' },
    lines:[
      { ar:'أُحِبُّ إخواني المُسلِمينَ في كُلِّ مَكان، وأشعُرُ بِفَرَحِهِم وحُزنِهِم.', en:'I love my Muslim brothers and sisters everywhere, and I feel their joy and grief.' },
      { ar:'أحمِلُ المَسجِدَ الأقصى في قَلبي، وأتَعَلَّمُ قِصَّتَهُ وأدعو لَهُ.', en:'I carry Al-Aqsa in my heart, learn its story, and pray for it.' },
      { ar:'أكونُ سَبَبَ وَحدَةٍ لا فُرقَة، وأقولُ الكَلِمَةَ الطَّيِّبَةَ لإخواني.', en:'I am a cause of unity, not division, and I speak a kind word to my brothers.' },
      { ar:'أتَصَدَّقُ ولَو بِالقَليل، وأُحسِنُ عَمَلي لأكونَ لَبِنَةً في بِناءِ أُمَّتي.', en:'I give even a little, and I do my work well to be a brick in my Ummah.' },
    ],
    dua:{ ar:'اللَّهُمَّ احفَظِ المَسجِدَ الأقصى، واجمَع قُلوبَ المُسلِمينَ عَلى الخَير، واجعَلنا أُمَّةً واحِدَةً كَالبُنيانِ المَرصوص. آمين.', en:'O Allah, protect Al-Aqsa, unite the hearts of the Muslims upon goodness, and make us one Ummah like a firmly cemented structure. Ameen.' }
  },

  /* ─── UI STRINGS ─── */
  ui: {
    back:{ ar:'↩️ العودة للمدينة', en:'↩️ Back to City' },
    mapTitle:{ ar:'🗺️ خريطة المدينة', en:'🗺️ City Map' },
    home:{ ar:'الصفحة الرئيسية', en:'Main Page' },
    read:{ ar:'اقرأ القِصَّة', en:'Read the Story' },
    learn:{ ar:'اكتَشِف', en:'Discover' },
    next:{ ar:'التّالي ←', en:'Next →' },
    prev:{ ar:'→ السّابق', en:'← Back' },
    finish:{ ar:'تَمَّت ✓', en:'Done ✓' },
    moral:{ ar:'الدَّرسُ المُستَفاد', en:'The Lesson' },
    source:{ ar:'المَصدَر', en:'Source' },
    page:{ ar:'صفحة', en:'Page' },
    scrollHint:{ ar:'اختَر جُزءاً لِتَبدَأَ رِحلَتَك', en:'Choose a part to begin your journey' },
  }
};
