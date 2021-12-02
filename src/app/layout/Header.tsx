import { useStyles } from "./Style";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/Landing/logo.png';

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Grid container>
                <Grid item xs={2}>
                    <img src={Logo} alt="logo" />
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
            </Grid>
        </div>
    );
}

export default Header;
