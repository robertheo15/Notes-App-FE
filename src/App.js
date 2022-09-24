import React from "react";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const App = () => {
  return (
    <div className="app-container">
      <NoteHeader />
      <NoteBody />
    </div>
  );
};

export default App;
