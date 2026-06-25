// data/activities-creativity.js — Challenge Hall for THE INNOVATORS' ACADEMY (الأكاديمية).
// Covers sections 4 (المستكشفون · scientists) & 5 (عقول منيرة · fiqh & hadith scholars).
// 8 activities × 3 levels = 24 challenges. Era id: 'creativity'.
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.creativity = {
  era: 'creativity',
  title: { ar: 'ساحةُ المبدعين', en: 'Innovators Challenge Hall' },
  sub:   { ar: '٨ أنشطة — كلٌّ على ٣ مستويات (٢٤ تحدّياً)', en: '8 activities — each at 3 levels (24 challenges)' },
  medal: { ar: 'عقلٌ منير', en: 'Illuminating Mind' },
  list: [

  /* 1 · Scientist & field */
  { id:'fields', icon:'🔬', title:{ ar:'العالِمُ وعِلمُه', en:'Scientist & field' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'الجبر',en:'Algebra'} },
        { a:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'}, b:{ar:'البصريات',en:'Optics'} },
        { a:{ar:'ابنُ سينا',en:'Ibn Sina'}, b:{ar:'الطبّ',en:'Medicine'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'جابرُ بنُ حيّان',en:'Jabir'}, b:{ar:'الكيمياء',en:'Chemistry'} },
        { a:{ar:'البيروني',en:'Al-Biruni'}, b:{ar:'الفلكُ والجغرافيا',en:'Astronomy & geography'} },
        { a:{ar:'الإدريسي',en:'Al-Idrisi'}, b:{ar:'رسمُ الخرائط',en:'Mapmaking'} },
        { a:{ar:'الزهراوي',en:'Az-Zahrawi'}, b:{ar:'الجراحة',en:'Surgery'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'ابنُ النفيس',en:'Ibn al-Nafis'}, b:{ar:'الدورةُ الدمويةُ الصغرى',en:'Pulmonary circulation'} },
        { a:{ar:'ابنُ خلدون',en:'Ibn Khaldun'}, b:{ar:'علمُ الاجتماع',en:'Sociology'} },
        { a:{ar:'عباسُ بنُ فِرناس',en:'Ibn Firnas'}, b:{ar:'محاولةُ الطيران',en:'Attempt at flight'} },
        { a:{ar:'ابنُ البيطار',en:'Ibn al-Baytar'}, b:{ar:'النباتُ والصيدلة',en:'Botany & pharmacy'} },
        { a:{ar:'ابنُ بطّوطة',en:'Ibn Battuta'}, b:{ar:'الرحلةُ والاستكشاف',en:'Travel & exploration'} },
      ]},
    } },

  /* 2 · Scholar & honorific */
  { id:'titles', icon:'🏷️', title:{ ar:'العالِمُ ولقبُه', en:'Scholar & honorific' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'أبو حنيفة',en:'Abu Hanifa'}, b:{ar:'الإمامُ الأعظم',en:'The Great Imam'} },
        { a:{ar:'مالك',en:'Malik'}, b:{ar:'إمامُ دارِ الهجرة',en:'Imam of Madinah'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'أميرُ المؤمنينَ في الحديث',en:'Foremost in hadith'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'الشافعي',en:'Ash-Shafii'}, b:{ar:'ناصرُ السنّة',en:'Defender of the Sunnah'} },
        { a:{ar:'أحمدُ بنُ حنبل',en:'Ahmad'}, b:{ar:'إمامُ أهلِ السنّة',en:'Imam of Ahl as-Sunnah'} },
        { a:{ar:'ابنُ تيمية',en:'Ibn Taymiyya'}, b:{ar:'شيخُ الإسلام',en:'Shaykh al-Islam'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'صاحبُ أصحِّ كتاب',en:'Author of the soundest book'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'أبو القاسمِ الزهراوي',en:'Az-Zahrawi'}, b:{ar:'أبو الجراحة',en:'Father of surgery'} },
        { a:{ar:'جابرُ بنُ حيّان',en:'Jabir'}, b:{ar:'أبو الكيمياء',en:'Father of chemistry'} },
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'أبو الجبرِ والخوارزميات',en:'Father of algebra & algorithms'} },
        { a:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'}, b:{ar:'أبو علمِ البصريات',en:'Father of optics'} },
        { a:{ar:'ابنُ سينا',en:'Ibn Sina'}, b:{ar:'أميرُ الأطبّاء',en:'Prince of physicians'} },
      ]},
    } },

  /* 3 · Hadith book & author */
  { id:'books', icon:'📖', title:{ ar:'الكتابُ ومؤلّفُه', en:'Book & author' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'صحيحُ البخاري',en:'Sahih al-Bukhari'}, b:{ar:'الإمامُ البخاري',en:'Al-Bukhari'} },
        { a:{ar:'صحيحُ مسلم',en:'Sahih Muslim'}, b:{ar:'الإمامُ مسلم',en:'Muslim'} },
        { a:{ar:'المُوَطَّأ',en:'Al-Muwatta'}, b:{ar:'الإمامُ مالك',en:'Malik'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'سننُ أبي داود',en:'Sunan Abi Dawud'}, b:{ar:'أبو داود',en:'Abu Dawud'} },
        { a:{ar:'جامعُ الترمذي',en:"Jami at-Tirmidhi"}, b:{ar:'الترمذي',en:'At-Tirmidhi'} },
        { a:{ar:'سننُ النسائي',en:"Sunan an-Nasai"}, b:{ar:'النسائي',en:'An-Nasai'} },
        { a:{ar:'سننُ ابنِ ماجه',en:'Sunan Ibn Majah'}, b:{ar:'ابنُ ماجه',en:'Ibn Majah'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'الرسالة (أصولُ الفقه)',en:'Ar-Risala'}, b:{ar:'الشافعي',en:'Ash-Shafii'} },
        { a:{ar:'المسند',en:'Al-Musnad'}, b:{ar:'أحمدُ بنُ حنبل',en:'Ahmad'} },
        { a:{ar:'المقدّمة',en:'The Muqaddimah'}, b:{ar:'ابنُ خلدون',en:'Ibn Khaldun'} },
        { a:{ar:'القانونُ في الطبّ',en:'The Canon of Medicine'}, b:{ar:'ابنُ سينا',en:'Ibn Sina'} },
        { a:{ar:'المناظر (البصريات)',en:'Book of Optics'}, b:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'} },
      ]},
    } },

  /* 4 · Who am I? */
  { id:'whoami', icon:'🕵️', title:{ ar:'مَن أنا؟', en:'Who am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'أسّستُ علماً جديداً في الرياضيات.',en:'I founded a new branch of mathematics.'},
                {ar:'من اسمي جاءت كلمةُ «الخوارزمية».',en:'The word “algorithm” comes from my name.'},
                {ar:'ألّفتُ كتابَ الجبرِ والمقابلة.',en:'I wrote the book of Al-Jabr.'},
                {ar:'أنا الخوارزمي.',en:'I am Al-Khwarizmi.'} ],
        options:[{ar:'الخوارزمي',en:'Al-Khwarizmi'},{ar:'ابن سينا',en:'Ibn Sina'},{ar:'البيروني',en:'Al-Biruni'},{ar:'الخيّام',en:'Khayyam'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'درستُ كيف نرى الأشياء.',en:'I studied how we see things.'},
                {ar:'أثبتُّ أنّ الضوءَ يدخلُ العينَ لا العكس.',en:'I proved light enters the eye, not the reverse.'},
                {ar:'أسّستُ المنهجَ التجريبيّ في البصريات.',en:'I founded the experimental method in optics.'},
                {ar:'أنا ابنُ الهيثم.',en:'I am Ibn al-Haytham.'} ],
        options:[{ar:'ابن الهيثم',en:'Ibn al-Haytham'},{ar:'الرازي',en:'Ar-Razi'},{ar:'جابر',en:'Jabir'},{ar:'الزهراوي',en:'Az-Zahrawi'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'كنتُ طبيباً عالِماً دقيقاً.',en:'I was a precise physician-scholar.'},
                {ar:'وصفتُ كيف يجري الدمُ بين القلبِ والرئة.',en:'I described blood flow between heart and lungs.'},
                {ar:'سبقتُ الأوروبيين بقرون.',en:'I preceded Europeans by centuries.'},
                {ar:'أنا ابنُ النفيس.',en:'I am Ibn al-Nafis.'} ],
        options:[{ar:'ابن النفيس',en:'Ibn al-Nafis'},{ar:'ابن سينا',en:'Ibn Sina'},{ar:'الرازي',en:'Ar-Razi'},{ar:'ابن البيطار',en:'Ibn al-Baytar'}], answer:0 },
    } },

  /* 5 · Quiz */
  { id:'facts', icon:'❓', title:{ ar:'اختبارُ العلوم', en:'Knowledge quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'مَن يُلقَّبُ بأبي الجبر؟',en:'Who is the father of algebra?'},
          options:[{ar:'الخوارزمي',en:'Al-Khwarizmi'},{ar:'ابن سينا',en:'Ibn Sina'},{ar:'جابر',en:'Jabir'}], answer:0 },
        { q:{ar:'صحيحُ البخاريِّ كتابٌ في؟',en:'Sahih al-Bukhari is a book of?'},
          options:[{ar:'الحديث',en:'Hadith'},{ar:'الطبّ',en:'Medicine'},{ar:'الفلك',en:'Astronomy'}], answer:0 },
        { q:{ar:'كم عددُ الأئمةِ المشهورينَ في الفقه؟',en:'How many famous fiqh imams?'},
          options:[{ar:'أربعة',en:'Four'},{ar:'اثنان',en:'Two'},{ar:'ستّة',en:'Six'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'مَن أبو الكيمياء؟',en:'Who is the father of chemistry?'},
          options:[{ar:'جابرُ بنُ حيّان',en:'Jabir ibn Hayyan'},{ar:'الرازي',en:'Ar-Razi'},{ar:'ابن سينا',en:'Ibn Sina'}], answer:0 },
        { q:{ar:'مَن رسمَ خريطةً دقيقةً للعالمِ في عصره؟',en:'Who drew an accurate world map?'},
          options:[{ar:'الإدريسي',en:'Al-Idrisi'},{ar:'البيروني',en:'Al-Biruni'},{ar:'الخوارزمي',en:'Al-Khwarizmi'}], answer:0 },
        { q:{ar:'«القانونُ في الطبّ» لِمَن؟',en:'Who wrote “The Canon of Medicine”?'},
          options:[{ar:'ابن سينا',en:'Ibn Sina'},{ar:'الرازي',en:'Ar-Razi'},{ar:'الزهراوي',en:'Az-Zahrawi'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'مؤسّسُ علمِ الاجتماعِ صاحبُ «المقدّمة»؟',en:'Founder of sociology, author of the Muqaddimah?'},
          options:[{ar:'ابن خلدون',en:'Ibn Khaldun'},{ar:'الطبري',en:'At-Tabari'},{ar:'البيروني',en:'Al-Biruni'}], answer:0 },
        { q:{ar:'أبو الجراحةِ صاحبُ «التصريف»؟',en:'Father of surgery, author of At-Tasrif?'},
          options:[{ar:'الزهراوي',en:'Az-Zahrawi'},{ar:'ابن سينا',en:'Ibn Sina'},{ar:'ابن النفيس',en:'Ibn al-Nafis'}], answer:0 },
        { q:{ar:'الكتبُ الستّةُ هي كتبٌ في؟',en:'The “Six Books” are books of?'},
          options:[{ar:'الحديث',en:'Hadith'},{ar:'التفسير',en:'Tafsir'},{ar:'الفقه',en:'Fiqh'}], answer:0 },
      ]},
    } },

  /* 6 · True or False */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'الخوارزميُّ عالمٌ مسلمٌ في الرياضيات.',en:'Al-Khwarizmi was a Muslim mathematician.'}, t:true },
        { statement:{ar:'البخاريُّ مؤلّفٌ في الطبّ.',en:'Al-Bukhari authored a medical book.'}, t:false },
        { statement:{ar:'ابنُ سينا اشتهرَ بالطبّ.',en:'Ibn Sina was famous for medicine.'}, t:true },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'ابنُ الهيثمِ رائدُ علمِ البصريات.',en:'Ibn al-Haytham pioneered optics.'}, t:true },
        { statement:{ar:'الأئمةُ الأربعةُ كلُّهم علماءُ حديثٍ فقط.',en:'The four imams were only hadith scholars.'}, t:false },
        { statement:{ar:'مالكٌ ألّف «المُوَطَّأ».',en:'Malik authored Al-Muwatta.'}, t:true },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'ابنُ النفيسِ وصفَ الدورةَ الدمويةَ الرئوية.',en:'Ibn al-Nafis described pulmonary circulation.'}, t:true },
        { statement:{ar:'الكتبُ الستّةُ هي كتبُ الفقه.',en:'The Six Books are fiqh books.'}, t:false },
        { statement:{ar:'ابنُ خلدونَ يُعدُّ مؤسّسَ علمِ الاجتماع.',en:'Ibn Khaldun is considered the founder of sociology.'}, t:true },
      ]},
    } },

  /* 7 · Memory flip (scholar ↔ symbol) */
  { id:'flip', icon:'🃏', title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'🔢',en:'🔢'} },
        { a:{ar:'ابن الهيثم',en:'Ibn al-Haytham'}, b:{ar:'🔭',en:'🔭'} },
        { a:{ar:'ابن سينا',en:'Ibn Sina'}, b:{ar:'⚕️',en:'⚕️'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'📖',en:'📖'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'🔢',en:'🔢'} },
        { a:{ar:'ابن الهيثم',en:'Ibn al-Haytham'}, b:{ar:'🔭',en:'🔭'} },
        { a:{ar:'جابر',en:'Jabir'}, b:{ar:'⚗️',en:'⚗️'} },
        { a:{ar:'الإدريسي',en:'Al-Idrisi'}, b:{ar:'🗺️',en:'🗺️'} },
        { a:{ar:'الزهراوي',en:'Az-Zahrawi'}, b:{ar:'🔪',en:'🔪'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'📖',en:'📖'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, b:{ar:'🔢',en:'🔢'} },
        { a:{ar:'ابن الهيثم',en:'Ibn al-Haytham'}, b:{ar:'🔭',en:'🔭'} },
        { a:{ar:'جابر',en:'Jabir'}, b:{ar:'⚗️',en:'⚗️'} },
        { a:{ar:'ابن بطّوطة',en:'Ibn Battuta'}, b:{ar:'🧭',en:'🧭'} },
        { a:{ar:'الإدريسي',en:'Al-Idrisi'}, b:{ar:'🗺️',en:'🗺️'} },
        { a:{ar:'ابن النفيس',en:'Ibn al-Nafis'}, b:{ar:'❤️',en:'❤️'} },
        { a:{ar:'الزهراوي',en:'Az-Zahrawi'}, b:{ar:'🔪',en:'🔪'} },
        { a:{ar:'البخاري',en:'Al-Bukhari'}, b:{ar:'📖',en:'📖'} },
      ]},
    } },

  /* 8 · Order — the Four Imams (by era) */
  { id:'order', icon:'🔢', title:{ ar:'ترتيبُ الأئمةِ الأربعة', en:'Order of the Four Imams' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'أبو حنيفة',en:'Abu Hanifa'},{ar:'مالك',en:'Malik'},{ar:'الشافعي',en:'Ash-Shafii'},{ar:'أحمد',en:'Ahmad'} ]},
      intermediate:{ type:'order', items:[
        {ar:'أبو حنيفة',en:'Abu Hanifa'},{ar:'مالك',en:'Malik'},{ar:'الشافعي',en:'Ash-Shafii'},
        {ar:'أحمدُ بنُ حنبل',en:'Ahmad'},{ar:'البخاري',en:'Al-Bukhari'} ]},
      advanced:{ type:'order', items:[
        {ar:'أبو حنيفة',en:'Abu Hanifa'},{ar:'مالك',en:'Malik'},{ar:'الشافعي',en:'Ash-Shafii'},{ar:'أحمد',en:'Ahmad'},
        {ar:'البخاري',en:'Al-Bukhari'},{ar:'مسلم',en:'Muslim'},{ar:'النووي',en:'An-Nawawi'} ]},
    } },

  ],
};

/* The "عقول منيرة" and "رحلة المستكشفين" sections are slices of the same scholars/
   scientists content, so each surfaces its own 3-level Challenge Hall. Aliased so the
   era engine's gate appears at the end of both sections. */
(function(){
  var P = HISN.activities.creativity;
  HISN.activities.explorers = Object.assign({}, P, { era:'explorers',
    title:{ ar:'ساحةُ المستكشفين', en:"Explorers' Challenge Hall" }, medal:{ ar:'مستكشفٌ مبدع', en:'Creative Explorer' } });
  HISN.activities.minds = Object.assign({}, P, { era:'minds',
    title:{ ar:'ساحةُ العقولِ المنيرة', en:'Illuminating Minds Challenge Hall' }, medal:{ ar:'عقلٌ منير', en:'Illuminating Mind' } });
})();
