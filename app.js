/**
 * 智光商工 第一次國文段考 錯題診斷交互邏輯 (app.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  const { meta, errors } = window.EXAM_DATA;

  // Cache DOM Elements
  const errorCardsList = document.getElementById("error-cards-list");
  const filterTabs = document.getElementById("filter-tabs");
  const btnExpandAll = document.getElementById("btn-expand-all");
  const btnCollapseAll = document.getElementById("btn-collapse-all");
  const themeToggle = document.getElementById("theme-toggle");
  const btnPrint = document.getElementById("btn-print");
  const btnCloseBanner = document.getElementById("btn-close-banner");
  const announcementBanner = document.getElementById("announcement-banner");

  // Lightbox Elements
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const btnLightboxClose = document.getElementById("btn-lightbox-close");
  const lightboxOverlay = document.getElementById("lightbox-overlay");

  // Exam Viewer Tabs
  const viewerTabs = document.querySelectorAll(".viewer-tabs .tab-btn");
  const viewP1 = document.getElementById("view-p1");
  const viewP2 = document.getElementById("view-p2");

  // Quiz Runner Elements
  const quizCurrentIdx = document.getElementById("quiz-current-idx");
  const quizTotalCount = document.getElementById("quiz-total-count");
  const quizCorrectCount = document.getElementById("quiz-correct-count");
  const quizProgressBar = document.getElementById("quiz-progress-bar");
  const quizCardBody = document.getElementById("quiz-card-body");
  const btnPrevQuiz = document.getElementById("btn-prev-quiz");
  const btnNextQuiz = document.getElementById("btn-next-quiz");

  let currentFilter = "all";
  let quizIndex = 0;
  let correctScore = 0;
  const answeredQuizzes = new Set();

  // ================= 1. Theme Toggle =================
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.querySelector(".theme-icon").textContent = isLight ? "☀️" : "🌙";
  });

  // Close announcement banner
  if (btnCloseBanner && announcementBanner) {
    btnCloseBanner.addEventListener("click", () => {
      announcementBanner.style.display = "none";
    });
  }

  // Print button
  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      window.print();
    });
  }

  // ================= 2. Exam Viewer Tabs =================
  viewerTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      viewerTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const page = tab.getAttribute("data-page");
      if (page === "p1") {
        viewP1.classList.add("active");
        viewP2.classList.remove("active");
      } else {
        viewP2.classList.add("active");
        viewP1.classList.remove("active");
      }
    });
  });

  // Lightbox trigger for full exam images
  document.querySelectorAll(".image-wrapper img").forEach(img => {
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || "考卷放大檢視";
    lightboxModal.classList.add("active");
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
  }

  btnLightboxClose.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });

  // ================= 3. Render Error Breakdown Cards =================
  function renderErrorCards(filter = "all") {
    errorCardsList.innerHTML = "";

    const filtered = errors.filter(item => {
      if (filter === "all") return true;
      return item.category === filter;
    });

    if (filtered.length === 0) {
      errorCardsList.innerHTML = `
        <div class="glass-card text-center" style="padding: 40px; text-align: center;">
          <p style="font-size: 1.1rem; color: var(--text-muted);">該類別下沒有錯題紀錄！👍</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "error-card expanded"; // default expanded
      card.id = `card-${item.id}`;

      // Build options list if available
      let optionsHtml = "";
      if (item.optionsText && item.optionsText.length > 0) {
        optionsHtml = `
          <ul class="options-preview-list">
            ${item.optionsText.map(opt => `<li>${opt}</li>`).join("")}
          </ul>
        `;
      }

      // Build Quiz options inside card
      let quizHtml = "";
      if (item.quiz) {
        quizHtml = `
          <div class="quiz-box mt-3" id="quiz-box-${item.id}">
            <div class="quiz-header">
              <span class="quiz-badge">🧪 即時自我檢驗卡</span>
              <small style="color: var(--text-dim);">點擊選項測驗是否真正理解</small>
            </div>
            <p class="quiz-question-p">${item.quiz.question}</p>
            <div class="quiz-options-grid">
              ${item.quiz.options.map((opt, optIdx) => `
                <button class="quiz-opt-btn" data-qid="${item.id}" data-opt-idx="${optIdx}">
                  <span>${opt}</span>
                  <span class="opt-status-icon"></span>
                </button>
              `).join("")}
            </div>
            <div class="quiz-feedback-box" id="feedback-${item.id}"></div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="card-top-bar" data-target="card-${item.id}">
          <div class="item-index-badge">
            <span class="q-badge ${item.isSpecialReview ? 'special' : ''}">
              ${item.isSpecialReview ? '卷面申訴' : `${item.section} 第${item.qNum}題`}
            </span>
            <span class="q-category-tag">${item.categoryName}</span>
          </div>
          <h3 class="card-title-text">${item.title}</h3>
          <span class="card-toggle-icon">▼</span>
        </div>

        <div class="card-content-body">
          <!-- Exam Clip -->
          <div class="clip-section">
            <div class="clip-label">
              <span>📷</span> 原始試卷實景截圖真跡（點擊可放大觀看閱卷紅筆）：
            </div>
            <div class="clip-image-box" data-zoom-src="${item.clipImage}" data-caption="${item.section} 第${item.qNum}題 考卷原圖截圖">
              <img src="${item.clipImage}" alt="${item.title} 截圖" loading="lazy">
            </div>
          </div>

          <!-- Question Text -->
          <div class="q-text-box">
            <h4>${item.questionText}</h4>
            ${optionsHtml}
          </div>

          <!-- Answers Comparison -->
          <div class="ans-comparison-row">
            <div class="ans-badge-card wrong">
              <div class="ans-icon">❌</div>
              <div class="ans-info-col">
                <span>你的卷面作答</span>
                <div class="ans-val">${item.studentAnswer}</div>
              </div>
            </div>
            <div class="ans-badge-card correct">
              <div class="ans-icon">✅</div>
              <div class="ans-info-col">
                <span>標準正確解答</span>
                <div class="ans-val">${item.correctAnswer}</div>
              </div>
            </div>
          </div>

          <!-- Diagnosis Reason -->
          <div class="diagnosis-reason-box ${item.isSpecialReview ? 'special' : ''}">
            <div class="diagnosis-header">
              <span>🚨</span>
              <strong>${item.isSpecialReview ? '考卷批改特例鑑定' : '失分核心癥結診斷：為什麼會寫錯？'}</strong>
            </div>
            <p>${item.errorAnalysis}</p>
          </div>

          <!-- Detailed Explanation -->
          <div class="detailed-expl-wrap">
            ${item.detailedExplanation}
          </div>

          <!-- Interactive Quiz -->
          ${quizHtml}

        </div>
      `;

      errorCardsList.appendChild(card);
    });

    // Attach clip zoom handlers
    document.querySelectorAll(".clip-image-box").forEach(box => {
      box.addEventListener("click", () => {
        const src = box.getAttribute("data-zoom-src");
        const caption = box.getAttribute("data-caption");
        openLightbox(src, caption);
      });
    });

    // Attach toggle expand/collapse for card header
    document.querySelectorAll(".card-top-bar").forEach(bar => {
      bar.addEventListener("click", () => {
        const cardId = bar.getAttribute("data-target");
        const targetCard = document.getElementById(cardId);
        targetCard.classList.toggle("expanded");
      });
    });

    // Attach Quiz interactive handlers inside each card
    attachCardQuizListeners();
  }

  // Quiz click listeners inside cards
  function attachCardQuizListeners() {
    document.querySelectorAll(".quiz-opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = btn.getAttribute("data-qid");
        const selectedOptIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
        const item = errors.find(e => e.id === qid);
        if (!item || !item.quiz) return;

        const parentQuizBox = document.getElementById(`quiz-box-${qid}`);
        const feedbackBox = document.getElementById(`feedback-${qid}`);
        const allBtns = parentQuizBox.querySelectorAll(".quiz-opt-btn");

        // disable all buttons in this quiz
        allBtns.forEach(b => b.disabled = true);

        const correctIdx = item.quiz.correctIndex;
        if (selectedOptIdx === correctIdx) {
          btn.classList.add("correct-pick");
          btn.querySelector(".opt-status-icon").textContent = "✓ 答對了！";
          feedbackBox.className = "quiz-feedback-box correct show";
          feedbackBox.innerHTML = `🎉 <strong>答對了！完全掌握！</strong><br>${item.quiz.explanation}`;
        } else {
          btn.classList.add("wrong-pick");
          btn.querySelector(".opt-status-icon").textContent = "✗ 答錯了";
          allBtns[correctIdx].classList.add("correct-pick");
          allBtns[correctIdx].querySelector(".opt-status-icon").textContent = "✓ 正確解答";
          feedbackBox.className = "quiz-feedback-box wrong show";
          feedbackBox.innerHTML = `💡 <strong>觀念釐清：</strong><br>${item.quiz.explanation}`;
        }
      });
    });
  }

  // ================= 4. Filter Tab Switcher =================
  filterTabs.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderErrorCards(currentFilter);
    });
  });

  // Expand / Collapse All
  btnExpandAll.addEventListener("click", () => {
    document.querySelectorAll(".error-card").forEach(c => c.classList.add("expanded"));
  });

  btnCollapseAll.addEventListener("click", () => {
    document.querySelectorAll(".error-card").forEach(c => c.classList.remove("expanded"));
  });

  // ================= 5. Quiz Challenge Runner (Bottom Master Quiz) =================
  const quizItems = errors.filter(item => item.quiz);
  quizTotalCount.textContent = quizItems.length;

  function loadQuizQuestion(index) {
    if (index < 0 || index >= quizItems.length) return;
    const item = quizItems[index];

    quizCurrentIdx.textContent = index + 1;
    const pct = Math.round(((index + 1) / quizItems.length) * 100);
    quizProgressBar.style.width = `${pct}%`;

    quizCardBody.innerHTML = `
      <div class="runner-q-header">
        <span class="q-badge">${item.section} 第${item.qNum}題 原題考點</span>
        <h4 style="font-size: 1.15rem; margin: 12px 0; color: var(--text-main); font-weight: 800;">
          ${item.quiz.question}
        </h4>
      </div>
      <div class="quiz-options-grid mt-3" id="runner-options">
        ${item.quiz.options.map((opt, i) => `
          <button class="quiz-opt-btn runner-opt-btn" data-opt="${i}">
            <span>${opt}</span>
            <span class="runner-status"></span>
          </button>
        `).join("")}
      </div>
      <div class="quiz-feedback-box" id="runner-feedback"></div>
    `;

    // attach runner option clicks
    const optButtons = quizCardBody.querySelectorAll(".runner-opt-btn");
    const feedback = quizCardBody.querySelector("#runner-feedback");

    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const chosen = parseInt(btn.getAttribute("data-opt"), 10);
        optButtons.forEach(b => b.disabled = true);

        if (chosen === item.quiz.correctIndex) {
          btn.classList.add("correct-pick");
          btn.querySelector(".runner-status").textContent = "✓ 答對！";
          feedback.className = "quiz-feedback-box correct show";
          feedback.innerHTML = `🎉 <strong>答對！太棒了！</strong><br>${item.quiz.explanation}`;
          if (!answeredQuizzes.has(index)) {
            correctScore++;
            answeredQuizzes.add(index);
            quizCorrectCount.textContent = correctScore;
          }
        } else {
          btn.classList.add("wrong-pick");
          btn.querySelector(".runner-status").textContent = "✗ 答錯";
          optButtons[item.quiz.correctIndex].classList.add("correct-pick");
          optButtons[item.quiz.correctIndex].querySelector(".runner-status").textContent = "✓ 正確選項";
          feedback.className = "quiz-feedback-box wrong show";
          feedback.innerHTML = `💡 <strong>解析：</strong><br>${item.quiz.explanation}`;
          answeredQuizzes.add(index);
        }
      });
    });

    btnPrevQuiz.disabled = (index === 0);
    btnNextQuiz.textContent = (index === quizItems.length - 1) ? "完成挑戰 🎉" : "下一題 ➡️";
  }

  btnPrevQuiz.addEventListener("click", () => {
    if (quizIndex > 0) {
      quizIndex--;
      loadQuizQuestion(quizIndex);
    }
  });

  btnNextQuiz.addEventListener("click", () => {
    if (quizIndex < quizItems.length - 1) {
      quizIndex++;
      loadQuizQuestion(quizIndex);
    } else {
      // Completed all
      quizCardBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--accent-green); margin-bottom: 10px;">
            恭喜奕甯！完成段考錯題通關挑戰！
          </h3>
          <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 550px; margin: 0 auto 24px auto;">
            你在 <strong>${quizItems.length}</strong> 道題目中答對了 <strong>${correctScore}</strong> 題！<br>
            所有曾經掉入的陷阱現在都已經化為你的實力。保持這個勢頭，下次段考必定突飛猛進！
          </p>
          <button class="btn-primary" id="btn-restart-quiz">🔄 重新挑戰一次</button>
        </div>
      `;
      document.getElementById("btn-restart-quiz").addEventListener("click", () => {
        quizIndex = 0;
        correctScore = 0;
        answeredQuizzes.clear();
        quizCorrectCount.textContent = "0";
        loadQuizQuestion(quizIndex);
      });
    }
  });

  // ================= 6. Render Print Items =================
  function renderPrintSheet() {
    const printTarget = document.getElementById("print-items-target");
    if (!printTarget) return;

    printTarget.innerHTML = errors.map((item, idx) => `
      <div class="print-item-card">
        <h4>${idx + 1}. 【${item.section} 第${item.qNum}題】${item.title}</h4>
        <p><strong>題目：</strong> ${item.questionText}</p>
        <p><strong>你的原答：</strong> <span style="color: red;">${item.studentAnswer}</span> ｜ <strong>正確答案：</strong> <span style="color: green; font-weight: bold;">${item.correctAnswer}</span></p>
        <p><strong>錯誤癥結：</strong> ${item.errorAnalysis}</p>
      </div>
    `).join("");
  }

  // Initial Execution
  renderErrorCards("all");
  loadQuizQuestion(0);
  renderPrintSheet();

  console.log("國文段考錯題診斷系統已成功載入！");
});
