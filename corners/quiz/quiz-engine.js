/* ════════════════════════════════════════════════════════════════
   اختبارات الأركان — Corner Quizzes · ENGINE (single include)
   • Infers corner (from folder) + journey (from filename) + stations.
   • Injects a permanent "اختبار الرحلة" button into the journey map.
   • 3 levels (مبتدئ/متوسط/متقدم) × 3 activities (match · MCQ · maze),
     generated from the journey's own station data (quiz-generate.js).
   • Scores每 activity → level → journey → corner → child %.
   • At ≥75% corner score, unlocks 5 Anous activities (shown here & in Anous).
   Bilingual, mobile-first, theme-aware. Loads its sibling registry +
   generators automatically, so each page only needs ONE include.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__MKQ_BOOTED__) return; window.__MKQ_BOOTED__ = true;

  /* ════════ UNIVERSAL MARKING RUBRIC (one source of truth for ALL 9 corners) ════════
     Every corner is marked by THIS rubric. Override globally by setting
     window.QUIZ_RUBRIC before this script loads; per-corner overrides may live
     on the registry entry as reg.rubric. Keep it in ONE place so a single edit
     re-marks every corner consistently. */
  const RUBRIC = Object.assign({
    passMark: 75,                                   // % needed to "pass" an activity / corner
    levels: ['beginner', 'intermediate', 'advanced'],
    actsPerLevel: 3,                                // generator invariant (3 activities per level)
    unlockNeedsAllJourneys: true,                   // every journey must be attempted to unlock rewards
    scoreMode: 'bestLevel',                          // 'bestLevel' (one level decides the score) | 'allActivities'
  }, window.QUIZ_RUBRIC || {});
  const PASS = RUBRIC.passMark;
  function rubricFor(corner) {
    const reg = window.QUIZ_REG && window.QUIZ_REG[corner];
    return Object.assign({}, RUBRIC, (reg && reg.rubric) || {});
  }

  /* ── resolve own folder so we can load siblings + reach Anous ── */
  const ME = document.currentScript || [...document.scripts].find(s => /quiz-engine\.js/.test(s.src));
  const BASE = ME ? ME.src.replace(/quiz-engine\.js.*$/, '') : '';        // .../corners/quiz/
  const ANOUS = BASE.replace(/quiz\/$/, 'activities/');                    // .../corners/activities/

  function loadScript(src) {
    return new Promise((res, rej) => {
      if ([...document.scripts].some(s => s.src === src)) return res();
      const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  /* boot after siblings are present */
  Promise.all([
    window.QUIZ_REG ? Promise.resolve() : loadScript(BASE + 'quiz-registry.js'),
    window.QUIZ_GEN ? Promise.resolve() : loadScript(BASE + 'quiz-generate.js'),
    (window.MK_J || window.MK_JOURNEYS) ? Promise.resolve() : loadScript(BASE.replace(/quiz\/$/, 'shared/') + 'mk-journeys.js').catch(()=>{}),
  ]).then(start).catch(e => console.warn('[quiz] load failed', e));

  /* ════════ STORAGE + SCORING ════════ */
  const SKEY = 'mkQuiz', UKEY = 'mkUnlocked';
  const store = () => { try { return JSON.parse(localStorage.getItem(SKEY) || '{}'); } catch (e) { return {}; } };
  const save = o => localStorage.setItem(SKEY, JSON.stringify(o));
  const unlocks = () => { try { return JSON.parse(localStorage.getItem(UKEY) || '{}'); } catch (e) { return {}; } };
  const round = n => Math.round(n);
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;

  function setActivityScore(corner, journey, level, idx, pct) {
    const o = store();
    (((o[corner] = o[corner] || {})[journey] = o[corner][journey] || {})[level] = o[corner][journey][level] || {})[idx] = round(pct);
    save(o);
  }
  /* Scoring uses FULL denominators so partial play can't read as 100%:
     each journey has a fixed 9 activities (3 levels × 3), and a corner has ALL
     its journeys. Un-done activities / un-attempted journeys count as 0. */
  const QLEVELS = RUBRIC.levels;
  const ACTS_PER_JOURNEY = RUBRIC.levels.length * RUBRIC.actsPerLevel;   // rubric default denominator (e.g. 9)

  // average of the activities ATTEMPTED in a level — for per-level display only
  function levelScore(corner, journey, level) {
    const lv = (((store()[corner] || {})[journey] || {})[level]) || {};
    const v = Object.values(lv); return v.length ? avg(v) : null;
  }
  // journey % over ALL 9 activities (missing = 0); null only if nothing attempted yet
  function journeyScore(corner, journey) {
    const jd = (store()[corner] || {})[journey] || {};
    /* UNIVERSAL RULE: a journey's score is based on ONE level — the child's BEST
       level — not the sum of all three. Each level is scored over the activities
       it actually offers (default 3), so completing ANY single level well can
       reach 100%. Un-played activities within an attempted level still count 0.
       Set RUBRIC.scoreMode='allActivities' to revert to the old all-9 average. */
    const perLevel = (typeof jd._nl === 'number' && jd._nl > 0) ? jd._nl : RUBRIC.actsPerLevel;
    if (RUBRIC.scoreMode === 'allActivities') {
      const denom = (typeof jd._n === 'number' && jd._n > 0) ? jd._n : ACTS_PER_JOURNEY;
      let sum = 0, any = false;
      QLEVELS.forEach(l => { const lv = jd[l] || {}; Object.values(lv).forEach(p => { sum += p; any = true; }); });
      return any ? (sum / denom) : null;
    }
    let best = null;
    QLEVELS.forEach(l => {
      const lv = jd[l] || {}; const vals = Object.values(lv);
      if (!vals.length) return;
      const avg = vals.reduce((a, b) => a + b, 0) / perLevel;   // level % over its offered activities
      if (best === null || avg > best) best = avg;
    });
    return best;   // null if nothing attempted yet
  }
  /* record how many activities this journey offers — total (_n) and per-level (_nl) */
  function recordOffered() {
    if (LEARN_MODE || !CUR || !CUR.journey) return;
    let n = 0, per = 0; QLEVELS.forEach(l => { try { const k = levelActs(l).length; n += k; if (k > per) per = k; } catch (e) {} });
    if (!n) return;
    const o = store();
    const j = ((o[CUR.corner] = o[CUR.corner] || {})[CUR.journey] = o[CUR.corner][CUR.journey] || {});
    let dirty = false;
    if (j._n !== n) { j._n = n; dirty = true; }
    if (per && j._nl !== per) { j._nl = per; dirty = true; }
    if (dirty) save(o);
  }
  // corner % over ALL journeys (un-attempted journey counts as 0)
  function cornerScore(corner) {
    const reg = window.QUIZ_REG[corner]; if (!reg || !reg.journeys.length) return null;
    let sum = 0, any = false;
    reg.journeys.forEach(j => { const s = journeyScore(corner, j.id); if (s !== null) { sum += s; any = true; } });
    return any ? (sum / reg.journeys.length) : null;
  }
  function childPct() {
    const v = Object.keys(window.QUIZ_REG).map(c => cornerScore(c)).filter(x => x !== null);
    return v.length ? avg(v) : null;
  }
  // every station (journey) in the corner must have been tested at least once
  function allJourneysAttempted(corner) {
    const reg = window.QUIZ_REG[corner]; if (!reg || !reg.journeys.length) return false;
    return reg.journeys.every(j => journeyScore(corner, j.id) !== null);
  }
  /* Anous rewards unlock ONLY when EVERY station's exam has been done AND the
     corner score is ≥75%. Stale/invalid unlocks (e.g. from an older build, or a
     score that later dropped) are revoked here so the gate stays honest. */
  function refreshUnlock(corner) {
    const reg = window.QUIZ_REG[corner]; if (!reg) return false;
    const cs = cornerScore(corner);
    const qualifies = cs !== null && cs >= PASS && (!RUBRIC.unlockNeedsAllJourneys || allJourneysAttempted(corner));
    const u = unlocks();
    if (qualifies && !u[corner]) {
      u[corner] = reg.rewards; localStorage.setItem(UKEY, JSON.stringify(u));
      try { window.dispatchEvent(new CustomEvent('mk-unlocks-changed', { detail: { corner } })); } catch (e) {}
      return true; // newly unlocked
    }
    if (!qualifies && u[corner]) {
      delete u[corner]; localStorage.setItem(UKEY, JSON.stringify(u));
      try { window.dispatchEvent(new CustomEvent('mk-unlocks-changed', { detail: { corner } })); } catch (e) {}
    }
    return false;
  }
  /* re-validate every corner's unlock against current scores (self-heal on load) */
  function reconcileAllUnlocks() {
    try { Object.keys(window.QUIZ_REG || {}).forEach(refreshUnlock); } catch (e) {}
  }

  /* ════════ CONTEXT (corner / journey / stations) ════════ */
  function ctx() {
    const path = location.pathname;
    const file = (path.split('/').pop() || '').replace(/\.html?$/i, '') || 'index';
    const params = new URLSearchParams(location.search);
    for (const corner in window.QUIZ_REG) {
      const reg = window.QUIZ_REG[corner];
      if (file === reg.index) return { corner, reg, file, isHub: true };
      if (reg.folder && path.includes('/' + reg.folder + '/') && reg.journeys.find(j => j.id === file))
        return { corner, reg, file, journey: file };
      if (reg.page && file === reg.page) {
        const jid = params.get('j') || (reg.journeys[0] && reg.journeys[0].id);
        if (reg.journeys.find(j => j.id === jid)) return { corner, reg, file, journey: jid, stationsGlobal: reg.stationsGlobal };
      }
      /* chapter corners (history/heart): era.html?era=… or a fixed page (heart.html).
         These corners use ONE corner-wide exam; any era/page id that isn't the
         single journey falls back to it so a test always shows. */
      if (reg.eraPage && file === reg.eraPage) {
        let jid = params.get('era') || reg.defaultEra || (reg.journeys[0] && reg.journeys[0].id);
        if (!reg.journeys.find(j => j.id === jid)) jid = reg.defaultEra || (reg.journeys[0] && reg.journeys[0].id);
        if (reg.journeys.find(j => j.id === jid)) return { corner, reg, file, journey: jid, eraGlobal: reg.eraGlobal };
      }
    }
    return {};
  }
  /* chapter corners: build a station list from an era's map-meta nodes
     (name + one-line hook), flattening categorized eras (heroes/heart). */
  function eraStations(eraId, catId) {
    const H = window[ 'HISN' ]; const era = H && H.eras && H.eras[eraId];
    if (!era) return null;
    let nodes = era.nodes;
    if ((!nodes || !nodes.length) && era.categories) {
      const cats = catId ? era.categories.filter(c => c.id === catId) : era.categories;
      nodes = cats.reduce((a, c) => a.concat((c.heroes || []).filter(Boolean)), []);
    }
    if (!Array.isArray(nodes)) return null;
    const out = nodes.filter(n => n && n.name && !n.gate && !n.soon)
      .map((n, i) => ({ title: n.name, key: n.hook || n.tag, hook: n.hook, num: i + 1, icon: n.icon }));
    /* whole-era tests need ≥4 stations; category tests (heart sections) may have
       fewer currently-open nodes due to progressive gating, so allow ≥3. */
    const min = catId ? 3 : 4;
    return out.length >= min ? out : null;
  }
  function findStations(c) {
    if (c && c.eraGlobal) {
      /* corners with ONE corner-wide exam spanning several eras (history) */
      if (c.reg.combineEras) {
        const all = c.reg.combineEras.reduce((a, e) => { const s = eraStations(e); return s ? a.concat(s) : a; }, []);
        if (all.length >= 4) return all.map((n, i) => Object.assign({}, n, { num: i + 1 }));
      }
      /* single-era corner (heart: one exam flattening all its categories) */
      const s = eraStations(c.journey); if (s) return s;
    }
    if (c && c.stationsGlobal) {
      const g = window[c.stationsGlobal]; const j = g && g[c.journey];
      return (j && Array.isArray(j.stations)) ? j.stations : null;
    }
    if (window.RIHLA_CFG && Array.isArray(window.RIHLA_CFG.stations)) return window.RIHLA_CFG.stations;
    for (const k in window) { try { if (/_STATIONS$/.test(k) && Array.isArray(window[k]) && window[k][0] && window[k][0].title) return window[k]; } catch (e) {} }
    return null;
  }

  /* ════════ i18n helper ════════ */
  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'ar');
  const tx = o => !o ? '' : (typeof o === 'string' ? o : (o[lang()] !== undefined ? o[lang()] : o.ar));
  const isAr = () => lang() === 'ar';

  /* ════════ STYLES ════════ */
  function injectCSS() {
    if (document.getElementById('mkq-css')) return;
    const cs = getComputedStyle(document.documentElement);
    const primary = (cs.getPropertyValue('--primary') || '').trim() || '#C0392B';
    const gold = (cs.getPropertyValue('--gold') || cs.getPropertyValue('--gold-soft') || '').trim() || '#D4A017';
    const css = `
    :root{--mkq-primary:${primary};--mkq-gold:${gold}}
    .mkq-banner{display:flex;align-items:center;gap:.9rem;max-width:560px;margin:1.4rem auto .2rem;padding:1rem 1.2rem;
      background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.04));border:1.5px solid var(--mkq-gold);
      border-radius:1.3rem;box-shadow:0 12px 30px rgba(0,0,0,.28);position:relative;z-index:3}
    .mkq-banner .mkq-b-ic{font-size:2.1rem;flex:0 0 auto}
    .mkq-banner .mkq-b-txt{flex:1;display:flex;flex-direction:column;line-height:1.5;font-family:'Tajawal',sans-serif}
    .mkq-banner .mkq-b-txt b{font-size:1.12rem;color:var(--mkq-gold)}
    .mkq-banner .mkq-b-txt span{font-size:.82rem;opacity:.82}
    .mkq-b-btn,.mkq-pill{font-family:'Tajawal',sans-serif;cursor:pointer;border:none;font-weight:800}
    .mkq-b-btn{background:var(--mkq-primary);color:#fff;border-radius:2rem;padding:.62rem 1.2rem;font-size:.95rem;white-space:nowrap;box-shadow:0 8px 20px rgba(0,0,0,.3);transition:transform .15s}
    .mkq-b-actions{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;flex:0 0 auto}
    .mkq-b-learn{background:#7E5BD0}
    .mkq-certcta{display:flex;align-items:center;gap:.9rem;max-width:560px;width:calc(100% - 2rem);box-sizing:border-box;margin:.2rem auto 1.4rem;padding:1rem 1.2rem;border:none;border-radius:1.3rem;cursor:pointer;font-family:'Tajawal',sans-serif;background:linear-gradient(160deg,rgba(31,138,91,.18),rgba(255,255,255,.04));border:1.5px solid rgba(31,138,91,.5);color:inherit}
    .mkq-certcta .mkq-cc-ic{font-size:2rem;flex:0 0 auto}
    .mkq-certcta .mkq-cc-tx{flex:1;display:flex;flex-direction:column;line-height:1.5;text-align:start}
    .mkq-certcta .mkq-cc-tx b{font-size:1.08rem;color:var(--mkq-gold)}
    .mkq-certcta .mkq-cc-tx span{font-size:.82rem;opacity:.82}
    .mkq-certcta .mkq-cc-go{flex:0 0 auto;background:#1F8A5B;color:#fff;border-radius:2rem;padding:.55rem 1.1rem;font-weight:800;font-size:.9rem;white-space:nowrap}
    .mkq-certcta:hover{filter:brightness(1.06)}
    .mkq-b-btn:hover{transform:translateY(-2px)}
    .mkq-b-score{font-size:.78rem;opacity:.9;margin-top:.1rem}
    /* overlay */
    .mkq-ov{position:fixed;inset:0;z-index:4000;background:rgba(4,10,22,.72);backdrop-filter:blur(7px);display:none;
      align-items:flex-start;justify-content:center;overflow-y:auto;padding:max(16px,3vh) 12px}
    .mkq-ov.open{display:flex}
    .mkq-sheet{width:100%;max-width:640px;margin:auto;background:linear-gradient(165deg,#0E1E36,#0A1830);
      border:1.5px solid var(--mkq-gold);border-radius:1.6rem;box-shadow:0 30px 70px rgba(0,0,0,.6);color:#EAF1FB;
      font-family:'Tajawal',sans-serif;overflow:hidden}
    .mkq-top{display:flex;align-items:center;gap:.7rem;padding:1rem 1.2rem;border-bottom:1px solid rgba(255,255,255,.1);
      background:rgba(255,255,255,.03);position:sticky;top:0;z-index:2}
    .mkq-top h3{margin:0;font-size:1.1rem;font-weight:900;flex:1;color:var(--mkq-gold)}
    .mkq-x{background:rgba(255,255,255,.1);border:none;color:#fff;width:34px;height:34px;border-radius:50%;font-size:1.1rem;cursor:pointer}
    .mkq-lang{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:1rem;padding:.25rem .7rem;font-weight:800;font-size:.78rem;cursor:pointer}
    .mkq-body{padding:1.2rem}
    /* level cards */
    .mkq-age{display:inline-block;margin-inline-start:.5rem;font-size:.66rem;font-weight:800;opacity:.7;background:rgba(255,255,255,.1);border-radius:1rem;padding:.08rem .55rem;vertical-align:middle}
    .mkq-lvl{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:1.2rem;padding:1rem 1.1rem;margin-bottom:1rem}
    .mkq-lvl-h{display:flex;align-items:center;gap:.6rem;margin-bottom:.7rem}
    .mkq-lvl-h .ic{font-size:1.5rem}
    .mkq-lvl-h .nm{font-weight:900;font-size:1.05rem;flex:1}
    .mkq-lvl-h .sc{font-weight:900;color:var(--mkq-gold);font-size:.95rem}
    .mkq-acts{display:grid;grid-template-columns:1fr 1fr 1fr;gap:.55rem}
    @media(max-width:480px){.mkq-acts{grid-template-columns:1fr}}
    .mkq-act{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:.9rem;padding:.7rem .6rem;text-align:center;cursor:pointer;transition:transform .15s,border-color .2s;display:flex;flex-direction:column;gap:.25rem;align-items:center}
    .mkq-act:hover{transform:translateY(-3px);border-color:var(--mkq-gold)}
    .mkq-act .ai{font-size:1.4rem}.mkq-act .at{font-size:.78rem;font-weight:700;line-height:1.35}
    .mkq-act .as{font-size:.72rem;font-weight:900;color:var(--mkq-gold)}
    .mkq-act.pass{border-color:#2ecc71}.mkq-act .as.pass{color:#2ecc71}
    /* result ring + bars */
    .mkq-ring{--p:0;width:118px;height:118px;border-radius:50%;margin:.4rem auto;display:flex;align-items:center;justify-content:center;
      background:conic-gradient(var(--mkq-gold) calc(var(--p)*1%),rgba(255,255,255,.12) 0)}
    .mkq-ring i{width:90px;height:90px;border-radius:50%;background:#0A1830;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:900;font-size:1.5rem;color:var(--mkq-gold)}
    .mkq-foot{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center;margin-top:1rem}
    .mkq-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(76px,1fr));gap:.5rem;margin:.8rem 0 .2rem}
    .mkq-stat{display:flex;flex-direction:column;align-items:center;gap:.15rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:.9rem;padding:.6rem .3rem}
    .mkq-stat .ms-ic{font-size:1.25rem}
    .mkq-stat .ms-v{font-weight:900;font-size:1.15rem;color:var(--mkq-gold)}
    .mkq-stat .ms-v small{font-size:.72rem;font-weight:800;color:rgba(255,255,255,.55)}
    .mkq-stat .ms-l{font-size:.66rem;font-weight:800;opacity:.8;text-align:center}
    .mkq-btn{font-family:'Tajawal',sans-serif;font-weight:800;border:none;border-radius:2rem;padding:.6rem 1.3rem;cursor:pointer;font-size:.92rem}
    .mkq-btn.p{background:var(--mkq-primary);color:#fff}
    .mkq-btn.g{background:var(--mkq-gold);color:#10243d}
    .mkq-btn.o{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.25)}
    /* MCQ */
    .mkq-q{font-size:1.12rem;font-weight:800;line-height:1.85;margin:.4rem 0 1rem;text-align:center}
    .mkq-ayah{font-family:'Amiri Quran',serif}
    .mkq-opts{display:flex;flex-direction:column;gap:.6rem}
    .mkq-opt{background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.16);border-radius:1rem;padding:.8rem 1rem;cursor:pointer;font-size:.96rem;line-height:1.7;transition:background .15s,border-color .15s;text-align:start}
    .mkq-opt:hover{border-color:var(--mkq-gold)}
    .mkq-opt.right{background:rgba(46,204,113,.22);border-color:#2ecc71}
    .mkq-opt.wrong{background:rgba(231,76,60,.22);border-color:#e74c3c}
    .mkq-opt.dim{opacity:.5;pointer-events:none}
    .mkq-prog{display:flex;align-items:center;justify-content:space-between;font-size:.82rem;opacity:.85;margin-bottom:.5rem}
    .mkq-qhint{text-align:center;font-size:.82rem;line-height:1.6;color:var(--mkq-gold);opacity:.92;margin:.9rem 0 .2rem;min-height:0}
    /* MATCH */
    .mkq-mcols{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}
    .mkq-mcol{display:flex;flex-direction:column;gap:.55rem}
    .mkq-mi{background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.16);border-radius:.85rem;padding:.7rem .6rem;cursor:pointer;font-size:.88rem;line-height:1.55;transition:.15s;text-align:center}
    .mkq-mi.sel{border-color:var(--mkq-gold);background:rgba(212,160,23,.18)}
    .mkq-mi.matched{background:rgba(46,204,113,.2);border-color:#2ecc71;pointer-events:none;opacity:.75}
    .mkq-mi.wrong{border-color:#e74c3c;animation:mkqShake .35s}
    @keyframes mkqShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
    /* MAZE */
    .mkq-track{display:flex;align-items:center;gap:.3rem;justify-content:center;margin:.3rem 0 1rem;flex-wrap:wrap}
    .mkq-step{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:.8rem;border:1.5px solid rgba(255,255,255,.2)}
    .mkq-step.done{background:#2ecc71;border-color:#2ecc71}
    .mkq-step.cur{border-color:var(--mkq-gold);box-shadow:0 0 0 3px rgba(212,160,23,.3)}
    .mkq-step.miss{background:#e74c3c;border-color:#e74c3c}
    /* panel bars + rewards */
    .mkq-bar{display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem;font-size:.86rem}
    .mkq-bar .nm{flex:0 0 42%;display:flex;align-items:center;gap:.4rem}
    .mkq-bar .tr{flex:1;height:9px;background:rgba(255,255,255,.1);border-radius:5px;overflow:hidden}
    .mkq-bar .fl{height:100%;background:var(--mkq-gold);border-radius:5px}
    .mkq-bar .vl{flex:0 0 auto;font-weight:900;width:42px;text-align:end;color:var(--mkq-gold)}
    .mkq-rewards{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-top:.5rem}
    .mkq-rw{display:flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:.9rem;padding:.6rem .7rem;text-decoration:none;color:#EAF1FB}
    .mkq-rw.lock{opacity:.5}
    .mkq-rw .ri{font-size:1.5rem}.mkq-rw .rt{font-size:.82rem;font-weight:700;line-height:1.4}
    .mkq-note{text-align:center;font-size:.86rem;opacity:.85;line-height:1.7;margin:.6rem 0}
    .mkq-cele{text-align:center;font-size:1.05rem;font-weight:900;color:var(--mkq-gold);line-height:1.8;margin:.5rem 0}
    /* ── MEMORY ── */
    .mkq-mem{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem;margin:.4rem 0}
    @media(max-width:420px){.mkq-mem{grid-template-columns:repeat(2,1fr)}}
    .mkq-memc{min-height:92px;border-radius:1rem;border:1.5px solid rgba(255,255,255,.16);background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.03));color:#EAF1FB;font-family:'Tajawal',sans-serif;cursor:pointer;padding:.5rem;display:flex;align-items:center;justify-content:center;transition:transform .15s,border-color .2s,background .2s}
    .mkq-memc:hover{transform:translateY(-2px);border-color:var(--mkq-gold)}
    .mkq-memc .mc-face{font-size:.82rem;font-weight:700;line-height:1.45;text-wrap:pretty}
    .mkq-memc:not(.show) .mc-face{font-size:1.7rem}
    .mkq-memc.show{background:rgba(212,160,23,.16);border-color:var(--mkq-gold)}
    .mkq-memc.matched{background:rgba(46,204,113,.2);border-color:#2ecc71;opacity:.85;cursor:default}
    /* ── TRUE/FALSE ── */
    .mkq-tf-stmt{font-size:1.18rem;font-weight:800;line-height:1.9;text-align:center;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.14);border-radius:1.2rem;padding:1.4rem 1.1rem;margin:.5rem 0 1.1rem;min-height:120px;display:flex;align-items:center;justify-content:center;text-wrap:pretty}
    .mkq-tf-btns{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}
    .mkq-tf-btn{font-family:'Tajawal',sans-serif;font-weight:900;font-size:1.15rem;padding:1rem;border-radius:1.1rem;cursor:pointer;border:2px solid transparent;transition:transform .12s,filter .15s}
    .mkq-tf-btn.t{background:rgba(46,204,113,.16);border-color:rgba(46,204,113,.5);color:#a8f0c4}
    .mkq-tf-btn.f{background:rgba(231,76,60,.16);border-color:rgba(231,76,60,.5);color:#f6b3ab}
    .mkq-tf-btn:not(.dim):hover{transform:translateY(-2px)}
    .mkq-tf-btn.dim{opacity:.45}
    .mkq-tf-btn.right{background:rgba(46,204,113,.34)!important;border-color:#2ecc71!important;color:#fff!important;opacity:1}
    .mkq-tf-btn.wrong{background:rgba(231,76,60,.34)!important;border-color:#e74c3c!important;color:#fff!important;opacity:1}
    /* ── SORT ── */
    .mkq-sort-card{font-size:1.08rem;font-weight:800;line-height:1.85;text-align:center;background:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.03));border:1.5px solid var(--mkq-gold);border-radius:1.2rem;padding:1.3rem 1.1rem;margin:.5rem 0 1.1rem;min-height:108px;display:flex;align-items:center;justify-content:center;text-wrap:pretty;transition:transform .2s,background .2s}
    .mkq-sort-card.ok{background:rgba(46,204,113,.2);border-color:#2ecc71;transform:scale(.97)}
    .mkq-sort-card.no{background:rgba(231,76,60,.2);border-color:#e74c3c;animation:mkqShake .35s}
    .mkq-sort-baskets{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}
    .mkq-basket{font-family:'Tajawal',sans-serif;font-weight:900;font-size:1.02rem;padding:1.05rem .7rem;border-radius:1.1rem;cursor:pointer;background:rgba(255,255,255,.06);border:2px dashed rgba(255,255,255,.28);color:#EAF1FB;transition:transform .12s,border-color .15s}
    .mkq-basket:hover{transform:translateY(-2px);border-color:var(--mkq-gold)}
    .mkq-basket.right{border-style:solid;border-color:#2ecc71;background:rgba(46,204,113,.22)}
    .mkq-basket.wrong{border-style:solid;border-color:#e74c3c;background:rgba(231,76,60,.22)}
    /* ── CATCH ── */
    .mkq-catch-clue{font-size:1.1rem;font-weight:800;line-height:1.85;text-align:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:1rem;padding:.9rem 1rem;margin:.3rem 0 .6rem;text-wrap:pretty}
    .mkq-timer{height:8px;background:rgba(255,255,255,.1);border-radius:5px;overflow:hidden;margin:.2rem 0 1rem}
    .mkq-timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#2ecc71,var(--mkq-gold) 70%,#e74c3c);border-radius:5px;transition:width .06s linear}
    .mkq-catch-arena{display:flex;flex-wrap:wrap;gap:.7rem;justify-content:center;align-items:center;min-height:150px;padding:.3rem}
    .mkq-bubble{font-family:'Tajawal',sans-serif;font-weight:800;font-size:1rem;padding:.85rem 1.25rem;border-radius:2rem;cursor:pointer;color:#10243d;background:radial-gradient(circle at 35% 30%,#fff7e0,var(--mkq-gold));border:none;box-shadow:0 8px 22px rgba(0,0,0,.32);animation:mkqBob 2.4s ease-in-out infinite;animation-delay:calc(var(--bi)*-.5s)}
    .mkq-bubble:hover{filter:brightness(1.07)}
    .mkq-bubble:disabled{cursor:default;animation:none}
    .mkq-bubble.right{background:radial-gradient(circle at 35% 30%,#bff7d4,#2ecc71);color:#06231E}
    .mkq-bubble.wrong{background:radial-gradient(circle at 35% 30%,#f7c4bd,#e74c3c);color:#fff;opacity:.85}
    @keyframes mkqBob{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-9px) rotate(1.5deg)}}
    /* ── ORDER ── */
    .mkq-order{display:flex;flex-direction:column;gap:.5rem;margin:.5rem 0}
    .mkq-order-row{display:flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.14);border-radius:.9rem;padding:.55rem .7rem;transition:border-color .2s,background .2s}
    .mkq-order-n{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:var(--mkq-gold);color:#10243d;font-weight:900;font-size:.86rem;display:flex;align-items:center;justify-content:center}
    .mkq-order-t{flex:1;font-size:.92rem;font-weight:700;line-height:1.5;text-wrap:pretty}
    .mkq-order-btns{flex:0 0 auto;display:flex;flex-direction:column;gap:.18rem}
    .mkq-ud{width:30px;height:22px;border-radius:.5rem;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#EAF1FB;cursor:pointer;font-size:.7rem;line-height:1;display:flex;align-items:center;justify-content:center}
    .mkq-ud:disabled{opacity:.3;cursor:default}
    .mkq-ud:not(:disabled):hover{border-color:var(--mkq-gold);background:rgba(212,160,23,.18)}
    .mkq-order-row.okpos{border-color:#2ecc71;background:rgba(46,204,113,.16)}
    .mkq-order-row.badpos{border-color:#e74c3c;background:rgba(231,76,60,.14)}
    `;
    const el = document.createElement('style'); el.id = 'mkq-css'; el.textContent = css; document.head.appendChild(el);
  }

  /* ════════ OVERLAY SHELL ════════ */
  let OV, SHEET, BODY;
  function ensureOverlay() {
    if (OV) return;
    OV = document.createElement('div'); OV.className = 'mkq-ov';
    OV.innerHTML = `<div class="mkq-sheet">
      <div class="mkq-top"><button class="mkq-lang" id="mkqLang"></button><h3 id="mkqTitle"></h3><button class="mkq-x" id="mkqX">✕</button></div>
      <div class="mkq-body" id="mkqBody"></div></div>`;
    document.body.appendChild(OV);
    SHEET = OV.querySelector('.mkq-sheet'); BODY = OV.querySelector('#mkqBody');
    OV.querySelector('#mkqX').onclick = () => {
      // mid-test, confirm before abandoning so a stray tap doesn't lose progress
      if (VIEW.mode === 'activity' && !VIEW.done) {
        const msg = isAr() ? 'هل تريد الخروج من الاختبار؟ سيُفقد تقدّمك في هذا النشاط.' : 'Leave the test? Your progress in this activity will be lost.';
        if (!window.confirm(msg)) return;
      }
      closeOverlay();
    };
    // backdrop tap must NOT abandon an in-progress test (common accidental exit)
    OV.addEventListener('click', e => {
      if (e.target !== OV) return;
      if (VIEW.mode === 'activity' && !VIEW.done) return;
      closeOverlay();
    });
    OV.querySelector('#mkqLang').onclick = () => {
      const nl = isAr() ? 'en' : 'ar';
      try { localStorage.setItem('bunyanLang', nl); } catch (e) {}
      if (typeof window.setLang === 'function') window.setLang(nl);
      else { document.documentElement.lang = nl; document.documentElement.dir = nl === 'ar' ? 'rtl' : 'ltr'; }
      renderCurrent();
    };
  }
  function openOverlay() { ensureOverlay(); OV.classList.add('open'); OV.scrollTop = 0; }
  function closeOverlay() { stopCatch(); OV && OV.classList.remove('open'); refreshBanner(); }
  function setLangBtn() { const b = OV && OV.querySelector('#mkqLang'); if (b) b.textContent = isAr() ? 'EN' : 'عربي'; }

  /* ════════ NAV STATE ════════ */
  let VIEW = { mode: 'home' };           // home | activity | panel
  let CUR;                                // current context (corner/journey/stations)
  let GENCACHE = {};                      // mode+level → [activities]
  let LEARN_MODE = false;                  // false = Journey Test (questions) · true = Learn-with-Anous (activities)
  function cacheKey(level) { return (LEARN_MODE ? 'L:' : 'T:') + level; }
  let CATCH_TIMER = null;                  // timed-activity interval handle
  function stopCatch() { if (CATCH_TIMER) { clearInterval(CATCH_TIMER); CATCH_TIMER = null; } }
  function renderCurrent() {
    setLangBtn();
    if (VIEW.mode === 'home') renderHome();
    else if (VIEW.mode === 'panel') renderPanel();
    else if (VIEW.mode === 'activity') renderActivity();
  }

  const LV = {
    beginner: { ar: 'مبتدئ', en: 'Beginner', ic: '🌱', age: '٤–٧', ageEn: 'ages 4–7' },
    intermediate: { ar: 'متوسط', en: 'Intermediate', ic: '🌿', age: '٨–١١', ageEn: 'ages 8–11' },
    advanced: { ar: 'متقدم', en: 'Advanced', ic: '🌳', age: '١٢–١٤', ageEn: 'ages 12–14' },
  };

  function buildActs(level) {
    return (LEARN_MODE && window.QUIZ_GEN.buildAcademyLevel)
      ? window.QUIZ_GEN.buildAcademyLevel(CUR.stations, level)
      : window.QUIZ_GEN.buildLevel(CUR.stations, level, 5);
  }
  function levelActs(level) {
    const k = cacheKey(level);
    if (!GENCACHE[k]) GENCACHE[k] = buildActs(level);
    return GENCACHE[k];
  }

  /* ── HOME: levels + activities + journey ring ── */
  function renderHome() {
    const jt = CUR.journeyTitle;
    OV.querySelector('#mkqTitle').textContent = (LEARN_MODE ? (isAr() ? '🎮 تعلّم مع أنوس: ' : '🎮 Learn: ') : (isAr() ? '🎯 اختبار: ' : '🎯 Test: ')) + tx(jt);
    const js = journeyScore(CUR.corner, CUR.journey);
    let html = '';
    ['beginner', 'intermediate', 'advanced'].forEach(level => {
      const acts = levelActs(level);
      const ls = levelScore(CUR.corner, CUR.journey, level);
      html += `<div class="mkq-lvl"><div class="mkq-lvl-h"><span class="ic">${LV[level].ic}</span>
        <span class="nm">${isAr() ? 'المستوى ' + LV[level].ar : LV[level].en + ' level'}<span class="mkq-age">${isAr() ? LV[level].age + ' سنة' : LV[level].ageEn}</span></span>
        <span class="sc">${ls === null ? '—' : round(ls) + '%'}</span></div><div class="mkq-acts">`;
      acts.forEach((a, i) => {
        const sc = (((store()[CUR.corner] || {})[CUR.journey] || {})[level] || {})[i];
        const pass = sc !== undefined && sc >= PASS;
        html += `<div class="mkq-act ${pass ? 'pass' : ''}" data-lvl="${level}" data-i="${i}">
          <span class="ai">${a.icon || '❓'}</span><span class="at">${tx(a.title)}</span>
          <span class="as ${pass ? 'pass' : ''}">${sc === undefined ? (isAr() ? 'ابدأ' : 'Start') : sc + '%'}</span></div>`;
      });
      html += `</div></div>`;
    });
    html += `<div class="mkq-foot">
      <button class="mkq-btn g" id="mkqPanelBtn">${isAr() ? '🏅 درجاتي والجوائز' : '🏅 My scores & rewards'}</button></div>
      <div class="mkq-note">${isAr() ? 'كل المستويات مفتوحة · اجمَع ' + PASS + '٪ في الركن لِتفتح ٥ أنشطة من أنوس' : 'All levels open · reach ' + PASS + '% in the corner to unlock 5 Anous activities'}</div>`;
    BODY.innerHTML = html;
    recordOffered();
    BODY.querySelectorAll('.mkq-act').forEach(el => el.onclick = () => startActivity(el.dataset.lvl, +el.dataset.i));
    BODY.querySelector('#mkqPanelBtn').onclick = () => { VIEW = { mode: 'panel' }; renderPanel(); };
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* ── ACTIVITY runner ── */
  function startActivity(level, i) {
    stopCatch();
    const a = levelActs(level)[i];
    VIEW = { mode: 'activity', level, i, a, q: 0, correct: 0, wrong: 0, answered: false, done: false };
    renderActivity();
  }
  function finishActivityWith(pct) {
    const v = VIEW; stopCatch(); v.done = true; v.pct = round(pct);
    if (!LEARN_MODE) setActivityScore(CUR.corner, CUR.journey, v.level, v.i, v.pct);
    v.newlyUnlocked = refreshUnlock(CUR.corner);
    renderActivityResult();
  }
  function finishActivity(total) {
    const v = VIEW; v.done = true;
    const pct = total ? round(v.correct / total * 100) : 0; v.pct = pct;
    setActivityScore(CUR.corner, CUR.journey, v.level, v.i, pct);
    const newly = refreshUnlock(CUR.corner);
    v.newlyUnlocked = newly;
    renderActivity();
  }

  function renderActivity() {
    const v = VIEW, a = v.a;
    OV.querySelector('#mkqTitle').textContent = (a.icon || '') + ' ' + tx(a.title);
    if (v.done) return renderActivityResult();
    switch (a.type) {
      case 'match': return renderMatch();
      case 'memory': return renderMemory();
      case 'truefalse': return renderTrueFalse();
      case 'sort': return renderSort();
      case 'catch': return renderCatch();
      case 'order': return renderOrder();
      default: return renderQuestion(); // mcq | maze | fill
    }
  }

  function backHome() { stopCatch(); VIEW = { mode: 'home' }; renderHome(); }

  function renderActivityResult() {
    const v = VIEW;
    let cele = '';
    if (v.newlyUnlocked) cele = `<div class="mkq-cele">🎉 ${isAr() ? 'مبارك! تخطّيتَ ٧٥٪ في الركن — فُتِحت لك ٥ أنشطة من أنوس!' : 'Congrats! You passed 75% in this corner — 5 Anous activities unlocked!'}</div>`;
    const msg = v.pct >= PASS ? (isAr() ? 'أحسنت! نتيجة رائعة' : 'Great job!') : (isAr() ? 'محاولة جيدة — أعِد لِتتحسّن' : 'Good try — replay to improve');
    BODY.innerHTML = `<div class="mkq-ring" style="--p:${v.pct}"><i>${v.pct}%</i></div>
      <div class="mkq-note" style="font-size:1rem;font-weight:800">${msg}</div>${cele}
      <div class="mkq-foot">
        <button class="mkq-btn p" id="mkqRetry">${isAr() ? '🔄 إعادة' : '🔄 Retry'}</button>
        <button class="mkq-btn g" id="mkqNext">${isAr() ? 'النشاط التالي ←' : 'Next activity →'}</button>
        <button class="mkq-btn o" id="mkqHome">${isAr() ? 'رجوع' : 'Back'}</button>
      </div>`;
    BODY.querySelector('#mkqRetry').onclick = () => { GENCACHE[cacheKey(v.level)] = buildActs(v.level); startActivity(v.level, v.i); };
    BODY.querySelector('#mkqNext').onclick = () => {
      const acts = levelActs(v.level);
      if (v.i + 1 < acts.length) startActivity(v.level, v.i + 1);
      else backHome();
    };
    BODY.querySelector('#mkqHome').onclick = backHome;
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* MCQ + MAZE share question rendering; maze adds a track.
     Now with free Prev/Next navigation + a Finish step (no auto-advance),
     and answers are locked once chosen so revisiting can't change the score. */
  function renderQuestion() {
    const v = VIEW, a = v.a, qs = a.questions, total = qs.length, q = qs[v.q];
    v.answers = v.answers || {};
    const chosen = v.answers[v.q];
    const answered = chosen !== undefined;
    const answeredCount = Object.keys(v.answers).length;

    let track = '';
    if (a.type === 'maze') {
      track = `<div class="mkq-track">` + qs.map((_, k) => {
        const ans = v.answers[k], done = ans !== undefined, miss = done && ans !== qs[k].correct;
        const st = k === v.q ? 'cur' : (done ? (miss ? 'miss' : 'done') : '');
        const mark = k === v.q ? '\ud83d\udeb6' : (done ? (miss ? '\u2715' : '\u2713') : (k + 1));
        return `<span class="mkq-step ${st}" data-jump="${k}">${mark}</span>`;
      }).join('') + `<span class="mkq-step ${answeredCount >= total ? 'done' : ''}">🏁</span></div>`;
    }
    const isAyah = /[﴿]/.test(tx(q.q));
    BODY.innerHTML = `${track}
      <div class="mkq-prog"><span>${isAr() ? 'سؤال' : 'Q'} ${v.q + 1} / ${total}</span><span>${isAr() ? 'أُجِبَ: ' : 'Answered: '}${answeredCount}/${total}</span></div>
      <div class="mkq-q ${isAyah ? 'mkq-ayah' : ''}">${tx(q.q)}</div>
      <div class="mkq-opts" id="mkqOpts">${q.options.map((o, k) => `<div class="mkq-opt ${/[﴿]/.test(tx(o)) ? 'mkq-ayah' : ''}" data-k="${k}">${tx(o)}</div>`).join('')}</div>
      <div class="mkq-qhint" id="mkqQHint"></div>
      <div class="mkq-foot" id="mkqQnav"></div>`;

    const opts = [...BODY.querySelectorAll('.mkq-opt')];
    if (answered) {
      opts.forEach(x => x.classList.add('dim'));
      opts[q.correct].classList.remove('dim'); opts[q.correct].classList.add('right');
      if (chosen !== q.correct) { opts[chosen].classList.remove('dim'); opts[chosen].classList.add('wrong'); }
    }
    opts.forEach(o => o.onclick = () => {
      if (v.answers[v.q] !== undefined) return;     // locked once answered
      v.answers[v.q] = +o.dataset.k;
      renderQuestion();                              // show locked state + reveal nav
    });

    // jump via the maze track to any answered question or the current frontier
    BODY.querySelectorAll('.mkq-step[data-jump]').forEach(s => s.onclick = () => {
      const k = +s.dataset.jump;
      if (k <= Object.keys(v.answers).length && k < total) { v.q = k; renderQuestion(); }
    });

    const allDone = answeredCount >= total, isLast = v.q === total - 1;
    const prevTxt = isAr() ? '→ السابق' : '← Prev';
    const nextTxt = isAr() ? 'التالي ←' : 'Next →';
    const finTxt  = isAr() ? 'إنهاء الاختبار ✓' : 'Finish ✓';
    let btns = `<button class="mkq-btn o" id="qPrev" ${v.q === 0 ? 'disabled' : ''}>${prevTxt}</button>`;
    if (!isLast) btns += `<button class="mkq-btn p" id="qNext">${nextTxt}</button>`;
    if (allDone || isLast) btns += `<button class="mkq-btn g" id="qFinish" ${allDone ? '' : 'disabled'}>${finTxt}</button>`;
    BODY.querySelector('#mkqQnav').innerHTML = btns;

    if (isLast && !allDone) {
      BODY.querySelector('#mkqQHint').textContent = isAr()
        ? 'أجِب عن جميع الأسئلة لِتُنهِيَ الاختبار — استخدم «السابق» للعودة.'
        : 'Answer every question to finish — use “Prev” to go back.';
    }

    const goPrev = BODY.querySelector('#qPrev'); if (goPrev) goPrev.onclick = () => { if (v.q > 0) { v.q--; renderQuestion(); } };
    const goNext = BODY.querySelector('#qNext'); if (goNext) goNext.onclick = () => { if (v.q < total - 1) { v.q++; renderQuestion(); } };
    const goFin  = BODY.querySelector('#qFinish'); if (goFin) goFin.onclick = () => {
      if (Object.keys(v.answers).length < total) return;
      v.correct = qs.filter((qq, idx) => v.answers[idx] === qq.correct).length;
      v.wrong = total - v.correct;
      if (a.type === 'maze') { v.mazeMiss = {}; qs.forEach((qq, idx) => { if (v.answers[idx] !== qq.correct) v.mazeMiss[idx] = 1; }); }
      finishActivity(total);
    };
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* MATCH */
  function renderMatch() {
    const v = VIEW, a = v.a, pairs = a.pairs;
    const shuf = arr => arr.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);
    const left = shuf(pairs.map((p, i) => ({ side: 'L', i, txt: p.a })));
    const right = shuf(pairs.map((p, i) => ({ side: 'R', i, txt: p.b })));
    const col = arr => arr.map(it => `<div class="mkq-mi ${/[﴿]/.test(tx(it.txt)) ? 'mkq-ayah' : ''}" data-side="${it.side}" data-i="${it.i}">${tx(it.txt)}</div>`).join('');
    BODY.innerHTML = `<div class="mkq-q" style="font-size:1rem">${tx(a.prompt)}</div>
      <div class="mkq-mcols"><div class="mkq-mcol" id="mkqL">${col(left)}</div><div class="mkq-mcol" id="mkqR">${col(right)}</div></div>`;
    let sel = null, matched = 0, wrong = 0;
    const items = [...BODY.querySelectorAll('.mkq-mi')];
    items.forEach(el => el.onclick = () => {
      if (el.classList.contains('matched')) return;
      if (!sel) { sel = el; el.classList.add('sel'); return; }
      if (sel === el) { el.classList.remove('sel'); sel = null; return; }
      if (sel.dataset.side === el.dataset.side) { sel.classList.remove('sel'); sel = el; el.classList.add('sel'); return; }
      if (sel.dataset.i === el.dataset.i) {
        sel.classList.remove('sel'); sel.classList.add('matched'); el.classList.add('matched'); sel = null; matched++;
        if (matched === pairs.length) {
          const v2 = VIEW; v2.correct = pairs.length; v2.wrong = wrong;
          v2.pct = round(pairs.length / (pairs.length + wrong) * 100);
          v2.done = true; setActivityScore(CUR.corner, CUR.journey, v2.level, v2.i, v2.pct);
          v2.newlyUnlocked = refreshUnlock(CUR.corner);
          setTimeout(renderActivityResult, 450);
        }
      } else {
        wrong++; const a1 = sel, b1 = el; a1.classList.add('wrong'); b1.classList.add('wrong');
        setTimeout(() => { a1.classList.remove('wrong', 'sel'); b1.classList.remove('wrong'); }, 360); sel = null;
      }
    });
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* ════════ NEW ACADEMY ACTIVITY RENDERERS ════════ */

  /* MEMORY — flip two tiles, find each card with its meaning */
  function renderMemory() {
    const v = VIEW, a = v.a, pairs = a.pairs;
    if (!v.memTiles) {
      const tiles = [];
      pairs.forEach((p, i) => { tiles.push({ pid: i, txt: p.a }); tiles.push({ pid: i, txt: p.b }); });
      v.memTiles = tiles.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);
      v.flipped = []; v.matched = {}; v.wrong = 0; v.lock = false;
    }
    BODY.innerHTML = `<div class="mkq-q" style="font-size:.98rem">${tx(a.prompt)}</div>
      <div class="mkq-mem">${v.memTiles.map((c, idx) => {
        const m = v.matched[idx], f = v.flipped.includes(idx), open = m || f;
        return `<button class="mkq-memc ${m ? 'matched' : ''} ${open ? 'show' : ''}" data-idx="${idx}" ${m ? 'disabled' : ''}>
          <span class="mc-face ${open && /[\uFD3E\uFD3F\u0671-\u06FF].*\uFD3F|﴿/.test(tx(c.txt)) ? 'mkq-ayah' : ''}">${open ? tx(c.txt) : '❓'}</span></button>`;
      }).join('')}</div>
      <div class="mkq-note">${isAr() ? 'محاولات خاطئة: ' : 'Misses: '}<b>${v.wrong}</b></div>`;
    BODY.querySelectorAll('.mkq-memc').forEach(el => el.onclick = () => {
      const idx = +el.dataset.idx;
      if (v.lock || v.matched[idx] || v.flipped.includes(idx) || v.flipped.length >= 2) return;
      v.flipped.push(idx);
      if (v.flipped.length === 2) {
        const [x, y] = v.flipped;
        if (v.memTiles[x].pid === v.memTiles[y].pid) {
          v.matched[x] = v.matched[y] = true; v.flipped = []; renderMemory();
          if (Object.keys(v.matched).length === v.memTiles.length) {
            const pct = round(pairs.length / (pairs.length + v.wrong) * 100);
            setTimeout(() => finishActivityWith(pct), 420);
          }
        } else {
          v.wrong++; v.lock = true; renderMemory();
          setTimeout(() => { v.flipped = []; v.lock = false; renderMemory(); }, 850);
        }
      } else { renderMemory(); }
    });
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* TRUE / FALSE — one statement at a time */
  function renderTrueFalse() {
    const v = VIEW, a = v.a, items = a.items, total = items.length;
    if (v.tfI === undefined) { v.tfI = 0; v.correct = 0; v.tfAns = false; }
    const it = items[v.tfI], ayah = /[﴿]/.test(tx(it.text));
    BODY.innerHTML = `<div class="mkq-prog"><span>${isAr() ? 'عبارة' : 'Statement'} ${v.tfI + 1} / ${total}</span><span>${isAr() ? 'صحيح: ' : 'Correct: '}${v.correct}</span></div>
      <div class="mkq-tf-stmt ${ayah ? 'mkq-ayah' : ''}">${tx(it.text)}</div>
      <div class="mkq-tf-btns">
        <button class="mkq-tf-btn t" data-v="true">✅ ${isAr() ? 'صَحّ' : 'True'}</button>
        <button class="mkq-tf-btn f" data-v="false">❌ ${isAr() ? 'خَطأ' : 'False'}</button>
      </div>`;
    BODY.querySelectorAll('.mkq-tf-btn').forEach(b => b.onclick = () => {
      if (v.tfAns) return; v.tfAns = true;
      const ok = (b.dataset.v === 'true') === it.answer;
      if (ok) v.correct++;
      BODY.querySelectorAll('.mkq-tf-btn').forEach(x => {
        x.classList.add('dim');
        if ((x.dataset.v === 'true') === it.answer) x.classList.add('right');
        else if (x === b) x.classList.add('wrong');
      });
      setTimeout(() => { v.tfI++; v.tfAns = false; if (v.tfI >= total) finishActivityWith(round(v.correct / total * 100)); else renderTrueFalse(); }, ok ? 650 : 1100);
    });
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* SORT — drop one card at a time into the correct basket */
  function renderSort() {
    const v = VIEW, a = v.a, cards = a.cards, total = cards.length;
    if (v.sortI === undefined) { v.sortI = 0; v.correct = 0; v.sortLock = false; }
    if (v.sortI >= total) return finishActivityWith(round(v.correct / total * 100));
    const c = cards[v.sortI], ayah = /[﴿]/.test(tx(c.text));
    BODY.innerHTML = `<div class="mkq-prog"><span>${isAr() ? 'بطاقة' : 'Card'} ${v.sortI + 1} / ${total}</span><span>${isAr() ? 'صحيح: ' : 'Correct: '}${v.correct}</span></div>
      <div class="mkq-sort-card ${ayah ? 'mkq-ayah' : ''}" id="sortCard">${tx(c.text)}</div>
      <div class="mkq-sort-baskets">${a.baskets.map(b => `<button class="mkq-basket" data-id="${b.id}">${tx(b.label)}</button>`).join('')}</div>`;
    BODY.querySelectorAll('.mkq-basket').forEach(b => b.onclick = () => {
      if (v.sortLock) return; v.sortLock = true;
      const ok = b.dataset.id === c.basket, card = BODY.querySelector('#sortCard');
      if (ok) { v.correct++; b.classList.add('right'); card.classList.add('ok'); }
      else { b.classList.add('wrong'); card.classList.add('no'); const cb = BODY.querySelector(`.mkq-basket[data-id="${c.basket}"]`); if (cb) cb.classList.add('right'); }
      setTimeout(() => { v.sortI++; v.sortLock = false; renderSort(); }, ok ? 560 : 1080);
    });
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* CATCH — timed: tap the right bobbing bubble before the bar empties */
  function renderCatch() {
    const v = VIEW, a = v.a, rounds = a.rounds, total = rounds.length;
    if (v.catchI === undefined) { v.catchI = 0; v.correct = 0; }
    stopCatch();
    if (v.catchI >= total) return finishActivityWith(round(v.correct / total * 100));
    const r = rounds[v.catchI], opts = r.options;
    BODY.innerHTML = `<div class="mkq-prog"><span>${isAr() ? 'جولة' : 'Round'} ${v.catchI + 1} / ${total}</span><span>${isAr() ? 'صحيح: ' : 'Correct: '}${v.correct}</span></div>
      <div class="mkq-catch-clue ${r.ayah ? 'mkq-ayah' : ''}">${tx(r.clue)}</div>
      <div class="mkq-timer"><i id="catchBar"></i></div>
      <div class="mkq-catch-arena">${opts.map((o, k) => `<button class="mkq-bubble" style="--bi:${k}" data-k="${k}">${tx(o)}</button>`).join('')}</div>`;
    const dur = 6500, t0 = Date.now(), bar = BODY.querySelector('#catchBar');
    v.catchAns = false;
    CATCH_TIMER = setInterval(() => {
      const el = Date.now() - t0, p = Math.max(0, 1 - el / dur);
      if (bar) bar.style.width = (p * 100) + '%';
      if (el >= dur && !v.catchAns) { stopCatch(); v.catchI++; renderCatch(); }
    }, 60);
    BODY.querySelectorAll('.mkq-bubble').forEach(b => b.onclick = () => {
      if (v.catchAns) return; v.catchAns = true; stopCatch();
      const k = +b.dataset.k, ok = opts[k].ar === r.correct.ar;
      if (ok) { v.correct++; b.classList.add('right'); }
      else { b.classList.add('wrong'); const ci = opts.findIndex(o => o.ar === r.correct.ar); const cb = BODY.querySelector(`.mkq-bubble[data-k="${ci}"]`); if (cb) cb.classList.add('right'); }
      BODY.querySelectorAll('.mkq-bubble').forEach(x => x.disabled = true);
      setTimeout(() => { v.catchI++; renderCatch(); }, ok ? 560 : 1080);
    });
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* ORDER — reorder with ▲▼, then check */
  function renderOrder() {
    const v = VIEW, a = v.a, items = a.items, total = items.length;
    if (!v.orderArr) {
      let sh = items.map((x, i) => i);
      do { sh = sh.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]); }
      while (total > 1 && sh.every((idx, pos) => items[idx].pos === pos));
      v.orderArr = sh; v.orderChecked = false;
    }
    const arr = v.orderArr;
    BODY.innerHTML = `<div class="mkq-q" style="font-size:.98rem">${tx(a.prompt)}</div>
      <div class="mkq-order">${arr.map((idx, pos) => {
        const it = items[idx], st = v.orderChecked ? (it.pos === pos ? 'okpos' : 'badpos') : '';
        return `<div class="mkq-order-row ${st}">
          <span class="mkq-order-n">${pos + 1}</span>
          <span class="mkq-order-t">${tx(it.text)}</span>
          <span class="mkq-order-btns">
            <button class="mkq-ud" data-d="-1" data-pos="${pos}" ${pos === 0 ? 'disabled' : ''}>▲</button>
            <button class="mkq-ud" data-d="1" data-pos="${pos}" ${pos === total - 1 ? 'disabled' : ''}>▼</button>
          </span></div>`;
      }).join('')}</div>
      <div class="mkq-foot"><button class="mkq-btn g" id="orderCheck">${isAr() ? 'تحقّق ✓' : 'Check ✓'}</button></div>`;
    BODY.querySelectorAll('.mkq-ud').forEach(b => b.onclick = () => {
      if (v.orderChecked) return;
      const p = +b.dataset.pos, np = p + (+b.dataset.d);
      if (np < 0 || np >= total) return;
      [arr[p], arr[np]] = [arr[np], arr[p]]; renderOrder();
    });
    BODY.querySelector('#orderCheck').onclick = () => {
      if (v.orderChecked) return;
      v.orderChecked = true;
      const correct = arr.filter((idx, pos) => items[idx].pos === pos).length;
      renderOrder();
      setTimeout(() => finishActivityWith(round(correct / total * 100)), 950);
    };
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* ── PANEL: corner scores + child % + rewards ── */
  /* unified per-corner stats card (medals · journeys · stations · certificates) */
  function cornerStatBlock(corner) {
    const reg = window.QUIZ_REG[corner]; if (!reg) return '';
    const totalJ = reg.journeys.length;
    let examPassed = 0;
    reg.journeys.forEach(j => { const s = journeyScore(corner, j.id); if (s !== null && s >= PASS) examPassed++; });
    // real station completion + completed journeys (from the shared journey registry)
    let stDone = null, stTotal = null, jDone = null, jCount = totalJ;
    try {
      if (window.MK_J && MK_J.cornerStats) {
        const cs = MK_J.cornerStats(corner);
        if (cs && cs.count) { stDone = cs.done; stTotal = cs.total; jDone = cs.journeysDone; jCount = cs.count; }
      }
    } catch (e) {}
    if (jDone === null) jDone = examPassed;          // fallback when registry not present
    const cell = (ic, lblAr, lblEn, x, y) =>
      `<div class="mkq-stat"><span class="ms-ic">${ic}</span><span class="ms-v">${x}<small>/${y}</small></span>
        <span class="ms-l">${isAr() ? lblAr : lblEn}</span></div>`;
    let cells = cell('🧭', 'الرحلات', 'Journeys', jDone, jCount);
    if (stTotal) cells += cell('📍', 'المحطات', 'Stations', stDone, stTotal);
    cells += cell('🏅', 'الأوسمة', 'Medals', jDone, jCount);
    cells += cell('📜', 'الشهادات', 'Certificates', examPassed, totalJ);
    return `<div class="mkq-stats">${cells}</div>`;
  }

  function renderPanel() {
    const reg = CUR.reg;
    refreshUnlock(CUR.corner); // reconcile unlock with current corner score
    OV.querySelector('#mkqTitle').textContent = (isAr() ? '🏅 درجاتي — ' : '🏅 My scores — ') + tx(reg.title);
    const cs = cornerScore(CUR.corner), cp = childPct();
    let bars = reg.journeys.map(j => {
      const s = journeyScore(CUR.corner, j.id);
      return `<div class="mkq-bar"><span class="nm">${j.icon} ${tx(j.title)}</span>
        <span class="tr"><span class="fl" style="width:${s === null ? 0 : round(s)}%"></span></span>
        <span class="vl">${s === null ? '—' : round(s) + '%'}</span></div>`;
    }).join('');
    const u = unlocks()[CUR.corner];
    const rewards = reg.rewards.map(r => {
      const open = !!u;
      const href = open ? (ANOUS + r.href) : null;
      const tag = open ? '' : '🔒 ';
      const inner = `<span class="ri">${open ? r.icon : '🔒'}</span><span class="rt">${tag}${tx(r.t)}</span>`;
      return open ? `<a class="mkq-rw" href="${href}">${inner}</a>` : `<div class="mkq-rw lock">${inner}</div>`;
    }).join('');
    BODY.innerHTML = `
      <div class="mkq-ring" style="--p:${cs === null ? 0 : round(cs)}"><i>${cs === null ? '—' : round(cs) + '%'}</i></div>
      <div class="mkq-note" style="font-weight:800;font-size:1rem">${isAr() ? 'درجة الركن' : 'Corner score'}${cs !== null && cs >= PASS ? ' ✓' : ''}</div>
      ${cornerStatBlock(CUR.corner)}
      <div style="display:flex;justify-content:space-between;align-items:center;margin:1rem 0 .5rem">
        <span style="font-weight:900;color:var(--mkq-gold)">${isAr() ? '🎁 جوائز أنوس (٥ أنشطة)' : '🎁 Anous rewards (5)'}</span>
        <span style="font-size:.8rem;opacity:.85">${u ? (isAr() ? 'مفتوحة ✓' : 'Unlocked ✓') : (isAr() ? 'تحتاج ٧٥٪' : 'Need 75%')}</span></div>
      <div class="mkq-rewards">${rewards}</div>
      <div class="mkq-note">${isAr() ? 'نسبتك الكلية في كل الأركان' : 'Your overall percentage across all corners'}: <b style="color:var(--mkq-gold)">${cp === null ? '—' : round(cp) + '%'}</b></div>
      <div class="mkq-foot"><button class="mkq-btn o" id="mkqBack">${isAr() ? '← رجوع للاختبار' : '← Back to test'}</button></div>`;
    const back = BODY.querySelector('#mkqBack');
    if (back) back.onclick = () => { VIEW = { mode: 'home' }; renderHome(); };
    SHEET.scrollTop = 0; OV.scrollTop = 0;
  }

  /* ════════ BANNER (permanent, in journey map) ════════ */
  let BANNER;
  function refreshBanner() {
    if (!BANNER) return;
    const js = journeyScore(CUR.corner, CUR.journey);
    const sc = BANNER.querySelector('.mkq-b-score');
    if (sc) sc.textContent = js === null ? '' : (isAr() ? 'نتيجتك: ' : 'Your score: ') + round(js) + '%';
  }
  function bannerSub() {
    if (isAr()) return '٣ مستويات · أسئلة تقيس معرفتَك بمحتوى الرحلة';
    return '3 levels · questions that measure your knowledge of the journey';
  }
  function bannerSubOld() {
    const rich = CUR.reg && CUR.reg.richProfile === 'academy';
    if (isAr()) return rich ? '٣ مستويات · ٩ أنشطة متنوّعة · ذاكرة وفرز وترتيب واصطياد' : '٣ مستويات · ٩ أنشطة · توصيل واختيار ومتاهة';
    return rich ? '3 levels · 9 varied games · memory, sort, order & catch' : '3 levels · 9 activities · match, MCQ & maze';
  }
  function bannerTitle() {
    return isAr() ? 'اختبار الرحلة' : 'Journey Test';
  }
  function bannerIcon() { return '🎯'; }
  function mountBanner() {
    const map = document.getElementById('map')
      || document.getElementById('viewTimeline') || document.getElementById('viewCats')
      || document.getElementById('stations'); if (!map) return;
    BANNER = document.createElement('div'); BANNER.className = 'mkq-banner';
    var __jm = (CUR.reg.journeys || []).find(function (j) { return j.id === CUR.journey; });
    var __canLearn = CUR.reg.richProfile === 'academy' && __jm && !__jm.noLearn;
    BANNER.innerHTML = `<div class="mkq-b-ic">${bannerIcon()}</div>
      <div class="mkq-b-txt">
        <b>${bannerTitle()}</b>
        <span>${bannerSub()}</span>
        <span class="mkq-b-score"></span>
      </div>
      <div class="mkq-b-actions">
        ${__canLearn ? `<button class="mkq-b-btn mkq-b-learn" type="button">${isAr() ? '🎮 ألعاب' : '🎮 Games'}</button>` : ''}
        <button class="mkq-b-btn mkq-b-test" type="button">${isAr() ? 'ابدأ ←' : 'Start →'}</button>
      </div>`;
    /* Default: the test banner sits right AFTER the stations. But on chapter
       corners the era certificate (#eraCert) renders below the stations, and the
       exam must come BEFORE that certificate — so anchor it just before #eraCert. */
    const eraCert = document.getElementById('eraCert');
    if (eraCert && eraCert.parentNode) {
      eraCert.parentNode.insertBefore(BANNER, eraCert);
    } else {
      map.parentNode.insertBefore(BANNER, map.nextSibling);
    }
    mountCertCta(map);                                       // certificate right after the test
    BANNER.querySelector('.mkq-b-test').onclick = () => { LEARN_MODE = false; VIEW = { mode: 'home' }; openOverlay(); renderCurrent(); };
    var __lb = BANNER.querySelector('.mkq-b-learn'); if (__lb) __lb.onclick = () => { LEARN_MODE = true; VIEW = { mode: 'home' }; openOverlay(); renderCurrent(); };
    refreshBanner();
    /* No auto-open: a journey page ALWAYS loads to its stations. The test (and the
       Anous games) open only when the child taps a button here — never by itself.
       Any leftover ?test=1 / ?learn=1 in the URL is intentionally ignored. */
    // keep banner text in sync if the page toggles language
    document.querySelectorAll('.lang button, #btnAr, #btnEn').forEach(b => b.addEventListener('click', () => setTimeout(() => { rebuildBannerText(); }, 30)));
  }
  /* universal certificate CTA — placed right after the test banner, triggers the
     journey's own certificate (the finish cup or the collection-cert card) */
  let CERTCTA;
  function certTrigger() { return document.getElementById('cupBtn') || document.getElementById('collCert') || document.querySelector('.coll-cert') || null; }
  function mountCertCta(map) {
    if (document.getElementById('mkqCertCta')) return;
    if (!certTrigger()) return;
    CERTCTA = document.createElement('button');
    CERTCTA.id = 'mkqCertCta'; CERTCTA.className = 'mkq-certcta';
    CERTCTA.innerHTML = `<span class="mkq-cc-ic">📜</span><span class="mkq-cc-tx"><b></b><span></span></span><span class="mkq-cc-go"></span>`;
    BANNER.parentNode.insertBefore(CERTCTA, BANNER.nextSibling);
    CERTCTA.onclick = () => { const tg = certTrigger(); if (tg) tg.click(); };
    rebuildCertText();
  }
  function rebuildCertText() {
    if (!CERTCTA) return;
    CERTCTA.querySelector('b').textContent = isAr() ? 'شهادةُ الرحلة' : 'Journey Certificate';
    CERTCTA.querySelector('.mkq-cc-tx span').textContent = isAr() ? 'اطبَع شهادتَك بعد إتمام المحطات والاختبار' : 'Print your certificate after the stations & test';
    CERTCTA.querySelector('.mkq-cc-go').textContent = isAr() ? 'استلِم ←' : 'Get it →';
  }

  function rebuildBannerText() {
    if (!BANNER) return;
    BANNER.querySelector('.mkq-b-ic').textContent = bannerIcon();
    BANNER.querySelector('b').textContent = bannerTitle();
    BANNER.querySelectorAll('span')[0].textContent = bannerSub();
    var __t = BANNER.querySelector('.mkq-b-test'); if (__t) __t.textContent = isAr() ? 'ابدأ ←' : 'Start →';
    var __l = BANNER.querySelector('.mkq-b-learn'); if (__l) __l.textContent = isAr() ? '🎮 ألعاب' : '🎮 Games';
    rebuildCertText();
    refreshBanner();
  }

  /* ════════ HUB (corner index page) ════════ */
  function mountHub() {
    const anchor = document.querySelector('.feature-grid') || document.querySelector('.sections') || document.querySelector('.hub-grid') || document.querySelector('main') || document.querySelector('.wrap') || document.body;
    const sec = document.createElement('div');
    sec.style.cssText = 'max-width:1000px;margin:2.5rem auto 1rem;padding:1.6rem;border:1.5px solid var(--mkq-gold);border-radius:1.4rem;background:rgba(255,255,255,.05);text-align:center';
    sec.innerHTML = `<div style="font-size:2.4rem">🏅</div>
      <div style="font-weight:900;font-size:1.3rem;color:var(--mkq-gold);margin:.3rem 0">${isAr() ? 'اختبارات ' + CUR.reg.title.ar : CUR.reg.title.en + ' Tests'}</div>
      <div style="opacity:.85;margin-bottom:1rem">${isAr() ? 'لكل رحلة اختبار من ٣ مستويات. اجمَع ٧٥٪ في الركن لِتفتح ٥ أنشطة من أنوس.' : 'Each journey has a 3-level test. Reach 75% to unlock 5 Anous activities.'}</div>
      <button class="mkq-btn g" id="mkqHubBtn">${isAr() ? '🏅 درجاتي والجوائز' : '🏅 My scores & rewards'}</button>`;
    // insert right after the cards grid, inside the same container
    if (anchor === document.body) document.body.appendChild(sec);
    else anchor.parentNode.insertBefore(sec, anchor.nextSibling);
    sec.querySelector('#mkqHubBtn').onclick = () => { VIEW = { mode: 'panel' }; openOverlay(); renderPanel(); };
    if (CUR.reg.richProfile === 'academy') mountLearnCard(anchor);
  }

  /* "🎮 تعلّم مع أنوس" — DISABLED (owner request, Jun 2026).
     Every station already carries its exams + the "🎁 5 Anous activities"
     reward strip inside the corner-score card, so this launcher was redundant
     and its async injection caused the score card to blink on corner entry.
     To restore: delete the early `return;` below. */
  function mountLearnCard(anchor) {
    return;
    /* eslint-disable no-unreachable */
    const reg = CUR.reg, ar = isAr();
    const jx = (reg.journeys || []).filter(j => !j.noLearn);
    if (!jx.length) return;
    const folder = reg.folder, page = reg.page, lbase = reg.learnBase || '';
    const link = j => folder ? (lbase + j.id + '.html?learn=1') : (page + '.html?j=' + j.id + '&learn=1');
    const card = document.createElement('div');
    card.id = 'mkqLearnCard';
    card.style.cssText = 'max-width:1000px;margin:1.2rem auto;padding:1.6rem;border:2px solid #7E5BD0;border-radius:1.4rem;background:linear-gradient(160deg,rgba(126,91,208,.18),rgba(255,255,255,.03))';
    card.innerHTML = `<div style="text-align:center"><div style="font-size:2.4rem">🎮</div>
      <div style="font-weight:900;font-size:1.35rem;color:#C9B6F2;margin:.3rem 0">${ar ? 'تعلّم مع أنوس' : 'Learn with Anous'}</div>
      <div style="opacity:.85;margin-bottom:1.1rem">${ar ? 'أنشطةٌ تفاعليّةٌ ممتعة على ٣ مستويات — اختَر رحلةً وابدأِ اللعب والتعلّم!' : 'Fun interactive activities across 3 levels — pick a journey and start playing & learning!'}</div></div>
      <div class="mkq-learn-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.7rem">
        ${jx.map(j => `<a href="${link(j)}" style="display:flex;align-items:center;gap:.5rem;text-decoration:none;background:rgba(255,255,255,.06);border:1.5px solid rgba(126,91,208,.4);border-radius:1rem;padding:.7rem .8rem;color:inherit;font-weight:800;font-family:'Tajawal',sans-serif">
          <span style="font-size:1.4rem">${j.icon || '🎯'}</span><span style="flex:1;font-size:.9rem">${ar ? j.title.ar : j.title.en}</span><span style="opacity:.6">←</span></a>`).join('')}
        ${(reg.extraLearn || []).map(x => `<a href="${x.href}" style="display:flex;align-items:center;gap:.5rem;text-decoration:none;background:rgba(255,255,255,.06);border:1.5px solid rgba(126,91,208,.4);border-radius:1rem;padding:.7rem .8rem;color:inherit;font-weight:800;font-family:'Tajawal',sans-serif">
          <span style="font-size:1.4rem">${x.icon || '🎯'}</span><span style="flex:1;font-size:.9rem">${ar ? x.title.ar : x.title.en}</span><span style="opacity:.6">←</span></a>`).join('')}
      </div>`;
    anchor.parentNode.insertBefore(card, anchor.nextSibling);
  }

  /* ════════ PUBLIC API — open a specific journey's test/learn in place ════════
     Lets a page with its own test buttons (e.g. social.html) open the overlay
     directly, instead of doing a full page reload via ?test=1. */
  function resolveCorner() {
    const path = location.pathname, file = (path.split('/').pop() || '').replace(/\.html?$/i, '');
    for (const corner in window.QUIZ_REG) {
      const reg = window.QUIZ_REG[corner];
      if (reg.page && file === reg.page) return { corner, reg };
      if (reg.folder && path.includes('/' + reg.folder + '/')) return { corner, reg };
      if (file === reg.index) return { corner, reg };
    }
    return null;
  }
  function curForJourney(corner, reg, journeyId) {
    const jmeta = reg.journeys.find(j => j.id === journeyId);
    if (!jmeta) return null;
    let stations = null;
    if (reg.stationsGlobal) { const g = window[reg.stationsGlobal]; const j = g && g[journeyId]; if (j && Array.isArray(j.stations)) stations = j.stations; }
    if (!stations) stations = findStations({ journey: journeyId, stationsGlobal: reg.stationsGlobal });
    if (!stations || stations.length < 4) return null;
    return { corner, reg, journey: journeyId, journeyTitle: jmeta.title, stations };
  }
  function openJourney(journeyId, learn) {
    const cr = resolveCorner(); if (!cr) return false;
    const cur = curForJourney(cr.corner, cr.reg, journeyId); if (!cur) return false;
    injectCSS();
    GENCACHE = {};                       // journey-scoped: regenerate so journeys don't share questions
    CUR = cur; LEARN_MODE = !!learn; VIEW = { mode: 'home' };
    ensureOverlay(); openOverlay(); renderCurrent();
    return true;
  }
  window.MKQ = window.MKQ || {};
  window.MKQ.openTest  = function (journeyId) { return openJourney(journeyId, false); };
  window.MKQ.openLearn = function (journeyId) { return openJourney(journeyId, true); };

  /* ════════ START ════════ */
  function start() {
    const c = ctx();
    if (!c.corner || !c.reg) return;          // not a quiz-enabled corner page
    reconcileAllUnlocks();                     // self-heal: revoke any stale/invalid unlocks
    injectCSS();
    if (c.isHub) {
      CUR = { corner: c.corner, reg: c.reg };
      mountHub();
      return;
    }
    if (!c.journey) return;
    const stations = findStations(c);
    if (!stations || stations.length < 4) return;
    const jmeta = c.reg.journeys.find(j => j.id === c.journey);
    CUR = { corner: c.corner, reg: c.reg, journey: c.journey, journeyTitle: jmeta.title, stations };
    if (window.MKQ_NO_AUTOBANNER) {
      // Page supplies its own test entry points (e.g. social.html buttons that
      // call MKQ.openTest()). NEVER auto-open on load — the test must only open
      // when the child taps a button. We deliberately ignore ?test=/?learn= here
      // so entering the corner can't pop the test by itself.
      return;
    }
    mountBanner();
    // hubless single-page rich corners (e.g. sport) have no separate index hub,
    // so surface the "تعلّم مع أنوس" learn card here, right after the test banner.
    if (c.reg.richProfile === 'academy' && !c.reg.index && BANNER) {
      try { mountLearnCard(CERTCTA || BANNER); } catch (e) {}
    }
  }
})();
