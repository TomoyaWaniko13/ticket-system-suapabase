import Link from 'next/link';

export interface Ticket {
  id: number;
  title: string;
  status: 'Not Started' | 'In Progress' | 'Done';
  author: string;
}

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>
              <Link href={`tickets/details/${ticket.id}`}>{ticket.title}</Link>
            </td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketList;
