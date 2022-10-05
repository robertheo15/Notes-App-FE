import React from "react";
import { showFormattedDate } from "../utils";

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

export default NoteDetailItem;
