import React from 'react'
import { useStyles, IOSSwitch, IOSDurationSwitch } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Funding({ items, onSelectItem, confirmItems }: selectedStepItem) {
  const classes = useStyles()

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className={classes.responsiveStep}>
      <Grid className={classes.title}>DESIGN YOUR PROJECT</Grid>
      <Grid>
        <DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} />
      </Grid>
      <Grid className={classes.titleFontFamily}>
        2. FUNDING
        <Grid className={classes.subDescription}>How your project will earn and manage funds.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Target</span>
        <Grid className={classes.itemDescription}>
          No more than the target can be distributed from the project in a single funding cycle. Whenever a new
          funding cycle starts, any overflow automatically goes towards that cycle’s target amount, acting as a
          project’s runway.
          <br />
          <br />A funding target allows you to redistribute surplus revenue to your community. When a project’s
          balance is greater than its funding target, the overflow (surplus funds) can by redeemed by the
          community by burning their project tokens.
        </Grid>
        <Grid className={classes.itemDescription}>
          <FormControlLabel
            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            label="Set a funding target"
          />
        </Grid>
        <Grid className={classes.itemDescription}>
          No target : All funds can be distributed by the project, and the project will have no overflow. (This is
          the same as setting the target to infinity.)
        </Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Duration</span>
        <Grid className={classes.itemDescription}>
          This duration determines how long your funding cycles will last. No more than the target amount (if a
          target has been set) can be distributed by the project in a single funding cycle, and funding
          reconfigurations won’t take effect until the start of the next funding cycle.
        </Grid>
        <Grid className={classes.itemDescription}>
          <FormControlLabel
            control={<IOSDurationSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
            label="Set a funding cycle duration"
          />
        </Grid>
        <Grid className={classes.itemDescription}>
          Duration not set: Funding can be reconfigured at any time, which will start a new funding cycle.
        </Grid>
      </Grid>
      <Grid className={classes.saveBtnResponsive}>
        <button className={classes.saveBtn}>SAVE</button> <span className={classes.cancelBtn}>Cancel</span>
      </Grid>
    </div>
  )
}

export default Funding
