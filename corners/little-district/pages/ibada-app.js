/* ════ واحةُ العبادة — Worship Oasis · journey engine ════
   Each journey is its own 10-station map. URL ?j=<journeyId> selects it.
   Station reader blocks: teach · evidence(ayah|hadith) · flip · action · key.
   Per-journey progress, badges, keys, and certificate. Guided by Maryam.
   Upon the way of Ahl al-Sunnah wal-Jamaʿah. */
(function(){
  const META = window.IBADA_META || [];
  const JR   = window.IBADA_JOURNEYS || {};
  const params = new URLSearchParams(location.search);
  let jid = params.get('j') || (META[0] && META[0].id) || 'salah';
  if(!META.find(m=>m.id===jid)) jid = META[0].id;
  const J = JR[jid];                 // current journey data (may be undefined → coming soon)
  const meta = META.find(m=>m.id===jid);
  const S = (J && J.stations) ? J.stations : [];

  const K = { done:'ibadaDone', name:'ibadaName', acts:'ibadaActs', lang:'bunyanLang' };
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
        <div class="sc-s">${t('عُد إلى رِحلةِ الصَّلاةِ الآنَ لِتَبدَأ مُغامَرَتَك ✨','Head to the Prayer journey now to start your adventure ✨')}</div>
        <a class="sc-btn" href="?j=${META[0].id}">${t('ابدَأ رِحلةَ الصَّلاة ←','Start the Prayer journey ←')}</a>`;
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
    $('#collKeys').innerHTML=`<div class="ci">🔑</div><div class="ct">${t('مَفاتيحُ العِبادة','Keys of Worship')}</div><div class="cn">${n} / ${tot}</div>`;
    $('#collCert').innerHTML=`<div class="ci">📜</div><div class="ct">${t('شَهادةُ الرِّحلة','Journey Diploma')}</div><div class="cn">${t('اطبَع شَهادَتَك ←','Print yours →')}</div>`;
  }

  /* ───────── MEDIA (images + audio) ───────── */
  function renderMedia(media, L){
    const items = Array.isArray(media) ? media : [media];
    const cells = items.map(m=>{
      const cap = m.caption ? `<div class="md-cap">${m.caption[L]||m.caption.ar||''}</div>` : '';
      if(m.type==='audio'){
        const label = m.label ? (m.label[L]||m.label.ar) : (L==='ar'?'استَمِع':'Listen');
        if(m.src){
          return `<div class="md-cell md-audio"><div class="md-alabel">🔊 ${label}</div><audio controls preload="none" src="${m.src}" style="width:100%"></audio>${cap}</div>`;
        }
        if(m.url){
          return `<div class="md-cell md-audio"><a href="${m.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:.7rem;text-decoration:none;background:linear-gradient(135deg,#2980B9,#1F6C94);color:#fff;border-radius:.8rem;padding:.85rem 1rem">
            <span style="font-size:1.5rem;flex:0 0 auto">🔊</span>
            <span style="flex:1;font-weight:800;font-size:.95rem;line-height:1.4">${label}</span>
            <span style="font-size:.78rem;font-weight:800;opacity:.9;flex:0 0 auto">${L==='ar'?'استَمِع ↗':'Listen ↗'}</span></a>${cap}</div>`;
        }
        return `<div class="md-cell md-audio md-empty"><div class="md-alabel">🔊 ${label}</div>
          <div class="md-slot" style="font-family:ui-monospace,monospace;font-size:.72rem;color:#90A4AE;text-align:center;padding:.6rem">${L==='ar'?'ضَع رابِطَ ملفِّ الصَّوت (mp3) هنا — مشاري راشد':'Add the audio file URL (mp3) here'}</div>${cap}</div>`;
      }
      if(m.type==='video'){
        const vlabel = m.title ? (m.title[L]||m.title.ar) : (L==='ar'?'شاهِد الشَّرحَ بالفيديو':'Watch the video explainer');
        const href = m.url || m.src;
        if(href){
          return `<div class="md-cell md-video"><a href="${href}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:.7rem;text-decoration:none;background:linear-gradient(135deg,#C0392B,#9b2d22);color:#fff;border-radius:.8rem;padding:.85rem 1rem;box-shadow:0 6px 16px rgba(192,57,43,.22)">
            <span style="font-size:1.5rem;flex:0 0 auto">▶</span>
            <span style="flex:1;font-weight:800;font-size:.95rem;line-height:1.4">${vlabel}</span>
            <span style="font-size:.78rem;font-weight:800;opacity:.9;flex:0 0 auto">${L==='ar'?'شاهِد ↗':'Watch ↗'}</span></a>${cap}</div>`;
        }
        return `<div class="md-cell md-video md-empty"><div style="display:flex;align-items:center;gap:.7rem;background:#fff;border:2px dashed #C8A6A0;border-radius:.8rem;padding:.85rem 1rem">
          <span style="font-size:1.4rem;flex:0 0 auto;color:#C0392B">▶</span>
          <span style="flex:1;font-weight:800;font-size:.9rem;color:#5a6470">${vlabel}</span>
          <span class="md-slot" style="font-family:ui-monospace,monospace;font-size:.7rem;color:#B0626A;flex:0 0 auto;text-align:end">${L==='ar'?'ضَع رابِطَ الفيديو هنا':'Add the video link here'}</span></div>${cap}</div>`;
      }
      // image
      if(m.src){
        return `<div class="md-cell"><img src="${m.src}" alt="" loading="lazy" style="width:100%;border-radius:.7rem;display:block">${cap}</div>`;
      }
      const ph = m.placeholder ? (m.placeholder[L]||m.placeholder.ar||'') : (L==='ar'?'صورة توضيحية':'illustration');
      return `<div class="md-cell md-ph" style="aspect-ratio:4/3;border-radius:.7rem;background:repeating-linear-gradient(45deg,#EEF2F4,#EEF2F4 9px,#E3E9EC 9px,#E3E9EC 18px);display:flex;align-items:center;justify-content:center;border:2px dashed #B8C4CA">
        <span style="font-family:ui-monospace,monospace;font-size:.74rem;color:#7B8A92;text-align:center;padding:.5rem">🖼️ ${ph}</span></div>${cap?`<div class="md-cap" style="text-align:center">${cap.replace(/<[^>]+>/g,'').trim()}</div>`:''}`;
    }).join('');
    const multi = items.length>1 ? 'grid-template-columns:repeat(auto-fit,minmax(120px,1fr))' : 'grid-template-columns:1fr';
    return `<div class="s-media" style="display:grid;gap:.6rem;${multi};margin:0 0 .2rem">${cells}</div>`;
  }

  /* ───────── READER ───────── */
  function openStation(i){
    cur=i; const st=S[i]; if(!st) return;
    const L=lang, d=done.has(st.id);
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
      ${st.media?renderMedia(st.media,L):''}
      <div class="blocks">

        <div class="block treasure">
          <h3><span class="bi">${st.teachIcon||'🌴'}</span>${H.teach}</h3>
          <div class="maryam">
            <div class="m-face">${st.teachFace||'🧕'}</div>
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
          <button class="act-toggle" id="actToggle" style="margin-top:.6rem;background:var(--nc,#117A8B);color:#fff;border:none;border-radius:1rem;padding:.5rem 1rem;font-weight:800;font-family:inherit;cursor:pointer">${(acts[st.id]&&acts[st.id].action)?t('✓ فعلتُها','✓ Done'):t('✓ فعلتُها','✓ I did it')}</button>
        </div>

        ${st.hajjOrder?`
        <div class="block hajjorder">
          <h3><span class="bi">🕋</span>${st.hajjOrder.title[L]}</h3>
          <p style="color:var(--muted);margin:.2rem 0 .8rem">${st.hajjOrder.intro[L]}</p>
          <ol class="hajj-steps">${st.hajjOrder.steps.map((s,si)=>`<li><span class="hs-n">${si+1}</span><span class="hs-ic">${s.icon}</span><span class="hs-t">${s[L]}</span></li>`).join('')}</ol>
          <div class="hajj-game" id="hajjGame"></div>
        </div>`:''}

        <div class="block stgame">
          <h3><span class="bi">🎮</span>${t('نَشاطُ المَحطّة','Station Activity')}</h3>
          <div class="st-game" id="stGame"></div>
        </div>

        <div class="block key">
          <h3><span class="bi">🔑</span>${H.key}</h3>
          <div class="key-card"><span class="ki">🗝️</span><span class="kt">«${st.key[L]}»</span></div>
        </div>
      </div>

      <div class="r-foot">
        <button class="stampbtn ${d?'done':''}" id="stampBtn">
          ${d?t('✓ مَحطّةٌ مُكتَمِلة','✓ Station complete'):t('🏅 أتمِم هذِهِ المَحطّة','🏅 Complete this station')}
        </button>
        ${i+1<S.length?`<div class="r-next-hint">${t('جاهِزٌ لِلتّالية؟','Ready for the next?')} <button id="nextBtn">${t('المَحطّةُ التّالية ←','Next station →')}</button></div>`
          :`<div class="r-next-hint">${t('أتمَمتَ المَحطّاتِ كُلَّها؟','Finished all stations?')} <button id="certBtn">${t('خُذ شَهادَتَك 📜','Claim your certificate 📜')}</button></div>`}
      </div>`;

    $('#rCount').textContent=`${st.num} / ${S.length}`;
    $('#rPrev').disabled=i<=0;
    $('#rNext').disabled=i>=S.length-1;

    const fc=$('#flipCard'); if(fc) fc.onclick=function(){ this.classList.toggle('flipped'); markAct(st,'flip'); };
    const at=$('#actToggle'); if(at) at.onclick=function(){ markAct(st,'action'); this.textContent=t('✓ فعلتُها','✓ Done'); };
    if(st.hajjOrder) setupHajjGame(st);
    setupStationGame(st);
    const stamp=$('#stampBtn');
    stamp.onclick=()=>{ if(!done.has(st.id)){ markDone(st); celebrate(); openStation(i);} };
    const nb=$('#nextBtn'); if(nb) nb.onclick=()=>{ if(i+1<S.length) openStation(i+1); };
    const cbn=$('#certBtn'); if(cbn) cbn.onclick=()=>{ $('#reader').classList.remove('open'); openCertificate(); };

    history.replaceState(null,'','?j='+jid+'#'+st.id);
    $('#reader').classList.add('open');
    $('#reader').scrollTop=0;
    const sh=document.querySelector('.sheet'); if(sh) sh.scrollTop=0;
  }
  function gotoNext(i){ if(i+1<S.length) openStation(i+1); }
  /* ───────── PER-STATION MINI-GAME (unique activity per station) ───────── */
  function sgWords(text){ return String(text||'').replace(/[«».،,:؛!؟…\-–—()ـ]/g,' ').split(/\s+/).filter(function(w){return w.length>0;}); }
  function sgShuffle(a){ return a.map(function(x){return [Math.random(),x];}).sort(function(p,q){return p[0]-q[0];}).map(function(x){return x[1];}); }
  function sgHash(s){ var h=0; s=String(s); for(var i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h; }
  function sgOtherTitles(st){ return S.filter(function(x){return x.id!==st.id;}).map(function(x){return x.title[lang];}); }
  function sgOtherWords(st){ var w=[]; S.forEach(function(x){ if(x.id!==st.id) w=w.concat(sgWords(x.key&&x.key[lang])); }); return w.filter(function(x){return x.length>=4;}); }
  function setupStationGame(st){
    var host=$('#stGame'); if(!host) return;
    var type=sgHash(st.id)% 4, order=[type,0,2,3,1], done=false;
    for(var k=0;k<order.length;k++){ if(build(order[k])) return; }
    host.innerHTML='<div class="sg-q">'+t('أحسنت! تابِع رحلتك.','Great! Keep going.')+'</div>';
    function win(msg){ host.querySelector('.sg-msg').innerHTML=msg; host.querySelector('.sg-msg').className='sg-msg win'; markAct(st,'game'); }
    function build(tp){
      if(tp===0) return gOrder();
      if(tp===1) return gTF();
      if(tp===2) return gBlank();
      if(tp===3) return gWhich();
      return false;
    }
    /* 0 · رتّب الجملة — unscramble the key sentence */
    function gOrder(){
      var words=sgWords(st.key&&st.key[lang]); if(words.length<3||words.length>9) return false;
      var pool=sgShuffle(words.map(function(w,i){return {w:w,i:i};})), picked=[];
      host.innerHTML='<div class="sg-q">'+t('🧩 رتّبِ الكلماتِ لِتُكوِّنَ جُملةَ المِفتاح:','🧩 Tap the words in order to form the key sentence:')+'</div>'
        +'<div class="sg-answer" id="sgAns"></div><div class="sg-pool" id="sgPool"></div><div class="sg-msg"></div>';
      function draw(){
        var pl=host.querySelector('#sgPool'), an=host.querySelector('#sgAns');
        an.innerHTML=picked.map(function(p){return '<button class="sg-chip used" data-i="'+p.i+'">'+p.w+'</button>';}).join('')||'<span class="sg-ph">…</span>';
        pl.innerHTML=pool.filter(function(p){return picked.indexOf(p)<0;}).map(function(p){return '<button class="sg-chip" data-i="'+p.i+'">'+p.w+'</button>';}).join('');
        pl.querySelectorAll('.sg-chip').forEach(function(b){ b.onclick=function(){ var p=pool.filter(function(x){return x.i==b.dataset.i;})[0]; if(picked.indexOf(p)<0){picked.push(p);draw();check();} }; });
        an.querySelectorAll('.sg-chip').forEach(function(b){ b.onclick=function(){ picked=picked.filter(function(x){return x.i!=b.dataset.i;}); draw(); }; });
      }
      function check(){ if(picked.length===words.length){ var ok=picked.every(function(p,idx){return p.i===idx;}); if(ok) win(t('🎉 أحسنت! الجملةُ صحيحة.','🎉 Perfect! The sentence is correct.')); else { host.querySelector('.sg-msg').textContent=t('ليس بعد — جرّب ترتيبًا آخر.','Not yet — try another order.'); host.querySelector('.sg-msg').className='sg-msg'; } } }
      draw(); return true;
    }
    /* 1 · صحّ أم خطأ — from the flip card */
    function gTF(){
      if(!st.flip) return false;
      var showTruth=Math.random()<0.5;
      var stmt=showTruth?(st.flip.bust[lang]):(st.flip.claim[lang]);
      host.innerHTML='<div class="sg-q">'+t('⚖️ اقرأِ العِبارةَ ثُمَّ قَرِّر:','⚖️ Read the statement, then decide:')+'</div>'
        +'<div class="sg-stmt">'+stmt+'</div>'
        +'<div class="sg-tf"><button class="sg-btn t">✅ '+t('صَحّ','True')+'</button><button class="sg-btn f">❌ '+t('خَطأ','False')+'</button></div><div class="sg-msg"></div>';
      host.querySelectorAll('.sg-btn').forEach(function(b){ b.onclick=function(){
        if(host.dataset.ans) return; host.dataset.ans='1';
        var said=b.classList.contains('t'); var correct=(said===showTruth);
        if(correct) win(t('🎉 إجابةٌ صحيحة!','🎉 Correct!'));
        else { host.querySelector('.sg-msg').textContent=t('الصوابُ أنّها '+(showTruth?'صحيحة':'خاطئة')+'. اقرأ البطاقة مرّةً أخرى.','The right answer is '+(showTruth?'True':'False')+'.'); host.querySelector('.sg-msg').className='sg-msg'; }
      }; });
      return true;
    }
    /* 2 · الكلمة الناقصة — fill the blank in the key */
    function gBlank(){
      var words=sgWords(st.key&&st.key[lang]); if(words.length<3) return false;
      var ans=words.slice().sort(function(a,b){return b.length-a.length;})[0]; if(ans.length<4) return false;
      var others=sgShuffle(sgOtherWords(st).filter(function(w){return w!==ans;})); if(others.length<2) return false;
      var opts=sgShuffle([ans,others[0],others[1]]);
      var shown=st.key[lang].replace(ans,'▦▦▦');
      host.innerHTML='<div class="sg-q">'+t('✍️ اختَرِ الكَلِمةَ الناقِصة:','✍️ Choose the missing word:')+'</div>'
        +'<div class="sg-stmt">«'+shown+'»</div>'
        +'<div class="sg-opts">'+opts.map(function(o){return '<button class="sg-btn">'+o+'</button>';}).join('')+'</div><div class="sg-msg"></div>';
      host.querySelectorAll('.sg-btn').forEach(function(b){ b.onclick=function(){
        if(host.dataset.ans) return;
        if(b.textContent===ans){ host.dataset.ans='1'; b.classList.add('ok'); win(t('🎉 أحسنت!','🎉 Well done!')); }
        else { b.classList.add('no'); host.querySelector('.sg-msg').textContent=t('حاوِل مرّةً أخرى.','Try again.'); host.querySelector('.sg-msg').className='sg-msg'; }
      }; });
      return true;
    }
    /* 3 · لِأيِّ محطة؟ — match the key to its station title */
    function gWhich(){
      var others=sgShuffle(sgOtherTitles(st)); if(others.length<2) return false;
      var opts=sgShuffle([st.title[lang],others[0],others[1]]);
      host.innerHTML='<div class="sg-q">'+t('🔑 هذا المِفتاحُ لأيِّ مَحطّة؟','🔑 This key belongs to which station?')+'</div>'
        +'<div class="sg-stmt">«'+(st.key[lang])+'»</div>'
        +'<div class="sg-opts">'+opts.map(function(o){return '<button class="sg-btn">'+o+'</button>';}).join('')+'</div><div class="sg-msg"></div>';
      host.querySelectorAll('.sg-btn').forEach(function(b){ b.onclick=function(){
        if(host.dataset.ans) return;
        if(b.textContent===st.title[lang]){ host.dataset.ans='1'; b.classList.add('ok'); win(t('🎉 صحيح!','🎉 Correct!')); }
        else { b.classList.add('no'); host.querySelector('.sg-msg').textContent=t('ليست هذه — جرّب غيرها.','Not this one — try again.'); host.querySelector('.sg-msg').className='sg-msg'; }
      }; });
      return true;
    }
  }
  function setupHajjGame(st){
    const host=$('#hajjGame'); if(!host) return;
    const steps=st.hajjOrder.steps;
    let order;
    function shuffle(){ do { order=steps.map((_,i)=>i).map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); } while(steps.length>1 && order.every((idx,pos)=>idx===pos)); }
    shuffle();
    let checked=false;
    function draw(){
      host.innerHTML=`
        <div class="hg-head">${t('🎯 رَتِّب خَطَواتِ الحَجِّ بِنَفسِك','🎯 Put the Hajj steps in order yourself')}</div>
        <div class="hg-list">${order.map((idx,pos)=>{
          const s=steps[idx], cls=checked?(idx===pos?'ok':'bad'):'';
          return `<div class="hg-row ${cls}">
            <span class="hg-pos">${pos+1}</span>
            <span class="hg-ic">${s.icon}</span>
            <span class="hg-t">${s[lang]}</span>
            <span class="hg-ud">
              <button class="hg-up" data-pos="${pos}" ${pos===0?'disabled':''}>▲</button>
              <button class="hg-dn" data-pos="${pos}" ${pos===order.length-1?'disabled':''}>▼</button>
            </span></div>`;
        }).join('')}</div>
        <div class="hg-foot"><button class="hg-check" id="hgCheck">${t('تَحَقَّق ✓','Check ✓')}</button><span class="hg-msg" id="hgMsg"></span></div>`;
      host.querySelectorAll('.hg-up,.hg-dn').forEach(b=>b.onclick=()=>{
        if(checked) return;
        const p=+b.dataset.pos, np=b.classList.contains('hg-up')?p-1:p+1;
        if(np<0||np>=order.length) return;
        const tmp=order[p]; order[p]=order[np]; order[np]=tmp; draw();
      });
      $('#hgCheck').onclick=()=>{
        if(checked){ shuffle(); checked=false; draw(); return; }
        checked=true;
        const correct=order.filter((idx,pos)=>idx===pos).length;
        draw();
        const msg=$('#hgMsg'), btn=$('#hgCheck');
        if(correct===steps.length){
          msg.textContent=t('🎉 أحسَنت! كُلُّ الخَطَواتِ في مَكانِها','🎉 Excellent! Every step is in its place');
          msg.className='hg-msg win'; markAct(st,'hajj');
          if(btn) btn.style.display='none';
        } else {
          msg.textContent=t(`${correct} مِن ${steps.length} صَحيحة — حاوِل مَرّةً أُخرى`,`${correct} of ${steps.length} correct — try again`);
          msg.className='hg-msg'; if(btn) btn.textContent=t('أعِد المُحاوَلة ↺','Try again ↺');
        }
      };
    }
    draw();
  }

  function gotoPrev(i){ if(i-1>=0) openStation(i-1); }

  /* ───────── STAMP ───────── */
  /* activity progress: flip card + daily mission */
  function actsAvail(st){ var a=[]; if(st.flip) a.push('flip'); if(st.action) a.push('action'); a.push('game'); if(!a.length) a.push('read'); return a; }
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
      title.textContent=t('🔑 مَفاتيحُ العِبادة','🔑 Keys of Worship');
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
      <div class="cert-kick">${t('واحةُ العِبادة · رِحلةُ '+meta.title.ar,'The Worship Oasis · '+meta.title.en+' Journey')}</div>
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
