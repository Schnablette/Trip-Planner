import { FETCH_CAMPSITE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CAMPSITE:
      return //I have no idea
    default:
      return state;
  }
}
