// ── State ──────────────────────────────────────────────────
const state = {
  mode: "keyword",      // "keyword" | "scenario"
  query: "",
  examType: "",
  questionType: "",
  year: "",
  activeTopic: "",
  scenarioResults: null // [{q, score}] when in scenario mode
};

// ── DOM refs ───────────────────────────────────────────────
const searchInput      = document.getElementById("searchInput");
const clearBtn         = document.getElementById("clearBtn");
const yearSelect       = document.getElementById("yearSelect");
const resetBtn         = document.getElementById("resetBtn");
const questionsList    = document.getElementById("questionsList");
const countEl          = document.getElementById("resultsCount");
const emptyState       = document.getElementById("emptyState");
const tagsWrap         = document.getElementById("tagsWrap");
const keywordMode      = document.getElementById("keywordMode");
const scenarioModeEl   = document.getElementById("scenarioMode");
const scenarioInput    = document.getElementById("scenarioInput");
const scenarioSearchBtn= document.getElementById("scenarioSearchBtn");

// ── Scenario Concept Map ───────────────────────────────────
// 每筆：{ patterns: 情境詞組, concepts: 對應倫理概念 }
const SCENARIO_CONCEPT_MAP = [
  {
    patterns: ["客戶秘密", "委任人秘密", "告知秘密", "說秘密", "知道秘密", "不能說", "不可說",
               "洩漏", "保密", "透露", "揭露給", "公開給", "秘密", "機密"],
    concepts: ["保密義務"]
  },
  {
    patterns: ["要詐騙", "打算犯罪", "即將犯罪", "要傷害", "犯罪計畫", "行騙", "詐騙",
               "重大損害", "防止犯罪", "阻止", "告知第三人"],
    concepts: ["保密義務", "例外揭露"]
  },
  {
    patterns: ["兩個客戶", "同時代理", "代理雙方", "原告被告", "對立雙方", "兩造", "相反立場",
               "代理對方", "同時受任兩方"],
    concepts: ["利益衝突", "雙方代理"]
  },
  {
    patterns: ["前任客戶", "舊客戶", "之前代理", "以前的委任", "前案", "前委任", "前一個客戶",
               "案件終結後", "案結後"],
    concepts: ["前任委任人", "利益衝突", "保密義務"]
  },
  {
    patterns: ["同事務所", "同所律師", "合夥律師", "同一事務所", "事務所的其他律師"],
    concepts: ["利益衝突"]
  },
  {
    patterns: ["律師離職", "換事務所", "即將離職", "要離開事務所", "受僱律師", "離開律師",
               "帶走客戶", "帶客戶走", "客戶跟著走", "離職前"],
    concepts: ["受僱律師離職"]
  },
  {
    patterns: ["介紹費", "引介費", "轉介費", "代書介紹", "案件介紹", "給回饋", "回扣", "仲介費"],
    concepts: ["介紹費"]
  },
  {
    patterns: ["廣告", "打廣告", "業務廣告", "保證勝訴", "宣稱勝訴率", "誇大宣傳",
               "刊登廣告", "網路廣告"],
    concepts: ["律師廣告"]
  },
  {
    patterns: ["律師費", "收費", "酬金", "勝訴後收費", "後酬", "不成功不收費",
               "勝訴拿多少", "以勝訴為條件", "風險代理", "比例收費"],
    concepts: ["律師酬金", "風險代理費"]
  },
  {
    patterns: ["刑事案件費用", "刑事後酬", "刑事勝訴", "刑事案收費"],
    concepts: ["風險代理費"]
  },
  {
    patterns: ["法官配偶", "法官老婆", "法官太太", "法官先生", "法官的配偶", "配偶律師",
               "配偶是律師", "配偶是代理人"],
    concepts: ["法官迴避"]
  },
  {
    patterns: ["法官上電視", "接受媒體", "接受採訪", "政論節目", "媒體發言",
               "公開評論案件", "接受記者", "公開表態"],
    concepts: ["司法獨立"]
  },
  {
    patterns: ["法官收禮", "接受餽贈", "送禮給法官", "招待法官吃飯", "宴請法官",
               "請法官吃", "法官接受款待"],
    concepts: ["法官廉潔"]
  },
  {
    patterns: ["法官兼職", "法官兼任", "法官兼課", "法官教書", "法官投資", "法官開公司",
               "法官擔任董事"],
    concepts: ["法官兼職"]
  },
  {
    patterns: ["法官打電話", "私下接觸法官", "庭外接觸", "私下會談法官", "私下聯繫",
               "法官私下", "背後找法官", "找法官關說"],
    concepts: ["庭外接觸"]
  },
  {
    patterns: ["法官政治", "支持政黨", "參加競選", "助選", "政黨募款", "法官參政",
               "法官表態支持", "法官政治活動"],
    concepts: ["司法獨立"]
  },
  {
    patterns: ["長官命令法官", "院長移轉", "上級干預", "命令法官", "行政干預審判",
               "移轉案件給其他法官"],
    concepts: ["司法獨立"]
  },
  {
    patterns: ["檢察官借錢", "向律師借錢", "和律師金錢往來", "律師借款給檢察官",
               "財務往來"],
    concepts: ["法官廉潔", "誠信義務"]
  },
  {
    patterns: ["檢察一體", "上級命令", "檢察長命令", "書面指示", "長官書面",
               "不服命令", "不同意起訴"],
    concepts: ["檢察一體"]
  },
  {
    patterns: ["有利被告證據", "對被告有利", "起訴後發現無辜", "被告可能無罪",
               "撤回起訴", "客觀義務", "不利被告也要揭露"],
    concepts: ["檢察官客觀義務"]
  },
  {
    patterns: ["見證人", "擔任見證", "見證律師", "遺囑見證", "見證後又代理",
               "先見證後訴訟"],
    concepts: ["見證人", "利益衝突"]
  },
  {
    patterns: ["轉任律師", "法官轉律師", "檢察官轉律師", "冷卻期", "離職後代理",
               "辭職後執業"],
    concepts: ["轉任律師限制"]
  },
  {
    patterns: ["說情", "關說", "私下請求法官", "向法官說情", "託關係", "走後門"],
    concepts: ["忠誠義務"]
  },
  {
    patterns: ["懲戒", "吊照", "廢止執照", "律師被處分", "律師資格被撤"],
    concepts: ["律師懲戒"]
  },
  {
    patterns: ["公益服務", "免費服務", "義務服務", "法律扶助", "弱勢", "無償服務",
               "pro bono"],
    concepts: ["公益法律服務", "法律扶助"]
  },
  {
    patterns: ["告知勝訴率", "說明案情", "如實告知", "隱瞞案件", "不告知當事人",
               "委任人不知道", "沒有告訴客戶"],
    concepts: ["誠信義務"]
  },
  {
    patterns: ["對造接觸", "私下接觸對方", "直接找對方", "對方已有律師還直接聯繫",
               "私下會見對造"],
    concepts: ["誠信義務"]
  },
  {
    patterns: ["卷宗", "案件資料", "影印給客戶", "文件交給委任人"],
    concepts: ["委任關係"]
  },
  {
    patterns: ["辭退", "中途辭退", "放棄案件", "不想繼續辦", "委任終止",
               "委任人失去行為能力"],
    concepts: ["委任關係"]
  },
  {
    patterns: ["偽造證據", "假證據", "捏造", "偽證", "提出不實", "假的不在場證明"],
    concepts: ["誠信義務", "刑事辯護"]
  },
  {
    patterns: ["刑事辯護", "辯護律師", "刑事案件律師", "被告的律師"],
    concepts: ["刑事辯護", "忠誠義務"]
  },
  {
    patterns: ["仲裁人", "先當仲裁人", "仲裁後轉代理", "仲裁員轉律師"],
    concepts: ["利益衝突", "前任委任人"]
  },
  {
    patterns: ["法庭辱罵", "法官罵律師", "法庭尊嚴", "法官言行"],
    concepts: ["庭外接觸", "司法獨立"]
  },
  {
    patterns: ["評鑑法官", "聲請評鑑", "法官違失", "對法官不滿"],
    concepts: ["法官評鑑"]
  }
];

