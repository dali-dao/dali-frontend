/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner_content: {
      position: 'relative',
    },
    project_content: {
    },
    width100:{
      width: '100%'
    },
    banner_left: {
      marginTop: 45,
      position: 'absolute',
    },
    banner_right: {
      position: 'absolute',
      height: 200,
      right: '160px',
      top: 55,
    },
    banner_text_content: {
      width: '84%',
      margin: 'auto',
      position: 'absolute',
      top: '12%',
      left: '11%'
    },
    banner: {
        width: '100%',
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
      marginTop: '5px',
      marginBottom: '10px',
      display: 'block',
      fontSize: '28px',
      fontFamily: 'CerebriSansPro-Heavy',
      textAlign: 'left'
    },
    project_banner_description: {
      fontSize: '14.1px',
      color: 'grey',
      textAlign: 'left'
    },
    project_banner_button_content: {
      textAlign: 'right'
    },
    create_project_button: {
      display: 'block',
      padding: 15,
      textAlign: 'center',
      borderRadius: '5px',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#000',
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)'
    },
    image_banner: {
      width: '100%',
      height: 230,
      "@media (max-width: 1105px)": {
        minHeight: "250px",
      },
      "@media (max-width: 960px)": {
        minHeight: "350px",
      },
      "@media (max-width: 835px)": {
        minHeight: "370px",
      },
      "@media (max-width: 627px)": {
        minHeight: "400px",
      },
    },
    project_banner_tab: {
      marginTop: '5px',
      marginRight: '50px',
      display: 'block',
      float: 'left',
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#fff',
      fontSize: 14,
      fontFamily: 'CerebriSansPro-Bold',
    },
    project_banner_tab_active: {
      borderBottom: '3px solid #d3dc26',
      height: 50,
      marginTop: '5px',
      marginRight: '50px',
      display: 'block',
      float: 'left',
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#fff',
      fontSize: 14,
      fontFamily: 'CerebriSansPro-Bold',
    },
    formControl: {
      width: '100%',
      textAlign: 'left'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    project_list_container: {
      width: '83%',
      margin: 'auto',
      marginTop: 30
    },
    margin_bottom_10: {
      marginBottom: '10px'
    },
    pagination_content: {
      margin: '40px 0px 50px 8px'
    },
    banner_left_description: {
      position: 'relative'
    },
    banner_description: {
      top: '15%',
      left: 160,
      position: 'absolute',
      width: '80%'
    },
    banner_icon: {
      width: '10%',
      maxWidth: '100%',
      height: '100%',
      float: 'left'
    },
    detail_banner_description: {
      top: '-25px',
      left: '23%',
      width: '40%',
      position: 'absolute',
    },
    banner_description_content: {
      position: 'absolute',
      left: 150,
      textAlign: 'left',
      marginLeft: 30
    },
    main_content: {
      margin: '0px 128px',
      height: 'auto'
    },
    contact_info: {
      marginTop: 10
    },
    marginRight10: {
      marginRight: 10
    },
    detail_banner_right: {
      border: '1px solid grey',
      padding: '10px 15px',
      borderRadius: '5px',
      position: 'absolute',
      right: '12%',
      top: '230px'
    },
    detail_content: {
      margin: '3% 11%',
      overflow: 'auto'
    },
    detail_left_content: {
      float: 'left',
      width: '48%',
    },
    detail_right_content: {
      float: 'right',
      width: '48%'
    },
    detail_info: {
      width: '100%',
      border: '1px solid grey',
      borderRadius: '5px',
      overflow: 'auto',
      display: 'block'
    },
    detail_info_left: {
      textAlign: 'left',
      fontSize: '14px',
      float: 'left',
      display: 'block',
      fontFamily: 'Roboto-Medium'
    },
    detail_info_right: {
      textAlign: 'right',
      fontSize: '14px',
      display: 'block',
      fontFamily: 'Roboto-Medium'
    },
    detail_row: {
      padding: '5px 20px'
    },
    detail_first_row: {
      marginTop: 20,
      padding: '5px 20px'
    },
    //common Class
    verticalMiddle: {
      verticalAlign: 'middle'
    },
    TextCenter: {
      textAlign: 'center'
    },
    TextLeft: {
      textAlign: 'left'
    },
    TextRight: {
      textAlign: 'right'
    },
    font13: {
      fontSize: 13
    },
    //end
    holders_button: {
      border: '1px solid #2b3242',
      background: '#10141b'
    },
    manage_button: {
      background: '#454d5c',
      color: '#fff',
      padding: '5px 10px',
      border: '1px solid #2b3242',
    },
    detail_address: {
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 45
    },
    detail_address_value: {
      fontSize: 13,
      marginLeft: 10
    },
    detail_supply: {
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 20
    },
    detail_supply_value: {
      fontSize: 13,
      marginLeft: 10
    },
    detail_claimable_value: {
      marginLeft: 105,
      fontSize: 13
    },
    detail_total_value: {
      marginLeft: 105,
      fontSize: 13
    },
    detail_balance: {
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 15
    },
    detail_balance_value: {
      fontSize: 13,
      marginLeft: 10
    },
    detail_last_row: {
      marginBottom: 20,
      padding: '5px 20px'
    },
    detail_info_price: {
      color: 'yellow',
      marginLeft: 10
    },
    currency_input: {
      width: '73%',
      float: 'left',
      marginLeft: '20px',
      marginTop: '15px'
    },
    detail_row_last: {
      height: 20,
      marginBottom: 25
    },
    contribute_label: {
      paddingLeft: '20px',
      paddingTop: '20px',
      textAlign: 'left',
      fontSize: '12px',
      float: 'left',
      display: 'block'
    },
    input_outline: {
      paddingRight: 0,
      height: 40,
      borderRadius: 0,
    },
    chart_content: {
      marginTop: 20, 
      marginBottom: 20
    },
    funding_cycle: {
      marginTop: 30
    },
    circle_info: {
      verticalAlign: 'middle',
      marginRight: 10
    },
    project_detail_link: {
      textDecoration: 'none'
    }
  })
);
