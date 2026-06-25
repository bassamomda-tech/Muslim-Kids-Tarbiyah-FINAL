/* ============================================================
   HONESTY PLEDGE — تعهّد الصدق
   ============================================================ */

(function () {
  "use strict";

  const PLEDGES = [
    { id: "speech",  t: "كَلامي مع النَّاس" },
    { id: "parents", t: "مع والِدَيَّ ومُعَلِّمي" },
    { id: "friends", t: "مع أَصدِقائي وإخوَتي" },
    { id: "homework",t: "في واجِباتي ودراستي" },
    { id: "promises",t: "في الوُعودِ والمَواعيد" },
    { id: "mistakes",t: "في الاعتِرافِ بِأَخطائي" },
  ];

  const STORAGE_KEY = "mk_honesty_v1";
  const STORE = Storage.get(STORAGE_KEY, { certs: [], firstDate: null });

  let name = "";
  let signature = "";
  let picked = new Set();

  /* ============ Renderers ============ */
  function renderPledges() {
    const root = document.getElementById("pledges");
    root.innerHTML = "";
    PLEDGES.forEach(p => {
      const b = document.createElement("button");
      b.className = "pledge" + (picked.has(p.id) ? " on" : "");
      b.innerHTML = `<span class="box"></span><span>${p.t}</span>`;
      b.addEventListener("click", () => {
        if (picked.has(p.id)) picked.delete(p.id);
        else { picked.add(p.id); AudioBus.pop(); }
        renderPledges();
        renderCert();
        updateHUD();
      });
      root.appendChild(b);
    });
  }

  function renderCert() {
    document.getElementById("cn-name").textContent = name.trim() || "…………";
    document.getElementById("cn-sign").textContent = signature.trim() || "………";
    const today = new Date();
    document.getElementById("cn-date").textContent =
      today.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });

    const list = document.getElementById("cn-list");
    list.innerHTML = "";
    const items = PLEDGES.filter(p => picked.has(p.id));
    if (items.length === 0) {
      const li = document.createElement("li");
      li.className = "cert-empty";
      li.textContent = "— اختَر تَعَهُّداتِكَ مِنَ القائِمَة —";
      list.appendChild(li);
    } else {
      items.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.t;
        list.appendChild(li);
      });
    }
  }

  function renderHistory() {
    const root = document.getElementById("history");
    root.innerHTML = "";
    if (STORE.certs.length === 0) {
      const e = document.createElement("div");
      e.className = "empty"; e.textContent = "لا شَهاداتٍ بَعد. وَقِّع تَعَهُّدَك الأَوَّل.";
      root.appendChild(e);
      return;
    }
    STORE.certs.slice().reverse().slice(0, 6).forEach(c => {
      const r = document.createElement("div");
      r.className = "row";
      r.innerHTML = `
        <span class="ic">✓</span>
        <div style="flex:1;">
          <div class="nm">${escapeHtml(c.name)}</div>
          <div style="font-size:11px; color:var(--muted); font-weight:600;">${c.count} تَعَهُّدات</div>
        </div>
        <span class="dt">${c.date}</span>
      `;
      root.appendChild(r);
    });
    document.getElementById("hist-pill").textContent = STORE.certs.length;
  }

  function updateHUD() {
    document.getElementById("picked").textContent = picked.size;
    document.getElementById("cert-count").textContent = STORE.certs.length;
    document.getElementById("status").textContent =
      STORE.certs.length > 0 ? "مُوَقَّع" : "غَيرُ مُوَقَّع";

    if (STORE.firstDate) {
      const d = Math.floor((Date.now() - STORE.firstDate) / 86400000) + 1;
      document.getElementById("commit-days").textContent = d;
    } else {
      document.getElementById("commit-days").textContent = 0;
    }
    const last = STORE.certs[STORE.certs.length - 1];
    document.getElementById("last-cert").textContent = last ? last.date : "—";

    const ready = name.trim().length >= 2 && signature.trim().length >= 2 && picked.size > 0;
    document.getElementById("btn-sign").disabled = !ready;
  }

  /* ============ Actions ============ */
  function signPledge() {
    const list = PLEDGES.filter(p => picked.has(p.id)).map(p => p.t);
    const today = new Date();
    const cert = {
      name: name.trim(),
      sign: signature.trim(),
      pledges: list,
      count: list.length,
      date: today.toLocaleDateString("ar-EG", { day: "numeric", month: "short", year: "numeric" }),
      ts: Date.now(),
    };
    STORE.certs.push(cert);
    if (!STORE.firstDate) STORE.firstDate = Date.now();
    Storage.set(STORAGE_KEY, STORE);

    AudioBus.success();
    Particles.fire(110, { colors: ["#E0D5F2","#C9A961","#CDEBD7","#FFE9A8"] });

    document.getElementById("signed-summary").innerHTML = `
      <div>وَقَّعَ <strong>${escapeHtml(cert.name)}</strong> تَعَهُّدَ الصِّدق بِـ<strong>${cert.count}</strong> بُنود.</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        احتَفِظ بالشَّهادة في مَكانٍ تَراه كلَّ يوم، فالتَّذكير يُعينُ على الوَفاء.
      </div>
    `;
    setTimeout(() => Modal.open("signed-modal"), 500);
    renderHistory();
    updateHUD();
  }

  function clearAll() {
    name = ""; signature = "";
    picked.clear();
    document.getElementById("name-input").value = "";
    document.getElementById("sign-input").value = "";
    renderPledges();
    renderCert();
    updateHUD();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  /* ============ Bind ============ */
  const nameInput = document.getElementById("name-input");
  const signInput = document.getElementById("sign-input");
  nameInput.addEventListener("input", e => { name = e.target.value; renderCert(); updateHUD(); });
  signInput.addEventListener("input", e => { signature = e.target.value; renderCert(); updateHUD(); });

  document.getElementById("btn-clear").addEventListener("click", () => {
    if (confirm("مَسحُ الحُقول الحاليَّة؟")) clearAll();
  });
  document.getElementById("btn-print").addEventListener("click", () => window.print());
  document.getElementById("btn-sign").addEventListener("click", signPledge);
  document.getElementById("signed-print").addEventListener("click", () => {
    Modal.close("signed-modal");
    setTimeout(() => window.print(), 400);
  });

  Modal.bindClose("signed-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  renderPledges();
  renderCert();
  renderHistory();
  updateHUD();
})();
