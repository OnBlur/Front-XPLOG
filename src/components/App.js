import React, { Component } from "react";
import API from "../api";

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
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
