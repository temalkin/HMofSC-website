from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.health import router as health_router
from app.routes.telegram import router as telegram_router
from app.routes.sms import router as sms_router
from app.routes.requests import router as requests_router
from app.routes.storage import router as storage_router
from app.routes.ai import router as ai_router


app = FastAPI(title="Handyman Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(telegram_router)
app.include_router(sms_router)
app.include_router(requests_router)
app.include_router(storage_router)
app.include_router(ai_router)
