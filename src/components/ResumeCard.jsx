import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ResumeCard({ date, title, subtitle, desc }) {
  return (
    <Box
      my="30px"
      sx={{
        backgroundColor: "primary.main",
        borderRadius: ".25rem",
        padding: "1.5rem",
      }}
    >
      <Stack>
        <Typography
          variant="span"
          component="span"
          sx={{
            backgroundColor: "#DC3545",
            fontSize: "0.875rem",
            fontWeight: "400",
            width: "fit-content ",
            padding: ".35em .65em",
            lineHeight: "1",
            textAlign: "center",
            borderRadius: "0.25rem",
            color: "#fff",
            marginBottom: "1rem",
            fontFamily: "Poppins",
          }}
        >
          {date}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "500",
            color: "white",
            fontSize: "1.3rem",
            marginBottom: ".5rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#20c997", lineHeight: "1.8", marginBottom: "1rem" }}
        >
          {subtitle}
        </Typography>
        <Typography
          component="p"
          sx={{ lineHeight: "1.8", color: "rgba(255,255,255,.5)" }}
        >
          {desc}
        </Typography>
      </Stack>
    </Box>
  );
}

export default ResumeCard;
