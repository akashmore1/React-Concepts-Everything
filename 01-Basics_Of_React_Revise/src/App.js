import React from "react";

import Header from "./components/Header/Header";
import AddUser from "./components/AddUser/AddUser";
import ShowUser from "./components/ShowUser/ShowUser";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <section className="body__section">
        <AddUser />
        <ShowUser />
      </section>
    </div>
  );
}

export default App;
