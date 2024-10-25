import classes from './TicketDetails.module.css';
import { TicketComments } from '@/app/tickets/details/[id]/TicketComment';

type Props = {
  params: { id: string };
};

export default async function TicketDetailsPage({ params }: Props) {
  // https://nextjs.org/docs/messages/sync-dynamic-apis
  const { id } = await params;

  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong>#{id}</strong> - <strong className={classes.ticketStatusGreen}>Open</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>AuthorName</strong> at <time>December 10th 2025</time>
        </small>
        <h2>Ticket title should be here</h2>
      </header>
      <section>Some details about the ticket should be here.</section>
      <TicketComments />
    </article>
  );
}
