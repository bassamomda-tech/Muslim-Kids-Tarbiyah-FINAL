// data/chapters/qutayba.js — Leaders · قتيبةُ بنُ مسلم (full chapter; Story tab uses data/stories/qutayba.js)
// Sources: البداية والنهاية · فتوح البلدان · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.qutayba = {
  id:'qutayba', era:'heroes', icon:'compass',
  collection:{ ar:'قصص القادة', en:'Leader Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'قتيبةُ بنُ مسلم', en:'Qutayba ibn Muslim' },
  tag:{ ar:'فاتحُ ما وراءَ النهر', en:'Conqueror of Transoxiana' },
  accent:'#3A6A4A', accent2:'#5A8A6A',
  greeting:{ ar:'أهلاً يا بطل! قتيبةُ بنُ مسلمٍ رحمه الله قائدٌ عظيمٌ فتحَ بلادَ ما وراءَ النهرِ ونشرَ الإسلامَ في وسطِ آسيا حتى أطرافِ الصين. تعالَ نتعلّمْ من عزيمتِه ونشرِه للخير.',
    en:'Hello, hero! Qutayba ibn Muslim, a great commander who conquered Transoxiana and spread Islam in Central Asia all the way to the edges of China. Come, let\'s learn from his resolve and spreading of good.' },

  knowledge:{
    didYouKnow:{ ar:'فتحَ قتيبةُ بنُ مسلمٍ بلاداً واسعةً في وسطِ آسيا (بخارى وسمرقند وخوارزم) فدخلَ أهلُها في الإسلامِ وصارتْ منائرَ للعلم.',
      en:'Qutayba ibn Muslim conquered vast lands in Central Asia (Bukhara, Samarkand, Khwarazm), and their people entered Islam, becoming beacons of knowledge.' },
    who:{ ar:'هو <b>قتيبةُ بنُ مسلم</b> الباهلي، قائدٌ عظيمٌ من قادةِ الدولةِ الأموية. فتحَ بلادَ <b>ما وراءَ النهر</b> في وسطِ آسيا، ومنها <b>بخارى وسمرقند وخوارزم</b>، ووصلَ بفتوحاتِه إلى أطرافِ <b>الصين</b>! كان <b>شجاعاً مقداماً حكيماً</b>، يجمعُ بين قوّةِ السلاحِ وحُسنِ السياسةِ ونشرِ الإسلام. بنى المساجدَ وعلّمَ الناسَ الدين، فصارتْ تلك البلادُ — التي كانت تعبدُ الأصنامَ والنار — <b>منائرَ للإسلامِ والعلم</b> أنجبتْ كبارَ العلماءِ مثلَ البخاري. مثالٌ للقائدِ الذي يفتحُ البلادَ ويبني الحضارة.',
      en:'He is <b>Qutayba ibn Muslim</b> al-Bahili, a great commander of the Umayyad state. He conquered the lands of <b>Transoxiana</b> in Central Asia, including <b>Bukhara, Samarkand, and Khwarazm</b>, and reached with his conquests the edges of <b>China</b>! He was <b>brave, daring, and wise</b>, combining military strength with good policy and spreading Islam. He built mosques and taught people the religion, so those lands — which had worshipped idols and fire — became <b>beacons of Islam and knowledge</b> that produced great scholars like al-Bukhari. A model of the leader who conquers lands and builds civilization.' },
    facts:[
      { ar:'قائدٌ أمويٌّ فتحَ بلادَ ما وراءَ النهر.', en:'An Umayyad commander who conquered Transoxiana.' },
      { ar:'فتحَ بخارى وسمرقندَ وخوارزمَ ووصلَ أطرافَ الصين.', en:'He conquered Bukhara, Samarkand, Khwarazm and reached China\u2019s edges.' },
      { ar:'نشرَ الإسلامَ وبنى المساجدَ في وسطِ آسيا.', en:'He spread Islam and built mosques in Central Asia.' },
      { ar:'صارتْ تلك البلادُ منائرَ للعلمِ أنجبتْ كبارَ العلماء.', en:'Those lands became beacons of knowledge producing great scholars.' },
      { ar:'جمعَ بين قوّةِ السلاحِ وحُسنِ السياسة.', en:'He combined military strength with good policy.' },
    ],
    timeline:[
      { when:{ar:'القيادة',en:'Leadership'}, what:{ar:'صار قائداً في الدولةِ الأموية.',en:'He became a commander in the Umayyad state.'} },
      { when:{ar:'الفتوح',en:'Conquests'}, what:{ar:'فتحَ بلادَ ما وراءَ النهر.',en:'He conquered the lands of Transoxiana.'} },
      { when:{ar:'بخارى وسمرقند',en:'Bukhara & Samarkand'}, what:{ar:'فتحهما ونشرَ فيهما الإسلام.',en:'He conquered them and spread Islam in them.'} },
      { when:{ar:'الصين',en:'China'}, what:{ar:'وصلتْ فتوحاتُه إلى أطرافِ الصين.',en:'His conquests reached the edges of China.'} },
      { when:{ar:'العلم',en:'Knowledge'}, what:{ar:'صارتِ البلادُ منائرَ للعلمِ والإسلام.',en:'The lands became beacons of knowledge and Islam.'} },
    ],
    ayah:{ ar:'﴿ هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ ﴾', ref:{ ar:'الفتح ٢٨', en:'Al-Fath 28' } },
  },

  story:[
    { title:{ ar:'فاتحُ ما وراءَ النهر', en:'Conqueror of Transoxiana' },
      pages:[
        { scene:'peaks', text:{ ar:'كان <b>قتيبةُ بنُ مسلم</b> قائداً شجاعاً حكيماً، فتحَ بلادَ ما وراءَ النهرِ في وسطِ آسيا — بخارى وسمرقندَ وخوارزم — ووصلَ أطرافَ الصين. نشرَ الإسلامَ وبنى المساجد، فصارتْ تلك البلادُ منائرَ للعلمِ أنجبتْ كبارَ العلماء.',
          en:'<b>Qutayba ibn Muslim</b> was a brave, wise commander who conquered the lands of Transoxiana in Central Asia — Bukhara, Samarkand, and Khwarazm — and reached the edges of China. He spread Islam and built mosques, so those lands became beacons of knowledge that produced great scholars.' } } ] }
  ],

  traits:[
    { ar:'الشجاعة', en:'Courage' }, { ar:'العزيمة', en:'Resolve' },
    { ar:'نشرُ الخير', en:'Spreading good' }, { ar:'الحكمة', en:'Wisdom' },
  ],
  lessons:[
    { icon:'🌍', color:'#3A6A4A', title:{ar:'انشرِ الخيرَ أينما كنت',en:'Spread good wherever you are'},
      body:{ar:'نشرَ قتيبةُ الإسلامَ والعلمَ في بلادٍ بعيدة. البطلُ يحملُ الخيرَ إلى الناسِ أينما وصل.',en:'Qutayba spread Islam and knowledge in distant lands. A hero carries good to people wherever he reaches.'},
      apply:{ar:'أنشرُ الخيرَ والعلمَ بين من حولي.',en:'I spread good and knowledge among those around me.'} },
    { icon:'🏗️', color:'#5A8A6A', title:{ar:'ابنِ بعدَ الفتح',en:'Build after the conquest'},
      body:{ar:'لم يكتفِ قتيبةُ بالفتحِ بل بنى المساجدَ وعلّمَ الناس. الإنجازُ الحقُّ في البناءِ والتعمير.',en:'Qutayba did not stop at conquest but built mosques and taught people. True achievement is in building and developing.'},
      apply:{ar:'أبني وأُعلِّمُ وأنفعُ بعدَ كلِّ نجاح.',en:'I build, teach, and benefit after every success.'} },
    { icon:'🧭', color:'#2A5A3A', title:{ar:'اجمعْ القوّةَ بالحكمة',en:'Join strength with wisdom'},
      body:{ar:'جمعَ قتيبةُ بين قوّةِ السلاحِ وحُسنِ السياسة. القوّةُ مع الحكمةِ تصنعُ النجاحَ الدائم.',en:'Qutayba combined military strength with good policy. Strength with wisdom makes lasting success.'},
      apply:{ar:'أُفكِّرُ بحكمةٍ مع استخدامِ قدراتي.',en:'I think wisely while using my abilities.'} },
    { icon:'🎯', color:'#3A6A4A', title:{ar:'علِّ همّتَك',en:'Raise your ambition'},
      body:{ar:'وصلتْ فتوحاتُ قتيبةَ إلى أطرافِ الصين. الهمّةُ العاليةُ تبلغُ بصاحبِها أبعدَ الغايات.',en:'Qutayba\u2019s conquests reached the edges of China. High ambition takes its owner to the farthest goals.'},
      apply:{ar:'أرفعُ همّتي وأسعى لأبعدِ الأهداف.',en:'I raise my ambition and pursue the farthest goals.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ ﴾', ref:{ ar:'الفتح ٢٨', en:'Al-Fath 28' } },
    dua:{ ar:'اللّهُمَّ اجعلني سبباً في نشرِ الخيرِ والعلمِ بين الناس', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أنشرُ الخيرَ والعلمَ أينما كنت.', en:'I spread good and knowledge wherever I am.' },
        { ar:'أبني وأُعلِّمُ بعدَ كلِّ نجاح.', en:'I build and teach after every success.' },
        { ar:'أرفعُ همّتي لأبعدِ الأهداف.', en:'I raise my ambition to the farthest goals.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'أيَّ بلادٍ فتحَ قتيبةُ بنُ مسلم؟',en:'Which lands did Qutayba ibn Muslim conquer?'},
          options:[{ar:'بلادَ ما وراءَ النهرِ في وسطِ آسيا',en:'Transoxiana in Central Asia'},{ar:'الأندلس',en:'Andalusia'},{ar:'مصر',en:'Egypt'}], answer:0 },
        { q:{ar:'إلى أينَ وصلتْ فتوحاتُه؟',en:'How far did his conquests reach?'},
          options:[{ar:'أطرافِ الصين',en:'The edges of China'},{ar:'أوروبا',en:'Europe'},{ar:'أمريكا',en:'America'}], answer:0 },
        { q:{ar:'ماذا صارتْ تلك البلادُ بعدَ الفتح؟',en:'What did those lands become after the conquest?'},
          options:[{ar:'منائرَ للعلمِ والإسلام',en:'Beacons of knowledge and Islam'},{ar:'خراباً',en:'Ruins'},{ar:'صحراء',en:'Desert'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'قتيبةُ فتحَ بلادَ ما وراءَ النهر.',en:'Qutayba conquered Transoxiana.'}, t:true },
        { statement:{ar:'نشرَ الإسلامَ وبنى المساجدَ في وسطِ آسيا.',en:'He spread Islam and built mosques in Central Asia.'}, t:true },
        { statement:{ar:'هدمَ البلادَ ولم يبنِ شيئاً.',en:'He destroyed the lands and built nothing.'}, t:false },
        { statement:{ar:'أنجبتْ تلك البلادُ كبارَ العلماء.',en:'Those lands produced great scholars.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'ما وراءَ النهر',en:'Transoxiana'}, b:{ar:'فتحها قتيبة',en:'Qutayba conquered it'} },
        { a:{ar:'بخارى وسمرقند',en:'Bukhara & Samarkand'}, b:{ar:'من البلادِ المفتوحة',en:'Among the conquered lands'} },
        { a:{ar:'الصين',en:'China'}, b:{ar:'وصلتْ أطرافَها فتوحاتُه',en:'His conquests reached its edges'} },
        { a:{ar:'العلم',en:'Knowledge'}, b:{ar:'ازدهرَ في تلك البلاد',en:'Flourished in those lands'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الفتحِ ونشرِ الخير', en:'Medal of Conquest & Spreading Good' },
    stickers:[
      { icon:'compass',color:'#3A6A4A', title:{ar:'فاتحُ ما وراءَ النهر',en:'Conqueror of Transoxiana'} },
      { icon:'mosque',color:'#5A8A6A', title:{ar:'باني المساجد',en:'Builder of Mosques'} },
      { icon:'book',  color:'#2A5A3A', title:{ar:'ناشرُ العلم',en:'Spreader of Knowledge'} },
      { icon:'star',  color:'#3A6A4A', title:{ar:'بلغَ أطرافَ الصين',en:'Reached China\u2019s Edges'} },
    ],
    moral:{ ar:'قتيبةُ بنُ مسلمٍ قدوةٌ في العزيمةِ ونشرِ الخيرِ والبناء — حملَ الإسلامَ والعلمَ إلى أبعدِ البلاد.',
      en:'Qutayba ibn Muslim is a model of resolve, spreading good, and building — he carried Islam and knowledge to the farthest lands.' },
    reflect:[
      { ar:'حملَ قتيبةُ الخيرَ إلى بلادٍ بعيدة. كيف تنشرُ الخيرَ من حولِك؟', en:'Qutayba carried good to distant lands. How do you spread good around you?' },
      { ar:'بنى وعلّمَ بعدَ الفتح. كيف تجعلُ نجاحَك سبباً في نفعِ غيرِك؟', en:'He built and taught after the conquest. How do you make your success a means of benefiting others?' },
    ],
  },
};
