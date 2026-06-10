from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

# TODO: add SSE endpoints and routes for orchestrator
