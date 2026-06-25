// data/chapters/lut.js — Era I · Lut عليه السلام  (قوم لوط)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.lut = {
  id: 'lut', era: 'prophets', icon: 'storm',
  name: { ar: 'لُوطٌ عليه السلام', en: 'Lut (Lot)' },
  tag:  { ar: 'نبيُّ الحَياءِ وتَركِ السُّوء', en: 'The Prophet of modesty & leaving evil' },
  accent: '#6C7A9C', accent2: '#8A9AC0',
  greeting: { ar: 'أهلاً يا بطل! لُوطٌ عليه السلام دعا قومَه أن يتركوا الشَّرَّ ويَستحيوا مِن الله. تعالَ نتعلّمُ الحياءَ وأن نتركَ السوءَ ولو فعله الناس.', en: 'Hello, hero! Lut called his people to leave evil and to have shame before Allah. Come, let\'s learn modesty, and to leave what is wrong even if others do it.' },

  knowledge: {
    didYouKnow: { ar: 'كانَ لوطٌ عليه السلام ابنَ أخي إبراهيمَ الخليل، وآمنَ معه وهاجرَ في سبيلِ الله.', en: 'Lut was the nephew of Ibrahim the friend of Allah; he believed with him and migrated for Allah\'s sake.' },
    who: {
      ar: 'لوطٌ عليه السلام نبيٌّ كريم، أرسله اللهُ إلى أهلِ مدينةٍ كانوا يَفعلونَ <b>شُروراً وفاحشةً</b> لم يَسبقهم إليها أحد، ويُؤذونَ المسافرينَ، ولا يَستحيون. دعاهم لوطٌ إلى تَركِ السوءِ وعبادةِ الله، فاستهزؤوا به وهَدَّدوه بالطَّرد. فأهلكهمُ اللهُ ونجّى لوطاً والمؤمنين.',
      en: 'Lut was a noble prophet whom Allah sent to a town that committed <b>great evils and shameful deeds</b> no one before them had done, harming travelers and feeling no shame. Lut called them to leave the evil and worship Allah, but they mocked him and threatened to expel him. So Allah destroyed them and saved Lut and the believers.',
    },
    facts: [
      { ar: 'كانَ ابنَ أخي إبراهيمَ، وآمنَ وهاجرَ معه.', en: 'He was Ibrahim\'s nephew, and believed and migrated with him.' },
      { ar: 'قومُه فعلوا شُروراً علانيةً بلا حياء.', en: 'His people committed evils openly, with no shame.' },
      { ar: 'جاءته الملائكةُ في صورةِ ضيوفٍ ليُنجوه.', en: 'The angels came to him as guests to rescue him.' },
      { ar: 'قَلَبَ اللهُ مدينتَهم وأمطرَ عليها حجارة.', en: 'Allah overturned their town and rained stones upon it.' },
    ],
    timeline: [
      { when:{ar:'مع إبراهيم',en:'With Ibrahim'}, what:{ar:'آمنَ وهاجرَ مع عمِّه إبراهيم.',en:'He believed and migrated with his uncle Ibrahim.'} },
      { when:{ar:'الدعوة',en:'The Call'}, what:{ar:'دعا أهلَ المدينةِ لِتَركِ الشَّرّ.',en:'He called the town to abandon evil.'} },
      { when:{ar:'الاستهزاء',en:'The Mockery'}, what:{ar:'سَخِروا منه وهَدَّدوه بالطَّرد.',en:'They mocked him and threatened to expel him.'} },
      { when:{ar:'الضيوف',en:'The Guests'}, what:{ar:'جاءته الملائكةُ ضيوفاً مُكَرَّمين.',en:'The angels came to him as honoured guests.'} },
      { when:{ar:'النجاة',en:'The Rescue'}, what:{ar:'خرجَ ليلاً، وأُهلِكتِ المدينة.',en:'He left at night, and the town was destroyed.'} },
    ],
    ayah: { ar: '﴿ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ ﴾', ref:{ ar:'الشعراء ١٦٣', en:'Ash-Shu\'ara 163' } },
  },

  story: [
    { scene:'dwellings', text:{ ar:'كانَ <b>لوطٌ</b> عليه السلام ابنَ أخي إبراهيمَ الخليل، آمنَ بِاللهِ وهاجرَ معه. ثُمَّ أَرْسَلَهُ اللهُ نَبِيّاً إلى أهلِ مدينةٍ قَريبَةٍ لِيَدْعُوَهُمْ إلى الخَيْرِ وعبادةِ الله.',
      en:'<b>Lut</b> was the nephew of Ibrahim the friend of Allah; he believed in Allah and migrated with him. Then Allah sent him as a prophet to the people of a nearby town, to call them to goodness and the worship of Allah.' } },
    { scene:'idols', text:{ ar:'كانَ أهلُ تِلكَ المدينةِ يَفعلونَ <b>شُروراً كَثيرَةً علانِيَة</b>: يُؤذونَ المُسافِرينَ ويَسْرِقونَهم، ويَفعلونَ فاحِشَةً قَبيحَةً لم يَفعلْها أحدٌ قَبلَهم، ولا يَستحيونَ مِن اللهِ ولا مِن الناس.',
      en:'The people of that town committed <b>many evils openly</b>: they harmed and robbed travelers, and did an ugly shameful deed no one before them had ever done, feeling no shame before Allah or people.' } },
    { scene:'call', text:{ ar:'دعاهم لوطٌ بِرِفقٍ وحَزم: «اتَّقوا اللهَ وأَطيعوني، واتْرُكوا هذا السُّوءَ القَبيح، واسْتَحيوا مِن رَبِّكُم». لكِنَّهُمْ سَخِروا منه وقالوا: <b>أَخْرِجوا لوطاً مِن مَدينَتِنا، إنّه رَجُلٌ يُريدُ أن يَتَطَهَّر!</b>',
      en:'Lut called them gently but firmly: "Fear Allah and obey me; leave this ugly evil and feel shame before your Lord." But they mocked him and said: <b>Expel Lut from our town — he is a man who wants to keep pure!</b>' },
      choice:{ q:{ar:'ماذا كانَ يَجِبُ على قَومِ لوطٍ أن يَفعلوا؟',en:'What should the people of Lut have done?'},
        opts:[
          { t:{ar:'يَستمعوا لِلنَّصيحةِ ويَترُكوا الشَّرّ',en:'Listen to the advice and leave the evil'}, c:true, exp:{ar:'نعم! النَّصيحةُ رَحمة. العاقِلُ يَترُكُ السُّوءَ إذا عَرَفَه، ولا يُكابِر.',en:'Yes! Advice is a mercy. The wise person leaves evil once they know it, and is not stubborn.'} },
          { t:{ar:'يَسْخَروا مِن لوطٍ ويَطرُدوه',en:'Mock Lut and expel him'}, c:false, exp:{ar:'لا، فهذا ما فَعَلوه فَهَلَكوا. السُّخريَةُ مِن النّاصِحِ خَطَأٌ كبير.',en:'No — that is what they did, and they were destroyed. Mocking a sincere adviser is a grave mistake.'} },
          { t:{ar:'يَستمِرّوا في الشَّرّ',en:'Continue in the evil'}, c:false, exp:{ar:'لا، فالإصرارُ على الذَّنبِ يُهلِك. البطلُ يَرجِعُ إلى الصَّواب.',en:'No — insisting on sin destroys. A hero returns to what is right.'} },
        ] } },
    { scene:'ascend', text:{ ar:'أَرسلَ اللهُ مَلائِكَةً في صورةِ <b>شَبابٍ ضُيوف</b>. مَرّوا أوّلاً على إبراهيمَ فَبَشَّروه بِغُلامٍ عَليمٍ هو إسحاق، ثُمَّ ذَهَبوا إلى مدينةِ لوط. فلمّا رآهُمْ لوطٌ ضُيوفاً غُرَباءَ خافَ علَيْهِمْ مِن شَرِّ قَومِه، وحَزِنَ حُزْناً شَديداً.',
      en:'Allah sent angels in the form of <b>young guests</b>. They first passed by Ibrahim and gave him good news of a knowing son, Ishaq, then went to Lut\'s town. When Lut saw them as strangers and guests, he feared for them from the evil of his people, and was deeply distressed.' } },
    { scene:'dwellings', text:{ ar:'جاءَ القَومُ المُسيئونَ يُريدونَ أَذى الضُّيوف، فحاوَلَ لوطٌ أن يَحْميَهُمْ وقال: «هؤلاءِ ضُيوفي فلا تُخْزوني، واتَّقوا الله!». عِندَها كَشَفَ الملائكةُ الحَقيقَة: <b>«يا لوطُ إنّا رُسُلُ رَبِّك، لَنْ يَصِلوا إليك، جِئْنا لِنُنَجِّيَك»</b>.',
      en:'The wicked people came wanting to harm the guests, so Lut tried to protect them and said: "These are my guests, so do not disgrace me, and fear Allah!" Then the angels revealed the truth: <b>"O Lut, we are messengers of your Lord; they will not reach you. We have come to save you."</b>' } },
    { scene:'ascend', text:{ ar:'أَمَرَتِ الملائكةُ لوطاً أن يَخرُجَ <b>لَيلاً</b> مع أهلِهِ المؤمنينَ ولا يَلتَفِتَ أحدٌ إلى الوَراء. أمّا زوجتُه فقد أَحَبَّتْ طَريقةَ الأشرارِ وبَقِيَتْ معهم، فكانَتْ مِن الهالِكين. فالقَرابةُ لا تَنفَعُ بِغَيرِ إيمانٍ وعَمَلٍ صالح.',
      en:'The angels commanded Lut to leave <b>by night</b> with his believing family, and that no one should look back. But his wife loved the ways of the wrongdoers and stayed with them, so she was among the doomed. Family ties do not help without faith and good deeds.' } },
    { scene:'wind', text:{ ar:'فلمّا أَشرقَ الصُّبح، جاءَ أَمْرُ الله: <b>قَلَبَ اللهُ المدينةَ</b> وجَعَلَ عالِيَها سافِلَها، وأَمطرَ علَيْها حِجارَةً مِن سِجِّيل. هَلَكَ المُسيئون، ونَجّى اللهُ لوطاً والمؤمنينَ معه. وبَقِيَتْ قِصَّتُهُمْ عِبْرَةً: تَرْكُ السُّوءِ نَجاة.',
      en:'When morning broke, Allah\'s command came: <b>Allah overturned the town</b>, turning it upside down, and rained upon it stones of baked clay. The wrongdoers were destroyed, and Allah saved Lut and the believers with him. Their story remains a lesson: leaving evil is rescue.' } },
  ],

  traits: [
    { ar:'الحَياء', en:'Modesty' }, { ar:'الثبات', en:'Steadfastness' },
    { ar:'إكرامُ الضيف', en:'Honouring guests' }, { ar:'الدعوةُ للخير', en:'Calling to good' },
  ],
  lessons: [
    { icon:'🙈', color:'#6C7A9C', title:{ar:'الحَياءُ خَيرٌ كُلُّه',en:'Modesty is all good'},
      body:{ar:'فَقَدَ قومُ لوطٍ الحياءَ ففعلوا الشَّرَّ علانية. الحياءُ يَمنعُ صاحبَه مِن القبيحِ ويَزينُه عندَ اللهِ والناس.',en:'The people of Lut lost their sense of shame and did evil openly. Modesty keeps a person from what is ugly and beautifies them before Allah and people.'},
      apply:{ar:'أَستحي أن أفعلَ السوءَ حتى لو كُنتُ وحدي، فاللهُ يراني.',en:'I feel shy to do wrong even when alone, for Allah sees me.'} },
    { icon:'🚷', color:'#8A9AC0', title:{ar:'اتْرُكِ السوءَ ولو فعله الناس',en:'Leave evil even if others do it'},
      body:{ar:'فَعَلَ القومُ كُلُّهمُ الشَّرّ، لكِنَّ لوطاً ومَن آمنَ ثَبَتوا على الحَقّ. كَثرةُ مَن يَفعلُ الخطأَ لا تَجعلُه صواباً.',en:'The whole town did evil, but Lut and those who believed stood firm on the truth. Many people doing wrong does not make it right.'},
      apply:{ar:'لا أَفعلُ شيئاً سيِّئاً لمُجرَّدِ أنّ أصدقائي يَفعلونه.',en:'I won\'t do something bad just because my friends are doing it.'} },
    { icon:'🍽️', color:'#1ABC9C', title:{ar:'إكرامُ الضَّيف',en:'Honour your guests'},
      body:{ar:'حَرَصَ لوطٌ على حِمايةِ ضُيوفِه وإكرامِهم رَغمَ الخَطَر. إكرامُ الضَّيفِ مِن أخلاقِ الأنبياءِ وعلامةِ الإيمان.',en:'Lut was keen to protect and honour his guests despite the danger. Honouring guests is a trait of the prophets and a sign of faith.'},
      apply:{ar:'أُرَحِّبُ بِضُيوفِنا وأُساعِدُ في إكرامِهم وإسعادِهم.',en:'I welcome our guests and help to honour and make them happy.'} },
    { icon:'👬', color:'#E67E22', title:{ar:'اخْتَرِ الصُّحبةَ الصالحة',en:'Choose good company'},
      body:{ar:'تَبِعَتْ زوجةُ لوطٍ الأشرارَ فَهَلَكَتْ معهم. الصُّحبةُ الصالحةُ تَدُلُّكَ على الخير، والسيِّئةُ تَجُرُّكَ للشَّرّ.',en:'Lut\'s wife followed the wrongdoers and perished with them. Good company guides you to good, while bad company drags you to evil.'},
      apply:{ar:'أَختارُ أصدقاءً يُعينونَني على الخيرِ والطاعة.',en:'I choose friends who help me toward good and obedience.'} },
    { icon:'🗣️', color:'#8E44AD', title:{ar:'ادْعُ للخيرِ ولا تَيأس',en:'Call to good, never give up'},
      body:{ar:'استمرَّ لوطٌ يَدعو قومَه رَغمَ سُخريتِهم وتَهديدِهم. الدّاعي إلى الخيرِ أجرُه عظيمٌ ولو لم يَستجبْ له الناس.',en:'Lut kept calling his people despite their mockery and threats. The one who calls to good has a great reward even if people do not respond.'},
      apply:{ar:'أُذَكِّرُ أصحابي بالخيرِ بِلُطفٍ ولا أَملُّ.',en:'I gently remind my friends of what is good and never tire of it.'} },
  ],

  memorize: {
    hadith:{ ar:'«مَن رأى منكم منكرًا فليُغيِّره بيده، فإن لم يستطعْ فبلسانه، فإن لم يستطعْ فبقلبه»', en:"\"Whoever sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.\"", ref:{ ar:'[رواه مسلم ٤٩]', en:'[Sahih Muslim 49]' } },
    ayah:{ ar:'﴿ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ ﴾', ref:{ ar:'الشعراء ١٦٣', en:'Ash-Shu\'ara 163' } },
    dua: { ar:'رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ', ref:{ ar:'دعاءُ لوط — الشعراء ١٦٩', en:'Lut\'s du\'a — Ash-Shu\'ara 169' } },
    pledge:{
      title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أَستحي مِن اللهِ فلا أَفعلُ السوء.', en:'I will feel shame before Allah and not do evil.' },
        { ar:'أَترُكُ الخطأَ ولو فعله مَن حَولي.', en:'I will leave wrong even if those around me do it.' },
        { ar:'أُكرِمُ ضُيوفي وأُحسِنُ إليهم.', en:'I will honour my guests and be good to them.' },
        { ar:'أَختارُ الأصدقاءَ الصالحين.', en:'I will choose righteous friends.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'مع أيِّ نبيٍّ آمنَ لوطٌ وهاجر؟',en:'With which prophet did Lut believe and migrate?'},
          options:[{ar:'إبراهيم',en:'Ibrahim'},{ar:'نوح',en:'Nuh'},{ar:'آدم',en:'Adam'}], answer:0 },
        { q:{ar:'ماذا كانَ يَفعلُ قومُ لوط؟',en:'What did the people of Lut do?'},
          options:[{ar:'الشَّرَّ علانيةً بلا حياء',en:'Evil openly with no shame'},{ar:'يَبنونَ المساجد',en:'Built masjids'},{ar:'يُطعِمونَ الفقراء',en:'Fed the poor'}], answer:0 },
        { q:{ar:'كيفَ نجا لوطٌ والمؤمنون؟',en:'How were Lut and the believers saved?'},
          options:[{ar:'خرجوا ليلاً بأمرِ الله',en:'They left at night by Allah\'s command'},{ar:'ركبوا سفينة',en:'They boarded an ark'},{ar:'اختبؤوا في كهف',en:'They hid in a cave'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'قومُ لوطٍ فعلوا شرّاً لم يَسبقهم إليه أحد.',en:'The people of Lut did an evil no one before them had done.'}, t:true },
        { statement:{ar:'استمعَ قومُ لوطٍ لنصيحتِه وتركوا الشَّرّ.',en:'The people of Lut listened to his advice and left the evil.'}, t:false },
        { statement:{ar:'أمرَ اللهُ لوطاً أن يَخرُجَ ليلاً مع المؤمنين.',en:'Allah commanded Lut to leave at night with the believers.'}, t:true },
        { statement:{ar:'نجتْ زوجةُ لوطٍ لأنّها زوجةُ نبيّ.',en:'Lut\'s wife was saved because she was a prophet\'s wife.'}, t:false },
      ] },
    { type:'match', title:{ar:'وصِّلْ كلَّ شيءٍ بِما يُناسبه',en:'Match each to its pair'},
      pairs:[
        { a:{ar:'لوط',en:'Lut'}, b:{ar:'ابنُ أخي إبراهيم',en:'Ibrahim\'s nephew'} },
        { a:{ar:'الحَياء',en:'Modesty'}, b:{ar:'خُلُقُ المؤمن',en:'A believer\'s trait'} },
        { a:{ar:'الضُّيوف',en:'The guests'}, b:{ar:'ملائكةٌ مُكَرَّمون',en:'Honoured angels'} },
        { a:{ar:'زوجةُ لوط',en:'Lut\'s wife'}, b:{ar:'تَبِعَتِ الأشرار',en:'Followed the wrongdoers'} },
      ] },
  ],

  treasures: {
    medal:{ ar:'وِسامُ الحَياء', en:'Medal of Modesty' },
    stickers:[
      { icon:'light',  color:'#F4D03F', title:{ar:'نورُ الحَياء',en:'Light of Modesty'} },
      { icon:'shield', color:'#2980B9', title:{ar:'ثَباتٌ على الحَقّ',en:'Firm on the Truth'} },
      { icon:'heart',  color:'#E06898', title:{ar:'قلبٌ طاهر',en:'A Pure Heart'} },
      { icon:'star',   color:'#1ABC9C', title:{ar:'نجمُ النجاة',en:'Star of Rescue'} },
    ],
    moral:{ ar:'الحَياءُ خَيرٌ كُلُّه؛ والبطلُ يَترُكُ السوءَ ولو فعله الناس، ويَختارُ الصُّحبةَ الصالحة.', en:'Modesty is all good; a hero leaves evil even if others do it, and chooses righteous company.' },
    reflect:[
      { ar:'هل تَترُكُ الخطأَ حتى لو فعله أصدقاؤك؟ مَن يُعينُك على ذلك؟', en:'Do you leave a wrong even if your friends do it? Who helps you with that?' },
      { ar:'كيفَ تُكرِمُ ضُيوفَكم وتُدخِلُ السرورَ على قلوبِهم؟', en:'How do you honour your guests and bring joy to their hearts?' },
    ],
  },
};
