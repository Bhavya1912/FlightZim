create table if not exists pilots (
  id uuid primary key,
  name text not null,
  rank text not null default 'Student Pilot',
  reputation integer not null default 50,
  salary numeric not null default 0,
  created_at timestamptz not null default now()
);
create table if not exists flights (
  id uuid primary key,
  pilot_id uuid references pilots(id),
  aircraft_id text not null,
  mission_type text not null,
  origin text not null,
  destination text not null,
  score integer not null,
  landing_rate_fpm integer,
  fuel_used_kg numeric,
  atc_compliance integer,
  telemetry jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists multiplayer_sessions (
  id uuid primary key,
  region text not null,
  name text not null,
  max_players integer not null default 64,
  created_at timestamptz not null default now()
);
