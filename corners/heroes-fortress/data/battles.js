// data/battles.js — Era IV · أيّامُ الإسلامِ الخالدة (The Immortal Days of Islam)
// A standalone section (its own gateway in the hub, like Prophets · Seerah · Heroes).
// Decisive battles where Allah aided the truth — ordered chronologically so the
// map reads as a climb through time. Each station opens its full chapter
// (data/chapters/<id>.js). The 18 ids below are all registered in HISN.authored.
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.battles = {
  id: 'battles', order: 4, icon: 'ramparts',
  title: { ar: 'أيّامُ الإسلامِ الخالدة', en: 'The Immortal Days of Islam' },
  sub:   { ar: 'معاركُ فاصلةٌ نصرَ اللهُ فيها الحقَّ', en: 'Decisive battles where Allah aided the truth' },
  tier:  { ar: 'ساحاتُ النصر', en: 'The Fields of Victory' },
  blurb: { ar: 'عِشْ أعظمَ المعاركِ التي نصرَ اللهُ بها دينَه — وتعلّمْ دروسَ التوكّلِ والصبرِ والقيادة.',
           en: 'Relive the greatest battles by which Allah aided His religion — lessons of trust, patience & leadership.' },
  accent: '#C0473B', accent2: '#7E2B22',

  // Chronological order (Hijri): Badr 2 → Preveza 945.
  nodes: [
    { id:'badrbattle',   icon:'star',     name:{ar:'غزوةُ بدرٍ الكبرى',en:'The Battle of Badr'}, hon:'', hook:{ar:'يومُ الفرقانِ وأوّلُ النصر',en:'The Day of Distinction, the first victory'} },
    { id:'yarmouk',      icon:'sword',    name:{ar:'معركةُ اليرموك',en:'The Battle of Yarmouk'}, hon:'', hook:{ar:'فتحُ الشامِ وكسرُ الرّوم',en:'The conquest of Sham'} },
    { id:'qadisiyyah',   icon:'shield',   name:{ar:'معركةُ القادسيّة',en:'The Battle of al-Qadisiyyah'}, hon:'', hook:{ar:'بابُ فتحِ فارس',en:'The gateway to Persia'} },
    { id:'nahawand',     icon:'mountain', name:{ar:'معركةُ نهاوند',en:'The Battle of Nahawand'}, hon:'', hook:{ar:'فتحُ الفتوح',en:'The Victory of Victories'} },
    { id:'dhatalsawari', icon:'compass',  name:{ar:'معركةُ ذاتِ الصواري',en:'The Battle of the Masts'}, hon:'', hook:{ar:'أوّلُ نصرٍ بحريٍّ للإسلام',en:'Islam\u2019s first naval victory'} },
    { id:'wadilakka',    icon:'sword',    name:{ar:'معركةُ وادي لَكَّة',en:'The Battle of Guadalete'}, hon:'', hook:{ar:'بابُ فتحِ الأندلس',en:'The gateway to Andalusia'} },
    { id:'sind',         icon:'star',     name:{ar:'فتحُ السِّند',en:'The Conquest of Sindh'}, hon:'', hook:{ar:'الإسلامُ يبلغُ الهند',en:'Islam reaches India'} },
    { id:'transoxania',  icon:'mountain', name:{ar:'فتحُ ما وراءَ النهر',en:'The Conquest of Transoxiana'}, hon:'', hook:{ar:'الإسلامُ في قلبِ آسيا',en:'Islam in the heart of Asia'} },
    { id:'balat',        icon:'compass',  name:{ar:'بلاطُ الشهداء',en:'The Battle of Tours'}, hon:'', hook:{ar:'مَلحمةُ الشهداءِ في الغرب',en:'The martyrs\u2019 stand in the West'} },
    { id:'amuriya',      icon:'shield',   name:{ar:'معركةُ عَمُّوريّة',en:'The Battle of Amorium'}, hon:'', hook:{ar:'لبّى نداءَ «وامُعتصماه»',en:'He answered the cry "O Mu\u2019tasim!"'} },
    { id:'malazikird',   icon:'crescent', name:{ar:'معركةُ ملاذكرد',en:'The Battle of Manzikert'}, hon:'', hook:{ar:'بوّابةُ الأناضول',en:'The gate of Anatolia'} },
    { id:'zallaqa',      icon:'crescent', name:{ar:'معركةُ الزَّلَّاقة',en:'The Battle of az-Zallaqa'}, hon:'', hook:{ar:'إنقاذُ الأندلس',en:'The rescue of Andalusia'} },
    { id:'hattin',       icon:'mosque',   name:{ar:'معركةُ حطّين',en:'The Battle of Hattin'}, hon:'', hook:{ar:'طريقُ تحريرِ القدس',en:'The road to liberating Al-Quds'} },
    { id:'aynjalut',     icon:'shield',   name:{ar:'معركةُ عينِ جالوت',en:'The Battle of Ayn Jalut'}, hon:'', hook:{ar:'حيثُ تَوقّفَ المغول',en:'Where the Mongols were halted'} },
    { id:'nikopolis',    icon:'mosque',   name:{ar:'معركةُ نِيكوبوليس',en:'The Battle of Nicopolis'}, hon:'', hook:{ar:'كسرُ الحملةِ الصليبيّة',en:'Breaking the Crusader campaign'} },
    { id:'constantinople',icon:'crown',   name:{ar:'فتحُ القسطنطينيّة',en:'The Conquest of Constantinople'}, hon:'', hook:{ar:'تصديقُ بُشرى النبيِّ ﷺ',en:'The Prophet\u2019s ﷺ glad tiding fulfilled'} },
    { id:'mohacs',       icon:'crown',    name:{ar:'معركةُ موهاكس',en:'The Battle of Mohács'}, hon:'', hook:{ar:'فتحُ قلبِ أوروبا',en:'Opening the heart of Europe'} },
    { id:'preveza',      icon:'compass',  name:{ar:'معركةُ بُرُوزَة',en:'The Battle of Preveza'}, hon:'', hook:{ar:'سيادةُ البحرِ المتوسّط',en:'Mastery of the Mediterranean'} },
  ],
};

/* ───── CERTIFICATE — unlocked when every battle station is complete ───── */
HISN.eras.battles.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ أيّامَ الإسلامِ الخالدة',
    en: 'Awarded to those who completed the Immortal Days of Islam',
  },
  statement: {
    ar: 'لِمَعرفتِهِ/معرفتِها <b>أعظمَ معاركِ الإسلام</b> — من بدرٍ إلى فتحِ القسطنطينية — ودروسَها في <b>التوكّلِ على اللهِ مع الأخذِ بالأسباب، والصبرِ والثبات، وأنّ النصرَ من عندِ الله</b>.',
    en: 'For knowing <b>the greatest battles of Islam</b> — from Badr to the Conquest of Constantinople — and their lessons in <b>trusting Allah while taking the means, patience and steadfastness, and that victory is from Allah</b>.',
  },
};
