/* مكعّبات البناء 3D — Brick Builder 3D (Brain Club).
   «ابنِ النموذج» = guided build: a glowing outline shows where the next piece goes; the child picks the right piece
   (colour + size, counted by its studs) from three choices and it drops into place, step by step, like a building booklet.
   Models: the Kaaba, the Prophet's Mosque, the Dome of the Rock, al-Aqsa (al-Qibli) mosque, a palm tree, a camel, a sheep, a Ramadan lantern.
   «بناء حرّ» = free build: choose a colour and a size, tap the green plate or the top/side of a brick to add, rubber to remove.
   Drag to turn, two fingers / wheel to zoom. Original look (generic studded bricks) — not any toy brand's sets. */
import * as THREE from '../../lab/vendor/three.module.min.js';

const B0 = window.Brain; if (!B0) throw new Error('Brain hub missing');
let B = null;
const N = 16, H = 1.2;

/* ── colours ── */
const COL = { k: '#26262E', y: '#E3B23C', w: '#F2EFE6', c: '#E4D2A4', g: '#2E9E5B', G: '#3E7F35', b: '#2D6FC4', B: '#1F4E8C', s: '#9AA3AD', n: '#7A4B2A', d: '#4A2E1A', o: '#E8862F', r: '#D2453B', t: '#C99A5B' };
const CN = { k: ['أسود', 'black'], y: ['ذهبيّ', 'gold'], w: ['أبيض', 'white'], c: ['كريميّ', 'cream'], g: ['أخضر', 'green'], G: ['أخضر غامق', 'dark green'], b: ['أزرق', 'blue'], B: ['أزرق غامق', 'dark blue'], s: ['رماديّ', 'grey'], n: ['بنّيّ', 'brown'], d: ['بنّيّ غامق', 'dark brown'], o: ['برتقاليّ', 'orange'], r: ['أحمر', 'red'], t: ['لون الجمل', 'camel'] };
const SHAPE = { dome: ['قبّة', 'dome'], cone: ['رأس مخروطيّ', 'cone top'], cyl: ['أسطوانة', 'round drum'], moon: ['هلال', 'crescent'] };

/* ── a tiny model language: voxels (cell x 0..15, layer y, cell z 0..15) + special round pieces ── */
function mk() { return { v: new Map(), sp: [] }; }
function put(m, x, y, z, c) { m.v.set(x + ',' + y + ',' + z, c); }
function box(m, x0, y0, z0, w, h, d, c) { for (let y = y0; y < y0 + h; y++) for (let z = z0; z < z0 + d; z++) for (let x = x0; x < x0 + w; x++) put(m, x, y, z, c); }
function ring(m, x0, y0, z0, w, h, d, c) { for (let y = y0; y < y0 + h; y++) for (let z = z0; z < z0 + d; z++) for (let x = x0; x < x0 + w; x++) if (x === x0 || z === z0 || x === x0 + w - 1 || z === z0 + d - 1) put(m, x, y, z, c); }
function sp(m, t, x, z, y, c, r, h) { m.sp.push({ t, x, z, y, c, r: r || 0.5, h: h || 1 }); }
function minaret(m, x, z, top, c, tip) { box(m, x, 0, z, 1, top, 1, c); sp(m, 'cone', x + 0.5, z + 0.5, top, tip || c, 0.5, 1.3); sp(m, 'moon', x + 0.5, z + 0.5, top + 1.3 / H, 'y'); }

