import React from 'react';
import {PrefopCircumstancesFormCard} from "./PrefopCircumstancesFormCard";
import {Grid, Paper} from '@material-ui/core';
import PreflopAdvice from "./PreflopAdviceCard";
import {startingAction} from "../js/startingMove";
import {connect} from "react-redux";


export const ConnectedContainer = ({position, opponentAction, startingHandType, noPlayersEntered, opponentRaiseSize, moreThanOneRaise, startingCards, raiseAfterMe}) => {



  return (
    <div>
      <Grid container spacing={2} justify="center" style={{paddingTop: 35}}>
        <Grid item xs={4} style={{borderRight: 15, borderRightColor: 'gray'}}>
          <Paper style={{height: '100%', width: '100%'}} elevation={5}>
            <PrefopCircumstancesFormCard/>
          </Paper>
        </Grid>
        <Grid container item xs={4} justify="center" alignContent="center">
          <Paper style={{height: '100%', width: '100%', textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}} elevation={5}>

            {position && startingHandType && opponentAction &&

            <PreflopAdvice
              position={position}
              actionRecommendation={startingAction[position][startingHandType][opponentAction]}
              noPlayersEntered={noPlayersEntered}
              opponentRaise={opponentRaiseSize}
              moreThanOneRaise={moreThanOneRaise}
              raiseAfterMe={raiseAfterMe}
              startingCards={startingCards}
              opponentAction={opponentAction}
            />

            }

          </Paper>
        </Grid>
      </Grid>
    </div>
  )
};

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

export const Container = connect(
  mapStateToProps,
  null
)(ConnectedContainer);