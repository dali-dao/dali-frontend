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
      fontSize: 15,
      backgroundColor: '#1c222d',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      width: 200,
      height: 200,
      padding: 10,
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
      fontSize: 15,
      fontFamily: 'CerebriSanPro-Bold',
      fontWeight: 'bold',
      padding: '5px 0 5px 0'
    },
    itemDesc: {
      fontSize: 13,
      fontFamily: 'Roboto-Medium'
    },
  })
);
