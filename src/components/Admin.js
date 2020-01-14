import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../store/users/settings";
import { removeUser } from "../store/users/settings";
import { register } from "../store/users/settings";

export const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer.items);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleRemoveUser = id => {
    return e => dispatch(removeUser(id));
  };

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitted(true);
    if (firstName && lastName && username && password) {
      dispatch(register({ firstName, lastName, username, password }));
    }
    dispatch(getAll());
  };

  return (
    <div className="entry-component">
      <form name="form" className="register-form" onSubmit={handleSubmit}>
        <h2>New user</h2>
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
          {submitted && !firstName && (
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
          {submitted && !lastName && (
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
          {submitted && !username && (
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
          <button className="btn btn-primary">Add User</button>
        </div>
      </form>
      <h3>All registered users:</h3>
      {users && (
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              {user.firstName + " " + user.lastName}
              {user.deleting ? (
                <em> - Deleting...</em>
              ) : user.deleteError ? (
                <span className="text-danger">
                  {" "}
                  - ERROR: {user.deleteError}
                </span>
              ) : (
                <span>
                  {" "}
                  - <a onClick={handleRemoveUser(user.id)}>Delete</a>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
