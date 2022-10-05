import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/api";
import NoteDetailItem from "../components/NoteDetailItem";
import DetailActionButton from "../components/DetailActionButton";
import NotesObject from "../utils/NotesObject";

const DetailPage = () => {
  const { id } = useParams();
  const [notes, setNotes] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
    });
  }, [id]);

  const onArchiveNoteHandler = async (note) => {
    await archiveNote(note);
    navigate("/");
  };

  const onunArchiveNoteNoteHandler = async (note) => {
    await unarchiveNote(note);
    navigate("/");
  };

  const onunDeleteNoteHandler = async (note) => {
    await deleteNote(note);
    navigate("/");
  };

  return (
    <section className="detail-page">
      <NoteDetailItem notes={notes} />
      <DetailActionButton
        notes={notes}
        archiveNote={onArchiveNoteHandler}
        unarchiveNote={onunArchiveNoteNoteHandler}
        deleteNote={onunDeleteNoteHandler}
      />
    </section>
  );
};

DetailPage.propType = {
  notes: PropTypes.shape(NotesObject).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPage;
