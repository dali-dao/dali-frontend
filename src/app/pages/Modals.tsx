import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ClaimDTF from '../components/Modal/ClaimDTF'
import Tools from '../components/Modal/Tools'
import Assets from '../components/Modal/Assets'
import AddPayout from '../components/Modal/AddPayout'
import AddTokenReceiver from '../components/Modal/AddTokenReceiver'
import SpiceHolders from '../components/Modal/SpiceHolders'

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    marginBottom: 20,
  },
}))

function Moals() {
  const classes = useStyles()
  return (
    <div style={{ margin: '0px 260px' }}>
      <SpiceHolders />
      <Grid className={classes.divider}></Grid>
      <ClaimDTF />
      <Grid className={classes.divider}></Grid>
      <Tools />
      <Grid className={classes.divider}></Grid>
      <Assets />
      <Grid className={classes.divider}></Grid>
      <AddPayout />
      <Grid className={classes.divider}></Grid>
      <AddTokenReceiver />
      <Grid className={classes.divider}></Grid>
    </div>
  )
}

export default Moals
