import { combineReducers, createStore } from "redux";
import counterReducers from "./ducks/counter";

const reducer = combineReducers({
  counter: counterReducers,
});

const store = createStore(reducer);

export default store;
