/* ════════════════════════════════════════════════════════════════
   sport-book.js — publish-ready storybook renderer for any
   «النادي الرياضي» journey (SPORT_JOURNEYS format).
   Reads window.SPORT_BOOK = { key } and renders SPORT_JOURNEYS[key]:
     cover + (N stations × 2 pages: Lesson · Colour & Live-it) + certificate.
   Reuses yaqeen-book.css. Slot ids use -cover/-hero/-color so
   book-art.js fills them. No external deps beyond the journey data.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var CFG = window.SPORT_BOOK || {};
  var J = (window.SPORT_JOURNEYS || {})[CFG.key] || {};
  var ST = J.stations || [];
  var KEY = J.id || CFG.key || 'sport';

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function sid(suf,st){ return 'slot-'+KEY+'-'+(st?st.id:'cover')+'-'+suf; }
  function slot(id,h,ph){ return '<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div></div>'; }
  function head(st,ic,kt){
    return '<div class="pg-head" style="--acc:'+st.color+'"><div class="pg-num" style="--acc:'+st.color+'">'+st.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+st.title.ar+'</span><span class="en lat">'+st.title.en+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* ── page 1 · LESSON ── */
  function buildLesson(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var ev=st.evidence||null;
    var evLbl = ev && ev.kind==='ayah' ? 'من القرآن — From the Qur’an' : 'الدليل — The evidence';
    leaf.innerHTML=head(st,'📖','درس Lesson')+
      slot(sid('hero',st),320,'ضع الرسمة هنا — Drop art')+
      (st.simile?'<div class="logic-key" style="--acc:'+st.color+'">💡 '+st.simile.ar+'<span class="en lat">'+st.simile.en+'</span></div>':'')+
      '<div class="story"><span class="ar">'+st.teach.ar+'</span><span class="en lat">'+st.teach.en+'</span></div>'+
      (ev?'<div class="reflect"><div class="ayah">'+ev.text.ar+'</div>'+
        '<div class="ref">'+evLbl+' · '+(ev.source?ev.source.ar:'')+(ev.source?' · '+ev.source.en:'')+'</div>'+
        (ev.text.en?'<div class="explain"><span class="en lat">'+ev.text.en+'</span></div>':'')+'</div>':'')+
      (st.key?'<div class="logic-key" style="--acc:'+st.color+'">🔑 '+st.key.ar+'<span class="en lat">'+st.key.en+'</span></div>':'');
    return leaf;
  }

  /* ── page 2 · COLOUR & LIVE-IT ── */
  function buildColour(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var flip=st.flip||null;
    var flipBlock = flip ?
      '<div class="flip"><div class="flip-face flip-front"><span class="flip-tag">🤨 شُبهة — A myth</span>'+
        '<span class="flip-txt"><span class="ar">'+flip.claim.ar+'</span></span><span class="flip-hint">اقلِبها للحقيقة — flip for the truth ↻</span></div>'+
        '<div class="flip-face flip-back"><span class="flip-tag">✅ الحقيقة — The truth</span>'+
        '<span class="flip-txt"><span class="ar">'+flip.bust.ar+'</span><span class="en lat">'+flip.bust.en+'</span></span></div></div>' : '';
    var actBlock = st.action ?
      '<div class="acard fam"><span class="ac-ic">🏅</span><div class="ac-mid"><b>مهمّةُ البطل — Hero mission</b>'+
        '<div class="body"><span class="ar">'+st.action.ar+'</span><span class="en lat">'+st.action.en+'</span></div></div></div>' : '';
    leaf.innerHTML=head(st,'🖍️','تلوّن وعِشها Colour')+
      flipBlock+
      slot(sid('color',st),420,'ضع رسمة التلوين — Drop line-art')+
      actBlock+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+st.color+'">'+(st.icon||'⭐')+'</div>'+
        '<div class="bc-tx"><b>وسامك — Your badge</b><span class="en lat">'+esc(st.title.en)+'</span>'+
        '<small>لوِّن وسامَ هذه المحطّة — colour it in!</small></div></div>';
    return leaf;
  }

  /* ── cover & certificate ── */
  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var sub=J.tagline||{ar:'',en:''};
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">'+(CFG.kicker||'النادي الرياضي · SPORTS CLUB')+'</div>'+
      '<h1 class="cover-title">'+J.title.ar+'<span class="en lat">'+J.title.en+'</span></h1>'+
      '<div style="width:62%;max-width:430px">'+slot(sid('cover'),280,'ضع رسمة الغلاف — Drop cover art')+'</div>'+
      '<div class="cover-sub">'+sub.ar+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+sub.en+'</span></div>'+
      '<span class="cover-badge">🏃 كتاب رحلةٍ وأنشطة · للأعمار ٦–١٢</span></div>';
    return leaf;
  }
  function buildCert(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var b=J.badge||{icon:'🏅',title:{ar:'',en:''}};
    var cs=(J.certificate&&J.certificate.statement)||{ar:'أتمَّ هذه الرحلةَ بنجاح، وتعلَّمَ كلَّ محطّاتِها.',en:'completed this journey and learned all its stations.'};
    var badges=ST.map(function(s){ return '<div class="cert-badge" title="'+esc(s.title.ar)+'">'+(s.icon||'⭐')+'</div>'; }).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">'+(b.icon||'🏅')+'</div>'+
      '<div class="cert-kick">شهادةُ إتمام — CERTIFICATE</div>'+
      '<h2 class="cert-title">'+((b.title&&b.title.ar)||J.title.ar)+'<span class="en lat">'+((b.title&&b.title.en)||J.title.en)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line"><span class="ar">'+cs.ar+'</span><br><span class="en lat" style="font-size:.82rem">'+cs.en+'</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  window.addEventListener('DOMContentLoaded',function(){
    var book=document.getElementById('book');
    if(!ST.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل بيانات الرحلة.</p>'; return; }
    document.body.classList.add('publish');
    var nodes=[buildCover()];
    ST.forEach(function(st){ nodes.push(buildLesson(st),buildColour(st)); });
    nodes.push(buildCert());
    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });
    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
