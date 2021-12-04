import { useStyles } from "./styles";
import Appearance from '../../components/Design/DesignPages/Appearance/appearance';
import Grid from '@material-ui/core/Grid';

function Design() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.container}>
            <Appearance />
        </Grid>
    </div>
  );
}

export default Design;
