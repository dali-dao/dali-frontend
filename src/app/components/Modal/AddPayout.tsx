import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, FormControl, Select, TextField, Button } from '@material-ui/core'
import CustomSlider from '../Other/CustomSlider'
import Calendar from '../../components/Calendar'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: theme.palette.error.light,
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    marginTop: 150,
    marginBottom: 50,
    borderRadius: 5,
  },
  //common class
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  textCenter: { textAlign: 'center' },
  width100: { width: '100%' },
  marginTop20: { marginTop: 20 },
  floatLeft: {
    float: 'left',
  },
  //component class
  modal_header: {
    background: theme.palette.common.white,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottom: `1px solid ${theme.palette.info.main}`,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
  },
  project_info_1: {
    background: theme.palette.background.paper,
    padding: '25px 40px',
    textAlign: 'left',
    borderBottom: `1px solid ${theme.palette.info.main}`,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },

  button_content: {
    background: theme.palette.background.paper,
    padding: '25px 40px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  left_button: {
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: 5,
    marginRight: 20,
    width: 145,
    height: 50,
    color: theme.palette.error.light,
  },
  right_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    width: 145,
    height: 50,
    color: '#000',
  },
  formControl: {
    width: '100%',
    marginBottom: 15,
  },
  selectEmpty: {},
  project_handle_lb: {
    width: '100%',
    marginTop: 10,
    color: '#c5c5ca',
  },
  lock_until_desc: {
    color: '#c5c5ca',
    fontSize: 13,
  },
  address_lb: {
    color: '#c5c5ca',
    fontSize: 15,
    marginTop: 10,
  },
  calendar: {
    padding: '10px 0px',
  },
}))

export default function AddPayout() {
  const classes = useStyles()
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  })

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

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
          <TextField
            className={classes.project_handle_lb}
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            label="project name"
          />
        </Grid>

        <Grid container className={classes.marginTop20}>
          <span>Address</span>
          <TextField className={classes.project_handle_lb} id="outlined-basic" variant="outlined" label="address" />
          <span className={classes.address_lb}>
            The address that should receive the tokens minted from paying this project.
          </span>
        </Grid>

        <Grid container className={classes.marginTop20}>
          <Grid item xs={12} md={12}>
            Percent
          </Grid>
          <CustomSlider />
        </Grid>

        <Grid container className={classes.marginTop20}>
          <Grid item xs={12} md={12}>
            Lock until
          </Grid>
          <Grid item xs={12} md={3} className={classes.calendar}>
            <Calendar />
          </Grid>
          <Grid className={classes.lock_until_desc} item xs={12} md={12}>
            If locked, this can't be edited or removed until the lock expires or the funding cycle is reconfigured.
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.button_content}>
        <Button className={classes.left_button}>CANCEL</Button>
        <Button className={classes.right_button}>OK</Button>
      </Grid>
    </div>
  )
}
