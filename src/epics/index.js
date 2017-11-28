import { combineEpics } from 'redux-observable';
import { fetchRestaurantsEpic } from './fetchRestaurantsEpic';

export default combineEpics(fetchRestaurantsEpic);
