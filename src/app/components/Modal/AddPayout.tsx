import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, Select, TextField, Button } from '@material-ui/core';
import CustomSlider from '../Other/CustomSlider';
import Calendar from '../../components/Calendar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: '#fff',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textLeft: {textAlign: 'left'}, 
  textRight: {textAlign: 'right'}, 
  textCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  marginTop10:{marginTop: 10},
  marginTop20:{marginTop: 20},
  marginTop30:{marginTop: 30},
  marginTop40:{marginTop: 40},
  marginTop50:{marginTop: 50},
  marginBottom5:{marginBottom: 5},
  marginBottom10:{marginBottom: 10},
  marginBottom15:{marginBottom: 15},
  marginBottom20:{marginBottom: 20},
  marginBottom30:{marginBottom: 30},
  marginBottom40:{marginBottom: 40},
  marginBottom50:{marginBottom: 50},
  marginLeft10:{marginLeft: 10},
  marginLeft20:{marginLeft: 20},
  marginLeft30:{marginLeft: 30},
  marginLeft40:{marginLeft: 40},
  marginLeft50:{marginLeft: 50},
  marginRight10:{marginRight: 10},
  marginRight20:{marginRight: 20},
  marginRight30:{marginRight: 30},
  marginRight40:{marginRight: 40},
  marginRight50:{marginRight: 50},
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
    width: 145, 
    height: 50, 
    color: '#000'
  },
  formControl: {
    width: '100%',
    marginBottom: 15
  },
  selectEmpty: {
  },
  project_handle_lb: {
    width: '100%', 
    marginTop: 10
  },
  lock_until_desc: {
    color: '#c5c5ca', 
    fontSize: 14
  },
  address_lb: {
    color: '#c5c5ca', 
    fontSize: 15, 
    marginTop: 10
  },
  calendar: {
    padding: '10px 0px'
  }
}));

export default function AddPayout() {
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
        <strong className={classes.modal_header_title}>Add a payout</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
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

        <Grid container>
          <span>* Project handle</span>
          <TextField className={classes.project_handle_lb} id="outlined-basic" label="Juicebox Project" variant="outlined" />
        </Grid>

        <Grid container className={classes.marginTop20}>
          <span>Address</span>
          <TextField className={classes.project_handle_lb} id="outlined-basic" label="Juicebox Project" variant="outlined" />
          <span className={classes.address_lb}>The address that should receive the tokens minted from paying this project.</span>
        </Grid>

        <Grid container className={classes.marginTop20}>
          <Grid item xs={12} md={12}>Percent</Grid>
          <CustomSlider />
        </Grid>

        <Grid container className={classes.marginTop20}>
          <Grid item xs={12} md={12}>Lock until</Grid>
          <Grid item xs={12} md={3} className={classes.calendar}>
            <Calendar />
          </Grid>
          <Grid className={classes.lock_until_desc} item xs={12} md={12}>If locked, this can't be edited or removed until the lock expires or the funding cycle is reconfigured.</Grid>
        </Grid>
      </Grid>
      
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>OK</Button>
      </Grid>
    </div>
  );
}
