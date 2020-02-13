import React, {useState} from 'react';
import {hands} from '../js/startingMove';
import { connect } from "react-redux";
import {RadioButtonGroupField, TextField, FreeTextInput} from './Fields/InputFields';
import {playerPositionList, opponentActionList} from '../js/constants/formOptions';
import {Button, Stepper, Step, StepLabel, StepContent, Grid} from '@material-ui/core';
import {
  setOpponentAction,
  setPosition,
  setStartingCards,
  setStartingHandType,
  setNoPlayersEntered,
  setOpponentRaiseSize,
  setMoreThanOneRaise,
  setRaiseAfterMe
} from "../redux/actions";


export const ConnectedAdviceGenerator = ({
                                          setPosition,
                                          position,
                                          startingCards,
                                          setStartingCards,
                                          opponentAction, setOpponentAction,
                                           setStartingHandType,
                                          setOpponentRaiseSize,
                                           setMoreThanOneRaise,
                                           setRaiseAfterMe,
  setNoPlayersEntered

}) => {

  const [activeStep, setActiveStep] = useState(0);


  const handleNextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleCardInputNextStep = () => {
    generateStartingCardType();
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
  };

  const generateStartingCardType = () => {

    for (const [key, value] of Object.entries(hands)) {
      if (value.find(c => c === startingCards)) {
        setStartingHandType(key);
        break;
      } else {
        setStartingHandType('anythingElse');
      }
    }
  };



  const handlePositionChange = value => {
    setPosition(value);
    handleNextStep();
  };

  const handleStartingCardsChange = value => {
    setStartingCards(value);
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
                      value={startingCards}
                      instrText="Type in your starting cards and click Next."
                      label="ex. AJo"
                      onTextFieldChange={value => handleStartingCardsChange(value)}
                    />
                  </Grid>
                  <Button
                    style={{marginRight: 5}}
                    color="primary"
                    onClick={() => handleCardInputNextStep()}
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
                          label="Raise amount: ex. 0.24"
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
                      instrText="The total number of players entered before you. 0 if no one entered, if someone raised that counts as entered as well."
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
      <Grid container item xs={12} style={{paddingBottom: 24}}>
        <Button
          style={{marginRight: 20, marginLeft: 24}}
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
      </Grid>
    </div>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    setPosition: position => dispatch(setPosition(position)),
    setStartingCards: startingCards => dispatch(setStartingCards(startingCards)),
    setOpponentAction: opponentAction => dispatch(setOpponentAction(opponentAction)),
    setStartingHandType: startingHandType => dispatch(setStartingHandType(startingHandType)),
    setNoPlayersEntered: noPlayersEntered => dispatch(setNoPlayersEntered(noPlayersEntered)),
    setOpponentRaiseSize: opponentRaiseSize => dispatch(setOpponentRaiseSize(opponentRaiseSize)),
    setMoreThanOneRaise: moreThanOneRaise => dispatch(setMoreThanOneRaise(moreThanOneRaise)),
    setRaiseAfterMe: raiseAfterMe => dispatch(setRaiseAfterMe(raiseAfterMe)),

  };
}

const mapStateToProps = state => {
  return {
    position: state.position,
    startingCards: state.startingCards,
    opponentAction: state.opponentAction,
    startingHandType: state.startingHandType,
    noPlayersEntered: state.noPlayersEntered,
    opponentRaiseSize: state.opponentRaiseSize,
    moreThanOneRaise: state.moreThanOneRaise,
    raiseAfterMe: state.raiseAfterMe,
  };
};

export const PrefopCircumstancesFormCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAdviceGenerator);





