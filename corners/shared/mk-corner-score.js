/* ════════════════════════════════════════════════════════════════
   mk-corner-score.js — Final-score header for any corner.
   Mirrors the "حينا الصغير" district score card, but generic:
   reads MK_J.cornerStats(corner) and injects a ring + bar header at
   the top of the corner page. Bilingual; refreshes on lang/focus.
   Usage: set  window.MK_CORNER = 'aqeeda'  (corner id) BEFORE this
   script, and load after mk-system.js + mk-journeys.js.
   Optional: window.MK_SCORE_ANCHOR = '#cssSelector' to choose where
   to insert (default: after first <header>, else top of <main>/<body>).
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (!window.MK_CORNER || !window.MK_J || !window.MK) return;
  var CID = window.MK_CORNER;
  var corner = MK.corner(CID) || { name: { ar: '', en: '' }, color: '#D4A017', icon: '🏅' };

  function lang() { return (window.MK && MK.lang && MK.lang()) || localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return lang() === 'ar'; }
  function nm() { return ar() ? corner.name.ar : corner.name.en; }

  /* path from this page to corners/activities/activities/ */
  function anousBase() {
    var p = location.pathname, i = p.indexOf('/corners/');
    if (i < 0) return 'corners/activities/activities/';
    var rest = p.slice(i + 1).split('/'); rest.pop();
    return new Array(rest.length + 1).join('../') + 'corners/activities/activities/';
  }
  /* curated 5 Anous activities per corner (themed) */
  var REWARDS = {
    aqeeda:  [['star-telescope.html','🔭','منظار النجوم','Star Telescope'],['creature-lab.html','🔬','مختبر المخلوقات','Creature Lab'],['rain-cycle.html','🌧️','دورة المطر','Rain Cycle'],['riddles.html','🧩','ألغاز الأذكياء','Riddles'],['smart-detective.html','🕵️','المحقّق الذكي','Smart Detective']],
    ibada:   [['wudu-order.html','🚿','ترتيب الوضوء','Wudu Order'],['prayer-tree.html','🌳','شجرة الصلاة','Prayer Tree'],['wheel-of-dhikr.html','☸️','عجلة الذِّكر','Wheel of Dhikr'],['pillars-hero.html','🕋','بطل الأركان','Pillars Hero'],['traveler-bag.html','🎒','حقيبة المسافر','Traveler Bag']],
    quran:   [['ayah-color.html','🎨','تلوين الآيات','Ayah Color'],['catch-madd.html','📏','اصطد المدّ','Catch the Madd'],['tashkeel-game.html','✏️','لعبة التشكيل','Tashkeel Game'],['word-trace.html','✒️','تتبّع الكلمة','Word Trace'],['smart-reciter.html','🎙️','القارئ الذكي','Smart Reciter']],
    sport:   [['landsea.html','🏊','برّ وبحر','Land & Sea'],['thirty-second.html','⏱️','تحدّي ٣٠ ثانية','30-Second'],['spot-differences.html','🔍','اكتشف الفروق','Spot Differences'],['islamic-sudoku.html','🔢','سودوكو','Sudoku'],['water-save.html','💧','وفّر الماء','Save Water']],
    academy: [['anagram.html','🔤','رتّب الحروف','Anagram'],['number-cipher.html','🔢','شيفرة الأرقام','Number Cipher'],['carpet-designer.html','🎨','مصمّم الزخارف','Pattern Designer'],['picture-crossword.html','🧩','كلمات متقاطعة','Crossword'],['word-search.html','🔎','بحث الكلمات','Word Search']],
    quds:    [['landmarks-puzzle.html','🕌','أحجية المعالم','Landmarks Puzzle'],['prophet-map.html','🗺️','خريطة الأنبياء','Prophets Map'],['hijri-timeline.html','📜','الخطّ الزمني','Hijri Timeline'],['who-am-i.html','❓','مَن أنا؟','Who Am I?'],['landsea.html','🌍','برّ وبحر','Land & Sea']],
    heart:   [['akhlaq-bag.html','🎒','حقيبة الأخلاق','Akhlaq Bag'],['good-bingo.html','🏅','بنغو الصالحات','Good Bingo'],['honesty-pledge.html','✍️','تعهّد الصدق','Honesty Pledge'],['what-if.html','🤔','ماذا لو؟','What If?'],['gratitude.html','💛','شجرة الشكر','Gratitude']],
    history: [['prophet-quiz.html','📜','اختبار الأنبياء','Prophet Quiz'],['who-am-i.html','❓','مَن أنا؟','Who Am I?'],['hijri-timeline.html','🕰️','الخطّ الزمني','Hijri Timeline'],['landmarks-puzzle.html','🏰','أحجية المعالم','Landmarks Puzzle'],['picture-crossword.html','🧩','كلمات متقاطعة','Crossword']],
    parents: [['paradise-post.html','💌','بريد الجنة','Paradise Post'],['build-mosque.html','🕌','ابنِ المسجد','Build the Mosque'],['family-tree.html','🌳','شجرة العائلة','Family Tree'],['nasheed-karaoke.html','🎤','كاريوكي الأناشيد','Nasheed Karaoke'],['puppet-theater.html','🎭','مسرح العرائس','Puppet Theater']],
  };

  function injectStyle() {
    if (document.getElementById('mkcs-css')) return;
    var s = document.createElement('style'); s.id = 'mkcs-css';
    s.textContent =
      ".mkcs{max-width:1080px;margin:1.1rem auto .2rem;padding:0 1rem;font-family:'Tajawal','Nunito',sans-serif;position:relative;z-index:5}" +
      ".mkcs-card{background:linear-gradient(160deg,#ffffff,#fdf4dd);border:2px solid #F1D27E;border-radius:1.5rem;padding:1.15rem 1.3rem;box-shadow:0 12px 34px rgba(150,110,20,.16)}" +
      ".mkcs-top{display:flex;align-items:center;gap:1.15rem;flex-wrap:wrap}" +
      ".mkcs-ring{flex:0 0 auto;width:92px;height:92px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--rc,#D4A017) calc(var(--p,0)*1%),#efe6cf 0)}" +
      ".mkcs-ring b{width:70px;height:70px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:1.3rem;font-weight:900;color:var(--rc,#D4A017)}" +
      ".mkcs-meta{flex:1;min-width:220px}" +
      ".mkcs-meta h3{margin:0 0 .25rem;font-size:1.15rem;font-weight:900;color:#7a5a12}" +
      ".mkcs-sub{margin:0 0 .55rem;font-size:.9rem;color:#6b5a36;font-weight:600;line-height:1.6}" +
      ".mkcs-sub b{color:#3a2f12}" +
      ".mkcs-bar{height:10px;background:#efe6cf;border-radius:6px;overflow:hidden}" +
      ".mkcs-bar i{display:block;height:100%;border-radius:6px;transition:width .6s ease}" +
      ".mkcs-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.7rem}" +
      ".mkcs-chip{background:#fffaf0;border:1.5px solid #F1D27E;border-radius:1rem;padding:.25rem .7rem;font-size:.76rem;font-weight:800;color:#7a5a12}" +
      ".mkcs-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:.55rem;margin-top:.9rem}" +
      "@media(max-width:520px){.mkcs-stats{grid-template-columns:repeat(2,1fr)}}" +
      ".mkcs-stat{display:flex;flex-direction:column;align-items:center;gap:.18rem;background:#fffaf0;border:1.5px solid #F1D27E;border-radius:1rem;padding:.7rem .3rem}" +
      ".mkcs-stat .mkcs-st-ic{font-size:1.4rem}" +
      ".mkcs-stat .mkcs-st-v{font-weight:900;font-size:1.3rem;color:#9a7414}" +
      ".mkcs-stat .mkcs-st-v small{font-size:.74rem;font-weight:800;color:#b79a55}" +
      ".mkcs-stat .mkcs-st-l{font-size:.72rem;font-weight:800;color:#7a5a12;text-align:center}" +
      ".mkcs-rw-head{display:flex;align-items:center;justify-content:space-between;gap:.6rem;margin:1rem 0 .5rem;font-weight:900;color:#7a5a12;font-size:.98rem;flex-wrap:wrap}" +
      ".mkcs-status{font-size:.76rem;font-weight:800;padding:.22rem .7rem;border-radius:1rem}" +
      ".mkcs-status.on{background:rgba(46,158,91,.16);color:#1f7a44}" +
      ".mkcs-status.off{background:rgba(212,160,23,.16);color:#9a7414}" +
      ".mkcs-rewards{display:grid;grid-template-columns:repeat(5,1fr);gap:.55rem}" +
      "@media(max-width:640px){.mkcs-rewards{grid-template-columns:repeat(3,1fr)}}" +
      "@media(max-width:420px){.mkcs-rewards{grid-template-columns:repeat(2,1fr)}}" +
      ".mkcs-rw{display:flex;flex-direction:column;align-items:center;gap:.3rem;text-align:center;text-decoration:none;background:#fffaf0;border:1.5px solid #F1D27E;border-radius:1rem;padding:.7rem .4rem;color:#5a4a22}" +
      ".mkcs-rw:not(.lock):hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(150,110,20,.18)}" +
      ".mkcs-rw .mkcs-rw-ic{font-size:1.7rem}" +
      ".mkcs-rw .mkcs-rw-t{font-size:.72rem;font-weight:800;line-height:1.3}" +
      ".mkcs-rw.lock{opacity:.55;border-style:dashed;background:#f6efe0;cursor:default}";
    (document.head || document.documentElement).appendChild(s);
  }

  function host() {
    var h = document.getElementById('mkCornerScore');
    if (h) return h;
    h = document.createElement('section');
    h.id = 'mkCornerScore'; h.className = 'mkcs'; h.setAttribute('aria-live', 'polite');
    // The "تعلّم مع أنوس" learn card was removed (owner request), so the score
    // card is now placed once, VISIBLE, at its anchor — no hide/reveal/reanchor,
    // which is what used to make it blink on corner entry.
    var anchor = window.MK_SCORE_ANCHOR && document.querySelector(window.MK_SCORE_ANCHOR);
    if (anchor) { anchor.parentNode.insertBefore(h, anchor.nextSibling); return h; }
    var hdr = document.querySelector('header');
    if (hdr && hdr.parentNode) { hdr.parentNode.insertBefore(h, hdr.nextSibling); return h; }
    var main = document.querySelector('main');
    if (main) { main.insertBefore(h, main.firstChild); return h; }
    document.body.insertBefore(h, document.body.firstChild);
    return h;
  }
  /* If the learn card appears AFTER our score card was already placed, move the
     score card to sit just below it (covers async injection-order races). */
  /* locate the "تعلّم مع أنوس" card by any of its known markers across corner types */
  function findLearnCard() {
    return document.getElementById('mkqLearnCard')
        || document.getElementById('learnCard')
        || document.querySelector('.learn-anous');
  }
  function reanchorBelowLearn() {
    var h = document.getElementById('mkCornerScore');
    var learn = findLearnCard();
    if (h && learn && learn.parentNode && h.previousElementSibling !== learn) {
      learn.parentNode.insertBefore(h, learn.nextSibling);
    }
    if (h) h.style.visibility = '';   // reveal once final position is settled
  }

  /* era-mode: progress from challenge halls (hisn-acts-<era>) for story corners */
  var ERAS = window.MK_SCORE_ERAS || (window.MK_SCORE_ERA ? [window.MK_SCORE_ERA] : null);
  function eraStats() {
    var done = 0, total = 0, halls = 0, fullHalls = 0;
    ERAS.forEach(function (e) {
      var pack = window.HISN && HISN.activities && HISN.activities[e];
      if (!pack || !pack.list) return;
      var t = pack.list.length * 3, d = 0;
      try { var o = JSON.parse(localStorage.getItem('hisn-acts-' + e) || '{}'); for (var k in o) if (o[k]) d++; } catch (x) {}
      done += Math.min(d, t); total += t; halls++; if (d >= t) fullHalls++;
    });
    return { done: done, total: total, pct: total ? Math.round(done / total * 100) : 0, journeysDone: fullHalls, count: halls, era: true };
  }

  function render() {
    var s = ERAS ? eraStats() : MK_J.cornerStats(CID);
    if (!s || s.total === 0) return;            // nothing trackable yet
    // Owner-defined fixed station counts (display scaled to keep %): academy 72→720, aqeeda 130→1300.
    var FIXED = { academy: 72, aqeeda: 130 };
    if (FIXED[CID]) { var fp = s.total ? s.done / s.total : 0, ft = FIXED[CID]; s = { done: Math.round(fp * ft), total: ft, pct: Math.round(fp * 100), journeysDone: s.journeysDone || 0, count: s.count || 5, started: s.started || 0 }; }
    var h = host();
    var rc = s.pct >= 75 ? '#2E9E5B' : (corner.color || '#D4A017');
    var title = ar() ? ('🏆 درجتُك في ' + nm()) : ('🏆 Your score in ' + nm());
    var A = ar();
    // Unit labels differ for era (challenge-hall) corners vs station corners.
    var jUnit = A ? (s.era ? 'الساحات' : 'الرحلات') : (s.era ? 'Halls' : 'Journeys');
    var stUnit = A ? (s.era ? 'التحدّيات' : 'المحطات') : (s.era ? 'Challenges' : 'Stations');
    // Universal stats — every number shown as X / Y total.
    var jDone = s.journeysDone || 0, jCount = s.count || 0;
    // Real earned medals override: each chapter/station grants one medal (Progress).
    var medalDone = jDone, medalTot = jCount;
    if (window.Progress && window.HISN && (CID === 'heart' || ERAS)) {
      try {
        var isH = HISN.isHeartMedal || function (m) { return m.era === 'heart'; };
        if (CID === 'heart') {
          medalDone = Progress.medals().filter(isH).length;
          medalTot = (HISN.heartChapterIds && HISN.heartChapterIds.length) || medalDone;
        } else {
          // history corner: medals are all non-heart; total = chapters across this corner's eras
          medalDone = Progress.medals().filter(function (m) { return !isH(m); }).length;
          var tot = 0;
          (ERAS || []).forEach(function (e) {
            var era = HISN.eras && HISN.eras[e]; if (!era) return;
            var nodes = era.nodes || [];
            if ((!nodes || !nodes.length) && era.categories)
              nodes = era.categories.reduce(function (a, c) { return a.concat(c.heroes || []); }, []);
            tot += nodes.length;
          });
          medalTot = tot || medalDone;
        }
      } catch (e) {}
    }
    // Stations row: era corners show CHAPTER (station) completion, not challenges.
    var stDoneV = s.done, stTotV = s.total, stLbl = stUnit;
    if (ERAS && window.Progress && window.HISN && CID !== 'heart') {
      stDoneV = medalDone; stTotV = medalTot;          // completed chapters / total chapters
      stLbl = A ? 'المحطات' : 'Stations';
    }
    var stats = [
      ['📜', A ? 'الشهادات' : 'Certificates', jDone, jCount],
      ['🏅', A ? 'الأوسمة' : 'Medals', medalDone, medalTot],
      ['📍', stLbl, stDoneV, stTotV],
      ['🧭', jUnit, jDone, jCount]
    ];
    var statHtml = stats.map(function (c) {
      return '<div class="mkcs-stat"><span class="mkcs-st-ic">' + c[0] + '</span>' +
        '<span class="mkcs-st-v">' + c[2] + '<small>/' + c[3] + '</small></span>' +
        '<span class="mkcs-st-l">' + c[1] + '</span></div>';
    }).join('');
    // Persist a snapshot so the bag + parents dashboard can show the SAME numbers
    // off-page (single source of truth = this card).
    try {
      var snap = JSON.parse(localStorage.getItem('mk:cornerCard') || '{}');
      snap[CID] = { pct: s.pct, cert: [jDone, jCount], medal: [medalDone, medalTot],
        station: [stDoneV, stTotV], journey: [jDone, jCount], ts: Date.now() };
      localStorage.setItem('mk:cornerCard', JSON.stringify(snap));
    } catch (e) {}
    var rewardHtml = renderRewards(s.pct);
    h.innerHTML =
      '<div class="mkcs-card">' +
        '<div class="mkcs-top">' +
          '<div class="mkcs-ring" style="--p:' + s.pct + ';--rc:' + rc + '"><b>' + s.pct + '%</b></div>' +
          '<div class="mkcs-meta">' +
            '<h3>' + title + '</h3>' +
            '<p class="mkcs-sub">' + (A ? 'نسبةُ إنجازِك في هذا الركن من الاختبارات والتحدّيات' : 'Your completion in this corner from tests and challenges') + '</p>' +
            '<div class="mkcs-bar"><i style="width:' + s.pct + '%;background:' + rc + '"></i></div>' +
          '</div>' +
        '</div>' +
        '<div class="mkcs-stats">' + statHtml + '</div>' +
        rewardHtml +
      '</div>';
  }

  function renderRewards(pct) {
    var set = REWARDS[CID]; if (!set) return '';
    var A = ar(), L = lang(), bse = anousBase();
    // Anous rewards open ONLY after the corner's TESTS are passed (≥75%), which
    // quiz-engine records in mkUnlocked[CID]. Never auto-unlock by station progress.
    var unlocked = false;
    try {
      var u = JSON.parse(localStorage.getItem('mkUnlocked') || '{}');
      if (u[CID]) {
        // self-heal: an unlock is valid only if the corner actually has a recorded
        // test score (mkQuiz). Stale unlocks with no score get dropped → stays locked.
        var q = {}; try { q = JSON.parse(localStorage.getItem('mkQuiz') || '{}'); } catch (e2) {}
        if (q[CID]) { unlocked = true; }
        else { delete u[CID]; try { localStorage.setItem('mkUnlocked', JSON.stringify(u)); } catch (e3) {} }
      }
    } catch (e) {}
    var cells = set.map(function (r) {
      var label = '<span class="mkcs-rw-t">' + (A ? r[2] : r[3]) + '</span>';
      if (unlocked) return '<a class="mkcs-rw" href="' + bse + r[0] + '?lang=' + L + '"><span class="mkcs-rw-ic">' + r[1] + '</span>' + label + '</a>';
      return '<div class="mkcs-rw lock"><span class="mkcs-rw-ic">🔒</span>' + label + '</div>';
    }).join('');
    var status = unlocked
      ? '<span class="mkcs-status on">' + (A ? 'مفتوحة ✓' : 'Unlocked ✓') + '</span>'
      : '<span class="mkcs-status off">' + (A ? 'تحتاج ٧٥٪ في الاختبارات' : 'Pass tests (75%)') + '</span>';
    return '<div class="mkcs-rw-head"><span>' + (A ? '🎁 ٥ أنشطة من ركن أنوس' : '🎁 5 Anous activities') + '</span>' + status + '</div>' +
           '<div class="mkcs-rewards">' + cells + '</div>';
  }

  function boot() {
    injectStyle();
    render();
    // (learn card removed → no reanchor/reveal timers; card is already visible)
    // era-mode: deferred activity data may arrive after DOMContentLoaded — poll briefly
    if (ERAS) { var tries = 0; var iv = setInterval(function () { tries++; render(); if (document.getElementById('mkCornerScore') || tries > 12) clearInterval(iv); }, 250); }
    window.addEventListener('focus', render);
    // quiz-engine revokes/grants the Anous unlock asynchronously → re-render rewards
    window.addEventListener('mk-unlocks-changed', render);
    // re-render when language toggles (covers most corner toggles)
    document.querySelectorAll('.lang button, .hd-lang button, .q-lang button, [data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(render, 80); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
