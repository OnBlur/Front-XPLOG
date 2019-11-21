import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../store/state/settings";
import { setEntries } from "../store/entries/settings";
import API from "../api";

function Entry(props) {
  return (
    <div className="entry">
      <div className="entry-title">{props.title}</div>
      <div className="entry-body">{props.body}</div>
    </div>
  );
}

class App extends Component {
  state = { entries: [] };

  componentDidMount() {
    API.get(`posts`).then(res => {
      const entries = res.data;
      this.props.dispatch(setEntries(entries));
      this.setState({ entries });
    });
  }

  render() {
    console.log(this);
    return (
      <div>
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
  console.log("state", state);
  return { gameStarted: state.gameStarted };
};

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);
