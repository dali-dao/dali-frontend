import { Grid, Button, TextField } from '@material-ui/core'
import WhatWeDo_1 from '../../assets/MainPage/what_we_do_1.png'
import WhatWeDo_2 from '../../assets/MainPage/what_we_do_2.png'
import WhatWeDo_3 from '../../assets/MainPage/what_we_do_3.png'
import Team_1 from '../../assets/MainPage/the_team_1.png'
import Team_2 from '../../assets/MainPage/the_team_2.png'
import Team_3 from '../../assets/MainPage/the_team_3.png'
import Team_4 from '../../assets/MainPage/the_team_4.png'
import MultiCarousel from '../../components/MultiCurosel'
import LogoBlack from '../../assets/Landing/logo_black.png'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

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
import { Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.error.light,
      backgroundColor: theme.palette.background.default,
    },
    // Main Page Style
    header_content: {
      background: '#f5f6fa',
    },
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
    slide_content: {
      height: 'auto',
      display: 'block',
    },
    team_content: {
      background: '#0b0b15',
      textAlign: 'left',
      padding: '5%',
    },
    value_in_vision: {
      backgroundImage: `url(${Value_Background})`,
      padding: 30,
      width: '100%',
      backgroundSize: 'cover',
      height: 'auto',
    },
    road_map_content: {
      padding: '5%',
      background: '#0b0b15',
    },
    white_paper_content: {
      backgroundImage: `url(${WhitePaperBack})`,
      backgroundSize: 'cover',
      padding: '5%',
    },
    join_us_content: {
      padding: '5%',
      backgroundImage: `url(${JoinUsBack})`,
      height: 'auto',
    },
    footer_content: {
      padding: '1% 5%',
      background: '#f5f6fa',
      height: 'auto',
    },
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
      fontWeight: 'bold',
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
      padding: '15px 50px',
      borderRadius: '50px',
      textDecoration: 'none',
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
      fontWeight: 'bold',
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
    team_left_content: {
      maxWidth: 1600,
    },
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
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      '@media(max-width: 1360px)': {
        fontSize: 70,
      },
      '@media(max-width: 1000px)': {
        fontSize: 60,
      },
      '@media(max-width: 950px)': {
        fontSize: 50,
      },
    },
    white_paper_title: {
      fontSize: 85,
      fontWeight: 'bold',
      '@media(max-width: 1360px)': {
        fontSize: 70,
      },
      '@media(max-width: 1000px)': {
        fontSize: 60,
      },
      '@media(max-width: 950px)': {
        fontSize: 50,
      },
    },
    comming_soon: {
      fontSize: 35,
      '@media(max-width: 1360px)': {
        fontSize: 25,
      },
    },
    join_us_title: {
      fontSize: 45,
      color: '#fff',
      fontWeight: 'bold',
    },
    join_us_desc_1: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 20,
    },
    input_lb: {
      width: '100%',
      marginTop: 10,
      background: '#141821',
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
      background: '#141821',
      height: 175,
      color: theme.palette.error.light,
      resize: 'none',
      width: '98%',
      padding: '1%',
      borderRadius: 5,
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
    header_link: {
      width: '12.5%',
      color: '#000',
      fontSize: 14,
      '@media(max-width: 1130px)': {
        fontSize: 12,
      },
      '@media(max-width: 590px)': {
        fontSize: 10,
      },
    },
    header_container: {
      marginTop: '30px !important',
    },
    join_us_button: {
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
      color: '#000',
      padding: '10px 50px',
      borderRadius: 50,
      fontWeight: 'bold',
      marginTop: 15,
      '@media(max-width: 1130px)': {
        padding: '10px 30px',
      },
    },
    followIcons: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    footer_info: {
      color: '#6d7186',
      textAlign: 'left',
      padding: 10,
    },
    icon_button_content: {
      color: '#13204c',
    },
    link_tab: {
      textDecoration: 'none',
      color: '#13204c',
    },
    design_project_button_content: {
      marginTop: 30,
    },
  }),
)

function MainPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.header_content}>
        <Grid item xs={12} md={2}>
          <img src={LogoBlack} alt="logo" />
        </Grid>
        <Grid container item xs={12} md={8} className={classes.header_container}>
          <Grid className={classes.header_link}>
            <Link to="/home" className={classes.link_tab}>
              HOME
            </Link>
          </Grid>
          <Grid className={classes.header_link}>ABOUT</Grid>
          <Grid className={classes.header_link}>WHAT WE DO</Grid>
          <Grid className={classes.header_link}>GALLERY</Grid>
          <Grid className={classes.header_link}>OUR TEAM</Grid>
          <Grid className={classes.header_link}>VISION</Grid>
          <Grid className={classes.header_link}>ROAD MAP</Grid>
          <Grid className={classes.header_link}>CONTACT US</Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button className={classes.join_us_button}>JOIN US NOW</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.banner_content}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4} className={classes.padding10}>
            <Grid item className={classes.banner_background_1}></Grid>
          </Grid>
          <Grid item xs={12} md={8} className={classes.padding10}>
            <Grid item className={classes.banner_background_2}></Grid>
          </Grid>
          <Grid item xs={12} md={7} className={classes.padding10}>
            <Grid item className={classes.banner_background_3}></Grid>
          </Grid>
          <Grid item xs={12} md={5} className={classes.padding10}>
            <Grid item className={classes.banner_background_4}></Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding10}>
            <Grid item className={classes.banner_background_5}></Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding10}>
            <Grid item className={classes.banner_background_6}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.about_dali_content}>
        <Grid item xs={12} className={classes.about_title}>
          ABOUT $DALI
        </Grid>
        <Grid item xs={12} className={classes.about_desc_1}>
          CURABITUR CONVALLIS, EX UT PORTA ALIQUET, EX URNA CURSUSESTIE DOLOR AUGUE VITAE RISUS.
        </Grid>
        <Grid item xs={12} md={8} className={classes.about_desc_2}>
          PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT. PELLENTESQUE HABITANT MORBI
          TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS HENDRERIT
          MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALIQUAM UT SUSCIPIT
          ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS, EFFICITUR
          ERAT QUIS, TRISTIQUE LECTUS. PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT.
        </Grid>
        <Grid item xs={12} md={8} className={classes.about_desc_3}>
          PELLENTESQUE HABITANT MORBI TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR
          LECTUS. PHASELLUS HENDRERIT MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT
          MATTIS. ALIQUAM UT SUSCIPIT ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS.
          PROINUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS, EFFICITUR ERAT QUIS, TRISTIQUE
          LECTUS. ALIQUAM UT STUR ERAT QE LECTUS. ALIQUAM UT STUR ERAT QUIS, TRISTIQUE LECTUS. ALIQUAM UT SUSCIPIT ODIO.
          SUSP TRISTIQUE LECTUS. ALIQUAM UT SUSCIPIT ODIO. SUSP TRISTIQUE LECTUS. ALIQUAM UT SUSCIPIT ODIO.
        </Grid>
        <Grid item xs={12} md={6} className={classes.design_project_button_content}>
          <Link to="/design" className={classes.design_project_button}>
            DESIGN YOUR PROJECT
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.what_do_content}>
        <Grid container justifyContent="center" className={classes.what_we_do_padding_content}>
          <Grid item xs={12} className={classes.what_we_do_title}>
            WHAT WE DO
          </Grid>
          <Grid item xs={12} className={classes.what_we_do_title_1}>
            RABITUR CONVALLIS, EX UT PORTA ALIQUET,DOLOR AUGUE VITAE RISUS
          </Grid>
          <Grid item xs={12} md={4} className={classes.what_we_do_image}>
            <img src={WhatWeDo_1} alt="what_we_do_1" className={classes.what_we_do_card_image_content_1} />
            <p className={classes.what_do_image_desc}>NULLA NISL ORCI, COMMODO COMMODO.</p>
          </Grid>
          <Grid item xs={12} md={4} className={classes.what_we_do_image}>
            <img src={WhatWeDo_2} alt="what_we_do_2" className={classes.what_we_do_card_image_content_1} />
            <p className={classes.what_do_image_desc}>NULLA NISL ORCI, COMMODO COMMODO.</p>
          </Grid>
          <Grid item xs={12} md={4} className={classes.what_we_do_image}>
            <img src={WhatWeDo_3} alt="what_we_do_3" className={classes.what_we_do_card_image_content_1} />
            <p className={classes.what_do_image_desc}>NULLA NISL ORCI, COMMODO COMMODO.</p>
          </Grid>
          <Grid item xs={12} className={classes.what_we_do_desc}>
            PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT. PELLENTESQUE HABITANT
            MORBI TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS
            HENDRERIT MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALIQUAM UT
            SUSCIPIT ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS,
            EFFICITUR ERAT QUIS, TRISTIQUE LECTUS. PROIN A METUS LIBERO. MAURIS INTERDUM URNA A MI BLANDIT MATTIS.
            ALIQUAM UT SUSCIPIT ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM
            FINIBUS, EFFICITUR ERAT QUIS, TRISTIQUE LECTUS. PROIN A METUS LIBERO.
          </Grid>
          <Grid item xs={12} md={6}>
            <Button className={classes.learn_more_button}>LEARN MORE</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.slide_content}>
        <MultiCarousel />
      </Grid>
      <Grid container className={classes.team_content}>
        <Grid item xs={12} className={classes.the_team}>
          THE TEAM
        </Grid>
        <Grid container item xs={12} md={7} className={classes.team_left_content}>
          <Grid item xs={12} md={4} sm={4} className={classes.padding10}>
            <img src={Team_1} alt="team_1" className={classes.team_image} />
          </Grid>
          <Grid item xs={12} md={8} sm={8} className={classes.padding10}>
            <img src={Team_2} alt="team_2" className={classes.team_image} />
          </Grid>
        </Grid>
        <Grid container item xs={12} md={5} className={classes.team_name_description}>
          PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT. PELLENTESQUE HABITANT MORBI
          TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS HENDRERIT
          MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALIQUAM UT SUSQUE
          VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALIQUAM UT SUSCIPIT ODIO. SUSPENDISSE LECTUS QUAM,
          TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS, EFFICITUR ERAT QUIS, TRISTIQUE LECTUS.{' '}
        </Grid>
        <Grid container item xs={12} md={7} className={classes.team_left_content}>
          <Grid item xs={12} md={8} sm={8} className={classes.padding10}>
            <img src={Team_3} alt="team_3" className={classes.team_image} />
          </Grid>
          <Grid item xs={12} md={4} sm={4} className={classes.padding10}>
            <img src={Team_4} alt="team_4" className={classes.team_image} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className={classes.team_name_description}>
          PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIPROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIPROIN A METUS
          LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT.PELLENTESQUE HABITANT MORBI TRISTIQUE
          SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS HENDRERIT MATTIS
          MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALESUADA FAMES AC TURPIS
          EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS
          <Grid item xs={12} md={12}>
            <Button className={classes.learn_more_button}>LEARN MORE</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.value_in_vision}>
        <Grid item xs={12} className={classes.vision_title}>
          VALUES IN VISION
        </Grid>
        <Grid item xs={12} className={classes.vision_desc_1}>
          CURABITUR CONVALLIS, EX UT PORTA ALIQUET, EX URNA CURSUS LOREM, NEC MOLESTIE DOLOR AUGUE VITAE RISUS.
        </Grid>
        <Grid item xs={12} md={8} className={classes.vision_desc_2}>
          PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT. PELLENTESQUE HABITANT MORBI
          TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR LECTUS. PHASELLUS HENDRERIT
          MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT MATTIS. ALIQUAM UT SUSCIPIT
          ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS, EFFICITUR
          ERAT QUIS, TRISTIQUE LECTUS. PROIN A METUS LIBERO. CRAS TEMPOR TEMPOR SAPIEN, AT ELEMENTUM QUAM PORTA BLANDIT.
        </Grid>
        <Grid item xs={12} md={8} className={classes.vision_desc_3}>
          PELLENTESQUE HABITANT MORBI TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. ETIAM A TEMPOR
          LECTUS. PHASELLUS HENDRERIT MATTIS MAURIS, ET MATTIS NEQUE VEHICULA VEL. MAURIS INTERDUM URNA A MI BLANDIT
          MATTIS. ALIQUAM UT SUSCIPIT ODIO. SUSPENDISSE LECTUS QUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS.
          PROINUAM, TRISTIQUE AC DAPIBUS ID, ORNARE ET LECTUS. PROIN IN DIAM FINIBUS, EFFICITUR ERAT QUIS, TRISTIQUE
          LECTUS. ALIQUAM UT STUR ERAT QE LECTUS. ALIQUAM UT STUR ERAT QUIS, TRISTIQUE LECTUS. ALIQUAM UT
        </Grid>
        <Grid item xs={12} md={6}>
          <Button className={classes.learn_more_button}>LEARN MORE</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.road_map_content}>
        <Grid item xs={12} className={classes.road_map_title}>
          ROAD MAP<p className={classes.comming_soon}>COMMING SOON</p>
        </Grid>
      </Grid>
      <Grid container className={classes.white_paper_content}>
        <Grid item xs={12} className={classes.white_paper_title}>
          WHITE PAPER<p className={classes.comming_soon}>COMMING SOON</p>
        </Grid>
      </Grid>
      <Grid container className={classes.join_us_content}>
        <Grid item xs={12} className={classes.join_us_title}>
          JOIN US NOW
        </Grid>
        <Grid item xs={12} className={classes.join_us_desc_1}>
          CURABITUR CONVALLIS, EX UT PORTA ALIQUET, EX URNA CURSUS LOREM, NEC MOLESTIE DOLOR AUGUE VITAE RISUS.
        </Grid>
        <Grid item xs={12} md={6} className={classes.input_content}>
          <span>First name *</span>
          <TextField className={classes.input_lb} id="outlined-basic" variant="outlined" color="secondary" label="" />
        </Grid>
        <Grid item xs={12} md={6} className={classes.input_content}>
          <span>Last name *</span>
          <TextField className={classes.input_lb} id="outlined-basic" variant="outlined" color="secondary" label="" />
        </Grid>
        <Grid item xs={12} md={6} className={classes.input_content}>
          <span>Email Address *</span>
          <TextField className={classes.input_lb} id="outlined-basic" variant="outlined" color="secondary" label="" />
        </Grid>
        <Grid item xs={12} md={6} className={classes.input_content}>
          <span>Phone number *</span>
          <TextField className={classes.input_lb} id="outlined-basic" variant="outlined" color="secondary" label="" />
        </Grid>
        <Grid item xs={12} className={classes.input_content}>
          <Grid className={classes.text_message_title}>Text your message</Grid>
          <textarea placeholder="Text your message" className={classes.textArea_content}></textarea>
        </Grid>
        <Grid item xs={12} md={6} className={classes.submit_button_content}>
          <Button className={classes.submit_message_button}>SUBMIT A MESSAGE</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.footer_content}>
        <Grid item xs={12} md={9} className={classes.footer_info}>
          2021 $ DALI.com All rights reserved. Privacy Policy | Terms & Conditions
        </Grid>
        <Grid item xs={12} md={3} className={classes.icon_button_content}>
          <Grid className={classes.followIcons}>
            <GitHubIcon fontSize="large" style={{ marginRight: 20 }} />
            <Icon icon="fa-brands:discord" width="40px" style={{ marginRight: 20 }} />
            <TwitterIcon fontSize="large" style={{ marginRight: 20 }} />
            <InstagramIcon fontSize="large" style={{ marginRight: 20 }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainPage
