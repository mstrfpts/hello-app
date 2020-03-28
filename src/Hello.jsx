import React, { Component } from "react";
import "./Hello.css";

export default class Hello extends Component {
  state = {
    buttonLabel: "Frenchify",
    greeting: "Hello "
  };

  clickHandler = () => {
    this.state.buttonLabel === "Frenchify"
      ? this.setState({ greeting: "Bonjour ", buttonLabel: "Englify" })
      : this.setState({ greeting: "Hello ", buttonLabel: "Frenchify" });
  };

  render() {
    console.log("derd, in hello props", this.props);
    return (
      <div className="Hello">
        {this.state.greeting}
        {this.props.value}
        <br />
        <button onClick={this.clickHandler}>{this.state.buttonLabel}</button>
      </div>
    );
  }
}
