import React, { useState } from "react";
import "./Form.css";

const Form = ({ setUsers, users, showButtons }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const user = [];

  const onSaveUser = (e) => {
    e.preventDefault();
    user.push({ name: name, age: age, id: Math.floor(Math.random() * 10000) });
    setUsers([...users, ...user]);
    setName("");
    setAge("");
  };

  const onCancelUser = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
  };

  return (
    <form>
      <div>
        <label for="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label for="age" className="form__label">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
      </div>
      {showButtons && (
        <div>
          <button
            className="btn"
            onClick={onSaveUser}
            disabled={!name || !age || age < 0}
          >
            Save
          </button>
          <button className="btn" onClick={onCancelUser}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
