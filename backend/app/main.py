import os
from typing import List, Optional, Dict, Any

from fastapi import FastAPI, HTTPException, UploadFile, File, Form, Request
from PIL import Image
import io
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
import httpx
import time
from telegram import Bot, InputMediaPhoto, InputFile
import json


app = FastAPI(title="Handyman Backend", version="0.1.0")

# Basic CORS for development; adjust in production (restrict origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TgPhoto(BaseModel):
    url: Optional[HttpUrl] = None
    # In будущих версиях можно добавить base64 и mime_type


class SendTelegramPayload(BaseModel):
    text: str
    photos: Optional[List[TgPhoto]] = None


class SendSmsPayload(BaseModel):
    to: str
    text: str
    subject: Optional[str] = None


class StoreRequestPayload(BaseModel):
    source: Optional[str] = None
    form_type: Optional[str] = None  # contact | dynamic | hourly | ai
    session_id: Optional[str] = None
    contact: Optional[Dict[str, Any]] = None
    jobs: Optional[List[Dict[str, Any]]] = None
    messages: Optional[List[Dict[str, Any]]] = None
    photos: Optional[List[Dict[str, Any]]] = None
    meta: Optional[Dict[str, Any]] = None


def get_env(name: str, default: Optional[str] = None) -> str:
    val = os.getenv(name, default)
    if val is None:
        raise RuntimeError(f"Missing required env var: {name}")
    return val


@app.get("/api/health")
async def health():
    return {"ok": True}


@app.post("/api/send-telegram")
async def send_telegram(payload: SendTelegramPayload):
    bot_token = get_env("TELEGRAM_BOT_TOKEN", "")
    chat_id = get_env("TELEGRAM_CHAT_ID", "")
    if not bot_token or not chat_id:
        raise HTTPException(status_code=500, detail="Telegram not configured")

    bot = Bot(token=bot_token)

    photos = [p for p in (payload.photos or []) if p and p.url]
    # If photos present, send them with caption on the first item; otherwise send plain text
    if photos:
        if len(photos) == 1:
            try:
                await bot.send_photo(chat_id=chat_id, photo=str(photos[0].url), caption=(payload.text or None))
            except Exception as e:
                raise HTTPException(status_code=502, detail=f"sendPhoto failed: {e}")
        else:
            batch_size = 10
            for i in range(0, len(photos), batch_size):
                chunk = photos[i:i + batch_size]
                if len(chunk) == 1:
                    try:
                        await bot.send_photo(chat_id=chat_id, photo=str(chunk[0].url), caption=(payload.text if i == 0 else None))
                    except Exception as e:
                        raise HTTPException(status_code=502, detail=f"sendPhoto failed: {e}")
                    continue
                media = [
                    InputMediaPhoto(media=str(p.url), caption=(payload.text if (i == 0 and idx == 0 and payload.text) else None))
                    for idx, p in enumerate(chunk)
                ]
                try:
                    await bot.send_media_group(chat_id=chat_id, media=media)
                except Exception as e:
                    raise HTTPException(status_code=502, detail=f"sendMediaGroup failed: {e}")
    else:
        try:
            await bot.send_message(chat_id=chat_id, text=payload.text, disable_web_page_preview=True)
        except Exception as e:
            raise HTTPException(status_code=502, detail=f"Telegram sendMessage failed: {e}")

    return {"ok": True}


@app.post("/api/send-telegram-upload")
async def send_telegram_upload(
    text: str = Form(""),
    files: List[UploadFile] = File(default_factory=list),
):
    bot_token = get_env("TELEGRAM_BOT_TOKEN", "")
    chat_id = get_env("TELEGRAM_CHAT_ID", "")
    if not bot_token or not chat_id:
        raise HTTPException(status_code=500, detail="Telegram not configured")

    # Use raw HTTP multipart for uploads (more reliable with attach://)
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

    # 1..10 files in a single request (1 -> sendPhoto, >=2 -> sendMediaGroup)
    async with httpx.AsyncClient(timeout=60) as client:
        if len(files) == 1:
            f0 = files[0]
            data0 = await f0.read()
            try:
                print(f"[TG upload] sending 1 photo: name={f0.filename}, size={len(data0) if data0 else 0}")
            except Exception:
                pass
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
            try:
                print(f"[TG upload] add photo{idx}: name={f.filename}, size={len(data) if data else 0}")
            except Exception:
                pass
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


