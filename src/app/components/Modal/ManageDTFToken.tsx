import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import BurnDTF from './BurnDTF'
import ClaimDTF from './ClaimDTF'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
    position: 'absolute',
    width: '60%',
    top: 20,
    '@media(max-width: 1000px)': {
      width: '90%',
      left: '4%'
    },
  },
  //component class
  modal_header: {
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.primary.main,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
  },
  project_info_1: {
    padding: '40px',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    display: 'block',
    textAlign: 'left',
    borderTop: 0,
    borderBottom: 0,
    color: theme.palette.success.main,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },

  button_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  left_button: {
    color: theme.palette.error.light,
    background: theme.palette.primary.main,
    border: '1px solid #596275',
    borderRadius: 5,
    marginRight: 20,
    width: 145,
    height: 50,
  },
  return_button: {
    width: '100%',
    color: theme.palette.error.light,
    // color: '#fff',
    // background: '#131524',
    background: theme.palette.primary.main,
    border: '1px solid #596275',
    marginBottom: 20,
  },
  claim_button: {
    width: '100%',
    color: theme.palette.error.light,
    // color: '#fff',
    // background: '#131524',
    background: theme.palette.primary.main,
    border: '1px solid #596275',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
  },
}))

interface manageDTFToken {
  handleManageDTFTokenClose: () => void
}

export default function ManageDTFToken({handleManageDTFTokenClose} : manageDTFToken) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [claimDTFOpen, setClaimDTFOpen] = React.useState(false)

  const handleClaimDTFOpen = () => {
    setClaimDTFOpen(true)
  }

  const handleClaimDTFClose = () => {
    setClaimDTFOpen(false)
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Manage DTF tokens</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <Button className={classes.return_button} onClick={handleOpen}>
          Return my ETh
        </Button>
        <Button className={classes.claim_button} onClick={handleClaimDTFOpen}>
          Claim DTF as ERC20
        </Button>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.left_button} onClick={handleManageDTFTokenClose}>CANCEL</Button>
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
          <div style={{ width: '60%' }}>
            <BurnDTF handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={claimDTFOpen}
        onClose={handleClaimDTFClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={claimDTFOpen}>
          <div style={{ width: '60%' }}>
            <ClaimDTF handleClaimDTFClose={handleClaimDTFClose}/>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