const MODELS = [
  { id: 'kaaba', ic: '🕋', ar: 'الكعبة المشرّفة', en: 'The Kaaba', plate: '#D9D6CF', build(m) {
      ring(m, 5, 0, 5, 6, 3, 6, 'k'); ring(m, 5, 3, 5, 6, 1, 6, 'y'); box(m, 5, 4, 5, 6, 1, 6, 'k');
      put(m, 7, 1, 10, 'y'); put(m, 8, 1, 10, 'y'); put(m, 7, 2, 10, 'y'); put(m, 8, 2, 10, 'y');
      [[3, 5], [2, 6], [2, 7], [2, 8], [2, 9], [3, 10]].forEach(([x, z]) => put(m, x, 0, z, 'w'));
    },
    fact: ['الكعبة المشرّفة في مكّة المكرّمة، قِبلةُ المسلمين في صلاتهم. قال الله تعالى: ﴿إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِّلْعَالَمِينَ﴾ [آل عمران: ٩٦]. رفع قواعدَها إبراهيمُ وابنُه إسماعيلُ عليهما السلام. الحزامُ والبابُ مُذهَّبان، والجدارُ الأبيض المقوَّس هو حِجْرُ إسماعيل.',
      'The Kaaba in Makkah is the qibla Muslims face in prayer. Allah says: "Indeed, the first House set up for people is the one at Bakkah (Makkah), blessed and a guidance for the worlds" [Aal Imran 3:96]. Ibrahim and his son Ismail (peace be upon them) raised its foundations. The band and the door are golden, and the white curved wall is the Hijr of Ismail.'] },
  { id: 'nabawi', ic: '🕌', ar: 'المسجد النبويّ', en: "The Prophet's Mosque", plate: '#E9DDC0', build(m) {
      ring(m, 2, 0, 4, 12, 2, 8, 'w'); put(m, 7, 0, 11, 'd'); put(m, 8, 0, 11, 'd'); put(m, 7, 1, 11, 'd'); put(m, 8, 1, 11, 'd');
      box(m, 2, 2, 4, 12, 1, 8, 'c'); box(m, 10, 3, 5, 2, 1, 2, 'g');
      sp(m, 'dome', 11, 6, 4, 'g', 1.5); sp(m, 'moon', 11, 6, 4 + 1.5 / H, 'y');
      minaret(m, 1, 11, 7, 'w'); minaret(m, 14, 11, 7, 'w');
    },
    fact: ['المسجد النبويّ في المدينة المنوّرة، شارك النبيُّ ﷺ أصحابَه في بنائه حين هاجر إليها. قال ﷺ: «صلاةٌ في مسجدي هذا خيرٌ من ألف صلاةٍ فيما سواه إلا المسجدَ الحرام» [رواه البخاري ١١٩٠ ومسلم ١٣٩٤]. القبّة الخضراء فوق الحجرة النبويّة. (نموذج مبسّط)',
      'The Prophet\'s Mosque is in Madinah; the Prophet ﷺ worked with his companions to build it when he migrated there. He ﷺ said: "One prayer in this mosque of mine is better than a thousand prayers anywhere else, except al-Masjid al-Haram" [al-Bukhari 1190, Muslim 1394]. The Green Dome stands over the Prophet\'s chamber. (A simple model)'] },
  { id: 'dome', ic: '🟡', ar: 'قبّة الصخرة', en: 'The Dome of the Rock', plate: '#CFCAC0', build(m) {
      const inO = (i, j) => { const a = i - 4, b = j - 4; return a >= 0 && b >= 0 && a <= 7 && b <= 7 && a + b >= 2 && 7 - a + b >= 2 && a + 7 - b >= 2 && 14 - a - b >= 2; };
      for (let i = 4; i < 12; i++) for (let j = 4; j < 12; j++) if (inO(i, j)) {
        const edge = !inO(i + 1, j) || !inO(i - 1, j) || !inO(i, j + 1) || !inO(i, j - 1);
        if (edge) { put(m, i, 0, j, 'w'); put(m, i, 1, j, 'b'); put(m, i, 2, j, 'b'); }
        put(m, i, 3, j, 'w');
      }
      put(m, 7, 0, 11, 'd'); put(m, 8, 0, 11, 'd'); put(m, 7, 1, 11, 'd'); put(m, 8, 1, 11, 'd');
      sp(m, 'cyl', 8, 8, 4, 'b', 2.2, 1.4); sp(m, 'dome', 8, 8, 4 + 1.4 / H, 'y', 2.3); sp(m, 'moon', 8, 8, 4 + 1.4 / H + 2.3 / H, 'y');
    },
    fact: ['قبّة الصخرة داخل المسجد الأقصى المبارك في القدس. بناها الخليفة عبدُ الملك بن مروان، واكتمل بناؤها سنة ٧٢ هـ (نحو ٦٩١ م). جدرانها ثمانيّة الأضلاع مزيّنة بالبلاط الأزرق، وقبّتها الذهبيّة من أشهر معالم القدس.',
      'The Dome of the Rock stands inside the blessed al-Aqsa Mosque in Jerusalem. The caliph Abd al-Malik ibn Marwan built it; it was finished in 72 AH (about 691 CE). Its eight-sided walls are covered with blue tiles, and its golden dome is one of the best-known sights of Jerusalem.'] },
  { id: 'aqsa', ic: '🕌', ar: 'المسجد الأقصى (القِبْليّ)', en: 'Al-Aqsa (al-Qibli) Mosque', plate: '#CFCAC0', build(m) {
      ring(m, 4, 0, 3, 8, 2, 10, 'c'); [5, 7, 8, 10].forEach(x => put(m, x, 0, 12, 'd'));
      box(m, 4, 2, 3, 8, 1, 10, 's'); box(m, 7, 3, 4, 2, 1, 2, 's');
      sp(m, 'dome', 8, 5, 4, 's', 1.6); sp(m, 'moon', 8, 5, 4 + 1.6 / H, 'y');
    },
    fact: ['المسجد الأقصى المبارك في القدس، أُولى القبلتين، وأحدُ المساجد الثلاثة التي تُشدّ إليها الرحال [رواه البخاري ١١٨٩ ومسلم ١٣٩٧]. إليه أُسري بالنبيّ ﷺ: ﴿سُبْحَٰنَ ٱلَّذِىٓ أَسْرَىٰ بِعَبْدِهِۦ لَيْلًۭا مِّنَ ٱلْمَسْجِدِ ٱلْحَرَامِ إِلَى ٱلْمَسْجِدِ ٱلْأَقْصَا﴾ [الإسراء: ١]. هذا هو الجامع القِبْليّ بقبّته الرصاصيّة.',
      'The blessed al-Aqsa Mosque in Jerusalem was the first qibla, and it is one of the three mosques people may travel specially to visit [al-Bukhari 1189, Muslim 1397]. The Prophet ﷺ was taken there by night: "Glory be to the One who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa" [al-Isra 17:1]. This is the Qibli prayer hall with its lead-grey dome.'] },
  { id: 'palm', ic: '🌴', ar: 'النخلة', en: 'The palm tree', plate: '#E2C98F', build(m) {
      box(m, 7, 0, 7, 2, 7, 2, 'n'); box(m, 7, 7, 7, 2, 1, 2, 'G');
      box(m, 9, 7, 7, 3, 1, 2, 'g'); box(m, 4, 7, 7, 3, 1, 2, 'g'); box(m, 7, 7, 9, 2, 1, 3, 'g'); box(m, 7, 7, 4, 2, 1, 3, 'g');
      box(m, 12, 6, 7, 1, 1, 2, 'g'); box(m, 3, 6, 7, 1, 1, 2, 'g'); box(m, 7, 6, 12, 2, 1, 1, 'g'); box(m, 7, 6, 3, 2, 1, 1, 'g');
      put(m, 9, 5, 9, 'o'); put(m, 6, 5, 6, 'o'); box(m, 7, 8, 7, 2, 1, 2, 'G');
    },
    fact: ['قال النبيّ ﷺ: «إنّ من الشجر شجرةً لا يسقط ورقُها، وإنّها مثلُ المسلم»، ثمّ قال: «هي النخلة» [رواه البخاري ٦١ ومسلم ٢٨١١]. النخلة كلّها خير: نأكل تمرها، ونستظلّ بها، ونصنع من سعفها السلال.',
      'The Prophet ﷺ said: "Among the trees there is a tree whose leaves do not fall, and it is like the Muslim" — then he said: "It is the palm tree" [al-Bukhari 61, Muslim 2811]. All of the palm is good: we eat its dates, rest in its shade and weave baskets from its fronds.'] },
  { id: 'camel', ic: '🐪', ar: 'الجمل', en: 'The camel', plate: '#E2C98F', build(m) {
      [[5, 6], [5, 8], [9, 6], [9, 8]].forEach(([x, z]) => box(m, x, 0, z, 1, 3, 1, 't'));
      box(m, 5, 3, 6, 5, 2, 3, 't'); box(m, 6, 5, 6, 3, 1, 3, 'r'); put(m, 7, 6, 7, 't');
      box(m, 10, 4, 7, 1, 3, 1, 't'); box(m, 10, 7, 7, 3, 1, 1, 't'); put(m, 4, 3, 7, 'n');
    },
    fact: ['قال الله تعالى: ﴿أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ﴾ [الغاشية: ١٧]. الجمل يصبر على العطش أيّامًا، ويحمل الأثقال في الصحراء — سبحان من خلقه!',
      'Allah says: "Do they not look at the camels, how they are created?" [al-Ghashiyah 88:17]. A camel can go without water for days and carries heavy loads across the desert — glory be to the One who made it!'] },
  { id: 'sheep', ic: '🐑', ar: 'الخروف', en: 'The sheep', plate: '#6DB55A', build(m) {
      [[5, 6], [5, 9], [9, 6], [9, 9]].forEach(([x, z]) => box(m, x, 0, z, 1, 2, 1, 'k'));
      box(m, 5, 2, 6, 5, 2, 4, 'w'); box(m, 6, 4, 7, 3, 1, 2, 'w'); box(m, 10, 3, 7, 2, 2, 2, 'k');
    },
    fact: ['قال النبيّ ﷺ: «ما بعث اللهُ نبيًّا إلا رعى الغنم» [رواه البخاري ٢٢٦٢]. رعيُ الغنم يعلّم الصبرَ والرحمةَ والعنايةَ بالضعيف.',
      'The Prophet ﷺ said: "Allah did not send any prophet who did not herd sheep" [al-Bukhari 2262]. Looking after sheep teaches patience, mercy and caring for the weak.'] },
  { id: 'lantern', ic: '🏮', ar: 'فانوس رمضان', en: 'Ramadan lantern', plate: '#2B4466', build(m) {
      box(m, 6, 0, 6, 4, 1, 4, 'y');
      for (let y = 1; y <= 3; y++) for (let z = 6; z < 10; z++) for (let x = 6; x < 10; x++) {
        const ex = x === 6 || x === 9, ez = z === 6 || z === 9; if (!ex && !ez) continue;
        put(m, x, y, z, ex && ez ? 'y' : ez ? 'r' : 'B');
      }
      box(m, 6, 4, 6, 4, 1, 4, 'y'); box(m, 7, 5, 7, 2, 1, 2, 'y');
      sp(m, 'cone', 8, 8, 6, 'y', 0.9, 1.2); sp(m, 'moon', 8, 8, 6 + 1.2 / H, 'y');
    },
    fact: ['فانوس رمضان يزيّن البيوت والشوارع في شهر رمضان المبارك، شهرِ الصيام والقرآن. والنورُ الحقيقيّ في قلب المؤمن هو نورُ الإيمان.',
      'The Ramadan lantern decorates homes and streets in the blessed month of Ramadan, the month of fasting and the Quran. The real light in a believer\'s heart is the light of faith.'] }
];

