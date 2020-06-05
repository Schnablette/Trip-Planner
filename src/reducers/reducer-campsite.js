import { FETCH_CAMPSITE } from '../actions/index';

//this is the campsite reducer
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CAMPSITE:
      if(!action.payload.data.data[0]) {
        return action.payload.data
      } else {
        return action.payload.data.data[0];
      }
    default:
      return state;
  }
}
