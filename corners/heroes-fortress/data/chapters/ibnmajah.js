// data/chapters/ibnmajah.js — Scholars · الإمام ابن ماجه (full chapter; Story tab uses data/stories/ibnmajah.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibnmajah = {
  id:'ibnmajah', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ ابنُ ماجه', en:'Ibn Majah' },
  tag:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
  accent:'#2A5A5A', accent2:'#4A7A7A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ ابنُ ماجه رحمه الله من أئمّةِ الحديث، صاحبُ كتابِ «السنن» الذي يُكمِلُ الكتبَ الستّة، رحلَ كثيراً في طلبِ العلم. تعالَ نتعلّمْ من اجتهادِه وحرصِه.',
    en:'Hello, hero! Imam Ibn Majah, one of the imams of hadith, author of "the Sunan" that completes the six books, who traveled much seeking knowledge. Come, let\'s learn from his diligence and dedication.' },

  knowledge:{
    didYouKnow:{ ar:'كتابُ «سننِ ابنِ ماجه» هو سادسُ الكتبِ الستّةِ المعتمدةِ في الحديث، ورحلَ ابنُ ماجه في طلبِ العلمِ إلى العراقِ والشامِ ومصرَ والحجازِ وغيرِها.',
      en:'"Sunan Ibn Majah" is the sixth of the six accepted books of hadith, and Ibn Majah traveled to seek knowledge in Iraq, Sham, Egypt, the Hijaz, and beyond.' },
    who:{ ar:'هو <b>محمدُ بنُ يزيدَ بنِ ماجه</b> القزويني، أحدُ أئمّةِ الحديث، وصاحبُ كتابِ <b>«السنن»</b> الذي يُعَدُّ <b>سادسَ الكتبِ الستّة</b> المعتمدةِ عند المسلمين. وُلِدَ في <b>قزوين</b> (بلادِ فارس)، ورحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرةٍ: العراقِ والشامِ ومصرَ والحجاز، يجمعُ الحديثَ من الشيوخ. كان <b>عالماً مفسّراً مؤرّخاً</b> إلى جانبِ علمِه بالحديث. رتّبَ كتابَه ترتيباً حسناً على أبوابِ الفقهِ ليسهلَ على الناسِ الرجوعُ إليه. كان <b>مجتهداً صادقاً</b> أفنى عمرَه في خدمةِ سنّةِ النبيِّ ﷺ.',
      en:'He is <b>Muhammad ibn Yazid ibn Majah</b> al-Qazwini, one of the imams of hadith and author of the book <b>"the Sunan,"</b> considered the <b>sixth of the six books</b> accepted among Muslims. He was born in <b>Qazwin</b> (Persia) and traveled to many lands seeking hadith: Iraq, Sham, Egypt, and the Hijaz, gathering hadith from teachers. He was a <b>scholar, exegete, and historian</b> alongside his knowledge of hadith. He organized his book well according to the chapters of jurisprudence so people could easily refer to it. He was a <b>sincere, diligent man</b> who spent his life serving the Prophet\u2019s ﷺ Sunnah.' },
    facts:[
      { ar:'أحدُ أئمّةِ الحديثِ وصاحبُ «السنن».', en:'One of the imams of hadith and author of "the Sunan."' },
      { ar:'كتابُه سادسُ الكتبِ الستّةِ المعتمدة.', en:'His book is the sixth of the six accepted books.' },
      { ar:'رحلَ في طلبِ الحديثِ بلداناً كثيرة.', en:'He traveled to many lands seeking hadith.' },
      { ar:'كان عالماً مفسّراً مؤرّخاً.', en:'He was a scholar, exegete, and historian.' },
      { ar:'رتّبَ كتابَه على أبوابِ الفقهِ ليسهلَ الرجوعُ إليه.', en:'He organized his book by chapters of jurisprudence for easy reference.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ في قزوينَ محبّاً للعلم.',en:'He grew up in Qazwin, loving knowledge.'} },
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ في طلبِ الحديثِ بلداناً كثيرة.',en:'He traveled to many lands seeking hadith.'} },
      { when:{ar:'الجمع',en:'Gathering'}, what:{ar:'جمعَ الحديثَ من الشيوخِ بعناية.',en:'He gathered hadith from teachers carefully.'} },
      { when:{ar:'السنن',en:'The Sunan'}, what:{ar:'ألّفَ «السنن» سادسَ الكتبِ الستّة.',en:'He authored "the Sunan," the sixth of the six books.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'بقيَ كتابُه مرجعاً للأمّة.',en:'His book remained a reference for the nation.'} },
    ],
    ayah:{ ar:'﴿ وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ ﴾', ref:{ ar:'العنكبوت ٦', en:'Al-Ankabut 6' } },
  },

  story:[
    { title:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ ابنُ ماجه</b> من أئمّةِ الحديث، صاحبَ كتابِ «السنن» سادسِ الكتبِ الستّة. رحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرة، وكان عالماً مفسّراً مؤرّخاً. رتّبَ كتابَه ليسهلَ على الناسِ الرجوعُ إليه، وأفنى عمرَه في خدمةِ سنّةِ النبيِّ ﷺ.',
          en:'<b>Imam Ibn Majah</b> was one of the imams of hadith, author of "the Sunan," the sixth of the six books. He traveled to many lands seeking hadith and was a scholar, exegete, and historian. He organized his book for easy reference and spent his life serving the Prophet\u2019s ﷺ Sunnah.' } } ] }
  ],

  traits:[
    { ar:'الاجتهاد', en:'Diligence' }, { ar:'الرحلةُ في العلم', en:'Traveling for knowledge' },
    { ar:'حُسنُ الترتيب', en:'Fine organization' }, { ar:'الإخلاص', en:'Sincerity' },
  ],
  lessons:[
    { icon:'🧭', color:'#2A5A5A', title:{ar:'ارحلْ واجتهدْ في طلبِ العلم',en:'Travel and strive to seek knowledge'},
      body:{ar:'رحلَ ابنُ ماجه بلداناً كثيرةً ليجمعَ الحديث. طلبُ العلمِ يستحقُّ الجهدَ والسفر.',en:'Ibn Majah traveled to many lands to gather hadith. Seeking knowledge is worth effort and travel.'},
      apply:{ar:'أبذلُ الجهدَ في طلبِ العلمِ ولا أتكاسل.',en:'I exert effort to seek knowledge and don\u2019t grow lazy.'} },
    { icon:'📂', color:'#4A7A7A', title:{ar:'رتّبْ عملَك',en:'Organize your work'},
      body:{ar:'رتّبَ ابنُ ماجه كتابَه على أبوابِ الفقهِ ليسهلَ نفعُه. التنظيمُ يُضاعِفُ الفائدة.',en:'Ibn Majah organized his book by chapters of jurisprudence for easy benefit. Organization multiplies the benefit.'},
      apply:{ar:'أُرتِّبُ ما أعملُه ليسهلَ على غيري.',en:'I organize what I do so it\u2019s easy for others.'} },
    { icon:'📚', color:'#1A4A4A', title:{ar:'اجمعْ بين فنونِ العلم',en:'Combine fields of knowledge'},
      body:{ar:'كان ابنُ ماجه محدّثاً ومفسّراً ومؤرّخاً. التوسّعُ في العلمِ النافعِ خير.',en:'Ibn Majah was a hadith scholar, exegete, and historian. Broadening in beneficial knowledge is good.'},
      apply:{ar:'أتعلّمُ من فنونِ العلمِ النافعةِ ما أستطيع.',en:'I learn what I can of beneficial fields of knowledge.'} },
    { icon:'🤲', color:'#2A5A5A', title:{ar:'أخلِصْ في خدمةِ الدين',en:'Be sincere in serving the religion'},
      body:{ar:'أفنى ابنُ ماجه عمرَه في خدمةِ سنّةِ النبيِّ ﷺ بإخلاص. العملُ المخلصُ يبقى أثرُه.',en:'Ibn Majah spent his life serving the Prophet\u2019s ﷺ Sunnah sincerely. Sincere work leaves a lasting effect.'},
      apply:{ar:'أُخلِصُ عملي لله وأنفعُ به الدين.',en:'I make my work sincere for Allah and benefit the religion with it.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ ﴾', ref:{ ar:'العنكبوت ٦', en:'Al-Ankabut 6' } },
    dua:{ ar:'اللّهُمَّ ارزقني الاجتهادَ في طلبِ العلمِ والإخلاصَ في العمل', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أبذلُ الجهدَ في طلبِ العلم.', en:'I exert effort to seek knowledge.' },
        { ar:'أُرتِّبُ عملي ليسهلَ على غيري.', en:'I organize my work so it\u2019s easy for others.' },
        { ar:'أُخلِصُ عملي لله وأنفعُ به.', en:'I make my work sincere for Allah and benefit with it.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما الكتابُ الذي ألّفه ابنُ ماجه؟',en:'What book did Ibn Majah author?'},
          options:[{ar:'السنن',en:'The Sunan'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'ما ترتيبُ كتابِه بين الكتبِ الستّة؟',en:'What is his book\u2019s rank among the six books?'},
          options:[{ar:'سادسُها',en:'The sixth of them'},{ar:'أوّلُها',en:'The first'},{ar:'ليس منها',en:'Not among them'}], answer:0 },
        { q:{ar:'ماذا فعلَ ابنُ ماجه في طلبِ الحديث؟',en:'What did Ibn Majah do to seek hadith?'},
          options:[{ar:'رحلَ بلداناً كثيرةً يجمعُه',en:'He traveled to many lands gathering it'},{ar:'بقيَ في بيتِه',en:'He stayed at home'},{ar:'تركَ العلم',en:'He abandoned knowledge'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'ابنُ ماجه صاحبُ كتابِ «السنن».',en:'Ibn Majah was the author of "the Sunan."'}, t:true },
        { statement:{ar:'كتابُه سادسُ الكتبِ الستّة.',en:'His book is the sixth of the six books.'}, t:true },
        { statement:{ar:'لم يرحلْ ولم يجتهدْ في طلبِ العلم.',en:'He did not travel or strive to seek knowledge.'}, t:false },
        { statement:{ar:'كان عالماً مفسّراً مؤرّخاً.',en:'He was a scholar, exegete, and historian.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'السنن',en:'The Sunan'}, b:{ar:'كتابُه في الحديث',en:'His book of hadith'} },
        { a:{ar:'قزوين',en:'Qazwin'}, b:{ar:'مدينةُ مولدِه',en:'His birthplace'} },
        { a:{ar:'الكتبُ الستّة',en:'The six books'}, b:{ar:'كتابُه سادسُها',en:'His book is the sixth'} },
        { a:{ar:'الرحلة',en:'Travel'}, b:{ar:'جمعَ بها الحديث',en:'By it he gathered hadith'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الاجتهادِ والعلم', en:'Medal of Diligence & Knowledge' },
    stickers:[
      { icon:'book',  color:'#2A5A5A', title:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
      { icon:'compass',color:'#4A7A7A', title:{ar:'الرحّالةُ في العلم',en:'The Traveler for Knowledge'} },
      { icon:'gem',   color:'#1A4A4A', title:{ar:'المحدّثُ المفسّر',en:'The Hadith Scholar & Exegete'} },
      { icon:'star',  color:'#2A5A5A', title:{ar:'المجتهدُ المخلص',en:'The Sincere & Diligent'} },
    ],
    moral:{ ar:'الإمامُ ابنُ ماجه قدوةٌ في الاجتهادِ والرحلةِ في طلبِ العلمِ والإخلاص — أكملَ الكتبَ الستّةَ بكتابٍ نفعَ الأمّة.',
      en:'Imam Ibn Majah is a model of diligence, traveling for knowledge, and sincerity — he completed the six books with a work that benefited the nation.' },
    reflect:[
      { ar:'رحلَ ابنُ ماجه بلداناً كثيرةً لطلبِ العلم. كيف تجتهدُ أنت في تعلّمِك؟', en:'Ibn Majah traveled to many lands to seek knowledge. How do you strive in your learning?' },
      { ar:'رتّبَ كتابَه ليسهلَ نفعُه. كيف تُنظِّمُ عملَك ليستفيدَ منه غيرُك؟', en:'He organized his book for easy benefit. How do you organize your work so others benefit?' },
    ],
  },
};
