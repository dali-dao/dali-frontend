import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import CustomSlider from '../Other/CustomSlider';

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
  formControl: {
    width: '100%',
    marginBottom: 15
  },
  selectEmpty: {
  },
}));

export default function AddTokenReceiver() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Add token receiver</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container style={{marginTop:15}}>
          <span>Beneficiary</span>
          <TextField style={{width: '100%', marginTop: 10}} id="outlined-basic" label="Juicebox Project" variant="outlined" />
          <span style={{color: '#c5c5ca', fontSize: 15, marginTop: 10}}>The address that should receive the tokens.</span>
        </Grid>

        <Grid container style={{marginTop:15}}>
          <Grid item xs={12} md={12}>Percent</Grid>
          <CustomSlider />
        </Grid>

        <Grid container style={{marginTop:15}}>
          <Grid item xs={12} md={12}>Lock until</Grid>
          <Grid item xs={12} md={3}>
           
          </Grid>
          <Grid style={{color: '#c5c5ca', fontSize: 14}} item xs={12} md={12}>If locked, this can't be edited or removed until the lock expires or the funding cycle is reconfigured.</Grid>
        </Grid>
      </Grid>
      
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>OK</Button>
      </Grid>
    </div>
  );
}
