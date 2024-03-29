import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import ImageUpload from '../ImageUpload'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    margin: 'auto',
    boxShadow: `0px 0px 10px 10px ${theme.palette.primary.dark}`,
    borderRadius: 5,
  },
  modal_header: {
    border: `1px solid ${theme.palette.info.main}`,
    background: theme.palette.primary.main,
    textAlign: 'left',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modal_header_title: {
    padding: '25px 40px',
    display: 'block',
    fontSize: 20,
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
  },
  modal_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    display: 'block',
    textAlign: 'left',
    padding: '25px 40px',
    '@media(max-width: 600px)': {
      padding: '25px 10px',
    },
  },
  modal_description_header: {
    color: '#919398',
    fontSize: 13,
  },
  //common class
  width100: {
    width: '100%',
  },
  marginTop30: {
    marginTop: 30,
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  notice_content: {
    color: theme.palette.error.light,
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 15,
    marginTop: 30,
  },
  table_content: {
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: 3,
    marginTop: 15,
  },
  payamount_td: {
    borderBottom: `1px solid ${theme.palette.info.main}`,
    borderRight: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.error.light,
    fontSize: 15,
    padding: 15,
    backgroundColor: theme.palette.primary.main,
  },
  payamount_td_value: {
    borderBottom: `1px solid ${theme.palette.info.main}`,
    padding: 15,
    color: theme.palette.error.light,
    backgroundColor: theme.palette.primary.main,
    fontSize: 14,
  },
  dft_td: {
    borderBottom: `1px solid ${theme.palette.info.main}`,
    borderRight: `1px solid ${theme.palette.info.main}`,
    padding: '30px 0px 0px 15px',
    color: theme.palette.error.light,
    fontSize: 15,
    backgroundColor: theme.palette.primary.main,
  },
  dft_value: {
    borderBottom: `1px solid ${theme.palette.info.main}`,
    padding: 15,
    color: theme.palette.error.light,
    backgroundColor: theme.palette.primary.main,
    fontSize: 14,
  },
  dft_reserved: {
    borderRight: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.error.light,
    padding: 15,
    backgroundColor: theme.palette.primary.main,
    fontSize: 15,
  },
  dft_reserved_2: {
    padding: 15,
    color: theme.palette.error.light,
    backgroundColor: theme.palette.primary.main,
    fontSize: 14,
  },
  memo_title: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    color: theme.palette.error.light,
    fontSize: 15,
    marginBottom: 10,
  },
  notice_addr: {
    fontSize: 13,
    wordBreak: 'break-all',
    color: '#919398',
    textAlign: 'left',
    marginTop: 10,
  },
  textArea_content: {
    backgroundColor: theme.palette.primary.main,
    height: 90,
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.error.light,
    resize: 'none',
    paddingLeft: 16,
    paddingTop: 20,
    width: '98%',
  },
  textArea_character: {
    textAlign: 'right',
    display: 'block',
    color: '#c5c6ca',
    fontSize: 13,
  },
  receive_erc20: {
    fontFamily: 'CerebriSansPro-ExtraBold',
    fontSize: 15,
    color: theme.palette.error.light,
    marginBottom: 10,
  },
  receive_content: {
    marginTop: 30,
    marginBottom: 20,
  },
  cancel_button: {
    border: '1px solid #ced7e8',
    color: theme.palette.error.light,
    borderRadius: 5,
    marginRight: 20,
    width: 230,
    height: 50,
  },
  pay_button: {
    backgroundImage: 'linear-gradient(to right, rgb(238 221 14) 0%, rgb(24 216 211) 100%, rgb(247, 157, 0) 100%)',
    width: 230,
    color: '#000',
    height: 50,
  },
  erc20_content: {
    color: '#999ba0',
    fontSize: 13,
  },
  button_content: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.info.main}`,
    padding: '25px 40px',
    borderTop: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
}))

export default function PayDAOTailFung() {
  const classes = useStyles()
  const [inputedCount, setInputCount] = React.useState(0)

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })

  const changeTextArea = function (event: any) {
    let strLength = event.currentTarget.value.length
    setInputCount(strLength)
  }

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.modal_header}>
        <strong className={classes.modal_header_title}>Pay DAOTailFung</strong>
      </Grid>
      <Grid container className={classes.modal_content}>
        <Grid item xs={12} className={classes.modal_description_header}>
          Paying DAOTaiFung is not an investment—it’s a way to support the project. Any value or utility of the tokens
          you receive is determined by DAOTaiFung.
        </Grid>
        <Grid container>
          <Grid className={classes.notice_content}>
            Notice from DAOTailFung
            <Grid className={classes.notice_addr}>
              <span>
                All funds paid out to a Gnosis safe, <strong>0x5A8413DfEFB75899c93eA5A6152Eb5aFe01A956E</strong>
              </span>
            </Grid>
          </Grid>

          <Grid container className={classes.table_content}>
            <Grid item xs={12} md={3} className={classes.payamount_td}>
              Pay amount
            </Grid>
            <Grid item xs={12} md={9} className={classes.payamount_td_value}>
              473,995 USD (100 ETH)
            </Grid>
            <Grid item xs={12} md={3} className={classes.dft_td}>
              DFT for you
            </Grid>
            <Grid item xs={12} md={9} className={classes.dft_value}>
              <p>85,000,000</p>
              <p>To: 85,000,000</p>
            </Grid>
            <Grid item xs={12} md={3} className={classes.dft_reserved}>
              DFT reserved
            </Grid>
            <Grid item xs={12} md={9} className={classes.dft_reserved_2}>
              15,000,000
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.marginTop30}>
          <Grid className={classes.memo_title}>Memo</Grid>
          <Grid className={classes.width100}>
            <textarea onChange={changeTextArea} placeholder="text here" className={classes.textArea_content}></textarea>
            <span className={classes.textArea_character}>{inputedCount}/256 text character</span>
          </Grid>
        </Grid>

        <Grid container className={classes.marginTop30}>
          <ImageUpload />
        </Grid>

        <Grid container className={classes.receive_content}>
          <Grid className={classes.receive_erc20}>Receive ERC20</Grid>
          <Grid container>
            <FormControlLabel
              className={classes.erc20_content}
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
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
  )
}
