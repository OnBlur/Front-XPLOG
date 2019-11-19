import React, { Component } from "react";
import API from "../api";

function Welcome(props) {
  return <li>Hello, {props.name}</li>;
}

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    API.get(`users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <h1>React App</h1>
        <ul>
          {this.state.users.map(user => (
            <Welcome key={user.id} name={user.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
