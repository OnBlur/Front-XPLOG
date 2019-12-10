import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addEntry } from "../../store/entries/settings";

const AddEntry = ({history}) => {
  const dispatch = useDispatch();

  const routes = {
    Home: '/',
  }

  // TODO: get id from api and store it in the state. Needs to happen in the Entries settings
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mystyle = {
    textAlign: "center"
  };

  const addHandler = event => {
    event.preventDefault();
    
    dispatch(addEntry({title, body}));
    history.push(routes.Home);
  };

  return (
    <form style={mystyle} onSubmit={addHandler}>
      <h1>Titel</h1>
      <input
        type="text"
        value={title}
        onChange={({target}) => setTitle(target.value)}
      />

      <h1>Content</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={body}
        onChange={({target}) => setBody(target.value)}
      ></textarea>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
};

export default AddEntry;
