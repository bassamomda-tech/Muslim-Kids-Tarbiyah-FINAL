// data/chapters/ishaq.js — Era I · Ishaq عليه السلام  (faithful to the Quran & Ibn Kathir)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ishaq = {
  id: 'ishaq', era: 'prophets', icon: 'gem',
  name: { ar: 'إسحاقُ عليه السلام', en: 'Ishaq' },
  tag:  { ar: 'البِشارةُ بالغلامِ الصالح', en: 'The glad-tidings son' },
  accent: '#1F9C8A', accent2: '#3FBFA8',
  greeting: { ar: 'أهلاً يا بطل! إسحاقُ عليه السلام كان بِشارةً وفرحاً كبيراً لأبيه إبراهيمَ وأمِّه سارة بعدَ انتظارٍ طويل. تعالَ نعرفْ كيف يُكرِمُ اللهُ عبادَه الصالحين.', en: "Hello, hero! Ishaq was a joyful piece of good news for his father Ibrahim and his mother Sarah after a long wait. Come, let's see how Allah honours His righteous servants." },

  knowledge: {
    didYouKnow: { ar: 'إسحاقُ عليه السلام بشّرتْ به الملائكةُ إبراهيمَ وسارة وهما كبيرانِ في السِّنّ.', en: 'The angels gave Ibrahim and Sarah glad tidings of Ishaq when they were both very old.' },
    who: {
      ar: 'إسحاقُ عليه السلام نبيٌّ كريمٌ، وهو ابنُ النبيِّ <b>إبراهيمَ</b> خليلِ الرحمن وأمِّه سارة. وُلِدَ بعدَ أخيه إسماعيل بِبِشارةٍ مِن الله. جعله اللهُ نبيّاً مِن <b>الصالحين</b>، وباركَ في ذريّتِه، فكان ابنُه <b>يعقوبُ</b> نبيّاً، ومِن نسلِه أنبياءُ كثيرون.',
      en: "Ishaq was a noble prophet, son of the Prophet <b>Ibrahim</b>, the close friend of the Most Merciful, and his mother Sarah. He was born after his brother Ismail, by glad tidings from Allah. Allah made him a prophet from among the <b>righteous</b> and blessed his offspring — his son <b>Yaqub</b> was a prophet, and from his line came many prophets.",
    },
    facts: [
      { ar: 'بشّرتْ به الملائكةُ إبراهيمَ وسارة في الكِبَر.', en: 'The angels announced him to Ibrahim and Sarah in old age.' },
      { ar: 'هو أخو إسماعيلَ عليهما السلام.', en: 'He is the brother of Ismail, peace be upon them.' },
      { ar: 'جعله اللهُ نبيّاً مِن الصالحين.', en: 'Allah made him a prophet from among the righteous.' },
      { ar: 'باركَ اللهُ في ذريّتِه، ومنهم النبيُّ يعقوب.', en: 'Allah blessed his offspring, among them the Prophet Yaqub.' },
    ],
    timeline: [
      { when:{ar:'البِشارة',en:'Glad Tidings'}, what:{ar:'بشّرتِ الملائكةُ إبراهيمَ وسارة.',en:'The angels gave Ibrahim and Sarah glad tidings.'} },
      { when:{ar:'الميلاد',en:'The Birth'}, what:{ar:'وُلِدَ إسحاقُ نعمةً بعدَ انتظار.',en:'Ishaq was born — a gift after waiting.'} },
      { when:{ar:'النبوّة',en:'Prophethood'}, what:{ar:'جعله اللهُ نبيّاً مِن الصالحين.',en:'Allah made him a righteous prophet.'} },
      { when:{ar:'البركة',en:'Blessing'}, what:{ar:'باركَ اللهُ فيه وفي ذريّتِه.',en:'Allah blessed him and his offspring.'} },
      { when:{ar:'يعقوب',en:'Yaqub'}, what:{ar:'رُزِقَ بابنِه النبيِّ يعقوب.',en:'He was granted his son, the Prophet Yaqub.'} },
    ],
    ayah: { ar: '﴿ وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ ﴾', ref: { ar: 'الصافات ١١٢', en: 'As-Saffat 112' } },
  },

  story: [
    { scene:'call', text:{ ar:'كان النبيُّ <b>إبراهيمُ</b> عليه السلام وزوجتُه <b>سارة</b> قد كبِرا في السِّنِّ ولم يُرزَقا ولداً مِن سارة. لكنّهما لم ييأسا مِن رحمةِ الله، بل بقيا يدعوانِه ويرجوانِ فضلَه.',
      en:'The Prophet <b>Ibrahim</b> and his wife <b>Sarah</b> had grown old and had not been blessed with a child from Sarah. Yet they never despaired of Allah\'s mercy — they kept praying to Him and hoping for His favour.' } },
    { scene:'cosmos', text:{ ar:'وذاتَ يومٍ جاءَ إبراهيمَ <b>ضيوفٌ كرام</b> — وكانوا ملائكةً في صورةِ رجال. فبشّروه بِغلامٍ عليم! تعجّبتْ سارةُ وقالت: «أألِدُ وأنا عجوز؟» فقالوا: <b>كذلكِ قال ربُّك، إنّه هو الحكيمُ العليم</b>. فاللهُ على كلِّ شيءٍ قدير.',
      en:'One day <b>noble guests</b> came to Ibrahim — they were angels in the form of men. They gave him glad tidings of a knowing son! Sarah was astonished and said: "Shall I give birth when I am an old woman?" They said: <b>So your Lord has said; indeed He is the Wise, the Knowing.</b> For Allah has power over all things.' },
      choice:{ q:{ar:'ماذا نتعلّمُ مِن انتظارِ إبراهيمَ وسارة الطويل؟',en:'What do we learn from the long wait of Ibrahim and Sarah?'},
        opts:[
          { t:{ar:'لا نيأسُ مِن رحمةِ اللهِ مهما طالَ الانتظار',en:'Never despair of Allah\'s mercy, however long the wait'}, c:true, exp:{ar:'نعم! اللهُ قادرٌ على كلِّ شيء، ومَن صبرَ ودعا أكرمه اللهُ في الوقتِ المناسب.',en:'Yes! Allah is able to do anything, and whoever is patient and prays, Allah honours at the right time.'} },
          { t:{ar:'نغضبُ إذا تأخّرَ ما نريد',en:'We get angry if what we want is delayed'}, c:false, exp:{ar:'لا، بل نصبِرُ ونثِقُ بحِكمةِ الله.',en:'No — we are patient and trust Allah\'s wisdom.'} },
          { t:{ar:'نتوقّفُ عن الدعاء',en:'We stop praying'}, c:false, exp:{ar:'لا، بل نُلِحُّ في الدعاءِ ونرجو فضلَ الله.',en:'No — we keep praying and hope for Allah\'s favour.'} },
        ] } },
    { scene:'garden', text:{ ar:'وتحقّقتِ البِشارة، ووُلِدَ <b>إسحاقُ</b> عليه السلام، ففرِحَ إبراهيمُ وسارة فرحاً عظيماً وشكرا اللهَ. وكان إسحاقُ غلاماً مباركاً طيّباً، نشأ في بيتِ النبوّةِ على الإيمانِ والتقوى.',
      en:'The glad tidings came true, and <b>Ishaq</b> was born. Ibrahim and Sarah rejoiced greatly and thanked Allah. Ishaq was a blessed, good boy, raised in a household of prophethood upon faith and piety.' } },
    { scene:'ascend', text:{ ar:'جعله اللهُ نبيّاً <b>مِن الصالحين</b>، يدعو إلى عبادةِ اللهِ وحدَه كأبيه إبراهيم. وباركَ اللهُ في ذريّتِه، فكان ابنُه <b>يعقوبُ</b> نبيّاً، وجاءَ مِن نسلِه أنبياءُ كثيرون. فصارَ بيتُ إبراهيمَ شجرةً مباركةً مِن الأنبياء.',
      en:'Allah made him a prophet <b>from among the righteous</b>, calling to worship Allah alone like his father Ibrahim. Allah blessed his offspring — his son <b>Yaqub</b> was a prophet, and from his line came many prophets. So the house of Ibrahim became a blessed tree of prophets.' } },
  ],

  traits: [
    { ar:'الصلاح', en:'Righteousness' }, { ar:'البركة', en:'Blessing' },
    { ar:'الإيمان', en:'Faith' }, { ar:'بِرُّ الوالدين', en:'Honouring parents' },
  ],
  lessons: [
    { icon:'🌱', color:'#1F9C8A', title:{ar:'لا تيأسْ مِن رحمةِ الله',en:'Never despair of Allah\'s mercy'},
      body:{ar:'رُزِقَ إبراهيمُ وسارةُ ولداً بعدَ كِبَرِهما. مهما تأخّرَ الخيرُ، فإنّ رحمةَ اللهِ قريبةٌ لمن دعاه.',en:'Ibrahim and Sarah were granted a child in old age. However long good is delayed, Allah\'s mercy is near to those who call Him.'},
      apply:{ar:'أدعو اللهَ بِيقينٍ وأصبِرُ ولا أيأسُ أبداً.',en:'I pray to Allah with certainty, stay patient, and never despair.'} },
    { icon:'🙏', color:'#2980B9', title:{ar:'اشكُرِ اللهَ على العطاء',en:'Thank Allah for His gifts'},
      body:{ar:'شكرَ إبراهيمُ وسارةُ اللهَ على نعمةِ الولد. كلُّ عطيّةٍ مِن اللهِ تستحقُّ الشُّكرَ والحمد.',en:'Ibrahim and Sarah thanked Allah for the gift of a child. Every gift from Allah deserves gratitude and praise.'},
      apply:{ar:'أشكرُ اللهَ على نِعَمِه وأفرحُ بها.',en:'I thank Allah for His blessings and rejoice in them.'} },
    { icon:'🌟', color:'#E67E22', title:{ar:'الصلاحُ يُورَث',en:'Righteousness passes on'},
      body:{ar:'نشأ إسحاقُ في بيتِ إيمان، فصارَ نبيّاً صالحاً. البيتُ الصالحُ يُربّي أبطالاً صالحين.',en:'Ishaq grew up in a house of faith and became a righteous prophet. A good home raises good heroes.'},
      apply:{ar:'أتعلّمُ الخيرَ مِن أهلي وأنقلُه لِمن حولي.',en:'I learn good from my family and pass it to those around me.'} },
    { icon:'☝️', color:'#8E44AD', title:{ar:'اعبدِ اللهَ وحدَه',en:'Worship Allah alone'},
      body:{ar:'دعا إسحاقُ إلى عبادةِ اللهِ وحدَه كأبيه. هذه دعوةُ كلِّ الأنبياءِ مِن آدمَ إلى محمدٍ ﷺ.',en:'Ishaq called to worship Allah alone, like his father. This is the call of every prophet, from Adam to Muhammad ﷺ.'},
      apply:{ar:'أعبدُ اللهَ وحدَه وأُخلِصُ له عبادتي.',en:'I worship Allah alone and make my worship sincere for Him.'} },
  ],

  memorize: {
    hadith:{ ar:'«إذا ماتَ الإنسانُ انقطعَ عملُه إلا من ثلاث... وولدٍ صالحٍ يدعو له»', en:"\"When a person dies his deeds end except three... and a righteous child who prays for him.\"", ref:{ ar:'[رواه مسلم ١٦٣١ · صحيح]', en:'[Sahih Muslim 1631 · sahih]' } },
    ayah: { ar: '﴿ وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ ﴾', ref:{ ar:'الصافات ١١٢', en:'As-Saffat 112' } },
    dua:  { ar: 'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ', ref:{ ar:'الصافات ١٠٠', en:'As-Saffat 100' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'لا أيأسُ مِن رحمةِ اللهِ أبداً.', en:'I will never despair of Allah\'s mercy.' },
        { ar:'أشكرُ اللهَ على كلِّ نعمةٍ يهبُها لي.', en:'I will thank Allah for every blessing He gives me.' },
        { ar:'أتعلّمُ الخيرَ مِن أهلي وأنشرُه.', en:'I will learn good from my family and spread it.' },
        { ar:'أعبدُ اللهَ وحدَه كأنبيائِه الكرام.', en:'I will worship Allah alone, like His noble prophets.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'مَن والدُ إسحاقَ عليه السلام؟',en:'Who is the father of Ishaq?'},
          options:[{ar:'إبراهيمُ عليه السلام',en:'Ibrahim'},{ar:'نوحٌ عليه السلام',en:'Nuh'},{ar:'موسى عليه السلام',en:'Musa'}], answer:0 },
        { q:{ar:'كيف بُشِّرَ إبراهيمُ بإسحاق؟',en:'How was Ibrahim told of Ishaq?'},
          options:[{ar:'بشّرتْه الملائكة',en:'The angels gave glad tidings'},{ar:'في حُلم',en:'In a dream'},{ar:'كتبَ له',en:'It was written to him'}], answer:0 },
        { q:{ar:'مَن ابنُ إسحاقَ النبيُّ؟',en:'Who is Ishaq\'s prophet son?'},
          options:[{ar:'يعقوب',en:'Yaqub'},{ar:'يونس',en:'Yunus'},{ar:'هود',en:'Hud'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'بُشِّرَ إبراهيمُ وسارةُ بإسحاقَ في الكِبَر.',en:'Ibrahim and Sarah were told of Ishaq in old age.'}, t:true },
        { statement:{ar:'يئسَ إبراهيمُ وسارةُ مِن رحمةِ الله.',en:'Ibrahim and Sarah despaired of Allah\'s mercy.'}, t:false },
        { statement:{ar:'جعلَ اللهُ إسحاقَ نبيّاً مِن الصالحين.',en:'Allah made Ishaq a prophet from the righteous.'}, t:true },
        { statement:{ar:'باركَ اللهُ في ذريّةِ إسحاق.',en:'Allah blessed Ishaq\'s offspring.'}, t:true },
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'بشّرتْ بي الملائكةُ أبي في الكِبَر.',en:'The angels gave my father glad tidings of me in old age.'},
        {ar:'أبي هو إبراهيمُ خليلُ الرحمن.',en:'My father is Ibrahim, the close friend of Allah.'},
        {ar:'أخي هو إسماعيلُ عليه السلام.',en:'My brother is Ismail.'},
        {ar:'ابني يعقوبُ نبيٌّ كريم.',en:'My son Yaqub is a noble prophet.'},
      ],
      options:[{ar:'لوط',en:'Lut'},{ar:'إسحاق',en:'Ishaq'},{ar:'صالح',en:'Salih'}], answer:1 },
  ],

  treasures: {
    medal: { ar:'وِسامُ البِشارة', en:'Medal of Glad Tidings' },
    stickers:[
      { icon:'gem',   color:'#1F9C8A', title:{ar:'هِبةُ الله',en:'A Gift from Allah'} },
      { icon:'light', color:'#F4D03F', title:{ar:'فرحُ البِشارة',en:'Joy of Good News'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'بيتٌ مبارك',en:'A Blessed Home'} },
      { icon:'star',  color:'#E67E22', title:{ar:'نسلٌ مِن الأنبياء',en:'A Line of Prophets'} },
    ],
    moral: { ar:'مَن صبرَ ودعا اللهَ ولم ييأس، أكرمه اللهُ وباركَ له، فرحمةُ اللهِ لا تنفد.', en:'Whoever is patient, prays, and never despairs, Allah honours and blesses — for His mercy never runs out.' },
    reflect:[
      {ar:'انتظرَ إبراهيمُ ولداً طويلاً ثم رُزِقَه. ما الشيءُ الذي تتمنّاه وتدعو اللهَ به بِصبر؟',en:'Ibrahim waited long for a child and was granted one. What do you wish for and pray to Allah for with patience?'},
      {ar:'نشأ إسحاقُ في بيتٍ صالح. ما الخُلُقُ الجميلُ الذي تعلّمتَه مِن عائلتك؟',en:'Ishaq grew up in a righteous home. What beautiful trait have you learned from your family?'},
    ],
  },
};
