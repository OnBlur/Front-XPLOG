import React, { Component } from "react";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>React App</h1>
      </div>
    );
  }
}

export default App;
