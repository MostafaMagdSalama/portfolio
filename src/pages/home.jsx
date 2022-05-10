import React from "react";
import { Paper, Box, Stack, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Home() {
  return (
    <Paper
      id="Home"
      sx={{
        height: "100vh",
        borderRadius: "0px",
        backgroundImage: "url(/images/home-background-2.jpg)",
        backgroundPosition: { xs: "center center" },
        backgroundSize: { xs: "cover" },
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.7)",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            color: "white",
            height: "100%",
            textAlign: { xs: "center" },
            gap: { tablet: "30px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem" }, fontWeight: "bold" }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.4rem" }, fontWeight: "bold" }}
          >
            I'm a Developer
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem" } }}>
            Based in Port Said, Egypt
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "30px",
              borderWidth: "2px",
              padding: { xs: "10px 20px", tablet: "12px 30px" },
            }}
          >
            Primary
          </Button>
          <KeyboardArrowDownIcon color="white" fontSize="large" />
        </Stack>
      </Box>
    </Paper>
  );
}

export default Home;
