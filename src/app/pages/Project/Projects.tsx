import React from 'react'
import Banner from '../../assets/Projects/banner_2.jpg';
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import {FormControl, Select, InputLabel, Grid} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ProjectItem from '../../components/Projects/projectItem';
import { Icon } from '@iconify/react';

function Projects() {
  const classes = useStyles();
  const projectItem = new Array(24).fill({image: "", name: "ConstitutionDAO", id: "@constitutiondao", price: 77789, date: "01-01-21", desc: "SharkDAO owns Nouns #2,#5,#33"})
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <Grid container className={classes.banner_content} >
        <img alt='banner' src={Banner} className={classes.image_banner}></img>
        <Grid container className={classes.banner_text_content}>
          <Grid item xs={12} md={8} style={{marginBottom: 22}}>
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
          <Grid item xs={12} md={4}>
            <Grid container className={classes.create_button_content} justifyContent="flex-end">
              <Grid item className={classes.project_banner_button_content}>
                <Link to="/projects" className={classes.create_project_button}>CREATE PROJECT
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} sm={6}>
            <Grid container >
              <Link to="/projects" className={classes.project_banner_tab_active}>ACTIVE</Link>
              <Link to="/projects" className={classes.project_banner_tab}>ARCHIVED</Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Grid container justifyContent="flex-end" >
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-volume-native-simple">Volume</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Volume"
                  inputProps={{
                    name: 'Volume',
                    id: 'outlined-volume-native-simple',
                  }}
                >
                  <option value={10} style={{height: 50, padding: 50}}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.project_content}>
        <Grid className={classes.project_list_container}>
            <Grid container spacing={1}>
              {projectItem.map((item, index) => {
                return (         
                <Grid key={index} item xs={12} md={4} sm={6} className={classes.margin_bottom_10} > 
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
