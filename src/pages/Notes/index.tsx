import React from "react";
import { NotesListModule } from "modules/NotesListModule";
import { CreateNoteModule } from "modules/CreateNoteModule";

export const NotesPage = () => {
  return (
    <>
      <CreateNoteModule />
      <NotesListModule />
    </>
  );
};
