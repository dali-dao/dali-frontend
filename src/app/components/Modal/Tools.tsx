import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
    position: 'absolute',
    width: '60%',
    top: 20,
    '@media(max-width: 1000px)': {
      width: '90%',
      left: '4%'
    },
  },
  width100: {
    width: '100%',
  },
  marginBottom20: { marginBottom: 20 },
  //component class
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
    color: theme.palette.error.light,
  },
  project_info_1: {
    padding: '40px',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    textAlign: 'left',
    borderTop: 0,
    color: theme.palette.success.main,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  button_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderTop: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  input_outline: {
    paddingRight: 0,
    height: 40,
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: 0,
  },
  transfer_ownership_header: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    width: '100%',
  },
  ownership_info: {
    fontSize: 13,
    color: '#c5c6ca',
  },
  ownership_info_addr: {
    fontSize: 13,
    color: '#c5c6ca',
    wordBreak: 'break-all',
    marginLeft: 5,
  },
  trasfor_content: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  transfor_to_header: {
    marginBottom: 10,
    display: 'block',
  },
  transfer_ownership_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    color: '#000',
    marginTop: 20,
    width: 230,
    height: 50,
  },
  skated_dtf_header: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    width: '100%',
  },
  balance_value: {
    fontSize: 13,
    color: '#c5c6ca',
  },
  amount_label: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 14,
  },
  input_content: {
    width: '90%',
    marginTop: 10,
  },
  max_button: {
    borderRadius: 0,
    color: theme.palette.error.light,
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.primary.main,
  },
  transfer_dtf_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    color: '#000',
    marginTop: 20,
    width: 230,
    height: 50,
  },
  to_label: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 14,
  },
  input_content_form: {
    width: '100%',
    marginTop: 10,
  },
  add_to_label: {
    color: theme.palette.success.main,
    fontFamily: 'CerebriSansPro-ExtraBold',
    width: '100%',
    textAlign: 'left',
  },
  add_funds_des: {
    fontSize: 13,
    color: '#c5c6ca',
  },
  amount_content: {
    color: theme.palette.success.main,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  amount_button: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    marginBottom: 10,
    display: 'block',
  },
  eth_button: {
    borderRadius: 0,
    color: theme.palette.error.light,
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.primary.main,
  },
  add_to_balance_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    color: '#000',
    marginTop: 20,
    width: 230,
    height: 50,
    textAlign: 'left',
  },
}))

export default function Tools() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Tools</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <p className={classes.transfer_ownership_header}>TRANSFER OWNERSHIP</p>
        <span className={classes.ownership_info}>Current owner</span>
        <span className={classes.ownership_info_addr}>:</span>
        <span className={classes.ownership_info_addr}>0xf5C3BfF123277e4d620740C85DaafF0aF60AeF84</span>
        <Grid className={classes.trasfor_content}>
          <span className={classes.transfor_to_header}>TO</span>
          <FormControl className={classes.width100} variant="outlined">
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
          <Button className={classes.transfer_ownership_button}>TRANSFER OWNERSHIP</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid item xs={12} className={classes.marginBottom20}>
          <p className={classes.skated_dtf_header}>TRANSFER STAKED DTF</p>
          <span className={classes.balance_value}>Your balance: 0</span>
        </Grid>
        <Grid item xs={12} md={5}>
          <span className={classes.amount_label}>AMOUNT</span>
          <FormControl className={classes.input_content} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={
                <InputAdornment position="end">
                  <Button className={classes.max_button}>MAX</Button>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
          </FormControl>
          <Button className={classes.transfer_dtf_button}>TRANSFER DTF</Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <span className={classes.to_label}>TO</span>
          <FormControl className={classes.input_content_form} variant="outlined">
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

      <Grid container className={classes.button_content}>
        <p className={classes.add_to_label}>ADD TO BALANCE</p>
        <span className={classes.add_funds_des}>Add funds to this project's balance without minting tokens.</span>
        <Grid className={classes.amount_content}>
          <span className={classes.amount_button}>AMOUNT</span>
          <FormControl className={classes.width100} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.input_outline}
              endAdornment={
                <InputAdornment position="end">
                  <Button className={classes.eth_button}>ETH</Button>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'Ξ10.95 after 0% JBX fee',
              }}
              placeholder={'125USD'}
            />
          </FormControl>
          <Button className={classes.add_to_balance_button}>ADD TO BALANCE</Button>
        </Grid>
      </Grid>
    </div>
  )
}
