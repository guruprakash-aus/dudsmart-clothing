import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
// import { fetchCollectionsStart } from "./shop/shopSagas";
import rootSaga from "./rootSaga";

// const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// to display the redux logs in the console for debugging
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
