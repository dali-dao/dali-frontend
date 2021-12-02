/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
      lineHeight: '20px',
      color: 'grey'
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
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#fff'
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
    project_list_container: {
      width: '79%',
      marginLeft: '12%',
      marginTop: '25px'
    },
    margin_bottom_10: {
      marginBottom: '10px'
    },
    pagination_content: {
      margin: '40px 0px 50px 8px'
    }
  })
);
