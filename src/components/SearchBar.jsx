import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <section className="search-bar">
      <input
        className="search-bar"
        type="text"
        placeholder="Cari berdasarkan judul ..."
        onChange={(event) => keywordChange(event.target.value)}
        value={keyword}
      />
    </section>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
