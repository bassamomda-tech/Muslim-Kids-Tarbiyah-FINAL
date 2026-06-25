// data/index.js — light registry shared by every page.
// Each era file registers itself into HISN.eras[id]; chapters into HISN.chapters[id].
// Keeping this file tiny means adding/removing an era is a one-line change.
window.HISN = window.HISN || {};
HISN.eras = HISN.eras || {};
HISN.chapters = HISN.chapters || {};

// Order eras appear in the hub (and the chronology). Add an id here + a data/<id>.js file.
// NOTE: 'creativity' is intentionally NOT here — it is a SEPARATE corner of the
// city (أكاديمية المبدعين), reached via its own academy.html, not a History-Corner
// gateway. Its era data still loads so academy.html can render it.
HISN.order = ['prophets', 'seerah', 'heroes', 'battles'];

// Authored station lessons. When you create data/chapters/<id>.js, add its id here —
// the era map then links that station to its chapter (others show "coming soon").
HISN.authored = ['adam', 'idris', 'nuh', 'hud', 'salih', 'ibrahim', 'ismail', 'lut', 'ishaq', 'yaqub', 'yusuf', 'shuayb', 'ayyub', 'dhulkifl', 'musa', 'harun', 'dawud', 'sulayman', 'ilyas', 'alyasa', 'yunus', 'zakariyya', 'yahya', 'isa',
  // Pure Heart · "Love of Allah" — the Beautiful Names & Attributes series (الأسماء والصفات)
  'rahman', 'khaliq', 'razzaq', 'alim', 'qadir', 'sami_basir',
  'wahhab', 'ghafur', 'afuww', 'wadud', 'halim', 'latif',
  'hafiz', 'salam', 'shakur', 'mujib', 'azim', 'hadi', 'hakim', 'silat_rahim',
  // Pure Heart · "Honoring Parents" (برّ الوالدين) — storytelling lessons
  'birr_rank', 'birr_stories', 'birr_uquq',
  // Pure Heart · "Love for Allah's sake" (الحبّ في الله) — loyalty & disavowal
  'hubb_fillah', 'sahib_salih', 'wala_bara',
  // Pure Heart · "Soundness of the Heart" (سلامةُ القلب) — tranquil & pure heart
  'qalb_mutmainn', 'qalb_safi', 'amrad_qulub',
  // Seerah · "Getting to know the Prophet ﷺ" aspect lessons
  'whoami', 'khasais', 'shamail', 'dalail', 'khuluq_nas', 'khuluq_khalq', 'khuluq_rabb', 'manzuma',
  // Seerah · the chronological event stations (birth → farewell)
  'birth', 'childhood', 'alameen', 'cave', 'revelation', 'dawah', 'public', 'habasha', 'boycott', 'amalhuzn', 'israa', 'aqaba', 'hijrah', 'masjid', 'badr', 'uhud', 'ahzab', 'ridwan', 'hudaybiyah', 'fath', 'farewell',
  // Heroes · Companions (full chapters with multi-story Story tab)
  'abubakr', 'umar', 'uthman', 'ali', 'hamza', 'khalid', 'bilal', 'musab', 'salman', 'abuhurayra', 'saadwaqqas', 'ibnmasud', 'zubayr', 'abuubayda', 'muadh', 'anas', 'ibnabbas', 'talha', 'awf', 'saidzayd', 'saadmuadh', 'abudharr', 'bara', 'abudarda', 'zaydharitha', 'usama', 'hudhayfa', 'zaydthabit', 'amribnas', 'ubayy', 'qaqa', 'talha_asadi', 'ala_hadrami', 'khadija', 'aisha', 'fatima', 'ummsalama', 'nusayba', 'sumayya', 'uways', 'hasanbasri', 'ibnsirin', 'saidjubayr', 'umar2', 'tawus', 'zaynabidin', 'khawlani', 'harunrashid', 'mehmed', 'suleiman', 'tariq', 'dakhil', 'nasir', 'tashfin', 'ibnqasim', 'qutayba', 'ghafiqi', 'salahuddin', 'qutuz', 'baybars', 'nizam', 'alparslan', 'ibnyasin', 'abuhanifa', 'malik', 'shafii', 'ahmad', 'bukhari', 'muslim', 'nasai', 'abudawud', 'tirmidhi', 'ibnmajah', 'tabari', 'ibnkathir', 'saadi', 'dhahabi', 'nawawi', 'ibntaymiyya', 'ibnqayyim', 'albani', 'ibnhaytham', 'khwarizmi', 'ibnsina', 'biruni', 'ibnkhaldun', 'razi', 'ibnnafis', 'ibnbaytar', 'jabir', 'firnas', 'zahrawi', 'khayyam',
  // Heroes · Immortal Days (major battles)
  'badrbattle', 'yarmouk', 'qadisiyyah', 'nahawand', 'balat', 'malazikird', 'hattin', 'aynjalut', 'constantinople',
  'dhatalsawari', 'wadilakka', 'sind', 'transoxania', 'amuriya', 'zallaqa', 'nikopolis', 'mohacs', 'preveza',
  // Academy · Explorers' Journey additions
  'idrisi', 'battuta'];

