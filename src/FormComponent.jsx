import React from "react";

const FormComponent = props => {
  return (
    <fieldset>
      <legend>New User</legend>
      <form autoComplete="off">
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
        <button onClick={props.handleSubmit}>Save</button>
        <button onClick={props.handleCancle}>Cancel</button>
      </form>
    </fieldset>
  );
};

export default FormComponent;
