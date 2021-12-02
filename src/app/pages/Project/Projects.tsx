import Banner from '../../assets/Projects/banner_2.jpg';
import { useStyles } from "./styles";
import {FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.project_banner_container}>
      <img src={Banner} alt="banner" className={classes.banner}/>
      <div className={classes.description}>
        <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
        <p className={classes.project_banner_description}>The Juicebox protocol is open to anyone, and project configurations can vary widely. there are risks associated with interacting with all projects on the protocol. Projects built on the protocol are not endorsed or vetted by JuiceboxDAO, so you should do your own research and understand the risks before committing your funds.</p>
        <a className={classes.project_banner_tab}>ACTIVE</a>
        <a className={classes.project_banner_tab}>ARCHIVED</a>
      </div>
      <div className={classes.project_banner_button_content}>
        <button className={classes.create_project_button}>CREATE PROJECT</button>
      </div>
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">VOLUME</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value='1'
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
    </div>
  );
}

export default Projects;
