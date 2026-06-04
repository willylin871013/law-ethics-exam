// ── AI 申論答題模組 ──────────────────────────────────────────

const aiQuestion         = document.getElementById("aiQuestion");
const aiSubmitBtn        = document.getElementById("aiSubmitBtn");
const aiSubmitText       = document.getElementById("aiSubmitText");
const aiLoadingSpinner   = document.getElementById("aiLoadingSpinner");
const aiAnswerWrap       = document.getElementById("aiAnswerWrap");
const aiAnswerStructured = document.getElementById("aiAnswerStructured");
const aiAnswerParagraph  = document.getElementById("aiAnswerParagraph");
const aiAnswerConcise    = document.getElementById("aiAnswerConcise");
const aiAnswerLaws       = document.getElementById("aiAnswerLaws");

// Tab 切換由 app.js 統一處理

// 範例 chip
document.querySelectorAll(".ai-ex-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    aiQuestion.value = chip.dataset.text;
    aiQuestion.focus();
  });
});

// 提交
aiSubmitBtn.addEventListener("click", submitQuestion);
aiQuestion.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") submitQuestion();
});

async function submitQuestion() {
  const q = aiQuestion.value.trim();
  if (!q) { aiQuestion.focus(); return; }

  // UI loading
  aiSubmitText.style.display     = "none";
  aiLoadingSpinner.style.display = "";
  aiSubmitBtn.disabled           = true;
  aiAnswerWrap.style.display     = "";
  aiAnswerStructured.innerHTML   = '<span class="ai-cursor">▍</span>';
  aiAnswerParagraph.innerHTML    = '<span class="ai-cursor">▍</span>';
  aiAnswerConcise.innerHTML      = '<span class="ai-cursor">▍</span>';
  aiAnswerLaws.innerHTML         = '<span class="ai-cursor">▍</span>';

  // 各欄的文字 buffer
  const buffers = { STRUCTURED: "", PARAGRAPH: "", CONCISE: "", LAWS: "" };
  const panels  = {
    STRUCTURED: aiAnswerStructured,
    PARAGRAPH:  aiAnswerParagraph,
    CONCISE:    aiAnswerConcise,
    LAWS:       aiAnswerLaws,
  };
  let currentSection = null;
  let rawBuffer = "";   // 累積未完成的分隔符偵測

  try {
    const res = await fetch("/api/essay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q })
    });
    if (!res.ok) throw new Error(`伺服器錯誤 ${res.status}`);

    const reader  = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      for (const line of chunk.split("\n")) {
        if (!line.startsWith("data: ")) continue;
        const raw = line.slice(6).trim();
        if (raw === "[DONE]") break;
        try {
          const parsed = JSON.parse(raw);
          if (parsed.error) throw new Error(parsed.error);
          if (!parsed.text) continue;

          rawBuffer += parsed.text;

          // 偵測並切換分隔符
          for (const key of ["STRUCTURED", "PARAGRAPH", "CONCISE", "LAWS"]) {
            const marker = `[[[${key}]]]`;
            const idx = rawBuffer.indexOf(marker);
            if (idx !== -1) {
              // marker 前的文字屬於舊區段
              if (currentSection) {
                buffers[currentSection] += rawBuffer.slice(0, idx);
                renderPanel(currentSection, panels, buffers);
              }
              currentSection = key;
              rawBuffer = rawBuffer.slice(idx + marker.length).replace(/^\n/, "");
              break;
            }
          }

          // 把累積文字寫入當前區段（若無進行中的 marker）
          if (currentSection && !rawBuffer.includes("[[[")) {
            buffers[currentSection] += rawBuffer;
            rawBuffer = "";
            renderPanel(currentSection, panels, buffers);
          }
        } catch (err) {
          if (err.message !== "skip") console.warn(err);
        }
      }
    }

    // 最後殘餘文字寫入
    if (currentSection && rawBuffer) {
      buffers[currentSection] += rawBuffer;
    }
    for (const key of ["STRUCTURED", "PARAGRAPH", "CONCISE"]) {
      panels[key].innerHTML = formatAnswer(buffers[key].trim()) || panels[key].innerHTML;
    }
    panels["LAWS"].innerHTML = formatLaws(buffers["LAWS"].trim()) || panels["LAWS"].innerHTML;

  } catch (err) {
    [aiAnswerStructured, aiAnswerParagraph, aiAnswerConcise].forEach(el => {
      el.innerHTML = `<div class="ai-error">❌ ${err.message}</div>`;
    });
  } finally {
    aiSubmitText.style.display     = "";
    aiLoadingSpinner.style.display = "none";
    aiSubmitBtn.disabled           = false;
  }
}

function renderPanel(key, panels, buffers) {
  panels[key].innerHTML = formatAnswer(buffers[key]) + '<span class="ai-cursor">▍</span>';
}

// 將文字轉為帶樣式 HTML
function formatAnswer(text) {
  return text
    .replace(/^(一|二|三|四|五)、(.+)$/gm, '<h4 class="ans-h4">$1、$2</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[・\-]\s*(.+)$/gm, '<li>$1</li>')
    .replace(/(律師法|律師倫理規範|法官法|法官倫理規範|法官守則|檢察官倫理規範|刑事訴訟法|憲法|法院組織法|公務員懲戒法)第(\d+)條/g,
      '<span class="law-ref">$1第$2條</span>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, "<br>");
}

// 法條區塊格式化（高亮法條名稱，處理課程資料未載全文的標記）
function formatLaws(text) {
  return text
    .replace(/^【(.+?)】$/gm, '<h4 class="law-title">【$1】</h4>')
    .replace(/條文全文：「(.+?)」/gs, '條文全文：<blockquote class="law-text">「$1」</blockquote>')
    .replace(/（課程資料未載全文[^）]*）/g, '<span class="law-unverified">⚠️ $&</span>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, "<br>");
}

// 複製按鈕（事件委派）
document.addEventListener("click", e => {
  const btn = e.target.closest(".aiCopyBtn");
  if (!btn) return;
  const text = document.getElementById(btn.dataset.target)?.innerText || "";
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✅ 已複製";
    setTimeout(() => btn.textContent = "📋 複製", 2000);
  });
});
