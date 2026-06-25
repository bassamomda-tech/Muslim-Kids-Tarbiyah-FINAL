/* ════════════════════════════════════════════════════════════════
   stories-treasury.js — publish-ready «كنزُ القصص» Story Treasury.
   Unlike the corner "Manners Book" (which shows only story[0], pages
   1–2 per house), this renders EVERY story in full: all pages, the
   "what would you do?" choice, the moral, the reflection questions and
   the badge — one richly-illustrated chapter per house.

   Reads:  window.HOUSES + window.HOUSE_BY_SLUG  (the corner's own data)
   Config: window.STORYBOOK = { ids:[...slugs], titleAr, titleEn,
           kicker, subAr, subEn, certAr, certEn, ageAr }
   Style:  yaqeen-book.css  +  stories-treasury.css
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var C = window.STORYBOOK || {};
  var BY = window.HOUSE_BY_SLUG || {};
  var H  = window.HOUSES || {};

  var ABC_AR = ['أ','ب','ج','د','هـ'];
  var ABC_EN = ['A','B','C','D','E'];
  var STYLE_HINT = 'warm flat-vector storybook · navy/gold/teal · faceless & modest';

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }

  /* strip html / quran brackets / honorifics / emoji → plain art brief */
  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'')
      .replace(/﴿[^﴾]*﴾/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'')
      .replace(/\s+/g,' ').trim();
  }
  function firstSentences(s,n){
    var parts=clean(s).split(/(?<=[.!?؟])\s+/).filter(Boolean);
    var out=parts.slice(0,n).join(' ');
    if(out.length<40 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }
  function leaf(cls,acc){ var l=document.createElement('section'); l.className='leaf'+(cls?' '+cls:''); if(acc)l.style.setProperty('--acc',acc); return l; }

  /* ── styled illustration placeholder (caption = art brief, bilingual) ── */
  function art(icon, capAr, capEn, h){
    return '<div class="slot-wrap"><div class="art-ph" style="min-height:'+h+'px;height:'+h+'px">'+
      '<div class="ap-ic">'+(icon||'🎨')+'</div>'+
      '<div class="ap-lbl">رسمة · Illustration</div>'+
      '<div class="ap-cap">'+esc(capAr)+'<span class="en">'+esc(capEn)+'</span></div>'+
      '<div class="ap-style">'+STYLE_HINT+'</div>'+
    '</div></div>';
  }

  function storyHead(it, s, sIdx, cont){
    return '<div class="pg-head" style="--acc:'+it.color+'">'+
      '<div class="pg-num" style="--acc:'+it.color+'">'+it.order+'.'+(sIdx+1)+'</div>'+
      '<div class="pg-titles" style="flex:1">'+
        '<span class="story-tag" style="--acc:'+it.color+'">'+(s.icon||'📖')+' '+it.shortAr+' · قصة '+(sIdx+1)+'</span>'+
        '<div class="story-name">'+s.title.ar+'<span class="en lat">'+s.title.en+'</span></div>'+
      '</div>'+
      (cont?'<span class="cont-pill">… تتمة · cont’d</span>':'<span class="cont-pill">'+(sIdx+1)+' / '+it.storyCount+'</span>')+
    '</div>';
  }

  function pageBlock(p, n){
    var choice = p.choice ? choiceCard(p.choice) : '';
    return '<p class="spage"><span class="pg-dot">'+n+'</span>'+p.text.ar+
      '<span class="en lat">'+p.text.en+'</span></p>'+choice;
  }

  /* ── printable per-story quiz activity (uses the story's own authored quiz) ── */
  function quizActivity(s, it){
    var qz = (s.quiz||[]).filter(function(q){ return q && q.q && q.opts; });
    if(!qz.length){
      /* no quiz authored → fall back to a colouring activity */
      var badge=s.badge||{icon:'🏅'};
      return '<div class="puzzle-instr">🖍️ لوِّنِ الزخرفةَ الإسلامية · Colour the Islamic pattern</div>'+
        (window.TreasuryArt
          ? TreasuryArt.coloringPanel({ w:620, h:230, accent:it.color, seed:it.slug+'-c',
              labelAr:'لوِّن الزخرفة', labelEn:'Colour the pattern', badgeIcon:(badge.icon||'🏅') })
          : '');
    }
    var ABC=['أ','ب','ج','د'];
    var rows=qz.map(function(q,qi){
      var opts=(q.opts||[]).map(function(o,oi){
        return '<div class="qz-opt"><span class="qz-bub">'+ABC[oi]+'</span>'+
          '<div>'+o.t.ar+'<span class="en lat">'+o.t.en+'</span></div></div>';
      }).join('');
      return '<div class="qz-item"><div class="qz-q"><span class="qz-n">'+(qi+1)+'</span><div>'+q.q.ar+
        '<span class="en lat">'+q.q.en+'</span></div></div><div class="qz-opts">'+opts+'</div></div>';
    }).join('');
    /* discreet answer key */
    var key=qz.map(function(q,qi){
      var ci=0; (q.opts||[]).forEach(function(o,oi){ if(o.c) ci=oi; });
      return (qi+1)+'-'+ABC[ci];
    }).join('  ·  ');
    return '<div class="qz-box" style="--acc:'+it.color+'">'+
      '<h4 class="qz-h">🎯 اختبِر فَهمَكَ لِلقِصَّة<span class="en lat">Story quiz — circle the right answer</span></h4>'+
      rows+
      '<div class="qz-key"><span class="qz-key-lbl">الإجابات · Answers</span> '+key+'</div>'+
    '</div>';
  }

  function choiceCard(ch){
    var opts=(ch.opts||[]).map(function(o,i){
      return '<div class="ch-opt"><span class="mk">'+ABC_AR[i]+'</span>'+
        '<div>'+o.t.ar+'<span class="en lat">'+o.t.en+'</span></div></div>';
    }).join('');
    var ci=0; (ch.opts||[]).forEach(function(o,i){ if(o.c) ci=i; });
    var correct=(ch.opts||[]).filter(function(o){return o.c;})[0];
    var exp=(correct&&correct.exp)
      ? '<span class="ck-exp"> — '+correct.exp.ar+' / '+correct.exp.en+'</span>' : '';
    var key='<div class="ch-key"><span class="ch-key-lbl">الإجابة · Answer</span> '+ABC_AR[ci]+exp+'</div>';
    return '<div class="choice"><div class="ch-q"><span class="qic">🤔</span><div>'+ch.q.ar+
      '<span class="en lat">'+ch.q.en+'</span></div></div>'+opts+key+'</div>';
  }

  /* ── build all leaves for ONE story ── */
  function storyLeaves(it, s, sIdx){
    var nodes=[], pages=(s.pages||[]);
    var heroCap = firstSentences((pages[0]&&pages[0].text?pages[0].text.ar:'')||s.title.ar, 1);
    var heroCapEn = firstSentences((pages[0]&&pages[0].text?pages[0].text.en:'')||s.title.en, 1);

    /* opening leaf: head + story title-plate (themed) + first page */
    var open=leaf('', it.color);
    open.innerHTML = storyHead(it,s,sIdx,false)+
      (window.TreasuryArt
        ? TreasuryArt.headerPanel({ w:620, h:280, accent:it.color, seed:it.slug+'-'+sIdx,
            icon:(s.icon||it.crest), titleAr:s.title.ar, titleEn:s.title.en,
            taglineAr:firstSentences((pages[0]&&pages[0].text?pages[0].text.ar:'')||'', 1) })
        : art(s.icon||'🖼️','المشهد: '+heroCap, 'Scene: '+heroCapEn, 300))+
      (pages[0]?pageBlock(pages[0],1):'');
    nodes.push(open);

    /* continuation leaves: 2 pages each */
    var rest=pages.slice(1);
    for(var i=0;i<rest.length;i+=2){
      var lf=leaf('', it.color);
      lf.innerHTML = storyHead(it,s,sIdx,true)+
        pageBlock(rest[i], i+2) + (rest[i+1]?pageBlock(rest[i+1], i+3):'');
      nodes.push(lf);
    }

    /* closing leaf: moral + reflect + badge + coloring illustration */
    var badge=s.badge||{icon:'🏅',title:{ar:it.shortAr,en:it.shortEn}};
    var reflect=(s.reflect||[]).map(function(r,i){
      return '<div class="reflect-q"><span class="rq-n">'+(i+1)+'</span><div>'+r.ar+'<span class="en lat">'+r.en+'</span></div></div>';
    }).join('');
    var moralCap = s.moral?firstSentences(s.moral.ar,1):s.title.ar;
    var moralCapEn = s.moral?firstSentences(s.moral.en,1):s.title.en;
    var close=leaf('', it.color);
    close.innerHTML = storyHead(it,s,sIdx,true)+
      (s.moral?'<div class="moral"><span class="m-ic">🎯</span><div><div class="m-lbl">الدرسُ المستفاد · The lesson</div>'+
        '<div class="m-tx">'+s.moral.ar+'<span class="en lat">'+s.moral.en+'</span></div></div></div>':'')+
      (reflect?'<div class="reflect-box"><h4>💭 أتأمَّلُ وأُجيب<span class="en lat">Reflect &amp; answer</span></h4>'+reflect+'</div>':'')+
      quizActivity(s, it)+
      '<div class="badge-row" style="--acc:'+it.color+'"><div class="br-circle" style="--acc:'+it.color+'">'+(badge.icon||'🏅')+'</div>'+
        '<div><div class="br-lbl">وِسامُ القصة · Story badge</div>'+
        '<div class="br-name">'+(badge.title?badge.title.ar:it.shortAr)+'<span class="en lat">'+(badge.title?badge.title.en:it.shortEn)+'</span></div>'+
        '<div class="br-hint">لوِّن الوِسام بعد إتمام القصة · colour it in when you finish</div></div></div>';
    nodes.push(close);
    return nodes;
  }

  /* ── chapter divider (one per house) ── */
  function chapterLeaf(it){
    var l=leaf('dark', it.color);
    var dots=[];
    for(var i=0;i<it.storyCount;i++) dots.push('<i class="on"></i>');
    l.innerHTML='<div class="chapter-mid">'+
      '<div class="chapter-kick">'+(C.kicker||'')+'</div>'+
      '<div class="chapter-crest" style="--acc:'+it.color+'">'+it.crest+'</div>'+
      '<div class="chapter-no">الفصل · CHAPTER '+it.order+'</div>'+
      '<h1 class="chapter-title">'+it.nameAr+'<span class="en lat">'+it.nameEn+'</span></h1>'+
      (it.data.tagline?'<div class="chapter-tag">'+it.data.tagline.ar+'<span class="en lat">'+it.data.tagline.en+'</span></div>':'')+
      '<div class="chapter-count">📖 '+it.storyCount+' قصص · '+it.storyCount+' stories</div>'+
      '<div class="chapter-dots">'+dots.join('')+'</div>'+
    '</div>';
    return l;
  }

  function coverLeaf(){
    var l=leaf('dark', C.color||'#D4A017');
    l.innerHTML='<div class="cover-mid">'+
      '<div class="cover-kick">'+(C.kicker||'')+'</div>'+
      '<h1 class="cover-title">'+C.titleAr+'<span class="en lat">'+C.titleEn+'</span></h1>'+
      '<div style="font-size:3.2rem;margin:-2px 0 2px">📖✨</div>'+
      '<div class="cover-sub">'+C.subAr+'<br><span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">'+C.subEn+'</span></div>'+
      '<span class="cover-badge">'+(C.ageAr||'كتابُ قصصٍ مُصوَّر · للعائلة')+'</span>'+
    '</div>';
    return l;
  }

  function tocLeaf(ITEMS){
    var l=leaf('dark', C.color||'#D4A017');
    var rows=ITEMS.map(function(it){
      return '<div class="toc-row" style="--acc:'+it.color+'"><div class="tr-ic" style="--acc:'+it.color+'">'+it.crest+'</div>'+
        '<div class="tr-mid"><b>'+it.nameAr+'</b><span class="en lat">'+it.nameEn+'</span></div>'+
        '<span class="tr-ct">'+it.storyCount+' قصص</span></div>';
    }).join('');
    var total=ITEMS.reduce(function(a,it){return a+it.storyCount;},0);
    l.innerHTML='<div class="toc"><h2>الفهرس · Contents</h2>'+
      '<div class="toc-sub">'+ITEMS.length+' فصول · '+total+' قصة مُصوّرة — '+ITEMS.length+' chapters · '+total+' illustrated stories</div>'+
      rows+'</div>';
    return l;
  }

  function certLeaf(ITEMS){
    var l=leaf('dark', C.color||'#D4A017');
    var badges=ITEMS.map(function(it){ return '<div class="cert-badge" title="'+esc(it.shortAr)+'">'+it.crest+'</div>'; }).join('');
    l.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادةُ إتمام · CERTIFICATE</div>'+
      '<h2 class="cert-title">'+(C.certAr||C.titleAr)+'<span class="en lat">'+(C.certEn||C.titleEn)+'</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك هنا</div>'+
      '<div class="cert-line">قرأَ كنزَ القصصِ وتأمَّلَ عِبَرَها وعزمَ على العملِ بها.<br>'+
        '<span class="en lat" style="font-size:.82rem">read the Story Treasury, reflected on its lessons, and resolved to live by them.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return l;
  }

  /* ── assemble items from config ── */
  function items(){
    var ids=(C.ids||[]).filter(function(s){ return H[s] && H[s].stories && H[s].stories.length; });
    return ids.map(function(s,i){
      var m=BY[s]||{}, d=H[s];
      return { slug:s, order:i+1, color:(m.color||'#D4A017'), crest:(d.icon||m.emoji||'🏅'),
        nameAr:m.nameAr||s, nameEn:m.nameEn||s, shortAr:m.shortAr||m.nameAr||s, shortEn:m.shortEn||m.nameEn||s,
        data:d, storyCount:d.stories.length };
    });
  }

  window.addEventListener('DOMContentLoaded', function(){
    var book=document.getElementById('book');
    var ITEMS=items();
    if(!ITEMS.length){ book.innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل القصص — لم تُحمّل بيانات الأركان.</p>'; return; }
    document.body.classList.add('publish');

    var nodes=[ coverLeaf(), tocLeaf(ITEMS) ];
    ITEMS.forEach(function(it){
      nodes.push(chapterLeaf(it));
      it.data.stories.forEach(function(s,sIdx){
        storyLeaves(it,s,sIdx).forEach(function(n){ nodes.push(n); });
      });
    });
    nodes.push(certLeaf(ITEMS));

    nodes.forEach(function(n){ n.classList.add('show','flat'); book.appendChild(n); });

    var cn=book.querySelector('.cert-name');
    if(cn) cn.addEventListener('focus',function(){ if(cn.textContent.indexOf('اكتب')>-1) cn.textContent=''; });
  });
})();
