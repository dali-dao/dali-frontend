import { useStyles } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import AddAPayout from '../../../Modal/AddPayout'
import Modal from '@material-ui/core/Modal'
import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Distribution({ items, onSelectItem, confirmItems }: selectedStepItem) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.responsiveStep}>
      <Grid className={classes.title}>DESIGN YOUR PROJECT</Grid>
      <Grid>
        <DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} />
      </Grid>
      <Grid className={classes.titleFontFamily}>
        3. DISTRIBUTION
        <Grid className={classes.subDescription}>How your project will distribute funds.</Grid>
      </Grid>
      <Grid container className={classes.paragrap}>
        <span className={classes.subTitle}>Keyword here</span>
        <Grid className={classes.itemDescription}>
          Payouts let you commit portions of every withdrawal to other Ethereum wallets or Juicebox projects. Use
          this to pay contributors, charities, other projects you depend on, or anyone else. Payouts will be
          distributed automatically whenever a withdrawal is made from your project.
          <br />
          <br />
          Payouts are optional. By default, all unallocated revenue will be withdrawable to the project owner’s
          wallet.
        </Grid>
        <Grid className={classes.percentLabel}>
          <span>Total: 0.00%</span>
          <span>100.00 % to</span>
        </Grid>
        <Grid>
          <button className={classes.payoutBtn} onClick={handleOpen}>
            ADD A PAYOUT
          </button>
        </Grid>
      </Grid>
      <Grid className={classes.saveBtnResponsive}>
        <button className={classes.saveBtn}>SAVE</button> <span className={classes.cancelBtn}>Cancel</span>
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
          <div style={{ width: '90%' }}>
            <AddAPayout />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Distribution