/* split each layer into real bricks (biggest first, one colour per brick) and order the steps bottom-up */
const SIZES = [[4, 2], [2, 4], [3, 2], [2, 3], [4, 1], [1, 4], [2, 2], [3, 1], [1, 3], [2, 1], [1, 2], [1, 1]];
function steps(def) {
  if (def._steps) return def._steps;
  const m = mk(); def.build(m);
  const out = [], used = new Set(), keys = [...m.v.keys()].map(k => k.split(',').map(Number));
  keys.sort((a, b) => a[1] - b[1] || a[2] - b[2] || a[0] - b[0]);
  for (const [x, y, z] of keys) {
    const k0 = x + ',' + y + ',' + z; if (used.has(k0)) continue;
    const c = m.v.get(k0);
    for (const [w, d] of SIZES) {
      let ok = true;
      for (let j = 0; j < d && ok; j++) for (let i = 0; i < w && ok; i++) { const k = (x + i) + ',' + y + ',' + (z + j); if (used.has(k) || m.v.get(k) !== c) ok = false; }
      if (!ok) continue;
      for (let j = 0; j < d; j++) for (let i = 0; i < w; i++) used.add((x + i) + ',' + y + ',' + (z + j));
      out.push({ k: 'b', x, y, z, w, d, c }); break;
    }
  }
  m.sp.forEach(s => out.push(Object.assign({ k: s.t }, s)));
  out.sort((a, b) => (a.y * 2 + (a.k === 'b' ? 0 : 1)) - (b.y * 2 + (b.k === 'b' ? 0 : 1)) || a.z - b.z || a.x - b.x);
  return (def._steps = out);
}

