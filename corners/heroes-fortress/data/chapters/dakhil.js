// data/chapters/dakhil.js — Leaders · عبد الرحمن الداخل (full chapter; Story tab uses data/stories/dakhil.js)
// Sources: البداية والنهاية · نفح الطيب · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.dakhil = {
  id:'dakhil', era:'heroes', icon:'crown',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'عبد الرحمن الداخل', en:'Abdurrahman ad-Dakhil' },
  tag:{ ar:'صقرُ قريش', en:'The Falcon of Quraysh' },
  accent:'#7A3A2A', accent2:'#9A5A4A',
  greeting:{ ar:'أهلاً يا بطل! عبد الرحمن الداخلُ رحمه الله أميرٌ شابٌّ نجا من القتلِ وقطعَ الصحاري والبحارَ وحدَه، ثمّ أسّسَ دولةً عظيمةً في الأندلس. تعالَ نتعلّمْ من عزيمتِه وصبرِه.',
    en:'Hello, hero! Abdurrahman ad-Dakhil, a young prince who escaped death, crossed deserts and seas alone, then founded a great state in Andalusia. Come, let\'s learn from his resolve and patience.' },

  knowledge:{
    didYouKnow:{ ar:'لُقِّبَ بـ«صقرِ قريش» لأنّه نجا وحيداً من القتلِ وأسّسَ دولةً قويّةً في الأندلسِ بعدَ رحلةِ مطاردةٍ طويلة، فأعجبَ به حتى أعداؤه.',
      en:'He was called "the Falcon of Quraysh" because he escaped death alone and founded a strong state in Andalusia after a long chase — so impressive that even his enemies admired him.' },
    who:{ ar:'هو <b>عبد الرحمن بنُ معاوية</b> الأمويّ، المعروفُ بـ<b>«الداخل»</b> لأنّه دخلَ الأندلسَ وأسّسَ فيها دولة. لمّا سقطتِ الدولةُ الأمويّةُ وطُورِدَ أهلُها، نجا عبد الرحمن وهو شابٌّ، فقطعَ <b>الصحاري وعبرَ نهرَ الفرات</b> هرباً من القتل، وسافرَ آلافَ الأميالِ حتى وصلَ <b>الأندلس</b>. هناك، بذكائِه وشجاعتِه وصبرِه، وحّدَ المسلمينَ وأسّسَ <b>دولةَ الأمويينَ في الأندلس</b> التي صارتْ من أعظمِ دولِ العالمِ علماً وحضارة. لُقِّبَ بـ<b>«صقرِ قريش»</b> لعبقريّتِه وعزيمتِه.',
      en:'He is <b>Abdurrahman ibn Mu\u2019awiya</b> the Umayyad, known as <b>"ad-Dakhil" (the Entrant)</b> because he entered Andalusia and founded a state there. When the Umayyad state fell and its people were hunted, Abdurrahman escaped as a young man, crossing <b>deserts and the Euphrates river</b> fleeing death, and traveled thousands of miles until he reached <b>Andalusia</b>. There, with his intelligence, courage, and patience, he united the Muslims and founded the <b>Umayyad state in Andalusia</b>, which became one of the greatest states in the world in knowledge and civilization. He was called <b>"the Falcon of Quraysh"</b> for his genius and resolve.' },
    facts:[
      { ar:'أمويٌّ نجا من القتلِ بعدَ سقوطِ دولتِهم.', en:'An Umayyad who escaped death after their state fell.' },
      { ar:'قطعَ الصحاري والبحارَ آلافَ الأميالِ هرباً.', en:'He crossed deserts and seas, thousands of miles, fleeing.' },
      { ar:'أسّسَ دولةَ الأمويينَ في الأندلس.', en:'He founded the Umayyad state in Andalusia.' },
      { ar:'صارتِ الأندلسُ منارةً للعلمِ والحضارة.', en:'Andalusia became a beacon of knowledge and civilization.' },
      { ar:'لُقِّبَ «صقرَ قريش» لعزيمتِه وعبقريّتِه.', en:'Called "the Falcon of Quraysh" for his resolve and genius.' },
    ],
    timeline:[
      { when:{ar:'النجاة',en:'The Escape'}, what:{ar:'نجا من القتلِ بعدَ سقوطِ دولةِ قومِه.',en:'He escaped death after his people\u2019s state fell.'} },
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'قطعَ الصحاري والبحارَ آلافَ الأميال.',en:'He crossed deserts and seas, thousands of miles.'} },
      { when:{ar:'الأندلس',en:'Andalusia'}, what:{ar:'وصلَ الأندلسَ ووحّدَ المسلمين.',en:'He reached Andalusia and united the Muslims.'} },
      { when:{ar:'التأسيس',en:'The Founding'}, what:{ar:'أسّسَ دولةً قويّةً مزدهرة.',en:'He founded a strong, flourishing state.'} },
      { when:{ar:'الازدهار',en:'Flourishing'}, what:{ar:'صارتِ الأندلسُ منارةً للحضارة.',en:'Andalusia became a beacon of civilization.'} },
    ],
    ayah:{ ar:'﴿ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ﴾', ref:{ ar:'الطلاق ٣', en:'At-Talaq 3' } },
  },

  story:[
    { title:{ ar:'صقرُ قريش', en:'The Falcon of Quraysh' },
      pages:[
        { scene:'desert', text:{ ar:'كان <b>عبد الرحمن الداخل</b> أميراً شابّاً نجا من القتل، فقطعَ الصحاري والبحارَ آلافَ الأميالِ حتى وصلَ الأندلس. هناك أسّسَ بذكائِه وصبرِه دولةً عظيمةً صارتْ منارةً للعلمِ والحضارة، فلُقِّبَ صقرَ قريش.',
          en:'<b>Abdurrahman ad-Dakhil</b> was a young prince who escaped death, crossing deserts and seas thousands of miles until he reached Andalusia. There, with his intelligence and patience, he founded a great state that became a beacon of knowledge and civilization, earning the name "Falcon of Quraysh."' } } ] }
  ],

  traits:[
    { ar:'العزيمة', en:'Resolve' }, { ar:'الصبر', en:'Patience' },
    { ar:'الذكاء', en:'Intelligence' }, { ar:'التوكّل', en:'Reliance on Allah' },
  ],
  lessons:[
    { icon:'🦅', color:'#7A3A2A', title:{ar:'لا تستسلمْ للشدائد',en:'Never surrender to hardship'},
      body:{ar:'واجهَ الداخلُ المطاردةَ والغربةَ ولم ييأسْ حتى بنى دولة. الشدائدُ لا توقفُ صاحبَ العزيمة.',en:'Ad-Dakhil faced pursuit and exile yet did not despair until he built a state. Hardships do not stop a person of resolve.'},
      apply:{ar:'لا أستسلمُ عند الصعابِ وأُواصِلُ السعي.',en:'I do not surrender to difficulties; I keep striving.'} },
    { icon:'🧭', color:'#9A5A4A', title:{ar:'الصبرُ على الطريقِ الطويل',en:'Patience on the long road'},
      body:{ar:'قطعَ الداخلُ آلافَ الأميالِ بصبرٍ حتى بلغَ هدفَه. الأهدافُ العظيمةُ تحتاجُ صبراً طويلاً.',en:'Ad-Dakhil crossed thousands of miles patiently until he reached his goal. Great goals need long patience.'},
      apply:{ar:'أصبِرُ على طريقِ هدفي مهما طال.',en:'I am patient on the path to my goal, however long.'} },
    { icon:'🤲', color:'#5A2A1A', title:{ar:'توكّلْ على الله',en:'Rely on Allah'},
      body:{ar:'توكّلَ الداخلُ على اللهِ في غربتِه فحفظه ووفّقه. مَن توكّلَ على اللهِ كفاه.',en:'Ad-Dakhil relied on Allah in his exile, so He protected and guided him. Whoever relies on Allah, He suffices him.'},
      apply:{ar:'أتوكّلُ على اللهِ وأثقُ بحفظِه.',en:'I rely on Allah and trust His protection.'} },
    { icon:'🏛️', color:'#7A3A2A', title:{ar:'ابنِ بعدَ الشدّة',en:'Build after hardship'},
      body:{ar:'حوّلَ الداخلُ محنتَه إلى بناءِ دولةٍ ونهضةِ حضارة. البطلُ يصنعُ من الألمِ إنجازاً.',en:'Ad-Dakhil turned his ordeal into building a state and a civilizational revival. A hero makes achievement out of pain.'},
      apply:{ar:'أُحوِّلُ الصعابَ إلى دافعٍ للبناءِ والنجاح.',en:'I turn difficulties into motivation to build and succeed.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ﴾', ref:{ ar:'الطلاق ٣', en:'At-Talaq 3' } },
    dua:{ ar:'اللّهُمَّ ارزقني العزيمةَ والصبرَ والتوكّلَ عليك في كلِّ أمري', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'لا أستسلمُ عند الشدائدِ وأُواصِلُ السعي.', en:'I do not surrender to hardship; I keep striving.' },
        { ar:'أصبِرُ على طريقِ هدفي مهما طال.', en:'I am patient on my goal\u2019s path, however long.' },
        { ar:'أتوكّلُ على اللهِ وأبني بعدَ الشدّة.', en:'I rely on Allah and build after hardship.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ عبد الرحمن الداخل؟',en:'What was Abdurrahman ad-Dakhil known as?'},
          options:[{ar:'صقرُ قريش',en:'The Falcon of Quraysh'},{ar:'سيفُ الله',en:'The sword of Allah'},{ar:'الفاتح',en:'The Conqueror'}], answer:0 },
        { q:{ar:'أين أسّسَ دولتَه؟',en:'Where did he found his state?'},
          options:[{ar:'الأندلس',en:'Andalusia'},{ar:'مصر',en:'Egypt'},{ar:'الهند',en:'India'}], answer:0 },
        { q:{ar:'كيف وصلَ إلى الأندلس؟',en:'How did he reach Andalusia?'},
          options:[{ar:'قطعَ الصحاري والبحارَ هرباً من القتل',en:'He crossed deserts and seas fleeing death'},{ar:'بالطائرة',en:'By plane'},{ar:'وُلِدَ فيها',en:'He was born there'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'عبد الرحمن الداخلُ أسّسَ دولةً في الأندلس.',en:'Abdurrahman ad-Dakhil founded a state in Andalusia.'}, t:true },
        { statement:{ar:'نجا من القتلِ وقطعَ آلافَ الأميال.',en:'He escaped death and crossed thousands of miles.'}, t:true },
        { statement:{ar:'استسلمَ ولم يبنِ شيئاً.',en:'He surrendered and built nothing.'}, t:false },
        { statement:{ar:'لُقِّبَ صقرَ قريش لعزيمتِه.',en:'He was called the Falcon of Quraysh for his resolve.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'صقرُ قريش',en:'Falcon of Quraysh'}, b:{ar:'لقبُ الداخل',en:'Ad-Dakhil\u2019s title'} },
        { a:{ar:'الأندلس',en:'Andalusia'}, b:{ar:'أسّسَ فيها دولة',en:'He founded a state there'} },
        { a:{ar:'الصحاري والبحار',en:'Deserts and seas'}, b:{ar:'قطعها هرباً',en:'He crossed them fleeing'} },
        { a:{ar:'التوكّل',en:'Reliance on Allah'}, b:{ar:'سرُّ نجاتِه',en:'The secret of his survival'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العزيمةِ والبناء', en:'Medal of Resolve & Building' },
    stickers:[
      { icon:'crown', color:'#7A3A2A', title:{ar:'صقرُ قريش',en:'Falcon of Quraysh'} },
      { icon:'compass',color:'#9A5A4A', title:{ar:'رحلةُ الآلاف',en:'Journey of Thousands'} },
      { icon:'mosque',color:'#5A2A1A', title:{ar:'مؤسّسُ الدولة',en:'Founder of the State'} },
      { icon:'star',  color:'#7A3A2A', title:{ar:'صابرٌ متوكّل',en:'Patient & Reliant'} },
    ],
    moral:{ ar:'عبد الرحمن الداخلُ قدوةٌ في العزيمةِ والصبرِ والتوكّل — حوّلَ المحنةَ إلى بناءِ دولةٍ وحضارة.',
      en:'Abdurrahman ad-Dakhil is a model of resolve, patience, and reliance — he turned ordeal into building a state and civilization.' },
    reflect:[
      { ar:'لم يستسلمِ الداخلُ رغمَ المطاردةِ والغربة. كيف تتجاوزُ الصعابَ بعزيمة؟', en:'Ad-Dakhil did not surrender despite pursuit and exile. How do you overcome hardships with resolve?' },
      { ar:'حوّلَ محنتَه إلى إنجازٍ عظيم. كيف تجعلُ من تحدّياتِك دافعاً للنجاح؟', en:'He turned his ordeal into a great achievement. How do you make your challenges a motivation for success?' },
    ],
  },
};
