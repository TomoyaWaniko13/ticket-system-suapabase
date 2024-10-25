'use client';
import { createTicketAction } from '@/app/actions/actions';

export default function CreateTicket() {
  const handleAction = async (formData: FormData) => {
    const result = await createTicketAction(formData);
    alert(result.message);
  };

  return (
    <article>
      <h3>Create a new ticket</h3>
      <form action={handleAction}>
        <input name={'title'} placeholder='Add a title' />
        <textarea name={'comment'} placeholder='Add a comment' />
        <button type='submit'>Create ticket now</button>
      </form>
    </article>
  );
}
