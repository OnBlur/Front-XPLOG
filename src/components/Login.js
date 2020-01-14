import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login, logout } from "../store/users/settings";

export const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(logout());
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(login(username, password, history));
    }
  };

  //   const { loggingIn } = this.props;

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1 className="login-text">XPLOG</h1>
        <form name="form" className="form" onSubmit={handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="example@student.nhlstenden.com"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="************"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
