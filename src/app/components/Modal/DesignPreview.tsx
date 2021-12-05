import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import DesignPreview from '../../assets/Popup/design_preview.jpg';
import { Icon } from '@iconify/react'; 
import { Grid, FormControl, OutlinedInput, InputAdornment, FormHelperText, Button } from '@material-ui/core';
import ButtonGroup from '../../components/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },
  //common class
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  //component class
  modal_header: {
    background: '#2c333f',
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '20px 0px 20px 30px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '20px 20px 10px 20px'
  },
  project_title: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16
  },
  project_description: {
    color: '#88898d',
    fontSize: 14
  },
  project_price_info: {
    fontSize: 13
  },
  icon_info: {
    color: '#29303d',
    verticalAlign: 'middle',
    marginLeft: 10
  },
  //Project Info 2
  project_info_2: {},
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
  project_info_3: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '20px 20px 10px 45px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  toke_info_content: {
    marginBottom: 30
  },
  funding_cycle: {},
  activity: {},
  holders_button: {
    border: '1px solid #2b3242',
    background: '#10141b',
    marginRight: 20
  },
  manage_button: {
    background: '#454d5c',
    color: '#fff',
    padding: '5px 10px',
    border: '1px solid #2b3242',
  },
  indicator: {
    backgroundColor: '#fcdd0c',
    height: 1
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: '#10141b'
    }
  },
  detail_container: {
    border: '1px solid #404a5e',
    background: '#14171e',
  },
  detail_title: {
    padding: '20px',
    fontSize: 14
  },
  available_container: {
    border: '1px solid #404a5e',
    background: '#14171e',
    marginTop: 15,
  },
  distribute_button: {
    border: '1px solid #6f727a',
    background: '#14171e',
    borderRadius: 5
  },
  rightAlign: {
    marginLeft: 'auto',
 },
 no_activity: {
  border: '1px solid #404a5e',
  background: '#14171e',
  height: '100px'
 }
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>DESIGN PREVIEW</strong>
      </Grid>
      <Grid container>
        <Grid container className={classes.project_info_1}>
          <Grid item xs={12} md={2}>
            <img src={DesignPreview} alt="design_preview"/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid item xs={12} md={12} className={classes.textLeft}>
              <strong className={classes.project_title}>UNTITLED PROJECT</strong>
            </Grid>
            <Grid item xs={12} md={12} className={classes.textLeft}>
              <span className={classes.project_description}>Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. Cras eget rhoncus dolor, commodo pharetra leo. Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. Cras eget rhoncus dolor, commodo pharetra leo. </span>
            </Grid>
            <Grid container xs={12} md={12} style={{marginTop: 10}} className={classes.textLeft}>
              <Grid item xs={12} md={10} style={{marginBottom: 5}}>
                <strong className={classes.project_price_info}>Volume</strong><Icon icon="si-glyph:circle-info" className={classes.icon_info}/>
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>Ξ0</strong>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} className={classes.textLeft} style={{marginBottom: 5}}>
              <Grid item xs={12} md={10}>
                <strong className={classes.project_price_info}>In Juicebox</strong><Icon icon="si-glyph:circle-info" className={classes.icon_info}/>
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>Ξ0 0$</strong>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} className={classes.textLeft} style={{marginBottom: 5}}>
              <Grid item xs={12} md={10}>
                <strong className={classes.project_price_info}>In wallet</strong><Icon icon="si-glyph:circle-info" className={classes.icon_info}/>
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>0 JBX + Ξ0</strong>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} style={{marginTop: 10}} className={classes.textRight}>
              <strong style={{fontSize: 12}}>ALL ASSETS</strong><Icon icon="si-glyph:circle-info" className={classes.icon_info}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.project_info_2}>
          <Grid item xs={12} md={12} style={{border: '1px solid #323e50', backgroundColor: '#14171d', height: 'auto', textAlign: 'left'}}>
              <Grid container style={{marginTop: 20}}>
              <Grid item xs={12} md={10} sm={12} style={{textAlign: 'center'}}>
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
                <Grid item xs={12} md={2} sm={12} xl={12} style={{textAlign: 'center', marginBottom: 30}}>
                  <Button style={{width: '90%', background: 'rgb(247 219 14)', height: 40, color: '#000', borderRadius: 0}} >PAY</Button>
                </Grid>
              </Grid>
            </Grid>
        </Grid>

        <Grid container className={classes.project_info_3}>
          <Grid container className={classes.toke_info_content}>
            <Grid item xs={12} md={12} style={{marginBottom: 10}} className={classes.textLeft}>
              <strong style={{fontFamily: 'CerebriSansPro-Bold', fontSize: 16}}>TOKENS</strong><Icon icon="si-glyph:circle-info" className={classes.icon_info}/>
            </Grid>
            <Grid item xs={12} md={12} className={classes.textLeft} style={{marginBottom: 10, fontSize: 13}}>
              <strong style={{marginRight: 20}}>Total supply</strong><span style={{marginRight: 10}}>:</span> <strong>0</strong>
            </Grid>
            <Grid item xs={12} md={8} style={{fontSize: 13}} className={classes.textLeft}>
              <strong style={{marginRight: 15}}>Your balance</strong><span>:</span> <span style={{marginLeft: 10, marginRight: 10}}>0</span><strong>(0% of supply)</strong>
            </Grid>
            <Grid item xs={12} md={4} className={classes.textRight}>
              <Button className={classes.holders_button}>Holders</Button>
              <Button className={classes.manage_button}>Manage</Button>
            </Grid>
          </Grid>
          <Grid container className={classes.funding_cycle}>
            <TabContext value={value}>
              <AppBar position="static" elevation={0} style={{background:'#1c222d'}}>
                <TabList onChange={handleChange} aria-label="simple tabs example" classes={{ indicator: classes.indicator }}>
                  <span style={{color: '#fff', paddingTop: 15}}>FUNDING CYCLE <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/></span>
                  <Tab label="CURRENT" value="1"  className={classes.rightAlign}/>
                  <Tab label="HISTORY" value="2" />
                </TabList>
              </AppBar>
              <TabPanel value="1" style={{padding: '20px 0px', textAlign: 'left'}}>
                <Grid container className={classes.detail_container}>
                  <Grid item xs={12} md={12} className={classes.detail_title}><strong>DETAILS</strong></Grid>
                  <Grid container style={{marginLeft: 20, marginBottom: 20}}>
                    <Grid item xs={12} md={3} style={{fontSize: 12}}>
                      <strong>Duration: Not set</strong>
                    </Grid>
                    <Grid item xs={12} md={3} style={{fontSize: 12}}>
                      <strong>Reserved</strong><Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/><strong>: 0%</strong>
                    </Grid>
                    <Grid item xs={12} md={4} style={{fontSize: 12}}>
                      <strong>Reconfiguration strategy</strong> <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/><strong>: 0%</strong>
                    </Grid>
                  </Grid>
                  <Grid style={{marginLeft: 20, marginBottom: 20, fontSize: 12}}>
                    Address : 0x0000000000000000000000000000000000000000
                  </Grid>
                  <Grid style={{marginLeft: 20, marginBottom: 20, fontSize: 12, color: '#9fa0a4', width: '93%'}}>
                    Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends.  Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. 
                  </Grid>
                </Grid>
                <Grid container className={classes.available_container}>
                  <Grid item xs={12} md={7} style={{padding: 20}}>
                    <strong style={{marginRight: 10, fontSize: 14}}>$0</strong>
                    <span style={{fontSize: 13, color: '#858594'}}>AVAILABLE<Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/></span>
                  </Grid>
                  <Grid item xs={12} md={5} style={{padding: 10, textAlign: 'right'}}>
                    <Button className={classes.distribute_button}>Distribute</Button>
                  </Grid>
                  <Grid item xs={12} md={12} style={{fontSize: 12, color: '#858594', marginLeft: 20, marginBottom: 10}}>
                    $11,511,594 withdrawn
                  </Grid>
                  <Grid item xs={12} md={12} style={{fontSize: 12, color: '#858594', marginLeft: 20, marginBottom: 30}}>
                    <span>Ξ2,465.1400</span> 
                    <Icon icon="websymbol:user" style={{verticalAlign: 'middle', width: 13, height: 13, marginRight: 5, marginLeft: 10}} /> <span>owner bala</span>
                  </Grid>
                  <Grid item xs={12} md={12} style={{marginLeft: 20}}>
                    <strong style={{marginRight: 10, fontSize: 14}}>Distribution <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10, color: '#858594'}}/></strong>
                  </Grid>
                  <Grid item xs={12} md={7} style={{padding: 20, fontSize: 13}}>
                  <span><Icon icon="websymbol:user" style={{verticalAlign: 'middle', width: 13, height: 13, marginRight: 5}} /> dunedao.eth</span>
                  </Grid>
                  <Grid item xs={12} md={5} style={{paddingRight: 10, textAlign: 'right', fontSize: 12, paddingTop: 20}}>
                    <strong>100%</strong>
                  </Grid>
                </Grid>
                <Grid container className={classes.available_container}>
                  <Grid item xs={12} md={7} style={{padding: 20}}>
                    <strong style={{marginRight: 10, fontSize: 14}}>Reserved tokens (100%)</strong>
                    <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10, color: '#858594'}}/>
                  </Grid>
                  <Grid item xs={12} md={7} style={{padding: 20, fontSize: 13}}>
                  <span><Icon icon="websymbol:user" style={{verticalAlign: 'middle', width: 13, height: 13, marginRight: 5}} /> dunedao.eth</span>
                  </Grid>
                  <Grid item xs={12} md={5} style={{paddingRight: 10, textAlign: 'right', fontSize: 12, paddingTop: 20}}>
                    <strong>100%</strong>
                  </Grid>
                  <Grid item xs={12} md={7} style={{padding: 20}}>
                    <strong style={{marginRight: 10, fontSize: 14}}>0</strong>
                    <span style={{fontSize: 13, color: '#858594'}}>SPICE</span>
                  </Grid>
                  <Grid item xs={12} md={5} style={{padding: 10, textAlign: 'right'}}>
                    <Button className={classes.distribute_button}>Distribute</Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Grid>
          <Grid container className={classes.activity}>
          <TabContext value={value}>
        <AppBar position="static" elevation={0} style={{backgroundColor: '#1c222d'}}>
          <TabList onChange={handleChange} aria-label="simple tabs example" classes={{ indicator: classes.indicator }}>
            <span style={{color: '#fff', paddingTop: 15, marginRight: '100px', fontSize: 16}}>ACTIVITY <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/></span>
            <Tab label="PAY" value="1" style={{minWidth: 50, fontSize: '12.8px'}}   className={classes.rightAlign}/>
            <Tab label="REDEEM" value="2" style={{minWidth: 100, fontSize: '12.8px'}}  />
            <Tab label="WITHDRAW" value="3" style={{minWidth: 100, fontSize: '12.8px'}}  />
            <Tab label="RESERVES" value="4" style={{minWidth: 100, fontSize: '12.8px'}}  />
          </TabList>
        </AppBar>
        <TabPanel value="1" style={{padding: '20px 0px', textAlign: 'left', width: '100%',}}>
          <Grid className={classes.no_activity}></Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
