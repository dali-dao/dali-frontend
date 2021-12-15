import { useStyles } from "./styles";
import Appearance from '../../components/Design/DesignPages/Appearance/appearance';
import Funding from '../../components/Design/DesignPages/Funding/funding';
import Distribution from '../../components/Design/DesignPages/Distribution/distribution';
import ReservedTokens from '../../components/Design/DesignPages/ReservedTokens/reservedTokens';
import Reconfiguration from '../../components/Design/DesignPages/Reconfiguration/reconfiguration';
import Incentives from '../../components/Design/DesignPages/Incentives/incentives';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function Design() {
  const classes = useStyles();

  const [selectedStep, setSelectedStep] = useState<Array<boolean>>([true, false, false, false, false, false]);
  const [confirmStep, setConfirmStep] = useState<Array<boolean>>([true, false, false, false, false, false]);

  const setSelectedArray = (index: number) => {
    let tempArray = [false, false, false, false, false, false];
    tempArray[index] = true;
    return tempArray;
  }

  const setConfirmArray = (index: number) => {
    let tempArray = confirmStep;
    tempArray[index] = true;
    return tempArray;
  }

  const onSelectItem = (index: number) => {
    setSelectedStep(setSelectedArray(index));
    setConfirmStep(setConfirmArray(index));
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        { selectedStep[0] && <Appearance items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
        { selectedStep[1] && <Funding items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
        { selectedStep[2] && <Distribution items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
        { selectedStep[3] && <ReservedTokens items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
        { selectedStep[4] && <Reconfiguration items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
        { selectedStep[5] && <Incentives items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />}
      </Grid>
    </div>
  );
}

export default Design;
