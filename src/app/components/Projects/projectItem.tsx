import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Icon } from '@iconify/react'
import Grid from '@material-ui/core/Grid'
import ProjectImage from '../../assets/Projects/project_1.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontSize: 12,
      background: theme.palette.background.paper,
      borderRadius: '10px',
      padding: '10px',
    },
    details: {
      textAlign: 'left',
      paddingLeft: 10,
    },
    content: {},
    account_info: {
      color: theme.palette.success.main,
      marginBottom: 5,
    },
    project_description: {
      color: theme.palette.success.light,
    },
    price: {
      color: theme.palette.success.dark,
      fontSize: 15,
    },
    project_date: {
      color: theme.palette.success.main,
    },
    project_name: {
      fontSize: 17,
      color: theme.palette.error.light,
      fontFamily: 'CerebriSansPro-ExtraBold',
      marginBottom: 10,
      marginTop: 5,
    },
    image_content: {
      margin: 'auto',
    },
    project_image: {
      width: '100%',
    },
    padding10: {},
    paddingTop10: {},
    icon_style: {
      color: '#a3a5a7',
      marginRight: 10,
    },
    textLeft: {},
    since_date: {
      verticalAlign: 'middle',
    },
  }),
)

interface ItemProps {
  image: string
  name: string
  id: string
  price: number
  date: string
  desc: string
}

export default function ProjectItem({ image, name, id, price, date, desc }: ItemProps) {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} md={3} className={classes.image_content}>
        <img src={ProjectImage} alt="project_image" className={classes.project_image} />
      </Grid>
      <Grid className={classes.details} item xs={9} md={9}>
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
        <Grid container item xs={12} className={classes.paddingTop10}>
          <Grid item xs={7} md={7} sm={7} className={classes.textLeft}>
            <span className={classes.icon_style}>Ξ</span>
            <span className={classes.price}>{price}</span>
          </Grid>
          <Grid item xs={5} md={5} sm={5} className={classes.project_date}>
            <span className={classes.since_date}>since {date}</span>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.paddingTop10}>
          <Grid item xs={12} className={classes.project_description}>
            {desc}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
