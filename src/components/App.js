import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAll } from "../store/users/settings";
import { removeUser } from "../store/users/settings";
import { fetchEntries } from "../store/entries/settings";

import Entry from "./Entries/Entry";

export const App = () => {
  const dispatch = useDispatch();
  const entries = useSelector(state => state.entryReducer.entries);
  const users = useSelector(state => state.userReducer.items);
  const user = useSelector(state => state.authenticationReducer.user);

  useEffect(() => {
    dispatch(getAll());
    dispatch(fetchEntries());
  }, []);

  const handleRemoveUser = id => {
    return e => dispatch(removeUser(id));
  };

  return (
    <div className="entry-component">
      <h1 className="page-title">Welkom terug {user.username}...</h1>
      <Link to="/entry">Add new...</Link>
      <div className="entries">
        {entries.map(entry => (
          <Entry
            key={entry.id}
            title={entry.title}
            body={entry.body}
            id={entry.id}
          />
        ))}
      </div>
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
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
};

export default App;
