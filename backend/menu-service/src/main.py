from fastapi import FastAPI
from src.api.v1.routes import router as v1_router

app = FastAPI(title="Menu Service - Microrest")

app.include_router(v1_router, prefix="/api/v1")

