import React, { Component } from "react";
import _ from "lodash";
import Hello from "./Hello";
import AddGreeter from "./AddGreeter";
import "./HelloList.css";

export default class HelloList extends Component {
  state = {
    names: ["derd", "merd", "herd"]
  };

  renderGreetings = () => {
    return _.map(this.state.names, name => <Hello key={name} value={name} />);
  };

  addGreeting = newName => {
    this.setState({
      names: [...this.state.names, newName]
    });
  };

  render() {
    return (
      <div className={"HelloList"}>
        <AddGreeter value={this.state.names} add={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}
