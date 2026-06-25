// data/chapters/talha_asadi.js — Heroes · طُليحةُ الأسدي (full chapter; Story tab uses data/stories/talha_asadi.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية · تاريخ الطبري
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.talha_asadi = {
  id:'talha_asadi', era:'heroes', icon:'compass',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'طُليحةُ الأسدي', en:'Tulayha al-Asadi' },
  tag:{ ar:'التائبُ الذي عادَ بطلاً', en:'The repentant who returned a hero' },
  accent:'#4A6E2C', accent2:'#6A8E4C',
  greeting:{ ar:'أهلاً يا بطل! طُليحةُ الأسديُّ رضي الله عنه ضلَّ مرّةً وادّعى ما ليس له، ثمّ تابَ توبةً صادقةً وعادَ بطلاً من أبطالِ الإسلامِ في الفتوح. تعالَ نتعلّمْ أنّ بابَ التوبةِ مفتوح.',
    en:'Hello, hero! Tulayha al-Asadi once went astray and claimed what was not his, then repented sincerely and returned as one of the heroes of Islam in the conquests. Come, let\'s learn that the door of repentance is always open.' },

  knowledge:{
    didYouKnow:{ ar:'طُليحةُ كان قد ادّعى النبوّةَ كذباً في حروبِ الرِّدّة، ثمّ تابَ توبةً صادقةً، وحسُنَ إسلامُه، وصار من أبطالِ القادسيّةِ ونهاوند!',
      en:'Tulayha had falsely claimed prophethood during the Ridda wars, then repented sincerely, his Islam became excellent, and he became one of the heroes of Qadisiyya and Nahawand!' },
    who:{ ar:'هو <b>طُليحةُ بنُ خويلد</b> الأسدي. كان فارساً شجاعاً، لكنّه <b>زلَّ زلّةً كبيرة</b> فادّعى النبوّةَ كذباً في زمنِ الرِّدّةِ بعدَ وفاةِ النبيِّ ﷺ، فقاتله المسلمونَ بقيادةِ خالدِ بنِ الوليدِ وهزموه. ففرَّ طُليحة، ثمّ <b>هداه اللهُ فتابَ توبةً صادقة</b> ورجعَ إلى الإسلامِ ندِماً. وحسُنَ إسلامُه حتى صار من <b>أبطالِ الفتوح</b>، شارك في <b>القادسيّةِ ونهاوند</b> ببطولةٍ نادرة. قصّتُه مثالٌ على أنّ التوبةَ الصادقةَ تمحو الذنبَ وتفتحُ بابَ المجد.',
      en:'He is <b>Tulayha ibn Khuwaylid</b> al-Asadi. He was a brave knight, but he <b>committed a great error</b>, falsely claiming prophethood during the Ridda after the Prophet\u2019s ﷺ death. The Muslims, led by Khalid ibn al-Walid, fought and defeated him. Tulayha fled, then <b>Allah guided him and he repented sincerely</b>, returning to Islam in remorse. His Islam became excellent until he was one of the <b>heroes of the conquests</b>, taking part in <b>Qadisiyya and Nahawand</b> with rare valor. His story is an example that sincere repentance erases sin and opens the door to glory.' },
    facts:[
      { ar:'زلَّ فادّعى النبوّةَ كذباً في الرِّدّة.', en:'He erred, falsely claiming prophethood during the Ridda.' },
      { ar:'هزمه المسلمونَ بقيادةِ خالدِ بنِ الوليد.', en:'The Muslims defeated him under Khalid ibn al-Walid.' },
      { ar:'تابَ توبةً صادقةً ورجعَ إلى الإسلام.', en:'He repented sincerely and returned to Islam.' },
      { ar:'حسُنَ إسلامُه وصار من أبطالِ الفتوح.', en:'His Islam became excellent; he became a hero of the conquests.' },
      { ar:'شارك ببطولةٍ في القادسيّةِ ونهاوند.', en:'He fought with valor at Qadisiyya and Nahawand.' },
    ],
    timeline:[
      { when:{ar:'الزلّة',en:'The Error'}, what:{ar:'ادّعى النبوّةَ كذباً في الرِّدّة.',en:'He falsely claimed prophethood during the Ridda.'} },
      { when:{ar:'الهزيمة',en:'The Defeat'}, what:{ar:'هزمه خالدُ بنُ الوليدِ ففرّ.',en:'Khalid ibn al-Walid defeated him; he fled.'} },
      { when:{ar:'التوبة',en:'Repentance'}, what:{ar:'هداه اللهُ فتابَ ورجعَ إلى الإسلام.',en:'Allah guided him; he repented and returned to Islam.'} },
      { when:{ar:'حُسنُ الإسلام',en:'Excellent Islam'}, what:{ar:'صدقَ في إسلامِه فحسُنَ حالُه.',en:'He was sincere, so his state became excellent.'} },
      { when:{ar:'الفتوح',en:'The Conquests'}, what:{ar:'صار بطلاً في القادسيّةِ ونهاوند.',en:'He became a hero at Qadisiyya and Nahawand.'} },
    ],
    ayah:{ ar:'﴿ إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ ﴾', ref:{ ar:'الفرقان ٧٠', en:'Al-Furqan 70' } },
  },

  story:[
    { title:{ ar:'التائبُ الذي عادَ بطلاً', en:'The Repentant Who Returned a Hero' },
      pages:[
        { scene:'desert', text:{ ar:'زلَّ <b>طُليحةُ الأسدي</b> فادّعى النبوّةَ كذباً في الرِّدّة، فهزمه المسلمون. ثمّ هداه اللهُ فتابَ توبةً صادقةً ورجعَ إلى الإسلام، وحسُنَ إسلامُه حتى صار من أبطالِ الفتوحِ في القادسيّةِ ونهاوند.',
          en:'<b>Tulayha al-Asadi</b> erred, falsely claiming prophethood during the Ridda, and the Muslims defeated him. Then Allah guided him; he repented sincerely and returned to Islam, his Islam becoming excellent until he was one of the heroes of the conquests at Qadisiyya and Nahawand.' } } ] }
  ],

  traits:[
    { ar:'التوبة', en:'Repentance' }, { ar:'الصدق', en:'Sincerity' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'تصحيحُ الخطأ', en:'Correcting mistakes' },
  ],
  lessons:[
    { icon:'🚪', color:'#4A6E2C', title:{ar:'بابُ التوبةِ مفتوح',en:'The door of repentance is open'},
      body:{ar:'زلَّ طُليحةُ زلّةً كبيرةً ثمّ تابَ فقبله الله. مهما أخطأتَ، بابُ التوبةِ مفتوحٌ لمن صدق.',en:'Tulayha committed a great error, then repented and Allah accepted him. However much you err, the door of repentance is open to the sincere.'},
      apply:{ar:'إذا أخطأتُ أتوبُ فوراً وأرجعُ للحق.',en:'When I err I repent at once and return to the truth.'} },
    { icon:'🔄', color:'#6A8E4C', title:{ar:'صحِّحْ خطأك بعمل',en:'Correct your mistake with action'},
      body:{ar:'لم يكتفِ طُليحةُ بالندم، بل صحّحَ خطأه بالجهادِ والبطولة. التوبةُ الصادقةُ يتبعُها عملٌ صالح.',en:'Tulayha did not stop at regret; he corrected his error with struggle and heroism. Sincere repentance is followed by good deeds.'},
      apply:{ar:'أُصلِحُ ما أفسدتُ وأُتبِعُ الخطأَ بحسنة.',en:'I fix what I spoiled and follow a mistake with a good deed.'} },
    { icon:'🌱', color:'#3A5E1C', title:{ar:'لا تيأسْ من رحمةِ الله',en:'Never despair of Allah\u2019s mercy'},
      body:{ar:'عادَ طُليحةُ من الضلالِ إلى البطولة. اللهُ يقبلُ التائبَ ويُبدِّلُ سيّئاتِه حسنات.',en:'Tulayha returned from misguidance to heroism. Allah accepts the repentant and turns his sins into good deeds.'},
      apply:{ar:'أُحسِنُ الظنَّ بربّي وأرجو رحمتَه.',en:'I think well of my Lord and hope for His mercy.'} },
    { icon:'💪', color:'#4A6E2C', title:{ar:'وجِّهْ قوّتَك للخير',en:'Direct your strength to good'},
      body:{ar:'كانت قوّةُ طُليحةَ في الضلالِ ضرراً، وفي الحقِّ بطولة. القوّةُ خيرٌ إذا وُجِّهَتْ للخير.',en:'Tulayha\u2019s strength was harmful in misguidance, heroic in truth. Strength is good when directed to good.'},
      apply:{ar:'أستخدمُ قوّتي وموهبتي فيما يُرضي الله.',en:'I use my strength and talent in what pleases Allah.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ ﴾', ref:{ ar:'الفرقان ٧٠', en:'Al-Furqan 70' } },
    dua:{ ar:'اللّهُمَّ تُبْ عليّ واجعلني من التوّابينَ المتطهّرين', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'إذا أخطأتُ أتوبُ فوراً وأرجعُ للحق.', en:'When I err I repent at once and return to the truth.' },
        { ar:'أُصلِحُ خطئي بعملٍ صالح.', en:'I correct my mistake with a good deed.' },
        { ar:'لا أيأسُ من رحمةِ اللهِ أبداً.', en:'I never despair of Allah\u2019s mercy.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ماذا فعلَ طُليحةُ في زمنِ الرِّدّة؟',en:'What did Tulayha do during the Ridda?'},
          options:[{ar:'ادّعى النبوّةَ كذباً ثمّ تاب',en:'Falsely claimed prophethood, then repented'},{ar:'قادَ الجيشَ بأمانة',en:'Led the army faithfully'},{ar:'جمعَ القرآن',en:'Gathered the Quran'}], answer:0 },
        { q:{ar:'ماذا حدثَ بعدَ توبةِ طُليحة؟',en:'What happened after Tulayha repented?'},
          options:[{ar:'حسُنَ إسلامُه وصار من أبطالِ الفتوح',en:'His Islam became excellent; he became a hero of the conquests'},{ar:'بقيَ ضالاً',en:'He stayed astray'},{ar:'تركَ القتال',en:'He left fighting'}], answer:0 },
        { q:{ar:'ما الدرسُ الأكبرُ من قصّةِ طُليحة؟',en:'What is the biggest lesson of Tulayha\u2019s story?'},
          options:[{ar:'بابُ التوبةِ مفتوحٌ لمن صدق',en:'The door of repentance is open to the sincere'},{ar:'الخطأُ لا يُغتفر',en:'A mistake is unforgivable'},{ar:'اليأسُ من الرحمة',en:'Despair of mercy'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'تابَ طُليحةُ توبةً صادقةً ورجعَ إلى الإسلام.',en:'Tulayha repented sincerely and returned to Islam.'}, t:true },
        { statement:{ar:'صار من أبطالِ القادسيّةِ ونهاوند.',en:'He became a hero of Qadisiyya and Nahawand.'}, t:true },
        { statement:{ar:'بقيَ طُليحةُ مدّعياً للنبوّةِ حتى مات.',en:'Tulayha kept claiming prophethood until he died.'}, t:false },
        { statement:{ar:'اللهُ يقبلُ توبةَ من صدق.',en:'Allah accepts the repentance of the sincere.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الرِّدّة',en:'The Ridda'}, b:{ar:'زلَّ فيها طُليحة',en:'Tulayha erred during it'} },
        { a:{ar:'التوبة',en:'Repentance'}, b:{ar:'بها عادَ بطلاً',en:'By it he returned a hero'} },
        { a:{ar:'القادسيّة',en:'Qadisiyya'}, b:{ar:'أبلى فيها بعدَ توبتِه',en:'He excelled there after repenting'} },
        { a:{ar:'يُبدِّلُ سيّئاتِهم حسنات',en:'Turns sins into good deeds'}, b:{ar:'وعدُ اللهِ للتائبين',en:'Allah\u2019s promise to the repentant'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ التوبةِ والعودة', en:'Medal of Repentance & Return' },
    stickers:[
      { icon:'compass', color:'#4A6E2C', title:{ar:'العودةُ للحق',en:'Return to Truth'} },
      { icon:'leaf',    color:'#6A8E4C', title:{ar:'التائبُ الصادق',en:'The Sincere Repentant'} },
      { icon:'sword',   color:'#3A5E1C', title:{ar:'بطلُ الفتوح',en:'Hero of the Conquests'} },
      { icon:'star',    color:'#4A6E2C', title:{ar:'سيّئاتٌ بدّلها حسنات',en:'Sins Turned to Good'} },
    ],
    moral:{ ar:'طُليحةُ قدوةٌ في التوبةِ الصادقةِ — مهما أخطأتَ فبابُ اللهِ مفتوح، والعودةُ تصنعُ من التائبِ بطلاً.',
      en:'Tulayha is a model of sincere repentance — however much you err, Allah\u2019s door is open, and returning makes a hero of the repentant.' },
    reflect:[
      { ar:'تابَ طُليحةُ بعدَ زلّةٍ كبيرة. هل تُسارِعُ إلى التوبةِ إذا أخطأت؟', en:'Tulayha repented after a great error. Do you hasten to repent when you make a mistake?' },
      { ar:'صحّحَ خطأه بالبطولة. كيف تُصلِحُ ما أفسدتَ بعملٍ طيّب؟', en:'He corrected his error with heroism. How do you fix what you spoiled with a good deed?' },
    ],
  },
};
