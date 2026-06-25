/* academy-khataba-data.js — الخطابة والإلقاء (Oratory & Recitation studio)
   Delivery skills + a library of the most famous authentic educational
   poems/nasheeds (tajweed · seerah · akhlaq · tawheed · spiritual).
   Verse excerpts are well-known authentic openings; the "about/tips" are
   original teaching content. Bilingual. */
window.KHATABA = {
  skills: [
    { icon:'🫁', t:{ar:'النَّفَس',en:'Breath'}, d:{ar:'خُذ نَفَساً عميقاً قبل البدء، وتنفّسْ من بطنك ليخرجَ صوتُك قويّاً ثابتاً.',en:'Take a deep breath before you start; breathe from your belly so your voice comes out strong and steady.'} },
    { icon:'🗣️', t:{ar:'الوُضوح',en:'Clarity'}, d:{ar:'انطِقِ الحروفَ من مخارجها بوضوح، ولا تُسرِع — مَهلاً ومخارجَ سليمة.',en:'Pronounce each letter clearly from its place, and don\'t rush — slow and accurate.'} },
    { icon:'🎵', t:{ar:'النَّغمة',en:'Tone'}, d:{ar:'ارفَعْ صوتَك واخفِضْه مع المعنى؛ النبرةُ تُحيي الكلمات.',en:'Raise and lower your voice with the meaning; tone brings the words to life.'} },
    { icon:'👀', t:{ar:'التواصُل',en:'Eye contact'}, d:{ar:'انظُر إلى الناسِ بثقةٍ وابتسامة، ووزِّعْ نظرَك على الجميع.',en:'Look at people with confidence and a smile, and spread your gaze to everyone.'} },
    { icon:'🤲', t:{ar:'الإشارة',en:'Gesture'}, d:{ar:'حرِّكْ يديك بهدوءٍ لتأكيدِ المعنى، وقِفْ منتصِباً واثقاً.',en:'Move your hands calmly to emphasize the meaning, and stand upright and confident.'} },
  ],
  poems: [
    {
      id:'tuhfa', icon:'📗',
      title:{ar:'تُحْفةُ الأطفال',en:'Tuhfat al-Atfal'},
      topic:{ar:'التجويد',en:'Tajweed'},
      by:{ar:'سليمان الجمزوري',en:'Sulayman al-Jamzuri'},
      about:{ar:'أشهرُ منظومةٍ لتعليمِ أحكامِ التجويدِ للمبتدئين والأطفال، حفِظها ملايينُ الطلابِ عبرَ القرون. تُعلِّمُك أحكامَ النونِ الساكنةِ والتنوينِ والمدودِ بأسلوبٍ سهلِ الحفظِ جميلِ النغم.',en:'The most famous poem for teaching the rules of tajweed to beginners and children, memorized by millions of students over the centuries. It teaches the rules of nun sakinah, tanwin, and elongations in an easy, melodic style.'},
      verses:'يَقُولُ رَاجِي رَحْمَةِ الغَفُورِ\nدَوْمًا سُلَيْمَانُ هُوَ الجَمْزُورِي',
      tips:[
        { icon:'🎯', ar:'احفَظ بيتَين كلَّ يوم، وكرِّرهما عشرَ مرّاتٍ بصوتٍ مسموع.',en:'Memorize two lines a day and repeat them aloud ten times.'},
        { icon:'🎶', ar:'اضبِطِ النغمةَ (البحر) أوّلاً؛ فالوزنُ يُسهِّلُ الحفظَ كثيراً.',en:'Get the rhythm (meter) first; the meter makes memorizing much easier.'},
        { icon:'👂', ar:'استمِع لقارئٍ متقنٍ ثم ردِّد خلفَه قبل أن تحفظ.',en:'Listen to a skilled reciter, then repeat after him before memorizing.'},
      ]
    },
    {
      id:'jazariyya', icon:'📘',
      title:{ar:'المُقدِّمةُ الجَزَريّة',en:'Al-Muqaddimah al-Jazariyyah'},
      topic:{ar:'التجويد',en:'Tajweed'},
      by:{ar:'ابن الجَزَري',en:'Ibn al-Jazari'},
      about:{ar:'منظومةٌ عظيمةٌ في علمِ التجويدِ ومخارجِ الحروفِ وصفاتِها، عمدةٌ لطلّابِ القرآنِ في العالَم كلِّه. مَن أتقنَها أتقنَ تلاوتَه.',en:'A great poem on tajweed, the articulation points of letters and their qualities — a cornerstone for students of the Qur\'an worldwide. Whoever masters it masters his recitation.'},
      verses:'يَقُولُ رَاجِي عَفْوِ رَبٍّ سَامِعِ\nمُحَمَّدٌ هُوَ ابنُ الجَزَرِيِّ الشَّافِعِي',
      tips:[
        { icon:'🔤', ar:'تعلَّمْ مخارجَ الحروفِ عمليّاً أمامَ المرآةِ وأنت تنطِق.',en:'Learn the letters\' articulation points practically in front of a mirror as you pronounce.'},
        { icon:'🔁', ar:'راجِع ما حفِظتَه أمسِ قبل أن تبدأ الجديد.',en:'Review yesterday\'s portion before starting new material.'},
        { icon:'🧑‍🏫', ar:'اعرِض حفظَك على معلِّمٍ يُصحِّحُ نُطقَك.',en:'Recite to a teacher who corrects your pronunciation.'},
      ]
    },
    {
      id:'talaalbadr', icon:'🌕',
      title:{ar:'طَلَعَ البَدْرُ عَلَيْنا',en:'Tala\'a al-Badru \'Alayna'},
      topic:{ar:'السيرة',en:'Seerah'},
      by:{ar:'نشيدٌ من التراث · استقبالُ النبي ﷺ',en:'Heritage nasheed · welcoming the Prophet ﷺ'},
      about:{ar:'أقدمُ نشيدٍ في الإسلام، أنشدَه أهلُ المدينةِ فرحاً باستقبالِ النبيِّ ﷺ عند هجرتِه. يُعلِّمُ الطفلَ حبَّ النبيِّ ﷺ ويربطُه بأحداثِ السيرة.',en:'The oldest nasheed in Islam, sung by the people of Madinah in joy as they welcomed the Prophet ﷺ during his migration. It teaches the child love of the Prophet ﷺ and connects him to the seerah.'},
      verses:'طَلَعَ البَدْرُ عَلَيْنا\nمِنْ ثَنِيّاتِ الوَداعْ\nوَجَبَ الشُّكْرُ عَلَيْنا\nما دَعا للهِ داعْ',
      tips:[
        { icon:'😊', ar:'أنشِدها بفرحٍ وابتسامة؛ فهي نشيدُ فرحٍ واستقبال.',en:'Sing it with joy and a smile — it\'s a nasheed of joy and welcome.'},
        { icon:'👏', ar:'اضبِطِ الإيقاعَ بالتصفيقِ الخفيفِ لتثبُتَ الكلمات.',en:'Keep the rhythm with a light clap to fix the words.'},
        { icon:'📖', ar:'تعرَّفْ على قصّةِ الهجرةِ لتفهمَ معنى ما تُنشِد.',en:'Learn the story of the Hijrah to understand what you sing.'},
      ]
    },
    {
      id:'lamiyat_wardi', icon:'🌿',
      title:{ar:'لاميّةُ ابنِ الوَردي',en:'The Lamiyyah of Ibn al-Wardi'},
      topic:{ar:'الأخلاق والآداب',en:'Character & Manners'},
      by:{ar:'ابن الوَردي',en:'Ibn al-Wardi'},
      about:{ar:'منظومةٌ شهيرةٌ في الحكمةِ والنصيحةِ وحسنِ الخلق، مليئةٌ بالمواعظِ التي تبني شخصيّةَ الطفلِ على الجِدِّ والعِلمِ ومكارمِ الأخلاق.',en:'A famous poem of wisdom, advice, and good character, full of lessons that build a child\'s character on seriousness, knowledge, and noble manners.'},
      verses:'اعتَزِلْ ذِكْرَ الأَغاني والغَزَلْ\nوقُلِ الفَصْلَ وجانِبْ مَنْ هَزَلْ',
      tips:[
        { icon:'💡', ar:'افهَم معنى كلِّ بيتٍ أوّلاً؛ فهمُ المعنى يُثبِّتُ الحفظ.',en:'Understand each line\'s meaning first; understanding fixes memorization.'},
        { icon:'📝', ar:'اكتُبِ البيتَ ثلاثَ مرّاتٍ بخطِّ يدِك.',en:'Write each line three times by hand.'},
        { icon:'🎤', ar:'ألقِها أمامَ عائلتِك كأنّك خطيبٌ يَعِظُ بثقة.',en:'Recite it to your family as if you\'re a confident speaker giving advice.'},
      ]
    },
    {
      id:'lamiyat_taymiyya', icon:'🕋',
      title:{ar:'لاميّةُ ابنِ تيميّة في العقيدة',en:'Ibn Taymiyyah\'s Creed Poem'},
      topic:{ar:'التوحيد والإيمان',en:'Tawheed & Faith'},
      by:{ar:'شيخ الإسلام ابن تيميّة',en:'Ibn Taymiyyah'},
      about:{ar:'منظومةٌ مختصرةٌ جميلةٌ في عقيدةِ أهلِ السنّةِ والجماعة، يُجيبُ فيها عن سؤالِ العقيدةِ بوضوحٍ وثبات. تَغرِسُ في الطفلِ توحيدَ اللهِ وصِدقَ الاتّباع.',en:'A short, beautiful poem on the creed of Ahl al-Sunnah, in which he answers the question of belief with clarity and firmness. It plants in the child the Tawheed of Allah and sincere following.'},
      verses:'يا سائِلي عَنْ مَذْهَبي وعَقيدَتي\nرُزِقَ الهُدى مَنْ لِلْهِدايَةِ يَطْلُبُ',
      tips:[
        { icon:'🛡️', ar:'احفَظها لتثبُتَ على الحقِّ وتُجيبَ مَن يسألُك عن دينِك.',en:'Memorize it to stand firm on the truth and answer whoever asks about your faith.'},
        { icon:'🔁', ar:'قسِّمها إلى مقاطعَ صغيرةٍ واحفَظ مقطعاً كلَّ يوم.',en:'Split it into small sections and memorize one section a day.'},
        { icon:'🧠', ar:'اربِط كلَّ بيتٍ بمعناه العَقَدي لترسُخَ في قلبِك.',en:'Link each line to its creedal meaning so it settles in your heart.'},
      ]
    },
    {
      id:'ilahi_lastu', icon:'🤲',
      title:{ar:'إلهي لَسْتُ لِلفِردَوْسِ أهلا',en:'O My Lord, I Am Not Worthy of Paradise'},
      topic:{ar:'الرقائق والتوبة',en:'Spiritual & Repentance'},
      by:{ar:'منسوبٌ في التراث',en:'A famous classical poem'},
      about:{ar:'من أجملِ أبياتِ التوبةِ والرجاءِ والخوفِ من الله، يُربّي قلبَ الطفلِ على التواضعِ والإنابةِ وحُسنِ الظنِّ بربِّه. أبياتٌ تَلِينُ لها القلوب.',en:'Among the most beautiful lines of repentance, hope, and fear of Allah, it nurtures the child\'s heart in humility, turning back to Allah, and good expectation of his Lord. Lines that soften hearts.'},
      verses:'إلهي لَسْتُ لِلفِردَوْسِ أهلا\nولا أقْوى على نارِ الجَحيمِ\nفَهَبْ لي تَوبةً واغْفِرْ ذُنوبي\nفإنّكَ غافِرُ الذَّنْبِ العَظيمِ',
      tips:[
        { icon:'❤️', ar:'أنشِدها بصوتٍ هادئٍ خاشعٍ مستحضِراً معناها.',en:'Recite it in a calm, humble voice, present-minded of its meaning.'},
        { icon:'🌙', ar:'ردِّدها قبل النومِ لتنامَ على ذِكرِ اللهِ والرجاء.',en:'Repeat it before sleep so you sleep upon Allah\'s remembrance and hope.'},
        { icon:'💧', ar:'تأمّل رحمةَ اللهِ الواسعةَ وأنت تُنشِد.',en:'Reflect on Allah\'s vast mercy as you recite.'},
      ]
    },
  ],
};
