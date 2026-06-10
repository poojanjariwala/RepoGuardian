-- Supabase schema placeholder
-- Create tables for analyses, prs, users, etc.

CREATE TABLE IF NOT EXISTS analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  repo_url text,
  created_at timestamptz DEFAULT now()
);
