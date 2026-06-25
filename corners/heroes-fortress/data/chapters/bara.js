// data/chapters/bara.js — Heroes · البراءُ بنُ مالك (full chapter; Story tab uses data/stories/bara.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.bara = {
  id:'bara', era:'heroes', icon:'sword',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'البراءُ بنُ مالك', en:'Al-Bara\u2019 ibn Malik' },
  tag:{ ar:'البطلُ المقدامُ المستجابُ الدعوة', en:'The fearless hero whose prayers were answered' },
  accent:'#C2452A', accent2:'#DC6848',
  greeting:{ ar:'أهلاً يا بطل! البراءُ بنُ مالكٍ رضي الله عنه أخو أنسٍ خادمِ النبيِّ ﷺ، فارسٌ مِقدامٌ كان إذا أقسمَ على اللهِ أبرَّ قسمَه. تعالَ نتعلّمْ من شجاعتِه وصدقِه مع الله.',
    en:'Hello, hero! Al-Bara\u2019 ibn Malik, brother of Anas the Prophet\'s ﷺ servant — a fearless knight who, when he swore an oath upon Allah, Allah fulfilled it. Come, let\'s learn from his courage and his truthfulness with Allah.' },

  knowledge:{
    didYouKnow:{ ar:'قال عنه أهلُ العلم: «إنّ من عبادِ اللهِ من لو أقسمَ على اللهِ لأبرَّه، منهم البراءُ بنُ مالك» — أي إذا دعا اللهَ أجابه.',
      en:'It was said of him: "Among Allah\'s servants are those who, if they swear by Allah, He fulfills it — among them is al-Bara\u2019 ibn Malik" — meaning when he prayed, Allah answered.' },
    who:{ ar:'هو <b>البراءُ بنُ مالك</b> الأنصاري، أخو <b>أنسِ بنِ مالك</b> خادمِ النبيِّ ﷺ. كان فارساً <b>مِقداماً شجاعاً</b> قلَّ أن يُوجَدَ مثلُه في الإقدام، قتلَ في المبارزاتِ عدداً كبيراً من الأبطال. كان <b>مستجابَ الدعوة</b>؛ إذا أقسمَ على اللهِ أبرَّ قسمَه. في معركةِ <b>اليمامةِ</b> ضدَّ مسيلمةَ الكذّاب، طلبَ أن يُقذَفَ فوقَ سورِ «حديقةِ الموت» ليفتحَ بابَها من الداخل. ونالَ ما تمنّاه: <b>الشهادةَ</b> يومَ تُستَر.',
      en:'He is <b>al-Bara\u2019 ibn Malik</b> al-Ansari, brother of <b>Anas ibn Malik</b>, the Prophet\'s ﷺ servant. He was a <b>fearless, daring knight</b>, rarely matched in boldness, who slew many champions in single combat. His <b>prayers were answered</b>; when he swore by Allah, Allah fulfilled his oath. At the Battle of <b>Yamama</b> against Musaylima the liar, he asked to be hurled over the wall of the "Garden of Death" to open its gate from within. And he attained what he wished: <b>martyrdom</b>, at the Battle of Tustar.' },
    facts:[
      { ar:'أخو أنسِ بنِ مالكٍ خادمِ النبيِّ ﷺ.', en:'Brother of Anas ibn Malik, the Prophet\'s ﷺ servant.' },
      { ar:'فارسٌ مِقدامٌ قتلَ كثيراً من الأبطالِ مبارزةً.', en:'A fearless knight who slew many champions in single combat.' },
      { ar:'كان مستجابَ الدعوة؛ إذا أقسمَ على اللهِ أبرَّه.', en:'His prayers were answered; his oaths upon Allah were fulfilled.' },
      { ar:'قُذِفَ فوقَ سورِ حديقةِ الموتِ ففتحَ بابَها يومَ اليمامة.', en:'He was hurled over the Garden of Death\'s wall and opened its gate at Yamama.' },
      { ar:'دعا اللهَ النصرَ والشهادةَ فنالها يومَ تُستَر.', en:'He prayed for victory and martyrdom, and attained it at Tustar.' },
    ],
    timeline:[
      { when:{ar:'النسب',en:'His Lineage'}, what:{ar:'أنصاريٌّ أخو أنسِ بنِ مالك.',en:'An Ansari, brother of Anas ibn Malik.'} },
      { when:{ar:'الإقدام',en:'His Daring'}, what:{ar:'فارسٌ شجاعٌ قلَّ نظيرُه في الجهاد.',en:'A brave knight, rarely matched in struggle.'} },
      { when:{ar:'الدعوة',en:'His Prayers'}, what:{ar:'كان مستجابَ الدعوةِ إذا أقسمَ أبرَّه الله.',en:'His prayers were answered; his oaths fulfilled.'} },
      { when:{ar:'اليمامة',en:'Yamama'}, what:{ar:'قُذِفَ فوقَ السورِ ففتحَ بابَ حديقةِ الموت.',en:'Hurled over the wall, he opened the Garden of Death.'} },
      { when:{ar:'الشهادة',en:'Martyrdom'}, what:{ar:'دعا بالنصرِ والشهادةِ فنالها يومَ تُستَر.',en:'He prayed for victory and martyrdom and attained it at Tustar.'} },
    ],
    ayah:{ ar:'﴿ وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٠٧', en:'Al-Baqara 207' } },
  },

  story:[
    { title:{ ar:'البطلُ المستجابُ الدعوة', en:'The Hero Whose Prayers Were Answered' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>البراءُ بنُ مالك</b> أخو أنسٍ، فارساً مِقداماً شجاعاً، مستجابَ الدعوة. يومَ اليمامةِ قُذِفَ فوقَ سورِ حديقةِ الموتِ ففتحَ بابَها، ثمّ دعا اللهَ النصرَ والشهادةَ فنالها يومَ تُستَر.',
          en:'<b>Al-Bara\u2019 ibn Malik</b>, brother of Anas, was a fearless, daring knight whose prayers were answered. At Yamama he was hurled over the wall of the Garden of Death and opened its gate; then he prayed for victory and martyrdom, and attained it at Tustar.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'الإقدام', en:'Boldness' },
    { ar:'الفداء', en:'Sacrifice' }, { ar:'الصدقُ مع الله', en:'Truthfulness with Allah' },
  ],
  lessons:[
    { icon:'🔥', color:'#C2452A', title:{ar:'الإقدامُ في الحق',en:'Boldness in the right'},
      body:{ar:'قُذِفَ البراءُ فوقَ السورِ ليفتحَ البابَ وحدَه. البطلُ يُقدِمُ حين يتراجعُ غيرُه.',en:'Al-Bara\u2019 was hurled over the wall to open the gate alone. A hero advances when others retreat.'},
      apply:{ar:'أُقدِمُ على الخيرِ بشجاعةٍ ولا أتردّد.',en:'I advance to good boldly and do not hesitate.'} },
    { icon:'🤲', color:'#DC6848', title:{ar:'اصدقْ مع الله',en:'Be truthful with Allah'},
      body:{ar:'كان البراءُ إذا أقسمَ على اللهِ أبرَّه لصدقِه معه. الصادقُ مع اللهِ يُجابُ دعاؤه.',en:'When al-Bara\u2019 swore by Allah, Allah fulfilled it because of his sincerity. The one truthful with Allah has his prayers answered.'},
      apply:{ar:'أصدُقُ مع اللهِ في نيّتي ودعائي.',en:'I am sincere with Allah in my intention and prayer.'} },
    { icon:'🛡️', color:'#A23420', title:{ar:'افتحِ البابَ للخير',en:'Open the door for good'},
      body:{ar:'بشجاعةِ البراءِ انفتحَ بابُ النصرِ للمسلمين. أحياناً يحتاجُ الخيرُ بطلاً يبدأُ الطريق.',en:'Through al-Bara\u2019\'s courage the door of victory opened for the Muslims. Sometimes good needs a hero to begin the way.'},
      apply:{ar:'أكونُ أوّلَ من يبدأُ الخيرَ ويفتحُ طريقَه.',en:'I am the first to start good and open its path.'} },
    { icon:'⭐', color:'#C2452A', title:{ar:'تمنَّ الخيرَ العظيم',en:'Aspire to the greatest good'},
      body:{ar:'تمنّى البراءُ النصرَ والشهادةَ فنالها. اطلبْ من اللهِ معاليَ الأمورِ بصدق.',en:'Al-Bara\u2019 wished for victory and martyrdom and attained them. Ask Allah for the highest things sincerely.'},
      apply:{ar:'أسألُ اللهَ أعلى الدرجاتِ في الخير.',en:'I ask Allah for the highest ranks in goodness.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ ﴾', ref:{ ar:'البقرة ٢٠٧', en:'Al-Baqara 207' } },
    dua:{ ar:'اللّهُمَّ ارزقني شجاعةً في الحقِّ وصدقاً معك وإجابةً لدعائي', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُقدِمُ على الخيرِ بشجاعة.', en:'I advance to good with courage.' },
        { ar:'أصدُقُ مع اللهِ في نيّتي ودعائي.', en:'I am sincere with Allah in intention and prayer.' },
        { ar:'أطلبُ من اللهِ أعلى الدرجات.', en:'I ask Allah for the highest ranks.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من أخو البراءِ بنِ مالك؟',en:'Who was al-Bara\u2019 ibn Malik\'s brother?'},
          options:[{ar:'أنسُ بنُ مالكٍ خادمُ النبيِّ ﷺ',en:'Anas ibn Malik, the Prophet\'s ﷺ servant'},{ar:'خالد',en:'Khalid'},{ar:'بلال',en:'Bilal'}], answer:0 },
        { q:{ar:'ماذا فعلَ البراءُ في حديقةِ الموتِ يومَ اليمامة؟',en:'What did al-Bara\u2019 do at the Garden of Death at Yamama?'},
          options:[{ar:'قُذِفَ فوقَ السورِ ففتحَ البابَ من الداخل',en:'Was hurled over the wall and opened the gate from within'},{ar:'هرب',en:'He fled'},{ar:'اختبأ',en:'He hid'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ البراءُ في دعائِه؟',en:'What was al-Bara\u2019 known for in his prayers?'},
          options:[{ar:'كان مستجابَ الدعوة',en:'His prayers were answered'},{ar:'لا يدعو',en:'He never prayed'},{ar:'لا يُجابُ له',en:'His prayers went unanswered'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'البراءُ أخو أنسِ بنِ مالك.',en:'Al-Bara\u2019 was the brother of Anas ibn Malik.'}, t:true },
        { statement:{ar:'كان البراءُ مستجابَ الدعوة.',en:'Al-Bara\u2019\'s prayers were answered.'}, t:true },
        { statement:{ar:'كان البراءُ جباناً يفرُّ من القتال.',en:'Al-Bara\u2019 was a coward who fled from battle.'}, t:false },
        { statement:{ar:'نالَ الشهادةَ كما تمنّى.',en:'He attained martyrdom as he wished.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أنس',en:'Anas'}, b:{ar:'أخوه خادمُ النبيِّ ﷺ',en:'His brother, the Prophet\'s ﷺ servant'} },
        { a:{ar:'حديقةُ الموت',en:'Garden of Death'}, b:{ar:'فتحَ بابَها يومَ اليمامة',en:'He opened its gate at Yamama'} },
        { a:{ar:'مستجابُ الدعوة',en:'Prayers answered'}, b:{ar:'إذا أقسمَ أبرَّه الله',en:'His oaths were fulfilled'} },
        { a:{ar:'تُستَر',en:'Tustar'}, b:{ar:'نالَ فيها الشهادة',en:'He attained martyrdom there'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الإقدامِ والصدق', en:'Medal of Boldness & Sincerity' },
    stickers:[
      { icon:'sword', color:'#C2452A', title:{ar:'الفارسُ المِقدام',en:'The Fearless Knight'} },
      { icon:'shield',color:'#DC6848', title:{ar:'فاتحُ الباب',en:'Opener of the Gate'} },
      { icon:'light', color:'#A23420', title:{ar:'مستجابُ الدعوة',en:'Answered in Prayer'} },
      { icon:'star',  color:'#C2452A', title:{ar:'نالَ ما تمنّى',en:'He Won What He Wished'} },
    ],
    moral:{ ar:'البراءُ قدوةٌ في الشجاعةِ والإقدامِ والصدقِ مع الله — مَن صدقَ ربَّه أعطاه ما تمنّى.',
      en:'Al-Bara\u2019 is a model of courage, boldness, and sincerity with Allah — whoever is true to his Lord is granted what he wishes.' },
    reflect:[
      { ar:'فتحَ البراءُ بابَ النصرِ بشجاعتِه. كيف تكونُ أوّلَ من يبدأُ الخير؟', en:'Al-Bara\u2019 opened victory\'s door by his courage. How can you be the first to start good?' },
      { ar:'كان صادقاً مع اللهِ فأُجيبَ دعاؤه. هل تصدُقُ مع اللهِ في دعائِك؟', en:'He was sincere with Allah, so his prayers were answered. Are you sincere with Allah in your prayers?' },
    ],
  },
};
