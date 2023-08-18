import React, { useState } from "react";
import { useNotesListQuery } from "./hooks/useNotesListQuery";
import { NotesList } from "./components/NotesList";
import { NotesListFilter } from "./components/NotesListFilter";

export const NotesListModule = () => {
  const [tags, setTags] = useState<string[]>([]);
  const { data, isLoading } = useNotesListQuery(tags);

  return (
    <>
      <NotesListFilter onFilter={setTags} />
      <NotesList notes={data} notesListLoading={isLoading} />
    </>
  );
};
