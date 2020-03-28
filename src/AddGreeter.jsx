import React, { Component } from "react";
import "./AddGreeter.css";
import _ from "lodash";

export default class AddGreeter extends Component {
  //the constructor here is to add props and send them back to the parent
  //the super props allows this by allowing a space for common props between parent and child comp
  constructor(props) {
    super(props);
    this.state = { greetingName: "", addReady: false };
  }

  updateHandler = e => {
    if (this.props.value.includes(e.target.value)) {
      return;
    } else {
      this.setState({ greetingName: e.target.value, addReady: true });
    }
  };

  addGreeting = () => {
    this.props.add(this.state.greetingName);
    this.setState({ greetingName: "", addReady: false });
  };

  render() {
    return (
      <div className={"AddGreeter"}>
        <input type="text" onChange={this.updateHandler} />
        <button onClick={this.addGreeting} disabled={!this.state.addReady}>
          Add
        </button>
      </div>
    );
  }
}
