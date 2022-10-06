import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { MdOutlineGTranslate, MdLogout } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
import { LocaleConsumer } from "../contexts/LocaleContext";
import PropTypes from "prop-types";

const NoteHeader = ({ logout, authedUser }) => {
  if (authedUser === null) {
    return (
      <LocaleConsumer>
        {({ locale, toggleLocale }) => {
          return (
            <header>
              <h1>
                <Link to="/">
                  {locale === "id" ? "Aplikasi Catatan" : "Note App"}
                </Link>
              </h1>
              <Navigation authedUser={authedUser} />
              <button className="toggle-locale" onClick={toggleLocale}>
                <MdOutlineGTranslate />
              </button>
              <ToggleTheme />
            </header>
          );
        }}
      </LocaleConsumer>
    );
  }
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <header>
            <h1>
              <Link to="/">
                {locale === "id" ? "Aplikasi Catatan" : "Note App"}
              </Link>
            </h1>
            <Navigation />
            <button className="toggle-locale" onClick={toggleLocale}>
              <MdOutlineGTranslate />
            </button>
            <ToggleTheme />
            <button className="button-logout" onClick={logout}>
              <MdLogout />
              {authedUser.name}
            </button>
          </header>
        );
      }}
    </LocaleConsumer>
  );
};

NoteHeader.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func
};
export default NoteHeader;
