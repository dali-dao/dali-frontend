//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Banner from '../../assets/Projects/banner_2.jpg';

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#10141b'
    },
    container: {
        padding: '0 160px 0 160px',
        textAlign: 'left'
    }
  })
);
