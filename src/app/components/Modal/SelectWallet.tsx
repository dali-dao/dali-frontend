import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';
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
    width: '70%',
    margin: 'auto',
    boxShadow: '3px 3px #0a0b14, -1em 0 0.4em #0d0e18'
  },//common class
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
  project_info_1: {
    background: '#1c222d',
    border: '1px solid #2f3540',
    padding: '20px 20px 10px 20px',
    textAlign: 'left'
  },
  icon_size: {
    width: 35,
    height: 35
  }
}));

export default function LabTabs() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Select a Wallet</strong>
      </Grid>
      <Grid container className={classes.project_info_1}>
        <strong style={{width: '100%', textAlign: 'left', marginBottom: 20}}>Please select a wallet to connect to this dapp:</strong>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='metamask' src={MetaMask} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10,}}>Metamask</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img style={{verticalAlign: 'middle'}} alt='Trezor' src={Trezor}></img><span style={{marginLeft: 10}}>Trezor</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='CoinbaseWallet' src={CoinbaseWallet} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Coinbase Wallet</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Opera' src={Opera} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Opera</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Ledgez' src={Ledgez} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Ledgez</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='WalletConnect' src={WalletConnect} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Walletconnect</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='KeyStone' src={KeyStone} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Keystone</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='Lattiz' src={Lattiz} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Lattiz</span>
        </Grid>
        <Grid item xs={12} md={3} style={{marginBottom: 30}}>
          <img alt='GnezisSafe' src={GnezisSafe} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Gnezis safe</span>
        </Grid>
        <Grid item xs={12} md={3}>
          <img alt='Autherium' src={Autherium} style={{verticalAlign: 'middle'}}></img><span style={{marginLeft: 10}}>Autherium</span>
        </Grid>
      </Grid>
      <Grid className={classes.project_info_1} style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
        <p style={{fontSize: 15}}>What is a wallet?</p>
        <p style={{color: '#919398'}}>Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser, an extension added to your browser, a piece of hardware plugged into your computer or even an app on your phone. For more information about wallets, see this explanation.</p>
      </Grid>
    </div>
  );
}
