import { SET_POSITION } from "../../constants";

const initialState = {
  position: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_POSITION) {
    return Object.assign({}, state, {
      position: action.payload
    });
  }
  return state;
}

export default rootReducer;