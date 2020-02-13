import {middlePairs, lowPairs} from './startingMove';
import {Typography} from '@material-ui/core';
import React from "react";

/*
If no one raised before you, you simply raise 4 big blinds + 1 big blind for every player that entered the hand before you.
*/
export const raiseIfNoOneRaised = 
(bb, playersEntered) => (bb * 4) + (bb * playersEntered); 

/*
IF THERE WAS EXACTLY ONE RAISE BEFORE YOU
If an opponent raised before you, you re-raise 
to 3x the size of the original raise. 
For every player that calls this raise before you, 
you increase the size of your re-raise by the size of the original raise.
*/
export const reRaiseIfExactlyOneRaisedBeforeMe = 
(opponentRaise, playersCalledRaise) => (opponentRaise*3) + (opponentRaise * playersCalledRaise) - opponentRaise;

/*
IF THERE WAS MORE THAN ONE RAISE BEFORE YOU
If there was more than one raise before you, one thing is clear: 
You're not getting involved if you don't have a monster hand. 
You only play AA and KK, two aces and two kings. When you do have a monster, 
your line of play is simple in this scenario: you go all-in.
*/
export const wasMoreThanOneRaise = 
hand => hand === 'AA' || hand === 'KK' ?
  <Typography variant="h1" color="textSecondary">ALL IN</Typography> :
  <Typography variant="h1" color="error">FOLD</Typography>;


/*
What if someone raises after you?
YOU HAVE A PAIR OF ACES OR A PAIR OF KINGS
If you have a pair of aces or kings, you should just keep on raising. The best thing you can do is try and go all-in before the flop and put all your money in the middle. Some beginners have trouble doing this, but keep in mind that you are well ahead against every other pair by approx. 80%. You can hardly find a more profitable opportunity to go all-in.

Fold all other hands, including AK and AQ, hard as it may be for you to do so. You can, however, make an exception to this rule when you have a pocket pair.

YOU HAVE A POCKET PAIR
There is, as we just said, one exception. When you have a pocket pair smaller than AA or KK, you can make an exception and call a raise, as long as both you and your opponent have stacks at least 20x the amount you're about to call.

Just like when you follow the Call 20 rule from the Starting Hands Chart, you are speculating on hitting three-of-a-kind on the flop. If you do hit, chances are good that you'll be able to win your opponent's entire stack.

YOUR OPPONENT ONLY MIN-RAISES
You will find players who only min-raise fairly often in the lower limits. Whatever they may think they are doing, it certainly doesn't make much sense.

If you have already entered the hand and one opponent raises after you by the smallest amount allowed, a so-called min-raise, you should always call, unless, of course, you have AA or KK, in which case you re-raise. 
*/
export const someoneRaisesAfterMe = hand => {
if (hand === 'AA' || hand === 'KK') {
  return <Typography variant="h4" color="textSecondary">Try and go all in before flop.</Typography>
    }  else if
       (middlePairs.concat(lowPairs).find(h => h === hand)) {
            return <Typography style={{paddingLeft: 30, paddingRight: 20}} variant="h4" color="textSecondary">{call20}</Typography>;
        } else {
            return <Typography style={{paddingLeft: 30, paddingRight: 20}} variant="h4" color="textSecondary">Call if it was one big blind raise (mini raise), otherwise fold.</Typography>
        }   
};
export const call20 = 'Only call if both opponents and my stack has at least 20x raise amount in stack.';