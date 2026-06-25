// data/chapters/fatima.js — Heroes · فاطمةُ الزهراء (full chapter; Story tab uses data/stories/fatima.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · صحيح البخاري ومسلم
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.fatima = {
  id:'fatima', era:'heroes', icon:'crescent',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'فاطمةُ الزهراء', en:'Fatima az-Zahra' },
  tag:{ ar:'سيّدةُ نساءِ العالمين', en:'Mistress of the women of the worlds' },
  accent:'#1F7A5A', accent2:'#3F9A7A',
  greeting:{ ar:'أهلاً يا بطل! فاطمةُ الزهراءُ رضي الله عنها بنتُ النبيِّ ﷺ وأحبُّ الناسِ إليه، سيّدةُ نساءِ العالمين، الصابرةُ القانعةُ البارّة. تعالَ نتعلّمْ من بِرِّها وصبرِها.',
    en:'Hello, hero! Fatima az-Zahra, the Prophet\u2019s ﷺ daughter and the dearest of people to him, mistress of the women of the worlds — patient, content, and devoted. Come, let\'s learn from her devotion and patience.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ: «فاطمةُ بضعةٌ منّي، فمن أغضبها أغضبني» — وقال إنّها سيّدةُ نساءِ أهلِ الجنّة.',
      en:'The Prophet ﷺ said: "Fatima is a part of me; whoever angers her angers me" — and said she is the mistress of the women of Paradise.' },
    who:{ ar:'هي <b>فاطمةُ بنتُ محمّدٍ ﷺ</b>، أصغرُ بناتِه وأحبُّهنَّ إليه، <b>سيّدةُ نساءِ العالمين</b>. لُقِّبتْ بـ<b>«الزهراء»</b>. كانت <b>أشبهَ الناسِ بالنبيِّ ﷺ</b> هَدْياً وسَمْتاً، إذا دخلتْ عليه قامَ لها وأجلسها مكانَه. تزوّجها <b>عليُّ بنُ أبي طالب</b>، فعاشتْ حياةً <b>بسيطةً قانعةً صابرة</b>، تطحنُ وتخدمُ بيتَها بيدِها. وهي أمُّ <b>الحسنِ والحسين</b> سيّدي شبابِ أهلِ الجنّة. كانت بارّةً بأبيها، أحبَّها النبيُّ ﷺ حبّاً عظيماً وأخبرها أنّها أوّلُ أهلِه لحوقاً به.',
      en:'She is <b>Fatima bint Muhammad ﷺ</b>, his youngest and dearest daughter, <b>mistress of the women of the worlds</b>. She was titled <b>"az-Zahra" (the Radiant)</b>. She <b>most resembled the Prophet ﷺ</b> in manner and bearing; when she entered upon him he would stand for her and seat her in his place. She married <b>Ali ibn Abi Talib</b> and lived a <b>simple, content, patient</b> life, grinding grain and serving her home with her own hands. She is the mother of <b>al-Hasan and al-Husayn</b>, the two masters of the youth of Paradise. She was devoted to her father; the Prophet ﷺ loved her greatly and told her she would be the first of his family to follow him.' },
    facts:[
      { ar:'بنتُ النبيِّ ﷺ وأحبُّ الناسِ إليه.', en:'The Prophet\u2019s ﷺ daughter and the dearest of people to him.' },
      { ar:'سيّدةُ نساءِ العالمينَ وأهلِ الجنّة.', en:'Mistress of the women of the worlds and of Paradise.' },
      { ar:'أشبهُ الناسِ بالنبيِّ ﷺ هَدْياً وسَمْتاً.', en:'She most resembled the Prophet ﷺ in manner and bearing.' },
      { ar:'عاشتْ بسيطةً قانعةً صابرةً مع عليٍّ.', en:'She lived simply, content and patient, with Ali.' },
      { ar:'أمُّ الحسنِ والحسينِ سيّدي شبابِ الجنّة.', en:'Mother of al-Hasan and al-Husayn, masters of Paradise\u2019s youth.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأتْ في بيتِ النبوّةِ أحبَّ بناتِه إليه.',en:'She grew up in the household of prophethood, his dearest daughter.'} },
      { when:{ar:'المؤازرة',en:'Support'}, what:{ar:'آزرتْ أباها في أذى قريشٍ صغيرة.',en:'She supported her father against Quraysh\u2019s harm while young.'} },
      { when:{ar:'الزواج',en:'Marriage'}, what:{ar:'تزوّجتْ عليّاً وعاشتْ حياةً بسيطة.',en:'She married Ali and lived a simple life.'} },
      { when:{ar:'الأمومة',en:'Motherhood'}, what:{ar:'أنجبتِ الحسنَ والحسين.',en:'She bore al-Hasan and al-Husayn.'} },
      { when:{ar:'البِشارة',en:'Glad Tidings'}, what:{ar:'بشّرها النبيُّ ﷺ بسيادةِ نساءِ الجنّة.',en:'The Prophet ﷺ gave her tidings of leading Paradise\u2019s women.'} },
    ],
    ayah:{ ar:'﴿ إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا ﴾', ref:{ ar:'الأحزاب ٣٣', en:'Al-Ahzab 33' } },
  },

  story:[
    { title:{ ar:'سيّدةُ نساءِ العالمين', en:'Mistress of the Women of the Worlds' },
      pages:[
        { scene:'madinah', text:{ ar:'كانت <b>فاطمةُ الزهراء</b> بنتَ النبيِّ ﷺ وأحبَّ الناسِ إليه، سيّدةَ نساءِ العالمين. أشبهتِ النبيَّ ﷺ هَدْياً، وعاشتْ بسيطةً قانعةً صابرةً مع عليٍّ، بارّةً بأبيها. وهي أمُّ الحسنِ والحسين.',
          en:'<b>Fatima az-Zahra</b> was the Prophet\u2019s ﷺ daughter and the dearest of people to him, mistress of the women of the worlds. She resembled the Prophet ﷺ in manner, lived simply, content and patient with Ali, devoted to her father. She is the mother of al-Hasan and al-Husayn.' } } ] }
  ],

  traits:[
    { ar:'البِرّ', en:'Devotion to parents' }, { ar:'الصبر', en:'Patience' },
    { ar:'القناعة', en:'Contentment' }, { ar:'الطُّهر', en:'Purity' },
  ],
  lessons:[
    { icon:'❤️', color:'#1F7A5A', title:{ar:'برَّ والديك',en:'Honor your parents'},
      body:{ar:'كانت فاطمةُ بارّةً بأبيها تخدمُه وتؤازرُه. بِرُّ الوالدينِ من أعظمِ الأعمالِ عند الله.',en:'Fatima was devoted to her father, serving and supporting him. Honoring parents is among the greatest deeds before Allah.'},
      apply:{ar:'أبرُّ والديَّ وأخدمُهما بحبّ.',en:'I honor my parents and serve them with love.'} },
    { icon:'🌿', color:'#3F9A7A', title:{ar:'اقنعْ بالقليل',en:'Be content with little'},
      body:{ar:'عاشتْ فاطمةُ حياةً بسيطةً قانعةً رغمَ أنّها بنتُ النبيِّ ﷺ. القناعةُ غنى القلب.',en:'Fatima lived a simple, content life though she was the Prophet\u2019s ﷺ daughter. Contentment is the heart\u2019s richness.'},
      apply:{ar:'أرضى بما عندي وأشكرُ الله.',en:'I am content with what I have and thank Allah.'} },
    { icon:'💪', color:'#176B4E', title:{ar:'اصبِرْ على المشقّة',en:'Be patient through hardship'},
      body:{ar:'كانت فاطمةُ تطحنُ وتخدمُ بيتَها بيدِها بصبر. العملُ والصبرُ شرفٌ لا عيبَ فيه.',en:'Fatima ground grain and served her home with her own hands, patiently. Work and patience are an honor, never a shame.'},
      apply:{ar:'أعملُ بيدي وأصبِرُ على التعب.',en:'I work with my hands and bear effort patiently.'} },
    { icon:'✨', color:'#1F7A5A', title:{ar:'احفظْ طُهرَك وحياءك',en:'Guard your purity and modesty'},
      body:{ar:'كانت فاطمةُ مثالاً في الطُّهرِ والحياءِ والأدب. الحياءُ زينةٌ تحفظُ صاحبَها.',en:'Fatima was a model of purity, modesty, and good manners. Modesty is an adornment that protects its owner.'},
      apply:{ar:'أحفظُ حيائي وأدبي في كلِّ حال.',en:'I guard my modesty and manners in every situation.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ ﴾', ref:{ ar:'الأحزاب ٣٣', en:'Al-Ahzab 33' } },
    dua:{ ar:'اللّهُمَّ ارزقني بِرَّ الوالدينِ والقناعةَ والصبرَ والطُّهر', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أبرُّ والديَّ وأخدمُهما بحبّ.', en:'I honor my parents and serve them with love.' },
        { ar:'أقنعُ بما عندي وأصبِرُ على المشقّة.', en:'I am content and patient through hardship.' },
        { ar:'أحفظُ طُهري وحيائي وأدبي.', en:'I guard my purity, modesty, and manners.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'من هي فاطمةُ الزهراء؟',en:'Who is Fatima az-Zahra?'},
          options:[{ar:'بنتُ النبيِّ ﷺ وسيّدةُ نساءِ العالمين',en:'The Prophet\u2019s ﷺ daughter and mistress of the women of the worlds'},{ar:'أختُ عمر',en:'Umar\u2019s sister'},{ar:'زوجةُ أبي بكر',en:'Abu Bakr\u2019s wife'}], answer:0 },
        { q:{ar:'كيف عاشتْ فاطمةُ مع عليٍّ؟',en:'How did Fatima live with Ali?'},
          options:[{ar:'حياةً بسيطةً قانعةً صابرة',en:'A simple, content, patient life'},{ar:'في ترفٍ كبير',en:'In great luxury'},{ar:'في قصور',en:'In palaces'}], answer:0 },
        { q:{ar:'من ابنا فاطمةَ رضي الله عنها؟',en:'Who are Fatima\u2019s two sons?'},
          options:[{ar:'الحسنُ والحسين',en:'Al-Hasan and al-Husayn'},{ar:'الحسنُ ومعاوية',en:'Al-Hasan and Mu\u2019awiya'},{ar:'عمرُ وعثمان',en:'Umar and Uthman'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'فاطمةُ سيّدةُ نساءِ العالمين.',en:'Fatima is the mistress of the women of the worlds.'}, t:true },
        { statement:{ar:'كانت بارّةً بأبيها النبيِّ ﷺ.',en:'She was devoted to her father the Prophet ﷺ.'}, t:true },
        { statement:{ar:'عاشتْ في ترفٍ ولم تعملْ شيئاً.',en:'She lived in luxury and did no work.'}, t:false },
        { statement:{ar:'هي أمُّ الحسنِ والحسين.',en:'She is the mother of al-Hasan and al-Husayn.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'الزهراء',en:'Az-Zahra'}, b:{ar:'لقبُ فاطمة',en:'Fatima\u2019s title'} },
        { a:{ar:'عليٌّ',en:'Ali'}, b:{ar:'زوجُها',en:'Her husband'} },
        { a:{ar:'الحسنُ والحسين',en:'Al-Hasan & al-Husayn'}, b:{ar:'ابناها',en:'Her two sons'} },
        { a:{ar:'سيّدةُ نساءِ الجنّة',en:'Mistress of Paradise\u2019s women'}, b:{ar:'بشّرها النبيُّ ﷺ بها',en:'The Prophet ﷺ gave her this tiding'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ البِرِّ والطُّهر', en:'Medal of Devotion & Purity' },
    stickers:[
      { icon:'crescent',color:'#1F7A5A', title:{ar:'سيّدةُ النساء',en:'Mistress of Women'} },
      { icon:'heart',  color:'#3F9A7A', title:{ar:'البارّةُ بأبيها',en:'Devoted to Her Father'} },
      { icon:'leaf',   color:'#176B4E', title:{ar:'القانعةُ الصابرة',en:'Content & Patient'} },
      { icon:'star',   color:'#1F7A5A', title:{ar:'أمُّ الحسنينِ',en:'Mother of al-Hasanayn'} },
    ],
    moral:{ ar:'فاطمةُ قدوةٌ في البِرِّ والصبرِ والقناعةِ والطُّهر — سيّدةُ نساءِ العالمينَ وأحبُّ الناسِ لقلبِ النبيِّ ﷺ.',
      en:'Fatima is a model of devotion, patience, contentment, and purity — mistress of the women of the worlds and the dearest of people to the Prophet\u2019s ﷺ heart.' },
    reflect:[
      { ar:'كانت فاطمةُ بارّةً بأبيها. كيف تبرُّ والديك وتُدخِلُ السرورَ عليهما؟', en:'Fatima was devoted to her father. How do you honor your parents and bring them joy?' },
      { ar:'عاشتْ قانعةً صابرةً. هل ترضى بما عندَك وتشكرُ الله؟', en:'She lived content and patient. Are you content with what you have and thankful to Allah?' },
    ],
  },
};
