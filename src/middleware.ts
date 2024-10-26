import { getSupabaseReqResClient } from '@/supabase-utils/reqResClient';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log(request.cookies);

  const { supabase, response } = getSupabaseReqResClient({ request });
  await supabase.auth.getSession();
  return response.value;
}
