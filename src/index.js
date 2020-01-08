import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { Provider } from "react-redux";
import { store } from "./_helpers";

import App from "./components/App";
import Menu from "./components/Menu";
import Jokes from "./components/Jokes";
import Login from "./components/Login";
import Admin from "./components/Admin";
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
  Admin: "/admin",
  Login: "/login",
  Register: "/register"
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu>
        <Switch>
          <PrivateRoute exact path={routes.Home} component={App} />
          <PrivateRoute exact path={routes.Jokes} component={Jokes} />
          <PrivateRoute exact path={routes.Entries} component={AddEntry} />
          <PrivateRoute exact path={routes.Entry} component={EditEntry} />
          <PrivateRoute exact path={routes.Admin} component={Admin} />
          <Route exact path={routes.Login} component={Login} />
          <Route exact path={routes.Register} component={Register} />
        </Switch>
      </Menu>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
