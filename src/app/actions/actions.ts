'use server';

export async function handleLoginAction(formData: FormData) {
  console.log(formData);

  const isPasswordLogin = formData.get('loginType') === 'password';

  if (isPasswordLogin) {
    const email = formData.get('email');
    const password = formData.get('password');

    // ここに実際のパスワードログイン処理を実装
    console.log('Password login attempt:', { email, password });
    return { message: 'Password login attempted' };
  } else {
    const email = formData.get('email');

    // ここに実際のマジックリンクログイン処理を実装
    console.log('Magic link login attempt:', { email });
    return { message: 'Magic' + '' + 'link login attempted' };
  }
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
