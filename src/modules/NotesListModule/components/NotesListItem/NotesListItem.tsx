import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { Note } from "models/notes";
import { routes } from "router/routes";

type NotesListItemProps = {
  note: Note;
};

export const NotesListItem = (props: NotesListItemProps) => {
  const { note } = props;
  const { content, title, tags, id } = note;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.notesId(id));
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
        {tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </CardActions>
    </Card>
  );
};
