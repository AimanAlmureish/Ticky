import React from "react";
import "./App.css";
import FormComponent from "./FormComponent";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
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
      </div>
    );
  }
}
