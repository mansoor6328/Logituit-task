import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);