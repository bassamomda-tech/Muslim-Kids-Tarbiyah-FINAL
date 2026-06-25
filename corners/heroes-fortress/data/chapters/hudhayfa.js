// data/chapters/hudhayfa.js — Heroes · حذيفةُ بنُ اليمان (full chapter; Story tab uses data/stories/hudhayfa.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.hudhayfa = {
  id:'hudhayfa', era:'heroes', icon:'whisper',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'حذيفةُ بنُ اليمان', en:'Hudhayfa ibn al-Yaman' },
  tag:{ ar:'صاحبُ سرِّ النبيِّ ﷺ', en:'Keeper of the Prophet\u2019s ﷺ secret' },
  accent:'#46566E', accent2:'#66768E',
  greeting:{ ar:'أهلاً يا بطل! حذيفةُ بنُ اليمانِ رضي الله عنه صاحبُ سرِّ النبيِّ ﷺ، أمينٌ كتومٌ شجاع، دخلَ معسكرَ الأعداءِ في ليلةٍ مظلمةٍ باردةٍ بأمرِ النبيِّ ﷺ. تعالَ نتعلّمْ من أمانتِه وشجاعتِه.',
    en:'Hello, hero! Hudhayfa ibn al-Yaman, keeper of the Prophet\u2019s ﷺ secret — trustworthy, discreet, and brave, who entered the enemy camp on a dark, cold night at the Prophet\u2019s ﷺ command. Come, let\'s learn from his trust and courage.' },

  knowledge:{
    didYouKnow:{ ar:'خصَّ النبيُّ ﷺ حذيفةَ بمعرفةِ أسماءِ المنافقين، فكان عمرُ يسألُه إذا ماتَ رجلٌ: هل يُصلّي عليه حذيفةُ أم لا؟',
      en:'The Prophet ﷺ entrusted Hudhayfa alone with the names of the hypocrites, so Umar would watch: if a man died, would Hudhayfa pray over him or not?' },
    who:{ ar:'هو <b>حذيفةُ بنُ اليمان</b> العَبسي، <b>صاحبُ سرِّ رسولِ الله ﷺ</b>. خصَّه النبيُّ ﷺ بأسرارٍ لم يُطلِعْ عليها غيرَه، ومنها أسماءُ المنافقين. كان <b>أميناً كتوماً شجاعاً</b>. في غزوةِ الأحزابِ أرسله النبيُّ ﷺ ليلاً ليأتيَه بخبرِ الأعداءِ في ليلةٍ شديدةِ البردِ والريح. قُتِلَ أبوه <b>اليمان</b> خطأً بأيدي المسلمينَ يومَ أُحُد فعفا عنهم وتصدّقَ بديتِه. كان كثيرَ السؤالِ عن الفتنِ والشرِّ ليتّقيَه. شارك في الفتوحِ وفتحَ بلاداً كثيرة.',
      en:'He is <b>Hudhayfa ibn al-Yaman</b> of the Abs tribe, <b>keeper of the Messenger\u2019s ﷺ secret</b>. The Prophet ﷺ entrusted him with secrets he told no one else, including the names of the hypocrites. He was <b>trustworthy, discreet, and brave</b>. At the Battle of the Confederates the Prophet ﷺ sent him out by night to bring news of the enemy on a bitterly cold, windy night. His father <b>al-Yaman</b> was killed by mistake by the Muslims at Uhud, and Hudhayfa forgave them and gave his blood-money in charity. He often asked about trials and evil so as to avoid them. He took part in the conquests and opened many lands.' },
    facts:[
      { ar:'صاحبُ سرِّ النبيِّ ﷺ وعالمُ المنافقين.', en:'Keeper of the Prophet\u2019s ﷺ secret and knower of the hypocrites.' },
      { ar:'أرسله النبيُّ ﷺ ليلاً لكشفِ خبرِ الأحزاب.', en:'The Prophet ﷺ sent him by night to scout the Confederates.' },
      { ar:'عفا عن قَتَلةِ أبيه خطأً وتصدّقَ بديتِه.', en:'He forgave his father\u2019s accidental killers and gave the blood-money in charity.' },
      { ar:'كان يسألُ عن الشرِّ ليتّقيَه لا عن الخيرِ فقط.', en:'He asked about evil to avoid it, not only about good.' },
      { ar:'شارك في الفتوحِ وفتحَ بلاداً كثيرة.', en:'He took part in the conquests and opened many lands.' },
    ],
    timeline:[
      { when:{ar:'الأمانة',en:'The Trust'}, what:{ar:'خصَّه النبيُّ ﷺ بسرِّ أسماءِ المنافقين.',en:'The Prophet ﷺ entrusted him with the hypocrites\u2019 names.'} },
      { when:{ar:'أُحُد',en:'Uhud'}, what:{ar:'قُتِلَ أبوه خطأً فعفا وتصدّقَ بديتِه.',en:'His father was killed by error; he forgave and gave the blood-money.'} },
      { when:{ar:'الأحزاب',en:'The Confederates'}, what:{ar:'دخلَ معسكرَ العدوِّ ليلاً وعادَ بالخبر.',en:'He entered the enemy camp by night and returned with news.'} },
      { when:{ar:'الفقه',en:'His Wisdom'}, what:{ar:'كان يسألُ عن الفتنِ ليجتنبَها.',en:'He asked about trials so as to avoid them.'} },
      { when:{ar:'الفتوح',en:'The Conquests'}, what:{ar:'فتحَ بلاداً كثيرةً في عهدِ عمر.',en:'He opened many lands in Umar\u2019s era.'} },
    ],
    ayah:{ ar:'﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾', ref:{ ar:'النساء ٥٨', en:'An-Nisa 58' } },
  },

  story:[
    { title:{ ar:'صاحبُ السر', en:'Keeper of the Secret' },
      pages:[
        { scene:'night', text:{ ar:'كان <b>حذيفةُ بنُ اليمان</b> صاحبَ سرِّ النبيِّ ﷺ، أميناً كتوماً شجاعاً. أرسله النبيُّ ﷺ ليلةَ الأحزابِ ليأتيَه بخبرِ العدوِّ فعادَ سالماً بالخبر. عفا عن قَتَلةِ أبيه خطأً، وكان يسألُ عن الشرِّ ليتّقيَه.',
          en:'<b>Hudhayfa ibn al-Yaman</b> was keeper of the Prophet\u2019s ﷺ secret — trustworthy, discreet, and brave. On the night of the Confederates the Prophet ﷺ sent him to bring news of the enemy, and he returned safely with it. He forgave his father\u2019s accidental killers and asked about evil so as to avoid it.' } } ] }
  ],

  traits:[
    { ar:'الأمانة', en:'Trustworthiness' }, { ar:'الكتمان', en:'Discretion' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'العفو', en:'Forgiveness' },
  ],
  lessons:[
    { icon:'🤐', color:'#46566E', title:{ar:'احفظِ السرَّ والأمانة',en:'Keep secrets and trusts'},
      body:{ar:'كان حذيفةُ صاحبَ سرِّ النبيِّ ﷺ لا يُفشيه. الأمينُ يحفظُ ما اؤتُمِنَ عليه.',en:'Hudhayfa kept the Prophet\u2019s ﷺ secret and never disclosed it. The trustworthy guard what they are entrusted with.'},
      apply:{ar:'أحفظُ سرَّ من ائتمنني ولا أُفشيه.',en:'I keep the secret of whoever trusts me and never reveal it.'} },
    { icon:'🌬️', color:'#66768E', title:{ar:'أقدِمْ على المهمّةِ الصعبة',en:'Take on the hard mission'},
      body:{ar:'دخلَ حذيفةُ معسكرَ العدوِّ في ليلةٍ باردةٍ مخيفةٍ طاعةً للنبيِّ ﷺ. البطلُ ينهضُ للمهمّةِ ولو شقّت.',en:'Hudhayfa entered the enemy camp on a cold, frightening night, obeying the Prophet ﷺ. A hero rises to the mission even when it is hard.'},
      apply:{ar:'أُؤدّي ما يُطلَبُ منّي بجدٍّ ولو كان صعباً.',en:'I carry out what is asked of me seriously, even if hard.'} },
    { icon:'🤲', color:'#36465E', title:{ar:'اعفُ عمّن أخطأ',en:'Forgive those who erred'},
      body:{ar:'عفا حذيفةُ عن قَتَلةِ أبيه خطأً وتصدّقَ بديتِه. العفوُ عند المقدرةِ من شيمِ الكرام.',en:'Hudhayfa forgave his father\u2019s accidental killers and gave the blood-money in charity. Forgiveness when able is a trait of the noble.'},
      apply:{ar:'أعفو عمّن أخطأَ في حقّي بلا قصد.',en:'I forgive those who wronged me unintentionally.'} },
    { icon:'🛡️', color:'#46566E', title:{ar:'اعرفِ الشرَّ لتتّقيَه',en:'Know evil to avoid it'},
      body:{ar:'كان حذيفةُ يسألُ عن الفتنِ والشرِّ ليتجنّبَها. معرفةُ الشرِّ تحفظُك من الوقوعِ فيه.',en:'Hudhayfa asked about trials and evil to avoid them. Knowing evil protects you from falling into it.'},
      apply:{ar:'أتعلّمُ ما يضرُّني لأبتعدَ عنه.',en:'I learn what harms me so I can stay away from it.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾', ref:{ ar:'النساء ٥٨', en:'An-Nisa 58' } },
    dua:{ ar:'اللّهُمَّ اجعلني أميناً حافظاً للسرِّ شجاعاً عفوّاً', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أحفظُ الأمانةَ والسرَّ ولا أُفشيه.', en:'I keep trusts and secrets and never reveal them.' },
        { ar:'أُقدِمُ على ما يُطلَبُ منّي بشجاعة.', en:'I take on what is asked of me with courage.' },
        { ar:'أعفو عمّن أخطأ وأتّقي الشر.', en:'I forgive those who erred and avoid evil.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ حذيفة؟',en:'What was Hudhayfa known as?'},
          options:[{ar:'صاحبُ سرِّ النبيِّ ﷺ',en:'Keeper of the Prophet\u2019s ﷺ secret'},{ar:'سيفُ الله',en:'The sword of Allah'},{ar:'ذو النورين',en:'Possessor of two lights'}], answer:0 },
        { q:{ar:'ماذا فعلَ حذيفةُ ليلةَ الأحزاب؟',en:'What did Hudhayfa do on the night of the Confederates?'},
          options:[{ar:'دخلَ معسكرَ العدوِّ وعادَ بالخبر',en:'Entered the enemy camp and returned with news'},{ar:'نام',en:'He slept'},{ar:'هرب',en:'He fled'}], answer:0 },
        { q:{ar:'كيف تصرّفَ حذيفةُ مع قَتَلةِ أبيه خطأً؟',en:'How did Hudhayfa treat his father\u2019s accidental killers?'},
          options:[{ar:'عفا عنهم وتصدّقَ بديتِه',en:'He forgave them and gave the blood-money in charity'},{ar:'انتقمَ منهم',en:'He took revenge'},{ar:'هجرَهم',en:'He shunned them'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'حذيفةُ صاحبُ سرِّ النبيِّ ﷺ.',en:'Hudhayfa was keeper of the Prophet\u2019s ﷺ secret.'}, t:true },
        { statement:{ar:'دخلَ معسكرَ العدوِّ ليلةَ الأحزاب.',en:'He entered the enemy camp on the night of the Confederates.'}, t:true },
        { statement:{ar:'أفشى أسرارَ النبيِّ ﷺ للناس.',en:'He revealed the Prophet\u2019s ﷺ secrets to people.'}, t:false },
        { statement:{ar:'عفا عن قَتَلةِ أبيه خطأً.',en:'He forgave his father\u2019s accidental killers.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'صاحبُ السر',en:'Keeper of the secret'}, b:{ar:'لقبُ حذيفة',en:'Hudhayfa\u2019s title'} },
        { a:{ar:'الأحزاب',en:'The Confederates'}, b:{ar:'دخلَ معسكرَهم ليلاً',en:'He entered their camp by night'} },
        { a:{ar:'المنافقون',en:'The hypocrites'}, b:{ar:'عرفَ أسماءَهم',en:'He knew their names'} },
        { a:{ar:'العفو',en:'Forgiveness'}, b:{ar:'عفا عن قَتَلةِ أبيه',en:'He forgave his father\u2019s killers'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الأمانةِ والسر', en:'Medal of Trust & Secrecy' },
    stickers:[
      { icon:'whisper', color:'#46566E', title:{ar:'صاحبُ السر',en:'Keeper of the Secret'} },
      { icon:'shield',  color:'#66768E', title:{ar:'كاشفُ الأحزاب',en:'Scout of the Confederates'} },
      { icon:'heart',   color:'#36465E', title:{ar:'العفوُّ الكريم',en:'The Forgiving Soul'} },
      { icon:'star',    color:'#46566E', title:{ar:'الأمينُ الكتوم',en:'The Discreet & Trusted'} },
    ],
    moral:{ ar:'حذيفةُ قدوةٌ في الأمانةِ وحفظِ السرِّ والشجاعةِ والعفو — حملَ أسرارَ النبيِّ ﷺ بأمانةٍ تامّة.',
      en:'Hudhayfa is a model of trust, discretion, courage, and forgiveness — he carried the Prophet\u2019s ﷺ secrets with complete fidelity.' },
    reflect:[
      { ar:'حفظَ حذيفةُ سرَّ النبيِّ ﷺ. هل أنت أمينٌ على ما يُؤتَمَنُ عليك؟', en:'Hudhayfa kept the Prophet\u2019s ﷺ secret. Are you trustworthy with what you are entrusted?' },
      { ar:'عفا عمّن قتلَ أباه خطأً. هل تعفو عمّن أخطأَ في حقِّك؟', en:'He forgave his father\u2019s accidental killers. Do you forgive those who wrong you by mistake?' },
    ],
  },
};
