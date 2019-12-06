import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchEntries } from "../store/entries/settings";

import Entries from "./Entries";

class App extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div className="container-fluid">
        <Entries />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const componentConnector = connect(mapStateToProps, {
  fetchEntries
});

export default withRouter(componentConnector(App));
