import { useStyles } from "./styles";
import Appearance from '../../components/Design/DesignPages/Appearance/appearance';
import Funding from '../../components/Design/DesignPages/Funding/funding';
import Grid from '@material-ui/core/Grid';

function Design() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.container}>
            <Appearance />
            <Funding />
        </Grid>
    </div>
  );
}

export default Design;
