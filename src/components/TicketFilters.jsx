import { useTicketContext } from '../context/TicketContext';
import { FlagIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

function TicketFilters() {
  const { filters, setFilters } = useTicketContext();

  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <div></div> {/* Spacer for alignment */}

      <div className="flex items-center space-x-4">
        {/* Status Filter */}
        <div className="flex items-center space-x-1">
          <AdjustmentsHorizontalIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          <select
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="p-1.5 text-sm border rounded bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div className="flex items-center space-x-1">
          <FlagIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          <select
            value={filters.priority}
            onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
            className="p-1.5 text-sm border rounded bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TicketFilters;
