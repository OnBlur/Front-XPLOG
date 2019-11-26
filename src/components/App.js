import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEntries } from "../store/entries/settings";

import SideMenu from "./SideMenu";
import Entries from "./Entries";

class App extends Component {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div className="container-fluid">
        <SideMenu />
        <Entries />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const componentConnector = connect(mapStateToProps, {
  fetchEntries
});

export default componentConnector(App);
