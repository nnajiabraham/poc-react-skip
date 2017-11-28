import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurantsReducers';
import { errorHandleReducer } from './errorHandlerReducers';

const reducers = {
  places: restaurantsReducer,
  error: errorHandleReducer,
};

export default combineReducers(reducers);
