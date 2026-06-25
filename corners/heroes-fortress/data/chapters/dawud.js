// data/chapters/dawud.js — Era I · Dawud عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.dawud = {
  id: 'dawud', era: 'prophets', icon: 'mountain',
  name: { ar: 'داوُدُ عليه السلام', en: 'Dawud' },
  tag:  { ar: 'النبيُّ المَلِكُ صاحبُ الزَّبور', en: 'The prophet-king of the Psalms' },
  accent: '#9A7A4A', accent2: '#B89A6A',
  greeting: { ar: 'مرحباً يا بطل! داوُدُ عليه السلام كان فتىً صغيراً غلبَ عملاقاً جبّاراً بِقوّةِ إيمانِه، ثم صارَ نبيّاً ومَلِكاً تُسبِّحُ معه الجبالُ والطير. هيّا نسمعْ قصتَه!', en: "Hello, hero! Dawud was a small youth who defeated a mighty giant by the strength of his faith, then became a prophet and king with whom mountains and birds glorified Allah. Let's hear his story!" },

  knowledge: {
    didYouKnow: { ar: 'كان لِداوُدَ عليه السلام صوتٌ جميلٌ جداً، تتوقّفُ الطيرُ لِتُسبِّحَ معه!', en: 'Dawud had such a beautiful voice that even the birds would pause to glorify Allah with him!' },
    who: {
      ar: 'داوُدُ عليه السلام نبيٌّ ومَلِكٌ مِن بني إسرائيل. في صِغَرِه قتلَ العملاقَ <b>جالوت</b> بِحجرٍ مِن مِقلاعِه، فنصرَ اللهُ به المؤمنين. آتاه اللهُ المُلكَ والحِكمةَ وأنزلَ عليه <b>الزَّبور</b>. وسخّرَ له الجبالَ والطيرَ تُسبِّحُ معه، وألانَ له <b>الحديد</b> يصنعُ منه الدُّروع.',
      en: "Dawud was a prophet and king of the Children of Israel. As a youth he killed the giant <b>Jalut (Goliath)</b> with a stone from his sling, and Allah gave victory to the believers through him. Allah gave him kingship and wisdom and revealed to him the <b>Zabur (Psalms)</b>. He made the mountains and birds glorify Allah with him, and softened <b>iron</b> for him to make coats of armour.",
    },
    facts: [
      { ar: 'غلبَ العملاقَ جالوت وهو فتىً صغير.', en: 'He defeated the giant Jalut while still a youth.' },
      { ar: 'جمعَ اللهُ له النبوّةَ والمُلكَ والحِكمة.', en: 'Allah gave him prophethood, kingship and wisdom together.' },
      { ar: 'تُسبِّحُ معه الجبالُ والطيرُ بِصوتِه الجميل.', en: 'Mountains and birds glorified Allah with his beautiful voice.' },
      { ar: 'ألانَ اللهُ له الحديدَ فصنعَ الدُّروع، وأكلَ مِن عملِ يدِه.', en: 'Allah softened iron for him; he made armour and ate from his own work.' },
    ],
    timeline: [
      { when:{ar:'جالوت',en:'Jalut'}, what:{ar:'قتلَ العملاقَ بِحجرٍ وهو فتى.',en:'He killed the giant with a stone as a youth.'} },
      { when:{ar:'المُلك',en:'Kingship'}, what:{ar:'آتاه اللهُ المُلكَ والحِكمة.',en:'Allah gave him kingship and wisdom.'} },
      { when:{ar:'الزَّبور',en:'The Psalms'}, what:{ar:'أنزلَ اللهُ عليه الزَّبور.',en:'Allah revealed the Psalms to him.'} },
      { when:{ar:'التسبيح',en:'Glorifying'}, what:{ar:'سبّحتْ معه الجبالُ والطير.',en:'Mountains and birds glorified with him.'} },
      { when:{ar:'الحديد',en:'The Iron'}, what:{ar:'ألانَ اللهُ له الحديدَ للدُّروع.',en:'Allah softened iron for armour.'} },
      { when:{ar:'العدل',en:'Justice'}, what:{ar:'حكمَ بين الناسِ بالعدل.',en:'He judged among people with justice.'} },
    ],
    ayah: { ar: '﴿ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ ﴾', ref: { ar: 'سبأ ١٠', en: 'Saba 10' } },
  },

  story: [
    { scene:'idols', text:{ ar:'في زمنِ النبيِّ داوُدَ، خرجَ المؤمنونَ مِن بني إسرائيلَ لِقتالِ عدوٍّ ظالمٍ يقودُه عملاقٌ جبّارٌ اسمُه <b>جالوت</b>. خافَ كثيرٌ مِن الناسِ مِن ضخامتِه وقوّتِه، إلا فتىً صغيراً مؤمناً اسمُه <b>داوُد</b>، فقد امتلأ قلبُه ثقةً بالله.',
      en:'In the time of the prophets, the believers of the Children of Israel went out to fight a cruel enemy led by a mighty giant named <b>Jalut (Goliath)</b>. Many feared his size and strength — except a small, faithful youth named <b>Dawud</b>, whose heart was full of trust in Allah.' } },
    { scene:'peaks', text:{ ar:'تقدّمَ داوُدُ الصغيرُ بلا خوف، وأخذَ حجراً ووضعه في <b>مِقلاعِه</b>، وقال: بسمِ الله! ورماه، فأصابَ جالوتَ العملاقَ فسقطَ صريعاً! انتصرَ المؤمنونَ، وعلِمَ الجميعُ أنّ النصرَ مِن اللهِ لا بِحجمِ الجسد، بل بِقوّةِ الإيمان.',
      en:'Little Dawud stepped forward without fear, took a stone and placed it in his <b>sling</b>, said "In the name of Allah!" and hurled it — and it struck the giant Jalut, who fell down dead! The believers won, and everyone learned that victory comes from Allah, not from the size of one\'s body but the strength of one\'s faith.' },
      choice:{ q:{ar:'كيف غلبَ داوُدُ الصغيرُ العملاقَ جالوت؟',en:'How did little Dawud defeat the giant Jalut?'},
        opts:[
          { t:{ar:'بِثقتِه بالله وحُسنِ توكّلِه',en:'By his trust and reliance on Allah'}, c:true, exp:{ar:'نعم! النصرُ مِن اللهِ لمن توكّلَ عليه، ولو كان صغيراً ضعيفاً في نظرِ الناس.',en:'Yes! Victory is from Allah for whoever trusts Him — even one who seems small and weak in people\'s eyes.'} },
          { t:{ar:'لأنّه كان أضخمَ منه',en:'Because he was bigger than him'}, c:false, exp:{ar:'لا، بل كان داوُدُ فتىً صغيراً، لكنّ إيمانَه كان عظيماً.',en:'No — Dawud was a small youth, but his faith was great.'} },
          { t:{ar:'بالحظِّ',en:'By luck'}, c:false, exp:{ar:'لا، بل بِعونِ اللهِ وتوكّلِه عليه.',en:'No — by Allah\'s help and his reliance on Him.'} },
        ] } },
    { scene:'throne', text:{ ar:'أحبَّ الناسُ داوُدَ، وآتاه اللهُ <b>المُلكَ والنبوّةَ والحِكمة</b>. صارَ مَلِكاً عادلاً يحكمُ بين الناسِ بالحقّ، ويستمعُ لكلِّ صاحبِ حاجة. لم يتكبّرْ بالمُلك، بل كان كثيرَ العبادةِ والصيامِ، يشكرُ اللهَ على نِعَمِه.',
      en:'The people loved Dawud, and Allah gave him <b>kingship, prophethood and wisdom</b>. He became a just king, judging between people with truth and listening to everyone in need. He was not made arrogant by power — he fasted and worshipped much, thanking Allah for His gifts.' } },
    { scene:'peaks', text:{ ar:'وأنزلَ اللهُ على داوُدَ كتابَ <b>الزَّبور</b>، وأعطاه صوتاً جميلاً عجيباً. وكان إذا سبّحَ اللهَ، <b>سبّحتْ معه الجبالُ والطيرُ</b>! تتجاوبُ معه الأوديةُ والوديانُ بِذِكرِ الله. منظرٌ لا يُنسى يُذكِّرُنا أنّ كلَّ شيءٍ في الكونِ يُسبِّحُ بِحمدِ ربِّه.',
      en:'Allah revealed to Dawud the Book of the <b>Zabur (Psalms)</b> and gave him a wondrously beautiful voice. When he glorified Allah, <b>the mountains and birds glorified with him</b>! The valleys echoed with the remembrance of Allah. An unforgettable scene that reminds us everything in the universe glorifies its Lord.' } },
    { scene:'dwellings', text:{ ar:'وعلّمه اللهُ صنعةً نافعة: <b>ألانَ له الحديدَ</b> فصارَ يُشكِّلُه بيدِه كالعجين، يصنعُ منه الدُّروعَ الواقية. وكان داوُدُ المَلِكُ يأكلُ مِن عملِ يدِه، لا يأخذُ مِن مالِ الناس. فعلّمنا أنّ العملَ بالأمانةِ شرفٌ ولو كنتَ مَلِكاً.',
      en:'Allah taught him a useful craft: He <b>softened iron</b> for him so he could shape it by hand like dough, making protective coats of armour. Dawud the king ate from the work of his own hands, taking nothing from people\'s wealth. He taught us that honest work is an honour, even if you are a king.' } },
  ],

  traits: [
    { ar:'الشجاعة', en:'Courage' }, { ar:'العدل', en:'Justice' },
    { ar:'كثرةُ العبادة', en:'Devotion' }, { ar:'العملُ بالأمانة', en:'Honest work' },
  ],
  lessons: [
    { icon:'🦁', color:'#9A7A4A', title:{ar:'الإيمانُ أقوى مِن الجسد',en:'Faith is stronger than size'},
      body:{ar:'غلبَ داوُدُ الصغيرُ عملاقاً بِثقتِه بالله. لا تُهِمُّ قوّتُك أو حجمُك، بل قوّةُ إيمانِك وتوكّلِك.',en:'Little Dawud defeated a giant by trusting Allah. Your strength or size doesn\'t matter — the strength of your faith and reliance does.'},
      apply:{ar:'إذا واجهتُ شيئاً صعباً، أتوكّلُ على اللهِ ولا أخاف.',en:'When I face something hard, I rely on Allah and do not fear.'} },
    { icon:'⚖️', color:'#2980B9', title:{ar:'احكُمْ بالعدل',en:'Judge with justice'},
      body:{ar:'كان داوُدُ مَلِكاً عادلاً يُنصِفُ المظلوم. العدلُ يجعلُ القلوبَ تُحبُّك واللهَ يرضى عنك.',en:'Dawud was a just king who gave the wronged their right. Justice makes hearts love you and earns Allah\'s pleasure.'},
      apply:{ar:'أكونُ عادلاً مع إخوتي وأصدقائي ولا أظلمُ أحداً.',en:'I am fair with my siblings and friends and wrong no one.'} },
    { icon:'🛠️', color:'#E67E22', title:{ar:'كُلْ مِن عملِ يدِك',en:'Eat from your own work'},
      body:{ar:'رغمَ أنّه مَلِك، عملَ داوُدُ بيدِه وصنعَ الدُّروع. العملُ الحلالُ شرفٌ، والكسلُ ليس مِن أخلاقِ الأبطال.',en:'Though a king, Dawud worked with his hands and made armour. Honest work is an honour, and laziness is not the way of heroes.'},
      apply:{ar:'أعملُ وأساعِدُ بِيدي ولا أعتمدُ على غيري في كلِّ شيء.',en:'I work and help with my hands and don\'t depend on others for everything.'} },
    { icon:'🎵', color:'#8E44AD', title:{ar:'سبِّحِ اللهَ وأكثِرْ ذِكرَه',en:'Glorify Allah often'},
      body:{ar:'سبّحتِ الجبالُ والطيرُ مع داوُد. كلُّ الكونِ يذكرُ اللهَ، فلنكنْ مِن الذاكرينَ الشاكرين.',en:'Mountains and birds glorified Allah with Dawud. The whole universe remembers Allah — so let us be among those who remember and thank Him.'},
      apply:{ar:'أُكثِرُ مِن قولِ «سبحانَ الله» و«الحمدُ لله».',en:'I say "Glory to Allah" and "All praise to Allah" often.'} },
  ],

  memorize: {
    hadith:{ ar:'«أحبُّ الصيامِ إلى اللهِ صيامُ داود: كان يصومُ يومًا ويُفطِرُ يومًا»', en:"\"The most beloved fasting to Allah is the fast of Dawud: he would fast one day and break the next.\"", ref:{ ar:'[رواه البخاري ١١٣١، ومسلم ١١٥٩]', en:'[Bukhari 1131 & Muslim 1159]' } },
    ayah: { ar: '﴿ وَآتَيْنَا دَاوُودَ زَبُورًا ﴾', ref:{ ar:'الإسراء ٥٥', en:'Al-Isra 55' } },
    dua:  { ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ', ref:{ ar:'مِن التسبيح', en:'Words of glorification' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أتوكّلُ على اللهِ ولا أخافُ القويَّ الظالم.', en:'I will rely on Allah and not fear the strong oppressor.' },
        { ar:'أكونُ عادلاً مع الجميعِ ولا أظلِم.', en:'I will be just with everyone and wrong no one.' },
        { ar:'أعملُ بِيدي وأُتقِنُ عملي بِأمانة.', en:'I will work with my hands and do my work honestly.' },
        { ar:'أُكثِرُ مِن تسبيحِ اللهِ وحمدِه.', en:'I will glorify and praise Allah often.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'مَن غلبَ داوُدُ وهو فتىً صغير؟',en:'Whom did young Dawud defeat?'},
          options:[{ar:'العملاقَ جالوت',en:'The giant Jalut'},{ar:'فرعون',en:'Pharaoh'},{ar:'الذئب',en:'A wolf'}], answer:0 },
        { q:{ar:'أيُّ كتابٍ أنزله اللهُ على داوُد؟',en:'Which Book did Allah reveal to Dawud?'},
          options:[{ar:'الزَّبور',en:'The Zabur (Psalms)'},{ar:'التوراة',en:'The Torah'},{ar:'الإنجيل',en:'The Gospel'}], answer:0 },
        { q:{ar:'ماذا ألانَ اللهُ لِداوُد؟',en:'What did Allah soften for Dawud?'},
          options:[{ar:'الحديد',en:'Iron'},{ar:'الحجر',en:'Stone'},{ar:'الماء',en:'Water'}], answer:0 },
      ] },
    { type:'match', title:{ar:'وصِّلْ كلَّ نعمةٍ بصاحبِها',en:'Match each gift to its place'},
      pairs:[
        { a:{ar:'المِقلاع',en:'The sling'}, b:{ar:'هزيمةُ جالوت',en:'Defeating Jalut'} },
        { a:{ar:'الزَّبور',en:'The Psalms'}, b:{ar:'كتابٌ مِن الله',en:'A Book from Allah'} },
        { a:{ar:'الحديد',en:'Iron'}, b:{ar:'صناعةُ الدُّروع',en:'Making armour'} },
        { a:{ar:'الصوتُ الجميل',en:'The beautiful voice'}, b:{ar:'تسبيحُ الجبال',en:'Mountains glorifying'} },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'كان داوُدُ نبيّاً ومَلِكاً.',en:'Dawud was both a prophet and a king.'}, t:true },
        { statement:{ar:'سبّحتِ الجبالُ والطيرُ مع داوُد.',en:'Mountains and birds glorified Allah with Dawud.'}, t:true },
        { statement:{ar:'أخذَ داوُدُ طعامَه مِن مالِ الناس.',en:'Dawud took his food from people\'s wealth.'}, t:false },
        { statement:{ar:'غلبَ داوُدُ جالوتَ بِقوّةِ إيمانِه.',en:'Dawud defeated Jalut by the strength of his faith.'}, t:true },
      ] },
  ],

  treasures: {
    medal: { ar:'وِسامُ المَلِكِ العادل', en:'Medal of the Just King' },
    stickers:[
      { icon:'mountain', color:'#9A7A4A', title:{ar:'جبالٌ تُسبِّح',en:'Glorifying Mountains'} },
      { icon:'book',     color:'#2980B9', title:{ar:'الزَّبور',en:'The Psalms'} },
      { icon:'shield',   color:'#7A7A7A', title:{ar:'دِرعُ الحديد',en:'Coat of Iron'} },
      { icon:'star',     color:'#F4D03F', title:{ar:'قلبُ الشجاعة',en:'Heart of Courage'} },
    ],
    moral: { ar:'الإيمانُ يصنعُ مِن الصغيرِ بطلاً، والعدلُ والعملُ يرفعانِ صاحبَهما عند اللهِ والناس.', en:'Faith turns the small into a hero, and justice and honest work raise a person with Allah and people.' },
    reflect:[
      {ar:'داوُدُ الصغيرُ لم يَخفْ مِن العملاق. ما الأمرُ الكبيرُ الذي تخافُه وتحتاجُ شجاعةً وتوكّلاً عليه؟',en:'Little Dawud did not fear the giant. What big thing scares you that you need courage and trust in Allah for?'},
      {ar:'عملَ داوُدُ بيدِه رغمَ أنّه مَلِك. ما العملُ المفيدُ الذي تستطيعُ أن تتقنَه بِيدِك؟',en:'Dawud worked with his hands though he was a king. What useful skill can you master with your own hands?'},
    ],
  },
};
