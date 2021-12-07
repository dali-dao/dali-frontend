import { useStyles } from "./styles";
import DesignStep from "../../DesignStep/designStep";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

interface selectedStepItem {
  items: boolean[];
  onSelectItem: (index: number) => void;
  confirmItems: boolean[];
}

function Reconfiguration({items, onSelectItem, confirmItems}: selectedStepItem) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.title}>DESIGN YOUR PROJECT - RECONFIGURATION</Grid>
        <Grid><DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems}/></Grid>
        <Grid>
          <Card className={classes.card}>
            <CardHeader title="5. RECONFIGURATION" className={classes.cardHeader}></CardHeader>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Keyword here</Grid>
                <Grid item xs={8} className={classes.content}>
                    Rules for how this project’s funding cycles can be reconfigured.
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Choose the any one options</Grid>
                <Grid item xs={8} className={classes.content}>
                  
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

export default Reconfiguration;
