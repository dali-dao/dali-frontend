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
  modal_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    display: 'block',
    textAlign: 'left',
    padding: '25px 40px',
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  juice_box: {
    color: theme.palette.success.dark,
    fontSize: 13,
  },
  modal_description: {
    fontSize: 13,
    textAlign: 'left',
    color: theme.palette.success.main,
  },
  button_style: {
    border: '1px solid #596275',
    background: theme.palette.primary.main,
    display: 'block',
    marginTop: 20,
    color: theme.palette.error.light,
    padding: '10px 40px',
  },
}))

export default function HeadsUp() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>HEADS UP</strong>
      </Grid>
      <Grid container className={classes.modal_content}>
        <span className={classes.juice_box}>Juicebox </span>
        <span className={classes.modal_description}>
          contracts are unaudited, and may be vulnerable to bugs or hacks. All funds moved through Juicebox could be
          lost or stolen. JuceboxDAO is not liable for any losses by projects or their supporters.
        </span>
        <Button className={classes.button_style}>I UNDERSTAND</Button>
      </Grid>
    </div>
  )
}
