import React from "react";

import Form from "../ui/Form";
import "./AddUser.css";

const AddUser = ({ setUsers, users }) => {
  return (
    <section className="add-user__section">
      <div className="add-user__card">
        <Form setUsers={setUsers} users={users} showButtons={true}></Form>
      </div>
    </section>
  );
};

export default AddUser;
