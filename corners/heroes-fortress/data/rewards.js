/* data/rewards.js — Anous reward sets + corner→eras map for the Challenge Halls.
   When a CHILD passes ≥75% of a corner's challenges, 5 matching Anous
   activities unlock (shown in the hall + surfaced inside Anous via mkUnlocked).
   Hrefs are relative to the Anous root (corners/activities/), as in activities-data.js. */
window.HISN = window.HISN || {};

// Which eras roll up into each "corner" total.
HISN.cornerEras = {
  history:['prophets', 'seerah', 'heroes', 'battles'],   // 🏰 حصن الأبطال (key aligns with MK_CORNER='history')
  heart:  ['heart'],                                      // 💚 القلب السليم
  academy:['creativity'],                                 // 🏛️ أكاديمية المبدعين
};
HISN.cornerEras.hisn = HISN.cornerEras.history;          // legacy alias

HISN.cornerTitle = {
  history:{ ar: 'حصن الأبطال', en: "Heroes' Fortress" },
  heart:  { ar: 'القلب السليم', en: 'The Pure Heart' },
  academy:{ ar: 'أكاديمية المبدعين', en: "Innovators' Academy" },
};
HISN.cornerTitle.hisn = HISN.cornerTitle.history;

// 5 carefully-chosen Anous rewards per corner (theme + mixed difficulty).
HISN.rewards = {
  history: [
    { href: 'activities/prophet-quiz.html',        icon: '❓', d: 2, t: { ar: 'من هو النبي؟',         en: 'Who Is the Prophet?' } },
    { href: 'activities/prophet-map.html',         icon: '🗺️', d: 3, t: { ar: 'خريطة الأنبياء',       en: "Prophets' Map" } },
    { href: 'activities/prophet-professions.html', icon: '🛠️', d: 2, t: { ar: 'أصحاب المهن النبوية',  en: "Prophets' Professions" } },
    { href: 'activities/family-tree.html',         icon: '🌳', d: 2, t: { ar: 'شجرة العائلة النبوية', en: 'Prophetic Family Tree' } },
    { href: 'activities/hijri-timeline.html',      icon: '📜', d: 2, t: { ar: 'شريط الزمن الهجري',    en: 'Hijri Timeline' } },
  ],
  heart: [
    { href: 'activities/memory-names.html',  icon: '🃏', d: 2, t: { ar: 'ذاكرة الأسماء الحسنى', en: 'Memory of the Beautiful Names' } },
    { href: 'activities/gratitude.html',     icon: '📔', d: 1, t: { ar: 'مفكرة الامتنان',       en: 'Gratitude Journal' } },
    { href: 'activities/good-bingo.html',    icon: '🏅', d: 2, t: { ar: 'بنغو الصالحات',        en: 'Good Deeds Bingo' } },
    { href: 'activities/akhlaq-bag.html',    icon: '🎒', d: 1, t: { ar: 'حقيبة الأخلاق',        en: 'The Akhlaq Bag' } },
    { href: 'activities/honesty-pledge.html',icon: '✍️', d: 1, t: { ar: 'تعهّد الصدق',          en: 'Honesty Pledge' } },
  ],
  academy: [
    { href: 'activities/creature-lab.html',   icon: '🔬', d: 2, t: { ar: 'مختبر المخلوقات',  en: 'Creatures Lab' } },
    { href: 'activities/star-telescope.html', icon: '🔭', d: 3, t: { ar: 'منظار النجوم',     en: 'Star Telescope' } },
    { href: 'activities/carpet-designer.html',icon: '🎨', d: 2, t: { ar: 'مصمم السجادة',     en: 'Carpet Designer' } },
    { href: 'activities/islamic-sudoku.html', icon: '🔢', d: 3, t: { ar: 'سودوكو إسلامي',    en: 'Islamic Sudoku' } },
    { href: 'activities/word-search.html',    icon: '🔤', d: 2, t: { ar: 'شبكة البحث عن الكلمات', en: 'Word Search Grid' } },
  ],
};
HISN.rewards.hisn = HISN.rewards.history;   // legacy alias
