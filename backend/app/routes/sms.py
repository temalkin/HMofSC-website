import os

import httpx
from fastapi import APIRouter, HTTPException

from app.core.config import get_env
from app.schemas import SendSmsPayload


router = APIRouter(prefix="/api")


@router.post("/send-sms")
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


