import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./component/Context";

// import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
);
