// data/chapters/ibrahim.js — Era I · Ibrahim عليه السلام  (الأصنام والنار)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibrahim = {
  id: 'ibrahim', era: 'prophets', icon: 'fire',
  name: { ar: 'إبراهيمُ عليه السلام', en: 'Ibrahim (Abraham)' },
  tag:  { ar: 'خليلُ اللهِ وأبو الأنبياء', en: 'The friend of Allah, father of prophets' },
  accent: '#E8743B', accent2: '#F2934F',
  greeting: { ar: 'أهلاً يا بطل! إبراهيمُ عليه السلام استخدمَ عقلَه الصغيرَ ليعرفَ ربَّه، ووثِقَ باللهِ حتى صارتِ النارُ عليه برداً وسلاماً. تعالَ نتعلّمُ كيفَ نفكّرُ ونتوكّل.', en: 'Hello, hero! Ibrahim used his young mind to find his Lord, and trusted Allah so much that fire became cool and safe for him. Come, let\'s learn to think and to trust.' },

  knowledge: {
    didYouKnow: { ar: 'سمّى اللهُ إبراهيمَ «خليلَ الله» — أي حبيبَه المقرّب جدّاً.', en: 'Allah called Ibrahim "the friend of Allah" — His very close beloved.' },
    who: {
      ar: 'وُلِدَ إبراهيمُ عليه السلام بينَ قومٍ يعبدونَ الأصنام، حتى والدُه كان يصنعها. لكنّ إبراهيمَ <b>فكّرَ بعقلِه</b>: كيفَ يكونُ إلهاً ما لا يسمعُ ولا يرى؟ فاهتدى إلى اللهِ خالقِ كلِّ شيء. كسرَ الأصنام، فألقاه قومُه في نارٍ عظيمة، فجعلها اللهُ <b>برداً وسلاماً</b>.',
      en: 'Ibrahim was born among a people who worshipped idols — even his father made them. But Ibrahim <b>thought with his mind</b>: how can something that cannot hear or see be a god? So he found Allah, Creator of everything. He broke the idols, so his people threw him into a huge fire — and Allah made it <b>cool and safe</b>.',
    },
    facts: [
      { ar: 'وُلِدَ بينَ عبّادِ الأصنام، وأبوه يصنعها.', en: 'He was born among idol-worshippers; his father made them.' },
      { ar: 'استخدمَ عقلَه: النجمُ والقمرُ والشمسُ تغيبُ فليستْ آلهة.', en: 'He used reason: star, moon and sun all set, so they are not gods.' },
      { ar: 'كسرَ الأصنامَ بالفأسِ ليُريهم أنّها لا تنفعُ ولا تضرّ.', en: 'He broke the idols with an axe to show they cannot help or harm.' },
      { ar: 'ألقوه في النار، فقال اللهُ: كوني برداً وسلاماً.', en: 'They threw him in fire; Allah said: Be cool and safe.' },
    ],
    timeline: [
      { when:{ar:'النشأة',en:'Childhood'}, what:{ar:'وُلِدَ بينَ قومٍ يعبدونَ الأصنام.',en:'He was born among idol-worshippers.'} },
      { when:{ar:'التفكير',en:'Reasoning'}, what:{ar:'تأمّلَ النجومَ والقمرَ والشمسَ فاهتدى لله.',en:'He reflected on the stars, moon and sun and found Allah.'} },
      { when:{ar:'الأصنام',en:'The Idols'}, what:{ar:'كسرَ الأصنامَ وتحدّى قومَه بالحُجّة.',en:'He broke the idols and challenged his people with proof.'} },
      { when:{ar:'النار',en:'The Fire'}, what:{ar:'ألقوه في نارٍ عظيمة، فتوكّلَ على الله.',en:'They cast him into a great fire; he trusted in Allah.'} },
      { when:{ar:'النجاة',en:'Rescue'}, what:{ar:'جعلها اللهُ برداً وسلاماً، فخرجَ سالماً.',en:'Allah made it cool and safe, and he came out unharmed.'} },
    ],
    ayah: { ar: '﴿ قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ ﴾', ref:{ ar:'الأنبياء ٦٩', en:'Al-Anbiya 69' } },
  },

  story: [
    { title:{ ar:'طِفلٌ يَبحثُ عن ربِّه', en:'A child seeking his Lord' }, pages:[
      { scene:'idols', text:{ ar:'عاشَ إِبْراهيمُ بَيْنَ قَوْمٍ يَعْبُدونَ <b>أَصْناماً</b> مِنْ حَجَرٍ وخَشَب، حَتّى والِدُهُ آزَرُ كانَ يَصْنَعُها بِيَدِهِ ويَبيعُها. تَعَجَّبَ إِبْراهيمُ الصَّغير: كَيْفَ يَعْبُدونَ تَماثيلَ لا تَسْمَعُ ولا تَرى ولا تَأْكُلُ ولا تَدْفَعُ عَنْ نَفْسِها؟!',
        en:'Ibrahim lived among a people who worshipped <b>idols</b> of stone and wood — even his father Azar made them with his hands and sold them. Young Ibrahim wondered: how can they worship statues that cannot hear, see, eat, or even defend themselves?!' } },
      { scene:'cosmos', text:{ ar:'نَظَرَ إِبْراهيمُ إلى السَّماءِ يَتَفَكَّر. رَأى نَجْماً جَميلاً ثُمَّ غاب، ثُمَّ القَمَرَ مُنيراً ثُمَّ غاب، ثُمَّ الشَّمْسَ الكَبيرَةَ ثُمَّ غابَتْ. فقالَ: <b>لا أُحِبُّ الآفِلين</b>! رَبّي هُوَ الَّذي خَلَقَ هذا كُلَّهُ ولا يَغيبُ أَبَداً، إِلَيْهِ وَحْدَهُ أَتَوَجَّه.',
        en:'Ibrahim looked at the sky, reflecting. He saw a beautiful star, then it set; the shining moon, then it set; the great sun, then it set. He said: <b>I do not love those that disappear!</b> My Lord is the One who created all this and never disappears — to Him alone I turn.' },
        choice:{ q:{ar:'كَيْفَ عَرَفَ إِبْراهيمُ رَبَّهُ الحَقيقي؟',en:'How did Ibrahim find his true Lord?'},
          opts:[
            { t:{ar:'فَكَّرَ بِعَقْلِهِ وقَلْبِهِ في خَلْقِ الله',en:'He thought with his mind and heart about Allah\'s creation'}, c:true, exp:{ar:'نعم! العَقْلُ نِعْمَةٌ نَتَفَكَّرُ بِها، فَكُلُّ شَيْءٍ جَميلٍ حَوْلَنا يَدُلُّ على اللهِ الخالِق.',en:'Yes! The mind is a gift for reflection — everything beautiful around us points to Allah the Creator.'} },
            { t:{ar:'سَأَلَ الأَصْنام',en:'He asked the idols'}, c:false, exp:{ar:'لا، فالأَصْنامُ لا تَتَكَلَّمُ ولا تَنْفَع.',en:'No — idols cannot speak or help.'} },
            { t:{ar:'قَلَّدَ قَوْمَهُ',en:'He copied his people'}, c:false, exp:{ar:'لا، بَلْ فَكَّرَ بِنَفْسِهِ ولَمْ يُقَلِّدْهُمْ في الباطِل.',en:'No — he thought for himself and did not copy them in falsehood.'} },
          ] } },
    ] },
    { title:{ ar:'مع أبيهِ آزَر', en:'With his father Azar' }, pages:[
      { scene:'idols', text:{ ar:'ذَهَبَ إِبْراهيمُ إلى أَبيهِ بِأَدَبٍ ولُطْفٍ وقال: «يا أَبَتِ، لِمَ تَعْبُدُ ما لا يَسْمَعُ ولا يُبْصِر؟ اتْبَعْني أَهْدِكَ طَريقاً مُستَقيماً». فَغَضِبَ الأَبُ وهَدَّدَهُ بِأَنْ يَطْرُدَه. فَقالَ إِبْراهيمُ بِكَلامٍ جَميل: «سَلامٌ عَلَيْك، سَأَسْتَغْفِرُ لَكَ رَبّي»، ولَمْ يُسِئْ إلى أَبيهِ أَبَداً.',
        en:'Ibrahim went to his father with politeness and gentleness and said: "O my father, why do you worship what cannot hear or see? Follow me, and I will guide you to a straight path." His father grew angry and threatened to drive him away. Ibrahim replied with beautiful words: "Peace be upon you; I will ask my Lord to forgive you," and he never mistreated his father.' } },
    ] },
    { title:{ ar:'تَحطيمُ الأصنام', en:'Smashing the idols' }, pages:[
      { scene:'axe', text:{ ar:'أَرادَ إِبْراهيمُ أَنْ يُعَلِّمَهُمْ دَرْساً. فَلَمّا خَرَجوا لِعيدِهِمْ، دَخَلَ على الأَصْنامِ وكَسَرَها <b>كُلَّها بِالفَأْس</b> وتَرَكَ الكَبير، وعَلَّقَ الفَأْسَ علَيْهِ. فَلَمّا رَجَعوا غَضِبوا وسَأَلوهُ، فقال: بَلْ فَعَلَهُ كَبيرُهُمْ، فاسْأَلوهُ إِنْ كانَ يَنْطِق! فَعَرَفوا في قُلوبِهِمْ أَنَّ أَصْنامَهُمْ لا تَتَكَلَّمُ ولا تَدْفَعُ عَنْ نَفْسِها.',
        en:'Ibrahim wanted to teach them a lesson. When they left for their festival, he went to the idols and broke <b>all of them with an axe</b>, leaving the biggest and hanging the axe on it. When they returned they were angry and questioned him; he said: Rather, the biggest one did it — ask him, if he can speak! In their hearts they knew their idols could neither speak nor defend themselves.' } },
    ] },
    { title:{ ar:'النارُ بَرداً وسلاماً', en:'The cool, safe fire' }, pages:[
      { scene:'fire', text:{ ar:'اشْتَدَّ غَضَبُ القَوْمِ وقَرَّروا الانْتِقام. جَمَعوا حَطَباً كَثيراً وأَوْقَدوا <b>ناراً هائِلَةً</b> عَظيمَة، ثُمَّ قَذَفوا إِبْراهيمَ فيها. لكِنَّهُ لَمْ يَخَفْ، بَلْ قالَ بِقَلْبٍ مُطْمَئِنّ: <b>حَسْبُنا اللهُ ونِعْمَ الوَكيل</b>.',
        en:'The people\'s anger grew and they decided to take revenge. They gathered much firewood and lit a <b>huge, raging fire</b>, then hurled Ibrahim into it. But he was not afraid; with a calm heart he said: <b>Allah is enough for us, and the best Guardian.</b>' } },
      { scene:'fire', text:{ ar:'فَأَمَرَ اللهُ النّار: <b>﴿ يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ ﴾</b>. فَصارَتِ النّارُ بَرْداً وسَلاماً، يَجْلِسُ فيها إِبْراهيمُ آمِناً، وخَرَجَ مِنْها سالِماً لَمْ يُصِبْهُ أَذىً! فَتَعَجَّبَ النّاسُ مِنْ قُدْرَةِ الله.',
        en:'So Allah commanded the fire: <b>"O fire, be cool and safe upon Ibrahim."</b> The fire became cool and peaceful; Ibrahim sat in it safely and came out unharmed, with no injury at all! The people marveled at the power of Allah.' } },
    ] },
    { title:{ ar:'الحِوارُ مع المَلِك', en:'Debating the king' }, pages:[
      { scene:'cosmos', text:{ ar:'وكانَ في البَلَدِ مَلِكٌ مُتَكَبِّرٌ ادَّعى أَنَّهُ إِله. فقالَ لَهُ إِبْراهيم: «رَبّي هُوَ الَّذي يُحْيي ويُميت». قالَ المَلِك: أَنا أُحْيي وأُميت! فقالَ إِبْراهيمُ بِذَكاء: «فَإِنَّ اللهَ يَأْتي بِالشَّمْسِ مِنَ المَشْرِق، <b>فَأْتِ بِها مِنَ المَغْرِب!</b>». فَبُهِتَ المَلِكُ وسَكَتَ ولَمْ يَجِدْ جَواباً.',
        en:'In the land was a proud king who claimed to be a god. Ibrahim said to him: "My Lord is the One who gives life and death." The king said: I give life and death! So Ibrahim cleverly replied: "Allah brings the sun from the east — <b>so bring it from the west!</b>" The king was stunned and fell silent, finding no answer.' } },
    ] },
    { title:{ ar:'كيفَ تُحيي المَوتى؟', en:'How do You give life?' }, pages:[
      { scene:'birds', text:{ ar:'أَحَبَّ إِبْراهيمُ أَنْ يَزدادَ قَلبُهُ طُمَأنينةً ويَقيناً، فقالَ: <b>«رَبِّ أَرِني كَيْفَ تُحْيِي المَوْتى»</b>. قالَ اللهُ: «أَوَلَمْ تُؤْمِنْ؟» قالَ: «بَلى، ولكِنْ لِيَطْمَئِنَّ قَلْبي». فأَمَرَهُ اللهُ أَنْ يَأْخُذَ أَرْبَعَةً مِنَ الطَّيْر.',
        en:'Ibrahim wished his heart to grow even calmer and more certain, so he said: <b>"My Lord, show me how You give life to the dead."</b> Allah said: "Do you not believe?" He said: "Yes, but so my heart may be at peace." So Allah commanded him to take four birds.' } },
      { scene:'birds', text:{ ar:'فأَخَذَ إِبْراهيمُ أَرْبَعَةً مِنَ الطَّيْرِ وضَمَّها إِلَيْهِ حَتّى أَلِفَتْه، ثُمَّ جَعَلَ على كُلِّ جَبَلٍ مِنْها جُزْءاً، ثُمَّ ناداها بِإِذْنِ الله — فإِذا هِيَ <b>تَطيرُ إِلَيْهِ حَيَّةً تَسْعى</b>! فازْدادَ قَلْبُ إِبْراهيمَ يَقيناً أَنَّ اللهَ على كُلِّ شَيْءٍ قَدير.',
        en:'Ibrahim took four birds and drew them close until they knew him; then he placed a part of them on each hill and called them by Allah\'s permission — and at once <b>they came flying back to him, alive</b>! Ibrahim\'s heart grew ever more certain that Allah is able to do all things.' } },
    ] },
    { title:{ ar:'هاجَرُ ووادي مكّة', en:'Hajar & the valley of Makkah' }, pages:[
      { scene:'dwellings', text:{ ar:'وَهَبَ اللهُ لإبراهيمَ ابْنَهُ <b>إسْماعيل</b> بعدَ طولِ دُعاء. ثُمَّ أمَرَهُ اللهُ أمْراً عَجيباً: أنْ يَأْخُذَ زَوْجَهُ <b>هاجَرَ</b> وطِفْلَها الرَّضيعَ إلى وادٍ بَعيدٍ في <b>مكّة</b>، لا زَرْعَ فيهِ ولا ماء، ويَتْرُكَهُما هُناك. أطاعَ إبراهيمُ رَبَّهُ واثِقاً. سَأَلَتْهُ هاجَر: «آللهُ أمَرَكَ بِهذا؟» قالَ: نَعَم. فقالَتْ بِقَلْبٍ مُطْمَئِنّ: <b>«إذَنْ لَنْ يُضَيِّعَنا الله»</b>.',
        en:'Allah granted Ibrahim his son <b>Ismail</b> after long prayer. Then Allah gave him a strange command: to take his wife <b>Hajar</b> and her nursing baby to a distant valley in <b>Makkah</b> — no crops, no water — and leave them there. Ibrahim obeyed his Lord, trusting. Hajar asked him: "Did Allah command you to do this?" He said: Yes. She said with a calm heart: <b>"Then Allah will never abandon us."</b>' },
        choice:{ q:{ar:'لِماذا أطاعَ إبراهيمُ أمْراً صَعْباً كهذا؟',en:'Why did Ibrahim obey such a hard command?'},
          opts:[
            { t:{ar:'لِأنّهُ وَثِقَ بِحِكْمَةِ اللهِ ورَحْمَتِه',en:"Because he trusted Allah's wisdom and mercy"}, c:true, exp:{ar:'نعم! المؤمنُ يُطيعُ اللهَ ولو لَمْ يَفْهَمِ الحِكْمَةَ كامِلَة، واثِقاً أنّ اللهَ لا يَأْمُرُ إلا بِخَير.',en:'Yes! A believer obeys Allah even without fully understanding the wisdom, trusting He commands only good.'} },
            { t:{ar:'لِأنّهُ لا يُحِبُّ أهْلَه',en:"Because he didn't love his family"}, c:false, exp:{ar:'لا، بل أحَبَّهُمْ كَثيراً، لكِنَّهُ وَثِقَ بِاللهِ الَّذي أمَرَ.',en:'No — he loved them dearly, but he trusted the Allah who commanded it.'} },
            { t:{ar:'لِيَرتاحَ مِنْهُم',en:'To get rid of them'}, c:false, exp:{ar:'لا، بل كانَ امْتِحانَ طاعَةٍ وتَوَكُّل، وأكْرَمَهُمُ اللهُ بِزَمزَمَ ومكّة.',en:'No — it was a test of obedience and trust, and Allah honoured them with Zamzam and Makkah.'} },
          ] } },
      { scene:'spring', text:{ ar:'لَمّا نَفِدَ الماءُ وعَطِشَ الطِّفْلُ وبَكى, لَمْ تَجْلِسْ هاجَرُ تَنْتَظِر، بل سَعَتْ بَيْنَ جَبَلَي <b>الصَّفا والمروة</b> سَبْعَ مَرّاتٍ تَبْحَثُ عن ماء. فأكْرَمَها اللهُ، وفَجَّرَ عِنْدَ قَدَمَيِ الطِّفْلِ <b>عَيْنَ زمزم</b>! فَشَرِبا وعاشا، وجاءَتْ قَبيلَةٌ تَسْكُنُ مَعَهُما، فَعَمَرَتْ مكّةُ بعدَ أنْ كانَتْ صَحْراء. ومِنْ سَعْيِها صارَ <b>السَّعيُ بينَ الصَّفا والمروةِ</b> رُكْناً في الحَجّ.',
        en:'When the water ran out and the baby cried with thirst, Hajar did not sit and wait — she ran between the hills of <b>Safa and Marwa</b> seven times searching for water. So Allah honoured her, and burst forth at the baby\'s feet the <b>spring of Zamzam</b>! They drank and lived, a tribe came to settle with them, and Makkah came alive after being a desert. From her running, the <b>walk between Safa and Marwa</b> became a rite of Hajj.' } },
    ]},
    { title:{ ar:'بِناءُ البيتِ الحَرام', en:'Building the Sacred House' }, pages:[
      { scene:'kaaba', text:{ ar:'كَبِرَ إسْماعيلُ، وعادَ إبراهيمُ إلى مكّة، فأمَرَهُ اللهُ أنْ يَبْنِيا <b>بيتَهُ الحَرام</b> — أوّلَ بيتٍ وُضِعَ لِلنّاسِ لِعِبادَةِ اللهِ وَحْدَه. فأخَذَ الأبُ والابْنُ يَرْفَعانِ <b>قَواعِدَ الكعبة</b>: إسْماعيلُ يُناوِلُ الحِجارَةَ، وإبراهيمُ يَبْني، وكِلاهُما يَدْعو بِخُشوع: <b>﴿ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ ﴾</b>.',
        en:'Ismail grew up, and Ibrahim returned to Makkah, where Allah commanded the two to build <b>His Sacred House</b> — the first house set up for people to worship Allah alone. Father and son raised the <b>foundations of the Kaaba</b>: Ismail handing the stones and Ibrahim building, both praying humbly: <b>"Our Lord, accept this from us; indeed You are the Hearing, the Knowing."</b>' } },
      { scene:'kaaba', text:{ ar:'لَمْ يَطْلُبا أجْراً ولا شُهْرَة، بل أرادا وَجْهَ اللهِ فَقَط. ودَعَوا لِذُرِّيَّتِهِما بِالإيمان: «رَبَّنا واجْعَلْنا مُسْلِمَيْنِ لَك». فصارَتِ الكعبةُ <b>قِبْلَةَ المُسْلِمينَ</b> في صَلاتِهِمْ، ومَقْصِدَهُمْ في الحَجِّ مِنْ كُلِّ مَكان. وما زالَ <b>مَقامُ إبراهيم</b> عِندَها إلى اليَوم.',
        en:'They sought no wage and no fame — only the face of Allah. And they prayed for their offspring to have faith: "Our Lord, make us submitters to You." So the Kaaba became the <b>qiblah of the Muslims</b> in their prayer, and their destination for Hajj from every place. And the <b>Station of Ibrahim</b> remains beside it to this day.' } },
      { scene:'ascend', text:{ ar:'ثُمَّ أمَرَ اللهُ إبراهيمَ أنْ يُنادِيَ النّاسَ لِلحَجّ: <b>﴿ وَأَذِّن فِي النَّاسِ بِالْحَجِّ ﴾</b>. قالَ إبراهيم: «يا رَبّ، كَيْفَ يَبْلُغُ صَوْتي النّاس؟» فقالَ اللهُ: «نادِ وعَلَيْنا البَلاغ». فنادى، فأسْمَعَ اللهُ نِداءَهُ كُلَّ مَنْ كَتَبَ اللهُ لَهُ الحَجَّ إلى يَوْمِ القِيامَة، فهُمْ يُجيبونَ: <b>«لَبَّيْكَ اللّهُمَّ لَبَّيْك»</b>. فما أعْظَمَ مَنْ يَبْني لِلهِ ويَدْعو إلى الخَيْر!',
        en:'Then Allah commanded Ibrahim to call people to Hajj: <b>"And proclaim to the people the Hajj."</b> Ibrahim said: "My Lord, how will my voice reach the people?" Allah said: "Call, and upon Us is the delivering." So he called, and Allah made his call reach everyone destined to perform Hajj until the Day of Judgement — and they answer: <b>"Here I am, O Allah, here I am!"</b> How great is the one who builds for Allah and calls to good!' } },
    ]},
    { title:{ ar:'خَليلُ الرَّحمن', en:'The friend of Allah' }, pages:[
      { scene:'ascend', text:{ ar:'ظَلَّ إِبْراهيمُ يَدْعو إلى اللهِ بِالحِكْمَةِ واللِّين، وهاجَرَ مِنْ بَلَدِهِ مِنْ أَجْلِ دينِهِ، يَنشُرُ التَّوحيدَ في الأَرْض. فَأَحَبَّهُ اللهُ حُبّاً عَظيماً وسَمّاهُ <b>خَليلَه</b>، وجَعَلَهُ إِماماً وقُدْوَةً لِلنّاسِ كُلِّهِمْ.',
        en:'Ibrahim kept calling to Allah with wisdom and gentleness, and migrated from his land for the sake of his faith, spreading pure monotheism across the earth. So Allah loved him dearly and named him <b>His friend</b>, and made him a leader and example for all people.' } },
      { scene:'kaaba', text:{ ar:'ووَهَبَهُ اللهُ ابْنَيْنِ صالِحَيْنِ: <b>إِسْماعيلَ وإِسْحاق</b>، وصارا نَبِيَّيْن. ومِنْ ذُرِّيَّتِهِ جاءَ كَثيرٌ مِنَ الأَنْبِياءِ ونَبِيُّنا مُحَمَّدٌ ﷺ. ولِعَظيمِ مَكانَتِهِ نَذْكُرُهُ في كُلِّ صَلاةٍ: «اللّهُمَّ صَلِّ على مُحَمَّدٍ وعلى آلِ إِبْراهيم».',
        en:'Allah granted him two righteous sons: <b>Ismail and Ishaq</b>, who both became prophets. From his descendants came many prophets and our Prophet Muhammad ﷺ. For his great rank, we remember him in every prayer: "O Allah, send blessings upon Muhammad and upon the family of Ibrahim."' } },
    ] },
  ],

  traits: [
    { ar:'إعمالُ العقل', en:'Using the mind' }, { ar:'التوحيد', en:'Pure faith' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'التوكّل', en:'Reliance on Allah' },
  ],
  lessons: [
    { icon:'🧠', color:'#E8743B', title:{ar:'فكِّرْ بعقلك',en:'Think with your mind'},
      body:{ar:'تأمّلَ إبراهيمُ النجومَ والقمرَ والشمسَ فاهتدى إلى اللهِ الخالق. العقلُ نعمةٌ نتفكّرُ بها لِنعرفَ ربَّنا.',en:'Ibrahim reflected on the stars, moon and sun and was guided to Allah the Creator. The mind is a gift for reflection so we may know our Lord.'},
      apply:{ar:'أنظرُ إلى خلقِ اللهِ وأُفكّرُ وأسألُ لأزدادَ إيماناً.',en:'I look at Allah\'s creation, think and ask, to grow in faith.'} },
    { icon:'🕯️', color:'#F2934F', title:{ar:'وحِّدِ الله',en:'Worship Allah alone'},
      body:{ar:'رفضَ إبراهيمُ عبادةَ الأصنامِ وكسرها، وعبدَ اللهَ وحدَه. لا نعبدُ ولا نُحبُّ شيئاً أكثرَ مِن الله.',en:'Ibrahim refused to worship idols and broke them, worshipping Allah alone. We worship and love nothing more than Allah.'},
      apply:{ar:'أجعلُ حُبَّ اللهِ وطاعتَه فوقَ كلِّ شيء.',en:'I place the love and obedience of Allah above everything.'} },
    { icon:'🦁', color:'#C0392B', title:{ar:'قِفْ مع الحقِّ ولو وحدك',en:'Stand for truth, even alone'},
      body:{ar:'وقفَ إبراهيمُ وحدَه أمامَ قومِه كلِّهم، ولم يَخفْ مِن كثرتِهم. الحقُّ حقٌّ ولو خالفك الجميع.',en:'Ibrahim stood alone against his entire people, unafraid of their numbers. The truth is the truth even if everyone disagrees with you.'},
      apply:{ar:'أفعلُ الصوابَ ولو خالفني كلُّ مَن حولي.',en:'I do what is right even if everyone around me does otherwise.'} },
    { icon:'🔥', color:'#E0A82A', title:{ar:'توكّلْ على الله',en:'Rely on Allah'},
      body:{ar:'حينَ أُلقيَ في النارِ قال: «حَسبُنا اللهُ ونِعمَ الوكيل»، فجعلها اللهُ برداً وسلاماً. مَن توكّلَ على اللهِ كفاه.',en:'When thrown into the fire he said: "Allah is enough for us, the best Guardian," so Allah made it cool and safe. Whoever relies on Allah, He is enough for them.'},
      apply:{ar:'عندَ الخوفِ أتوكّلُ على اللهِ وأقول «حَسبُنا الله».',en:'When afraid, I rely on Allah and say "Allah is enough for us."'} },
    { icon:'🙅', color:'#8E44AD', title:{ar:'لا تُقلِّدِ الباطل',en:'Don\'t copy what is wrong'},
      body:{ar:'لم يُقلِّدْ إبراهيمُ قومَه في عبادةِ الأصنام، بل فكّرَ بنفسِه واتّبعَ الحقَّ. لا نتبعُ الناسَ في الخطأ.',en:'Ibrahim did not copy his people in worshipping idols; he thought for himself and followed the truth. We do not follow people into error.'},
      apply:{ar:'لا أتبعُ أحداً في فعلٍ خاطئٍ لمجرّدِ أنّ الجميعَ يفعلونه.',en:'I won\'t follow anyone in a wrong act just because everyone does it.'} },
  ],

  memorize: {
    hadith:{ ar:'«حسبُنا اللهُ ونعمَ الوكيلُ، قالها إبراهيمُ حين أُلقيَ في النار»', en:"\"‘Allah is sufficient for us, and an excellent Guardian is He’ — Ibrahim said it when cast into the fire.\"", ref:{ ar:'[رواه البخاري ٤٥٦٣]', en:'[Sahih al-Bukhari 4563]' } },
    ayah:{ ar:'﴿ قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ ﴾', ref:{ ar:'الأنبياء ٦٩', en:'Al-Anbiya 69' } },
    dua: { ar:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', ref:{ ar:'آل عمران ١٧٣', en:'Aal ʿImran 173' } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُفكّرُ بعقلي في خلقِ اللهِ لأزدادَ إيماناً.', en:"I will reflect on Allah's creation to grow in faith." },
        { ar:'أتوكّلُ على اللهِ في وقتِ الخوفِ والشِّدّة.', en:'I will trust Allah in times of fear and hardship.' },
        { ar:'أقفُ مع الحقِّ ولو كنتُ وحدي.', en:'I will stand for the truth even if I am alone.' },
        { ar:'لا أعبدُ ولا أُحبُّ شيئاً أكثرَ مِن الله.', en:'I will not worship or love anything more than Allah.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'كيفَ عرفَ إبراهيمُ اللهَ؟',en:'How did Ibrahim come to know Allah?'},
          options:[{ar:'بالتفكيرِ في خلقِ الله',en:'By reflecting on Allah\'s creation'},{ar:'مِن الأصنام',en:'From the idols'},{ar:'بتقليدِ قومِه',en:'By copying his people'}], answer:0 },
        { q:{ar:'ماذا فعلَ إبراهيمُ بالأصنام؟',en:'What did Ibrahim do to the idols?'},
          options:[{ar:'كسرها بالفأس',en:'He broke them with an axe'},{ar:'باعها',en:'He sold them'},{ar:'عبدها',en:'He worshipped them'}], answer:0 },
        { q:{ar:'ماذا حدثَ عندما ألقوه في النار؟',en:'What happened when they threw him in the fire?'},
          options:[{ar:'صارتْ برداً وسلاماً',en:'It became cool and safe'},{ar:'احترق',en:'He was burned'},{ar:'انطفأتْ بالماء',en:'It was put out with water'}], answer:0 },
      ] },
    { type:'match', title:{ar:'وصِّلْ كلَّ شيءٍ بِمعناه',en:'Match each to its meaning'},
      pairs:[
        { a:{ar:'النار',en:'The fire'}, b:{ar:'برداً وسلاماً',en:'Cool and safe'} },
        { a:{ar:'الشمسُ والقمر',en:'Sun & moon'}, b:{ar:'تغيبُ فليستْ إلهاً',en:'They set, so not gods'} },
        { a:{ar:'الفأس',en:'The axe'}, b:{ar:'كسرُ الأصنام',en:'Breaking the idols'} },
        { a:{ar:'خليلُ الله',en:'Friend of Allah'}, b:{ar:'لقبُ إبراهيم',en:"Ibrahim's title"} },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'استخدمَ إبراهيمُ عقلَه ليعرفَ اللهَ الخالق.',en:'Ibrahim used his mind to find Allah the Creator.'}, t:true },
        { statement:{ar:'جعلَ اللهُ النارَ برداً وسلاماً على إبراهيم.',en:'Allah made the fire cool and safe for Ibrahim.'}, t:true },
        { statement:{ar:'عبدَ إبراهيمُ الأصنامَ مثلَ قومِه.',en:'Ibrahim worshipped the idols like his people.'}, t:false },
        { statement:{ar:'سمّى اللهُ إبراهيمَ خليلَه.',en:'Allah named Ibrahim His friend.'}, t:true },
      ] },
  ],

  treasures: {
    medal:{ ar:'وِسامُ اليقين', en:'Medal of Certainty' },
    stickers:[
      { icon:'fire',  color:'#E8743B', title:{ar:'نارٌ سلام',en:'Fire of Peace'} },
      { icon:'star',  color:'#F4D03F', title:{ar:'نجمُ التفكير',en:'Star of Reflection'} },
      { icon:'light', color:'#E0A82A', title:{ar:'نورُ الحق',en:'Light of Truth'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'خليلُ الرحمن',en:'Friend of the Most Merciful'} },
    ],
    moral:{ ar:'مَن توكّلَ على اللهِ كفاه؛ وإبراهيمُ علّمنا أن نُفكّرَ بعقولِنا ونثقَ بربِّنا.', en:'Whoever trusts Allah, He is enough for them; Ibrahim taught us to think with our minds and trust our Lord.' },
    reflect:[
      { ar:'انظرْ حولك: ما الشيءُ الجميلُ في خلقِ اللهِ الذي يجعلُك تُحبُّه وتشكرُه؟', en:'Look around you: what beautiful thing in Allah\'s creation makes you love and thank Him?' },
      { ar:'إبراهيمُ وثِقَ باللهِ في النار. ما الهمُّ الذي تستطيعُ أن تُسلّمَه للهِ قائلاً «حَسبُنا الله»؟', en:'Ibrahim trusted Allah in the fire. What worry can you hand to Allah saying "Allah is enough for us"?' },
    ],
  },
};
