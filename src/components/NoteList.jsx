import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import NotesObject from "../utils/NotesObject";
import Skeleton from "./skeleton/Skeleton";

const NoteList = ({ notes, isLoading }) => {
  if (notes.length > 0) {
    return (
      <section className="notes-list">
        {notes.map((note) =>
          isLoading === true ? (
            <Skeleton key={note.id} />
          ) : (
            <NoteItem key={note.id} {...note} isLoading={isLoading} />
          )
        )}
      </section>
    );
  } else {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Tidak ada catatan</p>
      </section>
    );
  }
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NotesObject)).isRequired,
};
export default NoteList;
