import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Next.jsのサーバーサイドでSupabaseクライアントを初期化する際に、クッキーの取得・設定を適切に処理するためのユーティリティ関数として機能します。
export const getSupabaseCookiesUtilClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      // クッキーの取得メソッド Next.jsのクッキーストアから全てのクッキーを取得
      async getAll() {
        return cookieStore.getAll();
      },
      // クッキーの設定メソッド 引数として受け取ったクッキー情報を使って各クッキーを設定
      async setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch (err) {
          console.error('Failed to set cookies', err);
        }
      },
    },
  });
};
