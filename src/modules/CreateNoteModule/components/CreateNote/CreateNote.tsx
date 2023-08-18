import React from "react";
import { Box, Button } from "@mui/material";

type CreateNoteProps = {
  onCreateNote: () => void;
};

export const CreateNote = (props: CreateNoteProps) => {
  const { onCreateNote } = props;

  return (
    <Box marginBottom="2rem">
      <Button variant="outlined" color="inherit" onClick={onCreateNote}>
        Create
      </Button>
    </Box>
  );
};
