import React, { useState } from "react";

import "./UpdateModal.css";

const UpdateModal = ({ setIsUpdateModalShown, user, users, setUsers }) => {
  const [name, setName] = useState(user.name || "");
  const [age, setAge] = useState(user.age || "");

  console.log("user", user);

  const onUpdate = () => {
    users.forEach((e) => {
      if (e.id === user.id) {
        e.name = name;
        e.age = age;
      }
    });

    setUsers(users);
    setIsUpdateModalShown(false);
  };

  return (
    <>
      <div
        className="backdrop"
        onClick={() => {
          setIsUpdateModalShown(false);
        }}
      ></div>
      <div className="card">
        <div className="card__header">
          <div className="card-header__title">Update</div>
          <div
            className="card-header__close"
            onClick={() => {
              setIsUpdateModalShown(false);
            }}
          >
            X
          </div>
        </div>
        <div className="card__form">
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
          </form>
        </div>
        <div className="card__action">
          <button
            className="btn"
            onClick={onUpdate}
            disabled={!name || !age || age < 0}
          >
            Update
          </button>
          <button
            className="btn"
            onClick={() => {
              setIsUpdateModalShown(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
