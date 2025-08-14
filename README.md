# Handyman of South Charlotte – Monorepo

Full-stack project with FastAPI backend and Vite/React frontend. Includes Docker setup, live-reload dev workflow, and integrations (Supabase, Telegram, Telnyx).

## Repository layout

- `backend/`
  - FastAPI app (`app/main.py`) with routes under `app/routes/`
  - Env-driven integrations (Supabase, Telegram bot, Telnyx)
  - `schema.sql` – reference SQL for required tables/indexes
- `frontend/`
  - React (Vite) SPA
  - Page routes under `src/pages/`
  - Shared UI and API helpers under `src/components/`, `src/common/`
- `docker-compose.yml`
  - Two services: `backend` (8080), `frontend` (5173)

## Prerequisites

- Docker and Docker Compose
- If running locally without Docker:
  - Python 3.11+
  - Node.js 20+

## Environment variables

Create a `.env` in the repo root for Docker compose (backend + frontend):

```
# Backend
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
TELNYX_API_KEY=...
TELNYX_FROM=+19803167792
TELNYX_PROFILE_ID=...
TELNYX_WEBHOOK_URL=
TELNYX_WEBHOOK_FAILOVER_URL=
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_STORAGE_BUCKET=uploads

# Frontend (compose)
VITE_GOOGLE_MAPS_API_KEY=...
# Optional if not using the Vite /api proxy:
# VITE_BACKEND_BASE_URL=http://localhost:8080
```

For local frontend dev outside Docker, use `frontend/.env.local` with:

```
VITE_GOOGLE_MAPS_API_KEY=...
VITE_BACKEND_BASE_URL=http://localhost:8080
```

## Run with Docker (recommended)

- Build and start both services:
```
cd /Users/artemiymalkin/Desktop/site/other_site
docker compose up -d --build
```
- Open:
  - Backend: http://localhost:8080/api/health
  - Frontend: http://localhost:5173
- Logs:
```
docker compose logs -f --tail=100 backend
docker compose logs -f --tail=100 frontend
```
- Restart one service:
```
docker compose up -d --build backend
```

## Dev mode with live reload (Docker)

Backend (FastAPI `--reload`) with code mounted:
```
# stop/remove any previous dev containers if needed
docker rm -f handyman-backend-dev 2>/dev/null || true

docker compose run --rm -d --service-ports \
  -v $(pwd)/backend/app:/app/app \
  --name handyman-backend-dev backend \
  uvicorn app.main:app --host 0.0.0.0 --port 8080 --reload

docker logs -f handyman-backend-dev
```

Frontend (Vite dev server + mounted code):
```
# stop/remove if needed
docker rm -f handyman-frontend-dev 2>/dev/null || true

docker compose run --rm -d --service-ports --no-deps \
  -v $(pwd)/frontend:/app \
  -v /app/node_modules \
  --name handyman-frontend-dev frontend \
  sh -lc "npm ci --no-audit --no-fund && npm run dev -- --host 0.0.0.0 --port 5173"

docker logs -f handyman-frontend-dev
```

Notes:
- In dev, frontend proxies `/api` to `http://backend:8080` (see `frontend/vite.config.js`).
- Alternatively, set `VITE_BACKEND_BASE_URL=http://localhost:8080` and call the backend directly from the browser.

## Local (no Docker)

Backend:
```
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8080 --reload
```
Frontend:
```
cd frontend
npm ci
npm run dev
```

## API surface (backend)

- Health
  - `GET /api/health` → `{ ok: true }`

- Telegram
  - `POST /api/send-telegram` → send text
  - `POST /api/send-telegram-upload` (multipart) → send 1..10 photos
  - `POST /api/send-document` (multipart) → send document

- SMS (Telnyx)
  - `POST /api/send-sms` → sends SMS via Telnyx (requires `TELNYX_*` env)

- Requests (Supabase)
  - `POST /api/store-request` → creates a request row (and related details by `form_type`), optional jobs/messages/photos arrays
  - `POST /api/upload` (multipart) → uploads binary files to Supabase storage and inserts rows into `request_photos`

- AI realtime persistence
  - `POST /api/ai/ensure-request` → `{ request_id }` for a given `session_id`
  - `POST /api/ai/ingest-message` → persist a chat message immediately (supports `storage_paths` for associated photos)

## Frontend details

- Framework: React 18 + Vite, TailwindCSS, Framer Motion
- Key pages:
  - `/` Home, `/services` overview, service detail pages under `/services/*`
  - `/contact` Contact form
  - `/ai-assistant` AI assistant flow
  - `/privacy` and `/terms` static legal pages
- Backend API client: `src/common/BackendAPI.js`
- Address autocomplete (Google Places): `src/common/AddressAutocomplete.jsx` requires `VITE_GOOGLE_MAPS_API_KEY`

## AI chat flow

- Client maintains a `session_id` in localStorage (`ai_session_id`).
- On mount, frontend calls `/api/ai/ensure-request` to bind `session_id` to a `request_id`.
- On each user message:
  - UI updates immediately; typing indicator starts.
  - If photos attached, uploads to `/api/upload` (origin `ai-message`) to store in Supabase storage and `request_photos`; the returned `storage_path`s are passed to `/api/ai/ingest-message`.
  - The message is ingested into `ai_messages` with `{ session_id, sender, content, photos_count, storage_paths }`.
- On AI response, the assistant message is ingested similarly (no photos).
- On final submission of the AI form:
  - `POST /api/store-request` persists the summary row (`requests` + details), and any conversation metadata/photos not yet uploaded.

## Database schema (Supabase)

Tables used (excerpt):

- `public.requests`
- `public.contact_details`
- `public.dynamic_details`
- `public.hourly_details`
- `public.ai_messages` (has `storage_paths jsonb` and `session_id text`)
- `public.ai_jobs` (has `session_id text`)
- `public.request_photos` (stores storage paths and basic image metadata)

Reference SQL (apply once via Supabase SQL editor):

Full schema reference: `backend/app/schema.sql`.

## Logging & troubleshooting

- Compose logs:
```
docker compose logs -f --tail=100 backend
docker compose logs -f --tail=100 frontend
```
- Health check:
```
curl http://localhost:8080/api/health
```
- Telnyx Cloudflare block: if `/api/send-sms` returns an HTML page “Attention Required | Cloudflare”, send from a permitted egress IP (VPN, VPS in US/EU) or ask Telnyx to whitelist your IP.
- Ports busy:
```
pkill -f "uvicorn app.main:app" || true
```

## Security & privacy

- Telegram bot requires `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
- SMS consent: consent checkboxes reference `/privacy` and `/terms` pages.
- CORS is open (`*`) by default for development; restrict in production.

## Build for production (frontend)

```
cd frontend
npm run build
```
The production bundle is at `frontend/dist/` (the compose setup uses the dev server; for a prod nginx/static deploy, serve `dist/`).

## Useful one-liners

- Rebuild only backend:
```
docker compose up -d --build backend
```
- Restart both, follow backend logs:
```
docker compose down && docker compose up -d --build && docker compose logs -f --tail=100 backend
```

## License

Proprietary — Handyman of South Charlotte.
