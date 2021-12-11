import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import HeadsUp from '../components/Modal/HeadsUp';
import PayDAOTailFung from '../components/Modal/PayDAOTailFung';
import DesignPreview from '../components/Modal/DesignPreview';
import OpenWallet from '../components/Modal/OpenWallet';
import WithdrawFunds from '../components/Modal/WithdrawFunds';
import DistributeReserved from '../components/Modal/DistributeReserved';
import ManageDTFToken from '../components/Modal/ManageDTFToken';
import BurnDTF from '../components/Modal/BurnDTF';
import ClaimDTF from '../components/Modal/ClaimDTF';
import Tools from '../components/Modal/Tools';
import Assets from '../components/Modal/Assets';
import AddPayout from '../components/Modal/AddPayout';
import AddTokenReceiver from '../components/Modal/AddTokenReceiver';
import SpiceHolders from '../components/Modal/SpiceHolders';

const useStyles = makeStyles((theme: Theme) => ({
    divider: {
        marginBottom: 20
    }
  }));

function Moals() {
    const classes = useStyles();
    return (
    <div style={{margin: '0px 260px'}}>
      <Grid className={classes.divider}></Grid>
      <DesignPreview />
      <Grid className={classes.divider}></Grid>
      <HeadsUp />
      <Grid className={classes.divider}></Grid>
      <PayDAOTailFung />
      <Grid className={classes.divider}></Grid>
      
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
      <Grid className={classes.divider}></Grid>
      <ClaimDTF />
      <Grid className={classes.divider}></Grid>
      <Tools />
      <Grid className={classes.divider}></Grid>
      <Assets />
      <Grid className={classes.divider}></Grid>
      <AddPayout />
      <Grid className={classes.divider}></Grid>
      <AddTokenReceiver />
      <Grid className={classes.divider}></Grid>
      <SpiceHolders />
    </div>
  );
}

export default Moals;
