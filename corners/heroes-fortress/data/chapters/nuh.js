// data/chapters/nuh.js — Era I · Nuh عليه السلام  (richer format)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nuh = {
  id: 'nuh', era: 'prophets', icon: 'ark',
  name: { ar: 'نُوحٌ عليه السلام', en: 'Nuh (Noah)' },
  tag:  { ar: 'نبيُّ الصبرِ والطوفان', en: 'The Prophet of Patience & the Flood' },
  accent: '#2A87B0', accent2: '#3BA5CC',
  greeting: { ar: 'مرحباً يا صديقي! سأحكي لك قصةَ نوحٍ عليه السلام، الذي صبرَ على قومِه سنواتٍ طويلة، ثم نجّاه اللهُ بسفينةٍ عظيمة.', en: "Hello, friend! Let me tell you about Nuh, who called his people for many long years, then Allah saved him in a great ark." },

  knowledge: {
    didYouKnow: { ar: 'دعا نوحٌ قومَه إلى اللهِ نحوَ ٩٥٠ سنة!', en: 'Nuh called his people to Allah for about 950 years!' },
    who: {
      ar: 'نوحٌ عليه السلام هو <b>أوّلُ رسولٍ</b> أرسله اللهُ إلى أهلِ الأرضِ حين عبدوا الأصنام. دعاهم ليلاً ونهاراً، سرّاً وجهراً، بالصبرِ واللين. فلمّا أصرَّ أكثرُهم على الكُفر، أمره اللهُ أن يصنعَ <b>سفينةً عظيمة</b> تنجو بالمؤمنين.',
      en: 'Nuh was the <b>first messenger</b> Allah sent to the people of the earth when they began worshipping idols. He called them night and day, in secret and openly, with patience and gentleness. When most insisted on disbelief, Allah commanded him to build a <b>great ark</b> to save the believers.',
    },
    facts: [
      { ar: 'أوّلُ رسولٍ أرسله اللهُ إلى أهلِ الأرض.', en: 'The first messenger Allah sent to the people of earth.' },
      { ar: 'بنى السفينةَ في الصحراء، فسخرَ منه قومُه.', en: 'He built the ark in the desert, and his people mocked him.' },
      { ar: 'حملَ في السفينةِ زوجين مِن كلِّ نوعٍ مِن الحيوان.', en: 'He carried a pair of every kind of animal aboard.' },
      { ar: 'نجا المؤمنون، وغرقَ مَن كذّب — حتى ابنُه.', en: 'The believers were saved; the deniers drowned — even his son.' },
    ],
    timeline: [
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعا قومَه إلى عبادةِ اللهِ وحدَه.',en:'He called his people to worship Allah alone.'} },
      { when:{ar:'الصبر',en:'Patience'}, what:{ar:'صبرَ نحوَ ٩٥٠ سنةً رغمَ السُّخرية.',en:'He was patient for ~950 years despite mockery.'} },
      { when:{ar:'السفينة',en:'The Ark'}, what:{ar:'بنى السفينةَ بأمرِ اللهِ في الصحراء.',en:'He built the ark in the desert by Allah\'s order.'} },
      { when:{ar:'الطوفان',en:'The Flood'}, what:{ar:'جاءَ الماءُ مِن السماءِ والأرض.',en:'Water came from the sky and the earth.'} },
      { when:{ar:'النجاة',en:'Rescue'}, what:{ar:'نجا المؤمنون فوقَ الأمواج.',en:'The believers were saved above the waves.'} },
    ],
    ayah: { ar: '﴿ رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ ﴾', ref:{ ar:'المؤمنون ٢٩', en:"Al-Mu'minun 29" } },
  },

  story: [
    { scene:'idols', text:{ ar:'بَعْدَ زَمَنٍ طَويلٍ مِنْ آدَمَ وإِدْريسَ عَلَيْهِما السَّلام، ماتَ الرِّجالُ الصّالِحون، فَحَزِنَ النّاسُ عَلَيْهِمْ كَثيراً. فَجاءَهُمُ الشَّيْطانُ وخَدَعَهُمْ: «اِصْنَعوا لَهُمْ تَماثيلَ لِتَتَذَكَّروهُمْ». ثُمَّ بَعْدَ سِنين، أَمَرَهُمْ أَنْ يَعْبُدوها مِنْ دونِ الله. فَأَرْسَلَ اللهُ إِلَيْهِمْ <b>نوحاً</b> رَحْمَةً بِهِمْ.',
      en:'A long time after Adam and Idris, the righteous men died, and the people grieved for them greatly. So Shaytan deceived them: "Make statues to remember them." Then years later he told them to worship the statues instead of Allah. So Allah sent them <b>Nuh</b> out of mercy.' } },
    { scene:'call', text:{ ar:'دَعا نوحٌ قَوْمَهُ بِلُطْفٍ سِنينَ طَويلَة، لَيْلاً ونَهاراً، سِرّاً وجَهْراً: «اعْبُدوا اللهَ وَحْدَهُ». لكِنَّ أَكْثَرَهُمُ اسْتَكْبَروا، ووَضَعوا أَصابِعَهُمْ في آذانِهِمْ، وغَطَّوْا وُجوهَهُمْ بِثِيابِهِمْ كَيْ لا يَسْمَعوهُ، وقالوا: لَنْ نَتْرُكَ أَصْنامَنا أَبَداً!',
      en:'Nuh called his people gently for many long years — night and day, secretly and openly: "Worship Allah alone." But most grew proud, put their fingers in their ears, and even covered their faces with their clothes so they would not hear him, saying: We will never leave our idols!' },
      choice:{ q:{ar:'ماذا فَعَلَ نوحٌ عِنْدَما سَخِرَ مِنْهُ قَوْمُهُ سِنينَ طَويلَة؟',en:'What did Nuh do when his people mocked him for so many years?'},
        opts:[
          { t:{ar:'صَبَرَ واسْتَمَرَّ يَدْعوهُمْ بِرِفْق',en:'He stayed patient and kept calling them kindly'}, c:true, exp:{ar:'نعم! الصَّبْرُ سِلاحُ الأَنْبِياء. لَمْ يَيْأَسْ نوحٌ رَغْمَ مُرورِ مِئاتِ السِّنين.',en:'Yes! Patience is the weapon of the prophets. Nuh never gave up, even after hundreds of years.'} },
          { t:{ar:'غَضِبَ وتَرَكَهُمْ في أَوَّلِ يَوم',en:'He got angry and left them on the first day'}, c:false, exp:{ar:'لا، بَلْ صَبَرَ نَحْوَ ٩٥٠ سَنَةً يَدْعوهُمْ.',en:'No — he patiently called them for about 950 years.'} },
          { t:{ar:'تَرَكَ دَعْوَةَ الله',en:'He gave up calling to Allah'}, c:false, exp:{ar:'لا، فالأَنْبِياءُ لا يَتْرُكونَ أَمْرَ اللهِ مَهْما كانَ صَعْباً.',en:'No — prophets never abandon Allah\'s command, however hard.'} },
        ] } },
    { scene:'call', text:{ ar:'آمَنَ بِنوحٍ قَليلٌ مِنَ النّاسِ، أَكْثَرُهُمْ مِنَ الفُقَراءِ والضُّعَفاء. فقالَ المُتَكَبِّرون: لَنْ نُؤْمِنَ مَعَكَ ما دامَ هؤُلاءِ الفُقَراءُ مَعَك! لكِنَّ نوحاً لَمْ يَطْرُدِ المُؤْمِنين، فالنّاسُ كُلُّهُمْ سَواءٌ عِنْدَ اللهِ، لا فَرْقَ بَيْنَ غَنِيٍّ وفَقير.',
      en:'Only a few people believed in Nuh, most of them poor and weak. The arrogant said: We will never believe alongside these poor folk! But Nuh did not turn the believers away, for all people are equal before Allah — no difference between rich and poor.' } },
    { scene:'ark', text:{ ar:'وأَخيراً أَخْبَرَ اللهُ نوحاً أَنَّهُ لَنْ يُؤْمِنَ أَحَدٌ غَيْرُ مَنْ آمَن. وأَمَرَهُ أَنْ يَصْنَعَ <b>سَفينَةً ضَخْمَة</b>. صَنَعَها في الصَّحْراءِ حَيْثُ لا بَحْر، والنّاسُ يَمُرّونَ ويَضْحَكون: «سَفينَةٌ بِلا ماء؟!». لكِنَّ نوحاً وَثِقَ بِأَمْرِ رَبِّهِ واسْتَمَرَّ في العَمَل.',
      en:'At last Allah told Nuh that no one else would believe beyond those who already had. He commanded him to build a <b>huge ark</b>. Nuh built it in the desert where there was no sea, while people passed by and laughed: "A ship with no water?!" But Nuh trusted his Lord\'s command and kept working.' } },
    { scene:'flood', text:{ ar:'ثُمَّ جاءَ أَمْرُ الله: <b>فارَ التَّنّورُ</b> وخَرَجَ مِنْهُ الماء، وتَفَجَّرَتِ العُيونُ مِنَ الأَرْض، ونَزَلَ المَطَرُ كالأَنْهارِ مِنَ السَّماء. فَحَمَلَ نوحٌ في السَّفينَةِ المُؤْمِنينَ وأَزْواجاً مِنْ كُلِّ نَوْعٍ مِنَ الحَيَوان.',
      en:'Then Allah\'s command came: <b>water gushed forth</b> from the earth, springs burst open, and rain poured like rivers from the sky. So Nuh carried the believers and a pair of every kind of animal aboard the ark.' } },
    { scene:'flood', text:{ ar:'وارْتَفَعَ الماءُ حَتّى صارَ كالجِبال. ونادى نوحٌ ابْنَهُ الَّذي لَمْ يُؤْمِنْ: «يا بُنَيَّ ارْكَبْ مَعَنا!». فقالَ بِكِبْرٍ: سَأَصْعَدُ إلى جَبَلٍ يَحْميني مِنَ الماء. فَجاءَتْ مَوْجَةٌ عاليَةٌ بَيْنَهُما، فَكانَ مِنَ الغَرْقى. حَزِنَ نوحٌ، لكِنَّهُ عَلِمَ أَنَّ النَّجاةَ بِالإيمانِ لا بِالنَّسَب.',
      en:'The water rose until it was like mountains. Nuh called his son, who had not believed: "O my son, ride with us!" But he said proudly: I will climb a mountain to protect me from the water. A towering wave came between them, and he was among the drowned. Nuh was sad, but he knew that rescue comes by faith, not by family ties.' } },
    { scene:'rescue', text:{ ar:'حَمَلَتِ السَّفينَةُ المُؤْمِنينَ فَوْقَ الأَمْواجِ العاليَة، وحَفِظَهُمُ الله. ثُمَّ قالَ اللهُ: «يا أَرْضُ ابْلَعي ماءَكِ، ويا سَماءُ أَقْلِعي»، فَنَزَلَ الماء، واسْتَقَرَّتِ السَّفينَةُ على جَبَلِ الجودِيّ. ونَجّى اللهُ نوحاً والَّذينَ مَعَهُ بِرَحْمَتِهِ، بَعْدَ صَبْرٍ طَويلٍ جَميل.',
      en:'The ark carried the believers over the towering waves, and Allah protected them. Then Allah said: "O earth, swallow your water; O sky, withhold," so the water sank and the ark came to rest upon Mount Judi. Allah saved Nuh and those with him by His mercy — after a long and beautiful patience.' } },
  ],

  traits: [
    { ar:'الصبر', en:'Patience' }, { ar:'الثبات', en:'Steadfastness' },
    { ar:'التوكّل', en:'Trust in Allah' }, { ar:'الرِّفق', en:'Gentleness' },
  ],
  lessons: [
    { icon:'⏳', color:'#2A87B0', title:{ar:'اصبرْ ولا تيأس',en:'Be patient, never despair'},
      body:{ar:'دعا نوحٌ قومَه نحوَ ٩٥٠ سنةً دون أن ييأس. الصبرُ على الخيرِ يطولُ أحياناً، لكنّ نهايتَه جميلة.',en:'Nuh called his people for about 950 years without despairing. Patience in doing good may take long, but its ending is beautiful.'},
      apply:{ar:'أستمرُّ في فعلِ الخيرِ حتى لو تأخّرتِ النتيجة.',en:'I keep doing good even when results are slow.'} },
    { icon:'🛠️', color:'#1ABC9C', title:{ar:'ثِقْ بأمرِ الله',en:'Trust Allah\'s command'},
      body:{ar:'بنى نوحٌ السفينةَ في الصحراءِ حيثُ لا ماء، واثقاً بأمرِ ربِّه رغمَ سُخريةِ الناس.',en:'Nuh built the ark in the waterless desert, trusting his Lord\'s command despite people\'s mockery.'},
      apply:{ar:'أُطيعُ اللهَ حتى لو بدا الأمرُ غريباً للناس.',en:'I obey Allah even if the order seems strange to people.'} },
    { icon:'🗣️', color:'#E67E22', title:{ar:'ادعُ بِرِفق',en:'Invite with gentleness'},
      body:{ar:'دعا نوحٌ قومَه ليلاً ونهاراً، سرّاً وجهراً، بِلِينٍ ورحمة، لا بِعُنف. الرِّفقُ يفتحُ القلوب.',en:'Nuh called his people night and day, secretly and openly, with softness and mercy, not harshness. Gentleness opens hearts.'},
      apply:{ar:'أدعو غيري إلى الخيرِ بكلامٍ لطيفٍ لا بالعُنف.',en:'I invite others to good with kind words, not harshness.'} },
    { icon:'😌', color:'#8E44AD', title:{ar:'لا تخفْ مِن السُّخرية',en:'Don\'t fear mockery'},
      body:{ar:'ضحِكَ الناسُ على نوحٍ وسفينتِه، لكنّه لم يلتفتْ لِسُخريتهم وأكملَ طريقَه.',en:'People laughed at Nuh and his ark, but he ignored their mockery and continued his path.'},
      apply:{ar:'أفعلُ الصوابَ حتى لو ضحِكَ منّي بعضُ الناس.',en:'I do the right thing even if some people laugh at me.'} },
    { icon:'🚪', color:'#C0392B', title:{ar:'الإيمانُ هو النجاة',en:'Faith is the rescue'},
      body:{ar:'نجا المؤمنونَ في السفينة، وغرقَ المكذِّبونَ حتى ابنُ نوح. القُربُ الحقيقيُّ بالإيمانِ لا بالنَّسَب.',en:'The believers were saved in the ark, and the deniers drowned — even Nuh\'s son. True closeness is by faith, not by family ties.'},
      apply:{ar:'أتمسّكُ بإيماني وعملي الصالح، فهو سببُ النجاة.',en:'I hold to my faith and good deeds — they are the cause of rescue.'} },
  ],

  memorize: {
    hadith:{ ar:'«أفلا أكونُ عبدًا شكورًا» — قالها النبيُّ ﷺ وقد قامَ حتى تورّمتْ قدماه', en:"\"Shall I not be a grateful servant?\" — said the Prophet ﷺ after standing in prayer until his feet swelled.", ref:{ ar:'[رواه البخاري ٤٨٣٧، ومسلم ٢٨١٩]', en:'[Bukhari 4837 & Muslim 2819]' } },
    ayah:{ ar:'﴿ وَقُل رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا ﴾', ref:{ ar:'المؤمنون ٢٩', en:"Al-Mu'minun 29" } },
    dua: { ar:'رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا', ref:{ ar:'دعاءُ نوح — نوح ٢٨', en:"Nuh's du'a — Nuh 28" } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أصبرُ كما صبرَ نوحٌ ولا أيأس.', en:'I will be patient like Nuh and never despair.' },
        { ar:'أثقُ بأمرِ اللهِ ولو سخرَ منّي الناس.', en:"I will trust Allah's command even if people mock me." },
        { ar:'أدعو غيري إلى الخيرِ برِفقٍ ولِين.', en:'I will call others to good with gentleness.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'كم سنةً دعا نوحٌ قومَه (تقريباً)؟',en:'About how long did Nuh call his people?'},
          options:[{ar:'٥٠ سنة',en:'50 years'},{ar:'٩٥٠ سنة',en:'950 years'},{ar:'١٠ سنوات',en:'10 years'}], answer:1 },
        { q:{ar:'أين بنى نوحٌ السفينة؟',en:'Where did Nuh build the ark?'},
          options:[{ar:'في الصحراء',en:'In the desert'},{ar:'في البحر',en:'In the sea'},{ar:'على جبل',en:'On a mountain'}], answer:0 },
        { q:{ar:'بِمَ نجّى اللهُ المؤمنين؟',en:'How did Allah save the believers?'},
          options:[{ar:'بالسفينة',en:'By the ark'},{ar:'بالطيران',en:'By flying'},{ar:'بالكهف',en:'In a cave'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبِ القصة',en:'Put the Story in Order'},
      items:[
        {ar:'عبدَ الناسُ الأصنام',en:'People worshipped idols'},
        {ar:'دعاهم نوحٌ إلى الله',en:'Nuh called them to Allah'},
        {ar:'بنى السفينةَ بأمرِ الله',en:"He built the ark by Allah's command"},
        {ar:'جاءَ الطوفان',en:'The flood came'},
        {ar:'نجا المؤمنون',en:'The believers were saved'},
      ] },
    { type:'match', title:{ar:'وصِّلْ كلَّ شيءٍ بِمعناه',en:'Match each to its meaning'},
      pairs:[
        { a:{ar:'نوح',en:'Nuh'}, b:{ar:'أوّلُ الرُّسل',en:'First messenger'} },
        { a:{ar:'السفينة',en:'The ark'}, b:{ar:'وسيلةُ النجاة',en:'Means of rescue'} },
        { a:{ar:'الطوفان',en:'The flood'}, b:{ar:'عقابُ المكذِّبين',en:'Punishment of deniers'} },
        { a:{ar:'الصبر',en:'Patience'}, b:{ar:'سِرُّ نجاحِ نوح',en:"Secret of Nuh's success"} },
      ] },
  ],

  treasures: {
    medal:{ ar:'وِسامُ الصبر', en:'Medal of Patience' },
    stickers:[
      { icon:'ark',   color:'#2A87B0', title:{ar:'سفينةُ النجاة',en:'Ark of Rescue'} },
      { icon:'leaf',  color:'#1ABC9C', title:{ar:'غصنُ الأمل',en:'Branch of Hope'} },
      { icon:'star',  color:'#F4D03F', title:{ar:'نجمُ الثبات',en:'Star of Steadfastness'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'قلبٌ صبور',en:'A Patient Heart'} },
    ],
    moral:{ ar:'الصبرُ مفتاحُ النجاة — مَن صبرَ ووثقَ باللهِ، نجّاه الله.', en:'Patience is the key to rescue — whoever is patient and trusts Allah, Allah saves them.' },
    reflect:[
      { ar:'نوحٌ صبرَ مئاتِ السنين. ما الأمرُ الصعبُ الذي تحتاجُ أن تصبرَ عليه هذه الأيام؟', en:'Nuh was patient for centuries. What hard thing do you need to be patient about these days?' },
      { ar:'سخِرَ الناسُ مِن نوحٍ لكنّه وثِقَ باللهِ. هل تفعلُ الصوابَ حتى لو ضحِكَ منك بعضُ الناس؟', en:'People mocked Nuh, but he trusted Allah. Will you do the right thing even if some people laugh?' },
    ],
  },
};
