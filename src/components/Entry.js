import React from "react";

const Entry = props => {
  return (
    <div className="entry">
      <div className="content">
        <div className="entry-title">{props.title}</div>
        <div className="entry-body">{props.body}</div>
      </div>
      <div className="delete" onClick={() => props.removeEntry(props.id)}>
        <a className="icon">X</a>
      </div>
    </div>
  );
};

export default Entry;
