// SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="🔍 Search tasks..."
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