/* ── three.js scene ── */
let renderer, scene, camera, pivot, world, plate, canvas, wrap, ghost = null, raf = 0;
const view = { yaw: 0.6, pitch: 0.55, dist: 26 };
const MAT = {}, GEO = {};
function mat(c) { return MAT[c] || (MAT[c] = new THREE.MeshStandardMaterial({ color: COL[c] || c, roughness: 0.42, metalness: c === 'y' ? 0.35 : 0.02 })); }
const STUD = new THREE.CylinderGeometry(0.29, 0.29, 0.2, 16);
function boxGeo(w, d) { const k = w + 'x' + d; return GEO[k] || (GEO[k] = new THREE.BoxGeometry(w - 0.04, H - 0.03, d - 0.04)); }
function brickMesh(s, material) {
  const g = new THREE.Group(), m = material || mat(s.c);
  const body = new THREE.Mesh(boxGeo(s.w, s.d), m); g.add(body);
  const st = new THREE.InstancedMesh(STUD, m, s.w * s.d), q = new THREE.Matrix4(); let n = 0;
  for (let j = 0; j < s.d; j++) for (let i = 0; i < s.w; i++) { q.makeTranslation(i - s.w / 2 + 0.5, H / 2 + 0.1, j - s.d / 2 + 0.5); st.setMatrixAt(n++, q); }
  g.add(st);
  g.position.set(s.x + s.w / 2 - N / 2, s.y * H + H / 2, s.z + s.d / 2 - N / 2);
  g.userData.s = s; body.userData.s = s;
  return g;
}
function specialMesh(s, material) {
  const m = material || mat(s.c); let mesh;
  if (s.k === 'dome') { mesh = new THREE.Mesh(new THREE.SphereGeometry(s.r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), m); mesh.position.y = 0; }
  else if (s.k === 'cone') { mesh = new THREE.Mesh(new THREE.ConeGeometry(s.r, s.h, 20), m); mesh.position.y = s.h / 2; }
  else if (s.k === 'cyl') { mesh = new THREE.Mesh(new THREE.CylinderGeometry(s.r, s.r, s.h, 28), m); mesh.position.y = s.h / 2; }
  else { mesh = new THREE.Group(); const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8), m); rod.position.y = 0.25; mesh.add(rod);
    const moon = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.07, 8, 20, Math.PI * 1.35), m); moon.position.y = 0.72; moon.rotation.z = Math.PI * 0.82; mesh.add(moon); }
  const g = new THREE.Group(); g.add(mesh); g.position.set(s.x - N / 2, s.y * H, s.z - N / 2); g.userData.s = s; return g;
}
function pieceMesh(s, material) { return s.k === 'b' ? brickMesh(s, material) : specialMesh(s, material); }

function initScene() {
  wrap = B.stage.querySelector('.bxw'); canvas = wrap.querySelector('canvas');
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch (e) { renderer = null; }
  if (!renderer) { wrap.innerHTML = '<p class="bxno">' + B.T('جهازك لا يدعم الرسوم ثلاثيّة الأبعاد — جرِّب «البنّاء الصغير».', 'Your device cannot show 3D — try «Little Builder».') + ' <a href="blocks.html">🧱</a></p>'; return false; }
  scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7a60, 1.25));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(6, 14, 9); scene.add(sun);
  pivot = new THREE.Group(); scene.add(pivot); world = new THREE.Group(); pivot.add(world);
  plate = new THREE.Group(); world.add(plate);
  const pm = new THREE.MeshStandardMaterial({ color: '#4BA048', roughness: 0.6 });
  const slab = new THREE.Mesh(new THREE.BoxGeometry(N, 0.4, N), pm); slab.position.y = -0.2; slab.userData.plate = 1; plate.add(slab);
  const st = new THREE.InstancedMesh(STUD, pm, N * N), q = new THREE.Matrix4(); let n = 0;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { q.makeTranslation(i - N / 2 + 0.5, 0.08, j - N / 2 + 0.5); st.setMatrixAt(n++, q); }
  plate.add(st); plate.userData.mat = pm;
  orbit(); resize(); new ResizeObserver(resize).observe(wrap);
  loop(); return true;
}
function setPlate(c) { if (plate) plate.userData.mat.color.set(c); }
function resize() { if (!renderer) return; const w = wrap.clientWidth, h = wrap.clientHeight; renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(w, h, false); camera.aspect = w / Math.max(1, h); camera.updateProjectionMatrix(); }
let focusY = 2;
function applyView() { pivot.rotation.set(view.pitch, view.yaw, 0); camera.position.set(0, focusY, view.dist); camera.lookAt(0, focusY * 0.6, 0); }
const anims = [];
function loop() {
  raf = requestAnimationFrame(loop);
  if (document.hidden) return;
  const t = performance.now();
  for (let i = anims.length - 1; i >= 0; i--) { const a = anims[i], f = Math.min(1, (t - a.t0) / a.ms); a.o.position.y = a.y + (1 - f * f) * a.dy; if (f >= 1) anims.splice(i, 1); }
  if (ghost) ghost.traverse(o => { if (o.material && o.material.transparent) o.material.opacity = 0.28 + 0.2 * Math.sin(t / 220); });
  applyView(); renderer.render(scene, camera);
}
function drop(o) { if (B.calm()) return; anims.push({ o, y: o.position.y, dy: 2.6, t0: performance.now(), ms: 280 }); }

