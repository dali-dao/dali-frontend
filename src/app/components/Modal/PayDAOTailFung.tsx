import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import ImageUpload from '../ImageUpload';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: '10%',
    color: '#fff',
    margin: 'auto',
    boxShadow: '0px 0px 10px 10px #0c0f16'
  },
  //common class
  textLeft: {textAlign: 'left'}, textRight: {textAlign: 'right'}, textCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  marginTop10:{marginTop: 10},marginTop20:{marginTop: 20},marginTop30:{marginTop: 30},marginTop40:{marginTop: 40},marginTop50:{marginTop: 50},
  marginBottom5:{marginBottom: 5},marginBottom10:{marginBottom: 10},marginBottom20:{marginBottom: 20},marginBottom30:{marginBottom: 30},marginBottom40:{marginBottom: 40},marginBottom50:{marginBottom: 50},
  marginLeft10:{marginLeft: 10},marginLeft20:{marginLeft: 20},marginLeft30:{marginLeft: 30},marginLeft40:{marginLeft: 40},marginLeft50:{marginLeft: 50},
  marginRight10:{marginRight: 10},marginRight20:{marginRight: 20},marginRight30:{marginRight: 30},marginRight40:{marginRight: 40},marginRight50:{marginRight: 50},
  fontSize12: {fontSize: 12},
  paddingLeft15: {paddingLeft: 15},
  paddingLeft10: {paddingLeft: 10},
  //component class
  modal_header: {
    background: '#2c333f',
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
  },
  project_title: {
    fontFamily: 'CerebriSansPro-Bold',
    fontSize: 16
  },
  modal_content: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    display: 'block',
    textAlign: 'left',
  },
  modal_description_header: {
    color: '#919398',
    fontSize: 13
  },
  notice_content: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 15,
    marginTop: 30, 
  },
  table_content: {
    border: '1px solid #596275',
    borderRadius: 3,
    marginTop: 15
  },
  payamount_td: {borderBottom: '1px solid #596275', borderRight: '1px solid #596275', fontSize: 15, padding: 15, backgroundColor: '#262d37'},
  payamount_td_value: {borderBottom: '1px solid #596275', padding: 15, backgroundColor: '#2c333f', fontSize: 14},
  dft_td: {borderBottom: '1px solid #596275', borderRight: '1px solid #596275', padding:'30px 0px 0px 15px', fontSize: 15, backgroundColor: '#262d37'},
  dft_value:{borderBottom: '1px solid #596275', padding: 15, backgroundColor: '#2c333f', fontSize: 14},
  dft_reserved: {borderRight: '1px solid #596275', padding: 15, backgroundColor: '#262d37', fontSize: 15},
  dft_reserved_2: {padding: 15, backgroundColor: '#2c333f', fontSize: 14},
  memo_title: {fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15, marginBottom: 10},
  notice_addr: {fontSize: 13, color: '#919398', textAlign: 'left', marginTop: 10},
  textArea_content:{height: 90, color: '#fff', resize: 'none', paddingLeft: 16, paddingTop: 20, width: '98%', background: '#0f101d'},
  textArea_character: {textAlign: 'right', display: 'block', color: '#c5c6ca', fontSize: 13},
  receive_erc20: {fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15, marginBottom: 10},
  receive_content: {marginTop: 30, marginBottom: 20},
  cancel_button: {color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120, height: 45},
  pay_button: {backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 120, color: '#000', height: 45},
  erc20_content: {color: '#999ba0', fontSize: 13},
  
  button_content:{
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    borderBottomRightRadius: 5, borderBottomLeftRadius: 5,
  }

}));

export default function PayDAOTailFung() {
  const classes = useStyles();
  const [inputedCount, setInputCount] = React.useState(0);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  
  const changeTextArea = function(event: any) {
    let strLength = event.currentTarget.value.length;
    setInputCount(strLength);
  }

  const handleChange = (event:any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Pay DAOTailFung</strong>
      </Grid>
      <Grid container className={classes.modal_content}>
        <Grid item xs={12} className={classes.modal_description_header}>
          Paying DAOTaiFung is not an investment—it’s a way to support the project. Any value or utility of the tokens you receive is determined by DAOTaiFung.
        </Grid>
        <Grid container>
          <Grid className={classes.notice_content}>
            Notice from DAOTailFung
            <Grid className={classes.notice_addr}>
              <span>All funds paid out to a Gnosis safe, <strong>0x5A8413DfEFB75899c93eA5A6152Eb5aFe01A956E</strong></span>
            </Grid>
          </Grid>
          
          <Grid container className={classes.table_content}>
            <Grid item xs={12} md={3} className={classes.payamount_td} >Pay amount</Grid>
            <Grid item xs={12} md={9} className={classes.payamount_td_value}>473,995 USD (100 ETH)</Grid>
            <Grid item xs={12} md={3} className={classes.dft_td}>DFT for you</Grid>
            <Grid item xs={12} md={9} className={classes.dft_value}>
              <p>85,000,000</p>
              <p>To: 85,000,000</p>
            </Grid>
            <Grid item xs={12} md={3} className={classes.dft_reserved} >
              DFT reserved
            </Grid>
            <Grid item xs={12} md={9} className={classes.dft_reserved_2}>
              15,000,000
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.marginTop30} >
          <Grid className={classes.memo_title}>Memo</Grid>
          <Grid className={classes.width100}>
            <textarea onChange={changeTextArea} placeholder="text here" className={classes.textArea_content} ></textarea>
            <span className={classes.textArea_character}>{inputedCount}/256 text character</span>
          </Grid>
        </Grid>

        <Grid container  className={classes.marginTop30} >
          <ImageUpload />
        </Grid>

        <Grid container className={classes.receive_content}>
          <Grid className={classes.receive_erc20}>Receive ERC20</Grid>
          <Grid container>
            <FormControlLabel
              className={classes.erc20_content}
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" className={classes.paddingLeft10} />}
              label="Check this to mint DTF ERC20 to your wallet. Leave unchecked to have your token balance tracked by Juicebox, saving gas on this transaction. You can always claim your ERC20 tokens later."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.button_content}>
        <Button className={classes.cancel_button}>CANCEL</Button>
        <Button className={classes.pay_button}>PAY</Button>
      </Grid>
    </div>
  );
}
