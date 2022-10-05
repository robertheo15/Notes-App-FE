import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const DetailActionButton = ({
  notes,
  archiveNote,
  unarchiveNote,
  deleteNote,
}) => {
  if (notes.archived === true) {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={() => {
            unarchiveNote(notes.id);
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
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  }
};

DetailActionButton.propTypes = {
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailActionButton;
