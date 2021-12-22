//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Banner_1 from '../../assets/MainPage/banner_img_1.png'
import Banner_2 from '../../assets/MainPage/banner_img_2.png'
import Banner_3 from '../../assets/MainPage/banner_img_3.png'
import Banner_4 from '../../assets/MainPage/banner_img_4.png'
import Banner_5 from '../../assets/MainPage/banner_img_5.png'
import Banner_6 from '../../assets/MainPage/banner_img_6.png'
import WhatDoBack from '../../assets/MainPage/what_we_do_background.png'
import Value_Background from '../../assets/MainPage/vision_background.png'
import WhitePaperBack from '../../assets/MainPage/white_paper_back.png'
import JoinUsBack from '../../assets/MainPage/join_us_back.png'

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.error.light,
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.info.main,
    },
    section1: {
      position: 'relative',
    },
    banner: {
      width: '100%',
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
      color: 'white', // no change by theme
      '@media (max-width: 1305px)': {
        fontSize: 20,
        paddingBottom: 5,
      },
      '@media (max-width: 800px)': {
        fontSize: 15,
        paddingBottom: 5,
      },
      '@media (max-width: 400px)': {
        display: 'none'
      },
    },
    bannerDescription: {
      fontSize: 13,
      paddingBottom: 10,
      color: '#808193',
      '@media (max-width: 1305px)': {
        fontSize: 10,
        paddingBottom: 5,
      },
      '@media (max-width: 800px)': {
        fontSize: 10,
        paddingBottom: 5,
      },
      '@media (max-width: 600px)': {
        display: 'none'
      },
    },
    bannerList: {
      display: 'flex',
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      color: 'white',
      '@media (max-width: 1305px)': {
        fontSize: 13,
      },
      '@media (max-width: 800px)': {
        display: 'none'
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
      textAlign: 'center',
      margin: '15px 0 15px 0',
      cursor: 'pointer',
      '@media (max-width: 1305px)': {
        fontSize: 10,
        width: 120,
        margin: '5px 0',
      },
      '@media (max-width: 400px)': {
        fontSize: 10,
        width: 80,
        margin: '5px 0',
        padding: '10px 20px'
      },
    },
    smartContract: {
      paddingTop: 10,
      color: '#808193',
      '@media (max-width: 1305px)': {
        fontSize: 12,
        paddingTop: 5,
      },
      '@media (max-width: 800px)': {
        fontSize: 10,
        paddingTop: 5,
      },
    },
    ethereum: {
      color: theme.palette.error.dark,
    },
    playIcon: {
      paddingRight: 10,
    },
    section2: {
      padding: '80px 160px 100px 160px',
      '@media (max-width: 905px)': {
        padding: '80px 10px 100px 10px',
      },
    },
    projectTitle: {
      textTransform: 'uppercase',
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingBottom: 30,
    },
    exploreMore: {
      textAlign: 'right',
    },
    exploreMoreBtn: {
      textTransform: 'uppercase',
      color: theme.palette.success.main,
      border: `1px solid ${theme.palette.success.main}`,
    },
    section3: {
      padding: '70px 160px 70px 160px',
      backgroundColor: theme.palette.info.light,
      '@media (max-width: 905px)': {
        padding: '70px 10px 70px 10px',
      },
    },
    section3Title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 21,
      paddingBottom: 40,
    },
    section3Btn: {
      textTransform: 'uppercase',
      paddingTop: 40,
    },
    section4: {
      position: 'relative',
      justifyContent: 'center',
      display: 'flex',
    },
    section4Text: {
      textTransform: 'uppercase',
      top: '35%',
      position: 'absolute',
      fontFamily: 'CerebriSansPro-Bold',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'white', // no change by theme
      '@media (max-width: 905px)': {
        fontSize: 13,
        lineHeight: 1,
      },
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
      cursor: 'pointer',
    },
    blockchainImg: {
      width: '100%',
    },
    section5: {
      padding: '90px 160px 90px 160px',
      '@media (max-width: 905px)': {
        padding: '90px 10px 90px 10px',
      },
    },
    faq: {
      textTransform: 'uppercase',
      fontSize: 21,
      fontFamily: 'CerebriSansPro-ExtraBold',
      marginBottom: 40,
    },
    viewFaqBtn: {
      marginTop: 50,
    },
    faqBox: {
      padding: '0 10px 10px 10px',
    },
    linkDetail: {
      textDecoration: 'none',
    },
    // Main Page Style
    header_content: {},
    banner_content: {
      background: '#f5f6fa',
    },
    about_dali_content: {
      padding: '5%',
      background: '#0b0b15',
    },
    what_do_content: {
      backgroundImage: `url(${WhatDoBack})`,
      height: 'auto',
      backgroundRepeat: 'round',
    },
    slide_content: {},
    team_content: {
      background: '#0b0b15',
      textAlign: 'left',
      padding: '5%',
    },
    value_in_vision: {
      backgroundImage: `url(${Value_Background})`,
      padding: 30,
      width: '100%',
      backgroundRepeat: 'no-repeat',
      height: 'auto',
    },
    road_map_content: {
      padding: '5%',
      background: '#0b0b15',
    },
    white_paper_content: {
      backgroundImage: `url(${WhitePaperBack})`,
      padding: '5%',
    },
    join_us_content: {
      padding: '5%',
      backgroundImage: `url(${JoinUsBack})`,
      height: 'auto',
    },
    footer_content: {},
    banner_background_1: {
      backgroundImage: `url(${Banner_1})`,
      height: 500,
      backgroundRepeat: 'round',
    },
    banner_background_2: {
      backgroundImage: `url(${Banner_2})`,
      height: 500,
      backgroundRepeat: 'round',
    },
    banner_background_3: {
      backgroundImage: `url(${Banner_3})`,
      height: 200,
      backgroundRepeat: 'round',
    },
    banner_background_4: {
      backgroundImage: `url(${Banner_4})`,
      height: 200,
      backgroundRepeat: 'round',
    },
    banner_background_5: {
      backgroundImage: `url(${Banner_5})`,
      height: 200,
      backgroundRepeat: 'round',
    },
    banner_background_6: {
      backgroundImage: `url(${Banner_6})`,
      height: 200,
      backgroundRepeat: 'round',
    },
    about_title: {
      fontSize: 45,
      color: '#fff',
    },
    about_desc_1: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 20,
    },
    about_desc_2: {
      fontSize: 17,
      color: '#7e7e80',
    },
    about_desc_3: {
      fontSize: 17,
      marginTop: 20,
      marginBottom: 20,
      color: '#7e7e80',
    },
    design_project_button: {
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
      color: '#000',
      padding: '10px 50px',
      borderRadius: 50,
      fontWeight: 'bold',
    },
    what_we_do_padding_content: {
      padding: '5% 130px',
      '@media(max-width: 960px)': {
        padding: '5% 10px',
      },
    },
    what_we_do_title: {
      fontSize: 40,
    },
    what_we_do_title_1: {
      fontSize: 18,
    },
    what_we_do_image: {
      padding: 10,
    },
    what_we_do_card_image_content_1: {
      width: '100%',
    },
    what_we_do_card_image_content_2: {
      width: '100%',
    },
    what_we_do_card_image_content_3: {
      width: '100%',
    },
    what_do_image_desc: {
      fontSize: 18,
    },
    what_we_do_desc: {
      padding: 10,
      fontSize: 16,
      color: '#7e7e80',
    },
    learn_more_button: {
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
      color: '#000',
      padding: '10px 50px',
      borderRadius: 50,
      marginTop: 20,
      fontWeight: 'bold',
    },
    the_team: {
      fontWeight: 'bold',
      fontSize: 35,
      marginBottom: 20,
    },
    team_left_content: {},
    team_name_description: {
      fontSize: 15,
      padding: 10,
    },
    team_image: {
      width: '100%',
      height: 225,
      backgroundRepeat: 'round',
    },
    padding10: {
      padding: 10,
    },
    vision_title: {
      fontSize: 45,
      color: '#fff',
    },
    vision_desc_1: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 20,
    },
    vision_desc_2: {
      fontSize: 17,
      color: '#7e7e80',
    },
    vision_desc_3: {
      fontSize: 17,
      marginTop: 20,
      marginBottom: 20,
      color: '#7e7e80',
    },
    road_map_title: {
      fontSize: 85,
    },
    comming_soon: {
      fontSize: 35,
    },
    join_us_title: {
      fontSize: 45,
      color: '#fff',
    },
    join_us_desc_1: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 20,
    },
    input_lb: {
      width: '100%',
      marginTop: 10,
      color: '#c5c5ca',
    },
    input_content: {
      textAlign: 'left',
      padding: 10,
    },
    text_message_title: {
      color: theme.palette.error.light,
      marginBottom: 10,
    },
    textArea_content: {
      backgroundColor: theme.palette.primary.main,
      height: 175,
      border: `1px solid ${theme.palette.info.main}`,
      color: theme.palette.error.light,
      resize: 'none',
      width: '99.5%',
    },
    submit_message_button: {
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
      color: '#000',
      padding: '10px 50px',
      borderRadius: 50,
      fontWeight: 'bold',
    },
    submit_button_content: {
      padding: 10,
      textAlign: 'left',
    },
  }),
)
