import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';

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
}));

export default function Tools() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Tools</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <p style={{fontFamily: 'CerebriSansPro-ExtraBold', width: '100%'}}>TRANSFER OWNERSHIP</p>
        <span style={{fontSize: 13, color: '#c5c6ca'}}>Current owner</span>
        <span style={{fontSize: 13, color: '#c5c6ca', marginLeft: 5}}>:</span>
        <span style={{fontSize: 13, color: '#c5c6ca', marginLeft: 5}}>0xf5C3BfF123277e4d620740C85DaafF0aF60AeF84</span>
        <Grid style={{width: '100%', marginTop: 20, marginBottom: 10}}>
          <span style={{marginBottom: 10, display: 'block'}}>TO</span>
          <FormControl style={{width: '100%' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
          </FormControl>
          <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000', marginTop: 20}}>TRANSFER OWNERSHIP</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container style={{marginBottom: 20}}>
          <p style={{fontFamily: 'CerebriSansPro-ExtraBold', width: '100%'}}>TRANSFER STAKED DTF</p>
          <span style={{fontSize: 13, color: '#c5c6ca'}}>Your balance: 0</span>
        </Grid>
        

        <Grid item xs={12} md={5}>
          <span style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 14}}>AMOUNT</span>
          <FormControl style={{width: '90%', marginTop: 10 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={<InputAdornment position="end"><Button style={{borderRadius: 0, background: '#2f3542'}}>MAX</Button></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
          </FormControl>
          <Button 
          style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000', marginTop: 20}}>TRANSFER DTF</Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <span style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 14}}>TO</span>
          <FormControl style={{width: '100%', marginTop: 10 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'juicebox.juicebox.juicebox.'}
            />
          </FormControl>
          
        </Grid>
      </Grid>

      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <p style={{fontFamily: 'CerebriSansPro-ExtraBold', width: '100%'}}>ADD TO BALANCE</p>
        <span style={{fontSize: 13, color: '#c5c6ca'}}>Add funds to this project's balance without minting tokens.</span>
        <Grid style={{width: '100%', marginTop: 20, marginBottom: 10}}>
          <span style={{fontFamily: 'CerebriSansPro-ExtraBold', marginBottom: 10, display: 'block'}}>AMOUNT</span>
          <FormControl style={{width: '100%' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={<InputAdornment position="end"><Button style={{borderRadius: 0, background: '#2f3542'}}>ETH</Button></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
          </FormControl>
          <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000', marginTop: 20}}>ADD TO BALANCE</Button>
        </Grid>
      </Grid>
    </div>
  );
}
