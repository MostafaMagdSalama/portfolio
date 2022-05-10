import { Stack, Box, Paper, Typography } from "@mui/material";
import React from "react";

function ServiceCard({ children, title, desc }) {
  return (
    <Stack direction="row" py="20px">
      <Box
        sx={{
          flex: 1,
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          padding: "10px",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "#212529",
            width: "100%",
            height: { xs: "50%", laptop: "80%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#20c997",
            // padding: { laptop: "20px 0px" },
          }}
        >
          {/* <i class="fa-solid fa-palette fa-2xl"></i> */}
          {children}
        </Paper>
      </Box>
      <Box sx={{ flex: 3, padding: "10px", paddingTop: "0" }}>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {title}
        </Typography>
        <Typography component="p" sx={{ color: "rgba(255,255,255,.5)" }}>
          {desc}
        </Typography>
      </Box>
    </Stack>
  );
}

export default ServiceCard;