/* orbit + tap */
let onTap = null;
function orbit() {
  const ptr = new Map(); let pinch = 0, down = null;
  canvas.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY, performance.now()]; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} ptr.set(e.pointerId, [e.clientX, e.clientY]); });
  canvas.addEventListener('pointermove', e => {
    if (!ptr.has(e.pointerId)) return; const p = ptr.get(e.pointerId), dx = e.clientX - p[0], dy = e.clientY - p[1]; ptr.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptr.size === 1) { view.yaw += dx * 0.01; view.pitch = Math.max(0.05, Math.min(1.35, view.pitch + dy * 0.008)); }
    else if (ptr.size === 2) { const a = [...ptr.values()], d = Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]); if (pinch) view.dist = Math.max(10, Math.min(48, view.dist * pinch / d)); pinch = d; }
  });
  const up = e => { if (down && e.type === 'pointerup' && ptr.size === 1 && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 8 && performance.now() - down[2] < 600 && onTap) onTap(e.clientX, e.clientY); down = null; ptr.delete(e.pointerId); pinch = 0; };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', e => { e.preventDefault(); view.dist = Math.max(10, Math.min(48, view.dist * (e.deltaY > 0 ? 1.1 : 0.9))); }, { passive: false });
  canvas.addEventListener('keydown', e => { const k = e.key; if (k === 'ArrowLeft') view.yaw -= 0.15; else if (k === 'ArrowRight') view.yaw += 0.15; else if (k === 'ArrowUp') view.pitch = Math.max(0.05, view.pitch - 0.1); else if (k === 'ArrowDown') view.pitch = Math.min(1.35, view.pitch + 0.1); else if (k === '+' || k === '=') view.dist = Math.max(10, view.dist * 0.9); else if (k === '-') view.dist = Math.min(48, view.dist * 1.1); else return; e.preventDefault(); });
}
function clearWorld() { [...world.children].forEach(o => { if (o !== plate) world.remove(o); }); ghost = null; }
function setGhost(s) {
  if (ghost) world.remove(ghost); ghost = null; if (!s) return;
  const gm = new THREE.MeshBasicMaterial({ color: COL[s.c], transparent: true, opacity: 0.4, depthWrite: false });
  ghost = pieceMesh(s, gm);
  if (s.k === 'b') { const e = new THREE.LineSegments(new THREE.EdgesGeometry(boxGeo(s.w, s.d)), new THREE.LineBasicMaterial({ color: 0xffffff })); ghost.add(e); }
  world.add(ghost);
}

/* ── pieces as little pictures (top view: studs) for the tray ── */
function pieceSvg(s) {
  const col = COL[s.c];
  if (s.k === 'b') {
    const u = 15, W = s.w * u, D = s.d * u; let h = '<svg viewBox="-3 -3 ' + (W + 6) + ' ' + (D + 6) + '" width="' + Math.min(92, W + 6) + '" aria-hidden="true"><rect x="0" y="0" width="' + W + '" height="' + D + '" rx="3" fill="' + col + '" stroke="rgba(0,0,0,.35)"/>';
    for (let j = 0; j < s.d; j++) for (let i = 0; i < s.w; i++) h += '<circle cx="' + (i * u + u / 2) + '" cy="' + (j * u + u / 2) + '" r="4.6" fill="' + col + '" stroke="rgba(0,0,0,.3)"/>';
    return h + '</svg>';
  }
  const p = { dome: '<path d="M6 40 A22 22 0 0 1 50 40 Z"/>', cone: '<path d="M28 6 L46 44 L10 44 Z"/>', cyl: '<rect x="8" y="14" width="40" height="30" rx="4"/>', moon: '<path d="M34 10 A16 16 0 1 0 34 42 A12 12 0 1 1 34 10 Z"/>' }[s.k];
  return '<svg viewBox="0 0 56 48" width="60" aria-hidden="true"><g fill="' + col + '" stroke="rgba(0,0,0,.35)">' + p + '</g></svg>';
}
function pieceName(s) {
  const c = B.T(CN[s.c][0], CN[s.c][1]);
  if (s.k === 'b') return B.T('قطعة ' + c + ' ' + B.N(s.w) + '×' + B.N(s.d), c + ' ' + s.w + '×' + s.d + ' brick');
  return B.T(SHAPE[s.k][0] + ' ' + c, c + ' ' + SHAPE[s.k][1]);
}

