import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/index";

import App from "./components/App";
import SideMenu from "./components/SideMenu";
import Jokes from "./components/Jokes";

import "./assets/css/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("store.getState()", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <SideMenu>
              <App />
            </SideMenu>
          )}
        />
        <Route
          exact
          path="/jokes"
          render={() => (
            <SideMenu>
              <Jokes />
            </SideMenu>
          )}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
