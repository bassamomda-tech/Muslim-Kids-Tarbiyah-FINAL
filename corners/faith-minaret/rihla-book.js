/* ════════════════════════════════════════════════════════════════
   rihla-book.js — generic publish-ready storybook renderer for any
   منارة العقيدة rihla journey. Reads window.RIHLA = {key, stations,
   titleAr, titleEn, kicker, subAr, subEn, certAr, certEn, coverPrompt}.
   Builds: cover + (N stations × 3 pages: Story · Activity · Coloring)
   + certificate. Clean publish layout (no prompts), 1 page per A4.
   Uses RihlaCore for the canonical slot ids. Reuses yaqeen-book.css.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var C = window.RIHLA || {};
  var ST = C.stations || [];
  var KEY = C.key || 'rihla';
  var R = window.RihlaCore;

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(st,ic,kt){
    return '<div class="pg-head" style="--acc:'+st.color+'"><div class="pg-num" style="--acc:'+st.color+'">'+st.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+st.title.ar+'</span><span class="en lat">'+st.title.en+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }
  function proofOf(st){ return st.proof || st.logicKey || (st.myth&&st.myth.bust) || {ar:'',en:''}; }
  function conceptBlock(st){
    var c = st.nameOfAllah || st.card; if(!c||!c.name) return '';
    var isName = !!st.nameOfAllah;
    var lbl = isName ? 'مِن أسماء الله — A Name of Allah' : 'بطاقةُ المعرفة — Key idea';
    return '<div class="name-ribbon"><span class="nr-ic">'+(isName?'🌟':'💡')+'</span><div><div class="nr-lbl">'+lbl+'</div>'+
      '<div class="nr-name">'+c.name.ar+'<span class="en lat">'+c.name.en+'</span></div>'+
      '<div class="nr-mean">'+(c.meaning?c.meaning.ar:'')+'</div></div></div>';
  }

  /* ── page 1 · STORY ── */
  function buildStory(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var key=proofOf(st);
    leaf.innerHTML=head(st,'📖','قصة Story')+
      slot(R.sid(KEY,st,'hero'),320,'ضع الرسمة هنا — Drop art')+
      '<div class="story"><span class="ar">'+st.narration.ar+'</span><span class="en lat">'+st.narration.en+'</span></div>'+
      (key.ar?'<div class="logic-key" style="--acc:'+st.color+'">🔑 '+key.ar+'<span class="en lat">'+key.en+'</span></div>':'')+
      conceptBlock(st);
    return leaf;
  }

  /* ── page 2 · ACTIVITY ── */
  function buildActivity(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var puz=R.puzFor(st);
    var tools=shuffle(st.match.pairs.map(function(p,i){return {i:i,t:p.tool};}));
    var jobs=shuffle(st.match.pairs.map(function(p,i){return {i:i,t:p.job};}));
    function col(arr,side){ return arr.map(function(o){ return '<button class="mtile" data-key="'+o.i+'" data-side="'+side+'"><span class="ar">'+o.t.ar+'</span><span class="en lat">'+o.t.en+'</span></button>'; }).join(''); }
    var doubt = st.shubha || (st.myth&&st.myth.claim) || {ar:'',en:''};
    var truth = (st.myth&&st.myth.bust) || proofOf(st);
    var matchBlock = (st.match&&st.match.pairs) ?
      '<div class="match"><h4>🧩 '+st.match.title.ar+' <span class="en lat">'+st.match.title.en+'</span></h4>'+
        '<div class="match-cols"><div class="match-col">'+col(tools,'a')+'</div><div class="match-col">'+col(jobs,'b')+'</div></div>'+
        '<div class="match-done">🎉 أحسنت! — Great, all matched!</div></div>' : '';

    leaf.innerHTML=head(st,'🎯','نشاط Activity')+
      '<div class="flip"><div class="flip-face flip-front"><span class="flip-tag">🤨 شُبهة — A doubt</span>'+
        '<span class="flip-txt"><span class="ar">'+doubt.ar+'</span></span><span class="flip-hint">اضغط للحقيقة — tap for the truth ↻</span></div>'+
        '<div class="flip-face flip-back"><span class="flip-tag">✅ الحقيقة — The truth</span>'+
        '<span class="flip-txt"><span class="ar">'+truth.ar+'</span><span class="en lat">'+truth.en+'</span></span></div></div>'+
      (st.logic?'<div class="acard exp"><span class="ac-ic">💡</span><div class="ac-mid"><b>الدليل — The reasoning</b>'+
        '<div class="body"><span class="ar">'+st.logic.ar+'</span><span class="en lat">'+st.logic.en+'</span></div></div></div>':'')+
      matchBlock+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600">'+puz.en+'</span></div>'+
      slot(R.sid(KEY,st,'puz'),260,'ضع اللغز هنا — Drop puzzle art')+
      (st.mission?'<div class="acard fam"><span class="ac-ic">🎯</span><div class="ac-mid"><b>مهمّةُ المحطة — Station mission</b>'+
        '<div class="body"><span class="ar">'+st.mission.ar+'</span><span class="en lat">'+st.mission.en+'</span></div></div></div>':'');
    return leaf;
  }

  /* ── page 3 · COLORING ── */
  function buildColoring(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var b=st.badge||{icon:'⭐',title:{ar:'',en:''}};
    var refBlock = st.reflection ?
      '<div class="reflect"><div class="ayah">'+st.reflection.ayah+'</div>'+
        '<div class="ref">'+st.reflection.ref.ar+' · '+st.reflection.ref.en+'</div>'+
        '<div class="explain"><span class="ar">'+st.reflection.explain.ar+'</span><span class="en lat">'+st.reflection.explain.en+'</span></div></div>' : '';
    var duaBlock = st.dua ?
      '<div class="dua-trace"><span class="dt-ic">🤲</span><div class="dt-mid">'+
        '<div class="dt-lbl">ادْعُ وتتبَّع الحروف — Trace the du\'a</div>'+
        '<div class="dt-ar">'+st.dua.ar+'</div><div class="dt-en">'+st.dua.en+'</div></div></div>' : '';
    leaf.innerHTML=head(st,'🖍️','تلوّن وتأمّل Colour')+
      slot(R.sid(KEY,st,'color'),420,'ضع رسمة التلوين — Drop line-art')+
      refBlock+duaBlock+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+st.color+'">'+b.icon+'</div>'+
        '<div class="bc-tx"><b>وسامك — Your badge</b><span class="en lat">'+b.title.en+'</span>'+
        '<small>لوِّن الوسام «'+b.title.ar+'» — colour it in!</small></div></div>';
    return leaf;
  }

  /* ── cover & certificate ── */
  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(C.kicker||'منارة العقيدة · FAITH MINARET')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(R.coverSid(KEY),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ST.map(function(s){ var b=s.badge||{icon:'⭐'}; return '<div class="cert-badge" title="'+esc((b.title&&b.title.ar)||'')+'">'+b.icon+'</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">أتمَّ هذه الرحلةَ بنجاح، وتعلَّمَ كلَّ محطّاتِها.<br><span class="en lat" style="font-size:.82rem">completed this journey and learned all its stations.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  /* ── build all (publish: flat, clean, printable) ── */
  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    if(!ST.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل بيانات الرحلة.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ST.forEach(function(st){ nodes.push(buildStory(st),buildActivity(st),buildColoring(st)); });
    nodes.push(buildCert());
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    // certificate name: clear placeholder on focus
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
