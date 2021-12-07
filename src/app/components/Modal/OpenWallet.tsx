import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import MetaMask from '../../assets/Popup/metamask.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textLeft: {textAlign: 'left'}, 
  textRight: {textAlign: 'right'}, 
  textCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  marginTop10:{marginTop: 10},
  marginTop20:{marginTop: 20},
  marginTop30:{marginTop: 30},
  marginTop40:{marginTop: 40},
  marginTop50:{marginTop: 50},
  marginBottom5:{marginBottom: 5},
  marginBottom10:{marginBottom: 10},
  marginBottom20:{marginBottom: 20},
  marginBottom30:{marginBottom: 30},
  marginBottom40:{marginBottom: 40},
  marginBottom50:{marginBottom: 50},
  marginLeft10:{marginLeft: 10},
  marginLeft20:{marginLeft: 20},
  marginLeft30:{marginLeft: 30},
  marginLeft40:{marginLeft: 40},
  marginLeft50:{marginLeft: 50},
  marginRight10:{marginRight: 10},
  marginRight20:{marginRight: 20},
  marginRight30:{marginRight: 30},
  marginRight40:{marginRight: 40},
  marginRight50:{marginRight: 50},
  fontSize12: {fontSize: 12},
  paddingLeft15: {paddingLeft: 15},
  paddingLeft10: {paddingLeft: 10},
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
    borderBottomRightRadius: 5, 
    borderBottomLeftRadius: 5
  },
  wallet_name: {
    marginLeft: 10, 
    marginTop: 10, 
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  des_font_color: {
    color: '#919398', 
  textAlign: 'left'
},
  refreshPage:{
    color: '#eed332',
    marginLeft: 5
  },
  back_button: {
    color: '#fff', 
    border: '1px solid #596275', 
    borderRadius: 5, 
    marginRight: 20, 
    width: 145, 
    height: 50
  },
  open_meta_mask: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', 
    width: 230,
     height: 50, 
     color: '#000'
    },
}));

export default function OpenWallet() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Select a Wallet</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={3} className={classes.marginBottom30}>
          <img alt='metamask' src={MetaMask} ></img><span className={classes.wallet_name}>Metamask</span>
        </Grid>
        <Grid container className={classes.des_font_color}>
          You'll need to install MetaMask to continue. Once you have it installed, go ahead and <span className={classes.refreshPage}>refresh the page</span>
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.back_button}>BACK</Button>
        <Button className={classes.open_meta_mask}>OPEN METAMASK</Button>
      </Grid>
    </div>
  );
}
