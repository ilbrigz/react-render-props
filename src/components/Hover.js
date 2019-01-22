import React, { Component } from "react";

export default class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }
  mouseOver = () => {
    console.log("over");
    this.setState({ hovering: true });
  };
  mouseOut = () => {
    console.log("out");
    this.setState({ hovering: false });
  };
  render() {
    return (
      <div
        style={{ cursor: "pointer" }}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {this.props.render(this.state.hovering)}
      </div>
    );
  }
}
