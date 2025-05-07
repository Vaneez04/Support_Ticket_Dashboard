import React from 'react';

function TicketDetail({ ticket, onClose }) {
  const formattedDate = new Date(ticket.createdAt).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>

        <h3 className="font-semibold text-2xl mb-3">{ticket.title}</h3>
        <p className="mb-2"><span className="font-medium">Customer:</span> {ticket.customer}</p>
        <p className="mb-2"><span className="font-medium">Status:</span> {ticket.status}</p>
        <p className="mb-2"><span className="font-medium">Priority:</span> {ticket.priority}</p>
        <p className="mb-2"><span className="font-medium">Description:</span> {ticket.description}</p>
        <p className="mb-4"><span className="font-medium">Created at:</span> {formattedDate}</p>

        <button
          className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TicketDetail;
