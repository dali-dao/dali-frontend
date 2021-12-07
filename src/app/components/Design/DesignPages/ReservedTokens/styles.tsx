//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
    percentLabel: {
      color: 'white',
      paddingTop: 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    payoutBtn: {
        backgroundColor: '#3a4553',
        border: '1px solid #667a93',
        boxShadow: '3px 3px #0c0f16',
        padding: '10px 20px',
        marginTop: 20,
        borderRadius: 3,
        color: 'white',
        width: '200px',
        cursor: 'pointer'
    }
  })
);
