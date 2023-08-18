import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { Note } from "models/notes";
import { routes } from "router/routes";

type NotesListItemProps = {
  note: Note;
  onDelete: (noteId: string) => void;
};

export const NotesListItem = (props: NotesListItemProps) => {
  const { note, onDelete } = props;
  const { content, title, tags, id } = note;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.notesId(id));
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <Card>
      <CardContent sx={{ cursor: "pointer" }} onClick={handleClick}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body1" color="text.main">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Box width="70%">
          {tags.map((tag) => (
            <Chip sx={{ marginRight: "0.5rem" }} key={tag} label={tag} />
          ))}
        </Box>
        <Box width="30%" display="flex" justifyContent="end">
          <Button size="small" onClick={handleDelete} variant="contained">
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
