import React from "react";
import Item from "./Item";
export default class List extends React.PureComponent {
  render() {
    return this.props.items.map(item => (
      <Item
        handleClick={this.props.handleClick}
        title={item.title}
        id={item.id}
        key={item.id}
        remove={this.props.remove}
      />
    ));
  }
}
