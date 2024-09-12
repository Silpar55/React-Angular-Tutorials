import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"; // Import your styles if you have any

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Make sure this ID matches with the one in your HTML file
);
