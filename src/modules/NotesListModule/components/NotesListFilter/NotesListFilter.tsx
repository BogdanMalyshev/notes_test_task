import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { tagRegexp } from "utils/constants";

type NotesListFilterProps = {
  onFilter: (tags: string[]) => void;
};

export const NotesListFilter = (props: NotesListFilterProps) => {
  const { onFilter } = props;

  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const value = target.value;

    const tags = value.match(tagRegexp);

    setValue(value);
    setTags(tags || []);
  };

  const handleFilter: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onFilter(tags);
  };

  return (
    <form onSubmit={handleFilter}>
      <Box display="flex" marginBottom="2rem">
        <Box width="100%" marginRight="1rem">
          <TextField
            onChange={handleChange}
            value={value}
            fullWidth
            variant="outlined"
            label="Tags (#some, #some2, ...)"
          />
        </Box>
        <Button variant="contained" type="submit">
          Filter
        </Button>
      </Box>
    </form>
  );
};
