/* ════════════════════════════════════════════════════════════════
   oasis-book.js — publish-ready storybook renderer for any واحة العبادة
   journey. Reads window.RIHLA = {key, stations, titleAr, titleEn,
   kicker, subAr, subEn, certAr, certEn}. Builds cover + (N stations ×
   3 pages: Story · Activity · Coloring) + certificate. Clean publish
   layout (no prompts), 1 page per A4. Reuses yaqeen-book.css classes.
   Maps the ibada schema: simile · teach · evidence · flip · action · key.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var C = window.RIHLA || {};
  var ST = C.stations || [];
  var KEY = C.key || 'oasis';
  var R = window.OasisCore;

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(st,ic,kt){
    var col=st.color||C.color||'#117A8B';
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+st.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+st.title.ar+'</span><span class="en lat">'+st.title.en+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* page 1 · STORY */
  function buildStory(st){
    var col=st.color||'#117A8B';
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    leaf.innerHTML=head(st,'📖','قصة Story')+
      (st.simile?'<div class="logic-key" style="--acc:'+col+';margin-top:0;margin-bottom:14px">💫 '+st.simile.ar+'<span class="en lat">'+st.simile.en+'</span></div>':'')+
      slot(R.sid(KEY,st,'hero'),320,'ضع الرسمة هنا — Drop art')+
      '<div class="story"><span class="ar">'+st.teach.ar+'</span><span class="en lat">'+st.teach.en+'</span></div>'+
      (st.key?'<div class="logic-key" style="--acc:'+col+'">🔑 '+st.key.ar+'<span class="en lat">'+st.key.en+'</span></div>':'');
    return leaf;
  }

  /* page 2 · ACTIVITY */
  function buildActivity(st){
    var col=st.color||'#117A8B';
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(st);
    var f=st.flip||{claim:{ar:'',en:''},bust:{ar:'',en:''}};
    leaf.innerHTML=head(st,'🎯','نشاط Activity')+
      '<div class="flip"><div class="flip-face flip-front"><span class="flip-tag">🤨 يَظُنُّ بعضُهم — Some think</span>'+
        '<span class="flip-txt"><span class="ar">'+f.claim.ar+'</span></span><span class="flip-hint">اضغط للحقيقة — tap for the truth ↻</span></div>'+
        '<div class="flip-face flip-back"><span class="flip-tag">✅ الحقيقة — The truth</span>'+
        '<span class="flip-txt"><span class="ar">'+f.bust.ar+'</span><span class="en lat">'+f.bust.en+'</span></span></div></div>'+
      (st.action?'<div class="acard fam"><span class="ac-ic">🏅</span><div class="ac-mid"><b>مهمّةُ اليوم — Today\'s mission</b>'+
        '<div class="body"><span class="ar">'+st.action.ar+'</span><span class="en lat">'+st.action.en+'</span></div></div></div>':'')+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(KEY,st,'puz'),260,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  /* page 3 · COLORING */
  function buildColoring(st){
    var col=st.color||'#117A8B';
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var ev=st.evidence||null, evBlock='';
    if(ev){
      var txt = typeof ev.text==='string' ? ev.text : (ev.text? ev.text.ar : '');
      var refObj = ev.ref || ev.source || {ar:'',en:''};
      var refLine = (refObj.ar||'')+(refObj.en?(' · '+refObj.en):'');
      var exp = ev.explain ? ('<div class="explain"><span class="ar">'+ev.explain.ar+'</span><span class="en lat">'+ev.explain.en+'</span></div>') : '';
      evBlock='<div class="reflect"><div class="ayah">'+txt+'</div>'+
        (refLine?'<div class="ref">'+refLine+'</div>':'')+exp+'</div>';
    }
    leaf.innerHTML=head(st,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(KEY,st,'color'),420,'ضع رسمة التلوين — Drop line-art')+
      evBlock+
      (st.key?'<div class="dua-trace"><span class="dt-ic">🔑</span><div class="dt-mid">'+
        '<div class="dt-lbl">خُلاصةُ المحطة — The takeaway</div>'+
        '<div class="dt-ar" style="color:'+col+';opacity:.9;letter-spacing:0">'+st.key.ar+'</div><div class="dt-en">'+st.key.en+'</div></div></div>':'')+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+col+'">'+(st.icon||C.icon||'⭐')+'</div>'+
        '<div class="bc-tx"><b>وسامُ المحطة — Station sticker</b>'+
        '<small>لوِّن الرمزَ بعدَ إتمامِ المحطة — colour it in!</small></div></div>';
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'واحة العبادة · WORSHIP OASIS')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(KEY),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">أتمَّ رحلةَ '+C.titleAr+' كاملةً، وتعلَّمَ كلَّ محطّاتِها.<br><span class="en lat" style="font-size:.82rem">completed the '+C.titleEn+' journey and learned all its stations.</span></div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    if(!ST.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل بيانات الرحلة.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ST.forEach(function(st){ nodes.push(buildStory(st),buildActivity(st),buildColoring(st)); });
    nodes.push(buildCert());
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
