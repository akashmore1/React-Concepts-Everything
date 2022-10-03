import React from "react";

import "./UpdateModal.css";

const UpdateModal = ({ setIsUpdateModalShown }) => {
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
        <div className="card__form">asxa</div>
        <div className="card__action">axxqa</div>
      </div>
    </>
  );
};

export default UpdateModal;
