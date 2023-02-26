import { createClient } from '@supabase/supabase-js';

export const database = createClient(
  process.env.NEXT_PUBLIC_DATABASE_HOST ?? '',
  process.env.NEXT_PUBLIC_DATABASE_PUBLIC_KEY ?? '',
);
