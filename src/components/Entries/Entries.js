import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Entry from "./Entry";

export const Entries = () => {
  const entries = useSelector(state => state.entryReducer.entries);

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
          />
        ))}
      </div>
    </div>
  );
};

export default Entries;
