import { useStyles } from './Style'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Logo from '../assets/Landing/logo.png'
import LogoBlack from '../assets/Landing/logo_black.png'
import ReorderIcon from '@material-ui/icons/Reorder'
import React, { useCallback } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import SelectWallet from '../components/Modal/SelectWallet'
import { Icon } from '@iconify/react'
import { useLocation } from 'react-router-dom'
import { providers } from 'ethers'
import Web3Modal from 'web3modal'
import { useMediaQuery } from 'react-responsive'
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header() {
  const classes = useStyles()

  const darkTheme = 'darkTheme'
  const lightTheme = 'lightTheme'
  const curThemeName = localStorage.getItem('appTheme') || 'darkTheme'
  const setThemeName = React.useContext(ThemeContext)
  const [theme, setTheme] = React.useState(curThemeName)
  const [connectState, setConnectState] = React.useState(false)
  const location_path = useLocation()

  const handleToggleTheme = () => {
    if (theme === lightTheme) {
      setThemeName(darkTheme)
      setTheme(darkTheme)
    } else {
      setThemeName(lightTheme)
      setTheme(lightTheme)
    }
  }

  const [ menuOpen, setMenuOpen ] = React.useState(false)

  const toggleDrawer = (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(!menuOpen);
  };

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const providerOptions = {}
  let web3Modal: any
  if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true,
      providerOptions, // required
    })
  }

  const connect = useCallback(
    async function () {
      const provider = await web3Modal.connect()
      const web3Provider = new providers.Web3Provider(provider)

      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()
      localStorage.setItem('connectedAddress', address)
      setOpen(false)
      setConnectState(true)
    },
    [web3Modal],
  )

  function disconnect() {
    web3Modal.clearCachedProvider()
    //   if (provider?.disconnect && typeof provider.disconnect === 'function') {
    //     provider.disconnect()
    //   }
    localStorage.setItem('connectedAddress', '')
    setConnectState(false)
  }

  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  let generalMenu = (
    <Grid container item xs={12} md={8} className={classes.menuItems}>
      {/* <Grid item xs={1}></Grid> */}
      <Grid item xs={2} md={1}>
        <Link to="/" className={location_path.pathname === '/' ? classes.activeMenu : classes.menu}>
          Home
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link
          to="/projects"
          className={
            location_path.pathname === '/projects' ||
            location_path.pathname === '/detail' ||
            location_path.pathname === '/design'
              ? classes.activeMenu
              : classes.menu
          }
        >
          Projects
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link to="/faq" className={location_path.pathname === '/faq' ? classes.activeMenu : classes.menu}>
          Faq
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link to="/docs" className={location_path.pathname === '/docs' ? classes.activeMenu : classes.menu}>
          Docs
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link to="/discord" className={location_path.pathname === '/discord' ? classes.activeMenu : classes.menu}>
          Discord
        </Link>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );

  let tabletMenu = (
    <Drawer
      className={classes.drawer}
      // variant={isTablet ? "permanent" : "temporary"}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
      open={menuOpen}
      onClose={toggleDrawer}
    >
      <Grid container>
        {/* <Grid item xs={12} className={classes.logoSectionSidebar}>
          <img src={curThemeName === 'darkTheme' ? Logo : LogoBlack} alt="logo" style={{width: '30%'}}/>
        </Grid> */}
        <Grid item xs={12} className={classes.menuResTitle}>
          <span>QUICK LINK</span> <CloseIcon onClick={toggleDrawer} style={{cursor: 'pointer'}}/>
        </Grid>
        <Grid item xs={12} className={classes.menuRes}>
          <Link to="/" className={classes.menuSidebar}>
            <span>Home</span> 
          </Link>
          <ArrowForwardIosIcon fontSize='small'/>
        </Grid>
        <Grid item xs={12} className={classes.menuRes}>
          <Link to="/projects" className={classes.menuSidebar}>
            Projects
          </Link>
          <ArrowForwardIosIcon fontSize='small'/>
        </Grid>
        <Grid item xs={12} className={classes.menuRes}>
          <Link to="/faq" className={classes.menuSidebar}>
            Faq
          </Link>
          <ArrowForwardIosIcon fontSize='small'/>
        </Grid>
        <Grid item xs={12} className={classes.menuRes}>
          <Link to="/docs" className={classes.menuSidebar}>
            Docs
          </Link>
          <ArrowForwardIosIcon fontSize='small' />
        </Grid>
        <Grid item xs={12} className={classes.menuRes}>
          <Link to="/discord" className={classes.menuSidebar}>
            Discord
          </Link>
          <ArrowForwardIosIcon fontSize='small' />
        </Grid>
        <Grid container item xs={12} className={classes.menuResTitle}>
          <Grid item xs={12}>
            CHOOSE THE THEME
          </Grid>
          <Grid item xs={12} className={classes.settingTheme}>
            <Icon icon="bi:moon-fill" className={classes.moon_style} onClick={handleToggleTheme} />
            <Icon icon="bx:bxs-sun" className={classes.sun_style} onClick={handleToggleTheme} />
            <span className={classes.settingThemeLabel}>BLACK THEME</span>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );

  return (
    <div className={classes.header}>
      <Grid container>
        <Grid item xs={4} md={2} className={classes.logoSection}>
          {isTablet ? <ReorderIcon fontSize="large" onClick={toggleDrawer} className={classes.toggleIcon}/> : ''}  
          <img src={curThemeName === 'darkTheme' ? Logo : LogoBlack} alt="logo" />
        </Grid>
        { isTablet ? <Grid item md={8} xs={4}></Grid> : generalMenu }
        { tabletMenu }
        <Grid item xs={isMobile? 12 : 4} md={2} container className={classes.rightItems}>
          <Grid item xs={6} md={5} sm={6}>
            <span>
              <Icon icon="bi:moon-fill" className={classes.moon_style} onClick={handleToggleTheme} />
            </span>
            <span>
              <Icon icon="bx:bxs-sun" className={classes.sun_style} onClick={handleToggleTheme} />
            </span>
          </Grid>
          <Grid
            item
            xs={6}
            md={7}
            sm={6}
            className={classes.connectBtn}
            onClick={connectState === false ? handleOpen : disconnect}
          >
            {connectState === false ? 'Connect' : localStorage.getItem('connectedAddress')?.substring(0, 10) + '...'}
          </Grid>
        </Grid>
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
            <SelectWallet connect={connect} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Header
