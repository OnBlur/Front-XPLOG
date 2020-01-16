import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { Provider } from "react-redux";
import { store, routes } from "./_helpers";

import App from "./components/App";
import Dashboard from "./components/Dashboard";
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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <PrivateRoute exact path={routes.Home} component={Dashboard} />
          <PrivateRoute exact path={routes.Entries} component={AddEntry} />
          <PrivateRoute exact path={routes.Entry} component={EditEntry} />
          <PrivateRoute exact path={routes.Admin} component={Admin} />
          <Route exact path={routes.Login} component={Login} />
          <Route exact path={routes.Register} component={Register} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
