import { useStyles, BootstrapInput } from '../../../../pages/Design/styles'
import DesignStep from '../../DesignStep/designStep'
import Grid from '@material-ui/core/Grid'
import noImage from '../../../../assets/Popup/no_image.png'

interface selectedStepItem {
  items: boolean[]
  onSelectItem: (index: number) => void
  confirmItems: boolean[]
}

function Appearance({ items, onSelectItem, confirmItems }: selectedStepItem) {
  const classes = useStyles()

  return (
    <div className={classes.responsiveStep}>
      <Grid className={classes.title}>DESIGN YOUR PROJECT</Grid>
      <Grid>
        <DesignStep selectedStepItem={items} onSelectItem={onSelectItem} confirmStepItem={confirmItems} />
      </Grid>
      <Grid className={classes.titleFontFamily}>
        1. APPEARANCE
        <Grid className={classes.subDescription}>Project name, handle, links, and other details.</Grid>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Project name * </span>
        <BootstrapInput id="bootstrap-input" placeholder="564897564123654899631456632466" />
        <span className={classes.itemDescription}>A small your bot title of max 140 characters.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Unique handle * </span>
        <BootstrapInput id="bootstrap-input" placeholder="@Specific name here" />
        <span className={classes.itemDescription}>A small your bot title of max 140 characters.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Project description * </span>
        <BootstrapInput id="description-input" placeholder="@Specific name here"/>
        <span className={classes.itemDescription}>
          A min 300 character description of what your bot does. HTML, CSS and Markdown allowed. Javascript will
          be removed.
        </span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Website * </span>
        <BootstrapInput id="bootstrap-input" placeholder="https://juicebox.money/#/" />
        <span className={classes.itemDescription}>Your project's website.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Twitter * </span>
        <BootstrapInput id="bootstrap-input" placeholder="https://juicebox.money/#/" />
        <span className={classes.itemDescription}>Your project's Twitter handle.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Discord * </span>
        <BootstrapInput
          id="bootstrap-input"
          placeholder="https://discordapp.com/api/oauth2/authorize?client_id=264811613708746752&scope=bot&permissions=0"
        />
        <span className={classes.itemDescription}>An invite link to your project’s Discord server.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Github * </span>
        <BootstrapInput id="bootstrap-input" placeholder="https://github.com/" />
        <span className={classes.itemDescription}>An invite link to your project’s Githup server.</span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Pay button </span>
        <BootstrapInput id="bootstrap-input" placeholder="Pay" />
        <span className={classes.itemDescription}>
          Text displayed on your project’s “pay” button. Leave this blank to use the default.
        </span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Pay disclosure</span>
        <BootstrapInput id="bootstrap-input" placeholder="Pay" />
        <span className={classes.itemDescription}>
          This text will be displayed to anyone who pays your project, before they complete their payment.
        </span>
      </Grid>
      <Grid className={classes.paragrap}>
        <span className={classes.subTitle}>Logo *</span>
        <Grid className={classes.logoContent} container>
          <Grid item xs={2} md={2}>
            <img src={noImage} alt="noImage" style={{ width: 70 }} />
          </Grid>
          <Grid item xs={10} md={10} container>
            <Grid item xs={12} className={classes.logoTitle}>
              Add logo image
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={4} className={classes.uploadBtn}>
                Upload logo image
              </Grid>
              <Grid item xs={7} className={classes.logoTitle}>
                upload image style like jpg / png images are supported
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <span className={classes.itemDescription}>
          Text displayed on your project’s “pay” button. Leave this blank to use the default.
        </span>
      </Grid>
      <Grid className={classes.saveBtnResponsive}>
        <button className={classes.saveBtn}>SAVE</button> <span className={classes.cancelBtn}>Cancel</span>
      </Grid>
    </div>
  )
}

export default Appearance
