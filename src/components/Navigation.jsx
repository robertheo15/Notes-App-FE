import React from "react";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";
import PropTypes from "prop-types";

const Navigation = ({ authedUser }) => {
  if (authedUser === null) {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <nav className="navigation">
              <ul>
                <li></li>
              </ul>
            </nav>
          );
        }}
      </LocaleConsumer>
    );
  }
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archives">
                  {locale === "id" ? "Terarsip" : "Archived"}
                </Link>
              </li>
            </ul>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
};

Navigation.propTypes = {
  authedUser: PropTypes.object,
};
export default Navigation;
