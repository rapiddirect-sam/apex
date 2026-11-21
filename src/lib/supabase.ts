import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Supabase uses the platform fetch implementation on the server. Its reads
// are cached explicitly by the blog data layer, so prevent an additional,
// untagged Next data-cache entry from being created underneath that layer.
const uncachedSupabaseFetch: typeof fetch = (input, init) =>
  fetch(input, { ...init, cache: "no-store" });

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      global: { fetch: uncachedSupabaseFetch },
    })
  : null;
