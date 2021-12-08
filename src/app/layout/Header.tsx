import { useStyles } from "./Style";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/Landing/logo.png';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ReorderIcon from '@material-ui/icons/Reorder';
import React from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelectWallet from '../components/Modal/SelectWallet';
import { Icon } from '@iconify/react'; 

function Header() {
    const classes = useStyles();

    const darkTheme = "darkTheme";
    const lightTheme = "lightTheme";
    const curThemeName = localStorage.getItem("appTheme") || "darkTheme";
    const setThemeName = React.useContext(ThemeContext);
    const [theme, setTheme] = React.useState(curThemeName);

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

    return (
        <div className={classes.header}>
            <Grid container>
                <Grid item xs={12} md={2}>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid container xs={12} md={7} className={classes.menuItems}>
                    <Grid item xs={2} md={1}>
                        <Link to="/" className={classes.activeMenu}>
                            Home
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <Link to="/projects" className={classes.menu}>
                            Projects
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Link to="/faq" className={classes.menu}>
                            Faq
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <Link to="/docs" className={classes.menu}>
                            Docs
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Link to="/discord" className={classes.menu}>
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
                        <Icon icon="bx:bxs-sun" className={classes.sun_style} />
                        </span>
                    </Grid>
                    <Grid item xs={8} md={5} sm={6} className={classes.connectBtn} onClick={handleOpen}>
                        Connect
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
                    <SelectWallet />
                </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default Header;
