import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import NoImage from '../assets/Popup/no_image.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  marginTop5: {
    marginTop: 5
  },
  padding15: {
    padding: 15
  },
  textCenter: {
    textAlign: 'center'
  },
  marginBottom10: {
    marginBottom: 10
  },
  upload_img_button: {
    width: '80%',
    padding: 10, 
    marginTop: 5, 
    background: '#3c4755'
  },
  path_info: {
    marginTop: 15, 
    textAlign: 'left', 
    marginBottom: 15
  },
  path_color: {
    color: '#727285'
  },
  path_info_content: {
    border: '1px dotted #9496a4', 
    borderRadius: 4, 
    height: 'auto'
  }
}));

export default function ImageUpload() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid item className={classes.marginBottom10}>
        <strong>Add Image</strong>
      </Grid>
      <Grid container className={classes.path_info_content}>
        <Grid item xs={12} md={2}>
          <img src={NoImage} className={classes.padding15} alt=''></img>
        </Grid>
        <Grid container xs={12} md={10} className={classes.marginTop5}>
          <Grid item xs={12} md={3} sm={12} className={classes.textCenter}>
            <Button className={classes.upload_img_button}>Upload logo image</Button>
          </Grid>
          <Grid item xs={12} md={9} className={classes.path_info}>
            <span className={classes.path_color}>upload image style like jpg / png images are supported</span>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
