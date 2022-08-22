import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";

import todos from "./modules/todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
