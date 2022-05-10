import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Heading from "../components/Heading";
import ServiceCard from "../components/ServiceCard";

function services() {
  const servicesContent = [
    {
      title: "Graphic Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fa-solid fa-palette fa-2xl",
    },
    {
      title: "Web Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-desktop fa-2xl",
    },
    {
      title: "App Design & Develop",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-pencil-ruler fa-2xl",
    },
    {
      title: "UI/UX Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-paint-brush fa-2xl",
    },
    {
      title: "Business Analysis",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-paint-brush fa-2xl",
    },
    {
      title: "SEO Marketing",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-chart-area fa-2xl",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#343a40", minHeight: "100vh" }} id="What-I-DO">
      <Container>
        <Heading shadow="Services" title="What I Do?" />
        <Grid container spacing={2}>
          {/* <Grid item xs={12} tablet={6}>
            <ServiceCard
              title="Graphic Design"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            >
              <i class="fa-solid fa-palette fa-2xl"></i>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <ServiceCard
              title="Web Design
            "
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure"
            >
              <i class="fas fa-desktop fa-2xl"></i>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <ServiceCard
              title="UI/UX Design"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            >
              <i class="fas fa-pencil-ruler fa-2xl"></i>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <ServiceCard
              title="App Design & Develop"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            >
              <i class="fas fa-paint-brush fa-2xl"></i>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <ServiceCard
              title="Business Analysis"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            >
              <i class="fas fa-chart-area fa-2xl"></i>
            </ServiceCard>
          </Grid> */}
          {servicesContent.map(({ title, desc, icon }) => (
            <Grid item xs={12} tablet={6}>
              <ServiceCard title={title} desc={desc}>
                <i class={`${icon}`}></i>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default services;
