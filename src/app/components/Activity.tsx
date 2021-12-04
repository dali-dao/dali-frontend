import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Icon } from '@iconify/react'; 
import { Grid, Button } from '@material-ui/core';
import PaymentCard from './Projects/paymentCard';

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
            <span style={{color: '#fff', paddingTop: 15, marginRight: '100px', fontSize: 16}}>ACTIVITY <Icon icon="si-glyph:circle-info" style={{verticalAlign: 'middle', marginLeft: 10}}/></span>
            <Tab label="PAY" value="1" style={{minWidth: 50, fontSize: '12.8px'}} />
            <Tab label="REDEEM" value="2" style={{minWidth: 100, fontSize: '12.8px'}}  />
            <Tab label="WITHDRAW" value="3" style={{minWidth: 100, fontSize: '12.8px'}}  />
            <Tab label="RESERVES" value="4" style={{minWidth: 100, fontSize: '12.8px'}}  />
          </TabList>
        </AppBar>
        <TabPanel value="1" style={{padding: '20px 0px', textAlign: 'left'}}>
          <Grid>
          <Grid container>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard />
            </Grid>
          </Grid>
        </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </div>
  );
}
