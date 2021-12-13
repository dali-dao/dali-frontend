//material-ui
import { createStyles, makeStyles, Theme, withStyles, alpha } from "@material-ui/core/styles";
import Banner from '../../assets/Projects/banner_2.jpg';
import InputBase from '@material-ui/core/InputBase';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.error.light,
    },
    container: {
        padding: '0 160px 10px 160px',
        textAlign: 'left',
        "@media (max-width: 1205px)": {
          padding: '0px 10px 0px 10px',
        }
    },
    title: {
      fontFamily: 'CerebriSansPro-Heavy',
      fontSize: 25,
      paddingTop: 50,
      color: 'white' // no change by theme
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.info.main}`,
      fontFamily: 'CerebriSansPro-ExtraBold',
      fontSize: 20,
      color: theme.palette.error.light,
    },
    label: {
      padding: 25,
      borderBottom: `1px solid ${theme.palette.info.main}`,
      backgroundColor: theme.palette.common.white,
      fontSize: 18,
      color: theme.palette.error.light,
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      padding: '25px 40px 25px 40px',
      borderBottom: `1px solid ${theme.palette.info.main}`,
      fontSize: 12,
      color: theme.palette.success.main
    },
    card: {
      marginBottom: 80,
      boxShadow: `0 0 10px 10px ${theme.palette.primary.dark}`,
      borderRadius: 10
    },
    itemDescription: {
      fontSize: 13,
      color: '#727285',
      // borderBottom: `1px solid ${theme.palette.info.main}`,
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
      backgroundColor: theme.palette.background.paper,
      fontSize: 13,
    },
    uploadBtn: {
      borderRadius: 4,
      backgroundColor: '#3c4755',
      color: 'white',
      padding: '5px 10px',
      marginRight: 20,
      fontSize: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40
    },
    logoTitle: {
      display: 'flex',
      alignItems: 'center'
    },
    percentLabel: {
      // color: 'white',
      paddingTop: 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    payoutBtn: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #667a93',
      boxShadow: `3px 3px ${theme.palette.primary.dark}`,
      padding: '10px 20px',
      marginTop: 20,
      borderRadius: 3,
      color: theme.palette.error.light,
      width: '200px',
      cursor: 'pointer',
      marginBottom: 10
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
    },
    delayContent: {
      border: '3px solid #667a93',
      borderRadius: 5,
      padding: '30px 20px 30px 0',
      marginTop: 24,
      backgroundColor: theme.palette.common.white
    },
    delayContentLeft: {
      display: 'flex',
      justifyContent: 'center',
    },
    delayContentTitle: {
      fontSize: 18,
      fontFamily: 'Roboto-Bold',
      color: theme.palette.error.light
    },
    delayContentDesc: {
      fontSize: 13,
      color: '#a2a4a7',
      fontFamily: 'Roboto-Medium',
      padding: '5px 0'
    },
    delayContentValue: {
      fontSize: 13,
      fontFamily: 'Roboto-Bold',
      color: '#c7c8ca',
      wordBreak: 'break-all'
    },
    delayContentOption: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '2px solid #657992'
    },
    delayContentActiveOption: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '2px solid black',
      background: '#f7db0e',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
      backgroundColor: theme.palette.background.default,
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


interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

export const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
      border: '1px solid #676b72',
      borderRadius: 15
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: '#f7db0e',
        '& + $track': {
          backgroundColor: '#090c12',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#f7db0e',
        border: '6px solid #090c12',
      },
    },
    thumb: {
      width: 24,
      height: 24,
      color: '#f7db0e',
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const IOSDurationSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
      border: '1px solid #676b72',
      borderRadius: 15
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: '#f7db0e',
        '& + $track': {
          backgroundColor: '#090c12',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
      color: '#f7db0e',
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});