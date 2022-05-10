import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Heading from "../components/Heading";
import { alpha, styled } from "@mui/material/styles";

const headingTitle = {
  fontSize: "1.75rem",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  textAlign: "center",
  color: "white",
};
const paragraph = {
  color: "rgba(255,255,255,.5)",
  lineHeight: "1.8",
  marginBottom: "1rem",
  textAlign: "center",
  padding: "10px 0px",
};

const ListItemModified = styled(ListItem)(({ theme }) => ({
  borderBottom: "1px solid rgba(250, 250, 250, 0.12)",
  color: "#fff",
  width: "100%",
  paddingLeft: "0px",
}));
function AboutMe() {
  return (
    <Box
      id="About-Me"
      sx={{ backgroundColor: "primary.dark", minHeight: "100vh" }}
      py="20px"
    >
      <Container>
        <Heading shadow="About me" title="know me more" />
        <Stack
          direction={{ xs: "column", laptop: "row" }}
          spacing={{ laptop: 5 }}
        >
          <Box>
            <Box>
              <Typography variant="h2" sx={{ ...headingTitle }}>
                I'm
                <span style={{ color: "#20c997" }}> Mostafa Magdy,</span> a Web
                Developer
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" component="p" sx={{ ...paragraph }}>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography variant="p" component="p" sx={{ ...paragraph }}>
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
              </Typography>
            </Box>
          </Box>
          <Box>
            <List>
              <ListItemModified>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }} component="span">
                    Name
                  </Typography>
                  : Mostafa Magdy
                </ListItemText>
              </ListItemModified>

              <ListItemModified>
                <ListItemText sx={{ color: "#20c997" }}>
                  <Typography
                    sx={{ fontWeight: "600", color: "#fff" }}
                    component="span"
                  >
                    Email
                  </Typography>
                  : mostafa.magdy621@gmail.com
                </ListItemText>
              </ListItemModified>
              <ListItemModified>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }} component="span">
                    Age
                  </Typography>{" "}
                  : 25
                </ListItemText>
              </ListItemModified>
              <ListItemModified sx={{ borderBottom: "none" }}>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }} component="span">
                    From
                  </Typography>{" "}
                  : Cairo Egypt
                </ListItemText>
              </ListItemModified>
            </List>
            <Box>
              <Button
                sx={{
                  padding: "15px 30px",
                  backgroundColor: "#20c997",
                  color: "#fff",
                  borderRadius: "50px",
                  borderColor: "#1baa80",
                  boxShadow: "0px 5px 15px rgb(0 0 0 / 30%)",
                  "&:hover": {
                    backgroundColor: "#1baa80",
                    borderColor: "#1baa80",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutMe;
