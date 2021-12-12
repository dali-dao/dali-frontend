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
import DoneIcon from '@material-ui/icons/Done';

interface selectedStep {
    selectedStepItem: boolean[];
    onSelectItem: (index: number) => void;
    confirmStepItem: boolean[];
}

function DesignStep ({selectedStepItem, onSelectItem, confirmStepItem}: selectedStep) {
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
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[0] ? classes.stepSelect : classes.step} onClick={selectItemFn0} container>
                <Grid item xs={12} className={confirmStepItem[0] ? classes.selectedNumber : selectedStepItem[0] ? classes.selectedNumber : classes.number}> {selectedStepItem[0] ? 1 : confirmStepItem[0] ? <DoneIcon /> : 1} </Grid>
                <Grid>
                    <img src={selectedStepItem[0] ? (localStorage.getItem('appTheme') === 'lightTheme' ? Appearance : AppearanceBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? AppearanceBlack : Appearance) } alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>APPEARANCE</Grid>
                <Grid className={classes.itemDesc}>Project name, handle, links, and other details.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[1] ? classes.stepSelect : classes.step} onClick={selectItemFn1} container>
                <Grid item xs={12} className={confirmStepItem[1] ? classes.selectedNumber : selectedStepItem[1] ? classes.selectedNumber : classes.number}> {selectedStepItem[1] ? 2 : confirmStepItem[1] ? <DoneIcon /> : 2} </Grid>
                <Grid>
                    <img src={selectedStepItem[1] ? (localStorage.getItem('appTheme') === 'lightTheme' ? Distribution : DistributionBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? DistributionBlack : Distribution) } alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>FUNDING</Grid>
                <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[2] ? classes.stepSelect : classes.step} onClick={selectItemFn2} container>
                <Grid item xs={12} className={confirmStepItem[2] ? classes.selectedNumber : selectedStepItem[2] ? classes.selectedNumber : classes.number}> {selectedStepItem[2] ? 3 : confirmStepItem[2] ? <DoneIcon /> : 3} </Grid>
                <Grid>
                    <img src={selectedStepItem[2] ? (localStorage.getItem('appTheme') === 'lightTheme' ? Funding : FundingBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? FundingBlack : Funding) } alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>DISTRIBUTION</Grid>
                <Grid className={classes.itemDesc}>How your project will earn and manage funds.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[3] ? classes.stepSelect : classes.step} onClick={selectItemFn3} container>
                <Grid item xs={12} className={confirmStepItem[3] ? classes.selectedNumber : selectedStepItem[3] ? classes.selectedNumber : classes.number}> {selectedStepItem[3] ? 4 : confirmStepItem[3] ? <DoneIcon /> : 4} </Grid>
                <Grid>
                    <img src={selectedStepItem[3] ? (localStorage.getItem('appTheme') === 'lightTheme' ? Incentives : IncentivesBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? IncentivesBlack : Incentives) } alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>RESERVED TOKENS</Grid>
                <Grid className={classes.itemDesc}>Reward specific community members with tokens.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[4] ? classes.stepSelect : classes.step} onClick={selectItemFn4} container>
                <Grid item xs={12} className={confirmStepItem[4] ? classes.selectedNumber : selectedStepItem[4] ? classes.selectedNumber : classes.number}> {selectedStepItem[4] ? 5 : confirmStepItem[4] ? <DoneIcon /> : 5} </Grid>
                <Grid>
                    <img src={selectedStepItem[4] ? (localStorage.getItem('appTheme') === 'lightTheme' ? Reconfiguration : ReconfigurationBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? ReconfigurationBlack : Reconfiguration) } alt="" />
                </Grid>
                <Grid className={classes.itemTitle} item xs={12}>RECONFIGURATION</Grid>
                <Grid className={classes.itemDesc}>Rules for how changes can be made to your project.</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item>
            <Grid className={selectedStepItem[5] ? classes.stepSelect : classes.step} onClick={selectItemFn5} container>
                <Grid item xs={12} className={confirmStepItem[5] ? classes.selectedNumber : selectedStepItem[5] ? classes.selectedNumber : classes.number}> {selectedStepItem[5] ? 6 : confirmStepItem[5] ? <DoneIcon /> : 6} </Grid>
                <Grid>
                    <img src={selectedStepItem[5] ? (localStorage.getItem('appTheme') === 'lightTheme' ? ReservedTokens : ReservedTokensBlack) : (localStorage.getItem('appTheme') === 'lightTheme' ? ReservedTokensBlack : ReservedTokens) } alt="" />
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
