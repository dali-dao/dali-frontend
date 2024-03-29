import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import MetaMask from '../../assets/Popup/metamask.png'
import Trezor from '../../assets/Popup/trezor.png'
import TrezorBlack from '../../assets/Popup/trezor_black.png'
import CoinbaseWallet from '../../assets/Popup/coinbase_wallet.png'
import Autherium from '../../assets/Popup/autherium.png'
import GnezisSafe from '../../assets/Popup/gnezis_safe.png'
import GnezisSafeBlack from '../../assets/Popup/gnezis_black.png'
import KeyStone from '../../assets/Popup/keystone.png'
import Lattiz from '../../assets/Popup/lattiz.png'
import Ledgez from '../../assets/Popup/ledgez.png'
import LedgezBlack from '../../assets/Popup/ledgez_black.png'
import Opera from '../../assets/Popup/opera.png'
import WalletConnect from '../../assets/Popup/walletconnect.png'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    color: theme.palette.error.light,
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    position: 'absolute',
    width: '60%',
    top: 20,
    '@media(max-width: 1000px)': {
      width: '90%',
      left: '4%'
    },
  },
  marginLeft10: {
    marginLeft: 10,
  },
  verticalAlignMiddle: {
    verticalAlign: 'middle',
  },
  wallet_header_content: {
    color: '#919398',
    textAlign: 'left',
  },
  modal_header: {
    background: theme.palette.common.white,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottom: `1px solid ${theme.palette.info.main}`,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
    textTransform: 'uppercase',
  },
  select_header: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 20,
  },
  wallet_info_desc: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    background: theme.palette.background.paper,
    padding: '25px 40px',
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  wallet_header_title: {
    textAlign: 'left',
    fontFamily: 'CerebriSansPro-ExtraBold',
  },
  wallet_image_content: {
    textAlign: 'left',
    background: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    fontFamily: 'CerebriSansPro-ExtraBold',
  },
  wallets: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: 10,
    fontSize: 12,
    borderRadius: 10,
    '&:hover': {
      boxShadow: `0 0 10px 10px ${theme.palette.primary.dark}`,
    },
  },
}))

interface connectType {
  connect: () => void
}

export default function SelectWallet({ connect }: connectType) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Select a Wallet</strong>
      </Grid>
      <Grid container className={classes.wallet_image_content}>
        <strong className={classes.select_header}>Please select a wallet to connect to this dapp:</strong>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets} onClick={connect}>
          <img alt="metamask" src={MetaMask} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Metamask</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img
            className={classes.verticalAlignMiddle}
            alt="Trezor"
            src={localStorage.getItem('appTheme') === 'lightTheme' ? TrezorBlack : Trezor}
          ></img>
          <span className={classes.marginLeft10}>Trezor</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="CoinbaseWallet" src={CoinbaseWallet} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Coinbase Wallet</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="Opera" src={Opera} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Opera</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img
            alt="Ledgez"
            src={localStorage.getItem('appTheme') === 'lightTheme' ? LedgezBlack : Ledgez}
            className={classes.verticalAlignMiddle}
          ></img>
          <span className={classes.marginLeft10}>Ledgez</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="WalletConnect" src={WalletConnect} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Walletconnect</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="KeyStone" src={KeyStone} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Keystone</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="Lattiz" src={Lattiz} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Lattiz</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img
            alt="GnezisSafe"
            src={localStorage.getItem('appTheme') === 'lightTheme' ? GnezisSafeBlack : GnezisSafe}
            className={classes.verticalAlignMiddle}
          ></img>
          <span className={classes.marginLeft10}>Gnezis safe</span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.wallets}>
          <img alt="Autherium" src={Autherium} className={classes.verticalAlignMiddle}></img>
          <span className={classes.marginLeft10}>Autherium</span>
        </Grid>
      </Grid>
      <Grid className={classes.wallet_info_desc}>
        <p className={classes.wallet_header_title}>What is a wallet?</p>
        <p className={classes.wallet_header_content}>
          Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are
          either built into your browser, an extension added to your browser, a piece of hardware plugged into your
          computer or even an app on your phone. For more information about wallets, see this explanation.
        </p>
      </Grid>
    </div>
  )
}
