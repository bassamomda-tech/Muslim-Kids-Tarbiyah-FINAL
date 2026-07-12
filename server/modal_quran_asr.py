# -*- coding: utf-8 -*-
import modal
import tempfile
import os

app = modal.App("quran-asr")
MODEL = "tarteel-ai/whisper-base-ar-quran"

# 1. Setup container image environment
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
    import fastapi
    from fastapi.middleware.cors import CORSMiddleware
    from fastapi.responses import JSONResponse

# 2. Build the main Web Server application wrapper
web_app = fastapi.FastAPI()

# This middleware tells the browser that ALL incoming requests (POST and OPTIONS) are welcome
web_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.cls(
    image=image,
    gpu="T4",
    scaledown_window=120,
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

    @modal.method()
    async def transcribe_audio(self, body: bytes, content_type: str):
        if not body or len(body) < 200:
            return {"text": "", "error": "empty"}
        if len(body) > 8_000_000:
            return {"text": "", "error": "too_large"}

        suffix = ".mp4" if "mp4" in content_type else ".ogg" if "ogg" in content_type else ".wav" if "wav" in content_type else ".webm"

        with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as f:
            f.write(body)
            path = f.name
        try:
            out = self.pipe(path, generate_kwargs={"language": "arabic", "task": "transcribe"})
            return {"text": out.get("text", "")}
        except Exception as e:
            return {"text": "", "error": str(e)[:200]}
        finally:
            try:
                os.unlink(path)
            except OSError:
                pass

# 3. Expose the entire FastAPI app to the internet
@web_app.post("/quran-asr-transcribe")
async def handle_transcribe(request: fastapi.Request):
    body = await request.body()
    ct = (request.headers.get("content-type") or "").lower()
    
    # Run the processing safely inside the GPU container
    engine = QuranASR()
    result = await engine.transcribe_audio.aio(body, ct)
    return JSONResponse(result)

@app.function(image=image)
@modal.asgi_app()
def fastapi_app():
    return web_app