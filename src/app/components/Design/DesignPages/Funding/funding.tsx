import React from 'react';
import { useStyles, IOSSwitch, IOSDurationSwitch } from "../../../../pages/Design/styles";
import DesignStep from "../../DesignStep/designStep";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface selectedStepItem {
  items: boolean[];
  onSelectItem: (index: number) => void;
  confirmItems: boolean[];
}

function Funding({items, onSelectItem, confirmItems} : selectedStepItem) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
        <Grid className={classes.title}>DESIGN YOUR PROJECT - FUNDING</Grid>
        <Grid><DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} /></Grid>
        <Grid>
          <Card className={classes.card}>
            <CardHeader title="2. FUNDING" className={classes.cardHeader}></CardHeader>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Target</Grid>
                <Grid item xs={8} className={classes.content}>
                  <Grid>
                    No more than the target can be distributed from the project in a single funding cycle. Whenever a new funding cycle starts, any overflow automatically goes towards that cycle’s target amount, acting as a project’s runway.
                    <br/><br/>
                    A funding target allows you to redistribute surplus revenue to your community. When a project’s balance is greater than its funding target, the overflow (surplus funds) can by redeemed by the community by burning their project tokens.
                  </Grid>
                  <Grid>
                    <FormControlLabel
                      control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                      label="Set a funding target"
                    />
                  </Grid>
                  <Grid>
                    No target :  All funds can be distributed by the project, and the project will have no overflow. 
                    (This is the same as setting the target to infinity.)
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Duration</Grid>
                <Grid item xs={8} className={classes.content}>
                  <Grid>
                    This duration determines how long your funding cycles will last. No more than the target amount (if a target has been set) can be distributed by the project in a single funding cycle, and funding reconfigurations won’t take effect until the start of the next funding cycle.
                  </Grid>
                  <Grid>
                    <FormControlLabel
                      control={<IOSDurationSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                      label="Set a funding cycle duration"
                    />
                  </Grid>
                  <Grid>
                    Duration not set: Funding can be reconfigured at any time, which will start a new funding cycle.
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

export default Funding;
