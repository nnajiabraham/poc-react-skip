import { Observable } from 'rxjs';
import { FETCH_RESTAURANTS, fetchRestaurantsFulfilledAction } from '../actions/index';
import config from '../config.json';
import { getLocation } from '../helpers/GoogleMaps';

export const fetchRestaurantsEpic = action$ => {
  const url = `${config.API_URL}${config.API_SERVICES.RESTAURANTS_SUMMARIES}`;
  const headers = {
    'App-Token': config.APP_TOKEN,
  };

  return action$
    .ofType(FETCH_RESTAURANTS)
    .switchMap(({ payload }) => Observable.fromPromise(getLocation(payload)))
    .map(results => ({
      lat: results[0].geometry.location.lat(),
      lon: results[0].geometry.location.lng(),
    }))
    .catch(() => Observable.of({ lat: 10000, lon: 10000 }))
    .switchMap(location => Observable.ajax.getJSON(`${url}&lat=${location.lat}&lon=${location.lon}`, headers))
    .map(searchResult => fetchRestaurantsFulfilledAction(searchResult));
};
