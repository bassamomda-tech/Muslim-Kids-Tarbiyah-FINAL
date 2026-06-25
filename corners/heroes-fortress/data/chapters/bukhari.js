// data/chapters/bukhari.js — Scholars · الإمام البخاري (full chapter; Story tab uses data/stories/bukhari.js)
// Sources: سير أعلام النبلاء · هدي الساري · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.bukhari = {
  id:'bukhari', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ البخاري', en:'Al-Bukhari' },
  tag:{ ar:'أميرُ المؤمنينَ في الحديث', en:'Foremost in hadith' },
  accent:'#1E6A5A', accent2:'#3E8A7A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ البخاريُّ رحمه الله أعظمُ علماءِ الحديث، حفظَ مئاتِ الآلافِ من الأحاديثِ وألّفَ «صحيحَ البخاري» أصحَّ كتابٍ بعدَ القرآن. تعالَ نتعلّمْ من حفظِه وأمانتِه ودقّتِه.',
    en:'Hello, hero! Al-Bukhari, the greatest scholar of hadith, who memorized hundreds of thousands of hadiths and authored "Sahih al-Bukhari," the most authentic book after the Quran. Come, let\'s learn from his memory, trustworthiness, and precision.' },

  knowledge:{
    didYouKnow:{ ar:'حفظَ البخاريُّ نحوَ ثلاثِ مئةِ ألفِ حديث، وكان لا يكتبُ حديثاً في «صحيحِه» إلّا بعدَ أن يغتسلَ ويُصلّيَ ركعتينِ ويستخيرَ الله!',
      en:'Al-Bukhari memorized about three hundred thousand hadiths, and would not record a hadith in his "Sahih" until he had bathed, prayed two rak\u2019ahs, and sought Allah\u2019s guidance!' },
    who:{ ar:'هو <b>محمدُ بنُ إسماعيلَ البخاري</b>، أعظمُ علماءِ الحديثِ ولُقِّبَ بـ<b>«أميرِ المؤمنينَ في الحديث»</b>. وُلِدَ في <b>بخارى</b> (وسطِ آسيا)، وفقدَ بصرَه صغيراً ثمّ ردَّه اللهُ عليه ببركةِ دعاءِ أمِّه. وهبه اللهُ <b>ذاكرةً خارقة</b>، فحفظَ مئاتِ الآلافِ من الأحاديثِ بأسانيدِها. رحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرة، وكان <b>شديدَ الدقّةِ والتحرّي</b>، لا يقبلُ حديثاً إلّا إذا تأكّدَ من صحّتِه وصدقِ رواتِه. ألّفَ <b>«صحيحَ البخاري»</b>، أصحَّ كتابٍ بعدَ القرآنِ الكريم، في ستَّ عشرةَ سنةً من العملِ الدقيق. كان عابداً ورِعاً كريماً سخيّاً.',
      en:'He is <b>Muhammad ibn Isma\u2019il al-Bukhari</b>, the greatest scholar of hadith, titled <b>"Amir al-Mu\u2019minin in hadith" (Foremost in hadith)</b>. He was born in <b>Bukhara</b> (Central Asia), lost his sight as a child, then Allah restored it through the blessing of his mother\u2019s prayer. Allah gave him an <b>extraordinary memory</b>, so he memorized hundreds of thousands of hadiths with their chains. He traveled to many lands seeking hadith, and was <b>extremely precise and careful</b>, accepting a hadith only after verifying its authenticity and the truthfulness of its narrators. He authored <b>"Sahih al-Bukhari,"</b> the most authentic book after the Quran, over sixteen years of meticulous work. He was a devout, scrupulous, generous worshipper.' },
    facts:[
      { ar:'أعظمُ علماءِ الحديثِ وأميرُ المؤمنينَ فيه.', en:'The greatest scholar of hadith and "Foremost in hadith."' },
      { ar:'حفظَ مئاتِ الآلافِ من الأحاديثِ بأسانيدِها.', en:'He memorized hundreds of thousands of hadiths with their chains.' },
      { ar:'ألّفَ «صحيحَ البخاري» أصحَّ كتابٍ بعدَ القرآن.', en:'He authored "Sahih al-Bukhari," the most authentic book after the Quran.' },
      { ar:'كان شديدَ الدقّةِ والتحرّي في قبولِ الحديث.', en:'He was extremely precise and careful in accepting hadith.' },
      { ar:'كان يُصلّي ويستخيرُ قبلَ كتابةِ كلِّ حديث.', en:'He prayed and sought guidance before recording each hadith.' },
    ],
    timeline:[
      { when:{ar:'الطفولة',en:'Childhood'}, what:{ar:'فقدَ بصرَه صغيراً فردَّه اللهُ بدعاءِ أمِّه.',en:'He lost his sight young; Allah restored it by his mother\u2019s prayer.'} },
      { when:{ar:'الحفظ',en:'Memorization'}, what:{ar:'حفظَ مئاتِ الآلافِ من الأحاديث.',en:'He memorized hundreds of thousands of hadiths.'} },
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ في طلبِ الحديثِ بلداناً كثيرة.',en:'He traveled to many lands seeking hadith.'} },
      { when:{ar:'الصحيح',en:'The Sahih'}, what:{ar:'ألّفَ «الصحيح» في ستَّ عشرةَ سنة.',en:'He authored "the Sahih" over sixteen years.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'صارَ كتابُه مرجعَ الأمّةِ في الحديث.',en:'His book became the nation\u2019s reference in hadith.'} },
    ],
    ayah:{ ar:'﴿ وَإِنَّا لَهُ لَحَافِظُونَ ﴾', ref:{ ar:'الحجر ٩', en:'Al-Hijr 9' } },
  },

  story:[
    { title:{ ar:'أميرُ المؤمنينَ في الحديث', en:'Foremost in Hadith' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ البخاري</b> أعظمَ علماءِ الحديث، وهبه اللهُ ذاكرةً خارقةً فحفظَ مئاتِ الآلافِ من الأحاديث. رحلَ في طلبِها، وكان شديدَ الدقّةِ لا يقبلُ إلّا الصحيح. ألّفَ «صحيحَ البخاري» أصحَّ كتابٍ بعدَ القرآنِ في ستَّ عشرةَ سنة.',
          en:'<b>Al-Bukhari</b> was the greatest scholar of hadith; Allah gave him an extraordinary memory, so he memorized hundreds of thousands of hadiths. He traveled to seek them and was extremely precise, accepting only the authentic. He authored "Sahih al-Bukhari," the most authentic book after the Quran, over sixteen years.' } } ] }
  ],

  traits:[
    { ar:'الحفظ', en:'Memorization' }, { ar:'الدقّة', en:'Precision' },
    { ar:'الأمانة', en:'Trustworthiness' }, { ar:'الورع', en:'Scrupulousness' },
  ],
  lessons:[
    { icon:'🧠', color:'#1E6A5A', title:{ar:'اعتنِ بحفظِك',en:'Cultivate your memory'},
      body:{ar:'حفظَ البخاريُّ مئاتِ الآلافِ من الأحاديثِ بعنايةٍ وتكرار. الحفظُ نعمةٌ تُنمّى بالاجتهاد.',en:'Al-Bukhari memorized hundreds of thousands of hadiths through care and repetition. Memory is a blessing grown by effort.'},
      apply:{ar:'أُدرِّبُ ذاكرتي وأحفظُ ما ينفعُني.',en:'I train my memory and memorize what benefits me.'} },
    { icon:'🔍', color:'#3E8A7A', title:{ar:'تأكّدْ قبلَ أن تنقل',en:'Verify before you transmit'},
      body:{ar:'كان البخاريُّ لا يقبلُ حديثاً إلّا بعدَ التأكّدِ من صحّتِه. التثبّتُ قبلَ النقلِ أمانة.',en:'Al-Bukhari accepted a hadith only after verifying its authenticity. Verifying before transmitting is a trust.'},
      apply:{ar:'لا أنقلُ خبراً حتى أتأكّدَ من صحّتِه.',en:'I do not transmit news until I verify it.'} },
    { icon:'🤲', color:'#155A4A', title:{ar:'استعنْ باللهِ في عملِك',en:'Seek Allah\u2019s help in your work'},
      body:{ar:'كان البخاريُّ يُصلّي ويستخيرُ قبلَ كتابةِ كلِّ حديث. الاستعانةُ باللهِ تُبارِكُ العمل.',en:'Al-Bukhari prayed and sought guidance before recording each hadith. Seeking Allah\u2019s help blesses the work.'},
      apply:{ar:'أبدأُ عملي المهمَّ بدعاءٍ واستعانةٍ بالله.',en:'I begin my important work with prayer and seeking Allah\u2019s help.'} },
    { icon:'⏳', color:'#1E6A5A', title:{ar:'أتقنْ ولو طالَ الوقت',en:'Perfect your work, even if it takes long'},
      body:{ar:'قضى البخاريُّ ستَّ عشرةَ سنةً في تأليفِ «الصحيح» بدقّة. الإتقانُ يستحقُّ الصبرَ والوقت.',en:'Al-Bukhari spent sixteen years authoring "the Sahih" precisely. Excellence is worth patience and time.'},
      apply:{ar:'أُتقِنُ عملي ولا أتعجّلُ على حسابِ الجودة.',en:'I perfect my work and don\u2019t rush at the cost of quality.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ ﴾', ref:{ ar:'الحجر ٩', en:'Al-Hijr 9' } },
    dua:{ ar:'اللّهُمَّ ارزقني الحفظَ والدقّةَ والأمانةَ في العلم', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أُدرِّبُ ذاكرتي وأحفظُ ما ينفعُني.', en:'I train my memory and memorize what benefits me.' },
        { ar:'لا أنقلُ خبراً حتى أتأكّدَ من صحّتِه.', en:'I don\u2019t transmit news until I verify it.' },
        { ar:'أُتقِنُ عملي وأستعينُ بالله.', en:'I perfect my work and seek Allah\u2019s help.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ البخاري؟',en:'What was al-Bukhari known as?'},
          options:[{ar:'أميرُ المؤمنينَ في الحديث',en:'Foremost in hadith'},{ar:'الفاتح',en:'The Conqueror'},{ar:'الإمامُ الأعظم',en:'The Great Imam'}], answer:0 },
        { q:{ar:'ما الكتابُ الذي ألّفه البخاري؟',en:'What book did al-Bukhari author?'},
          options:[{ar:'صحيحُ البخاري',en:'Sahih al-Bukhari'},{ar:'الموطّأ',en:'Al-Muwatta'},{ar:'المسند',en:'Al-Musnad'}], answer:0 },
        { q:{ar:'ماذا كان يفعلُ قبلَ كتابةِ كلِّ حديث؟',en:'What did he do before recording each hadith?'},
          options:[{ar:'يغتسلُ ويُصلّي ويستخيرُ الله',en:'He bathed, prayed, and sought Allah\u2019s guidance'},{ar:'لا شيء',en:'Nothing'},{ar:'ينامُ',en:'He slept'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'البخاريُّ أعظمُ علماءِ الحديث.',en:'Al-Bukhari was the greatest scholar of hadith.'}, t:true },
        { statement:{ar:'«صحيحُ البخاري» أصحُّ كتابٍ بعدَ القرآن.',en:'"Sahih al-Bukhari" is the most authentic book after the Quran.'}, t:true },
        { statement:{ar:'كان يقبلُ أيَّ حديثٍ بلا تأكّد.',en:'He accepted any hadith without verification.'}, t:false },
        { statement:{ar:'حفظَ مئاتِ الآلافِ من الأحاديث.',en:'He memorized hundreds of thousands of hadiths.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'صحيحُ البخاري',en:'Sahih al-Bukhari'}, b:{ar:'أصحُّ كتابٍ بعدَ القرآن',en:'Most authentic book after the Quran'} },
        { a:{ar:'بخارى',en:'Bukhara'}, b:{ar:'مدينةُ مولدِه',en:'His birthplace'} },
        { a:{ar:'الدقّة',en:'Precision'}, b:{ar:'لا يقبلُ إلّا الصحيح',en:'He accepted only the authentic'} },
        { a:{ar:'الحفظ',en:'Memorization'}, b:{ar:'مئاتُ الآلافِ من الأحاديث',en:'Hundreds of thousands of hadiths'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحفظِ والدقّة', en:'Medal of Memory & Precision' },
    stickers:[
      { icon:'book',  color:'#1E6A5A', title:{ar:'أميرُ الحديث',en:'Foremost in Hadith'} },
      { icon:'light', color:'#3E8A7A', title:{ar:'الحافظُ الكبير',en:'The Great Memorizer'} },
      { icon:'gem',   color:'#155A4A', title:{ar:'صاحبُ الصحيح',en:'Author of the Sahih'} },
      { icon:'star',  color:'#1E6A5A', title:{ar:'الدقيقُ المتحرّي',en:'The Precise & Careful'} },
    ],
    moral:{ ar:'الإمامُ البخاريُّ قدوةٌ في الحفظِ والدقّةِ والأمانة — حفظَ سنّةَ النبيِّ ﷺ ونقّاها بدقّةٍ نفعتِ الأمّةَ قروناً.',
      en:'Al-Bukhari is a model of memory, precision, and trustworthiness — he preserved the Prophet\u2019s ﷺ Sunnah and refined it with a precision that benefited the nation for centuries.' },
    reflect:[
      { ar:'كان البخاريُّ دقيقاً لا يقبلُ إلّا الصحيح. هل تتأكّدُ من الأخبارِ قبلَ نقلِها؟', en:'Al-Bukhari was precise, accepting only the authentic. Do you verify news before transmitting it?' },
      { ar:'أتقنَ عملَه في ستَّ عشرةَ سنة. كيف تُتقِنُ ما تعملُ ولو طالَ الوقت؟', en:'He perfected his work over sixteen years. How do you perfect what you do even if it takes long?' },
    ],
  },
};
