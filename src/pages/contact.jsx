import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Heading from "../components/Heading";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

function contact() {
  const TextFieldMod = styled(TextField)(({ theme }) => ({
    backgroundColor: "#232A31",
    width: "80%",
    "& .MuiFormLabel-root": { color: "#6c757d" },
    borderRadius: ".25rem",
    //   border: "1px solid #ced4da",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline": {
      borderColor: "#20c997",
    },
    color: "#fff",
  }));
  const CustomInfo = styled(Typography)(({ theme }) => ({
    color: "#dee3e4",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  }));
  return (
    <Box
      sx={{ backgroundColor: "#343A40", minHeight: "100vh" }}
      py="30px"
      id="Contact"
    >
      <Heading title="Get in Touch" shadow="contact" />
      <Container>
        <Stack direction={{ tablet: "row-reverse", xs: "column" }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{ flex: { tablet: 2 } }}
            //   direction={{ tablet: "row" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                fontWeight: "500",
                lineHeight: "1.2",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              SEND US A NOTE
            </Typography>
            {/* <TextField
            sx={{
              backgroundColor: "#232A31",
              width: "80%",
              "& .MuiFormLabel-root": { color: "#6c757d" },
              borderRadius: ".25rem",
              //   border: "1px solid #ced4da",
              transition:
                "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
              "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#20c997",
                },
            }}
            //   id="outlined-required"
            label="Name"
            // defaultValue="Name"
          /> */}
            <TextFieldMod
              label="Name "
              inputProps={{ style: { color: "#fff" } }}
            />
            <TextFieldMod
              label="Email "
              inputProps={{ style: { color: "#fff" } }}
            />
            <TextFieldMod
              inputProps={{ style: { color: "#fff" } }}
              id="outlined-multiline-static"
              label="Tell Us More About Your Needs ...."
              multiline
              rows={4}
              //   defaultValue="Default Value"
            />
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#20c997",
                transition: "all 0.5s ease",
                borderRadius: "50rem",
                lineHeight: "1.5",
                //   width: "220px",
                //   height: "50px",
                fontFamily: "Poppins",
                padding: ".810rem 2rem",
                backgroundColor: "#20c997",
                "&:hover": {
                  backgroundColor: "#1baa80",
                  borderColor: "#1baa80",
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
          <Box py="30px" sx={{ flex: { tablet: 1 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.3rem",
                color: "#fff",
                marginBottom: "1rem",
                fontWeight: "500",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              ADDRESS
            </Typography>
            <CustomInfo
              component="p"
              // sx={{
              //   color: "#dee3e4",
              //   fontSize: "1rem",
              //   marginBottom: "1.5rem",
              //   textAlign: "center",
              // }}
            >
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </CustomInfo>
            <CustomInfo component="p">
              <PhoneEnabledIcon sx={{ color: "#20c997" }} /> (060) 444 434 444
            </CustomInfo>
            <CustomInfo component="p">
              <FaxIcon sx={{ color: "#20c997" }} /> (060) 555 545 555
            </CustomInfo>
            <CustomInfo component="p">
              <EmailIcon sx={{ color: "#20c997" }} /> chat@simone.com
            </CustomInfo>
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.3rem",
                color: "#fff",
                marginBottom: "1rem",
                fontWeight: "500",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              Follow Me
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                //   backgroundColor: "red",
                width: { sx: "50%", tablet: "100%" },
                margin: "auto",
                fontSize: "1.2rem",
                color: "#AAB1B8",
              }}
            >
              <i class="fa-brands fa-dribbble"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-google"></i>
              <i class="fa-brands fa-github"></i>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default contact;