// ── Bigram Similarity ──────────────────────────────────────
function getBigrams(text) {
  // Normalize: keep Chinese chars + alphanumerics
  const norm = text.replace(/[^一-龥a-z0-9]/gi, "").toLowerCase();
  const set = new Set();
  for (let i = 0; i < norm.length - 1; i++) {
    set.add(norm.slice(i, i + 2));
  }
  return set;
}

function bigramSim(a, b) {
  const ba = getBigrams(a);
  const bb = getBigrams(b);
  if (ba.size === 0 || bb.size === 0) return 0;
  let overlap = 0;
  ba.forEach(bg => { if (bb.has(bg)) overlap++; });
  // Dice coefficient
  return (2 * overlap) / (ba.size + bb.size);
}

// ── Concept Scoring ────────────────────────────────────────
function matchConcepts(inputText) {
  const found = new Set();
  for (const { patterns, concepts } of SCENARIO_CONCEPT_MAP) {
    for (const p of patterns) {
      if (inputText.includes(p)) {
        concepts.forEach(c => found.add(c));
        break;
      }
    }
  }
  return [...found];
}

function getConceptScore(q, matchedConcepts) {
  if (matchedConcepts.length === 0) return 0;

  const qKeywords = q.keywords || [];
  const qText = (q.content + " " + (q.options || []).join(" ")).toLowerCase();
  let hits = 0;

  for (const concept of matchedConcepts) {
    // Exact keyword match
    const exact = qKeywords.some(k =>
      k === concept || k.includes(concept) || concept.includes(k)
    );
    if (exact) {
      hits += 1;
      continue;
    }
    // Partial text match (use first 2 chars of concept as probe)
    if (concept.length >= 2 && qText.includes(concept.slice(0, 2))) {
      hits += 0.4;
    }
  }

  return hits / matchedConcepts.length;
}

