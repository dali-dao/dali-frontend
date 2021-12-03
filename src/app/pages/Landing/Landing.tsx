import Banner from '../../assets/Landing/banner.jpg';
import { useStyles } from "./styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProjectCard from '../../components/Projects/projectCard';
import PaymentCard from '../../components/Projects/paymentCard';
import Blockchain from '../../assets/Landing/blockchain.jpg';
import Faq from '../../components/faq';

function Landing() {
  const classes = useStyles();

  return (
    <div>
      <img src={Banner} alt="banner" className={classes.banner}/>
      <Grid className={classes.section2} container>
        <Grid container>
          <Grid item xs={6} className={classes.projectTitle}>
            projects using dali
          </Grid>
          <Grid item xs={6} className={classes.exploreMore}>
            <Button variant="outlined" color="secondary" className={classes.exploreMoreBtn}>
              explore more
            </Button>
          </Grid>
          <Grid container>
            <Grid item sm={2} md={3}>
              <ProjectCard />
            </Grid>
            <Grid item sm={2} md={3}>
              <ProjectCard />
            </Grid>
            <Grid item sm={2} md={3}>
              <ProjectCard />
            </Grid>
            <Grid item sm={2} md={3}>
              <ProjectCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.section3}>
        <Grid className={classes.section3Title}>latest payments</Grid>
        <Grid container>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
        </Grid>
        <Grid className={classes.section3Btn}>
          <Button variant="outlined" color="secondary" className={classes.exploreMoreBtn}>
            view more
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.section4}>
        <img src={Blockchain} alt="blockchain" className={classes.blockchainImg}/>
      </Grid>
      <Grid className={classes.section5}>
        <Grid className={classes.faq}>
          frequently asked questions
        </Grid>
        <Grid container>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
          <Grid item xs={6} className={classes.faqBox}>
            <Faq />
          </Grid>
        </Grid>
        <Grid className={classes.viewFaqBtn}>
          <Button variant="outlined" color="secondary" className={classes.exploreMoreBtn}>
            view more faqs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
