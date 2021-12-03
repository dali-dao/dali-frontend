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
    background: {
      default: "#252930", //trade view container's background
      paper: "#1c222d", //header background
    },
    primary: {
      main: "#161A1E", //trade view component's background
      dark: "#1e2329", // modal background
      light: "#1e2329", //dropdown background
    },
    //trade view font color
    secondary: {
      main: "#848e9c", //gery color
      dark: "#fadd0d", //white color
      light: "#f0b90b", //hover color
    },
    //status change color
    info: {
      main: "#03a66d", //green
      dark: "#f6465d", //red
      light: "#1e2026", //orderform background
    },
    //status change progressbar color
    success: {
      main: "#0ecb81", //green
      dark: "#f6465d", //red
      light: "#2a2d35", //order form input div
    },
    error: {
      main: "#2b313a", //border
      dark: "#252930", //table border
      light: "#161a1e", //scrollbar color
      contrastText: "#2A2D35", //scroll thumb
    },
    // header font color & trade view statistic main color// header font color
    text: {
      primary: "#848e9c", //gery color
      secondary: "#eaecef", //white color
      hint: "#b7bdc6", //statistic main color
      disabled: "#f0b90b", //header menu hover and active of font color & font color of Log In, Rigerster Now
    },
    common: {
      black: "#181a20", //login background
      white: "#fff", //input side border
    },
    warning: {
      main: "#3C2601", //login notification background
      dark: "#2b3139",
      contrastText: "#fff",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    background: {
      default: "#eef0f2", //trade view container's background
      paper: "#999", //header background
    },
    warning: {
      main: "#fef6d8", //login notification background
      contrastText: "#000",
      dark: "#f5f5f5",
    },
    primary: {
      main: "#FAFAFA", //trade view component's background
      dark: "#FFFFFF", //modal background
      light: "#1e2329", //dropdown background
    },
    //trade view font color
    secondary: {
      main: "#707a8a", //gery color
      dark: "#f6465d", //white color
      light: "#c99400", //hover color
    },
    error: {
      main: "#fafafa", //border
      dark: "#cccfd5", //table border
      light: "#fff", //scrollbar color
      contrastText: "#eaecef", //scroll thumb
    },
    common: {
      black: "#fff", //login background
      white: "#eaecef", //input side border
    },
    //status change color
    info: {
      main: "#03a66d", //green
      dark: "#cf304a", //red
      light: "#fff", //orderform background
    },
    //status change progressbar color
    success: {
      main: "#0ecb81", //green
      dark: "#f6465d", //red
      light: "#f0f1f2", //order form input div
    },
    // header font color & trade view statistic main color
    text: {
      primary: "#848e9c", //gery color
      secondary: "#eaecef", //white color
      hint: "#474d57", //statistic main color
      disabled: "#f0b90b", //header menu hover font color & Log In, Rigerster Now's fixed Color
    },
  },
});

export { lightTheme, darkTheme };
