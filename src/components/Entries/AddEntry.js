import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addEntry } from "../../store/entries/actions";

const AddEntry = ({ history }) => {
  const dispatch = useDispatch();

  const routes = {
    Home: "/"
  };

  // TODO: get id from api and store it in the state. Needs to happen in the Entries actions
  const [id, setId] = useState(Math.floor(Math.random() * 10000));
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("22-Jan-2020");

  const mystyle = {
    textAlign: "center"
  };

  const addHandler = event => {
    event.preventDefault();

    dispatch(addEntry({ id, title, body, date }));
    history.push(routes.Home);
  };

  return (
    <form className="entry-editor" onSubmit={addHandler}>
      <div className="concepts">
        <div className="concept-header">Concept</div>
        {/* First concept */}
        <div className="concept">
          <div className="concept-title">Reflecteren</div>
          <div className="concept-body">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like
          </div>
        </div>
        {/* Second concept */}
        <div className="concept">
          <div className="concept-title">User journeys</div>
          <div className="concept-body">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary
          </div>
        </div>
      </div>
      {/* Entry */}
      <div className="entry-form">
        <div className="title-input">
          <input
            type="text"
            placeholder="Titel..."
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className="body-input">
          <textarea
            type="text"
            placeholder="Schrijf hier je reflectie..."
            name=""
            id=""
            rows="30"
            cols="60"
            value={body}
            onChange={({ target }) => setBody(target.value)}
          />
        </div>
      </div>
      {/* Settings */}
      <div className="entry-settings">
        <div className="settings-format">
          <div className="format-header">Lettertype</div>
          <div className="options-wrapper"></div>
        </div>
        <div className="settings-options">
          <div className="options-header">Opties</div>
          <div className="options-wrapper">
            <div className="option">Bijlage toevoegen</div>
            <div className="option">Presets</div>
            <div className="option">Opslaan concept</div>
            <div className="option">Download</div>
          </div>
        </div>
        <div className="settings-publish">
          <div className="publish-header">Publiceren</div>
          <div className="options-wrapper">
            <div className="option">Iedereen</div>
            <input className="option" type="submit" value="Plaatsen" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEntry;
