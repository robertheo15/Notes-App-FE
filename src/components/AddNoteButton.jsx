import React from "react";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddNoteButton = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage__action">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate("/notes/new")}
      >
        <GrAdd />
      </button>
    </div>
  );
};

export default AddNoteButton;
