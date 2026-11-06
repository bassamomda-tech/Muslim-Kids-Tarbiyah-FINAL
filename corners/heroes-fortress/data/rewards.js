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
  /* heart & academy are decided by their corner TEST (quiz/quiz-registry.js) — same lists here */
  heart: [
    { href: 'activities/memory-names.html', icon: '📇', d: 2, t: { ar: 'ذاكرة الأسماء الحسنى', en: 'Memory of the Names' } },
    { href: 'activities/gratitude.html', icon: '💛', d: 1, t: { ar: 'شجرة الشكر', en: 'Gratitude Tree' } },
    { href: 'activities/akhlaq-bag.html', icon: '🎒', d: 1, t: { ar: 'حقيبة الأخلاق', en: 'The Akhlaq Bag' } },
    { href: 'activities/what-if.html', icon: '🤔', d: 3, t: { ar: 'ماذا لو؟', en: 'What If?' } },
    { href: 'activities/good-bingo.html', icon: '🏅', d: 2, t: { ar: 'بنغو الصالحات', en: 'Good Deeds Bingo' } },
  ],
  academy: [
    { href: 'activities/anagram.html', icon: '🔤', d: 1, t: { ar: 'رتّبِ الحروف', en: 'Anagram' } },
    { href: 'activities/riddles.html', icon: '🧩', d: 2, t: { ar: 'ألغازُ الأذكياء', en: 'Riddles' } },
    { href: 'activities/number-cipher.html', icon: '🔢', d: 2, t: { ar: 'شيفرةُ الأرقام', en: 'Number Cipher' } },
    { href: 'activities/smart-detective.html', icon: '🔎', d: 3, t: { ar: 'المُحقّقُ الذكي', en: 'Smart Detective' } },
    { href: 'activities/carpet-designer.html', icon: '🎨', d: 3, t: { ar: 'مُصمّمُ الزخارف', en: 'Pattern Designer' } },
  ],
};
HISN.rewards.hisn = HISN.rewards.history;   // legacy alias
