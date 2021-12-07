//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
      backgroundColor: '#f7db0e',
      color: 'black',
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
        background: '#f7db0e',
        display: 'inline-block',
        position: 'absolute',
        content: "' '",
        width: '20px',
        height: '20px',
        bottom: '-10px',
        transform: 'rotate(45deg)',
      }
    },
    step: {
      border: '1px solid #2d353f',
      borderRadius: 10,
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 13,
      backgroundColor: '#1c222d',
      color: 'white',
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
      fontFamily: 'CerebriSanPro-Bold',
      fontWeight: 'bold',
      padding: '5px 0 5px 0'
    },
    itemDesc: {
      fontSize: 11,
      fontFamily: 'Roboto-Medium'
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
      right: '42%'
    },
    selectedNumber: {
      color: 'black', 
      border: '2px solid #4b586d', 
      borderRadius: '50%',
      backgroundColor: '#f7db0e',
      width: 30,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-15px',
      right: '42%'
    }
  })
);
