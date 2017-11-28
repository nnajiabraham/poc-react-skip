import { FETCH_RESTAURANTS, FETCH_RESTAURANTS_FULFILLED } from '../actions/index';

const initialState = { location: '', searchResult: {} };

export function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        location: action.payload,
      };
    case FETCH_RESTAURANTS_FULFILLED:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
}

export default restaurantsReducer;
