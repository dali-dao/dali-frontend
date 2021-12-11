import { useStyles } from "../../../../pages/Design/styles";
import DesignStep from "../../DesignStep/designStep";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import AddTokenReceiver from '../../../Modal/AddTokenReceiver';
import Modal from '@material-ui/core/Modal';
import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

interface selectedStepItem {
  items: boolean[];
  onSelectItem: (index: number) => void;
  confirmItems: boolean[];
}

function ReservedTokens({items, onSelectItem, confirmItems}: selectedStepItem) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.title}>DESIGN YOUR PROJECT - RESERVED TOKENS</Grid>
        <Grid><DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems}/></Grid>
        <Grid>
          <Card className={classes.card}>
            <CardHeader title="4. RESERVED TOKENS" className={classes.cardHeader}></CardHeader>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Keyword here</Grid>
                <Grid item xs={8} className={classes.content}>
                    Tokens are earned by anyone who pays your project, and can be redeemed for overflow if your project has set a funding target.
                    <br /><br/>
                    You’ll be able to issue ERC-20 tokens once your project contract has been deployed. Until then, your project will use staked tokens, allowing your supporters to still track their balance and redeem for overflow in the meantime.
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Reserved tokens</Grid>
                <Grid item xs={8} className={classes.content}>
                    <Grid></Grid>
                    <Grid>
                        Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can “mint” them, which distributes them to their intended receivers.
                    </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} className={classes.label}>Allocate reserved tokens(optional)</Grid>
                <Grid item xs={8} className={classes.content}>
                    <Grid className={classes.percentLabel}>
                        <span>Total: 0.00%</span>
                        <span>100.00 % to</span>
                    </Grid>
                    <Grid>
                        <button className={classes.payoutBtn} onClick={handleOpen}>ADD A PAYOUT</button>
                    </Grid>
                    <Grid>
                        Automatically distribute a portion of your project’s reserved tokens to other Juicebox projects or ETH wallets.
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
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
            <div style={{width: '60%'}}>
                <AddTokenReceiver />
            </div>
            </Fade>
        </Modal>
    </div>
  );
}

export default ReservedTokens;
