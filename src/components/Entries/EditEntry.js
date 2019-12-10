import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { editEntry } from "../../store/entries/settings";

const EditEntry = ({history, location}) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const routes = {
    Home: '/',
  }

  const [entry, setEntry] = useState({
    id: location.state.entryId,
    title: location.state.title,
    body: location.state.body,
    userId: location.state.userId
  });

  const mystyle = {
    textAlign: "center"
  };

  const editHandler = event => {
    event.preventDefault();
    
    dispatch(editEntry(entry));
    history.push(routes.Home);
  };

  return (
    <form style={mystyle} onSubmit={editHandler}>
      <h1>Titel</h1>
      <input
        type="text"
        value={entry.title}
        onChange={({ target }) => setEntry({ ...entry, title: target.value })}
      />

      <h1>Content</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={entry.body}
        onChange={({ target }) => setEntry({ ...entry, body: target.value })}
      ></textarea>
      <p>id: {id}</p>
      <input type="submit" value="Save" />
    </form>
  );
};

export default EditEntry;
