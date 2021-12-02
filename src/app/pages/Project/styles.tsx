/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { relative } from "path";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
        width: '100%'
    },
    project_banner_container: {
      position: 'relative'
    },
    description: {
      position: 'absolute',
      top: '-15px',
      textAlign: 'left',
      left: '200px',
      width: '750px'
    },
    project_banner_title: {
      marginTop: '50px',
      display: 'block',
      fontSize: '28px'
    },
    project_banner_description: {
      fontSize: '14.1px',
      lineHeight: '20px'
    },
    project_banner_button_content: {
      position: 'absolute',
      top: '55px',
      right: '150px',
    },
    create_project_button: {
      padding: '20px 50px',
      borderRadius: '5px',
      fontWeight: 'bold',
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)'
    },
    project_banner_tab: {
      marginRight: '50px',
      marginTop: '10px',
      display: 'block',
      float: 'left',
      cursor: 'pointer'
    },
    formControl: {
      textAlign: 'left',
      width: '220px',
      top: '145px',
      right: '145px',
      margin: theme.spacing(1),
      minWidth: 120,
      position: 'absolute !important' as any,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);