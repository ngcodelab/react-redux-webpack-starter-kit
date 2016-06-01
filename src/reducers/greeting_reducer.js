import actionTypes from '../constants/action_types'

const initialState = {
  say: ""
}

function greetingReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SAY_HELLO:
      return {say: action.value};
    case actionTypes.SAY_BYE:
      return {say: action.value};
    default:
      return state;
  }
}

export default greetingReducer;
