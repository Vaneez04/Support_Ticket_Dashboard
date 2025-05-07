import React from 'react';
import { useTicketContext } from '../context/TicketContext';  // Correct import

function SearchBar() {
  const { searchTerm, setSearchTerm } = useTicketContext();  // Using the custom hook instead of useContext

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());  // Ensure the search term is in lowercase
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title or customer"
        className="border rounded-md px-4 py-2 w-full md:w-80 text-sm"
      />
    </div>
  );
}

export default SearchBar;