@app.post("/api/send-document")
async def send_document(caption: str = Form("") , document: UploadFile = File(...)):
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


@app.post("/api/send-sms")
async def send_sms(payload: SendSmsPayload):
    api_key = get_env("TELNYX_API_KEY", "")
    from_number = get_env("TELNYX_FROM", "+19803167792")
    profile_id = get_env("TELNYX_PROFILE_ID", "")
    webhook_url = os.getenv("TELNYX_WEBHOOK_URL", "")
    webhook_failover_url = os.getenv("TELNYX_WEBHOOK_FAILOVER_URL", "")

    if not api_key or not profile_id:
        raise HTTPException(status_code=500, detail="Telnyx not configured")

    telnyx_payload = {
        "from": from_number,
        "messaging_profile_id": profile_id,
        "to": payload.to,
        "text": payload.text,
        "subject": payload.subject or "",
        "use_profile_webhooks": True,
        "type": "SMS",
    }
    if webhook_url:
        telnyx_payload["webhook_url"] = webhook_url
    if webhook_failover_url:
        telnyx_payload["webhook_failover_url"] = webhook_failover_url

    async with httpx.AsyncClient(timeout=20) as client:
        resp = await client.post(
            "https://api.telnyx.com/v2/messages",
            headers={
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
            },
            json=telnyx_payload,
        )
        if resp.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Telnyx send failed: {resp.text}")

    return {"ok": True}


