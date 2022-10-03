import React, { useState } from "react";

import UpdateModal from "../UpdateModal/UpdateModal";
import "./ShowUser.css";

const ShowUser = ({ users, setUsers }) => {
  const [isUpdateModalShown, setIsUpdateModalShown] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const rows = users.map((user) => {
    const onDeleteUser = () => {
      const updatedUsers = users.filter((e) => {
        return e.id !== user.id;
      });
      setUsers(updatedUsers);
    };

    const onUpdateUser = () => {
      const userObj = {
        id: user.id,
        name: user.name,
        age: user.age,
      };
      console.log("userrrr", userObj);
      setIsUpdateModalShown(true);
      setSelectedUser(userObj);
    };

    return (
      <>
        <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>
            <button className="btn btn__table" onClick={onUpdateUser}>
              Update
            </button>
          </td>
          <td>
            <button className="btn btn__table" onClick={onDeleteUser}>
              Delete
            </button>
          </td>
        </tr>
        <div className="line"></div>
      </>
    );
  });

  return (
    <>
      {isUpdateModalShown && (
        <UpdateModal
          setIsUpdateModalShown={setIsUpdateModalShown}
          user={selectedUser}
          users={users}
          setUsers={setUsers}
        />
      )}
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
    </>
  );
};

export default ShowUser;
