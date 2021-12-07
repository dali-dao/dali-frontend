import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: '10%',
    color: '#fff',
    margin: 'auto',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textLeft: {textAlign: 'left'}, textRight: {textAlign: 'right'}, textCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  marginTop10:{marginTop: 10},marginTop20:{marginTop: 20},marginTop30:{marginTop: 30},marginTop40:{marginTop: 40},marginTop50:{marginTop: 50},
  marginBottom5:{marginBottom: 5},marginBottom10:{marginBottom: 10},marginBottom20:{marginBottom: 20},marginBottom30:{marginBottom: 30},marginBottom40:{marginBottom: 40},marginBottom50:{marginBottom: 50},
  marginLeft10:{marginLeft: 10},marginLeft20:{marginLeft: 20},marginLeft30:{marginLeft: 30},marginLeft40:{marginLeft: 40},marginLeft50:{marginLeft: 50},
  marginRight10:{marginRight: 10},marginRight20:{marginRight: 20},marginRight30:{marginRight: 30},marginRight40:{marginRight: 40},marginRight50:{marginRight: 50},
  fontSize12: {fontSize: 12},
  paddingLeft15: {paddingLeft: 15},
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
  project_title: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16
  },
  modal_content: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    display: 'block',
    textAlign: 'left',
    padding: '25px 40px',
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
