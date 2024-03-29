import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, FormControl, Select, Button } from '@material-ui/core'
import { Icon } from '@iconify/react'
import SpiceBalance from '../../components/SpiceBalance'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: '#fff',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
    position: 'absolute',
    width: '60%',
    top: 20,
    '@media(max-width: 1000px)': {
      width: '90%',
      left: '4%',
    },
  },
  //common class
  textRight: {
    textAlign: 'right',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  fontSize20: {
    fontSize: 20,
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
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
    color: theme.palette.success.main,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  formControl: {
    width: '98%',
    border: `1px solid ${theme.palette.info.main}`,
    marginBottom: 15,
    marginRight: 15,
    '@media(max-width: 960px)': {
      width: '100%',
    },
  },
  notice_desc: {
    color: '#c5c5ca',
    fontSize: 14,
  },
  point_color: {
    color: theme.palette.success.dark,
  },
  asset_button: {
    borderRadius: 0,
    width: '90%',
    height: 53,
    color: theme.palette.error.light,
    border: '1px solid #81899a',
    background: theme.palette.primary.main,
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-width: 960px)': {
      width: '100%',
      marginBottom: 20,
    },
  },
  select_tag: {
    borderRadius: 0,
  },
  load_more_button: {
    width: '100%',
    color: theme.palette.error.light,
    background: theme.palette.primary.main,
  },
}))

export default function SpiceHolders() {
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
        <strong className={classes.modal_header_title}>SPICE holders</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container className={classes.marginBottom20}>
          <span className={classes.notice_desc}>
            Notice: SPICE ERC20 tokens have not been indexed by Juicebox, meaning that the balances reflected below will
            be inaccurate for users who have unstaked and transfeered their tokens. This will be solved with the release
            of <span className={classes.point_color}>Juicebox V2</span>. If this is a big issue for your project, let us
            know in the <span className={classes.point_color}>Discord</span>.
          </span>
        </Grid>
        <Grid item xs={12} md={8}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              className={classes.select_tag}
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
        <Grid item xs={12} md={2}>
          <Grid className={classes.asset_button}>
            <Icon className={classes.fontSize20} icon="bi:sort-alpha-down" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <Grid className={classes.asset_button}>
            <Icon className={classes.fontSize20} icon="el:download-alt" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
          <SpiceBalance />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.load_more_button}>LOAD MORE</Button>
        </Grid>
      </Grid>
    </div>
  )
}
