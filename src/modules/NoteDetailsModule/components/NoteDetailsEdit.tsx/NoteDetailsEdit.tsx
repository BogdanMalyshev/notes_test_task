import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Note } from "models/notes";
import { tagRegexp } from "utils/constants";

type NoteDetailsEditProps = {
  note: Note;
  onUpdateNote: (note: Note) => void;
};

export const NoteDetailsEdit = (props: NoteDetailsEditProps) => {
  const { note, onUpdateNote } = props;

  const [content, setContent] = useState<string>(note.content);
  const [title, setTitle] = useState<string>(note.title);
  const [tags, setTags] = useState<string[]>(note.tags || []);

  const hanldeChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    const value = target.value;
    const newTags = value.match(tagRegexp) || [];
    setTags(newTags);
    setContent(value);
  };

  const hanldeChangeTitle: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const value = target.value;
    setTitle(value);
  };

  const updateNote = () => {
    onUpdateNote({
      ...note,
      content,
      title,
      tags
    });
  };

  return (
    <Box>
      <Box marginBottom="2rem">
        <TextField fullWidth onChange={hanldeChangeTitle} value={title} label="Enter title..." />
      </Box>
      <Box marginBottom="2rem">
        <TextField
          fullWidth
          onChange={hanldeChangeContent}
          value={content}
          label="Enter content..."
          multiline
          minRows={10}
        />
      </Box>
      <Button variant="contained" onClick={updateNote}>
        Save
      </Button>
    </Box>
  );
};
