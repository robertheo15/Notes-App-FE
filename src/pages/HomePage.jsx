import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddNoteButton from "../components/AddNoteButton";
import { LocaleConsumer } from "../contexts/LocaleContext";
import useNotes from "../hooks/useNotes";
import useSearch from "../hooks/useSearch";

const HomePage = () => {
  const [keyword, onKeywordChangeHandler] = useSearch();
  const [notes, isLoading] = useNotes("active");

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="homepage">
            <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
            <NoteList notes={filteredNotes} isLoading={isLoading} />
            <AddNoteButton />
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

export default HomePage;
