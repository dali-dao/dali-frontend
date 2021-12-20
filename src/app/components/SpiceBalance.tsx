import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import PaymentCard from '../assets/Landing/payment.png'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.info.main}`,
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    details: {
      alignItems: 'center',
      display: 'grid',
    },
    content: {
      flex: '1 0 auto',
    },
    address: {
      fontSize: 14,
      color: theme.palette.error.light,
      textAlign: 'right',
    },
    total: {
      fontSize: 13,
      color: '#c5c5ca',
      textAlign: 'right',
    },
    price: {
      fontSize: 12,
      textAlign: 'left',
      paddingLeft: 10,
      display: 'flex',
      alignItems: 'center',
    },
    walletName: {
      fontSize: 15,
      color: theme.palette.error.light,
      textAlign: 'left',
      paddingLeft: 10,
      fontFamily: 'CerebriSansPro-ExtraBold',
    },
  }),
)

export default function MediaControlCard() {
  const classes = useStyles()
  //   const theme = useTheme();

  return (
    <Card className={classes.root}>
      <Grid>
        <img src={PaymentCard} alt="paymentCard" />
      </Grid>
      <Grid className={classes.details} item xs={12}>
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.walletName}>
            demelain.eth
          </Grid>
          <Grid item xs={9} className={classes.address}>
            200,000,000 SPICE (7.96%)
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.price}>
            Last paid a day ago
          </Grid>
          <Grid item xs={9} className={classes.total}>
            Ξ200 total contributed
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
