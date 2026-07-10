/* ═══════════════════════════════════════════════════════════════
   سُورَةُ الفَاتِحَة · Al-Fatihah (1) — "أمُّ الكتاب"
   Verified Uthmani text.
   ─────────────────────────────────────────────────────────────── */
window.SURAHS.fatihah = {
  tagline: { ar:'أمُّ الكتاب · نقرؤها في كل صلاة', en:'The Mother of the Book · in every prayer' },
  bismillah:false, /* Basmalah is the first ayah here */

  verses: [
    { ar:'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      std:'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      trans:{ ar:'أبدأُ باسم الله الرحمنِ الرحيم.', en:'I begin in the name of Allah, the Most Gracious, the Most Merciful.' },
      words:[ { w:'ٱلرَّحْمَٰنِ', m:{ ar:'الواسعُ الرحمةِ لكل الخلق', en:'The Most Gracious — vast in mercy to all' } },
              { w:'ٱلرَّحِيمِ', m:{ ar:'الرحيمُ بالمؤمنين خاصة', en:'The Most Merciful — especially to the believers' } } ] },
    { ar:'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ',
      std:'[All] praise is [due] to Allah, Lord of the worlds —',
      trans:{ ar:'كلُّ الحمدِ والثناءِ لله ربِّ كل المخلوقات.', en:'All praise belongs to Allah, the Lord of every creature.' },
      words:[ { w:'ٱلْحَمْدُ', m:{ ar:'الثناءُ والشكرُ بالمحبة والتعظيم', en:'Praise and thanks with love and honor' } },
              { w:'رَبِّ', m:{ ar:'الخالقُ المالكُ المُربّي', en:'Lord — Creator, Owner, Sustainer' } },
              { w:'ٱلْعَٰلَمِينَ', m:{ ar:'كلُّ المخلوقات: الإنسُ والجنُّ والحيوانُ وكلُّ شيء', en:'all the worlds — humans, jinn, animals, everything' } } ] },
    { ar:'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      std:'The Entirely Merciful, the Especially Merciful,',
      trans:{ ar:'الرحمنِ الرحيمِ.', en:'The Most Gracious to all, the Most Merciful to believers.' },
      words:[] },
    { ar:'مَٰلِكِ يَوْمِ ٱلدِّينِ',
      std:'Sovereign of the Day of Recompense.',
      trans:{ ar:'مالكِ يومِ القيامةِ الذي يُحاسَبُ فيه الناس.', en:'The King of the Day of Judgment, when everyone is repaid for their deeds.' },
      words:[ { w:'مَٰلِكِ', m:{ ar:'صاحبُ المُلكِ والتصرُّفِ الكامل', en:'Owner and full Sovereign' } },
              { w:'ٱلدِّينِ', m:{ ar:'الجزاءُ والحساب', en:'recompense — the Judgment' } } ] },
    { ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      std:'It is You we worship and You we ask for help.',
      trans:{ ar:'إيّاكَ وحدَك نعبدُ، وإيّاك وحدَك نستعينُ.', en:'You alone we worship, and You alone we ask for help.' },
      words:[ { w:'نَعْبُدُ', m:{ ar:'نُطيعُك ونتذلَّلُ لك بالحب', en:'we worship — obey and humble ourselves in love' } },
              { w:'نَسْتَعِينُ', m:{ ar:'نطلبُ منك العونَ في كلِّ أمر', en:'we seek help — from You in everything' } } ] },
    { ar:'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
      std:'Guide us to the straight path —',
      trans:{ ar:'دُلَّنا وثبِّتنا على الطريقِ المستقيم.', en:'Show us and keep us firm on the straight path.' },
      words:[ { w:'ٱهْدِنَا', m:{ ar:'دُلَّنا وثبِّتنا', en:'guide us — show us and keep us firm' } },
              { w:'ٱلصِّرَٰطَ', m:{ ar:'الطريق', en:'the path' } },
              { w:'ٱلْمُسْتَقِيمَ', m:{ ar:'المستقيمُ الذي لا اعوجاجَ فيه: الإسلام', en:'the straight one with no crookedness: Islam' } } ] },
    { ar:'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
      std:'The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.',
      trans:{ ar:'طريقَ الأنبياءِ والصالحين الذين أنعمتَ عليهم، لا طريقَ الذين غضبتَ عليهم ولا الضالّين.', en:'The path of the prophets and the righteous whom You blessed — not those who earned anger, nor those who went astray.' },
      words:[ { w:'أَنْعَمْتَ', m:{ ar:'أعطيتَهم نِعمةَ الهدايةِ: الأنبياءُ والصدّيقون', en:'You blessed — the prophets and the righteous' } },
              { w:'ٱلضَّآلِّينَ', m:{ ar:'الذين ضاعوا عن الطريقِ الصحيح', en:'those who lost the right way' } } ] },
  ],

  about: {
    intro: { ar:'سورةُ <b>الفاتِحة</b> هي أوَّلُ سُورةٍ في المُصحَف، وأعظمُ سُورةٍ في القُرآن. نُناجي بها ربَّنا في كلِّ ركعةٍ من صلاتِنا، فهي حِوارٌ يوميٌّ بينَنا وبينَ اللهِ تعالى.',
            en:'Surah <b>Al-Fatihah</b> is the first surah in the Mushaf and the greatest surah in the Quran. We speak to our Lord with it in every rak\u2018ah — a daily conversation between us and Allah.' },
    names: [
      { name:{ar:'أمُّ القُرآن / أمُّ الكِتاب', en:'Mother of the Quran'},
        why:{ar:'لأنَّ معانيَ القُرآنِ كلَّها ترجِعُ إليها، وبها يُفتَحُ المُصحَف.', en:'Because all the Quran\u2019s meanings return to it, and the Mushaf opens with it.'} },
      { name:{ar:'السَّبعُ المَثاني', en:'The Seven Oft-Repeated'},
        why:{ar:'سبعُ آياتٍ تُثنَّى وتُكرَّرُ في كلِّ صلاة.', en:'Seven verses repeated in every prayer.'} },
      { name:{ar:'الرُّقْية / الشَّافِية', en:'The Healing (Ruqyah)'},
        why:{ar:'أقرَّ النبيُّ ﷺ الصحابةَ حينَ رَقَوْا بها لَديغاً فشُفِي.', en:'The Prophet ﷺ approved its use to heal a man who had been stung.'} },
      { name:{ar:'الصَّلاة', en:'The Prayer'},
        why:{ar:'في الحديثِ القُدسي: «قسَمتُ الصلاةَ بيني وبينَ عبدي».', en:'In the sacred hadith: \u201cI have divided the prayer between Me and My servant.\u201d'} },
    ],
    virtues: [
      { text:{ar:'هي <b>أعظمُ سُورةٍ في القُرآن</b>؛ قال النبيُّ ﷺ لأبي سعيدِ بنِ المُعَلَّى: «لأُعلِّمنَّك أعظمَ سُورةٍ في القُرآن» فعلَّمَه الفاتِحة.', en:'It is the <b>greatest surah in the Quran</b>. The Prophet ﷺ told Abu Sa\u2018id ibn al-Mu\u2018alla: \u201cI will teach you the greatest surah,\u201d and taught him Al-Fatihah.'},
        source:{ar:'صحيح البُخاري — ٤٤٧٤', en:'Sahih al-Bukhari — 4474'} },
      { text:{ar:'لا تَصِحُّ الصلاةُ بدونِها؛ قال ﷺ: <b>«لا صلاةَ لِمَن لم يقرأْ بفاتِحةِ الكِتاب»</b>.', en:'Prayer is not valid without it: <b>\u201cThere is no prayer for one who does not recite the Opening of the Book.\u201d</b>'},
        source:{ar:'متفق عليه — البُخاري ٧٥٦ ومسلم ٣٩٤', en:'Bukhari 756 & Muslim 394'} },
      { text:{ar:'قسَمها اللهُ بينَه وبينَ عبدِه: نِصفُها ثناءٌ للهِ، ونِصفُها دعاءٌ للعبد، ولِلعبدِ ما سأل.', en:'Allah divided it between Himself and His servant: half is praise of Allah, half is the servant\u2019s supplication — and the servant receives what he asks.'},
        source:{ar:'صحيح مسلم — ٣٩٥', en:'Sahih Muslim — 395'} },
    ],
    traits: [
      {ar:'مكِّيَّةٌ، عددُ آياتِها سبعُ آيات.', en:'Meccan, seven verses.'},
      {ar:'تجمعُ مَقاصدَ القُرآنِ الكُبرى: تَوحيدُ الله، وعِبادتُه، وطلبُ الهِداية.', en:'It gathers the Quran\u2019s great aims: Allah\u2019s oneness, His worship, and seeking guidance.'},
      {ar:'نِصفُها الأوَّلُ ثناءٌ على الله، ونِصفُها الآخِرُ دُعاءٌ ورجاء.', en:'Its first half praises Allah; its second half is supplication and hope.'},
      {ar:'تُقرَأُ في كلِّ ركعةٍ — أكثرَ من سبعَ عشرةَ مرَّةً كلَّ يوم.', en:'Recited in every rak\u2018ah — over seventeen times each day.'},
    ],
  },

  tafsir: [
    { ayah:{ar:'١',en:'1'}, ar:'نبدأُ كلَّ شيءٍ <b>«بسم الله»</b> لنطلبَ بركتَه وعونَه. <b>الرحمن الرحيم</b>: اللهُ رحمتُه تَسعُ كلَّ شيء.', en:'We begin everything <b>"In the name of Allah"</b> to seek His blessing and help. <b>Ar-Rahman Ar-Raheem</b>: His mercy embraces everything.' },
    { ayah:{ar:'٢-٤',en:'2-4'}, ar:'<b>الحمدُ لله</b>: نشكرُ اللهَ على نِعَمِه. هو <b>ربُّ العالمين</b> الذي خلق كلَّ شيء، و<b>مالكُ يومِ الدين</b> الذي يُحاسبنا يوم القيامة بعدلٍ ورحمة.', en:'<b>Praise be to Allah</b>: we thank Him for His blessings. He is <b>Lord of the worlds</b> who created everything, and <b>Master of Judgment Day</b> who will judge us with justice and mercy.' },
    { ayah:{ar:'٥',en:'5'}, ar:'هذه أعظمُ كلمة: <b>«إياك نعبد وإياك نستعين»</b> — نعبدُ اللهَ وحدَه، ونطلبُ العونَ منه وحدَه في كلِّ شيء، صغيرِه وكبيرِه.', en:'This is the greatest line: <b>"You alone we worship, You alone we ask for help"</b> — we worship Allah alone and seek His help alone in everything, big and small.' },
    { ayah:{ar:'٦-٧',en:'6-7'}, ar:'نطلبُ من الله أعظمَ شيء: <b>الهداية</b> إلى الطريقِ المستقيم — طريقِ الأنبياءِ والصالحين، لا طريقِ المُعرضين عن الحق.', en:'We ask Allah for the greatest thing: <b>guidance</b> to the straight path — the path of prophets and the righteous, not of those who turned from truth.' },
  ],

  tadabbur: [
    { q:{ar:'لماذا نقرأ الفاتحة في كلِّ ركعة؟', en:'Why do we read Al-Fatihah in every rak‘ah?'},
      a:{ar:'لأنها <b>أمُّ القرآن</b> وأعظمُ سورةٍ فيه؛ تجمعُ حمدَ الله، وعبادتَه، وطلبَ الهداية. الصلاةُ لا تصحُّ بدونها!', en:'Because it is the <b>Mother of the Quran</b> and its greatest surah — uniting praise, worship, and seeking guidance. Prayer is invalid without it!'} },
    { q:{ar:'ماذا أطلبُ حين أقول «اهدنا الصراط المستقيم»؟', en:'What am I asking with "Guide us to the Straight Path"?'},
      a:{ar:'أطلبُ من الله أن يَدُلَّني على الخير ويُثبِّتني عليه، فلا أضيعُ ولا أتبعُ الطريقَ الخطأ.', en:'I ask Allah to show me good and keep me firm on it, so I never get lost or follow the wrong way.'} },
    { q:{ar:'كيف أشعرُ أنَّ اللهَ قريبٌ منّي؟', en:'How do I feel Allah is near me?'},
      a:{ar:'حين أقول «إياك نستعين»، أتذكَّرُ أنَّ اللهَ يسمعُني ويراني، وأنه يُعينني في كلِّ ما أحتاج.', en:'When I say "You alone we ask for help," I remember Allah hears and sees me, and helps me in all I need.'} },
  ],

  story: {
    title:{ar:'أعظمُ سورةٍ في القرآن', en:'The greatest surah in the Quran'},
    emoji:'🕋',
    pages:[
      { emoji:'🕌', text:{ ar:'كان النبيُّ ﷺ جالساً مع صحابيٍّ كريمٍ اسمُه أبو سعيدِ بنُ المُعَلَّى. ناداه النبيُّ ﷺ وهو يُصلّي، فلما انتهى قال له: <b>«لأُعلِّمنَّك أعظمَ سورةٍ في القرآن!»</b>', en:'The Prophet ﷺ was with a noble companion, Abu Sa‘id ibn al-Mu‘alla. He called him during prayer, and after, said: <b>"I will teach you the greatest surah in the Quran!"</b>' } },
      { emoji:'🤔', text:{ ar:'فرِح الصحابيُّ كثيراً وانتظر بشوق. أخذ النبيُّ ﷺ بيده وهمَّ بالخروج من المسجد. فقال الصحابي: <b>«يا رسولَ الله، قلتَ لتُعلِّمنّي أعظمَ سورة!»</b>', en:'The companion was overjoyed and waited eagerly. The Prophet ﷺ took his hand toward the door. The companion said: <b>"O Messenger of Allah, you said you would teach me the greatest surah!"</b>' } },
      { emoji:'✨', text:{ ar:'ابتسم النبيُّ ﷺ وقال: <b>«هي: الحمدُ لله ربِّ العالمين»</b> — يعني سورةَ الفاتحة! <b>«هي السبعُ المثاني والقرآنُ العظيمُ الذي أوتيتُه».</b>', en:'The Prophet ﷺ smiled: <b>"It is: Al-hamdu lillahi Rabb al-‘alameen"</b> — Surah Al-Fatihah! <b>"It is the Seven Oft-Repeated verses and the Great Quran I was given."</b>' } },
      { emoji:'💛', text:{ ar:'لذلك نقرأُ الفاتحةَ في <b>كلِّ ركعةٍ</b> من صلاتنا — أكثرَ من سبعَ عشرةَ مرةً في اليوم! إنها كنزٌ نُناجي به ربَّنا كلَّ يوم.', en:'So we read Al-Fatihah in <b>every rak‘ah</b> of our prayer — over seventeen times a day! It is a treasure with which we speak to our Lord daily.' } },
    ],
  },

  game: {
    kind:'mcq',
    items:[
      { q:{ar:'بماذا تُلقَّبُ سورةُ الفاتحة؟', en:'What is Al-Fatihah called?'},
        opts:[ {t:{ar:'أمُّ الكتاب',en:'The Mother of the Book'},c:true},
               {t:{ar:'سورةُ النور',en:'The Surah of Light'},c:false},
               {t:{ar:'خاتمةُ القرآن',en:'The Seal of the Quran'},c:false} ] },
      { q:{ar:'ماذا نطلبُ من الله في «اهدنا الصراط المستقيم»؟', en:'What do we ask in "Guide us to the Straight Path"?'},
        opts:[ {t:{ar:'المالَ والطعام',en:'Money and food'},c:false},
               {t:{ar:'الهدايةَ إلى الطريقِ الصحيح',en:'Guidance to the right way'},c:true},
               {t:{ar:'أن نلعبَ كثيراً',en:'To play a lot'},c:false} ] },
      { q:{ar:'كم آيةً في سورةِ الفاتحة؟', en:'How many verses in Al-Fatihah?'},
        opts:[ {t:{ar:'٣',en:'3'},c:false}, {t:{ar:'٧',en:'7'},c:true}, {t:{ar:'١٠',en:'10'},c:false} ] },
    ],
  },

  practice: [
    { icon:'🤲', title:{ar:'اقرَأْها بتدبُّرٍ في صلاتي', en:'Recite it with reflection in prayer'},
      body:{ar:'أتمهَّلُ في كلِّ آيةٍ وأنا أصلّي، وأستحضِرُ أنِّي أُكلِّمُ اللهَ تعالى.', en:'I slow down on each verse in prayer, remembering I am speaking to Allah.'} },
    { icon:'☀️', title:{ar:'أطلُبُ الهِدايةَ كلَّ يوم', en:'Ask for guidance every day'},
      body:{ar:'عندَ «اهدِنا الصِّراطَ المُستقيم» أسألُ اللهَ أن يَدُلَّني على الخيرِ ويُثبِّتَني عليه.', en:'At \u201cGuide us to the Straight Path\u201d I ask Allah to show me good and keep me firm.'} },
    { icon:'🛡️', title:{ar:'أجعَلُها رُقيةً وشِفاء', en:'Use it as healing'},
      body:{ar:'إذا مرِضتُ أو خِفتُ، أقرأُ الفاتِحةَ على نفسي كما عَلَّمَنا النبيُّ ﷺ.', en:'When sick or afraid, I recite Al-Fatihah over myself as the Prophet ﷺ taught.'} },
    { icon:'💛', title:{ar:'أشكُرُ اللهَ قبلَ الطَّلب', en:'Thank Allah before asking'},
      body:{ar:'أبدأُ بـ«الحمدُ لله» قبلَ أن أطلُبَ حاجتي، كما بدأتِ الفاتِحةُ بالثَّناء.', en:'I begin with \u201cAll praise to Allah\u201d before asking, as the surah opens with praise.'} },
  ],

  lesson: { ar:'أحمدُ اللهَ على نِعَمِه، وأعبدُه وحدَه، وأطلبُ منه أن يهديَني إلى كلِّ خير.', en:'I praise Allah for His blessings, worship Him alone, and ask Him to guide me to all good.' },
  action: { ar:'في صلاتي اليوم سأتدبَّرُ معنى الفاتحةِ وأنا أقرؤها بتمهُّل.', en:'In my prayer today I will reflect on Al-Fatihah\u2019s meaning as I recite it slowly.' },
};


