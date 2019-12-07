import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Entry = props => {
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
        <a className="icon delete" onClick={() => props.deleteEntry(props.id)}>
          X
        </a>
      </div>
    </div>
  );
};

export default Entry;
