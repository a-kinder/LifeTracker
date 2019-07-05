import { createStore, applyMiddleware, compose } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
