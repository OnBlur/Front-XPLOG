import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import EntryPage from "./EntryPage";
import { addEntry, editEntry, removeEntry } from "../store/entries/settings";

import Entry from "./Entry";

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      id: 123,
      title: "",
      body: "",
      userId: 214
    };
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  newHandler = event => {
    event.preventDefault();
    let entry = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    };
    this.props.addEntry(entry);
  };

  editHandler = event => {
    event.preventDefault();
    let entry = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    };
    console.log(entry);
    this.props.editEntry(entry);
  };

  prepareEditEntry = event => {
    this.setState({ edit: true });

    const entry = this.props.entries.find(entry => entry.id === event);
    this.setState({ id: event, title: entry.title, body: entry.body });
  };

  render() {
    return (
      <div className="entry-component">
        <h1 className="page-title">Entries</h1>

        <form onSubmit={this.state.edit ? this.editHandler : this.newHandler}>
          <h1>
            Hello {this.state.title} {this.state.body}
          </h1>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.myChangeHandler}
          />
          <p>Body:</p>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.myChangeHandler}
          />
          <input
            type="submit"
            value={this.state.edit ? "Veranderen" : "Verzenden"}
          />
        </form>

        <div className="entries">
          {this.props.entries.map(entry => (
            <div key={entry.id}>
              <Link to={`/entry/${entry.id}`} body={entry.body}>
                {entry.title}
              </Link>
              <Entry
                key={entry.id}
                title={entry.title}
                body={entry.body}
                id={entry.id}
                editEntry={this.prepareEditEntry}
                removeEntry={this.props.removeEntry}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.entries };
};

export default withRouter(
  connect(mapStateToProps, {
    addEntry,
    editEntry,
    removeEntry
  })(Entries)
);
