/* ════════════════════════════════════════════════════════════════
   رحلة التوحيد — قصر الملك الواحد · City of Tawheed
   10 stations: logical proofs of Tawheed (Ahl al-Sunnah wa'l-Jama'ah).
   Narrated by Yusuf. Each station:
     narration · shubha(false claim) · logic(+analogy) · myth(flip)
     match(mini-game) · reflection(ayah) · nameOfAllah · proof(key)
     dua · mission · badge
   ════════════════════════════════════════════════════════════════ */
window.TAWHEED_STATIONS = [

/* ───────────── 1 · The Emperor's Question ───────────── */
{
  id:'emperor', num:1, icon:'👑', emoji:'💭', color:'#6C5CE7', scene:'palace',
  title:{ ar:'سُؤالُ الإمبراطور — مُناظَرةُ الباقِلّاني', en:"The Emperor's Question — Al-Baqillani's Debate" },
  narration:{
    ar:'أرسَلَ الخَليفةُ الطّائِعُ لِلَّهِ العالِمَ الذَّكِيَّ <b>الباقِلّاني</b> إلى بَلاطِ مَلِكِ الرّومِ لِيُناظِرَ كِبارَ القِسّيسين. أرادوا إحراجَهُ، فأرادَ هو أن يُعَلِّمَهُم دَرساً بِالعَقل. فالتَفَتَ إلى كَبيرِ القِسّيسينَ وسَألَهُ بِكُلِّ هُدوء: «كيفَ حالُ زَوجَتِكَ وأولادِك؟» فاحمَرَّ وَجهُ القِسّيسِ غَضَباً وقال: «مَه! القِسّيسُ المُقَدَّسُ أرفَعُ وأطهَرُ مِن أن يَتَزَوَّجَ ويُنجِبَ الأولاد!» فابتَسَمَ الباقِلّاني وقال الجُملةَ التي أسكَتَتِ الجَميع: «إذا كُنتُم تُنَزِّهونَ قِسّيساً عَنِ الزَّوجةِ والوَلَد، فكيفَ تَنسُبونَ الزَّوجةَ والوَلَدَ إلى <b>رَبِّ العالَمين</b>؟!»',
    en:'Caliph At-Ta\'i\' Lillah sent the brilliant scholar <b>Al-Baqillani</b> to the court of the Roman king to debate the senior priests. They wanted to embarrass him — so he decided to teach them a lesson with pure logic. He turned to the head priest and calmly asked: "How are your wife and children?" The priest\'s face went red with anger: "Stop! A holy priest is far too pure to marry and have children!" Al-Baqillani smiled and said the sentence that silenced everyone: "If you hold a mere priest above having a wife and child, how can you attribute a wife and a son to the <b>Lord of all the Worlds</b>?!"' },
  shubha:{ ar:'بَعضُ النّاسِ يَقولون: لِلَّهِ وَلَدٌ أو زَوجة، تَعالى اللهُ عَن ذلك! 🤨', en:'Some people say: Allah has a son or a wife — far exalted is Allah above that! 🤨' },
  logic:{
    ar:'فَكِّر مَعي: لماذا يَتَزَوَّجُ النّاسُ ويُنجِبون؟ لِأنهُم <b>يَحتاجون</b>: يَحتاجونَ مَن يُؤنِسُهُم، ومَن يُعينُهُم، ومَن يَبقى بَعدَهُم لِأنهُم يَموتون! لكنَّ اللهَ <b>الكامِلُ الغَنِيُّ</b> الذي لا يَحتاجُ شَيئاً ولا يَموتُ أبَداً — فَلِماذا يَحتاجُ وَلَداً؟! الذي يَملِكُ كُلَّ شَيءٍ لا يَنقُصُهُ شَيء. نِسبةُ الوَلَدِ لِلَّهِ نَقصٌ، واللهُ هو الكامِلُ المُتَعالي عَن كُلِّ نَقص.',
    en:'Think with me: why do people marry and have children? Because they <b>need</b>: they need someone to comfort them, to help them, and to remain after them — because they die! But Allah is <b>Perfect and Free of all need</b>; He needs nothing and never dies — so why would He need a son?! The One who owns everything lacks nothing. Attributing a son to Allah implies a shortcoming, and Allah is the Perfect One, far above every shortcoming.' },
  myth:{ claim:{ ar:'«اللهُ يَحتاجُ وَلَداً مِثلَنا!»', en:'"Allah needs a son like us!"' },
         bust:{ ar:'الوَلَدُ حاجةٌ ونَقص، واللهُ الغَنِيُّ الكامِلُ لا يَحتاجُ شَيئاً.', en:'A son is a need and a lack; Allah, the Self-Sufficient and Perfect, needs nothing.' } },
  match:{
    title:{ ar:'صِل كُلَّ صِفةٍ بِصاحِبِها', en:'Match each trait to who it belongs to' },
    pairs:[
      { tool:{ar:'يَحتاجُ ويَموت',en:'Needs and dies'}, job:{ar:'الإنسانُ المَخلوق',en:'The created human'} },
      { tool:{ar:'غَنِيٌّ لا يَحتاج',en:'Free of all need'}, job:{ar:'اللهُ الخالِق',en:'Allah the Creator'} },
      { tool:{ar:'يَطلُبُ وَلَداً يُعينُه',en:'Wants a child to help him'}, job:{ar:'الضَّعيفُ الفاني',en:'The weak and mortal'} },
    ] },
  reflection:{
    ayah:'﴿لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾',
    ref:{ ar:'سورة الإخلاص · ٣-٤', en:'Surah Al-Ikhlas · 3-4' },
    explain:{
      ar:'في سورةِ الإخلاصِ يُعَلِّمُنا اللهُ التَّوحيدَ كامِلاً: «لَم يَلِد» فليسَ لهُ وَلَد، «ولَم يولَد» فليسَ لهُ والِد، «ولَم يَكُن لهُ كُفُواً أحَد» فليسَ لهُ شَبيهٌ ولا نَظير. اللهُ واحِدٌ أحَدٌ كامِلٌ لا يُشبِهُهُ شَيء.',
      en:'In Surah Al-Ikhlas, Allah teaches us complete Tawheed: "He does not beget" — He has no son; "nor was He begotten" — He has no parent; "and there is none equal to Him" — He has no likeness or rival. Allah is One, Unique, Perfect — nothing resembles Him.' } },
  nameOfAllah:{ name:{ar:'الصَّمَد',en:'As-Samad'}, meaning:{ar:'الكامِلُ الغَنِيُّ الذي يَحتاجُهُ كُلُّ شَيءٍ ولا يَحتاجُ هو إلى شَيء',en:'The Self-Sufficient Master, whom all need while He needs nothing'} },
  proof:{ ar:'الكامِلُ الغَنِيُّ لا يَحتاجُ وَلَداً', en:'The Perfect and Self-Sufficient needs no son' },
  dua:{ ar:'قُل هو اللهُ أحَد، اللهُ الصَّمَد', en:'Say: He is Allah, the One; Allah, the Eternal Refuge' },
  mission:{ ar:'👑 مُهِمّةُ المَحطّة: فَكِّر في أيِّ شَيءٍ تَحتاجُهُ أنتَ اليَوم (طَعام، نَوم، مُساعَدة). الآن تَذَكَّر: اللهُ لا يَحتاجُ شَيئاً مِن هذا أبَداً! قُل: «اللهُ الصَّمَدُ الغَنِيّ».', en:'👑 Station Mission: Think of anything you needed today (food, sleep, help). Now remember: Allah needs none of these, ever! Say: "Allah, the Self-Sufficient, the Free of need."' },
  badge:{ icon:'👑', color:'#6C5CE7', title:{ ar:'حَكيمُ البَلاط', en:'Court Sage' } }
},

/* ───────────── 2 · The Captured Pilot ───────────── */
{
  id:'pilot', num:2, icon:'✈️', emoji:'⛓️', color:'#2980B9', scene:'court',
  title:{ ar:'الطَّيّارُ الأسير — مُناظَرةُ الباقِلّاني', en:'The Captured Pilot — Al-Baqillani Again' },
  narration:{
    ar:'مَرّةً أُخرى وَقَفَ <b>الباقِلّاني</b> أمامَ القِسّيسينَ الذينَ زَعَموا أنَّ إلهَهُم أُمسِكَ وعُذِّبَ وقُتِل — تَعالى اللهُ عَن قَولِهِم! فسَألَهُم الباقِلّاني بِذَكاء: «أخبِروني، حينَ كانَ — في زَعمِكُم — مَأسوراً مَربوطاً، <b>مَن كانَ يُدَبِّرُ الكَون؟</b> مَن كانَ يُطلِعُ الشَّمسَ ويُنزِلُ المَطَرَ ويُمسِكُ السَّماءَ أن تَقَعَ؟» فَسَكَتوا ولم يَجِدوا جَواباً. فقال: «إلهٌ يُؤسَرُ ويُقتَلُ ليسَ إلهاً، بَل الإلهُ الحَقُّ هو <b>الحَيُّ القَيّومُ</b> الذي لا يَموتُ ولا يَنامُ ولا يَعجِزُ أبداً!»',
    en:'Once again <b>Al-Baqillani</b> stood before the priests who claimed their god was seized, tortured, and killed — far exalted is Allah above their words! Al-Baqillani cleverly asked them: "Tell me — while he was, as you claim, captured and tied up, <b>who was running the universe?</b> Who was raising the sun, sending the rain, and holding the sky from falling?" They fell silent, with no answer. He said: "A god who can be captured and killed is no god at all. The True God is <b>the Ever-Living, the Sustainer</b>, who never dies, never sleeps, and is never powerless!"' },
  shubha:{ ar:'بَعضُهُم يَقول: الإلهُ يُمكِنُ أن يُؤسَرَ أو يُقتَلَ أو يَضعُف! 🤨', en:'Some say: God can be captured, or killed, or grow weak! 🤨' },
  logic:{
    ar:'تَخَيَّل <b>طَيّاراً مَربوطاً</b> بِالحِبالِ في زاوِيةِ الطّائِرة — هل يَستَطيعُ أن يَقودَها؟ مُستَحيل! ستَسقُطُ الطّائِرةُ فَوراً. والكَونُ أعظَمُ مِن ألفِ طائِرة: شَمسٌ ونُجومٌ وبِحارٌ ورِياح، تَعمَلُ كُلَّ لَحظةٍ بِنِظامٍ دَقيق. فمَن يُدَبِّرُها يَجِبُ أن يَكونَ <b>حَيّاً قَوِيّاً حاضِراً</b> لا يَغفُلُ لَحظة. الإلهُ المَأسورُ العاجِزُ تَناقُضٌ مُضحِك — كَطَيّارٍ مَربوطٍ يَقودُ طائِرة!',
    en:'Imagine a <b>pilot tied up</b> with ropes in the corner of the plane — can he fly it? Impossible! The plane would crash instantly. And the universe is greater than a thousand planes: sun, stars, seas and winds, working every moment in precise order. So the One who runs it must be <b>alive, powerful, and present</b>, never distracted for a moment. A captured, helpless god is a laughable contradiction — like a tied-up pilot flying a plane!' },
  myth:{ claim:{ ar:'«الإلهُ يُمكِنُ أن يُؤسَرَ ويَعجِز!»', en:'"God can be captured and made helpless!"' },
         bust:{ ar:'المَأسورُ العاجِزُ لا يُدَبِّرُ الكَون. الإلهُ الحَقُّ حَيٌّ قَيّومٌ لا يَعجِز.', en:'A helpless captive cannot run the universe. The True God is Ever-Living and never powerless.' } },
  match:{
    title:{ ar:'صِل كُلَّ حالٍ بِنَتيجَتِه', en:'Match each state to its result' },
    pairs:[
      { tool:{ar:'طَيّارٌ مَربوط',en:'A tied-up pilot'}, job:{ar:'تَسقُطُ الطّائِرة',en:'The plane crashes'} },
      { tool:{ar:'إلهٌ يُؤسَرُ ويَموت',en:'A captured, dying god'}, job:{ar:'لا يَصلُحُ إلهاً',en:'Cannot be God'} },
      { tool:{ar:'الحَيُّ القَيّوم',en:'The Ever-Living Sustainer'}, job:{ar:'يُدَبِّرُ الكَونَ دائِماً',en:'Runs the universe always'} },
    ] },
  reflection:{
    ayah:'﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ﴾',
    ref:{ ar:'سورة البَقَرة · ٢٥٥ (آيةُ الكُرسي)', en:'Surah Al-Baqarah · 255 (Ayat al-Kursi)' },
    explain:{
      ar:'«الحَيُّ» الذي لا يَموتُ أبَداً، «القَيّومُ» القائِمُ على كُلِّ شَيءٍ يُدَبِّرُهُ. «لا تَأخُذُهُ سِنَةٌ ولا نَوم» أيْ لا يَغفُلُ ولا يَنامُ لَحظةً واحِدة. هذا هو الإلهُ الحَقُّ: قَوِيٌّ حَيٌّ لا يَعجِزُ ولا يَغيب.',
      en:'"The Ever-Living" who never dies; "the Sustainer" who maintains all things. "Neither drowsiness nor sleep overtakes Him" — He is never heedless, never asleep for a single moment. This is the True God: powerful, living, never helpless, never absent.' } },
  nameOfAllah:{ name:{ar:'الْحَيُّ القَيّوم',en:'Al-Hayy, Al-Qayyum'}, meaning:{ar:'الحَيُّ الذي لا يَموت، القائِمُ بِنَفسِهِ المُدَبِّرُ لِكُلِّ شَيء',en:'The Ever-Living who never dies, the Self-Subsisting who sustains all things'} },
  proof:{ ar:'المَأسورُ العاجِزُ لا يَكونُ إلهاً', en:'A helpless captive cannot be a god' },
  dua:{ ar:'يا حَيُّ يا قَيّومُ بِرَحمَتِكَ أستَغيث', en:'O Ever-Living, O Sustainer, by Your mercy I seek help' },
  mission:{ ar:'✈️ مُهِمّةُ المَحطّة: حاوِل أن تَفعَلَ شَيئاً مُفيداً ويَداكَ خَلفَ ظَهرِك — صَعبٌ جِدّاً! المَربوطُ عاجِز. ثُمَّ قُل: «اللهُ الحَيُّ القَيّومُ لا يَعجِزُ أبداً».', en:'✈️ Station Mission: Try to do something useful with your hands behind your back — very hard! The bound one is helpless. Then say: "Allah, the Ever-Living Sustainer, is never powerless."' },
  badge:{ icon:'🛩️', color:'#2980B9', title:{ ar:'قائِدُ السَّماء', en:'Sky Commander' } }
},

/* ───────────── 3 · The Ship with Two Captains ───────────── */
{
  id:'twocaptains', num:3, icon:'🚢', emoji:'⚓', color:'#16A085', scene:'sea',
  title:{ ar:'السَّفينةُ بِقُبطانَين — بُرهانُ التَّمانُع', en:'The Ship with Two Captains — The Argument of Exclusion' },
  narration:{
    ar:'يا صَديقي، تَخَيَّل سَفينةً واحِدةً فيها <b>قُبطانانِ</b>! الأوّلُ يَصيح: «يَميناً!» والثّاني يَصيح: «يَساراً!» الأوّلُ يُريدُ التَّوَقُّف، والثّاني يُريدُ الإبحار. ماذا سيَحدُث؟ ستَدورُ السَّفينةُ في مَكانِها ثُمَّ <b>تَغرَق</b>! لا يُمكِنُ أن تَسيرَ سَفينةٌ بِأمرَينِ مُتَعارِضَين. هذا بِالضَّبطِ ما يُعَلِّمُنا اللهُ عَنِ الكَون: لو كانَ لَهُ إلهانِ لَاختَلَفا، ولو اختَلَفا لَفَسَدَ الكَونُ كُلُّه! لكنَّ الكَونَ يَسيرُ بِنِظامٍ مُذهِلٍ مُنذُ آلافِ السِّنين — وهذا دَليلُ أنَّ المُدَبِّرَ <b>واحِدٌ</b> لا شَريكَ لَه.',
    en:'My friend, imagine one ship with <b>two captains</b>! The first shouts "Right!" and the second shouts "Left!" One wants to stop, the other wants to sail. What happens? The ship spins in place and then <b>sinks</b>! A ship cannot run on two opposing commands. This is exactly what Allah teaches us about the universe: if it had two gods they would differ, and if they differed the whole universe would collapse! But the universe runs in stunning order for thousands of years — proof that its Manager is <b>One</b>, with no partner.' },
  shubha:{ ar:'بَعضُهُم يَقول: رُبَّما الكَونُ لهُ أكثَرُ مِن إله! 🤨', en:'Some say: maybe the universe has more than one god! 🤨' },
  logic:{
    ar:'هل لَعِبتَ لُعبةً بِشَخصِيّةٍ واحِدةٍ يَتَحَكَّمُ فيها <b>خَمسةُ لاعِبينَ بِخَمسِ أذرُعِ تَحَكُّم</b> في وَقتٍ واحِد؟ واحِدٌ يَدفَعُها يَميناً وآخَرُ يَساراً وثالِثٌ يُقفِزُ… النَّتيجة: فَوضى! الشَّخصِيّةُ تَتَجَمَّدُ أو تَموت. الأمرُ لا يَستَقيمُ إلّا بِيَدٍ واحِدةٍ تَتَحَكَّم. وكَونُنا أعظَمُ لُعبةٍ على الإطلاق، يَعمَلُ بِلا أيِّ خَطأ — لِأنَّ المُتَحَكِّمَ فيهِ <b>واحِدٌ</b>: اللهُ الواحِدُ القَهّار.',
    en:'Have you ever played a game where <b>five players with five controllers</b> control one character at the same time? One pushes right, another left, a third jumps… the result: chaos! The character freezes or dies. It only works with one hand in control. Our universe is the greatest "game" of all, running with no error at all — because the One in control is <b>One</b>: Allah, the One, the Subduer.' },
  myth:{ claim:{ ar:'«الكَونُ يُمكِنُ أن يُدارَ بِأكثَرَ مِن إله!»', en:'"The universe could be run by more than one god!"' },
         bust:{ ar:'إلهانِ يَختَلِفانِ فَيَفسُدُ الكَون. نِظامُ الكَونِ دَليلُ إلهٍ واحِد.', en:'Two gods would differ and the universe would collapse. Its order proves One God.' } },
  match:{
    title:{ ar:'صِل كُلَّ حالٍ بِنَتيجَتِه', en:'Match each case to its result' },
    pairs:[
      { tool:{ar:'قُبطانانِ لِسَفينة',en:'Two captains, one ship'}, job:{ar:'تَغرَقُ السَّفينة',en:'The ship sinks'} },
      { tool:{ar:'خَمسُ أذرُعِ تَحَكُّم',en:'Five controllers'}, job:{ar:'فَوضى وتَوَقُّف',en:'Chaos and freeze'} },
      { tool:{ar:'مُدَبِّرٌ واحِد',en:'One Manager'}, job:{ar:'كَونٌ مُنَظَّمٌ مُتقَن',en:'An ordered universe'} },
    ] },
  reflection:{
    ayah:'﴿لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا﴾',
    ref:{ ar:'سورة الأنبياء · ٢٢', en:'Surah Al-Anbiya · 22' },
    explain:{
      ar:'يُعطينا اللهُ بُرهاناً عَقلِيّاً واضِحاً: لو كانَ في السَّماواتِ والأرضِ آلِهةٌ غَيرُ اللهِ، لَاختَلَفَت إرادَتُهُم ولَفَسَدَ النِّظامُ وانهارَ الكَون. لكنَّ الكَونَ سَليمٌ مُنَظَّم — فالإلهُ واحِدٌ لا شَريكَ لَه. هذا يُسَمّى «بُرهانَ التَّمانُع».',
      en:'Allah gives us a clear rational proof: if there were gods other than Allah in the heavens and earth, their wills would clash, the order would break, and the universe would collapse. But the universe is sound and ordered — so God is One, with no partner. Scholars call this "the Argument of Mutual Exclusion".' } },
  nameOfAllah:{ name:{ar:'الْواحِدُ القَهّار',en:'Al-Wahid, Al-Qahhar'}, meaning:{ar:'الواحِدُ الذي لا شَريكَ لَه، القاهِرُ فَوقَ كُلِّ شَيء',en:'The One with no partner, the Subduer above all things'} },
  proof:{ ar:'لو كانَ إلهانِ لَفَسَدَ الكَون', en:'If there were two gods, the universe would collapse' },
  dua:{ ar:'لا إلهَ إلّا اللهُ وَحدَهُ لا شَريكَ لَه', en:'There is no god but Allah alone, with no partner' },
  mission:{ ar:'🚢 مُهِمّةُ المَحطّة: اطلُب مِن صَديقَينِ أن يُمسِكا قَلَماً واحِداً ويَكتُبا كَلِمتَينِ مُختَلِفَتَينِ مَعاً — مُستَحيل! القِيادةُ لا تَكونُ إلّا لِواحِد. قُل: «اللهُ الواحِدُ القَهّار».', en:'🚢 Station Mission: Ask two friends to hold one pen and write two different words at once — impossible! Control belongs to only One. Say: "Allah, the One, the Subduer."' },
  badge:{ icon:'⚓', color:'#16A085', title:{ ar:'رُبّانُ التَّوحيد', en:'Tawheed Captain' } }
},

/* ───────────── 4 · The Talking Axe ───────────── */
{
  id:'axe', num:4, icon:'🪓', emoji:'🗿', color:'#E67E22', scene:'temple',
  title:{ ar:'الفَأسُ النّاطِق — إبراهيمُ والأصنام', en:'The Talking Axe — Ibrahim and the Idols' },
  narration:{
    ar:'نَبِيُّ اللهِ <b>إبراهيمُ</b> عليهِ السَّلامُ رأى قَومَهُ يَسجُدونَ لِأصنامٍ مِن حَجَر! فأرادَ أن يُوقِظَ عُقولَهُم. وحينَ خَرَجوا لِعيدِهِم، أمسَكَ الفَأسَ وحَطَّمَ الأصنامَ كُلَّها… إلّا الصَّنَمَ الكَبير، عَلَّقَ الفَأسَ في رَقَبَتِه! رَجَعَ القَومُ غاضِبينَ: «مَن فَعَلَ هذا بِآلِهَتِنا؟!» قال إبراهيمُ بِذَكاءٍ عَجيب: «بَل فَعَلَهُ كَبيرُهُم هذا، <b>فاسألوهُم إن كانوا يَنطِقون!</b>» فأطرَقوا وقالوا في أنفُسِهِم: هذِهِ لا تَنطِقُ ولا تَتَحَرَّك! فقال إبراهيمُ: «أفَتَعبُدونَ ما لا يَنفَعُكُم ولا يَضُرُّكُم؟!»',
    en:'The Prophet <b>Ibrahim</b> (peace be upon him) saw his people bowing to idols made of stone! He wanted to wake up their minds. When they left for their festival, he took an axe and smashed all the idols… except the biggest one — he hung the axe on its neck! The people came back furious: "Who did this to our gods?!" Ibrahim cleverly said: "Rather, this big one did it — <b>so ask them, if they can speak!</b>" They lowered their heads and said to themselves: these cannot speak or move! So Ibrahim said: "Do you worship what cannot benefit or harm you?!"' },
  shubha:{ ar:'بَعضُهُم يَعبُدُ أصناماً أو تَماثيلَ ويَطلُبُ مِنها العَون! 🤨', en:'Some worship idols or statues and ask them for help! 🤨' },
  logic:{
    ar:'تَخَيَّل أنَّ سيّارَتَكَ الحَقيقيّةَ تَعَطَّلَت، فَجِئتَ بِـ<b>سيّارةٍ بلاستيكيّةٍ صَغيرةٍ لُعبة</b> وقُلتَ لها: «اسحَبي سيّارَتي وأصلِحيها!» هل تَفعَل؟! إنها لا تَتَحَرَّكُ بِنَفسِها أصلاً! فكيفَ تَطلُبُ العَونَ مِنَ الأصنامِ وهي لا تَسمَعُ ولا تَتَحَرَّكُ ولا تَدفَعُ عَن نَفسِها الغُبار؟ الذي لا يَملِكُ لِنَفسِهِ شَيئاً، كيفَ يَملِكُ لَكَ شَيئاً؟ العِبادةُ لا تَكونُ إلّا لِلقادِرِ النّافِعِ الضّارّ: <b>الله</b>.',
    en:'Imagine your real car breaks down, so you bring a <b>tiny plastic toy car</b> and say to it: "Tow my car and fix it!" Would it? It can\'t even move itself! So how can you ask idols for help when they can\'t hear, can\'t move, and can\'t even brush dust off themselves? The one who owns nothing for himself — how could he own anything for you? Worship belongs only to the One able to benefit and harm: <b>Allah</b>.' },
  myth:{ claim:{ ar:'«التِّمثالُ يَنفَعُني ويَحمِيني!»', en:'"The statue benefits and protects me!"' },
         bust:{ ar:'ما لا يَسمَعُ ولا يَتَحَرَّكُ لا يَنفَعُ ولا يَضُرّ. العِبادةُ لِلهِ وَحدَه.', en:'What cannot hear or move can neither help nor harm. Worship is for Allah alone.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِحَقيقَتِه', en:'Match each thing to its reality' },
    pairs:[
      { tool:{ar:'صَنَمٌ مِن حَجَر',en:'A stone idol'}, job:{ar:'لا يَسمَعُ ولا يَنفَع',en:'Cannot hear or help'} },
      { tool:{ar:'سيّارةٌ لُعبة',en:'A toy car'}, job:{ar:'لا تَسحَبُ سيّارةً حَقيقيّة',en:"Can't tow a real car"} },
      { tool:{ar:'اللهُ القادِر',en:'Allah the Able'}, job:{ar:'يَنفَعُ ويَستَحِقُّ العِبادة',en:'Benefits and deserves worship'} },
    ] },
  reflection:{
    ayah:'﴿بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِن كَانُوا يَنطِقُونَ﴾',
    ref:{ ar:'سورة الأنبياء · ٦٣', en:'Surah Al-Anbiya · 63' },
    explain:{
      ar:'بِهذِهِ الكَلِمةِ الذَّكيّةِ أوقَفَ إبراهيمُ قَومَهُ أمامَ الحَقيقة: أصنامُهُم لا تَنطِقُ ولا تَتَحَرَّك، فكيفَ تَكونُ آلِهة؟! الدَّليلُ العَقلِيُّ هَدَمَ الشِّركَ في لَحظة. اللهُ وَحدَهُ هو الذي يَسمَعُ ويَقدِرُ ويَستَحِقُّ العِبادة.',
      en:'With this clever word, Ibrahim brought his people face to face with the truth: their idols cannot speak or move — so how could they be gods?! Rational proof demolished idolatry in a moment. Allah alone hears, is able, and deserves worship.' } },
  nameOfAllah:{ name:{ar:'السَّميعُ البَصير',en:'As-Sami\', Al-Basir'}, meaning:{ar:'الذي يَسمَعُ كُلَّ صَوتٍ ويَرى كُلَّ شَيء، بِخِلافِ الأصنامِ الصَّمّاء',en:'The All-Hearing, All-Seeing — unlike the deaf, blind idols'} },
  proof:{ ar:'ما لا يَنفَعُ ولا يَضُرُّ لا يُعبَد', en:'What cannot benefit or harm is not worshipped' },
  dua:{ ar:'إيّاكَ نَعبُدُ وإيّاكَ نَستَعين', en:'You alone we worship, and You alone we ask for help' },
  mission:{ ar:'🪓 مُهِمّةُ المَحطّة: ضَع لُعبةً أمامَكَ واطلُب مِنها أن تُناوِلَكَ كوباً — لن تَفعَل! الجَمادُ لا يَنفَع. ثُمَّ ارفَع يَدَيكَ لِلَّهِ وَحدَهُ وقُل: «إيّاكَ نَعبُدُ وإيّاكَ نَستَعين».', en:'🪓 Station Mission: Put a toy in front of you and ask it to hand you a cup — it won\'t! Lifeless things can\'t help. Then raise your hands to Allah alone and say: "You alone we worship, and You alone we ask for help."' },
  badge:{ icon:'🗿', color:'#E67E22', title:{ ar:'كاسِرُ الأصنام', en:'Idol Breaker' } }
},

/* ───────────── 5 · The Poor Employee ───────────── */
{
  id:'employee', num:5, icon:'🧑‍💼', emoji:'😵‍💫', color:'#27AE60', scene:'office',
  title:{ ar:'المُوَظَّفُ الحائِر — مَثَلُ القُرآن', en:'The Confused Employee — A Quranic Parable' },
  narration:{
    ar:'ضَرَبَ اللهُ في القُرآنِ مَثَلاً عَجيباً يَفهَمُهُ الكَبيرُ والصَّغير! تَخَيَّل مُوَظَّفَينِ: الأوّلُ لَهُ <b>خَمسةُ مُدَراءَ مُتَخاصِمين</b>، كُلُّ واحِدٍ يَأمُرُهُ بِأمرٍ يُناقِضُ الآخَر! هذا يَقول: «اذهَب يَميناً!» والآخَرُ: «بَل يَساراً!» فَيَبقى المِسكينُ حائِراً مُتَعَباً لا يَدري مَن يُرضي، ولا يَنامُ مِنَ القَلَق. أمّا الثّاني فلَهُ <b>مُديرٌ واحِدٌ عادِلٌ واضِح</b>، يَعرِفُ ما يُريدُ بِالضَّبط، فَيَعمَلُ بِراحةٍ وطُمَأنينة. سَألَ اللهُ: هل يَستَوي الاثنان؟! بِالطَّبعِ لا! كذلك مَن يَعبُدُ آلِهةً كَثيرةً يَعيشُ حائِراً، ومَن يَعبُدُ اللهَ <b>الواحِدَ</b> يَعيشُ مُطمَئِنّاً.',
    en:'Allah gave a wonderful parable in the Quran that young and old can grasp! Imagine two employees: the first has <b>five quarrelling bosses</b>, each ordering him to do the opposite of the others! One says "Go right!" the other "No, left!" so the poor man stays confused and exhausted, not knowing whom to please, unable to sleep from worry. The second has <b>one fair, clear boss</b> who knows exactly what he wants, so he works in calm and peace. Allah asked: are the two equal?! Of course not! Likewise, whoever worships many gods lives confused, and whoever worships Allah <b>the One</b> lives in peace.' },
  shubha:{ ar:'بَعضُهُم يَظُنُّ أنَّ عِبادةَ آلِهةٍ كَثيرةٍ تُعطي خِياراتٍ أكثَر! 🤨', en:'Some think worshipping many gods gives more options! 🤨' },
  logic:{
    ar:'فَكِّر: لو كانَ لَكَ <b>خَمسةُ مُدَرِّسينَ</b> كُلُّ واحِدٍ يَأمُرُكَ بِعَكسِ الآخَر، هل ستَرتاح؟ ستَعيشُ في صُداعٍ دائِم! لكنَّ مُدَرِّساً واحِداً يُحِبُّكَ ويَعرِفُ مَصلَحَتَكَ يُريحُ قَلبَكَ. التَّوحيدُ ليسَ قَيداً، بَل هو <b>الرّاحةُ والأمان</b>: قَلبٌ واحِدٌ، وَجهةٌ واحِدة، رَبٌّ واحِدٌ يُحِبُّكَ ويَكفيك. الشِّركُ حَيرةٌ وتَمَزُّق، والتَّوحيدُ سَلامٌ وسَكينة.',
    en:'Think: if you had <b>five teachers</b>, each ordering you the opposite of the other, would you be at ease? You\'d live in a constant headache! But one teacher who loves you and knows what\'s best brings your heart rest. Tawheed is not a restriction — it is <b>peace and security</b>: one heart, one direction, one Lord who loves you and is enough for you. Shirk is confusion and division; Tawheed is peace and tranquillity.' },
  myth:{ claim:{ ar:'«كَثرةُ الآلِهةِ أفضَلُ وأكثَرُ خِيارات!»', en:'"More gods is better — more options!"' },
         bust:{ ar:'كَثرةُ الآلِهةِ حَيرةٌ وتَعَب. الإلهُ الواحِدُ راحةٌ وأمان.', en:'Many gods means confusion and exhaustion. One God means rest and security.' } },
  match:{
    title:{ ar:'صِل كُلَّ حالٍ بِشُعورِه', en:'Match each case to its feeling' },
    pairs:[
      { tool:{ar:'خَمسةُ مُدَراءَ مُتَخاصِمين',en:'Five quarrelling bosses'}, job:{ar:'حَيرةٌ وقَلَق',en:'Confusion and anxiety'} },
      { tool:{ar:'مُديرٌ واحِدٌ عادِل',en:'One fair boss'}, job:{ar:'راحةٌ وطُمَأنينة',en:'Rest and peace'} },
      { tool:{ar:'عِبادةُ اللهِ وَحدَه',en:'Worshipping Allah alone'}, job:{ar:'سَلامٌ في القَلب',en:'Peace in the heart'} },
    ] },
  reflection:{
    ayah:'﴿ضَرَبَ اللَّهُ مَثَلًا رَّجُلًا فِيهِ شُرَكَاءُ مُتَشَاكِسُونَ وَرَجُلًا سَلَمًا لِّرَجُلٍ هَلْ يَسْتَوِيَانِ مَثَلًا﴾',
    ref:{ ar:'سورة الزُّمَر · ٢٩', en:'Surah Az-Zumar · 29' },
    explain:{
      ar:'«مُتَشاكِسون» أيْ مُتَخاصِمونَ مُختَلِفون. ضَرَبَ اللهُ مَثَلَ عَبدٍ يَملِكُهُ شُرَكاءُ مُتَنازِعونَ فَيَتَعَذَّب، وعَبدٍ لِسَيِّدٍ واحِدٍ فَيَرتاح. ثُمَّ سَأل: هل يَستَويان؟ لا! فالتَّوحيدُ راحةٌ، والشِّركُ شَقاء. الحَمدُ لِلَّهِ الذي جَعَلَنا لِرَبٍّ واحِدٍ رَحيم.',
      en:'"Mutashakisun" means quarrelling and at odds. Allah gave the parable of a servant owned by disputing partners, so he suffers, and a servant of one master, so he is at ease. Then He asked: are they equal? No! Tawheed is rest; shirk is misery. Praise be to Allah who made us servants of one merciful Lord.' } },
  nameOfAllah:{ name:{ar:'السَّلام',en:'As-Salam'}, meaning:{ar:'الذي سَلِمَ مِن كُلِّ نَقص، ومِنهُ السَّلامُ والطُّمَأنينةُ لِعِباده',en:'The Source of Peace, free of all flaw, from whom peace and security flow to His servants'} },
  proof:{ ar:'التَّوحيدُ راحةٌ، والشِّركُ حَيرة', en:'Tawheed is peace; shirk is confusion' },
  dua:{ ar:'اللهُمَّ أنتَ السَّلامُ ومِنكَ السَّلام', en:'O Allah, You are Peace, and from You comes peace' },
  mission:{ ar:'🧑‍💼 مُهِمّةُ المَحطّة: تَخَيَّل ثَلاثةَ أشخاصٍ يُنادونَكَ مَعاً بِأوامِرَ مُختَلِفة — كم هذا مُتعِب! الآن تَنَفَّس واشكُر اللهَ أنَّ لَكَ رَبّاً واحِداً. قُل: «اللهُمَّ أنتَ السَّلام».', en:'🧑‍💼 Station Mission: Imagine three people calling you at once with different orders — how exhausting! Now breathe and thank Allah that you have one Lord. Say: "O Allah, You are Peace."' },
  badge:{ icon:'☮️', color:'#27AE60', title:{ ar:'صاحِبُ السَّكينة', en:'Heart of Peace' } }
},

/* ───────────── 6 · The Sunrise Challenge ───────────── */
{
  id:'sunrise', num:6, icon:'🌅', emoji:'👑', color:'#F1C40F', scene:'throne',
  title:{ ar:'تَحَدّي الشُّروق — إبراهيمُ والمَلِكُ المُتَكَبِّر', en:'The Sunrise Challenge — Ibrahim and the Arrogant King' },
  narration:{
    ar:'وَقَفَ نَبِيُّ اللهِ <b>إبراهيمُ</b> أمامَ مَلِكٍ مُتَكَبِّرٍ (هو النَّمرود) ادَّعى أنه إلهٌ يُحيي ويُميت! قال إبراهيمُ: «رَبِّيَ الذي يُحيي ويُميت». فاحتالَ المَلِكُ وأمَرَ بِسَجينَين: قَتَلَ واحِداً وأطلَقَ آخَر، وقال: «أنا أيضاً أُحيي وأُميت!» فلم يُجادِلهُ إبراهيمُ في حِيلَتِهِ، بَل رَفَعَ التَّحَدّي إلى السَّماء وقال بِكُلِّ ثِقة: «<b>فإنَّ اللهَ يَأتي بِالشَّمسِ مِنَ المَشرِق، فَأتِ بِها أنتَ مِنَ المَغرِب!</b>» فَبُهِتَ المَلِكُ وسَكَتَ ولم يَستَطِع! لِأنَّ الإلهَ الحَقَّ يَملِكُ الكَونَ كُلَّه، لا مَدينةً صَغيرة.',
    en:'The Prophet <b>Ibrahim</b> stood before an arrogant king (Nimrud) who claimed to be a god who gives life and death! Ibrahim said: "My Lord is the One who gives life and death." The king played a trick: he brought two prisoners, killed one and freed the other, and said: "I too give life and death!" Ibrahim did not argue over his trick — he raised the challenge to the sky and said with full confidence: "<b>Allah brings the sun from the east, so you bring it from the west!</b>" The king was dumbfounded and fell silent — he couldn\'t! Because the True God owns the entire universe, not just one small city.' },
  shubha:{ ar:'بَعضُهُم يَدَّعي القُوّةَ والسَّيطَرةَ ويَتَكَبَّرُ كأنَّهُ إله! 🤨', en:'Some claim power and control, arrogant as if they were gods! 🤨' },
  logic:{
    ar:'تَخَيَّل شَخصاً مُتَكَبِّراً يَقول: «أنا أملِكُ الإنترنت كُلَّهُ في العالَم!» فَتَقولُ لَه: «حَسَناً، <b>أطفِئهُ لِدَقيقةٍ واحِدةٍ فَقَط</b> عَنِ الكَوكَب!» هل يَستَطيع؟! مُستَحيل! ادِّعاؤُهُ فارِغ. كذلك أيُّ مَخلوقٍ يَتَكَبَّر: قُل لَهُ أوقِفِ الشَّمسَ ثانِيةً، أو امنَع نَبضَ قَلبِكَ لَحظة — لا يَقدِر! القُوّةُ الحَقيقيّةُ والمُلكُ الكامِلُ لِلَّهِ وَحدَهُ <b>رَبِّ العالَمين</b>، الذي يُدَبِّرُ الشَّمسَ والنُّجومَ والأكوانَ بِأمرِه.',
    en:'Imagine an arrogant person saying: "I own all the internet in the world!" You reply: "Fine — <b>switch it off for just one minute</b> across the planet!" Can he? Impossible! His claim is empty. Likewise any creature who is arrogant: tell him to stop the sun for a second, or hold back your own heartbeat for a moment — he can\'t! Real power and complete dominion belong to Allah alone, <b>the Lord of all the Worlds</b>, who runs the sun, the stars, and the universes by His command.' },
  myth:{ claim:{ ar:'«أنا أقوى وأتَحَكَّمُ كأنّي إله!»', en:'"I am powerful and in control, like a god!"' },
         bust:{ ar:'المُدَّعي لا يُحَرِّكُ الشَّمسَ ثانِية. المُلكُ كُلُّهُ لِلَّهِ رَبِّ العالَمين.', en:"The pretender can't move the sun a second. All dominion belongs to Allah, Lord of the Worlds." } },
  match:{
    title:{ ar:'صِل كُلَّ ادِّعاءٍ بِحَقيقَتِه', en:'Match each claim to its reality' },
    pairs:[
      { tool:{ar:'«أملِكُ الإنترنت!»',en:'"I own the internet!"'}, job:{ar:'لا يُطفِئُهُ دَقيقة',en:"Can't switch it off a minute"} },
      { tool:{ar:'مَلِكٌ مُتَكَبِّر',en:'An arrogant king'}, job:{ar:'لا يُحَرِّكُ الشَّمس',en:"Can't move the sun"} },
      { tool:{ar:'رَبُّ العالَمين',en:'Lord of the Worlds'}, job:{ar:'يُدَبِّرُ الكَونَ كُلَّه',en:'Runs the whole universe'} },
    ] },
  reflection:{
    ayah:'﴿فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِي كَفَرَ﴾',
    ref:{ ar:'سورة البَقَرة · ٢٥٨', en:'Surah Al-Baqarah · 258' },
    explain:{
      ar:'«فَبُهِتَ» أيْ انقَطَعَ وسَكَتَ ولم يَجِد جَواباً. حَوَّلَ إبراهيمُ التَّحَدّي إلى أمرٍ لا يَقدِرُ علَيهِ إلّا رَبُّ الكَون: تَحريكُ الشَّمس. الإلهُ الحَقُّ لَهُ المُلكُ المُطلَقُ على كُلِّ شَيء، فلا يُعجِزُهُ شَيءٌ في السَّماءِ ولا في الأرض.',
      en:'"Buhita" means he was struck silent, with no answer. Ibrahim turned the challenge to something only the Lord of the universe can do: moving the sun. The True God has absolute dominion over everything; nothing in the heavens or earth is beyond Him.' } },
  nameOfAllah:{ name:{ar:'الْمَلِك',en:'Al-Malik'}, meaning:{ar:'المالِكُ الحَقُّ لِكُلِّ شَيء، صاحِبُ المُلكِ والسُّلطانِ المُطلَق',en:'The True King and Owner of everything, possessor of absolute dominion'} },
  proof:{ ar:'الإلهُ الحَقُّ يَملِكُ الكَونَ كُلَّه', en:'The True God owns the entire universe' },
  dua:{ ar:'لَكَ المُلكُ ولَكَ الحَمدُ وأنتَ على كُلِّ شَيءٍ قَدير', en:'Yours is the dominion and praise, and You are able to do all things' },
  mission:{ ar:'🌅 مُهِمّةُ المَحطّة: حاوِل أن تَأمُرَ الشَّمسَ أن تَتَأخَّرَ دَقيقةً في غُروبِها — لن تُطيعَك! المُلكُ لِلَّهِ وَحدَه. قُل: «لَكَ المُلكُ ولَكَ الحَمد».', en:'🌅 Station Mission: Try ordering the sun to delay its setting by a minute — it won\'t obey you! Dominion belongs to Allah alone. Say: "Yours is the dominion and the praise."' },
  badge:{ icon:'🌄', color:'#F1C40F', title:{ ar:'مالِكُ المَشرِق', en:'Master of the Dawn' } }
},

/* ───────────── 7 · God Does Not Get Hungry ───────────── */
{
  id:'hungry', num:7, icon:'🍽️', emoji:'🔌', color:'#E74C3C', scene:'feast',
  title:{ ar:'الإلهُ لا يَجوع — مَحطّةُ الصَّمَد', en:'God Does Not Get Hungry — The Self-Sufficient' },
  narration:{
    ar:'يا صَديقي، بَعضُ النّاسِ عَبَدوا بَشَراً ظَنّوهُ إلهاً، كَما عَبَدَ قَومٌ عيسى ابنَ مَريَمَ عليهِ السَّلام — وهو نَبِيٌّ كَريمٌ بَريءٌ مِن ذلك! فَجاءَ القُرآنُ بِدَليلٍ بَسيطٍ يَفهَمُهُ الطِّفل: عيسى وأُمُّهُ <b>كانا يَأكُلانِ الطَّعام</b>! ومَن يَأكُلُ الطَّعامَ فهو يَجوعُ ويَعطَشُ ويَحتاجُ ويَتعَبُ ويَنام. والإلهُ الحَقُّ <b>الصَّمَدُ</b> لا يَجوعُ ولا يَحتاجُ شَيئاً أبَداً! فكيفَ يَكونُ المُحتاجُ إلهاً يُعبَد؟ الدَّليلُ في طَبَقِ الطَّعام!',
    en:'My friend, some people worshipped a human they imagined to be a god — as a group worshipped Isa (Jesus), son of Maryam — yet he was a noble prophet, innocent of that! So the Quran came with a simple proof a child can grasp: Isa and his mother <b>both used to eat food</b>! And whoever eats food gets hungry and thirsty, needs things, gets tired, and sleeps. But the True God, <b>the Self-Sufficient</b>, never hungers and never needs anything! So how can the needy one be a god to be worshipped? The proof is right there on the dinner plate!' },
  shubha:{ ar:'بَعضُهُم يَعبُدُ بَشَراً يَأكُلُ ويَنامُ ويَتعَب! 🤨', en:'Some worship a human who eats, sleeps and gets tired! 🤨' },
  logic:{
    ar:'تَخَيَّل آلةً تَقولُ بِفَخر: «أنا <b>مَصدَرُ الطّاقةِ الأعظَمُ</b> في العالَم!» ثُمَّ تَنظُرُ خَلفَها فَتَجِدُها <b>مَوصولةً بِسِلكٍ إلى الحائِط</b>! لو نَزَعتَ السِّلكَ لَانطَفَأَت فَوراً. هذِهِ ليسَت مَصدَرَ الطّاقة، بَل هي مُحتاجةٌ لِلطّاقة! كذلك مَن يَأكُلُ ويَشرَبُ ويَنامُ فهو «مَوصولٌ» بِحاجاتٍ كَثيرة، يَحتاجُ غَيرَه. الإلهُ الحَقُّ هو <b>الغَنِيُّ</b> الذي يُطعِمُ ولا يُطعَم، ويُعينُ ولا يَحتاجُ عَوناً.',
    en:'Imagine a machine proudly saying: "I am the <b>greatest power source</b> in the world!" Then you look behind it and find it <b>plugged into the wall by a cord</b>! Pull the cord and it switches off instantly. It is not the source of power — it needs power! Likewise, whoever eats, drinks and sleeps is "plugged into" many needs; he needs others. The True God is <b>the Self-Sufficient</b>, who feeds and is not fed, who helps and needs no help.' },
  myth:{ claim:{ ar:'«إنسانٌ يَأكُلُ ويَنامُ يُمكِنُ أن يَكونَ إلهاً!»', en:'"A human who eats and sleeps could be a god!"' },
         bust:{ ar:'مَن يَأكُلُ ويَحتاجُ فهو مُفتَقِر. الإلهُ الغَنِيُّ لا يَحتاجُ شَيئاً.', en:'Whoever eats and needs is dependent. The Self-Sufficient God needs nothing.' } },
  match:{
    title:{ ar:'صِل كُلَّ حالٍ بِمَعناه', en:'Match each state to its meaning' },
    pairs:[
      { tool:{ar:'يَأكُلُ ويَنام',en:'Eats and sleeps'}, job:{ar:'مُحتاجٌ ضَعيف',en:'Needy and weak'} },
      { tool:{ar:'آلةٌ مَوصولةٌ بِالحائِط',en:'A machine plugged in'}, job:{ar:'ليسَت مَصدَرَ الطّاقة',en:'Not the power source'} },
      { tool:{ar:'اللهُ الغَنِيّ',en:'Allah the Self-Sufficient'}, job:{ar:'يُطعِمُ ولا يُطعَم',en:'Feeds and is not fed'} },
    ] },
  reflection:{
    ayah:'﴿مَّا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ... كَانَا يَأْكُلَانِ الطَّعَامَ﴾',
    ref:{ ar:'سورة المائدة · ٧٥', en:'Surah Al-Ma\'idah · 75' },
    explain:{
      ar:'يُذَكِّرُنا اللهُ أنَّ المَسيحَ عليهِ السَّلامُ رَسولٌ كَريم، لا إله. والدَّليل: هو وأُمُّهُ كانا يَأكُلانِ الطَّعام. ومَن يَأكُلُ يَحتاجُ، والمُحتاجُ لا يَكونُ رَبّاً. اللهُ وَحدَهُ الغَنِيُّ الذي لا يَأكُلُ ولا يَحتاج، فهو المُستَحِقُّ لِلعِبادة.',
      en:'Allah reminds us that the Messiah (peace be upon him) is a noble messenger, not a god. The proof: he and his mother ate food. Whoever eats has needs, and the needy cannot be a Lord. Allah alone is the Self-Sufficient who neither eats nor needs — He alone deserves worship.' } },
  nameOfAllah:{ name:{ar:'الْغَنِيّ',en:'Al-Ghani'}, meaning:{ar:'الغَنِيُّ عَن كُلِّ شَيء، المُفتَقِرُ إليهِ كُلُّ شَيء',en:'The All-Rich, free of need from all, while all are in need of Him'} },
  proof:{ ar:'مَن يَأكُلُ ويَحتاجُ لا يَكونُ إلهاً', en:'Whoever eats and needs cannot be a god' },
  dua:{ ar:'اللهُمَّ أنتَ الغَنِيُّ ونَحنُ الفُقَراءُ إليك', en:'O Allah, You are the Self-Sufficient and we are in need of You' },
  mission:{ ar:'🍽️ مُهِمّةُ المَحطّة: عِندَ طَعامِكَ القادِم، تَذَكَّر: أنا أجوعُ وأحتاجُ، أمّا اللهُ فلا يَجوعُ ولا يَحتاج. قُل: «الحَمدُ لِلَّهِ الغَنِيِّ الذي أطعَمَني».', en:'🍽️ Station Mission: At your next meal, remember: I get hungry and need, but Allah neither hungers nor needs. Say: "Praise be to Allah, the Self-Sufficient, who fed me."' },
  badge:{ icon:'🔌', color:'#E74C3C', title:{ ar:'شاهِدُ الغِنى', en:'Witness of Sufficiency' } }
},

/* ───────────── 8 · The One Signature ───────────── */
{
  id:'signature', num:8, icon:'📱', emoji:'✍️', color:'#8E44AD', scene:'cosmos',
  title:{ ar:'التَّوقيعُ الواحِد — تَناسُقُ الكَون', en:'The One Signature — Cosmic Harmony' },
  narration:{
    ar:'انظُر حَولَك يا صَديقي: النَّجمُ البَعيدُ والذَّرّةُ الصَّغيرةُ والخَلِيّةُ في جِسمِكَ — كُلُّها تَعمَلُ بِـ<b>نَفسِ القَوانينِ</b> بِالضَّبط! نَفسُ قانونِ الجاذِبيّةِ يُمسِكُ الكَواكِبَ ويُسقِطُ التُّفّاحة. ونَفسُ شِفرةِ الحَياة (الدي إن إيه) تُكتَبُ بِأربَعةِ حُروفٍ في النَّملةِ والفيلِ والإنسان. الكَونُ كُلُّهُ كَأنَّهُ مَوَقَّعٌ بِـ<b>تَوقيعٍ واحِد</b>، ومَصنوعٌ في «مَصنَعٍ واحِد». وهذا الانسِجامُ العَجيبُ يَصرُخُ: الصّانِعُ واحِدٌ، لا صانِعانِ مُختَلِفان!',
    en:'Look around you, my friend: the distant star, the tiny atom, and the cell in your body — all run by exactly <b>the same laws</b>! The same law of gravity holds the planets and drops the apple. The same code of life (DNA) is written with four letters in the ant, the elephant, and the human. The whole universe is as if signed with <b>one signature</b>, made in "one factory". This amazing harmony cries out: the Maker is One — not two different makers!' },
  shubha:{ ar:'بَعضُهُم يَظُنُّ أنَّ الكَونَ صَنَعَتهُ آلِهةٌ كَثيرةٌ مُختَلِفة! 🤨', en:'Some think the universe was made by many different gods! 🤨' },
  logic:{
    ar:'حينَ تَفتَحُ هاتِفاً وحاسوباً لَوحِيّاً وساعةً ذَكيّةً مِن <b>شَرِكةٍ واحِدة</b>، تَجِدُها كُلَّها تَعمَلُ بِنَفسِ النِّظامِ ونَفسِ الشَّكلِ ونَفسِ الرّوح — فَتَعرِفُ فَوراً: صانِعُها واحِد! ولو صَنَعَتها شَرِكاتٌ مُختَلِفة، لَاختَلَفَت الأنظِمةُ ولَما تَوافَقَت. والكَونُ كُلُّهُ يَعمَلُ بِنِظامٍ واحِدٍ مُتناسِقٍ مُذهِل، فَدَلَّ على أنَّ صانِعَهُ <b>واحِدٌ أحَد</b>. وَحدةُ الصَّنعةِ دَليلُ وَحدةِ الصّانِع.',
    en:'When you open a phone, a tablet, and a smartwatch from <b>one company</b>, you find them all running the same system, the same style, the same spirit — so you instantly know: their maker is one! Had different companies made them, the systems would clash and not match. The whole universe runs on one harmonious, astonishing system — proving its Maker is <b>One, Unique</b>. Unity of the craft proves unity of the Craftsman.' },
  myth:{ claim:{ ar:'«آلِهةٌ كَثيرةٌ صَنَعَتِ الكَون!»', en:'"Many gods made the universe!"' },
         bust:{ ar:'نِظامٌ واحِدٌ مُتناسِقٌ يَدُلُّ على صانِعٍ واحِد، لا آلِهةٍ مُختَلِفة.', en:'One harmonious system points to one Maker, not many different gods.' } },
  match:{
    title:{ ar:'صِل كُلَّ دَليلٍ بِمَعناه', en:'Match each clue to its meaning' },
    pairs:[
      { tool:{ar:'نَفسُ نِظامِ التَّشغيل',en:'The same operating system'}, job:{ar:'شَرِكةٌ واحِدةٌ صَنَعَتها',en:'One company made them'} },
      { tool:{ar:'نَفسُ قَوانينِ الكَون',en:'The same cosmic laws'}, job:{ar:'خالِقٌ واحِد',en:'One Creator'} },
      { tool:{ar:'تَناسُقٌ بِلا تَفاوُت',en:'Harmony with no flaw'}, job:{ar:'دَليلُ الوَحدانيّة',en:'Proof of Oneness'} },
    ] },
  reflection:{
    ayah:'﴿الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ﴾',
    ref:{ ar:'سورة المُلك · ٣', en:'Surah Al-Mulk · 3' },
    explain:{
      ar:'«ما تَرى في خَلقِ الرَّحمنِ مِن تَفاوُت» أيْ لا تَجِدُ في الكَونِ اختِلافاً ولا خَلَلاً ولا تَناقُضاً. كُلُّ شَيءٍ مُنَسَّقٌ مُتناغِم، كأنه تَوقيعٌ واحِد. ولو كانَ هُناكَ خالِقانِ لَظَهَرَ الاختِلاف. الانسِجامُ التّامُّ دَليلٌ على خالِقٍ واحِدٍ حَكيم.',
      en:'"You see no flaw in the creation of the Most Merciful" — you find no inconsistency, defect, or contradiction in the universe. Everything is coordinated and harmonious, like one signature. Had there been two creators, disagreement would appear. Perfect harmony proves One Wise Creator.' } },
  nameOfAllah:{ name:{ar:'الْأحَد',en:'Al-Ahad'}, meaning:{ar:'الواحِدُ الذي لا نَظيرَ لَه ولا شَريك، المُتَفَرِّدُ بِالخَلقِ والتَّدبير',en:'The Unique One, with no peer or partner, alone in creating and governing'} },
  proof:{ ar:'وَحدةُ النِّظامِ تَدُلُّ على وَحدةِ الصّانِع', en:'Unity of the system proves unity of the Maker' },
  dua:{ ar:'هو اللهُ الواحِدُ الأحَد', en:'He is Allah, the One, the Unique' },
  mission:{ ar:'📱 مُهِمّةُ المَحطّة: ابحَث في بَيتِكَ عَن جِهازَينِ مِن نَفسِ الشَّرِكة، ولاحِظ تَشابُهَهُما. ثُمَّ تَأمَّل: الكَونُ كُلُّهُ مُتناسِق، فَصانِعُهُ واحِد. قُل: «هو اللهُ الأحَد».', en:'📱 Station Mission: Find two devices from the same company in your home and notice how alike they are. Then reflect: the whole universe is harmonious, so its Maker is One. Say: "He is Allah, the Unique."' },
  badge:{ icon:'✍️', color:'#8E44AD', title:{ ar:'قارِئُ التَّوقيع', en:'Signature Reader' } }
},

/* ───────────── 9 · The God That Never Sets ───────────── */
{
  id:'neversets', num:9, icon:'⭐', emoji:'🌙', color:'#5B4B8A', scene:'night',
  title:{ ar:'الإلهُ الذي لا يَغيب — إبراهيمُ والنُّجوم', en:'The God That Never Sets — Ibrahim and the Stars' },
  narration:{
    ar:'في شَبابِهِ، أرادَ <b>إبراهيمُ</b> عليهِ السَّلامُ أن يُعَلِّمَ قَومَهُ الذينَ عَبَدوا النُّجومَ والقَمَرَ والشَّمس. فلمّا جاءَ اللَّيلُ ورأى نَجماً لامِعاً قال — لِيُحاجَّهُم —: «هذا رَبّي!» <b>فلمّا غابَ النَّجمُ</b> قال: «لا أُحِبُّ الآفِلين» (أيِ الغائِبين)! ثُمَّ رأى القَمَرَ فقالَ كذلك، فلمّا غابَ تَبَرَّأَ مِنه. ثُمَّ رأى الشَّمسَ وهي أكبَر، فلمّا غابَت قال: «يا قَومِ إنّي بَريءٌ مِمّا تُشرِكون». ثُمَّ أعلَنَ الحَقّ: رَبّي هو الذي <b>لا يَغيبُ ولا يَزولُ</b>، خالِقُ النُّجومِ والشَّمسِ والقَمَر!',
    en:'In his youth, <b>Ibrahim</b> (peace be upon him) wanted to teach his people who worshipped the stars, the moon, and the sun. When night came and he saw a shining star, he said — to argue with them —: "This is my Lord!" <b>But when the star set</b>, he said: "I do not love those that disappear"! Then he saw the moon and said the same; when it set, he disowned it. Then he saw the sun, larger still; when it set, he said: "O my people, I am free of what you associate with Allah." Then he declared the truth: my Lord is the One who <b>never disappears and never fades</b> — the Creator of the stars, the sun, and the moon!' },
  shubha:{ ar:'بَعضُهُم يَعبُدُ أشياءَ تَظهَرُ ثُمَّ تَغيبُ وتَزول! 🤨', en:'Some worship things that appear, then vanish and fade! 🤨' },
  logic:{
    ar:'هاتِفُكَ يُضيءُ بِنورٍ جَميل… لكنَّ بَطّارِيَّتَهُ <b>تَنفَدُ وتَنطَفِئ</b>! فهل تَعتَمِدُ علَيهِ كَمَصدَرٍ دائِمٍ لِلنّور؟ لا، لِأنه يَخفُتُ ويَموت. كُلُّ ما يَظهَرُ ثُمَّ يَغيبُ — كَالنَّجمِ والشَّمسِ والبَطّاريّة — فهو ضَعيفٌ مَخلوقٌ يَحتاجُ غَيرَه، لا يَصلُحُ إلهاً. الإلهُ الحَقُّ <b>دائِمٌ باقٍ لا يَأفُلُ</b> ولا يَنطَفِئُ أبَداً: هو الذي خَلَقَ النّورَ كُلَّهُ ولا يَزول.',
    en:'Your phone glows with a lovely light… but its battery <b>runs out and switches off</b>! Would you rely on it as a permanent source of light? No, because it fades and dies. Everything that appears then disappears — like the star, the sun, and the battery — is weak, created, and dependent; it cannot be a god. The True God is <b>everlasting and never sets</b>, never switching off: He is the One who created all light and never fades.' },
  myth:{ claim:{ ar:'«أعبُدُ شَيئاً يَظهَرُ ثُمَّ يَغيب!»', en:'"I worship something that appears then disappears!"' },
         bust:{ ar:'ما يَغيبُ ويَزولُ ضَعيفٌ مَخلوق. الإلهُ الحَقُّ باقٍ لا يَأفُل.', en:'What sets and fades is weak and created. The True God is everlasting and never sets.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِصِفَتِه', en:'Match each thing to its trait' },
    pairs:[
      { tool:{ar:'النَّجمُ والقَمَر',en:'The star and moon'}, job:{ar:'يَظهَرُ ثُمَّ يَغيب',en:'Appears then sets'} },
      { tool:{ar:'بَطّاريّةُ الهاتِف',en:'The phone battery'}, job:{ar:'تَنفَدُ وتَنطَفِئ',en:'Runs out and dies'} },
      { tool:{ar:'اللهُ الباقي',en:'Allah the Everlasting'}, job:{ar:'لا يَغيبُ ولا يَزول',en:'Never disappears or fades'} },
    ] },
  reflection:{
    ayah:'﴿فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ﴾',
    ref:{ ar:'سورة الأنعام · ٧٦', en:'Surah Al-An\'am · 76' },
    explain:{
      ar:'«أفَلَ» أيْ غابَ واختَفى. عَلَّمَنا إبراهيمُ بِالعَقل: ما يَغيبُ ويَتَغَيَّرُ لا يَصلُحُ أن يَكونَ رَبّاً، لِأنَّ الرَّبَّ الحَقَّ كامِلٌ دائِمٌ لا يَزول. فالنُّجومُ والشَّمسُ مَخلوقاتٌ تَأفُل، أمّا اللهُ فَباقٍ لا يَأفُلُ ولا يَنتَهي.',
      en:'"Afala" means it set and vanished. Ibrahim taught us through reason: what disappears and changes cannot be a Lord, because the True Lord is perfect, permanent, and never fades. The stars and sun are creations that set, but Allah is everlasting — He never sets and never ends.' } },
  nameOfAllah:{ name:{ar:'الْباقي',en:'Al-Baqi'}, meaning:{ar:'الدّائِمُ الباقي الذي لا يَفنى ولا يَزول، بِخِلافِ كُلِّ مَخلوقٍ يَأفُل',en:'The Everlasting who never perishes or fades, unlike every created thing that sets'} },
  proof:{ ar:'الإلهُ الحَقُّ لا يَأفُلُ ولا يَزول', en:'The True God never sets or fades' },
  dua:{ ar:'يا حَيُّ يا قَيّومُ يا باقي', en:'O Ever-Living, O Sustainer, O Everlasting' },
  mission:{ ar:'⭐ مُهِمّةُ المَحطّة: راقِب بَطّاريّةَ هاتِفٍ كيفَ تَنقُص، أو نَجماً كيفَ يَغيبُ صَباحاً. كُلُّ شَيءٍ يَزولُ إلّا الله. قُل: «اللهُ الباقي الذي لا يَزول».', en:'⭐ Station Mission: Watch a phone battery drain, or a star vanish at dawn. Everything fades except Allah. Say: "Allah, the Everlasting, who never fades."' },
  badge:{ icon:'🌟', color:'#5B4B8A', title:{ ar:'تابِعُ النّورِ الباقي', en:'Seeker of Lasting Light' } }
},

/* ───────────── 10 · The Spider's Web ───────────── */
{
  id:'web', num:10, icon:'🕸️', emoji:'🛡️', color:'#C0392B', scene:'ruins',
  title:{ ar:'قَلعةُ الخُيوطِ الواهِية — بَيتُ العَنكَبوت', en:"The Castle of Flimsy Threads — The Spider's Web" },
  narration:{
    ar:'في ختامِ رِحلَتِنا يا صَديقي، يَضرِبُ اللهُ مَثَلاً لِمَن يَتَّخِذُ حُماةً ومُعينينَ مِن دونِ الله — كَالأصنامِ والتَّمائِمِ والأحجِبة. قال: مَثَلُهُم كَمَثَلِ <b>العَنكَبوتِ</b> الذي بَنى بَيتاً مِن خُيوطٍ رَقيقة، يَظُنُّهُ حِصناً يَحميه! لكنَّ أيَّ نَسمةٍ أو لَمسةٍ تُمَزِّقُه. «<b>وإنَّ أوهَنَ البُيوتِ لَبَيتُ العَنكَبوت</b>». مَن تَعَلَّقَ بِغَيرِ اللهِ فقد تَعَلَّقَ بِخَيطِ عَنكَبوتٍ واهٍ، ومَن تَعَلَّقَ بِاللهِ فقد أمسَكَ بِالرُّكنِ الشَّديدِ الذي لا يَنهار.',
    en:'At the end of our journey, my friend, Allah gives a parable for those who take protectors and helpers besides Allah — like idols, charms, and amulets. He said: their likeness is that of <b>the spider</b> who built a house of thin threads, thinking it a fortress that protects him! Yet any breeze or touch tears it apart. "<b>And indeed, the weakest of homes is the spider\'s home</b>." Whoever clings to other than Allah has clung to a flimsy spider\'s thread; whoever clings to Allah has grasped the firm support that never collapses.' },
  shubha:{ ar:'بَعضُهُم يَتَعَلَّقُ بِتَميمةٍ أو حِجابٍ يَظُنُّهُ يَحميه! 🤨', en:'Some cling to a charm or amulet, thinking it protects them! 🤨' },
  logic:{
    ar:'تَخَيَّل جُندِيّاً ذاهِباً لِلمَعرَكةِ يَحمِلُ <b>دِرعاً مِن وَرَق</b> لِيَصُدَّ بِهِ السِّهام! أو يَفتَحُ <b>شَبَكةَ عَنكَبوتٍ</b> فَوقَ رأسِهِ لِيَتَّقي بِها المَطَر! مُضحِكٌ ومُحزِنٌ مَعاً، لِأنه سيَتَأذّى. كذلك مَن يَطلُبُ الحِمايةَ مِن خَيطٍ أو حَجَرٍ أو تَميمة — يَتَعَلَّقُ بِأوهى مِن خَيطِ العَنكَبوت! الحِمايةُ الحَقيقيّةُ والقُوّةُ كُلُّها بِيَدِ <b>اللهِ الوَلِيِّ</b> وَحدَه. تَعَلَّق بِهِ تَأمَن.',
    en:'Imagine a soldier going to battle carrying a <b>shield made of paper</b> to block arrows! Or opening a <b>spider\'s web</b> over his head to keep off the rain! It\'s funny and sad at once, because he\'ll be harmed. Likewise, whoever seeks protection from a thread, a stone, or a charm clings to something flimsier than a spider\'s web! Real protection and all power are in the hand of <b>Allah, the Protector</b>, alone. Cling to Him and you are safe.' },
  myth:{ claim:{ ar:'«التَّميمةُ والحِجابُ يَحميانِني!»', en:'"The charm and amulet protect me!"' },
         bust:{ ar:'حِمايةُ غَيرِ اللهِ أوهى مِن خَيطِ العَنكَبوت. الوَلِيُّ الحَقُّ هو الله.', en:"Protection from other than Allah is flimsier than a spider's thread. The true Protector is Allah." } },
  match:{
    title:{ ar:'صِل كُلَّ حِمايةٍ بِقُوَّتِها', en:'Match each protection to its strength' },
    pairs:[
      { tool:{ar:'دِرعٌ مِن وَرَق',en:'A paper shield'}, job:{ar:'لا يَصُدُّ السِّهام',en:"Can't stop arrows"} },
      { tool:{ar:'تَميمةٌ وحِجاب',en:'A charm and amulet'}, job:{ar:'أوهى مِن خَيطِ العَنكَبوت',en:"Flimsier than a spider's thread"} },
      { tool:{ar:'اللهُ الوَلِيّ',en:'Allah the Protector'}, job:{ar:'حِمايةٌ لا تَنهار',en:'Protection that never collapses'} },
    ] },
  reflection:{
    ayah:'﴿مَثَلُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنكَبُوتِ﴾',
    ref:{ ar:'سورة العَنكَبوت · ٤١', en:'Surah Al-Ankabut · 41' },
    explain:{
      ar:'يُشَبِّهُ اللهُ مَن يَعتَمِدُ على غَيرِهِ — مِن أصنامٍ أو تَمائِمَ أو بَشَر — بِالعَنكَبوتِ في بَيتِهِ الواهي. مَهما بَدا قَوِيّاً فهو أضعَفُ البُيوت. الدَّرسُ العَظيم: لا تَتَعَلَّق إلّا بِاللهِ القَوِيِّ الوَلِيّ، فهو وَحدَهُ الرُّكنُ الذي لا يَنهار.',
      en:'Allah likens whoever relies on other than Him — idols, charms, or people — to the spider in its frail home. However strong it looks, it is the weakest of homes. The great lesson: cling to none but Allah, the Strong, the Protector — He alone is the support that never collapses.' } },
  nameOfAllah:{ name:{ar:'الْوَلِيّ',en:'Al-Wali'}, meaning:{ar:'النّاصِرُ الحامي الذي يَتَوَلّى عِبادَهُ ويَحفَظُهُم',en:'The Protecting Friend who supports and safeguards His servants'} },
  proof:{ ar:'لا مَلجَأَ ولا حِمايةَ إلّا بِالله', en:'There is no refuge or protection except with Allah' },
  dua:{ ar:'حَسبِيَ اللهُ ونِعمَ الوَكيل', en:'Allah is enough for me, the best of Guardians' },
  mission:{ ar:'🕸️ مُهِمّةُ المَحطّة: المِس خَيطاً رَفيعاً وانظُر كم يَنقَطِعُ بِسُهولة. كُلُّ حِمايةٍ مِن دونِ اللهِ كَهذا الخَيط. تَعَلَّق بِاللهِ وقُل: «حَسبِيَ اللهُ ونِعمَ الوَكيل».', en:'🕸️ Station Mission: Touch a thin thread and see how easily it snaps. Every protection besides Allah is like that thread. Cling to Allah and say: "Allah is enough for me, the best of Guardians."' },
  badge:{ icon:'🛡️', color:'#C0392B', title:{ ar:'حَليفُ الوَلِيّ', en:"The Protector's Ally" } }
},

];
