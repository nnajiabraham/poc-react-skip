import { FETCH_RESTAURANTS_FULFILLED } from '../actions/index';

const initialState = false;

export function errorHandleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_FULFILLED:
      return action.payload.restaurants.length === 0;
    default:
      return state;
  }
}

export default errorHandleReducer;
