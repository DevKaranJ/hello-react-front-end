import { combineReducers } from 'redux';
import { FETCH_RANDOM_GREETING_SUCCESS } from './actions';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer
});

export default rootReducer;
