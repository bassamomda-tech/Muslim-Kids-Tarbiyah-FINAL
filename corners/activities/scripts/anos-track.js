/* ============================================================
   anos-track.js — سجلّ اللعب. Every activity page records that the child
   played it, so the Anos dashboard shows REAL progress (not sample numbers).
   Stored per child (anos_played, anos_days) and saved to the cloud with the
   rest of the child's progress by mk-system.js.
   ============================================================ */
(function () {
  if (window.__anosTrack) return; window.__anosTrack = true;
  try {
    var id = (location.pathname.split("/").pop() || "").replace(/\.html$/i, "");
    if (!id || /^(dashboard|play)$/.test(id)) return;
    var now = Date.now(), d = new Date();
    var day = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    var P = {}; try { P = JSON.parse(localStorage.getItem("anos_played") || "{}") || {}; } catch (e) {}
    P[id] = [(P[id] && P[id][0]) || now, now];
    localStorage.setItem("anos_played", JSON.stringify(P));
    var D = []; try { D = JSON.parse(localStorage.getItem("anos_days") || "[]") || []; } catch (e) {}
    if (D.indexOf(day) < 0) { D.push(day); localStorage.setItem("anos_days", JSON.stringify(D.slice(-120))); }
  } catch (e) {}
})();
