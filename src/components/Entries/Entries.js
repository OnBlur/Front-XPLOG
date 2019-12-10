import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { removeEntry } from "../../store/entries/settings";

import Entry from "./Entry";

export const Entries = () => {
  const entries = useSelector(state => state.entries);
  const dispatch = useDispatch();

  const deleteEntry = id => {
    dispatch(removeEntry(id));
  };

  return (
    <div className="entry-component">
      <h1 className="page-title">Entries</h1>
      <Link to="/entry">Add new...</Link>
      <div className="entries">
        {entries.map(entry => (
          <Entry
            key={entry.id}
            title={entry.title}
            body={entry.body}
            id={entry.id}
            deleteEntry={deleteEntry}
          />
        ))}
      </div>
    </div>
  );
};

export default Entries;
