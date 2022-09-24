import PropTypes from "prop-types";

const NotesObject = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};

export default NotesObject;