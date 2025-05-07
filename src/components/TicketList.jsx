import TicketItem from './TicketItem';

function TicketList({ tickets }) {
  if (tickets.length === 0) return <p>No tickets found.</p>;

  return (
    <div className="grid gap-4">
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
