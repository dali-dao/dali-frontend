/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Project List
    image_banner: {
      width: '100%',
      height: 230,
      '@media (max-width: 1105px)': {
        minHeight: '250px',
      },
      '@media (max-width: 960px)': {
        minHeight: '300px',
      },
      '@media (max-width: 710px)': {
        minHeight: '320px',
      },
    },
    banner_text_content: {
      width: '100%',
      position: 'absolute',
      top: '12%',
      paddingLeft: 150,
      paddingRight: 150,
      '@media (max-width: 1280px)': {
        paddingLeft: 50,
        paddingRight: 50,
      },
      '@media (max-width: 1120px)': {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    banner_content_child: {
      marginBottom: 22,
    },
    project_banner_title: {
      marginTop: '5px',
      marginBottom: '10px',
      display: 'block',
      fontSize: '28px',
      fontFamily: 'CerebriSansPro-Heavy',
      textAlign: 'left',
      color: '#fff',
      '@media (max-width: 960px)': {
        textAlign: 'center',
      },
    },
    project_banner_description: {
      fontSize: '14.1px',
      color: theme.palette.success.main,
      textAlign: 'left',
      height: 60,
    },
    circle_info: {
      verticalAlign: 'middle',
      marginRight: 10,
    },
    create_button_content: {
      justifyContent: 'flex-end',
      '@media (max-width: 960px)': {
        justifyContent: 'center',
        marginBottom: 20,
      },
    },
    project_banner_button_content: {
      textAlign: 'center',
      width: '54%',
    },
    create_project_button: {
      fontSize: 13,
      display: 'block',
      padding: '15px 20px',
      textAlign: 'center',
      borderRadius: '5px',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#000',
      backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
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
    formControl: {
      width: '54%',
      textAlign: 'left',
      background: '#283039',
      border: '1px solid #535b73',
      borderRadius: 5,
      color: '#9b9da0',
    },
    volume_select_tag: {
      color: '#9b9da0',
    },
    list_content: {
      background: theme.palette.background.default,
      paddingTop: 30,
    },
    project_content: {
      paddingLeft: 150,
      paddingRight: 150,
      '@media (max-width: 1280px)': {
        paddingLeft: 50,
        paddingRight: 50,
      },
      '@media (max-width: 1120px)': {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    project_list_container: {},
    margin_bottom_10: {
      marginBottom: '10px',
    },
    project_detail_link: {
      textDecoration: 'none',
    },
    pagination_content: {
      padding: '20px 0px',
    },
    // Project Detail
    project_detail_container: {
      background: theme.palette.background.default,
    },
    banner_content: {
      position: 'relative',
    },
    detail_image_banner: {
      width: '100%',
      height: 230,
      '@media (max-width: 960px)': {
        minHeight: '400px',
      },
      '@media (max-width: 710px)': {
        minHeight: '420px',
      },
    },
    project_detail_banner: {
      position: 'absolute',
      top: '15%',
      paddingLeft: 150,
      paddingRight: 150,
      '@media (max-width: 1280px)': {
        paddingLeft: 50,
        paddingRight: 50,
      },
      '@media (max-width: 1120px)': {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },

    width100: {
      width: '100%',
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
    banner: {
      width: '100%',
      position: 'relative',
    },
    description: {
      position: 'absolute',
      top: '-15px',
      textAlign: 'left',
      left: '200px',
      width: '750px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    banner_left_description: {
      position: 'relative',
    },
    banner_description: {
      top: '15%',
      left: 160,
      position: 'absolute',
      width: '80%',
    },
    banner_icon: {},
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
      marginLeft: 30,
    },
    main_content: {
      height: 'auto',
      marginTop: 15,
      marginBottom: 15,
      paddingLeft: 140,
      paddingRight: 140,
      '@media (max-width: 1280px)': {
        paddingLeft: 40,
        paddingRight: 40,
      },
      '@media (max-width: 1120px)': {
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
    contact_info: {
      marginTop: 10,
    },
    marginRight10: {
      marginRight: 10,
    },
    marginTop20: {
      marginTop: 20,
    },
    marginTopAuto: {
      marginTop: 'auto',
    },
    project_info_desc: {
      textAlign: 'left',
      color: '#fff',
      '@media (max-width: 960px)': {
        textAlign: 'center',
      },
    },
    receive_token_control: {
      width: '90%',
    },
    helper_text: {
      marginBottom: 20,
      marginLeft: 0,
      color: 'grey',
    },
    pay_button_content: {
      textAlign: 'center',
      marginBottom: 30,
    },
    pay_button_style: {
      width: '90%',
      background: 'rgb(247 219 14)',
      height: 40,
      color: '#000',
      borderRadius: 0,
    },
    activity_content: {
      backgroundColor: '#1a1d24',
      borderRadius: 5,
      marginBottom: 20,
      height: 'auto',
      textAlign: 'left',
    },
    detail_banner_right: {
      border: '1px solid grey',
      padding: '10px 10px',
      borderRadius: '5px',
      color: '#fff',
      fontFamily: 'CerebriSansPro-ExtraBold',
      textAlign: 'center',
      cursor: 'pointer',
      '@media (max-width: 960px)': {
        marginTop: 10,
      },
    },
    padding10: {
      padding: 10,
    },
    detail_content: {
      margin: '3% 11%',
      overflow: 'auto',
    },
    detail_left_content: {
      float: 'left',
      width: '48%',
    },
    detail_right_content: {
      float: 'right',
      width: '48%',
    },
    circl_info_font: {
      color: theme.palette.success.main,
      verticalAlign: 'middle',
    },
    detail_info: {
      width: '100%',
      border: '1px solid grey',
      borderRadius: '5px',
      overflow: 'auto',
      display: 'block',
    },
    detail_info_left: {
      textAlign: 'left',
      fontSize: '14px',
      float: 'left',
      display: 'block',
      color: theme.palette.error.light,
      fontFamily: 'Roboto-Medium',
    },
    detail_info_right: {
      textAlign: 'right',
      fontSize: '14px',
      color: theme.palette.error.light,
      display: 'block',
      fontFamily: 'Roboto-Medium',
    },
    detail_row: {
      color: theme.palette.success.main,
      padding: '5px 20px',
    },
    detail_first_row: {
      marginTop: 20,
      color: theme.palette.success.main,
      padding: '5px 20px',
    },
    //common Class
    verticalMiddle: {
      verticalAlign: 'middle',
    },
    TextCenter: {
      textAlign: 'center',
    },
    TextLeft: {
      textAlign: 'left',
    },
    TextRight: {
      textAlign: 'right',
    },
    font13: {
      fontSize: 13,
    },
    //end
    holders_button: {
      border: `1px solid ${theme.palette.info.main}`,
      background: theme.palette.background.default,
    },
    manage_button: {
      background: '#454d5c',
      color: '#fff',
      padding: '5px 10px',
      border: '1px solid #2b3242',
    },
    holder_button_content: {
      marginBottom: 10,
      textAlign: 'right',
    },
    detail_address: {
      fontFamily: 'CerebriSansPro-Heavy',
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 45,
    },
    address_container: {
      textAlign: 'left',
      color: theme.palette.success.main,
      marginBottom: 10,
    },
    supply_container: {
      textAlign: 'left',
      marginBottom: 10,
      color: theme.palette.success.main,
    },
    detail_address_value: {
      fontSize: 13,
      marginLeft: 10,
    },
    detail_supply: {
      fontFamily: 'CerebriSansPro-Heavy',
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 20,
    },
    balance_container: {
      marginBottom: 10,
      textAlign: 'left',
      color: theme.palette.success.main,
    },
    detail_supply_value: {
      color: theme.palette.success.main,
      fontSize: 13,
      marginLeft: 10,
    },
    detail_claimable_value: {
      marginLeft: 113,
      fontSize: 13,
    },
    detail_total_value: {
      marginLeft: 113,
      fontSize: 13,
    },
    detail_balance: {
      fontFamily: 'CerebriSansPro-Heavy',
      color: '#9b9c9e',
      textAlign: 'left',
      fontSize: 13,
      marginRight: 15,
    },
    detail_balance_value: {
      fontSize: 13,
      marginLeft: 10,
    },
    detail_last_row: {
      marginBottom: 20,
      padding: '5px 20px',
      color: theme.palette.success.main,
    },
    detail_info_price: {
      color: theme.palette.success.dark,
      marginLeft: 10,
    },
    currency_input: {
      width: '73%',
      float: 'left',
      marginLeft: '20px',
      marginTop: '15px',
    },
    detail_row_last: {
      height: 20,
      marginBottom: 25,
    },
    contribute_label: {
      paddingLeft: '20px',
      paddingTop: '20px',
      textAlign: 'left',
      fontSize: '12px',
      float: 'left',
      display: 'block',
    },
    input_outline: {
      paddingRight: 0,
      height: 40,
      borderRadius: 0,
      border: '1px solid #474f5f',
    },
    chart_content: {
      marginTop: 20,
      marginBottom: 20,
    },
    funding_cycle: {
      marginTop: 30,
    },

    breakWord: {
      wordBreak: 'break-all',
    },
    banner_icon_content: {
      textAlign: 'left',
      '@media (max-width: 960px)': {
        textAlign: 'center',
      },
    },
    detail_banner_icon: {
      verticalAlign: 'middle',
      width: 16,
      height: 18,
    },
    detail_banner_user_info: {
      fontWeight: 'bold',
      fontSize: 14,
      marginRight: 20,
    },
    contribute_content: {
      borderRadius: 5,
      marginBottom: 20,
      height: 'auto',
      textAlign: 'left',
      border: `1px solid ${theme.palette.info.main}`,
      backgroundColor: theme.palette.secondary.main,
    },
    contribute_header_title: {
      paddingTop: 20,
      paddingBottom: 10,
      paddingLeft: 20,
      color: theme.palette.error.light,
    },
    contribute_addr: {
      color: theme.palette.success.dark,
    },
    detail_banner_icon_style: {
      fontWeight: 'bold',
      fontSize: 14,
    },

    volume_content: {
      border: `1px solid ${theme.palette.info.main}`,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 5,
      marginBottom: 20,
      height: 'auto',
    },
    volume_currency_content: {
      borderRadius: 5,
      marginBottom: 30,
      height: 'auto',
    },
    spice_token_title: {
      marginBottom: 20,
      textAlign: 'left',
      fontFamily: 'CerebriSansPro-ExtraBold',
      color: theme.palette.error.light,
    },
    holder_buttn_style: {
      marginBottom: 10,
      textAlign: 'right',
    },
    // For Detail page
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
    },
  }),
)
