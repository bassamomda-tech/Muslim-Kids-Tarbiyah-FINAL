/* ============================================================
   NASHEED KARAOKE — كاريوكي الأناشيد
   ============================================================ */

(function () {
  "use strict";

  // Each line: { text, duration_ms }
  // Total duration auto-computed.
  const NASHEEDS = [
    {
      title: "طَلَعَ البَدرُ علَينا",
      sub: "أَنشَدَه الأنصار حين استَقبَلوا النَّبيَّ ﷺ",
      lines: [
        { text: "طَلَعَ البَدرُ علَينا",                duration: 3600 },
        { text: "مِن ثَنِيَّاتِ الوَداع",               duration: 3600 },
        { text: "وَجَبَ الشُّكرُ علَينا",               duration: 3600 },
        { text: "ما دَعا للهِ داع",                     duration: 3600 },
        { text: "أَيُّها المَبعوثُ فينا",               duration: 3600 },
        { text: "جِئتَ بِالأَمرِ المُطاع",              duration: 3600 },
        { text: "جِئتَ شَرَّفتَ المَدينة",              duration: 3600 },
        { text: "مَرحَباً يا خَيرَ داع",                duration: 3800 },
      ],
    },
    {
      title: "أَنا مُسلِم",
      sub: "نَشيد الهُويَّة",
      lines: [
        { text: "أَنا مُسلِمٌ، رَبِّيَ الله",           duration: 4000 },
        { text: "دِينِيَ الإِسلامُ، أَحفَظُهُ",          duration: 4200 },
        { text: "نَبِيِّيَ مُحَمَّد رَسولُ الله",         duration: 4400 },
        { text: "أُحِبُّهُ، أَتَّبِعُ خُطاه",            duration: 4000 },
        { text: "قِبلَتي الكَعبَةُ في مَكَّة",            duration: 4000 },
        { text: "كِتابي القُرآنُ الكَريم",               duration: 4200 },
        { text: "أُصَلِّي خَمساً كلَّ يَوم",             duration: 4000 },
        { text: "وأَفعَلُ الخَيرَ، يُحِبُّني الكَريم",     duration: 4400 },
      ],
    },
    {
      title: "بِسمِ اللهِ بَدَأنا",
      sub: "نَشيد البِداية",
      lines: [
        { text: "بِسمِ اللهِ بَدَأنا",                  duration: 3400 },
        { text: "وعَلى اللهِ تَوَكَّلنا",               duration: 3800 },
        { text: "رَبِّ زِدنا عِلماً",                    duration: 3400 },
        { text: "وأَفتَح لَنا قُلوباً",                 duration: 3800 },
        { text: "نَفتَحُ كِتابَنا اليَومَ",              duration: 3600 },
        { text: "نَتَعَلَّمُ ونَكتُب",                  duration: 3400 },
        { text: "كُلَّما حَفِظنا حَرفاً",               duration: 3600 },
        { text: "زادَنا اللهُ هُدًى ونور",              duration: 3800 },
      ],
    },
    {
      title: "حُروفِيَ الجَميلة",
      sub: "نَشيد الحُروف الأبجَديَّة",
      lines: [
        { text: "ألِفٌ، باءٌ، تاءٌ، ثاء",              duration: 3800 },
        { text: "جيمٌ، حاءٌ، خاء",                       duration: 3400 },
        { text: "دالٌ، ذالٌ، راءٌ، زاي",               duration: 3800 },
        { text: "سينٌ، شينٌ، صادٌ، ضاد",                duration: 3800 },
        { text: "طاءٌ، ظاءٌ، عَينٌ، غَين",              duration: 3800 },
        { text: "فاءٌ، قافٌ، كافٌ، لام",                duration: 3800 },
        { text: "ميمٌ، نونٌ، هاءٌ، واو",                duration: 3800 },
        { text: "ياءٌ — تَمَّت حُروفي",                  duration: 4000 },
      ],
    },
  ];

  const SPEEDS = [0.75, 1, 1.25, 1.5];
  const STORAGE_KEY = "mk_karaoke_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { plays: 0, favorite: null });

  let nIdx = 0;
  let speed = 1;
  let playing = false;
  let elapsed = 0;    // ms within current nasheed
  let rafId = null;
  let lastTs = 0;

  function nasheed() { return NASHEEDS[nIdx]; }
  function totalMs() { return nasheed().lines.reduce((s, l) => s + l.duration, 0); }

  function lineAt(ms) {
    let acc = 0;
    for (let i = 0; i < nasheed().lines.length; i++) {
      const ln = nasheed().lines[i];
      if (ms < acc + ln.duration) {
        return { idx: i, offset: ms - acc, duration: ln.duration };
      }
      acc += ln.duration;
    }
    return { idx: nasheed().lines.length - 1, offset: nasheed().lines.at(-1).duration, duration: nasheed().lines.at(-1).duration };
  }

  /* ============ Render ============ */
  function renderList() {
    const root = document.getElementById("nasheed-list");
    root.innerHTML = "";
    NASHEEDS.forEach((n, i) => {
      const row = document.createElement("div");
      row.className = "nk-list-row" + (i === nIdx ? " active" : "");
      row.innerHTML = `
        <span class="nk-num">${i+1}</span>
        <div class="nk-info">
          <span>${n.title}</span>
          <small>${n.sub} · ${n.lines.length} أَسطُر</small>
        </div>
      `;
      row.addEventListener("click", () => { pickNasheed(i); });
      root.appendChild(row);
    });
    document.getElementById("list-pill").textContent = NASHEEDS.length;
  }

  function renderLyrics() {
    const root = document.getElementById("lyrics");
    root.innerHTML = "";
    const cur = lineAt(elapsed);
    const total = nasheed().lines.length;

    // show previous (1), current, next (2) — 4 lines visible window
    const window = [cur.idx - 1, cur.idx, cur.idx + 1, cur.idx + 2];
    window.forEach((li) => {
      if (li < 0 || li >= total) {
        const el = document.createElement("div");
        el.className = "nk-line";
        el.innerHTML = "&nbsp;";
        root.appendChild(el);
        return;
      }
      const isCur = li === cur.idx;
      const ln = nasheed().lines[li];
      const words = ln.text.split(/\s+/);
      const perWord = ln.duration / words.length;
      const sungIdx = isCur ? Math.floor(cur.offset / perWord) : (li < cur.idx ? words.length : -1);
      const el = document.createElement("div");
      el.className = "nk-line" + (isCur ? " current" : "");
      el.innerHTML = words.map((w, wi) => {
        let cls = "";
        if (wi < sungIdx) cls = "sung";
        else if (wi === sungIdx && isCur) cls = "now";
        return `<span class="word ${cls}">${w}</span>`;
      }).join(" ");
      root.appendChild(el);
    });

    document.getElementById("n-line").textContent = cur.idx + 1;
    document.querySelector("#n-line + small").textContent = `/${total}`;
  }

  function renderHUD() {
    document.getElementById("n-idx").textContent = nIdx + 1;
    document.querySelector("#n-idx + small").textContent = `/${NASHEEDS.length}`;
    document.getElementById("nasheed-title").textContent = nasheed().title;
    document.getElementById("n-plays").textContent = STORE.plays;
    document.getElementById("n-speed").textContent = speed + "×";
    document.getElementById("best").textContent = STORE.favorite != null ? NASHEEDS[STORE.favorite]?.title || "—" : "—";
    document.getElementById("time-total").textContent = fmtMs(totalMs() / speed);
  }

  function renderProgress() {
    const tot = totalMs();
    const pct = (elapsed / tot) * 100;
    document.getElementById("prog-bar").style.width = Math.min(100, pct) + "%";
    document.getElementById("time-current").textContent = fmtMs(elapsed / speed);
  }

  function fmtMs(ms) {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;
  }

  /* ============ Playback ============ */
  function tick(ts) {
    if (!playing) return;
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) * speed;
    lastTs = ts;
    const tot = totalMs();
    const prevElapsed = elapsed;
    elapsed = Math.min(tot, elapsed + dt);

    // detect line change → small tick sound
    const prevLine = lineAt(prevElapsed).idx;
    const curLine = lineAt(elapsed).idx;
    if (prevLine !== curLine && curLine < nasheed().lines.length) {
      AudioBus.tick(540 + curLine * 60);
    }

    renderLyrics();
    renderProgress();

    if (elapsed >= tot) {
      stop();
      onFinish();
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function play() {
    if (playing) return;
    playing = true;
    lastTs = 0;
    document.getElementById("play-icon").outerHTML =
      '<svg id="play-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    rafId = requestAnimationFrame(tick);
  }
  function pause() {
    playing = false;
    cancelAnimationFrame(rafId);
    document.getElementById("play-icon").outerHTML =
      '<svg id="play-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v16l14-8z"/></svg>';
  }
  function stop() {
    pause();
    elapsed = 0;
    renderLyrics(); renderProgress();
  }

  function onFinish() {
    Particles.fire(80, { colors: ["#E0D5F2","#FFE9A8","#CFE3F2"] });
    AudioBus.success();
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    renderHUD();
  }

  function pickNasheed(i) {
    stop();
    nIdx = i;
    elapsed = 0;
    renderList(); renderLyrics(); renderProgress(); renderHUD();
    AudioBus.pop();
  }

  function nextNasheed()  { pickNasheed((nIdx + 1) % NASHEEDS.length); }
  function prevNasheed()  { pickNasheed((nIdx - 1 + NASHEEDS.length) % NASHEEDS.length); }
  function restart()      { elapsed = 0; renderLyrics(); renderProgress(); }
  function cycleSpeed() {
    const i = SPEEDS.indexOf(speed);
    speed = SPEEDS[(i + 1) % SPEEDS.length];
    document.getElementById("btn-speed").textContent = speed + "×";
    renderHUD();
  }

  /* ============ Bind ============ */
  document.getElementById("btn-play").addEventListener("click", () => {
    if (playing) pause(); else play();
  });
  document.getElementById("btn-restart").addEventListener("click", restart);
  document.getElementById("btn-prev").addEventListener("click", prevNasheed);
  document.getElementById("btn-next").addEventListener("click", nextNasheed);
  document.getElementById("btn-speed").addEventListener("click", cycleSpeed);
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  // Spacebar to play/pause
  document.addEventListener("keydown", e => {
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      if (playing) pause(); else play();
    }
    if (e.key === "ArrowRight") nextNasheed();
    if (e.key === "ArrowLeft") prevNasheed();
  });

  /* ============ Init ============ */
  renderList();
  renderLyrics();
  renderProgress();
  renderHUD();
})();
