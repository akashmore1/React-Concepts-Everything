import React, { useState } from "react";

import Header from "./components/Header/Header";
import AddUser from "./components/AddUser/AddUser";
import ShowUser from "./components/ShowUser/ShowUser";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const isUserTableShown = users.length !== 0;
  return (
    <div>
      <Header />
      <section className="body__section">
        <AddUser setUsers={setUsers} users={users} />
        {isUserTableShown && <ShowUser users={users} setUsers={setUsers} />}
      </section>
    </div>
  );
}

export default App;
