/* جلسة منارة العقيدة — التفاعل: المؤقّت، المسابقة، كشف العجائب، القصة */
(function () {
  'use strict';

  const ARABIC = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  const toAr = (n) => String(n).replace(/[0-9]/g, (d) => ARABIC[+d]);

  /* ============ المؤقّت ============ */
  function initTimers() {
    document.querySelectorAll('.timer').forEach((t) => {
      const total = parseInt(t.dataset.seconds, 10) || 60;
      const disp = t.querySelector('.timer-num');
      const btn = t.querySelector('.timer-btn');
      let remaining = total, iv = null, running = false, done = false;

      function render() {
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        disp.textContent = toAr(m) + ':' + toAr(String(s).padStart(2, '0'));
      }
      function stop() { clearInterval(iv); iv = null; running = false; }
      function reset() {
        stop(); done = false; remaining = total;
        t.classList.remove('is-done', 'is-running');
        btn.textContent = '▶ ابدأ';
        render();
      }
      function tick() {
        remaining--;
        render();
        if (remaining <= 0) {
          stop(); done = true;
          t.classList.add('is-done');
          t.classList.remove('is-running');
          btn.textContent = '↻ من جديد';
          burst(t, ['⏰', '🎉', '👏']);
        }
      }
      btn.addEventListener('click', () => {
        if (done) { reset(); return; }
        if (running) {
          stop();
          t.classList.remove('is-running');
          btn.textContent = '▶ متابعة';
        } else {
          running = true;
          t.classList.add('is-running');
          btn.textContent = '⏸ إيقاف';
          iv = setInterval(tick, 1000);
        }
      });
      render();
    });
  }

  /* ============ المسابقة ============ */
  let score = 0;
  const answered = {};
  function initQuiz() {
    const slides = document.querySelectorAll('.quiz-slide');
    document.querySelectorAll('.score-total').forEach((e) => (e.textContent = toAr(slides.length)));

    document.querySelectorAll('.quiz-opt').forEach((opt) => {
      opt.addEventListener('click', () => {
        const slide = opt.closest('.quiz-slide');
        const qid = slide.dataset.q;
        if (answered[qid]) return;
        answered[qid] = true;

        const correct = opt.dataset.correct === '1';
        slide.querySelectorAll('.quiz-opt').forEach((o) => {
          o.classList.add('is-locked');
          if (o.dataset.correct === '1') o.classList.add('is-correct');
        });
        if (correct) {
          opt.classList.add('chose-correct');
          score++;
          burst(slide, ['⭐', '✨', '🌟', '🎉']);
        } else {
          opt.classList.add('chose-wrong');
        }
        const fb = slide.querySelector('.quiz-feedback');
        if (fb) fb.classList.add('show');
        updateScore();
      });
    });
  }
  function updateScore() {
    document.querySelectorAll('.score-num').forEach((e) => (e.textContent = toAr(score)));
    document.querySelectorAll('.score-stars').forEach((box) => {
      box.innerHTML = '';
      for (let i = 0; i < (parseInt(box.dataset.max, 10) || 5); i++) {
        const s = document.createElement('span');
        s.textContent = i < score ? '⭐' : '☆';
        box.appendChild(s);
      }
    });
  }

  /* ============ كشف (عجائب + القصة) ============ */
  function initReveals() {
    document.querySelectorAll('.reveal-card').forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
    document.querySelectorAll('[data-reveal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.reveal);
        if (target) {
          target.classList.add('show');
          burst(btn.closest('section') || document.body, ['🔥', '🌳', '🕊️']);
          btn.classList.add('used');
          btn.textContent = btn.dataset.after || btn.textContent;
        }
      });
    });
  }

  /* ============ احتفال صغير (emoji burst) ============ */
  function burst(host, emojis) {
    const stage = host.closest('section') || host;
    for (let i = 0; i < 14; i++) {
      const el = document.createElement('span');
      el.className = 'confetti';
      el.textContent = emojis[i % emojis.length];
      el.style.left = (20 + Math.random() * 60) + '%';
      el.style.top = (30 + Math.random() * 30) + '%';
      el.style.fontSize = (1.6 + Math.random() * 2.2) + 'rem';
      el.style.setProperty('--dx', (Math.random() * 2 - 1) * 220 + 'px');
      el.style.setProperty('--dy', (-120 - Math.random() * 220) + 'px');
      el.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      stage.appendChild(el);
      setTimeout(() => el.remove(), 1300);
    }
  }

  function init() {
    initTimers();
    initQuiz();
    initReveals();
    updateScore();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
