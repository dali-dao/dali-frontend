import { useStyles } from "./Style";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/Landing/logo.png';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ReorderIcon from '@material-ui/icons/Reorder';
import React from "react";
import { ThemeContext } from "../theme/ThemeProvider";

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

    return (
        <div className={classes.header}>
            <Grid container>
                <Grid item xs={2}>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item xs={8} className={classes.menuItems}>
                    <Link to="/" className={classes.activeMenu}>
                        Home
                    </Link>
                    <Link to="/projects" className={classes.menu}>
                        Projects
                    </Link>
                    <Link to="/" className={classes.menu}>
                        Faq
                    </Link>
                    <Link to="/" className={classes.menu}>
                        Docs
                    </Link>
                    <Link to="/" className={classes.menu}>
                        Blog
                    </Link>
                    <Link to="/" className={classes.menu}>
                        Discord
                    </Link>
                    <Link to="/" className={classes.menu}>
                        Workspace
                    </Link>
                </Grid>
                <Grid item xs={2} container className={classes.rightItems}>
                    <Grid item xs={3} className={classes.selectTheme}>
                        <Brightness3Icon fontSize="small" className={classes.brightnessIcon} onClick={handleToggleTheme}/>
                        <WbSunnyIcon fontSize="small" className={classes.sunIcon} onClick={handleToggleTheme}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}className={classes.connectBtn}>
                        Connect
                    </Grid>
                    <Grid item xs={3}>
                        <ReorderIcon fontSize="small"/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
