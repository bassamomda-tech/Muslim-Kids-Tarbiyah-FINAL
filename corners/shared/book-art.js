/* ════════════════════════════════════════════════════════════════
   book-art.js — original decorative artwork generator for the
   publish-ready storybooks. Fills every empty <image-slot> with
   self-contained Islamic-geometric SVG art (girih rosettes, mihrab
   arches, colouring mandalas, mazes), themed by the page's accent
   colour and the slot kind inferred from its id. A user can still
   drop real art later — it overrides this default `src`.
   Load AFTER the book renderer (rihla-book / oasis-book / chapter-book /
   district-book). No external deps.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── palette ── */
  var NAVY = '#0A2540', GOLD = '#D4A017', PURPLE = '#8E44AD',
      TEAL = '#1A9B7B', CREAM = '#FEF5DC', INK = '#10243d';

  /* ── colour utils (hex only) ── */
  function hx(c){ c=String(c||'').trim(); if(c[0]!=='#') return GOLD;
    if(c.length===4) c='#'+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]; return c.slice(0,7); }
  function rgb(c){ c=hx(c); return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]; }
  function hex(a){ return '#'+a.map(function(v){ v=Math.max(0,Math.min(255,Math.round(v))); return (v<16?'0':'')+v.toString(16); }).join(''); }
  function mix(c1,c2,t){ var a=rgb(c1),b=rgb(c2); return hex([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]); }
  function lighten(c,t){ return mix(c,'#ffffff',t); }
  function darken(c,t){ return mix(c,'#000000',t); }

  /* ── seeded rng from string ── */
  function seed(str){ var h=2166136261; for(var i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } var s=h>>>0;
    return function(){ s^=s<<13; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }

  /* ── geometry ── */
  // n-point star (2n vertices alternating outer/inner radius)
  function star(cx,cy,R,r,n,rot){
    rot=rot||0; var p=[];
    for(var i=0;i<n*2;i++){ var rad=(i%2?r:R), a=rot+i*Math.PI/n; p.push((cx+rad*Math.sin(a)).toFixed(1)+','+(cy-rad*Math.cos(a)).toFixed(1)); }
    return p.join(' ');
  }
  function poly(cx,cy,R,n,rot){ rot=rot||0; var p=[]; for(var i=0;i<n;i++){ var a=rot+i*2*Math.PI/n; p.push((cx+R*Math.sin(a)).toFixed(1)+','+(cy-R*Math.cos(a)).toFixed(1)); } return p.join(' '); }
  // pointed (ogee-ish) arch path
  function arch(x,y,w,h){
    var cx=x+w/2, top=y, bot=y+h, sh=h*0.45;
    return 'M'+x+' '+bot+' L'+x+' '+(y+sh)+
      ' Q'+x+' '+top+' '+cx+' '+top+
      ' Q'+(x+w)+' '+top+' '+(x+w)+' '+(y+sh)+
      ' L'+(x+w)+' '+bot+' Z';
  }
  function crescent(cx,cy,r){
    return '<path d="M'+(cx)+' '+(cy-r)+' A'+r+' '+r+' 0 1 0 '+(cx+0.2*r)+' '+(cy+r*0.96)+
      ' A'+(r*0.82)+' '+(r*0.82)+' 0 1 1 '+(cx)+' '+(cy-r)+' Z"';
  }

  /* ── a girih rosette medallion ── */
  function rosette(cx,cy,R,cA,cB,cC,strokeOnly){
    var s = strokeOnly;
    function fp(pts,fill,stroke,sw){ return '<polygon points="'+pts+'" '+(s?'fill="none"':'fill="'+fill+'"')+' stroke="'+(stroke||'none')+'" stroke-width="'+(sw||0)+'" stroke-linejoin="round"/>'; }
    var g='';
    g+= '<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="'+(s?'none':lighten(cA,0.78))+'" stroke="'+cA+'" stroke-width="'+(s?2:2.5)+'"/>';
    g+= '<circle cx="'+cx+'" cy="'+cy+'" r="'+(R*0.86)+'" fill="none" stroke="'+(s?INK:cA)+'" stroke-width="'+(s?2:1.5)+'" stroke-dasharray="'+(s?'none':'1 6')+'" stroke-linecap="round"/>';
    // outer petals
    var n=12, i;
    for(i=0;i<n;i++){ var a=i*2*Math.PI/n; var px=cx+R*0.72*Math.sin(a), py=cy-R*0.72*Math.cos(a);
      g+= '<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="'+(R*0.13)+'" '+(s?'fill="none"':'fill="'+(i%2?cB:cC)+'"')+' stroke="'+(s?INK:darken(i%2?cB:cC,0.15))+'" stroke-width="'+(s?1.8:1)+'"/>'; }
    // two overlaid squares (8-point girih star)
    g+= fp(star(cx,cy,R*0.62,R*0.26,8,0), cA, s?INK:darken(cA,0.18), s?2:1.5);
    g+= fp(poly(cx,cy,R*0.40,4,Math.PI/4), cB, s?INK:darken(cB,0.18), s?2:1.2);
    g+= fp(poly(cx,cy,R*0.40,4,0), s?'none':cC, s?INK:darken(cC,0.18), s?2:1.2);
    g+= '<circle cx="'+cx+'" cy="'+cy+'" r="'+(R*0.14)+'" '+(s?'fill="none"':'fill="'+GOLD+'"')+' stroke="'+(s?INK:darken(GOLD,0.2))+'" stroke-width="'+(s?2:1.2)+'"/>';
    return g;
  }

  /* ── scattered stars ── */
  function stars(rnd,w,h,n,col,op){
    var g=''; for(var i=0;i<n;i++){ var x=rnd()*w, y=rnd()*h, r=2+rnd()*4;
      g+='<polygon points="'+star(x,y,r,r*0.4,5,rnd()*6)+'" fill="'+col+'" opacity="'+(op||(0.4+rnd()*0.5)).toFixed(2)+'"/>'; }
    return g;
  }

  function frame(w,h,col,inset,s){
    var i=inset||10;
    return '<rect x="'+i+'" y="'+i+'" width="'+(w-2*i)+'" height="'+(h-2*i)+'" rx="14" fill="none" stroke="'+col+'" stroke-width="'+(s?2.5:2)+'"/>'+
      '<rect x="'+(i+6)+'" y="'+(i+6)+'" width="'+(w-2*i-12)+'" height="'+(h-2*i-12)+'" rx="9" fill="none" stroke="'+col+'" stroke-width="1" stroke-dasharray="2 5" opacity="0.8"/>';
  }

  function svg(w,h,inner){
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid slice">'+inner+'</svg>';
  }
  function svgFit(w,h,inner){
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid meet">'+inner+'</svg>';
  }
  function enc(s){ return 'data:image/svg+xml,'+encodeURIComponent(s).replace(/%20/g,' ').replace(/%2F/g,'/'); }

  /* ════ COVER ════ */
  function artCover(acc,key){
    var rnd=seed('cover'+key), w=400,h=300;
    var g='<defs><radialGradient id="cg" cx="50%" cy="38%" r="75%">'+
      '<stop offset="0%" stop-color="'+lighten(NAVY,0.18)+'"/><stop offset="100%" stop-color="'+NAVY+'"/></radialGradient></defs>';
    g+='<rect width="'+w+'" height="'+h+'" fill="url(#cg)"/>';
    g+=stars(rnd,w,h,40,lighten(GOLD,0.2),0);
    // dome + crescent behind
    g+='<path d="M140 120 Q200 30 260 120 Z" fill="'+darken(acc,0.1)+'" opacity="0.55"/>';
    g+='<rect x="150" y="118" width="100" height="60" fill="'+darken(acc,0.15)+'" opacity="0.5"/>';
    g+='<g fill="'+GOLD+'">'+crescent(200,58,15)+' /></g>';
    // central rosette
    g+='<g transform="translate(0,18)">'+rosette(200,150,92,acc,PURPLE,TEAL,false)+'</g>';
    // rays
    for(var i=0;i<24;i++){ var a=i*2*Math.PI/24, r1=120,r2=132;
      g+='<line x1="'+(200+r1*Math.sin(a)).toFixed(1)+'" y1="'+(168-r1*Math.cos(a)).toFixed(1)+'" x2="'+(200+r2*Math.sin(a)).toFixed(1)+'" y2="'+(168-r2*Math.cos(a)).toFixed(1)+'" stroke="'+lighten(GOLD,0.1)+'" stroke-width="2" opacity="0.6" stroke-linecap="round"/>'; }
    g+=frame(w,h,GOLD,12,true);
    return enc(svg(w,h,g));
  }

  /* ════ HERO / STORY ════ */
  function artHero(acc,id){
    var rnd=seed(id), w=400,h=300;
    var bg=lighten(acc,0.8), bg2=CREAM;
    var g='<defs><linearGradient id="hg'+'" x1="0" y1="0" x2="0" y2="1">'+
      '<stop offset="0%" stop-color="'+lighten(acc,0.7)+'"/><stop offset="100%" stop-color="'+bg2+'"/></linearGradient></defs>';
    g+='<rect width="'+w+'" height="'+h+'" fill="url(#hg)"/>';
    g+=stars(rnd,w,120,14,acc,0.25);
    // ground
    g+='<path d="M0 250 Q200 230 400 250 L400 300 L0 300 Z" fill="'+lighten(TEAL,0.55)+'"/>';
    g+='<path d="M0 262 Q200 244 400 262" fill="none" stroke="'+TEAL+'" stroke-width="2" opacity="0.5"/>';
    // central mihrab arch
    var ax=150,ay=70,aw=100,ah=170;
    g+='<path d="'+arch(ax,ay,aw,ah)+'" fill="'+lighten(acc,0.35)+'" stroke="'+darken(acc,0.1)+'" stroke-width="3"/>';
    g+='<path d="'+arch(ax+12,ay+12,aw-24,ah-12)+'" fill="'+lighten(GOLD,0.55)+'" stroke="'+GOLD+'" stroke-width="2"/>';
    // sunburst inside
    for(var i=0;i<16;i++){ var a=i*2*Math.PI/16; g+='<line x1="200" y1="150" x2="'+(200+70*Math.sin(a)).toFixed(1)+'" y2="'+(150-70*Math.cos(a)).toFixed(1)+'" stroke="'+lighten(GOLD,0.2)+'" stroke-width="2.5" opacity="0.5" stroke-linecap="round"/>'; }
    g+='<polygon points="'+star(200,150,30,12,8,0)+'" fill="'+acc+'" stroke="'+darken(acc,0.2)+'" stroke-width="1.5"/>';
    g+='<circle cx="200" cy="150" r="8" fill="'+GOLD+'"/>';
    // side lanterns
    [ax-28,ax+aw+28].forEach(function(lx){
      g+='<line x1="'+lx+'" y1="60" x2="'+lx+'" y2="86" stroke="'+darken(acc,0.1)+'" stroke-width="2"/>';
      g+='<polygon points="'+star(lx,104,16,9,6,0)+'" fill="'+lighten(PURPLE,0.3)+'" stroke="'+PURPLE+'" stroke-width="1.5"/>';
      g+='<circle cx="'+lx+'" cy="104" r="4" fill="'+GOLD+'"/>';
    });
    // corner tiles
    [[34,34],[366,34]].forEach(function(c){ g+='<polygon points="'+star(c[0],c[1],16,7,8,0)+'" fill="'+lighten(acc,0.4)+'" stroke="'+acc+'" stroke-width="1.5"/>'; });
    // small flowers on ground
    for(var k=0;k<5;k++){ var fx=40+k*82, fy=268; g+='<g transform="translate('+fx+','+fy+')"><polygon points="'+star(0,0,9,4,6,0)+'" fill="'+(k%2?PURPLE:GOLD)+'" opacity="0.85"/><circle r="3" fill="'+CREAM+'"/></g>'; }
    g+=frame(w,h,darken(acc,0.05),10,false);
    return enc(svg(w,h,g));
  }

  /* ════ PUZZLE / ACTIVITY (maze) ════ */
  function artPuz(acc,id){
    var rnd=seed(id), w=400,h=300;
    var g='<rect width="'+w+'" height="'+h+'" fill="'+CREAM+'"/>';
    g+='<rect width="'+w+'" height="'+h+'" fill="'+lighten(acc,0.86)+'"/>';
    // concentric circular maze
    var cx=200,cy=150;
    for(var r=28;r<=120;r+=23){
      var gap=0.5+rnd()*1.0, gs=rnd()*Math.PI*2;
      g+='<path d="'+arcPath(cx,cy,r,gs,gs+2*Math.PI-gap)+'" fill="none" stroke="'+acc+'" stroke-width="3" stroke-linecap="round"/>';
    }
    // radial spokes (partial)
    for(var i=0;i<8;i++){ var a=i*Math.PI/4+0.2; var r1=28+(i%2)*23, r2=120-(i%3)*23;
      g+='<line x1="'+(cx+r1*Math.sin(a)).toFixed(1)+'" y1="'+(cy-r1*Math.cos(a)).toFixed(1)+'" x2="'+(cx+r2*Math.sin(a)).toFixed(1)+'" y2="'+(cy-r2*Math.cos(a)).toFixed(1)+'" stroke="'+acc+'" stroke-width="3" stroke-linecap="round" opacity="0.9"/>'; }
    // start (outer) + finish (centre)
    g+='<circle cx="'+cx+'" cy="'+(cy-132)+'" r="11" fill="'+TEAL+'"/><text x="'+cx+'" y="'+(cy-128)+'" font-size="11" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">★</text>';
    g+='<polygon points="'+star(cx,cy,15,6,8,0)+'" fill="'+GOLD+'" stroke="'+darken(GOLD,0.2)+'" stroke-width="1.5"/>';
    g+=stars(rnd,w,h,8,acc,0.18);
    g+=frame(w,h,acc,10,false);
    return enc(svg(w,h,g));
  }
  function arcPath(cx,cy,r,a0,a1){
    var x0=cx+r*Math.cos(a0), y0=cy+r*Math.sin(a0), x1=cx+r*Math.cos(a1), y1=cy+r*Math.sin(a1);
    var large=(a1-a0)>Math.PI?1:0;
    return 'M'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+r+' '+r+' 0 '+large+' 1 '+x1.toFixed(1)+' '+y1.toFixed(1);
  }

  /* ════ COLORING (line art) ════ */
  function artColor(id){
    var w=400,h=440, cx=200, cy=210;
    var g='<rect width="'+w+'" height="'+h+'" fill="#ffffff"/>';
    // scalloped border
    var scal=''; var n=28;
    for(var i=0;i<n;i++){ var a=i*2*Math.PI/n; scal+= (i?'':'M')+(cx+185*Math.sin(a)).toFixed(1)+' '+(cy+185*Math.cos(a)).toFixed(1)+(i?' ':' '); }
    g+='<circle cx="'+cx+'" cy="'+cy+'" r="190" fill="none" stroke="'+INK+'" stroke-width="2.5"/>';
    // petal ring (scallops)
    var petals=''; var m=24;
    for(var j=0;j<m;j++){ var a0=j*2*Math.PI/m, a1=(j+0.5)*2*Math.PI/m, a2=(j+1)*2*Math.PI/m, R=178,Rin=160;
      petals+= 'M'+(cx+Rin*Math.sin(a0)).toFixed(1)+' '+(cy-Rin*Math.cos(a0)).toFixed(1)+
        ' Q'+(cx+R*Math.sin(a1)).toFixed(1)+' '+(cy-R*Math.cos(a1)).toFixed(1)+' '+(cx+Rin*Math.sin(a2)).toFixed(1)+' '+(cy-Rin*Math.cos(a2)).toFixed(1); }
    g+='<path d="'+petals+'" fill="none" stroke="'+INK+'" stroke-width="2"/>';
    // mandala rings (stroke only)
    g+=rosette(cx,cy,140,'#000','#000','#000',true);
    g+=rosette(cx,cy,86,'#000','#000','#000',true);
    // inner petals
    var ip=''; var k=16;
    for(var p=0;p<k;p++){ var a=p*2*Math.PI/k; var px=cx+118*Math.sin(a), py=cy-118*Math.cos(a);
      ip+='<ellipse cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" rx="8" ry="16" fill="none" stroke="'+INK+'" stroke-width="1.6" transform="rotate('+(p*360/k)+' '+px.toFixed(1)+' '+py.toFixed(1)+')"/>'; }
    g+=ip;
    g+='<polygon points="'+star(cx,cy,34,13,8,0)+'" fill="none" stroke="'+INK+'" stroke-width="2"/>';
    g+='<circle cx="'+cx+'" cy="'+cy+'" r="12" fill="none" stroke="'+INK+'" stroke-width="2"/>';
    // four corner sprigs
    [[40,40,0],[360,40,90],[360,400,180],[40,400,270]].forEach(function(c){
      g+='<g transform="translate('+c[0]+','+c[1]+') rotate('+c[2]+')"><path d="M0 0 Q20 -6 30 -22 M0 0 Q22 2 38 -4 M0 0 Q10 -18 4 -34" fill="none" stroke="'+INK+'" stroke-width="1.8" stroke-linecap="round"/>'+
        '<polygon points="'+star(0,0,8,3,6,0)+'" fill="none" stroke="'+INK+'" stroke-width="1.6"/></g>'; });
    g+='<rect x="8" y="8" width="'+(w-16)+'" height="'+(h-16)+'" rx="14" fill="none" stroke="'+INK+'" stroke-width="1.4" stroke-dasharray="2 5"/>';
    return enc(svgFit(w,h,g));
  }

  /* ════ DEFAULT medallion ════ */
  function artDefault(acc,id){
    var rnd=seed(id), w=400,h=300;
    var g='<rect width="'+w+'" height="'+h+'" fill="'+lighten(acc,0.82)+'"/>';
    g+='<rect width="'+w+'" height="'+h+'" fill="none"/>';
    g+=stars(rnd,w,h,12,acc,0.18);
    g+='<g transform="translate(0,0)">'+rosette(200,150,98,acc,PURPLE,TEAL,false)+'</g>';
    g+=frame(w,h,darken(acc,0.05),10,false);
    return enc(svg(w,h,g));
  }

  /* ── kind inference ── */
  function kindOf(id){
    id=(id||'').toLowerCase();
    if(/cover/.test(id)) return 'cover';
    if(/(color|colour|line|trace)/.test(id)) return 'color';
    if(/(puz|maze|activity|game|find|dots|search)/.test(id)) return 'puz';
    if(/(hero|story|scene|map|intro|moment)/.test(id)) return 'hero';
    return 'hero';
  }
  function accentOf(el){
    var n=el;
    while(n && n!==document.body){
      var c=n.style && n.style.getPropertyValue && n.style.getPropertyValue('--acc');
      if(c) return hx(c.trim());
      n=n.parentElement;
    }
    // fallback: cycle a pleasing palette by DOM index
    var pal=[GOLD,TEAL,PURPLE,'#C0392B','#2A6FDB','#E67E22'];
    var all=[].slice.call(document.querySelectorAll('image-slot'));
    return pal[all.indexOf(el)%pal.length];
  }

  function fill(el){
    if(!el || el.getAttribute('data-art')) return;
    // don't override a user-dropped image or an author src already set
    if(el.getAttribute('src')) return;
    var id=el.id||'', kind=kindOf(id), acc=accentOf(el), src;
    if(kind==='cover') src=artCover(acc,id||'cover');
    else if(kind==='color'){ src=artColor(id); el.setAttribute('fit','contain'); }
    else if(kind==='puz') src=artPuz(acc,id);
    else if(kind==='hero') src=artHero(acc,id);
    else src=artDefault(acc,id);
    el.setAttribute('src',src);
    el.setAttribute('data-art','1');
  }

  function run(){
    var slots=document.querySelectorAll('image-slot');
    for(var i=0;i<slots.length;i++) fill(slots[i]);
  }
  // run after the book renderer appends its slots
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){ setTimeout(run,0); });
  else setTimeout(run,0);
  // re-run once more in case slots are added late
  window.addEventListener('load',function(){ setTimeout(run,30); });
  window.BookArt={run:run,fill:fill};
})();
