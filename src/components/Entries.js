import React, { Component } from "react";
import { connect } from "react-redux";

function Entry(props) {
  return (
    <div className="entry">
      <div className="entry-title">{props.title}</div>
      <div className="entry-body">{props.body}</div>
    </div>
  );
}

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEntry: {}
    };
  }

  render() {
    return (
      <div className="entry-component">
        <h1 className="page-title">Entries</h1>
        <div className="entries">
          {this.props.entries.map(entry => (
            <Entry key={entry.id} title={entry.title} body={entry.body} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.entries };
};

export default connect(mapStateToProps)(Entries);
