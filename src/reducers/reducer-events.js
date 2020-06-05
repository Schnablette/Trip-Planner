import { FETCH_EVENTS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      if(!action.payload.data.data[0]) {
        return action.payload.data
      } else {
        return action.payload.data.data[0];
      }
      
    default:
      return state;
  }
}
