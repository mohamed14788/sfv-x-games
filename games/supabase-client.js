// games/supabase-client.js
// Example client for Supabase auth + DB. Replace with your real values in .env or config.
const supabaseConfig = {
  url: 'https://YOUR_PROJECT_REF.supabase.co',
  anonKey: 'YOUR_ANON_KEY'
};

window.supabase = window.supabase || null;

if (typeof window !== 'undefined' && !window.supabase) {
  // This is a placeholder until the real SDK is installed via CDN / npm.
  // In production, use `import { createClient } from '@supabase/supabase-js'`.
  window.supabase = {
    auth: {
      signInWithPassword: async () => ({ data: null, error: { message: 'Install Supabase SDK in production.' } }),
      signUp: async () => ({ data: null, error: { message: 'Install Supabase SDK in production.' } }),
      signInWithOAuth: async () => ({ data: null, error: { message: 'Install Supabase SDK in production.' } }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: [], error: null }),
      update: () => ({ data: [], error: null }),
      upsert: () => ({ data: [], error: null }),
      delete: () => ({ data: [], error: null })
    })
  };
}

window.SUPABASE_CONFIG = supabaseConfig;
