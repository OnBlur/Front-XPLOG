import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/index";

import "./assets/css/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("store.getState()", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
