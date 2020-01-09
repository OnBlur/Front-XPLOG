import React from "react";
import { Link } from "react-router-dom";

const Entry = props => {
  return (
    <Link
      className="entry-wrapper"
      to={{
        pathname: `/entry/${props.id}`,
        state: {
          entryId: props.id,
          title: props.title,
          body: props.body,
          date: props.date,
          userId: props.userId
        }
      }}
    >
      <div className="date">{props.date}</div>
      <div className="entry">
        <div className="entry-header">
          <div className="title">{props.title}</div>
          <div className="comments"></div>
        </div>
        <div className="body">{props.body}</div>
      </div>
    </Link>
  );
};

export default Entry;
