import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Box bgcolor={grey[200]} minHeight="100vh">
      <Container sx={{ padding: "2rem 0" }} maxWidth="md" fixed>
        {children}
      </Container>
    </Box>
  );
};
