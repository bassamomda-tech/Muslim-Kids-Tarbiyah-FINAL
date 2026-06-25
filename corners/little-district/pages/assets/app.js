/* ═══════════════════════════════════════════════════════════════
   APP — Entry point: state, routing, district map, confetti, i18n
   ─────────────────────────────────────────────────────────────── */

/* ───── Storage helper ───── */
window.Store = (function () {
  const PFX = 'ld:'; // little-district namespace
  return {
    get(k)    { try { return localStorage.getItem(PFX + k); } catch(e) { return null; } },
    set(k, v) { try { localStorage.setItem(PFX + k, v); } catch(e) {} },
    remove(k) { try { localStorage.removeItem(PFX + k); } catch(e) {} }
  };
})();

/* ───── App ───── */
window.App = (function () {
  let currentSlug = null;
  let currentLang = (Store.get('lang') || 'ar');

  function arEn(d, lang) {
    if (d == null) return '';
    if (typeof d === 'string') return d;
    return d[lang] || d.ar || d.en || '';
  }

  function setLang(lang) {
    currentLang = lang;
    Store.set('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    // re-render
    buildDistrict();
    if (currentSlug) Render.house(currentSlug);
  }

  /* ───── DISTRICT MAP ───── */
  function buildDistrict() {
    const root = document.getElementById('districtBody');
    if (!root) return;
    root.innerHTML = '';

    // Two category sections
    const cats = [
      { id:'akhlaq', icon:'🌱',
        ttlAr:'أركان الأخلاق', ttlEn:'Houses of Akhlaq',
        subAr:'شخصيتك تُبنى هنا', subEn:'Where character is built' },
      { id:'adab',   icon:'📋',
        ttlAr:'أركان الآداب',   ttlEn:'Houses of Adab',
        subAr:'الآداب اليومية للمسلم',  subEn:'Daily Muslim manners' },
    ];

    cats.forEach(cat => {
      // Header
      const hdr = document.createElement('div');
      hdr.className = 'cat-hdr';
      hdr.innerHTML = `<div class="line"></div>
        <div class="cat-pill ${cat.id}">${cat.icon} <span>${currentLang==='ar'?cat.ttlAr:cat.ttlEn}</span>
          <span style="font-weight:700;font-size:.72rem;opacity:.75">· ${currentLang==='ar'?cat.subAr:cat.subEn}</span>
        </div>
        <div class="line"></div>`;
      root.appendChild(hdr);

      // Houses grid
      const street = document.createElement('div');
      street.className = 'street';
      const grid = document.createElement('div');
      grid.className = 'house-grid';
      window.HOUSE_INDEX.filter(h => h.cat === cat.id).forEach((h, i) => {
        const c = document.createElement('button');
        c.className = 'hc' + (Store.get(`done:${h.slug}`) === '1' ? ' done' : '');
        c.style.setProperty('--hc', h.color);
        c.setAttribute('aria-label', currentLang==='ar' ? h.nameAr : h.nameEn);
        const ptsCur = parseInt(Store.get(`pts:${h.slug}`) || 0, 10);
        const hasData = !!window.HOUSES[h.slug];
        const maxPts = hasData ? (window.HOUSES[h.slug].activities ? window.HOUSES[h.slug].activities.totalPoints : 180) : 180;
        const pct = Math.min(100, Math.round(ptsCur / maxPts * 100));
        c.innerHTML = `
          <span class="star">⭐</span>
          ${hasData ? '' : `<span class="badge-new">${currentLang==='ar'?'قريباً':'Soon'}</span>`}
          <div class="hc-fig">${HouseArt.render(h.art, h.color)}</div>
          <div class="hc-name">${currentLang==='ar'?h.nameAr:h.nameEn}</div>
          <div class="hc-sub">${currentLang==='ar'?h.shortAr:h.shortEn}</div>
          <div class="hc-progress">
            <div class="bar"><div class="fill" style="width:${pct}%;background:${h.color}"></div></div>
            <span>${pct}%</span>
          </div>`;
        c.addEventListener('click', () => openHouse(h.slug));
        grid.appendChild(c);
      });
      street.appendChild(grid);
      root.appendChild(street);

      // Mini garden between category sections
      const garden = document.createElement('div');
      garden.className = 'mini-garden';
      garden.innerHTML = ['🌷','🌳','🌻','🌱','🌼','🌳','🌷'].map(e => `<span>${e}</span>`).join('');
      root.appendChild(garden);
    });

    // Progress garden
    renderProgressGarden(root);
  }

  function renderProgressGarden(root) {
    const total = window.HOUSE_INDEX.length;
    let done = 0;
    window.HOUSE_INDEX.forEach(h => { if (Store.get(`done:${h.slug}`) === '1') done++; });

    const wrap = document.createElement('section');
    wrap.className = 'prog-garden';
    wrap.innerHTML = `
      <div class="pg-hdr">
        <div class="ic">🌳</div>
        <div>
          <h3>${currentLang==='ar'?'حديقة التقدم':'My Progress Garden'}</h3>
          <p>${currentLang==='ar'?`أكملتَ ${done} من ${total} بيتاً — كل بيت يزرع شجرة!`:`You finished ${done}/${total} houses — each grows a tree!`}</p>
        </div>
      </div>
      <div class="pg-row"></div>
      <div class="pg-legend">
        <span style="color:#4CAF50">${currentLang==='ar'?'شجرة = بيت مكتمل':'tree = completed house'}</span>
        <span style="color:#9A8472">${currentLang==='ar'?'بذرة = بيت لم يكتمل':'seed = not yet completed'}</span>
      </div>`;
    const row = wrap.querySelector('.pg-row');
    window.HOUSE_INDEX.forEach(h => {
      const plant = document.createElement('div');
      const grown = Store.get(`done:${h.slug}`) === '1';
      const seedIcons = ['🌱','🌱','🌱'];
      const growIcons = ['🌳','🌲','🌴','🌵','🌷','🌻','🌸','🌺'];
      const ic = grown
        ? growIcons[h.id % growIcons.length]
        : seedIcons[h.id % seedIcons.length];
      plant.className = 'pg-plant' + (grown ? ' grown' : '');
      plant.title = currentLang==='ar' ? h.nameAr : h.nameEn;
      plant.textContent = ic;
      plant.style.cursor = 'pointer';
      plant.addEventListener('click', () => openHouse(h.slug));
      row.appendChild(plant);
    });
    root.appendChild(wrap);
  }

  function updateProgress() {
    // Re-render district body so any progress updates persist visually
    buildDistrict();
  }

  /* ───── HOUSE ROUTING ───── */
  function openHouse(slug) {
    currentSlug = slug;
    document.body.classList.add('in-house');
    Render.house(slug);
    location.hash = '#' + slug;
  }
  function closeHouse() {
    currentSlug = null;
    document.body.classList.remove('in-house');
    location.hash = '';
    window.scrollTo({ top: 0 });
  }
  function navHouse(dir) {
    const list = window.HOUSE_INDEX;
    let i = list.findIndex(h => h.slug === currentSlug);
    if (i < 0) return;
    i = (i + dir + list.length) % list.length;
    openHouse(list[i].slug);
  }

  /* ───── CONFETTI ───── */
  function confetti() {
    const root = document.getElementById('confetti');
    if (!root) return;
    const colors = ['#E8A82F','#4CAF50','#EC407A','#1E88E5','#FFD56B','#AB47BC'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = 'cf-piece';
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDelay = (Math.random() * 0.6) + 's';
      p.style.animationDuration = (1.6 + Math.random() * 1.5) + 's';
      p.style.width  = (6 + Math.random() * 8) + 'px';
      p.style.height = (10 + Math.random() * 10) + 'px';
      root.appendChild(p);
      setTimeout(() => p.remove(), 3500);
    }
  }

  /* ───── TOAST ───── */
  let toastTimer;
  function toast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show ' + (type || '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  }

  /* ───── BACKPACK ───── */
  function openBackpack() {
    const bp = document.getElementById('bpDrawer');
    const ov = document.getElementById('bpOverlay');
    // build content
    const body = bp.querySelector('.bp-body');
    body.innerHTML = '';
    const all = [];
    window.HOUSE_INDEX.forEach(h => {
      const earned = (Store.get(`stickers:${h.slug}`) || '').split(',').filter(Boolean);
      if (!earned.length) return;
      const data = window.HOUSES[h.slug];
      const stickers = data && data.treasures || [];
      earned.forEach(i => {
        const t = stickers[+i];
        if (t) all.push({ t, h });
      });
    });
    if (!all.length) {
      body.innerHTML = `<div class="bp-empty">${currentLang==='ar'?'حقيبتك فارغة — ابدأ نشاطاً لتجمع الكنوز!':'Your bag is empty — start an activity to collect treasures!'}</div>`;
    } else {
      const g = document.createElement('div');
      g.className = 'bp-stickers';
      all.forEach(({t, h}) => {
        const c = document.createElement('div');
        c.className = 'bp-sticker';
        c.style.borderColor = h.color;
        c.innerHTML = `<div class="em">${t.icon}</div><div class="ttl">${arEn(t.title, currentLang)}</div>`;
        g.appendChild(c);
      });
      body.appendChild(g);
    }
    bp.classList.add('open');
    ov.classList.add('open');
  }
  function closeBackpack() {
    document.getElementById('bpDrawer').classList.remove('open');
    document.getElementById('bpOverlay').classList.remove('open');
  }

  /* ───── INIT ───── */
  function init() {
    // Lang
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => setLang(b.dataset.lang));
    });
    setLang(currentLang);

    // Header buttons
    document.getElementById('btnBack').addEventListener('click', closeHouse);
    document.getElementById('btnBackpack').addEventListener('click', openBackpack);
    document.getElementById('bpClose').addEventListener('click', closeBackpack);
    document.getElementById('bpOverlay').addEventListener('click', closeBackpack);

    // House nav buttons
    document.getElementById('hnBack').addEventListener('click', closeHouse);
    document.getElementById('hnPrev').addEventListener('click', () => navHouse(-1));
    document.getElementById('hnNext').addEventListener('click', () => navHouse(1));

    // Story reader close
    document.getElementById('storyReader').addEventListener('click', (e) => {
      if (e.target.id === 'storyReader') e.currentTarget.classList.remove('open');
    });
    document.getElementById('srClose').addEventListener('click', () => {
      document.getElementById('storyReader').classList.remove('open');
    });

    // Hash route
    const initialSlug = (location.hash || '').replace('#', '');
    if (initialSlug && window.HOUSE_BY_SLUG[initialSlug]) {
      openHouse(initialSlug);
    }

    // Keyboard nav
    window.addEventListener('keydown', (e) => {
      if (!currentSlug) return;
      if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
      if (e.target && e.target.isContentEditable) return;
      if (e.key === 'Escape') closeHouse();
      if (e.key === 'ArrowLeft')  navHouse(currentLang==='ar' ? 1 : -1);
      if (e.key === 'ArrowRight') navHouse(currentLang==='ar' ? -1 : 1);
    });

    // Reduce-motion: pause walkers
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.walker,.cloud,.hero-grass').forEach(n => {
        n.style.animation = 'none';
      });
    }
  }

  return {
    init, setLang, openHouse, closeHouse, navHouse,
    confetti, toast, updateProgress, openBackpack, closeBackpack,
    buildDistrict
  };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
