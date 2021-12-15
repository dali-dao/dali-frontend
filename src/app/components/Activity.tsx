import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Grid } from '@material-ui/core';
import PaymentCard from './Projects/paymentCard';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: '#10141b',
    border: '0',
  },
  indicator: {
    backgroundColor: '#fcdd0c',
    height: 1,
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: '#10141b'
    },
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
    backgroundColor: theme.palette.background.default,
    borderBottom: '1px solid grey'
  },
  activity_title: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
    padding: 0,
    display: 'block',
    textAlign: 'left',
    '& .MuiTab-wrapper ': {
      display: 'block'
    }
  },
  icon_info_1: {
    verticalAlign: 'middle', 
    marginLeft: 10
  },
  pay_tab_title: {
    minWidth: 30, 
    marginLeft: 'auto',
    fontSize: '12.8px',
    color: theme.palette.success.contrastText,
  },
  tab_label: {
    minWidth: 50, 
    fontSize: '12.8px',
    color: theme.palette.success.contrastText,
  },
  tab_pannel: {
    padding: '20px 0px', 
    textAlign: 'left',
    background: theme.palette.background.default
  },
  pagination_content: {
    background: theme.palette.background.default
  },
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
          <TabList onChange={handleChange} aria-label="Tab" classes={{ indicator: classes.indicator}}>
            <Tab label="ACTIVITY" disabled className={classes.activity_title} />
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
      <Pagination className={classes.pagination_content} color="secondary" count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
