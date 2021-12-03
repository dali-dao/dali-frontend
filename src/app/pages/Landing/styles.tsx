/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
        width: '100%'
    },
    section2: {
      padding: '80px 160px 100px 160px'
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
      backgroundColor: '#151a22'
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
      
    },
    blockchainImg: {
      width: '100%'
    },
    section5: {
      padding: '90px 160px 90px 160px'
    },
    faq: {
      textTransform: 'uppercase',
      fontSize: 21,
      fontWeight: 'bold',
      marginBottom: 40,
      backgroundColor: '#10141b'
    },
    viewFaqBtn: {
      marginTop: 50
    },
    faqBox: {
      padding: '0 10px 10px 10px'
    }
  })
);
