import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ProjectImage from '../../assets/Projects/project_1.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontSize: 12,
      border: '1px solid grey',
      background: '#1c222d',
      borderRadius: '10px',
      padding: '10px'
    },
    details: {
      textAlign: 'left',
      paddingLeft: 10
    },
    content: {
    },
    account_info: {
      color: '#a3a5a7',
      marginBottom: 5
    },
    project_description: {
      color: '#a3a5a7',
      marginTop: 5
    },
    price: {
      color: 'yellow',
      fontSize: 15,
    },
    project_date: {
      color: '#a3a5a7',
    },
    project_name: {
      fontSize: 17,
      color: 'white',
      fontFamily: 'CerebriSansPro-ExtraBold',
      marginBottom: 10,
      marginTop: 10
    },
    image_content: {
    },
    project_image: {
      width: '100%'
    },
    padding10: {
    },
    icon_style: {
      color: '#a3a5a7',
      marginRight: 10
    },
    textLeft: {
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
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4} className={classes.image_content}>
        <img src={ProjectImage} alt='project_image' className={classes.project_image}/>
      </Grid>
      <Grid className={classes.details} item xs={12} md={8}>
          <Grid container item xs={12}>
              <Grid item xs={12} className={classes.project_name}>
                {name}
              </Grid>
              <Grid container className={classes.account_info}>
                <Grid item xs={7} md={7} sm={7}>
                  {id}
                </Grid>
                <Grid item xs={5} md={5} sm={5}>
                  <Icon icon="mdi:discord" inline={true} /> Discord
                </Grid>
              </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={7} md={5} sm={7} className={classes.textLeft}>
              <span className={classes.icon_style}>Ξ</span><span className={classes.price}>{price}</span>
            </Grid>
            <Grid item xs={5} md={5} sm={5} className={classes.project_date}>
              <span>since {date}</span>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} className={classes.project_description}>
              {desc}
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}