import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, OutlinedInput, InputAdornment, FormHelperText, Button } from '@material-ui/core';
import { Icon } from '@iconify/react'; 

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
  total_funds_content: {
    marginTop: 10, textAlign: 'left'
  },
  jbx_fee_content: {
    marginBottom: 5, textAlign: 'left'
  },
  after_fee_content: {
    textAlign: 'left', marginBottom: 20
  },
  max_button: {borderRadius: 0, background: '#2f3542'},
  jbx_fee_input_info: {
    marginBottom: 20, marginLeft: 0, color: 'grey'
  },
  funds_distribute_content: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    textAlign: 'left', fontSize: 15,
  },
  funds_user_info_content: {
    width: '80%', float: 'left', color: '#919398'
  },
  user_info_desc: {fontSize: 13, width: 115, display: 'block'},
  user_info_percent: {fontSize: 14, float: 'right'}
}));

export default function WithdrawFunds() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Withdraw funds</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={12} className={classes.total_funds_content}>
          <Grid item xs={12} md={10} className={classes.marginBottom15}>
            <strong className={classes.project_price_info}>Total funds:</strong>
          </Grid>
          <Grid className={classes.textRight} item xs={12} md={2}>
            <strong className={classes.project_price_info}>Ξ0</strong>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12} className={classes.jbx_fee_content} >
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>JBX Fee (0%)</strong>
          </Grid>
          <Grid className={classes.textRight} item xs={12} md={2}>
            <strong className={classes.project_price_info}>Ξ0 0$</strong>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12} className={classes.after_fee_content}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Available after fee:</strong>
          </Grid>
          <Grid className={classes.textRight} item xs={12} md={2}>
            <strong className={classes.project_price_info}>0 JBX + Ξ0</strong>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sm={12} className={classes.textCenter}>
          <FormControl className={classes.width100} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={<InputAdornment position="end"><span className={classes.marginRight10}>ETH</span><Button className={classes.max_button}>MAX</Button></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
            <FormHelperText className={classes.jbx_fee_input_info} id="outlined-weight-helper-text">Ξ10.95 after 0% JBX fee</FormHelperText>
          </FormControl>
        </Grid>
        <Grid className={classes.width100}>
          <p  className={classes.funds_distribute_content}>Funds will be distributed to:</p>
          <Grid className={classes.funds_user_info_content}>
            <Icon icon="clarity:user-line" className={classes.floatLeft}/><span className={classes.user_info_desc}> daotaifung.eth: until 12-0202021</span>
          </Grid>
          <Grid className={classes.user_info_percent}>
            100%
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>WITHDRAW</Button>
      </Grid>
    </div>
  );
}
