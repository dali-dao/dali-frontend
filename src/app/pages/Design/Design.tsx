import { useStyles } from './styles'
import Appearance from '../../components/Design/DesignPages/Appearance/appearance'
import AppearanceResponsive from '../../components/Design/DesignPages/Appearance/appearanceResponsive'
import Funding from '../../components/Design/DesignPages/Funding/funding'
import FundingResponsive from '../../components/Design/DesignPages/Funding/fundingResponsive'
import Distribution from '../../components/Design/DesignPages/Distribution/distribution'
import DistributionResponsive from '../../components/Design/DesignPages/Distribution/distributionResponsive'
import ReservedTokens from '../../components/Design/DesignPages/ReservedTokens/reservedTokens'
import ReservedTokensResponsive from '../../components/Design/DesignPages/ReservedTokens/reservedTokensResponsive'
import Reconfiguration from '../../components/Design/DesignPages/Reconfiguration/reconfiguration'
import ReconfigurationResponsive from '../../components/Design/DesignPages/Reconfiguration/reconfigurationResponsive'
import Incentives from '../../components/Design/DesignPages/Incentives/incentives'
import IncentivesResponsive from '../../components/Design/DesignPages/Incentives/incentivesResponsive'
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

function Design() {
  const classes = useStyles()

  const [selectedStep, setSelectedStep] = useState<Array<boolean>>([true, false, false, false, false, false])
  const [confirmStep, setConfirmStep] = useState<Array<boolean>>([true, false, false, false, false, false])

  const setSelectedArray = (index: number) => {
    let tempArray = [false, false, false, false, false, false]
    tempArray[index] = true
    return tempArray
  }

  const setConfirmArray = (index: number) => {
    let tempArray = confirmStep
    tempArray[index] = true
    return tempArray
  }

  const onSelectItem = (index: number) => {
    setSelectedStep(setSelectedArray(index))
    setConfirmStep(setConfirmArray(index))
  }

  const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <>
      <Header />
      <div className={classes.stepPageRes}></div>
      <div className={classes.root}>
        <Grid className={classes.container}>
          {selectedStep[0] &&
            (isTablet ? (
              <AppearanceResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <Appearance items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
          {selectedStep[1] &&
            (isTablet ? (
              <FundingResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <Funding items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
          {selectedStep[2] &&
            (isTablet ? (
              <DistributionResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <Distribution items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
          {selectedStep[3] &&
            (isTablet ? (
              <ReservedTokensResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <ReservedTokens items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
          {selectedStep[4] &&
            (isTablet ? (
              <ReconfigurationResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <Reconfiguration items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
          {selectedStep[5] &&
            (isTablet ? (
              <IncentivesResponsive items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ) : (
              <Incentives items={selectedStep} onSelectItem={onSelectItem} confirmItems={confirmStep} />
            ))}
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Design
