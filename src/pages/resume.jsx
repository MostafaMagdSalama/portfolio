import { Container, Stack, Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Heading from "../components/Heading";
import ResumeCard from "../components/ResumeCard";
import Skill from "../components/Skill";
import DownloadIcon from "@mui/icons-material/Download";

function resume() {
  const CustomHeading = styled(Typography)(({ theme }) => ({
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#fff",
  }));
  const education = [
    {
      date: "2000-2004",
      title: "Computer Science",
      subtitle: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure",
    },
    {
      date: "2005-2008",
      title: "Bachelor Degree",
      subtitle: "University of California",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      date: "2009-2012",
      title: "Master Degree",
      subtitle: "Harvard University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  const experience = [
    {
      date: "2012-2013",
      title: "Jr. UI UX Designer",
      subtitle: "Themeforest",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      date: "2014-2016",
      title: "Jr. Product Designer",
      subtitle: "Dribbble",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      date: "2017-2019",
      title: "Product Designer",
      subtitle: "Adobe",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  const skills = [
    { name: "Web Design", percentage: 65 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 80 },
    { name: "React JS", percentage: 70 },
    { name: "Angular Js", percentage: 60 },
    { name: "Bootstrap", percentage: 99 },
  ];
  return (
    <Box
      sx={{ backgroundColor: "primary.dark", minHeight: "100vh" }}
      py="30px"
      id="Resume"
    >
      <Container>
        <Heading title="Resume" shadow="summary" />
        <Stack direction={{ xs: "column", tablet: "row" }} spacing={2}>
          <Box>
            <CustomHeading variant="h2">My Eduacation</CustomHeading>
            {education.map((cardContent) => (
              <ResumeCard {...cardContent} />
            ))}
          </Box>
          <Box>
            <CustomHeading variant="h2">My Experience</CustomHeading>
            {experience.map((cardContent) => (
              <ResumeCard {...cardContent} />
            ))}
          </Box>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            {skills.map((skill) => (
              <Grid item xs={12} tablet={6}>
                <Skill {...skill} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            endIcon={<DownloadIcon />}
            sx={{
              color: "#6c757d",
              borderColor: "#6c757d",
              transition: "all 0.5s ease",
              borderRadius: "50rem",
              lineHeight: "1.5",
              //   width: "220px",
              //   height: "50px",
              fontFamily: "Poppins",
              padding: ".810rem 2rem",
            }}
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default resume;
