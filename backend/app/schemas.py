from typing import List, Optional, Dict, Any

from pydantic import BaseModel


class SendTelegramPayload(BaseModel):
    text: str


class SendSmsPayload(BaseModel):
    to: str
    text: str
    subject: Optional[str] = None


class StoreRequestPayload(BaseModel):
    source: Optional[str] = None  # website, etc
    form_type: Optional[str] = None  # contact | dynamic | hourly | ai
    session_id: Optional[str] = None
    contact: Optional[Dict[str, Any]] = None
    jobs: Optional[List[Dict[str, Any]]] = None
    messages: Optional[List[Dict[str, Any]]] = None
    photos: Optional[List[Dict[str, Any]]] = None
    meta: Optional[Dict[str, Any]] = None


