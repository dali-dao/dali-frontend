import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import NoImage from '../assets/Popup/no_image.png'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  marginTop5: {
    marginTop: 5,
  },
  padding15: {
    padding: 15,
  },
  textCenter: {
    textAlign: 'center',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  upload_img_button: {
    marginTop: 15,
    height: 50,
    padding: 10,
    background: theme.palette.primary.main,
    color: theme.palette.error.light,
  },
  path_info: {
    marginTop: 15,
    textAlign: 'left',
    marginBottom: 15,
  },
  path_color: {
    color: '#727285',
    marginLeft: 10,
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingTop: 15,
  },
  path_info_content: {
    border: '1px dotted #9496a4',
    borderRadius: 4,
    height: 'auto',
  },
  add_image_title: {
    color: theme.palette.error.light,
  },
}))

export default function ImageUpload() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid item className={classes.marginBottom10}>
        <strong className={classes.add_image_title}>Add Image</strong>
      </Grid>
      <Grid container className={classes.path_info_content}>
        <Grid item xs={12} md={2}>
          <img src={NoImage} className={classes.padding15} alt=""></img>
        </Grid>
        <Grid item xs={12} md={10} sm={12}>
          <Button className={classes.upload_img_button}>Upload logo image</Button>
          <span className={classes.path_color}>upload image style like jpg / png images are supported</span>
        </Grid>
      </Grid>
    </div>
  )
}
