import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form action="" className="search-item">
      <label htmlFor="search-item"> Search Item:</label>
      <input
        type="text"
        placeholder="Search Item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
