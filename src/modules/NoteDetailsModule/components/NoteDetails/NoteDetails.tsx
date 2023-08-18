import React, { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";
import { Note } from "models/notes";
import { NoteDetailsView } from "../NoteDetailsView";
import { NoteDetailsEdit } from "../NoteDetailsEdit.tsx";

enum ModeEnum {
  view = "view",
  edit = "edit"
}

type NoteDetailsProps = {
  note: Note;
  onUpdateNote: (note: Note) => Promise<void>;
};

export const NoteDetails = (props: NoteDetailsProps) => {
  const { note, ...otherProps } = props;
  const navigate = useNavigate();

  const [mode, setMode] = useState<ModeEnum>(ModeEnum.view);

  const onUpdateNote = async (updatedNote: Note) => {
    await otherProps.onUpdateNote(updatedNote);
    setMode(ModeEnum.view);
  };

  const handleEditButtonClick = () => {
    setMode(ModeEnum.edit);
  };

  const handleNavigateToList = () => {
    navigate(routes.notes());
  };

  return (
    <>
      <AppBar position="relative" sx={{ marginBottom: "2rem" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button color="inherit" onClick={handleNavigateToList}>
            Notes list
          </Button>
          {mode === ModeEnum.view && (
            <Button variant="outlined" color="inherit" onClick={handleEditButtonClick}>
              Edit
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {mode === ModeEnum.view && <NoteDetailsView note={note} />}
      {mode === ModeEnum.edit && <NoteDetailsEdit onUpdateNote={onUpdateNote} note={note} />}
    </>
  );
};
