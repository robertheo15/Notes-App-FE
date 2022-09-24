import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const NoteHeader = ({ onSearch, keyword }) => {
  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <Navigation />
    </header>
  );
};

export default NoteHeader;
