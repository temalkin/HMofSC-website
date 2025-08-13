-- Enable extensions if needed (for uuid gen)
-- create extension if not exists pgcrypto;

create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'new',
  source text,
  form_type text,
  session_id text,
  full_name text,
  email text,
  phone text,
  address text,
  consent_to_text boolean,
  meta jsonb default '{}'::jsonb
);

create index if not exists idx_requests_created_at on public.requests (created_at desc);
create index if not exists idx_requests_form_type on public.requests (form_type);
create index if not exists idx_requests_status on public.requests (status);
create index if not exists idx_requests_session_id on public.requests (session_id);

create table if not exists public.contact_details (
  request_id uuid primary key references public.requests(id) on delete cascade,
  description text
);

create table if not exists public.dynamic_details (
  request_id uuid primary key references public.requests(id) on delete cascade,
  project_description text,
  timeline text,
  main_categories jsonb,
  service_groups jsonb,
  detailed_services jsonb
);

create table if not exists public.hourly_details (
  request_id uuid primary key references public.requests(id) on delete cascade,
  hourly_package text,
  description text
);

create table if not exists public.ai_messages (
  id bigserial primary key,
  request_id uuid not null references public.requests(id) on delete cascade,
  created_at timestamptz not null default now(),
  session_id text,
  sender text not null,
  content text,
  photos_count int default 0
);

create index if not exists idx_ai_messages_request_id on public.ai_messages (request_id, created_at);

create table if not exists public.ai_jobs (
  id bigserial primary key,
  request_id uuid not null references public.requests(id) on delete cascade,
  job_id text,
  name text,
  price numeric
);

create index if not exists idx_ai_jobs_request_id on public.ai_jobs (request_id);

create table if not exists public.request_photos (
  id bigserial primary key,
  request_id uuid not null references public.requests(id) on delete cascade,
  message_id bigint references public.ai_messages(id) on delete set null,
  session_id text,
  storage_path text not null,
  name text,
  origin text,
  width int,
  height int,
  size_bytes bigint
);

create index if not exists idx_request_photos_request_id on public.request_photos (request_id);
create index if not exists idx_request_photos_message_id on public.request_photos (message_id);
create index if not exists idx_request_photos_session_id on public.request_photos (session_id);


