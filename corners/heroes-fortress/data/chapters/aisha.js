// data/chapters/aisha.js — Heroes · عائشةُ بنتُ أبي بكر (full chapter; Story tab uses data/stories/aisha.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · صحيح البخاري ومسلم
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.aisha = {
  id:'aisha', era:'heroes', icon:'gem',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'عائشةُ بنتُ أبي بكر', en:'A\u2019isha bint Abi Bakr' },
  tag:{ ar:'الفقيهةُ العالمة', en:'The learned jurist' },
  accent:'#7A4FA0', accent2:'#9A6FC0',
  greeting:{ ar:'أهلاً يا بطل! عائشةُ بنتُ أبي بكرٍ رضي الله عنها أمُّ المؤمنينَ وأعلمُ نساءِ الأمّة، حفظتْ آلافَ الأحاديثِ وعلّمتِ الصحابة. تعالَ نتعلّمْ من علمِها وذكائِها.',
    en:'Hello, hero! A\u2019isha bint Abi Bakr, Mother of the Believers and the most learned woman of the nation, who preserved thousands of hadiths and taught the companions. Come, let\'s learn from her knowledge and intelligence.' },

  knowledge:{
    didYouKnow:{ ar:'كان كبارُ الصحابةِ يرجعونَ إلى عائشةَ في مسائلِ الدينِ، وروتْ أكثرَ من ألفي حديثٍ عن النبيِّ ﷺ.',
      en:'Senior companions would turn to A\u2019isha on matters of religion, and she narrated more than two thousand hadiths from the Prophet ﷺ.' },
    who:{ ar:'هي <b>عائشةُ بنتُ أبي بكرٍ الصدّيق</b>، أمُّ المؤمنين، وزوجةُ النبيِّ ﷺ المحبّبةُ إليه. كانت <b>ذكيّةً سريعةَ الحفظ</b> قويّةَ الفهم، نشأتْ في بيتِ النبوّةِ فحملتِ العلمَ الكثير. صارتْ من <b>أعلمِ الصحابةِ بالفقهِ والتفسيرِ والحديثِ والشِّعرِ والطب</b>، وروتْ أكثرَ من <b>ألفي حديث</b>. كان كبارُ الصحابةِ يسألونها ويأخذونَ عنها. برّأها اللهُ من فوقِ سبعِ سماواتٍ في القرآن. عاشتْ معلّمةً للأمّةِ بعدَ النبيِّ ﷺ سنينَ طويلة.',
      en:'She is <b>A\u2019isha bint Abi Bakr as-Siddiq</b>, Mother of the Believers and the Prophet\u2019s ﷺ beloved wife. She was <b>intelligent, quick to memorize</b>, and deep in understanding; she grew up in the household of prophethood and carried much knowledge. She became among the <b>most learned companions in jurisprudence, exegesis, hadith, poetry, and medicine</b>, and narrated more than <b>two thousand hadiths</b>. Senior companions would ask her and learn from her. Allah declared her innocence from above the seven heavens in the Quran. She lived as a teacher of the nation for long years after the Prophet ﷺ.' },
    facts:[
      { ar:'أمُّ المؤمنينَ وأعلمُ نساءِ الأمّة.', en:'Mother of the Believers and the most learned woman of the nation.' },
      { ar:'روتْ أكثرَ من ألفي حديثٍ عن النبيِّ ﷺ.', en:'She narrated more than two thousand hadiths from the Prophet ﷺ.' },
      { ar:'كان كبارُ الصحابةِ يرجعونَ إليها في العلم.', en:'Senior companions turned to her on matters of knowledge.' },
      { ar:'عالمةٌ بالفقهِ والتفسيرِ والحديثِ والشِّعرِ والطب.', en:'Learned in jurisprudence, exegesis, hadith, poetry, and medicine.' },
      { ar:'برّأها اللهُ في القرآنِ من فوقِ سبعِ سماوات.', en:'Allah declared her innocence in the Quran from above seven heavens.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأتْ في بيتِ أبي بكرٍ ثمّ بيتِ النبوّة.',en:'She grew up in Abu Bakr\u2019s home, then the household of prophethood.'} },
      { when:{ar:'الحفظ',en:'Memorization'}, what:{ar:'حفظتِ العلمَ الكثيرَ بذكائِها.',en:'She memorized much knowledge through her intelligence.'} },
      { when:{ar:'البراءة',en:'Her Innocence'}, what:{ar:'برّأها اللهُ في القرآنِ الكريم.',en:'Allah declared her innocence in the Quran.'} },
      { when:{ar:'العلم',en:'Knowledge'}, what:{ar:'صارتْ من أعلمِ الصحابةِ وأفقهِهم.',en:'She became among the most learned of the companions.'} },
      { when:{ar:'التعليم',en:'Teaching'}, what:{ar:'علّمتِ الأمّةَ سنينَ بعدَ النبيِّ ﷺ.',en:'She taught the nation for years after the Prophet ﷺ.'} },
    ],
    ayah:{ ar:'﴿ أُولَٰئِكَ مُبَرَّءُونَ مِمَّا يَقُولُونَ ۖ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ ﴾', ref:{ ar:'النور ٢٦', en:'An-Nur 26' } },
  },

  story:[
    { title:{ ar:'الفقيهةُ العالمة', en:'The Learned Jurist' },
      pages:[
        { scene:'mihrab', text:{ ar:'كانت <b>عائشةُ بنتُ أبي بكر</b> أمَّ المؤمنينَ وأعلمَ نساءِ الأمّة. حفظتْ أكثرَ من ألفي حديثٍ، وكان كبارُ الصحابةِ يرجعونَ إليها في الفقهِ والتفسيرِ والحديث. برّأها اللهُ في القرآن، وعلّمتِ الأمّةَ سنينَ طويلة.',
          en:'<b>A\u2019isha bint Abi Bakr</b> was Mother of the Believers and the most learned woman of the nation. She preserved more than two thousand hadiths, and senior companions turned to her in jurisprudence, exegesis, and hadith. Allah declared her innocence in the Quran, and she taught the nation for long years.' } } ] }
  ],

  traits:[
    { ar:'العلم', en:'Knowledge' }, { ar:'الذكاء', en:'Intelligence' },
    { ar:'الحفظ', en:'Memorization' }, { ar:'التعليم', en:'Teaching' },
  ],
  lessons:[
    { icon:'📚', color:'#7A4FA0', title:{ar:'اطلبِ العلمَ واحفظْه',en:'Seek and preserve knowledge'},
      body:{ar:'حفظتْ عائشةُ آلافَ الأحاديثِ بذكائِها وحرصِها. طلبُ العلمِ شرفٌ للرجالِ والنساء.',en:'A\u2019isha preserved thousands of hadiths through her intelligence and diligence. Seeking knowledge is an honor for men and women alike.'},
      apply:{ar:'أحرصُ على العلمِ وأحفظُ ما أتعلّم.',en:'I pursue knowledge and retain what I learn.'} },
    { icon:'❓', color:'#9A6FC0', title:{ar:'اسألْ لتفهم',en:'Ask in order to understand'},
      body:{ar:'كانت عائشةُ كثيرةَ السؤالِ حتى تفهمَ الأمرَ على وجهِه. السؤالُ مفتاحُ العلم.',en:'A\u2019isha asked many questions until she understood matters fully. Asking is the key to knowledge.'},
      apply:{ar:'أسألُ عمّا لا أفهمُه ولا أستحي.',en:'I ask about what I don\u2019t understand without shyness.'} },
    { icon:'🎓', color:'#5A3580', title:{ar:'علّمْ غيرَك',en:'Teach others'},
      body:{ar:'علّمتْ عائشةُ الصحابةَ والتابعينَ سنينَ طويلة. خيرُ العلمِ ما نُشِرَ ونُفِعَ به.',en:'A\u2019isha taught the companions and successors for long years. The best knowledge is that which is spread and benefits others.'},
      apply:{ar:'أُشارِكُ علمي مع من حولي.',en:'I share my knowledge with those around me.'} },
    { icon:'🛡️', color:'#7A4FA0', title:{ar:'الصبرُ على الابتلاء',en:'Patience through trials'},
      body:{ar:'صبرتْ عائشةُ على حادثةِ الإفكِ حتى برّأها اللهُ من فوقِ سبعِ سماوات. الصبرُ يعقبُه الفرج.',en:'A\u2019isha endured the slander until Allah declared her innocence from above the seven heavens. Patience is followed by relief.'},
      apply:{ar:'أصبِرُ وأثقُ أنّ اللهَ يُظهِرُ الحق.',en:'I am patient, trusting Allah will make the truth clear.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ أُولَٰئِكَ مُبَرَّءُونَ مِمَّا يَقُولُونَ ﴾', ref:{ ar:'النور ٢٦', en:'An-Nur 26' } },
    dua:{ ar:'رَّبِّ زِدْنِي عِلْمًا واجعلني ممّن يتعلّمُ ويُعلِّم', ref:{ ar:'طه ١١٤', en:'Ta-Ha 114' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أطلبُ العلمَ وأحفظُ ما أتعلّم.', en:'I seek knowledge and retain what I learn.' },
        { ar:'أسألُ لأفهمَ ولا أستحي من السؤال.', en:'I ask to understand and am not shy to ask.' },
        { ar:'أُعلِّمُ غيري وأصبِرُ على الابتلاء.', en:'I teach others and am patient through trials.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ صفةٍ اشتهرتْ عائشةُ رضي الله عنها؟',en:'What was A\u2019isha known for?'},
          options:[{ar:'العلمِ والفقه',en:'Knowledge and jurisprudence'},{ar:'التجارة',en:'Trade'},{ar:'الفروسية',en:'Horsemanship'}], answer:0 },
        { q:{ar:'كم حديثاً روتْ تقريباً عن النبيِّ ﷺ؟',en:'About how many hadiths did she narrate from the Prophet ﷺ?'},
          options:[{ar:'أكثرَ من ألفي حديث',en:'More than two thousand'},{ar:'عشرة',en:'Ten'},{ar:'مئة',en:'A hundred'}], answer:0 },
        { q:{ar:'بِمَ أكرمها اللهُ في حادثةِ الإفك؟',en:'How did Allah honor her in the incident of slander?'},
          options:[{ar:'برّأها في القرآنِ الكريم',en:'He declared her innocence in the Quran'},{ar:'أعطاها مالاً',en:'He gave her wealth'},{ar:'جعلها ملكة',en:'He made her a queen'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'عائشةُ من أعلمِ الصحابةِ بالفقهِ والحديث.',en:'A\u2019isha was among the most learned companions in jurisprudence and hadith.'}, t:true },
        { statement:{ar:'كان كبارُ الصحابةِ يرجعونَ إليها في العلم.',en:'Senior companions turned to her on knowledge.'}, t:true },
        { statement:{ar:'كانت تكرهُ العلمَ ولا تسأل.',en:'She hated knowledge and never asked.'}, t:false },
        { statement:{ar:'برّأها اللهُ في القرآنِ الكريم.',en:'Allah declared her innocence in the Quran.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الفقيهةُ العالمة',en:'The learned jurist'}, b:{ar:'لقبُ عائشة',en:'A\u2019isha\u2019s title'} },
        { a:{ar:'ألفا حديث',en:'Two thousand hadiths'}, b:{ar:'روتْها عن النبيِّ ﷺ',en:'She narrated them from the Prophet ﷺ'} },
        { a:{ar:'سورةُ النور',en:'Surat an-Nur'}, b:{ar:'برّأها اللهُ فيها',en:'Allah cleared her in it'} },
        { a:{ar:'الصحابة',en:'The companions'}, b:{ar:'كانوا يأخذونَ عنها العلم',en:'They learned knowledge from her'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ العلمِ والفقه', en:'Medal of Knowledge & Jurisprudence' },
    stickers:[
      { icon:'gem',   color:'#7A4FA0', title:{ar:'الفقيهةُ العالمة',en:'The Learned Jurist'} },
      { icon:'book',  color:'#9A6FC0', title:{ar:'راويةُ الحديث',en:'Narrator of Hadith'} },
      { icon:'light', color:'#5A3580', title:{ar:'برّأها القرآن',en:'Cleared by the Quran'} },
      { icon:'star',  color:'#7A4FA0', title:{ar:'معلّمةُ الأمّة',en:'Teacher of the Nation'} },
    ],
    moral:{ ar:'عائشةُ قدوةٌ في العلمِ والذكاءِ والتعليمِ والصبر — أعلمُ نساءِ الأمّةِ ومعلّمةُ أجيالِها.',
      en:'A\u2019isha is a model of knowledge, intelligence, teaching, and patience — the most learned woman of the nation and teacher of its generations.' },
    reflect:[
      { ar:'حفظتْ عائشةُ آلافَ الأحاديثِ بذكائِها. كيف تحرصُ على طلبِ العلم؟', en:'A\u2019isha preserved thousands of hadiths through her intelligence. How do you pursue knowledge?' },
      { ar:'علّمتِ الأمّةَ ما تعلّمتْ. هل تُشارِكُ ما تعرفُه مع غيرِك؟', en:'She taught the nation what she learned. Do you share what you know with others?' },
    ],
  },
};
