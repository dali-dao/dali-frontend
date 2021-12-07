import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MetaMask from '../../assets/Popup/metamask.png';
import Trezor from '../../assets/Popup/trezor.png';
import CoinbaseWallet from '../../assets/Popup/coinbase_wallet.png';
import Autherium from '../../assets/Popup/autherium.png';
import GnezisSafe from '../../assets/Popup/gnezis_safe.png';
import KeyStone from '../../assets/Popup/keystone.png';
import Lattiz from '../../assets/Popup/lattiz.png';
import Ledgez from '../../assets/Popup/ledgez.png';
import Opera from '../../assets/Popup/opera.png';
import WalletConnect from '../../assets/Popup/walletconnect.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
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
  fontSize12: {fontSize: 12},fontSize13: {fontSize: 13},fontSize14: {fontSize: 14},fontSize15: {fontSize: 15},
  paddingLeft15: {paddingLeft: 15},
  paddingLeft10: {paddingLeft: 10},
  verticalAlignMiddle: {verticalAlign: 'middle'},
  wallet_header_content: {color: '#919398', textAlign: 'left'},
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
  icon_size: {
    width: 35,
    height: 35
  },
  select_header: {width: '100%', textAlign: 'left', marginBottom: 20},
  wallet_info_desc: {borderBottomRightRadius: 5, borderBottomLeftRadius: 5,background: '#1c222d',
  border: '1px solid #2f3540',
  padding: '25px 40px'},
  wallet_header_title: {
    textAlign: 'left',
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
  wallet_image_content: {
    textAlign: 'left',
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '25px 40px',
    fontFamily: 'CerebriSansPro-ExtraBold'
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Select a Wallet</strong>
      </Grid>
      <Grid container className={classes.wallet_image_content}>
        <strong className={classes.select_header}>Please select a wallet to connect to this dapp:</strong>
        <Grid item xs={12} md={3} className={classes.marginBottom30}>
          <img alt='metamask' src={MetaMask} className={classes.verticalAlignMiddle}></img><span className={classes.marginLeft10}>Metamask</span>
        </Grid>
        <Grid item xs={12} md={3} className={classes.marginBottom30}>
          <img className={classes.verticalAlignMiddle} alt='Trezor' src={Trezor}></img><span  className={classes.marginLeft10}>Trezor</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='CoinbaseWallet' src={CoinbaseWallet} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Coinbase Wallet</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Opera' src={Opera} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Opera</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Ledgez' src={Ledgez} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Ledgez</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='WalletConnect' src={WalletConnect} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Walletconnect</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='KeyStone' src={KeyStone} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Keystone</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Lattiz' src={Lattiz} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Lattiz</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='GnezisSafe' src={GnezisSafe} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Gnezis safe</span>
        </Grid>
        <Grid item xs={12} md={3}>
          <img alt='Autherium' src={Autherium} className={classes.verticalAlignMiddle}></img><span  className={classes.marginLeft10}>Autherium</span>
        </Grid>
      </Grid>
      <Grid className={classes.wallet_info_desc}>
        <p className={classes.wallet_header_title}>What is a wallet?</p>
        <p className={classes.wallet_header_content}>Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser, an extension added to your browser, a piece of hardware plugged into your computer or even an app on your phone. For more information about wallets, see this explanation.</p>
      </Grid>
    </div>
  );
}
