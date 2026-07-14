/* ============================================================
   92 · مفتاح العودة — أجب عن ألغاز فلسطين لتجمع أسنان المفتاح
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "مفتاح العودة", en: "The Key of Return" },
    title:       { ar: "مفتاح العودة", en: "The Key of Return" },
    desc:        { ar: "المفتاح رمز حقّ العودة الذي يحفظه أهل فلسطين جيلاً بعد جيل! اجمع أسنان المفتاح بحلّ الألغاز عن فلسطين وتاريخها وحقّ أهلها في أرضهم.", en: "The key is the symbol of the right of return that Palestinians keep generation after generation! Collect the key's teeth by solving riddles about Palestine, its history, and its people's right to their land." },
    keyHint:     { ar: "كل لغزٍ صحيح يُضيف سنّاً للمفتاح", en: "Each correct riddle adds a tooth to the key" },
    statTeeth:   { ar: "أسنان المفتاح", en: "Key teeth" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "رمز المفتاح", en: "The key's symbol" },
    sideQuote:   { ar: "يحتفظ اللاجئون الفلسطينيون بمفاتيح بيوتهم رمزاً لحقّهم في العودة وتمسّكهم بأرضهم.", en: "Palestinian refugees keep the keys to their homes as a symbol of their right of return and attachment to their land." },
    sideSrc:     { ar: "قضية فلسطين", en: "The cause of Palestine" },
    tip:         { ar: "معرفة قضايا الأمة جزءٌ من الانتماء إليها. تعلّم عن فلسطين وتاريخها يجعلك سفيراً لقضيتها أينما كنت.", en: "Knowing the Ummah's causes is part of belonging to it. Learning about Palestine and its history makes you an ambassador for its cause wherever you are." },
    winEyebrow:  { ar: "اكتمل المفتاح", en: "The key is complete" },
    winTitle:    { ar: "جمعتَ مفتاح العودة!", en: "You gathered the Key of Return!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    correct:     { ar: "صحيح! سنٌّ جديد للمفتاح 🗝", en: "Correct! A new key tooth 🗝" },
    wrong:       { ar: "ليست الإجابة الصحيحة — حاول ثانيةً", en: "Not correct — try again" },
  };

  const RIDDLES = [
    { q: { ar: "ما اسم المسجد المبارك في القدس، أولى القبلتين؟", en: "What is the name of the blessed mosque in Al-Quds, the first qibla?" },
      opts: [ { ar: "المسجد الأقصى", en: "Al-Aqsa Mosque", ok: true }, { ar: "المسجد النبوي", en: "The Prophet's Mosque" }, { ar: "المسجد الحرام", en: "Al-Masjid al-Haram" } ] },
    { q: { ar: "ما الشجرة التي ترمز لصمود أهل فلسطين وتعيش مئات السنين؟", en: "Which tree symbolizes the steadfastness of Palestinians and lives for centuries?" },
      opts: [ { ar: "الزيتون", en: "The olive tree", ok: true }, { ar: "النخيل", en: "The palm" }, { ar: "الصفصاف", en: "The willow" } ] },
    { q: { ar: "القبّة الذهبية الشهيرة في القدس تُسمّى قبّة...؟", en: "The famous golden dome in Al-Quds is called the Dome of...?" },
      opts: [ { ar: "الصخرة", en: "the Rock", ok: true }, { ar: "النور", en: "Light" }, { ar: "السماء", en: "the Sky" } ] },
    { q: { ar: "إلى أين أُسري بالنبي ﷺ ثم عُرج به إلى السماء؟", en: "To where was the Prophet ﷺ taken by night before ascending to heaven?" },
      opts: [ { ar: "المسجد الأقصى", en: "Al-Aqsa Mosque", ok: true }, { ar: "جبل أحد", en: "Mount Uhud" }, { ar: "غار حراء", en: "Cave of Hira" } ] },
    { q: { ar: "ماذا نُقدّم لإخواننا في فلسطين ونحن بعيدون؟", en: "What can we offer our brothers in Palestine while we're far away?" },
      opts: [ { ar: "الدعاء والتعريف بقضيتهم والدعم", en: "Du'a, spreading their cause, and support", ok: true }, { ar: "النسيان", en: "Forgetting" }, { ar: "الصمت", en: "Silence" } ] },
    { q: { ar: "لون عَلَم فلسطين الذي ليس فيه؟ (أحمر، أخضر، أبيض، أسود)", en: "Which color is NOT in the Palestinian flag? (red, green, white, black)" },
      opts: [ { ar: "الأزرق", en: "Blue", ok: true }, { ar: "الأحمر", en: "Red" }, { ar: "الأخضر", en: "Green" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, teeth = 0, tries = 0;

  function renderTrack() {
    $("ky-track").innerHTML = `<span style="font-size:28px;">🔑</span>` + RIDDLES.map((_, i) =>
      `<span class="ky-tooth ${i < teeth ? "got" : ""}">${i < teeth ? "✓" : ""}</span>`).join("");
    $("stat-teeth").textContent = `${teeth}/${RIDDLES.length}`;
  }

  function render() {
    const L = Lang.current();
    if (idx >= RIDDLES.length) return;
    const r = RIDDLES[idx];
    const opts = r.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    $("ky-area").innerHTML = `
      <div class="ky-riddle">
        <p>🧩 ${r.q[L]}</p>
        <div class="ky-opts">
          ${opts.map(x => `<button class="fd-choice" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("")}
        </div>
      </div>`;
    $("ky-area").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => choose(b)));
    renderTrack();
  }

  function choose(btn) {
    const L = Lang.current();
    tries++; $("stat-tries").textContent = tries;
    if (btn.dataset.ok === "1") {
      teeth++;
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      $("ky-area").querySelectorAll(".fd-choice").forEach(x => x.disabled = true);
      AudioBus.chord([440, 587, 740], 0.2); Particles.fire(24, { originY: "30%" });
      renderTrack();
      idx++;
      setTimeout(() => { if (idx >= RIDDLES.length) win(); else render(); }, 1100);
    } else {
      btn.style.background = "var(--rose)"; btn.disabled = true;
      AudioBus.fail();
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `ستة أسنانٍ من المعرفة — احمل قضية أمتك في قلبك` : `Six teeth of knowledge — carry your Ummah's cause in your heart`;
    Storage.set("anos_key_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; teeth = 0; tries = 0;
    $("stat-tries").textContent = 0;
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", render);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
