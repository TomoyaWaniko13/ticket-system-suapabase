'use client';

import Link from 'next/link';
import { emailPasswordLoginAction } from '@/app/actions/actions';
import { useRouter } from 'next/navigation';

type Props = {
  isPasswordLogin: boolean;
};

// P.99 Implementing the login functionality in our app
export const Login = ({ isPasswordLogin }: Props) => {
  const router = useRouter();

  const handleAction = async (formData: FormData) => {
    if (!isPasswordLogin) return;

    const result = await emailPasswordLoginAction(formData);
    if (result.status !== 'success') {
      alert('Could not sign in');
      return;
    }

    router.push('/tickets');
  };

  return (
    <form action={handleAction}>
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
