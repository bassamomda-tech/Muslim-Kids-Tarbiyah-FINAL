// data/chapters/tashfin.js — Leaders · يوسفُ بنُ تاشفين (full chapter; Story tab uses data/stories/tashfin.js)
// Sources: البداية والنهاية · نفح الطيب · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.tashfin = {
  id:'tashfin', era:'heroes', icon:'shield',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'يوسفُ بنُ تاشفين', en:'Yusuf ibn Tashfin' },
  tag:{ ar:'قائدُ المرابطين', en:'Leader of the Almoravids' },
  accent:'#5A5A2A', accent2:'#7A7A4A',
  greeting:{ ar:'أهلاً يا بطل! يوسفُ بنُ تاشفين رحمه الله قائدُ المرابطينَ الزاهد، أنقذَ الأندلسَ من السقوطِ وانتصرَ في معركةِ الزلّاقة. تعالَ نتعلّمْ من زهدِه ونصرتِه للمسلمين.',
    en:'Hello, hero! Yusuf ibn Tashfin, the ascetic leader of the Almoravids, who saved Andalusia from collapse and triumphed at the Battle of Zallaqa. Come, let\'s learn from his asceticism and his support of the Muslims.' },

  knowledge:{
    didYouKnow:{ ar:'رغمَ أنّه أسّسَ دولةً عظيمةً وقادَ جيوشاً جرّارة، عاشَ يوسفُ بنُ تاشفين زاهداً يلبسُ الصوفَ ويأكلُ الشعيرَ ويبتعدُ عن الترف!',
      en:'Despite founding a great state and leading vast armies, Yusuf ibn Tashfin lived ascetic — wearing wool, eating barley, and shunning luxury!' },
    who:{ ar:'هو <b>يوسفُ بنُ تاشفين</b>، قائدُ <b>دولةِ المرابطين</b> في المغربِ والأندلس. كان <b>زاهداً تقيّاً</b> رغمَ مُلكِه العظيم، يعيشُ ببساطةٍ ويُقرِّبُ العلماءَ ويستشيرُهم. وحّدَ المغربَ وبنى مدينةَ <b>مرّاكش</b>. ولمّا استغاثَ به مسلمو الأندلسِ بعدما ضعفوا وتكالبتْ عليهم ممالكُ النصارى، عبرَ إليهم بجيشِه وانتصرَ في معركةِ <b>الزلّاقة</b> سنةَ ٤٧٩هـ انتصاراً عظيماً <b>أنقذَ الأندلسَ</b> من السقوطِ قروناً. كان مثالاً للقائدِ الزاهدِ المجاهدِ الذي ينصرُ المسلمينَ ولا يطلبُ مُلكاً لنفسِه.',
      en:'He is <b>Yusuf ibn Tashfin</b>, leader of the <b>Almoravid state</b> in the Maghrib and Andalusia. He was <b>ascetic and pious</b> despite his great rule, living simply, drawing scholars near and consulting them. He united the Maghrib and built the city of <b>Marrakesh</b>. When the Muslims of Andalusia, weakened and beset by the Christian kingdoms, called on him for help, he crossed to them with his army and triumphed at the Battle of <b>Zallaqa</b> in 479 AH — a great victory that <b>saved Andalusia</b> from collapse for centuries. He was a model of the ascetic, campaigning leader who supports the Muslims without seeking dominion for himself.' },
    facts:[
      { ar:'قائدُ دولةِ المرابطينَ في المغربِ والأندلس.', en:'Leader of the Almoravid state in the Maghrib and Andalusia.' },
      { ar:'زاهدٌ تقيٌّ يعيشُ ببساطةٍ رغمَ مُلكِه.', en:'Ascetic and pious, living simply despite his rule.' },
      { ar:'وحّدَ المغربَ وبنى مدينةَ مرّاكش.', en:'He united the Maghrib and built Marrakesh.' },
      { ar:'انتصرَ في الزلّاقةِ فأنقذَ الأندلس.', en:'He triumphed at Zallaqa, saving Andalusia.' },
      { ar:'قائدٌ مجاهدٌ ينصرُ المسلمينَ بلا طمع.', en:'A campaigning leader who supported Muslims without greed.' },
    ],
    timeline:[
      { when:{ar:'القيادة',en:'Leadership'}, what:{ar:'قادَ المرابطينَ ووحّدَ المغرب.',en:'He led the Almoravids and united the Maghrib.'} },
      { when:{ar:'مرّاكش',en:'Marrakesh'}, what:{ar:'بنى مدينةَ مرّاكشَ عاصمةً.',en:'He built Marrakesh as a capital.'} },
      { when:{ar:'الاستغاثة',en:'The Appeal'}, what:{ar:'استغاثَ به مسلمو الأندلسِ الضعفاء.',en:'The weakened Muslims of Andalusia appealed to him.'} },
      { when:{ar:'الزلّاقة',en:'Zallaqa'}, what:{ar:'عبرَ وانتصرَ في الزلّاقةِ نصراً عظيماً.',en:'He crossed and won a great victory at Zallaqa.'} },
      { when:{ar:'الإنقاذ',en:'The Rescue'}, what:{ar:'أنقذَ الأندلسَ من السقوطِ قروناً.',en:'He saved Andalusia from collapse for centuries.'} },
    ],
    ayah:{ ar:'﴿ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ﴾', ref:{ ar:'المائدة ٢', en:'Al-Ma\u2019ida 2' } },
  },

  story:[
    { title:{ ar:'قائدُ المرابطين', en:'Leader of the Almoravids' },
      pages:[
        { scene:'desert', text:{ ar:'كان <b>يوسفُ بنُ تاشفين</b> قائدَ المرابطينَ الزاهدَ التقيّ. وحّدَ المغربَ وبنى مرّاكش. ولمّا استغاثَ به مسلمو الأندلس، عبرَ إليهم وانتصرَ في معركةِ الزلّاقةِ نصراً عظيماً أنقذَ الأندلسَ من السقوطِ قروناً.',
          en:'<b>Yusuf ibn Tashfin</b> was the ascetic, pious leader of the Almoravids. He united the Maghrib and built Marrakesh. When the Muslims of Andalusia appealed to him, he crossed to them and triumphed at the Battle of Zallaqa — a great victory that saved Andalusia from collapse for centuries.' } } ] }
  ],

  traits:[
    { ar:'الزهد', en:'Asceticism' }, { ar:'النصرة', en:'Support of others' },
    { ar:'القيادة', en:'Leadership' }, { ar:'الإخلاص', en:'Sincerity' },
  ],
  lessons:[
    { icon:'🤝', color:'#5A5A2A', title:{ar:'انصرِ المحتاجين',en:'Support those in need'},
      body:{ar:'عبرَ يوسفُ البحرَ لينصرَ مسلمي الأندلسِ المستغيثين. نصرةُ المظلومِ والمحتاجِ واجبٌ وشرف.',en:'Yusuf crossed the sea to support the appealing Muslims of Andalusia. Supporting the wronged and needy is a duty and an honor.'},
      apply:{ar:'أنصرُ من يحتاجُ مساعدتي وأُغيثُ الملهوف.',en:'I support whoever needs my help and aid the distressed.'} },
    { icon:'🌿', color:'#7A7A4A', title:{ar:'ازهدْ مع القوّة',en:'Be ascetic despite power'},
      body:{ar:'عاشَ يوسفُ زاهداً يلبسُ الصوفَ رغمَ مُلكِه. القوّةُ لا تُفسِدُ القلبَ الزاهد.',en:'Yusuf lived ascetic, wearing wool despite his rule. Power does not corrupt an ascetic heart.'},
      apply:{ar:'لا أتعلّقُ بالترفِ مهما زادتْ نعمتي.',en:'I do not cling to luxury however my blessings increase.'} },
    { icon:'🎯', color:'#4A4A1A', title:{ar:'أخلِصْ لله لا لنفسِك',en:'Be sincere for Allah, not yourself'},
      body:{ar:'نصرَ يوسفُ الأندلسَ ابتغاءَ نصرةِ الدينِ لا طمعاً في مُلك. الإخلاصُ يجعلُ العملَ عظيماً.',en:'Yusuf supported Andalusia seeking to aid the religion, not coveting dominion. Sincerity makes a deed great.'},
      apply:{ar:'أعملُ الخيرَ لله لا لمصلحتي.',en:'I do good for Allah, not for my own interest.'} },
    { icon:'🧠', color:'#5A5A2A', title:{ar:'استشرِ الحكماء',en:'Consult the wise'},
      body:{ar:'كان يوسفُ يُقرِّبُ العلماءَ ويستشيرُهم. المشورةُ تُعينُ على الصواب.',en:'Yusuf drew scholars near and consulted them. Consultation helps one reach what is right.'},
      apply:{ar:'أستشيرُ أهلَ العلمِ والخبرةِ قبلَ القرار.',en:'I consult people of knowledge and experience before deciding.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ﴾', ref:{ ar:'المائدة ٢', en:'Al-Ma\u2019ida 2' } },
    dua:{ ar:'اللّهُمَّ ارزقني الزهدَ والإخلاصَ ونصرةَ المحتاجين', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أنصرُ المحتاجَ وأُغيثُ الملهوف.', en:'I support the needy and aid the distressed.' },
        { ar:'لا أتعلّقُ بالترفِ مهما زادتْ نعمتي.', en:'I don\u2019t cling to luxury however my blessings grow.' },
        { ar:'أُخلِصُ لله وأستشيرُ الحكماء.', en:'I am sincere for Allah and consult the wise.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'أيَّ دولةٍ قادَ يوسفُ بنُ تاشفين؟',en:'Which state did Yusuf ibn Tashfin lead?'},
          options:[{ar:'دولةَ المرابطين',en:'The Almoravid state'},{ar:'الدولةَ العثمانية',en:'The Ottoman state'},{ar:'الدولةَ العبّاسية',en:'The Abbasid state'}], answer:0 },
        { q:{ar:'في أيِّ معركةٍ أنقذَ الأندلس؟',en:'In which battle did he save Andalusia?'},
          options:[{ar:'الزلّاقة',en:'Zallaqa'},{ar:'بدر',en:'Badr'},{ar:'حطّين',en:'Hattin'}], answer:0 },
        { q:{ar:'كيف عاشَ يوسفُ رغمَ مُلكِه؟',en:'How did Yusuf live despite his rule?'},
          options:[{ar:'زاهداً ببساطة',en:'Ascetic and simply'},{ar:'في ترفٍ كبير',en:'In great luxury'},{ar:'في قصورٍ فخمة',en:'In lavish palaces'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'يوسفُ بنُ تاشفين قائدُ المرابطين.',en:'Yusuf ibn Tashfin was the leader of the Almoravids.'}, t:true },
        { statement:{ar:'أنقذَ الأندلسَ بانتصارِه في الزلّاقة.',en:'He saved Andalusia with his victory at Zallaqa.'}, t:true },
        { statement:{ar:'عاشَ في ترفٍ وأهملَ المسلمين.',en:'He lived in luxury and neglected the Muslims.'}, t:false },
        { statement:{ar:'بنى مدينةَ مرّاكش.',en:'He built the city of Marrakesh.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'المرابطون',en:'The Almoravids'}, b:{ar:'دولتُه التي قادها',en:'The state he led'} },
        { a:{ar:'الزلّاقة',en:'Zallaqa'}, b:{ar:'معركةُ إنقاذِ الأندلس',en:'The battle that saved Andalusia'} },
        { a:{ar:'مرّاكش',en:'Marrakesh'}, b:{ar:'مدينةٌ بناها',en:'A city he built'} },
        { a:{ar:'الزهد',en:'Asceticism'}, b:{ar:'صفتُه رغمَ المُلك',en:'His trait despite rule'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الزهدِ والنصرة', en:'Medal of Asceticism & Support' },
    stickers:[
      { icon:'shield', color:'#5A5A2A', title:{ar:'قائدُ المرابطين',en:'Leader of the Almoravids'} },
      { icon:'sword',  color:'#7A7A4A', title:{ar:'بطلُ الزلّاقة',en:'Hero of Zallaqa'} },
      { icon:'leaf',   color:'#4A4A1A', title:{ar:'الزاهدُ التقي',en:'The Pious Ascetic'} },
      { icon:'star',   color:'#5A5A2A', title:{ar:'منقذُ الأندلس',en:'Savior of Andalusia'} },
    ],
    moral:{ ar:'يوسفُ بنُ تاشفين قدوةٌ في الزهدِ والإخلاصِ ونصرةِ المسلمين — أنقذَ الأندلسَ ولم يطلبْ مُلكاً لنفسِه.',
      en:'Yusuf ibn Tashfin is a model of asceticism, sincerity, and supporting Muslims — he saved Andalusia without seeking dominion for himself.' },
    reflect:[
      { ar:'عبرَ يوسفُ البحرَ لينصرَ إخوانَه. كيف تُساعدُ من يحتاجُ نصرتَك؟', en:'Yusuf crossed the sea to support his brothers. How do you help those who need your aid?' },
      { ar:'عاشَ زاهداً رغمَ مُلكِه. هل تبتعدُ عن الترفِ وتقنعُ بالبساطة؟', en:'He lived ascetic despite his rule. Do you avoid luxury and find contentment in simplicity?' },
    ],
  },
};
