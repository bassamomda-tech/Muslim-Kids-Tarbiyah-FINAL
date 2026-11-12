#!/usr/bin/env node
/* tools/search-index/build.js — builds corners/shared/search-index.js (window.MK_SEARCH)
   for the site search page (corners/shared/search.html).

   Run from anywhere:   node tools/search-index/build.js
   No dependencies. Data files are evaluated in a sandbox (vm) with a fake `window`,
   so the index follows the real data — re-run it after adding stories/cards/activities.

   Entry shape:  { t:{ar,en}, d:{ar,en}, u:'path from site root', k:'kind', ic:'emoji' }
   Kinds:  corner · page · card · quest   (chip «Pages»)
           story                          (chip «Stories»)
           hadith                         (chip «Hadith»)
           activity                       (chip «Activities»)
           atlas · country                (chip «Atlas»)
           journey · house · skill        (chip «Journeys»)                              */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'corners', 'shared', 'search-index.js');
const DESC_MAX = 46;          // characters per description line
const R = (...p) => path.join(ROOT, ...p);
const read = p => fs.readFileSync(R(p), 'utf8');
const exists = p => fs.existsSync(R(p));
const ls = d => (exists(d) ? fs.readdirSync(R(d)) : []);

/* ───────── sandbox ───────── */
function sandbox() {
  // a "black hole" that swallows any DOM call the data files / inline scripts make
  const hole = new Proxy(function () {}, {
    get(t, k) {
      if (k === Symbol.toPrimitive) return () => '';
      if (k === 'toString' || k === 'valueOf') return () => '';
      if (k === 'length') return 0;
      if (k === 'then') return undefined;
      if (k === Symbol.iterator) return function* () {};
      return hole;
    },
    apply() { return hole; }, construct() { return hole; }, set() { return true; }
  });
  const store = { getItem: () => null, setItem() {}, removeItem() {}, key: () => null, length: 0 };
  const sb = {
    console: { log() {}, warn() {}, error() {}, info() {} },
    document: hole, navigator: hole, history: hole, screen: hole,
    location: { href: 'http://x/', pathname: '/', search: '', hash: '', replace() {}, assign() {}, reload() {} },
    localStorage: store, sessionStorage: store,
    setTimeout() { return 0; }, setInterval() { return 0; }, clearTimeout() {}, clearInterval() {},
    requestAnimationFrame() { return 0; }, addEventListener() {}, removeEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
    fetch: () => new Promise(() => {}), Image: hole, Audio: hole, SpeechSynthesisUtterance: hole,
    speechSynthesis: hole, URLSearchParams, URL,
    innerWidth: 1280, innerHeight: 800, devicePixelRatio: 1, TRMap: hole, L: hole, MutationObserver: hole, IntersectionObserver: hole
  };
  sb.window = sb; sb.self = sb; sb.globalThis = sb; sb.top = sb; sb.parent = sb;
  return vm.createContext(sb);
}
const problems = [];
function run(ctx, code, name) {
  try { vm.runInContext(code, ctx, { filename: name, timeout: 5000 }); return true; }
  catch (e) { problems.push(name + ' → ' + String(e && e.message || e).slice(0, 110)); return false; }
}
function load(ctx, rel) {
  if (!exists(rel)) { problems.push('missing file: ' + rel); return false; }
  return run(ctx, read(rel), rel);
}
/* run an HTML page's own <script>s (local files + inline), in order, until `stopAt` */
function loadPageScripts(ctx, htmlRel, stopAt) {
  const html = read(htmlRel), dir = path.posix.dirname(htmlRel);
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi; let m;
  while ((m = re.exec(html))) {
    const src = (/\bsrc\s*=\s*["']([^"']+)["']/i.exec(m[1]) || [])[1];
    if (src) {
      if (stopAt && stopAt.test(src)) break;
      if (/^(https?:)?\/\//.test(src) || /shared\/mk-|tr-map\.js/.test(src)) continue;
      load(ctx, path.posix.normalize(dir + '/' + src.split('?')[0]));
    } else if (m[2].trim()) run(ctx, m[2], htmlRel + ' <inline>');
  }
}

/* ───────── text helpers ───────── */
function plain(s) {
  if (s == null) return '';
  if (Array.isArray(s)) s = s[0];
  return String(s).replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ').trim();
}
const TASHKEEL = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g;
function short(s, max) {
  s = plain(s).replace(TASHKEEL, ''); max = max || DESC_MAX;   // descriptions are stored without tashkeel (compact)
  if (s.length <= max) return s;
  let cut = s.slice(0, max); const sp = cut.lastIndexOf(' ');
  if (sp > max * 0.6) cut = cut.slice(0, sp);
  return cut.replace(/[\s،,.:;—–-]+$/, '') + '…';
}
const L = (v, lang) => {                       // {ar,en} | [ar,en] | string  → one language
  if (v == null) return '';
  if (typeof v === 'string') return lang === 'ar' ? v : '';
  if (Array.isArray(v)) return v[lang === 'ar' ? 0 : 1] || '';
  return v[lang] || '';
};
const isEmoji = s => typeof s === 'string' && s.length && s.length <= 14 && /[^\x00-\x7F]/.test(s) && !/[؀-ۿ]/.test(s);

/* ───────── the index ───────── */
const INDEX = [], seen = new Set(), skipped = [];
function add(k, ic, tAr, tEn, dAr, dEn, u) {
  tAr = plain(tAr); tEn = plain(tEn);
  if (!tAr && !tEn) return;
  const file = u.split('#')[0].split('?')[0];
  if (!exists(file)) { skipped.push(k + ': ' + (tAr || tEn) + ' → ' + u); return; }
  const key = k + '|' + u + '|' + (tAr || tEn);
  if (seen.has(key)) return; seen.add(key);
  INDEX.push({ t: { ar: tAr, en: tEn }, d: { ar: short(dAr), en: short(dEn) }, u: u, k: k, ic: isEmoji(ic) ? ic : '⭐' });
}
const guard = (name, fn) => { try { fn(); } catch (e) { problems.push(name + ' → ' + String(e && e.message || e).slice(0, 140)); } };

/* 1 ── corners + star places (mk-system.js) + journeys registry */
guard('corners', () => {
  const ctx = sandbox();
  // STAR_PLACES is private inside the IIFE → expose it for the builder only
  const code = read('corners/shared/mk-system.js').replace('function stars()', 'window.__STAR_PLACES = STAR_PLACES;\n  function stars()');
  run(ctx, code, 'corners/shared/mk-system.js');
  load(ctx, 'corners/shared/mk-journeys.js');
  const corners = (ctx.MK && ctx.MK.CORNERS) || [], byId = {};
  corners.forEach(c => {
    byId[c.id] = c;
    add('corner', c.icon, c.name.ar, c.name.en, 'ركنٌ من أركان المدينة', 'A corner of the city', c.base);
  });
  (ctx.__STAR_PLACES || []).forEach(p => {
    const u = p.h || ('corners/treasures/' + p.tr + '.html');
    add('page', p.ic, p.n.ar, p.n.en, 'مكانٌ لجمع النجوم ⭐', 'A place to collect stars ⭐', u);
  });
  (ctx.MK_JOURNEYS || []).forEach(j => {
    const c = byId[j.corner];
    add('journey', j.icon, j.name.ar, j.name.en,
      'رحلة محطّات' + (c ? ' · ' + c.name.ar : '') + (j.total ? ' · ' + j.total + ' محطة' : ''),
      'Station journey' + (c ? ' · ' + c.name.en : '') + (j.total ? ' · ' + j.total + ' stations' : ''), j.page);
  });
});

/* 2 ── Anos's 104 activities */
guard('activities', () => {
  const ctx = sandbox(); load(ctx, 'corners/activities/scripts/activities-data.js');
  (ctx.SECTIONS || []).forEach(s => (s.activities || []).forEach(a => {
    if (!a.href) return;
    add('activity', '🧩', a.t, a.te, 'نشاط ' + a.n + ' · ' + (s.title || ''), 'Activity ' + a.n + ' · ' + (s.titleEn || ''), 'corners/activities/' + a.href);
  }));
});

/* 3 ── treasure-style pages (window.TR_PAGE; tr.js opens #<item id>) */
function trPage(htmlRel, kind, itemKind) {
  guard(htmlRel, () => {
    const ctx = sandbox(); loadPageScripts(ctx, htmlRel, /(^|\/)tr\.js$/);
    const P = ctx.TR_PAGE; if (!P) { problems.push('no TR_PAGE in ' + htmlRel); return; }
    const pAr = L(P.title, 'ar'), pEn = L(P.title, 'en');
    add(kind === 'atlas' ? 'atlas' : 'page', P.icon, pAr, pEn, L(P.intro, 'ar'), L(P.intro, 'en'), htmlRel);
    (P.items || []).forEach(it => {
      if (!it || !it.title) return;
      const sub = it.sub || it.hook || it.tagline || it.meaning || it.when || it.src || it.era || '';
      const dAr = [L(sub, 'ar'), pAr].filter(Boolean).join(' · '), dEn = [L(sub, 'en'), pEn].filter(Boolean).join(' · ');
      add(itemKind, it.icon || P.icon, L(it.title, 'ar'), L(it.title, 'en'), dAr, dEn, htmlRel + (it.id ? '#' + it.id : ''));
    });
    return ctx;
  });
}
trPage('corners/quds-ummah/atlas.html', 'atlas', 'atlas');
guard('countries', () => {
  const ctx = sandbox(); load(ctx, 'corners/quds-ummah/atlas-data/countries.js');
  (ctx.ATLAS_COUNTRIES || []).forEach(c => add('country', c.flag, c.name.ar, c.name.en,
    'العاصمة: ' + L(c.capital, 'ar') + ' · الدول الإسلامية في الأطلس', 'Capital: ' + L(c.capital, 'en') + ' · Muslim countries in the Atlas', 'corners/quds-ummah/atlas.html'));
});
const TR_KINDS = { 'hadith-stories': 'hadith', 'prophet-moments': 'story', landmarks: 'atlas', tours: 'atlas' };
ls('corners/treasures').filter(f => /\.html$/.test(f)).forEach(f => {
  const id = f.replace(/\.html$/, ''), rel = 'corners/treasures/' + f;
  if (id === 'hadith-cards' || id === 'index') return;       // both are redirect stubs
  if (!/window\.TR_PAGE\s*=/.test(read(rel))) return;
  trPage(rel, 'page', TR_KINDS[id] || 'card');
});

/* 4 ── the Forty Hadith (each opens with ?card=hNN) */
guard('forty', () => {
  const ctx = sandbox(); load(ctx, 'corners/little-district/pages/hadith-data/_index.js');
  (ctx.HADITH_INDEX || []).forEach(h => add('hadith', h.emoji, 'الحديث ' + h.num + ': ' + h.titleAr, 'Hadith ' + h.num + ': ' + h.titleEn,
    h.themeAr + ' · الأربعون النووية', h.themeEn + ' · The Forty Hadith', 'corners/little-district/pages/hadith.html?card=' + h.slug));
});

/* 5 ── little stories (ages 3–6, Arabic) — links exactly as little.html builds them */
guard('little stories', () => {
  const SRC = [
    ['minaret', 'minaret-little', 'MINARET_JOURNEYS', 'MINARET_LITTLE', 'حكايات منارة العقيدة', 'Faith Minaret tales'],
    ['prophets', 'prophets-little', 'PROPHET_JOURNEYS', 'PROPHET_LITTLE', 'قصص الأنبياء للصغار', 'Prophets’ stories for little ones'],
    ['ibada', 'ibada-little', 'IBADA_JOURNEYS', 'IBADA_LITTLE', 'حكايات العبادة للصغار', 'Worship tales for little ones'],
    ['seerah', 'seerah-little', 'SEERAH_JOURNEYS', 'SEERAH_LITTLE', 'السيرة النبوية للصغار', 'The Seerah for little ones'],
    ['companions', 'companions-little', 'COMPANIONS_JOURNEYS', 'COMPANIONS_LITTLE', 'قصص الصحابة للصغار', 'Companions’ stories for little ones']
  ];
  SRC.forEach(([src, dir, metaKey, ns, lblAr, lblEn]) => {
    const base = 'corners/stories/' + dir, ctx = sandbox();
    load(ctx, base + '/journeys.js');
    (ctx[metaKey] || []).forEach(j => {
      if (!j.ready || !exists(base + '/' + j.id + '.js')) return;
      const u = 'corners/stories/minaret-journey.html?' + (src === 'minaret' ? '' : 'src=' + src + '&') + 'j=' + j.id;
      add('story', j.icon, j.title, '', (j.tag || '') + ' · ' + lblAr, '', u);
      load(ctx, base + '/' + j.id + '.js');
      const J = ctx[ns] && ctx[ns][j.id];
      ((J && J.stories) || []).forEach(st => add('story', st.icon || j.icon, st.title, '',
        (st.tag ? st.tag + ' · ' : '') + plain(j.title), '', u));
    });
  });
  // the classic shelf inside little.html (opened from the page itself)
  const ctx = sandbox(); load(ctx, 'corners/stories/little-data.js'); load(ctx, 'corners/stories/little-aqeeda-data.js');
  (ctx.LITTLE_STORIES || []).concat(ctx.LITTLE_STORIES_AQEEDA || []).forEach(s =>
    add('story', s.icon, s.title + (s.name ? ' — ' + s.name : ''), '', (s.tag || '') + ' · مكتبة القصص للصغار', '', 'corners/stories/little.html'));
});

/* 6 ── Heroes' Fortress stations (prophets · seerah · heroes · battles · heart · academy) */
guard('fortress', () => {
  const D = 'corners/heroes-fortress/data/', ctx = sandbox();
  ['index', 'prophets', 'seerah', 'heroes', 'battles', 'heart', 'creativity'].forEach(f => exists(D + f + '.js') && load(ctx, D + f + '.js'));
  const H = ctx.HISN || {}, authored = new Set(H.authored || []);
  const EIC = { prophets: '🌟', seerah: '🌙', heroes: '🏰', battles: '⚔️', heart: '💚', creativity: '🔭' };
  Object.keys(H.eras || {}).forEach(eid => {
    const era = H.eras[eid];
    (era.nodes || []).forEach(n => {
      if (!n || !n.id || !n.name) return;
      if (!authored.has(n.id) || !exists(D + 'chapters/' + n.id + '.js')) return;
      const hon = n.hon ? ' ' + n.hon : '';
      add('story', EIC[eid], L(n.name, 'ar') + (eid === 'prophets' ? hon : ''), L(n.name, 'en'),
        [L(n.hook, 'ar'), L(era.title, 'ar')].filter(Boolean).join(' · '), [L(n.hook, 'en'), L(era.title, 'en')].filter(Boolean).join(' · '),
        'corners/heroes-fortress/chapter.html?id=' + n.id);
    });
  });
});

/* 7 ── Quran stories + the houses of «حيّنا الصغير» (social.html#slug) */
guard('quran stories', () => {
  const ctx = sandbox(); load(ctx, 'corners/little-district/pages/qstories-data/_index.js');
  (ctx.QS_INDEX || []).forEach(s => add('story', s.emoji, s.nameAr, s.nameEn, [s.metaAr, s.surahAr, 'قصص القرآن'].filter(Boolean).join(' · '),
    [s.metaEn, s.surahEn, 'Quran Stories'].filter(Boolean).join(' · '), 'corners/little-district/pages/quran-stories.html'));
});
guard('houses', () => {
  const ctx = sandbox(); load(ctx, 'corners/little-district/pages/data/_index.js');
  (ctx.HOUSE_INDEX || []).forEach(h => {
    if (!exists('corners/little-district/pages/data/' + h.slug + '.js')) return;
    add('house', h.cat === 'adab' ? '🤝' : '🏠', h.nameAr, h.nameEn, (h.shortAr || '') + ' · ' + (h.cat === 'adab' ? 'آداب' : 'أخلاق') + ' · حيّنا الصغير',
      (h.shortEn || '') + ' · ' + (h.cat === 'adab' ? 'Manners' : 'Character') + ' · Our Little District', 'corners/little-district/pages/social.html#' + h.slug);
  });
});

/* 8 ── Anos's journey chapters + weekly quests */
guard('anos story', () => {
  const ctx = sandbox(); load(ctx, 'corners/shared/journey-story.js');
  (ctx.MK_STORY || []).forEach(c => add('story', c.icon, L(c.title, 'ar'), L(c.title, 'en'),
    L(c.land, 'ar') + ' · رحلة أنوس — الفصل ' + (c.lvl + 1), L(c.land, 'en') + ' · Anos’s Journey — chapter ' + (c.lvl + 1), 'corners/shared/journey.html'));
});
guard('quests', () => {
  const ctx = sandbox(); load(ctx, 'corners/shared/week-quests.js');
  (ctx.MK_QUESTS || []).forEach(q => add('quest', q.icon, L(q.title, 'ar'), L(q.title, 'en'),
    'مهمّة الأسبوع · ' + L(q.family, 'ar'), 'Weekly quest · ' + L(q.family, 'en'), 'corners/shared/my-day.html'));
});

/* 9 ── Skills Maker journeys (corners/skills/data) */
guard('skills', () => {
  ls('corners/skills/data').filter(f => /\.js$/.test(f)).forEach(f => {
    const id = f.replace(/\.js$/, ''), page = 'corners/skills/' + id + '.html';
    if (!exists(page)) return;
    const ctx = sandbox(); load(ctx, 'corners/skills/data/' + f);
    const S = ctx.SKILLS && ctx.SKILLS[id];
    if (S) { add('skill', S.icon || '🛠️', L(S.title, 'ar'), L(S.title, 'en'), L(S.intro, 'ar'), L(S.intro, 'en'), page); return; }
    const key = Object.keys(ctx).find(k => /_SERIES$/.test(k)), V = key && ctx[key];
    if (V && V.title) {
      add('skill', '🎧', V.title, V.titleEn || '', 'مسلسل صوتيّ · صانع المهارات', 'Audio series (in Arabic) · Skills Maker', page);
      (V.seasons || []).forEach(s => s && s.title && add('skill', '🎧', s.title, '', plain(V.title), '', page));
    }
  });
});

/* 10 ── main pages (title read from the page's own <title> when it is «عربي | English») */
guard('pages', () => {
  const PAGES = [
    ['index.html', '🏙️', 'المدينة — الصفحة الرئيسية', 'The City — home page', 'خريطة المدينة وكلّ الأركان', 'The city map and every corner'],
    ['corners/shared/my-day.html', '☀️', 'يومي', 'My Day', 'مهامّ اليوم ومهمّة الأسبوع', 'Today’s little tasks and the weekly quest'],
    ['corners/shared/garden.html', '🌴', 'بستان الذكر', 'My Dhikr Garden', 'قل الذكر واغرس نخلة', 'Say the dhikr and plant a palm tree'],
    ['corners/shared/journey.html', '🧭', 'رحلتي مع أنوس', 'My Journey with Anos', 'قصّة الرحلة والمستويات وجواز السفر', 'The journey story, levels and passport'],
    ['corners/shared/bag.html', '🎒', 'حقيبتي', 'My Bag', 'نجومي وشاراتي وتقدّمي في كلّ ركن', 'My stars, badges and progress in every corner'],
    ['corners/shared/report.html', '📊', 'تقرير الأسبوع', 'Weekly Report', 'تقرير للأهل عن أسبوع الطفل', 'A report for parents on the child’s week'],
    ['corners/little-district/pages/parents.html', '👨‍👩‍👧', 'ركن الأهل', 'Parents’ Corner', 'خطط وكتب وبرامج ومطبوعات للأهل', 'Plans, books, programmes and printables for parents'],
    ['parents-guide/index.html', '📘', 'دليل الأهل الشامل', 'The Complete Parents’ Guide', 'أصول التربية، مراحل العمر، المشكلات وحلولها', 'Foundations of tarbiyah, ages and stages, problems and solutions'],
    ['corners/news/index.html', '📰', 'نشرة الأسبوع', 'Weekly News', 'أخبار وجديد المدينة', 'What’s new in the city'],
    ['corners/competitions/competitions.html', '🏆', 'ساحة المسابقات', 'Competitions Arena', 'مسابقات وألغاز و«من أنا؟»', 'Quizzes, puzzles and “Who am I?”'],
    ['corners/activities/dashboard.html', '🧩', 'أنشطة أنوس', 'Anos’ Activities', '١٠٤ نشاطًا وألعابًا تعليمية', '104 learning games and activities'],
    ['corners/stories/little.html', '📚', 'مكتبة القصص للصغار', 'Little Stories Library', 'حكايات قصيرة من ٣ إلى ٦ سنوات', 'Short tales for ages 3–6'],
    ['corners/heroes-fortress/stories.html', '🌟', 'قصص الأنبياء', 'Stories of the Prophets', 'حصن الأبطال', 'Heroes’ Fortress'],
    ['corners/heroes-fortress/era.html?era=seerah', '🌙', 'السيرة النبوية', 'The Seerah', 'حصن الأبطال', 'Heroes’ Fortress'],
    ['corners/heroes-fortress/era.html?era=heroes', '🏰', 'أبطال الإسلام', 'Heroes of Islam', 'صحابة وتابعون وقادة وعلماء', 'Companions, successors, leaders and scholars'],
    ['corners/heroes-fortress/era.html?era=battles', '⚔️', 'أيام الإسلام الخالدة', 'The Great Days of Islam', 'غزوات ومعارك وفتوحات', 'Battles and openings'],
    ['corners/little-district/pages/quran-surahs.html', '📖', 'سور القرآن — قراءة وتدبّر', 'Quran Surahs — read and reflect', 'بستان القرآن', 'Quran Garden'],
    ['corners/little-district/pages/quran-stories.html', '📖', 'قصص القرآن', 'Quran Stories', 'بستان القرآن', 'Quran Garden'],
    ['corners/little-district/pages/quran-tests.html', '🎯', 'اختبارات بستان القرآن', 'Quran Garden Tests', 'اختبر ما تعلّمت', 'Test what you learned'],
    ['corners/little-district/pages/quran-companions.html', '🤝', 'أنا صاحبك القرآن', 'I Am Your Companion, the Quran', 'بستان القرآن', 'Quran Garden'],
    ['corners/quran-hifz/index.html', '🌱', 'حُفّاظ القرآن', 'Quran Huffaz', 'حفظ ومراجعة وتسميع', 'Memorise, review and recite'],
    ['corners/little-district/pages/hadith.html', '🕌', 'الأربعون النووية', 'The Forty Hadith', 'حُفّاظ السنة', 'Sunnah Keepers'],
    ['corners/little-district/pages/hasanat.html', '🧮', 'حاسبة الحسنات اليومية', 'Daily Hasanat Calculator', 'ركن الأهل', 'Parents’ Corner'],
    ['corners/quds-ummah/andalus.html', '🏛️', 'رحلة الأندلس', 'The Andalus Journey', 'ركن القدس والأمة', 'Al-Quds & Ummah'],
    ['corners/shared/store.html', '📚', 'المكتبة المجانية', 'Free Library', 'كتب وملفات مجانية', 'Free books and files'],
    ['corners/shared/downloads.html', '⬇️', 'ركن التنزيلات', 'Downloads', 'مطبوعات وأوراق عمل', 'Printables and worksheets'],
    ['corners/shared/community.html', '👪', 'مجتمع العائلات', 'Family Community', 'تواصل العائلات', 'Where families meet'],
    ['corners/shared/account.html', '👤', 'حساب العائلة', 'Family Account', 'الحساب والنسخ الاحتياطي', 'Account and cloud backup'],
    ['corners/shared/login.html', '🧒', 'من يلعب اليوم؟', 'Who’s Playing?', 'اختيار الطفل', 'Choose the child'],
    ['corners/shared/support.html', '💛', 'ادعمنا', 'Support Us', '', ''],
    ['privacy.html', '🔒', 'سياسة الخصوصية', 'Privacy Policy', '', ''],
    ['رحلة أحب الله.html', '❤️', 'رحلة أُحبُّ الله', 'The “I Love Allah” journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة أحب الرسول.html', '💚', 'رحلة أُحبُّ رسولَ الله ﷺ', 'The “I Love the Messenger ﷺ” journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة أحب الصلاة.html', '🕌', 'رحلة أُحبُّ الصلاة', 'The “I Love Salah” journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة الأخلاق والآداب.html', '🌟', 'رحلة الأخلاق والآداب', 'The Character & Manners journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة الأذكار والدعاء.html', '📿', 'رحلة الأذكار والدعاء', 'The Adhkar & Dua journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة القائد الصغير.html', '🚩', 'رحلة القائد الصغير', 'The Little Leader journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة القدوات.html', '⭐', 'رحلة القدوات', 'The Role Models journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة حافظ الدين.html', '📖', 'رحلة حافظ الدين', 'The Guardian of the Deen journey', 'رحلة تربوية للأسرة', 'A family tarbiyah journey'],
    ['رحلة صلاح الدين الأيوبي.html', '🎬', 'رحلة صلاح الدين الأيوبي', 'The Salahuddin al-Ayyubi journey', 'قصّة محرّر القدس في حلقات', 'The story of the liberator of Al-Quds, in episodes']
  ];
  const JOURNEY = /^رحلة /;
  PAGES.forEach(p => {
    const file = p[0].split('?')[0];
    if (!exists(file)) { skipped.push('page: ' + p[2] + ' → ' + p[0]); return; }
    let ar = p[2], en = p[3];
    const m = /<title>([^<|]+)\|([^<—]+)/.exec(fs.readFileSync(R(file), 'utf8').slice(0, 4000));
    if (m && !p[0].includes('?') && /[؀-ۿ]/.test(m[1]) && !/[؀-ۿ]/.test(m[2]) && p[0].indexOf('corners/shared/') === 0) { ar = m[1].trim(); en = m[2].trim(); }
    add(JOURNEY.test(p[0]) ? 'journey' : 'page', p[1], ar, en, p[4], p[5], p[0]);
  });
});

/* ───────── write ───────── */
const head = '/* corners/shared/search-index.js — GENERATED by tools/search-index/build.js — do not edit by hand.\n' +
  '   Re-run:  node tools/search-index/build.js   (after adding stories, cards, activities or pages)\n' +
  '   ' + INDEX.length + ' entries · {t:title, d:description, u:path from site root, k:kind, ic:icon} */\n';
/* compact writer: unquoted keys; an empty `en` (Arabic-only item) is written as en:'' only inside t, and dropped from d */
const q = v => JSON.stringify(v);
const line = e => '{t:{ar:' + q(e.t.ar) + ',en:' + q(e.t.en) + '},d:{ar:' + q(e.d.ar) + (e.d.en ? ',en:' + q(e.d.en) : '') + '},u:' + q(e.u) + ',k:' + q(e.k) + ',ic:' + q(e.ic) + '}';
const body = 'window.MK_SEARCH = [\n' + INDEX.map(line).join(',\n') + '\n];\n';
fs.writeFileSync(OUT, head + body);

const counts = {};
INDEX.forEach(e => { counts[e.k] = (counts[e.k] || 0) + 1; });
console.log('search index → ' + path.relative(ROOT, OUT));
Object.keys(counts).sort((a, b) => counts[b] - counts[a]).forEach(k => console.log('  ' + (k + '          ').slice(0, 10) + counts[k]));
console.log('  total     ' + INDEX.length + '   ·   ' + (Buffer.byteLength(head + body) / 1024).toFixed(1) + ' KB');
if (skipped.length) { console.log('\nskipped (target file not found): ' + skipped.length); skipped.slice(0, 30).forEach(s => console.log('  - ' + s)); }
if (problems.length) { console.log('\nnotes while loading data: ' + problems.length); problems.slice(0, 40).forEach(s => console.log('  - ' + s)); }
