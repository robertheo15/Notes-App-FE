import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import NotesObject from "../utils/NotesObject";

const NoteDetailItem = ({ notes }) => {
  return (
    <>
      <h3 className="detail-page__title">{notes.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(notes.createdAt)}
      </p>
      <div className="detail-page__body">{notes.body}</div>
    </>
  );
};

NoteDetailItem.propTypes = {
  notes: PropTypes.shape(NotesObject),
};

export default NoteDetailItem;