@app.post("/api/store-request")
async def store_request(payload: StoreRequestPayload, request: Request):
    supabase_url = os.getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    if not supabase_url or not supabase_key:
        raise HTTPException(status_code=500, detail="Supabase not configured")

    headers = {
        "apikey": supabase_key,
        "Authorization": f"Bearer {supabase_key}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }

    def normalize_contact(contact: Dict[str, Any] | None) -> Dict[str, Any]:
        if not contact:
            return {}
        return {
            "full_name": contact.get("fullName") or contact.get("name") or "",
            "email": contact.get("email") or "",
            "phone": contact.get("phone") or "",
            "address": contact.get("address") or "",
            "consent_to_text": bool(contact.get("consentToText") or contact.get("aiConsentToText") or contact.get("hourlyConsentToText")),
        }

    # Merge client-provided meta with server-captured meta
    server_meta = {
        "user_agent": request.headers.get("user-agent"),
        "referer": request.headers.get("referer"),
        "x_forwarded_for": request.headers.get("x-forwarded-for"),
        "remote_addr": request.client.host if request.client else None,
    }

    merged_meta = {**(payload.meta or {}), "session_id": payload.session_id, "server_meta": server_meta}

    request_row = {
        "source": payload.source or "website",
        "form_type": payload.form_type or "unknown",
        "session_id": payload.session_id,
        # Store session_id also in meta for compatibility even if column not present in DB
        "meta": merged_meta,
        **normalize_contact(payload.contact or {}),
    }

    async with httpx.AsyncClient(timeout=20) as client:
        # Insert into requests
        resp = await client.post(f"{supabase_url}/rest/v1/requests", headers=headers, json=[request_row])
        if resp.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Supabase insert requests failed: {resp.text}")
        body = resp.json()
        request_id = body[0].get("id") if isinstance(body, list) and body else body.get("id")
        if not request_id:
            raise HTTPException(status_code=502, detail="Supabase did not return request id")

        # Optional: insert details tables per form_type
        try:
            if payload.form_type == "dynamic":
                _ = await client.post(
                    f"{supabase_url}/rest/v1/dynamic_details",
                    headers=headers,
                    json=[{
                        "request_id": request_id,
                        "project_description": (payload.meta or {}).get("projectDescription"),
                        "timeline": (payload.meta or {}).get("timeline"),
                        "main_categories": (payload.meta or {}).get("mainCategories"),
                        "service_groups": (payload.meta or {}).get("serviceGroups"),
                        "detailed_services": (payload.meta or {}).get("detailedServices"),
                    }]
                )
            elif payload.form_type == "hourly":
                _ = await client.post(
                    f"{supabase_url}/rest/v1/hourly_details",
                    headers=headers,
                    json=[{
                        "request_id": request_id,
                        "hourly_package": (payload.meta or {}).get("hourlyPackage"),
                        "description": (payload.meta or {}).get("description"),
                    }]
                )
            elif payload.form_type == "contact":
                _ = await client.post(
                    f"{supabase_url}/rest/v1/contact_details",
                    headers=headers,
                    json=[{
                        "request_id": request_id,
                        "description": (payload.meta or {}).get("description"),
                    }]
                )
        except Exception:
            # Do not fail request on details insert
            pass

        # Insert jobs
        if payload.jobs:
            jobs_rows = []
            for j in payload.jobs:
                try:
                    jobs_rows.append({
                        "request_id": request_id,
                        "job_id": j.get("id"),
                        "name": j.get("name"),
                        "price": j.get("price"),
                    })
                except Exception:
                    continue
            if jobs_rows:
                _ = await client.post(f"{supabase_url}/rest/v1/request_jobs", headers=headers, json=jobs_rows)

        # Insert messages
        if payload.messages:
            msg_rows = []
            for m in payload.messages:
                try:
                    msg_rows.append({
                        "request_id": request_id,
                        "sender": m.get("sender"),
                        "content": m.get("content"),
                        "photos_count": m.get("photos_count") or (len(m.get("photos", []) or [])),
                        "session_id": m.get("session_id") or payload.session_id,
                    })
                except Exception:
                    continue
            if msg_rows:
                _ = await client.post(f"{supabase_url}/rest/v1/request_messages", headers=headers, json=msg_rows)

        # Insert photos (urls only)
        if payload.photos:
            ph_rows = []
            for p in payload.photos:
                try:
                    ph_rows.append({
                        "request_id": request_id,
                        "url": p.get("url"),
                        "name": p.get("name"),
                        "origin": p.get("origin") or payload.form_type or "unknown",
                        "session_id": p.get("session_id") or payload.session_id,
                    })
                except Exception:
                    continue
            if ph_rows:
                _ = await client.post(f"{supabase_url}/rest/v1/request_photos", headers=headers, json=ph_rows)

    return {"ok": True, "stored": True, "request_id": request_id}


@app.post("/api/upload")
async def upload_photos(
    request_id: str = Form(...),
    origin: str = Form("") ,
    session_id: str = Form("") ,
    files: List[UploadFile] = File(default_factory=list),
):
    supabase_url = os.getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    bucket = os.getenv("SUPABASE_STORAGE_BUCKET", "uploads")
    if not supabase_url or not supabase_key:
        raise HTTPException(status_code=500, detail="Supabase not configured")
    headers_auth = {"apikey": supabase_key, "Authorization": f"Bearer {supabase_key}"}

    stored: list[dict] = []
    async with httpx.AsyncClient(timeout=60) as client:
        for f in files:
            content = await f.read()
            # Build storage path
            safe_name = f.filename or "file"
            path = f"{request_id}/{int(time.time())}_{safe_name}"
            upload_url = f"{supabase_url}/storage/v1/object/{bucket}/{path}"
            # Upload file bytes
            resp = await client.post(
                upload_url,
                headers={
                    **headers_auth,
                    "Content-Type": f.content_type or "application/octet-stream",
                    "x-upsert": "true",
                },
                content=content,
            )
            if resp.status_code // 100 != 2:
                raise HTTPException(status_code=502, detail=f"Storage upload failed: {resp.text}")
            # Extract basic image metadata if possible
            width = None
            height = None
            size_bytes = len(content) if content else None
            try:
                img = Image.open(io.BytesIO(content))
                width, height = img.size
            except Exception:
                pass
            stored.append({"storage_path": path, "name": safe_name, "origin": origin, "width": width, "height": height, "size_bytes": size_bytes, "session_id": session_id})

        # Insert metadata rows
        if stored:
            rows = [
                {
                    "request_id": request_id,
                    "storage_path": it["storage_path"],
                    "name": it.get("name"),
                    "origin": it.get("origin", origin),
                    "width": it.get("width"),
                    "height": it.get("height"),
                    "size_bytes": it.get("size_bytes"),
                    "session_id": it.get("session_id", session_id),
                }
                for it in stored
            ]
            resp2 = await client.post(
                f"{supabase_url}/rest/v1/request_photos",
                headers={
                    **headers_auth,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal",
                },
                json=rows,
            )
            if resp2.status_code // 100 != 2:
                raise HTTPException(status_code=502, detail=f"Supabase insert request_photos failed: {resp2.text}")

    return {"ok": True, "uploaded": len(stored), "items": stored}


