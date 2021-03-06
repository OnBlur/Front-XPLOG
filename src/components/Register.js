import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from "../store/users/actions";

export const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitted(true);
    if (firstName && lastName && username && password) {
      dispatch(register({ firstName, lastName, username, password }, history));
    }
  };

  return (
    <form name="form" className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div
        className={"form-group" + (submitted && !firstName ? " has-error" : "")}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        {submitted && !firstName && (
          <div className="help-block">First Name is required</div>
        )}
      </div>
      <div
        className={"form-group" + (submitted && !lastName ? " has-error" : "")}
      >
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        {submitted && !lastName && (
          <div className="help-block">Last Name is required</div>
        )}
      </div>
      <div
        className={"form-group" + (submitted && !username ? " has-error" : "")}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        {submitted && !username && (
          <div className="help-block">Username is required</div>
        )}
      </div>
      <div
        className={"form-group" + (submitted && !password ? " has-error" : "")}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {submitted && !password && (
          <div className="help-block">Password is required</div>
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Register</button>
        <Link to="/login" className="btn btn-link">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default Register;
