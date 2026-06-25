/* ============================================================
   HIDDEN SUNNAHS — تحدي السنن المنسية
   ثلاثة مشاهد، اثنتا عشرة سنّة، اكتشاف بالنقر.
   ============================================================ */

(function () {
  "use strict";

  /* ============ المشاهد + السنن ============ */
  const SCENES = [
    {
      id: "home",
      label: "البيت",
      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/></svg>`,
      svg: homeSVG(),
      sunnahs: [
        { id: "wake", x: 22, y: 35, t: "ذِكر الاستيقاظ من النوم",
          d: "«الحمدُ لله الذي أحيانا بعد ما أماتنا وإليه النشور»",
          extra: "أوّل ما تستيقظ، قُل هذا الذكر قبل أن تنزل من السرير." },
        { id: "bism", x: 52, y: 55, t: "التسمية عند الأكل",
          d: "قُل «بسم الله» قبل أن تأكل، وكُلْ بيمينك ومما يليك",
          extra: "ولو نسيت في البداية فقل: «بسم الله أوّله وآخره» وأنت في وسط الطعام." },
        { id: "water", x: 70, y: 60, t: "شُرب الماء بثلاث",
          d: "النبي ﷺ كان يشرب على ثلاث، ويسمّي في أوّله ويحمد في آخره",
          extra: "اجلس واشرب على ثلاث جرعات، ولا تنفخ في الإناء." },
        { id: "sleep", x: 18, y: 75, t: "النوم على الجانب الأيمن",
          d: "ضع يدَك اليمنى تحت خدّك، ونم على شِقّك الأيمن",
          extra: "قُل قبل النوم: «بِاسمِكَ اللهمَّ أموتُ وأحيا»." },
      ],
    },
    {
      id: "mosque",
      label: "المسجد",
      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M3 21h18"/><path d="M12 7V3"/><path d="M10 5h4"/></svg>`,
      svg: mosqueSVG(),
      sunnahs: [
        { id: "enter", x: 28, y: 40, t: "الدخول باليُمنى ودعاء المسجد",
          d: "ادخل بقدمك اليمنى وقُل: «اللهمَّ افتح لي أبوابَ رحمتك»",
          extra: "وحين الخروج: ادخل باليسرى وقل: «اللهم إني أسألك من فضلك»." },
        { id: "tahiya", x: 50, y: 65, t: "صلاة تحيّة المسجد",
          d: "إذا دخلتَ المسجد فلا تجلس حتى تُصلّي ركعتين",
          extra: "هي ركعتان خفيفتان شُكراً لله على نِعمة بيوته." },
        { id: "saf", x: 70, y: 80, t: "تسوية الصفوف",
          d: "«سَوُّوا صفوفَكم فإنّ تسوية الصفوف من تمام الصلاة»",
          extra: "اجعل كتفك بكتف من بجانبك، وقدمك بقدمه." },
        { id: "dhikr", x: 80, y: 50, t: "أذكار بعد الصلاة",
          d: "سبحان الله ٣٣، الحمد لله ٣٣، الله أكبر ٣٤، ثم آية الكرسي",
          extra: "أذكار بعد الصلاة تُغفر بها الذنوب ولو كانت مثل زبد البحر." },
      ],
    },
    {
      id: "street",
      label: "الطريق",
      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 18l2-14h10l2 14"/><path d="M9 9h6"/></svg>`,
      svg: streetSVG(),
      sunnahs: [
        { id: "thorn", x: 18, y: 80, t: "إماطة الأذى عن الطريق",
          d: "ارفع الحجر أو القمامة من طريق الناس، فهي شُعبة من الإيمان",
          extra: "«الإيمانُ بضعٌ وسبعون شعبةً، أَدناها إماطةُ الأذى عن الطريق»." },
        { id: "salam", x: 40, y: 50, t: "إفشاء السلام",
          d: "ابدأ بالسلام على من تعرف ومن لا تعرف",
          extra: "«أَلا أَدلُّكم على شيء إذا فعلتموه تَحاببتم؟ أَفشُوا السلامَ بينكم»." },
        { id: "ride", x: 70, y: 55, t: "دعاء ركوب الدّابّة/السيارة",
          d: "«سُبحان الذي سَخَّر لنا هذا وما كنّا له مُقرنين، وإنّا إلى ربّنا لمنقلبون»",
          extra: "قُل التكبير ثلاثاً قبل الدعاء عند ركوب أي وسيلة." },
        { id: "smile", x: 55, y: 35, t: "ابتسامة في وجه أخيك",
          d: "«تَبَسُّمُكَ في وجه أخيك صدقة»",
          extra: "ابتسامة بسيطة قد تُغيّر يومَ شخصٍ كاملاً." },
      ],
    },
  ];

  /* ============ الحالة ============ */
  const STORAGE_KEY = "mk_sunnahs_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, {
    best: null, plays: 0,
  });

  const HINT_MAX = 4;
  let currentSceneIdx = 0;
  let foundIds = new Set();
  let misses = 0;
  let hintsUsed = 0;
  let startTs = 0;
  let timerInt = null;

  /* ============ تبويبات المشاهد ============ */
  function renderTabs() {
    const wrap = document.getElementById("scene-tabs");
    wrap.innerHTML = "";
    SCENES.forEach((s, i) => {
      const foundInScene = s.sunnahs.filter(x => foundIds.has(x.id)).length;
      const total = s.sunnahs.length;
      const completed = foundInScene === total;
      const tab = document.createElement("button");
      tab.className = `scene-tab ${i === currentSceneIdx ? "active" : ""} ${completed ? "completed" : ""}`;
      tab.dataset.idx = i;
      tab.innerHTML = `${s.icon}<span>${s.label}</span><span class="count-pill">${foundInScene}/${total}</span>`;
      tab.addEventListener("click", () => switchScene(i));
      wrap.appendChild(tab);
    });
  }

  function switchScene(i) {
    currentSceneIdx = i;
    AudioBus.pop();
    renderScene();
    renderTabs();
    renderSidePanel();
  }

  /* ============ المشهد ============ */
  function renderScene() {
    const scene = SCENES[currentSceneIdx];
    document.getElementById("scene-svg").innerHTML = scene.svg;
    const spotsWrap = document.getElementById("scene-spots");
    spotsWrap.innerHTML = "";
    scene.sunnahs.forEach(s => {
      const btn = document.createElement("button");
      btn.className = "s-spot";
      btn.dataset.id = s.id;
      btn.style.right = s.x + "%";
      btn.style.top = s.y + "%";
      btn.style.width = "60px";
      btn.style.height = "60px";
      btn.setAttribute("aria-label", s.t);
      if (foundIds.has(s.id)) {
        btn.classList.add("found");
        btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`;
      }
      btn.addEventListener("click", e => { e.stopPropagation(); onSpotClick(s, btn); });
      spotsWrap.appendChild(btn);
    });
  }

  function onSpotClick(s, btn) {
    if (foundIds.has(s.id)) return;
    foundIds.add(s.id);
    btn.classList.add("found");
    btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`;
    AudioBus.success();
    Particles.fire(40, {
      colors: ["#CDEBD7","#FFE9A8","#FFD9C2"],
      originX: (100 - s.x) + "%",
      originY: s.y + "%",
    });
    showToast(s.t, s.d);
    updateHUD();
    renderSidePanel();
    renderTabs();
    if (foundIds.size === totalSunnahs()) {
      setTimeout(finish, 1100);
    }
  }

  function onSceneClick(e) {
    if (e.target.closest(".s-spot")) return;
    const rect = document.getElementById("scene").getBoundingClientRect();
    misses++;
    AudioBus.fail();
    const xPct = ((rect.right - e.clientX) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    const r = document.createElement("span");
    r.className = "s-miss";
    r.style.right = xPct + "%";
    r.style.top = yPct + "%";
    document.getElementById("scene-spots").appendChild(r);
    setTimeout(() => r.remove(), 800);
    updateHUD();
  }

  function showToast(title, body) {
    const t = document.getElementById("toast");
    t.innerHTML = `<strong>${title}</strong>${body}`;
    t.classList.add("open");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("open"), 3200);
  }

  /* ============ قرينة ============ */
  function useHint() {
    if (hintsUsed >= HINT_MAX) return;
    const remaining = SCENES[currentSceneIdx].sunnahs.filter(s => !foundIds.has(s.id));
    if (!remaining.length) {
      showToast("هذا المشهد مكتمل", "اذهب إلى مشهدٍ آخر.");
      return;
    }
    const target = remaining[Math.floor(Math.random() * remaining.length)];
    const spot = document.querySelector(`.s-spot[data-id="${target.id}"]`);
    if (spot) {
      spot.classList.add("hint");
      setTimeout(() => spot.classList.remove("hint"), 4500);
    }
    hintsUsed++;
    AudioBus.pop();
    updateHUD();
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("found").textContent = foundIds.size;
    document.getElementById("misses").textContent = misses;
    const row = document.getElementById("hints-row");
    row.innerHTML = "";
    for (let i = 0; i < HINT_MAX; i++) {
      const s = document.createElement("span");
      if (i < hintsUsed) s.className = "used";
      row.appendChild(s);
    }
    document.getElementById("hint-btn").disabled = hintsUsed >= HINT_MAX;
  }

  /* ============ اللوحة الجانبية ============ */
  function renderSidePanel() {
    const scene = SCENES[currentSceneIdx];
    document.getElementById("side-title").textContent = `سُنن ${scene.label}`;
    const found = scene.sunnahs.filter(s => foundIds.has(s.id)).length;
    document.getElementById("side-pill").textContent = `${found}/${scene.sunnahs.length}`;

    const wrap = document.getElementById("sunnah-list");
    wrap.innerHTML = "";
    scene.sunnahs.forEach(s => {
      const isFound = foundIds.has(s.id);
      const div = document.createElement("div");
      div.className = `sunnah-card ${isFound ? "found" : ""}`;
      div.innerHTML = `
        <div class="row">
          <span class="check">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>
          </span>
          <div class="title">
            ${isFound ? s.t : "سُنّة مَخفيّة — ابحث في المشهد"}
            <small>${isFound ? s.d : "•••••• ابحث في الصورة"}</small>
          </div>
        </div>
        ${isFound ? `<div class="extra">${s.extra}</div>` : ""}
      `;
      wrap.appendChild(div);
    });
  }

  /* ============ مساعدات ============ */
  function totalSunnahs() {
    return SCENES.reduce((n, s) => n + s.sunnahs.length, 0);
  }

  /* ============ النهاية ============ */
  function finish() {
    AudioBus.success();
    Particles.fire(160);
    stopTimer();
    const t = elapsedSec();
    const isBest = STORAGE.best == null || misses < STORAGE.best;
    if (isBest) STORAGE.best = misses;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);
    document.getElementById("win-misses").textContent = misses;
    document.getElementById("win-hints").textContent = hintsUsed;
    document.getElementById("win-time").textContent = Fmt.time(t);
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  /* ============ الوقت ============ */
  function startTimer() { startTs = Date.now(); }
  function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }
  function elapsedSec() { return Math.floor((Date.now() - startTs) / 1000); }

  /* ============ إعادة ============ */
  function resetGame() {
    foundIds = new Set();
    misses = 0;
    hintsUsed = 0;
    currentSceneIdx = 0;
    startTimer();
    renderTabs();
    renderScene();
    renderSidePanel();
    updateHUD();
  }

  /* ============ SVG المشاهد ============ */
  function homeSVG() {
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallH" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#FAEAD3"/><stop offset="1" stop-color="#F0DBB7"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="600" fill="url(#wallH)"/>
      <rect y="600" width="1600" height="400" fill="#B8924E"/>
      <rect y="600" width="1600" height="8" fill="#8A6510"/>
      <!-- نافذة -->
      <rect x="200" y="120" width="240" height="200" rx="8" fill="#CFE3F2" stroke="#8A6510" stroke-width="8"/>
      <line x1="320" y1="120" x2="320" y2="320" stroke="#8A6510" stroke-width="6"/>
      <line x1="200" y1="220" x2="440" y2="220" stroke="#8A6510" stroke-width="6"/>
      <circle cx="380" cy="170" r="22" fill="#FFE9A8"/>

      <!-- سرير -->
      <rect x="120" y="540" width="380" height="180" rx="12" fill="#FFCFB0" stroke="#B5612A" stroke-width="6"/>
      <rect x="120" y="540" width="380" height="40" rx="12" fill="#FFAA88" stroke="#B5612A" stroke-width="6"/>
      <rect x="140" y="500" width="120" height="60" rx="10" fill="#FBF6EC" stroke="#B5612A" stroke-width="5"/>
      <rect x="280" y="500" width="120" height="60" rx="10" fill="#FBF6EC" stroke="#B5612A" stroke-width="5"/>

      <!-- طاولة طعام -->
      <rect x="640" y="600" width="380" height="40" fill="#8A6510"/>
      <rect x="660" y="640" width="20" height="80" fill="#8A6510"/>
      <rect x="980" y="640" width="20" height="80" fill="#8A6510"/>
      <!-- صحن -->
      <ellipse cx="780" cy="600" rx="80" ry="20" fill="#FBF6EC" stroke="#A89F8A" stroke-width="4"/>
      <ellipse cx="780" cy="595" rx="60" ry="14" fill="#FFE9A8"/>
      <circle cx="780" cy="590" r="10" fill="#B5612A"/>
      <!-- خبز -->
      <ellipse cx="900" cy="595" rx="40" ry="14" fill="#D9B57A" stroke="#8A6510" stroke-width="3"/>

      <!-- كأس ماء -->
      <path d="M1120 540 L1110 620 L1170 620 L1160 540 Z" fill="#CFE3F2" stroke="#2E5F8A" stroke-width="5"/>
      <path d="M1115 580 L1165 580" stroke="#2E5F8A" stroke-width="2" opacity="0.6"/>
      <ellipse cx="1140" cy="540" rx="25" ry="6" fill="#A8DDF0" stroke="#2E5F8A" stroke-width="3"/>

      <!-- لوحة على الجدار -->
      <rect x="1140" y="180" width="240" height="160" fill="#FBF6EC" stroke="#8A6510" stroke-width="8"/>
      <text x="1260" y="270" font-family="Tajawal" font-weight="800" font-size="44" fill="#2F7A52" text-anchor="middle">بسم الله</text>

      <!-- ساعة -->
      <circle cx="800" cy="200" r="50" fill="#FBF6EC" stroke="#1F2540" stroke-width="5"/>
      <line x1="800" y1="200" x2="800" y2="165" stroke="#1F2540" stroke-width="4"/>
      <line x1="800" y1="200" x2="826" y2="200" stroke="#1F2540" stroke-width="3"/>
      <circle cx="800" cy="200" r="4" fill="#1F2540"/>

      <!-- وسائد (للنوم) -->
      <ellipse cx="200" cy="780" rx="80" ry="20" fill="#E0D5F2" stroke="#5A3F94" stroke-width="4"/>
    </svg>`;
  }

  function mosqueSVG() {
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallM" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#FBF6EC"/><stop offset="1" stop-color="#E8E0CB"/>
        </linearGradient>
        <pattern id="rugM" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="#8B2A2A"/>
          <path d="M0 30h60M30 0v60" stroke="#6A1F1F" stroke-width="2"/>
          <circle cx="30" cy="30" r="6" fill="#C9A961"/>
        </pattern>
      </defs>
      <rect width="1600" height="600" fill="url(#wallM)"/>
      <rect y="600" width="1600" height="400" fill="url(#rugM)"/>

      <!-- محراب -->
      <path d="M700 200 Q800 80 900 200 L900 600 L700 600 Z" fill="#2F7A52" stroke="#1F4530" stroke-width="6"/>
      <path d="M730 230 Q800 130 870 230 L870 580 L730 580 Z" fill="#3D8F62"/>
      <text x="800" y="380" font-family="Tajawal" font-weight="800" font-size="56" fill="#FBF6EC" text-anchor="middle">الله</text>

      <!-- باب المسجد -->
      <rect x="160" y="240" width="220" height="380" rx="110" fill="#B8924E" stroke="#8A6510" stroke-width="8"/>
      <rect x="190" y="280" width="160" height="340" rx="80" fill="#D9B57A"/>
      <circle cx="335" cy="450" r="6" fill="#8A6510"/>

      <!-- سجادة صلاة فردية -->
      <rect x="640" y="700" width="200" height="120" rx="10" fill="#5A3F94" stroke="#3F2C6E" stroke-width="5"/>
      <path d="M740 720 L770 750 L740 780 L710 750 Z" fill="#E0D5F2"/>

      <!-- صف نقاط (تسوية الصف) -->
      <g>
        <rect x="900" y="780" width="80" height="60" rx="8" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
        <rect x="985" y="780" width="80" height="60" rx="8" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
        <rect x="1070" y="780" width="80" height="60" rx="8" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
        <rect x="1155" y="780" width="80" height="60" rx="8" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
        <text x="1075" y="868" font-family="Tajawal" font-weight="700" font-size="18" fill="#8A6510" text-anchor="middle">صفّ المصلّين</text>
      </g>

      <!-- سبحة على الجدار -->
      <g transform="translate(1300,420)">
        <circle cx="0" cy="0" r="6" fill="#C9A961"/>
        <circle cx="-25" cy="-15" r="6" fill="#8A6510"/>
        <circle cx="-50" cy="-30" r="6" fill="#C9A961"/>
        <circle cx="-65" cy="-55" r="6" fill="#8A6510"/>
        <circle cx="-60" cy="-85" r="6" fill="#C9A961"/>
        <circle cx="-40" cy="-105" r="6" fill="#8A6510"/>
        <circle cx="-15" cy="-115" r="6" fill="#C9A961"/>
        <circle cx="15" cy="-115" r="6" fill="#8A6510"/>
        <circle cx="40" cy="-105" r="6" fill="#C9A961"/>
        <circle cx="60" cy="-85" r="6" fill="#8A6510"/>
        <circle cx="65" cy="-55" r="6" fill="#C9A961"/>
        <circle cx="50" cy="-30" r="6" fill="#8A6510"/>
        <circle cx="25" cy="-15" r="6" fill="#C9A961"/>
      </g>

      <!-- مصابيح / ثريا -->
      <g>
        <line x1="500" y1="0" x2="500" y2="80" stroke="#8A6510" stroke-width="3"/>
        <circle cx="500" cy="100" r="22" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
        <line x1="1100" y1="0" x2="1100" y2="80" stroke="#8A6510" stroke-width="3"/>
        <circle cx="1100" cy="100" r="22" fill="#FFE9A8" stroke="#8A6510" stroke-width="3"/>
      </g>

      <!-- زخرفة قوسية -->
      <path d="M40 40 Q200 200 360 40" stroke="#C9A961" stroke-width="4" fill="none"/>
      <path d="M1240 40 Q1400 200 1560 40" stroke="#C9A961" stroke-width="4" fill="none"/>
    </svg>`;
  }

  function streetSVG() {
    return `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyS" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#CFE3F2"/><stop offset="1" stop-color="#E8E8DC"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="500" fill="url(#skyS)"/>
      <rect y="500" width="1600" height="280" fill="#A89F8A"/>
      <rect y="780" width="1600" height="220" fill="#5A554A"/>
      <g stroke="#FBF6EC" stroke-width="6" stroke-dasharray="60 30">
        <line x1="0" y1="890" x2="1600" y2="890"/>
      </g>

      <!-- شمس -->
      <circle cx="1400" cy="120" r="60" fill="#FFE9A8"/>
      <circle cx="1400" cy="120" r="40" fill="#FFD98B"/>

      <!-- بنايات بعيدة -->
      <rect x="100" y="280" width="200" height="220" fill="#FFCFB0" stroke="#B5612A" stroke-width="4"/>
      <rect x="130" y="320" width="40" height="40" fill="#CFE3F2"/>
      <rect x="200" y="320" width="40" height="40" fill="#CFE3F2"/>
      <rect x="130" y="390" width="40" height="40" fill="#CFE3F2"/>
      <rect x="200" y="390" width="40" height="40" fill="#CFE3F2"/>

      <rect x="320" y="220" width="240" height="280" fill="#DCE9DC" stroke="#2E4A3F" stroke-width="4"/>
      <path d="M310 220 L440 130 L570 220 Z" fill="#2F7A52"/>
      <rect x="400" y="380" width="80" height="120" fill="#8A6510"/>
      <rect x="350" y="300" width="50" height="50" fill="#CFE3F2"/>
      <rect x="490" y="300" width="50" height="50" fill="#CFE3F2"/>

      <rect x="900" y="180" width="280" height="320" fill="#E0D5F2" stroke="#5A3F94" stroke-width="4"/>
      <rect x="930" y="240" width="50" height="60" fill="#CFE3F2"/>
      <rect x="1010" y="240" width="50" height="60" fill="#CFE3F2"/>
      <rect x="1090" y="240" width="50" height="60" fill="#CFE3F2"/>
      <rect x="1000" y="340" width="80" height="160" fill="#7A2F2F"/>

      <rect x="1240" y="320" width="180" height="180" fill="#FFE9A8" stroke="#8A6510" stroke-width="4"/>
      <rect x="1270" y="360" width="40" height="40" fill="#CFE3F2"/>
      <rect x="1340" y="360" width="40" height="40" fill="#CFE3F2"/>

      <!-- شخصان يتصافحان (سلام) -->
      <g transform="translate(580,580)">
        <circle cx="0" cy="0" r="30" fill="#FFCFB0" stroke="#B5612A" stroke-width="3"/>
        <path d="M-30 30 q30 25 60 0 v90 h-60 z" fill="#2F7A52" stroke="#1F4530" stroke-width="3"/>
        <circle cx="80" cy="0" r="30" fill="#FFCFB0" stroke="#B5612A" stroke-width="3"/>
        <path d="M50 30 q30 25 60 0 v90 h-60 z" fill="#2E5F8A" stroke="#1F4060" stroke-width="3"/>
        <!-- يدان -->
        <ellipse cx="40" cy="40" rx="20" ry="8" fill="#FFCFB0" stroke="#B5612A" stroke-width="2"/>
      </g>

      <!-- شخص يبتسم -->
      <g transform="translate(900,600)">
        <circle cx="0" cy="0" r="34" fill="#FFCFB0" stroke="#B5612A" stroke-width="3"/>
        <circle cx="-10" cy="-5" r="2" fill="#1F2540"/>
        <circle cx="10" cy="-5" r="2" fill="#1F2540"/>
        <path d="M-12 10 q12 12 24 0" stroke="#1F2540" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M-30 30 q30 25 60 0 v100 h-60 z" fill="#E8A5A5" stroke="#7A2F2F" stroke-width="3"/>
      </g>

      <!-- سيارة -->
      <g transform="translate(1200,720)">
        <rect x="0" y="0" width="180" height="60" rx="10" fill="#5A8DB6" stroke="#1F4060" stroke-width="4"/>
        <rect x="20" y="-30" width="140" height="35" rx="8" fill="#5A8DB6" stroke="#1F4060" stroke-width="4"/>
        <rect x="35" y="-25" width="50" height="25" fill="#CFE3F2"/>
        <rect x="95" y="-25" width="50" height="25" fill="#CFE3F2"/>
        <circle cx="40" cy="60" r="18" fill="#1F2540" stroke="#000" stroke-width="2"/>
        <circle cx="40" cy="60" r="8" fill="#7A7A8C"/>
        <circle cx="140" cy="60" r="18" fill="#1F2540" stroke="#000" stroke-width="2"/>
        <circle cx="140" cy="60" r="8" fill="#7A7A8C"/>
      </g>

      <!-- حجر/أذى على الطريق -->
      <g transform="translate(260,820)">
        <ellipse cx="0" cy="0" rx="40" ry="18" fill="#7A6A50" stroke="#3A2E1A" stroke-width="3"/>
        <ellipse cx="-8" cy="-5" rx="12" ry="6" fill="#5A4A30"/>
      </g>
    </svg>`;
  }

  /* ============ ربط الأحداث ============ */
  document.getElementById("scene").addEventListener("click", onSceneClick);
  document.getElementById("hint-btn").addEventListener("click", useHint);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(resetGame, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  startTimer();
  renderTabs();
  renderScene();
  renderSidePanel();
  updateHUD();
})();
