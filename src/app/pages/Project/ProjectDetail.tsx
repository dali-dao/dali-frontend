import React from 'react'
import Banner from '../../assets/Projects/banner_2.jpg';
import BannerIcon from '../../assets/Projects/lexicon_devil.png';
import { useStyles } from "./styles";
import { Icon } from '@iconify/react'; 
import { Grid, FormControl, OutlinedInput, InputAdornment, FormHelperText, Button } from '@material-ui/core';
import ButtonGroup from '../../components/ButtonGroup';
import {VolumeCurrencyChart} from '../../components/VolumeCurrencyChart';
import FundingCycle from '../../components/FundingCycle';
import Activity from '../../components/Activity';

function ProjectDetail() {
  const classes = useStyles();

  return (
    <Grid container className={classes.project_detail_container}>
      <Grid container className={classes.banner_content} >
        <img alt='banner' src={Banner} className={classes.detail_image_banner}></img>
        <Grid container className={classes.project_detail_banner}>
          <Grid container className={classes.TextLeft} >
            <Grid item xs={12} md={2} className={classes.banner_icon_content}>
              <img src={BannerIcon} alt="bannericon" className={classes.banner_icon}/>
            </Grid>
            <Grid item xs={12} md={8}>
              <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
              <p className={classes.project_info_desc}>
                <Icon icon="websymbol:user" className={classes.detail_banner_icon} /> <span className={classes.detail_banner_user_info}>@spicedao</span>
                <Icon icon="fontisto:world" className={classes.detail_banner_icon}  /> <span className={classes.detail_banner_user_info}>dune.foundation</span>
                <Icon icon="el:twitter" className={classes.detail_banner_icon}  color="white" /> <span className={classes.detail_banner_user_info}>@TheSpiceDAO</span>
                <Icon icon="akar-icons:discord-fill" className={classes.detail_banner_icon}  color="white" /> <span className={classes.detail_banner_icon_style}>Discord</span>
              </p>
              <Grid item xs={12} md={9} className={classes.project_banner_description} justifyContent="center">
                  <span className={classes.font13}>
                    Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. 
                    Cras eget rhoncus dolor, commodo pharetra leo. 
                    Pellentesque neque risus, apharetra leo. Pellentesque neque risus, apharetra leo.
                  </span>
              </Grid>
            </Grid>
            <Grid item xs={12} md={2} className={classes.marginTopAuto}>
              <Grid className={classes.detail_banner_right}>
                ID:5246794565 <Icon icon="dashicons:admin-tools" color="white" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.main_content}>
        <Grid item xs={12} md={6} className={classes.padding10}>
          <Grid item className={classes.volume_content}>
            <Grid xs={12} md={12} className={classes.detail_first_row}>
              <span className={classes.detail_info_left}>Volume    
              <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
              </span>
              <span className={classes.detail_info_right}>Ξ45,5689</span>
            </Grid>
            <Grid xs={12} md={12} className={classes.detail_row}>
              <span className={classes.detail_info_left}>
                In Juicebox   <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
              </span>
              <span className={classes.detail_info_right}>Ξ0<span className={classes.detail_info_price}>$45678.56</span></span>
            </Grid>
            <Grid xs={12} md={12} className={classes.detail_row}>
              <span className={classes.detail_info_left}>
                In wallet   <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
              </span>
              <span className={classes.detail_info_right}>0 JBX + Ξ45678 5.563</span>
            </Grid>
            <Grid xs={12} md={12} className={classes.detail_last_row}>
              <span className={classes.detail_info_right}>ALL ASSETS   <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
              </span>
            </Grid>
          </Grid>

          <Grid item className={classes.volume_currency_content}>
            <VolumeCurrencyChart />
          </Grid>
          
          <Grid container>
            <Grid item xs={12} md={6} className={classes.spice_token_title}>
                SPICE TOKENS   <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
            </Grid>
            <Grid container xs={12} md={10} className={classes.breakWord}>
              <Grid item xs={12} md={12} className={classes.address_container}>
                <span className={classes.detail_address}>Address</span>
                <span>:</span> 
                <span className={classes.detail_address_value}>
                  0x9b6dB7597a74602a5A806E33408e7E2DAFa58193
                </span>
              </Grid>
              <Grid item xs={12} md={12} className={classes.supply_container}>
                <span className={classes.detail_supply}>Total supply</span>
                <span>:</span> 
                <span className={classes.detail_supply_value}>
                2,510,791,7020</span>
              </Grid>
              <Grid item xs={12} md={12} className={classes.balance_container}>
                <span className={classes.detail_balance}>Your balance</span>
                <span>:</span> 
                <span className={classes.detail_balance_value}>
                  0 SPICE</span>
                <Grid>
                <span className={classes.detail_claimable_value}>
                  0 claimable</span>
                </Grid>
                <Grid>
                <span className={classes.detail_total_value}>
                  (0% of supply)</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} md={2}>
              <Grid item xs={12} md={12} className={classes.holder_button_content}>
                <Button className={classes.holders_button}>Holders</Button>
              </Grid>
              <Grid item xs={12} md={12} className={classes.TextRight}>
                <Button className={classes.manage_button}>Manage</Button>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid className={classes.funding_cycle}>
            <FundingCycle />
          </Grid>
        </Grid>
        {/* Right Content */}
        <Grid item xs={12} md={6} className={classes.padding10}>
          <Grid item xs={12} md={12} className={classes.contribute_content}>
            <Grid item className={classes.contribute_header_title} ><strong>CONTRIBUTE <span className={classes.contribute_addr}>@spicedao</span></strong></Grid>
            <Grid container className={classes.marginTop20}>
              <Grid item xs={12} md={8} sm={12} className={classes.TextCenter} >
                <FormControl className={classes.receive_token_control}  variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    className={classes.input_outline}
                    endAdornment={<InputAdornment position="end"><ButtonGroup /></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'Receive 0 tokens/$',
                    }}
                  />
                  <FormHelperText className={classes.helper_text} id="outlined-weight-helper-text">Receive 0 tokens/$</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} sm={12} xl={12} className={classes.pay_button_content}>
                <Button className={classes.pay_button_style} >PAY</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={classes.activity_content}>
            <Activity />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectDetail;