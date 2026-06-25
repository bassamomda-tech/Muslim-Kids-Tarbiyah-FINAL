/* district-book.js — publish-ready «حيّنا الصغير» book (Akhlaq or Adab).
   Reads window.RIHLA={key,ids,titleAr,...}. Cover + (each house × 3 pages:
   Story · Activity · Coloring) + certificate, from window.HOUSES. Clean
   publish layout, 1 page per A4. Reuses yaqeen-book.css. */
(function () {
  'use strict';
  var R = window.DistrictCore;
  var C = window.RIHLA || {};
  var COL=['#1565C0','#1F8A5B','#8E44AD','#C0392B','#E67E22','#117A8B','#16A085','#D4A017'];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(it,col,ic,kt){
    return '<div class="pg-head" style="--acc:'+col+'"><div class="pg-num" style="--acc:'+col+'">'+it.order+'</div>'+
      '<div class="pg-titles"><span class="ar">'+it.nameAr+'</span><span class="en lat">'+it.nameEn+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }
  function firstStory(h){ return (h.stories&&h.stories[0])?h.stories[0]:null; }

  function buildStory(it,col){
    var h=it.data, k=h.knowledge||{}, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var st=firstStory(h);
    var pages=(st&&st.pages?st.pages:[]).slice(0,2).map(function(p){
      return '<p style="margin:0 0 9px">'+p.text.ar+'<span class="en lat" style="display:block;font-size:.82rem;color:var(--ink-soft);margin-top:3px">'+p.text.en+'</span></p>';
    }).join('');
    var benefits=(k.benefits||[]).slice(0,3).map(function(b){return '<li>'+b.ar+'<span class="en lat">'+b.en+'</span></li>';}).join('');
    leaf.innerHTML=head(it,col,'📖','قصة Story')+
      (h.tagline?'<div class="logic-key" style="--acc:'+col+';margin-top:0;margin-bottom:14px">💫 '+h.tagline.ar+'<span class="en lat">'+h.tagline.en+'</span></div>':'')+
      slot(R.sid(it,'hero'),300,'ضع الرسمة هنا — Drop art')+
      (st?'<div style="font-weight:900;color:'+col+';margin-bottom:6px">'+st.title.ar+'<span class="en lat" style="font-size:.78rem;color:var(--ink-soft)">'+st.title.en+'</span></div>':'')+
      (pages?'<div class="story">'+pages+'</div>':'')+
      (benefits?'<div class="match" style="margin-top:8px"><h4>🌟 ثمراتُه <span class="en lat">Its fruits</span></h4><ul style="margin:0;padding-inline-start:18px">'+benefits+'</ul></div>':'');
    return leaf;
  }

  function buildActivity(it,col,i){
    var h=it.data, k=h.knowledge||{}, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var puz=R.puzFor(it,i);
    var forms=(k.forms||[]).slice(0,4).map(function(f){
      return '<div class="acard exp" style="margin:0 0 9px"><span class="ac-ic">'+(f.icon||'✨')+'</span><div class="ac-mid"><b>'+f.title.ar+'</b><div class="body" style="font-size:.84rem"><span class="ar">'+f.body.ar+'</span><span class="en lat">'+f.body.en+'</span></div></div></div>';
    }).join('');
    var st=firstStory(h), moral=st&&st.moral?st.moral:null;
    leaf.innerHTML=head(it,col,'🎯','نشاط Activity')+
      (forms?'<div style="margin-bottom:12px">'+forms+'</div>':'')+
      (moral?'<div class="acard fam"><span class="ac-ic">🎯</span><div class="ac-mid"><b>الدرسُ المستفاد — The lesson</b><div class="body"><span class="ar">'+moral.ar+'</span><span class="en lat">'+moral.en+'</span></div></div></div>':'')+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(it,'puz'),250,'ضع اللغز هنا — Drop puzzle art');
    return leaf;
  }

  function buildColoring(it,col){
    var h=it.data, k=h.knowledge||{}, leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',col);
    var v=(k.verses&&k.verses[0])?k.verses[0]:null;
    var verseBlock=v?'<div class="reflect" style="--acc:'+col+'"><div class="ayah" style="color:'+col+'">'+v.text.ar+'</div>'+(v.ref?'<div class="ref">'+v.ref.ar+' · '+v.ref.en+'</div>':'')+'</div>':'';
    var hd=(k.hadiths&&k.hadiths[0])?k.hadiths[0]:null;
    var hadBlock=hd?'<div class="dua-trace"><span class="dt-ic">🌿</span><div class="dt-mid"><div class="dt-lbl">حديثٌ شريف — A hadith</div><div class="dt-ar" style="font-size:1rem;color:var(--ink)">'+R.clean(hd.text.ar).slice(0,90)+'</div></div></div>':'';
    var st=firstStory(h), badge=st&&st.badge?st.badge:{icon:'🏅',title:{ar:it.shortAr,en:it.shortEn}};
    leaf.innerHTML=head(it,col,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(it,'color'),390,'ضع رسمة التلوين — Drop line-art')+
      verseBlock+hadBlock+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+col+'">'+(badge.icon||'🏅')+'</div>'+
        '<div class="bc-tx"><b>وسامُ الخُلُق — Manner medal</b><span class="en lat">'+(badge.title?badge.title.en:'')+'</span>'+
        '<small>لوِّن الوسام «'+(badge.title?badge.title.ar:it.shortAr)+'» — colour it in!</small></div></div>';
    return leaf;
  }

  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'حيّنا الصغير · OUR LITTLE DISTRICT')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(C.key),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(ITEMS){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ITEMS.map(function(it){ return '<div class="cert-badge" title="'+esc(it.shortAr)+'">🏅</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">تعلَّمَ أخلاقَ الحيِّ وآدابَه، وعزمَ على العملِ بها.<br><span class="en lat" style="font-size:.82rem">learned the district\'s manners and resolved to live by them.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    var ITEMS=R.items(C);
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل البيوت.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ITEMS.forEach(function(it,i){ var col=(window.HOUSE_BY_SLUG[it.slug]||{}).color||COL[i%COL.length]; nodes.push(buildStory(it,col),buildActivity(it,col,i),buildColoring(it,col)); });
    nodes.push(buildCert(ITEMS));
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
