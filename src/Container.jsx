import React, {useState} from 'react';
import {PokerContainer} from "./PokerContainer";
import {Button, Grid, Paper} from '@material-ui/core';
import StakeRecommender from "./StakeRecommender";
import {startingAction} from "./logic/startingActions";
import {someoneRaisesAfterMe, wasMoreThanOneRaise} from "./logic/staking";


export default () => {

  const [position, setPosition] = useState(null);
  const [opponentAction, setOpponentAction] = useState(null);
  const [startingHandType, setStartingHandType] = useState(null);
  const [noPlayersEntered, setNoPlayersEntered] = useState(null);
  const [opponentRaiseSize, setOpponentRaiseSize] = useState(null);
  const [moreThanOneRaise, setMoreThanOneRaise] = useState(false);
  const [startingCards, setStartingCards] = useState(null);
  const [raiseAfterMe, setRaiseAfterMe] = useState(false);


  const generateAction = (position, opponentAction, startingHandType, noPlayersEntered, opponentRaiseSize, moreThanOneRaise, startingCards) => {



      setPosition(position);
      setOpponentAction(opponentAction);
      setStartingHandType(startingHandType);
      setNoPlayersEntered(noPlayersEntered);
      setOpponentRaiseSize(opponentRaiseSize);
      setMoreThanOneRaise(moreThanOneRaise);
      setStartingCards(startingCards);



  };

  return (
    <div>
        <Grid container spacing={0} justify="center" style={{paddingTop: 35}}>
          <Grid item xs={4} style={{borderRight: 15, borderRightColor: 'gray'}}>
            <Paper elevation={0}>
              <PokerContainer generateAction={generateAction}/>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0}>

              {position && opponentAction && startingHandType && noPlayersEntered && !moreThanOneRaise &&

              <StakeRecommender
                actionRecommendation={startingAction[position][startingHandType][opponentAction]}
                noPlayersEntered={noPlayersEntered}
                opponentRaise={opponentRaiseSize}
              />
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
}