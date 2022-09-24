import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArchivesPage from "../pages/ArchivesPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const NoteBody = () => {
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

export default NoteBody;
