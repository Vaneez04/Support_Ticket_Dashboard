import { useTicketContext } from '../context/TicketContext';
import { mockTickets } from '../data/mockdata';
import SearchBar from './SearchBar';
import TicketFilters from './TicketFilters';
import TicketList from './TicketList';
import Pagination from './Pagination';

function Dashboard() {
  const {
    searchTerm, setSearchTerm,
    filters, setFilters,
    currentPage, setCurrentPage,
    ticketsPerPage
  } = useTicketContext();

  const filteredTickets = mockTickets.filter(ticket =>
    // Check if the title or customer name includes the search term
    (ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     ticket.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
    // Filter by status if it's selected
    (filters.status ? ticket.status === filters.status : true) &&
    // Filter by priority if it's selected
    (filters.priority ? ticket.priority === filters.priority : true)
  );

  const indexOfLast = currentPage * ticketsPerPage;
  const indexOfFirst = indexOfLast - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  return (
    <div className="p-4 space-y-4">
      <SearchBar />
      <TicketFilters />
      <TicketList tickets={currentTickets} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default Dashboard;
