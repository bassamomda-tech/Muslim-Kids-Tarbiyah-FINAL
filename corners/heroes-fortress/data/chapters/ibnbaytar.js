// data/chapters/ibnbaytar.js — Scientists · ابن البيطار (full chapter; Story tab uses data/stories/ibnbaytar.js)
// Sources: عيون الأنباء · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.ibnbaytar = {
  id:'ibnbaytar', era:'heroes', icon:'leaf',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'ابنُ البيطار', en:'Ibn al-Baytar' },
  tag:{ ar:'عالمُ النباتِ والصيدلة', en:'Botanist & pharmacist' },
  accent:'#3A6A2A', accent2:'#5A8A4A',
  greeting:{ ar:'أهلاً يا بطل! ابنُ البيطارِ رحمه الله عالمُ النباتِ الأعظم، رحلَ يجمعُ النباتاتِ من كلِّ البلاد، وجمعَ مئاتِ الأدويةِ النافعة. تعالَ نتعلّمْ من صبرِه على الرحلةِ ودقّتِه في العلم.',
    en:'Hello, hero! Ibn al-Baytar, the greatest botanist, who traveled gathering plants from every land and collected hundreds of beneficial medicines. Come, let\'s learn from his patience in travel and his precision in knowledge.' },

  knowledge:{
    didYouKnow:{ ar:'رحلَ ابنُ البيطارِ من الأندلسِ إلى الشامِ ومصرَ واليونانِ يجمعُ النباتاتِ بنفسِه، ووصفَ أكثرَ من ألفٍ وأربعِ مئةِ نباتٍ ودواء — أعظمَ موسوعةٍ نباتيّةٍ في زمانِه!',
      en:'Ibn al-Baytar traveled from Andalusia to Sham, Egypt, and Greece gathering plants himself, and described more than 1,400 plants and medicines — the greatest botanical encyclopedia of his time!' },
    who:{ ar:'هو <b>ضياءُ الدينِ ابنُ البيطار</b>، عالمُ نباتٍ وصيدلةٍ عظيمٌ من الأندلس، يُعَدُّ من أعظمِ علماءِ النباتِ في التاريخ. لم يكتفِ بقراءةِ الكتب، بل <b>رحلَ بنفسِه</b> من الأندلسِ إلى المغربِ والشامِ ومصرَ وبلادِ اليونان، يجمعُ النباتاتِ ويدرسُها في مواطنِها، ويتأكّدُ من خصائصِها بنفسِه. جمعَ علمَه في كتابٍ موسوعيٍّ عظيمٍ وصفَ فيه أكثرَ من <b>ألفٍ وأربعِ مئةِ نباتٍ ودواء</b>، وبيّنَ فوائدَها في علاجِ الأمراض. كان <b>دقيقاً صبوراً أميناً</b>، لا يكتبُ عن نباتٍ حتى يراه ويتأكّدَ منه. مثالٌ للعالمِ الميدانيِّ الذي يجمعُ العلمَ بالرحلةِ والتجربةِ لا بالقراءةِ فقط.',
      en:'He is <b>Diya\u2019 ad-Din Ibn al-Baytar</b>, a great botanist and pharmacist from Andalusia, considered among the greatest botanists in history. He was not content with reading books, but <b>traveled himself</b> from Andalusia to the Maghrib, Sham, Egypt, and the lands of Greece, gathering plants and studying them in their habitats, verifying their properties himself. He gathered his knowledge in a great encyclopedic book in which he described more than <b>1,400 plants and medicines</b>, explaining their benefits in treating diseases. He was <b>precise, patient, and honest</b>, not writing about a plant until he saw it and verified it. A model of the field scientist who gathers knowledge by travel and experiment, not merely reading.' },
    facts:[
      { ar:'عالمُ نباتٍ وصيدلةٍ عظيمٌ من الأندلس.', en:'A great botanist and pharmacist from Andalusia.' },
      { ar:'رحلَ يجمعُ النباتاتِ من بلادٍ كثيرة.', en:'He traveled gathering plants from many lands.' },
      { ar:'وصفَ أكثرَ من ألفٍ وأربعِ مئةِ نباتٍ ودواء.', en:'He described more than 1,400 plants and medicines.' },
      { ar:'لا يكتبُ عن نباتٍ حتى يراه ويتأكّدَ منه.', en:'He didn\u2019t write about a plant until he saw and verified it.' },
      { ar:'عالمٌ ميدانيٌّ يجمعُ العلمَ بالرحلةِ والتجربة.', en:'A field scientist gathering knowledge by travel and experiment.' },
    ],
    timeline:[
      { when:{ar:'النشأة',en:'Upbringing'}, what:{ar:'نشأَ في الأندلسِ محبّاً للنباتِ والطبيعة.',en:'He grew up in Andalusia, loving plants and nature.'} },
      { when:{ar:'الرحلة',en:'The Journey'}, what:{ar:'رحلَ يجمعُ النباتاتِ من بلادٍ كثيرة.',en:'He traveled gathering plants from many lands.'} },
      { when:{ar:'الدراسة',en:'Study'}, what:{ar:'درسَ كلَّ نباتٍ في موطنِه بدقّة.',en:'He studied each plant in its habitat precisely.'} },
      { when:{ar:'التأليف',en:'Authorship'}, what:{ar:'جمعَ علمَه في موسوعةٍ نباتيّةٍ عظيمة.',en:'He gathered his knowledge in a great botanical encyclopedia.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'صارتْ كتبُه مرجعاً في النباتِ والدواء.',en:'His books became a reference in plants and medicine.'} },
    ],
    ayah:{ ar:'﴿ وَأَنبَتْنَا فِيهَا مِن كُلِّ شَيْءٍ مَّوْزُونٍ ﴾', ref:{ ar:'الحجر ١٩', en:'Al-Hijr 19' } },
  },

  story:[
    { title:{ ar:'عالمُ النباتِ والصيدلة', en:'Botanist & Pharmacist' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>ابنُ البيطار</b> من أعظمِ علماءِ النباتِ في التاريخ. لم يكتفِ بالكتب، بل رحلَ من الأندلسِ إلى الشامِ ومصرَ واليونانِ يجمعُ النباتاتِ بنفسِه ويدرسُها. وصفَ أكثرَ من ألفٍ وأربعِ مئةِ نباتٍ ودواء، وكان دقيقاً صبوراً أميناً لا يكتبُ عن نباتٍ حتى يراه.',
          en:'<b>Ibn al-Baytar</b> was among the greatest botanists in history. He was not content with books but traveled from Andalusia to Sham, Egypt, and Greece, gathering and studying plants himself. He described more than 1,400 plants and medicines and was precise, patient, and honest — not writing about a plant until he saw it.' } } ] }
  ],

  traits:[
    { ar:'الصبرُ على الرحلة', en:'Patience in travel' }, { ar:'الدقّة', en:'Precision' },
    { ar:'الأمانة', en:'Honesty' }, { ar:'حبُّ الطبيعة', en:'Love of nature' },
  ],
  lessons:[
    { icon:'🌿', color:'#3A6A2A', title:{ar:'تعلّمْ بالميدانِ لا بالكتبِ فقط',en:'Learn in the field, not just from books'},
      body:{ar:'رحلَ ابنُ البيطارِ ليرى النباتاتِ بنفسِه. العلمُ الميدانيُّ بالتجربةِ والمشاهدةِ أعمقُ وأصدق.',en:'Ibn al-Baytar traveled to see plants himself. Field knowledge through experiment and observation is deeper and truer.'},
      apply:{ar:'أتعلّمُ بالمشاهدةِ والتجربةِ لا بالقراءةِ فقط.',en:'I learn by observation and experiment, not just reading.'} },
    { icon:'🧭', color:'#5A8A4A', title:{ar:'اصبِرْ على طلبِ العلم',en:'Be patient in seeking knowledge'},
      body:{ar:'رحلَ ابنُ البيطارِ بلداناً كثيرةً متحمّلاً المشقّةَ لجمعِ العلم. العلمُ النافعُ يستحقُّ الجهدَ والصبر.',en:'Ibn al-Baytar traveled to many lands, bearing hardship to gather knowledge. Beneficial knowledge is worth effort and patience.'},
      apply:{ar:'أصبِرُ وأبذلُ الجهدَ في طلبِ العلم.',en:'I am patient and exert effort in seeking knowledge.'} },
    { icon:'✔️', color:'#2A5A1A', title:{ar:'تأكّدْ قبلَ أن تكتبَ أو تنقل',en:'Verify before you write or transmit'},
      body:{ar:'لم يكتبْ ابنُ البيطارِ عن نباتٍ حتى يراه ويتأكّدَ منه. الأمانةُ في العلمِ أن تتثبّتَ قبلَ النقل.',en:'Ibn al-Baytar didn\u2019t write about a plant until he saw and verified it. Honesty in knowledge is to verify before transmitting.'},
      apply:{ar:'لا أنقلُ معلومةً حتى أتأكّدَ من صحّتِها.',en:'I don\u2019t transmit information until I verify it.'} },
    { icon:'🍃', color:'#3A6A2A', title:{ar:'تأمّلْ في نِعَمِ اللهِ في النبات',en:'Reflect on Allah\u2019s blessings in plants'},
      body:{ar:'وجدَ ابنُ البيطارِ في النباتاتِ أدويةً تشفي بإذنِ الله. في الطبيعةِ نِعَمٌ ومنافعُ تدعو للشكر.',en:'Ibn al-Baytar found in plants medicines that heal by Allah\u2019s leave. In nature are blessings and benefits inviting gratitude.'},
      apply:{ar:'أتأمّلُ في نِعَمِ اللهِ في الطبيعةِ وأشكرُه.',en:'I reflect on Allah\u2019s blessings in nature and thank Him.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَأَنبَتْنَا فِيهَا مِن كُلِّ شَيْءٍ مَّوْزُونٍ ﴾', ref:{ ar:'الحجر ١٩', en:'Al-Hijr 19' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ والصبرَ على طلبِه والأمانةَ في نقلِه', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتعلّمُ بالمشاهدةِ والتجربةِ لا بالقراءةِ فقط.', en:'I learn by observation and experiment, not just reading.' },
        { ar:'أصبِرُ وأبذلُ الجهدَ في طلبِ العلم.', en:'I am patient and exert effort in seeking knowledge.' },
        { ar:'لا أنقلُ معلومةً حتى أتأكّدَ من صحّتِها.', en:'I don\u2019t transmit information until I verify it.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ علمٍ اشتهرَ ابنُ البيطار؟',en:'What science was Ibn al-Baytar famous for?'},
          options:[{ar:'النباتِ والصيدلة',en:'Botany and pharmacy'},{ar:'الفلك',en:'Astronomy'},{ar:'الجبر',en:'Algebra'}], answer:0 },
        { q:{ar:'كيف جمعَ ابنُ البيطارِ علمَه بالنبات؟',en:'How did Ibn al-Baytar gather his knowledge of plants?'},
          options:[{ar:'رحلَ وجمعَ النباتاتِ بنفسِه ودرسَها',en:'He traveled and gathered plants himself and studied them'},{ar:'من الكتبِ فقط',en:'From books only'},{ar:'بالتخمين',en:'By guessing'}], answer:0 },
        { q:{ar:'كم نباتاً ودواءً وصفَ تقريباً؟',en:'About how many plants and medicines did he describe?'},
          options:[{ar:'أكثرَ من ألفٍ وأربعِ مئة',en:'More than 1,400'},{ar:'عشرة',en:'Ten'},{ar:'مئة',en:'A hundred'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'ابنُ البيطارِ من أعظمِ علماءِ النبات.',en:'Ibn al-Baytar was among the greatest botanists.'}, t:true },
        { statement:{ar:'رحلَ يجمعُ النباتاتِ من بلادٍ كثيرة.',en:'He traveled gathering plants from many lands.'}, t:true },
        { statement:{ar:'كان يكتبُ عن نباتاتٍ لم يرَها بلا تأكّد.',en:'He wrote about plants he never saw without verifying.'}, t:false },
        { statement:{ar:'وصفَ أكثرَ من ألفٍ وأربعِ مئةِ نباتٍ ودواء.',en:'He described more than 1,400 plants and medicines.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'النبات',en:'Plants'}, b:{ar:'علمُه الذي برعَ فيه',en:'The science he excelled in'} },
        { a:{ar:'الرحلة',en:'Travel'}, b:{ar:'جمعَ بها النباتاتِ بنفسِه',en:'By it he gathered plants himself'} },
        { a:{ar:'١٤٠٠ نبات',en:'1,400 plants'}, b:{ar:'وصفها في موسوعتِه',en:'He described them in his encyclopedia'} },
        { a:{ar:'الأمانة',en:'Honesty'}, b:{ar:'لا يكتبُ حتى يتأكّد',en:'He didn\u2019t write until he verified'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ النباتِ والرحلة', en:'Medal of Botany & Travel' },
    stickers:[
      { icon:'leaf',  color:'#3A6A2A', title:{ar:'عالمُ النبات',en:'The Botanist'} },
      { icon:'compass',color:'#5A8A4A', title:{ar:'الرحّالةُ الجامع',en:'The Gathering Traveler'} },
      { icon:'gem',   color:'#2A5A1A', title:{ar:'الصيدليُّ الدقيق',en:'The Precise Pharmacist'} },
      { icon:'star',  color:'#3A6A2A', title:{ar:'الأمينُ في العلم',en:'Honest in Knowledge'} },
    ],
    moral:{ ar:'ابنُ البيطارِ قدوةٌ في الصبرِ على طلبِ العلمِ والدقّةِ والأمانة — جمعَ علمَه بالرحلةِ والمشاهدةِ ونفعَ الناسَ بأدويةِ النبات.',
      en:'Ibn al-Baytar is a model of patience in seeking knowledge, precision, and honesty — he gathered his knowledge through travel and observation and benefited people with plant medicines.' },
    reflect:[
      { ar:'رحلَ ابنُ البيطارِ ليتعلّمَ بالمشاهدة. كيف تتعلّمُ بالتجربةِ لا بالقراءةِ فقط؟', en:'Ibn al-Baytar traveled to learn by observation. How do you learn by experiment, not just reading?' },
      { ar:'كان لا يكتبُ حتى يتأكّد. هل تتثبّتُ من المعلوماتِ قبلَ نقلِها؟', en:'He didn\u2019t write until he verified. Do you verify information before transmitting it?' },
    ],
  },
};
