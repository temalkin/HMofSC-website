from typing import List

import httpx
from fastapi import APIRouter, HTTPException, UploadFile, File, Form

from app.core.config import get_env
from app.schemas import SendTelegramPayload
import json


router = APIRouter(prefix="/api")


@router.post("/send-telegram")
async def send_telegram(payload: SendTelegramPayload):
    bot_token = get_env("TELEGRAM_BOT_TOKEN", "")
    chat_id = get_env("TELEGRAM_CHAT_ID", "")
    if not bot_token or not chat_id:
        raise HTTPException(status_code=500, detail="Telegram not configured")

    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.post(
            f"https://api.telegram.org/bot{bot_token}/sendMessage",
            json={"chat_id": chat_id, "text": payload.text},
        )
        if resp.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Telegram sendMessage failed: {resp.text}")

    return {"ok": True}


@router.post("/send-telegram-upload")
async def send_telegram_upload(
    text: str = Form(""),
    files: List[UploadFile] = File(default_factory=list),
):
    bot_token = get_env("TELEGRAM_BOT_TOKEN", "")
    chat_id = get_env("TELEGRAM_CHAT_ID", "")
    if not bot_token or not chat_id:
        raise HTTPException(status_code=500, detail="Telegram not configured")

    if not files:
        if text:
            async with httpx.AsyncClient(timeout=30) as client:
                r = await client.post(
                    f"https://api.telegram.org/bot{bot_token}/sendMessage",
                    json={"chat_id": chat_id, "text": text},
                )
                if r.status_code // 100 != 2:
                    raise HTTPException(status_code=502, detail=f"Telegram sendMessage failed: {r.text}")
        return {"ok": True, "info": "no files"}

    async with httpx.AsyncClient(timeout=60) as client:
        if len(files) == 1:
            f0 = files[0]
            data0 = await f0.read()
            r = await client.post(
                f"https://api.telegram.org/bot{bot_token}/sendPhoto",
                data={"chat_id": chat_id, **({"caption": text} if text else {})},
                files={"photo": (f0.filename or "photo.jpg", data0, f0.content_type or "image/jpeg")},
            )
            if r.status_code // 100 != 2:
                raise HTTPException(status_code=502, detail=f"Telegram sendPhoto failed: {r.text}")
            return {"ok": True}

        files_dict = {}
        media = []
        for idx, f in enumerate(files):
            await f.seek(0)
            data = await f.read()
            key = f"photo{idx}"
            files_dict[key] = (f.filename or f"{key}.jpg", data, f.content_type or "image/jpeg")
            item = {"type": "photo", "media": f"attach://{key}"}
            if idx == 0 and text:
                item["caption"] = text
            media.append(item)
        r = await client.post(
            f"https://api.telegram.org/bot{bot_token}/sendMediaGroup",
            data={"chat_id": chat_id, "media": json.dumps(media, ensure_ascii=False)},
            files=files_dict,
        )
        if r.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Telegram sendMediaGroup failed: {r.text}")

    return {"ok": True}


@router.post("/send-document")
async def send_document(caption: str = Form(""), document: UploadFile = File(...)):
    bot_token = get_env("TELEGRAM_BOT_TOKEN", "")
    chat_id = get_env("TELEGRAM_CHAT_ID", "")
    if not bot_token or not chat_id:
        raise HTTPException(status_code=500, detail="Telegram not configured")

    content = await document.read()
    async with httpx.AsyncClient(timeout=30) as client:
        url = f"https://api.telegram.org/bot{bot_token}/sendDocument"
        files = {
            "chat_id": (None, chat_id),
            "caption": (None, caption or ""),
            "document": (document.filename or "file.txt", content, document.content_type or "text/plain"),
        }
        resp = await client.post(url, files=files)
        if resp.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Telegram sendDocument failed: {resp.text}")

    return {"ok": True}


