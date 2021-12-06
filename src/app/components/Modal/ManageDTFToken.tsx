import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

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
}));

export default function ManageDTFToken() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Manage DTF tokens</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Button style={{width: '100%', color: '#fff', background: '#131524', border: '1px solid #596275', marginBottom: 20}}>Return my ETh</Button>
        <Button style={{width: '100%', color: '#fff', background: '#131524', border: '1px solid #596275'}}>Claim DTF as ERC20</Button>
      </Grid>
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
      </Grid>
    </div>
  );
}
