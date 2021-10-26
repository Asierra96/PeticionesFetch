import React, { Component } from "react";

class App extends Component {
  state = {
    info: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((info) => this.setState({ info }));
  }
  render() {
    return (
      <div>
        <h1> Peticion HTTP </h1>
        <h2> {this.state.text} </h2>
        <ul>
          {this.state.info.map((info) => (
            <li key={info.userId}>{info.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
