import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
  },
  width100: {
    width: '100%'
  },
  modal_header: {
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.primary.main,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light
  },
  project_info_1: {
    padding: '40px',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    display: 'block',
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
    color: theme.palette.success.main
  },
  
  button_content:{
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderBottomRightRadius: 5, 
    borderBottomLeftRadius: 5
  },
  left_button: {
    color: theme.palette.error.light,
    background: theme.palette.primary.main,
    border: '1px solid #596275', 
    borderRadius: 5, 
    marginRight: 20, 
    width: 145, 
    height: 50
  },
  right_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', 
    width: 230, 
    height: 50, 
    color: '#000'
  },
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
  content_desc_1: {
    fontSize: 13, 
    color: '#c5c6ca', 
    width: '100%'
  },
  content_desc_2: {
    fontSize: 15, 
    width: '100%'
  },
  content_desc_3: {
    fontSize: 13, 
    width: '100%'
  },
  max_button: {
    borderRadius: 0, 
    color: theme.palette.error.light,
    border: '1px solid #596275', 
    background: theme.palette.primary.main,
  }
}));

export default function ClaimDTF() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Claim DTF</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <p className={classes.content_desc_1} >Claiming DTF tokens will convert your balance to ERC20 tokens and mint them to your wallet.</p>
        <p className={classes.content_desc_2}>If you’re unsure if you need to claim, you probably don’t.</p>
        <p className={classes.content_desc_1}>You can still redeem your DTF tokens for overflow without claiming them, and you can transfer your unclaimed DTF tokens to another address from the Tools menu, which can be accessed from the wrench icon in the upper right hand corner of this project.</p>
        <p className={classes.content_desc_1}>Your unclaimed DTF tokens: 0</p>
        <p className={classes.content_desc_3}>DTF ERC20 address: 0x1B5C...2BaBdD</p>
        <Grid container>
          <p className={classes.content_desc_2}>Amount of ERC20 tokens to claim</p>
          <FormControl className={classes.width100} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={<InputAdornment position="end"><Button className={classes.max_button}>MAX</Button></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'0'}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>CLAIM</Button>
      </Grid>
    </div>
  );
}
