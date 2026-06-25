// engine/progress.js — shared save / XP / status (works across all pages via localStorage)
// All stations are open to explore freely — no locking. The first incomplete one
// is marked "active" (highlighted as the suggested next step); the rest are "open".
window.Progress = (function(){
  const KEY = 'hisn-save';
  let s = load();

  function load(){ try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch(e){ return null; } }
  function persist(){ localStorage.setItem(KEY, JSON.stringify(s)); }

  // First run: clean journey — the first station (Adam) is active, the rest unlock in order.
  function ensure(){
    if(!s){ s = { completed: {}, medals: [], lang:'ar' }; persist(); }
    s.completed = s.completed || {}; s.medals = s.medals || [];
    s.points = s.points || { k:{}, era:{}, max:{}, maxk:{} };
    s.points.max = s.points.max || {}; s.points.maxk = s.points.maxk || {};
    return s;
  }
  ensure();
  migrateMedalEras();

  const isDone = id => !!s.completed[id];
  const stars  = id => (s.completed[id] && s.completed[id].stars) || 0;

  function counts(era){
    return { done: era.nodes.filter(n => isDone(n.id)).length, total: era.nodes.length };
  }
  function statusInEra(era, nodeId){
    if(isDone(nodeId)) return 'done';
    const firstOpen = era.nodes.find(n => !isDone(n.id));
    return firstOpen && firstOpen.id === nodeId ? 'active' : 'open';
  }

  const totalDone = () => Object.keys(s.completed).length;
  const totalXp   = () => totalDone() * 50;
  const level     = () => Math.floor(totalXp()/200) + 1;
  const xpPct     = () => (totalXp() % 200) / 2;

  /* find which era a chapter belongs to (for tagging medals by corner) */
  function eraOf(chapterId){
    try {
      const C = window.HISN && window.HISN.chapters && window.HISN.chapters[chapterId];
      if(C && C.era) return C.era;                 // most reliable: the chapter's own era
      const E = window.HISN && window.HISN.eras; if(!E) return null;
      for(const id in E){
        const era = E[id];
        let nodes = era.nodes || [];
        if((!nodes || !nodes.length) && era.categories)
          nodes = era.categories.reduce((a,c)=>a.concat(c.heroes||[]),[]);
        if(nodes.some(n=>n && n.id===chapterId)) return id;
      }
    } catch(e){}
    return null;
  }

  /* Backfill `era` on medals saved before tagging existed, using completed
  /* Backfill `era` on medals saved before tagging existed. Uses the definitive
     Pure-Heart classifier (HISN.isHeartMedal — title/id allowlist, no chapter
     files needed) so legacy heart medals leave the Fortress hall. */
  function migrateMedalEras(){
    try {
      if(!s.medals || !s.medals.length) return;
      let changed = false;
      s.medals.forEach(m=>{
        if(m.era) return;
        if(window.HISN && typeof HISN.isHeartMedal==='function' && HISN.isHeartMedal(m)){ m.era='heart'; changed=true; }
      });
      if(changed) persist();
    } catch(e){}
  }

  function grant(chapterId, opts){
    opts = opts || {};
    s.completed[chapterId] = { stars: opts.stars || 3 };
    if(opts.medal && !s.medals.find(m => m.icon === opts.medal.icon && (m.title&&opts.medal.title&&(m.title.ar||m.title)===(opts.medal.title.ar||opts.medal.title)))){
      const mm = Object.assign({}, opts.medal);
      mm.id = chapterId;                                // store source chapter for reliable classification
      mm.era = opts.era || eraOf(chapterId) || null;   // tag the medal's corner/era
      s.medals.push(mm);
    }
    persist();
  }

  function setLang(l){ s.lang = l; persist(); }
  const lang = () => s.lang || 'ar';

  function addPoints(eraId, key, pts){
    ensure();
    if(s.points.k[key]) return s.points.era[eraId] || 0;     // never double-count
    s.points.k[key] = 1;
    s.points.era[eraId] = (s.points.era[eraId] || 0) + (pts || 10);
    persist();
    return s.points.era[eraId];
  }
  const eraPoints   = eraId => (s.points && s.points.era[eraId]) || 0;
  const totalPoints = () => s.points ? Object.values(s.points.era).reduce((a,b)=>a+b,0) : 0;

  function registerMax(eraId, ctxKey, amount){
    ensure();
    if(s.points.maxk[ctxKey]) return s.points.max[eraId] || 0;   // count a context only once
    s.points.maxk[ctxKey] = amount;
    s.points.max[eraId] = (s.points.max[eraId] || 0) + (amount || 0);
    persist();
    return s.points.max[eraId];
  }
  const eraMax   = eraId => (s.points && s.points.max[eraId]) || 0;
  const totalMax = () => s.points ? Object.values(s.points.max).reduce((a,b)=>a+b,0) : 0;

  return { isDone, stars, counts, statusInEra, totalXp, level, xpPct, grant, medals:()=>s.medals, setLang, lang, addPoints, eraPoints, totalPoints, registerMax, eraMax, totalMax, _save:()=>s };
})();
