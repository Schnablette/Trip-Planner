import { combineReducers } from "redux";
import ParksReducer from "./reducers-parks";

//the result of the reducer data goes to the "posts" key
const rootReducer = combineReducers({
  park: ParksReducer
});

export default rootReducer;
