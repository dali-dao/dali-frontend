import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import DesignPreviewImg from '../../assets/Popup/design_preview.jpg'
import { Icon } from '@iconify/react'
import { Grid, FormControl, OutlinedInput, InputAdornment, FormHelperText, Button } from '@material-ui/core'
import ButtonGroup from '../../components/ButtonGroup'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.error.light,
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
    position: 'absolute',
    width: '60%',
    top: 20,
    '@media(max-width: 1000px)': {
      width: '90%'
    },
  },
  //common class
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  textCenter: { textAlign: 'center' },
  width100: { width: '100%' },
  marginTop20: { marginTop: 20 },
  marginBottom5: { marginBottom: 5 },
  marginBottom20: { marginBottom: 20 },
  marginLeft10: { marginLeft: 10 },
  marginRight10: { marginRight: 10 },
  marginRight20: { marginRight: 20 },
  fontSize12: { fontSize: 12 },
  paddingLeft15: { paddingLeft: 15 },
  //component class
  modal_header: {
    background: theme.palette.common.white,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
    borderBottom: `1px solid ${theme.palette.info.main}`,
  },
  project_info_1: {
    background: theme.palette.background.paper,
    padding: '25px 40px',
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  project_info_detail: {
    paddingLeft: 15,
    '@media(max-width: 960px)': {
      paddingLeft: 0,
    },
  },
  project_title: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16,
  },
  project_description: {
    color: '#88898d',
    fontSize: 14,
  },
  project_price_info: {
    fontSize: 13,
  },
  icon_info: {
    color: '#4f545d',
    verticalAlign: 'middle',
    marginLeft: 10,
  },
  //Project Info 2
  project_info_2: {
    padding: '25px 40px',
    borderBottom: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.common.white,
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  input_outline: {
    paddingRight: 0,
    height: 40,
    borderRadius: 0,
    border: `1px solid ${theme.palette.info.main}`,
  },
  toke_info_content: {
    marginBottom: 30,
  },
  activity: {
    marginTop: 20,
  },
  holders_button: {
    marginRight: 20,
    border: `1px solid ${theme.palette.info.main}`,
    '@media(max-width: 450px)': {
      float: 'left',
    },
  },
  manage_button: {
    background: '#454d5c',
    color: '#fff',
    padding: '5px 10px',
    borderBottom: `1px solid ${theme.palette.info.main}`,
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
    background: theme.palette.common.white,
    padding: 20,
    '@media(max-width: 400px)': {
      padding: 10,
    },
  },
  detail_title: {
    fontSize: 14,
    marginBottom: 15,
  },
  available_container: {
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.common.white,
    marginTop: 15,
    padding: 20,
    '@media(max-width: 400px)': {
      padding: 10,
    },
  },
  distribute_button: {
    border: `1px solid ${theme.palette.info.main}`,
    background: '#272c36',
    borderRadius: 5,
    '@media(max-width: 320px)': {
      marginTop: 10,
      marginBottom: 10,
      width: '100%',
    },
  },
  tab_current: {
    marginLeft: 'auto',
    fontFamily: 'CerebriSansPro-Bold',
    '@media(max-width: 450px)': {
      fontSize: 12,
      minWidth: 50,
    },
  },
  tab_history: {
    fontFamily: 'CerebriSansPro-Bold',
    '@media(max-width: 450px)': {
      fontSize: 12,
      minWidth: 50,
    },
  },
  no_activity: {
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.background.default,
    height: '100px',
  },
  project_image: {
    width: '100%',
  },
  pay_content: {
    height: 'auto',
    textAlign: 'left',
  },
  form_helper_text_label: {
    marginLeft: 0,
    color: 'grey',
  },
  pay_button: {
    width: '100%',
    background: 'rgb(247 219 14)',
    height: 40,
    color: '#000',
    borderRadius: 0,
  },
  token_title: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16,
  },
  token_title_content: {
    textAlign: 'left',
    marginBottom: 10,
  },
  total_supply: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 13,
  },
  funding_cycle_title: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
    padding: 0,
    display: 'block',
    textAlign: 'left',
    '& .MuiTab-wrapper ': {
      display: 'block',
    },
    '@media(max-width: 450px)': {
      fontSize: 12,
      minWidth: 50,
    },
  },
  icon_style: {
    verticalAlign: 'middle',
    marginLeft: 10,
    color: '#4f545d',
    marginRight: 10,
  },
  tab_pannel: {
    padding: '0px',
    textAlign: 'left',
  },
  app_bar_background: {
    background: theme.palette.background.paper,
  },
  address_info: {
    marginBottom: 20,
    fontSize: 12,
    wordBreak: 'break-all',
  },
  funding_cycle_description: {
    marginBottom: 20,
    fontSize: 12,
    color: '#9fa0a4',
    width: '100%',
  },
  available_value: {
    marginRight: 10,
    fontSize: 14,
  },
  available_header: {
    fontSize: 13,
    color: '#858594',
  },
  distribute_content: {
    textAlign: 'right',
  },
  withdraw_value: {
    fontSize: 12,
    color: '#858594',
    marginBottom: 10,
  },
  dft_value: {
    fontSize: 12,
    color: '#858594',
  },
  icon_user: {
    verticalAlign: 'middle',
    width: 13,
    height: 13,
    marginRight: 5,
    marginLeft: 10,
  },
  distribute_title: {
    marginRight: 10,
    fontSize: 14,
  },
  circle_info: {
    verticalAlign: 'middle',
    marginLeft: 10,
    color: '#858594',
  },
  user_info_content: {
    fontSize: 13,
    marginTop: 10,
  },
  bottom_icon_user: {
    verticalAlign: 'middle',
    width: 13,
    height: 13,
    marginRight: 5,
  },
  reserved_token_header: {
    marginRight: 10,
    fontSize: 14,
  },
  spice_value: {
    marginRight: 10,
    fontSize: 14,
  },
  spice_label: {
    fontSize: 13,
    color: '#858594',
  },
  activity_header: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
    padding: 0,
    display: 'block',
    textAlign: 'left',
    '& .MuiTab-wrapper ': {
      display: 'block',
    },
  },
  tab_style: {
    minWidth: 50,
    fontSize: '12.8px',
  },
  tab_pay_style: {
    minWidth: 50,
    fontSize: '12.8px',
    marginLeft: 'auto',
  },
  activity_content: {
    padding: '0px 0px',
    textAlign: 'left',
    width: '100%',
  },
  user_info_value: {
    paddingRight: 10,
    textAlign: 'right',
    fontSize: 12,
    paddingTop: 12,
  },
  project_detail_value: {
    textAlign: 'left',
    marginTop: 10,
  },
  injuicebox: {
    textAlign: 'left',
    marginBottom: 5,
  },
  inwallet: {
    textAlign: 'left',
    marginBottom: 5,
  },
  all_asset: {
    textAlign: 'right',
    marginTop: 10,
  },
  your_balance: {
    fontSize: 13,
    textAlign: 'left',
  },
  supply_value: {
    marginLeft: 10,
    marginRight: 10,
  },
  displayBlock: {
    display: 'block',
  },
  token_action_content: {
    textAlign: 'right',
    '@media(max-width: 450px)': {
      marginTop: 20,
    },
  },
}))

