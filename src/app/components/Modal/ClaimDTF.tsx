import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, FormControl, OutlinedInput, InputAdornment, FormHelperText } from '@material-ui/core';

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
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
}));

export default function ClaimDTF() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Claim DTF</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <p style={{fontSize: 13, color: '#c5c6ca', width: '100%'}}>Claiming DTF tokens will convert your balance to ERC20 tokens and mint them to your wallet.</p>
        <p style={{fontSize: 15, width: '100%'}}>If you’re unsure if you need to claim, you probably don’t.</p>
        <p style={{fontSize: 13, color: '#c5c6ca', width: '100%'}}>You can still redeem your DTF tokens for overflow without claiming them, and you can transfer your unclaimed DTF tokens to another address from the Tools menu, which can be accessed from the wrench icon in the upper right hand corner of this project.</p>
        <p style={{fontSize: 13, color: '#c5c6ca', width: '100%'}}>Your unclaimed DTF tokens: 0</p>
        <p style={{fontSize: 13, width: '100%'}}>DTF ERC20 address: 0x1B5C...2BaBdD</p>
        <Grid container>
          <p style={{fontSize: 15, width: '100%'}}>Amount of ERC20 tokens to claim</p>
          <FormControl style={{width: '100%' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={<InputAdornment position="end"><Button style={{borderRadius: 0, background: '#2f3542'}}>MAX</Button></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'0'}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>CLAIM</Button>
      </Grid>
    </div>
  );
}
