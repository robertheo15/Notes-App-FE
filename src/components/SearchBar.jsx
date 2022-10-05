import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <LocaleConsumer>
    {({ locale }) => {
      return (
        <section className="search-bar">
        <input
          className="search-bar"
          type="text"
          placeholder={locale === "id" ? "Cari berdasarkan judul ..." : "Search by title ..."}
          onChange={(event) => keywordChange(event.target.value)}
          value={keyword}
        />
      </section>         
      );
    }}
  </LocaleConsumer>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
