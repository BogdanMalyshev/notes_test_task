import React from "react";
import { Note } from "models/notes";
import { NotesListItem } from "./NotesListItem";
import { useNotesListItemDelete } from "./hooks/useNotesListItemDelete";

type NotesListItemProps = {
  note: Note;
};

export const NotesListItemContainer = (props: NotesListItemProps) => {
  const { note } = props;
  const { onDeleteNoteListItem } = useNotesListItemDelete();

  return <NotesListItem note={note} onDelete={onDeleteNoteListItem} />;
};
