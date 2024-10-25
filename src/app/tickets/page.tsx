import TicketList, { Ticket } from '@/app/tickets/TicketList';

// First, import the Ticket type from TicketList component

// Define tickets with explicit type annotation
const dummyTickets: Ticket[] = [
  { id: 1, title: 'Write Supabase Book', status: 'Not Started', author: 'Chayan' },
  { id: 2, title: 'Read more Packt Books', status: 'In Progress', author: 'David' },
  { id: 3, title: 'Make videos for the YouTube Channel', status: 'Done', author: 'David' },
];

const TicketsListPage = () => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Ticket List</h2>
      <TicketList tickets={dummyTickets} />
    </div>
  );
};

export default TicketsListPage;
