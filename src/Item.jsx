import React from "react";

export default class Item extends React.Component {
  shouldComponentUpdate(nextprops, nextstates) {
    if (nextprops.title !== this.props.title) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <li id={this.props.id}>
        {this.props.title}
        <button
          className="deleteBtn"
          onClick={() => this.props.remove(this.props.id)}
        >
          Delete
        </button>
        <button onClick={() => this.props.handleClick(this.props.id)}>
          Update
        </button>
      </li>
    );
  }
}
