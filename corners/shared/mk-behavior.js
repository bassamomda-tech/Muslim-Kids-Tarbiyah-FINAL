/* ════════════════════════════════════════════════════════════════
   mk-behavior.js — Parent-run Behaviour Points system.
   Parent awards a child stars for real-life commitments (Fajr prayer,
   honesty, …) drawn from each corner's goals, and the child redeems
   stars for rewards. Multi-child (reuses MK profiles). Parent-managed:
   data is keyed by profile id under one SYSTEM key (mk:bps), so it is
   independent of which child is "playing".
   Renders into #bpsBody. Window global: MKB.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var KEY = 'mk:bps';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function uid(p) { return (p || 'x') + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }
  function lang() { return (window.MK && MK.lang && MK.lang()) || localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return lang() === 'ar'; }
  function tx(o) { return o ? (ar() ? o.ar : o.en) : ''; }

  /* default behaviour catalogue — goals pulled from the corners */
  function defaultTasks() {
    return [
      { id: 't-fajr',    ar: 'صلاة الفجر',        en: 'Fajr prayer',         pts: 10, icon: '🌅', color: '#F47C7C', corner: 'ibada' },
      { id: 't-dhuhr',   ar: 'صلاة الظهر',        en: 'Dhuhr prayer',        pts: 2,  icon: '☀️', color: '#5BA8F5', corner: 'ibada' },
      { id: 't-asr',     ar: 'صلاة العصر',        en: 'Asr prayer',          pts: 2,  icon: '🌤️', color: '#4ECCA3', corner: 'ibada' },
      { id: 't-maghrib', ar: 'صلاة المغرب',       en: 'Maghrib prayer',      pts: 2,  icon: '🌇', color: '#A98BE0', corner: 'ibada' },
      { id: 't-isha',    ar: 'صلاة العشاء',       en: 'Isha prayer',         pts: 2,  icon: '🌙', color: '#F4A552', corner: 'ibada' },
      { id: 't-qiyam',   ar: 'قيام الليل',        en: 'Night prayer',        pts: 5,  icon: '✨', color: '#EE6FA0', corner: 'ibada' },
      { id: 't-adhkar',  ar: 'أذكار الصباح والمساء', en: 'Morning & evening adhkar', pts: 3, icon: '📿', color: '#46B6A8', corner: 'ibada' },
      { id: 't-quran',   ar: 'وِرد القرآن اليومي', en: 'Daily Quran reading', pts: 4,  icon: '📖', color: '#1A9B7B', corner: 'quran' },
      { id: 't-sidq',    ar: 'الالتزام بالصدق',   en: 'Being truthful',      pts: 5,  icon: '💎', color: '#3FA796', corner: 'social' },
      { id: 't-birr',    ar: 'برّ الوالدين',      en: 'Honoring parents',    pts: 5,  icon: '❤️', color: '#C0392B', corner: 'social' },
      { id: 't-help',    ar: 'مساعدة في البيت',   en: 'Helping at home',     pts: 2,  icon: '🧹', color: '#E67E22', corner: 'social' },
      { id: 't-akhlaq',  ar: 'حُسن الخلق مع الناس', en: 'Good manners',       pts: 3,  icon: '🤝', color: '#8E7CC3', corner: 'heart' },
    ];
  }
  function defaultRewards() {
    return [
      { id: 'r-video',  ar: '١٠ دقائق مشاهدة',  en: '10 min of videos', cost: 10,  icon: '📺' },
      { id: 'r-book',   ar: 'شراء كتاب',        en: 'Buy a book',       cost: 30,  icon: '📚' },
      { id: 'r-outing', ar: 'نزهة عائلية',      en: 'A family outing',  cost: 100, icon: '🎡' },
      { id: 'r-gift',   ar: 'هدية مميّزة',      en: 'A special gift',   cost: 150, icon: '🎁' },
    ];
  }

  function db() {
    var o = load();
    if (!o.tasks) o.tasks = defaultTasks();
    if (!o.rewards) o.rewards = defaultRewards();
    if (!o.child) o.child = {};
    return o;
  }
  function childRec(o, pid) {
    if (!o.child[pid]) o.child[pid] = { points: 0, done: {}, log: [] };
    return o.child[pid];
  }

  var SEL = null;   // selected child profile id (parent's working child)

  function profiles() { return (window.MK && MK.profiles && MK.profiles()) || []; }
  function ensureSel() {
    var ps = profiles();
    if (!ps.length) { SEL = null; return; }
    if (!SEL || !ps.some(function (p) { return p.id === SEL; })) {
      SEL = (MK.activeId && MK.activeId()) || ps[0].id;
      if (!ps.some(function (p) { return p.id === SEL; })) SEL = ps[0].id;
    }
  }

  /* award / remove a task for the selected child for today */
  function toggleTask(taskId) {
    var o = db(), c = childRec(o, SEL), t = today();
    var task = o.tasks.filter(function (x) { return x.id === taskId; })[0]; if (!task) return;
    c.done[t] = c.done[t] || {};
    if (c.done[t][taskId]) {
      delete c.done[t][taskId]; c.points = Math.max(0, c.points - task.pts);
      c.log.unshift({ ts: Date.now(), delta: -task.pts, label: { ar: task.ar, en: task.en }, kind: 'undo' });
    } else {
      c.done[t][taskId] = true; c.points += task.pts;
      c.log.unshift({ ts: Date.now(), delta: task.pts, label: { ar: task.ar, en: task.en }, kind: 'task' });
    }
    c.log = c.log.slice(0, 60);
    save(o); render();
  }
  function adjust(delta, label) {
    var o = db(), c = childRec(o, SEL);
    c.points = Math.max(0, c.points + delta);
    c.log.unshift({ ts: Date.now(), delta: delta, label: label || { ar: 'تعديل يدوي', en: 'Manual adjust' }, kind: 'adjust' });
    c.log = c.log.slice(0, 60); save(o); render();
  }
  function redeem(rid) {
    var o = db(), c = childRec(o, SEL), r = o.rewards.filter(function (x) { return x.id === rid; })[0]; if (!r) return;
    if (c.points < r.cost) return;
    if (!window.confirm(ar() ? ('خصم ' + r.cost + ' نقطة مقابل: ' + r.ar + '؟') : ('Redeem ' + r.cost + ' pts for: ' + r.en + '?'))) return;
    c.points -= r.cost;
    c.log.unshift({ ts: Date.now(), delta: -r.cost, label: { ar: r.ar, en: r.en }, kind: 'reward' });
    c.log = c.log.slice(0, 60); save(o); render();
  }

  /* ─── task / reward management ─── */
  function addTask() {
    var nameAr = window.prompt(ar() ? 'اسم السلوك (عربي):' : 'Behaviour name (Arabic):', ''); if (nameAr == null) return;
    var nameEn = window.prompt(ar() ? 'الاسم بالإنجليزية:' : 'Name (English):', nameAr) || nameAr;
    var pts = parseInt(window.prompt(ar() ? 'عدد النقاط:' : 'Points:', '5'), 10); if (isNaN(pts)) pts = 5;
    var o = db(); o.tasks.push({ id: uid('t'), ar: nameAr.trim(), en: nameEn.trim(), pts: pts, icon: '⭐', color: '#5BA8F5', corner: '' });
    save(o); render();
  }
  function editTask(id) {
    var o = db(), t = o.tasks.filter(function (x) { return x.id === id; })[0]; if (!t) return;
    var pts = window.prompt(ar() ? ('نقاط «' + t.ar + '»:') : ('Points for "' + t.en + '":'), t.pts);
    if (pts == null) return; var n = parseInt(pts, 10); if (!isNaN(n)) t.pts = n; save(o); render();
  }
  function removeTask(id) {
    var o = db(); o.tasks = o.tasks.filter(function (x) { return x.id !== id; }); save(o); render();
  }
  function addReward() {
    var nameAr = window.prompt(ar() ? 'اسم المكافأة (عربي):' : 'Reward name (Arabic):', ''); if (nameAr == null) return;
    var nameEn = window.prompt(ar() ? 'الاسم بالإنجليزية:' : 'Name (English):', nameAr) || nameAr;
    var cost = parseInt(window.prompt(ar() ? 'التكلفة بالنقاط:' : 'Cost in points:', '50'), 10); if (isNaN(cost)) cost = 50;
    var o = db(); o.rewards.push({ id: uid('r'), ar: nameAr.trim(), en: nameEn.trim(), cost: cost, icon: '🎁' });
    save(o); render();
  }
  function removeReward(id) { var o = db(); o.rewards = o.rewards.filter(function (x) { return x.id !== id; }); save(o); render(); }

  /* ─── view state ─── */
  var VIEW = 'tasks';   // tasks | rewards | history | manage
  function setView(v) { VIEW = v; render(); }

  function cornerName(id) { var c = window.MK && MK.corner && MK.corner(id); return c ? tx(c.name) : ''; }

  function render() {
    var host = document.getElementById('bpsBody'); if (!host) return;
    if (!window.MK) { host.innerHTML = '<p class="bps-mut">—</p>'; return; }
    ensureSel();
    var ps = profiles();
    if (!ps.length) {
      host.innerHTML = '<div class="bps-empty"><div class="bps-empty-ic">👶</div><p>' +
        (ar() ? 'لا يوجد أطفال بعد. أضِف طفلًا لتبدأ نظام النقاط السلوكية.' : 'No children yet. Add a child to start the behaviour points.') +
        '</p><button class="bps-btn go" onclick="MKB.addChild()">＋ ' + (ar() ? 'إضافة طفل' : 'Add child') + '</button></div>';
      return;
    }
    var o = db(), c = childRec(o, SEL), t = today();
    var aR = ar();

    /* child switcher (chips like the reference) */
    var chips = ps.map(function (p) {
      var on = p.id === SEL;
      var pts = (o.child[p.id] && o.child[p.id].points) || 0;
      return '<button class="bps-chip' + (on ? ' on' : '') + '" onclick="MKB.pick(\'' + p.id + '\')">' +
        '<span class="bps-chip-avi" style="background:' + (p.color || '#D4A017') + '">' + (p.avatar || '🧒') + '</span>' +
        '<span class="bps-chip-nm">' + escapeHtml(p.name) + '</span><span class="bps-chip-pts">' + pts + ' ⭐</span></button>';
    }).join('') + '<button class="bps-chip add" onclick="MKB.addChild()">＋</button>';

    /* header card */
    var cur = ps.filter(function (p) { return p.id === SEL; })[0] || ps[0];
    var header = '<div class="bps-hero" style="--hc:' + (cur.color || '#F47C7C') + '">' +
      '<span class="bps-hero-avi">' + (cur.avatar || '🧒') + '</span>' +
      '<span class="bps-hero-nm">' + escapeHtml(cur.name) + '</span>' +
      '<span class="bps-hero-pts">' + c.points + ' <span class="st">⭐</span></span></div>';

    /* sub-nav */
    var tabs = [['tasks', aR ? 'المهامّ' : 'Tasks', '⭐'], ['rewards', aR ? 'المكافآت' : 'Rewards', '🎁'],
                ['history', aR ? 'السجلّ' : 'History', '📜'], ['manage', aR ? 'إدارة' : 'Manage', '⚙️']];
    var subnav = '<div class="bps-subnav">' + tabs.map(function (x) {
      return '<button class="bps-stab' + (VIEW === x[0] ? ' on' : '') + '" onclick="MKB.view(\'' + x[0] + '\')">' + x[2] + ' ' + x[1] + '</button>';
    }).join('') + '</div>';

    var body = '';
    if (VIEW === 'tasks') {
      var doneToday = c.done[t] || {};
      body = '<div class="bps-section-lbl">' + (aR ? '✅ مهامّ اليوم — اضغط لِمَنح النقاط' : "✅ Today's tasks — tap to award points") + '</div>' +
        '<div class="bps-grid">' + o.tasks.map(function (tk) {
          var on = !!doneToday[tk.id];
          return '<button class="bps-task' + (on ? ' on' : '') + '" style="--tc:' + tk.color + '" onclick="MKB.toggle(\'' + tk.id + '\')">' +
            '<span class="bps-task-ic">' + tk.icon + '</span>' +
            '<span class="bps-task-nm">' + tx(tk) + '</span>' +
            '<span class="bps-task-pts">' + (on ? '✓ ' : '+') + tk.pts + ' ⭐</span>' +
            (tk.corner ? '<span class="bps-task-corner">' + cornerName(tk.corner) + '</span>' : '') +
            '</button>';
        }).join('') + '</div>' +
        '<div class="bps-manual"><button class="bps-btn sm" onclick="MKB.adjust(1)">+1 ⭐</button>' +
        '<button class="bps-btn sm" onclick="MKB.adjust(5)">+5 ⭐</button>' +
        '<button class="bps-btn sm warn" onclick="MKB.adjust(-5)">−5 ⭐</button></div>';
    } else if (VIEW === 'rewards') {
      body = '<div class="bps-section-lbl">' + (aR ? '🎁 المكافآت — استبدِل النقاط' : '🎁 Rewards — redeem points') + '</div>' +
        '<div class="bps-rewards">' + o.rewards.map(function (r) {
          var can = c.points >= r.cost, pct = Math.min(100, Math.round(c.points / r.cost * 100));
          return '<div class="bps-rw">' +
            '<span class="bps-rw-ic">' + r.icon + '</span>' +
            '<div class="bps-rw-mid"><b>' + tx(r) + '</b>' +
            '<small>' + r.cost + ' ⭐ ' + (can ? (aR ? '· متاحة!' : '· available!') : (aR ? '· يحتاج ' + (r.cost - c.points) + ' نقطة' : '· ' + (r.cost - c.points) + ' more')) + '</small>' +
            (can ? '' : '<div class="bps-rw-bar"><i style="width:' + pct + '%"></i></div>') + '</div>' +
            (can ? '<button class="bps-btn go" onclick="MKB.redeem(\'' + r.id + '\')">' + (aR ? 'استبدال' : 'Redeem') + '</button>'
                 : '<span class="bps-rw-pct">' + pct + '%</span>') +
            '</div>';
        }).join('') + '</div>';
    } else if (VIEW === 'history') {
      var log = c.log || [];
      body = '<div class="bps-section-lbl">' + (aR ? '📜 آخر الحركات' : '📜 Recent activity') + '</div>' +
        (log.length ? '<div class="bps-log">' + log.map(function (e) {
          var pos = e.delta >= 0;
          return '<div class="bps-log-row"><span class="bps-log-lb">' + tx(e.label) + '</span>' +
            '<span class="bps-log-dt">' + fmtDate(e.ts) + '</span>' +
            '<span class="bps-log-d ' + (pos ? 'pos' : 'neg') + '">' + (pos ? '+' : '') + e.delta + ' ⭐</span></div>';
        }).join('') + '</div>' : '<p class="bps-mut">' + (aR ? 'لا توجد حركات بعد.' : 'No activity yet.') + '</p>');
    } else { /* manage */
      body = '<div class="bps-section-lbl">' + (aR ? '⚙️ السلوكيّات' : '⚙️ Behaviours') + '<button class="bps-btn sm go" onclick="MKB.addTask()">＋ ' + (aR ? 'إضافة' : 'Add') + '</button></div>' +
        '<div class="bps-manage">' + o.tasks.map(function (tk) {
          return '<div class="bps-mrow"><span class="bps-mic">' + tk.icon + '</span><span class="bps-mnm">' + tx(tk) +
            (tk.corner ? ' <small>· ' + cornerName(tk.corner) + '</small>' : '') + '</span>' +
            '<button class="bps-pts-btn" onclick="MKB.editTask(\'' + tk.id + '\')">' + tk.pts + ' ⭐</button>' +
            '<button class="bps-x" onclick="MKB.removeTask(\'' + tk.id + '\')">✕</button></div>';
        }).join('') + '</div>' +
        '<div class="bps-section-lbl" style="margin-top:1.1rem">' + (aR ? '🎁 المكافآت' : '🎁 Rewards') + '<button class="bps-btn sm go" onclick="MKB.addReward()">＋ ' + (aR ? 'إضافة' : 'Add') + '</button></div>' +
        '<div class="bps-manage">' + o.rewards.map(function (r) {
          return '<div class="bps-mrow"><span class="bps-mic">' + r.icon + '</span><span class="bps-mnm">' + tx(r) + '</span>' +
            '<span class="bps-pts-btn">' + r.cost + ' ⭐</span>' +
            '<button class="bps-x" onclick="MKB.removeReward(\'' + r.id + '\')">✕</button></div>';
        }).join('') + '</div>';
    }

    host.innerHTML = '<div class="bps-chips">' + chips + '</div>' + header + subnav + '<div class="bps-view">' + body + '</div>';
  }

  function fmtDate(ts) { var d = new Date(ts); return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  window.MKB = {
    render: render,
    pick: function (id) { SEL = id; render(); },
    view: setView,
    toggle: toggleTask,
    adjust: function (d) { adjust(d); },
    redeem: redeem,
    addTask: addTask, editTask: editTask, removeTask: removeTask,
    addReward: addReward, removeReward: removeReward,
    addChild: function () { if (window.MK) MK.snapshotActive && MK.snapshotActive(); location.href = '../../shared/login.html?lang=' + lang(); },
  };
})();
