import React, { useState } from 'react';
import TicketDetail from './TicketDetails';
import { formatDistanceToNow } from 'date-fns';

function TicketItem({ ticket }) {
  const [showDetail, setShowDetail] = useState(false);

  const ticketDate = new Date(ticket.createdAt);
  const isValidDate = !isNaN(ticketDate);

  const timeAgo = isValidDate
    ? formatDistanceToNow(ticketDate, { addSuffix: true })
    : 'Invalid date';

  // Handle close functionality
  const handleClose = () => {
    setShowDetail(false);
  };

  return (
    <div
  className="border p-4 rounded shadow cursor-pointer transition bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
  onClick={() => setShowDetail(true)}
>
  <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{ticket.title}</h2>
  <p className="text-sm text-gray-600 dark:text-gray-300">Customer: {ticket.customer}</p>
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Created: {timeAgo}</p>

  <div className="flex gap-2 mt-2">
    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      Status: {ticket.status}
    </span>
    <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
      Priority: {ticket.priority}
    </span>
  </div>

  {showDetail && (
    <TicketDetail ticket={ticket} onClose={() => setShowDetail(false)} />
  )}
</div>

  );
}

export default TicketItem;
