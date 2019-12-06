import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";

import { getEntryById } from "../store/entries/settings";

const EntryPage = () => {
  let { id } = useParams();
  const [entries] = useState();

  useEffect(() => {
    getEntryById(id);
  }, []);

  return (
    <div>
      Portfolio component
      <p>id: {id}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { entries: state.entries };
};

export default withRouter(
  connect(mapStateToProps, { getEntryById })(EntryPage)
);
