import { FETCH_CAMPSITE } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CAMPSITE:
      return action.payload.data.data[0];
    default:
      return state;
  }
}
