import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/api";

const ArchivesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
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
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <NoteList notes={filteredNotes} />
    </section>
  );
}

export default ArchivesPage;
