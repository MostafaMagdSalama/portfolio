import { Box, Container, ImageListItemBar, Typography } from "@mui/material";
import React, { useState } from "react";
import Heading from "../components/Heading";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function MyWork() {
  const [tab, setTab] = useState(0);
  const handleChange = (_, newValue) => {
    console.log(newValue);
    setTab(newValue);
  };
  const isTablet = useMediaQuery("(min-width:768px)");
  const itemData = [
    {
      img: "./images/projects_pics/facebook.jpg",
      title: "facebook",
      subtitle: "facebook clone",
      rows: (() => (isTablet ? 2 : 2))(),
      cols: (() => (isTablet ? 2 : 2))(),
    },
    {
      img: "./images/projects_pics/twitter.jpg",
      title: "twitter",
      subtitle: "twitter clone",
      rows: (() => (!isTablet ? 2 : 0))(),
      cols: (() => (!isTablet ? 2 : 2))(),
    },
    {
      img: "./images/projects_pics/payment-service.jpg",
      title: "payment-service",
      subtitle: "payment-service",
      rows: (() => (isTablet ? 2 : 2))(),
      cols: (() => (isTablet ? 2 : 2))(),
    },
    {
      img: "./images/projects_pics/instagram.jpg",
      title: "instagram",
      subtitle: "instagram clone",
      rows: (() => (!isTablet ? 2 : 0))(),
      cols: (() => (!isTablet ? 2 : 2))(),
    },
  ];
  console.log("tablet , ", isTablet);
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#343A40" }} id="Portfolio">
      <Heading title="My Work" shadow="portfolio" />

      {/* <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Projects" {...a11yProps(0)} sx={{ color: "#fff" }} />
            <Tab
              label="Project's Pics"
              {...a11yProps(1)}
              sx={{ color: "#fff" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <ImageList
            sx={{
              width: "100%",
              height: "auto",
            }}
            variant="quilted"
            // cols={{ xs: "12", tablet: "2" }}
            // cols={4}
            cols={isTablet ? 4 : 1}
            gap={8}
            // rowHeight={"auto"}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Item Three
        </TabPanel>
      </Box> */}

      <Container>
        <ImageList
          sx={{
            width: "100%",
            height: "auto",
          }}
          variant="quilted"
          // cols={{ xs: "12", tablet: "2" }}
          // cols={4}
          cols={isTablet ? 4 : 1}
          gap={8}
          // rowHeight={"auto"}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{ cursor: "pointer" }}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />

              {/* test code */}
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
              ></ImageListItemBar>
              {/* end test code */}
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}

export default MyWork;
