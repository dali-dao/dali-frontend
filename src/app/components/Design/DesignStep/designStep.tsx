import { useStyles } from "./styles";
import Grid from '@material-ui/core/Grid';
import Appearance from '../../../assets/Design/appearance.png';
import Distribution from '../../../assets/Design/distribution.png';
import Funding from '../../../assets/Design/funding.png';
import Incentives from '../../../assets/Design/incentives.png';
import Reconfiguration from '../../../assets/Design/reconfiguration.png';
import ReservedTokens from '../../../assets/Design/reservedTokens.png';

function DesignStep() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <Grid item xs={2} className={classes.stepSelect} container>
            <Grid>
                <img src={Appearance} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>APPEARANCE</Grid>
            <Grid className={classes.itemDesc}>Project name, handle, links, and other details.</Grid>
        </Grid>
        <Grid item xs={2} className={classes.step} container>
            <Grid>
                <img src={Distribution} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>FUNDING</Grid>
            <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
        </Grid>
        <Grid item xs={2} className={classes.step} container>
            <Grid>
                <img src={Funding} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>DISTRIBUTION</Grid>
            <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
        </Grid>
        <Grid item xs={2} className={classes.step} container>
            <Grid>
                <img src={Incentives} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>RESERVED TOKENS</Grid>
            <Grid className={classes.itemDesc}>Reward specific community members with tokens.</Grid>
        </Grid>
        <Grid item xs={2} className={classes.step} container>
            <Grid>
                <img src={Reconfiguration} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>RECONFIGURATION</Grid>
            <Grid className={classes.itemDesc}>Rules for how changes can be made to your project.</Grid>
        </Grid>
        <Grid item xs={2} className={classes.step} container>
            <Grid>
                <img src={ReservedTokens} alt=""/>
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>INCENTIVES</Grid>
            <Grid className={classes.itemDesc}>Adjust incentivizes for paying your project.</Grid>
        </Grid>
    </Grid>
  );
}

export default DesignStep;
