import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      textAlign: 'left',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.error.main,
    },
    accordion: {
      border: '1px solid #2d3443',
      borderRadius: 10
    },
    accordionSummary: {
      color: theme.palette.success.main,
    },
    accordionDetails: {
      color: theme.palette.success.main,
    }
  }),
);

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="small"/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.secondaryHeading}>Who funds Juicebox projects?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>
            Users fund your project by paying to use your app or service, or as a patron or investor by making a payment directly to your project’s smart contract (like on this app).<br/>

            For users paying through your app, you should route those funds through the Juicebox smart contracts so they receive Tokens in return.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}