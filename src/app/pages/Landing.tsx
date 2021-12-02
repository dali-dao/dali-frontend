import Banner from '../assets/Landing/banner.jpg';
import { useStyles } from "./Landing_style";

function Landing() {
  const classes = useStyles();

  return (
    <div>
      <img src={Banner} alt="banner" className={classes.banner}/>
    </div>
  );
}

export default Landing;
