/* ============================================================
   CREATURE LAB — مختبر المخلوقات
   مَخلوقات ودَورات حَياتِها (مَراحِل تَخطيطيَّة بـSVG).
   ============================================================ */

(function () {
  "use strict";

  // كلُّ مَخلوقٍ: 4 مَراحِل. كلُّ مَرحَلة: render(svg) + نَصّ.
  const CREATURES = [
    {
      id: "bee", ic: "🐝", name: "النَّحلة", hab: "الخَلِيَّة",
      ayah: "«وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ» — النحل 68",
      steps: [
        { name: "بَيضَة", desc: "تَضَع المَلِكَة بَيضَةً صَغيرة في خَلِيَّةٍ شَمعِيَّة.", render: bee1 },
        { name: "يَرَقَة", desc: "يَفقِسُ البَيضُ يَرَقَةً تُطعِمُها العامِلات بالغِذاء المَلَكي.", render: bee2 },
        { name: "شَرنَقَة", desc: "تَتَحَوَّل اليَرَقةُ داخِل غَطاءِ شَمع، وتَكتَمِل أَجزاؤها.", render: bee3 },
        { name: "نَحلَةٌ بالِغة", desc: "تَخرُج نَحلَةٌ جاهِزَة لِجَمع الرَّحيق وصُنع العَسَل.", render: bee4 },
      ],
    },
    {
      id: "butterfly", ic: "🦋", name: "الفَراشة", hab: "الحَديقَة",
      ayah: "«صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ» — النمل 88",
      steps: [
        { name: "بَيضَة", desc: "تَضَع الفَراشةُ بَيضةً صَغيرَةً على وَرَقَة.", render: bf1 },
        { name: "يَرَقَة (دودة)", desc: "تَفقِسُ يَرَقةٌ تَأكُل الأوراقَ وتَكبُر بِسُرعة.", render: bf2 },
        { name: "شَرنَقَة", desc: "تَلتَفُّ في شَرنَقَةٍ مُعَلَّقة، فتَتَغَيَّر داخِلَها.", render: bf3 },
        { name: "فَراشَة", desc: "تَخرُج فَراشَةٌ بِأَجنِحَةٍ مُلَوَّنة تَطير بَين الأزهار.", render: bf4 },
      ],
    },
    {
      id: "frog", ic: "🐸", name: "الضِّفدَع", hab: "البِركَة",
      ayah: "«وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ» — الأنبياء 30",
      steps: [
        { name: "بَيضٌ في الماء", desc: "تَضَع الضِّفدَعةُ مِئاتِ البَيضِ كَهُلامٍ في الماء.", render: fr1 },
        { name: "شَرغوف", desc: "يَخرُج شَرغوفٌ صَغير له ذَيلٌ يَسبَح بِه.", render: fr2 },
        { name: "تَنمو أرجُل", desc: "تَنمو الأَرجُل ويَختَفي الذَّيلُ تَدريجياً.", render: fr3 },
        { name: "ضِفدَعٌ بالِغ", desc: "ضِفدَعٌ كامِل يَقفِزُ بَينَ الماءِ واليابِسة.", render: fr4 },
      ],
    },
    {
      id: "chick", ic: "🐣", name: "الكَتكوت", hab: "العُشّ",
      ayah: "«وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا» — الفرقان 54",
      steps: [
        { name: "بَيضَةٌ في العُشّ", desc: "تَضَع الأُمّ بَيضةً وتَحتَضِنُها بِدِفءٍ شَديد.", render: ch1 },
        { name: "نُمُوُّ الجَنين", desc: "يَنمو الكَتكوت داخِل البَيضَة في 21 يَوماً.", render: ch2 },
        { name: "كَسرُ القِشرة", desc: "يَكسِرُ الكَتكوتُ القِشرةَ بِمِنقارِه الصَّغير.", render: ch3 },
        { name: "كَتكوتٌ يَركَض", desc: "يَخرُج كَتكوتٌ مُغطًّى بِرِيشٍ أَصفَر يَركض ويُغَرِّد.", render: ch4 },
      ],
    },
    {
      id: "palm", ic: "🌴", name: "النَّخلَة", hab: "البُستان",
      ayah: "«فَأَنبَتْنَا فِيهَا حَبًّا وعِنَبًا» — عبس 27-28",
      steps: [
        { name: "نَواةٌ في التُّراب", desc: "تُغرَس نَواةُ تَمر في الأرضِ مع الماء.", render: pa1 },
        { name: "بُرعُمٌ يَخرُج", desc: "يَخرُج بُرعُمٌ أَخضَرُ صَغير يَتَّجِه نَحوَ الشَّمس.", render: pa2 },
        { name: "نَخلَةٌ شابَّة", desc: "تَطول النَّخلَة وتَنمو لها سَعَفاتٌ خَضراء.", render: pa3 },
        { name: "نَخلَةٌ بِالتَّمر", desc: "تُثمِرُ النَّخلَة عُذوقاً مِنَ التَّمر اللَّذيذ.", render: pa4 },
      ],
    },
  ];

  const STORAGE_KEY = "mk_creaturelab_v1";
  const STORE = Storage.get(STORAGE_KEY, { discovered: {}, cycles: 0 });

  let idx = 0;       // الكائن
  let step = 0;      // المَرحَلة 0..3
  let autoTimer = null;

  const SVG_NS = "http://www.w3.org/2000/svg";

  /* ============ Renderers (SVG شَخصِيَّات تَخطيطيَّة) ============ */
  function clearSvg() {
    const svg = document.getElementById("cl-art");
    svg.innerHTML = "";
    // أرضية
    svg.appendChild(el("rect", { x: 0, y: 230, width: 480, height: 50, fill: "#CDEBD7", opacity: 0.5 }));
    return svg;
  }
  function el(tag, attrs, children) {
    const e = document.createElementNS(SVG_NS, tag);
    if (attrs) Object.entries(attrs).forEach(([k,v]) => e.setAttribute(k, v));
    if (children) children.forEach(c => e.appendChild(c));
    return e;
  }
  function withClass(node, c) { node.setAttribute("class", c); return node; }

  /* —— نَحلة —— */
  function bee1(s) { // بَيضة في خَلِيَّة
    drawHive(s);
    s.appendChild(withClass(el("ellipse", { cx: 240, cy: 150, rx: 7, ry: 10, fill: "#FFFBF3", stroke: "#C9A961", "stroke-width": 1.5 }), "cl-shape cl-fade-in"));
  }
  function bee2(s) { // يَرَقَة بَيضاء صَغيرة
    drawHive(s);
    s.appendChild(withClass(el("path", { d: "M225 155 q15 -8 30 0 q-5 6 -15 6 q-10 0 -15 -6 z", fill: "#FFE9A8", stroke: "#C9A961", "stroke-width": 1.5 }), "cl-shape cl-fade-in"));
  }
  function bee3(s) { // شَرنَقة مَختومة
    drawHive(s);
    s.appendChild(withClass(el("circle", { cx: 240, cy: 152, r: 14, fill: "#FFE9A8", stroke: "#8A6510", "stroke-width": 2 }), "cl-shape cl-fade-in"));
    s.appendChild(el("path", { d: "M230 152 q10 -6 20 0 M230 154 q10 -3 20 0", stroke: "#8A6510", "stroke-width": 1, fill: "none" }));
  }
  function bee4(s) { // نَحلة طائِرة
    drawHive(s, true);
    const g = el("g", {});
    g.appendChild(el("ellipse", { cx: 280, cy: 130, rx: 24, ry: 14, fill: "#FFE9A8", stroke: "#1F2540", "stroke-width": 1.5 }));
    g.appendChild(el("path", { d: "M270 119 v22 M280 117 v26 M290 119 v22", stroke: "#1F2540", "stroke-width": 3, "stroke-linecap": "round" }));
    g.appendChild(el("circle", { cx: 256, cy: 128, r: 7, fill: "#1F2540" }));
    g.appendChild(el("ellipse", { cx: 280, cy: 110, rx: 16, ry: 7, fill: "#fff", opacity: 0.7 }));
    g.appendChild(el("ellipse", { cx: 290, cy: 112, rx: 14, ry: 6, fill: "#fff", opacity: 0.5 }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-float");
    s.appendChild(g);
  }
  function drawHive(s, withBee) {
    // خَلِيَّة بِأَقراصٍ سُداسِيَّة
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 5; c++) {
        const cx = 180 + c*32 + (r%2)*16;
        const cy = 100 + r*28;
        s.appendChild(el("polygon", { points: hex(cx, cy, 15), fill: "#FFE9A8", stroke: "#C9A961", "stroke-width": 1 }));
      }
    }
  }

  /* —— فَراشة —— */
  function bf1(s) {
    drawLeaf(s);
    s.appendChild(withClass(el("circle", { cx: 250, cy: 168, r: 4, fill: "#FFD9C2", stroke: "#B5612A", "stroke-width": 1.2 }), "cl-shape cl-fade-in"));
  }
  function bf2(s) {
    drawLeaf(s);
    const g = el("g", {});
    g.appendChild(el("path", { d: "M210 168 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0", stroke: "#5A3F94", "stroke-width": 10, fill: "none", "stroke-linecap": "round" }));
    g.appendChild(el("circle", { cx: 295, cy: 164, r: 8, fill: "#5A3F94" }));
    g.appendChild(el("circle", { cx: 293, cy: 162, r: 1.5, fill: "#fff" }));
    g.setAttribute("class", "cl-shape cl-fade-in");
    s.appendChild(g);
  }
  function bf3(s) {
    drawLeaf(s, "branch");
    const g = el("g", {});
    g.appendChild(el("path", { d: "M260 110 q-12 30 0 60 q12 -30 0 -60", fill: "#C9A961", stroke: "#8A6510", "stroke-width": 1.5 }));
    g.appendChild(el("path", { d: "M260 115 v45 M252 130 q8 4 16 0 M254 145 q6 3 12 0", stroke: "#8A6510", "stroke-width": 1, fill: "none" }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-wave");
    s.appendChild(g);
  }
  function bf4(s) {
    drawLeaf(s, "branch");
    const g = el("g", {});
    g.appendChild(el("ellipse", { cx: 260, cy: 140, rx: 3, ry: 18, fill: "#1F2540" }));
    g.appendChild(el("path", { d: "M260 130 q-30 -25 -50 -5 q-5 20 20 25 q15 -5 30 -10 z", fill: "#E0D5F2", stroke: "#5A3F94", "stroke-width": 1.5 }));
    g.appendChild(el("path", { d: "M260 130 q30 -25 50 -5 q5 20 -20 25 q-15 -5 -30 -10 z", fill: "#E0D5F2", stroke: "#5A3F94", "stroke-width": 1.5 }));
    g.appendChild(el("path", { d: "M260 150 q-25 -5 -40 15 q-3 12 25 8 q10 -10 15 -15 z", fill: "#FFE9A8", stroke: "#5A3F94", "stroke-width": 1.5 }));
    g.appendChild(el("path", { d: "M260 150 q25 -5 40 15 q3 12 -25 8 q-10 -10 -15 -15 z", fill: "#FFE9A8", stroke: "#5A3F94", "stroke-width": 1.5 }));
    g.appendChild(el("circle", { cx: 252, cy: 115, r: 2, fill: "#1F2540" }));
    g.appendChild(el("circle", { cx: 268, cy: 115, r: 2, fill: "#1F2540" }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-float");
    s.appendChild(g);
  }
  function drawLeaf(s, type) {
    // غُصن
    s.appendChild(el("path", { d: "M120 220 q60 -50 200 -90 q60 -10 120 0", stroke: "#6A8E7F", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    // ورَقَة
    s.appendChild(el("path", { d: "M180 170 q40 -30 80 -10 q-10 40 -80 10 z", fill: "#CDEBD7", stroke: "#2F7A52", "stroke-width": 1.2 }));
    s.appendChild(el("path", { d: "M200 170 q20 -10 40 0", stroke: "#2F7A52", "stroke-width": 0.8, fill: "none" }));
  }

  /* —— ضِفدَع / شَرغوف —— */
  function fr1(s) {
    drawPond(s);
    // كُتلة بَيض
    for (let i = 0; i < 12; i++) {
      const cx = 180 + (i%4)*22 + (Math.floor(i/4)%2)*10;
      const cy = 170 + Math.floor(i/4)*14;
      s.appendChild(el("circle", { cx, cy, r: 8, fill: "rgba(207,227,242,0.7)", stroke: "#2E5F8A", "stroke-width": 1 }));
      s.appendChild(el("circle", { cx, cy, r: 3, fill: "#1F2540" }));
    }
  }
  function fr2(s) {
    drawPond(s);
    const g = el("g", {});
    g.appendChild(el("ellipse", { cx: 240, cy: 170, rx: 14, ry: 9, fill: "#3D4564" }));
    g.appendChild(el("path", { d: "M254 170 q12 -8 18 0 q-6 -2 -10 0 q12 8 18 0", stroke: "#3D4564", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    g.appendChild(el("circle", { cx: 232, cy: 167, r: 2, fill: "#fff" }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-wave");
    s.appendChild(g);
  }
  function fr3(s) {
    drawPond(s);
    const g = el("g", {});
    g.appendChild(el("ellipse", { cx: 240, cy: 170, rx: 18, ry: 12, fill: "#2F7A52" }));
    g.appendChild(el("path", { d: "M254 174 q10 6 4 14", stroke: "#2F7A52", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }));
    g.appendChild(el("path", { d: "M225 178 q-8 8 -2 16 M255 178 q8 8 2 16", stroke: "#2F7A52", "stroke-width": 5, fill: "none", "stroke-linecap": "round" }));
    g.appendChild(el("circle", { cx: 230, cy: 164, r: 3, fill: "#fff" }));
    g.appendChild(el("circle", { cx: 230, cy: 164, r: 1.4, fill: "#1F2540" }));
    g.setAttribute("class", "cl-shape cl-fade-in");
    s.appendChild(g);
  }
  function fr4(s) {
    drawPond(s);
    const g = el("g", {});
    // ورقة لوتس
    s.appendChild(el("ellipse", { cx: 320, cy: 195, rx: 36, ry: 8, fill: "#CDEBD7" }));
    g.appendChild(el("ellipse", { cx: 240, cy: 170, rx: 26, ry: 18, fill: "#6A8E7F" }));
    g.appendChild(el("circle", { cx: 226, cy: 156, r: 7, fill: "#6A8E7F" }));
    g.appendChild(el("circle", { cx: 254, cy: 156, r: 7, fill: "#6A8E7F" }));
    g.appendChild(el("circle", { cx: 226, cy: 156, r: 3, fill: "#fff" }));
    g.appendChild(el("circle", { cx: 254, cy: 156, r: 3, fill: "#fff" }));
    g.appendChild(el("circle", { cx: 226, cy: 156, r: 1.4, fill: "#1F2540" }));
    g.appendChild(el("circle", { cx: 254, cy: 156, r: 1.4, fill: "#1F2540" }));
    g.appendChild(el("path", { d: "M232 178 q8 4 16 0", stroke: "#1F2540", "stroke-width": 1.4, fill: "none", "stroke-linecap": "round" }));
    g.appendChild(el("path", { d: "M218 192 l-12 6 M262 192 l12 6", stroke: "#2F7A52", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-float");
    s.appendChild(g);
  }
  function drawPond(s) {
    s.appendChild(el("ellipse", { cx: 240, cy: 200, rx: 200, ry: 30, fill: "rgba(207,227,242,0.55)", stroke: "#C3DDEE", "stroke-width": 2 }));
  }

  /* —— كَتكوت —— */
  function ch1(s) {
    drawNest(s);
    s.appendChild(withClass(el("ellipse", { cx: 240, cy: 155, rx: 22, ry: 28, fill: "#FFFBF3", stroke: "#C9A961", "stroke-width": 1.6 }), "cl-shape cl-fade-in"));
    s.appendChild(el("ellipse", { cx: 235, cy: 148, rx: 8, ry: 12, fill: "#fff", opacity: 0.7 }));
  }
  function ch2(s) {
    drawNest(s);
    const g = el("g", {});
    g.appendChild(el("ellipse", { cx: 240, cy: 155, rx: 22, ry: 28, fill: "#FFFBF3", stroke: "#C9A961", "stroke-width": 1.6 }));
    g.appendChild(el("circle", { cx: 240, cy: 158, r: 11, fill: "#FFE9A8" }));
    g.appendChild(el("circle", { cx: 244, cy: 155, r: 1.5, fill: "#1F2540" }));
    g.setAttribute("class", "cl-shape cl-fade-in");
    s.appendChild(g);
  }
  function ch3(s) {
    drawNest(s);
    s.appendChild(el("path", { d: "M222 135 l8 6 -3 5 7 -1 -4 8 8 -3 -2 6 6 -4 1 7 5 -6 4 6 3 -8 5 5 -3 -8 6 0 -5 -8 8 1 -4 -6 6 -4 -8 -2 z M222 135 l36 0 0 50 -36 0 z", fill: "#FFFBF3", stroke: "#C9A961", "stroke-width": 1.6 }));
    const g = el("g", {});
    g.appendChild(el("circle", { cx: 240, cy: 158, r: 11, fill: "#FFE9A8" }));
    g.appendChild(el("path", { d: "M232 160 q8 4 16 0", stroke: "#1F2540", "stroke-width": 1, fill: "none" }));
    g.appendChild(el("circle", { cx: 244, cy: 155, r: 1.5, fill: "#1F2540" }));
    g.setAttribute("class", "cl-shape cl-fade-in");
    s.appendChild(g);
  }
  function ch4(s) {
    drawNest(s);
    const g = el("g", {});
    g.appendChild(el("circle", { cx: 240, cy: 155, r: 18, fill: "#FFE9A8" }));
    g.appendChild(el("circle", { cx: 240, cy: 135, r: 12, fill: "#FFE9A8" }));
    g.appendChild(el("polygon", { points: "240,138 248,143 240,148", fill: "#B5612A" }));
    g.appendChild(el("circle", { cx: 244, cy: 132, r: 1.6, fill: "#1F2540" }));
    g.appendChild(el("path", { d: "M232 172 l-4 8 M248 172 l4 8", stroke: "#B5612A", "stroke-width": 2, fill: "none", "stroke-linecap": "round" }));
    g.setAttribute("class", "cl-shape cl-fade-in cl-float");
    s.appendChild(g);
  }
  function drawNest(s) {
    s.appendChild(el("path", { d: "M180 185 q60 -25 120 0 q-10 25 -60 25 q-50 0 -60 -25 z", fill: "#B5612A", opacity: 0.7 }));
    for (let i = 0; i < 10; i++) {
      const x1 = 180 + Math.random()*120;
      const x2 = x1 + 16;
      s.appendChild(el("path", { d: `M${x1.toFixed(0)} 195 q8 -10 ${(x2).toFixed(0)} -5`, stroke: "#8A6510", "stroke-width": 1.2, fill: "none" }));
    }
  }

  /* —— نَخلة —— */
  function pa1(s) {
    drawGround(s);
    s.appendChild(withClass(el("ellipse", { cx: 240, cy: 200, rx: 8, ry: 14, fill: "#B5612A", stroke: "#8A6510", "stroke-width": 1.5 }), "cl-shape cl-fade-in"));
  }
  function pa2(s) {
    drawGround(s);
    s.appendChild(el("path", { d: "M240 200 q0 -20 0 -40", stroke: "#2F7A52", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    s.appendChild(el("path", { d: "M240 160 q-12 -8 -10 -18 M240 160 q12 -8 10 -18", stroke: "#2F7A52", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    s.appendChild(el("ellipse", { cx: 240, cy: 202, rx: 8, ry: 10, fill: "#B5612A", opacity: 0.7 }));
  }
  function pa3(s) {
    drawGround(s);
    s.appendChild(el("rect", { x: 234, y: 80, width: 12, height: 130, fill: "#B5612A", stroke: "#8A6510", "stroke-width": 1.2 }));
    [70, 80, 90].forEach((y, i) => {
      s.appendChild(el("path", { d: `M240 ${y} q-40 -10 -50 -30 M240 ${y} q40 -10 50 -30 M240 ${y} q-20 -15 -10 -35 M240 ${y} q20 -15 10 -35 M240 ${y} q-30 0 -40 -20 M240 ${y} q30 0 40 -20`, stroke: "#2F7A52", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }));
    });
  }
  function pa4(s) {
    drawGround(s);
    s.appendChild(el("rect", { x: 234, y: 80, width: 12, height: 130, fill: "#B5612A", stroke: "#8A6510", "stroke-width": 1.2 }));
    s.appendChild(el("path", { d: "M240 80 q-50 -10 -65 -35 M240 80 q50 -10 65 -35 M240 80 q-30 -25 -22 -50 M240 80 q30 -25 22 -50 M240 80 q-45 5 -55 -10 M240 80 q45 5 55 -10", stroke: "#2F7A52", "stroke-width": 5, fill: "none", "stroke-linecap": "round" }));
    // عُذوق التَّمر
    [220, 245, 260].forEach((x, i) => {
      const yo = 85 + i*6;
      for (let k = 0; k < 8; k++) {
        s.appendChild(el("ellipse", { cx: x + (k%2)*6, cy: yo + k*4, rx: 3.5, ry: 4.5, fill: "#8A6510" }));
      }
    });
  }
  function drawGround(s) {
    s.appendChild(el("path", { d: "M0 220 q120 -10 240 0 q120 10 240 0 v60 h-480 z", fill: "#FFE9A8", opacity: 0.45 }));
  }

  function hex(cx, cy, r) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI/3)*i + Math.PI/6;
      pts.push(`${(cx + Math.cos(a)*r).toFixed(1)},${(cy + Math.sin(a)*r).toFixed(1)}`);
    }
    return pts.join(" ");
  }

  /* ============ Render ============ */
  function renderScene() {
    const svg = clearSvg();
    const cr = CREATURES[idx];
    cr.steps[step].render(svg);
  }

  function renderInfo() {
    const cr = CREATURES[idx];
    const s = cr.steps[step];
    document.getElementById("cl-step").textContent = step + 1;
    document.getElementById("cl-creature").textContent = cr.name;
    document.getElementById("step-name").textContent = `${cr.ic} ${s.name}`;
    document.getElementById("step-desc").textContent = s.desc;
    document.getElementById("step-ayah").textContent = cr.ayah;
  }

  function renderTimeline() {
    const root = document.getElementById("timeline");
    root.innerHTML = "";
    CREATURES[idx].steps.forEach((s, i) => {
      const p = document.createElement("button");
      p.className = "cl-step-pill" + (i === step ? " active" : (i < step ? " done" : ""));
      p.innerHTML = `<span class="num">${i+1}</span><span>${s.name}</span>`;
      p.addEventListener("click", () => goStep(i));
      root.appendChild(p);
    });
  }

  function renderList() {
    const root = document.getElementById("creature-list");
    root.innerHTML = "";
    CREATURES.forEach((c, i) => {
      const it = document.createElement("div");
      const done = !!STORE.discovered[c.id];
      it.className = "item" + (i === idx ? " current" : "") + (done ? " done" : "");
      it.innerHTML = `
        <span class="ic">${c.ic}</span>
        <div style="flex:1;">
          <div class="name">${c.name} ${done ? "✓" : ""}</div>
          <div class="hab">${c.hab}</div>
        </div>
      `;
      it.addEventListener("click", () => { idx = i; step = 0; refresh(); });
      root.appendChild(it);
    });
  }

  function updateHUD() {
    document.getElementById("cl-logged").textContent = Object.keys(STORE.discovered).length;
    document.getElementById("cl-cycles").textContent = STORE.cycles;
    document.getElementById("best").textContent =
      `${Object.keys(STORE.discovered).length}/${CREATURES.length}`;
  }

  function goStep(n) {
    if (n < 0 || n >= CREATURES[idx].steps.length) return;
    step = n;
    refresh();
    AudioBus.tick(560 + step*40);
  }

  function nextStep() {
    if (step < CREATURES[idx].steps.length - 1) {
      goStep(step + 1);
    } else {
      // اكتَمَلَت الدَّورة
      const id = CREATURES[idx].id;
      if (!STORE.discovered[id]) {
        STORE.discovered[id] = Date.now();
        STORE.cycles++;
        Storage.set(STORAGE_KEY, STORE);
        AudioBus.success();
        Particles.fire(80, { colors: ["#CDEBD7","#FFE9A8","#FFD9C2"] });
        renderList();
        updateHUD();
      } else {
        AudioBus.pop();
      }
      // الانتقال للمَخلوق التالي تلقائياً
      if (autoTimer) stopAuto();
    }
  }
  function prevStep() { if (step > 0) goStep(step - 1); }

  function refresh() {
    renderScene();
    renderInfo();
    renderTimeline();
    renderList();
    updateHUD();
  }

  /* ============ Auto-play ============ */
  function toggleAuto() {
    const btn = document.getElementById("btn-auto");
    if (autoTimer) { stopAuto(); return; }
    btn.classList.add("playing");
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg> إِيقاف`;
    autoTimer = setInterval(() => {
      if (step < CREATURES[idx].steps.length - 1) nextStep();
      else { stopAuto(); }
    }, 1600);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
    const btn = document.getElementById("btn-auto");
    btn.classList.remove("playing");
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9z"/></svg> تَشغيل تِلقائي`;
  }

  /* ============ Bind ============ */
  document.getElementById("btn-next").addEventListener("click", nextStep);
  document.getElementById("btn-back").addEventListener("click", prevStep);
  document.getElementById("btn-auto").addEventListener("click", toggleAuto);
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  refresh();
})();
