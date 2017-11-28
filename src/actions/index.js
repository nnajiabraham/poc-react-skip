export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_RESTAURANTS_FULFILLED = 'FETCH_RESTAURANTS_FULFILLED';

export function fetchRestaurantsAction(location) {
  return {
    type: FETCH_RESTAURANTS,
    payload: location,
  };
}

export function fetchRestaurantsFulfilledAction(restaurants) {
  return {
    type: FETCH_RESTAURANTS_FULFILLED,
    payload: restaurants,
  };
}
