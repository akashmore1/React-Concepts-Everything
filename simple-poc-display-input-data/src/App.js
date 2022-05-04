import React from "react";
import RootComponent from "./components/RootComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  );
}

export default App;
