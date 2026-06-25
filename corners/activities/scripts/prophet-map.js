/* ============================================================
   PROPHET MAP — خريطة الأنبياء
   خريطةٌ مُبَسَّطةٌ تَخطيطيَّة لِلعالَم القَديم.
   ============================================================ */

(function () {
  "use strict";

  /* ============ بنية الأرضِ المُبَسَّطة ============ */
  // أَشكالٌ تَخطيطيَّة لا تَدَّعي الدِّقَّةَ الجُغرافيَّة.
  const LANDS = [
    // إفريقيا — شمال شرق (مصر والسودان)
    { d: "M180,180 Q200,140 250,140 Q300,150 320,200 Q335,260 320,330 Q310,400 280,420 Q240,430 220,400 Q200,360 195,310 Q180,240 180,180 Z", label: "إفريقيا", lx: 250, ly: 320 },
    // الجزيرة العربيَّة
    { d: "M380,250 Q430,230 480,250 Q530,270 540,330 Q545,390 510,420 Q470,440 440,425 Q400,410 385,370 Q370,310 380,250 Z", label: "الجزيرة", lx: 460, ly: 340 },
    // بِلاد الشَّام + سيناء (متَّصلٌ بمصر)
    { d: "M320,160 Q370,150 410,165 Q440,180 430,220 Q420,260 395,275 Q360,280 340,265 Q310,240 320,200 Z", label: "الشَّام", lx: 380, ly: 215 },
    // بِلاد الرَّافِدَين (العراق وحوله)
    { d: "M450,140 Q500,130 540,150 Q580,170 580,210 Q575,250 540,260 Q500,265 470,240 Q445,210 450,170 Z", label: "العراق", lx: 510, ly: 200 },
    // فارس / إيران
    { d: "M580,150 Q630,145 670,170 Q700,200 700,240 Q695,275 660,285 Q620,290 590,270 Q575,235 580,190 Z", label: "فارس", lx: 640, ly: 220 },
    // الأناضول / تركيا
    { d: "M380,90 Q450,80 520,100 Q570,115 565,145 Q555,170 510,165 Q450,160 400,150 Q370,130 380,90 Z", label: "الأناضول", lx: 470, ly: 125 },
    // اليمن (طرف الجزيرة الجنوبيّ)
    { d: "M420,420 Q460,440 510,435 Q540,440 530,460 Q500,460 460,460 Q425,455 420,440 Z", label: "اليمن", lx: 475, ly: 445 },
  ];

  /* ============ الأنبياء + المَواقِع ============ */
  const PROPHETS = [
    { id: "ibrahim",  name: "إبراهيم",  ar: "عليه السلام", x: 510, y: 220,
      place: "أُور · بِلاد الرَّافِدَين", continent: "آسيا",
      people: "قَومُ نَمرود",
      miracle: "النَّارُ بَرداً وسَلاما",
      times: "ذُكِرَ 69 مَرَّة",
      story: "خَليلُ الرَّحمن. حَطَّمَ أَصنامَ قَومِه، ثمَّ هاجَر إلى الشَّام، وبَنى مع ابنِه إسماعيل بَيتَ اللهِ الحَرام في مَكَّة." },

    { id: "ismail",   name: "إسماعيل", ar: "عليه السلام", x: 460, y: 360,
      place: "مَكَّة المُكَرَّمَة", continent: "آسيا",
      people: "جُرهُم وأهلُ مَكَّة",
      miracle: "تَفجيرُ زَمزَم",
      times: "ذُكِرَ 12 مَرَّة",
      story: "بِكْرُ إبراهيم. صَبَر على الذَّبح، وسَكَنَ مَكَّةَ مع أُمِّه هاجَر، ومنه جاء العَرَب، ومنه نَسَبُ النبيِّ مُحَمَّد ﷺ." },

    { id: "musa",     name: "موسى",    ar: "عليه السلام", x: 320, y: 250,
      place: "مِصر · جَبَل الطُّور", continent: "إفريقيا",
      people: "بَنو إسرائيل · فِرعَون",
      miracle: "العَصا واليَدُ البَيضاء",
      times: "ذُكِرَ 136 مَرَّة",
      story: "كَلَّمَه اللهُ تَكليما. أَنجاه اللهُ مِن فِرعَون، وفَلَقَ له البَحر، وأَنزَلَ عليه التَّوراة." },

    { id: "yusuf",    name: "يوسف",    ar: "عليه السلام", x: 260, y: 240,
      place: "مِصر القَديمة", continent: "إفريقيا",
      people: "أَهلُ مِصرَ زَمَنَ المَلِك",
      miracle: "تَأويلُ الرُّؤيا",
      times: "ذُكِرَ 27 مَرَّة",
      story: "أَلقاه إخوتُه في الجُبّ، فبِيعَ في مِصر، فسَجَنَه المَلِك، ثمَّ صار خازِناً على الأرض، ولَمَّ شَملَ الأَهل." },

    { id: "isa",      name: "عيسى",    ar: "عليه السلام", x: 365, y: 215,
      place: "بَيتُ لَحم · فِلَسطين", continent: "آسيا",
      people: "بَنو إسرائيل",
      miracle: "إِحياءُ المَوتى بِإِذنِ اللهِ",
      times: "ذُكِرَ 25 مَرَّة",
      story: "ابنُ مَريَمَ العَذراء. تَكَلَّمَ في المَهد، وأَنزَلَ اللهُ علَيه الإنجيل، ورَفَعه إلَيه، وسَيَنزِل آخِرَ الزَّمان." },

    { id: "nuh",      name: "نوح",     ar: "عليه السلام", x: 540, y: 145,
      place: "الجُودِيُّ · شَمال", continent: "آسيا",
      people: "قَومُه الَّذين كَذَّبوه",
      miracle: "السَّفينة · الطُّوفان",
      times: "ذُكِرَ 43 مَرَّة",
      story: "دَعا قَومَه ألفَ سَنَةٍ إلَّا خَمسين. صَنَع السَّفينة بِأَمر اللهِ، فأَغرَقَ اللهُ الكافِرين، ونَجا المُؤمِنون." },

    { id: "hud",      name: "هُود",     ar: "عليه السلام", x: 500, y: 425,
      place: "الأَحقاف · اليَمَن", continent: "آسيا",
      people: "قَومُ عَاد",
      miracle: "الرِّيحُ العَقيم",
      times: "ذُكِرَ 7 مَرَّات",
      story: "أُرسِل إلى قَوم عَاد، وكانوا أَقوياءَ بَنَوا بِكلِّ ريعٍ آيَة. كَذَّبوه فأَهلَكَهم اللهُ بِريحٍ صَرصَرٍ عاتِيَة." },

    { id: "salih",    name: "صالح",    ar: "عليه السلام", x: 420, y: 290,
      place: "الحِجْر · شَمال الجَزيرة", continent: "آسيا",
      people: "قَومُ ثَمود",
      miracle: "ناقَةُ اللهِ",
      times: "ذُكِرَ 9 مَرَّات",
      story: "نَحَتَ قَومُه الجِبالَ بُيوتاً. طَلَبوا آيَةً فأَخرَجَ اللهُ ناقَةً مِن صَخرة، فعَقَروها، فأَهلَكَهم اللهُ بِالصَّيحَة." },

    { id: "shuayb",   name: "شعيب",    ar: "عليه السلام", x: 395, y: 240,
      place: "مَدْيَن · شَمال", continent: "آسيا",
      people: "أَهلُ مَدْيَنَ وَأَيكَة",
      miracle: "الظُّلَّةُ المُحرِقَة",
      times: "ذُكِرَ 11 مَرَّة",
      story: "خَطيبُ الأَنبياء. دَعا قَومَه إلى تَوحيدِ اللهِ وإيفاءِ الكَيلِ والمِيزان، فأَهلَكَهم اللهُ بِالرَّجفَة." },

    { id: "muhammad", name: "مُحَمَّد",  ar: "ﷺ صَلَّى اللهُ عَلَيهِ وسَلَّم", x: 478, y: 335,
      place: "مَكَّة والمَدينة", continent: "آسيا",
      people: "العَرَبُ ثُمَّ النَّاسُ كُلُّهم",
      miracle: "القُرآنُ الكَريم",
      times: "آخِرُ الأنبياءِ والمُرسَلين",
      story: "خاتَمُ النَّبيِّين. وُلِدَ في مَكَّة، وأُنزِلَ علَيه القُرآنُ في غارِ حِراء، وهاجَرَ إلى المَدينة، وَأَتَمَّ اللهُ بِه الدِّين." },
  ];

  const STORAGE_KEY = "mk_prophetmap_v1";
  const STORE = Storage.get(STORAGE_KEY, { visited: {}, lastIdx: -1 });

  let activeIdx = -1;

  const SVG_NS = "http://www.w3.org/2000/svg";

  /* ============ Render Map ============ */
  function renderMap() {
    const svg = document.getElementById("map-svg");
    svg.innerHTML = "";

    // ماء — خَلفيَّة شفافة
    const water = el("rect", { x: 0, y: 0, width: 800, height: 460, class: "pm-water" });
    svg.appendChild(water);

    // أرضٍ
    LANDS.forEach(L => {
      const p = el("path", { d: L.d, class: "pm-land" });
      svg.appendChild(p);
    });
    // تَسميات القارَّات / المَناطِق (مَطموسة)
    LANDS.forEach(L => {
      const t = el("text", { x: L.lx, y: L.ly, class: "pm-label" });
      t.textContent = L.label;
      svg.appendChild(t);
    });

    // نَهرا دِجلة والفُرات (تَخطيطيّان)
    svg.appendChild(el("path", { d: "M540,140 Q525,180 510,220 Q500,255 510,260", class: "pm-river" }));
    svg.appendChild(el("path", { d: "M560,145 Q545,180 530,220 Q520,255 530,260", class: "pm-river" }));
    // النِّيل
    svg.appendChild(el("path", { d: "M250,420 Q260,360 250,300 Q245,250 260,210 Q275,180 290,160", class: "pm-river" }));

    // النِّقاط
    PROPHETS.forEach((p, i) => {
      const g = el("g", { class: "pm-spot" + (isVisited(p.id) ? " visited" : "") });
      g.setAttribute("data-idx", i);
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 14, class: "pulse" }));
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 7,  class: "pin" }));
      if (isVisited(p.id)) {
        const ck = el("text", { x: p.x, y: p.y + 1, class: "check" });
        ck.textContent = "✓";
        g.appendChild(ck);
      }
      g.addEventListener("click", () => openProphet(i));
      svg.appendChild(g);

      // تَسميات صَغيرة فَوقَ النَّقطة
      const labelText = el("text", { x: p.x, y: p.y - 14, class: "pm-spot-label" });
      labelText.textContent = p.name;
      svg.appendChild(labelText);
    });
  }

  function el(tag, attrs) {
    const e = document.createElementNS(SVG_NS, tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") e.setAttribute("class", v);
      else e.setAttribute(k, v);
    });
    return e;
  }

  function isVisited(id) { return !!STORE.visited[id]; }

  /* ============ List ============ */
  function renderList() {
    const root = document.getElementById("prophet-list");
    root.innerHTML = "";
    PROPHETS.forEach((p, i) => {
      const it = document.createElement("div");
      it.className = "item" + (isVisited(p.id) ? " visited" : "");
      it.innerHTML = `
        <span class="pin-ic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-7.6 8-14a8 8 0 1 0-16 0c0 6.4 8 14 8 14Zm0-11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
        </span>
        <div style="flex:1;">
          <div class="name">${p.name} <span style="font-weight:500; color:var(--muted);">${p.ar.includes("ﷺ") ? "ﷺ" : "ع.س"}</span></div>
          <div class="place">${p.place}</div>
        </div>
      `;
      it.addEventListener("click", () => openProphet(i));
      root.appendChild(it);
    });
  }

  /* ============ Modal ============ */
  function openProphet(i) {
    activeIdx = i;
    const p = PROPHETS[i];
    document.getElementById("m-place").textContent = p.place;
    document.getElementById("m-name").textContent = p.name + (p.ar.includes("ﷺ") ? " ﷺ" : "");
    document.getElementById("m-arabic").textContent = p.ar;
    document.getElementById("m-people").textContent = p.people;
    document.getElementById("m-miracle").textContent = p.miracle;
    document.getElementById("m-times").textContent = p.times;
    document.getElementById("m-story").textContent = p.story;

    if (!isVisited(p.id)) {
      STORE.visited[p.id] = Date.now();
      STORE.lastIdx = i;
      Storage.set(STORAGE_KEY, STORE);
      AudioBus.success();
      Particles.fire(60, { colors: ["#E0D5F2","#FFD9C2","#CDEBD7","#FFE9A8"] });
      renderMap();
      renderList();
      updateHUD();
    } else {
      AudioBus.pop();
    }
    Modal.open("prophet-modal");
  }

  function updateHUD() {
    const count = Object.keys(STORE.visited).length;
    document.getElementById("visited").textContent = count;
    document.getElementById("best").textContent = `${count}/${PROPHETS.length}`;
    const cont = new Set();
    PROPHETS.forEach(p => { if (isVisited(p.id)) cont.add(p.continent); });
    document.getElementById("continents").textContent = cont.size;
    const last = STORE.lastIdx >= 0 ? PROPHETS[STORE.lastIdx] : null;
    document.getElementById("last-visit").textContent = last ? last.name : "—";
    document.getElementById("region-name").textContent = last ? last.continent : "—";
  }

  /* ============ Bind ============ */
  document.getElementById("next-prophet").addEventListener("click", () => {
    Modal.close("prophet-modal");
    // pick next unvisited or just next
    let next = (activeIdx + 1) % PROPHETS.length;
    for (let k = 0; k < PROPHETS.length; k++) {
      const c = (activeIdx + 1 + k) % PROPHETS.length;
      if (!isVisited(PROPHETS[c].id)) { next = c; break; }
    }
    setTimeout(() => openProphet(next), 250);
  });
  Modal.bindClose("prophet-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  renderMap();
  renderList();
  updateHUD();
})();
