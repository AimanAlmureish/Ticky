import React, { Component } from "react";

export default class Item extends React.PureComponent {
  render() {
    return (
      <li id={this.props.id}>
        {this.props.title}
        <button onClick={() => this.props.remove(this.props.id)}>Delete</button>
        <button onClick={() => this.props.handleClick(this.props.id)}>
          Update
        </button>
      </li>
    );
  }
}
