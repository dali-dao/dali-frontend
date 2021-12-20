import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core'
import CustomSlider from '../Other/CustomSlider'
import Calendar from '../../components/Calendar'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: theme.palette.error.light,
    borderRadius: 5,
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
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
    borderBottom: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    textAlign: 'left',
  },

  button_content: {
    background: theme.palette.background.paper,
    padding: '25px 40px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  left_button: {
    border: '1px solid #596275',
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
  beneficiary_text: {
    width: '100%',
    marginTop: 10,
    color: theme.palette.error.light,
  },
  address_receive_token_desc: {
    color: '#c5c5ca',
    fontSize: 15,
    marginTop: 10,
  },
  locked_desc: {
    color: '#c5c5ca',
    fontSize: 14,
  },
  calendar: {
    padding: '10px 0px',
  },
}))

export default function AddTokenReceiver() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Add token receiver</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Grid container className={classes.marginTop20}>
          <span>Beneficiary</span>
          <TextField className={classes.beneficiary_text} label="Juicebox Project" variant="outlined" />
          <span className={classes.address_receive_token_desc}>The address that should receive the tokens.</span>
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
          <Grid className={classes.locked_desc} item xs={12} md={12}>
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
