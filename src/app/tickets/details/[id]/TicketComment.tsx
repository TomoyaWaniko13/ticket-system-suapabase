'use client';
import classes from './TicketDetails.module.css';
import { createCommentAction } from '@/app/actions/actions';

const comments = [
  {
    author: 'Dave',
    date: '2027-01-01',
    content: 'This is a comment from Dave',
  },
  {
    author: 'Alice',
    date: '2027-01-02',
    content: 'This is a comment from Alice',
  },
];

export function TicketComments() {
  const handleAction = async (formData: FormData) => {
    const result = await createCommentAction(formData);
    alert(result.message);
  };

  return (
    <footer>
      <h4>Comments</h4>
      <form action={handleAction}>
        <textarea name={'comment'} placeholder='Add a comment' />
        <button type='submit'>Add comment</button>
      </form>

      {/* <section>We have {comments.length} comments.</section> */}
      <section>
        {comments.map((comment) => (
          <article key={comment.date} className={classes.comment}>
            <strong>{comment.author} </strong>
            <time>{comment.date}</time>
            <p>{comment.content}</p>
          </article>
        ))}
      </section>
    </footer>
  );
}
