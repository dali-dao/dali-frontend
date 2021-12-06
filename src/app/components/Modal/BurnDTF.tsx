import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, OutlinedInput, InputAdornment, FormHelperText, Button, Divider } from '@material-ui/core';
import { Icon } from '@iconify/react'; 

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
  project_price_info: {
    fontSize: 13
  }, 
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
}));

export default function BurnDTF() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Burn DTF tokens for ETH</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={12} className={classes.textLeft} style={{marginBottom: 5}}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Balance<span style={{marginLeft: 10, marginRight: 10}}>:</span>0 DTF</strong>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12} className={classes.textLeft} style={{marginBottom: 15}}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Currently worth<span style={{marginLeft: 10, marginRight: 10}}>:</span>Ξ0</strong>
          </Grid>
        </Grid>

        <Grid style={{width: '60%', color: '#c5c6ca', fontSize: 13, marginBottom: 15}}>
          <span>Tokens can be redeemed for a portion of this project’s ETH overflow, according to the bonding curve rate of the current funding cycle.</span>
          <span style={{color: '#cdb818', fontSize: 13}}>Tokens are burned when they are redeemed.</span>
        </Grid>
        <Grid style={{width: '100%', color: '#c5c6ca', fontSize: 13}}>
          You can redeem tokens once this project has overflow.
        </Grid>
      </Grid>
      
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>BURN 0 DTF FOR ETH</Button>
      </Grid>
    </div>
  );
}
