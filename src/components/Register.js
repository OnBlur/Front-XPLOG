import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Register = () => {
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
      register(user);
    }
  };

  //   const { registering } = this.props;
  //   const { user, submitted } = this.state;

  return (
    <div className="login-form">
      <h2>Register</h2>
      <form name="form" className="form" onSubmit={handleSubmit}>
        <div
          className={
            "form-group" + (submitted && !firstName ? " has-error" : "")
          }
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
          {submitted && !user.firstName && (
            <div className="help-block">First Name is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !lastName ? " has-error" : "")
          }
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
          {submitted && !user.lastName && (
            <div className="help-block">Last Name is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          {submitted && !user.username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
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
    </div>
  );
};

export default Register;
