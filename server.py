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

SYSTEM_PROMPT_STRUCTURED = _BASE + """
【答題格式：條列式三段論】
以下列標題依序作答：

一、大前提（法律依據）
  ・引用具體法條（律師法、律師倫理規範、法官法、法官倫理規範、法官守則、檢察官倫理規範、刑事訴訟法、憲法等）
  ・說明法條要件與立法目的

二、小前提（題目事實整理）
  ・擷取題目中的關鍵事實
  ・逐一對應法律要件

三、涵攝（要件涵攝分析）
  ・將事實逐一套入法律要件
  ・說明符合或不符合之理由
  ・如有多個爭點，分別涵攝

四、結論
  ・明確指出法律效果（是否違反倫理規範、應受何種懲戒）
  ・必要時說明免責事由或例外情形

【格式要求】
- 使用繁體中文，條理清晰
- 引用法條格式：「○○法第X條第X項規定：『…』」
- 適當引用課程案例（判決字號）作為佐證
- 字數：330~480字，嚴格控制，不得超過480字
"""

SYSTEM_PROMPT_PARAGRAPH = _BASE + """
【答題格式：段落式論述】
以一至三段完整段落作答，不使用條列標題。

核心要求：
- 涵攝是全文重心——每段均須緊扣「事實如何滿足法條要件」
- 第一段：直接點出相關法條與其構成要件，並即刻帶入題目事實進行涵攝
- 第二段（如有）：深入分析爭點或補充例外情形，繼續推進涵攝論證
- 最後一至兩句：收束結論，明確法律效果或懲戒後果
- 法條引用自然融入句子，不單獨羅列
- 不使用「一、二、三」編號，不使用條列符號
- 使用繁體中文，論述連貫、語氣嚴謹
- 字數：330~480字，嚴格控制，不得超過480字
"""

# ── 路由 ────────────────────────────────────────────────────
@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/api/essay", methods=["POST"])
def essay():
    data = request.get_json()
    question = (data or {}).get("question", "").strip()
    style    = (data or {}).get("style", "structured")   # "structured" | "paragraph"
    if not question:
        return {"error": "請輸入題目"}, 400

    system_prompt = SYSTEM_PROMPT_PARAGRAPH if style == "paragraph" else SYSTEM_PROMPT_STRUCTURED
    style_instruction = (
        "以段落式論述作答，以涵攝為核心，一至三段，不使用條列標題，全文嚴格控制在330至480字之間"
        if style == "paragraph" else
        "以條列式三段論法與涵攝方法完整作答，全文嚴格控制在330至480字之間"
    )

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
