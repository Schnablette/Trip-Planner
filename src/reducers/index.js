import { combineReducers } from "redux";
import ParksReducer from "./reducers-parks";
import CampsiteReducer from "./reducer-campsite";
import EventsReducer from "./reducer-events";

//the result of the reducer data goes to the "park", "campsite", "event" key
const rootReducer = combineReducers({
  park: ParksReducer,
  campsite: CampsiteReducer,
  events: EventsReducer
});

export default rootReducer;
