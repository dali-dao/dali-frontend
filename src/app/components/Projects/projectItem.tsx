import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ProjectImage from '../../assets/Projects/project_1.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '0 10px 10px 10px',
      padding: 10, 
      fontSize: 12
    },
    details: {
      alignItems: 'center',
      display: 'grid'
    },
    content: {
      flex: '1 0 auto',
    },
    account_info: {
      color: '#a3a5a7',
      textAlign: 'left',
      padding: 10
    },
    project_description: {
      color: '#a3a5a7',
      textAlign: 'left',
      marginLeft: '10px'
    },
    price: {
      color: 'yellow',
      fontSize: 15,
      paddingLeft: 5,
    },
    project_date: {
      paddingTop: 2,
      textAlign: 'left'
    },
    project_name: {
      fontSize: 17,
      color: 'white',
      textAlign: 'left',
      paddingLeft: 10,
      marginBottom: 10,
      fontFamily: 'CerebriSansPro-ExtraBold'
    },
    image_content: {
      width: '150px',
    },
    project_image: {
      width: '100%',
    },
    padding10: {
      padding: 10
    },
    icon_style: {
      paddingLeft: 10
    },
    textLeft: {
      textAlign: 'left'
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
        <img src={ProjectImage} alt='project_image' className={classes.project_image}/>
      </Grid>
      <Grid className={classes.details} item xs={12}>
          <Grid container item xs={12}>
              <Grid item xs={12} className={classes.project_name}>
                {name}
              </Grid>
              <Grid container className={classes.account_info}>
                <Grid item xs={12} md={7}>
                  {id}
                </Grid>
                <Grid item xs={12} md={5}>
                  <Icon icon="mdi:discord" inline={true} /> Discord
                </Grid>
              </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} md={5} className={classes.textLeft}>
              <span className={classes.icon_style}>Ξ</span><span className={classes.price}>{price}</span>
            </Grid>
            <Grid item xs={12} md={5} className={classes.project_date}>
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