import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border rounded p-2 mr-2"
        placeholder="Search for articles..."
      />
      <button type="submit" className="px-4 py-2 border rounded bg-blue-500 text-white font-semibold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
