/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
        backgroundColor: theme.palette.background.paper,
        height: 90,
        fontSize: 12
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        height: 600
    },
    menu: {
        margin: '0 20px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase'
    },
    activeMenu: {
        margin: '0 20px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        borderBottom: '2px solid #f7db0e',
        padding: '35px 0'
    },
    menuItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    connectBtn: {
        background: '#f7db0e',
        textTransform: 'uppercase',
        color: 'black',
        borderRadius: 20,
        height: 20,
    },
    rightItems: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    }
  })
);
