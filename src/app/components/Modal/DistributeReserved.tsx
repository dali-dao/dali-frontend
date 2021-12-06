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

export default function DistributeReserved() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Distribute reserved DTF</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={12} className={classes.textLeft} style={{marginBottom: 5}}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Available after fee:</strong>
          </Grid>
          <Grid className={classes.textRight} item xs={12} md={2}>
            <strong className={classes.project_price_info}>0 JBX + Ξ0</strong>
          </Grid>
        </Grid>
        <Grid style={{width: '100%'}}>
          <p style={{fontSize: 15}}>Funds will be distributed to:</p>
          <Grid style={{width: '80%', float: 'left', color: '#919398'}}>
            <Icon icon="clarity:user-line" style={{float: 'left'}}/><span style={{fontSize: 13, width: 115, display: 'block'}}> daotaifung.eth: until 12-0202021</span>
          </Grid>
          <Grid style={{fontSize: 14, float: 'right'}}>
            100%
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>DISTRIBUTE</Button>
      </Grid>
    </div>
  );
}
