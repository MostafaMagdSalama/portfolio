import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "../styles/headingComponent.module.css";

function Heading({ title, shadow }) {
  return (
    <Box
      sx={{
        //   backgroundColor: "red",
        // padding: "10px",
        textAlign: "center",
        position: "relative",
        minHeight: "70px",
        color: "white",
        width: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop: "30px",
        marginBottom: "30px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
      }}
    >
      <Typography
        //   variant="p"
        variant="h2"
        //   sx={{
        //     position: "absolute",
        //     left: "50%",
        //     top: "50%",
        //     transform: "translate(-50%, -50%)",
        //     fontSize: "calc(1.95rem + 3.4vw)",
        //     fontWeight: "900",
        //     opacity: "0.2",
        //     letterSpacing: "10px",
        //     // backgroundColor: "blue",
        //     width: "100%",
        //     color: "#6c757d",
        //   }}

        sx={{
          textTransform: "uppercase",
          width: "100%",
          textAlign: "center",
          color: "#6c757d",
          fontWeight: "600",
          lineHeight: "1.3",
          opacity: "0.1",
          fontSize: "calc(1.95rem + 8.4vw)",
        }}
      >
        {shadow}
      </Typography>

      <Typography
        variant="p"
        //   sx={{
        //     position: "absolute",
        //     left: "50%",
        //     top: "50%",
        //     transform: "translate(-50%, -50%)",
        //     fontSize: "1.9rem",
        //     // letterSpacing: "3px",
        //     fontWeight: "600",
        //     width: "100%",
        //   }}
        sx={{
          lineHeight: "1.5",
          width: "100%",
          textAlign: "center",
          fontSize: "2.25rem",
          alignSelf: "center",
          position: "absolute",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      <span className={classes.spanUnderline}></span>
    </Box>
  );
}

export default Heading;
