import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router";

import { addEntry } from "../../store/entries/settings";

const AddEntry = () => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const [entry, setEntry] = useState({
    id: 123,
    title: "",
    body: "",
    userId: 124
  });

  const mystyle = {
    textAlign: "center"
  };

  const addHandler = event => {
    event.preventDefault();
    dispatch(addEntry(entry));
    history.push("/");
  };

  console.log(location);

  return (
    <form style={mystyle} onSubmit={addHandler}>
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
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
};

export default AddEntry;
