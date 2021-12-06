import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import NoImage from '../assets/Popup/no_image.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ImageUpload() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid item style={{marginBottom: 10}}>
        <strong>Add Image</strong>
      </Grid>
      <Grid container style={{border: '1px dotted #9496a4', borderRadius: 4, height: 'auto'}}>
        <Grid item xs={12} md={2}>
          <img src={NoImage} style={{padding: 15}}></img>
        </Grid>
        <Grid container xs={12} md={10} style={{marginTop: 15}}>
          <Grid item xs={12} md={3} sm={12} style={{textAlign: 'center'}}>
            <Button style={{width: '90%',padding: 15, background: '#3c4755'}}>Upload logo image</Button>
          </Grid>
          <Grid item xs={12} md={9} style={{marginTop: 15, textAlign: 'left', marginBottom: 15}}>
            <span style={{color: '#727285'}}>upload image style like jpg / png images are supported</span>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
