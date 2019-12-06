import React, { Component } from "react";

class EntryPage extends Component {
  componentDidMount() {
    console.log("handle", location.pathname);
  }
  render() {
    return (
      <div className="entry">
        <div className="content">
          {/* <div className="entry-title">{props.title}</div> */}
          {/* <div className="entry-body">{props.body}e</div> */}
        </div>
      </div>
    );
  }
}

export default EntryPage;
