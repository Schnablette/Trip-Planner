import { FETCH_PARK } from '../actions/index';

//this is the ParksReducer
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PARK:
      return action.payload.data.data[0];
    default:
      return state;
  }
}
