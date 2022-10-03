import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ authedUser }) => {
  if (authedUser === null) {
    return (
      <nav className="navigation">
        <ul>
          <li></li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Arsip</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
