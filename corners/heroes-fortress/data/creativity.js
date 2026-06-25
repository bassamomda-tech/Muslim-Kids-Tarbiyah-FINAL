// data/creativity.js — أكاديمية المبدعين (The Innovators' Academy)
// A STANDALONE corner of the city (تربية الطفل المسلم) — NOT a History-Corner era.
// Absent from HISN.order, so it never shows as a gateway in the Heroes' Fortress
// hub. Reached through its own page: academy.html.
// Organized into FOUR categories (like the Heroes era): the discovery scientists,
// plus the scholars of Fiqh · Hadith · Tafsir (moved here from the Heroes era).
// Each station opens its full chapter (data/chapters/<id>.js); all ids are
// registered in HISN.authored.
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.creativity = {
  id: 'creativity', icon: 'spark', standalone: true,
  kicker: { ar: 'أكاديميةُ المبدعين', en: 'The Innovators\u2019 Academy' },
  title:  { ar: 'أكاديميةُ المبدعين', en: 'The Innovators\u2019 Academy' },
  sub:    { ar: 'علماءُ الإسلامِ الذين أناروا الدنيا — اكتشافاً وفقهاً وحديثاً وتفسيراً', en: 'The scholars of Islam who lit the world — discovery, fiqh, hadith & tafsir' },
  tier:   { ar: 'منائرُ العلم', en: 'The Beacons of Knowledge' },
  blurb:  { ar: 'تعرّفْ على روّادِ العلمِ الذين أبدعوا واكتشفوا وحفظوا الدين — وكنْ مبدعَ الغد.',
            en: 'Meet the pioneers of knowledge who created, discovered & preserved the religion — and be tomorrow\u2019s innovator.' },
  back:   { ar: 'المدينة', en: 'City' },
  accent: '#1FAE8C', accent2: '#0E6B57',

  categories: [
    /* ─────────── 1 · DISCOVERY SCIENTISTS (علماءُ الاكتشاف) ─────────── */
    { id:'discovery', icon:'spark',
      title:{ ar:'رِحلةُ المُستَكْشِفين', en:'The Explorers’ Journey' },
      sub:{ ar:'روّادُ العلومِ التجريبيّة — البصرياتُ والطبُّ والرياضياتُ والكيمياء', en:'Pioneers of the empirical sciences — optics, medicine, math & chemistry' },
      heroes:[
        { id:'ibnhaytham',icon:'light',  hon:'رحمه الله', name:{ar:'ابنُ الهيثم',en:'Ibn al-Haytham'}, hook:{ar:'أبو علمِ البصريات',en:'Father of optics'} },
        { id:'khwarizmi', icon:'compass',hon:'رحمه الله', name:{ar:'الخوارزمي',en:'Al-Khwarizmi'}, hook:{ar:'أبو الجبرِ والخوارزميات',en:'Father of algebra & algorithms'} },
        { id:'ibnsina',   icon:'leaf',   hon:'رحمه الله', name:{ar:'ابنُ سينا',en:'Ibn Sina'}, hook:{ar:'أميرُ الأطبّاء',en:'Prince of physicians'} },
        { id:'biruni',    icon:'globe',  hon:'رحمه الله', name:{ar:'البيروني',en:'Al-Biruni'}, hook:{ar:'عالمُ الفلكِ والجغرافيا',en:'Scholar of astronomy & geography'} },
        { id:'idrisi',    icon:'compass',hon:'رحمه الله', name:{ar:'الإدريسي',en:'Al-Idrisi'}, hook:{ar:'رسّامُ خريطةِ العالم',en:'Mapmaker of the world'} },
        { id:'battuta',   icon:'compass',hon:'رحمه الله', name:{ar:'ابنُ بطوطة',en:'Ibn Battuta'}, hook:{ar:'أعظمُ رحّالةٍ في التاريخ',en:'The greatest traveler in history'} },
        { id:'ibnkhaldun',icon:'globe',  hon:'رحمه الله', name:{ar:'ابنُ خلدون',en:'Ibn Khaldun'}, hook:{ar:'مؤسّسُ علمِ الاجتماع',en:'Founder of sociology'} },
        { id:'razi',      icon:'leaf',   hon:'رحمه الله', name:{ar:'أبو بكرٍ الرازي',en:'Ar-Razi'}, hook:{ar:'رائدُ الطبِّ والكيمياء',en:'Pioneer of medicine & chemistry'} },
        { id:'ibnnafis',  icon:'heart',  hon:'رحمه الله', name:{ar:'ابنُ النفيس',en:'Ibn an-Nafis'}, hook:{ar:'مكتشفُ الدورةِ الدمويّةِ الصغرى',en:'Discoverer of pulmonary circulation'} },
        { id:'ibnbaytar', icon:'leaf',   hon:'رحمه الله', name:{ar:'ابنُ البيطار',en:'Ibn al-Baytar'}, hook:{ar:'عالمُ النباتِ والصيدلة',en:'Botanist & pharmacist'} },
        { id:'jabir',     icon:'gem',    hon:'رحمه الله', name:{ar:'جابرُ بنُ حيّان',en:'Jabir ibn Hayyan'}, hook:{ar:'أبو الكيمياء',en:'Father of chemistry'} },
        { id:'firnas',    icon:'dove',   hon:'رحمه الله', name:{ar:'عباسُ بنُ فِرناس',en:'Abbas ibn Firnas'}, hook:{ar:'رائدُ الطيران',en:'Pioneer of flight'} },
        { id:'zahrawi',   icon:'leaf',   hon:'رحمه الله', name:{ar:'أبو القاسمِ الزهراوي',en:'Al-Zahrawi'}, hook:{ar:'أبو الجراحة',en:'Father of surgery'} },
        { id:'khayyam',   icon:'compass',hon:'رحمه الله', name:{ar:'عمرُ الخيّام',en:'Omar Khayyam'}, hook:{ar:'عالمُ الجبرِ والفلك',en:'Scholar of algebra & astronomy'} },
      ] },

    /* ─────────── 2 · SCHOLARS OF FIQH (علماءُ الفقه) ─────────── */
    { id:'fuqaha', icon:'gem',
      title:{ ar:'عُقولٌ مُنيرة · علماءُ الفقه', en:'Illuminating Minds · Scholars of Fiqh' },
      sub:{ ar:'أئمّةُ المذاهبِ وفقهاءُ الأمّة', en:'The imams of the schools & jurists of the nation' },
      heroes:[
        { id:'abuhanifa', icon:'gem',  hon:'رحمه الله', name:{ar:'أبو حنيفةَ النعمان',en:'Abu Hanifa'}, hook:{ar:'الإمامُ الأعظم',en:'The Great Imam'} },
        { id:'malik',     icon:'gem',  hon:'رحمه الله', name:{ar:'مالكُ بنُ أنس',en:'Malik ibn Anas'}, hook:{ar:'إمامُ دارِ الهجرة',en:'Imam of Madinah'} },
        { id:'shafii',    icon:'gem',  hon:'رحمه الله', name:{ar:'محمدُ بنُ إدريسَ الشافعي',en:'Ash-Shafi\u2019i'}, hook:{ar:'ناصرُ السنّة',en:'Defender of the Sunnah'} },
        { id:'ahmad',     icon:'gem',  hon:'رحمه الله', name:{ar:'أحمدُ بنُ حنبل',en:'Ahmad ibn Hanbal'}, hook:{ar:'إمامُ أهلِ السنّة',en:'Imam of Ahl as-Sunnah'} },
        { id:'ibntaymiyya',icon:'light',hon:'رحمه الله',name:{ar:'ابنُ تيمية',en:'Ibn Taymiyya'}, hook:{ar:'شيخُ الإسلام',en:'Shaykh al-Islam'} },
        { id:'ibnqayyim', icon:'light',hon:'رحمه الله', name:{ar:'ابنُ القيّم',en:'Ibn al-Qayyim'}, hook:{ar:'العالمُ الربّاني',en:'The devoted scholar'} },
      ] },

    /* ─────────── 3 · SCHOLARS OF HADITH (علماءُ الحديث) ─────────── */
    { id:'muhaddithun', icon:'book',
      title:{ ar:'عُقولٌ مُنيرة · علماءُ الحديث', en:'Illuminating Minds · Scholars of Hadith' },
      sub:{ ar:'حُفّاظُ السنّةِ وأصحابُ الكتبِ الستّة', en:'Preservers of the Sunnah & authors of the six books' },
      heroes:[
        { id:'bukhari',   icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ البخاري',en:'Al-Bukhari'}, hook:{ar:'أميرُ المؤمنينَ في الحديث',en:'Foremost in hadith'} },
        { id:'muslim',    icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ مسلم',en:'Muslim'}, hook:{ar:'صاحبُ الصحيح',en:'Author of the Sahih'} },
        { id:'nasai',     icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ النسائي',en:'An-Nasa\u2019i'}, hook:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
        { id:'abudawud',  icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ أبو داود',en:'Abu Dawud'}, hook:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
        { id:'tirmidhi',  icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ الترمذي',en:'At-Tirmidhi'}, hook:{ar:'صاحبُ الجامع',en:'Author of the Jami\u2019'} },
        { id:'ibnmajah',  icon:'book', hon:'رحمه الله', name:{ar:'الإمامُ ابنُ ماجه',en:'Ibn Majah'}, hook:{ar:'صاحبُ السنن',en:'Author of the Sunan'} },
        { id:'nawawi',    icon:'crescent',hon:'رحمه الله',name:{ar:'الإمامُ النووي',en:'An-Nawawi'}, hook:{ar:'صاحبُ الأربعينَ ورياضِ الصالحين',en:'Author of the Forty Hadith'} },
        { id:'dhahabi',   icon:'pen',  hon:'رحمه الله', name:{ar:'الإمامُ الذهبي',en:'Adh-Dhahabi'}, hook:{ar:'مؤرّخُ الإسلامِ وحافظُه',en:'Historian & hadith master of Islam'} },
        { id:'albani',    icon:'book', hon:'رحمه الله', name:{ar:'الشيخُ الألباني',en:'Al-Albani'}, hook:{ar:'محدّثُ العصر',en:'Hadith master of the age'} },
      ] },

    /* ─────────── 4 · SCHOLARS OF TAFSIR (علماءُ التفسير) ─────────── */
    { id:'mufassirun', icon:'pen',
      title:{ ar:'عُقولٌ مُنيرة · علماءُ التفسير', en:'Illuminating Minds · Scholars of Tafsir' },
      sub:{ ar:'أئمّةُ تفسيرِ كتابِ الله', en:'The imams of explaining the Book of Allah' },
      heroes:[
        { id:'tabari',    icon:'pen',  hon:'رحمه الله', name:{ar:'الإمامُ الطبري',en:'At-Tabari'}, hook:{ar:'إمامُ المفسّرينَ والمؤرّخين',en:'Imam of exegetes & historians'} },
        { id:'ibnkathir', icon:'pen',  hon:'رحمه الله', name:{ar:'الإمامُ ابنُ كثير',en:'Ibn Kathir'}, hook:{ar:'المفسّرُ المؤرّخ',en:'The exegete & historian'} },
        { id:'saadi',     icon:'pen',  hon:'رحمه الله', name:{ar:'الإمامُ السعدي',en:'As-Sa’di'}, hook:{ar:'صاحبُ التفسيرِ المُيسَّر',en:'Author of the accessible tafsir'} },
      ] },
  ],
};

// Flatten every station into `nodes` so the progress engine + certificate
// (which expect era.nodes) work — discovery scientists + all scholars.
HISN.eras.creativity.nodes = HISN.eras.creativity.categories.reduce((all,c)=>all.concat(c.heroes), []);

/* ───── CERTIFICATE — unlocked when every academy station is complete ───── */
HISN.eras.creativity.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ أكاديميةِ المبدعين',
    en: 'Awarded to those who completed the Innovators\u2019 Academy',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها <b>روّادَ العلمِ في الحضارةِ الإسلامية</b> — مِنَ المكتشفينَ كابنِ الهيثم، إلى فقهاءَ كأبي حنيفة، ومحدّثينَ كالبخاري، ومفسّرينَ كابنِ كثير — رحِمَهمُ اللهُ أجمعين.',
    en: 'For knowing <b>the pioneers of knowledge in Islamic civilization</b> — from discoverers like Ibn al-Haytham, to jurists like Abu Hanifa, hadith masters like al-Bukhari, and exegetes like Ibn Kathir — may Allah have mercy on them all.',
  },
};

/* ════════════════════════════════════════════════════════════════
   The Academy is split into THREE separate sections, each its own page:
   1) "كن أنت المبدع"   → mubdi.html (standalone rihla-engine journey)
   2) "رحلة المستكشفين"  → academy-explorers.html  (era=explorers)
   3) "عقول منيرة"       → academy-minds.html      (era=minds)
   The two scholar/discovery sections below reuse the SAME category objects
   defined above (so stations still open their existing chapters), but each
   gets its own era object → its own map, progress bar & certificate.
   ════════════════════════════════════════════════════════════════ */

/* ─────────── SECTION 2 · رحلة المستكشفين (Discovery scientists) ─────────── */
HISN.eras.explorers = {
  id: 'explorers', icon: 'spark', standalone: true,
  kicker: { ar: 'رِحلةُ المُستَكْشِفين', en: 'The Explorers\u2019 Journey' },
  title:  { ar: 'رِحلةُ المُستَكْشِفين', en: 'The Explorers\u2019 Journey' },
  sub:    { ar: 'روّادُ العلومِ التجريبيّة الذين أناروا الدنيا — البصرياتُ والطبُّ والرياضياتُ والكيمياء', en: 'Pioneers of the empirical sciences who lit the world — optics, medicine, math & chemistry' },
  tier:   { ar: 'منائرُ الاكتشاف', en: 'The Beacons of Discovery' },
  blurb:  { ar: 'تعرّفْ على روّادِ العلمِ الذين اكتشفوا وأبدعوا — وكنْ مكتشِفَ الغد.',
            en: 'Meet the pioneers who discovered & created — and be tomorrow\u2019s explorer.' },
  back:   { ar: 'الأكاديمية', en: 'Academy' },
  accent: '#1F8FB0', accent2: '#0E5870',
  categories: [ HISN.eras.creativity.categories[0] ],
};
HISN.eras.explorers.nodes = HISN.eras.explorers.categories.reduce((all,c)=>all.concat(c.heroes), []);
HISN.eras.explorers.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ المُستَكْشِفين',
    en: 'Awarded to those who completed the Explorers\u2019 Journey',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها <b>روّادَ الاكتشافِ في الحضارةِ الإسلامية</b> — كابنِ الهيثمِ في البصريات، والخوارزميِّ في الرياضيات، وابنِ سينا في الطب، وجابرِ بنِ حيّان في الكيمياء — رحِمَهمُ اللهُ أجمعين.',
    en: 'For knowing <b>the pioneers of discovery in Islamic civilization</b> — like Ibn al-Haytham in optics, al-Khwarizmi in mathematics, Ibn Sina in medicine, and Jabir ibn Hayyan in chemistry — may Allah have mercy on them all.',
  },
};

/* ─────────── SECTION 3 · عقول منيرة (Scholars: Fiqh · Hadith · Tafsir) ─────────── */
HISN.eras.minds = {
  id: 'minds', icon: 'book', standalone: true,
  kicker: { ar: 'عُقولٌ مُنيرة', en: 'Illuminating Minds' },
  title:  { ar: 'عُقولٌ مُنيرة', en: 'Illuminating Minds' },
  sub:    { ar: 'علماءُ الإسلامِ الذين حفظوا الدين — فقهاً وحديثاً وتفسيراً', en: 'The scholars of Islam who preserved the religion — fiqh, hadith & tafsir' },
  tier:   { ar: 'منائرُ العلم', en: 'The Beacons of Knowledge' },
  blurb:  { ar: 'تعرّفْ على العلماءِ الذين حفظوا الدينَ وعلّموا الأمّة — وكنْ عالِمَ الغد.',
            en: 'Meet the scholars who preserved the religion & taught the nation — and be tomorrow\u2019s scholar.' },
  back:   { ar: 'الأكاديمية', en: 'Academy' },
  accent: '#C0902E', accent2: '#7A5A18',
  categories: HISN.eras.creativity.categories.slice(1),
};
HISN.eras.minds.nodes = HISN.eras.minds.categories.reduce((all,c)=>all.concat(c.heroes), []);
HISN.eras.minds.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ عُقولٍ مُنيرة',
    en: 'Awarded to those who completed Illuminating Minds',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها <b>علماءَ الإسلامِ الذين حفظوا الدين</b> — فقهاءَ كأبي حنيفة، ومحدّثينَ كالبخاري، ومفسّرينَ كابنِ كثير — رحِمَهمُ اللهُ أجمعين.',
    en: 'For knowing <b>the scholars of Islam who preserved the religion</b> — jurists like Abu Hanifa, hadith masters like al-Bukhari, and exegetes like Ibn Kathir — may Allah have mercy on them all.',
  },
};
