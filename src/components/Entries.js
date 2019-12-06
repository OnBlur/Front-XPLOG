import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { addEntry, editEntry, removeEntry } from "../store/entries/settings";

import Entry from "./Entry";

export const Entries = () => {
  const entries = useSelector(state => state.entries);
  const dispatch = useDispatch();

  const [entry, setEntry] = useState({
    newEntry: {
      id: 123,
      title: "",
      body: "",
      userId: 214
    }
  });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(123);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(214);

  const newHandler = event => {
    event.preventDefault();
    let entry = {
      id,
      title,
      body,
      userId
    };
    dispatch(addEntry(entry));
  };

  const editHandler = event => {
    event.preventDefault();
    let entry = {
      id,
      title,
      body,
      userId
    };
    console.log(entry);
    dispatch(editEntry(entry));
  };

  const prepareEditEntry = event => {
    setEdit(true);

    const entry = entries.find(entry => entry.id === event);
    setEntry({ ...entry, id: event, title: entry.title, body: entry.body });
  };

  return (
    <div className="entry-component">
      <h1 className="page-title">Entries</h1>

      <form onSubmit={edit ? editHandler : newHandler}>
        <h1>
          Hello {title} {body}
        </h1>
        <p>Title:</p>
        <input
          type="text"
          name="title"
          value={entry.title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <p>Body:</p>
        <input
          type="text"
          name="body"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        />
        <input type="submit" value={edit ? "Veranderen" : "Verzenden"} />
      </form>

      <div className="entries">
        {entries.map(entry => (
          <div key={entry.id}>
            <Link to={`/entry/${entry.id}`} body={entry.body}>
              {entry.title}
            </Link>
            <Entry
              key={entry.id}
              title={entry.title}
              body={entry.body}
              id={entry.id}
              editEntry={prepareEditEntry}
              removeEntry={removeEntry}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entries;
