/* ═══════════════════════════════════════════════════════════════
   QURAN STORIES — engine: courtyard gallery, paginated story reader
   ─────────────────────────────────────────────────────────────── */
window.QSStore=(function(){const P='qs:';
  return{get(k){try{return localStorage.getItem(P+k)}catch(e){return null}},
    set(k,v){try{localStorage.setItem(P+k,v)}catch(e){}}};})();

window.QSApp=(function(){
  let lang=QSStore.get('lang')||'ar';
  let cur=null;
  function tr(d){if(d==null)return'';if(typeof d==='string')return d;return d[lang]||d.ar||d.en||'';}
  function el(t,c,h){const n=document.createElement(t);if(c)n.className=c;if(h!=null)n.innerHTML=h;return n;}
  function arNum(n){return String(n).replace(/[0-9]/g,c=>'٠١٢٣٤٥٦٧٨٩'[c]);}

  function setLang(l){lang=l;QSStore.set('lang',l);document.documentElement.lang=l;
    document.documentElement.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('.qs-lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    buildGallery();if(cur)openStory(cur);}

  /* ── gallery ── */
  function buildGallery(){
    const root=document.getElementById('storyGrid');if(!root)return;root.innerHTML='';
    window.QS_INDEX.forEach(s=>{
      const done=QSStore.get('done:'+s.slug)==='1';
      const c=el('button','story-scroll'+(done?' done':''));
      c.innerHTML=`<span class="num-badge">${arNum(s.num)}</span><span class="seal">⭐</span>
        <div class="emblem">${s.emoji}</div>
        <div class="s-name">${lang==='ar'?s.nameAr:s.nameEn}</div>
        <div class="s-meta">${lang==='ar'?s.metaAr:s.metaEn}</div>
        <div class="s-surah">${lang==='ar'?s.surahAr:s.surahEn}</div>`;
      c.addEventListener('click',()=>openStory(s.slug));
      root.appendChild(c);
    });
    const row=document.getElementById('cpRow');
    if(row){row.innerHTML='';
      window.QS_INDEX.forEach(s=>{const raised=QSStore.get('done:'+s.slug)==='1';
        const p=el('div','cp-flag'+(raised?' raised':''),raised?'🚩':'🏳️');
        p.title=lang==='ar'?s.nameAr:s.nameEn;p.addEventListener('click',()=>openStory(s.slug));row.appendChild(p);});}
    const dc=window.QS_INDEX.filter(s=>QSStore.get('done:'+s.slug)==='1').length;
    const e=document.getElementById('cpCount');
    if(e)e.textContent=lang==='ar'?`رفعتَ ${dc} من ${window.QS_INDEX.length} رايات — أكمل القصة لترفع رايتها!`
      :`You raised ${dc}/${window.QS_INDEX.length} banners — finish a story to raise its flag!`;
  }

  function confetti(){const r=document.getElementById('confetti');if(!r)return;
    const cols=['#E67E22','#1A9B7B','#E8A82F','#C0392B','#F6B26B','#7C9E4E'];
    for(let i=0;i<54;i++){const p=el('div','cf-piece');p.style.left=Math.random()*100+'%';
      p.style.background=cols[Math.floor(Math.random()*cols.length)];p.style.animationDelay=(Math.random()*.6)+'s';
      p.style.animationDuration=(1.7+Math.random()*1.4)+'s';p.style.width=(6+Math.random()*8)+'px';
      p.style.height=(10+Math.random()*9)+'px';r.appendChild(p);setTimeout(()=>p.remove(),3600);}}
  let tT;function toast(m,t){const e=document.getElementById('toast');if(!e)return;e.textContent=m;
    e.className='toast show '+(t||'');clearTimeout(tT);tT=setTimeout(()=>e.classList.remove('show'),2400);}

  function openStory(slug){cur=slug;const s=window.QS_INDEX.find(x=>x.slug===slug);const d=window.QSTORIES[slug];
    document.body.classList.add('reading');location.hash='#'+slug;
    document.getElementById('rNm').textContent=lang==='ar'?s.nameAr:s.nameEn;
    document.getElementById('rMt').textContent=lang==='ar'?s.surahAr:s.surahEn;
    const book=document.getElementById('book');book.style.animation='none';void book.offsetWidth;book.style.animation='';
    renderBook(s,d);window.scrollTo({top:0});}
  function closeStory(){cur=null;document.body.classList.remove('reading');location.hash='';}
  function navStory(dir){const list=window.QS_INDEX;let i=list.findIndex(x=>x.slug===cur);if(i<0)return;
    i=(i+dir+list.length)%list.length;openStory(list[i].slug);}

  function renderBook(s,d){
    const book=document.getElementById('book');book.innerHTML='';
    const scene=el('div','b-scene');
    scene.innerHTML=`<div class="s-emoji">${s.emoji}</div><div class="s-wall"></div>
      <span class="b-pg">${lang==='ar'?'قصة':'#'} ${arNum(s.num)}</span>`;
    book.appendChild(scene);
    const crest=el('div','b-crest');
    crest.innerHTML=`<div class="arch">${lang==='ar'?s.nameAr:s.nameEn}</div>
      <div class="mt">${lang==='ar'?s.surahAr:s.surahEn}${d&&d.tagline?' · '+tr(d.tagline):''}</div>`;
    book.appendChild(crest);
    if(!d){book.appendChild(el('div','b-body','<div style="text-align:center;padding:2rem;color:#9A8463">قريباً</div>'));return;}
    const TABS=[
      {id:'verses',em:'📖',ar:'الآيات',en:'Verses'},
      {id:'story',em:'📜',ar:'القصة',en:'Story'},
      {id:'lessons',em:'💎',ar:'الدروسُ والعِبَر',en:'Lessons & Morals'},
      {id:'quiz',em:'🦸',ar:'ميدانُ الأبطال',en:'Heroes\u2019 Arena'},
      {id:'treasures',em:'🎒',ar:'كُنوز',en:'Treasures'},
    ];
    const tabs=el('div','b-tabs');const body=el('div','b-body');
    TABS.forEach((t,i)=>{const b=el('button','b-tab'+(i===0?' active':''));
      b.innerHTML=`<span>${t.em}</span><span>${lang==='ar'?t.ar:t.en}</span>`;
      b.addEventListener('click',()=>{tabs.querySelectorAll('.b-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');
        body.querySelectorAll('.b-pane').forEach(p=>p.classList.remove('active'));body.querySelector('#qpane-'+t.id).classList.add('active');});
      tabs.appendChild(b);});
    book.appendChild(tabs);book.appendChild(body);
    body.appendChild(paneVerses(d));
    body.appendChild(paneStory(s,d));
    body.appendChild(paneLessons(s,d));
    body.appendChild(paneQuiz(s,d));
    body.appendChild(paneTreasures(s,d));
    const firstPane=body.querySelector('#qpane-'+TABS[0].id);if(firstPane)firstPane.classList.add('active');
  }

  function paneStory(s,d){
    const pane=el('div','b-pane story-pane');pane.id='qpane-story';
    const st=d.story||{pages:[]};let idx=0;
    if(d.figures&&d.figures.length){
      const cast=el('div','sp-cast');
      cast.appendChild(el('div','cast-h','👥 '+(lang==='ar'?'أبطالُ القصة':'Story cast')));
      const row=el('div','cast-row');
      d.figures.forEach(f=>{const c=el('div','cast-chip'+(f.villain?' villain':''));
        c.innerHTML=`<span class="av">${f.emoji}</span><span class="ci"><span class="nm">${tr(f.name)}</span><span class="role">${tr(f.role)}</span></span>`;
        row.appendChild(c);});
      cast.appendChild(row);pane.appendChild(cast);
    }
    const scene=el('div','sp-scene','<span class="big">'+(st.emoji||'📜')+'</span>');
    const numEl=el('div','sp-page-num','');const txt=el('div','sp-text','');
    const choiceWrap=el('div','');
    const nav=el('div','sp-nav');
    const prev=el('button','',lang==='ar'?'‹ السابقة':'‹ Prev');
    const next=el('button','primary','');
    function show(){const p=st.pages[idx]||{};
      numEl.textContent=(lang==='ar'?'صفحة':'Page')+' '+arNum(idx+1)+'/'+arNum(st.pages.length);
      txt.innerHTML=tr(p.text);if(p.emoji)scene.innerHTML='<span class="big">'+p.emoji+'</span>';
      choiceWrap.innerHTML='';
      if(p.choice){const c=el('div','sp-choice');c.innerHTML=`<div class="q">🤔 ${tr(p.choice.q)}</div>`;
        p.choice.opts.forEach(o=>{const b=el('button','opt',tr(o.t));
          b.addEventListener('click',()=>{if(b.disabled)return;
            if(o.c){b.classList.add('ok');[...c.querySelectorAll('.opt')].forEach(x=>x.disabled=true);
              if(o.exp){const e=el('div','');e.style.cssText='margin-top:.4rem;font-size:.82rem;color:#137a60;font-weight:700;line-height:1.6';e.innerHTML='✨ '+tr(o.exp);c.appendChild(e);}}
            else{b.classList.add('bad');b.disabled=true;if(o.exp){const e=el('div','');e.style.cssText='margin-top:.3rem;font-size:.78rem;color:#C62828;font-weight:700';e.innerHTML='✗ '+tr(o.exp);c.appendChild(e);}}});
          c.appendChild(b);});choiceWrap.appendChild(c);}
      prev.disabled=idx===0;
      next.textContent=idx>=st.pages.length-1?(lang==='ar'?'✓ تمت':'✓ Done'):(lang==='ar'?'التالية ›':'Next ›');}
    prev.addEventListener('click',()=>{if(idx>0){idx--;show();}});
    next.addEventListener('click',()=>{if(idx<st.pages.length-1){idx++;show();}});
    nav.appendChild(prev);nav.appendChild(next);
    if(st.title){pane.appendChild(el('div','game-q','📜 '+tr(st.title)));}
    pane.appendChild(scene);pane.appendChild(numEl);pane.appendChild(txt);pane.appendChild(choiceWrap);pane.appendChild(nav);show();
    return pane;
  }

  function rosette(n){let petals='';for(let k=0;k<16;k++){const a=k/16*2*Math.PI;
    petals+=`<circle cx="${(22+Math.cos(a)*15.5).toFixed(1)}" cy="${(22+Math.sin(a)*15.5).toFixed(1)}" r="2.2"/>`;}
    return `<svg viewBox="0 0 44 44" aria-hidden="true"><g fill="#E3B53A">${petals}</g>`+
      `<circle cx="22" cy="22" r="13.5" fill="#FBF1CF" stroke="#C9A227" stroke-width="1.1"/>`+
      `<circle cx="22" cy="22" r="10" fill="#FCF8EA" stroke="#D9B84A" stroke-width=".8"/></svg><span class="ae-num">${arNum(n)}</span>`;}

  function paneVerses(d){
    const pane=el('div','b-pane');pane.id='qpane-verses';
    (d.verses||[]).forEach(v=>{
      const frame=el('div','v-frame');
      frame.innerHTML=`<div class="v-ayah quran-ar">${v.ar} <span class="num">${rosette(v.ayah||'')}</span></div>
        <div class="v-ref">${tr(v.ref)}</div>
        <div class="v-trans">🗣️ ${tr(v.trans)}</div>`;
      pane.appendChild(frame);
    });
    return pane;
  }

  function paneFigures(d){
    const pane=el('div','b-pane');pane.id='qpane-figures';
    const wrap=el('div','figs');
    (d.figures||[]).forEach(f=>{const c=el('div','fig'+(f.villain?' villain':''));
      c.innerHTML=`<div class="av">${f.emoji}</div><div class="info"><div class="nm">${tr(f.name)}</div><div class="role">${tr(f.role)}</div></div>`;
      wrap.appendChild(c);});
    pane.appendChild(wrap);return pane;
  }

  function paneLessons(s,d){
    const pane=el('div','b-pane');pane.id='qpane-lessons';
    pane.appendChild(el('div','game-q','💎 '+(lang==='ar'?'الدروسُ المُستفادة':'Lessons learned')));
    (d.lessons||[]).forEach((l,i)=>{const c=el('div','lesson-card');
      c.innerHTML=`<span class="em">${['💎','🌟','🛡️','🌿','🔑','⚖️'][i%6]}</span><span class="t">${tr(l)}</span>`;
      pane.appendChild(c);});
    if(d.reflect&&d.reflect.length){
      const rh=el('div','game-q','🏮 '+(lang==='ar'?'تأمّل واكتشِف — اضغطِ الفانوس':'Reflect & discover — tap the lantern'));
      rh.style.marginTop='1.2rem';pane.appendChild(rh);
      d.reflect.forEach(t=>{const c=el('div','tad-card');
        c.innerHTML=`<div class="tad-q"><span class="lamp">🏮</span><span>${tr(t.q)}</span></div><div class="tad-a">${tr(t.a)}</div>`;
        c.addEventListener('click',()=>c.classList.toggle('lit'));pane.appendChild(c);});
    }
    return pane;
  }

  function paneReflect(d){
    const pane=el('div','b-pane');pane.id='qpane-reflect';
    pane.appendChild(el('div','game-q','🏮 '+(lang==='ar'?'اضغط الفانوس لتتأمّل':'Tap the lantern to reflect')));
    (d.reflect||[]).forEach(t=>{const c=el('div','tad-card');
      c.innerHTML=`<div class="tad-q"><span class="lamp">🏮</span><span>${tr(t.q)}</span></div><div class="tad-a">${tr(t.a)}</div>`;
      c.addEventListener('click',()=>c.classList.toggle('lit'));pane.appendChild(c);});
    return pane;
  }

  function paneQuiz(s,d){
    const pane=el('div','b-pane');pane.id='qpane-quiz';
    function fb(m,ok){let f=pane.querySelector('.game-fb');if(!f){f=el('div','game-fb');}
      f.style.color=ok?'#137a60':'#C62828';f.textContent=m;}
    (d.quiz||[]).forEach((it,qi)=>{const m=el('div','q-mcq');
      m.appendChild(el('div','game-q','🎯 '+tr(it.q)));
      const letters=lang==='ar'?['أ','ب','ج','د']:['A','B','C','D'];
      it.opts.forEach((o,j)=>{const b=el('button','q-opt');
        b.innerHTML=`<span class="lt">${letters[j]}</span><span>${tr(o.t)}</span>`;
        b.addEventListener('click',()=>{if(m.dataset.done)return;
          if(o.c){b.classList.add('ok');m.dataset.done='1';[...m.querySelectorAll('.q-opt')].forEach(x=>x.disabled=true);
            if([...pane.querySelectorAll('.q-mcq')].every(x=>x.dataset.done)){const fbE=pane.querySelector('.game-fb');if(fbE){fbE.style.color='#137a60';fbE.textContent=lang==='ar'?'🎉 أحسنت! أتممت الاختبار':'🎉 Quiz complete!';}}}
          else{b.classList.add('bad');b.disabled=true;}});
        m.appendChild(b);});
      pane.appendChild(m);});
    pane.appendChild(el('div','game-fb',''));
    pane.appendChild(el('div','qs-hint','🎒 '+(lang==='ar'?'انتقِل إلى «كُنوز» لِجمعِ ملصقاتِك وشهادتِك!':'Head to “Treasures” to collect your stickers & certificate!')));
    return pane;
  }

  function mmix(d){const wrap=el('div','mmix');
    (d.magicMix||[]).forEach(m=>{const c=el('div','mmix-step');
      c.innerHTML=`<span class="ic">${m.icon}</span><div class="tx"><div class="t">${tr(m.title)}</div><div class="b">${tr(m.body)}</div></div>`;
      wrap.appendChild(c);});return wrap;}

  function paneTreasures(s,d){
    const pane=el('div','b-pane');pane.id='qpane-treasures';
    const done=QSStore.get('done:'+s.slug)==='1';
    const treasures=(d&&d.treasures)||[];

    if(d&&d.magicMix&&d.magicMix.length){
      pane.appendChild(el('div','game-q','✨ '+(tr(d.magicMixTitle)||(lang==='ar'?'الخُلاصةُ السِّحرية — كيف أعيشُ هذه القصة؟':'The Magic Recipe — how do I live this story?'))));
      if(d.formulaEq)pane.appendChild(el('div','qs-formula',tr(d.formulaEq)));
      pane.appendChild(mmix(d));
    }

    if(treasures.length){
      const dh=el('div','game-q','🏷️ '+(lang==='ar'?'مُلصقاتُ البطل':'Hero stickers'));
      dh.style.marginTop='1.2rem';pane.appendChild(dh);
      const earned=(QSStore.get('stickers:'+s.slug)||'').split(',').filter(Boolean);
      const grid=el('div','stickers');
      treasures.forEach((t,i)=>{const isE=earned.includes(String(i));
        const st=el('div','sticker'+(isE?' earned':''));st.style.setProperty('--st-color',t.color||'#E67E22');
        st.innerHTML=`<div class="em">${t.icon}</div><div class="ttl">${tr(t.title)}</div>`;grid.appendChild(st);});
      pane.appendChild(grid);
    }

    const certText=(d&&d.certificate)||{};
    const heroName=lang==='ar'?s.nameAr:s.nameEn;
    const seal=(d&&d.icon)||s.emoji||'⭐';
    const cert=el('div','qs-cert');
    if(done){
      cert.innerHTML=`<div class="cert-card" id="qsCertCard">
        <div class="cert-ribbon">🎖️ ${lang==='ar'?'وِسامُ البطل':'Hero Medal'}</div>
        <div class="cert-h">${lang==='ar'?'شهادةُ إتمام':'Certificate of Completion'}</div>
        <div class="cert-h cert-h2">${lang==='ar'?('قصةُ '+heroName):heroName}</div>
        <div class="cert-sub">${tr(certText.subtitle)||(lang==='ar'?'تُمنَحُ لِمَن أتمَّ هذه القصةَ القرآنية':'Awarded to the one who completed this Quran story')}</div>
        <div class="cert-name-row"><span>${lang==='ar'?'تُمنَحُ لـ:':'Awarded to:'}</span>
          <span class="cert-name" contenteditable="true" id="qsCertName">${QSStore.get('name:'+s.slug)||QSStore.get('childName')||''}</span></div>
        <div class="cert-statement">${tr(certText.statement)||''}</div>
        <div class="cert-seal" aria-hidden="true"><span class="em">${seal}</span><span>${lang==='ar'?'ختمُ الحِصن':'Fortress Seal'}</span></div>
        <div class="cert-sig"><div><div class="line"></div>${lang==='ar'?'توقيعي':'Signature'}</div><div><div class="line"></div><span>${new Date().toLocaleDateString(lang==='ar'?'ar-EG':'en-US')}</span></div></div>
        <div class="cert-actions"><button class="primary" id="qsCertPrint">🖨️ ${lang==='ar'?'طباعةُ الشهادة':'Print certificate'}</button><button id="qsCertSave">📤 ${lang==='ar'?'حفظُ الاسم':'Save name'}</button></div>
      </div>`;
    } else {
      const ec=(QSStore.get('stickers:'+s.slug)||'').split(',').filter(Boolean).length;
      cert.innerHTML=`<div class="cert-locked">🔒 ${lang==='ar'?'أتمِمِ القصةَ لِتفتحَ شهادتَك!':'Complete the story to unlock your certificate!'}<br><span class="cl-sub">${ec}/${treasures.length} ${lang==='ar'?'ملصق · اضغطْ زِرَّ الإتمامِ أدناه':'stickers · tap the complete button below'}</span></div>`;
    }
    pane.appendChild(cert);
    const certName=cert.querySelector('#qsCertName');
    if(certName)certName.addEventListener('input',()=>{const v=certName.textContent.trim();QSStore.set('name:'+s.slug,v);QSStore.set('childName',v);});
    const cp=cert.querySelector('#qsCertPrint');
    if(cp)cp.addEventListener('click',()=>{const card=cert.querySelector('#qsCertCard');const area=document.getElementById('qsPrintArea');if(!card||!area)return;
      area.style.display='block';area.innerHTML='';const cl=card.cloneNode(true);cl.querySelectorAll('.cert-actions').forEach(n=>n.remove());area.appendChild(cl);
      setTimeout(()=>{window.print();setTimeout(()=>{area.style.display='none';area.innerHTML='';},500);},100);});
    const cs=cert.querySelector('#qsCertSave');
    if(cs)cs.addEventListener('click',()=>{if(certName){const v=certName.textContent.trim();QSStore.set('name:'+s.slug,v);QSStore.set('childName',v);}toast(lang==='ar'?'✓ تم حفظ الاسم':'✓ Name saved','success');});

    const cta=el('button','complete-cta'+(done?' done':''));
    cta.textContent=done?(lang==='ar'?'✓ أتممتَ هذه القصة — أحسنت!':'✓ Story completed!')
      :(lang==='ar'?'🎒 أتمِمِ القصةَ واحصُلْ على شهادتِك وملصقاتِك':'🎒 Complete & claim your treasures');
    cta.addEventListener('click',()=>{if(QSStore.get('done:'+s.slug)==='1')return;
      if(treasures.length)QSStore.set('stickers:'+s.slug,[...Array(treasures.length).keys()].map(String).join(','));
      QSStore.set('done:'+s.slug,'1');confetti();
      toast(lang==='ar'?'🎉 رفعتَ راية بطل جديد!':'🎉 You raised a hero\u2019s banner!','success');
      buildGallery();renderBook(s,d);setTimeout(()=>{document.querySelectorAll('.b-tab')[4]?.click();},50);});
    pane.appendChild(cta);
    const nav=el('div','sp-nav');nav.style.marginTop='1rem';
    const prev=el('button','',lang==='ar'?'← السابقة':'← Prev');const next=el('button','primary',lang==='ar'?'التالية →':'Next →');
    prev.addEventListener('click',()=>navStory(-1));next.addEventListener('click',()=>navStory(1));
    nav.appendChild(prev);nav.appendChild(next);pane.appendChild(nav);
    return pane;
  }

  function init(){
    document.querySelectorAll('.qs-lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    setLang(lang);
    document.getElementById('rBack').addEventListener('click',closeStory);
    document.getElementById('rPrev').addEventListener('click',()=>navStory(-1));
    document.getElementById('rNext').addEventListener('click',()=>navStory(1));
    const h=(location.hash||'').replace('#','');if(h&&window.QSTORIES[h])openStory(h);
    window.addEventListener('keydown',e=>{if(!cur)return;
      if(e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName))return;
      if(e.key==='Escape')closeStory();
      if(e.key==='ArrowLeft')navStory(lang==='ar'?1:-1);
      if(e.key==='ArrowRight')navStory(lang==='ar'?-1:1);});
  }
  return{init,setLang,openStory,closeStory,navStory,buildGallery,confetti,toast};
})();
document.addEventListener('DOMContentLoaded',()=>QSApp.init());
