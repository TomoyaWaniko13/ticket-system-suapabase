import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { type SupabaseClient } from '@supabase/supabase-js';

// クッキーの設定に使用するオプションの型定義
interface CookieOptions {
  name: string; // クッキーの名前
  value: string; // クッキーの値
  options?: {
    // クッキーの追加設定（任意）
    domain?: string; // クッキーが有効なドメイン
    path?: string; // クッキーが有効なパス
    expires?: Date; // クッキーの有効期限
    httpOnly?: boolean; // JavaScriptからアクセス不可に
    maxAge?: number; // クッキーの最大有効期間（秒）
    sameSite?: 'strict' | 'lax' | 'none'; // クロスサイト設定
    secure?: boolean; // HTTPS接続でのみ送信
  };
}

// 関数の戻り値の型定義
interface SupabaseReqResClient {
  supabase: SupabaseClient; // Supabaseクライアント
  response: {
    value: NextResponse; // Next.jsのレスポンス
  };
}

// Supabaseのリクエストとレスポンスを扱うクライアントを取得する関数
export const getSupabaseReqResClient = ({ request }: { request: NextRequest }): SupabaseReqResClient => {
  // Supabaseの認証クッキーを設定した後の新しいリクエストを作成し、それを次の処理に渡しています。これにより、設定されたクッキーを含む更新されたリクエストが後続の処理で利用可能になります。s
  let response = { value: NextResponse.next({ request: request }) };

  const supabase = createServerClient(
    // Supabaseの接続情報
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // クッキーの取得処理は単純です。
        getAll() {
          return request.cookies.getAll();
        },

        // クッキーの設定処理（重要）
        setAll(cookiesToSet: CookieOptions[]) {
          // 1. 現在のリクエストにクッキーを設定
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));

          // Next.jsに対して「このリクエストを使ってください」と指示している
          response.value = NextResponse.next({
            request, // 変更済みのリクエスト
          });

          // 3. ブラウザ用のレスポンスにもクッキーを設定
          cookiesToSet.forEach(({ name, value, options }) => response.value.cookies.set(name, value, options));
        },
      },
    },
  );

  return { supabase, response };
};
