/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ConnectToAuthereum from "web3modal/dist/providers/connectors/authereum";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.error.main,
      backgroundColor: theme.palette.background.default,
    },
    section1: {
      position: 'relative',
    },
    banner: {
      width: '100%'
    },
    bannerDesc: {
      position: 'absolute',
      top: '15%',
      left: '15%',
      textAlign: 'left',
    },
    descTitle: {
      fontFamily: 'CerebriSansPro-Heavy',
      fontSize: 40,
      paddingBottom: 10,
      textTransform: 'uppercase',
      "@media (max-width: 1305px)": {
        fontSize: 20,
        paddingBottom: 5
      },
    },
    bannerDescription: {
      fontSize: 13,
      paddingBottom: 10,
      color: '#808193',
      "@media (max-width: 1305px)": {
        fontSize: 10,
        paddingBottom: 5,
      }
    },
    bannerList: {
      display: 'flex',
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      "@media (max-width: 1305px)": {
        fontSize: 13,
      },
    },
    designForBtn: {
      padding: '15px 30px',
      borderRadius: '5px',
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 13,
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
      textTransform: 'uppercase',
      color: 'black',
      width: 200,
      textAlign: 'center',
      margin: '15px 0 15px 0',
      cursor: 'pointer',
      "@media (max-width: 1305px)": {
        fontSize: 10,
        width: 120,
        margin: '5px 0'
      }
    },
    smartContract: {  
      paddingTop: 10,
      color: '#808193',
      "@media (max-width: 1305px)": {
        fontSize: 12,
        paddingTop: 5
      }
    },
    ethereum: {
      color: 'yellow'
    },
    playIcon: {
      paddingRight: 10
    },
    section2: {
      padding: '80px 160px 100px 160px',
      "@media (max-width: 905px)": {
        padding: '80px 10px 100px 10px'
      },
    },
    projectTitle: {
      textTransform: 'uppercase',
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingBottom: 30
    },
    exploreMore: {
      textAlign: 'right'
    },
    exploreMoreBtn: {
      textTransform: 'uppercase',
    },
    section3: {
      padding: '70px 160px 70px 160px',
      backgroundColor: theme.palette.background.paper,
      "@media (max-width: 905px)": {
        padding: '70px 10px 70px 10px',
      }
    },
    section3Title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 21,
      paddingBottom: 40
    },
    section3Btn: {
      textTransform: 'uppercase',
      paddingTop: 40
    },
    section4: {
      position: 'relative',
      justifyContent: 'center',
      display: 'flex'
    },
    section4Text: {
      textTransform: 'uppercase',
      top: '35%',
      position: 'absolute',
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 18,
      lineHeight: 1.5,
      "@media (max-width: 905px)": {
        fontSize: 13,
        lineHeight: 1,
      }
    },
    designForBtn1: {
      padding: '15px 30px',
      borderRadius: '5px',
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 13,
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 47%, rgb(134 249 62) 115%, rgb(197 145 54) 100%)',
      textTransform: 'uppercase',
      color: 'black',
      textAlign: 'center',
      margin: '15px 20% 25px 20%',
      cursor: 'pointer'
    },
    blockchainImg: {
      width: '100%'
    },
    section5: {
      padding: '90px 160px 90px 160px',
      "@media (max-width: 905px)": {
        padding: '90px 10px 90px 10px',
      }
    },
    faq: {
      textTransform: 'uppercase',
      fontSize: 21,
      fontFamily: 'CerebriSansPro-ExtraBold',
      marginBottom: 40,
      backgroundColor: '#10141b'
    },
    viewFaqBtn: {
      marginTop: 50
    },
    faqBox: {
      padding: '0 10px 10px 10px'
    },
    linkDetail: {
      textDecoration: 'none'
    }
  })
);