// ── Score a question for scenario ─────────────────────────
function scoreForScenario(q, inputText, matchedConcepts) {
  const cs = getConceptScore(q, matchedConcepts);
  const qText = (q.content + " " + (q.options || []).join(" "));
  const bs = bigramSim(inputText, qText);

  // Weight concept score more heavily when concepts are found
  const combined = matchedConcepts.length > 0
    ? cs * 0.72 + bs * 0.28
    : bs;

  return Math.min(1, combined);
}

// ── Run Scenario Search ────────────────────────────────────
function runScenarioSearch() {
  const input = scenarioInput.value.trim();
  if (!input) return;

  const matchedConcepts = matchConcepts(input);
  const conceptInfo = matchedConcepts.length > 0
    ? `（偵測到概念：${matchedConcepts.join("、")}）`
    : "（未偵測到特定概念，以文字相似度排序）";

  const scored = QUESTIONS.map(q => ({
    q,
    score: scoreForScenario(q, input, matchedConcepts)
  }));

  scored.sort((a, b) => b.score - a.score);

  // Show top 12 with score > 3%
  const results = scored.filter(r => r.score > 0.03).slice(0, 12);

  state.scenarioResults = results;

  // Render
  questionsList.innerHTML = "";
  emptyState.style.display = "none";

  if (results.length === 0) {
    countEl.innerHTML = `找不到相關題目`;
    emptyState.style.display = "block";
    return;
  }

  countEl.innerHTML = `依相關度排序，共 <strong>${results.length}</strong> 題 <span class="concept-info">${conceptInfo}</span>`;

  results.forEach(({ q, score }) => {
    questionsList.appendChild(buildCard(q, score));
  });
}

// ── Init ──────────────────────────────────────────────────
function init() {
  buildYearOptions();
  buildTopicTags();
  bindEvents();
  render();
}

function buildYearOptions() {
  const years = [...new Set(QUESTIONS.map(q => q.year))].sort((a, b) => b - a);
  years.forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = `民國 ${y} 年`;
    yearSelect.appendChild(opt);
  });
}