// Prophets are all presented in the unified chapter design (Knowledge · Story ·
// Lessons · Memorize · Activities · Treasures). When a prophet also has a
// data/stories/<id>.js set, the chapter's Story tab shows every story as a
// journey stop (see engine/chapter.js → episodes()). storySets is now empty so
// no station is routed to the separate stories.html grid.
// storySets is empty: every prophet opens its chapter "house" (chapter.html).
// The chapter's Story room itself opens each story in a popping reader modal.
HISN.storySets = [];

// Chapters that ship a rich multi-story set at data/stories/<id>.js. The chapter
// page only loads the story file when the id is listed here — so chapters without
// one (e.g. the Seerah stations) don't trigger a 404 probe.
HISN.hasStories = ["birth","childhood","alameen","cave","badrbattle","yarmouk","qadisiyyah","nahawand","balat","malazikird","hattin","aynjalut","constantinople","dhatalsawari","wadilakka","sind","transoxania","amuriya","zallaqa","nikopolis","mohacs","preveza","abubakr","abudarda","abudawud","abudharr","abuhanifa","abuhurayra","abuubayda","adam","ahmad","aisha","ala_hadrami","albani","ali","alparslan","amribnas","anas","awf","bara","baybars","bilal","biruni","bukhari","dakhil","dhahabi","fatima","ghafiqi","hamza","harunrashid","hasanbasri","hud","hudhayfa","ibnabbas","ibnbaytar","ibnhaytham","ibnkathir","ibnkhaldun","ibnmajah","ibnmasud","ibnnafis","ibnqasim","ibnqayyim","ibnsina","ibnsirin","ibntaymiyya","ibnyasin","ibrahim","isa","jabir","khadija","khalid","khawlani","khwarizmi","malik","mehmed","muadh","musa","musab","muslim","nasai","nasir","nawawi","nizam","nuh","nusayba","qaqa","qutayba","qutuz","razi","saadmuadh","saadwaqqas","saidjubayr","saidzayd","salahuddin","salman","shafii","sulayman","suleiman","sumayya","tabari","talha","talha_asadi","tariq","tashfin","tawus","tirmidhi","ubayy","umar","umar2","ummsalama","usama","uthman","uways","yunus","yusuf","zaydharitha","zaydthabit","zaynabidin","zubayr"];

// Single hero guide that walks the whole corner.
HISN.guide = {
  name: { ar: 'مُحَمَّد', en: 'Muhammad' },
  role: { ar: 'رفيقُ الرحلة', en: 'Your journey companion' },
  lines: [
    { ar: 'أهلاً يا بطل! اختَر مرحلةً وابدأِ الصعود.', en: 'Welcome, hero! Pick an era and start the climb.' },
    { ar: 'كلُّ محطّةٍ قصةٌ ودرسٌ وكنز.', en: 'Every station is a story, a lesson, and a treasure.' },
    { ar: 'أكملِ المحطّةَ المضيئةَ لتفتحَ ما بعدها.', en: 'Finish the glowing station to unlock the next.' },
    { ar: 'اجمعْ أوسمةَ الأبطالِ في القاعة!', en: 'Collect the hero medals in the Hall!' },
  ],
};

// Helper: ordered era objects (only those whose data file has loaded).
HISN.eraList = () => HISN.order.map(id => HISN.eras[id]).filter(Boolean);
