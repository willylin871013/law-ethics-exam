#!/usr/bin/env python3
"""法律倫理學 AI 申論答題伺服器"""

from flask import Flask, send_from_directory, request, Response, stream_with_context
import anthropic, json, os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ── 本機開發：讀 .env ────────────────────────────────────────
_env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(_env_path):
    with open(_env_path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                if not os.environ.get(k.strip()):
                    os.environ[k.strip()] = v.strip()

app = Flask(__name__, static_folder=BASE_DIR, static_url_path="")

# ── 課程內容（優先讀打包的 txt，本機才嘗試讀 pptx）───────────
def load_course_material():
    txt_path = os.path.join(BASE_DIR, "course_material.txt")
    if os.path.exists(txt_path):
        with open(txt_path, encoding="utf-8") as f:
            return f.read()
    # 本機 fallback：從原始 pptx 讀取
    try:
        from pptx import Presentation
        course_dir = "/Users/syuanwei/Downloads/法律倫理學"
        files = sorted([f for f in os.listdir(course_dir) if f.endswith(".pptx")])
        parts = []
        for fname in files:
            prs = Presentation(os.path.join(course_dir, fname))
            parts.append(f"\n===== {fname} =====")
            for i, slide in enumerate(prs.slides, 1):
                texts = [s.text.strip() for s in slide.shapes
                         if hasattr(s, "text") and s.text.strip()]
                if texts:
                    parts.append(f"[投影片{i}] " + " / ".join(texts))
        return "\n".join(parts)
    except Exception as e:
        return f"（課程資料載入失敗：{e}）"

COURSE_MATERIAL = load_course_material()

_BASE = f"""你是台灣律師考試「法律倫理學」科目的專業申論題答題助手，由清華大學蔡采薇律師的課程內容訓練而成。

【課程內容】
{COURSE_MATERIAL}
"""

_STYLE_RULES = """
【寫作規範——律師考試申論題標準答案格式】
絕對禁止以下用語（出現即不合格）：
「本題核心在於」「本案涉及」「值得注意的是」「綜上所述」「本文認為」
「根據課程資料」「以下分析」「首先說明」「需要特別注意」
任何向讀者說明「接下來你要做什麼」的句子。

正確語氣（直接法律論述）：
✓ 「按律師倫理規範第31條第1項第1款規定：『…』」
✓ 「查本件甲律師於受任A時，已知悉…，其後復受B委任，顯與前揭規定不符。」
✓ 「從而，甲律師之行為違反律師法第34條，應受申誡處分。」
"""

SYSTEM_PROMPT_STRUCTURED = _BASE + _STYLE_RULES + """
【格式：條列式三段論，330~480字】
直接以引用法條開始，不得有任何前言。格式：

一、（直接引用法條，說明構成要件）
二、（直接陳述題目關鍵事實，對應各要件）
三、（逐一涵攝：事實是否符合各要件，語氣肯定）
四、結論：（一句明確法律效果及懲戒種類）

引用法條格式：「○○法第X條第X項規定：『…』」
字數：330~480字，嚴格控制。
"""

SYSTEM_PROMPT_PARAGRAPH = _BASE + _STYLE_RULES + """
【格式：段落式論述（涵攝為核心），330~480字】
一至三段完整段落，不使用條列標題與任何編號符號。
首句直接引法條並說明要件，涵攝貫穿全文，末句明確結論與法律效果。
字數：330~480字，嚴格控制。
"""

SYSTEM_PROMPT_CONCISE = _BASE + _STYLE_RULES + """
【格式：段落式精簡版（涵攝為核心），200~299字】
一至兩段完整段落，絕對禁止條列符號與編號。
首句法條＋構成要件，緊接涵攝，末句結論，無任何多餘文字。
字數：200~299字，嚴格控制，不得超過300字。
"""

# ── 路由 ────────────────────────────────────────────────────
@app.route("/")
def index():
    resp = send_from_directory(BASE_DIR, "index.html")
    resp.headers["Cache-Control"] = "no-store"
    return resp

@app.route("/api/essay", methods=["POST"])
def essay():
    data = request.get_json()
    question = (data or {}).get("question", "").strip()
    style    = (data or {}).get("style", "structured")   # "structured" | "paragraph"
    if not question:
        return {"error": "請輸入題目"}, 400

    if style == "paragraph":
        system_prompt = SYSTEM_PROMPT_PARAGRAPH
        style_instruction = "以段落式論述作答，以涵攝為核心，一至三段，不使用條列標題，全文嚴格控制在330至480字之間"
    elif style == "concise":
        system_prompt = SYSTEM_PROMPT_CONCISE
        style_instruction = "以段落式作答，絕對禁止使用條列符號（・、-、•）或任何編號，只能寫完整段落，以涵攝為核心直擊結論，全文嚴格控制在200至299字之間"
    else:
        system_prompt = SYSTEM_PROMPT_STRUCTURED
        style_instruction = "以條列式三段論法與涵攝方法完整作答，全文嚴格控制在330至480字之間"

    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

    def generate():
        try:
            with client.messages.stream(
                model="claude-opus-4-8",
                max_tokens=4096,
                system=system_prompt,
                messages=[{"role": "user", "content": f"請針對以下申論題，{style_instruction}：\n\n{question}"}]
            ) as stream:
                for text in stream.text_stream:
                    yield f"data: {json.dumps({'text': text}, ensure_ascii=False)}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)}, ensure_ascii=False)}\n\n"

    return Response(
        stream_with_context(generate()),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"}
    )

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    print("✅ 課程資料載入完成")
    print(f"🌐 開啟瀏覽器：http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
