import { createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import Layout from "./pages/layout";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111418",
      dark: "#212529",
    },
    secondary: {
      main: "#20c997",
    },
  },
  breakpoints: {
    values: {
      xss: 375,
      xs: 0,
      tablet: 768,
      laptop: 1024,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={{ xs: "column", laptop: "row" }}
        justifyContent={{ laptop: "space-between" }}
        // sx={{ flexDirection: { lg: "row" } }}
      >
        {/* <> */}
        <NavBar></NavBar>
        <Layout />
        {/* </> */}
      </Stack>
    </ThemeProvider>
  );
}

export default App;
