import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./_helpers";

import App from "./components/App";
import Menu from "./components/Menu";
import Jokes from "./components/Jokes";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEntry from "./components/Entries/AddEntry";
import EditEntry from "./components/Entries/EditEntry";

import "./assets/css/index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend";
configureFakeBackend();

const routes = {
  Home: "/",
  Jokes: "/jokes",
  Entries: "/entry",
  Entry: "/entry/:id",
  Login: "/login",
  Register: "/register"
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path={routes.Home} component={App} />
          <Route exact path={routes.Jokes} component={Jokes} />
          <Route exact path={routes.Entries} component={AddEntry} />
          <Route exact path={routes.Entry} component={EditEntry} />
          <Route exact path={routes.Login} component={Login} />
          <Route exact path={routes.Register} component={Register} />
        </Switch>
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