function buildTopicTags() {
  ALL_TOPICS.forEach(topic => {
    const span = document.createElement("span");
    span.className = "topic-tag";
    span.textContent = topic;
    span.dataset.topic = topic;
    span.addEventListener("click", () => {
      if (state.activeTopic === topic) {
        state.activeTopic = "";
        span.classList.remove("active");
      } else {
        document.querySelectorAll(".topic-tag").forEach(t => t.classList.remove("active"));
        state.activeTopic = topic;
        span.classList.add("active");
      }
      render();
    });
    tagsWrap.appendChild(span);
  });
}

// ── Events ────────────────────────────────────────────────
function bindEvents() {
  // Mode tabs
  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      state.mode = mode;
      document.querySelectorAll(".mode-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const aiModeEl = document.getElementById("aiMode");
      const resultsBar = document.querySelector(".results-bar");

      // 隱藏全部 mode panels
      keywordMode.style.display = "none";
      scenarioModeEl.style.display = "none";
      if (aiModeEl) aiModeEl.style.display = "none";

      if (mode === "keyword") {
        keywordMode.style.display = "";
        if (resultsBar) resultsBar.style.display = "";
        questionsList.style.display = "";
        state.scenarioResults = null;
        render();
      } else if (mode === "scenario") {
        scenarioModeEl.style.display = "";
        if (resultsBar) resultsBar.style.display = "";
        questionsList.style.display = "";
        questionsList.innerHTML = "";
        countEl.innerHTML = `輸入情境後點「搜尋相關題目」`;
        emptyState.style.display = "none";
      } else if (mode === "ai") {
        if (aiModeEl) aiModeEl.style.display = "";
        if (resultsBar) resultsBar.style.display = "none";
        questionsList.style.display = "none";
        emptyState.style.display = "none";
      }
    });
  });

  // Keyword search
  searchInput.addEventListener("input", e => {
    state.query = e.target.value.trim();
    render();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    render();
  });

  document.querySelectorAll(".pill[data-filter='examType']").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill[data-filter='examType']").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.examType = btn.dataset.value;
      render();
    });
  });

  document.querySelectorAll(".pill[data-filter='qType']").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill[data-filter='qType']").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.questionType = btn.dataset.value;
      render();
    });
  });

  yearSelect.addEventListener("change", e => {
    state.year = e.target.value;
    render();
  });

  resetBtn.addEventListener("click", resetAll);

  // Scenario search
  scenarioSearchBtn.addEventListener("click", runScenarioSearch);
  scenarioInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) runScenarioSearch();
  });

  // Example chips
  document.querySelectorAll(".ex-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      scenarioInput.value = chip.dataset.text;
      runScenarioSearch();
    });
  });
}

function resetAll() {
  searchInput.value = "";
  state.query = "";
  state.examType = "";
  state.questionType = "";
  state.year = "";
  state.activeTopic = "";
  yearSelect.value = "";
  document.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
  document.querySelector(".pill[data-filter='examType'][data-value='']").classList.add("active");
  document.querySelector(".pill[data-filter='qType'][data-value='']").classList.add("active");
  document.querySelectorAll(".topic-tag").forEach(t => t.classList.remove("active"));
  render();
}

// ── Filter (keyword mode) ──────────────────────────────────
function filterQuestions() {
  return QUESTIONS.filter(q => {
    if (state.examType && q.examType !== state.examType) return false;
    if (state.questionType && q.questionType !== state.questionType) return false;
    if (state.year && q.year !== parseInt(state.year)) return false;
    if (state.activeTopic && !q.keywords.some(k => k.includes(state.activeTopic) || state.activeTopic.includes(k))) return false;
    if (state.query) {
      const corpus = [q.content, ...(q.options || []), q.explanation, ...q.keywords, q.sourceNote].join(" ").toLowerCase();
      return state.query.toLowerCase().split(/\s+/).every(w => corpus.includes(w));
    }
    return true;
  });
}

