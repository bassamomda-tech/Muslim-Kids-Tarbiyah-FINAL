/* ════════════════════════════════════════════════════════════════
   رِحلةُ البَلاغ — الكُتُبُ السَّماوِيّةُ ومُعجِزاتُ الرُّسُل
   Journey of the Message — the Revealed Books & the Prophets' Miracles
   10 stations for kids (7-13), on the way of Ahl al-Sunnah:
   why Allah sends guidance · the Scriptures of Ibrahim & Musa ·
   the Tawrah · the Zabur · the Injil · the Quran (preserved & final) ·
   what a miracle is · the miracles of Musa & Isa (by Allah's leave) ·
   the miracles of Muhammad ﷺ · one message, one chain.
   Core lesson: miracles are from Allah's command alone — no human
   has such power. This completes "how we came to know Allah".
   Narrated by Yusuf. Engine: rihla-engine.js
   ════════════════════════════════════════════════════════════════ */
window.KUTUB_STATIONS = [

/* ───────────── 1 · The Map Out of the Maze ───────────── */
{
  id:'balagh', num:1, icon:'🗺️', emoji:'💌', color:'#2980B9',
  title:{ ar:'خَريطةُ الله — لِماذا أرسَلَ الرُّسُلَ والكُتُب؟', en:'Allah\'s Map — Why Messengers & Books?' },
  narration:{
    ar:'أهلاً بِكَ في رِحلةٍ جَديدة! 💌 في الرِّحلاتِ الماضِيةِ عَرَفنا اللهَ بِعَقلِنا: رَأينا آثارَ صُنعِهِ في الكَونِ فَعَرَفنا أنه مَوجودٌ واحِدٌ عَظيم. لكن بَقِيَت أسئِلةٌ كَبيرةٌ لا يَستَطيعُ العَقلُ وَحدَهُ أن يُجيبَ عَنها: <b>ماذا يُريدُ اللهُ مِنّي؟ كَيفَ أعبُدُه؟ وماذا بَعدَ المَوت؟</b> تَخَيَّل نَفسَكَ في مَتاهةٍ ضَخمة — تَعرِفُ أنَّ لَها مُصَمِّماً، لكنَّكَ لا تَعرِفُ طَريقَ الخُروج! ماذا تَتَمَنّى؟ أن يُرسِلَ لَكَ المُصَمِّمُ <b>خَريطةً ودَليلاً</b>. وهذا بِالضَّبطِ ما فَعَلَهُ رَبُّنا الرَّحيم: لم يَترُكنا في المَتاهةِ نَتَخَبَّط، بَل أرسَلَ <b>رُسُلاً</b> مِن أنفُسِنا يُعَلِّمونَنا، ومَعَهُم <b>كُتُباً</b> مِنَ السَّماءِ هي رَسائِلُهُ إلَينا: فيها مَن هو، وماذا يُحِبّ، وكَيفَ نَصِلُ إلَيه.',
    en:'Welcome to a new journey! 💌 In our past journeys we came to know Allah with our minds: we saw the marks of His craft in the universe and knew He is One and Great. But big questions remained that reason alone cannot answer: <b>What does Allah want from me? How do I worship Him? What happens after death?</b> Imagine yourself in a giant maze — you know it has a designer, but you don\'t know the way out! What would you wish for? That the designer sends you <b>a map and a guide</b>. That is exactly what our Merciful Lord did: He didn\'t leave us stumbling in the maze — He sent <b>messengers</b> from among us to teach us, carrying <b>books</b> from heaven, His letters to us: telling us who He is, what He loves, and how to reach Him.' },
  shubha:{ ar:'بَعضُهُم يَقول: «يَكفيني عَقلي! لِماذا أحتاجُ كُتُباً ورُسُلاً؟» 🤨', en:'Some say: "My mind is enough! Why would I need books and messengers?" 🤨' },
  logic:{
    ar:'فَكِّر: عَقلُكَ رائِعٌ، لكنه مِثلُ <b>المِصباح</b>: يُضيءُ لَكَ ما حَولَكَ، ولا يُريكَ ما خَلفَ الجِبال! عَقلُكَ يَكتَشِفُ أنَّ لِلبَيتِ بانِياً، لكنه لا يَعرِفُ <b>اسمَ</b> الباني ولا <b>ماذا يُريد</b> — إلّا إذا أخبَرَكَ الباني بِنَفسِه. جَرِّب أن تَعرِفَ بِعَقلِكَ وَحدَهُ: كَم صَلاةً نُصَلّي في اليَوم؟ مُستَحيل! هذِهِ أخبارٌ لا تُعرَفُ إلّا بِالوَحي. ثُمَّ انظُر حَولَك: النّاسُ الذينَ تَرَكوا خَرائِطَ السَّماءِ، هل اهتَدَوا بِعُقولِهِم؟ بَعضُهُم عَبَدَ النّارَ وبَعضُهُم عَبَدَ البَقَر، وبَعضُهُم ضاعَ في الحَيرة! العَقلُ نِعمةٌ عَظيمةٌ لكنه يَحتاجُ نوراً يَمشي بِه — والوَحيُ هو ذلكَ النّور.',
    en:'Think: your mind is wonderful, but it\'s like a <b>lamp</b>: it lights what\'s around you — it can\'t show you what\'s beyond the mountains! Your mind discovers the house has a builder, but it can\'t know the builder\'s <b>name</b> or <b>what he wants</b> — unless the builder tells you himself. Try working out with reason alone: how many prayers a day should we pray? Impossible! Such things are known only by revelation. Then look around: people who abandoned heaven\'s maps — did their minds guide them? Some worshipped fire, some worshipped cows, some got lost in confusion! Reason is a great gift, but it needs a light to walk by — and revelation is that light.' },
  myth:{ claim:{ ar:'«اللهُ خَلَقَنا ثُمَّ تَرَكَنا نَتَدَبَّرُ أمرَنا وَحدَنا!»', en:'"Allah created us then left us to figure things out alone!"' },
         bust:{ ar:'الرَّحيمُ لا يَترُكُ أحِبّاءَهُ في المَتاهة: أرسَلَ رُسُلاً مُبَشِّرينَ ومُنذِرين، وأنزَلَ كُتُباً هي خَرائِطُ الهِداية.', en:'The Merciful never leaves His loved ones in the maze: He sent messengers with good news and warning, and sent down books — the maps of guidance.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِدَورِه', en:'Match each thing to its role' },
    pairs:[
      { tool:{ar:'العَقل',en:'Reason'}, job:{ar:'مِصباحٌ يَعرِفُ أنَّ لِلكَونِ خالِقاً',en:'A lamp that knows the universe has a Creator'} },
      { tool:{ar:'الوَحي',en:'Revelation'}, job:{ar:'نورٌ يُخبِرُنا ماذا يُريدُ الخالِق',en:'A light telling us what the Creator wants'} },
      { tool:{ar:'الرُّسُل',en:'The messengers'}, job:{ar:'مُعَلِّمونَ يُبَلِّغونَ رِسالةَ الله',en:'Teachers conveying Allah\'s message'} },
      { tool:{ar:'الكُتُبُ السَّماوِيّة',en:'The revealed books'}, job:{ar:'خَرائِطُ الخُروجِ مِنَ المَتاهة',en:'Maps out of the maze'} },
    ] },
  reflection:{
    ayah:'﴿رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ﴾',
    ref:{ ar:'سورة النِّساء · ١٦٥', en:'Surah An-Nisa · 165' },
    explain:{
      ar:'مِن عَدلِ اللهِ ورَحمَتِهِ أنه لا يُحاسِبُ النّاسَ قَبلَ أن يُبَيِّنَ لَهُمُ الطَّريق. فَأرسَلَ الرُّسُلَ يُبَشِّرونَ مَن أطاعَ بِالجَنّة، ويُنذِرونَ مَن عَصى مِنَ النّار، حتّى لا يَقولَ أحَدٌ يَومَ القِيامة: «ما عَرَفتُ الطَّريق!». الرِّسالةُ وَصَلَت — والباقي علَينا.',
      en:'It is from Allah\'s justice and mercy that He doesn\'t hold people to account before showing them the way. He sent messengers giving glad tidings of Paradise to the obedient and warning the disobedient of the Fire, so that no one could say on the Day of Resurrection: "I never knew the way!" The message has arrived — the rest is up to us.' } },
  card:{ name:{ar:'البَلاغُ المُبين',en:'The Clear Message'}, meaning:{ar:'مِن رَحمةِ اللهِ أنه لم يَترُكِ البَشَرَ حائِرين: أرسَلَ في كُلِّ أُمّةٍ رَسولاً، وأنزَلَ كُتُباً تَهدي إلى الطَّريق',en:'From Allah\'s mercy: He never left humanity confused — He sent a messenger to every nation and revealed books guiding to the way'} },
  proof:{ ar:'اللهُ الرَّحيمُ لا يَترُكُنا في المَتاهة: أرسَلَ الخَريطةَ والدَّليل', en:'The Merciful never leaves us in the maze: He sent the map and the guide' },
  dua:{ ar:'الحَمدُ لِلهِ الذي هَدانا لِهذا وما كُنّا لِنَهتَدِيَ لَولا أن هَدانا الله', en:'Praise be to Allah who guided us to this — we would not have been guided had Allah not guided us' },
  mission:{ ar:'🗺️ مُهِمّةُ المَحطّة: اسأل والِدَيك: «ما أكثَرُ شَيءٍ تَشكُرانِ اللهَ علَيه؟» ثُمَّ أخبِرهُما بِجَوابِك أنت — ولا تَنسَ نِعمةَ الهِداية: أن وَصَلَتكَ خَريطةُ السَّماء!', en:'🗺️ Station Mission: Ask your parents: "What do you thank Allah for most?" Then share your own answer — and don\'t forget the gift of guidance: heaven\'s map reached you!' },
  badge:{ icon:'💌', color:'#2980B9', title:{ ar:'حامِلُ الخَريطة', en:'Holder of the Map' } }
},

/* ───────────── 2 · The First Scriptures ───────────── */
{
  id:'suhuf', num:2, icon:'📜', emoji:'🏜️', color:'#C0905C',
  title:{ ar:'الصُّحُفُ الأولى — صُحُفُ إبراهيمَ وموسى', en:'The First Scriptures — of Ibrahim & Musa' },
  narration:{
    ar:'لِنَفتَح أوَّلَ رَسائِلِ السَّماءِ في رِحلَتِنا: <b>الصُّحُفُ الأولى</b>. 📜 قَبلَ الكُتُبِ الكِبارِ أنزَلَ اللهُ صُحُفاً — صَفَحاتٍ مِنَ الوَحي — على <b>إبراهيمَ</b> خَليلِ الرَّحمنِ وعلى <b>موسى</b> عليهما السلام. ذَكَرَها اللهُ في القُرآنِ في مَوضِعَين، وأخبَرَنا بِشَيءٍ مِمّا فيها: ﴿قَد أفلَحَ مَن تَزَكّى ۝ وذَكَرَ اسمَ رَبِّهِ فَصَلّى﴾ — أيْ: الفائِزُ الحَقيقيُّ هو مَن طَهَّرَ قَلبَهُ وذَكَرَ رَبَّهُ وصَلّى. وفيها: ﴿ألّا تَزِرُ وازِرةٌ وِزرَ أُخرى﴾ — كُلُّ إنسانٍ مَسؤولٌ عن عَمَلِهِ هو. لاحِظ شَيئاً عَجيباً: هذِهِ الرَّسائِلُ نَزَلَت قَبلَ آلافِ السِّنين، ومَع ذلك كَلامُها هو نَفسُ ما يُعَلِّمُنا إيّاهُ القُرآن! لِماذا؟ لِأنَّ <b>المُرسِلَ واحِد</b>.',
    en:'Let\'s open the first of heaven\'s letters in our journey: <b>the early scriptures</b>. 📜 Before the great books, Allah sent down scriptures — pages of revelation — to <b>Ibrahim</b>, the close friend of the Most Merciful, and to <b>Musa</b> (peace be upon them). Allah mentions them twice in the Quran and tells us some of what they contained: ﴾Successful is the one who purifies himself, remembers the name of his Lord, and prays﴿ — the real winner is whoever cleanses his heart, remembers his Lord, and prays. And: ﴾No bearer of burdens bears the burden of another﴿ — every person answers for his own deeds. Notice something amazing: these letters came down thousands of years ago, yet their words teach the very same things the Quran teaches us! Why? Because <b>the Sender is One</b>.' },
  shubha:{ ar:'بَعضُهُم يَقول: «الرَّسائِلُ القَديمةُ لا تَعنينا اليوم!» 🤨', en:'Some say: "Those old letters mean nothing to us today!" 🤨' },
  logic:{
    ar:'فَكِّر: لَو وَجَدتَ رَسائِلَ كَتَبَها جَدُّ جَدِّكَ لِعائِلَتِه، أما تَقرَؤُها بِشَوقٍ لِتَعرِفَ تاريخَ عائِلَتِك؟ نَحنُ أُسرةٌ واحِدةٌ كَبيرة: <b>أُسرةُ المُؤمِنينَ عَبرَ التّاريخ</b> — أبونا آدَم، وجَدُّنا في الإيمانِ إبراهيم. والصُّحُفُ الأولى تُخبِرُنا أنَّ دَرسَ السَّماءِ لم يَتَغَيَّر مُنذُ البِداية: طَهِّر قَلبَك، اذكُر رَبَّك، صَلِّ، واعلَم أنَّكَ مَسؤول. أربَعُ كَلِماتٍ عُمرُها آلافُ السِّنينَ وما زالَت أنجَحَ «وَصفةِ فَلاح» في الوُجود! الرَّسائِلُ القَديمةُ مِن مُرسِلٍ لا يَتَغَيَّرُ كَلامُهُ — لَيسَت قَديمة، بَل <b>خالِدة</b>.',
    en:'Think: if you found letters your great-great-grandfather wrote to his family, wouldn\'t you read them eagerly to know your family\'s story? We are one big family: <b>the family of believers across history</b> — our father Adam, our father in faith Ibrahim. The early scriptures tell us heaven\'s lesson has never changed since the beginning: purify your heart, remember your Lord, pray, and know you are responsible. Four lessons thousands of years old — still the most successful "recipe for success" in existence! Letters from a Sender whose words never change aren\'t old — they\'re <b>timeless</b>.' },
  myth:{ claim:{ ar:'«كُلُّ نَبِيٍّ جاءَ بِدينٍ جَديدٍ مُختَلِفٍ عنِ الذي قَبلَه!»', en:'"Every prophet brought a brand-new religion different from the one before!"' },
         bust:{ ar:'الدّينُ واحِدٌ مِن أوَّلِ صَحيفةٍ إلى آخِرِ كِتاب: اعبُدِ اللهَ وَحدَهُ وزَكِّ نَفسَك — إنما تَتَجَدَّدُ الشَّرائِعُ والتَّفاصيل.', en:'The religion is one from the first scripture to the last book: worship Allah alone and purify yourself — only the laws and details were renewed.' } },
  match:{
    title:{ ar:'صِل كُلَّ وَصِيّةٍ مِنَ الصُّحُفِ بِمَعناها', en:'Match each teaching of the scriptures to its meaning' },
    pairs:[
      { tool:{ar:'«قَد أفلَحَ مَن تَزَكّى»',en:'"Successful is he who purifies himself"'}, job:{ar:'الفَوزُ بِتَطهيرِ القَلب',en:'Winning by cleansing the heart'} },
      { tool:{ar:'«وذَكَرَ اسمَ رَبِّهِ فَصَلّى»',en:'"Remembers his Lord and prays"'}, job:{ar:'الذِّكرُ والصَّلاةُ طَريقُ الفَلاح',en:'Dhikr and prayer: the road to success'} },
      { tool:{ar:'«ألّا تَزِرُ وازِرةٌ وِزرَ أُخرى»',en:'"No soul bears another\'s burden"'}, job:{ar:'كُلٌّ مَسؤولٌ عن عَمَلِه',en:'Each answers for his own deeds'} },
      { tool:{ar:'المُرسِلُ واحِد',en:'One Sender'}, job:{ar:'فالرَّسائِلُ كُلُّها مُتَّفِقة',en:'So all the letters agree'} },
    ] },
  reflection:{
    ayah:'﴿إِنَّ هَٰذَا لَفِي الصُّحُفِ الْأُولَىٰ ۝ صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ﴾',
    ref:{ ar:'سورة الأعلى · ١٨–١٩', en:'Surah Al-A\'la · 18–19' },
    explain:{
      ar:'يُخبِرُنا اللهُ أنَّ ما في أواخِرِ سورةِ الأعلى — فَلاحُ مَن تَزَكّى وذَكَرَ وصَلّى، وأنَّ الآخِرةَ خَيرٌ وأبقى — هو نَفسُهُ ما كانَ في صُحُفِ إبراهيمَ وموسى. رِسالةُ السَّماءِ واحِدةٌ عَبرَ آلافِ السِّنين، لِأنَّ مُرسِلَها واحِدٌ سُبحانَه: لا يُبَدِّلُ الحَقَّ ولا يَنسى عِبادَه.',
      en:'Allah tells us that the message at the end of Surah Al-A\'la — success for whoever purifies himself, remembers, and prays, and that the Hereafter is better and more lasting — is the very same as what was in the scriptures of Ibrahim and Musa. Heaven\'s message is one across thousands of years, because its Sender is One: He never alters the truth and never forgets His servants.' } },
  card:{ name:{ar:'الصُّحُفُ الأولى',en:'The First Scriptures'}, meaning:{ar:'صُحُفُ إبراهيمَ وموسى عليهما السلام: أقدَمُ رَسائِلِ السَّماءِ المَذكورةِ في القُرآن، وفيها: قَد أفلَحَ مَن تَزَكّى',en:'The scriptures of Ibrahim and Musa: the oldest of heaven\'s letters named in the Quran, teaching: successful is he who purifies himself'} },
  proof:{ ar:'رِسالةُ السَّماءِ واحِدةٌ مُنذُ أوَّلِ صَحيفة، لِأنَّ مُرسِلَها واحِد', en:'Heaven\'s message has been one since the first scripture, for its Sender is One' },
  dua:{ ar:'اللهُمَّ زَكِّ نَفسي أنتَ خَيرُ مَن زَكّاها، أنتَ وَلِيُّها ومَولاها', en:'O Allah, purify my soul — You are the best to purify it; You are its Guardian and Master' },
  mission:{ ar:'📜 مُهِمّةُ المَحطّة: احفَظِ اليومَ «وَصفةَ الفَلاح» مِنَ الصُّحُفِ الأولى: ﴿قَد أفلَحَ مَن تَزَكّى ۝ وذَكَرَ اسمَ رَبِّهِ فَصَلّى﴾ — وسَمِّعها لِأحَدِ والِدَيك.', en:'📜 Station Mission: Memorize today the "recipe for success" from the first scriptures: ﴾Successful is he who purifies himself, remembers the name of his Lord, and prays﴿ — and recite it to a parent.' },
  badge:{ icon:'🏜️', color:'#C0905C', title:{ ar:'قارِئُ الصُّحُف', en:'Reader of the Scriptures' } }
},

/* ───────────── 3 · The Tawrah ───────────── */
{
  id:'tawrah', num:3, icon:'⛰️', emoji:'🔥', color:'#27AE60',
  title:{ ar:'التَّوراة — نورٌ نَزَلَ على موسى', en:'The Tawrah — A Light Sent Down to Musa' },
  narration:{
    ar:'مَحَطَّتُنا اليومَ عِندَ جَبَلِ الطّور! ⛰️ بَعدَ أن أنجى اللهُ <b>موسى</b> عليه السلام وقَومَهُ مِن فِرعَونَ وفَلَقَ لَهُمُ البَحرَ، احتاجَ بَنو إسرائيلَ إلى دُستورٍ يُعَلِّمُهُم كَيفَ يَعيشون. فَواعَدَ اللهُ موسى أربَعينَ لَيلةً، وكَلَّمَهُ رَبُّهُ تَكليماً — يا لَهُ مِن شَرَف! — وأنزَلَ علَيهِ <b>التَّوراة</b>: كِتاباً عَظيماً وَصَفَهُ اللهُ بِقَولِه: ﴿فيها <b>هُدًى ونور</b>﴾، وقالَ: ﴿وكَتَبنا لَهُ في الألواحِ مِن كُلِّ شَيءٍ مَوعِظةً وتَفصيلاً لِكُلِّ شَيء﴾. كانَت فيها العَقيدةُ والوَصايا والأحكام: اعبُدِ اللهَ وَحدَه، بِرُّ الوالِدَين، لا تَقتُل، لا تَسرِق، لا تَشهَد زوراً. نُؤمِنُ بِالتَّوراةِ الحَقيقيّةِ التي نَزَلَت على موسى — هذا رُكنٌ مِن إيمانِنا — لكنَّ النّاسَ مِن بَعدِهِ لم يَحفَظوها، فَدَخَلَها التَّحريفُ والتَّغيير.',
    en:'Today\'s station is at Mount Tur! ⛰️ After Allah saved <b>Musa</b> (peace be upon him) and his people from Pharaoh and split the sea for them, the Children of Israel needed a law teaching them how to live. So Allah appointed for Musa forty nights, spoke to him directly — what an honor! — and sent down to him <b>the Tawrah</b>: a great book Allah described saying: ﴾in it is <b>guidance and light</b>﴿, and: ﴾We wrote for him on the Tablets of all things — admonition and explanation of all things﴿. It held creed, commandments, and laws: worship Allah alone, honor your parents, do not kill, do not steal, do not bear false witness. We believe in the true Tawrah sent down to Musa — that is a pillar of our faith — but the people after him did not preserve it, and alteration crept in.' },
  shubha:{ ar:'بَعضُهُم يَقول: «أنتُم تُؤمِنونَ بِالتَّوراةِ وتَقولونَ إنَّها حُرِّفَت — كَيفَ ذلك؟» 🤨', en:'Some say: "You believe in the Tawrah yet say it was altered — how does that work?" 🤨' },
  logic:{
    ar:'الجَوابُ بَسيطٌ وجَميل: نَحنُ نُؤمِنُ بِـ<b>الأصل</b> الذي أنزَلَهُ اللهُ على موسى — كُلُّ حَرفٍ نَزَلَ مِنَ السَّماءِ حَقٌّ نُؤمِنُ بِه. أمّا <b>النُّسَخُ</b> التي كَتَبَها النّاسُ بَعدَ قُرونٍ فَقَد دَخَلَها التَّبديل، لِأنَّ اللهَ وَكَلَ حِفظَها إلى النّاسِ فَلَم يَحفَظوها: ﴿بِما استُحفِظوا مِن كِتابِ الله﴾. مِثالٌ يُقَرِّب: لَو أرسَلَ المَلِكُ رِسالةً ذَهَبِيّةً، ثُمَّ نَسَخَها النّاسُ بِأيديهِم مَرّاتٍ ومَرّات، وزادَ بَعضُهُم ونَقَصَ بَعضُهُم — تَبقى رِسالةُ المَلِكِ الأصلِيّةُ حَقّاً، وإن لم تَعُدِ النُّسَخُ مُطابِقةً لَها. ولِهذا نَقولُ عن أيِّ كَلامٍ في الكُتُبِ السّابِقةِ اليوم: ما وافَقَ القُرآنَ صَدَّقناه، وما خالَفَهُ عَرَفنا أنه مِن تَغييرِ الأيدي. والقُرآنُ جاءَ <b>مُهَيمِناً</b>: شاهِداً وحاكِماً على ما قَبلَه.',
    en:'The answer is simple and beautiful: we believe in <b>the original</b> Allah sent down to Musa — every letter that came from heaven is truth we believe in. But the <b>copies</b> people wrote centuries later suffered changes, because Allah entrusted its preservation to the people, and they failed: ﴾as they were entrusted with the Book of Allah﴿. A helpful example: if the king sends a golden letter, and people copy it by hand again and again, some adding and some dropping — the king\'s original letter remains true, even if the copies no longer match it. That\'s why we say of anything in the earlier books today: what agrees with the Quran we affirm, and what contradicts it we know came from human hands. And the Quran came as <b>guardian</b>: a witness and judge over what came before.' },
  myth:{ claim:{ ar:'«المُسلِمُ لا يَحتَرِمُ الكُتُبَ السّابِقة!»', en:'"Muslims don\'t respect the earlier books!"' },
         bust:{ ar:'لا يَكتَمِلُ إيمانُ المُسلِمِ إلّا بِالإيمانِ بِالتَّوراةِ والإنجيلِ والزَّبورِ كَما أنزَلَها الله — نُؤمِنُ بِالأصلِ ونَعرِفُ ما غَيَّرَتهُ الأيدي.', en:'A Muslim\'s faith is incomplete without believing in the Tawrah, Injil, and Zabur as Allah revealed them — we believe in the originals and recognize what human hands changed.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِوَصفِه', en:'Match each item to its description' },
    pairs:[
      { tool:{ar:'التَّوراة',en:'The Tawrah'}, job:{ar:'فيها هُدًى ونور',en:'In it guidance and light'} },
      { tool:{ar:'موسى عليه السلام',en:'Musa (peace be upon him)'}, job:{ar:'كَلَّمَهُ اللهُ تَكليماً',en:'Allah spoke to him directly'} },
      { tool:{ar:'الألواح',en:'The Tablets'}, job:{ar:'مَوعِظةٌ وتَفصيلُ كُلِّ شَيء',en:'Admonition and explanation of all things'} },
      { tool:{ar:'القُرآن',en:'The Quran'}, job:{ar:'مُهَيمِنٌ على ما قَبلَه',en:'Guardian over what came before'} },
    ] },
  reflection:{
    ayah:'﴿إِنَّا أَنزَلْنَا التَّوْرَاةَ فِيهَا هُدًى وَنُورٌ ۚ يَحْكُمُ بِهَا النَّبِيُّونَ الَّذِينَ أَسْلَمُوا﴾',
    ref:{ ar:'سورة المائِدة · ٤٤', en:'Surah Al-Ma\'idah · 44' },
    explain:{
      ar:'تَأمَّل: ﴿يَحكُمُ بِها النَّبِيّونَ الذينَ أسلَموا﴾ — حتّى الأنبِياءُ بَعدَ موسى كانوا يَحكُمونَ بِالتَّوراة، فالأنبِياءُ سِلسِلةٌ واحِدةٌ يَخدِمُ بَعضُها بَعضاً، وكُلُّهُم «أسلَموا» — اِستَسلَموا للهِ وَحدَه. ولاحِظ كَلِمةَ «نور»: الكُتُبُ السَّماوِيّةُ أنوارٌ تُضيءُ ظُلُماتِ الحَيرة.',
      en:'Reflect: ﴾by it the prophets who submitted judged﴿ — even prophets after Musa ruled by the Tawrah. The prophets are one chain serving one another, and all of them "submitted" — surrendered to Allah alone. And notice the word "light": the revealed books are lights illuminating the darkness of confusion.' } },
  card:{ name:{ar:'التَّوراة',en:'The Tawrah'}, meaning:{ar:'الكِتابُ الذي أنزَلَهُ اللهُ على موسى عليه السلام، فيهِ هُدًى ونورٌ ووَصايا — نُؤمِنُ بِأصلِهِ الذي نَزَلَ مِنَ السَّماء',en:'The book Allah sent down to Musa, holding guidance, light, and commandments — we believe in its original as revealed from heaven'} },
  proof:{ ar:'أُومِنُ بِكُلِّ كِتابٍ أنزَلَهُ الله، والقُرآنُ شاهِدٌ على ما قَبلَه', en:'I believe in every book Allah revealed — and the Quran is witness over what came before' },
  dua:{ ar:'اللهُمَّ اجعَلِ القُرآنَ رَبيعَ قَلبي ونورَ صَدري', en:'O Allah, make the Quran the spring of my heart and the light of my chest' },
  mission:{ ar:'⛰️ مُهِمّةُ المَحطّة: مِن وَصايا التَّوراةِ العَشر: بِرُّ الوالِدَين. اختَر اليومَ عَمَلاً واحِداً تَبَرُّ بِهِ والِدَيك (تَقبيلُ رَأس، مُساعَدة، كَلِمةُ شُكر) ونَفِّذهُ قَبلَ النَّوم.', en:'⛰️ Station Mission: Among the Tawrah\'s commandments: honoring parents. Choose one act of kindness for your parents today (a kiss on the head, helping out, a thank-you) and do it before bedtime.' },
  badge:{ icon:'🔥', color:'#27AE60', title:{ ar:'صاحِبُ الألواح', en:'Keeper of the Tablets' } }
},

/* ───────────── 4 · The Zabur ───────────── */
{
  id:'zabur', num:4, icon:'🎵', emoji:'🏔️', color:'#8E44AD',
  title:{ ar:'الزَّبور — تَسابيحُ داوود', en:'The Zabur — The Psalms of Dawud' },
  narration:{
    ar:'مَحَطَّتُنا الآنَ مَعَ نَبِيٍّ مَلِكٍ أعطاهُ اللهُ <b>أجمَلَ صَوتٍ في التّاريخ</b>: <b>داوودُ</b> عليه السلام! 🎵 أنزَلَ اللهُ علَيهِ <b>الزَّبور</b>: كِتابَ تَسابيحَ وأدعِيةٍ وثَناءٍ على الله. قالَ تَعالى: ﴿وآتَينا داوودَ زَبوراً﴾. وكانَ إذا رَتَّلَ الزَّبورَ يَحدُثُ شَيءٌ لا يُصَدَّق: <b>الجِبالُ الصُّمُّ تُسَبِّحُ مَعَهُ والطَّيرُ تَتَوَقَّفُ في السَّماءِ لِتُرَدِّدَ خَلفَه</b>! ﴿يا جِبالُ أوِّبي مَعَهُ والطَّير﴾. وأعطاهُ اللهُ مَعَ المُلكِ والقُوّةِ قَلباً أوّاباً — كَثيرَ الرُّجوعِ إلى الله. يُعَلِّمُنا الزَّبورُ أنَّ مِن أعظَمِ العِبادةِ: <b>الثَّناءَ على اللهِ بِصَوتٍ جَميلٍ وقَلبٍ حاضِر</b> — وهذا سِرٌّ نَأخُذُهُ مَعَنا إلى تِلاوةِ القُرآن: زَيِّنوا القُرآنَ بِأصواتِكُم!',
    en:'Our station now is with a prophet-king whom Allah gave <b>the most beautiful voice in history</b>: <b>Dawud</b> (peace be upon him)! 🎵 Allah sent down to him <b>the Zabur</b>: a book of praises, supplications, and glorification of Allah. He said: ﴾And We gave Dawud the Zabur﴿. When he chanted it, something unbelievable happened: <b>the solid mountains glorified Allah with him, and the birds paused in the sky to echo behind him</b>! ﴾O mountains, repeat praises with him — and the birds!﴿ Along with kingship and strength, Allah gave him an ever-returning heart — constantly turning back to Allah. The Zabur teaches us that among the greatest worship is <b>praising Allah with a beautiful voice and a present heart</b> — a secret we carry into our Quran recitation: beautify the Quran with your voices!' },
  shubha:{ ar:'بَعضُهُم يَقول: «العِبادةُ ثَقيلةٌ ولا فَرَحَ فيها!» 🤨', en:'Some say: "Worship is heavy — there\'s no joy in it!" 🤨' },
  logic:{
    ar:'حَقّاً؟ انظُر إلى داوود: كانَ مَلِكاً عِندَهُ كُلُّ شَيء، ومَعَ ذلك كانَت <b>أسعَدُ لَحَظاتِهِ</b> حينَ يُسَبِّحُ رَبَّهُ حتّى تُسَبِّحَ مَعَهُ الجِبالُ والطَّير! العِبادةُ الحَقيقيّةُ لَيسَت واجِباً ثَقيلاً بَل <b>لِقاءً مَعَ مَن نُحِبّ</b>. جَرِّب أنتَ: رَتِّل آيةً بِأجمَلِ صَوتِكَ وأنتَ تَفهَمُ مَعناها — سَتَشعُرُ بِفَرَحٍ غَريبٍ في قَلبِك. ثُمَّ تَأمَّل: لِماذا جَعَلَ اللهُ الجِبالَ والطَّيرَ تُسَبِّحُ مَعَ داوود؟ لِيُرِيَنا أنَّ <b>الكَونَ كُلَّهُ يُسَبِّح</b>: ﴿وإن مِن شَيءٍ إلّا يُسَبِّحُ بِحَمدِهِ ولكِن لا تَفقَهونَ تَسبيحَهُم﴾. فَحينَ تُسَبِّحُ أنتَ، فَأنتَ لَستَ وَحدَك — أنتَ تَنضَمُّ إلى جَوقةِ الكَونِ كُلِّه!',
    en:'Really? Look at Dawud: a king who had everything, yet his <b>happiest moments</b> were when he glorified his Lord until the mountains and birds joined in! True worship isn\'t a heavy duty but <b>a meeting with the One we love</b>. Try it: chant a verse in your most beautiful voice while understanding its meaning — you\'ll feel a wondrous joy in your heart. Then reflect: why did Allah make the mountains and birds glorify with Dawud? To show us that <b>the whole universe glorifies Him</b>: ﴾There is nothing that does not glorify Him with praise, but you do not understand their glorification﴿. So when you say "subhanAllah," you are never alone — you\'re joining the choir of the entire universe!' },
  myth:{ claim:{ ar:'«التَّسبيحُ مُجَرَّدُ كَلِماتٍ تُقالُ بِلا أثَر!»', en:'"Tasbih is just words with no effect!"' },
         bust:{ ar:'التَّسبيحُ لُغةُ الكَونِ كُلِّه: الجِبالُ والطَّيرُ والنُّجومُ تُسَبِّح — وكَلِمَتانِ خَفيفَتانِ ثَقيلَتانِ في الميزان.', en:'Tasbih is the language of the whole universe: mountains, birds, and stars glorify Him — two light words, heavy on the scale.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِوَصفِه', en:'Match each item to its description' },
    pairs:[
      { tool:{ar:'الزَّبور',en:'The Zabur'}, job:{ar:'كِتابُ تَسابيحَ أُنزِلَ على داوود',en:'A book of praises given to Dawud'} },
      { tool:{ar:'الجِبالُ والطَّير',en:'The mountains and birds'}, job:{ar:'تُسَبِّحُ مَعَ داوود',en:'Glorified Allah with Dawud'} },
      { tool:{ar:'قَلبُ داوودَ الأوّاب',en:'Dawud\'s returning heart'}, job:{ar:'كَثيرُ الرُّجوعِ إلى الله',en:'Always turning back to Allah'} },
      { tool:{ar:'صَوتُكَ الجَميلُ بِالقُرآن',en:'Your beautiful Quran voice'}, job:{ar:'زينةُ التِّلاوة',en:'The adornment of recitation'} },
    ] },
  reflection:{
    ayah:'﴿وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ﴾',
    ref:{ ar:'سورة سَبَأ · ١٠', en:'Surah Saba · 10' },
    explain:{
      ar:'أمَرَ اللهُ الجِبالَ — أصلَبَ المَخلوقاتِ وأصَمَّها — أن تُرَدِّدَ التَّسبيحَ مَعَ داوود، والطَّيرَ أن تُجاوِبَه. فالخُشوعُ لَيسَ ضَعفاً: أقوى القُلوبِ أكثَرُها تَسبيحاً. وفيها بُشرى لَك: إذا رَتَّلتَ كَلامَ اللهِ بِقَلبٍ حاضِر، شارَكَكَ الكَونُ الذي حَولَكَ بِلُغَتِهِ الخَفِيّة.',
      en:'Allah commanded the mountains — the hardest, most silent of creatures — to echo the praises with Dawud, and the birds to answer him. Humility is not weakness: the strongest hearts glorify the most. And here\'s good news for you: when you chant Allah\'s words with a present heart, the universe around you joins in with its hidden language.' } },
  card:{ name:{ar:'الزَّبور',en:'The Zabur'}, meaning:{ar:'الكِتابُ الذي آتاهُ اللهُ داوودَ عليه السلام: تَسابيحُ وثَناءٌ ودُعاء، كانَتِ الجِبالُ والطَّيرُ تُرَدِّدُها مَعَه',en:'The book Allah gave Dawud: praises, glorification, and supplication, echoed by the mountains and the birds'} },
  proof:{ ar:'حينَ أُسَبِّحُ اللهَ أنضَمُّ إلى جَوقةِ الكَونِ كُلِّه', en:'When I glorify Allah, I join the choir of the whole universe' },
  dua:{ ar:'سُبحانَ اللهِ وبِحَمدِه، سُبحانَ اللهِ العَظيم', en:'Glory and praise be to Allah; glory be to Allah the Magnificent' },
  mission:{ ar:'🎵 مُهِمّةُ المَحطّة: افعَل مِثلَ داوود: اختَر سورةً قَصيرةً تَحفَظُها ورَتِّلها اليومَ بِأجمَلِ صَوتِكَ ثَلاثَ مَرّات — مَرّةً بَعدَ كُلِّ صَلاة. ولا تَستَحِ مِن صَوتِك!', en:'🎵 Station Mission: Do like Dawud: pick a short surah you know and chant it today in your most beautiful voice three times — once after each prayer. And don\'t be shy about your voice!' },
  badge:{ icon:'🏔️', color:'#8E44AD', title:{ ar:'مُرَتِّلُ التَّسابيح', en:'Chanter of Praises' } }
},

/* ───────────── 5 · The Injil ───────────── */
{
  id:'injil', num:5, icon:'🕊️', emoji:'💚', color:'#16A085',
  title:{ ar:'الإنجيل — بِشارةُ عيسى', en:'The Injil — The Good News of Isa' },
  narration:{
    ar:'مَحَطَّتُنا الخامِسةُ مَعَ نَبِيٍّ وُلِدَ بِمُعجِزةٍ مِن غَيرِ أب: <b>عيسى ابنُ مَريَمَ</b> عليه السلام. 💚 أرسَلَهُ اللهُ إلى بَني إسرائيلَ بَعدَما قَسَت قُلوبُهُم وانشَغَلوا بِالدُّنيا، وآتاهُ <b>الإنجيل</b> — ومَعنى الكَلِمة: <b>البِشارة</b>! قالَ اللهُ: ﴿وآتَيناهُ الإنجيلَ فيهِ <b>هُدًى ونور</b>، ومُصَدِّقاً لِما بَينَ يَدَيهِ مِنَ التَّوراة﴾. لاحِظ: الإنجيلُ جاءَ <b>مُصَدِّقاً</b> لِلتَّوراةِ لا ناقِضاً لَها — حَلقةٌ جَديدةٌ في نَفسِ السِّلسِلة! وكانَ مِن أعظَمِ بِشاراتِ الإنجيل: البِشارةُ بِرَسولٍ يَأتي مِن بَعدِ عيسى ﴿اسمُهُ أحمَد﴾. ونَحنُ المُسلِمونَ نُحِبُّ عيسى ونُؤمِنُ بِهِ نَبِيّاً كَريماً مِن أُولي العَزم، ونُؤمِنُ بِالإنجيلِ الذي أنزَلَهُ اللهُ علَيه — عَبدُ اللهِ ورَسولُهُ وكَلِمَتُهُ ألقاها إلى مَريَم.',
    en:'Our fifth station is with a prophet born by a miracle, without a father: <b>Isa son of Maryam</b> (peace be upon him). 💚 Allah sent him to the Children of Israel after their hearts had hardened and they busied themselves with worldly things, and gave him <b>the Injil</b> — the word means <b>good news</b>! Allah said: ﴾And We gave him the Injil, in it <b>guidance and light</b>, confirming the Tawrah that came before it﴿. Notice: the Injil came <b>confirming</b> the Tawrah, not demolishing it — a new link in the same chain! Among the Injil\'s greatest good news: the tiding of a messenger coming after Isa ﴾whose name is Ahmad﴿. We Muslims love Isa and believe in him as a noble prophet of great resolve, and we believe in the Injil Allah revealed to him — Allah\'s servant, His messenger, and His word bestowed upon Maryam.' },
  shubha:{ ar:'بَعضُهُم يَقول: «الأديانُ السَّماوِيّةُ مُتَعادِيةٌ ومُتَناقِضة!» 🤨', en:'Some say: "The revealed religions are enemies that contradict each other!" 🤨' },
  logic:{
    ar:'تَعالَ نُدَقِّق: مَن أرسَلَ موسى؟ الله. ومَن أرسَلَ عيسى؟ الله. ومَن أرسَلَ مُحَمَّداً ﷺ؟ اللهُ نَفسُهُ سُبحانَه! وكُلُّهُم جاؤوا بِنَفسِ الأصل: <b>اعبُدوا اللهَ وَحدَهُ لا شَريكَ لَه</b>. قالَ عيسى: ﴿إنَّ اللهَ رَبّي ورَبُّكُم فاعبُدوهُ هذا صِراطٌ مُستَقيم﴾ — نَفسُ كَلِمةِ التَّوحيدِ التي قالَها نوحٌ وإبراهيمُ وموسى ومُحَمَّدٌ ﷺ! إذَن مِن أينَ جاءَ الاختِلاف؟ مِنَ النّاسِ <b>بَعدَ</b> الأنبِياء: غَيَّروا وبَدَّلوا وأضافوا، فابتَعَدَت الطُّرُقُ عنِ الأصلِ الواحِد. الرِّسالةُ الأصلِيّةُ واحِدة، والرُّسُلُ إخوةٌ يُصَدِّقُ بَعضُهُم بَعضاً، وآخِرُ حَلقةٍ — القُرآنُ — جاءَت لِتُعيدَ الجَميعَ إلى النَّبعِ الصّافي.',
    en:'Let\'s check carefully: who sent Musa? Allah. Who sent Isa? Allah. Who sent Muhammad ﷺ? The very same Allah! And all of them brought the same core: <b>worship Allah alone, with no partner</b>. Isa said: ﴾Indeed Allah is my Lord and your Lord, so worship Him — this is a straight path﴿ — the same word of tawheed spoken by Nuh, Ibrahim, Musa, and Muhammad ﷺ! So where did the differences come from? From people <b>after</b> the prophets: they changed, swapped, and added, so the paths drifted from the one origin. The original message is one, the messengers are brothers confirming one another, and the final link — the Quran — came to bring everyone back to the pure spring.' },
  myth:{ claim:{ ar:'«المُسلِمُ لا يُؤمِنُ بِعيسى ولا يُحِبُّه!»', en:'"Muslims don\'t believe in or love Isa (Jesus)!"' },
         bust:{ ar:'لا يَصِحُّ إيمانُ مُسلِمٍ حتّى يُؤمِنَ بِعيسى نَبِيّاً كَريماً وبِالإنجيلِ الذي أنزَلَهُ اللهُ علَيه — نُحِبُّهُ ونُنَزِّهُهُ ونَنتَظِرُ نُزولَهُ آخِرَ الزَّمان.', en:'No Muslim\'s faith is valid without believing in Isa as a noble prophet and in the Injil Allah gave him — we love him, honor him, and await his return at the end of time.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِوَصفِه', en:'Match each item to its description' },
    pairs:[
      { tool:{ar:'الإنجيل',en:'The Injil'}, job:{ar:'مَعناهُ: البِشارة',en:'Its meaning: good news'} },
      { tool:{ar:'عيسى عليه السلام',en:'Isa (peace be upon him)'}, job:{ar:'عَبدُ اللهِ ورَسولُهُ وكَلِمَتُه',en:'Allah\'s servant, messenger, and word'} },
      { tool:{ar:'«مُصَدِّقاً لِما بَينَ يَدَيه»',en:'"Confirming what came before"'}, job:{ar:'الكُتُبُ حَلَقاتُ سِلسِلةٍ واحِدة',en:'The books are links of one chain'} },
      { tool:{ar:'﴿اسمُهُ أحمَد﴾',en:'"Whose name is Ahmad"'}, job:{ar:'بِشارةُ الإنجيلِ بِنَبِيِّنا ﷺ',en:'The Injil\'s tiding of our Prophet ﷺ'} },
    ] },
  reflection:{
    ayah:'﴿وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ﴾',
    ref:{ ar:'سورة المائِدة · ٤٦', en:'Surah Al-Ma\'idah · 46' },
    explain:{
      ar:'نَفسُ الوَصفِ تَكَرَّر: «هُدًى ونور». كُلُّ كُتُبِ اللهِ أنوارٌ مِن مِشكاةٍ واحِدة، وكُلُّ كِتابٍ يُصَدِّقُ الذي قَبلَهُ ويُبَشِّرُ بِالذي بَعدَه — كَأنَّها مَصابيحُ مُتَتالِيةٌ على طَريقٍ واحِدٍ يوصِلُ إلى الله. فالمُؤمِنُ الحَقُّ يُؤمِنُ بِها جَميعاً ولا يُفَرِّقُ بَينَ أحَدٍ مِن رُسُلِه.',
      en:'The same description again: "guidance and light." All Allah\'s books are lights from one lantern; each book confirms the one before and heralds the one after — like successive lamps along a single road leading to Allah. The true believer believes in them all, making no distinction between any of His messengers.' } },
  card:{ name:{ar:'الإنجيل',en:'The Injil'}, meaning:{ar:'كِتابُ البِشارةِ الذي آتاهُ اللهُ عيسى عليه السلام: هُدًى ونور، مُصَدِّقٌ لِلتَّوراة، وفيهِ البِشارةُ بِنَبِيِّنا ﷺ',en:'The book of good news Allah gave Isa: guidance and light, confirming the Tawrah, and heralding our Prophet ﷺ'} },
  proof:{ ar:'كُتُبُ اللهِ مَصابيحُ مُتَتالِيةٌ على طَريقٍ واحِدٍ إلى الله', en:'Allah\'s books are successive lamps along one road to Allah' },
  dua:{ ar:'اللهُمَّ آمَنّا بِما أنزَلتَ واتَّبَعنا الرَّسولَ فاكتُبنا مَعَ الشّاهِدين', en:'O Allah, we believe in what You revealed and follow the Messenger, so write us among the witnesses' },
  mission:{ ar:'💚 مُهِمّةُ المَحطّة: ارسُم سِلسِلةً مِن خَمسِ حَلَقات، واكتُب فيها بِالتَّرتيب: صُحُفُ إبراهيم — التَّوراة — الزَّبور — الإنجيل — القُرآن. عَلِّقها فَوقَ مَكتَبِكَ لِتَتَذَكَّرَ أنَّ رِسالةَ اللهِ سِلسِلةٌ واحِدة.', en:'💚 Station Mission: Draw a chain of five links and write in order: Scriptures of Ibrahim — Tawrah — Zabur — Injil — Quran. Hang it above your desk to remember that Allah\'s message is one chain.' },
  badge:{ icon:'💚', color:'#16A085', title:{ ar:'حامِلُ البِشارة', en:'Bearer of Good News' } }
},

/* ───────────── 6 · The Quran ───────────── */
{
  id:'quran', num:6, icon:'📖', emoji:'🌕', color:'#C0392B',
  title:{ ar:'القُرآن — الرِّسالةُ الخاتِمةُ المَحفوظة', en:'The Quran — The Final, Protected Message' },
  narration:{
    ar:'وَصَلنا إلى تاجِ الكُتُبِ كُلِّها: <b>القُرآنُ الكَريم</b>! 🌕 آخِرُ رَسائِلِ السَّماءِ إلى الأرض، أنزَلَهُ اللهُ على خاتَمِ النَّبِيّينَ مُحَمَّدٍ ﷺ لِيَكونَ كِتابَ <b>البَشَرِيّةِ كُلِّها</b> إلى يَومِ القِيامة — لا لِقَومٍ واحِدٍ كَالكُتُبِ السّابِقة. وتَمَيَّزَ عنها بِأمرَينِ عَظيمَين: الأوَّل أنه <b>مُهَيمِن</b>: شاهِدٌ على الكُتُبِ قَبلَهُ، يُصَدِّقُ ما بَقِيَ فيها مِنَ الحَقِّ ويُبَيِّنُ ما غَيَّرَتهُ الأيدي. والثّاني — وهُنا المُعجِزة — أنَّ اللهَ تَكَفَّلَ <b>بِحِفظِهِ بِنَفسِهِ</b>: ﴿إنّا نَحنُ نَزَّلنا الذِّكرَ وإنّا لَهُ <b>لَحافِظون</b>﴾! الكُتُبُ السّابِقةُ وُكِلَ حِفظُها لِلنّاسِ فَضاعَت، أمّا القُرآنُ فَحارِسُهُ اللهُ نَفسُه: في الصُّدورِ والسُّطور، يَحفَظُهُ الطِّفلُ في إندونيسيا والشَّيخُ في المَغرِب بِنَفسِ الحَرف، مُنذُ أربَعةَ عَشَرَ قَرناً لم يَتَغَيَّر فيهِ حَرفٌ واحِد.',
    en:'We\'ve reached the crown of all the books: <b>the Noble Quran</b>! 🌕 The last of heaven\'s letters to earth, sent down upon the seal of the prophets, Muhammad ﷺ, to be the book of <b>all humanity</b> until the Day of Resurrection — not of one nation like the earlier books. It stands apart in two great ways: first, it is <b>muhaymin</b> — guardian and witness over the books before it, confirming the truth that remains in them and exposing what hands have changed. Second — and here is the miracle — Allah took it upon <b>Himself</b> to protect it: ﴾Indeed, We sent down the Reminder, and indeed We will <b>guard it</b>﴿! The earlier books were entrusted to people, and were lost; but the Quran\'s guardian is Allah Himself: in hearts and on pages, memorized by a child in Indonesia and an elder in Morocco with the very same letters — fourteen centuries without one letter changing.' },
  shubha:{ ar:'بَعضُهُم يَقول: «وما أدراكُم أنَّ القُرآنَ لم يَتَغَيَّر مِثلَ غَيرِه؟» 🤨', en:'Some say: "How do you know the Quran hasn\'t changed like the others?" 🤨' },
  logic:{
    ar:'هذِهِ تَجرِبةٌ يُمكِنُكَ فِعلُها بِنَفسِك! اذهَب إلى أيِّ مَسجِدٍ في الصّينِ أو أمريكا أو جَنوبِ إفريقيا، وافتَح أيَّ مُصحَفٍ — سَتَجِدُ <b>نَفسَ الحُروفِ تَماماً</b>. لِماذا؟ لِأنَّ القُرآنَ حُفِظَ بِطَريقَتَينِ مَعاً لا تُوجَدانِ لِأيِّ كِتابٍ آخَر: <b>الصُّدور</b>: مَلايينُ الحُفّاظِ في كُلِّ جيلٍ يَحفَظونَهُ كامِلاً عن ظَهرِ قَلب — لَو جُمِعَت كُلُّ المَصاحِفِ مِنَ الأرضِ لَأعادَهُ الحُفّاظُ كامِلاً في يَومٍ واحِد! و<b>السُّطور</b>: كُتِبَ كامِلاً في حَياةِ النَّبِيِّ ﷺ وجُمِعَ بَعدَهُ مُباشَرةً بِشَهادةِ الصَّحابةِ الذينَ سَمِعوهُ مِن فَمِه. وجَرِّب: لَو أخطَأ الإمامُ في حَرفٍ، لَصاحَ المُصَلّونَ خَلفَهُ بِالتَّصحيحِ فَوراً — أيُّ كِتابٍ في الدُّنيا يَحرُسُهُ النّاسُ هكذا؟ إنه وَعدُ الله: ﴿وإنّا لَهُ لَحافِظون﴾ — وَعدٌ نَراهُ مُحَقَّقاً أمامَ أعيُنِنا كُلَّ يَوم.',
    en:'This is an experiment you can run yourself! Go to any mosque in China, America, or South Africa, open any mushaf — you\'ll find <b>exactly the same letters</b>. Why? Because the Quran is preserved in two ways at once, found in no other book: <b>hearts</b>: millions of memorizers in every generation carry it entirely by heart — if every mushaf on earth were gathered up, the huffaz could rewrite it complete in a single day! And <b>pages</b>: it was written down fully during the Prophet\'s ﷺ lifetime and compiled right after, witnessed by companions who heard it from his own mouth. And try this: if an imam slips on one letter, worshippers behind him call out the correction instantly — what book on earth is guarded by its people like that? It is Allah\'s promise: ﴾indeed, We will guard it﴿ — a promise we watch come true before our eyes every day.' },
  myth:{ claim:{ ar:'«القُرآنُ كِتابٌ قَديمٌ لِزَمَنٍ قَديم!»', en:'"The Quran is an old book for an old time!"' },
         bust:{ ar:'القُرآنُ الرِّسالةُ الخاتِمةُ لِكُلِّ زَمانٍ ومَكان، مَحفوظٌ بِوَعدِ الله، غَضٌّ طَرِيٌّ كَأنه نَزَلَ اليوم.', en:'The Quran is the final message for every time and place, protected by Allah\'s promise — fresh as if revealed today.' } },
  match:{
    title:{ ar:'صِل كُلَّ صِفةٍ لِلقُرآنِ بِمَعناها', en:'Match each quality of the Quran to its meaning' },
    pairs:[
      { tool:{ar:'الخاتِم',en:'The Final'}, job:{ar:'آخِرُ الكُتُبِ فَلا كِتابَ بَعدَه',en:'The last book — none after it'} },
      { tool:{ar:'المُهَيمِن',en:'The Guardian (Muhaymin)'}, job:{ar:'شاهِدٌ وحاكِمٌ على ما قَبلَه',en:'Witness and judge over what preceded'} },
      { tool:{ar:'المَحفوظ',en:'The Protected'}, job:{ar:'تَكَفَّلَ اللهُ بِحِفظِهِ بِنَفسِه',en:'Allah Himself guaranteed its protection'} },
      { tool:{ar:'لِلعالَمين',en:'For all the worlds'}, job:{ar:'رِسالةُ البَشَرِيّةِ كُلِّها',en:'The message of all humanity'} },
    ] },
  reflection:{
    ayah:'﴿إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ﴾',
    ref:{ ar:'سورة الحِجر · ٩', en:'Surah Al-Hijr · 9' },
    explain:{
      ar:'تَأمَّل التَّوكيدات: «إنّا نَحنُ» ثُمَّ «وإنّا لَهُ لَحافِظون» — وَعدٌ مُؤَكَّدٌ مِن مَلِكِ المُلوك. أربَعةَ عَشَرَ قَرناً حاوَلَ فيها أعداءٌ كَثيرونَ تَغييرَ حَرفٍ واحِدٍ فَما استَطاعوا. وأنتَ حينَ تَحفَظُ آيةً واحِدة، تُصبِحُ جُندِيّاً مِن جُنودِ هذا الوَعدِ الإلَهيّ — يا لَهُ مِن شَرَف!',
      en:'Notice the emphasis: "Indeed, We Ourselves" then "indeed, We will guard it" — a confirmed promise from the King of kings. For fourteen centuries many enemies tried to change a single letter and could not. And when you memorize even one verse, you become a soldier of this divine promise — what an honor!' } },
  card:{ name:{ar:'القُرآنُ الكَريم',en:'The Noble Quran'}, meaning:{ar:'كَلامُ اللهِ الخاتِم، المُهَيمِنُ على الكُتُبِ قَبلَه، المَحفوظُ في الصُّدورِ والسُّطورِ بِوَعدِ اللهِ إلى يَومِ القِيامة',en:'Allah\'s final words, guardian over the books before it, preserved in hearts and pages by Allah\'s promise until the Day of Resurrection'} },
  proof:{ ar:'القُرآنُ بَينَ يَدَيَّ هو نَفسُهُ الذي نَزَلَ بِهِ جِبريلُ — حَرفاً حَرفاً', en:'The Quran in my hands is the very one Jibril brought down — letter by letter' },
  dua:{ ar:'اللهُمَّ اجعَلنا مِن أهلِ القُرآنِ الذينَ هُم أهلُكَ وخاصَّتُك', en:'O Allah, make us among the people of the Quran — Your people, Your chosen ones' },
  mission:{ ar:'🌕 مُهِمّةُ المَحطّة: كُن جُندِيّاً مِن جُنودِ الحِفظ: احفَظ هذا الأُسبوعَ ثَلاثَ آياتٍ جَديدةً وسَمِّعها لِمَن تُحِبّ. كُلُّ آيةٍ تَحفَظُها نورٌ يَومَ القِيامة!', en:'🌕 Station Mission: Become a soldier of preservation: memorize three new verses this week and recite them to someone you love. Every verse you keep is a light on the Day of Resurrection!' },
  badge:{ icon:'🌕', color:'#C0392B', title:{ ar:'جُنديُّ الحِفظ', en:'Soldier of Preservation' } }
},

/* ───────────── 7 · What Is a Miracle? ───────────── */
{
  id:'mujiza', num:7, icon:'👑', emoji:'🔏', color:'#D4A017',
  title:{ ar:'ما المُعجِزة؟ — خَتمُ المَلِك', en:'What Is a Miracle? — The King\'s Seal' },
  narration:{
    ar:'سُؤالٌ مُهِمٌّ جِدّاً: إذا جاءَكَ رَجُلٌ وقال «أنا رَسولٌ مِن عِندِ الله» — كَيفَ تَعرِفُ أنه صادِق؟ 🔏 فَكِّر: حينَ يُرسِلُ المَلِكُ مَبعوثاً، يُعطيهِ <b>خَتمَهُ المَلَكِيَّ</b> الذي لا يَستَطيعُ أحَدٌ تَقليدَه، فإذا رَأى النّاسُ الخَتمَ عَرَفوا أنه مَبعوثُ المَلِكِ حَقّاً. وهكذا <b>المُعجِزة</b>: أمرٌ خارِقٌ لا يَقدِرُ علَيهِ بَشَرٌ أبَداً، <b>يُجريهِ اللهُ</b> على يَدِ رَسولِهِ لِيَقولَ لِلنّاس: «هذا مَبعوثي فَصَدِّقوه». وهُنا أهَمُّ دَرسٍ في رِحلَتِنا كُلِّها، فَرَكِّز مَعي: المُعجِزةُ <b>مِن أمرِ اللهِ وَحدَه</b> — لَيسَت قُدرةً في جِسمِ النَّبِيِّ ولا سِحراً يَملِكُه! العَصا لا تَنقَلِبُ حَيّةً لِأنَّ موسى «ساحِرٌ ماهِر»، بَل لِأنَّ اللهَ أمَرَها. قالَ اللهُ قاعِدةً ذَهَبِيّة: ﴿وما كانَ لِرَسولٍ أن يَأتِيَ بِآيةٍ <b>إلّا بِإذنِ الله</b>﴾. الأنبِياءُ بَشَرٌ مِثلُنا: يَأكُلونَ ويَنامونَ ويَمرَضون — والقُدرةُ كُلُّها لله.',
    en:'A very important question: if a man came saying "I am a messenger from Allah" — how would you know he\'s truthful? 🔏 Think: when a king sends an envoy, he gives him his <b>royal seal</b> that no one can forge; when people see the seal, they know he truly is the king\'s envoy. That is the <b>miracle</b>: an extraordinary act no human could ever perform, which <b>Allah carries out</b> at the hand of His messenger to tell people: "This is My envoy — believe him." And here is the most important lesson of our whole journey, so focus with me: the miracle is <b>from Allah\'s command alone</b> — it is not a power inside the prophet\'s body, nor magic he owns! The staff doesn\'t become a serpent because Musa is a "skilled magician," but because Allah commanded it. Allah stated the golden rule: ﴾It is not for any messenger to bring a sign <b>except by Allah\'s leave</b>﴿. The prophets are humans like us: they eat, sleep, and fall ill — and all power belongs to Allah.' },
  shubha:{ ar:'بَعضُهُم يَقول: «المُعجِزاتُ مُجَرَّدُ خُدَعٍ وسِحرٍ وألعابٍ بارِعة!» 🤨', en:'Some say: "Miracles are just tricks, magic, and clever illusions!" 🤨' },
  logic:{
    ar:'تَعالَ نُفَرِّق بَينَهُما كَالعُلَماء: <b>السّاحِرُ</b> يَتَدَرَّبُ سِنينَ على خُدعَتِهِ، ويَختارُ مَسرَحَهُ وإضاءَتَهُ بِنَفسِه، ويَعجِزُ أمامَ التَّحَدّي المَفتوح، ويَأخُذُ المالَ والشُّهرة. أمّا <b>مُعجِزةُ النَّبِيّ</b> فَتَقَعُ أمامَ الجَميعِ في وَضَحِ النَّهار، وفي أصعَبِ الظُّروفِ لا أسهَلِها، ولا يَأخُذُ صاحِبُها أجراً بَل يَتَحَمَّلُ الأذى لِيُبَلِّغ! والدَّليلُ الأقوى: حينَ ألقى سَحَرةُ فِرعَونَ حِبالَهُم — وهُم أمهَرُ سَحَرةِ الأرض — ثُمَّ ألقى موسى عَصاهُ فابتَلَعَت كُلَّ شَيء، مَن أوَّلُ مَن آمَن؟ <b>السَّحَرةُ أنفُسُهُم</b>! لِماذا؟ لِأنَّهُم أهلُ الصَّنعة: يَعرِفونَ حُدودَ الخُدعةِ تَماماً، فَلَمّا رَأَوا العَصا عَرَفوا فَوراً: «هذا لَيسَ سِحراً — هذا أمرُ الله!» فَسَجَدوا وقالوا: ﴿آمَنّا بِرَبِّ هارونَ وموسى﴾ — ولَم يُخِفهُم تَهديدُ فِرعَون.',
    en:'Let\'s tell them apart like scientists: a <b>magician</b> trains for years on his trick, picks his own stage and lighting, fails before an open challenge, and takes money and fame. A <b>prophet\'s miracle</b> happens before everyone in broad daylight, in the hardest conditions not the easiest, and its bearer takes no fee — he endures harm just to deliver the message! The strongest proof: when Pharaoh\'s sorcerers cast their ropes — the most skilled magicians on earth — and Musa cast his staff and it swallowed everything, who believed first? <b>The sorcerers themselves</b>! Why? Because they were the experts: they knew exactly where trickery ends, so the moment they saw the staff they knew at once: "This is no magic — this is Allah\'s command!" They fell in prostration saying: ﴾We believe in the Lord of Harun and Musa﴿ — and Pharaoh\'s threats could not scare them.' },
  myth:{ claim:{ ar:'«الأنبِياءُ يَملِكونَ قُوًى خارِقةً في أنفُسِهِم!»', en:'"Prophets possess superpowers of their own!"' },
         bust:{ ar:'الأنبِياءُ بَشَرٌ لا يَملِكونَ لِأنفُسِهِم نَفعاً ولا ضَرّاً — المُعجِزةُ أمرُ اللهِ يُجريهِ على أيديهِم متى شاء.', en:'Prophets are humans with no power to benefit or harm even themselves — the miracle is Allah\'s command, carried out at their hands when He wills.' } },
  match:{
    title:{ ar:'صِل كُلَّ شَيءٍ بِحَقيقَتِه', en:'Match each thing to its truth' },
    pairs:[
      { tool:{ar:'المُعجِزة',en:'The miracle'}, job:{ar:'خَتمُ المَلِكِ يُصَدِّقُ رَسولَه',en:'The King\'s seal verifying His envoy'} },
      { tool:{ar:'مَصدَرُ المُعجِزة',en:'The miracle\'s source'}, job:{ar:'أمرُ اللهِ وَحدَهُ لا قُدرةُ البَشَر',en:'Allah\'s command alone, not human power'} },
      { tool:{ar:'السِّحر',en:'Magic'}, job:{ar:'خُدعةٌ تَنكَشِفُ أمامَ الخُبَراء',en:'A trick the experts see through'} },
      { tool:{ar:'سَحَرةُ فِرعَون',en:'Pharaoh\'s sorcerers'}, job:{ar:'عَرَفوا الحَقَّ فَسَجَدوا فَوراً',en:'Knew the truth and fell in prostration'} },
    ] },
  reflection:{
    ayah:'﴿وَمَا كَانَ لِرَسُولٍ أَن يَأْتِيَ بِآيَةٍ إِلَّا بِإِذْنِ اللَّهِ﴾',
    ref:{ ar:'سورة الرَّعد · ٣٨', en:'Surah Ar-Ra\'d · 38' },
    explain:{
      ar:'هذِهِ قاعِدةُ المُعجِزاتِ كُلِّها: لا يَستَطيعُ رَسولٌ — مَهما عَظُمَ قَدرُهُ — أن يَأتِيَ بِمُعجِزةٍ واحِدةٍ مِن عِندِ نَفسِه. فالآيةُ «بِإذنِ الله»: هو وَحدَهُ يُقَرِّرُ متى وكَيف. وهذا يَحمي عَقيدَتَنا: نُحِبُّ الأنبِياءَ ونُوَقِّرُهُم، لكنّا لا نَعبُدُهُم — فالعِبادةُ لِمَن بِيَدِهِ الأمرُ كُلُّه.',
      en:'This is the rule of all miracles: no messenger — however great his rank — can produce a single miracle on his own. The sign comes "by Allah\'s leave": He alone decides when and how. This protects our creed: we love and honor the prophets, but we never worship them — worship belongs to the One in whose hand is the whole command.' } },
  card:{ name:{ar:'المُعجِزة',en:'The Miracle'}, meaning:{ar:'أمرٌ خارِقٌ يُجريهِ اللهُ على يَدِ رَسولِهِ تَصديقاً لَه — خَتمُ المَلِكِ الذي لا يُقَلَّد، ولا قُدرةَ لِبَشَرٍ علَيه',en:'An extraordinary act Allah performs at His messenger\'s hand to verify him — the King\'s unforgeable seal, beyond all human power'} },
  proof:{ ar:'المُعجِزةُ مِن أمرِ اللهِ وَحدَه — الأنبِياءُ بَشَرٌ والقُدرةُ لله', en:'Miracles are from Allah\'s command alone — prophets are human, and the power is Allah\'s' },
  dua:{ ar:'لا حَولَ ولا قُوّةَ إلّا بِالله', en:'There is no might nor power except with Allah' },
  mission:{ ar:'👑 مُهِمّةُ المَحطّة: اشرَح لِأحَدِ إخوَتِكَ أو أصدِقائِكَ الفَرقَ بَينَ المُعجِزةِ والسِّحرِ بِقِصّةِ سَحَرةِ فِرعَون — ولا تَنسَ السُّؤالَ الذَّكِيّ: لِماذا آمَنَ السَّحَرةُ أوَّلَ النّاس؟', en:'👑 Station Mission: Explain to a sibling or friend the difference between miracle and magic using the story of Pharaoh\'s sorcerers — and don\'t forget the clever question: why were the sorcerers the first to believe?' },
  badge:{ icon:'🔏', color:'#D4A017', title:{ ar:'عارِفُ الخَتم', en:'Knower of the Seal' } }
},

/* ───────────── 8 · Miracles of Musa & Isa ───────────── */
{
  id:'musa-isa', num:8, icon:'🌊', emoji:'🤲', color:'#16A085',
  title:{ ar:'مُعجِزاتُ موسى وعيسى — «بِإذنِ الله»', en:'Miracles of Musa & Isa — "By Allah\'s Leave"' },
  narration:{
    ar:'تَعالَ نُشاهِد خَتمَ المَلِكِ يَعمَل! 🌊 أعطى اللهُ <b>موسى</b> تِسعَ آياتٍ بَيِّنات: العَصا تَنقَلِبُ حَيّةً تَسعى، ويَدُهُ تَخرُجُ بَيضاءَ تُضيءُ مِن غَيرِ مَرَض، وحينَ حاصَرَهُ فِرعَونُ عِندَ البَحرِ — الجَيشُ خَلفَهُم والبَحرُ أمامَهُم — قالَ قَومُهُ: «إنّا لَمُدرَكون!» فَقالَ موسى بِيَقينِ المُؤمِن: ﴿كَلّا إنَّ مَعِيَ رَبّي سَيَهدين﴾، فَأوحى اللهُ إلَيه: ﴿اضرِب بِعَصاكَ البَحر﴾ — <b>فانفَلَقَ</b> البَحرُ جَبَلَينِ مِن ماء! وأعطى <b>عيسى</b> مُعجِزاتٍ مِن جِنسِ الرَّحمة: يُبرِئُ الأعمى والأبرَص، ويُحيي المَوتى، ويَنفُخُ في الطّينِ فَيَكونُ طَيراً. لكنِ افتَح أُذُنَيكَ جَيِّداً لِلكَلِمةِ التي تَتَكَرَّرُ في آيةِ المائِدةِ <b>أربَعَ مَرّات</b>: «<b>بِإذني</b>»! تُبرِئُ بِإذني، وتُحيي بِإذني — اللهُ يُعَلِّمُنا: الفاعِلُ هو اللهُ، وعيسى عَبدُهُ ورَسولُه.',
    en:'Come watch the King\'s seal at work! 🌊 Allah gave <b>Musa</b> nine clear signs: the staff turning into a slithering serpent, his hand coming out shining white without illness, and when Pharaoh trapped him at the sea — the army behind, the sea ahead — his people cried: "We are surely caught!" But Musa said with a believer\'s certainty: ﴾No indeed! My Lord is with me; He will guide me﴿. Allah inspired him: ﴾Strike the sea with your staff﴿ — and <b>it split</b> into two mountains of water! And He gave <b>Isa</b> miracles of the mercy kind: healing the blind and the leper, raising the dead, breathing into clay so it became a bird. But open your ears wide for the word repeated in the verse of Al-Ma\'idah <b>four times</b>: "<b>by My leave</b>"! You heal by My leave, you raise by My leave — Allah is teaching us: the Doer is Allah, and Isa is His servant and messenger.' },
  shubha:{ ar:'بَعضُهُم يَقول: «مَن يُحيي المَوتى ويُبرِئُ المَرضى لا بُدَّ أن يَكونَ إلَهاً!» 🤨', en:'Some say: "Whoever raises the dead and heals the sick must be a god!" 🤨' },
  logic:{
    ar:'وهُنا وَقَعَ مَن ضَلَّ في عيسى! لكنَّ القُرآنَ أغلَقَ هذا البابَ بِكَلِمةٍ واحِدةٍ تَتَكَرَّرُ كَالجَرَس: «<b>بِإذني</b>». فَكِّر مَعي بِالمَنطِق: لَو كانَتِ القُدرةُ مِن عيسى نَفسِهِ لَما احتاجَ «إذناً» مِن أحَد! والذي يَحتاجُ الإذنَ عَبدٌ مَأمور، والذي يَأذَنُ هو المَلِكُ القادِر. ودَليلٌ آخَرُ بَسيط: موسى نَفسُهُ الذي فَلَقَ اللهُ البَحرَ بِيَدِهِ — هل كانَ يَفلِقُ البِحارَ متى شاء؟ لا! بَل كانَ يَخافُ ويَجوعُ ويَدعو رَبَّه. وعيسى الذي أحيا اللهُ المَوتى على يَدِهِ كانَ يَنامُ ويَجوعُ ويَتَعَبَّدُ لله — والإلَهُ لا يَجوعُ ولا يَنام! المُعجِزةُ كَالنّورِ في يَدِ حامِلِ المِصباح: النّورُ لَيسَ مِنَ اليَد، بَل مِنَ المَصدَرِ الذي أمَدَّها. فَنُحِبُّ موسى وعيسى حُبّاً عَظيماً، ونَعبُدُ رَبَّ موسى وعيسى.',
    en:'This is exactly where those misled about Isa stumbled! But the Quran closed this door with one word repeated like a bell: "<b>by My leave</b>." Think logically with me: if the power were Isa\'s own, he wouldn\'t need anyone\'s "leave"! The one who needs permission is a commanded servant; the One who grants it is the Able King. Another simple proof: Musa, at whose hand Allah split the sea — could he split seas whenever he wished? No! He felt fear, hunger, and prayed to his Lord. And Isa, at whose hand Allah revived the dead, slept, hungered, and worshipped Allah — and God neither hungers nor sleeps! A miracle is like light in the hand of a lamp-bearer: the light isn\'t from the hand, but from the source feeding it. So we love Musa and Isa immensely — and we worship the Lord of Musa and Isa.' },
  myth:{ claim:{ ar:'«عيسى أحيا المَوتى، إذَن لَهُ قُدرةٌ إلَهيّة!»', en:'"Isa raised the dead, so he must have divine power!"' },
         bust:{ ar:'القُرآنُ يُكَرِّرُها أربَعاً: «بِإذني» — الفاعِلُ هو الله، وعيسى عَبدُ اللهِ ورَسولُهُ، يَجوعُ ويَنامُ ويُصَلّي.', en:'The Quran repeats it four times: "by My leave" — the Doer is Allah; Isa is Allah\'s servant and messenger, who hungered, slept, and prayed.' } },
  match:{
    title:{ ar:'صِل كُلَّ مُعجِزةٍ بِنَبِيِّها', en:'Match each miracle to its prophet' },
    pairs:[
      { tool:{ar:'العَصا واليَدُ البَيضاءُ وفَلقُ البَحر',en:'The staff, the white hand, the parted sea'}, job:{ar:'موسى عليه السلام',en:'Musa (peace be upon him)'} },
      { tool:{ar:'إبراءُ الأكمَهِ وإحياءُ المَوتى',en:'Healing the blind, raising the dead'}, job:{ar:'عيسى عليه السلام',en:'Isa (peace be upon him)'} },
      { tool:{ar:'«بِإذني» أربَعَ مَرّات',en:'"By My leave" four times'}, job:{ar:'القُدرةُ للهِ لا لِلرَّسول',en:'The power is Allah\'s, not the messenger\'s'} },
      { tool:{ar:'﴿إنَّ مَعِيَ رَبّي سَيَهدين﴾',en:'"My Lord is with me; He will guide me"'}, job:{ar:'يَقينُ موسى عِندَ البَحر',en:'Musa\'s certainty at the sea'} },
    ] },
  reflection:{
    ayah:'﴿وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي ۖ وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي﴾',
    ref:{ ar:'سورة المائِدة · ١١٠', en:'Surah Al-Ma\'idah · 110' },
    explain:{
      ar:'في آيةٍ واحِدةٍ يَمتَنُّ اللهُ على عيسى بِمُعجِزاتِهِ، ويُكَرِّرُ «بِإذني» مَعَ كُلِّ واحِدة. لِماذا التَّكرار؟ لِأنَّ اللهَ عَلِمَ أنَّ أقواماً سَيَغلونَ في عيسى حتّى يَعبُدوه، فَوَضَعَ في كِتابِهِ الخالِدِ الجَوابَ جاهِزاً: كُلُّ مُعجِزةٍ بِإذنِ الله — فاعبُدوا الآذِنَ لا المَأذونَ لَه.',
      en:'In a single verse, Allah recounts His favors upon Isa through his miracles, repeating "by My leave" with each one. Why the repetition? Because Allah knew some would exaggerate about Isa until they worshipped him, so He placed the answer ready in His eternal Book: every miracle is by Allah\'s leave — so worship the One who grants leave, not the one granted it.' } },
  card:{ name:{ar:'آياتُ موسى وعيسى',en:'The Signs of Musa & Isa'}, meaning:{ar:'العَصا واليَدُ وفَلقُ البَحرِ لِموسى، وإبراءُ المَرضى وإحياءُ المَوتى لِعيسى — كُلُّها بِإذنِ اللهِ وأمرِهِ وَحدَه',en:'The staff, the hand, and the parted sea for Musa; healing the sick and raising the dead for Isa — all by Allah\'s leave and command alone'} },
  proof:{ ar:'«بِإذني» — كَلِمةٌ واحِدةٌ تَحفَظُ التَّوحيدَ في قَلبي', en:'"By My leave" — one phrase that guards tawheed in my heart' },
  dua:{ ar:'اللهُمَّ رَبَّ موسى وعيسى ومُحَمَّد، اجعَلنا مِنَ المُوَحِّدينَ الثّابِتين', en:'O Allah, Lord of Musa, Isa, and Muhammad, make us firm upon Your oneness' },
  mission:{ ar:'🌊 مُهِمّةُ المَحطّة: احفَظ جُملةَ موسى عِندَ البَحر: ﴿كَلّا إنَّ مَعِيَ رَبّي سَيَهدين﴾ — وقُلها في قَلبِكَ في أوَّلِ مَوقِفٍ صَعبٍ يُقابِلُك.', en:'🌊 Station Mission: Memorize Musa\'s words at the sea: ﴾No indeed! My Lord is with me; He will guide me﴿ — and say it in your heart at the next hard moment you face.' },
  badge:{ icon:'🤲', color:'#16A085', title:{ ar:'شاهِدُ الآيات', en:'Witness of the Signs' } }
},

/* ───────────── 9 · Miracles of Muhammad ﷺ ───────────── */
{
  id:'muhammad', num:9, icon:'🌙', emoji:'📖', color:'#2980B9',
  title:{ ar:'مُعجِزاتُ مُحَمَّدٍ ﷺ — والمُعجِزةُ الباقِية', en:'Miracles of Muhammad ﷺ — & the Lasting Miracle' },
  narration:{
    ar:'ونَبِيُّنا ﷺ؟ أجرى اللهُ على يَدَيهِ مُعجِزاتٍ كَثيرةً رَآها الصَّحابةُ بِأعيُنِهِم: 🌙 طَلَبَ مِنهُ المُشرِكونَ آيةً فَأراهُمُ اللهُ <b>انشِقاقَ القَمَرِ</b> فِلقَتَين! ﴿اقتَرَبَتِ السّاعةُ وانشَقَّ القَمَر﴾. وفي غَزوةِ الخَندَقِ أطعَمَ اللهُ <b>جَيشاً كامِلاً</b> مِن صاعِ شَعيرٍ وعَناقٍ صَغيرة، وفي الحُدَيبِيةِ <b>نَبَعَ الماءُ مِن بَينِ أصابِعِهِ</b> ﷺ حتّى شَرِبَ وتَوَضَّأ ألفٌ وخَمسُمِئة. وحَنَّ <b>جِذعُ النَّخلةِ</b> الذي كانَ يَخطُبُ عِندَهُ وبَكى كَالطِّفلِ حتّى نَزَلَ ﷺ فَضَمَّه! وأُسرِيَ بِهِ مِن مَكّةَ إلى القُدسِ ثُمَّ عُرِجَ بِهِ إلى السَّماء في لَيلةٍ واحِدة. لكنَّ كُلَّ هذِهِ المُعجِزاتِ رَآها مَن حَضَرَها ثُمَّ انقَضَت… إلّا مُعجِزةً واحِدةً أرادَها اللهُ <b>باقِيةً لِكُلِّ الأجيال</b> — لِي ولَكَ ولِمَن يَأتي بَعدَنا: <b>القُرآنُ العَظيم</b>.',
    en:'And our Prophet ﷺ? Allah carried out many miracles at his hands, witnessed by the companions\' own eyes: 🌙 the polytheists demanded a sign, so Allah showed them <b>the moon split</b> in two halves! ﴾The Hour has drawn near, and the moon has split﴿. At the Battle of the Trench, Allah fed <b>an entire army</b> from a small measure of barley and a baby goat; at Hudaybiyah, <b>water sprang from between his fingers</b> ﷺ until fifteen hundred drank and made wudu. The <b>palm-trunk</b> he used to preach beside yearned and wept like a child until he ﷺ came down and embraced it! And he was taken by night from Makkah to Jerusalem, then up through the heavens — in a single night. Yet all these miracles were seen by those present, then passed… except one miracle Allah willed to <b>remain for every generation</b> — for me, for you, and for those after us: <b>the Magnificent Quran</b>.' },
  shubha:{ ar:'بَعضُهُم يَقول: «أنا لم أرَ انشِقاقَ القَمَر — أينَ مُعجِزَتي أنا؟» 🤨', en:'Some say: "I never saw the moon split — where is MY miracle?" 🤨' },
  logic:{
    ar:'سُؤالٌ رائِع، وجَوابُهُ أروَع: مُعجِزَتُكَ <b>على رَفِّ بَيتِك</b>! القُرآنُ مُعجِزةٌ قائِمةٌ تَتَحَدّى كُلَّ جيل: ﴿قُل لَئِنِ اجتَمَعَتِ الإنسُ والجِنُّ على أن يَأتوا بِمِثلِ هذا القُرآنِ لا يَأتونَ بِمِثلِه﴾. تَحَدٍّ مَفتوحٌ مُنذُ ١٤ قَرناً: العَرَبُ أهلُ الفَصاحةِ الذينَ كانوا يُعَلِّقونَ قَصائِدَهُم على الكَعبةِ فَخراً — عَجَزوا أن يَأتوا بِسورةٍ مِثلِه، واختاروا الحَربَ على المُعارَضة، ولَو عارَضوهُ بِسورةٍ لَانتَهى الإسلامُ بِلا قِتال! ولا يَزالُ التَّحَدّي مَفتوحاً حتّى اليوم. وفَوقَ الإعجازِ البَيانيّ: أخبارُ غَيبٍ تَحَقَّقَت (غَلَبَتِ الرّومُ كَما وَعَد!)، وحِفظٌ لا مَثيلَ لَه، وأثَرٌ يَقلِبُ القُلوبَ إلى اليوم. مُعجِزاتُ الأنبِياءِ السّابِقينَ شاهَدَها جيلُها، ومُعجِزةُ نَبِيِّنا بَينَ يَدَيكَ الآن — تَلمِسُها وتَقرَؤُها كُلَّ يَوم!',
    en:'Brilliant question, with a more brilliant answer: your miracle is <b>on your bookshelf</b>! The Quran is a standing miracle challenging every generation: ﴾Say: if mankind and jinn gathered to produce the like of this Quran, they could not produce its like﴿. An open challenge for 14 centuries: the Arabs, masters of eloquence who hung their proudest poems on the Ka\'bah — couldn\'t produce one surah like it, and chose war over composing a rival; had they matched it with a single surah, Islam would have ended without a battle! The challenge remains open today. Beyond its language: unseen news that came true (the Romans won, as promised!), preservation without equal, and a power that still transforms hearts. Earlier prophets\' miracles were seen by their generation — your Prophet\'s miracle is in your hands right now, touched and read every day!' },
  myth:{ claim:{ ar:'«مُعجِزاتُ الأنبِياءِ انتَهَت ولا نَصيبَ لَنا مِنها!»', en:'"The prophets\' miracles are over — none is left for us!"' },
         bust:{ ar:'القُرآنُ المُعجِزةُ الباقِيةُ بَينَ يَدَيك: تَحَدّيهِ قائِم، وحِفظُهُ مُستَمِرّ، وأثَرُهُ في القُلوبِ مُتَجَدِّدٌ كُلَّ يَوم.', en:'The Quran is the lasting miracle in your hands: its challenge stands, its preservation continues, and its effect on hearts renews daily.' } },
  match:{
    title:{ ar:'صِل كُلَّ مُعجِزةٍ بِمَوقِفِها', en:'Match each miracle to its moment' },
    pairs:[
      { tool:{ar:'انشِقاقُ القَمَر',en:'The splitting of the moon'}, job:{ar:'آيةٌ طَلَبَها المُشرِكون',en:'A sign the polytheists demanded'} },
      { tool:{ar:'نَبعُ الماءِ مِن أصابِعِهِ ﷺ',en:'Water from his fingers ﷺ'}, job:{ar:'سَقى ١٥٠٠ في الحُدَيبِية',en:'Quenched 1,500 at Hudaybiyah'} },
      { tool:{ar:'حَنينُ الجِذع',en:'The yearning palm-trunk'}, job:{ar:'بَكى حتّى ضَمَّهُ النَّبِيُّ ﷺ',en:'Wept until the Prophet ﷺ embraced it'} },
      { tool:{ar:'القُرآنُ العَظيم',en:'The Magnificent Quran'}, job:{ar:'المُعجِزةُ الباقِيةُ لِكُلِّ جيل',en:'The lasting miracle for every generation'} },
    ] },
  reflection:{
    ayah:'﴿قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا﴾',
    ref:{ ar:'سورة الإسراء · ٨٨', en:'Surah Al-Isra · 88' },
    explain:{
      ar:'تَحَدٍّ ما زالَ يَرِنُّ في الكَونِ مُنذُ أربَعةَ عَشَرَ قَرناً: لَوِ اجتَمَعَ البَشَرُ والجِنُّ كُلُّهُم وتَعاوَنوا، ما جاؤوا بِمِثلِ هذا القُرآن. وما زالَ القُرآنُ شامِخاً لم يُعارِضهُ أحَد. وهذِهِ مُعجِزَتُكَ أنتَ: كُلَّما فَتَحتَ المُصحَفَ فَأنتَ تَحمِلُ بُرهانَ نُبُوّةِ مُحَمَّدٍ ﷺ بَينَ يَدَيك.',
      en:'A challenge still ringing through the universe after fourteen centuries: if all humans and jinn joined forces, they could not produce the like of this Quran. And the Quran still stands unmatched. This is YOUR miracle: every time you open the mushaf, you hold the proof of Muhammad\'s ﷺ prophethood in your own hands.' } },
  card:{ name:{ar:'المُعجِزةُ الباقِية',en:'The Lasting Miracle'}, meaning:{ar:'القُرآنُ الكَريم: مُعجِزةُ نَبِيِّنا ﷺ الخالِدة، تَحَدّيها قائِمٌ لِكُلِّ جيل، وهي بَينَ يَدَيكَ تَقرَؤُها كُلَّ يَوم',en:'The Noble Quran: our Prophet\'s ﷺ eternal miracle, its challenge standing for every generation — and it\'s in your hands to read every day'} },
  proof:{ ar:'مُعجِزةُ نَبِيّي لَيسَت في المُتحَف — إنها على رَفِّ بَيتي', en:'My Prophet\'s miracle isn\'t in a museum — it\'s on my bookshelf' },
  dua:{ ar:'اللهُمَّ ارزُقنا تِلاوَتَهُ آناءَ اللَّيلِ وأطرافَ النَّهارِ على الوَجهِ الذي يُرضيكَ عَنّا', en:'O Allah, grant us its recitation through night and day in the way that pleases You' },
  mission:{ ar:'🌙 مُهِمّةُ المَحطّة: افتَحِ المُصحَفَ اليومَ وقُل قَبلَ القِراءة: «أنا أحمِلُ الآنَ مُعجِزةَ نَبِيّي ﷺ بَينَ يَدَيّ» — ثُمَّ اقرَأ صَفحةً بِتَمَهُّلٍ وكَأنَّكَ تَسمَعُها لِأوَّلِ مَرّة.', en:'🌙 Station Mission: Open the mushaf today and say before reading: "I am now holding my Prophet\'s ﷺ miracle in my hands" — then read one page slowly, as if hearing it for the first time.' },
  badge:{ icon:'📖', color:'#2980B9', title:{ ar:'حامِلُ المُعجِزة', en:'Carrier of the Miracle' } }
},

/* ───────────── 10 · One Chain, One Message ───────────── */
{
  id:'silsila', num:10, icon:'🧱', emoji:'🏰', color:'#E67E22',
  title:{ ar:'اللَّبِنةُ الأخيرة — سِلسِلةٌ واحِدةٌ ورِسالةٌ واحِدة', en:'The Final Brick — One Chain, One Message' },
  narration:{
    ar:'وَصَلنا إلى قِمّةِ الرِّحلة! 🏰 ضَرَبَ النَّبِيُّ ﷺ لِلأنبِياءِ مَثَلاً هو أجمَلُ خِتامٍ لِرِحلَتِنا: «مَثَلي ومَثَلُ الأنبِياءِ مِن قَبلي كَمَثَلِ رَجُلٍ بَنى بَيتاً فَأحسَنَهُ وأجمَلَهُ، <b>إلّا مَوضِعَ لَبِنةٍ مِن زاوِية</b>، فَجَعَلَ النّاسُ يَطوفونَ بِهِ ويَعجَبونَ لَهُ ويَقولون: هَلّا وُضِعَت هذِهِ اللَّبِنة! قال: <b>فَأنا اللَّبِنةُ وأنا خاتَمُ النَّبِيّين</b>» (مُتَّفَقٌ عليه). تَخَيَّلِ القَصرَ الآن: أساسُهُ التَّوحيدُ الذي جاءَ بِهِ نوح، وجُدرانُهُ رَفَعَها إبراهيمُ وموسى وداوودُ وعيسى وكُلُّ نَبِيّ — كُلٌّ وَضَعَ لَبِنَتَهُ في <b>نَفسِ البِناء</b>، لا يَهدِمُ أحَدُهُم عَمَلَ أخيه. حتّى جاءَ نَبِيُّنا ﷺ فَوَضَعَ اللَّبِنةَ الأخيرةَ واكتَمَلَ القَصر. وهكذا اكتَمَلَت إجابةُ سُؤالِنا الكَبير «كَيفَ عَرَفنا الله؟»: عَرَفناهُ بِالعَقلِ والآياتِ في الكَون… ثُمَّ <b>عَرَّفَنا بِنَفسِهِ</b> عَبرَ رُسُلِهِ وكُتُبِه، وخَتَمَ البِناءَ بِالقُرآنِ ومُحَمَّدٍ ﷺ.',
    en:'We\'ve reached the journey\'s summit! 🏰 The Prophet ﷺ gave a parable of the prophets that makes the most beautiful ending for our journey: "My example and that of the prophets before me is like a man who built a house, making it fine and beautiful, <b>except for the place of one brick at a corner</b>. People walked around it admiring it and saying: if only this brick were set! He said: <b>I am that brick, and I am the seal of the prophets</b>" (Bukhari & Muslim). Picture the palace now: its foundation is the tawheed Nuh brought; its walls were raised by Ibrahim, Musa, Dawud, Isa, and every prophet — each laid his brick in <b>the same building</b>, none demolishing his brother\'s work. Until our Prophet ﷺ came, set the final brick, and the palace was complete. And so the answer to our big question "how did we come to know Allah?" is complete: we knew Him through reason and the signs in the universe… then <b>He introduced Himself</b> through His messengers and books, sealing the building with the Quran and Muhammad ﷺ.' },
  shubha:{ ar:'بَعضُهُم يَقول: «لِماذا لا يُرسِلُ اللهُ رَسولاً جَديداً لِزَمانِنا؟» 🤨', en:'Some say: "Why doesn\'t Allah send a new messenger for our time?" 🤨' },
  logic:{
    ar:'فَكِّر: لِماذا كانَ اللهُ يُرسِلُ رَسولاً بَعدَ رَسول؟ لِسَبَبَين: لِأنَّ الرِّسالةَ السّابِقةَ <b>ضاعَت أو حُرِّفَت</b>، ولِأنَّها كانَت <b>لِقَومٍ مُعَيَّنينَ</b> لا لِلجَميع. والآنَ انظُر: هل ضاعَ القُرآن؟ مُستَحيل — اللهُ حافِظُهُ بِنَفسِهِ كَما رَأينا! وهل هو لِقَومٍ دونَ قَوم؟ لا — هو ﴿ذِكرٌ لِلعالَمين﴾! إذَنِ السَّبَبانِ انتَهَيا: الخَريطةُ الأخيرةُ كامِلةٌ مَحفوظةٌ وتَصِلُ كُلَّ بَيتٍ على الأرض. القَصرُ اكتَمَلَ بِآخِرِ لَبِنة — وماذا يُضيفُ بَنّاءٌ إلى قَصرٍ كامِل؟ قالَ اللهُ في آخِرِ ما نَزَل: ﴿اليَومَ <b>أكمَلتُ</b> لَكُم دينَكُم وأتمَمتُ علَيكُم نِعمَتي﴾. ولِذلكَ بَقِيَت مُهِمّةٌ واحِدةٌ لَنا نَحنُ: أن نَحمِلَ الخَريطةَ لِمَن لم تَصِلهُ بَعد!',
    en:'Think: why did Allah keep sending messenger after messenger? For two reasons: the previous message had been <b>lost or altered</b>, and it was <b>for a specific people</b>, not everyone. Now look: has the Quran been lost? Impossible — Allah Himself guards it, as we saw! Is it for one people only? No — it is ﴾a reminder for all the worlds﴿! So both reasons are gone: the final map is complete, protected, and reaches every home on earth. The palace was finished with the last brick — and what could any builder add to a finished palace? Allah said in one of the last verses revealed: ﴾Today <b>I have perfected</b> your religion for you and completed My favor upon you﴿. So one mission remains — for us: to carry the map to those it hasn\'t reached yet!' },
  myth:{ claim:{ ar:'«الأنبِياءُ جاؤوا بِأديانٍ مُتَنافِسةٍ يَهدِمُ بَعضُها بَعضاً!»', en:'"The prophets brought rival religions, each tearing down the last!"' },
         bust:{ ar:'الأنبِياءُ بَنّاؤونَ في قَصرٍ واحِد: كُلٌّ يَضَعُ لَبِنَتَهُ ويُصَدِّقُ إخوانَه، ونَبِيُّنا ﷺ اللَّبِنةُ الأخيرة.', en:'The prophets are builders of one palace: each laid his brick and confirmed his brothers — and our Prophet ﷺ is the final brick.' } },
  match:{
    title:{ ar:'صِل أركانَ القَصرِ المُكتَمِل', en:'Match the parts of the finished palace' },
    pairs:[
      { tool:{ar:'أساسُ القَصر',en:'The palace foundation'}, job:{ar:'التَّوحيد: رِسالةُ كُلِّ نَبِيّ',en:'Tawheed: every prophet\'s message'} },
      { tool:{ar:'الأنبِياءُ جَميعاً',en:'All the prophets'}, job:{ar:'بَنّاؤونَ في بِناءٍ واحِد',en:'Builders of one building'} },
      { tool:{ar:'مُحَمَّدٌ ﷺ',en:'Muhammad ﷺ'}, job:{ar:'اللَّبِنةُ الأخيرةُ وخاتَمُ النَّبِيّين',en:'The final brick, seal of the prophets'} },
      { tool:{ar:'﴿اليَومَ أكمَلتُ لَكُم دينَكُم﴾',en:'"Today I perfected your religion"'}, job:{ar:'اكتَمَلَ القَصرُ فَلا نَبِيَّ بَعدَه',en:'The palace is complete — no prophet after'} },
    ] },
  reflection:{
    ayah:'﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ﴾',
    ref:{ ar:'سورة البَقَرة · ٢٨٥', en:'Surah Al-Baqarah · 285' },
    explain:{
      ar:'هذِهِ بِطاقةُ هُوِيّةِ المُؤمِن: يُؤمِنُ بِاللهِ ومَلائِكَتِهِ وكُتُبِهِ — كُلِّها — ورُسُلِهِ — كُلِّهِم — «لا نُفَرِّقُ بَينَ أحَدٍ مِن رُسُلِه». فَنَحنُ الأُمّةُ الوَحيدةُ التي تُحِبُّ موسى وعيسى ونوحاً وإبراهيمَ مَعَ مُحَمَّدٍ ﷺ، وتُؤمِنُ بِالتَّوراةِ والإنجيلِ والزَّبورِ مَعَ القُرآن. وَرِثنا القَصرَ كُلَّهُ بِلَبِناتِهِ جَميعاً!',
      en:'This is the believer\'s identity card: he believes in Allah, His angels, His books — all of them — and His messengers — all of them — "we make no distinction between any of His messengers." We are the one nation that loves Musa, Isa, Nuh, and Ibrahim along with Muhammad ﷺ, and believes in the Tawrah, Injil, and Zabur along with the Quran. We inherited the whole palace, with all its bricks!' } },
  card:{ name:{ar:'سِلسِلةُ النّور',en:'The Chain of Light'}, meaning:{ar:'الرُّسُلُ بُنيانٌ واحِدٌ ورِسالَتُهُم واحِدة: التَّوحيد — ومُحَمَّدٌ ﷺ اللَّبِنةُ الأخيرةُ وخاتَمُ النَّبِيّين',en:'The messengers are one building and their message is one — tawheed; Muhammad ﷺ is the final brick and seal of the prophets'} },
  proof:{ ar:'أُومِنُ بِالرُّسُلِ كُلِّهِم والكُتُبِ كُلِّها — قَصرٌ واحِدٌ اكتَمَلَ بِالقُرآن', en:'I believe in all the messengers and all the books — one palace completed by the Quran' },
  dua:{ ar:'رَبَّنا آمَنّا بِما أنزَلتَ واتَّبَعنا الرَّسولَ فاكتُبنا مَعَ الشّاهِدين', en:'Our Lord, we believe in what You revealed and follow the Messenger, so write us among the witnesses' },
  mission:{ ar:'🧱 مُهِمّةُ الخِتام: ارسُم قَصراً جَميلاً واكتُب على لَبِناتِهِ أسماءَ الأنبِياءِ الذينَ تَعرِفُهُم، واجعَل لَبِنةَ الزّاوِيةِ الأخيرةِ ذَهَبِيّةً واكتُب علَيها: مُحَمَّدٌ ﷺ خاتَمُ النَّبِيّين. وهَنيئاً لَكَ إتمامُ رِحلةِ البَلاغ! 🏆', en:'🧱 Final Mission: Draw a beautiful palace and write on its bricks the names of the prophets you know. Make the last corner brick golden and write on it: Muhammad ﷺ, seal of the prophets. Congratulations on completing the Journey of the Message! 🏆' },
  badge:{ icon:'🏰', color:'#E67E22', title:{ ar:'وارِثُ القَصر', en:'Heir of the Palace' } }
},
];
