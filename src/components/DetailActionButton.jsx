import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NotesObject from "../utils/NotesObject";

const DetailActionButton = ({
  notes,
  archiveNote,
  unarchiveNote,
  deleteNote,
}) => {
  const navigate = useNavigate();

  if (notes.archived === true) {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={() => {
            unarchiveNote(notes.id);
            navigate("/");
          }}
        >
          <BiArchiveIn />
        </button>

        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => {
            deleteNote(notes.id);
            navigate("/");
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Aktifkan"
          onClick={() => {
            archiveNote(notes.id);
            navigate("/");
          }}
        >
          <BiArchiveOut />
        </button>
        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => {
            deleteNote(notes.id);
            navigate("/");
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  }
};

DetailActionButton.propTypes = {
  notes: PropTypes.shape(NotesObject).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailActionButton;
