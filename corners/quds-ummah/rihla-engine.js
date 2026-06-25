/* ════ مُحَرِّكُ الرِّحلات — generic journey engine (Faith Minaret) ════
   Reads window.RIHLA_CFG = { stations, prefix, confetti, T:{...labels} }
   Same station schema as aman-stations.js, with `card` replacing
   `nameOfAllah` (falls back to nameOfAllah if present).            */
(function(){
  const CFG = window.RIHLA_CFG || {};
  const S = CFG.stations || [];
  const P = CFG.prefix || 'rihla';
  const K = { done:P+'Done', journal:P+'Journal', name:P+'Name', acts:P+'Acts', lang:'bunyanLang' };
  let lang = localStorage.getItem(K.lang) || 'ar';
  let done = new Set(JSON.parse(localStorage.getItem(K.done)||'[]'));
  let journal = JSON.parse(localStorage.getItem(K.journal)||'{}');
  let acts = JSON.parse(localStorage.getItem(K.acts)||'{}');
  let cur = 0;
  const $ = s => document.querySelector(s);
  const isAr = () => lang==='ar';

  /* ── labels: defaults merged with CFG.T ── */
  const D = {
    mapEnter:{ar:'ادخُل المَحطّة ←',en:'Enter →'},
    mapDone:{ar:'مُكتَمِلة ✓ — أعِد الزِّيارة',en:'Done ✓ — revisit'},
    mapSoon:{ar:'قريباً ✨',en:'Coming soon ✨'},
    finishTitle:{ar:'وِسامُ الرِّحلة',en:'Journey Medal'},
    meterStart:{ar:'ابدأ الرِّحلة… كُلُّ مَحطّةٍ كَنزٌ جَديد',en:'Begin the journey… every station is a new treasure'},
    meterMid:{ar:'أحسَنت! أتمَمتَ {n} مِن {t} مَحطّات',en:'Great! You finished {n} of {t} stations'},
    meterDone:{ar:'🎉 اكتَمَلَتِ الرِّحلة! ما شاءَ الله',en:'🎉 The journey is complete! MashaAllah'},
    coll1:{icon:'🎟️',title:{ar:'الأوسِمة',en:'Badges'},unit:{ar:'وِسام',en:'badges'}},
    coll2:{icon:'🃏',title:{ar:'البِطاقات',en:'Cards'},unit:{ar:'بِطاقة',en:'cards'}},
    coll3:{icon:'🔑',title:{ar:'المَفاتيح',en:'Keys'}},
    collCert:{icon:'📜',title:{ar:'الشَّهادة',en:'Diploma'},cta:{ar:'اطبَع شَهادَتَك ←',en:'Print yours →'}},
    kick:{ar:'المَحطّة {n} مِن {t}',en:'Station {n} of {t}'},
    hNarr:{ar:'يوسُف يَحكي',en:'Yusuf Tells the Story'},
    hLogic:{ar:'فَكِّر مَعي',en:'Think With Me'},
    hMyth:{ar:'بَطاقةُ تَصحيحِ الفِكرة',en:'Idea-Fixer Card'},
    hMatch:{ar:'لُعبةُ الوَصل',en:'Match-Up Game'},
    hWahy:{ar:'إشراقةُ الوَحي',en:'Light of Revelation'},
    hCard:{ar:'بِطاقةُ الكَنز',en:'Treasure Card'},
    hKey:{ar:'مِفتاحُ المَحطّة',en:'Station Key'},
    hDua:{ar:'دُعاءٌ تَحفَظُه',en:'A Dua to Memorize'},
    hMission:{ar:'مُهِمّةُ المَحطّة',en:'Station Mission'},
    hJournal:{ar:'دَفتَرُ الرِّحلة',en:'Journey Journal'},
    shSays:{ar:'سُؤالٌ يَحتاجُ جَواباً:',en:'A question needing an answer:'},
    rebut:{ar:'وجَوابُنا ↓',en:'Our answer ↓'},
    mythFront:{ar:'الفِكرةُ الخاطِئة',en:'The Wrong Idea'},
    mythBack:{ar:'الحَقيقة',en:'The Truth'},
    flipHint:{ar:'انقُر البِطاقةَ لِتَقلِبَها 🔄',en:'Tap the card to flip it 🔄'},
    matchDone:{ar:'🎉 أحسَنت! كُلُّ شَيءٍ في مَوضِعِه.',en:'🎉 Brilliant! Everything in its place.'},
    journalPh:{ar:'اكتُب ما تَعَلَّمَهُ قَلبُكَ اليوم…',en:'Write what your heart learned today…'},
    stampDo:{ar:'⭐ أتمِم هذه المَحطّة',en:'⭐ Complete this station'},
    stampDone:{ar:'✓ مَحطّةٌ مُكتَمِلة',en:'✓ Station complete'},
    nextHint:{ar:'جاهِزٌ لِلتّالية؟',en:'Ready for the next?'},
    nextBtn:{ar:'المَحطّةُ التّالية ←',en:'Next station →'},
    toastBadge:{ar:'🎖️ أحسَنت! حَصَلتَ على وِسام «{b}»',en:'🎖️ Great! You earned the “{b}” badge'},
    drawer1:{ar:'🎟️ الأوسِمة',en:'🎟️ Badges'},
    drawer2:{ar:'🃏 البِطاقات',en:'🃏 Cards'},
    drawer3:{ar:'🔑 المَفاتيح',en:'🔑 Keys'},
    locked:{ar:'مُقفَل',en:'Locked'},
    lockedCard:{ar:'أكمِل المَحطّةَ لِتَكشِفَ البِطاقة',en:'Complete the station to reveal the card'},
    lockedKey:{ar:'أكمِل المَحطّةَ لِتَنالَ المِفتاح',en:'Complete the station to earn the key'},
    lockedKeyT:{ar:'مِفتاحٌ مُقفَل',en:'Locked key'},
    fromStation:{ar:'مِن مَحطّة: ',en:'From: '},
    certSeal:'🏅',
    certKick:{ar:'منارةُ العقيدة',en:'Faith Minaret'},
    certTitle:{ar:'شَهادةُ إتمامِ الرِّحلة',en:'Journey Completion Certificate'},
    certName:{ar:'✦ اكتُب اسمَك ✦',en:'✦ Your name ✦'},
    certEmpty:{ar:'ابدَأ رِحلَتَكَ بِإتمامِ أوّلِ مَحطّة، وستَظهَرُ هُنا كُنوزُكَ التي جَمَعتَها.',en:'Begin by completing your first station, and the treasures you gather will appear here.'},
    certStatement:{ar:'أتَمَّ هذا القَلبُ الصَّغيرُ <b>{n}</b> مِن {t} مَحطّاتٍ في هذِهِ الرِّحلةِ المُبارَكة.',en:'This young heart completed <b>{n}</b> of {t} stations in this blessed journey.'},
    certFoot:{ar:'عَدَدُ الأوسِمة: ',en:'Badges earned: '},
  };
  const T = {};
  Object.keys(D).forEach(k=>{
    const o = (CFG.T||{})[k];
    T[k] = (o && typeof o==='object' && typeof D[k]==='object' && !Array.isArray(D[k])) ? Object.assign({},D[k],o) : (o!==undefined?o:D[k]);
  });
  const t = obj => typeof obj==='string'?obj:(obj[lang]!==undefined?obj[lang]:obj.ar);
  const fmt = (obj,vars) => t(obj).replace(/\{(\w+)\}/g,(_,k)=>vars[k]!==undefined?vars[k]:'{'+k+'}');
  const cardOf = st => st.card || st.nameOfAllah;

  /* ───────── LANG ───────── */
  function applyLang(){
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr()?'rtl':'ltr';
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    localStorage.setItem(K.lang,lang);
    renderMap(); renderCollections();
    if($('#reader').classList.contains('open')) openStation(cur);
  }
  document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;applyLang();});

  /* ───────── MAP ───────── */
  function renderMap(){
    const map=$('#map');
    map.querySelectorAll('.station,.finish').forEach(e=>e.remove());
    S.forEach((st,i)=>{
      const side = i%2===0?'r':'l';
      const d=done.has(st.id), locked=!!st.locked;
      const _pr=actProg(st); const _pt=_pr.total; const _pd=d?_pt:_pr.done; const _pp=_pt?Math.round(_pd/_pt*100):0;
      const el=document.createElement('div');
      el.className='station '+side+(locked?' locked':'');
      el.innerHTML=`
        <div class="node ${d?'done':''} ${locked?'locked':''}" style="--nc:${st.color}" data-i="${i}">
          ${locked?'<span class="lock">🔒</span>':`<span class="face">${st.icon}</span>`}
          <span class="num">${st.num}</span>
        </div>
        <div class="s-label">
          <div class="t">${st.title[lang]}<span class="em">${st.emoji}</span></div>
          <span class="go">${locked?t(T.mapSoon):(d?t(T.mapDone):t(T.mapEnter))}</span>
          ${locked?'':`<div class="s-prog" style="height:6px;background:rgba(127,127,127,.22);border-radius:5px;overflow:hidden;margin-top:.45rem;max-width:220px"><i style="display:block;height:100%;width:${_pp}%;background:${st.color};border-radius:5px;transition:width .45s"></i></div><div class="s-prog-txt" style="font-size:.7rem;font-weight:800;opacity:.65;margin-top:.25rem">${_pd}/${_pt} ${lang==='ar'?'أنشطة':'activities'}</div>`}
        </div>`;
      map.appendChild(el);
      if(!locked){ el.style.cursor='pointer'; el.onclick=()=>openStation(i); }
    });
    const fin=document.createElement('div');
    fin.className='finish';
    fin.innerHTML=`<div class="cup" id="cupBtn">🏆</div><div class="ft">${t(T.finishTitle)}</div>`;
    map.appendChild(fin);
    fin.querySelector('#cupBtn').onclick=openCertificate;
    updateMeter();
  }

  const activeCount = () => S.filter(s=>!s.locked).length;
  const doneActive = () => S.filter(s=>!s.locked && done.has(s.id)).length;

  function updateMeter(){
    const tot=S.length, n=S.filter(s=>done.has(s.id)).length;
    $('#pCount').textContent=`${n} / ${tot}`;
    $('#pFill').style.width=(n/tot*100)+'%';
    const da=doneActive(), ac=activeCount();
    let lbl;
    if(da===0) lbl=t(T.meterStart);
    else if(da<ac) lbl=fmt(T.meterMid,{n:da,t:ac});
    else lbl=t(T.meterDone);
    $('#meterLabel').textContent=lbl;
  }

  /* ───────── COLLECTIONS BAR ───────── */
  function renderCollections(){
    const da=doneActive(), totalActive=activeCount();
    $('#collStickers').innerHTML=`<div class="ci">${T.coll1.icon}</div><div class="ct">${t(T.coll1.title)}</div><div class="cn">${da} ${t(T.coll1.unit)}</div>`;
    $('#collNames').innerHTML=`<div class="ci">${T.coll2.icon}</div><div class="ct">${t(T.coll2.title)}</div><div class="cn">${da} ${t(T.coll2.unit)}</div>`;
    $('#collKeys').innerHTML=`<div class="ci">${T.coll3.icon||'🔑'}</div><div class="ct">${t(T.coll3.title)}</div><div class="cn">${da} / ${totalActive}</div>`;
    $('#collCert').innerHTML=`<div class="ci">${T.collCert.icon||'📜'}</div><div class="ct">${t(T.collCert.title)}</div><div class="cn">${t(T.collCert.cta)}</div>`;
  }

  /* ───────── READER ───────── */
  function nextExists(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked) return true; return false; }
  function gotoNext(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked){openStation(k);return;} }
  function gotoPrev(i){ for(let k=i-1;k>=0;k--) if(!S[k].locked){openStation(k);return;} }

  function openStation(i){
    cur=i; const st=S[i]; if(st.locked) return;
    const L=lang, d=done.has(st.id), card=cardOf(st);
    $('#rBody').innerHTML=`
      <div class="s-hero" style="--accent:${st.color}">
        <div class="ring">${st.icon}</div>
        <div class="kick">${fmt(T.kick,{n:st.num,t:S.length})}</div>
        <h2>${st.title[L]} <span>${st.emoji}</span></h2>
      </div>
      <div class="blocks">

        <div class="block wow">
          <h3><span class="bi">🎙️</span>${t(T.hNarr)}</h3>
          <p>${st.narration[L]}</p>
        </div>

        <div class="block chance">
          <h3><span class="bi">🧠</span>${t(T.hLogic)}</h3>
          <div class="mrchance">
            <div class="mc-face">🤨</div>
            <div class="mc-body"><div class="mc-name">${t(T.shSays)}</div><div class="mc-say">${st.shubha[L]}</div></div>
          </div>
          <div class="rebut-tag">🛡️ ${t(T.rebut)}</div>
          <p>${st.logic[L]}</p>
        </div>

        <div class="block myth">
          <h3><span class="bi">🃏</span>${t(T.hMyth)}</h3>
          <div class="flip" id="flipCard">
            <div class="flip-inner">
              <div class="flip-face flip-front"><div class="ft-tag">${t(T.mythFront)}</div><div>${st.myth.claim[L]}</div></div>
              <div class="flip-face flip-back"><div class="ft-tag">${t(T.mythBack)}</div><div>${st.myth.bust[L]}</div></div>
            </div>
          </div>
          <div class="flip-hint">${t(T.flipHint)}</div>
        </div>

        <div class="block matchb">
          <h3><span class="bi">🧩</span>${t(T.hMatch)}</h3>
          <p style="margin-bottom:.8rem;font-size:.95rem">${st.match.title[L]}</p>
          <div class="match-cols">
            <div class="match-col" id="matchL"></div>
            <div class="match-col" id="matchR"></div>
          </div>
          <div class="match-done" id="matchDone"></div>
        </div>

        <div class="block wahy">
          <h3><span class="bi">🌟</span>${t(T.hWahy)}</h3>
          <div class="ayah">${st.reflection.ayah}</div>
          <div class="ayah-ref">${st.reflection.ref[L]}</div>
          <div class="explain">${st.reflection.explain[L]}</div>
        </div>

        <div class="block name">
          <h3><span class="bi">${T.coll2.icon}</span>${t(T.hCard)}</h3>
          <div class="name-card">
            <div class="name-ar">${card.name.ar}</div>
            <div class="name-en">${card.name.en}</div>
            <div class="name-mean">${card.meaning[L]}</div>
          </div>
        </div>

        <div class="block key">
          <h3><span class="bi">🔑</span>${t(T.hKey)}</h3>
          <div class="key-card"><span class="ki">🗝️</span><span class="kt">«${st.proof[L]}»</span></div>
        </div>

        <div class="block dua">
          <h3><span class="bi">🤲</span>${t(T.hDua)}</h3>
          <div class="dua-text">${st.dua[L]}</div>
        </div>

        <div class="block exp">
          <h3><span class="bi">🧭</span>${t(T.hMission)}</h3>
          <p>${st.mission[L]}</p>
        </div>

        <div class="block journal">
          <h3><span class="bi">✍️</span>${t(T.hJournal)}</h3>
          <div class="journal">
            <textarea id="journalBox" placeholder="${t(T.journalPh)}">${(journal[st.id]||'').replace(/</g,'&lt;')}</textarea>
            <div class="saved" id="journalSaved"></div>
          </div>
        </div>
      </div>

      <div class="r-foot">
        <button class="stampbtn ${d?'done':''}" id="stampBtn">
          ${d?t(T.stampDone):t(T.stampDo)}
        </button>
        ${nextExists(i)?`<div class="r-next-hint">${t(T.nextHint)} <button id="nextBtn">${t(T.nextBtn)}</button></div>`:''}
      </div>`;

    $('#rCount').textContent=`${st.num} / ${S.length}`;
    $('#rPrev').disabled=i<=0;
    $('#rNext').disabled=!nextExists(i);

    $('#flipCard').onclick=function(){ this.classList.toggle('flipped'); markAct(st,'flip'); };
    setupMatch(st);
    setupJournal(st);
    const stamp=$('#stampBtn');
    stamp.onclick=()=>{ if(!done.has(st.id)){ markDone(st); celebrate(); openStation(i);} };
    const nb=$('#nextBtn'); if(nb) nb.onclick=()=>gotoNext(i);

    $('#reader').classList.add('open');
    $('#reader').scrollTop=0;
    const sh=document.querySelector('.sheet'); if(sh) sh.scrollTop=0;
  }

  /* ───────── MATCH GAME ───────── */
  function setupMatch(st){
    const pairs=st.match.pairs;
    const left=pairs.map((p,i)=>({txt:p.tool[lang],pair:i,side:'L'}));
    const right=pairs.map((p,i)=>({txt:p.job[lang],pair:i,side:'R'}));
    const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
    const Lc=$('#matchL'), Rc=$('#matchR'), doneEl=$('#matchDone');
    function render(col,arr){ col.innerHTML=arr.map(it=>`<div class="match-item" data-pair="${it.pair}" data-side="${it.side}">${it.txt}</div>`).join(''); }
    render(Lc,shuf(left)); render(Rc,shuf(right));
    let sel=null, matched=0;
    [...Lc.children,...Rc.children].forEach(el=>{
      el.onclick=()=>{
        if(el.classList.contains('matched')) return;
        if(!sel){ sel=el; el.classList.add('sel'); return; }
        if(sel===el){ sel.classList.remove('sel'); sel=null; return; }
        if(sel.dataset.side===el.dataset.side){ sel.classList.remove('sel'); sel=el; el.classList.add('sel'); return; }
        if(sel.dataset.pair===el.dataset.pair){
          sel.classList.remove('sel'); sel.classList.add('matched'); el.classList.add('matched');
          sel=null; matched++;
          if(matched===pairs.length){ doneEl.textContent=t(T.matchDone); markAct(st,'match'); }
        } else {
          const a=sel, b=el; a.classList.add('wrong'); b.classList.add('wrong');
          setTimeout(()=>{a.classList.remove('wrong','sel');b.classList.remove('wrong');},360);
          sel=null;
        }
      };
    });
  }

  /* ───────── JOURNAL ───────── */
  let jTimer;
  function setupJournal(st){
    const box=$('#journalBox'), saved=$('#journalSaved');
    box.oninput=()=>{
      journal[st.id]=box.value;
      if(box.value.trim()) markAct(st,'journal');
      clearTimeout(jTimer);
      jTimer=setTimeout(()=>{
        localStorage.setItem(K.journal,JSON.stringify(journal));
        saved.textContent=t({ar:'حُفِظَ ✓',en:'Saved ✓'});
        setTimeout(()=>saved.textContent='',1400);
      },350);
    };
  }

  /* ───────── ACTIVITY PROGRESS ───────── */
  function actsAvail(st){ var a=['journal']; if(st.myth) a.unshift('flip'); if(st.match&&st.match.pairs&&st.match.pairs.length) a.push('match'); return a; }
  function actProg(st){ var av=actsAvail(st); var rec=acts[st.id]||{}; var dn=av.filter(function(k){return rec[k];}).length; return {done:dn,total:av.length}; }
  function markAct(st,key){ if(!st) return; var id=st.id; if(!acts[id]) acts[id]={}; if(acts[id][key]) return; acts[id][key]=1; localStorage.setItem(K.acts,JSON.stringify(acts)); renderMap(); }

  /* ───────── STAMP ───────── */
  function markDone(st){
    done.add(st.id);
    localStorage.setItem(K.done,JSON.stringify([...done]));
    renderMap(); renderCollections();
    toast(fmt(T.toastBadge,{b:st.badge.title[lang]}));
  }

  /* ───────── COLLECTIONS DRAWER ───────── */
  function openDrawer(kind){
    const dw=$('#drawer'), title=$('#dwTitle'), body=$('#dwBody');
    if(kind==='stickers'){
      title.textContent=t(T.drawer1);
      body.innerHTML=`<div class="sticker-grid">`+S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="sticker ${d?'':'locked'}" style="--sc:${s.badge.color}">
          <div class="si">${d?s.badge.icon:'🔒'}</div>
          <div class="st">${d?s.badge.title[lang]:t(T.locked)}</div></div>`;
      }).join('')+`</div>`;
    } else if(kind==='names'){
      title.textContent=t(T.drawer2);
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id), card=cardOf(s);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?T.coll2.icon:'🔒'}</div><div>
          <div class="lct"><span class="lc-name">${d?card.name.ar:'• • •'}</span> ${d?'· '+card.name.en:''}</div>
          <div class="lcs">${d?card.meaning[lang]:t(T.lockedCard)}</div></div></div>`;
      }).join('');
    } else if(kind==='keys'){
      title.textContent=t(T.drawer3);
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🗝️':'🔒'}</div><div>
          <div class="lct">${d?'«'+s.proof[lang]+'»':t(T.lockedKeyT)}</div>
          <div class="lcs">${d?t(T.fromStation)+s.title[lang]:t(T.lockedKey)}</div></div></div>`;
      }).join('');
    }
    dw.classList.add('open');
  }
  $('#collStickers').onclick=()=>openDrawer('stickers');
  $('#collNames').onclick=()=>openDrawer('names');
  $('#collKeys').onclick=()=>openDrawer('keys');
  $('#dwClose').onclick=()=>$('#drawer').classList.remove('open');
  $('#drawer').addEventListener('click',e=>{ if(e.target.id==='drawer') $('#drawer').classList.remove('open'); });

  /* ───────── CERTIFICATE ───────── */
  function openCertificate(){
    const ov=$('#certOverlay');
    const doneStations=S.filter(s=>!s.locked&&done.has(s.id));
    const nm=localStorage.getItem(K.name)||'';
    const total=activeCount();
    let statement;
    if(doneStations.length===0){
      statement=t(T.certEmpty);
    } else {
      statement=fmt(T.certStatement,{n:doneStations.length,t:total});
    }
    const keysHTML = doneStations.map(s=>`<span class="ck">🗝️ ${s.proof[lang]}</span>`).join('');
    $('#certBox').innerHTML=`
      <div class="cert-seal">${T.certSeal}</div>
      <div class="cert-kick">${t(T.certKick)}</div>
      <div class="cert-title">${t(T.certTitle)}</div>
      <div class="cert-name">${nm||t(T.certName)}</div>
      <div class="cert-statement">${statement}</div>
      ${keysHTML?`<div class="cert-keys">${keysHTML}</div>`:''}
      <div class="cert-foot">${t(T.certFoot)}${doneStations.length} 🎖️</div>`;
    const nameInput=$('#certName'); nameInput.value=nm;
    nameInput.oninput=()=>{
      localStorage.setItem(K.name,nameInput.value);
      $('#certBox .cert-name').textContent=nameInput.value||t(T.certName);
    };
    ov.classList.add('open');
  }
  $('#certClose').onclick=()=>$('#certOverlay').classList.remove('open');
  $('#certPrint').onclick=()=>window.print();
  $('#certOverlay').addEventListener('click',e=>{ if(e.target.id==='certOverlay') $('#certOverlay').classList.remove('open'); });

  /* ───────── READER CHROME ───────── */
  $('#rClose').onclick=()=>$('#reader').classList.remove('open');
  $('#rPrev').onclick=()=>gotoPrev(cur);
  $('#rNext').onclick=()=>gotoNext(cur);
  $('#reader').addEventListener('click',e=>{ if(e.target.id==='reader') $('#reader').classList.remove('open'); });
  document.addEventListener('keydown',e=>{
    if($('#reader').classList.contains('open')){
      if(e.key==='Escape') $('#reader').classList.remove('open');
      if(e.target.tagName==='TEXTAREA') return;
      if(e.key==='ArrowLeft') isAr()?gotoNext(cur):gotoPrev(cur);
      if(e.key==='ArrowRight') isAr()?gotoPrev(cur):gotoNext(cur);
    }
    if(e.key==='Escape'){ $('#drawer').classList.remove('open'); $('#certOverlay').classList.remove('open'); }
  });

  /* ───────── FX ───────── */
  function celebrate(){
    const c=$('#confetti'), cols=CFG.confetti||['#E8C66B','#1ABC9C','#2980B9','#8E44AD','#E67E22','#27AE60'];
    for(let k=0;k<60;k++){
      const d=document.createElement('div'); d.className='cf';
      d.style.left=Math.random()*100+'%';
      d.style.background=cols[k%cols.length];
      d.style.animationDuration=(1.6+Math.random()*1.4)+'s';
      d.style.animationDelay=(Math.random()*.3)+'s';
      d.style.borderRadius=Math.random()>.5?'50%':'2px';
      c.appendChild(d); setTimeout(()=>d.remove(),3400);
    }
  }
  let tt;
  function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('show'),2400); }

  applyLang();
})();

/* ═══ mk-tts · read-aloud (browser speech) auto-injected into the story reader ═══ */
(function(){
  if(window.__mkTTS) return; window.__mkTTS=true;
  var synth = window.speechSynthesis; if(!synth) return;
  function strip(h){ var d=document.createElement('div'); d.innerHTML=h; return (d.textContent||'').replace(/\s+/g,' ').trim(); }
  function L(){ return localStorage.getItem('bunyanLang')||'ar'; }
  var speaking=false, btn=null;
  function label(on){ return on ? ('⏸ '+(L()==='ar'?'إيقاف':'Stop')) : ('🔊 '+(L()==='ar'?'استمِع':'Listen')); }
  function setBtn(on){ speaking=on; if(btn) btn.innerHTML=label(on); }
  function stop(){ try{ synth.cancel(); }catch(e){} setBtn(false); }
  function pickVoice(){ var p=L()==='ar'?'ar':'en'; var vs=(synth.getVoices()||[]).filter(function(v){return v.lang&&v.lang.toLowerCase().indexOf(p)===0;}); return vs[0]||null; }
  function speak(text){
    if(speaking){ stop(); return; }
    if(!text) return;
    var u=new SpeechSynthesisUtterance(text); u.lang=L()==='ar'?'ar-SA':'en-US'; u.rate=.95;
    var v=pickVoice(); if(v) u.voice=v;
    u.onend=function(){ setBtn(false); }; u.onerror=function(){ setBtn(false); };
    synth.speak(u); setBtn(true);
  }
  function text(){
    var sels=['.block.wow p','.block.treasure .maryam p','.block.treasure p','.blocks .block p'];
    for(var i=0;i<sels.length;i++){ var el=document.querySelector('#rBody '+sels[i]); if(el && strip(el.innerHTML).length>20) return strip(el.innerHTML); }
    return '';
  }
  function inject(){
    var hdr=document.querySelector('#rBody .block.wow h3, #rBody .block.treasure h3, #rBody .blocks .block h3');
    if(!hdr || hdr.querySelector('.mk-listen')) return;
    btn=document.createElement('button'); btn.className='mk-listen';
    btn.style.cssText='margin-inline-start:.6rem;background:rgba(232,181,48,.18);border:1px solid rgba(232,181,48,.5);color:inherit;border-radius:1.2rem;padding:.18rem .7rem;font-size:.78rem;font-weight:800;cursor:pointer;font-family:inherit;vertical-align:middle';
    btn.innerHTML=label(false);
    btn.onclick=function(e){ e.stopPropagation(); speak(text()); };
    hdr.appendChild(btn);
  }
  var rb=document.getElementById('rBody');
  if(rb) new MutationObserver(function(){ stop(); setTimeout(inject,30); }).observe(rb,{childList:true});
  var rd=document.getElementById('reader');
  if(rd) new MutationObserver(function(){ if(!rd.classList.contains('open')) stop(); }).observe(rd,{attributes:true,attributeFilter:['class']});
  if(synth.onvoiceschanged!==undefined) synth.onvoiceschanged=function(){};
})();
