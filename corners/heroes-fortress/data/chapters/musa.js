// data/chapters/musa.js — Era I · Musa عليه السلام  (faithful to the Quran: al-Qasas, Ta-Ha, ash-Shu'ara, al-Kahf)
// The Story room prefers the rich multi-story set in data/stories/musa.js (HISN_STORIES.musa) when it is loaded.
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.musa = {
  id:'musa', era:'prophets', icon:'staff',
  name:{ ar:'مُوسى عليه السلام', en:'Musa (Moses)' },
  tag:{ ar:'كَليمُ اللهِ ونبيُّ بني إسرائيل', en:"Allah's speaker, prophet of Bani Israel" },
  accent:'#1F8A6E', accent2:'#37B894',
  greeting: { ar: 'أهلاً يا بطل! قصةُ موسى عليه السلام هي أكثرُ قصةٍ تكرّرتْ في القرآن. فيها طفلٌ في سلّةٍ على النهر، وعصاً عجيبة، وبحرٌ ينشقّ، وملكٌ ظالمٌ يغرق. تعالَ نعِشْها معاً ونتعلّمْ كيف نثقُ بالله.', en: "Hello, hero! The story of Musa is the story told most often in the Quran. It has a baby in a basket on a river, an amazing staff, a sea that splits in two, and a cruel king who drowns. Come, let's live it together and learn how to trust Allah." },

  knowledge: {
    didYouKnow: { ar: 'اسمُ موسى عليه السلام هو أكثرُ اسمِ نبيٍّ ذُكِرَ في القرآنِ الكريم — أكثرَ مِن مئةِ مرّة!', en: 'The name of Musa is the prophet\'s name mentioned most often in the Quran — more than a hundred times!' },
    who: {
      ar: 'موسى عليه السلام نبيٌّ ورسولٌ مِن <b>أولي العزم</b>، أرسله اللهُ إلى فرعونَ الطاغيةِ وإلى <b>بني إسرائيل</b>. وُلِدَ في مصرَ في زمنٍ كان فرعونُ يقتلُ فيه أطفالَ بني إسرائيل، فحفظه اللهُ وربّاه في قصرِ فرعونَ نفسِه! كلّمه اللهُ مباشرةً فسُمّي <b>كليمَ الله</b>، وأنزلَ عليه <b>التوراة</b>، وأعطاه آياتٍ عظيمةً منها العصا واليدُ البيضاء.',
      en: "Musa was a prophet and messenger, one of the <b>messengers of firm resolve</b>. Allah sent him to the tyrant Pharaoh and to the <b>Children of Israel</b>. He was born in Egypt at a time when Pharaoh was killing the baby boys of the Children of Israel — yet Allah protected him and had him raised in Pharaoh's own palace! Allah spoke to him directly, so he is called <b>Kalimullah, the one Allah spoke to</b>. Allah revealed the <b>Torah</b> to him and gave him great signs, among them the staff and the shining white hand.",
    },
    facts: [
      { ar: 'ألقتْه أمُّه في النهرِ في سلّةٍ بأمرِ الله، فردّه اللهُ إليها لترضعَه.', en: 'His mother placed him in the river in a basket by Allah\'s command, and Allah returned him to her to nurse.' },
      { ar: 'كلّمه اللهُ عند الطورِ في الوادي المقدَّسِ طُوى.', en: 'Allah spoke to him by Mount Tur, in the sacred valley of Tuwa.' },
      { ar: 'ضربَ البحرَ بعصاه فانشقَّ طريقاً يابساً، فنجا المؤمنونَ وغرقَ فرعون.', en: 'He struck the sea with his staff and it split into a dry path; the believers were saved and Pharaoh drowned.' },
      { ar: 'كان النبيُّ ﷺ يصومُ يومَ عاشوراء، اليومَ الذي نجّى اللهُ فيه موسى.', en: 'The Prophet ﷺ fasted the day of Ashura, the day Allah saved Musa.' },
    ],
    timeline: [
      { when:{ar:'السلّة',en:'The Basket'}, what:{ar:'أُلقِيَ في النهرِ فوصلَ إلى قصرِ فرعون.',en:'Placed in the river, he reached Pharaoh\'s palace.'} },
      { when:{ar:'مَدْيَن',en:'Madyan'}, what:{ar:'خرجَ خائفاً فسقى للفتاتين وعاشَ هناك سنوات.',en:'He left in fear, watered for two women and stayed years.'} },
      { when:{ar:'النار',en:'The Fire'}, what:{ar:'كلّمه اللهُ وأعطاه العصا واليد.',en:'Allah spoke to him and gave him the staff and the hand.'} },
      { when:{ar:'السَّحَرة',en:'The Magicians'}, what:{ar:'ابتلعتْ عصاه حِبالَهم فآمنوا بالله.',en:'His staff swallowed their ropes and they believed.'} },
      { when:{ar:'البحر',en:'The Sea'}, what:{ar:'انشقَّ البحرُ فنجا قومُه وغرقَ فرعون.',en:'The sea split; his people were saved and Pharaoh drowned.'} },
      { when:{ar:'الخَضِر',en:'Al-Khidr'}, what:{ar:'سافرَ ليتعلّمَ مِن عبدٍ صالح.',en:'He travelled to learn from a righteous servant.'} },
    ],
    ayah: { ar: '﴿ وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا ﴾', ref: { ar: 'النساء ١٦٤', en: 'An-Nisa 164' } },
  },

  story: [
    { title:{ar:'السلّةُ على النهر',en:'The Basket on the River'}, pages:[
      { scene:'night', text:{ ar:'كان <b>فرعونُ</b> مَلِكُ مصرَ طاغيةً ظالماً، يستعبدُ <b>بني إسرائيل</b> ويقتلُ أطفالَهم الذكور. وفي تلك الأيامِ الصعبةِ وُلِدَ <b>موسى</b>. خافتْ عليه أمُّه خوفاً شديداً، فأوحى اللهُ إليها: ﴿ أَنْ أَرْضِعِيهِ ۖ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ ﴾.',
        en:'<b>Pharaoh</b>, the king of Egypt, was a cruel tyrant. He enslaved the <b>Children of Israel</b> and killed their baby boys. In those hard days <b>Musa</b> was born. His mother was terribly afraid for him, so Allah inspired her: "Nurse him, and when you fear for him, place him in the river, and do not fear and do not grieve. We will return him to you."' } },
      { scene:'basket', text:{ ar:'وضعتْه أمُّه في <b>سلّةٍ</b> صغيرةٍ وألقتْها في النهرِ وهي واثقةٌ بوعدِ الله. وقالت لأختِه: «تتبّعيه». حملَ الماءُ السلّةَ حتى وصلتْ إلى <b>قصرِ فرعون</b>! فلمّا رأته امرأةُ فرعونَ أحبّته وقالت: ﴿ قُرَّتُ عَيْنٍ لِي وَلَكَ ۖ لَا تَقْتُلُوهُ ﴾.',
        en:'His mother placed him in a little <b>basket</b> and set it on the river, trusting Allah\'s promise. She told his sister: "Follow him." The water carried the basket all the way to <b>Pharaoh\'s palace</b>! When Pharaoh\'s wife saw him she loved him and said: "A comfort of the eye for me and for you — do not kill him."' },
        choice:{ q:{ar:'كيف عادَ موسى إلى أمِّه؟',en:'How did Musa return to his mother?'},
          opts:[
            { t:{ar:'رفضَ كلَّ المُرضِعات، فدلّتْهم أختُه على أمِّه',en:'He refused every nurse, so his sister pointed them to his mother'}, c:true, exp:{ar:'نعم! حرّمَ اللهُ عليه المُرضِعاتِ حتى رجعَ إلى أمِّه، فتحقّقَ وعدُ الله: «إنّا رادّوه إليكِ».',en:'Yes! Allah made him refuse every nurse until he went back to his mother — Allah\'s promise "We will return him to you" came true.'} },
            { t:{ar:'هربَ مِن القصرِ وحدَه',en:'He ran away from the palace alone'}, c:false, exp:{ar:'لا، كان رضيعاً صغيراً! بل دبّرَ اللهُ رجوعَه بلُطف.',en:'No — he was a tiny baby! Allah gently arranged his return.'} },
            { t:{ar:'أعادَه فرعونُ رحمةً بها',en:'Pharaoh sent him back out of kindness'}, c:false, exp:{ar:'لا، فرعونُ لم يعرفْ أنّها أمُّه، بل هو تدبيرُ الله.',en:'No — Pharaoh never knew she was his mother; it was Allah\'s plan.'} },
          ] } },
    ]},
    { title:{ar:'إلى مَدْيَن',en:'To Madyan'}, pages:[
      { scene:'desert', text:{ ar:'كبِرَ موسى في القصرِ قويّاً حكيماً. وذاتَ يومٍ رأى رجلين يتقاتلان، فدفعَ أحدَهما بيدِه فمات — ولم يكنْ يقصدُ قتلَه. فندمَ موسى فوراً واستغفرَ ربَّه فغفرَ له. ثم جاءه رجلٌ ناصحٌ يحذّره أنّ القومَ يريدونَ قتلَه، ﴿ فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ ۖ قَالَ رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ ﴾.',
        en:'Musa grew up in the palace, strong and wise. One day he saw two men fighting; he pushed one of them with his hand and the man died — Musa had not meant to kill him. Musa was sorry at once and asked his Lord for forgiveness, and Allah forgave him. Then a sincere man came to warn him that the chiefs wanted to kill him, "so he left the city, afraid and watchful, saying: My Lord, save me from the wrongdoing people."' } },
      { scene:'well', text:{ ar:'سارَ موسى في الصحراءِ حتى وصلَ إلى <b>ماءِ مَدْيَن</b>. رأى فتاتين تنتظرانِ بغنمِهما بعيداً عن الزحام، فسقى لهما بلُطفٍ دونَ أن يطلبَ شيئاً، ثم جلسَ في الظلِّ ودعا: ﴿ رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ ﴾. فجاءتْه إحداهما تمشي على استحياء، فأكرمه أبوها، وقالت: ﴿ إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ ﴾. فعملَ عنده سنواتٍ وتزوّجَ إحدى ابنتَيه.',
        en:'Musa walked through the desert until he reached <b>the water of Madyan</b>. He saw two young women waiting with their sheep away from the crowd, so he kindly watered their flock without asking for anything, then sat in the shade and prayed: "My Lord, I am truly in need of whatever good You send down to me." One of them came to him walking shyly, her father welcomed him, and she said: "The best one to hire is the strong and the trustworthy." So he worked for him for years and married one of his daughters.' } },
    ]},
    { title:{ar:'النارُ في الوادي',en:'The Fire in the Valley'}, pages:[
      { scene:'fire', text:{ ar:'بعد سنواتٍ رجعَ موسى بأهلِه نحوَ مصرَ في ليلةٍ مظلمة. فرأى ناراً مِن بعيد، فقال لأهلِه: «امكُثوا، لعلّي آتيكم منها بخبرٍ أو جَذوةٍ تتدفّؤون بها». فلمّا اقتربَ نُودِيَ: ﴿ إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى ﴾. لقد <b>كلّمه الله</b>!',
        en:'Years later Musa travelled back towards Egypt with his family on a dark night. He saw a fire in the distance and told his family: "Wait here; perhaps I can bring you news, or a burning torch to warm yourselves." When he came near, he was called: "Indeed, I am your Lord, so take off your sandals — you are in the sacred valley of Tuwa." <b>Allah spoke to him</b>!' } },
      { scene:'snake', text:{ ar:'سأله ربُّه: ﴿ وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَىٰ ﴾؟ قال: هي عصايَ أتوكّأُ عليها وأهشُّ بها على غنمي. فأمره أن يُلقيَها، فإذا هي <b>حيّةٌ تسعى</b>! ثم أمره أن يضمَّ يدَه إلى جنبِه فخرجتْ <b>بيضاءَ تلمعُ</b> مِن غيرِ مرض. ثم قال له: اذهبْ إلى فرعونَ إنّه طغى. فدعا موسى: ﴿ رَبِّ اشْرَحْ لِي صَدْرِي ﴾ ﴿ وَيَسِّرْ لِي أَمْرِي ﴾، وطلبَ أن يكونَ أخوه <b>هارونُ</b> معه.',
        en:'His Lord asked him: "And what is that in your right hand, O Musa?" He said: it is my staff; I lean on it and use it to bring down leaves for my sheep. Allah told him to throw it — and it became <b>a moving snake</b>! Then He told him to press his hand to his side, and it came out <b>shining white</b>, without any illness. Then He said: go to Pharaoh, for he has gone too far. Musa prayed: "My Lord, open up my chest for me, and make my task easy for me," and asked that his brother <b>Harun</b> be with him.' } },
    ]},
    { title:{ar:'يومُ السَّحَرة',en:'The Day of the Magicians'}, pages:[
      { scene:'throne', text:{ ar:'أمرَ اللهُ موسى وهارونَ أن يكلّما فرعونَ برِفق: ﴿ فَقُولَا لَهُ قَوْلًا لَيِّنًا لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ ﴾. دعَواه إلى اللهِ وطلبا أن يُطلقَ بني إسرائيل، وأراه موسى العصا واليد. لكنّ فرعونَ تكبّرَ وقال: «هذا سِحر!» وجمعَ <b>كبارَ السَّحَرة</b> مِن كلِّ مكانٍ ليغلبوا موسى أمامَ الناس.',
        en:'Allah told Musa and Harun to speak to Pharaoh gently: "Speak to him with gentle words, so that perhaps he may remember or fear." They called him to Allah and asked him to free the Children of Israel, and Musa showed him the staff and the hand. But Pharaoh was arrogant and said: "This is magic!" He gathered <b>the greatest magicians</b> from everywhere to defeat Musa in front of the people.' },
        choice:{ q:{ar:'لماذا أمرَ اللهُ موسى أن يكلّمَ فرعونَ بقولٍ ليّن، مع أنّه ظالم؟',en:'Why did Allah tell Musa to speak gently to Pharaoh, even though he was a tyrant?'},
          opts:[
            { t:{ar:'لأنّ موسى كان ضعيفاً',en:'Because Musa was weak'}, c:false, exp:{ar:'لا، كان موسى قويّاً، واللهُ معه.',en:'No — Musa was strong, and Allah was with him.'} },
            { t:{ar:'لأنّ الكلامَ اللطيفَ أقربُ إلى القلوب',en:'Because gentle words reach hearts best'}, c:true, exp:{ar:'أحسنت! الرِّفقُ في الدعوةِ يفتحُ القلوب. إذا أردتَ أن تنصحَ أحداً فانصحه بلُطف.',en:'Well done! Gentleness opens hearts. When you want to advise someone, do it kindly.'} },
            { t:{ar:'لأنّ فرعونَ كان صديقَه',en:'Because Pharaoh was his friend'}, c:false, exp:{ar:'لا، بل هو أدبُ الدعوةِ الذي يحبُّه الله.',en:'No — it is the good manner of calling to Allah that He loves.'} },
          ] } },
      { scene:'snake', text:{ ar:'في يومِ العيدِ اجتمعَ الناس. ألقى السَّحَرةُ حِبالَهم وعِصيَّهم فخُيِّلَ للناسِ أنّها تتحرّك! فأوحى اللهُ إلى موسى: ﴿ وَأَلْقِ مَا فِي يَمِينِكَ تَلْقَفْ مَا صَنَعُوا ﴾. فألقى عصاه فابتلعتْ كلَّ ما صنعوا! عرفَ السَّحَرةُ أنّ هذا ليس سِحراً بل هو الحقّ، فسجدوا و﴿ قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ ﴾، وثبتوا على إيمانِهم رغمَ تهديدِ فرعون.',
        en:'On the day of the festival the people gathered. The magicians threw down their ropes and sticks, and it seemed to the people that they were moving! Allah revealed to Musa: "Throw what is in your right hand — it will swallow up what they have made." He threw his staff and it swallowed everything they had made! The magicians knew this was no magic but the truth, so they fell down in prostration and "said: We believe in the Lord of all the worlds" — and they stayed firm in their faith despite Pharaoh\'s threats.' } },
    ]},
    { title:{ar:'البحرُ ينشقّ',en:'The Sea Splits'}, pages:[
      { scene:'night', text:{ ar:'أمرَ اللهُ موسى أن يخرجَ ببني إسرائيل ليلاً. فلحقهم فرعونُ بجنودِه الكثيرة. وصلَ المؤمنونَ إلى البحر: البحرُ أمامَهم والجيشُ خلفَهم! فقالوا خائفين: ﴿ إِنَّا لَمُدْرَكُونَ ﴾. لكنّ موسى قال بثقةٍ عظيمة: ﴿ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ ﴾.',
        en:'Allah commanded Musa to lead the Children of Israel out by night. Pharaoh chased them with his huge army. The believers reached the sea: the sea in front of them and the army behind them! They cried in fear: "We are surely caught!" But Musa said with great trust: "No! Indeed, my Lord is with me; He will guide me."' } },
      { scene:'sea', text:{ ar:'فأوحى اللهُ إليه: ﴿ أَنِ اضْرِبْ بِعَصَاكَ الْبَحْرَ ۖ فَانْفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ ﴾ — كلُّ جانبٍ مثلُ جبلٍ عظيم! ومشى المؤمنونَ على طريقٍ يابسٍ في وسطِ البحر حتى نجَوا جميعاً. فلمّا دخلَ فرعونُ وجنودُه خلفَهم <b>عادَ الماءُ</b> فأغرقهم. وهكذا نصرَ اللهُ المظلومينَ وأهلكَ الظالم.',
        en:'So Allah revealed to him: "Strike the sea with your staff" — and it parted, and each part was like a great mountain! The believers walked on a dry path through the middle of the sea until all of them were safe. When Pharaoh and his soldiers went in after them, <b>the water came back</b> and drowned them. And so Allah helped the oppressed and destroyed the oppressor.' } },
    ]},
    { title:{ar:'رحلةُ العِلم',en:'The Journey of Knowledge'}, pages:[
      { scene:'boat', text:{ ar:'أخبرَ اللهُ موسى أنّ له عبداً صالحاً عند <b>مَجمَعِ البحرين</b> عنده عِلمٌ ليس عند موسى. فسافرَ موسى إليه بتواضعٍ وقال له: ﴿ هَلْ أَتَّبِعُكَ عَلَىٰ أَنْ تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا ﴾؟ قال <b>الخَضِرُ</b>: لن تستطيعَ معي صبراً! فوعده موسى: ﴿ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ صَابِرًا ﴾. فخرقَ الخضرُ سفينةً، وفعلَ أمراً صعباً مع غلام، وأصلحَ جداراً بلا أجر — وموسى يتعجّبُ ويسأل!',
        en:'Allah told Musa that He had a righteous servant at <b>the meeting place of the two seas</b> who had knowledge Musa did not have. So Musa humbly travelled to him and said: "May I follow you so that you teach me some of the right guidance you have been taught?" <b>Al-Khidr</b> said: you will not be able to be patient with me! Musa promised: "You will find me, if Allah wills, patient." Then al-Khidr made a hole in a boat, did something hard to understand concerning a boy, and rebuilt a wall without pay — and Musa kept wondering and asking!' } },
      { scene:'boat', text:{ ar:'ثم شرحَ الخضرُ الأسرار: <b>السفينةُ</b> لمساكينَ، وكان أمامَهم ملكٌ يأخذُ كلَّ سفينةٍ سليمة، فعيبُها حماها. و<b>الغلامُ</b> علمَ اللهُ أنّه سيُتعبُ أبويه المؤمنَين، فأرادَ اللهُ أن يُبدلهما خيراً منه. و<b>الجدارُ</b> كان تحته كنزٌ ليتيمين أبوهما صالح. ثم قال: ﴿ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ﴾. فتعلّمَ موسى أنّ <b>حكمةَ اللهِ</b> أوسعُ مِن كلِّ ما نرى.',
        en:'Then al-Khidr explained the secrets: <b>the boat</b> belonged to poor people, and ahead of them was a king seizing every sound boat — so the damage protected it. <b>The boy</b>: Allah knew he would bring great hardship to his believing parents, so Allah willed to give them a better child in his place. <b>The wall</b> had a treasure beneath it belonging to two orphans whose father was righteous. Then he said: "And I did not do it of my own accord." Musa learned that <b>Allah\'s wisdom</b> is wider than everything we can see.' } },
    ]},
  ],

  traits: [
    { ar:'التوكّل', en:'Trust in Allah' }, { ar:'الشجاعة', en:'Courage' },
    { ar:'القوّةُ والأمانة', en:'Strength & Honesty' }, { ar:'التواضعُ في طلبِ العلم', en:'Humility in Learning' },
  ],
  lessons: [
    { icon:'🌊', color:'#1F8A6E', title:{ar:'اللهُ معك في أصعبِ اللحظات',en:'Allah is with you in the hardest moments'},
      body:{ar:'البحرُ أمامَه والجيشُ خلفَه، ومع ذلك قال موسى: «كلّا إنّ معي ربّي سيهدين». فجعلَ اللهُ له مِن البحرِ طريقاً.',en:'The sea was in front of him and the army behind him, yet Musa said: "No! My Lord is with me; He will guide me." And Allah made a path for him through the sea.'},
      apply:{ar:'إذا خِفتُ أو ضاقتْ عليّ الأمور، أتذكّرُ أنّ اللهَ معي وأدعوه.',en:'When I am scared or things feel stuck, I remember that Allah is with me and I call on Him.'} },
    { icon:'🧺', color:'#2980B9', title:{ar:'وعدُ اللهِ حقّ',en:'Allah\'s promise is true'},
      body:{ar:'ألقتْ أمُّ موسى ابنَها في النهرِ ثقةً بالله، فردّه اللهُ إليها كما وعد. مَن وثِقَ باللهِ لا يخيب.',en:'Musa\'s mother placed her baby in the river trusting Allah, and Allah returned him to her just as He promised. Whoever trusts Allah is never let down.'},
      apply:{ar:'أفعلُ ما أمرَ اللهُ به وأثِقُ أنّه يختارُ لي الخير.',en:'I do what Allah commands and trust that He chooses good for me.'} },
    { icon:'💪', color:'#E67E22', title:{ar:'ساعِدِ الضعيفَ بلا مقابل',en:'Help the weak without asking for anything'},
      body:{ar:'كان موسى متعَباً وجائعاً، ومع ذلك سقى للفتاتين، ثم دعا ربَّه وحدَه. فأعطاه اللهُ بيتاً وعملاً وأهلاً.',en:'Musa was tired and hungry, yet he watered the two women\'s flock, then turned to his Lord alone. Allah gave him a home, work and a family.'},
      apply:{ar:'أساعدُ مَن يحتاجُ المساعدةَ ولو كنتُ متعَباً، وأطلبُ الأجرَ مِن الله.',en:'I help whoever needs help, even when I am tired, and seek my reward from Allah.'} },
    { icon:'🗣️', color:'#8E44AD', title:{ar:'الكلمةُ الليّنة',en:'Gentle words'},
      body:{ar:'أمرَ اللهُ موسى وهارونَ أن يكلّما فرعونَ — أظلمَ الناس — بقولٍ ليّن. فكيف بكلامِنا مع أهلِنا وأصحابِنا؟',en:'Allah told Musa and Harun to speak gently even to Pharaoh, the worst tyrant. So how gentle should we be with our family and friends?'},
      apply:{ar:'أنصحُ غيري بلُطفٍ وهدوء، ولا أصرخُ ولا أُهين.',en:'I advise others kindly and calmly, without shouting or insulting.'} },
    { icon:'📚', color:'#16A085', title:{ar:'تواضَعْ واطلُبِ العلم',en:'Be humble and seek knowledge'},
      body:{ar:'موسى كليمُ اللهِ ونبيٌّ عظيم، ومع ذلك سافرَ ليتعلّمَ مِن الخضرِ وقال: «هل أتّبعُك على أن تعلّمَني؟».',en:'Musa was a great prophet whom Allah spoke to, yet he travelled to learn from al-Khidr and said: "May I follow you so that you teach me?"'},
      apply:{ar:'أحترمُ معلّمي، وأسألُ بأدب، وأدعو: ربِّ زِدني علماً.',en:'I respect my teacher, ask politely, and pray: My Lord, increase me in knowledge.'} },
  ],

  memorize: {
    hadith:{ ar:'«فأنا أحقُّ بموسى منكم» — فصامَه وأمرَ بصيامِه (يعني يومَ عاشوراء)', en:"\"I have more right to Musa than you.\" — so he fasted it and commanded that it be fasted (the day of Ashura).", ref:{ ar:'[رواه البخاري ٢٠٠٤]', en:'[Sahih al-Bukhari 2004]' } },
    ayah: { ar: '﴿ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ ﴾', ref:{ ar:'الشعراء ٦٢', en:'Ash-Shu\'ara 62' } },
    dua:  { ar: 'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي ۝ يَفْقَهُوا قَوْلِي', ref:{ ar:'طه ٢٥–٢٨', en:'Ta-Ha 25–28' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أثِقُ أنّ اللهَ معي مهما اشتدّتِ الأمور.', en:'I will trust that Allah is with me, however hard things get.' },
        { ar:'أدعو «ربِّ اشرحْ لي صدري» قبلَ كلِّ أمرٍ صعب.', en:'I will pray "My Lord, open up my chest" before every hard task.' },
        { ar:'أساعدُ الضعيفَ وأكونُ قويّاً أميناً.', en:'I will help the weak and be strong and trustworthy.' },
        { ar:'أتواضعُ وأتعلّمُ مِن كلِّ مَن عنده علم.', en:'I will stay humble and learn from everyone who has knowledge.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'أين وضعتْ أمُّ موسى ابنَها لتحميَه مِن فرعون؟',en:'Where did Musa\'s mother place her baby to protect him from Pharaoh?'},
          options:[{ar:'في كهفٍ بعيد',en:'In a faraway cave'},{ar:'في سلّةٍ على النهر',en:'In a basket on the river'},{ar:'في بئرٍ عميقة',en:'In a deep well'}], answer:1 },
        { q:{ar:'ماذا قال موسى حين كان البحرُ أمامَه والجيشُ خلفَه؟',en:'What did Musa say when the sea was in front and the army behind?'},
          options:[{ar:'لقد هلكنا',en:'We are finished'},{ar:'لِنرجعْ إلى مصر',en:'Let\'s go back to Egypt'},{ar:'كلّا إنّ معي ربّي سيهدين',en:'No! My Lord is with me; He will guide me'}], answer:2 },
        { q:{ar:'لماذا سافرَ موسى إلى الخَضِر؟',en:'Why did Musa travel to al-Khidr?'},
          options:[{ar:'ليتعلّمَ منه',en:'To learn from him'},{ar:'ليهربَ مِن فرعون',en:'To escape from Pharaoh'},{ar:'ليشتريَ سفينة',en:'To buy a boat'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبْ رحلةَ موسى',en:'Put Musa\'s journey in order'},
      items:[
        {ar:'وُضِعَ في سلّةٍ على النهرِ فوصلَ إلى القصر',en:'He was placed in a basket on the river and reached the palace'},
        {ar:'خرجَ إلى مَدْيَنَ وسقى للفتاتين',en:'He went to Madyan and watered for the two women'},
        {ar:'كلّمه اللهُ عند النارِ في الوادي المقدّس',en:'Allah spoke to him by the fire in the sacred valley'},
        {ar:'ابتلعتْ عصاه حِبالَ السَّحَرةِ فآمنوا',en:'His staff swallowed the magicians\' ropes and they believed'},
        {ar:'ضربَ البحرَ بعصاه فانشقَّ ونجا قومُه',en:'He struck the sea with his staff; it split and his people were saved'},
        {ar:'سافرَ إلى مَجمعِ البحرين ليتعلّمَ مِن الخضر',en:'He travelled to the meeting of the two seas to learn from al-Khidr'},
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'أمرَ اللهُ موسى أن يكلّمَ فرعونَ بكلامٍ قاسٍ وغاضب.',en:'Allah told Musa to speak to Pharaoh harshly and angrily.'}, t:false },
        { statement:{ar:'كلّمَ اللهُ موسى، ولذلك يُسمّى كليمَ الله.',en:'Allah spoke to Musa, which is why he is called Kalimullah.'}, t:true },
        { statement:{ar:'غلبَ السَّحَرةُ موسى في يومِ العيد.',en:'The magicians beat Musa on the day of the festival.'}, t:false },
        { statement:{ar:'طلبَ موسى أن يكونَ أخوه هارونُ معه في الدعوة.',en:'Musa asked for his brother Harun to be with him in his mission.'}, t:true },
      ] },
  ],

  treasures: {
    medal: { ar:'وِسامُ «إنّ معي ربّي»', en:'Medal of "My Lord Is With Me"' },
    stickers:[
      { icon:'staff',   color:'#1F8A6E', title:{ar:'العصا المباركة',en:'The Blessed Staff'} },
      { icon:'light',   color:'#E6C25A', title:{ar:'اليدُ البيضاء',en:'The Shining Hand'} },
      { icon:'compass', color:'#2980B9', title:{ar:'طريقُ البحر',en:'The Path Through the Sea'} },
      { icon:'book',    color:'#8E44AD', title:{ar:'طالبُ العلم',en:'Seeker of Knowledge'} },
    ],
    moral: { ar:'مَن كان اللهُ معه لا يخافُ شيئاً: يفتحُ له الطريقَ ولو في وسطِ البحر، ويرفعُ المتواضعَ الذي يطلبُ العلم.', en:'Whoever has Allah with him fears nothing: Allah opens a way for him even through the middle of the sea, and raises the humble one who seeks knowledge.' },
    reflect:[
      {ar:'قال موسى «إنّ معي ربّي» في أصعبِ لحظة. متى تحتاجُ أن تتذكّرَ هذه الكلمة؟',en:'Musa said "My Lord is with me" at the hardest moment. When do you need to remember these words?'},
      {ar:'سقى موسى للفتاتين ولم يطلبْ شيئاً. مَن تستطيعُ أن تساعدَه اليومَ دونَ مقابل؟',en:'Musa watered the flock for the two women and asked for nothing. Who can you help today without expecting anything back?'},
    ],
  },
};
