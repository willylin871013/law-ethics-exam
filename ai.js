// ── AI 申論答題模組 ──────────────────────────────────────────

const aiQuestion    = document.getElementById("aiQuestion");
const aiSubmitBtn   = document.getElementById("aiSubmitBtn");
const aiSubmitText  = document.getElementById("aiSubmitText");
const aiLoadingSpinner = document.getElementById("aiLoadingSpinner");
const aiAnswerWrap  = document.getElementById("aiAnswerWrap");
const aiAnswer      = document.getElementById("aiAnswer");
const aiCopyBtn     = document.getElementById("aiCopyBtn");

// Tab 切換由 app.js 統一處理

// ── 答題風格切換 ────────────────────────────────────────────
let currentStyle = "structured";
document.querySelectorAll(".style-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".style-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentStyle = btn.dataset.style;
  });
});

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
  aiSubmitText.style.display    = "none";
  aiLoadingSpinner.style.display = "";
  aiSubmitBtn.disabled          = true;
  aiAnswerWrap.style.display    = "";
  aiAnswer.innerHTML            = '<span class="ai-cursor">▍</span>';

  let buffer = "";

  try {
    const res = await fetch("/api/essay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q, style: currentStyle })
    });

    if (!res.ok) throw new Error(`伺服器錯誤 ${res.status}`);

    const reader = res.body.getReader();
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
            aiAnswer.innerHTML = formatAnswer(buffer) + '<span class="ai-cursor">▍</span>';
            aiAnswer.scrollIntoView({ block: "end", behavior: "smooth" });
          }
        } catch { /* skip malformed */ }
      }
    }

    aiAnswer.innerHTML = formatAnswer(buffer);

  } catch (err) {
    aiAnswer.innerHTML = `<div class="ai-error">❌ 錯誤：${err.message}<br>請確認伺服器已啟動（python3 server.py）</div>`;
  } finally {
    aiSubmitText.style.display     = "";
    aiLoadingSpinner.style.display = "none";
    aiSubmitBtn.disabled           = false;
  }
}

// 將 Markdown 風格文字轉為帶樣式 HTML
function formatAnswer(text) {
  return text
    // 標題 一、二、三、四
    .replace(/^(一|二|三|四|五)、(.+)$/gm, '<h4 class="ans-h4">$1、$2</h4>')
    // 粗體 **...**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // 條列 ・或 - 開頭
    .replace(/^[・\-]\s*(.+)$/gm, '<li>$1</li>')
    // 法條引用 （律師法第X條…）
    .replace(/(律師法|律師倫理規範|法官法|法官倫理規範|法官守則|檢察官倫理規範|刑事訴訟法|憲法|法院組織法|公務員懲戒法)第(\d+)條/g,
      '<span class="law-ref">$1第$2條</span>')
    // 換行
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, "<br>");
}

// 複製
aiCopyBtn.addEventListener("click", () => {
  const text = aiAnswer.innerText;
  navigator.clipboard.writeText(text).then(() => {
    aiCopyBtn.textContent = "✅ 已複製";
    setTimeout(() => aiCopyBtn.textContent = "📋 複製", 2000);
  });
});
