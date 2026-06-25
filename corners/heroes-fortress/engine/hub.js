/* engine/hub.js — corner landing: crest, era gateways, Hall of Heroes, guide */
(function(){
  const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V'];
  let lang = Progress.lang();
  const $ = s => document.querySelector(s);

  function header(){
    $('#lvl').textContent = 'LVL ' + Progress.level();
    $('#xp').textContent  = Progress.totalXp() + ' XP';
    requestAnimationFrame(()=> $('#xpfill').style.width = Progress.xpPct() + '%');
  }

  function crestMeta(){
    const eras = HISN.eraList();
    const total = eras.reduce((a,e)=>a+e.nodes.length,0);
    const done  = eras.reduce((a,e)=>a+Progress.counts(e).done,0);
    const chips = lang==='ar'
      ? [['🗺️',`${total} محطّة`],['🏛️',`${eras.length} مراحل`],['🏅',`${done} وسام`],['⭐',`${Progress.totalPoints()}${Progress.totalMax()?'/'+Progress.totalMax():''} نقطة`]]
      : [['🗺️',`${total} stations`],['🏛️',`${eras.length} eras`],['🏅',`${done} medals`],['⭐',`${Progress.totalPoints()}${Progress.totalMax()?'/'+Progress.totalMax():''} points`]];
    $('#crestMeta').innerHTML = chips.map(([e,t])=>`<span class="crest-chip">${e} ${t}</span>`).join('');
  }

  function gateways(){
    $('#gateways').innerHTML = HISN.eraList().map((era,i)=>{
      const c = Progress.counts(era);
      const pct = Math.round(c.done/c.total*100);
      const certDone = c.total>0 && c.done>=c.total;
      const certBadge = certDone
        ? `<span class="gw-cert" title="${lang==='ar'?'شهادةُ المرحلة مفتوحة':'Era certificate unlocked'}">🎖️ ${lang==='ar'?'شهادة':'Certified'}</span>`
        : '';
      return `<a class="gateway${certDone?' certified':''}" href="era.html?era=${era.id}" style="--ec:${era.accent};--ec2:${era.accent2};animation-delay:${.1+i*.1}s">
        ${certBadge}
        <div class="gw-side">
          <span class="gw-romnum">${ROMAN[era.order]}</span>
          <span class="gw-emblem">${HISN_SVG[era.icon]||''}</span>
        </div>
        <div class="gw-main">
          <div class="gw-tier">${era.tier[lang]}</div>
          <h3>${era.title[lang]}<span class="gw-en">${era.title.en}</span></h3>
          <div class="gw-sub">${era.sub[lang]}</div>
          <p class="gw-blurb">${era.blurb[lang]}</p>
          <div class="gw-foot">
            <span class="gw-bar"><i style="width:${pct}%"></i></span>
            <span class="gw-count">${c.done}/${c.total}</span>
            <span class="gw-pts">⭐ ${Progress.eraPoints(era.id)}${Progress.eraMax(era.id)?'/'+Progress.eraMax(era.id):''}</span>
          </div>
          <span class="gw-cta">${lang==='ar'?'ادخلِ المرحلة ←':'Enter era →'}</span>
        </div>
      </a>`;
    }).join('');
  }

  function hall(){
    // Fortress hall shows history medals only — Pure Heart has its own hall.
    const isHeart = (window.HISN && HISN.isHeartMedal) ? HISN.isHeartMedal : (m=>m.era==='heart');
    const earned = Progress.medals().filter(m=>!isHeart(m)).map(m=>({...m, won:true}));
    const heroSlots = (HISN.eras.heroes ? HISN.eras.heroes.nodes : []).map(n=>({icon:'shield', title:n.name, won:Progress.isDone(n.id)}));
    const all = [...earned, ...heroSlots];
    $('#hallGrid').innerHTML = all.map(m=>`<div class="medal ${m.won?'won':'locked'}">
      <div class="ribbon">${m.won ? (window.ICONS[m.icon]||window.ICONS.shield) : window.lockSVG}</div>
      <small>${m.won ? (m.title[lang]||m.title.ar||m.title) : '؟'}</small></div>`).join('');
  }

  /* guide */
  let gi=0, gt=null;
  function guide(){
    const lines = HISN.guide.lines;
    $('#guideLine').textContent = lines[gi%lines.length][lang];
    $('#guideName').textContent = HISN.guide.name[lang];
    gi++;
  }
  function startGuide(){ guide(); clearInterval(gt); gt=setInterval(guide,6500); }
  window.tuckGuide = ()=> $('#guide').classList.toggle('tuck');

  function setLang(l){
    lang=l; Progress.setLang(l);
    document.documentElement.lang=l; document.documentElement.dir = l==='ar'?'rtl':'ltr';
    $('#langAr').classList.toggle('on', l==='ar');
    $('#langEn').classList.toggle('on', l==='en');
    $('#backTxt').textContent = l==='ar'?'المدينة':'City';
    $('#brandName').textContent = l==='ar'?'حِصن الأبطال':"Hero's Fortress";
    $('#crestSub').textContent = l==='ar'
      ? 'اصعدْ عبرَ الزمن في أربعِ مراحل. اختَر مرحلةً وابدأِ الرحلة.'
      : 'Climb through time across four eras. Choose an era and begin the journey.';
    $('#secEras').textContent = l==='ar'?'مراحلُ الحصن':'Eras of the fortress';
    $('#hallSub').textContent = l==='ar'?'اجمعْ وسامَ كلِّ بطلٍ تُكملُ قصّتَه':'Collect a medal for every hero whose story you complete';
    if($('#learnSub')) $('#learnSub').textContent = l==='ar'?'أنشطةٌ تفاعليّةٌ ممتعة على ٣ مستويات — اختَر مرحلةً وابدأِ اللعب والتعلّم!':'Fun interactive activities across 3 levels — pick an era and start playing & learning!';
    crestMeta(); gateways(); hall(); learnHall(); startGuide();
  }
  function learnHall(){
    const box=$('#learnGrid'); if(!box) return;
    const eras=HISN.eraList().filter(e=>HISN.activities && HISN.activities[e.id]);
    box.innerHTML = eras.map(era=>{
      const pack=HISN.activities[era.id], total=pack.list.length*3;
      let done=0; try{ done=Object.values(JSON.parse(localStorage.getItem('hisn-acts-'+era.id)||'{}')).filter(Boolean).length; }catch(e){}
      return `<a class="learn-tile" href="activities.html?era=${era.id}" style="--ec:${era.accent}">
        <span class="lt-ic">${HISN_SVG[era.icon]||'🎯'}</span>
        <span class="lt-nm">${era.title[lang]}</span>
        <span class="lt-ct ${done>=total&&total>0?'full':''}">${done}/${total}</span></a>`;
    }).join('');
  }
  window.setLang = setLang;

  function boot(){
    $('#brandBadge').innerHTML = HISN_SVG.badge;
    $('#crestShield').innerHTML = HISN_SVG.crest;
    $('#guideAvatar').innerHTML = HISN_SVG.guide;
    // starfield
    let s=''; for(let i=0;i<46;i++){ s+=`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;--d:${2+Math.random()*3}s;--dl:${-Math.random()*4}s;width:${Math.random()<.3?3:2}px;height:${Math.random()<.3?3:2}px"></i>`; }
    $('#stars').innerHTML = s;
    header(); setLang(lang);
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
