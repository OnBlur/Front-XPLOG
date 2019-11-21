import React from "react";
import ReactDOM from "react-dom";

import Entry from "./components/Entry";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/index";
// import stateReducer from "./store/state/reducers";
// import entriesReducer from "./store/entries/reducers";

import "./assets/css/index.scss";

const store = createStore(rootReducer);

store.subscribe(() => console.log("store.getState()", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Entry />
  </Provider>,
  document.getElementById("root")
);
