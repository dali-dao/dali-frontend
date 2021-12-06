import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Divider, Button } from '@material-ui/core';
import MetaMask from '../../assets/Popup/metamask.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },//common class
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
    padding: '20px 20px 10px 20px',
    textAlign: 'left'
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Select a Wallet</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='metamask' src={MetaMask} ></img><span style={{marginLeft: 10, marginTop: 6}}>Metamask</span>
        </Grid>
        <Grid container style={{color: '#919398'}}>
          You'll need to install MetaMask to continue. Once you have it installed, go ahead and <span style={{color: '#eed332', marginLeft: 5}}>refresh the page</span>
        </Grid>
      </Grid>
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>BACK</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>OPEN METAMASK</Button>
      </Grid>
    </div>
  );
}
