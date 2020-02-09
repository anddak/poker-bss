import React from 'react';
import { raiseIfNoOneRaised, reRaiseIfExactlyOneRaisedBeforeMe } from './logic/staking'


export default ({ actionRecommendation, noPlayersEntered, opponentRaise = null }) => {



    return (
        <div>
            <p>{actionRecommendation.toUpperCase()}</p>
            {actionRecommendation === 'raise' && !opponentRaise ?
                `$${raiseIfNoOneRaised(0.04, noPlayersEntered)}`
    
                :
                `$${reRaiseIfExactlyOneRaisedBeforeMe(opponentRaise, noPlayersEntered)}` }
        </div>
    )

}