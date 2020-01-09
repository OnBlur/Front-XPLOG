import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEntries } from "../store/entries/settings";

import Entry from "./Entries/Entry";

export const App = ({ history }) => {
  const dispatch = useDispatch();
  const entries = useSelector(state => state.entryReducer.entries);

  useEffect(() => {
    dispatch(fetchEntries());
  }, []);

  const toEntry = () => {
    history.push("/entry");
  };

  return (
    <div className="entry-component">
      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>Mijn XPLOG</h1>
        </div>
        <div className="right">
          <div className="filter">
            <div className="tag">Nieuw</div>
            <div className="tag">Dag</div>
            <div className="tag active">Week</div>
            <div className="tag">Maand</div>
          </div>
          <div className="nav">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball active"></div>
            <div className="ball"></div>
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="entries">
        {entries.map(entry => (
          <Entry
            key={entry.id}
            title={entry.title}
            body={entry.body}
            date={entry.date}
            id={entry.id}
          />
        ))}
        <div className="entry-wrapper" onClick={() => toEntry()}>
          <div className="date">.</div>
          <div className="entry new">
            <div className="add-icon">
              <div className="plus">+</div>
            </div>
            <div className="add-text">Add new</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
