import { createStore, applyMiddleware } from "redux";
import reducers from "./../reducers";
import thunk from "redux-logger";
import logger from "redux-thunk";

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
