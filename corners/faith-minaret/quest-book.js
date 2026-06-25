/* ════════════════════════════════════════════════════════════════
   quest-book.js — renders the عجائب الخلق quest storybook as a series of
   two-page spreads from window.QUEST. Builds: a front cast/kingdom
   spread, 20 station spreads (left = story, right = quest), and a
   certificate. Image slots are CLEAN (no prompt UI — prompts live in the
   separate "Quest Book Art Prompts" doc). Screen = one spread + nav;
   Print = every spread, each page its own sheet (PDF-ready).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var Q = window.QUEST || {};
  var QUESTS = Q.QUESTS || [];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph||'ضع الرسمة هنا · drop art')+'"></image-slot>'; }

  /* ───────── front cast / kingdom spread ───────── */
  function coverLeft(){
    return '<div class="cover-mid">'+
      '<div class="cover-kick">منارة العقيدة · FAITH MINARET</div>'+
      '<h1 class="cover-title">عجائب الخلق<span class="en lat">Wonders of Creation</span></h1>'+
      '<div class="cover-sub">رحلةُ اليقين مع يوسفَ ومريم — عشرونَ مغامرةً تكتشفُ فيها بدائعَ خلقِ الله، وتُثبتُ أنّ لكلِّ تصميمٍ مُصمِّماً حكيماً.<br>'+
        '<span class="en lat" style="font-size:.92rem">The Journey of Certainty with Youssef &amp; Mariam — twenty adventures discovering the wonders of Allah\'s creation.</span></div>'+
      '<span class="cover-badge">📖 كتابُ قصصٍ ومغامرات · للأعمار ٦–١٢</span>'+
      '<div class="map-panel" style="width:100%;margin-top:14px"><h3>🗺️ '+Q.MAP.label.ar+'<span class="en lat">'+Q.MAP.label.en+'</span></h3>'+
        '<div class="map-frame">'+slot(Q.MAP.slot,210,Q.MAP.label.ar)+'</div>'+
        '<div class="map-locs">'+Q.MAP.locations.map(function(l){return '<span>'+l+'</span>';}).join('')+'</div></div>';
  }
  function coverRight(){
    var chars=Q.CHARACTERS.map(function(c){
      return '<div class="char"><div class="c-slot">'+slot(c.slot,150,c.name.ar)+'</div>'+
        '<div class="c-name">'+c.name.ar+'<span class="en lat" style="display:block;font-size:.7rem;color:var(--gold-lt)">'+c.name.en+'</span></div>'+
        '<div class="c-role">'+c.role.ar+'<span class="en lat">'+c.role.en+'</span></div></div>';
    }).join('');
    return '<div class="banner"><h2>أبطالُ الرحلة</h2><div class="en lat">Meet the heroes</div></div>'+
      '<div class="char-panel"><div class="char-grid">'+chars+'</div></div>'+
      '<div class="banner small"><h2>كيف نقرأُ الكتاب</h2><div class="en lat">How to use this book</div></div>'+
      '<div class="scroll"><p>'+
        '🖼️ كلُّ إطارٍ ذهبيٍّ مكانٌ لرسمة. وَلِّد الرسمةَ مِن «كتابِ أوصافِ الرسومات» المرافق، ثمّ اسحبها وأفلِتها داخلَ الإطار — وتبقى محفوظة.<br>'+
        '🎯 في صفحةِ المغامرة: المِس بطاقاتِ «الاكتشاف» الثلاث لتُضيءَ نجومَ اليقين.<br>'+
        '🖨️ بعدَ إضافةِ الصُّور، اطبَع الكتابَ أو احفظهُ PDF جاهزاً للنشر.'+
        '<span class="en lat">Each gold frame is an image slot — generate the art from the companion "Art Prompts" doc, then drag &amp; drop it in (it stays saved). Tap the three discovery cards to light the stars. When the pictures are in, print or save as PDF — ready to publish.</span>'+
      '</p></div>'+
      '<div class="msg-ribbon"><span class="mr-ic">✨</span><div class="mr-t">بسمِ اللهِ… لنبدأ رحلةَ اليقين!<span class="en lat">In the name of Allah… let the Journey of Certainty begin!</span></div></div>';
  }

  /* ───────── station spread ───────── */
  function leftPage(q){
    return '<div class="value-tag"><span class="vt-ic">'+q.icon+'</span><span class="vt-lbl">القيمة</span><span class="vt-val">'+q.value.ar+'</span></div>'+
      '<div class="banner"><h2>'+q.title.ar+'</h2><div class="en lat">'+q.title.en+'</div></div>'+
      '<div class="ribbon">🔑 '+q.subtitle.ar+'<span class="en lat">'+q.subtitle.en+'</span></div>'+
      '<div class="slot-frame">'+slot(q.hero.slot,300,q.hero.label.ar)+'</div>'+
      '<div class="scroll"><h3>📖 '+q.storyStart.label.ar+'<span class="en lat">'+q.storyStart.label.en+'</span></h3>'+
        '<p>'+q.storyStart.ar+'<span class="en lat">'+q.storyStart.en+'</span></p></div>'+
      '<div class="scroll"><h3><span class="ic-badge">✨</span>'+q.wonder.label.ar+'<span class="en lat">'+q.wonder.label.en+'</span></h3>'+
        '<p>'+q.wonder.ar+'<span class="en lat">'+q.wonder.en+'</span></p></div>'+
      '<div class="ayah-scroll"><div class="ayah">'+q.ayah.text+'</div>'+
        '<div class="ayah-ref">'+q.ayah.ref.ar+' · '+q.ayah.ref.en+'</div>'+
        '<div class="ayah-exp">'+q.ayah.explain.ar+'<span class="en lat">'+q.ayah.explain.en+'</span></div></div>';
  }

  function rightPage(q){
    var tests=q.tests.map(function(t,i){
      return '<div class="test" data-test="'+i+'"><div class="t-check">✓</div>'+
        '<div class="t-h">'+(i+1)+'. '+t.title.ar+'<span class="en lat">'+t.title.en+'</span></div>'+
        '<div class="t-slot">'+slot(t.slot,96,t.title.ar)+'</div>'+
        '<div class="t-cap">'+t.caption.ar+'<span class="en lat">'+t.caption.en+'</span></div></div>';
    }).join('');
    var badges=q.badges.map(function(b){
      return '<div class="qbadge" data-badge><div class="qb-ic">'+b.icon+'</div><div class="qb-lbl">'+b.label.ar+'<span class="en lat">'+b.label.en+'</span></div></div>';
    }).join('');
    return '<div class="banner small"><h2>'+q.questTitle.ar+'</h2><div class="en lat">'+q.questTitle.en+'</div></div>'+
      '<div class="qi-text">'+q.intro.ar+'<span class="en lat">'+q.intro.en+'</span></div>'+
      '<div class="qi-row">'+
        '<div class="gem"><div class="gem-orb">'+q.emoji+'</div></div>'+
        '<div class="mission"><div class="mq-lbl">🎯 مهمّتُكما — Your mission</div><p>'+q.mission.ar+'</p><span class="en lat">'+q.mission.en+'</span></div>'+
        '<div class="sage"><div class="sage-orb">🦉</div><div class="sage-cap">الحكيم</div></div>'+
      '</div>'+
      '<div class="myth"><div class="myth-row"><span class="myth-tag">🎲 السيّد «صُدفة» يقول</span><span class="myth-txt">'+q.mrChance.ar+'</span></div>'+
        '<div class="bust-row"><span class="bust-tag">✅ الحقيقة</span><span class="bust-txt">'+q.bust.ar+'<span class="en lat">'+q.bust.en+'</span></span></div></div>'+
      '<div class="tests-h">🔎 اكتشافاتُ الرحلة — The three discoveries</div>'+
      '<div class="tests">'+tests+'</div>'+
      '<div class="resolution"><div class="r-slot">'+slot(q.resolution.slot,150,q.resolution.label.ar)+'</div>'+
        '<div class="r-mid"><h3>🌟 '+q.resolution.title.ar+'<span class="en lat">'+q.resolution.title.en+'</span></h3>'+
          '<p>'+q.resolution.text.ar+'<span class="en lat">'+q.resolution.text.en+'</span></p></div></div>'+
      '<div class="two-cards">'+
        '<div class="acard exp"><span class="ac-ic">🧪</span><div class="ac-mid"><b>جرِّب بنفسك</b><div class="body">'+q.experiment.ar+'<span class="en lat">'+q.experiment.en+'</span></div></div></div>'+
        '<div class="acard fam"><span class="ac-ic">👨‍👩‍👧</span><div class="ac-mid"><b>سؤالُ العائلة</b><div class="body">'+q.familyQ.ar+'<span class="en lat">'+q.familyQ.en+'</span></div></div></div>'+
      '</div>'+
      '<div class="scroll lessons"><h3>🎓 ما تعلّمناه<span class="en lat">What we learned</span></h3>'+
        '<ul>'+q.lessons.map(function(l){return '<li>'+l.ar+'<span class="en lat">'+l.en+'</span></li>';}).join('')+'</ul></div>'+
      '<div class="name-of-allah"><span class="noa-ic">🌟</span><div><div class="noa-lbl">اسمٌ من أسماءِ الله — A Name of Allah</div>'+
        '<div class="noa-name">'+q.nameOfAllah.ar+'<span class="en lat">'+q.nameOfAllah.en+'</span></div>'+
        '<div class="noa-mean">'+q.nameOfAllah.meaning.ar+'</div></div></div>'+
      '<div class="msg-ribbon"><span class="mr-ic">🤲</span><div class="mr-t">'+q.message.ar+'<span class="en lat">'+q.message.en+'</span></div></div>'+
      '<div class="star-panel"><div class="sp-star">⭐</div><div class="sp-mid"><b>'+q.star.title.ar+'</b><span class="en-b lat">'+q.star.title.en+'</span>'+
        '<p>'+q.star.text.ar+'<span class="en lat">'+q.star.text.en+'</span></p></div></div>'+
      '<div class="badge-row">'+badges+'</div>';
  }

  /* ───────── certificate spread ───────── */
  function certLeft(){
    var badges=QUESTS.map(function(q){ return '<div class="cert-badge" title="'+esc(q.title.ar)+'">'+q.badges[0].icon+'</div>'; }).join('');
    return '<div class="cert-frame">'+
      '<div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">بطلُ اليقين<span class="en lat">Hero of Certainty</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">أتمَّ رحلةَ اليقينِ مع يوسفَ ومريم، وتأمَّلَ في عشرينَ أعجوبةً مِن خلقِ الله، فعرَفَ أنّ لكلِّ شيءٍ خالقاً حكيماً.<br>'+
        '<span class="en lat" style="font-size:.82rem">completed the Journey of Certainty and reflected on twenty wonders of Allah\'s creation.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
  }
  function certRight(){
    return '<div class="cover-mid">'+
      '<div class="cover-kick">٢٠ نجمةَ يقين · 20 STARS OF CERTAINTY</div>'+
      '<div style="font-size:4rem">🌟</div>'+
      '<h2 class="cover-title" style="font-size:2.2rem">أحسنتَ أيها البطل!<span class="en lat" style="font-size:1.1rem">Well done, hero!</span></h2>'+
      '<div class="cover-sub">لقد جمعتَ كلَّ نجومِ اليقين. تذكّر دائماً: كلّما تأمّلتَ في أصغرِ مخلوق، نطقَ قلبُك: «ما أعظمَ خالقي!».'+
        '<br><span class="en lat" style="font-size:.9rem">You have gathered every Star of Certainty. Remember: reflect on the smallest creature, and your heart will say — how great is my Creator!</span></div>'+
      '<span class="cover-badge">سُبحانَ مَن أتقَنَ كلَّ شيء ✨</span></div>';
  }

  /* ───────── build all spreads ───────── */
  var SPREADS=[];
  SPREADS.push({ kind:'cover', left:coverLeft, right:coverRight, label:{ar:'الغلاف والأبطال', en:'Cover & heroes'} });
  QUESTS.forEach(function(q){ SPREADS.push({ kind:'station', q:q, label:{ar:q.num+'. '+q.title.ar, en:q.title.en} }); });
  SPREADS.push({ kind:'cert', left:certLeft, right:certRight, label:{ar:'الشهادة', en:'Certificate'} });
  var TOTAL=SPREADS.length, current=0;

  function buildAll(){
    var book=document.getElementById('book'); book.innerHTML='';
    SPREADS.forEach(function(s,idx){
      var L,R,extra='';
      if(s.kind==='station'){ L=leftPage(s.q); R=rightPage(s.q); extra=' style="--acc:'+s.q.color+'"'; }
      else { L=s.left(); R=s.right(); }
      var sp=document.createElement('div'); sp.className='spread'; sp.dataset.index=idx; sp.dataset.kind=s.kind;
      sp.innerHTML='<section class="page left"'+extra+'>'+L+'</section><div class="spine"></div><section class="page right"'+extra+'>'+R+'</section>';
      book.appendChild(sp);
    });
    wire(book);
  }

  function wire(root){
    root.querySelectorAll('.spread[data-kind="station"]').forEach(function(sp){
      var tests=sp.querySelectorAll('.test'), badges=sp.querySelectorAll('.qbadge');
      function refresh(){
        var done=sp.querySelectorAll('.test.done').length;
        var lit=Math.ceil(done/Math.max(tests.length,1)*badges.length);
        badges.forEach(function(b,i){ b.classList.toggle('lit', i<lit); });
        if(done===tests.length && tests.length){ badges.forEach(function(b){b.classList.add('lit');}); var sp2=sp.querySelector('.sp-star'); if(sp2) sp2.classList.add('big'); }
      }
      tests.forEach(function(t){ t.addEventListener('click',function(){ t.classList.toggle('done'); refresh();
        if(sp.querySelectorAll('.test.done').length===tests.length) toast('🎉 نلتَ نجمةَ اليقين! — Star of Certainty earned!'); }); });
    });
    var cn=root.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  }

  /* ───────── navigation + scaling ───────── */
  function show(idx){
    idx=Math.max(0,Math.min(TOTAL-1,idx)); current=idx;
    var spreads=document.querySelectorAll('.spread');
    spreads.forEach(function(sp,i){ sp.classList.toggle('active', i===idx); });
    try{ localStorage.setItem('questBookSpread',String(idx)); }catch(e){}
    var s=SPREADS[idx];
    document.getElementById('pageno').textContent=(idx+1)+' / '+TOTAL+'  —  '+(s.label?s.label.ar:'');
    document.getElementById('navPrev').disabled=idx<=0;
    document.getElementById('navNext').disabled=idx>=TOTAL-1;
    var jump=document.getElementById('jump'); if(jump) jump.value=String(idx);
    fit();
  }
  function fit(){
    var sp=document.querySelector('.spread.active'); if(!sp) return;
    sp.style.transform='none';
    var w=sp.offsetWidth, h=sp.offsetHeight;
    var availW=window.innerWidth-140, availH=window.innerHeight-70;
    var scale=Math.min(availW/w, availH/h, 1);
    sp.style.transform='scale('+scale+')';
    sp.style.marginBottom=(h*scale - h)+'px';
  }

  var toastTimer;
  function toast(msg){ var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(function(){t.classList.remove('show');},2200); }

  /* measure every page at its natural height and set a per-page zoom so each
     page fits exactly ONE A4 portrait sheet (printable area at 8mm margins). */
  function preparePrint(){
    var A4W=733, A4H=1058;            // px of printable A4 portrait area @96dpi, 8mm margins
    document.body.classList.add('measuring');
    document.querySelectorAll('.spread').forEach(function(sp){ sp.style.transform='none'; });
    document.querySelectorAll('.page').forEach(function(p){
      p.style.removeProperty('--pz');
      var w=p.offsetWidth||760, h=p.offsetHeight||1180;
      var z=Math.min(A4W/w, A4H/h, 1);
      p.style.setProperty('--pz', z.toFixed(4));
    });
    document.body.classList.remove('measuring');
  }

  window.addEventListener('DOMContentLoaded',function(){
    if(!QUESTS.length){ document.getElementById('book').innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل بيانات المحطات.</p>'; return; }
    buildAll();
    var jump=document.getElementById('jump');
    jump.innerHTML=SPREADS.map(function(s,i){
      var t=s.kind==='cover'?'📕 الغلاف والأبطال':s.kind==='cert'?'🏅 الشهادة':(s.q.num+'. '+s.q.title.ar);
      return '<option value="'+i+'">'+t+'</option>';
    }).join('');
    jump.addEventListener('change',function(){ show(parseInt(jump.value,10)); });
    document.getElementById('navPrev').addEventListener('click',function(){ show(current-1); });
    document.getElementById('navNext').addEventListener('click',function(){ show(current+1); });
    document.addEventListener('keydown',function(e){
      if(e.target.isContentEditable||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
      if(e.key==='ArrowLeft'){ e.preventDefault(); show(current+1); }
      else if(e.key==='ArrowRight'){ e.preventDefault(); show(current-1); }
    });
    window.addEventListener('resize',fit);
    window.addEventListener('beforeprint',preparePrint);
    window.addEventListener('afterprint',function(){
      document.querySelectorAll('.page').forEach(function(p){ p.style.removeProperty('--pz'); });
      show(current);
    });
    var saved=parseInt(localStorage.getItem('questBookSpread'),10);
    show(isNaN(saved)?0:saved);
  });

  window.QuestBook={ go:function(i){show(i);}, count:function(){return TOTAL;} };
})();
