import { Box, Stack, Typography, Slider } from "@mui/material";
import React from "react";

function Skill({ name, percentage }) {
  return (
    <Box>
      <Stack
        sx={{ color: "#dee3e4" }}
        justifyContent="space-between"
        direction="row"
      >
        <Typography component="p">{name}</Typography>
        <Typography component="span">{percentage}%</Typography>
      </Stack>
      <Slider
        value={percentage}
        sx={{
          "& .MuiSlider-thumb": { display: "none" },
          height: "8px",
          color: "#20c997",
        }}
      />
    </Box>
  );
}

export default Skill;
