import { useStyles } from "./styles";
import DesignStep from "../../DesignStep/designStep";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '../../../Other/CustomSlider';
import Chart from '../../../../assets/Design/chart.png';

interface selectedStepItem {
  items: boolean[];
  onSelectItem : (index: number) => void;
  confirmItems: boolean[];
}

function Incentives({items, onSelectItem, confirmItems}: selectedStepItem) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.title}>DESIGN YOUR PROJECT - INCENTIVES</Grid>
        <Grid><DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems}/></Grid>
        <Grid>
          <Card className={classes.card}>
            <CardHeader title="6. INCENTIVES" className={classes.cardHeader}></CardHeader>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Keyword here</Grid>
                <Grid item xs={8} className={classes.content}>
                    Discount rate disabled while funding cycle duration is 0.
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Discount rate</Grid>
                <Grid item xs={8} className={classes.content}>
                    <Slider />
                    The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.
                    <br/><br/>
                    Bonding curve disabled while no funding target is set.
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Bonding curve rate</Grid>
                <Grid container item xs={8} className={classes.content}>
                  <Grid xs={12} item><Slider /></Grid>
                  <Grid item xs={12} container style={{paddingTop: 10}}>
                      <Grid item xs={4}><img src={Chart} alt="chart"/></Grid>
                      <Grid item xs={8} style={{textAlign: 'justify'}}>
                        his rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hodl tokens longer than others. A bonding curve of 100% means all tokens will have equal value regardless of when they are redeemed. his rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hodl tokens longer than others. A bonding curve of 100% means all tokens will have equal value regardless of when they are redeemed.
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}></Grid>
                <Grid item xs={8} className={classes.content}>
                  <button className={classes.saveBtn}>SAVE</button> Cancel
                </Grid>
              </Grid>
          </Card>
        </Grid>
    </div>
  );
}

export default Incentives;
