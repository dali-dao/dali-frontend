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
    height: 1
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
        <AppBar position="static" elevation={0} style={{backgroundColor: '#10141b'}}>
          <TabList onChange={handleChange} aria-label="simple tabs example" classes={{ indicator: classes.indicator }}>
          <span style={{color: '#fff', paddingTop: 15, marginRight: '100px'}}>FUNDING CYCLE <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/></span>
            <Tab label="CURRENT" value="1" />
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
    </div>
  );
}
