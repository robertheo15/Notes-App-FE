import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

const ArchivesPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword: keyword });
  };

  return (
    <ArchivesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};
class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={notes} />
      </section>
    );
  }
}

export default ArchivesPageWrapper;
