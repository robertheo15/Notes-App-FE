import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArchivesPage from "../pages/ArchivesPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PropTypes from "prop-types";

const NoteBody = ({ authedUser, loginSuccess }) => {
  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path="*" element={<LoginPage loginSuccess={loginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/new" element={<AddPage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
      </Routes>
    </main>
  );
};

NoteBody.propTypes = {
  authedUser: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired
};

export default NoteBody;
