import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React Router v5 doesn't work with React 18 StrictMode.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
