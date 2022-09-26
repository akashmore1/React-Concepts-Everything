import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <div>
        <label for="name" className="form__label">
          Name
        </label>
        <input type="text" id="name" name="name"></input>
      </div>
      <div>
        <label for="age" className="form__label">
          Age
        </label>
        <input type="number" id="age" name="age"></input>
      </div>
    </form>
  );
};

export default Form;
