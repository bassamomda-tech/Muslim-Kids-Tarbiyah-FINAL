/* corners/stories/mini-games.js — ألعاب تفاعلية صغيرة لقصص الصغار (٣–٦)
   الأنواع: order (ترتيب) · memory (بطاقات الذاكرة) · find (ابحث وجد)
            maze (متاهة) · pairs (توصيل) · sort (فرز في سلّتين)
   الاستخدام: MiniGames.render(container, gameData, onWin) */
(function(){
  var AR=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; } return a; }
  function shake(el){ el.classList.add('no'); setTimeout(function(){ el.classList.remove('no'); },450); }

  /* ترتيب أحداث القصة: المس البطاقات بالترتيب الصحيح */
  function order(area,g,win){
    var n=g.items.length, k=0;
    var idx=shuffle(g.items.map(function(_,i){ return i; }));
    if(idx.every(function(v,i){ return v===i; })) idx.reverse();
    var wrap=document.createElement('div'); wrap.className='mg-order'; area.appendChild(wrap);
    idx.forEach(function(i){
      var b=document.createElement('button'); b.className='mg-ocard';
      b.innerHTML='<span class="oe">'+g.items[i].e+'</span><span>'+g.items[i].t+'</span>';
      b.addEventListener('click',function(){
        if(b.classList.contains('ok')) return;
        if(i===k){
          b.classList.add('ok');
          var m=document.createElement('span'); m.className='num'; m.textContent=AR[k+1];
          b.appendChild(m); k++;
          if(k===n) win();
        }else shake(b);
      });
      wrap.appendChild(b);
    });
  }

  /* بطاقات الذاكرة: اقلب واعثر على الأزواج */
  function memory(area,g,win){
    var cards=shuffle(g.pairs.concat(g.pairs));
    var grid=document.createElement('div'); grid.className='mg-grid mg-mem';
    grid.style.gridTemplateColumns='repeat(3,54px)';
    area.appendChild(grid);
    var open=[], lock=false, matched=0;
    cards.forEach(function(e){
      var b=document.createElement('button'); b.className='mg-cell'; b.textContent='❓';
      b.addEventListener('click',function(){
        if(lock||b.classList.contains('up')||b.classList.contains('ok')) return;
        b.classList.add('up'); b.textContent=e; open.push({b:b,e:e});
        if(open.length===2){
          if(open[0].e===open[1].e){
            open.forEach(function(o){ o.b.classList.add('ok'); });
            matched++; open=[];
            if(matched===g.pairs.length) win();
          }else{
            lock=true;
            setTimeout(function(){
              open.forEach(function(o){ o.b.classList.remove('up'); o.b.textContent='❓'; });
              open=[]; lock=false;
            },700);
          }
        }
      });
      grid.appendChild(b);
    });
  }

  /* ابحث وجد: المس كل الأهداف المختبئة */
  function find(area,g,win){
    var size=g.size||12, found=0;
    var cells=[]; for(var i=0;i<g.count;i++) cells.push(true);
    while(cells.length<size) cells.push(false);
    cells=shuffle(cells);
    var grid=document.createElement('div'); grid.className='mg-grid';
    grid.style.gridTemplateColumns='repeat(4,54px)';
    area.appendChild(grid);
    var prog=document.createElement('div'); prog.className='mg-progress';
    function upd(){ prog.textContent='وجدتَ '+AR[found]+' من '+AR[g.count]; }
    cells.forEach(function(isT){
      var b=document.createElement('button'); b.className='mg-cell';
      b.textContent = isT ? g.target : g.distractors[Math.floor(Math.random()*g.distractors.length)];
      b.addEventListener('click',function(){
        if(b.classList.contains('faded')) return;
        if(isT){ b.classList.add('ok','faded'); found++; upd(); if(found===g.count) win(); }
        else shake(b);
      });
      grid.appendChild(b);
    });
    area.appendChild(prog); upd();
  }

  /* متاهة: حرّك البطل بالأسهم أو بلمس الخانة المجاورة */
  function maze(area,g,win){
    var map=g.map.map(function(r){ return r.split(''); });
    var R=map.length, C=map[0].length, pr,pc,gr,gc, over=false;
    map.forEach(function(row,r){ row.forEach(function(ch,c){
      if(ch==='S'){ pr=r; pc=c; } if(ch==='G'){ gr=r; gc=c; }
    }); });
    var grid=document.createElement('div'); grid.className='mg-maze'; grid.dir='ltr';
    grid.style.gridTemplateColumns='repeat('+C+',46px)';
    area.appendChild(grid);
    var cellEls=[];
    map.forEach(function(row,r){ row.forEach(function(ch,c){
      var d=document.createElement('div'); d.className='mg-mz'+(ch==='#'?' wall':'');
      d.addEventListener('click',function(){ tryMove(r-pr,c-pc,true); });
      grid.appendChild(d); cellEls.push(d);
    }); });
    function draw(){
      map.forEach(function(row,r){ row.forEach(function(ch,c){
        cellEls[r*C+c].textContent =
          (r===pr&&c===pc) ? g.avatar :
          (r===gr&&c===gc) ? g.goal :
          (ch==='#' ? (g.wall||'🧱') : '');
      }); });
    }
    function tryMove(dr,dc,fromTap){
      if(over) return;
      if(fromTap && Math.abs(dr)+Math.abs(dc)!==1) return;
      var nr=pr+dr, nc=pc+dc;
      if(nr<0||nc<0||nr>=R||nc>=C||map[nr][nc]==='#') return;
      pr=nr; pc=nc; draw();
      if(pr===gr&&pc===gc){ over=true; win(); }
    }
    var ctrl=document.createElement('div'); ctrl.className='mg-ctrl'; ctrl.dir='ltr';
    [['⬅️',0,-1],['⬆️',-1,0],['⬇️',1,0],['➡️',0,1]].forEach(function(a){
      var b=document.createElement('button'); b.type='button'; b.textContent=a[0];
      b.addEventListener('click',function(){ tryMove(a[1],a[2]); });
      ctrl.appendChild(b);
    });
    area.appendChild(ctrl);
    draw();
  }

  /* توصيل: المس شيئاً من اليمين ثم ما يناسبه من اليسار */
  function pairs(area,g,win){
    var grid=document.createElement('div'); grid.className='mg-pairs'; area.appendChild(grid);
    var sel=null, selBtn=null, matched=0, n=g.pairs.length;
    var lefts=g.pairs.map(function(p,i){ return {t:p[0],i:i}; });
    var rights=shuffle(g.pairs.map(function(p,i){ return {t:p[1],i:i}; }));
    var lbs=[];
    for(var r=0;r<n;r++){
      (function(L,Rr){
        var lb=document.createElement('button'); lb.className='mg-p'; lb.textContent=L.t;
        lb.addEventListener('click',function(){
          if(lb.classList.contains('ok')) return;
          lbs.forEach(function(x){ x.classList.remove('sel'); });
          lb.classList.add('sel'); sel=L.i; selBtn=lb;
        });
        var rb=document.createElement('button'); rb.className='mg-p'; rb.textContent=Rr.t;
        rb.addEventListener('click',function(){
          if(rb.classList.contains('ok')||sel===null) return;
          if(Rr.i===sel){
            rb.classList.add('ok'); selBtn.classList.remove('sel'); selBtn.classList.add('ok');
            sel=null; selBtn=null; matched++;
            if(matched===n) win();
          }else shake(rb);
        });
        lbs.push(lb);
        grid.appendChild(lb); grid.appendChild(rb);
      })(lefts[r],rights[r]);
    }
  }

  /* فرز: ضع كل شيء في سلّته الصحيحة */
  function sort(area,g,win){
    var k=0;
    var item=document.createElement('div'); item.className='mg-sort-item';
    var label=document.createElement('div'); label.className='mg-sort-label';
    var bins=document.createElement('div'); bins.className='mg-bins';
    var prog=document.createElement('div'); prog.className='mg-progress';
    area.appendChild(item); area.appendChild(label); area.appendChild(bins); area.appendChild(prog);
    g.bins.forEach(function(t,bi){
      var b=document.createElement('button'); b.className='mg-bin'; b.textContent=t;
      b.addEventListener('click',function(){
        if(k>=g.items.length) return;
        if(g.items[k].bin===bi){
          b.classList.add('ok'); setTimeout(function(){ b.classList.remove('ok'); },400);
          k++; show();
          if(k===g.items.length) win();
        }else shake(b);
      });
      bins.appendChild(b);
    });
    function show(){
      if(k<g.items.length){
        item.textContent=g.items[k].e; label.textContent=g.items[k].t;
        prog.textContent=AR[k+1]+' من '+AR[g.items.length];
      }else{ item.textContent='🎉'; label.textContent=''; prog.textContent=''; }
    }
    show();
  }

  window.MiniGames = {
    render:function(box,g,onWin){
      box.innerHTML='';
      var head=document.createElement('div'); head.className='mg-title'; head.textContent=g.title||'هيا نلعب!';
      box.appendChild(head);
      var area=document.createElement('div'); area.className='mg-area'; box.appendChild(area);
      var won=false;
      var fns={order:order,memory:memory,find:find,maze:maze,pairs:pairs,sort:sort};
      fns[g.type](area,g,function(){
        if(won) return; won=true;
        var y=document.createElement('div'); y.className='rd-yay'; y.textContent='🎉 '+(g.yay||'أحسنت! أتممتَ اللعبة');
        box.appendChild(y);
        onWin();
      });
    }
  };
})();
