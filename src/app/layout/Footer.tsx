import { useStyles, BootstrapInput } from "./Style";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from '../assets/Landing/logo.png';
import Discord from '../assets/Landing/discord.png';

function Footer() {
    const classes = useStyles();

    return (
      <div className={classes.footer}>
        <Grid container className={classes.signupSection}>
          <Grid item xs={8} className={classes.titleDesc}>
            <Grid className={classes.title}>STAY IN THE LOOP</Grid>
            <Grid className={classes.desc}>Join our mailing list to stay in the loop with our newest feature releases, NFT <br/> drops, and tips and tricks for navigating OpenSea.</Grid>
            <Grid container item xs={12}>
              <Grid item xs={10} className={classes.signupInput}>
                <BootstrapInput id="bootstrap-input"/>
              </Grid>
              <Grid item xs={2} style={{display: 'flex'}}>
                <Grid className={classes.signupBtn}>
                  Sign Up
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{textAlign: 'left'}}>
            <Grid className={classes.followTitle}>FOLLOW US ON</Grid>
            <Grid className={classes.followIcons}>
              <GitHubIcon fontSize="large" style={{marginRight: 20}}/>
              <img src={Discord} alt="discord" style={{width: 40, marginRight: 20}}/>
              <TwitterIcon fontSize="large" style={{marginRight: 20}}/>
              <InstagramIcon fontSize="large" style={{marginRight: 20}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.footerMiddle} container>
          <Grid item xs={4}>
            <img src={Logo} alt="logo" />
            <p className={classes.footerMiddleDesc1}>
              Users fund your project by paying to use your app or service, or as a patron or investor by making a payment directly to your project’s smart contract (like on this app). For users paying through your app, you should route those funds through the Juicebox smart contracts so they receive Tokens in return.ers paying througurn.ers paying througurn.ers paying through your app, you should route those funds through the Juicebox smart contracts.
            </p>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Grid className={classes.footerMiddleTitle}>
              QUIK LIKNKS
            </Grid>
            <Grid className={classes.footerMiddleDesc}>
              Aave Protocol<br/>
              Developers<br/>
              Security<br/>
              aTokens<br/>
              Bug Bounty<br/>
              Flash Loans
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid className={classes.footerMiddleTitle}>
              RESOURCES
            </Grid>
            <Grid className={classes.footerMiddleDesc}>
              Rate Switching<br/>
              Whitepaper<br/>
              Aavenomics<br/>
              Ecosystem<br/>
              Careers<br/>
              Branding
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid className={classes.footerMiddleTitle}>
              SUPPORT
            </Grid>
            <Grid className={classes.footerMiddleDesc}>
              Blog<br/>
              Careers<br/>
              Partnership<br/>
              Terms of Services<br/>
              Privacy Policy<br/>
              Contact us
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} className={classes.footerBottomLeft}>
            2021 $ DALI.com All rights reserved.
          </Grid>
          <Grid item xs={6} className={classes.footerBottomRight}>
            Privacy Policy | Terms & Conditions
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Footer;
  