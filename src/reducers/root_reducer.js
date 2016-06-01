import { combineReducers } from 'redux';
import userReducer from './user_reducer'
import greetingReducer from './greeting_reducer';

const rootReducer= combineReducers({
  user: userReducer,
  greeting: greetingReducer
});

export default rootReducer;
