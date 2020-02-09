import React, {useState} from 'react';
import StakeRecommender from './StakeRecommender';
import {hands, startingAction} from './logic/startingActions';
import {wasMoreThanOneRaise, someoneRaisesAfterMe} from './logic/staking';
import { connect } from "react-redux";
import {RadioButtonGroupField, TextField, FreeTextInput} from './InputFields';
import {playerPositionList, opponentActionList} from './formOptions';
import {Button, Stepper, Step, StepLabel, StepContent, Grid, Typography} from '@material-ui/core';
import {setPosition} from "./redux/actions";


export const ConnectedPokerContainer = ({generateAction, setPosition, position}) => {

  const [startingCards, setStartingCards] = useState(null);
  const [opponentAction, setOpponentAction] = useState(null);
  const [startingHandType, setStartingHandType] = useState(null);
  const [noPlayersEntered, setNoPlayersEntered] = useState(null);
  const [opponentRaiseSize, setOpponentRaiseSize] = useState(null);
  const [moreThanOneRaise, setMoreThanOneRaise] = useState(false);
  const [raiseAfterMe, setRaiseAfterMe] = useState(false);
  const [fold, setFold] = useState(false);
  const [activeStep, setActiveStep] = useState(0);


  const handleNextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBackStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setPosition(null);
    setStartingCards(null);
    setOpponentAction(null);
    setStartingHandType(null);
    setNoPlayersEntered(null);
    setOpponentRaiseSize(null);
    setMoreThanOneRaise(false);
    setRaiseAfterMe(false);
    setFold(false);
  };

  const handleSubmit = () => {

    Object.entries(hands).forEach(([key, value]) => {
      if (value.find(c => c === startingCards)) {
        setStartingHandType(key);
      } else {
        setStartingHandType('anythingElse');
      }
    })

  }

  const handlePositionChange = value => {
    setPosition(value);
    handleNextStep();
  }

  const handleStartingCardsChange = value => {
    setStartingCards(value)

  };

  const handleOpponentActionChange = value => {
    setOpponentAction(value);

    if (value !== 'onePlayerRaised') {
      handleNextStep();
    }
  };

  const handleMoreThanOneRaise = () => {
    setMoreThanOneRaise(true);
    handleNextStep();
  };

  const handleNoPlayersEntered = value => {
    setNoPlayersEntered(value);
    handleSubmit(value);
  };

  return (

    <div>

        <div>
          <div>


            <Stepper
              activeStep={activeStep}
              orientation="vertical"
            >
              <Step key="position">
                <StepLabel>Your Position</StepLabel>
                <StepContent>
                  <RadioButtonGroupField
                    onButtonGroupChange={value => handlePositionChange(value)}
                    value={position}
                    instrText='Please select your position on the table.'
                    options={playerPositionList}
                  />
                </StepContent>
              </Step>
              <Step key="startingCards">
                <StepLabel>Starting Cards</StepLabel>
                <StepContent>
                  <Grid item xs={12} style={{paddingBottom: 15}}>
                    <FreeTextInput
                      instrText="Type in your starting cards and click Next."
                      label="ex. AJo"
                      onTextFieldChange={value => handleStartingCardsChange(value)}
                    />
                  </Grid>
                  <Button
                    style={{marginRight: 5}}
                    color="primary"
                    onClick={() => handleNextStep()}
                    variant="contained">
                    Next
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => handleBackStep()}
                    variant="contained">
                    Back
                  </Button>
                </StepContent>
              </Step>
              <Step key="opponentAction">
                <StepLabel>Opponent Action</StepLabel>
                <StepContent>
                  <RadioButtonGroupField
                    onButtonGroupChange={value => handleOpponentActionChange(value)}
                    value={opponentAction}
                    instrText='Select your opponents action from the list. If a player raised, specify the amount of raise. If there was more than one raise, make sure to press the corresponding button.'
                    options={opponentActionList}/>
                  {

                    opponentAction === 'onePlayerRaised' &&
                    <>
                      <Grid container item xs={12} style={{paddingBottom: 10}}>
                        <FreeTextInput
                          label="Raise amount: ex. 0.24" //exactly one opponent before me
                          onTextFieldChange={value => setOpponentRaiseSize(value)}
                        />
                        <Button
                          style={{marginLeft: 10}}
                          color="secondary"
                          onClick={() => handleMoreThanOneRaise(true)}
                          variant="contained">
                          More than one raise!
                        </Button>
                      </Grid>
                    </>
                  }
                  <Grid item xs={12} style={{paddingTop: 15}}>
                    <Button
                      style={{marginRight: 5}}
                      color="primary"
                      onClick={() => handleNextStep()}
                      variant="contained">
                      Next
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => handleBackStep()}
                      variant="contained">
                      Back
                    </Button>
                  </Grid>
                </StepContent>
              </Step>
              <Step key="noPlayersEntered">
                <StepLabel>Number of Players Entered</StepLabel>
                <StepContent>
                  <Grid item xs={12} style={{paddingBottom: 15}}>
                    <FreeTextInput
                      instrText="The total number of players entered before you."
                      onTextFieldChange={value => handleNoPlayersEntered(value)}
                    />
                  </Grid>
                  <Button
                    color="primary"
                    onClick={() => handleBackStep()}
                    variant="contained">
                    Back
                  </Button>
                </StepContent>
              </Step>
            </Stepper>
          </div>
        </div>
      <Grid container item xs={12} justify="center">
        <Button
          style={{marginRight: 20}}
          color="secondary"
          onClick={() => setRaiseAfterMe(true)}
          variant="contained">
          Raise after me
        </Button>
        <Button
          color="primary"
          onClick={() => handleReset()}
          variant="contained">
          Reset
        </Button>
        {/*{position && opponentAction && startingHandType && noPlayersEntered &&*/}
        {/*(<Button style={{marginLeft: 20}}*/}
        {/*        color="primary"*/}
        {/*        onClick={() => generateAction(position, opponentAction, startingHandType, noPlayersEntered, opponentRaiseSize, moreThanOneRaise, startingCards)}*/}
        {/*        variant="contained">*/}
        {/*  Generate Action*/}
        {/*</Button>)}*/} //this button might go to top level
      </Grid>
    </div>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    setPosition: position => dispatch(setPosition(position))
  };
}

const mapStateToProps = state => {
  return { position: state.position };
};

export const PokerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPokerContainer);





