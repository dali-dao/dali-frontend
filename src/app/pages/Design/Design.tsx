import { useStyles } from "./styles";
import Appearance from '../../components/Design/DesignPages/Appearance/appearance';
import Funding from '../../components/Design/DesignPages/Funding/funding';
import Distribution from '../../components/Design/DesignPages/Distribution/distribution';
import ReservedTokens from '../../components/Design/DesignPages/ReservedTokens/reservedTokens';
import Reconfiguration from '../../components/Design/DesignPages/Reconfiguration/reconfiguration';
import Incentives from '../../components/Design/DesignPages/Incentives/incentives';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

interface selectedStepItem {
  onSelectItem : (index: number) => void
}

function Design() {
  const classes = useStyles();

  const [selectedStep, setSelectedStep] = useState<Array<boolean>>([true, false, false, false, false, false]);

  const setSelectedArray = (index: number) => {
    let tempArray = [false, false, false, false, false, false];
    tempArray[index] = true;
    return tempArray;
  }

  const onSelectItem = (index: number) => {
    setSelectedStep(setSelectedArray(index));
  }

  return (
    <div className={classes.root}>
        <Grid className={classes.container}>
            { selectedStep[0] && <Appearance items={selectedStep} onSelectItem={onSelectItem}/>}
            { selectedStep[1] && <Funding items={selectedStep} onSelectItem={onSelectItem}/>}
            { selectedStep[2] && <Distribution items={selectedStep} onSelectItem={onSelectItem}/>}
            { selectedStep[3] && <ReservedTokens items={selectedStep} onSelectItem={onSelectItem}/>}
            { selectedStep[4] && <Reconfiguration items={selectedStep} onSelectItem={onSelectItem}/>}
            { selectedStep[5] && <Incentives items={selectedStep} onSelectItem={onSelectItem}/>}
        </Grid>
    </div>
  );
}

export default Design;
