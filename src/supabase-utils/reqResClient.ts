import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

interface ResponseWithValue {
  value: NextResponse;
}

// Creating a Supabase client based on the request and response for the middleware
export const getSupabaseReqResClient = ({ request }: { request: NextRequest }) => {
  let response: ResponseWithValue = { value: NextResponse.next({ request: request }) };

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
        });
        response.value = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.value.cookies.set(name, value, options);
        });
      },
    },
  });

  return { supabase, response };
};
