/* ashara-book.js — renders «العشرة المبشّرون بالجنّة» spreads from window.ASHARA */
(function () {
  'use strict';
  var A = window.ASHARA; if (!A) return;
  var H = A.HEROES;
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function chrome(n){ return '<div class="wave-top"></div><div class="shield">🛡️</div>'+
    '<div class="brand"><span class="bb">🏰</span><span>حصنُ الأبطال</span></div>'+
    (n?'<div class="pageno">'+n+'</div>':''); }
  function nano(p){ return '<div class="nano"><div class="nano-bar"><span>🍌</span><span class="nb-t">وصفُ الرسمة — Nano Banana</span>'+
    '<button class="nb-c">نسخ</button><span class="chev">▾</span></div><div class="nano-body">'+esc(p)+'</div></div>'; }
  function slot(s,h,ph){ return '<image-slot id="'+s+'" style="width:100%;height:'+(h||300)+'px" placeholder="'+esc(ph)+'"></image-slot>'; }

  var sheets = [];

  /* cover */
  sheets.push('<section class="sheet"><div class="pad cover">'+
    '<div class="pub">🏰 حصنُ الأبطال · مشروع تربية الطفل المسلم</div>'+
    '<h1>العَشَرةُ<br>المُبشَّرونَ بالجنّة</h1>'+
    '<div class="ct-sub">عَشَرةُ أبطالٍ بشّرَهمُ النبيُّ ﷺ بالجنّة</div>'+
    '<div class="cover-scene">'+slot('sc-cover',300,'مشهد الغلاف — Drop cover art')+'</div>'+
    '<div class="ct-note">في كلِّ بطلٍ صفةٌ نتعلّمُها: الصِّدقُ والعدلُ والحياءُ والشجاعةُ والفداءُ والكرمُ والأمانة… رحلةٌ في سِيَرِ خيرِ الرجالِ بعدَ الأنبياء.</div>'+
    '<div class="horses">🐎🐎🐎</div>'+
    '</div></section>');

  /* intro */
  sheets.push('<section class="sheet"><div class="pad"><div class="intro">'+
    '<h2>مَن هُمُ العَشَرة؟</h2>'+
    '<p>هم عشرةٌ من أصحابِ النبيِّ ﷺ، جمعَهمُ النبيُّ في حديثٍ واحدٍ وبشّرَهم بالجنّةِ وهم أحياءٌ يمشونَ على الأرض. كانوا قدوةً في الإيمانِ والعملِ والخُلُق، فسبقوا إلى الإسلام، وبذلوا أموالَهم وأرواحَهم في سبيلِ الله.</p>'+
    '<div class="ayah amiri">﴿وَالسَّابِقُونَ الأَوَّلُونَ مِنَ المُهَاجِرِينَ وَالأَنصَارِ… رَضِيَ اللهُ عَنْهُم وَرَضُوا عَنْهُ﴾</div>'+
    '<p>في هذا الكتابِ نلتقي بكلِّ بطلٍ منهم، فنعرفُ صفتَه التي اشتهرَ بها، وقصّتَه، ومواقفَه العظيمة، ونتعلّمُ منه درسًا نعيشُه في حياتِنا.</p>'+
    '<div class="roster">'+H.map(function(h,i){return '<div class="ritem"><span class="rn">'+(i+1)+'</span><div><b>'+h.heroTitle+'</b><span>'+h.name+'</span></div></div>';}).join('')+'</div>'+
    '</div></div></section>');

  /* hero spreads — 2 sheets each: story + سيرة card */
  var pg = 1;
  H.forEach(function(h){
    var storyHtml = h.story.map(function(s){return '<h3>'+s.h+'</h3><p>'+s.p+'</p>';}).join('');
    sheets.push('<section class="sheet" style="--terra:'+h.color+'">'+chrome(pg++)+'<div class="pad">'+
      '<div class="hero-banner"><div class="hero-tt">'+h.heroTitle+'</div>'+
      '<div class="hero-name amiri">'+h.name+' <span style="font-size:1rem">رضي الله عنه</span></div>'+
      '<div class="hero-laqab">'+h.laqab+'</div></div>'+
      '<div class="scene">'+slot(h.heroScene.slot,300,h.heroScene.label+' — Drop art')+nano(h.heroScene.prompt)+'</div>'+
      '<div class="story">'+storyHtml+'</div>'+
      '<div class="pull"><span class="deco">❝</span><div class="q amiri">'+h.quote+'</div></div>'+
      '</div></section>');

    var C = h.card;
    var cells = [
      ['🌳','الاسمُ والنَّسب',C.nasab],['🌙','الإسلام',C.islam],
      ['⭐','أعظمُ المواقف',C.mawqif],['🛡️','الجِهاد',C.jihad],
      ['💎','صفتُه البارزة',C.sifa],['🌿','من أهلِ الجنّة',C.jannah]
    ].map(function(c){return '<div class="scell"><span class="stt"><span class="sic">'+c[0]+'</span>'+c[1]+'</span><p>'+c[2]+'</p></div>';}).join('');
    sheets.push('<section class="sheet" style="--terra:'+h.color+'">'+chrome(pg++)+'<div class="pad">'+
      '<div class="siyar"><h2>سِيرةُ البطل</h2><div class="sub">'+h.heroTitle+' · '+h.name+' رضي الله عنه</div>'+
      '<div class="siyar-grid">'+cells+'</div></div>'+
      '<div class="lessons"><h4>🌟 ماذا نتعلَّمُ منه؟</h4><ul>'+h.lessons.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul></div>'+
      '</div></section>');
  });

  /* closing */
  sheets.push('<section class="sheet"><div class="pad closing">'+chrome('')+
    '<div class="seal">🏅</div><h2>عَشَرةُ أبطالٍ… عَشَرةُ دروس</h2>'+
    '<div class="ct-note" style="color:var(--ink2);max-width:540px;line-height:1.9">حفِظْنا أسماءَهم، وعرَفْنا صفاتِهم، فلنقتدِ بهم في الصِّدقِ والعدلِ والكرمِ والشجاعةِ والأمانة. اللهمّ اجعَلْنا على خُطاهم.</div>'+
    '<div class="grid10">'+H.map(function(h){return '<div class="g10"><b>'+h.heroTitle+'</b><span>'+h.name+'</span></div>';}).join('')+'</div>'+
    '</div></section>');

  document.getElementById('book').innerHTML = sheets.join('');

  /* nano interactivity */
  document.querySelectorAll('.nano-bar').forEach(function(bar){
    bar.addEventListener('click',function(e){ if(e.target.closest('.nb-c'))return; bar.parentElement.classList.toggle('open'); });
  });
  document.querySelectorAll('.nb-c').forEach(function(btn){
    btn.addEventListener('click',function(e){ e.stopPropagation();
      var body=btn.closest('.nano').querySelector('.nano-body');
      var t=body.textContent;
      (navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t):Promise.resolve()).then(function(){
        btn.classList.add('done');var o=btn.textContent;btn.textContent='✓ تم';setTimeout(function(){btn.classList.remove('done');btn.textContent=o;},1400);
      });
    });
  });
})();
