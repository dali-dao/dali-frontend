//material-ui
import { createStyles, makeStyles, Theme, withStyles, alpha } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
        backgroundColor: theme.palette.primary.light,
        height: 'calc(100% - 50px)',
        fontSize: 12,
        color: theme.palette.background.default
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        height: 'auto',
        padding: '60px 160px 30px 160px',
        color: theme.palette.background.default,
        "@media (max-width: 1280px)": {
            paddingLeft: 50,
            paddingRight: 50,
        },
        "@media (max-width: 1120px)": {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
    follow_content: {
        textAlign: 'left',
        "@media (max-width: 960px)": {
            marginTop: '20px !important'
        },
        
    },
    menu: {
        textDecoration: 'none',
        color: theme.palette.background.default,
        textTransform: 'uppercase'
    },
    activeMenu: {
        textDecoration: 'none',
        color: theme.palette.background.default,
        textTransform: 'uppercase',
        borderBottom: '2px solid #f7db0e',
        padding: '25px 0'
    },
    menuItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    connectBtn: {
        background: '#f7db0e',
        textTransform: 'uppercase',
        color: 'black',
        borderRadius: 20,
        height: 30,
        fontWeight: 700,
        width: 95,
        display: 'grid',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)'
        }
    },
    rightItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'right',
        marginTop: '20px !important',
        marginBottom: '20px !important',
    },
    selectTheme: {
        borderRadius: 20,
        border: '1px solid #4b4b56',
        width: 65,
        height: 30,
        justifyContent: 'center',
    },
    moon_style:{
        cursor: 'pointer',
        border: '1px solid #4b4b56',
        padding: 5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 10,
        background: '#29303d'
    },
    sun_style: {
        cursor: 'pointer',
        border: '1px solid #4b4b56',
        padding: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingRight: 10
    },
    titleDesc: {
        textAlign: 'left',
        marginBottom: 20,
        "@media (max-width: 960px)": {
            textAlign: 'center'
        },
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
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.background.paper,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        fontFamily: 'CerebriSansPro-Bold',
        fontSize: 16,
        textTransform: 'uppercase'
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
        paddingBottom: 15,
        "@media (max-width: 960px)": {
            textAlign: 'center'
        },
    },
    sign_input_content: {
        justifyContent: 'left',
        "@media (max-width: 960px)": {
            justifyContent: 'center',
            marginLeft: 50
        },
    },
    footerMiddle: {
        paddingTop: 60,
        textAlign: 'left',
        paddingBottom: 40,
        borderBottom: '1px solid #2c313c',
        "@media (max-width: 960px)": {
            textAlign: 'center'
        },
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
    followIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBottomLeft: {
        padding: '30px 0',
        color: '#9e9fa2',
        textAlign: 'left',
        fontSize: 13,
        fontFamily: 'Roboto-Medium'
    },
    footerBottomRight: {
        padding: '30px 0',
        color: '#9e9fa2',
        textAlign: 'right',
        fontSize: 13,
        fontFamily: 'Roboto-Medium'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
      backgroundColor: theme.palette.background.default,
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
