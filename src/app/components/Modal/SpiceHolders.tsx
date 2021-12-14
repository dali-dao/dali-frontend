import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, Select, Button } from '@material-ui/core';
import { Icon } from '@iconify/react'; 
import SpiceBalance from '../../components/SpiceBalance';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: '#fff',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textRight: {
    textAlign: 'right'
  },
  marginBottom20:{
    marginBottom: 20
  },
  fontSize25: {
    fontSize: 25
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
    borderBottomRightRadius: 5, 
    borderBottomLeftRadius: 5,
  },
  left_button: {
    color: '#fff', 
    border: '1px solid #596275',
    borderRadius: 5, 
    marginRight: 20, 
    width: 145, 
    height: 50
  },
  right_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', 
    width: 230, 
    height: 50, 
    color: '#000'
  },
  formControl: {
    width: '100%',
    marginBottom: 15,
    marginRight: 15
  },
  notice_desc: {
    color: '#c5c5ca', 
    fontSize: 14
  },
  point_color: {
    color: '#ffc926'
  },
  asset_button: {
    borderRadius: 0, 
    width: 50, 
    height: 50, 
    border: '1px solid #81899a', 
    background: '#2c333f'
  }
}));

export default function SpiceHolders() {
  const classes = useStyles();
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>SPICE holders</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container className={classes.marginBottom20}>
          <span className={classes.notice_desc}>Notice: SPICE ERC20 tokens have not been indexed by Juicebox, meaning that the balances reflected below will be inaccurate for users who have unstaked and transfeered their tokens. This will be solved with the release of <span className={classes.point_color}>Juicebox V2</span>. If this is a big issue for your project, let us know in the <span className={classes.point_color}>Discord</span>.</span>
        </Grid>
        <Grid item  xs={12} md={10}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value={0}>Juicebox Project</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={1} className={classes.textRight}>
          <Button className={classes.asset_button}>
            <Icon className={classes.fontSize25} icon="bi:sort-alpha-down" />
          </Button>
        </Grid>
        <Grid item xs={12} md={1} className={classes.textRight}>
          <Button className={classes.asset_button}>
            <Icon className={classes.fontSize25} icon="el:download-alt" />
          </Button>
        </Grid>
        <Grid item xs={12} md={12} >
          <SpiceBalance/>
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>OK</Button>
      </Grid>
    </div>
  );
}
