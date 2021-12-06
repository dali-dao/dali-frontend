import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, Select, TextField, Slider, ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },//common class
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  //component class
  modal_header: {
    background: '#2c333f',
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '20px 0px 20px 30px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '20px 20px 10px 20px',
    textAlign: 'left'
  },
  formControl: {
    width: '100%',
    marginBottom: 15
  },
  selectEmpty: {
  },
}));

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
        color: "#f7db0e",
        height: 20,
        width: 20,
        border: '2px solid #000'
      },
      track: {
        color: '#425064',
        height: 10,
        borderRadius: 5
      },
      rail: {
        color: '#2c333f',
        height: 10,
        borderRadius: 5,
        border: '1px solid #425064'
      }
    }
}
});

export default function AddPayment() {
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

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const [value, setValue] = React.useState<number | string | Array<number | string>>(0);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
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
          <TextField style={{width: '100%', marginTop: 10}} id="outlined-basic" label="Juicebox Project" variant="outlined" />
        </Grid>

        <Grid container style={{marginTop:15}}>
          <span>Address</span>
          <TextField style={{width: '100%', marginTop: 10}} id="outlined-basic" label="Juicebox Project" variant="outlined" />
          <span style={{color: '#c5c5ca', fontSize: 15, marginTop: 10}}>The address that should receive the tokens minted from paying this project.</span>
        </Grid>

        <Grid container style={{marginTop:15}}>
          <Grid item xs={12} md={12}>Percent</Grid>
          <Grid item xs={12} md={11}>
            <ThemeProvider theme={muiTheme}>
              <Slider 
                style={{width: '97%'}}
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={1}>
            <TextField 
              id="outlined-basic" 
              variant="outlined" 
              value={value}
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                min: 0,
                max: 100,
                style: {color: 'white', textAlign: 'center'},
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>

        <Grid container style={{marginTop:15}}>
          <Grid item xs={12} md={12}>Lock until</Grid>
          <Grid item xs={12} md={3}>
            
          </Grid>
          <Grid style={{color: '#c5c5ca', fontSize: 14}} item xs={12} md={12}>If locked, this can't be edited or removed until the lock expires or the funding cycle is reconfigured.</Grid>
        </Grid>
      </Grid>
      
      <Grid container className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
        <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 200, color: '#000'}}>OK</Button>
      </Grid>
    </div>
  );
}
