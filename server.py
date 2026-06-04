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

# ── 課程內容 ─────────────────────────────────────────────────
def load_course_material():
    txt_path = os.path.join(BASE_DIR, "course_material.txt")
    if os.path.exists(txt_path):
        with open(txt_path, encoding="utf-8") as f:
            return f.read()
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

# ── 統一 System Prompt ────────────────────────────────────────
SYSTEM_PROMPT = f"""你是台灣律師考試「法律倫理學」科目的專業申論題答題助手，由清華大學蔡采薇律師的課程內容訓練而成。

【唯一知識來源】
你只能引用以下課程資料中出現過的法條、案例與判決字號。嚴禁引用課程資料以外的任何法條或案例。

{COURSE_MATERIAL}

【任務說明】
收到申論題後，你必須：

第一步：從上方課程資料中，找出本題相關的法條與判決案例，確立唯一法律依據。
第二步：以同一組法條與事實分析為基礎，依序輸出以下三種格式。

輸出格式規定（必須嚴格遵守分隔符）：

[[[STRUCTURED]]]
（條列式三段論，330~480字）
一、大前提（法律依據）：引用法條，說明構成要件
二、小前提（事實整理）：擷取題目關鍵事實
三、涵攝：將事實逐一套入要件，說明符合/不符合理由
四、結論：明確法律效果或懲戒種類
格式：條列式，可用・符號，字數330~480字

[[[PARAGRAPH]]]
（段落式論述，涵攝為核心，330~480字）
一至三段完整段落，不使用條列標題與編號符號。
法條自然融入行文，涵攝貫穿全段，末句收束結論。字數330~480字

[[[CONCISE]]]
（段落式精簡版，涵攝為核心，200~299字）
一至兩段完整段落，絕對禁止任何條列符號與編號。
直接帶出法條要件並即刻涵攝，末句明確結論。字數200~299字

重要規則：
- 三種格式必須引用完全相同的法條與案例
- 所有法條必須來自上方課程資料，不得自行補充
- 每段分隔符（[[[STRUCTURED]]]等）單獨佔一行，前後不加其他文字
- 使用繁體中文
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
    if not question:
        return {"error": "請輸入題目"}, 400

    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

    def generate():
        try:
            with client.messages.stream(
                model="claude-opus-4-8",
                max_tokens=6000,
                system=SYSTEM_PROMPT,
                messages=[{"role": "user", "content": f"請針對以下申論題作答：\n\n{question}"}]
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
