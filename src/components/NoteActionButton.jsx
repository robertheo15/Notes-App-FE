import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";

const NoteActionButton = ({ onSubmit }) => {
  return (
    <div className="add-new-page__action">
      <button
        className="action"
        type="button"
        title="Simpan"
        onClick={onSubmit}
      >
        <MdOutlineDone />
      </button>
    </div>
  );
};

NoteActionButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default NoteActionButton;
