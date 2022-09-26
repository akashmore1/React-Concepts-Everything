import React from "react";

import "./ShowUser.css";

const ShowUser = ({ users }) => {
  const rows = users.map((user) => {
    return (
      <>
        <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>
            <button className="btn btn__table">Update</button>
          </td>
          <td>
            <button className="btn btn__table">Delete</button>
          </td>
        </tr>
        <div className="line"></div>
      </>
    );
  });

  return (
    <section className="show-user__section">
      <div className="show-user__card">
        <table cellspacing="0" cellpadding="0">
          <thead>
            <tr className="trr">
              <th>Name</th>
              <th>Age</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <div className="line"></div>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </section>
  );
};

export default ShowUser;
