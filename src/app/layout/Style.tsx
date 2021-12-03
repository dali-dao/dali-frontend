//material-ui
import { createStyles, makeStyles, Theme, withStyles, alpha } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
        backgroundColor: theme.palette.background.paper,
        height: 90,
        fontSize: 12
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        height: 600,
        padding: '60px 160px 30px 160px'
    },
    menu: {
        margin: '0 20px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase'
    },
    activeMenu: {
        margin: '0 20px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        borderBottom: '2px solid #f7db0e',
        padding: '35px 0'
    },
    menuItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    connectBtn: {
        background: '#f7db0e',
        textTransform: 'uppercase',
        color: 'black',
        borderRadius: 20,
        height: 20,
        fontWeight: 700,
        display: 'grid',
        alignItems: 'center'
    },
    rightItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    selectTheme: {
        borderRadius: 20,
        border: '1px solid #4b4b56',
        zoom: 0.9
    },
    brightnessIcon:{
        transform: 'rotate(180deg)',
        cursor: 'pointer'
    },
    sunIcon: {
        transform: 'rotate(180deg)',
        cursor: 'pointer'
    },
    titleDesc: {
        textAlign: 'left'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    desc: {
        fontSize: 14,
        color: '#82868c',
        paddingBottom: 10,
        fontFamily: 'Roboto-Regular'
    },
    signupBtn: {
        backgroundColor: theme.palette.secondary.dark,
        display: 'flex'
    },
    signupInput: {
        paddingRight: 10,
        width: '100%'
    },
    signupSection: {
        paddingBottom: 50,
        borderBottom: '1px solid #2c313c'
    },
    followTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15
    },
    footerMiddle: {
        paddingTop: 60,
        textAlign: 'left',
        paddingBottom: 40,
        borderBottom: '1px solid #2c313c'
    },
    footerMiddleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 25
    },
    footerMiddleDesc1: {
        color: '#9e9fa2',
        fontSize: 12
    },
    footerMiddleDesc: {
        color: '#9e9fa2',
        fontSize: 12,
        lineHeight: 3
    },
    footerBottomLeft: {
        padding: '30px 0',
        color: '#9e9fa2',
        textAlign: 'left'
    },
    footerBottomRight: {
        padding: '30px 0',
        color: '#9e9fa2',
        textAlign: 'right'
    }
  })
);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      width: '100%'
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
)(InputBase);