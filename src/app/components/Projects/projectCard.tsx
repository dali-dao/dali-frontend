import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card1 from '../../assets/Landing/card1.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderRadius: 10,
    textAlign: 'left'
  },
  media: {
    height: 140,
  },
  cardTitle: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16,
    color: 'white'
  },
  cardDesc: {
    fontSize: 12,
    color: '#82868c'
  },
  price: {
    color: 'yellow',
    marginRight: 10,
    fontSize: 15,
    fontFamily: 'Roboto-Black'
  },
  constitution: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
  value: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={Card1} alt="projects" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            ConstitutionDAO
          </Typography>
          <Grid container className={classes.constitution}>
            @constitutiondao <PermContactCalendarIcon fontSize="small" style={{marginLeft: 10}} />Discord
          </Grid>
          <Grid container className={classes.value}>
            <MenuIcon fontSize="small"/> <span className={classes.price}>77,789</span> since 11-15-21 
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDesc}>
            SharkDAO owns Nouns #2, #5, #15, #33. We are swimming ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}