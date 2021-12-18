import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: '0px 0px 10px 10px #0c0f16',
  },
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
    fontFamily: 'CerebriSansPro-ExtraBold',
  },
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    textAlign: 'left',
  },

  button_content: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  right_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    width: 230,
    height: 50,
    color: '#000',
  },
  other_assets_header: {
    fontSize: 17,
    color: '#c5c5ca',
    marginBottom: 20,
  },
  jbx_left_content: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 15,
  },
}))

export default function Assets() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Assets</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid item xs={12} md={12} className={classes.other_assets_header}>
          Other assets in this projet's owner's wallet.
        </Grid>
        <Grid item xs={12} md={5} className={classes.jbx_left_content}>
          0 JBX
        </Grid>
        <Grid item xs={12} md={7} className={classes.jbx_left_content}>
          @juicebox
        </Grid>
      </Grid>

      <Grid container className={classes.button_content}>
        <Button className={classes.right_button}>DONE</Button>
      </Grid>
    </div>
  )
}
