/* معسكر القادة — الأذكار المسموعة. z(نص, [معنى عربي, English], العدد, المصدر) */
(function () {
  'use strict';
  var C = window.CAMP = window.CAMP || {};
  function z(ar, m, n, src) { return { ar: ar, m: m, n: n || 1, src: src }; }
  C.ADHKAR = [
    { id: 'wake', icon: '🌅', n: ['الاستيقاظ', 'Waking up'], items: [
      z('الحمدُ للهِ الذي أحيانا بعدَ ما أماتَنا وإليه النُّشور', ['أشكر الله الذي أعاد إليّ حياتي بعد النوم، وإليه نرجع يوم القيامة', 'Praise be to Allah who gave us life after He caused us to die, and to Him is the resurrection'], 1, ['البخاري', 'al-Bukhari'])
    ] },
    { id: 'sabah', icon: '☀️', n: ['أذكار الصباح والمساء', 'Morning & evening'], items: [
      z('قُلْ هُوَ اللهُ أَحَدٌ · قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ · قُلْ أَعُوذُ بِرَبِّ النَّاسِ', ['ثلاث سور قصيرة «تكفيك من كل شيء»', 'Three short surahs that "suffice you against everything"'], 3, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('بسمِ اللهِ الذي لا يضرُّ مع اسمِه شيءٌ في الأرضِ ولا في السماءِ وهو السميعُ العليم', ['أتحصّن باسم الله فلا يضرني شيء', 'In the name of Allah, with whose name nothing on earth or in heaven can harm'], 3, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('اللهمَّ بكَ أصبحنا، وبكَ أمسينا، وبكَ نحيا، وبكَ نموتُ، وإليكَ النُّشور', ['بفضلك يا رب نصبح ونمسي ونعيش، وإليك نرجع', 'O Allah, by You we enter the morning and the evening, by You we live and die, and to You is the resurrection'], 1, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('اللهمَّ أنتَ ربي لا إلهَ إلا أنتَ، خلقتَني وأنا عبدُك، وأنا على عهدِك ووعدِك ما استطعتُ، أعوذُ بكَ من شرِّ ما صنعتُ، أبوءُ لكَ بنعمتِك عليَّ، وأبوءُ بذنبي، فاغفرْ لي فإنه لا يغفرُ الذنوبَ إلا أنت', ['سيد الاستغفار: أعترف بنعمتك وبذنبي فاغفر لي', 'The master supplication for forgiveness: I acknowledge Your favour and my sin, so forgive me'], 1, ['البخاري', 'al-Bukhari']),
      z('يا حيُّ يا قيومُ برحمتِكَ أستغيثُ، أصلِحْ لي شأني كلَّه، ولا تَكِلْني إلى نفسي طرفةَ عين', ['أصلح كل أموري ولا تتركني لنفسي لحظة', 'O Ever-Living, O Sustainer, by Your mercy I seek help; set right all my affairs and do not leave me to myself for the blink of an eye'], 1, ['النسائي والحاكم', 'an-Nasa’i, al-Hakim']),
      z('سبحانَ اللهِ وبحمدِه', ['أنزّه الله وأحمده', 'Glory and praise be to Allah'], 100, ['مسلم', 'Muslim']),
      z('أعوذُ بكلماتِ اللهِ التامّاتِ من شرِّ ما خلق', ['أحتمي بكلام الله الكامل من شر كل مخلوق (مساءً)', 'I seek refuge in the perfect words of Allah from the evil of what He created (evening)'], 3, ['مسلم', 'Muslim'])
    ] },
    { id: 'salah', icon: '📿', n: ['بعد الصلاة', 'After prayer'], items: [
      z('أستغفرُ الله', ['يا رب اغفر لي تقصيري في صلاتي', 'I ask Allah to forgive me'], 3, ['مسلم', 'Muslim']),
      z('اللهمَّ أنتَ السلامُ ومنكَ السلامُ، تباركتَ يا ذا الجلالِ والإكرام', ['أنت السالم من كل نقص ومنك كل سلامة', 'O Allah, You are Peace and from You is peace; blessed are You, Possessor of majesty and honour'], 1, ['مسلم', 'Muslim']),
      z('سبحانَ الله', ['أنزّه الله عن كل نقص', 'Glory be to Allah'], 33, ['مسلم', 'Muslim']),
      z('الحمدُ لله', ['كل الشكر والثناء لله', 'All praise is for Allah'], 33, ['مسلم', 'Muslim']),
      z('اللهُ أكبر', ['الله أعظم من كل شيء', 'Allah is the Greatest'], 33, ['مسلم', 'Muslim']),
      z('لا إلهَ إلا اللهُ وحدَه لا شريكَ له، له الملكُ وله الحمدُ وهو على كلِّ شيءٍ قدير', ['تمام المئة: لا معبود بحق إلا الله', 'Completing the hundred: none is worthy of worship but Allah alone'], 1, ['مسلم', 'Muslim']),
      z('اللهمَّ أعِنّي على ذِكرِكَ وشُكرِكَ وحُسنِ عبادتِك', ['ساعدني يا رب أن أذكرك وأشكرك وأعبدك أحسن عبادة', 'O Allah, help me to remember You, thank You and worship You well'], 1, ['أبو داود والنسائي', 'Abu Dawud, an-Nasa’i'])
    ] },
    { id: 'day', icon: '🌤️', n: ['أذكار اليوم', 'Through the day'], items: [
      z('بسمِ الله', ['قبل الطعام: أبدأ باسم الله', 'Before eating: I begin in the name of Allah'], 1, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('الحمدُ للهِ الذي أطعمَني هذا ورزقَنيهِ من غيرِ حولٍ مني ولا قوة', ['بعد الطعام: أشكر الله الذي رزقني', 'After eating: praise be to Allah who fed me this without any power of my own'], 1, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('بسمِ الله، توكلتُ على الله، ولا حولَ ولا قوةَ إلا بالله', ['عند الخروج من البيت: أعتمد على الله', 'Leaving home: I rely on Allah; there is no power except with Him'], 1, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('اللهمَّ افتحْ لي أبوابَ رحمتِك', ['عند دخول المسجد', 'Entering the mosque: O Allah, open for me the doors of Your mercy'], 1, ['مسلم', 'Muslim']),
      z('اللهمَّ إني أسألُك من فضلِك', ['عند الخروج من المسجد', 'Leaving the mosque: O Allah, I ask You of Your bounty'], 1, ['مسلم', 'Muslim']),
      z('اللهمَّ إني أعوذُ بكَ من الخُبُثِ والخبائث', ['عند دخول الخلاء', 'Entering the toilet: I seek refuge in You from evil'], 1, ['متفق عليه', 'al-Bukhari & Muslim']),
      z('غُفرانَك', ['عند الخروج من الخلاء: أسألك المغفرة', 'Leaving the toilet: I ask Your forgiveness'], 1, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('اللهمَّ انفعْني بما علّمتَني، وعلّمْني ما ينفعُني، وزِدْني علمًا', ['قبل الدرس', 'Before study: benefit me with what You taught me, teach me what benefits me, and increase me in knowledge'], 1, ['الترمذي وابن ماجه', 'at-Tirmidhi, Ibn Majah']),
      z('اللهمَّ صيِّبًا نافعًا', ['عند نزول المطر', 'When it rains: O Allah, make it a beneficial rain'], 1, ['البخاري', 'al-Bukhari']),
      z('أعوذُ باللهِ من الشيطانِ الرجيم', ['عند الغضب: أحتمي بالله', 'When angry: I seek refuge in Allah from the accursed Satan'], 1, ['متفق عليه', 'al-Bukhari & Muslim'])
    ] },
    { id: 'sleep', icon: '🛏️', n: ['أذكار النوم', 'Bedtime'], items: [
      z('اللهُ لا إلهَ إلا هو الحيُّ القيوم… (آية الكرسي)', ['من قرأها لم يقربه شيطان حتى يصبح', 'Ayat al-Kursi: whoever recites it, no devil comes near until morning'], 1, ['البخاري', 'al-Bukhari']),
      z('باسمِكَ اللهمَّ أموتُ وأحيا', ['باسمك يا رب أنام وأستيقظ', 'In Your name, O Allah, I die and I live'], 1, ['البخاري', 'al-Bukhari']),
      z('اللهمَّ قِني عذابَك يومَ تبعثُ عبادَك', ['احمني يا رب يوم القيامة', 'O Allah, protect me from Your punishment on the day You resurrect Your servants'], 3, ['أبو داود والترمذي', 'Abu Dawud, at-Tirmidhi']),
      z('سبحانَ الله (٣٣) · الحمدُ لله (٣٣) · اللهُ أكبر (٣٤)', ['تسبيح فاطمة: خير من خادم', "Fatimah's tasbih: better than a servant"], 1, ['متفق عليه', 'al-Bukhari & Muslim'])
    ] },
    { id: 'dua', icon: '🤲', n: ['أدعية القائد', "A leader's duas"], items: [
      z('رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', ['أكثر دعاء النبي ﷺ', 'The most frequent dua of the Prophet ﷺ: good in this world and the next'], 1, ['البقرة: ٢٠١', 'al-Baqarah 201']),
      z('رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', ['قبل الاختبار والإلقاء: دعاء موسى', 'Before a test or a talk: the dua of Musa'], 1, ['طه: ٢٥–٢٦', 'Ta-Ha 25–26']),
      z('رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', ['دعاء لأبي وأمي', 'A dua for my parents'], 1, ['الإسراء: ٢٤', 'al-Isra 24']),
      z('رَبِّ زِدْنِي عِلْمًا', ['يا رب زدني علمًا', 'My Lord, increase me in knowledge'], 1, ['طه: ١١٤', 'Ta-Ha 114']),
      z('يا مقلِّبَ القلوبِ ثبِّتْ قلبي على دينِك', ['ثبّتني على الإسلام', 'O Turner of hearts, keep my heart firm on Your religion'], 1, ['الترمذي', 'at-Tirmidhi']),
      z('اللهمَّ إني أسألُك الهُدى والتُّقى والعفافَ والغِنى', ['أربع كلمات تجمع الخير', 'Guidance, piety, chastity and contentment'], 1, ['مسلم', 'Muslim'])
    ] }
  ];
})();
