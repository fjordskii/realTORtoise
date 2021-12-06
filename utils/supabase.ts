import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  <string>process.env.NEXT_PUBLIC_SUPABASE_URL,
  <string>process.env.NEXT_PUBLIC_SUPABASE_KEY
);
