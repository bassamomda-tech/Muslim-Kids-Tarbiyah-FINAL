/* ============================================================
   anos-track.js — سجلّ اللعب (Anos activities: what the child really did)
   • anos_played  {id:[first,last]}        an activity was OPENED (for "keep playing")
   • anos_done    {id:[first,last,times]}  an activity was FINISHED — this is what earns
                                           stars in the bag, section medals and the streak
   • anos_days    ["YYYY-MM-DD",…]         days with at least one finished activity
   • anos_medals  [{id,ar,en}]             sections whose activities are all finished
   • anos_weekly  ["YYYY-MM-DD",…]         weeks (Monday) in which the «المثابر الصغير»
                                           badge was earned (4 finished activities in a week)
   A finish is reported by activity-common.js when the activity's own "well done" window
   opens (win / done / end … modal). Free-play activities with no ending count as
   finished after ~90 s of real play. Stored per child and synced by mk-system.js.
   ============================================================ */
(function () {
  if (window.AnosTrack) return;
  var LS = window.localStorage;
  function jget(k, d) { try { var v = JSON.parse(LS.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function jset(k, v) { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function dayKey(x) { return x.getFullYear() + "-" + ("0" + (x.getMonth() + 1)).slice(-2) + "-" + ("0" + x.getDate()).slice(-2); }
  function weekKey(x) { var d = new Date(x); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return dayKey(d); }   // Monday of that week
  var WEEK_GOAL = 4;

  /* one-time: progress recorded before finishes were tracked is kept, so no child loses stars */
  if (!LS.getItem("anos_done_v1")) {
    var old = jget("anos_played", {}), D0 = jget("anos_done", {});
    Object.keys(old).forEach(function (k) { if (!D0[k]) D0[k] = [old[k][0], old[k][1], 1]; });
    jset("anos_done", D0); LS.setItem("anos_done_v1", "1");
  }

  function done() { return jget("anos_done", {}) || {}; }
  function finishedThisWeek(D) { var since = Date.now() - 7 * 864e5; return Object.keys(D || done()).filter(function (k) { return (D[k][1] || 0) >= since; }).length; }

  /* section medals need the activity list (activities-data.js); load it when it is not on the page */
  function withSections(cb) {
    if (window.SECTIONS) return cb(window.SECTIONS);
    var me = document.querySelector('script[src*="anos-track.js"]'), s = document.createElement("script");
    s.src = me ? me.src.replace(/anos-track\.js.*$/, "activities-data.js") : "../scripts/activities-data.js";
    s.onload = function () { if (window.SECTIONS) cb(window.SECTIONS); };
    (document.head || document.documentElement).appendChild(s);
  }
  function actId(a) { return (a.href || "").split("/").pop().replace(/\.html$/i, ""); }
  function medals(SECTIONS, D) {
    D = D || done();
    return SECTIONS.map(function (s) {
      var n = s.activities.filter(function (a) { return !!D[actId(a)]; }).length;
      return { s: s, n: n, got: n === s.activities.length };
    });
  }
  function saveMedals(SECTIONS) {
    var m = medals(SECTIONS).filter(function (x) { return x.got; }).map(function (x) { return { id: x.s.id, ar: x.s.title, en: x.s.titleEn || x.s.title }; });
    jset("anos_medals", m); return m;
  }

  var ID = (location.pathname.split("/").pop() || "").replace(/\.html$/i, "");
  var onActivity = /\/activities\/activities\//.test(location.pathname) && ID && !/^(dashboard|play)$/.test(ID);
  var finishedNow = false;

  function finish() {
    if (!onActivity || finishedNow) return; finishedNow = true;   // one finish per visit
    var now = Date.now(), D = done();
    D[ID] = [(D[ID] && D[ID][0]) || now, now, ((D[ID] && D[ID][2]) || 0) + 1];
    jset("anos_done", D);
    var days = jget("anos_days", []), today = dayKey(new Date());
    if (days.indexOf(today) < 0) { days.push(today); jset("anos_days", days.slice(-120)); }
    if (finishedThisWeek(D) >= WEEK_GOAL) {
      var W = jget("anos_weekly", []), wk = weekKey(new Date());
      if (W.indexOf(wk) < 0) { W.push(wk); jset("anos_weekly", W.slice(-60)); }
    }
    withSections(saveMedals);
  }

  window.AnosTrack = { finish: finish, done: done, medals: medals, saveMedals: saveMedals, finishedThisWeek: finishedThisWeek, weekGoal: WEEK_GOAL, actId: actId };

  if (!onActivity) return;
  try {   // opened (not yet finished)
    var P = jget("anos_played", {}), t = Date.now();
    P[ID] = [(P[ID] && P[ID][0]) || t, t]; jset("anos_played", P);
  } catch (e) {}
  if (window.__anosPendingFinish) finish();

  /* free-play activities have no "well done" window: ~90 s of real play (taps/keys while the page is visible) = finished */
  var FREE = { "build-mosque": 1, "carpet-designer": 1, "creature-lab": 1, "nasheed-karaoke": 1, "nasheed-studio": 1,
               "pattern-color": 1, "puppet-theater": 1, "soul-journey": 1, "wheel-of-dhikr": 1 };
  if (FREE[ID]) {
    var active = 0, taps = 0, lastTap = 0;
    var mark = function () { taps++; lastTap = Date.now(); };
    document.addEventListener("pointerdown", mark, true); document.addEventListener("keydown", mark, true);
    var iv = setInterval(function () {
      if (document.visibilityState === "visible" && Date.now() - lastTap < 20000) active += 5;   // counts only while the child is playing
      if (active >= 90 && taps >= 8) { clearInterval(iv); finish(); }
    }, 5000);
  }
})();
