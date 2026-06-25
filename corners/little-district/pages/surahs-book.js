/* ════════════════════════════════════════════════════════════════
   surahs-book.js — publish-ready «بستان السور» (Short Surahs) book.
   Cover + (each surah × 3 pages: Surah · Activity · Coloring) +
   certificate, from window.SURAH_INDEX + window.SURAHS. Clean publish
   layout (no prompts), 1 page per A4. Reuses yaqeen-book.css classes.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var R = window.SurahsCore;
  var C = window.RIHLA || {};
  var COL = ['#D4A017','#1E8449','#117A8B','#8E44AD','#C0392B','#E67E22','#2980B9','#16A085'];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(it,col,ic,kt){
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+it.order+'</div>'+
      '<div class="pg-titles"><span class="ar">'+it.nameAr+'</span><span class="en lat">'+it.nameEn+' · '+it.metaEn+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* page 1 · SURAH (verses + story) */
  function buildStory(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var versesHtml=(d.verses||[]).map(function(v){return v.ar;}).join(' ۝ ');
    var storyHtml=(d.story&&d.story.pages?d.story.pages:[]).map(function(p){
      return '<p style="margin:0 0 9px"><span style="font-size:1.1rem">'+(p.emoji||'')+'</span> '+p.text.ar+'<span class="en lat" style="display:block;font-size:.82rem;color:var(--ink-soft);margin-top:3px">'+p.text.en+'</span></p>';
    }).join('');
    leaf.innerHTML=head(it,col,'📖','السورة Surah')+
      (d.tagline?'<div class="logic-key" style="--acc:'+col+';margin-top:0;margin-bottom:14px">🌸 '+d.tagline.ar+'<span class="en lat">'+d.tagline.en+'</span></div>':'')+
      slot(R.sid(it,'hero'),300,'ضع رسمة السورة هنا — Drop art')+
      (versesHtml?'<div class="reflect" style="--acc:'+col+'"><div class="ayah" style="color:'+col+';font-size:1.5rem">'+versesHtml+'</div></div>':'')+
      (storyHtml?'<div class="story" style="margin-top:12px">'+storyHtml+'</div>':'');
    return leaf;
  }

  /* page 2 · ACTIVITY (tadabbur + action + puzzle) */
  function buildActivity(it,col,i){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(it,i);
    var tadabbur=(d.tadabbur||[]).map(function(r){
      return '<div class="acard fam"><span class="ac-ic">💭</span><div class="ac-mid"><b>'+r.q.ar+'</b><div class="body"><span class="ar">'+r.a.ar+'</span><span class="en lat">'+r.a.en+'</span></div></div></div>';
    }).join('');
    var act = d.action || d.lesson;
    leaf.innerHTML=head(it,col,'🎯','نشاط Activity')+
      tadabbur+
      (act?'<div class="acard exp"><span class="ac-ic">🏅</span><div class="ac-mid"><b>طبِّقها اليوم — Live it today</b><div class="body"><span class="ar">'+act.ar+'</span><span class="en lat">'+act.en+'</span></div></div></div>':'')+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(it,'puz'),260,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  /* page 3 · COLORING (practice + treasures) */
  function buildColoring(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var practice=(d.practice||[]).map(function(p){
      return '<div class="acard exp" style="margin:0 0 8px;padding:9px 12px"><span class="ac-ic">'+p.icon+'</span><div class="ac-mid"><b>'+p.title.ar+'</b><div class="body" style="font-size:.84rem"><span class="ar">'+p.body.ar+'</span></div></div></div>';
    }).join('');
    var treasures=(d.treasures||[]).map(function(t){
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;width:74px">'+
        '<div style="width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-size:1.3rem;background:'+(t.color||col)+';color:#fff">'+t.icon+'</div>'+
        '<span style="font-size:.62rem;font-weight:800;text-align:center;color:var(--ink)">'+t.title.ar+'</span></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(it,'color'),380,'ضع رسمة التلوين — Drop line-art')+
      (practice?'<div class="match" style="margin-bottom:12px"><h4>🌙 كيف أعيشُ السورة <span class="en lat">Living the surah</span></h4>'+practice+'</div>':'')+
      (treasures?'<div><div class="puzzle-instr">🏅 كنوزُ السورة — لوِّنها! · Surah treasures to colour</div><div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">'+treasures+'</div></div>':'');
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'بستان القرآن والسنة · QURAN GARDEN')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب سور وأنشطة · للأعمار ٦–١٢</span></div>';
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
      '<div class="cert-line">تدبَّرَ سورَ جزءِ عمَّ، وفَهِمَ معانيها، وعاشَ بها.<br><span class="en lat" style="font-size:.82rem">reflected on the short surahs, understood their meanings, and lived by them.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    var ITEMS=R.items();
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل السور.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ITEMS.forEach(function(it,i){ var col=COL[i%COL.length]; nodes.push(buildStory(it,col),buildActivity(it,col,i),buildColoring(it,col)); });
    nodes.push(buildCert(ITEMS));
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
