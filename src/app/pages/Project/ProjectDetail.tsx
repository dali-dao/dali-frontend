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
// import ProjectDetailBanner from '../../components/ProjectDetailBanner';
 
function ProjectDetail() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container>
        <Grid container className={classes.banner_left_description}>
          <img src={Banner} alt="banner" className={classes.banner}/>
          <Grid container className={classes.banner_description}>
            <img src={BannerIcon} alt="bannericon" className={classes.banner_icon}/>
            <Grid item xs={12} md={12} className={classes.banner_description_content}>
              <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
              <Icon icon="websymbol:user" style={{verticalAlign: 'middle', width: 16, height: 18}} /> <span style={{fontWeight: 'bold', fontSize: 14, marginRight: 20}}>@spicedao</span>
              <Icon icon="fontisto:world" style={{verticalAlign: 'middle', width: 16, height: 18}}  /> <span style={{fontWeight: 'bold', fontSize: 14, marginRight: 20}}>dune.foundation</span>
              <Icon icon="el:twitter" style={{verticalAlign: 'middle', width: 16, height: 18}}  color="white" /> <span style={{fontWeight: 'bold', fontSize: 14, marginRight: 20}}>@TheSpiceDAO</span>
              <Icon icon="akar-icons:discord-fill" style={{verticalAlign: 'middle', width: 16, height: 18}}  color="white" /> <span style={{fontWeight: 'bold', fontSize: 14}}>Discord</span>
              <p className={classes.project_banner_description}>
                Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. Cras eget rhoncus dolor, commodo pharetra leo. Pellentesque neque risus, apharetra leo. Pellentesque neque risus, apharetra leo.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.detail_banner_right}>
          ID:5246794565 <Icon icon="dashicons:admin-tools" color="white" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.main_content} spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid item style={{border: '1px solid #323e50', backgroundColor: '#1a1d24', borderRadius: 5, marginBottom: 20, height: 'auto'}}>
            <Grid xs={12} md={12} className={classes.detail_first_row}>
              <span className={classes.detail_info_left}>Volume    <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
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

          <Grid item style={{border: '1px solid #323e50', backgroundColor: '#1a1d24', borderRadius: 5, marginBottom: 30, height: 'auto'}}>
            <VolumeCurrencyChart />
          </Grid>
          
          <Grid container>
            <Grid item xs={12} md={6} style={{marginBottom: 20}} className={classes.TextLeft}>
                SPICE TOKENS   <Icon icon="si-glyph:circle-info" className={classes.verticalMiddle}/>
            </Grid>
            <Grid container xs={12} md={7}>
              <Grid item xs={12} md={12} className={classes.TextLeft} style={{marginBottom: 10}}>
                <span className={classes.detail_address}>Address</span>
                <span>:</span> 
                <span className={classes.detail_address_value}>
                  0x9b6dB7597a74602a5A806E33408e7E2DAFa58193
                </span>
              </Grid>
              <Grid item xs={12} md={12} className={classes.TextLeft} style={{marginBottom: 10}}>
                <span className={classes.detail_supply}>Total supply</span>
                <span>:</span> 
                <span className={classes.detail_supply_value}>
                2,510,791,7020</span>
              </Grid>
              <Grid item xs={12} md={12} className={classes.TextLeft} style={{marginBottom: 10}}>
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
            <Grid container xs={12} md={5}>
              <Grid item xs={12} md={12} style={{marginBottom: 10}} className={classes.TextRight}>
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
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={12} style={{border: '1px solid #323e50', backgroundColor: '#1a1d24', borderRadius: 5, marginBottom: 20, height: 'auto', textAlign: 'left'}}>
            <Grid item style={{paddingTop: 30, paddingLeft: 20}}><strong>CONTRIBUTE <span style={{color: '#f8dd0c'}}>@spicedao</span></strong></Grid>
            <Grid container style={{marginTop: 20}}>
              <Grid item xs={12} md={8} sm={12} style={{textAlign: 'center'}}>
                <FormControl style={{width: '90%' }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    className={classes.input_outline}
                    endAdornment={<InputAdornment position="end"><ButtonGroup /></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'Receive 0 tokens/$',
                    }}
                  />
                  <FormHelperText style={{marginBottom: 20, marginLeft: 0, color: 'grey'}} id="outlined-weight-helper-text">Receive 0 tokens/$</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} sm={12} xl={12} style={{textAlign: 'center', marginBottom: 30}}>
                <Button style={{width: '90%', background: 'rgb(247 219 14)', height: 40, color: '#000', borderRadius: 0}} >PAY</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} style={{ backgroundColor: '#1a1d24', borderRadius: 5, marginBottom: 20, height: 'auto', textAlign: 'left' }}>
            <Activity />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectDetail;