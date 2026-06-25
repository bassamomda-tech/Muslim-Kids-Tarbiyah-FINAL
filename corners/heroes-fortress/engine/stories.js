/* engine/stories.js — rich Stories page for a prophet (reads ?prophet=ibrahim)
   Loads data/chapters/<id>.js (meta) + data/stories/<id>.js (the 8 stories),
   renders a story-card grid, and opens StoryReader per card.
   Per-story completion is saved in localStorage; finishing all stories
   grants the chapter medal so the era map shows the station complete. */
(function(){
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const pid = (params.get('prophet') || 'ibrahim').replace(/[^a-z]/gi,'');
  let lang = Progress.lang();
  let meta = null, stories = [];

  const SKEY = 'hisn-stories-' + pid;
  function loadDone(){ try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch(e){ return {}; } }
  function saveDone(d){ localStorage.setItem(SKEY, JSON.stringify(d)); }
  let done = loadDone();

  function loadScript(src){
    return new Promise((res,rej)=>{ const t=document.createElement('script'); t.src=src;
      t.onload=res; t.onerror=()=>rej(new Error('load '+src)); document.head.appendChild(t); });
  }

  function emblem(){ return (window.ICONS && window.ICONS[meta.icon]) || '📖'; }

  function heroWave(){
    return `<svg class="st-wave" viewBox="0 0 600 24" preserveAspectRatio="none"><path d="M0 24 V10 Q150 -6 300 10 T600 10 V24 Z" fill="var(--bg2)"/></svg>`;
  }

  function renderHero(){
    document.documentElement.style.setProperty('--ec', meta.accent || '#E67E22');
    document.documentElement.style.setProperty('--ec2', meta.accent2 || '#F5A04A');
    $('#stHero').innerHTML =
      `<div class="st-emblem">${emblem()}</div>
       <h1>${meta.name[lang]||meta.name.ar}<span class="en">${lang==='ar'? (meta.name.en||'') : ''}</span></h1>
       <div class="st-tag">${meta.tag ? (meta.tag[lang]||meta.tag.ar) : ''}</div>
       <div class="st-count">📖 <span>${stories.length}</span> ${lang==='ar'?'قصص كاملة':'full stories'}</div>
       ${heroWave()}`;
    $('#brandName').textContent = (meta.collection && (meta.collection[lang]||meta.collection.ar)) || (lang==='ar' ? 'قصص الأنبياء' : 'Prophet Stories');
    if($('#brandSubAr') && meta.subtitle) $('#brandSubAr').textContent = meta.subtitle.ar||'';
    if($('#brandSubEn') && meta.subtitle) $('#brandSubEn').textContent = meta.subtitle.en||'';
    if($('#backLink')) $('#backLink').setAttribute('href','era.html?era='+(meta.era||'prophets'));
  }

  function arEn(d){ if(d==null) return ''; if(typeof d==='string') return d; return d[lang]||d.ar||d.en||''; }

  function renderTrack(){
    const total = stories.length, n = stories.filter((_,i)=>done[i]).length;
    $('#stTrackLbl').innerHTML = `<span>${lang==='ar'?'تقدّمك في القصص':'Your story progress'}</span><span>${n}/${total}</span>`;
    requestAnimationFrame(()=>{ $('#stTrackFill').style.width = total? (n/total*100)+'%' : '0%'; });
  }

  function renderCards(){
    $('#storyGrid').innerHTML = stories.map((s,i)=>{
      const isDone = !!done[i];
      const qn = (s.quiz && s.quiz.length) || 0;
      const pn = (s.pages && s.pages.length) || 0;
      return `<button class="story-card ${isDone?'done':''}" data-i="${i}" style="animation-delay:${.05+i*.05}s">
        <span class="sc-num">${s.icon||'📖'}</span>
        <span class="sc-body">
          <span class="sc-title">${arEn(s.title)}</span>
          <span class="sc-meta">
            <span class="sc-chip">📄 ${pn} ${lang==='ar'?'صفحة':'pages'}</span>
            ${qn?`<span class="sc-chip">🏅 ${qn} ${lang==='ar'?'أسئلة':'Q'}</span>`:''}
            ${isDone?`<span class="sc-chip" style="color:#2E9E5B">✓ ${lang==='ar'?'تمّت':'done'}</span>`:''}
          </span>
        </span>
        <span class="sc-go">›</span>
      </button>`;
    }).join('');
    $('#storyGrid').querySelectorAll('.story-card').forEach(btn=>{
      btn.addEventListener('click', ()=> openStory(+btn.dataset.i));
    });
  }

  function openStory(i){
    const story = stories[i];
    StoryReader.open(story, meta.accent || '#E67E22', lang, (type)=>{
      if(type === 'complete'){
        done[i] = 1; saveDone(done);
        renderCards(); renderTrack(); header();
        // finishing every story grants the prophet's medal + 3 stars on the map
        if(stories.every((_,k)=>done[k]) && meta.treasures && meta.treasures.medal){
          Progress.grant(pid, { stars:3, medal:{ icon:meta.icon, title: meta.treasures.medal } });
          toast(lang==='ar'?'🎉 أكملتَ كلَّ قصص '+ (meta.name.ar) : '🎉 You finished every story!');
        }
      }
    });
  }

  function header(){ $('#lvl').textContent='LVL '+Progress.level(); $('#xp').textContent=Progress.totalXp()+' XP';
    requestAnimationFrame(()=>$('#xpfill').style.width=Progress.xpPct()+'%'); }

  let toastEl;
  function toast(m){ if(!toastEl){ toastEl=document.createElement('div'); toastEl.className='toast'; document.body.appendChild(toastEl);} 
    toastEl.textContent=m; toastEl.classList.add('show'); clearTimeout(toastEl._t); toastEl._t=setTimeout(()=>toastEl.classList.remove('show'),2800); }

  function setLang(l){
    lang=l; Progress.setLang(l); document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    $('#langAr').classList.toggle('on',l==='ar'); $('#langEn').classList.toggle('on',l==='en');
    $('#backTxt').textContent=l==='ar'?'المرحلة':'Era';
    renderHero(); renderCards(); renderTrack();
  }
  window.setLang=setLang;

  async function boot(){
    // starfield
    let s=''; for(let i=0;i<40;i++){ s+=`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;--d:${2+Math.random()*3}s;--dl:${-Math.random()*4}s"></i>`; }
    $('#stars').innerHTML=s;
    $('#brandBadge').innerHTML = (window.HISN_SVG && HISN_SVG.badge) || '';
    try{
      await loadScript('data/chapters/'+pid+'.js');
      await loadScript('data/stories/'+pid+'.js');
    }catch(e){ $('#storyStage').innerHTML='<p style="padding:2rem;text-align:center">Stories not found.</p>'; return; }
    meta = (window.HISN && HISN.chapters && HISN.chapters[pid]) || { name:{ar:pid,en:pid}, icon:'fire', accent:'#E67E22', accent2:'#F5A04A' };
    stories = (window.HISN_STORIES && HISN_STORIES[pid]) || [];
    header(); setLang(lang);
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
