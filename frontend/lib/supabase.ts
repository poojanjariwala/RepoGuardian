// Supabase client placeholder
export function getClient() {
  return null
}
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getAccessToken(): Promise<string | null> {
  const session = await getSession();
  return session?.access_token ?? null;
}

// Types
export interface JobRow {
  id: string;
  user_id: string | null;
  repo_url: string;
  repo_name: string | null;
  framework: string | null;
  status: "running" | "done" | "error";
  error_message: string | null;
  health_score: number | null;
  created_at: string;
  completed_at: string | null;
}

export interface PrRow {
  id: string;
  job_id: string;
  user_id: string | null;
  repo_url: string;
  pr_url: string;
  pr_title: string | null;
  branch_name: string | null;
  files_changed: string[];
  bugs_fixed: number;
  created_at: string;
  analysis_jobs?: { repo_name: string | null; framework: string | null };
}