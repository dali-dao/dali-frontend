import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import HeadsUp from '../components/Modal/HeadsUp';
import PayDAOTailFung from '../components/Modal/PayDAOTailFung';
import DesignPreview from '../components/Modal/DesignPreview';
import SelectWallet from '../components/Modal/SelectWallet';
import OpenWallet from '../components/Modal/OpenWallet';
import WithdrawFunds from '../components/Modal/WithdrawFunds';
import DistributeReserved from '../components/Modal/DistributeReserved';
import ManageDTFToken from '../components/Modal/ManageDTFToken';
import BurnDTF from '../components/Modal/BurnDTF';

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
      <SelectWallet />
      <Grid className={classes.divider}></Grid>
      <OpenWallet />
      <Grid className={classes.divider}></Grid>
      <WithdrawFunds />
      <Grid className={classes.divider}></Grid>
      <DistributeReserved />
      <Grid className={classes.divider}></Grid>
      <ManageDTFToken />
      <Grid className={classes.divider}></Grid>
      <BurnDTF />
    </div>
  );
}

export default Moals;
