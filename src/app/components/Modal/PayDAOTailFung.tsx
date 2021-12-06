import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Divider, Button } from '@material-ui/core';
import ImageUpload from '../ImageUpload';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },
  //common class
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  //component class
  modal_header: {
    background: '#2c333f',
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '20px 0px 20px 30px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  modal_content: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    display: 'block',
    textAlign: 'left',
    padding: '20px 20px 10px 30px',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
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
  }
}));

export default function HeadsUp() {
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
            <Grid style={{fontSize: 13, color: '#919398', textAlign: 'left', marginTop: 10}}>
              <span>All funds paid out to a Gnosis safe, <strong>0x5A8413DfEFB75899c93eA5A6152Eb5aFe01A956E</strong></span>
            </Grid>
          </Grid>
          
          <Grid container className={classes.table_content}>
            <Grid item xs={12} md={3} style={{borderBottom: '1px solid #596275', borderRight: '1px solid #596275', fontSize: 15, padding: 15, backgroundColor: '#262d37'}}>Pay amount</Grid>
            <Grid item xs={12} md={9} style={{borderBottom: '1px solid #596275', padding: 15, backgroundColor: '#2c333f', fontSize: 14}}>473,995 USD (100 ETH)</Grid>
            <Grid item xs={12} md={3} style={{borderBottom: '1px solid #596275', borderRight: '1px solid #596275', padding:'30px 0px 0px 15px', fontSize: 15, backgroundColor: '#262d37'}}>DFT for you</Grid>
            <Grid item xs={12} md={9} style={{borderBottom: '1px solid #596275', padding: 15, backgroundColor: '#2c333f', fontSize: 14}}>
              <p>85,000,000</p>
              <p>To: 85,000,000</p>
            </Grid>
            <Grid item xs={12} md={3} style={{borderRight: '1px solid #596275', padding: 15, backgroundColor: '#262d37', fontSize: 15}}>
              DFT reserved
            </Grid>
            <Grid item xs={12} md={9} style={{ padding: 15, backgroundColor: '#2c333f', fontSize: 14}}>
              15,000,000
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{marginTop: 30}}>
          <Grid style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15, marginBottom: 10}}>Memo</Grid>
          <Grid style={{width: '100%'}}>
            <textarea onChange={changeTextArea} placeholder="text here" style={{height: 90, color: '#fff', resize: 'none', paddingLeft: 16, paddingTop: 20, width: '98%', background: '#0f101d'}}></textarea>
            <span style={{textAlign: 'right', display: 'block', color: '#c5c6ca', fontSize: 13}}>{inputedCount}/256 text character</span>
          </Grid>
        </Grid>

        <Grid container style={{marginTop: 30}}>
          <ImageUpload />
        </Grid>

        <Grid container style={{marginTop: 30, marginBottom: 20}}>
          <Grid style={{fontFamily: 'CerebriSansPro-ExtraBold', fontSize: 15, marginBottom: 10}}>Receive ERC20</Grid>
          <Grid container>
            <FormControlLabel
              style={{color: '#999ba0', fontSize: 13}}
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{paddingLeft: 10}} />}
              label="Check this to mint DTF ERC20 to your wallet. Leave unchecked to have your token balance tracked by Juicebox, saving gas on this transaction. You can always claim your ERC20 tokens later."
            />
          </Grid>
        </Grid>

        <Divider />

        <Grid container style={{marginTop: 30, marginBottom: 20}}>
          <Button style={{color: '#fff', border: '1px solid #596275', borderRadius: 5, marginRight: 20, width: 120}}>CANCEL</Button>
          <Button style={{backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)', width: 120, color: '#000'}}>PAY</Button>
        </Grid>
      </Grid>
    </div>
  );
}
