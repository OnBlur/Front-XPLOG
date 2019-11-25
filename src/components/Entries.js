import React, { Component } from "react";
import { connect } from "react-redux";
import { setEntries } from "../store/entries/settings";
import { fetchEntries } from "../store/entries/settings";
import API from "../api";

function Entry(props) {
  return (
    <div className="entry">
      <div className="entry-title">{props.title}</div>
      <div className="entry-body">{props.body}</div>
    </div>
  );
}

class Entries extends Component {
  state = { entries: [] };

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div className="entry-component">
        <h1 className="page-title">Entries</h1>
        <div className="entries">
          {this.state.entries.map(entry => (
            <Entry key={entry.id} title={entry.title} body={entry.body} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { entries } = state;
  return { entries: state.entries };
};

const componentConnector = connect(mapStateToProps, {
  fetchEntries
});

export default componentConnector(Entries);
