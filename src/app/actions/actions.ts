'use server';

import { getSupabaseCookiesUtilClient } from '@/supabase-utils/cookiesUtilClient';

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
// P.99 Implementing the login functionality in our app
export async function emailPasswordLoginAction(formData: FormData) {
  const supabase = await getSupabaseCookiesUtilClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = await supabase.auth.signInWithPassword({ email, password });

  if (!result.data?.user) return { message: 'Could not sign in', status: 'error' };

  return { message: 'Signed in', status: 'success' };
}

export async function createCommentAction(formData: FormData) {
  const comment = formData.get('comment');
  return { message: `adding comment: ${comment}` };
}

export async function createTicketAction(formData: FormData) {
  const ticket = formData.get('title');
  const comment = formData.get('comment');
  return { message: `ticket: ${ticket} comment: ${comment}` };
}
