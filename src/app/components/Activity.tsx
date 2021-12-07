import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Icon } from '@iconify/react'; 
import { Grid } from '@material-ui/core';
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
  },
  app_bar: {
    backgroundColor: '#10141b'
  },
  activity_title: {
    color: '#fff', 
    paddingTop: 15, 
    marginRight: '100px', 
    fontSize: 16
  },
  icon_info_1: {
    verticalAlign: 'middle', 
    marginLeft: 10
  },
  pay_tab_title: {
    minWidth: 50, 
    fontSize: '12.8px'
  },
  tab_label: {
    minWidth: 100, 
    fontSize: '12.8px'
  },
  tab_pannel: {
    padding: '20px 0px', 
    textAlign: 'left'
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
        <AppBar position="static" elevation={0} className={classes.app_bar}>
          <TabList onChange={handleChange} aria-label="Tab" classes={{ indicator: classes.indicator }}>
            <span className={classes.activity_title}>ACTIVITY <Icon icon="si-glyph:circle-info" className={classes.icon_info_1}/></span>
            <Tab label="PAY" value="1" className={classes.pay_tab_title} />
            <Tab label="REDEEM" value="2" className={classes.tab_label}  />
            <Tab label="WITHDRAW" value="3" className={classes.tab_label}  />
            <Tab label="RESERVES" value="4" className={classes.tab_label}  />
          </TabList>
        </AppBar>
        <TabPanel value="1" className={classes.tab_pannel}>
          <Grid>
          <Grid container spacing={2}>
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
