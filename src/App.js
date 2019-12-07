import React from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import List from "./List";

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      id: "",
      items: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = id => {
    let choosenOne = this.state.items.find(item => item.id === id);
    this.setState({
      title: choosenOne.title,
      date: choosenOne.date,
      id: choosenOne.id
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      if (this.state.id != "") {
        let obj = {
          title: this.state.title,
          date: this.state.date
        };
        this.setState({
          items: this.state.items.map(element => {
            if (element.id === this.state.id) {
              obj.id = this.state.id;
              return obj;
            }
            return element;
          }),
          id: "",
          title: "",
          date: ""
        });
      } else {
        let copy = {
          title: this.state.title,
          date: this.state.date,
          id: Date.now()
        };

        this.setState({
          items: [...this.state.items, copy],
          title: "",
          date: ""
        });
      }
    }
  };
  remove = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id),
      id: "",
      title: "",
      date: ""
    });
  };
  render() {
    return (
      <div className="App">
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          date={this.state.date}
        />

        <List
          remove={this.remove}
          items={this.state.items}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
