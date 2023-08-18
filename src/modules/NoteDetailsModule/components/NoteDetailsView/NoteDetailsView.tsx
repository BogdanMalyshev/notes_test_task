import React from "react";
import { Box, Typography } from "@mui/material";
import reactStringReplace from "react-string-replace";
import { Note } from "models/notes";
import { Title } from "ui/Title";
import { tagRegexp } from "utils/constants";

type NoteDetailsViewProps = {
  note: Note;
};

export const NoteDetailsView = (props: NoteDetailsViewProps) => {
  const {
    note: { content, title }
  } = props;

  const replacedText = reactStringReplace(content, tagRegexp, (match, i) => (
    <Typography component="span" key={match + i} color="primary">
      #{match}
    </Typography>
  ));

  return (
    <Box>
      <Title>{title}</Title>
      <Typography whiteSpace="pre-line">{replacedText}</Typography>
    </Box>
  );
};
