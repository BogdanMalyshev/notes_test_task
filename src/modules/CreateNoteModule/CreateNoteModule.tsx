import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";
import { useNoteCreate } from "./hooks/useNoteCreate";
import { CreateNote } from "./components/CreateNote";

export const CreateNoteModule = () => {
  const { onNoteCreate } = useNoteCreate();
  const navigate = useNavigate();

  const onCreateNote = async () => {
    const note = await onNoteCreate();
    if (note) {
      navigate(routes.notesId(note.id));
    }
  };

  return <CreateNote onCreateNote={onCreateNote} />;
};
