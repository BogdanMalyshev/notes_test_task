import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { routes } from "router/routes";
import { useNoteDetailsFetch } from "./hooks/useNoteDetailsFetch";
import { useNoteDetailsUpdate } from "./hooks/useNoteDetailsUpdate";
import { NoteDetails } from "./components/NoteDetails";

export const NoteDetailsModule = () => {
  const { noteId } = useParams();
  const { data, isLoading } = useNoteDetailsFetch(noteId as string);
  const { onNoteDetailsUpdate } = useNoteDetailsUpdate();

  if (isLoading) {
    return null;
  }

  if (data) {
    return <NoteDetails onUpdateNote={onNoteDetailsUpdate} note={data} />;
  }

  return <Navigate to={routes.notes()} />;
};
