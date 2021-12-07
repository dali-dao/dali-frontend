import { createTheme } from "@material-ui/core";

var baseTheme = createTheme({
  typography: {
    fontFamily: ["roboto"].join(","),
    body1: {
      fontSize: "12px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    // Background of the header, footer
    background: {
      default: "white", 
      paper: "#1c222d", 
    },
    // Select the theme in header
    common: {
      black: "white", 
      white: "#87878f", 
    },
    primary: {
      main: "#fadd0d", 
      dark: "#fadd0d", 
      light: "#0f0f1e", // header's background
    },
    secondary: {
      main: "#848e9c", 
      dark: "#fadd0d", 
      light: "#f0b90b", 
    },
    info: {
      main: "#03a66d", 
      dark: "#f6465d", 
      light: "#1e2026", 
    },
    success: {
      main: "#0ecb81", 
      dark: "#f6465d", 
      light: "#2a2d35",
    },
    error: {
      main: "#2b313a", 
      dark: "#252930", 
      light: "#161a1e",
      contrastText: "#2A2D35", 
    },
    text: {
      primary: "#848e9c",
      secondary: "#eaecef",
      hint: "#b7bdc6", 
      disabled: "#f0b90b", 
    },
    warning: {
      main: "#3C2601", 
      dark: "#2b3139",
      contrastText: "#fff",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    // background of the header, footer
    background: {
      default: "black", 
      paper: "white", 
    },
    // Select the theme in header
    common: {
      black: "#87878f", 
      white: "black", 
    },
    primary: {
      main: "#FAFAFA", 
      dark: "black", 
      light: "white", // header's background
    },
    warning: {
      main: "#fef6d8", 
      contrastText: "#000",
      dark: "#f5f5f5",
    },
    secondary: {
      main: "#707a8a",
      dark: "#f6465d",
      light: "#c99400", 
    },
    error: {
      main: "#fafafa", 
      dark: "#cccfd5", 
      light: "#fff", 
      contrastText: "#eaecef", 
    },
    info: {
      main: "#03a66d",
      dark: "#cf304a", 
      light: "#fff", 
    },
    success: {
      main: "#0ecb81", 
      dark: "#f6465d", 
      light: "#f0f1f2",
    },
    text: {
      primary: "#848e9c", 
      secondary: "#eaecef", 
      hint: "#474d57", 
      disabled: "#f0b90b", 
    },
  },
});

export { lightTheme, darkTheme };
