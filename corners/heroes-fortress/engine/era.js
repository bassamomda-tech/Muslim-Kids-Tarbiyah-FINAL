/* engine/era.js — ONE era page (reads ?era=prophets|seerah|heroes) */
(function(){
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const eraId = params.get('era') || 'prophets';
  // These standalone eras have `categories` for grouping, but should display as a
  // single scrolling river/path of all their stations (not the boxed category grid).
  const RIVER_ERAS = { minds:1, explorers:1 };
  const useRiver = !!RIVER_ERAS[eraId];
  let lang = Progress.lang();
  let era = null;

  /* The "Challenge Hall" gate — a synthetic station appended after every prophet
     when this era has review activities (data/activities.js). It is NOT part of
     era.nodes, so progress counts / timeline data stay untouched. */
  const GATE = { id:'__acts', gate:true, icon:'target', name:{ ar:'ساحةُ التحدّي', en:'Challenge Hall' } };
  function hasActs(){ return !!(window.HISN.activities && HISN.activities[eraId]); }
  function mapNodes(){ return hasActs() ? era.nodes.concat([GATE]) : era.nodes; }
  function actsSolvedCount(){ try{ return Object.values(JSON.parse(localStorage.getItem('hisn-acts-'+eraId)||'{}')).filter(Boolean).length; }catch(e){ return 0; } }

  /* serpentine layout within the field (percent coords) */
  // Wide eras (many stations) drop to 4 columns so the name labels get
  // horizontal breathing room; the field then grows taller (see sizeField).
  function colsFor(n){ return n<=8 ? 4 : n<=16 ? 5 : 4; }
  function rowsFor(n){ return Math.ceil(n/colsFor(n)); }
  function layout(nodes){
    const pos={}, n=nodes.length, cols = colsFor(n), rows=Math.ceil(n/cols);
    const xL=14,xR=86,stepX=cols>1?(xR-xL)/(cols-1):0, yT=12,yB=88,stepY=rows>1?(yB-yT)/(rows-1):0;
    nodes.forEach((node,i)=>{ const row=Math.floor(i/cols); let col=i%cols; if(row%2===1) col=cols-1-col;
      pos[node.id]={ x:xL+col*stepX, y:yT+row*stepY+Math.sin(i*1.3)*1.5 }; });
    return pos;
  }
  // Give every row a comfortable, fixed vertical band instead of squeezing all
  // rows into one short aspect-ratio box (which is what made the 24-prophet map crowded).
  function sizeField(){
    const rows = rowsFor(mapNodes().length);
    const f = $('.field'); if(!f) return;
    f.style.aspectRatio = 'auto';
    f.style.height = Math.round(rows*150 + 70) + 'px';
  }
  function seg(a,b){
    const style=document.documentElement.dataset.path, dx=b.x-a.x, dy=b.y-a.y;
    if(style==='river'){
      if(Math.abs(dx)>Math.abs(dy)) return `M ${a.x} ${a.y} C ${a.x+dx*.4} ${a.y}, ${b.x-dx*.4} ${b.y}, ${b.x} ${b.y}`;
      const bow=(a.x>50?1:-1)*7; return `M ${a.x} ${a.y} C ${a.x+bow} ${a.y+dy*.4}, ${b.x+bow} ${b.y-dy*.4}, ${b.x} ${b.y}`;
    }
    const my=(a.y+b.y)/2; return `M ${a.x} ${a.y} L ${a.x} ${my} L ${b.x} ${my} L ${b.x} ${b.y}`;
  }
  function fieldBg(){
    const sil={
      prophets:`<path d="M0,82 L18,52 L30,82 Z M30,82 L52,46 L74,82 Z M68,82 L86,58 L100,82Z" fill="var(--ec2)" opacity=".16"/>`,
      quran:`<path d="M22 82 V58 a28 28 0 0 1 56 0 V82 Z" fill="var(--ec2)" opacity=".12"/><path d="M42 82 V64 a8 8 0 0 1 16 0 V82 Z" fill="var(--ec2)" opacity=".16"/><circle cx="50" cy="30" r="3" fill="var(--ec2)" opacity=".18"/>`,
      seerah:`<rect x="10" y="58" width="80" height="42" fill="var(--ec2)" opacity=".12"/><path d="M40 58 a10 10 0 0 1 20 0 Z" fill="var(--ec2)" opacity=".16"/><rect x="14" y="50" width="5" height="50" fill="var(--ec2)" opacity=".16"/><rect x="81" y="50" width="5" height="50" fill="var(--ec2)" opacity=".16"/>`,
      heroes:`<rect x="12" y="50" width="14" height="50" fill="var(--ec2)" opacity=".14"/><rect x="74" y="46" width="14" height="54" fill="var(--ec2)" opacity=".14"/><path d="M40,64 Q50,44 60,64 L60,100 L40,100Z" fill="var(--ec2)" opacity=".14"/>`,
    }[eraId]||'';
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><radialGradient id="vg" cx="50%" cy="18%" r="92%"><stop offset="0" stop-color="rgba(255,220,150,.06)"/><stop offset="1" stop-color="rgba(0,0,0,.3)"/></radialGradient></defs><rect width="100" height="100" fill="url(#vg)"/>${sil}</svg>`;
  }

  function renderStations(){
    const nodes = mapNodes();
    const pos = layout(nodes);
    $('#stations').innerHTML = nodes.map((n,i)=>{
      if(n.gate) return gateStation(n, pos[n.id], i);
      const st = Progress.statusInEra(era, n.id);
      const authored = HISN.authored && HISN.authored.includes(n.id);
      const stars = Progress.stars(n.id);
      const p = pos[n.id];
      const starRow = st==='done' ? `<div class="st-stars">${window.starSVG(stars>=1)}${window.starSVG(stars>=2)}${window.starSVG(stars>=3)}</div>`:'';
      const isActive = st==='active' && authored;
      const orbit = isActive ? `<div class="st-orbit"><i></i></div>`:'';
      const coach = isActive ? `<div class="st-coach">${lang==='ar'?'ابدأ':'Start'}</div>`:'';
      return `<div class="st ${st} ${authored?'':'soon'}" data-id="${n.id}" style="left:${p.x}%;top:${p.y}%;animation-delay:${.2+i*.05}s">
        <span class="st-tile"></span>${orbit}${coach}${starRow}
        <button class="st-btn" aria-label="${n.name.en}"><span class="st-num">${i+1}</span>${window.ICONS[n.icon]||''}</button>
        <span class="st-name"><b>${n.name[lang]||n.name.ar}</b><i>${lang==='ar'?n.name.en:n.name.ar}</i></span>
      </div>`;
    }).join('');
    $('#stations').querySelectorAll('.st-btn').forEach(btn=>btn.addEventListener('click',()=>openNode(btn.closest('.st').dataset.id, btn)));
  }
  /* the appended Challenge-Hall gate station */
  function gateStation(n, p, i){
    const pack = HISN.activities[eraId];
    const total = pack.list.length * 3, done = actsSolvedCount();
    const all = done>=total;
    return `<div class="st gate ${all?'done':'active'}" data-id="${n.id}" style="left:${p.x}%;top:${p.y}%;animation-delay:${.2+i*.05}s">
      <span class="st-tile"></span><div class="st-orbit"><i></i></div>
      <div class="st-coach">${(lang==='ar'?'التحدّيات':'Challenges')} ${done}/${total}</div>
      <button class="st-btn" aria-label="Challenge Hall">${all?'<span class="st-num">✓</span>':''}${window.ICONS[n.icon]||''}</button>
      <span class="st-name"><b>${n.name[lang]||n.name.ar}</b><i>${lang==='ar'?n.name.en:n.name.ar}</i></span>
    </div>`;
  }
  /* shared open behavior for a prophet node (map station OR timeline card) */
  function openNode(id, el){
    if(id==='__acts'){ location.href='activities.html?era='+eraId; return; }
    if(HISN.storySets && HISN.storySets.includes(id)){ location.href='stories.html?prophet='+id; return; }
    if(HISN.authored && HISN.authored.includes(id)){ location.href='chapter.html?id='+id; return; }
    shake(el); toast(lang==='ar'?'هذه المحطّة قريباً ✨':'This station is coming soon ✨');
  }
  function isOpen(id){ return (HISN.storySets&&HISN.storySets.includes(id))||(HISN.authored&&HISN.authored.includes(id)); }
  function renderPath(){
    const nodes=mapNodes(), pos=layout(nodes); let segs='';
    for(let i=0;i<nodes.length-1;i++){
      const a=pos[nodes[i].id], b=pos[nodes[i+1].id], d=seg(a,b);
      const lit = Progress.statusInEra(era,nodes[i].id)!=='locked' && Progress.statusInEra(era,nodes[i+1].id)!=='locked';
      segs+=`<path d="${d}" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${lit?'0':'1.5 2.4'}" opacity="${lit?.8:.4}"/>`;
      if(lit) segs+=`<path d="${d}" fill="none" stroke="${era.accent}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    $('#pathSeg').innerHTML=segs;
  }
  window.HISN_onPath = ()=>{ if(era){ renderPath(); if(view==='timeline') renderTimeline(); } };

  /* ── Map ⇄ Timeline view switch (only for eras carrying timeline data) ── */
  const ICO = {
    map:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z"/><path d="M9 4v16M15 6v16"/></svg>`,
    clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    pin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>`,
    branch:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M6 8.4v7.2M8.2 6.6 15.8 11M8.2 17.4 15.8 13"/></svg>`,
    info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  };
  // Prophets era is timeline-only (no map). Other eras keep the map/timeline toggle.
  const TIMELINE_ONLY = (eraId==='prophets');
  let view = TIMELINE_ONLY ? 'timeline'
    : (function(){ try{ return localStorage.getItem('hisn-view-'+eraId)||'map'; }catch(e){ return 'map'; } })();

  function renderToggle(){
    const t = $('#viewToggle');
    if(t) t.hidden = true;   // no Map/Timeline choice — single river-scroll view
  }
  function setView(v){
    view = v; try{ localStorage.setItem('hisn-view-'+eraId, v); }catch(e){}
    $('#viewMap').hidden = v!=='map';
    $('#viewTimeline').hidden = v!=='timeline';
    $('#viewToggle').querySelectorAll('button').forEach(b=>b.classList.toggle('on', b.dataset.v===v));
    if(v==='timeline') renderTimeline(); else renderPath();
  }

  // How many columns the serpentine should use at the current width.
  function tlColsNow(){
    const w = ($('#viewTimeline')||{}).clientWidth || document.body.clientWidth || 900;
    return w>=820 ? 3 : w>=560 ? 2 : 1;
  }
  // Smooth, rounded poly-line through a list of points (the winding "snake").
  function roundedPath(pts, R){
    if(pts.length<2) return '';
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for(let i=1;i<pts.length-1;i++){
      const p0=pts[i-1], p1=pts[i], p2=pts[i+1];
      const v1={x:p1.x-p0.x,y:p1.y-p0.y}, v2={x:p2.x-p1.x,y:p2.y-p1.y};
      const l1=Math.hypot(v1.x,v1.y)||1, l2=Math.hypot(v2.x,v2.y)||1;
      const r=Math.min(R, l1/2, l2/2);
      const a={x:p1.x-v1.x/l1*r, y:p1.y-v1.y/l1*r};
      const b={x:p1.x+v2.x/l2*r, y:p1.y+v2.y/l2*r};
      d += ` L ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }
    const last=pts[pts.length-1];
    d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
    return d;
  }
  // Draw the connector that snakes through every card (behind the cards).
  // Always re-query the LIVE grid — renderTimeline can run more than once and
  // detach the node a deferred call captured, leaving the on-screen svg empty.
  function drawSnake(){
    const grid = document.querySelector('#viewTimeline .tl-snake'); if(!grid) return;
    const svg = grid.querySelector('.tl-snake-svg'); if(!svg) return;
    const cards=[...grid.querySelectorAll('.tl-card')];
    const gb=grid.getBoundingClientRect();
    svg.setAttribute('width', gb.width); svg.setAttribute('height', gb.height);
    svg.setAttribute('viewBox', `0 0 ${gb.width} ${gb.height}`);
    if(cards.length<2){ svg.innerHTML=''; return; }
    const pts=cards.map(c=>{ const r=c.getBoundingClientRect(); return {x:r.left-gb.left+r.width/2, y:r.top-gb.top+r.height/2}; });
    const d=roundedPath(pts, 24);
    svg.innerHTML =
      `<path d="${d}" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".65"/>
       <path d="${d}" fill="none" stroke="var(--ec)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.5 8" opacity=".95"/>`;
  }

  function tlCard(n, i, cols, showBand, bandLabel){
    const st = Progress.statusInEra(era, n.id);
    const open = isOpen(n.id);
    const stars = Progress.stars(n.id);
    const starRow = st==='done' ? `<div class="tl-stars">${window.starSVG(stars>=1)}${window.starSVG(stars>=2)}${window.starSVG(stars>=3)}</div>`:'';
    const row=Math.floor(i/cols); let col=i%cols; if(row%2===1) col=cols-1-col;
    const tag = showBand ? `<div class="tl-band-tag">${bandLabel}</div>`:'';
    return `<div class="tl-item" style="grid-column:${col+1};grid-row:${row+1}">${tag}
      <div class="tl-card ${st} ${open?'':'soon'}" data-id="${n.id}" role="button" tabindex="0" aria-label="${n.name.en}">
        <div class="tl-card-h">
          <span class="tl-ic">${window.ICONS[n.icon]||''}</span>
          <div class="tl-name"><b>${n.name[lang]||n.name.ar}</b><i>${lang==='ar'?n.name.en:n.name.ar}</i></div>
          <span class="tl-num">${i+1}</span>
        </div>
        <div class="tl-meta">${n.when?`<span class="tl-when">${n.when[lang]}</span>`:''}<span class="tl-hon">${n.hon||''}</span></div>
        ${starRow}
        <ul class="tl-facts">
          <li class="tl-place">${ICO.pin}<span>${n.place?n.place[lang]:''}</span></li>
          <li class="tl-line">${ICO.branch}<span>${n.line?n.line[lang]:''}</span></li>
        </ul>
        <p class="tl-hook">${n.hook?(n.hook[lang]||n.hook.ar):''}</p>
      </div>
    </div>`;
  }
  let tlRO=null, tlCols=3;
  function tlGate(i){
    const pack=HISN.activities[eraId], total=pack.list.length*3, done=actsSolvedCount();
    const row=Math.floor(i/tlCols); let col=i%tlCols; if(row%2===1) col=tlCols-1-col;
    return `<div class="tl-item" style="grid-column:${col+1};grid-row:${row+1}">
      <div class="tl-card gate ${done>=total?'done':''}" data-id="__acts" role="button" tabindex="0" aria-label="Challenge Hall">
        <div class="tl-card-h"><span class="tl-ic">${window.ICONS.target}</span>
          <div class="tl-name"><b>${pack.title[lang]}</b><i>${pack.title.en}</i></div>
          <span class="tl-num">${done}/${total}</span></div>
        <p class="tl-hook">${lang==='ar'?'راجِعْ رحلةَ الأنبياء عبرَ ١٠ تحدّيات':'Review the journey through 10 challenges'}</p>
      </div></div>`;
  }
  function renderTimeline(){
    const wrap = $('#viewTimeline');
    tlCols = tlColsNow();
    const bandLabel = Object.fromEntries(era.bands.map(b=>[b.id, b.label[lang]]));
    let prevBand=null;
    const cards = era.nodes.map((n,i)=>{
      const showBand = n.band && n.band!==prevBand; prevBand=n.band;
      return tlCard(n, i, tlCols, showBand, bandLabel[n.band]||'');
    }).join('');
    const note = era.timelineNote ? `<div class="tl-note">${ICO.info}<span>${era.timelineNote[lang]}</span></div>`:'';
    const gate = hasActs() ? tlGate(era.nodes.length) : '';
    wrap.innerHTML = `${note}<div class="tl-snake" style="--cols:${tlCols}"><svg class="tl-snake-svg" aria-hidden="true"></svg>${cards}${gate}</div>`;
    wrap.querySelectorAll('.tl-card').forEach(c=>{
      const go = ()=>openNode(c.dataset.id, c);
      c.addEventListener('click', go);
      c.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } });
    });
    // Draw with plain timers (guaranteed) — rAF can be starved before first paint.
    setTimeout(drawSnake, 0); setTimeout(drawSnake, 120); setTimeout(drawSnake, 320);
    if(typeof requestAnimationFrame==='function') requestAnimationFrame(drawSnake);
    if(!tlRO){
      tlRO = new ResizeObserver(()=>{ clearTimeout(tlRO._t); tlRO._t=setTimeout(()=>{
        if(view!=='timeline') return;
        if(tlColsNow()!==tlCols) renderTimeline(); else drawSnake();
      }, 160); });
      tlRO.observe(wrap);
    }
  }

  function plate(){
    const c=Progress.counts(era), dash=2*Math.PI*24, off=dash*(1-c.done/c.total);
    $('#eraPlate').innerHTML = `<div class="era-emblem">${HISN_SVG[era.icon]||''}</div>
      <div class="era-titles"><div class="era-tier">${era.tier[lang]}${era.standalone?'':' · '+(lang==='ar'?'المرحلة':'Era')+' '+era.order}</div>
        <h2>${era.title[lang]}<span class="era-en">${era.title.en}</span></h2><p>${era.sub[lang]}</p></div>
      <div class="era-prog"><svg class="ring" viewBox="0 0 54 54"><circle class="bg" cx="27" cy="27" r="24"/><circle class="fg" cx="27" cy="27" r="24" stroke-dasharray="${dash}" stroke-dashoffset="${off}" transform="rotate(-90 27 27)"/></svg><small>${c.done}/${c.total}</small></div>
      <div class="era-points">⭐ <b>${Progress.eraPoints(eraId)}</b> <span>/ ${Progress.eraMax(eraId)}</span></div>`;
  }
  function nav(){
    const idx=HISN.order.indexOf(eraId);
    // A standalone corner (e.g. the Academy) isn't in HISN.order — hide era-to-era nav.
    if(idx<0){ $('#eraNav').innerHTML=''; return; }
    const prev=HISN.order[idx-1], next=HISN.order[idx+1];
    const pe=prev&&HISN.eras[prev], ne=next&&HISN.eras[next];
    $('#eraNav').innerHTML =
      `<a class="${pe?'':'disabled'}" ${pe?`href="era.html?era=${prev}"`:''}>← <span class="ar-small">${pe?pe.title[lang]:'—'}</span></a>
       <a class="${ne?'':'disabled'}" ${ne?`href="era.html?era=${next}"`:''}><span class="ar-small">${ne?ne.title[lang]:'—'}</span> →</a>`;
  }

  /* A separate, non-chronological collection (e.g. “know the Prophet ﷺ”) shown
     in its own panel beneath the journey — only for eras that define `aspects`. */
  function renderAspects(){
    const box = $('#eraAspects'); if(!box) return;
    if(!era.aspects || !era.aspects.length){ box.hidden = true; box.innerHTML=''; return; }
    box.hidden = false;
    const cards = era.aspects.map((a,i)=>{
      const open = isOpen(a.id);
      return `<button class="aspect-card ${open?'':'soon'}" data-id="${a.id}" style="animation-delay:${i*.05}s">
        <span class="aspect-ic">${window.ICONS[a.icon]||''}</span>
        <span class="aspect-body"><b>${a.name[lang]||a.name.ar}</b><i>${lang==='ar'?a.name.en:a.name.ar}</i>
          <span class="aspect-hook">${a.hook?(a.hook[lang]||a.hook.ar):''}</span>
          ${a.meta?`<span class="aspect-meta">${ICO.branch}<span>${a.meta[lang]||a.meta.ar}</span></span>`:''}</span>
        <span class="aspect-go">→</span>
      </button>`;
    }).join('');
    box.innerHTML = `<div class="aspects-head"><span class="aspects-bar"></span>
        <div><h3>${era.aspectsTitle[lang]}</h3><p>${era.aspectsSub[lang]}</p></div></div>
      <div class="aspects-grid">${cards}</div>`;
    box.querySelectorAll('.aspect-card').forEach(b=>b.addEventListener('click',()=>openNode(b.dataset.id, b)));
  }

  /* Categorized era (e.g. Heroes): render grouped hero cards instead of a map.
     Each category gets a titled section + a grid of cards. */
  function renderCategories(){
    const box = $('#viewCats'); if(!box || !era.categories) return;
    box.hidden = false;
    box.innerHTML = era.categories.map(cat=>{
      // "Coming soon" section — no stations yet (e.g. Pure Heart corner placeholders)
      if(cat.soon || !cat.heroes || !cat.heroes.length){
        return `<section class="cat-sec cat-soon">
          <div class="cat-head"><span class="cat-ic">${window.ICONS[cat.icon]||''}</span>
            <div class="cat-tt"><h3>${cat.title[lang]}<span class="cat-en">${cat.title.en}</span></h3>${cat.sub?`<p>${cat.sub[lang]}</p>`:''}</div>
            <span class="cat-count soon">🔒</span></div>
          <div class="cat-soon-note">${lang==='ar'?'قريباً إن شاء الله ✨':'Coming soon, in shaa Allah ✨'}</div>
        </section>`;
      }
      const cards = cat.heroes.map((h,i)=>{
        const open = isOpen(h.id), done = Progress.isDone(h.id);
        return `<button class="aspect-card hero-card ${open?'':'soon'} ${done?'done':''}" data-id="${h.id}" style="animation-delay:${i*.02}s">
          <span class="aspect-ic">${window.ICONS[h.icon]||window.ICONS.star}</span>
          <span class="aspect-body"><b>${h.name[lang]||h.name.ar}</b>${h.hon?`<i class="hero-hon">${h.hon}</i>`:''}<i>${lang==='ar'?h.name.en:h.name.ar}</i>
            <span class="aspect-hook">${h.hook?(h.hook[lang]||h.hook.ar):''}</span></span>
        </button>`;
      }).join('');
      return `<section class="cat-sec">
        <div class="cat-head"><span class="cat-ic">${window.ICONS[cat.icon]||''}</span>
          <div class="cat-tt"><h3>${cat.title[lang]}<span class="cat-en">${cat.title.en}</span></h3>${cat.sub?`<p>${cat.sub[lang]}</p>`:''}</div>
          <span class="cat-count">${cat.heroes.length}</span></div>
        <div class="aspects-grid">${cards}</div>
      </section>`;
    }).join('');
    box.querySelectorAll('.hero-card').forEach(b=>b.addEventListener('click',()=>openNode(b.dataset.id, b)));
    // History eras (Prophets, Seerah, Battles) and Heart already expose a single
    // Challenge-Hall gate station (or are exam-only), so they need no learn tiles.
    // The Heroes era renders in the CATEGORY view (no gate station there), so it
    // gets ONE unified «ساحة الأبطال» Challenge-Hall CTA instead of 3 category tiles.
    const NO_LEARN_TILES = ['heart','prophets','seerah','battles'];
    if(hasActs() && NO_LEARN_TILES.indexOf(eraId)<0){
      const ar=lang==='ar';
      const heroesOne = eraId==='heroes';
      const cats=(era.categories||[]).filter(c=>c.heroes&&c.heroes.length);
      const card=document.createElement('section');
      card.className='learn-anous';
      if(!document.getElementById('learn-anous-css')){
        var _lacss=document.createElement('style'); _lacss.id='learn-anous-css';
        _lacss.textContent='.learn-anous{border:2px solid #7E5BD0;border-radius:1.4rem;padding:1.2rem 1.3rem;margin:1.4rem 0;background:linear-gradient(160deg,rgba(126,91,208,.20),rgba(255,255,255,.03))}.learn-anous .la-head{display:flex;align-items:center;gap:.8rem;margin-bottom:.9rem}.learn-anous .la-ic{font-size:2rem;flex:0 0 auto}.learn-anous .la-tt{flex:1}.learn-anous .la-tt h3{margin:0;font-size:1.3rem;font-weight:900;color:#C9B6F2}.learn-anous .la-tt p{margin:.15rem 0 0;font-size:.88rem;opacity:.85;line-height:1.5}.learn-anous .la-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:.7rem}.learn-anous .la-tile{display:flex;align-items:center;gap:.55rem;text-decoration:none;background:rgba(255,255,255,.06);border:1.5px solid rgba(126,91,208,.4);border-radius:1rem;padding:.7rem .8rem;color:inherit;font-weight:800;font-family:"Tajawal",sans-serif;transition:transform .15s,background .2s}.learn-anous .la-tile:hover{transform:translateY(-3px);background:rgba(126,91,208,.16)}.learn-anous .la-tile-ic{font-size:1.3rem;width:1.8rem;height:1.8rem;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center}.learn-anous .la-tile-ic svg{width:1.5rem;height:1.5rem}.learn-anous .la-tile-nm{flex:1;font-size:.9rem;line-height:1.4}';
        document.head.appendChild(_lacss);
      }
      const tiles = heroesOne
        ? `<a class="la-tile" href="activities.html?era=${eraId}">
             <span class="la-tile-ic">${window.ICONS.target||'🎯'}</span>
             <span class="la-tile-nm">${ar?'ساحةُ الأبطال — التحدّيات':'Heroes Challenge Hall'}</span><span style="opacity:.6">←</span></a>`
        : cats.map(c=>`
          <a class="la-tile" href="activities.html?era=${eraId}&cat=${c.id}">
            <span class="la-tile-ic">${(window.ICONS&&window.ICONS[c.icon])||'🎯'}</span>
            <span class="la-tile-nm">${c.title[lang]}</span><span style="opacity:.6">←</span></a>`).join('');
      card.innerHTML=`
        <div class="la-head"><div class="la-ic">${heroesOne?'🎯':'🎮'}</div>
          <div class="la-tt"><h3>${heroesOne?(ar?'ساحةُ التحدّي':'Challenge Hall'):(ar?'تعلّم مع أنوس':'Learn with Anous')}</h3>
            <p>${heroesOne?(ar?'تحدٍّ واحدٌ على ٣ مستويات — أكمِلْه لِتفتحَ ٥ أنشطةٍ من أنوس!':'One challenge across 3 levels — complete it to unlock 5 Anous activities!'):(ar?'أنشطةٌ تفاعليّةٌ ممتعة على ٣ مستويات — اختَر قسماً وابدأِ اللعب!':'Fun interactive activities across 3 levels — pick a section & start playing!')}</p></div></div>
        <div class="la-grid">${tiles}</div>`;
      box.appendChild(card);
    }
    /* Pure Heart has its OWN medals hall (decoupled from the Fortress Hall of Heroes). */
    if(eraId==='heart'){
      const ar=lang==='ar';
      const won=(window.Progress?Progress.medals():[]).filter(m=>(window.HISN&&HISN.isHeartMedal)?HISN.isHeartMedal(m):m.era==='heart');
      const hall=document.createElement('section');
      hall.className='heart-hall';
      if(!document.getElementById('heart-hall-css')){
        const hc=document.createElement('style'); hc.id='heart-hall-css';
        hc.textContent='.heart-hall{border:2px solid #A06CC4;border-radius:1.4rem;padding:1.2rem 1.3rem;margin:1.4rem 0;background:linear-gradient(160deg,rgba(160,108,196,.18),rgba(255,255,255,.03))}.heart-hall h3{margin:0 0 .2rem;font-size:1.3rem;font-weight:900;color:#E4CCF5}.heart-hall p{margin:0 0 .9rem;font-size:.85rem;opacity:.85}.heart-hall .hh-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(86px,1fr));gap:.7rem}.heart-hall .hh-medal{aspect-ratio:1;border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.25rem;text-align:center;padding:.4rem;background:rgba(255,255,255,.05);border:1px solid rgba(160,108,196,.4)}.heart-hall .hh-ic{font-size:1.7rem}.heart-hall .hh-ic svg{width:1.7rem;height:1.7rem}.heart-hall .hh-nm{font-size:.62rem;font-weight:800;line-height:1.25;opacity:.92}.heart-hall .hh-empty{font-size:.85rem;opacity:.75;padding:.6rem 0}';
        document.head.appendChild(hc);
      }
      hall.innerHTML=`<h3>${ar?'💚 قاعةُ أوسمةِ القلب':'💚 Heart Medals Hall'}</h3>
        <p>${ar?'اجمعْ وسامَ كلِّ قسمٍ تُكملُه في ركنِ القلبِ السليم':'Collect a medal for each section you complete in the Pure Heart corner'}</p>
        ${won.length?`<div class="hh-grid">${won.map(m=>`<div class="hh-medal"><span class="hh-ic">${(window.ICONS&&window.ICONS[m.icon])||'💚'}</span><span class="hh-nm">${(m.title&&(m.title[lang]||m.title.ar))||m.title||''}</span></div>`).join('')}</div>`
          :`<div class="hh-empty">${ar?'لم تَنَلْ أوسمةً بعد — أكمِلْ أقسامَ القلبِ لِتظهرَ هنا.':'No medals yet — complete heart sections to see them here.'}</div>`}`;
      box.appendChild(hall);
    }
  }

  /* ── Era certificate: locked until every station in the era is complete ──
     Mirrors the House of Trust certificate — a printable, named award. */
  const CERT_NAME_KEY = 'hisn-childName';
  function renderCert(){
    const box = $('#eraCert'); if(!box) return;
    if(!era.certificate){ box.hidden = true; box.innerHTML=''; return; }
    box.hidden = false;
    const c = Progress.counts(era);
    const done = c.total>0 && c.done >= c.total;
    const emblem = HISN_SVG[era.icon] || HISN_SVG.crest || '';
    const head = `<div class="cert-head"><span class="cert-bar"></span>
        <div><h3>${lang==='ar'?'شهادةُ المرحلة':'Era Certificate'}<span class="cert-en">${lang==='ar'?'Era Certificate':'شهادةُ المرحلة'}</span></h3></div>
        <p>${lang==='ar'?`${c.done}/${c.total} محطّة`:`${c.done}/${c.total} stations`}</p></div>`;

    if(!done){
      const pct = c.total ? Math.round(c.done/c.total*100) : 0;
      box.innerHTML = head + `<div class="cert-locked">
        <div class="cl-seal">${emblem}</div>
        <b>${lang==='ar'?'الشهادةُ مُقفَلة 🔒':'Certificate locked 🔒'}</b>
        <p class="cl-sub">${lang==='ar'
          ? `أكمِلْ كلَّ محطّاتِ «${era.title.ar}» لِتفتحَ شهادتَك باسمِك وتطبعَها.`
          : `Finish every station in “${era.title.en}” to unlock a certificate with your name to print.`}</p>
        <div class="cl-bar"><i style="width:0%"></i></div>
        <div class="cl-count">${lang==='ar'?`${c.done} من ${c.total} مكتملة`:`${c.done} of ${c.total} complete`}</div>
      </div>`;
      requestAnimationFrame(()=>{ const i=box.querySelector('.cl-bar i'); if(i) i.style.width = pct+'%'; });
      return;
    }

    const name = (function(){ try{ return localStorage.getItem(CERT_NAME_KEY)||''; }catch(e){ return ''; } })();
    const ct = era.certificate;
    const dateStr = new Date().toLocaleDateString(lang==='ar'?'ar-EG':'en-GB', {year:'numeric',month:'long',day:'numeric'});
    box.innerHTML = head + `<div class="cert-card" id="certCard">
      <div class="cert-ribbon">🎖️ ${lang==='ar'?'وسامُ الإتمام':'Medal of Completion'}</div>
      <div class="cert-kicker">${(era.kicker&&era.kicker[lang])||(lang==='ar'?'حِصنُ الأبطال':"Hero's Fortress")}</div>
      <div class="cert-h">${era.title[lang]}<span class="cert-h-en">${lang==='ar'?era.title.en:era.title.ar}</span></div>
      <div class="cert-sub">${ct.subtitle[lang]}</div>
      <div class="cert-rule"></div>
      <div class="cert-name-row">${lang==='ar'?'تُمنَحُ لـ':'Awarded to'}</div>
      <span class="cert-name" id="certName" contenteditable="true" data-ph="${lang==='ar'?'اكتبْ اسمَك هنا':'write your name'}">${name}</span>
      <div class="cert-statement">${ct.statement[lang]}</div>
      <div class="cert-seal" aria-hidden="true">${emblem}<span>${lang==='ar'?'خَتمُ الحِصن':'Fortress Seal'}</span></div>
      <div class="cert-sig">
        <div><div class="line"></div>${lang==='ar'?'توقيعُ البطل':'Hero signature'}</div>
        <div><div class="line"></div>${dateStr}</div>
      </div>
      <div class="cert-actions">
        <button class="primary" id="certPrint">🖨️ ${lang==='ar'?'اطبعِ الشهادة':'Print certificate'}</button>
        <button id="certSave">💾 ${lang==='ar'?'احفظِ الاسم':'Save name'}</button>
      </div>
    </div>`;

    const nameEl = $('#certName');
    const persist = ()=>{ try{ localStorage.setItem(CERT_NAME_KEY, (nameEl.textContent||'').trim()); }catch(e){} };
    if(nameEl) nameEl.addEventListener('input', persist);
    const saveBtn = $('#certSave');
    if(saveBtn) saveBtn.addEventListener('click', ()=>{ persist(); toast(lang==='ar'?'✓ حُفِظَ الاسم':'✓ Name saved'); });
    const printBtn = $('#certPrint');
    if(printBtn) printBtn.addEventListener('click', ()=>{
      persist();
      const card = $('#certCard'); const print = $('#printArea');
      if(!card || !print) return;
      print.style.display='block'; print.innerHTML='';
      print.appendChild(card.cloneNode(true));
      setTimeout(()=>{ window.print(); setTimeout(()=>{ print.style.display='none'; print.innerHTML=''; }, 600); }, 80);
    });
  }
  window.HISN_onProgress = ()=>{ if(era) renderCert(); };

  /* guide */
  let gi=0, gt=null;
  function guide(){ const L=HISN.guide.lines; $('#guideLine').textContent=L[gi%L.length][lang]; $('#guideName').textContent=HISN.guide.name[lang]; gi++; }
  function startGuide(){ guide(); clearInterval(gt); gt=setInterval(guide,6500); }
  window.tuckGuide=()=>$('#guide').classList.toggle('tuck');

  /* misc */
  function shake(el){ el.animate([{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:300}); }
  let toastEl;
  function toast(m){ if(!toastEl){ toastEl=document.createElement('div'); toastEl.className='toast'; document.body.appendChild(toastEl);} toastEl.textContent=m; toastEl.classList.add('show'); clearTimeout(toastEl._t); toastEl._t=setTimeout(()=>toastEl.classList.remove('show'),2600); }

  function header(){ $('#lvl').textContent='LVL '+Progress.level(); $('#xp').textContent=Progress.totalXp()+' XP'; requestAnimationFrame(()=>$('#xpfill').style.width=Progress.xpPct()+'%'); }

  function setLang(l){
    lang=l; Progress.setLang(l); document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    $('#langAr').classList.toggle('on',l==='ar'); $('#langEn').classList.toggle('on',l==='en');
    $('#backTxt').textContent = era.standalone
      ? ((era.back&&era.back[l])||(l==='ar'?'المدينة':'City'))
      : (l==='ar'?'الحصن':'Fortress');
    $('#brandName').textContent = era.title[l];
    plate(); nav(); startGuide();
    if(era.categories && !useRiver){ renderCategories(); renderCert(); return; }
    renderStations(); renderPath(); renderAspects(); renderToggle(); renderCert();
  }
  // Public entry (language buttons): switch language, then refresh the active view.
  window.setLang=(l)=>{ setLang(l); if(view==='timeline') renderTimeline(); };

  function boot(){
    era = HISN.eras[eraId];
    if(!era){ document.body.innerHTML='<p style="padding:2rem;text-align:center">Unknown era.</p>'; return; }
    if(hasActs()){ try{ const p=HISN.activities[eraId]; const LV=['beginner','intermediate','advanced']; let n=0; p.list.forEach(it=>LV.forEach(l=>{ const lv=it.levels[l]; if(!lv) return; if(lv.type==='quiz')n+=lv.questions.length; else if(lv.type==='trueFalse')n+=lv.items.length; else if(lv.type==='match'||lv.type==='flip')n+=lv.pairs.length; else n+=1; })); Progress.registerMax(eraId,'acts:'+eraId, n*10); }catch(e){} }
    document.documentElement.style.setProperty('--ec', era.accent);
    document.documentElement.style.setProperty('--ec2', era.accent2);
    $('#brandBadge').innerHTML=HISN_SVG.badge;
    $('#guideAvatar').innerHTML=HISN_SVG.guide;
    let s=''; for(let i=0;i<40;i++){ s+=`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;--d:${2+Math.random()*3}s;--dl:${-Math.random()*4}s"></i>`; }
    $('#stars').innerHTML=s;
    if(era.categories && !useRiver){
      // categorized layout: hide the map/timeline/toggle, show the category grid
      ['#viewMap','#viewTimeline','#viewToggle','#eraAspects'].forEach(sel=>{ const el=$(sel); if(el) el.hidden=true; });
      header(); setLang(lang); return;
    }
    $('#fieldBg').innerHTML=fieldBg();
    sizeField();
    if(era.bands) view='timeline';   // single river-scroll (timeline) view, no toggle
    header(); setLang(lang); setView(view);
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
