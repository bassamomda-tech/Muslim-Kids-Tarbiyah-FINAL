/* ═══════════════════════════════════════════════════════════════
   HOUSE INDEX — Master list of all houses in the district.
   Order, color, art-variant, and category for every house.
   Full content per-house lives in data/<slug>.js (loaded lazily).
   ─────────────────────────────────────────────────────────────── */

window.HOUSE_INDEX = [
  /* ─── أركان الأخلاق (akhlaq) ─── */
  { slug:'truth',         id:1,  cat:'akhlaq', color:'#1565C0', art:'fortress', nameAr:'حصن الصدق',           nameEn:'Fortress of Truth',         shortAr:'الصدق',     shortEn:'Truth' },
  { slug:'trust',         id:2,  cat:'akhlaq', color:'#2980B9', art:'cottage',  nameAr:'بيت الأمانة',         nameEn:'House of Trust',            shortAr:'الأمانة',   shortEn:'Trust' },
  { slug:'courage',       id:3,  cat:'akhlaq', color:'#27AE60', art:'fortress', nameAr:'بيت الشجاعة',         nameEn:'House of Courage',          shortAr:'الشجاعة',   shortEn:'Courage' },
  { slug:'ihsan',         id:4,  cat:'akhlaq', color:'#E65100', art:'garden',   nameAr:'بيت الإحسان',         nameEn:'House of Ihsan',            shortAr:'الإحسان',   shortEn:'Ihsan' },
  { slug:'tongue',        id:5,  cat:'akhlaq', color:'#8E44AD', art:'cottage',  nameAr:'بيت حفظ اللسان',      nameEn:'House of the Guarded Tongue', shortAr:'اللسان',  shortEn:'Tongue' },
  { slug:'pardon',        id:6,  cat:'akhlaq', color:'#1ABC9C', art:'garden',   nameAr:'بيت العفو',           nameEn:'House of Pardon',           shortAr:'العفو',     shortEn:'Pardon' },
  { slug:'forbearance',   id:7,  cat:'akhlaq', color:'#D4AC0D', art:'cottage',  nameAr:'بيت الحلم',           nameEn:'House of Forbearance',      shortAr:'الحلم',     shortEn:'Forbearance' },
  { slug:'respect',       id:8,  cat:'akhlaq', color:'#117A65', art:'garden',   nameAr:'بيت الاحترام',        nameEn:'House of Respect',          shortAr:'الاحترام',  shortEn:'Respect' },
  { slug:'sincerity',     id:9,  cat:'akhlaq', color:'#5C6BC0', art:'cottage',  nameAr:'بيت الإخلاص',         nameEn:'House of Sincerity',        shortAr:'الإخلاص',   shortEn:'Sincerity' },
  { slug:'humility',      id:10, cat:'akhlaq', color:'#795548', art:'cottage',  nameAr:'بيت التواضع',         nameEn:'House of Humility',         shortAr:'التواضع',   shortEn:'Humility' },
  { slug:'haya',          id:11, cat:'akhlaq', color:'#AD1457', art:'garden',   nameAr:'بيت الحياء',          nameEn:'House of Haya',             shortAr:'الحياء',    shortEn:'Haya' },
  { slug:'striving',      id:12, cat:'akhlaq', color:'#F57F17', art:'fortress', nameAr:'بيت السعي',           nameEn:'House of Striving',         shortAr:'السعي',     shortEn:'Striving' },
  { slug:'patience',      id:13, cat:'akhlaq', color:'#37474F', art:'fortress', nameAr:'بيت الصبر',           nameEn:'House of Patience',         shortAr:'الصبر',     shortEn:'Patience' },
  { slug:'loyalty',       id:14, cat:'akhlaq', color:'#0D47A1', art:'cottage',  nameAr:'بيت الوفاء',          nameEn:'House of Loyalty',          shortAr:'الوفاء',    shortEn:'Loyalty' },
  { slug:'gratitude',     id:15, cat:'akhlaq', color:'#558B2F', art:'garden',   nameAr:'بيت الشكر',           nameEn:'House of Gratitude',        shortAr:'الشكر',     shortEn:'Gratitude' },
  { slug:'generosity',    id:16, cat:'akhlaq', color:'#E64A19', art:'tent',     nameAr:'بيت الكرم',           nameEn:'House of Generosity',       shortAr:'الكرم',     shortEn:'Generosity' },
  { slug:'knowledge',     id:17, cat:'akhlaq', color:'#1A237E', art:'library',  nameAr:'بيت العلم',           nameEn:'House of Knowledge',        shortAr:'العلم',     shortEn:'Knowledge' },
  { slug:'chivalry',      id:18, cat:'akhlaq', color:'#4A148C', art:'fortress', nameAr:'بيت المروءة',         nameEn:'House of Chivalry',         shortAr:'المروءة',   shortEn:'Chivalry' },
  { slug:'contentment',   id:29, cat:'akhlaq', color:'#4527A0', art:'cottage',  nameAr:'بيت القناعة والرضا',  nameEn:'House of Contentment',      shortAr:'القناعة',   shortEn:'Contentment' },
  { slug:'mercy',         id:30, cat:'akhlaq', color:'#880E4F', art:'pavilion', nameAr:'بيت الرحمة',          nameEn:'House of Mercy',            shortAr:'الرحمة',    shortEn:'Mercy' },
  { slug:'justice',       id:31, cat:'akhlaq', color:'#1A237E', art:'fortress', nameAr:'بيت العدل',           nameEn:'House of Justice',          shortAr:'العدل',     shortEn:'Justice' },
  { slug:'altruism',      id:32, cat:'akhlaq', color:'#AD1457', art:'pavilion', nameAr:'بيت الإيثار',         nameEn:'House of Altruism',         shortAr:'الإيثار',   shortEn:'Altruism' },
  { slug:'goodthink',     id:33, cat:'akhlaq', color:'#F57F17', art:'garden',   nameAr:'بيت حسن الظن',        nameEn:'House of Good Thoughts',    shortAr:'حسن الظن',  shortEn:'Good Thoughts' },
  { slug:'mastery',       id:34, cat:'akhlaq', color:'#00695C', art:'library',  nameAr:'بيت الإتقان',         nameEn:'House of Mastery',          shortAr:'الإتقان',   shortEn:'Mastery' },

  /* ─── أركان الآداب (adab) ─── */
  { slug:'greeting',      id:19, cat:'adab',   color:'#009688', art:'mosque',   nameAr:'بيت آداب السلام',     nameEn:'House of Greeting Manners', shortAr:'السلام',    shortEn:'Greeting' },
  { slug:'eating',        id:20, cat:'adab',   color:'#3E2723', art:'cottage',  nameAr:'بيت آداب الطعام',     nameEn:'House of Eating Manners',   shortAr:'الطعام',    shortEn:'Eating' },
  { slug:'permission',    id:21, cat:'adab',   color:'#512DA8', art:'cottage',  nameAr:'بيت آداب الاستئذان',  nameEn:'House of Permission',       shortAr:'الاستئذان', shortEn:'Permission' },
  { slug:'dua',           id:22, cat:'adab',   color:'#004D40', art:'mosque',   nameAr:'بيت آداب الدعاء',     nameEn:'House of Du\u2018a Manners', shortAr:'الدعاء',   shortEn:'Du\u2018a' },
  { slug:'sleep',         id:23, cat:'adab',   color:'#37474F', art:'cottage',  nameAr:'بيت آداب النوم',      nameEn:'House of Sleep Manners',    shortAr:'النوم',     shortEn:'Sleep' },
  { slug:'hospitality',   id:24, cat:'adab',   color:'#1A237E', art:'tent',     nameAr:'بيت آداب الضيافة',    nameEn:'House of Hospitality',      shortAr:'الضيافة',   shortEn:'Hospitality' },
  { slug:'bathroom',      id:25, cat:'adab',   color:'#4E342E', art:'cottage',  nameAr:'بيت آداب قضاء الحاجة',nameEn:'House of Bathroom Manners', shortAr:'الحاجة',    shortEn:'Bathroom' },
  { slug:'masjid',        id:26, cat:'adab',   color:'#1B5E20', art:'mosque',   nameAr:'بيت آداب المسجد',     nameEn:'House of Masjid Manners',   shortAr:'المسجد',    shortEn:'Masjid' },
  { slug:'friendship',    id:27, cat:'adab',   color:'#006064', art:'pavilion', nameAr:'بيت آداب الأخوة',     nameEn:'House of Brotherhood',      shortAr:'الأخوة',    shortEn:'Brotherhood' },
  { slug:'majlis',        id:28, cat:'adab',   color:'#2E7D32', art:'cottage',  nameAr:'بيت آداب المجلس',     nameEn:'House of the Majlis',       shortAr:'المجلس',    shortEn:'Majlis' },
];

/* Map by slug for fast lookup */
window.HOUSE_BY_SLUG = window.HOUSE_INDEX.reduce((m, h) => { m[h.slug] = h; return m; }, {});

/* Container for full per-house data (filled by data/<slug>.js) */
window.HOUSES = window.HOUSES || {};
