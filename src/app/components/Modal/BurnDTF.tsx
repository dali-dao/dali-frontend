import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

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
    display: 'block',
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
    color: theme.palette.success.main,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },

  button_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  left_button: {
    color: theme.palette.error.light,
    background: theme.palette.primary.main,
    border: '1px solid #596275',
    borderRadius: 5,
    marginRight: 20,
    width: 145,
    height: 50,
  },
  right_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    width: 230,
    height: 50,
    color: '#000',
  },
  project_price_info: {
    fontSize: 13,
  },
  balance_content: {
    textAlign: 'left',
    marginBottom: 5,
  },
  balance_content_desc: {
    textAlign: 'left',
    color: theme.palette.success.contrastText,
    marginBottom: 5,
  },
  dft_first_line: {
    marginLeft: 10,
    marginRight: 10,
  },
  dft_second_line: {
    marginBottom: 15,
    textAlign: 'left',
  },
  tokens_desc: {
    width: '100%',
    color: '#c5c6ca',
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'left',
  },
  balance_desc_line: {
    width: '100%',
    color: '#c5c6ca',
    fontSize: 13,
    textAlign: 'left',
  },
}))

interface burnDTF {
  handleClose: () => void
}

export default function BurnDTF({handleClose}: burnDTF) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Burn DTF tokens for ETH</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container item xs={12} md={12} className={classes.balance_content}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>
              Balance<span className={classes.dft_first_line}>:</span>0 DTF
            </strong>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={12} className={classes.dft_second_line}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>
              Currently worth<span className={classes.dft_first_line}>:</span>Ξ0
            </strong>
          </Grid>
        </Grid>

        <Grid className={classes.tokens_desc}>
          <span>
            Tokens can be redeemed for a portion of this project’s ETH overflow, according to the bonding curve rate of
            the current funding cycle.
          </span>
          <span className={classes.balance_content_desc}>Tokens are burned when they are redeemed.</span>
        </Grid>
        <Grid className={classes.balance_desc_line}>You can redeem tokens once this project has overflow.</Grid>
      </Grid>

      <Grid container className={classes.button_content}>
        <Button className={classes.left_button} onClick={handleClose}>CANCEL</Button>
        <Button className={classes.right_button}>BURN 0 DTF FOR ETH</Button>
      </Grid>
    </div>
  )
}
