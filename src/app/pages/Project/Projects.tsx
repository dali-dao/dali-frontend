import React from 'react'
import Banner from '../../assets/Projects/banner_2.jpg';
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import {FormControl, Select, MenuItem, InputLabel, Grid} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ProjectItem from '../../components/Projects/projectItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'; 

function Projects() {
  const classes = useStyles();
  const projectItem = new Array(24).fill({image: "", name: "ConstitutionDAO", id: "@constitutiondao", price: 77789, date: "01-01-21", desc: "SharkDAO owns Nouns #2,#5,#33.ming..."})

  return (
    <div>
      <Grid container className={classes.banner_content} style={{ backgroundImage: `url(${Banner})` }}>
        <Grid item xs={12} md={7} className={classes.banner_left}>
          <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
          <p className={classes.project_banner_description}>
          <FontAwesomeIcon icon={'info'} />
            <span style={{fontSize: 13}}>
            <Icon icon="si-glyph:circle-info" style={{marginRight: 10}} className={classes.verticalMiddle}/>
            The Juicebox protocol is open to anyone, and project configurations can vary widely. there are risks associated with interacting with all projects on the protocol. Projects built on the protocol are not endorsed or vetted by JuiceboxDAO, so you should do your own research and understand the risks before committing your funds.
            </span>
            </p>
            <Link to="/projects" className={classes.project_banner_tab}>ACTIVE</Link>
            <Link to="/projects" className={classes.project_banner_tab}>ARCHIVED</Link>
        </Grid>
        <Grid item xs={12} md={4}  className={classes.banner_right}>
          <Grid className={classes.project_banner_button_content}>
          <Link to="/create_project" className={classes.create_project_button}>CREATE PROJECT</Link>
          </Grid>
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
        </Grid>
      </Grid>
      <Grid className={classes.project_content}>
        <Grid className={classes.project_list_container}>
            <Grid container>
            {projectItem.map((item, index) => {
              return (         
              <Grid key={index} item xs={4} className={classes.margin_bottom_10}>
                <ProjectItem image={item.image} name={item.name} id={item.id} price={item.price} date={item.date} desc={item.desc} />
              </Grid>
              )
            })}
            </Grid>
            <div>
              <Pagination className={classes.pagination_content} color="secondary" count={10} variant="outlined" shape="rounded" />
            </div>
        </Grid>
      </Grid>
      {/* <img src={Banner} alt="banner" className={classes.banner}/>
      <div className={classes.description}>
        <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
        <p className={classes.project_banner_description}>
        <FontAwesomeIcon icon={'info'} />
          The Juicebox protocol is open to anyone, and project configurations can vary widely. there are risks associated with interacting with all projects on the protocol. Projects built on the protocol are not endorsed or vetted by JuiceboxDAO, so you should do your own research and understand the risks before committing your funds.</p>
        <Link to="/projects" className={classes.project_banner_tab}>ACTIVE</Link>
        <Link to="/projects" className={classes.project_banner_tab}>ARCHIVED</Link>
      </div>
      <div className={classes.project_banner_button_content}>
        <Link to="/create_project" className={classes.create_project_button}>CREATE PROJECT</Link>
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
        <Grid className={classes.project_list_container}>
          <Grid container>
          {projectItem.map((item, index) => {
            return (         
            <Grid key={index} item xs={4} className={classes.margin_bottom_10}>
              <ProjectItem image={item.image} name={item.name} id={item.id} price={item.price} date={item.date} desc={item.desc} />
            </Grid>
            )
          })}
          </Grid>
          <div>
            <Pagination className={classes.pagination_content} color="secondary" count={10} variant="outlined" shape="rounded" />
          </div>
      </Grid> */}
    </div>
  );
}

export default Projects;
