import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [];

// to display the redux logs in the console for debugging
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};
