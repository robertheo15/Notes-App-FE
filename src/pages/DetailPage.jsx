import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NoteDetailItem from "../components/NoteDetailItem";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/api";
import DetailActionButton from "../components/DetailActionButton";
import NotesObject from "../utils/NotesObject";
import LocaleContext from "../contexts/LocaleContext";

// const DetailPageWrapper = ({ archiveNote, unarchiveNote, deleteNote }) => {
//   const { id } = useParams();
//   return (
//     <DetailPage
//       id={String(id)}
//       archiveNote={archiveNote}
//       unarchiveNote={unarchiveNote}
//       deleteNote={deleteNote}
//     />
//   );
// };

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getNote(props.id),
//     };
//   }
//   render() {
//     console.log(this.state.notes)
//     return (
//       <section className="detail-page">
//         <NoteDetailItem notes={this.state.notes} />
//         <DetailActionButton
//           notes={this.state.notes}
//           archiveNote={archiveNote}
//           unarchiveNote={unarchiveNote}
//           deleteNote={deleteNote}
//         />
//       </section>
//     );
//   }
// }
const DetailPage = () => {
  const { id } = useParams();
  const [notes, setNotes] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);
  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
    });
  }, [id]);
  return (
    <section className="detail-page">
      <NoteDetailItem notes={notes} />
      <DetailActionButton
        notes={notes}
        archiveNote={archiveNote}
        unarchiveNote={unarchiveNote}
        deleteNote={deleteNote}
      />
    </section>
  );
};

DetailPage.propType = {
  notes: PropTypes.arrayOf(PropTypes.shape(NotesObject)).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPage;
