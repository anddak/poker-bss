import React from 'react';
import {
  raiseIfNoOneRaised,
  reRaiseIfExactlyOneRaisedBeforeMe,
  someoneRaisesAfterMe,
  wasMoreThanOneRaise,
} from '../js/staking'
import {Typography} from "@material-ui/core";


export default ({opponentAction, position, startingCards, moreThanOneRaise, raiseAfterMe, actionRecommendation, noPlayersEntered, opponentRaise = null}) => {


  return (

    <>

      {
        raiseAfterMe && someoneRaisesAfterMe(startingCards)
      }

      {
        !raiseAfterMe && moreThanOneRaise && wasMoreThanOneRaise(startingCards)
      }

      {
        position && startingCards && opponentAction && noPlayersEntered && !raiseAfterMe && !moreThanOneRaise &&

            <Typography
              style={{paddingBottom: 20}}
              variant="h4"
              color="textSecondary">{actionRecommendation.toUpperCase()}
            </Typography>

      }

      {

        noPlayersEntered && actionRecommendation === 'raise' && !opponentRaise && !raiseAfterMe &&

        <Typography variant="h4" color="textSecondary">${raiseIfNoOneRaised(0.04, noPlayersEntered)}</Typography>

      }

      {
        noPlayersEntered && actionRecommendation === 'raise' && opponentRaise && !raiseAfterMe &&

        <Typography variant="h4" color="textSecondary">${reRaiseIfExactlyOneRaisedBeforeMe(opponentRaise, noPlayersEntered)}</Typography>
      }

    </>

  )
}