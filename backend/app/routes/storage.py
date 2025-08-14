import io
from typing import List

import httpx
from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from PIL import Image


router = APIRouter(prefix="/api")


@router.post("/upload")
async def upload_photos(
    request_id: str = Form(...),
    origin: str = Form(""),
    session_id: str = Form(""),
    files: List[UploadFile] = File(default_factory=list),
):
    from os import getenv

    supabase_url = getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    bucket = getenv("SUPABASE_STORAGE_BUCKET", "uploads")
    if not supabase_url or not supabase_key:
        raise HTTPException(status_code=500, detail="Supabase not configured")
    headers_auth = {"apikey": supabase_key, "Authorization": f"Bearer {supabase_key}"}

    stored: list[dict] = []
    async with httpx.AsyncClient(timeout=60) as client:
        for f in files:
            content = await f.read()
            from time import time
            safe_name = f.filename or "file"
            path = f"{request_id}/{int(time())}_{safe_name}"
            upload_url = f"{supabase_url}/storage/v1/object/{bucket}/{path}"
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
            width = None
            height = None
            size_bytes = len(content) if content else None
            try:
                img = Image.open(io.BytesIO(content))
                width, height = img.size
            except Exception:
                pass
            stored.append({"storage_path": path, "name": safe_name, "origin": origin, "width": width, "height": height, "size_bytes": size_bytes, "session_id": session_id})

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


