import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Icon } from '@iconify/react'; 
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: '#10141b',
    border: '0px',
  },
  indicator: {
    backgroundColor: '#fcdd0c',
    height: 1,
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: '#10141b'
    }
  },
  detail_container: {
    border: '1px solid #404a5e',
    background: '#222733'
  },
  detail_title: {
    padding: '20px',
    fontSize: 14
  },
  available_container: {
    border: '1px solid #404a5e',
    background: '#222733',
    marginTop: 15,
  },
  distribute_button: {
    border: '1px solid #6f727a',
    background: '#191d26',
    borderRadius: 5
  },
  app_bar_style: {
    backgroundColor: '#10141b',
    paddingLeft: 20,
  },
  tab_title: {
    color: '#fff', 
    paddingTop: 15, 
  },
  icon_style:{
    verticalAlign: 'middle', 
    marginLeft: 5
  },
  tab_pannel_content: {
    padding: '0px 0px', 
    textAlign: 'left'
  },
  duration_content: {
    marginLeft: 20, 
    marginBottom: 20
  },
  fontSize12: {
    fontSize: 12
  },
  fontSize13: {
    fontSize: 13
  },
  padding20: {
    padding: 20
  },
  marginLeft20: {
    marginLeft: 20
  },
  address_desc_title: {
    marginLeft: 20, 
    marginBottom: 20, 
    fontSize: 12
  },
  address_desc: {
    marginLeft: 20, 
    marginBottom: 20, 
    fontSize: 12, 
    color: '#9fa0a4', 
    width: '93%'
  },
  value_0: {
    marginRight: 10, 
    fontSize: 14
  },
  distribute_button_content: {
    padding: 10, 
    textAlign: 'right'
  },
  available_style: {
    fontSize: 13, 
    color: '#858594'
  },
  withdrawn_cotent: {
    fontSize: 12, 
    color: '#858594', 
    marginLeft: 20, 
    marginBottom: 10
  },
  withdrawn_right_content: {
    fontSize: 12, 
    color: '#858594', 
    marginLeft: 20, 
    marginBottom: 30
  },
  owner_info: {
    verticalAlign: 'middle', 
    width: 13, 
    height: 13, 
    marginRight: 5, 
    marginLeft: 10
  },
  icon_circle_info: {
    verticalAlign: 'middle',
     marginLeft: 10, 
     color: '#858594'
  },
  percent_value: {
    paddingRight: 10, 
    textAlign: 'right', 
    fontSize: 12, 
    paddingTop: 20
  },
  eth_content: {
    padding: '20px 20px 20px 10px', 
    fontSize: 13,
    textAlign: 'left'
  },
  eth_info: {
    verticalAlign: 'middle', 
    width: 13, 
    height: 13, 
    marginRight: 5
  },
  tab_style_current: {
    color: '#fff',
    width: 80,
    marginLeft: 'auto',
    minWidth: 50
  },
  tab_style_history: {
    color: '#fff',
    width: 80,
    minWidth: 50
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
      <TabContext value={value}>
        <AppBar position="static" elevation={0} className={classes.app_bar_style}>
          <TabList onChange={handleChange} aria-label="Tab" classes={{ indicator: classes.indicator }}>
            <span className={classes.tab_title}>FUNDING CYCLE <Icon icon="si-glyph:circle-info" className={classes.icon_style}/></span>
            <Tab label="CURRENT" className={classes.tab_style_current} value="1" />
            <Tab label="HISTORY" className={classes.tab_style_history} value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1" className={classes.tab_pannel_content}>
          <Grid container className={classes.detail_container}>
            <Grid item xs={12} md={12} className={classes.detail_title}><strong>DETAILS</strong></Grid>
            <Grid container className={classes.duration_content}>
              <Grid item xs={12} md={3} className={classes.fontSize12}>
                <strong>Duration: Not set</strong>
              </Grid>
              <Grid item xs={12} md={3} className={classes.fontSize12}>
                <strong>Reserved</strong><Icon icon="si-glyph:circle-info" className={classes.icon_style}/><strong>: 0%</strong>
              </Grid>
              <Grid item xs={12} md={6} className={classes.fontSize12}>
                <strong>Reconfiguration strategy</strong> <Icon icon="si-glyph:circle-info" className={classes.icon_style}/><strong>: 0%</strong>
              </Grid>
            </Grid>
            <Grid className={classes.address_desc_title}>
              Address : 0x0000000000000000000000000000000000000000
            </Grid>
            <Grid className={classes.address_desc}>
              Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends.  Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. 
            </Grid>
          </Grid>
          <Grid container className={classes.available_container}>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.value_0}>$0</strong>
              <span className={classes.available_style}>AVAILABLE<Icon icon="si-glyph:circle-info" className={classes.icon_style}/></span>
            </Grid>
            <Grid item xs={12} md={5} className={classes.distribute_button_content}>
              <Button className={classes.distribute_button}>Distribute</Button>
            </Grid>
            <Grid item xs={12} md={12} className={classes.withdrawn_cotent}>
              $11,511,594 withdrawn
            </Grid>
            <Grid item xs={12} md={12} className={classes.withdrawn_right_content}>
              <span>Ξ2,465.1400</span> 
              <Icon icon="websymbol:user" className={classes.owner_info}/> <span>owner bala</span>
            </Grid>
            <Grid item xs={12} md={12} className={classes.marginLeft20}>
              <strong className={classes.value_0}>Distribution <Icon icon="si-glyph:circle-info" className={classes.icon_circle_info}/></strong>
            </Grid>
            <Grid item xs={7} md={7} className={classes.eth_content}>
            <span><Icon icon="websymbol:user" className={classes.icon_circle_info}/> dunedao.eth</span>
            </Grid>
            <Grid item xs={5} md={5} className={classes.percent_value}>
              <strong>100%</strong>
            </Grid>
          </Grid>
          <Grid container className={classes.available_container}>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.value_0}>Reserved tokens (100%)</strong>
              <Icon icon="si-glyph:circle-info" className={classes.icon_circle_info}/>
            </Grid>
            <Grid item xs={7} md={7} className={classes.eth_content}>
            <span><Icon icon="websymbol:user" className={classes.eth_info}/> dunedao.eth</span>
            </Grid>
            <Grid item xs={5} md={5} className={classes.percent_value}>
              <strong>100%</strong>
            </Grid>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.value_0}>0</strong>
              <span className={classes.available_style}>SPICE</span>
            </Grid>
            <Grid item xs={12} md={5} className={classes.distribute_button_content}>
              <Button className={classes.distribute_button}>Distribute</Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </div>
  );
}
