/* ════ النّادي الرِّياضي — Sports Club · journey engine ════
   Each journey is its own 10-station map. URL ?j=<journeyId> selects it.
   Station reader blocks: teach · evidence(ayah|hadith) · flip · action · key.
   Per-journey progress, badges, keys, and certificate. Guided by Captain Sami.
   Upon the way of Ahl al-Sunnah wal-Jamaʿah. */
(function(){
  const META = window.SPORT_META || [];
  const JR   = window.SPORT_JOURNEYS || {};
  const params = new URLSearchParams(location.search);
  let jid = params.get('j') || (META[0] && META[0].id) || 'fitrah';
  if(!META.find(m=>m.id===jid)) jid = META[0].id;
  const J = JR[jid];                 // current journey data (may be undefined → coming soon)
  const meta = META.find(m=>m.id===jid);
  const S = (J && J.stations) ? J.stations : [];

  const K = { done:'sportDone', name:'sportName', acts:'sportActs', lang:'bunyanLang' };
  let lang = localStorage.getItem(K.lang) || 'ar';
  let done = new Set(JSON.parse(localStorage.getItem(K.done)||'[]'));
  let acts = JSON.parse(localStorage.getItem(K.acts)||'{}');
  let cur = 0;
  const $ = s => document.querySelector(s);
  const isAr = () => lang==='ar';
  const t = (a,e) => isAr()?a:e;

  /* paint the theme color of this journey */
  if(meta){ document.documentElement.style.setProperty('--jcolor', meta.color); }

  /* ───────── LANG ───────── */
  function applyLang(){
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr()?'rtl':'ltr';
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    localStorage.setItem(K.lang,lang);
    renderChrome(); renderMap(); renderCollections();
    if($('#reader').classList.contains('open')) openStation(cur);
  }
  document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;applyLang();});

  /* ───────── HEADER + INTRO + CHAPTER BAR ───────── */
  function renderChrome(){
    // chapter bar (journey switcher)
    const cb=$('#cbTabs');
    cb.innerHTML = META.map(m=>{
      const built = !!JR[m.id];
      const active = m.id===jid;
      const dn = S.length? '' : '';
      const cls = 'cb-tab'+(active?' active':'')+(built?'':' soon');
      return `<a class="${cls}" href="?j=${m.id}"><span>${m.icon}</span><span>${m.title[lang]}</span>${built?'':' <span class="soon-dot">•</span>'}</a>`;
    }).join('');

    // intro
    $('#introTitle').innerHTML = `${meta.emoji} ${t('رِحلةُ','Journey of')} <span class="hl">${meta.title[lang]}</span>`;
    $('#introSub').textContent = J ? (J.tagline? J.tagline[lang] : meta.tagline[lang]) : meta.tagline[lang];
    $('#guideSay').innerHTML = J && J.guide ? J.guide[lang]
      : t('هذِهِ الرِّحلةُ قَيدُ الإعداد، وستَكونُ جاهِزةً قَريباً بِإذنِ الله! 🌱','This journey is being prepared and will be ready soon, Allah willing! 🌱');
    $('#meterTitle').textContent = t('نورُ الرِّحلة','Journey Light');
  }

  /* ───────── MAP ───────── */
  function renderMap(){
    const map=$('#map');
    map.querySelectorAll('.station,.finish,.soon-card,.chapter-divider').forEach(e=>e.remove());
    if(!S.length){
      const sc=document.createElement('div');
      sc.className='soon-card';
      sc.innerHTML=`<div class="sc-ic">${meta.icon}</div>
        <div class="sc-t">${t('رِحلةُ '+meta.title.ar+' قادِمةٌ قَريباً','The '+meta.title.en+' journey is coming soon')}</div>
        <div class="sc-s">${t('عُد إلى الرِّحلةِ الأولى الآنَ لِتَبدَأ مُغامَرَتَك ✨','Head to the first journey now to start your adventure ✨')}</div>
        <a class="sc-btn" href="?j=${META[0].id}">${t('ابدَأ الرِّحلةَ الأولى ←','Start the first journey ←')}</a>`;
      map.appendChild(sc);
      updateMeter(); return;
    }
    let lastChapter=null;
    S.forEach((st,i)=>{
      if(st.chapter && st.chapter[lang]!==lastChapter){
        lastChapter=st.chapter[lang];
        const dv=document.createElement('div');
        dv.className='chapter-divider';
        dv.innerHTML=`<span class="cd-line"></span><span class="cd-txt">${st.chapter[lang]}</span><span class="cd-line"></span>`;
        map.appendChild(dv);
      }
      const side = i%2===0?'r':'l';
      const d=done.has(st.id);
      const _pr=actProg(st); const _pt=_pr.total; const _pd=d?_pt:_pr.done; const _pp=_pt?Math.round(_pd/_pt*100):0;
      const el=document.createElement('div');
      el.className='station '+side;
      el.innerHTML=`
        <div class="node ${d?'done':''}" style="--nc:${st.color||meta.color}" data-i="${i}">
          <span class="face">${st.icon}</span>
          <span class="num">${st.num}</span>
        </div>
        <div class="s-label">
          <div class="t">${st.title[lang]}</div>
          <span class="go">${d?t('مُكتَمِلة ✓ — أعِد الزِّيارة','Done ✓ — revisit'):t('ادخُلِ المَحطّة ←','Enter station ←')}</span>
          <div class="s-prog" style="height:6px;background:rgba(127,127,127,.22);border-radius:5px;overflow:hidden;margin-top:.45rem;max-width:220px"><i style="display:block;height:100%;width:${_pp}%;background:${st.color||meta.color};border-radius:5px;transition:width .4s"></i></div>
          <span class="s-prog-txt" style="font-size:.66rem;color:var(--muted);font-weight:700;margin-top:.2rem;display:inline-block">${t('الأنشطة','Activities')}: ${_pd}/${_pt}</span>
        </div>`;
      map.appendChild(el);
      el.style.cursor='pointer'; el.onclick=()=>openStation(i);
    });
    const fin=document.createElement('div');
    fin.className='finish';
    fin.innerHTML=`<div class="cup" id="cupBtn">${(J&&J.badge&&J.badge.icon)||'🏆'}</div>
      <div class="ft">${t('وِسامُ رِحلةِ ','Medal of ')+meta.title[lang]}</div>`;
    map.appendChild(fin);
    fin.querySelector('#cupBtn').onclick=openCertificate;
    updateMeter();
  }

  const doneCount = () => S.filter(s=>done.has(s.id)).length;

  function updateMeter(){
    const tot=S.length||10, n=doneCount();
    $('#pCount').textContent=`${n} / ${tot}`;
    $('#pFill').style.width=(tot? n/tot*100:0)+'%';
    let lbl;
    if(!S.length) lbl=t('هذِهِ الرِّحلةُ قَريباً بِإذنِ الله ✨','This journey is coming soon, Allah willing ✨');
    else if(n===0) lbl=t('ابدأ أوّلَ مَحطّة… كُلُّ مَحطّةٍ تَزيدُ نورَ قَلبِك','Start the first station… each one adds light to your heart');
    else if(n<tot) lbl=t(`أحسَنت! أتمَمتَ ${n} مِن ${tot} مَحطّات`,`Great! You\'ve completed ${n} of ${tot} stations`);
    else lbl=t('🎉 أتمَمتَ الرِّحلة! خُذ وِسامَكَ وشَهادَتَك','🎉 Journey complete! Claim your medal and certificate');
    $('#meterLabel').textContent=lbl;
  }

  /* ───────── COLLECTIONS BAR ───────── */
  function renderCollections(){
    const n=doneCount(), tot=S.length||10;
    $('#collStickers').innerHTML=`<div class="ci">🎖️</div><div class="ct">${t('أوسِمةُ المَحطّات','Station Badges')}</div><div class="cn">${n} / ${tot}</div>`;
    $('#collKeys').innerHTML=`<div class="ci">🔑</div><div class="ct">${t('مَفاتيحُ البَطَل','Hero\'s Keys')}</div><div class="cn">${n} / ${tot}</div>`;
    $('#collCert').innerHTML=`<div class="ci">📜</div><div class="ct">${t('شَهادةُ الرِّحلة','Journey Diploma')}</div><div class="cn">${t('اطبَع شَهادَتَك ←','Print yours →')}</div>`;
  }

  /* ───────── READER ───────── */
  function openStation(i){
    cur=i; const st=S[i]; if(!st) return;
    const L=lang, d=done.has(st.id);
    var nextJ=null,__mi=META.findIndex(function(m){return m.id===jid;}); if(__mi>-1&&META[__mi+1]&&JR[META[__mi+1].id]) nextJ=META[__mi+1];
    var sgHTML = (window.buildSportGame?window.buildSportGame(st,L,S):'');
    const H={
      kick: st.chapter
        ? t(`مَحطّة ${st.num} مِن ${S.length} · ${st.chapter.ar}`,`Station ${st.num} of ${S.length} · ${st.chapter.en}`)
        : t(`مَحطّة ${st.num} مِن ${S.length} · رِحلةُ ${meta.title.ar}`,`Station ${st.num} of ${S.length} · ${meta.title.en}`),
      teach: st.teachLabel ? t(st.teachLabel.ar, st.teachLabel.en) : t('تَعَرَّفْ','Learn It'),
      flip: t('بَطاقةُ الأبطال','Hero\'s Flip Card'),
      ayah: t('إشراقةُ الوَحي','Light of Revelation'),
      hadith:t('مِن هَديِ النَّبِيِّ ﷺ','From the Prophet\'s ﷺ Guidance'),
      action:t('مُهِمّةُ اليَوم','Today\'s Mission'),
      key:  t('مِفتاحُ المَحطّة','Station Key'),
    };
    let evHTML='';
    const ev=st.evidence;
    if(ev && ev.kind==='hadith'){
      evHTML=`
        <div class="block hadith">
          <h3><span class="bi">🕌</span>${H.hadith}</h3>
          <div class="hd-text">${ev.text[L]}</div>
          <div class="hd-src">— ${ev.source[L]}</div>
          ${ev.explain?`<div class="explain">${ev.explain[L]}</div>`:''}
        </div>`;
    } else if(ev){
      evHTML=`
        <div class="block wahy">
          <h3><span class="bi">🌟</span>${H.ayah}</h3>
          <div class="ayah">${ev.text}</div>
          <div class="ayah-ref">${ev.ref[L]}</div>
          ${ev.explain?`<div class="explain">${ev.explain[L]}</div>`:''}
        </div>`;
    }

    function splitP(h){h=(h==null?'':''+h);var a=h.replace(/([.!?\u061F\u2026])\s+/g,'$1\u0001').split('\u0001').map(function(s){return s.trim();}).filter(function(s){return s.length;});return a.length<2?h:a.map(function(s){return '<span class="st-line" style="display:block;margin-bottom:.6rem;padding-inline-start:.8rem;border-inline-start:3px solid rgba(255,255,255,.16)">'+s+' </span>';}).join('');}
    $('#rBody').innerHTML=`
      <div class="s-hero" style="--accent:${st.color||meta.color}">
        <div class="ring">${st.icon}</div>
        <div class="kick">${H.kick}</div>
        <h2>${st.title[L]}</h2>
        ${st.simile?`<div class="hero-simile">${st.simile[L]}</div>`:''}
      </div>
      <div class="blocks">

        <div class="block treasure">
          <h3><span class="bi">${st.teachIcon||'🌿'}</span>${H.teach}</h3>
          <div class="maryam">
            <div class="m-face">${st.teachFace||'🧑‍🏫'}</div>
            <p>${splitP(st.teach[L])}</p>
          </div>
        </div>

        ${evHTML}

        ${st.flip?`
        <div class="block myth">
          <h3><span class="bi">🃏</span>${H.flip}</h3>
          <div class="flip" id="flipCard">
            <div class="flip-inner">
              <div class="flip-face flip-front"><div class="ft-tag">${t('العُذر','The Excuse')}</div><div>${st.flip.claim[L]}</div></div>
              <div class="flip-face flip-back"><div class="ft-tag">${t('الحَقيقة','The Truth')}</div><div>${st.flip.bust[L]}</div></div>
            </div>
          </div>
          <div class="flip-hint">${t('انقُر البِطاقةَ لِتَقلِبَها 🔄','Tap the card to flip it 🔄')}</div>
        </div>`:''}

        <div class="block exp">
          <h3><span class="bi">🏅</span>${H.action}</h3>
          <p>${st.action[L]}</p>
          <button class="act-toggle" id="actToggle" style="margin-top:.6rem;background:var(--nc,#27AE60);color:#fff;border:none;border-radius:1rem;padding:.5rem 1rem;font-weight:800;font-family:inherit;cursor:pointer">${(acts[st.id]&&acts[st.id].action)?t('✓ فعلتُها','✓ Done'):t('✓ فعلتُها','✓ I did it')}</button>
        </div>

        ${sgHTML}
        <div class="block key">
          <h3><span class="bi">🔑</span>${H.key}</h3>
          <div class="key-card"><span class="ki">🗝️</span><span class="kt">«${st.key[L]}»</span></div>
        </div>
      </div>

      <div class="r-foot">
        <button class="stampbtn ${d?'done':''}" id="stampBtn">
          ${d?t('✓ مَحطّةٌ مُكتَمِلة','✓ Station complete'):t('🏅 أتمِم هذِهِ المَحطّة','🏅 Complete this station')}
        </button>
        <div class="r-next-hint">
          <button id="certBtn">${t('شَهادَةُ الرِّحلة 📜','Journey certificate 📜')}</button>
          ${i+1<S.length?`<button id="nextBtn">${t('المَحطّةُ التّالية ←','Next station →')}</button>`:(nextJ?`<button id="nextJBtn">${t('الرِّحلةُ التّالية ←','Next journey →')}</button>`:'')}
        </div>
      </div>`;

    $('#rCount').textContent=`${st.num} / ${S.length}`;
    $('#rPrev').disabled=i<=0;
    $('#rNext').disabled=i>=S.length-1;

    const fc=$('#flipCard'); if(fc) fc.onclick=function(){ this.classList.toggle('flipped'); markAct(st,'flip'); };
    const at=$('#actToggle'); if(at) at.onclick=function(){ markAct(st,'action'); this.textContent=t('✓ فعلتُها','✓ Done'); };
    var __sgo=document.querySelectorAll('#rBody .sg-opt');
    __sgo.forEach(function(b){ b.onclick=function(){ if(b.dataset.done) return; __sgo.forEach(function(x){ x.dataset.done='1'; x.disabled=true; if(x.dataset.c==='1'){ x.style.background='rgba(46,204,113,.25)'; x.style.borderColor='#2ecc71'; } }); if(b.dataset.c!=='1'){ b.style.background='rgba(231,76,60,.22)'; b.style.borderColor='#e74c3c'; } markAct(st,'game'); }; });
    const stamp=$('#stampBtn');
    stamp.onclick=()=>{ if(!done.has(st.id)){ markDone(st); celebrate(); openStation(i);} };
    const nb=$('#nextBtn'); if(nb) nb.onclick=()=>{ if(i+1<S.length) openStation(i+1); };
    const njb=$('#nextJBtn'); if(njb) njb.onclick=()=>{ if(nextJ) location.href='?j='+nextJ.id; };
    const cbn=$('#certBtn'); if(cbn) cbn.onclick=()=>{ $('#reader').classList.remove('open'); openCertificate(); };

    history.replaceState(null,'','?j='+jid+'#'+st.id);
    $('#reader').classList.add('open');
    $('#reader').scrollTop=0;
    const sh=document.querySelector('.sheet'); if(sh) sh.scrollTop=0;
  }
  function gotoNext(i){ if(i+1<S.length) openStation(i+1); }
  function gotoPrev(i){ if(i-1>=0) openStation(i-1); }

  /* ───────── STAMP ───────── */
  /* activity progress: flip card + daily mission */
  function actsAvail(st){ var a=[]; if(st.flip) a.push('flip'); if(st.action) a.push('action'); if(st.key) a.push('game'); if(!a.length) a.push('read'); return a; }
  function actProg(st){ var av=actsAvail(st); var rec=acts[st.id]||{}; if(av.length===1&&av[0]==='read'){ return {done:done.has(st.id)?1:0,total:1}; } var dn=av.filter(function(k){return rec[k];}).length; return {done:dn,total:av.length}; }
  function markAct(st,key){ if(!st) return; var id=st.id; if(!acts[id]) acts[id]={}; if(acts[id][key]) return; acts[id][key]=1; localStorage.setItem(K.acts,JSON.stringify(acts)); renderMap(); }
  function markDone(st){
    done.add(st.id);
    localStorage.setItem(K.done,JSON.stringify([...done]));
    renderMap(); renderCollections();
    toast(t(`🎖️ أحسَنت! أتمَمتَ مَحطّة «${st.title.ar}»`,`🎖️ Great! You completed “${st.title.en}”`));
  }

  /* ───────── COLLECTIONS DRAWER ───────── */
  function openDrawer(kind){
    const dw=$('#drawer'), title=$('#dwTitle'), body=$('#dwBody');
    if(!S.length){ title.textContent=meta.title[lang]; body.innerHTML=`<p style="text-align:center;color:var(--muted)">${t('هذِهِ الرِّحلةُ قَريباً ✨','This journey is coming soon ✨')}</p>`; dw.classList.add('open'); return; }
    if(kind==='stickers'){
      title.textContent=t('🎖️ أوسِمةُ المَحطّات','🎖️ Station Badges');
      body.innerHTML=`<div class="sticker-grid">`+S.map(s=>{
        const d=done.has(s.id);
        return `<div class="sticker ${d?'':'locked'}" style="--sc:${s.color||meta.color}">
          <div class="si">${d?s.icon:'🔒'}</div>
          <div class="st">${d?s.title[lang]:t('مُقفَل','Locked')}</div></div>`;
      }).join('')+`</div>`;
    } else if(kind==='keys'){
      title.textContent=t('🔑 مَفاتيحُ البَطَل','🔑 Hero\'s Keys');
      body.innerHTML=S.map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🗝️':'🔒'}</div><div>
          <div class="lct">${d?'«'+s.key[lang]+'»':t('مِفتاحٌ مُقفَل','Locked key')}</div>
          <div class="lcs">${d?t('مِن مَحطّة: ','From: ')+s.title[lang]:t('أتمِمِ المَحطّةَ لِتَنالَ المِفتاح','Complete the station to earn the key')}</div></div></div>`;
      }).join('');
    }
    dw.classList.add('open');
  }
  $('#collStickers').onclick=()=>openDrawer('stickers');
  $('#collKeys').onclick=()=>openDrawer('keys');
  $('#dwClose').onclick=()=>$('#drawer').classList.remove('open');
  $('#drawer').addEventListener('click',e=>{ if(e.target.id==='drawer') $('#drawer').classList.remove('open'); });

  /* ───────── CERTIFICATE ───────── */
  function openCertificate(){
    const ov=$('#certOverlay');
    const doneStations=S.filter(s=>done.has(s.id));
    const nm=localStorage.getItem(K.name)||'';
    const total=S.length||10;
    let statement;
    if(!S.length){
      statement=t('هذِهِ الرِّحلةُ قَريباً بِإذنِ الله ✨','This journey is coming soon, Allah willing ✨');
    } else if(doneStations.length===0){
      statement=t('ابدأ بِإتمامِ أوّلِ مَحطّة، وستَظهَرُ هُنا مَفاتيحُ العِبادةِ التي جَمَعتَها.',
                  'Begin by completing your first station, and the keys you gather will appear here.');
    } else {
      const base = J && J.certificate && J.certificate.statement ? J.certificate.statement[isAr()?'ar':'en'] : '';
      statement = t(
        `أتَمَّ هذا البَطَلُ الصَّغيرُ <b>${doneStations.length}</b> مِن ${total} مَحطّاتٍ في رِحلةِ ${meta.title.ar}. ${base}`,
        `This young hero completed <b>${doneStations.length}</b> of ${total} stations in the ${meta.title.en} journey. ${base}`);
    }
    const keysHTML = doneStations.map(s=>`<span class="ck">🗝️ ${s.key[lang]}</span>`).join('');
    $('#certBox').innerHTML=`
      <div class="cert-seal">${(J&&J.badge&&J.badge.icon)||meta.emoji}</div>
      <div class="cert-kick">${t('النّادي الرِّياضي · رِحلةُ '+meta.title.ar,'The Sports Club · '+meta.title.en+' Journey')}</div>
      <div class="cert-title">${t('شَهادةُ بَطَلِ ','Hero of ')+meta.title[lang]}</div>
      <div class="cert-name">${nm||t('✦ اكتُب اسمَك ✦','✦ Your name ✦')}</div>
      <div class="cert-statement">${statement}</div>
      ${keysHTML?`<div class="cert-keys">${keysHTML}</div>`:''}
      <div class="cert-foot">${t('عَدَدُ المَحطّات: ','Stations completed: ')}${doneStations.length} / ${total} 🎖️</div>`;
    const nameInput=$('#certName'); nameInput.value=nm;
    nameInput.oninput=()=>{
      localStorage.setItem(K.name,nameInput.value);
      $('#certBox .cert-name').textContent=nameInput.value||t('✦ اكتُب اسمَك ✦','✦ Your name ✦');
    };
    ov.classList.add('open');
  }
  $('#certClose').onclick=()=>$('#certOverlay').classList.remove('open');
  $('#certPrint').onclick=()=>window.print();
  $('#certOverlay').addEventListener('click',e=>{ if(e.target.id==='certOverlay') $('#certOverlay').classList.remove('open'); });

  /* ───────── READER CHROME ───────── */
  function closeReader(){ $('#reader').classList.remove('open'); history.replaceState(null,'','?j='+jid); }
  $('#rClose').onclick=closeReader;
  $('#rPrev').onclick=()=>gotoPrev(cur);
  $('#rNext').onclick=()=>gotoNext(cur);
  $('#reader').addEventListener('click',e=>{ if(e.target.id==='reader') closeReader(); });
  document.addEventListener('keydown',e=>{
    if($('#reader').classList.contains('open')){
      if(e.key==='Escape') closeReader();
      if(e.target.tagName==='TEXTAREA') return;
      if(e.key==='ArrowLeft') isAr()?gotoNext(cur):gotoPrev(cur);
      if(e.key==='ArrowRight') isAr()?gotoPrev(cur):gotoNext(cur);
    }
    if(e.key==='Escape'){ $('#drawer').classList.remove('open'); $('#certOverlay').classList.remove('open'); }
  });

  /* ───────── FX ───────── */
  function celebrate(){
    const c=$('#confetti'), cols=['#1ABC9C','#16A085','#117A8B','#27AE60','#E8B530','#8E44AD','#E67E22'];
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

  /* ───────── DEEP LINK to a station ───────── */
  function openFromHash(){
    const id=decodeURIComponent(location.hash.slice(1));
    if(!id) return;
    const i=S.findIndex(s=>s.id===id);
    if(i>=0) openStation(i);
  }

  applyLang();
  openFromHash();
})();
