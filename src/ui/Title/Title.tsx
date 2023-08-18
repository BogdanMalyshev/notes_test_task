import React from "react";
import { Box, Typography } from "@mui/material";

type TitleProps = {
  children: React.ReactNode;
};

export const Title = (props: TitleProps) => {
  const { children } = props;

  return (
    <Box paddingBottom="2rem" display="flex" justifyContent="center">
      <Typography variant="h4">{children}</Typography>
    </Box>
  );
};
