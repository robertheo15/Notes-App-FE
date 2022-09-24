import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" style={{ textAlign: "center" }}>
        Back to home
      </Link>
    </section>
  );
};
export default NotFoundPage;
