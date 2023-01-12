import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import './assets/stylesheet/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/creabl_project'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
