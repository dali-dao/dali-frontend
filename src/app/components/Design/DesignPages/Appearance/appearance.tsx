import { useStyles, BootstrapInput } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import noImage from '../../../../assets/Popup/no_image.png'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Appearance({ items, onSelectItem, confirmItems }: selectedStepItem) {
  const classes = useStyles()

  return (
    <div>
      <Grid className={classes.title}>DESIGN YOUR PROJECT - APPEARANCE</Grid>
      <Grid>
        <DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} />
      </Grid>
      <Grid>
        <Card className={classes.card}>
          <CardHeader
            title="1. APPEARANCE"
            classes={{ title: classes.titleFontFamily }}
            className={classes.cardHeader}
          ></CardHeader>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Project name * <br />
              <span className={classes.itemDescription}>A small your bot title of max 140 characters.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="564897564123654899631456632466" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Unique handle * <br />
              <span className={classes.itemDescription}>A small your bot title of max 140 characters.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="@Specific name here" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Project description * <br />
              <span className={classes.itemDescription}>
                A min 300 character description of what your bot does. HTML, CSS and Markdown allowed. Javascript will
                be removed.
              </span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="description-input" placeholder="@Specific name here" style={{ height: 30 }} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Website * <br />
              <span className={classes.itemDescription}>Your project's website.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="https://juicebox.money/#/" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Twitter * <br />
              <span className={classes.itemDescription}>Your project's Twitter handle.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="https://juicebox.money/#/" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Discord * <br />
              <span className={classes.itemDescription}>An invite link to your project’s Discord server.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput
                id="bootstrap-input"
                placeholder="https://discordapp.com/api/oauth2/authorize?client_id=264811613708746752&scope=bot&permissions=0"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Github * <br />
              <span className={classes.itemDescription}>An invite link to your project’s Githup server.</span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="https://github.com/" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Pay button <br />
              <span className={classes.itemDescription}>
                Text displayed on your project’s “pay” button. Leave this blank to use the default.
              </span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="Pay" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Pay disclosure
              <br />
              <span className={classes.itemDescription}>
                This text will be displayed to anyone who pays your project, before they complete their payment.
              </span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <BootstrapInput id="bootstrap-input" placeholder="Pay" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}>
              Logo *<br />
              <span className={classes.itemDescription}>
                Text displayed on your project’s “pay” button. Leave this blank to use the default.
              </span>
            </Grid>
            <Grid item xs={8} className={classes.content}>
              <Grid className={classes.logoContent} container>
                <Grid item xs={12} md={2}>
                  <img src={noImage} alt="noImage" style={{ width: 70 }} />
                </Grid>
                <Grid item xs={12} md={10} container>
                  <Grid item xs={12} className={classes.logoTitle}>
                    Add logo image
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid item xs={12} md={4} className={classes.uploadBtn}>
                      Upload logo image
                    </Grid>
                    <Grid item xs={12} md={7}>
                      upload image style like jpg / png images are supported
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.label}></Grid>
            <Grid item xs={8} className={classes.content}>
              <button className={classes.saveBtn}>SAVE</button> <span className={classes.cancelBtn}>Cancel</span>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  )
}

export default Appearance
