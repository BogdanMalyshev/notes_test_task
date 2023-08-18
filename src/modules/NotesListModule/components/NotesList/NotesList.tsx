import React from "react";
import { Grid, Skeleton } from "@mui/material";
import { Note } from "models/notes";
import { NotesListItem } from "../NotesListItem";

type NotesListProps = {
  notes: Note[];
  notesListLoading: boolean;
};

export const NotesList = (props: NotesListProps) => {
  const { notes, notesListLoading } = props;

  const skeletons = Array.from(Array(5)).map((_, index) => (
    <Grid key={index} item xs={12}>
      <Skeleton variant="rectangular" height={100} />
    </Grid>
  ));

  const notesList = notes.map((note) => {
    return (
      <Grid key={note.id} item xs={12}>
        <NotesListItem key={note.id} note={note} />
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={2}>
        {notesListLoading ? skeletons : notesList}
      </Grid>
    </>
  );
};
