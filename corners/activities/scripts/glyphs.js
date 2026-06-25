/* ============================================================
   GLYPHS — أيقونات SVG هندسية بسيطة لكل نشاط
   كل أيقونة تستخدم ألوان currentColor لتتلاءم مع لون القسم
   ============================================================ */

const G = {
  /* ---- 01–10  العبادات والإيمان (Worship & Faith) ---- */

  // 01 عجلة الأذكار — دائرة بقطاعات
  wheel: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <circle cx="32" cy="32" r="22"/>
    <path d="M32 10v44M10 32h44M16.5 16.5l31 31M47.5 16.5l-31 31"/>
    <circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 02 ذاكرة الأسماء الحسنى — بطاقتان
  memory: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="10" y="14" width="20" height="28" rx="3"/>
    <rect x="34" y="22" width="20" height="28" rx="3" transform="rotate(8 44 36)"/>
    <circle cx="20" cy="28" r="3" fill="currentColor" stroke="none"/>
  </svg>`,

  // 03 ترتيب الوضوء — قطرات متسلسلة
  wudu: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <path d="M14 38c0-4 4-8 4-8s4 4 4 8a4 4 0 0 1-8 0Z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M30 30c0-4 4-8 4-8s4 4 4 8a4 4 0 0 1-8 0Z" fill="currentColor" fill-opacity="0.35"/>
    <path d="M46 22c0-4 4-8 4-8s4 4 4 8a4 4 0 0 1-8 0Z" fill="currentColor"/>
    <path d="M10 50h44" stroke-dasharray="2 4"/>
  </svg>`,

  // 04 فرز حلال وحرام — صناديق فرز
  sort: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <path d="M32 8v18M22 18l10-10 10 10"/>
    <rect x="6" y="34" width="22" height="22" rx="3"/>
    <rect x="36" y="34" width="22" height="22" rx="3"/>
    <circle cx="17" cy="45" r="4"/>
    <path d="M41 41l12 12M53 41l-12 12"/>
  </svg>`,

  // 05 بناء المسجد — قبة + مئذنة
  mosque: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 32a18 14 0 0 1 36 0v18H14V32Z"/>
    <path d="M32 14v8M28 18h8"/>
    <rect x="8" y="22" width="4" height="28"/>
    <rect x="52" y="22" width="4" height="28"/>
    <path d="M6 50h52"/>
    <rect x="28" y="40" width="8" height="10" rx="4"/>
  </svg>`,

  // 06 المحقق الذكي — عدسة مكبرة
  spy: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <circle cx="26" cy="26" r="14"/>
    <path d="M37 37l13 13"/>
    <circle cx="26" cy="26" r="4" fill="currentColor" stroke="none"/>
  </svg>`,

  // 07 متاهة الصدق — مسار متعرج
  maze: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="8" width="48" height="48" rx="4"/>
    <path d="M16 8v24h12v-12h12v24h-12v8"/>
    <path d="M40 32h16M48 16v8"/>
    <circle cx="48" cy="48" r="3" fill="currentColor" stroke="none"/>
  </svg>`,

  // 08 ساعي بريد الجنة — مغلف
  mail: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <rect x="8" y="16" width="48" height="32" rx="3"/>
    <path d="M8 18l24 18 24-18"/>
    <path d="M28 4l4 6 4-6" stroke-linecap="round"/>
  </svg>`,

  // 09 من هو النبي؟ — علامة استفهام في دائرة
  quiz: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <circle cx="32" cy="32" r="22"/>
    <path d="M25 26c0-4 3-7 7-7s7 3 7 7c0 5-7 5-7 10"/>
    <circle cx="32" cy="45" r="2" fill="currentColor" stroke="none"/>
  </svg>`,

  // 10 السنن المنسية — نجمة + اختفاء
  sunnah: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M32 8l6 16h16l-13 10 5 16-14-10-14 10 5-16-13-10h16Z" fill="currentColor" fill-opacity="0.18"/>
    <circle cx="14" cy="50" r="3" stroke-dasharray="1.5 2.5"/>
    <circle cx="52" cy="14" r="3" stroke-dasharray="1.5 2.5"/>
  </svg>`,

  /* ---- 11–20  اللغة والمعرفة ---- */

  // 11 تتبع الكلمات — خط متقطع مع قلم
  trace: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 44c8 0 8-20 16-20s8 20 16 20 8-12 12-12" stroke-dasharray="3 4"/>
    <path d="M44 18l8 8-14 14h-8v-8l14-14Z" fill="currentColor" fill-opacity="0.18"/>
  </svg>`,

  // 12 كلمات متقاطعة مصورة — شبكة
  crossword: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="8" y="8" width="48" height="48" rx="3"/>
    <path d="M8 24h48M8 40h48M24 8v48M40 8v48"/>
    <rect x="8" y="8" width="16" height="16" fill="currentColor" fill-opacity="0.22"/>
    <rect x="40" y="24" width="16" height="16" fill="currentColor" fill-opacity="0.22"/>
    <rect x="24" y="40" width="16" height="16" fill="currentColor" fill-opacity="0.22"/>
  </svg>`,

  // 13 شيفرة الأرقام — أرقام/رموز
  cipher: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <rect x="6" y="14" width="14" height="14" rx="2"/>
    <rect x="25" y="14" width="14" height="14" rx="2"/>
    <rect x="44" y="14" width="14" height="14" rx="2"/>
    <path d="M10 21h6M28 21h6M47 21h6"/>
    <path d="M13 32v8M32 32v8M51 32v8" stroke-dasharray="1.5 2.5"/>
    <rect x="6" y="42" width="14" height="14" rx="2" fill="currentColor" fill-opacity="0.18"/>
    <rect x="25" y="42" width="14" height="14" rx="2" fill="currentColor" fill-opacity="0.18"/>
    <rect x="44" y="42" width="14" height="14" rx="2" fill="currentColor" fill-opacity="0.18"/>
  </svg>`,

  // 14 ترتيب الحديث — خطوط قابلة للسحب
  hadith: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <rect x="10" y="12" width="44" height="10" rx="3"/>
    <rect x="10" y="27" width="44" height="10" rx="3" fill="currentColor" fill-opacity="0.18"/>
    <rect x="10" y="42" width="44" height="10" rx="3"/>
    <circle cx="16" cy="17" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="20" cy="17" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="47" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="20" cy="47" r="1.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 15 شبكة البحث — شبكة بحرف
  wordsearch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="8" y="8" width="48" height="48" rx="3"/>
    <path d="M8 20h48M8 32h48M8 44h48M20 8v48M32 8v48M44 8v48" stroke-opacity="0.45"/>
    <path d="M12 12l40 40" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
  </svg>`,

  // 16 ترتيب الحروف — حروف متناثرة
  anagram: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="6" y="10" width="14" height="14" rx="2" transform="rotate(-12 13 17)"/>
    <rect x="26" y="6" width="14" height="14" rx="2" transform="rotate(8 33 13)"/>
    <rect x="46" y="14" width="14" height="14" rx="2" transform="rotate(-6 53 21)"/>
    <rect x="14" y="38" width="36" height="14" rx="3" fill="currentColor" fill-opacity="0.18"/>
  </svg>`,

  // 17 ألغاز الأدوات — مفتاح ذكي / دماغ
  riddle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M20 14a12 12 0 1 1 0 24v6h-4v-6a12 12 0 0 1 4-24Z"/>
    <circle cx="20" cy="22" r="2" fill="currentColor" stroke="none"/>
    <path d="M36 30h18M44 24l10 6-10 6" stroke-linecap="round"/>
  </svg>`,

  // 18 الحروف المختبئة — حرف باهت
  hidden: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke-dasharray="3 4"/>
    <path d="M22 22h20M32 22v20" stroke-width="3.5" opacity="0.35"/>
    <circle cx="48" cy="48" r="6"/>
    <path d="M52 52l4 4"/>
  </svg>`,

  // 19 الفوارق الخمسة — صورتان متطابقتان
  diff: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="6" y="14" width="22" height="36" rx="3"/>
    <rect x="36" y="14" width="22" height="36" rx="3"/>
    <circle cx="17" cy="26" r="3" fill="currentColor" stroke="none"/>
    <circle cx="47" cy="26" r="3" fill="currentColor" stroke="none"/>
    <path d="M11 38h12M41 38h6"/>
    <circle cx="51" cy="41" r="2" fill="currentColor" stroke="none"/>
  </svg>`,

  // 20 اختبار سريع — ساعة + علامة
  timedquiz: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <circle cx="32" cy="34" r="20"/>
    <path d="M32 22v12l8 6M28 8h8M22 12l6 4M42 12l-6 4"/>
  </svg>`,

  /* ---- 21–30  الفن والإبداع ---- */

  // 21 تلوين الزخارف — نقش متماثل
  pattern: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M32 6l16 9v18l-16 9-16-9V15l16-9Z"/>
    <path d="M32 24l8 4v9l-8 4-8-4v-9l8-4Z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M14 52h36M20 58h24" stroke-dasharray="2 3"/>
  </svg>`,

  // 22 شجرة الصلاة — شجرة
  tree: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="22" r="12" fill="currentColor" fill-opacity="0.18"/>
    <circle cx="20" cy="30" r="9" fill="currentColor" fill-opacity="0.18"/>
    <circle cx="44" cy="30" r="9" fill="currentColor" fill-opacity="0.18"/>
    <path d="M32 32v22M32 42l-6-4M32 46l8-6"/>
  </svg>`,

  // 23 مسرح العرائس — ستائر
  theater: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M6 10h52v8H6z"/>
    <path d="M10 18c4 8 4 24 0 36M22 18c0 14-4 22-8 30M42 18c4 8 4 22 0 30M54 18c-4 12-4 28 0 36"/>
    <circle cx="32" cy="38" r="6"/>
    <path d="M28 34l1 2M36 34l-1 2" stroke-linecap="round"/>
  </svg>`,

  // 24 مصمم السجادة — قلم + شبكة
  carpet: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <rect x="8" y="12" width="48" height="40" rx="3"/>
    <path d="M16 12v40M48 12v40M8 22h48M8 42h48" stroke-opacity="0.4"/>
    <path d="M32 28l4 4-4 4-4-4z" fill="currentColor"/>
  </svg>`,

  // 25 كاريوكي — موجة صوت
  karaoke: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">
    <path d="M10 32h6M20 22v20M28 14v36M36 22v20M44 28v8M52 24v16"/>
  </svg>`,

  // 26 تلوين الآيات — شريط زخرفي
  ayah: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M12 16h40l-6 8 6 8H12l6-8z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M12 36h40l-6 8 6 8H12l6-8z"/>
  </svg>`,

  // 27 مفكرة الامتنان — قلب
  gratitude: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M32 52S10 38 10 24a10 10 0 0 1 22-6 10 10 0 0 1 22 6c0 14-22 28-22 28Z" fill="currentColor" fill-opacity="0.18"/>
  </svg>`,

  // 28 خريطة الأنبياء — كرة أرضية مع دبوس
  map: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <circle cx="28" cy="32" r="20"/>
    <path d="M8 32h40M28 12c8 8 8 32 0 40M28 12c-8 8-8 32 0 40"/>
    <path d="M48 14c0 6-6 12-6 12s-6-6-6-12a6 6 0 0 1 12 0Z" fill="currentColor"/>
  </svg>`,

  // 29 شهادة التعهد — شهادة
  certificate: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <rect x="8" y="10" width="48" height="36" rx="3"/>
    <path d="M16 22h32M16 30h20"/>
    <circle cx="46" cy="38" r="7" fill="currentColor" fill-opacity="0.22"/>
    <path d="M43 44l-3 8 6-4 6 4-3-8"/>
  </svg>`,

  // 30 بنغو الصالحات — شبكة 5x5
  bingo: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <rect x="8" y="8" width="48" height="48" rx="3"/>
    <path d="M8 21h48M8 33h48M8 45h48M21 8v48M33 8v48M45 8v48" stroke-opacity="0.45"/>
    <path d="M11 11l7 7M18 11l-7 7M35 27l7 7M42 27l-7 7M11 47l7 7M18 47l-7 7" stroke-width="2.6"/>
  </svg>`,

  /* ---- 31–40  العلوم والاستكشاف ---- */

  // 31 مختبر — قارورة
  lab: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M24 8h16M28 8v16L14 50a4 4 0 0 0 4 6h28a4 4 0 0 0 4-6L36 24V8"/>
    <path d="M18 42h28" stroke-dasharray="2 3"/>
    <circle cx="26" cy="46" r="2" fill="currentColor" stroke="none"/>
    <circle cx="36" cy="48" r="2.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 32 البر والبحر — موجة + جبل
  landsea: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M6 36L20 18l10 12 8-8 14 14"/>
    <path d="M6 46c6-4 10 4 16 0s10 4 16 0 10 4 16 0M6 54c6-4 10 4 16 0s10 4 16 0 10 4 16 0"/>
  </svg>`,

  // 33 توفير الماء — قطرة
  water: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M32 8s16 18 16 30a16 16 0 1 1-32 0c0-12 16-30 16-30Z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M24 38c0 6 4 10 8 10"/>
  </svg>`,

  // 34 منظار النجوم — تلسكوب
  telescope: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 36l24-18 8 14-24 18z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M22 40l6 10M16 50l8-4"/>
    <circle cx="50" cy="14" r="2" fill="currentColor" stroke="none"/>
    <circle cx="56" cy="22" r="2" fill="currentColor" stroke="none"/>
  </svg>`,

  // 35 دورة المطر — أسهم دائرية
  cycle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 32a18 18 0 0 1 32-11"/>
    <path d="M40 16l8 5-3 9"/>
    <path d="M50 32a18 18 0 0 1-32 11"/>
    <path d="M24 48l-8-5 3-9"/>
  </svg>`,

  // 36 حقيبة الأخلاق — حقيبة
  bag: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <rect x="8" y="20" width="48" height="32" rx="4"/>
    <path d="M22 20v-4a10 10 0 0 1 20 0v4"/>
    <path d="M8 34h48" stroke-opacity="0.5"/>
    <circle cx="32" cy="36" r="2" fill="currentColor" stroke="none"/>
  </svg>`,

  // 37 أصحاب المهن — أداة
  tool: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 8l16 16-8 8-6-6-16 16 4 8-10 6-12-12 6-10 8 4 16-16-6-6z"/>
  </svg>`,

  // 38 ماذا لو؟ — شجرة قرار
  branch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <circle cx="32" cy="14" r="5"/>
    <circle cx="14" cy="44" r="5"/>
    <circle cx="32" cy="44" r="5"/>
    <circle cx="50" cy="44" r="5"/>
    <path d="M32 19l-16 20M32 19v20M32 19l16 20"/>
  </svg>`,

  // 39 أحجية المعالم — قطعة بازل
  puzzle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <path d="M10 10h18a4 4 0 0 1 0 8 4 4 0 0 0 0 8H10v12a4 4 0 0 0 8 0 4 4 0 0 1 8 0v12H10z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M34 26h4a4 4 0 0 0 0-8h-4v-8h20v20a4 4 0 0 1-8 0 4 4 0 0 0-8 0z"/>
  </svg>`,

  // 40 الزمن الهجري — خط زمني
  timeline: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <path d="M6 40h52"/>
    <circle cx="14" cy="40" r="4" fill="currentColor"/>
    <circle cx="32" cy="40" r="4"/>
    <circle cx="50" cy="40" r="4" fill="currentColor" fill-opacity="0.4"/>
    <path d="M14 28v8M32 18v22M50 28v8"/>
  </svg>`,

  /* ---- 41–50  تحديات السيرة واللغة ---- */

  // 41 صيد الحروف — سلة + حروف متساقطة
  catch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="20" cy="10" r="3" fill="currentColor"/>
    <circle cx="36" cy="18" r="3"/>
    <circle cx="50" cy="8" r="3" fill="currentColor"/>
    <path d="M8 38h48l-6 16H14z" fill="currentColor" fill-opacity="0.2"/>
    <path d="M16 38l3-6M48 38l-3-6"/>
  </svg>`,

  // 42 الكلمة وعكسها — سهمان متقابلان
  opposite: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="14" width="20" height="36" rx="3"/>
    <rect x="38" y="14" width="20" height="36" rx="3"/>
    <path d="M28 32h8M30 28l-4 4 4 4M36 28l4 4-4 4"/>
  </svg>`,

  // 43 الحركات — حرف بحركة
  tashkeel: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 16l4 4 6-6"/>
    <path d="M32 14a4 4 0 1 1 0 8"/>
    <circle cx="50" cy="18" r="3" fill="currentColor"/>
    <path d="M8 40c8 0 12-6 18-6s8 8 16 8 14-6 14-6"/>
  </svg>`,

  // 44 المقرأة — مكبر صوت
  speaker: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M8 24h12l16-12v40L20 40H8z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M44 22a14 14 0 0 1 0 20M50 16a22 22 0 0 1 0 32"/>
  </svg>`,

  // 45 شجرة العائلة — هيكل عقدي
  family: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="24" y="8" width="16" height="10" rx="3" fill="currentColor" fill-opacity="0.2"/>
    <rect x="6" y="36" width="16" height="10" rx="3"/>
    <rect x="24" y="36" width="16" height="10" rx="3"/>
    <rect x="42" y="36" width="16" height="10" rx="3"/>
    <path d="M32 18v8H14v10M32 26v10M32 26h18v10" stroke-linecap="round"/>
  </svg>`,

  // 46 بطل الأركان — شخصية صغيرة + 5 أركان
  hero: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="16" r="6"/>
    <path d="M32 22v14M26 30l6-2 6 2M26 42l6 8M38 42l-6 8"/>
    <path d="M10 56h6M22 56h6M34 56h6M46 56h6"/>
  </svg>`,

  // 47 سودوكو — شبكة 3x3
  sudoku: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4">
    <rect x="8" y="8" width="48" height="48" rx="3"/>
    <path d="M8 24h48M8 40h48M24 8v48M40 8v48"/>
    <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none"/>
    <circle cx="48" cy="32" r="2.5" fill="currentColor" stroke="none"/>
    <circle cx="32" cy="48" r="2.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 48 تحدي 30 ث — ساعة إيقاف
  stopwatch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="34" r="20"/>
    <path d="M32 8h0M28 8h8M32 14v-6M32 34l10-10M22 14l-4 4M42 14l4 4"/>
    <circle cx="32" cy="34" r="3" fill="currentColor" stroke="none"/>
  </svg>`,

  // 49 من أنا؟ — ظل شخصية
  who: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="32" cy="20" r="10" fill="currentColor" fill-opacity="0.2"/>
    <path d="M14 54c0-10 8-18 18-18s18 8 18 18" fill="currentColor" fill-opacity="0.2"/>
    <path d="M26 18a4 4 0 0 1 8 0M40 20l4-3" stroke-dasharray="1.5 2.5"/>
  </svg>`,

  // 50 حقيبة المسافر — حقيبة سفر
  suitcase: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
    <rect x="8" y="18" width="48" height="34" rx="4"/>
    <path d="M24 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/>
    <path d="M8 30h48" stroke-opacity="0.5"/>
    <rect x="28" y="36" width="8" height="10" rx="1" fill="currentColor" fill-opacity="0.2"/>
  </svg>`,
};

window.G = G;
