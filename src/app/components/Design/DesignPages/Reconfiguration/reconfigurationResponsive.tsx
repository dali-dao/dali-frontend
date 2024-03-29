import { useStyles, BootstrapInput } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import DoneIcon from '@material-ui/icons/Done'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Reconfiguration({ items, onSelectItem, confirmItems }: selectedStepItem) {
  const classes = useStyles()

  return (
    <div className={classes.responsiveStep}>
      <Grid className={classes.titleRes}>DESIGN YOUR PROJECT</Grid>
      <Grid>
        <DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} />
      </Grid>
      <Grid className={classes.titleFontFamilyRes}>
        5. RECONFIGURATION
        <Grid className={classes.subDescription}>Rules for how changes can be made to your project.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Keyword here</span>
        <Grid className={classes.itemDescription}>Rules for how this project’s funding cycles can be reconfigured.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        Choose the any one options
        <Grid item xs={12} container className={classes.delayContent}>
          <Grid item xs={2} className={classes.delayContentLeft}>
            <Grid className={classes.delayContentActiveOption}>
              <DoneIcon />
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid className={classes.delayContentTitle}>No strategy</Grid>
            <Grid className={classes.delayContentDesc}>
              Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A
              project with no strategy may be vulnerable to being rug-pulled by its owner.
            </Grid>
            <Grid className={classes.delayContentValue}>
              Contract address: 0x0000000000000000000000000000000000000000
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.delayContent}>
          <Grid item xs={2} className={classes.delayContentLeft}>
            <Grid className={classes.delayContentOption}></Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid className={classes.delayContentTitle}>7-delay</Grid>
            <Grid className={classes.delayContentDesc}>
              A reconfiguration to an upcoming funding cycle must be submitted at least 7 days before it starts.
            </Grid>
            <Grid className={classes.delayContentValue}>
              Contract address: 0x0000000000000000000000000000000000000000
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.delayContent}>
          <Grid item xs={2} className={classes.delayContentLeft}>
            <Grid className={classes.delayContentOption}></Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid className={classes.delayContentTitle}>3-delay</Grid>
            <Grid className={classes.delayContentDesc}>
              A reconfiguration to an upcoming funding cycle must be submitted at least 3 days before it starts.
            </Grid>
            <Grid className={classes.delayContentValue}>
              Contract address: 0x0000000000000000000000000000000000000000
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.delayContent}>
          <Grid item xs={2} className={classes.delayContentLeft}>
            <Grid className={classes.delayContentOption}></Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid className={classes.delayContentTitle}>Custom strategy</Grid>
            <BootstrapInput
              id="bootstrap-input"
              placeholder="564897564123654899631456632466"
              style={{ margin: '5px 0px' }}
            />
            <Grid className={classes.delayContentValue}>
              The address of any smart contract deployed on that implements this interface.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.saveBtnResponsive}>
        <button className={classes.saveBtn}>SAVE</button> <span className={classes.cancelBtn}>Cancel</span>
      </Grid>
      <Grid style={{height: 20, display: 'flex'}}><span></span></Grid>
    </div>
  )
}

export default Reconfiguration
