import { useStyles } from "./styles";
import Grid from '@material-ui/core/Grid';
import Appearance from '../../../assets/Design/appearance.png';
import AppearanceBlack from '../../../assets/Design/appearance_black.png';
import Distribution from '../../../assets/Design/distribution.png';
import DistributionBlack from '../../../assets/Design/distribution_black.png';
import Funding from '../../../assets/Design/funding.png';
import FundingBlack from '../../../assets/Design/funding_black.png';
import Incentives from '../../../assets/Design/incentives.png';
import IncentivesBlack from '../../../assets/Design/incentives_black.png';
import Reconfiguration from '../../../assets/Design/reconfiguration.png';
import ReconfigurationBlack from '../../../assets/Design/reconfiguration_black.png';
import ReservedTokens from '../../../assets/Design/reservedTokens.png';
import ReservedTokensBlack from '../../../assets/Design/reservedTokens_black.png';

interface selectedStep {
    selectedStepItem: boolean[];
    onSelectItem: (index: number) => void;
}

function DesignStep ({selectedStepItem, onSelectItem}: selectedStep) {
  const classes = useStyles();

    const selectItemFn0 = () => {
        onSelectItem(0)
    }

    const selectItemFn1 = () => {
        onSelectItem(1)
    }

    const selectItemFn2 = () => {
        onSelectItem(2)
    }

    const selectItemFn3 = () => {
        onSelectItem(3)
    }

    const selectItemFn4 = () => {
        onSelectItem(4)
    }

    const selectItemFn5 = () => {
        onSelectItem(5)
    }

  return (
    <Grid container className={classes.root} spacing={1}>
        {/* <Grid item xs={2} className={selectedStepItem[0] ? classes.stepSelect : classes.step} onClick={selectItemFn0} container>
            <Grid item xs={12} className={selectedStepItem[0] ? classes.selectedNumber : classes.number}> 1 </Grid>
            <Grid>
                <img src={selectedStepItem[0] ? AppearanceBlack : Appearance} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>APPEARANCE</Grid>
            <Grid className={classes.itemDesc}>Project name, handle, links, and other details.</Grid>
        </Grid>
        <Grid item xs={2} className={selectedStepItem[1] ? classes.stepSelect : classes.step} onClick={selectItemFn1} container>
            <Grid item xs={12} className={selectedStepItem[1] ? classes.selectedNumber : classes.number}> 2 </Grid>
            <Grid>
                <img src={selectedStepItem[1] ? DistributionBlack : Distribution} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>FUNDING</Grid>
            <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
        </Grid>
        <Grid item xs={2} className={selectedStepItem[2] ? classes.stepSelect : classes.step} onClick={selectItemFn2} container>
            <Grid item xs={12} className={selectedStepItem[2] ? classes.selectedNumber : classes.number}> 3 </Grid>
            <Grid>
                <img src={selectedStepItem[2] ? FundingBlack : Funding} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>DISTRIBUTION</Grid>
            <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
        </Grid>
        <Grid item xs={2} className={selectedStepItem[3] ? classes.stepSelect : classes.step} onClick={selectItemFn3} container>
            <Grid item xs={12} className={selectedStepItem[3] ? classes.selectedNumber : classes.number}> 4 </Grid>
            <Grid>
                <img src={selectedStepItem[3] ? IncentivesBlack : Incentives} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>RESERVED TOKENS</Grid>
            <Grid className={classes.itemDesc}>Reward specific community members with tokens.</Grid>
        </Grid>
        <Grid item xs={2} className={selectedStepItem[4] ? classes.stepSelect : classes.step} onClick={selectItemFn4} container>
            <Grid item xs={12} className={selectedStepItem[4] ? classes.selectedNumber : classes.number}> 5 </Grid>
            <Grid>
                <img src={selectedStepItem[4] ? ReconfigurationBlack : Reconfiguration} alt="" />
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>RECONFIGURATION</Grid>
            <Grid className={classes.itemDesc}>Rules for how changes can be made to your project.</Grid>
        </Grid>
        <Grid item xs={2} className={selectedStepItem[5] ? classes.stepSelect : classes.step} onClick={selectItemFn5} container>
            <Grid item xs={12} className={selectedStepItem[5] ? classes.selectedNumber : classes.number}> 6 </Grid>
            <Grid>
                <img src={selectedStepItem[5] ? ReservedTokensBlack : ReservedTokens} alt=""/>
            </Grid>
            <Grid className={classes.itemTitle} item xs={12}>INCENTIVES</Grid>
            <Grid className={classes.itemDesc}>Adjust incentivizes for paying your project.</Grid>
        </Grid> */}
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[0] ? classes.stepSelect : classes.step} onClick={selectItemFn0} container>
                <Grid item xs={12} className={selectedStepItem[0] ? classes.selectedNumber : classes.number}> 1 </Grid>
                <Grid>
                    <img src={selectedStepItem[0] ? AppearanceBlack : Appearance} alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>APPEARANCE</Grid>
                <Grid className={classes.itemDesc}>Project name, handle, links, and other details.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[1] ? classes.stepSelect : classes.step} onClick={selectItemFn1} container>
                <Grid item xs={12} className={selectedStepItem[1] ? classes.selectedNumber : classes.number}> 2 </Grid>
                <Grid>
                    <img src={selectedStepItem[1] ? DistributionBlack : Distribution} alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>FUNDING</Grid>
                <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[2] ? classes.stepSelect : classes.step} onClick={selectItemFn2} container>
                <Grid item xs={12} className={selectedStepItem[2] ? classes.selectedNumber : classes.number}> 3 </Grid>
                <Grid>
                    <img src={selectedStepItem[2] ? FundingBlack : Funding} alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>DISTRIBUTION</Grid>
                <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[3] ? classes.stepSelect : classes.step} onClick={selectItemFn3} container>
                <Grid item xs={12} className={selectedStepItem[3] ? classes.selectedNumber : classes.number}> 4 </Grid>
                <Grid>
                    <img src={selectedStepItem[3] ? IncentivesBlack : Incentives} alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>RESERVED TOKENS</Grid>
                <Grid className={classes.itemDesc}>Reward specific community members with tokens.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[4] ? classes.stepSelect : classes.step} onClick={selectItemFn4} container>
                <Grid item xs={12} className={selectedStepItem[4] ? classes.selectedNumber : classes.number}> 5 </Grid>
                <Grid>
                    <img src={selectedStepItem[4] ? ReconfigurationBlack : Reconfiguration} alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>RECONFIGURATION</Grid>
                <Grid className={classes.itemDesc}>Rules for how changes can be made to your project.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[5] ? classes.stepSelect : classes.step} onClick={selectItemFn5} container>
                <Grid item xs={12} className={selectedStepItem[5] ? classes.selectedNumber : classes.number}> 6 </Grid>
                <Grid>
                    <img src={selectedStepItem[5] ? ReservedTokensBlack : ReservedTokens} alt=""/>
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>INCENTIVES</Grid>
                <Grid className={classes.itemDesc}>Adjust incentivizes for paying your project.</Grid>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
}

export default DesignStep;
