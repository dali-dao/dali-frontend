import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
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
  },
  
  button_content:{
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    borderBottomRightRadius: 5, borderBottomLeftRadius: 5,
  },
  left_button: {color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 145, height: 50},
  right_button: {backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 230, height: 50, color: '#000'},
  project_price_info: {
    fontSize: 13
  }, 
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
  },
  balance_content: {textAlign: 'left', marginBottom: 5},
  dft_first_line: {marginLeft: 10, marginRight: 10},
  dft_second_line: {marginBottom: 15, textAlign: 'left'},
  tokens_desc: {width: '100%', color: '#c5c6ca', fontSize: 13, marginBottom: 15, textAlign: 'left'},
  balance_desc_line: {width: '100%', color: '#c5c6ca', fontSize: 13, textAlign: 'left'}
}));

export default function BurnDTF() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Burn DTF tokens for ETH</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={12} className={classes.balance_content}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Balance<span className={classes.dft_first_line}>:</span>0 DTF</strong>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12} className={classes.dft_second_line}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Currently worth<span className={classes.dft_first_line}>:</span>Ξ0</strong>
          </Grid>
        </Grid>

        <Grid className={classes.tokens_desc}>
          <span>Tokens can be redeemed for a portion of this project’s ETH overflow, according to the bonding curve rate of the current funding cycle.</span>
          <span className={classes.balance_content}>Tokens are burned when they are redeemed.</span>
        </Grid>
        <Grid className={classes.balance_desc_line}>
          You can redeem tokens once this project has overflow.
        </Grid>
      </Grid>
      
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>BURN 0 DTF FOR ETH</Button>
      </Grid>
    </div>
  );
}
