import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import { Icon } from '@iconify/react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
  },
  //common class
  textRight: {
    textAlign: 'right',
  },
  width100: {
    width: '100%',
  },
  floatLeft: {
    float: 'left',
  },
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
    display: 'block',
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
    color: theme.palette.success.main,
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
    fontFamily: 'CerebriSansPro-ExtraBold',
  },
  available_content: {
    marginBottom: 5,
    textAlign: 'left',
  },
  funs_desc_header: {
    fontSize: 15,
    fontFamily: 'CerebriSansPro-ExtraBold',
    textAlign: 'left',
  },
  user_info_content: {
    width: '80%',
    float: 'left',
    color: '#919398',
  },
  user_info_detail: {
    fontSize: 13,
    width: 115,
    display: 'block',
  },
  user_info_percent: {
    fontSize: 14,
    float: 'right',
  },
}))

export default function DistributeReserved() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Distribute reserved DTF</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container xs={12} md={12} className={classes.available_content}>
          <Grid item xs={12} md={10}>
            <strong className={classes.project_price_info}>Available after fee:</strong>
          </Grid>
          <Grid className={classes.textRight} item xs={12} md={2}>
            <strong className={classes.project_price_info}>0 JBX + Ξ0</strong>
          </Grid>
        </Grid>
        <Grid className={classes.width100}>
          <p className={classes.funs_desc_header}>Funds will be distributed to:</p>
          <Grid className={classes.user_info_content}>
            <Icon icon="clarity:user-line" className={classes.floatLeft} />
            <span className={classes.user_info_detail}> daotaifung.eth: until 12-0202021</span>
          </Grid>
          <Grid className={classes.user_info_percent}>100%</Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>DISTRIBUTE</Button>
      </Grid>
    </div>
  )
}
