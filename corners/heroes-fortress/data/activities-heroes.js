// data/activities-heroes.js — Challenge Hall for the HEROES era (الأبطال والأعلام).
// 8 activities × 3 levels = 24 challenges. Companions, scholars, leaders & scientists.
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.heroes = {
  era: 'heroes',
  title: { ar: 'ساحةُ الأبطال', en: 'Heroes Challenge Hall' },
  sub:   { ar: '٨ أنشطة — كلٌّ على ٣ مستويات (٢٤ تحدّياً)', en: '8 activities — each at 3 levels (24 challenges)' },
  medal: { ar: 'وريثُ الأبطال', en: 'Heir of the Heroes' },
  list: [

  /* 1 · Companion & title */
  { id:'titles', icon:'🏷️', title:{ ar:'الصحابيُّ ولقبُه', en:'Companion & title' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'أبو بكر',en:'Abu Bakr'}, b:{ar:'الصدّيق',en:'As-Siddiq'} },
        { a:{ar:'عمر',en:'Umar'},        b:{ar:'الفاروق',en:'Al-Faruq'} },
        { a:{ar:'حمزة',en:'Hamza'},      b:{ar:'أسدُ الله',en:'Lion of Allah'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'عثمان',en:'Uthman'},    b:{ar:'ذو النورين',en:'Of the Two Lights'} },
        { a:{ar:'خالد بن الوليد',en:'Khalid'}, b:{ar:'سيفُ الله المسلول',en:'Drawn Sword of Allah'} },
        { a:{ar:'أبو عبيدة',en:'Abu Ubaydah'}, b:{ar:'أمينُ الأمّة',en:'Trustee of the Ummah'} },
        { a:{ar:'حمزة',en:'Hamza'},      b:{ar:'سيّدُ الشهداء',en:'Master of Martyrs'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'خالد بن الوليد',en:'Khalid'}, b:{ar:'سيفُ الله المسلول',en:'Drawn Sword of Allah'} },
        { a:{ar:'أبو هريرة',en:'Abu Hurayrah'}, b:{ar:'أكثرُ الصحابةِ روايةً للحديث',en:'Greatest narrator of hadith'} },
        { a:{ar:'عبد الله بن عباس',en:'Ibn Abbas'}, b:{ar:'حَبرُ الأمّةِ وتُرجمانُ القرآن',en:'Scholar of the Ummah'} },
        { a:{ar:'مصعب بن عمير',en:'Musab'}, b:{ar:'أوّلُ سفيرٍ في الإسلام',en:'First envoy of Islam'} },
        { a:{ar:'سعد بن أبي وقّاص',en:'Saad'}, b:{ar:'أوّلُ من رمى بسهمٍ في سبيلِ الله',en:'First to shoot for Allah'} },
      ]},
    } },

  /* 2 · Scholar & field */
  { id:'scholars', icon:'📚', title:{ ar:'العالِمُ وعِلمُه', en:'Scholar & field' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'الإمامُ البخاري',en:'Al-Bukhari'}, b:{ar:'الحديثُ الصحيح',en:'Authentic hadith'} },
        { a:{ar:'الإمامُ أبو حنيفة',en:'Abu Hanifah'}, b:{ar:'الفقه',en:'Jurisprudence'} },
        { a:{ar:'الإمامُ مالك',en:'Malik'}, b:{ar:'المُوَطَّأ',en:'Al-Muwatta'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'البخاريُّ ومسلم',en:'Bukhari & Muslim'}, b:{ar:'أصحُّ كتبِ الحديث',en:'Soundest hadith books'} },
        { a:{ar:'الأئمةُ الأربعة',en:'The Four Imams'}, b:{ar:'مذاهبُ الفقه',en:'Schools of fiqh'} },
        { a:{ar:'الطبري',en:'At-Tabari'}, b:{ar:'التفسيرُ والتاريخ',en:'Tafsir & history'} },
        { a:{ar:'النووي',en:'An-Nawawi'}, b:{ar:'رياضُ الصالحين',en:'Riyad as-Salihin'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'ابنُ كثير',en:'Ibn Kathir'}, b:{ar:'التفسيرُ والبدايةُ والنهاية',en:'Tafsir & history' } },
        { a:{ar:'ابنُ تيمية',en:'Ibn Taymiyyah'}, b:{ar:'العقيدةُ والفقه',en:'Creed & fiqh'} },
        { a:{ar:'ابنُ القيّم',en:'Ibn al-Qayyim'}, b:{ar:'تزكيةُ النفسِ والفقه',en:'Spiritual refinement'} },
        { a:{ar:'الترمذيُّ والنسائي',en:'Tirmidhi & Nasai'}, b:{ar:'كتبُ السُّنن',en:'The Sunan books'} },
        { a:{ar:'ابنُ خلدون',en:'Ibn Khaldun'}, b:{ar:'علمُ الاجتماعِ والتاريخ',en:'Sociology & history'} },
      ]},
    } },

  /* 3 · Muslim scientist & invention */
  { id:'science', icon:'🔬', title:{ ar:'العالِمُ واكتشافُه', en:'Scientist & discovery' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'الجبرُ والأرقام',en:'Algebra & algorithms'} },
        { a:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'}, b:{ar:'علمُ البصريات',en:'Optics'} },
        { a:{ar:'ابنُ سينا',en:'Ibn Sina'}, b:{ar:'الطبّ',en:'Medicine'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'مؤسّسُ الجبر',en:'Founder of algebra'} },
        { a:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'}, b:{ar:'أبو علمِ البصريات',en:'Father of optics'} },
        { a:{ar:'الزهراوي',en:'Az-Zahrawi'}, b:{ar:'الجراحةُ وأدواتُها',en:'Surgery & instruments'} },
        { a:{ar:'عبّاسُ بنُ فرناس',en:'Ibn Firnas'}, b:{ar:'محاولةُ الطيران',en:'Early attempt at flight'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'جابرُ بنُ حيّان',en:'Jabir ibn Hayyan'}, b:{ar:'الكيمياء',en:'Chemistry'} },
        { a:{ar:'ابنُ النفيس',en:'Ibn al-Nafis'}, b:{ar:'الدورةُ الدمويةُ الصغرى',en:'Pulmonary circulation'} },
        { a:{ar:'البيروني',en:'Al-Biruni'}, b:{ar:'الفلكُ وقياسُ الأرض',en:'Astronomy & geodesy'} },
        { a:{ar:'الإدريسي',en:'Al-Idrisi'}, b:{ar:'الجغرافيا والخرائط',en:'Geography & maps'} },
        { a:{ar:'ابنُ بطّوطة',en:'Ibn Battuta'}, b:{ar:'الرحلةُ والاستكشاف',en:'Travel & exploration'} },
      ]},
    } },

  /* 4 · Who am I? */
  { id:'whoami', icon:'🕵️', title:{ ar:'مَن أنا؟', en:'Who am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'كنتُ أوّلَ الخلفاءِ الراشدين.',en:'I was the first Rightly-Guided Caliph.'},
                {ar:'رافقتُ النبيَّ ﷺ في الغار.',en:'I was with the Prophet ﷺ in the cave.'},
                {ar:'لُقّبتُ بالصدّيق.',en:'I was called As-Siddiq.'},
                {ar:'أنا أبو بكر.',en:'I am Abu Bakr.'} ],
        options:[{ar:'أبو بكر',en:'Abu Bakr'},{ar:'عمر',en:'Umar'},{ar:'عليّ',en:'Ali'},{ar:'عثمان',en:'Uthman'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'كنتُ خليفةً عادلاً قويّاً.',en:'I was a just, strong caliph.'},
                {ar:'في عهدي فُتحتْ فارسُ والشام.',en:'In my reign Persia and Sham were opened.'},
                {ar:'لُقّبتُ بالفاروقِ لتفريقي بين الحقِّ والباطل.',en:'I was called Al-Faruq.'},
                {ar:'أنا عمرُ بنُ الخطّاب.',en:'I am Umar ibn al-Khattab.'} ],
        options:[{ar:'عمر بن الخطاب',en:'Umar'},{ar:'أبو بكر',en:'Abu Bakr'},{ar:'خالد',en:'Khalid'},{ar:'سعد',en:'Saad'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'كنتُ عالِماً جمعتُ أصحَّ الأحاديث.',en:'I was a scholar who collected the soundest hadith.'},
                {ar:'رحلتُ سنينَ في طلبِ الحديث.',en:'I traveled years seeking hadith.'},
                {ar:'كتابي أصحُّ كتابٍ بعد القرآن.',en:'My book is the most authentic after the Qur’an.'},
                {ar:'أنا الإمامُ البخاري.',en:'I am Imam al-Bukhari.'} ],
        options:[{ar:'البخاري',en:'Al-Bukhari'},{ar:'مسلم',en:'Muslim'},{ar:'الترمذي',en:'At-Tirmidhi'},{ar:'أبو داود',en:'Abu Dawud'}], answer:0 },
    } },

  /* 5 · True / False */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'أبو بكرٍ أوّلُ الخلفاءِ الراشدين.',en:'Abu Bakr was the first caliph.'}, t:true },
        { statement:{ar:'بلالٌ كان أوّلَ مؤذّنٍ في الإسلام.',en:'Bilal was the first muezzin.'}, t:true },
        { statement:{ar:'خالدُ بنُ الوليدِ كان عالِماً في الطبّ.',en:'Khalid ibn al-Walid was a physician.'}, t:false },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'الأئمةُ الأربعةُ: أبو حنيفة ومالك والشافعي وأحمد.',en:'The four Imams: Abu Hanifah, Malik, Shafii, Ahmad.'}, t:true },
        { statement:{ar:'صحيحُ البخاريِّ من كتبِ الحديث.',en:'Sahih al-Bukhari is a hadith book.'}, t:true },
        { statement:{ar:'عمرُ بنُ الخطّابِ هو الخليفةُ الثالث.',en:'Umar was the third caliph.'}, t:false },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'الخوارزميُّ يُنسبُ إليه علمُ الجبر.',en:'Algebra is attributed to Al-Khwarizmi.'}, t:true },
        { statement:{ar:'ابنُ الهيثمِ رائدُ علمِ البصريات.',en:'Ibn al-Haytham pioneered optics.'}, t:true },
        { statement:{ar:'ابنُ سينا اشتهرَ بالجغرافيا فقط.',en:'Ibn Sina was famous only for geography.'}, t:false },
      ]},
    } },

  /* 6 · Quiz */
  { id:'facts', icon:'❓', title:{ ar:'اختبارُ الأبطال', en:'Heroes quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'مَن لُقّبَ بأسدِ الله؟',en:'Who was called the Lion of Allah?'},
          options:[{ar:'حمزة',en:'Hamza'},{ar:'خالد',en:'Khalid'},{ar:'عليّ',en:'Ali'}], answer:0 },
        { q:{ar:'مَن أوّلُ مؤذّنٍ في الإسلام؟',en:'Who was the first muezzin?'},
          options:[{ar:'بلال',en:'Bilal'},{ar:'عمّار',en:'Ammar'},{ar:'زيد',en:'Zayd'}], answer:0 },
        { q:{ar:'كم عددُ الخلفاءِ الراشدين؟',en:'How many Rightly-Guided Caliphs?'},
          options:[{ar:'أربعة',en:'Four'},{ar:'ثلاثة',en:'Three'},{ar:'خمسة',en:'Five'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'مَن جمعَ القرآنَ في مصحفٍ واحدٍ في عهده؟',en:'Who compiled the Qur’an into one Mushaf?'},
          options:[{ar:'عثمان',en:'Uthman'},{ar:'عمر',en:'Umar'},{ar:'عليّ',en:'Ali'}], answer:0 },
        { q:{ar:'مَن أكثرُ الصحابةِ روايةً للحديث؟',en:'Who narrated the most hadith?'},
          options:[{ar:'أبو هريرة',en:'Abu Hurayrah'},{ar:'ابن عمر',en:'Ibn Umar'},{ar:'أنس',en:'Anas'}], answer:0 },
        { q:{ar:'مَن مؤلّفُ «رياضِ الصالحين»؟',en:'Who authored Riyad as-Salihin?'},
          options:[{ar:'النووي',en:'An-Nawawi'},{ar:'البخاري',en:'Al-Bukhari'},{ar:'ابن كثير',en:'Ibn Kathir'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'مَن يُلقَّبُ بحَبرِ الأمّةِ وتُرجمانِ القرآن؟',en:'Who is called the Scholar of the Ummah?'},
          options:[{ar:'ابن عباس',en:'Ibn Abbas'},{ar:'ابن مسعود',en:'Ibn Masud'},{ar:'أبيّ بن كعب',en:'Ubayy'}], answer:0 },
        { q:{ar:'مَن مؤسّسُ علمِ الاجتماعِ صاحبُ المقدّمة؟',en:'Who founded sociology (the Muqaddimah)?'},
          options:[{ar:'ابن خلدون',en:'Ibn Khaldun'},{ar:'الطبري',en:'At-Tabari'},{ar:'المسعودي',en:'Al-Masudi'}], answer:0 },
        { q:{ar:'مَن وصفَ الدورةَ الدمويةَ الرئويةَ أوّلاً؟',en:'Who first described pulmonary circulation?'},
          options:[{ar:'ابن النفيس',en:'Ibn al-Nafis'},{ar:'ابن سينا',en:'Ibn Sina'},{ar:'الرازي',en:'Ar-Razi'}], answer:0 },
      ]},
    } },

  /* 7 · Memory flip (hero ↔ symbol) */
  { id:'flip', icon:'🃏', title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'أبو بكر',en:'Abu Bakr'}, b:{ar:'🕳️',en:'🕳️'} },
        { a:{ar:'بلال',en:'Bilal'},      b:{ar:'📣',en:'📣'} },
        { a:{ar:'خالد',en:'Khalid'},     b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'البخاري',en:'Bukhari'}, b:{ar:'📖',en:'📖'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'أبو بكر',en:'Abu Bakr'}, b:{ar:'🕳️',en:'🕳️'} },
        { a:{ar:'عمر',en:'Umar'},        b:{ar:'⚖️',en:'⚖️'} },
        { a:{ar:'خالد',en:'Khalid'},     b:{ar:'⚔️',en:'⚔️'} },
        { a:{ar:'الخوارزمي',en:'Khwarizmi'}, b:{ar:'🔢',en:'🔢'} },
        { a:{ar:'ابن الهيثم',en:'Ibn al-Haytham'}, b:{ar:'🔭',en:'🔭'} },
        { a:{ar:'ابن سينا',en:'Ibn Sina'}, b:{ar:'⚕️',en:'⚕️'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'حمزة',en:'Hamza'},      b:{ar:'🦁',en:'🦁'} },
        { a:{ar:'صلاحُ الدين',en:'Salah ad-Din'}, b:{ar:'🕌',en:'🕌'} },
        { a:{ar:'محمد الفاتح',en:'Mehmed'}, b:{ar:'🏰',en:'🏰'} },
        { a:{ar:'طارق بن زياد',en:'Tariq'}, b:{ar:'⛰️',en:'⛰️'} },
        { a:{ar:'الخوارزمي',en:'Khwarizmi'}, b:{ar:'🔢',en:'🔢'} },
        { a:{ar:'الزهراوي',en:'Az-Zahrawi'}, b:{ar:'⚕️',en:'⚕️'} },
        { a:{ar:'ابن بطّوطة',en:'Ibn Battuta'}, b:{ar:'🧭',en:'🧭'} },
        { a:{ar:'البخاري',en:'Bukhari'}, b:{ar:'📖',en:'📖'} },
      ]},
    } },

  /* 8 · Order (caliphs) */
  { id:'order', icon:'🔢', title:{ ar:'ترتيبُ الخلفاءِ الراشدين', en:'Order of the Rightly-Guided Caliphs' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'أبو بكر',en:'Abu Bakr'},{ar:'عمر',en:'Umar'},{ar:'عثمان',en:'Uthman'},{ar:'عليّ',en:'Ali'} ]},
      intermediate:{ type:'order', items:[
        {ar:'أبو بكر الصدّيق',en:'Abu Bakr'},{ar:'عمر الفاروق',en:'Umar'},
        {ar:'عثمان ذو النورين',en:'Uthman'},{ar:'عليُّ بن أبي طالب',en:'Ali'},{ar:'الحسنُ بن عليّ',en:'Al-Hasan'} ]},
      advanced:{ type:'order', items:[
        {ar:'أبو بكر',en:'Abu Bakr'},{ar:'عمر',en:'Umar'},{ar:'عثمان',en:'Uthman'},{ar:'عليّ',en:'Ali'},
        {ar:'الحسنُ بن عليّ',en:'Al-Hasan'},{ar:'عمرُ بنُ عبد العزيز (الخامس)',en:'Umar ibn Abdul-Aziz'} ]},
    } },

  ],
};
