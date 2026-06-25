// data/chapters/nasai.js — Scholars · الإمام النسائي (full chapter; Story tab uses data/stories/nasai.js)
// Sources: سير أعلام النبلاء · البداية والنهاية · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.nasai = {
  id:'nasai', era:'heroes', icon:'book',
  collection:{ ar:'قصص العلماء', en:'Scholar Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الإمامُ النسائي', en:'An-Nasa\u2019i' },
  tag:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
  accent:'#2A4A7A', accent2:'#4A6A9A',
  greeting:{ ar:'أهلاً يا بطل! الإمامُ النسائيُّ رحمه الله من أئمّةِ الحديثِ الكبار، صاحبُ كتابِ «السنن»، وعالمٌ عابدٌ شديدُ الدقّةِ في نقدِ الرجال. تعالَ نتعلّمْ من علمِه وعبادتِه وشجاعتِه.',
    en:'Hello, hero! An-Nasa\u2019i, one of the great imams of hadith, author of "the Sunan," a devout scholar extremely precise in evaluating narrators. Come, let\'s learn from his knowledge, worship, and courage.' },

  knowledge:{
    didYouKnow:{ ar:'كتابُ «سننِ النسائي» أحدُ الكتبِ الستّةِ المعتمدةِ في الحديث، واشتهرَ النسائيُّ بأنّه كان من أشدِّ العلماءِ دقّةً في معرفةِ الرواةِ الصادقين.',
      en:'"Sunan an-Nasa\u2019i" is one of the six accepted books of hadith, and an-Nasa\u2019i was famed as among the most precise scholars in knowing truthful narrators.' },
    who:{ ar:'هو <b>أحمدُ بنُ شعيبٍ النسائي</b>، أحدُ أئمّةِ الحديثِ الكبار، وصاحبُ كتابِ <b>«السنن»</b> الذي هو أحدُ <b>الكتبِ الستّة</b> المعتمدةِ عند المسلمين. نشأَ في <b>نَسا</b> (خراسان) ورحلَ في طلبِ الحديثِ إلى بلدانٍ كثيرة. كان <b>شديدَ الدقّةِ في نقدِ الرواة</b>، يعرفُ الصادقَ من غيرِه، حتى صارَ مرجعاً في ذلك. كان <b>عابداً كثيرَ الصلاةِ والصيام</b>، مهيباً وقوراً. اشتهرَ بشجاعتِه في قولِ الحقّ، فقد قالَ كلمةَ حقٍّ عند مَن لا يحبُّها فأُوذِيَ وصبرَ. قضى حياتَه في خدمةِ سنّةِ النبيِّ ﷺ ونقدِها وتنقيتِها.',
      en:'He is <b>Ahmad ibn Shu\u2019ayb an-Nasa\u2019i</b>, one of the great imams of hadith and author of the book <b>"the Sunan,"</b> which is one of the <b>six books</b> accepted among Muslims. He grew up in <b>Nasa</b> (Khurasan) and traveled to many lands seeking hadith. He was <b>extremely precise in evaluating narrators</b>, knowing the truthful from others, until he became a reference in that. He was a <b>devout worshipper who prayed and fasted much</b>, dignified and composed. He was famed for his courage in speaking the truth — he spoke a word of truth before one who disliked it, was harmed, and was patient. He spent his life serving the Prophet\u2019s ﷺ Sunnah, critiquing and refining it.' },
    facts:[
      { ar:'من أئمّةِ الحديثِ الكبارِ وصاحبُ «السنن».', en:'One of the great imams of hadith and author of "the Sunan."' },
      { ar:'كتابُه أحدُ الكتبِ الستّةِ المعتمدة.', en:'His book is one of the six accepted books.' },
      { ar:'شديدُ الدقّةِ في نقدِ الرواةِ ومعرفتِهم.', en:'Extremely precise in evaluating and knowing narrators.' },
      { ar:'عابدٌ كثيرُ الصلاةِ والصيام.', en:'A devout worshipper who prayed and fasted much.' },
      { ar:'شجاعٌ في قولِ الحقِّ صابرٌ على الأذى.', en:'Courageous in speaking the truth, patient through harm.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ في نَسا ورحلَ في طلبِ الحديث.',en:'He grew up in Nasa and traveled seeking hadith.'} },
      { when:{ar:'الدقّة',en:'Precision'}, what:{ar:'برزَ في نقدِ الرواةِ ومعرفتِهم.',en:'He excelled in evaluating and knowing narrators.'} },
      { when:{ar:'السنن',en:'The Sunan'}, what:{ar:'ألّفَ «السنن» أحدَ الكتبِ الستّة.',en:'He authored "the Sunan," one of the six books.'} },
      { when:{ar:'العبادة',en:'Worship'}, what:{ar:'كان كثيرَ الصلاةِ والصيام.',en:'He prayed and fasted much.'} },
      { when:{ar:'الثبات',en:'Steadfastness'}, what:{ar:'قالَ الحقَّ فأُوذِيَ وصبر.',en:'He spoke the truth, was harmed, and was patient.'} },
    ],
    ayah:{ ar:'﴿ وَقُولُوا لِلنَّاسِ حُسْنًا ﴾', ref:{ ar:'البقرة ٨٣', en:'Al-Baqara 83' } },
  },

  story:[
    { title:{ ar:'صاحبُ السنن', en:'Author of the Sunan' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>الإمامُ النسائي</b> من أئمّةِ الحديثِ الكبار، صاحبَ كتابِ «السنن» أحدِ الكتبِ الستّة. كان شديدَ الدقّةِ في نقدِ الرواة، عابداً كثيرَ الصلاةِ والصيام، شجاعاً في قولِ الحقِّ صابراً على الأذى. قضى حياتَه في خدمةِ سنّةِ النبيِّ ﷺ.',
          en:'<b>An-Nasa\u2019i</b> was one of the great imams of hadith, author of "the Sunan," one of the six books. He was extremely precise in evaluating narrators, a devout worshipper who prayed and fasted much, courageous in speaking the truth and patient through harm. He spent his life serving the Prophet\u2019s ﷺ Sunnah.' } } ] }
  ],

  traits:[
    { ar:'الدقّة', en:'Precision' }, { ar:'العبادة', en:'Worship' },
    { ar:'الشجاعة', en:'Courage' }, { ar:'الصبر', en:'Patience' },
  ],
  lessons:[
    { icon:'🔍', color:'#2A4A7A', title:{ar:'تثبّتْ ممّن تأخذُ العلم',en:'Verify who you take knowledge from'},
      body:{ar:'كان النسائيُّ دقيقاً يعرفُ الصادقَ من غيرِه. التثبّتُ من المصدرِ يحفظُ العلمَ من الخطأ.',en:'An-Nasa\u2019i was precise, knowing the truthful from others. Verifying the source protects knowledge from error.'},
      apply:{ar:'أتأكّدُ من صحّةِ ما أتعلّمُه ومصدرِه.',en:'I verify the soundness of what I learn and its source.'} },
    { icon:'🌙', color:'#4A6A9A', title:{ar:'أكثِرْ من العبادة',en:'Increase your worship'},
      body:{ar:'كان النسائيُّ كثيرَ الصلاةِ والصيام مع علمِه. العلمُ مع العبادةِ نورٌ على نور.',en:'An-Nasa\u2019i prayed and fasted much alongside his knowledge. Knowledge with worship is light upon light.'},
      apply:{ar:'أجمعُ بين العلمِ والعبادةِ في حياتي.',en:'I combine knowledge and worship in my life.'} },
    { icon:'🦁', color:'#1A3A6A', title:{ar:'قلِ الحقَّ بشجاعة',en:'Speak the truth with courage'},
      body:{ar:'قالَ النسائيُّ الحقَّ ولو عند مَن يكرهُه، فأُوذِيَ وصبر. قولُ الحقِّ شجاعةٌ وأمانة.',en:'An-Nasa\u2019i spoke the truth even before one who hated it, was harmed, and was patient. Speaking the truth is courage and a trust.'},
      apply:{ar:'أقولُ الحقَّ بأدبٍ ولو كان صعباً.',en:'I speak the truth courteously even if it is hard.'} },
    { icon:'💪', color:'#2A4A7A', title:{ar:'اصبِرْ على الأذى في الحق',en:'Endure harm for the truth'},
      body:{ar:'صبرَ النسائيُّ على الأذى الذي ناله بسببِ قولِ الحق. الصبرُ في طريقِ الحقِّ شرف.',en:'An-Nasa\u2019i endured the harm he suffered for speaking the truth. Patience on the path of truth is an honor.'},
      apply:{ar:'أصبِرُ على ما يصيبُني في طريقِ الخير.',en:'I endure what befalls me on the path of good.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَقُولُوا لِلنَّاسِ حُسْنًا ﴾', ref:{ ar:'البقرة ٨٣', en:'Al-Baqara 83' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ والعبادةَ وقولَ الحقِّ والصبرَ عليه', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتأكّدُ من صحّةِ ما أتعلّمُه ومصدرِه.', en:'I verify the soundness of what I learn and its source.' },
        { ar:'أجمعُ بين العلمِ والعبادة.', en:'I combine knowledge and worship.' },
        { ar:'أقولُ الحقَّ بشجاعةٍ وأصبِرُ عليه.', en:'I speak the truth courageously and endure for it.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'ما الكتابُ الذي ألّفه النسائي؟',en:'What book did an-Nasa\u2019i author?'},
          options:[{ar:'السنن',en:'The Sunan'},{ar:'الصحيح',en:'The Sahih'},{ar:'الموطّأ',en:'Al-Muwatta'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ النسائيُّ في علمِ الحديث؟',en:'What was an-Nasa\u2019i famed for in hadith?'},
          options:[{ar:'الدقّةِ في نقدِ الرواة',en:'Precision in evaluating narrators'},{ar:'كثرةِ الأخطاء',en:'Many errors'},{ar:'الإهمال',en:'Negligence'}], answer:0 },
        { q:{ar:'كيف كان النسائيُّ في عبادتِه؟',en:'How was an-Nasa\u2019i in his worship?'},
          options:[{ar:'كثيرَ الصلاةِ والصيام',en:'He prayed and fasted much'},{ar:'تاركاً للعبادة',en:'Abandoning worship'},{ar:'غافلاً',en:'Heedless'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'النسائيُّ صاحبُ كتابِ «السنن».',en:'An-Nasa\u2019i was the author of "the Sunan."'}, t:true },
        { statement:{ar:'كان شديدَ الدقّةِ في نقدِ الرواة.',en:'He was extremely precise in evaluating narrators.'}, t:true },
        { statement:{ar:'كان يكذبُ في نقلِ الحديث.',en:'He lied in transmitting hadith.'}, t:false },
        { statement:{ar:'كان عابداً شجاعاً في قولِ الحق.',en:'He was a worshipper, courageous in speaking the truth.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'السنن',en:'The Sunan'}, b:{ar:'كتابُه في الحديث',en:'His book of hadith'} },
        { a:{ar:'الكتبُ الستّة',en:'The six books'}, b:{ar:'كتابُه أحدُها',en:'His book is one of them'} },
        { a:{ar:'الدقّة',en:'Precision'}, b:{ar:'في نقدِ الرواة',en:'In evaluating narrators'} },
        { a:{ar:'العبادة',en:'Worship'}, b:{ar:'كثيرُ الصلاةِ والصيام',en:'Much prayer and fasting'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الحديثِ والعبادة', en:'Medal of Hadith & Worship' },
    stickers:[
      { icon:'book',  color:'#2A4A7A', title:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
      { icon:'mosque',color:'#4A6A9A', title:{ar:'العابدُ الصوّام',en:'The Worshipper & Faster'} },
      { icon:'light', color:'#1A3A6A', title:{ar:'الناقدُ الدقيق',en:'The Precise Critic'} },
      { icon:'star',  color:'#2A4A7A', title:{ar:'الشجاعُ في الحق',en:'Courageous in Truth'} },
    ],
    moral:{ ar:'الإمامُ النسائيُّ قدوةٌ في الدقّةِ والعبادةِ والشجاعة — خدمَ سنّةَ النبيِّ ﷺ بعلمٍ دقيقٍ وقالَ الحقَّ وصبرَ عليه.',
      en:'An-Nasa\u2019i is a model of precision, worship, and courage — he served the Prophet\u2019s ﷺ Sunnah with precise knowledge, spoke the truth, and was patient for it.' },
    reflect:[
      { ar:'كان النسائيُّ دقيقاً في معرفةِ مَن يأخذُ عنه. كيف تتثبّتُ ممّن تتعلّمُ منه؟', en:'An-Nasa\u2019i was precise about whom he learned from. How do you verify those you learn from?' },
      { ar:'قالَ الحقَّ وصبرَ على الأذى. هل تقولُ الحقَّ بشجاعةٍ وأدب؟', en:'He spoke the truth and endured harm. Do you speak the truth with courage and courtesy?' },
    ],
  },
};
