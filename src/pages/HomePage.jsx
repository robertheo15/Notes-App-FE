import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/api";
import AddNoteButton from "../components/AddNoteButton";


const HomePage = () => {  
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes =  notes.filter((note) => {
    return note.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <NoteList notes={filteredNotes} />
      <AddNoteButton />
    </section>
  );
}

export default HomePage;

