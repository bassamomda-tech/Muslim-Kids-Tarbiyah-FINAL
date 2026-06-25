// data/chapters/muslim.js — Scholars · الإمام مسلم (full chapter; Story tab uses data/stories/muslim.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.muslim = {
  id:'muslim', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ مسلم', en:'Muslim' },
  tag:{ ar:'صاحبُ الصحيح', en:'Author of the Sahih' },
  accent:'#3A5A2A', accent2:'#5A7A4A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ مسلمٌ رحمه الله عالمُ حديثٍ عظيم، ألّفَ «صحيحَ مسلم» ثاني أصحِّ كتابٍ بعدَ القرآن، وعُرِفَ بأدبِه مع شيوخِه. تعالَ نتعلّمْ من علمِه وأدبِه وحُسنِ ترتيبِه.',
    en:'Hello, hero! Imam Muslim, a great scholar of hadith who authored "Sahih Muslim," the second most authentic book after the Quran, and was known for his courtesy toward his teachers. Come, let\'s learn from his knowledge, courtesy, and excellent organization.' },

  knowledge:{
    didYouKnow:{ ar:'كان مسلمٌ تلميذاً للبخاريِّ ويُحبُّه ويُجِلُّه كثيراً، حتى قبّلَ بين عينيه وقال له: «دعني أُقبِّلْ قدميك يا أستاذَ الأستاذين»!',
      en:'Muslim was a student of al-Bukhari and loved and revered him greatly — he even kissed his forehead and said: "Let me kiss your feet, O teacher of teachers!"' },
    who:{ ar:'هو <b>مسلمُ بنُ الحجّاج</b> النيسابوري، من أعظمِ علماءِ الحديثِ بعدَ البخاري. وُلِدَ في <b>نيسابور</b>، ورحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرة. كان <b>تلميذاً للإمامِ البخاريِّ</b> يُحبُّه ويُجِلُّه. ألّفَ كتابَ <b>«صحيحِ مسلم»</b>، وهو ثاني أصحِّ كتابٍ بعدَ القرآنِ الكريم بعدَ صحيحِ البخاري. وامتازَ كتابُه بـ<b>حُسنِ الترتيبِ وجمعِ طرقِ الحديثِ في موضعٍ واحد</b>، مما سهّلَ على الناسِ الاستفادةَ منه. كان <b>أديباً متواضعاً ورِعاً</b>، شديدَ الدقّةِ في انتقاءِ الأحاديث. قضى حياتَه في خدمةِ سنّةِ النبيِّ ﷺ.',
      en:'He is <b>Muslim ibn al-Hajjaj</b> an-Nisaburi, among the greatest scholars of hadith after al-Bukhari. He was born in <b>Nishapur</b> and traveled to many lands seeking hadith. He was a <b>student of Imam al-Bukhari</b>, loving and revering him. He authored the book <b>"Sahih Muslim,"</b> the second most authentic book after the Quran, following Sahih al-Bukhari. His book was distinguished by <b>excellent organization and gathering the various chains of a hadith in one place</b>, making it easy for people to benefit from. He was <b>courteous, humble, and scrupulous</b>, extremely precise in selecting hadiths. He spent his life serving the Prophet\u2019s ﷺ Sunnah.' },
    facts:[
      { ar:'من أعظمِ علماءِ الحديثِ بعدَ البخاري.', en:'Among the greatest scholars of hadith after al-Bukhari.' },
      { ar:'ألّفَ «صحيحَ مسلم» ثاني أصحِّ كتابٍ بعدَ القرآن.', en:'He authored "Sahih Muslim," the second most authentic book after the Quran.' },
      { ar:'كان تلميذاً للبخاريِّ يُحبُّه ويُجِلُّه.', en:'He was a student of al-Bukhari, loving and revering him.' },
      { ar:'امتازَ كتابُه بحُسنِ الترتيبِ وجمعِ الطرق.', en:'His book was distinguished by excellent organization and gathering chains.' },
      { ar:'كان أديباً متواضعاً ورِعاً دقيقاً.', en:'He was courteous, humble, scrupulous, and precise.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'وُلِدَ في نيسابورَ ونشأَ محبّاً للعلم.',en:'He was born in Nishapur and grew up loving knowledge.'} },
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ في طلبِ الحديثِ بلداناً كثيرة.',en:'He traveled to many lands seeking hadith.'} },
      { when:{ar:'البخاري',en:'Al-Bukhari'}, what:{ar:'لازمَ البخاريَّ وأحبَّه وأجلَّه.',en:'He kept company with al-Bukhari, loving and revering him.'} },
      { when:{ar:'الصحيح',en:'The Sahih'}, what:{ar:'ألّفَ «صحيحَ مسلم» مرتّباً منقّحاً.',en:'He authored "Sahih Muslim," organized and refined.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'صارَ كتابُه مرجعاً ثانياً في الحديث.',en:'His book became a second reference in hadith.'} },
    ],
    ayah:{ ar:'﴿ وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۝ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ ﴾', ref:{ ar:'النجم ٣-٤', en:'An-Najm 3-4' } },
  },

  story:[
    { title:{ ar:'صاحبُ الصحيح', en:'Author of the Sahih' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ مسلم</b> من أعظمِ علماءِ الحديثِ بعدَ البخاري، وتلميذاً له يُحبُّه ويُجِلُّه. ألّفَ «صحيحَ مسلم» ثاني أصحِّ كتابٍ بعدَ القرآن، وامتازَ بحُسنِ الترتيب. كان أديباً متواضعاً ورِعاً، قضى حياتَه في خدمةِ سنّةِ النبيِّ ﷺ.',
          en:'<b>Imam Muslim</b> was among the greatest scholars of hadith after al-Bukhari, and his student who loved and revered him. He authored "Sahih Muslim," the second most authentic book after the Quran, distinguished by its excellent organization. He was courteous, humble, and scrupulous, spending his life serving the Prophet\u2019s ﷺ Sunnah.' } } ] }
  ],

  traits:[
    { ar:'العلم', en:'Knowledge' }, { ar:'الأدب', en:'Courtesy' },
    { ar:'الدقّة', en:'Precision' }, { ar:'حُسنُ الترتيب', en:'Fine organization' },
  ],
  lessons:[
    { icon:'🙏', color:'#3A5A2A', title:{ar:'أحبَّ معلّمَك وأجلَّه',en:'Love and revere your teacher'},
      body:{ar:'أحبَّ مسلمٌ شيخَه البخاريَّ وأجلَّه غايةَ الإجلال. توقيرُ المعلّمِ من أدبِ طالبِ العلم.',en:'Muslim loved and deeply revered his teacher al-Bukhari. Honoring one\u2019s teacher is part of the etiquette of a knowledge-seeker.'},
      apply:{ar:'أُحِبُّ معلّميَّ وأُوقِّرُهم وأشكرُهم.',en:'I love my teachers, honor them, and thank them.'} },
    { icon:'📂', color:'#5A7A4A', title:{ar:'رتّبْ عملَك بإتقان',en:'Organize your work with care'},
      body:{ar:'رتّبَ مسلمٌ كتابَه ترتيباً بديعاً سهّلَ على الناسِ الاستفادة. حُسنُ الترتيبِ يُضاعِفُ النفع.',en:'Muslim organized his book beautifully, easing people\u2019s benefit. Fine organization multiplies the benefit.'},
      apply:{ar:'أُرتِّبُ أعمالي وأغراضي ليسهلَ نفعُها.',en:'I organize my work and things so their benefit is easy.'} },
    { icon:'🔍', color:'#2A4A1A', title:{ar:'تحرَّ الدقّةَ والصدق',en:'Pursue precision and truthfulness'},
      body:{ar:'كان مسلمٌ دقيقاً لا يقبلُ إلّا الحديثَ الصحيح. الدقّةُ في العلمِ تحفظُ الحقّ.',en:'Muslim was precise, accepting only authentic hadith. Precision in knowledge protects the truth.'},
      apply:{ar:'أتحرّى الدقّةَ والصدقَ فيما أقولُ وأنقل.',en:'I pursue precision and truthfulness in what I say and transmit.'} },
    { icon:'🌿', color:'#3A5A2A', title:{ar:'تواضعْ مع العلم',en:'Be humble with knowledge'},
      body:{ar:'كان مسلمٌ متواضعاً رغمَ علمِه العظيم. التواضعُ يرفعُ العالمَ ويُحبِّبُه للناس.',en:'Muslim was humble despite his great knowledge. Humility elevates a scholar and endears him to people.'},
      apply:{ar:'أتواضعُ ولا أتكبّرُ بما أتعلّم.',en:'I stay humble and am not arrogant about what I learn.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۝ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ ﴾', ref:{ ar:'النجم ٣-٤', en:'An-Najm 3-4' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ والأدبَ مع معلّميَّ والدقّةَ في القول', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُحِبُّ معلّميَّ وأُوقِّرُهم وأشكرُهم.', en:'I love my teachers, honor them, and thank them.' },
        { ar:'أُرتِّبُ عملي بإتقانٍ لينفعَ غيري.', en:'I organize my work with care so it benefits others.' },
        { ar:'أتحرّى الدقّةَ والصدقَ وأتواضع.', en:'I pursue precision and truthfulness and stay humble.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما الكتابُ الذي ألّفه الإمامُ مسلم؟',en:'What book did Imam Muslim author?'},
          options:[{ar:'صحيحُ مسلم',en:'Sahih Muslim'},{ar:'الموطّأ',en:'Al-Muwatta'},{ar:'المسند',en:'Al-Musnad'}], answer:0 },
        { q:{ar:'ما مرتبةُ «صحيحِ مسلم» في الصحّة؟',en:'What is the rank of "Sahih Muslim" in authenticity?'},
          options:[{ar:'ثاني أصحِّ كتابٍ بعدَ القرآن',en:'The second most authentic after the Quran'},{ar:'الأخير',en:'The last'},{ar:'لا قيمةَ له',en:'Of no value'}], answer:0 },
        { q:{ar:'من كان شيخُ مسلمٍ الذي أحبَّه وأجلَّه؟',en:'Who was Muslim\u2019s teacher whom he loved and revered?'},
          options:[{ar:'الإمامُ البخاري',en:'Imam al-Bukhari'},{ar:'أبو جهل',en:'Abu Jahl'},{ar:'الحجّاج',en:'Al-Hajjaj'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'الإمامُ مسلمٌ ألّفَ «صحيحَ مسلم».',en:'Imam Muslim authored "Sahih Muslim."'}, t:true },
        { statement:{ar:'كان تلميذاً للبخاريِّ يُجِلُّه.',en:'He was a student of al-Bukhari who revered him.'}, t:true },
        { statement:{ar:'كان متكبّراً يحتقرُ شيوخَه.',en:'He was arrogant and despised his teachers.'}, t:false },
        { statement:{ar:'امتازَ كتابُه بحُسنِ الترتيب.',en:'His book was distinguished by fine organization.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'صحيحُ مسلم',en:'Sahih Muslim'}, b:{ar:'ثاني أصحِّ كتابٍ بعدَ القرآن',en:'Second most authentic after the Quran'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'شيخُه الذي أجلَّه',en:'His teacher whom he revered'} },
        { a:{ar:'نيسابور',en:'Nishapur'}, b:{ar:'مدينةُ مولدِه',en:'His birthplace'} },
        { a:{ar:'حُسنُ الترتيب',en:'Fine organization'}, b:{ar:'ميزةُ كتابِه',en:'A feature of his book'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحديثِ والأدب', en:'Medal of Hadith & Courtesy' },
    stickers:[
      { icon:'book',  color:'#3A5A2A', title:{ar:'صاحبُ الصحيح',en:'Author of the Sahih'} },
      { icon:'gem',   color:'#5A7A4A', title:{ar:'حافظُ الحديث',en:'Memorizer of Hadith'} },
      { icon:'crescent',color:'#2A4A1A', title:{ar:'الأديبُ المتواضع',en:'The Courteous & Humble'} },
      { icon:'star',  color:'#3A5A2A', title:{ar:'تلميذُ البخاري',en:'Student of al-Bukhari'} },
    ],
    moral:{ ar:'الإمامُ مسلمٌ قدوةٌ في العلمِ والأدبِ والدقّة — أحبَّ معلّمَه وأتقنَ عملَه وخدمَ سنّةَ النبيِّ ﷺ.',
      en:'Imam Muslim is a model of knowledge, courtesy, and precision — he loved his teacher, perfected his work, and served the Prophet\u2019s ﷺ Sunnah.' },
    reflect:[
      { ar:'أحبَّ مسلمٌ شيخَه البخاريَّ وأجلَّه. كيف تُوقِّرُ معلّميك وتشكرُهم؟', en:'Muslim loved and revered his teacher al-Bukhari. How do you honor and thank your teachers?' },
      { ar:'رتّبَ كتابَه بإتقانٍ لينفعَ الناس. كيف تُنظِّمُ عملَك ليسهلَ نفعُه؟', en:'He organized his book carefully to benefit people. How do you organize your work so its benefit is easy?' },
    ],
  },
};
