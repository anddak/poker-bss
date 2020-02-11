const highPairs = ['AA', 'KK', 'QQ'];
export const middlePairs = ['JJ', 'TT'];
export const lowPairs = ['99','88','77','66','55','44','33','22'];
const highAces = ['AKo', 'AKs'];
const middleAces = ['AQo', 'AQs', 'AJs', 'AJo', 'ATs', 'ATo'];
const lowSuitedAces = ['A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',];
const suitedFaceCards = ['KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs'];
const offsuitFaceCards = ['KQo', 'KJo', 'KTo', 'QJo', 'QTo', 'JTo'];
const suitedConnectors = ['T9s', '98s', '87s', '76s', '65s', '54s'];

export const hands = {
    highPairs: highPairs,
    middlePairs: middlePairs,
    lowPairs: lowPairs,
    highAces: highAces,
    middleAces: middleAces,
    lowSuitedAces: lowSuitedAces,
    suitedFaceCards: suitedFaceCards,
    offsuitFaceCards: offsuitFaceCards,
    suitedConnectors: suitedConnectors,
};

export const startingAction = {
 
    early: {
        highPairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middlePairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'call20',
        },
        lowPairs: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'call20',
        },
        highAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middleAces: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        lowSuitedAces: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        suitedFaceCards: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        offsuitFaceCards: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        suitedConnectors: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        anythingElse: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        }

    },
    middle: {
        highPairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middlePairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'call20',
        },
        lowPairs: {
            allPlayersFold: 'call',
            onePlayerCalled: 'vall',
            onePlayerRaised: 'call20',
        },
        highAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middleAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        lowSuitedAces: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        suitedFaceCards: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        offsuitFaceCards: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        suitedConnectors: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        anythingElse: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        }
    },
    late: {
        highPairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middlePairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'call20',
        },        
        lowPairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'call20',
        },
        highAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middleAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'fold',
        },
        lowSuitedAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        suitedFaceCards: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        offsuitFaceCards: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        },
        suitedConnectors: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        anythingElse: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        }

    },
    blinds: {
        highPairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middlePairs: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'call20',
        },
        lowPairs: {
            allPlayersFold: 'call',
            onePlayerCalled: 'call',
            onePlayerRaised: 'call20',
        },
        highAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'raise',
            onePlayerRaised: 'raise'
        },
        middleAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        lowSuitedAces: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        suitedFaceCards: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        offsuitFaceCards: {
            allPlayersFold: 'raise',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        suitedConnectors: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'call',
            onePlayerRaised: 'fold',
        },
        anythingElse: {
            allPlayersFold: 'fold',
            onePlayerCalled: 'fold',
            onePlayerRaised: 'fold',
        }
    },
    
}