'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { handleLoginAction } from '@/app/actions/actions';

type Props = {
  isPasswordLogin: boolean;
};

export const Login = ({ isPasswordLogin }: Props) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <form
      action={async (formData) => {
        formData.append('loginType', isPasswordLogin ? 'password' : 'magicLink');
        const result = await handleLoginAction(formData);
        alert(result.message);
      }}
    >
      <article style={{ maxWidth: '480px', margin: 'auto' }}>
        <header>Login</header>
        <fieldset>
          <label htmlFor='email'>
            Email
            <input type='email' id='email' name='email' required />
          </label>
          {isPasswordLogin && (
            <label htmlFor='password'>
              Password
              <input type='password' id='password' name='password' />
            </label>
          )}
        </fieldset>
        <p>
          {isPasswordLogin ? (
            <Link href={{ pathname: '/', query: { magicLink: 'yes' } }}>Go to Magic Link Login</Link>
          ) : (
            <Link href={{ pathname: '/', query: { magicLink: 'no' } }}>Go to Password Login</Link>
          )}
        </p>
        <button type='submit'>
          Sign in with
          {isPasswordLogin ? ' Password' : ' Magic Link'}
        </button>
      </article>
    </form>
  );
};
