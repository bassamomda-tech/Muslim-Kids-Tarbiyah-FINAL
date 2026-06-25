/* ============================================================
   POSTMAN — منطق نشاط ساعي بريد الجنة
   حقيبة رسائل + اختيار المستلِم الصحيح + كتابة رسالة شخصية
   ============================================================ */

(function () {
  "use strict";

  /* ============ المستلِمون ============ */
  const RECIPIENTS = [
    { id: "mom",     name: "أمّك",       role: "أُمّك الحبيبة",        color: "a", icon: "♡" },
    { id: "dad",     name: "أبوك",       role: "أَبوك العزيز",        color: "b", icon: "★" },
    { id: "brother", name: "أخوك",       role: "أخوك الصغير",       color: "c", icon: "✦" },
    { id: "sister",  name: "أختك",       role: "أختك الكبيرة",      color: "d", icon: "✿" },
    { id: "grandma", name: "جدّتك",      role: "جَدّتك الغالية",      color: "e", icon: "☘" },
    { id: "grandpa", name: "جدّك",       role: "جَدّك الحكيم",        color: "f", icon: "▲" },
    { id: "teacher", name: "معلّمك",     role: "معلّمك في المدرسة",  color: "g", icon: "✎" },
    { id: "friend",  name: "صديقك",     role: "صديقك المُقرَّب",      color: "h", icon: "✩" },
  ];

  /* ============ بنك الرسائل ============ */
  const MESSAGES = [
    {
      text: "شكراً لكِ على الطعام الذي حضّرتِهِ اليوم. لقد كان لذيذاً جداً، وأحببتُهُ كثيراً.",
      to: "mom",
      from: "أحمد · ابنُكِ",
    },
    {
      text: "أرجو أن تَسأل الله أن يُبارك لي في دراستي. أُحبّك يا أبي وأفتخر بك.",
      to: "dad",
      from: "أحمد · ابنك",
    },
    {
      text: "عَجِّلْ بالعودة من المدرسة، لقد جهّزتُ لنا لعبةً جديدة لنلعبها معاً!",
      to: "brother",
      from: "أحمد · أخوك",
    },
    {
      text: "بارك الله لكِ في حفظ القرآن، أنتِ قدوتي في الصبر والاجتهاد.",
      to: "sister",
      from: "أحمد · أخوك",
    },
    {
      text: "أَفتقدُ قصصكِ قبل النوم يا حبيبتي. متى تأتين لزيارتنا مرة أخرى؟",
      to: "grandma",
      from: "أحمد · حفيدك",
    },
    {
      text: "علِّمني كيف كنتَ تحفظ القرآن في صِغرك. أريدُ أن أكونَ مثلك يوماً ما.",
      to: "grandpa",
      from: "أحمد · حفيدك",
    },
    {
      text: "شكراً لك على الدرس الذي شرحتَهُ اليوم. فهمتُ الآنَ كيف نحسب الجمع!",
      to: "teacher",
      from: "أحمد · تلميذك",
    },
    {
      text: "اعتذِر إن كنتُ أزعجتُك في الفسحة، وأَتمنَّى أن نلعب معاً غداً.",
      to: "friend",
      from: "أحمد · رفيقك",
    },
    {
      text: "دعائي لكِ في كل صلاة: ربِّ ارحمها كما ربَّتني صغيرا.",
      to: "mom",
      from: "أحمد · ابنك",
    },
    {
      text: "متى ستُعيد دراجتي الجديدة؟ أَعدُكَ أن أُشاركك بها كلَّ يوم.",
      to: "brother",
      from: "أحمد · أخوك",
    },
    {
      text: "حلوياتُك التي صنعتِها يوم الجمعة كانت أَلذَّ شيءٍ تذوّقتُهُ في حياتي!",
      to: "grandma",
      from: "أحمد · حفيدك",
    },
    {
      text: "شكراً على الكتاب الذي أَهديتَني إيّاه. سأقرأهُ قبل النوم كلَّ ليلة.",
      to: "dad",
      from: "أحمد · ابنك",
    },
  ];

  /* ============ الحالة ============ */
  const STORAGE_KEY = "mk_postman_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, {
    badges: 0,
    plays: 0,
    savedMessages: [], // {to, text, ts}
    bestErrors: null,
  });

  let bag = [];        // الرسائل في هذه الجولة
  let currentIdx = 0;
  let errors = 0;

  /* ============ تهيئة المستلمين ============ */
  function renderRecipients() {
    const container = document.getElementById("recipients");
    // عرض 4 مستلمين عشوائيين شاملين الصحيح (إذا الجولة بدأت) — أو الأوّل أربعة بشكل ثابت
    let toShow = activeRecipients();
    container.innerHTML = "";
    toShow.forEach(rec => {
      const el = document.createElement("button");
      el.className = `recipient color-${rec.color}`;
      el.dataset.id = rec.id;
      el.innerHTML = `
        <span class="stamp">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>
        </span>
        <div class="avatar">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
          </svg>
        </div>
        <div class="name">${rec.name}</div>
        <div class="role">${rec.role}</div>
      `;
      el.addEventListener("click", () => onPickRecipient(rec));
      container.appendChild(el);
    });
  }

  function activeRecipients() {
    // اعرض المستلمين الذين ما زالت رسائلهم في الحقيبة + 1 أو 2 إضافيين كمُشتّتات
    if (!bag.length) return RECIPIENTS.slice(0, 4);
    const remaining = bag.filter(m => !m.delivered);
    const targetIds = new Set(remaining.map(m => m.to));
    const targets = RECIPIENTS.filter(r => targetIds.has(r.id));
    const distractors = RECIPIENTS.filter(r => !targetIds.has(r.id));
    const need = Math.max(4 - targets.length, 1);
    const picked = [...targets, ...shuffle(distractors).slice(0, need)].slice(0, 8);
    return shuffle(picked);
  }

  function shuffle(a) {
    return a.slice().sort(() => Math.random() - 0.5);
  }

  /* ============ تحميل الرسالة الحالية ============ */
  function loadCurrent() {
    const msg = bag[currentIdx];
    if (!msg) {
      finish();
      return;
    }
    if (msg.delivered) {
      currentIdx++;
      loadCurrent();
      return;
    }
    document.getElementById("msg-text").textContent = msg.text;
    document.getElementById("msg-from").textContent = "من: " + msg.from;
    document.getElementById("msg-prompt").textContent =
      `الرسالة رقم ${currentIdx + 1} من ${bag.length} — لمن هذه الرسالة؟`;

    document.getElementById("envelope").classList.remove("delivered");
    renderRecipients();
    renderMailbag();
  }

  /* ============ النقر على مستلِم ============ */
  function onPickRecipient(rec) {
    const msg = bag[currentIdx];
    if (!msg) return;
    const card = document.querySelector(`.recipient[data-id="${rec.id}"]`);
    if (!card) return;

    if (rec.id === msg.to) {
      // صحّ
      card.classList.add("correct");
      AudioBus.success();
      msg.delivered = true;
      flyEnvelopeTo(card);
      setTimeout(() => {
        document.getElementById("delivered").textContent = bag.filter(m => m.delivered).length;
        Particles.fire(40, { colors: ["#CDEBD7","#FFE9A8","#A8D4B5"], originX: "50%", originY: "30%" });
        currentIdx++;
        loadCurrent();
      }, 950);
    } else {
      // خطأ
      card.classList.add("wrong");
      AudioBus.fail();
      errors++;
      document.getElementById("errors").textContent = errors;
      setTimeout(() => card.classList.remove("wrong"), 600);
    }
  }

  function flyEnvelopeTo(card) {
    const env = document.getElementById("envelope");
    const envRect = env.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const dx = (cardRect.left + cardRect.width/2) - (envRect.left + envRect.width/2);
    const dy = (cardRect.top + cardRect.height/2) - (envRect.top + envRect.height/2);

    const fly = document.createElement("div");
    fly.className = "flying-letter";
    fly.style.left = (envRect.left + envRect.width/2 - 40) + "px";
    fly.style.top  = (envRect.top + envRect.height/2 - 30) + "px";
    document.body.appendChild(fly);

    fly.animate(
      [
        { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1 },
        { transform: `translate(${dx*0.5}px,${dy*0.5 - 60}px) rotate(15deg) scale(0.8)`, opacity: 1, offset: 0.6 },
        { transform: `translate(${dx}px,${dy}px) rotate(-10deg) scale(0.3)`, opacity: 0 },
      ],
      { duration: 850, easing: "cubic-bezier(.4,.1,.4,1)" }
    ).onfinish = () => fly.remove();

    env.classList.add("delivered");
  }

  /* ============ حقيبة جانبية ============ */
  function renderMailbag() {
    const bagEl = document.getElementById("mailbag");
    bagEl.innerHTML = bag.map((m, i) => {
      const cls = m.delivered ? "delivered" : (i === currentIdx ? "current" : "");
      const num = i + 1;
      const snippet = m.delivered ? "✓ سُلِّمت" : (m.text.slice(0, 50) + "…");
      return `<div class="mailbag-item ${cls}">
        <span class="num">${num}</span>
        <span class="snippet">${snippet}</span>
      </div>`;
    }).join("");
  }

  /* ============ بدء جولة ============ */
  function start() {
    bag = shuffle(MESSAGES).slice(0, 6).map(m => ({ ...m, delivered: false }));
    currentIdx = 0;
    errors = 0;
    document.getElementById("errors").textContent = "0";
    document.getElementById("delivered").textContent = "0";
    document.getElementById("compose-card").style.display = "none";
    loadCurrent();
  }

  /* ============ النهاية ============ */
  function finish() {
    AudioBus.success();
    Particles.fire(140);
    STORAGE.badges++;
    STORAGE.plays++;
    if (STORAGE.bestErrors == null || errors < STORAGE.bestErrors) STORAGE.bestErrors = errors;
    Storage.set(STORAGE_KEY, STORAGE);
    document.getElementById("badges").textContent = STORAGE.badges;

    // فعّل واجهة كتابة رسالة شخصية
    document.getElementById("compose-card").style.display = "";
    document.getElementById("msg-text").textContent = "اكتب الآن رسالتك أنت!";
    document.getElementById("msg-prompt").textContent = "في اللوحة اليمنى ↘";

    setTimeout(() => Modal.open("win-modal"), 700);
  }

  /* ============ رسائل المستخدم المحفوظة ============ */
  function renderSaved() {
    const wrap = document.getElementById("my-saved-msgs");
    if (!wrap) return;
    if (!STORAGE.savedMessages.length) {
      wrap.innerHTML = "";
      return;
    }
    wrap.innerHTML = "<div style='font-size:11px; font-weight:700; color:var(--muted); margin:8px 0 4px;'>رسائل محفوظة في الحقيبة:</div>" +
      STORAGE.savedMessages.slice(-3).reverse().map(s =>
        `<div style="padding:8px 10px; background: var(--bg-soft); border-radius: 10px; font-size:12px;">
          <strong style="color: var(--brand-ink); display: block; font-size: 11px;">→ ${s.to}</strong>
          ${s.text}
        </div>`
      ).join("");
  }

  document.getElementById("save-msg").addEventListener("click", () => {
    const t = document.getElementById("my-message").value.trim();
    const r = document.getElementById("my-recipient").value;
    if (!t || !r) {
      alert("اكتب رسالتك واختر المستلِم أولاً 😊");
      return;
    }
    STORAGE.savedMessages.push({ to: r, text: t, ts: Date.now() });
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(30, { colors: ["#FFE9A8","#FFD9C2","#CDEBD7"] });
    AudioBus.pop();
    document.getElementById("my-message").value = "";
    document.getElementById("my-recipient").value = "";
    renderSaved();
  });

  /* ============ ربط ============ */
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(start, 300);
  });
  Modal.bindClose("win-modal");

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط كل البيانات (بما فيها رسائلك المحفوظة)؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });

  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  document.getElementById("badges").textContent = STORAGE.badges || 0;
  renderSaved();
  start();
})();