export default function DesignPreview() {
  const classes = useStyles()
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>DESIGN PREVIEW</strong>
      </Grid>
      <Grid container>
        <Grid container className={classes.project_info_1}>
          <Grid item xs={12} md={2} className={classes.textLeft}>
            <img src={DesignPreviewImg} className={classes.project_image} alt="design_preview" />
          </Grid>
          <Grid container item xs={12} md={10} className={classes.project_info_detail}>
            <Grid item xs={12} md={12} className={classes.textLeft}>
              <strong className={classes.project_title}>UNTITLED PROJECT</strong>
            </Grid>
            <Grid item xs={12} md={12} className={classes.textLeft}>
              <span className={classes.project_description}>
                Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. Cras eget rhoncus dolor, commodo
                pharetra leo. Pellentesque neque risus, auctor ac nisl in, dictum rhoncus libero. Cras eget rhoncus
                dolor, commodo pharetra leo.{' '}
              </span>
            </Grid>
            <Grid container item xs={12} md={12} className={classes.project_detail_value}>
              <Grid item xs={12} md={10} className={classes.marginBottom5}>
                <strong className={classes.project_price_info}>Volume</strong>
                <Icon icon="si-glyph:circle-info" className={classes.icon_info} />
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>Ξ0</strong>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={12} className={classes.injuicebox}>
              <Grid item xs={12} md={10}>
                <strong className={classes.project_price_info}>In Juicebox</strong>
                <Icon icon="si-glyph:circle-info" className={classes.icon_info} />
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>Ξ0 0$</strong>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={12} className={classes.inwallet}>
              <Grid item xs={12} md={10}>
                <strong className={classes.project_price_info}>In wallet</strong>
                <Icon icon="si-glyph:circle-info" className={classes.icon_info} />
              </Grid>
              <Grid className={classes.textRight} item xs={12} md={2}>
                <strong className={classes.project_price_info}>0 JBX + Ξ0</strong>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.all_asset}>
              <strong className={classes.fontSize12}>ALL ASSETS</strong>
              <Icon icon="si-glyph:circle-info" className={classes.icon_info} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.project_info_2}>
          <Grid item xs={12} md={12} className={classes.pay_content}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={10} sm={12} className={classes.textCenter}>
                <FormControl className={classes.width100} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    className={classes.input_outline}
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonGroup />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{ 'aria-label': 'Receive 0 tokens/$' }}
                  />
                  <FormHelperText className={classes.form_helper_text_label} id="outlined-weight-helper-text">
                    Receive 0 tokens/$
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2} sm={12} className={classes.textCenter}>
                <Button className={classes.pay_button}>PAY</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.project_info_1}>
          <Grid container className={classes.toke_info_content}>
            <Grid item xs={12} md={12} className={classes.token_title_content}>
              <strong className={classes.token_title}>TOKENS</strong>
              <Icon icon="si-glyph:circle-info" className={classes.icon_info} />
            </Grid>
            <Grid item xs={12} md={12} className={classes.total_supply}>
              <strong className={classes.marginRight10}>Total supply</strong>
              <span className={classes.marginRight10}>:</span> <strong>0</strong>
            </Grid>
            <Grid item xs={12} md={8} className={classes.your_balance}>
              <strong className={classes.marginRight20}>Your balance</strong>
              <span>:</span> <span className={classes.supply_value}>0</span>
              <strong>(0% of supply)</strong>
            </Grid>
            <Grid item xs={12} md={4} className={classes.token_action_content}>
              <Button className={classes.holders_button}>Holders</Button>
              <Button className={classes.manage_button}>Manage</Button>
            </Grid>
          </Grid>
          <Grid container className={classes.displayBlock}>
            <TabContext value={value}>
              <AppBar position="static" elevation={0} className={classes.app_bar_background}>
                <TabList
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  classes={{ indicator: classes.indicator }}
                >
                  <Tab label="FUNDING CYCLE" className={classes.funding_cycle_title} disabled />
                  <Tab label="CURRENT" value="1" className={classes.tab_current} />
                  <Tab label="HISTORY" value="2" className={classes.tab_history} />
                </TabList>
              </AppBar>
              <TabPanel value="1" className={classes.tab_pannel}>
                <Grid container className={classes.detail_container}>
                  <Grid item xs={12} md={12} className={classes.detail_title}>
                    <strong>DETAILS</strong>
                  </Grid>
                  <Grid container className={classes.marginBottom20}>
                    <Grid item xs={12} md={3} className={classes.fontSize12}>
                      <strong>Duration: Not set</strong>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.fontSize12}>
                      <strong>Reserved</strong>
                      <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
                      <strong>
                        : <span className={classes.marginLeft10}>0%</span>
                      </strong>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.fontSize12}>
                      <strong>Reconfiguration strategy</strong>{' '}
                      <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
                      <strong>
                        : <span className={classes.marginLeft10}>0%</span>
                      </strong>
                    </Grid>
                  </Grid>
                  <Grid className={classes.address_info}>Address : 0x0000000000000000000000000000000000000000</Grid>
                  <Grid className={classes.funding_cycle_description}>
                    Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A
                    project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle
                    will take effect once the current cycle ends. A project with no strategy may be vulnerable to being
                    Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A
                    project with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle
                    will take effect once the current cycle ends. Any reconfiguration to an upcoming funding cycle will
                    take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any
                    reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project
                    with no strategy may be vulnerable to being Any reconfiguration to an upcoming funding cycle will
                    take effect once the current cycle ends. A project with no strategy may be vulnerable to being Any
                    reconfiguration to an upcoming funding cycle will take effect once the current cycle ends.
                  </Grid>
                </Grid>
                <Grid container className={classes.available_container}>
                  <Grid item xs={12} md={7}>
                    <strong className={classes.available_value}>$0</strong>
                    <span className={classes.available_header}>
                      AVAILABLE
                      <Icon icon="si-glyph:circle-info" className={classes.icon_style} />
                    </span>
                  </Grid>
                  <Grid item xs={12} md={5} className={classes.distribute_content}>
                    <Button className={classes.distribute_button}>Distribute</Button>
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.withdraw_value}>
                    $11,511,594 withdrawn
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.dft_value}>
                    <span>Ξ2,465.1400</span>
                    <Icon icon="websymbol:user" className={classes.icon_user} /> <span>owner bala</span>
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.marginTop20}>
                    <strong className={classes.distribute_title}>
                      Distribution <Icon icon="si-glyph:circle-info" className={classes.circle_info} />
                    </strong>
                  </Grid>
                  <Grid item xs={6} md={7} className={classes.user_info_content}>
                    <Icon icon="websymbol:user" className={classes.bottom_icon_user} />
                  </Grid>
                  <Grid item xs={6} md={5} className={classes.user_info_value}>
                    <strong>100%</strong>
                  </Grid>
                </Grid>
                <Grid container className={classes.available_container}>
                  <Grid item xs={12} md={7}>
                    <strong className={classes.reserved_token_header}>Reserved tokens (100%)</strong>
                    <Icon icon="si-glyph:circle-info" className={classes.circle_info} />
                  </Grid>
                  <Grid item xs={12} md={5} className={classes.textRight}>
                    <Button className={classes.distribute_button}>Distribute</Button>
                  </Grid>
                  <Grid item xs={12} md={7} className={classes.marginTop20}>
                    <strong className={classes.spice_value}>0</strong>
                    <span className={classes.spice_label}>SPICE</span>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Grid>
          <Grid container className={classes.activity}>
            <TabContext value={value}>
              <AppBar position="static" elevation={0} className={classes.app_bar_background}>
                <TabList onChange={handleChange} aria-label="tabs" classes={{ indicator: classes.indicator }}>
                  <Tab label="ACTIVITY" value="0" disabled className={classes.activity_header} />
                  <Tab label="PAY" value="1" className={classes.tab_pay_style} />
                  <Tab label="REDEEM" value="2" className={classes.tab_style} />
                  <Tab label="WITHDRAW" value="3" className={classes.tab_style} />
                  <Tab label="RESERVES" value="4" className={classes.tab_style} />
                </TabList>
              </AppBar>
              <TabPanel value="1" className={classes.activity_content}>
                <Grid className={classes.no_activity}></Grid>
              </TabPanel>
              <TabPanel value="2" className={classes.activity_content}>
                <Grid className={classes.no_activity}></Grid>
              </TabPanel>
              <TabPanel value="3" className={classes.activity_content}>
                <Grid className={classes.no_activity}></Grid>
              </TabPanel>
              <TabPanel value="4" className={classes.activity_content}>
                <Grid className={classes.no_activity}></Grid>
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
