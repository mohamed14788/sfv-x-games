-- sql/migrations/001_create_tables.sql
-- Supabase schema for real user data.
create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid unique not null,
  display_name text not null default 'Player',
  avatar_url text,
  created_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

create table if not exists public.favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  game_id text not null,
  created_at timestamptz not null default now(),
  unique (user_id, game_id)
);

create table if not exists public.stars (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  game_id text not null,
  value int not null check (value between 1 and 5),
  created_at timestamptz not null default now(),
  unique (user_id, game_id)
);

create table if not exists public.plays (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid null,
  game_id text not null,
  played_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  achievement_key text not null,
  unlocked_at timestamptz not null default now(),
  unique (user_id, achievement_key)
);

-- Enable row level security
alter table public.profiles enable row level security;
alter table public.favorites enable row level security;
alter table public.stars enable row level security;
alter table public.plays enable row level security;
alter table public.achievements enable row level security;

-- Public profile read policy: anyone can read public profiles
create policy "Profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = user_id);

create policy "Users can insert their own profile"
  on public.profiles for insert with check (auth.uid() = user_id);

create policy "Users can delete their own profile"
  on public.profiles for delete using (auth.uid() = user_id);

create policy "Users can manage their favorites"
  on public.favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage their stars"
  on public.stars for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage their plays"
  on public.plays for all using (auth.uid() = user_id or user_id is null) with check (auth.uid() = user_id or user_id is null);

create policy "Users can manage their achievements"
  on public.achievements for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
