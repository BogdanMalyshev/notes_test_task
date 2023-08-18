import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { routes } from "router/routes";
import { useNoteDetailsFetch } from "./hooks/useNoteDetailsFetch";
import { useNoteDetailsUpdate } from "./hooks/useNoteDetailsUpdate";
import { useNoteDetailsDelete } from "./hooks/useNoteDetailsDelete";
import { NoteDetails } from "./components/NoteDetails";

export const NoteDetailsModule = () => {
  const { noteId } = useParams();
  const { data, isLoading } = useNoteDetailsFetch(noteId as string);
  const { onDeleteNote } = useNoteDetailsDelete();
  const { onNoteDetailsUpdate } = useNoteDetailsUpdate();

  if (isLoading) {
    return null;
  }

  if (data) {
    return (
      <NoteDetails onDeleteNote={onDeleteNote} onUpdateNote={onNoteDetailsUpdate} note={data} />
    );
  }

  return <Navigate to={routes.notes()} />;
};
