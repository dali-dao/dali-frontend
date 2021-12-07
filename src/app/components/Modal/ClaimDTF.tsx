import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: '10%',
    color: '#fff',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textLeft: {textAlign: 'left'}, textRight: {textAlign: 'right'}, textCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  marginTop10:{marginTop: 10},marginTop20:{marginTop: 20},marginTop30:{marginTop: 30},marginTop40:{marginTop: 40},marginTop50:{marginTop: 50},
  marginBottom5:{marginBottom: 5},
  marginBottom10:{marginBottom: 10},
  marginBottom15:{marginBottom: 15},
  marginBottom20:{marginBottom: 20},marginBottom30:{marginBottom: 30},marginBottom40:{marginBottom: 40},marginBottom50:{marginBottom: 50},
  marginLeft10:{marginLeft: 10},marginLeft20:{marginLeft: 20},marginLeft30:{marginLeft: 30},marginLeft40:{marginLeft: 40},marginLeft50:{marginLeft: 50},
  marginRight10:{marginRight: 10},marginRight20:{marginRight: 20},marginRight30:{marginRight: 30},marginRight40:{marginRight: 40},marginRight50:{marginRight: 50},
  fontSize12: {fontSize: 12},
  fontSize15: {fontSize: 15},
  paddingLeft15: {paddingLeft: 15},
  paddingLeft10: {paddingLeft: 10},
  floatLeft: {
    float: 'left'
  },
  //component class
  modal_header: {
    background: '#2c333f',
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    textAlign: 'left'
  },
  
  button_content:{
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    borderBottomRightRadius: 5, borderBottomLeftRadius: 5,
  },
  left_button: {color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 145, height: 50},
  right_button: {backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 230, height: 50, color: '#000'},
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
  content_desc_1: {fontSize: 13, color: '#c5c6ca', width: '100%'},
  content_desc_2: {fontSize: 15, width: '100%'},
  content_desc_3: {fontSize: 13, width: '100%'},
  max_button: {borderRadius: 0, background: '#2f3542'}
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
