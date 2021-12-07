//material-ui
import { createStyles, makeStyles, Theme, withStyles, alpha } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white'
    },
    title: {
      fontFamily: 'CerebriSansPro-Heavy',
      fontSize: 25,
      paddingTop: 50
    },
    cardHeader: {
      backgroundColor: '#2c333f',
      borderBottom: '1px solid #4a5262',
      fontFamily: 'CerebriSansPro-ExtraBold',
      fontSize: 20,
      color: 'white'
    },
    label: {
      padding: 25,
      borderBottom: '1px solid #2c333f',
      backgroundColor: '#242b36',
      fontSize: 18,
      color: 'white'
    },
    content: {
      backgroundColor: '#1c222d',
      padding: '25px 40px 25px 40px',
      borderBottom: '1px solid #2c333f',
    },
    card: {
      marginBottom: 80,
      boxShadow: '0 0 10px 10px #0c0f16',
      borderRadius: 10
    },
    itemDescription: {
      fontSize: 13,
      color: '#727285',
      borderBottom: '1px solid #2c333f',
    },
    saveBtn: {
      padding: '15px 50px',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)'
    },
    logoContent: {
      borderRadius: 4,
      border: '1px solid #535b73 ',
      padding: '10px 12px',
      backgroundColor: '#141821',
    },
    uploadBtn: {
      borderRadius: 4,
      backgroundColor: '#fff',
      color: 'white'
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
      backgroundColor: '#141821',
      border: '1px solid #535b73 ',
      fontSize: 16,
      padding: '10px 12px',
      color: '#7e8085',
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
        // borderColor: theme.palette.primary.main,
      },
    },
  }),
)(InputBase);