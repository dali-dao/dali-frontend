import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },
  //common class
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
  modal_content: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    display: 'block',
    textAlign: 'left',
    padding: '20px 20px 10px 30px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  juice_box: {
    color: '#ffdd08',
    fontSize: 13,
  },
  modal_description: {
    fontSize: 13,
    textAlign: 'left',
    },
    button_style: {
        border: '1px solid #596275',
        background: '#2c333f',
        display: 'block',
        marginTop: 20,
        marginBottom: 30,
        color: '#fff',
        padding: '10px 40px'
    }
}));

export default function HeadsUp() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <Grid className={classes.modal_header}>
            <strong className={classes.modal_header_title}>HEADS UP</strong>
        </Grid>
        <Grid container className={classes.modal_content}>
            <span className={classes.juice_box}>Juicebox</span> <span className={classes.modal_description}>contracts are unaudited, and may be vulnerable to bugs or hacks. All funds moved through Juicebox could be lost or stolen. JuceboxDAO is not liable for any losses by projects or their supporters.</span>
            <Button className={classes.button_style}>I UNDERSTAND</Button>
        </Grid>
    </div>
  );
}