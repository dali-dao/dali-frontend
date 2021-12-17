import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import MetaMask from '../../assets/Popup/metamask.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
  },
  //common class
  marginBottom30:{
    marginBottom: 30
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
    padding: '25px 40px',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    display: 'block',
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
  },
  button_content:{
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderBottomRightRadius: 5, 
    borderBottomLeftRadius: 5
  },
  wallet_name: {
    marginLeft: 10, 
    marginTop: 10, 
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light
  },
  des_font_color: {
    color: theme.palette.success.main,
    textAlign: 'left'
  },
  refreshPage:{
    color: theme.palette.success.dark,
    marginLeft: 5
  },
  back_button: {
    color: theme.palette.error.light,
    background: theme.palette.primary.main,
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
