import { useStyles } from './styles'
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

function MainPage() {
  const classes = useStyles()

  return (
    <div className={classes.main_page_content}>
      <Grid container className={classes.header_content}>
        <Grid item xs={12} md={2}>
          <img src={LogoBlack} alt="logo" />
        </Grid>
        <Grid container item xs={12} md={8} className={classes.header_container}>
          <Grid item xs={12} md={1} className={classes.header_link}>
            <Link to="/home" className={classes.link_tab}>
              HOME
            </Link>
          </Grid>
          <Grid item xs={12} md={1} className={classes.header_link}>
            ABOUT
          </Grid>
          <Grid item xs={12} md={2} className={classes.header_link}>
            WHAT WE DO
          </Grid>
          <Grid item xs={12} md={1} className={classes.header_link}>
            GALLERY
          </Grid>
          <Grid item xs={12} md={2} className={classes.header_link}>
            OUR TEAM
          </Grid>
          <Grid item xs={12} md={1} className={classes.header_link}>
            VISION
          </Grid>
          <Grid item xs={12} md={2} className={classes.header_link}>
            ROAD MAP
          </Grid>
          <Grid item xs={12} md={2} className={classes.header_link}>
            CONTACT US
          </Grid>
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
          <Grid item xs={12} md={5} className={classes.padding10}>
            <Grid item className={classes.banner_background_5}></Grid>
          </Grid>
          <Grid item xs={12} md={7} className={classes.padding10}>
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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} className={classes.vision_title}>
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
