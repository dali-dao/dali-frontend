import { useStyles } from './styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import LogoBlack from '../../assets/Landing/logo_black.png'

function MainPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.header_content}></Grid>
      <Grid container className={classes.banner_content}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} className={classes.banner_background_1}></Grid>
          <Grid item xs={12} md={7} className={classes.banner_background_2}></Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.about_dali_content}></Grid>
      <Grid container className={classes.what_do_content}></Grid>
      <Grid container className={classes.slide_content}></Grid>
      <Grid container className={classes.team_content}></Grid>
      <Grid container className={classes.value_in_vision}></Grid>
      <Grid container className={classes.load_map_content}></Grid>
      <Grid container className={classes.white_paper_content}></Grid>
      <Grid container className={classes.join_us_content}></Grid>
      <Grid container className={classes.footer_content}></Grid>
    </div>
  )
}

export default MainPage
