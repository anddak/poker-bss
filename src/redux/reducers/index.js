import {
  SET_MORE_THAN_ONE_RAISE,
  SET_NO_PLAYERS_ENTERED,
  SET_OPPONENT_ACTION, SET_OPPONENT_RAISE_SIZE,
  SET_POSITION, SET_RAISE_AFTER_ME,
  SET_STARTING_CARDS,
  SET_STARTING_HAND_TYPE
} from "../../js/constants/constants";

const initialState = {
  position: null,
  startingCards: null,
  opponentAction: null,
  startingHandType: null,
  noPlayersEntered: null,
  opponentRaiseSize: null,
  moreThanOneRaise: false,
  raiseAfterMe: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSITION:
      return Object.assign({}, state, {
        position: action.payload
      });
    case SET_STARTING_CARDS:
      return Object.assign({}, state, {
        startingCards: action.payload
      });
    case SET_OPPONENT_ACTION:
      return Object.assign({}, state, {
        opponentAction: action.payload
      });
    case SET_STARTING_HAND_TYPE:
      return Object.assign({}, state, {
        startingHandType: action.payload
      });
    case SET_NO_PLAYERS_ENTERED:
      return Object.assign({}, state, {
        noPlayersEntered: action.payload
      });
    case SET_OPPONENT_RAISE_SIZE:
      return Object.assign({}, state, {
        opponentRaiseSize: action.payload
      });
    case SET_MORE_THAN_ONE_RAISE:
      return Object.assign({}, state, {
        moreThanOneRaise: action.payload
      });
    case SET_RAISE_AFTER_ME:
      return Object.assign({}, state, {
        raiseAfterMe: action.payload
      });
    default:
      return state;
  }
}


export default rootReducer;