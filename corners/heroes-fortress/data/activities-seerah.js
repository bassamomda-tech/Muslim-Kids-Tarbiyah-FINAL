// data/activities-seerah.js — Challenge Hall for the SEERAH era.
// 9 activities, each at 3 levels (beginner · intermediate · advanced) = 27 challenges.
// Grounded in the well-known, authentic seerah of the Prophet ﷺ.
// Same schema as data/activities.js (types: order·match·whoAmI·trueFalse·quiz·flip·maze).
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.seerah = {
  era: 'seerah',
  title: { ar: 'ساحةُ السيرة', en: 'Seerah Challenge Hall' },
  sub:   { ar: '٩ أنشطة — كلٌّ على ٣ مستويات (٢٧ تحدّياً)', en: '9 activities — each at 3 levels (27 challenges)' },
  medal: { ar: 'حافظُ السيرة', en: 'Keeper of the Seerah' },
  list: [

  /* 1 · Chronological order */
  { id:'order', icon:'🔢', title:{ ar:'الترتيبُ الزمنيّ', en:'Chronological order' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'المولدُ الشريف',en:'The blessed birth'},{ar:'البعثةُ في غارِ حِراء',en:'Revelation in Hira'},
        {ar:'الهجرةُ إلى المدينة',en:'Hijrah to Madinah'},{ar:'فتحُ مكّة',en:'Conquest of Makkah'} ]},
      intermediate:{ type:'order', items:[
        {ar:'المولد',en:'Birth'},{ar:'الزواجُ من خديجة',en:'Marriage to Khadijah'},{ar:'البعثة',en:'Revelation'},
        {ar:'الإسراءُ والمعراج',en:'Night Journey'},{ar:'الهجرة',en:'Hijrah'} ]},
      advanced:{ type:'order', items:[
        {ar:'البعثة',en:'Revelation'},{ar:'الجهرُ بالدعوة',en:'Public call'},{ar:'الهجرةُ إلى الحبشة',en:'Hijrah to Abyssinia'},
        {ar:'عامُ الحزن',en:'Year of Sorrow'},{ar:'الهجرةُ إلى المدينة',en:'Hijrah to Madinah'},
        {ar:'غزوةُ بدر',en:'Battle of Badr'},{ar:'فتحُ مكّة',en:'Conquest of Makkah'},{ar:'حجّةُ الوداع',en:'Farewell Pilgrimage'} ]},
    } },

  /* 2 · Event & place */
  { id:'places', icon:'📍', title:{ ar:'الحدثُ ومكانُه', en:'Event & place' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'المولدُ والبعثة',en:'Birth & revelation'}, b:{ar:'مكّة 🕋',en:'Makkah 🕋'} },
        { a:{ar:'أوّلُ وحيٍ نزل',en:'First revelation'},    b:{ar:'غارُ حِراء 🏔️',en:'Cave of Hira 🏔️'} },
        { a:{ar:'بناءُ أوّلِ مسجد',en:'First mosque built'}, b:{ar:'قُباء 🕌',en:'Quba 🕌'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'اختفاءُ النبيِّ وأبي بكرٍ في الهجرة',en:'Hiding during Hijrah'}, b:{ar:'غارُ ثَور 🕳️',en:'Cave of Thawr 🕳️'} },
        { a:{ar:'أوّلُ غزوةٍ كبرى',en:'First major battle'},  b:{ar:'بدر ⚔️',en:'Badr ⚔️'} },
        { a:{ar:'بيعةُ العقبة',en:'Pledge of Aqaba'},        b:{ar:'مِنى (العقبة) 🤝',en:'Mina (Aqaba) 🤝'} },
        { a:{ar:'صُلحُ الحُديبية',en:'Treaty'},               b:{ar:'الحُديبية 📜',en:'Hudaybiyah 📜'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'غزوةُ الخندق (الأحزاب)',en:'Battle of the Trench'}, b:{ar:'شمالُ المدينة 🏗️',en:'North of Madinah 🏗️'} },
        { a:{ar:'فتحُ الحصون اليهودية',en:'Conquest of fortresses'}, b:{ar:'خيبر 🛡️',en:'Khaybar 🛡️'} },
        { a:{ar:'غزوةُ أُحُد',en:'Battle of Uhud'},                 b:{ar:'جبلُ أُحُد ⛰️',en:'Mount Uhud ⛰️'} },
        { a:{ar:'آخرُ غزوةٍ قادها النبيُّ ﷺ',en:'Last expedition'}, b:{ar:'تبوك 🐪',en:'Tabuk 🐪'} },
        { a:{ar:'حجّةُ الوداع',en:'Farewell sermon'},               b:{ar:'عرفة 🏔️',en:'Arafah 🏔️'} },
      ]},
    } },

  /* 3 · Who am I? */
  { id:'whoami', icon:'🕵️', title:{ ar:'مَن أنا؟', en:'Who am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'كنتُ أوّلَ من آمنَ بالنبيِّ ﷺ من النساء.',en:'I was the first woman to believe in the Prophet ﷺ.'},
                {ar:'كنتُ زوجَه وسندَه في أوّلِ الدعوة.',en:'I was his wife and support at the start.'},
                {ar:'واسيتُه بمالي ونفسي.',en:'I comforted him with my wealth and self.'},
                {ar:'أنا أمُّ المؤمنين خديجة.',en:'I am Khadijah, mother of the believers.'} ],
        options:[{ar:'خديجة',en:'Khadijah'},{ar:'عائشة',en:'Aisha'},{ar:'فاطمة',en:'Fatimah'},{ar:'حفصة',en:'Hafsah'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'كنتُ عبداً يُعذَّبُ على الإيمان.',en:'I was a slave tortured for my faith.'},
                {ar:'قلتُ تحتَ العذاب: أحدٌ أحد.',en:'Under torture I said: One, One (Ahad).'},
                {ar:'اشتراني أبو بكرٍ فأعتقني.',en:'Abu Bakr bought and freed me.'},
                {ar:'صرتُ أوّلَ مؤذّنٍ في الإسلام.',en:'I became the first muezzin of Islam.'} ],
        options:[{ar:'بلال',en:'Bilal'},{ar:'عمّار',en:'Ammar'},{ar:'صُهيب',en:'Suhayb'},{ar:'زيد',en:'Zayd'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'هاجرتُ مع النبيِّ ﷺ ورافقتُه في الغار.',en:'I migrated with the Prophet ﷺ and was with him in the cave.'},
                {ar:'أنفقتُ مالي كلَّه في سبيلِ الله.',en:'I spent all my wealth for Allah’s sake.'},
                {ar:'صدّقتُه في الإسراءِ فلُقّبتُ بالصدّيق.',en:'I believed the Night Journey, so I was called As-Siddiq.'},
                {ar:'صرتُ أوّلَ الخلفاءِ الراشدين.',en:'I became the first of the Rightly-Guided Caliphs.'} ],
        options:[{ar:'أبو بكر',en:'Abu Bakr'},{ar:'عمر',en:'Umar'},{ar:'عثمان',en:'Uthman'},{ar:'عليّ',en:'Ali'}], answer:0 },
    } },

  /* 4 · True or False */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'وُلد النبيُّ ﷺ في مكّة.',en:'The Prophet ﷺ was born in Makkah.'}, t:true },
        { statement:{ar:'نزل أوّلُ الوحيِ في غارِ حِراء.',en:'The first revelation came in the Cave of Hira.'}, t:true },
        { statement:{ar:'هاجر النبيُّ ﷺ إلى الطائفِ هجرتَه الكبرى.',en:'The Prophet’s ﷺ great Hijrah was to Taif.'}, t:false },
        { statement:{ar:'كانت خديجةُ أوّلَ من آمنَ به.',en:'Khadijah was the first to believe in him.'}, t:true },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'حملَ جبريلُ عليه السلام الوحيَ إلى النبيِّ ﷺ.',en:'Jibril brought the revelation to the Prophet ﷺ.'}, t:true },
        { statement:{ar:'كانت غزوةُ أُحُدٍ أوّلَ غزوةٍ كبرى.',en:'Uhud was the first major battle.'}, t:false },
        { statement:{ar:'بنى النبيُّ ﷺ مسجدَ قُباءٍ أوّلَ قدومِه المدينة.',en:'He built Masjid Quba on arriving at Madinah.'}, t:true },
        { statement:{ar:'في عامِ الحزنِ تُوفّيت خديجةُ وأبو طالب.',en:'In the Year of Sorrow, Khadijah and Abu Talib died.'}, t:true },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'كان صُلحُ الحُديبيةِ فتحاً مبيناً.',en:'The Treaty of Hudaybiyah was a clear victory.'}, t:true },
        { statement:{ar:'فُتحت مكّةُ في السنةِ العاشرةِ للهجرة.',en:'Makkah was conquered in 10 AH.'}, t:false },
        { statement:{ar:'آخى النبيُّ ﷺ بين المهاجرينَ والأنصار.',en:'The Prophet ﷺ paired the Muhajirun and Ansar in brotherhood.'}, t:true },
        { statement:{ar:'كانت غزوةُ تبوكَ آخرَ غزواتِه ﷺ.',en:'Tabuk was his ﷺ last expedition.'}, t:true },
      ]},
    } },

  /* 5 · Seerah facts quiz */
  { id:'facts', icon:'❓', title:{ ar:'اختبارُ السيرة', en:'Seerah quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'في أيِّ مدينةٍ وُلد النبيُّ ﷺ؟',en:'In which city was the Prophet ﷺ born?'},
          options:[{ar:'مكّة',en:'Makkah'},{ar:'المدينة',en:'Madinah'},{ar:'الطائف',en:'Taif'}], answer:0 },
        { q:{ar:'مَن أنزلَ الوحيَ على النبيِّ ﷺ؟',en:'Who brought the revelation?'},
          options:[{ar:'جبريل',en:'Jibril'},{ar:'ميكائيل',en:'Mikail'},{ar:'إسرافيل',en:'Israfil'}], answer:0 },
        { q:{ar:'إلى أيِّ مدينةٍ كانتِ الهجرة؟',en:'To which city was the Hijrah?'},
          options:[{ar:'المدينة',en:'Madinah'},{ar:'الحبشة',en:'Abyssinia'},{ar:'الشام',en:'Sham'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'كم كان عمرُ النبيِّ ﷺ عند البعثة؟',en:'How old was the Prophet ﷺ at the first revelation?'},
          options:[{ar:'٤٠ سنة',en:'40 years'},{ar:'٢٥ سنة',en:'25 years'},{ar:'٥٠ سنة',en:'50 years'}], answer:0 },
        { q:{ar:'أوّلُ سورةٍ نزلت بدأت بكلمة؟',en:'The first revelation began with the word?'},
          options:[{ar:'اقرأ',en:'Iqra (Read)'},{ar:'الحمد',en:'Al-Hamd'},{ar:'يا أيها',en:'Ya ayyuha'}], answer:0 },
        { q:{ar:'مَن رافقَ النبيَّ ﷺ في الهجرة؟',en:'Who accompanied the Prophet ﷺ in the Hijrah?'},
          options:[{ar:'أبو بكر',en:'Abu Bakr'},{ar:'عمر',en:'Umar'},{ar:'عليّ',en:'Ali'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'في أيِّ سنةٍ هجريةٍ كانت غزوةُ بدر؟',en:'In which Hijri year was Badr?'},
          options:[{ar:'٢ هـ',en:'2 AH'},{ar:'٣ هـ',en:'3 AH'},{ar:'٥ هـ',en:'5 AH'}], answer:0 },
        { q:{ar:'ما الغزوةُ التي حُفر فيها الخندق؟',en:'Which battle involved digging a trench?'},
          options:[{ar:'الأحزاب',en:'Al-Ahzab'},{ar:'بدر',en:'Badr'},{ar:'حُنين',en:'Hunayn'}], answer:0 },
        { q:{ar:'في أيِّ سنةٍ كان فتحُ مكّة؟',en:'In which year was the Conquest of Makkah?'},
          options:[{ar:'٨ هـ',en:'8 AH'},{ar:'٦ هـ',en:'6 AH'},{ar:'١٠ هـ',en:'10 AH'}], answer:0 },
      ]},
    } },

  /* 6 · Battle & year */
  { id:'battles', icon:'⚔️', title:{ ar:'الغزوةُ وسنتُها', en:'Battle & year' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'بدر',en:'Badr'},   b:{ar:'٢ هـ',en:'2 AH'} },
        { a:{ar:'أُحُد',en:'Uhud'}, b:{ar:'٣ هـ',en:'3 AH'} },
        { a:{ar:'الأحزاب',en:'Ahzab'}, b:{ar:'٥ هـ',en:'5 AH'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'بدر',en:'Badr'},         b:{ar:'٢ هـ',en:'2 AH'} },
        { a:{ar:'أُحُد',en:'Uhud'},       b:{ar:'٣ هـ',en:'3 AH'} },
        { a:{ar:'صُلحُ الحُديبية',en:'Hudaybiyah'}, b:{ar:'٦ هـ',en:'6 AH'} },
        { a:{ar:'فتحُ مكّة',en:'Conquest of Makkah'}, b:{ar:'٨ هـ',en:'8 AH'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'بدر',en:'Badr'},       b:{ar:'٢ هـ',en:'2 AH'} },
        { a:{ar:'الأحزاب',en:'Ahzab'},  b:{ar:'٥ هـ',en:'5 AH'} },
        { a:{ar:'خيبر',en:'Khaybar'},   b:{ar:'٧ هـ',en:'7 AH'} },
        { a:{ar:'فتحُ مكّة',en:'Conquest'}, b:{ar:'٨ هـ',en:'8 AH'} },
        { a:{ar:'تبوك',en:'Tabuk'},     b:{ar:'٩ هـ',en:'9 AH'} },
      ]},
    } },

  /* 7 · Companion & role */
  { id:'roles', icon:'🏷️', title:{ ar:'الصحابيُّ ودورُه', en:'Companion & role' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'بلال',en:'Bilal'},     b:{ar:'أوّلُ مؤذّن',en:'First muezzin'} },
        { a:{ar:'أبو بكر',en:'Abu Bakr'},b:{ar:'الصدّيق · رفيقُ الغار',en:'As-Siddiq · cave companion'} },
        { a:{ar:'خديجة',en:'Khadijah'}, b:{ar:'أوّلُ من آمن',en:'First to believe'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'حمزة',en:'Hamza'},     b:{ar:'أسدُ الله · شهيدُ أُحُد',en:'Lion of Allah · martyr of Uhud'} },
        { a:{ar:'عليّ',en:'Ali'},       b:{ar:'نام في فراشِ النبيِّ ليلةَ الهجرة',en:'Slept in the Prophet’s bed at Hijrah'} },
        { a:{ar:'مصعب بن عمير',en:'Musab'}, b:{ar:'أوّلُ سفيرٍ إلى المدينة',en:'First envoy to Madinah'} },
        { a:{ar:'أبو بكر',en:'Abu Bakr'}, b:{ar:'رفيقُ الغار',en:'Companion of the cave'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'خالد بن الوليد',en:'Khalid'},  b:{ar:'سيفُ الله المسلول',en:'The Drawn Sword of Allah'} },
        { a:{ar:'سعد بن أبي وقّاص',en:'Saad'},  b:{ar:'أوّلُ من رمى بسهمٍ في سبيلِ الله',en:'First to shoot an arrow for Allah'} },
        { a:{ar:'زيد بن حارثة',en:'Zayd'},      b:{ar:'الصحابيُّ الذي سُمّي في القرآن',en:'Named in the Qur’an'} },
        { a:{ar:'جعفر بن أبي طالب',en:'Jafar'}, b:{ar:'متحدّثُ المسلمين عند النجاشي',en:'Spokesman before the Negus'} },
        { a:{ar:'سلمان الفارسي',en:'Salman'},   b:{ar:'صاحبُ فكرةِ الخندق',en:'Proposed the trench'} },
      ]},
    } },

  /* 8 · Memory flip (event ↔ symbol) */
  { id:'flip', icon:'🃏', title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'البعثة',en:'Revelation'}, b:{ar:'🏔️',en:'🏔️'} },
        { a:{ar:'الهجرة',en:'Hijrah'},    b:{ar:'🐪',en:'🐪'} },
        { a:{ar:'بدر',en:'Badr'},         b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'فتحُ مكّة',en:'Conquest'},b:{ar:'🕋',en:'🕋'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'البعثة',en:'Revelation'}, b:{ar:'🏔️',en:'🏔️'} },
        { a:{ar:'الهجرة',en:'Hijrah'},    b:{ar:'🐪',en:'🐪'} },
        { a:{ar:'بدر',en:'Badr'},         b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'مسجدُ قُباء',en:'Quba'},  b:{ar:'🕌',en:'🕌'} },
        { a:{ar:'الأذان',en:'Adhan'},     b:{ar:'📣',en:'📣'} },
        { a:{ar:'حجّةُ الوداع',en:'Farewell'}, b:{ar:'🏔️',en:'🕋'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'غارُ حِراء',en:'Hira'},   b:{ar:'🏔️',en:'🏔️'} },
        { a:{ar:'غارُ ثَور',en:'Thawr'},   b:{ar:'🕳️',en:'🕳️'} },
        { a:{ar:'الخندق',en:'Trench'},     b:{ar:'🏗️',en:'🏗️'} },
        { a:{ar:'خيبر',en:'Khaybar'},     b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'الحُديبية',en:'Hudaybiyah'}, b:{ar:'📜',en:'📜'} },
        { a:{ar:'تبوك',en:'Tabuk'},       b:{ar:'🐪',en:'🐪'} },
        { a:{ar:'فتحُ مكّة',en:'Conquest'},b:{ar:'🕋',en:'🕋'} },
        { a:{ar:'الأذان',en:'Adhan'},     b:{ar:'📣',en:'📣'} },
      ]},
    } },

  /* 9 · Hijrah maze */
  { id:'maze', icon:'🧭', title:{ ar:'متاهةُ الهجرة', en:'Hijrah maze' },
    levels:{
      beginner:{ type:'maze', size:6, goal:'🕌', start:{ar:'مكّة',en:'Makkah'}, dest:{ar:'المدينة',en:'Madinah'},
        hook:{ar:'أوصِلِ النبيَّ ﷺ من مكّةَ إلى المدينة',en:'Lead the Prophet ﷺ from Makkah to Madinah'} },
      intermediate:{ type:'maze', size:8, goal:'🕳️', start:{ar:'مكّة',en:'Makkah'}, dest:{ar:'غارُ ثَور',en:'Cave of Thawr'},
        hook:{ar:'اختبئْ في غارِ ثَورٍ قبل المسير',en:'Reach the Cave of Thawr to hide first'} },
      advanced:{ type:'maze', size:10, goal:'🕌', start:{ar:'غارُ ثَور',en:'Thawr'}, dest:{ar:'قُباء',en:'Quba'},
        hook:{ar:'أكمِلِ الطريقَ إلى قُباءَ حيثُ أوّلُ مسجد',en:'Complete the route to Quba, the first mosque'} },
    } },

  ],
};
