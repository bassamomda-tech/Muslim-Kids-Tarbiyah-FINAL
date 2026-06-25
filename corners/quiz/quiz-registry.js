/* ════════════════════════════════════════════════════════════════
   اختبارات الأركان — Corner Quizzes · REGISTRY
   Each corner declares: how its pages are detected, where its journey
   stations live, its journey list (for the score panel), and its 5
   carefully-chosen Anous rewards (unlocked at ≥75% corner score).

   Detection models:
   • multi-page corner  → `folder` set; journey id = the page filename
                          (faith-minaret: yaqeen.html, tawheed.html, …)
   • single-page corner → `page` + `stationsGlobal` set; journey id = ?j=
                          (little-district: ibada-journeys.html?j=salah, …)
   `index` = the corner hub page filename (shows the scores/rewards panel).

   Anous hrefs are stored RELATIVE TO THE ANOUS ROOT (corners/activities/),
   exactly as in activities-data.js.
   ════════════════════════════════════════════════════════════════ */
window.QUIZ_REG = {

  /* ───────────── 🏛️ أكاديمية المبدعين (multi-page; journeys + hub in heroes-fortress/) ───────────── */
  academy: {
    folder: 'heroes-fortress', index: 'academy', richProfile: 'academy',
    title: { ar: 'أكاديمية المبدعين', en: "Innovators' Academy" }, icon: '🏛️',
    journeys: [
      { id: 'mubdi',  icon: '💡', title: { ar: 'كُن أنتَ المُبدِع', en: 'Be the Creator' } },
      { id: 'lugha',  icon: '📜', title: { ar: 'لُغَتي العَرَبيّة', en: 'My Arabic Language' } },
      { id: 'manara', icon: '🗼', title: { ar: 'مَنارةُ العالَم',   en: "The World's Lighthouse" } },
    ],
    extraLearn: [
      { href: 'activities.html?era=explorers', icon: '🔭', title: { ar: 'رِحلةُ المُستكشِفين', en: 'The Explorers' } },
      { href: 'activities.html?era=minds',     icon: '📖', title: { ar: 'عُقولٌ مُنيرة',      en: 'Illuminating Minds' } },
    ],
    rewards: [
      { href: 'activities/anagram.html',         icon: '🔤', d: 1, t: { ar: 'رتّبِ الحروف',     en: 'Anagram' } },
      { href: 'activities/riddles.html',         icon: '🧩', d: 2, t: { ar: 'ألغازُ الأذكياء',  en: 'Riddles' } },
      { href: 'activities/number-cipher.html',   icon: '🔢', d: 2, t: { ar: 'شيفرةُ الأرقام',   en: 'Number Cipher' } },
      { href: 'activities/smart-detective.html', icon: '🕵️', d: 3, t: { ar: 'المُحقّقُ الذكي',  en: 'Smart Detective' } },
      { href: 'activities/carpet-designer.html', icon: '🎨', d: 3, t: { ar: 'مُصمّمُ الزخارف',  en: 'Pattern Designer' } },
    ],
  },

  /* ───────────── 🕋 منارة العقيدة (multi-page) ───────────── */
  aqeeda: {
    folder: 'faith-minaret', index: 'aqeeda', richProfile: 'academy',
    title: { ar: 'منارة العقيدة', en: 'Faith Minaret' }, icon: '🕋',
    journeys: [
      { id: 'yaqeen',  icon: '🧭', noLearn: true, title: { ar: 'رحلة اليقين',      en: 'Journey of Certainty' } },
      { id: 'lab',     icon: '🔬', title: { ar: 'مختبر كشف الحقائق', en: 'The Truth Lab' } },
      { id: 'tawheed', icon: '🕋', noLearn: true, title: { ar: 'رحلة التوحيد',     en: 'Journey of Tawheed' } },
      { id: 'maarifa', icon: '🌅', title: { ar: 'كيف عرفنا الله؟',   en: 'How We Knew Allah' } },
      { id: 'aman',    icon: '🛡️', title: { ar: 'سلسلة الأمان بالله', en: 'Security with Allah' } },
      { id: 'malaika', icon: '✨', title: { ar: 'رحلة جنود النور',   en: 'Soldiers of Light' } },
      { id: 'kutub',   icon: '📜', title: { ar: 'رحلة البلاغ',       en: 'Journey of the Message' } },
      { id: 'akhira',  icon: '🌉', title: { ar: 'رحلة العبور',       en: 'Journey of the Crossing' } },
      { id: 'qadar',   icon: '📿', title: { ar: 'رحلة سر التقدير',   en: 'Secret of the Decree' } },
      { id: 'thabat',  icon: '🦁', title: { ar: 'رحلة الأبطال',      en: 'Journey of the Heroes' } },
    ],
    rewards: [
      { href: 'activities/memory-names.html',  icon: '🃏', d: 2, t: { ar: 'ذاكرة الأسماء الحسنى', en: 'Memory of the Beautiful Names' } },
      { href: 'activities/creature-lab.html',  icon: '🔬', d: 2, t: { ar: 'مختبر المخلوقات',       en: 'Creatures Lab' } },
      { href: 'activities/star-telescope.html',icon: '🔭', d: 3, t: { ar: 'منظار النجوم',          en: 'Star Telescope' } },
      { href: 'activities/prophet-quiz.html',  icon: '❓', d: 2, t: { ar: 'من هو النبي؟',          en: 'Who Is the Prophet?' } },
      { href: 'activities/prophet-map.html',   icon: '🗺️', d: 3, t: { ar: 'خريطة الأنبياء',        en: "Prophets' Map" } },
    ],
  },

  /* ───────────── 🌙 واحة العبادة (single-page ?j=) ───────────── */
  ibada: {
    page: 'ibada-journeys', index: 'ibada', stationsGlobal: 'IBADA_JOURNEYS', richProfile: 'academy',
    title: { ar: 'واحة العبادة', en: 'Worship Oasis' }, icon: '🌙',
    journeys: [
      { id: 'salah',   icon: '🤲', title: { ar: 'الصلاة',          en: 'Prayer' } },
      { id: 'fasting', icon: '🌙', title: { ar: 'الصيام',          en: 'Fasting' } },
      { id: 'adhkar',  icon: '🛡️', title: { ar: 'الأذكار',         en: 'Adhkar' } },
      { id: 'dua',     icon: '💡', title: { ar: 'الدعاء',          en: "Du'a" } },
      { id: 'zakah',   icon: '🎁', title: { ar: 'الزكاة والصدقة',  en: 'Zakah & Charity' } },
      { id: 'hajj',    icon: '🕋', title: { ar: 'الحج',            en: 'Hajj' } },
    ],
    rewards: [
      { href: 'activities/wudu-order.html',    icon: '💧', d: 1, t: { ar: 'ترتيب الوضوء',        en: 'Wudu Order' } },
      { href: 'activities/prayer-tree.html',   icon: '🌳', d: 1, t: { ar: 'شجرة تتبع الصلاة',    en: 'Prayer Tracking Tree' } },
      { href: 'activities/wheel-of-dhikr.html',icon: '🎡', d: 1, t: { ar: 'عجلة الأذكار',        en: 'Wheel of Dhikr' } },
      { href: 'activities/pillars-hero.html',  icon: '🦸', d: 3, t: { ar: 'بطل الأركان الخمسة',  en: 'Five Pillars Hero' } },
      { href: 'activities/traveler-bag.html',  icon: '🧳', d: 2, t: { ar: 'حقيبة المسافر',       en: "Traveler's Bag" } },
    ],
  },

  /* ───────────── 🏊 النادي الرياضي (single-page ?j=, no separate hub) ───────────── */
  sport: {
    page: 'sport', stationsGlobal: 'SPORT_JOURNEYS', richProfile: 'academy',
    title: { ar: 'النادي الرياضي', en: 'Sports Club' }, icon: '🏊',
    journeys: [
      { id: 'fitrah',    icon: '🪥', title: { ar: 'سنن الفطرة',            en: 'The Fitrah Sunnahs' } },
      { id: 'sport',     icon: '🏃', title: { ar: 'الرياضة والقوة',         en: 'Sport & Strength' } },
      { id: 'warning',   icon: '🚫', title: { ar: 'احذر هذه الآفات',        en: 'Beware These Dangers' } },
      { id: 'character', icon: '🦁', title: { ar: 'القوة والشخصية القيادية', en: 'Strength & Leadership' } },
    ],
    rewards: [
      { href: 'activities/honesty-pledge.html', icon: '✍️', d: 1, t: { ar: 'تعهّد الصدق',     en: 'Honesty Pledge' } },
      { href: 'activities/akhlaq-bag.html',     icon: '🎒', d: 1, t: { ar: 'حقيبة الأخلاق',   en: 'The Akhlaq Bag' } },
      { href: 'activities/good-bingo.html',     icon: '🏅', d: 2, t: { ar: 'بنغو الصالحات',   en: 'Good Deeds Bingo' } },
      { href: 'activities/what-if.html',        icon: '🤔', d: 3, t: { ar: 'ماذا لو؟',        en: 'What If?' } },
      { href: 'activities/honesty-maze.html',   icon: '🌀', d: 3, t: { ar: 'متاهة الصدق',     en: 'Honesty Maze' } },
    ],
  },

  /* ───────────── 🕌 ركن القدس والأمة (multi-page; hub in pages/, journeys in quds-ummah/) ───────────── */
  quds: {
    folder: 'quds-ummah', index: 'quds', richProfile: 'academy', learnBase: '../../quds-ummah/',
    title: { ar: 'ركن القدس والأمة', en: 'Al-Quds & the Ummah' }, icon: '🕌',
    journeys: [
      { id: 'aqsa',    icon: '🕌', title: { ar: 'رحلة الأقصى',  en: 'Journey of Al-Aqsa' } },
      { id: 'wahda',   icon: '🤝', title: { ar: 'الأمة الواحدة', en: 'The One Ummah' } },
      { id: 'taghyir', icon: '🌅', title: { ar: 'رحلة التغيير',  en: 'Journey of Change' } },
    ],
    rewards: [
      { href: 'activities/landmarks-puzzle.html', icon: '🧩', d: 3, t: { ar: 'أحجية المعالم',        en: 'Landmarks Puzzle' } },
      { href: 'activities/hijri-timeline.html',   icon: '📜', d: 2, t: { ar: 'شريط الزمن الهجري',    en: 'Hijri Timeline' } },
      { href: 'activities/family-tree.html',      icon: '🌳', d: 2, t: { ar: 'شجرة العائلة النبوية', en: 'Prophetic Family Tree' } },
      { href: 'activities/prophet-map.html',      icon: '🗺️', d: 3, t: { ar: 'خريطة الأنبياء',       en: "Prophets' Map" } },
      { href: 'activities/what-if.html',          icon: '🤔', d: 3, t: { ar: 'ماذا لو؟',             en: 'What If?' } },
    ],
  },

  /* ───────────── 🏘️ حيّنا الصغير (single-page test on social.html) ───────────── */
  social: {
    page: 'social', index: '__social_hub', stationsGlobal: 'DISTRICT_QUIZ',
    title: { ar: 'حيّنا الصغير', en: 'Our Little District' }, icon: '🏘️',
    journeys: [
      { id: 'akhlaq', icon: '💎', title: { ar: 'اختبار الأخلاق', en: 'Manners Test' } },
      { id: 'adab',   icon: '📜', title: { ar: 'اختبار الآداب',  en: 'Etiquette Test' } },
    ],
    rewards: [
      { href: 'activities/akhlaq-bag.html',     icon: '🎒', d: 1, t: { ar: 'حقيبة الأخلاق',  en: 'Akhlaq Bag' } },
      { href: 'activities/good-bingo.html',     icon: '🏅', d: 2, t: { ar: 'بنغو الصالحات',  en: 'Good Deeds Bingo' } },
      { href: 'activities/honesty-pledge.html', icon: '✍️', d: 2, t: { ar: 'تعهّد الصدق',    en: 'Honesty Pledge' } },
      { href: 'activities/what-if.html',        icon: '🤔', d: 3, t: { ar: 'ماذا لو؟',       en: 'What If?' } },
      { href: 'activities/gratitude.html',      icon: '💛', d: 1, t: { ar: 'شجرة الشكر',     en: 'Gratitude Tree' } },
    ],
  },

  /* ───────────── 📖 بستان القرآن والسنة (single-page ?j=) ───────────── */
  quran: {
    page: 'quran-tests', index: 'quran', stationsGlobal: 'QURAN_QUIZ', richProfile: 'academy',
    title: { ar: 'بستان القرآن والسنة', en: 'Quran & Sunnah Garden' }, icon: '📖',
    journeys: [
      { id: 'surahs',     icon: '📜', title: { ar: 'السور القصيرة',  en: 'Short Surahs' } },
      { id: 'stories',    icon: '🏛️', title: { ar: 'قصص القرآن',     en: "Qur'anic Stories" } },
      { id: 'hadith',     icon: '🕌', title: { ar: 'الأربعون النووية', en: 'The 40 Hadith of Nawawi' } },
      { id: 'companions', icon: '🤝', title: { ar: 'أنا صاحبك القرآن', en: 'I Am Your Companion' } },
    ],
    rewards: [
      { href: 'activities/ayah-color.html',    icon: '🎨', d: 1, t: { ar: 'تلوين الآيات',      en: 'Color the Ayahs' } },
      { href: 'activities/word-trace.html',    icon: '✍️', d: 1, t: { ar: 'تتبّع الكلمات',     en: 'Word Tracing' } },
      { href: 'activities/tashkeel-game.html', icon: '◌ً', d: 1, t: { ar: 'لعبة الحركات',      en: 'Tashkeel Game' } },
      { href: 'activities/catch-madd.html',    icon: '🅰️', d: 2, t: { ar: 'صيد حروف المدّ',    en: 'Catch the Madd Letters' } },
      { href: 'activities/smart-reciter.html', icon: '🎙️', d: 3, t: { ar: 'المقرأة الذكية',    en: 'Smart Reciter' } },
    ],
  },

  /* ───────────── 🏰 حصن الأبطال — EXAM-FREE ─────────────
     This corner does NOT use the quiz exam. Each era's own Challenge Hall
     (engine/activities.js) decides the 75% unlock of the 5 Anous rewards.
     Intentionally NOT registered here so no test banner mounts on era.html. */

  /* ───────────── 💚 ركن القلب السليم (heart.html) ───────────── */
  heart: {
    eraPage: 'heart', eraGlobal: 'HISN', defaultEra: 'heart',
    title: { ar: 'ركن القلب السليم', en: 'The Pure Heart' }, icon: '💚',
    journeys: [
      { id: 'heart', icon: '💚', title: { ar: 'اختبار القلب السليم', en: 'Pure Heart Test' } },
    ],
    rewards: [
      { href: 'activities/memory-names.html', icon: '🃏', d: 2, t: { ar: 'ذاكرة الأسماء الحسنى', en: 'Memory of the Names' } },
      { href: 'activities/gratitude.html',    icon: '💛', d: 1, t: { ar: 'شجرة الشكر',          en: 'Gratitude Tree' } },
      { href: 'activities/akhlaq-bag.html',   icon: '🎒', d: 1, t: { ar: 'حقيبة الأخلاق',       en: 'The Akhlaq Bag' } },
      { href: 'activities/what-if.html',      icon: '🤔', d: 3, t: { ar: 'ماذا لو؟',            en: 'What If?' } },
      { href: 'activities/good-bingo.html',   icon: '🏅', d: 2, t: { ar: 'بنغو الصالحات',       en: 'Good Deeds Bingo' } },
    ],
  },

};
