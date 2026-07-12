# -*- coding: utf-8 -*-
"""
خادم التسميع القرآني — Modal.com
=================================
يشغّل نموذج tarteel-ai/whisper-base-ar-quran (تعرّف صوتي مدرَّب على تلاوات القرآن
— بما فيها تلاوات كبار القراء كالحصري والمنشاوي) ويعيد النص المسموع.

النشر (مرة واحدة):
  1) أنشئ حسابًا مجانيًا على https://modal.com  (تسجيل بجوجل يكفي)
  2) على جهازك:  pip install modal   ثم   modal setup   (يفتح المتصفح لتسجيل الدخول)
  3) ثم:         modal deploy modal_quran_asr.py
  4) سيطبع لك رابطًا مثل:
       https://YOUR-WORKSPACE--quran-asr-transcribe.modal.run
     ضعه في corners/quran-hifz/asr-client.js مكان ASR_ENDPOINT.

التكلفة: ضمن الرصيد المجاني الشهري ($30) لحجم استخدام ~1000 أسرة.
"""

import modal

app = modal.App("quran-asr")

MODEL = "tarteel-ai/whisper-base-ar-quran"

CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

image = (
    modal.Image.debian_slim(python_version="3.11")
    .apt_install("ffmpeg")
    .pip_install(
        "transformers==4.44.2",
        "torch==2.4.0",
        "accelerate",
        "fastapi[standard]",
    )
)

with image.imports():
    import torch
    from transformers import pipeline


@app.cls(
    image=image,
    gpu="T4",                 # سريع؛ استبدلها بـ cpu=4 (واحذف سطر gpu) لو أردت الأرخص
    scaledown_window=120,     # ينام بعد دقيقتين من عدم الاستخدام = لا تكلفة خمول
    max_containers=3,
)
class QuranASR:
    @modal.enter()
    def load(self):
        device = "cuda" if torch.cuda.is_available() else "cpu"
        self.pipe = pipeline(
            "automatic-speech-recognition",
            model=MODEL,
            device=device,
            torch_dtype=torch.float16 if device == "cuda" else torch.float32,
        )

    @modal.fastapi_endpoint(method="POST", label="quran-asr-transcribe")
    async def transcribe(self, request):
        """يستقبل ملف صوت خام في جسم الطلب (webm/ogg/mp4/wav) ويعيد {"text": "..."}"""
        import tempfile, os
        from fastapi.responses import JSONResponse

        body = await request.body()
        if not body or len(body) < 200:
            return JSONResponse({"text": "", "error": "empty"}, headers=CORS)
        if len(body) > 8_000_000:
            return JSONResponse({"text": "", "error": "too_large"}, headers=CORS)

        ct = (request.headers.get("content-type") or "").lower()
        suffix = ".mp4" if "mp4" in ct else ".ogg" if "ogg" in ct else ".wav" if "wav" in ct else ".webm"

        with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as f:
            f.write(body)
            path = f.name
        try:
            out = self.pipe(path, generate_kwargs={"language": "arabic", "task": "transcribe"})
            return JSONResponse({"text": out.get("text", "")}, headers=CORS)
        except Exception as e:
            return JSONResponse({"text": "", "error": str(e)[:200]}, headers=CORS)
        finally:
            try:
                os.unlink(path)
            except OSError:
                pass
