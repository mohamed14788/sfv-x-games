# Supabase Setup Guide

This project can be connected to a real Supabase database and auth service.

## 1) Create a Supabase project
- Go to https://supabase.com
- Create a project
- Copy the project URL and anon key

## 2) Fill in the client config
- Create a file `games/auth-config.local.js` or use the example file `games/supabase-client.js` with your real values.
- Replace:
  - `https://YOUR_PROJECT_REF.supabase.co`
  - `YOUR_ANON_KEY`

## 3) Run the SQL schema
- Open the Supabase SQL editor
- Paste the contents of `sql/migrations/001_create_tables.sql`
- Run it once

## 4) Enable Auth providers
In Supabase Dashboard -> Authentication -> Providers:
- Email/Password: enable
- Google: enable and configure OAuth credentials
- Facebook: enable and configure credentials

## 5) Add redirect URLs
Set redirect URLs to your site domain, e.g.:
- http://localhost:8000/
- https://your-domain.com/

## 6) Security checklist
- Enable email confirmation
- Enable Row Level Security (RLS) and keep policies strict
- Never expose the service role key in the frontend
- Keep all secrets in environment variables / Supabase secrets

## 7) Production deployment
Use HTTPS and deploy behind your web host or Vercel/Netlify.
Only use public keys in the browser; service secrets stay server-side.

## 8) Next steps
- Add profile picture upload to `profiles.avatar_url`
- Add rate limiting and analytics
- Add 2FA later for stronger protection
