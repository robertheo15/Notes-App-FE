import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import {MdOutlineGTranslate, MdOutlineDarkMode, MdLogout} from "react-icons/md"
import {BsSun} from "react-icons/bs"

const NoteHeader = ({ logout, authedUser }) => {
  if (authedUser === null) {
    return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <Navigation authedUser={authedUser}/>
      <button className="toggle-locale"><MdOutlineGTranslate/></button>
      <button className="toggle-theme"><BsSun/></button>
      <button className="toggle-theme"><MdOutlineDarkMode/></button>
    </header>
    )
  }
  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <Navigation/>
      <button className="toggle-locale"><MdOutlineGTranslate/></button>
      <button className="toggle-theme"><BsSun/></button>
      <button className="toggle-theme"><MdOutlineDarkMode/></button>
      <button className="button-logout" onClick={logout}>{authedUser.name}<MdLogout/></button>
    </header>
  );
};

export default NoteHeader;