/* ══════ guided build ══════ */
let mi = 0, step = 0, choices = [];
function doneList() { return B.store('done') || []; }
function guideUI() {
  B.stage.innerHTML = '<div class="bxchips" id="bxChips" role="group"></div><div class="bxw"><canvas tabindex="0" aria-label=""></canvas></div>' +
    '<div class="bxprog"><i id="bxBar"></i></div><div class="bxtray" id="bxTray" role="group"></div><div class="bxfact" id="bxFact"></div>';
  B.extra.innerHTML = '';
}
function chips() {
  const done = doneList();
  const el = document.getElementById('bxChips'); if (!el) return;
  el.innerHTML = MODELS.map((m, i) => '<button type="button" data-i="' + i + '" class="' + (i === mi ? 'on' : '') + '" aria-pressed="' + (i === mi) + '">' + m.ic + ' ' + B.esc(B.T(m.ar, m.en)) + (done.indexOf(m.id) >= 0 ? ' ✅' : '') + '</button>').join('');
  el.querySelectorAll('button').forEach(b => b.onclick = () => { if (+b.dataset.i === mi) return; B0.beep('tap'); mi = +b.dataset.i; step = 0; B.over = false; buildGuide(); save(); });
}
function save() { if (B.mode === 'guide') B.save({ mi, step }); else B.save({ free }); }
function buildGuide(fresh) {
  const def = MODELS[mi], st = steps(def);
  clearWorld(); setPlate(def.plate);
  for (let i = 0; i < step; i++) world.add(pieceMesh(st[i]));
  const top = st.reduce((a, s) => Math.max(a, s.y), 0);
  focusY = Math.max(2, top * H * 0.55); view.dist = 20 + top * 1.2;
  chips(); fact(); next();
}
function fact() { const def = MODELS[mi], el = document.getElementById('bxFact'); if (el) el.innerHTML = '<b>' + def.ic + ' ' + B.esc(B.T(def.ar, def.en)) + '</b><p>' + B.esc(B.T(def.fact[0], def.fact[1])) + '</p>'; }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function next() {
  const def = MODELS[mi], st = steps(def), tray = document.getElementById('bxTray');
  document.getElementById('bxBar').style.width = Math.round(step / st.length * 100) + '%';
  canvas.setAttribute('aria-label', B.T(def.ar, def.en));
  if (step >= st.length) {
    setGhost(null); tray.innerHTML = '';
    if (!B.over) {
      const d = doneList(); if (d.indexOf(def.id) < 0) { d.push(def.id); B.store('done', d); }
      chips();
      B.win({ stars: 2, title: B.T('بنيتَ ' + def.ar + '! ما شاء الله', 'You built ' + def.en + '! Masha\'Allah'), msg: B.T(def.fact[0], def.fact[1]) });
    }
    B.status(B.T('🎉 اكتمل النموذج — أدِره بإصبعك وتأمّله!', '🎉 The model is complete — turn it with your finger and look!'));
    return;
  }
  const s = st[step]; setGhost(s);
  /* three choices: the right piece, a wrong colour, a wrong size/shape */
  const pal = [...new Set(st.map(x => x.c))].filter(c => c !== s.c), other = pal.length ? pal[Math.floor(Math.random() * pal.length)] : (s.c === 'r' ? 'b' : 'r');
  let wrongSize;
  if (s.k === 'b') { const area = s.w * s.d, alt = SIZES.filter(z => z[0] * z[1] !== area); const z = alt[Math.floor(Math.random() * alt.length)]; wrongSize = Object.assign({}, s, { w: z[0], d: z[1] }); }
  else { const ks = ['dome', 'cone', 'cyl', 'moon'].filter(k => k !== s.k); wrongSize = Object.assign({}, s, { k: ks[Math.floor(Math.random() * ks.length)] }); }
  choices = shuffle([{ s, ok: true }, { s: Object.assign({}, s, { c: other }), ok: false, why: 'c' }, { s: wrongSize, ok: false, why: 'z' }]);
  tray.innerHTML = choices.map((o, i) => '<button type="button" data-i="' + i + '" aria-label="' + B.esc(pieceName(o.s)) + '">' + pieceSvg(o.s) + '<span>' + B.esc(pieceName(o.s)) + '</span></button>').join('');
  tray.querySelectorAll('button').forEach(b => b.onclick = () => pick(+b.dataset.i, b));
  B.status(B.T('القطعة ' + B.N(step + 1) + ' من ' + B.N(st.length) + ' — أيُّ قطعةٍ تملأ المكانَ المضيء؟ 👇', 'Piece ' + (step + 1) + ' of ' + st.length + ' — which piece fills the glowing spot? 👇'));
}
function pick(i, btn) {
  const o = choices[i]; if (!o) return;
  if (!o.ok) {
    B0.beep('bad'); btn.classList.add('no'); setTimeout(() => btn.classList.remove('no'), 500);
    const s = MODELS[mi] && steps(MODELS[mi])[step];
    B.status(o.why === 'c' ? B.T('انظر إلى اللون جيّدًا: نحتاج اللونَ ' + CN[s.c][0] + '.', 'Look at the colour: we need ' + CN[s.c][1] + '.')
      : s.k === 'b' ? B.T('عُدَّ النتوءات: المكانُ المضيء ' + B.N(s.w) + ' × ' + B.N(s.d) + '.', 'Count the studs: the glowing spot is ' + s.w + ' × ' + s.d + '.') : B.T('انظر إلى شكل القطعة المضيئة.', 'Look at the shape of the glowing piece.'));
    return;
  }
  const s = steps(MODELS[mi])[step], mesh = pieceMesh(s); world.add(mesh); drop(mesh);
  B0.beep('good'); step++; save(); next();
}

