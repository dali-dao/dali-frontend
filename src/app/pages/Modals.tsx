import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import HeadsUp from '../components/Modal/HeadsUp';
import PayDAOTailFung from '../components/Modal/PayDAOTailFung';
import DesignPreview from '../components/Modal/DesignPreview';

const useStyles = makeStyles((theme: Theme) => ({
    divider: {
        marginBottom: 20
    }
  }));

function Moals() {
    const classes = useStyles();
    return (
    <div>
      <Grid className={classes.divider}></Grid>
      <DesignPreview />
      <Grid className={classes.divider}></Grid>
      <HeadsUp />
      <Grid className={classes.divider}></Grid>
      <PayDAOTailFung />
      <Grid className={classes.divider}></Grid>
    </div>
  );
}

export default Moals;
