import React from "react";
import Item from "./Item";
export default class List extends React.PureComponent {
  //   shouldComponentUpdate(nextprops, nextstates) {
  //     if (nextprops.items === this.props.items) {
  //       return false;
  //     }
  //     return true;
  //   }
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
