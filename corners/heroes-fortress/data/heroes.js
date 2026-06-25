// data/heroes.js — Era III · Heroes of Islam, organized into five categories:
//   Companions · Successors (Tabi'un) · Leaders & Rulers · Scholars · Scientists
// The era page renders these as grouped cards (see engine/era.js → renderCategories).
// A flat `nodes` array is derived at the bottom so the hub & progress engine
// (which expect era.nodes) keep working unchanged.
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.heroes = {
  id: 'heroes', order: 3, icon: 'tower',
  title: { ar: 'أبطالُ الإسلام', en: 'Heroes of Islam' },
  sub:   { ar: 'صحابةٌ وتابعون وقادة', en: 'Companions, successors & leaders' },
  tier:  { ar: 'الأبراجُ العالية', en: 'The High Towers' },
  blurb: { ar: 'تعرّفْ على القدواتِ العظيمة عبرَ ثلاثِ فئات — وكنْ بطلَ اليوم.',
           en: 'Meet the great role models across three categories — and be today\'s hero.' },
  accent: '#7AD0E8', accent2: '#1A6B8A',

  categories: [
    /* ─────────── 1 · COMPANIONS (الصحابة) ─────────── */
    { id:'companions', icon:'star',
      title:{ ar:'الصحابةُ الكرام', en:'The Noble Companions' },
      sub:{ ar:'مَن صحبوا النبيَّ ﷺ وحملوا الرسالة — ومنهم العشرةُ المبشّرون بالجنّة', en:'Those who accompanied the Prophet ﷺ — incl. the Ten Promised Paradise' },
      heroes:[
        { id:'abubakr',  icon:'gem',    hon:'رضي الله عنه',  name:{ar:'أبو بكرٍ الصدّيق',en:'Abu Bakr as-Siddiq'}, hook:{ar:'أوّلُ الخلفاءِ وصاحبُ الغار',en:'First caliph, companion of the cave'} },
        { id:'umar',     icon:'shield', hon:'رضي الله عنه',  name:{ar:'عمرُ بنُ الخطّاب',en:'Umar ibn al-Khattab'}, hook:{ar:'الفاروقُ العادل',en:'Al-Faruq, the just'} },
        { id:'uthman',   icon:'book',   hon:'رضي الله عنه',  name:{ar:'عثمانُ بنُ عفّان',en:'Uthman ibn Affan'}, hook:{ar:'ذو النورينِ جامعُ القرآن',en:'Compiler of the Quran'} },
        { id:'ali',      icon:'sword',  hon:'رضي الله عنه',  name:{ar:'عليُّ بنُ أبي طالب',en:'Ali ibn Abi Talib'}, hook:{ar:'بابُ مدينةِ العلم',en:'The gate of knowledge'} },
        { id:'zubayr',   icon:'sword',  hon:'رضي الله عنه',  name:{ar:'الزبيرُ بنُ العوّام',en:'Az-Zubayr ibn al-Awwam'}, hook:{ar:'حواريُّ رسولِ الله ﷺ',en:'Disciple of the Prophet ﷺ'} },
        { id:'awf',      icon:'gem',    hon:'رضي الله عنه',  name:{ar:'عبد الرحمن بنُ عوف',en:'Abdurrahman ibn Awf'}, hook:{ar:'التاجرُ السخيُّ الأمين',en:'The generous, honest merchant'} },
        { id:'talha',    icon:'sword',  hon:'رضي الله عنه',  name:{ar:'طلحةُ بنُ عبيد الله',en:'Talha ibn Ubaydillah'}, hook:{ar:'طلحةُ الخيرِ يومَ أُحُد',en:'Talha of goodness at Uhud'} },
        { id:'saadwaqqas',icon:'sword', hon:'رضي الله عنه',  name:{ar:'سعدُ بنُ أبي وقّاص',en:'Sa\u2019d ibn Abi Waqqas'}, hook:{ar:'أوّلُ من رمى بسهمٍ وفاتحُ فارس',en:'First to shoot an arrow, conqueror of Persia'} },
        { id:'saidzayd', icon:'leaf',   hon:'رضي الله عنه',  name:{ar:'سعيدُ بنُ زيد',en:'Sa\u2019id ibn Zayd'}, hook:{ar:'من السابقينَ الأوّلين',en:'Among the earliest believers'} },
        { id:'abuubayda',icon:'shield', hon:'رضي الله عنه',  name:{ar:'أبو عبيدةَ بنُ الجرّاح',en:'Abu Ubayda ibn al-Jarrah'}, hook:{ar:'أمينُ هذه الأمّة',en:'The trustee of this nation'} },
        { id:'hamza',    icon:'shield', hon:'رضي الله عنه',  name:{ar:'حمزةُ بنُ عبد المطّلب',en:'Hamza ibn Abdulmuttalib'}, hook:{ar:'أسدُ اللهِ وسيّدُ الشهداء',en:'Lion of Allah, chief of martyrs'} },
        { id:'musab',    icon:'dove',   hon:'رضي الله عنه',  name:{ar:'مصعبُ بنُ عمير',en:'Mus\u2019ab ibn Umayr'}, hook:{ar:'أوّلُ سفراءِ الإسلام',en:'The first ambassador of Islam'} },
        { id:'saadmuadh',icon:'shield', hon:'رضي الله عنه',  name:{ar:'سعدُ بنُ معاذ',en:'Sa\u2019d ibn Mu\u2019adh'}, hook:{ar:'اهتزّ لموتِه عرشُ الرحمن',en:'The Throne shook at his death'} },
        { id:'bilal',    icon:'crescent',hon:'رضي الله عنه', name:{ar:'بلالُ بنُ رباح',en:'Bilal ibn Rabah'}, hook:{ar:'مؤذّنُ رسولِ الله ﷺ',en:'The Prophet\u2019s ﷺ caller to prayer'} },
        { id:'salman',   icon:'compass',hon:'رضي الله عنه',  name:{ar:'سلمانُ الفارسي',en:'Salman al-Farisi'}, hook:{ar:'صاحبُ فكرةِ الخندق',en:'Who proposed the trench'} },
        { id:'abudharr', icon:'leaf',   hon:'رضي الله عنه',  name:{ar:'أبو ذرٍّ الغفاري',en:'Abu Dharr al-Ghifari'}, hook:{ar:'الزاهدُ الصادق',en:'The truthful ascetic'} },
        { id:'ibnmasud', icon:'book',   hon:'رضي الله عنه',  name:{ar:'عبد الله بنُ مسعود',en:'Abdullah ibn Mas\u2019ud'}, hook:{ar:'من أقربِ الناسِ هَدياً للنبيّ ﷺ',en:'Closest in guidance to the Prophet ﷺ'} },
        { id:'ibnabbas', icon:'light',  hon:'رضي الله عنه',  name:{ar:'عبد الله بنُ عباس',en:'Abdullah ibn Abbas'}, hook:{ar:'حبرُ الأمّةِ وترجمانُ القرآن',en:'Scholar of the nation'} },
        { id:'anas',     icon:'heart',  hon:'رضي الله عنه',  name:{ar:'أنسُ بنُ مالك',en:'Anas ibn Malik'}, hook:{ar:'خادمُ النبيِّ ﷺ',en:'Servant of the Prophet ﷺ'} },
        { id:'bara',     icon:'sword',  hon:'رضي الله عنه',  name:{ar:'البراءُ بنُ مالك',en:'Al-Bara\u2019 ibn Malik'}, hook:{ar:'البطلُ المقدامُ المستجابُ الدعوة',en:'The fearless, answered in prayer'} },
        { id:'abudarda', icon:'book',   hon:'رضي الله عنه',  name:{ar:'أبو الدرداء',en:'Abu ad-Darda\u2019'}, hook:{ar:'حكيمُ هذه الأمّة',en:'The sage of this nation'} },
        { id:'zaydharitha',icon:'heart',hon:'رضي الله عنه',  name:{ar:'زيدُ بنُ حارثة',en:'Zayd ibn Haritha'}, hook:{ar:'حِبُّ رسولِ الله ﷺ',en:'Beloved of the Prophet ﷺ'} },
        { id:'usama',    icon:'shield', hon:'رضي الله عنه',  name:{ar:'أسامةُ بنُ زيد',en:'Usama ibn Zayd'}, hook:{ar:'قائدُ الجيشِ الشاب',en:'The young army commander'} },
        { id:'hudhayfa', icon:'whisper',hon:'رضي الله عنه',  name:{ar:'حذيفةُ بنُ اليمان',en:'Hudhayfa ibn al-Yaman'}, hook:{ar:'صاحبُ سرِّ النبيِّ ﷺ',en:'Keeper of the Prophet\u2019s ﷺ secret'} },
        { id:'zaydthabit',icon:'pen',   hon:'رضي الله عنه',  name:{ar:'زيدُ بنُ ثابت',en:'Zayd ibn Thabit'}, hook:{ar:'كاتبُ الوحيِ وجامعُ القرآن',en:'Scribe of revelation'} },
        { id:'abuhurayra',icon:'book',  hon:'رضي الله عنه',  name:{ar:'أبو هريرة الدوسي',en:'Abu Hurayra'}, hook:{ar:'أكثرُ الصحابةِ روايةً للحديث',en:'Foremost narrator of hadith'} },
        { id:'muadh',    icon:'book',   hon:'رضي الله عنه',  name:{ar:'معاذُ بنُ جبل',en:'Mu\u2019adh ibn Jabal'}, hook:{ar:'أعلمُهم بالحلالِ والحرام',en:'Most learned in lawful & forbidden'} },
        { id:'amribnas', icon:'compass',hon:'رضي الله عنه',  name:{ar:'عمرُو بنُ العاص',en:'Amr ibn al-As'}, hook:{ar:'الفاتحُ الداهية',en:'The shrewd conqueror'} },
        { id:'ubayy',    icon:'book',   hon:'رضي الله عنه',  name:{ar:'أُبيُّ بنُ كعب',en:'Ubayy ibn Ka\u2019b'}, hook:{ar:'سيّدُ القرّاء',en:'Master of the reciters'} },
        { id:'qaqa',     icon:'sword',  hon:'رضي الله عنه',  name:{ar:'القعقاعُ بنُ عمرو',en:'Al-Qa\u2019qa\u2019 ibn Amr'}, hook:{ar:'فارسٌ يعدلُ ألفَ رجل',en:'A knight worth a thousand'} },
        { id:'khalid',   icon:'sword',  hon:'رضي الله عنه',  name:{ar:'خالدُ بنُ الوليد',en:'Khalid ibn al-Walid'}, hook:{ar:'سيفُ اللهِ المسلول',en:'The drawn sword of Allah'} },
        { id:'talha_asadi',icon:'staff',hon:'رضي الله عنه',  name:{ar:'طليحةُ بنُ خويلدٍ الأسدي',en:'Tulayha ibn Khuwaylid'}, hook:{ar:'فارسٌ تابَ وأبلى في الفتوح',en:'A knight who repented & excelled'} },
        { id:'ala_hadrami',icon:'dove', hon:'رضي الله عنه',  name:{ar:'العلاءُ بنُ الحضرمي',en:'Al-Ala\u2019 ibn al-Hadrami'}, hook:{ar:'مجابُ الدعوة',en:'Whose prayers were answered'} },
        { id:'khadija',  icon:'heart',  hon:'رضي الله عنها', name:{ar:'خديجةُ بنتُ خويلد',en:'Khadija bint Khuwaylid'}, hook:{ar:'أمُّ المؤمنينَ وأوّلُ مَن آمن',en:'First to believe, Mother of Believers'} },
        { id:'aisha',    icon:'gem',    hon:'رضي الله عنها', name:{ar:'عائشةُ بنتُ أبي بكر',en:'A\u2019isha bint Abi Bakr'}, hook:{ar:'الفقيهةُ العالمة',en:'The learned jurist'} },
        { id:'fatima',   icon:'crescent',hon:'رضي الله عنها',name:{ar:'فاطمةُ الزهراء',en:'Fatima az-Zahra'}, hook:{ar:'سيّدةُ نساءِ العالمين',en:'Mistress of the women of the worlds'} },
        { id:'ummsalama',icon:'heart',  hon:'رضي الله عنها', name:{ar:'أمُّ سلمة',en:'Umm Salama'}, hook:{ar:'أمُّ المؤمنينَ الحكيمة',en:'The wise Mother of Believers'} },
        { id:'nusayba',  icon:'shield', hon:'رضي الله عنها', name:{ar:'نسيبةُ بنتُ كعب',en:'Nusayba bint Ka\u2019b'}, hook:{ar:'المجاهدةُ التي دافعت عن النبيّ ﷺ',en:'Who defended the Prophet ﷺ in battle'} },
        { id:'sumayya',  icon:'light',  hon:'رضي الله عنها', name:{ar:'سميّةُ بنتُ خيّاط',en:'Sumayya bint Khayyat'}, hook:{ar:'أوّلُ شهيدةٍ في الإسلام',en:'The first martyr of Islam'} },
      ] },

    /* ─────────── 2 · SUCCESSORS (التابعون) ─────────── */
    { id:'tabieen', icon:'light',
      title:{ ar:'التابعون', en:'The Successors' },
      sub:{ ar:'الجيلُ الذي تعلّم على أيدي الصحابة', en:'The generation taught by the Companions' },
      heroes:[
        { id:'uways',     icon:'light', hon:'رحمه الله', name:{ar:'أويسٌ القرني',en:'Uways al-Qarani'}, hook:{ar:'خيرُ التابعين',en:'Best of the successors'} },
        { id:'hasanbasri',icon:'book',  hon:'رحمه الله', name:{ar:'الحسنُ البصري',en:'Al-Hasan al-Basri'}, hook:{ar:'إمامُ الزهدِ والموعظة',en:'Imam of asceticism & counsel'} },
        { id:'ibnsirin',  icon:'whisper',hon:'رحمه الله',name:{ar:'محمدُ بنُ سيرين',en:'Muhammad ibn Sirin'}, hook:{ar:'عالمُ تعبيرِ الرؤيا',en:'Master of dream interpretation'} },
        { id:'saidjubayr',icon:'book',  hon:'رحمه الله', name:{ar:'سعيدُ بنُ جبير',en:'Sa\u2019id ibn Jubayr'}, hook:{ar:'العالمُ الشهيد',en:'The martyred scholar'} },
        { id:'umar2',     icon:'crown', hon:'رحمه الله', name:{ar:'عمرُ بنُ عبد العزيز',en:'Umar ibn Abdulaziz'}, hook:{ar:'الخليفةُ العادلُ الزاهد',en:'The just, ascetic caliph'} },
        { id:'tawus',     icon:'mosque',hon:'رحمه الله', name:{ar:'طاووسُ بنُ كيسان',en:'Tawus ibn Kaysan'}, hook:{ar:'الفقيهُ العابد',en:'The devout jurist'} },
        { id:'zaynabidin',icon:'crescent',hon:'رحمه الله',name:{ar:'زينُ العابدين',en:'Zayn al-Abidin'}, hook:{ar:'السجّادُ التقيّ',en:'The devout worshipper'} },
        { id:'khawlani',  icon:'leaf',  hon:'رحمه الله', name:{ar:'أبو مسلمٍ الخولاني',en:'Abu Muslim al-Khawlani'}, hook:{ar:'زاهدُ أهلِ الشام',en:'The ascetic of Sham'} },
      ] },

    /* ─────────── 3 · LEADERS & RULERS (القادةُ والحكّام) ─────────── */
    { id:'leaders', icon:'crown',
      title:{ ar:'القادةُ والحكّام', en:'Leaders & Rulers' },
      sub:{ ar:'فاتحون وقادةٌ وحكّامٌ خدموا الإسلام', en:'Conquerors, commanders & rulers who served Islam' },
      heroes:[
        { id:'harunrashid',icon:'crown', hon:'رحمه الله', name:{ar:'هارونُ الرشيد',en:'Harun ar-Rashid'}, hook:{ar:'خليفةُ العصرِ الذهبي',en:'Caliph of the golden age'} },
        { id:'mehmed',    icon:'crown',  hon:'رحمه الله', name:{ar:'محمدٌ الفاتح',en:'Mehmed the Conqueror'}, hook:{ar:'فاتحُ القسطنطينية',en:'Conqueror of Constantinople'} },
        { id:'suleiman',  icon:'crown',  hon:'رحمه الله', name:{ar:'سليمانُ القانوني',en:'Suleiman the Magnificent'}, hook:{ar:'أعظمُ سلاطينِ العثمانيين',en:'Greatest of the Ottoman sultans'} },
        { id:'tariq',     icon:'sword',  hon:'رحمه الله', name:{ar:'طارقُ بنُ زياد',en:'Tariq ibn Ziyad'}, hook:{ar:'فاتحُ الأندلس',en:'Conqueror of Andalusia'} },
        { id:'dakhil',    icon:'crown',  hon:'رحمه الله', name:{ar:'عبد الرحمن الداخل',en:'Abdurrahman ad-Dakhil'}, hook:{ar:'صقرُ قريش',en:'The Falcon of Quraysh'} },
        { id:'nasir',     icon:'crown',  hon:'رحمه الله', name:{ar:'عبد الرحمن الناصر',en:'Abdurrahman an-Nasir'}, hook:{ar:'خليفةُ قرطبةَ الزاهية',en:'Caliph of flourishing Cordoba'} },
        { id:'tashfin',   icon:'shield', hon:'رحمه الله', name:{ar:'يوسفُ بنُ تاشفين',en:'Yusuf ibn Tashfin'}, hook:{ar:'قائدُ المرابطين',en:'Leader of the Almoravids'} },
        { id:'ibnqasim',  icon:'compass',hon:'رحمه الله', name:{ar:'محمدُ بنُ القاسم',en:'Muhammad ibn al-Qasim'}, hook:{ar:'فاتحُ السند',en:'Conqueror of Sindh'} },
        { id:'qutayba',   icon:'compass',hon:'رحمه الله', name:{ar:'قتيبةُ بنُ مسلم',en:'Qutayba ibn Muslim'}, hook:{ar:'فاتحُ ما وراءَ النهر',en:'Conqueror of Transoxiana'} },
        { id:'ghafiqi',   icon:'sword',  hon:'رحمه الله', name:{ar:'عبد الرحمن الغافقي',en:'Abdurrahman al-Ghafiqi'}, hook:{ar:'قائدُ بلاطِ الشهداء',en:'Commander at Tours'} },
        { id:'salahuddin',icon:'shield', hon:'رحمه الله', name:{ar:'صلاحُ الدينِ الأيوبي',en:'Salahuddin al-Ayyubi'}, hook:{ar:'محرّرُ القدس',en:'Liberator of Al-Quds'} },
        { id:'qutuz',     icon:'sword',  hon:'رحمه الله', name:{ar:'سيفُ الدينِ قطز',en:'Sayfuddin Qutuz'}, hook:{ar:'بطلُ عينِ جالوت',en:'Hero of Ayn Jalut'} },
        { id:'baybars',   icon:'shield', hon:'رحمه الله', name:{ar:'الظاهرُ بيبرس',en:'Az-Zahir Baybars'}, hook:{ar:'قاهرُ المغولِ والصليبيين',en:'Vanquisher of Mongols & Crusaders'} },
        { id:'nizam',     icon:'book',   hon:'رحمه الله', name:{ar:'نظامُ الملك',en:'Nizam al-Mulk'}, hook:{ar:'الوزيرُ العالمُ مؤسّسُ النظاميّات',en:'The scholarly vizier'} },
        { id:'alparslan', icon:'sword',  hon:'رحمه الله', name:{ar:'ألب أرسلان',en:'Alp Arslan'}, hook:{ar:'بطلُ ملاذكرد',en:'Hero of Manzikert'} },
        { id:'ibnyasin',  icon:'mosque', hon:'رحمه الله', name:{ar:'عبد الله بنُ ياسين',en:'Abdullah ibn Yasin'}, hook:{ar:'مؤسّسُ دولةِ المرابطين',en:'Founder of the Almoravid state'} },
      ] },
  ],
};

// Flatten every hero into `nodes` so the hub + progress engine (which expect
// era.nodes) work unchanged. Order follows the categories above.
HISN.eras.heroes.nodes = HISN.eras.heroes.categories.reduce((all,c)=>all.concat(c.heroes), []);

/* ───── CERTIFICATE — unlocked when every hero station is complete ───── */
HISN.eras.heroes.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ أبطالِ الإسلام',
    en: 'Awarded to those who completed the Heroes of Islam',
  },
  statement: {
    ar: 'لِتعرُّفِهِ/تعرُّفِها على <b>القُدواتِ العِظام</b> — صحابةً كأبي بكرٍ وعُمر، وتابعينَ كعُمرَ بنِ عبد العزيز، وقادةً كصلاحِ الدّين — رضِيَ اللهُ عنهم ورحِمَهم أجمعين.',
    en: 'For meeting <b>the great role models</b> — companions like Abu Bakr and Umar, successors like Umar ibn Abdulaziz, and leaders like Salahuddin — may Allah be pleased with them all.',
  },
};
