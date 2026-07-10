/* ════ مختبر كشف الحقائق — The Truth-Revealing Lab · engine ════ */
(function(){
  const S = window.LAB_STATIONS || [];
  const K = { done:'labDone', journal:'labJournal', name:'labName', acts:'labActs', lang:'bunyanLang' };
  let lang = localStorage.getItem(K.lang) || 'ar';
  let done = new Set(JSON.parse(localStorage.getItem(K.done)||'[]'));
  let journal = JSON.parse(localStorage.getItem(K.journal)||'{}');
  let acts = JSON.parse(localStorage.getItem(K.acts)||'{}');
  let cur = 0;
  const $ = s => document.querySelector(s);
  const isAr = () => lang==='ar';
  const t = (a,e) => isAr()?a:e;

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
          <span class="go">${locked?t('قريباً ✨','Coming soon ✨')
            :(d?t('مَكشوفة ✓ — أعِد الزِّيارة','Solved ✓ — revisit'):t('افحَص الحَقيقة ←','Investigate →'))}</span>
          ${locked?'':`<div class="s-prog" style="height:6px;background:rgba(127,127,127,.22);border-radius:5px;overflow:hidden;margin-top:.45rem;max-width:220px"><i style="display:block;height:100%;width:${_pp}%;background:${st.color};border-radius:5px;transition:width .45s"></i></div><div class="s-prog-txt" style="font-size:.7rem;font-weight:800;opacity:.65;margin-top:.25rem">${_pd}/${_pt} ${lang==='ar'?'أنشطة':'activities'}</div>`}
        </div>`;
      map.appendChild(el);
      if(!locked){ el.style.cursor='pointer'; el.onclick=()=>openStation(i); }
    });
    const fin=document.createElement('div');
    fin.className='finish';
    fin.innerHTML=`<div class="cup" id="cupBtn">🏆</div><div class="ft">${t('وِسامُ عالِمِ الحَقائِق','Truth Scientist Medal')}</div>`;
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
    if(da===0) lbl=t('ادخُل المُختَبَر… الحَقائِقُ تَنتَظِرُ كَشفَها','Enter the lab… truths await discovery');
    else if(da<ac) lbl=t(`أحسَنت! كَشَفتَ ${da} مِن ${ac} حَقائِق`,`Great work! You've revealed ${da} of ${ac} truths`);
    else lbl=t('🎉 كَشَفتَ كُلَّ الحَقائِق! أصبَحتَ عالِماً مُحَقِّقاً','🎉 You revealed every truth! You\'re a true investigator');
    $('#meterLabel').textContent=lbl;
  }

  /* ───────── COLLECTIONS BAR ───────── */
  function renderCollections(){
    const da=doneActive(), totalActive=activeCount();
    $('#collStickers').innerHTML=`<div class="ci">🎟️</div><div class="ct">${t('أوسِمةُ المُختَبَر','Lab Badges')}</div><div class="cn">${da} ${t('وِسام','badges')}</div>`;
    $('#collNames').innerHTML=`<div class="ci">🕋</div><div class="ct">${t('جِدارُ الأسماء','Names Wall')}</div><div class="cn">${da} ${t('اسم','names')}</div>`;
    $('#collKeys').innerHTML=`<div class="ci">🔑</div><div class="ct">${t('الحَقائِقُ المَكشوفة','Revealed Truths')}</div><div class="cn">${da} / ${totalActive}</div>`;
    $('#collCert').innerHTML=`<div class="ci">📜</div><div class="ct">${t('شَهادةُ المُحَقِّق','Investigator Diploma')}</div><div class="cn">${t('اطبَع شَهادَتَك ←','Print yours →')}</div>`;
  }

  /* ───────── READER ───────── */
  function nextExists(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked) return true; return false; }
  function gotoNext(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked){openStation(k);return;} }
  function gotoPrev(i){ for(let k=i-1;k>=0;k--) if(!S[k].locked){openStation(k);return;} }

  function openStation(i){
    cur=i; const st=S[i]; if(st.locked) return;
    const L=lang, d=done.has(st.id);
    const H={
      kick: t(`المَحطّة ${st.num} مِن ١٠`,`Station ${st.num} of 10`),
      narr: t('القِصّة','The Story'),
      logic:t('الدَّليلُ المَنطِقيّ','The Logical Proof'),
      myth: t('بَطاقةُ كَشفِ الخُرافة','Myth-Buster Card'),
      match:t('لُعبةُ الوَصل','Match-Up Game'),
      wahy: t('إشراقةُ الوَحي','Light of Revelation'),
      name: t('اسمٌ مِن أسماءِ الله','A Name of Allah'),
      key:  t('الحَقيقةُ المَكشوفة','The Revealed Truth'),
      dua:  t('دُعاءٌ تَحفَظُه','A Dua to Memorize'),
      mission:t('مُهِمّةُ المَحطّة',"Station Mission"),
      journal:t('دَفترُ المُحَقِّق','Investigator Journal'),
      sh: t('الشُّبهةُ تَقول:','The Doubt says:'),
      rebut:t('وردُّنا عليها ↓','Our reply ↓'),
    };
    function splitP(h){h=(h==null?'':''+h);var a=h.replace(/([.!?\u061F\u2026])\s+/g,'$1\u0001').split('\u0001').map(function(s){return s.trim();}).filter(function(s){return s.length;});return a.length<2?h:a.map(function(s){return '<span class="st-line" style="display:block;margin-bottom:.6rem;padding-inline-start:.8rem;border-inline-start:3px solid rgba(255,255,255,.16)">'+s+' </span>';}).join('');}
    $('#rBody').innerHTML=`
      <div class="s-hero" style="--accent:${st.color}">
        <div class="ring">${st.icon}</div>
        <div class="kick">${H.kick}</div>
        <h2>${st.title[L]} <span>${st.emoji}</span></h2>
      </div>
      <div class="blocks">

        <div class="block wow">
          <h3><span class="bi">🎙️</span>${H.narr}</h3>
          <p>${splitP(st.narration[L])}</p>
        </div>

        <div class="block chance">
          <h3><span class="bi">🧠</span>${H.logic}</h3>
          <div class="mrchance">
            <div class="mc-face">🤨</div>
            <div class="mc-body"><div class="mc-name">${H.sh}</div><div class="mc-say">${st.shubha[L]}</div></div>
          </div>
          <div class="rebut-tag">🔬 ${H.rebut}</div>
          <p>${splitP(st.logic[L])}</p>
        </div>

        <div class="block myth">
          <h3><span class="bi">🃏</span>${H.myth}</h3>
          <div class="flip" id="flipCard">
            <div class="flip-inner">
              <div class="flip-face flip-front"><div class="ft-tag">${t('الخُرافة','The Myth')}</div><div>${st.myth.claim[L]}</div></div>
              <div class="flip-face flip-back"><div class="ft-tag">${t('الحَقيقة','The Truth')}</div><div>${st.myth.bust[L]}</div></div>
            </div>
          </div>
          <div class="flip-hint">${t('انقُر البِطاقةَ لِتَقلِبَها 🔄','Tap the card to flip it 🔄')}</div>
        </div>

        <div class="block matchb">
          <h3><span class="bi">🧩</span>${H.match}</h3>
          <p style="margin-bottom:.8rem;font-size:.95rem">${st.match.title[L]}</p>
          <div class="match-cols">
            <div class="match-col" id="matchL"></div>
            <div class="match-col" id="matchR"></div>
          </div>
          <div class="match-done" id="matchDone"></div>
        </div>

        <div class="block wahy">
          <h3><span class="bi">🌟</span>${H.wahy}</h3>
          <div class="ayah">${st.reflection.ayah}</div>
          <div class="ayah-ref">${st.reflection.ref[L]}</div>
          <div class="explain">${st.reflection.explain[L]}</div>
        </div>

        <div class="block name">
          <h3><span class="bi">🕋</span>${H.name}</h3>
          <div class="name-card">
            <div class="name-ar">${st.nameOfAllah.name.ar}</div>
            <div class="name-en">${st.nameOfAllah.name.en}</div>
            <div class="name-mean">${st.nameOfAllah.meaning[L]}</div>
          </div>
        </div>

        <div class="block key">
          <h3><span class="bi">🔑</span>${H.key}</h3>
          <div class="key-card"><span class="ki">🗝️</span><span class="kt">«${st.proof[L]}»</span></div>
        </div>

        <div class="block dua">
          <h3><span class="bi">🤲</span>${H.dua}</h3>
          <div class="dua-text">${st.dua[L]}</div>
        </div>

        <div class="block exp">
          <h3><span class="bi">🧭</span>${H.mission}</h3>
          <p>${st.mission[L]}</p>
        </div>

        <div class="block journal">
          <h3><span class="bi">✍️</span>${H.journal}</h3>
          <div class="journal">
            <textarea id="journalBox" placeholder="${t('اكتُب الحَقيقةَ التي كَشَفتَها اليوم…','Write the truth you revealed today…')}">${(journal[st.id]||'').replace(/</g,'&lt;')}</textarea>
            <div class="saved" id="journalSaved"></div>
          </div>
        </div>
      </div>

      <div class="r-foot">
        <button class="stampbtn ${d?'done':''}" id="stampBtn">
          ${d?t('✓ حَقيقةٌ مَكشوفة','✓ Truth revealed'):t('🔬 اكشِف هذه الحَقيقة','🔬 Reveal this truth')}
        </button>
        ${nextExists(i)?`<div class="r-next-hint">${t('جاهِزٌ لِلتّالية؟','Ready for the next?')} <button id="nextBtn">${t('المَحطّةُ التّالية ←','Next station →')}</button></div>`:''}
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
          if(matched===pairs.length) markAct(st,'match');
          if(matched===pairs.length){ doneEl.textContent=t('🎉 أحسَنت! كُلُّ شَيءٍ في مَوضِعِه — هذا هو المَنطِقُ السَّليم.','🎉 Brilliant! Everything in its place — that\'s sound logic.'); }
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
        saved.textContent=t('حُفِظَ ✓','Saved ✓');
        setTimeout(()=>saved.textContent='',1400);
      },350);
    };
  }

  /* ───────── STAMP ───────── */
  /* activity progress */
  function actsAvail(st){ var a=['journal']; if(st.myth) a.unshift('flip'); if(st.match&&st.match.pairs&&st.match.pairs.length) a.push('match'); return a; }
  function actProg(st){ var av=actsAvail(st); var rec=acts[st.id]||{}; var dn=av.filter(function(k){return rec[k];}).length; return {done:dn,total:av.length}; }
  function markAct(st,key){ if(!st) return; var id=st.id; if(!acts[id]) acts[id]={}; if(acts[id][key]) return; acts[id][key]=1; localStorage.setItem(K.acts,JSON.stringify(acts)); renderMap(); }
  function markDone(st){
    done.add(st.id);
    localStorage.setItem(K.done,JSON.stringify([...done]));
    renderMap(); renderCollections();
    toast(t(`🎖️ أحسَنت! حَصَلتَ على وِسام «${st.badge.title.ar}»`,`🎖️ Great! You earned the “${st.badge.title.en}” badge`));
  }

  /* ───────── COLLECTIONS DRAWER ───────── */
  function openDrawer(kind){
    const dw=$('#drawer'), title=$('#dwTitle'), body=$('#dwBody');
    if(kind==='stickers'){
      title.textContent=t('🎟️ أوسِمةُ المُختَبَر','🎟️ Lab Badges');
      body.innerHTML=`<div class="sticker-grid">`+S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="sticker ${d?'':'locked'}" style="--sc:${s.badge.color}">
          <div class="si">${d?s.badge.icon:'🔒'}</div>
          <div class="st">${d?s.badge.title[lang]:t('مُقفَل','Locked')}</div></div>`;
      }).join('')+`</div>`;
    } else if(kind==='names'){
      title.textContent=t('🕋 جِدارُ أسماءِ الله','🕋 Wall of Allah\'s Names');
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🕋':'🔒'}</div><div>
          <div class="lct"><span class="lc-name">${d?s.nameOfAllah.name.ar:'• • •'}</span> ${d?'· '+s.nameOfAllah.name.en:''}</div>
          <div class="lcs">${d?s.nameOfAllah.meaning[lang]:t('أكمِل المَحطّةَ لِتَكشِفَ الاسم','Complete the station to reveal the name')}</div></div></div>`;
      }).join('');
    } else if(kind==='keys'){
      title.textContent=t('🔑 الحَقائِقُ المَكشوفة','🔑 Revealed Truths');
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🗝️':'🔒'}</div><div>
          <div class="lct">${d?'«'+s.proof[lang]+'»':t('حَقيقةٌ مُقفَلة','Locked truth')}</div>
          <div class="lcs">${d?t('مِن مَحطّة: ','From: ')+s.title[lang]:t('أكمِل المَحطّةَ لِتَكشِفَ الحَقيقة','Complete the station to reveal the truth')}</div></div></div>`;
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
      statement=t('ابدأ رِحلَتَك بِكَشفِ أوّلِ حَقيقة، وستَظهَرُ هُنا الحَقائِقُ التي اكتَشَفتَها بِعَقلِك.',
                  'Begin by revealing your first truth, and the truths you discover with your mind will appear here.');
    } else {
      statement=t(
        `أتَمَّ هذا المُحَقِّقُ الصَّغيرُ كَشفَ <b>${doneStations.length}</b> مِن ${total} حَقائِقَ في مُختَبَرِ كَشفِ الحَقائِق، فَهَدَمَ بِعَقلِهِ خُرافةَ الصُّدفةِ والتَّطَوُّرِ الأعمى، وأثبَتَ أنَّ لِهذا الكَونِ خالِقاً حَكيماً عَدلاً، وأنَّ الشَّيطانَ عَدُوٌّ ضَعيفٌ لا يَملِكُ إلّا الهَمس.`,
        `This young investigator revealed <b>${doneStations.length}</b> of ${total} truths in the Truth-Revealing Lab, using their mind to demolish the myth of chance and blind evolution, proving this universe has a Wise and Just Creator, and that Satan is a weak enemy who owns nothing but the whisper.`);
    }
    const keysHTML = doneStations.map(s=>`<span class="ck">🗝️ ${s.proof[lang]}</span>`).join('');
    $('#certBox').innerHTML=`
      <div class="cert-seal">🔬</div>
      <div class="cert-kick">${t('مُختَبَرُ كَشفِ الحَقائِق · منارةُ العقيدة','The Truth-Revealing Lab · Faith Minaret')}</div>
      <div class="cert-title">${t('شَهادةُ عالِمِ الحَقائِق','Certified Truth Investigator')}</div>
      <div class="cert-name">${nm||t('✦ اكتُب اسمَك ✦','✦ Your name ✦')}</div>
      <div class="cert-statement">${statement}</div>
      ${keysHTML?`<div class="cert-keys">${keysHTML}</div>`:''}
      <div class="cert-foot">${t('عَدَدُ الأوسِمة: ','Badges earned: ')}${doneStations.length} 🎖️</div>`;
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
    const c=$('#confetti'), cols=['#1ABC9C','#16A085','#27AE60','#2980B9','#F1C40F','#9B59B6'];
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
