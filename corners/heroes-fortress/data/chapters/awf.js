// data/chapters/awf.js — Heroes · عبد الرحمن بنُ عوف (full chapter; Story tab uses data/stories/awf.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.awf = {
  id:'awf', era:'heroes', icon:'gem',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'عبد الرحمن بنُ عوف', en:'Abdurrahman ibn Awf' },
  tag:{ ar:'التاجرُ السخيُّ الأمين', en:'The generous, honest merchant' },
  accent:'#1E8A6B', accent2:'#3AAA88',
  greeting:{ ar:'أهلاً يا بطل! عبد الرحمن بنُ عوفٍ رضي الله عنه أحدُ العشرةِ المبشّرينَ بالجنّة، تاجرٌ بارَكَ اللهُ في مالِه فأنفقَه في سبيلِه. تعالَ نتعلّمْ منه كيف يكونُ المالُ خادماً للخير.',
    en:'Hello, hero! Abdurrahman ibn Awf, one of the Ten Promised Paradise, a merchant whom Allah blessed with wealth that he spent in His path. Come, let\'s learn from him how wealth can serve good.' },

  knowledge:{
    didYouKnow:{ ar:'حين هاجرَ إلى المدينةِ عرضَ عليه أخوه الأنصاريُّ نصفَ مالِه، فقال عبد الرحمن: «باركَ اللهُ لك في أهلِك ومالِك، دُلَّني على السوق» — فبدأ من الصفرِ حتى أصبحَ من أغنى الصحابة.',
      en:'When he emigrated to Madinah his Ansari brother offered him half his wealth, but Abdurrahman said: "May Allah bless your family and wealth for you — just show me the marketplace" — and he started from nothing until he became one of the wealthiest companions.' },
    who:{ ar:'هو <b>عبد الرحمن بنُ عوف</b> الزُّهريُّ القُرشي، أحدُ <b>العشرةِ المبشّرينَ بالجنّة</b>، ومن <b>السابقينَ الأوّلين</b> الذين أسلموا على يدِ أبي بكر. هاجرَ هجرتين، وشهِدَ بدراً وكلَّ المشاهد. كان <b>تاجراً ماهراً أميناً</b> بارَكَ اللهُ في تجارتِه، فأنفقَ أموالاً عظيمةً في سبيلِ الله. جعله عمرُ أحدَ <b>السِتّةِ في الشورى</b>. وصلّى النبيُّ ﷺ خلفَه في غزوةِ تبوك تكريماً له.',
      en:'He is <b>Abdurrahman ibn Awf</b> of the Zuhra clan of Quraysh, one of the <b>Ten Promised Paradise</b>, and among the <b>earliest believers</b> who embraced Islam through Abu Bakr. He emigrated twice, fought at Badr and all the battles. He was a <b>skilled, honest merchant</b> whom Allah blessed in his trade, and he spent enormous wealth in Allah\'s path. Umar made him one of the <b>six of the Shura council</b>. The Prophet ﷺ once prayed behind him in the Tabuk expedition, honoring him.' },
    facts:[
      { ar:'أحدُ العشرةِ المبشّرينَ بالجنّة.', en:'One of the Ten Promised Paradise.' },
      { ar:'قال «دُلَّني على السوق» وبنى ثروتَه بنفسِه.', en:'Said "show me the marketplace" and built his wealth himself.' },
      { ar:'تاجرٌ أمينٌ بارَكَ اللهُ في تجارتِه.', en:'An honest merchant whom Allah blessed in trade.' },
      { ar:'أنفقَ قافلةً من سبعِمئةِ بعيرٍ بحمولتِها في سبيلِ الله.', en:'Gave a caravan of 700 camels with their loads for Allah\'s sake.' },
      { ar:'أحدُ السِتّةِ في الشورى، وصلّى النبيُّ ﷺ خلفَه.', en:'One of the six of the Shura; the Prophet ﷺ prayed behind him.' },
    ],
    timeline:[
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ من الأوائلِ على يدِ أبي بكر.',en:'Embraced Islam early, through Abu Bakr.'} },
      { when:{ar:'الهجرة',en:'Migration'}, what:{ar:'هاجرَ وقال «دُلَّني على السوق».',en:'Emigrated and said "show me the marketplace."'} },
      { when:{ar:'البركة',en:'The Blessing'}, what:{ar:'بارَكَ اللهُ في تجارتِه فأصبحَ غنيّاً.',en:'Allah blessed his trade; he became wealthy.'} },
      { when:{ar:'الإنفاق',en:'The Giving'}, what:{ar:'أنفقَ أموالاً عظيمةً في سبيلِ الله.',en:'He spent enormous wealth for Allah.'} },
      { when:{ar:'الشورى',en:'The Council'}, what:{ar:'جعله عمرُ أحدَ السِتّةِ في الشورى.',en:'Umar made him one of the six of the Shura.'} },
    ],
    ayah:{ ar:'﴿ وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ ﴾', ref:{ ar:'سبأ ٣٩', en:'Saba 39' } },
  },

  story:[
    { title:{ ar:'دُلَّني على السوق', en:'Show Me the Marketplace' },
      pages:[
        { scene:'madinah', text:{ ar:'كان <b>عبد الرحمن بنُ عوف</b> من العشرةِ المبشّرينَ بالجنّة. حين هاجرَ آثرَ أن يكسبَ بنفسِه فقال «دُلَّني على السوق»، فبارَكَ اللهُ في تجارتِه حتى أصبحَ من أغنى الصحابة، ثمّ أنفقَ مالَه في سبيلِ الله.',
          en:'<b>Abdurrahman ibn Awf</b> was one of the Ten Promised Paradise. When he emigrated he preferred to earn for himself and said "show me the marketplace," so Allah blessed his trade until he became one of the wealthiest companions — then he spent his wealth in Allah\'s path.' } } ] }
  ],

  traits:[
    { ar:'الأمانة', en:'Honesty' }, { ar:'الجود', en:'Generosity' },
    { ar:'العملُ والكسب', en:'Hard work' }, { ar:'التواضع', en:'Humility' },
  ],
  lessons:[
    { icon:'💼', color:'#1E8A6B', title:{ar:'اكسبْ بعرقِ جبينِك',en:'Earn by your own effort'},
      body:{ar:'رفضَ عبد الرحمنِ أن يأخذَ مالَ غيرِه وقال «دُلَّني على السوق». البطلُ يعملُ ويكسبُ بنفسِه ولا يعتمدُ على الناس.',en:'Abdurrahman refused another\'s wealth and said "show me the marketplace." A hero works and earns by himself rather than depending on others.'},
      apply:{ar:'أعملُ بجدٍّ وأعتمدُ على نفسي بعدَ الله.',en:'I work hard and rely on myself after Allah.'} },
    { icon:'⚖️', color:'#3AAA88', title:{ar:'الأمانةُ في التجارة',en:'Honesty in trade'},
      body:{ar:'كان عبد الرحمنِ أميناً صادقاً في بيعِه، فبارَكَ اللهُ في مالِه. الصدقُ والأمانةُ بركةٌ في الرزق.',en:'Abdurrahman was honest and truthful in his trade, so Allah blessed his wealth. Honesty brings blessing to provision.'},
      apply:{ar:'أكونُ صادقاً أميناً في كلِّ تعاملاتي.',en:'I am honest and trustworthy in all my dealings.'} },
    { icon:'🎁', color:'#16735A', title:{ar:'أنفقْ مما تحب',en:'Give from what you love'},
      body:{ar:'أنفقَ عبد الرحمنِ قافلةً بحمولتِها كلِّها لله. الكريمُ ينفقُ أحبَّ مالِه ابتغاءَ وجهِ الله.',en:'Abdurrahman gave an entire caravan with its loads for Allah. The generous give the wealth they love most, seeking Allah\'s pleasure.'},
      apply:{ar:'أتصدّقُ مما أحبُّ ولا أبخلُ.',en:'I give in charity from what I love and do not withhold.'} },
    { icon:'🌿', color:'#1E8A6B', title:{ar:'التواضعُ مع الغنى',en:'Humility with wealth'},
      body:{ar:'مع غناه الكبيرِ بقيَ عبد الرحمنِ متواضعاً حتى لا يُعرَفُ من عبيدِه. الغنى لا يُفسِدُ القلبَ المتواضع.',en:'Despite great wealth Abdurrahman stayed so humble he could not be told apart from his servants. Wealth does not corrupt a humble heart.'},
      apply:{ar:'أبقى متواضعاً مهما أُعطيتُ من نِعَم.',en:'I stay humble no matter what blessings I receive.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ﴾', ref:{ ar:'سبأ ٣٩', en:'Saba 39' } },
    dua:{ ar:'اللّهُمَّ ارزقني مالاً حلالاً أُنفِقُه في طاعتِك', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أكسبُ رزقي بعملي وأمانتي.', en:'I earn my provision by work and honesty.' },
        { ar:'أُنفِقُ مما أحبُّ في سبيلِ الله.', en:'I give from what I love for Allah\'s sake.' },
        { ar:'أبقى متواضعاً مهما أُعطيت.', en:'I stay humble no matter what I am given.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا قال عبد الرحمنِ حين عُرِضَ عليه نصفُ مالِ أخيه؟',en:'What did Abdurrahman say when offered half his brother\'s wealth?'},
          options:[{ar:'دُلَّني على السوق',en:'Show me the marketplace'},{ar:'أعطني نصفَك',en:'Give me your half'},{ar:'لا أريدُ المال',en:'I want no wealth'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ عبد الرحمنِ في الكسب؟',en:'What was Abdurrahman known for in earning?'},
          options:[{ar:'التجارةُ الأمينة',en:'Honest trade'},{ar:'الزراعة',en:'Farming'},{ar:'الصيد',en:'Hunting'}], answer:0 },
        { q:{ar:'من أيِّ الصحابةِ كان عبد الرحمن؟',en:'Among which companions was Abdurrahman?'},
          options:[{ar:'العشرةِ المبشّرينَ بالجنّة',en:'The Ten Promised Paradise'},{ar:'التابعين',en:'The successors'},{ar:'الأنصارِ فقط',en:'Only the Ansar'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'عبد الرحمنِ أحدُ العشرةِ المبشّرينَ بالجنّة.',en:'Abdurrahman is one of the Ten Promised Paradise.'}, t:true },
        { statement:{ar:'بنى ثروتَه بالتجارةِ الأمينة.',en:'He built his wealth through honest trade.'}, t:true },
        { statement:{ar:'بخِلَ بمالِه ولم يُنفِقْ شيئاً.',en:'He was stingy and gave nothing.'}, t:false },
        { statement:{ar:'صلّى النبيُّ ﷺ خلفَه في تبوك.',en:'The Prophet ﷺ prayed behind him at Tabuk.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'دُلَّني على السوق',en:'Show me the marketplace'}, b:{ar:'كلمتُه عندَ الهجرة',en:'His words at the migration'} },
        { a:{ar:'٧٠٠ بعير',en:'700 camels'}, b:{ar:'قافلةٌ تصدّقَ بها',en:'A caravan he gave away'} },
        { a:{ar:'الشورى',en:'The Shura'}, b:{ar:'أحدُ السِتّةِ',en:'One of the six'} },
        { a:{ar:'العشرة',en:'The Ten'}, b:{ar:'المبشّرونَ بالجنّة',en:'Promised Paradise'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الجودِ والكسب', en:'Medal of Bounty & Enterprise' },
    stickers:[
      { icon:'gem',     color:'#1E8A6B', title:{ar:'التاجرُ الأمين',en:'The Honest Merchant'} },
      { icon:'compass', color:'#3AAA88', title:{ar:'دُلَّني على السوق',en:'Show Me the Market'} },
      { icon:'star',    color:'#16735A', title:{ar:'من العشرة',en:'Of the Ten'} },
      { icon:'heart',   color:'#1E8A6B', title:{ar:'القلبُ السخي',en:'The Generous Heart'} },
    ],
    moral:{ ar:'عبد الرحمنِ قدوةٌ في الكسبِ الحلالِ والأمانةِ والجودِ والتواضع — جعلَ مالَه خادماً للخير.',
      en:'Abdurrahman is a model of lawful earning, honesty, generosity, and humility — he made his wealth a servant of good.' },
    reflect:[
      { ar:'بنى عبد الرحمنِ مالَه بيدِه وأنفقَه لله. كيف تعملُ وتكسبُ ثمّ تُشارِكُ غيرَك؟', en:'Abdurrahman built his wealth himself and spent it for Allah. How do you work, earn, then share with others?' },
      { ar:'بقيَ متواضعاً مع الغنى. هل تتواضعُ حين تنالُ نعمةً كبيرة؟', en:'He stayed humble with wealth. Are you humble when you receive a great blessing?' },
    ],
  },
};
