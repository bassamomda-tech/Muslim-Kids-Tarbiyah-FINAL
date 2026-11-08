/* ============================================================
   DUA MOMENTS — دعاء لكل موقف
   One everyday scene at a time → pick its authentic du'a (3 choices).
   All scenes matched → win-modal.
   Only well-known authentic adhkar, with their sources.
   ============================================================ */
(function () {
  "use strict";

  const DUAS = [
    { id: "eat",    e: "🍲",   scene: "قبل أن آكل",            sceneEn: "Before I eat",
      dua: "بِسْمِ اللَّهِ", src: "متفق عليه", mean: "In the name of Allah" },
    { id: "ate",    e: "🍽️",   scene: "بعد أن أنتهي من الطعام", sceneEn: "When I finish eating",
      dua: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", src: "رواه أبو داود والترمذي · حسن",
      mean: "Praise be to Allah who fed me this and provided it for me without any power or strength from me" },
    { id: "sleep",  e: "🛏️",   scene: "قبل أن أنام",           sceneEn: "Before I sleep",
      dua: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", src: "رواه البخاري", mean: "In Your name, O Allah, I die and I live" },
    { id: "wake",   e: "🌅",   scene: "عندما أستيقظ من النوم",   sceneEn: "When I wake up",
      dua: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", src: "رواه البخاري",
      mean: "Praise be to Allah who gave us life after causing us to die, and to Him is the return" },
    { id: "out",    e: "🚪",   scene: "عندما أخرج من البيت",    sceneEn: "When I leave home",
      dua: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", src: "رواه أبو داود والترمذي · صحيح",
      mean: "In the name of Allah, I rely on Allah; there is no power and no strength except with Allah" },
    { id: "masjid", e: "🕌",   scene: "عندما أدخل المسجد",      sceneEn: "When I enter the mosque",
      dua: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", src: "رواه مسلم", mean: "O Allah, open for me the doors of Your mercy" },
    { id: "rain",   e: "🌧️",   scene: "عندما ينزل المطر",       sceneEn: "When it rains",
      dua: "اللَّهُمَّ صَيِّبًا نَافِعًا", src: "رواه البخاري", mean: "O Allah, (make it) a beneficial rain" },
    { id: "sneeze", e: "💨",   scene: "عندما أعطس",            sceneEn: "When I sneeze",
      dua: "الْحَمْدُ لِلَّهِ", src: "رواه البخاري", mean: "Praise be to Allah" },
    { id: "reply",  e: "💬",   scene: "عندما يعطس أخي ويقول: الحمد لله", sceneEn: "When my brother sneezes and says “Al-hamdu lillah”",
      dua: "يَرْحَمُكَ اللَّهُ", src: "رواه البخاري", mean: "May Allah have mercy on you" },
  ];
  /* pairs that must never be each other's "wrong" choice (the other du'a could also be fitting there) */
  const CLOSE = { eat: ["out"], out: ["eat"], ate: ["sneeze"], wake: ["sneeze"], sneeze: ["ate", "wake"] };
  const SRC_EN = {
    "متفق عليه": "Agreed upon (al-Bukhari & Muslim)",
    "رواه أبو داود والترمذي · حسن": "Abu Dawud & at-Tirmidhi · hasan",
    "رواه أبو داود والترمذي · صحيح": "Abu Dawud & at-Tirmidhi · sahih",
    "رواه البخاري": "al-Bukhari",
    "رواه مسلم": "Muslim",
  };
  /* scene titles + sources → English (merged into PAGE_DICT by the page) */
  window.DUA_DICT = Object.assign({}, SRC_EN);
  DUAS.forEach((d) => { window.DUA_DICT[d.scene] = d.sceneEn; });
  const N = DUAS.length;
  const CHOICES = 3;

  const $ = (id) => document.getElementById(id);
  let order = [], idx = 0, mistakes = 0, locked = false;

  function say(text, btn) {
    try {
      const S = window.speechSynthesis; if (!S) return;
      S.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ar-SA"; u.rate = 0.85;
      if (btn) { btn.classList.add("speaking"); u.onend = u.onerror = () => btn.classList.remove("speaking"); setTimeout(() => btn.classList.remove("speaking"), 5000); }
      S.speak(u);
    } catch (e) {}
  }
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function setFb(t, cls) { const f = $("feedback"); f.textContent = t; f.className = "kp-feedback" + (cls ? " " + cls : ""); }

  function buildChips() {
    const box = $("dm-scenes"); box.innerHTML = "";
    order.forEach((d, i) => {
      const c = document.createElement("span");
      c.className = "dm-chip" + (i < idx ? " ok" : i === idx ? " cur" : "");
      c.textContent = d.e;
      box.appendChild(c);
    });
  }

  function buildList() {
    const box = $("dua-list"); box.innerHTML = "";
    DUAS.forEach((d) => {
      const done = order.slice(0, idx).indexOf(d) >= 0;
      const r = document.createElement("div");
      r.className = "dua-row" + (done ? "" : " locked");
      r.innerHTML = `<span class="e" aria-hidden="true">${d.e}</span><div><b>${d.scene}</b><div class="d">${done ? d.dua : "• • • • •"}</div><div class="s">${done ? d.src : ""}</div></div>`;
      box.appendChild(r);
    });
  }

  function showScene() {
    locked = false;
    const d = order[idx];
    $("dm-emo").textContent = d.e;
    $("dm-q").textContent = d.scene;
    $("stat-matched").textContent = idx + "/" + N;
    buildChips();
    /* distractors: other du'as with a different text */
    const others = shuffle(DUAS.filter((x) => x !== d && x.dua !== d.dua && (CLOSE[d.id] || []).indexOf(x.id) < 0)).slice(0, CHOICES - 1);
    const opts = shuffle([d].concat(others));
    const box = $("dm-options"); box.innerHTML = "";
    opts.forEach((x) => {
      const row = document.createElement("div");
      row.className = "dm-opt";
      const pick = document.createElement("button");
      pick.type = "button"; pick.className = "pick";
      pick.innerHTML = `<span class="dua">${x.dua}</span><span class="mean">${x.mean}</span><span class="src">${x.src}</span>`;
      pick.addEventListener("click", () => choose(x, row));
      const sb = document.createElement("button");
      sb.type = "button"; sb.className = "say-btn"; sb.textContent = "🔊";
      sb.setAttribute("aria-label", "استمع");
      sb.addEventListener("click", () => say(x.dua, sb));
      row.appendChild(pick); row.appendChild(sb);
      box.appendChild(row);
    });
    $("next-btn").hidden = true;
    setFb("اختر الدعاء المناسب لهذا الموقف");
  }

  function choose(x, row) {
    if (locked || row.classList.contains("no")) return;
    const d = order[idx];
    if (x === d) {
      locked = true;
      row.classList.add("right", "pop");
      AudioBus.success();
      Particles.fire(36, { originY: "55%" });
      say(d.dua);
      idx++;
      $("stat-matched").textContent = idx + "/" + N;
      buildChips(); buildList();
      setFb("أحسنت! هذا هو الدعاء الصحيح", "good");
      if (idx >= N) return setTimeout(win, 1000);
      $("next-btn").hidden = false;
    } else {
      mistakes++;
      $("stat-mistakes").textContent = mistakes;
      row.classList.add("no", "shake");
      AudioBus.fail();
      setFb("ليس هذا دعاء هذا الموقف — حاول مرة أخرى", "oops");
    }
  }

  function win() {
    $("win-mistakes").textContent = mistakes;
    setFb("ما شاء الله! عرفت أدعية اليوم كلها", "good");
    Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    order = shuffle(DUAS.slice()); idx = 0; mistakes = 0;
    $("stat-mistakes").textContent = "0";
    buildList(); showScene();
  }

  $("next-btn").addEventListener("click", () => { if (idx < N) showScene(); });
  $("reset-btn").addEventListener("click", reset);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); reset(); });
  AudioBus.bindButton($("mute-btn"));
  reset();
})();