/* ══════ free build ══════ */
let free = [], tool = { w: 2, d: 2, c: 'r' }, eraser = false;
const FCOL = ['r', 'o', 'y', 'g', 'b', 'w', 'k', 'n', 't', 's'], FSIZE = [[1, 1], [2, 1], [2, 2], [4, 2], [3, 1], [4, 1]];
function occ() { const o = new Set(); free.forEach(s => { for (let j = 0; j < s.d; j++) for (let i = 0; i < s.w; i++) o.add((s.x + i) + ',' + s.y + ',' + (s.z + j)); }); return o; }
function freeUI() {
  B.stage.innerHTML = '<div class="bxw"><canvas tabindex="0"></canvas></div><div class="bxrow" id="bxSz"></div><div class="bxrow bxcol" id="bxCl"></div>';
  B.extra.innerHTML = '<button class="bbtn" id="bxRot" type="button"></button><button class="bbtn" id="bxEr" type="button"></button><button class="bbtn" id="bxUndo" type="button"></button><button class="bbtn" id="bxClr" type="button"></button><button class="bbtn go" id="bxDone" type="button"></button>';
}
function freeTools() {
  const sz = document.getElementById('bxSz'), cl = document.getElementById('bxCl'); if (!sz) return;
  sz.innerHTML = FSIZE.map(z => { const on = !eraser && ((tool.w === z[0] && tool.d === z[1]) || (tool.w === z[1] && tool.d === z[0])); return '<button type="button" data-w="' + z[0] + '" data-d="' + z[1] + '" class="' + (on ? 'on' : '') + '" aria-pressed="' + on + '">' + pieceSvg({ k: 'b', w: z[0], d: z[1], c: tool.c }) + '</button>'; }).join('');
  cl.innerHTML = FCOL.map(c => '<button type="button" data-c="' + c + '" class="' + (c === tool.c && !eraser ? 'on' : '') + '" style="--c:' + COL[c] + '" aria-label="' + B.esc(B.T(CN[c][0], CN[c][1])) + '"></button>').join('');
  sz.querySelectorAll('button').forEach(b => b.onclick = () => { eraser = false; tool.w = +b.dataset.w; tool.d = +b.dataset.d; B0.beep('tap'); freeTools(); });
  cl.querySelectorAll('button').forEach(b => b.onclick = () => { eraser = false; tool.c = b.dataset.c; B0.beep('tap'); freeTools(); });
  document.getElementById('bxRot').textContent = B.T('↻ أدِر القطعة', '↻ Turn piece');
  document.getElementById('bxEr').textContent = B.T('🧽 ممحاة', '🧽 Rubber'); document.getElementById('bxEr').classList.toggle('on', eraser);
  document.getElementById('bxUndo').textContent = B.T('↩️ تراجع', '↩️ Undo');
  document.getElementById('bxClr').textContent = B.T('🗑️ امسح الكلّ', '🗑️ Clear all');
  document.getElementById('bxDone').textContent = B.T('✅ انتهيت', '✅ Done');
  B.status(eraser ? B.T('اضغط قطعةً لتزيلها.', 'Tap a brick to remove it.') : B.T('اضغط على اللوح الأخضر أو على قطعة لتضيف ' + pieceName({ k: 'b', w: tool.w, d: tool.d, c: tool.c }) + ' — اسحب لتدير المشهد.', 'Tap the green plate or a brick to add a ' + pieceName({ k: 'b', w: tool.w, d: tool.d, c: tool.c }) + ' — drag to turn the scene.'));
}
function freeDraw() { clearWorld(); setPlate('#4BA048'); free.forEach(s => world.add(brickMesh(s))); }
const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
function freeTap(cx, cy) {
  const r = canvas.getBoundingClientRect(); v2.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(v2, camera);
  const hits = ray.intersectObjects(world.children, true).filter(h => h.object.isMesh && !h.object.isInstancedMesh || (h.object.isInstancedMesh && h.object.parent === plate));
  const h = hits[0]; if (!h) return;
  const s0 = h.object.userData.s;
  if (eraser) { if (!s0) return; free = free.filter(s => s !== s0); B0.beep('tap'); freeDraw(); save(); return; }
  const p = world.worldToLocal(h.point.clone());
  let n = new THREE.Vector3(0, 1, 0); if (h.face && s0) n = h.face.normal.clone();
  const q = p.add(n.multiplyScalar(0.3)); const y = Math.max(0, Math.floor(q.y / H));
  const x0 = Math.max(0, Math.min(N - tool.w, Math.round(q.x + N / 2 - tool.w / 2))), z0 = Math.max(0, Math.min(N - tool.d, Math.round(q.z + N / 2 - tool.d / 2)));
  if (y > 18) return B.status(B.T('عالٍ جدًّا! 🙂', 'Too high! 🙂'));
  const o = occ(); for (let j = 0; j < tool.d; j++) for (let i = 0; i < tool.w; i++) if (o.has((x0 + i) + ',' + y + ',' + (z0 + j))) { B0.beep('bad'); return B.status(B.T('لا مكانَ لهذه القطعة هنا — جرِّب مكانًا آخر أو أدِر القطعة.', 'No room for this brick here — try another spot or turn the piece.')); }
  const s = { k: 'b', x: x0, y, z: z0, w: tool.w, d: tool.d, c: tool.c }; free.push(s);
  const mesh = brickMesh(s); world.add(mesh); drop(mesh); B0.beep('tap'); save();
}
function freeBind() {
  document.getElementById('bxRot').onclick = () => { const w = tool.w; tool.w = tool.d; tool.d = w; eraser = false; freeTools(); };
  document.getElementById('bxEr').onclick = () => { eraser = !eraser; freeTools(); };
  document.getElementById('bxUndo').onclick = () => { if (!free.length) return; free.pop(); freeDraw(); save(); };
  document.getElementById('bxClr').onclick = () => { free = []; freeDraw(); save(); };
  document.getElementById('bxDone').onclick = () => {
    if (free.length < 6) return B.status(B.T('ابنِ قليلًا بعدُ — ستَّ قطعٍ على الأقلّ 🙂', 'Build a little more — at least six bricks 🙂'));
    B.win({ stars: 1, keep: true, title: B.T('بناءٌ جميل! ما شاء الله', 'A lovely build! Masha\'Allah'), msg: B.T('بنيتَ شيئًا من خيالك — أرِه لأهلك!', 'You built something from your own imagination — show your family!') }); B.over = false;
  };
}

