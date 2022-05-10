import { Typography, Stack, Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Stack
      sx={{
        minHeight: { laptop: "15vh", xs: "20vh" },
        backgroundColor: "#212529",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Typography component="p" sx={{ color: "#fff", textAlign: "center" }}>
          Copyright &copy; 2021{" "}
          <Typography sx={{ color: "#20c997", display: "inline" }}>
            Mostafa Magdy
          </Typography>{" "}
          All Rights Reserved
        </Typography>
      </Container>
    </Stack>
  );
}

export default Footer;
