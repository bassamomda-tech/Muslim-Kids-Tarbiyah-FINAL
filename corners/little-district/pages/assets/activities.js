/* ═══════════════════════════════════════════════════════════════
   ACTIVITIES — Reusable mini-game renderers.
   Each renderer is called as:
     Activities[type](el, data, ctx)
   where ctx = { houseId, levelId, lang, onScore(pts), maxScore }
   ─────────────────────────────────────────────────────────────── */

window.Activities = (function () {

  /* ───────── helpers ───────── */
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function arEn(d, lang) {
    if (d == null) return '';
    if (typeof d === 'string') return d;
    return d[lang] || d.ar || d.en || '';
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function awardOnce(ctx, key, pts) {
    const k = `act:${ctx.houseId}:${ctx.actId}:${ctx.levelId}:${key}`;
    if (sessionStorage.getItem(k)) return false;
    sessionStorage.setItem(k, '1');
    ctx.onScore && ctx.onScore(pts);
    return true;
  }
  function feedback(host, msg, ok) {
    let f = host.querySelector('.game-fb');
    if (!f) {
      f = el('div', 'game-fb');
      f.style.cssText = 'min-height:22px;text-align:center;font-weight:800;font-size:.84rem;margin-top:.4rem';
      host.appendChild(f);
    }
    f.style.color = ok ? '#2E7D32' : '#C62828';
    f.textContent = msg;
  }

  /* ───────── 1. Fill blanks ─────────
     data = { wordBank:[ar...], items:[ { prefix, answer, suffix } ] } */
  function fillBlanks(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'📝 أكمل الفراغات':'📝 Fill in the blanks'));
    if (data.wordBank && data.wordBank.length) {
      const bank = el('div', 'word-bank',
        '<span style="color:#999;margin-inline-end:.4rem">' + (ctx.lang==='ar'?'الكلمات:':'Words:') + '</span>' +
        data.wordBank.map(w => `<b>${w}</b>`).join(' '));
      host.appendChild(bank);
    }
    const per = Math.max(1, Math.floor((ctx.maxScore || 30) / data.items.length));
    data.items.forEach((item, i) => {
      const row = el('div', 'fill-row');
      const txt = el('div', 'text');
      const num = el('span', 'n', (i + 1) + '.');
      txt.appendChild(num);
      // prefix
      txt.appendChild(document.createTextNode(' ' + arEn(item.prefix, ctx.lang) + ' '));
      // input
      const inp = el('input', 'fill');
      inp.type = 'text';
      inp.placeholder = '...';
      inp.dataset.ans = arEn(item.answer, ctx.lang);
      inp.addEventListener('change', () => {
        const got = inp.value.trim();
        const want = inp.dataset.ans.trim();
        if (got === want) {
          inp.classList.add('ok'); inp.classList.remove('bad');
          if (awardOnce(ctx, 'fill' + i, per)) feedback(host, ctx.lang==='ar'?'✓ أحسنت!':'✓ Well done!', true);
        } else if (got) {
          inp.classList.add('bad'); inp.classList.remove('ok');
          feedback(host, ctx.lang==='ar'?'✗ حاول مرة أخرى':'✗ Try again', false);
        }
      });
      txt.appendChild(inp);
      if (item.suffix) txt.appendChild(document.createTextNode(' ' + arEn(item.suffix, ctx.lang)));
      row.appendChild(txt);
      host.appendChild(row);
    });
  }

  /* ───────── 2. True / False ─────────
     data = { items: [{ q, t }] } */
  function trueFalse(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'✓✗ صح أم خطأ؟':'✓✗ True or false?'));
    const per = Math.max(1, Math.floor((ctx.maxScore || 30) / data.items.length));
    data.items.forEach((item, i) => {
      const row = el('div', 'tf-row');
      const q = el('div', 'q', arEn(item.q, ctx.lang));
      const yes = el('button', 'tf-btn', ctx.lang==='ar'?'✓ صح':'✓ True');
      const no = el('button', 'tf-btn', ctx.lang==='ar'?'✗ خطأ':'✗ False');
      const click = (val) => (e) => {
        if (row.dataset.done) return;
        const correct = val === item.t;
        const btn = e.target;
        btn.classList.add(correct ? 'ok' : 'bad');
        if (correct) {
          row.dataset.done = '1';
          if (awardOnce(ctx, 'tf' + i, per)) feedback(host, ctx.lang==='ar'?'✓ ممتاز!':'✓ Excellent!', true);
        }
      };
      yes.addEventListener('click', click(true));
      no.addEventListener('click', click(false));
      row.appendChild(q); row.appendChild(yes); row.appendChild(no);
      host.appendChild(row);
    });
  }

  /* ───────── 3. Multiple-choice ─────────
     data = { items:[ { q, opts:[{t,c:bool}] } ] } */
  function mcq(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🎯 اختر الإجابة الصحيحة':'🎯 Choose the correct answer'));
    const per = Math.max(1, Math.floor((ctx.maxScore || 30) / data.items.length));
    data.items.forEach((item, i) => {
      const m = el('div', 'mcq');
      m.appendChild(el('div', 'mcq-q', (i + 1) + '. ' + arEn(item.q, ctx.lang)));
      const letters = ctx.lang==='ar' ? ['أ','ب','ج','د','هـ'] : ['A','B','C','D','E'];
      item.opts.forEach((opt, j) => {
        const b = el('button', 'opt-btn');
        b.innerHTML = `<span class="opt-letter">${letters[j]}</span><span>${arEn(opt.t, ctx.lang)}</span>`;
        b.addEventListener('click', () => {
          if (m.dataset.done) return;
          if (opt.c) {
            b.classList.add('ok');
            m.dataset.done = '1';
            [...m.querySelectorAll('.opt-btn')].forEach(x => x.disabled = true);
            if (awardOnce(ctx, 'mcq' + i, per)) feedback(host, ctx.lang==='ar'?'✓ صحيح!':'✓ Correct!', true);
          } else {
            b.classList.add('bad');
            b.disabled = true;
            feedback(host, ctx.lang==='ar'?'✗ ليست الإجابة':'✗ Not the answer', false);
          }
        });
        m.appendChild(b);
      });
      host.appendChild(m);
    });
  }

  /* ───────── 4. Flip match ─────────
     data = { pairs: [ {a, b} ] }  — flips show 'a' (term), 'b' (def). Match by index. */
  function flipMatch(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🎴 اقلب واعثر على الأزواج':'🎴 Flip & find the pairs'));
    const grid = el('div', 'flip-grid');
    // Build 2N cards: pair index encoded
    const cards = [];
    data.pairs.forEach((p, i) => {
      cards.push({ id: i, side: 'a', text: arEn(p.a, ctx.lang) });
      cards.push({ id: i, side: 'b', text: arEn(p.b, ctx.lang) });
    });
    const cells = shuffle(cards);
    const per = Math.max(2, Math.floor((ctx.maxScore || 30) / data.pairs.length));
    let first = null;
    cells.forEach((c, idx) => {
      const f = el('div', 'flip');
      f.dataset.id = c.id;
      f.dataset.side = c.side;
      f.innerHTML = `<div class="flip-inner">
        <div class="flip-face flip-front">?</div>
        <div class="flip-face flip-back">${c.text}</div>
      </div>`;
      f.addEventListener('click', () => {
        if (f.classList.contains('matched') || f.classList.contains('flipped')) return;
        f.classList.add('flipped');
        if (!first) { first = f; return; }
        if (first === f) return;
        if (first.dataset.id === f.dataset.id && first.dataset.side !== f.dataset.side) {
          first.classList.add('matched'); f.classList.add('matched');
          first = null;
          if (awardOnce(ctx, 'flip' + c.id, per)) feedback(host, ctx.lang==='ar'?'✓ زوج صحيح!':'✓ Match!', true);
          // all matched?
          if ([...grid.children].every(x => x.classList.contains('matched'))) {
            feedback(host, ctx.lang==='ar'?'🎉 أتممت اللعبة!':'🎉 You finished!', true);
          }
        } else {
          const a = first, b = f;
          setTimeout(() => { a.classList.remove('flipped'); b.classList.remove('flipped'); }, 800);
          first = null;
        }
      });
      grid.appendChild(f);
    });
    host.appendChild(grid);
    const reset = el('button');
    reset.type = 'button';
    reset.style.cssText = 'display:block;margin:.6rem auto;background:#fff;border:2px solid #ccc;border-radius:1.4rem;padding:.3rem .8rem;font-weight:800;font-family:inherit;font-size:.8rem';
    reset.textContent = ctx.lang==='ar'?'🔄 إعادة':'🔄 Restart';
    reset.addEventListener('click', () => flipMatch(host, data, ctx));
    host.appendChild(reset);
  }

  /* ───────── 5. Match columns ─────────
     data = { left:[{id,t}], right:[{id,t}] } id matches */
  function match(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🔗 صِل كل بند بزوجه':'🔗 Connect each item with its pair'));
    const grid = el('div', 'match-grid');
    const colL = el('div'); const colR = el('div');
    colL.appendChild(el('div', 'match-col-ttl', ctx.lang==='ar'?'البند':'Item'));
    colR.appendChild(el('div', 'match-col-ttl', ctx.lang==='ar'?'الزوج':'Pair'));
    const cellsL = el('div', 'match-cells');
    const cellsR = el('div', 'match-cells');
    let sel = null;
    const per = Math.max(2, Math.floor((ctx.maxScore || 30) / data.left.length));
    function mkCell(item, side) {
      const c = el('div', 'match-cell', arEn(item.t, ctx.lang));
      c.dataset.id = item.id;
      c.dataset.side = side;
      c.addEventListener('click', () => {
        if (c.classList.contains('matched')) return;
        if (sel === c) { c.classList.remove('sel'); sel = null; return; }
        if (!sel) { c.classList.add('sel'); sel = c; return; }
        if (sel.dataset.side === c.dataset.side) {
          sel.classList.remove('sel'); sel = c; c.classList.add('sel'); return;
        }
        if (sel.dataset.id === c.dataset.id) {
          sel.classList.add('matched'); c.classList.add('matched');
          sel.classList.remove('sel');
          if (awardOnce(ctx, 'mt' + c.dataset.id, per)) feedback(host, ctx.lang==='ar'?'✓ مطابقة!':'✓ Matched!', true);
        } else {
          sel.classList.remove('sel');
          feedback(host, ctx.lang==='ar'?'✗ ليست المطابقة الصحيحة':'✗ Wrong pair', false);
        }
        sel = null;
      });
      return c;
    }
    shuffle(data.left).forEach(it => cellsL.appendChild(mkCell(it, 'L')));
    shuffle(data.right).forEach(it => cellsR.appendChild(mkCell(it, 'R')));
    colL.appendChild(cellsL); colR.appendChild(cellsR);
    grid.appendChild(colL); grid.appendChild(colR);
    host.appendChild(grid);
  }

  /* ───────── 6. Sort behaviors  ─────────
     data = { items:[{ t, good:bool }] } */
  function sort(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🗂️ اضغط ✓ للسلوك الحَسن أو ✗ للسلوك السَّيِّئ':'🗂️ Tap ✓ for good behaviour, ✗ for bad'));
    const per = Math.max(1, Math.floor((ctx.maxScore || 30) / data.items.length));
    data.items.forEach((item, i) => {
      const c = el('div', 'sort-card');
      c.appendChild(el('div', 'txt', arEn(item.t, ctx.lang)));
      const btns = el('div', 'sort-btns');
      const yes = el('button', 'sort-btn sort-yes', '✓');
      const no = el('button', 'sort-btn sort-no', '✗');
      yes.addEventListener('click', () => {
        if (c.dataset.done) return;
        if (item.good) { c.classList.add('ok'); yes.classList.add('active'); c.dataset.done='1'; if (awardOnce(ctx,'s'+i,per)) feedback(host, ctx.lang==='ar'?'✓ صح!':'✓ Right!', true); }
        else { c.classList.add('bad'); feedback(host, ctx.lang==='ar'?'✗ هذا سلوك سيء':'✗ That\u2019s a bad behaviour', false); setTimeout(()=>c.classList.remove('bad'),700); }
      });
      no.addEventListener('click', () => {
        if (c.dataset.done) return;
        if (!item.good) { c.classList.add('ok'); no.classList.add('active'); c.dataset.done='1'; if (awardOnce(ctx,'s'+i,per)) feedback(host, ctx.lang==='ar'?'✓ صح!':'✓ Right!', true); }
        else { c.classList.add('bad'); feedback(host, ctx.lang==='ar'?'✗ هذا سلوك حسن':'✗ That\u2019s a good behaviour', false); setTimeout(()=>c.classList.remove('bad'),700); }
      });
      btns.appendChild(yes); btns.appendChild(no);
      c.appendChild(btns);
      host.appendChild(c);
    });
  }

  /* ───────── 7. Cipher ─────────
     data = { key:{symbol:letter,...}, puzzles:[{symbols, answer}] } */
  function cipher(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🔑 فكَّ الشيفرة':'🔑 Decode'));
    const keyMap = data.key && (data.key.ar || data.key.en) ? (data.key[ctx.lang] || data.key.ar) : data.key;
    const key = el('div', 'cipher-key',
      (ctx.lang==='ar'?'🗝️ المفتاح: ':'🗝️ Key: ') + Object.entries(keyMap).map(([k, v]) => `${k}=${v}`).join(' • '));
    host.appendChild(key);
    const per = Math.max(2, Math.floor((ctx.maxScore || 30) / data.puzzles.length));
    data.puzzles.forEach((p, i) => {
      const card = el('div', 'cipher-puzzle');
      card.appendChild(el('div', 'symbols', arEn(p.symbols, ctx.lang)));
      const row = el('div');
      row.style.cssText = 'font-size:.85rem;font-weight:800;display:flex;align-items:center;justify-content:center;gap:.5rem';
      row.appendChild(document.createTextNode(ctx.lang==='ar'?'الكلمة:':'Word:'));
      const inp = el('input', 'fill');
      inp.dataset.ans = arEn(p.answer, ctx.lang);
      inp.addEventListener('change', () => {
        if (inp.value.trim() === arEn(p.answer, ctx.lang)) {
          inp.classList.add('ok'); inp.classList.remove('bad');
          if (awardOnce(ctx, 'cp' + i, per)) feedback(host, ctx.lang==='ar'?'✓ فككت الشيفرة!':'✓ Cracked!', true);
        } else if (inp.value.trim()) {
          inp.classList.add('bad'); inp.classList.remove('ok');
          feedback(host, '✗ حاول مرة أخرى', false);
        }
      });
      row.appendChild(inp);
      card.appendChild(row);
      host.appendChild(card);
    });
  }

  /* ───────── 8. Maze ─────────
     data = { sizes: [5,7,9] (optional) } — random maze */
  function maze(host, data, ctx) {
    host.innerHTML = '';
    host.appendChild(el('div', 'game-q', ctx.lang==='ar'?'🗺️ متاهة — وصل إلى البيت!':'🗺️ Maze — reach the house!'));
    const sizes = (data && data.sizes) || [5, 7, 9];
    const diff = el('div', 'maze-difficulty');
    sizes.forEach((s, i) => {
      const b = el('button', i === 0 ? 'active' : '', ['🌱', '🌿', '🌳'][i] + ' ' + (ctx.lang==='ar'?['سهل','متوسط','صعب']:['easy','medium','hard'])[i]);
      b.addEventListener('click', () => {
        [...diff.children].forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        start(s);
      });
      diff.appendChild(b);
    });
    host.appendChild(diff);
    const wrap = el('div', 'maze-wrap');
    const canvas = el('canvas', 'maze-canvas');
    canvas.width = 280; canvas.height = 280;
    wrap.appendChild(canvas);
    host.appendChild(wrap);
    const pad = el('div', 'maze-pad', '');
    pad.innerHTML = `<div></div><button data-d="up">⬆️</button><div></div>
      <button data-d="left">⬅️</button><button data-d="down">⬇️</button><button data-d="right">➡️</button>`;
    host.appendChild(pad);
    const status = el('div', 'maze-status', '');
    host.appendChild(status);

    const ctxC = canvas.getContext('2d');
    let grid, w, cell, px, py, steps = 0;

    function gen(n) {
      // simple Prim-like maze
      const cells = Array.from({length:n}, () => Array(n).fill().map(()=>({t:1,r:1,b:1,l:1,v:false})));
      function carve(x,y){
        cells[y][x].v = true;
        const dirs = shuffle([[0,-1,'t','b'],[1,0,'r','l'],[0,1,'b','t'],[-1,0,'l','r']]);
        for(const [dx,dy,a,b] of dirs){
          const nx=x+dx, ny=y+dy;
          if(nx<0||ny<0||nx>=n||ny>=n) continue;
          if(cells[ny][nx].v) continue;
          cells[y][x][a]=0; cells[ny][nx][b]=0;
          carve(nx,ny);
        }
      }
      carve(0,0);
      return cells;
    }
    function draw(){
      const c = ctxC, s = canvas.width;
      cell = s / w;
      c.clearRect(0,0,s,s);
      c.strokeStyle = '#444';
      c.lineWidth = 2;
      for(let y=0;y<w;y++) for(let x=0;x<w;x++){
        const X=x*cell, Y=y*cell, cc=grid[y][x];
        c.beginPath();
        if(cc.t){c.moveTo(X,Y);c.lineTo(X+cell,Y);}
        if(cc.r){c.moveTo(X+cell,Y);c.lineTo(X+cell,Y+cell);}
        if(cc.b){c.moveTo(X,Y+cell);c.lineTo(X+cell,Y+cell);}
        if(cc.l){c.moveTo(X,Y);c.lineTo(X,Y+cell);}
        c.stroke();
      }
      // goal
      c.font = (cell*0.7) + 'px serif';
      c.textAlign='center'; c.textBaseline='middle';
      c.fillText('🏠', (w-1)*cell + cell/2, (w-1)*cell + cell/2);
      // player
      c.fillText('🧒', px*cell + cell/2, py*cell + cell/2);
    }
    function start(n){
      w = n; grid = gen(n); px=0; py=0; steps=0;
      status.textContent = '';
      draw();
    }
    function move(d){
      if(!grid) return;
      const cc = grid[py][px];
      let nx=px, ny=py;
      if(d==='up' && !cc.t) ny--;
      else if(d==='down' && !cc.b) ny++;
      else if(d==='left' && !cc.l) nx--;
      else if(d==='right' && !cc.r) nx++;
      if(nx===px && ny===py) return;
      px=nx; py=ny; steps++;
      draw();
      if(px===w-1 && py===w-1){
        status.textContent = ctx.lang==='ar' ? `🏆 وصلت! بـ ${steps} خطوة` : `🏆 You made it! ${steps} steps`;
        if (awardOnce(ctx, 'maze', ctx.maxScore || 30)) feedback(host, ctx.lang==='ar'?'🎉 ممتاز!':'🎉 Excellent!', true);
      }
    }
    pad.querySelectorAll('button').forEach(b=>{
      b.addEventListener('click', ()=>move(b.dataset.d));
    });
    start(sizes[0]);
  }

  return { fillBlanks, trueFalse, mcq, flipMatch, match, sort, cipher, maze };
})();
