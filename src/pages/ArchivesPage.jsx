import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { LocaleConsumer } from "../contexts/LocaleContext";
import useNotes from "../hooks/useNotes";
import useSearch from "../hooks/useSearch";

const ArchivesPage = () => {
  const [keyword, onKeywordChangeHandler] = useSearch();
  const [notes, isLoading] = useNotes("notactive");

  const filteredNotes =  notes.filter((note) => {
    return note.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
  });

  return (    
    <LocaleConsumer>
     {({ locale }) => {
       return (
        <section className="archives-page">
        <h2> {locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
        <SearchBar
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <NoteList notes={filteredNotes} isLoading={isLoading}/>
      </section>
       );
     }}
   </LocaleConsumer>
  );
}

export default ArchivesPage;
