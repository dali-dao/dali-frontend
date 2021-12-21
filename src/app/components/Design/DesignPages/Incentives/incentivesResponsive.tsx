import { useStyles } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import Slider from '../../../Other/CustomSlider'
import Chart from '../../../../assets/Design/chart.png'
import DesignPreview from '../../../Modal/DesignPreview'
import Modal from '@material-ui/core/Modal'
import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Incentives({ items, onSelectItem, confirmItems }: selectedStepItem) {
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
        6. INCENTIVES
        <Grid className={classes.subDescription}>Adjust incentivizes for paying your project.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Keyword here</span>
        <Grid className={classes.itemDescription}>Discount rate disabled while funding cycle duration is 0.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Discount rate</span>
        <Slider />
        <Grid className={classes.itemDescription}>The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding
        cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.
        <br />
        <br />
        Bonding curve disabled while no funding target is set.
        </Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Bonding curve rate</span>
        <Slider />
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <img src={Chart} alt="chart" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} style={{ textAlign: 'justify' }} className={classes.itemDescription}>
            his rate determines the amount of overflow that each token can be redeemed for at any given time. On a
            lower bonding curve, redeeming a token increases the value of each remaining token, creating an
            incentive to hodl tokens longer than others. A bonding curve of 100% means all tokens will have equal
            value regardless of when they are redeemed. his rate determines the amount of overflow that each token
            can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value
            of each remaining token, creating an incentive to hodl tokens longer than others. A bonding curve of
            100% means all tokens will have equal value regardless of when they are redeemed.
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.saveBtnResponsive}>
        <button className={classes.saveBtn} onClick={handleOpen}>
          SAVE
        </button>
        <span className={classes.cancelBtn}>Cancel</span>
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
            <DesignPreview />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Incentives
