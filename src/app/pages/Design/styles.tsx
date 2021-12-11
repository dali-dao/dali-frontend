//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Banner from '../../assets/Projects/banner_2.jpg';

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.error.main
    },
    container: {
        padding: '0 160px 0 160px',
        textAlign: 'left',
        "@media (max-width: 1205px)": {
          padding: '0px 10px 0px 10px',
        }
    }
  })
);
