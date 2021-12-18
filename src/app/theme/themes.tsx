import { createTheme } from '@material-ui/core'

var baseTheme = createTheme({
  typography: {
    fontFamily: ['roboto'].join(','),
    body1: {
      fontSize: '12px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  /*
   * Background
   */
  palette: {
    type: 'light',
    /*
     * Background
     */
    background: {
      default: '#f5f6fa', // main background
      paper: '#fff', // footer background, step right, step top
    },
    common: {
      black: '#fff', // header background
      white: '#f5f6fa', // step left side background
    },
    primary: {
      main: '#f5f6fa', // step content header title
      dark: '#d7deed', // box shadow
      light: '#2c333f', // step conent number
    },
    // project Detail
    secondary: {
      main: '#fff', // detail volume
      dark: '#fff', // activity project detail
      light: '#fff', // contribute
    },
    warning: {
      main: '#fff', // funding cycle
      // landing page
      contrastText: '#f5f6fa', // latest payments, faq card foreground
      dark: '#13204c', // moon background
    },
    /*
     * Border
     */
    info: {
      main: '#ced7e8', // grey
      dark: '#f7db0e', // yellow
      // landing page / latest payment background
      light: '#fff', // latest payment background
    },
    /*
     * Font
     */
    success: {
      main: '#525571', // grey strong
      dark: '#416cf7', // yellow -> blue
      light: '#c6c6d3', // grey thin
      contrastText: '#416cf7', // Blu->white
    },
    error: {
      main: '#f5f6fa', // white, input background -> grey thin
      dark: '#fff', // yellow -> white
      light: '#13204c', // footer color
      // stepper selected background yellow -> grey
      contrastText: '#536279',
    },
    /*
     * Button
     */
    text: {
      primary: '#3a4553', // step 4 button foreground
      secondary: '#f7db0e', // yellow
      // landing latest payment
      hint: '#f5f6fa',
      // step font-color black -> white
      disabled: 'white',
    },
  },
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    /*
     * Background
     */
    background: {
      default: '#10141b', // main background
      paper: '#1c222d', // footer background, step right, step top
    },
    common: {
      black: '#0f0f1e', // header background
      white: '#242b36', // step left side background
    },
    primary: {
      main: '#2c333f', // step content header title
      dark: '#0b0c13', // box shadow
      light: '#f7db0e', // step conent number
    },
    // project Detail
    secondary: {
      main: '#1a1d24', // detail volume
      dark: '#131720', // activity project detail
      light: '#212630', // contribute
    },
    warning: {
      main: '#222733', // funding cycle
      // landing page
      contrastText: '#151a22', // latest payments, faq card foreground
      dark: '#29303d', // moon background
    },
    /*
     * Border Color
     */
    info: {
      main: '#474f5f', // grey
      dark: '#f7db0e', // yellow
      // landing page / latest payment background
      light: '#151a22', // latest payment background
    },
    /*
     * Font Color
     */
    success: {
      main: '#858594', // grey strong
      dark: '#f7db0e', // yellow -> blue
      light: '#9fa0a4', // grey thin
      contrastText: '#fff', // white -> blue
    },
    error: {
      main: '#fff', // white, input background grey-thin
      dark: '#f7db0e', // yellow -> white
      light: '#fff', // footer color
      // stepper selected background yellow -> grey
      contrastText: '#f7db0e',
    },
    /*
     * Button
     */
    text: {
      primary: '#3a4553', // step 4 button foreground
      secondary: '#f7db0e', // yellow
      // landing latest payment foreground
      hint: '#1c222d',
      // step font-color black -> white
      disabled: 'black',
    },
  },
})

export { lightTheme, darkTheme }
