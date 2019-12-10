import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/index";

import App from "./components/App";
import Menu from "./components/Menu";
import Jokes from "./components/Jokes";
import AddEntry from "./components/Entries/AddEntry";
import EditEntry from "./components/Entries/EditEntry";

import "./assets/css/index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

//Redux chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("store.getState()", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/jokes" component={Jokes}/>
          <Route exact path="/entry" component={AddEntry}/>
          <Route exact path="/entry/:id" component={EditEntry}/>
        </Switch>
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
