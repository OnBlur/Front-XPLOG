import React from "react";

const Entry = props => {
  return (
    <div className="entry">
      <div className="content">
        <div className="entry-title">{props.title}</div>
        <div className="entry-body">{props.body}</div>
      </div>
      <div className="function">
        <a className="icon edit" onClick={() => props.editEntry(props.id)}>
          Edit
        </a>
        <a className="icon delete" onClick={() => props.removeEntry(props.id)}>
          X
        </a>
      </div>
    </div>
  );
};

export default Entry;
