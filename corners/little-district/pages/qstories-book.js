/* ════════════════════════════════════════════════════════════════
   qstories-book.js — publish-ready «قصص القرآن» (Quran Stories) book.
   Builds cover + (each story × 3 pages: Story · Activity · Coloring)
   + certificate, from window.QS_INDEX + window.QSTORIES. Clean publish
   layout (no prompts), 1 page per A4. Reuses yaqeen-book.css classes.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var R = window.QSCore;
  var C = window.RIHLA || {};
  var COL = ['#1E8449','#117A8B','#8E44AD','#C0392B','#E67E22','#2980B9','#16A085','#D4A017'];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(it,col,ic,kt){
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+it.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+it.nameAr+'</span><span class="en lat">'+it.nameEn+' · '+it.surahEn+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* page 1 · STORY */
  function buildStory(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var storyHtml=(d.story&&d.story.pages?d.story.pages:[]).map(function(p){
      return '<p style="margin:0 0 10px"><span style="font-size:1.1rem">'+(p.emoji||'')+'</span> '+p.text.ar+'<span class="en lat" style="display:block;font-size:.82rem;color:var(--ink-soft);margin-top:3px">'+p.text.en+'</span></p>';
    }).join('');
    var figs=(d.figures||[]).map(function(f){
      return '<div class="mtile" style="cursor:default"><span style="font-size:1.3rem">'+f.emoji+'</span> '+f.name.ar+'<span class="en lat">'+f.role.ar+'</span></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'📖','قصة Story')+
      (d.tagline?'<div class="logic-key" style="--acc:'+col+';margin-top:0;margin-bottom:14px">📖 '+d.tagline.ar+'<span class="en lat">'+d.tagline.en+'</span></div>':'')+
      slot(R.sid(it,'hero'),310,'ضع رسمة القصة هنا — Drop art')+
      '<div class="story">'+storyHtml+'</div>'+
      (figs?'<div class="match" style="margin-top:8px"><h4>👥 شخصياتُ القصة <span class="en lat">Characters</span></h4><div style="display:flex;flex-wrap:wrap;gap:9px">'+figs+'</div></div>':'');
    return leaf;
  }

  /* page 2 · ACTIVITY (lessons + reflect + puzzle) */
  function buildActivity(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(it);
    var lessons=(d.lessons||[]).map(function(l){return '<li>'+l.ar+'<span class="en lat">'+l.en+'</span></li>';}).join('');
    var reflect=(d.reflect||[]).map(function(r){
      return '<div class="acard fam"><span class="ac-ic">💭</span><div class="ac-mid"><b>'+r.q.ar+'</b><div class="body"><span class="ar">'+r.a.ar+'</span><span class="en lat">'+r.a.en+'</span></div></div></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'🎯','نشاط Activity')+
      (lessons?'<div class="scroll lessons" style="background:rgba(0,0,0,.03);border:1.5px solid var(--paper-line);border-radius:14px;padding:12px 16px;margin-bottom:12px"><h4 style="margin:0 0 8px;color:'+col+';font-weight:900">🎓 ما تعلّمناه <span class="en lat" style="color:var(--ink-soft);font-size:.78rem">What we learned</span></h4><ul style="margin:0;padding-inline-start:18px">'+lessons+'</ul></div>':'')+
      reflect+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(it,'puz'),260,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  /* page 3 · COLORING (verse + recipe + treasures) */
  function buildColoring(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var v=(d.verses&&d.verses[0])?d.verses[0]:null;
    var verseBlock=v?'<div class="reflect"><div class="ayah">'+v.ar+'</div>'+
      '<div class="ref">'+(v.ref?v.ref.ar+' · '+v.ref.en:'')+'</div>'+
      (v.trans?'<div class="explain"><span class="ar">'+v.trans.ar+'</span><span class="en lat">'+v.trans.en+'</span></div>':'')+'</div>':'';
    var recipe='';
    if(d.magicMix&&d.magicMix.length){
      recipe='<div class="match" style="margin-top:4px"><h4>✨ '+(d.magicMixTitle?d.magicMixTitle.ar:'الخلاصة')+'</h4>'+
        '<div style="display:flex;flex-direction:column;gap:7px">'+d.magicMix.map(function(m){
          return '<div class="acard exp" style="margin:0;padding:9px 12px"><span class="ac-ic">'+m.icon+'</span><div class="ac-mid"><b>'+m.title.ar+'</b><div class="body" style="font-size:.84rem"><span class="ar">'+m.body.ar+'</span></div></div></div>';
        }).join('')+'</div></div>';
    }
    var treasures=(d.treasures||[]).map(function(t){
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;width:74px">'+
        '<div style="width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-size:1.3rem;background:'+(t.color||col)+';color:#fff">'+t.icon+'</div>'+
        '<span style="font-size:.64rem;font-weight:800;text-align:center;color:var(--ink)">'+t.title.ar+'</span></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(it,'color'),400,'ضع رسمة التلوين — Drop line-art')+
      verseBlock+recipe+
      (treasures?'<div style="margin-top:12px"><div class="puzzle-instr">🏅 كنوزُ القصة — لوِّنها! · Story treasures to colour</div><div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">'+treasures+'</div></div>':'');
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'بستان القرآن · QURAN GARDEN')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(ITEMS){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ITEMS.map(function(it){ return '<div class="cert-badge" title="'+esc(it.nameAr)+'">'+it.emoji+'</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">تدبَّرَ قصصَ القرآنِ الكريم، وتعلَّمَ منها العِبَرَ والحِكَم.<br><span class="en lat" style="font-size:.82rem">reflected on the stories of the Quran and learned their lessons.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    var ITEMS=R.items();
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل القصص.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ITEMS.forEach(function(it,i){ var col=COL[i%COL.length]; nodes.push(buildStory(it,col),buildActivity(it,col),buildColoring(it,col)); });
    nodes.push(buildCert(ITEMS));
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