/* ── wiring into the club's game frame ── */
let ui = '';
function start(restoreState) {
  ui = B.mode;
  if (renderer) { cancelAnimationFrame(raf); renderer.dispose(); renderer = null; }
  if (B.mode === 'free') {
    freeUI(); if (!initScene()) return; onTap = freeTap; freeBind();
    free = restoreState && Array.isArray(restoreState.free) ? restoreState.free.filter(s => COL[s.c]).map(s => Object.assign({ k: 'b' }, s)) : [];
    focusY = 2; view.dist = 28; freeDraw(); freeTools();
  } else {
    guideUI(); if (!initScene()) return; onTap = null;
    if (restoreState && typeof restoreState.mi === 'number' && MODELS[restoreState.mi]) { mi = restoreState.mi; step = Math.max(0, Math.min(steps(MODELS[mi]).length, restoreState.step | 0)); }
    else { const p = B.store('mi'); mi = typeof p === 'number' && MODELS[p] ? p : 0; step = 0; }
    buildGuide();
  }
}
B0.css(`
.bxchips{display:flex;gap:.4rem;overflow-x:auto;padding:.1rem .1rem .55rem;scrollbar-width:thin}
.bxchips button{flex:0 0 auto;min-height:44px;padding:0 .85rem;border-radius:999px;border:1.5px solid var(--line);background:rgba(255,255,255,.07);color:var(--ink);font:800 .92rem 'Tajawal','Nunito',sans-serif;cursor:pointer;white-space:nowrap}
.bxchips button.on{background:var(--gold);color:#10243d;border-color:transparent}
.bxw{position:relative;width:100%;height:min(82vw,440px);border-radius:20px;overflow:hidden;background:linear-gradient(180deg,#BFE3FF,#F3FAFF 70%);box-shadow:0 10px 30px rgba(0,0,0,.35)}
.bxw canvas{width:100%;height:100%;display:block;touch-action:none;cursor:grab;outline:none}
.bxw canvas:focus-visible{box-shadow:inset 0 0 0 3px var(--gold)}
.bxno{color:#10243d;padding:2rem 1rem;text-align:center;font-weight:800}
.bxprog{height:10px;border-radius:99px;background:rgba(255,255,255,.12);margin:.6rem 0;overflow:hidden}.bxprog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3BB36D,var(--gold));transition:width .3s}
.bxtray{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem}
.bxtray button{min-height:96px;border-radius:16px;border:2px solid var(--line);background:rgba(255,255,255,.07);color:var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35rem;padding:.4rem;cursor:pointer;font:800 .82rem 'Tajawal','Nunito',sans-serif}
.bxtray button:hover{border-color:var(--gold)}.bxtray button.no{animation:bxno .4s;border-color:var(--red)}
@keyframes bxno{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.bxfact{margin-top:.75rem;padding:.8rem 1rem;border-radius:16px;background:rgba(232,181,48,.1);border:1px solid var(--line);line-height:1.85}.bxfact b{color:var(--gold-lt);font-size:1.05rem}.bxfact p{margin:.3rem 0 0}
.bxrow{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center;margin-top:.6rem}
.bxrow button{min-width:52px;min-height:52px;border-radius:14px;border:2px solid var(--line);background:rgba(255,255,255,.07);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.3rem}
.bxrow button.on{border-color:var(--gold);background:rgba(232,181,48,.22)}
.bxcol button{width:46px;min-width:46px;min-height:46px;border-radius:50%;background:var(--c)}.bxcol button.on{box-shadow:0 0 0 3px var(--gold-lt)}
#bxEr.on{background:var(--gold);color:#10243d}
html.calm .bxprog i{transition:none}html.calm .bxtray button.no{animation:none}
`);
Brain.game({
  id: 'bricks', levels: false,
  modes: [{ id: 'guide', ar: 'ابنِ النموذج', en: 'Build a model' }, { id: 'free', ar: 'بناء حرّ', en: 'Free build' }],
  how: {
    ar: ['اختر نموذجًا: الكعبة، المسجد النبويّ، قبّة الصخرة، المسجد الأقصى، النخلة، الجمل، الخروف أو الفانوس.', 'المكان المضيء يُريك أين توضع القطعة التالية. اختر القطعةَ الصحيحة من الثلاث: عُدَّ النتوءات وانظر إلى اللون.', 'اسحب بإصبعك لتدير النموذج، وبإصبعين لتقرّبه.', 'في «بناء حرّ»: اختر الحجمَ واللون، ثمّ اضغط على اللوح أو على قطعةٍ لتبني فوقها أو بجانبها.'],
    en: ['Pick a model: the Kaaba, the Prophet\'s Mosque, the Dome of the Rock, al-Aqsa, the palm tree, the camel, the sheep or the lantern.', 'The glowing spot shows where the next piece goes. Choose the right piece of the three: count the studs and look at the colour.', 'Drag with a finger to turn the model; use two fingers to zoom.', 'In "Free build": choose a size and colour, then tap the plate or a brick to build on top of it or next to it.']
  },
  afterWin: { label: b => b.mode === 'free' ? b.T('🧱 أكمل البناء', '🧱 Keep building') : b.T('➡️ النموذج التالي', '➡️ Next model'), go: b => { if (b.mode === 'free') return; mi = (mi + 1) % MODELS.length; step = 0; B.store('mi', mi); b.over = false; buildGuide(); save(); } },
  init(b) { B = b; },
  newGame(b) { B = b; if (B.mode === 'guide' && ui === 'guide' && renderer && MODELS[mi]) { step = 0; B.over = false; buildGuide(); save(); return; } start(null); },
  restore(b, s) { B = b; if (!s) return false; start(s); return true; },
  relang(b) { B = b; if (!renderer) return; if (B.mode === 'free') freeTools(); else { chips(); fact(); next(); } }
});
window.addEventListener('pagehide', () => { if (B && B.mode === 'guide') B.store('mi', mi); });
/* for tests */
window.__bricks = { MODELS, steps, state: () => ({ mi, step, free: free.length, mode: B && B.mode }), pickRight: () => { const i = choices.findIndex(o => o.ok); const btn = document.querySelectorAll('#bxTray button')[i]; if (btn) btn.click(); return i; } };
