from typing import Any, Dict

import httpx
from fastapi import APIRouter, HTTPException, Request

from app.schemas import StoreRequestPayload


router = APIRouter(prefix="/api")


@router.post("/store-request")
async def store_request(payload: StoreRequestPayload, request: Request):
    from os import getenv

    supabase_url = getenv("SUPABASE_URL", "").rstrip("/")
    supabase_key = getenv("SUPABASE_SERVICE_ROLE_KEY", "")
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
        "meta": merged_meta,
        **normalize_contact(payload.contact or {}),
    }

    async with httpx.AsyncClient(timeout=20) as client:
        resp = await client.post(f"{supabase_url}/rest/v1/requests", headers=headers, json=[request_row])
        if resp.status_code // 100 != 2:
            raise HTTPException(status_code=502, detail=f"Supabase insert requests failed: {resp.text}")
        body = resp.json()
        request_id = body[0].get("id") if isinstance(body, list) and body else body.get("id")
        if not request_id:
            raise HTTPException(status_code=502, detail="Supabase did not return request id")

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
            elif payload.form_type == "ai":
                # Insert AI messages (conversation summary)
                if payload.messages:
                    ai_msg_rows = []
                    for m in payload.messages:
                        try:
                            # Extract storage_paths from provided photos list if any
                            storage_paths = None
                            photos = m.get("photos") or []
                            if isinstance(photos, list):
                                storage_paths = [p.get("storage_path") for p in photos if isinstance(p, dict) and p.get("storage_path")]
                            ai_msg_rows.append({
                                "request_id": request_id,
                                "session_id": m.get("session_id") or payload.session_id,
                                "sender": m.get("sender"),
                                "content": m.get("content"),
                                "photos_count": m.get("photos_count") or (len(photos or [])),
                                **({"storage_paths": storage_paths} if storage_paths else {}),
                            })
                        except Exception:
                            continue
                    if ai_msg_rows:
                        _ = await client.post(
                            f"{supabase_url}/rest/v1/ai_messages",
                            headers=headers,
                            json=ai_msg_rows,
                        )
                # Insert AI jobs (final snapshot on submit)
                if payload.jobs:
                    ai_job_rows = []
                    for j in payload.jobs:
                        try:
                            ai_job_rows.append({
                                "request_id": request_id,
                                "job_id": j.get("id"),
                                "name": j.get("name"),
                                "price": j.get("price"),
                                "session_id": payload.session_id,
                            })
                        except Exception:
                            continue
                    if ai_job_rows:
                        _ = await client.post(
                            f"{supabase_url}/rest/v1/ai_jobs",
                            headers=headers,
                            json=ai_job_rows,
                        )
        except Exception:
            pass

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


