/* ═══════════════════════════════════════════════════════════════
   بيت الرحمة  ·  House of Mercy
   slug: mercy  |  id:30  |  color:#880E4F  |  art:pavilion
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.mercy = {

  tagline: {
    ar: 'الرَّحمَةُ بَذرَةُ الجَنَّةِ تَنبُتُ في قُلوبِ المُؤمِنين',
    en: 'Mercy is the seed of paradise that grows in the hearts of believers',
  },

  /* ───── ROOM 1: Knowledge ───── */
  /* ─────────────────────────────────────────────────────────────
     ROOM 1: Knowledge — الرَّحمَةُ في اللُّغَةِ والاصطِلاح
     Sources: dorar.net · islamweb.net · quranpedia.net
     الرَّحمَةُ مِن أَسمَاءِ اللهِ الحُسنى — الرَّحمَنُ الرَّحيم
     ─────────────────────────────────────────────────────────────── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلَمُ أنَّ اللهَ كَتَبَ الرَّحمَةَ على نَفسِه؟', en:'Did you know Allah has decreed mercy upon Himself?' },
      sub:   { ar:'«إنَّ اللهَ كَتَبَ على نَفسِهِ الرَّحمَة» — قالَهُ النَّبيُّ ﷺ كَما رَواهُ البُخاري', en:'"Indeed Allah has decreed mercy upon Himself" — the Prophet ﷺ said, as narrated by Bukhari' },
    },
    definition: {
      linguistic: {
        ar: 'الرَّحمَةُ مِن الرَّحِم، وأَصلُها «الرِّقَّةُ والعَطف» — لأنَّ الرَّاحِمَ قَلبُهُ يَلينُ ويَشعُرُ بِأَلَمِ غَيرِه!',
        en: 'From ar-rahim (womb). Its root means "tenderness and compassion" — for the merciful heart softens and feels others\' pain.',
      },
      terminology: {
        ar: 'هي <b>رِقَّةُ القَلبِ وانعِطافُهُ</b> نَحوَ مَن يَستَحِقُّ الرَّأفَةَ، مَعَ السَّعيِ لِإِزالَةِ الأَذى عَنه.',
        en: 'Tenderness of heart and its leaning toward those who deserve compassion, along with striving to remove harm from them.',
      },
      simile: {
        ar: 'الرَّحمَةُ كَالمَطَر: تَسقُطُ على الجَميع — الزَّهرَةَ والشَّجَرَةَ والعُشبَ — وتُحييهُم جَميعاً! القَلبُ الرَّاحِمُ كَالسَّحابَةِ التي تَحمِلُ الخَيرَ وتُمطِرُهُ على مَن حَولَها.',
        en: 'Mercy is like rain: it falls on everything — the flower, the tree, the grass — and brings them all to life! The merciful heart is like a cloud that carries goodness and rains it on all around.',
      },
    },
    forms: [
      { icon:'🤲', color:'#880E4F', title:{ar:'رَحمَةُ الوالِدَين', en:'Mercy toward parents'}, body:{ar:'بِرُّ الوالِدَينِ ورِفقُهُما وخِدمَتُهُما بِصِدق. قالَ تَعالى: ﴿ وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ ﴾', en:'Honouring parents, serving them with sincerity and gentleness. Allah said: "Lower the wing of humility to them, out of mercy."'} },
      { icon:'💞', color:'#C0392B', title:{ar:'رَحمَةُ الأَقارِب والأَيتام', en:'Mercy for kin and orphans'}, body:{ar:'صِلَةُ الرَّحِمِ وكَفالَةُ اليَتيمِ والعَطفُ عليه. «أنا وكافِلُ اليَتيمِ كَهاتَين» قالَ النَّبيُّ ﷺ.', en:'Keeping family ties and sponsoring orphans. "The one who cares for an orphan and I are like these two," the Prophet ﷺ said.'} },
      { icon:'🐾', color:'#E65100', title:{ar:'رَحمَةُ الحَيوانات', en:'Mercy toward animals'}, body:{ar:'الرِّفقُ بِالحَيَوانِ وعَدَمُ إيذائِه. غَفَرَ اللهُ لِامرَأَةٍ سَقَت كَلباً عَطشان — فَكَيفَ بِمَن يَرحَمُ بَني آدَم!', en:'Kindness to animals and not harming them. Allah forgave a woman who gave water to a thirsty dog — so imagine the reward for one merciful to people!'} },
      { icon:'🌍', color:'#2980B9', title:{ar:'رَحمَةُ الخَلق', en:'Mercy toward all creation'}, body:{ar:'الرِّفقُ بِالنّاسِ كُلِّهِم — الصَّغيرِ والكَبير والغَريب والمَريض. «الرَّاحِمونَ يَرحَمُهُمُ الرَّحمَن» قالَ النَّبيُّ ﷺ.', en:'Kindness to all people — young and old, stranger and sick. "The merciful are shown mercy by the Most Merciful," the Prophet ﷺ said.'} },
      { icon:'🌱', color:'#1ABC9C', title:{ar:'رَحمَةُ النَّفس', en:'Mercy toward oneself'}, body:{ar:'عَدَمُ تَعذيبِ النَّفسِ بِالغُلُوِّ والإفراطِ في العِبادَة. «إنَّ لِنَفسِكَ عَليكَ حَقّاً» — نَصيحَةُ النَّبيِّ ﷺ.', en:'Not tormenting oneself through extreme practices. "Your body has a right over you" — the Prophet\'s ﷺ counsel.'} },
      { icon:'🌿', color:'#8E44AD', title:{ar:'رَحمَةُ الغَريب والمِسكين', en:'Mercy for the stranger and poor'}, body:{ar:'إطعامُ الجائِع وإيواءُ الغَريبِ وإعانَةُ المُحتاج. الرَّحمَةُ الحَقيقيَّةُ تَترجَمُ نَفسَها إلى فِعلٍ لا إلى كَلام.', en:'Feeding the hungry, sheltering the stranger, helping the needy. True mercy translates itself into action, not just words.'} },
      { icon:'👥', color:'#D4AC0D', title:{ar:'رَحمَةُ المُؤمِنِ بِإِخوانِهِ', en:'Mercy among believers'}, body:{ar:'المُسلِمُ للمُسلِمِ كَالجَسَدِ الواحِد: إذا أَلَمَّت بِأَخيكَ كُربَةٌ، اشعَرتَ بِها وسارَعتَ لِرَفعِها. هذا هو مَعنى «الأُخُوَّةُ في الرَّحمَة».', en:'The Muslim to the Muslim is like one body: when your brother is struck by hardship, you feel it and hasten to lift it. This is the meaning of "brotherhood in mercy".'} },
    ],
    ranking: [
      { color:'#880E4F', title:{ar:'رَحمَةُ اللهِ تَعالى', en:'Mercy of Allah Most High'}, body:{ar:'أَعظَمُ الرَّحَمات وأَوسَعُها — وَسِعَت كُلَّ شَيء. كُلُّ رَحمَةٍ في الكَونِ هي قَطرَةٌ مِن بَحرِ رَحمَةِ الله.', en:'The greatest and widest mercy — encompassing all things. Every mercy in creation is a drop from Allah\'s ocean of mercy.'} },
      { color:'#C0392B', title:{ar:'رَحمَةُ النَّبيِّ ﷺ بِالخَلق', en:'Mercy of the Prophet ﷺ'}, body:{ar:'«وَمَا أَرسَلناكَ إلّا رَحمَةً لِلعالَمين» — النَّبيُّ ﷺ أَرحَمُ البَشَر، رَحِمَ الصَّغيرَ والكَبيرَ والعَدُوَّ والصَّديق.', en:'"We sent you only as a mercy to all the worlds" — the Prophet ﷺ is the most merciful human, kind to young and old, friend and foe.'} },
      { color:'#2980B9', title:{ar:'رَحمَةُ المُؤمِنِ بِالمُؤمِن', en:'Mercy among believers'}, body:{ar:'«مَثَلُ المُؤمِنينَ في تَوادِّهِم كَمَثَلِ الجَسَدِ الواحِد» — إذا رَحِمَ المُسلِمُ أَخاهُ أَحَسَّ الجَميعُ بِالأَمان والمَحَبَّة.', en:'"The likeness of believers in their mutual love is like one body" — when a Muslim shows mercy to his brother, all feel safe and beloved.'} },
      { color:'#1ABC9C', title:{ar:'رَحمَةُ المُؤمِنِ بِغَيرِ المُسلِم', en:'Mercy toward non-Muslims'}, body:{ar:'الرِّفقُ والعَدلُ مَعَ أَهلِ الذِّمَّةِ والجِيرانِ مِن غَيرِ المُسلِمين. الإسلامُ دِينُ رَحمَةٍ لِلجَميع.', en:'Kindness and justice toward non-Muslim neighbors. Islam is a religion of mercy for all.'} },
    ],
    verses: [
      { text: { ar:'﴿ وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ ﴾', en:'"And We have not sent you, [O Muhammad], except as a mercy to the worlds."' }, ref: { ar:'[سورة الأنبياء: ١٠٧]', en:'[Surah Al-Anbiya: 107]' } },
      { text: { ar:'﴿ وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا ﴾', en:'"Lower to them the wing of humility out of mercy, and say: My Lord, have mercy on them as they raised me when I was small."' }, ref: { ar:'[سورة الإسراء: ٢٤]', en:'[Surah Al-Isra: 24]' } },
      { text: { ar:'﴿ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ ﴾', en:'"Indeed, the mercy of Allah is near to the doers of good."' }, ref: { ar:'[سورة الأعراف: ٥٦]', en:'[Surah Al-A\'raf: 56]' } },
    ],
    hadiths: [
      { text: { ar:'«الرَّاحِمونَ يَرحَمُهُمُ الرَّحمَن، ارحَموا مَن في الأَرضِ يَرحَمكُم مَن في السَّماء»', en:'"The merciful are shown mercy by the Most Merciful. Show mercy to those on earth, and He who is in the heavens will show mercy to you."' }, source: { ar:'[رواه أبو داود والترمذي — حديث صحيح]', en:'[Abu Dawud & Tirmidhi — sound hadith]' } },
      { text: { ar:'«مَن لا يَرحَمُ النّاسَ لا يَرحَمُهُ الله»', en:'"Whoever does not show mercy to people, Allah will not show mercy to him."' }, source: { ar:'[رواه البُخاري ومُسلِم — حديث ٧٣٧٦]', en:'[Bukhari & Muslim — 7376]' } },
    ],
    benefits: [
      { ar:'💞 تَكسِبُ رَحمَةَ اللهِ ومَحَبَّتَهُ في الدُّنيا والآخِرَة', en:'💞 Earns Allah\'s mercy and love in this world and the next' },
      { ar:'🌈 تُطَيِّبُ العَلاقاتِ وتُقَرِّبُ القُلوب', en:'🌈 Purifies relationships and draws hearts together' },
      { ar:'🌱 تُنَمِّي الرَّحمَةَ في قَلبِ صاحِبِها فَيَزدادُ خَيراً', en:'🌱 Grows mercy in its owner\'s heart, increasing his goodness' },
      { ar:'🛡️ تَقي صاحِبَها مِن القَسوَةِ والجَفاء والظُّلم', en:'🛡️ Protects its owner from harshness, coldness, and injustice' },
      { ar:'🌍 تَجعَلُ المُجتَمَعَ آمِناً ومُحِبّاً ومُتَعاوِناً', en:'🌍 Makes society safe, loving, and cooperative' },
    ],
    obstacles: [
      { ar:'قَسوَةُ القَلبِ بِكَثرَةِ الذُّنوبِ والغَفلَة', en:'Hardness of heart through many sins and heedlessness' },
      { ar:'الغَضَبُ الشَّديدُ الذي يُطغي على العَقل', en:'Intense anger that overcomes reason' },
      { ar:'حُبُّ الدُّنيا والتَّشاغُلُ بِها عن الخَلق', en:'Love of the world and being too busy for others' },
      { ar:'الكِبرُ والغُرورُ والنَّظَرُ إلى النّاسِ بِاستِحقار', en:'Pride and arrogance, looking down on people' },
    ],
    acquireMeans: [
      { ar:'تَذَكَّر رَحمَةَ اللهِ بِكَ في كُلِّ نِعمَةٍ تَراها', en:'Remember Allah\'s mercy toward you in every blessing you see' },
      { ar:'اجلِس مَعَ الأَيتامِ والفُقَراءِ وامسَح على رَأسِ يَتيم', en:'Sit with orphans and the poor, and wipe the head of an orphan' },
      { ar:'اقرَأ يَومِيّاً عَن رَحمَةِ النَّبيِّ ﷺ بِأَصحابِهِ وأُمَّتِه', en:'Read daily about the Prophet\'s ﷺ mercy toward his Companions and nation' },
      { ar:'ادعُ اللهَ أن يُرَقِّقَ قَلبَكَ وتَقَرَّب إليه بِالتَّوبَة', en:'Pray to Allah to soften your heart and draw near to Him through repentance' },
    ],
  },

  /* ───── ROOM 2: Stories ─────
     Story 1 — النَّبيُّ ﷺ ورَحمَتُهُ بِالطِّفلِ والخادِم  | Source: islamweb.net/ar/
     Story 2 — الرَّجُلُ والكَلبُ العَطشان                  | Source: dorar.net (Bukhari 3467)
     Story 3 — عُمَرُ بنُ الخَطَّاب ورَحمَتُهُ بِالرَّعيَّة | Source: سير أعلام النبلاء — الذهبي ج٥ ص٢١٣
     Story 4 — ابنُ القَيِّم ورَحمَةُ القَلب                | Source: مدارج السالكين — ابن القيم — باب الرحمة
  */
  stories: [

    /* ══════════════════════════════════════════
       STORY 1 — قَلبُ النَّبيِّ ﷺ
       Source: islamweb.net/ar/article/195701
       ══════════════════════════════════════════ */
    {
      icon:'🌸', scene:'madinah', character:'👶',
      title: { ar:'قَلبُ النَّبيِّ ﷺ: أَرحَمُ قَلبٍ عَرَفَهُ التّاريخ', en:'The Prophet\'s ﷺ heart: the most merciful heart history ever knew' },
      pages: [
        { scene:'madinah', character:'👶',
          text:{ ar:'في المَسجِدِ النَّبَويِّ بِالمَدينَةِ المُنَوَّرَة، كانَ النّاسُ يُصَلّونَ خَلفَ النَّبيِّ ﷺ وهو يَؤُمُّهُم. كانَ الهَواءُ دافِئاً والأَصواتُ هادِئَة، وسادَت السَّكينَةُ المكانَ كُلَّه. الأَقدامُ الحافِيَةُ على البَرودَةِ الطِّيبَة، والأَنفاسُ المَجموعَةُ في خُشوعٍ صادِق. فَجَأَةً — في وَسَطِ الصَّلاة — بَدَأَ طِفلٌ صَغيرٌ يَبكي بِصَوتٍ عالٍ يَخترِقُ السُّكونَ! كانَت أُمُّهُ تَحمِلُهُ وهي تُصَلّي، فَتَوَتَّرَت وضَمَّتهُ إلى صَدرِها مُحاوِلَةً تَهدِئَتَه.',
                en:'In the Prophet\'s mosque in Madinah al-Munawwarah, people were praying behind the Prophet ﷺ as he led them. The air was warm, voices hushed, and serenity filled the entire place. Bare feet rested on the pleasant coolness, breaths gathered in sincere reverence. Suddenly — in the middle of prayer — a small child began crying loudly, his voice piercing the silence! His mother was carrying him while praying, tensing and pressing him to her chest, trying to calm him.' } },
        { scene:'madinah', character:'🧔',
          text:{ ar:'أَصغى النَّبيُّ ﷺ إلى بُكاءِ الطِّفل، وقَلبُهُ يَرِقُّ مَعَ كُلِّ نَحيب. لَم يَغضَب ولَم يَتَجَهَّم — بَل سارَعَ إلى إيجازِ الصَّلاة. قَصَّرَ النَّبيُّ ﷺ في ذلكَ اليَومِ صَلاتَهُ وخَفَّفَها تَخفيفاً مَلحوظاً، لَم يَعتَدهُ الصَّحابَةُ مِنه مِن قَبل. وَجَدَ الصَّحابَةُ في وُجوهِهِم تَساؤُلاً صامِتاً لَمّا انتَهَت الصَّلاة.',
                en:'The Prophet ﷺ listened to the child\'s crying, his heart softening with every sob. He didn\'t grow angry or frown — he quickly moved to shorten the prayer. The Prophet ﷺ shortened his prayer that day in a noticeably lighter manner, something the Companions had not experienced from him before. The Companions exchanged silent questions in their eyes when the prayer ended.' } },
        { scene:'mosque', character:'🌟',
          text:{ ar:'قالَ النَّبيُّ ﷺ بِصَوتٍ مَليءٍ بِالحَنانِ يُفَسِّرُ ما صَنَع: <b>«إِنِّي لَأَدخُلُ في الصَّلاةِ أُريدُ إِطالَتَها، فَأَسمَعُ بُكاءَ الصَّبيِّ، فَأَتَجَوَّزُ في صَلاتي — مِمّا أَعلَمُ مِن شِدَّةِ وَجدِ أُمِّهِ بِه!»</b> وَقَفَ الصَّحابَةُ صامِتين، يَتَأَمَّلونَ هذا الكَلامَ العَجيب. رَجُلٌ يَؤُمُّ النّاسَ في الصَّلاة، يُقَصِّرُ صَلاتَهُ شَفَقَةً على قَلبِ أُمٍّ تَحمِلُ طِفلَها الباكي! أيُّ قَلبٍ هذا؟',
                en:'The Prophet ﷺ said with a voice full of warmth, explaining his act: <b>"I enter prayer intending to lengthen it — but I hear an infant crying, and I shorten my prayer, because of what I know of the distress his mother feels for him!"</b> The Companions stood in silence, contemplating this remarkable statement. A man leading others in prayer, shortening it out of compassion for the heart of a mother holding her crying child! What a heart this is!' } },
        { scene:'garden', character:'💞',
          text:{ ar:'سُبحانَ الله! القَلبُ الذي يَحمِلُ هُمومَ الأُمَّةِ كُلِّها، والذي يُخَطِّطُ لِلغَزَواتِ ويُدافِعُ عن الدِّين — هذا القَلبُ نَفسُهُ يَلتَفِتُ إلى بُكاءِ طِفلٍ صَغير ويَرِقُّ له! <b>كانَ النَّبيُّ ﷺ يَقول: «لَيسَ مِنّا مَن لم يَرحَمُ صَغيرَنا ويُوَقِّر كَبيرَنا.»</b> وكانَ هو أَوَّلَ المُطَبِّقينَ لِهذا القَولِ في كُلِّ لَحظَةٍ مِن حَياتِهِ الكَريمَة.',
                en:'Glory be to Allah! The heart that carried the burdens of an entire nation, that planned battles and defended the faith — this very heart notices a small child\'s cry and softens for it! <b>The Prophet ﷺ would say: "He is not one of us who does not show mercy to our young and honor our elders."</b> And he was the first to practice this in every moment of his noble life.' } },
        { scene:'madinah', character:'😇',
          text:{ ar:'كانَت السَّيِّدَةُ عائِشَةُ رضي الله عنها تَروي لِلنّاسِ قِصَصَ رَحمَتِهِ ﷺ، وعَيناها تَلمَعانِ بِالدُّموع. تَقول: «ما رَأَيتُ أَحَداً أَرحَمَ بِالعِيالِ مِن رَسولِ اللهِ ﷺ!» وكانَ ﷺ يَحمِلُ أُمامَةَ بِنتَ أَبي العاصِ على كَتِفِهِ أَثناءَ الصَّلاة — يَضَعُها حينَ يَسجُد ويَرفَعُها حينَ يَقوم — رَحمَةً بِها وحُبّاً لَها. كَيفَ لا يَرحَمُهُم وهو ﷺ الذي أُرسِلَ رَحمَةً لِلعالَمين؟',
                en:'Lady \'A\'ishah رضي الله عنها used to narrate stories of his ﷺ mercy to people, her eyes gleaming with tears. She would say: "I never saw anyone more merciful to children than the Messenger of Allah ﷺ!" He ﷺ would carry Umamah bint Abi al-\'As on his shoulder during prayer — setting her down when prostrating and lifting her when rising — out of mercy and love for her. How could he not be merciful to them, when he ﷺ was sent as a mercy to all the worlds?' },
          choice:{ q:{ar:'لِماذا قَصَّرَ النَّبيُّ ﷺ الصَّلاةَ عِندَما سَمِعَ بُكاءَ الطِّفل؟', en:'Why did the Prophet ﷺ shorten the prayer when he heard the child cry?'},
            opts:[
              { t:{ar:'لأَنَّهُ نَسِيَ بَقِيَّةَ الصَّلاة.', en:'Because he forgot the rest of the prayer.'}, c:false, exp:{ar:'لا — النَّبيُّ ﷺ لا يَنسى في صَلاتِه! لَكِنَّهُ فَعَلَ ذلِكَ رَحمَةً بِالأُمِّ والطِّفل.', en:'No — the Prophet ﷺ doesn\'t forget in prayer! He did it out of mercy for the mother and child.'} },
              { t:{ar:'شَفَقَةً على الأُمِّ وخَوفاً مِن ضيقِها على طِفلِها.', en:'Out of compassion for the mother and concern for her distress.'}, c:true, exp:{ar:'نَعَم! هذه هي الرَّحمَةُ الحَقيقيَّة — أن تُخَفِّفَ عن الآخَرين وإن كَلَّفَكَ ذلِكَ شَيئاً.', en:'Yes! This is true mercy — to lighten others\' burdens even at some cost to yourself.'} },
              { t:{ar:'لأَنَّ الصَّحابَةَ طَلَبوا مِنهُ ذلِك.', en:'Because the Companions asked him to do so.'}, c:false, exp:{ar:'لا — كانَ النَّبيُّ ﷺ يَتَصَرَّفُ مِن قَلبِهِ الرَّاحِم مِن تِلقاءِ نَفسِه.', en:'No — the Prophet ﷺ acted from his own merciful heart, on his own initiative.'} },
            ] } },
        { scene:'madinah', character:'🌸',
          text:{ ar:'قالَ أَنَسُ بنُ مالِك رضي الله عنه — الذي خَدَمَ النَّبيَّ ﷺ عَشرَ سَنَوات وهو في العاشِرَة مِن عُمُرِه — بِصَوتٍ مُتَهَدِّجٍ مِن العَجَب: «واللهِ ما نَهَرَني قَطُّ، ولا قالَ لي عن شَيءٍ فَعَلتُهُ: لِمَ فَعَلتَ كَذا؟ ولا عَن شَيءٍ لم أَفعَلهُ: أَلا فَعَلتَ كَذا؟» عَشرُ سَنَوات في قَلبِ البَيتِ النَّبَوِيّ — ولا نَهرٌ واحِد ولا كَلِمَةُ عَتاب!',
                en:'Anas ibn Malik رضي الله عنه — who served the Prophet ﷺ for ten years from the age of ten — said with a voice quivering in amazement: "By Allah, he never scolded me once, never said about anything I did: \'Why did you do this?\' nor about anything I didn\'t do: \'Why didn\'t you do this?\'" Ten years in the heart of the Prophet\'s household — not a single rebuke, not a word of reproach!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'تَأَمَّل يا صَديقي في هذهِ الرَّحمَةِ العَظيمَة: لَيسَت في كَلامٍ فَقَط، بل في كُلِّ حَرَكَة — في إيجازِ الصَّلاةِ رَحمَةً بِأُمٍّ، في الصَّبرِ على خادِمٍ صَغيرٍ عَشرَ سَنَوات، في حَملِ طِفلَةٍ على الكَتِفِ أَثناءَ الصَّلاة. <b>الرَّحمَةُ الحَقيقيَّةُ لَيسَت مَشاعِرَ تُحَسُّ في اللَّيلِ وَحده — بل هي أَفعالٌ يَومِيَّةٌ تُترجَمُ في كُلِّ لَحظَة! كَيفَ أَنتَ مَعَ مَن حَولَك اليَوم؟</b>',
                en:'Reflect, dear friend, on this magnificent mercy: not only in words but in every movement — in shortening prayer out of mercy for a mother, in patience with a young servant for ten years, in carrying a little girl on the shoulder during prayer. <b>True mercy is not just feelings sensed at night alone — it is daily actions translated in every moment! How are you with those around you today?</b>' } },
        { scene:'madinah', character:'💞',
          text:{ ar:'كانَ النَّبيُّ ﷺ يَقولُ إذا رَأى طِفلاً يَبكي: «أَعطوا الطِّفلَ أُمَّه» — لأَنَّهُ يَعلَمُ أنَّ الأُمَّ هي أَوَّلُ بابِ الرَّحمَة في حَياةِ كُلِّ إنسان. رَحمَتُهُ ﷺ كانَت تُرى في كُلِّ تَفصيل: في نَظرَتِه، في لَمسَتِه، في كَلِمَتِه، في صَمتِهِ الحانِي. قالَ أَحَدُ الصَّحابَةِ: «ما رَأَيتُ أَحَداً أَكثَرَ تَبَسُّماً مِن رَسولِ اللهِ ﷺ» — وكانَ ذلِكَ التَّبَسُّمُ هو رَحمَةٌ لِمَن يَلقاهُ. <b>كانَ ﷺ يَقول: «تَبَسُّمُكَ في وَجهِ أَخيكَ صَدَقَة» — فَكَم مِن صَدَقَةٍ بَسيطَةٍ يَومِيَّة تَملِكُها لِتُغَيِّرَ حَياةَ مَن حَولَك!</b>',
                en:'The Prophet ﷺ would say when he saw a crying child: "Give the child to his mother" — because he knew the mother is the first door of mercy in every person’s life. His ﷺ mercy was visible in every detail: in his glance, his touch, his word, his tender silence. One Companion said: "I never saw anyone who smiled more than the Messenger of Allah ﷺ" — and that smile was mercy for all who met him. <b>He ﷺ would say: "Your smile in your brother’s face is charity" — so how many simple daily charities do you possess to change the lives of those around you!</b>' } },
      ],
      quiz: [
        { q:{ar:'لِماذا قَصَّرَ النَّبيُّ ﷺ صَلاتَهُ؟', en:'Why did the Prophet ﷺ shorten his prayer?'},
          opts:[
            { t:{ar:'شَفَقَةً على أُمِّ طِفلٍ يَبكي', en:'Out of compassion for the mother of a crying child'}, c:true },
            { t:{ar:'لِأَنَّهُ نَسِيَ', en:'Because he forgot'}, c:false },
            { t:{ar:'لِأَنَّ الوَقتَ انتَهى', en:'Because time ran out'}, c:false },
          ] },
        { q:{ar:'كَم سَنَةً خَدَمَ أَنَسٌ النَّبيَّ ﷺ دونَ أن يُنهَر؟', en:'How many years did Anas serve the Prophet ﷺ without being scolded?'},
          opts:[
            { t:{ar:'خَمس سَنَوات', en:'Five years'}, c:false },
            { t:{ar:'عَشر سَنَوات', en:'Ten years'}, c:true },
            { t:{ar:'سَنَة واحِدَة', en:'One year'}, c:false },
          ] },
        { q:{ar:'ماذا كانَ يَفعَلُ النَّبيُّ ﷺ بِأُمامَة أَثناءَ الصَّلاة؟', en:'What did the Prophet ﷺ do with Umamah during prayer?'},
          opts:[
            { t:{ar:'يَتركُها لِأُمِّها', en:'Leave her with her mother'}, c:false },
            { t:{ar:'يَحمِلُها ويَضَعُها عندَ السُّجود', en:'Carry her and set her down when prostrating'}, c:true },
            { t:{ar:'يُصَلِّي وحدَه', en:'Pray alone'}, c:false },
          ] },
      ],
      moral: { ar:'الرَّحمَةُ الحَقيقيَّةُ تَظهَرُ في الأَفعالِ اليَوميَّةِ الصَّغيرَة — لَيسَت مَشاعِرَ فَقَط، بل أَفعالٌ تُخَفِّفُ عن الآخَرين وتُشعِرُهُم بِالمَحَبَّة.', en:'True mercy shows in small daily actions — not just feelings but deeds that lighten others\' burdens and make them feel loved.' },
      badge: { icon:'🌸', title:{ar:'وِسامُ قَلبِ النَّبيّ ﷺ', en:'Badge of the Prophet\'s ﷺ Heart'} },
      reflect: [
        {ar:'كَيفَ يُمكِنُني أن أُقَلِّدَ رَحمَةَ النَّبيِّ ﷺ في تَعامُلي مَعَ إخوَتي وأَصدِقائي اليَوم؟', en:'How can I imitate the Prophet\'s ﷺ mercy in how I treat my siblings and friends today?'},
        {ar:'هل سَبَقَ أن خَفَّفتَ عن أَحَدٍ شَيئاً لِتُريحَه؟ كَيفَ شَعَرتَ بَعدَها؟', en:'Have you ever eased something for someone to comfort them? How did you feel afterward?'},
      ],
      didYouKnow: [
        {ar:'حَديثُ تَقصيرِ الصَّلاةِ رَحمَةً بِالأُمِّ رَواهُ البُخاري — حديث ٧٠٨. المَصدَر: islamweb.net/ar/article/195701', en:'The hadith of shortening prayer out of mercy for the mother is narrated by Bukhari — hadith 708. Source: islamweb.net/ar/article/195701'},
        {ar:'قَولُ أَنَسٍ رضي الله عنه رَواهُ البُخاري ومُسلِم. كانَ أَنَسٌ يَقول: «خَدَمتُ النَّبيَّ ﷺ عَشرَ سِنين فَما قالَ لي: أُفٍّ قَطّ». المَصدَر: islamweb.net', en:'The statement of Anas رضي الله عنه was narrated by Bukhari and Muslim. Anas would say: "I served the Prophet ﷺ ten years and he never said \'Uff\' to me." Source: islamweb.net'},
      ],
    },

    /* ══════════════════════════════════════════
       STORY 2 — الرَّجُلُ والكَلبُ العَطشان
       Source: dorar.net / Bukhari 3467
       ══════════════════════════════════════════ */
    {
      icon:'🐾', scene:'desert', character:'🧔',
      title: { ar:'قَطرَةُ رَحمَةٍ في صَحراء: الرَّجُلُ والكَلبُ العَطشان', en:'A drop of mercy in a desert: the man and the thirsty dog' },
      pages: [
        { scene:'desert', character:'🧔',
          text:{ ar:'في صَحراءِ العَرَبِ الشَّاسِعَة، كانَت الشَّمسُ تَقِفُ في كَبِدِ السَّماءِ كَأَنَّها لا تَتَحَرَّك. حَرارَةٌ خانِقَةٌ تُلَفِّفُ كُلَّ شَيء، ورَمالٌ ذَهَبيَّةٌ تَمتَدُّ إلى ما لا نِهايَة تَلمَعُ تَحتَ الحَرارَة. كانَ رَجُلٌ يَمشي وَحدَهُ في هذا الفَضاءِ الشّاسِع، قَدَماهُ تَغوصانِ في الرَّملِ الحارِّ مَعَ كُلِّ خُطوَة، وشِفاهُهُ جافَّةٌ مُتَشَقِّقَة. فَجَأَةً رَأى في بَعيدٍ مَنبَعَ ماء، وقَلبُهُ وَثَبَ فَرَحاً لا يُوصَف!',
                en:'In the vast Arabian desert, the sun stood at the heart of the sky as if it would never move. Suffocating heat wrapped everything, golden sands stretched to infinity gleaming under the scorching light. A man walked alone in this vast expanse, his feet sinking into the hot sand with every step, his lips dry and cracked. Suddenly he saw a water source in the distance, and his heart leapt with indescribable joy!' } },
        { scene:'desert', character:'💧',
          text:{ ar:'وَجَدَ الرَّجُلُ بِئراً قَديمَةً مَنسِيَّة في وَسَطِ الرِّمال. تَسَلَّقَ إلى داخِلِها بِصُعوبَة — الحَبلُ خَشِنٌ والجُدرانُ مُتَصَدِّعَة. أَخَذَ ما يَكفيهِ مِن الماءِ البارِدِ وصَعِدَ رافِعاً نَفسَهُ بِمَشَقَّة. أَغمَضَ عَينَيهِ مِن بَردِ الماءِ وطِيبِه. وهو يَخطو بَعيداً راضياً مُرتاحاً، سَمِعَ أَنيناً غَريباً يَخترِقُ صَمتَ الصَّحراءِ القاسِيَة. التَفَتَ وتَجَمَّدَ مَكانَه.',
                en:'The man found an old forgotten well in the middle of the sands. He climbed into it with difficulty — the rope rough and the walls crumbling. He took what he needed of cool water and climbed back up with great exertion. He closed his eyes at the coldness and sweetness of the water. As he stepped away satisfied and rested, he heard a strange moan piercing the harsh desert silence. He turned and froze.' } },
        { scene:'desert', character:'🌊',
          text:{ ar:'رَأى كَلباً ضَعيفاً يَلهَثُ بِيَأس، قَد احمَرَّت عَيناهُ وتَشَقَّقَت قَوائِمُهُ مِن حَرارَةِ الرَّمل، ولِسانُهُ لاصِقٌ خارِجَ فَمِه مِن شِدَّةِ العَطَش المُميت! كانَ الكَلبُ يَأكُلُ التُّرابَ في يَأسٍ تامٍّ. وَقَفَ الرَّجُلُ يَتَأَمَّلُ المَشهَدَ وفي قَلبِهِ صِراعٌ صامِت: <b>«هو مُجَرَّدُ كَلب — ما يَجمَعُني بِه؟ ولَكِن... لَو تَرَكتُهُ سَيَموت بِالتَّأكيد!»</b> في تِلكَ اللَّحظَةِ الفارِقَة، اختارَ الرَّجُلُ الرَّحمَة.',
                en:'He saw a weak dog panting desperately, eyes red, paws cracked from the sand\'s heat, tongue stuck outside its mouth from deadly thirst! The dog was eating dirt in total despair. The man stood contemplating the scene with a silent struggle in his heart: <b>"He\'s just a dog — what connects me to him? But... if I leave him, he will surely die!"</b> In that decisive moment, the man chose mercy.' },
          choice:{ q:{ar:'لِماذا نَزَلَ الرَّجُلُ في البِئرِ مَرَّةً ثانِيَة؟', en:'Why did the man descend into the well a second time?'},
            opts:[
              { t:{ar:'لِأَنَّهُ نَسِيَ شَيئاً في البِئر.', en:'Because he forgot something in the well.'}, c:false, exp:{ar:'لا — نَزَلَ لِأَنَّهُ رَحِمَ الكَلبَ العَطشان. الرَّحمَةُ تَجعَلُكَ تَتَعَب لِأَجلِ غَيرِك!', en:'No — he descended because he had mercy on the thirsty dog. Mercy makes you exert yourself for others!'} },
              { t:{ar:'رَحمَةً بِالكَلبِ العَطشان.', en:'Out of mercy for the thirsty dog.'}, c:true, exp:{ar:'نَعَم! هذه هي الرَّحمَةُ — أن تَتعَبَ وتَتَكَلَّف مِن أَجلِ مَن يَحتاجُك.', en:'Yes! This is mercy — to exhaust yourself for the sake of one who needs you.'} },
              { t:{ar:'لِأَنَّ الكَلبَ طَلَبَ مِنهُ ذَلِك.', en:'Because the dog asked him to.'}, c:false, exp:{ar:'الكَلبُ لا يَتَكَلَّم، لَكِنَّ حالَهُ كانَ يَصرُخُ بِالحاجَة. الرَّحمَةُ تَفهَمُ حتّى الصَّمت!', en:'The dog doesn\'t speak, but its condition was screaming for help. Mercy understands even silence!'} },
            ] } },
        { scene:'desert', character:'🐾',
          text:{ ar:'نَزَلَ الرَّجُلُ في البِئرِ مَرَّةً ثانِيَة — وهو تَعِبٌ مُتَعَرِّق، وكانَ نُزولُهُ هذه المَرَّةَ أَشَقَّ مِن الأُولى. امتَلَأَ خُفُّهُ بِالماءِ البارِد. صَعِدَ بِحَذَرٍ شَديدٍ حتّى لا يُريقَ قَطرَةً واحِدَة. قَدَّمَ الخُفَّ إلى الكَلبِ الذي كانَ يَنظُرُ إليه بِعَينَينِ حَزينَتَين. شَرِبَ الكَلبُ وشَرِب، وعَيناهُ تَبرُقانِ شَيئاً فَشَيئاً بِشُعاعٍ مِن الحَياة. هَدَأَ لَهاثُهُ وعادَت القُوَّةُ إلى قَوائِمِهِ.',
                en:'The man descended into the well a second time — exhausted and sweating, and this descent was harder than the first. He filled his leather shoe with cold water. He climbed up with extreme care so as not to spill a single drop. He offered the shoe to the dog who was looking at him with sad eyes. The dog drank and drank, his eyes gradually sparkling with a ray of life. His panting settled and strength returned to his legs.' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'قالَ النَّبيُّ ﷺ وهو يَحكي هذه القِصَّة: <b>«فَشَكَرَ اللهُ له فَغَفَرَ له»</b>! الماءُ الذي سَقاهُ كانَ ثَمَنَ الجَنَّة! سَأَلَ الصَّحابَةُ النَّبيَّ ﷺ بِدَهشَة: «يا رَسولَ الله، وإنَّ لَنا في الدَّوابِّ لَأَجرًا؟» قالَ ﷺ: <b>«في كُلِّ ذاتِ كَبِدٍ رَطبَةٍ أَجرٌ!»</b> كُلُّ كَبِدٍ حَيَّة — إنسانٌ أو حَيَوانٌ أو طائِر — إذا رَحِمتَها وأَطعَمتَها وسَقَيتَها كانَ لَكَ عِندَ اللهِ أَجرٌ عَظيم.',
                en:'The Prophet ﷺ said while narrating this story: <b>"So Allah was grateful to him and forgave him"</b>! The water he gave was the price of Paradise! The Companions asked the Prophet ﷺ in amazement: "O Messenger of Allah, do we have a reward for animals?" He ﷺ said: <b>"For every living liver there is a reward!"</b> Every living organ — human, animal, or bird — if you have mercy on it and feed and water it, you have a great reward with Allah.' } },
        { scene:'desert', character:'💞',
          text:{ ar:'تَأَمَّل الرَّجُلَ الذي مَشى وَحدَهُ في الصَّحراءِ يَومَها. مَشى مُتعَباً، واختارَ أن يَتعَبَ أَكثَر. لَم يَكُن يَعلَمُ أنَّ قَطرَةَ ماءٍ واحِدَة ستُنقِذُ رُوحَهُ يَومَ القِيامَة! <b>لَيسَت الجَنَّةُ فَقَط لِلعُبّادِ والزُّهّادِ — بَل هي لِكُلِّ مَن رَقَّ قَلبُهُ، وفاضَت رَحمَتُهُ، وامتَدَّت يَدُهُ بِالخَيرِ حتّى نَحوَ الحَيَوانات!</b> الرَّحمَةُ لا تَعرِفُ حُدوداً ولا شُروطاً.',
                en:'Reflect on the man who walked alone in the desert that day. He walked exhausted, and chose to exhaust himself more. He didn\'t know that a single drop of water would save his soul on the Day of Resurrection! <b>Paradise is not only for worshippers and ascetics — it is for every heart that softened, every mercy that overflowed, every hand that reached out with goodness even toward animals!</b> Mercy knows no boundaries and no conditions.' } },
        { scene:'garden', character:'🌸',
          text:{ ar:'كَم مِن عَمَلٍ صَغيرٍ تَراهُ لا يُذكَر، وهو عِندَ اللهِ ثَقيلٌ كَالجِبال! كَم مِن قَطرَةِ ماءٍ أو كِسرَةِ خُبزٍ أو ابتِسامَةٍ دافِئَة أو كَلِمَةِ عَزاء — غَيَّرَت مَجرى حَياةٍ بِأَكمَلِها! <b>الدَّرسُ الذي يُعَلِّمُنا إيّاهُ هذا الرَّجُلُ الرَّاحِمُ هو: لا تَحتَقِر صَغيرَ الرَّحمَة — فَالجَنَّةُ قد تَكونُ في خُفِّكَ المَبلول!</b>',
                en:'How many small deeds you consider forgettable are, with Allah, as heavy as mountains! How many a drop of water, a piece of bread, a warm smile or a word of consolation — changed the course of an entire life! <b>The lesson this merciful man teaches us is: do not belittle small acts of mercy — for Paradise may be in your wet shoe!</b>' } },
        { scene:'garden', character:'💧',
          text:{ ar:'في هذهِ القِصَّةِ الخالِدَةِ دَرسٌ عَميقٌ لِكُلِّ مِنّا: في يَومٍ ما، ستَمُرُّ بِجانِبِ «كَلبٍ عَطشان» — قد يَكونُ صَديقاً مَكسوراً، أو جاراً محتاجاً، أو غَريباً ضائِعاً. اللَّحظَةُ الفارِقَةُ هي لَحظَةُ الاختِيار: هل تُواصِلُ طَريقَك أم تَنزِلُ في البِئرِ مَرَّةً ثانِيَة؟ <b>تِلكَ اللَّحظَةُ هي التي تُحَدِّدُ مَن أَنتَ حَقيقَةً — لا الكَلامُ الجَميلُ ولا النِّيَّةُ وَحدَها، بل الفِعلُ حينَ تَكونُ مُتعَباً ولا أَحَدَ يَراك!</b> كَم مِن إنسانٍ يَتَكَلَّمُ عن الرَّحمَة ولا يُطَبِّقُها؟ هذا الرَّجُلُ فَعَلَ ولَم يَقُل.',
                en:'In this timeless story lies a deep lesson for each of us: one day you will pass by a "thirsty dog" — it might be a broken friend, a needy neighbor, or a lost stranger. The defining moment is the moment of choice: do you continue on your way, or do you descend into the well a second time? <b>That moment determines who you truly are — not beautiful words nor intention alone, but the action when you are tired and no one is watching!</b> How many people speak of mercy but don’t practice it? This man acted and said nothing.' } },
      ],
      quiz: [
        { q:{ar:'بِمَ سَقى الرَّجُلُ الكَلبَ في الصَّحراء؟', en:'How did the man give the dog water in the desert?'},
          opts:[
            { t:{ar:'بِإناءٍ مَعَه', en:'With a vessel he had'}, c:false },
            { t:{ar:'بِخُفِّه', en:'With his leather shoe'}, c:true },
            { t:{ar:'بِيَدِه', en:'With his hand'}, c:false },
          ] },
        { q:{ar:'ما الجَزاءُ الذي نالَهُ الرَّجُل؟', en:'What reward did the man receive?'},
          opts:[
            { t:{ar:'لم يَنَل شَيئاً', en:'He received nothing'}, c:false },
            { t:{ar:'غَفَرَ اللهُ لَه', en:'Allah forgave him'}, c:true },
            { t:{ar:'نالَ مالاً كَثيراً', en:'He received much wealth'}, c:false },
          ] },
        { q:{ar:'ماذا قالَ النَّبيُّ ﷺ عن سَقيِ الحَيَوان؟', en:'What did the Prophet ﷺ say about watering animals?'},
          opts:[
            { t:{ar:'لا أَجرَ في ذَلِك', en:'There is no reward for it'}, c:false },
            { t:{ar:'في كُلِّ ذاتِ كَبِدٍ رَطبَةٍ أَجر', en:'For every living liver there is a reward'}, c:true },
            { t:{ar:'الأَجرُ لِلمُسلِمين فَقَط', en:'The reward is only for Muslims'}, c:false },
          ] },
      ],
      moral: { ar:'الرَّحمَةُ لا تَعرِفُ حُدوداً — وكُلُّ عَمَلٍ صَغيرٍ مِن رَحمَةٍ يَزرَعُ بَذرَةً في جَنَّةِ الرَّحمَن.', en:'Mercy knows no boundaries — and every small act of mercy plants a seed in the garden of the Most Merciful.' },
      badge: { icon:'🐾', title:{ar:'وِسامُ الرَّحمَةِ بِلا حُدود', en:'Badge of Boundless Mercy'} },
      reflect: [
        {ar:'هل رَأَيتَ حَيَواناً أو شَخصاً يَحتاجُ مِنكَ قَطرَةَ رَحمَةٍ اليَوم؟ ماذا ستَفعَل؟', en:'Have you seen an animal or person who needs a drop of your mercy today? What will you do?'},
        {ar:'لَماذا تَكونُ الأَعمالُ الصَّغيرَةُ أَحياناً أَعظَمَ عِندَ اللهِ مِن الأَعمالِ الكَبيرَة؟', en:'Why are small deeds sometimes greater in Allah\'s sight than grand ones?'},
      ],
      didYouKnow: [
        {ar:'قِصَّةُ الرَّجُلِ والكَلبِ رَواها البُخاري ومُسلِم — حديث البُخاري ٣٤٦٧. المَصدَر: dorar.net/hadith/render/44394', en:'The story of the man and the dog was narrated by Bukhari and Muslim — Bukhari hadith 3467. Source: dorar.net/hadith/render/44394'},
        {ar:'في رِوايَةٍ أُخرى غَفَرَ اللهُ لِامرَأَةٍ بَغِيٍّ سَقَت كَلباً — الرَّحمَةُ مَفتاحٌ لِلمَغفِرَة بِغَضِّ النَّظَرِ عن الذُّنوب. المَصدَر: dorar.net', en:'In another narration, Allah forgave an immoral woman who watered a dog — mercy is a key to forgiveness regardless of sins. Source: dorar.net'},
      ],
    },

    /* ══════════════════════════════════════════
       STORY 3 — عُمَرُ بنُ الخَطَّاب ورَحمَتُهُ بِالرَّعيَّة
       Source: سير أعلام النبلاء — الذهبي — ج٥ ص٢١٣
       ══════════════════════════════════════════ */
    {
      icon:'🌾', scene:'night', character:'👴',
      title: { ar:'عُمَرُ الَّذي يَبكي: رَحمَةُ الخَليفَةِ بِرَعِيَّتِه', en:'The weeping \'Umar: a caliph\'s mercy for his people' },
      pages: [
        { scene:'night', character:'👴',
          text:{ ar:'كانَت الأَرضُ العَرَبيَّةُ تَنعَمُ بِحُكمِ عُمَرَ بنِ الخَطَّاب رضي الله عنه. الخَليفَةُ الثّاني للمُسلِمين، الذي كانَت رِيحُ مَهابَتِهِ تَبلُغُ الأَعداء. لَكِنَّ هذا الرَّجُلَ القَوِيَّ — كانَ قَلبُهُ يَذوبُ رَحمَةً عِندَ أَوَّلِ دَمعَةِ يَتيمٍ أو صَرخَةِ جائِع! كانَ يُكرِّرُ مَقولَتَهُ الشَّهيرَة: «لَو ماتَت بَغلَةٌ في العِراقِ لَخِفتُ أن يَسأَلَني اللهُ عنها: لِمَ لم تُمهِّد لَها الطَّريق!» — سير أعلام النبلاء للذهبي ج٥.',
                en:'The Arabian land was thriving under the rule of \'Umar ibn al-Khattab رضي الله عنه. The second caliph of the Muslims, whose aura of awe reached enemies far away. But this powerful man — his heart melted with mercy at the first tear of an orphan or cry of the hungry! He would repeat his famous saying: "If a mule died in Iraq I\'d fear that Allah would ask me about it — why didn\'t you pave the road for it!" — Siyar A\'lam al-Nubala by al-Dhahabi vol. 5.' } },
        { scene:'night', character:'👴',
          text:{ ar:'في لَيلَةٍ باردَةٍ ومُظلِمَة، والنُّجومُ ضَعيفَةٌ في السَّماء، خَرَجَ عُمَرُ رضي الله عنه وَحدَه — بِلا حَرَسٍ ولا تَرتيب — يَتَفَقَّدُ أَحوالَ رَعِيَّتِهِ في ضَواحي المَدينَة. كانَ مِعطَفُهُ بَسيطاً وخُطاهُ صامِتَة كَخُطى الرِّيح. ليسَ في يَدِهِ سِلاح، بل فَقَط قَلبٌ يَقِظٌ يُفَتِّشُ عن مُحتاج. فَجَأَةً سَمِعَ بُكاءَ أَطفالٍ يَخترِقُ جُدرانَ الطِّينِ مِن بَيتٍ صَغيرٍ في طَرَفِ الحارَة.',
                en:'On a cold dark night, the stars faint in the sky, \'Umar رضي الله عنه went out alone — no guards, no arrangements — to check on his people\'s conditions in the outskirts of Madinah. His cloak was plain and his steps silent as the wind. No weapon in his hand, only an alert heart searching for someone in need. Suddenly he heard children\'s crying piercing the clay walls from a small house at the edge of the neighborhood.' } },
        { scene:'night', character:'💞',
          text:{ ar:'اقتَرَبَ عُمَرُ مِن البَيتِ الصَّغيرِ بِخُطىً حَذِرَة. رَأى مَرأَةً فَقيرَةً شَعثاءَ تَضَعُ قِدراً خاوِياً على النّارِ وبِجانِبِها أَطفالٌ صِغارٌ يَبكون. ناداها بِصَوتٍ لَطيفٍ حانٍ: «ما بالُ هؤُلاءِ الأَطفالِ يَبكون؟» قالَت وهي لا تَعرِفُ مَن يُكَلِّمُها: «يَبكونَ مِن الجوع، وأنا أُوهِمُهُم أنَّ في القِدرِ طَعاماً — وما فيهِ غَيرُ الماءِ والحِجارَة!»',
                en:'\'Umar approached the small house with cautious steps. He saw a poor disheveled woman placing an empty pot over the fire, with small children crying beside her. He called to her in a soft warm voice: "What is the matter with these children crying?" She said, not knowing who was speaking to her: "They\'re crying from hunger, and I\'m deceiving them that there is food in the pot — but there is nothing in it but water and stones!"' },
          choice:{ q:{ar:'ماذا فَعَلَ عُمَرُ حينَ سَمِعَ هذا الكَلام؟', en:'What did \'Umar do when he heard these words?'},
            opts:[
              { t:{ar:'عادَ إلى بَيتِهِ ونَسِيَ الأَمر.', en:'He returned home and forgot about it.'}, c:false, exp:{ar:'لا — عُمَرُ لَم يَكُن لِيَتركَ جائِعاً في رَعِيَّتِه! قَلبُهُ كانَ أَرحَمَ مِن ذَلِك.', en:'No — \'Umar would never leave a hungry person among his people! His heart was too merciful for that.'} },
              { t:{ar:'ذَهَبَ فَوراً وحَمَلَ الطَّعامَ على ظَهرِه بِنَفسِه.', en:'He went immediately and carried food on his own back.'}, c:true, exp:{ar:'نَعَم! عُمَرُ الخَليفَةُ حَمَلَ الطَّحينَ والشَّحمَ على ظَهرِه بِيَدِه وجاءَ يَطبُخُ لِهذه الأُسرَة الجائِعَة!', en:'Yes! The Caliph \'Umar carried flour and fat on his own back and came to cook for this hungry family!'} },
              { t:{ar:'أَرسَلَ خادِمَهُ لِيَجلُبَ الطَّعام.', en:'He sent his servant to bring food.'}, c:false, exp:{ar:'عُمَرُ لم يَكُن لَهُ خادِمٌ معَهُ في هذهِ اللَّيلَة — خَرَجَ وَحدَه لِيَعيشَ مَعَ رَعِيَّتِه.', en:'\'Umar had no servant with him that night — he went out alone to live with his people.'} },
            ] } },
        { scene:'night', character:'🌾',
          text:{ ar:'رَكَضَ عُمَرُ رضي الله عنه إلى بَيتِ المالِ في الظَّلام — وَحدَه والرِّيحُ الباردَةُ تَضرِبُ وَجهَه. رَفَعَ الكيسَ الثَّقيلَ مِن الدَّقيقِ على عاتِقِهِ المُثقَل، وأَمسَكَ جَرَّةَ السَّمن. كانَ صاحِبُهُ يَقول: «دَعني أَحمِلُ عَنكَ يا أَميرَ المُؤمِنين!» فَكانَ عُمَرُ يَرُدُّ بِكَلامٍ يُذيبُ القُلوب: <b>«لا — أنا الذي أَتحَمَّلُ وِزرَ هذه الأُسرَة يَومَ القِيامَة، فَأنا أَحمِلُ عَنها اليَوم!»</b>',
                en:'\'Umar رضي الله عنه ran to the public treasury in the darkness — alone while the cold wind struck his face. He lifted the heavy sack of flour onto his burdened shoulder and took a jug of fat. His companion kept saying: "Let me carry it for you, O Commander of the Faithful!" And \'Umar would reply with words that melted hearts: <b>"No — I am the one who bears the burden of this family on the Day of Resurrection, so I will carry for them today!"</b>' } },
        { scene:'night', character:'👴',
          text:{ ar:'وَصَلَ عُمَرُ إلى البَيتِ وقَلبُهُ يَخفُق بِالرَّحمَة. جَلَسَ على الأَرضِ جَنبَ النّارِ — الخَليفَةُ الذي تَهابُهُ الرُّومُ والفُرس — يُوقِدُ النّارَ ويَنفُخُ فيها بِفَمِه حتّى يَلتَهِبَ الجَمر. وبَدَأَ يَطبُخُ بِيَدِهِ الكَريمَة. كانَ دُخانُ النّارِ يَمسَحُ وَجهَهُ ودُموعٌ صامِتَةٌ تُخالِطُها. وحينَ نَضِجَ الطَّعام، قَعَدَ الأَطفالُ حَولَهُ يَأكُلونَ ويَضحَكون.',
                en:'\'Umar arrived at the house, his heart beating with mercy. He sat on the ground beside the fire — the caliph feared by the Romans and Persians — stoking the fire and blowing on it with his own mouth until the embers blazed. He began to cook with his noble hands. The fire\'s smoke swept across his face mixed with silent tears. When the food was ready, the children sat around him eating and laughing.' } },
        { scene:'night', character:'💞',
          text:{ ar:'بَعدَ أن شَبِعَ الأَطفالُ ولَعِبوا، وَقَفَ عُمَرُ رضي الله عنه عِندَ بابِ البَيتِ ودُموعُهُ تَسيلُ بِهُدوءٍ في الظَّلام. قالَ بِصَوتٍ خافِت: «الحَمدُ لِلَّهِ! اليَومَ عَدَلتُ قَليلاً». فَقالَ لَهُ صاحِبُه: «يا أَميرَ المُؤمِنين، تَبكي؟!» قالَ عُمَرُ وهو يَمسَحُ دَمعَتَهُ: <b>«أَبكي لأَنَّني كِدتُ أَن أَكونَ سَبَبَ ضَياعِ هؤلاءِ الأَطفالِ بِغَفلَتي عنهم!»</b>',
                en:'After the children had eaten and were playing, \'Umar stood at the house door, his tears flowing quietly in the darkness. He said in a soft voice: "Praise be to Allah! Today I have been a little just." His companion said: "O Commander of the Faithful, you are weeping?!" \'Umar said, wiping his tear: <b>"I weep because I nearly caused these children\'s destruction through my heedlessness of them!"</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'كانَ هذا شَأنُ عُمَرَ كُلَّ لَيلَة. قالَ الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء ج٥ ص٢١٣: «كانَ عُمَرُ يَطوفُ اللَّيلَ وَحدَه، ويَتَفَقَّدُ الأُسَرَ الجائِعَة، ويَحمِلُ الطَّعامَ بِيَدِه». خَليفَةٌ يَملِكُ نِصفَ العالَم، يَسيرُ في الظَّلامِ حامِلاً كيسَ الدَّقيق — لأَنَّ قَلبَهُ لا يُطيقُ أن يَنامَ وَجارٌ أو رَعِيَّةٌ جائِعَة! <b>الرَّحمَةُ الحَقيقيَّةُ لَيسَت كَلاماً يُقال — بل هي خُبزٌ يُقدَّم ودُموعُ رَحمَةٍ تَسيلُ في الظَّلام!</b>',
                en:'This was \'Umar\'s nightly practice. Al-Dhahabi said in Siyar A\'lam al-Nubala vol. 5 p. 213: "\'Umar would patrol at night alone, checking on hungry families, carrying food with his own hands." A caliph who owned half the world, walking in the darkness carrying a flour sack — because his heart could not bear to sleep while any neighbor or subject was hungry! <b>True mercy is not words spoken — it is bread offered and tears of mercy flowing in the dark!</b>' } },
        { scene:'garden', character:'🌾',
          text:{ ar:'وقَد قالَ عُمَرُ رضي الله عنه مَقولَةً تَلخِّصُ فَلسَفَتَهُ في الرَّحمَة وهو يُخاطِبُ نَفسَه أَمامَ اللهِ: «اللَّهُمَّ إنَّني خِفتُ مَسؤولِيَّتي أَمامَكَ، فَأَرَدتُ أن أُؤَدِّيَها اليَوم قَبلَ الغَد!» كانَ عُمَرُ يَفهَمُ الرَّحمَةَ فَهماً عَميقاً: هي لَيسَت شُعوراً بالإشفاقِ فَحَسب، بل مَسؤوليَّةٌ يُحاسَبُ عليها كُلُّ قادِر. <b>الرَّحمَةُ في يَدِ الرَّجُلِ القَوِيِّ أَعظَمُ أَثَراً — لأنَّ القادِرَ حينَ يَختارُ الرَّحمَةَ يُعلِنُ قِيمَةً لا تُشترى.</b> كانَ عُمَرُ قَوِيّاً كَالجَبَل ورَحيماً كَالماء، وفي الجَمعِ بَينَهُما سِرُّ عَظَمَتِه.',
                en:'Umar رضي الله عنه said words summarizing his philosophy of mercy, addressing himself before Allah: "O Allah, I feared my responsibility before You, so I wanted to fulfill it today before tomorrow!" ’Umar understood mercy with profound understanding: it is not just a feeling of compassion, but a responsibility for which every capable person is held accountable. <b>Mercy in the hand of a strong man has the greatest impact — for when the capable chooses mercy, he declares a value that cannot be bought.</b> ’Umar was strong as a mountain and merciful as water, and in combining them lay the secret of his greatness.' } },
      ],
      quiz: [
        { q:{ar:'لِماذا خَرَجَ عُمَرُ وَحدَه في اللَّيل؟', en:'Why did \'Umar go out alone at night?'},
          opts:[
            { t:{ar:'لِلتَّنَزُّه', en:'For a stroll'}, c:false },
            { t:{ar:'لِيَتَفَقَّدَ أَحوالَ رَعِيَّتِه', en:'To check on his people\'s conditions'}, c:true },
            { t:{ar:'لِيُقاتِلَ أَعداءَه', en:'To fight his enemies'}, c:false },
          ] },
        { q:{ar:'ماذا حَمَلَ عُمَرُ على ظَهرِه إلى الأُسرَة الجائِعَة؟', en:'What did \'Umar carry on his back to the hungry family?'},
          opts:[
            { t:{ar:'ذَهَباً وفِضَّة', en:'Gold and silver'}, c:false },
            { t:{ar:'كيسَ دَقيقٍ وسَمن', en:'A sack of flour and fat'}, c:true },
            { t:{ar:'مَلابِسَ جَديدَة', en:'New clothes'}, c:false },
          ] },
        { q:{ar:'لِماذا بَكى عُمَرُ بَعدَ أن أَكَلَ الأَطفالُ؟', en:'Why did \'Umar weep after the children had eaten?'},
          opts:[
            { t:{ar:'مِن الفَرَح', en:'From joy'}, c:false },
            { t:{ar:'لأَنَّهُ كادَ يُهمِلَهُم بِغَفلَتِه', en:'Because he almost neglected them through heedlessness'}, c:true },
            { t:{ar:'مِن التَّعَب', en:'From exhaustion'}, c:false },
          ] },
      ],
      moral: { ar:'الرَّاعي الحَقيقيُّ يَحمِلُ هُمومَ رَعِيَّتِهِ على ظَهرِه — لأَنَّهُ يَعلَمُ أَنَّهُ مَسؤولٌ عنها أَمامَ الله.', en:'The true shepherd carries his flock\'s worries on his back — because he knows he is responsible for them before Allah.' },
      badge: { icon:'🌾', title:{ar:'وِسامُ الرّاعي الرَّاحِم', en:'Badge of the Merciful Shepherd'} },
      reflect: [
        {ar:'أنتَ مَسؤولٌ عَمَّن حَولَك. مَن يَحتاجُ رَحمَتَكَ الآن — في بَيتِكَ أو مَدرَسَتِك؟', en:'You are responsible for those around you. Who needs your mercy right now — at home or at school?'},
        {ar:'إذا كُنتَ مَسؤولاً عن فَريقٍ أو صَفٍّ أو عائِلَة، كَيفَ يَجِبُ أن تَتَصَرَّف؟', en:'If you were responsible for a team, a class, or a family, how should you act?'},
      ],
      didYouKnow: [
        {ar:'قِصَّةُ عُمَرَ ومَشيِه بِاللَّيلِ مَشهورَةٌ في سِيَرِ أَعلامِ النُّبَلاء لِلذَّهَبيِّ — ج٥ ص٢١٣. المَصدَر: سير أعلام النبلاء — الذهبي — ج٥ ص٢١٣', en:'The story of \'Umar\'s night patrol is famous in Siyar A\'lam al-Nubala by al-Dhahabi — vol. 5 p. 213. Source: Siyar A\'lam al-Nubala — al-Dhahabi — vol. 5 p. 213'},
        {ar:'قالَ عُمَرُ رضي الله عنه مَقولَتَهُ الخالِدَة: «لَو ماتَت بَغلَةٌ في العِراقِ لَخِفتُ أن يَسأَلَني اللهُ عنها لِمَ لم تُمهِّد لَها الطَّريق!» المَصدَر: سير أعلام النبلاء — الذهبي', en:'\'Umar رضي الله عنه said his immortal saying: "If a mule died in Iraq I\'d fear that Allah would ask me about it — why didn\'t you pave the road for it!" Source: Siyar A\'lam al-Nubala — al-Dhahabi'},
      ],
    },

    /* ══════════════════════════════════════════
       STORY 4 — ابنُ القَيِّم ومَدارِجُ الرَّحمَة
       Source: مدارج السالكين — ابن القيم — باب الرحمة
       ══════════════════════════════════════════ */
    {
      icon:'📜', scene:'garden', character:'📖',
      title: { ar:'مِعراجُ الرَّحمَة: رِحلَةٌ في مَدارِجِ ابنِ القَيِّم', en:'The ascent of mercy: a journey into Ibn al-Qayyim\'s Madarij' },
      pages: [
        { scene:'garden', character:'📖',
          text:{ ar:'في القَرنِ الثَّامِنِ الهِجريّ، في دِمَشقَ الشَّامِ العَريقَة، كانَ الإمامُ ابنُ قَيِّمِ الجَوزِيَّةِ رحمه الله يَجلِسُ في حُجرَتِهِ الصَّغيرَة المُضاءَةِ بِمَصباحٍ وَاهِن. الكُتُبُ تُحيطُ بِه مِن كُلِّ جانِب كَجُدرانٍ مِن حِكمَة، والرِّيحُ الباردَةُ تَدُقُّ النّافِذَة. كانَ يَكتُبُ في كِتابِهِ الخالِد «مَدارِجُ السّالِكين» — ذلِكَ الكِتابُ الفَريدُ الذي غاصَ فيه إلى أَعمَقِ أَعماقِ القُلوبِ البَشَريَّة، بابٌ بابٌ ومَقامٌ مَقام.',
                en:'In the eighth Islamic century, in ancient Damascus, Imam Ibn Qayyim al-Jawziyyah رحمه الله sat in his small room lit by a dim lamp. Books surrounded him from every side like walls of wisdom, the cold wind knocking at the window. He was writing in his immortal book "Madarij al-Salikin" — that unique book in which he dived to the deepest depths of the human heart, station by station, chapter by chapter.' } },
        { scene:'garden', character:'📖',
          text:{ ar:'كَتَبَ ابنُ القَيِّم رحمه الله في «مَدارِجِ السّالِكين» في بابِ «مَنازِلُ إيّاكَ نَعبُد» بِيَدٍ تَرتَجِفُ خُشوعاً: <b>«الرَّحمَةُ صِفَةٌ تَستَلزِمُ إيصالَ الخَيرِ إلى المَرحومِ وكَفَّ الأَذى عَنه. وهي مِن أَجَلِّ صِفاتِ القَلب. فَالقَلبُ الرَّاحِمُ قَلبٌ حَيٌّ يَتَأَثَّرُ ويَتَفاعَل، أَمّا القَلبُ القاسي فَمَيِّتٌ وإن كانَ صاحِبُهُ يَمشي بَينَ النّاس.»</b> توقَّفَ القَلَمُ لَحظَة. ثُمَّ واصَل.',
                en:'Ibn al-Qayyim رحمه الله wrote in "Madarij al-Salikin" in the chapter of "the stations of \'You alone we worship\'" with a hand trembling in reverence: <b>"Mercy is an attribute that necessitates delivering good to the recipient and holding back harm from him. It is among the noblest attributes of the heart. The merciful heart is a living heart that is moved and responsive, while the hard heart is dead even if its owner walks among people."</b> The pen paused a moment. Then continued.' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'كانَ الطُّلّابُ يَجلِسونَ في الخارِجِ يَنتَظِرونَ دَرسَ ابنِ القَيِّم. أَحَدُهُم — طالِبٌ شابٌّ اسمُهُ إبراهيم — كانَ يَبكي بُكاءً مُرّاً في الزَّاوِيَة. أَصابَتهُ مُصيبَةٌ أَثقَلَت قَلبَهُ وأَشعَرَتهُ أنَّ رَحمَةَ اللهِ بَعيدَة. جاءَ يَسأَلُ شَيخَهُ بِصَوتٍ خافِت مُنكَسِر: «يا شَيخَنا — هل يَرحَمُني اللهُ بَعدَ كُلِّ هذا؟ قَلبي يَكادُ يَنكَسِر مِن الخَوف!» رَفَعَ ابنُ القَيِّم رَأسَهُ مِن الكِتاب ونَظَرَ إلى الطّالِبِ بِعَينَينِ مِلؤهُما الحَنانُ والرَّأفَة.',
                en:'The students were sitting outside waiting for Ibn al-Qayyim\'s lesson. One of them — a young student named Ibrahim — was weeping bitterly in the corner. A calamity had struck him, weighing on his heart and making him feel that Allah\'s mercy was far away. He came asking his shaykh in a quiet, broken voice: "O our shaykh — will Allah have mercy on me after all this? My heart is nearly breaking from fear!" Ibn al-Qayyim lifted his head from the book and looked at the student with eyes full of tenderness and compassion.' },
          choice:{ q:{ar:'ماذا قالَ ابنُ القَيِّم لِلطّالِبِ الحَزين؟', en:'What did Ibn al-Qayyim say to the sorrowful student?'},
            opts:[
              { t:{ar:'قالَ له: ذُنوبُكَ كَثيرَةٌ ولا أَدري!', en:'He said: your sins are many and I don\'t know!'}, c:false, exp:{ar:'لا — ابنُ القَيِّم كانَ عالِماً رَحيماً يَعرِفُ كَيفَ يُعالِجُ الجِراحَ بِالقُرآن.', en:'No — Ibn al-Qayyim was a merciful scholar who knew how to treat wounds with the Quran.'} },
              { t:{ar:'قالَ: رَحمَةُ اللهِ أَوسَعُ مِن ذُنوبِكَ — لا تَيأَس!', en:'He said: Allah\'s mercy is wider than your sins — do not despair!'}, c:true, exp:{ar:'نَعَم! هذا هو عِلمُ الرَّحمَة — أن تَعرِفَ كَيفَ تُوصِلُها إلى مَن يَحتاجُها في وَقتِها.', en:'Yes! This is the knowledge of mercy — knowing how to deliver it to those who need it at the right time.'} },
              { t:{ar:'صَمَتَ ولم يَقُل شَيئاً.', en:'He remained silent and said nothing.'}, c:false, exp:{ar:'الصَّمتُ في مَواطِنِ الحاجَةِ ليسَ رَحمَة. الرَّحمَةُ فِعلٌ وكَلِمَة.', en:'Silence when needed is not mercy. Mercy is action and word.'} },
            ] } },
        { scene:'garden', character:'💞',
          text:{ ar:'قالَ ابنُ القَيِّم رحمه الله بِصَوتٍ دافِئٍ يَملَأُ الحُجرَة الصَّغيرَة: <b>«يا بُنَيّ — رَحمَةُ اللهِ سَبَقَت غَضَبَه، ووَسِعَت كُلَّ شَيء. اللهُ قالَ عن نَفسِه: ﴿ وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ﴾ — فَهَل أَنتَ أَكبَرُ مِن "كُلِّ شَيء"؟!»</b> ارتَعَشَت شَفَتا الطّالِبِ إبراهيم ثُمَّ بَكى — لَكِن هذه المَرَّة بُكاءَ رَجاءٍ وأَمَل، لا بُكاءَ يَأسٍ وخَوف.',
                en:'Ibn al-Qayyim رحمه الله said in a warm voice filling the small room: <b>"My son — Allah\'s mercy preceded His anger and encompassed all things. Allah said of Himself: ﴿ My mercy encompasses all things ﴾ — are you greater than \'all things\'?!"</b> Student Ibrahim\'s lips trembled and then he wept — but this time with tears of hope and optimism, not tears of despair and fear.' } },
        { scene:'garden', character:'📖',
          text:{ ar:'قالَ الطّالِبُ إبراهيم بِصَوتٍ مُتَهَدِّج: «جَزاكَ اللهُ خَيراً يا شَيخَنا — أَشعَرتَني اليَومَ بِرَحمَةِ اللهِ مِن خِلالِ رَحمَتِكَ بِي!» عادَ ابنُ القَيِّم إلى قَلَمِه وكَتَبَ: <b>«الرَّحمَةُ قِبلَةُ القُلوبِ الصَّالِحَة — بِها يَتَقَرَّبُ العَبدُ إلى رَبِّه، وبِها يَصِلُ القَلبُ إلى كَمالِه. فَاطلُبِ الرَّحمَةَ مِن أَكرَمِ الرُّحَماء — وبُثَّها في الخَلقِ تَجِد رَحمَتَهُ تَغمُرُكَ مِن حَيثُ لا تَحتَسِب.»</b>',
                en:'Student Ibrahim said with a trembling voice: "May Allah reward you, dear shaykh — today you made me feel Allah\'s mercy through your mercy to me!" Ibn al-Qayyim returned to his pen and wrote: <b>"Mercy is the qiblah of righteous hearts — through it the servant draws near to his Lord, and through it the heart reaches its perfection. So seek mercy from the Most Generous of the merciful — and spread it among creation, and you will find His mercy surrounding you from where you least expect."</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'قالَ ابنُ القَيِّم رحمه الله في «مَدارِجِ السّالِكين» في فَصلٍ بَديعٍ لا يُنسى: <b>«ثَلاثَةُ أَشياءَ إذا سَكَنَت في القَلبِ أَخرَجَت الرَّحمَةَ مِنهُ: الكِبرُ والحِقدُ والحَسَد — فَإذا ذَهَبَت هذهِ الثَّلاثَةُ سَكَنَت الرَّحمَةُ القَلبَ ولا بُدّ.»</b> انتَهى ابنُ القَيِّم مِن دَرسِهِ ذلكَ اليَوم، وخَرَجَ الطُّلّابُ وفي وُجوهِهِم نورٌ لم يَكُن فيها حينَ دَخَلوا.',
                en:'Ibn al-Qayyim رحمه الله said in "Madarij al-Salikin" in an unforgettable beautiful passage: <b>"Three things, if they dwell in the heart, drive mercy out of it: pride, hatred, and envy — if these three depart, mercy settles in the heart inevitably."</b> Ibn al-Qayyim finished his lesson that day, and the students left with a light on their faces that wasn\'t there when they entered.' } },
        { scene:'garden', character:'💞',
          text:{ ar:'كانَ ابنُ القَيِّم رحمه الله نَفسُهُ نَموذَجاً حَيّاً لِما كَتَب. كانَ يُزورُ المَرضى ويَهتَمُّ بِطُلّابِه ويَرحَمُ الفُقَراء. ظَلَّ طُلّابُهُ يُحِبّونَهُ لِسَنَواتٍ بَعدَ رَحيلِه لأَنَّهُم لَم يَروا مَن جَمَعَ بَينَ العِلمِ العَميقِ والقَلبِ الرَّاحِمِ كَجَمعِه. <b>تَذَكَّر: الرَّحمَةُ تَبدَأُ بِتَنقِيَةِ القَلبِ مِن الكِبرِ والحِقدِ والحَسَد — فَهل أَنتَ مُستَعِدٌّ لِهذهِ الرِّحلَة؟</b>',
                en:'Ibn al-Qayyim رحمه الله was himself a living example of what he wrote. He would visit the sick, care for his students, and show mercy to the poor. His students remained devoted to him for years after his passing because they had never seen anyone who combined deep knowledge with a merciful heart as he did. <b>Remember: mercy begins by purifying the heart from pride, hatred, and envy — are you ready for this journey?</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'تَرَكَ ابنُ القَيِّم رحمه الله لِلأُمَّةِ إرثاً خالِداً — كِتابٌ يَقرَؤُهُ اليَومَ مَلايينُ المُسلِمين ويَجِدونَ فيه الرَّحمَةَ التي تَحتاجُها قُلوبُهُم. وكأنَّ ابنَ القَيِّم كانَ يَكتُبُ لَكَ أنتَ شَخصِيّاً — لِيَقولَ لَك: «قَلبُكَ يَستَطيعُ أن يَتَغَيَّر، وكُلُّ لَحظَةٍ هي فُرصَةٌ جَديدَة». كانَ يُؤمِنُ أنَّ الرَّحمَةَ لَيسَت حِكراً على الأَنبِياءِ والأَولِياء — بل هي بَذرَةٌ مَزروعَةٌ في كُلِّ إنسان، تَنتَظِرُ مَن يَسقيها. <b>فَاسقِ بَذرَةَ الرَّحمَةِ في قَلبِكَ اليَوم — بِنِيَّةٍ صادِقَةٍ ودُعاءٍ خالِص وعَمَلٍ بَسيط!</b>',
                en:'Ibn al-Qayyim رحمه الله left the nation an immortal legacy — a book read today by millions of Muslims who find in it the mercy their hearts need. As though Ibn al-Qayyim was writing personally to you — to say: "Your heart can change, and every moment is a new opportunity." He believed that mercy is not exclusive to prophets and saints — it is a seed planted in every human being, waiting for someone to water it. <b>Water the seed of mercy in your heart today — with a sincere intention, a pure supplication, and a simple deed!</b>' } },
      ],
      quiz: [
        { q:{ar:'ما اسمُ كِتابِ ابنِ القَيِّم الذي تَكَلَّمَ فيه عن الرَّحمَة؟', en:'What is the name of Ibn al-Qayyim\'s book in which he spoke about mercy?'},
          opts:[
            { t:{ar:'إحياء علوم الدين', en:'Ihya\' \'Ulum al-Din'}, c:false },
            { t:{ar:'مدارج السالكين', en:'Madarij al-Salikin'}, c:true },
            { t:{ar:'المغني', en:'Al-Mughni'}, c:false },
          ] },
        { q:{ar:'ما الأَشياءُ الثَّلاثَةُ التي تُخرِجُ الرَّحمَةَ مِن القَلب؟', en:'What are the three things that drive mercy out of the heart?'},
          opts:[
            { t:{ar:'الكَسَلُ والجَهلُ والنِّسيان', en:'Laziness, ignorance, and forgetfulness'}, c:false },
            { t:{ar:'الكِبرُ والحِقدُ والحَسَد', en:'Pride, hatred, and envy'}, c:true },
            { t:{ar:'الغَضَبُ والجوعُ والتَّعَب', en:'Anger, hunger, and exhaustion'}, c:false },
          ] },
        { q:{ar:'ما الذي أَشعَرَ الطّالِبَ بِرَحمَةِ اللهِ تَعالى؟', en:'What made the student feel Allah\'s mercy?'},
          opts:[
            { t:{ar:'قِراءَةُ كِتابٍ كَبير', en:'Reading a large book'}, c:false },
            { t:{ar:'رَحمَةُ الشَّيخِ بِه وكَلامُهُ اللَّطيف', en:'The shaykh\'s mercy and kind words to him'}, c:true },
            { t:{ar:'رُؤيَةُ مَنامٍ في اللَّيل', en:'Seeing a dream at night'}, c:false },
          ] },
      ],
      moral: { ar:'الرَّحمَةُ الحَقيقيَّةُ تَعيشُ في القَلبِ قَبلَ أن تَظهَرَ في الفِعل — ابدَأ بِتَنقِيَةِ قَلبِكَ مِن الكِبرِ والحِقدِ والحَسَد.', en:'True mercy lives in the heart before it appears in action — begin by purifying your heart from pride, hatred, and envy.' },
      badge: { icon:'📜', title:{ar:'وِسامُ حِكمَةِ ابنِ القَيِّم', en:'Badge of Ibn al-Qayyim\'s Wisdom'} },
      reflect: [
        {ar:'هل في قَلبِكَ حِقدٌ على أَحَدٍ أو حَسَد؟ كَيفَ يُمكِنُكَ التَّخَلُّصُ مِنهُ لِيَدخُلَ قَلبَكَ الرَّحمَة؟', en:'Is there any grudge or envy in your heart toward someone? How can you rid yourself of it so mercy enters your heart?'},
        {ar:'كَيفَ يُمكِنُ لِلعِلمِ أن يُحيي القُلوبَ مِثلَما أَحيا ابنُ القَيِّم قَلبَ طالِبِه إبراهيم؟', en:'How can knowledge revive hearts, just as Ibn al-Qayyim revived his student Ibrahim\'s heart?'},
      ],
      didYouKnow: [
        {ar:'كِتابُ «مَدارِجِ السّالِكين» لِابنِ القَيِّم مِن أَعمَقِ الكُتُبِ في عِلمِ القُلوب. تَكَلَّمَ فيه عن الرَّحمَةِ في باب «مَنازِلُ إيّاكَ نَعبُد». المَصدَر: مدارج السالكين — ابن القيم — باب الرحمة', en:'The book "Madarij al-Salikin" by Ibn al-Qayyim is among the deepest books on the science of hearts. He spoke about mercy in the chapter of "the stations of \'You alone we worship\'." Source: Madarij al-Salikin — Ibn al-Qayyim — chapter on mercy'},
        {ar:'ابنُ القَيِّم رحمه الله (٦٩١–٧٥١هـ) كانَ تَلميذَ شَيخِ الإسلامِ ابنِ تَيمِيَّة، ومَعروفاً بِرَحمَتِهِ بِطُلّابِه. المَصدَر: سير أعلام النبلاء — الذهبي', en:'Ibn al-Qayyim رحمه الله (691–751 AH) was a student of Shaykh al-Islam Ibn Taymiyyah, known for his mercy toward his students. Source: Siyar A\'lam al-Nubala — al-Dhahabi'},
      ],
    },

  ],

  /* ───── ROOM 3: Memorize ───── */
  /* ─────────────────────────────────────────────────────────────
     ROOM 3: Memorize — آياتٌ وأَحاديثُ وعَهدٌ
     اللَّهُمَّ ارحَمنا بِرَحمَتِكَ الواسِعَة
     ─────────────────────────────────────────────────────────────── */
  memorize: {
    verses: [
      { text: { ar:'﴿ وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ ﴾', en:'"And We have not sent you except as a mercy to the worlds."' }, ref: { ar:'[سورة الأنبياء: ١٠٧]', en:'[Surah Al-Anbiya: 107]' } },
      { text: { ar:'﴿ وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا ﴾', en:'"Lower to them the wing of humility out of mercy, and say: My Lord, have mercy on them as they raised me when I was small."' }, ref: { ar:'[سورة الإسراء: ٢٤]', en:'[Surah Al-Isra: 24]' } },
      { text: { ar:'﴿ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ ﴾', en:'"Indeed, the mercy of Allah is near to the doers of good."' }, ref: { ar:'[سورة الأعراف: ٥٦]', en:'[Surah Al-A\'raf: 56]' } },
    ],
    hadiths: [
      { text: { ar:'«الرَّاحِمونَ يَرحَمُهُمُ الرَّحمَن، ارحَموا مَن في الأَرضِ يَرحَمكُم مَن في السَّماء»', en:'"The merciful are shown mercy by the Most Merciful. Show mercy to those on earth and He who is in the heavens will show mercy to you."' }, ref: { ar:'[رواه أبو داود والترمذي — حديث صحيح]', en:'[Abu Dawud & Tirmidhi — sound hadith]' } },
      { text: { ar:'«مَن لا يَرحَمُ النّاسَ لا يَرحَمُهُ الله»', en:'"Whoever does not show mercy to people, Allah will not show mercy to him."' }, ref: { ar:'[رواه البُخاري ومُسلِم — حديث ٧٣٧٦]', en:'[Bukhari & Muslim — 7376]' } },
    ],
    pledge: {
      title: { ar:'عَهدُ الرَّحمَة', en:'Pledge of Mercy' },
      lines: [
        { ar:'أُعاهِدُ اللهَ أن أَرحَمَ الصَّغيرَ والكَبيرَ وكُلَّ مَخلوق', en:'I pledge to Allah to show mercy to the young, the old, and every creation' },
        { ar:'أُعاهِدُ اللهَ أن أُخَفِّفَ عن المُحتاجِ وأُسعِفَ المَظلوم', en:'I pledge to Allah to ease the burden of the needy and aid the wronged' },
        { ar:'أُعاهِدُ اللهَ أن أُنَقِّيَ قَلبي مِن الحِقدِ والكِبرِ والحَسَد', en:'I pledge to Allah to purify my heart from hatred, pride, and envy' },
        { ar:'أُعاهِدُ اللهَ أن أَقتَدِيَ بِرَحمَةِ النَّبيِّ ﷺ في كُلِّ يَوم', en:'I pledge to Allah to follow the Prophet\'s ﷺ mercy every single day' },
      ],
      dua: { ar:'اللَّهُمَّ ارزُقني قَلباً رَحيماً، ورَقِّق قَلبي لِمَن حَولي، وارحَمني بِرَحمَتِكَ يا أَرحَمَ الرَّاحِمين', en:'O Allah, grant me a merciful heart, soften my heart toward those around me, and have mercy on me with Your mercy, O Most Merciful of the merciful' },
    },
  },

  /* ───── ROOM 4: Activities ───── */
  /* ─────────────────────────────────────────────────────────────
     ROOM 4: Activities — 6 أَنواع × 3 مُستَويات = 18 لُعبَة
     مَجموعُ النُّقاط: 180 — كُلُّ مُستَوى = 30 نُقطَة
     ─────────────────────────────────────────────────────────────── */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اعرِف', en:'Know' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: { ar:['الرَّحمَة','القَلب','اللهُ','العالَمين','الرَّحمَن','الأَرض','الرَّاحِمون','الكِبر'], en:['mercy','heart','Allah','worlds','Most Merciful','earth','merciful','pride'] },
            items: [
              { prefix:{ar:'وَما أَرسَلناكَ إلّا', en:'We sent you only as'}, answer:{ar:'رَحمَةً', en:'mercy'}, suffix:{ar:'لِلعالَمين', en:'to the worlds'} },
              { prefix:{ar:'الرَّحمَةُ هي رِقَّةُ', en:'Mercy is the tenderness of'}, answer:{ar:'القَلب', en:'heart'}, suffix:{ar:'وانعِطافُهُ نَحوَ المُحتاج', en:'and its leaning toward the needy'} },
              { prefix:{ar:'كَتَبَ', en:'decreed'}, answer:{ar:'اللهُ', en:'Allah'}, suffix:{ar:'على نَفسِهِ الرَّحمَة', en:'mercy upon Himself'} },
              { prefix:{ar:'الرَّاحِمونَ يَرحَمُهُم', en:'The merciful are shown mercy by the'}, answer:{ar:'الرَّحمَن', en:'Most Merciful'}, suffix:{ar:'تَعالى', en:''} },
              { prefix:{ar:'ارحَموا مَن في', en:'Show mercy to those on'}, answer:{ar:'الأَرض', en:'earth'}, suffix:{ar:'يَرحَمكُم مَن في السَّماء', en:'and He in the heavens will show mercy to you'} },
              { prefix:{ar:'النَّبيُّ ﷺ قَصَّرَ الصَّلاةَ رَحمَةً بِ', en:'The Prophet ﷺ shortened prayer out of mercy for the'}, answer:{ar:'أُمّ', en:'mother'}, suffix:{ar:'التي تَحمِلُ طِفلَها الباكي', en:'who carries her crying child'} },
              { prefix:{ar:'عُمَرُ حَمَلَ الطَّعامَ على ظَهرِهِ رَحمَةً بِ', en:'Umar carried food on his back out of mercy for his'}, answer:{ar:'رَعِيَّة', en:'people'}, suffix:{ar:'الجائِعَة', en:'who were hungry'} },
              { prefix:{ar:'في كُلِّ ذاتِ كَبِدٍ', en:'For every living'}, answer:{ar:'رَطبَةٍ', en:'liver'}, suffix:{ar:'أَجرٌ عِندَ الله', en:'there is a reward with Allah'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الرَّحمَةُ صِفَةٌ مِن صِفاتِ اللهِ تَعالى', en:'Mercy is one of Allah\'s attributes'}, t:true },
              { q:{ar:'الرَّحمَةُ بِالحَيَوانِ لا أَجرَ فيها', en:'Showing mercy to animals has no reward'}, t:false },
              { q:{ar:'النَّبيُّ ﷺ كانَ رَحمَةً لِلعالَمين', en:'The Prophet ﷺ was a mercy to all the worlds'}, t:true },
              { q:{ar:'القَسوَةُ تَقرِّبُنا مِن اللهِ تَعالى', en:'Harshness brings us closer to Allah'}, t:false },
              { q:{ar:'مَن لا يَرحَمُ النّاسَ لا يَرحَمُهُ اللهُ', en:'Whoever does not show mercy to people, Allah will not show mercy to him'}, t:true },
              { q:{ar:'عُمَرُ كانَ يَطوفُ اللَّيلَ وَحدَهُ يَتَفَقَّدُ رَعِيَّتَه', en:'Umar used to patrol alone at night checking on his people'}, t:true },
              { q:{ar:'الرَّحمَةُ بِالحَيَوانِ لا أَجرَ فيها أَبَداً', en:'Mercy toward animals has no reward whatsoever'}, t:false },
              { q:{ar:'ابنُ القَيِّمِ كَتَبَ عن الرَّحمَةِ في مَدارِجِ السّالِكين', en:'Ibn al-Qayyim wrote about mercy in Madarij al-Salikin'}, t:true },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما مَعنى الرَّحمَة؟', en:'What does mercy mean?'},
                opts:[
                  { t:{ar:'رِقَّةُ القَلبِ وإيصالُ الخَيرِ لِلمُحتاج', en:'Tenderness of heart and delivering good to the needy'}, c:true },
                  { t:{ar:'الضَّعفُ والخَوف', en:'Weakness and fear'}, c:false },
                  { t:{ar:'الإهمالُ والصَّمت', en:'Negligence and silence'}, c:false },
                ] },
              { q:{ar:'ما الثَّلاثَةُ التي تُخرِجُ الرَّحمَةَ مِن القَلب؟', en:'What three things drive mercy out of the heart?'},
                opts:[
                  { t:{ar:'الكِبرُ والحِقدُ والحَسَد', en:'Pride, hatred, and envy'}, c:true },
                  { t:{ar:'الجوعُ والتَّعَبُ والنُّعاس', en:'Hunger, exhaustion, and drowsiness'}, c:false },
                  { t:{ar:'العِلمُ والعَمَلُ والإخلاص', en:'Knowledge, action, and sincerity'}, c:false },
                ] },
              { q:{ar:'مَتى يَرحَمُنا اللهُ تَعالى؟', en:'When does Allah show us mercy?'},
                opts:[
                  { t:{ar:'حينَ نَرحَمُ الخَلق', en:'When we show mercy to creation'}, c:true },
                  { t:{ar:'حينَ نَكونُ أَقوِياء', en:'When we are strong'}, c:false },
                  { t:{ar:'حينَ نَجمَعُ المال', en:'When we accumulate wealth'}, c:false },
                ] },
              { q:{ar:'مَن كانَ يَبكي لِأَنَّهُ خافَ إِهمالَ رَعِيَّتِه؟', en:'Who wept fearing he had neglected his people?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:false },
                  { t:{ar:'عُمَرُ بنُ الخَطَّاب', en:'Umar ibn al-Khattab'}, c:true },
                  { t:{ar:'ابنُ القَيِّم', en:'Ibn al-Qayyim'}, c:false },
                ] },
              { q:{ar:'ما الكِتابُ الذي تَكَلَّمَ فيه ابنُ القَيِّم عن الرَّحمَة؟', en:'Which book did Ibn al-Qayyim use to speak about mercy?'},
                opts:[
                  { t:{ar:'مدارج السالكين', en:'Madarij al-Salikin'}, c:true },
                  { t:{ar:'إحياء علوم الدين', en:'Ihya’ ’Ulum al-Din'}, c:false },
                  { t:{ar:'فتح الباري', en:'Fath al-Bari'}, c:false },
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
              { a:{ar:'رَحمَةُ اللهِ', en:'Allah\'s mercy'}, b:{ar:'وَسِعَت كُلَّ شَيء', en:'Encompasses all things'} },
              { a:{ar:'رَحمَةُ النَّبيِّ ﷺ', en:'Prophet\'s ﷺ mercy'}, b:{ar:'رَحمَةٌ لِلعالَمين', en:'A mercy to all worlds'} },
              { a:{ar:'رَحمَةُ عُمَر', en:'\'Umar\'s mercy'}, b:{ar:'حَمَلَ الطَّعامَ بِيَدِه', en:'Carried food with his own hands'} },
              { a:{ar:'الرَّحمَةُ بِالحَيَوان', en:'Mercy toward animals'}, b:{ar:'في كُلِّ كَبِدٍ رَطبَة', en:'For every living liver'} },
              { a:{ar:'الرَّحمَةُ بِالوالِدَين', en:'Mercy toward parents'}, b:{ar:'رَبِّ ارحَمهُما', en:'My Lord, have mercy on them'} },
              { a:{ar:'رَحمَةُ القَلب', en:'Mercy of the heart'}, b:{ar:'رِقَّةٌ وانعِطاف', en:'Tenderness and compassion'} },
              { a:{ar:'ابنُ القَيِّم والرَّحمَة', en:'Ibn al-Qayyim and mercy'}, b:{ar:'مَدارِجُ السّالِكين', en:'Madarij al-Salikin'} },
              { a:{ar:'الرَّحمَةُ بِالنَّفس', en:'Mercy toward oneself'}, b:{ar:'عَدَمُ التَّعذيب والغُلُوّ', en:'Avoiding extremism and self-harm'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ والطِّفلُ الباكي', en:'Prophet ﷺ and the crying child'} },
              { id:2, t:{ar:'الرَّجُلُ والكَلبُ العَطشان', en:'The man and the thirsty dog'} },
              { id:3, t:{ar:'عُمَرُ والأُسرَةُ الجائِعَة', en:'\'Umar and the hungry family'} },
              { id:4, t:{ar:'ابنُ القَيِّم والطّالِبُ الحَزين', en:'Ibn al-Qayyim and the sorrowful student'} },
            ],
            right: [
              { id:3, t:{ar:'حَمَلَ الدَّقيقَ على ظَهرِه', en:'Carried flour on his back'} },
              { id:1, t:{ar:'قَصَّرَ الصَّلاةَ شَفَقَة', en:'Shortened prayer out of compassion'} },
              { id:4, t:{ar:'بَثَّ الأَملَ بِرَحمَةِ الله', en:'Spread hope in Allah\'s mercy'} },
              { id:2, t:{ar:'غُفِرَ له بِسَقيِ الكَلب', en:'Forgiven for watering the dog'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن قالَ: «لَو ماتَت بَغلَةٌ في العِراقِ لَخِفتُ أن يَسأَلَني اللهُ»؟', en:'Who said: "If a mule died in Iraq I\'d fear Allah would ask me about it"?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:false },
                  { t:{ar:'عُمَرُ بنُ الخَطَّاب', en:'\'Umar ibn al-Khattab'}, c:true },
                  { t:{ar:'ابنُ القَيِّم', en:'Ibn al-Qayyim'}, c:false },
                ] },
              { q:{ar:'مَن سَقى الكَلبَ العَطشانَ في الصَّحراء؟', en:'Who gave water to the thirsty dog in the desert?'},
                opts:[
                  { t:{ar:'امرَأَة', en:'A woman'}, c:false },
                  { t:{ar:'رَجُل', en:'A man'}, c:true },
                  { t:{ar:'طِفل', en:'A child'}, c:false },
                ] },
              { q:{ar:'مَن قالَ: «لَيسَ مِنّا مَن لم يَرحَم صَغيرَنا»؟', en:'Who said: "He is not of us who does not show mercy to our young"?'},
                opts:[
                  { t:{ar:'عُمَر', en:'Umar'}, c:false },
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'ابنُ القَيِّم', en:'Ibn al-Qayyim'}, c:false },
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
              { t:{ar:'مَسحُ رَأسِ اليَتيم', en:'Wiping the orphan\'s head'}, good:true },
              { t:{ar:'السُّخريَةُ مِن الضُّعَفاء', en:'Mocking the weak'}, good:false },
              { t:{ar:'إطعامُ الجائِع', en:'Feeding the hungry'}, good:true },
              { t:{ar:'إيذاءُ الحَيَوانات', en:'Harming animals'}, good:false },
              { t:{ar:'الدُّعاءُ لِلوالِدَين بِالرَّحمَة', en:'Praying for parents with mercy'}, good:true },
              { t:{ar:'التَّجاهُلُ حينَ يَحتاجُكَ أَحَد', en:'Ignoring someone who needs you'}, good:false },
              { t:{ar:'الرِّفقُ بِالأَخِ الصَّغير', en:'Being gentle with the younger sibling'}, good:true },
              { t:{ar:'الغِلظَةُ في الكَلام', en:'Harshness in speech'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'زيارَةُ المَريضِ وتَطمينُه', en:'Visiting the sick and reassuring them'}, good:true },
              { t:{ar:'الشَّماتَةُ بِالمُصاب', en:'Gloating over the afflicted'}, good:false },
              { t:{ar:'مُساعَدَةُ العَجوزِ في الشَّارِع', en:'Helping an elderly person in the street'}, good:true },
              { t:{ar:'نَسيانُ الجارِ الجائِع', en:'Forgetting the hungry neighbor'}, good:false },
              { t:{ar:'الصَّفحُ عَمَّن أَخطَأَ بِحَقِّك', en:'Pardoning those who wronged you'}, good:true },
              { t:{ar:'الحِقدُ وعَدَمُ التَّسامُح', en:'Holding grudges and refusing to forgive'}, good:false },
              { t:{ar:'سِقايَةُ الشَّجَرِ والنَّبات', en:'Watering plants and trees'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'الكَلامُ اللَّيِّنُ مَعَ الوالِدَين', en:'Speaking gently to parents'}, good:true },
              { t:{ar:'الاستِهزاءُ بِمَشاعِرِ الآخَرين', en:'Ridiculing others\' feelings'}, good:false },
              { t:{ar:'مُشارَكَةُ الحَزينِ أَلَمَه', en:'Sharing in the sad person\'s pain'}, good:true },
              { t:{ar:'القَسوَةُ على مَن يَخطَأ', en:'Being harsh on those who make mistakes'}, good:false },
              { t:{ar:'الاعتِذارُ حينَ تُؤذي أَحَداً', en:'Apologizing when you hurt someone'}, good:true },
              { t:{ar:'التَّكَبُّرُ على الصَّغير', en:'Being arrogant toward the young'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER
         emoji key: 🌸=ر  💧=ح  ⭐=م  🌙=ة  🌹=ق  🌺=ل  🦋=ب
         ar: رحمة = 🌸💧⭐🌙   قلب = 🌹🌺🦋   رحم = 🌸💧⭐
         en key: 🌸=m  💧=e  ⭐=r  🌙=c  🌺=y  🌹=h  🦋=a  🌻=t
         mercy = 🌸💧⭐🌙🌺   heart = 🌹💧🌸⭐🦋🌻  care = 🌙🌸⭐💧
      */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          { kind:'cipher', points:30,
            key: {
              ar:{ '🌸':'ر', '💧':'ح', '⭐':'م', '🌙':'ة', '🌹':'ق', '🌺':'ل', '🦋':'ب' },
              en:{ '🌸':'m', '💧':'e', '⭐':'r', '🌙':'c', '🌺':'y', '🌹':'h', '🦋':'a' }
            },
            puzzles: [
              { symbols:{ar:'🌸💧⭐🌙', en:'🌸💧⭐🌙🌺'}, answer:{ar:'رحمة', en:'mercy'} },
              { symbols:{ar:'🌹🌺🦋', en:'🌹💧🌸⭐🌙'}, answer:{ar:'قلب', en:'hearc'} },
              { symbols:{ar:'🌸💧⭐', en:'🌙🌸⭐💧'}, answer:{ar:'رحم', en:'care'} },
            ]
          },
          /* number cipher: ر=1 ح=2 م=3 ة=4 ق=5 ل=6 ب=7 | en: m=1 e=2 r=3 c=4 y=5 */
          { kind:'cipher', points:30,
            key: {
              ar:{ 'ر':'1', 'ح':'2', 'م':'3', 'ة':'4', 'ق':'5', 'ل':'6', 'ب':'7' },
              en:{ 'm':'1', 'e':'2', 'r':'3', 'c':'4', 'y':'5', 'l':'6', 'o':'7', 'v':'8' }
            },
            puzzles: [
              { symbols:{ar:'1-2-3-4', en:'1-2-3-4-5'}, answer:{ar:'رحمة', en:'mercy'} },
              { symbols:{ar:'5-6-7', en:'6-7-8-2'}, answer:{ar:'قلب', en:'love'} },
              { symbols:{ar:'1-2-3', en:'1-2-3-4-5'}, answer:{ar:'رحم', en:'mercy'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما الذي كَتَبَهُ اللهُ على نَفسِه؟', en:'What has Allah decreed upon Himself?'},
                opts:[
                  { t:{ar:'الرَّحمَة', en:'Mercy'}, c:true },
                  { t:{ar:'العَذاب', en:'Punishment'}, c:false },
                  { t:{ar:'الصَّمت', en:'Silence'}, c:false },
                ] },
              { q:{ar:'ما الشَّرطُ لِنَيلِ رَحمَةِ الله؟', en:'What is the condition for receiving Allah\'s mercy?'},
                opts:[
                  { t:{ar:'المالُ والجاه', en:'Wealth and status'}, c:false },
                  { t:{ar:'رَحمَةُ الخَلق', en:'Showing mercy to creation'}, c:true },
                  { t:{ar:'القُوَّةُ الجَسَديَّة', en:'Physical strength'}, c:false },
                ] },
              { q:{ar:'كَيفَ نَكسِبُ رَحمَةَ اللهِ في الدُّنيا والآخِرَة؟', en:'How do we earn Allah’s mercy in this world and the next?'},
                opts:[
                  { t:{ar:'بِالمالِ والقُوَّة', en:'Through wealth and power'}, c:false },
                  { t:{ar:'بِرَحمَةِ الخَلقِ والإخلاص', en:'By showing mercy to creation and being sincere'}, c:true },
                  { t:{ar:'بِكَثرَةِ الكَلام', en:'Through much talk'}, c:false },
                ] },
              { q:{ar:'ما وَسيلَةُ تَليينِ القَلبِ القاسي؟', en:'What is the means of softening a hard heart?'},
                opts:[
                  { t:{ar:'الثَّروَةُ والشُّهرَة', en:'Wealth and fame'}, c:false },
                  { t:{ar:'ذِكرُ اللهِ والتَّوبَة والعَمَلُ الصّالِح', en:'Remembering Allah, repentance, and good deeds'}, c:true },
                  { t:{ar:'النَّومُ الكَثير', en:'Much sleep'}, c:false },
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
              { q:{ar:'أَخوكَ الصَّغيرُ يَبكي ولا تَعرِفُ السَّبَب. ماذا تَفعَل؟', en:'Your younger sibling is crying and you don\'t know why. What do you do?'},
                opts:[
                  { t:{ar:'أَتجاهَلُهُ لِأَنَّهُ يُزعِجُني.', en:'I ignore him because he is bothering me.'}, c:false },
                  { t:{ar:'أَقتَرِبُ مِنهُ بِلُطفٍ وأَسأَلُهُ بِحَنان.', en:'I approach him gently and ask him kindly.'}, c:true },
                  { t:{ar:'أَصرُخُ فيه لِيَسكُت.', en:'I shout at him to be quiet.'}, c:false },
                ] },
              { q:{ar:'رَأَيتَ قِطَّةً جائِعَةً في الشَّارِع. ماذا تَفعَل؟', en:'You see a hungry cat in the street. What do you do?'},
                opts:[
                  { t:{ar:'أَضرِبُها لِتَبتَعِد.', en:'I hit it to drive it away.'}, c:false },
                  { t:{ar:'أُعطيها شَيئاً مِن طَعامي إن أَمكَن.', en:'I give it some of my food if possible.'}, c:true },
                  { t:{ar:'لا يَعنيني أَمرُها.', en:'It\'s not my concern.'}, c:false },
                ] },
              { q:{ar:'زَميلُكَ حَزينٌ بِسَبَبِ مُصيبَة. ماذا تَفعَل؟', en:'Your classmate is sad because of a calamity. What do you do?'},
                opts:[
                  { t:{ar:'أَضحَكُ وأَمضي في طَريقي.', en:'I laugh and continue on my way.'}, c:false },
                  { t:{ar:'أَجلِسُ مَعَهُ وأَسمَعُهُ وأُشجِّعُه.', en:'I sit with him, listen, and encourage him.'}, c:true },
                  { t:{ar:'أَنصَحُهُ بِأَلّا يَحزَن ثُمَّ أَذهَب.', en:'I advise him not to be sad then leave.'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'والِدُكَ تَعِبٌ جِدّاً بَعدَ العَمَل. ماذا تَفعَل؟', en:'Your father is very tired after work. What do you do?'},
                opts:[
                  { t:{ar:'أَطلُبُ مِنهُ أن يَلعَبَ مَعي فَوراً.', en:'I ask him to play with me immediately.'}, c:false },
                  { t:{ar:'أَحضُرُ له الماءَ وأَتركُهُ يَستَريح.', en:'I bring him water and let him rest.'}, c:true },
                  { t:{ar:'أَتجاهَلُهُ وأَمشي إلى غُرفَتي.', en:'I ignore him and go to my room.'}, c:false },
                ] },
              { q:{ar:'أَحَدُ زُملائِكَ أَخطَأَ وكَسَرَ شَيئاً بِدونِ قَصد. ماذا تَفعَل؟', en:'A classmate accidentally broke something. What do you do?'},
                opts:[
                  { t:{ar:'أَصرُخُ عليه وأُوَبِّخُهُ أَمامَ الجَميع.', en:'I shout at him and scold him in front of everyone.'}, c:false },
                  { t:{ar:'أُشجِّعُهُ وأُساعِدُهُ في إصلاحِ الأَمر.', en:'I encourage him and help him fix the matter.'}, c:true },
                  { t:{ar:'أَضحَكُ مِنهُ مَعَ الآخَرين.', en:'I laugh at him with the others.'}, c:false },
                ] },
              { q:{ar:'صَديقُكَ يَظُنُّ أنَّهُ لا قِيمَةَ لَه. ماذا تَقولُ له؟', en:'Your friend thinks he has no value. What do you say to him?'},
                opts:[
                  { t:{ar:'أُوافِقُهُ على قَولِه.', en:'I agree with what he says.'}, c:false },
                  { t:{ar:'أُذَكِّرُهُ بِمَكانَتِهِ عِندَ اللهِ وأُشجِّعُه.', en:'I remind him of his worth in Allah’s sight and encourage him.'}, c:true },
                  { t:{ar:'أَتجاهَلُ كَلامَه.', en:'I ignore what he says.'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'رَأَيتَ مُسِنّاً يَجِدُ صُعوبَةً في حَملِ أَغراضِه. ماذا تَفعَل؟', en:'You see an elderly person struggling to carry their belongings. What do you do?'},
                opts:[
                  { t:{ar:'أَمُرُّ مِن جانِبِه دونَ أن أَلتَفِت.', en:'I pass by without looking.'}, c:false },
                  { t:{ar:'أَعرِضُ عليه المُساعَدَةَ بِأَدَبٍ وسُرور.', en:'I offer to help him politely and gladly.'}, c:true },
                  { t:{ar:'أَنتَظِرُ حتّى يَطلُبَ هو المُساعَدَة.', en:'I wait until he himself asks for help.'}, c:false },
                ] },
              { q:{ar:'رَأَيتَ شَخصاً يَبكي في الشَّارِع. ماذا تَفعَل؟', en:'You see a person crying in the street. What do you do?'},
                opts:[
                  { t:{ar:'أَمُرُّ وكأَنَّني لَم أَرَه.', en:'I pass by as if I didn’t see him.'}, c:false },
                  { t:{ar:'أَتَوَقَّفُ وأَسأَلُهُ بِلُطفٍ: هل تَحتاجُ مُساعَدَة؟', en:'I stop and ask him gently: do you need help?'}, c:true },
                  { t:{ar:'أُخبِرُ النّاسَ عنه.', en:'I tell people about him.'}, c:false },
                ] },
              { q:{ar:'أَخوكَ غاضِبٌ ولا يَتَكَلَّم. ماذا تَفعَل؟', en:'Your brother is angry and won’t talk. What do you do?'},
                opts:[
                  { t:{ar:'أَتركُهُ وأَذهَبُ في حالِي.', en:'I leave him and go about my business.'}, c:false },
                  { t:{ar:'أَجلِسُ بِجانِبِهِ بِهُدوءٍ وأُريهِ أَنَّني معَه.', en:'I sit beside him quietly and show him I’m with him.'}, c:true },
                  { t:{ar:'أَضحَكُ على غَضَبِه.', en:'I laugh at his anger.'}, c:false },
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
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ الرَّاحِمِ الكَبير',      en:'Badge of the Great Merciful'} },
    { icon:'🌳', color:'#1ABC9C', title:{ar:'شَجَرَةُ الرَّحمَةِ المُثمِرَة', en:'Fruitful Tree of Mercy'} },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ قَلبِ النَّبيِّ ﷺ',     en:'Star of the Prophet\'s ﷺ Heart'} },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ الشَّفَقَةِ والرِّفق',     en:'Shield of Compassion and Kindness'} },
    { icon:'📜', color:'#E67E22', title:{ar:'صَحيفَةُ الرَّحمَةِ والخَير',   en:'Scroll of Mercy and Goodness'} },
    { icon:'🗝️', color:'#8E44AD', title:{ar:'مِفتاحُ رَحمَةِ الرَّحمَن',     en:'Key to the Mercy of the Most Merciful'} },
  ],

  /* ───── HOUSE ICON ───── */
  icon: '💞',

  /* ───── MAGIC MIX ───── */
  magicMixTitle: { ar:'كَيفَ تَعيشُ الرَّحمَةَ كُلَّ يَوم؟', en:'How do you live mercy every day?' },
  formulaEq: { ar:'رِقَّةٌ + فِعلٌ + إخلاص = رَحمَة 🏆', en:'Tenderness + Action + Sincerity = Mercy 🏆' },
  magicMix: [
    { icon:'🤲', title:{ar:'قُل لِوالِدَيكَ «أُحِبُّكُما» اليَوم', en:'Tell your parents "I love you" today'}, body:{ar:'لا تَنتَظِر مُناسَبَةً خاصَّة — قُلها اليَومَ وادعُ لَهُما بِالرَّحمَة!', en:'Don\'t wait for a special occasion — say it today and pray for their mercy!'} },
    { icon:'🍞', title:{ar:'أَطعِم أو تَصَدَّق بِشَيءٍ صَغير', en:'Feed someone or give a small charity'}, body:{ar:'ولَو بِتَمرَةٍ أو كِسرَةِ خُبز — فَفي كُلِّ ذاتِ كَبِدٍ رَطبَةٍ أَجر!', en:'Even with a date or a piece of bread — for every living creature there is a reward!'} },
    { icon:'💬', title:{ar:'تَكَلَّم بِلُطفٍ مَعَ كُلِّ مَن تَلقاهُ اليَوم', en:'Speak gently with everyone you meet today'}, body:{ar:'الكَلِمَةُ الطَّيِّبَةُ صَدَقَة — جَعَلها النَّبيُّ ﷺ مِن أَبوابِ الرَّحمَة.', en:'The kind word is charity — the Prophet ﷺ made it one of the doors of mercy.'} },
    { icon:'👐', title:{ar:'امسَح على رَأسِ طِفلٍ أو أَطفِئ دُموعَه', en:'Pat a child\'s head or dry their tears'}, body:{ar:'النَّبيُّ ﷺ كانَ يَفعَلُ ذلِك كُلَّ يَوم — فَاقتَدِ بِه اليَوم!', en:'The Prophet ﷺ did this every day — follow him today!'} },
    { icon:'🌿', title:{ar:'لا تُؤذِ حَيَواناً ولا تُؤلِم نَبتَةً بِلا سَبَب', en:'Do not harm an animal or hurt a plant needlessly'}, body:{ar:'الرَّحمَةُ تَبدَأُ بِالصَّغير — مَن رَحِمَ حَشَرَةً رَحِمَهُ الله!', en:'Mercy starts with the small — whoever shows mercy to an insect, Allah shows mercy to him!'} },
    { icon:'🙏', title:{ar:'ادعُ اللهَ: «اللَّهُمَّ ارحَمني بِرَحمَتِكَ»', en:'Pray: "O Allah, have mercy on me with Your mercy"'}, body:{ar:'كانَ هذا مِن دُعاءِ النَّبيِّ ﷺ — اجعَلهُ وِردَكَ اليَوميّ.', en:'This was among the Prophet\'s ﷺ supplications — make it your daily practice.'} },
    { icon:'📖', title:{ar:'اقرَأ كُلَّ يَومٍ جُزءاً مِن قِصَصِ الرَّاحِمين', en:'Read daily from stories of the merciful'}, body:{ar:'قِصَّةُ النَّبيِّ ﷺ مَعَ أَنَسٍ أو عُمَرَ اللَّيلِيّ تَزيدُ مِن رَحمَتِكَ يَومَ تَقرَؤُها.', en:'The story of the Prophet ﷺ with Anas or ’Umar’s nightly rounds will increase your mercy the day you read it.'} },
  ],

  /* ───── CERTIFICATE TEXT ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الرَّحمَة', en:'Awarded to those who completed the House of Mercy' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>الرَّحمَةَ بِالقَولِ والفِعلِ والقَلب</b> — اقتِداءً بِالنَّبيِّ ﷺ رَحمَةِ العالَمين، وعُمَرَ بنِ الخَطَّابِ الرّاعي الرَّحيم، وابنِ القَيِّمِ مُحيي القُلوب رضي الله عنهم أجمعين.', en:'For mastering <b>mercy in speech, action, and heart</b> — following the Prophet ﷺ mercy to all worlds, \'Umar ibn al-Khattab the merciful shepherd, and Ibn al-Qayyim the reviver of hearts رضي الله عنهم.' },
  },

};
