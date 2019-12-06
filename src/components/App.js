import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchEntries } from "../store/entries/settings";

import Entries from "./Entries";

export const App = () => {
  // const entries = useSelector(state => state.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntries());
  }, []);

  return <div className="container-fluid">{<Entries />}</div>;
};

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchEntries();
//   }

//   render() {
//     return <div className="container-fluid">{/* <Entries /> */}</div>;
//   }
// }

// const mapStateToProps = () => {
//   return {};
// };

// const componentConnector = connect(mapStateToProps, {
//   fetchEntries
// });

// export default withRouter(componentConnector(App));
