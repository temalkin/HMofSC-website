from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
from typing import Optional, List


router = APIRouter(prefix="/api/ai")


class EnsureRequestBody(BaseModel):
    session_id: str
    source: Optional[str] = "website"


class EnsureRequestResp(BaseModel):
    request_id: str


class IngestMessageBody(BaseModel):
    session_id: str
    sender: str
    content: Optional[str] = ""
    photos_count: int = 0
    storage_paths: Optional[List[str]] = None


async def _supabase_headers(supabase_key: str) -> dict:
    return {
        "apikey": supabase_key,
        "Authorization": f"Bearer {supabase_key}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }


@router.post("/ensure-request", response_model=EnsureRequestResp)
async def ensure_request(body: EnsureRequestBody):
    from os import getenv

    supabase_url = getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    if not supabase_url or not supabase_key:
        raise HTTPException(status_code=500, detail="Supabase not configured")

    headers = await _supabase_headers(supabase_key)
    async with httpx.AsyncClient(timeout=15) as client:
        # Try to find latest request for this session
        sel_url = (
            f"{supabase_url}/rest/v1/requests?"
            f"session_id=eq.{body.session_id}&form_type=eq.ai&select=id&order=created_at.desc&limit=1"
        )
        r = await client.get(sel_url, headers={k: v for k, v in headers.items() if k != "Content-Type"})
        if r.status_code // 100 == 2:
            arr = r.json() or []
            if isinstance(arr, list) and arr:
                rid = arr[0].get("id")
                if rid:
                    return {"request_id": rid}
        # Create new request row
        payload = [{
            "source": body.source or "website",
            "form_type": "ai",
            "session_id": body.session_id,
            "status": "new",
            "meta": {"session_id": body.session_id},
        }]
        cr = await client.post(f"{supabase_url}/rest/v1/requests", headers=headers, json=payload)
        if cr.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Supabase create request failed: {cr.text}")
        body_json = cr.json()
        rid = body_json[0].get("id") if isinstance(body_json, list) and body_json else body_json.get("id")
        if not rid:
            raise HTTPException(status_code=502, detail="Supabase did not return request id")
        return {"request_id": rid}


@router.post("/ingest-message")
async def ingest_message(body: IngestMessageBody):
    from os import getenv

    supabase_url = getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    if not supabase_url or not supabase_key:
        raise HTTPException(status_code=500, detail="Supabase not configured")

    headers = await _supabase_headers(supabase_key)

    # Ensure request exists
    ensure = await ensure_request(EnsureRequestBody(session_id=body.session_id))
    request_id = ensure["request_id"]

    row = {
        "request_id": request_id,
        "session_id": body.session_id,
        "sender": body.sender,
        "content": body.content or "",
        "photos_count": int(body.photos_count or 0),
    }
    if body.storage_paths:
        row["storage_paths"] = body.storage_paths

    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.post(
            f"{supabase_url}/rest/v1/ai_messages",
            headers=headers,
            json=[row],
        )
        if r.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Supabase insert ai_messages failed: {r.text}")

    return {"ok": True, "request_id": request_id}


