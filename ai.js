// ── AI 申論答題模組 ──────────────────────────────────────────

const aiQuestion       = document.getElementById("aiQuestion");
const aiSubmitBtn      = document.getElementById("aiSubmitBtn");
const aiSubmitText     = document.getElementById("aiSubmitText");
const aiLoadingSpinner = document.getElementById("aiLoadingSpinner");
const aiAnswerWrap     = document.getElementById("aiAnswerWrap");
const aiAnswerStructured = document.getElementById("aiAnswerStructured");
const aiAnswerParagraph  = document.getElementById("aiAnswerParagraph");
const aiAnswerConcise    = document.getElementById("aiAnswerConcise");

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
  aiAnswerStructured.innerHTML = '<span class="ai-cursor">▍</span>';
  aiAnswerParagraph.innerHTML  = '<span class="ai-cursor">▍</span>';
  aiAnswerConcise.innerHTML    = '<span class="ai-cursor">▍</span>';

  // 同時發三個請求
  await Promise.all([
    streamAnswer(q, "structured", aiAnswerStructured),
    streamAnswer(q, "paragraph",  aiAnswerParagraph),
    streamAnswer(q, "concise",    aiAnswerConcise),
  ]);

  aiSubmitText.style.display     = "";
  aiLoadingSpinner.style.display = "none";
  aiSubmitBtn.disabled           = false;
}

async function streamAnswer(question, style, targetEl) {
  let buffer = "";
  try {
    const res = await fetch("/api/essay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, style })
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
          if (parsed.text) {
            buffer += parsed.text;
            targetEl.innerHTML = formatAnswer(buffer) + '<span class="ai-cursor">▍</span>';
          }
        } catch { /* skip malformed */ }
      }
    }
    targetEl.innerHTML = formatAnswer(buffer);
  } catch (err) {
    targetEl.innerHTML = `<div class="ai-error">❌ ${err.message}</div>`;
  }
}

// 將 Markdown 風格文字轉為帶樣式 HTML
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

// 複製按鈕（動態綁定，因為是多個）
document.addEventListener("click", e => {
  const btn = e.target.closest(".aiCopyBtn");
  if (!btn) return;
  const targetId = btn.dataset.target;
  const text = document.getElementById(targetId)?.innerText || "";
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✅ 已複製";
    setTimeout(() => btn.textContent = "📋 複製", 2000);
  });
});
