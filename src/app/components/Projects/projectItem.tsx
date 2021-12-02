import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ProjectImage from '../../assets/Landing/payment.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '0 10px 10px 10px',
      padding: 10
    },
    details: {
      alignItems: 'center',
      display: 'grid'
    },
    content: {
      flex: '1 0 auto',
    },
    account_info: {
      fontSize: 13,
      color: '#a3a5a7',
      textAlign: 'left',
      marginLeft: '10px'
    },
    project_description: {
      fontSize: 13,
      color: '#a3a5a7',
      textAlign: 'left',
      marginLeft: '10px'
    },
    price: {
        color: 'yellow',
        fontSize: 14,
    },
    project_date: {
      fontSize: 13,
      paddingTop: 5
    },
    project_name: {
      fontSize: 15,
      color: 'white',
      textAlign: 'left',
      paddingLeft: 10,
      marginBottom: 10
    },
    image_content: {
      width: '150px',
    },
    project_image: {
      width: '100%',
    }
  }),
);

interface ItemProps {
  image: string
  name: string
  id: string
  price: number
  date: string
  desc: string
}

export default function ProjectItem({image, name, id, price, date, desc}: ItemProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Grid className={classes.image_content}>
          <img src={ProjectImage} className={classes.project_image}/>
        </Grid>
        <Grid className={classes.details} item xs={12}>
            <Grid container item xs={12}>
                <Grid item xs={12} className={classes.project_name}>
                  {name}
                </Grid>
                <Grid item xs={6} className={classes.account_info}>
                  {id}
                </Grid>
                <Grid item xs={5} className={classes.account_info}>
                  <Icon icon="mdi:discord" inline={true} /> Discord
                </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={2}>
                <Icon icon="icon-park-outline:expand-left-and-right" rotate={1} hFlip={true} inline={true} />
              </Grid>
              <Grid item xs={3}>
                <span className={classes.price}>{price}</span>
              </Grid>
              <Grid item xs={5} className={classes.project_date}>
                <span>since {date}</span>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} className={classes.project_description}>
                {desc}
              </Grid>
            </Grid>
        </Grid>
    </Card>
  );
}