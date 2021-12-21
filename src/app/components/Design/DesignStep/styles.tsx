//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      paddingTop: 50,
      marginBottom: 20,
    },
    stepSelect: {
      border: '1px solid #2d353f',
      borderRadius: 10,
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 13,
      backgroundColor: theme.palette.error.contrastText,
      color: theme.palette.text.disabled,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: 200,
      padding: 10,
      cursor: 'pointer',
      wordBreak: 'break-all',
      '&:before': {
        backgroundColor: theme.palette.error.contrastText,
        display: 'inline-block',
        position: 'absolute',
        content: "' '",
        width: '20px',
        height: '20px',
        bottom: '-10px',
        transform: 'rotate(45deg)',
      },
      '@media (max-width: 1000px)': {
        width: 100,
        height: 100
      },
      '@media (max-width: 700px)': {
        width: 70,
        height: 70
      },
    },
    step: {
      border: '1px solid #2d353f',
      borderRadius: 10,
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 13,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.error.light,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: 200,
      padding: 10,
      cursor: 'pointer',
      wordBreak: 'break-all',
      '@media (max-width: 1000px)': {
        width: 100,
        height: 100
      },
      '@media (max-width: 700px)': {
        width: 70,
        height: 70
      },
    },
    stepComplete: {
      border: '1px solid #2d353f',
      borderRadius: 10,
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 15,
      backgroundColor: '#f7db0e',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      width: 200,
      height: 200,
      padding: 10,
    },
    itemTitle: {
      fontSize: 13,
      fontFamily: 'CerebriSansPro-Bold',
      fontWeight: 'bold',
      padding: '5px 0 5px 0',
      '@media (max-width: 1000px)': {
        display: 'none'
      },
    },
    itemDesc: {
      fontSize: 11,
      fontFamily: 'Roboto-Medium',
      '@media (max-width: 1000px)': {
        display: 'none'
      },
    },
    number: {
      color: 'white',
      border: '2px solid #4b586d',
      borderRadius: '50%',
      backgroundColor: '#2d353f',
      width: 30,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-15px',
      right: '42%',
      fontSize: 15,
      '@media (max-width: 1000px)': {
        right: '35%'
      },
      '@media (max-width: 700px)': {
        right: '28%'
      },
    },
    selectedNumber: {
      color: 'black',
      border: '2px solid #4b586d',
      borderRadius: '50%',
      backgroundColor: '#f7db0e',
      // backgroundColor: theme.palette.error.dark,
      width: 30,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-15px',
      right: '42%',
      fontSize: 15,
      '@media (max-width: 1000px)': {
        right: '35%'
      },
      '@media (max-width: 700px)': {
        right: '28%'
      },
    },
  }),
)