/* ───── ROOM 5: Treasures (stickers + certificate) ───── */
window.SURAHS.fatihah.icon = "🕋";
window.SURAHS.fatihah.treasures = [
  {
    "icon": "🕋",
    "color": "#27AE60",
    "title": {
      "ar": "أُمُّ الكِتاب",
      "en": "Mother of the Book"
    }
  },
  {
    "icon": "🤲",
    "color": "#1ABC9C",
    "title": {
      "ar": "مِفتاحُ الصَّلاة",
      "en": "Key of Prayer"
    }
  },
  {
    "icon": "🌟",
    "color": "#F4D03F",
    "title": {
      "ar": "السَّبعُ المَثاني",
      "en": "The Seven Oft-Repeated"
    }
  },
  {
    "icon": "🧭",
    "color": "#2980B9",
    "title": {
      "ar": "الصِّراطُ المُستَقيم",
      "en": "The Straight Path"
    }
  },
  {
    "icon": "💛",
    "color": "#E67E22",
    "title": {
      "ar": "الحَمدُ لله",
      "en": "All Praise to Allah"
    }
  },
  {
    "icon": "🛡️",
    "color": "#8E44AD",
    "title": {
      "ar": "كَنزُ الفاتِحة",
      "en": "Treasure of Al-Fatihah"
    }
  }
];
window.SURAHS.fatihah.certificate = {
  "subtitle": {
    "ar": "تُمنَحُ هذه الشَّهادةُ لِمَن أتمَّ رِحلةَ سُورةِ الفَاتِحَة",
    "en": "Awarded to the one who completed the journey of Surah Al-Fatihah"
  },
  "statement": {
    "ar": "لِتدبُّرِه/تدبُّرِها <b>أُمَّ الكِتاب</b> — يَحمَدُ اللهَ، ويَقولُ «إيَّاكَ نَعبُدُ وإيَّاكَ نَستَعين»، ويَسألُ الهِدايةَ إلى الصِّراطِ المُستَقيمِ في كُلِّ صَلاة.",
    "en": "For reflecting on <b>the Mother of the Book</b> — praising Allah, declaring \"You alone we worship and You alone we ask for help,\" and asking for the Straight Path in every prayer."
  }
};
