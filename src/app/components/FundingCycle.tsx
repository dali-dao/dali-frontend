import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { Icon } from '@iconify/react'
import { Grid, Button } from '@material-ui/core'
import WithdrawFunds from '../components/Modal/WithdrawFunds'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.background.default,
    border: '0px',
  },
  indicator: {
    backgroundColor: '#fcdd0c',
    height: 1,
  },
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#10141b',
    },
  },
  detail_container: {
    border: `1px solid ${theme.palette.info.main}`,
    backgroundColor: theme.palette.common.white,
    padding: 15,
  },
  detail_title: {
    fontSize: 14,
    marginBottom: 20,
    color: theme.palette.error.light,
  },
  available_container: {
    border: `1px solid ${theme.palette.info.main}`,
    backgroundColor: theme.palette.common.white,
    marginTop: 15,
  },
  distribute_button: {
    padding: '5px 25px',
    borderRadius: 5,
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.background.paper,
    color: theme.palette.success.main,
    textTransform: 'none',
  },
  app_bar_style: {
    backgroundColor: theme.palette.background.default,
  },
  tab_title: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
    padding: 0,
    display: 'block',
    textAlign: 'left',
    '& .MuiTab-wrapper ': {
      display: 'block',
    },
  },
  icon_style: {
    verticalAlign: 'middle',
    marginLeft: 5,
  },
  tab_pannel_content: {
    padding: '0px 0px',
    textAlign: 'left',
  },
  duration_content: {
    marginBottom: 20,
    color: theme.palette.error.light,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize13: {
    fontSize: 13,
  },
  padding20: {
    padding: 20,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  address_desc_title: {
    marginBottom: 20,
    wordBreak: 'break-all',
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.palette.success.main,
  },
  price_available: {
    color: theme.palette.success.contrastText,
    paddingRight: 5,
  },
  address_desc: {
    marginBottom: 20,
    fontSize: 12,
    color: '#9fa0a4',
    width: '93%',
  },
  value_0: {
    marginRight: 10,
    fontSize: 14,
    color: theme.palette.error.light,
  },
  distribute_button_content: {
    padding: 15,
    textAlign: 'right',
  },
  available_style: {
    fontSize: 13,
    color: '#858594',
  },
  withdrawn_cotent: {
    fontSize: 12,
    color: '#858594',
    marginLeft: 20,
    marginBottom: 10,
  },
  withdrawn_right_content: {
    fontSize: 12,
    color: '#858594',
    marginLeft: 20,
    marginBottom: 30,
  },
  owner_info: {
    verticalAlign: 'middle',
    width: 13,
    height: 13,
    marginRight: 5,
    marginLeft: 10,
  },
  icon_circle_info: {
    verticalAlign: 'middle',
    color: '#858594',
  },
  percent_value: {
    paddingRight: 15,
    textAlign: 'right',
    fontSize: 12,
    paddingTop: 20,
    color: theme.palette.error.light,
  },
  eth_content: {
    padding: '20px 20px 20px 20px',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    color: theme.palette.error.light,
  },
  eth_info: {
    verticalAlign: 'middle',
    width: 13,
    height: 13,
    marginRight: 5,
  },
  tab_style_current: {
    color: theme.palette.success.contrastText,
    width: 80,
    marginLeft: 'auto',
    minWidth: 50,
  },
  tab_style_history: {
    color: theme.palette.success.contrastText,
    width: 80,
    minWidth: 50,
  },
  verticalMiddle: {
    verticalAlign: 'middle',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
  },
}))

export default function LabTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" elevation={0} className={classes.app_bar_style}>
          <TabList onChange={handleChange} aria-label="Tab" classes={{ indicator: classes.indicator }}>
            <Tab label="FUNDING CYCLE" className={classes.tab_title} disabled />
            <Tab label="CURRENT" className={classes.tab_style_current} value="1" />
            <Tab label="HISTORY" className={classes.tab_style_history} value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1" className={classes.tab_pannel_content}>
          <Grid container className={classes.detail_container}>
            <Grid item xs={12} md={12} className={classes.detail_title}>
              <strong>DETAILS</strong>
            </Grid>
            <Grid container className={classes.duration_content}>
              <Grid item xs={12} md={3} className={classes.fontSize12}>
                <strong>Duration: Not set</strong>
              </Grid>
              <Grid item xs={12} md={3} className={classes.fontSize12}>
                <strong>Reserved</strong>
                <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
                <strong className={classes.verticalMiddle}>: 0%</strong>
              </Grid>
              <Grid item xs={12} md={6} className={classes.fontSize12}>
                <strong>Reconfiguration strategy</strong>{' '}
                <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
                <strong className={classes.verticalMiddle}>: 0%</strong>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.address_desc_title}>
              Address : 0x0000000000000000000000000000000000000000
            </Grid>
            <Grid item xs={12} className={classes.address_desc}>
              Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project
              with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take
              effect once the current cycle ends. A project with no strategy may be vulnerable to being Any
              reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with
              no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect
              once the current cycle ends. Any reconfiguration to an upcoming funding cycle will take effect once the
              current cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an
              upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be
              vulnerable to being Any reconfiguration to an upcoming funding cycle will take effect once the current
              cycle ends. A project with no strategy may be vulnerable to being Any reconfiguration to an upcoming
              funding cycle will take effect once the current cycle ends.
            </Grid>
          </Grid>
          <Grid container className={classes.available_container}>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.price_available}>$0</strong>
              <span className={classes.available_style}>
                AVAILABLE
                <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
              </span>
            </Grid>
            <Grid item xs={12} md={5} className={classes.distribute_button_content}>
              <Button className={classes.distribute_button} onClick={handleOpen}>
                Distribute
              </Button>
            </Grid>
            <Grid item xs={12} md={12} className={classes.withdrawn_cotent}>
              $11,511,594 withdrawn
            </Grid>
            <Grid item xs={12} md={12} className={classes.withdrawn_right_content}>
              <span>Ξ2,465.1400</span>
              <Icon icon="websymbol:user" className={classes.owner_info} /> <span>owner bala</span>
            </Grid>
            <Grid item xs={12} md={12} className={classes.marginLeft20}>
              <strong className={classes.value_0}>
                Distribution <Icon icon="si-glyph:circle-info" className={classes.icon_circle_info} />
              </strong>
            </Grid>
            <Grid item xs={7} md={7} className={classes.eth_content}>
              <span>
                <Icon icon="websymbol:user" className={classes.icon_circle_info} /> dunedao.eth
              </span>
            </Grid>
            <Grid item xs={5} md={5} className={classes.percent_value}>
              <strong>100%</strong>
            </Grid>
          </Grid>
          <Grid container className={classes.available_container}>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.value_0}>Reserved tokens (100%)</strong>
              <Icon icon="si-glyph:circle-info" className={classes.icon_circle_info} />
            </Grid>
            <Grid item xs={7} md={7} className={classes.eth_content}>
              <span>
                <Icon icon="websymbol:user" className={classes.eth_info} /> dunedao.eth
              </span>
            </Grid>
            <Grid item xs={5} md={5} className={classes.percent_value}>
              <strong>100%</strong>
            </Grid>
            <Grid item xs={12} md={7} className={classes.padding20}>
              <strong className={classes.price_available}>0</strong>
              <span className={classes.available_style}>SPICE</span>
            </Grid>
            <Grid item xs={12} md={5} className={classes.distribute_button_content}>
              <Button className={classes.distribute_button} onClick={handleOpen}>
                Distribute
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
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
            <WithdrawFunds />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
