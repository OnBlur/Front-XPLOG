import React, { Component } from "react";
import { connect } from "react-redux";
import { addEntry, removeEntry } from "../store/entries/settings";

function Entry(props) {
  const removeItem = id => {
    console.log("Click happened", id);
  };

  return (
    <div className="entry">
      <div className="content">
        <div className="entry-title">{props.title}</div>
        <div className="entry-body">{props.body}</div>
      </div>
      <div className="delete" onClick={removeItem(props.id)}>
        <a className="icon">X</a>
      </div>
    </div>
  );
}

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 123,
      title: "",
      body: "",
      userId: 214
    };
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  mySubmitHandler = event => {
    event.preventDefault();
    let newEntry = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    };
    this.props.addEntry(newEntry);
  };

  render() {
    return (
      <div className="entry-component">
        <h1 className="page-title">Entries</h1>

        <form onSubmit={this.mySubmitHandler}>
          <h1>
            Hello {this.state.title} {this.state.body}
          </h1>
          <p>Title:</p>
          <input type="text" name="title" onChange={this.myChangeHandler} />
          <p>Body:</p>
          <input type="text" name="body" onChange={this.myChangeHandler} />
          <input type="submit" />
        </form>

        <div className="entries">
          {this.props.entries.map(entry => (
            <Entry
              key={entry.id}
              title={entry.title}
              body={entry.body}
              id={entry.id}
              removeEntry={this.props.removeEntry}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.entries };
};

export default connect(mapStateToProps, {
  addEntry,
  removeEntry
})(Entries);
