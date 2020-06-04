import { FETCH_PARK, FETCH_CAMPSITE, FETCH_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PARK:
      return [action.payload.data, ...state];
    case FETCH_CAMPSITE:
      return //I have no idea
    case FETCH_EVENTS:
      return //Also no idea
    default:
      return state;
  }
}