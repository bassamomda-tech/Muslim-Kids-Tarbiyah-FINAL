/* ════════════════════════════════════════════════════════════════
   chapter-book.js — publish-ready book for any «حصن الأبطال» chapter set.
   Reads window.RIHLA = {key, ids, titleAr, titleEn, kicker, subAr,
   subEn, certAr, certEn, coverPrompt}. Cover + (each chapter × 3 pages:
   Story · Activity · Coloring) + certificate, from window.HISN.chapters.
   Clean publish layout (no prompts), 1 page per A4. Reuses yaqeen-book.css.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var R = window.ChapterCore;
  var C = window.RIHLA || {};

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(it,col,ic,kt){
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+it.order+'</div>'+
      '<div class="pg-titles"><span class="ar">'+it.name.ar+'</span><span class="en lat">'+it.name.en+(it.tag?' · '+it.tag.en:'')+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* page 1 · STORY (who + facts + story) */
  function buildStory(it,col){
    var d=it.data, k=d.knowledge||{}, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var facts=(k.facts||[]).slice(0,4).map(function(f){return '<li>'+f.ar+'<span class="en lat">'+f.en+'</span></li>';}).join('');
    var story=(d.story&&d.story[0]&&d.story[0].pages?d.story[0].pages:[]).map(function(p){
      return '<p style="margin:0 0 9px">'+p.text.ar+'<span class="en lat" style="display:block;font-size:.82rem;color:var(--ink-soft);margin-top:3px">'+p.text.en+'</span></p>';
    }).join('');
    leaf.innerHTML=head(it,col,'📖','قصة Story')+
      (k.who?'<div class="logic-key" style="--acc:'+col+';margin-top:0;margin-bottom:14px;text-align:right">📜 '+R.clean(k.who.ar).slice(0,200)+'…</div>':'')+
      slot(R.sid(it,'hero'),300,'ضع الرسمة هنا — Drop art')+
      (story?'<div class="story">'+story+'</div>':'')+
      (facts?'<div class="match" style="margin-top:8px"><h4>⭐ هل تعلم؟ <span class="en lat">Did you know?</span></h4><ul style="margin:0;padding-inline-start:18px">'+facts+'</ul></div>':'');
    return leaf;
  }

  /* page 2 · ACTIVITY (traits + lessons + puzzle) */
  function buildActivity(it,col,i){
    var d=it.data, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(it,i);
    var traits=(d.traits||[]).map(function(t){return '<span class="mtile" style="cursor:default;flex:0 0 auto">'+t.ar+'<span class="en lat">'+t.en+'</span></span>';}).join('');
    var lessons=(d.lessons||[]).slice(0,4).map(function(l){
      return '<div class="acard exp" style="margin:0 0 9px"><span class="ac-ic">'+(l.icon||'🌟')+'</span><div class="ac-mid"><b>'+l.title.ar+'</b><div class="body" style="font-size:.84rem"><span class="ar">'+l.body.ar+'</span><span class="en lat">'+l.body.en+'</span></div></div></div>';
    }).join('');
    leaf.innerHTML=head(it,col,'🎯','نشاط Activity')+
      (traits?'<div class="match" style="margin-bottom:12px"><h4>✨ صفاتُه <span class="en lat">Virtues</span></h4><div style="display:flex;flex-wrap:wrap;gap:8px">'+traits+'</div></div>':'')+
      (lessons?'<div style="margin-bottom:12px">'+lessons+'</div>':'')+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(it,'puz'),250,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  /* page 3 · COLORING (memorize ayah + dua + medal) */
  function buildColoring(it,col){
    var d=it.data, m=d.memorize||{}, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var ayahBlock = m.ayah ? '<div class="reflect" style="--acc:'+col+'"><div class="ayah" style="color:'+col+'">'+m.ayah.ar+'</div>'+
      (m.ayah.ref?'<div class="ref">'+m.ayah.ref.ar+' · '+m.ayah.ref.en+'</div>':'')+'</div>' : '';
    var duaBlock = m.dua ? '<div class="dua-trace"><span class="dt-ic">🤲</span><div class="dt-mid">'+
      '<div class="dt-lbl">ادْعُ وتتبَّع الحروف — Trace the du\'a</div>'+
      '<div class="dt-ar">'+m.dua.ar+'</div></div></div>' : '';
    var medal=(d.treasures&&d.treasures.medal)?d.treasures.medal:null;
    leaf.innerHTML=head(it,col,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(it,'color'),400,'ضع رسمة التلوين — Drop line-art')+
      ayahBlock+duaBlock+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+col+'">🏅</div>'+
        '<div class="bc-tx"><b>وسامُ البطل — Hero medal</b>'+(medal?'<span class="en lat">'+(medal.en||'')+'</span>':'')+
        '<small>لوِّن الوسام'+(medal?' «'+medal.ar+'»':'')+' — colour it in!</small></div></div>';
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'حصن الأبطال · HEROES FORTRESS')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(C.key),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(ITEMS){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ITEMS.map(function(it){ return '<div class="cert-badge" title="'+esc(it.name.ar)+'">🏅</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">أتمَّ هذا الكتابَ، وتعلَّمَ من سِيَرِ أبطالِه ودروسِهم.<br><span class="en lat" style="font-size:.82rem">completed this book and learned from its heroes and their lessons.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    var ITEMS=R.items(C);
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل الفصول.</p>'; return; }
    document.body.classList.add('publish');
    var COL=['#1F8A5B','#117A8B','#8E44AD','#C0392B','#E67E22','#2980B9','#16A085','#D4A017'];
    var nodes=[buildCover()];
    ITEMS.forEach(function(it,i){ var col=it.data.accent||COL[i%COL.length]; nodes.push(buildStory(it,col),buildActivity(it,col,i),buildColoring(it,col)); });
    nodes.push(buildCert(ITEMS));
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
