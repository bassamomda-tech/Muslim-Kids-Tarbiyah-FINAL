/* ════════════════════════════════════════════════════════════════
   رِحلةُ جُنودِ النّور — الإيمانُ بِالمَلائِكة
   Journey of the Soldiers of Light — Belief in the Angels
   10 stations for kids (7-13), on the way of Ahl al-Sunnah:
   their creation from light · their greatness · absolute obedience ·
   Jibril, Mika'il, Israfil · the guardians · the noble scribes ·
   angels who love and pray for you · sensing their presence ·
   loving them — and how their greatness points to their Creator.
   Narrated by Yusuf. Engine: rihla-engine.js
   ════════════════════════════════════════════════════════════════ */
window.MALAIKA_STATIONS = [

/* ───────────── 1 · Created From Light ───────────── */
{
  id:'noor', num:1, icon:'✨', emoji:'💡', color:'#8E7CC3',
  title:{ ar:'مَخلوقونَ مِن نور', en:'Created From Light' },
  narration:{
    ar:'أهلاً بِكَ يا صَديقي في رِحلةٍ جَديدة! 🌌 اليومَ سنَتَعَرَّفُ على مَخلوقاتٍ عَجيبةٍ تَعيشُ حَولَنا ولا نَراها: <b>المَلائِكة</b>. أخبَرَنا النَّبِيُّ ﷺ بِسِرِّ خِلقَتِهِم فَقال: «<b>خُلِقَتِ المَلائِكةُ مِن نور</b>، وخُلِقَ الجانُّ مِن مارِجٍ مِن نار، وخُلِقَ آدَمُ مِمّا وُصِفَ لَكُم» (رواه مسلم). فَنَحنُ مِن طين، والجِنُّ مِن نار، والمَلائِكةُ مِن <b>نور</b>! هُم لَيسوا خَيالاً ولا شَخصيّاتِ أفلام، بَل مَخلوقاتٌ حَقيقيّةٌ خَلَقَها اللهُ قَبلَ آدَم، لا يَأكُلونَ ولا يَشرَبونَ ولا يَتعَبون، ولَهُم أجنِحةٌ حَقيقيّة. الإيمانُ بِهِم رُكنٌ مِن أركانِ الإيمانِ السِّتّة — فَمَن أنكَرَهُم فَقَد أنكَرَ خَبَرَ اللهِ ورَسولِه.',
    en:'Welcome, my friend, to a new journey! 🌌 Today we\'ll meet amazing creatures who live around us yet we can\'t see them: <b>the angels</b>. The Prophet ﷺ told us the secret of their creation: "<b>The angels were created from light</b>, the jinn from smokeless fire, and Adam from what has been described to you" (Muslim). So we are from clay, the jinn from fire, and the angels from <b>light</b>! They are not fantasy or movie characters, but real creatures Allah created before Adam — they don\'t eat, drink, or tire, and they have real wings. Believing in them is one of the six pillars of faith — whoever denies them denies the report of Allah and His Messenger.' },
  shubha:{ ar:'بَعضُهُم يَقول: «أنا لا أرى المَلائِكة، فَكَيفَ أُصَدِّقُ بِوُجودِهِم؟» 🤨', en:'Some say: "I can\'t see angels, so how can I believe they exist?" 🤨' },
  logic:{
    ar:'فَكِّر: هل تَرى <b>الهَواءَ</b> الذي تَتَنَفَّسُه؟ هل تَرى <b>إشاراتِ الواي فاي</b> التي تَملأُ الغُرفة؟ لا! ومَعَ ذلك أنتَ مُتَيَقِّنٌ مِن وُجودِها، لِأنَّ آثارَها ظاهِرةٌ ولِأنَّ مَصدَراً مَوثوقاً أخبَرَكَ بِها. عَيناكَ الصَّغيرَتانِ لا تَرَيانِ إلّا جُزءاً ضَئيلاً مِنَ العالَم — حتّى العُلَماءُ يَقولونَ إنَّ عُيونَنا لا تَلتَقِطُ إلّا شَريحةً صَغيرةً مِنَ الضَّوء! فَعَدَمُ الرُّؤيةِ لا يَعني عَدَمَ الوُجود. ومَن أخبَرَنا بِالمَلائِكة؟ خالِقُهُم نَفسُهُ في كِتابِهِ، ورَسولُهُ الصّادِقُ الذي رَآهُم. فَنُؤمِنُ بِهِم عن عِلمٍ ويَقين، لا عن خَيال.',
    en:'Think: can you see the <b>air</b> you breathe? Can you see the <b>Wi-Fi signals</b> filling the room? No! Yet you\'re certain they exist, because their effects are visible and a trusted source told you about them. Your small eyes see only a tiny part of the world — even scientists say our eyes catch only a thin slice of light! Not seeing something doesn\'t mean it doesn\'t exist. And who told us about the angels? Their own Creator in His Book, and His truthful Messenger who actually saw them. So we believe in them with knowledge and certainty, not imagination.' },
  myth:{ claim:{ ar:'«المَلائِكةُ شَخصيّاتٌ خَياليّةٌ مِثلَ شَخصيّاتِ الأفلام!»', en:'"Angels are fictional characters like the ones in movies!"' },
         bust:{ ar:'المَلائِكةُ مَخلوقاتٌ حَقيقيّةٌ مِن نور، أخبَرَنا بِها اللهُ في كِتابِهِ ورَسولُهُ الذي رَآها بِعَينِه.', en:'Angels are real creatures of light — Allah told us about them in His Book, and His Messenger saw them with his own eyes.' } },
  match:{
    title:{ ar:'صِل كُلَّ مَخلوقٍ بِما خُلِقَ مِنه', en:'Match each creature to what it was created from' },
    pairs:[
      { tool:{ar:'المَلائِكة',en:'The angels'}, job:{ar:'مِن نور',en:'From light'} },
      { tool:{ar:'الجِنّ',en:'The jinn'}, job:{ar:'مِن مارِجٍ مِن نار',en:'From smokeless fire'} },
      { tool:{ar:'آدَمُ عليه السلام',en:'Adam (peace be upon him)'}, job:{ar:'مِن طين',en:'From clay'} },
      { tool:{ar:'الهَواءُ والواي فاي',en:'Air and Wi-Fi'}, job:{ar:'مَوجودٌ ولا نَراه',en:'Exists though unseen'} },
    ] },
  reflection:{
    ayah:'﴿الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ ۚ يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ﴾',
    ref:{ ar:'سورة فاطِر · ١', en:'Surah Fatir · 1' },
    explain:{
      ar:'اللهُ جَعَلَ المَلائِكةَ رُسُلاً بَينَهُ وبَينَ خَلقِه، ولَهُم أجنِحةٌ حَقيقيّة: مِنهُم مَن لَهُ جَناحانِ، ومِنهُم ثَلاثةٌ وأربَعةٌ وأكثَر. «يَزيدُ في الخَلقِ ما يَشاء» — فَخَيالُكَ مَهما اتَّسَعَ لا يَبلُغُ عَظَمةَ ما خَلَقَ الله.',
      en:'Allah made the angels messengers between Him and His creation, with real wings: some have two, some three, some four, and more. "He adds to creation whatever He wills" — however wide your imagination, it cannot reach the greatness of what Allah created.' } },
  card:{ name:{ar:'المَلائِكة',en:'The Angels'}, meaning:{ar:'مَخلوقاتٌ نورانيّةٌ حَقيقيّة، خَلَقَها اللهُ لِطاعَتِهِ وتَنفيذِ أوامِرِه، والإيمانُ بِها رُكنٌ مِن أركانِ الإيمان',en:'Real creatures of light, created by Allah to obey Him and carry out His commands — believing in them is a pillar of faith'} },
  proof:{ ar:'المَلائِكةُ نورٌ حَقيقيّ، وعَدَمُ رُؤيَتِها لا يَعني عَدَمَ وُجودِها', en:'Angels are real light — not seeing them doesn\'t mean they don\'t exist' },
  dua:{ ar:'اللهُمَّ إنّي أُؤمِنُ بِكَ ومَلائِكَتِكَ وكُتُبِكَ ورُسُلِك', en:'O Allah, I believe in You, Your angels, Your books, and Your messengers' },
  mission:{ ar:'✨ مُهِمّةُ المَحطّة: اذكُر لِأهلِكَ ثَلاثةَ أشياءَ مَوجودةٍ حَولَكَ الآنَ ولا تَراها (الهَواء، الصَّوت، الواي فاي…)، ثُمَّ قُل لَهُم: وهكذا المَلائِكةُ حَولَنا ولا نَراها!', en:'✨ Station Mission: Tell your family three things around you right now that you can\'t see (air, sound, Wi-Fi…), then tell them: that\'s how the angels are around us unseen!' },
  badge:{ icon:'💡', color:'#8E7CC3', title:{ ar:'مُكتَشِفُ النّور', en:'Discoverer of Light' } }
},

/* ───────────── 2 · How Mighty They Are ───────────── */
{
  id:'azama', num:2, icon:'🌌', emoji:'🪽', color:'#5B7FD4',
  title:{ ar:'عَظَمةُ الخِلقة — سِتُّمِئةِ جَناح', en:'A Mighty Creation — Six Hundred Wings' },
  narration:{
    ar:'هل أنتَ مُستَعِدٌّ لِأرقامٍ تُدهِشُك؟ 🤯 رَأى النَّبِيُّ ﷺ <b>جِبريلَ</b> عليه السلام على صورَتِهِ الحَقيقيّةِ ولَهُ <b>سِتُّمِئةِ جَناح، قد سَدَّ الأُفُق</b>! (رواه البخاري). يَعني حينَ تَنظُرُ إلى السَّماءِ كُلِّها مِن أوَّلِها إلى آخِرِها، لا تَرى إلّا جِبريل! وهُناكَ مَلائِكةٌ أعظَم: <b>حَمَلةُ العَرش</b>، أخبَرَنا النَّبِيُّ ﷺ أنَّ ما بَينَ شَحمةِ أُذُنِ أحَدِهِم إلى عاتِقِهِ (كَتِفِهِ) <b>مَسيرةُ سَبعِمِئةِ عام</b>! (رواه أبو داود). وفي السَّماءِ السّابِعةِ بَيتٌ اسمُهُ <b>البَيتُ المَعمور</b> يَدخُلُهُ كُلَّ يَومٍ سَبعونَ ألفَ مَلَكٍ ثُمَّ لا يَعودونَ إلَيهِ أبَداً — مِن كَثرةِ المَلائِكة! كُلُّ هذِهِ العَظَمةِ مَخلوقةٌ… فَكَيفَ بِعَظَمةِ الخالِق؟',
    en:'Ready for numbers that will amaze you? 🤯 The Prophet ﷺ saw <b>Jibril</b> (peace be upon him) in his true form with <b>six hundred wings, filling the horizon</b>! (Bukhari). Meaning: when you look across the whole sky from end to end, you\'d see only Jibril! And there are even greater angels: <b>the Bearers of the Throne</b> — the Prophet ﷺ told us that the distance from one\'s earlobe to his shoulder is <b>a journey of seven hundred years</b>! (Abu Dawud). And in the seventh heaven there\'s a house called <b>al-Bayt al-Ma\'mur</b>: every day seventy thousand angels enter it and never return to it again — that\'s how many angels there are! All this greatness is created… so how great must the Creator be?' },
  shubha:{ ar:'بَعضُهُم يَقول: «هذِهِ أرقامٌ خَياليّةٌ كَبيرةٌ جِدّاً، لا يُمكِنُ تَصديقُها!» 🤨', en:'Some say: "These numbers are way too huge to believe!" 🤨' },
  logic:{
    ar:'فَكِّر: قَبلَ مِئةِ عامٍ لَو قُلتَ لِلنّاسِ إنَّ في السَّماءِ نَجمةً واحِدةً تَتَّسِعُ لِمِليونِ أرضٍ مِثلَ أرضِنا (وهي الشَّمس!)، لَقالوا: مُستَحيل! واليومَ يُخبِرُنا عِلمُ الفَلَكِ أنَّ في الكَونِ <b>مِلياراتِ المِلياراتِ</b> مِنَ النُّجوم، بَعضُها أكبَرُ مِن شَمسِنا بِمَلايينِ المَرّات. فإذا كانَتِ المَخلوقاتُ التي <b>نَراها</b> بِهذِهِ الضَّخامة، فَلِماذا نَستَغرِبُ أن تَكونَ المَخلوقاتُ التي <b>لا نَراها</b> عَظيمةً كذلك؟ الذي خَلَقَ المَجَرّاتِ قادِرٌ على خَلقِ مَلَكٍ يَسُدُّ الأُفُق. العَقلُ السَّليمُ يَقول: عَظَمةُ الجُنودِ تَدُلُّ على عَظَمةِ المَلِك!',
    en:'Think: a hundred years ago, if you told people there\'s a single star in the sky that could fit a million Earths inside it (the Sun!), they\'d say: impossible! Today astronomy tells us the universe holds <b>billions of billions</b> of stars, some millions of times bigger than our Sun. If the creatures we <b>can</b> see are this enormous, why be surprised that the creatures we <b>can\'t</b> see are mighty too? The One who created galaxies can create an angel that fills the horizon. Sound reason says: the greatness of the soldiers points to the greatness of the King!' },
  myth:{ claim:{ ar:'«المَلائِكةُ كائِناتٌ صَغيرةٌ لَطيفةٌ بِأجنِحةٍ بَيضاءَ كَما في الرُّسوم!»', en:'"Angels are tiny cute beings with little white wings, like in cartoons!"' },
         bust:{ ar:'جِبريلُ وَحدَهُ لَهُ سِتُّمِئةِ جَناحٍ يَسُدُّ الأُفُق! المَلائِكةُ مَخلوقاتٌ عَظيمةٌ مَهيبةٌ تَليقُ بِجَلالِ مَن خَلَقَها.', en:'Jibril alone has six hundred wings filling the horizon! Angels are mighty, awe-inspiring creatures befitting the majesty of their Creator.' } },
  match:{
    title:{ ar:'صِل كُلَّ عَظَمةٍ بِصاحِبِها', en:'Match each wonder to its owner' },
    pairs:[
      { tool:{ar:'جِبريلُ عليه السلام',en:'Jibril (peace be upon him)'}, job:{ar:'سِتُّمِئةِ جَناحٍ تَسُدُّ الأُفُق',en:'Six hundred wings filling the horizon'} },
      { tool:{ar:'حامِلُ العَرش',en:'A Bearer of the Throne'}, job:{ar:'ما بَينَ أُذُنِهِ وكَتِفِهِ ٧٠٠ عام',en:'Earlobe to shoulder: a 700-year journey'} },
      { tool:{ar:'البَيتُ المَعمور',en:'Al-Bayt al-Ma\'mur'}, job:{ar:'يَدخُلُهُ ٧٠ ألفَ مَلَكٍ كُلَّ يَوم',en:'70,000 angels enter it daily'} },
      { tool:{ar:'عَظَمةُ المَخلوق',en:'The creature\'s greatness'}, job:{ar:'تَدُلُّ على عَظَمةِ الخالِق',en:'Points to the Creator\'s greatness'} },
    ] },
  reflection:{
    ayah:'﴿وَالْمَلَكُ عَلَىٰ أَرْجَائِهَا ۚ وَيَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ يَوْمَئِذٍ ثَمَانِيَةٌ﴾',
    ref:{ ar:'سورة الحاقّة · ١٧', en:'Surah Al-Haqqah · 17' },
    explain:{
      ar:'يَومَ القِيامةِ يَحمِلُ عَرشَ الرَّحمنِ ثَمانِيةٌ مِن أعظَمِ المَلائِكة. تَأمَّل: عَرشُ اللهِ أعظَمُ المَخلوقات، وحامِلوهُ مِن أعظَمِ المَلائِكة — وكُلُّ ذلكَ خَلقٌ مِن خَلقِ الله. كُلَّما عَرَفتَ عَظَمةَ المَخلوقِ ازدادَ قَلبُكَ تَعظيماً لِلخالِقِ سُبحانَه.',
      en:'On the Day of Resurrection, eight of the mightiest angels will carry the Throne of the Most Merciful. Reflect: Allah\'s Throne is the greatest of creations, and its bearers are among the greatest angels — and all of that is just His creation. The more you know the creature\'s greatness, the more your heart magnifies the Creator.' } },
  card:{ name:{ar:'حَمَلةُ العَرش',en:'Bearers of the Throne'}, meaning:{ar:'مَلائِكةٌ عِظامٌ يَحمِلونَ عَرشَ الرَّحمن، يَحمِلُهُ يَومَ القِيامةِ ثَمانِية، وهُم مِن أعظَمِ خَلقِ الله',en:'Mighty angels who carry the Throne of the Most Merciful — eight will bear it on the Day of Resurrection; they are among Allah\'s greatest creation'} },
  proof:{ ar:'عَظَمةُ المَلائِكةِ دَليلٌ على عَظَمةِ مَن خَلَقَها', en:'The angels\' greatness is proof of the greatness of their Creator' },
  dua:{ ar:'سُبحانَ ذي الجَبَروتِ والمَلَكوتِ والكِبرياءِ والعَظَمة', en:'Glory be to the Owner of might, dominion, pride, and greatness' },
  mission:{ ar:'🌌 مُهِمّةُ المَحطّة: اخرُج لَيلاً وانظُر إلى السَّماء، وتَخَيَّل جِبريلَ بِسِتِّمِئةِ جَناحٍ يَسُدُّ هذا الأُفُقَ كُلَّه، ثُمَّ قُل مِن قَلبِك: «اللهُ أكبَر!»', en:'🌌 Station Mission: Go out at night, look at the sky, and imagine Jibril with six hundred wings filling that whole horizon. Then say from your heart: "Allahu Akbar!"' },
  badge:{ icon:'🪽', color:'#5B7FD4', title:{ ar:'شاهِدُ العَظَمة', en:'Witness of Greatness' } }
},

/* ───────────── 3 · Absolute Obedience ───────────── */
{
  id:'taah', num:3, icon:'🫡', emoji:'⚙️', color:'#27AE60',
  title:{ ar:'جُنودٌ لا يَعصونَ أبَداً', en:'Soldiers Who Never Disobey' },
  narration:{
    ar:'تَخَيَّل جَيشاً عَدَدُهُ لا يُحصيهِ إلّا الله، كُلُّ جُندِيٍّ فيهِ يُنَفِّذُ الأمرَ <b>فَوراً وبِدِقّةٍ تامّةٍ وبِفَرَح</b>، مُنذُ آلافِ السِّنين، بِلا تَذَمُّرٍ ولا كَسَلٍ ولا خَطَأٍ واحِد! 🫡 هذِهِ هي المَلائِكة. قالَ اللهُ عَنهُم: ﴿<b>لا يَعصونَ اللهَ ما أمَرَهُم ويَفعَلونَ ما يُؤمَرون</b>﴾. نَحنُ البَشَرُ نَتعَبُ ونَنسى ونُخطِئ، أمّا المَلائِكةُ فَخَلَقَهُمُ اللهُ لِلطّاعةِ الخالِصة: ﴿يُسَبِّحونَ اللَّيلَ والنَّهارَ <b>لا يَفتُرون</b>﴾ — أيْ لا يَتوَقَّفونَ لَحظةً ولا يَمَلّون، كَما تَتَنَفَّسُ أنتَ بِلا تَوَقُّف. ومِنهُم مَلائِكةٌ راكِعونَ مُنذُ خُلِقوا، وآخَرونَ ساجِدونَ لا يَرفَعونَ رُؤوسَهُم إلى يَومِ القِيامة!',
    en:'Imagine an army whose number only Allah knows, where every soldier carries out orders <b>instantly, perfectly, and joyfully</b> — for thousands of years, without one complaint, laziness, or single mistake! 🫡 That is the angels. Allah said about them: ﴾<b>They do not disobey Allah in what He commands them, and they do what they are commanded</b>﴿. We humans get tired, forget, and err — but Allah created the angels for pure obedience: ﴾They glorify Him night and day, <b>never slackening</b>﴿ — they never stop for a moment and never get bored, just as you breathe without stopping. Some angels have been bowing since they were created; others remain in prostration and will not raise their heads until the Day of Resurrection!' },
  shubha:{ ar:'بَعضُهُم يَقول: «إذا كانَتِ المَلائِكةُ لا تَعصي أبَداً، فما فائِدةُ عِبادَتِنا نَحنُ المُذنِبين؟» 🤨', en:'Some say: "If angels never disobey, what\'s the value of worship from us sinners?" 🤨' },
  logic:{
    ar:'سُؤالٌ جَميل! فَكِّر: المَلائِكةُ تُطيعُ بِلا مُجاهَدة، لِأنَّ اللهَ خَلَقَهُم هكذا — مِثلَ قَلبِكَ الذي يَنبِضُ بِلا اختِيارِك. أمّا أنتَ فَعِندَكَ <b>اختِيار</b>: تَستَطيعُ أن تَلعَبَ بَدَلَ أن تُصَلِّي، ومَعَ ذلك تَختارُ طاعةَ الله! وهُنا السِّرّ: طاعَتُكَ أنتَ فيها <b>مُجاهَدةٌ ومَحَبّةٌ واختِيار</b>، ولِذلكَ لَها عِندَ اللهِ مَقامٌ خاصّ. ولكنَّ طاعةَ المَلائِكةِ تُعَلِّمُنا دَرساً: الطّاعةُ الكامِلةُ مُمكِنة، وكُلَّما اقتَرَبتَ مِنها صِرتَ أشبَهَ بِأهلِ السَّماء. والمُؤمِنُ الذي يُجاهِدُ نَفسَهُ كُلَّ يَومٍ لِيُطيعَ، يَرتَقي دَرَجةً بَعدَ دَرَجة، حتّى تُحِبَّهُ المَلائِكةُ نَفسُها وتَدعُوَ لَه!',
    en:'Beautiful question! Think: the angels obey without struggle, because Allah created them that way — like your heart beating without your choosing. But you have <b>choice</b>: you could play instead of praying, yet you choose to obey Allah! Here\'s the secret: your obedience carries <b>struggle, love, and choice</b>, and so it has a special rank with Allah. Still, the angels\' obedience teaches us a lesson: perfect obedience is possible, and the closer you come to it, the more you resemble the people of heaven. The believer who strives daily to obey rises rank after rank, until the angels themselves love him and pray for him!' },
  myth:{ claim:{ ar:'«الطّاعةُ المُستَمِرّةُ مُمِلّةٌ ومُستَحيلة!»', en:'"Constant obedience is boring and impossible!"' },
         bust:{ ar:'المَلائِكةُ تُسَبِّحُ مُنذُ آلافِ السِّنينَ بِفَرَحٍ لا يَفتُر — الطّاعةُ لِمَن نُحِبُّ سَعادةٌ لا مَلَل!', en:'The angels have been glorifying Allah joyfully for thousands of years without slackening — obeying the One we love is happiness, not boredom!' } },
  match:{
    title:{ ar:'صِل كُلَّ صِفةٍ بِصاحِبِها', en:'Match each trait to its owner' },
    pairs:[
      { tool:{ar:'المَلائِكة',en:'The angels'}, job:{ar:'طاعةٌ كامِلةٌ بِلا فُتور',en:'Perfect obedience, never slackening'} },
      { tool:{ar:'الإنسانُ المُؤمِن',en:'The believing human'}, job:{ar:'يُجاهِدُ ويَختارُ الطّاعة',en:'Strives and chooses to obey'} },
      { tool:{ar:'تَسبيحُ المَلائِكة',en:'The angels\' glorification'}, job:{ar:'كَالنَّفَسِ لا يَتوَقَّف',en:'Like breathing — never stops'} },
      { tool:{ar:'طاعَتُكَ بِاختِيارِك',en:'Your chosen obedience'}, job:{ar:'لَها مَقامٌ خاصٌّ عِندَ الله',en:'Has a special rank with Allah'} },
    ] },
  reflection:{
    ayah:'﴿لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ﴾',
    ref:{ ar:'سورة التَّحريم · ٦', en:'Surah At-Tahrim · 6' },
    explain:{
      ar:'هذِهِ صِفةُ المَلائِكة: لا يَتَأخَّرونَ عن أمرِ اللهِ طَرفةَ عَين، ولا يُنَفِّذونَهُ ناقِصاً. وفيها دَرسٌ لَنا: الجُنديُّ الأمينُ يُنَفِّذُ أمرَ مَلِكِهِ بِسُرعةٍ وإتقان. فَحينَ يُنادي المُؤَذِّنُ «حَيَّ على الصَّلاة»، كُن مِثلَ المَلائِكة: لَبِّ النِّداءَ فَوراً وبِقَلبٍ فَرِح.',
      en:'This is the angels\' nature: they never delay Allah\'s command for an instant, nor carry it out incompletely. There\'s a lesson for us: the faithful soldier carries out his King\'s command swiftly and excellently. So when the muezzin calls "come to prayer," be like the angels: answer at once with a joyful heart.' } },
  card:{ name:{ar:'المُسَبِّحون',en:'The Glorifiers'}, meaning:{ar:'مَلائِكةٌ يُسَبِّحونَ اللهَ اللَّيلَ والنَّهارَ لا يَفتُرونَ ولا يَمَلّون، مِنهُم الرّاكِعُ دائِماً والسّاجِدُ دائِماً',en:'Angels who glorify Allah night and day without slackening or boredom — some forever bowing, some forever prostrating'} },
  proof:{ ar:'المَلائِكةُ جُنودُ اللهِ المُطيعون، وأجمَلُ ما فِيَّ أنّي أُطيعُ بِاختِياري', en:'The angels are Allah\'s obedient soldiers — and the beauty in me is that I obey by choice' },
  dua:{ ar:'اللهُمَّ اجعَلني مِن عِبادِكَ الطّائِعينَ المُسارِعينَ إلى رِضاك', en:'O Allah, make me among Your obedient servants who race to Your pleasure' },
  mission:{ ar:'🫡 مُهِمّةُ المَحطّة: اليومَ حينَ يَطلُبُ مِنكَ والِداكَ شَيئاً، نَفِّذهُ فَوراً بِابتِسامةٍ مِثلَ المَلائِكة — بِلا تَأجيلٍ ولا تَذَمُّر. جَرِّب وانظُر كَيفَ تَشعُر!', en:'🫡 Station Mission: Today when your parents ask you to do something, do it immediately with a smile — like the angels, no delay, no grumbling. Try it and see how it feels!' },
  badge:{ icon:'⚙️', color:'#27AE60', title:{ ar:'الجُنديُّ المُطيع', en:'The Obedient Soldier' } }
},

/* ───────────── 4 · Jibril, the Trustworthy ───────────── */
{
  id:'jibril', num:4, icon:'📨', emoji:'🕊️', color:'#C0905C',
  title:{ ar:'جِبريل — أمينُ الوَحي', en:'Jibril — Trustee of Revelation' },
  narration:{
    ar:'مَن أعظَمُ المَلائِكةِ جَميعاً؟ إنه <b>جِبريلُ</b> عليه السلام، وَصَفَهُ اللهُ بِأجمَلِ الأوصاف: ﴿<b>الرّوحُ الأمين</b>﴾ و﴿شَديدُ القُوى﴾ و﴿مُطاعٍ ثَمَّ أمين﴾. وَظيفَتُهُ أشرَفُ وَظيفةٍ في الوُجود: <b>حَملُ كَلامِ اللهِ إلى الأنبِياء</b>! 📨 هو الذي نَزَلَ على نوحٍ وإبراهيمَ وموسى وعيسى، وهو الذي جاءَ مُحَمَّداً ﷺ في غارِ حِراءَ وقالَ لَه: «اقرَأ!». ظَلَّ يَنزِلُ على نَبِيِّنا ﷺ <b>ثَلاثاً وعِشرينَ سَنةً</b> يَحمِلُ إلَيهِ القُرآنَ آيةً آية، حَرفاً حَرفاً، لم يُغَيِّر ولم يَنسَ ولم يَزِد. ولِهذا سُمِّيَ «الأمين»: ساعي بَريدِ السَّماءِ الذي يُوصِلُ الرِّسالةَ كَما هي تَماماً. وكانَ يَأتي أحياناً على صورةِ رَجُلٍ حَسَنِ الهَيئة، يَعرِفُهُ الصَّحابة!',
    en:'Who is the greatest of all angels? It is <b>Jibril</b> (peace be upon him). Allah described him with the most beautiful titles: ﴾<b>the Trustworthy Spirit</b>﴿, ﴾mighty in power﴿, ﴾obeyed there, trustworthy﴿. His job is the noblest in existence: <b>carrying Allah\'s words to the prophets</b>! 📨 He descended to Nuh, Ibrahim, Musa, and Isa, and he came to Muhammad ﷺ in the cave of Hira saying: "Read!" He kept descending to our Prophet ﷺ for <b>twenty-three years</b>, bringing the Quran verse by verse, letter by letter — never changing, forgetting, or adding a thing. That\'s why he\'s called "the Trustworthy": heaven\'s mail-carrier who delivers the message exactly as it is. Sometimes he came in the form of a handsome man whom the companions could see!' },
  shubha:{ ar:'بَعضُهُم يَقول: «وكَيفَ نَتَأكَّدُ أنَّ الرِّسالةَ وَصَلَت مِنَ السَّماءِ بِلا تَغيير؟» 🤨', en:'Some say: "How can we be sure the message arrived from heaven unchanged?" 🤨' },
  logic:{
    ar:'فَكِّر: حينَ تُرسِلُ هَدِيّةً ثَمينةً جِدّاً، تَختارُ لَها أقوى وأصدَقَ ساعي بَريدٍ في العالَم، صَحيح؟ واللهُ سُبحانَهُ اختارَ لِأثمَنِ رِسالةٍ في الوُجودِ — كَلامِهِ — أعظَمَ مَلائِكَتِهِ وأقواهُم وأصدَقَهُم: جِبريل. ثُمَّ تَأمَّل السِّلسِلة: اللهُ ← جِبريلُ الأمينُ ← مُحَمَّدٌ الصّادِقُ الأمينُ ← الصَّحابةُ الذينَ حَفِظوهُ وكَتَبوه ← مَلايينُ الحُفّاظِ في كُلِّ جيل. سِلسِلةٌ كُلُّ حَلَقةٍ فيها «أمين»! ولِهذا تَكَفَّلَ اللهُ بِحِفظِ القُرآن: ﴿إنّا نَحنُ نَزَّلنا الذِّكرَ وإنّا لَهُ لَحافِظون﴾. حتّى اليوم، لَو أخطَأ إمامٌ في حَرفٍ واحِدٍ في صَلاةِ التَّراويح، لَرَدَّ علَيهِ عَشَراتُ الحُفّاظِ مِن خَلفِه!',
    en:'Think: when you send a very precious gift, you choose the strongest, most honest courier in the world, right? And Allah chose, for the most precious message in existence — His own words — the greatest, strongest, most truthful of His angels: Jibril. Then look at the chain: Allah ← Jibril the Trustworthy ← Muhammad the Truthful and Trustworthy ← the companions who memorized and wrote it ← millions of memorizers in every generation. A chain where every link is "trustworthy"! That\'s why Allah guaranteed the Quran\'s protection: ﴾Indeed, We sent down the Reminder, and indeed We will guard it﴿. Even today, if an imam slips on a single letter in tarawih prayer, dozens of memorizers behind him correct him instantly!' },
  myth:{ claim:{ ar:'«الوَحيُ قِصّةٌ قَديمةٌ لا نَعرِفُ كَيفَ حَدَثَت!»', en:'"Revelation is an old story — we can\'t know how it happened!"' },
         bust:{ ar:'الوَحيُ سِلسِلةُ أُمَناء: جِبريلُ الأمينُ حَمَلَهُ، والنَّبِيُّ الأمينُ بَلَّغَهُ، والقُرآنُ بَينَ يَدَيكَ اليومَ مَحفوظٌ حَرفاً حَرفاً.', en:'Revelation is a chain of trustworthy bearers: Jibril carried it, the trustworthy Prophet delivered it, and the Quran in your hands today is preserved letter by letter.' } },
  match:{
    title:{ ar:'صِل كُلَّ وَصفٍ بِمَعناه', en:'Match each title to its meaning' },
    pairs:[
      { tool:{ar:'الرّوحُ الأمين',en:'The Trustworthy Spirit'}, job:{ar:'جِبريلُ حامِلُ الوَحي',en:'Jibril, bearer of revelation'} },
      { tool:{ar:'شَديدُ القُوى',en:'Mighty in power'}, job:{ar:'قُوّةُ جِبريلَ العَظيمة',en:'Jibril\'s immense strength'} },
      { tool:{ar:'غارُ حِراء',en:'Cave of Hira'}, job:{ar:'أوَّلُ لِقاءٍ بِـ«اقرَأ»',en:'The first meeting: "Read!"'} },
      { tool:{ar:'٢٣ سَنة',en:'23 years'}, job:{ar:'مُدّةُ نُزولِ القُرآن',en:'The Quran\'s revelation period'} },
    ] },
  reflection:{
    ayah:'﴿نَزَلَ بِهِ الرُّوحُ الْأَمِينُ ۝ عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ﴾',
    ref:{ ar:'سورة الشُّعَراء · ١٩٣–١٩٤', en:'Surah Ash-Shu\'ara · 193–194' },
    explain:{
      ar:'سَمّى اللهُ جِبريلَ «الرّوحَ الأمين» لِأنه يَحمِلُ ما تَحيا بِهِ القُلوبُ كَما تَحيا الأجسادُ بِالرّوح: الوَحي. ونَزَلَ بِهِ «على قَلبِكَ» — أيْ على قَلبِ النَّبِيِّ ﷺ مُباشَرةً لِيَحفَظَهُ حِفظاً تامّاً. كَلامُ اللهِ وَصَلَكَ بِأمانةٍ كامِلة، فاقرَأهُ بِمَحَبّةٍ وأمانة.',
      en:'Allah named Jibril "the Trustworthy Spirit" because he carries that by which hearts live — revelation — just as bodies live by the soul. He brought it down "upon your heart" — directly upon the Prophet\'s ﷺ heart so he would preserve it perfectly. Allah\'s words reached you with complete trust, so read them with love and trust.' } },
  card:{ name:{ar:'جِبريلُ عليه السلام',en:'Jibril (peace be upon him)'}, meaning:{ar:'أعظَمُ المَلائِكة، الرّوحُ الأمين، مُوَكَّلٌ بِالوَحي: يَحمِلُ كَلامَ اللهِ إلى أنبِيائِهِ بِلا زِيادةٍ ولا نُقصان',en:'The greatest angel, the Trustworthy Spirit, entrusted with revelation: carrying Allah\'s words to His prophets without addition or omission'} },
  proof:{ ar:'القُرآنُ وَصَلَني عَبرَ سِلسِلةٍ كُلُّ حَلَقةٍ فيها أمين', en:'The Quran reached me through a chain whose every link is trustworthy' },
  dua:{ ar:'اللهُمَّ رَبَّ جِبريلَ وميكائيلَ وإسرافيلَ، اهدِني لِما اختُلِفَ فيهِ مِنَ الحَقِّ بِإذنِك', en:'O Allah, Lord of Jibril, Mika\'il, and Israfil, guide me by Your leave to the truth' },
  mission:{ ar:'📨 مُهِمّةُ المَحطّة: كُن «أميناً» مِثلَ جِبريل: إذا حَمَّلَكَ أحَدٌ رِسالةً أو أمانةً هذا الأُسبوع، أوصِلها كامِلةً بِلا تَغيير، وقُل في قَلبِك: هكذا يَفعَلُ الرّوحُ الأمين.', en:'📨 Station Mission: Be "trustworthy" like Jibril: if anyone gives you a message or trust this week, deliver it complete and unchanged, saying in your heart: this is what the Trustworthy Spirit does.' },
  badge:{ icon:'🕊️', color:'#C0905C', title:{ ar:'حامِلُ الأمانة', en:'Bearer of the Trust' } }
},

/* ───────────── 5 · The Officers of the Universe ───────────── */
{
  id:'wukala', num:5, icon:'🌧️', emoji:'📯', color:'#2E9E9E',
  title:{ ar:'ميكائيلُ وإسرافيلُ — مُوَظَّفو الكَون', en:'Mika\'il & Israfil — Officers of the Universe' },
  narration:{
    ar:'الكَونُ مَملَكةٌ عَظيمةٌ مُنَظَّمة، ولِكُلِّ مُهِمّةٍ فيها «مُوَظَّفٌ» مِنَ المَلائِكةِ يُديرُها بِأمرِ اللهِ! 🌍 فَهذا <b>ميكائيلُ</b> عليه السلام مُوَكَّلٌ بِـ<b>القَطرِ (المَطَر) والنَّبات</b> — أيْ بِالأرزاق: يُصَرِّفُ السَّحابَ ويُنزِلُ المَطَرَ حَيثُ يَأمُرُهُ اللهُ، قَطرةً قَطرة. وهذا <b>إسرافيلُ</b> عليه السلام مُوَكَّلٌ بِأعظَمِ نَفخة: <b>الصّور</b>! وَضَعَ فَمَهُ على القَرنِ مُنذُ خُلِقَ، يَنتَظِرُ أمرَ اللهِ لِيَنفُخَ نَفخةَ يَومِ القِيامة. وهُناكَ <b>مَلَكُ المَوتِ</b> المُوَكَّلُ بِقَبضِ الأرواح، ومَلائِكةُ الجِبالِ والبِحارِ والأرحام. كُلُّهُم «مُدَبِّراتٌ أمراً» — يُديرونَ شُؤونَ الكَونِ بِأمرِ المَلِكِ سُبحانَه، لا يَستَقِلّونَ بِشَيء.',
    en:'The universe is a vast, organized kingdom, and every task has an angelic "officer" running it by Allah\'s command! 🌍 <b>Mika\'il</b> (peace be upon him) is entrusted with <b>rain and vegetation</b> — with provision: directing the clouds and sending down rain wherever Allah commands, drop by drop. <b>Israfil</b> (peace be upon him) is entrusted with the mightiest blast: <b>the Trumpet</b>! He has held it to his lips since he was created, awaiting Allah\'s command to blow the blast of the Day of Resurrection. And there\'s the <b>Angel of Death</b> entrusted with taking souls, plus the angels of the mountains, the seas, and the wombs. All of them are "those who manage affairs" — running the universe by the command of the King, never acting on their own.' },
  shubha:{ ar:'بَعضُهُم يَقول: «المَطَرُ تَصنَعُهُ الطَّبيعةُ وَحدَها، فما عَلاقةُ المَلائِكة؟» 🤨', en:'Some say: "Nature alone makes the rain — what do angels have to do with it?" 🤨' },
  logic:{
    ar:'فَكِّر: حينَ تَصِلُكَ طَلَبِيّةٌ إلى بابِ البَيت، هل أوصَلَتها «الشّاحِنةُ» وَحدَها؟ الشّاحِنةُ أداة، لكنَّ هُناكَ سائِقاً يَقودُها وشَرِكةً تُنَظِّمُ الطَّريقَ كُلَّه! العِلمُ يَصِفُ لَنا «كَيفَ» يَتَبَخَّرُ الماءُ ويَتَكاثَفُ — وهذا جَميل، فَهو يَصِفُ الأداة. لكنَّ السُّؤالَ الأكبَر: مَن يُديرُ هذِهِ المَنظومةَ بِهذِهِ الدِّقّة، فَتُمطِرُ هُنا ولا تُمطِرُ هُناك؟ أخبَرَنا اللهُ أنَّ مِن جُنودِهِ مَلائِكةً مُوَكَّلينَ بِتَنفيذِ أوامِرِهِ في الكَون. فالطَّبيعةُ هي «الشّاحِنة»، والمَلائِكةُ «السّائِقونَ المُنَفِّذون»، واللهُ هو المَلِكُ الآمِرُ المُدَبِّرُ لِكُلِّ شَيء. لا تَناقُضَ بَينَ العِلمِ والإيمان — العِلمُ يَصِفُ الكَيفيّة، والوَحيُ يَكشِفُ لَكَ ما وَراءَ السِّتار!',
    en:'Think: when a delivery reaches your door, did the "truck" deliver it by itself? The truck is a tool — but there\'s a driver steering it and a company organizing the whole route! Science describes "how" water evaporates and condenses — wonderful; it describes the tool. But the bigger question: who runs this system so precisely that it rains here and not there? Allah told us that among His soldiers are angels entrusted with carrying out His commands in the universe. Nature is the "truck," the angels are the "drivers," and Allah is the King who commands and manages everything. There\'s no clash between science and faith — science describes the how, and revelation shows you what\'s behind the curtain!' },
  myth:{ claim:{ ar:'«الكَونُ يُديرُ نَفسَهُ بِنَفسِهِ صُدفةً!»', en:'"The universe runs itself, all by chance!"' },
         bust:{ ar:'لِكُلِّ مُهِمّةٍ في الكَونِ مَلَكٌ مُوَكَّلٌ يُنَفِّذُ أمرَ اللهِ بِدِقّة — مَملَكةٌ مُنَظَّمةٌ لَها مَلِكٌ واحِدٌ سُبحانَه.', en:'Every task in the universe has an appointed angel carrying out Allah\'s command precisely — an organized kingdom with one King, glory be to Him.' } },
  match:{
    title:{ ar:'صِل كُلَّ مَلَكٍ بِمُهِمَّتِه', en:'Match each angel to his task' },
    pairs:[
      { tool:{ar:'ميكائيلُ عليه السلام',en:'Mika\'il'}, job:{ar:'القَطرُ والنَّباتُ (الأرزاق)',en:'Rain and vegetation (provision)'} },
      { tool:{ar:'إسرافيلُ عليه السلام',en:'Israfil'}, job:{ar:'النَّفخُ في الصّور',en:'Blowing the Trumpet'} },
      { tool:{ar:'مَلَكُ المَوت',en:'The Angel of Death'}, job:{ar:'قَبضُ الأرواحِ بِأمرِ الله',en:'Taking souls by Allah\'s command'} },
      { tool:{ar:'جِبريلُ عليه السلام',en:'Jibril'}, job:{ar:'نُزولُ الوَحيِ على الأنبِياء',en:'Bringing revelation to the prophets'} },
    ] },
  reflection:{
    ayah:'﴿فَالْمُدَبِّرَاتِ أَمْرًا﴾',
    ref:{ ar:'سورة النّازِعات · ٥', en:'Surah An-Nazi\'at · 5' },
    explain:{
      ar:'أقسَمَ اللهُ بِالمَلائِكةِ «المُدَبِّراتِ أمراً»: الذينَ يُدَبِّرونَ شُؤونَ الكَونِ بِأمرِهِ — مِنَ المَطَرِ والرِّياحِ إلى الأرواحِ والأرزاق. فالكَونُ لَيسَ فَوضى ولا صُدفة، بَل مَملَكةٌ يُديرُها المَلِكُ بِجُنودٍ لا يَعصونَهُ أبَداً. وحينَ تَرى المَطَرَ القادِمَ، تَذَكَّر: وَراءَهُ مَلَكٌ يُنَفِّذُ أمرَ رَبِّك!',
      en:'Allah swore by the angels "who manage affairs": those who run the universe\'s business by His command — from rain and winds to souls and provision. The universe is no chaos or accident, but a kingdom run by the King through soldiers who never disobey Him. When you see rain coming, remember: behind it is an angel carrying out your Lord\'s command!' } },
  card:{ name:{ar:'ميكائيلُ وإسرافيل',en:'Mika\'il & Israfil'}, meaning:{ar:'ميكائيلُ مُوَكَّلٌ بِالمَطَرِ والنَّبات، وإسرافيلُ مُوَكَّلٌ بِالنَّفخِ في الصّورِ يَومَ القِيامة — مِن أعظَمِ مَلائِكةِ الله',en:'Mika\'il is entrusted with rain and vegetation; Israfil with blowing the Trumpet on the Last Day — among Allah\'s greatest angels'} },
  proof:{ ar:'الكَونُ مَملَكةٌ مُنَظَّمة: لِكُلِّ أمرٍ مَلَكٌ، ولِلجَميعِ مَلِكٌ واحِد', en:'The universe is an organized kingdom: every task has an angel, and all have one King' },
  dua:{ ar:'اللهُمَّ اسقِنا الغَيثَ واجعَلنا مِنَ الشّاكِرين', en:'O Allah, send us beneficial rain and make us among the grateful' },
  mission:{ ar:'🌧️ مُهِمّةُ المَحطّة: في المَرّةِ القادِمةِ التي تَرى فيها المَطَرَ أو السَّحاب، تَذَكَّر ميكائيلَ وقُل: «اللهُمَّ صَيِّباً نافِعاً» — وأخبِر مَن بِجانِبِكَ بِمُهِمّةِ هذا المَلَكِ العَظيم.', en:'🌧️ Station Mission: Next time you see rain or clouds, remember Mika\'il and say: "O Allah, make it beneficial rain" — and tell whoever is next to you about this great angel\'s task.' },
  badge:{ icon:'📯', color:'#2E9E9E', title:{ ar:'عارِفُ المَملَكة', en:'Knower of the Kingdom' } }
},

/* ───────────── 6 · Your Personal Guards ───────────── */
{
  id:'hafaza', num:6, icon:'🛡️', emoji:'👥', color:'#E67E22',
  title:{ ar:'الحَفَظة — حُرّاسُكَ الشَّخصِيّون', en:'The Guardians — Your Personal Guards' },
  narration:{
    ar:'هل تَعلَمُ أنَّ مَعَكَ الآنَ — في هذِهِ اللَّحظةِ — حُرّاساً شَخصِيّينَ مِن نور؟ 🛡️ قالَ اللهُ تَعالى: ﴿لَهُ <b>مُعَقِّباتٌ</b> مِن بَينِ يَدَيهِ ومِن خَلفِهِ <b>يَحفَظونَهُ مِن أمرِ الله</b>﴾. مَلائِكةٌ يَتَعاقَبونَ علَيكَ — فَريقٌ بِاللَّيلِ وفَريقٌ بِالنَّهار — يَحرُسونَكَ مِن أخطارٍ لا تَراها ولا تَعلَمُ عَدَدَها: مِن شَرٍّ كادَ يُصيبُك، ومِن سُقوطٍ كادَ يَحدُث، ومِن أذًى صَرَفَهُ اللهُ عَنكَ وأنتَ نائِم! ويَجتَمِعُ الفَريقانِ في صَلاةِ الفَجرِ وصَلاةِ العَصر، ثُمَّ يَصعَدُ الذينَ باتوا فيكُم فَيَسألُهُم رَبُّهُم — وهو أعلَمُ بِهِم: كَيفَ تَرَكتُم عِبادي؟ فَيَقولون: تَرَكناهُم وهُم يُصَلّون (رواه البخاري). تَخَيَّل: اسمُكَ يُذكَرُ في السَّماء، وحُرّاسُكَ يَشهَدونَ لَكَ عِندَ اللهِ أنَّكَ كُنتَ تُصَلّي!',
    en:'Do you know that with you right now — this very moment — are personal guards made of light? 🛡️ Allah said: ﴾For him are <b>successive angels</b> before and behind him, <b>guarding him by Allah\'s command</b>﴿. Angels take turns watching over you — one shift by night, another by day — guarding you from dangers you never see or count: from a harm that almost struck, a fall that almost happened, an evil Allah turned away while you slept! The two shifts meet at Fajr prayer and Asr prayer; then those who spent the night among you ascend, and their Lord asks them — though He knows best: "How did you leave My servants?" They reply: "We left them praying" (Bukhari). Imagine: your name is mentioned in heaven, and your guards testify before Allah that you were praying!' },
  shubha:{ ar:'بَعضُهُم يَقول: «إذا كانَ مَعي حَفَظة، فَلِماذا تُصيبُني أحياناً أشياءُ مُؤلِمة؟» 🤨', en:'Some say: "If I have guardians, why do painful things still happen to me sometimes?" 🤨' },
  logic:{
    ar:'سُؤالٌ ذَكِيّ! الجَواب: الحَفَظةُ يَحفَظونَكَ <b>مِن أمرِ الله</b> — أيْ بِأمرِهِ وضِمنَ ما كَتَبَهُ لَك. فَهُم يَصرِفونَ عَنكَ آلافَ الأخطارِ التي لا تَعلَمُ بِها أصلاً، فإذا جاءَ قَدَرٌ كَتَبَهُ اللهُ علَيكَ لِحِكمةٍ — تَنَحَّوا عَنه. فَكِّر: كَم مَرّةً تَعَثَّرتَ ولم تَنكَسِر؟ كَم مَرّةً مَرِضتَ ثُمَّ شُفيت؟ كَم خَطَراً مَرَّ بِجانِبِكَ وأنتَ لا تَدري؟! نَحنُ نَعُدُّ المَصائِبَ القَليلةَ التي وَقَعَت، ونَنسى المَلايينَ التي صُرِفَت عَنّا كُلَّ يَوم! والقَليلُ الذي يَقَعُ فيهِ خَيرٌ خَفِيٌّ ورَفعُ دَرَجات — كَما تَعَلَّمنا في رِحلةِ الأمان. فالحَفَظةُ دَليلُ عِنايةِ اللهِ بِك: مَلِكُ المُلوكِ خَصَّصَ لَكَ أنتَ حَرَساً يُلازِمُكَ اللَّيلَ والنَّهار!',
    en:'Smart question! The answer: the guardians protect you <b>by Allah\'s command</b> — within what He has written for you. They turn away thousands of dangers you never even know about; and when a decree Allah wrote for you with wisdom arrives, they step aside. Think: how many times did you trip without breaking a bone? How many times were you sick, then healed? How many dangers passed right by you unnoticed?! We count the few hardships that happen and forget the millions turned away from us every day! And the little that does happen carries hidden good and raised ranks — as we learned in the Journey of Security. The guardians are proof of Allah\'s care for you: the King of kings assigned you a guard accompanying you night and day!' },
  myth:{ claim:{ ar:'«أنا وَحدي ولا أحَدَ يَحرُسُني!»', en:'"I\'m on my own — nobody is guarding me!"' },
         bust:{ ar:'مَعَكَ مُعَقِّباتٌ مِن بَينِ يَدَيكَ ومِن خَلفِك، فَريقانِ يَتَناوَبانِ حِراسَتَكَ بِأمرِ اللهِ لَيلَ نَهار.', en:'You have successive angels before and behind you — two shifts taking turns guarding you by Allah\'s command, night and day.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِمَعناه', en:'Match each item to its meaning' },
    pairs:[
      { tool:{ar:'المُعَقِّبات',en:'The successive angels'}, job:{ar:'حُرّاسٌ يَتَناوَبونَ علَيك',en:'Guards taking shifts over you'} },
      { tool:{ar:'الفَجرُ والعَصر',en:'Fajr and Asr'}, job:{ar:'وَقتُ اجتِماعِ الفَريقَين',en:'When the two shifts meet'} },
      { tool:{ar:'«تَرَكناهُم يُصَلّون»',en:'"We left them praying"'}, job:{ar:'شَهادةُ الحَفَظةِ لَكَ في السَّماء',en:'The guards\' testimony for you in heaven'} },
      { tool:{ar:'الأخطارُ التي لا تَراها',en:'Dangers you never see'}, job:{ar:'تُصرَفُ عَنكَ كُلَّ يَوم',en:'Turned away from you daily'} },
    ] },
  reflection:{
    ayah:'﴿لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ﴾',
    ref:{ ar:'سورة الرَّعد · ١١', en:'Surah Ar-Ra\'d · 11' },
    explain:{
      ar:'«مُعَقِّبات» أيْ مَلائِكةٌ يَتَعاقَبون: يَذهَبُ فَريقٌ ويَأتي فَريق، لا يَترُكونَكَ لَحظة. يَحفَظونَكَ «مِن أمرِ الله» أيْ بِأمرِهِ وإذنِه. فالحِفظُ مِنَ اللهِ، والمَلائِكةُ جُنودُهُ المُنَفِّذون. نَم آمِناً، واستَيقِظ شاكِراً، وقُل: الحَمدُ لِلهِ الذي يَحفَظُني بِجُنودٍ مِن نور.',
      en:'"Successive angels" — they rotate: one shift leaves, another arrives, never leaving you for a moment. They guard you "by Allah\'s command" and His leave. The protection is from Allah, and the angels are His soldiers carrying it out. Sleep safe, wake grateful, and say: praise be to Allah who guards me with soldiers of light.' } },
  card:{ name:{ar:'الحَفَظةُ — المُعَقِّبات',en:'The Guardians — Al-Mu\'aqqibat'}, meaning:{ar:'مَلائِكةٌ يَتَناوَبونَ على حِراسَتِكَ لَيلَ نَهار، يَصرِفونَ عَنكَ الأخطارَ بِأمرِ الله، ويَشهَدونَ لَكَ بِالطّاعة',en:'Angels taking turns guarding you night and day, turning away dangers by Allah\'s command, and testifying to your obedience'} },
  proof:{ ar:'مَلِكُ المُلوكِ خَصَّصَ لي حَرَساً مِن نورٍ لا يُفارِقُني', en:'The King of kings assigned me a guard of light that never leaves me' },
  dua:{ ar:'بِسمِ اللهِ الذي لا يَضُرُّ مَعَ اسمِهِ شَيءٌ في الأرضِ ولا في السَّماء', en:'In the name of Allah, with whose name nothing on earth or in heaven can harm' },
  mission:{ ar:'🛡️ مُهِمّةُ المَحطّة: احرِص هذا الأُسبوعَ على صَلاةِ الفَجرِ والعَصرِ في وَقتِهِما — فَهُما السّاعَتانِ اللَّتانِ يَجتَمِعُ فيهِما حُرّاسُك، وسَيَشهَدونَ لَكَ في السَّماء: «تَرَكناهُ يُصَلّي»!', en:'🛡️ Station Mission: This week, guard Fajr and Asr prayers on time — those are the two hours when your guards gather, and they will testify for you in heaven: "We left him praying"!' },
  badge:{ icon:'👥', color:'#E67E22', title:{ ar:'مَحروسُ النّور', en:'Guarded by Light' } }
},

/* ───────────── 7 · The Noble Scribes ───────────── */
{
  id:'kiraman', num:7, icon:'📝', emoji:'📖', color:'#A65DA6',
  title:{ ar:'رَقيبٌ وعَتيد — الكِرامُ الكاتِبون', en:'Raqib & Atid — The Noble Scribes' },
  narration:{
    ar:'مَعَكَ مُرافِقانِ آخَرانِ لا يُفارِقانِك: عن يَمينِكَ مَلَكٌ يَكتُبُ <b>الحَسَنات</b>، وعن شِمالِكَ مَلَكٌ يَكتُبُ <b>السَّيِّئات</b>. 📝 قالَ اللهُ: ﴿ما يَلفِظُ مِن قَولٍ إلّا لَدَيهِ <b>رَقيبٌ عَتيد</b>﴾ — أيْ ما مِن كَلِمةٍ تَخرُجُ مِن فَمِكَ إلّا وتُسَجَّل! وسَمّاهُمُ اللهُ <b>«كِراماً كاتِبين»</b> — كِرام: شُرَفاءُ مُهَذَّبون. والأجمَلُ مِن ذلك؟ كاتِبُ الحَسَناتِ كَريمٌ مَعَك: إذا هَمَمتَ بِحَسَنةٍ ولم تَفعَلها، كَتَبَها لَكَ حَسَنةً كامِلة! وإذا فَعَلتَها كَتَبَها <b>عَشراً إلى سَبعِمِئةِ ضِعف</b>! أمّا السَّيِّئةُ فَلا تُكتَبُ إلّا واحِدةً، وإذا تَرَكتَها للهِ كُتِبَت لَكَ حَسَنة! ميزانٌ كُلُّهُ كَرَمٌ ورَحمة — لكنه أيضاً يُعَلِّمُنا: كُلُّ كَلِمةٍ مَسؤوليّة.',
    en:'You have two more companions who never leave you: on your right, an angel writing your <b>good deeds</b>; on your left, one writing the <b>bad ones</b>. 📝 Allah said: ﴾Not a word does he utter except that with him is an <b>observer ready</b>﴿ — not one word leaves your mouth without being recorded! Allah called them <b>"noble scribes"</b> — noble: honorable and refined. And the most beautiful part? The writer of good deeds is generous with you: if you intend a good deed but don\'t do it, he writes it as one full good deed! If you do it, he writes it <b>ten to seven hundred times over</b>! A bad deed is written only as one — and if you abandon it for Allah\'s sake, it\'s written as a good deed! A scale made entirely of generosity and mercy — yet it also teaches us: every word is a responsibility.' },
  shubha:{ ar:'بَعضُهُم يَقول: «الكِتابةُ والمُراقَبةُ تُخيفُني! لا أُريدُ أحَداً يُسَجِّلُ علَيَّ كُلَّ شَيء!» 🤨', en:'Some say: "Being watched and recorded scares me! I don\'t want anyone logging everything I do!" 🤨' },
  logic:{
    ar:'فَكِّر بِطَريقةٍ أُخرى: في مُباراةِ كُرةِ القَدَم، اللّاعِبُ المُجتَهِدُ <b>يَفرَحُ</b> بِوُجودِ الكاميراتِ، لِأنَّها سَتُسَجِّلُ أهدافَهُ الرّائِعةَ ولَن يَضيعَ مِنها هَدَفٌ واحِد! الكِرامُ الكاتِبونَ هُم «كاميراتُ» أهدافِكَ الحَقيقيّة: كُلُّ ابتِسامةٍ في وَجهِ أخيك، كُلُّ «الحَمدُ لِله»، كُلُّ مُساعَدةٍ لِأُمِّكَ — مُسَجَّلةٌ لا تَضيعُ أبَداً، حتّى لَو نَسِيَها النّاسُ كُلُّهُم! النّاسُ قد يَنسَونَ جَميلَكَ، لكنَّ رَقيباً وعَتيداً لا يَنسَيانِ حَرفاً. والمُذنِبُ إذا تابَ، فَرِحَ وبُدِّلَت سَيِّئاتُهُ حَسَنات! فالكِتابةُ لَيسَت لِتَخويفِك، بَل لِحِفظِ حُقوقِك: يَومَ القِيامةِ لَن يَظلِمَكَ اللهُ مِثقالَ ذَرّة.',
    en:'Think of it another way: in a football match, the hardworking player is <b>happy</b> the cameras are there, because they\'ll record his brilliant goals and not one will be lost! The noble scribes are the "cameras" of your real goals: every smile at your brother, every "alhamdulillah," every time you helped your mother — recorded, never lost, even if every person forgets it! People may forget your kindness, but Raqib and Atid never miss a letter. And when a sinner repents, his bad deeds are even exchanged for good ones! The recording isn\'t there to scare you — it protects your rights: on the Day of Resurrection Allah will not wrong you by an atom\'s weight.' },
  myth:{ claim:{ ar:'«كَلِماتي الصَّغيرةُ لا قيمةَ لَها ولا يَنتَبِهُ لَها أحَد!»', en:'"My small words don\'t matter — nobody notices them!"' },
         bust:{ ar:'ما يَلفِظُ مِن قَولٍ إلّا لَدَيهِ رَقيبٌ عَتيد — كُلُّ كَلِمةٍ طَيِّبةٍ كَنزٌ مُسَجَّلٌ لا يَضيعُ أبَداً.', en:'Not a word is uttered without an observer ready — every kind word is a recorded treasure that is never lost.' } },
  match:{
    title:{ ar:'صِل كُلَّ عَمَلٍ بِما يُكتَبُ لَه', en:'Match each deed to how it\'s written' },
    pairs:[
      { tool:{ar:'هَمَمتَ بِحَسَنةٍ ولم تَفعَلها',en:'Intended a good deed, didn\'t do it'}, job:{ar:'حَسَنةٌ كامِلة',en:'One full good deed'} },
      { tool:{ar:'فَعَلتَ الحَسَنة',en:'Did the good deed'}, job:{ar:'عَشرٌ إلى سَبعِمِئةِ ضِعف',en:'Ten to seven hundred times'} },
      { tool:{ar:'فَعَلتَ سَيِّئة',en:'Did a bad deed'}, job:{ar:'تُكتَبُ واحِدةً فَقَط',en:'Written as one only'} },
      { tool:{ar:'تَرَكتَ السَّيِّئةَ لله',en:'Left the bad deed for Allah'}, job:{ar:'تُكتَبُ لَكَ حَسَنة',en:'Written as a good deed'} },
    ] },
  reflection:{
    ayah:'﴿وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ ۝ كِرَامًا كَاتِبِينَ ۝ يَعْلَمُونَ مَا تَفْعَلُونَ﴾',
    ref:{ ar:'سورة الانفِطار · ١٠–١٢', en:'Surah Al-Infitar · 10–12' },
    explain:{
      ar:'وَصَفَهُمُ اللهُ بِـ«كِرام» قَبلَ «كاتِبين» — فَهُم شُرَفاءُ يَكتُبونَ بِعَدلٍ ولا يَزيدونَ علَيكَ حَرفاً. وَوُجودُهُم يُرَبّي فيكَ خُلُقَين: <b>المَسؤوليّةَ</b> (كَلامي مَحسوب) و<b>الحَياءَ</b> (أستَحي أن يَكتُبَ الكِرامُ عَنّي قَبيحاً). قالَ بَعضُ السَّلَف: «أكرِموا كِرامَ الكاتِبين» — فَلا تَجعَل ضُيوفَكَ الكِرامَ يَكتُبونَ إلّا جَميلاً.',
      en:'Allah described them as "noble" before "scribes" — honorable beings who write with justice, never adding a letter against you. Their presence builds two traits in you: <b>responsibility</b> (my words count) and <b>modesty</b> (I\'d be ashamed for the noble ones to record something ugly from me). The early Muslims said: "Honor the noble scribes" — let your noble guests write nothing but beauty.' } },
  card:{ name:{ar:'رَقيبٌ وعَتيد',en:'Raqib & Atid'}, meaning:{ar:'الكِرامُ الكاتِبون: مَلَكُ اليَمينِ يَكتُبُ الحَسَناتِ مُضاعَفة، ومَلَكُ الشِّمالِ يَكتُبُ السَّيِّئةَ واحِدة — سِجِلٌّ عادِلٌ لا يَضيعُ فيهِ خَير',en:'The noble scribes: the angel on the right writes good deeds multiplied; the one on the left writes a bad deed as one — a just record where no good is ever lost'} },
  proof:{ ar:'كُلُّ كَلِمةٍ طَيِّبةٍ أقولُها كَنزٌ مُسَجَّلٌ لا يَضيع', en:'Every kind word I say is a recorded treasure that is never lost' },
  dua:{ ar:'اللهُمَّ اجعَل صَحيفَتي عامِرةً بِالحَسَنات، واغفِر لي ما كُتِبَ مِن سَيِّئات', en:'O Allah, fill my record with good deeds, and forgive the bad ones written in it' },
  mission:{ ar:'📝 مُهِمّةُ المَحطّة: العَب «لُعبةَ المَلَكِ اليَمين»: حاوِل اليومَ أن تُشغِلَ كاتِبَ اليَمينِ بِأكبَرِ عَدَدٍ مِنَ الكَلِماتِ الطَّيِّبة (سَلام، شُكر، ذِكر، كَلِمة لَطيفة)، وعُدَّها قَبلَ النَّوم!', en:'📝 Station Mission: Play the "Right-Angel Game": today, try to keep the scribe on your right busy with as many kind words as you can (greetings, thanks, dhikr, gentle words) — count them before bed!' },
  badge:{ icon:'📖', color:'#A65DA6', title:{ ar:'صاحِبُ الصَّحيفةِ البَيضاء', en:'Owner of the Bright Record' } }
},

/* ───────────── 8 · Angels Who Love You ───────────── */
{
  id:'hubb', num:8, icon:'💛', emoji:'🤲', color:'#D4A017',
  title:{ ar:'مَلائِكةٌ تَدعو لَكَ وتُحِبُّك', en:'Angels Who Pray for You & Love You' },
  narration:{
    ar:'عِندي لَكَ اليومَ مُفاجَآتٌ تُفرِحُ قَلبَك! 💛 هل تَعلَمُ أنَّ في السَّماءِ مَلائِكةً عِظاماً <b>يَدعونَ لَك</b>؟ حَمَلةُ العَرشِ ومَن حَولَهُ <b>يَستَغفِرونَ لِلَّذينَ آمَنوا</b>: «رَبَّنا وَسِعتَ كُلَّ شَيءٍ رَحمةً وعِلماً فاغفِر لِلَّذينَ تابوا»! ومَلائِكةٌ تُؤَمِّنُ على دُعائِكَ لِأخيكَ وتَقول: «ولَكَ بِمِثلِه». وإذا جَلَستَ تَنتَظِرُ الصَّلاةَ في مُصَلّاك، قالَتِ المَلائِكة: «اللهُمَّ اغفِر لَه، اللهُمَّ ارحَمه». وطالِبُ العِلمِ — مِثلُكَ الآنَ وأنتَ تَتَعَلَّم! — <b>تَضَعُ المَلائِكةُ أجنِحَتَها لَهُ رِضاً بِما يَطلُب</b> (رواه أبو داود والترمذي). ومَلائِكةٌ سَيّاحونَ في الطُّرُقِ يَلتَمِسونَ مَجالِسَ الذِّكر، فإذا وَجَدوا قَوماً يَذكُرونَ اللهَ تَنادَوا: «هَلُمّوا إلى حاجَتِكُم!» وحَفّوهُم بِأجنِحَتِهِم إلى السَّماء.',
    en:'Today I have surprises that will gladden your heart! 💛 Did you know that in heaven there are mighty angels <b>praying for you</b>? The Bearers of the Throne and those around it <b>seek forgiveness for the believers</b>: "Our Lord, You embrace all things in mercy and knowledge, so forgive those who repent"! Angels say "ameen" to your dua for your brother, adding: "and for you the same." When you sit waiting for prayer in your prayer place, the angels say: "O Allah, forgive him; O Allah, have mercy on him." And the seeker of knowledge — like you right now as you learn! — <b>the angels lower their wings for him, pleased with what he seeks</b> (Abu Dawud, Tirmidhi). And there are angels roaming the roads searching for gatherings of remembrance; when they find people remembering Allah, they call out: "Come to what you\'re looking for!" and wrap them with their wings up to the sky.' },
  shubha:{ ar:'بَعضُهُم يَقول: «أنا صَغيرٌ ولا أحَدَ يَهتَمُّ بِأمري!» 🤨', en:'Some say: "I\'m just a kid — nobody really cares about me!" 🤨' },
  logic:{
    ar:'حَقّاً؟ تَعالَ نَحسِبها: حينَ تَجلِسُ لِتَقرَأ آيةً أو تَتَعَلَّمَ مَسألةً في الدِّين، فَأنتَ «طالِبُ عِلم» — والمَلائِكةُ تَضَعُ أجنِحَتَها لَك! وحينَ تَدعو لِصَديقِكَ في ظَهرِ الغَيب، مَلَكٌ مُوَكَّلٌ يَقولُ لَك: «ولَكَ بِمِثلِه»! وحينَ تَجلِسُ مَعَ أهلِكَ تَذكُرونَ اللهَ، تُحيطُ بِكُمُ المَلائِكةُ وتَذكُرُكُمُ اللهُ فيمَن عِندَه! يا صَديقي، أنتَ لَستَ «صَغيراً لا يُهتَمُّ بِه» — أنتَ شَخصِيّةٌ مُهِمّةٌ جِدّاً في السَّماء: جُنودٌ مِن نورٍ يَحرُسونَك، وكِرامٌ يَكتُبونَ حَسَناتِك، وحَمَلةُ العَرشِ يَستَغفِرونَ لَك! فَهَل عَرَفتَ الآنَ قَدرَكَ عِندَ رَبِّك؟',
    en:'Really? Let\'s count: when you sit to read a verse or learn a matter of religion, you are a "seeker of knowledge" — and the angels lower their wings for you! When you make dua for your friend in his absence, an appointed angel says to you: "and for you the same"! When you sit with your family remembering Allah, angels surround you and Allah mentions you to those with Him! My friend, you are not "a kid nobody cares about" — you are a VIP in heaven: soldiers of light guard you, noble scribes record your good deeds, and the Bearers of the Throne seek forgiveness for you! Now do you see your worth with your Lord?' },
  myth:{ claim:{ ar:'«لا أحَدَ يَدعو لي أو يُفَكِّرُ فِيَّ!»', en:'"Nobody prays for me or thinks of me!"' },
         bust:{ ar:'حَمَلةُ العَرشِ يَستَغفِرونَ لَك، ومَلائِكةٌ تُؤَمِّنُ على دُعائِك، وأُخرى تَضَعُ أجنِحَتَها لَكَ وأنتَ تَتَعَلَّم!', en:'The Bearers of the Throne seek forgiveness for you, angels say ameen to your duas, and others lower their wings for you as you learn!' } },
  match:{
    title:{ ar:'صِل كُلَّ عَمَلٍ بِهَدِيّةِ المَلائِكة', en:'Match each deed to the angels\' gift' },
    pairs:[
      { tool:{ar:'تَطلُبُ العِلم',en:'Seeking knowledge'}, job:{ar:'تَضَعُ المَلائِكةُ أجنِحَتَها لَك',en:'Angels lower their wings for you'} },
      { tool:{ar:'تَدعو لِأخيكَ غائِباً',en:'Dua for an absent brother'}, job:{ar:'«ولَكَ بِمِثلِه»',en:'"And for you the same"'} },
      { tool:{ar:'تَنتَظِرُ الصَّلاة',en:'Waiting for prayer'}, job:{ar:'«اللهُمَّ اغفِر لَه وارحَمه»',en:'"O Allah, forgive and have mercy on him"'} },
      { tool:{ar:'مَجلِسُ ذِكرِ الله',en:'A gathering of remembrance'}, job:{ar:'تَحُفُّهُ المَلائِكةُ بِأجنِحَتِها',en:'Angels wrap it with their wings'} },
    ] },
  reflection:{
    ayah:'﴿الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيُؤْمِنُونَ بِهِ وَيَسْتَغْفِرُونَ لِلَّذِينَ آمَنُوا﴾',
    ref:{ ar:'سورة غافِر · ٧', en:'Surah Ghafir · 7' },
    explain:{
      ar:'أعظَمُ المَلائِكةِ — حَمَلةُ العَرشِ — مَشغولونَ بِالدُّعاءِ لَكَ أنتَ أيُّها المُؤمِن! لم يَرَوكَ قَطّ، لكنَّهُم يُحِبّونَكَ لِأنَّكَ تُؤمِنُ بِرَبِّهِم. هذِهِ أُخُوّةٌ بَينَ أهلِ السَّماءِ وأهلِ الأرض: هُم يَدعونَ لَنا، ونَحنُ نُحِبُّهُم ونَستَحي مِنهُم ونَقتَدي بِطاعَتِهِم.',
      en:'The greatest angels — the Bearers of the Throne — are busy praying for YOU, believer! They\'ve never seen you, yet they love you because you believe in their Lord. This is brotherhood between the people of heaven and the people of earth: they pray for us, and we love them, feel shy before them, and follow their obedience.' } },
  card:{ name:{ar:'المُستَغفِرونَ لِلمُؤمِنين',en:'Those Seeking Forgiveness for Believers'}, meaning:{ar:'حَمَلةُ العَرشِ ومَن حَولَهُ يَدعونَ لِكُلِّ مُؤمِنٍ تائِب: «رَبَّنا فاغفِر لِلَّذينَ تابوا واتَّبَعوا سَبيلَك»',en:'The Bearers of the Throne and those around it pray for every repentant believer: "Our Lord, forgive those who repent and follow Your way"'} },
  proof:{ ar:'في السَّماءِ مَلائِكةٌ تُحِبُّني وتَدعو لي وأنا لا أراها', en:'In heaven are angels who love me and pray for me, though I cannot see them' },
  dua:{ ar:'اللهُمَّ اجعَلني مِنَ الذينَ تَستَغفِرُ لَهُمُ المَلائِكةُ وتَحُفُّهُم بِأجنِحَتِها', en:'O Allah, make me among those for whom the angels seek forgiveness and whom they wrap with their wings' },
  mission:{ ar:'💛 مُهِمّةُ المَحطّة: ادعُ اللَّيلةَ لِثَلاثةٍ مِن أصحابِكَ في ظَهرِ الغَيب (وهُم لا يَعلَمون)، وتَذَكَّر أنَّ مَلَكاً يَقولُ لَكَ بَعدَ كُلِّ دَعوة: «ولَكَ بِمِثلِه»!', en:'💛 Station Mission: Tonight, make dua for three of your friends without them knowing — and remember that after each dua an angel says to you: "and for you the same"!' },
  badge:{ icon:'🤲', color:'#D4A017', title:{ ar:'مَحبوبُ السَّماء', en:'Beloved of Heaven' } }
},

/* ───────────── 9 · Sensing Their Presence ───────────── */
{
  id:'sakina', num:9, icon:'🕯️', emoji:'🌠', color:'#1ABC9C',
  title:{ ar:'كَيفَ نُحِسُّ بِهِم؟ — مَواطِنُ السَّكينة', en:'How Do We Sense Them? — Places of Tranquility' },
  narration:{
    ar:'سَتَسألُني: «إذا كُنّا لا نَرى المَلائِكة، فهَل يُمكِنُ أن نُحِسَّ بِهِم؟» اسمَع هذِهِ القِصّةَ العَجيبة: 🌠 كانَ الصَّحابِيُّ <b>أُسَيدُ بنُ حُضَير</b> رضي الله عنه يَقرَأُ سورةَ الكَهفِ لَيلاً، وفَرَسُهُ مَربوطةٌ بِجانِبِه، فَجالَتِ الفَرَسُ واضطَرَبَت! فَرَفَعَ رَأسَهُ فَرَأى مِثلَ <b>الظُّلّةِ فيها أمثالُ المَصابيح</b> (سَحابةٍ مُضيئةٍ بِأنوارٍ مُعَلَّقة) تَقتَرِبُ مِنَ السَّماء! فَلَمّا سَكَتَ عنِ القِراءةِ ذَهَبَت. أخبَرَ النَّبِيَّ ﷺ فَقال: «<b>تِلكَ المَلائِكةُ دَنَت لِصَوتِك</b>، ولَو قَرَأتَ لَأصبَحَت يَنظُرُ النّاسُ إلَيها ما تَتَوارى مِنهُم!» (مُتَّفَقٌ عليه). المَلائِكةُ تُحِبُّ القُرآنَ وتَنزِلُ لِسَماعِه! ولِذلك حينَ تَقرَأُ القُرآنَ وتَشعُرُ بِراحةٍ غَريبةٍ في صَدرِك — تِلكَ <b>السَّكينةُ</b> التي تَتَنَزَّلُ ومَعَها المَلائِكة.',
    en:'You\'ll ask me: "If we can\'t see the angels, can we sense them?" Listen to this amazing story: 🌠 The companion <b>Usayd ibn Hudayr</b> (may Allah be pleased with him) was reciting Surah Al-Kahf one night, his horse tied beside him, when the horse suddenly stirred and bolted! He looked up and saw something like <b>a canopy filled with lamps</b> (a glowing cloud hung with lights) descending from the sky! When he stopped reciting, it departed. He told the Prophet ﷺ, who said: "<b>Those were the angels drawing near to your voice</b> — had you kept reciting, people would have seen them by morning, not hidden from them!" (Bukhari & Muslim). The angels love the Quran and come down to listen! That\'s why, when you recite the Quran and feel a strange comfort in your chest — that is the <b>sakinah</b> descending, and with it the angels.' },
  shubha:{ ar:'بَعضُهُم يَقول: «الرّاحةُ التي أشعُرُ بِها عِندَ القُرآنِ مُجَرَّدُ إحساسٍ نَفسِيٍّ عادِيّ!» 🤨', en:'Some say: "The comfort I feel with the Quran is just an ordinary psychological feeling!" 🤨' },
  logic:{
    ar:'فَكِّر: لِماذا هذِهِ «الرّاحةُ» لَها قانونٌ ثابِت؟ تَأتي مَعَ القُرآنِ والذِّكرِ والصَّلاة، وتَغيبُ مَعَ الغَفلةِ والمَعاصي؟ لَو كانَت إحساساً عَشوائيّاً لَجاءَت مَعَ أيِّ شَيء! النَّبِيُّ ﷺ أعطانا «العَلاماتِ»: ما اجتَمَعَ قَومٌ يَتلونَ كِتابَ اللهِ إلّا <b>نَزَلَت علَيهِمُ السَّكينةُ وغَشِيَتهُمُ الرَّحمةُ وحَفَّتهُمُ المَلائِكة</b> (رواه مسلم). ثَلاثُ هَدايا تَنزِلُ مَعاً! والعَكسُ صَحيح: البَيتُ الذي تُهجَرُ فيهِ الصَّلاةُ وتُملَأُ جُدرانُهُ بِالصُّوَرِ المُحَرَّمةِ والمَعاصي، لا تَدخُلُهُ مَلائِكةُ الرَّحمة، فَتَشعُرُ فيهِ بِضيقٍ ووَحشة. جَرِّبها بِنَفسِك: اجعَل غُرفَتَكَ مَكاناً يُذكَرُ فيهِ اللهُ، ولاحِظِ الفَرق!',
    en:'Think: why does this "comfort" follow a fixed law? It comes with Quran, dhikr, and prayer — and vanishes with heedlessness and sins. If it were a random feeling, it would come with anything! The Prophet ﷺ gave us the signs: no people gather reciting Allah\'s Book except that <b>tranquility descends on them, mercy covers them, and the angels surround them</b> (Muslim). Three gifts descending together! And the reverse is true: a home where prayer is abandoned and walls are filled with sin feels tight and desolate, for the angels of mercy do not enter it. Test it yourself: make your room a place where Allah is remembered, and notice the difference!' },
  myth:{ claim:{ ar:'«لا يُمكِنُ أبَداً الإحساسُ بِوُجودِ المَلائِكة!»', en:'"There\'s no way to ever sense the angels\' presence!"' },
         bust:{ ar:'السَّكينةُ عِندَ القُرآنِ والذِّكرِ أثَرُ نُزولِ الرَّحمةِ والمَلائِكة — أثَرٌ تُحِسُّهُ وإن لم تَرَ صاحِبَه.', en:'The tranquility you feel with Quran and dhikr is the effect of descending mercy and angels — an effect you feel even without seeing its bearer.' } },
  match:{
    title:{ ar:'صِل كُلَّ مَكانٍ بِحالِه', en:'Match each place to its state' },
    pairs:[
      { tool:{ar:'مَجلِسُ قُرآنٍ وذِكر',en:'A gathering of Quran & dhikr'}, job:{ar:'سَكينةٌ ورَحمةٌ ومَلائِكة',en:'Tranquility, mercy, and angels'} },
      { tool:{ar:'فَرَسُ أُسَيدِ بنِ حُضَير',en:'Usayd ibn Hudayr\'s horse'}, job:{ar:'اضطَرَبَت لَمّا دَنَتِ المَلائِكة',en:'Stirred when the angels drew near'} },
      { tool:{ar:'الظُّلّةُ فيها مَصابيح',en:'The canopy of lamps'}, job:{ar:'مَلائِكةٌ دَنَت لِصَوتِ القُرآن',en:'Angels drawn by the Quran\'s sound'} },
      { tool:{ar:'بَيتٌ هُجِرَ فيهِ ذِكرُ الله',en:'A home empty of Allah\'s remembrance'}, job:{ar:'ضيقٌ ووَحشة',en:'Tightness and desolation'} },
    ] },
  reflection:{
    ayah:'﴿هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ ۗ وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ﴾',
    ref:{ ar:'سورة الفَتح · ٤', en:'Surah Al-Fath · 4' },
    explain:{
      ar:'تَأمَّل كَيفَ جَمَعَتِ الآيةُ بَينَ «السَّكينةِ» و«جُنودِ السَّماوات»! السَّكينةُ يُنزِلُها اللهُ في قَلبِك، وجُنودُهُ مِنَ المَلائِكةِ تَحُفُّ مَجالِسَ ذِكرِه. فإذا أرَدتَ أن «تُحِسَّ» بِأهلِ السَّماء، اجلِس حَيثُ يَجلِسون: عِندَ القُرآنِ والذِّكرِ والصَّلاة.',
      en:'Notice how the verse joins "tranquility" with "the soldiers of the heavens"! Allah sends sakinah into your heart, and His angelic soldiers surround the gatherings of His remembrance. If you want to "sense" the people of heaven, sit where they sit: with the Quran, dhikr, and prayer.' } },
  card:{ name:{ar:'مَلائِكةُ السَّكينة',en:'Angels of Tranquility'}, meaning:{ar:'مَلائِكةٌ سَيّاحونَ يَلتَمِسونَ مَجالِسَ القُرآنِ والذِّكر، يَحُفّونَها بِأجنِحَتِهِم وتَنزِلُ مَعَهُمُ السَّكينةُ والرَّحمة',en:'Roaming angels who seek out gatherings of Quran and dhikr, surrounding them with their wings while tranquility and mercy descend'} },
  proof:{ ar:'حَيثُ يُذكَرُ اللهُ تَنزِلُ السَّكينةُ وتَحضُرُ المَلائِكة', en:'Wherever Allah is remembered, tranquility descends and the angels attend' },
  dua:{ ar:'اللهُمَّ أنزِل على قَلبي السَّكينة، واجعَل بَيتَنا بَيتاً تَحضُرُهُ مَلائِكةُ الرَّحمة', en:'O Allah, send tranquility upon my heart, and make our home one the angels of mercy attend' },
  mission:{ ar:'🕯️ مُهِمّةُ المَحطّة: اجلِس اللَّيلةَ في مَكانٍ هادِئ واقرَأ صَفحةً مِنَ القُرآنِ بِصَوتٍ جَميلٍ هادِئ، ثُمَّ أغمِض عَينَيكَ وتَأمَّل: ما الذي تَشعُرُ بِهِ في قَلبِك؟ اكتُبهُ في دَفتَرِ الرِّحلة.', en:'🕯️ Station Mission: Tonight, sit somewhere quiet and recite a page of Quran in a calm, beautiful voice. Then close your eyes and reflect: what do you feel in your heart? Write it in your journey journal.' },
  badge:{ icon:'🌠', color:'#1ABC9C', title:{ ar:'صاحِبُ السَّكينة', en:'Friend of Tranquility' } }
},

/* ───────────── 10 · Loving Them & Being Loved ───────────── */
{
  id:'qabul', num:10, icon:'💞', emoji:'📣', color:'#C0392B',
  title:{ ar:'نِداءُ القَبول — حُبٌّ بَينَ السَّماءِ والأرض', en:'The Call of Acceptance — Love Between Heaven & Earth' },
  narration:{
    ar:'وَصَلنا إلى آخِرِ مَحطّةٍ وأجمَلِها! 💞 اسمَع هذا الحَديثَ وتَخَيَّلِ المَشهَد: قالَ النَّبِيُّ ﷺ: «إنَّ اللهَ إذا أحَبَّ عَبداً <b>نادى جِبريلَ</b>: إنّي أُحِبُّ فُلاناً فَأحبِبهُ، فَيُحِبُّهُ جِبريل. ثُمَّ <b>يُنادي جِبريلُ في أهلِ السَّماء</b>: إنَّ اللهَ يُحِبُّ فُلاناً فَأحِبّوهُ، فَيُحِبُّهُ أهلُ السَّماء. ثُمَّ <b>يوضَعُ لَهُ القَبولُ في الأرض</b>» (مُتَّفَقٌ عليه). تَخَيَّل: مَلايينُ المَلائِكةِ في السَّماءِ يَسمَعونَ اسمَكَ ويُحِبّونَك! ونَحنُ بِدَورِنا نُحِبُّهُم: نُحِبُّ جِبريلَ الذي حَمَلَ إلَينا القُرآن، وميكائيلَ المُوَكَّلَ بِأرزاقِنا، وحَفَظَتَنا وكُتّابَ حَسَناتِنا. حُبُّهُم جُزءٌ مِن إيمانِنا — ومَن كانَ <b>عَدُوّاً</b> لِلهِ ومَلائِكَتِهِ فإنَّ اللهَ عَدُوٌّ لِلكافِرين. وفي النِّهاية تَذَكَّرِ الدَّرسَ الأكبَر: كُلُّ هذا الجَمالِ والعَظَمةِ والنّورِ… مُجَرَّدُ <b>جُندٍ مِن جُنودِ الله</b>. فَكَيفَ بِمَلِكِ المُلوكِ نَفسِه؟ سُبحانَهُ وتَعالى!',
    en:'We\'ve reached the last and most beautiful station! 💞 Listen to this hadith and picture the scene: the Prophet ﷺ said: "When Allah loves a servant, <b>He calls Jibril</b>: \'I love so-and-so, so love him\' — and Jibril loves him. Then <b>Jibril calls out among the people of heaven</b>: \'Allah loves so-and-so, so love him\' — and the people of heaven love him. Then <b>acceptance is placed for him on earth</b>" (Bukhari & Muslim). Imagine: millions of angels in heaven hearing your name and loving you! And we, in turn, love them: we love Jibril who carried the Quran to us, Mika\'il entrusted with our provision, our guardians and the writers of our good deeds. Loving them is part of our faith — and whoever is an <b>enemy</b> of Allah and His angels, Allah is an enemy of the disbelievers. Finally, remember the greatest lesson: all this beauty, greatness, and light… is merely <b>one of Allah\'s armies</b>. So what of the King of kings Himself? Glory be to Him!' },
  shubha:{ ar:'بَعضُهُم يَقول: «وما الذي سَيَتَغَيَّرُ في حَياتي إذا آمَنتُ بِالمَلائِكة؟» 🤨', en:'Some say: "What would actually change in my life if I believed in the angels?" 🤨' },
  logic:{
    ar:'كُلُّ شَيء! تَعالَ نُراجِع كَنزَ رِحلَتِنا: عَرَفتَ أنَّكَ <b>لَستَ وَحدَكَ أبَداً</b> (حَولَكَ حَفَظةٌ وكَتَبة)، فَذَهَبَتِ الوَحشة. وعَرَفتَ أنَّ كَلامَكَ <b>مُسَجَّل</b>، فَصِرتَ تَنتَقي كَلِماتِكَ كَالجَواهِر. وعَرَفتَ أنَّ القُرآنَ وَصَلَكَ بِسِلسِلةِ <b>أُمَناء</b>، فازدَدتَ يَقيناً بِكِتابِك. وعَرَفتَ أنَّ مَلائِكةً <b>تَدعو لَك</b>، فامتَلَأ قَلبُكَ مَحَبّةً. وعَرَفتَ <b>مَواطِنَ السَّكينة</b>، فَصارَ عِندَكَ مَكانٌ تَهرُبُ إلَيهِ كُلَّما ضاقَ صَدرُك. وفَوقَ ذلكَ كُلِّه: كُلَّما تَأمَّلتَ عَظَمةَ المَلائِكةِ ازدَدتَ تَعظيماً لِخالِقِهِم. هذا هو الإيمانُ بِالمَلائِكة: لَيسَ مَعلومةً تُحفَظ، بَل نوراً يَملَأُ الحَياة!',
    en:'Everything! Let\'s review our journey\'s treasure: you learned you are <b>never alone</b> (guardians and scribes surround you) — so loneliness left. You learned your words are <b>recorded</b> — so you pick them like jewels. You learned the Quran reached you through a chain of <b>trustworthy bearers</b> — so your certainty in your Book grew. You learned angels <b>pray for you</b> — so your heart filled with love. You learned the <b>places of tranquility</b> — so you have a refuge whenever your chest tightens. Above all: the more you contemplate the angels\' greatness, the more you magnify their Creator. That is belief in the angels: not a fact to memorize, but a light that fills your life!' },
  myth:{ claim:{ ar:'«الإيمانُ بِالمَلائِكةِ مَعلومةٌ لا تُغَيِّرُ شَيئاً في حَياتي!»', en:'"Believing in angels is trivia that changes nothing in my life!"' },
         bust:{ ar:'مَن عاشَ بَينَ حَفَظةٍ يَحرُسونَهُ وكِرامٍ يَكتُبونَ ومَلائِكةٍ تَدعو لَه — عاشَ شُجاعاً مُهَذَّباً مُطمَئِنّاً مُحِبّاً لله.', en:'Whoever lives among guardians protecting him, nobles recording, and angels praying for him — lives brave, well-mannered, at peace, and in love with Allah.' } },
  match:{
    title:{ ar:'صِل كُلَّ خُطوةٍ في نِداءِ القَبول', en:'Match each step of the call of acceptance' },
    pairs:[
      { tool:{ar:'اللهُ يُحِبُّ عَبداً',en:'Allah loves a servant'}, job:{ar:'يُنادي جِبريل: أحبِبهُ',en:'He calls Jibril: love him'} },
      { tool:{ar:'جِبريلُ يُحِبُّه',en:'Jibril loves him'}, job:{ar:'يُنادي في أهلِ السَّماء',en:'He calls out among heaven\'s people'} },
      { tool:{ar:'أهلُ السَّماءِ يُحِبّونَه',en:'Heaven\'s people love him'}, job:{ar:'يوضَعُ لَهُ القَبولُ في الأرض',en:'Acceptance is placed for him on earth'} },
      { tool:{ar:'عَظَمةُ الجُنود',en:'The soldiers\' greatness'}, job:{ar:'تُعَرِّفُكَ بِعَظَمةِ المَلِك',en:'Shows you the King\'s greatness'} },
    ] },
  reflection:{
    ayah:'﴿مَن كَانَ عَدُوًّا لِّلَّهِ وَمَلَائِكَتِهِ وَرُسُلِهِ وَجِبْرِيلَ وَمِيكَالَ فَإِنَّ اللَّهَ عَدُوٌّ لِّلْكَافِرِينَ﴾',
    ref:{ ar:'سورة البَقَرة · ٩٨', en:'Surah Al-Baqarah · 98' },
    explain:{
      ar:'حُبُّ المَلائِكةِ مِنَ الإيمان، وعَداوَتُهُم كُفر. فَهُم أحبابُ اللهِ المُطيعون، ووَسائِطُ خَيرِهِ إلى عِبادِه: بِهِم نَزَلَ الوَحي، وبِهِم يَنزِلُ المَطَر، وبِهِم نُحفَظُ ونُكتَبُ حَسَناتُنا. فأحِبَّهُم بِقَلبِك، وتَأدَّب بِحَضرَتِهِم، واسعَ أن يُنادى بِاسمِكَ يَوماً في السَّماء!',
      en:'Loving the angels is part of faith; enmity toward them is disbelief. They are Allah\'s obedient beloved ones and the channels of His goodness to His servants: through them revelation descended, rain falls, we are guarded, and our good deeds are written. So love them with your heart, behave well in their presence, and strive for your name to be called out in heaven one day!' } },
  card:{ name:{ar:'نِداءُ القَبول',en:'The Call of Acceptance'}, meaning:{ar:'إذا أحَبَّ اللهُ عَبداً نادى جِبريلَ فَأحَبَّه، ثُمَّ نادى في أهلِ السَّماءِ فَأحَبّوه، ثُمَّ يوضَعُ لَهُ القَبولُ في الأرض',en:'When Allah loves a servant, He calls Jibril who loves him, then heaven\'s people are called and love him, then acceptance is placed for him on earth'} },
  proof:{ ar:'أحِبُّ مَلائِكةَ اللهِ، وأسعى لِيُنادى بِاسمي في السَّماء', en:'I love Allah\'s angels, and I strive for my name to be called in heaven' },
  dua:{ ar:'اللهُمَّ ارزُقني حُبَّكَ وحُبَّ مَلائِكَتِكَ وحُبَّ كُلِّ عَمَلٍ يُقَرِّبُني إلى حُبِّك', en:'O Allah, grant me Your love, the love of Your angels, and the love of every deed that brings me closer to Your love' },
  mission:{ ar:'💞 مُهِمّةُ الخِتام: أمسِك دَفتَرَكَ واكتُب ثَلاثةَ أشياءَ سَتَفعَلُها لِيُحِبَّكَ أهلُ السَّماء (مَثَلاً: بِرُّ والِدَيك، صَلاتُكَ في وَقتِها، كَلِمةٌ طَيِّبة) — ثُمَّ ابدَأ بِها مِن هذا اليَوم. وهَنيئاً لَكَ إتمامُ رِحلةِ جُنودِ النّور! 🏆', en:'💞 Final Mission: Take your notebook and write three things you\'ll do so heaven\'s people love you (e.g., honoring your parents, praying on time, a kind word) — then start today. Congratulations on completing the Journey of the Soldiers of Light! 🏆' },
  badge:{ icon:'📣', color:'#C0392B', title:{ ar:'مُنادى بِاسمِهِ في السَّماء', en:'Named in the Heavens' } }
},
];
