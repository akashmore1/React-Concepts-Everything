import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//Here we will provide store at highest level to react app.
import { Provider } from "react-redux";

//Now we need to import store that we created.
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
