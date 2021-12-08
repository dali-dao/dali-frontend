import React from 'react'
import Banner from '../../assets/Projects/banner_2.jpg';
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import {FormControl, Select, MenuItem, InputLabel, Grid} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ProjectItem from '../../components/Projects/projectItem';
import { Icon } from '@iconify/react'; 

function Projects() {
  const classes = useStyles();
  const projectItem = new Array(24).fill({image: "", name: "ConstitutionDAO", id: "@constitutiondao", price: 77789, date: "01-01-21", desc: "SharkDAO owns Nouns #2,#5,#33.ming..."})

  return (
    <div>
      <Grid container className={classes.banner_content} >
        <img alt='banner' src={Banner} className={classes.image_banner}></img>
        <Grid container spacing={5} className={classes.banner_text_content}>
          <Grid item xs={12} md={9}>
            <Grid item >
              <span className={classes.project_banner_title}>PROJECTS ON $DALI</span>
              <p className={classes.project_banner_description}>
                <span className={classes.font13}>
                <Icon icon="si-glyph:circle-info" className={classes.circle_info}/>
                The Juicebox protocol is open to anyone, and project configurations can vary widely. there are risks associated with interacting with all projects on the protocol. Projects built on the protocol are not endorsed or vetted by JuiceboxDAO, so you should do your own research and understand the risks before committing your funds.
                </span>
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid item >
              <Grid className={classes.project_banner_button_content}>
                <Link to="/projects" className={classes.create_project_button}>CREATE PROJECT
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid item >
              <Link to="/projects" className={classes.project_banner_tab}>ACTIVE</Link>
              <Link to="/projects" className={classes.project_banner_tab}>ARCHIVED</Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid item >
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
        </Grid>
      </Grid>
      <Grid className={classes.project_content}>
        <Grid className={classes.project_list_container}>
            <Grid container>
            {projectItem.map((item, index) => {
              return (         
              <Grid key={index} item xs={4} className={classes.margin_bottom_10}> 
                <Link to='/detail' className={classes.project_detail_link}>
                  <ProjectItem image={item.image} name={item.name} id={item.id} price={item.price} date={item.date} desc={item.desc} />
                </Link>
              </Grid>
              )
            })}
            </Grid>
            <div>
              <Pagination className={classes.pagination_content} color="secondary" count={10} variant="outlined" shape="rounded" />
            </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
