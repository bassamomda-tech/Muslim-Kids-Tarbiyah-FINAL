/* ════════════════════════════════════════════════════════════════
   book-scenes.js — the free, automatic SCENE ILLUSTRATOR for the
   printable books. Turns a picture description (title + art prompt +
   the story text around the slot) into an original flat-vector SVG
   scene: a backdrop (desert, oasis, sea, mosque interior, home …) plus
   2–6 hand-drawn elements chosen by Arabic/English keywords.
   · deterministic per slot id (same picture every time)
   · no faces; never draws prophets, companions, angels or the unseen —
     sacred mentions get the place, objects and light only
   · LINE mode renders the same scene as black outlines for colouring
   Loaded on demand by book-art.js together with book-scenes-lib*.js
   (the element library). No external dependencies.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var B = window.BookScenes = { EL:{}, BD:{}, version:1 };
  var INK = '#1b2b44';
  var LINE = false, SC = 1;

  /* ── colour utils ── */
  function hx(c){ c=String(c||'').trim(); if(c[0]!=='#') return '#D4A017'; if(c.length===4) c='#'+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]; return c.slice(0,7); }
  function rgb(c){ c=hx(c); return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]; }
  function hex(a){ return '#'+a.map(function(v){ v=Math.max(0,Math.min(255,Math.round(v))); return (v<16?'0':'')+v.toString(16); }).join(''); }
  function mix(c1,c2,t){ var a=rgb(c1),b=rgb(c2); return hex([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]); }
  function lighten(c,t){ return mix(c,'#ffffff',t); }
  function darken(c,t){ return mix(c,'#000000',t); }
  function lum(c){ var a=rgb(c); return (0.299*a[0]+0.587*a[1]+0.114*a[2])/255; }
  B.mix=mix; B.lighten=lighten; B.darken=darken;

  /* ── seeded rng ── */
  function seed(str){ var h=2166136261; for(var i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } var s=(h>>>0)||1;
    return function(){ s^=s<<13; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
  function n(v){ return Math.round(v*10)/10; }

  /* ── paint helpers (colour mode = flat fills, LINE mode = outlines) ── */
  function at(fill,o){ o=o||{};
    if(LINE){ if(o.nl||(o.op!=null&&o.op<0.75&&!o.keep)) return null;
      return ' fill="'+(o.lf||'#fff')+'" stroke="'+INK+'" stroke-width="'+n((o.lw||1.7)/SC)+'" stroke-linejoin="round" stroke-linecap="round"'; }
    var s=' fill="'+fill+'"';
    if(o.st) s+=' stroke="'+o.st+'" stroke-width="'+(o.sw||1.5)+'" stroke-linejoin="round" stroke-linecap="round"';
    if(o.op!=null) s+=' opacity="'+o.op+'"';
    return s; }
  function P(d,fill,o){ var a=at(fill,o); return a==null?'':'<path d="'+d+'"'+a+'/>'; }
  function R(x,y,w,h,fill,o){ var a=at(fill,o); return a==null?'':'<rect x="'+n(x)+'" y="'+n(y)+'" width="'+n(w)+'" height="'+n(h)+'"'+(o&&o.rx?' rx="'+o.rx+'"':'')+a+'/>'; }
  function C(x,y,r,fill,o){ var a=at(fill,o); return a==null?'':'<circle cx="'+n(x)+'" cy="'+n(y)+'" r="'+n(r)+'"'+a+'/>'; }
  function E(x,y,rx,ry,fill,o){ var a=at(fill,o); return a==null?'':'<ellipse cx="'+n(x)+'" cy="'+n(y)+'" rx="'+n(rx)+'" ry="'+n(ry)+'"'+a+'/>'; }
  function PL(pts,fill,o){ var a=at(fill,o); return a==null?'':'<polygon points="'+pts+'"'+a+'/>'; }
  /* stroke-only line */
  function L(d,col,sw,o){ o=o||{};
    if(LINE){ if(o.nl) return ''; return '<path d="'+d+'" fill="none" stroke="'+INK+'" stroke-width="'+n((o.lw||1.4)/SC)+'" stroke-linecap="round" stroke-linejoin="round"/>'; }
    return '<path d="'+d+'" fill="none" stroke="'+col+'" stroke-width="'+(sw||1.5)+'" stroke-linecap="round" stroke-linejoin="round"'+(o.op!=null?' opacity="'+o.op+'"':'')+(o.da?' stroke-dasharray="'+o.da+'"':'')+'/>'; }
  function starPts(cx,cy,Ro,Ri,k,rot){ rot=rot||0; var p=[]; for(var i=0;i<k*2;i++){ var rad=(i%2?Ri:Ro), a=rot+i*Math.PI/k; p.push(n(cx+rad*Math.sin(a))+','+n(cy-rad*Math.cos(a))); } return p.join(' '); }
  function arch(x,y,w,h){ var cx=x+w/2, sh=Math.min(h*0.5,w*0.75);
    return 'M'+n(x)+' '+n(y+h)+' V'+n(y+sh)+' Q'+n(x)+' '+n(y+sh*0.25)+' '+n(cx)+' '+n(y)+' Q'+n(x+w)+' '+n(y+sh*0.25)+' '+n(x+w)+' '+n(y+sh)+' V'+n(y+h)+' Z'; }
  function crescent(cx,cy,r){ return 'M'+n(cx)+' '+n(cy-r)+' A'+r+' '+r+' 0 1 0 '+n(cx+0.2*r)+' '+n(cy+r*0.96)+' A'+n(r*0.8)+' '+n(r*0.8)+' 0 1 1 '+n(cx)+' '+n(cy-r)+' Z'; }
  /* place an element: origin = bottom-centre, 100 units tall */
  function place(name,x,y,h,flip,c){
    var el=B.EL[name]; if(!el) return '';
    var s=h/100, old=SC; SC=SC*s; var inner='';
    try{ inner=el.d(c); }catch(e){ inner=''; }
    SC=old;
    return '<g transform="translate('+n(x)+','+n(y)+') scale('+n(flip?-s:s)+','+n(s)+')">'+inner+'</g>';
  }
  B.P=P; B.R=R; B.C=C; B.E=E; B.PL=PL; B.L=L; B.star=starPts; B.arch=arch; B.crescent=crescent; B.place=place;
  B.isLine=function(){ return LINE; };

  /* ── element / backdrop registry ── */
  B.def=function(name,meta,fn){ meta.name=name; meta.d=fn; B.EL[name]=meta; INDEX=null; };
  B.bdef=function(name,meta,fn){ meta.name=name; meta.d=fn; B.BD[name]=meta; INDEX=null; };

  /* ════ TEXT → KEYWORDS ════ */
  function norm(s){
    return String(s||'').toLowerCase()
      .replace(/[ً-ٰٟـ️]/g,'')
      .replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي')
      .replace(/[’`]/g,"'");
  }
  var AR_SUF=['ه','ات','ان','ين','ون','ها','هم','نا','ي','ك','ا','يه','تان','تين','هما','كم','ته','تها','تهم','تي','تك','تنا','تان','يا','يات','يون','يين'];
  /* stems of one token → array of candidate forms */
  function forms(w){
    var out=[w];
    if(/^[a-z0-9']+$/.test(w)){
      if(w.length>3){ if(/ies$/.test(w)) out.push(w.slice(0,-3)+'y'); if(/es$/.test(w)) out.push(w.slice(0,-2)); if(/s$/.test(w)) out.push(w.slice(0,-1)); if(/'s$/.test(w)) out.push(w.slice(0,-2)); }
      return out;
    }
    var pre=[w], m;
    if(w.length>3 && (w[0]==='و'||w[0]==='ف')) pre.push(w.slice(1));
    pre.slice().forEach(function(x){
      if((m=/^(بال|كال|فال|وال|لل|ال)(.{2,})$/.exec(x))) pre.push(m[2]);
      if(x.length>3 && (x[0]==='ب'||x[0]==='ل'||x[0]==='ك')){ pre.push(x.slice(1)); if(x.slice(1,3)==='ال'&&x.length>5) pre.push(x.slice(3)); }
    });
    pre.forEach(function(x){
      out.push(x);
      for(var i=0;i<AR_SUF.length;i++){ var sf=AR_SUF[i];
        if(x.length-sf.length>=3 && x.slice(-sf.length)===sf){ var b=x.slice(0,-sf.length); out.push(b); if(sf[0]==='ت'||sf==='ات') out.push(b+'ه'); } }
    });
    return out;
  }
  function analyse(text){
    var raw=' '+norm(text).replace(/\s+/g,' ')+' ', set={};
    var toks=raw.split(/[^a-z0-9'ء-ي]+/);
    for(var i=0;i<toks.length;i++){ var w=toks[i]; if(!w||w.length<2) continue; var f=forms(w); for(var j=0;j<f.length;j++) set[f[j]]=1; }
    return { raw:raw, set:set };
  }
  /* term list: 'word|multi word|!strong|emoji' */
  var INDEX=null;
  function buildIndex(){
    INDEX={ single:{}, multi:[] };
    function add(kind,name,terms){
      String(terms||'').split('|').forEach(function(t){
        t=t.trim(); if(!t) return; var w=1;
        while(t[0]==='!'){ w+=1.5; t=t.slice(1); }
        var pre=false; if(t.slice(-1)==='*'){ pre=true; t=t.slice(0,-1); }
        t=norm(t);
        var ent={ kind:kind, name:name, w:w, t:t };
        if(pre||/\s/.test(t)||!/^[a-z0-9'ء-ي]+$/.test(t)){ ent.pre=pre; INDEX.multi.push(ent); }
        else (INDEX.single[t]=INDEX.single[t]||[]).push(ent);
      });
    }
    var k; for(k in B.EL) add('el',k,B.EL[k].k);
    for(k in B.BD) add('bd',k,B.BD[k].k);
    for(k in FLAGS) add('fl',k,FLAGS[k]);
  }
  /* sky / mood flags */
  var FLAGS={
    night:'night|ليل|ليله|ليلا|قمر|moon|moonlit|نجوم|نجم|star|starry|عشاء|isha|تهجد|قيام|tahajjud|midnight|🌙|🌌|⭐|🌟|sleep|نوم|نام|bedtime|مساء|ظلام|ظلمه|dark|darkness|!laylat|قدر',
    dawn:'dawn|فجر|sunrise|شروق|صباح|morning|🌅|🌄|fajr|daybreak|falaq|فلق|ضحي|duha|بكور|early',
    sunset:'sunset|غروب|مغرب|maghrib|افطار|iftar|evening|اصيل|dusk|golden hour|عصر|asr|🌇',
    storm:'storm|عاصفه|طوفان|flood|thunder|رعد|برق|lightning|⛈|🌩|ريح|رياح|wind|windy|tempest|صاعقه|hurricane|اعصار',
    rain:'rain|مطر|امطار|غيث|rainy|🌧|☔|raindrop|قطرات|drizzle|shower',
    rainbow:'rainbow|قوس قزح|🌈',
    light:'light|نور|انوار|هدايه|هدي|guidance|وحي|revelation|glow|glowing|radiant|ضياء|✨|💡|🌟|illuminat*|shining|يقين|certainty|ايمان|faith|بركه|blessing|رحمه|mercy',
    snow:'snow|ثلج|ice|جليد|❄|winter|شتاء',
    sacred:'prophet|prophets|messenger|نبي|انبياء|رسول|رسل|مرسلين|ﷺ|companion|صحابي|صحابه|صحابيه|angel|angels|ملايكه|ملاك|جبريل|jibril|gabriel|ميكاييل|اسرافيل|عليه السلام|عليهم السلام|عليها السلام|رضي الله|caliph|خليفه|imam|امام|sahabi|sahaba|مريم|maryam|adam|ادم|nuh|نوح|ibrahim|ابراهيم|musa|موسي|isa|عيسي|yusuf|يوسف|yunus|يونس|muhammad|محمد|ayyub|ايوب|sulayman|سليمان|dawud|داود|ismail|اسماعيل|yaqub|يعقوب|khadijah|خديجه|aisha|عايشه|fatimah|فاطمه|bilal|بلال|umar|عمر|ali|علي|uthman|عثمان|abu bakr|ابو بكر|khalid|خالد|hamza|حمزه'
  };
  function scoreText(an,weight,acc){
    var set=an.set, raw=an.raw, seen={}, k, i, list, e;
    for(k in set){ list=INDEX.single[k]; if(!list) continue;
      for(i=0;i<list.length;i++){ e=list[i]; var id=e.kind+':'+e.name+':'+e.t; if(seen[id]) continue; seen[id]=1;
        acc[e.kind][e.name]=(acc[e.kind][e.name]||0)+e.w*weight; } }
    for(i=0;i<INDEX.multi.length;i++){ e=INDEX.multi[i];
      var hit = e.pre ? raw.indexOf(' '+e.t)>=0 : (/^[a-z0-9' ء-ي]+$/.test(e.t) ? raw.indexOf(' '+e.t+' ')>=0||raw.indexOf(' '+e.t+'s ')>=0||raw.indexOf(' ال'+e.t+' ')>=0||raw.indexOf(' و'+e.t+' ')>=0 : raw.indexOf(e.t)>=0);
      if(hit) acc[e.kind][e.name]=(acc[e.kind][e.name]||0)+e.w*weight;
    }
  }

  /* strip the art-prompt boilerplate so only the scene words remain */
  B.cleanPrompt=function(p){
    p=String(p||'');
    var cut=p.search(/Style:\s|Pure crisp|STYLE|Soft, warm children/); if(cut>0) p=p.slice(0,cut);
    return p
      .replace(/A (warm|beautiful|friendly|gentle|bright) children'?s?-?(story)?book (scene|COVER|cover)[^«]*?(?=«|:)/gi,' ')
      .replace(/A full-page COLOU?RING line-art[^«]*?(?=«|:)/gi,' ')
      .replace(/Show it warmly[^.]*\./gi,' ').replace(/Portrait composition[^.]*\./gi,' ').replace(/portrait composition[^.]*\./gi,' ')
      .replace(/Faceless modest characters[^.;]*[.;]/gi,' ').replace(/Show children practising[^.]*\./gi,' ')
      .replace(/(with )?a decorative border[^.]*\./gi,' ').replace(/A friendly (everyday )?scene for a child to colou?r,?/gi,' ')
      .replace(/Render it as a friendly scene[^.]*\./gi,' ')
      .replace(/Illustrate this moment ENTIRELY[^:]*:/gi,' ').replace(/illustrate its theme through[^—-]*[—-]/gi,' ')
      .replace(/Evoke its theme[^:]*:/gi,' ').replace(/evoke its theme[^—]*—/gi,' ')
      .replace(/Bring the lesson to life with an everyday children's scene:/gi,' ').replace(/Bring this gentle (visual )?metaphor to life:?/gi,' ')
      .replace(/symbolically illustrating the lesson of a prophetic hadith,?/gi,' ').replace(/the lesson of the hadith/gi,' ')
      .replace(/\((no|NO)[^)]*\)/g,' ').replace(/\b(No|NO|NEVER|Never|no) (people|prophets?|figures?|faces?|face)[^.]*\./g,' ')
      .replace(/(—|-|,)?\s*no (people|figures?|faces|people's faces)[^.,;—]*/gi,' ')
      .replace(/Depict (this moment|the scene of this story):/gi,' ').replace(/Scene context:/gi,' ')
      .replace(/for an Islamic (faith|history|worship) book,?/gi,' ').replace(/(page|chapter)( titled)?/gi,' ')
      .replace(/Quran-stories book|children's book|storybook/gi,' ')
      .replace(/faceless|modest(ly)?(-dressed)?|symbolic(ally)?|theme:|meaning:|Theme:/gi,' ');
  };

  /* ════ PALETTE ════ */
  var BASE={ sand:'#EBCB8E',sandD:'#D9B26E',sandL:'#F6E2B6', stone:'#BDB6AA',stoneD:'#8F887D',stoneL:'#DDD7CB',
    wood:'#A4703F',woodD:'#7A4E24',woodL:'#CFA06A', leaf:'#46A565',leafD:'#2E7F4C',leafL:'#86CC88', grass:'#9AD080',grassD:'#74B868',
    water:'#62B8DD',waterD:'#3A8FC0',waterL:'#B4E2F2', gold:'#E3B233',goldD:'#B98C17',goldL:'#F8DC7E',
    cream:'#FFF6DF',white:'#FFFFFF', navy:'#22375F', red:'#D5604A', pink:'#F0A6AE', purple:'#9163B8', teal:'#2AA58A',
    grey:'#A3ADB8',greyD:'#6F7A87', brick:'#CF8C63',brickD:'#B0704A', mud:'#E0BF90',mudD:'#C7A06C', black:'#2A2E38', cloth:'#F4EEE0' };
  function palette(acc,tod){
    var c={}, k, t=null, amt=0;
    if(tod==='night'){ t='#27396b'; amt=0.34; } else if(tod==='sunset'){ t='#f2a366'; amt=0.13; } else if(tod==='storm'){ t='#8a94a6'; amt=0.2; } else if(tod==='dawn'){ t='#f7c9a0'; amt=0.08; }
    for(k in BASE) c[k]= t ? mix(BASE[k],t,amt) : BASE[k];
    acc=hx(acc);
    var a=acc; if(lum(a)>0.72) a=darken(a,0.18);
    c.a= t?mix(a,t,amt*0.6):a; c.aD=darken(c.a,0.24); c.aL=lighten(c.a,0.42); c.aLL=lighten(c.a,0.76);
    c.a2= t?mix(BASE.teal,t,amt):BASE.teal; c.glow='#FFE9A6'; c.lit='#FFD86B'; c.ink=INK; c.tod=tod;
    c.shadow='#1b2b44';
    return c;
  }

  /* ════ SKY ════ */
  var SKY={ day:['#8ECFF0','#BFE5F6','#E6F6FB'], dawn:['#A9C4EE','#F6C8B4','#FFE9C2'], sunset:['#8573B8','#F29C78','#FFD58C'],
            night:['#27396E','#3F5898','#7C8CC4'], storm:['#7F8CA0','#AEB9C8','#DCE2E9'] };
  function cloud(x,y,s,fill,o){ return '<g transform="translate('+n(x)+','+n(y)+') scale('+n(s)+')">'+
    P('M-38 0 C-54 0 -54 -21 -36 -21 C-34 -37 -10 -41 -2 -27 C6 -39 30 -35 30 -19 C47 -19 49 0 34 0 Z',fill,o)+'</g>'; }
  function sky(S,hy){
    var W=S.W, c=S.c, r=S.rnd, tod=S.tod, f=S.flags, g='', i, cols=SKY[tod]||SKY.day;
    if(!LINE){
      g+='<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+cols[0]+'"/><stop offset="0.6" stop-color="'+cols[1]+'"/><stop offset="1" stop-color="'+cols[2]+'"/></linearGradient></defs>';
      g+='<rect width="'+W+'" height="'+(hy+30)+'" fill="url(#sk)"/>';
    } else g+='<rect width="'+W+'" height="300" fill="#fff"/>';
    var sx=W*(S.sunLeft?0.2:0.8), sy=46+r()*14;
    if(S.noSky) return g;
    if(tod==='night'){
      var ns=LINE?9:30;
      for(i=0;i<ns;i++){ var x=r()*W, y=8+r()*(hy-50), rr=LINE?5+r()*3:1.6+r()*3.4;
        if(Math.abs(x-sx)<34&&Math.abs(y-sy)<34) continue;
        g+= (LINE||rr>3.6) ? PL(starPts(x,y,rr+1.5,(rr+1.5)*0.42,LINE?5:4,r()*3),'#FFF3C4',{op:LINE?1:0.95,keep:1}) : C(x,y,rr*0.5,'#FFF8DC',{op:0.5+r()*0.5,nl:1}); }
      g+=C(sx,sy,34,'#FFF3C4',{op:0.14,nl:1});
      if(f.fullmoon) g+=C(sx,sy,21,'#FFF3C4')+C(sx-6,sy-5,4,'#EADFAE',{op:0.6,nl:1})+C(sx+7,sy+6,5.5,'#EADFAE',{op:0.5,nl:1});
      else g+=P(crescent(sx,sy,21),'#FFF3C4');
    } else if(tod==='storm'){
      /* no sun */
    } else if(tod==='dawn'||tod==='sunset'){
      var yy=hy-6;
      g+=C(sx,yy,58,tod==='dawn'?'#FFF1B8':'#FFC66B',{op:0.35,nl:1})+C(sx,yy,33,tod==='dawn'?'#FFE08A':'#FFB347');
      for(i=0;i<9;i++){ var a=Math.PI*(1.06+i*0.11); g+=L('M'+n(sx+44*Math.cos(a))+' '+n(yy+44*Math.sin(a))+' L'+n(sx+58*Math.cos(a))+' '+n(yy+58*Math.sin(a)),'#FFE9A6',3,{op:0.8}); }
    } else {
      g+=C(sx,sy,36,'#FFF4B8',{op:0.4,nl:1})+C(sx,sy,22,'#FFD95A');
      for(i=0;i<12;i++){ var a2=i*Math.PI/6; g+=L('M'+n(sx+29*Math.cos(a2))+' '+n(sy+29*Math.sin(a2))+' L'+n(sx+38*Math.cos(a2))+' '+n(sy+38*Math.sin(a2)),'#FFD95A',3,{op:0.9}); }
    }
    if(f.rainbow && !LINE){
      var rc=['#E5694E','#F0A03C','#F4D34A','#6BBE6E','#58A9DC','#8E6BC0'], cx=W*(S.sunLeft?0.66:0.34);
      for(i=0;i<rc.length;i++) g+=L('M'+n(cx-150+i*7)+' '+(hy+10)+' A'+(150-i*7)+' '+(150-i*7)+' 0 0 1 '+n(cx+150-i*7)+' '+(hy+10),rc[i],7,{op:0.8});
    } else if(f.rainbow){
      var cx2=W*(S.sunLeft?0.66:0.34);
      for(i=0;i<4;i++) g+=L('M'+n(cx2-150+i*12)+' '+(hy+10)+' A'+(150-i*12)+' '+(150-i*12)+' 0 0 1 '+n(cx2+150-i*12)+' '+(hy+10),INK,2);
    }
    /* clouds */
    var nc = tod==='storm'?4 : tod==='night'?1 : 2+(r()<0.5?1:0);
    var cf = tod==='storm'?'#9AA4B4' : tod==='night'?'#6274AE' : tod==='sunset'?'#FFE3C2' : '#FFFFFF';
    for(i=0;i<nc;i++){ var cxx=W*((i+0.5)/nc)+(r()-0.5)*W*0.16, cy=34+r()*46, cs=0.7+r()*0.6;
      if(tod!=='storm' && Math.abs(cxx-sx)<70) cxx+= (cxx<sx?-80:80);
      g+=cloud(cxx,cy,cs,cf,{op:tod==='storm'?1:0.92,keep:1}); S.clouds.push([cxx,cy,cs]); }
    if(f.beam && !LINE){
      var bx=W*(S.mir?0.7:0.3);
      g+=P('M'+n(bx-18)+' 0 L'+n(bx+18)+' 0 L'+n(bx+90)+' '+(hy+60)+' L'+n(bx-90)+' '+(hy+60)+' Z','#FFF6C8',{op:0.28,nl:1});
      g+=P('M'+n(bx-6)+' 0 L'+n(bx+6)+' 0 L'+n(bx+38)+' '+(hy+60)+' L'+n(bx-38)+' '+(hy+60)+' Z','#FFFBE0',{op:0.3,nl:1});
    }
    return g;
  }
  function rainLayer(S){
    var g='', r=S.rnd, W=S.W, i, k=LINE?16:46;
    for(i=0;i<k;i++){ var x=r()*W, y=30+r()*220; g+=L('M'+n(x)+' '+n(y)+' l-5 13',LINE?INK:'#DDF1FA',LINE?1.4:2.2,{op:0.85}); }
    if(S.flags.lightning){ var lx=W*(0.35+r()*0.3); g+=P('M'+n(lx)+' 52 l-16 38 h11 l-9 34 l30 -46 h-12 l10 -26 Z','#FFE36B',{st:'#F6B93B',sw:1}); }
    return g;
  }
  function snowLayer(S){ var g='', r=S.rnd, i; for(i=0;i<(LINE?10:34);i++) g+=C(r()*S.W,r()*250,LINE?2.5:1.5+r()*2,'#fff',{op:0.9,keep:1}); return g; }
  B.cloud=cloud;

  /* ridge / dune path helpers */
  function ridge(W,y,amp,segs,r,base){ var d='M0 '+n(y+ (r()-0.5)*amp), i; for(i=1;i<=segs;i++){ var x=W*i/segs, yy=y-(i%2?amp*(0.5+r()*0.7):-(amp*0.15*r())); d+=' L'+n(x-W/segs*0.5)+' '+n(yy)+' L'+n(x)+' '+n(y+(r()-0.5)*amp*0.5); } return d+' V'+(base||300)+' H0 Z'; }
  function wave(W,y,amp,segs,base,ph){ var d='M0 '+n(y), i, w=W/segs; for(i=0;i<segs;i++){ var up=((i+(ph||0))%2)?-1:1; d+=' Q'+n(w*i+w/2)+' '+n(y+up*amp)+' '+n(w*(i+1))+' '+n(y); } return d+' V'+(base||300)+' H0 Z'; }
  B.wave=wave; B.ridge=ridge;

  /* default outdoor ground spots: [xfrac, baselineY, scale] (index 0 = feature) */
  var SPOTS=[[0.29,246,1],[0.71,232,0.8],[0.5,214,0.56],[0.9,268,0.6],[0.08,270,0.52],[0.55,280,0.5]];

  /* ════ BACKDROPS ════ each returns {g, hy, ly(landmark baseline), spots, water, indoor} */
  function tuft(x,y,c){ return L('M'+n(x-5)+' '+n(y)+' q1 -8 -2 -11 M'+n(x)+' '+n(y)+' v-13 M'+n(x+5)+' '+n(y)+' q-1 -8 3 -10',c.leafD,1.8); }
  function pebbles(S,y0,y1,k,col){ var g='',i; for(i=0;i<k;i++){ var x=S.rnd()*S.W, y=y0+S.rnd()*(y1-y0); g+=E(x,y,3+S.rnd()*4,1.6+S.rnd()*1.6,col,{op:0.8,keep:1}); } return g; }

  B.bdef('desert',{k:'desert|صحراء|بادي*|dune|dunes|كثبان|رمال|رمل|sand|sandy|قافله|caravan|🏜|🐪|جزيره العرب|arabia|مكه|makkah|mecca|badr|بدر|hijrah|هجره|journey|رحله|سفر|travel|conquest|فتح|battle|معركه|غزوه'},function(S){
    var W=S.W,c=S.c,hy=176,g=sky(S,hy);
    g+=P(wave(W,hy,16,3,300,S.mir?1:0),c.sandD);
    g+=P('M0 '+(hy+34)+' Q'+n(W*0.25)+' '+(hy-2)+' '+n(W*0.52)+' '+(hy+26)+' T'+W+' '+(hy+14)+' V300 H0 Z',c.sand);
    g+=P('M0 '+(hy+92)+' Q'+n(W*0.3)+' '+(hy+58)+' '+n(W*0.62)+' '+(hy+84)+' T'+W+' '+(hy+70)+' V300 H0 Z',c.sandL);
    g+=L('M'+n(W*0.08)+' '+(hy+52)+' q40 -10 80 0 M'+n(W*0.55)+' '+(hy+48)+' q46 -12 96 -2 M'+n(W*0.3)+' '+(hy+106)+' q40 -9 84 0',c.sandD,1.6,{op:0.6});
    g+=pebbles(S,hy+70,292,5,c.sandD);
    return {g:g,hy:hy,ly:hy+30};
  });

  B.bdef('oasis',{k:'oasis|واحه|واحات|palm|palms|نخل|نخيل|نخله|spring|عين ماء|🌴|quba|قباء|madinah|medina|المدينه|يثرب|ansar|انصار|تمر|dates'},function(S){
    var W=S.W,c=S.c,hy=176,g=sky(S,hy), px=W*(S.mir?0.3:0.7);
    g+=P(wave(W,hy,14,3,300,1),c.sandD);
    g+=P('M0 '+(hy+30)+' Q'+n(W*0.3)+' '+(hy+4)+' '+n(W*0.55)+' '+(hy+24)+' T'+W+' '+(hy+16)+' V300 H0 Z',c.sand);
    g+=place('palm',px-74,hy+44,84,false,c)+place('palm',px+70,hy+40,70,true,c);
    g+=P('M0 '+(hy+78)+' Q'+n(W*0.3)+' '+(hy+54)+' '+n(W*0.6)+' '+(hy+70)+' T'+W+' '+(hy+62)+' V300 H0 Z',c.sandL);
    g+=E(px,hy+84,104,25,c.grassD)+E(px,hy+86,88,19,c.water)+E(px-16,hy+81,40,6,c.waterL,{op:0.7,nl:1});
    g+=tuft(px-92,hy+92,c)+tuft(px+86,hy+94,c)+tuft(px+20,hy+108,c);
    var sp=S.mir?[[0.72,248,1],[0.14,236,0.72],[0.5,212,0.5],[0.93,272,0.55],[0.6,282,0.5]]:[[0.28,248,1],[0.86,236,0.72],[0.5,212,0.5],[0.07,272,0.55],[0.4,282,0.5]];
    return {g:g,hy:hy,ly:hy+26,spots:sp,noMir:1,water:[[S.mir?0.3:0.7,hy+88,0.42]]};
  });

  B.bdef('mountains',{k:'mountain|mountains|جبل|جبال|peak|قمه|valley|وادي|hill|تل|rock|rocky|صخر|صخره|hira|حراء|thawr|ثور|uhud|احد|sinai|سيناء|طور|safa|الصفا|arafat|عرفات|⛰|🏔|cliff|summit'},function(S){
    var W=S.W,c=S.c,r=S.rnd,hy=170,g=sky(S,hy);
    g+=P(ridge(W,hy-10,70,4,r),mix(c.stone,c.waterL,0.45));
    g+=P(ridge(W,hy+12,46,5,r),c.stone);
    g+=P(wave(W,hy+40,10,3,300,0),mix(c.sand,c.grass,0.35));
    g+=P('M0 '+(hy+92)+' Q'+n(W*0.35)+' '+(hy+62)+' '+n(W*0.7)+' '+(hy+84)+' T'+W+' '+(hy+74)+' V300 H0 Z',mix(c.sandL,c.grass,0.25));
    g+=pebbles(S,hy+60,292,7,c.stoneD)+tuft(W*0.15,hy+70,c)+tuft(W*0.8,hy+96,c);
    return {g:g,hy:hy,ly:hy+44};
  });

  B.bdef('sea',{k:'sea|بحر|بحار|ocean|محيط|shore|ساحل|شاطي|beach|wave|waves|موج|امواج|ship|سفينه|سفن|sail|naval|بحري|island|جزيره|harbour|harbor|ميناء|port|🌊|⛵|🚢|ark|فلك|andalus|اندلس|voyage|ابحار|mediterranean'},function(S){
    var W=S.W,c=S.c,hy=150,g=sky(S,hy), sh=S.mir?0:1;
    g+=R(0,hy,W,150,c.waterD);
    g+=P(wave(W,hy+22,5,8,300,0),c.water)+P(wave(W,hy+58,6,6,300,1),mix(c.water,c.waterL,0.35));
    g+=L('M'+n(W*0.1)+' '+(hy+12)+' h34 M'+n(W*0.5)+' '+(hy+9)+' h44 M'+n(W*0.78)+' '+(hy+14)+' h30 M'+n(W*0.3)+' '+(hy+40)+' h40 M'+n(W*0.65)+' '+(hy+44)+' h36','#fff',1.8,{op:0.7});
    /* sandy shore in one corner */
    var d = sh ? 'M0 300 V'+(hy+98)+' Q'+n(W*0.22)+' '+(hy+78)+' '+n(W*0.4)+' '+(hy+112)+' T'+n(W*0.62)+' 300 Z' : 'M'+W+' 300 V'+(hy+98)+' Q'+n(W*0.78)+' '+(hy+78)+' '+n(W*0.6)+' '+(hy+112)+' T'+n(W*0.38)+' 300 Z';
    g+=P(d,c.sandL)+pebbles(S,hy+125,295,3,c.sandD);
    var a=sh?0.17:0.83, b=sh?0.62:0.38;
    return {g:g,hy:hy,ly:hy+6,noMir:1,
      spots:[[a,272,0.78],[sh?0.36:0.64,288,0.5],[sh?0.05:0.95,250,0.45]],
      water:[[b,hy+74,1],[sh?0.86:0.14,hy+40,0.5],[sh?0.3:0.7,hy+26,0.34]], far:[[sh?0.9:0.1,hy+8,0.42]], isWater:1};
  });

  B.bdef('river',{k:'river|نهر|انهار|nile|النيل|stream|جدول|brook|euphrates|فرات|tigris|دجله|bank|ضفه|valley|meadow|مرج|🏞|field|fields|green|اخضر|خضراء|nature|طبيعه|land|ارض'},function(S){
    var W=S.W,c=S.c,hy=172,g=sky(S,hy), m=S.mir;
    g+=P(wave(W,hy,18,3,300,0),mix(c.leafL,c.waterL,0.4));
    g+=P(wave(W,hy+22,12,4,300,1),c.grass);
    var x0=W*(m?0.62:0.38);
    var d = m ? 'M'+n(x0)+' '+(hy+18)+' C'+n(x0-70)+' '+(hy+50)+' '+n(x0+40)+' '+(hy+70)+' '+n(W*0.3)+' 300 H'+n(W*0.62)+' C'+n(x0+90)+' '+(hy+80)+' '+n(x0-30)+' '+(hy+50)+' '+n(x0+12)+' '+(hy+18)+' Z'
              : 'M'+n(x0)+' '+(hy+18)+' C'+n(x0+70)+' '+(hy+50)+' '+n(x0-40)+' '+(hy+70)+' '+n(W*0.7)+' 300 H'+n(W*0.38)+' C'+n(x0-90)+' '+(hy+80)+' '+n(x0+30)+' '+(hy+50)+' '+n(x0-12)+' '+(hy+18)+' Z';
    g+=P(d,c.water)+L('M'+n(W*0.5-10)+' '+(hy+84)+' q12 -5 24 0 M'+n(W*0.5-22)+' '+(hy+108)+' q16 -6 32 0','#fff',1.8,{op:0.75});
    g+=tuft(W*0.12,hy+60,c)+tuft(W*0.88,hy+74,c)+tuft(W*0.74,hy+44,c);
    return {g:g,hy:hy,ly:hy+26,noMir:1,
      spots: m?[[0.76,250,1],[0.16,240,0.8],[0.9,214,0.5],[0.06,276,0.5],[0.3,206,0.5]]:[[0.24,250,1],[0.84,240,0.8],[0.1,214,0.5],[0.94,276,0.5],[0.7,206,0.5]],
      water:[[0.5,hy+112,0.42]]};
  });

  B.bdef('garden',{k:'garden|حديقه|بستان|بساتين|جنه|flower|flowers|زهر|زهور|ورد|ورود|زهره|ورده|🌸|🌷|🌹|🌺|🌼|park|orchard|blossom|bloom|spring|ربيع|fruit|ثمر|ثمار|فاكهه|lush|butterfl*|فراشه|plant|نبات|shade|ظل'},function(S){
    var W=S.W,c=S.c,r=S.rnd,hy=178,g=sky(S,hy),i;
    g+=P(wave(W,hy,14,3,300,1),mix(c.leafL,c.waterL,0.3));
    for(i=0;i<5;i++){ var x=W*(0.06+i*0.22)+r()*20; g+=E(x,hy+8,30+r()*16,20+r()*8,c.leaf)+E(x-10,hy+4,10,7,c.leafL,{op:0.5,nl:1}); }
    g+=P(wave(W,hy+20,6,5,300,0),c.grass);
    g+=P('M'+n(W*0.44)+' 300 C'+n(W*0.46)+' '+(hy+70)+' '+n(W*0.56)+' '+(hy+50)+' '+n(W*0.5)+' '+(hy+22)+' L'+n(W*0.54)+' '+(hy+22)+' C'+n(W*0.64)+' '+(hy+54)+' '+n(W*0.58)+' '+(hy+74)+' '+n(W*0.64)+' 300 Z',c.sandL);
    for(i=0;i<9;i++){ var fx=r()*W, fy=hy+40+r()*76; if(Math.abs(fx-W*0.53)<W*0.09) continue; var fc=[c.pink,c.gold,c.white,c.purple,c.red][i%5];
      g+=L('M'+n(fx)+' '+n(fy)+' v-9',c.leafD,1.6)+C(fx,fy-11,3.6,fc)+C(fx,fy-11,1.3,c.goldL,{nl:1}); }
    return {g:g,hy:hy,ly:hy+24,spots:[[0.24,248,1],[0.78,238,0.8],[0.92,214,0.5],[0.07,274,0.52],[0.36,214,0.46],[0.7,282,0.48]]};
  });

  B.bdef('farm',{k:'farm|مزرعه|field|حقل|حقول|harvest|حصاد|crop|زرع|زراعه|farmer|فلاح|مزارع|wheat|قمح|سنبله|سنابل|🌾|seed|بذره|بذور|plant|plough|حرث|grain|حبوب|zakah|زكاه|orchard|🚜|sow|grow'},function(S){
    var W=S.W,c=S.c,hy=172,g=sky(S,hy),i;
    g+=P(wave(W,hy,12,3,300,0),mix(c.leafL,c.waterL,0.3));
    g+=P('M0 '+(hy+18)+' H'+W+' V300 H0 Z',mix(c.gold,c.sandL,0.55));
    for(i=0;i<9;i++){ var x=W*0.5+(i-4)*W*0.03, x2=W*0.5+(i-4)*W*0.21; g+=L('M'+n(x)+' '+(hy+18)+' L'+n(x2)+' 300',mix(c.goldD,c.wood,0.4),2,{op:0.55}); }
    g+=P('M0 '+(hy+18)+' H'+n(W*0.3)+' L'+n(W*0.12)+' 300 H0 Z',c.grass)+P('M'+W+' '+(hy+18)+' H'+n(W*0.72)+' L'+n(W*0.9)+' 300 H'+W+' Z',c.grassD);
    for(i=0;i<7;i++){ var fx=W*i/6; g+=R(fx-2,hy+4,4,18,c.woodL); }
    g+=L('M0 '+(hy+9)+' H'+W+' M0 '+(hy+16)+' H'+W,c.woodL,2.4);
    return {g:g,hy:hy,ly:hy+22,spots:[[0.26,250,1],[0.76,240,0.8],[0.5,216,0.5],[0.93,274,0.55],[0.07,276,0.5]]};
  });

  function skyline(S,hy,far){
    var W=S.W,c=S.c,r=S.rnd,g='',x=-10,i=0;
    while(x<W+10){ var w=38+r()*40, h=(far?26:44)+r()*(far?26:46), col=far?mix(c.mud,c.waterL,0.45):(i%2?c.mud:c.mudD), y=hy-h;
      g+=R(x,y,w,h+40,col);
      if(!far){
        if(r()<0.3) g+=P('M'+n(x+w*0.2)+' '+n(y)+' Q'+n(x+w*0.5)+' '+n(y-w*0.5)+' '+n(x+w*0.8)+' '+n(y)+' Z',c.aL);
        else g+=R(x-2,y-4,w+4,5,mix(col,'#000',0.12));
        var k=Math.max(1,Math.floor(w/22)), j; for(j=0;j<k;j++){ var wx=x+8+j*((w-16)/k)+2; g+=P(arch(wx,y+12,9,15),S.tod==='night'?c.lit:c.woodD); }
        if(r()<0.5) g+=P(arch(x+w*0.5-6,hy-20,12,22),c.aD);
      }
      x+=w+ (far?0:-2); i++; }
    return g;
  }
  B.bdef('city',{k:'city|مدينه|مدن|town|قريه|قري|village|street|شارع|طريق|زقاق|حاره|حي|neighbourhood|neighborhood|neighbor*|neighbour*|جار|جيران|houses|بيوت|منازل|دور|baghdad|بغداد|damascus|دمشق|cordoba|قرطبه|cairo|القاهره|kufa|الكوفه|basra|البصره|bukhara|بخاري|samarkand|سمرقند|🏘|🏙|capital|عاصمه|people|الناس|قوم|community|مجتمع|امه|ummah'},function(S){
    var W=S.W,c=S.c,hy=186,g=sky(S,hy);
    g+=skyline(S,hy-6,true)+skyline(S,hy+14,false);
    g+=R(0,hy+14,W,300,mix(c.sandL,c.stoneL,0.4));
    g+=P('M0 '+(hy+14)+' H'+W+' v8 H0 Z',mix(c.sand,c.stone,0.4),{nl:1});
    g+=L('M0 '+(hy+52)+' H'+W+' M0 '+(hy+84)+' H'+W,c.stoneL,1.4,{op:0.7,nl:1});
    g+=pebbles(S,hy+40,292,4,c.stone);
    return {g:g,hy:hy,ly:hy+20,spots:[[0.27,256,1],[0.73,250,0.8],[0.5,236,0.5],[0.92,276,0.55],[0.07,276,0.5]],built:1};
  });

  B.bdef('haram',{k:'!kaaba|!ka\'bah|!ka\'ba|!الكعبه|!كعبه|haram|الحرام|tawaf|طواف|hajj|حج|حجاج|umrah|عمره|pilgrim*|qibla|قبله|🕋|ihram|احرام|black stone|الحجر الاسود|bayt|البيت الحرام|بيت الله|مكه'},function(S){
    var W=S.W,c=S.c,hy=168,g=sky(S,hy),i;
    /* arcade */
    g+=R(0,hy-34,W,60,c.stoneL);
    for(i=0;i<Math.ceil(W/44);i++) g+=P(arch(i*44+8,hy-22,28,46),mix(c.stone,c.navy,0.25));
    g+=R(0,hy-40,W,7,c.stone);
    g+=place('minaret',W*0.07,hy+22,150,false,c)+place('minaret',W*0.93,hy+22,150,false,c);
    g+=R(0,hy+22,W,300,mix(c.white,c.stoneL,0.5));
    for(i=0;i<5;i++){ g+=E(W*0.5,hy+62,W*(0.2+i*0.14),14+i*13,'none',{st:c.stoneL,sw:1.6,op:0.9,nl:1}); }
    return {g:g,hy:hy,ly:hy+44,noMir:1,spots:[[0.5,236,1],[0.16,262,0.62],[0.85,264,0.62],[0.3,282,0.5],[0.7,284,0.5]],built:1,center:1};
  });

  B.bdef('road',{k:'road|طريق|درب|path|مسار|سبيل|way|route|caravan|قافله|trade|تجاره|travel|سفر|journey|رحله|migration|هجره|march|مسير|trail|footsteps|خطي|خطوات|straight path|صراط|walk|مشي|🛤|🐫'},function(S){
    var W=S.W,c=S.c,hy=174,g=sky(S,hy), m=S.mir;
    g+=P(wave(W,hy,14,3,300,0),mix(c.sandD,c.stone,0.3));
    g+=P('M0 '+(hy+26)+' Q'+n(W*0.3)+' '+(hy+6)+' '+n(W*0.6)+' '+(hy+22)+' T'+W+' '+(hy+18)+' V300 H0 Z',c.sand);
    var vx=W*(m?0.36:0.64);
    g+=P('M'+n(vx-5)+' '+(hy+18)+' C'+n(vx+(m?60:-60))+' '+(hy+50)+' '+n(W*0.5+(m?-60:60))+' '+(hy+80)+' '+n(W*0.5-56)+' 300 H'+n(W*0.5+56)+' C'+n(W*0.5+(m?-10:110))+' '+(hy+84)+' '+n(vx+(m?80:-40))+' '+(hy+48)+' '+n(vx+5)+' '+(hy+18)+' Z',c.sandL);
    g+=pebbles(S,hy+50,292,6,c.sandD)+tuft(W*0.1,hy+60,c)+tuft(W*0.9,hy+80,c);
    return {g:g,hy:hy,ly:hy+26,noMir:1,spots: m?[[0.77,250,1],[0.17,242,0.78],[0.93,214,0.5],[0.05,276,0.5],[0.62,214,0.45]]:[[0.23,250,1],[0.83,242,0.78],[0.07,214,0.5],[0.95,276,0.5],[0.38,214,0.45]]};
  });

  B.bdef('space',{k:'space|فضاء|planet|planets|كوكب|كواكب|galaxy|مجره|مجرات|universe|كون|cosmos|orbit|مدار|فلك|astronom*|sky|سماء|سماوات|heavens|solar|شمسي|شمس|sun|قمر|moon|نجوم|stars|🪐|🚀|🌍|🌌|earth|الارض|meteor|comet|شهاب|نيزك|isra|اسراء|معراج|miraj|creation|خلق'},function(S){
    var W=S.W,c=S.c,r=S.rnd,g='',i;
    if(!LINE) g+='<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22306A"/><stop offset="1" stop-color="#5A6DB4"/></linearGradient></defs><rect width="'+W+'" height="300" fill="url(#sk)"/>';
    else g+='<rect width="'+W+'" height="300" fill="#fff"/>';
    for(i=0;i<(LINE?10:44);i++){ var x=r()*W,y=r()*215,rr=LINE?6:1.2+r()*3.6; g+= (LINE||rr>3.8)?PL(starPts(x,y,rr+1.5,(rr+1.5)*0.42,LINE?5:4,r()*3),'#FFF3C4',{keep:1}):C(x,y,rr*0.5,'#fff',{op:0.5+r()*0.5,nl:1}); }
    g+=place('planet',W*(S.mir?0.2:0.8),88,74,false,c);
    g+=C(W*(S.mir?0.84:0.16),60,17,'#FFF3C4')+C(W*(S.mir?0.84:0.16)-5,56,4,'#EADFAE',{op:0.6,nl:1});
    g+=P('M0 300 V246 Q'+n(W*0.5)+' 196 '+W+' 246 V300 Z',mix(c.teal,c.navy,0.25))+P('M'+n(W*0.2)+' 300 Q'+n(W*0.3)+' 232 '+n(W*0.46)+' 236 Q'+n(W*0.5)+' 262 '+n(W*0.4)+' 300 Z',c.leaf,{op:0.9,keep:1})+P('M'+n(W*0.62)+' 300 Q'+n(W*0.6)+' 250 '+n(W*0.74)+' 238 Q'+n(W*0.86)+' 252 '+n(W*0.84)+' 300 Z',c.leaf,{op:0.9,keep:1});
    return {g:g,hy:230,ly:258,noSkyEl:0,spots:[[0.3,256,0.8],[0.7,258,0.7],[0.5,246,0.5],[0.9,272,0.45],[0.1,272,0.45]],spaceSky:1,dark:1};
  });

  B.bdef('underwater',{k:'underwater|deep sea|اعماق|قاع البحر|coral|مرجان|whale|حوت|حيتان|fish|سمك|اسماك|سمكه|octopus|اخطبوط|🐙|🐠|🐟|🐋|🐳|dive|غوص|pearl|لولو|jellyfish|قنديل البحر|glowfish|anglerfish|sea creature*'},function(S){
    var W=S.W,c=S.c,r=S.rnd,g='',i;
    if(!LINE) g+='<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FD8EE"/><stop offset="1" stop-color="#2F7FB5"/></linearGradient></defs><rect width="'+W+'" height="300" fill="url(#sk)"/>';
    else g+='<rect width="'+W+'" height="300" fill="#fff"/>';
    for(i=0;i<4;i++){ var bx=W*(0.15+i*0.24); g+=P('M'+n(bx)+' 0 l26 0 l-50 300 l-46 0 Z','#fff',{op:0.12,nl:1}); }
    g+=P(wave(W,262,9,5,300,0),c.sand)+P(wave(W,278,6,4,300,1),c.sandL);
    for(i=0;i<3;i++){ var x=W*(0.12+i*0.38)+r()*30, col=[c.pink,c.red,c.purple][i];
      g+=P('M'+n(x)+' 272 v-34 M'+n(x)+' 258 q-12 -6 -12 -22 M'+n(x)+' 252 q12 -6 13 -24 M'+n(x)+' 244 q-6 -8 -4 -18','none',{st:LINE?INK:col,sw:5,keep:1,lf:'none',lw:3}); }
    for(i=0;i<4;i++){ var sx=W*(0.25+i*0.2)+r()*20; g+=L('M'+n(sx)+' 276 q-7 -16 0 -30 q7 -14 0 -28',c.leafD,3.2)+L('M'+n(sx+8)+' 278 q6 -12 0 -24',c.leaf,2.6); }
    for(i=0;i<(LINE?6:12);i++){ g+=C(r()*W,30+r()*200,2+r()*3.5,'#fff',{op:0.55,keep:1,lf:'none'}); }
    return {g:g,hy:300,ly:272,spots:[[0.2,278,0.42],[0.85,282,0.42],[0.6,286,0.36]],water:[[0.48,170,1],[0.84,92,0.5],[0.14,110,0.46],[0.74,214,0.42]],under:1,isWater:1};
  });

  /* ── interiors ── */
  function floorRug(S,y,col,col2){ var W=S.W; return P('M'+n(W*0.14)+' '+(y+16)+' H'+n(W*0.86)+' L'+n(W*0.96)+' 296 H'+n(W*0.04)+' Z',col)+
    L('M'+n(W*0.17)+' '+(y+24)+' H'+n(W*0.83)+' M'+n(W*0.1)+' 286 H'+n(W*0.9),col2,2.2,{op:0.9}); }
  B.bdef('mosqueIn',{k:'pray|prayer|prayers|صلاه|صلوات|يصلي|صلي|salah|salat|mihrab|محراب|masjid|mosque|مسجد|مساجد|جامع|prostrat*|سجود|سجد|ركوع|ركع|bow|imam|congregation|جماعه|صف|صفوف|rows|friday|جمعه|khutbah|خطبه|adhan|اذان|iqamah|taraweeh|تراويح|itikaf|اعتكاف|🕌|worship|عباده|عبد|dhikr|ذكر|اذكار|tasbih|تسبيح|khushu|خشوع'},function(S){
    var W=S.W,c=S.c,g='',i,fy=206;
    g+=R(0,0,W,fy,LINE?'#fff':c.aLL)+R(0,fy,W,94,mix(c.sandL,c.cream,0.5));
    var k=W>520?5:3, aw=W/k;
    for(i=0;i<k;i++){ var x=i*aw, mid=(i===(k-1)/2);
      g+=P(arch(x+aw*0.14,mid?34:52,aw*0.72,fy-(mid?34:52)),mid?mix(c.aL,c.cream,0.35):mix(c.aLL,c.white,0.5),{st:c.aL,sw:3});
      if(mid){ g+=P(arch(x+aw*0.27,70,aw*0.46,fy-70),c.cream,{st:c.gold,sw:2.5})+L('M'+n(x+aw*0.5)+' 34 V84',c.goldD,1.6)+
        P('M'+n(x+aw*0.5-8)+' 84 h16 l4 9 q-12 16 -24 0 Z',c.gold)+C(x+aw*0.5,96,5,c.glow,{nl:1})+C(x+aw*0.5,96,22,c.glow,{op:0.3,nl:1}); }
      else if(!LINE){ g+=PL(starPts(x+aw*0.5,112,13,6,8,0),c.aL,{op:0.7}); }
      g+=R(x-5,fy-150,10,150,c.stoneL)+R(x-9,fy-156,18,8,c.stone)+R(x-9,fy-6,18,8,c.stone);
    }
    g+=R(W-5,fy-150,10,150,c.stoneL);
    g+=R(0,fy,W,6,mix(c.a,c.navy,0.2),{nl:1});
    g+=R(0,fy+6,W,88,mix(c.a,c.cream,0.25));
    for(i=0;i<3;i++){ var ry=fy+24+i*27; g+=L('M0 '+ry+' H'+W,c.aL,2);
      for(var j=0;j<Math.ceil(W/(56+i*14));j++){ var ax=j*(56+i*14)+18; if(!LINE||j%2===0) g+=P(arch(ax,ry-18-i*3,26+i*5,18+i*3),'none',{st:c.aLL,sw:1.6,lf:'none',lw:1.1}); } }
    return {g:g,hy:fy,ly:fy+40,indoor:1,spots:[[0.24,262,0.86],[0.78,258,0.74],[0.9,284,0.5],[0.08,284,0.5],[0.6,288,0.46]]};
  });

  function windowView(S,x,y,w,h){ var c=S.c, cols=SKY[S.tod]||SKY.day, g='';
    g+=P(arch(x-5,y-5,w+10,h+10),c.woodL)+P(arch(x,y,w,h),LINE?'#fff':cols[1]);
    if(S.tod==='night') g+=P(crescent(x+w*0.62,y+h*0.36,9),'#FFF3C4')+C(x+w*0.25,y+h*0.3,1.6,'#fff',{nl:1})+C(x+w*0.4,y+h*0.62,1.4,'#fff',{nl:1});
    else if(S.tod==='storm'||S.flags.rain) g+=L('M'+n(x+w*0.3)+' '+n(y+h*0.3)+' l-3 9 M'+n(x+w*0.55)+' '+n(y+h*0.4)+' l-3 9 M'+n(x+w*0.75)+' '+n(y+h*0.25)+' l-3 9 M'+n(x+w*0.4)+' '+n(y+h*0.65)+' l-3 9',c.waterD,1.8);
    else g+=C(x+w*0.64,y+h*0.42,9,'#FFD95A')+P('M'+n(x)+' '+n(y+h)+' v-12 q'+n(w*0.3)+' -12 '+n(w*0.55)+' -4 t'+n(w*0.45)+' -2 v18 Z',c.grass,{nl:1});
    g+=L('M'+n(x+w/2)+' '+n(y+2)+' V'+n(y+h)+' M'+n(x)+' '+n(y+h*0.55)+' H'+n(x+w),c.woodL,3);
    g+=R(x-9,y+h,w+18,6,c.wood);
    return g; }
  B.bdef('home',{k:'home|house|بيت|منزل|دار|غرفه|room|family|اسره|عايله|اهل|mother|father|parents|ام|اب|ابي|امي|والدين|والد|والده|ابوين|جد|جده|grandmother|grandfather|brother|sister|اخ|اخت|اخوه|bed|سرير|sleep|نوم|kitchen|مطبخ|table|مايده|سفره|طعام|food|meal|eat|اكل|guest|ضيف|ضيوف|ضيافه|hospitality|door|باب|knock|استيذان|permission|🏠|🏡|🛏|🍽|iftar|افطار|suhoor|سحور|household|living room|window|نافذه'},function(S){
    var W=S.W,c=S.c,g='',fy=210, wx=W*(S.mir?0.7:0.3);
    g+=R(0,0,W,fy,LINE?'#fff':mix(c.aLL,c.cream,0.45));
    if(!LINE){ for(var i=0;i<Math.ceil(W/60);i++) g+=PL(starPts(i*60+30,22,7,3,8,0),c.aL,{op:0.45}); }
    g+=R(0,fy-12,W,12,mix(c.aL,c.cream,0.3),{nl:1});
    g+=R(0,fy,W,90,mix(c.woodL,c.cream,0.45));
    g+=L('M0 '+(fy+30)+' H'+W+' M0 '+(fy+62)+' H'+W,c.woodL,1.4,{op:0.7,nl:1});
    g+=windowView(S,wx-34,54,68,96);
    /* shelf on the other side */
    var sx=W*(S.mir?0.24:0.76);
    g+=R(sx-48,96,96,6,c.wood)+R(sx-38,74,9,22,c.a)+R(sx-28,70,8,26,c.teal)+R(sx-19,78,10,18,c.gold)+P('M'+n(sx+8)+' 96 q-4 -16 6 -22 q10 6 6 22 Z',c.leaf)+R(sx+4,88,18,8,c.brick);
    /* hanging lamp */
    g+=L('M'+n(W*0.5)+' 0 V30',c.goldD,1.6)+P('M'+n(W*0.5-9)+' 30 h18 l5 12 q-14 16 -28 0 Z',c.gold)+C(W*0.5,46,4,c.glow,{nl:1})+C(W*0.5,46,24,c.glow,{op:S.tod==='night'?0.4:0.2,nl:1});
    g+=floorRug(S,fy+8,mix(c.a,c.cream,0.3),c.aLL);
    return {g:g,hy:fy,ly:fy+40,indoor:1,noMir:1,spots:[[S.mir?0.3:0.7,262,0.86],[S.mir?0.76:0.24,262,0.74],[0.5,250,0.5],[S.mir?0.08:0.92,284,0.5],[S.mir?0.92:0.08,284,0.48]]};
  });

  B.bdef('classroom',{k:'class|classroom|فصل|صف|school|مدرسه|مدارس|teacher|معلم|معلمه|استاذ|شيخ|student|students|طالب|طلاب|تلميذ|تلاميذ|lesson|درس|دروس|learn|learning|تعلم|تعليم|study|دراسه|مذاكره|halaqah|حلقه|حلقات|circle|knowledge|علم|علوم|عالم|علماء|scholar*|kuttab|كتاب|library|مكتبه|read|reading|قراءه|اقرا|write|writing|كتابه|lecture|📚|🏫|🎓|blackboard|سبوره|exam|امتحان|homework|واجب|حفظ|memoriz*|حافظ|hadith|حديث|fiqh|فقه|arabic|عربيه|لغه|language|grammar|نحو|poetry|شعر'},function(S){
    var W=S.W,c=S.c,g='',fy=208, bx=W*(S.mir?0.68:0.32);
    g+=R(0,0,W,fy,LINE?'#fff':mix(c.aLL,c.cream,0.5));
    g+=R(0,fy-10,W,10,mix(c.aL,c.cream,0.3),{nl:1})+R(0,fy,W,92,mix(c.sandL,c.cream,0.4));
    /* board */
    g+=R(bx-78,46,156,96,c.wood,{rx:4})+R(bx-71,53,142,82,LINE?'#fff':mix(c.leafD,c.navy,0.25),{rx:2});
    g+=L('M'+n(bx-52)+' 78 h44 M'+n(bx-52)+' 94 h70 M'+n(bx-52)+' 110 h56','#fff',2.4,{op:0.85})+PL(starPts(bx+44,80,11,5,5,0),c.goldL)+R(bx-20,141,34,5,c.cream);
    /* bookshelf */
    var sx=W*(S.mir?0.2:0.8);
    g+=place('bookshelf',sx,fy,150,false,c);
    g+=floorRug(S,fy+10,mix(c.a,c.cream,0.35),c.aLL);
    return {g:g,hy:fy,ly:fy+40,indoor:1,noMir:1,spots:[[S.mir?0.66:0.34,264,0.84],[S.mir?0.3:0.7,268,0.66],[0.5,286,0.46],[S.mir?0.07:0.93,284,0.5],[S.mir?0.93:0.07,284,0.5]]};
  });

  B.bdef('lab',{k:'lab|laboratory|مختبر|معمل|experiment|تجربه|تجارب|science|scientist|scientific|علوم|عالم|chemistry|كيمياء|physics|فيزياء|medicine|طب|طبيب|doctor|physician|pharmacy|صيدله|دواء|invent*|اختراع|مخترع|ابتكار|innovat*|مبتكر|discover*|اكتشاف|engineer*|هندسه|مهندس|machine|اله|الات|robot|روبوت|technology|تقنيه|تكنولوجيا|🔬|🧪|⚗|⚙|dna|cell|خليه|خلايا|microscop*|مجهر|optics|بصريات|algebra|جبر|math*|رياضيات|حساب|future|مستقبل|skill|مهاره|project|مشروع|code|coding|برمجه|computer|حاسوب'},function(S){
    var W=S.W,c=S.c,g='',fy=212,i;
    g+=R(0,0,W,fy,LINE?'#fff':mix(c.aLL,c.cream,0.5))+R(0,fy,W,88,mix(c.stoneL,c.cream,0.5));
    /* shelves with jars */
    for(i=0;i<2;i++){ var y=66+i*58, x0=W*(S.mir?0.08:0.5), wd=W*0.42;
      g+=R(x0,y,wd,6,c.wood);
      for(var j=0;j<Math.floor(wd/40);j++){ var jx=x0+16+j*40, col=[c.teal,c.a,c.gold,c.purple,c.red][(j+i*2)%5], k=(j+i)%3;
        if(k===0) g+=P('M'+n(jx-5)+' '+n(y-30)+' h10 v8 l8 22 h-26 l8 -22 Z',c.white,{st:c.grey,sw:1.2})+P('M'+n(jx-10)+' '+n(y-6)+' l4 -10 h12 l4 10 Z',col,{nl:1});
        else if(k===1) g+=R(jx-9,y-26,18,26,c.white,{rx:3,st:c.grey,sw:1.2})+R(jx-9,y-14,18,14,col,{rx:3,nl:1})+R(jx-7,y-30,14,5,c.wood);
        else g+=R(jx-11,y-22,7,22,col)+R(jx-3,y-27,7,27,c.navy)+R(jx+5,y-19,7,19,c.gold); } }
    /* window */
    g+=windowView(S,W*(S.mir?0.72:0.14),50,62,88);
    /* bench */
    g+=R(W*0.06,fy+18,W*0.88,10,c.wood,{rx:3})+R(W*0.1,fy+28,8,60,c.woodD)+R(W*0.9-8,fy+28,8,60,c.woodD)+R(W*0.06,fy+28,W*0.88,5,c.woodD,{nl:1});
    return {g:g,hy:fy,ly:fy+18,indoor:1,noMir:1,table:fy+18,spots:[[S.mir?0.7:0.3,fy+18,0.74],[S.mir?0.3:0.7,fy+18,0.62],[0.5,fy+18,0.5],[S.mir?0.12:0.88,fy+18,0.46],[S.mir?0.88:0.12,fy+18,0.44]]};
  });

  B.bdef('field',{k:'sport|sports|رياضه|رياضي|play|playing|لعب|يلعب|game|games|لعبه|العاب|ball|كره|football|soccer|run|running|race|جري|ركض|سباق|swim|سباحه|archery|رمايه|riding|فروسيه|ركوب|strong|strength|قوه|قوي|fitness|لياقه|exercise|تمرين|تمارين|team|فريق|champion|بطل|ابطال|match|مباراه|playground|ملعب|⚽|🏃|🏅|🏆|health|صحه|body|جسم|جسد|بدن|muscle|عضلات|energy|نشاط|jump|قفز|wrestling|مصارعه|scout|كشافه|camp|مخيم|leader*|قياده|قايد'},function(S){
    var W=S.W,c=S.c,hy=170,g=sky(S,hy),i;
    g+=P(wave(W,hy,12,3,300,0),mix(c.leafL,c.waterL,0.3));
    for(i=0;i<4;i++){ var x=W*(0.1+i*0.27); g+=E(x,hy+2,26,20,c.leaf)+R(x-3,hy+8,6,16,c.wood); }
    g+=R(0,hy+22,W,300,c.grass);
    for(i=0;i<5;i++) if(i%2) g+=P('M'+n(W*0.5+(i-2.5)*W*0.1)+' '+(hy+22)+' h'+n(W*0.1)+' L'+n(W*0.5+(i-1.5)*W*0.36)+' 300 h-'+n(W*0.36)+' Z',c.grassD,{nl:1});
    g+=L('M0 '+(hy+40)+' H'+W,'#fff',2.4,{op:0.85})+E(W*0.5,hy+84,W*0.16,22,'none',{st:'#fff',sw:2.4,op:0.85,lf:'none'});
    return {g:g,hy:hy,ly:hy+30,spots:[[0.27,254,1],[0.74,246,0.8],[0.5,228,0.52],[0.92,276,0.55],[0.07,278,0.5]]};
  });

  var OUT_DEFAULT=['garden','river','desert','mountains','oasis','city','road','farm'];

  /* ════ COMPOSER ════ */
  var used={};        /* how often an element has been the feature in this document */
  var cache={};
  B.reset=function(){ used={}; cache={}; };

  function pickScene(ctx){
    if(!INDEX) buildIndex();
    var acc={el:{},bd:{},fl:{}};
    var T=ctx.texts||{};
    if(T.id) scoreText(analyse(T.id.replace(/slot|hero|color|puz|scene|cover|sc\b/g,' ').replace(/[-_]/g,' ')),5,acc);
    var Wt=ctx.wt||{};   /* a caller (e.g. story-pics.js) may re-weight the fields */
    if(T.title) scoreText(analyse(T.title),Wt.title||4,acc);
    if(T.scene) scoreText(analyse(T.scene),Wt.scene||3,acc);
    if(T.leaf) scoreText(analyse(T.leaf),Wt.leaf||1,acc);
    return acc;
  }

  B.render=function(ctx){
    var key=ctx.key||ctx.id, plan=cache[key];
    if(!plan){ plan=makePlan(ctx); cache[key]=plan; }
    if(!plan.matched) return null;
    return { svg:draw(plan,ctx), plan:plan };
  };

  function makePlan(ctx){
    var acc=pickScene(ctx), r=seed('plan'+(ctx.key||ctx.id)), k, list=[];
    var sacred=!!acc.fl.sacred || ctx.noPeople;
    var ban=ctx.ban||{};   /* elements/backdrops ('bd:name') the caller does not want, e.g. modern objects in old stories */
    for(k in acc.el){ var el=B.EL[k]; if(!el||ban[k]) continue;
      if(el.z==='P' && sacred) continue;
      var sc=acc.el[k];
      sc=sc/(1+0.45*(used[k]||0));           /* novelty: vary the featured object across a book */
      list.push({name:k,score:sc+r()*0.4,raw:acc.el[k]}); }
    list.sort(function(a,b){ return b.score-a.score; });
    /* backdrop votes */
    var bd={}, i;
    for(k in acc.bd) if(!ban['bd:'+k]) bd[k]=acc.bd[k]*0.9;
    for(i=0;i<Math.min(list.length,5);i++){ var e=B.EL[list[i].name], v=e.bd; if(!v) continue; var wgt=(i===0?2.2:1)*Math.min(list[i].raw,10)/4;
      for(k in v) if(!ban['bd:'+k]) bd[k]=(bd[k]||0)+v[k]*wgt; }
    var best=null,bs=0; for(k in bd){ var val=bd[k]/(1+0.25*(used['bd:'+k]||0)); if(val>bs){ bs=val; best=k; } }
    var matched = list.length>0 || bs>0;
    if(!best){ best=OUT_DEFAULT[Math.floor(r()*OUT_DEFAULT.length)]; }
    var B0=B.BD[best], env = B0.env || (/(mosqueIn|home|classroom|lab)/.test(best)?'i':best==='underwater'?'u':best==='space'?'s':'o');
    /* choose elements compatible with the backdrop */
    var picks=[], cnt={L:0,M:0,S:0,K:0,W:0,E:0,P:0}, cap={L:env==='i'?0:2,M:2,S:3,K:2,W:2,E:1,P:1};
    var hasWater = /^(sea|river|oasis|underwater)$/.test(best);
    for(i=0;i<list.length && picks.length<6;i++){ var d=B.EL[list[i].name], z=d.z;
      if(list[i].raw<1.9 && picks.length>=2) break;       /* weak leaf-only hits: keep the scene uncluttered */
      if(d.env && d.env.indexOf(env)<0) continue;
      if(!d.env && env!=='o' && (z==='L'||z==='M')) continue;
      if(z==='W' && !hasWater) continue;
      if(d.grp && picks.some(function(p){ return B.EL[p].grp===d.grp; })) continue;
      if(cnt[z]>=cap[z]) continue;
      cnt[z]++; picks.push(list[i].name);
    }
    /* fillers so every scene has at least 2–3 objects */
    var fill=(B0.fill||FILL[best]||[]).slice();
    while(picks.length<(list.length?2:3) && fill.length){ var f=fill.splice(Math.floor(r()*fill.length),1)[0]; if(picks.indexOf(f)<0 && B.EL[f] && !ban[f]) picks.push(f); }
    if(picks[0]) used[picks[0]]=(used[picks[0]]||0)+1;
    used['bd:'+best]=(used['bd:'+best]||0)+1;
    /* time of day */
    var f=acc.fl, tod='day';
    var tv={night:f.night||0,dawn:f.dawn||0,sunset:f.sunset||0,storm:(f.storm||0)*1.2}, tb=0;
    for(k in tv) if(tv[k]>tb && tv[k]>=3){ tb=tv[k]; tod=k; }
    if(tod==='day'){ var q=r(); if(q<0.16) tod='sunset'; else if(q<0.3) tod='dawn'; else if(q<0.38) tod='night'; }
    return { matched:matched, bd:best, picks:picks, tod:tod, sacred:!!acc.fl.sacred,
      flags:{ rain:(f.rain||0)>=3||(tod==='storm'&&(f.rain||0)>0), rainbow:(f.rainbow||0)>=1, beam:((f.light||0)>=6||(!!acc.fl.sacred&&(f.light||0)>=3)), snow:(f.snow||0)>=3, lightning:tod==='storm', fullmoon:r()<0.4 },
      top:list.slice(0,8).map(function(x){ return x.name+':'+n(x.raw); }), bdScore:n(bs) };
  }
  var FILL={ desert:['palm','rock','tent','camel','well'], oasis:['rock','well','flowers','birds'], mountains:['tree','rock','birds','flowers'], sea:['boat','birds','rock','palm'],
    river:['tree','flowers','birds','boat','bridge'], garden:['tree','flowers','butterfly','birds'], farm:['wheat','tree','sheep','birds'], city:['palm','lantern','well','birds','stall'],
    haram:['kaaba','birds'], road:['palm','rock','footprints','birds'], space:['telescope','comet'], underwater:['fish','shell'],
    mosqueIn:['prayerRug','mushaf','lantern','tasbih'], home:['cushion','lantern','books','plant'], classroom:['books','desk','globe','inkwell'], lab:['flask','microscope','books','gears'], field:['ball','goal','medal','tree'] };

  function draw(plan,ctx){
    LINE = ctx.kind==='color'; SC=1;
    var W=ctx.W||720, H=300, r=seed('draw'+(ctx.key||ctx.id));
    var tod = LINE?'day':plan.tod;
    var bdDef=B.BD[plan.bd];
    if(plan.bd==='space'||plan.bd==='underwater') tod = plan.bd==='space'?'night':'day';
    var c=palette(ctx.acc,tod);
    var S={W:W,H:H,rnd:r,tod:tod,c:c,flags:plan.flags,mir:r()<0.5,sunLeft:r()<0.5,clouds:[]};
    var bd=bdDef.d(S), g=bd.g, i;
    var spots=(bd.spots||SPOTS).map(function(s){ return s.slice(); });
    if(S.mir && !bd.noMir) spots.forEach(function(s){ s[0]=1-s[0]; });
    var items=[], si=0, wi=0, ki=0, li=0;
    var skyY = bd.indoor?0:Math.min(bd.hy,170);
    var skySpots=[[S.sunLeft?0.62:0.38,skyY*0.42],[S.sunLeft?0.84:0.16,skyY*0.6],[0.5,skyY*0.25]];
    plan.picks.forEach(function(name,rank){
      var el=B.EL[name], z=el.z, x,y,h,sp, flip=r()<0.5 && !el.noflip;
      if(z==='K'){ if(bd.indoor||bd.under){ return; } sp=skySpots[ki++]; if(!sp) return; x=W*sp[0]; y=sp[1]+ (el.S||60)*0.5; h=(el.S||60)*(rank===0?1.15:0.9); if(y<h+6) y=h+6; items.push({n:name,x:x,y:y,h:h,f:flip,o:-1}); return; }
      if(z==='W'){ sp=(bd.water||[])[wi++]; if(!sp) return; h=(el.S||90)*sp[2]*(bd.under?0.9:1.1); items.push({n:name,x:W*(bd.noMir||!S.mir?sp[0]:1-sp[0]),y:sp[1]+(bd.under?h*0.5:h*0.12),h:h,f:flip,o:sp[1]}); return; }
      if(z==='E'){ /* emblem: floats in a soft glow */
        var ex=W*(bd.center?0.5:(S.mir?0.66:0.34)), ey=bd.indoor?128:104; h=(el.S||70)*(rank===0?1.15:0.9);
        if(rank!==0){ ex=W*(S.mir?0.3:0.7); ey=bd.indoor?120:96; }
        items.push({n:name,x:ex,y:ey+h*0.5,h:h,f:false,o:-0.5,glow:1}); return; }
      if(z==='L' && bd.far && rank>0){ sp=bd.far[li++]; if(!sp) return; h=(el.S||150)*sp[2]; items.push({n:name,x:W*sp[0],y:sp[1],h:h,f:flip,o:sp[1]-200}); return; }
      sp=spots[si++]; if(!sp) return;
      var k=sp[2];
      h=(el.S||80)*(0.42+0.58*k);
      if(rank===0 && (el.S||80)<96) h=Math.min(128,(el.S||80)*1.5)*(0.5+0.5*k);
      if(bd.indoor) h=Math.min(h,(z==='M'?150:120));
      x=W*sp[0]; y=sp[1];
      if(z==='L'){ y=bd.ly+(rank===0?8:0)+(k-0.7)*14; if(bd.isWater) { y=sp[1]-6; h*=0.8; } }
      if(el.table==null && bd.table){ }
      var hw=h*(el.ar||0.8)*0.5; if(x-hw<4) x=hw+4; if(x+hw>W-4) x=W-hw-4;
      items.push({n:name,x:x,y:y,h:h,f:flip,o:y+(z==='L'?-60:0)});
    });
    items.sort(function(a,b){ return a.o-b.o; });
    items.forEach(function(it){
      if(it.glow && !LINE) g+=C(it.x,it.y-it.h*0.5,it.h*0.78,c.glow,{op:0.32})+C(it.x,it.y-it.h*0.5,it.h*0.6,'#fff',{op:0.35});
      if(it.o>0 && !LINE && !bd.under) g+=E(it.x,it.y+1,it.h*(B.EL[it.n].ar||0.8)*0.42,Math.max(2.5,it.h*0.045),c.shadow,{op:0.13});
      g+=place(it.n,it.x,it.y,it.h,it.f,c);
    });
    if(!bd.indoor && !bd.under && !bd.spaceSky){ if(plan.flags.rain||tod==='storm') g+=rainLayer(S); if(plan.flags.snow) g+=snowLayer(S); }
    if(ctx.kind==='cover' && !LINE){
      g+='<rect x="7" y="7" width="'+(W-14)+'" height="286" rx="12" fill="none" stroke="#E3B233" stroke-width="3"/><rect x="13" y="13" width="'+(W-26)+'" height="274" rx="8" fill="none" stroke="#F8DC7E" stroke-width="1.2" stroke-dasharray="2 5"/>';
    }
    if(LINE) g+='<rect x="3" y="3" width="'+(W-6)+'" height="294" rx="12" fill="none" stroke="'+INK+'" stroke-width="2.2"/><rect x="9" y="9" width="'+(W-18)+'" height="282" rx="8" fill="none" stroke="'+INK+'" stroke-width="1" stroke-dasharray="2 5"/>';
    var out='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' 300" preserveAspectRatio="xMidYMid '+(LINE?'meet':'slice')+'">'+(LINE?'<clipPath id="cp"><rect x="3" y="3" width="'+(W-6)+'" height="294" rx="12"/></clipPath><rect width="'+W+'" height="300" fill="#fff"/><g clip-path="url(#cp)">':'')+g+(LINE?'</g>':'')+'</svg>';
    LINE=false; SC=1;
    return out;
  }

  /* draw one element alone (used by the test gallery) */
  B.sample=function(name,line,acc){
    LINE=!!line; SC=1; var c=palette(acc||'#1A9B7B','day');
    var g='<rect width="120" height="120" fill="'+(line?'#fff':'#EAF6FB')+'"/>'+(line?'':'<rect y="100" width="120" height="20" fill="#F6E2B6"/>')+place(name,60,104,84,false,c);
    LINE=false; return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">'+g+'</svg>';
  };
})();
