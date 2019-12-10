import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeEntry } from "../../store/entries/settings";

const Entry = props => {
  const dispatch = useDispatch();

  const deleteEntry = id => {
    dispatch(removeEntry(id));
  };

  return (
    <div className="entry">
      <div className="content">
        <div className="entry-title">{props.title}</div>
        <div className="entry-body">{props.body}</div>
      </div>
      <div className="function">
        <Link
          to={{
            pathname: `/entry/${props.id}`,
            state: {
              entryId: props.id,
              title: props.title,
              body: props.body,
              userId: props.userId
            }
          }}
          className="icon edit"
        >
          Edit
        </Link>
        <a className="icon delete" onClick={() => deleteEntry(props.id)}>
          X
        </a>
      </div>
    </div>
  );
};

export default Entry;
