import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = [
    "Home",
    "About Me",
    "What I DO",
    "Resume",
    "Portfolio",
    "Contact",
  ];
  const ids = [
    "Home",
    "About-Me",
    "What-I-DO",
    "Resume",
    "Portfolio",
    "Contact",
  ];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // backgroundColor:'red'
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);
  return (
    <AppBar
      // position="static"
      position="sticky"
      sx={{
        // height: matches ? "100vh" : "inherit",
        // width: matches ? "20%" : "100%",
        height: { laptop: "100vh" },
        width: { laptop: "25%" },
        // backgroundColor: "#111418",
        backgroundColor: "primary",
      }}
    >
      <Toolbar>
        <Stack
          direction={{ xs: "column", xss: "row", laptop: "column" }}
          justifyContent={{ xss: "space-between" }}
          sx={{
            width: "100%",
          }}
          align="start"
        >
          <Stack
            direction={{ sx: "row", laptop: "column" }}
            alignItems={{ xss: "center", laptop: "center" }}
            justifyContent={{ laptop: "center" }}
            sx={{
              width: { xss: "70%", tablet: "90%" },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: {
                  xs: "1rem",
                  sm: ".72rem",
                  md: "1rem",
                  tablet: "1.2rem",
                },
                textAlgin: { md: "center" },
                display: { laptop: "none" },
              }}
            >
              Mostafa Magdy
            </Typography>

            {/* start of laptop nav */}
            <Stack
              sx={{
                alignItems: "center",
                padding: "20px",
                width: "100%",
                display: { laptop: "flex", xs: "none" },
              }}
            >
              <Avatar
                alt="Mostafa Magdy"
                src="/images/mostafa.jpg"
                sx={{
                  width: "100px",
                  height: "100px",
                  display: {
                    xs: "none",
                    laptop: "inline-block",
                  },
                  border: "8px solid #343A40",
                  // display: "center",
                  // flexDirection: "column",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              />

              <Typography
                variant="p"
                sx={{ fontSize: "1.3rem" }}
                // sx={{ display: "block" }}
              >
                Mostafa Magdy
              </Typography>
              <List
                sx={{
                  width: "100%",
                }}
              >
                {pages.map((page, index) => (
                  <Link
                    activeClass="active"
                    to={[ids[index]]}
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={1500}
                    // onSetActive={this.handleSetActive}
                  >
                    <ListItemButton
                      key={page}
                      alignItems="center"
                      component="a"
                      sx={{ textAlign: "center" }}
                    >
                      <ListItemText primary={page} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Stack>
            {/* end of laptop nav */}

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: { tablet: "0.1 ", xs: "1" },
              }}
            >
              <FacebookIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
              <GitHubIcon fontSize="small" />
            </Box>
          </Stack>
          <IconButton
            // size="large"
            // edge="start"
            color="inherit"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "start",
              display: { laptop: "none" },
              // display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                backgroundColor: "black",
              },
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "bottom",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page, index) => (
              <Link
                activeClass="active"
                to={[ids[index]]}
                spy={true}
                smooth={true}
                // offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: "100vw",
                    backgroundColor: "rgba(0, 0, 0, 0.27)",
                    color: "white",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
