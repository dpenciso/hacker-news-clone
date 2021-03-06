import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
