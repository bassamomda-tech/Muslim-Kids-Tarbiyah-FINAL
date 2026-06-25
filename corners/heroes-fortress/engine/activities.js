/* engine/activities.js — era "Challenge Hall" (reads ?era=prophets).
   10 ACTIVITIES, each playable at 3 LEVELS (beginner / intermediate / advanced)
   → 30 challenges. Each level runs a chapter mini-game in an overlay sheet
   (quiz · order · match · trueFalse · whoAmI). Solved state is saved per-era;
   finishing all 30 earns a special era medal + XP. */
(function(){
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const eraId = params.get('era') || 'prophets';
  let lang = Progress.lang();
  let pack = null, era = null;
  const SKEY = 'hisn-acts-' + eraId;
  let solved = load();
  const shuffles = {};                 // per-challenge shuffle memory (order/match/whoAmI)

  function load(){ try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch(e){ return {}; } }
  function persist(){ try { localStorage.setItem(SKEY, JSON.stringify(solved)); } catch(e){} }

  const T = o => (o && (o[lang] !== undefined ? o[lang] : o.ar)) ?? '';

  const LEVELS = [
    { id:'beginner',     color:'#2A9D5A', label:{ar:'مبتدئ',en:'Beginner'} },
    { id:'intermediate', color:'#E0A82A', label:{ar:'متوسط',en:'Intermediate'} },
    { id:'advanced',     color:'#C0392B', label:{ar:'متقدم',en:'Advanced'} },
  ];
  const KIND = {
    quiz:     { ic:'❓',  label:{ar:'اختبار',en:'Quiz'} },
    order:    { ic:'🔢',  label:{ar:'ترتيب',en:'Order'} },
    match:    { ic:'🔗',  label:{ar:'توصيل',en:'Match'} },
    trueFalse:{ ic:'⚖️', label:{ar:'صح أم خطأ',en:'True / False'} },
    whoAmI:   { ic:'🕵️', label:{ar:'من أنا؟',en:'Who am I?'} },
    flip:     { ic:'🃏',  label:{ar:'بطاقات الذاكرة',en:'Memory'} },
    maze:     { ic:'🧭',  label:{ar:'متاهة',en:'Maze'} },
  };

  /* ───────────── flat challenge list (for counting + "next") ───────────── */
  function flatKeys(){ const out=[]; pack.list.forEach(it=>LEVELS.forEach(L=>{ if(it.levels[L.id]) out.push(it.id+':'+L.id); })); return out; }
  function counts(){ const keys=flatKeys(); return { total:keys.length, done:keys.filter(k=>solved[k]).length }; }
  function itemById(id){ return pack.list.find(it=>it.id===id); }
  function challenge(id, level){ return Object.assign({ id:id+':'+level }, itemById(id).levels[level]); }
  function levelMeta(level){ return LEVELS.find(L=>L.id===level); }

  /* ───────────── corner roll-up + Anous 75% unlock ───────────── */
  const CORNER = (window.HISN && HISN.cornerEras) ? (Object.keys(HISN.cornerEras).find(c=>HISN.cornerEras[c].includes(eraId)) || null) : null;
  const ANOUS_BASE = '../activities/';   // heroes-fortress/  →  corners/activities/
  function cornerStats(){
    if(!CORNER){ const keys=flatKeys(), d=keys.filter(k=>solved[k]).length; return { total:keys.length, done:d, pct: keys.length? d/keys.length*100:0 }; }
    let total=0, done=0;
    HISN.cornerEras[CORNER].forEach(eid=>{
      const pk = HISN.activities && HISN.activities[eid]; if(!pk) return;
      let sv; if(eid===eraId) sv=solved; else { try{ sv=JSON.parse(localStorage.getItem('hisn-acts-'+eid))||{}; }catch(e){ sv={}; } }
      pk.list.forEach(it=>LEVELS.forEach(L=>{ if(it.levels[L.id]){ total++; if(sv[it.id+':'+L.id]) done++; } }));
    });
    return { total, done, pct: total? done/total*100:0 };
  }
  function unlockedNow(){ try{ return !!(JSON.parse(localStorage.getItem('mkUnlocked')||'{}')[CORNER]); }catch(e){ return false; } }
  function refreshUnlock(){
    if(!CORNER || !(window.HISN && HISN.rewards && HISN.rewards[CORNER])) return false;
    const st=cornerStats(); if(st.total===0) return false;
    let u={}; try{ u=JSON.parse(localStorage.getItem('mkUnlocked')||'{}'); }catch(e){}
    if(st.pct>=75 && !u[CORNER]){ u[CORNER]=HISN.rewards[CORNER]; try{ localStorage.setItem('mkUnlocked',JSON.stringify(u)); }catch(e){} return true; }
    return false;
  }
  function rewardsBlock(){
    if(!CORNER || !(window.HISN && HISN.rewards && HISN.rewards[CORNER])) return '';
    refreshUnlock();
    const st=cornerStats(), open=unlockedNow();
    const cards = HISN.rewards[CORNER].map(r=>{
      const label = r.t[lang]||r.t.ar;
      return open
        ? `<a class="acts-reward" href="${ANOUS_BASE}${r.href}"><span class="arw-ic">${r.icon}</span><span class="arw-t">${label}</span></a>`
        : `<div class="acts-reward lock"><span class="arw-ic">🔒</span><span class="arw-t">${label}</span></div>`;
    }).join('');
    const status = open ? (lang==='ar'?'مفتوحة ✓':'Unlocked ✓')
                        : (lang==='ar'?`تُفتح عند ٧٥٪ — ركنُك الآن ${Math.round(st.pct)}%`:`Unlock at 75% — corner ${Math.round(st.pct)}%`);
    return `<div class="acts-rewards ${open?'open':''}">
      <div class="arw-head"><span>🎁 ${lang==='ar'?'جوائزُ أنوس · ٥ أنشطة':'Anous rewards · 5 activities'}</span><span class="arw-status">${status}</span></div>
      <div class="arw-grid">${cards}</div></div>`;
  }

  /* ───────────── HALL ───────────── */
  function renderHall(){
    const c = counts(), all = c.done >= c.total;
    const plate = `<div class="acts-plate">
        <div class="acts-emblem">${window.ICONS.target}</div>
        <div class="acts-titles">
          <div class="acts-tier">${era.tier[lang]} · ${lang==='ar'?'التحدّيات':'Challenges'}</div>
          <h2>${pack.title[lang]}<span class="acts-en">${pack.title.en}</span></h2>
          <p>${pack.sub[lang]}</p>
        </div>
      </div>`;
    const meter = `<div class="acts-meter ${all?'complete':''}">
        <span class="am-count">${c.done}<small style="opacity:.6">/${c.total}</small></span>
        <span class="am-track"><span class="am-fill" style="width:${Math.round(c.done/c.total*100)}%"></span></span>
        <span class="am-medal">🏅</span>
      </div>`;
    const finale = all ? `<div class="acts-finale">
        <div class="af-medal">🏆</div>
        <h3>${lang==='ar'?`أكملتَ كلَّ التحدّيات (${c.total})!`:`All ${c.total} challenges complete!`}</h3>
        <p>${lang==='ar'?`نلتَ وسامَ «${pack.medal.ar}» — أنت بطلٌ في تاريخِ الأنبياء.`:`You earned the “${pack.medal.en}” medal — a true history champion.`}</p>
      </div>` : '';
    const cards = pack.list.map((it,i)=>{
      const doneN = LEVELS.filter(L=>it.levels[L.id] && solved[it.id+':'+L.id]).length;
      const total = LEVELS.filter(L=>it.levels[L.id]).length;
      const pills = LEVELS.map(L=>{
        if(!it.levels[L.id]) return '';
        const done = solved[it.id+':'+L.id];
        return `<button class="ac-lvl ${done?'done':''}" data-id="${it.id}" data-level="${L.id}" style="--lc:${L.color}"><span class="ac-dot">${done?'✓':''}</span>${L.label[lang]}</button>`;
      }).join('');
      return `<div class="act-card ${doneN>=total?'all':''}" style="animation-delay:${i*.04}s">
        <span class="ac-ic">${it.icon||'🎯'}</span>
        <div class="ac-body">
          <div class="ac-titlerow"><span class="ac-title">${T(it.title)}</span><span class="ac-count">${doneN}/${total}</span></div>
          <div class="ac-levels">${pills}</div>
        </div>
      </div>`;
    }).join('');
    const intro = `<p class="acts-intro">${lang==='ar'?'اختر نشاطاً ثم مستوىً: مبتدئ · متوسط · متقدم':'Pick an activity, then a level: Beginner · Intermediate · Advanced'}</p>`;
    const points = '';   // "نقاط هذه الرحلة" removed — the unified score card now carries corner stats
    const foot = `<div class="acts-foot"><a href="era.html?era=${eraId}">← ${lang==='ar'?'العودةُ إلى المرحلة':'Back to the era'}</a></div>`;
    $('#hall').innerHTML = plate + meter + points + rewardsBlock() + finale + intro + `<div class="act-cards">${cards}</div>` + foot;
    $('#hall').querySelectorAll('.ac-lvl').forEach(b=>b.onclick=()=>openActivity(b.dataset.id, b.dataset.level));
  }

  /* ───────────── OVERLAY ───────────── */
  function openByKey(key){ const [id,level]=key.split(':'); openActivity(id, level); }
  function openActivity(id, level){
    const item = itemById(id), L = levelMeta(level), ch = challenge(id, level), k = KIND[ch.type];
    const ov = document.createElement('div');
    ov.className = 'act-ov'; ov.id = 'actOv';
    ov.innerHTML = `<div class="act-sheet" style="--ec:${L.color};--ec2:${shade(L.color,28)}">
      <div class="as-head">
        <span class="as-ic">${item.icon||k.ic}</span>
        <div class="as-meta"><div class="as-lvl">${L.label[lang]} · ${T(k.label)}</div><h3>${T(item.title)}</h3></div>
        <button class="as-x" id="asX" aria-label="close">✕</button>
      </div>
      <div class="as-body"><div id="asStage">${renderAct(ch)}</div><div class="as-result" id="asResult">${solved[ch.id]?(lang==='ar'?'✓ تمّ حلُّ هذا المستوى':'✓ Level already solved'):''}</div></div>
      <div class="as-foot">
        <button class="btn btn-ghost" id="asClose">${lang==='ar'?'إغلاق':'Close'}</button>
        <button class="btn btn-primary" id="asNext">${nextLabel(ch.id)}</button>
      </div>
    </div>`;
    document.body.appendChild(ov);
    document.body.style.overflow = 'hidden';
    bindAct(ch);
    const close = ()=>{ ov.style.animation='fadeIn .18s reverse forwards'; setTimeout(()=>{ ov.remove(); document.body.style.overflow=''; }, 160); };
    $('#asX').onclick = close; $('#asClose').onclick = close;
    ov.onclick = e=>{ if(e.target===ov) close(); };
    $('#asNext').onclick = ()=>{ const nx = nextUnsolved(ch.id); close(); if(nx) setTimeout(()=>openByKey(nx), 180); };
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown',esc); } });
  }
  function nextUnsolved(key){
    const keys = flatKeys(), start = keys.indexOf(key);
    for(let i=1;i<=keys.length;i++){ const cand = keys[(start+i)%keys.length]; if(cand!==key && !solved[cand]) return cand; }
    return null;
  }
  function nextLabel(key){
    return nextUnsolved(key) ? (lang==='ar'?'التحدّي التالي ←':'Next challenge →') : (lang==='ar'?'تمّ':'Done');
  }

  function hallMax(){ let n=0; pack.list.forEach(it=>LEVELS.forEach(L=>{ const lv=it.levels[L.id]; if(!lv) return;
    if(lv.type==='quiz') n+=lv.questions.length; else if(lv.type==='trueFalse') n+=lv.items.length;
    else if(lv.type==='match'||lv.type==='flip') n+=lv.pairs.length; else n+=1; })); return n*10; }
  function pts(key){ const t=Progress.addPoints(eraId, 'act:'+eraId+':'+key, 10); const e=$('#actPts'); if(e) e.textContent=t; }

  function markSolved(key){
    if(solved[key]) return; solved[key] = true; persist();
    const wasUnlocked = unlockedNow();
    const res = $('#asResult'); if(res){ res.textContent = lang==='ar'?'أحسنت! ✓ حُلَّ التحدّي':'Well done! ✓ Solved'; }
    const nb = $('#asNext'); if(nb) nb.textContent = nextLabel(key);
    burst();
    renderHall();                              // live-update the hall behind the overlay (also refreshes unlock)
    if(!wasUnlocked && unlockedNow()) unlockToast();
    if(counts().done >= counts().total) finishAll();
  }
  function unlockToast(){
    confetti();
    const t=document.createElement('div'); t.className='acts-unlock-toast';
    t.innerHTML = (lang==='ar'?'🎉 مبارك! تخطّيتَ ٧٥٪ — فُتِحت لك ٥ أنشطة من أنوس':'🎉 You passed 75% — 5 Anous activities unlocked');
    document.body.appendChild(t); void t.offsetWidth; t.classList.add('go');
    setTimeout(()=>t.remove(), 4200);
  }
  function finishAll(){
    if(!Progress.medals().find(m=>m.icon==='target')) Progress.grant('acts-'+eraId, { stars:3, medal:{ icon:'target', title: pack.medal } });
    header(); confetti();
  }

  /* ───────────── GAME RENDER (a = challenge object: {id, type, ...payload}) ───────────── */
  function renderAct(a){ return ({ quiz:gQuiz, order:gOrder, match:gMatch, trueFalse:gTF, whoAmI:gWho, flip:gFlip, maze:gMaze }[a.type])(a); }
  function bindAct(a){ ({ quiz:bQuiz, order:bOrder, match:bMatch, trueFalse:bTF, whoAmI:bWho, flip:bFlip, maze:bMaze }[a.type])(a); }

  /* quiz */
  function gQuiz(a){
    return `<div id="quizWrap">${a.questions.map((q,qi)=>`<div class="q"><div class="q-text">${qi+1}. ${T(q.q)}</div>
      <div class="q-opts">${q.options.map((o,oi)=>`<button class="q-opt" data-q="${qi}" data-o="${oi}">${T(o)}</button>`).join('')}</div></div>`).join('')}</div>`;
  }
  function bQuiz(a){
    let answered = 0;
    document.querySelectorAll('#actOv .q-opt').forEach(btn=>btn.onclick=()=>{
      const qi=+btn.dataset.q, oi=+btn.dataset.o, wrap=btn.closest('.q'); if(wrap.dataset.done) return; wrap.dataset.done='1';
      wrap.querySelectorAll('.q-opt').forEach(o=>o.disabled=true);
      if(oi===a.questions[qi].answer){ btn.classList.add('correct'); pts(a.id+'-q'+qi); }
      else { btn.classList.add('wrong'); wrap.querySelector(`.q-opt[data-o="${a.questions[qi].answer}"]`).classList.add('correct'); }
      if(++answered>=a.questions.length) markSolved(a.id);
    });
  }

  /* order */
  function gOrder(a){
    if(!shuffles[a.id]) shuffles[a.id]=shuffle(a.items.map((_,i)=>i));
    return `<div class="seq" id="seq">${orderRows(a)}</div>
      <button class="btn btn-primary" id="seqCheck" style="width:100%">${lang==='ar'?'تحقّق من الترتيب':'Check order'}</button>
      <div class="seq-result" id="seqRes"></div>`;
  }
  function orderRows(a){
    const arr = shuffles[a.id];
    return arr.map((it,pos)=>`<div class="seq-item"><span class="grip">${pos+1}</span><p>${T(a.items[it])}</p>
      <span class="moves"><button data-dir="-1" data-pos="${pos}" ${pos===0?'disabled':''}>↑</button><button data-dir="1" data-pos="${pos}" ${pos===arr.length-1?'disabled':''}>↓</button></span></div>`).join('');
  }
  function bOrder(a){
    document.querySelectorAll('#actOv #seq .moves button').forEach(b=>b.onclick=()=>{
      const pos=+b.dataset.pos, np=pos+ +b.dataset.dir, arr=shuffles[a.id]; if(np<0||np>=arr.length) return;
      [arr[pos],arr[np]]=[arr[np],arr[pos]]; $('#seq').innerHTML=orderRows(a); bOrder(a);
    });
    const chk=$('#seqCheck'); if(chk) chk.onclick=()=>{
      const ok=shuffles[a.id].every((v,i)=>v===i), res=$('#seqRes');
      res.textContent=ok?(lang==='ar'?'ترتيبٌ صحيح ✓':'Perfect order! ✓'):(lang==='ar'?'ليس بعد، حاول مرّةً أخرى ✗':'Not yet — try again ✗');
      res.className='seq-result '+(ok?'ok':'no'); if(ok){ pts(a.id+'-order'); markSolved(a.id); }
    };
  }

  /* match */
  function gMatch(a){
    if(!shuffles['m'+a.id]) shuffles['m'+a.id]=shuffle(a.pairs.map((_,i)=>i));
    const right=shuffles['m'+a.id];
    return `<div class="match-grid"><div class="match-col">${a.pairs.map((p,i)=>`<div class="mt-item" data-side="L" data-i="${i}">${T(p.a)}</div>`).join('')}</div>
      <div class="match-col">${right.map(i=>`<div class="mt-item" data-side="R" data-i="${i}">${T(a.pairs[i].b)}</div>`).join('')}</div></div>`;
  }
  function bMatch(a){
    let sel=null, done=0;
    document.querySelectorAll('#actOv .mt-item').forEach(el=>el.onclick=()=>{
      if(el.classList.contains('locked')) return;
      if(!sel){ sel=el; el.classList.add('sel'); return; }
      if(sel===el){ el.classList.remove('sel'); sel=null; return; }
      if(sel.dataset.side===el.dataset.side){ sel.classList.remove('sel'); sel=el; el.classList.add('sel'); return; }
      if(sel.dataset.i===el.dataset.i){ sel.classList.remove('sel'); sel.classList.add('locked'); el.classList.add('locked'); pts(a.id+'-'+el.dataset.i); sel=null;
        if(++done>=a.pairs.length) markSolved(a.id);
      } else { const a1=sel,a2=el; a1.classList.add('flash'); a2.classList.add('flash'); setTimeout(()=>{a1.classList.remove('flash','sel');a2.classList.remove('flash');},420); sel=null; }
    });
  }

  /* true / false */
  function gTF(a){
    return a.items.map((it,i)=>`<div class="tf-item" data-i="${i}" data-t="${it.t?1:0}">
      <div class="tf-q">${T(it.statement)}</div>
      <div class="tf-btns"><button data-v="1">${lang==='ar'?'صح ✓':'True ✓'}</button><button data-v="0">${lang==='ar'?'خطأ ✗':'False ✗'}</button></div></div>`).join('');
  }
  function bTF(a){
    let answered=0;
    document.querySelectorAll('#actOv .tf-item').forEach(item=>item.querySelectorAll('.tf-btns button').forEach(btn=>btn.onclick=()=>{
      if(item.dataset.done) return; item.dataset.done='1';
      const correct=item.dataset.t==='1', picked=btn.dataset.v==='1';
      item.querySelectorAll('button').forEach(b=>b.disabled=true);
      btn.classList.add(picked===correct?'pick-ok':'pick-no');
      if(picked===correct) pts(a.id+'-'+item.dataset.i);
      else { const rb=item.querySelector(`button[data-v="${correct?1:0}"]`); rb&&rb.classList.add('pick-ok'); }
      if(++answered>=a.items.length) markSolved(a.id);
    }));
  }

  /* who am I? */
  function gWho(a){
    const shown = shuffles['w'+a.id] || 1;
    const clues = a.clues.slice(0,shown).map((c,i)=>`<div class="wa-clue" style="animation-delay:${i*.05}s"><span class="qn">${i+1}</span><p>${T(c)}</p></div>`).join('');
    const more = shown<a.clues.length ? `<button class="wa-reveal" id="waMore">${lang==='ar'?'دليلٌ آخر +':'Another clue +'}</button>` : '';
    return `<div class="wa-clues">${clues}</div>${more}
      <div class="wa-opts">${a.options.map((o,i)=>`<button class="wa-opt" data-i="${i}">${T(o)}</button>`).join('')}</div>`;
  }
  function bWho(a){
    const more=$('#waMore'); if(more) more.onclick=()=>{ shuffles['w'+a.id]=(shuffles['w'+a.id]||1)+1; $('#asStage').innerHTML=gWho(a); bWho(a); };
    document.querySelectorAll('#actOv .wa-opt').forEach(b=>b.onclick=()=>{
      if(b.disabled) return; const ok=+b.dataset.i===a.answer;
      if(ok){ document.querySelectorAll('#actOv .wa-opt').forEach(o=>o.disabled=true); b.classList.add('correct'); pts(a.id+'-who'); markSolved(a.id); }
      else { b.classList.add('wrong'); b.disabled=true; }
    });
  }

  /* flip cards (memory) */
  function gFlip(a){
    const key='f'+a.id;
    if(!shuffles[key]){
      const deck=[]; a.pairs.forEach((p,i)=>{ deck.push({pi:i,face:'a'}); deck.push({pi:i,face:'b'}); });
      shuffles[key]={ deck:shuffle(deck), matched:{} };
    }
    const st=shuffles[key];
    const cards=st.deck.map((c,idx)=>{
      const face = c.face==='a'?a.pairs[c.pi].a:a.pairs[c.pi].b;
      const done = st.matched[idx];
      return `<button class="flip-card ${done?'matched':''}" data-idx="${idx}" data-pi="${c.pi}">
        <span class="fc-inner"><span class="fc-back">۞</span><span class="fc-front">${T(face)}</span></span></button>`;
    }).join('');
    return `<p class="act-hint" style="margin-bottom:.7rem">${lang==='ar'?'اقلِبِ البطاقتينِ المتطابقتين: النبيُّ وعلامتُه':'Flip the matching pair: a prophet and his sign'}</p>
      <div class="flip-grid" style="--cols:${a.pairs.length<=4?4:4}">${cards}</div>`;
  }
  function bFlip(a){
    const key='f'+a.id, st=shuffles[key]; let open=null, lock=false, done=Object.keys(st.matched).length;
    document.querySelectorAll('#actOv .flip-card').forEach(card=>card.onclick=()=>{
      if(lock || card.classList.contains('matched') || card.classList.contains('show')) return;
      card.classList.add('show');
      if(!open){ open=card; return; }
      if(open.dataset.pi===card.dataset.pi && open!==card){
        st.matched[open.dataset.idx]=1; st.matched[card.dataset.idx]=1;
        open.classList.add('matched'); card.classList.add('matched'); pts(a.id+'-'+open.dataset.pi); open=null;
        if((done+=2)>=st.deck.length) markSolved(a.id);
      } else {
        lock=true; const a1=open, a2=card; open=null;
        setTimeout(()=>{ a1.classList.remove('show'); a2.classList.remove('show'); lock=false; }, 750);
      }
    });
  }

  /* journey maze */
  function buildMaze(W,H){
    const cols=2*W+1, rows=2*H+1, g=Array.from({length:rows},()=>Array(cols).fill(1));
    const vis=Array.from({length:H},()=>Array(W).fill(false));
    (function carve(cx,cy){ vis[cy][cx]=true; g[2*cy+1][2*cx+1]=0;
      for(const [dx,dy] of shuffle([[0,-1],[0,1],[-1,0],[1,0]])){ const nx=cx+dx,ny=cy+dy;
        if(nx>=0&&ny>=0&&nx<W&&ny<H&&!vis[ny][nx]){ g[2*cy+1+dy][2*cx+1+dx]=0; carve(nx,ny); } } })(0,0);
    return { g, cols, rows, px:1, py:1, ex:cols-2, ey:rows-2 };
  }
  function gMaze(a){
    const key='mz'+a.id;
    if(!shuffles[key]) shuffles[key]=buildMaze(a.size, a.size);
    const m=shuffles[key];
    let cells='';
    for(let y=0;y<m.rows;y++) for(let x=0;x<m.cols;x++){
      const wall=m.g[y][x]===1, isEnd=(x===m.ex&&y===m.ey);
      cells+=`<i class="mz-cell ${wall?'wall':'path'} ${isEnd?'end':''}">${isEnd?a.goal:''}</i>`;
    }
    return `<p class="act-hint" style="margin-bottom:.6rem">${T(a.hook)}</p>
      <div class="maze-route"><span>${T(a.start)}</span><b>→</b><span>${T(a.dest)} ${a.goal}</span></div>
      <div class="maze" id="maze" style="grid-template-columns:repeat(${m.cols},1fr)" tabindex="0">${cells}
        <span class="mz-player" id="mzP">🧍</span></div>
      <div class="dpad">
        <button data-dx="0" data-dy="-1" class="dp-up">▲</button>
        <button data-dx="-1" data-dy="0" class="dp-left">◀</button>
        <button data-dx="1" data-dy="0" class="dp-right">▶</button>
        <button data-dx="0" data-dy="1" class="dp-down">▼</button>
      </div>
      <div class="maze-tip">${lang==='ar'?'استخدمِ الأسهمَ أو الأزرار للتحرّك':'Use the arrow keys or buttons to move'}</div>`;
  }
  function bindMaze(a){ bMaze(a); }
  function bMaze(a){
    const key='mz'+a.id, m=shuffles[key], maze=$('#maze'), tok=$('#mzP');
    function place(){ tok.style.left=((m.px+0.5)/m.cols*100)+'%'; tok.style.top=((m.py+0.5)/m.rows*100)+'%'; }
    place(); maze && maze.focus({preventScroll:true});
    function move(dx,dy){
      const nx=m.px+dx, ny=m.py+dy;
      if(nx<0||ny<0||nx>=m.cols||ny>=m.rows) return;
      if(m.g[ny][nx]===1) return;            // wall
      m.px=nx; m.py=ny; place();
      if(m.px===m.ex && m.py===m.ey){ tok.textContent='🎉'; pts(a.id+'-maze'); markSolved(a.id); }
    }
    document.querySelectorAll('#actOv .dpad button').forEach(b=>b.onclick=()=>move(+b.dataset.dx,+b.dataset.dy));
    function onKey(e){
      if(!document.body.contains(maze)){ document.removeEventListener('keydown',onKey); return; }
      const map={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};
      if(map[e.key]){ e.preventDefault(); move(map[e.key][0], map[e.key][1]); }
    }
    document.addEventListener('keydown', onKey);
  }

  /* ───────────── helpers ───────────── */
  function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} if(a.length>1&&a.every((v,i)=>v===i))[a[0],a[1]]=[a[1],a[0]]; return a; }
  function shade(hex,amt){ const n=parseInt(hex.slice(1),16); let r=Math.min(255,(n>>16)+amt),g=Math.min(255,((n>>8)&255)+amt),b=Math.min(255,(n&255)+amt); return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }
  function burst(){ const e=document.createElement('div'); e.className='xp-burst'; e.textContent='✓'; document.body.appendChild(e); void e.offsetWidth; e.classList.add('go'); setTimeout(()=>e.remove(),1500); }
  function confetti(){ const cols=['#F5CC5A','#E67E22','#2A87B0','#7DB344','#E06898']; for(let i=0;i<70;i++){ const c=document.createElement('div'); c.style.cssText=`position:fixed;top:-10px;width:9px;height:9px;z-index:90;border-radius:2px;left:${Math.random()*100}vw;background:${cols[i%cols.length]}`; document.body.appendChild(c); c.animate([{transform:'translateY(0) rotate(0)',opacity:1},{transform:`translateY(${70+Math.random()*30}vh) rotate(${360+Math.random()*360}deg)`,opacity:.3}],{duration:1700+Math.random()*900,easing:'cubic-bezier(.2,.6,.4,1)'}).onfinish=()=>c.remove(); } }

  function header(){ $('#lvl').textContent='LVL '+Progress.level(); $('#xp').textContent=Progress.totalXp()+' XP'; requestAnimationFrame(()=>$('#xpfill').style.width=Progress.xpPct()+'%'); }

  let gi=0, gt=null;
  function injectRewardCSS(){
    if(document.getElementById('acts-reward-css')) return;
    const s=document.createElement('style'); s.id='acts-reward-css';
    s.textContent=`
      .acts-rewards{margin:.5rem 0 1.1rem;padding:.95rem 1.05rem;border:1.5px solid var(--ec,#C9A227);border-radius:1.05rem;background:rgba(255,255,255,.05)}
      .acts-rewards.open{border-color:#2ECC71}
      .acts-rewards .arw-head{display:flex;justify-content:space-between;align-items:center;gap:.6rem;font-weight:900;margin-bottom:.7rem;font-size:.95rem;flex-wrap:wrap}
      .acts-rewards .arw-status{font-size:.78rem;opacity:.85;font-weight:700}
      .arw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.5rem}
      .acts-reward{display:flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:.7rem;padding:.5rem .6rem;text-decoration:none;color:inherit;font-weight:700;font-size:.8rem}
      .acts-reward.lock{opacity:.5}
      .acts-reward:not(.lock):hover{border-color:#2ECC71;transform:translateY(-2px)}
      .acts-reward .arw-ic{font-size:1.25rem;flex:0 0 auto}
      .acts-unlock-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);z-index:120;background:#16623f;color:#fff;font-weight:800;padding:.8rem 1.2rem;border-radius:1rem;box-shadow:0 12px 30px rgba(0,0,0,.4);opacity:0;transition:opacity .3s,transform .3s;max-width:90vw;text-align:center}
      .acts-unlock-toast.go{opacity:1;transform:translateX(-50%) translateY(0)}
    `;
    document.head.appendChild(s);
  }
  function guide(){ const L=HISN.guide.lines; $('#guideLine').textContent=L[gi%L.length][lang]; $('#guideName').textContent=HISN.guide.name[lang]; gi++; }
  window.tuckGuide=()=>$('#guide').classList.toggle('tuck');

  function setLang(l){
    lang=l; Progress.setLang(l); document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    $('#langAr').classList.toggle('on',l==='ar'); $('#langEn').classList.toggle('on',l==='en');
    $('#backTxt').textContent=l==='ar'?'المرحلة':'Era';
    var __bk=$('#backLink'); if(__bk) __bk.setAttribute('href','era.html?era='+eraId);
    $('#brandName').textContent=pack.title[l];
    renderHall();
  }
  window.setLang=setLang;

  function boot(){
    era  = HISN.eras[eraId];
    pack = HISN.activities[eraId];
    if(!era || !pack){ document.body.innerHTML='<p style="padding:2rem;text-align:center">No challenges for this era yet.</p>'; return; }
    // optional ?cat= filter — show only activities tagged for this category (untagged = shared/all)
    const catId = params.get('cat');
    if(catId){
      const cat = (era.categories||[]).find(c=>c.id===catId);
      const filtered = pack.list.filter(it=>!it.cat || it.cat.indexOf(catId)>-1);
      if(filtered.length){
        pack = Object.assign({}, pack, { list: filtered });
        if(cat) pack = Object.assign({}, pack, { title: cat.title });
      }
    }
    injectRewardCSS();
    refreshUnlock();
    document.documentElement.style.setProperty('--ec', era.accent);
    document.documentElement.style.setProperty('--ec2', era.accent2);
    $('#brandBadge').innerHTML=HISN_SVG.badge;
    $('#guideAvatar').innerHTML=HISN_SVG.guide;
    let s=''; for(let i=0;i<40;i++){ s+=`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;--d:${2+Math.random()*3}s;--dl:${-Math.random()*4}s"></i>`; }
    $('#stars').innerHTML=s;
    try{ Progress.registerMax(eraId, 'acts:'+eraId, hallMax()); }catch(e){}
    header(); setLang(lang);
    guide(); clearInterval(gt); gt=setInterval(guide,6500);
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
