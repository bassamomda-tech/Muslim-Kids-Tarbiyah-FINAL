/* story-pics.js — a drawn picture for every story page.
   Uses the free scene illustrator (book-scenes.js + its two element libraries, loaded only when a
   story is opened) to turn the page's own words into an original flat-vector scene.
   How the picture is kept faithful to the story:
     · the writer's emoji is the strongest hint (HINT maps it to things the illustrator can draw);
     · the story title sets the place; the page text adds detail with a lower weight;
     · era:'old' (prophets, Seerah, companions, hadith and Quran stories) never draws modern objects
       (telescope, football, classroom, lab …) and never draws people; era:'now' (a child's daily life)
       only drops the science-lab and sports objects that used to appear by accident.
   No faces, no people for sacred mentions — that rule also lives inside book-scenes.js.
   Usage:  MKStoryPic.get({ id, title, text, emoji, color, era }, function (svgOrNull) { … })          */
(function () {
  if (window.MKStoryPic) return;
  var me = document.currentScript, base = me ? me.src.replace(/story-pics\.js.*$/, '') : '';
  var state = 0, wait = [];
  /* emoji → names of elements/backdrops in the illustrator's library (expanded to its own keywords),
     plus plain words for weather and time of day */
  var HINT = {
    '🌳': 'tree garden', '🌴': 'palm oasis', '🌱': 'sprout garden', '🌾': 'wheat farm', '🍎': 'tree garden', '🌹': 'flowers garden', '🌸': 'flowers garden', '🌷': 'flowers garden', '🌺': 'flowers garden', '🌻': 'flowers garden', '🌿': 'plant garden', '🍃': 'tree garden', '🍂': 'tree garden',
    '🚢': 'ship sea', '⛵': 'ship sea', '🛶': 'boat river', '🚤': 'boat sea', '🌊': 'sea', '💧': 'drop', '💦': 'drop', '🌧️': 'مطر rain سحاب', '☁️': 'سحاب cloud', '⛈️': 'برق عاصفة storm مطر', '🌩️': 'برق عاصفة storm', '⚡': 'برق عاصفة storm', '🌪️': 'ريح wind desert', '🌬️': 'ريح wind desert', '🌈': 'قوس قزح rainbow', '❄️': 'mountains',
    '🏜️': 'desert', '⛰️': 'mountain mountains', '🏔️': 'mountain mountains', '🌋': 'mountain mountains', '🏝️': 'sea palm', '🕳️': 'well', '🪨': 'rock', '🗿': 'rock',
    '☀️': 'شمس sun نهار', '🌤️': 'شمس sun نهار', '⛅': 'شمس sun سحاب', '🌅': 'شروق sunrise desert', '🌇': 'غروب sunset city', '🌙': 'ليل night crescent', '🌑': 'ليل night', '🌗': 'ليل night crescent', '🌕': 'ليل night', '🌃': 'ليل night city', '⭐': 'نجوم stars ليل night', '🌟': 'نجوم stars ليل night', '✨': 'نجوم stars', '💫': 'نجوم stars ليل night', '🌌': 'space', '🌍': 'mountains river', '🌎': 'mountains river', '🌏': 'mountains river', '🪐': 'space',
    '🕋': 'kaaba haram', '🕌': 'mosque', '🏠': 'houses', '🏡': 'houses garden', '🏚️': 'houses city', '🏘️': 'houses city', '🏙️': 'city houses', '🏰': 'palace city', '🏛️': 'palace city', '⛺': 'tent desert', '🚪': 'door',
    '🐪': 'camel desert', '🐫': 'camel desert', '🐑': 'sheep farm', '🐏': 'sheep farm', '🐐': 'sheep farm', '🐄': 'cow farm', '🐎': 'horse', '🐴': 'horse', '🐦': 'bird', '🪶': 'bird', '🕊️': 'birds', '🦅': 'birds mountains', '🐋': 'whale sea', '🐳': 'whale sea', '🐟': 'fish sea', '🐠': 'fish sea', '🐜': 'ant', '🐝': 'bees hive', '🕷️': 'web cave', '🕸️': 'web cave', '🐕': 'dog', '🐈': 'cat', '🦋': 'butterfly garden', '🐘': 'elephant',
    '🔥': 'campfire', '🕯️': 'lantern', '🏮': 'lantern', '💡': 'lantern', '📖': 'mushaf', '📜': 'scroll', '✉️': 'scroll', '📨': 'scroll', '💌': 'scroll', '📚': 'book', '📗': 'book', '✍️': 'inkwell scroll', '🤲': 'duaHands', '🙌': 'duaHands', '📿': 'tasbih', '🧎': 'prayerRug mosqueIn', '🙇': 'prayerRug mosqueIn',
    '💰': 'coins', '🪙': 'coins', '💎': 'chest', '🍞': 'bread', '🍽️': 'table bread', '🍖': 'table bread', '🍯': 'honeyJar', '🥛': 'cup', '🍇': 'vine', '🌰': 'dates', '⚔️': 'swordShield', '🛡️': 'armor', '🏹': 'bow', '👑': 'palace', '🔑': 'key', '🎁': 'gift', '💝': 'gift', '🧺': 'basket', '🪣': 'well', '⚖️': 'scales', '⏳': 'hourglass',
    '❤️': 'heart', '💚': 'heart', '💛': 'heart', '💙': 'heart', '💜': 'heart', '💞': 'heart', '🤍': 'heart', '💖': 'heart', '🤝': 'handshake', '👣': 'footprints road', '🧭': 'map road', '🛏️': 'bed home', '😴': 'bed home', '🪢': 'rope', '⛓️': 'chain', '🏺': 'jug', '⛲': 'spring', '🚩': 'flag', '🪓': 'logs', '🧱': 'houses', '🔨': 'houses'
  };
  /* things that never belong in a story of long ago */
  var MODERN = 'telescope microscope flask gears dna cells dumbbell goal ball trophy medal screen rocket globe bulb magnifier clock desk schoolBag pencil toys kite balloons penguin bookshelf observatory lighthouse toothbrush soap comb umbrella medicine charityBox octopus fossil pyramids bd:classroom bd:lab bd:field bd:space bd:underwater';
  /* things that used to appear by accident in stories of a child's daily life */
  var ODD = 'bookshelf desk bd:classroom telescope microscope flask gears dna cells dumbbell goal trophy medal screen rocket magnifier observatory lighthouse penguin octopus fossil pyramids bd:lab bd:field';
  function set(list) { var o = {}; list.split(' ').forEach(function (k) { o[k] = 1; }); return o; }
  var BAN = { old: set(MODERN), now: set(ODD) };
  function load(src, cb) { var s = document.createElement('script'); s.src = base + src; s.onload = cb; s.onerror = function () { state = -1; flush(); }; document.head.appendChild(s); }
  function flush() { var w = wait; wait = []; w.forEach(function (f) { f(); }); }
  function ready(cb) {
    if (state === 2 || state === -1) return cb();
    wait.push(cb); if (state === 1) return; state = 1;
    load('book-scenes.js', function () { load('book-scenes-lib.js', function () { load('book-scenes-lib2.js', function () { if (state !== -1) state = 2; flush(); }); }); });
  }
  function plain(s) { return String(s || '').replace(/<[^>]+>/g, ' ').replace(/[\u064B-\u0652\u0670\u0640]/g, ''); }
  function terms(def) { return String(def && def.k || '').split('|').slice(0, 2).map(function (t) { return t.replace(/[!*]/g, ''); }).join(' '); }
  function hintFor(emoji) {
    var em = String(emoji || '').trim(), h = HINT[em] || HINT[em.replace(/\uFE0F/g, '')] || HINT[em + '\uFE0F'] || '', B = window.BookScenes;
    return h.split(' ').map(function (t) { return B.EL[t] ? terms(B.EL[t]) : B.BD[t] ? terms(B.BD[t]) : t; }).join(' ');
  }
  function get(ctx, cb) {
    ready(function () {
      var svg = null;
      try {
        if (state === 2 && window.BookScenes) {
          var old = ctx.era !== 'now';
          var r = BookScenes.render({ id: ctx.id, key: ctx.id, W: 720, acc: ctx.color || '#D4A017', noPeople: old, ban: BAN[old ? 'old' : 'now'], wt: { scene: 2 },
            texts: { id: hintFor(ctx.emoji), title: plain(ctx.title), scene: plain(ctx.text) } });
          svg = r && r.svg || null;
        }
      } catch (e) { svg = null; }
      cb(svg);
    });
  }
  window.MKStoryPic = { get: get, preload: function () { ready(function () {}); } };
})();
