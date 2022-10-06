import React from "react";
import { getActiveNotes, getArchivedNotes } from "../utils/api";

const useNotes = (active) => {
  const [notes, setNotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    if (active === "active") {
      getActiveNotes().then(({ data }) => {
        setNotes(data);
      });
    } else {
      getArchivedNotes().then(({ data }) => {
        setNotes(data);
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [active]);

  return [notes, isLoading];
};

export default useNotes;
