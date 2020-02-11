import React, {useState} from 'react';
import {AdviceGenerator} from "./AdviceGenerator";
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import StakeRecommender from "./StakeRecommender";
import {startingAction} from "./logic/startingActions";
import {someoneRaisesAfterMe, wasMoreThanOneRaise} from "./logic/staking";
import {connect} from "react-redux";
import { sizing } from '@material-ui/system';


export const ConnectedContainer = ({position, opponentAction, startingHandType, noPlayersEntered, opponentRaiseSize, moreThanOneRaise, startingCards, raiseAfterMe}) => {

  return (
    <div>
      <Grid container spacing={2} justify="center" style={{paddingTop: 35}}>
        <Grid item xs={4} style={{borderRight: 15, borderRightColor: 'gray'}}>
          <Paper style={{height: '100%', width: '100%'}} elevation={5}>
            <AdviceGenerator/>
          </Paper>
        </Grid>
        <Grid container item xs={4} justify="center" alignContent="center">
          <Paper style={{height: '100%', width: '100%'}} elevation={5}>



            {position && opponentAction && startingHandType && noPlayersEntered && !moreThanOneRaise ?

            <StakeRecommender
              actionRecommendation={startingAction[position][startingHandType][opponentAction]}
              noPlayersEntered={noPlayersEntered}
              opponentRaise={opponentRaiseSize}
            /> : <Typography variant="h4" color="textSecondary">Fill in the form to get advice.</Typography>
            }

            {
              moreThanOneRaise && wasMoreThanOneRaise(startingCards)
            }

            {
              raiseAfterMe && someoneRaisesAfterMe(startingCards)
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