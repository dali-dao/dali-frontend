import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: '0px 0px 10px 10px #0c0f16'
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
    borderBottomRightRadius: 5, 
    borderBottomLeftRadius: 5,
  },
  left_button: {
    color: '#fff', 
    border: '1px solid #596275', 
    borderRadius: 5, 
    marginRight: 20, 
    width: 145, 
    height: 50
  },
  return_button: {
    width: '100%', 
    color: '#fff', 
    background: '#131524', 
    border: '1px solid #596275', 
    marginBottom: 20
  },
  claim_button: {
    width: '100%', 
    color: '#fff', 
    background: '#131524', 
    border: '1px solid #596275'
  },
  
}));

export default function ManageDTFToken() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Manage DTF tokens</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Button className={classes.return_button}>Return my ETh</Button>
        <Button className={classes.claim_button}>Claim DTF as ERC20</Button>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
      </Grid>
    </div>
  );
}
