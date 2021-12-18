import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import PaymentCard from '../../assets/Landing/payment.png'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: 10,
      backgroundColor: theme.palette.text.hint,
    },
    details: {
      alignItems: 'center',
      display: 'grid',
    },
    content: {
      flex: '1 0 auto',
    },
    address: {
      fontSize: 13,
      color: '#a3a5a7',
      textAlign: 'right',
      wordBreak: 'break-all',
    },
    price: {
      color: theme.palette.success.dark,
      fontSize: 14,
      textAlign: 'left',
      paddingLeft: 10,
      display: 'flex',
      alignItems: 'center',
    },
    walletName: {
      fontSize: 15,
      fontFamily: 'CerebriSansPro-ExtraBold',
      color: theme.palette.error.light,
      textAlign: 'left',
      paddingLeft: 10,
    },
  }),
)

export default function MediaControlCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid>
        <img src={PaymentCard} alt="paymentCard" />
      </Grid>
      <Grid className={classes.details} item xs={12}>
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.walletName}>
            @spicedao
          </Grid>
          <Grid item xs={9} className={classes.address}>
            2 minutes ago
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.price}>
            <MenuIcon /> 0.08
          </Grid>
          <Grid item xs={9} className={classes.address}>
            0x39889f2cac90aa0342e850428e83debb438a8fbf
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
