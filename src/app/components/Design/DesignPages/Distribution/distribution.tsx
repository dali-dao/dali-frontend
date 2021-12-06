import { useStyles } from "./styles";
import DesignStep from "../../DesignStep/designStep";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

interface selectedStepItem {
  items: boolean[];
  onSelectItem: (index: number) => void;
}

function Distribution({items, onSelectItem}: selectedStepItem) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.title}>DESIGN YOUR PROJECT - DISTRIBUTION</Grid>
        <Grid><DesignStep selectedStepItem={items} onSelectItem={onSelectItem}/></Grid>
        <Grid>
          <Card className={classes.card}>
            <CardHeader title="3. DISTRIBUTION" className={classes.cardHeader}></CardHeader>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Keyword here</Grid>
                <Grid item xs={8} className={classes.content} container>
                    <Grid>
                        Payouts let you commit portions of every withdrawal to other Ethereum wallets or Juicebox projects. Use this to pay contributors, charities, other projects you depend on, or anyone else. Payouts will be distributed automatically whenever a withdrawal is made from your project.
                        <br/><br/>
                        Payouts are optional. By default, all unallocated revenue will be withdrawable to the project owner’s wallet.
                    </Grid>
                    <Grid className={classes.percentLabel}>
                        <span>Total: 0.00%</span>
                        <span>100.00 % to</span>
                    </Grid>
                    <Grid>
                        <button className={classes.payoutBtn}>ADD A PAYOUT</button>
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

export default Distribution;
