/* ════════════════════════════════════════════════════════════════
   hadith-book.js — publish-ready «الأربعون النووية» (40 Hadith) book.
   Cover + (each hadith × 3 pages: Hadith · Activity · Coloring) +
   certificate, from window.HADITH_INDEX + window.HADITHS. Clean publish
   layout (no prompts), 1 page per A4. Reuses yaqeen-book.css classes.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var R = window.HadithCore;
  var C = window.RIHLA || {};
  var COL = ['#117A8B','#1E8449','#8E44AD','#C0392B','#E67E22','#2980B9','#16A085','#D4A017'];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(it,col,ic,kt){
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+it.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+it.titleAr+'</span><span class="en lat">'+it.titleEn+' · '+it.themeEn+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* page 1 · HADITH (matn + explain) */
  function buildStory(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var explain=(d.explain||[]).map(function(p){
      return '<p style="margin:0 0 9px">'+p.ar+'<span class="en lat" style="display:block;font-size:.82rem;color:var(--ink-soft);margin-top:3px">'+p.en+'</span></p>';
    }).join('');
    leaf.innerHTML=head(it,col,'📖','الحديث Hadith')+
      slot(R.sid(it,'hero'),300,'ضع رسمة الحديث هنا — Drop art')+
      '<div class="reflect" style="--acc:'+col+'"><div class="ayah" style="color:'+col+'">'+d.matn.ar+'</div>'+
        '<div class="ref">'+(d.narrator?d.narrator.ar:'')+' · '+(d.source?d.source.ar:'')+'</div>'+
        '<div class="explain"><span class="en lat" style="margin-top:0">'+d.matn.en+'</span></div></div>'+
      '<div class="story" style="margin-top:12px">'+explain+'</div>';
    return leaf;
  }

  /* page 2 · ACTIVITY (benefits + apply + puzzle) */
  function buildActivity(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(it);
    var benefits=(d.benefits||[]).map(function(b){return '<li>'+b.ar+'<span class="en lat">'+b.en+'</span></li>';}).join('');
    leaf.innerHTML=head(it,col,'🎯','نشاط Activity')+
      (benefits?'<div class="scroll lessons" style="background:rgba(0,0,0,.03);border:1.5px solid var(--paper-line);border-radius:14px;padding:12px 16px;margin-bottom:12px"><h4 style="margin:0 0 8px;color:'+col+';font-weight:900">🌟 فوائدُ الحديث <span class="en lat" style="color:var(--ink-soft);font-size:.78rem">What it teaches me</span></h4><ul style="margin:0;padding-inline-start:18px">'+benefits+'</ul></div>':'')+
      (d.apply?'<div class="acard fam"><span class="ac-ic">🏅</span><div class="ac-mid"><b>طبِّقهُ اليوم — Live it today</b><div class="body"><span class="ar">'+d.apply.ar+'</span><span class="en lat">'+d.apply.en+'</span></div></div></div>':'')+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(it,'puz'),260,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  /* page 3 · COLORING (theme + treasures) */
  function buildColoring(it,col){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var treasures=(d.treasures||[]).map(function(t){
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;width:74px">'+
        '<div style="width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-size:1.3rem;background:'+(t.color||col)+';color:#fff">'+t.icon+'</div>'+
        '<span style="font-size:.64rem;font-weight:800;text-align:center;color:var(--ink)">'+t.title.ar+'</span></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(it,'color'),400,'ضع رسمة التلوين — Drop line-art')+
      '<div class="dua-trace"><span class="dt-ic">'+(it.emoji||'🌿')+'</span><div class="dt-mid">'+
        '<div class="dt-lbl">موضوعُ الحديث — Theme</div>'+
        '<div class="dt-ar" style="color:'+col+';opacity:.9;letter-spacing:0;font-size:1.2rem">'+it.themeAr+'</div><div class="dt-en">'+it.themeEn+'</div></div></div>'+
      (treasures?'<div style="margin-top:12px"><div class="puzzle-instr">🏅 كنوزُ الحديث — لوِّنها! · Hadith treasures to colour</div><div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">'+treasures+'</div></div>':'');
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'بستان القرآن والسنة · QURAN GARDEN')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب أحاديث وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(ITEMS){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ITEMS.map(function(it){ return '<div class="cert-badge" title="'+esc(it.titleAr)+'">'+it.emoji+'</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">تعلَّمَ أحاديثَ الأربعينَ النوويّة، وعَمِلَ بفوائدِها.<br><span class="en lat" style="font-size:.82rem">learned the Forty Nawawi hadiths and lived by their lessons.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    var ITEMS=R.items();
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل الأحاديث.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ITEMS.forEach(function(it,i){ var col=COL[i%COL.length]; nodes.push(buildStory(it,col),buildActivity(it,col),buildColoring(it,col)); });
    nodes.push(buildCert(ITEMS));
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
