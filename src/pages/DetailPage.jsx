import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NoteDetailItem from "../components/NoteDetailItem";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/local-data";
import DetailActionButton from "../components/DetailActionButton";
import NotesObject from "../utils/NotesObject";

const DetailPageWrapper = ({ archiveNote, unarchiveNote, deleteNote }) => {
  const { id } = useParams();
  return (
    <DetailPage
      id={String(id)}
      archiveNote={archiveNote}
      unarchiveNote={unarchiveNote}
      deleteNote={deleteNote}
    />
  );
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }
  render() {
    return (
      <section className="detail-page">
        <NoteDetailItem notes={this.state.notes} />
        <DetailActionButton
          notes={this.state.notes}
          archiveNote={archiveNote}
          unarchiveNote={unarchiveNote}
          deleteNote={deleteNote}
        />
      </section>
    );
  }
}

DetailPage.propType = {
  notes: PropTypes.shape(NotesObject).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
