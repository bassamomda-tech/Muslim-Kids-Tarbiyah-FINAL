// data/chapters/thabit.js — Heroes · ثابتُ بنُ قيسِ بنِ شمّاس (full chapter; Story tab uses data/stories/thabit.js)
// Sources: صحيح البخاري · صحيح مسلم · سنن الترمذي · الإصابة · سير أعلام النبلاء · إسلام ويب · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.thabit = {
  id:'thabit', era:'heroes', icon:'whisper',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'ثابتُ بنُ قيس', en:'Thabit ibn Qays' },
  tag:{ ar:'خطيبُ رسولِ الله ﷺ', en:'The orator of the Messenger of Allah ﷺ' },
  accent:'#2A5A8A', accent2:'#4A7AAA',
  greeting:{ ar:'أهلاً يا بطل! ثابتُ بنُ قيسٍ رضي الله عنه خطيبُ الأنصارِ وخطيبُ رسولِ الله ﷺ، كان قويَّ الصوتِ فصيحَ اللسان، وخافَ أن يكونَ صوتُه قد أغضبَ ربَّه، فبشّره النبيُّ ﷺ بالجنّة. تعالَ نتعلّمْ من أدبِه وخشيتِه.',
    en:'Hello, hero! Thabit ibn Qays, the orator of the Ansar and of the Messenger of Allah ﷺ. He had a strong voice and an eloquent tongue, and he feared his loud voice had angered his Lord — so the Prophet ﷺ gave him glad tidings of Paradise. Come, let’s learn from his manners and his awe of Allah.' },

  knowledge:{
    didYouKnow:{ ar:'قال أنسٌ رضي الله عنه بعدَ أن بشّرَ النبيُّ ﷺ ثابتاً بالجنّة: «فكنّا نراه يمشي بين أظهُرِنا رجلٌ من أهلِ الجنّة» — رواه مسلم.',
      en:'After the Prophet ﷺ gave Thabit glad tidings of Paradise, Anas said: "We used to see him walking among us — a man of the people of Paradise." — reported by Muslim.' },
    who:{ ar:'هو <b>ثابتُ بنُ قيسِ بنِ شمّاس</b> الأنصاريُّ الخزرجيُّ، من أهلِ المدينة. كان <b>خطيبَ الأنصار</b>، ويُقالُ له <b>خطيبُ رسولِ الله ﷺ</b>، لأنّه كان يتكلّمُ ويُجيبُ الوفودَ عن النبيِّ ﷺ بفصاحةٍ وقوّة. وكان <b>جَهيرَ الصوت</b> بطبعِه، فلمّا نزلَ قولُه تعالى ﴿لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ﴾ خافَ خوفاً شديداً وجلسَ في بيتِه يبكي، يظنُّ أنّ عملَه قد ضاع! فبشّره النبيُّ ﷺ قائلاً: <b>«بل هو من أهلِ الجنّة»</b>. ومدحه النبيُّ ﷺ فقال: «نِعمَ الرجلُ ثابتُ بنُ قيس»، واستُشهِدَ يومَ <b>اليمامة</b> سنةَ ١٢هـ رضي الله عنه.',
      en:'He is <b>Thabit ibn Qays ibn Shammas</b> of the Ansar, from the Khazraj tribe of Madinah. He was <b>the orator of the Ansar</b>, and was called <b>the orator of the Messenger of Allah ﷺ</b>, because he spoke and answered the visiting delegations on the Prophet’s ﷺ behalf with eloquence and strength. He naturally had a <b>loud voice</b>, so when Allah revealed: "Do not raise your voices above the voice of the Prophet," he was terrified and sat in his house weeping, thinking his deeds had been lost! The Prophet ﷺ gave him glad tidings: <b>"Rather, he is of the people of Paradise."</b> The Prophet ﷺ praised him: "What an excellent man Thabit ibn Qays is!" He was martyred on the day of <b>al-Yamama</b> in 12 AH.' },
    facts:[
      { ar:'خطيبُ الأنصارِ وخطيبُ رسولِ الله ﷺ.', en:'The orator of the Ansar and of the Messenger of Allah ﷺ.' },
      { ar:'بشّره النبيُّ ﷺ بالجنّة — رواه البخاريُّ ومسلم.', en:'The Prophet ﷺ gave him tidings of Paradise — Bukhari & Muslim.' },
      { ar:'خافَ من آيةِ ﴿لَا تَرْفَعُوا أَصْوَاتَكُمْ﴾ لأنّه كان جهيرَ الصوت.', en:'He feared the verse "Do not raise your voices" because his voice was loud.' },
      { ar:'قال فيه النبيُّ ﷺ: «نِعمَ الرجلُ ثابتُ بنُ قيس» — الترمذي.', en:'The Prophet ﷺ said: "What an excellent man Thabit ibn Qays is" — at-Tirmidhi.' },
      { ar:'استُشهِدَ يومَ اليمامةِ سنةَ ١٢هـ.', en:'He was martyred at al-Yamama in 12 AH.' },
    ],
    timeline:[
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'أسلمَ من الأنصارِ في المدينة.',en:'He embraced Islam among the Ansar of Madinah.'} },
      { when:{ar:'الخطابة',en:'The Orator'}, what:{ar:'صارَ خطيبَ الأنصارِ ويُجيبُ الوفودَ عن النبيِّ ﷺ.',en:'He became the Ansar’s orator, answering delegations for the Prophet ﷺ.'} },
      { when:{ar:'نزولُ الآية',en:'The Verse'}, what:{ar:'خافَ من آيةِ رفعِ الصوتِ وجلسَ في بيتِه.',en:'He feared the verse about raised voices and stayed home.'} },
      { when:{ar:'البشارة',en:'Glad Tidings'}, what:{ar:'«بل هو من أهلِ الجنّة».',en:'"Rather, he is of the people of Paradise."'} },
      { when:{ar:'اليمامة',en:'Al-Yamama'}, what:{ar:'استُشهِدَ سنةَ ١٢هـ في خلافةِ أبي بكر.',en:'Martyred in 12 AH, in the caliphate of Abu Bakr.'} },
    ],
    ayah:{ ar:'﴿ إِنَّ الَّذِينَ يَغُضُّونَ أَصْوَاتَهُمْ عِنْدَ رَسُولِ اللَّهِ أُولَٰئِكَ الَّذِينَ امْتَحَنَ اللَّهُ قُلُوبَهُمْ لِلتَّقْوَىٰ ۚ لَهُمْ مَغْفِرَةٌ وَأَجْرٌ عَظِيمٌ ﴾', ref:{ ar:'الحجرات ٣', en:'Al-Hujurat 3' } },
  },

  story:[
    { title:{ ar:'بل هو من أهلِ الجنّة', en:'Rather, He Is of the People of Paradise' },
      pages:[
        { scene:'madinah', text:{ ar:'كان <b>ثابتُ بنُ قيس</b> خطيبَ الأنصارِ وصوتُه عالٍ بطبعِه. فلمّا نزلتْ آيةُ ﴿لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ﴾ جلسَ في بيتِه حزيناً يظنُّ أنّ عملَه ضاع. فافتقده النبيُّ ﷺ وسألَ عنه، ثمّ أرسلَ إليه: <b>«إنّك لستَ من أهلِ النار، ولكنْ من أهلِ الجنّة»</b>.',
          en:'<b>Thabit ibn Qays</b> was the Ansar’s orator, and his voice was naturally loud. When the verse "Do not raise your voices above the voice of the Prophet" was revealed, he sat sadly at home, thinking his deeds were lost. The Prophet ﷺ missed him, asked about him, then sent him word: <b>"You are not of the people of the Fire — rather, of the people of Paradise."</b>' } } ] }
  ],

  traits:[
    { ar:'الأدبُ مع النبيِّ ﷺ', en:'Manners with the Prophet ﷺ' }, { ar:'خشيةُ الله', en:'Awe of Allah' },
    { ar:'الفصاحة', en:'Eloquence' }, { ar:'الشجاعة', en:'Courage' },
  ],
  lessons:[
    { icon:'🤫', color:'#2A5A8A', title:{ar:'اخفِضْ صوتَك بأدب',en:'Lower your voice politely'},
      body:{ar:'مدحَ اللهُ الذين يغضّونَ أصواتَهم عند رسولِه ﷺ. وخفضُ الصوتِ عند الوالدين والمعلّمين ومجالسِ العلمِ من الأدبِ الجميل.',en:'Allah praised those who lower their voices before His Messenger ﷺ. Lowering your voice with parents, teachers and in gatherings of knowledge is beautiful manners.'},
      apply:{ar:'أتكلّمُ بصوتٍ هادئٍ مع والديَّ ومعلّميّ.',en:'I speak in a calm voice with my parents and teachers.'} },
    { icon:'💧', color:'#4A7AAA', title:{ar:'القلبُ الحيُّ يخافُ الخطأ',en:'A living heart fears mistakes'},
      body:{ar:'خافَ ثابتٌ أن يكونَ قد أخطأ وهو لا يشعر. المؤمنُ يُحاسبُ نفسَه ولا يستهينُ بالذنب.',en:'Thabit feared he had erred without knowing. A believer reviews himself and never takes sin lightly.'},
      apply:{ar:'أُراجعُ أعمالي كلَّ يومٍ وأتوبُ من أخطائي.',en:'I review my deeds each day and repent from my mistakes.'} },
    { icon:'🗣️', color:'#1A4A7A', title:{ar:'سخِّرْ موهبتَك للحقّ',en:'Use your gift for the truth'},
      body:{ar:'كان ثابتٌ فصيحاً، فجعلَ لسانَه في الدفاعِ عن الإسلامِ والردِّ على الوفود. كلُّ موهبةٍ نعمةٌ نستعملُها في الخير.',en:'Thabit was eloquent, so he used his tongue to defend Islam and answer delegations. Every talent is a blessing to be used for good.'},
      apply:{ar:'أستعملُ موهبتي في نفعِ الناسِ ونصرةِ الحقّ.',en:'I use my talent to benefit people and support the truth.'} },
    { icon:'🌿', color:'#2A5A8A', title:{ar:'بشارةُ النبيِّ ﷺ تُطمئنُ القلب',en:'The Prophet’s ﷺ tidings bring peace'},
      body:{ar:'افتقدَ النبيُّ ﷺ ثابتاً وسألَ عنه وطمأنه. هكذا نتفقّدُ أصحابَنا ونُدخلُ السرورَ على قلوبِهم.',en:'The Prophet ﷺ missed Thabit, asked about him and reassured him. This is how we check on our friends and bring joy to their hearts.'},
      apply:{ar:'أسألُ عن صديقي إذا غابَ وأُطمئنُه.',en:'I ask about my friend when he is absent and reassure him.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ ﴾', ref:{ ar:'الحجرات ٢', en:'Al-Hujurat 2' } },
    dua:{ ar:'اللّهُمَّ أَعِنّي على ذِكرِكَ وشُكرِكَ وحُسنِ عبادتِك', ref:{ ar:'رواه أبو داود والنسائي', en:'Abu Dawud & an-Nasa’i' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أخفِضُ صوتي بأدبٍ عند الكبار.', en:'I lower my voice politely before my elders.' },
        { ar:'أُحاسبُ نفسي وأتوبُ إذا أخطأت.', en:'I review myself and repent when I make a mistake.' },
        { ar:'أجعلُ موهبتي في خدمةِ الحقّ.', en:'I put my talent in the service of the truth.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بماذا اشتهرَ ثابتُ بنُ قيس؟',en:'What was Thabit ibn Qays known as?'},
          options:[{ar:'مؤذّنُ الرسول ﷺ',en:'The Prophet’s caller to prayer'},{ar:'خطيبُ رسولِ الله ﷺ',en:'The orator of the Messenger ﷺ'},{ar:'كاتبُ الوحي',en:'The scribe of revelation'}], answer:1 },
        { q:{ar:'لماذا جلسَ ثابتٌ في بيتِه حزيناً؟',en:'Why did Thabit sit sadly at home?'},
          options:[{ar:'كان مريضاً',en:'He was ill'},{ar:'غضبَ من أصحابِه',en:'He was angry with his friends'},{ar:'خافَ أنّ صوتَه العاليَ أحبطَ عملَه',en:'He feared his loud voice had ruined his deeds'}], answer:2 },
        { q:{ar:'ماذا قال النبيُّ ﷺ عن ثابت؟',en:'What did the Prophet ﷺ say about Thabit?'},
          options:[{ar:'بل هو من أهلِ الجنّة',en:'Rather, he is of the people of Paradise'},{ar:'لا تُكلّموه',en:'Do not speak to him'},{ar:'ليخرجْ من المدينة',en:'Let him leave Madinah'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'كان ثابتٌ خطيبَ الأنصار.',en:'Thabit was the orator of the Ansar.'}, t:true },
        { statement:{ar:'لم يسألِ النبيُّ ﷺ عن ثابتٍ حين غاب.',en:'The Prophet ﷺ did not ask about Thabit when he was absent.'}, t:false },
        { statement:{ar:'مدحَ اللهُ الذين يغضّونَ أصواتَهم عند رسولِه ﷺ.',en:'Allah praised those who lower their voices before His Messenger ﷺ.'}, t:true },
        { statement:{ar:'استُشهِدَ ثابتٌ يومَ اليمامة.',en:'Thabit was martyred on the day of al-Yamama.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'خطيبُ الأنصار',en:'Orator of the Ansar'}, b:{ar:'ثابتُ بنُ قيس',en:'Thabit ibn Qays'} },
        { a:{ar:'سورةُ الحجرات',en:'Surat al-Hujurat'}, b:{ar:'لا ترفعوا أصواتَكم',en:'Do not raise your voices'} },
        { a:{ar:'بشارةُ النبيِّ ﷺ',en:'The Prophet’s ﷺ tidings'}, b:{ar:'من أهلِ الجنّة',en:'Of the people of Paradise'} },
        { a:{ar:'اليمامة',en:'Al-Yamama'}, b:{ar:'مكانُ شهادتِه',en:'Place of his martyrdom'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الخطيبِ الخاشع', en:'Medal of the Humble Orator' },
    stickers:[
      { icon:'whisper', color:'#2A5A8A', title:{ar:'الصوتُ المؤدَّب',en:'The Polite Voice'} },
      { icon:'star',    color:'#4A7AAA', title:{ar:'من أهلِ الجنّة',en:'Of the People of Paradise'} },
      { icon:'book',    color:'#1A4A7A', title:{ar:'خطيبُ الرسول ﷺ',en:'The Messenger’s Orator'} },
      { icon:'shield',  color:'#2A5A8A', title:{ar:'نِعمَ الرجل',en:'An Excellent Man'} },
    ],
    moral:{ ar:'ثابتُ بنُ قيسٍ قدوةٌ في الأدبِ وخشيةِ الله — كان فصيحاً قويَّ الصوت، لكنّه خافَ أن يُخطئَ مع رسولِ الله ﷺ، فبشّره بالجنّة.',
      en:'Thabit ibn Qays is a model of manners and awe of Allah — eloquent with a strong voice, yet he feared erring before the Messenger ﷺ, who gave him tidings of Paradise.' },
    reflect:[
      { ar:'خافَ ثابتٌ أن يكونَ قد أخطأ وهو لا يشعر. هل تُراجعُ كلامَك وأفعالَك؟', en:'Thabit feared he had erred without knowing. Do you review your words and actions?' },
      { ar:'كيف يكونُ صوتُك حين تتكلّمُ مع والديك ومعلّميك؟', en:'How does your voice sound when you speak with your parents and teachers?' },
    ],
  },
};
