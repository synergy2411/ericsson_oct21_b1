import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import reducerFn from "./store/reducers/reducerFn";
import counterReducer from "./store/reducers/counterReducer";
import resultReducer from "./store/reducers/resultReducer";

const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
