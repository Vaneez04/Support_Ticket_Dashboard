import React, { createContext, useState, useContext } from 'react';

// Create the TicketContext
export const TicketContext = createContext();  // Ensure it's exported

// Custom hook to use the TicketContext
export function useTicketContext() {
  return useContext(TicketContext);
}

// TicketProvider component to provide context to the children
export function TicketProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ status: '', priority: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  return (
    <TicketContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filters,
        setFilters,
        currentPage,
        setCurrentPage,
        ticketsPerPage,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
