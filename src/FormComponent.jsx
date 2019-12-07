import React from "react";

const FormComponent = props => {
  return (
    <fieldset>
      <legend>New User</legend>
      <form onSubmit={props.handleSubmit} autoComplete="off">
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={props.handleChange}
          placeholder="Title"
        />
        <input
          type="date"
          name="date"
          value={props.date}
          onChange={props.handleChange}
          placeholder="Date"
        />
        <button>Save</button>
      </form>
    </fieldset>
  );
};

export default FormComponent;
