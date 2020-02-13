import {
  SET_POSITION,
  SET_STARTING_CARDS,
  SET_OPPONENT_ACTION,
  SET_STARTING_HAND_TYPE,
  SET_NO_PLAYERS_ENTERED,
  SET_OPPONENT_RAISE_SIZE,
  SET_MORE_THAN_ONE_RAISE,
  SET_RAISE_AFTER_ME,
  SET_FOLD,
  SET_ACTIVE_STEP
} from "../../js/constants/constants";

export function setPosition(payload) {
  return { type: SET_POSITION, payload };
}

export function setStartingCards(payload) {
  return { type: SET_STARTING_CARDS, payload };
}

export function setOpponentAction(payload) {
  return { type: SET_OPPONENT_ACTION, payload };
}

export function setStartingHandType(payload) {
  return { type: SET_STARTING_HAND_TYPE, payload };
}

export function setNoPlayersEntered(payload) {
  return { type: SET_NO_PLAYERS_ENTERED, payload };
}

export function setOpponentRaiseSize(payload) {
  return { type: SET_OPPONENT_RAISE_SIZE, payload };
}

export function setMoreThanOneRaise(payload) {
  return { type: SET_MORE_THAN_ONE_RAISE, payload };
}

export function setRaiseAfterMe(payload) {
  return { type: SET_RAISE_AFTER_ME, payload };
}

export function setFold(payload) {
  return { type: SET_FOLD, payload };
}

export function setActiveStep(payload) {
  return { type: SET_ACTIVE_STEP, payload };
}