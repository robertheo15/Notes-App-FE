import React from "react";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return <NoteInput addNote={onAddNoteHandler} />;
};
export default AddPage;
