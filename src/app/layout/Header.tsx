import { useStyles } from "./Style";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/Landing/logo.png';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

function Header() {
    const classes = useStyles();

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
                    <Link to="/" className={classes.menu}>
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
                    <Grid item xs={4} className={classes.selectTheme}>
                        <Brightness3Icon fontSize="small"/>
                        <WbSunnyIcon fontSize="small"/>
                    </Grid>
                    <Grid item xs={5}className={classes.connectBtn}>
                        Connect
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
