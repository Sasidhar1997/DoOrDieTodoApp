import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

import reducers from "./reducer/rootReducers";

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducers, middlewares);

export default store;
