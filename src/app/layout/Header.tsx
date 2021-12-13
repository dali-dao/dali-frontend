import { useStyles } from "./Style";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/Landing/logo.png';
import LogoBlack from '../assets/Landing/logo_black.png';
import ReorderIcon from '@material-ui/icons/Reorder';
import React, { useCallback } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelectWallet from '../components/Modal/SelectWallet';
import { Icon } from '@iconify/react'; 
import {useLocation} from 'react-router-dom';
import { providers } from 'ethers'
import Web3Modal from 'web3modal'

function Header() {
    const classes = useStyles();

    const darkTheme = "darkTheme";
    const lightTheme = "lightTheme";
    const curThemeName = localStorage.getItem("appTheme") || "darkTheme";
    const setThemeName = React.useContext(ThemeContext);
    const [theme, setTheme] = React.useState(curThemeName);
    const [ connectState, setConnectState ] = React.useState(false);
    const location_path = useLocation();

    const handleToggleTheme = () => {
      if (theme === lightTheme) {
        setThemeName(darkTheme);
        setTheme(darkTheme);
      } else {
        setThemeName(lightTheme);
        setTheme(lightTheme);
      }
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const providerOptions = {}
    let web3Modal: any;
    if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
            network: 'mainnet', // optional
            cacheProvider: true,
            providerOptions // required
        })
    }

    const connect = useCallback(async function () {
        const provider = await web3Modal.connect();
        const web3Provider = new providers.Web3Provider(provider);
    
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        localStorage.setItem('connectedAddress', address);
        setOpen(false);
        setConnectState(true);
    }, [web3Modal]);

    function disconnect() {
        web3Modal.clearCachedProvider();
        //   if (provider?.disconnect && typeof provider.disconnect === 'function') {
        //     provider.disconnect()
        //   }
        localStorage.setItem('connectedAddress', '');
        setConnectState(false);
    }

    return (
        <div className={classes.header}>
            <Grid container>
                <Grid item xs={12} md={2}>
                    <img src={curThemeName === 'darkTheme' ? Logo : LogoBlack} alt="logo"/>
                </Grid>
                <Grid container xs={12} md={7} className={classes.menuItems}>
                    <Grid item xs={2} md={1} sm={2}>
                        <Link to="/" className={(location_path.pathname === '/') ? classes.activeMenu : classes.menu}>
                            Home
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <Link to="/projects" className={(location_path.pathname === '/projects' || location_path.pathname === '/detail' || location_path.pathname === '/design') ? classes.activeMenu : classes.menu}>
                            Projects
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Link to="/faq" className={(location_path.pathname === '/faq') ? classes.activeMenu : classes.menu}>
                            Faq
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <Link to="/docs" className={(location_path.pathname === '/docs') ? classes.activeMenu : classes.menu}>
                            Docs
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Link to="/discord" className={(location_path.pathname === '/discord') ? classes.activeMenu : classes.menu}>
                            Discord
                        </Link>
                    </Grid>
                    {/* <Link to="/" className={classes.menu}>
                        Blog
                    </Link> */}
                    
                    {/* <Link to="/" className={classes.menu}>
                        Workspace
                    </Link> */}
                </Grid>
                <Grid item xs={12} md={3} container className={classes.rightItems}>
                    <Grid item xs={2} md={4} sm={3}>
                        <span>
                            <Icon icon="bi:moon-fill" className={classes.moon_style} onClick={handleToggleTheme} />
                        </span>
                        <span>
                        <Icon icon="bx:bxs-sun" className={classes.sun_style} onClick={handleToggleTheme}/>
                        </span>
                    </Grid>
                    <Grid item xs={8} md={5} sm={6} className={classes.connectBtn} onClick={connectState === false ? handleOpen : disconnect}>
                        { connectState === false ? 'Connect' : localStorage.getItem('connectedAddress')?.substring(0, 10) + '...' }
                    </Grid>
                    <Grid item xs={2} md={2} sm={3}>
                        <ReorderIcon fontSize="small"/>
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
                <div style={{width: '60%'}}>
                    <SelectWallet connect={connect} />
                </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default Header;
