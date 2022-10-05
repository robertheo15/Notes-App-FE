import React from "react";
import "./skeleton.css";

const Skeleton = () => {
  return (
    <article className="note-item-skeleton">
      <h3 className="note-item__title-skeleton">_</h3>
      <p className="note_item__createdAt-skeleton">_</p>
      <p className="note_item__body-skeleton">_</p>
    </article>
  );
};

export default Skeleton;