// ── Highlight ─────────────────────────────────────────────
function highlight(text, query) {
  if (!query || !text) return escHtml(text || "");
  const escaped = escHtml(text);
  const words = query.split(/\s+/).filter(Boolean);
  let result = escaped;
  words.forEach(w => {
    const re = new RegExp(escapeRe(escHtml(w)), "gi");
    result = result.replace(re, m => `<mark>${m}</mark>`);
  });
  return result;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── Render (keyword mode) ─────────────────────────────────
function render() {
  const filtered = filterQuestions();
  countEl.innerHTML = `共找到 <strong>${filtered.length}</strong> 題`;
  questionsList.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";
  filtered.forEach(q => questionsList.appendChild(buildCard(q, null)));
}

// ── Build Card ─────────────────────────────────────────────
// relevanceScore: 0–1 (null = keyword mode, no badge)
function buildCard(q, relevanceScore) {
  const card = document.createElement("article");
  card.className = "q-card";
  card.dataset.exam = q.examType;

  const examBadgeClass = q.examType === "律師考試" ? "badge-exam-律師" : "badge-exam-司法";
  const typeBadgeClass = q.questionType === "單選題" ? "badge-single" : "badge-essay";
  const detail = q.examDetail ? ` · ${q.examDetail}` : "";
  const queryForHL = state.mode === "keyword" ? state.query : "";

  // Relevance badge
  let relBadge = "";
  if (relevanceScore !== null) {
    const pct = Math.round(relevanceScore * 100);
    const cls = pct >= 60 ? "badge-rel-high" : pct >= 30 ? "badge-rel-mid" : "badge-rel-low";
    relBadge = `<span class="badge badge-relevance ${cls}">相關度 ${pct}%</span>`;
  }

  // Options
  let optionsHtml = "";
  if (q.options) {
    const items = q.options.map(opt => {
      const isCorrect = opt.charAt(0) === q.answer;
      return `<li class="${isCorrect ? "correct" : ""}">${highlight(opt, queryForHL)}</li>`;
    }).join("");
    optionsHtml = `<ul class="options">${items}</ul>`;
  }

  const answerKey = q.answer ? `<span class="answer-key">答案：${q.answer}</span>` : "";
  const answerBoxId = `ans-${q.id}`;
  const kwHtml = q.keywords.map(k =>
    `<span class="kw" data-kw="${escHtml(k)}">${escHtml(k)}</span>`
  ).join("");

  card.innerHTML = `
    <div class="q-head">
      <div class="badges">
        <span class="badge badge-year">民國 ${q.year} 年</span>
        <span class="badge ${examBadgeClass}">${q.examType}${detail}</span>
        <span class="badge ${typeBadgeClass}">${q.questionType}</span>
        ${relBadge}
      </div>
      <span class="q-num">第 ${q.questionNum} 題</span>
    </div>
    <div class="q-content">${highlight(q.content, queryForHL)}</div>
    ${optionsHtml}
    <div class="q-footer">
      <div class="kw-list">${kwHtml}</div>
      <div class="footer-actions">
        <button class="btn-toggle" data-target="${answerBoxId}">查看解析 ▾</button>
        <a class="btn-source" href="${escHtml(q.sourceUrl)}" target="_blank" rel="noopener">查看原題 ↗</a>
      </div>
    </div>
    <div class="answer-box" id="${answerBoxId}">
      <h4>解析</h4>
      ${answerKey}
      <p>${escHtml(q.explanation || "（本題暫無詳細解析）")}</p>
      <p style="margin-top:0.5rem;font-size:0.78rem;color:#6b7280;">來源：${escHtml(q.sourceNote)}</p>
    </div>
  `;

  card.querySelector(".btn-toggle").addEventListener("click", function () {
    const box = document.getElementById(this.dataset.target);
    const open = box.classList.toggle("open");
    this.classList.toggle("open", open);
    this.textContent = open ? "收起解析 ▴" : "查看解析 ▾";
  });

  card.querySelectorAll(".kw").forEach(el => {
    el.addEventListener("click", () => {
      if (state.mode === "keyword") {
        searchInput.value = el.dataset.kw;
        state.query = el.dataset.kw;
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
      } else {
        // In scenario mode: fill scenario input with keyword
        scenarioInput.value = el.dataset.kw;
        runScenarioSearch();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  return card;
}

// ── Boot ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", init);
