import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: '10%',
    color: '#fff',
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

export default function Assets() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Assets</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid item xs={12} md={12} style={{fontSize: 17, color: '#c5c5ca', marginBottom: 20}}>Other assets in this projet's owner's wallet.</Grid>
        <Grid item xs={12} md={5} style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15}}>0 JBX</Grid>
        <Grid item xs={12} md={7} style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15}}>@juicebox</Grid>
      </Grid>
      
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>DONE</Button>
      </Grid>
    </div>
  );
}
