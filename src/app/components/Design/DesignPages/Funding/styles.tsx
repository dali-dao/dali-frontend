//material-ui
import { createStyles, makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

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
      fontSize: 13
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
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)'
    }
  })
);

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