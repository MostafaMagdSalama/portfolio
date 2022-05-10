import { Box } from "@mui/material";
import React from "react";
import AboutMe from "./about-me";
import Home from "./home";
import Servicers from "./services";
import Resume from "./resume";
import Contact from "./contact";
import Footer from "../components/Footer";
import MyWork from "./MyWork";
function Layout() {
  return (
    <Box sx={{ width: { xs: "100%", laptop: "75%" } }}>
      <Home />
      <AboutMe />
      <Servicers />
      <Resume />
      <MyWork />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Layout;
